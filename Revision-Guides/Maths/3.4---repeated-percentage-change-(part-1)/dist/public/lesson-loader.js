window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.4 - Repeated percentage change (Part 1)",
  "strapline": "Understanding how to calculate repeated percentage changes using multipliers and powers.",
  "learningObjectives": [
    "Students should be able to calculate the result of applying the same percentage change multiple times using multipliers raised to powers (Maths 3.4)",
    "Students should be able to solve problems involving compound interest, repeated depreciation, and population change without calculating each change step by step (Maths 3.4)",
    "Students should be able to apply repeated percentage change techniques to real-world contexts including investment growth and asset depreciation (Maths 3.4)"
  ],
  "keyFormulas": [
    "Multiplier for increase = 1 + (percentage increase ÷ 100)",
    "Multiplier for decrease = 1 - (percentage decrease ÷ 100)",
    "Repeated change = Initial amount × (multiplier)ⁿ, where n = number of times change applied"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='100' text-anchor='middle' font-family='sans-serif' font-weight='bold'>Multiplier Concept</text><text x='200' y='140' text-anchor='middle' font-family='sans-serif' font-size='14'>100% + 5% = 105% = 1.05</text><text x='200' y='170' text-anchor='middle' font-family='sans-serif' font-size='14'>100% - 5% = 95% = 0.95</text><line x1='160' y1='200' x2='240' y2='200' stroke='#333' stroke-width='2' marker-end='url(#arrowhead)'/><text x='200' y='225' text-anchor='middle' font-family='sans-serif' font-size='16'>Repeated application: multiplierⁿ</text><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#333'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding Multipliers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>multiplier</strong> represents a percentage change as a decimal number. For example, a 5% increase is represented as 1.05 (which is 100% + 5%) and a 5% decrease is 0.95 (100% - 5%). This helps us calculate changes quickly using multiplication.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the multiplier like a recipe multiplier. If a recipe doubles ingredients (100% + 100%), you multiply amounts by 2. Similarly, a 5% increase means multiplying by 1.05.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the multiplier for a 7% increase",
      "problem": "Calculate the multiplier for a 7% increase.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is 100% + 7% as a percentage?",
          "answer": "107%",
          "feedback": "Correct! Adding 7% to 100% gives 107%."
        },
        {
          "id": "q2",
          "prompt": "Convert 107% into decimal form (multiplier)?",
          "answer": "1.07",
          "feedback": "Correct! 107% as a decimal is 1.07."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Repeated Percentage Change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Repeated percentage change means applying the same percentage increase or decrease multiple times one after another. Instead of calculating step-by-step, we use powers to find the overall effect quickly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you save 3% interest every year for 5 years, instead of calculating each year's interest separately, repeated percentage change lets you find the total result in one calculation.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating repeated increase using multiplication",
      "problem": "Calculate the multiplier for a 3% increase applied 4 times.",
      "questions": [
        {
          "id": "q3",
          "prompt": "What is the multiplier for a 3% increase?",
          "answer": "1.03",
          "feedback": "Correct! 3% increase means multiplier 1.03."
        },
        {
          "id": "q4",
          "prompt": "Write the expression for applying this four times using powers.",
          "answer": "1.03^4",
          "feedback": "Correct! Multiplier raised to power 4."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Exponential Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Instead of multiplying a number by the multiplier repeatedly, we use powers to write it in exponential form. For example, 1.05 × 1.05 × 1.05 = 1.05³.</p>",
    "workedExample": {
      "title": "Worked Example: Writing repeated multiplication as powers",
      "problem": "Write 1.04 multiplied by itself 5 times in exponential form.",
      "questions": [
        {
          "id": "q5",
          "prompt": "How many times is 1.04 multiplied?",
          "answer": "5",
          "feedback": "Correct! The multiplier is used 5 times."
        },
        {
          "id": "q6",
          "prompt": "Write the exponential form.",
          "answer": "1.04^5",
          "feedback": "Correct! 1.04 to the power of 5."
        }
      ]
    }
  },
  "step4": {
    "title": "Worked Example: Repeated Depreciation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Depreciation means the value decreases by a certain percentage each time. For example, a car losing 15% of its value every year has a multiplier of 0.85.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate the value of a car after 3 years",
      "problem": "A car is worth £20,000 and loses 15% of its value each year. Calculate its value after 3 years.",
      "questions": [
        {
          "id": "q7",
          "prompt": "What is the multiplier for 15% depreciation?",
          "answer": "0.85",
          "feedback": "Correct! Multiplier is 1 - 0.15 = 0.85."
        },
        {
          "id": "q8",
          "prompt": "Write the expression to calculate the value after 3 years.",
          "answer": "20000 × 0.85^3",
          "feedback": "Correct! Initial value times multiplier to power 3."
        }
      ]
    }
  },
  "step5": {
    "title": "Worked Example: Compound Interest Problem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Compound interest adds interest to both the original amount and any interest already earned. Use repeated percentage change to calculate the total after several periods.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate investment value after 5 years",
      "problem": "An investment of £1,000 earns 4% compound interest per year. Calculate its value after 5 years.",
      "questions": [
        {
          "id": "q9",
          "prompt": "What is the multiplier for 4% interest?",
          "answer": "1.04",
          "feedback": "Correct! 4% increase multiplier is 1.04."
        },
        {
          "id": "q10",
          "prompt": "Write the expression for the total value after 5 years.",
          "answer": "1000 × 1.04^5",
          "feedback": "Correct! Initial amount times multiplier to the power of 5."
        }
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the multiplier for a 12% decrease?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>0.88</span>",
            "isCorrect": true,
            "explanation": "Correct! 100% - 12% = 88%, which is 0.88 as a multiplier."
          },
          {
            "id": "b",
            "label": "<span>1.12</span>",
            "isCorrect": false,
            "explanation": "Incorrect, this multiplier represents a 12% increase, not decrease."
          },
          {
            "id": "c",
            "label": "<span>0.12</span>",
            "isCorrect": false,
            "explanation": "Incorrect, 0.12 represents 12% but not the remaining value after decrease."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is used to represent a percentage change as a decimal multiplier.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "multiplier",
                "label": "multiplier",
                "isCorrect": true,
                "feedback": "Correct! The multiplier represents percentage changes in decimal form."
              },
              {
                "value": "exponent",
                "label": "exponent",
                "isCorrect": false,
                "feedback": "Incorrect. An exponent shows the number of times a multiplier is applied, not the multiplier itself."
              },
              {
                "value": "percentage",
                "label": "percentage",
                "isCorrect": false,
                "feedback": "Incorrect. Percentage is the original percent value, not the multiplier."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Interactive Practice: Calculate repeated percentage change",
    "workedExample": {
      "title": "Calculate final amount after repeated increase",
      "problem": "A population of 1200 grows by 6% each year. Calculate its size after 4 years.",
      "questions": [
        {
          "id": "q11",
          "prompt": "Find the multiplier for a 6% increase.",
          "answer": "1.06",
          "feedback": "Correct, 6% increase multiplier is 1.06."
        },
        {
          "id": "q12",
          "prompt": "Write the expression for the population after 4 years.",
          "answer": "1200 × 1.06^4",
          "feedback": "Correct! Initial population times multiplier to power 4."
        },
        {
          "id": "q13",
          "prompt": "Calculate 1.06^4 (rounded to 4 decimal places).",
          "answer": "1.2625",
          "feedback": "Correct! 1.06^4 ≈ 1.2625."
        },
        {
          "id": "q14",
          "prompt": "Multiply 1200 by 1.2625 to find the population after 4 years.",
          "answer": "1515",
          "feedback": "Correct! The population after 4 years is approximately 1515."
        }
      ]
    }
  },
  "step9": {
    "title": "Worked Example: Repeated Depreciation in Real World",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A tablet loses 20% of its value each year. We calculate the value after several years using repeated percentage change.</p>",
    "workedExample": {
      "title": "Calculate value after 3 years",
      "problem": "A tablet is worth £500 and depreciates by 20% each year. Find its value after 3 years.",
      "questions": [
        {
          "id": "q15",
          "prompt": "Write the multiplier for 20% depreciation.",
          "answer": "0.80",
          "feedback": "Correct! 100% - 20% = 80%, multiplier = 0.80."
        },
        {
          "id": "q16",
          "prompt": "Write the expression for the tablet’s value after 3 years.",
          "answer": "500 × 0.80^3",
          "feedback": "Correct! Initial value times multiplier to the power 3."
        }
      ]
    }
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A machine costs £12,000 and depreciates by 10% each year. Calculate its value after 5 years using repeated percentage change.</span>",
      "hint": "Remember to find the multiplier for 10% depreciation and use powers for repeated application.",
      "mustHaveKeywords": ["multiplier", "power", "depreciation", "£"],
      "optionalKeywords": ["exponential form", "percentage decrease"],
      "modelAnswer": "<span>First, calculate the multiplier for 10% depreciation as 0.90 (100% - 10%). Use repeated percentage change formula: Final value = £12,000 × 0.90⁵. Calculate 0.90⁵ ≈ 0.59049. Multiply: 12,000 × 0.59049 ≈ £7,085.88. So, the machine is worth about £7,086 after 5 years.</span>",
      "scaffoldPrompts": ["Calculate the multiplier for 10% decrease", "Write the expression using powers", "Calculate the power value", "Multiply by the initial value"]
    }
  }
};