window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest)",
  "strapline": "Understanding how quantities grow or decay exponentially and how compound interest works in repeated percentage change scenarios.",
  "learningObjectives": [
    "Students should understand and calculate compound interest for quantities increasing or decreasing by a constant percentage over time (Maths 3.2)",
    "Students should model exponential growth and decay situations using appropriate mathematical notation and formulae (Maths 3.2)",
    "Students should solve problems involving repeated percentage change in practical contexts (Maths 3.2)"
  ],
  "keyFormulas": [
    "Concept 1 Formula: Exponential Growth - A = P × multiplier^n, where multiplier > 1",
    "Concept 2 Formula: Exponential Decay - A = P × multiplier^n, where 0 < multiplier < 1",
    "Concept 3 Formula: Compound Interest - A = P(1 + r/100)^n where A = final amount, P = principal, r = rate (%), n = number of periods"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='230' width='320' height='20' fill='#ddd' /><line x1='50' y1='230' x2='50' y2='50' stroke='#333' stroke-width='2'/><line x1='50' y1='230' x2='370' y2='230' stroke='#333' stroke-width='2'/><text x='200' y='270' font-family='sans-serif' font-size='14' text-anchor='middle'>Time (n)</text><text x='20' y='150' font-family='sans-serif' font-size='14' text-anchor='middle' transform='rotate(-90 20,150)'>Amount (A)</text><circle cx='100' cy='190' r='4' fill='#228B22'/><circle cx='150' cy='150' r='4' fill='#228B22'/><circle cx='200' cy='110' r='4' fill='#228B22'/><circle cx='250' cy='70' r='4' fill='#228B22'/><circle cx='300' cy='40' r='4' fill='#228B22'/><polyline points='100,190 150,150 200,110 250,70 300,40' fill='none' stroke='#228B22' stroke-width='2'/><text x='310' y='40' font-family='sans-serif' font-size='12' fill='#228B22'>Exponential Growth</text></svg>",
  "step1": {
    "title": "Concept: Understanding Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth occurs when a quantity increases by a fixed percentage over equal time periods. Each increase is larger than the last because we calculate the percentage from the new amount, not the original.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a snowball rolling down a hill that grows bigger as it picks up more snow. The more it grows, the faster it becomes larger.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Exponential Growth Step-by-Step",
      "problem": "A population of rabbits is 100 and grows by 10% each month. Calculate the population after 3 months.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for a 10% increase?",
          "answer": "1.1",
          "feedback": "Correct. 10% increase means multiplying by 1 + 0.10 = 1.1."
        },
        {
          "id": "q2",
          "prompt": "Calculate the population after 1 month (100 × 1.1).",
          "answer": "110",
          "feedback": "Good job! After the first month, the population is 110."
        },
        {
          "id": "q3",
          "prompt": "Calculate the population after 2 months (110 × 1.1).",
          "answer": "121",
          "feedback": "Well done! The population after 2 months is 121."
        },
        {
          "id": "q4",
          "prompt": "Calculate the population after 3 months (121 × 1.1).",
          "answer": "133.1",
          "feedback": "Correct! After 3 months, the population is approximately 133.1."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay happens when a quantity decreases by a fixed percentage over equal time intervals. Each decrease is smaller than the last as it is based on the shrinking amount.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a melting ice cube: the smaller it gets, the less it melts each time because there is less ice left.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Exponential Decay Step-by-Step",
      "problem": "A hot drink cools from 100°C, losing 20% of its heat each hour. Calculate its temperature after 3 hours.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for a 20% decrease?",
          "answer": "0.8",
          "feedback": "Correct! A 20% decrease means multiplying by 1 - 0.20 = 0.8."
        },
        {
          "id": "q2",
          "prompt": "Calculate the temperature after 1 hour (100 × 0.8).",
          "answer": "80",
          "feedback": "Good! The temperature after 1 hour is 80°C."
        },
        {
          "id": "q3",
          "prompt": "Calculate the temperature after 2 hours (80 × 0.8).",
          "answer": "64",
          "feedback": "Correct again! After 2 hours, the temperature is 64°C."
        },
        {
          "id": "q4",
          "prompt": "Calculate the temperature after 3 hours (64 × 0.8).",
          "answer": "51.2",
          "feedback": "Excellent. After 3 hours, the temperature is 51.2°C."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Compound Interest Explained",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Compound interest is interest calculated on the initial principal and also on the accumulated interest from previous periods. This means your money grows faster than simple interest.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like a snowball gaining size; each time interest is added, future interest is earned on that bigger amount.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Compound Interest Calculation",
      "problem": "Calculate the amount after 2 years if £1000 is invested at 5% compound interest per year.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the interest rate as a decimal (r/100)?",
          "answer": "0.05",
          "feedback": "Correct! 5% as a decimal is 0.05."
        },
        {
          "id": "q2",
          "prompt": "Write the compound interest formula with the values: A = 1000(1 + ?)^2",
          "answer": "0.05",
          "feedback": "Good! The formula is A = 1000(1 + 0.05)^2."
        },
        {
          "id": "q3",
          "prompt": "Calculate (1 + 0.05)^2.",
          "answer": "1.1025",
          "feedback": "Correct. 1.05 squared equals 1.1025."
        },
        {
          "id": "q4",
          "prompt": "Calculate final amount A = 1000 × 1.1025.",
          "answer": "1102.5",
          "feedback": "Excellent! The amount after 2 years is £1102.50."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which multiplier correctly represents a 15% increase?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>0.85</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 0.85 represents a 15% decrease."
          },
          {
            "id": "b",
            "label": "<span>1.15</span>",
            "isCorrect": true,
            "explanation": "Correct! 1.15 indicates a 15% increase."
          },
          {
            "id": "c",
            "label": "<span>1.5</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 1.5 would represent a 50% increase."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which formula calculates compound interest?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>A = P(1 + r/n)^(nt)</span>",
            "isCorrect": false,
            "explanation": "This is a general form with compounding times per year n, but for simple annual compounding, use A = P(1 + r/100)^n."
          },
          {
            "id": "b",
            "label": "<span>A = P(1 + r/100)^n</span>",
            "isCorrect": true,
            "explanation": "Correct! This formula calculates compound interest for n periods."
          },
          {
            "id": "c",
            "label": "<span>A = P + rt</span>",
            "isCorrect": false,
            "explanation": "This is simple interest formula, not compound interest."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The multiplier for exponential growth is always <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "greater_than_1",
                "label": "greater than 1",
                "isCorrect": true,
                "feedback": "Correct! Multipliers for growth exceed 1."
              },
              {
                "value": "between_0_and_1",
                "label": "between 0 and 1",
                "isCorrect": false,
                "feedback": "Incorrect. This is for decay."
              },
              {
                "value": "less_than_0",
                "label": "less than 0",
                "isCorrect": false,
                "feedback": "Wrong. Multiplier cannot be negative here."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>In compound interest, the formula for the final amount is A = P(1 + r/<sup>____</sup>)^n.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "100",
                "label": "100",
                "isCorrect": true,
                "feedback": "Correct! The rate r is divided by 100 to convert percentage to decimal."
              },
              {
                "value": "10",
                "label": "10",
                "isCorrect": false,
                "feedback": "Incorrect. The rate is divided by 100, not 10."
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
      "prompt": "<span>A sum of £2000 is invested at 4% compound interest per year. Calculate the amount after 5 years and explain whether this investment shows exponential growth or decay.</span>",
      "hint": "Remember to use the compound interest formula A = P(1 + r/100)^n and interpret the multiplier.",
      "mustHaveKeywords": [
        "compound interest",
        "multiplier",
        "exponential growth",
        "4%",
        "5 years"
      ],
      "optionalKeywords": [
        "formula substitution",
        "calculation steps",
        "interpretation of multiplier"
      ],
      "modelAnswer": "<span>To calculate the amount after 5 years, use A = 2000(1 + 4/100)^5 = 2000(1.04)^5. Calculate (1.04)^5 ≈ 1.2167, then multiply: 2000 × 1.2167 = £2433.40 (approximately). Since the multiplier 1.04 is greater than 1, this represents exponential growth.</span>",
      "scaffoldPrompts": [
        "Write down the compound interest formula.",
        "Identify P, r, and n from the problem.",
        "Calculate the multiplier: 1 + r/100.",
        "Raise the multiplier to the power of n.",
        "Multiply the result by P to find A.",
        "Explain whether multiplier > 1 means growth or decay."
      ]
    }
  }
};