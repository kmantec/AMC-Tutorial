# Change history

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
