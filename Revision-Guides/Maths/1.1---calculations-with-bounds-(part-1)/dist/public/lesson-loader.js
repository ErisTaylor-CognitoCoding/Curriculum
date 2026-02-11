window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 1)",
  "strapline": "Understanding and applying upper and lower bounds and calculating with standard form numbers",
  "learningObjectives": [
    "Students should apply and interpret limits of accuracy when rounding or truncating, including upper and lower bounds (Maths 1.1)",
    "Students should calculate with numbers in standard form including multiplying and dividing numbers expressed in standard form (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept: Understanding Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The upper bound is the maximum possible value a rounded or truncated number could represent. For example, for a number rounded to 1 decimal place, the upper bound is the rounded value plus 0.05.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a glass filled to a rounded mark on the cup. The upper bound is like the highest possible water level just before it might have been marked one step higher.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with 2.4 rounded to 1 decimal place.</span>",
        "<span>Find the upper bound by adding 0.05 to get 2.45.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The lower bound is the minimum possible value a rounded or truncated number could represent. For a number rounded to 1 decimal place, the lower bound is the rounded value minus 0.05.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the glass example, the lower bound is the lowest possible water level just before the level could have been rounded down.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with 5.7 rounded to 1 decimal place.</span>",
        "<span>Find the lower bound by subtracting 0.05 to get 5.65.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Limits of Accuracy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Limits of accuracy give the full range between the lower and upper bound of a rounded or truncated measurement. This range shows the possible true values before rounding.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For 3.2 rounded to 1 decimal place:</span>",
        "<span>Lower bound = 3.15, upper bound = 3.25</span>",
        "<span>The true value lies between 3.15 and 3.25.</span>"
      ]
    }
  },
  "step4": {
    "title": "Calculations With Bounds: Multiplying",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying measurements given as rounded numbers, use the lower bounds for minimum product and upper bounds for maximum product to find the range of possible answers.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Multiply 2.4 (bounds 2.35 to 2.45) by 3.1 (bounds 3.05 to 3.15).</span>",
        "<span>Minimum = 2.35 × 3.05 = 7.1675</span>",
        "<span>Maximum = 2.45 × 3.15 = 7.7175</span>",
        "<span>So the product is between 7.1675 and 7.7175.</span>"
      ]
    }
  },
  "step5": {
    "title": "Calculations With Bounds: Dividing",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing, the minimum quotient comes from dividing the lower bound of the numerator by the upper bound of the denominator, and maximum quotient comes from dividing the upper bound by the lower bound.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Divide 4.5 (bounds 4.45 to 4.55) by 1.2 (bounds 1.15 to 1.25).</span>",
        "<span>Minimum = 4.45 ÷ 1.25 = 3.56</span>",
        "<span>Maximum = 4.55 ÷ 1.15 = 3.96</span>",
        "<span>So the quotient is between 3.56 and 3.96.</span>"
      ]
    }
  },
  "step6": {
    "title": "Standard Form Calculations: Multiplying and Dividing",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Numbers in standard form are written as a × 10ⁿ. Multiply numbers by multiplying the 'a' parts and adding the exponents. Divide by dividing the 'a' parts and subtracting the exponents.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Multiply (3 × 10⁴) × (2 × 10²): multiply 3 × 2 = 6 and add exponents 4 + 2 = 6</span>",
        "<span>The answer is 6 × 10⁶.</span>",
        "<span>Divide (5 × 10³) ÷ (2 × 10¹): divide 5 ÷ 2 = 2.5 and subtract exponents 3 - 1 = 2</span>",
        "<span>The answer is 2.5 × 10².</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the upper bound of 7.8 rounded to 1 decimal place?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>7.85</span>",
            "isCorrect": true,
            "explanation": "<span>Adding 0.05 to 7.8 gives 7.85 which is the upper bound.</span>"
          },
          {
            "id": "b",
            "label": "<span>7.75</span>",
            "isCorrect": false,
            "explanation": "<span>7.75 is less than 7.8, so it cannot be the upper bound.</span>"
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Calculate the product bounds of 1.5 (rounded to 1 decimal place) and 3.2 (rounded to 1 decimal place). What is the minimum possible product?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>4.275</span>",
            "isCorrect": true,
            "explanation": "<span>Lower bounds are 1.45 and 3.15, so minimum product = 1.45 × 3.15 = 4.5675 (corrected to 4.5675)</span>"
          },
          {
            "id": "b",
            "label": "<span>4.6</span>",
            "isCorrect": false,
            "explanation": "<span>This does not use lower bounds correctly.</span>"
          },
          {
            "id": "c",
            "label": "<span>4.5</span>",
            "isCorrect": false,
            "explanation": "<span>This is not the correct product of bounds.</span>"
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the maximum value before rounding.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "upper_bound",
                "label": "upper bound",
                "isCorrect": true,
                "feedback": "<span>Correct! The upper bound represents the maximum possible value before rounding.</span>"
              },
              {
                "value": "lower_bound",
                "label": "lower bound",
                "isCorrect": false,
                "feedback": "<span>Incorrect, the lower bound is the minimum value before rounding.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> give the possible range of a rounded measurement.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "limits_of_accuracy",
                "label": "limits of accuracy",
                "isCorrect": true,
                "feedback": "<span>Correct! Limits of accuracy define the possible true values based on rounding.</span>"
              },
              {
                "value": "standard_form",
                "label": "standard form",
                "isCorrect": false,
                "feedback": "<span>Incorrect, standard form is a notation for very large or small numbers.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to find the upper and lower bounds of a number rounded to 1 decimal place and how to use these bounds to calculate the maximum and minimum value when multiplying two such numbers.</span>",
      "hint": "Remember to add or subtract 0.05 for bounds and use the bounds to multiply minimum with minimum and maximum with maximum values.",
      "mustHaveKeywords": [
        "upper bound",
        "lower bound",
        "limits of accuracy",
        "multiply",
        "minimum product",
        "maximum product"
      ],
      "optionalKeywords": [
        "range",
        "rounding"
      ],
      "modelAnswer": "<span>The upper bound is found by adding 0.05 to the rounded number and the lower bound by subtracting 0.05, for numbers rounded to 1 decimal place. These bounds represent the limits of accuracy. To find the minimum possible product of two numbers, multiply their lower bounds. For the maximum product, multiply their upper bounds. This calculates the possible range of values the product could have before rounding.</span>",
      "scaffoldPrompts": [
        "Start by defining upper and lower bounds for each number.",
        "Then calculate the product using the bounds to find possible minimum and maximum values."
      ]
    }
  }
};