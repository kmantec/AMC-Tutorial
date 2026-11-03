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
  "2026-6": {
    "id": "2026-6",
    "year": 2026,
    "number": 6,
    "suggestedPace": "1 min 30 sec",
    "title": "A strip of reachable bushes",
    "topic": "Geometry · area · fraction of a region",
    "prompt": "Peter lives near a rectangular field that is filled with blackberry bushes. The field is 10 meters long and 8 meters wide, and Peter can reach any blackberries that are within 1 meter of an edge of the field. The portion of the field he can reach is shaded in the figure below. What fraction of the area of the field can Peter reach?",
    "wording": "original",
    "diagram": "./assets/diagram-2026-6.png",
    "options": [
      { "letter": "A", "value": "1/6", "label": "1/6" },
      { "letter": "B", "value": "1/4", "label": "1/4" },
      { "letter": "C", "value": "1/3", "label": "1/3" },
      { "letter": "D", "value": "3/8", "label": "3/8" },
      { "letter": "E", "value": "2/5", "label": "2/5" }
    ],
    "answer": "2/5",
    "answerLabel": "(E) 2/5",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_6",
    "hints": [
      "The reachable bushes form a strip that runs along every edge of the field. The obstacle is the middle of the field, which is the part Peter cannot touch.",
      "The unreachable middle is a rectangle too, and its two dimensions are both smaller than the field's. The band eats into each dimension from two opposite edges.",
      "Subtract the band width twice: the middle is 10 − 2 = 8 meters by 8 − 2 = 6 meters, so it holds 48 square meters. The field holds 80, so the strip is 32, and 32/80 = 2/5."
    ],
    "method": "Count the middle Peter cannot reach, then subtract from the whole field.",
    "credit": "AI-authored explanation of the unreachable-centre subtraction that AoPS Solutions 1 and 2 also use. The figure was redrawn from the statement's own geometry.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "A border band is paid twice per dimension.",
    "tip": "A strip 1 meter wide all the way round is not the full field minus a rectangle that is 1 meter smaller. Each of the two opposite edges takes a meter off the same dimension, so a 1-meter band removes 2 meters from the length and 2 from the width. Check the answer against the easy extreme: a band half the width of the field should leave almost nothing, and 10 − 2 still leaves a big middle.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Shrinking each dimension by only 1 meter and using 9 × 7 as the unreachable middle, or reporting the unreachable fraction 48/80 instead of the reachable one.",
    "reflection": "Why is the reachable region a thin strip rather than one smaller rectangle? Say what shape the boundary of the reachable area actually is.",
    "alternative": "Add the four strips instead of subtracting. The top and bottom strips are 10 × 1 each. After those, the left and right strips are only 6 × 1 each, because the corners were already counted, so the total is 20 + 12 = 32 square meters. The general rule for a band of width t around an L-by-W rectangle is 2t(L + W) − 4t², which gives 2(18) − 4 = 32 here.",
    "reviewedAt": "2026-11-02"
  },
  "2026-7": {
    "id": "2026-7",
    "year": 2026,
    "number": 7,
    "suggestedPace": "1 min 30 sec",
    "title": "How far on one full charge",
    "topic": "Rates · fractions of a whole",
    "prompt": "Mika would like to estimate how far she can ride a new model of electric bike on a fully charged battery. She completed two trips totaling 40 miles. The first trip used 1/2 of the total battery power, while the second trip used 3/10 of the total battery power. How many miles can this electric bike go on a fully charged battery?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 45, "label": "45" },
      { "letter": "B", "value": 48, "label": "48" },
      { "letter": "C", "value": 50, "label": "50" },
      { "letter": "D", "value": 52, "label": "52" },
      { "letter": "E", "value": 55, "label": "55" }
    ],
    "answer": 50,
    "answerLabel": "(C) 50",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_7",
    "hints": [
      "Two trips used part of one battery, and together they covered 40 miles. The gap to close is between the fraction of the battery used and the whole battery.",
      "The two fractions describe the same battery, so they can be combined into one fraction of a full charge. That fraction is what paid for the 40 miles.",
      "1/2 + 3/10 = 5/10 + 3/10 = 8/10, so 40 miles is 4/5 of a full charge. One fifth of the charge therefore covers 10 miles, and the whole charge covers 50."
    ],
    "method": "Combine the two battery fractions, then scale up from the distance they bought.",
    "credit": "AI-authored explanation of the unit-fraction scaling method; AoPS Solutions 2 and 3 set up the same proportion as an equation.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Turn a fraction of a whole into a unit fraction.",
    "tip": "When a fraction of something is known, find what one unit of that fraction is worth before scaling up. Here 4/5 of the battery gave 40 miles, so 1/5 gave 10 and the whole gave 50 — three short steps with no algebra. The same move handles 3/8 of a tank and 2/3 of a budget.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Treating 40 miles as though it used the whole battery, or dividing 40 by 3/10 and 1/2 separately and adding the two ranges.",
    "reflection": "What distance would one fifth of a full charge cover, and how does that single number settle all five choices at once?",
    "alternative": "Use the total-fraction equation. Let x be the full range in miles. The first trip covers x/2 and the second 3x/10, and those add to 40: 5x/10 + 3x/10 = 8x/10 = 40, so x = 40 × 10/8 = 50. AoPS Solution 2 clears the denominators by multiplying through by 10.",
    "reviewedAt": "2026-11-02"
  },
  "2026-8": {
    "id": "2026-8",
    "year": 2026,
    "number": 8,
    "suggestedPace": "1 min 30 sec",
    "title": "The fewest people a poll can hold",
    "topic": "Number theory · percent as a fraction in lowest terms",
    "prompt": "A poll asked a number of people if they liked solving mathematics problems. Exactly 74% answered \"yes.\" What is the fewest possible number of people who could have been asked the question?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 10, "label": "10" },
      { "letter": "B", "value": 20, "label": "20" },
      { "letter": "C", "value": 25, "label": "25" },
      { "letter": "D", "value": 50, "label": "50" },
      { "letter": "E", "value": 100, "label": "100" }
    ],
    "answer": 50,
    "answerLabel": "(D) 50",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_8",
    "hints": [
      "A count of people has to be a whole number. The obstacle is that 74 percent of an awkward group size is not one.",
      "Write the percent as a fraction in lowest terms. The group size has to be a multiple of that fraction's denominator, because the numerator counts whole people.",
      "74/100 = 37/50, and 50 is the smallest multiple of 50, where 37 people saying yes is a whole number. So the fewest possible is 50."
    ],
    "method": "Reduce the percent to lowest terms and read the denominator as the required group size.",
    "credit": "AI-authored explanation of the lowest-terms denominator method; AoPS Solutions 2, 4 and 5 use the same idea.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "A percent in lowest terms hides a divisor test.",
    "tip": "Exactly p percent of n people means pn/100 is a whole number, which is the same as saying n must be a multiple of the reduced denominator of p/100. Reducing first is faster than testing choices one at a time, and it also tells you the answer cannot be smaller than that denominator.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Choosing 100 because 74% is out of 100, or testing only 10 and 20 and stopping before 50.",
    "reflection": "Why does the answer have to be a multiple of the reduced denominator, and not just any number that makes 74% of it larger than 1?",
    "alternative": "Test the choices from smallest, as AoPS Solution 3 does: 74% of 10 is 7.4 people, of 20 is 14.8, and of 25 is 18.5, all impossible. 74% of 50 is 37, a whole number, so 50 is the fewest. Testing in order is safe here only because the choices are increasing.",
    "reviewedAt": "2026-11-02"
  },
  "2026-9": {
    "id": "2026-9",
    "year": 2026,
    "number": 9,
    "suggestedPace": "1 min 30 sec",
    "title": "A fraction of nested square roots",
    "topic": "Algebra · square roots of products",
    "prompt": "What is the value of this expression?",
    "wording": "original",
    "expression": "√(16·√81) ÷ √(81·√16)",
    "options": [
      { "letter": "A", "value": "4/9", "label": "4/9" },
      { "letter": "B", "value": "2/3", "label": "2/3" },
      { "letter": "C", "value": "1", "label": "1" },
      { "letter": "D", "value": "3/2", "label": "3/2" },
      { "letter": "E", "value": "9/4", "label": "9/4" }
    ],
    "answer": "2/3",
    "answerLabel": "(B) 2/3",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_9",
    "hints": [
      "There are two square roots stacked on top of each other, and each one wraps a whole product. The obstacle is the nesting, not the numbers.",
      "A root of a product splits into a product of roots. Once the inner roots become ordinary numbers, the outer ones are ordinary too.",
      "√81 = 9 and √16 = 4, so the top is √(16 × 9) = 12 and the bottom is √(81 × 4) = 18. The value is 12/18 = 2/3."
    ],
    "method": "Split each square root over its product and work from the inside out.",
    "credit": "AI-authored explanation of the product-splitting method; AoPS Solutions 2 and 4 take the same inner roots first.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Peel roots from the inside outward.",
    "tip": "√(a·b) = √a·√b lets you replace the innermost root with a plain number, and the expression then collapses. Do the inner root first every time; trying to combine the two roots before simplifying is where the nesting becomes confusing. The same rule turns √(2·√144) into √(2·12) in one step.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Taking √81 = 3 (confusing it with the cube root of 27) or reading the whole thing as the square root of a single quotient and losing the inner roots.",
    "reflection": "The numerator and denominator look like mirror images. Why does that symmetry not make the answer 1?",
    "alternative": "Put the whole fraction under one root. Since √a ÷ √b = √(a/b), the value is √(144/324) = √(4/9) = 2/3, where 144 = 16 × 9 and 324 = 81 × 4 are the two inner products. Splitting each root into √16·√9 = 4 × 3 and √81·√4 = 9 × 2 reaches the same 12/18.",
    "reviewedAt": "2026-11-02"
  },
  "2026-10": {
    "id": "2026-10",
    "year": 2026,
    "number": 10,
    "suggestedPace": "1 min 30 sec",
    "title": "Five runners, one finishing order",
    "topic": "Logic · ordering from relative times",
    "prompt": "Five runners completed the grueling Xmarathon: Luke, Melina, Nico, Olympia, and Pedro. Nico finished 11 minutes behind Pedro. Olympia finished 2 minutes ahead of Melina, but 3 minutes behind Pedro. Olympia finished 6 minutes ahead of Luke. Which runner finished fourth?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "Luke" },
      { "letter": "B", "value": "B", "label": "Melina" },
      { "letter": "C", "value": "C", "label": "Nico" },
      { "letter": "D", "value": "D", "label": "Olympia" },
      { "letter": "E", "value": "E", "label": "Pedro" }
    ],
    "answer": "A",
    "answerLabel": "(A) Luke",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2026_AMC_8_Problems/Problem_10",
    "hints": [
      "Every runner in this race is placed by how far behind or ahead of another runner they finished, and no actual finishing time is given anywhere. The obstacle is that there is no starting number.",
      "Give one runner a time and describe everyone else as an offset from that runner. Any value works, because only the order matters.",
      "Set Pedro at 0. Olympia is 3 minutes behind, so 3. Melina is 2 behind Olympia, so 5. Luke is 6 behind Olympia, so 9. Nico is 11. In order: Pedro, Olympia, Melina, then Luke, then Nico."
    ],
    "method": "Anchor one runner at zero and write every other runner as an offset.",
    "credit": "AI-authored explanation of the anchored-offset method; AoPS Solutions 2 and 4 use Pedro as the benchmark the same way.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Anchor one value and make every other one relative.",
    "tip": "When a problem gives only comparisons, the absolute numbers are noise. Fix one runner at 0 and every 'behind' becomes a plus and every 'ahead' a minus, so the ordering becomes a list of numbers you can read. This is the same move as picking a convenient origin on a number line.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Chaining only the two comparisons that mention Pedro, which leaves Luke and Melina unordered, or taking 'ahead' and 'behind' to mean the same direction.",
    "reflection": "Once you have ordered the runners by offset, which comparison would you have needed to change for the answer to be a different name?",
    "alternative": "Compare only Olympia with the others, since three of the four statements mention her. Olympia is 3 behind Pedro, 2 ahead of Melina, and 6 ahead of Luke — so Pedro, Olympia, Melina, Luke. Nico is 11 behind Pedro, which is 8 behind Olympia and therefore last. Luke ends up fourth with 9 minutes of offset, between Melina's 5 and Nico's 11.",
    "reviewedAt": "2026-11-02"
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
      "Three deductions in a row, and each one is taken from what is left, not from the original bag. The only number that matters at each step is the fraction that survives.",
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
      "Five weekday counts, and exactly one of them was recorded wrongly. Which of the two averages can a single correction move a lot, and which can it barely move?",
      "The wrong day sits near the middle of the sorted list and above the old mean, so the correction pushes both statistics in the same direction. Work out where it lands in each.",
      "The corrected value is larger than the old mean, so the mean rises; it is also larger than the old middle value, so the median rises too. Figure out each rise separately."
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
      "Every student takes at least one class, and the question is about the ones who take no foreign language at all.",
      "The students you want are the ones left over once the foreign-language takers are removed. Which of the given numbers do you actually need for that?",
      "Of the 93 students, 54 take a foreign language. Everyone else takes only math — and the 70 taking math is a distractor."
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
      "Two overlapping groups of people, and one conditional probability is given. Each question has its own \"given\" group — that group is the denominator.",
      "The given 2/5 is a fraction of the cap-wearers, so start by turning it into a count of people wearing both. Then the other question asks about a different group of the same size 50.",
      "Both-people = 2/5 of the 35 cap-wearers. The second probability divides that same both-count by the 50 sunglasses-wearers. Mind which group is on the bottom."
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
      "Each game hands out at most 3 points — a win. So the ceiling on everyone's total comes from how many games get a winner.",
      "How many games are there in total, and how many of them involve none of the top three? Points earned in those games still count against a ceiling you can find.",
      "Each top-3 team sweeps both games against all three bottom teams — 6 wins, 18 points. The remaining 6 games are the top three playing each other, worth 18 points in total. They must end level, so those 18 split three ways."
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
      "A square equals 16. Ask first how many values the inside of that square can take, then how many x each one produces.",
      "The squared quantity can only be one of two numbers. Each of them then gives a small equation in x with two real answers, and none of the answers repeat.",
      "Split it into x² − 5 = 4 and x² − 5 = −4. Each gives a positive and a negative x, and the four are all different — so count them."
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
      "The team total is cut into quarters and into sevenths. Before any arithmetic, what must the total be a multiple of?",
      "Alexa and Brittany must each have scored a whole number of points, which pins the team total to one family of numbers. Chelsea's 15 and the seven low scorers then have to fit inside what is left.",
      "The total is a multiple of 28, and the seven others contribute at most 14 points. Test the allowed totals in order and keep the smallest that leaves a workable remainder for the seven others."
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
      "Two triangles that share a height have areas in the same ratio as their bases. Look for pairs in this figure that share a height.",
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
  },
  "2020-1": {
    "id": "2020-1",
    "year": 2020,
    "number": 1,
    "suggestedPace": "1 min",
    "title": "Lemonade ratio",
    "topic": "Ratios · proportions",
    "prompt": "Luka is making lemonade to sell at a school fundraiser. His recipe requires 4 times as much water as sugar and twice as much sugar as lemon juice. He uses 3 cups of lemon juice. How many cups of water does he need?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 6, "label": "6" },
      { "letter": "B", "value": 8, "label": "8" },
      { "letter": "C", "value": 12, "label": "12" },
      { "letter": "D", "value": 18, "label": "18" },
      { "letter": "E", "value": 24, "label": "24" }
    ],
    "answer": 24,
    "answerLabel": "(E) 24",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_1",
    "hints": [
      "Start with the ingredient you know: 3 cups of lemon juice. How much sugar does twice as much mean?",
      "Sugar = 3 × 2 = 6 cups. Water is 4 times the sugar. How much is that?",
      "Water = 4 × 6 = 24 cups. You can also build a combined ratio: water : sugar : lemon juice = 8 : 2 : 1."
    ],
    "method": "Work step by step: lemon juice → sugar → water, or build a three-term ratio.",
    "score": 8,
    "ratingReason": "A straightforward ratio problem that rewards working stepwise or combining ratios.",
    "solution": [
      "Lemon juice = 3 cups.",
      "Sugar is twice lemon juice: 3 × 2 = 6 cups.",
      "Water is 4 times sugar: 6 × 4 = 24 cups.",
      "Alternatively, the three-term ratio is water : sugar : lemon juice = 8 : 2 : 1. With 3 cups of lemon juice, multiply each part by 3: 24 : 6 : 3.",
      "Answer: E (24 cups)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Build ratios step by step.",
    "tip": "When a problem says 'A is X times B and B is Y times C', connect the chain: A = X × Y × C. Here water = 4 × 2 × 3 = 24.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Stopping after finding the sugar (6 cups) instead of continuing to water.",
    "reflection": "If the recipe changed to 3 times as much water as sugar, how many cups of water would Luka need?",
    "alternative": "Combine the ratios first: water : sugar = 4 : 1 and sugar : lemon = 2 : 1, so water : lemon = 8 : 1. Since lemon = 3, water = 8 × 3 = 24. This saves a step.",
    "reviewedAt": "2026-10-20"
  },
  "2020-2": {
    "id": "2020-2",
    "year": 2020,
    "number": 2,
    "suggestedPace": "1 min",
    "title": "Equal share of earnings",
    "topic": "Arithmetic · averaging",
    "prompt": "Four friends do yardwork for their neighbors over the weekend, earning $15, $20, $25, and $40, respectively. They decide to split their earnings equally among themselves. In total, how much will the friend who earned $40 give to the others?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 5, "label": "$5" },
      { "letter": "B", "value": 10, "label": "$10" },
      { "letter": "C", "value": 15, "label": "$15" },
      { "letter": "D", "value": 20, "label": "$20" },
      { "letter": "E", "value": 25, "label": "$25" }
    ],
    "answer": 15,
    "answerLabel": "(C) $15",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_2",
    "hints": [
      "Four unequal earnings shared equally. What does \"equal\" mean for the person who earned the most?",
      "Nobody gives anything except from excess, and the only person with excess is the top earner. Their surplus above the fair share is what the others receive in total.",
      "The fair share is the average of the four earnings. The $40 earner hands over exactly the part of their money above that average — and the others' shortfalls total the same amount."
    ],
    "method": "Find the total, divide by 4, then subtract the equal share from $40.",
    "score": 8,
    "ratingReason": "A clear equal-sharing problem that tests whether students subtract after dividing.",
    "solution": [
      "Total earnings = 15 + 20 + 25 + 40 = $100.",
      "Split equally: 100 ÷ 4 = $25 per person.",
      "The friend who earned $40 keeps $25. The rest goes to the others.",
      "Amount given = 40 − 25 = $15.",
      "Answer: C ($15)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Total first, then share.",
    "tip": "Always add everything first before dividing. Each person's share is the equal portion, not what they originally earned.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Answering $25 (the equal share) instead of $15 (the amount given away).",
    "reflection": "If there were 5 friends instead of 4, how much would the $40 earner give away?",
    "alternative": "Compare each person's earnings to the $25 average: the $15 earner needs $10, the $20 earner needs $5, the $25 earner needs $0. Total needed = $10 + $5 + $0 = $15. The $40 earner supplies exactly this amount.",
    "reviewedAt": "2026-10-20"
  },
  "2020-3": {
    "id": "2020-3",
    "year": 2020,
    "number": 3,
    "suggestedPace": "1 min 30 sec",
    "title": "Strawberry harvest",
    "topic": "Arithmetic · area and rates",
    "prompt": "Carrie has a rectangular garden that measures 6 feet by 8 feet. She plants the entire garden with strawberry plants. Carrie is able to plant 4 strawberry plants per square foot, and she harvests an average of 10 strawberries per plant. How many strawberries can she expect to harvest?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 560, "label": "560" },
      { "letter": "B", "value": 960, "label": "960" },
      { "letter": "C", "value": 1120, "label": "1120" },
      { "letter": "D", "value": 1920, "label": "1920" },
      { "letter": "E", "value": 3840, "label": "3840" }
    ],
    "answer": 1920,
    "answerLabel": "(D) 1920",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_3",
    "hints": [
      "Two rates are stacked: plants per square foot, then berries per plant. The units alone tell you the order to apply them.",
      "The garden's floor area must be turned into a number of plants before any berry can be counted. Trace one square foot through both rates to see how the units cancel.",
      "Floor area in square feet × plants per square foot gives plants; plants × berries per plant gives berries. Write the units at every step and they cancel themselves."
    ],
    "method": "Multiply step by step: area → plants → strawberries.",
    "score": 8,
    "ratingReason": "A multi-step unit conversion problem that builds from area to total harvest.",
    "solution": [
      "Garden area = 6 × 8 = 48 square feet.",
      "Plants = 48 sq ft × 4 plants/sq ft = 192 plants.",
      "Strawberries = 192 plants × 10 strawberries/plant = 1920 strawberries.",
      "Answer: D (1920)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Track the units at each step.",
    "tip": "Write the units: sq ft × plants/sq ft = plants, then plants × strawberries/plant = strawberries. Units tell you whether to multiply or divide.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Adding the units instead of multiplying (6 + 8 = 14, then 14 × 4 = 56, etc.) or using the wrong operation.",
    "reflection": "If the garden were 9 ft by 8 ft with the same planting density, how many strawberries would Carrie harvest?",
    "alternative": "Multiply all factors together: 6 × 8 × 4 × 10 = 1920. Since all operations are multiplication, you can rearrange the order: (6×8)×(4×10) = 48×40 = 1920.",
    "reviewedAt": "2026-10-20"
  },
  "2020-4": {
    "id": "2020-4",
    "year": 2020,
    "number": 4,
    "suggestedPace": "2 min",
    "title": "Hexagon dot pattern",
    "topic": "Patterns · sequences",
    "prompt": "Three hexagons of increasing size are shown below. Suppose the dot pattern continues so that each successive hexagon contains one more band of dots. How many dots are in the next hexagon?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 35, "label": "35" },
      { "letter": "B", "value": 37, "label": "37" },
      { "letter": "C", "value": 39, "label": "39" },
      { "letter": "D", "value": 43, "label": "43" },
      { "letter": "E", "value": 49, "label": "49" }
    ],
    "answer": 37,
    "answerLabel": "(B) 37",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_4",
    "hints": [
      "Count the dots in the first three hexagons: the first has 1 dot, the second has 7, the third has 19.",
      "The differences between consecutive terms are 6 and 12. What pattern do the differences follow?",
      "The next difference should be 18. Add 18 to 19 to get 37."
    ],
    "method": "Find the pattern in the differences between successive hexagons: 1 → 7 (+6), 7 → 19 (+12), 19 → ? (+18).",
    "score": 8,
    "ratingReason": "A visual pattern problem where noticing the increasing differences is the key.",
    "solution": [
      "First hexagon: 1 dot.",
      "Second hexagon: 1 + 6 = 7 dots.",
      "Third hexagon: 7 + 12 = 19 dots.",
      "The added amounts increase by 6 each time: 6, 12, 18, ...",
      "Fourth hexagon: 19 + 18 = 37 dots.",
      "Answer: B (37)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–7.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Look for patterns in the differences.",
    "tip": "When a sequence grows quickly, find the differences between consecutive terms. A pattern in the differences often reveals the next term.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Thinking the pattern is simply multiplying by 3 (1, 3, 9, 27) or adding 6 each time (1, 7, 13, 19).",
    "reflection": "How many dots would the fifth hexagon have? What formula gives the nth hexagon's dot count?",
    "alternative": "The hexagon can be seen as rows: first hexagon has 1 row of 1. Second has rows 2+3+2 = 7. Third has 3+4+5+4+3 = 19. Fourth has 4+5+6+7+6+5+4 = 37.",
    "reviewedAt": "2026-10-20"
  },
  "2020-5": {
    "id": "2020-5",
    "year": 2020,
    "number": 5,
    "suggestedPace": "1 min",
    "title": "Pitcher percentage",
    "topic": "Fractions · percents",
    "prompt": "Three fourths of a pitcher is filled with pineapple juice. The pitcher is emptied by pouring an equal amount of juice into each of 5 cups. What percent of the total capacity of the pitcher did each cup receive?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 5, "label": "5" },
      { "letter": "B", "value": 10, "label": "10" },
      { "letter": "C", "value": 15, "label": "15" },
      { "letter": "D", "value": 20, "label": "20" },
      { "letter": "E", "value": 25, "label": "25" }
    ],
    "answer": 15,
    "answerLabel": "(C) 15",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_5",
    "hints": [
      "Three fourths of the pitcher is filled, which is 75% of the total capacity.",
      "This juice is split equally among 5 cups. What is 75 divided by 5?",
      "75 ÷ 5 = 15. Each cup receives 15% of the pitcher's total capacity."
    ],
    "method": "Convert 3/4 to 75%, then divide by 5 cups.",
    "score": 8,
    "ratingReason": "A clean fraction-to-percent conversion followed by equal division.",
    "solution": [
      "Three fourths of the pitcher is 3/4 = 75% of the total capacity.",
      "This juice is poured equally into 5 cups.",
      "Each cup receives 75% ÷ 5 = 15% of the total capacity.",
      "Answer: C (15)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Convert fractions to percents first.",
    "tip": "3/4 = 75%. Dividing a percent by a whole number is often easier than working with fractions.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Dividing 100% by 5 and answering 20%, forgetting that only 3/4 of the pitcher is filled.",
    "reflection": "If the pitcher were 2/3 full instead of 3/4, what percent would each cup receive?",
    "alternative": "Work with fractions: (3/4) ÷ 5 = 3/20. Convert to percent: 3/20 = 15/100 = 15%. Same answer.",
    "reviewedAt": "2026-10-20"
  },
  "2020-6": {
    "id": "2020-6",
    "year": 2020,
    "number": 6,
    "suggestedPace": "2 min",
    "title": "Train seating logic",
    "topic": "Logic · arrangement",
    "prompt": "Aaron, Darren, Karen, Maren, and Sharon rode on a small train that has five cars that seat one person each. Maren sat in the last car. Aaron sat directly behind Sharon. Darren sat in one of the cars in front of Aaron. At least one person sat between Karen and Darren. Who sat in the middle car?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "A", "label": "Aaron" },
      { "letter": "B", "value": "B", "label": "Darren" },
      { "letter": "C", "value": "C", "label": "Karen" },
      { "letter": "D", "value": "D", "label": "Maren" },
      { "letter": "E", "value": "E", "label": "Sharon" }
    ],
    "answer": "A",
    "answerLabel": "(A) Aaron",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_6",
    "hints": [
      "Five cars, front to back. Maren is in the last car, so one position is already fixed.",
      "Aaron sat directly behind Sharon — so Sharon is immediately in front of Aaron. That locks them into a pair of adjacent seats, but only one placement lets the rest of the clues fit.",
      "Darren is in front of Aaron, and at least one person sits between Karen and Darren. Test the adjacent S-A placements the clues allow; only one arrangement survives, and it puts one person exactly in the middle car."
    ],
    "method": "Use a diagram with 5 positions and test each possible arrangement.",
    "score": 8,
    "ratingReason": "A logical deduction puzzle that rewards systematic testing of arrangements.",
    "solution": [
      "Label cars 1–5 from back to front (1 = back, 5 = front). Maren is in the last car (5). So position 5 = M.",
      "Aaron sat directly behind Sharon, meaning S is directly in front of A. So A and S occupy consecutive positions with S ahead.",
      "Try M _ _ A S: this puts A at 2, S at 1. But then Darren must be in front of A (positions 3–5), and at least one person between K and D. The only way is M K A S D.",
      "Check: M(5), K(4), A(3=middle), S(2), D(1). D is in front of A? Yes (car 1 is in front of car 3). K and D have A and S between them? Yes. All conditions satisfied.",
      "The person in the middle car (position 3) is Aaron. Choose A."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Draw a diagram with positions.",
    "tip": "Label positions 1 to 5 from back to front. Fill in what you know, then test each possible arrangement until one fits all conditions.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Confusing 'directly behind' with 'directly in front of', or not testing all arrangements.",
    "reflection": "If the train had 6 cars instead of 5, would there still be a unique solution?",
    "alternative": "Use the fact that the only arrangement satisfying all conditions is MKASD. Then check each condition against this arrangement. Since only one arrangement works, the middle person is uniquely determined.",
    "reviewedAt": "2026-10-21"
  },
  "2020-7": {
    "id": "2020-7",
    "year": 2020,
    "number": 7,
    "suggestedPace": "2 min",
    "title": "Increasing-digit integers",
    "topic": "Counting · combinations",
    "prompt": "How many integers between 2020 and 2400 have four distinct digits arranged in increasing order? (For example, 2347 is one such integer.)",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 9, "label": "9" },
      { "letter": "B", "value": 10, "label": "10" },
      { "letter": "C", "value": 15, "label": "15" },
      { "letter": "D", "value": 21, "label": "21" },
      { "letter": "E", "value": 28, "label": "28" }
    ],
    "answer": 15,
    "answerLabel": "(C) 15",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_7",
    "hints": [
      "The number must be between 2020 and 2400, so the thousands digit is 2 and the hundreds digit cannot be 0 or 1 (since digits must increase).",
      "The hundreds digit must be 3 (since 2_ _ _ with increasing digits, the next digit can only be 3 to stay below 2400).",
      "The last two digits must be chosen from {4,5,6,7,8,9} in increasing order. C(6,2) = 15 ways to choose them."
    ],
    "method": "Fix the first two digits (2 and 3), then choose the remaining two digits from the available larger digits.",
    "score": 8,
    "ratingReason": "A combinatorial counting problem where fixing the first two digits reduces it to a simple combination.",
    "solution": [
      "The number must be between 2020 and 2400, so the thousands digit is 2.",
      "Since digits must be distinct and increasing, the hundreds digit must be greater than 2. It cannot be 4 or more, because 24_ _ would be ≥ 2400. So the hundreds digit must be 3.",
      "The number is now 23_ _. The last two digits must be distinct digits from {4,5,6,7,8,9} arranged in increasing order.",
      "Choosing any 2 digits from these 6 automatically puts them in increasing order. Number of ways = C(6,2) = 15.",
      "Answer: C (15)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Fix the constrained digits first.",
    "tip": "When digits must be increasing, choosing a set of digits automatically determines their order. So count the number of ways to choose the digits, not arrange them.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that 0 cannot be the hundreds digit, or trying to count permutations instead of combinations.",
    "reflection": "How many such integers would there be between 2400 and 3000?",
    "alternative": "Casework on the third digit: if the third digit is 4, the fourth can be 5–9 (5 choices). If 5: 6–9 (4 choices). If 6: 7–9 (3). If 7: 8–9 (2). If 8: 9 (1). Total = 5+4+3+2+1 = 15.",
    "reviewedAt": "2026-10-21"
  },
  "2020-8": {
    "id": "2020-8",
    "year": 2020,
    "number": 8,
    "suggestedPace": "2 min",
    "title": "Maximum minus minimum coins",
    "topic": "Algebra · linear expressions",
    "prompt": "Ricardo has 2020 coins, some of which are pennies (1-cent coins) and the rest of which are nickels (5-cent coins). He has at least one penny and at least one nickel. What is the difference in cents between the greatest possible and least possible amounts of money that Ricardo can have?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 8062, "label": "8062" },
      { "letter": "B", "value": 8068, "label": "8068" },
      { "letter": "C", "value": 8072, "label": "8072" },
      { "letter": "D", "value": 8076, "label": "8076" },
      { "letter": "E", "value": 8082, "label": "8082" }
    ],
    "answer": 8072,
    "answerLabel": "(C) 8072",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_8",
    "hints": [
      "Two kinds of coin, 2020 of them, at least one of each. The total money is controlled entirely by one of the two counts.",
      "Every coin is worth at least one cent, so the fixed 2020 base is locked in and only the extra 4 cents per nickel can move the total. That makes the extremes a question about the smallest and largest possible number of one coin.",
      "The money depends only on how many of the five-cent coins there are, so the least is one of them and the greatest is all but one. The gap between those two totals reduces to 4 cents times the number of coins, and the 2020 base cancels."
    ],
    "method": "Write the total as 2020 + 4n, then find the range of n.",
    "score": 8,
    "ratingReason": "A clean algebraic approach: the fixed part cancels and the difference depends only on the variable part.",
    "solution": [
      "Let p = number of pennies, n = number of nickels. Then p + n = 2020.",
      "Total value in cents = p × 1 + n × 5 = (2020 − n) + 5n = 2020 + 4n.",
      "Ricardo must have at least one penny and at least one nickel, so n ranges from 1 to 2019.",
      "Minimum total: n = 1 → 2020 + 4 = 2024 cents.",
      "Maximum total: n = 2019 → 2020 + 4×2019 = 2020 + 8076 = 10096 cents.",
      "Difference = 10096 − 2024 = 8072 cents. (Or directly: 4 × (2019 − 1) = 4 × 2018 = 8072.)",
      "Answer: C (8072)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Find the constant part that cancels.",
    "tip": "Write the total as a constant plus a variable part. The constant cancels when finding the difference, leaving the per-swap gain times the number of possible swaps.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that both the minimum and maximum include the constant 2020, which cancels. Or thinking the range is 4 × 2019 instead of 4 × (2019 − 1).",
    "reflection": "What would the difference be if Ricardo had 1000 coins instead of 2020?",
    "alternative": "Each time you change a penny to a nickel, the total increases by 4 cents. You can swap up to 2018 times (from 1 nickel to 2019 nickels). Difference = 4 × 2018 = 8072.",
    "reviewedAt": "2026-10-21"
  },
  "2020-9": {
    "id": "2020-9",
    "year": 2020,
    "number": 9,
    "suggestedPace": "2 min",
    "title": "Cake icing on two sides",
    "topic": "Geometry · 3D cube counting",
    "prompt": "Akash's birthday cake is in the form of a 4×4×4 inch cube. The cake has icing on the top and the four side faces, and no icing on the bottom. Suppose the cake is cut into 64 smaller cubes, each measuring 1×1×1 inch. How many of the small pieces will have icing on exactly two sides?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 12, "label": "12" },
      { "letter": "B", "value": 16, "label": "16" },
      { "letter": "C", "value": 18, "label": "18" },
      { "letter": "D", "value": 20, "label": "20" },
      { "letter": "E", "value": 24, "label": "24" }
    ],
    "answer": 20,
    "answerLabel": "(D) 20",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_9",
    "hints": [
      "The cake has icing on 5 faces (top and 4 sides), not on the bottom. A small cube has icing on exactly 2 sides if it lies on an edge where two iced faces meet.",
      "Top layer (y=4): the 4 edge pieces that are not corners have 2 iced sides (top + side). There are 4 edges × 2 = 8 such pieces.",
      "Middle 3 layers (y=1,2,3): only the 4 corner pieces of each layer have 2 iced sides (two side faces meet). That's 4 × 3 = 12. Bottom layer (y=0): 4 corner pieces have 2 iced sides. Total = 8 + 12 = 20."
    ],
    "method": "Count cubes on edges where two iced faces meet, separately for the top layer and the side-only layers.",
    "score": 8,
    "ratingReason": "A spatial reasoning problem that requires careful casework by layer and position.",
    "solution": [
      "The 4×4×4 cake has icing on 5 faces: top, front, back, left, right. No icing on the bottom.",
      "A small cube gets icing on exactly 2 sides if it lies where exactly two iced faces meet but not three.",
      "Top layer (y=4): the edge pieces that are not corners have icing on the top and one side — 2 sides. There are 4 edges, each with 2 such pieces (the two middle pieces per edge). That's 8 cubes.",
      "Middle three layers (y=1,2,3): the corner cubes have icing on two side faces but not the top. Each layer has 4 corners. 4 × 3 = 12 cubes.",
      "Bottom layer (y=0): corner cubes have icing on two side faces only. 4 corners = 4 cubes. (The bottom itself has no icing.)",
      "Total = 8 + 12 + 4 = 20. Answer: D (20)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Count by position and layer.",
    "tip": "Separate the top layer (top+side edges give 2 sides) from the middle layers (only corners have 2 sides) from the bottom layer (corners have 2 sides).",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting the bottom layer corners (they have 2 iced sides even though the bottom itself is not iced), or counting the top layer corners (which have 3 iced sides).",
    "reflection": "If the cake had icing on all 6 faces, how many small cubes would have icing on exactly 2 sides?",
    "alternative": "A 4×4 Rubik's cube has 24 edge pieces. Subtract the 4 bottom edge pieces (only 1 iced face) and add the 4 bottom corner pieces (2 iced faces). Actually: top layer edge pieces (non-corner) = 8. Middle layers: each of the 2 middle layers has 4 corners with 2 sides = 8. Bottom layer: 4 corners with 2 sides = 4. Total = 8 + 8 + 4 = 20.",
    "reviewedAt": "2026-10-21"
  },
  "2020-10": {
    "id": "2020-10",
    "year": 2020,
    "number": 10,
    "suggestedPace": "2 min",
    "title": "Marbles not next to each other",
    "topic": "Counting · permutations",
    "prompt": "Zara has a collection of 4 marbles: an Aggie, a Bumblebee, a Steelie, and a Tiger. She wants to display them in a row on a shelf, but does not want to put the Steelie and the Tiger next to one another. In how many ways can she do this?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 6, "label": "6" },
      { "letter": "B", "value": 8, "label": "8" },
      { "letter": "C", "value": 12, "label": "12" },
      { "letter": "D", "value": 18, "label": "18" },
      { "letter": "E", "value": 24, "label": "24" }
    ],
    "answer": 12,
    "answerLabel": "(C) 12",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_10",
    "hints": [
      "Two of the four marbles must not touch. Which is cheaper to count — the arrangements you want, or the ones you forbid?",
      "All the arrangements are easy to count. The forbidden ones are also easy once the two marbles that cannot separate are treated as a single object, with an internal choice of which comes first.",
      "Count all arrangements, then subtract the forbidden ones: glued together they behave as one object plus the other two, and either of the two can sit in front. Subtract, and the difference is the answer."
    ],
    "method": "Use complementary counting: total arrangements minus arrangements where S and T are together.",
    "score": 8,
    "ratingReason": "A classic complementary counting problem: count what you don't want and subtract from the total.",
    "solution": [
      "Total arrangements of 4 distinct marbles: 4! = 24.",
      "Count arrangements where Steelie (S) and Tiger (T) are next to each other. Treat S and T as a single 'block'. Together with the other 2 marbles, we have 3 items to arrange: 3! = 6 ways.",
      "Inside the block, S and T can be in 2 orders (ST or TS): 2! = 2 ways.",
      "Arrangements with S and T together: 6 × 2 = 12.",
      "Arrangements with S and T separated: 24 − 12 = 12.",
      "Answer: C (12)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Complementary counting for 'not next to' problems.",
    "tip": "When the restriction is 'not next to each other', count the total arrangements, subtract the arrangements where they ARE together (treat as a block).",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting to multiply by 2! for the order of S and T inside the block, or only counting the block arrangements without considering the 2 arrangements of S and T.",
    "reflection": "If Zara had 5 distinct marbles and wanted to keep 2 specific ones apart, how many arrangements would there be?",
    "alternative": "Place S and T in positions that are not adjacent. For 4 positions, S and T can be in positions (1,3), (1,4), or (2,4) — 3 position pairs, times 2 orders = 6. Then place A and B in the remaining 2 positions: 2! = 2. Total = 6 × 2 = 12.",
    "reviewedAt": "2026-10-21"
  },
  "2020-11": {
    "id": "2020-11",
    "year": 2020,
    "number": 11,
    "suggestedPace": "2 min",
    "title": "Speed from graph",
    "topic": "Rate · graph interpretation",
    "prompt": "After school, Maya and Naomi headed to the beach, 6 miles away. Maya decided to bike while Naomi took a bus. The graph below shows their journeys, indicating the time and distance traveled. What was the difference, in miles per hour, between Naomi's and Maya's average speeds?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 6, "label": "6" },
      { "letter": "B", "value": 12, "label": "12" },
      { "letter": "C", "value": 18, "label": "18" },
      { "letter": "D", "value": 20, "label": "20" },
      { "letter": "E", "value": 24, "label": "24" }
    ],
    "answer": 24,
    "answerLabel": "(E) 24",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_11",
    "hints": [
      "Read the time each person took from the graph. Naomi reaches 6 miles at 10 minutes. Maya reaches 6 miles at 30 minutes.",
      "Convert minutes to hours: 10 min = 1/6 hour, 30 min = 1/2 hour. Then use speed = distance / time.",
      "Naomi: 6 / (1/6) = 36 mph. Maya: 6 / (1/2) = 12 mph. The difference is 36 − 12 = 24 mph."
    ],
    "method": "Read the graph times, convert to hours, compute each speed, then subtract.",
    "score": 8,
    "ratingReason": "Reading data from a graph and converting units is a key AMC 8 skill. Two similar calculations make it straightforward.",
    "solution": [
      "Naomi reaches 6 miles at 10 minutes. 10 minutes = 10/60 = 1/6 hour. Her speed: 6 ÷ (1/6) = 36 mph.",
      "Maya reaches 6 miles at 30 minutes. 30 minutes = 1/2 hour. Her speed: 6 ÷ (1/2) = 12 mph.",
      "Difference: 36 − 12 = 24 mph.",
      "Answer: E (24)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Always convert time units before computing speed.",
    "tip": "When a problem gives time in minutes but asks for miles per hour, convert minutes to hours first (divide by 60).",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting to convert minutes to hours, or reading the wrong person's travel time from the graph.",
    "reflection": "If Maya had taken 20 minutes instead of 30, what would the difference in speeds be?",
    "alternative": "Naomi: 6 miles in 10 min = 6 × 6 = 36 mph. Maya: 6 miles in 30 min = 6 × 2 = 12 mph. Difference = 24 mph.",
    "reviewedAt": "2026-10-21"
  },
  "2020-12": {
    "id": "2020-12",
    "year": 2020,
    "number": 12,
    "suggestedPace": "1 min 30 sec",
    "title": "Factorial equation",
    "topic": "Algebra · factorials",
    "prompt": "For a positive integer n, the factorial notation n! represents the product of the integers from n to 1. What value of N satisfies the following equation?",
    "expression": "5! · 9! = 12 · N!",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 10, "label": "10" },
      { "letter": "B", "value": 11, "label": "11" },
      { "letter": "C", "value": 12, "label": "12" },
      { "letter": "D", "value": 13, "label": "13" },
      { "letter": "E", "value": 14, "label": "14" }
    ],
    "answer": 10,
    "answerLabel": "(A) 10",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_12",
    "hints": [
      "One side is a product of two factorials, the other is 12 times a factorial. Written out, 9! and 10! differ by a single factor.",
      "Rewrite 5! as 12 × 10, then slide that 10 next to the 9!. What single factorial does 10 × 9! turn into?",
      "The left side is now 12 times one factorial. Cancel the 12 from both sides, and the two factorials left have to be the same — so match their arguments."
    ],
    "method": "Expand 5! = 120 = 12 × 10, then rewrite as 12 × 10! to match the right side.",
    "score": 7,
    "ratingReason": "A clean factorial manipulation with a satisfying cancellation at the end.",
    "solution": [
      "5! = 5 × 4 × 3 × 2 × 1 = 120 = 12 × 10.",
      "So 5! × 9! = (12 × 10) × 9! = 12 × (10 × 9!) = 12 × 10!.",
      "The equation becomes 12 × 10! = 12 × N!.",
      "Cancel 12 on both sides: 10! = N!, so N = 10.",
      "Answer: A (10)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Look for ways to rewrite one factorial in terms of another.",
    "tip": "Remember that n! = n × (n−1)!. You can often rewrite a product as a single factorial by finding common factors.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Trying to compute 9! fully instead of using the factorial relationship to simplify.",
    "reflection": "What value of N satisfies 6! × 8! = 12 × N!?",
    "alternative": "5! = 120, so 120 × 9! = 12 × N!. Divide both sides by 12: 10 × 9! = N!. But 10 × 9! = 10!, so N = 10.",
    "reviewedAt": "2026-10-21"
  },
  "2020-13": {
    "id": "2020-13",
    "year": 2020,
    "number": 13,
    "suggestedPace": "2 min",
    "title": "Purple socks probability",
    "topic": "Probability · algebra",
    "prompt": "Jamal has a drawer containing 6 green socks, 18 purple socks, and 12 orange socks. After adding more purple socks, Jamal noticed that there is now a 60% chance that a sock randomly selected from the drawer is purple. How many purple socks did Jamal add?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 6, "label": "6" },
      { "letter": "B", "value": 9, "label": "9" },
      { "letter": "C", "value": 12, "label": "12" },
      { "letter": "D", "value": 18, "label": "18" },
      { "letter": "E", "value": 24, "label": "24" }
    ],
    "answer": 9,
    "answerLabel": "(B) 9",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_13",
    "hints": [
      "If Jamal adds x purple socks, he has 18 + x purple socks and 36 + x total socks.",
      "The probability is (18 + x) / (36 + x) = 60% = 3/5.",
      "Cross-multiply: 5(18 + x) = 3(36 + x) → 90 + 5x = 108 + 3x → 2x = 18 → x = 9."
    ],
    "method": "Set up a fraction for the new probability with the unknown x, then cross-multiply and solve.",
    "score": 8,
    "ratingReason": "A straightforward probability equation with a clean algebraic solution.",
    "solution": [
      "Jamal adds x purple socks. New count: 18 + x purple, total 6 + 18 + 12 + x = 36 + x.",
      "Probability = (18 + x) / (36 + x) = 3/5 (since 60% = 3/5).",
      "Cross-multiply: 5(18 + x) = 3(36 + x).",
      "90 + 5x = 108 + 3x → 2x = 18 → x = 9.",
      "Answer: B (9)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Convert percentages to fractions before solving.",
    "tip": "60% = 3/5. Using fractions often makes cross-multiplication cleaner than decimals.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting to add x to both the purple count AND the total count.",
    "reflection": "If Jamal had started with 10 green, 20 purple, and 15 orange socks, how many purple socks would he need to add for a 60% chance?",
    "alternative": "Test each answer choice: for x = 9, (18+9)/(36+9) = 27/45 = 3/5 = 60%. Only 9 works.",
    "reviewedAt": "2026-10-21"
  },
  "2020-14": {
    "id": "2020-14",
    "year": 2020,
    "number": 14,
    "suggestedPace": "1 min 30 sec",
    "title": "Average population from bar chart",
    "topic": "Data analysis · average",
    "prompt": "There are 20 cities in the County of Newton. Their populations are shown in the bar chart below. The average population of all the cities is indicated by the horizontal dashed line. Which of the following is closest to the total population of all 20 cities?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 65000, "label": "65,000" },
      { "letter": "B", "value": 75000, "label": "75,000" },
      { "letter": "C", "value": 85000, "label": "85,000" },
      { "letter": "D", "value": 95000, "label": "95,000" },
      { "letter": "E", "value": 105000, "label": "105,000" }
    ],
    "answer": 95000,
    "answerLabel": "(D) 95,000",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_14",
    "hints": [
      "The horizontal dashed line shows the average population. It's about halfway between 4,500 and 5,000.",
      "The average is approximately 4,750. There are 20 cities.",
      "Total population ≈ 4,750 × 20 = 95,000."
    ],
    "method": "Read the average from the dashed line, then multiply by the number of cities.",
    "score": 7,
    "ratingReason": "A simple data-reading question — read the average from the chart and multiply.",
    "solution": [
      "The dashed line is halfway between 4,500 and 5,000, so the average is about 4,750.",
      "Total population = average × number of cities = 4,750 × 20 = 95,000.",
      "Answer: D (95,000)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Use the average to find the total.",
    "tip": "Total = Average × Number of items. When a bar chart shows an average line, multiply it by the count.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Counting the bar values individually instead of using the average line.",
    "reflection": "If the dashed line were at 5,000 exactly, what would the total be?",
    "alternative": "The line is slightly below 5,000. 5,000 × 20 = 100,000, so the answer must be slightly less. 95,000 is the closest.",
    "reviewedAt": "2026-10-21"
  },
  "2020-15": {
    "id": "2020-15",
    "year": 2020,
    "number": 15,
    "suggestedPace": "1 min",
    "title": "Percentage relationship",
    "topic": "Percentages · algebra",
    "prompt": "Suppose 15% of x equals 20% of y. What percentage of x is y?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 5, "label": "5" },
      { "letter": "B", "value": 35, "label": "35" },
      { "letter": "C", "value": 75, "label": "75" },
      { "letter": "D", "value": "133 1/3", "label": "133 1/3" },
      { "letter": "E", "value": 300, "label": "300" }
    ],
    "answer": 75,
    "answerLabel": "(C) 75",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_15",
    "hints": [
      "One percent statement links two unknown numbers. The question asks only for a ratio between them, so their actual sizes never matter.",
      "Turn the sentence into an equation and solve it for y in terms of x. Because only a ratio is asked, the x will cancel itself out at the end.",
      "The equation says 15 parts of x equals 20 parts of y. Rearrange to y over x, simplify that fraction, and convert the fraction to a percent."
    ],
    "method": "Set up the equation, solve for y in terms of x, then convert to a percentage.",
    "score": 6,
    "ratingReason": "A fast percentage manipulation — convert the statement to an equation and solve.",
    "solution": [
      "15% of x = 20% of y means 0.15x = 0.20y.",
      "Divide both sides by 0.20: y = (0.15 / 0.20)x = 0.75x.",
      "0.75 = 75%, so y is 75% of x.",
      "Answer: C (75)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–6.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Let x = 100 to simplify percentage problems.",
    "tip": "When a problem asks 'what percentage of x is y?', assume x = 100 and solve for y directly.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Answering 'what percentage of y is x?' instead of 'what percentage of x is y?' — mixing up which is the base.",
    "reflection": "If 25% of x equals 10% of y, what percentage of x is y?",
    "alternative": "Let x = 100. Then 15% of 100 = 15, so 15 = 20% of y → y = 75. So y = 75% of x.",
    "reviewedAt": "2026-10-21"
  },
  "2020-16": {
    "id": "2020-16",
    "year": 2020,
    "number": 16,
    "suggestedPace": "2 min",
    "title": "Digit sum along lines",
    "topic": "Logic · algebra",
    "prompt": "Each of the points A, B, C, D, E, and F in the figure represents a different digit from 1 to 6. Each of the five lines shown passes through some of these points. The digits along each line are added to produce five sums, one for each line. The total of the five sums is 47. What is the digit represented by B?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 1, "label": "1" },
      { "letter": "B", "value": 2, "label": "2" },
      { "letter": "C", "value": 3, "label": "3" },
      { "letter": "D", "value": 4, "label": "4" },
      { "letter": "E", "value": 5, "label": "5" }
    ],
    "answer": 5,
    "answerLabel": "(E) 5",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_16",
    "hints": [
      "Write expressions for each line: A+B+C, A+E+F, C+D+E, B+D, B+F. Add them all up.",
      "The sum of all digits 1 through 6 is 21. The total 47 has each digit once except B which appears three times.",
      "2 × 21 + B = 47, so B = 5."
    ],
    "method": "Express each line sum, add them, substitute the sum of digits 1–6, solve for B.",
    "score": 8,
    "ratingReason": "A logical puzzle that requires tracking which digits appear on each line and setting up a system of equations.",
    "solution": [
      "Line sums: A+B+C, A+E+F, C+D+E, B+D, B+F.",
      "Total = (A+B+C)+(A+E+F)+(C+D+E)+(B+D)+(B+F) = 2A + 3B + 2C + 2D + 2E + 2F.",
      "= 2(A+B+C+D+E+F) + B = 2×21 + B = 42 + B = 47.",
      "So B = 5.",
      "Answer: E (5)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Count how many times each variable appears.",
    "tip": "When adding several expressions, count how many times each variable appears rather than adding term by term.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that B appears on three lines while others appear on one or two.",
    "reflection": "If the total were 45 instead of 47, what would B be?",
    "alternative": "Try each possible value for B (1 through 5). Only B = 5 makes the total odd and matches 47.",
    "reviewedAt": "2026-10-21"
  },
  "2020-17": {
    "id": "2020-17",
    "year": 2020,
    "number": 17,
    "suggestedPace": "1 min 30 sec",
    "title": "Factors of 2020",
    "topic": "Number theory · factors",
    "prompt": "How many positive integer factors of 2020 have more than 3 factors? (As an example, 12 has 6 factors, namely 1, 2, 3, 4, 6, and 12.)",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 6, "label": "6" },
      { "letter": "B", "value": 7, "label": "7" },
      { "letter": "C", "value": 8, "label": "8" },
      { "letter": "D", "value": 9, "label": "9" },
      { "letter": "E", "value": 10, "label": "10" }
    ],
    "answer": 7,
    "answerLabel": "(B) 7",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_17",
    "hints": [
      "How many factors a number has depends only on its prime factorization — not on the factors themselves. What does 2020 break into?",
      "Once the primes are known, how many factors 2020 has in total is a formula, and the question only asks how many of those are themselves big. Decide what counts as small first — it is a much shorter list.",
      "Factor 2020 completely, count the total number of factors, then count how many of them have three or fewer factors of their own and subtract. The short list is one number, one prime, and the product of two primes."
    ],
    "method": "List the factors of 2020, count how many have 1–3 factors, then subtract.",
    "score": 7,
    "ratingReason": "A straightforward factor-listing problem once you prime factorize 2020 correctly.",
    "solution": [
      "2020 = 2² × 5 × 101, so its factors are: 1, 2, 4, 5, 10, 20, 101, 202, 404, 505, 1010, 2020.",
      "Factors with ≤3 factors: 1 (1 factor), 2 (2 factors), 4 (3 factors), 5 (2 factors), 101 (2 factors). That's 5 numbers.",
      "Total factors = (2+1)(1+1)(1+1) = 12. 12 − 5 = 7 factors have more than 3 factors.",
      "Answer: B (7)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Use the factor-count formula.",
    "tip": "If n = p^a × q^b × r^c, the number of factors is (a+1)(b+1)(c+1). For 2020, that's (2+1)(1+1)(1+1) = 12.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting to include 1 and 2020 in the factor list, or miscounting which factors have ≤3 factors.",
    "reflection": "How many factors of 2020 are prime numbers?",
    "alternative": "Count factors with 4+ factors directly: 10 (4 factors), 20 (6), 202 (4), 404 (6), 505 (4), 1010 (8), 2020 (12). That's 7.",
    "reviewedAt": "2026-10-21"
  },
  "2020-18": {
    "id": "2020-18",
    "year": 2020,
    "number": 18,
    "suggestedPace": "2 min",
    "title": "Rectangle in semicircle",
    "topic": "Geometry · Pythagorean theorem",
    "prompt": "Rectangle ABCD is inscribed in a semicircle with diameter FE, as shown in the figure. Let DA = 16, and let FD = AE = 9. What is the area of ABCD?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 240, "label": "240" },
      { "letter": "B", "value": 248, "label": "248" },
      { "letter": "C", "value": 256, "label": "256" },
      { "letter": "D", "value": 264, "label": "264" },
      { "letter": "E", "value": 272, "label": "272" }
    ],
    "answer": 240,
    "answerLabel": "(A) 240",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_18",
    "hints": [
      "The rectangle sits inside a semicircle, so some of its corners lie on the arc. Which segment is a diameter, and which corner touches the curve?",
      "Let O be the center. O is the midpoint of DA, so OD = OA = 8.",
      "In right triangle ODC, OC = 17, OD = 8, so CD = √(17² − 8²) = 15. Area = 16 × 15."
    ],
    "method": "Find the radius, use the Pythagorean theorem to find the rectangle height, then compute area.",
    "score": 9,
    "ratingReason": "A classic geometry problem combining semicircle properties with the Pythagorean theorem.",
    "solution": [
      "Diameter FE = 9 + 16 + 9 = 34, so radius OC = 17.",
      "O is the midpoint of DA, so OD = OA = 8.",
      "In right triangle ODC: OC² = OD² + CD² → 17² = 8² + CD² → 289 = 64 + CD² → CD² = 225 → CD = 15.",
      "Area of ABCD = DA × CD = 16 × 15 = 240.",
      "Answer: A (240)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1 (Pythagorean Theorem).",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Draw the radius to form a right triangle.",
    "tip": "In circle problems, connect the center to a point on the circumference to create a right triangle with the rectangle side.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Using FD = AE = 9 as the radius or forgetting that O is the midpoint of DA.",
    "reflection": "If FD = AE = 7 instead of 9, what would the area be?",
    "alternative": "Use coordinate geometry: O = (0,0), D = (−8,0), A = (8,0). Circle: x² + y² = 289. B = (8, y) → y = 15. Area = 16 × 15 = 240.",
    "reviewedAt": "2026-10-21"
  },
  "2020-19": {
    "id": "2020-19",
    "year": 2020,
    "number": 19,
    "suggestedPace": "2 min",
    "title": "Flippy numbers",
    "topic": "Number theory · divisibility",
    "prompt": "A number is called flippy if its digits alternate between two distinct digits. For example, 2020 and 37373 are flippy, but 3883 and 123123 are not. How many five-digit flippy numbers are divisible by 15?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 3, "label": "3" },
      { "letter": "B", "value": 4, "label": "4" },
      { "letter": "C", "value": 5, "label": "5" },
      { "letter": "D", "value": 6, "label": "6" },
      { "letter": "E", "value": 8, "label": "8" }
    ],
    "answer": 4,
    "answerLabel": "(B) 4",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_19",
    "hints": [
      "Divisible by 15 means divisible by both 3 and 5. For 5, the last digit must be 0 or 5.",
      "A five-digit flippy number has the form ababa. If last digit is 0, first digit is 0 — impossible. So last digit must be 5, giving 5x5x5.",
      "For divisibility by 3: 5 + x + 5 + x + 5 = 15 + 2x must be divisible by 3. Since 15 is divisible by 3, 2x must be divisible by 3."
    ],
    "method": "Apply divisibility rules for 3 and 5 to the flippy number format.",
    "score": 8,
    "ratingReason": "A clever combination of digit pattern reasoning with divisibility rules — requires careful step-by-step thinking.",
    "solution": [
      "A flippy five-digit number has the form ababa where a and b are distinct digits.",
      "Divisible by 5 means last digit is 0 or 5. If a = 0, first digit is 0 — impossible. So a = 5: number is 5b5b5.",
      "Divisible by 3 means digit sum is multiple of 3: 5 + b + 5 + b + 5 = 15 + 2b ≡ 0 (mod 3). Since 15 ≡ 0 (mod 3), 2b ≡ 0 (mod 3).",
      "So b must be a multiple of 3: b = 0, 3, 6, or 9 (but b ≠ 5 since digits must be distinct).",
      "That gives 4 numbers: 50505, 53535, 56565, 59595.",
      "Answer: B (4)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Break divisibility by 15 into 3 and 5.",
    "tip": "15 = 3 × 5, so check each condition separately. The digit-pattern constraint then narrows the options.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that the two digits must be distinct, or allowing 50505 where the digits are 5 and 0 (distinct is OK).",
    "reflection": "How many six-digit flippy numbers are divisible by 15?",
    "alternative": "List all flippy five-digit numbers (9 × 9 = 81 possibilities) and test divisibility by 15. Only 4 pass.",
    "reviewedAt": "2026-10-21"
  },
  "2020-20": {
    "id": "2020-20",
    "year": 2020,
    "number": 20,
    "suggestedPace": "2 min",
    "title": "Tree heights puzzle",
    "topic": "Logic · averages",
    "prompt": "A scientist walking through a forest recorded as integers the heights of 5 trees standing in a row. She observed that each tree was either twice as tall or half as tall as the one to its right. Unfortunately some of her data was lost when rain fell on her notebook. Her notes show: Tree 1: ___ meters, Tree 2: 11 meters, Tree 3: ___ meters, Tree 4: ___ meters, Tree 5: ___ meters, Average height: ___.2 meters. Based on her observations, the scientist was able to reconstruct the lost data. What was the average height of the trees, in meters?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 22.2, "label": "22.2" },
      { "letter": "B", "value": 24.2, "label": "24.2" },
      { "letter": "C", "value": 33.2, "label": "33.2" },
      { "letter": "D", "value": 35.2, "label": "35.2" },
      { "letter": "E", "value": 37.2, "label": "37.2" }
    ],
    "answer": 24.2,
    "answerLabel": "(B) 24.2",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_20",
    "hints": [
      "Each tree is exactly twice or exactly half its neighbour, and every height is a whole number. Start from the height you were given and follow the rule.",
      "Similarly, Tree 3 relates to Tree 2: must be integer, so Tree 3 = 22.",
      "Now test possible integer pairs for Trees 4 and 5 (each is twice or half its neighbor). The average ends in .2, so the sum ends in 1."
    ],
    "method": "Use integer constraints and the average clue to deduce the only possible sequence.",
    "score": 9,
    "ratingReason": "A logic puzzle that combines integer constraints with a decimal average clue — satisfying to solve.",
    "solution": [
      "Tree 1 must be integer: 2 × 11 = 22 (11/2 = 5.5 not integer). Tree 3 also = 22.",
      "Trees 4 and 5: possible integer pairs (from Tree 3 = 22) are (11,22), (44,88), or (44,22).",
      "Sum for (11,22): 22+11+22+11+22 = 88, avg = 17.6 — doesn't end in .2.",
      "Sum for (44,88): 22+11+22+44+88 = 187, avg = 37.4 — doesn't end in .2.",
      "Sum for (44,22): 22+11+22+44+22 = 121, avg = 24.2 — matches!",
      "Answer: B (24.2)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Use the integer clue to narrow possibilities.",
    "tip": "When a problem says heights are integers, half of an odd number is not an option — that eliminates many branches immediately.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that Tree 1 and Tree 3 must each relate to Tree 2, not to each other.",
    "reflection": "If Tree 2 were 12 meters instead of 11, what would the average be?",
    "alternative": "The sum must end in 1 (since avg × 5 = sum, .2 × 5 = 1). Trees 1-3 sum to 55, so Trees 4+5 must sum to a number ending in 6. Only 44+22 = 66 works.",
    "reviewedAt": "2026-10-21"
  },
  "2020-21": {
    "id": "2020-21",
    "year": 2020,
    "number": 21,
    "suggestedPace": "2 min",
    "title": "Paths on a chessboard",
    "topic": "Combinatorics · Pascal's triangle",
    "prompt": "A game board consists of 64 squares that alternate in color between black and white. The figure below shows square P in the bottom row and square Q in the top row. A marker is placed at P. A step consists of moving the marker onto one of the adjoining white squares in the row above. How many 7-step paths are there from P to Q? (The figure shows a sample path.)",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 28, "label": "28" },
      { "letter": "B", "value": 30, "label": "30" },
      { "letter": "C", "value": 32, "label": "32" },
      { "letter": "D", "value": 33, "label": "33" },
      { "letter": "E", "value": 35, "label": "35" }
    ],
    "answer": 28,
    "answerLabel": "(A) 28",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_21",
    "hints": [
      "Each move goes up one row and one column left or right. You can only land on white squares.",
      "Build the number of paths row by row from P: each white square's count is the sum of the counts from the two white squares directly below it.",
      "Draw the 8×8 board and label each reachable white square with the path count. The number at Q is the answer."
    ],
    "method": "Use Pascal's triangle (the Waterfall method) to count paths row by row.",
    "score": 8,
    "ratingReason": "A classic lattice-path problem that builds Pascal's triangle on a chessboard — satisfying once you see the pattern.",
    "solution": [
      "P is in bottom row, Q in top row. From any white square, you move up-left or up-right to an adjoining white square.",
      "Row 1 (bottom): only P, count = 1.",
      "Row 2: two white squares above P, each count = 1.",
      "Row 3: white squares get counts 1, 2, 1 (left→middle→right; middle sums from two below).",
      "Continue upward: row 4: 1, 3, 3, 1; row 5: 4, 6, 4; row 6: 10, 9; row 7: 19, 9; row 8 (Q): 28.",
      "Answer: A (28)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Sum the two squares below each white square.",
    "tip": "The count at any reachable white square equals the sum of the counts from the two white squares directly below it. This builds Pascal's triangle row by row.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that the marker can only land on white squares, or miscounting the starting position.",
    "reflection": "How many paths would there be on a 9×9 board from bottom-left to top-right corner?",
    "alternative": "The total number of sequences of 4 right and 3 left moves is C(7,3) = 35. Subtract the 7 paths that go off the board edge, leaving 28.",
    "reviewedAt": "2026-10-22"
  },
  "2020-22": {
    "id": "2020-22",
    "year": 2020,
    "number": 22,
    "suggestedPace": "2 min 30 sec",
    "title": "Integer machine (Collatz)",
    "topic": "Number theory · working backwards",
    "prompt": "When a positive integer N is fed into a machine, the output is a number calculated according to the rule: if N is even, output N/2; if N is odd, output 3N+1. For example, starting with N=7, the machine outputs 3·7+1=22. Then if the output is repeatedly inserted into the machine five more times, the final output is 26. When the same 6-step process is applied to a different starting value of N, the final output is 1. What is the sum of all such integers N?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 73, "label": "73" },
      { "letter": "B", "value": 74, "label": "74" },
      { "letter": "C", "value": 75, "label": "75" },
      { "letter": "D", "value": 82, "label": "82" },
      { "letter": "E", "value": 83, "label": "83" }
    ],
    "answer": 83,
    "answerLabel": "(E) 83",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_22",
    "hints": [
      "The machine is easy to run forwards and awkward to undo. The value at the end is tiny — which direction is worth running it?",
      "Start from final output 1. Only the 'even' inverse works: 2×1 = 2. Continue building backwards step by step.",
      "At each step, both inverse rules may produce valid integers. Branch out like a tree, keeping only positive integers."
    ],
    "method": "Work backwards from 1 using the inverse rules, branching at each step where both produce integers.",
    "score": 9,
    "ratingReason": "A rewarding reverse-engineering puzzle based on the Collatz conjecture — requires careful branching and checking.",
    "solution": [
      "Working backwards from 1: 1 → 2 (only even inverse works: 2×1=2).",
      "2 → 4 (2×2=4; (2−1)/3 not integer).",
      "4 → 8 (2×4=8) or 1 ((4−1)/3=1).",
      "If 4→1, then 1→2→4→8 or 1. So N could be 8 or 1.",
      "If 4→8, then 8→16 (2×8=16; (8−1)/3 not integer).",
      "16→32 (2×16=32) or 5 ((16−1)/3=5).",
      "32→64 (2×32=64; (32−1)/3 not integer). 5→10 (2×5=10; (5−1)/3 not integer).",
      "Possible N: 1, 8, 10, 64. Sum = 1+8+10+64 = 83.",
      "Answer: E (83)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Reverse the machine and branch at every fork.",
    "tip": "The inverse of N/2 is 2O. The inverse of 3N+1 is (O−1)/3. Apply both at each step and keep only the positive integer results.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that the 'odd' inverse (O−1)/3 must produce an integer — fractional results are invalid.",
    "reflection": "How many starting values N give final output 1 after 7 steps instead of 6?",
    "alternative": "Build a tree diagram from 1 backwards. The leaves at depth 6 are 1, 8, 10, 64. Sum = 83.",
    "reviewedAt": "2026-10-22"
  },
  "2020-23": {
    "id": "2020-23",
    "year": 2020,
    "number": 23,
    "suggestedPace": "2 min 30 sec",
    "title": "Award distribution",
    "topic": "Combinatorics · counting cases",
    "prompt": "Five different awards are to be given to three students. Each student will receive at least one award. In how many different ways can the awards be distributed?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 120, "label": "120" },
      { "letter": "B", "value": 150, "label": "150" },
      { "letter": "C", "value": 180, "label": "180" },
      { "letter": "D", "value": 210, "label": "210" },
      { "letter": "E", "value": 240, "label": "240" }
    ],
    "answer": 150,
    "answerLabel": "(B) 150",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_23",
    "hints": [
      "Each student gets at least 1 award. With 5 awards and 3 students, the possible distributions are (3,1,1) or (2,2,1).",
      "Case 1 (3,1,1): pick which student gets 3, which 3 awards they get, then distribute the remaining 2 awards to 2 students.",
      "Case 2 (2,2,1): pick which student gets 1, which award they get, then pick 2 awards for one of the remaining students."
    ],
    "method": "Break into two cases based on how many awards each student receives, count each case separately, then add.",
    "score": 8,
    "ratingReason": "A combinatorial counting problem that requires careful casework — not too hard once you find the two distribution patterns.",
    "solution": [
      "Only two possible patterns: (3,1,1) or (2,2,1) awards per student.",
      "Case (3,1,1): 3 choices for who gets 3 awards. C(5,3)=10 ways to choose those 3 awards. Remaining 2 awards to 2 students: 2 ways. Total: 3×10×2 = 60.",
      "Case (2,2,1): 3 choices for who gets 1 award. 5 choices for which award. C(4,2)=6 ways to give 2 awards to next student. Last student gets remaining 2: 1 way. Total: 3×5×6×1 = 90.",
      "Total: 60 + 90 = 150.",
      "Answer: B (150)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Break into distribution patterns first.",
    "tip": "With 5 awards and 3 students (each ≥1), the only possible splits are 3-1-1 and 2-2-1. Solve each case separately.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that awards are distinct (not identical), so combinations like C(5,3) count which specific awards, not just how many.",
    "reflection": "How many ways if there are 6 awards and 3 students, each getting at least 1?",
    "alternative": "Total without restriction = 3^5 = 243. Subtract cases where a student gets 0: 3×2^5 - 3×1^5 = 96-3 = 93. 243-93 = 150.",
    "reviewedAt": "2026-10-22"
  },
  "2020-24": {
    "id": "2020-24",
    "year": 2020,
    "number": 24,
    "suggestedPace": "2 min 30 sec",
    "title": "Tiles and borders",
    "topic": "Algebra · area ratio",
    "prompt": "A large square region is paved with n² gray square tiles, each measuring s inches on a side. A border d inches wide surrounds each tile. The figure below shows the case for n=3. When n=24, the 576 gray tiles cover 64% of the area of the large square region. What is the ratio d/s for this larger value of n?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": "6/25", "label": "6/25" },
      { "letter": "B", "value": "1/4", "label": "1/4" },
      { "letter": "C", "value": "9/25", "label": "9/25" },
      { "letter": "D", "value": "7/16", "label": "7/16" },
      { "letter": "E", "value": "9/16", "label": "9/16" }
    ],
    "answer": "6/25",
    "answerLabel": "(A) 6/25",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_24",
    "hints": [
      "A big square is filled with grey tiles separated by white gaps of a fixed width. Can you write the side of the big square using just those two lengths?",
      "One side of the big square is 24 tiles plus the 25 gaps between and around them. Length and width are the same, so the square's area can be written twice and set equal.",
      "The grey region is one big square of side 24s, and the whole region is a square of side 24s + 25d. Their areas are in the ratio 64 to 100, so take the square root to get the ratio of the sides, then solve for d over s."
    ],
    "method": "Set up the area ratio equation, take the square root, and solve for d/s.",
    "score": 9,
    "ratingReason": "A satisfying algebra problem that combines geometry with percentage ratios — the key insight is counting the 25 border gaps correctly.",
    "solution": [
      "Large square side = tile total + border total = 24s + 25d (24 tiles + 25 borders, since there are 23 gaps between tiles plus 2 edges).",
      "Area ratio: (24s)² / (24s+25d)² = 64/100 = 16/25.",
      "Take square root (positive): 24s/(24s+25d) = 4/5.",
      "Cross-multiply: 120s = 96s + 100d → 24s = 100d → d/s = 24/100 = 6/25.",
      "Answer: A (6/25)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Count the border gaps: n tiles → n+1 gaps.",
    "tip": "With n tiles in a row, there are n+1 border-width gaps (n-1 between tiles, plus left and right edges). For n=24, that's 25 gaps.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Counting only 23 border gaps (between tiles) and forgetting the outer edges, giving 24s+23d instead of 24s+25d.",
    "reflection": "If n=24 and the gray tiles covered 49% instead of 64%, what would d/s be?",
    "alternative": "Let s=1. Tile area = 576, so large square area = 576/0.64 = 900. Side = 30. Then d = (30-24)/25 = 6/25.",
    "reviewedAt": "2026-10-22"
  },
  "2020-25": {
    "id": "2020-25",
    "year": 2020,
    "number": 25,
    "suggestedPace": "2 min",
    "title": "Rectangle of squares and rectangles",
    "topic": "Algebra · system of equations",
    "prompt": "Rectangles R₁ and R₂ and squares S₁, S₂, and S₃, shown below, combine to form a rectangle that is 3322 units wide and 2020 units high. What is the side length of S₂ in units?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 651, "label": "651" },
      { "letter": "B", "value": 655, "label": "655" },
      { "letter": "C", "value": 656, "label": "656" },
      { "letter": "D", "value": 662, "label": "662" },
      { "letter": "E", "value": 666, "label": "666" }
    ],
    "answer": 651,
    "answerLabel": "(A) 651",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2020_AMC_8_Problems/Problem_25",
    "hints": [
      "Let s = side of S₂. Label the short side of R₁ and R₂ as r. Then S₁ and S₃ each have side s+r.",
      "Top width: S₁ + S₂ + S₃ = (s+r) + s + (s+r) = 3s + 2r = 3322.",
      "Left height: short side of R₂ + S₃ = r + (s+r) = s + 2r = 2020."
    ],
    "method": "Set up a system of two equations from the width and height, then subtract to find s.",
    "score": 8,
    "ratingReason": "A satisfying geometry-algebra mashup where the right variable choices make the system solve cleanly.",
    "solution": [
      "Let s = side of S₂. Let r = short side of R₁ (and R₂). Then S₁ and S₃ each have side s+r.",
      "Width: S₁ + S₂ + S₃ = (s+r) + s + (s+r) = 3s + 2r = 3322.",
      "Height: r (short side of R₂) + (s+r) (side of S₃) = s + 2r = 2020.",
      "Subtract the height equation from the width: (3s+2r) − (s+2r) = 3322 − 2020 → 2s = 1302 → s = 651.",
      "Answer: A (651)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–5.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Label the shared side lengths as variables.",
    "tip": "The rectangles share their long sides with the squares. Let s = S₂'s side and r = R₁'s short side. Then S₁ and S₃ are each s+r wide.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Getting confused by the diagram layout and missing that S₁ and S₃ are both squares with the same side length s+r.",
    "reflection": "If the large rectangle were 3000 wide and 1800 high, what would s be?",
    "alternative": "From the two equations, (width + height) / 2 = (3322+2020)/2 = 2671. Then width − height = 1302. Since the difference is 2s, s = 651.",
    "reviewedAt": "2026-10-22"
  },
  "2025-1": {
    "id": "2025-1",
    "year": 2025,
    "number": 1,
    "suggestedPace": "1 min",
    "title": "Eight-pointed star",
    "topic": "Geometry · area · percentages",
    "prompt": "The eight-pointed star, shown in the figure below, is a popular quilting pattern. What percent of the entire 4×4 grid is covered by the star?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-1.png",
    "options": [
      { "letter": "A", "value": 40, "label": "40" },
      { "letter": "B", "value": 50, "label": "50" },
      { "letter": "C", "value": 60, "label": "60" },
      { "letter": "D", "value": 75, "label": "75" },
      { "letter": "E", "value": 80, "label": "80" }
    ],
    "answer": 50,
    "answerLabel": "(B) 50",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_1",
    "hints": [
      "The grid is 4×4 and the star slices some squares in half. Rather than measure the star, ask what fraction of one square it takes.",
      "Count what the star takes from each kind of square: the squares it covers whole, and the squares it cuts in half. Every square falls into one of the two groups.",
      "Add the whole squares and half of the halved ones. Compare that total to the 16 squares in the grid and convert the ratio to a percent — no measuring needed."
    ],
    "method": "Count shaded area in unit squares, divide by total area, convert to percent.",
    "score": 8,
    "ratingReason": "A visual area problem that rewards counting triangles as halves of unit squares.",
    "solution": [
      "Total area of the 4×4 grid: 4 × 4 = 16 unit squares.",
      "The star covers 4 full unit squares in the center.",
      "There are 8 half-shaded triangles around the star. Each is ½ of a unit square: 8 × ½ = 4 unit squares.",
      "Total shaded area: 4 + 4 = 8 unit squares.",
      "Percentage: 8/16 = 1/2 = 50%.",
      "Answer: B (50)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–6.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Count in unit squares, not shapes.",
    "tip": "Convert every shaded piece to unit squares before comparing to the total. Half-triangles pair up to form whole squares.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Counting the half-triangles as full squares, giving 12/16 = 75%.",
    "reflection": "If the grid were 6×6 with the same pattern, would the percentage stay the same?",
    "alternative": "Each of the 16 unit squares is divided into 2 triangles (32 total). Count shaded triangles: 16 shaded out of 32 = 50%.",
    "reviewedAt": "2026-10-22"
  },
  "2025-2": {
    "id": "2025-2",
    "year": 2025,
    "number": 2,
    "suggestedPace": "1 min",
    "title": "Egyptian hieroglyphs",
    "topic": "Number representation · place value",
    "prompt": "The table below shows Ancient Egyptian hieroglyphs used to represent different numbers. For example, the number 32 was represented by ∩∩∩ || (three heel-bone symbols worth 10 each, plus two stroke symbols worth 1 each). What number is represented by the combination shown?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-2.png",
    "options": [
      { "letter": "A", "value": 1423, "label": "1,423" },
      { "letter": "B", "value": 10423, "label": "10,423" },
      { "letter": "C", "value": 14023, "label": "14,023" },
      { "letter": "D", "value": 14203, "label": "14,203" },
      { "letter": "E", "value": 14230, "label": "14,230" }
    ],
    "answer": 10423,
    "answerLabel": "(B) 10,423",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_2",
    "hints": [
      "Look at the number of each symbol type in the picture. Start with the largest place value.",
      "The first symbol is the bent-finger sign worth 10,000. Then count the coiled ropes, heel bones, and strokes.",
      "Add them up: 10,000 + (number of ropes × 100) + (number of heel bones × 10) + (number of strokes × 1)."
    ],
    "method": "Identify each hieroglyph's value, multiply by count, sum all values.",
    "score": 7,
    "ratingReason": "A straightforward place-value exercise wrapped in an engaging historical context.",
    "solution": [
      "1 bent-finger sign = 1 × 10,000 = 10,000. (The table lists it as 10,000; the lotus sign is only 1,000 and does not appear here.)",
      "4 coiled ropes = 4 × 100 = 400.",
      "2 heel bones = 2 × 10 = 20.",
      "3 strokes = 3 × 1 = 3.",
      "Total: 10,000 + 400 + 20 + 3 = 10,423.",
      "Answer: B (10,423)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Group symbols by type before adding.",
    "tip": "Count how many of each symbol appear, multiply by its value, then add. This prevents missing or double-counting a symbol.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Missing the zero in the thousands place and picking 14,023 or 14,203.",
    "reflection": "What symbol would you need to add to make the number 14,423?",
    "alternative": "Notice there are no thousands-place symbols, so the thousands digit is 0. Only one option (10,423) has 0 in the thousands place.",
    "reviewedAt": "2026-10-22"
  },
  "2025-3": {
    "id": "2025-3",
    "year": 2025,
    "number": 3,
    "suggestedPace": "1 min",
    "title": "Buffalo Shuffle-o cards",
    "topic": "Arithmetic · division",
    "prompt": "Buffalo Shuffle-o is a card game in which all the cards are distributed evenly among all players at the start of the game. When Annika and 3 of her friends play Buffalo Shuffle-o, each player is dealt 15 cards. Suppose 2 more friends join the next game. How many cards will be dealt to each player?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 8, "label": "8" },
      { "letter": "B", "value": 9, "label": "9" },
      { "letter": "C", "value": 10, "label": "10" },
      { "letter": "D", "value": 11, "label": "11" },
      { "letter": "E", "value": 12, "label": "12" }
    ],
    "answer": 10,
    "answerLabel": "(C) 10",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_3",
    "hints": [
      "Start by finding the total number of cards. How many players are there in the first game?",
      "Annika + 3 friends = 4 players, each with 15 cards. So total cards = 4 × 15 = ?",
      "Now 2 more friends join: 4 + 2 = 6 players. Divide the total cards evenly: 60 ÷ 6 = ?"
    ],
    "method": "Find total cards from first game, divide by new number of players.",
    "score": 7,
    "ratingReason": "A clean two-step arithmetic problem: multiply then divide.",
    "solution": [
      "First game: Annika + 3 friends = 4 players.",
      "Total cards: 4 × 15 = 60 cards.",
      "Second game: 4 + 2 = 6 players.",
      "Cards per player: 60 ÷ 6 = 10.",
      "Answer: C (10)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Total first, then share again.",
    "tip": "The total number of cards doesn't change when new players join. Find the total first, then divide by the new number of players.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Dividing 15 by 2 and adding to 15, or dividing 15 by the new number of players without finding the total.",
    "reflection": "If 3 more friends joined instead of 2, how many cards would each player get?",
    "alternative": "The total cards stay 60. For 6 players: 60/6 = 10. Check: 60/6 = 60 ÷ 2 ÷ 3 = 30 ÷ 3 = 10.",
    "reviewedAt": "2026-10-22"
  },
  "2025-4": {
    "id": "2025-4",
    "year": 2025,
    "number": 4,
    "suggestedPace": "1 min",
    "title": "Counting backward by 7s",
    "topic": "Arithmetic sequences",
    "prompt": "Lucius is counting backward by 7s. His first three numbers are 100, 93, and 86. What is his 10th number?",
    "wording": "original",
    "options": [
      { "letter": "A", "value": 30, "label": "30" },
      { "letter": "B", "value": 37, "label": "37" },
      { "letter": "C", "value": 42, "label": "42" },
      { "letter": "D", "value": 44, "label": "44" },
      { "letter": "E", "value": 47, "label": "47" }
    ],
    "answer": 37,
    "answerLabel": "(B) 37",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_4",
    "hints": [
      "What is the common difference? Each step subtracts how much?",
      "From the 1st number to the 10th number, how many steps of -7 are taken?",
      "The formula: 10th term = 1st term − 7 × (10 − 1)."
    ],
    "method": "Use arithmetic sequence formula: nth term = a + (n−1)d with d = −7.",
    "score": 7,
    "ratingReason": "A direct application of the arithmetic sequence formula or simple counting.",
    "solution": [
      "First term a = 100, common difference d = −7.",
      "10th term = a + (10 − 1) × d = 100 + 9 × (−7).",
      "9 × 7 = 63, so 100 − 63 = 37.",
      "Answer: B (37)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–5.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Count the steps, not the numbers.",
    "tip": "From the 1st to the 10th term there are 9 steps, not 10. The nth term formula subtracts 7×(n−1).",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Subtracting 10 × 7 = 70 instead of 9 × 7 = 63, giving 30.",
    "reflection": "If Lucius continued to the 20th number, what would it be?",
    "alternative": "List the terms: 100, 93, 86, 79, 72, 65, 58, 51, 44, 37. The 10th is 37.",
    "reviewedAt": "2026-10-22"
  },
  "2025-5": {
    "id": "2025-5",
    "year": 2025,
    "number": 5,
    "suggestedPace": "1 min 30 sec",
    "title": "Betty's delivery route",
    "topic": "Geometry · grid paths · Manhattan distance",
    "prompt": "Betty drives a truck to deliver packages in a neighborhood with a grid of streets. She starts at the factory (F), drives to location A, then B, then C, before returning to F. The coordinates on the grid are: F(6,5), A(7,3), B(0,0), C(2,4). What is the shortest distance, in blocks, she can drive to complete the route?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-5.png",
    "options": [
      { "letter": "A", "value": 20, "label": "20" },
      { "letter": "B", "value": 22, "label": "22" },
      { "letter": "C", "value": 24, "label": "24" },
      { "letter": "D", "value": 26, "label": "26" },
      { "letter": "E", "value": 28, "label": "28" }
    ],
    "answer": 24,
    "answerLabel": "(C) 24",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_5",
    "hints": [
      "On a grid, the shortest path between two points is the sum of the horizontal and vertical distances (Manhattan distance).",
      "Find the distance for each leg: |x₁−x₂| + |y₁−y₂|.",
      "Compute F→A, A→B, B→C, C→F, then add them all up."
    ],
    "method": "Sum Manhattan distances between consecutive points on the route.",
    "score": 8,
    "ratingReason": "A grid-path problem that requires adding four Manhattan distances without getting lost in the diagram.",
    "solution": [
      "F(6,5) to A(7,3): |6−7| + |5−3| = 1 + 2 = 3 blocks.",
      "A(7,3) to B(0,0): |7−0| + |3−0| = 7 + 3 = 10 blocks.",
      "B(0,0) to C(2,4): |0−2| + |0−4| = 2 + 4 = 6 blocks.",
      "C(2,4) to F(6,5): |2−6| + |4−5| = 4 + 1 = 5 blocks.",
      "Total: 3 + 10 + 6 + 5 = 24 blocks.",
      "Answer: C (24)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Manhattan distance = |Δx| + |Δy|.",
    "tip": "On a grid you can only move horizontally and vertically. The shortest path between two points is the absolute difference in x plus the absolute difference in y.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Finding the straight-line (Euclidean) distance instead of the grid distance.",
    "reflection": "If Betty had to visit A, B, and C in a different order, would the total distance change?",
    "alternative": "Trace the route on the grid counting blocks: F→A goes right 1, down 2 = 3; A→B goes left 7, down 3 = 10; etc.",
    "reviewedAt": "2026-10-22"
  },
  "2025-6": {
    "id": "2025-6",
    "year": 2025,
    "number": 6,
    "suggestedPace": "1 min 30 sec",
    "title": "Sekou's erased number",
    "topic": "Number theory · multiples · remainders",
    "prompt": "Sekou writes the numbers 15, 16, 17, 18, 19. After he erases one of his numbers, the sum of the remaining four numbers is a multiple of 4. Which number did he erase?",
    "wording": "restated",
    "options": [
      { "letter": "A", "value": 15, "label": "15" },
      { "letter": "B", "value": 16, "label": "16" },
      { "letter": "C", "value": 17, "label": "17" },
      { "letter": "D", "value": 18, "label": "18" },
      { "letter": "E", "value": 19, "label": "19" }
    ],
    "answer": 17,
    "answerLabel": "(C) 17",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_6",
    "hints": [
      "Find the total sum of all five numbers first.",
      "85 is 1 more than a multiple of 4. What number must you remove so the remainder is a multiple of 4?",
      "The removed number itself must be 1 more than a multiple of 4."
    ],
    "method": "Sum all five numbers, then find which one to subtract so the result is a multiple of 4.",
    "score": 7,
    "ratingReason": "A simple divisibility check disguised as a sum puzzle. Good practice for modulo reasoning.",
    "solution": [
      "Sum of all five: 15 + 16 + 17 + 18 + 19 = 85.",
      "85 ÷ 4 = 21 remainder 1, so 85 ≡ 1 (mod 4).",
      "We need the remaining sum ≡ 0 (mod 4), so the erased number must be ≡ 1 (mod 4).",
      "Check each: 15 ≡ 3, 16 ≡ 0, 17 ≡ 1, 18 ≡ 2, 19 ≡ 3 (mod 4).",
      "Only 17 is ≡ 1 (mod 4).",
      "Answer: C (17)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–7.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Modulo 4 shortcut: check remainders.",
    "tip": "A number's remainder when divided by 4 is just its last two digits divided by 4 (or its last digit for small numbers).",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Checking the sum after erasing each number manually instead of using modular arithmetic.",
    "reflection": "If the numbers were 14, 15, 16, 17, 18 instead, which one would you erase?",
    "alternative": "Try each: 85−15=70 (not multiple of 4), 85−16=69, 85−17=68 ✓, 85−18=67, 85−19=66. Only 68 is divisible by 4.",
    "reviewedAt": "2026-10-24"
  },
  "2025-7": {
    "id": "2025-7",
    "year": 2025,
    "number": 7,
    "suggestedPace": "1 min 30 sec",
    "title": "Prof. Xochi's exam scores",
    "topic": "Statistics · sets · Venn-like reasoning",
    "prompt": "On the most recent exam in Prof. Xochi's class:\n- 5 students earned a score of at least 95%,\n- 13 students earned a score of at least 90%,\n- 27 students earned a score of at least 85%,\n- 50 students earned a score of at least 80%.\nHow many students earned a score of at least 80% and less than 90%?",
    "wording": "restated",
    "options": [
      { "letter": "A", "value": 8, "label": "8" },
      { "letter": "B", "value": 14, "label": "14" },
      { "letter": "C", "value": 22, "label": "22" },
      { "letter": "D", "value": 37, "label": "37" },
      { "letter": "E", "value": 45, "label": "45" }
    ],
    "answer": 37,
    "answerLabel": "(D) 37",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_7",
    "hints": [
      "Students scoring at least 90% are a subset of those scoring at least 80%.",
      "Subtract the number who scored at least 90% from the number who scored at least 80%.",
      "50 students scored at least 80%, and 13 of those scored at least 90%. The rest scored between 80% and 90%."
    ],
    "method": "Subtract overlapping sets: (at least 80%) − (at least 90%) = 80%–90% range.",
    "score": 7,
    "ratingReason": "A clean set-subtraction problem that tests understanding of 'at least' ranges.",
    "solution": [
      "Students with at least 80%: 50.",
      "Students with at least 90%: 13 (these are included in the 50).",
      "Students with at least 80% but less than 90%: 50 − 13 = 37.",
      "Answer: D (37)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "'At least' means that score and above.",
    "tip": "When data uses 'at least' thresholds, each larger set includes all smaller sets. Subtract to find the range between thresholds.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Adding all the numbers instead of subtracting the overlapping groups.",
    "reflection": "How many students scored between 85% and 90%?",
    "alternative": "Between 80–85: 50 − 27 = 23. Between 85–90: 27 − 13 = 14. Total: 23 + 14 = 37.",
    "reviewedAt": "2026-10-24"
  },
  "2025-8": {
    "id": "2025-8",
    "year": 2025,
    "number": 8,
    "suggestedPace": "1 min 30 sec",
    "title": "Cardboard cube net",
    "topic": "Geometry · surface area · volume",
    "prompt": "Isaiah cuts open a cardboard cube along some of its edges to form a flat shape (a net) which has an area of 18 square centimeters. What is the volume of the cube in cubic centimeters?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-8.png",
    "options": [
      { "letter": "A", "value": "3√3", "label": "3√3" },
      { "letter": "B", "value": 6, "label": "6" },
      { "letter": "C", "value": 9, "label": "9" },
      { "letter": "D", "value": "6√3", "label": "6√3" },
      { "letter": "E", "value": "9√3", "label": "9√3" }
    ],
    "answer": "3√3",
    "answerLabel": "(A) 3√3",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_8",
    "hints": [
      "The net is made of all 6 faces of the cube spread flat.",
      "If the total area of the net is 18, each face has area 18 ÷ 6 = 3.",
      "If each face has area 3, the side length is √3. Now find the volume."
    ],
    "method": "Divide total net area by 6 to get face area, then side length, then volume.",
    "score": 7,
    "ratingReason": "A cube net problem that connects surface area to volume with radicals.",
    "solution": [
      "A cube has 6 faces of equal area.",
      "Each face area = 18 ÷ 6 = 3 cm².",
      "Side length s = √3 cm.",
      "Volume = s³ = (√3)³ = 3√3 cm³.",
      "Answer: A (3√3)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Cube net = all 6 faces.",
    "tip": "The net of a cube always shows all 6 faces. Its area equals the cube's surface area.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Stopping at the side length (√3) instead of finding the volume.",
    "reflection": "If the net area were 24 cm² instead, what would the volume be?",
    "alternative": "Face area = 18/6 = 3. Side = √3. Volume = (√3)³ = √3 × √3 × √3 = 3 × √3 = 3√3.",
    "reviewedAt": "2026-10-24"
  },
  "2025-9": {
    "id": "2025-9",
    "year": 2025,
    "number": 9,
    "suggestedPace": "1 min 30 sec",
    "title": "Clock opposite pairs",
    "topic": "Statistics · averages · clock arithmetic",
    "prompt": "Ningli looks at the 6 pairs of numbers directly across from each other on a clock. She takes the average of each pair of numbers. What is the average of the resulting 6 numbers?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-9.png",
    "options": [
      { "letter": "A", "value": 5, "label": "5" },
      { "letter": "B", "value": 6.5, "label": "6.5" },
      { "letter": "C", "value": 8, "label": "8" },
      { "letter": "D", "value": 9.5, "label": "9.5" },
      { "letter": "E", "value": 12, "label": "12" }
    ],
    "answer": 6.5,
    "answerLabel": "(B) 6.5",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_9",
    "hints": [
      "Six pairs of numbers sitting opposite each other. The average of the six pair-averages is the average of what collection of numbers?",
      "The average of each pair is the sum divided by 2.",
      "The average of all 6 pair-averages is the same as the average of all numbers 1 to 12."
    ],
    "method": "Recognize opposite numbers sum to 13; the average of all 12 numbers equals the answer.",
    "score": 8,
    "ratingReason": "A clever problem about clock symmetry that rewards noticing the constant sum pattern.",
    "solution": [
      "Opposite pairs on a clock: (12,6), (1,7), (2,8), (3,9), (4,10), (5,11).",
      "Each pair sums to 13 (or 18 for 12+6).",
      "Pair averages: 9, 4, 5, 6, 7, 8.",
      "Average of these 6 numbers = (9+4+5+6+7+8)/6 = 39/6 = 6.5.",
      "Alternatively: average of 1 to 12 is 78/12 = 6.5.",
      "Answer: B (6.5)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Opposite clock numbers add to a constant.",
    "tip": "On a standard clock, opposite numbers are 6 apart, so their sum is always 13 (except 12+6=18). The average of all pair-averages equals the overall average.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that 12 is opposite 6 (sum 18), not 12 opposite 1.",
    "reflection": "What if the clock had numbers 0 to 11 instead of 1 to 12?",
    "alternative": "Average of all numbers 1 to 12 = 78/12 = 6.5. Since each pair's average is half the sum, the overall average is the same.",
    "reviewedAt": "2026-10-24"
  },
  "2025-10": {
    "id": "2025-10",
    "year": 2025,
    "number": 10,
    "suggestedPace": "2 min",
    "title": "Overlapping rectangles",
    "topic": "Geometry · area · rotation",
    "prompt": "In the figure, ABCD is a rectangle with sides AB = 5 inches and AD = 3 inches. Rectangle ABCD is rotated 90° clockwise around the midpoint of side DC to give a second rectangle. What is the total area, in square inches, covered by the two overlapping rectangles?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-10.png",
    "options": [
      { "letter": "A", "value": 21, "label": "21" },
      { "letter": "B", "value": 22.25, "label": "22.25" },
      { "letter": "C", "value": 23, "label": "23" },
      { "letter": "D", "value": 23.75, "label": "23.75" },
      { "letter": "E", "value": 25, "label": "25" }
    ],
    "answer": 23.75,
    "answerLabel": "(D) 23.75",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_10",
    "hints": [
      "Two copies of one rectangle, the second turned 90° about a point on an edge. Draw the turned copy and the overlap becomes a shape with a name.",
      "The two rectangles are the same size and cross at right angles, so the overlap is a square rather than a sliver. Its side is decided by where the rotation point sits along the edge.",
      "Work out where the turned rectangle's edges land relative to the original. The overlapping square's side comes out as part of one of the original sides, and the answer is the two full areas minus the overcounted overlap."
    ],
    "method": "Add the two rectangle areas and subtract the overlapping square area.",
    "score": 7,
    "ratingReason": "A spatial rotation problem that needs visualizing the overlapping square region.",
    "solution": [
      "Area of each rectangle = 5 × 3 = 15. Total without overlap = 30.",
      "The overlap region is a square with side 2.5 inches.",
      "Area of overlap = 2.5 × 2.5 = 6.25.",
      "Total covered area = 30 − 6.25 = 23.75.",
      "Answer: D (23.75)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Total area = sum of individual areas − overlap.",
    "tip": "When shapes overlap, the total covered area is the sum of their individual areas minus the area of overlap.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting to subtract the overlapping region, giving 30 instead of 23.75.",
    "reflection": "What if the rectangle were rotated 90° around the midpoint of side AD instead?",
    "alternative": "The rotated rectangle creates a square overlap of side equal to half of AD = 2.5. Subtract 6.25 from 30.",
    "reviewedAt": "2026-10-24"
  },
  "2025-11": {
    "id": "2025-11",
    "year": 2025,
    "number": 11,
    "suggestedPace": "2 min",
    "title": "Tetromino tiling",
    "topic": "Geometry · tiling · spatial reasoning",
    "prompt": "A tetromino consists of four squares connected along their edges. There are five possible tetromino shapes: I, O, L, T, and S, which can be rotated or flipped over. Three tetrominoes are used to completely cover a 3×4 rectangle. At least one of the tiles is an S tile. What are the other two tiles?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-11.png",
    "options": [
      { "letter": "A", "value": "A", "label": "I and L" },
      { "letter": "B", "value": "B", "label": "I and T" },
      { "letter": "C", "value": "C", "label": "L and L" },
      { "letter": "D", "value": "D", "label": "L and S" },
      { "letter": "E", "value": "E", "label": "O and T" }
    ],
    "answer": "C",
    "answerLabel": "(C) L and L",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_11",
    "hints": [
      "Place the S tile first. Its shape leaves some regions harder to fill than others.",
      "Try putting the S tile flat in a corner or upright in the center. Which placements leave a region the other two tiles can fill?",
      "After the S tile is placed, the remaining 8 squares can be tiled by two L tetrominoes."
    ],
    "method": "Try S tile placements that avoid holes; the only viable ones leave the remaining region tilable by two L's.",
    "score": 7,
    "ratingReason": "A spatial tiling puzzle that requires systematic casework on S tile placements.",
    "solution": [
      "A 3×4 rectangle has 12 squares. Three tetrominoes of 4 squares each must fill it exactly.",
      "Place the S tile in the bottom left corner flat (horizontal S). The remaining 8 squares can be tiled with two L tetrominoes.",
      "Place the S tile upright in the center. The two remaining sections can also be tiled with L's.",
      "No other S tile placement allows the remaining region to be tiled without holes.",
      "Answer: C (L and L)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Start with the constrained piece.",
    "tip": "When a problem says 'at least one tile must be X', place that piece first and see what options remain for the rest.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting that tetrominoes can be rotated or flipped, which increases possible arrangements.",
    "reflection": "Could two S tiles and one L tile cover the 3×4 rectangle?",
    "alternative": "The S tile can be placed in 7 possible positions, but only 3 avoid holes. In all 3 successful cases, the remaining tiles are two L's.",
    "reviewedAt": "2026-10-24"
  },
  "2025-12": {
    "id": "2025-12",
    "year": 2025,
    "number": 12,
    "suggestedPace": "2 min",
    "title": "Largest circle in region",
    "topic": "Geometry · circles · Pythagorean Theorem",
    "prompt": "The region shown below consists of 24 squares, each with side length 1 centimeter. What is the area, in square centimeters, of the largest circle that can fit inside the region, possibly touching the boundaries?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-12.png",
    "options": [
      { "letter": "A", "value": "A", "label": "3π" },
      { "letter": "B", "value": "B", "label": "4π" },
      { "letter": "C", "value": "C", "label": "5π" },
      { "letter": "D", "value": "D", "label": "6π" },
      { "letter": "E", "value": "E", "label": "8π" }
    ],
    "answer": "C",
    "answerLabel": "(C) 5π",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_12",
    "hints": [
      "The largest circle is centered at the center of the region.",
      "The limiting points are the concave corners (indentations) of the region. Find the distance from the center to one of them.",
      "Use the Pythagorean Theorem: from the center, go 2 right and 1 down to reach a concave corner, so the radius is √(2² + 1²) = √5."
    ],
    "method": "The circle radius equals the distance from the region's center to the nearest concave corner.",
    "score": 7,
    "ratingReason": "A spatial problem that combines a cross-shaped region with distance calculation via Pythagoras.",
    "solution": [
      "The region is shaped like a plus sign made of 24 unit squares.",
      "The center of the region is the center of the middle square.",
      "The nearest concave corners are 2 units right and 1 unit down from center.",
      "Distance = √(2² + 1²) = √5. This is the radius.",
      "Area = π × (√5)² = 5π.",
      "Answer: C (5π)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "The limiting distance defines the radius.",
    "tip": "For an inscribed circle, the radius is the shortest distance from center to any boundary point. Use Pythagoras to find it.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Using the full width/height of the region rather than the distance to the concave corners.",
    "reflection": "What if the region were a 5×5 square with a 1×1 square cut from each corner?",
    "alternative": "Estimate: radius ≈ 2.23, area ≈ 15.7, which is closest to 5π ≈ 15.7 among the choices.",
    "reviewedAt": "2026-10-24"
  },
  "2025-13": {
    "id": "2025-13",
    "year": 2025,
    "number": 13,
    "suggestedPace": "1 min 30 sec",
    "title": "Even number remainders",
    "topic": "Number theory · modular arithmetic · patterns",
    "prompt": "Each of the even numbers 2, 4, 6, ..., 50 is divided by 7. The remainders are recorded. Which histogram displays the number of times each remainder occurs?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-13.png",
    "options": [
      { "letter": "A", "value": "A", "label": "Histogram A" },
      { "letter": "B", "value": "B", "label": "Histogram B" },
      { "letter": "C", "value": "C", "label": "Histogram C" },
      { "letter": "D", "value": "D", "label": "Histogram D" },
      { "letter": "E", "value": "E", "label": "Histogram E" }
    ],
    "answer": "A",
    "answerLabel": "(A) Histogram A",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_13",
    "hints": [
      "Each step adds 2. Adding 2 modulo 7 bumps the remainder by 2 each time.",
      "The remainders repeat in a cycle: 2, 4, 6, 1, 3, 5, 0. There are 25 even numbers.",
      "After 3 full cycles (21 numbers), every remainder has appeared 3 times. The last 4 numbers are the first four of the cycle: 2, 4, 6, 1."
    ],
    "method": "Find the repeating cycle of remainders; after full cycles, only the tail breaks the tie.",
    "score": 8,
    "ratingReason": "A modular pattern problem that rewards finding the cycle rather than computing all 25 remainders.",
    "solution": [
      "Even numbers increase by 2 each step. Modulo 7, the remainder increases by 2 each time.",
      "Starting at 2 (remainder 2), the cycle is: 2, 4, 6, 1, 3, 5, 0 (length 7).",
      "There are 25 even numbers (2 through 50). 25 ÷ 7 = 3 remainder 4.",
      "After 3 full cycles: each remainder appears 3 times. The next 4 numbers give remainders 2, 4, 6, 1.",
      "Remainders 1, 2, 4, 6 appear 4 times; remainders 0, 3, 5 appear 3 times.",
      "Histogram A matches: taller bars on 1, 2, 4, 6. Answer: A."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Find the repeating cycle first.",
    "tip": "When a sequence grows by a fixed step, look for the repeating pattern in remainders. The cycle length is usually the modulus divided by the GCD of the step and modulus.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Computing all 25 remainders individually instead of spotting the 7-term cycle.",
    "reflection": "What if the numbers were 1, 3, 5, ..., 49 instead? How would the remainders change?",
    "alternative": "The cycle is 2,4,6,1,3,5,0. Three full cycles = 21 numbers, then four extras = 2,4,6,1. Only A has bars at height 4 for 1,2,4,6 and height 3 for 0,3,5.",
    "reviewedAt": "2026-10-24"
  },
  "2025-14": {
    "id": "2025-14",
    "year": 2025,
    "number": 14,
    "suggestedPace": "1 min 30 sec",
    "title": "Mean and median",
    "topic": "Statistics · mean · median · algebra",
    "prompt": "A number N is inserted into the list 2, 6, 7, 7, 28. The mean is now twice as great as the median. What is N?",
    "wording": "restated",
    "options": [
      { "letter": "A", "value": 7, "label": "7" },
      { "letter": "B", "value": 14, "label": "14" },
      { "letter": "C", "value": 20, "label": "20" },
      { "letter": "D", "value": 28, "label": "28" },
      { "letter": "E", "value": 34, "label": "34" }
    ],
    "answer": 34,
    "answerLabel": "(E) 34",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_14",
    "hints": [
      "After inserting N, there will be 6 numbers. The median of 6 numbers is the average of the 3rd and 4th numbers when sorted.",
      "All answer choices are at least 7, so the middle two numbers after sorting are always 7 and 7.",
      "The median is always 7. The mean must be 14 (twice the median). So the sum of all 6 numbers must be 6 × 14 = 84."
    ],
    "method": "The median stays fixed at 7 for all answer choices; find N so the total sum makes the mean 14.",
    "score": 8,
    "ratingReason": "A clever statistics problem where the median is independent of the answer choice, simplifying the algebra.",
    "solution": [
      "Original list: 2, 6, 7, 7, 28. Sum = 50.",
      "After inserting N, there are 6 numbers. With all choices ≥ 7, the sorted order is 2, 6, 7, 7, N, 28 (or 2, 6, 7, 7, 28, N for larger N).",
      "The 3rd and 4th numbers are both 7, so the median = (7 + 7) / 2 = 7.",
      "Mean = 2 × median = 14. Sum of 6 numbers = 6 × 14 = 84.",
      "N = 84 − 50 = 34.",
      "Answer: E (34)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Check what stays constant.",
    "tip": "When inserting a value into a list, ask what changes and what doesn't. Here the median stays 7 regardless of which answer you pick.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Trying each answer choice one by one instead of solving algebraically.",
    "reflection": "What if the median changed depending on N? How would you solve it then?",
    "alternative": "With 6 numbers, median = average of 3rd and 4th. Since both are 7, median = 7. Mean = 14 requires sum = 84. 84 − 50 = 34.",
    "reviewedAt": "2026-10-24"
  },
  "2025-15": {
    "id": "2025-15",
    "year": 2025,
    "number": 15,
    "suggestedPace": "2 min",
    "title": "Gold-on-gold pairs",
    "topic": "Combinatorics · optimization · pairing",
    "prompt": "Kei draws a 6-by-6 grid. He colors 13 of the unit squares silver and the remaining squares gold. Kei then folds the grid in half vertically, forming pairs of overlapping unit squares. Let m and M equal the least and greatest possible number of gold-on-gold pairs, respectively. What is the value of m + M?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-15.png",
    "options": [
      { "letter": "A", "value": 12, "label": "12" },
      { "letter": "B", "value": 14, "label": "14" },
      { "letter": "C", "value": 16, "label": "16" },
      { "letter": "D", "value": 18, "label": "18" },
      { "letter": "E", "value": 20, "label": "20" }
    ],
    "answer": 16,
    "answerLabel": "(C) 16",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_15",
    "hints": [
      "Folding pairs the 36 squares up. The number of gold-gold pairs depends on how the gold squares are spread among the pairs, not on where each one sits.",
      "Each gold square is either paired with another gold square or with a silver one. So the count of gold-gold pairs is decided by how many gold squares are forced to double up.",
      "Look at the 18 pairs and the number of gold squares. To minimise, spread the gold as thinly as the pairs allow; to maximise, double up as many gold squares as possible — and each doubling uses two gold squares for one pair."
    ],
    "method": "Find min gold-on-gold pairs by spreading gold, max by pairing gold together; then add.",
    "score": 8,
    "ratingReason": "An optimization problem requiring careful thinking about pairing constraints on a folded grid.",
    "solution": [
      "Total squares: 36. Gold squares: 36 − 13 = 23. Pairs after folding: 18.",
      "Minimum gold-on-gold pairs (m): Put 1 gold in each of the 18 pairs. The remaining 23 − 18 = 5 gold squares must double up, creating 5 gold-on-gold pairs. m = 5.",
      "Maximum gold-on-gold pairs (M): Pair gold squares together as much as possible. 23 ÷ 2 = 11 pairs + 1 leftover. M = 11.",
      "m + M = 5 + 11 = 16.",
      "Answer: C (16)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Find extremes by changing how you distribute.",
    "tip": "For 'least and greatest' problems, find one extreme by spreading items out and the other by clustering them together.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting to subtract silver from total to get gold count first.",
    "reflection": "What if 14 squares were silver instead of 13? How would m + M change?",
    "alternative": "With 23 gold in 18 pairs: min overlap = 23 − 18 = 5. Max overlap = ⌊23/2⌋ = 11. Sum = 16.",
    "reviewedAt": "2026-10-24"
  },
  "2025-16": {
    "id": "2025-16",
    "year": 2025,
    "number": 16,
    "suggestedPace": "2 min",
    "title": "A sum that cannot change",
    "topic": "Number theory · pairing and constant sums",
    "prompt": "Five distinct integers from 1 to 10 are chosen, and five distinct integers from 11 to 20 are chosen. No two of the chosen numbers differ by exactly 10. What is the sum of the ten chosen numbers?",
    "wording": "restated",
    "options": [
      { "letter": "A", "value": 95, "label": "95" },
      { "letter": "B", "value": 100, "label": "100" },
      { "letter": "C", "value": 105, "label": "105" },
      { "letter": "D", "value": 110, "label": "110" },
      { "letter": "E", "value": 115, "label": "115" }
    ],
    "answer": 105,
    "answerLabel": "(C) 105",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_16",
    "hints": [
      "Write the pairs that differ by 10: (1, 11), (2, 12), and so on up to (10, 20). Choosing 5 numbers from 1–10 and 5 from 11–20 uses halves that match up.",
      "Once the five small numbers are chosen, their partners 10 higher are forbidden. There are exactly five forbidden large numbers and ten large numbers in all.",
      "The five large numbers chosen must therefore be the other five. Work out the sum of the small five, then the sum of their forbidden partners."
    ],
    "method": "The rule forces the large half once the small half is chosen, so the total is the same for every legal selection.",
    "score": 8,
    "ratingReason": "A constraint problem where the useful move is proving the answer cannot depend on the choice, not testing cases.",
    "solution": [
      "Split the pairs that differ by 10: (1, 11), (2, 12), …, (10, 20).",
      "Let the five numbers chosen from 1–10 be the set A, with sum s. Their partners form five forbidden numbers in 11–20, and those partners have sum s + 50 because each is 10 more.",
      "The numbers 11–20 add to 155. The five numbers actually chosen from 11–20 are the five not forbidden, so their sum is 155 − (s + 50) = 105 − s.",
      "Total = s + (105 − s) = 105. The value of s cancels, so every legal selection gives the same total.",
      "Check with one selection: 1, 2, 3, 4, 5 with 16, 17, 18, 19, 20 gives 15 + 90 = 105.",
      "Answer: C (105)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Look for what is forced.",
    "tip": "When a rule links two equal-sized halves, ask whether choosing one half already decides the other. If it does, the answer often cannot depend on your choice at all — which is worth proving before computing.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Trying a few selections, seeing 105 each time, and assuming the total is fixed without proving it must be.",
    "reflection": "Why is it impossible to choose six numbers from 1–10 and six from 11–20 with no two differing by 10?",
    "alternative": "Count the ten numbers you did not choose instead. They are the five unused small numbers (sum 55 − s) plus the five forbidden partners (sum s + 50), which add to 105. Since all twenty numbers total 210, the chosen ten also total 210 − 105 = 105.",
    "reviewedAt": "2026-10-26"
  },
  "2025-17": {
    "id": "2025-17",
    "year": 2025,
    "number": 17,
    "suggestedPace": "2 min",
    "title": "Who works in city A",
    "topic": "Arithmetic · fractions in a flow diagram",
    "prompt": "In the land of Markovia there are three cities: A, B, and C. There are 100 people who live in A, 120 who live in B, and 160 who live in C. Everyone works in one of the three cities, and a person may work in the same city where they live. In the diagram, an arrow pointing from one city to another is labeled with the fraction of the people living in the first city who work in the second city. (For example, 1/4 of the people who live in A work in B.) How many people work in A?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-17.png",
    "options": [
      { "letter": "A", "value": 55, "label": "55" },
      { "letter": "B", "value": 60, "label": "60" },
      { "letter": "C", "value": 85, "label": "85" },
      { "letter": "D", "value": 115, "label": "115" },
      { "letter": "E", "value": 160, "label": "160" }
    ],
    "answer": 115,
    "answerLabel": "(D) 115",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_17",
    "hints": [
      "You want the number of people whose workplace is A. Only three groups qualify: residents of A who stay, residents of B who drive to A, and residents of C who drive to A.",
      "Of the 100 people living in A, 1/4 work in B and 1/5 work in C. Subtract those from 100 to get the ones who stay in A.",
      "Then add the arrows that enter A: 1/3 of 120 and 1/8 of 160. Everyone works in exactly one city, so these three groups do not overlap."
    ],
    "method": "Follow only the arrows that end at A, plus the residents of A who stay there.",
    "score": 8,
    "ratingReason": "A clean test of reading a weighted diagram: the arithmetic is easy, but only if you pick the right arrows.",
    "solution": [
      "Residents of A who stay in A: 100 − 100 × (1/4 + 1/5) = 100 − 45 = 55.",
      "Residents of B who work in A: 1/3 × 120 = 40.",
      "Residents of C who work in A: 1/8 × 160 = 20.",
      "Everyone works in one of the three cities, so the number working in A is 55 + 40 + 20 = 115.",
      "Answer: D (115)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Read a flow diagram one destination at a time.",
    "tip": "For each city you are asked about, list the arrows that point into it and add the residents who never leave. Ignore every other arrow, even when the fraction looks easy to use.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Counting all 100 residents of A as working in A, forgetting that 45 of them take an arrow out.",
    "reflection": "Suppose the fractions leaving A were larger. Could more people work in A than live in A? Explain using the arrows that enter A.",
    "alternative": "Write one equation for the people working in A: x = 160 × 1/8 + 120 × 1/3 + 100 − 100 × 1/4 − 100 × 1/5 = 20 + 40 + 100 − 25 − 20 = 115.",
    "reviewedAt": "2026-10-26"
  },
  "2025-18": {
    "id": "2025-18",
    "year": 2025,
    "number": 18,
    "suggestedPace": "2 min 30 sec",
    "title": "Ring around an inscribed square",
    "topic": "Geometry · circles and inscribed squares",
    "prompt": "The circle on the left has radius 1 unit, and the region between the circle and its inscribed square is shaded. The circle on the right has radius R, and one quarter of the region between that circle and its inscribed square is shaded. The two shaded regions have the same area. What is R?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-18.png",
    "options": [
      { "letter": "A", "value": "A", "label": "√2" },
      { "letter": "B", "value": "B", "label": "2" },
      { "letter": "C", "value": "C", "label": "2√2" },
      { "letter": "D", "value": "D", "label": "4" },
      { "letter": "E", "value": "E", "label": "4√2" }
    ],
    "answer": "B",
    "answerLabel": "(B) 2",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_18",
    "hints": [
      "A square inscribed in a circle of radius r has diagonal 2r. So its side is r√2 and its area is 2r².",
      "Left circle: the ring has area π(1)² − 2(1)² = π − 2.",
      "Right circle: the whole ring is πR² − 2R² = R²(π − 2), but only one quarter of it is shaded. Set that quarter against π − 2 and notice the shared factor."
    ],
    "method": "Write each shaded area as a multiple of (π − 2), then compare the multipliers.",
    "score": 8,
    "ratingReason": "Rewards seeing (π − 2) as a shared unit, which turns a messy equation into a one-step comparison.",
    "solution": [
      "Inscribed square of a radius-r circle: diagonal 2r, side r√2, area 2r².",
      "Left shaded area = π − 2.",
      "Right ring = πR² − 2R² = R²(π − 2). One quarter of it is R²(π − 2)/4.",
      "Equate: R²(π − 2)/4 = π − 2. Since π − 2 ≠ 0, divide it out: R²/4 = 1.",
      "R² = 4, so R = 2 (a length must be positive).",
      "Answer: B (2)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Cancel the shared shape factor.",
    "tip": "Both rings are built the same way, so the difference (π − 2) plays the role of a unit. Comparing areas then reduces to comparing how many of those units each figure has.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Forgetting the one-quarter, writing R²(π − 2) = π − 2, and getting R = 1.",
    "reflection": "If one ninth of the right ring were shaded instead of one quarter, what would R be? Try to see the answer without doing the full algebra again.",
    "alternative": "Use similarity. The right ring's total area must be 4 times the left ring's, so every length is multiplied by √4 = 2. Starting from radius 1 gives R = 2.",
    "reviewedAt": "2026-10-26"
  },
  "2025-19": {
    "id": "2025-19",
    "year": 2025,
    "number": 19,
    "suggestedPace": "2 min 30 sec",
    "title": "Two cars meeting on a road",
    "topic": "Rates · distance, driving time, and unit conversion",
    "prompt": "Two towns A and B are connected by a straight road 15 miles long. Travelling from A to B, the speed limit changes every 5 miles: 25, then 40, then 20 miles per hour. Two cars, one at A and one at B, start moving toward each other at the same time and drive exactly at the speed limit in each portion. How far from A, in miles, will they meet?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-19.png",
    "options": [
      { "letter": "A", "value": 7.75, "label": "7.75" },
      { "letter": "B", "value": 8, "label": "8" },
      { "letter": "C", "value": 8.25, "label": "8.25" },
      { "letter": "D", "value": 8.5, "label": "8.5" },
      { "letter": "E", "value": 8.75, "label": "8.75" }
    ],
    "answer": 8.5,
    "answerLabel": "(D) 8.5",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_19",
    "hints": [
      "Convert the first stretch of each car into time. The car from A covers 5 miles at 25 mph; the car from B covers 5 miles at 20 mph.",
      "Those times are 1/5 hour = 12 minutes and 1/4 hour = 15 minutes. When the slower starter finally reaches the middle stretch, the other car has already been driving there for 3 minutes at 40 mph.",
      "After that moment both cars travel at 40 mph, so they close the remaining gap at the same rate — they split it in half."
    ],
    "method": "Find one moment you can describe exactly — when the later car enters the middle stretch — then split the remaining gap.",
    "score": 8,
    "ratingReason": "A rate problem that rewards choosing a good reference moment over setting up simultaneous equations.",
    "solution": [
      "Car from A: 5 miles at 25 mph takes 5/25 = 1/5 hour = 12 minutes.",
      "Car from B: 5 miles at 20 mph takes 5/20 = 1/4 hour = 15 minutes.",
      "At 15 minutes, B's car enters the middle stretch. A's car has used 12 minutes on its first stretch, so it has spent 3 minutes at 40 mph: 40 × 3/60 = 2 miles.",
      "At that moment A is 5 + 2 = 7 miles from A and B's car is 5 miles from B, so 15 − 7 − 5 = 3 miles separate them.",
      "Both now drive 40 mph, so each covers 1.5 of those 3 miles.",
      "Meeting point: 5 + 2 + 1.5 = 8.5 miles from A. Answer: D (8.5)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Speed up time, not distance.",
    "tip": "Different speed limits mean distance is not shared evenly. Turning each stretch into minutes gives you a snapshot you can compare, and after that the arithmetic is short.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Splitting the 15 miles in half, which pretends both cars travel at the same speed the whole way.",
    "reflection": "If the middle speed limit were 50 mph instead of 40, which steps of this solution would change and which would stay the same?",
    "alternative": "Let x be A's distance into the middle stretch, so B's is 5 − x. Equal travel times give 1/5 + x/40 = 1/4 + (5 − x)/40, so 8 + x = 10 + 5 − x and 2x = 7. Then x = 3.5 and the meeting point is 5 + 3.5 = 8.5 miles from A.",
    "reviewedAt": "2026-10-26"
  },
  "2025-20": {
    "id": "2025-20",
    "year": 2025,
    "number": 20,
    "suggestedPace": "1 min 30 sec",
    "title": "Cheese eaten in turns",
    "topic": "Patterns · infinite geometric series",
    "prompt": "Sarika, Dev, and Rajiv are sharing a large block of cheese. They take turns cutting off half of what remains and eating it: first Sarika eats half of the cheese, then Dev eats half of what is left, then Rajiv eats half of what remains, then Sarika again, and so on. They stop when the cheese is too small to see. About what fraction of the original block does Sarika eat in total?",
    "wording": "restated",
    "options": [
      { "letter": "A", "value": "A", "label": "4/7" },
      { "letter": "B", "value": "B", "label": "3/5" },
      { "letter": "C", "value": "C", "label": "2/3" },
      { "letter": "D", "value": "D", "label": "3/4" },
      { "letter": "E", "value": "E", "label": "7/8" }
    ],
    "answer": "A",
    "answerLabel": "(A) 4/7",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_20",
    "hints": [
      "Each turn eats half of what remains. Follow one person's share from round to round instead of tracking the whole block.",
      "Between one of Sarika's turns and her next, three halves are eaten, so what survives is a fixed fraction of what she ate. That fixed fraction is the key to the whole sum.",
      "Sarika's shares form a geometric series whose first term is half the block and whose ratio is that small surviving fraction. The total of such a series is the first term over one minus the ratio — the block size cancels."
    ],
    "method": "Find the leftover after one full round, then sum Sarika's shares as a geometric series with ratio 1/8.",
    "score": 7,
    "ratingReason": "A short problem once the repeating round is spotted; the work is in seeing the ratio rather than grinding out fractions.",
    "solution": [
      "Take the block as 1. Round one: Sarika 1/2, Dev 1/4, Rajiv 1/8, leaving 1/8.",
      "Round two: Sarika eats half of that 1/8, which is 1/16, and Dev and Rajiv follow, leaving 1/64.",
      "So Sarika's shares are 1/2 + 1/16 + 1/128 + ⋯, a geometric series with first term 1/2 and ratio 1/8.",
      "Sum = (1/2) / (1 − 1/8) = (1/2) / (7/8) = 4/7.",
      "Answer: A, 4/7."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Compare a share with the next one.",
    "tip": "When the same block is nibbled in repeating turns, ask what fraction survives each round. That single number gives the ratio of the series for each person.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Assuming the three friends end up with equal thirds, or stopping after Sarika's first share of 1/2.",
    "reflection": "With four people taking turns instead of three, would Sarika's total be larger or smaller than 4/7?",
    "alternative": "Let Sarika's total be x. Dev always eats half of what Sarika eats over the whole process and Rajiv always eats a quarter, so x + x/2 + x/4 = 1 and x = 4/7.",
    "reviewedAt": "2026-10-26"
  },
  "2025-21": {
    "id": "2025-21",
    "year": 2025,
    "number": 21,
    "suggestedPace": "2 min 30 sec",
    "title": "Grades in seven pods",
    "topic": "Logic · graph reasoning · forced values",
    "prompt": "Konigsberg School assigns grades 1 through 7 to pods A through G, one grade per pod. Some pods are joined by walkways, as shown in the figure. The school noticed that every pair of connected pods holds grades differing by 2 or more grade levels, so grades 1 and 2 never sit in directly connected pods. What is the sum of the grade levels assigned to pods C, E, and F?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-21.png",
    "options": [
      { "letter": "A", "value": 12, "label": "12" },
      { "letter": "B", "value": 13, "label": "13" },
      { "letter": "C", "value": 14, "label": "14" },
      { "letter": "D", "value": 15, "label": "15" },
      { "letter": "E", "value": 16, "label": "16" }
    ],
    "answer": 12,
    "answerLabel": "(A) 12",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_21",
    "hints": [
      "Count how many walkways leave each pod. Pods C and F each touch five other pods; no other pod touches more than four.",
      "A pod holding grade 2 could only be joined to grades 4, 5, 6, 7 — four grades, not five. So the two five-walkway pods must hold grades 1 and 7.",
      "Now look for pods that avoid one of those. Only pod G is not joined to C, and only pod D is not joined to F. That pins G and D."
    ],
    "method": "Use the two most connected pods to force grades 1 and 7, then let the two 1-or-7 grades force the rest.",
    "score": 8,
    "ratingReason": "A diagram puzzle with almost no arithmetic. The whole solution is one observation about how many grades can sit beside a crowded pod.",
    "solution": [
      "Pods C and F each have five walkways. A pod next to five others needs five grades at distance 2 or more, and grade 1 offers 3, 4, 5, 6, 7 while grade 2 offers only 4, 5, 6, 7. So C and F hold grades 1 and 7 in some order.",
      "Take C = 1 and F = 7. The only pod not joined to C is G, so G must hold the grade that cannot touch 1, namely 2. The only pod not joined to F is D, so D holds 6.",
      "Grades 3, 4, 5 remain for A, B, E. Pods A and B are joined, and |3 − 5| = 2 clears the rule while 3 and 4 would not, so A and B take 3 and 5 and pod E takes 4.",
      "Sum: C + E + F = 1 + 4 + 7 = 12.",
      "Answer: A (12)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Count neighbours before you place numbers.",
    "tip": "When a diagram forbids close values, the most crowded node is the most informative. Ask which values can survive having many neighbours — usually only the two ends of the range.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Placing grades one at a time by adjacency and reaching a dead end, instead of using the five-walkway pods to force grades 1 and 7 first.",
    "reflection": "Pods C and F can swap their grades 1 and 7. Does the requested sum change? Explain using both valid labellings.",
    "alternative": "Grade x can be replaced everywhere by 8 − x, and every difference of 2 or more survives, so a valid labelling maps to another valid labelling. The two labellings therefore give sums that add to 3 × 8 = 24. Because an AMC problem has one answer, c + e + f = 12. The degree argument above proves the same thing directly.",
    "reviewedAt": "2026-10-27"
  },
  "2025-22": {
    "id": "2025-22",
    "year": 2025,
    "number": 22,
    "suggestedPace": "2 min",
    "title": "Coats spaced evenly on 35 hooks",
    "topic": "Number theory · divisors · equal spacing",
    "prompt": "A classroom has a row of 35 coat hooks. Paulina likes coats to be equally spaced, so that there is the same number of empty hooks before the first coat, after the last coat, and between every coat and the next one. Suppose there is at least 1 coat and at least 1 empty hook. How many different numbers of coats can satisfy Paulina's pattern?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-22.png",
    "options": [
      { "letter": "A", "value": 2, "label": "2" },
      { "letter": "B", "value": 4, "label": "4" },
      { "letter": "C", "value": 5, "label": "5" },
      { "letter": "D", "value": 7, "label": "7" },
      { "letter": "E", "value": 9, "label": "9" }
    ],
    "answer": 7,
    "answerLabel": "(D) 7",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_22",
    "hints": [
      "Call the number of coats c. How many gaps does that make? Remember the space before the first coat and the space after the last coat.",
      "There are c + 1 gaps and each holds the same number of empty hooks, say k, with k at least 1. Every hook is either covered or empty, so c + k(c + 1) = 35.",
      "Add 1 to both sides: (k + 1)(c + 1) = 36. Then count the factor pairs of 36 where both factors are bigger than 1."
    ],
    "method": "Turn the spacing rule into one equation, then factor it and count the factor pairs that keep both counts positive.",
    "score": 8,
    "ratingReason": "A short problem with a real idea: the number of gaps is one more than the number of coats, which changes the equation into a factorisation.",
    "solution": [
      "Let c be the number of coats and k the number of empty hooks in each gap. With c coats there are c + 1 gaps, counting both ends.",
      "Every hook is used, so c + k(c + 1) = 35.",
      "Rearrange: kc + k + c = 35, and adding 1 gives (k + 1)(c + 1) = 36.",
      "36 has nine divisors, so nine factor pairs. The pairs 1 × 36 and 36 × 1 would force k = 0 or c = 0, and the problem requires at least one coat and at least one empty hook.",
      "The remaining seven pairs give c = 1, 2, 3, 5, 8, 11, 17, so seven different numbers of coats work.",
      "Answer: D (7)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1, 2, and 4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Count the gaps, not the items.",
    "tip": "Whenever items are spread out with equal space on both ends, the number of gaps is one more than the number of items. That extra gap is usually what makes the equation factorable.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Using c gaps instead of c + 1, which throws away the two end spaces and spoils the count.",
    "reflection": "With 36 hooks instead of 35 the equation becomes (k + 1)(c + 1) = 37. How many numbers of coats work then, and why is the answer so different?",
    "alternative": "Ask when 35 − c (the empty hooks) is a multiple of c + 1. Since 35 − c = 36 − (c + 1), this happens exactly when c + 1 divides 36. The allowed values c + 1 = 2, 3, 4, 6, 9, 12, 18 give seven coat counts.",
    "reviewedAt": "2026-10-27"
  },
  "2025-23": {
    "id": "2025-23",
    "year": 2025,
    "number": 23,
    "suggestedPace": "2 min 30 sec",
    "title": "Four-digit numbers ending in 99",
    "topic": "Number theory · perfect squares · primes",
    "prompt": "How many four-digit numbers have all three of the following properties? (I) The tens digit and the ones digit are both 9. (II) The number is 1 less than a perfect square. (III) The number is the product of exactly two prime numbers.",
    "wording": "restated",
    "options": [
      { "letter": "A", "value": 0, "label": "0" },
      { "letter": "B", "value": 1, "label": "1" },
      { "letter": "C", "value": 2, "label": "2" },
      { "letter": "D", "value": 3, "label": "3" },
      { "letter": "E", "value": 4, "label": "4" }
    ],
    "answer": 1,
    "answerLabel": "(B) 1",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_23",
    "hints": [
      "Property (I) means the number looks like __99. Add 1 and it ends in 00.",
      "A perfect square that ends in 00 must come from a number ending in 0. Which four-digit squares like that are there?",
      "Write each candidate as n² − 1 = (n − 1)(n + 1). For the number to be a product of exactly two primes, both factors must be prime."
    ],
    "method": "Use the last two digits to list a handful of squares, then test each one with the difference-of-squares factorization.",
    "score": 7,
    "ratingReason": "The conditions look heavy but collapse quickly: property (I) plus property (II) leaves only six candidates, and property (III) is one check each.",
    "solution": [
      "Write the number as N = n² − 1. Property (I) makes N end in 99, so n² ends in 00, which happens exactly when n is a multiple of 10.",
      "For N to be four-digit, n must be 40, 50, 60, 70, 80, or 90, giving N = 1599, 2499, 3599, 4899, 6399, 8099.",
      "Factor each with N = (n − 1)(n + 1): 1599 = 39 × 41 = 3 × 13 × 41; 2499 = 49 × 51 = 3 × 7² × 17; 3599 = 59 × 61; 4899 = 69 × 71 = 3 × 23 × 71; 6399 = 79 × 81 = 3⁴ × 79; 8099 = 89 × 91 = 7 × 13 × 89.",
      "Only 3599 = 59 × 61 is a product of exactly two primes, so exactly one number satisfies all three properties.",
      "Answer: B (1)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Let one condition shrink the list.",
    "tip": "Three conditions sound like three times the work. Look for the one that restricts the most — here the last two digits — and list only the few objects that survive it before testing the rest.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Stopping after writing n² − 1 = (n − 1)(n + 1) and assuming both factors are prime, without checking 39, 49, 51, 69, 81, and 91.",
    "reflection": "Suppose property (III) asked for a product of exactly three primes instead of two. Which of the six numbers would qualify, and how many would there be?",
    "alternative": "The two factors n − 1 and n + 1 differ by 2, so both being prime is rare: only 59 and 61 work here. In every other case at least one factor is visibly composite — 39 = 3 × 13, 49 = 7², 51 = 3 × 17, 69 = 3 × 23, 81 = 3⁴, 91 = 7 × 13.",
    "reviewedAt": "2026-10-27"
  },
  "2025-24": {
    "id": "2025-24",
    "year": 2025,
    "number": 24,
    "suggestedPace": "2 min 30 sec",
    "title": "Isosceles trapezoids with whole-number sides",
    "topic": "Geometry · isosceles trapezoid · 30-60-90 triangles",
    "prompt": "In trapezoid ABCD, side AD is parallel to side BC, angles B and C each measure 60°, and AB = DC. All four side lengths are positive integers, and the perimeter of ABCD is 30 units. How many non-congruent trapezoids satisfy all of these conditions?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-24.png",
    "options": [
      { "letter": "A", "value": 0, "label": "0" },
      { "letter": "B", "value": 1, "label": "1" },
      { "letter": "C", "value": 2, "label": "2" },
      { "letter": "D", "value": 3, "label": "3" },
      { "letter": "E", "value": 4, "label": "4" }
    ],
    "answer": 4,
    "answerLabel": "(E) 4",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_24",
    "hints": [
      "A trapezoid with 60° base angles and whole-number sides. Those angles force a fixed relation among the four sides — find it before counting anything.",
      "The two sloping sides and the difference between the parallel sides are locked together by the angle. Once that relation is written down, the perimeter becomes a short equation in two whole numbers.",
      "The sloping sides are equal and each contributes a fixed slice to the longer parallel side, so the perimeter reduces to 2a + 3x = 30. Count the whole-number pairs with a positive top base — and check none of them is congruent to another."
    ],
    "method": "Turn the 60° angles into a relation between the bases, then count integer solutions of one linear equation.",
    "score": 8,
    "ratingReason": "A geometry problem that becomes arithmetic as soon as the 30-60-90 triangle is spotted; the counting is short but the relation between the bases is easy to get wrong.",
    "solution": [
      "Let x = AB = DC and a = AD. Dropping perpendiculars from A and D shows each overhang on BC has length x/2, because it is the side opposite the 30° angle in a 30-60-90 triangle whose hypotenuse is a leg.",
      "So BC = a + x/2 + x/2 = a + x, and the perimeter is a + (a + x) + x + x = 2a + 3x = 30.",
      "From 2a = 30 − 3x, x must be even for a to be a whole number: x = 2, 4, 6, 8 gives a = 12, 9, 6, 3 and bottom bases 14, 13, 12, 11.",
      "x = 10 gives a = 0, which is not a positive side length, so the list stops there.",
      "Four trapezoids, so the answer is E (4)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1, 2, and 4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Two 60° angles mean a right triangle you know.",
    "tip": "Whenever 60° angles meet a base, drop perpendiculars. The 30-60-90 triangle relates the leg, the height, and the overhang, which converts a shape condition into an equation.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Writing the longer base as a + x/2, which forgets the overhang at the other end, or allowing a = 0 when x = 10.",
    "reflection": "With perimeter 36 instead of 30, how many trapezoids would there be? Solve 2a + 3x = 36 with x even and check where the list stops.",
    "alternative": "Name the leg x and the short base b, as AoPS Solution 2 does. The long base is b + x, so 3x + 2b = 30, and the same four pairs (x, b) = (2, 12), (4, 9), (6, 6), (8, 3) appear.",
    "reviewedAt": "2026-10-27"
  },
  "2025-25": {
    "id": "2025-25",
    "year": 2025,
    "number": 25,
    "suggestedPace": "3 min",
    "title": "Areas of every path through a diamond",
    "topic": "Counting · symmetry · lattice paths",
    "prompt": "Makayla finds all the possible ways to draw a path in a 5 × 5 diamond-shaped grid. Each path starts at the bottom of the grid and ends at the top, always moving one unit northeast or northwest. For each path she computes the area of the region between that path and the right side of the grid. Two examples are shown in the figures. What is the sum of the areas determined by all possible paths?",
    "wording": "restated",
    "diagram": "./assets/diagram-2025-25.png",
    "options": [
      { "letter": "A", "value": 2520, "label": "2520" },
      { "letter": "B", "value": 3150, "label": "3150" },
      { "letter": "C", "value": 3840, "label": "3840" },
      { "letter": "D", "value": 4730, "label": "4730" },
      { "letter": "E", "value": 5050, "label": "5050" }
    ],
    "answer": 3150,
    "answerLabel": "(B) 3150",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2025_AMC_8_Problems/Problem_25",
    "hints": [
      "Count the paths first. Every path has 10 steps, and each step is northeast or northwest, so a path is decided by which 5 of the 10 steps go northeast.",
      "The diamond contains 25 unit squares, and a path splits them into a region on the right and a region on the left. How do those two areas compare?",
      "Reflect a path across the vertical diagonal. It becomes another path, and its right region is the original's left region. So the paths pair up with areas adding to 25."
    ],
    "method": "Count the paths with a combination, then use a reflection pairing so every pair of areas adds to the full 25.",
    "score": 9,
    "ratingReason": "The hardest problem on the paper: nothing here is long, but both the count and the pairing argument have to be found.",
    "solution": [
      "Every path takes 10 steps and 5 of them go northeast, so the number of paths is C(10, 5) = 252.",
      "The diamond has 25 unit squares. A path splits them into a right region and a left region, and those two areas add to 25.",
      "Reflecting a path in the vertical diagonal gives another path, and the right region of one is the mirror of the left region of the other. So the 252 paths pair up, with each pair's right areas adding to 25.",
      "There are 252 ÷ 2 = 126 pairs, and each pair contributes 25, so the total is 126 × 25 = 3150. Equivalently, 252 × 25/2 = 3150.",
      "Answer: B (3150)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Sum a quantity by pairing, not by listing.",
    "tip": "When a diagram has a mirror symmetry, ask what a path and its mirror image add up to. That turns hundreds of separate areas into one multiplication.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Computing 252 × 25 = 6300 and stopping, which adds the right region and the left region for every path.",
    "reflection": "For a 4 × 4 diamond the same argument gives C(8, 4) × 16/2 = 70 × 8 = 560. Check that the average area there is 8, exactly half the 16 squares, and explain why the average is always half.",
    "alternative": "Average-area view: the pairing shows every path's area averages 25/2, so the total is 252 × 25/2 = 3150. AoPS Solution 2 checks the same average on a 2 × 2 diamond, where the six areas 0, 1, 2, 2, 3, 4 average 2 = 4/2.",
    "reviewedAt": "2026-10-27"
  },
  "2024-1": {
    "id": "2024-1",
    "year": 2024,
    "number": 1,
    "suggestedPace": "1 min",
    "title": "Only the ones digit matters",
    "topic": "Number theory · units digits",
    "prompt": "What is the ones digit of 222,222 − 22,222 − 2,222 − 222 − 22 − 2?",
    "wording": "restated",
    "expression": "222,222 − 22,222 − 2,222 − 222 − 22 − 2",
    "options": [
      { "letter": "A", "value": 0, "label": "0" },
      { "letter": "B", "value": 2, "label": "2" },
      { "letter": "C", "value": 4, "label": "4" },
      { "letter": "D", "value": 6, "label": "6" },
      { "letter": "E", "value": 8, "label": "8" }
    ],
    "answer": 2,
    "answerLabel": "(B) 2",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_1",
    "hints": [
      "You are not asked for the value of the expression, only its last digit. Which digits of the six numbers can change that last digit?",
      "Replace each number by its ones digit. You get 2 − 2 − 2 − 2 − 2 − 2, which is 2 minus five 2s.",
      "Five 2s make 10, so the ones-digit arithmetic is 2 − 10 = −8. A digit cannot be negative, so add 10 to it."
    ],
    "method": "Work only with ones digits, then bring a negative result back into the range 0 to 9.",
    "score": 3,
    "ratingReason": "The idea is small but it is the first real AMC 8 skill: higher place values cannot affect the ones digit of a sum or difference.",
    "solution": [
      "Adding or subtracting whole numbers only moves the ones digit using the ones digits of the terms, because every higher place value contributes a multiple of 10.",
      "So keep just the last digit of each term: 2 − 2 − 2 − 2 − 2 − 2.",
      "The five subtracted 2s add to 10, so this is 2 − 10 = −8.",
      "The ones digit must be between 0 and 9, and −8 + 10 = 2, so the answer ends in 2.",
      "Answer: B (2)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1, 3, and 4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "A negative ones digit needs one more step.",
    "tip": "When the ones-digit arithmetic goes below 0, add 10 once. Losing 8 from a whole number borrows from the tens place, which turns the last digit into 2 rather than 8.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Reporting 8 because the subtraction gave −8, instead of converting −8 into the digit 2.",
    "reflection": "Would the answer change if the first number were 222,228 instead of 222,222? Explain using only the ones digits.",
    "alternative": "Do the arithmetic and check: the five numbers being subtracted add to 22,222 + 2,222 + 222 + 22 + 2 = 24,690, and 222,222 − 24,690 = 197,532, which ends in 2. AoPS Solution 2 takes exactly this route and warns that it is too slow for a timed test.",
    "reviewedAt": "2026-10-27"
  },
  "2024-2": {
    "id": "2024-2",
    "year": 2024,
    "number": 2,
    "suggestedPace": "1 min",
    "title": "Three fractions in decimal form",
    "topic": "Arithmetic · fractions and decimals",
    "prompt": "What is the value of 44/11 + 110/44 + 44/1100 in decimal form?",
    "wording": "restated",
    "expression": "44/11 + 110/44 + 44/1100",
    "options": [
      { "letter": "A", "value": 6.4, "label": "6.4" },
      { "letter": "B", "value": 6.504, "label": "6.504" },
      { "letter": "C", "value": 6.54, "label": "6.54" },
      { "letter": "D", "value": 6.9, "label": "6.9" },
      { "letter": "E", "value": 6.94, "label": "6.94" }
    ],
    "answer": 6.54,
    "answerLabel": "(C) 6.54",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_2",
    "hints": [
      "Each fraction can be simplified on its own. Look for a common factor in the numerator and denominator.",
      "All three fractions hide a factor of 11: 44/11 = 4, 110/44 = 10/4, and 44/1100 = 4/100.",
      "Turn 10/4 into 2.5 and 4/100 into 0.04, then add 4 + 2.5 + 0.04."
    ],
    "method": "Simplify each fraction first, then convert the simple results to decimals and add.",
    "score": 3,
    "ratingReason": "Straightforward fraction-to-decimal work. The only trap is the tiny third term, which is easy to misplace by a factor of 10.",
    "solution": [
      "Simplify the first fraction: 44/11 = 4.",
      "Simplify the second fraction: 110/44 = 10/4 = 2.5.",
      "Simplify the third fraction: 44/1100 = 4/100 = 0.04.",
      "Add in order: 4 + 2.5 = 6.5, and 6.5 + 0.04 = 6.54.",
      "Answer: C (6.54)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "A denominator 25 times larger shrinks the value 25 times.",
    "tip": "44/1100 is not close to 44/110. The denominator grew by a factor of 10 while the numerator stayed the same, so the value shrank by a factor of 10 to 0.04.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Reading 44/1100 as 0.4 or as 4.4 and landing on 6.9 or 6.94.",
    "reflection": "Which single term decides between the answers 6.504 and 6.54? Explain how that term is written as a decimal.",
    "alternative": "Keep everything over 100: 4 = 400/100, 2.5 = 250/100, and 0.04 = 4/100. Then 400 + 250 + 4 = 654 hundredths, which is 6.54. AoPS Solution 2 uses the same common-denominator idea.",
    "reviewedAt": "2026-10-27"
  },
  "2024-3": {
    "id": "2024-3",
    "year": 2024,
    "number": 3,
    "suggestedPace": "1 min 30 sec",
    "title": "Visible gray in four nested squares",
    "topic": "Geometry · nested squares · area",
    "prompt": "Four squares with side lengths 4, 7, 9, and 10 are arranged in increasing size order so that their left edges and bottom edges align. The squares alternate in color white, gray, white, gray, as shown in the figure. What is the area of the visible gray region, in square units?",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-3.png",
    "options": [
      { "letter": "A", "value": 42, "label": "42" },
      { "letter": "B", "value": 45, "label": "45" },
      { "letter": "C", "value": 49, "label": "49" },
      { "letter": "D", "value": 50, "label": "50" },
      { "letter": "E", "value": 52, "label": "52" }
    ],
    "answer": 52,
    "answerLabel": "(E) 52",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_3",
    "hints": [
      "Each smaller square sits on top of the next larger one, so part of every gray square is hidden. Which square hides which?",
      "The white 4 × 4 square hides part of the gray 7 × 7 square, and the white 9 × 9 square hides part of the gray 10 × 10 square.",
      "Find the gray area left in each of the two gray squares, then add those two visible pieces."
    ],
    "method": "Subtract each white square from the gray square it covers, then add the two visible gray pieces.",
    "score": 4,
    "ratingReason": "A diagram problem where the arithmetic is easy but the overlap must be read correctly. Learners who add both gray squares forget the white squares on top.",
    "solution": [
      "All four squares share the lower-left corner, so the squares nest: 4 inside 7, then 9, then 10.",
      "The gray 7 × 7 square has area 49, and the white 4 × 4 square on top of it covers 16, so 49 − 16 = 33 square units of gray are visible.",
      "The gray 10 × 10 square has area 100, and the white 9 × 9 square on top of it covers 81, so 100 − 81 = 19 square units of gray are visible.",
      "The two visible gray pieces do not overlap, so the total visible gray is 33 + 19 = 52 square units.",
      "Answer: E (52)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Add the gray squares, then remove what covers them.",
    "tip": "You can also start with both gray squares and subtract both white squares: (49 + 100) − (16 + 81) = 149 − 97 = 52. Checking the problem a second way protects you from an overlap mistake.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Adding 49 and 100 to get 149, forgetting that the white squares hide most of the gray.",
    "reflection": "The visible gray pieces are L-shaped rings of different widths. Why can you add their areas directly instead of worrying about overlap?",
    "alternative": "Total gray paint minus total white paint: 149 − 97 = 52. AoPS Solution 1 uses the same bookkeeping one square at a time.",
    "reviewedAt": "2026-10-27"
  },
  "2024-4": {
    "id": "2024-4",
    "year": 2024,
    "number": 4,
    "suggestedPace": "1 min",
    "title": "The number Yunji left out",
    "topic": "Number theory · perfect squares · working backwards",
    "prompt": "When Yunji added all the integers from 1 to 9, she mistakenly left out a number. Her incorrect sum turned out to be a square number. What number did Yunji leave out?",
    "wording": "restated",
    "options": [
      { "letter": "A", "value": 5, "label": "5" },
      { "letter": "B", "value": 6, "label": "6" },
      { "letter": "C", "value": 7, "label": "7" },
      { "letter": "D", "value": 8, "label": "8" },
      { "letter": "E", "value": 9, "label": "9" }
    ],
    "answer": 9,
    "answerLabel": "(E) 9",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_4",
    "hints": [
      "First find the sum she would have had if nothing had been left out.",
      "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45. Her answer is smaller than 45 and is a perfect square.",
      "Which perfect squares are just below 45? Remember she left out only one number, so the drop is at most 9."
    ],
    "method": "Find the full sum, then subtract the largest perfect square that is at most 9 below it.",
    "score": 3,
    "ratingReason": "Short and friendly, but it asks the learner to combine two facts: the total 45 and the size of a single missing number.",
    "solution": [
      "Adding all the integers from 1 to 9 gives 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45.",
      "Leaving out one number from 1 to 9 lowers the sum by at most 9, so her square is at least 45 − 9 = 36.",
      "The perfect squares near 45 are 36 and 49. Since 49 is larger than 45, her sum must be 36.",
      "The number left out is 45 − 36 = 9, and 9 is one of the numbers she was adding.",
      "Answer: E (9)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Use the size of one missing number as a limit.",
    "tip": "When exactly one item is missing, the total can only drop by an amount between the smallest and largest possible item. Compare that range with the nearby squares instead of testing all nine numbers.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Choosing 25 or 16 because those are also perfect squares below 45, without checking that leaving one number out cannot lower the sum that far.",
    "reflection": "Could her incorrect sum have been 25? What is the smallest sum she could possibly get by leaving out a single number from 1 to 9?",
    "alternative": "Test each square from the top: 45 − 36 = 9 works, while 45 − 25 = 20 is not a number from 1 to 9. So 9 is the only possible answer.",
    "reviewedAt": "2026-10-27"
  },
  "2024-5": {
    "id": "2024-5",
    "year": 2024,
    "number": 5,
    "suggestedPace": "1 min 30 sec",
    "title": "Which sum is impossible?",
    "topic": "Probability · dice · checking cases",
    "prompt": "Aaliyah rolls two standard 6-sided dice. She notices that the product of the two numbers rolled is a multiple of 6. Which of the following integers cannot be the sum of the two numbers rolled?",
    "wording": "restated",
    "options": [
      { "letter": "A", "value": 5, "label": "5" },
      { "letter": "B", "value": 6, "label": "6" },
      { "letter": "C", "value": 7, "label": "7" },
      { "letter": "D", "value": 8, "label": "8" },
      { "letter": "E", "value": 9, "label": "9" }
    ],
    "answer": 6,
    "answerLabel": "(B) 6",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_5",
    "hints": [
      "A product is a multiple of 6 when it contains both a factor 2 and a factor 3. What pairs of dice give that?",
      "Either one die shows 6, or the two dice show 2 and 3. Test each answer choice by trying to build that sum from one of those pairs.",
      "The only pairs adding to 6 are (1,5), (2,4), (3,3), (4,2), and (5,1). Multiply each pair and look for a multiple of 6."
    ],
    "method": "Describe the dice pairs that make a multiple of 6, then test each answer choice with them.",
    "score": 4,
    "ratingReason": "The mathematical content is small, but the learner must understand why 2 × 3 also works and not only a visible 6.",
    "solution": [
      "A product is a multiple of 6 exactly when it has a factor 2 and a factor 3. With two dice that happens when one die shows 6, or when the dice show 2 and 3 in either order.",
      "Sum 5: 2 + 3 = 5, and 2 × 3 = 6 is a multiple of 6, so 5 is possible.",
      "Sum 7: 1 + 6 = 7, and 1 × 6 = 6, so 7 is possible.",
      "Sum 8: 2 + 6 = 8, and 2 × 6 = 12, so 8 is possible.",
      "Sum 9: 3 + 6 = 9, and 3 × 6 = 18, so 9 is possible.",
      "Sum 6 comes only from (1,5), (2,4), (3,3), (4,2), (5,1), with products 5, 8, 9, 8, 5. None is a multiple of 6, so 6 cannot occur.",
      "Answer: B (6)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Read the question's direction twice.",
    "tip": "This question asks which sum cannot happen, so four of the five choices must be shown to work. Finding one working example for a choice is enough to eliminate it.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Assuming a factor 6 must appear on a die, which makes 5 and 7 look impossible even though 2 × 3 = 6 and 1 × 6 = 6.",
    "reflection": "Why does the pair (2,4) fail while (2,6) succeeds, even though both pairs contain a 2 and an even number?",
    "alternative": "List the products that are multiples of 6: 6 from (1,6), (2,3), (3,2), (6,1); 12 from (2,6), (3,4), (4,3), (6,2); 18 from (3,6), (6,3); 24 from (4,6), (6,4); 30 from (5,6), (6,5); 36 from (6,6). The sums 5, 7, 8, 9 all appear; 6 never does.",
    "reviewedAt": "2026-10-27"
  },
  "2024-6": {
    "id": "2024-6",
    "year": 2024,
    "number": 6,
    "suggestedPace": "1 min 30 sec",
    "title": "Which skating path is shortest",
    "topic": "Geometry · comparing path lengths",
    "prompt": "Sergei skated around an ice rink along four different paths. The four figures show the paths, labeled P, Q, R, and S, as the thick gray line inside the same rounded rink. What is the order of the four paths from shortest to longest?",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-6.png",
    "options": [
      {
        "letter": "A",
        "value": "A",
        "label": "P, Q, R, S"
      },
      {
        "letter": "B",
        "value": "B",
        "label": "P, R, S, Q"
      },
      {
        "letter": "C",
        "value": "C",
        "label": "Q, S, P, R"
      },
      {
        "letter": "D",
        "value": "D",
        "label": "R, P, S, Q"
      },
      {
        "letter": "E",
        "value": "E",
        "label": "R, S, P, Q"
      }
    ],
    "answer": "D",
    "answerLabel": "(D) R, P, S, Q",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_6",
    "hints": [
      "Start with paths P and R. They join roughly the same two parts of the rink, but P follows the rounded border while R cuts straight across the inside corners. Which is shorter?",
      "A straight segment between two points is always shorter than a detour between those same two points. Use that idea to compare P with R and then P with S.",
      "Paths Q and S make the same zigzag pattern, but each stroke of Q swings further out before it crosses. Compare a single crossing of each instead of the whole path."
    ],
    "method": "Compare the paths two at a time instead of trying to measure all four.",
    "score": 6,
    "ratingReason": "There is no arithmetic at all. The whole question is one geometric idea, that a straight cut between two points beats a detour, used three times with care.",
    "solution": [
      "Path R replaces the rounded end of path P with a straight cut across the inside, and a straight cut is shorter than the detour, so R is shorter than P.",
      "Path S replaces some of path P's travel along the border with straight lines across the rink, so P is shorter than S.",
      "Paths Q and S share the same zigzag pattern, but the diagonals of Q swing further from the center before crossing, so one stroke of S is shorter than one stroke of Q and S is shorter than Q.",
      "Putting the three comparisons together gives R < P < S < Q.",
      "Answer: D (R, P, S, Q)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Straight beats bent.",
    "tip": "When two paths join the same two points, the one with more straight travel is shorter. Compare them piece by piece, and ignore the stretches the two paths share.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Judging by how busy a path looks, or trying to measure all four at once, instead of comparing them two at a time.",
    "reflection": "Paths P and S start and end in the same places but differ in the middle. Explain why swapping a detour for a straight segment always makes a path shorter.",
    "alternative": "Lay one figure over another. S placed on P shows that S swaps border travel for a straight crossing, so P < S. S placed on Q shows that Q adds an extra outward swing at every crossing, so S < Q. AoPS Solution 3 uses exactly this overlay method, and Solution 2 reaches the same order by noting that a curved line is always longer than the straight line between its endpoints.",
    "reviewedAt": "2026-10-31"
  },
  "2024-7": {
    "id": "2024-7",
    "year": 2024,
    "number": 7,
    "suggestedPace": "2 min",
    "title": "Fewest one-by-one tiles",
    "topic": "Combinatorics · tiling and colouring",
    "prompt": "A 3 × 7 rectangle is covered without overlap by tiles of three shapes: 2 × 2 squares, 1 × 4 rectangles, and 1 × 1 squares, shown in the figure. What is the minimum possible number of 1 × 1 tiles used?",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-7.png",
    "options": [
      {
        "letter": "A",
        "value": 1,
        "label": "1"
      },
      {
        "letter": "B",
        "value": 2,
        "label": "2"
      },
      {
        "letter": "C",
        "value": 3,
        "label": "3"
      },
      {
        "letter": "D",
        "value": 4,
        "label": "4"
      },
      {
        "letter": "E",
        "value": 5,
        "label": "5"
      }
    ],
    "answer": 5,
    "answerLabel": "(E) 5",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_7",
    "hints": [
      "Every tile except the 1×1 covers exactly four squares. The rectangle holds a fixed number of squares, so what does that force about the small tiles?",
      "Write 21 minus the number of 1 × 1 tiles as a multiple of 4. That leaves only 1 and 5 as realistic candidates for the minimum.",
      "To rule out one tile, colour the columns alternately dark and light. Count the dark and light squares, then ask how many of each a 2 × 2 tile or a 1 × 4 tile covers."
    ],
    "method": "Use area to narrow the answer to two candidates, then use a colouring argument to eliminate the smaller one.",
    "score": 8,
    "ratingReason": "The area step is routine, but proving that a single 1 × 1 tile is impossible needs a colouring argument that most students will not invent on their own.",
    "solution": [
      "The rectangle has 3 × 7 = 21 unit squares. Each 2 × 2 tile and each 1 × 4 tile covers 4 squares, and a 1 × 4 tile cannot stand upright because the rectangle is only 3 squares tall.",
      "If x is the number of 1 × 1 tiles, then 21 − x is a multiple of 4, so x is 1 or 5 among the possibilities below 9.",
      "Colour the seven columns alternately dark and light so that the first and last columns are dark. The dark columns hold 4 × 3 = 12 squares and the light columns hold 3 × 3 = 9, a difference of 3.",
      "Every 2 × 2 tile covers two dark and two light squares, and every horizontal 1 × 4 tile also covers two dark and two light squares. The big tiles never change the dark-minus-light difference.",
      "So the 1 × 1 tiles must supply that difference of 3, which needs at least 3 of them. In particular a single 1 × 1 tile cannot work.",
      "Five tiles do work: tile a 3 × 4 block with two 2 × 2 tiles and one 1 × 4 tile, then tile the remaining 3 × 3 block with one 2 × 2 tile and five 1 × 1 tiles.",
      "Answer: E (5)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1–4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Area first, colour second.",
    "tip": "A mod-4 area count can only tell you that the answer is 1 or 5. To decide between them you need a second idea, such as colouring cells so that every big tile covers equal amounts of each colour.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Stopping at 1 because area alone allows it, without checking that a single 1 × 1 tile can actually be placed.",
    "reflection": "The colouring proves that at least 3 of the 1 × 1 tiles are needed, yet the answer is 5. What does the area count require that the colouring does not?",
    "alternative": "Count tiles instead of squares. With a 2 × 2 tiles, b 1 × 4 tiles, and c 1 × 1 tiles, 4a + 4b + c = 21, so c ≡ 1 (mod 4) and c is 1 or 5. AoPS Solution 2’s colouring then rules out c = 1, and the construction in the solution shows that c = 5 is possible.",
    "reviewedAt": "2026-10-31"
  },
  "2024-8": {
    "id": "2024-8",
    "year": 2024,
    "number": 8,
    "suggestedPace": "2 min",
    "title": "How many amounts on Thursday",
    "topic": "Counting · branching and duplicates",
    "prompt": "On Monday, Taye has $2. Every day he either gains $3 or doubles the amount of money he had on the previous day. How many different dollar amounts could Taye have on Thursday, three days later?",
    "wording": "restated",
    "options": [
      {
        "letter": "A",
        "value": 3,
        "label": "3"
      },
      {
        "letter": "B",
        "value": 4,
        "label": "4"
      },
      {
        "letter": "C",
        "value": 5,
        "label": "5"
      },
      {
        "letter": "D",
        "value": 6,
        "label": "6"
      },
      {
        "letter": "E",
        "value": 7,
        "label": "7"
      }
    ],
    "answer": 6,
    "answerLabel": "(D) 6",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_8",
    "hints": [
      "Work one day at a time instead of drawing every branch at once. On Monday Taye has only $2.",
      "On Tuesday he can have 2 + 3 = 5 or 2 × 2 = 4. On Wednesday, $5 leads to 8 or 10 and $4 leads to 7 or 8.",
      "Notice that $8 appears twice on Wednesday. Keep only the distinct amounts, then take one more day."
    ],
    "method": "Build the list of reachable amounts day by day and remove duplicates before moving on.",
    "score": 4,
    "ratingReason": "Only adding three and doubling, but the duplicate 8 is easy to miss and the bookkeeping is the whole question.",
    "solution": [
      "Monday: the only amount is $2.",
      "Tuesday: 2 + 3 = 5 or 2 × 2 = 4.",
      "Wednesday: from $5 Taye can reach 5 + 3 = 8 or 5 × 2 = 10, and from $4 he can reach 4 + 3 = 7 or 4 × 2 = 8. So the amounts are 7, 8, and 10, three values because $8 arrives two ways.",
      "Thursday: from $7, 7 + 3 = 10 and 7 × 2 = 14. From $8, 8 + 3 = 11 and 8 × 2 = 16. From $10, 10 + 3 = 13 and 10 × 2 = 20.",
      "The distinct amounts are 10, 11, 13, 14, 16, and 20, which is six different amounts.",
      "Answer: D (6)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Count amounts, not branches.",
    "tip": "Two different sequences can land on the same amount. Write each day’s amounts as a set and cross out repeats before the next day, or you will overcount.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Counting branches instead of amounts, which gives 8 and misses that $8 is reached twice on Wednesday.",
    "reflection": "How many sequences of choices reach Thursday, and why is the number of different amounts smaller than that?",
    "alternative": "Draw the tree and cross out repeats. After two days there are four branches but only three amounts, and each of those three amounts has two children on Thursday, all six of them different. AoPS Solution 3 uses the same brute-force tree.",
    "reviewedAt": "2026-10-31"
  },
  "2024-9": {
    "id": "2024-9",
    "year": 2024,
    "number": 9,
    "suggestedPace": "1 min",
    "title": "Total must be a multiple of seven",
    "topic": "Algebra · ratio reasoning",
    "prompt": "All the marbles in Maria's collection are red, green, or blue. Maria has half as many red marbles as green marbles and twice as many blue marbles as green marbles. Which of the following could be the total number of marbles in Maria's collection?",
    "wording": "restated",
    "options": [
      {
        "letter": "A",
        "value": 24,
        "label": "24"
      },
      {
        "letter": "B",
        "value": 25,
        "label": "25"
      },
      {
        "letter": "C",
        "value": 26,
        "label": "26"
      },
      {
        "letter": "D",
        "value": 27,
        "label": "27"
      },
      {
        "letter": "E",
        "value": 28,
        "label": "28"
      }
    ],
    "answer": 28,
    "answerLabel": "(E) 28",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_9",
    "hints": [
      "Give the smallest group a letter. Red is the smallest group here, so let the number of red marbles be x.",
      "Half as many red as green means green is 2x, not x/2. Twice as many blue as green then makes blue 4x.",
      "Add the three groups and see what the total must be divisible by. Then test the five choices."
    ],
    "method": "Write every group in terms of the smallest one, add, and read off the divisibility condition.",
    "score": 3,
    "ratingReason": "One ratio chain and a divisibility check. The only real trap is reading half as many red as green backwards.",
    "solution": [
      "Let the number of red marbles be x. Since red is half of green, green is 2x.",
      "Since blue is twice green, blue is 4x.",
      "The total is x + 2x + 4x = 7x, so the total must be a multiple of 7.",
      "Among 24, 25, 26, 27, and 28, only 28 is a multiple of 7.",
      "With 28 total, x = 4, giving 4 red, 8 green, and 16 blue marbles. Check: 4 is half of 8, and 16 is twice 8.",
      "Answer: E (28)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Translate from the smallest group.",
    "tip": "When a problem says one group is half of another, name the smaller one x. Multiplying is easier to keep straight than dividing, and the total usually comes out as a whole-number multiple.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Letting green be x/2 instead of 2x, which turns the total into a fraction of x and hides the multiple of 7.",
    "reflection": "If the total were 28, how many marbles of each colour would Maria have? Check that both ratios still hold.",
    "alternative": "Let green be g. Then red is g/2 and blue is 2g, so the total is g + g/2 + 2g = 7g/2. For the total to be a whole number, g must be even, and then the total is 7 × (g/2), again a multiple of 7. AoPS Solution 2 uses this route.",
    "reviewedAt": "2026-10-31"
  },
  "2024-10": {
    "id": "2024-10",
    "year": 2024,
    "number": 10,
    "suggestedPace": "1 min 30 sec",
    "title": "Carbon dioxide in 2030",
    "topic": "Arithmetic · rates and elapsed years",
    "prompt": "In January 1980 an observatory recorded a carbon dioxide level of 338 ppm (parts per million). Over the years the average reading has increased by about 1.515 ppm each year. What is the expected level, in ppm, in January 2030? Round your answer to the nearest integer.",
    "wording": "restated",
    "options": [
      {
        "letter": "A",
        "value": 399,
        "label": "399"
      },
      {
        "letter": "B",
        "value": 414,
        "label": "414"
      },
      {
        "letter": "C",
        "value": 420,
        "label": "420"
      },
      {
        "letter": "D",
        "value": 444,
        "label": "444"
      },
      {
        "letter": "E",
        "value": 459,
        "label": "459"
      }
    ],
    "answer": 414,
    "answerLabel": "(B) 414",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_10",
    "hints": [
      "Two dates fifty years apart and a rate per year. The one thing that must be right is how many years actually pass between them.",
      "The starting level and the yearly rise combine into an arithmetic picture: a fixed starting point plus the same increase repeated once per year. Turn that into one multiplication.",
      "January 1980 to January 2030 is 50 yearly steps. Adding 50 copies of the yearly rise to the starting reading is the whole calculation — the only difficulty is doing the product mentally."
    ],
    "method": "Find the elapsed years, multiply by the yearly rate, then add to the starting level and round once at the end.",
    "score": 4,
    "ratingReason": "Routine rate arithmetic with two easy slips built in: counting the years and knowing when to round.",
    "solution": [
      "From January 1980 to January 2030 is 2030 − 1980 = 50 years.",
      "The total increase is 1.515 × 50.",
      "Doubling and halving: 1.515 × 100 = 151.5, so 1.515 × 50 = 151.5 ÷ 2 = 75.75 ppm.",
      "Add the increase to the starting level: 338 + 75.75 = 413.75 ppm.",
      "Rounded to the nearest integer, the expected level is 414 ppm.",
      "Answer: B (414)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Doubling and halving beats long multiplication.",
    "tip": "To multiply by 50, multiply by 100 and halve, or multiply by 5 and add a zero. Here 1.515 × 5 = 7.575, so 1.515 × 50 = 75.75, which needs no calculator.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Counting 51 years instead of 50, or rounding 413.75 down to 413.",
    "reflection": "If the level had grown by 1.6 ppm each year instead, would the rounded answer change? Estimate first, then calculate.",
    "alternative": "Round only at the end. Rounding the yearly increase to 2 ppm first would give 338 + 100 = 438, which is wrong, so keep the exact 1.515 until the final step. AoPS Solution 3 makes the same point by treating the average increase as about 1.515 ppm per year over 50 years.",
    "reviewedAt": "2026-10-31"
  },
"2024-11": {
    "id": "2024-11",
    "year": 2024,
    "number": 11,
    "suggestedPace": "1 min 30 sec",
    "title": "Find y from a triangle area",
    "topic": "Geometry · coordinates and area",
    "prompt": "The vertices of triangle ABC are A(5, 7), B(11, 7), and C(3, y), where y > 7. The area of triangle ABC is 12. What is the value of y?",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-11.png",
    "options": [
      {
        "letter": "A",
        "value": 8,
        "label": "8"
      },
      {
        "letter": "B",
        "value": 9,
        "label": "9"
      },
      {
        "letter": "C",
        "value": 10,
        "label": "10"
      },
      {
        "letter": "D",
        "value": 11,
        "label": "11"
      },
      {
        "letter": "E",
        "value": 12,
        "label": "12"
      }
    ],
    "answer": 11,
    "answerLabel": "(D) 11",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_11",
    "hints": [
      "Two of the vertices share a y-coordinate, so one side is horizontal. The area formula then needs that base and a perpendicular height.",
      "The height is the vertical gap between C and the line y = 7. Since y > 7, that gap is y − 7, not 7 − y.",
      "Write area = ½ × base × height with the numbers you found and solve the small equation for y."
    ],
    "method": "Read the base off the shared y-coordinate, use the vertical gap as the height, then solve the area equation.",
    "score": 4,
    "ratingReason": "Two clean steps — measure a horizontal base, use a vertical height — with one guard against a sign slip.",
    "solution": [
      "A is (5, 7) and B is (11, 7), so AB is horizontal with length 11 − 5 = 6.",
      "C is (3, y) and y > 7, so C lies above the line y = 7 and the height of the triangle is y − 7.",
      "Area = ½ × 6 × (y − 7) = 3(y − 7).",
      "Since the area is 12, 3(y − 7) = 12, so y − 7 = 4 and y = 11.",
      "Check: with y = 11 the height is 4, and ½ × 6 × 4 = 12.",
      "Answer: D (11)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "A horizontal base makes the height vertical.",
    "tip": "When two vertices share a y-coordinate, the side between them is horizontal and its length is just the difference of the x-coordinates. The height from the third vertex is then a plain vertical distance, so no distance formula is needed.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Using 7 − y as the height and getting a negative length, or forgetting the ½ and solving 6(y − 7) = 12 for y = 9.",
    "reflection": "If C were below the line instead, with y < 7, how would you write the height so that it stays positive?",
    "alternative": "Shoelace formula. For A(5, 7), B(11, 7), C(3, y) the doubled area is |11y + 56 − (98 + 5y)| = |6y − 42|, so ½|6y − 42| = 12 gives |6y − 42| = 24, hence y = 11 or y = 3. The condition y > 7 keeps only y = 11. AoPS Solution 2 takes this route.",
    "reviewedAt": "2026-10-31"
  },
  "2024-12": {
    "id": "2024-12",
    "year": 2024,
    "number": 12,
    "suggestedPace": "1 min 30 sec",
    "title": "Ninety guppies in four tanks",
    "topic": "Algebra · building an equation",
    "prompt": "Rohan keeps a total of 90 guppies in 4 fish tanks. There is 1 more guppy in the 2nd tank than in the 1st tank. There are 2 more guppies in the 3rd tank than in the 2nd tank. There are 3 more guppies in the 4th tank than in the 3rd tank. How many guppies are in the 4th tank?",
    "wording": "restated",
    "options": [
      {
        "letter": "A",
        "value": 20,
        "label": "20"
      },
      {
        "letter": "B",
        "value": 21,
        "label": "21"
      },
      {
        "letter": "C",
        "value": 23,
        "label": "23"
      },
      {
        "letter": "D",
        "value": 24,
        "label": "24"
      },
      {
        "letter": "E",
        "value": 26,
        "label": "26"
      }
    ],
    "answer": 26,
    "answerLabel": "(E) 26",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_12",
    "hints": [
      "Every tank is described by adding to the tank before it, so name the tank that everything else is built from: the first one.",
      "Carry the additions one tank at a time. The third tank is not x + 2, because the 2 is added to the second tank, not to the first.",
      "Add the four expressions, set the total equal to 90, and solve. Then answer the question that was actually asked — the fourth tank, not the first."
    ],
    "method": "Write all four tanks in terms of the first, add, solve, then substitute into the fourth tank's expression.",
    "score": 4,
    "ratingReason": "Standard building-an-equation problem. The trap is chaining the additions incorrectly or stopping at x.",
    "solution": [
      "Let the first tank hold x guppies.",
      "The second tank holds 1 more, so x + 1.",
      "The third tank holds 2 more than the second, so (x + 1) + 2 = x + 3.",
      "The fourth tank holds 3 more than the third, so (x + 3) + 3 = x + 6.",
      "The total is x + (x + 1) + (x + 3) + (x + 6) = 4x + 10.",
      "Since the total is 90, 4x + 10 = 90, so 4x = 80 and x = 20.",
      "The fourth tank holds x + 6 = 20 + 6 = 26 guppies.",
      "Check: 20 + 21 + 23 + 26 = 90.",
      "Answer: E (26)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Chain the additions, then check the last one.",
    "tip": "When each item is described relative to the previous item, the extras pile up: 1, then 1 + 2, then 1 + 2 + 3. Writing the piles out before adding stops you from flattening them into 1, 2, 3.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Writing the tanks as x, x + 1, x + 2, x + 3 and solving 4x + 6 = 90, which is not a whole number and signals the misread.",
    "reflection": "If all four tanks were described as having the same number, how many guppies would each hold? How does that compare with your four values?",
    "alternative": "Level the tanks instead of using a variable. Pretend the first tank is empty: the four tanks would then hold 0, 1, 3, and 6 guppies, which is 10 in total. The remaining 90 − 10 = 80 guppies are shared evenly over four tanks, so each tank gets 20 on top, and the fourth holds 20 + 6 = 26. AoPS Solution 2 uses this leveling idea.",
    "reviewedAt": "2026-10-31"
  },
  "2024-13": {
    "id": "2024-13",
    "year": 2024,
    "number": 13,
    "suggestedPace": "2 min",
    "title": "Buzz Bunny comes back to the ground",
    "topic": "Combinatorics · counting paths",
    "prompt": "Buzz Bunny is hopping up and down a set of stairs, one step at a time. In how many ways can Buzz Bunny start on the ground, make a sequence of 6 hops, and end up back on the ground? (For example, one sequence of hops is up-up-down-down-up-down.)",
    "wording": "original",
    "diagram": "./assets/diagram-2024-13.png",
    "options": [
      {
        "letter": "A",
        "value": 4,
        "label": "4"
      },
      {
        "letter": "B",
        "value": 5,
        "label": "5"
      },
      {
        "letter": "C",
        "value": 6,
        "label": "6"
      },
      {
        "letter": "D",
        "value": 8,
        "label": "8"
      },
      {
        "letter": "E",
        "value": 12,
        "label": "12"
      }
    ],
    "answer": 5,
    "answerLabel": "(B) 5",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_13",
    "hints": [
      "Six hops back to the ground means the number of up-hops and down-hops has to balance. How many of each?",
      "Now think about the floor. A sequence that goes down first is impossible, and so is one that ever drops below the ground.",
      "The choices are small and there are only a handful of balanced orders. Listing them all and crossing out the impossible ones is faster than any formula here."
    ],
    "method": "Count the balanced up/down sequences and discard any that go below ground.",
    "score": 5,
    "ratingReason": "Short, but it rewards a systematic list and punishes counting all balanced orders without checking the floor.",
    "solution": [
      "Each hop changes Buzz's height by +1 (up) or −1 (down).",
      "To return to the ground after 6 hops, the 6 changes must add to 0, so there are 3 up-hops and 3 down-hops.",
      "Of the balanced orders, the ones that never go below the ground are: UUUDDD, UUDUDD, UUDDUD, UDUUDD, and UDUDUD.",
      "For example, UDDUUD is balanced but takes Buzz below the ground on the third hop, so it is not allowed.",
      "There are 5 valid sequences.",
      "Answer: B (5)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Balance first, then respect the floor.",
    "tip": "Two separate conditions decide these sequences: the hops must balance, and the running total must never go negative. Handle them in that order — balance narrows the list, and the floor throws out the rest.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Counting every order of three ups and three downs and answering 20, which ignores that Buzz cannot go below the ground.",
    "reflection": "Why can no valid sequence start with a down-hop? Say it in one sentence about Buzz's height.",
    "alternative": "Count paths on a grid. Put the number of up-hops on the horizontal axis and down-hops on the vertical axis; starting from (0, 0) and finishing at (3, 3) without ever having more downs than ups means staying in the lower-right triangle. Filling in each cell as the sum of the paths from its left and from below gives 5 at the corner. This is the same grid method the recommended video uses, and it extends to 8 hops by adding one row and one column.",
    "reviewedAt": "2026-10-31"
  },
  "2024-14": {
    "id": "2024-14",
    "year": 2024,
    "number": 14,
    "suggestedPace": "2 min",
    "title": "Shortest route from A to Z",
    "topic": "Geometry · networks and shortest paths",
    "prompt": "The one-way routes connecting towns A, M, C, X, Y, and Z are shown in the figure below (not drawn to scale). The distances in kilometers along each route are marked. Traveling along these routes, what is the shortest distance from A to Z, in kilometers?",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-14.png",
    "options": [
      {
        "letter": "A",
        "value": 28,
        "label": "28"
      },
      {
        "letter": "B",
        "value": 29,
        "label": "29"
      },
      {
        "letter": "C",
        "value": 30,
        "label": "30"
      },
      {
        "letter": "D",
        "value": 31,
        "label": "31"
      },
      {
        "letter": "E",
        "value": 32,
        "label": "32"
      }
    ],
    "answer": 28,
    "answerLabel": "(A) 28",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_14",
    "hints": [
      "The arrows only go one way, so the picture is not a map you can wander around. You have to move forward from A.",
      "Write down, at each town, the shortest distance from A that you have found so far — not the first route you happened to try.",
      "Update each town in turn: a town's best distance is the smallest over all roads into it of (best distance at the town before) + (that road)."
    ],
    "method": "Label each town with the shortest distance from A, updating one town at a time.",
    "score": 6,
    "ratingReason": "A whole short chapter of reasoning in one question — the learner has to invent bookkeeping, not just add numbers.",
    "solution": [
      "Start at A with distance 0.",
      "X can only be reached from A, so the shortest distance to X is 5.",
      "M can be reached from A directly in 8, or from X in 5 + 2 = 7. The smaller is 7.",
      "Y can be reached from X in 5 + 10 = 15, or from M in 7 + 6 = 13. The smaller is 13.",
      "C can be reached from M in 7 + 14 = 21, or from Y in 13 + 5 = 18. The smaller is 18.",
      "Z can be reached from C in 18 + 10 = 28, from Y in 13 + 17 = 30, or from M in 7 + 25 = 32. The smallest is 28.",
      "The shortest route is A → X → M → Y → C → Z, with distances 5 + 2 + 6 + 5 + 10 = 28.",
      "Answer: A (28)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1, 2, and 4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Label the towns, not the routes.",
    "tip": "There are many routes but only six towns. Record one best-so-far number per town and you never have to re-explore the left side of the diagram; each new number already contains every shortcut found so far.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Following the first route that reaches Z and stopping, without checking whether a different combination of roads is shorter.",
    "reflection": "Route A → M → Z is the most direct-looking way to Z. What is its length, and why does the answer ignore it?",
    "alternative": "Cross off roads that are never worth taking. A → M (8) loses to A → X → M (7); X → Y (10) loses to X → M → Y (8); Y → Z (17) loses to Y → C → Z (15); M → C (14) loses to M → Y → C (11). M → Z (25) survives this pruning because it undercuts M → C → Z, but measured from A it costs 7 + 25 = 32, which still loses to 28. AoPS Solution 4 prunes road by road in this style and is left with the single path A → X → M → Y → C → Z.",
    "reviewedAt": "2026-10-31"
  },
  "2024-15": {
    "id": "2024-15",
    "year": 2024,
    "number": 15,
    "suggestedPace": "2 min 30 sec",
    "title": "FLYFLY times eight",
    "topic": "Number theory · place value and digits",
    "prompt": "Let the letters F, L, Y, B, U, G represent distinct digits. Suppose FLYFLY, the six-digit number made by writing the three-digit block FLY twice, is the greatest number that satisfies the equation below, where BUGBUG is built from BUG in the same way. What is the value of FLY + BUG?",
    "wording": "restated",
    "expression": "8 × FLYFLY = BUGBUG",
    "options": [
      {
        "letter": "A",
        "value": 1089,
        "label": "1089"
      },
      {
        "letter": "B",
        "value": 1098,
        "label": "1098"
      },
      {
        "letter": "C",
        "value": 1107,
        "label": "1107"
      },
      {
        "letter": "D",
        "value": 1116,
        "label": "1116"
      },
      {
        "letter": "E",
        "value": 1125,
        "label": "1125"
      }
    ],
    "answer": 1107,
    "answerLabel": "(C) 1107",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_15",
    "hints": [
      "Writing a three-digit block twice multiplies it by the same number every time. Find that number once and both six-digit numbers collapse.",
      "Divide the equation by 1001. That turns a six-digit puzzle into 8 × FLY = BUG, and BUG must still be a three-digit number.",
      "BUG is a three-digit number, so 8 × FLY cannot reach 1000. Find the largest FLY that keeps BUG three digits, then test downward until all six digits are different."
    ],
    "method": "Replace each doubled block by 1001 times the block, cancel 1001, then search downward from the largest possible FLY.",
    "score": 7,
    "ratingReason": "Needs the 1001 insight before any digit work, then a disciplined search — and the search only pays off if the distinct-digit condition is actually checked.",
    "solution": [
      "Write FLYFLY = 1001 × FLY and BUGBUG = 1001 × BUG.",
      "The equation becomes 8 × 1001 × FLY = 1001 × BUG.",
      "Divide both sides by 1001: 8 × FLY = BUG.",
      "BUG must be a three-digit number, so 8 × FLY ≤ 999, giving FLY ≤ 124. Since 8 × 125 = 1000 is already four digits, FLY is at most 124.",
      "Try the largest candidates: 8 × 124 = 992 repeats the 9 and the 2, so it fails.",
      "8 × 123 = 984 uses 1, 2, 3, 9, 8, 4 — six different digits, so FLY = 123 is the greatest that works.",
      "Then FLY + BUG = 123 + 984 = 1107.",
      "Answer: C (1107)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "A doubled block is a multiple of 1001.",
    "tip": "Any three-digit block written twice equals 1001 times that block, because the second copy sits exactly three places to the left. Spotting that factor turns a six-digit multiplication into a one-digit one.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Stopping at the first FLY that makes 8 × FLY a three-digit number, without testing whether all six digits are distinct, and forgetting that the question asks for FLY + BUG rather than either number alone.",
    "reflection": "8 × 124 = 992 is larger than 984. Why does the distinct-digit rule knock out the larger number and keep the smaller one?",
    "alternative": "Work digit by digit with carries. The units column forces 8 × Y to end in G, the tens column forces 8 × L plus the carry to end in U, and the hundreds column forces 8 × F plus the carry to end in B with a possible carry out. Searching from the largest F downward is the same as the division above but slower unless you are careful, which mirrors why AoPS Solution 1 factors out 1001.",
    "reviewedAt": "2026-10-31"
  },
  "2024-16": {
    "id": "2024-16",
    "year": 2024,
    "number": 16,
    "suggestedPace": "2 min 30 sec",
    "title": "Rows and columns divisible by three",
    "topic": "Number theory · divisibility",
    "prompt": "Minh enters the numbers 1 through 81 into the cells of a 9 × 9 grid, one number per cell, in some order. She then calculates the product of the nine numbers in each row and the product of the nine numbers in each column. What is the least number of rows and columns that could have a product divisible by 3?",
    "wording": "restated",
    "facts": [
      "Grid: 9 × 9, holding the numbers 1 through 81 once each",
      "Each row and each column has a product of its nine numbers",
      "Count rows plus columns whose product is divisible by 3"
    ],
    "options": [
      {
        "letter": "A",
        "value": 8,
        "label": "8"
      },
      {
        "letter": "B",
        "value": 9,
        "label": "9"
      },
      {
        "letter": "C",
        "value": 10,
        "label": "10"
      },
      {
        "letter": "D",
        "value": 11,
        "label": "11"
      },
      {
        "letter": "E",
        "value": 12,
        "label": "12"
      }
    ],
    "answer": 11,
    "answerLabel": "(D) 11",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_16",
    "hints": [
      "A product is divisible by 3 as soon as one factor in it is a multiple of 3. Start by counting the multiples of 3 among the numbers 1 through 81.",
      "There are 27 multiples of 3. To keep the answer small, those 27 numbers should share as few rows and columns as possible.",
      "The cells holding the 27 multiples of 3 form a rectangle a cells wide and b cells tall. You need a × b at least 27, and the number of rows plus columns is a + b."
    ],
    "method": "Count the multiples of 3, pack them into the smallest rectangle, and compare a + b.",
    "score": 7,
    "ratingReason": "Short once you see that one multiple of 3 decides a whole row, but the optimisation step — testing 4 × 7 against 5 × 5 — is where most solvers stop early.",
    "solution": [
      "In 1 through 81 there are 81 ÷ 3 = 27 multiples of 3.",
      "A row or column has a product divisible by 3 exactly when at least one of its cells holds a multiple of 3.",
      "So the question becomes: how few rows and columns can together contain all 27 multiples of 3?",
      "The cells being counted form a rectangle a cells wide and b cells tall, so a × b is at least 27 and the number of lines is a + b.",
      "If a + b were 10, the largest possible rectangle is 5 × 5 = 25 cells, which cannot hold 27 numbers.",
      "If a + b is 11, a 4 × 7 rectangle has 28 cells, enough for all 27 multiples of 3, using 4 rows and 7 columns.",
      "So 10 is impossible and 11 is possible, and the least number of rows and columns is 11.",
      "Answer: D (11)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "One multiple of 3 is enough.",
    "tip": "Divisibility by 3 only needs a single multiple of 3 in the whole row or column, so the problem is really about packing 27 special cells into a rectangle. Push the two sides of that rectangle as close together as the packing allows.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Answering 12 by noticing 3 × 9 = 27 and stopping there, without trying a 4 × 7 rectangle, whose sides add to only 11.",
    "reflection": "Why does the answer count rows plus columns rather than the rows multiplied by the columns?",
    "alternative": "Start from 27 = 3 × 9, which gives 3 + 9 = 12 lines, then look for a rectangle of at least 27 cells with a smaller sum of sides. A sum of 11 allows at most 5 × 6 = 30 but the useful shape is 4 × 7 = 28, and a sum of 10 caps the area at 5 × 5 = 25. AoPS Solution 1 states the same thing as minimising a + b subject to ab ≥ 27.",
    "reviewedAt": "2026-10-31"
  },
  "2024-17": {
    "id": "2024-17",
    "year": 2024,
    "number": 17,
    "suggestedPace": "2 min",
    "title": "Two kings that cannot see each other",
    "topic": "Combinatorics · counting cases",
    "prompt": "A chess king attacks every square one step away from it — horizontally, vertically, or diagonally. For example, a king on the centre square of a 3 × 3 grid attacks all 8 other squares, as shown. A white king and a black king are placed on two different squares of a 3 × 3 grid so that neither king attacks the other. In how many ways can this be done?",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-17.png",
    "options": [
      {
        "letter": "A",
        "value": 20,
        "label": "20"
      },
      {
        "letter": "B",
        "value": 24,
        "label": "24"
      },
      {
        "letter": "C",
        "value": 27,
        "label": "27"
      },
      {
        "letter": "D",
        "value": 28,
        "label": "28"
      },
      {
        "letter": "E",
        "value": 32,
        "label": "32"
      }
    ],
    "answer": 32,
    "answerLabel": "(E) 32",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_17",
    "hints": [
      "Think about the centre square first. What does a king in the centre leave for the other king?",
      "The other eight squares are of two kinds: the four corners and the four edge middles. Count how many squares each kind leaves free.",
      "A corner king attacks only 3 squares, so 8 − 3 = 5 squares stay free. An edge-middle king attacks 5 squares, so only 8 − 5 = 3 stay free."
    ],
    "method": "Split the squares by type — corner, edge middle, centre — then multiply the squares of each type by the safe squares it leaves.",
    "score": 5,
    "ratingReason": "The idea appears as soon as you notice the centre is unusable; the rest is careful casework with no overlap between cases.",
    "solution": [
      "A king on the centre square attacks all eight other squares, so the centre can never hold one of the two kings.",
      "Put the first king on a corner. It attacks 3 squares, leaving 8 − 3 = 5 safe squares for the second king. There are 4 corners, so that gives 4 × 5 = 20 arrangements.",
      "Put the first king on an edge middle. It attacks 5 squares, leaving 8 − 5 = 3 safe squares. There are 4 edge middles, so that gives 4 × 3 = 12 arrangements.",
      "The centre contributes nothing, so the total is 20 + 12 = 32.",
      "Each arrangement is counted exactly once, because the casework starts from where the white king sits and then counts only the black king's squares.",
      "Answer: E (32)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Sort the squares by type, then multiply.",
    "tip": "Instead of listing pairs of squares, group the squares by how many squares their king attacks. Corners attack 3, edge middles attack 5, and the centre attacks 8 — so the centre is never usable.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Counting each pair of squares only once and reporting 16, or forgetting that swapping the two kings gives a different placement of a white king and a black king.",
    "reflection": "Why does the centre square never appear in a valid placement, no matter which king is placed there first?",
    "alternative": "Count the other way. There are 9 × 8 = 72 ordered placements of the two kings, so subtract the attacking ones: a corner king attacks 3 squares, an edge-middle king 5, and a centre king 8, giving 4 × 3 + 4 × 5 + 1 × 8 = 40 attacking placements. Then 72 − 40 = 32, the same answer by complementary counting, which is how AoPS Solution 3 builds it.",
    "reviewedAt": "2026-10-31"
  },
  "2024-18": {
    "id": "2024-18",
    "year": 2024,
    "number": 18,
    "suggestedPace": "2 min 30 sec",
    "title": "Equal shaded and unshaded rings",
    "topic": "Geometry · area from a diagram",
    "prompt": "Three concentric circles centred at O have radii 1, 2, and 3. Points B and C lie on the largest circle. The region between the two smaller circles is shaded, and so is the part of the region between the two larger circles inside the central angle ∠BOC, as shown. The shaded and unshaded regions have equal area. What is the measure of ∠BOC, in degrees?",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-18.png",
    "options": [
      {
        "letter": "A",
        "value": 108,
        "label": "108"
      },
      {
        "letter": "B",
        "value": 120,
        "label": "120"
      },
      {
        "letter": "C",
        "value": 135,
        "label": "135"
      },
      {
        "letter": "D",
        "value": 144,
        "label": "144"
      },
      {
        "letter": "E",
        "value": 150,
        "label": "150"
      }
    ],
    "answer": 108,
    "answerLabel": "(A) 108",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_18",
    "hints": [
      "Work in multiples of π and leave π out of the arithmetic. The largest circle has area 9π, and the two colours cover it equally.",
      "The shaded inner part is a whole ring, and the shaded outer part is only a slice of the ring between radii 2 and 3.",
      "Find the slice's area by subtraction, then ask what fraction of that ring the slice is."
    ],
    "method": "Find the shaded area required, subtract the full inner ring, and convert the remaining slice into a fraction of 360°.",
    "score": 7,
    "ratingReason": "Nothing here is hard on its own, but three areas have to be kept straight and the sector must be scaled against the outer ring, not against the whole circle.",
    "solution": [
      "The largest circle has area π × 3² = 9π, so the shaded region and the unshaded region each have area 4.5π.",
      "The shaded piece between radii 1 and 2 is a complete ring: 4π − π = 3π.",
      "The ring between radii 2 and 3 has area 9π − 4π = 5π, and only its sector ∠BOC is shaded.",
      "That sector must therefore have area 4.5π − 3π = 1.5π.",
      "The sector is 1.5π ÷ 5π = 0.3 of the whole outer ring, so ∠BOC = 0.3 × 360° = 108°.",
      "Check: the unshaded part is π from the centre circle plus 0.7 × 5π = 3.5π from the rest of the outer ring, which is 4.5π, matching the shaded area.",
      "Answer: A (108)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1, 2, and 4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Area first, angle second.",
    "tip": "Shaded area equals the inner ring plus a slice of the outer ring. Compute the slice's area by subtraction, then turn that area into a fraction of the outer ring and multiply by 360°.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Scaling the slice against the whole circle instead of against the outer ring, or finding 0.3 of 360° and then reporting the unshaded angle 252°.",
    "reflection": "The shaded inner ring has area 3π while the unshaded centre is only π. Why is the answer still less than 180°?",
    "alternative": "Let x be the fraction of a full turn in ∠BOC. The outer ring adds 5x to the shaded area and 5(1 − x) to the unshaded area, while the inner ring adds 3 to the shaded side and the centre circle adds 1 to the unshaded side. Setting 1 + 5(1 − x) = 3 + 5x gives 6 − 5x = 3 + 5x, so x = 0.3 and the angle is 108°, which is the route AoPS Solution 4 takes.",
    "reviewedAt": "2026-10-31"
  },
  "2024-19": {
    "id": "2024-19",
    "year": 2024,
    "number": 19,
    "suggestedPace": "2 min 30 sec",
    "title": "The fewest red high-tops",
    "topic": "Combinatorics · optimization · pairing",
    "prompt": "Jordan owns 15 pairs of sneakers. Three fifths of the pairs are red and the rest are white. Two thirds of the pairs are high-top and the rest are low-top. The red high-top pairs make up some fraction of the whole collection. What is the least possible value of that fraction?",
    "wording": "restated",
    "options": [
      {
        "letter": "A",
        "value": "0",
        "label": "0"
      },
      {
        "letter": "B",
        "value": "1/5",
        "label": "1/5"
      },
      {
        "letter": "C",
        "value": "4/15",
        "label": "4/15"
      },
      {
        "letter": "D",
        "value": "1/3",
        "label": "1/3"
      },
      {
        "letter": "E",
        "value": "2/5",
        "label": "2/5"
      }
    ],
    "answer": "4/15",
    "answerLabel": "(C) 4/15",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_19",
    "hints": [
      "Turn the fractions into counts before reasoning about the overlap. How many pairs are red, and how many are high-top?",
      "The red high-tops belong to both groups at once. To make that group small, let the white pairs take as many of the high-top places as they can.",
      "There are 6 white pairs and 10 high-top pairs, so at most 6 high-tops can be white. At least how many high-tops are left?"
    ],
    "method": "Make a two-way table with rows red/white and columns high-top/low-top, then push the red high-top corner as small as the totals allow.",
    "score": 8,
    "ratingReason": "Needs a real minimisation insight — the white group acts as a cap on how few red high-tops there can be — and a two-way table to see it. The tempting independent-multiplication answer is wrong in the opposite direction.",
    "solution": [
      "Three fifths of 15 is 9, so 9 pairs are red and 6 are white.",
      "Two thirds of 15 is 10, so 10 pairs are high-top and 5 are low-top.",
      "To make the red high-top group as small as possible, put as many white pairs as possible into the high-top group: all 6 of them.",
      "That leaves 10 − 6 = 4 high-top pairs that must be red, and those 4 use 4 of the 9 red pairs.",
      "The remaining 5 red pairs are low-top, which is exactly the 5 low-top places, and no white pair is low-top.",
      "Check the totals: 4 + 5 = 9 red, and 4 + 6 = 10 high-top.",
      "The fraction is 4/15, and it cannot be smaller, because the 6 white pairs can absorb at most 6 of the 10 high-top places.",
      "Answer: C (4/15)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Fill the corner that must be small.",
    "tip": "Draw the two-way table, write the row and column totals, then push the smallest corner to its limit. The limit comes from the other totals, not from multiplying the two fractions.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Multiplying 3/5 × 2/3 = 2/5 and calling it the answer. That product is the largest possible value, which appears as a tempting choice, not the least.",
    "reflection": "Your table ends up with a 0 in the white low-top corner. Why is that allowed, while a 0 in the red high-top corner is not?",
    "alternative": "Use the overlap rule. In any two-way split, the number of items in both groups is at least (red) + (high-top) − (total) = 9 + 10 − 15 = 4, so at least 4 pairs are red high-tops and the least fraction is 4/15. The same rule gives the largest overlap as the smaller of the two group sizes, which would be 2/5 here.",
    "reviewedAt": "2026-10-31"
  },
  "2024-20": {
    "id": "2024-20",
    "year": 2024,
    "number": 20,
    "suggestedPace": "2 min 30 sec",
    "title": "Equilateral triangles on a cube",
    "topic": "Geometry · 3D cube counting",
    "prompt": "Any three vertices of the cube PQRSTUVW, shown below, can be joined to form a triangle. For example, vertices P, Q, and R can be joined to form triangle PQR. How many of these triangles are equilateral and contain P as a vertex?",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-20.png",
    "options": [
      {
        "letter": "A",
        "value": 0,
        "label": "0"
      },
      {
        "letter": "B",
        "value": 1,
        "label": "1"
      },
      {
        "letter": "C",
        "value": 2,
        "label": "2"
      },
      {
        "letter": "D",
        "value": 3,
        "label": "3"
      },
      {
        "letter": "E",
        "value": 6,
        "label": "6"
      }
    ],
    "answer": 3,
    "answerLabel": "(D) 3",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_20",
    "hints": [
      "Give the cube a side length of 1 and list the possible lengths of a segment joining two vertices.",
      "There are only three such lengths: an edge 1, a face diagonal √2, and a space diagonal √3. An equilateral triangle needs the same length three times.",
      "From P, the face diagonals reach T, R, and V. Those three points are themselves a face diagonal apart, so any two of them work with P."
    ],
    "method": "Label the cube with side 1, list the three possible distances, then keep only the distance that occurs three times at P.",
    "score": 6,
    "ratingReason": "The distance insight is the whole problem. Without it the drawing misleads, because two of the three correct triangles look skewed.",
    "solution": [
      "Give the cube side length 1. A segment joining two vertices is an edge of length 1, a face diagonal of length √2, or a space diagonal of length √3.",
      "An equilateral triangle needs all three sides equal, so the side length must be one that can appear three times around P.",
      "The three edges from P are too short to pair up, and the only space diagonal from P goes to U, so an equilateral triangle through P must use face diagonals.",
      "The face diagonals from P are PT, PR, and PV.",
      "Any two of those, together with P, form a triangle whose third side is also a face diagonal: RT, RV, and TV are each √2.",
      "The triangles are PRT, PRV, and PTV, so there are 3 of them.",
      "Answer: D (3)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1, 2, and 4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Only face diagonals can repeat.",
    "tip": "Put a number on the cube's side and sort every segment by its length. Questions about lengths and equilateral triangles become arithmetic once you stop trusting the perspective drawing.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Answering 6 by allowing triangles built on a cube edge, or missing PRV and PTV because those two triangles look slanted rather than equilateral in the drawing.",
    "reflection": "Each of the 8 cube vertices belongs to exactly 3 of these triangles. What does 8 × 3 tell you about the total number of equilateral triangles on a cube, and why do you divide by 3?",
    "alternative": "Sort the vertices by distance from P: Q, W, and S are one edge away, T, R, and V are a face diagonal away, and U is a space diagonal away. Only the three face-diagonal points are mutually the same distance apart, so choosing two of them gives 3 triangles. AoPS Solution 2 describes this as choosing 2 of the 3 compatible points.",
    "reviewedAt": "2026-10-31"
  },
  "2024-21": {
    "id": "2024-21",
    "year": 2024,
    "number": 21,
    "suggestedPace": "2 min 30 sec",
    "title": "Frogs changing colour",
    "topic": "Ratios · proportions",
    "prompt": "A group of frogs (called an army) lives in a tree. A frog turns green when in the shade and turns yellow when in the sun. Initially, the ratio of green frogs to yellow frogs was 3 : 1. Then 3 green frogs moved to the sunny side and 5 yellow frogs moved to the shady side. Now the ratio is 4 : 1. What is the difference between the number of green frogs and the number of yellow frogs now?",
    "wording": "restated",
    "facts": [
      "Green : yellow starts at 3 : 1",
      "3 green frogs move to the sun and 5 yellow frogs move to the shade",
      "Green : yellow is now 4 : 1"
    ],
    "options": [
      {
        "letter": "A",
        "value": 10,
        "label": "10"
      },
      {
        "letter": "B",
        "value": 12,
        "label": "12"
      },
      {
        "letter": "C",
        "value": 16,
        "label": "16"
      },
      {
        "letter": "D",
        "value": 20,
        "label": "20"
      },
      {
        "letter": "E",
        "value": 24,
        "label": "24"
      }
    ],
    "answer": 24,
    "answerLabel": "(E) 24",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_21",
    "hints": [
      "Every frog that changes sides also changes colour. Follow the net change in each group, not just the frogs that left.",
      "Green gains the 5 arrivals and loses the 3 departures, so green goes up by 2. Yellow goes down by 2. Both changes are the same size.",
      "Let the starting yellow count be y, so green starts at 3y. After the moves green is 3y + 2 and yellow is y − 2, and the new ratio says 3y + 2 = 4(y − 2)."
    ],
    "method": "Name the smaller starting group with a letter, update both groups by the net moves, then use the new ratio.",
    "score": 5,
    "ratingReason": "The ratio arithmetic is short, but the trap is the direction of the moves: a frog arriving on a side adds to that colour. Missing that makes the equation unsolvable.",
    "solution": [
      "Let the initial number of yellow frogs be y. The initial ratio 3 : 1 means there are 3y green frogs.",
      "The moves change each group by 2. Green gains the 5 frogs arriving from the sun and loses the 3 leaving for the sun, so green becomes 3y + 2. Yellow loses 5 and gains 3, so yellow becomes y − 2.",
      "The new ratio is 4 : 1, so 3y + 2 = 4(y − 2).",
      "Expanding gives 3y + 2 = 4y − 8, so y = 10.",
      "There are now 3(10) + 2 = 32 green frogs and 10 − 2 = 8 yellow frogs.",
      "The difference is 32 − 8 = 24.",
      "Answer: E (24)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1, 2, and 3.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Track the net change, not each move.",
    "tip": "Both groups change by the same amount when frogs swap sides, so you only need one equation. Write the change as a single number and the ratio does the rest.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Moving frogs without changing their colour, or reading 3 : 1 and 4 : 1 as totals of 4 and 5 frogs. A ratio tells you the parts, never the size of the army.",
    "reflection": "There are 40 frogs both before and after the moves. Why must the total stay the same, and how could starting from 40 instead of y lead you to the same answer?",
    "alternative": "Total-first method: green is 3/4 = 15/20 of the army before and 4/5 = 16/20 after, so the 2 frogs of net gain are 1/20 of the army. The army has 40 frogs, giving 32 green and 8 yellow, a difference of 24.",
    "reviewedAt": "2026-11-01"
  },
  "2024-22": {
    "id": "2024-22",
    "year": 2024,
    "number": 22,
    "suggestedPace": "2 min 30 sec",
    "title": "How long is the tape?",
    "topic": "Geometry · area from a diagram",
    "prompt": "A roll of tape is 4 inches in diameter and is wrapped around a ring that is 2 inches in diameter. A cross section of the tape is shown in the figure below. The tape is 0.015 inches thick. If the tape is completely unrolled, approximately how long would it be? Round your answer to the nearest 100 inches.",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-22.png",
    "options": [
      {
        "letter": "A",
        "value": 300,
        "label": "300"
      },
      {
        "letter": "B",
        "value": 600,
        "label": "600"
      },
      {
        "letter": "C",
        "value": 1200,
        "label": "1200"
      },
      {
        "letter": "D",
        "value": 1500,
        "label": "1500"
      },
      {
        "letter": "E",
        "value": 1800,
        "label": "1800"
      }
    ],
    "answer": 600,
    "answerLabel": "(B) 600",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_22",
    "hints": [
      "Look at the tape from the side. Rolling and unrolling changes the shape of that side view, but not its area.",
      "Rolled up, the side view is a ring with outer radius 2 inches and inner radius 1 inch. Unrolled, it is a long thin rectangle 0.015 inches wide.",
      "The ring's area is π(2²) − π(1²) = 3π ≈ 9.42 square inches. Divide by the thickness: 9.42 ÷ 0.015 ≈ 628 inches."
    ],
    "method": "Side-view area stays the same: ring area ÷ tape thickness = unrolled length.",
    "score": 6,
    "ratingReason": "One idea solves it, but the idea is not obvious: the figure must be read as area rather than as circles, and the diameters must be turned into radii.",
    "solution": [
      "The side view of the rolled tape is a ring. Its outer diameter is 4 inches, so its outer radius is 2 inches, and its inner diameter is 2 inches, so its inner radius is 1 inch.",
      "The ring's area is π(2²) − π(1²) = 4π − π = 3π square inches.",
      "Unrolled, the tape's side view is a long thin rectangle. It is 0.015 inches wide and L inches long, so its area is 0.015L.",
      "The area does not change, so 0.015L = 3π.",
      "Then L = 3π ÷ 0.015 ≈ 3(3.1416) ÷ 0.015 ≈ 628 inches.",
      "Rounded to the nearest 100 inches, the tape is about 600 inches long.",
      "Answer: B (600)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 2, 3, and 4.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Area is the bridge between shapes.",
    "tip": "A thin strip's area is width × length, so length = area ÷ width. Whenever a shape is rearranged without losing material, its area is the number that survives.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Using the 4-inch diameter as a radius, which doubles the ring's area and pushes the answer to about 1200. The figure labels diameters, not radii.",
    "reflection": "The choices are 300, 600, 1200, 1500, and 1800. Which one comes from treating the whole roll as one circle of diameter 4, and why is that too big?",
    "alternative": "Count layers instead of area: the ring is 1 ÷ 0.015 ≈ 66 layers thick, and an average layer sits at diameter 3 inches with circumference 3π. Then 66 × 3π ≈ 66 × 9.42 ≈ 620 inches, again closest to 600.",
    "reviewedAt": "2026-11-01"
  },
  "2024-23": {
    "id": "2024-23",
    "year": 2024,
    "number": 23,
    "suggestedPace": "3 min",
    "title": "Cells crossed by a long segment",
    "topic": "Geometry · grid paths · Manhattan distance",
    "prompt": "Rodrigo has a very large sheet of graph paper. First he draws a line segment connecting point (0,4) to point (2,0) and colors the 4 cells whose interiors intersect the segment, as shown below. Next Rodrigo draws a line segment connecting point (2000,3000) to point (5000,8000). How many cells will he color this time?",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-23.png",
    "facts": [
      "Sample segment: (0,4) to (2,0), which colors 4 cells",
      "New segment: (2000,3000) to (5000,8000)"
    ],
    "options": [
      {
        "letter": "A",
        "value": 6000,
        "label": "6000"
      },
      {
        "letter": "B",
        "value": 6500,
        "label": "6500"
      },
      {
        "letter": "C",
        "value": 7000,
        "label": "7000"
      },
      {
        "letter": "D",
        "value": 7500,
        "label": "7500"
      },
      {
        "letter": "E",
        "value": 8000,
        "label": "8000"
      }
    ],
    "answer": 7000,
    "answerLabel": "(C) 7000",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_23",
    "hints": [
      "Where the segment starts does not matter — only how far it travels. From (2000,3000) to (5000,8000) it moves right 3000 and up 5000.",
      "The numbers 3000 and 5000 share a factor of 1000, so the whole segment is 1000 copies of a small segment that moves right 3 and up 5.",
      "Draw the 3-by-5 piece. It crosses 2 interior vertical lines and 4 interior horizontal lines, so it enters 1 + 2 + 4 = 7 cells. Multiply by 1000."
    ],
    "method": "Shrink the segment by its greatest common divisor, count the small piece, then scale back up.",
    "score": 7,
    "ratingReason": "The reduction step is the whole problem, and nothing in the statement announces it. A learner who only looks at the two small coordinate differences gets 8000 and never sees the shared factor.",
    "solution": [
      "Only the change in position matters. The segment goes right 5000 − 2000 = 3000 and up 8000 − 3000 = 5000.",
      "The greatest common divisor of 3000 and 5000 is 1000, so the full segment is 1000 copies of a segment that goes right 3 and up 5.",
      "No lattice point lies inside one small piece, because 3 and 5 share no factor greater than 1. So each piece crosses grid lines cleanly, one new cell at a time.",
      "Inside a 3-by-5 piece the segment crosses 3 − 1 = 2 interior vertical grid lines and 5 − 1 = 4 interior horizontal grid lines. That is 6 crossings.",
      "Starting in the first cell and adding one cell per crossing, each piece passes through 6 + 1 = 7 cells.",
      "The full segment is 1000 such pieces, so it colors 1000 × 7 = 7000 cells.",
      "Answer: C (7000)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1 and its stated general form.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Cells crossed = Δx + Δy − gcd(Δx, Δy).",
    "tip": "The subtraction fixes the double counting that happens when the segment passes exactly through a grid corner, where it enters two new cells at once.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Answering 8000 with Δx + Δy, which counts a lattice point twice. The sample segment shows the effect: 2 + 4 = 6, but only 4 cells are colored.",
    "reflection": "Check the sample with the formula: Δx = 2, Δy = 4, gcd = 2, so 2 + 4 − 2 = 4 cells. Why does the gcd matter for this segment but not for a segment with coprime steps?",
    "alternative": "Use the formula in one line: 3000 + 5000 − gcd(3000, 5000) = 8000 − 1000 = 7000. The same formula gives 2 + 4 − 2 = 4 for the sample.",
    "reviewedAt": "2026-11-01"
  },
  "2024-24": {
    "id": "2024-24",
    "year": 2024,
    "number": 24,
    "suggestedPace": "2 min 30 sec",
    "title": "Two mountains of stained glass",
    "topic": "Geometry · Pythagorean theorem",
    "prompt": "Jean has made a piece of stained glass art in the shape of two mountains, as shown in the figure below. One mountain peak is 8 feet high while the other peak is 12 feet high. Each peak forms a 90° angle, and the straight sides form a 45° angle with the ground. The artwork has an area of 183 square feet. The sides of the mountain meet at an intersection point near the center of the artwork, h feet above the ground. What is the value of h?",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-24.png",
    "options": [
      {
        "letter": "A",
        "value": 4,
        "label": "4"
      },
      {
        "letter": "B",
        "value": 5,
        "label": "5"
      },
      {
        "letter": "C",
        "value": "4√2",
        "label": "4√2"
      },
      {
        "letter": "D",
        "value": 6,
        "label": "6"
      },
      {
        "letter": "E",
        "value": "5√2",
        "label": "5√2"
      }
    ],
    "answer": 5,
    "answerLabel": "(B) 5",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_24",
    "hints": [
      "Extend the inner side of each mountain down to the ground. The artwork then looks like two triangles that overlap near the middle.",
      "A 45°–45°–90° triangle of height H has base 2H, so its area is H². The two mountains have areas 144 and 64.",
      "The overlap is the same shape with height h, so its area is h². Add both mountains and remove the piece counted twice: 144 + 64 − h² = 183."
    ],
    "method": "Overlapping-area subtraction: two triangle areas minus the shared piece equals the artwork.",
    "score": 7,
    "ratingReason": "The art is drawn as one gray region, so the two-triangle structure has to be imposed on it. The overlap is invisible until you extend the inner slopes to the ground.",
    "solution": [
      "Each mountain is a 45°–45°–90° triangle, because its peak is 90° and both base angles are 45°. A mountain of height H has base 2H, so its area is 2H × H ÷ 2 = H².",
      "The taller mountain has height 12, so its area is 12² = 144 square feet.",
      "The shorter mountain has height 8, so its area is 8² = 64 square feet.",
      "The two triangles overlap below the intersection point. That shared piece is the same 45° shape with height h, so its area is h².",
      "The artwork is both triangles with the shared piece counted once, so 144 + 64 − h² = 183.",
      "Then h² = 208 − 183 = 25, so h = 5.",
      "Answer: B (5)."
    ],
    "credit": "AI-authored explanation based on AoPS Solution 1, with the area formula stated for a general 45° peak.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Find the shape that is counted twice.",
    "tip": "Regions drawn as one silhouette are often easier as overlapping simple shapes. Add the pieces, then subtract each overlap exactly once.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Using 12√2, the slanted side, as the height, or adding the areas instead of subtracting the overlap. The slant is longer than the height in a 45° triangle.",
    "reflection": "The overlap triangle is similar to both mountains. What is the ratio of its area to the 8-foot mountain's area, and how does that match 25 to 64?",
    "alternative": "Volume-style check: the artwork equals a 12-foot mountain plus an 8-foot mountain minus a 5-foot mountain, so 183 = 144 + 64 − 25. Any two of the three numbers determine the third.",
    "reviewedAt": "2026-11-01"
  },
  "2024-25": {
    "id": "2024-25",
    "year": 2024,
    "number": 25,
    "suggestedPace": "3 min",
    "title": "Two seats together on the plane",
    "topic": "Counting-Probability",
    "prompt": "A small airplane has 4 rows of seats with 3 seats in each row. Eight passengers have boarded the plane and are distributed randomly among the seats. A married couple is next to board. What is the probability there will be 2 adjacent seats in the same row for the couple?",
    "wording": "restated",
    "diagram": "./assets/diagram-2024-25.png",
    "facts": [
      "4 rows, 3 seats in each row — 12 seats in all",
      "8 passengers are already seated",
      "The couple needs 2 seats side by side in one row"
    ],
    "options": [
      {
        "letter": "A",
        "value": "8/15",
        "label": "8/15"
      },
      {
        "letter": "B",
        "value": "32/55",
        "label": "32/55"
      },
      {
        "letter": "C",
        "value": "20/33",
        "label": "20/33"
      },
      {
        "letter": "D",
        "value": "34/55",
        "label": "34/55"
      },
      {
        "letter": "E",
        "value": "8/11",
        "label": "8/11"
      }
    ],
    "answer": "20/33",
    "answerLabel": "(C) 20/33",
    "sourceUrl": "https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_8_Problems/Problem_25",
    "hints": [
      "Eight of the 12 seats are taken, so 4 are free. The couple's chance depends only on where the 4 free seats sit.",
      "Count the opposite: arrangements where no row has two free seats side by side. In a row of 3 that means the free pair, if there is one, must be the two end seats.",
      "Split the 4 free seats among the 4 rows and handle the patterns 2-2-0-0, 2-1-1-0, and 1-1-1-1. They give 6, 108, and 81 arrangements that block the couple."
    ],
    "method": "Complementary counting on the 4 empty seats, split into row patterns.",
    "score": 8,
    "ratingReason": "The counting is not long, but every case must be seen and the complement must be taken at the end. Missing one pattern, or forgetting to subtract from 1, produces a plausible wrong choice.",
    "solution": [
      "Only the 4 free seats matter, so choose them from the 12 seats. There are C(12,4) = 495 equally likely arrangements.",
      "Now count the arrangements where the couple has no adjacent pair. A row of 3 with 2 free seats blocks them only when the free pair is the two ends, leaving the middle seat taken.",
      "Describe an arrangement by how many free seats each row has. The patterns are 4-0-0-0, 3-1-0-0, 2-2-0-0, 2-1-1-0, and 1-1-1-1.",
      "A row with 4 or 3 free seats in a 3-seat row always contains an adjacent pair, so 4-0-0-0 and 3-1-0-0 give 0 blocking arrangements.",
      "2-2-0-0: each of the two rows with 2 free seats must use its end pair, 1 way each. Choose the 2 rows in C(4,2) = 6 ways, giving 6 arrangements.",
      "2-1-1-0: choose the row with 2 free seats (4 ways), the two rows with 1 free seat (C(3,2) = 3 ways), the end pair (1 way), and one seat in each single row (3 × 3 ways). That is 4 × 3 × 1 × 9 = 108 arrangements.",
      "1-1-1-1: one free seat in every row, 3 choices each row, giving 3⁴ = 81 arrangements.",
      "So 6 + 108 + 81 = 195 arrangements leave the couple with no pair, and 495 − 195 = 300 give them one.",
      "The probability is 300/495 = 20/33.",
      "Answer: C (20/33)."
    ],
    "credit": "AI-authored explanation based on AoPS Solutions 1 and 2.",
    "creditCoach": "Hermes Agent",
    "tipTitle": "Count the empty seats, not the people.",
    "tip": "The question is about where a pair of empty seats can be, so the empty seats are the natural objects to count. Choosing 4 from 12 is also the denominator, so one choice does double duty.",
    "tipCredit": "Additional coaching by Hermes Agent.",
    "commonError": "Multiplying 8/15 by something, or forgetting the final complement. 195/495 is the chance of no pair, so the answer is 1 − 195/495, not 195/495.",
    "reflection": "The denominator C(12,4) treats the seats as unordered even though the passengers are real, distinct people. Why does labelling the passengers not change the probability?",
    "alternative": "AoPS Solution 1 counts the same 195 arrangements from the eight occupied seats instead, grouping the rows as 3-3-2-0, 3-3-1-1, 3-2-2-1, and 2-2-2-2. Those cases give 0 + 6 + 108 + 81 as well, so the answer is the same 1 − 195/495 = 20/33.",
    "reviewedAt": "2026-11-01"
  }
};
