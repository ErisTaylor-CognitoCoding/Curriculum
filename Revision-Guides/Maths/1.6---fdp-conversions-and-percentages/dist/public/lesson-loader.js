window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.6 - FDP conversions and percentages",
  "strapline": "Learn to convert fluently between fractions, decimals and percentages and solve various percentage problems including percentage changes and reverse percentages.",
  "learningObjectives": [
    "Students should develop fluency in converting between fractions, decimals and percentages (Maths 1.6)",
    "Students should use these skills to solve percentage problems including finding percentages of amounts, percentage increase and decrease (Maths 1.6)",
    "Students should solve reverse percentage calculations (Maths 1.6)"
  ],
  "keyFormulas": [
    "Conversion: Fraction to decimal by dividing numerator by denominator",
    "Conversion: Decimal to percentage multiply by 100",
    "Percentage increase = original amount × (1 + percentage as decimal)",
    "Percentage decrease = original amount × (1 - percentage as decimal)",
    "Reverse percentage = profit or loss / (100 ± percentage) × 100"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f9f9f9' stroke='#222' stroke-width='2'/><text x='200' y='100' font-family='Arial' font-size='24' text-anchor='middle' fill='#333'><tspan>1/2 = 0.5 = 50%</tspan></text><line x1='100' y1='140' x2='300' y2='140' stroke='#666' stroke-width='2' marker-end='url(#arrow)'/><text x='100' y='180' font-family='Arial' font-size='18' fill='#555'>Fraction</text><text x='200' y='180' font-family='Arial' font-size='18' fill='#555'>Decimal</text><text x='300' y='180' font-family='Arial' font-size='18' fill='#555'>Percentage</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L0,6 L9,3 z' fill='#666' /></marker></defs></svg>",
  "step1": {
    "title": "Concept 1: Understanding FDP Equivalence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Fractions, decimals and percentages are three different ways of expressing the same value. For example, <strong>1/2</strong> is the same as <strong>0.5</strong> and <strong>50%</strong>. Understanding how to switch between these forms helps solve many problems.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine cutting a pizza: Fraction shows how many slices you have, decimal tells you the slice size as a part of 1 whole pizza, and percentage shows it in parts per 100 slices.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Convert Fraction 3/4 to Decimal and Percentage",
      "problem": "Convert the fraction <strong>3/4</strong> into decimal and percentage.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide numerator by denominator: What is 3 ÷ 4?",
          "answer": "0.75",
          "feedback": "Correct. 3 divided by 4 equals 0.75."
        },
        {
          "id": "q2",
          "prompt": "Convert decimal 0.75 to percentage by multiplying by 100. What do you get?",
          "answer": "75%",
          "feedback": "Correct. 0.75 × 100 = 75%."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Calculating Percentage of an Amount",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find a percentage of a quantity, convert the percentage to a decimal by dividing by 100, then multiply by the amount. For example, 15% of £80 is calculated by 0.15 × 80.</p>",
    "workedExample": {
      "title": "Worked Example: Find 20% of £50",
      "problem": "Calculate 20% of £50.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 20% to decimal by dividing by 100.",
          "answer": "0.2",
          "feedback": "Correct. 20% as a decimal is 0.2."
        },
        {
          "id": "q2",
          "prompt": "Multiply 0.2 by £50. What is the answer?",
          "answer": "10",
          "feedback": "Well done! 0.2 × 50 = 10."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 160 80' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='140' height='60' fill='#cce5ff' stroke='#004085' stroke-width='2'/><text x='80' y='45' font-family='Arial' font-size='18' fill='#004085' text-anchor='middle'>£50</text><line x1='80' y1='70' x2='80' y2='90' stroke='#004085' stroke-width='2'/><text x='80' y='105' font-family='Arial' font-size='18' fill='#004085' text-anchor='middle'>20% = £10</text></svg>"
    }
  },
  "step3": {
    "title": "Concept 3: Percentage Increase and Decrease",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To increase an amount by a percentage, multiply by (1 + percentage as decimal). To decrease, multiply by (1 - percentage as decimal). Example: Increasing £50 by 20% means £50 × 1.2 = £60.</p>",
    "workedExample": {
      "title": "Worked Example: Increase £80 by 15%",
      "problem": "Calculate the new amount after increasing £80 by 15%.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 15% to decimal.",
          "answer": "0.15",
          "feedback": "Correct. 15% as a decimal is 0.15."
        },
        {
          "id": "q2",
          "prompt": "Calculate multiplier for increase: 1 + 0.15 = ?",
          "answer": "1.15",
          "feedback": "Correct. Multiplier is 1.15."
        },
        {
          "id": "q3",
          "prompt": "Multiply £80 by 1.15. What is the new amount?",
          "answer": "92",
          "feedback": "Good job! £80 × 1.15 = £92."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='80' height='50' fill='#d4edda' stroke='#155724' stroke-width='2'/><text x='50' y='50' font-family='Arial' font-size='20' fill='#155724' text-anchor='middle'>£80</text><rect x='110' y='20' width='80' height='50' fill='#c3e6cb' stroke='#155724' stroke-width='2'/><text x='150' y='50' font-family='Arial' font-size='20' fill='#155724' text-anchor='middle'>£92</text><line x1='90' y1='45' x2='110' y2='45' stroke='#155724' stroke-width='3' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L0,6 L9,3 z' fill='#155724' /></marker></defs></svg>"
    }
  },
  "step4": {
    "title": "Practice: Percentage Decrease",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now try decreasing an amount by a given percentage. Multiply by (1 - percentage as decimal).</p>",
    "workedExample": {
      "title": "Worked Example: Decrease £120 by 25%",
      "problem": "Calculate the price after a 25% decrease on £120.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 25% to decimal.",
          "answer": "0.25",
          "feedback": "Correct, 25% = 0.25."
        },
        {
          "id": "q2",
          "prompt": "Calculate multiplier: 1 - 0.25 = ?",
          "answer": "0.75",
          "feedback": "Good! The multiplier is 0.75."
        },
        {
          "id": "q3",
          "prompt": "Multiply £120 by 0.75. What is the new price?",
          "answer": "90",
          "feedback": "Correct! £120 × 0.75 = £90."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='80' height='50' fill='#f8d7da' stroke='#721c24' stroke-width='2'/><text x='50' y='50' font-family='Arial' font-size='20' fill='#721c24' text-anchor='middle'>£120</text><rect x='110' y='20' width='80' height='50' fill='#f5c6cb' stroke='#721c24' stroke-width='2'/><text x='150' y='50' font-family='Arial' font-size='20' fill='#721c24' text-anchor='middle'>£90</text><line x1='90' y1='45' x2='110' y2='45' stroke='#721c24' stroke-width='3' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L0,6 L9,3 z' fill='#721c24' /></marker></defs></svg>"
    }
  },
  "step5": {
    "title": "Concept 4: Reverse Percentage Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Reverse percentage calculations find the original amount before a percentage increase or decrease was applied. If the current amount reflects a percentage rise or drop, divide by the multiplier to find the original.</p>",
    "workedExample": {
      "title": "Worked Example: A jacket costs £84 after a 20% increase. What was the original price?",
      "problem": "Find the original price before a 20% increase resulted in £84.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 20% to decimal.",
          "answer": "0.20",
          "feedback": "Correct, 20% = 0.20."
        },
        {
          "id": "q2",
          "prompt": "Calculate multiplier: 1 + 0.20 = ?",
          "answer": "1.20",
          "feedback": "Good! Multiplier is 1.20."
        },
        {
          "id": "q3",
          "prompt": "Divide £84 by 1.20 to find the original price.",
          "answer": "70",
          "feedback": "Correct! £84 ÷ 1.20 = £70."
        }
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is 0.4 expressed as a percentage?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>40%</span>",
            "isCorrect": true,
            "explanation": "Correct. Multiply decimal 0.4 by 100 to get 40%."
          },
          {
            "id": "b",
            "label": "<span>4%</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 0.4 × 100 = 40%, not 4%."
          },
          {
            "id": "c",
            "label": "<span>0.4%</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 0.4 as a decimal is 40%, not less than 1%."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which of the following is the correct multiplier to decrease an amount by 10%?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>1.10</span>",
            "isCorrect": false,
            "explanation": "Wrong, 1.10 is for increasing by 10%, not decreasing."
          },
          {
            "id": "b",
            "label": "<span>0.90</span>",
            "isCorrect": true,
            "explanation": "Correct. To decrease by 10%, multiply by 1 - 0.10 = 0.90."
          },
          {
            "id": "c",
            "label": "<span>0.10</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 0.10 corresponds to 10%, but we need the multiplier less than 1."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> form represents parts out of 100.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "percentage",
                "label": "percentage",
                "isCorrect": true,
                "feedback": "Correct! Percentage means parts per 100."
              },
              {
                "value": "fraction",
                "label": "fraction",
                "isCorrect": false,
                "feedback": "Try again. Fraction is parts out of a whole, not necessarily 100."
              },
              {
                "value": "decimal",
                "label": "decimal",
                "isCorrect": false,
                "feedback": "Try again. Decimal is a representation between 0 and 1, not specifically out of 100."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>A percentage increase means multiplying by <span class=\"font-semibold\">_____</span> the percentage as a decimal.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "one plus",
                "label": "one plus",
                "isCorrect": true,
                "feedback": "Correct! Increase multiplier is 1 + percentage (decimal)."
              },
              {
                "value": "one minus",
                "label": "one minus",
                "isCorrect": false,
                "feedback": "Incorrect. One minus is for decrease."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A shirt originally costs £90. It is decreased by 15%, then increased by 20%. What is the final price of the shirt? Show all your working.</span>",
      "hint": "Remember to calculate each percentage change step-by-step using appropriate multipliers.",
      "mustHaveKeywords": ["percentage decrease", "percentage increase", "multiplier", "final price"],
      "optionalKeywords": ["intermediate step", "multiplication"],
      "modelAnswer": "<span>First, calculate 15% decrease: multiplier = 1 - 0.15 = 0.85.<br>New price after decrease = 90 × 0.85 = £76.50.<br>Then calculate 20% increase: multiplier = 1 + 0.20 = 1.20.<br>Final price after increase = 76.50 × 1.20 = £91.80.</span>",
      "scaffoldPrompts": [
        "Calculate the price after 15% decrease.",
        "Use this new price to calculate the price after 20% increase."
      ]
    }
  }
};