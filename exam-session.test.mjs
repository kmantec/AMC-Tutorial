import assert from 'node:assert/strict';
import {
  newExamSession, remainingSeconds, isExpired, recordVisit, setAnswer, toggleFlag,
  dueCheckpoint, gradeExam, debriefLine, CHECKPOINTS, EXAM_SECONDS, firstTenIds, HONOR_ROLL,
} from './exam-session.js';
import { metricsFor } from './pacing.js';

// --- Minimal fixture: one 25-question paper --------------------------------
const problems = {};
for (let n = 1; n <= 25; n += 1) {
  const id = 'T-' + n;
  problems[id] = {
    id, year: 2020, number: n, topic: n <= 5 ? 'Arithmetic · basics' : 'Geometry · shapes',
    answer: String.fromCharCode(65 + (n % 5)), options: [], hints: [],
  };
}
const ids = Object.keys(problems);

// --- Session shape --------------------------------------------------------
const t0 = 1_700_000_000_000;
let session = newExamSession(ids, { startedAt: t0 });
assert.equal(session.ids.length, 25);
assert.equal(session.minutes, 40);
assert.equal(remainingSeconds(session, t0), EXAM_SECONDS);
assert.equal(remainingSeconds(session, t0 + 60_000), EXAM_SECONDS - 60);
assert.equal(remainingSeconds(session, t0 + 41 * 60_000), 0);
assert.ok(isExpired(session, t0 + 41 * 60_000));
assert.ok(!isExpired(session, t0 + 39 * 60_000));
assert.throws(() => newExamSession([]), /at least one problem/);

// --- Answers and flags ----------------------------------------------------
setAnswer(session, 'T-1', 'A');
assert.equal(session.answers['T-1'], 'A');
setAnswer(session, 'T-1', 'C');
assert.equal(session.answers['T-1'], 'C', 'a changed answer replaces the old one');
setAnswer(session, 'T-1', '');
assert.equal(session.answers['T-1'], undefined, 'clearing removes the answer');
assert.throws(() => setAnswer(session, 'T-99', 'A'), /not part of this exam/);
toggleFlag(session, 'T-4');
assert.equal(session.flags['T-4'], true);
toggleFlag(session, 'T-4');
assert.equal(session.flags['T-4'], undefined);
recordVisit(session, 'T-2'); recordVisit(session, 'T-2');
assert.equal(session.visited['T-2'], 2);

// --- Checkpoints fire once, in order --------------------------------------
assert.equal(dueCheckpoint(session, problems, t0 + 5 * 60_000), null, 'nothing due before minute 8');
const cp1 = dueCheckpoint(session, problems, t0 + 8 * 60_000);
assert.equal(cp1.atMinute, 8);
assert.equal(cp1.behind.length, 10, 'nothing answered yet, so all ten early problems are behind');
assert.equal(dueCheckpoint(session, problems, t0 + 9 * 60_000), null, 'the same checkpoint never fires twice');
const cp2 = dueCheckpoint(session, problems, t0 + 21 * 60_000);
assert.equal(cp2.atMinute, 20);
assert.equal(cp2.behind.length, 17, 'only problems 1–17 count at the second checkpoint');
const cp3 = dueCheckpoint(session, problems, t0 + 33 * 60_000);
assert.equal(cp3.atMinute, 32);
assert.equal(dueCheckpoint(session, problems, t0 + 39 * 60_000), null, 'all checkpoints consumed');
assert.equal(CHECKPOINTS.length, 3);

// A checkpoint reports only unanswered problems at or below its threshold.
const s2 = newExamSession(ids, { startedAt: t0 });
for (let n = 1; n <= 9; n += 1) setAnswer(s2, 'T-' + n, problems['T-' + n].answer);
const cpEarly = dueCheckpoint(s2, problems, t0 + 8 * 60_000);
assert.deepEqual(cpEarly.behind, [10]);

// --- Grading --------------------------------------------------------------
const done = newExamSession(ids, { startedAt: t0 });
for (let n = 1; n <= 15; n += 1) setAnswer(done, 'T-' + n, problems['T-' + n].answer);
setAnswer(done, 'T-16', 'ZZZ'); // a wrong pick
done.submittedAt = t0 + 30 * 60_000;
const report = gradeExam(done, problems);
assert.equal(report.correct, 15);
assert.equal(report.wrong, 1);
assert.equal(report.blank, 9);
assert.equal(report.total, 25);
assert.equal(report.percent, 60);
assert.equal(report.honorRoll, true, HONOR_ROLL + ' correct is honor roll');
assert.equal(report.elapsedSeconds, 1800);
assert.equal(report.rows.find((r) => r.number === 16).correct, false);
assert.equal(report.rows.find((r) => r.number === 17).blank, true);
assert.equal(report.byTopic.Arithmetic.total, 5);
assert.equal(report.byTopic.Arithmetic.correct, 5);
assert.equal(report.byTopic.Geometry.correct, 10);

// Submitted sessions are frozen.
assert.throws(() => setAnswer(done, 'T-20', 'A'), /submitted/);
assert.equal(toggleFlag(done, 'T-20').flags['T-20'], undefined);

// --- Debrief sentences pick the right cause -------------------------------
assert.match(debriefLine({ blank: 9, wrong: 1, correct: 15 }), /guess when the clock runs out/);
assert.match(debriefLine({ blank: 0, wrong: 9, correct: 16 }), /reasoning problem/);
assert.match(debriefLine({ blank: 0, wrong: 2, correct: 20 }), /Honor-roll pace/);
assert.match(debriefLine({ blank: 1, wrong: 2, correct: 12 }), /Solid base/);

// --- First-ten drill ------------------------------------------------------
const ten = firstTenIds(problems, 2020);
assert.equal(ten.length, 10);
assert.deepEqual(ten, ids.slice(0, 10), 'first ten come back in problem order');
assert.equal(firstTenIds(problems, 1999).length, 0);

// --- Pacing -----------------------------------------------------------------
// A paper finished in 20 minutes with 18 right: average 48 s per question, and
// the last five problems ate a disproportionate share.
const paced = metricsFor({
  perProblem: [
    ...Array.from({ length: 20 }, (_, i) => ({ number: i + 1, seconds: 40 })),
    ...Array.from({ length: 5 }, (_, i) => ({ number: 21 + i, seconds: 96 })),
  ],
  correct: 18,
  total: 25,
});
assert.equal(paced.averageSeconds, 51);
assert.equal(paced.totalSeconds, 1280);
assert.equal(paced.earlyAverage, 40);
assert.equal(paced.lateAverage, 96);
assert.equal(paced.slowest.length, 5);
assert.equal(paced.slowest[0].seconds, 96);
assert.equal(paced.slowestNumber, 21);
assert.ok(paced.verdict.length > 20);

// Empty input must not divide by zero.
const empty = metricsFor({ perProblem: [], correct: 0, total: 0 });
assert.equal(empty.averageSeconds, 0);
assert.equal(empty.slowest.length, 0);

console.log('exam-session tests passed');
