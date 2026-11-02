// Audits the three-rung hint ladder on every problem.
// Reports only — never fails the build, because legacy problems predate the rule.
//
// The ladder (adapted from LIVE by Po-Shen Loh's structure):
//   rung 1  name the object, not the method   — no arithmetic, no formula
//   rung 2  the structural move               — still no numbers computed
//   rung 3  the specific move                 — the computation, or the trap
import { problems } from './problems.js';

const METHOD_WORDS = /\b(multiply|divide|subtract|add up|compute|calculate|plug|use the formula|set up an equation)\b/i;
// Given quantities are fine in rung 1 — doing the arithmetic is not. Flag an
// actual computation: a digit, an operator, and another digit, or a "= result".
const ARITHMETIC = /\d\s*[×÷+\-−*/]\s*\d\s*=\s*[-−]?\d|\d\s*=\s*[-−]?\d/;

// Known false positives: the answer token appears as a *number in the working*,
// not as the result. Keep this list short and justify each entry.
const ANSWER_LEAK_ALLOWED = new Map([
  ['2020-12', 'hint 2 uses 10 as the factor in 12 × 10; the answer N = 10 is not stated'],
]);

const rows = [];
let rung3Lands = 0;

for (const id of Object.keys(problems)) {
  const problem = problems[id];
  const hints = problem.hints || [];
  const issues = [];

  if (hints.length !== 3) issues.push(`${hints.length} hints (needs 3)`);

  const [first = '', second = '', third = ''] = hints;

  if (first && METHOD_WORDS.test(first)) issues.push('rung 1 names the method');
  if (first && ARITHMETIC.test(first)) issues.push('rung 1 already does arithmetic');
  if (second && !ARITHMETIC.test(second) && !METHOD_WORDS.test(second) && second.length < 25) {
    issues.push('rung 2 is too thin to be a structural move');
  }
  if (third && third.length < 15) issues.push('rung 3 is too short to be the specific move');

  // The answer must never appear in rungs 1-2 — unless the same token is part of
  // the problem statement (a name, or "10!" where the answer is 10). Given text
  // is not a leak.
  const label = String(problem.answerLabel || '').replace(/^\([A-E]\)\s*/, '').trim();
  const inPrompt = Boolean(label) && new RegExp(`(^|\\W)${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\W|$)`).test(problem.prompt || '');
  const leaksAnswer = (hint) =>
    Boolean(label) && label.length > 1 && !inPrompt &&
    new RegExp(`(^|\\s)${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|\\s|[,.;:)])`).test(hint);

  if (hints.slice(0, 2).some(leaksAnswer) && !ANSWER_LEAK_ALLOWED.has(id)) issues.push('answer leaks in rung 1-2');
  // Rung 3 is allowed to reach the answer — that is what "almost solves it"
  // looks like. It is reported separately so it never inflates the issue count.
  if (third && leaksAnswer(third)) rung3Lands += 1;

  if (new Set(hints).size !== hints.length) issues.push('duplicate hint text');

  if (issues.length) rows.push({ id, issues, first: first.slice(0, 90) });
}

console.log(`Hint ladder audit — ${Object.keys(problems).length} problems`);
console.log(`Problems with at least one issue: ${rows.length}`);

const tally = new Map();
for (const row of rows) {
  for (const issue of row.issues) tally.set(issue, (tally.get(issue) || 0) + 1);
}
console.log('\nIssue counts:');
for (const [issue, count] of [...tally].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(count).padStart(3)}  ${issue}`);
}

console.log(`\nRung 3 lands on the answer (allowed): ${rung3Lands}`);

const leaks = rows.filter((row) => row.issues.some((issue) => issue.startsWith('rung 1') || issue.startsWith('answer')));
console.log(`\nRung 1 or rung 2 gives away the method/arithmetic/answer (${leaks.length}):`);
for (const row of leaks.slice(0, 20)) console.log(`  ${row.id.padEnd(8)} ${row.first}`);
