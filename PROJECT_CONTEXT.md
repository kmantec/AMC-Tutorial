# AMC-Tutorial — Project context and continuation guide

This document is the project memory for continuing work without the original chat. The repository should contain the implementation, learning goals, reviewed-content evidence, remaining work, and current verification status. Read this document and the README before making changes.

## Current update — 2026-09-27

The latest authorized batch adds **2026 Problem 4 only**: successive percent changes, a gentle 1 min 30 sec pace suggestion, three hints, written methods, two guided checks, one adapted problem with a reasoning check, and existing browser voice. Its original data and choices were checked against LIVE by Po-Shen Loh; direct AoPS access failed. No Q4 video is recommended because the actual segment could not be reviewed. A visible notice offers written/spoken guidance. The library now contains **4 of 175 real questions** and four separate adaptations. Problem 5 onward is not authorized.

The preceding voice request added browser-provided speech to the existing Coach’s Corner. Voice selection, replay, stop, and a header mute control are available. Coaching is spoken only after an interaction and only from already revealed content. Voice controls do not create learner records; preferences last for the page session. No microphone, paid TTS backend, Firebase, or new original questions were added. See Coach voice below for behavior and validation limits.

The app integrates four reviewed originals: 2026 AMC 8 Problems 1–4. The earlier coaching batch replaced the repeated generic footer with problem-specific Coach’s Corner checks: two short questions per original, two choices per question, and an explanation for either choice. Targeted checks stay hidden until requested; opening them before completing the original counts as support. After completing or reviewing the original, the learner can open one separately labeled changed-number practice and a two-choice reasoning check. There are four adaptations, excluded from the original-exam count of 4 of 175 (171 remain).

Parent preview is now the default until the parent explicitly starts saved learning. The URL `?preview=1` always starts a temporary preview without writing saved learner records. Start learning offers an explicit fresh notebook, or continuing existing saved records. Fresh start clears only this app’s original and coaching record lists in the current browser. Earlier records are preserved until that explicit choice, so the parent should choose Start fresh on Pingping’s iPad before her first lesson if it contains trial activity.

Pace suggestions are within 1 minute for Q1, 1 minute 30 seconds for Q2, 2 minutes for Q3, and 1 minute 30 seconds for Q4. These are coaching estimates after familiarity, not official MAA limits. There are no timer controls, automatic timing, deadlines, or elapsed-time records.

The 2026-09-11 batch added Problems 2 and 3 and the existing reviewed video segments. The 2026-09-14 batch added informational pace labels. The coaching and Q4 batches verify original and adapted mathematics, coaching transitions, independent/assisted grading, separate question state, preview with zero storage writes, explicit clear/resume, legacy records, reload, cross-tab reset, and storage failure handling. `node verify.mjs` includes the pure state/storage tests; `node ui-check.mjs` exercises actual app DOM handlers with isolated synthetic data. Relevant syntax and whitespace checks also apply. The browser connection was unavailable, so these are not visual layout or physical iPad/video-playback checks. Existing video segments and fallback links remain unchanged. Use the deployment history below for publication status. Firebase sign-in and cross-device progress are not configured.

