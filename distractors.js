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
  '2026-6': {
    '1/4': 'You counted only the two long strips (10 × 1 each, so 20) and forgot the two short end strips.',
  },
  '2026-7': {
    '48': 'A slip that leaves the used fraction at 5/6 instead of 4/5: 40 ÷ 5/6 = 48.',
  },
  '2026-8': {
    '100': 'You kept the percent over 100 and never reduced it, so 50 never looked large enough.',
  },
  '2026-9': {
    '4/9': 'You took √16 over √81 = 4/9 and ignored both inner square roots.',
    '1': 'You assumed the mirrored numerator and denominator cancel. The two inner products are 144 and 324.',
    '3/2': 'You put the larger inner product on top: √324 over √144 is 18/12, the reciprocal of 2/3.',
    '9/4': 'You took √81 over √16 = 9/4, treating the expression as the two outer numbers only.',
  },
  '2026-10': {
    'B': 'You counted one place short and stopped at Melina, who is third. Luke is one place behind her.',
  },
  '2026-11': {
    '13/2 π': 'Your radius sum came out 13 with the right π/2 factor, so one radius was counted twice.',
    '13π': 'You summed the radii to 13 and charged π per radius, which prices a half circle instead of a quarter.',
  },
  '2026-12': {
    '2': 'With 2 at the top the 9-box needs 7, and 7 is not one of the digits 1 to 6.',
    '3': 'With 3 at the top the 6-box needs another 3, and each digit may be used only once.',
    '4': 'With 4 at the top the 9-box needs 5 and the 6-box needs 2, so the 10-box would need a second 5.',
    'impossible': 'You stopped as soon as one box had two possible pairs. One ambiguous box does not make the whole ring impossible.',
  },
  '2026-14': {
    '90': 'You used the 20 gap between the sums as the common step, which forces a middle of 30 and a total of 90.',
    '85': 'You found the middle number 25 and then added it to 60 instead of taking three copies of it.',
  },
  '2026-15': {
    '8': 'You assumed each cube needs more neighbours than it does. Two gray faces need only two neighbours, and four cubes supply them.',
    '27': 'You assumed a solid 3 × 3 × 3 block was needed to hide every face, which asks for far more than the problem does.',
  },
  '2026-3': {
    A: 'You checked the triangle and stopped. The 36 cm² square has side 6, so it also uses exactly 24 cm.',
    B: 'You added the hexagon because 5 cm sounds small — but six sides of 5 cm is 30 cm, over budget.',
    C: 'You allowed the hexagon again. Perimeter is side × 6, so 30 cm cannot fit in 24 cm of wire.',
    E: 'You assumed all three shapes fit. Only the two whose perimeters equal 24 cm can be made.',
  },
  "2026-16": {
    "2/5": "You accepted only 0 and 4 as the ones digit; 8 works too, since 8 is a multiple of 4, and that missing digit costs a fifth of the endings."
  },
  "2026-17": {
    "12": "You started from 24 and removed only the arrangements that keep two old pairs, leaving rows where one old pair still sits together.",
    "24": "You counted every arrangement of the four students and never applied the rule."
  },
  "2026-18": {
    "1": "You found 29 + 31 and stopped; 5 + 7 + 9 + 11 + 13 + 15 also adds to 60.",
    "3": "You counted 60 on its own as a sum, but the problem asks for two or more terms.",
    "4": "You kept one even-start run such as 18 + 20 + 22 or 12 + 14 + 16 + 18; the terms must be odd.",
    "5": "You added 60 on its own to the two real runs and the two even-start runs, so the parity filter never ran."
  },
  "2026-19": {
    "1/5": "You read the speed ratio 5 to 1 as the answer. It splits the distance they cover together, and that total is 2d, not d.",
    "1/6": "You split the 2d total correctly and then halved Miguel’s share, or divided d by 6 instead of by 3.",
    "2/5": "You doubled 1/5 after noticing the round trip — the extra distance on the return belongs to Luna, not to Miguel."
  },
  "2026-20": {
    "3": "You stopped at the three cases (0, 1 or 2 silver coins) without counting the orders inside them.",
    "7": "You added the no-silver and one-silver cases and stopped: 1 + 6 = 7 leaves out the two-silver stacks."
  },
  "2026-21":   {
    "1/5": "You used the number of outer points, or one of the five choices, as the probability. Five-fold symmetry does not make each point equally likely on the third move.",
    "2/5": "You took the chance of an outer point at move two, 1/2, and treated it as an answer to the three-move question, then nudged it. The third move starts from an inner point half the time only.",
    "1/2": "You stopped at the chance after the second move. That is the probability of being outside after two moves, not after three.",
    "3/5": "You added the outer chance at move two to something, or counted three of the five outer points. The moves compound by multiplication, not addition."
  },
  "2026-22":   {
    "10": "You placed the middle median a little above 9 without checking that six numbers below it plus the two smaller medians are all distinct.",
    "12": "You allowed the smaller medians to reuse the low numbers from the other groups, so the count below M came out too small.",
    "13": "You split 1–25 into five consecutive blocks of five, read 3, 8, 13, 18, 23, and took the middle. Legal, but not the smallest M that can be arranged.",
    "14": "You counted the two smaller medians as needing only one low number each, so the bound came out one group too high."
  },
  "2026-23":   {
    "2π + 20": "You counted only the two curved halves at the ends and left the four inner corners out.",
    "5/2 π + 20": "You kept the arcs at the two outer coins and gave each inner corner a quarter, so the total turning came up short.",
    "9/2 π + 20": "You added one extra quarter circle, usually by counting one corner twice where the two rows meet.",
    "5π + 20": "You counted the straight parts correctly and then added a full circumference for each of the five coins, or one per corner plus change."
  },
  "2026-24":   {
    "147": "You added the plain multiples of 7 once each — 7 + 14 + 21 + 28 + 35 + 42 — and never counted the factorials above 49.",
    "150": "You added a single extra seven for the 49 rather than one for each of the three factorials that contain it.",
    "156": "You counted the sevens up to 42 correctly, then added only the multiples of 7 among 49, 50 and 51.",
    "168": "You finished the band at 49 and added the three factorials at level seven, but never gave 49 its second seven."
  },
  "2026-25":   {
    "4": "You listed only the triples with all three cuts equal or nearly so, dropping every case with two different sizes.",
    "5": "You stopped after the triples with smallest cut 1, or forgot that (2,2,2) is inside the pair-sum limit.",
    "6": "You counted only the six triples whose smallest cut is 1 and missed the two starting with 2.",
    "7": "You found the eight triples and then discarded one that is actually legal, usually (1,1,4) or (2,2,3)."
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
