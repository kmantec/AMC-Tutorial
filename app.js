import { recommendedVideos } from './videos.js';
const YEARS = [2026, 2025, 2024, 2023, 2022, 2020, 2019];
const STORAGE_KEY = 'pingping-amc8-practice-v1';
const source = (year) => `https://artofproblemsolving.com/wiki/index.php?title=${year}_AMC_8`;
const $ = (selector) => document.querySelector(selector);
const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
let storageAvailable = true;
let records = [];
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  if (Array.isArray(saved)) records = saved.filter((r) => r && r.problem === '2026-1' && ['correct', 'incorrect', 'revealed', 'video'].includes(r.result) && Number.isFinite(r.hints) && typeof r.at === 'string' && Number.isFinite(Date.parse(r.at))).slice(-200);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
} catch { storageAvailable = false; }
let session = { hints: 0, revealed: false, wrong: false, submitted: false, video: false };
let toastTimer;
const hints = [
  'Look at the signs. What pattern repeats every three terms?',
  'Try grouping the expression into blocks of three. Keep each number’s sign attached to it.',
  'The first block is 1 + 2 − 3 = 0. Now simplify the next three blocks.'
];

$('#today-date').textContent = new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date()).toUpperCase();
$('#home-years').innerHTML = YEARS.map((year) => `<a class="year-card" href="${source(year)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${year} AMC 8 on AoPS"><strong>${year}</strong><small>25 problems</small>${icon('external')}</a>`).join('');
$('#paper-grid').innerHTML = YEARS.map((year) => `<article class="paper-card"><div class="paper-year"><h2>${year}</h2><span>AMC 8</span></div><p>25 original problems<br>Source solutions on AoPS</p><a href="${source(year)}" target="_blank" rel="noopener noreferrer">Explore this exam ${icon('external')}</a>${year === 2026 ? '<button class="text-button" data-action="practice">Try our Problem 1 guide</button>' : ''}</article>`).join('');

function navigate(view, focus = false) {
  if (!['home', 'papers', 'notebook', 'coach'].includes(view)) view = 'home';
  document.querySelectorAll('.view').forEach((node) => { node.hidden = node.id !== `view-${view}`; });
  document.querySelectorAll('.nav-item').forEach((node) => {
    const active = node.dataset.view === view;
    node.classList.toggle('active', active);
    if (active) node.setAttribute('aria-current', 'page'); else node.removeAttribute('aria-current');
  });
  if (location.hash !== `#${view}`) history.replaceState(null, '', `#${view}`);
  if (view === 'notebook') renderProgress();
  if (focus) { $('#main').focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: 'instant' }); }
  return { view };
}

function openPractice() {
  resetPractice();
  if (!$('#practice-dialog').open) $('#practice-dialog').showModal();
  document.body.classList.add('dialog-open');
  return { problem: '2026-1', opened: true };
}

function resetPractice() {
  stopVideo();
  $('#video-section').hidden = true;
  $('#video-button').setAttribute('aria-expanded', 'false');
  session = { hints: 0, revealed: false, wrong: false, submitted: false, video: false };
  $('#answer-form').reset();
  $('#answer-form').querySelectorAll('input,button').forEach((node) => { node.disabled = false; });
  $('#answer-feedback').hidden = true;
  $('#hint-content').hidden = true;
  $('#hint-button').disabled = false;
  $('#hint-button').innerHTML = `${icon('spark')}Give me a hint`;
  $('#before-solution').hidden = false;
  $('#solution-content').hidden = true;
  $('#reveal-button').disabled = false;
  $('#practice-dialog').scrollTop = 0;
}

function showHint() {
  if (session.hints >= hints.length) return { hint: hints.at(-1), count: hints.length };
  const content = hints[session.hints++];
  $('#hint-content').innerHTML = `<strong>HINT ${session.hints} OF ${hints.length}</strong>${content}`;
  $('#hint-content').hidden = false;
  $('#hint-button').innerHTML = `${icon('spark')}${session.hints === hints.length ? 'All hints shown' : 'Another hint'}`;
  $('#hint-button').disabled = session.hints === hints.length;
  return { hint: content, count: session.hints };
}

function persist(result) {
  records.push({ problem: '2026-1', result, hints: session.hints, independent: result === 'correct' && session.hints === 0 && !session.revealed && !session.wrong && !session.video, at: new Date().toISOString() });
  records = records.slice(-200);
  if (storageAvailable) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(records)); }
    catch { storageAvailable = false; toast('This browser could not save your record. Your practice is still available in this session.'); }
  }
  renderProgress();
}

