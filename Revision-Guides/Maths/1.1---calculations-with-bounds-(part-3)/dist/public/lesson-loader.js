window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 3)",
  "strapline": "Understanding how to calculate and apply upper and lower bounds in multiplication and division problems.",
  "learningObjectives": [
    "Students should apply systematic listing strategies to find the number of possible outcomes of single events and two successive events (Maths 1.1)",
    "Students should calculate with bounds to solve problems involving measurements and rounded values (Maths 1.1)",
    "Students should determine upper and lower bounds of calculations involving multiplication and division (Maths 1.1)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333'/><text x='200' y='130' font-family='sans-serif' font-size='20' text-anchor='middle' fill='#333'>Bounds in Multiplication/Division</text><text x='100' y='180' font-family='sans-serif' font-size='16' fill='#555'>Lower Bound</text><line x1='150' y1='180' x2='250' y2='180' stroke='#777' stroke-width='2' stroke-dasharray='5,5'/><text x='300' y='180' font-family='sans-serif' font-size='16' fill='#555'>Upper Bound</text><polygon points='250,170 260,180 250,190' fill='#777'/></svg>",
  "step1": {
    "title": "Concept: Understanding Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> of a measurement is the greatest value it could have before rounding. When a number is rounded to the nearest unit, the upper bound is found by adding half of the rounding unit to the rounded value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine measuring the length of a table with a ruler that only shows whole centimetres. If the measurement is 30cm rounded to the nearest cm, the real length could be anywhere just under 30.5cm. So, 30.5cm is the upper bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Upper Bound",
      "problem": "Find the upper bound of a length recorded as <strong>45 cm</strong>, rounded to the nearest cm.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the rounding unit here?",
          "answer": "1",
          "feedback": "Correct! The measurement is rounded to the nearest 1 cm."
        },
        {
          "id": "q2",
          "prompt": "Half of the rounding unit is?",
          "answer": "0.5",
          "feedback": "Correct. Half of 1 cm is 0.5 cm."
        },
        {
          "id": "q3",
          "prompt": "Add this to the rounded value: 45 + 0.5 = ?",
          "answer": "45.5",
          "feedback": "Correct! The upper bound is 45.5 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> of a measurement is the smallest value it could have before rounding. When rounding to the nearest unit, the lower bound is usually the rounded value minus half of the rounding unit.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Continuing the table example, if the table length is rounded to 30cm, the real length could be as low as 29.5cm (30 - 0.5). So, 29.5cm is the lower bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Lower Bound",
      "problem": "Find the lower bound of a length recorded as <strong>45 cm</strong>, rounded to the nearest cm.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the rounding unit here?",
          "answer": "1",
          "feedback": "Correct! The rounding unit is 1 cm."
        },
        {
          "id": "q2",
          "prompt": "Half of the rounding unit is?",
          "answer": "0.5",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Subtract this from the rounded value: 45 - 0.5 = ?",
          "answer": "44.5",
          "feedback": "Correct! The lower bound is 44.5 cm."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Lower and Upper Bounds in Multiplication",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying two rounded measurements, the <strong>maximum product</strong> is found by multiplying the upper bounds of both measurements, and the <strong>minimum product</strong> is found by multiplying the lower bounds of both measurements.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you multiply two lengths, the longest possible length product comes from the biggest possible original lengths (upper bounds), and the shortest from the smallest lengths (lower bounds).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Product Bounds",
      "problem": "Two lengths: 4.0 cm and 5.0 cm, both rounded to the nearest tenth. Find the bounds for their product.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the upper bound of 4.0 cm (rounded to nearest 0.1)?",
          "answer": "4.05",
          "feedback": "Correct! Half of 0.1 is 0.05; 4.0 + 0.05 = 4.05."
        },
        {
          "id": "q2",
          "prompt": "What is the lower bound of 4.0 cm?",
          "answer": "3.95",
          "feedback": "Correct! 4.0 - 0.05 = 3.95."
        },
        {
          "id": "q3",
          "prompt": "What is the upper bound of 5.0 cm?",
          "answer": "5.05",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "What is the lower bound of 5.0 cm?",
          "answer": "4.95",
          "feedback": "Correct."
        },
        {
          "id": "q5",
          "prompt": "Calculate maximum product: upper bound of first × upper bound of second = ?",
          "answer": "20.3025",
          "feedback": "Correct. 4.05 × 5.05 = 20.3025."
        },
        {
          "id": "q6",
          "prompt": "Calculate minimum product: lower bound of first × lower bound of second = ?",
          "answer": "19.4025",
          "feedback": "Correct. 3.95 × 4.95 = 19.4025."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Bounds in Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing two rounded measurements, the maximum and minimum possible answers come from combining bounds carefully: the maximum quotient is the maximum numerator divided by the minimum denominator; the minimum quotient is the minimum numerator divided by the maximum denominator.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If sharing a quantity, dividing a larger amount by a smaller amount gives the biggest possible answer, while the smallest amount divided by the largest amount results in the smallest answer.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Quotient Bounds",
      "problem": "Divide two lengths: 6.0 m and 2.0 m, both rounded to the nearest tenth. Find the bounds for their quotient.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the upper bound of 6.0 m (nearest 0.1).",
          "answer": "6.05",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Find the lower bound of 6.0 m.",
          "answer": "5.95",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Find the upper bound of 2.0 m.",
          "answer": "2.05",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Find the lower bound of 2.0 m.",
          "answer": "1.95",
          "feedback": "Correct."
        },
        {
          "id": "q5",
          "prompt": "Calculate the maximum quotient: upper bound numerator ÷ lower bound denominator = ?",
          "answer": "3.1026",
          "feedback": "Correct. 6.05 ÷ 1.95 ≈ 3.1026."
        },
        {
          "id": "q6",
          "prompt": "Calculate the minimum quotient: lower bound numerator ÷ upper bound denominator = ?",
          "answer": "2.9024",
          "feedback": "Correct. 5.95 ÷ 2.05 ≈ 2.9024."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>When a value 8.0 is rounded to the nearest whole number, what is its upper bound?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>8.5</span>",
            "isCorrect": true,
            "explanation": "Correct. The upper bound is 8 + 0.5 = 8.5."
          },
          {
            "id": "b",
            "label": "<span>7.5</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 7.5 is the lower bound."
          },
          {
            "id": "c",
            "label": "<span>8.0</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This is the rounded value, not the bound."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which combination gives the minimum result when multiplying two rounded values?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Lower bound × Upper bound</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Minimum comes from lower × lower."
          },
          {
            "id": "b",
            "label": "<span>Upper bound × Upper bound</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This gives the maximum product."
          },
          {
            "id": "c",
            "label": "<span>Lower bound × Lower bound</span>",
            "isCorrect": true,
            "explanation": "Correct. The minimum product is lower bound × lower bound."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the smallest possible value of a rounded measurement.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "lowerBound",
                "label": "Lower Bound",
                "isCorrect": true,
                "feedback": "Correct! The lower bound is the smallest possible value."
              },
              {
                "value": "upperBound",
                "label": "Upper Bound",
                "isCorrect": false,
                "feedback": "Incorrect. The upper bound is the largest possible value."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>When dividing rounded values, the <span class=\"font-semibold\">_____</span> quotient is found by dividing the maximum numerator by the minimum denominator.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "maximum",
                "label": "maximum",
                "isCorrect": true,
                "feedback": "Correct! Maximum numerator ÷ minimum denominator gives the maximum quotient."
              },
              {
                "value": "minimum",
                "label": "minimum",
                "isCorrect": false,
                "feedback": "Incorrect. This gives the maximum, not minimum."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangle has a length of 12.0 m and a width of 5.0 m, both rounded to the nearest tenth. Calculate the upper and lower bounds for the area of the rectangle.</span>",
      "hint": "Remember to find the upper and lower bounds for each measurement first, then multiply them accordingly.",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiplication", "area"],
      "optionalKeywords": ["rounded", "tenth", "range"],
      "modelAnswer": "<span>First, calculate the upper and lower bounds for the length: 12.0 ± 0.05 gives lower bound 11.95 and upper bound 12.05. For the width: 5.0 ± 0.05 gives lower bound 4.95 and upper bound 5.05. The maximum area is upper length × upper width = 12.05 × 5.05 = 60.8525 m². The minimum area is lower length × lower width = 11.95 × 4.95 = 59.1525 m². So, the area lies between 59.1525 m² and 60.8525 m².</span>",
      "scaffoldPrompts": [
        "Find lower and upper bounds of length and width.",
        "Multiply upper bounds for max area.",
        "Multiply lower bounds for min area."
      ]
    }
  }
};