window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 3)",
  "strapline": "Understanding and applying upper and lower bounds in multiplication and division problems.",
  "learningObjectives": [
    "Students should apply systematic listing strategies to find the number of possible outcomes of single events and two successive events (Maths 1.1)",
    "Students should calculate with bounds to solve problems involving measurements and rounded values (Maths 1.1)",
    "Students should determine upper and lower bounds of calculations involving multiplication and division (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept: Understanding Upper Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> is the highest possible value a measurement could have been before rounding. For example, if a value is rounded to the nearest unit, the upper bound is found by adding half of the rounding unit to the rounded value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a glass filled to a certain level marked as 10 cm. The actual amount of water could be slightly more, but not more than half a cm above 10, so the upper bound is 10.5 cm.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a length 12 cm rounded to the nearest cm, calculate the upper bound.</span>",
        "<span>Half of the rounding unit is 0.5 cm.</span>",
        "<span>Upper bound = 12 + 0.5 = 12.5 cm.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the smallest possible value the measurement could have been before rounding. When rounding to the nearest unit, the lower bound is usually the rounded value minus half of the rounding unit, but if the rounding rule defines the rounded value itself as the cutoff, then the lower bound can be the rounded value itself.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If the water level is marked at 10 cm, the actual amount could be just under 10, down to 9.5 cm (half of the rounding unit below 10).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a length 8 cm rounded to the nearest cm, calculate the lower bound.</span>",
        "<span>Lower bound = 8 - 0.5 = 7.5 cm.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Bounds in Multiplication and Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When calculating with rounded values for multiplication or division, we use upper and lower bounds to find the possible range of answers. To find the <em>maximum</em> result, multiply or divide the upper bounds of numerators by the lower bounds of denominators. To find the <em>minimum</em> result, multiply or divide the lower bounds of numerators by the upper bounds of denominators.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you are filling containers with water, the biggest total amount comes from the maximum fill (upper bound) divided by the smallest container size (lower bound), and the smallest total amount comes from the minimum fill (lower bound) divided by the largest container size (upper bound).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate the upper and lower bounds for 5 cm × 3 cm, each rounded to the nearest cm.</span>",
        "<span>Upper bound of 5 cm is 5.5 cm; lower bound of 5 cm is 4.5 cm.</span>",
        "<span>Upper bound of 3 cm is 3.5 cm; lower bound of 3 cm is 2.5 cm.</span>",
        "<span>Maximum product = upper bound of 5 × upper bound of 3 = 5.5 × 3.5 = 19.25</span>",
        "<span>Minimum product = lower bound of 5 × lower bound of 3 = 4.5 × 2.5 = 11.25</span>"
      ]
    }
  },
  "step4": {
    "title": "Practice: Systematic Listing for Outcomes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Systematic listing helps to count all possible outcomes when events happen once or in sequence. This skill supports understanding combinations involved when calculating bounds in more complex scenarios.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>List all possible outcomes of rolling a 2-sided coin (Heads, Tails) and a 3-sided spinner (1, 2, 3).</span>",
        "<span>Possible outcomes: Heads-1, Heads-2, Heads-3, Tails-1, Tails-2, Tails-3.</span>",
        "<span>Total outcomes = 6.</span>"
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the upper bound of a value rounded to the nearest 10 if the rounded value is 70?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>75</span>",
            "isCorrect": true,
            "explanation": "<span>Half of 10 is 5, so upper bound = 70 + 5 = 75.</span>"
          },
          {
            "id": "b",
            "label": "<span>65</span>",
            "isCorrect": false,
            "explanation": "<span>65 is the lower bound, not the upper bound.</span>"
          },
          {
            "id": "c",
            "label": "<span>80</span>",
            "isCorrect": false,
            "explanation": "<span>80 is more than half the rounding unit above 70.</span>"
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Knowledge Check: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> bound is found by adding half of the rounding unit to the rounded value.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "Upper",
                "label": "Upper",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "Lower",
                "label": "Lower",
                "isCorrect": false,
                "feedback": "Try again. The lower bound is typically the rounded value minus half the rounding unit."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>When multiplying, the maximum product comes from multiplying the <span class=\"font-semibold\">_____</span> bounds.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "Upper",
                "label": "Upper",
                "isCorrect": true,
                "feedback": "Correct! Multiplying the upper bounds gives the maximum product."
              },
              {
                "value": "Lower",
                "label": "Lower",
                "isCorrect": false,
                "feedback": "Try again. Lower bounds give the minimum product."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Concept: Selecting Bounds in Division Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In division calculations with bounds, the maximum result is found by dividing the largest possible numerator (upper bound) by the smallest possible denominator (lower bound). Conversely, the minimum result comes from dividing the smallest numerator (lower bound) by the largest denominator (upper bound).</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Divide a length of 20 cm rounded to the nearest cm by 4 cm rounded to the nearest cm.</span>",
        "<span>Upper bound of 20 = 20.5 cm, lower bound of 20 = 19.5 cm.</span>",
        "<span>Upper bound of 4 = 4.5 cm, lower bound of 4 = 3.5 cm.</span>",
        "<span>Maximum result = upper bound numerator ÷ lower bound denominator = 20.5 ÷ 3.5 ≈ 5.86.</span>",
        "<span>Minimum result = lower bound numerator ÷ upper bound denominator = 19.5 ÷ 4.5 ≈ 4.33.</span>"
      ]
    }
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangle has length 14 cm and width 6 cm, both measured to the nearest cm. Find the upper and lower bounds for the area of the rectangle.</span>",
      "hint": "<span>Calculate the upper and lower bounds for length and width first, then use multiplication bounds rules.</span>",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiplication", "rounded value", "half the rounding unit"],
      "optionalKeywords": ["area bounds", "measurement", "nearest cm"],
      "modelAnswer": "<span>Length rounded to nearest cm 14 cm, so upper bound = 14.5 cm, lower bound = 13.5 cm. Width rounded to nearest cm 6 cm, so upper bound = 6.5 cm, lower bound = 5.5 cm. Maximum area = upper length × upper width = 14.5 × 6.5 = 94.25 cm<sup>2</sup>. Minimum area = lower length × lower width = 13.5 × 5.5 = 74.25 cm<sup>2</sup>. So the area is between 74.25 and 94.25 cm<sup>2</sup>.</span>",
      "scaffoldPrompts": [
        "<span>Identify the rounding unit used.</span>",
        "<span>Calculate upper and lower bounds for each measurement.</span>",
        "<span>Multiply bounds to find min and max area.</span>"
      ]
    }
  }
};