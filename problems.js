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
  },
  "2019-1": {
    "id": "2019-1",
    "year": 2019,
    "number": 1,
    "suggestedPace": "1 min",
    "title": "Max out the budget",
    "topic": "Arithmetic · budgeting",
    "prompt": "Ike and Mike go into a sandwich shop with a total of $30.00 to spend. Sandwiches cost $4.50 each and soft drinks cost $1.00 each. Ike and Mike plan to buy as many sandwiches as they can, and use any remaining money to buy soft drinks. Counting both sandwiches and soft drinks, how many items will they buy?",
    "wording": "original",
    "options": [
      {
        "letter": "A",
        "value": 6,
        "label": "6"
      },
      {
        "letter": "B",
        "value": 7,
        "label": "7"
      },
      {
        "letter": "C",
        "value": 8,
        "label": "8"
      },
      {
        "letter": "D",
        "value": 9,
        "label": "9"
      },
      {
        "letter": "E",
        "value": 10,
        "label": "10"
      }
    ],
    "answer": 9,
    "answerLabel": "(D) 9",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_1",
    "hints": [
      "Find the greatest number of whole sandwiches that fits inside the $30 budget.",
      "Six sandwiches cost $27.00. How much money remains, and how many soft drinks can it buy?",
      "Add the sandwich count and the drink count to find the total number of items."
    ],
    "method": "Buy as many sandwiches as the budget allows, then spend the remainder on drinks.",
    "score": 9,
    "ratingReason": "A clear two-step reasoning path: max out the larger item first, then use the remainder on the smaller item.",
    "solution": [
      "Each sandwich costs $4.50. Try 6 sandwiches: 6 × $4.50 = $27.00, which stays within $30.",
      "Seven sandwiches would cost 7 × $4.50 = $31.50, which exceeds the budget.",
      "Remaining money after 6 sandwiches: $30.00 − $27.00 = $3.00.",
      "Each soft drink costs $1.00, so $3.00 buys 3 soft drinks.",
      "Total items: 6 sandwiches + 3 soft drinks = 9. Choose D."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Max out the most expensive item first.",
    "tip": "When you need both items and can choose how many of each to buy, start by buying as many of the more expensive item as the budget allows. The leftover money then stretches further on the cheaper item.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Buying 7 sandwiches without checking that 7 × $4.50 = $31.50 exceeds the budget, or forgetting to add the two item counts together.",
    "reflection": "Why can't we solve this by dividing $30.00 by $4.50 and rounding the result down to the nearest whole number?",
    "alternative": "Divide $30.00 by $4.50 to get about 6.67, so at most 6 whole sandwiches. Then $30.00 − 6 × $4.50 = $3.00, which buys 3 drinks. The total is 6 + 3 = 9. The division shortcut gives only the sandwich count; you must still handle the remainder separately.",
    "reviewedAt": "2026-10-19"
  },
  "2019-2": {
    "id": "2019-2",
    "year": 2019,
    "number": 2,
    "suggestedPace": "1 min 30 sec",
    "title": "Rectangles side by side",
    "topic": "Geometry · area from a diagram",
    "prompt": "Three identical rectangles are put together to form rectangle ABCD. Given that the length of the shorter side of each smaller rectangle is 5 feet, what is the area in square feet of rectangle ABCD?",
    "wording": "original",
    "options": [
      {
        "letter": "A",
        "value": 45,
        "label": "45"
      },
      {
        "letter": "B",
        "value": 75,
        "label": "75"
      },
      {
        "letter": "C",
        "value": 100,
        "label": "100"
      },
      {
        "letter": "D",
        "value": 125,
        "label": "125"
      },
      {
        "letter": "E",
        "value": 150,
        "label": "150"
      }
    ],
    "answer": 150,
    "answerLabel": "(E) 150",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_2",
    "hints": [
      "Look at the diagram. Two rectangles lie flat on top of each other — what does that tell you about the longer side of each small rectangle?",
      "The longer side of each small rectangle equals two short sides: 2 × 5 = 10 feet. Now find the dimensions of the big rectangle.",
      "The big rectangle's width is long side + short side = 10 + 5 = 15. Its height equals the long side = 10. Multiply to find the area."
    ],
    "method": "Find each dimension of the big rectangle from the small rectangles.",
    "score": 9,
    "ratingReason": "A clear visual reasoning path: the diagram tells you the relationship between the short and long sides without needing formulas.",
    "solution": [
      "Each small rectangle has short side = 5 feet.",
      "Two rectangles stacked vertically match the length of one rectangle horizontally, so the long side of each small rectangle = 2 × 5 = 10 feet.",
      "The big rectangle's height equals the long side of a small rectangle: 10 feet.",
      "The big rectangle's width equals one long side plus one short side: 10 + 5 = 15 feet.",
      "Area = 15 × 10 = 150 square feet. Choose E."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–5.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Let the diagram do the work.",
    "tip": "When a problem includes a diagram, label every length you can find. The arrangement of the rectangles tells you the relationship between their sides.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Using 5 as the long side too, or forgetting that the big rectangle's width is the sum of a long side and a short side.",
    "reflection": "Why is the big rectangle's height exactly 10 feet and not 15?",
    "alternative": "Find the area of one small rectangle first: short side 5, long side 10, area = 50. Three identical rectangles make 3 × 50 = 150. This works because the rectangles fit together without gaps or overlaps.",
    "reviewedAt": "2026-10-19"
  },
  "2019-3": {
    "id": "2019-3",
    "year": 2019,
    "number": 3,
    "suggestedPace": "2 min",
    "title": "Order fractions by a common difference",
    "topic": "Number theory · comparing fractions",
    "prompt": "Which of the following is the correct order of the fractions 15/11, 19/15, and 17/13, from least to greatest?",
    "wording": "original",
    "options": [
      {
        "letter": "A",
        "value": "A",
        "label": "15/11 < 17/13 < 19/15"
      },
      {
        "letter": "B",
        "value": "B",
        "label": "15/11 < 19/15 < 17/13"
      },
      {
        "letter": "C",
        "value": "C",
        "label": "17/13 < 19/15 < 15/11"
      },
      {
        "letter": "D",
        "value": "D",
        "label": "19/15 < 15/11 < 17/13"
      },
      {
        "letter": "E",
        "value": "E",
        "label": "19/15 < 17/13 < 15/11"
      }
    ],
    "answer": "E",
    "answerLabel": "(E) 19/15 < 17/13 < 15/11",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_3",
    "hints": [
      "Each fraction is greater than 1. Try subtracting 1 from each — what do you notice about the numerators?",
      "Subtracting 1 gives 4/11, 4/15, and 4/13. When numerators are equal, a larger denominator means a smaller fraction.",
      "Order the remainders: 4/15 < 4/13 < 4/11. Add back the 1 to each to get the original order."
    ],
    "method": "Subtract 1 from each fraction, then compare the remainders.",
    "score": 9,
    "ratingReason": "A clean reasoning path: subtracting 1 reveals equal numerators, making comparison straightforward.",
    "solution": [
      "Each fraction is greater than 1. Write each as 1 + (remainder).",
      "15/11 = 1 + 4/11, 19/15 = 1 + 4/15, 17/13 = 1 + 4/13.",
      "The remainders 4/11, 4/15, and 4/13 all have numerator 4. When numerators are equal, the fraction with the larger denominator is smaller.",
      "So 4/15 < 4/13 < 4/11. Adding back 1 to each preserves the order.",
      "Thus 19/15 < 17/13 < 15/11. Choose E."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 5 (subtract-1 method).",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Look for a common pattern before calculating.",
    "tip": "When all fractions are greater than 1 and have the same numerator difference from the denominator, subtract 1 and compare the remainders. No common denominator needed.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Assuming the fraction with the largest numerator and denominator is largest, or comparing numerators without considering denominators.",
    "reflection": "Why can we add the same number (1) to each remainder without changing the order?",
    "alternative": "Use a common denominator of 2145: 15/11 = 2925/2145, 19/15 = 2717/2145, 17/13 = 2805/2145. Since 2717 < 2805 < 2925, the order is 19/15 < 17/13 < 15/11. The subtract-1 method is faster because the numbers stay smaller.",
    "reviewedAt": "2026-10-19"
  },
  "2019-4": {
    "id": "2019-4",
    "year": 2019,
    "number": 4,
    "suggestedPace": "2 min",
    "title": "Area of a rhombus using diagonals",
    "topic": "Geometry · rhombus area",
    "prompt": "Quadrilateral ABCD is a rhombus with perimeter 52 meters. The length of diagonal AC is 24 meters. What is the area in square meters of rhombus ABCD?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "60" },
      { "letter": "B", "value": "B", "label": "90" },
      { "letter": "C", "value": "C", "label": "105" },
      { "letter": "D", "value": "D", "label": "120" },
      { "letter": "E", "value": "E", "label": "144" }
    ],
    "answer": "D",
    "answerLabel": "(D) 120",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_4",
    "hints": [
      "All four sides of a rhombus are equal. What is the length of each side?",
      "The diagonals of a rhombus bisect each other at right angles. Half of AC is 12. Together with the side, this forms a right triangle.",
      "Side = 13, one leg = 12 → the other leg is 5 (5-12-13 triple). So BD = 10. Area = (d1 × d2)/2."
    ],
    "method": "Use the perpendicular-bisecting property of rhombus diagonals and the Pythagorean theorem.",
    "score": 9,
    "ratingReason": "Classic rhombus problem: side from perimeter, half-diagonal from given, Pythagorean triple completes the second diagonal.",
    "solution": [
      "Perimeter = 52, so each side = 52/4 = 13.",
      "Diagonals of a rhombus are perpendicular bisectors. Since AC = 24, half of AC = AE = EC = 12.",
      "Triangle AEB is a right triangle with hypotenuse AB = 13 and leg AE = 12.",
      "By the Pythagorean theorem: BE² = 13² − 12² = 169 − 144 = 25, so BE = 5.",
      "Thus the full diagonal BD = 2 × 5 = 10.",
      "Area of a rhombus = (d₁ × d₂)/2 = (24 × 10)/2 = 120.",
      "Answer: D."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Know your rhombus properties.",
    "tip": "Diagonals of a rhombus are perpendicular bisectors. When you know one diagonal and the side, you get a right triangle — often a Pythagorean triple (3-4-5, 5-12-13, 8-15-17).",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Treating a rhombus like a square and trying side². Or forgetting to halve the diagonal before using the Pythagorean theorem.",
    "reflection": "Why do the diagonals of a rhombus always bisect each other at right angles, but this is not true for a general parallelogram?",
    "alternative": "Each of the four right triangles has legs 12 and 5, so area = (12×5)/2 = 30 each. Four triangles: 4×30 = 120. Same answer, confirms the formula.",
    "reviewedAt": "2026-10-19"
  },
  "2019-5": {
    "id": "2019-5",
    "year": 2019,
    "number": 5,
    "suggestedPace": "1.5 min",
    "title": "Tortoise and Hare race graph",
    "topic": "Logic · graph interpretation",
    "prompt": "A tortoise challenges a hare to a race. The hare eagerly agrees and quickly runs ahead, leaving the slow-moving tortoise behind. Confident that he will win, the hare stops to take a nap. Meanwhile, the tortoise walks at a slow steady pace for the entire race. The hare awakes and runs to the finish line, only to find the tortoise already there. Which of the following graphs matches the description of the race, showing the distance d traveled by the two animals over time t from start to finish?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "Tortoise: straight steady line to finish. Hare: steep up, then flat (nap), then steep up — finishes BEFORE tortoise." },
      { "letter": "B", "value": "B", "label": "Tortoise: straight steady line to finish. Hare: steep up, then flat (nap), then steep up — finishes AFTER tortoise." },
      { "letter": "C", "value": "C", "label": "Tortoise: straight steady line to finish. Hare: steep up, then dips DOWN (goes backward), then steep up." },
      { "letter": "D", "value": "D", "label": "Tortoise: CURVED line (accelerating). Hare: steep up, flat, steep up — finishes first." },
      { "letter": "E", "value": "E", "label": "Tortoise: straight line finishing first. Hare: straight line (no nap), finishes second." }
    ],
    "answer": "B",
    "answerLabel": "(B) Tortoise steady line → finish first; Hare steep-flat-steep → finishes second",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_5",
    "hints": [
      "The tortoise walks at a constant speed the whole time. Which graphs show a straight, steady line for the tortoise?",
      "The hare takes a nap — during that time, its distance does not change. Which graphs show a flat horizontal segment for the hare?",
      "The tortoise reaches the finish first. In the correct graph, the tortoise's line should reach the top before the hare's line does."
    ],
    "method": "Eliminate graphs that contradict each fact: constant speed, nap (flat segment), and tortoise wins.",
    "score": 8,
    "ratingReason": "Pure logic: no calculation needed, just careful graph reading and process of elimination.",
    "solution": [
      "Tortoise walks at constant speed → its graph is a straight line from start to finish. This rules out D (tortoise curve).",
      "Hare naps → its distance stays the same (flat horizontal segment). This rules out C (distance decreases) and E (no flat segment).",
      "Tortoise wins → the tortoise reaches the finish before the hare. In A, the hare finishes first, so rule out A.",
      "Only B remains: tortoise steady line wins; hare goes fast, naps (flat), goes fast again, but finishes second."
    ],
    "credit": "AI-authored explanation based on AoPS Solution.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Read graphs one feature at a time.",
    "tip": "Eliminate wrong choices by checking one fact at a time: constant speed (straight line), nap (flat segment), who wins (who reaches the top first).",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Mixing up which animal's line is which, or not noticing that the hare's nap means a flat (not downward) segment.",
    "reflection": "Why does a constant speed produce a straight line on a distance-time graph? What would a curved line mean?",
    "alternative": "You can also reason forward: tortoise line is a steady diagonal. Hare line is steep diagonal, then flat, then steep diagonal — but must end at a later time than the tortoise. Only B matches this shape.",
    "reviewedAt": "2026-10-19"
  },
  "2019-6": {
    "id": "2019-6",
    "year": 2019,
    "number": 6,
    "suggestedPace": "2 min",
    "title": "Lines of symmetry in a square grid",
    "topic": "Probability · symmetry",
    "prompt": "There are 81 grid points (uniformly spaced) in the square shown in the diagram below, including the points on the edges. Point P is in the center of the square. Given that point Q is randomly chosen among the other 80 points, what is the probability that the line PQ is a line of symmetry for the square?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "1/5" },
      { "letter": "B", "value": "B", "label": "1/4" },
      { "letter": "C", "value": "C", "label": "2/5" },
      { "letter": "D", "value": "D", "label": "9/20" },
      { "letter": "E", "value": "E", "label": "1/2" }
    ],
    "answer": "C",
    "answerLabel": "(C) 2/5",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_6",
    "hints": [
      "How many lines of symmetry does a square have? They all pass through the center P.",
      "Each line of symmetry passes through 9 grid points (including P). So each line has 8 other points besides P.",
      "4 lines × 8 points = 32 favorable. Total points = 80. Probability = 32/80 = 2/5."
    ],
    "method": "Count the grid points that lie on any of the 4 lines of symmetry through P.",
    "score": 8,
    "ratingReason": "Visual counting problem: combine geometry (lines of symmetry) with basic probability.",
    "solution": [
      "A square has 4 lines of symmetry: horizontal, vertical, and 2 diagonals. All pass through the center P.",
      "The grid is 9×9 = 81 points. P is at the center. Each line of symmetry contains 9 points (including P).",
      "On each line, there are 8 points besides P. With 4 lines, total favorable points = 4 × 8 = 32.",
      "Total points to choose from = 81 − 1 = 80.",
      "Probability = 32/80 = 2/5. Answer: C."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Draw the lines of symmetry first.",
    "tip": "A square has 4 lines of symmetry: horizontal, vertical, and both diagonals. Count grid points on each line (excluding the center).",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Counting only 2 lines of symmetry (the diagonals) and forgetting the horizontal and vertical lines.",
    "reflection": "Why are there 9 points on each line of symmetry in a 9×9 grid?",
    "alternative": "Divide the grid into 4 quadrants. Each quadrant has 5 points in a row, of which 2 are on symmetry lines. So 2/5 of points are favorable.",
    "reviewedAt": "2026-10-19"
  },
  "2019-7": {
    "id": "2019-7",
    "year": 2019,
    "number": 7,
    "suggestedPace": "2 min",
    "title": "Minimum test score for target average",
    "topic": "Algebra · averages",
    "prompt": "Shauna takes five tests, each worth a maximum of 100 points. Her scores on the first three tests are 76, 94, and 87. In order to average 81 for all five tests, what is the lowest score she could earn on one of the other two tests?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "48" },
      { "letter": "B", "value": "B", "label": "52" },
      { "letter": "C", "value": "C", "label": "66" },
      { "letter": "D", "value": "D", "label": "70" },
      { "letter": "E", "value": "E", "label": "74" }
    ],
    "answer": "A",
    "answerLabel": "(A) 48",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_7",
    "hints": [
      "To average 81 over 5 tests, what total score does she need?",
      "She already has 76 + 94 + 87 = 257. How many more points does she need across the last 2 tests?",
      "She needs 148 more points. To minimize one test, maximize the other at 100. So the lowest is 148 − 100 = 48."
    ],
    "method": "Find the total needed, subtract scores so far, then maximize one test to minimize the other.",
    "score": 8,
    "ratingReason": "Straightforward average problem with a minimize-maximize twist.",
    "solution": [
      "Target average 81 over 5 tests → total needed = 81 × 5 = 405.",
      "Scores so far: 76 + 94 + 87 = 257.",
      "Points remaining for last 2 tests: 405 − 257 = 148.",
      "To minimize one test score, maximize the other at 100 (maximum possible).",
      "Lowest possible score = 148 − 100 = 48.",
      "Answer: A."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–5.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Work with totals, not averages.",
    "tip": "Multiply the target average by the number of tests to get the total needed. Then subtract what you already have.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting to maximize the other test to 100 before subtracting, or thinking both tests must be equal.",
    "reflection": "What would the answer be if the tests were each worth 120 points maximum instead of 100?",
    "alternative": "Compare each score to the average: 76 is −5, 94 is +13, 87 is +6. Net = +14. To balance to 0, the last two must total −14. With one at +19 (100), the other must be −33. 81 − 33 = 48.",
    "reviewedAt": "2026-10-19"
  }
};
