window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 3)",
  "strapline": "Understanding how to calculate and apply upper and lower bounds in multiplication and division problems with rounded values.",
  "learningObjectives": [
    "Students should apply systematic listing strategies to find the number of possible outcomes of single events and two successive events (Maths 1.1)",
    "Students should calculate with bounds to solve problems involving measurements and rounded values (Maths 1.1)",
    "Students should determine upper and lower bounds of calculations involving multiplication and division (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept 1: Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> is the maximum possible value a measurement could have before it was rounded. It is found by adding half of the rounding unit to the rounded value. For example, if a length is rounded to the nearest centimetre as 12 cm, the upper bound is 12 + 0.5 = 12.5 cm.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the upper bound like the highest point the measurement could be hiding under the rounded number, like a hidden ceiling just above the rounded value.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Measurement rounded to nearest 10 is 50.</span>",
        "<span>Rounding unit is 10, so half is 5.</span>",
        "<span>Upper bound = 50 + 5 = 55.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the minimum possible value a measurement could have been before rounding. When rounding to the nearest unit, the lower bound is the rounded value minus half the rounding unit. For example, a length rounded to 12 cm has a lower bound of 11.5 cm.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the lower bound as the floor below the rounded value — it’s the smallest the measurement could have been to still round up to that number.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Measurement rounded to nearest 10 is 50.</span>",
        "<span>Half of 10 is 5.</span>",
        "<span>Lower bound = 50 - 5 = 45.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Bounds in Calculations with Multiplication and Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When performing multiplication or division with rounded values, we find upper and lower bounds to establish the possible range of answers. To find the maximum possible result of multiplication, multiply the upper bounds of both numbers. To find the minimum possible result, multiply the lower bounds. For division, the maximum value comes from dividing the upper bound of the numerator by the lower bound of the denominator, and the minimum from dividing the lower bound of the numerator by the upper bound of the denominator.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It is like stretching a rubber band between the smallest and largest possible values to see the full range of outcomes.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the bounds for 12 cm (rounded to nearest 1 cm): lower 11.5 cm, upper 12.5 cm.</span>",
        "<span>Find the bounds for 5 cm (rounded to nearest 1 cm): lower 4.5 cm, upper 5.5 cm.</span>",
        "<span>Maximum product = 12.5 × 5.5 = 68.75.</span>",
        "<span>Minimum product = 11.5 × 4.5 = 51.75.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the upper bound of 40 rounded to the nearest 10?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>45</span>",
            "isCorrect": true,
            "explanation": "<span>Half of 10 is 5, so upper bound is 40 + 5 = 45.</span>"
          },
          {
            "id": "b",
            "label": "<span>50</span>",
            "isCorrect": false,
            "explanation": "<span>50 is the next rounding point, not the upper bound.</span>"
          },
          {
            "id": "c",
            "label": "<span>35</span>",
            "isCorrect": false,
            "explanation": "<span>35 is the lower bound, not the upper bound.</span>"
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is found by adding half of the rounding unit to the rounded value.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "upper bound",
                "label": "Upper Bound",
                "isCorrect": true,
                "feedback": "<span>Correct! The upper bound is the maximum possible value before rounding.</span>"
              },
              {
                "value": "lower bound",
                "label": "Lower Bound",
                "isCorrect": false,
                "feedback": "<span>Incorrect, the lower bound involves subtracting half the rounding unit.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>When multiplying two rounded values, the <span class=\"font-semibold\">_____</span> result is found by multiplying the upper bounds together.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "maximum",
                "label": "Maximum",
                "isCorrect": true,
                "feedback": "<span>Correct! Maximum results use the upper bounds of both values.</span>"
              },
              {
                "value": "minimum",
                "label": "Minimum",
                "isCorrect": false,
                "feedback": "<span>No, minimum results use the lower bounds.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A length of wire is measured as 30 cm rounded to the nearest cm, and a rod is measured as 5 cm rounded to the nearest cm. Use bounds to find the minimum and maximum possible lengths when the wire is cut into rods stacked end-to-end.</span>",
      "hint": "Remember to find upper and lower bounds first, then multiply for both minimum and maximum total lengths.",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiply", "maximum", "minimum", "rounded to nearest cm"],
      "optionalKeywords": ["range", "measurement error", "successive events"],
      "modelAnswer": "<span>First, calculate bounds: wire lower bound = 29.5 cm, upper bound = 30.5 cm; rod lower bound = 4.5 cm, upper bound = 5.5 cm. Minimum total length = wire lower bound ÷ rod upper bound = 29.5 ÷ 5.5 ≈ 5.36 rods. Maximum total length = wire upper bound ÷ rod lower bound = 30.5 ÷ 4.5 ≈ 6.78 rods. Therefore, the wire can be cut into between about 5 and 7 rods.</span>",
      "scaffoldPrompts": [
        "<span>Step 1: Identify the rounding unit and calculate upper and lower bounds for both measurements.</span>",
        "<span>Step 2: For division, remember maximum result uses upper bound numerator and lower bound denominator.</span>",
        "<span>Step 3: Calculate minimum and maximum possible values and interpret the meaning.</span>"
      ]
    }
  }
};