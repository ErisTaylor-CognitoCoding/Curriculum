window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest) (Part 3)",
  "strapline": "Understanding and applying exponential growth and decay formulas including compound interest problems",
  "learningObjectives": [
    "Students should be able to model situations involving repeated percentage changes using the formula for compound interest and exponential equations (Maths 3.2)",
    "Students should be able to interpret and construct exponential graphs, recognising the characteristic curves of growth and decay (Maths 3.2)",
    "Students should be able to solve problems involving finding the original amount or the number of time periods in compound interest scenarios (Maths 3.2)"
  ],
  "step1": {
    "title": "Concept: Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth describes a situation where a quantity increases by a fixed percentage repeatedly over time. It is modelled by multiplying the initial amount by a growth multiplier greater than 1. For example, if the growth rate is 5%, the multiplier is 1.05, so each step increases the quantity by 5% of the previous amount.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a savings account where interest is added each year. If you start with £100 and it grows by 5% every year, next year you will have £105, then £110.25, and so on — growing faster each year because interest is earned on the interest.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with £200 in a bank account.</span>",
        "<span>It earns 3% interest each year.</span>",
        "<span>Calculate the amount after 2 years using the multiplier 1.03.</span>",
        "<span>After 1 year: 200 × 1.03 = £206</span>",
        "<span>After 2 years: 206 × 1.03 = £212.18</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay describes a situation where a quantity decreases by a fixed percentage repeatedly over time. It is modelled by multiplying the initial amount by a decay multiplier between 0 and 1. For example, if the decay rate is 5%, the multiplier is 0.95, so each step reduces the quantity by 5% of the previous amount.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Consider a radioactive substance that loses 5% of its mass every hour. If you start with 100 grams, after one hour you'll have 95 grams, then 90.25 grams after two hours, and so on — shrinking over time by a fixed percentage.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A bottle contains 500 ml of a chemical that evaporates at 8% per day.</span>",
        "<span>Calculate the amount remaining after 3 days using multiplier 0.92.</span>",
        "<span>Day 1: 500 × 0.92 = 460 ml</span>",
        "<span>Day 2: 460 × 0.92 = 423.2 ml</span>",
        "<span>Day 3: 423.2 × 0.92 = 389.34 ml</span>"
      ]
    }
  },
  "step3": {
    "title": "Knowledge Check: Growth/Decay Multipliers",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the correct multiplier for 7% growth?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>1.07</span>",
            "isCorrect": true,
            "explanation": "Correct, because the multiplier for r% growth is 1 + r/100 = 1 + 7/100 = 1.07."
          },
          {
            "id": "b",
            "label": "<span>0.93</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 0.93 is used for 7% decay, not growth."
          },
          {
            "id": "c",
            "label": "<span>7</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Multipliers are decimals not whole numbers like 7."
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Constructing Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth graphs curve upwards, starting slow and increasing rapidly. Exponential decay graphs curve downwards, decreasing quickly at first and then leveling off but never reaching zero.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like the shape of a bank balance growing with compound interest (growth), or the amount of a substance decaying with time (decay), their graphs reflect how the quantity changes continuously.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot points for y = 100 × (1.05)<sup>x</sup>, with x = 0, 1, 2, 3.</span>",
        "<span>x=0, y=100 × 1 = 100</span>",
        "<span>x=1, y=100 × 1.05 = 105</span>",
        "<span>x=2, y=100 × 1.1025 = 110.25</span>",
        "<span>x=3, y=100 × 1.157625 = 115.76</span>"
      ]
    }
  },
  "step5": {
    "title": "Solving for Original Amount in Compound Interest",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Sometimes, you know the final amount after interest but need to find the original amount. Use the compound interest formula <em>A = P × (1 + r/100)<sup>n</sup></em> and rearrange to solve for <em>P</em> by dividing both sides by the growth multiplier raised to <em>n</em>.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Final amount A = £1200 after 3 years at 4% interest.</span>",
        "<span>Growth multiplier = 1.04</span>",
        "<span>Use: P = A ÷ (1.04)<sup>3</sup></span>",
        "<span>Calculate (1.04)<sup>3</sup> = 1.124864</span>",
        "<span>P = 1200 ÷ 1.124864 ≈ £1066.80 (original amount)</span>"
      ]
    }
  },
  "step6": {
    "title": "Solving for Number of Time Periods in Compound Interest",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If the initial amount and final amount are known, but the number of periods is unknown, rearrange the formula <em>A = P × (1 + r/100)<sup>n</sup></em> to find <em>n</em> by taking logarithms: <em>n = log(A/P) ÷ log(1 + r/100)</em>.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Starting with £500, the amount grows to £620 at 5% compound interest.</span>",
        "<span>Calculate n using n = log(620/500) ÷ log(1.05)</span>",
        "<span>Calculate 620/500 = 1.24</span>",
        "<span>log(1.24) ≈ 0.0934, log(1.05) ≈ 0.0212</span>",
        "<span>n ≈ 0.0934 ÷ 0.0212 ≈ 4.40 years</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The multiplier for <span class=\"font-semibold\">_____</span> is always greater than 1.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "growth",
                "label": "growth",
                "isCorrect": true,
                "feedback": "Correct! Growth multipliers are greater than 1."
              },
              {
                "value": "decay",
                "label": "decay",
                "isCorrect": false,
                "feedback": "Try again. Decay multipliers are between 0 and 1."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The formula to find the original amount from the final amount is <em>P = _____</em>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "A ÷ (1 + r/100)^n",
                "label": "A ÷ (1 + r/100)<sup>n</sup>",
                "isCorrect": true,
                "feedback": "Correct! You divide by the multiplier raised to the number of periods."
              },
              {
                "value": "A × (1 + r/100)^n",
                "label": "A × (1 + r/100)<sup>n</sup>",
                "isCorrect": false,
                "feedback": "Incorrect. That calculates the final amount, not the original."
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
      "prompt": "<span>A sum of money is invested at a compound interest rate of 6% per year. After 5 years, the investment has grown to £1340.</span><br><span>Calculate the original amount invested.</span>",
      "hint": "Remember to use the compound interest formula and rearrange to find the original amount.",
      "mustHaveKeywords": ["compound interest", "growth multiplier", "rearrange formula", "original amount", "division", "exponent"],
      "optionalKeywords": ["logarithm", "calculator", "rounding"],
      "modelAnswer": "<span>Using A = P × (1 + r/100)<sup>n</sup>, we have 1340 = P × (1.06)<sup>5</sup>.<br>Calculate (1.06)<sup>5</sup> ≈ 1.338.<br>Rearranging: P = 1340 ÷ 1.338 ≈ £1001.50.<br>The original amount invested was approximately £1001.50.</span>",
      "scaffoldPrompts": [
        "Identify the values of A, r, and n.",
        "Calculate the growth multiplier (1 + r/100) raised to n.",
        "Rearrange the formula to solve for P.",
        "Divide the final amount by the calculated multiplier."
      ]
    }
  }
};