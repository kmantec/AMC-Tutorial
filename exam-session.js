// Timed exam sessions for Pingping's AMC 8 training room.
// Pure logic only: no DOM, no storage. app.js owns both.

export const EXAM_MINUTES = 40;
export const EXAM_SECONDS = EXAM_MINUTES * 60;

// Checkpoint plan: at each elapsed minute the learner should be at or past
// this problem number. Based on the real pacing structure of AMC 8:
// 1-10 fast, 11-20 steady, 21-25 expensive.
export const CHECKPOINTS = Object.freeze([
  { atMinute: 8, throughProblem: 10, note: 'Problems 1–10 should be done. They are the cheapest points on the paper.' },
  { atMinute: 20, throughProblem: 17, note: 'Problem 17 should be in reach. Do not let one question hold you hostage.' },
  { atMinute: 32, throughProblem: 23, note: 'Problem 23 should be in reach. Guard the last eight minutes for 24 and 25.' },
]);

// Marking scale. AMC 8 gives 1 point per correct answer and no penalty for a
// blank, so the only decision left is whether to leave a question empty.
export const HONOR_ROLL = 15;

export function newExamSession(problemIds, { startedAt = Date.now(), minutes = EXAM_MINUTES } = {}) {
  if (!Array.isArray(problemIds) || problemIds.length === 0) throw new Error('An exam needs at least one problem.');
  return {
    ids: [...problemIds],
    startedAt,
    endsAt: startedAt + minutes * 60 * 1000,
    minutes,
    answers: {},
    flags: {},
    visited: {},
    current: 0,
    submittedAt: null,
    checkpointIndex: 0,
  };
}

export function remainingSeconds(session, now = Date.now()) {
  if (!session || session.submittedAt) return 0;
  return Math.max(0, Math.round((session.endsAt - now) / 1000));
}

export function isExpired(session, now = Date.now()) {
  return remainingSeconds(session, now) === 0;
}

export function recordVisit(session, id) {
  if (!session || session.submittedAt) return session;
  session.visited[id] = (session.visited[id] || 0) + 1;
  return session;
}

export function setAnswer(session, id, value) {
  if (!session || session.submittedAt) throw new Error('This exam has been submitted.');
  if (!session.ids.includes(id)) throw new Error('That problem is not part of this exam.');
  if (value === null || value === undefined || value === '') delete session.answers[id];
  else session.answers[id] = String(value);
  return session;
}

export function toggleFlag(session, id) {
  if (!session || session.submittedAt) return session;
  if (session.flags[id]) delete session.flags[id];
  else session.flags[id] = true;
  return session;
}

// Which checkpoint has just come due, if any. Returns the checkpoint plus the
// number of problems still untouched before it, so the nudge is specific.
export function dueCheckpoint(session, problems, now = Date.now()) {
  if (!session || session.submittedAt) return null;
  const elapsedMin = (now - session.startedAt) / 60000;
  while (session.checkpointIndex < CHECKPOINTS.length) {
    const cp = CHECKPOINTS[session.checkpointIndex];
    if (elapsedMin < cp.atMinute) return null;
    session.checkpointIndex += 1;
    const behind = session.ids
      .filter((id) => problems[id] && problems[id].number <= cp.throughProblem && session.answers[id] === undefined)
      .map((id) => problems[id].number);
    return { ...cp, behind };
  }
  return null;
}

export function gradeExam(session, problems) {
  if (!session) throw new Error('No exam session.');
  const rows = session.ids.map((id, index) => {
    const problem = problems[id];
    if (!problem) throw new Error('Unknown problem in exam: ' + id);
    const chosen = session.answers[id];
    return {
      id,
      number: problem.number,
      topic: problem.topic,
      answer: String(problem.answer),
      chosen: chosen === undefined ? null : String(chosen),
      correct: chosen !== undefined && String(chosen) === String(problem.answer),
      blank: chosen === undefined,
      flagged: Boolean(session.flags[id]),
      order: index + 1,
    };
  });
  const correct = rows.filter((row) => row.correct).length;
  const blank = rows.filter((row) => row.blank).length;
  const wrong = rows.length - correct - blank;
  const byTopic = {};
  for (const row of rows) {
    const key = row.topic.split('·')[0].trim();
    byTopic[key] = byTopic[key] || { correct: 0, total: 0 };
    byTopic[key].total += 1;
    if (row.correct) byTopic[key].correct += 1;
  }
  return {
    rows,
    correct,
    wrong,
    blank,
    total: rows.length,
    percent: Math.round((correct / rows.length) * 100),
    byTopic,
    honorRoll: correct >= HONOR_ROLL,
    elapsedSeconds: Math.round(((session.submittedAt || Date.now()) - session.startedAt) / 1000),
  };
}

// The single most useful sentence after a timed paper.
export function debriefLine(report) {
  if (report.blank >= 5) return 'You left ' + report.blank + ' questions empty. A blank is worth the same as a wrong answer, so guess when the clock runs out.';
  if (report.wrong >= 8) return 'Most of the lost points came from wrong answers, not blanks. That is a reasoning problem, not a speed problem.';
  if (report.correct >= HONOR_ROLL) return 'Honor-roll pace. Now the question is which topics carried you and which ones got lucky.';
  return 'Solid base. Look at the wrong ones first, then the blanks — the order of your review matters more than the score.';
}

// --- First-ten drill -------------------------------------------------------
// The first ten problems are the cheapest points on the paper: 10 points in
// roughly eight minutes. A drill isolates exactly that skill.

export const FIRST_TEN_MINUTES = 8;

export function firstTenIds(problems, year) {
  return Object.values(problems)
    .filter((p) => p.year === year && p.number <= 10)
    .sort((a, b) => a.number - b.number)
    .map((p) => p.id);
}