function showSolution(recordView = true) {
  if (recordView && !session.revealed && !session.submitted) {
    persist('revealed');
    $('#answer-feedback').textContent = 'Solution reviewed. Come back later and try it without the steps.';
    $('#answer-feedback').className = 'feedback';
    $('#answer-feedback').hidden = false;
  }
  session.revealed = true;
  $('#before-solution').hidden = true;
  $('#solution-content').hidden = false;
  $('#reveal-button').disabled = true;
  return { solution: 'Group three terms at a time', answer: 18 };
}

function checkAnswer(answer) {
  if (!['18', '21', '24', '27', '30'].includes(String(answer))) throw new Error('Choose one of the five answer options.');
  if (session.submitted) throw new Error('This attempt is complete. Start a new attempt before submitting another answer.');
  const correct = Number(answer) === 18;
  const independent = correct && session.hints === 0 && !session.revealed && !session.wrong && !session.video;
  const feedback = $('#answer-feedback');
  feedback.hidden = false;
  feedback.className = `feedback${correct ? ' success' : ''}`;
  if (correct) {
    feedback.textContent = independent ? 'Correct — 18. You solved this attempt without hints.' : session.revealed ? 'Correct — 18. You have reviewed the solution; try it again later without the steps.' : 'Correct — 18. You worked through it. Revisit this problem later to try independently.';
    persist('correct');
    session.submitted = true;
    $('#answer-form').querySelectorAll('input,button').forEach((node) => { node.disabled = true; });
    showSolution(false);
  } else {
    session.wrong = true;
    feedback.textContent = 'Not quite yet. Recheck the signs and your calculation, then try again. A hint is here if you need one.';
    persist('incorrect');
  }
  return { correct, independent, answer: correct ? 18 : null };
}

function renderProgress() {
  const latest = records.at(-1);
  const explored = records.length ? 1 : 0;
  const independent = latest?.result === 'correct' && latest.independent === true ? 1 : 0;
  const revisit = explored - independent;
  $('#completed-count').textContent = String(explored);
  $('#independent-count').textContent = String(independent);
  $('#review-count').textContent = String(revisit);
  $('#progress-ring').style.background = explored ? 'conic-gradient(#8daaeb 0deg 360deg, #edf1f8 360deg)' : '';
  $('#progress-heading').textContent = explored ? (independent ? 'A good first step.' : 'An idea to revisit.') : 'A fresh page.';
  $('#progress-message').textContent = explored ? (independent ? 'You completed this attempt without hints. Keep explaining your thinking.' : 'Come back to this problem and see what you can do on your own.') : 'Your learning record begins with your first problem.';
  $('#storage-status').textContent = storageAvailable ? (explored ? 'Practice saved on this device' : 'Practice stays on this device') : 'Practice available for this session';
  $('#notebook-storage').textContent = storageAvailable ? 'This learning record is stored in this browser on this device.' : 'Saving is unavailable in this browser. This learning record will last only for the current session.';
  if (!explored) {
    $('#notebook-content').innerHTML = `<div class="empty-notebook">${icon('note')}<h2>Your progress starts here.</h2><p>Try your first problem to begin your learning record. You can return to tricky ideas here.</p><button class="button button-primary" data-action="practice">Start my first practice ${icon('arrow')}</button></div>`;
    return;
  }
  const resultText = (r) => r.result === 'video' ? 'Video walkthrough opened' : r.result === 'revealed' ? 'Solution reviewed' : r.result === 'incorrect' ? 'An attempt to learn from' : r.independent ? 'Correct · Without hints on this attempt' : 'Correct · With support on this attempt';
  const date = (at) => new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(new Date(at));
  $('#notebook-content').innerHTML = `<article class="notebook-card"><div><span class="eyebrow">2026 AMC 8 · PROBLEM 1</span><h2>Grouping & patterns</h2><p>${independent ? 'You solved your latest attempt without hints.' : 'Try again later without the hints or solution.'}</p><p>${records.length} ${records.length === 1 ? 'learning moment' : 'learning moments'} recorded</p></div><button class="button button-primary" data-action="practice">${independent ? 'Revisit this problem' : 'Try it again'} ${icon('arrow')}</button></article><section class="notebook-history"><h3>Your recent attempts</h3>${records.slice(-8).reverse().map((r) => `<div class="history-row"><span>${resultText(r)}</span><small>${date(r.at)}</small></div>`).join('')}</section>`;
}

