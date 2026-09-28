// Curated per problem. Only reviewed segments receive a recommendation.
export const recommendedVideos = {
  "2026-1": [
    {
      "id": "gzXlOkLl24U",
      "title": "AMC 8 2026: Problems 1-20 Breakdown",
      "channel": "Daily Dose of Math",
      "watchUrl": "https://www.youtube.com/watch?v=gzXlOkLl24U&t=0s",
      "startSeconds": 0,
      "endSeconds": 29,
      "segmentLabel": "Problem 1 · 0:00–0:29",
      "reason": "A short visual walkthrough of this problem. Best for a quick second explanation after your own attempt.",
      "reviewNote": "GPT 6 Astra Ultra recommendation: the Problem 1 segment was reviewed using video frames and visible English captions. It moves quickly; pause whenever you need. The segment ends around the transition to Problem 2.",
      "reviewBasis": "Video frames and visible English captions",
      "reviewedAt": "2026-09-10",
      "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_1"
    }
  ],
  "2026-2": [
    {
      "id": "gzXlOkLl24U",
      "title": "AMC 8 2026: Problems 1-20 Breakdown",
      "channel": "Daily Dose of Math",
      "watchUrl": "https://www.youtube.com/watch?v=gzXlOkLl24U&t=29s",
      "startSeconds": 29,
      "endSeconds": 63,
      "segmentLabel": "Problem 2 · 0:29–1:03",
      "reason": "A concise visual explanation with on-screen working. Pause to follow each step; this clip moves quickly.",
      "reviewNote": "GPT 6 Astra Ultra recommendation: reviewed using video frames and visible English captions. The grouping is useful, but the annotations become crowded and the explanation moves quickly. This segment ends around the transition to Problem 3.",
      "reviewBasis": "Video frames and visible English captions",
      "reviewedAt": "2026-09-11",
      "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_2"
    }
  ],
  "2026-3": [
    {
      "id": "gzXlOkLl24U",
      "title": "AMC 8 2026: Problems 1-20 Breakdown",
      "channel": "Daily Dose of Math",
      "watchUrl": "https://www.youtube.com/watch?v=gzXlOkLl24U&t=63s",
      "startSeconds": 63,
      "endSeconds": 142,
      "segmentLabel": "Problem 3 · 1:03–2:22",
      "reason": "A walkthrough that considers each of the three shapes. Use the written explanation alongside it if a step goes too fast.",
      "reviewNote": "GPT 6 Astra Ultra recommendation: reviewed using video frames and visible English captions. The calculations are correct. The presenter uses the 6–8–10 right triangle without deriving the missing side; use the written solution for that step. The segment ends around the transition to Problem 4.",
      "reviewBasis": "Video frames and visible English captions",
      "reviewedAt": "2026-09-11",
      "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_3"
    }
  ],
  // Coach recommendation remains pending actual segment review.
  "2026-4": [],
  // A full-video parent selection is available; no Q5 segment has passed review.
  "2026-5": []
};

// Supplied by the parent on 2026-09-27, separately from reviewed recommendations.
export const parentSelectedVideos = {
  "2026-4": [{
    "id": "gzXlOkLl24U",
    "title": "AMC 8 2026: Problems 1-20 Breakdown",
    "channel": "Daily Dose of Math",
    "watchUrl": "https://www.youtube.com/watch?v=gzXlOkLl24U&t=141s",
    "startSeconds": 141,
    "endSeconds": 186,
    "segmentLabel": "Problem 4 · 2:21–3:06",
    "reason": "Your parent selected this segment for Problem 4. Coach review is still pending. Pause whenever you need time to think.",
    "reviewNote": "The 2:21–3:06 timestamps were provided by your parent. This segment has not yet been reviewed by the coach. The YouTube link starts at 2:21 and may continue beyond this question.",
    "selectionBasis": "Parent-provided Problem 4 timestamps",
    "suppliedAt": "2026-09-27",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_4"
  }],
  "2026-5": [
    {
      "id": "gzXlOkLl24U",
      "title": "AMC 8 2026: Problems 1-20 Breakdown",
      "channel": "Daily Dose of Math",
      "watchUrl": "https://www.youtube.com/watch?v=gzXlOkLl24U&t=0s",
      "startSeconds": 0,
      "endSeconds": 1433,
      "segmentLabel": "Full video · Problems 1–20",
      "reason": "The same video used for the earlier problems, made available at your parent’s request. This opens the full video; find Problem 5 in the player. Coach review is still pending.",
      "reviewNote": "The exact Problem 5 start and end times have not been confirmed. This opens the full 23:53 video, not a reviewed Problem 5 segment. The title and full duration were checked in YouTube’s public metadata; the coach has not reviewed the Problem 5 explanation.",
      "selectionBasis": "Parent explicitly permitted reuse of the existing video; full duration checked in public YouTube metadata",
      "suppliedAt": "2026-09-27",
      "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_5"
    }
  ]
};

export const walkthroughVideos = Object.fromEntries(
  Object.keys(recommendedVideos).map((id) => [id, [...recommendedVideos[id], ...(parentSelectedVideos[id] || [])]])
);
