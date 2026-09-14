# AMC-Tutorial — Project context and continuation guide

This document is the project memory for continuing work without the original chat. The repository should contain the implementation, learning goals, reviewed-content evidence, remaining work, and current verification status. Read this document and the README before making changes.

## Current update — 2026-09-14

The app integrates three reviewed coaching guides: 2026 AMC 8 Problems 1–3. The current update adds only a suggested pace to those three problems: within 1 minute for Q1, 1 minute 30 seconds for Q2, and 2 minutes for Q3. These are editorial coaching estimates for a learner who is familiar with the method, not official MAA per-question rules or recorded learner times. There is no start button, automatic timer, enforced deadline, or elapsed-time recording. Understanding remains the priority; taking longer while learning is welcome. The target remains 175 real questions; 172 are not integrated yet.

The 2026-09-11 content batch added Problems 2 and 3, per-question navigation and progress, reviewed video segments, and these continuation documents. That batch checked mathematical data, static assets, grading isolation, invalid and duplicate submissions, prior-record compatibility, and local browser-agent actions. For the 2026-09-14 pace update, `node verify.mjs`, syntax checks for `app.js`, `problems.js`, and `serve.cjs`, and `git diff --check` passed. The pre-update live HTML, app module, and problem data matched the checked-out main revision. No browser was connected for this update, so its visual layout and physical iPad behavior have not been verified. Use the deployment history below for publication status. A direct YouTube fallback is retained. Firebase sign-in and cross-device progress are not configured.

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

1. Use **real past AMC problems**, with source links, for the original-exam library. Do not replace them with invented questions. On 2026-09-14 the parent raised a separate future possibility: adapted practice with changed numbers to encourage fresh reasoning. That future possibility does not authorize implementing adaptations now or counting them as real AMC questions.
2. Initial collection: seven AMC 8 exam editions, **2026, 2025, 2024, 2023, 2022, 2020, and 2019**. Each edition has 25 questions: **175 questions total**. Treat this as a target collection, not a completed library or analysis.
3. Preserve the original mathematical data, diagram relationships, and A–E choices. Follow the actual AMC presentation where practical. Keep an expression on one line when it fits; allow horizontal scrolling for a long mathematical expression on a narrow screen. Normal prose and long answer choices may wrap to remain readable.
4. Distinguish verbatim source wording from a faithful restatement. The existing Q1 uses original wording; Q2 and Q3 are prepared as clearly labeled restatements with original-source links. Do not call restated wording “exact” or imply an adaptation is an official exam facsimile.
5. Clearly label AI-authored coaching additions **“GPT 6 Astra Ultra — Tips & Tricks.”** Credit an underlying source method when the tip explains a method already present on AoPS. The label is a requested editorial attribution, not a claim that an AI service runs in the app.
6. Recommend a suitable solution method and explain the recommendation. Method scores are **subjective teaching-suitability ratings**, not official AMC difficulty ratings, empirical mastery scores, or proof that one method is universally best.
7. Provide **1–3 actually reviewed YouTube recommendations per question** where suitable sources are available. One strong reviewed recommendation is sufficient. Do not add weak or unreviewed videos to reach three.
8. Embed the recommended YouTube segment in the app and keep a direct YouTube link as a fallback. The learner should be able to return to the same problem without losing the selected answer or leaving audio playing.
9. Distinguish supported practice from independent attempts. Hints, solution reveals, earlier wrong submissions in an attempt, and opening a walkthrough before completion must not become an “independent” success.
10. Work in short, reviewable batches while the parent evaluates the approach. The Q2/Q3 content batch and initial handoff are complete. The current authorized batch is **suggested-pace text for the existing 2026 Problems 1–3**, plus aligned documentation. **Do not silently expand to new problems or the rest of the year.** The parent said they will explicitly confirm when they want a full-year run.
11. Keep source control and publication on GitHub. Firebase is the intended future free-tier approach for identity and cross-device continuity, subject to a real implementation and verification.
12. No paid membership, subscription billing, native-store packaging, or commercial launch work is authorized now. Those possibilities were discussed only as future options. The parent explicitly returned the focus to Pingping first.
13. Display a gentle pace suggestion only: Q1 **within 1 min**, Q2 **within 1 min 30 sec**, Q3 **within 2 min**. Attribute the values to coaching judgment after familiarity with the method. Do not add start controls, automatic timing, deadlines, timing records, or time-based grading. The parent prefers low-pressure learning and may consider timing later alongside adapted practice.
14. The parent reviews remotely and cannot inspect the agent's local machine. Deliver an accessible preview or live website URL; local files and review panels alone are insufficient. The parent's 2026-09-14 instruction authorizes publishing the completed three-question pace update to the existing GitHub Pages site. For future work, follow the applicable user/session scope for publication; this does not expand authorization to a full-year batch.

## Learning flow to preserve

The intended flow is: attempt the real problem, request progressively stronger hints if needed, check the answer, study a recommended written method, explore the clearly attributed coaching tip or a reviewed video, then revisit and explain the reasoning. Avoid exposing a result in a preview or recommendation before the learner chooses to reveal help.

