// Exam room, drill room, and the notebook's error patterns.
//
// This module owns its own storage keys and never touches the practice
// records: a timed paper is an assessment, not a learning moment, and mixing
// the two would corrupt the "explored / on my own" counts.

import {
  newExamSession, remainingSeconds, isExpired, recordVisit, setAnswer, toggleFlag,
  dueCheckpoint, gradeExam, debriefLine, EXAM_MINUTES,
} from './exam-session.js';
import { metricsFor, clockTextSafe } from './pacing.js';
import { makeDrill, gradeDrill, drillVerdict } from './mental-math.js';
import { ERROR_TYPES, ERROR_KEYS, classifyHint, errorSummary } from './error-log.js';
import { distractorsByProblem } from './distractors.js';

const KEYS = Object.freeze({
  exam: 'pingping-amc8-exam-v1',
  exams: 'pingping-amc8-exams-v1',
  drills: 'pingping-amc8-drills-v1',
  errors: 'pingping-amc8-errors-v1',
});

function readJson(storage, key, fallback) {
  try {
    const raw = storage?.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch { return fallback; }
}

function writeJson(storage, key, value) {
  try { storage?.setItem(key, JSON.stringify(value)); return true; }
  catch { return false; }
}

// ---------------------------------------------------------------------------
// Small shared store so the notebook and the exam room agree on history.
// ---------------------------------------------------------------------------

export function createExamStore(storage) {
  return {
    get activeSession() {
      const s = readJson(storage, KEYS.exam, null);
      if (!s || !Array.isArray(s.ids) || !s.ids.length) return null;
      if (s.submittedAt) return null;
      return s;
    },
    saveActiveSession(session) { writeJson(storage, KEYS.exam, session); },
    clearActiveSession() { try { storage?.removeItem(KEYS.exam); } catch { /* session only */ } },
    get examHistory() {
      const list = readJson(storage, KEYS.exams, []);
      return Array.isArray(list) ? list.slice(-40) : [];
    },
    addExamResult(result) {
      const list = this.examHistory;
      list.push(result);
      writeJson(storage, KEYS.exams, list.slice(-40));
    },
    get drillHistory() {
      const list = readJson(storage, KEYS.drills, []);
      return Array.isArray(list) ? list.slice(-60) : [];
    },
    addDrillResult(result) {
      const list = this.drillHistory;
      list.push(result);
      writeJson(storage, KEYS.drills, list.slice(-60));
    },
    get diagnoses() {
      const list = readJson(storage, KEYS.errors, []);
      return Array.isArray(list) ? list.slice(-300) : [];
    },
    addDiagnosis(entry) {
      if (!entry || !Object.hasOwn(ERROR_TYPES, entry.type)) return null;
      const list = this.diagnoses;
      const record = {
        problem: entry.problem, type: entry.type, at: entry.at || new Date().toISOString(),
      };
      list.push(record);
      writeJson(storage, KEYS.errors, list.slice(-300));
      return record;
    },
  };
}

// ---------------------------------------------------------------------------
// Factory: everything below is wired to the page through explicit deps.
// ---------------------------------------------------------------------------

export function createExamRoom({ problems, $, escape, icon, store, toast, onProgress }) {
  let session = null;
  let ticker = null;
  let selectedYear = null;
  let perProblemTimer = null;
  let drill = null;
  let drillStartedAt = 0;
  let drillTicker = null;
  let lastCheckpointKey = null;

  const idsOfYear = (year) => Object.values(problems)
    .filter((p) => p.year === Number(year)).sort((a, b) => a.number - b.number).map((p) => p.id);
  const completeYears = () => {
    const years = new Set(Object.values(problems).map((p) => p.year));
    return [...years].sort((a, b) => b - a).filter((year) => idsOfYear(year).length === 25);
  };

  // ---- setup -------------------------------------------------------------
  function renderSetup() {
    const active = store.activeSession;
    $('#exam-room').hidden = true;
    $('#exam-result').hidden = true;
    $('#exam-setup').hidden = Boolean(active);
    if (active) { session = active; renderRoom(); startTicker(); return; }
    const years = completeYears();
    $('#exam-year-list').innerHTML = years.map((year) => {
      const done = store.examHistory.filter((r) => r.year === year);
      const best = done.length ? Math.max(...done.map((r) => r.correct)) : null;
      return '<button type="button" class="exam-year' + (selectedYear === year ? ' is-selected' : '') + '" data-exam-year="' + year + '">' +
        '<strong>' + year + '</strong><span>AMC 8 · 25 problems</span>' +
        '<small>' + (best === null ? 'Not attempted yet' : 'Best: ' + best + ' / 25') + '</small></button>';
    }).join('');
    $('#exam-start-row').hidden = selectedYear === null;
    if (selectedYear !== null) {
      $('#exam-pick-name').textContent = selectedYear + ' AMC 8';
      $('#exam-pick-detail').textContent = 'Twenty-five problems, forty minutes, no hints. The clock keeps running if you close the page.';
    }
  }

  function begin(year) {
    const ids = idsOfYear(year);
    if (ids.length !== 25) throw new Error('That paper is incomplete.');
    session = newExamSession(ids, { minutes: EXAM_MINUTES });
    session.year = Number(year);
    store.saveActiveSession(session);
    renderRoom();
    startTicker();
    onProgress?.();
  }

  // ---- room --------------------------------------------------------------
  function currentIndex() { return session ? session.current : 0; }
  function currentId() { return session ? session.ids[currentIndex()] : null; }

  function renderRoom() {
    if (!session) return;
    $('#exam-setup').hidden = true;
    $('#exam-result').hidden = true;
    $('#exam-room').hidden = false;
    renderQuestion();
    renderGrid();
    renderClock();
    renderCheckpoint();
  }

  function renderQuestion() {
    const id = currentId();
    const p = problems[id];
    session = recordVisit(session, id);
    $('#exam-name-live').textContent = p.year + ' AMC 8';
    $('#exam-number-live').textContent = 'PROBLEM ' + p.number;
    $('#exam-prompt').innerHTML = '<strong class="exam-number">' + p.number + '.</strong> ' + escape(p.prompt);
    const data = $('#exam-data');
    data.className = p.expression ? 'practice-expression' : 'problem-data';
    if (p.expression) data.innerHTML = '<span class="math-line">' + escape(p.expression) + '</span>';
    else if (p.matrix) data.innerHTML = '<table class="number-array"><tbody>' + p.matrix.map((row) => '<tr>' + row.map((v) => '<td>' + v + '</td>').join('') + '</tr>').join('') + '</tbody></table>';
    else if (p.diagram) data.innerHTML = '<img src="' + escape(p.diagram) + '" alt="Diagram for problem ' + p.number + '" class="problem-figure" tabindex="0" role="button" aria-label="Enlarge or shrink the diagram">';
    else if (p.facts?.length) data.innerHTML = '<ol class="shape-facts" type="I">' + p.facts.map((f) => '<li>' + escape(f) + '</li>').join('') + '</ol>';
    else data.innerHTML = '';
    data.hidden = !data.innerHTML;

    const chosen = session.answers[id];
    $('#exam-options').classList.toggle('long-options', p.options.some((o) => o.label.length > 8));
    $('#exam-options').innerHTML = p.options.map((option) =>
      '<label><input type="radio" name="exam-answer" value="' + escape(option.value) + '"' +
      (chosen !== undefined && String(chosen) === String(option.value) ? ' checked' : '') + '>' +
      '<span><small>(' + option.letter + ')</small>' + escape(option.label) + '</span></label>').join('');

    $('#exam-flag').setAttribute('aria-pressed', String(Boolean(session.flags[id])));
    $('#exam-flag').textContent = session.flags[id] ? 'Flagged' : 'Flag for later';
    $('#exam-prev').disabled = currentIndex() === 0;
    $('#exam-next').textContent = currentIndex() === session.ids.length - 1 ? 'Back to question 1' : 'Next problem';
    renderClock();
  }

  function renderGrid() {
    if (!session) return;
    $('#exam-grid').innerHTML = session.ids.map((id, index) => {
      const answered = session.answers[id] !== undefined;
      const classes = ['exam-cell'];
      classes.push(answered ? 'is-answered' : 'is-empty');
      if (session.flags[id]) classes.push('is-flag');
      if (index === currentIndex()) classes.push('is-current');
      return '<button type="button" class="' + classes.join(' ') + '" data-exam-jump="' + index + '" aria-label="Question ' + problems[id].number + (answered ? ', answered' : ', empty') + '">' + problems[id].number + '</button>';
    }).join('');
    const answered = session.ids.filter((id) => session.answers[id] !== undefined).length;
    $('#exam-answered-count').textContent = answered + ' of ' + session.ids.length + ' answered';
  }

  function renderClock() {
    if (!session) return;
    const left = remainingSeconds(session, Date.now());
    $('#exam-clock').textContent = clockTextSafe(left);
    $('#exam-clock').classList.toggle('is-low', left <= 300);
    const pct = 100 - (left / (session.minutes * 60)) * 100;
    $('#exam-progress-fill').style.width = Math.min(100, Math.max(0, pct)) + '%';
  }

  function renderCheckpoint() {
    if (!session) return;
    const due = dueCheckpoint(session, problems, Date.now());
    if (!due) return;
    const key = due.atMinute + ':' + due.behind.length;
    if (key === lastCheckpointKey) return;
    lastCheckpointKey = key;
    const node = $('#exam-checkpoint');
    node.hidden = false;
    node.innerHTML = '<strong>' + due.atMinute + ' minutes gone.</strong> ' + escape(due.note) +
      (due.behind.length ? ' Still empty: ' + due.behind.slice(0, 12).join(', ') + (due.behind.length > 12 ? '…' : '') + '.' : ' Nothing behind — keep going.');
  }

  function startTicker() {
    stopTicker();
    ticker = setInterval(() => {
      if (!session) return;
      renderClock();
      renderCheckpoint();
      if (isExpired(session, Date.now())) { stopTicker(); submitExam(true); }
    }, 1000);
  }
  function stopTicker() { if (ticker) { clearInterval(ticker); ticker = null; } }

  // ---- answers -----------------------------------------------------------
  function choose(value) {
    if (!session) return;
    setAnswer(session, currentId(), value);
    store.saveActiveSession(session);
    renderGrid();
    renderClock();
  }

  function jump(index) {
    if (!session) return;
    session.current = Math.max(0, Math.min(session.ids.length - 1, index));
    store.saveActiveSession(session);
    renderQuestion();
    renderGrid();
  }

  function flag() {
    if (!session) return;
    toggleFlag(session, currentId());
    store.saveActiveSession(session);
    renderQuestion();
    renderGrid();
  }

  // ---- submit ------------------------------------------------------------
  function submitExam(auto = false) {
    if (!session) return null;
    stopTicker();
    session.submittedAt = Date.now();
    const report = gradeExam(session, problems);
    const result = {
      year: session.year,
      at: new Date(session.submittedAt).toISOString(),
      startedAt: new Date(session.startedAt).toISOString(),
      correct: report.correct,
      wrong: report.wrong,
      blank: report.blank,
      total: report.total,
      percent: report.percent,
      elapsedSeconds: report.elapsedSeconds,
      auto,
      rows: report.rows.map((row) => ({ number: row.number, chosen: row.chosen, answer: row.answer, correct: row.correct, blank: row.blank, topic: row.topic })),
      byTopic: report.byTopic,
    };
    store.addExamResult(result);
    store.clearActiveSession();
    session = null;
    lastCheckpointKey = null;
    renderResult(result);
    onProgress?.();
    return result;
  }

  function renderResult(result) {
    $('#exam-setup').hidden = true;
    $('#exam-room').hidden = true;
    const node = $('#exam-result');
    node.hidden = false;
    const minutes = Math.floor(result.elapsedSeconds / 60);
    const seconds = result.elapsedSeconds % 60;
    const topicRows = Object.entries(result.byTopic)
      .sort((a, b) => (b[1].total ? b[1].correct / b[1].total : 0) - (a[1].total ? a[1].correct / a[1].total : 0))
      .map(([topic, stat]) => {
        const pct = Math.round((stat.correct / stat.total) * 100);
        return '<div class="report-topic"><span>' + escape(topic) + '</span><div class="report-bar"><i style="width:' + pct + '%"></i></div><small>' + stat.correct + '/' + stat.total + '</small></div>';
      }).join('');
    const reviewRows = result.rows.filter((r) => !r.correct).map((r) => {
      const state = r.blank ? 'left empty' : 'you chose ' + (r.chosen ?? '—');
      return '<div class="report-row"><span class="report-num">' + r.number + '</span><span class="report-topic-name">' + escape(String(r.topic).split('·')[0].trim()) + '</span><span class="report-state">' + escape(state) + ' · answer ' + escape(r.answer) + '</span></div>';
    }).join('');
    node.innerHTML =
      '<div class="panel result-panel">' +
      '<p class="eyebrow">' + result.year + ' AMC 8' + (result.auto ? ' · CLOCK EXPIRED' : '') + '</p>' +
      '<h2 class="result-score">' + result.correct + '<span>/25</span></h2>' +
      '<p class="result-debrief">' + escape(debriefLine({ correct: result.correct, wrong: result.wrong, blank: result.blank })) + '</p>' +
      '<div class="result-facts"><span><strong>' + result.correct + '</strong> correct</span><span><strong>' + result.wrong + '</strong> wrong</span><span><strong>' + result.blank + '</strong> blank</span><span><strong>' + minutes + ':' + String(seconds).padStart(2, '0') + '</strong> used</span></div>' +
      '<h3 class="panel-title">Where the points went</h3><div class="report-topics">' + topicRows + '</div>' +
      (reviewRows ? '<h3 class="panel-title">Every miss, in order</h3><div class="report-rows">' + reviewRows + '</div>' : '<p class="panel-note">Nothing missed. Try a harder paper next.</p>') +
      '<div class="result-actions"><button class="button button-primary" id="exam-again">Sit this paper again</button><button class="text-button" data-view="notebook">Open my notebook</button></div>' +
      '<p class="panel-note">Scoring is 1 point per correct answer with no penalty for a blank — exactly like the real AMC 8. A blank and a wrong answer cost the same, which is why guessing at the end is free.</p>' +
      '</div>';
    node.querySelector('#exam-again')?.addEventListener('click', () => {
      selectedYear = result.year;
      node.hidden = true;
      $('#exam-setup').hidden = false;
      renderSetup();
    });
  }

  // ---- per-problem timing for pacing -------------------------------------
  function markProblemShown() { perProblemTimer = Date.now(); }
  function consumeProblemTime(number) {
    if (!perProblemTimer) return null;
    const seconds = Math.round((Date.now() - perProblemTimer) / 1000);
    perProblemTimer = null;
    return { number, seconds };
  }

  // ---- drills ------------------------------------------------------------
  function renderDrillHome() {
    $('#drill-home').hidden = false;
    $('#drill-live').hidden = true;
    $('#drill-result').hidden = true;
    const history = store.drillHistory;
    const best = history.length ? Math.min(...history.filter((r) => r.correct === r.total).map((r) => r.seconds)) : null;
    const node = $('#drill-home');
    const existing = node.querySelector('.drill-history');
    if (existing) existing.remove();
    if (history.length) {
      const rows = history.slice(-6).reverse().map((r) =>
        '<div class="history-row"><span>' + r.correct + ' of ' + r.total + ' correct</span><small>' + clockTextSafe(r.seconds) + ' · ' + new Date(r.at).toLocaleDateString('en', { month: 'short', day: 'numeric' }) + '</small></div>').join('');
      node.insertAdjacentHTML('beforeend', '<div class="drill-history"><h3>Recent drills</h3>' + rows + (best ? '<p class="panel-note">Your best perfect run: ' + clockTextSafe(best) + '.</p>' : '') + '</div>');
    }
  }

  function startDrill() {
    drill = makeDrill({ count: 10, seed: Date.now() });
    drillStartedAt = Date.now();
    $('#drill-home').hidden = true;
    $('#drill-result').hidden = true;
    $('#drill-live').hidden = false;
    $('#drill-questions').innerHTML = drill.questions.map((q, i) =>
      '<label class="drill-q"><span class="drill-prompt">' + (i + 1) + '. ' + escape(q.prompt) + '</span>' +
      '<input type="text" inputmode="numeric" autocomplete="off" data-drill="' + q.id + '" aria-label="Answer for ' + escape(q.prompt) + '"></label>').join('');
    $('#drill-questions').querySelector('input')?.focus();
    if (drillTicker) clearInterval(drillTicker);
    drillTicker = setInterval(() => {
      const seconds = Math.round((Date.now() - drillStartedAt) / 1000);
      $('#drill-clock').textContent = clockTextSafe(seconds);
    }, 250);
    $('#drill-progress').textContent = '0 of 10';
  }

  function updateDrillProgress() {
    const filled = [...$('#drill-questions').querySelectorAll('input')].filter((input) => input.value.trim() !== '').length;
    $('#drill-progress').textContent = filled + ' of 10';
  }

  function submitDrill() {
    if (!drill) return null;
    const seconds = Math.round((Date.now() - drillStartedAt) / 1000);
    if (drillTicker) { clearInterval(drillTicker); drillTicker = null; }
    const answers = {};
    for (const input of $('#drill-questions').querySelectorAll('input')) answers[input.dataset.drill] = input.value;
    const graded = gradeDrill(drill, answers);
    const result = { at: new Date().toISOString(), seconds, correct: graded.correct, total: graded.total, seed: drill.seed };
    store.addDrillResult(result);
    $('#drill-live').hidden = true;
    const node = $('#drill-result');
    node.hidden = false;
    node.innerHTML = '<div class="panel"><p class="eyebrow">DRILL RESULT</p>' +
      '<h2 class="result-score">' + graded.correct + '<span>/10</span></h2>' +
      '<p class="result-debrief">' + escape(drillVerdict(seconds, graded.correct, graded.total)) + '</p>' +
      '<div class="result-facts"><span><strong>' + clockTextSafe(seconds) + '</strong> elapsed</span><span><strong>' + (seconds / 10).toFixed(1) + 's</strong> per question</span></div>' +
      '<div class="report-rows">' + graded.rows.map((row, i) =>
        '<div class="report-row"><span class="report-num">' + (i + 1) + '</span><span class="report-topic-name">' + escape(row.prompt) + '</span><span class="report-state">' + (row.correct ? '✓ ' + row.answer : 'you wrote ' + (row.given ?? '—') + ' · answer ' + row.answer) + '</span></div>').join('') + '</div>' +
      '<div class="result-actions"><button class="button button-primary" id="drill-again">Another ten</button></div></div>';
    node.querySelector('#drill-again')?.addEventListener('click', () => { node.hidden = true; startDrill(); });
    drill = null;
    onProgress?.();
    return result;
  }

  function cancelDrill() {
    if (drillTicker) { clearInterval(drillTicker); drillTicker = null; }
    drill = null;
    $('#drill-live').hidden = true;
    $('#drill-result').hidden = true;
    $('#drill-home').hidden = false;
  }

  // ---- error patterns in the notebook ------------------------------------
  function renderNotebookExtras() {
    const diagnoses = store.diagnoses;
    const summary = errorSummary(diagnoses);
    const node = $('#error-patterns');
    if (!diagnoses.length) { node.hidden = true; }
    else {
      node.hidden = false;
      node.innerHTML = '<h3>Why your misses happen</h3><p class="coaching-history-note">' + escape(summary.headline) + '</p>' +
        summary.ranked.map((row) => '<div class="error-row"><span class="error-dot" style="background:' + row.color + '"></span><span class="error-name">' + escape(row.label) + '</span><span class="error-count">' + row.count + '</span></div>').join('');
    }
    const exams = store.examHistory;
    const examNode = $('#exam-history');
    if (!exams.length) { examNode.hidden = true; return; }
    examNode.hidden = false;
    examNode.innerHTML = '<h3>Timed papers</h3><p class="coaching-history-note">Scores from the exam room. A blank is worth the same as a wrong answer.</p>' +
      exams.slice(-8).reverse().map((r) => '<div class="history-row"><span>' + r.year + ' AMC 8 · ' + r.correct + '/25' + (r.auto ? ' (clock expired)' : '') + '</span><small>' + Math.round(r.elapsedSeconds / 60) + ' min · ' + new Date(r.at).toLocaleDateString('en', { month: 'short', day: 'numeric' }) + '</small></div>').join('');
  }

  // ---- public surface ----------------------------------------------------
  return {
    keys: KEYS,
    renderSetup,
    begin,
    submitExam,
    jump,
    choose,
    flag,
    updateDrillProgress,
    renderDrillHome,
    startDrill,
    submitDrill,
    cancelDrill,
    renderNotebookExtras,
    markProblemShown,
    consumeProblemTime,
    get active() { return session; },
    get selectedYear() { return selectedYear; },
    selectYear(year) { selectedYear = Number(year); renderSetup(); },
    get drillActive() { return Boolean(drill); },
  };
}

export { KEYS as examStorageKeys };
