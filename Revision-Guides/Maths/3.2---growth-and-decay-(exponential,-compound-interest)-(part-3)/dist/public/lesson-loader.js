window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest) (Part 3)",
  "strapline": "Understanding and applying exponential growth and decay through compound interest and exponential equations.",
  "learningObjectives": [
    "Students should be able to model situations involving repeated percentage changes using the formula for compound interest and exponential equations (Maths 3.2)",
    "Students should be able to interpret and construct exponential graphs, recognising the characteristic curves of growth and decay (Maths 3.2)",
    "Students should be able to solve problems involving finding the original amount or the number of time periods in compound interest scenarios (Maths 3.2)"
  ],
  "step1": {
    "title": "Concept: Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth occurs when a quantity increases by a fixed percentage repeatedly over time. This is modelled mathematically by multiplying the current amount by a growth multiplier greater than 1 at each time step. For example, a 5% growth rate means multiplying by 1.05 each period.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a tree that grows 5% taller every year. Each year it grows not just the original height but also the previous year's growth, leading to faster and faster increases.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with £100 in a savings account with 5% annual interest.</span>",
        "<span>After 1 year: £100 × 1.05 = £105.</span>",
        "<span>After 2 years: £105 × 1.05 = £110.25.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay happens when a quantity decreases by a fixed percentage repeatedly over time. It is modelled by multiplying by a decay multiplier between 0 and 1. For instance, a 5% decay rate means multiplying by 0.95 each period.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the amount of radioactive material that decreases by 5% every hour. It loses a fixed percentage each time, becoming less and less.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A radioactive sample weighs 200g and decays 5% per hour.</span>",
        "<span>After 1 hour: 200 × 0.95 = 190g.</span>",
        "<span>After 2 hours: 190 × 0.95 = 180.5g.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Growth and Decay Multiplier",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The multiplier used in repeated percentage changes depends on the rate r%:</p><ul><li>For growth: multiplier = 1 + (r / 100)</li><li>For decay: multiplier = 1 - (r / 100)</li></ul>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate the multiplier for 8% growth: 1 + 8/100 = 1.08.</span>",
        "<span>Calculate the multiplier for 12% decay: 1 - 12/100 = 0.88.</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying the Compound Interest Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The compound interest formula is <em>A = P × m^n</em>, where <em>A</em> is the amount after <em>n</em> periods, <em>P</em> is the original principal, and <em>m</em> is the growth multiplier.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate the amount after 3 years on £500 at 4% interest.</span>",
        "<span>Growth multiplier m = 1 + 4/100 = 1.04</span>",
        "<span>Amount A = 500 × 1.04^3 = 500 × 1.124864 ≈ £562.43</span>"
      ]
    }
  },
  "step5": {
    "title": "Interpreting and Constructing Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth graphs curve upwards, becoming steeper over time. Exponential decay graphs curve downwards, flattening as time increases. Recognising these shapes helps in interpreting real-life scenarios and predictions.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Sketch a graph of y = 100 × 1.1^x to show growth.</span>",
        "<span>Sketch y = 100 × 0.9^x to show decay.</span>",
        "<span>Note how the growth curve rises quickly, while the decay curve drops towards zero but never reaches it.</span>"
      ]
    }
  },
  "step6": {
    "title": "Solving Problems for Original Amount or Time Periods",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When given the final amount and growth multiplier, you can solve for the original amount or number of periods by rearranging the compound interest formula: <em>P = A / m^n</em> or <em>n = log(A / P) / log(m)</em>.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the original amount if £121.55 is after 3 years at 6% interest.</span>",
        "<span>Multiplier m = 1.06, Amount A = 121.55, periods n = 3.</span>",
        "<span>P = 121.55 ÷ 1.06^3 ≈ 121.55 ÷ 1.191016 = £102.10</span>",
        "<span>Find how many years for £800 to become £1000 at 5% growth.</span>",
        "<span>n = log(1000 / 800) ÷ log(1.05) ≈ log(1.25) ÷ log(1.05) ≈ 4.52 years</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If a quantity decreases by 8% each period, what is the decay multiplier?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>0.92</span>",
            "isCorrect": true,
            "explanation": "<span>Correct, decay multiplier = 1 - 8/100 = 0.92.</span>"
          },
          {
            "id": "b",
            "label": "<span>1.08</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect, 1.08 is a growth multiplier, not decay.</span>"
          },
          {
            "id": "c",
            "label": "<span>0.08</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect, 0.08 is the decimal form of 8%, not the multiplier.</span>"
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
        "sentence": "<span>The value used to multiply repeatedly in exponential growth is called the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "growth_multiplier",
                "label": "growth multiplier",
                "isCorrect": true,
                "feedback": "<span>Correct! It is the growth multiplier.</span>"
              },
              {
                "value": "decay_multiplier",
                "label": "decay multiplier",
                "isCorrect": false,
                "feedback": "<span>Incorrect, decay multiplier relates to decrease.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>In compound interest, the formula to find the final amount is <em>A = P × m<sup>n</sup></em>, where <em>n</em> stands for the number of <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "time_periods",
                "label": "time periods",
                "isCorrect": true,
                "feedback": "<span>Correct, n represents the number of time periods.</span>"
              },
              {
                "value": "interest_rate",
                "label": "interest rate",
                "isCorrect": false,
                "feedback": "<span>Incorrect, the interest rate is used to find m.</span>"
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
      "prompt": "<span>A sum of money is invested at compound interest, growing by 7% each year. After 4 years, the investment is worth £1262.48. Calculate the original amount invested.</span>",
      "hint": "<span>Use the formula <em>A = P × m<sup>n</sup></em> and rearrange to find <em>P</em>.</span>",
      "mustHaveKeywords": ["compound interest", "growth multiplier", "rearrange formula", "original amount", "7%", "4 years"],
      "optionalKeywords": ["exponential growth", "calculation steps", "use of powers"],
      "modelAnswer": "<span>Let P be the original amount. The growth multiplier m = 1 + 7/100 = 1.07. The amount after 4 years is A = 1262.48. Using the compound interest formula: 1262.48 = P × 1.07<sup>4</sup>. Calculate 1.07<sup>4</sup> = 1.310796. Rearranging gives P = 1262.48 ÷ 1.310796 ≈ £963.00. Therefore, the original amount invested was approximately £963.00.</span>",
      "scaffoldPrompts": [
        "<span>Identify the growth multiplier based on the percentage increase.</span>",
        "<span>Substitute values into the compound interest formula.</span>",
        "<span>Rearrange the formula to isolate the original amount P.</span>"
      ]
    }
  }
};