# Change history

## 2026-09-27 — Coach’s Corner, three adaptations, and clean learner handoff

- Replaced the generic practice footer with problem-specific Coach’s Corner for 2026 Q1–Q3. Each has two short, two-choice reasoning checks and feedback explaining either response. Targeted guidance is requested explicitly and counts as support before completion.
- Added one checked changed-number practice and one two-choice reasoning check per original. Adaptations appear after completing or reviewing the original, carry a clear non-official label and source credits, and are excluded from original AMC progress and the 175-question target. No timers were added.
- Kept check/adaptation state separate per problem and protected first responses from duplicate submissions. Repeating an adaptation after feedback is recorded as a revisit while history is retained.
- Added Parent preview, including `?preview=1`, which writes no learner records. Added explicit Start learning, Start fresh, and Continue saved learning controls. Fresh start clears only the two app record lists in this browser; older records are preserved until that choice. Preview interactions never transfer to learning.
- Preserved the original storage key and added a separate coaching history. Covered reload, cross-tab reset, unavailable storage, duplicate answers, and legacy compatibility with synthetic-data tests. No real learner records or credentials are included.
- Verified original and adapted math, pure state/storage tests through `node verify.mjs`, actual DOM interactions through `node ui-check.mjs`, relevant syntax, and whitespace. The DOM test uses optional development-only jsdom; no app build step or runtime dependency was introduced. Browser connection was unavailable, so visual layout and physical iPad/video playback remain unverified.
- Updated README, project context, and AGENTS instructions for this authorized batch. GitHub Pages deployment history identifies the published revision.

## 2026-09-14 — Gentle pace suggestions for the existing three guides

- Added informational pace suggestions for 2026 Q1 (within 1 min), Q2 (within 1 min 30 sec), and Q3 (within 2 min), with reassurance to take the time needed while learning.
- Identified these values as authored coaching suggestions once familiar with the method, not official MAA per-question limits or measured learner times.
- Kept the feature to text only: no start button, automatic timer, deadline, elapsed-time recording, or time-based grading.
- Recorded the parent's interest in future practice with changed numbers and considering timing then. Adaptations remain future work; they must be labeled, separated from original AMC questions, and excluded from the 175-real-question target.
- Updated README, project context, and continuation instructions to preserve the current scope and decision.
- Passed `node verify.mjs`, JavaScript syntax checks for the changed modules and local server, and `git diff --check`. Confirmed the pre-update live HTML, app module, and problem data matched main. No browser was connected for a visual or iPad check; publication status is available in GitHub Pages workflow history.

## 2026-09-11 — Reviewed batch: 2026 Problems 2 and 3

- Added the number-array and wire/perimeter questions with preserved mathematical data and choices, labeled restatements, source links, and independently checked answers.
- Added three hints per question, recommended explanations, subjective teaching ratings with reasons, alternative methods, common mistakes, and explanation prompts.
- Added reviewed video segments for Q2 (0:29–1:03) and Q3 (1:03–2:22), each with in-app playback and timestamped external fallback.
- Generalized practice into a three-question data model. Navigation and the notebook now work per question; switching preserves selections, hints, and assisted-attempt state.
- Removed the active video when returning, changing question, retrying, or closing the dialog. Post-answer video review does not rewrite a completed independent result.
- Preserved old Q1 learning records and corrected progress aggregation to use each question’s latest record.
- Added repository-contained run/verification scripts and comprehensive continuation documentation for moving to a new Project.
- Verified mathematical data, assets, state isolation, invalid/duplicate submissions, older records, and local browser-agent actions. Physical iPad playback has not been verified.

## 2026-09-10 — First guide and GitHub publication

- Built the English iPad-oriented homepage, past-paper archive links, coaching notes, and a device-local notebook.
- Integrated verified 2026 Problem 1, staged hints, source-attributed grouping explanation, and labeled AI tips.
- Changed the repository name from pingping-amc8 to the user’s chosen AMC-Tutorial.
- Preserved the original Q1 expression on one line and added its first reviewed embedded video segment (0:00–0:29) with a YouTube fallback.
- Published the initial app to GitHub Pages. Firebase and paid-store features remained unimplemented.
