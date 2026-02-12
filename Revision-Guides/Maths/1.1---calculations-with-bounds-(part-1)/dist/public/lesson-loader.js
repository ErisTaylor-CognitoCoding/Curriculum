window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 1)",
  "strapline": "Understanding how to work with upper and lower bounds and applying limits of accuracy to calculations, including numbers in standard form.",
  "learningObjectives": [
    "Students should apply and interpret limits of accuracy when rounding or truncating, including upper and lower bounds (Maths 1.1)",
    "Students should calculate with numbers in standard form including multiplying and dividing numbers expressed in standard form (Maths 1.1)",
    ""
  ],
  "keyFormulas": [
    "Upper bound = Rounded value + half of the rounding unit",
    "Lower bound = Rounded value - half of the rounding unit",
    "Limits of accuracy show the range within which the true value lies"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 160' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='40' width='300' height='80' fill='#e0f7fa' stroke='#00796b' stroke-width='2' rx='10' ry='10'/><text x='200' y='70' font-family='sans-serif' font-size='16' fill='#004d40' text-anchor='middle'><tspan>Rounded Value</tspan></text><text x='110' y='130' font-family='sans-serif' font-size='14' fill='#004d40' text-anchor='middle'>Lower Bound</text><text x='290' y='130' font-family='sans-serif' font-size='14' fill='#004d40' text-anchor='middle'>Upper Bound</text><line x1='110' y1='120' x2='110' y2='50' stroke='#004d40' stroke-width='2'/><line x1='290' y1='120' x2='290' y2='50' stroke='#004d40' stroke-width='2'/><line x1='50' y1='90' x2='350' y2='90' stroke='#004d40' stroke-width='1' stroke-dasharray='5,5'/></svg>",
  "step1": {
    "title": "Concept: What is an Upper Bound?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>Upper Bound</strong> represents the <em>maximum</em> possible value a number could have before it was rounded or truncated. For example, if a number is rounded to 1 decimal place, its upper bound is found by adding 0.05 to the rounded number.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a thermometer measuring temperature to the nearest 0.1°C. If the thermometer reads 23.4°C, the true temperature could be as high as 23.45°C but not more.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given the number 7.8 rounded to 1 decimal place, the upper bound is 7.8 + 0.05 = 7.85.</span>",
        "<span>This means the actual value could be anything up to (but not including) 7.85.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: What is a Lower Bound?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>Lower Bound</strong> is the <em>minimum</em> possible value a number could have before rounding or truncating. For a number rounded to 1 decimal place, the lower bound is found by subtracting 0.05 from the rounded number.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the thermometer example again, if it reads 23.4°C, the true temperature cannot be lower than 23.35°C.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For the number 5.3 rounded to 1 decimal place, the lower bound is 5.3 - 0.05 = 5.25.</span>",
        "<span>The true value lies somewhere between 5.25 and the upper bound.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Limits of Accuracy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>Limits of Accuracy</strong> define a range between the lower and upper bounds, showing all possible values the original number could have been before rounding. This is important because calculations with rounded values might have errors within this range.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine measuring a length with a ruler marked only in centimeters. If you measure 12.3 cm, the actual length could be a bit less or more. The limits of accuracy tell you how much less or more.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number rounded to 1 decimal place: 9.6</span>",
        "<span>Lower bound = 9.6 - 0.05 = 9.55</span>",
        "<span>Upper bound = 9.6 + 0.05 = 9.65</span>",
        "<span>Limits of accuracy: 9.55 ≤ true value < 9.65</span>"
      ]
    }
  },
  "step4": {
    "title": "Working with Standard Form: Multiplication",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying numbers in standard form, multiply the decimal parts and add the powers of 10. This keeps the answer in standard form.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Multiply (3 × 10<sup>4</sup>) and (2 × 10<sup>3</sup>)</span>",
        "<span>Multiply decimals: 3 × 2 = 6</span>",
        "<span>Add powers of ten: 4 + 3 = 7</span>",
        "<span>Answer: 6 × 10<sup>7</sup></span>"
      ]
    }
  },
  "step5": {
    "title": "Working with Standard Form: Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing numbers in standard form, divide the decimals and subtract the powers of 10.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Divide (6 × 10<sup>5</sup>) by (2 × 10<sup>3</sup>)</span>",
        "<span>Divide decimals: 6 ÷ 2 = 3</span>",
        "<span>Subtract powers of ten: 5 - 3 = 2</span>",
        "<span>Answer: 3 × 10<sup>2</sup></span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If a number is rounded to 1 decimal place and the rounded value is 4.7, what is the upper bound?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>4.75</span>",
            "isCorrect": true,
            "explanation": "<span>Upper bound = 4.7 + 0.05 = 4.75</span>"
          },
          {
            "id": "b",
            "label": "<span>4.65</span>",
            "isCorrect": false,
            "explanation": "<span>This is the lower bound, not the upper bound.</span>"
          },
          {
            "id": "c",
            "label": "<span>4.7</span>",
            "isCorrect": false,
            "explanation": "<span>4.7 is the rounded value, not a bound.</span>"
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____ Bound</span> represents the <em>minimum</em> possible value a number could have had before rounding.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "upper",
                "label": "Upper",
                "isCorrect": false,
                "feedback": "<span>Incorrect. This is the maximum value.</span>"
              },
              {
                "value": "lower",
                "label": "Lower",
                "isCorrect": true,
                "feedback": "<span>Correct! The lower bound is the minimum possible value.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Practice: Calculate Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Find the upper and lower bounds of the number 12.3 rounded to 1 decimal place.</p>",
    "workedExample": {
      "title": "Your Turn",
      "bullets": [
        "<span>Calculate lower bound: 12.3 - 0.05 = ?</span>",
        "<span>Calculate upper bound: 12.3 + 0.05 = ?</span>"
      ]
    }
  },
  "step9": {
    "title": "Standard Form Practice: Multiply and Divide",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Calculate the following in standard form:</p>",
    "workedExample": {
      "title": "Try These",
      "bullets": [
        "<span>(4 × 10<sup>2</sup>) × (5 × 10<sup>3</sup>) = ?</span>",
        "<span>(8 × 10<sup>5</sup>) ÷ (2 × 10<sup>2</sup>) = ?</span>"
      ]
    }
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A length is recorded as 6.7 cm correct to 1 decimal place. Calculate the upper and lower bounds of the length. Then, a width is recorded as 3.2 cm correct to 1 decimal place. Calculate the possible maximum area of the rectangle using the bounds.</span>",
      "hint": "<span>First find the bounds for length and width. Then multiply the upper bounds to find the maximum area.</span>",
      "mustHaveKeywords": ["upper bound", "lower bound", "maximum area", "multiply bounds"],
      "optionalKeywords": ["limits of accuracy", "rounded to 1 decimal place"],
      "modelAnswer": "<span>The lower bound for length is 6.7 - 0.05 = 6.65 cm and the upper bound is 6.7 + 0.05 = 6.75 cm.<br>The lower bound for width is 3.2 - 0.05 = 3.15 cm and the upper bound is 3.2 + 0.05 = 3.25 cm.<br>The maximum possible area = upper bound length × upper bound width = 6.75 × 3.25 = 21.94 cm<sup>2</sup>.</span>",
      "scaffoldPrompts": [
        "Find upper and lower bounds for the length.",
        "Find upper and lower bounds for the width.",
        "Multiply the two upper bounds to find the maximum area."
      ]
    }
  }
};