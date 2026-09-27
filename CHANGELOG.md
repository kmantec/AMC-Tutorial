# Change history

## 2026-09-27 — Calmer colors and clearer controls

- Introduced a consistent visual hierarchy: muted blue primary actions, white outlined secondary buttons, active menu indicators, neutral information labels, and underlined source links.
- Gave Coach’s Corner its own sage-green container, white voice/check/solution cards, and a matching green coaching action color. Arranged its help buttons in two columns with a single column on narrow phones.
- Improved control boundaries, disabled states, keyboard focus, and touch targets while preserving the white exam surface and the existing responsive layout.
- Changed only the app’s CSS. All questions, hints, binary checks, videos, pace text, speech behavior, grading, and stored records are preserved.
- Passed node verify.mjs, app syntax, the existing jsdom UI checks, stylesheet parsing, selected text/control contrast calculations, and whitespace checks. Browser connection failed again; rendered screenshots and physical iPad visual validation remain pending.
- Updated README, project context, and design continuation guidance.

## 2026-09-27 — Parent-selected Problem 4 video

- Added the parent-provided 2:21–3:06 segment of Daily Dose of Math’s existing video for Q4. Configured the embedded player with start 141/end 186 and a direct YouTube fallback at 141 seconds; the fallback can continue beyond the question.
- Kept parent-selected metadata separate from reviewed recommendations. The Q4 card clearly states Parent’s selection and pending coach review before playback. Q1–Q3 recommendations and timestamps are unchanged; no unperformed Q4 review is claimed.
- Preserved support grading, post-answer independent credit, speech cancellation, return/navigation cleanup, and zero-write preview. No learner data is cleared and no new question, timer, or storage format is added.
- Passed node verification, synthetic DOM flows, relevant JavaScript syntax checks, and whitespace checks. The browser connection still failed; actual Q4 playback, content review, visual layout, and physical iPad validation remain pending.
- Updated README, project context, and continuation instructions for this narrow follow-up.

## 2026-09-27 — 2026 Problem 4: successive percentages

- Added only the requested fourth original guide, with a labeled faithful restatement, unchanged numbers and A–E choices, three hints, authored explanations, a subjective 9/10 teaching rating, source attribution, and informational 1 min 30 sec pace.
- Checked the problem, choices, answer E/120, and choose-100 method against LIVE by Po-Shen Loh. Direct AoPS access failed; the app retains the archive link and adds the actual checked source. Distinguished 120% of the original from a 20% increase.
- Added two binary Coach checks and one labeled adapted practice: a 25% decrease followed by a 20% increase gives 90% of the original. Included feedback for both choices and a True/False reasoning check.
- Supported prose-only problem/adaptation displays, percent pronunciation, a direct `?preview=1&problem=2026-4` review link, and four-guide counts/layout. Original history and grading remain intact; adaptations stay outside the 175-real-question count. There are now 4 originals, with 171 still to integrate.
- Kept Q4’s video list empty with a visible written/voice guidance notice because actual segment review was blocked by the unavailable browser connection. Existing Q1–Q3 segments and fallbacks are unchanged; Q4 video review remains outstanding.
- Passed mathematical/state verification, original choices and retained history checks, Q4 DOM flows, voice simulation, syntax, and whitespace checks. No physical iPad, actual new audio, visual layout, or Q4 video playback validation is claimed. Updated README, project context, and continuation instructions.

## 2026-09-27 — Browser voice for Coach’s Corner

- Added a voice picker populated from the browser/device, an automatic English default, Listen again, Stop speaking, and Mute/Unmute coach in the practice header.
- Spoken coaching follows learner actions: guided questions with two choices, selected feedback, requested hints/solutions, and adapted practice. Hidden solutions and unchosen feedback are excluded; revealed original steps have an explicit Listen button.
- Added spoken forms for mathematical symbols and measurements while preserving displayed content. Short queued utterances are replaced on the next request; stale completion/error callbacks cannot affect newer speech.
- Stop/mute, question changes, retry, close, mode changes, cross-tab reset, video, backgrounding, and page exit cancel narration. Page loading, voice-list updates, unmute, and returning to the page do not start audio.
- Kept voice settings in page memory with no storage writes or learning events. Existing records, grading, and Parent preview behavior are unchanged. No microphone, paid TTS service, or new runtime dependency was added.
- Passed state/speech verification and actual DOM interaction checks using a simulated browser speech engine, plus relevant syntax and whitespace checks. Browser connection was unavailable; actual audio, visual layout, and physical iPad/Safari playback remain unverified. Updated README, project context, and continuation instructions.

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
