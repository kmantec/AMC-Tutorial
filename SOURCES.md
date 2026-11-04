# Sources and the seven-year target

Standing instruction from the parent (2026-11-01):

> Compare the **problems** against AoPS when they disagree. Choose the
> **solutions and techniques** myself. Teach so Pingping becomes strong the same
> way — real techniques, real shortcuts, all of it allowed.

That splits into two jobs that must not be confused.

## 1. The problems: AoPS is the authority

AoPS holds what was actually printed. If our text disagrees with AoPS on a
number, a unit, a figure relationship, or an answer choice, **AoPS wins and we
fix ours** — unless AoPS is visibly wrong, in which case say so in the commit
message and keep the evidence.

Check the statement, all five options in order, and any figure relationships.
Never paraphrase numerical data. Restated wording is labelled
`wording: 'restated'`; copied wording is `wording: 'original'`.

- All problems: `https://artofproblemsolving.com/wiki/index.php?title=YYYY_AMC_8_Problems`
- Answer key: `https://artofproblemsolving.com/wiki/index.php/YYYY_AMC_8_Answer_Key`
- One problem: `https://artofproblemsolving.com/wiki/index.php?title=YYYY_AMC_8_Problems/Problem_N`

AoPS intermittently returns 403 to plain fetches. `web_extract` usually works; if
not, drive a real browser. Do not silently substitute a second-hand copy.

### The key is a check, not a source

Verify against the key, then **solve the problem independently**. A disagreement
is the most valuable event in the batch: report it. Never let the key overwrite a
solution that does not actually prove the answer.

## 2. The solutions and techniques: mine

The key gives one letter; it does not teach. Our job is the part it cannot do:

- **The shortest honest route.** Parity, symmetry, bounding, working backwards —
  if one of them cracks it, use it instead of grinding arithmetic to look rigorous.
- **The trap, named.** Every distractor came from a specific mistake. Name it in
  `distractors` where you are confident; leave it out where you are not.
- **One transferable idea per problem.** `tipTitle` + `tip` is the sentence
  Pingping carries to another problem. "Multiply the factors, don't add them" is a
  technique; "remember 1.2" is not.
- **The check she can run alone.** Halve it, estimate it, test the units, try the
  smallest case.
- **A real alternative route**, when a second method is genuinely shorter or more
  general — not a decorative second solution.

Recurring techniques worth teaching across years: grouping and telescoping,
difference of squares, complementary counting, stars-and-bars vs. casework,
parity and invariants, working backwards, bounding, symmetry, unit analysis,
"solve the smaller version first".

## 3. What "seven years back" means

AoPS holds AMC 8 papers from 2000 to 2026, but **there was no 2021 paper**: the
contest moved to January, so that school year sat in January 2022. Counting back
seven *papers* from 2026:

| Year | In the library | Notes |
|------|----------------|-------|
| 2026 | 25 / 25 | complete; Standard paper only |
| 2025 | 25 / 25 | complete |
| 2024 | 25 / 25 | complete |
| 2023 | 0 / 25 | **next** |
| 2022 | 0 / 25 | after 2023 |
| 2020 | 25 / 25 | complete |
| 2019 | 25 / 25 | complete |

Target 175; currently 125. 2018 and earlier are out of scope unless asked.

## 4. Verified answer keys on file

### 2026 — Standard paper
A, C, D, E, B, E, C, D, B, A, B, D, A, B, A, D, A, B, D, D, B, A, C, E, E

A separate **2026 Regional** paper exists with different problems and a different
key. Only the Standard paper matches this library. See `SOURCES-2026.md`.

### 2023
D, E, B, D, B, C, B, A, B, D, C, B, D, E, B, C, A, D, C, D, C, D, C, A, A

### 2022
A, D, E, E, C, C, B, B, B, E, D, B, D, D, C, B, B, C, C, D, C, A, D, C, E

Keys for 2025, 2024, 2020 and 2019 were verified when those years were completed;
their problems are in `problems.js` and pass `verify.mjs`.
