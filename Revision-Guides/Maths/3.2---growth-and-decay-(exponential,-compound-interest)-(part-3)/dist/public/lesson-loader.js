window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest) (Part 3)",
  "strapline": "Understanding and solving problems involving repeated percentage changes using exponential models and compound interest.",
  "learningObjectives": [
    "Students should be able to model situations involving repeated percentage changes using the formula for compound interest and exponential equations (Maths 3.2)",
    "Students should be able to interpret and construct exponential graphs, recognising the characteristic curves of growth and decay (Maths 3.2)",
    "Students should be able to solve problems involving finding the original amount or the number of time periods in compound interest scenarios (Maths 3.2)"
  ],
  "keyFormulas": [
    "Amount after n periods = Initial Amount × (Growth/Decay Multiplier)<sup>n</sup>",
    "Growth Multiplier = 1 + r/100 where r is the percentage growth rate",
    "Decay Multiplier = 1 - r/100 where r is the percentage decay rate"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9fafb' stroke='#444' /><path d='M60 260 Q140 120 220 70 Q300 20 360 40' stroke='#2196f3' stroke-width='3' fill='none' /> <text x='50' y='280' font-family='sans-serif' font-size='14' fill='#333'>Exponential Growth Curve</text> <path d='M60 60 Q140 180 220 210 Q300 240 360 220' stroke='#e53935' stroke-width='3' fill='none' /> <text x='50' y='50' font-family='sans-serif' font-size='14' fill='#333'>Exponential Decay Curve</text></svg>",
  "step1": {
    "title": "Concept: Understanding Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth describes a situation where a quantity increases by a fixed <em>percentage</em> repeatedly over equal time periods. It can be modelled using a growth multiplier, which is always greater than 1. For example, 5% growth means multiplying by 1.05 each period.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a savings account where interest is added yearly. Each year, you earn interest not only on your initial amount but on the total amount in the account, causing the money to grow faster over time.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with £100 and 5% yearly growth.</span>",
        "<span>After 1 year: 100 × 1.05 = £105</span>",
        "<span>After 2 years: 105 × 1.05 = £110.25</span>",
        "<span>Using exponential form: 100 × 1.05<sup>2</sup> = £110.25</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay happens when a quantity decreases by a fixed <em>percentage</em> repeatedly over time. The decay multiplier is a number between 0 and 1. For example, 5% decay means multiplying by 0.95 each period.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about a radioactive substance that loses a fixed fraction of its mass every hour. The amount left gets smaller and smaller, forming a decay curve.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with 200g of a substance losing 5% each hour.</span>",
        "<span>After 1 hour: 200 × 0.95 = 190g</span>",
        "<span>After 2 hours: 190 × 0.95 = 180.5g</span>",
        "<span>Or 200 × 0.95<sup>2</sup> = 180.5g</span>"
      ]
    }
  },
  "step3": {
    "title": "Growth and Decay Multipliers: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>For a growth rate of <strong>r%</strong>, the multiplier is <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "1+r/100",
                "label": "<span>1 + r/100</span>",
                "isCorrect": true,
                "feedback": "Correct! This is the growth multiplier."
              },
              {
                "value": "1-r/100",
                "label": "<span>1 - r/100</span>",
                "isCorrect": false,
                "feedback": "Incorrect. This formula applies to decay."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>For a decay rate of <strong>r%</strong>, the multiplier is <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "1-r/100",
                "label": "<span>1 - r/100</span>",
                "isCorrect": true,
                "feedback": "Correct! This is the decay multiplier."
              },
              {
                "value": "1+r/100",
                "label": "<span>1 + r/100</span>",
                "isCorrect": false,
                "feedback": "Incorrect. This is for growth."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Interpreting Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential graphs for growth curve upwards and get steeper as time increases. Decay graphs curve downwards and get closer to zero but never reach it. Recognising these shapes helps identify growth or decay situations.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A graph that rises slowly at first and then steeply upwards represents exponential growth.</span>",
        "<span>A graph that drops quickly at first and then flattens towards the horizontal axis shows exponential decay.</span>"
      ]
    }
  },
  "step5": {
    "title": "Solving for Original Amount in Compound Interest",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Sometimes you need to find the original amount given the final amount, growth rate, and periods. Use the formula rearranged: <strong>Original Amount = Final Amount ÷ (Multiplier<sup>n</sup>)</strong>.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Final amount = £121, rate = 10%, periods = 2 years.</span>",
        "<span>Multiplier = 1 + 10/100 = 1.1</span>",
        "<span>Original amount = 121 ÷ (1.1<sup>2</sup>) = 121 ÷ 1.21 = £100</span>"
      ]
    }
  },
  "step6": {
    "title": "Solving for Number of Time Periods",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When the original amount, final amount, and rate are known, but the number of periods is unknown, use logarithms to solve: <br> n = log(final/initial) ÷ log(multiplier).</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Initial: £100, final: £161.05, rate: 5% yearly</span>",
        "<span>Multiplier = 1.05</span>",
        "<span>n = log(161.05/100) ÷ log(1.05) = log(1.6105) ÷ log(1.05) ≈ 10</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which multiplier represents 8% decay?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>1.08</span>",
            "isCorrect": false,
            "explanation": "<span>1.08 represents growth, not decay.</span>"
          },
          {
            "id": "b",
            "label": "<span>0.92</span>",
            "isCorrect": true,
            "explanation": "<span>0.92 = 1 - 8/100, correct decay multiplier.</span>"
          },
          {
            "id": "c",
            "label": "<span>0.08</span>",
            "isCorrect": false,
            "explanation": "<span>0.08 is just the rate as decimal, not the multiplier.</span>"
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>An amount is invested at 6% compound interest per year. After 5 years, the investment grows to £1,191.02. Calculate the original amount invested.</span>",
      "hint": "Use the formula: Original Amount = Final Amount ÷ (Growth Multiplier<sup>n</sup>), where Growth Multiplier = 1 + r/100.",
      "mustHaveKeywords": ["compound interest", "growth multiplier", "divide", "5 years"],
      "optionalKeywords": ["exponential equation", "rearranging formula"],
      "modelAnswer": "<span>First, find the growth multiplier: 1 + 6/100 = 1.06.<br>Then calculate original amount = £1,191.02 ÷ (1.06<sup>5</sup>).<br>Calculate 1.06<sup>5</sup> ≈ 1.3382.<br>So original amount ≈ £1,191.02 ÷ 1.3382 ≈ £890.<br>Therefore, the original amount invested was approximately £890.</span>",
      "scaffoldPrompts": ["Identify the growth multiplier.", "Calculate multiplier raised to n (5).", "Divide the final amount by this value to find the original amount."]
    }
  }
};