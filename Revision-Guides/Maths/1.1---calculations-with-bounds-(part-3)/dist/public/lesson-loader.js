window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 3)",
  "strapline": "Applying bounds to multiplication and division calculations involving rounded measurements.",
  "learningObjectives": [
    "Students should apply systematic listing strategies to find the number of possible outcomes of single events and two successive events (Maths 1.1)",
    "Students should calculate with bounds to solve problems involving measurements and rounded values (Maths 1.1)",
    "Students should determine upper and lower bounds of calculations involving multiplication and division (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept: Understanding Upper Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> of a measurement is the maximum possible value before rounding. It is found by adding half of the rounding unit to the rounded value. This tells us how big the measurement could actually be.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a measuring cup that holds approximately 5 ml. The true volume could be just under 5.5 ml (the upper bound), but never 5.5 ml exactly because it would have been rounded up.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Measurement given: 12 cm (rounded to nearest cm)</span>",
        "<span>Rounding unit is 1 cm, so half is 0.5 cm</span>",
        "<span>Upper bound = 12 + 0.5 = 12.5 cm</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the minimum possible value before rounding when rounding to the nearest unit. This is the rounded value minus half of the rounding unit. It represents the smallest the true value could be.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the measuring cup example, the smallest possible volume before rounding 5 ml is just 4.5 ml (the lower bound), since any less would round down.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Measurement given: 12 cm (rounded to nearest cm)</span>",
        "<span>Lower bound = 12 - 0.5 = 11.5 cm</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Applying Bounds to Multiplication",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying measurements with bounds, we calculate the smallest possible result by multiplying the lower bounds and the largest possible result by multiplying the upper bounds. This gives a range in which the real answer lies.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Length = 12 cm ± 0.5 (lower 11.5, upper 12.5 cm)</span>",
        "<span>Width = 5 cm ± 0.5 (lower 4.5, upper 5.5 cm)</span>",
        "<span>Minimum area = 11.5 × 4.5 = ?</span>",
        "<span>Maximum area = 12.5 × 5.5 = ?</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Applying Bounds to Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For division, calculating bounds requires careful choices: to get the maximum result divide the upper bound of the numerator by the lower bound of the denominator; for the minimum result, use the lower bound of the numerator divided by the upper bound of the denominator.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Numerator = 20 cm ± 0.5 (lower 19.5, upper 20.5 cm)</span>",
        "<span>Denominator = 4 cm ± 0.5 (lower 3.5, upper 4.5 cm)</span>",
        "<span>Maximum result = 20.5 ÷ 3.5 = ?</span>",
        "<span>Minimum result = 19.5 ÷ 4.5 = ?</span>"
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>When a measurement of 7 cm is rounded to the nearest cm, what is the upper bound?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>7.5 cm</span>",
            "isCorrect": true,
            "explanation": "<span>The upper bound is found by adding half the rounding unit (0.5) to the rounded value 7.</span>"
          },
          {
            "id": "b",
            "label": "<span>6.5 cm</span>",
            "isCorrect": false,
            "explanation": "<span>This is the lower bound, not the upper bound.</span>"
          },
          {
            "id": "c",
            "label": "<span>7 cm</span>",
            "isCorrect": false,
            "explanation": "<span>This is the rounded value itself, not the upper bound.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the smallest possible value a measurement could have been before rounding.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "lower_bound",
                "label": "Lower Bound",
                "isCorrect": true,
                "feedback": "Correct! The lower bound is the smallest possible value."
              },
              {
                "value": "upper_bound",
                "label": "Upper Bound",
                "isCorrect": false,
                "feedback": "Incorrect. The upper bound is the largest possible value."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Applying Knowledge: Find Bounds of a Product",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Calculate the upper and lower bounds when multiplying two rounded measurements. Remember to multiply lower bounds for minimum and upper bounds for maximum.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Measurement A: 7 cm (rounded to nearest cm); bounds = 6.5 cm to 7.5 cm</span>",
        "<span>Measurement B: 3 cm (rounded to nearest cm); bounds = 2.5 cm to 3.5 cm</span>",
        "<span>Lower bound product = 6.5 × 2.5 = ?</span>",
        "<span>Upper bound product = 7.5 × 3.5 = ?</span>"
      ]
    }
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangle has a length of 14 cm and a width of 6 cm, both rounded to the nearest cm. Calculate the upper and lower bounds for the area of this rectangle. Explain your method.</span>",
      "hint": "<span>Remember to find the upper and lower bounds for length and width first, then multiply for the area bounds.</span>",
      "mustHaveKeywords": [
        "upper bound",
        "lower bound",
        "multiply",
        "rounded to nearest cm"
      ],
      "optionalKeywords": [
        "half the rounding unit",
        "range",
        "possible values"
      ],
      "modelAnswer": "<span>Since the rectangle's length and width are rounded to the nearest cm, the rounding unit is 1 cm. The lower bound length is 14 - 0.5 = 13.5 cm and the upper bound length is 14 + 0.5 = 14.5 cm. Similarly, the lower bound width is 6 - 0.5 = 5.5 cm and the upper bound width is 6 + 0.5 = 6.5 cm. To find the minimum area, multiply the lower bounds: 13.5 × 5.5 = 74.25 cm². For the maximum area, multiply the upper bounds: 14.5 × 6.5 = 94.25 cm². So the area lies between 74.25 cm² and 94.25 cm².</span>",
      "scaffoldPrompts": [
        "<span>Find the lower and upper bounds of length.</span>",
        "<span>Find the lower and upper bounds of width.</span>",
        "<span>Multiply the bounds appropriately for minimum and maximum area.</span>"
      ]
    }
  }
};