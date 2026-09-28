// Reviewed original AMC problems. Restated wording is labeled in the interface.
export const problems = {
  "2026-1": {
    "id": "2026-1",
    "year": 2026,
    "number": 1,
    "suggestedPace": "1 min",
    "title": "Grouping & patterns",
    "topic": "Arithmetic",
    "prompt": "What is the value of the following expression?",
    "wording": "original",
    "expression": "1 + 2 − 3 + 4 + 5 − 6 + 7 + 8 − 9 + 10 + 11 − 12",
    "options": [
      {
        "letter": "A",
        "value": 18,
        "label": "18"
      },
      {
        "letter": "B",
        "value": 21,
        "label": "21"
      },
      {
        "letter": "C",
        "value": 24,
        "label": "24"
      },
      {
        "letter": "D",
        "value": 27,
        "label": "27"
      },
      {
        "letter": "E",
        "value": 30,
        "label": "30"
      }
    ],
    "answer": 18,
    "answerLabel": "(A) 18",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_1",
    "hints": [
      "Look at the signs. What pattern repeats every three terms?",
      "Try grouping the expression into blocks of three. Keep each number’s sign attached to it.",
      "The first block is 1 + 2 − 3 = 0. Now simplify the next three blocks."
    ],
    "method": "Group three terms at a time.",
    "score": 9,
    "ratingReason": "Clear and easy to check. Four small calculations make the repeating structure visible.",
    "solution": [
      "Keep every sign attached to its number and split the expression into four blocks.",
      "1 + 2 − 3 = 0; 4 + 5 − 6 = 3.",
      "7 + 8 − 9 = 6; 10 + 11 − 12 = 9.",
      "Add the four block totals: 0 + 3 + 6 + 9 = 18."
    ],
    "credit": "AI-authored explanation of the grouping method in AoPS Solution 4.",
    "tipTitle": "Keep the sign with the number.",
    "tip": "Explain why grouping in threes preserves the value. A useful shortcut should make your reasoning easier to check.",
    "tipCredit": "Additional coaching by GPT 6 Astra Ultra.",
    "commonError": "Moving a negative term and accidentally changing its sign.",
    "reflection": "Why does regrouping the terms leave the answer unchanged?",
    "alternative": "You can add all positive terms and then subtract 3 + 6 + 9 + 12. Grouping in threes keeps the arithmetic smaller.",
    "reviewedAt": "2026-09-10"
  },
  "2026-2": {
    "id": "2026-2",
    "year": 2026,
    "number": 2,
    "suggestedPace": "1 min 30 sec",
    "title": "Count by value",
    "topic": "Arithmetic · organized counting",
    "prompt": "Find the total of this array. Its outside border contains twenty 1s, and its center contains three 3s.",
    "wording": "restated",
    "matrix": [
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        2,
        2,
        2,
        2,
        2,
        1
      ],
      [
        1,
        2,
        3,
        3,
        3,
        2,
        1
      ],
      [
        1,
        2,
        2,
        2,
        2,
        2,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    ],
    "options": [
      {
        "letter": "A",
        "value": 49,
        "label": "49"
      },
      {
        "letter": "B",
        "value": 51,
        "label": "51"
      },
      {
        "letter": "C",
        "value": 53,
        "label": "53"
      },
      {
        "letter": "D",
        "value": 55,
        "label": "55"
      },
      {
        "letter": "E",
        "value": 57,
        "label": "57"
      }
    ],
    "answer": 53,
    "answerLabel": "(C) 53",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_2",
    "hints": [
      "How many positions are in the whole array?",
      "Remove the positions occupied by 1s and 3s. What value fills the remaining positions?",
      "Multiply each value by its count, then add the three contributions."
    ],
    "method": "Count each value",
    "score": 9,
    "ratingReason": "Clear, reusable, and easy to check; it avoids adding 35 entries individually.",
    "solution": [
      "There are 5 × 7 = 35 positions.",
      "The number of 2s is 35 − 20 − 3 = 12.",
      "Total: 20 × 1 + 12 × 2 + 3 × 3 = 53. Choose C."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 3 and 6.",
    "tipTitle": "See the same sum in layers.",
    "tip": "Think in layers: give every position one point, the inner rectangle another point, and the center another. Then 35 + 15 + 3 = 53.",
    "tipCredit": "Authored explanation of the layer idea in AoPS Solution 5.",
    "commonError": "Counting positions without weighting their values, or counting border corners twice.",
    "reflection": "How does 35 + 15 + 3 count every entry correctly?",
    "alternative": "A row-by-row check gives 7 + 12 + 15 + 12 + 7 = 53. Counting by value uses the counts given in the problem and needs fewer additions.",
    "reviewedAt": "2026-09-11"
  },
  "2026-3": {
    "id": "2026-3",
    "year": 2026,
    "number": 3,
    "suggestedPace": "2 min",
    "title": "Follow the boundary",
    "topic": "Geometry · perimeter and area",
    "prompt": "Haruki reshapes a 24 cm wire into one shape at a time. Which listed shapes are possible?",
    "wording": "restated",
    "facts": [
      "Regular hexagon: each side is 5 cm.",
      "Square: area is 36 cm².",
      "Right triangle: perpendicular sides are 6 cm and 8 cm."
    ],
    "options": [
      {
        "letter": "A",
        "value": "A",
        "label": "Triangle only"
      },
      {
        "letter": "B",
        "value": "B",
        "label": "Hexagon and square only"
      },
      {
        "letter": "C",
        "value": "C",
        "label": "Hexagon and triangle only"
      },
      {
        "letter": "D",
        "value": "D",
        "label": "Square and triangle only"
      },
      {
        "letter": "E",
        "value": "E",
        "label": "Hexagon, triangle, and square"
      }
    ],
    "answer": "D",
    "answerLabel": "(D) Square and triangle only",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_3",
    "hints": [
      "The wire follows each shape's boundary. Which measurement describes that boundary?",
      "Find the hexagon's perimeter. For the square, find a side length from its area first.",
      "For the triangle, calculate the missing side using 6² + 8². Then compare each perimeter with 24."
    ],
    "method": "Compare perimeters",
    "score": 9,
    "ratingReason": "Explains every shape and reinforces the difference between area and perimeter.",
    "solution": [
      "Hexagon: 6 × 5 = 30 cm, so the wire is too short.",
      "Square: side = √36 = 6 cm; perimeter = 4 × 6 = 24 cm.",
      "Triangle: missing side = √(6² + 8²) = 10 cm; perimeter = 6 + 8 + 10 = 24 cm.",
      "The square and triangle both fit. Choose D."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1, with corrected comparison wording.",
    "tipTitle": "Let the answer choices do some work.",
    "tip": "Use the choices strategically: ruling out the hexagon leaves A or D. Showing that the square works selects D without calculating the triangle.",
    "tipCredit": "Authored explanation of the elimination strategy in AoPS Solution 2.",
    "commonError": "Treating 36 cm² as a length, or forgetting the triangle's third side.",
    "reflection": "Why must you find the square’s side before its perimeter?",
    "alternative": "For the quickest test approach, eliminate every choice containing the hexagon. Once you verify the square, only D remains. Checking the triangle explains why that choice is consistent.",
    "reviewedAt": "2026-09-11"
  },
  "2026-4": {
    "id": "2026-4",
    "year": 2026,
    "number": 4,
    "suggestedPace": "1 min 30 sec",
    "title": "Follow the changing whole",
    "topic": "Arithmetic · successive percent changes",
    "prompt": "In July, Brynn lost 20% of her savings. In August, her savings grew by 50%. Express her final savings as a percentage of the amount she started with.",
    "wording": "restated",
    "options": [
      {
        "letter": "A",
        "value": 80,
        "label": "80"
      },
      {
        "letter": "B",
        "value": 90,
        "label": "90"
      },
      {
        "letter": "C",
        "value": 100,
        "label": "100"
      },
      {
        "letter": "D",
        "value": 110,
        "label": "110"
      },
      {
        "letter": "E",
        "value": 120,
        "label": "120"
      }
    ],
    "answer": 120,
    "answerLabel": "(E) 120",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_4",
    "checkedSourceUrl": "https://live.poshenloh.com/past-contests/amc8/2026/problem/4",
    "checkedSourceName": "LIVE by Po-Shen Loh",
    "hints": [
      "Ask what amount each percentage is based on. The savings change between the two months.",
      "Use 100 units as a convenient starting amount. A 20% decrease leaves 80 units after July.",
      "August adds half of the 80 units now present. Add that increase to 80, then compare the final amount with the original 100."
    ],
    "method": "Use 100 to track each change",
    "score": 9,
    "ratingReason": "A concrete starting amount makes the changing base visible and separates the final percentage from the percentage gained.",
    "solution": [
      "The question asks for a ratio, so choose 100 units for the original savings. Any positive starting amount gives the same final percentage.",
      "July removes 20% of 100, which is 20 units. The savings become 100 − 20 = 80 units.",
      "August's increase is 50% of the current 80 units: half of 80 is 40. The new savings are 80 + 40 = 120 units.",
      "120 units compared with the original 100 units is 120%. Choose E, 120.",
      "The extra savings are 20% of the original amount. The question asks for the entire final savings as a percent of the original, so the answer is 120, not 20."
    ],
    "credit": "Authored explanation of the choose-100 method also shown in LIVE by Po-Shen Loh’s written solution. The original numerical information and choices were checked there.",
    "tipTitle": "Name the whole before taking a percent.",
    "tip": "Label the base at each step: July uses the original savings; August uses the savings after July. A percent describes a part of its base, so update the base before calculating the next change.",
    "tipCredit": "Additional coaching by GPT 6 Astra Ultra.",
    "commonError": "Adding or subtracting the two percentage rates as though both changes used the original savings.",
    "reflection": "What amount is the whole for the second percentage change?",
    "alternative": "Let the original savings be x. A 20% decrease keeps 0.8x. Increasing that amount by 50% multiplies it by 1.5, so the final savings are 0.8 × 1.5 × x = 1.2x, or 120% of the original. Multiplying the factors also checks the choose-100 calculation.",
    "reviewedAt": "2026-09-27"
  },
  "2026-5": {
    "id": "2026-5",
    "year": 2026,
    "number": 5,
    "suggestedPace": "1 min 30 sec",
    "title": "Separate driving time from total time",
    "topic": "Rates · distance, driving time, and unit conversion",
    "prompt": "Casey travels 100 miles on a road trip and stops only once, for lunch. From start to finish, the trip lasts 3 hours. Her average speed during the driving portions is 40 miles per hour. How many minutes does she spend at lunch?",
    "wording": "restated",
    "options": [
      {
        "letter": "A",
        "value": 15,
        "label": "15"
      },
      {
        "letter": "B",
        "value": 30,
        "label": "30"
      },
      {
        "letter": "C",
        "value": 40,
        "label": "40"
      },
      {
        "letter": "D",
        "value": 45,
        "label": "45"
      },
      {
        "letter": "E",
        "value": 60,
        "label": "60"
      }
    ],
    "answer": 30,
    "answerLabel": "(B) 30 minutes",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_5",
    "checkedSourceUrl": "https://live.poshenloh.com/past-contests/amc8/2026/problem/5",
    "checkedSourceName": "LIVE by Po-Shen Loh",
    "hints": [
      "The 3 hours include both driving and lunch. The given speed describes only the time spent driving.",
      "Driving time equals distance divided by average driving speed. Use 100 ÷ 40 to find that time in hours.",
      "Subtract the driving time from 3 hours. Then multiply the remaining hours by 60 to express the lunch break in minutes."
    ],
    "method": "Find the driving time, then the time left over",
    "score": 9,
    "ratingReason": "Separating driving from the full trip makes the meaning of the rate clear. Keeping units beside each step helps prevent decimal-hour mistakes.",
    "solution": [
      "The full 3 hours consist of driving time plus the lunch break. Since lunch is the only stop, any time left after driving belongs to lunch.",
      "Find the driving time using the average speed while moving: 100 miles ÷ 40 miles per hour = 2.5 hours.",
      "Subtract from the full trip: 3 − 2.5 = 0.5 hour for lunch.",
      "One hour has 60 minutes, so 0.5 × 60 = 30 minutes. Choose B.",
      "Check: 2.5 hours of driving cover 100 miles at an average of 40 miles per hour. Adding half an hour for lunch gives the stated 3-hour trip."
    ],
    "credit": "Authored explanation of the driving-time subtraction method also shown in LIVE by Po-Shen Loh’s written solution. The original numbers, choices, and answer were checked there.",
    "tipTitle": "Keep a label beside every time.",
    "tip": "Write total time = driving time + stopped time, and label the units before calculating. A decimal hour is a fraction of 60 minutes: 2.5 hours means 2 hours 30 minutes, not 2 hours 50 minutes.",
    "tipCredit": "Additional coaching by GPT 6 Astra Ultra.",
    "commonError": "Using 40 miles per hour for all 3 hours, even though lunch is included, or treating 0.5 hour as 50 minutes.",
    "reflection": "Which time does the given average speed describe, and which time does the question ask for?",
    "alternative": "Use a distance-equivalent check. At the given average driving rate, 3 hours of driving would cover 3 × 40 = 120 miles. The actual distance is 20 miles less. Covering that 20 miles at 40 miles per hour would take half an hour, so the lunch break accounts for 30 minutes. This uses the average rate; the car need not travel at exactly 40 miles per hour at every instant.",
    "reviewedAt": "2026-09-27"
  }
};
