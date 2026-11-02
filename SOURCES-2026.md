# 2026 AMC 8 — verified source sheet

Use this sheet for the 2026 batch. Do not trust any other 2026 answer key you
find: a second version of the 2026 paper exists (the **Regional** paper) with
different problems and a different key. Only the Standard paper matches the
problems in this library.

- Standard problems: https://artofproblemsolving.com/wiki/index.php/2026_AMC_8_Problems
- Standard answer key: https://artofproblemsolving.com/wiki/index.php/2026_AMC_8_Answer_Key
- Per-problem page: https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_N

## Verified answer key (Standard paper)

| # | Key | # | Key | # | Key | # | Key | # | Key |
|---|-----|---|-----|---|-----|---|-----|---|-----|
| 1 | A | 6 | E | 11 | B | 16 | D | 21 | B |
| 2 | C | 7 | C | 12 | D | 17 | A | 22 | A |
| 3 | D | 8 | D | 13 | A | 18 | B | 23 | C |
| 4 | E | 9 | B | 14 | B | 19 | D | 24 | E |
| 5 | B | 10 | A | 15 | A | 20 | D | 25 | E |

Problems 1–5 are already in `problems.js` and agree with this key. Do not touch
them. Problems 6–25 are the remaining work.

## Rules for this batch

1. **Solve each problem yourself before reading the key.** If your answer
   disagrees with the table above, say so in the run report instead of silently
   copying either number. A mismatch is a finding, not a nuisance.
2. Copy the answer options **exactly** as printed, A through E. All five must
   match the source in both order and value.
3. `answer` is the option's `value`. For letter-valued options the value is the
   letter.
4. Where the original problem has a figure, add a `diagram` entry and create
   `assets/diagram-2026-N.png`. If the figure is essential and you cannot build
   it accurately, leave `diagram` out and add a `videoNote` explaining the
   figure is missing — never ship a wrong figure.
5. `suggestedPace` follows the real pacing: 60–90 s for 1–10, 90–120 s for
   11–20, 120–240 s for 21–25.
6. Run `node verify.mjs` before every commit. It must pass.