Keep the distinction between an attempt event and mastery. A correct answer on one attempt does not establish durable mastery. The notebook must reflect actual stored interactions. No initial fake streaks, mock statistics, invented student activity, or claims that all 175 questions were analyzed.

The pace suggestion is informational text; it never starts an attempt, changes independent/assisted credit, or records duration. Show it with reassurance that learning can take longer. If the parent later authorizes practice with changed numbers, label it as adapted practice and keep it separate from the source AMC question and its attempt history. Independently check any changed numbers, resulting diagrams, answer choices, and solution before use. Such practice does not count toward the 175 original questions; its timer design remains future work.

## Reviewed content in the first two batches

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

## Reviewed video evidence

All three current recommendations use different segments of the same verified video:

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
| `videos.js` | Curated recommendations and review metadata, keyed by problem ID. |
| `practice-state.js` | Attempt state, grading rules, saved-record validation, and progress summaries. |
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

The verifier checks local assets and UI targets, all three problem datasets, video IDs and timestamps, grading isolation, invalid/duplicate answers, and legacy records. It does not simulate actual YouTube playback or physical iPad behavior.

Optional browser-agent tools: read_practice_progress, start_practice_problem (opens/resumes), submit_practice_answer, request_practice_hint, reveal_practice_solution, retry_practice_problem, open_recommended_walkthrough, and return_to_practice_problem. They call the same functions as the visible controls. Unsupported browsers still use the normal UI.

Current selections and hint state are kept separately for each problem in page memory. Switching questions or closing/reopening the dialog preserves them. Reloading begins fresh attempts while keeping the saved learning history. Try again resets only the active question.

AGENTS.md contains concise continuation instructions. CHANGELOG.md records completed batches. Update both the current-state summary and the change history after a future batch.

## Progress storage and Firebase goal

Current learning records use browser **localStorage**, key **`pingping-amc8-practice-v1`**, with a maximum of 200 records. Keep this key unless a deliberate, tested migration preserves existing progress. Moving between pages of the same GitHub Pages origin can share the same storage; another device cannot.

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

1. The Q2/Q3 content batch and initial handoff are complete. The 2026-09-14 update is limited to pace suggestions for the existing three questions. Preserve their content and learner records; verify the checked-out/live revision when beginning a new Project.
2. Let the parent review the three-question experience. Continue in another short batch after they request it. The next sequential content begins at **2026 Problem 4**.
3. Before a new question is shown as available, inspect its real source, independently verify calculations and choices, author progressive hints and explanations, document source discrepancies, and review at least one suitable video if available. If no video has passed review, report that limitation honestly instead of inventing a recommendation.
4. Keep the library count tied to integrated reviewed guides, not merely archive links. The current integrated count is **3 of 175**, leaving **172** target questions, including **22** in the 2026 edition.
5. Broader product work still includes Firebase sign-in and cross-device progress, a complete in-app paper experience, and deeper revisit planning. On 2026-09-14 the parent suggested future adapted practice with changed numbers, followed by considering timing at that stage. These are future possibilities, not existing capabilities or authorization for this batch. Keep adaptations visibly separate from the original exams and exclude them from the 175-question count. Prioritize the next feature using actual feedback from Pingping and the parent.
6. A seven-exam topic and strategy report is due only after **all 175 questions have actually been reviewed and consistently classified**. The user wants to know what AMC 8 often tests and welcomes scores. Track topics, recurring techniques, representations, and common traps per question to support that later analysis.

For the eventual report, state the collection, denominator, and whether questions can carry multiple tags. Separate observed frequency from editorial learning priority and difficulty. Explain subjective scores. A pattern across seven editions is historical evidence, not a guarantee of what a future exam will contain. Interim observations from three questions must be labeled as a tiny sample and must not be presented as the 175-question report.

## Completion checks for a batch

- The actual source, choices, answer, and diagram or array agree mathematically.
- Restatement labels and original-source links are correct; no helper text accidentally gives away the intended task.
- Hints progress in strength; recommended method and AI additions are attributed.
- Suggested pace is labeled as coaching judgment, encourages taking time while learning, and does not create a timer or affect grading and records.
- Wrong answers, hints, reveals, and video use produce honest attempt records.
- Returning from video stops playback and preserves the current selection; changing question does not contaminate another problem’s state.
- Long expressions and choices remain usable on the intended screen sizes, with keyboard access and readable labels.
- Unsupported or unavailable video embeds still have a working direct link.
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
- Reviewed video: <https://www.youtube.com/watch?v=gzXlOkLl24U>
- Prior user projects offered as implementation references: <https://kmantec.github.io/bee4-to-tokyo/> and <https://kmantec.github.io/pingping-portfolio>.

The source and video evidence above is intentionally retained in the repository context. A future agent should not need access to this chat to understand what was reviewed, what was corrected, what remains uncertain, or what the parent has authorized.
