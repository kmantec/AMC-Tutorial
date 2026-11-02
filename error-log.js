// Error classification for Pingping's notebook.
//
// The single most useful thing after a wrong answer is *why* it was wrong.
// Four causes need four different remedies, so they are stored as separate
// categories and reported separately.

export const ERROR_TYPES = Object.freeze({
  method: {
    label: 'I did not know the method',
    short: 'Method',
    remedy: 'Relearn the idea, then redo this problem in two days without notes.',
    color: '#c2410c',
  },
  reading: {
    label: 'I misread the question',
    short: 'Reading',
    remedy: 'Before calculating, underline what is being asked and write the units.',
    color: '#7c3aed',
  },
  computation: {
    label: 'I made an arithmetic slip',
    short: 'Arithmetic',
    remedy: 'Ten minutes of mental-math drill. The idea was right; the hands were not.',
    color: '#0369a1',
  },
  speed: {
    label: 'I rushed and had no time to check',
    short: 'Rushing',
    remedy: 'Redo this set with the exam clock on. Practise stopping a problem at 90 seconds.',
  },
});

export const ERROR_KEYS = Object.freeze(Object.keys(ERROR_TYPES));

export function isValidErrorType(value) {
  return Object.hasOwn(ERROR_TYPES, value);
}

export function classifyHint({ hints = 0, revealed = false, timedOut = false, elapsedSeconds = null, suggestedSeconds = null }) {
  if (revealed) return 'method';
  if (hints > 0) return 'method';
  if (timedOut) return 'speed';
  if (elapsedSeconds !== null && suggestedSeconds !== null && elapsedSeconds > suggestedSeconds * 3) return 'speed';
  return 'computation';
}

// Group saved diagnoses into a ranked list of what to practise next.
export function errorSummary(diagnoses) {
  const counts = Object.fromEntries(ERROR_KEYS.map((key) => [key, 0]));
  let tagged = 0;
  for (const entry of diagnoses || []) {
    if (!entry || !isValidErrorType(entry.type)) continue;
    counts[entry.type] += 1;
    tagged += 1;
  }
  const ranked = ERROR_KEYS
    .map((key) => ({ type: key, count: counts[key], ...ERROR_TYPES[key] }))
    .filter((row) => row.count > 0)
    .sort((a, b) => b.count - a.count || a.type.localeCompare(b.type));
  const top = ranked[0] || null;
  return {
    counts,
    ranked,
    tagged,
    top,
    headline: top
      ? 'Your most common cause is "' + top.short.toLowerCase() + '" (' + top.count + ' of ' + tagged + ' tagged). ' + top.remedy
      : 'No wrong answers have been diagnosed yet. Tag one when it happens and the pattern will appear.',
  };
}

// A short, honest sentence for a specific wrong pick. The values come from
// curated per-problem notes where they exist; otherwise we fall back to a
// question rather than inventing a reason.
export function distractorNote(problem, chosenValue) {
  if (!problem || !problem.distractors) return null;
  const note = problem.distractors[String(chosenValue)];
  return typeof note === 'string' && note.length > 0 ? note : null;
}
