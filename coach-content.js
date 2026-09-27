// Authored coaching and checked adaptations of the reviewed originals.
// These checks teach reasoning; a two-choice response is not a mastery score.
// The app reveals targeted checks only after help is requested or the original
// has been completed/revealed. Adaptations are not part of the 175 AMC originals.
export const coachGuides = {
  "2026-1": {
    intro: "A long expression can feel like a lot. Try a first step on paper; we can check your reasoning together.",
    checks: [
      {
        id: "group-signs",
        prompt: "Which way of adding brackets keeps the first six terms unchanged?",
        options: [
          {
            id: "a",
            label: "(1 + 2 − 3) − (4 + 5 − 6)",
            correct: false,
            feedback: "That minus sign changes the second block: −(4 + 5 − 6) becomes −4 − 5 + 6. The original has +4 +5 −6, so join the two blocks with a plus sign."
          },
          {
            id: "b",
            label: "(1 + 2 − 3) + (4 + 5 − 6)",
            correct: true,
            feedback: "Yes. Opening these brackets gives exactly 1 + 2 − 3 + 4 + 5 − 6. Try making blocks of three for the rest of the expression too."
          }
        ]
      },
      {
        id: "why-regroup",
        prompt: "Why can we add the block totals instead of working along the whole expression?",
        options: [
          {
            id: "a",
            label: "Every number appears once, with its original sign.",
            correct: true,
            feedback: "Exactly. Treat subtraction as adding a negative number. Grouping the same signed numbers changes the size of each calculation, but keeps the total unchanged."
          },
          {
            id: "b",
            label: "Putting numbers in brackets makes every term positive.",
            correct: false,
            feedback: "Brackets do not turn negative terms positive. Keep −3, −6, −9, and −12 negative. Grouping works because we still add the same signed numbers exactly once."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2026-1-a",
      sourceProblem: "2026-1",
      label: "Adapted practice — not an official AMC question",
      prompt: "The numbers have changed. Find the value of this expression using your own working.",
      expression: "2 + 3 − 4 + 5 + 6 − 7 + 8 + 9 − 10 + 11 + 12 − 13",
      options: [
        { letter: "A", value: 26, label: "26" },
        { letter: "B", value: 22, label: "22" }
      ],
      answer: 22,
      answerLabel: "(B) 22",
      solution: [
        "Keep each sign with its number and group the terms into four blocks.",
        "2 + 3 − 4 = 1; 5 + 6 − 7 = 4.",
        "8 + 9 − 10 = 7; 11 + 12 − 13 = 10.",
        "Add the block totals: 1 + 4 + 7 + 10 = 22."
      ],
      reflection: {
        id: "adapted-group-reason",
        prompt: "True or false: moving −7 to a different group means it becomes +7.",
        options: [
          {
            id: "true",
            label: "True",
            correct: false,
            feedback: "The sign belongs to the number. It must stay −7 in any new group; changing it to +7 would change the total."
          },
          {
            id: "false",
            label: "False",
            correct: true,
            feedback: "Yes. Keep −7 as −7 wherever you group it. Keeping each signed term once is what makes regrouping valid."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_1",
      credit: "Changed-number practice and coaching authored by GPT 6 Astra Ultra, using the grouping idea in AoPS Solution 4 for the original problem."
    }
  },
  "2026-2": {
    intro: "There are many entries here. Try your own way to keep track, then we can check it together.",
    checks: [
      {
        id: "count-remaining",
        prompt: "There are 35 positions, with twenty 1s and three 3s. Which calculation counts the positions holding 2?",
        options: [
          {
            id: "a",
            label: "35 − 20 − 3",
            correct: true,
            feedback: "Yes. Set aside the twenty positions holding 1 and the three holding 3. The remaining 12 positions each hold 2. The counts 20 + 12 + 3 cover all 35 positions."
          },
          {
            id: "b",
            label: "35 − 20",
            correct: false,
            feedback: "This leaves all 15 inside positions, including the three 3s. Subtract those three positions as well: 35 − 20 − 3 = 12 positions holding 2."
          }
        ]
      },
      {
        id: "weight-the-count",
        prompt: "What do the twelve entries showing 2 contribute to the total?",
        options: [
          {
            id: "a",
            label: "12, because there are twelve positions.",
            correct: false,
            feedback: "12 counts positions. Each of those positions contributes 2, so their values add to 12 × 2 = 24. Use count × value for each group."
          },
          {
            id: "b",
            label: "24, because each of the twelve entries contributes 2.",
            correct: true,
            feedback: "Yes: 12 × 2 = 24. A count tells us how many entries there are; count × value tells us how much they add. Do the same for the 1s and 3s."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2026-2-a",
      sourceProblem: "2026-2",
      label: "Adapted practice — not an official AMC question",
      prompt: "Find the total of this new array. Its outside border contains twenty 2s, and its center contains three 4s.",
      matrix: [
        [2, 2, 2, 2, 2, 2, 2],
        [2, 3, 3, 3, 3, 3, 2],
        [2, 3, 4, 4, 4, 3, 2],
        [2, 3, 3, 3, 3, 3, 2],
        [2, 2, 2, 2, 2, 2, 2]
      ],
      options: [
        { letter: "A", value: 88, label: "88" },
        { letter: "B", value: 70, label: "70" }
      ],
      answer: 88,
      answerLabel: "(A) 88",
      solution: [
        "The array has 5 × 7 = 35 positions.",
        "There are 35 − 20 − 3 = 12 entries showing 3.",
        "Multiply each count by its value: 20 × 2 + 12 × 3 + 3 × 4.",
        "Add the contributions: 40 + 36 + 12 = 88. A row-by-row check gives 14 + 19 + 22 + 19 + 14 = 88."
      ],
      reflection: {
        id: "adapted-value-reason",
        prompt: "True or false: counting all 35 positions as 2 gives the full total of this array.",
        options: [
          {
            id: "false",
            label: "False",
            correct: true,
            feedback: "Right. 35 × 2 = 70 is only a starting total. The twelve 3s each need 1 more and the three 4s each need 2 more: 70 + 12 + 6 = 88."
          },
          {
            id: "true",
            label: "True",
            correct: false,
            feedback: "Some entries are greater than 2. Start with 35 × 2 = 70, then add 12 for the twelve 3s and 6 for the three 4s. The full total is 88."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_2",
      credit: "Changed-number practice and coaching authored by GPT 6 Astra Ultra, using count × value from AoPS Solutions 3 and 6 for the original problem."
    }
  },
  "2026-3": {
    intro: "Take the shapes one at a time. Try your own reasoning; I can help you check the measurements.",
    checks: [
      {
        id: "wire-measurement",
        prompt: "Which measurement tells you how much wire a shape needs?",
        options: [
          {
            id: "a",
            label: "Area: the space inside the shape.",
            correct: false,
            feedback: "Area measures the inside in square centimeters. Wire follows the boundary, so add the side lengths to find the perimeter in centimeters."
          },
          {
            id: "b",
            label: "Perimeter: the distance around the boundary.",
            correct: true,
            feedback: "Yes. Add every side length to find the wire needed. For this problem, compare that perimeter with the 24 cm wire."
          }
        ]
      },
      {
        id: "square-area-side",
        prompt: "The square has area 36 cm². How should you find its perimeter?",
        options: [
          {
            id: "a",
            label: "Find the side whose square is 36, then multiply that side by 4.",
            correct: true,
            feedback: "Yes. A square has area side × side. Since 6 × 6 = 36, its side is 6 cm, and four sides need 4 × 6 = 24 cm of wire."
          },
          {
            id: "b",
            label: "Divide the area 36 by 4 to find one side.",
            correct: false,
            feedback: "Dividing by 4 works when you know the perimeter, not the area. Here side × side = 36, so the side is 6 cm. Then perimeter = 4 × 6 = 24 cm."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2026-3-a",
      sourceProblem: "2026-3",
      label: "Adapted practice — not an official AMC question",
      prompt: "A 36 cm wire is reshaped into one shape at a time, using its full length without cutting, overlap, or leftover wire. Which listed shapes can it form?",
      facts: [
        "Regular hexagon: each side is 6 cm.",
        "Square: area is 100 cm².",
        "Right triangle: perpendicular sides are 9 cm and 12 cm."
      ],
      options: [
        { letter: "A", value: "A", label: "Hexagon and triangle only" },
        { letter: "B", value: "B", label: "Square and triangle only" }
      ],
      answer: "A",
      answerLabel: "(A) Hexagon and triangle only",
      solution: [
        "Hexagon: 6 × 6 = 36 cm. It uses exactly the full wire.",
        "Square: side = √100 = 10 cm, so perimeter = 4 × 10 = 40 cm. The wire is too short.",
        "Right triangle: the third side is √(9² + 12²) = √225 = 15 cm.",
        "Triangle perimeter: 9 + 12 + 15 = 36 cm. The hexagon and triangle both fit."
      ],
      reflection: {
        id: "adapted-triangle-reason",
        prompt: "Why is 9 + 12 not the whole wire length for this triangle?",
        options: [
          {
            id: "a",
            label: "A triangle’s perimeter also includes its third side.",
            correct: true,
            feedback: "Yes. Use the right angle to find the third side: √(9² + 12²) = 15. Then add all three sides: 9 + 12 + 15 = 36 cm."
          },
          {
            id: "b",
            label: "A triangle’s perimeter is its area, so multiply 9 by 12 instead.",
            correct: false,
            feedback: "Perimeter measures the boundary; area measures the inside. The third side is 15 cm, so the wire length is 9 + 12 + 15 = 36 cm. (Its area would be 9 × 12 ÷ 2.)"
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_3",
      credit: "Changed-number practice and coaching authored by GPT 6 Astra Ultra, using the perimeter comparisons in AoPS Solution 1 for the original problem."
    }
  },
  "2026-4": {
    "intro": "Two changes happen in this story. Try following the savings from one month to the next; we can check your reasoning together.",
    "checks": [
      {
        "id": "percent-base",
        "prompt": "Suppose Brynn began with 100 units and has 80 after July. Which amount is the base for August’s 50% increase?",
        "options": [
          {
            "id": "a",
            "label": "100 units: the original savings.",
            "correct": false,
            "feedback": "August starts with the 80 units remaining after July. Its increase is half of 80, which is 40 units. Using half of 100 would use the wrong starting amount for August."
          },
          {
            "id": "b",
            "label": "80 units: the savings after July.",
            "correct": true,
            "feedback": "Yes. August’s 50% increase uses the current 80 units. Half of 80 is 40, so add 40 to the 80 already there."
          }
        ]
      },
      {
        "id": "final-versus-increase",
        "prompt": "If the savings start at 100 units and finish at 120 units, what does 120% describe?",
        "options": [
          {
            "id": "a",
            "label": "All the final savings, compared with the original savings.",
            "correct": true,
            "feedback": "Exactly. The entire 120 units are 120% of the original 100. Only the extra 20 units represent the 20% increase. Match your answer to what the question asks."
          },
          {
            "id": "b",
            "label": "Only the extra savings gained.",
            "correct": false,
            "feedback": "The extra savings are 120 − 100 = 20 units, a 20% increase. The final total includes both the original amount and that increase, so it is 120% of the original."
          }
        ]
      }
    ],
    "similar": {
      "id": "adapted-2026-4-a",
      "sourceProblem": "2026-4",
      "label": "Adapted practice — not an official AMC question",
      "prompt": "A savings balance falls by 25% one month, then rises by 20% the next month. The final balance is what percent of its original amount?",
      "options": [
        {
          "letter": "A",
          "value": 95,
          "label": "95"
        },
        {
          "letter": "B",
          "value": 90,
          "label": "90"
        }
      ],
      "answer": 90,
      "answerLabel": "(B) 90",
      "solution": [
        "Choose an original balance of 100 units.",
        "The first month removes 25% of 100, leaving 75 units.",
        "The next increase is 20% of 75: 75 ÷ 5 = 15 units. Add 15 to 75 to get 90 units.",
        "The final 90 units are 90% of the original 100. The calculation 100 − 25 + 20 would incorrectly take the second percentage from the original balance."
      ],
      "reflection": {
        "id": "adapted-percent-meaning",
        "prompt": "True or false: finishing with 90% of the original balance means an overall decrease of 10%.",
        "options": [
          {
            "id": "false",
            "label": "False",
            "correct": false,
            "feedback": "90% is the part still there. Compared with the original 100%, the missing part is 10%. Starting at 100 and ending at 90 shows a loss of 10 units."
          },
          {
            "id": "true",
            "label": "True",
            "correct": true,
            "feedback": "Yes. 90% remains, so 100% − 90% = 10% was lost overall. Keep the final amount and the amount of change separate."
          }
        ]
      },
      "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_4",
      "credit": "Changed-number practice and coaching authored by GPT 6 Astra Ultra. The choose-100 method is also illustrated in the written solution for the original problem at LIVE by Po-Shen Loh."
    }
  },
  "2026-5": {
    "intro": "Keep track of what each number in the story describes. Try a first step on paper; we can check your reasoning together.",
    "checks": [
      {
        "id": "driving-versus-total",
        "prompt": "Which part of Casey’s trip does the average speed of 40 miles per hour describe?",
        "options": [
          {
            "id": "a",
            "label": "The time she is driving, leaving out lunch.",
            "correct": true,
            "feedback": "Yes. The speed is measured during driving. Divide the distance by that speed to find driving time, then compare it with the full 3 hours."
          },
          {
            "id": "b",
            "label": "All 3 hours, including the lunch break.",
            "correct": false,
            "feedback": "The 3 hours include lunch, but the given speed applies only while she is driving. Find driving time from distance ÷ speed; the remaining time is the stop."
          }
        ]
      },
      {
        "id": "decimal-hour",
        "prompt": "A calculation leaves 0.5 hour for the stop. How many minutes is 0.5 hour?",
        "options": [
          {
            "id": "a",
            "label": "50 minutes.",
            "correct": false,
            "feedback": "An hour contains 60 minutes, not 100. The decimal 0.5 means half, so half of 60 is 30 minutes. Keep the unit beside the number."
          },
          {
            "id": "b",
            "label": "30 minutes.",
            "correct": true,
            "feedback": "Yes. Multiply hours by 60: 0.5 × 60 = 30 minutes. Half an hour is 30 minutes, so match that value to the original choices."
          }
        ]
      }
    ],
    "similar": {
      "id": "adapted-2026-5-a",
      "sourceProblem": "2026-5",
      "label": "Adapted practice — not an official AMC question",
      "prompt": "A driver covers 150 miles and stops only for lunch. The whole trip lasts 3 hours 15 minutes, and the average speed while driving is 60 miles per hour. How many minutes is the lunch break?",
      "options": [
        {
          "letter": "A",
          "value": 45,
          "label": "45 minutes"
        },
        {
          "letter": "B",
          "value": 75,
          "label": "75 minutes"
        }
      ],
      "answer": 45,
      "answerLabel": "(A) 45 minutes",
      "solution": [
        "Driving time is 150 ÷ 60 = 2.5 hours, or 150 minutes.",
        "The whole trip lasts 3 × 60 + 15 = 195 minutes.",
        "Lunch takes the remaining time: 195 − 150 = 45 minutes.",
        "Equivalently, 3.25 − 2.5 = 0.75 hour. Multiply 0.75 by 60 to get 45 minutes; 0.75 hour is not 75 minutes."
      ],
      "reflection": {
        "id": "adapted-decimal-hour",
        "prompt": "True or false: 0.75 hour is the same as 75 minutes.",
        "options": [
          {
            "id": "true",
            "label": "True",
            "correct": false,
            "feedback": "The decimal is part of an hour, so use 60 minutes per hour: 0.75 × 60 = 45 minutes. A 75-minute stop would be 1 hour 15 minutes."
          },
          {
            "id": "false",
            "label": "False",
            "correct": true,
            "feedback": "Exactly. 0.75 is three quarters, and three quarters of 60 minutes is 45 minutes. A decimal hour does not use 100 minutes as its whole."
          }
        ]
      },
      "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_5",
      "credit": "Changed-number practice and coaching authored by GPT 6 Astra Ultra. The driving-time subtraction method is also illustrated in LIVE by Po-Shen Loh’s written solution to the original."
    }
  }
};
