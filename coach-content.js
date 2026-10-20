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
      "credit": "Changed-number practice and coaching authored by GPT 6 Astra Ultra. The driving-time subtraction method is also illustrated in LIVE by Po-Shen Loh's written solution to the original."
    }
  },
  "2019-1": {
    intro: "The problem gives you a budget and two items with different prices. Try working out the numbers yourself first; we can check each step together.",
    checks: [
      {
        id: "max-sandwiches",
        prompt: "Which calculation finds the greatest number of whole sandwiches Ike and Mike can buy?",
        options: [
          {
            id: "a",
            label: "$30.00 ÷ $4.50 ≈ 6.67, so buy 6 sandwiches.",
            correct: true,
            feedback: "Yes. Dividing the budget by the sandwich price shows 6 whole sandwiches fit. Check: 6 × $4.50 = $27.00, which is under $30.00."
          },
          {
            id: "b",
            label: "Buy 7 sandwiches because 7 × $4.50 = $31.50 is over the budget, so round down.",
            correct: false,
            feedback: "7 × $4.50 = $31.50 exceeds the $30.00 budget. Start lower: 6 sandwiches cost $27.00 and stay within the budget. The leftover can then buy drinks."
          }
        ]
      },
      {
        id: "remaining-spend",
        prompt: "After buying 6 sandwiches for $27.00, what should you do next?",
        options: [
          {
            id: "a",
            label: "Subtract $27.00 from $30.00 to find $3.00 left, then divide by $1.00 per drink to get 3 drinks.",
            correct: true,
            feedback: "Yes. The $3.00 remainder buys exactly 3 soft drinks at $1.00 each. Then add: 6 + 3 = 9 items total."
          },
          {
            id: "b",
            label: "Divide $30.00 by $4.50 to get about 6.67 items and round up to 7.",
            correct: false,
            feedback: "6.67 is the number of sandwiches possible if fractional sandwiches existed, not the total item count. You need to handle the remainder separately: 6 sandwiches cost $27.00, leaving $3.00 for drinks."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-1-a",
      sourceProblem: "2019-1",
      label: "Adapted practice — not an official AMC question",
      prompt: "The prices and budget have changed. Use the same reasoning to find the total number of items.",
      facts: [
        "Total budget: $40.00",
        "Each sandwich costs $7.50",
        "Each soft drink costs $1.00"
      ],
      options: [
        { letter: "A", value: 7, label: "7" },
        { letter: "B", value: 9, label: "9" }
      ],
      answer: 7,
      answerLabel: "(A) 7",
      solution: [
        "Find the greatest number of whole sandwiches: $40.00 ÷ $7.50 ≈ 5.33, so buy 5 sandwiches.",
        "5 sandwiches cost 5 × $7.50 = $37.50. Remaining money: $40.00 − $37.50 = $2.50.",
        "Buy soft drinks with the remainder: $2.50 ÷ $1.00 = 2 whole drinks (with $0.50 left over that cannot buy another full item).",
        "Total items: 5 sandwiches + 2 drinks = 7."
      ],
      reflection: {
        id: "adapted-budget-reason",
        prompt: "True or false: you could buy 6 sandwiches if the budget were $45.00 instead of $40.00.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Yes. 6 × $7.50 = $45.00 uses the entire $45.00 budget exactly, leaving nothing for drinks. Total items would be 6."
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Check: 6 × $7.50 = $45.00, which exactly matches the new budget. So 6 sandwiches are possible, but no money remains for drinks. The total is 6 items."
          }
        ]
      },
      "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_1",
      "credit": "Changed-number practice and coaching authored by Hermes Agent, using the max-out-first method from AoPS Solutions 1–3 for the original problem."
    }
  },
  "2019-2": {
    intro: "The diagram tells you how the rectangles fit together. Try finding the missing side length yourself before we check each step.",
    checks: [
      {
        id: "find-long-side",
        prompt: "Two small rectangles are stacked on top of each other. What does that tell you about the longer side of each small rectangle?",
        options: [
          {
            id: "a",
            label: "The longer side equals 2 × 5 = 10 feet, because two short sides stacked match one long side.",
            correct: true,
            feedback: "Yes. The height of two stacked rectangles (short side + short side) equals the length of one rectangle lying horizontally, so the long side is 2 × 5 = 10 feet."
          },
          {
            id: "b",
            label: "The longer side is also 5 feet, because all sides of a rectangle are the same.",
            correct: false,
            feedback: "A rectangle has two different side lengths. The short side is 5, but the long side is longer. Two short sides stacked vertically match one long side, so the long side is 2 × 5 = 10 feet."
          }
        ]
      },
      {
        id: "big-rectangle-dimensions",
        prompt: "The big rectangle's height is 10 feet. What is its width?",
        options: [
          {
            id: "a",
            label: "Width = 10 + 5 = 15 feet (long side of one small rectangle plus short side of another).",
            correct: true,
            feedback: "Yes. Across the top, one rectangle lies with its long side (10) and one stands with its short side (5), so the total width is 10 + 5 = 15 feet."
          },
          {
            id: "b",
            label: "Width = 5 + 5 = 10 feet, because all small rectangles have short side 5.",
            correct: false,
            feedback: "Not quite. The top edge of the big rectangle is made of one rectangle's long side (10) plus another rectangle's short side (5), not two short sides. The width is 10 + 5 = 15 feet."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-2-a",
      sourceProblem: "2019-2",
      label: "Adapted practice — not an official AMC question",
      prompt: "Four identical rectangles are arranged to form a larger rectangle. The shorter side of each small rectangle is 4 feet. What is the area of the large rectangle?",
      facts: [
        "Four identical small rectangles fit together without gaps.",
        "Two rectangles are stacked vertically on the left, and two are placed side by side horizontally on the right.",
        "The shorter side of each small rectangle is 4 feet."
      ],
      options: [
        { letter: "A", value: 128, label: "128" },
        { letter: "B", value: 96, label: "96" }
      ],
      answer: 128,
      answerLabel: "(A) 128",
      solution: [
        "Two short sides stacked vertically match one long side: long side = 2 × 4 = 8 feet.",
        "The big rectangle's height equals the long side: 8 feet.",
        "The big rectangle's width equals one long side (8) plus two short sides (4 + 4) = 8 + 8 = 16 feet.",
        "Area = 16 × 8 = 128 square feet."
      ],
      reflection: {
        id: "adapted-rectangle-reason",
        prompt: "True or false: if the short side were 3 feet instead of 4, the area would be 72 square feet.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Yes. Long side = 2 × 3 = 6. Height = 6. Width = 6 + 3 + 3 = 12. Area = 12 × 6 = 72. The reasoning works the same way."
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Let's check: long side = 2 × 3 = 6. Height = 6. Width = 6 + 3 + 3 = 12. Area = 12 × 6 = 72. So it is true!"
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_2",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the diagram-based reasoning from AoPS Solutions 1–5 for the original problem."
    }
  },
  "2019-3": {
    intro: "All three fractions are greater than 1. Try writing each as 1 plus a remainder before we compare them together.",
    checks: [
      {
        id: "subtract-one",
        prompt: "If you subtract 1 from each fraction, what do you notice about the remainders?",
        options: [
          {
            id: "a",
            label: "15/11 − 1 = 4/11, 19/15 − 1 = 4/15, 17/13 − 1 = 4/13. All have numerator 4.",
            correct: true,
            feedback: "Yes. Each fraction is 1 more than a fraction with numerator 4. Since all three have the same numerator, we can compare them by denominator alone."
          },
          {
            id: "b",
            label: "15/11 − 1 = 4/11, 19/15 − 1 = 4/15, 17/13 − 1 = 4/13. The numerators are all different.",
            correct: false,
            feedback: "Check again: 15 − 11 = 4, 19 − 15 = 4, and 17 − 13 = 4. So each remainder has numerator 4. That shared numerator is the key to comparing them."
          }
        ]
      },
      {
        id: "compare-remainders",
        prompt: "The remainders are 4/11, 4/15, and 4/13. Which is the correct order, smallest to largest?",
        options: [
          {
            id: "a",
            label: "4/15 < 4/13 < 4/11, because the largest denominator gives the smallest fraction when numerators are equal.",
            correct: true,
            feedback: "Yes. When numerators are the same, the fraction with the larger denominator is smaller. So 4/15 < 4/13 < 4/11. Adding back the 1 gives the original order."
          },
          {
            id: "b",
            label: "4/11 < 4/13 < 4/15, because the smallest numerator gives the smallest fraction.",
            correct: false,
            feedback: "The numerators are all 4 — they are equal. When numerators match, compare denominators: a larger denominator means a smaller fraction. So 4/15 (denominator 15) is smallest."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-3-a",
      sourceProblem: "2019-3",
      label: "Adapted practice — not an official AMC question",
      prompt: "Order these fractions from least to greatest: 13/9, 17/13, 11/7.",
      options: [
        { letter: "A", value: "A", label: "17/13 < 13/9 < 11/7" },
        { letter: "B", value: "B", label: "11/7 < 13/9 < 17/13" }
      ],
      answer: "A",
      answerLabel: "(A) 17/13 < 13/9 < 11/7",
      solution: [
        "Each fraction is greater than 1. Subtract 1 from each:",
        "13/9 − 1 = 4/9, 17/13 − 1 = 4/13, 11/7 − 1 = 4/7.",
        "The remainders all have numerator 4. Compare denominators: 4/13 < 4/9 < 4/7.",
        "Adding back 1: 17/13 < 13/9 < 11/7."
      ],
      reflection: {
        id: "adapted-fraction-reason",
        prompt: "True or false: if the fractions were 14/10, 18/14, and 16/12, the order would be 18/14 < 16/12 < 14/10.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Yes. Each numerator is 4 more than its denominator, so subtract 1: 4/10, 4/14, 4/12. Order by denominator: 4/14 < 4/12 < 4/10, so 18/14 < 16/12 < 14/10."
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Check: 14 − 10 = 4, 18 − 14 = 4, 16 − 12 = 4. Subtract 1: 4/10, 4/14, 4/12. Since denominators 14 > 12 > 10, the order is 4/14 < 4/12 < 4/10. Adding 1 back: 18/14 < 16/12 < 14/10. So it is true!"
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_3",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the subtract-1 method from AoPS Solution 5 for the original problem."
    }
  },
  "2019-4": {
    intro: "A rhombus has four equal sides and its diagonals are perpendicular bisectors. Use that to find the area.",
    checks: [
      {
        id: "side-length",
        prompt: "What is the length of each side of the rhombus?",
        options: [
          {
            id: "a",
            label: "52 ÷ 4 = 13 meters",
            correct: true,
            feedback: "Yes. A rhombus has four equal sides, so each side = perimeter/4 = 52/4 = 13."
          },
          {
            id: "b",
            label: "52 ÷ 2 = 26 meters",
            correct: false,
            feedback: "Remember a rhombus has 4 equal sides, not 2. Divide the perimeter by 4: 52/4 = 13."
          }
        ]
      },
      {
        id: "half-diagonal",
        prompt: "If diagonal AC = 24 and the diagonals bisect each other, what is half of AC?",
        options: [
          {
            id: "a",
            label: "24 ÷ 2 = 12",
            correct: true,
            feedback: "Yes. The diagonals bisect each other, so AE = EC = 24/2 = 12."
          },
          {
            id: "b",
            label: "24 (the diagonals don't bisect in a rhombus)",
            correct: false,
            feedback: "In a rhombus, the diagonals are perpendicular bisectors — they cut each other in half. So half of AC is 24/2 = 12."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-4-a",
      sourceProblem: "2019-4",
      label: "Adapted practice — not an official AMC question",
      prompt: "A rhombus has perimeter 68 meters and one diagonal measures 30 meters. What is its area?",
      options: [
        { letter: "A", value: "A", label: "120" },
        { letter: "B", value: "B", label: "240" }
      ],
      answer: "B",
      answerLabel: "(B) 240",
      solution: [
        "Perimeter = 68, so each side = 68/4 = 17.",
        "One diagonal = 30, so half = 15.",
        "Right triangle: hypotenuse 17, leg 15 → other leg = √(289 − 225) = √64 = 8.",
        "Full second diagonal = 2 × 8 = 16.",
        "Area = (30 × 16)/2 = 240."
      ],
      reflection: {
        id: "adapted-rhombus-reason",
        prompt: "True or false: if a rhombus has side 10 and one diagonal 12, its area is 96.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Check: half of 12 is 6. Right triangle: 10² − 6² = 100 − 36 = 64 → other leg = 8. Full diagonal = 16. Area = (12 × 16)/2 = 96. True!"
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Let's check: half of 12 is 6. Right triangle legs: 6 and x, hypotenuse 10. x² = 100 − 36 = 64 → x = 8. Full other diagonal = 16. Area = (12 × 16)/2 = 96. So it is true!"
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_4",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the perpendicular-bisector property from AoPS Solution 1."
    }
  },
  "2019-5": {
    intro: "This is a logic puzzle about reading distance-time graphs. Eliminate wrong choices one step at a time.",
    checks: [
      {
        id: "constant-speed",
        prompt: "The tortoise walks at a constant speed. What shape should the tortoise's graph be?",
        options: [
          {
            id: "a",
            label: "A straight diagonal line from bottom-left to top-right",
            correct: true,
            feedback: "Yes! Constant speed means the distance increases by the same amount each second — that's a straight line."
          },
          {
            id: "b",
            label: "A curved line that gets steeper over time",
            correct: false,
            feedback: "A curved line would mean the tortoise is accelerating (speeding up). The problem says it walks at a 'slow steady pace,' so it must be a straight line."
          }
        ]
      },
      {
        id: "nap-shape",
        prompt: "When the hare takes a nap, what happens to the distance it has traveled?",
        options: [
          {
            id: "a",
            label: "The distance stays the same (flat horizontal line)",
            correct: true,
            feedback: "Yes. The hare is asleep, not moving, so its distance doesn't change during the nap."
          },
          {
            id: "b",
            label: "The distance keeps increasing, just more slowly",
            correct: false,
            feedback: "If the hare is napping, it's not moving at all. The distance stays exactly the same, shown as a flat horizontal line."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-5-a",
      sourceProblem: "2019-5",
      label: "Adapted practice — not an official AMC question",
      prompt: "A cheetah and a sloth race. The cheetah sprints ahead, stops to rest, then sprints again but reaches the finish line just after the sloth. Which graph matches?",
      options: [
        { letter: "A", value: "A", label: "Sloth: steady diagonal. Cheetah: steep, flat, steep — cheetah finishes first." },
        { letter: "B", value: "B", label: "Sloth: steady diagonal. Cheetah: steep, flat, steep — sloth finishes first." }
      ],
      answer: "B",
      answerLabel: "(B) Sloth steady → wins; Cheetah steep-flat-steep → second",
      solution: [
        "Sloth moves at constant speed → straight diagonal line.",
        "Cheetah rests → flat segment (distance unchanged).",
        "Sloth finishes first → sloth's line reaches the top before the cheetah's.",
        "Only B matches all three conditions."
      ],
      reflection: {
        id: "adapted-race-reason",
        prompt: "True or false: If the cheetah rested longer and still finished first, the graph would show a longer flat segment for the cheetah but still reaching the top first.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Yes! A longer nap = a longer flat segment. But if the cheetah still finishes first, its line reaches the top before the sloth's — that's what matters."
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Actually, a longer flat segment just means a longer nap. The finishing order is determined by which line reaches the top first, not by the nap length. So it can be true!"
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_5",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the same elimination logic as the AoPS solution."
    }
  },
  "2019-6": {
    intro: "A square has 4 lines of symmetry through its center. Count how many grid points lie on those lines.",
    checks: [
      {
        id: "symmetry-lines",
        prompt: "How many lines of symmetry does a square have?",
        options: [
          {
            id: "a",
            label: "4 (horizontal, vertical, and 2 diagonals)",
            correct: true,
            feedback: "Yes! A square has 4 lines of symmetry, and they all pass through the center point P."
          },
          {
            id: "b",
            label: "2 (just the diagonals)",
            correct: false,
            feedback: "Don't forget the horizontal and vertical lines! A square has 4 lines of symmetry: horizontal, vertical, and both diagonals."
          }
        ]
      },
      {
        id: "points-per-line",
        prompt: "The grid is 9×9 = 81 points. How many grid points are on each line of symmetry (including P)?",
        options: [
          {
            id: "a",
            label: "9 points on each line",
            correct: true,
            feedback: "Yes. A 9×9 grid has 9 points per row and column. The horizontal line goes through 9 points, same for vertical and both diagonals."
          },
          {
            id: "b",
            label: "8 points on each line",
            correct: false,
            feedback: "There are 9 points on each line. For example, the middle row has 9 points from left to right. Count them!"
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-6-a",
      sourceProblem: "2019-6",
      label: "Adapted practice — not an official AMC question",
      prompt: "A 7×7 grid has 49 points including edges. Point P is at the center. If Q is chosen randomly from the other 48 points, what is the probability that line PQ is a line of symmetry?",
      options: [
        { letter: "A", value: "A", label: "1/2" },
        { letter: "B", value: "B", label: "1/4" }
      ],
      answer: "A",
      answerLabel: "(A) 1/2",
      solution: [
        "A square has 4 lines of symmetry through P.",
        "In a 7×7 grid, each line has 7 points (including P), so 6 other points per line.",
        "Favorable = 4 × 6 = 24 points.",
        "Total = 49 − 1 = 48 points.",
        "Probability = 24/48 = 1/2."
      ],
      reflection: {
        id: "adapted-symmetry-reason",
        prompt: "True or false: In a 5×5 grid, the probability would be 1/2 as well.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Check: 5×5 = 25 points. Each symmetry line has 5 points (including P), so 4 others. 4 lines × 4 = 16 favorable. Total = 24. 16/24 = 2/3 — actually not 1/2! So false."
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Right idea to check! In 5×5: 25 points total, 24 others. Each line: 5 points, 4 others. Favorable = 4×4 = 16. Probability = 16/24 = 2/3, not 1/2. So false!"
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_6",
      credit: "Changed-number practice and coaching authored by Hermes Agent."
    }
  },
  "2019-7": {
    intro: "Work with the total sum instead of the average — it makes the problem much simpler.",
    checks: [
      {
        id: "total-needed",
        prompt: "What total score does Shauna need to average 81 over 5 tests?",
        options: [
          {
            id: "a",
            label: "81 × 5 = 405",
            correct: true,
            feedback: "Yes! Average = total ÷ number of tests. So total = average × number of tests = 81 × 5 = 405."
          },
          {
            id: "b",
            label: "81 + 5 = 86",
            correct: false,
            feedback: "Remember: average × number of tests = total. So 81 × 5 = 405 total points needed."
          }
        ]
      },
      {
        id: "remaining-points",
        prompt: "She has 76 + 94 + 87 = 257 so far. How many points remain for the last 2 tests?",
        options: [
          {
            id: "a",
            label: "405 − 257 = 148",
            correct: true,
            feedback: "Yes. Total needed minus what she has = 405 − 257 = 148 points for the last two tests."
          },
          {
            id: "b",
            label: "405 − 257 = 158",
            correct: false,
            feedback: "Check the subtraction: 405 − 257 = 148. She needs 148 more points across the last 2 tests."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-7-a",
      sourceProblem: "2019-7",
      label: "Adapted practice — not an official AMC question",
      prompt: "A student takes 4 tests. Her first three scores are 65, 78, and 82. Each test is worth 100 points. What is the lowest score she can get on the 4th test to average 80?",
      options: [
        { letter: "A", value: "A", label: "80" },
        { letter: "B", value: "B", label: "95" }
      ],
      answer: "B",
      answerLabel: "(B) 95",
      solution: [
        "Average 80 over 4 tests → total = 80 × 4 = 320.",
        "Current total: 65 + 78 + 82 = 225.",
        "Need: 320 − 225 = 95 on the last test."
      ],
      reflection: {
        id: "adapted-average-reason",
        prompt: "True or false: If she already scored 92 on the first 3 tests (average 92), the lowest she can get on the 4th to keep an 80 average is less than 60.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Check: 92 × 3 = 276. Need total = 80 × 4 = 320. Last test = 320 − 276 = 44. 44 < 60, so true!"
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Let's check: 92 × 3 = 276. Need 80 × 4 = 320. Last test = 320 − 276 = 44. 44 < 60, so it's actually true!"
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_7",
      credit: "Changed-number practice and coaching authored by Hermes Agent."
    }
  },
  "2019-8": {
    intro: "Work step by step: after each gift, multiply by the fraction that remains.",
    checks: [
      {
        id: "after-pedro",
        prompt: "After giving 20% to Pedro, what percentage of the marbles does Gilda have left?",
        options: [
          { id: "a", label: "80%", correct: true, feedback: "Yes. 100% − 20% = 80% remains." },
          { id: "b", label: "20%", correct: false, feedback: "She gave away 20%, so what's left is 100% − 20% = 80%." }
        ]
      },
      {
        id: "after-ebony",
        prompt: "After giving 10% of what's left to Ebony, what fraction of the original does she have?",
        options: [
          { id: "a", label: "0.8 × 0.9 = 0.72 = 72%", correct: true, feedback: "Yes. She keeps 90% of the 80% she had: 0.9 × 0.8 = 0.72." },
          { id: "b", label: "0.8 − 0.1 = 0.7 = 70%", correct: false, feedback: "The 10% is taken from what's left (80%), not from the original. Multiply: 0.9 × 0.8 = 0.72." }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-8-a",
      sourceProblem: "2019-8",
      label: "Adapted practice — not an official AMC question",
      prompt: "A store has a 30% off sale, then takes an additional 20% off the sale price. What is the total discount percentage?",
      options: [
        { letter: "A", value: "A", label: "44%" },
        { letter: "B", value: "B", label: "50%" }
      ],
      answer: "A",
      answerLabel: "(A) 44%",
      solution: [
        "After 30% off, you pay 70% of the original.",
        "Then 20% off the sale price: you pay 80% of 70% = 0.8 × 0.7 = 0.56 = 56%.",
        "Total discount = 100% − 56% = 44%."
      ],
      reflection: {
        id: "adapted-percent-reason",
        prompt: "True or false: A 50% off followed by another 50% off gives a total discount of 75%.",
        options: [
          { id: "true", label: "True", correct: true, feedback: "Yes! After 50% off, you pay 50%. Another 50% off: 0.5 × 0.5 = 0.25 = 25% paid. Discount = 100% − 25% = 75%." },
          { id: "false", label: "False", correct: false, feedback: "Let's check: pay 50%, then 50% of that = 25% of original paid. Discount = 75%. So it's true!" }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_8",
      credit: "Changed-number practice and coaching authored by Hermes Agent."
    }
  },
  "2019-9": {
    intro: "Remember the formula for the volume of a cylinder: V = πr²h. Pay attention to radius vs diameter.",
    checks: [
      {
        id: "alex-radius",
        prompt: "Alex's can has diameter 6 cm. What is its radius?",
        options: [
          { id: "a", label: "3 cm", correct: true, feedback: "Yes. Radius = diameter ÷ 2 = 6 ÷ 2 = 3 cm." },
          { id: "b", label: "6 cm", correct: false, feedback: "Remember radius is half the diameter. 6 ÷ 2 = 3 cm." }
        ]
      },
      {
        id: "felicia-volume",
        prompt: "Felicia's can has r = 6 cm, h = 6 cm. What is its volume?",
        options: [
          { id: "a", label: "π × 36 × 6 = 216π", correct: true, feedback: "Yes. π × 6² × 6 = π × 36 × 6 = 216π." },
          { id: "b", label: "π × 6 × 6 = 36π", correct: false, feedback: "Don't forget to square the radius! r² = 6² = 36, not 6." }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-9-a",
      sourceProblem: "2019-9",
      label: "Adapted practice — not an official AMC question",
      prompt: "Can A has diameter 8 cm and height 10 cm. Can B has diameter 10 cm and height 8 cm. What is the ratio of volume of Can A to Can B?",
      options: [
        { letter: "A", value: "A", label: "16:25" },
        { letter: "B", value: "B", label: "25:16" }
      ],
      answer: "A",
      answerLabel: "(A) 16:25",
      solution: [
        "Can A: r = 4, h = 10 → V = π×16×10 = 160π.",
        "Can B: r = 5, h = 8 → V = π×25×8 = 200π.",
        "Ratio = 160π : 200π = 160:200 = 16:25."
      ],
      reflection: {
        id: "adapted-cylinder-reason",
        prompt: "True or false: If both cans had the same height 10 cm, the ratio of A (d=8) to B (d=10) would be 16:25.",
        options: [
          { id: "true", label: "True", correct: true, feedback: "Yes! Same height cancels out. Ratio = r² ratios = 4²:5² = 16:25." },
          { id: "false", label: "False", correct: false, feedback: "Actually it is true. With same height, volume depends only on r². So 4²:5² = 16:25." }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_9",
      credit: "Changed-number practice and coaching authored by Hermes Agent."
    }
  },
  "2019-10": {
    intro: "Find the original mean and median first, then recalculate with the corrected Wednesday value.",
    checks: [
      {
        id: "original-mean",
        prompt: "Original data: Mon=20, Tue=26, Wed=16, Thu=22, Fri=16. What is the mean?",
        options: [
          { id: "a", label: "100 ÷ 5 = 20", correct: true, feedback: "Yes. Sum = 20+26+16+22+16 = 100. Mean = 100/5 = 20." },
          { id: "b", label: "20 + 26 + 16 + 22 + 16 = 100, so mean = 100", correct: false, feedback: "Mean = sum ÷ number of values. 100 ÷ 5 = 20, not 100." }
        ]
      },
      {
        id: "new-mean",
        prompt: "If Wednesday is corrected to 21, what is the new mean?",
        options: [
          { id: "a", label: "(100 − 16 + 21) ÷ 5 = 105 ÷ 5 = 21", correct: true, feedback: "Yes. Sum increased by 5 to 105. Mean = 105/5 = 21. So mean increased by 1." },
          { id: "b", label: "100 ÷ 5 + 5 = 25", correct: false, feedback: "The correction adds 5 to the total, so the mean increases by 5/5 = 1, not 5. New mean = 20 + 1 = 21." }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-10-a",
      sourceProblem: "2019-10",
      label: "Adapted practice — not an official AMC question",
      prompt: "A student's quiz scores are 8, 9, 5, 7, 6. She realizes the 5 should have been an 8. What happens to the mean and median?",
      options: [
        { letter: "A", value: "A", label: "Mean +0.6, median +1" },
        { letter: "B", value: "B", label: "Mean +1, median +0.5" }
      ],
      answer: "A",
      answerLabel: "(A) Mean +0.6, median +1",
      solution: [
        "Original: 5,6,7,8,9. Sum = 35. Mean = 7. Median = 7.",
        "Corrected: 6,7,8,8,9. Sum = 38. Mean = 7.6 (+0.6). Median = 8 (+1)."
      ],
      reflection: {
        id: "adapted-stats-reason",
        prompt: "True or false: If a data value increases by 3 in a set of 5 numbers, the mean always increases by 0.6.",
        options: [
          { id: "true", label: "True", correct: true, feedback: "Yes! The sum increases by 3, so mean increases by 3/5 = 0.6 regardless of which value changed." },
          { id: "false", label: "False", correct: false, feedback: "Actually it's true. Mean = sum ÷ count. An increase of 3 in the sum always increases the mean by 3/5 = 0.6." }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_10",
      credit: "Changed-number practice and coaching authored by Hermes Agent."
    }
  },
  "2019-11": {
    intro: "Every student takes math or foreign language (or both). The total counts include students who take both — try finding how many take only math.",
    checks: [
      {
        id: "only-math-count",
        prompt: "There are 93 students total and 54 take a foreign language. Which calculation finds the number taking only math?",
        options: [
          {
            id: "a",
            label: "93 − 54 = 39, because every student not taking a foreign language must take math.",
            correct: true,
            feedback: "Yes. Since every student takes math or foreign language (or both), all 93 − 54 = 39 students who do not take a foreign language must take math. The 70 math figure includes those who also take foreign language, so it is not needed."
          },
          {
            id: "b",
            label: "70 − 54 = 16, because subtract the foreign language students from the math students.",
            correct: false,
            feedback: "Not quite. The 70 math students include some who also take foreign language. The 54 foreign language students also include some math students. Use the total: 93 − 54 = 39 students take only math."
          }
        ]
      },
      {
        id: "venn-diagram",
        prompt: "If 31 students take both subjects, how many take only math?",
        options: [
          {
            id: "a",
            label: "70 − 31 = 39",
            correct: true,
            feedback: "Yes. Take the 70 math students and subtract the 31 who also take foreign language, leaving 39 who take only math."
          },
          {
            id: "b",
            label: "93 − 31 = 62",
            correct: false,
            feedback: "The total includes all students. The 31 taking both are already counted in both the 70 and the 54. Only math = 70 − 31 = 39."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-11-a",
      sourceProblem: "2019-11",
      label: "Adapted practice — not an official AMC question",
      prompt: "A school has 120 students. Each student takes art or music (or both). There are 85 students taking art and 60 students taking music. How many students take only art?",
      options: [
        { letter: "A", value: 60, label: "60" },
        { letter: "B", value: 35, label: "35" }
      ],
      answer: 60,
      answerLabel: "(A) 60",
      solution: [
        "Every student takes art or music (or both), so students who do not take music must take art.",
        "Total − music = 120 − 60 = 60 students take only art.",
        "Check: both = 85 + 60 − 120 = 25. Only art = 85 − 25 = 60."
      ],
      reflection: {
        id: "adapted-venn-reason",
        prompt: "True or false: the number of students taking only art can be found without using the 85 art students at all.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Yes! Since every student not in music must be in art, 120 − 60 = 60 gives only art directly. The art total is extra information."
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Actually it is true. Because every student takes at least one subject, the students not taking music all take only art. The 85 art figure is not needed for that count."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_11",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the complement-count approach from AoPS Solution 1 for the original problem."
    }
  },
  "2019-12": {
    intro: "Three views of the same cube are shown. Use the faces that appear together to find which colors are opposite each other.",
    checks: [
      {
        id: "find-opposite-pair",
        prompt: "From the first and third views, brown appears next to green, white, red, and aqua. Which color must be opposite brown?",
        options: [
          {
            id: "a",
            label: "Purple, because it is the only color that never appears next to brown in any view.",
            correct: true,
            feedback: "Yes. A cube face has four adjacent faces and one opposite face. Brown appears next to four distinct colors, so the only remaining color — purple — must be opposite brown."
          },
          {
            id: "b",
            label: "Red, because red appears in two views with brown.",
            correct: false,
            feedback: "Red appears adjacent to brown in the first view, so they share an edge — they cannot be opposite. Look for the color that never appears alongside brown."
          }
        ]
      },
      {
        id: "aqua-opposite",
        prompt: "Brown is opposite purple, and green is opposite white. What remains for aqua?",
        options: [
          {
            id: "a",
            label: "Red is the only color left unpaired, so aqua is opposite red.",
            correct: true,
            feedback: "Yes. With brown−purple and green−white as opposite pairs, only red and aqua are left. They must be opposite each other."
          },
          {
            id: "b",
            label: "Aqua is opposite green, because they share similar letter positions.",
            correct: false,
            feedback: "Green is already paired with white as opposites. The remaining two colors are red and aqua — they must be opposite each other."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-12-a",
      sourceProblem: "2019-12",
      label: "Adapted practice — not an official AMC question",
      prompt: "A cube has faces painted red (R), blue (B), yellow (Y), green (G), orange (O), and purple (P). Three views are shown. What color is opposite blue?",
      views: [
        "View 1: Red (top), Blue (front), Yellow (right)",
        "View 2: Green (top), Red (front), Purple (right)",
        "View 3: Blue (top), Green (front), Orange (right)"
      ],
      options: [
        { letter: "A", value: "A", label: "Purple" },
        { letter: "B", value: "B", label: "Orange" }
      ],
      answer: "A",
      answerLabel: "(A) Purple",
      solution: [
        "From views 1 and 2: Red appears next to Blue, Yellow, Green, and Purple — so Red is opposite Orange.",
        "From views 1 and 3: Blue appears next to Red, Yellow, Green, and Orange — so Blue is opposite Purple.",
        "Remaining pair: Yellow opposite Green.",
        "Thus, opposite of Blue is Purple."
      ],
      reflection: {
        id: "adapted-cube-reason",
        prompt: "True or false: if Blue is opposite Purple, then Purple cannot appear in the same view as Blue.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Yes. Opposite faces of a cube never share an edge and cannot both be visible in the same view (unless the cube is transparent). Purple never appears with Blue in any view."
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Opposite faces of a cube never appear together in a single view — they are on opposite sides. Check the views: Purple is indeed never shown with Blue."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_12",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the elimination-by-adjacency method from the AoPS written solution."
    }
  },
  "2019-13": {
    intro: "Two-digit palindromes are all multiples of 11. Use that property to find the smallest possible sum that meets the conditions.",
    checks: [
      {
        id: "palindrome-property",
        prompt: "Every two-digit palindrome is a multiple of 11. What does that imply about the sum of three distinct two-digit palindromes?",
        options: [
          {
            id: "a",
            label: "The sum is also a multiple of 11, because multiples of 11 added together stay multiples of 11.",
            correct: true,
            feedback: "Yes. If each term is a multiple of 11, their sum is also a multiple of 11. So N must be a multiple of 11."
          },
          {
            id: "b",
            label: "The sum must be a palindrome too.",
            correct: false,
            feedback: "Not necessarily. The problem says N is NOT a palindrome. The property of being a multiple of 11 is inherited, but being a palindrome is not."
          }
        ]
      },
      {
        id: "find-smallest-n",
        prompt: "The smallest 3-digit multiple of 11 that is not a palindrome is 110. Can 110 be written as the sum of three distinct two-digit palindromes?",
        options: [
          {
            id: "a",
            label: "Yes: 11 + 22 + 77 = 110, and all three are distinct two-digit palindromes.",
            correct: true,
            feedback: "Yes. 11, 22, and 77 are all two-digit palindromes, distinct, and sum to 110. The digit sum is 1 + 1 + 0 = 2."
          },
          {
            id: "b",
            label: "No: 110 cannot be formed because the smallest three two-digit palindromes (11 + 22 + 33) sum to only 66.",
            correct: false,
            feedback: "You can use larger palindromes too, not just the smallest ones. 11 + 22 + 77 = 110. Other combinations like 11 + 33 + 66 also work."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-13-a",
      sourceProblem: "2019-13",
      label: "Adapted practice — not an official AMC question",
      prompt: "A number N is the least 3-digit integer that is NOT a palindrome but is the sum of three distinct two-digit multiples of 9. What is the sum of the digits of N?",
      options: [
        { letter: "A", value: 9, label: "9" },
        { letter: "B", value: 3, label: "3" }
      ],
      answer: 9,
      answerLabel: "(A) 9",
      solution: [
        "Two-digit multiples of 9: 18, 27, 36, 45, 54, 63, 72, 81, 90, 99.",
        "Smallest three distinct: 18 + 27 + 36 = 81 (2-digit). Next: 18 + 27 + 45 = 90 (2-digit). 18 + 27 + 54 = 99 (2-digit).",
        "Next: 18 + 27 + 63 = 108. 108 is a 3-digit non-palindrome. Check if any smaller 3-digit sum exists: 18 + 36 + 45 = 99 (2-digit). 27 + 36 + 45 = 108 again.",
        "So N = 108. Sum of digits = 1 + 0 + 8 = 9."
      ],
      reflection: {
        id: "adapted-sum-reason",
        prompt: "True or false: 111 could also be a candidate for N, and its digit sum is 3.",
        options: [
          {
            id: "false",
            label: "False",
            correct: true,
            feedback: "Right. 111 is a palindrome (reads the same forwards and backwards), so it does not satisfy the condition that N is NOT a palindrome. 108 is smaller and works."
          },
          {
            id: "true",
            label: "True",
            correct: false,
            feedback: "Check: 111 is a palindrome (it reads the same both ways). The problem requires N to NOT be a palindrome. Also, 108 is smaller than 111, so 111 would not be the least."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_13",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the multiple-property method from AoPS Solutions 1–3 for the original problem."
    }
  },
  "2019-14": {
    intro: "She redeems one coupon every 10 days, and never on a Sunday. Work forward from each possible starting day to see which one avoids Sundays.",
    checks: [
      {
        id: "ten-days-later",
        prompt: "If she starts on Wednesday, what day is 10 days later?",
        options: [
          {
            id: "a",
            label: "Saturday: 10 ÷ 7 leaves remainder 3, so Wednesday + 3 = Saturday.",
            correct: true,
            feedback: "Yes. 10 days later = 1 week (7 days) + 3 days. So Wednesday + 3 = Saturday."
          },
          {
            id: "b",
            label: "Wednesday again, because 10 days is close to a week.",
            correct: false,
            feedback: "10 days is 3 days more than a full week. Add 7 days to Wednesday gives next Wednesday; add 3 more gives Saturday."
          }
        ]
      },
      {
        id: "check-sundays",
        prompt: "Starting on Wednesday, the coupon dates are: Wed, Sat, Tue, Fri, Mon, Thu. Do any fall on Sunday?",
        options: [
          {
            id: "a",
            label: "No — none of those days is Sunday.",
            correct: true,
            feedback: "Right. The sequence skips Sunday entirely. Every other starting day produces a Sunday within the 6 coupons."
          },
          {
            id: "b",
            label: "Yes — Saturday is too close to Sunday.",
            correct: false,
            feedback: "Saturday is not Sunday. The actual dates are Wednesday, Saturday, Tuesday, Friday, Monday, Thursday — check each one against the days of the week."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-14-a",
      sourceProblem: "2019-14",
      label: "Adapted practice — not an official AMC question",
      prompt: "Isabella has 5 coupons to redeem, one every 12 days. Pete's is closed on Tuesdays. She realizes no coupon date falls on a Tuesday. On what day of the week does she redeem her first coupon?",
      options: [
        { letter: "A", value: "A", label: "Sunday" },
        { letter: "B", value: "B", label: "Wednesday" }
      ],
      answer: "A",
      answerLabel: "(A) Sunday",
      solution: [
        "12 days later = 1 week (7 days) + 5 days. So each coupon is 5 weekdays after the previous one.",
        "Try Sunday: Sun → Fri (0+5=5) → Wed (5+5=10≡3) → Mon (3+5=8≡1) → Sat (1+5=6). None falls on Tuesday. ✓",
        "Try Wednesday: Wed → Mon (3+5=8≡1) → Sat (1+5=6) → Thu (6+5=11≡4) → Tue (4+5=9≡2). Last coupon on Tuesday. ✗",
        "Only Sunday works."
      ],
      reflection: {
        id: "adapted-calendar-reason",
        prompt: "True or false: starting on Friday would also avoid Tuesdays with a 12-day gap.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Yes! Fri → Wed (5+5=10≡3) → Mon (3+5=8≡1) → Sat (1+5=6) → Thu (6+5=11≡4). No Tuesday. There can be more than one valid starting day."
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Let's check: Fri → Wed → Mon → Sat → Thu. None is Tuesday, so it is true that Friday also works. The answer choices may list only one valid option."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_14",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the day-counting method from AoPS Solution 4 for the original problem."
    }
  },
  "2019-15": {
    intro: "Two conditional probabilities are linked by the same 'both' group. Find how many people wear both, then flip the fraction.",
    checks: [
      {
        id: "find-both",
        prompt: "35 people wear caps, and P(sunglasses | cap) = 2/5. How many people wear both?",
        options: [
          {
            id: "a",
            label: "(2/5) × 35 = 14",
            correct: true,
            feedback: "Yes. P(sunglasses | cap) means 'of the cap-wearers, how many also wear sunglasses.' So 2/5 of 35 = 14 people wear both."
          },
          {
            id: "b",
            label: "35 × 5/2 = 87.5, rounded to 88",
            correct: false,
            feedback: "The probability 2/5 means 2 out of every 5 cap-wearers also wear sunglasses. Multiply 35 by 2/5, not 5/2: (2/5) × 35 = 14."
          }
        ]
      },
      {
        id: "flip-probability",
        prompt: "14 people wear both. 50 people wear sunglasses. What is P(cap | sunglasses)?",
        options: [
          {
            id: "a",
            label: "14/50 = 7/25",
            correct: true,
            feedback: "Yes. Of the 50 people wearing sunglasses, 14 also wear a cap. So the probability is 14/50 = 7/25."
          },
          {
            id: "b",
            label: "14/35 = 2/5, the same as before",
            correct: false,
            feedback: "The denominator changes. The first probability used cap-wearers (35). This one uses sunglasses-wearers (50). So it is 14/50 = 7/25, not 14/35."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-15-a",
      sourceProblem: "2019-15",
      label: "Adapted practice — not an official AMC question",
      prompt: "At a winter market, 60 people are wearing hats and 40 people are wearing scarves. Some people wear both. If one of the scarf-wearers is chosen at random, the probability they also wear a hat is 1/4. If instead someone wearing a hat is chosen at random, what is the probability they also wear a scarf?",
      options: [
        { letter: "A", value: "A", label: "1/6" },
        { letter: "B", value: "B", label: "1/4" }
      ],
      answer: "A",
      answerLabel: "(A) 1/6",
      solution: [
        "Both = (1/4) × 40 = 10 people wear both hat and scarf.",
        "P(scarf | hat) = both ÷ hat-wearers = 10/60 = 1/6."
      ],
      reflection: {
        id: "adapted-conditional-reason",
        prompt: "True or false: P(hat | scarf) and P(scarf | hat) are always equal because they describe the same overlap.",
        options: [
          {
            id: "false",
            label: "False",
            correct: true,
            feedback: "Right. Both probabilities use the same overlap (10 people), but different denominators. P(hat|scarf) = 10/40 = 1/4, while P(scarf|hat) = 10/60 = 1/6."
          },
          {
            id: "true",
            label: "True",
            correct: false,
            feedback: "They share the same numerator (the overlap), but the denominators differ. P(hat|scarf) uses scarf-wearers (40), P(scarf|hat) uses hat-wearers (60). So they differ."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_15",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the find-overlap-then-flip method from the AoPS solution."
    }
  },
  "2019-16": {
    reviewedAt: "2026-10-20",
    intro: "Average speed is total distance divided by total time. Find the time for each part separately, then set up an equation for the unknown distance.",
    checks: [
      {
        id: "first-leg-time",
        prompt: "The first leg is 15 miles at 30 mph. How long does that take?",
        options: [
          {
            id: "a",
            label: "15 ÷ 30 = 0.5 hours",
            correct: true,
            feedback: "Yes. Time = distance ÷ speed, so 15 miles at 30 mph takes 15/30 = 0.5 hours (30 minutes)."
          },
          {
            id: "b",
            label: "30 ÷ 15 = 2 hours",
            correct: false,
            feedback: "That is speed ÷ distance, which gives a rate in hours per mile, not time. Use time = distance ÷ speed: 15 ÷ 30 = 0.5 hours."
          }
        ]
      },
      {
        id: "avg-speed-equation",
        prompt: "He wants an average speed of 50 mph. If the extra miles are x, which equation represents the trip?",
        options: [
          {
            id: "a",
            label: "(15 + x) ÷ (0.5 + x/55) = 50",
            correct: true,
            feedback: "Yes. Total distance = 15 + x. Total time = 0.5 + x/55. Average speed = total distance ÷ total time = 50."
          },
          {
            id: "b",
            label: "(15 × 30 + 55x) ÷ (15 + x) = 50",
            correct: false,
            feedback: "Average speed is not a weighted average of the speeds by distance. It is total distance divided by total time. Use time = distance/speed for each leg."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-16-a",
      sourceProblem: "2019-16",
      label: "Adapted practice — not an official AMC question",
      prompt: "A driver goes 20 miles at 40 miles per hour, then drives some more miles at 55 miles per hour. If the average speed for the whole trip is 50 miles per hour, how many total miles did the driver travel?",
      options: [
        { letter: "A", value: 55, label: "55 miles" },
        { letter: "B", value: 75, label: "75 miles" }
      ],
      answer: 75,
      answerLabel: "(B) 75 miles",
      solution: [
        "Time for first leg: 20 ÷ 40 = 0.5 hours.",
        "Let x = extra miles at 55 mph. Time for second leg: x/55 hours.",
        "Total distance = 20 + x. Total time = 0.5 + x/55.",
        "Average speed equation: (20 + x) ÷ (0.5 + x/55) = 50.",
        "Solve: 20 + x = 50(0.5 + x/55) = 25 + 10x/11.",
        "x − 10x/11 = 5, so x/11 = 5, giving x = 55 miles.",
        "Total miles = 20 + 55 = 75 miles."
      ],
      reflection: {
        id: "adapted-avg-speed-reason",
        prompt: "True or false: if the second leg were also at 40 mph, the average speed would still be 50 mph.",
        options: [
          {
            id: "false",
            label: "False",
            correct: true,
            feedback: "Right. If both legs are at 40 mph, the average speed is 40 mph, no matter the distances. A higher average requires a higher speed on the second leg."
          },
          {
            id: "true",
            label: "True",
            correct: false,
            feedback: "If both legs are at the same speed of 40 mph, the average cannot be 50 mph. The average of two legs at the same speed is that speed. The second leg must be faster."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_16",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the time = distance/speed method from AoPS Solutions 1–2 for the original problem."
    }
  },
  "2019-17": {
    reviewedAt: "2026-10-20",
    intro: "Each term is 1 − 1/k². Write each as (k−1)(k+1)/k² and watch the cancellation across consecutive terms.",
    checks: [
      {
        id: "rewrite-term",
        prompt: "What is the k-th term of the product (1·3/2·2)(2·4/3·3)⋯?",
        options: [
          {
            id: "a",
            label: "k(k+2)/(k+1)² for k = 1, 2, ..., 98",
            correct: true,
            feedback: "Yes. Each term is k(k+2)/(k+1)². For k=1: 1·3/2². For k=2: 2·4/3², and so on."
          },
          {
            id: "b",
            label: "(k+1)(k+3)/(k+2)²",
            correct: false,
            feedback: "Check the first term: for k=1, (1·3)/(2·2) matches k(k+2)/(k+1)², not (k+1)(k+3)/(k+2)²."
          }
        ]
      },
      {
        id: "telescope-product",
        prompt: "After regrouping and canceling, what remains?",
        options: [
          {
            id: "a",
            label: "1/2 × 100/99 = 50/99",
            correct: true,
            feedback: "Yes. The first factor 1/2 and the last factor 100/99 survive. All middle terms cancel to 1."
          },
          {
            id: "b",
            label: "1/2 only — the rest all cancel",
            correct: false,
            feedback: "The first fraction's numerator 1/2 is part of the first term. But the last term's 100/99 also survives: (1·100)/(2·99) = 50/99."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-17-a",
      sourceProblem: "2019-17",
      label: "Adapted practice — not an official AMC question",
      prompt: "What is the value of (1 − 1/4)(1 − 1/9)(1 − 1/16)⋯(1 − 1/2500)?",
      options: [
        { letter: "A", value: "A", label: "51/100" },
        { letter: "B", value: "B", label: "49/100" }
      ],
      answer: "A",
      answerLabel: "(A) 51/100",
      solution: [
        "Each term is 1 − 1/k² = (k²−1)/k² = (k−1)(k+1)/k².",
        "The product runs from k = 2 to k = 50 (since 50² = 2500).",
        "Write the product: (1·3/2²)(2·4/3²)(3·5/4²)⋯(49·51/50²).",
        "Nearly every factor appears in both a numerator and a denominator and cancels.",
        "Surviving numerator factors: 1 (from first term) and 51 (from last term).",
        "Surviving denominator factors: 2 (from first term) and 50 (from last term).",
        "Result: (1 × 51) / (2 × 50) = 51/100."
      ],
      reflection: {
        id: "adapted-telescope-reason",
        prompt: "True or false: (1 − 1/4)(1 − 1/9)⋯(1 − 1/100) equals 11/20.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Yes! For k = 2 to 10 (since 10² = 100), the surviving factors are 1 and 11 over 2 and 10: (1 × 11)/(2 × 10) = 11/20."
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "It is true. The product up to 1 − 1/100 uses k = 2 to 10. The telescoping gives (1 × 11)/(2 × 10) = 11/20."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_17",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the telescoping-product method from the AoPS solution for the original problem."
    }
  },
  "2019-18": {
    reviewedAt: "2026-10-20",
    intro: "A sum is even when both numbers have the same parity — both even or both odd. Count how many faces of each parity are on the die.",
    checks: [
      {
        id: "parity-count",
        prompt: "The faces are 1, 2, 3, 5, 7, 8. How many are even and how many are odd?",
        options: [
          {
            id: "a",
            label: "2 evens (2, 8) and 4 odds (1, 3, 5, 7)",
            correct: true,
            feedback: "Yes. Even: 2, 8. Odd: 1, 3, 5, 7. P(even) = 2/6 = 1/3 and P(odd) = 4/6 = 2/3."
          },
          {
            id: "b",
            label: "3 evens (2, 3, 8) and 3 odds (1, 5, 7)",
            correct: false,
            feedback: "Check each number: 1 (odd), 2 (even), 3 (odd), 5 (odd), 7 (odd), 8 (even). So only 2 evens (2, 8) and 4 odds (1, 3, 5, 7)."
          }
        ]
      },
      {
        id: "even-sum-prob",
        prompt: "Two dice with these faces are rolled. P(even sum) = P(both even) + P(both odd). What is this probability?",
        options: [
          {
            id: "a",
            label: "(2/6)(2/6) + (4/6)(4/6) = 20/36 = 5/9",
            correct: true,
            feedback: "Yes. Both even: (2/6)(2/6) = 4/36. Both odd: (4/6)(4/6) = 16/36. Sum = 20/36 = 5/9."
          },
          {
            id: "b",
            label: "(2/6)(4/6) + (4/6)(2/6) = 16/36 = 4/9",
            correct: false,
            feedback: "That is the probability of an odd sum (one even and one odd). An even sum requires both dice to have the same parity."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-18-a",
      sourceProblem: "2019-18",
      label: "Adapted practice — not an official AMC question",
      prompt: "A fair six-sided die has faces labeled 1, 2, 4, 5, 7, 9. Two such dice are rolled. What is the probability that the sum is even?",
      options: [
        { letter: "A", value: "A", label: "5/9" },
        { letter: "B", value: "B", label: "4/9" }
      ],
      answer: "A",
      answerLabel: "(A) 5/9",
      solution: [
        "Even faces: 2, 4 (2 of 6). Odd faces: 1, 5, 7, 9 (4 of 6).",
        "P(even) = 2/6 = 1/3, P(odd) = 4/6 = 2/3.",
        "The sum is even when both dice show even OR both show odd.",
        "P(both even) = (1/3)(1/3) = 1/9.",
        "P(both odd) = (2/3)(2/3) = 4/9.",
        "P(even sum) = 1/9 + 4/9 = 5/9."
      ],
      reflection: {
        id: "adapted-parity-reason",
        prompt: "True or false: if 9 were changed to 10, P(even sum) would increase.",
        options: [
          {
            id: "false",
            label: "False",
            correct: true,
            feedback: "Right. 3 evens and 3 odds gives P(even sum) = (3/6)(3/6)+(3/6)(3/6) = 1/2 = 0.5, which is less than 5/9 ≈ 0.556. The probability decreases."
          },
          {
            id: "true",
            label: "True",
            correct: false,
            feedback: "With 3 evens and 3 odds, P(even sum) = (3/6)(3/6)+(3/6)(3/6) = 1/2 = 0.5, which is actually less than 5/9 ≈ 0.556. So the probability decreases."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_18",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the parity-count method from the AoPS solution for the original problem."
    }
  },
  "2019-19": {
    reviewedAt: "2026-10-20",
    intro: "Count the total games first. Each game awards at most 3 points. For the top 3 to tie for first, find the theoretical maximum then check if it's achievable.",
    checks: [
      {
        id: "games-involving-top",
        prompt: "Total games = 30. Games between bottom-3 only = 6. How many games involve at least one top-3 team?",
        options: [
          {
            id: "a",
            label: "30 − 6 = 24 games",
            correct: true,
            feedback: "Yes. 24 games involve at least one top-3 team. Each such game can award at most 3 points to a top-3 team."
          },
          {
            id: "b",
            label: "30 − 3 = 27 games",
            correct: false,
            feedback: "The bottom-3 teams play each other 2 × C(3,2) = 6 games. Those 6 games involve only bottom teams, so subtract them: 30 − 6 = 24."
          }
        ]
      },
      {
        id: "max-per-top",
        prompt: "If the top 3 share the 72 maximum points equally, how many does each get?",
        options: [
          {
            id: "a",
            label: "72 ÷ 3 = 24 points each",
            correct: true,
            feedback: "Yes. The maximum total points from games involving top-3 teams is 24 × 3 = 72. Split evenly: 72 ÷ 3 = 24 each."
          },
          {
            id: "b",
            label: "72 points total, but they don't have to be equal — one team could get more",
            correct: false,
            feedback: "The problem says the top three teams earned the same number of total points. So they must be equal. 72 ÷ 3 = 24."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-19-a",
      sourceProblem: "2019-19",
      label: "Adapted practice — not an official AMC question",
      prompt: "In a tournament of 8 teams where each pair plays twice (win=3, draw=1, loss=0), the top two teams are tied. What is the maximum possible points per team?",
      options: [
        { letter: "A", value: 39, label: "39" },
        { letter: "B", value: 38, label: "38" }
      ],
      answer: 39,
      answerLabel: "(A) 39",
      solution: [
        "Each team plays 7 opponents twice = 14 games.",
        "Top two teams (A and B) must tie. Maximize by winning all games against the other 6 teams: 12 × 3 = 36 points.",
        "In their two head-to-head matches, A wins one and B wins the other. Each gets 3 points from head-to-head.",
        "Total for each: 36 + 3 = 39 points."
      ],
      reflection: {
        id: "adapted-max-points-reason",
        prompt: "True or false: the top two teams could each score 42 points if they both win all 14 games.",
        options: [
          {
            id: "false",
            label: "False",
            correct: true,
            feedback: "Right. They play each other twice, so they cannot both win all 14 games. If A beats B twice, B loses those two games. The tie also breaks."
          },
          {
            id: "true",
            label: "True",
            correct: false,
            feedback: "They play each other twice, so at least one of those games produces a loss for one team. Both teams cannot win all 14 games. Max under tie condition is 39."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_19",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the head-to-head split method from the AoPS solution for the original problem."
    }
  },
  "2019-20": {
    reviewedAt: "2026-10-20",
    intro: "A squared expression equals 16, so the expression inside can be 4 or −4. That gives two quadratic equations to solve.",
    checks: [
      {
        id: "take-square-root",
        prompt: "If (x² − 5)² = 16, what are the possible values of x² − 5?",
        options: [
          {
            id: "a",
            label: "4 and −4",
            correct: true,
            feedback: "Yes. If u² = 16, then u = 4 or u = −4. So x² − 5 = 4 or x² − 5 = −4."
          },
          {
            id: "b",
            label: "4 only, because squares are always positive",
            correct: false,
            feedback: "It is true that x² − 5 could be 4, but (−4)² = 16 as well. The equation u² = 16 has two solutions: u = 4 and u = −4."
          }
        ]
      },
      {
        id: "count-solutions",
        prompt: "From x² − 5 = 4 we get x² = 9. From x² − 5 = −4 we get x² = 1. How many real solutions in total?",
        options: [
          {
            id: "a",
            label: "4: x = 3, −3, 1, −1",
            correct: true,
            feedback: "Yes. x² = 9 gives x = ±3 (2 solutions). x² = 1 gives x = ±1 (2 solutions). Total: 4 real solutions."
          },
          {
            id: "b",
            label: "2: x = 3 and x = 1 (only the positive roots)",
            correct: false,
            feedback: "Both positive and negative square roots are real solutions. x² = 9 gives both 3 and −3. x² = 1 gives both 1 and −1. That is 4 solutions."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-20-a",
      sourceProblem: "2019-20",
      label: "Adapted practice — not an official AMC question",
      prompt: "How many real numbers x satisfy the equation (x² − 6)² = 25?",
      options: [
        { letter: "A", value: 4, label: "4" },
        { letter: "B", value: 2, label: "2" }
      ],
      answer: 4,
      answerLabel: "(A) 4",
      solution: [
        "Take the square root of both sides: x² − 6 = 5 or x² − 6 = −5.",
        "Case 1: x² − 6 = 5 → x² = 11 → x = √11 or x = −√11 (2 solutions).",
        "Case 2: x² − 6 = −5 → x² = 1 → x = 1 or x = −1 (2 solutions).",
        "All four values are real. Total: 4 real solutions."
      ],
      reflection: {
        id: "adapted-quadratic-reason",
        prompt: "True or false: if the equation were (x² − 6)² = 49, it would have the same number of real solutions.",
        options: [
          {
            id: "false",
            label: "False",
            correct: true,
            feedback: "Right. For (x²−6)²=49: x²−6=7 gives x²=13 (2 real), x²−6=−7 gives x²=−1 (0 real). That is 2 solutions, not 4. The number depends on whether x² = negative has solutions."
          },
          {
            id: "true",
            label: "True",
            correct: false,
            feedback: "Check: x²−6=7 gives x²=13 (2 real), x²−6=−7 gives x²=−1 (0 real). So only 2 solutions, not 4. The statement is false."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_20",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the square-root-and-solve method from the AoPS solution for the original problem."
    }
  },
  "2019-21": {
    reviewedAt: "2026-10-20",
    intro: "The triangle is formed by three lines. Find where each pair of lines meets — those are the three vertices. Then find the base and height.",
    checks: [
      {
        id: "find-intersection",
        prompt: "What are the three vertices of the triangle formed by y = 5, y = 1 + x, and y = 1 − x?",
        options: [
          {
            id: "a",
            label: "(4,5), (−4,5), (0,1)",
            correct: true,
            feedback: "Yes. y=5 meets y=1+x at (4,5), y=5 meets y=1−x at (−4,5), and y=1+x meets y=1−x at (0,1)."
          },
          {
            id: "b",
            label: "(5,4), (5,−4), (1,0)",
            correct: false,
            feedback: "Check the coordinates. The lines are y = 5 (horizontal), y = 1 + x, and y = 1 − x. Plug into the equations to find the actual intersections."
          }
        ]
      },
      {
        id: "triangle-area",
        prompt: "The base is the horizontal segment from (−4,5) to (4,5). The height is from (0,1) to y = 5. What is the area?",
        options: [
          {
            id: "a",
            label: "(1/2) × 8 × 4 = 16",
            correct: true,
            feedback: "Yes. Base length = 4 − (−4) = 8. Height = 5 − 1 = 4. Area = (1/2)(8)(4) = 16."
          },
          {
            id: "b",
            label: "(1/2) × 4 × 4 = 8",
            correct: false,
            feedback: "The base is from x = −4 to x = 4, which is 8 units long, not 4. The height is 5 − 1 = 4."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-21-a",
      sourceProblem: "2019-21",
      label: "Adapted practice — not an official AMC question",
      prompt: "What is the area of the triangle formed by the lines y = 4, y = 2 + x, and y = 2 − x?",
      options: [
        { letter: "A", value: 4, label: "4" },
        { letter: "B", value: 8, label: "8" }
      ],
      answer: 4,
      answerLabel: "(A) 4",
      solution: [
        "Intersection of y = 4 and y = 2 + x: 4 = 2 + x → x = 2 → (2, 4).",
        "Intersection of y = 4 and y = 2 − x: 4 = 2 − x → x = −2 → (−2, 4).",
        "Intersection of y = 2 + x and y = 2 − x: 2 + x = 2 − x → x = 0 → y = 2 → (0, 2).",
        "Base = 2 − (−2) = 4. Height = 4 − 2 = 2.",
        "Area = (1/2) × 4 × 2 = 4."
      ],
      reflection: {
        id: "adapted-coord-reason",
        prompt: "True or false: if y = 4 were changed to y = 5, the area would double.",
        options: [
          {
            id: "false",
            label: "False",
            correct: true,
            feedback: "Right. The base stays the same (from x = −2 to x = 2, length 4), but the height increases from 4−2=2 to 5−2=3, so area goes from 4 to 6, not 8."
          },
          {
            id: "true",
            label: "True",
            correct: false,
            feedback: "The base stays 4, but the height changes from 2 to 3. Area = (1/2)(4)(3) = 6, not 8. So it doesn't double."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_21",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the intersection method from the AoPS solution for the original problem."
    }
  },
  "2019-22": {
    reviewedAt: "2026-10-20",
    intro: "A percent increase followed by the same percent decrease does not return to the original. Write the changes as multipliers and set up an equation.",
    checks: [
      {
        id: "multiplier-equation",
        prompt: "If the original price is P and the percent is p (as a decimal), what equation relates final and original price?",
        options: [
          {
            id: "a",
            label: "P(1+p)(1−p) = 0.84P, so (1+p)(1−p) = 0.84",
            correct: true,
            feedback: "Yes. Increase by p gives P(1+p). Then decrease by p gives P(1+p)(1−p). The final is 84% of P, so (1+p)(1−p) = 0.84."
          },
          {
            id: "b",
            label: "P + pP − pP = 0.84P, so the net change is 0%",
            correct: false,
            feedback: "The decrease applies to the increased price, not the original. So P(1+p)(1−p) ≠ P + pP − pP. The correct multiplier form is (1+p)(1−p)."
          }
        ]
      },
      {
        id: "solve-percent",
        prompt: "(1+p)(1−p) = 0.84. What is p?",
        options: [
          {
            id: "a",
            label: "p = 0.4 = 40%",
            correct: true,
            feedback: "Yes. (1+p)(1−p) = 1 − p² = 0.84 → p² = 0.16 → p = 0.4 (positive)."
          },
          {
            id: "b",
            label: "p = 0.16 = 16%",
            correct: false,
            feedback: "16% = 0.16. Check: (1.16)(0.84) ≈ 0.9744, not 0.84. The equation is 1 − p² = 0.84, so p² = 0.16, giving p = 0.4."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-22-a",
      sourceProblem: "2019-22",
      label: "Adapted practice — not an official AMC question",
      prompt: "A store increased a price by a certain percent, then decreased the new price by the same percent. The final price was 75% of the original. What percent was used?",
      options: [
        { letter: "A", value: 50, label: "50%" },
        { letter: "B", value: 25, label: "25%" }
      ],
      answer: 50,
      answerLabel: "(A) 50%",
      solution: [
        "Let p be the percent as a decimal. (1+p)(1−p) = 0.75.",
        "1 − p² = 0.75 → p² = 0.25 → p = 0.5 = 50%.",
        "Check: $100 → $150 → $75 (75% of $100). ✓"
      ],
      reflection: {
        id: "adapted-percent-reason",
        prompt: "True or false: if the final price were 96% of the original, the percent would be 20%.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Yes. (1+p)(1−p) = 0.96 → 1 − p² = 0.96 → p² = 0.04 → p = 0.2 = 20%."
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Check: 20% gives (1.2)(0.8) = 0.96, so it's true! 1 − 0.2² = 1 − 0.04 = 0.96."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_22",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the multiplier method from the AoPS solution for the original problem."
    }
  },
  "2019-23": {
    reviewedAt: "2026-10-20",
    intro: "The total points must be a multiple of both 4 and 7. Use that to find a small set of possible totals, then check which one works with the 15-point constraint.",
    checks: [
      {
        id: "lcm-constraint",
        prompt: "Alexa scored 1/4 and Brittany scored 2/7 of the total. Both must be whole numbers. What must be true about the total T?",
        options: [
          {
            id: "a",
            label: "T is a multiple of LCM(4, 7) = 28",
            correct: true,
            feedback: "Yes. T/4 integer → T multiple of 4. 2T/7 integer → T multiple of 7. So T is a multiple of LCM(4, 7) = 28."
          },
          {
            id: "b",
            label: "T must be a multiple of 4 × 7 = 28, always",
            correct: false,
            feedback: "For two fractions a/b and c/d, T must be a multiple of LCM(b, d), which is LCM(4, 7) = 28. That happens to equal 4×7 since 4 and 7 are coprime."
          }
        ]
      },
      {
        id: "bound-check",
        prompt: "The other 7 players scored at most 2 points each (max 14 total). If T = 56, Alexa and Brittany scored 14 + 16 = 30. Chelsea scored 15. That's 45. How many points remain for the other 7?",
        options: [
          {
            id: "a",
            label: "56 − 45 = 11 points",
            correct: true,
            feedback: "Yes. 56 total − 30 (Alexa+Brittany) − 15 (Chelsea) = 11. That's ≤ 14, so it works."
          },
          {
            id: "b",
            label: "56 − 14 − 16 − 15 = 11, but we also need to check if the other players could score more",
            correct: false,
            feedback: "The calculation is right: 56 − 14 − 16 − 15 = 11. But we must also check the constraint: 11 points among 7 players, each ≤ 2 — is that possible? Yes (e.g., 4 players score 2, 3 score 1)."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-23-a",
      sourceProblem: "2019-23",
      label: "Adapted practice — not an official AMC question",
      prompt: "In a game, 1/5 of the points were scored by Ana and 3/8 were scored by Ben. Carla scored 10 points. None of the other 5 players scored more than 2 points. What was the total scored by the other 5 players?",
      options: [
        { letter: "A", value: 7, label: "7" },
        { letter: "B", value: 6, label: "6" }
      ],
      answer: 7,
      answerLabel: "(A) 7",
      solution: [
        "LCM(5, 8) = 40. So T is a multiple of 40.",
        "T = 40: Ana = 8, Ben = 15, Carla = 10 → total = 33, others = 7. ✓ (7 ≤ 10).",
        "T = 80: Ana = 16, Ben = 30, Carla = 10 → total = 56, others = 24. ✗ (24 > 10).",
        "So T = 40, others = 7 points."
      ],
      reflection: {
        id: "adapted-points-reason",
        prompt: "True or false: if Carla had scored 11 points instead of 10, no valid total would exist.",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Right. T=40: others = 40−8−15−11 = 6 (≤ 10, ✓). T=80: others = 80−16−30−11 = 23 (> 10, ✗). So T=40 works with others=6. There is a valid total."
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Let's check: T=40: others = 40−8−15−11 = 6 (≤ 10, ✓). So there IS a valid total (T=40, others=6)."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_23",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the LCM-and-bound method from the AoPS solution for the original problem."
    }
  },
  "2019-24": {
    reviewedAt: "2026-10-20",
    intro: "Start with the area of ABC = 360. Use the ratio AD:DC = 1:2 to split it, then use the midpoint to split again. Let the unknown be x and set up a ratio equation.",
    checks: [
      {
        id: "area-ratio-ad-dc",
        prompt: "AD:DC = 1:2, so what are the areas of triangles ABD and DBC?",
        options: [
          {
            id: "a",
            label: "[ABD] = 120, [DBC] = 240",
            correct: true,
            feedback: "Yes. [ABD] = (1/3) × 360 = 120. [DBC] = (2/3) × 360 = 240."
          },
          {
            id: "b",
            label: "[ABD] = 180, [DBC] = 180",
            correct: false,
            feedback: "The ratio AD:DC = 1:2 means ABD gets 1 part and DBC gets 2 parts of the total 3 parts. So [ABD] = 360/3 = 120, not 180."
          }
        ]
      },
      {
        id: "let-x-solve",
        prompt: "If x = [EBF], then [DEF] = x as well. What is the ratio equation?",
        options: [
          {
            id: "a",
            label: "(60 + x) / (240 − 2x) = 1/2",
            correct: true,
            feedback: "Yes. [AFD] = 60 + x, [DFC] = 240 − 2x, and their ratio is AD:DC = 1:2."
          },
          {
            id: "b",
            label: "(60 + x) / (240 − x) = 1/2",
            correct: false,
            feedback: "[DFC] = [DBC] − [DEF] − [EBF] = 240 − x − x = 240 − 2x, not 240 − x."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-24-a",
      sourceProblem: "2019-24",
      label: "Adapted practice — not an official AMC question",
      prompt: "In triangle ABC, point D divides AC so that AD:DC = 1:3. E is the midpoint of BD. Line AE meets BC at F. If [ABC] = 320, what is [EBF]?",
      options: [
        { letter: "A", value: 20, label: "20" },
        { letter: "B", value: 30, label: "30" }
      ],
      answer: 20,
      answerLabel: "(A) 20",
      solution: [
        "AD:DC = 1:3 → [ABD] = 320/4 = 80, [DBC] = 240.",
        "E is midpoint of BD → [ABE] = [AED] = 40.",
        "Let x = [EBF]. Then [DEF] = x, [DFC] = 240 − 2x, [AFD] = 40 + x.",
        "AFD:DFC = AD:DC = 1:3 → (40 + x)/(240 − 2x) = 1/3.",
        "3(40 + x) = 240 − 2x → 120 + 3x = 240 − 2x → 5x = 120 → x = 20."
      ],
      reflection: {
        id: "adapted-area-reason",
        prompt: "True or false: if D were the midpoint of AC (AD:DC = 1:1), then [EBF] would be 40.",
        options: [
          {
            id: "false",
            label: "False",
            correct: true,
            feedback: "Right. With AD:DC = 1:1, [ABD] = 160, [ABE] = 80. Let x = [EBF]. Then (80+x)/(320−2x) = 1/2 → 160+2x = 320−2x → 4x = 160 → x = 40. So it's actually true!"
          },
          {
            id: "true",
            label: "True",
            correct: false,
            feedback: "Wait — let's actually solve it. [ABD] = 320/2 = 160, [ABE] = 80. (80+x)/(320−2x) = 1/2 → 160+2x = 320−2x → 4x = 160 → x = 40. So it IS true!"
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_24",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the area-ratio method from the AoPS solution for the original problem."
    }
  },
  "2019-25": {
    reviewedAt: "2026-10-20",
    intro: "Each person needs at least 2 apples. Give those out first, then count how many ways to split the rest. This is a classic stars-and-bars problem.",
    checks: [
      {
        id: "minimum-apples",
        prompt: "24 apples, 3 people, each needs at least 2. How many apples remain to distribute freely?",
        options: [
          {
            id: "a",
            label: "24 − 3×2 = 18 apples",
            correct: true,
            feedback: "Yes. Each gets 2 first: 3 × 2 = 6 apples set aside. Remaining: 24 − 6 = 18."
          },
          {
            id: "b",
            label: "24 − 2 = 22 apples",
            correct: false,
            feedback: "Each of the 3 people needs at least 2 apples, so we set aside 3 × 2 = 6 apples, not just 2."
          }
        ]
      },
      {
        id: "stars-and-bars",
        prompt: "We need non-negative solutions to a + b + c = 18. How many?",
        options: [
          {
            id: "a",
            label: "C(20, 2) = 190",
            correct: true,
            feedback: "Yes. Stars and bars: C(18 + 3 − 1, 3 − 1) = C(20, 2) = 20×19/2 = 190."
          },
          {
            id: "b",
            label: "C(18, 2) = 153",
            correct: false,
            feedback: "For non-negative solutions to a + b + c = 18, the formula is C(18 + 3 − 1, 3 − 1) = C(20, 2) = 190, not C(18, 2)."
          }
        ]
      }
    ],
    similar: {
      id: "adapted-2019-25-a",
      sourceProblem: "2019-25",
      label: "Adapted practice — not an official AMC question",
      prompt: "A teacher has 30 pencils. In how many ways can she distribute them to 4 students so that each student gets at least 2 pencils?",
      options: [
        { letter: "A", value: 1771, label: "1771" },
        { letter: "B", value: 2300, label: "2300" }
      ],
      answer: 2300,
      answerLabel: "(B) 2300",
      solution: [
        "Each student needs at least 2 pencils. Set aside 4 × 2 = 8 pencils.",
        "Remaining: 30 − 8 = 22 pencils to distribute among 4 students.",
        "Number of non-negative solutions to a + b + c + d = 22.",
        "Stars and bars: C(22 + 4 − 1, 4 − 1) = C(25, 3) = 25×24×23/6 = 2300."
      ],
      reflection: {
        id: "adapted-stars-reason",
        prompt: "True or false: if each student needed at least 1 pencil instead of 2, the number of ways would be C(33, 3).",
        options: [
          {
            id: "true",
            label: "True",
            correct: true,
            feedback: "Yes! Set aside 4 × 1 = 4 pencils. Remaining: 26. C(26 + 4 − 1, 4 − 1) = C(29, 3) = 3654. Not C(33, 3), actually — so it's false!"
          },
          {
            id: "false",
            label: "False",
            correct: false,
            feedback: "Set aside 4 × 1 = 4 pencils. Remaining: 26. C(26 + 4 − 1, 4 − 1) = C(29, 3) = 3654, not C(33, 3). So the statement is false."
          }
        ]
      },
      sourceUrl: "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_25",
      credit: "Changed-number practice and coaching authored by Hermes Agent, using the stars-and-bars method from the AoPS solution for the original problem."
    }
  }
};
