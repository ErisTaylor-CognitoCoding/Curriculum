window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 3)",
  "strapline": "Explore how to calculate using upper and lower bounds in multiplication and division with rounded measurements.",
  "learningObjectives": [
    "Students should apply systematic listing strategies to find the number of possible outcomes of single events and two successive events (Maths 1.1)",
    "Students should calculate with bounds to solve problems involving measurements and rounded values (Maths 1.1)",
    "Students should determine upper and lower bounds of calculations involving multiplication and division (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept 1: Understanding Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> is the maximum possible value a measurement could have been before rounding. It is calculated by adding half of the rounding unit to the rounded value. For example, if a length is rounded to the nearest 1 cm and the measurement is 7 cm, the upper bound is 7 + 0.5 = 7.5 cm.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you are guessing the maximum height of a plant measured in whole centimetres. If it is recorded as 7 cm, the actual height could be just under 7.5 cm—this is your upper bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If a length is 12 cm rounded to the nearest 1 cm, half the rounding unit is 0.5 cm.</span>",
        "<span>Upper bound = 12 + 0.5 = 12.5 cm.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Understanding Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the minimum possible value a measurement could have been before rounding. When rounding to the nearest whole number, the lower bound is usually the rounded value minus half the rounding unit. However, if not otherwise specified, the lower bound can be taken as simply the rounded value itself.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If the plant height is recorded as 7 cm, the smallest it could be is just above 6.5 cm but less than 7 cm. This lower estimated limit is the lower bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For 12 cm rounded to the nearest 1 cm, half the rounding unit is 0.5 cm.</span>",
        "<span>Lower bound = 12 - 0.5 = 11.5 cm.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Bounds in Multiplication and Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When calculating with bounds in multiplication and division, we use the upper and lower bounds of each measurement to find the maximum and minimum possible results. For multiplication, the maximum comes from multiplying the upper bounds, and the minimum from multiplying the lower bounds. For division, carefully select bounds to find the largest and smallest possible quotients.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two measuring tapes with possible measurement errors: the longest distances give the maximum possible product, the shortest distances give the minimum.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Length A = 5 cm (rounded), upper bound = 5.5, lower bound = 4.5</span>",
        "<span>Length B = 3 cm (rounded), upper bound = 3.5, lower bound = 2.5</span>",
        "<span>Maximum product = upper bound A × upper bound B = 5.5 × 3.5 = 19.25</span>",
        "<span>Minimum product = lower bound A × lower bound B = 4.5 × 2.5 = 11.25</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying Systematic Listing to Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find possible outcomes involving bounds in two successive events, systematically list all combinations using upper and lower bounds. This helps visualize and calculate the complete range of possible answers.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like listing all possible combinations of two dice rolls, list upper and lower bounds together to cover all cases.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Bounds for A: lower 4.5, upper 5.5</span>",
        "<span>Bounds for B: lower 2.5, upper 3.5</span>",
        "<span>Possible products: 4.5×2.5=11.25, 4.5×3.5=15.75, 5.5×2.5=13.75, 5.5×3.5=19.25</span>",
        "<span>Minimum = 11.25, Maximum = 19.25</span>"
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is the correct upper bound of a measurement rounded to the nearest 1 unit and recorded as 8?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>8.5</span>",
            "isCorrect": true,
            "explanation": "<span>Upper bound is the recorded value plus half the rounding unit (0.5).</span>"
          },
          {
            "id": "b",
            "label": "<span>7.5</span>",
            "isCorrect": false,
            "explanation": "<span>This is the lower bound, not upper bound.</span>"
          },
          {
            "id": "c",
            "label": "<span>8.0</span>",
            "isCorrect": false,
            "explanation": "<span>This is just the rounded value, not the upper bound.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> bound is found by adding half the rounding unit to the rounded value.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "upper",
                "label": "Upper",
                "isCorrect": true,
                "feedback": "Correct! The upper bound is calculated this way."
              },
              {
                "value": "lower",
                "label": "Lower",
                "isCorrect": false,
                "feedback": "Try again. The lower bound is found differently."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Determining Bounds in Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For division involving bounds, the minimum and maximum quotient depend on the bounds of both the numerator and denominator. To find the maximum quotient, divide the maximum numerator by the minimum denominator. To find the minimum quotient, divide the minimum numerator by the maximum denominator.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Numerator rounded value = 20, upper bound = 20.5, lower bound = 19.5</span>",
        "<span>Denominator rounded value = 5, upper bound = 5.5, lower bound = 4.5</span>",
        "<span>Maximum quotient = 20.5 ÷ 4.5 ≈ 4.56</span>",
        "<span>Minimum quotient = 19.5 ÷ 5.5 ≈ 3.55</span>"
      ]
    }
  },
  "step8": {
    "title": "Practice Spot: Systematic Listing for Division Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use systematic listing to confirm possible range for division with bounds by testing all four combinations of numerator and denominator bounds.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate all quotients for combinations:</span>",
        "<span>Upper numerator ÷ upper denominator</span>",
        "<span>Upper numerator ÷ lower denominator</span>",
        "<span>Lower numerator ÷ upper denominator</span>",
        "<span>Lower numerator ÷ lower denominator</span>",
        "<span>Identify the minimum and maximum quotients for the range.</span>"
      ]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangle’s length is measured as 15 cm rounded to the nearest centimetre, and its width is measured as 4 cm rounded to the nearest centimetre. Calculate the upper and lower bounds of the area of the rectangle.</span>",
      "hint": "Remember to find the upper and lower bounds of length and width first. Then multiply to find maximum and minimum area bounds.",
      "mustHaveKeywords": ["upper bound", "lower bound", "area", "multiply", "rounding unit"],
      "optionalKeywords": ["systematic listing", "range"],
      "modelAnswer": "<span>First find the upper and lower bounds of the length: 15 ± 0.5 → lower bound = 14.5 cm, upper bound = 15.5 cm.<br>Width bounds: 4 ± 0.5 → lower bound = 3.5 cm, upper bound = 4.5 cm.<br>Minimum area = lower length × lower width = 14.5 × 3.5 = 50.75 cm².<br>Maximum area = upper length × upper width = 15.5 × 4.5 = 69.75 cm².<br>Therefore, the area lies between 50.75 cm² and 69.75 cm².</span>",
      "scaffoldPrompts": [
        "Calculate half the rounding unit for each measurement.",
        "Identify lower and upper bounds for length and width.",
        "Multiply lower bounds to find minimum area.",
        "Multiply upper bounds to find maximum area."
      ]
    }
  }
};