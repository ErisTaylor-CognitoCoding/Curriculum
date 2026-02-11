window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 2)",
  "strapline": "Applying upper and lower bounds to compound calculations and solving problems involving error intervals and maximum/minimum values.",
  "learningObjectives": [
    "Students should be able to apply the concepts of upper and lower bounds to calculate the bounds of compound measures and expressions involving rounded values (Maths 1.1)",
    "Students should be able to solve problems involving calculations with bounds, including error intervals and maximum/minimum values (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept: Understanding Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> is the maximum value a number could have been before rounding, while the <strong>lower bound</strong> is the minimum value. For example, if a length is given as 5 cm to the nearest cm, the lower bound is 4.5 cm and the upper bound is 5 cm (up to but not including 5.5 cm).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of measuring a cup of water with a measuring jug that only marks full cups. If it says '5 cups,' the actual water could be just over 4.5 cups but less than 5.5 cups. So the water amount is between those bounds.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a length rounded to 3 cm to the nearest cm, find the lower and upper bounds.</span>",
        "<span>Lower bound = 3 - 0.5 = 2.5 cm</span>",
        "<span>Upper bound = 3 + 0.5 = 3.5 cm (not including 3.5)</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Error Intervals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Error intervals express the range of possible values for a rounded number using inequalities. For example, if a value <em>x</em> is 5 cm to the nearest cm, the error interval is <em>4.5 ≤ x &lt; 5.5</em>. This shows that <em>x</em> could be any number from 4.5 inclusive up to but not including 5.5.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If a time is recorded as 12 minutes to the nearest minute, write the error interval.</span>",
        "<span>The error interval is 11.5 ≤ t &lt; 12.5 minutes.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Compound Calculations with Bounds - Addition and Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When adding or subtracting rounded values, calculate using their upper and lower bounds to find the maximum and minimum possible results. For example, to find the bounds of <em>a + b</em>, add the lower bounds for the minimum sum and the upper bounds for the maximum sum.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given lengths 5 cm and 3 cm rounded to the nearest cm:</span>",
        "<span>Lower bound sum = 4.5 + 2.5 = 7 cm</span>",
        "<span>Upper bound sum = 5.5 + 3.5 = 9 cm</span>",
        "<span>So, the sum of the lengths is between 7 cm and 9 cm.</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Compound Calculations with Bounds - Multiplication and Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For multiplication and division involving bounds, consider all possible combinations of upper and lower bounds to find the maximum and minimum possible results. This is because multiplying or dividing bounds can invert inequalities or change which combination is largest or smallest.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate bounds for 4 × 3, where 4 is rounded to the nearest whole number and 3 is rounded to the nearest whole number.</span>",
        "<span>Lower bound of 4 = 3.5, Upper bound of 4 = 4.5</span>",
        "<span>Lower bound of 3 = 2.5, Upper bound of 3 = 3.5</span>",
        "<span>Possible products: 3.5 × 2.5 = 8.75, 3.5 × 3.5 = 12.25, 4.5 × 2.5 = 11.25, 4.5 × 3.5 = 15.75</span>",
        "<span>So, minimum product = 8.75 and maximum product = 15.75</span>"
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If a length is recorded as 7 m to the nearest metre, what is its lower bound?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>6.5 m</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! The lower bound is 0.5 less than the rounded value.</span>"
          },
          {
            "id": "b",
            "label": "<span>7.5 m</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. 7.5 m is the upper bound, not the lower bound.</span>"
          },
          {
            "id": "c",
            "label": "<span>6.0 m</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. The lower bound is 6.5 m, not 6 m.</span>"
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> bound is the smallest possible value before rounding, and the <span class=\"font-semibold\">_____</span> bound is the largest possible value.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "lower-upper",
                "label": "lower, upper",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "upper-lower",
                "label": "upper, lower",
                "isCorrect": false,
                "feedback": "Try again. Remember the lower bound represents the smallest value."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Concept: Solving Error Interval Problems",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Problems involving error intervals often require expressing values as inequalities and using bounds to calculate possible ranges for results. Carefully set up inequalities and apply bounds systematically to find minimum and maximum values.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A rectangle has length 6 cm (nearest cm) and width 3 cm (nearest cm). Find the possible range for the area.</span>",
        "<span>Length bounds: 5.5 ≤ L &lt; 6.5, Width bounds: 2.5 ≤ W &lt; 3.5</span>",
        "<span>Possible min area = 5.5 × 2.5 = 13.75 cm²</span>",
        "<span>Possible max area = 6.5 × 3.5 = 22.75 cm²</span>",
        "<span>Therefore, area lies between 13.75 cm² and 22.75 cm².</span>"
      ]
    }
  },
  "step8": {
    "title": "Knowledge Check: MCQ on Compound Bounds",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>Given a rounded value of 8 to the nearest whole number, what is the error interval?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>7.5 ≤ x < 8.5</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! This represents the bounds correctly for nearest integer rounding.</span>"
          },
          {
            "id": "b",
            "label": "<span>7 ≤ x ≤ 8</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. This does not include values that round to 8 but are less than 7.</span>"
          },
          {
            "id": "c",
            "label": "<span>8 ≤ x < 9</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. This represents numbers rounding to 9, not 8.</span>"
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A length is given as 12.5 cm to the nearest 0.1 cm and a width as 4.3 cm to the nearest 0.1 cm. Calculate the upper and lower bounds of the area of the rectangle.</span>",
      "hint": "Remember to find the bounds for length and width first, then multiply all combinations to find min and max areas.",
      "mustHaveKeywords": ["upper bound", "lower bound", "error interval", "multiply", "maximum", "minimum"],
      "optionalKeywords": ["compound calculations", "rounding"],
      "modelAnswer": "<span>First, find the bounds for the length: lower bound = 12.45 cm, upper bound = 12.55 cm. Then for the width: lower bound = 4.25 cm, upper bound = 4.35 cm. The minimum area is the smallest product of any combination of bounds: 12.45 × 4.25 = 52.91 cm² approximately. The maximum area is the largest product: 12.55 × 4.35 = 54.59 cm² approximately. Therefore, the area lies between about 52.91 cm² and 54.59 cm².</span>",
      "scaffoldPrompts": [
        "Find the lower and upper bounds for length and width individually.",
        "Calculate the products of all combinations of bounds (lower × lower, lower × upper, upper × lower, upper × upper).",
        "Identify the minimum and maximum of these products."
      ]
    }
  }
};