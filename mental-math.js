// Mental-arithmetic drills. AMC 8 allows no calculator, so speed with small
// numbers is a real scoring skill, not a side quest.
//
// Every question is generated with an exact integer answer computed by the
// generator itself, so a drill can never disagree with its key.

// Small deterministic PRNG so a drill can be replayed from its seed.
export function seededRandom(seed) {
  let state = (seed >>> 0) || 1;
  return function next() {
    state ^= state << 13; state >>>= 0;
    state ^= state >> 17;
    state ^= state << 5; state >>>= 0;
    return state / 4294967296;
  };
}

const randInt = (next, min, max) => min + Math.floor(next() * (max - min + 1));

function pennys(percent, base) {
  return (percent / 100) * base;
}

const GENERATORS = [
  // 2-digit × 1-digit
  (next) => {
    const a = randInt(next, 12, 39), b = randInt(next, 3, 9);
    return { prompt: a + ' × ' + b, answer: a * b, kind: 'multiplication' };
  },
  // percent of a friendly number
  (next) => {
    const base = [40, 60, 80, 120, 160, 200, 240, 300][randInt(next, 0, 7)];
    const percent = [5, 10, 15, 20, 25, 40, 50, 75][randInt(next, 0, 7)];
    const value = pennys(percent, base);
    return { prompt: percent + '% of ' + base, answer: value, kind: 'percent' };
  },
  // fraction of a number, kept integral
  (next) => {
    const den = [3, 4, 5, 6, 8][randInt(next, 0, 4)];
    const num = randInt(next, 1, den - 1);
    const base = den * randInt(next, 2, 15);
    return { prompt: num + '/' + den + ' of ' + base, answer: (num * base) / den, kind: 'fraction' };
  },
  // squares to 20
  (next) => {
    const n = randInt(next, 11, 25);
    return { prompt: n + '²', answer: n * n, kind: 'square' };
  },
  // difference of squares disguised
  (next) => {
    const a = randInt(next, 10, 20), b = randInt(next, 2, 9);
    return { prompt: a + '² − ' + b + '²', answer: a * a - b * b, kind: 'difference of squares' };
  },
  // doubling and halving chain
  (next) => {
    const a = randInt(next, 6, 19);
    return { prompt: a + ' × 25', answer: a * 25, kind: 'multiply by 25' };
  },
  // add three numbers with a carry
  (next) => {
    const a = randInt(next, 120, 480), b = randInt(next, 120, 480), c = randInt(next, 120, 480);
    return { prompt: a + ' + ' + b + ' + ' + c, answer: a + b + c, kind: 'addition' };
  },
  // simple ratio scaling
  (next) => {
    const k = randInt(next, 3, 9), a = randInt(next, 2, 7);
    return { prompt: 'If ' + a + ' pencils cost ' + a * k + ' baht, what do ' + (a * 4) + ' pencils cost?', answer: a * 4 * k, kind: 'ratio' };
  },
];

export function makeDrill({ count = 10, seed = Date.now(), kinds = null } = {}) {
  const next = seededRandom(seed);
  const pool = kinds ? GENERATORS.filter((_, index) => kinds.includes(index)) : GENERATORS;
  if (!pool.length) throw new Error('A drill needs at least one question type.');
  const questions = [];
  for (let i = 0; i < count; i += 1) {
    const generator = pool[randInt(next, 0, pool.length - 1)];
    const question = generator(next);
    if (!Number.isInteger(question.answer)) throw new Error('Drill answer must be an integer: ' + question.prompt);
    questions.push({ ...question, id: 'drill-' + seed + '-' + i });
  }
  return { seed, questions };
}

export function gradeDrill(drill, answers) {
  const rows = drill.questions.map((question) => {
    const raw = answers[question.id];
    const parsed = raw === undefined || raw === '' ? null : Number(raw);
    return {
      ...question,
      given: parsed,
      correct: parsed !== null && Number.isFinite(parsed) && parsed === question.answer,
    };
  });
  return { rows, correct: rows.filter((row) => row.correct).length, total: rows.length };
}

// Targets worth naming out loud, so the drill has a finish line.
export const DRILL_TARGETS = Object.freeze([
  { seconds: 180, label: 'Strong', detail: '10 questions in 3 minutes means the arithmetic is no longer using your attention.' },
  { seconds: 240, label: 'On track', detail: '4 minutes is enough for AMC 8 pace. Keep pushing toward 3.' },
]);

export function drillVerdict(seconds, correct, total) {
  const allCorrect = correct === total;
  if (!allCorrect) return 'Accuracy first. A fast wrong answer costs a full point. Redo this set slowly, then time it again.';
  if (seconds <= 180) return DRILL_TARGETS[0].detail;
  if (seconds <= 240) return DRILL_TARGETS[1].detail;
  return 'All correct, but the clock is the weak part. Say the steps out loud to find where the seconds go.';
}
