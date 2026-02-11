window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest) (Part 2)",
  "strapline": "Understanding repeated percentage changes through compound interest and exponential equations",
  "learningObjectives": [
    "Students should be able to model situations involving repeated percentage changes using the formula for compound interest and exponential equations (Maths 3.2)",
    "Students should be able to interpret and construct exponential graphs, recognising the characteristic curves of growth and decay (Maths 3.2)",
    "Students should be able to solve problems involving finding the original amount or the number of time periods in compound interest scenarios (Maths 3.2)"
  ],
  "step1": {
    "title": "Concept: Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth happens when a quantity increases by the same percentage over equal time periods. Because the percentage applies to the new, larger amount each time, the growth speeds up and the graph curves upwards steeply. The multiplier used in calculations is greater than 1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a population of rabbits that doubles every year. Starting with 10 rabbits, next year there are 20, then 40, then 80. This rapid increase shows exponential growth where each amount is multiplied by 2 each year.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with £100 at an interest rate of 5% per year.</span>",
        "<span>Multiplier = 1 + 0.05 = 1.05.</span>",
        "<span>After 1 year: £100 × 1.05 = £105.</span>",
        "<span>After 2 years: £105 × 1.05 = £110.25, or directly £100 × (1.05)<sup>2</sup>.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay occurs when a quantity decreases by the same percentage over equal time periods. The multiplier is between 0 and 1. The quantity gets smaller and smaller, and the graph curves downward gradually.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about a radioactive substance that loses 10% of its mass every hour. Each hour, the remaining mass is 90% of the amount an hour before. This decreasing process illustrates exponential decay.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A bottle contains 500 ml of liquid that evaporates by 10% each day.</span>",
        "<span>Multiplier = 1 - 0.10 = 0.90.</span>",
        "<span>After 1 day: 500 × 0.90 = 450 ml remains.</span>",
        "<span>After 2 days: 450 × 0.90 = 405 ml, or 500 × (0.90)<sup>2</sup>.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Growth/Decay Multiplier",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The growth or decay multiplier is the factor by which a quantity is multiplied each time period. It is found by adding the percentage increase to 100% for growth or subtracting the percentage decrease from 100% for decay.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If your money grows by 7%, then each year your money is multiplied by 1.07. If it shrinks by 7%, then each year your money is multiplied by 0.93.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate the multiplier for 12% growth: 1 + 0.12 = 1.12.</span>",
        "<span>Calculate the multiplier for 8% decay: 1 - 0.08 = 0.92.</span>"
      ]
    }
  },
  "step4": {
    "title": "Interpreting Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential graphs show characteristic curves: an upward curve that gets steeper for growth and a downward curve that levels off for decay. Recognising these shapes helps understand the behavior of the quantity over time.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Graph of y = 2 × 1.05<sup>x</sup>: curve rises slowly then faster, showing growth.</span>",
        "<span>Graph of y = 500 × 0.90<sup>x</sup>: curve falls steeply then less steep, showing decay.</span>"
      ]
    }
  },
  "step5": {
    "title": "Solving Problems: Finding the Original Amount",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Given the current amount after some time and the multiplier, you can find the original amount by dividing by the multiplier raised to the number of time periods.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A sum of money grows to £121 after 3 years at 5% growth per year.</span>",
        "<span>Multiplier = 1.05.</span>",
        "<span>Original amount = 121 ÷ (1.05)<sup>3</sup> = £100.</span>"
      ]
    }
  },
  "step6": {
    "title": "Solving Problems: Finding the Number of Time Periods",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If you know the original and final amounts and the multiplier, find the number of time periods by solving the exponential equation, often using logarithms or trial and error.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A sum grows from £200 to £242 at 5% growth per year.</span>",
        "<span>Multiplier = 1.05.</span>",
        "<span>Find n such that 200 × (1.05)<sup>n</sup> = 242 means (1.05)<sup>n</sup> = 242 ÷ 200 = 1.21.</span>",
        "<span>Using logs: n = log(1.21) ÷ log(1.05) ≈ 4 years.</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which multiplier represents a 7% decay?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>0.93</span>",
            "isCorrect": true,
            "explanation": "<span>Correct. Decay multiplier = 1 - 0.07 = 0.93.</span>"
          },
          {
            "id": "b",
            "label": "<span>1.07</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. This is a growth multiplier.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the factor used to multiply the initial amount each time period.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "multiplier",
                "label": "multiplier",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "percentage",
                "label": "percentage",
                "isCorrect": false,
                "feedback": "Try again. The percentage is converted to the multiplier."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>An exponential growth multiplier is always <span class=\"font-semibold\">_____</span> 1.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "greater than",
                "label": "greater than",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "less than",
                "label": "less than",
                "isCorrect": false,
                "feedback": "Incorrect. Growth means more than 1."
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
      "prompt": "<span>A sum of money is invested at 4% compound interest per year. After 5 years, the investment grows to £1,216. Find the original sum invested.</span>",
      "hint": "Remember to use the compound interest formula A = P × (1 + r)<sup>n</sup> and rearrange it to find P.",
      "mustHaveKeywords": ["compound interest", "multiplier", "rearrange", "original amount"],
      "optionalKeywords": ["formula", "substitution", "division"],
      "modelAnswer": "<span>Use the formula A = P × (1 + r)<sup>n</sup> where A = 1216, r = 0.04, n = 5.<br/>Calculate the multiplier: 1 + 0.04 = 1.04.<br/>Rearrange to find original amount P = A ÷ (1.04)<sup>5</sup>.<br/>Calculate denominator: (1.04)<sup>5</sup> ≈ 1.21665.<br/>Divide 1216 by 1.21665 to get P ≈ £1000.</span>",
      "scaffoldPrompts": [
        "Identify the values of A, r, and n.",
        "Calculate the multiplier (1 + r).",
        "Rearrange the formula to solve for P.",
        "Perform the calculation for P."
      ]
    }
  }
};