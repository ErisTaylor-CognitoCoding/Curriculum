window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest) (Part 1)",
  "strapline": "Understanding exponential growth and decay using multipliers and compound interest",
  "learningObjectives": [
    "Students should be able to calculate final amounts after repeated percentage changes using growth and decay multipliers (Maths 3.2)",
    "Students should be able to use the compound interest formula to model exponential growth in real-world contexts such as investments and population growth (Maths 3.2)",
    "Students should be able to recognise and interpret exponential graphs showing characteristic curves of growth and decay (Maths 3.2)"
  ],
  "step1": {
    "title": "Concept: Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth happens when a quantity increases by the same percentage over equal time periods. This means the amount is multiplied by the same growth multiplier each time, which is greater than 1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine your savings grow by 5% every year. Each year, your money doesn’t just add 5% of the original amount, but 5% of the new total, so your money grows faster over time.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>The amount increases by 5% each year, so the growth multiplier is 1 + 0.05 = 1.05.</span>",
        "<span>After 3 years, multiply the initial amount by 1.05 three times: Final amount = Initial × 1.05 × 1.05 × 1.05 = Initial × 1.05<sup>3</sup>.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the growth multiplier for an increase of 8%?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>1.08</span>",
            "isCorrect": true,
            "explanation": "Correct! The multiplier is 1 + 0.08 = 1.08."
          },
          {
            "id": "b",
            "label": "<span>0.92</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 0.92 would be a decay multiplier, representing a decrease of 8%."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> multiplier is used when a quantity decreases by a percentage.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "growth",
                "label": "growth",
                "isCorrect": false,
                "feedback": "No, growth multipliers are used for increases."
              },
              {
                "value": "decay",
                "label": "decay",
                "isCorrect": true,
                "feedback": "Correct! Decay multipliers are between 0 and 1."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay describes when a quantity decreases by the same percentage over equal time periods. This is done by repeatedly multiplying by a decay multiplier, which is a number between 0 and 1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a radioactive substance losing 10% of its mass every hour. Each hour, the remaining mass is multiplied by 0.90 (which is 1 - 0.10).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>The substance loses 10% each hour, so decay multiplier is 0.90.</span>",
        "<span>After 4 hours, multiply the initial amount by 0.90 four times: Final amount = Initial × 0.90<sup>4</sup>.</span>"
      ]
    }
  },
  "step5": {
    "title": "Using the Compound Interest Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The compound interest formula A = P(1 + r)<sup>n</sup> models exponential growth where <em>P</em> is the initial amount, <em>r</em> is the interest rate per period as a decimal, and <em>n</em> is the number of periods.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you invest £1000 at 3% interest compounded annually, after 5 years your investment grows according to the compound interest formula.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>P = £1000, r = 0.03, n = 5.</span>",
        "<span>Calculate A = 1000 × (1 + 0.03)<sup>5</sup> = 1000 × 1.159274 = £1159.27.</span>"
      ]
    }
  },
  "step6": {
    "title": "Recognising and Interpreting Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth graphs curve upwards, becoming steeper with time, while exponential decay graphs slope downwards, flattening as time passes. Both show smooth curves that never touch zero (for decay) or infinity instantly (for growth).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Population increasing rapidly looks like an upward curve, while the amount of a decaying substance looks like a curve decreasing and leveling off but never reaching zero exactly.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A graph showing a curve rising from 100 to 200 to 400 over equal time steps indicates exponential growth.</span>",
        "<span>A graph showing a curve dropping from 1000 to 700 to about 490 over equal time steps indicates exponential decay.</span>"
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bacteria culture starts with 500 bacteria and grows at 12% per hour. Calculate the number of bacteria after 6 hours. Show your working and explain how exponential growth applies here.</span>",
      "hint": "Remember to use the growth multiplier and the compound interest formula A = P(1 + r)<sup>n</sup>. Identify P, r, and n correctly.",
      "mustHaveKeywords": ["growth multiplier", "compound interest formula", "percentage increase", "exponential growth"],
      "optionalKeywords": ["population growth", "repeated multiplication"],
      "modelAnswer": "<span>Initial amount P = 500. Growth rate r = 0.12. Number of periods n = 6 hours. Growth multiplier = 1 + 0.12 = 1.12. Use formula: A = 500 × 1.12<sup>6</sup>. Calculate 1.12 raised to 6 ≈ 1.9738. Final amount ≈ 500 × 1.9738 = 986.9, so approximately 987 bacteria. This shows exponential growth because the bacteria increase by a constant percentage each hour, resulting in repeated multiplication by the growth multiplier.</span>",
      "scaffoldPrompts": [
        "Identify initial quantity, growth rate, and number of periods.",
        "Calculate the growth multiplier from the percentage growth.",
        "Apply the compound interest formula with your values.",
        "Calculate the power and multiply by the initial amount.",
        "Interpret what the result means in context."
      ]
    }
  }
};