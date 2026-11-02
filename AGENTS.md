# Continuing AMC-Tutorial

Read README.md and PROJECT_CONTEXT.md before making changes. Keep them and CHANGELOG.md aligned with each completed batch so work can continue without the original chat.

- Speak Thai with the parent; author the app and teaching material in English.
- Prioritize Pingping’s understanding and independent reasoning.
- Use real past AMC questions and checked sources. Preserve numerical data, diagram relationships, and choices. Label restatements; do not invent replacement problems or falsely claim verbatim wording.
- Keep the requested “GPT 6 Astra Ultra — Tips & Tricks” attribution. Distinguish authored explanation, source methods, and subjective ratings.
- Review actual video segments before recommending them. Preserve per-question timestamps, embedded playback, fallback links, and non-spoiling pre-watch text.
- Keep attempt and coaching state separate by problem. Wrong submissions, hints, guided coach checks, revealed solutions, and videos opened before completion must not earn independent credit.
- Preserve existing learner records and the original storage key unless a tested migration is needed. Parent preview must never write learning records. Only explicit Start fresh may clear this app’s two record lists; preserve unrelated storage and offer Continue saved learning. Keep coaching/adapted records separate from original progress.
- Work in the small batch the user authorizes. Do not infer full-year authorization from the 175-question long-term goal.
- Preserve the 2026-09-14 suggested-pace text for existing Q1 (within 1 min), Q2 (within 1 min 30 sec), and Q3 (within 2 min). These are coaching estimates once familiar, not official limits or measured times. Do not add timer controls, automatic timing, elapsed-time recording, or time-based grading.
- The 2026-09-27 user-authorized batch adds two-choice Coach’s Corner checks, one changed-number practice and one reasoning check for each of the existing three originals, plus preview/start-fresh controls. Keep feedback explanatory and gentle. Clearly label adaptations, check their mathematics, and exclude them from the 175-real-question count. Do not treat two-choice answers as mastery. Timing remains future work.
- The subsequent authorized voice update uses the browser’s speech engine and available voices. Keep Mute, Stop, replay, and unsupported-browser text fallback. Never speak hidden answers, autoplay on page load, or create learning records from audio controls. Cancel speech on context changes and video playback. Voice settings stay in page memory so preview performs no storage writes. Report simulated testing separately from actual iPad audio.
- The preceding content batch added 2026 Problem 4 in the established format, including its labeled adaptation and a 1 min 30 sec coaching pace. That batch brought the library to four originals and four separate adaptations. Q4 was checked against LIVE by Po-Shen Loh because AoPS access failed. The parent subsequently supplied Q4’s 2:21–3:06 video segment and asked to continue. It is available as Parent’s selection with coach review pending, stored separately from reviewed recommendations. Do not label it a Coach’s pick or invent review evidence until the actual segment is reviewed. The subsequent request authorizes Problem 5 only; Problem 6 and a full-year batch require a later request.
- The latest content batch adds only 2026 Problem 5: preserved 100-mile/3-hour/40-mile-per-hour original and choices, checked against LIVE by Po-Shen Loh, two binary Coach checks, a labeled 150-mile adaptation with a reasoning check, and a 1 min 30 sec coaching pace. Five originals and five adaptations are available (170 originals remain). The parent subsequently permitted reuse of the existing video. Q5 now offers a clearly labeled Parent’s selection of the full 0:00–23:53 video, whose duration was checked in public metadata. Exact Q5 timestamps and coach review remain pending; do not present the full-video bounds as a Q5 segment or label it a Coach’s pick. Replace this fallback with confirmed parent-provided timestamps or an actually reviewed question clip when available; never guess timestamps. Preserve the parent-approved colors and all earlier records.
- The subsequent visual update uses muted blue action buttons, outlined secondary controls, neutral information/navigation, and a sage-green Coach’s Corner with white inner cards. Preserve clear keyboard focus, active/disabled states, readable contrast, and touch targets. Visual refinements must not alter assistance grading, preview isolation, or learning records.
- On 2026-09-29 the parent approved implementing and publishing the proposed Coach + learning map home. Keep Your next small win based on real original records and current-session attempts: continue unfinished work, suggest an unexplored problem, then offer a gentle revisit. Map selections never create records, reveal hints, or speak; preview never shows retained saved history. Continue preserves wrong-answer/help state; an explicit Try again may reset the current completed/revealed attempt through the existing retry flow while keeping history. Labels and explored counts are activity descriptions, not mastery; no mock history, new question, timer, or live AI service is authorized by this design change.
- Firebase sign-in and cross-device sync are planned, not implemented. Paid memberships and app-store packaging are not current work.
- Use the established static HTML/CSS/JS architecture and GitHub Pages repository. Do not create a replacement project or change hosting without a relevant user request.
- For app changes, run node verify.mjs and relevant JavaScript syntax checks. When modifying practice or storage flow, also run the optional jsdom-based node ui-check.mjs as documented in README. Use synthetic test records only. Report visual/device/video validation gaps honestly.
- Keep secrets, tokens, personal records, and testing-generated learner data out of Git. Do not expose credentials to work around publishing failures.
- Publish to the existing repository when the user’s request or session authorizes publication. Verify the resulting deployment before reporting the live site updated.
- The parent reviews remotely: provide an accessible preview or live website URL, not a local file or review panel as the only deliverable. The user’s remote-review preference and 2026-09-27 go-ahead authorize publishing the completed coaching/preview and voice batches and the requested Problems 4 and 5 to the existing GitHub Pages site. Future publication follows the applicable user/session scope; this does not authorize a full-year batch.

