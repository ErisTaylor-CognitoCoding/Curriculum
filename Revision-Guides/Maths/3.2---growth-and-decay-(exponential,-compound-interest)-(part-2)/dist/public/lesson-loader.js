window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest) (Part 2)",
  "strapline": "Understanding how quantities grow and decay exponentially, and solving compound interest problems.",
  "learningObjectives": [
    "Students should be able to model situations involving repeated percentage changes using the formula for compound interest and exponential equations (Maths 3.2)",
    "Students should be able to interpret and construct exponential graphs, recognising the characteristic curves of growth and decay (Maths 3.2)",
    "Students should be able to solve problems involving finding the original amount or the number of time periods in compound interest scenarios (Maths 3.2)"
  ],
  "step1": {
    "title": "Concept 1: Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth occurs when a quantity increases by the same percentage repeatedly over equal time periods. This means the quantity multiplies by a growth multiplier greater than 1 each time, causing the growth to accelerate over time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a population of rabbits doubling every year. Each year the number of rabbits is multiplied by 2, so the population grows faster as time passes.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with 100 bacteria growing at 5% per hour.</span>",
        "<span>Growth multiplier = 1 + 5/100 = 1.05.</span>",
        "<span>After 3 hours, population = 100 × 1.05<sup>3</sup> (do not calculate yet).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay happens when a quantity decreases by the same percentage repeatedly over equal time periods. The decay multiplier is between 0 and 1, causing the quantity to become smaller over time at a decelerating rate.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about the cooling of a hot cup of tea losing 10% of its heat each minute. The temperature reduces by a factor less than 1 repeatedly, cooling down gradually.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with 200 grams of a radioactive substance decaying at 10% per hour.</span>",
        "<span>Decay multiplier = 1 - 10/100 = 0.90.</span>",
        "<span>After 4 hours, remaining mass = 200 × 0.90<sup>4</sup> (leave unevaluated).</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Growth/Decay Multiplier",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The multiplier tells us how much the quantity changes each time period. For growth, you add the percentage to 100% (e.g., 5% growth = 1.05). For decay, subtract the percentage from 100% (e.g., 10% decay = 0.90). It is the key factor in exponential equations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you earn 7% interest on your savings each year, your savings multiply by 1.07 every year.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate multiplier for 8% growth: 1 + 8/100 = 1.08.</span>",
        "<span>Calculate multiplier for 12% decay: 1 - 12/100 = 0.88.</span>"
      ]
    }
  },
  "step4": {
    "title": "Interpreting Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth graphs curve upwards, getting steeper over time, while exponential decay graphs curve downwards, flattening as they approach zero. Recognising these shapes helps understand the behaviour of the quantity.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at a graph where y = 2<sup>x</sup>. The curve rises sharply as x increases, showing growth.</span>",
        "<span>Look at a graph where y = 100 × 0.8<sup>x</sup>. The curve falls and flattens, showing decay.</span>"
      ]
    }
  },
  "step5": {
    "title": "Solving for the Original Amount",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Sometimes you know the amount after several periods and want to find the original amount before growth or decay. Use the compound interest/exponential formula and rearrange it to find the start value.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If the amount after 5 years with 3% growth is £115, find original amount P.</span>",
        "<span>Use formula: Amount = P × (1.03)<sup>5</sup>, so P = Amount ÷ (1.03)<sup>5</sup>.</span>"
      ]
    }
  },
  "step6": {
    "title": "Solving for the Number of Time Periods",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Sometimes you know the original amount and final amount but need to find how many periods it took to reach that amount. This involves solving exponential equations, often using logarithms.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>An investment grows from £1000 to £1500 at 4% per year. Find number of years t.</span>",
        "<span>Use 1500 = 1000 × (1.04)<sup>t</sup> rearranged to (1.04)<sup>t</sup> = 1.5.</span>",
        "<span>Take logs: t = log(1.5) ÷ log(1.04).</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of these is the correct growth multiplier for 7% growth per period?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>0.93</span>",
            "isCorrect": false,
            "explanation": "<span>0.93 represents decay, not growth.</span>"
          },
          {
            "id": "b",
            "label": "<span>1.07</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! 7% growth means multiplier = 1 + 0.07 = 1.07.</span>"
          },
          {
            "id": "c",
            "label": "<span>7</span>",
            "isCorrect": false,
            "explanation": "<span>7 is the percentage as a whole number, but multiplier must be close to 1.</span>"
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
        "sentence": "<span>Exponential <span class=\"font-semibold\">_____</span> occurs when a quantity decreases by the same percentage repeatedly.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "growth",
                "label": "growth",
                "isCorrect": false,
                "feedback": "<span>Incorrect, this means increasing quantity.</span>"
              },
              {
                "value": "decay",
                "label": "decay",
                "isCorrect": true,
                "feedback": "<span>Correct! Decay means the quantity decreases repeatedly.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The growth multiplier is always <span class=\"font-semibold\">_____</span> than 1.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "less",
                "label": "less",
                "isCorrect": false,
                "feedback": "<span>No, growth multiplier is more than 1.</span>"
              },
              {
                "value": "greater",
                "label": "greater",
                "isCorrect": true,
                "feedback": "<span>Correct! Growth multiplier > 1 for increasing quantities.</span>"
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
      "prompt": "<span>A sum of £2000 is invested at 5% compound interest per year. After how many years will the investment grow to £3000? Explain your method.</span>",
      "hint": "<span>Use the formula A = P × (1 + r)<sup>t</sup> and logarithms to solve for t.</span>",
      "mustHaveKeywords": ["compound interest", "growth multiplier", "logarithm", "rearrange formula"],
      "optionalKeywords": ["original amount", "final amount", "solve exponential equation"],
      "modelAnswer": "<span>Use the compound interest formula A = P × (1 + r)<sup>t</sup>, where A = 3000, P = 2000 and r = 5/100 = 0.05. Rewrite as 3000 = 2000 × 1.05<sup>t</sup>. Divide both sides by 2000 giving 1.5 = 1.05<sup>t</sup>. Take logarithms to get t × log(1.05) = log(1.5). Finally, solve for t: t = log(1.5) ÷ log(1.05).</span>",
      "scaffoldPrompts": [
        "<span>First, identify P, A, and r.</span>",
        "<span>Set up the exponential equation.</span>",
        "<span>Divide to isolate the power term.</span>",
        "<span>Use logarithms to solve for t.</span>"
      ]
    }
  }
};