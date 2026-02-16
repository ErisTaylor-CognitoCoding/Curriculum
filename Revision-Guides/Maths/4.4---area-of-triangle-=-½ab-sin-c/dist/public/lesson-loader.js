window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.4 - Area of triangle = ½ab sin C",
  "strapline": "Learn how to calculate the area of any triangle using the formula ½ab sin C and apply exact trigonometric values for key angles without a calculator.",
  "learningObjectives": [
    "Students should be able to calculate the area of any triangle using the formula ½ab sin C (Maths 4.4)",
    "Students should be able to apply exact trigonometric values for key angles (0°, 30°, 45°, 60°, 90°) without a calculator (Maths 4.4)",
    ""
  ],
  "keyFormulas": [
    "Area = ½ × a × b × sin C",
    "sin 0° = 0, sin 30° = ½, sin 45° = √2/2, sin 60° = √3/2, sin 90° = 1",
    "Always use the included angle between sides a and b"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><polygon points='50,250 250,250 150,100' fill='#cce5ff' stroke='#004085' stroke-width='3'/><text x='50' y='270' font-family='sans-serif' font-size='16'>a</text><text x='250' y='270' font-family='sans-serif' font-size='16'>b</text><text x='130' y='90' font-family='sans-serif' font-size='16'>C</text><line x1='150' y1='250' x2='150' y2='100' stroke='#004085' stroke-width='2' stroke-dasharray='4,2'/></svg>",
  "step1": {
    "title": "Concept: Understanding the Area Formula ½ab sin C",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The formula <strong>Area = ½ × a × b × sin C</strong> finds the area of a triangle using two sides (a and b) and the included angle (C) between them. This method is useful when the height is not known.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a triangle like a folded piece of paper. If you know the lengths of two edges and how much the paper is folded (the angle), you can find its area without measuring its height.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Area with Two Sides and Included Angle",
      "problem": "Given sides <strong>a = 7 cm</strong>, <strong>b = 9 cm</strong> and included angle <strong>C = 60°</strong>, calculate the area of the triangle.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of sin 60°?",
          "answer": "√3/2",
          "feedback": "Correct! sin 60° = √3/2."
        },
        {
          "id": "q2",
          "prompt": "Calculate ½ × 7 × 9",
          "answer": "31.5",
          "feedback": "Well done! ½ × 7 × 9 = 31.5."
        },
        {
          "id": "q3",
          "prompt": "Multiply 31.5 by sin 60° (use the exact value √3/2 ≈ 0.866)",
          "answer": ["31.5*0.866","27.2"],
          "feedback": "Correct! The area is approximately 27.2 cm²."
        }
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following represents the correct formula for the area of a triangle given two sides and the included angle?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Area = ½ × a × b × sin C</span>",
            "isCorrect": true,
            "explanation": "Correct! This is the standard formula for the area of a triangle using two sides and the included angle."
          },
          {
            "id": "b",
            "label": "<span>Area = a × b × sin C</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The formula requires a factor of ½."
          },
          {
            "id": "c",
            "label": "<span>Area = ½ × a × b × cos C</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The formula uses sine, not cosine, of the included angle."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the angle between sides a and b used in the formula.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "included-angle",
                "label": "included angle",
                "isCorrect": true,
                "feedback": "Correct! C is the included angle between sides a and b."
              },
              {
                "value": "opposite-angle",
                "label": "opposite angle",
                "isCorrect": false,
                "feedback": "Try again. The angle must be between the two known sides."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>In the formula, sin C means the sine of the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "included-angle",
                "label": "included angle",
                "isCorrect": true,
                "feedback": "Correct! We use the sine of the included angle."
              },
              {
                "value": "adjacent-angle",
                "label": "adjacent angle",
                "isCorrect": false,
                "feedback": "Incorrect. The angle must be included between the two sides."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Review of Exact Trigonometric Values for Key Angles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Key exact sine values you should memorise are: sin 0° = 0, sin 30° = ½, sin 45° = √2/2, sin 60° = √3/2, and sin 90° = 1. These help you solve problems quickly without a calculator.</p>",
    "workedExample": {
      "title": "Worked Example: Using Exact Sine Values",
      "problem": "Calculate the area of a triangle where a = 10 cm, b = 8 cm and C = 30°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the exact value of sin 30°?",
          "answer": "1/2",
          "feedback": "Correct! sin 30° = ½."
        },
        {
          "id": "q2",
          "prompt": "Calculate ½ × 10 × 8",
          "answer": "40",
          "feedback": "Correct. The product is 40."
        },
        {
          "id": "q3",
          "prompt": "Multiply 40 by sin 30° (use exact value ½)",
          "answer": "20",
          "feedback": "Well done! The area is 20 cm²."
        }
      ]
    }
  },
  "step5": {
    "title": "Practice: Identify the Included Angle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For the formula to work, you must correctly identify the angle between the two known sides (included angle).</p>",
    "workedExample": {
      "title": "Worked Example: Finding the Included Angle",
      "problem": "In a triangle with sides AB = 5 cm, BC = 7 cm, and AC = 9 cm, if you know sides AB and AC, which angle is included between them?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the included angle between sides AB and AC the angle at B or the angle at A?",
          "answer": "A",
          "feedback": "Correct! The included angle between sides AB and AC is angle A."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A triangle has sides of length 12 cm and 15 cm with the included angle of 45°. Calculate the area of the triangle using the formula ½ab sin C. Show your working clearly.</span>",
      "hint": "Remember to use the exact value for sin 45°, which is √2/2, and multiply carefully.",
      "mustHaveKeywords": ["included angle", "½ × a × b × sin C", "exact value", "area"],
      "optionalKeywords": ["√2", "calculate", "multiply", "sin 45° = √2/2"],
      "modelAnswer": "<span>Identify sides a = 12 cm, b = 15 cm, included angle C = 45°. Use the formula Area = ½ × 12 × 15 × sin 45°. Since sin 45° = √2/2, multiply ½ × 12 × 15 = 90. Then multiply 90 × (√2/2) = 45√2 cm². This is the exact area of the triangle.</span>",
      "scaffoldPrompts": [
        "Write down the formula for area using sides and angle.",
        "Substitute the known values: a, b, and C.",
        "Recall or write the exact value of sin 45°.",
        "Calculate the product step by step.",
        "Give the final expression for the area in exact form."
      ]
    }
  }
};