function toast(message) {
  $('#toast').textContent = message;
  $('#toast').hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 5000);
}

function stopVideo() {
  $('#video-player').replaceChildren();
  $('#video-player-area').hidden = true;
}

function openVideoSection() {
  if (!$('#practice-dialog').open) throw new Error('Start the problem before opening a walkthrough.');
  $('#video-section').hidden = false;
  $('#video-button').setAttribute('aria-expanded', 'true');
  $('#video-section').scrollIntoView({ behavior: 'instant', block: 'start' });
  return { availableVideos: (recommendedVideos['2026-1'] || []).map((v) => ({ id: v.id, title: v.title, channel: v.channel })) };
}

function loadWalkthrough(videoId) {
  const video = (recommendedVideos['2026-1'] || []).find((v) => v.id === videoId);
  if (!video) throw new Error('Choose a reviewed walkthrough for this problem.');
  openVideoSection();
  stopVideo();
  if (!session.video && !session.submitted) { session.video = true; persist('video'); }
  const embed = new URL('https://www.youtube-nocookie.com/embed/' + video.id);
  embed.searchParams.set('playsinline', '1');
  embed.searchParams.set('rel', '0');
  embed.searchParams.set('autoplay', '0');
  embed.searchParams.set('start', String(video.startSeconds || 0));
  if (Number.isInteger(video.endSeconds)) embed.searchParams.set('end', String(video.endSeconds));
  const frame = document.createElement('iframe');
  frame.src = embed.href;
  frame.title = video.title + ' — ' + video.channel;
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  $('#video-player').append(frame);
  $('#video-player-area').hidden = false;
  $('#youtube-fallback').href = video.watchUrl;
  $('#playing-video-label').textContent = video.channel + ' · ' + video.segmentLabel;
  $('#video-review-note').textContent = video.reviewNote;
  $('#video-player-area').scrollIntoView({ behavior: 'instant', block: 'start' });
  return { id: video.id, embedUrl: embed.href, fallbackUrl: video.watchUrl, assistedAttempt: session.video };
}

function backToProblem() {
  stopVideo();
  $('#video-section').hidden = true;
  $('#video-button').setAttribute('aria-expanded', 'false');
  $('.problem-column').scrollIntoView({ behavior: 'instant', block: 'start' });
  $('#video-button').focus({ preventScroll: true });
  return { selectedAnswer: $('#answer-form input:checked')?.value || null, videoStopped: true };
}

const reviewedWalkthroughs = recommendedVideos['2026-1'] || [];
$('#video-button').hidden = reviewedWalkthroughs.length === 0;
for (const video of reviewedWalkthroughs) {
  const card = document.createElement('article');
  card.className = 'video-card';
  const kicker = document.createElement('span'); kicker.className = 'eyebrow'; kicker.textContent = 'COACH’S PICK · ' + video.segmentLabel;
  const title = document.createElement('h4'); title.textContent = video.title;
  const channel = document.createElement('p'); channel.className = 'video-channel'; channel.textContent = video.channel;
  const reason = document.createElement('p'); reason.textContent = video.reason;
  const actions = document.createElement('div'); actions.className = 'video-card-actions';
  const play = document.createElement('button'); play.className = 'button button-primary'; play.type = 'button'; play.textContent = 'Watch here'; play.addEventListener('click', () => loadWalkthrough(video.id));
  const link = document.createElement('a'); link.className = 'text-button'; link.href = video.watchUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Open on YouTube ↗';
  link.addEventListener('click', () => { if (!session.video && !session.submitted) { session.video = true; persist('video'); } });
  actions.append(play, link); card.append(kicker, title, channel, reason, actions); $('#video-recommendations').append(card);
}
$('#video-button').addEventListener('click', openVideoSection);
$('#back-to-problem').addEventListener('click', backToProblem);

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-view],[data-action]');
  if (!target) return;
  if (target.dataset.view) navigate(target.dataset.view, true);
  else if (target.dataset.action === 'practice') openPractice();
});
$('#answer-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const choice = new FormData(event.currentTarget).get('answer');
  if (choice) checkAnswer(choice);
});
$('#close-practice').addEventListener('click', () => $('#practice-dialog').close());
$('#practice-dialog').addEventListener('close', () => { stopVideo(); document.body.classList.remove('dialog-open'); });
$('#hint-button').addEventListener('click', showHint);
$('#reveal-button').addEventListener('click', () => showSolution(true));
$('#retry-button').addEventListener('click', () => { resetPractice(); $('#answer-form input').focus({ preventScroll: true }); });
window.addEventListener('hashchange', () => { if (location.hash !== '#main') navigate(location.hash.slice(1), true); });
window.addEventListener('storage', (event) => {
  if (event.key !== STORAGE_KEY) return;
  try {
    const saved = JSON.parse(event.newValue || '[]');
    if (Array.isArray(saved)) records = saved.filter((r) => r && r.problem === '2026-1' && ['correct', 'incorrect', 'revealed', 'video'].includes(r.result) && Number.isFinite(r.hints) && typeof r.at === 'string' && Number.isFinite(Date.parse(r.at))).slice(-200);
    renderProgress();
  } catch { /* Preserve the current record if another tab writes invalid data. */ }
});
renderProgress();
navigate(location.hash.slice(1));