Use the repository commit history and [GitHub Pages workflow history](https://github.com/kmantec/AMC-Tutorial/actions) for the exact published revision and deployment result. This document intentionally avoids a self-referential commit hash. Future sessions should compare the checked-out revision with the live deployment before changing content.

- Exact repository name: **AMC-Tutorial**.
- GitHub: <https://github.com/kmantec/AMC-Tutorial>
- Website: <https://kmantec.github.io/AMC-Tutorial/>
- Current product name in the interface: **Pingping’s Math Lab**.
- Original repository name was `pingping-amc8`; the rename to `AMC-Tutorial` was explicitly chosen by the user. Do not rename it again without a request.

## Purpose and learner

Build a useful personal mathematics coaching app for **Pingping (ผิงผิง)**, with iPad as the primary learning device. The immediate success criterion is better understanding, independent reasoning, and successful revisits to previously difficult questions. Feature count and commercial launch are secondary.

The parent wants the agent to act with the care of an excellent AMC coach: inspect the actual question, check the mathematics, compare useful solution methods, explain why a recommended method helps, identify common mistakes, and encourage the learner to explain the reasoning. A shortcut should support understanding.

Communicate with the parent **in Thai**. Write the app, question explanations, hints, video notes, and project documentation **in English** for Pingping. Keep the app welcoming without invented praise, fabricated progress, or promises of contest success.

## Agreed scope and durable preferences

1. Use **real past AMC problems**, with source links, for the original-exam library. Do not replace them with invented questions. On 2026-09-27 the parent authorized a separate changed-number practice for each of the first three originals, then requested Problem 4 in the same established format. Keep these adaptations labeled and excluded from real AMC counts.
2. Initial collection: seven AMC 8 exam editions, **2026, 2025, 2024, 2023, 2022, 2020, and 2019**. Each edition has 25 questions: **175 questions total**. Treat this as a target collection, not a completed library or analysis.
3. Preserve the original mathematical data, diagram relationships, and A–E choices. Follow the actual AMC presentation where practical. Keep an expression on one line when it fits; allow horizontal scrolling for a long mathematical expression on a narrow screen. Normal prose and long answer choices may wrap to remain readable.
4. Distinguish verbatim source wording from a faithful restatement. The existing Q1 uses original wording; Q2–Q4 are prepared as clearly labeled restatements with original-source links. Do not call restated wording “exact” or imply an adaptation is an official exam facsimile.
5. Clearly label AI-authored coaching additions **“GPT 6 Astra Ultra — Tips & Tricks.”** Credit an underlying source method when the tip explains a method already present on AoPS. The label is a requested editorial attribution, not a claim that an AI service runs in the app.
6. Recommend a suitable solution method and explain the recommendation. Method scores are **subjective teaching-suitability ratings**, not official AMC difficulty ratings, empirical mastery scores, or proof that one method is universally best.
7. Provide **1–3 actually reviewed YouTube recommendations per question** where suitable sources are available. One strong reviewed recommendation is sufficient. Do not add weak or unreviewed videos to reach three.
8. Embed the recommended YouTube segment in the app and keep a direct YouTube link as a fallback. The learner should be able to return to the same problem without losing the selected answer or leaving audio playing.
9. Distinguish supported practice from independent attempts. Hints, guided coach checks, solution reveals, earlier wrong submissions in an attempt, and opening a walkthrough before completion must not become an “independent” success. Post-answer review does not rewrite a completed result.
10. Work in short, reviewable batches while the parent evaluates the approach. The current authorized batch is **2026 Problem 4**, using the existing two-choice Coach’s Corner, labeled adapted practice, browser voice, and preview/learning separation. Preserve the three earlier originals and their records. **Do not silently expand to new originals or the rest of the year.** The parent said they will explicitly confirm when they want a full-year run.
11. Keep source control and publication on GitHub. Firebase is the intended future free-tier approach for identity and cross-device continuity, subject to a real implementation and verification.
12. No paid membership, subscription billing, native-store packaging, or commercial launch work is authorized now. Those possibilities were discussed only as future options. The parent explicitly returned the focus to Pingping first.
13. Display a gentle pace suggestion only: Q1 **within 1 min**, Q2 **within 1 min 30 sec**, Q3 **within 2 min**, Q4 **within 1 min 30 sec**. Attribute the values to coaching judgment after familiarity with the method. Do not add start controls, automatic timing, deadlines, timing records, or time-based grading. The parent prefers low-pressure learning. Adapted practice is now available, but timing still requires a later request.
14. The parent reviews remotely and cannot inspect the agent's local machine. Deliver an accessible preview or live website URL; local files and review panels alone are insufficient. The parent’s remote-review preference and 2026-09-27 go-ahead authorize publishing the prior coaching/preview and voice batches and the newly requested Problem 4 to the existing GitHub Pages site. For future work, follow the applicable user/session scope for publication; this does not authorize a full-year batch.
15. Pingping studies independently. Use short, two-choice or True/False reasoning checks with explanatory feedback. Keep questions optional and reveal one at a time. A correct choice can result from guessing; do not present it as proof of understanding or a mastery score.
16. Parent testing must not become Pingping’s learner history. Preview never writes records. Offer an explicit fresh start and a non-destructive resume option; never silently clear saved history on deployment or reload.
17. The parent requested spoken coaching with browser-provided selectable voices and Mute. Keep speech optional, driven by the learner’s interactions, and limited to visible/revealed content. Audio controls must not modify grading, create records, or bypass support/reveal gates. Cancel earlier speech on context changes and keep the text flow usable without a speech engine.

## Learning flow to preserve

The intended flow is: attempt the real problem, request progressively stronger hints if needed, check the answer, study a recommended written method, explore the clearly attributed coaching tip or a reviewed video, then revisit and explain the reasoning. Avoid exposing a result in a preview or recommendation before the learner chooses to reveal help.

Keep the distinction between an attempt event and mastery. A correct answer on one attempt does not establish durable mastery. The notebook must reflect actual stored interactions. No initial fake streaks, mock statistics, invented student activity, or claims that all 175 questions were analyzed.

The pace suggestion is informational text; it never starts an attempt, changes independent/assisted credit, or records duration. Show it with reassurance that learning can take longer. Each original now has one checked adaptation, labeled separately and recorded outside original AMC attempts. An adaptation appears only after the original is completed or its solution is requested. Its answer and short reasoning check appear after a response. Feedback explains either choice without red failure scoring. A retry after seeing feedback is a revisit, not a new first response; retained coaching history carries this distinction across reloads. These records are capped, so they are not lifetime mastery evidence. Timing remains future work.

## Coach voice

`coach-speech.js` uses `speechSynthesis`, `SpeechSynthesisUtterance`, `getVoices()`, and `voiceschanged`. It prefers English for the automatic voice while permitting selection from the actual device list. Speech is initiated synchronously from coaching interactions or an explicit Listen button, never from initial page render, voice discovery, unmute, or returning from the background. Requested coach questions, both options, selected feedback, hints, revealed solution steps, and adapted practice are spoken. The app does not read hidden solutions or unchosen feedback. Math notation such as minus, times, square root, brackets, and square centimeters is converted into spoken words without changing the displayed math.

Listen again repeats the last coach message in the active problem. Listen to these steps is gated by the original solution’s revealed state. Stop speaking cancels the current utterance and queue. Mute coach, in the practice header, cancels speech and suppresses future spoken coaching until unmuted. Starting another spoken message replaces earlier speech. Changing problems, retrying, closing practice, changing learning modes, cross-tab reset, video actions, and background/page exit cancel queued speech. Canceled events cannot finish or fail a newer request. Starting voice playback also removes an embedded video so they do not overlap.

Voice and mute settings are page-session preferences; they persist while switching problems but reset on reload. They do not write to storage or create learning events, so Parent preview remains entirely free of storage writes. Existing help/reveal actions still have their normal assisted-attempt effects. Speech failures display a readable status and leave the text flow working. The feature requests no microphone permission and adds no TTS backend or API key. Available voices, pronunciation, network requirements, and real playback depend on the browser/device; do not promise identical voices across devices or offline speech.

`coach-speech.test.mjs` uses `speech-fixture.mjs` to check the browser API contract, late voice loading, language fallback, spoken math, mute, queue replacement, failures, and stale callbacks. `ui-check.mjs` exercises actual app handlers with the simulated engine, including spoiler gates, replay without learner events, and lifecycle cancellation. These tests passed but produce no audible speech. The browser connection failed in this environment; actual voice quality, visual layout, and physical iPad/Safari playback remain unverified. A real-device review should try Guide me, voice selection, both answer paths, Mute/Unmute, Listen again, a long solution, switching questions, video, and returning from background.

Technical references: [MDN getVoices](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices), [voiceschanged](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/voiceschanged_event), [cancel](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/cancel), and [speech error events](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/error_event).

## Reviewed original content

### 2026 Problem 1

- Source: <https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_1>
- Review date: 2026-09-10.
- Focus: arithmetic, repeating signs, grouping.
- Verified answer: **A, 18**.
- Recommended method: group consecutive triples, obtaining totals 0, 3, 6, and 9. The authored explanation credits **AoPS Solution 4**.
- Teaching-suitability score: **9/10**, subjective and explained.
- Coaching emphasis: keep each sign attached to its number when regrouping.
- The original expression remains on a single mathematical line, with horizontal scrolling when necessary.

### 2026 Problem 2

- Source: <https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_2>
- Review date: 2026-09-11.
- Focus: organized counting and weighted totals in a 5-by-7 number array.
- Verified structure: twenty 1s, twelve 2s, and three 3s; total **53**, choice **C**.
- Recommended method: count each value, then multiply count by value. The authored explanation credits **AoPS Solutions 3 and 6**.
- Teaching-suitability score: **9/10**, subjective and explained.
- Alternative coaching: count in layers, 35 + 15 + 3 = 53, crediting the layer idea in **AoPS Solution 5**.
- Common mistakes: counting positions without their values, or counting border corners twice.
- Source review caught a displayed formula in **AoPS Solution 7** that evaluates to 56 rather than 53. Do not reproduce that formula as a valid solution.
- The app uses a labeled restatement. The original question explicitly supplies the counts of twenty 1s and three 3s; retaining those counts preserves the original information. Preserve the actual matrix and choices.

### 2026 Problem 3

- Source: <https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_3>
- Review date: 2026-09-11.
- Focus: perimeter, area-to-side conversion, and a right triangle.
- Verified answer: **D, square and triangle only**.
- Recommended method: compare each shape’s perimeter with the 24 cm wire. Hexagon: 30 cm. Square: side 6 cm, perimeter 24 cm. Triangle: missing side 10 cm, perimeter 24 cm.
- The full explanation credits **AoPS Solution 1** and explicitly includes the missing-side calculation. Teaching-suitability score: **9/10**, subjective and explained.
- Faster multiple-choice method: eliminate choices containing the hexagon, then verify the square; this selects D. Credit **AoPS Solution 2** for the elimination idea.
- Common mistakes: treating square centimeters as a length, or omitting the triangle’s third side.
- Source review caught wording in **AoPS Solution 1** saying “less than 24”; the two successful shapes have perimeter **exactly 24 cm**. Use the corrected comparison.
- The app uses a labeled restatement with preserved numerical facts and choices.

### 2026 Problem 4

- Source archive: <https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_4>.
- Actually checked source: <https://live.poshenloh.com/past-contests/amc8/2026/problem/4>. Its problem, five choices, answer E, and written choose-100 method were readable. Direct AoPS fetches failed, so no claim is made that an AoPS solution number or its wording was reviewed.
- Review date: 2026-09-27. Labeled restatement preserves Brynn’s 20% decrease in July followed by a 50% increase in August, and choices A–E: 80, 90, 100, 110, 120. There is no diagram.
- Verified answer: **E, 120**. Using 100 units, July leaves 80; August adds half of 80, giving 120. The final savings are 120% of the original; the net increase is 20%.
- Recommended choose-100 method is also shown by LIVE by Po-Shen Loh and is credited accordingly. The independently authored explanation emphasizes the changing base. Alternative: `(1 − 0.20) × (1 + 0.50) = 1.20`. Tests check the same ratio for several starting balances.
- Teaching-suitability rating: **9/10**, subjective and explained. Suggested pace: **within 1 min 30 sec** once familiar, with no timer.
- Coach checks distinguish the base for August’s increase and final percentage versus percentage gained. Common error: combining percentage rates as if both used the same original base.
- Video review could not proceed because browser connection failed before opening the player. Keep the recommendation list empty and show the no-video notice until an actual segment passes review; Q3’s transition frame is not sufficient evidence.

## Authored coaching and adapted practice — 2026-09-27

Each original has two guided checks. Q1 checks valid grouping and preserving signed terms. Q2 checks remaining positions and count × value. Q3 checks perimeter versus area and converting square area into a side length. Q4 checks the changing percentage base and total-versus-increase meaning. The adapted practice then offers a short reasoning check with two choices. The Q4 addition preserves all earlier original data, choices, video recommendations, and pace estimates.

| Based on | Adaptation and independently checked answer |
| --- | --- |
| 2026 Q1 | `2 + 3 − 4 + 5 + 6 − 7 + 8 + 9 − 10 + 11 + 12 − 13`; block totals 1 + 4 + 7 + 10 = **22**, choice B. |
| 2026 Q2 | Same 5-by-7 arrangement with twenty 2s, twelve 3s, and three 4s; **40 + 36 + 12 = 88**, choice A. Row sums independently total 88. |
| 2026 Q3 | Full 36 cm wire: regular hexagon with side 6 has perimeter 36; square of area 100 has perimeter 40; right triangle with legs 9 and 12 has hypotenuse 15 and perimeter 36. **Hexagon and triangle only**, choice A. Full length, no overlap, cutting, or leftover wire is explicit. |
| 2026 Q4 | A 25% decrease followed by a 20% increase: 100 → 75 → 90, so **90%**, choice B. The 95 distractor exposes adding rates on the wrong base; the reflection checks that retaining 90% means losing 10%. |

All adaptations are authored coaching, not official AMC questions. Source links credit the original methods; the requested GPT 6 Astra Ultra attribution remains. No separate video recommendation or time estimate is claimed for these adaptations.

## Reviewed video evidence

Q4 currently has no reviewed recommendation. Q1–Q3 retain three different segments of the same verified video:

- Title: **AMC 8 2026: Problems 1-20 Breakdown**.
- Channel: **Daily Dose of Math**.
- Video ID: `gzXlOkLl24U`.
- Canonical link: <https://www.youtube.com/watch?v=gzXlOkLl24U>.
- Review basis: actual video frames and visible English captions. Transcript export was unavailable. Do not claim a complete transcript or an independent audio-quality review.
- Only the listed problem segments have been reviewed. The title does not make the remaining video content reviewed or recommended.

| Problem | Suggested segment | Review findings and limitation |
| --- | --- | --- |
| 2026-1 | 0:00–0:29 (`start=0`, `end=29`) | The visible grouping matches the recommended triple-grouping method. Fast explanation; pausing is useful. |
| 2026-2 | 0:29–1:03 (`start=29`, `end=63`) | Frames show four groups of five 1s, four groups of 2s with sum six each, and three 3s. At 1:02, C/53 is circled. Grouping is useful, but annotations become crowded. |
| 2026-3 | 1:03–2:22 (`start=63`, `end=142`) | Correct perimeter calculations for all shapes. The presenter states the 6–8–10 triangle rather than deriving the missing side; the app’s written solution supplies that step. |

Segment boundaries are approximate. Rolling captions may retain a prior conclusion or the screen may briefly transition to the next question. At 2:21, captions conclude Q3’s answer while the picture has begun Q4. Do not describe these as frame-exact edits.

Use a non-spoiling recommendation reason before playback. More detailed limitations can appear with the player. Keep recommendation metadata separate from the answer logic. An external-link fallback must lead to the intended video and timestamp.

## Technical structure and hosting

The current project is a static website: **HTML, CSS, and browser JavaScript modules**. There is no application backend and no build step required to serve it. GitHub Pages publishes the `main` branch from the repository root. All local assets should use relative URLs so deployment under `/AMC-Tutorial/` works.

| File | Responsibility |
| --- | --- |
| `index.html` | App structure, navigation, practice dialog, and accessible controls. |
| `styles.css` | Responsive layout and paper-like mathematics presentation. |
| `app.js` | Rendering, navigation, learner interactions, video lifecycle, and optional browser-agent tools. |
| `problems.js` | Reviewed question data, suggested pace, choices, hints, solutions, ratings, source attribution, and reflection prompts. |
| `videos.js` | Reviewed recommendations and metadata by problem ID; an empty list requires an explicit availability note. |
| `practice-state.js` | Original attempt state, grading rules including coach support, legacy validation, and original progress. |
| `coach-content.js` | Authored two-choice checks, four checked adaptations, feedback, and source credits. |
| `coaching-state.js` | Per-question check/adaptation transitions, duplicate-answer protection, and exposure state. |
| `coach-speech.js` | Browser voice list, speech formatting, selected voice, mute, cancellation, and error handling. |
| `coach-speech.test.mjs`, `speech-fixture.mjs` | Synthetic speech API checks; no real device audio or learner data. |
| `learning-store.js` | Preview/saved-learning modes, compatible storage, separate coaching records, explicit fresh start/resume. |
| `verify.mjs`, `coaching-state.test.mjs`, `learning-store.test.mjs` | Dependency-free checks using synthetic fixtures. |
| `ui-check.mjs` | Optional jsdom interaction checks of actual app markup and handlers, without real learner data. |
| `manifest.webmanifest`, `icon.svg` | App metadata and icon. A manifest by itself does not establish offline support or a native-store app. |
| `.nojekyll` | Static GitHub Pages serving. |
| `README.md` | Current availability, setup, limitations, and sources. |

The prior working folder was named `outputs/pingping-amc8`. That local folder name is historical; it is not the repository name. A new Project can clone `https://github.com/kmantec/AMC-Tutorial.git` into its own workspace. Do not depend on the old chat’s absolute filesystem paths, temporary browser handles, local server sessions, or agent memory.

Serve the checkout over local HTTP during development because it uses JavaScript modules. Syntax checks such as `node --check app.js`, `node --check problems.js`, `node --check videos.js`, and `node --check practice-state.js` are useful but are not substitutes for checking the actual learning flow.

The original Windows environment had no `gh` executable and command-line push could not obtain usable Git credentials. The earlier publication used an authenticated GitHub browser upload. This is an environment observation, not a requirement for future work; use the supported authenticated Git workflow available in the new Project. Never inspect or expose credentials to work around authentication failure.

## Repository-contained development and verification

Run from the cloned repository root with a recent Node.js version:

    node serve.cjs

Open http://127.0.0.1:8791/. Stop the server with Ctrl+C. An optional port argument is supported. This server is for local development; GitHub Pages serves the public files directly.

    node verify.mjs
    node --check app.js
    node --check serve.cjs

The verifier checks local assets and UI targets, all original/adapted mathematics, video metadata, grading isolation, coaching state, invalid/duplicate answers, legacy records, preview isolation, reset/resume, and storage errors. For actual app DOM interaction checks, follow the optional jsdom installation instructions in README, then run `node ui-check.mjs`. No runtime dependency is added to the app. Speech coverage also checks voice discovery, mute, replay, hidden-content gates, and queue cancellation using a simulated engine. These checks do not render visual layout, produce actual audio, or simulate YouTube playback or physical iPad behavior.

Optional browser-agent tools: read_practice_progress, start_practice_problem (opens/resumes), submit_practice_answer, request_practice_hint, reveal_practice_solution, retry_practice_problem, open_recommended_walkthrough, and return_to_practice_problem. They call the same functions as the visible controls. Unsupported browsers still use the normal UI.

A `?problem=2026-4` link opens that original on load; combine it with `?preview=1&problem=2026-4` for safe remote review. Unknown IDs are ignored. Deep links do not speak or write learner records on opening.

Selections, hints, guided checks, and adapted practice state are kept separately for each problem in page memory. Switching questions or closing/reopening the dialog preserves them. Reloading begins fresh attempts; saved-learning mode retains history, while preview activity disappears. Try again resets only the active question. Entering preview or starting/resuming learning clears all active attempts so trial state cannot cross modes.

AGENTS.md contains concise continuation instructions. CHANGELOG.md records completed batches. Update both the current-state summary and the change history after a future batch.

## Progress storage and Firebase goal

Original learning records use browser **localStorage**, key **`pingping-amc8-practice-v1`**, with a maximum of 200 records. Keep this key unless a deliberate, tested migration preserves existing progress. Older Q1 records remain compatible. Coaching checks, adaptations, and reflections use a separate **`pingping-amc8-coaching-v1`** list capped at 200; saved-learning opt-in uses **`pingping-amc8-mode-v1`**. Original progress counts only original events.

Before opt-in, or when opened with `?preview=1`, the page uses temporary empty lists and performs no storage writes. Existing saved records are not shown in preview and remain intact. Start learning offers Start fresh (explicitly clear the two app record lists) or Continue saved learning (restore retained history). Both discard preview interactions. Once saved learning is enabled, the normal URL restores it; the parent should keep using the preview URL for later tests.

Writes reread retained records to preserve sequential changes from other tabs. Storage events in learning mode refresh records and discard active attempts, preventing attempts from before a cross-tab reset from being submitted as new work. Storage failure leaves session-only learning with a visible notice; the app does not claim unavailable persistence. The store is not a transactional multi-user database. Records never enter Git. Moving between pages of the same GitHub Pages origin can share storage; another device cannot. A fresh start affects only the browser where it is confirmed, not all devices.

The notebook is not an account system. Signing in and cross-device synchronization are **not implemented** at this stage. The app does not call a live AI model and does not need a model API key for its reviewed static coaching content.

Future requested direction:

- Firebase Authentication for identity and signing in on multiple devices.
- Cross-device learning progress requires an actual data store and sync behavior in addition to Authentication; Firestore was discussed as the intended option.
- Work within the free-tier goal and document actual configuration and quotas when implemented. Do not promise unlimited free operation.
- Use owner-scoped database access rules and handle sign-out, reload, offline use, and merging of existing local progress thoughtfully.
- Keep private learner records, service credentials, secrets, and tokens out of Git. Do not add payment or native-store systems under the guise of Firebase setup.

## Attribution and reuse boundaries

Original AMC questions are MAA material; AoPS hosts community solution content. This project is not affiliated with or endorsed by MAA, AoPS, or the video creator. Link to sources and distinguish source material from authored explanation.

Commercial reuse rights have **not** been established. Public accessibility of an exam or solution page is not itself reuse permission. Respect applicable source reuse limits and copyright requirements as the collection grows. Prefer an accurately labeled faithful restatement with an original-source link when a full reproduction is not appropriate; never disguise a rewritten or simplified task as verbatim exam text.

The parent’s preference is to stay faithful to real AMC questions. If a rights limitation prevents that presentation, document the specific limitation and propose the closest suitable form. Do not silently replace it with a newly invented question or download/rehost YouTube videos. The app embeds the source player and links directly to the source video.

## Remaining work and order of operations

1. Four original guides (2026 Q1–Q4), their pace suggestions and adaptations, preview controls, and browser voice are integrated. Q4’s video review remains outstanding. Preserve original content, honest grading, preview isolation, and saved learner records; verify the checked-out/live revision when beginning a new Project.
2. Let the parent review the four-question experience. Continue in another short batch after they request it. The next sequential content begins at **2026 Problem 5**, only after authorization. Complete Q4’s actual video review when browser access permits.
3. Before a new question is shown as available, inspect its real source, independently verify calculations and choices, author progressive hints and explanations, document source discrepancies, and review at least one suitable video if available. If no video has passed review, report that limitation honestly instead of inventing a recommendation.
4. Keep the library count tied to integrated reviewed guides, not merely archive links. The current integrated count is **4 of 175**, leaving **171** target questions, including **21** in the 2026 edition.
5. Broader product work still includes Firebase sign-in and cross-device progress, a complete in-app paper experience, deeper revisit planning, and possible timing only after a later request. The four current adaptations are fixed, reviewed examples; random generation and larger practice sets are not implemented. Keep adaptations separate from original exams and their 175-question count. Prioritize future work using actual feedback from Pingping and the parent.
6. A seven-exam topic and strategy report is due only after **all 175 questions have actually been reviewed and consistently classified**. The user wants to know what AMC 8 often tests and welcomes scores. Track topics, recurring techniques, representations, and common traps per question to support that later analysis.

For the eventual report, state the collection, denominator, and whether questions can carry multiple tags. Separate observed frequency from editorial learning priority and difficulty. Explain subjective scores. A pattern across seven editions is historical evidence, not a guarantee of what a future exam will contain. Interim observations from four questions must be labeled as a tiny sample and must not be presented as the 175-question report.

## Completion checks for a batch

- The actual source, choices, answer, and diagram or array agree mathematically.
- Restatement labels and original-source links are correct; no helper text accidentally gives away the intended task.
- Hints progress in strength; recommended method and AI additions are attributed.
- Suggested pace is labeled as coaching judgment, encourages taking time while learning, and does not create a timer or affect grading and records.
- Wrong answers, hints, guided coach checks, reveals, and video use produce honest attempt records.
- Every new reasoning check has two clear choices and explanatory feedback. Adaptations are labeled and independently checked; retries do not create new first-response credit.
- Preview writes no records, mode changes discard temporary attempts, and only explicit Start fresh clears saved app history. Resume and Cancel preserve learner history.
- Returning from video stops playback and preserves the current selection; changing question does not contaminate another problem’s state.
- Long expressions and choices remain usable on the intended screen sizes, with keyboard access and readable labels.
- Unsupported or unavailable video embeds still have a working direct link.
- Speech reads only permitted content; voice loading never autoplays; mute and context changes cancel all queued narration. Speech controls never create learner events. Distinguish simulated speech checks from actual device audio testing.
- Reloaded progress remains valid, and old Q1 records remain compatible with the expanded library.
- The deployment succeeds and the actual live URL serves the new assets. Record what was tested and distinguish browser checks from physical iPad testing.
- Update README and this document to match the published state, including counts and unfinished work.

## Prompt for continuing in a new Project

> Please read README.md and PROJECT_CONTEXT.md before changing the app. Continue AMC-Tutorial for Pingping, using Thai for our conversation and English in the app. Preserve the existing reviewed content, original-source attribution, subjective coaching ratings, and reviewed embedded-video behavior. First summarize the actual repository and live deployment state. Work only on the next small batch or feature I authorize; do not begin a full year until I explicitly confirm. Keep this project documentation current so it remains usable without the original chat.

## Source index

- Exam collection: <https://artofproblemsolving.com/wiki/index.php?title=AMC_8_Problems_and_Solutions>
- 2026 Q1: <https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_1>
- 2026 Q2: <https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_2>
- 2026 Q3: <https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_3>
- 2026 Q4 archive: <https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_4>
- 2026 Q4 checked source: <https://live.poshenloh.com/past-contests/amc8/2026/problem/4>
- Reviewed video: <https://www.youtube.com/watch?v=gzXlOkLl24U>
- Prior user projects offered as implementation references: <https://kmantec.github.io/bee4-to-tokyo/> and <https://kmantec.github.io/pingping-portfolio>.

The source and video evidence above is intentionally retained in the repository context. A future agent should not need access to this chat to understand what was reviewed, what was corrected, what remains uncertain, or what the parent has authorized.