The latest user instruction takes precedence over historical scope decisions in this file.

## 2026-10-19: Hermes Agent (assistant "M") — Added 2019 AMC 8 Problem 1

The parent authorized adding 2019 AMC 8 content, starting with Problem 1. This is now live alongside 2026 Problems 1-5.

**Added:**
- `problems.js`: `2019-1` — Ike & Mike sandwich problem ($30 budget, $4.50 sandwiches, $1 drinks) → answer 9
- `coach-content.js`: `2019-1` — 2 binary checks (max sandwiches, remaining spend), adapted practice ($40 budget, $7.50 sandwiches) with reflection
- `videos.js`: `2019-1` — Daily Dose of Math Problem 1 Breakdown (jo7ME7qg4Sg, 0:00-0:38)
- Updated `app.js` line 96: Papers page now dynamically shows practice buttons for any year that has problems, and "In preparation" for years without
- Updated `styles.css`: `.paper-coming-soon` styling for disabled state
- Updated `verify.mjs` and `coaching-state.test.mjs` for 6-problem coverage

**Future scope (authorized per-problem):**
- Continue adding 2019 AMC 8 Problems 2-25 one at a time as authorized
- After 2019 is complete, proceed to other years (2025, 2024, 2023, 2022, 2020) per parent's authorization
- The 2019 problems are being authored by Hermes Agent (GPT 6 Astra Ultra), separate from the AI that authored 2026 problems

## 2026-11-01: Hermes Agent (M) — assessment layer, cleanup, and 2026 source sheet

The parent asked for everything judged useful to be built, anything useless
removed (with the removals reported), and clarified that 2026 work belongs to
this assistant alone — not to ChatGPT or Claude.

**Added**
- `exam-session.js` + `exam-session.test.mjs` — pure 40-minute session logic:
  clock tied to `startedAt` (not to the screen), answers, flags, 8/20/32-minute
  pacing checkpoints, grading that separates wrong from blank, debrief text.
  THIS SUPERSEDES the earlier "no timer controls" scope note: the parent
  explicitly asked for a timed exam mode. Timed papers are stored under their own
  keys and never written into the practice record list, so "explored / on my own"
  counts stay honest.
- `mental-math.js` — ten-question arithmetic drills; every answer is an integer
  computed by the generator, so a drill cannot disagree with its own key.
- `error-log.js` — four error causes (method, reading, arithmetic, rushing), each
  with its own remedy, plus a ranking summary for the notebook.
- `distractors.js` — per-problem notes naming the mistake behind each wrong
  option. Only four problems have them; a missing entry shows nothing rather than
  an invented reason.
- `exam-ui.js`, `pacing.js`, `ui-check-new.mjs`, and new views in `index.html`
  (`#view-exam`, `#view-drills`) plus their CSS.
- `SOURCES-2026.md` — the verified Standard-paper answer key. A **Regional**
  2026 paper exists with different problems and a different key; using the wrong
  one makes correct problems look broken. Check the sheet before adding 2026.

**Removed, deliberately**
- "Seven years" / "175 original questions": the library holds five years and 105
  problems, and 2026 has five of twenty-five. Counts now render from data.
- The model-brand signatures ("GPT 6 Astra Ultra") in the coach notes, the
  tips card, and the coach view eyebrow. They tell a sixth-grader nothing and go
  stale. This supersedes the earlier instruction to keep that attribution.
- The "techniques" grid that listed all 105 problems as cards — a duplicate of
  the practice map with no extra information.
- The subjective 1–10 "teaching suitability" rating block (hidden, not deleted,
  so the data stays available if it is wanted again).

**Verified** — `node verify.mjs` passes; the exam room was driven in a real
browser at desktop and 390 px width: start, answer, flag, jump, reload-resume,
checkpoint at 8 minutes, auto-submit on expiry, result screen, notebook history,
drill grading, error tagging, and distractor display.

## 2026-11-02: source policy for the remaining years

The parent settled how the remaining work is sourced:

- **Problems: AoPS is the authority.** Where our text disagrees with AoPS on a
  number, unit, option order, or figure relationship, AoPS wins. Restated wording
  is labelled; numerical data is never paraphrased.
- **Solutions and techniques: ours.** The key is only a check. Solve
  independently first, then compare. A disagreement is reported, never papered
  over. Shortcuts, mental-math moves and named traps are wanted, not decoration.
- **Target: seven papers.** AoPS holds 2000-2026, but there was no 2021 paper (the
  contest moved to January). Seven papers back from 2026 gives 2026, 2025, 2024,
  2023, 2022, 2020, 2019 = 175 problems. 2022 and 2023 are still empty.
- SOURCES.md is the shared sheet: policy, target table, and the verified keys for
  2026, 2023 and 2022. Content batches read it before writing anything.
- verify.mjs no longer pins an exact list of problem ids (that failed on every
  legitimate addition). It now asserts that each year runs 1..N with no gaps and
  no reordering, which is the property that actually matters.
