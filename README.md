# AMC-Tutorial · Pingping’s Math Lab

An English mathematics practice app for Pingping, designed around iPad learning and real AMC problems.

**[Open the app](https://kmantec.github.io/AMC-Tutorial/)** · **[Project context and continuation guide](PROJECT_CONTEXT.md)** · **[Change history](CHANGELOG.md)**

## Start here in a new Project

Read [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) and [AGENTS.md](AGENTS.md) before changing the app. They preserve the parent’s goals, decisions, reviewed-source evidence, technical structure, and remaining work. The original chat is not required.

## Available now

**Three reviewed guides: 2026 AMC 8 Problems 1–3.**

| Problem | Practice focus | Suggested pace once familiar | Reviewed video segment |
| --- | --- | --- | --- |
| 1 | Grouping a repeating arithmetic expression | Within 1 min | 0:00–0:29 |
| 2 | Organized counting in a number array | Within 1 min 30 sec | 0:29–1:03 |
| 3 | Perimeter, square area, and a right triangle | Within 2 min | 1:03–2:22 |

Each problem displays a gentle pace suggestion. These are authored coaching estimates for practice after understanding the method, not official MAA per-question limits or measured learner times. Take the time needed when learning. There is no start button, automatic timer, time limit, or elapsed-time recording.

Each guide includes five original answer choices, three staged hints, checked answer feedback, a recommended written solution, an explained subjective teaching rating, an alternative approach, an **“Explain it back”** prompt, and **“GPT 6 Astra Ultra — Tips & Tricks.”**

The current video recommendations are three reviewed segments of one Daily Dose of Math video, not three different videos. Each question opens at its own timestamp inside the app, with a direct YouTube fallback. Returning or switching questions removes the player. A walkthrough opened before completion counts as support.

Question 1 retains its original short wording. Questions 2 and 3 use clearly labeled concise restatements; the mathematical data and A–E choices remain unchanged. Every guide links to the original question and source solutions. Expressions stay on one mathematical line, with horizontal scrolling on narrow screens; longer prose and text choices wrap.

Selections and hints stay with their question while switching or closing/reopening the practice dialog in the same page session. **Try again** resets only that question. Learning records persist in this browser, including compatible older Q1 records. Reloading starts fresh attempts while retaining saved history.

## Scope and unfinished work

The target is **175 real questions** from seven editions: **2026, 2025, 2024, 2023, 2022, 2020, 2019**. Archive links are available for all seven, but only three guides are integrated: **172 questions remain**, including 22 from 2026. The next sequential question is 2026 Problem 4.

The parent wants short, reviewable batches and will explicitly authorize a full-year run later. Firebase authentication and cross-device progress, complete in-app papers, timed practice, and the 175-question topic/strategy report are not implemented. No fabricated mastery, streaks, or completed analyses are displayed.

The current authorized update is the three pace labels above. The parent is interested in a future practice set with changed numbers, so Pingping must reason again instead of remembering answers; timing may be considered with that feature. It is not implemented or authorized for this batch. Such questions must be labeled as adapted practice, kept separate from the original AMC questions, and excluded from the 175-real-question count.

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

Verification checks assets and UI targets, the reviewed mathematical data, video metadata, independent/assisted grading, question isolation, duplicate-answer protection, and compatibility with older records. Browser-agent contract checks were also exercised in a local preview. These checks do not establish physical iPad playback or visual testing.

## Hosting and data

- Repository: [kmantec/AMC-Tutorial](https://github.com/kmantec/AMC-Tutorial).
- GitHub Pages: main branch, repository root, HTTPS. Keep asset URLs relative.
- Browser storage key: pingping-amc8-practice-v1; up to 200 learning records.
- No Firebase configuration, server credentials, API keys, or live AI calls are bundled.
- Existing metadata does not imply offline caching: no service worker is implemented.

Only source code and public documentation belong in Git. Keep private learner records and credentials out of the repository. Actual deployment history is available in [GitHub Actions](https://github.com/kmantec/AMC-Tutorial/actions) and the commit history.

## Sources

- [AMC 8 archive](https://artofproblemsolving.com/wiki/index.php?title=AMC_8_Problems_and_Solutions)
- [2026 Problem 1](https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_1)
- [2026 Problem 2](https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_2)
- [2026 Problem 3](https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_3)
- [Daily Dose of Math walkthrough](https://www.youtube.com/watch?v=gzXlOkLl24U)

Original AMC material belongs to MAA; AoPS contains community solutions. Coaching here is separately authored and attributed. This independent practice resource is not endorsed by MAA, AoPS, or the video creator. Commercial reuse rights have not been established. See the project context for source discrepancies and video review limitations.
