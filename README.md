# Pingping’s Math Lab

An English-language AMC training room designed for iPad, beginning with AMC 8.

Repository: https://github.com/kmantec/AMC-Tutorial

Website: https://kmantec.github.io/AMC-Tutorial/

## Available in this first version

- Responsive homepage with a real first-practice journey.
- Original 2026 AMC 8 Problem 1 with its exact question wording, a single-line expression, and verified A–E answer choices. The expression scrolls horizontally on narrow screens rather than changing its mathematical layout.
- Three progressive hints, answer feedback, and an AI-authored explanation of the grouping method in AoPS Solution 4.
- Clearly labeled **GPT 6 Astra Ultra — Tips & Tricks** and an explicitly editorial teaching-suitability rating.
- A device-local notebook recording actual attempts, hints, solution reveals, and whether an attempt was completed independently. No invented progress or mastery claims.
- Direct AoPS archive links for 2026, 2025, 2024, 2023, 2022, 2020, and 2019 (175 original questions across seven exam editions).
- Coach’s notes and an honest status for the future seven-exam pattern analysis.
- One reviewed YouTube walkthrough for 2026 Problem 1, embedded inside the practice dialog with a direct YouTube fallback. Returning to the question stops the player and preserves the selected answer. Opening a walkthrough before completing an attempt is recorded as support.

Only **one coaching guide** has been reviewed and integrated. The remaining 174 questions and their video evaluations, full in-app timed exams, topic-frequency report, and Firebase sign-in/cross-device progress are not implemented in this first homepage release. Device-local storage is not account authentication or cross-device sync.

## Source and attribution

Original Problem 1: https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_1

Original AMC problems are copyrighted by the Mathematical Association of America. Source solutions are community contributions on AoPS Wiki. The coaching explanation and tips here are separately authored and labeled. This project is not affiliated with or endorsed by MAA or AoPS. The Daily Dose of Math Problem 1 segment (approximately 0:00–0:29) was reviewed from actual video frames and visible English captions. Only this segment is recommended; the rest of that video has not been evaluated. Other questions will receive 1–3 recommendations only after review. Content reuse permissions should be reviewed before expanding the hosted archive.

## Hosting

No build step or server-side runtime is required. Publish the `main` branch, root folder, using GitHub Pages. All local assets use relative URLs so the site works under a project repository path. Google Fonts is an optional external font stylesheet; system sans-serif fonts remain as fallback.

Use any local static HTTP server for development. `node --check app.js` validates JavaScript syntax.

## Data and future integration

Current progress uses localStorage key `pingping-amc8-practice-v1`, with up to 200 learning records. Store neither secrets nor private learner records in Git. Future Firebase integration should use Authentication for identity and Firestore owner-scoped rules for cross-device progress, using a separate project configuration. No credentials are bundled in this site.

## Optional agent tools

Where the browser provides `document.modelContext`, the page exposes `read_practice_progress`, `start_practice_problem`, `submit_practice_answer`, `open_recommended_walkthrough`, and `return_to_practice_problem`. These use the same state and actions as the visible interface and are optional in unsupported browsers.
