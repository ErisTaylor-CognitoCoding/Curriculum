window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 1)",
  "strapline": "Understanding and applying upper and lower bounds to calculate limits of accuracy and performing calculations with numbers in standard form.",
  "learningObjectives": [
    "Students should apply and interpret limits of accuracy when rounding or truncating, including upper and lower bounds (Maths 1.1)",
    "Students should calculate with numbers in standard form including multiplying and dividing numbers expressed in standard form (Maths 1.1)",
    ""
  ],
  "keyFormulas": [
    "Upper bound = rounded value + half of the rounding unit (e.g., +0.05 for 1 decimal place)",
    "Lower bound = rounded value - half of the rounding unit (e.g., -0.05 for 1 decimal place)",
    "Standard form multiplication/division: Multiply/divide coefficients, add/subtract powers of 10"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='100' text-anchor='middle' font-family='sans-serif' font-size='18'>Rounded Number: 3.4</text><text x='200' y='140' text-anchor='middle' font-family='sans-serif' font-size='16'>Lower Bound: 3.35</text><text x='200' y='170' text-anchor='middle' font-family='sans-serif' font-size='16'>Upper Bound: 3.45</text><line x1='120' y1='145' x2='280' y2='145' stroke='blue' stroke-width='2' /><circle cx='120' cy='145' r='5' fill='red' /><circle cx='280' cy='145' r='5' fill='red' /><circle cx='200' cy='145' r='7' fill='green' /></svg>",
  "step1": {
    "title": "Understanding Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a number is rounded, it could have originally been slightly higher or lower within a range. The <strong>upper bound</strong> is the highest possible original value before rounding, and the <strong>lower bound</strong> is the lowest possible original value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine measuring your height with a ruler marked to the nearest centimetre. Your true height could be a bit less or more than what you read because of the rounding of the measurement.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number: 4.2 rounded to 1 decimal place</span>",
        "<span>Upper bound = 4.2 + 0.05 = 4.25</span>",
        "<span>Lower bound = 4.2 - 0.05 = 4.15</span>"
      ]
    }
  },
  "step2": {
    "title": "Applying Upper and Lower Bounds for 1 Decimal Place",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For numbers rounded to 1 decimal place, adding or subtracting 0.05 gives you the upper and lower bounds respectively.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Rounded number: 7.8</span>",
        "<span>Calculate upper bound: 7.8 + 0.05 = 7.85</span>",
        "<span>Calculate lower bound: 7.8 - 0.05 = 7.75</span>"
      ]
    }
  },
  "step3": {
    "title": "Limits of Accuracy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>limits of accuracy</strong> describe the range in which the true value lies based on rounding or truncation. This range helps identify the <em>maximum possible error</em> when doing calculations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you estimate the time to arrive within 10 minutes of the actual time, the limits of accuracy show this possible time range.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number: 15.6 rounded to 1 decimal place</span>",
        "<span>Lower bound: 15.55</span>",
        "<span>Upper bound: 15.65</span>",
        "<span>Limits of accuracy: 15.55 ≤ true value < 15.65</span>"
      ]
    }
  },
  "step4": {
    "title": "Calculations Using Bounds: Addition and Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the bounds of a sum or difference, add or subtract the upper and lower bounds of each number accordingly to find the overall bounds.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Round numbers: 3.4 and 2.7 both to 1 decimal place</span>",
        "<span>Bounds for 3.4: 3.35 to 3.45</span>",
        "<span>Bounds for 2.7: 2.65 to 2.75</span>",
        "<span>Minimum sum: 3.35 + 2.65 = 6.0</span>",
        "<span>Maximum sum: 3.45 + 2.75 = 6.2</span>"
      ]
    }
  },
  "step5": {
    "title": "Introduction to Standard Form Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Numbers in <strong>standard form</strong> are written as a decimal number between 1 and 10 multiplied by a power of 10. We can multiply and divide such numbers by manipulating their coefficients and powers of 10 separately.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Multiply: (3 × 10<sup>4</sup>) × (2 × 10<sup>3</sup>)</span>",
        "<span>Multiply coefficients: 3 × 2 = 6</span>",
        "<span>Add powers of 10: 10<sup>4</sup> × 10<sup>3</sup> = 10<sup>7</sup></span>",
        "<span>Answer: 6 × 10<sup>7</sup></span>"
      ]
    }
  },
  "step6": {
    "title": "Standard Form Division and Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing numbers in standard form, divide the coefficients and subtract the powers of 10. Bounds can be applied similarly if numbers are rounded.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Divide: (8 × 10<sup>6</sup>) ÷ (2 × 10<sup>3</sup>)</span>",
        "<span>Divide coefficients: 8 ÷ 2 = 4</span>",
        "<span>Subtract powers: 10<sup>6</sup> ÷ 10<sup>3</sup> = 10<sup>3</sup></span>",
        "<span>Answer: 4 × 10<sup>3</sup></span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the upper bound of a number 5.7 rounded to 1 decimal place?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>5.75</span>",
            "isCorrect": true,
            "explanation": "<span>Correct, upper bound is 5.7 + 0.05 = 5.75</span>"
          },
          {
            "id": "b",
            "label": "<span>5.65</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect, this is the lower bound.</span>"
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Multiply: (4 × 10<sup>3</sup>) × (3 × 10<sup>2</sup>). What is the answer in standard form?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>12 × 10<sup>5</sup></span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect, the coefficient must be between 1 and 10 in standard form.</span>"
          },
          {
            "id": "b",
            "label": "<span>1.2 × 10<sup>6</sup></span>",
            "isCorrect": true,
            "explanation": "<span>Correct, 4 × 3 = 12 = 1.2 × 10, so 1.2 × 10<sup>6</sup></span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the smallest original value before rounding.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "lower_bound",
                "label": "Lower Bound",
                "isCorrect": true,
                "feedback": "<span>Correct! The lower bound represents the minimum possible original value.</span>"
              },
              {
                "value": "upper_bound",
                "label": "Upper Bound",
                "isCorrect": false,
                "feedback": "<span>Incorrect, this is the largest possible original value.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>When multiplying numbers in standard form, multiply the <span class=\"font-semibold\">_____</span> and add the powers of 10.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "coefficients",
                "label": "coefficients",
                "isCorrect": true,
                "feedback": "<span>Correct! Multiply the decimal parts.</span>"
              },
              {
                "value": "powers",
                "label": "powers",
                "isCorrect": false,
                "feedback": "<span>Incorrect, powers of ten are added, not multiplied.</span>"
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
      "prompt": "<span>Calculate the upper and lower bounds for the number 9.3 rounded to 1 decimal place. Then multiply the upper bound of 9.3 by the lower bound of 4.6 (also rounded to 1 decimal place) and give the answer in standard form.</span>",
      "hint": "<span>Find the bounds first, then multiply coefficients and add powers of 10, remembering to write your final answer correctly in standard form.</span>",
      "mustHaveKeywords": [
        "upper bound",
        "lower bound",
        "standard form",
        "multiply coefficients",
        "add powers of 10"
      ],
      "optionalKeywords": [
        "limits of accuracy",
        "rounding"
      ],
      "modelAnswer": "<span>Upper bound of 9.3 is 9.35; lower bound of 4.6 is 4.55.<br>Multiply: 9.35 × 4.55 = approx 42.5425.<br>In standard form: 4.25425 × 10<sup>1</sup>.<br>Final answer rounded appropriately: 4.25 × 10<sup>1</sup>.</span>",
      "scaffoldPrompts": [
        "<span>Calculate the upper bound for 9.3</span>",
        "<span>Calculate the lower bound for 4.6</span>",
        "<span>Multiply these bounds</span>",
        "<span>Convert the result into standard form</span>"
      ]
    }
  }
};