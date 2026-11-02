// Distractor map: why each wrong option is attractive.
//
// AMC 8 wrong answers are engineered, not random. If a learner picks one, the
// option itself names the mistake. Keep every entry short (under ~90 chars) so
// it reads as a diagnosis, not a lecture.
//
// Only problems with a confident, specific cause get an entry. A missing entry
// is honest: the coach says so rather than inventing a story.

export const distractorsByProblem = {
  '2026-1': {
    '21': 'You dropped the −3 and added 1 + 2 + 4 + 5 − 6 + … instead. The sign belongs to the 3.',
    '24': 'You read −3 as +3 once. Flipping one negative term adds 6 to the total (18 → 24).',
    '27': 'You dropped the −9. Losing one negative term always raises the sum by that term’s size.',
    '30': 'You flipped −6 to +6. Every sign slip adds 2 × |term| to the true total.',
  },
  '2026-4': {
    '80': 'You applied the 50% growth to the original amount instead of to July’s balance. Growth is on the new whole.',
    '90': 'You subtracted 20 then added 50 as if the base never changed: −20 + 50 = +30 is not what happened.',
    '100': 'You assumed a 20% drop and a 50% rise cancel. They never do — 0.8 × 1.5 = 1.2.',
    '110': 'You used one step of the chain: 0.8 × 1.5 is 1.2, not 1.1. Multiply the factors, do not add them.',
  },
  '2026-5': {
    '15': 'You probably found 100 ÷ 40 = 2.5 hours and then subtracted 2h45m. Check the unit you subtracted.',
    '40': 'You read the average speed (40 mph) as the length of the stop. The question asks for minutes of lunch.',
    '45': 'You subtracted 2h15m of driving instead of 2h30m — a 15-minute slip in the driving time.',
    '60': 'You used 2 hours of driving rather than 2.5. 100 miles at 40 mph takes longer than you think.',
  },
  '2026-3': {
    A: 'You checked the triangle and stopped. The 36 cm² square has side 6, so it also uses exactly 24 cm.',
    B: 'You added the hexagon because 5 cm sounds small — but six sides of 5 cm is 30 cm, over budget.',
    C: 'You allowed the hexagon again. Perimeter is side × 6, so 30 cm cannot fit in 24 cm of wire.',
    E: 'You assumed all three shapes fit. Only the two whose perimeters equal 24 cm can be made.',
  },
};

// Per-problem guard for the problems above: the answer is never a distractor.
export function checkDistractorMap(problems) {
  const errors = [];
  for (const [id, map] of Object.entries(distractorsByProblem)) {
    const problem = problems[id];
    if (!problem) { errors.push(id + ' is not in the problem library'); continue; }
    for (const value of Object.keys(map)) {
      if (String(problem.answer) === value) errors.push(id + ': the correct answer is listed as a distractor');
      if (!problem.options.some((option) => String(option.value) === value)) errors.push(id + ': ' + value + ' is not an option');
      if (typeof map[value] !== 'string' || map[value].length < 20) errors.push(id + ' ' + value + ': note is too short to be useful');
    }
  }
  return errors;
}
