window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest) (Part 1)",
  "strapline": "Understanding exponential growth and decay, calculating final amounts through multipliers, and interpreting related graphs.",
  "learningObjectives": [
    "Students should be able to calculate final amounts after repeated percentage changes using growth and decay multipliers (Maths 3.2)",
    "Students should be able to use the compound interest formula to model exponential growth in real-world contexts such as investments and population growth (Maths 3.2)",
    "Students should be able to recognise and interpret exponential graphs showing characteristic curves of growth and decay (Maths 3.2)"
  ],
  "keyFormulas": [
    "Growth formula: Final Amount = Initial Amount × (growth multiplier)ⁿ",
    "Decay formula: Final Amount = Initial Amount × (decay multiplier)ⁿ",
    "Compound Interest Formula: A = P(1 + r)^n"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#e8f0fe' stroke='#333' /><text x='200' y='30' font-family='sans-serif' font-weight='bold' font-size='14' text-anchor='middle'>Exponential Growth and Decay Curves</text><polyline points='60,250 100,200 140,160 180,120 220,90 260,70 300,55' fill='none' stroke='#2a9d8f' stroke-width='3'/><text x='310' y='60' font-family='sans-serif' font-size='12' fill='#2a9d8f'>Growth</text><polyline points='60,150 100,180 140,200 180,215 220,225 260,230 300,235' fill='none' stroke='#e76f51' stroke-width='3'/><text x='310' y='230' font-family='sans-serif' font-size='12' fill='#e76f51'>Decay</text><line x1='50' y1='260' x2='350' y2='260' stroke='#333' stroke-width='1' /><text x='355' y='265' font-family='sans-serif' font-size='10'>Time</text><line x1='50' y1='260' x2='50' y2='40' stroke='#333' stroke-width='1' /><text x='20' y='40' font-family='sans-serif' font-size='10'>Amount</text></svg>",
  "step1": {
    "title": "Concept: Understanding Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth happens when a quantity increases by the <em>same percentage</em> over equal intervals of time. This leads to the quantity being repeatedly multiplied by a number greater than 1, called the <strong>growth multiplier</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a snowball rolling down a hill that grows bigger as it rolls. The more it picks up, the faster it grows – similar to how exponential growth accelerates over time.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>The population of a town grows by 5% every year.</span>",
        "<span>Growth multiplier = 1 + 0.05 = 1.05</span>",
        "<span>After 3 years, calculate the population multiplier: 1.05³ = 1.157625</span>",
        "<span>If the initial population is 10,000, final population = 10,000 × 1.157625 = 11,576.25</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay occurs when a quantity decreases by the <em>same percentage</em> over equal intervals. Here, the quantity is multiplied repeatedly by a number between 0 and 1 called the <strong>decay multiplier</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a leaking bucket where water decreases by the same fraction every hour, meaning the amount left gets smaller and smaller but never quite reaches zero.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A radioactive substance decays by 10% every hour.</span>",
        "<span>Decay multiplier = 1 - 0.10 = 0.90</span>",
        "<span>After 4 hours, amount multiplier = 0.90⁴ = 0.6561</span>",
        "<span>If the initial amount is 500 grams, remaining amount = 500 × 0.6561 = 328.05 grams</span>"
      ]
    }
  },
  "step3": {
    "title": "Key Terminology: Growth and Decay Multipliers",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____ multiplier</span> is used when a quantity increases by a percentage.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "growth", "label": "Growth", "isCorrect": true, "feedback": "Correct! The growth multiplier is used for increases."},
              {"value": "decay", "label": "Decay", "isCorrect": false, "feedback": "Incorrect. Decay multiplier is for decreases."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The growth multiplier for a 7% increase is <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "1.07", "label": "1.07", "isCorrect": true, "feedback": "Correct! Add 1 to the decimal increase."},
              {"value": "0.93", "label": "0.93", "isCorrect": false, "feedback": "Incorrect. 0.93 would be a decay multiplier."}
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span>The decay multiplier for a 15% decrease is <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {"value": "0.85", "label": "0.85", "isCorrect": true, "feedback": "Correct! Subtract 0.15 from 1."},
              {"value": "1.15", "label": "1.15", "isCorrect": false, "feedback": "Incorrect. That number is for growth, not decay."}
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Using the Compound Interest Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The compound interest formula models exponential growth in finance and other contexts: <strong>A = P(1 + r)^n</strong>, where <em>P</em> is the initial amount, <em>r</em> is the interest rate per period (as a decimal), and <em>n</em> is the number of periods.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>An investment of £1000 grows at 3% interest compounded annually.</span>",
        "<span>Here, P = 1000, r = 0.03, n = 5 years.</span>",
        "<span>Final amount A = 1000 × (1 + 0.03)^5</span>",
        "<span>Calculate (1.03)^5 = approximately 1.159274</span>",
        "<span>So, A ≈ 1000 × 1.159274 = £1159.27</span>"
      ]
    }
  },
  "step5": {
    "title": "Interpreting Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth graphs show curves that rise steeply and get steeper over time. Exponential decay graphs approach zero but never cross it, showing a decreasing curve.</p>",
    "workedExample": {
      "title": "Observation Example",
      "bullets": [
        "<span>Look at a graph where y = 2^x; the curve starts slowly and then rises faster and faster.</span>",
        "<span>For decay, y = (1/2)^x starts high and falls quickly, but never reaches zero.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>An initial population of 5000 bacteria increases by 8% each hour. Calculate the population after 6 hours. Explain the steps you use, including how you find the growth multiplier and apply the formula.</span>",
      "hint": "Remember to convert the percentage increase to a decimal multiplier before raising it to the power of the number of hours.",
      "mustHaveKeywords": ["growth multiplier", "exponent", "initial amount", "formula", "multiplication"],
      "optionalKeywords": ["percentage increase", "compound growth"],
      "modelAnswer": "<span>First, convert 8% to decimal form: 0.08. The growth multiplier is 1 + 0.08 = 1.08. The formula to use is Final Amount = Initial Amount × (growth multiplier)^time. Substitute the values: 5000 × 1.08⁶. Calculate 1.08⁶ ≈ 1.5869. Multiply 5000 × 1.5869 = approximately 7934.5. So, after 6 hours, the population is about 7935 bacteria.</span>",
      "scaffoldPrompts": [
        "What is the percentage increase as a decimal?",
        "How do you find the growth multiplier?",
        "How many times do you multiply the initial amount by the growth multiplier?",
        "Write down the compound growth formula with the values substituted.",
        "Calculate the power and then the final amount."
      ]
    }
  }
};