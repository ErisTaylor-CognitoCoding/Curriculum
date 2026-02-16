window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest) (Part 3)",
  "strapline": "Understanding exponential growth and decay in real-world problems through modelling, graphs, and problem-solving using compound interest formulas.",
  "learningObjectives": [
    "Students should be able to model situations involving repeated percentage changes using the formula for compound interest and exponential equations (Maths 3.2)",
    "Students should be able to interpret and construct exponential graphs, recognising the characteristic curves of growth and decay (Maths 3.2)",
    "Students should be able to solve problems involving finding the original amount or the number of time periods in compound interest scenarios (Maths 3.2)"
  ],
  "keyFormulas": [
    "Amount after n periods: A = P × r^n where r is the growth/decay multiplier",
    "Growth multiplier: r = 1 + (percentage growth / 100)",
    "Decay multiplier: r = 1 - (percentage decay / 100)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='20' width='320' height='260' fill='#e8f0fe' stroke='#3778c2' stroke-width='2'/><text x='200' y='40' font-family='sans-serif' font-size='18' fill='#3778c2' text-anchor='middle'>Exponential Growth and Decay Curves</text><polyline fill='none' stroke='#28a745' stroke-width='3' points='60,260 110,210 150,170 200,120 255,75 300,45'/><text x='310' y='50' font-family='sans-serif' font-size='12' fill='#28a745'>Growth Curve (Multiplier > 1)</text><polyline fill='none' stroke='#dc3545' stroke-width='3' points='60,60 110,100 150,140 200,180 255,215 300,240'/><text x='310' y='240' font-family='sans-serif' font-size='12' fill='#dc3545'>Decay Curve (Multiplier < 1)</text><line x1='50' y1='260' x2='350' y2='260' stroke='#333' stroke-width='2'/><line x1='50' y1='260' x2='50' y2='20' stroke='#333' stroke-width='2'/><text x='355' y='265' font-family='sans-serif' font-size='12' fill='#333'>Time (n)</text><text x='25' y='20' font-family='sans-serif' font-size='12' fill='#333' transform='rotate(-90 25,20)'>Amount (A)</text></svg>",
  "step1": {
    "title": "Concept: Understanding Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth happens when a quantity increases by a fixed percentage repeatedly over time. This is modelled by multiplying the amount each period by a growth multiplier greater than 1. For example, a 5% growth each year means multiplying by 1.05 yearly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a plant that grows by 5% taller every week. Each week, the plant is 1.05 times its previous height.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Growth After One Period",
      "problem": "You have £100 that grows by 5% after one year. Calculate the amount after one year.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the growth multiplier for 5% growth?",
          "answer": "1.05",
          "feedback": "Correct. 1 + 5/100 = 1.05"
        },
        {
          "id": "q2",
          "prompt": "Multiply £100 by the growth multiplier. What is the new amount?",
          "answer": "105",
          "feedback": "Correct. £100 × 1.05 = £105"
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay occurs when a quantity decreases by a fixed percentage repeatedly. This is modelled by a decay multiplier between 0 and 1. For example, a 5% decay each year means multiplying by 0.95 yearly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a radioactive substance that loses 5% of its remaining mass each year—only 95% remains each year.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Decay After One Period",
      "problem": "You have 200g of a substance that decays by 5% after one year. Calculate the remaining amount after one year.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the decay multiplier for 5% decay?",
          "answer": "0.95",
          "feedback": "Correct. 1 - 5/100 = 0.95"
        },
        {
          "id": "q2",
          "prompt": "Multiply 200g by the decay multiplier. What is the remaining amount?",
          "answer": "190",
          "feedback": "Correct. 200g × 0.95 = 190g"
        }
      ]
    }
  },
  "step3": {
    "title": "Identifying the Growth/Decay Multiplier",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The growth or decay multiplier is key to solving exponential problems. For <strong>r%</strong> growth, multiplier = 1 + r/100. For <strong>r%</strong> decay, multiplier = 1 - r/100.</p>",
    "keyTerminology": {
      "title": "Fill in the Blanks",
      "cloze": [
        {
          "id": "cloze-1",
          "sentence": "The growth multiplier for a 10% increase is <span class=\"font-semibold\">_____</span>.",
          "blanks": [
            {
              "id": "b1",
              "options": [
                {"value": "1.1", "label": "1.1", "isCorrect": true, "feedback": "Correct! 1 + 10/100 is 1.1."},
                {"value": "0.9", "label": "0.9", "isCorrect": false, "feedback": "Try again. 0.9 is a decay multiplier."}
              ]
            }
          ]
        },
        {
          "id": "cloze-2",
          "sentence": "The decay multiplier for a 6% decrease is <span class=\"font-semibold\">_____</span>.",
          "blanks": [
            {
              "id": "b2",
              "options": [
                {"value": "0.94", "label": "0.94", "isCorrect": true, "feedback": "Correct! 1 - 6/100 = 0.94."},
                {"value": "1.06", "label": "1.06", "isCorrect": false, "feedback": "Try again. 1.06 is a growth multiplier."}
              ]
            }
          ]
        }
      ]
    }
  },
  "step4": {
    "title": "Modelling Repeated Percentage Change Using the Compound Interest Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To model repeated percentage changes over multiple periods, use the formula <strong>A = P × rⁿ</strong>, where P is the original amount, r is the growth/decay multiplier, and n is the number of time periods.</p>",
    "workedExample": {
      "title": "Worked Example: Multi-Period Growth",
      "problem": "A savings account holds £500, growing by 4% annually for 3 years. Calculate the amount after 3 years.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the growth multiplier for 4% growth?",
          "answer": "1.04",
          "feedback": "Correct, 1 + 4/100 = 1.04"
        },
        {
          "id": "q2",
          "prompt": "What is the number of periods n?",
          "answer": "3",
          "feedback": "Correct, because the growth is over 3 years."
        },
        {
          "id": "q3",
          "prompt": "Calculate 500 × (1.04)³. Type the intermediate value of (1.04)³ rounded to 4 decimal places.",
          "answer": "1.1249",
          "feedback": "Correct. (1.04)³ ≈ 1.1249"
        },
        {
          "id": "q4",
          "prompt": "Now calculate the final amount by multiplying £500 by 1.1249.",
          "answer": "562.45",
          "feedback": "Correct. £500 × 1.1249 ≈ £562.45"
        }
      ]
    }
  },
  "step5": {
    "title": "Interpreting and Constructing Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth graphs curve upwards getting steeper, while decay graphs curve downwards getting flatter. The shape reflects repeated multiplication by a multiplier &gt;1 for growth, or between 0 and 1 for decay.</p>",
    "workedExample": {
      "title": "Worked Example: Recognising Graph Shapes",
      "problem": "Given graphs showing changes in amount over time, identify if they represent growth or decay.",
      "questions": [
        {
          "id": "q1",
          "prompt": "A graph showing an increasing curve that steepens over time is likely to be?",
          "answer": "growth",
          "feedback": "Correct. A steepening curve indicates exponential growth."
        },
        {
          "id": "q2",
          "prompt": "A graph showing a decreasing curve flattening over time represents?",
          "answer": "decay",
          "feedback": "Correct. Flattening while decreasing indicates exponential decay."
        }
      ]
    }
  },
  "step6": {
    "title": "Solving Problems: Finding Original Amount or Number of Periods",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can rearrange the compound interest formula to find unknown values such as the original amount P or number of time periods n when given other information.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Number of Periods",
      "problem": "You invest £800 at 3% compound interest. After some years, the amount grows to £930. Find how many years (n) this took.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the growth multiplier?",
          "answer": "1.03",
          "feedback": "Correct: 1 + 3/100 = 1.03"
        },
        {
          "id": "q2",
          "prompt": "Write the equation 930 = 800 × 1.03ⁿ. Divide both sides by 800 to isolate the exponential term. What is 930 ÷ 800?",
          "answer": "1.1625",
          "feedback": "Correct. 930 ÷ 800 = 1.1625"
        },
        {
          "id": "q3",
          "prompt": "Solve for n: 1.03ⁿ = 1.1625. What operation do you need to apply?",
          "answer": "logarithm",
          "feedback": "Correct. Use logarithms to solve for n."
        },
        {
          "id": "q4",
          "prompt": "Calculate n = log(1.1625) ÷ log(1.03). Provide your answer rounded to 2 decimal places.",
          "answer": "5.18",
          "feedback": "Correct. n ≈ 5.18 years"
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A population of bacteria decreases by 12% every hour. Starting with 5000 bacteria, calculate how many bacteria remain after 7 hours.</span>",
      "hint": "Use the decay multiplier formula r = 1 - (percentage decay / 100) and apply A = P × rⁿ with n = 7.",
      "mustHaveKeywords": ["decay multiplier", "compound interest formula", "exponential decay", "power"],
      "optionalKeywords": ["logarithm", "rounding", "percentage"],
      "modelAnswer": "<span>First calculate the decay multiplier: 1 - 12/100 = 0.88.<br/>Then compute the amount after 7 hours using A = 5000 × 0.88⁷.<br/>Calculate 0.88⁷ ≈ 0.422; then multiply 5000 × 0.422 = 2110 bacteria remaining approximately.</span>",
      "scaffoldPrompts": ["Identify the decay percentage and find the multiplier", "Substitute into the formula A = P × rⁿ", "Calculate the power rⁿ", "Multiply by the original amount P"]
    }
  }
};