const modelContext = document.modelContext;
if (modelContext?.registerTool) {
  const lifecycle = new AbortController();
  const register = (tool) => {
    try { Promise.resolve(modelContext.registerTool(tool, { signal: lifecycle.signal })).catch(() => {}); } catch { /* Optional browser capability. */ }
  };
  register({ name: 'read_practice_progress', title: 'Read practice progress', description: 'Read the actual device-local practice record and current exercise state.', inputSchema: { type: 'object', properties: {}, additionalProperties: false }, annotations: { readOnlyHint: true }, execute: () => ({ reviewedProblemsAvailable: 1, examEditions: YEARS, records: records.map((r) => ({ ...r })), practiceOpen: $('#practice-dialog').open, submitted: session.submitted, selectedAnswer: $('#answer-form input:checked')?.value || null, videoUsed: session.video, videoOpen: !$('#video-section').hidden, activeEmbed: $('#video-player iframe')?.src || null }) });
  register({ name: 'start_practice_problem', title: 'Start AMC 8 Problem 1', description: 'Open a fresh attempt at the reviewed 2026 AMC 8 Problem 1. This resets any unfinished current attempt without submitting an answer.', inputSchema: { type: 'object', properties: { problemId: { type: 'string', enum: ['2026-1'] } }, required: ['problemId'], additionalProperties: false }, annotations: { readOnlyHint: false }, execute: (input) => { if (input?.problemId !== '2026-1') throw new Error('Only reviewed problem 2026-1 is available.'); return openPractice(); } });
  register({ name: 'submit_practice_answer', title: 'Submit a practice answer', description: 'Check the selected answer for the open practice problem and save the real attempt to the device-local notebook.', inputSchema: { type: 'object', properties: { answer: { type: 'integer', enum: [18, 21, 24, 27, 30] } }, required: ['answer'], additionalProperties: false }, annotations: { readOnlyHint: false }, execute: (input) => { if (!$('#practice-dialog').open) throw new Error('Start the practice problem first.'); if (session.submitted) throw new Error('This attempt is complete. Start a new attempt before submitting another answer.'); if (!Number.isInteger(input?.answer) || ![18, 21, 24, 27, 30].includes(input.answer)) throw new Error('Choose one of the five original answers.'); const choice = $(`#answer-form input[value="${input.answer}"]`); choice.checked = true; return checkAnswer(input.answer); } });
  register({ name: 'open_recommended_walkthrough', title: 'Open a reviewed video walkthrough', description: 'Load a reviewed YouTube explanation inside the current practice dialog. Records video support for an unfinished attempt. Playback begins only after the learner presses play.', inputSchema: { type: 'object', properties: { videoId: { type: 'string', enum: reviewedWalkthroughs.map((v) => v.id) } }, required: ['videoId'], additionalProperties: false }, annotations: { readOnlyHint: false }, execute: (input) => loadWalkthrough(input?.videoId) });
  register({ name: 'return_to_practice_problem', title: 'Return from video to the problem', description: 'Stop and remove the embedded video, return to the current question, and preserve the selected answer and attempt state.', inputSchema: { type: 'object', properties: {}, additionalProperties: false }, annotations: { readOnlyHint: false }, execute: () => { if (!$('#practice-dialog').open) throw new Error('No practice problem is open.'); return backToProblem(); } });
  window.addEventListener('pagehide', () => { stopVideo(); lifecycle.abort(); }, { once: true });
}
