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
  },
  "2019-8": {
    "id": "2019-8",
    "year": 2019,
    "number": 8,
    "suggestedPace": "2 min",
    "title": "Consecutive percentage deductions",
    "topic": "Algebra · percentages",
    "prompt": "Gilda has a bag of marbles. She gives 20% of them to her friend Pedro. Then Gilda gives 10% of what is left to another friend, Ebony. Finally, Gilda gives 25% of what is now left in the bag to her brother Jimmy. What percentage of her original bag of marbles does Gilda have left for herself?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "20" },
      { "letter": "B", "value": "B", "label": "33 1/3" },
      { "letter": "C", "value": "C", "label": "38" },
      { "letter": "D", "value": "D", "label": "45" },
      { "letter": "E", "value": "E", "label": "54" }
    ],
    "answer": "E",
    "answerLabel": "(E) 54",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_8",
    "hints": [
      "After giving 20% away, what percentage does she have left? Multiply the remaining percentages step by step.",
      "After giving 20% away, she has 80% left. Then she gives 10% of that, so she keeps 90% of the 80%.",
      "Keep going: after Ebony, she has 0.8 × 0.9 = 0.72 = 72%. Then she gives 25% (keeps 75%) of that: 0.75 × 0.72 = 0.54 = 54%."
    ],
    "method": "Multiply the remaining percentages after each step.",
    "score": 8,
    "ratingReason": "Clear step-by-step percentage reduction — a common AMC pattern.",
    "solution": [
      "Start with 100% of the marbles.",
      "After giving 20% to Pedro: remaining = 80%.",
      "She gives 10% of what's left to Ebony → keeps 90% of 80% = 0.9 × 0.8 = 0.72 = 72%.",
      "She gives 25% of what's left to Jimmy → keeps 75% of 72% = 0.75 × 0.72 = 0.54 = 54%.",
      "Gilda has 54% left for herself. Answer: E."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Multiply the leftovers, not the giveaways.",
    "tip": "Convert each 'give X%' to 'keep (100−X)%', then multiply. 0.8 × 0.9 × 0.75 = 0.54.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Adding or subtracting percentages directly (20+10+25=55) instead of multiplying stepwise.",
    "reflection": "Why can't we just add 20% + 10% + 25% = 55% and say she gave away 55%?",
    "alternative": "Assume 100 marbles. Give 20 → 80 left. Give 10% of 80 = 8 → 72 left. Give 25% of 72 = 18 → 54 left. So 54% remains.",
    "reviewedAt": "2026-10-19"
  },
  "2019-9": {
    "id": "2019-9",
    "year": 2019,
    "number": 9,
    "suggestedPace": "2 min",
    "title": "Volume ratio of two cylinders",
    "topic": "Geometry · cylinder volume",
    "prompt": "Alex and Felicia each have cats as pets. Alex buys cat food in cylindrical cans that are 6 cm in diameter and 12 cm high. Felicia buys cat food in cylindrical cans that are 12 cm in diameter and 6 cm high. What is the ratio of the volume of one of Alex's cans to the volume of one of Felicia's cans?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "1:4" },
      { "letter": "B", "value": "B", "label": "1:2" },
      { "letter": "C", "value": "C", "label": "1:1" },
      { "letter": "D", "value": "D", "label": "2:1" },
      { "letter": "E", "value": "E", "label": "4:1" }
    ],
    "answer": "B",
    "answerLabel": "(B) 1:2",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_9",
    "hints": [
      "Volume of a cylinder = πr²h. What are the radii?",
      "Alex: r = 3 cm, h = 12 cm → volume = π×9×12 = 108π. Felicia: r = 6 cm, h = 6 cm → volume = π×36×6 = 216π.",
      "Ratio = 108π : 216π = 108 : 216 = 1 : 2."
    ],
    "method": "Use the cylinder volume formula and compare.",
    "score": 8,
    "ratingReason": "A straightforward volume comparison — good practice with the cylinder formula.",
    "solution": [
      "Volume of a cylinder = πr²h, where r is the radius (half the diameter).",
      "Alex: diameter 6 cm → r = 3 cm, h = 12 cm. Volume = π × 3² × 12 = π × 9 × 12 = 108π.",
      "Felicia: diameter 12 cm → r = 6 cm, h = 6 cm. Volume = π × 6² × 6 = π × 36 × 6 = 216π.",
      "Ratio Alex : Felicia = 108π : 216π = 1 : 2.",
      "Answer: B."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Square the radius, not the diameter.",
    "tip": "Remember r = d/2. Doubling the diameter quadruples the area (r² effect), but halving the height halves it. The net is 2× larger for Felicia.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Using the diameter instead of the radius in the formula, or forgetting to square the radius.",
    "reflection": "If both cans had the same height, what would the ratio be? What if both had the same diameter?",
    "alternative": "Notice Alex's radius is half of Felicia's but height is double. Volume depends on r²h: (1/2)² × 2 = 1/4 × 2 = 1/2. So Alex's is half of Felicia's.",
    "reviewedAt": "2026-10-19"
  },
  "2019-10": {
    "id": "2019-10",
    "year": 2019,
    "number": 10,
    "suggestedPace": "2 min",
    "title": "Mean and median after correction",
    "topic": "Statistics · mean & median",
    "prompt": "The diagram shows the number of students at soccer practice each weekday during last week. After computing the mean and median values, Coach discovers that there were actually 21 participants on Wednesday. Which of the following statements describes the change in the mean and median after the correction is made? (Original data: Mon=20, Tue=26, Wed=16, Thu=22, Fri=16)",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "The mean increases by 1 and the median does not change." },
      { "letter": "B", "value": "B", "label": "The mean increases by 1 and the median increases by 1." },
      { "letter": "C", "value": "C", "label": "The mean increases by 1 and the median increases by 5." },
      { "letter": "D", "value": "D", "label": "The mean increases by 5 and the median increases by 1." },
      { "letter": "E", "value": "E", "label": "The mean increases by 5 and the median increases by 5." }
    ],
    "answer": "B",
    "answerLabel": "(B) Mean increases by 1 and median increases by 1",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_10",
    "diagram": "https://latex.artofproblemsolving.com/e/1/7/e1796ef723acbb9a4cfeacf57e69202cddf3e0d3.png",
    "hints": [
      "Original sum = 20+26+16+22+16 = 100. Mean = 100/5 = 20. Median (sorted: 16,16,20,22,26) = 20.",
      "New sum = 100 − 16 + 21 = 105. New mean = 105/5 = 21. New sorted data: 16,20,21,22,26. New median = 21.",
      "Mean increases by 1, median increases by 1."
    ],
    "method": "Compute original mean and median, then recompute with the corrected value.",
    "score": 8,
    "ratingReason": "A practical statistics problem that tests both mean and median understanding.",
    "solution": [
      "Original data: 20, 26, 16, 22, 16. Sum = 100. Mean = 100/5 = 20.",
      "Sorted: 16, 16, 20, 22, 26. Median (middle value) = 20.",
      "Corrected Wednesday: 21 instead of 16. New sum = 100 − 16 + 21 = 105. New mean = 105/5 = 21.",
      "New sorted data: 16, 20, 21, 22, 26. New median = 21.",
      "Both mean and median increased by 1. Answer: B."
    ],
    "credit": "AI-authored explanation based on AoPS Solution.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Sort before finding the median.",
    "tip": "Always sort data before finding the median. The correction moved the middle value from 20 to 21.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting to sort the data before finding the median, or thinking the median is the 3rd value in original order.",
    "reflection": "Why did the median increase by exactly 1 even though Wednesday's value increased by 5?",
    "alternative": "The sum increased by 5, so mean increased by 5/5 = 1. The median moved from 20 to 21 because the corrected value (21) became the new middle of the sorted list.",
    "reviewedAt": "2026-10-19"
  },
  "2019-11": {
    "id": "2019-11",
    "year": 2019,
    "number": 11,
    "suggestedPace": "2 min",
    "title": "Students taking only math class",
    "topic": "Set theory · Venn diagram",
    "prompt": "The eighth grade class at Lincoln Middle School has 93 students. Each student takes a math class or a foreign language class or both. There are 70 eighth graders taking a math class, and there are 54 eighth graders taking a foreign language class. How many eighth graders take only a math class and not a foreign language class?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "16" },
      { "letter": "B", "value": "B", "label": "23" },
      { "letter": "C", "value": "C", "label": "31" },
      { "letter": "D", "value": "D", "label": "39" },
      { "letter": "E", "value": "E", "label": "70" }
    ],
    "answer": "D",
    "answerLabel": "(D) 39",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_11",
    "hints": [
      "Every student takes at least one class. How many students take a foreign language class (with or without math)?",
      "Students who do NOT take a foreign language class must take only math. Total 93 − 54 = 39.",
      "The 70 taking math is a distractor — you don't need it for this approach."
    ],
    "method": "Subtract foreign language students from total — the rest take only math.",
    "score": 8,
    "ratingReason": "A classic set theory problem with a useful trick: the 70 is a distractor.",
    "solution": [
      "Total students = 93. Every student takes math, foreign language, or both.",
      "Foreign language students (with or without math) = 54.",
      "Students who do NOT take a foreign language class = 93 − 54 = 39.",
      "These 39 must take only math (since every student takes at least one class).",
      "Answer: D (39).",
      "(Alternative: 70 + 54 − both = 93 → both = 31. Only math = 70 − 31 = 39.)"
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Look for the shortcut.",
    "tip": "When every student takes at least one class, subtract the foreign language count from the total to get 'only math' directly.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Trying to use both numbers (70 and 54) when only one is needed. The 70 is a distractor.",
    "reflection": "Why is the 70 irrelevant for this approach? What question would make the 70 necessary?",
    "alternative": "Let x = students taking both. 70 + 54 − x = 93 → x = 31. Only math = 70 − 31 = 39. Same answer, just more steps.",
    "reviewedAt": "2026-10-19"
  },
  "2019-12": {
    "id": "2019-12",
    "year": 2019,
    "number": 12,
    "suggestedPace": "2.5 min",
    "title": "Cube face colors — opposite of aqua",
    "topic": "Spatial reasoning · cube net",
    "prompt": "The faces of a cube are painted in six different colors: red (R), white (W), green (G), brown (B), aqua (A), and purple (P). Three views of the cube are shown. What is the color of the face opposite the aqua face?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "Red" },
      { "letter": "B", "value": "B", "label": "Green" },
      { "letter": "C", "value": "C", "label": "White" },
      { "letter": "D", "value": "D", "label": "Purple" },
      { "letter": "E", "value": "E", "label": "Brown" }
    ],
    "answer": "A",
    "answerLabel": "(A) Red",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_12",
    "diagram": "./assets/diagram-2019-12.jpg",
    "hints": [
      "From view 1 and 2, find which colors share an edge with aqua.",
      "In view 1: A shares edges with R, W, G. In view 2: A shares edges with G, B, P.",
      "Combining: A touches R, W, G, B, P — all except one color. That remaining color must be opposite A."
    ],
    "method": "Use process of elimination: the color not adjacent to aqua is opposite it.",
    "score": 9,
    "ratingReason": "Classic spatial reasoning — a cube net visualization problem.",
    "solution": [
      "From view 1, aqua (A) is adjacent to red (R), white (W), and green (G).",
      "From view 2, aqua (A) is adjacent to green (G), brown (B), and purple (P).",
      "Combining both views, A is adjacent to R, W, G, B, P — five different colors.",
      "A cube has 6 faces. The only color not adjacent to A is the one opposite it.",
      "Since A touches R, W, G, B, P, the missing color is Red (R).",
      "Answer: A (Red)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Track which colors touch.",
    "tip": "List every color you see next to aqua across all three views. The missing color is opposite.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Confusing the three views — remember each view shows three faces from a different angle.",
    "reflection": "If aqua is opposite red, what color is opposite white?",
    "alternative": "From view 1, G is opposite... From views 1-2, we can deduce: G is opposite W, B is opposite P, R is opposite A.",
    "reviewedAt": "2026-10-19"
  },
  "2019-13": {
    "id": "2019-13",
    "year": 2019,
    "number": 13,
    "suggestedPace": "3 min",
    "title": "Least non-palindrome sum of three 2-digit palindromes",
    "topic": "Number theory · palindromes",
    "prompt": "A palindrome is a number that has the same value when read from left to right or from right to left. (For example, 12321 is a palindrome.) Let N be the least three-digit integer which is not a palindrome but which is the sum of three distinct two-digit palindromes. What is the sum of the digits of N?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "2" },
      { "letter": "B", "value": "B", "label": "3" },
      { "letter": "C", "value": "C", "label": "4" },
      { "letter": "D", "value": "D", "label": "5" },
      { "letter": "E", "value": "E", "label": "6" }
    ],
    "answer": "A",
    "answerLabel": "(A) 2",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_13",
    "hints": [
      "Two-digit palindromes are 11, 22, 33, ..., 99 — all multiples of 11.",
      "The sum of three multiples of 11 is also a multiple of 11. So N must be a multiple of 11.",
      "The smallest three-digit multiple of 11 that is NOT a palindrome is 110. Check if it works: 11+22+77=110. Sum of digits = 1+1+0 = 2."
    ],
    "method": "Find the smallest 3-digit non-palindrome multiple of 11 that can be written as the sum of three distinct 2-digit palindromes.",
    "score": 9,
    "ratingReason": "A clever number theory problem combining palindromes, multiples of 11, and digit sum.",
    "solution": [
      "Two-digit palindromes are all multiples of 11: 11, 22, 33, 44, 55, 66, 77, 88, 99.",
      "The sum of three multiples of 11 is a multiple of 11, so N must be a multiple of 11.",
      "The smallest three-digit multiple of 11 is 110 (11 × 10).",
      "110 is not a palindrome (it reads 011 backwards). Check: 11 + 22 + 77 = 110. Yes!",
      "So N = 110. Sum of digits = 1 + 1 + 0 = 2.",
      "Answer: A."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Two-digit palindromes are multiples of 11.",
    "tip": "Every two-digit palindrome is 11×digit. So any sum of them is also a multiple of 11.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that 110 is not a palindrome, or not checking that the three palindromes must be distinct.",
    "reflection": "Why are all two-digit palindromes multiples of 11? (Hint: 10a + a = 11a.)",
    "alternative": "Try 11+33+66=110, or 22+33+55=110. There are multiple ways to reach 110 with three distinct two-digit palindromes.",
    "reviewedAt": "2026-10-19"
  },
  "2019-14": {
    "id": "2019-14",
    "year": 2019,
    "number": 14,
    "suggestedPace": "3 min",
    "title": "Ice cream coupon calendar logic",
    "topic": "Logic · calendar reasoning",
    "prompt": "Isabella has 6 coupons that can be redeemed for free ice cream cones at Pete's Sweet Treats. In order to make the coupons last, she decides that she will redeem one every 10 days until she has used them all. She knows that Pete's is closed on Sundays, but as she circles the 6 dates on her calendar, she realizes that no circled date falls on a Sunday. On what day of the week does Isabella redeem her first coupon?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "Monday" },
      { "letter": "B", "value": "B", "label": "Tuesday" },
      { "letter": "C", "value": "C", "label": "Wednesday" },
      { "letter": "D", "value": "D", "label": "Thursday" },
      { "letter": "E", "value": "E", "label": "Friday" }
    ],
    "answer": "C",
    "answerLabel": "(C) Wednesday",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_14",
    "hints": [
      "Every 10 days is the same as every 3 days (since 10 ≡ 3 mod 7). So the day shifts forward by 3 each time.",
      "List the 6 days: Day 1, Day 1+3=4, Day 1+6=7, Day 1+9=10, Day 1+12=13, Day 1+15=16 (mod 7).",
      "None of these can be Sunday (day 0 mod 7). The only start day that avoids Sunday is Wednesday (day 3): 3, 6, 2, 5, 1, 4 — all 6 days appear, none is Sunday!"
    ],
    "method": "Use modular arithmetic: 10 days ≡ 3 days (mod 7). Check which start day avoids Sunday.",
    "score": 9,
    "ratingReason": "A clever calendar puzzle that uses modular arithmetic in a real-world context.",
    "solution": [
      "She redeems a coupon every 10 days. Since 10 ≡ 3 (mod 7), the day of week shifts forward by 3 each time.",
      "If first redemption is day X, the six dates are: X, X+3, X+6, X+9, X+12, X+15 (mod 7).",
      "These simplify to: X, X+3, X+6, X+2, X+5, X+1 (mod 7).",
      "So the six days cover all days of the week except one — whichever day is missing from {X, X+1, ..., X+6}.",
      "Since Sunday cannot appear, the missing day must be Sunday. So the six days cover Mon–Sat.",
      "This means the first day X must be Wednesday. Check: Wed, Sat, Tue, Fri, Mon, Thu — no Sunday!",
      "Answer: C (Wednesday)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "10 days later = 3 days later on the calendar.",
    "tip": "Since a week is 7 days, adding 10 days is the same as adding 3 days for the day of the week.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Adding 10 days literally instead of using mod 7, or forgetting that 6 coupons cover 6 different days.",
    "reflection": "Why does every 10-day interval shift the day of the week by exactly 3?",
    "alternative": "Try each day manually: start Monday → next is Thursday, Sunday? No, 10 days from Monday is Thursday (not Sunday). Actually check: Mon+10=Thu, Thu+10=Sun — Sunday appears! So Monday doesn't work. Try each day until you find one that avoids Sunday.",
    "reviewedAt": "2026-10-19"
  },
  "2019-15": {
    "id": "2019-15",
    "year": 2019,
    "number": 15,
    "suggestedPace": "2.5 min",
    "title": "Probability with sunglasses and caps",
    "topic": "Probability · conditional probability",
    "prompt": "On a beach 50 people are wearing sunglasses and 35 people are wearing caps. Some people are wearing both sunglasses and caps. If one of the people wearing a cap is selected at random, the probability that this person is also wearing sunglasses is 2/5. If instead, someone wearing sunglasses is selected at random, what is the probability that this person is also wearing a cap?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "14/85" },
      { "letter": "B", "value": "B", "label": "7/25" },
      { "letter": "C", "value": "C", "label": "2/5" },
      { "letter": "D", "value": "D", "label": "4/7" },
      { "letter": "E", "value": "E", "label": "7/10" }
    ],
    "answer": "B",
    "answerLabel": "(B) 7/25",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_15",
    "hints": [
      "P(sunglasses | cap) = (both) / (cap) = 2/5. We know cap = 35, so both = 35 × 2/5 = 14.",
      "P(cap | sunglasses) = (both) / (sunglasses) = 14 / 50.",
      "Simplify 14/50 = 7/25."
    ],
    "method": "Find the number wearing both, then compute the reverse conditional probability.",
    "score": 8,
    "ratingReason": "A straightforward conditional probability problem — find both first, then recompute.",
    "solution": [
      "Let B = number wearing both sunglasses and caps.",
      "P(sunglasses | cap) = B / 35 = 2/5. So B = 35 × 2/5 = 14.",
      "Now, P(cap | sunglasses) = B / 50 = 14 / 50 = 7/25.",
      "Answer: B."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Find the intersection first.",
    "tip": "When given a conditional probability, use it to find the number in the overlap (both). Then use that for the reverse conditional.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Assuming P(A|B) = P(B|A) — they are not equal! Always find the intersection first.",
    "reflection": "Why is P(cap|sunglasses) different from P(sunglasses|cap) in this problem?",
    "alternative": "Draw a Venn diagram. Caps circle = 35, with 14 overlapping sunglasses. Sunglasses circle = 50. The overlap is 14, so P(cap|sunglasses) = 14/50 = 7/25.",
    "reviewedAt": "2026-10-19"
  },
  "2019-16": {
    "id": "2019-16",
    "year": 2019,
    "number": 16,
    "suggestedPace": "2.5 min",
    "title": "Average speed with two legs",
    "topic": "Rate-Speed-Distance",
    "prompt": "Qiang drives 15 miles at an average speed of 30 miles per hour. How many additional miles will he have to drive at 55 miles per hour to average 50 miles per hour for the entire trip?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "45" },
      { "letter": "B", "value": "B", "label": "62" },
      { "letter": "C", "value": "C", "label": "90" },
      { "letter": "D", "value": "D", "label": "110" },
      { "letter": "E", "value": "E", "label": "135" }
    ],
    "answer": "D",
    "answerLabel": "(D) 110",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_16",
    "hints": [
      "Average speed = total distance ÷ total time. You cannot average the speeds directly — only distances and times add.",
      "First leg takes 15 ÷ 30 = 0.5 hours. Let the extra distance be x miles at 55 mph, taking x/55 hours.",
      "Set (15 + x) / (0.5 + x/55) = 50 and solve for x."
    ],
    "method": "Use the average speed formula: total distance ÷ total time = target average. Solve for the unknown distance.",
    "score": 8,
    "ratingReason": "A classic average-speed trap — students must resist averaging 30 and 55 and instead use the definition.",
    "solution": [
      "The first leg takes 15 ÷ 30 = 0.5 hours.",
      "Let x be the additional miles. Driving x miles at 55 mph takes x/55 hours.",
      "Total distance = 15 + x. Total time = 0.5 + x/55.",
      "Average speed = (15 + x) / (0.5 + x/55) = 50.",
      "Multiply: 15 + x = 50(0.5 + x/55) = 25 + (50x)/55 = 25 + (10x)/11.",
      "So 15 + x = 25 + 10x/11 → subtract 15: x = 10 + 10x/11 → x − 10x/11 = 10 → x/11 = 10 → x = 110.",
      "Answer: D (110 miles)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Average speed is not the average of the speeds.",
    "tip": "Average speed = total distance ÷ total time. Always break the trip into time segments, then add distances and times separately.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Averaging 30 and 55 to get 42.5, or forgetting to account for the time of the second leg correctly.",
    "reflection": "Why must the second leg be so much longer than the first (110 vs 15 miles) to pull the average up to 50?",
    "alternative": "Work in time: first leg takes 0.5 h. If second leg takes t hours, distance = 55t. Then (15 + 55t)/(0.5 + t) = 50 → 15 + 55t = 25 + 50t → 5t = 10 → t = 2 → distance = 55×2 = 110.",
    "reviewedAt": "2026-10-20"
  },
  "2019-17": {
    "id": "2019-17",
    "year": 2019,
    "number": 17,
    "suggestedPace": "2.5 min",
    "title": "Telescoping product of fractions",
    "topic": "Patterns-Telescoping",
    "prompt": "What is the value of the product",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "1/2" },
      { "letter": "B", "value": "B", "label": "50/99" },
      { "letter": "C", "value": "C", "label": "9800/9801" },
      { "letter": "D", "value": "D", "label": "100/99" },
      { "letter": "E", "value": "E", "label": "50" }
    ],
    "answer": "B",
    "answerLabel": "(B) 50/99",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_17",
    "diagram": "./assets/diagram-2019-17.jpg",
    "hints": [
      "Rewrite each factor to separate the numerator into parts that cancel with adjacent denominators.",
      "Notice that the numerator 3 of the first fraction cancels with the 3 in the denominator of the second fraction, the 4 cancels with the next, and so on.",
      "Only the first factor 1/2 and the last factor 100/99 survive — multiply them to get 50/99."
    ],
    "method": "Regroup factors so that middle terms telescope: only the first and last terms survive.",
    "score": 8,
    "ratingReason": "A clean telescoping product — once you see the cancellation pattern, the computation is trivial.",
    "solution": [
      "Write the product as: (1·3)/(2·2) × (2·4)/(3·3) × (3·5)/(4·4) × ... × (98·100)/(99·99).",
      "Regroup: 1/2 × (3·2)/(2·3) × (4·3)/(3·4) × (5·4)/(4·5) × ... × (99·98)/(98·99) × 100/99.",
      "Each middle term (3·2)/(2·3), (4·3)/(3·4), ... equals 1.",
      "So the entire product simplifies to 1/2 × 100/99 = 100/198 = 50/99.",
      "Answer: B (50/99)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Look for telescoping patterns in products.",
    "tip": "When each term's numerator shares factors with adjacent denominators, rewrite to make cancellations visible. Only the first and last pieces survive.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Trying to multiply all 98 fractions directly, or mis-cancelling and ending with 1/2 or 100/99 alone.",
    "reflection": "What happens if the product goes from n=1 to N instead of 1 to 98? Can you find a general formula?",
    "alternative": "Write each term as ((k)(k+2))/((k+1)^2) for k=1 to 98. The product telescopes to (1·(k+2))/(2·(k+1)) evaluated at k=98, giving (1·100)/(2·99) = 50/99.",
    "reviewedAt": "2026-10-20"
  },
  "2019-18": {
    "id": "2019-18",
    "year": 2019,
    "number": 18,
    "suggestedPace": "2.5 min",
    "title": "Even sum with two special dice",
    "topic": "Counting-Probability",
    "prompt": "The faces of each of two fair dice are numbered 1, 2, 3, 5, 7, and 8. When the two dice are tossed, what is the probability that their sum will be an even number?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "4/9" },
      { "letter": "B", "value": "B", "label": "1/2" },
      { "letter": "C", "value": "C", "label": "5/9" },
      { "letter": "D", "value": "D", "label": "3/5" },
      { "letter": "E", "value": "E", "label": "2/3" }
    ],
    "answer": "C",
    "answerLabel": "(C) 5/9",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_18",
    "hints": [
      "An even sum occurs when both dice show even numbers OR both show odd numbers (even+even=even, odd+odd=even).",
      "Count the evens on each die: {2, 8} → 2 evens. Count the odds: {1, 3, 5, 7} → 4 odds.",
      "P(even sum) = P(both even) + P(both odd) = (2/6)(2/6) + (4/6)(4/6) = 4/36 + 16/36 = 20/36 = 5/9."
    ],
    "method": "Use casework on parity: even sum requires both dice same parity. Compute P(both even) + P(both odd).",
    "score": 8,
    "ratingReason": "A straightforward probability problem with a parity twist — dice have non-standard faces but the parity logic is standard.",
    "solution": [
      "Each die has faces: 1, 2, 3, 5, 7, 8. Even numbers: {2, 8} (2 evens). Odd numbers: {1, 3, 5, 7} (4 odds).",
      "Total outcomes: 6 × 6 = 36.",
      "Even sum occurs when both dice are even OR both are odd.",
      "P(both even) = (2/6) × (2/6) = 4/36.",
      "P(both odd) = (4/6) × (4/6) = 16/36.",
      "P(even sum) = 4/36 + 16/36 = 20/36 = 5/9.",
      "Answer: C (5/9)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Even sum = same parity for both dice.",
    "tip": "An even sum requires both numbers to have the same parity (both even or both odd). Count the evens and odds on each die separately.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that 1, 3, 5, 7 are all odd (no 4 or 6 on these dice), or miscounting the even faces.",
    "reflection": "What if the dice had different face sets? How would the probability change if one die had more evens than odds?",
    "alternative": "Use complementary counting: P(odd sum) = P(even, odd) + P(odd, even) = (2/6)(4/6) + (4/6)(2/6) = 16/36 = 4/9. Then P(even sum) = 1 − 4/9 = 5/9.",
    "reviewedAt": "2026-10-20"
  },
  "2019-19": {
    "id": "2019-19",
    "year": 2019,
    "number": 19,
    "suggestedPace": "2.5 min",
    "title": "Tournament scoring maximization",
    "topic": "Combinatorics",
    "prompt": "In a tournament there are six teams that play each other twice. A team earns 3 points for a win, 1 point for a draw, and 0 points for a loss. After all the games have been played it turns out that the top three teams earned the same number of total points. What is the greatest possible number of total points for each of the top three teams?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "22" },
      { "letter": "B", "value": "B", "label": "23" },
      { "letter": "C", "value": "C", "label": "24" },
      { "letter": "D", "value": "D", "label": "26" },
      { "letter": "E", "value": "E", "label": "30" }
    ],
    "answer": "C",
    "answerLabel": "(C) 24",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_19",
    "hints": [
      "Each game awards at most 3 points (if one team wins). To maximize points for top 3, minimize draws and losses against the bottom 3.",
      "There are 2 × C(6,2) = 30 total games. Games involving only bottom-3 teams: 2 × C(3,2) = 6. So 24 games involve at least one top-3 team.",
      "If each top-3 team wins all its games against bottom-3 teams, and the top-3 teams split their games 1 win / 1 loss against each other, each top team gets 18 (vs bottom) + 6 (vs top) = 24 points."
    ],
    "method": "Maximize points from games involving top-3 teams: 24 games × 3 points = 72 points total, split among 3 teams gives 24 each.",
    "score": 9,
    "ratingReason": "A clever optimization problem combining tournament combinatorics with an upper-bound argument.",
    "solution": [
      "Total games = 2 × C(6,2) = 30. Games between bottom-3 teams only = 2 × C(3,2) = 6.",
      "So 30 − 6 = 24 games involve at least one top-3 team.",
      "Each game awards at most 3 points. So top-3 teams can earn at most 24 × 3 = 72 total points.",
      "Since the three top teams have equal points, each can have at most 72 ÷ 3 = 24 points.",
      "This bound is achievable: each top-3 team wins all 6 games (×2 = 12 games) against bottom-3 teams, earning 12 × 3 = 18 points from those.",
      "Among themselves, each top-3 team plays 4 games (2 against each of the other two). Have each win 2 and lose 2, earning 2 × 3 = 6 more points.",
      "Total per top-3 team = 18 + 6 = 24 points. Answer: C (24)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–5.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Upper bound first, then construct an example.",
    "tip": "Find the theoretical maximum by counting games that involve the target teams and multiplying by points per game. Then check if the bound is reachable.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that teams play each other twice, or assuming top-3 teams can all win all their games against each other (impossible since wins must balance with losses).",
    "reflection": "Why can't each top-3 team get more than 24 points? What's the limiting factor — games against each other or games against bottom teams?",
    "alternative": "Focus on one top team: it plays 10 games (5 opponents × 2). To maximize, win all 6 against bottom-3 (18 pts), then split 4 games vs other top-2 teams 2-2 (6 pts) = 24 total.",
    "reviewedAt": "2026-10-20"
  },
  "2019-20": {
    "id": "2019-20",
    "year": 2019,
    "number": 20,
    "suggestedPace": "2.5 min",
    "title": "Solving a quadratic squared equation",
    "topic": "Algebra-Quadratics",
    "prompt": "How many different real numbers x satisfy the equation (x² − 5)² = 16?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "0" },
      { "letter": "B", "value": "B", "label": "1" },
      { "letter": "C", "value": "C", "label": "2" },
      { "letter": "D", "value": "D", "label": "4" },
      { "letter": "E", "value": "E", "label": "8" }
    ],
    "answer": "D",
    "answerLabel": "(D) 4",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_20",
    "hints": [
      "If a² = 16, then a = ±4. So x² − 5 = 4 or x² − 5 = −4.",
      "Solve x² − 5 = 4 → x² = 9 → x = ±3 (2 real solutions).",
      "Solve x² − 5 = −4 → x² = 1 → x = ±1 (2 more real solutions). Total: 4 real solutions."
    ],
    "method": "Take square roots: (x² − 5)² = 16 → x² − 5 = ±4 → solve both quadratics for x.",
    "score": 8,
    "ratingReason": "A straightforward quadratic-in-disguise — students must remember the ± when taking square roots.",
    "solution": [
      "Start with (x² − 5)² = 16.",
      "Take square root of both sides: x² − 5 = ±4.",
      "Case 1: x² − 5 = 4 → x² = 9 → x = 3 or x = −3 (2 solutions).",
      "Case 2: x² − 5 = −4 → x² = 1 → x = 1 or x = −1 (2 solutions).",
      "All four values satisfy the original equation. So there are 4 distinct real solutions.",
      "Answer: D (4)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Always consider ± when taking square roots.",
    "tip": "If u² = c, then u = √c or u = −√c. Never forget the negative branch — it often doubles your solutions.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Only taking the positive square root: x² − 5 = 4 → x² = 9 → x = ±3, but forgetting x² − 5 = −4 gives two more solutions.",
    "reflection": "How can a quartic equation (degree 4) have only 4 real solutions? Could it have had fewer?",
    "alternative": "Expand: (x² − 5)² = x⁴ − 10x² + 25 = 16 → x⁴ − 10x² + 9 = 0. Factor as (x² − 1)(x² − 9) = 0 → x² = 1 or x² = 9 → x = ±1, ±3.",
    "reviewedAt": "2026-10-20"
  },
  "2019-21": {
    "id": "2019-21",
    "year": 2019,
    "number": 21,
    "suggestedPace": "2.5 min",
    "title": "Area of triangle from three lines",
    "topic": "Geometry-Coordinate",
    "prompt": "What is the area of the triangle formed by the lines y = 5, y = 1 + x, and y = 1 − x?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "4" },
      { "letter": "B", "value": "B", "label": "8" },
      { "letter": "C", "value": "C", "label": "10" },
      { "letter": "D", "value": "D", "label": "12" },
      { "letter": "E", "value": "E", "label": "16" }
    ],
    "answer": "E",
    "answerLabel": "(E) 16",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_21",
    "hints": [
      "Find the three intersection points of the lines. They are the triangle's vertices.",
      "The intersections with y = 5 give (4, 5) and (−4, 5). The intersection of y = 1 + x and y = 1 − x is (0, 1).",
      "Base = 8 (from x = −4 to x = 4 on y = 5), height = 4 (from y = 1 to y = 5). Area = (1/2) × 8 × 4 = 16."
    ],
    "method": "Find the three intersection points, then use base × height / 2.",
    "score": 7,
    "ratingReason": "A straightforward coordinate geometry problem — find intersections of lines and compute triangle area.",
    "solution": [
      "Find intersections: y = 5 and y = 1 + x → 5 = 1 + x → x = 4 → point (4, 5).",
      "y = 5 and y = 1 − x → 5 = 1 − x → x = −4 → point (−4, 5).",
      "y = 1 + x and y = 1 − x → 1 + x = 1 − x → x = 0 → y = 1 → point (0, 1).",
      "The base between (4, 5) and (−4, 5) has length 8. The height from (0, 1) to y = 5 is 4.",
      "Area = (1/2) × 8 × 4 = 16.",
      "Answer: E (16)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Graph the lines to see the triangle.",
    "tip": "A quick sketch of the three lines reveals an isosceles triangle with a horizontal base. Finding intersection points is often faster than using the shoelace formula for simple shapes.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Using the wrong intersection points or forgetting that the base is horizontal, so its length is just the difference in x-coordinates.",
    "reflection": "If the top line were y = 6 instead of y = 5, how would the area change?",
    "alternative": "Use the shoelace theorem on vertices (−4,5), (4,5), (0,1): |(−4)(5−1) + 4(1−5) + 0(5−5)|/2 = |−16 + (−16) + 0|/2 = 32/2 = 16.",
    "reviewedAt": "2026-10-20"
  },
  "2019-22": {
    "id": "2019-22",
    "year": 2019,
    "number": 22,
    "suggestedPace": "2.5 min",
    "title": "Percent increase and decrease",
    "topic": "Algebra-Percents",
    "prompt": "A store increased the original price of a shirt by a certain percent and then lowered the new price by the same amount. Given that the resulting price was 84% of the original price, by what percent was the price increased and decreased?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "16" },
      { "letter": "B", "value": "B", "label": "20" },
      { "letter": "C", "value": "C", "label": "28" },
      { "letter": "D", "value": "D", "label": "36" },
      { "letter": "E", "value": "E", "label": "40" }
    ],
    "answer": "E",
    "answerLabel": "(E) 40",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_22",
    "hints": [
      "Let the original price be P and the percent be p (as a decimal). After increase: P(1+p). After decrease: P(1+p)(1−p).",
      "The final price is 0.84P, so (1+p)(1−p) = 0.84. Expand: 1 − p² = 0.84.",
      "Solve: p² = 0.16 → p = 0.4 = 40%."
    ],
    "method": "Set (1+p)(1−p) = 0.84 and solve for p.",
    "score": 7,
    "ratingReason": "A common percent-trap problem — students might guess 16% (since 100% − 84% = 16%) but the two-percent change makes it more subtle.",
    "solution": [
      "Let original price = P. Let the percent change = p (as a decimal).",
      "After increase: P(1+p). After decrease by same percent: P(1+p)(1−p).",
      "Final price = 0.84P, so (1+p)(1−p) = 0.84.",
      "Expand: 1 − p² = 0.84 → p² = 0.16 → p = 0.4 (positive).",
      "So the percent is 40%.",
      "Answer: E (40)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "A percent increase then decrease by the same % does NOT return to the original.",
    "tip": "Because the decrease applies to a larger amount, the net change is always a loss. For a net loss to 84%, the percent must be 40% — try it with $100.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Assuming the answer is 100% − 84% = 16%, which ignores that the decrease applies to the increased price.",
    "reflection": "What would the final percent be if the increase and decrease were both 50%? Does the order matter?",
    "alternative": "Assume original = $100. Try each answer: 40% gives $100→$140→$84. Check: 20% gives $100→$120→$96 (too high). Only 40% works.",
    "reviewedAt": "2026-10-20"
  },
  "2019-23": {
    "id": "2019-23",
    "year": 2019,
    "number": 23,
    "suggestedPace": "3 min",
    "title": "Basketball points with fractions",
    "topic": "Number Theory-Fractions",
    "prompt": "After Euclid High School's last basketball game, it was determined that 1/4 of the team's points were scored by Alexa and 2/7 were scored by Brittany. Chelsea scored 15 points. None of the other 7 team members scored more than 2 points. What was the total number of points scored by the other 7 team members?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "10" },
      { "letter": "B", "value": "B", "label": "11" },
      { "letter": "C", "value": "C", "label": "12" },
      { "letter": "D", "value": "D", "label": "13" },
      { "letter": "E", "value": "E", "label": "14" }
    ],
    "answer": "B",
    "answerLabel": "(B) 11",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_23",
    "hints": [
      "The total points T must be a multiple of LCM(4, 7) = 28 because Alexa and Brittany scored whole numbers of points.",
      "Fraction of points by Alexa + Brittany + Chelsea + others = T. So T/4 + 2T/7 + 15 + x = T, where x ≤ 14 (7 players × 2 points max).",
      "Simplify: x + 15 = 13T/28. Since x ≤ 14, try T = 56 (the smallest multiple of 28 that works). Then x = 13(56)/28 − 15 = 26 − 15 = 11."
    ],
    "method": "Use the fact that T must be a multiple of 28, then test the smallest values that satisfy all constraints.",
    "score": 7,
    "ratingReason": "A good Diophantine puzzle — the fraction constraints and the upper bound on other players' points narrow the possibilities to one answer.",
    "solution": [
      "Let T = total points. Alexa scored T/4, Brittany scored 2T/7. Both must be integers, so T is a multiple of LCM(4,7) = 28.",
      "Other players (excluding Alexa, Brittany, Chelsea) scored x points, with 0 ≤ x ≤ 14 (7 players, max 2 each).",
      "Equation: T/4 + 2T/7 + 15 + x = T → Multiply by 28: 7T + 8T + 420 + 28x = 28T → 15T + 420 + 28x = 28T → 28x = 13T − 420.",
      "For T = 28: 28x = 364 − 420 = −56 (x negative, impossible).",
      "For T = 56: 28x = 728 − 420 = 308 → x = 11. This is ≤ 14, so it works.",
      "For T = 84: 28x = 1092 − 420 = 672 → x = 24. This is > 14, violating the max 2 points per player constraint.",
      "So the only solution is T = 56, and the other 7 players scored x = 11 points total.",
      "Answer: B (11)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Look for LCM constraints when fractions must be whole numbers.",
    "tip": "When a problem says '1/4 of the team's points' and points must be integers, the total must be a multiple of the denominator. This gives you a small set of possible totals to test.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that Chelsea's 15 points must be subtracted from the 'other players' total, or missing the upper bound of 14 points for the other 7 players.",
    "reflection": "Why must the total be a multiple of 28 specifically, not just a multiple of 4 or 7?",
    "alternative": "Work with the fraction of points not scored by Alexa or Brittany: 1 − 1/4 − 2/7 = 13/28. So 13/28 of T = 15 + x. Since x ≤ 14, 15 ≤ 13T/28 ≤ 29 → T ≈ 32.3 to 62.5. The only multiple of 28 in this range is 56. So 13(56)/28 = 26, and x = 26 − 15 = 11.",
    "reviewedAt": "2026-10-20"
  },
  "2019-24": {
    "id": "2019-24",
    "year": 2019,
    "number": 24,
    "suggestedPace": "3.5 min",
    "title": "Triangle area ratio with midpoint",
    "topic": "Geometry-Area Ratios",
    "prompt": "In triangle ABC, point D divides side AC so that AD:DC = 1:2. Let E be the midpoint of BD and let F be the point of intersection of line BC and line AE. Given that the area of triangle ABC is 360, what is the area of triangle EBF?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "24" },
      { "letter": "B", "value": "B", "label": "30" },
      { "letter": "C", "value": "C", "label": "32" },
      { "letter": "D", "value": "D", "label": "36" },
      { "letter": "E", "value": "E", "label": "40" }
    ],
    "answer": "B",
    "answerLabel": "(B) 30",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_24",
    "hints": [
      "Since AD:DC = 1:2, area of triangle ABD is 1/3 of ABC and area of DBC is 2/3 of ABC.",
      "E is the midpoint of BD, so triangles ABE and AED each have half the area of ABD.",
      "Let x = area of EBF. Then DEF also has area x (same base BE=ED and same height). Set up the ratio ADF : DFC = AD : DC = 1:2 and solve for x."
    ],
    "method": "Use area ratios from base divisions and midpoints. Let x = [EBF] and solve using AD:DC = 1:2.",
    "score": 7,
    "ratingReason": "A classic area-ratio problem requiring careful tracking of triangle areas through multiple divisions.",
    "solution": [
      "AD:DC = 1:2, so [ABD] = 360/3 = 120 and [DBC] = 360 × 2/3 = 240.",
      "E is midpoint of BD, so [ABE] = [AED] = 120/2 = 60.",
      "Let x = [EBF]. Since BE = ED, triangles EBF and EDF share the same height to line AF, so [DEF] = x as well.",
      "Then [DFC] = [DBC] − [DEF] − [EBF] = 240 − 2x.",
      "Also, [AFD] = [AED] + [DEF] = 60 + x.",
      "Triangles ADF and DFC share the same height from A/DC line, so their areas are in ratio AD:DC = 1:2.",
      "Thus (60 + x) / (240 − 2x) = 1/2 → 2(60 + x) = 240 − 2x → 120 + 2x = 240 − 2x → 4x = 120 → x = 30.",
      "Answer: B (30)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Draw line segments to create useful triangles.",
    "tip": "Connecting D to F creates triangles ADF and DFC whose area ratio equals AD:DC. Drawing the right auxiliary line is often the key to area-ratio problems.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that [DEF] = [EBF] because BE = ED and they share the altitude from F to BD.",
    "reflection": "Why does the area ratio ADF:DFC equal AD:DC? What property of triangles guarantees this?",
    "alternative": "Use mass points: assign weights A=2, C=1 on AC (ratio 1:2). Then D=3, B=3 (since E midpoint), E=6, F=4. Then BF:FC = 1:3 and EF:EA = 2:4 = 1:2. So [ABF] = (1/4)[ABC] = 90, and [EBF] = (1/3)[ABF] = 30.",
    "reviewedAt": "2026-10-20"
  },
  "2019-25": {
    "id": "2019-25",
    "year": 2019,
    "number": 25,
    "suggestedPace": "3.5 min",
    "title": "Apples and stars and bars",
    "topic": "Combinatorics-Stars and Bars",
    "prompt": "Alice has 24 apples. In how many ways can she share them with Becky and Chris so that each of the three people has at least two apples?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "105" },
      { "letter": "B", "value": "B", "label": "114" },
      { "letter": "C", "value": "C", "label": "190" },
      { "letter": "D", "value": "D", "label": "210" },
      { "letter": "E", "value": "E", "label": "380" }
    ],
    "answer": "C",
    "answerLabel": "(C) 190",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2019_AMC_8_Problems/Problem_25",
    "hints": [
      "First give each person 2 apples (satisfying the minimum). That uses 6 apples, leaving 18 to distribute freely.",
      "Now we need non-negative integer solutions to a + b + c = 18, where a, b, c are the extra apples for Alice, Becky, Chris.",
      "Use stars and bars: the number of solutions is C(18 + 3 − 1, 3 − 1) = C(20, 2) = 190."
    ],
    "method": "Give each person the minimum 2 apples first, then use stars and bars for the remaining 18 apples among 3 people.",
    "score": 8,
    "ratingReason": "A classic stars-and-bars combinatorics problem — the twist of 'at least 2' requires setting aside the minimum first.",
    "solution": [
      "Each person must get at least 2 apples, so set aside 3 × 2 = 6 apples.",
      "Remaining: 24 − 6 = 18 apples to distribute freely among Alice, Becky, and Chris.",
      "Let a, b, c be the extra apples each receives. We need a + b + c = 18, with a, b, c ≥ 0.",
      "By stars and bars, the number of non-negative solutions is C(18 + 3 − 1, 3 − 1) = C(20, 2).",
      "C(20, 2) = 20 × 19 / 2 = 190.",
      "Answer: C (190)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Set aside minimums before using stars and bars.",
    "tip": "When each group needs a minimum number of items, subtract those from the total first. Then distribute the remainder with no restrictions using stars and bars.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting to subtract the minimum apples, or using the wrong stars-and-bars formula (C(n+r−1, r−1) for non-negative solutions).",
    "reflection": "How would the answer change if each person needed at least 3 apples instead of 2?",
    "alternative": "Enumerate by Alice's apples: she gets a ≥ 2, so a can be 2 to 20. For each a, Becky gets b from 2 to 22−a. Count: sum_{a=2}^{20} (21−a) = 19+18+...+1 = 190.",
    "reviewedAt": "2026-10-20"
  }
};
