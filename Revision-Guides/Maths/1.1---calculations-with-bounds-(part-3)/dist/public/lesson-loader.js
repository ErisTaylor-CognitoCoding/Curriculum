window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 3)",
  "strapline": "Understanding how to calculate and use upper and lower bounds for multiplication and division problems involving measurements.",
  "learningObjectives": [
    "Students should apply systematic listing strategies to find the number of possible outcomes of single events and two successive events (Maths 1.1)",
    "Students should calculate with bounds to solve problems involving measurements and rounded values (Maths 1.1)",
    "Students should determine upper and lower bounds of calculations involving multiplication and division (Maths 1.1)"
  ],
  "keyFormulas": [
    "Formula 1: Upper bound = rounded value + half of rounding unit",
    "Formula 2: Lower bound = rounded value - half of rounding unit (if applicable) or rounded value itself when rounding to nearest unit",
    "Tip: Use appropriate bounds for maximum and minimum results in multiplication and division calculations"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='150' text-anchor='middle' font-family='sans-serif' font-size='20'>Bounds in Multiplication</text><line x1='100' y1='100' x2='300' y2='100' stroke='#555' stroke-width='2' /><text x='100' y='90' font-family='sans-serif' font-size='14'>Lower Bound</text><text x='300' y='90' font-family='sans-serif' font-size='14'>Upper Bound</text><line x1='100' y1='200' x2='300' y2='200' stroke='#555' stroke-width='2' /><text x='100' y='215' font-family='sans-serif' font-size='14'>Lower Bound</text><text x='300' y='215' font-family='sans-serif' font-size='14'>Upper Bound</text></svg>",
  "step1": {
    "title": "Concept: Understanding Upper Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> of a measurement is the highest possible value it could have before rounding. You calculate it by adding half of the rounding unit to the rounded number. For example, if a length is 5 cm rounded to the nearest cm, its upper bound is 5 + 0.5 = 5.5 cm.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the upper bound like the top of a measuring cup: you can see the level of water is at 5 cups, but it might be slightly more — up to half a cup extra — before it rounds down. The upper bound is that 'fullest possible' value.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify the rounding unit (e.g., 1 cm if rounded to nearest cm).</span>",
        "<span>Step 2: Add half of the rounding unit to the rounded value (5 + 0.5 = 5.5).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the smallest value a measurement could be before rounding. When rounding to the nearest unit, the lower bound is usually the rounded number minus half the rounding unit. But if the number is already rounded (e.g., to the nearest unit), the lower bound can sometimes be the rounded value itself.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Again, think of a measuring cup. The level of water can be at 5 cups but might be slightly less — down to half a cup less — before it rounds up. The lower bound is the 'minimum possible' value in the cup.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify the rounding unit (e.g., 1 cm).</span>",
        "<span>Step 2: Subtract half the rounding unit from the rounded value (5 - 0.5 = 4.5).</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Calculating Bounds for Multiplication",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying two rounded values, the maximum product comes from multiplying their upper bounds, and the minimum product comes from multiplying their lower bounds. This gives the range the true product could fall in.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine combining two boxes of chocolates. Box A might have between 9.5 and 10.5 chocolates (because it’s rounded), and Box B between 14.5 and 15.5. Multiplying the bounds helps you find the smallest and largest total chocolates possible.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Find upper and lower bounds of both values.</span>",
        "<span>Step 2: Calculate maximum: upper bound A × upper bound B.</span>",
        "<span>Step 3: Calculate minimum: lower bound A × lower bound B.</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Calculating Bounds for Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For division, to find the maximum quotient, divide the upper bound of the numerator by the lower bound of the denominator. To find the minimum quotient, divide the lower bound of the numerator by the upper bound of the denominator.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine sharing a rounded number of sweets (numerator) between a rounded number of friends (denominator). The maximum sweets per friend occur if there are more sweets and fewer friends, and the minimum is less sweets with more friends.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Find the upper and lower bounds for numerator and denominator.</span>",
        "<span>Step 2: Maximum quotient = upper bound numerator ÷ lower bound denominator.</span>",
        "<span>Step 3: Minimum quotient = lower bound numerator ÷ upper bound denominator.</span>"
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is the correct upper bound for a measurement of 12 cm rounded to the nearest cm?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>12.5 cm</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Adding half the rounding unit (0.5) to 12 gives 12.5 cm.</span>"
          },
          {
            "id": "b",
            "label": "<span>12 cm</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. This is the rounded value, not the upper bound.</span>"
          },
          {
            "id": "c",
            "label": "<span>11.5 cm</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. This is the lower bound, not the upper bound.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> bound is found by adding half of the rounding unit to the rounded value.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "upper",
                "label": "Upper",
                "isCorrect": true,
                "feedback": "Correct! Upper bound is the maximum possible value."
              },
              {
                "value": "lower",
                "label": "Lower",
                "isCorrect": false,
                "feedback": "Nope, lower bound is the minimum possible value."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>When multiplying two measurements, the <span class=\"font-semibold\">_____</span> product is found by multiplying their upper bounds.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "maximum",
                "label": "maximum",
                "isCorrect": true,
                "feedback": "Correct! Use the upper bounds to find the maximum product."
              },
              {
                "value": "minimum",
                "label": "minimum",
                "isCorrect": false,
                "feedback": "Incorrect. Minimum product uses lower bounds."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Practice: Applying Bounds to Multiplication and Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Practice calculating upper and lower bounds for multiplication and division problems using rounded values and selecting the correct bounds.</p>",
    "workedExample": {
      "title": "Example Problem",
      "bullets": [
        "<span>Calculate the upper and lower bounds for the product of 6.0 m (rounded to nearest 0.1 m) and 3.0 m (rounded to nearest 0.1 m).</span>",
        "<span>First, find bounds for 6.0 m: lower bound = 6.0 - 0.05 = 5.95 m, upper bound = 6.0 + 0.05 = 6.05 m.</span>",
        "<span>For 3.0 m: lower bound = 3.0 - 0.05 = 2.95 m, upper bound = 3.0 + 0.05 = 3.05 m.</span>",
        "<span>Maximum product = 6.05 × 3.05</span>",
        "<span>Minimum product = 5.95 × 2.95</span>"
      ]
    }
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangle’s length is 7.0 cm and width is 4.0 cm, each rounded to the nearest 0.1 cm. Calculate the upper and lower bounds for the area of the rectangle.</span>",
      "hint": "Remember to find the upper and lower bounds for both length and width before multiplying.",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiplication", "rounded values"],
      "optionalKeywords": ["range", "measurement error"],
      "modelAnswer": "<span>First, find bounds for length: lower bound = 7.0 - 0.05 = 6.95 cm, upper bound = 7.0 + 0.05 = 7.05 cm.<br />Next, bounds for width: lower bound = 4.0 - 0.05 = 3.95 cm, upper bound = 4.0 + 0.05 = 4.05 cm.<br />Maximum area = upper length × upper width = 7.05 × 4.05 = 28.5525 cm<sup>2</sup>.<br />Minimum area = lower length × lower width = 6.95 × 3.95 = 27.4525 cm<sup>2</sup>.<br />So, area lies between 27.4525 cm<sup>2</sup> and 28.5525 cm<sup>2</sup>.</span>",
      "scaffoldPrompts": [
        "Step 1: Identify the rounding precision and determine rounding unit.",
        "Step 2: Calculate upper and lower bounds for each measurement.",
        "Step 3: Multiply bounds for length and width to find range of area."
      ]
    }
  }
};