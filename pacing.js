// Pacing analysis: turn per-problem timings into one actionable sentence.
// Pure functions, no DOM.

// The paper is designed so early problems cost far less than late ones.
// Anything past these multiples of the average is worth a second look.
export const SLOW_MULTIPLE = 2.2;

export function metricsFor({ perProblem = [], correct = 0, total = 0 }) {
  const entries = perProblem.filter((entry) => entry && Number.isFinite(entry.seconds) && entry.seconds >= 0);
  const sum = entries.reduce((acc, entry) => acc + entry.seconds, 0);
  const averageSeconds = entries.length ? Math.round(sum / entries.length) : 0;
  const slowest = [...entries].sort((a, b) => b.seconds - a.seconds).slice(0, 5);
  const slowestNumber = slowest.length ? slowest[0] : { seconds: 0, number: 0 };
  const early = entries.filter((entry) => entry.number <= 10);
  const late = entries.filter((entry) => entry.number >= 21);
  const meanOf = (list) => (list.length ? Math.round(list.reduce((a, e) => a + e.seconds, 0) / list.length) : 0);
  const earlyAverage = meanOf(early);
  const lateAverage = meanOf(late);
  const slowShare = entries.filter((entry) => entry.seconds > averageSeconds * SLOW_MULTIPLE).length;

  let verdict;
  if (!entries.length) verdict = 'No timing data yet. A timed paper will fill this in.';
  else if (slowShare >= 3) verdict = 'You lost the clock in ' + slowShare + ' places, not everywhere. Read the slowest list and find the single habit behind them.';
  else if (earlyAverage > 90) verdict = 'The early problems are costing you too much. Problems 1–10 should feel almost automatic by now — that is what the first-ten drill is for.';
  else if (lateAverage > 0 && lateAverage < earlyAverage) verdict = 'Your late problems are faster than your early ones. That usually means you are rushing the end, not that you are strong there.';
  else verdict = 'Your pace is even across the paper. That is the habit that survives a harder exam.';

  return {
    averageSeconds,
    totalSeconds: Math.round(sum),
    slowest,
    slowestNumber: slowestNumber.number,
    earlyAverage,
    lateAverage,
    slowShare,
    verdict,
  };
}

// Clock text for a countdown, always m:ss.
export function clockText(seconds) {
  const safe = Math.max(0, Math.round(seconds));
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return m + ':' + String(s).padStart(2, '0');
}

// The same formatting, exported under a second name for the exam UI so a
// rename in one place cannot silently break a countdown.
export const clockTextSafe = clockText;
