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
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth occurs when a quantity increases by the same percentage in equal time intervals. This means we multiply the starting amount by a growth multiplier (a number greater than 1) repeatedly to find the amount after several periods.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a bank account that earns 5% interest every year, so each year your money grows by 5% on top of the previous amount.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with £100 and a growth rate of 5% per year.</span>",
        "<span>Growth multiplier = 1 + 0.05 = 1.05.</span>",
        "<span>After 1 year: £100 × 1.05 = £105.</span>",
        "<span>After 2 years: £105 × 1.05 = £110.25.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay happens when a quantity decreases by the same percentage over equal time periods. Here, we multiply the starting amount by a decay multiplier (a number between 0 and 1) repeatedly to find the amount remaining after several periods.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a radioactive substance that loses 10% of its mass every hour. Each hour, the remaining amount is 90% of what it was the hour before.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with 200g of a substance that decays by 10% each hour.</span>",
        "<span>Decay multiplier = 1 - 0.10 = 0.90.</span>",
        "<span>After 1 hour: 200g × 0.90 = 180g.</span>",
        "<span>After 2 hours: 180g × 0.90 = 162g.</span>"
      ]
    }
  },
  "step3": {
    "title": "Key Terminology: Growth and Decay Multipliers",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> multiplier is the number you multiply by to increase a quantity by a percentage.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "growth",
                "label": "Growth",
                "isCorrect": true,
                "feedback": "Correct! The growth multiplier is used to calculate increases."
              },
              {
                "value": "decay",
                "label": "Decay",
                "isCorrect": false,
                "feedback": "Try again. Decay multiplier is for decreases, not increases."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>A decay multiplier is always a number between <span class=\"font-semibold\">_____</span> and <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "0 and 1",
                "label": "0 and 1",
                "isCorrect": true,
                "feedback": "Correct! Decay multipliers lie between 0 and 1."
              },
              {
                "value": "1 and 2",
                "label": "1 and 2",
                "isCorrect": false,
                "feedback": "Incorrect, these values relate to growth multipliers."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Using the Compound Interest Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The compound interest formula models exponential growth in contexts like investments: <em>A = P(1 + r)<sup>n</sup></em>, where <strong>A</strong> is the final amount, <strong>P</strong> is the principal (starting amount), <strong>r</strong> is the interest rate as a decimal, and <strong>n</strong> is the number of time periods.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Invest £1000 at 4% interest compounded annually for 3 years.</span>",
        "<span>Calculate A = 1000 × (1 + 0.04)<sup>3</sup>.</span>",
        "<span>Calculate (1.04)<sup>3</sup> = 1.124864.</span>",
        "<span>Final amount A = £1000 × 1.124864 = £1124.86 (approx).</span>"
      ]
    }
  },
  "step5": {
    "title": "Recognising Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth graphs curve upwards, getting steeper over time, while exponential decay graphs curve downwards, approaching zero but never quite reaching it.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Growth graphs look like a rapid climb up a hill, while decay graphs resemble a slow descent towards a flat surface.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at a graph showing population increasing from 100 to 200, 400, then 800 over equal time intervals. This is exponential growth due to doubling.</span>",
        "<span>A graph showing a substance reducing from 500 units to 250, then about 125, illustrates exponential decay with a 50% decrease each period.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A population of animals grows by 8% each year. The initial population is 500 animals.</span><br><span>Calculate the population after 5 years using the compound interest formula, and describe the shape of the population growth graph.</span>",
      "hint": "Remember: Use the formula A = P(1 + r)<sup>n</sup> and identify if the graph curves upwards or downwards.",
      "mustHaveKeywords": ["compound interest formula", "growth multiplier", "exponential growth", "curve upwards"],
      "optionalKeywords": ["population", "percentage increase"],
      "modelAnswer": "<span>Using the compound interest formula: A = 500 × (1 + 0.08)<sup>5</sup>. <br>Calculate (1.08)<sup>5</sup> ≈ 1.469. <br>Final population: 500 × 1.469 = 734.5 ≈ 735 animals.<br>The graph of this population growth is exponential, curving upwards and becoming steeper over time, indicating rapid growth.</span>",
      "scaffoldPrompts": [
        "Identify the initial population and growth rate.",
        "Calculate the growth multiplier (1 + 0.08).",
        "Use the compound interest formula to find the amount after 5 years.",
        "Describe how the population graph behaves over time."
      ]
    }
  }
};