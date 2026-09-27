# AMC-Tutorial · Pingping’s Math Lab

An English mathematics practice app for Pingping, designed around iPad learning and real AMC problems.

**[Open the app](https://kmantec.github.io/AMC-Tutorial/)** · **[Parent preview — nothing saved](https://kmantec.github.io/AMC-Tutorial/?preview=1)** · **[Project context and continuation guide](PROJECT_CONTEXT.md)** · **[Change history](CHANGELOG.md)**

## Start here in a new Project

Read [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) and [AGENTS.md](AGENTS.md) before changing the app. They preserve the parent’s goals, decisions, reviewed-source evidence, technical structure, and remaining work. The original chat is not required.

## Available now

**Four reviewed guides: 2026 AMC 8 Problems 1–4.**

[Preview Problem 4 without saving records](https://kmantec.github.io/AMC-Tutorial/?preview=1&problem=2026-4).

| Problem | Practice focus | Suggested pace once familiar | Video segment and review status |
| --- | --- | --- | --- |
| 1 | Grouping a repeating arithmetic expression | Within 1 min | 0:00–0:29 |
| 2 | Organized counting in a number array | Within 1 min 30 sec | 0:29–1:03 |
| 3 | Perimeter, square area, and a right triangle | Within 2 min | 1:03–2:22 |
| 4 | Successive percent changes and the changing base | Within 1 min 30 sec | 2:21–3:06 · Parent-selected; coach review pending |

Each problem displays a gentle pace suggestion. These are authored coaching estimates for practice after understanding the method, not official MAA per-question limits or measured learner times. Take the time needed when learning. There is no start button, automatic timer, time limit, or elapsed-time recording.

Each guide preserves five original answer choices, three staged hints, checked answer feedback, a recommended written solution, an explained subjective teaching rating, an alternative approach, and **“GPT 6 Astra Ultra — Tips & Tricks.”** Its **Coach’s Corner** now has two short reasoning checks, each with only two choices and feedback explaining either answer. Targeted checks appear after the learner asks for guidance; opening them before completing the original counts as support.

After completing or reviewing the original, the learner may try **one changed-number problem**, then one two-choice reasoning check. These four adaptations are labeled **“Adapted practice — not an official AMC question”** and are separate from original-exam progress. They test grouping and signs (Q1), counting values in an array (Q2), perimeter (Q3), and successive percent changes (Q4). A two-choice response is a learning check, not proof of mastery.

All four guides link to segments of one Daily Dose of Math video. Q1–Q3 retain their reviewed coach recommendations. For Q4, the parent supplied **2:21–3:06**; its card says **Parent’s selection** and makes clear that coach review is pending. This is not presented as a reviewed recommendation. The embedded player is configured with start 141 and end 186 seconds, and the fallback YouTube link starts at 2:21 (it may continue past the question). Returning or switching questions removes the player. Any walkthrough opened before completion counts as support.

Question 1 retains its original short wording. Questions 2–4 use clearly labeled concise restatements; the mathematical data and A–E choices remain unchanged. Every guide links to the original question and source solutions. Q4 additionally links to the [LIVE by Po-Shen Loh source actually checked](https://live.poshenloh.com/past-contests/amc8/2026/problem/4); direct AoPS access was unavailable during this batch. Expressions stay on one mathematical line, with horizontal scrolling on narrow screens; longer prose and text choices wrap.

Selections, hints, and coaching checks stay with their question while switching or closing/reopening the practice dialog in the same page session. **Try again** resets only that question. Repeating an adaptation after feedback does not earn first-response credit again while that history is retained.

## Visual guide

The interface uses muted blue for primary actions, white outlined secondary buttons, and a sage-green Coach’s Corner with separate white voice and reasoning cards. Navigation has an active indicator, while headings and information labels use neutral surfaces. Disabled controls have a muted fill. External source links are underlined.

Controls have visible keyboard focus and touch targets of at least 44 px in the refreshed areas. Coach actions use two columns, reducing to one on narrow phones. The original question remains on a white paper-like surface. This visual update changes no problem content, pacing, grading, speech behavior, or learner records.

The stylesheet parsed successfully; selected normal-text color pairs exceed 4.5:1 contrast and the refreshed control borders exceed 3:1 against white. Existing verification and DOM interaction checks passed. These checks do not render layout; browser connection failed, so actual screenshots and physical iPad validation remain pending.

## Coach voice

Coach’s Corner can speak using the browser’s **Web Speech API**. Choose a voice from **Coach voice**; Automatic English voice prefers an available English voice. The list updates when the browser finishes loading its voices. Available names and pronunciation depend on the device and browser.

- Tap **Guide me** to hear the current question and its two choices. Choosing an answer reads the displayed feedback; **Next small step** reads the next check.
- Requested hints, revealed solutions, and adapted practice can also be read. Hidden answers and unchosen feedback are never included. **Listen to these steps** reads an original solution only after it is revealed.
- **Listen again** repeats the current coach message; **Stop speaking** stops it. **Mute coach**, in the practice header, stops speech and keeps later coaching silent until **Unmute coach** is pressed.
- Loading the page or opening an original problem is silent. Changing problems, retrying, closing practice, switching learning modes, starting a video, or leaving the page stops earlier speech. Returning or unmuting does not automatically replay it.

Voice and mute choices last for the current page session, including when switching problems. They are not saved to storage and never add learning records. There is no microphone use, speech recognition, or paid TTS service added. The browser’s voices may require a connection; offline playback is not guaranteed. Unsupported or failed speech leaves the text activities usable and displays a notice. On a device that blocks playback, tap **Listen again** or select another available voice.

## Parent testing and Pingping’s first session

The app starts in **Parent preview** until saved learning is explicitly enabled. Preview interactions stay in page memory: they are never saved or copied into Pingping’s notebook. The [parent preview link](https://kmantec.github.io/AMC-Tutorial/?preview=1) also works after learning has been enabled and preserves saved learner history.

On Pingping’s iPad, choose **Start learning → Start fresh for Pingping**. If older records exist, the confirmation says **Start fresh · Clear saved practice** and explains that it clears only this app’s saved practice in that browser. This removes earlier test records before her first lesson. **Continue saved learning** preserves existing learner records instead; Cancel makes no changes. Publication does not silently delete anyone’s history.

After starting learning, subsequent visits to the normal app link save and restore learning on that browser. Reloading starts fresh attempts while retaining history. Storage failures are labeled as session-only learning. Firebase accounts and cross-device sync are not available yet.

## Scope and unfinished work

The target is **175 real questions** from seven editions: **2026, 2025, 2024, 2023, 2022, 2020, 2019**. Archive links are available for all seven, four guides are integrated: **171 questions remain**, including 21 from 2026. The next sequential question is 2026 Problem 5.

The parent wants short, reviewable batches and will explicitly authorize a full-year run later. Firebase authentication and cross-device progress, complete in-app papers, timed practice, and the 175-question topic/strategy report are not implemented. No fabricated mastery, streaks, or completed analyses are displayed.

The latest authorized batch adds **2026 Problem 4 only**, extending the established hints, two-choice coaching, adapted practice, and selectable browser voice. The earlier preview/start-fresh behavior remains. Adaptations do not increase the original-exam count of **4 of 175**. Timers, Problem 5 onward, and a full-year content run require a later request.

The current priority is personal learning for Pingping. Paid subscriptions and native-store apps were discussed only as future possibilities and are outside the current scope.

## Run and verify

No package installation, build step, or backend is required. From the repository root, use a recent Node.js version:

    node serve.cjs

Open http://127.0.0.1:8791/. Stop with Ctrl+C. An optional port can be supplied, for example:

    node serve.cjs 8792

Run the checks:

    node verify.mjs
    node --check app.js
    node --check serve.cjs

Verification checks assets and UI targets, original and adapted mathematics, video metadata, independent/assisted grading, question isolation, coaching transitions, duplicate-answer protection, legacy records, preview isolation, explicit resets, and storage failure handling. Speech tests check voice loading and selection, mathematical symbols, queue replacement, mute, errors, and stale callbacks. All tests use synthetic records and simulated speech only.

For the optional DOM interaction check, install the development-only dependency and run:

    npm install --no-save --package-lock=false --ignore-scripts --no-audit --no-fund jsdom@26.1.0
    node ui-check.mjs

This exercises actual app markup and handlers, including choices, feedback, mode changes, reload, cross-tab reset, and speech controls. Voice interaction checks use a simulated engine to verify spoiler gates, no record changes from audio controls, and cancellation on navigation, video, backgrounding, and reset. Problem 4 coverage also checks its original choices, prose-only layout state, parent-selected video bounds and honest review labels, percent narration, direct preview link, wrong/correct and assisted attempts, adaptation retries, and retained Q1–Q3 history. These checks do not render layout, produce real audio, or play video. The browser connection was unavailable for this batch, so visual layout, actual voice quality, and physical iPad playback remain unverified. The app itself still requires no package installation or build step.

## Hosting and data

- Repository: [kmantec/AMC-Tutorial](https://github.com/kmantec/AMC-Tutorial).
- GitHub Pages: main branch, repository root, HTTPS. Keep asset URLs relative.
- Original records: `pingping-amc8-practice-v1`; up to 200 compatible learning records.
- Separate coaching/adapted records: `pingping-amc8-coaching-v1`; up to 200 events. Saved-learning opt-in: `pingping-amc8-mode-v1`.
- Parent preview performs no storage writes; explicit Start fresh clears only the two record lists in this browser.
- No Firebase configuration, server credentials, API keys, or live AI calls are bundled.
- Existing metadata does not imply offline caching: no service worker is implemented.

Only source code and public documentation belong in Git. Keep private learner records and credentials out of the repository. Actual deployment history is available in [GitHub Actions](https://github.com/kmantec/AMC-Tutorial/actions) and the commit history.

## Sources

- [AMC 8 archive](https://artofproblemsolving.com/wiki/index.php?title=AMC_8_Problems_and_Solutions)
- [2026 Problem 1](https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_1)
- [2026 Problem 2](https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_2)
- [2026 Problem 3](https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_3)
- [2026 Problem 4 — AoPS archive](https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_4)
- [2026 Problem 4 — checked problem, choices, and written method](https://live.poshenloh.com/past-contests/amc8/2026/problem/4)
- [Daily Dose of Math walkthrough](https://www.youtube.com/watch?v=gzXlOkLl24U)
- [Browser voice discovery (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices)
- [Speech cancellation (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/cancel)

Original AMC material belongs to MAA; AoPS contains community solutions. Coaching here is separately authored and attributed. This independent practice resource is not endorsed by MAA, AoPS, or the video creator. Commercial reuse rights have not been established. See the project context for source discrepancies and video review limitations.
