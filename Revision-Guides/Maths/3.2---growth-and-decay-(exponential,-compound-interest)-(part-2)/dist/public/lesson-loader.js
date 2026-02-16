window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest) (Part 2)",
  "strapline": "Learn to model repeated percentage growth and decay, interpret exponential graphs, and solve compound interest problems.",
  "learningObjectives": [
    "Students should be able to model situations involving repeated percentage changes using the formula for compound interest and exponential equations (Maths 3.2)",
    "Students should be able to interpret and construct exponential graphs, recognising the characteristic curves of growth and decay (Maths 3.2)",
    "Students should be able to solve problems involving finding the original amount or the number of time periods in compound interest scenarios (Maths 3.2)"
  ],
  "keyFormulas": [
    "Amount after n periods: A = P × rⁿ, where P = initial amount, r = growth/decay multiplier, n = number of periods",
    "Growth multiplier r = 1 + (percentage growth ÷ 100)",
    "Decay multiplier r = 1 - (percentage decay ÷ 100)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='80' text-anchor='middle' font-family='sans-serif' font-weight='bold'>Exponential Growth and Decay</text><polyline points='70,250 120,150 170,110 220,80 270,60 320,50' fill='none' stroke='#28a745' stroke-width='3' /><text x='330' y='55' font-family='sans-serif' fill='#28a745'>Growth</text><polyline points='70,250 120,230 170,190 220,160 270,130 320,110' fill='none' stroke='#dc3545' stroke-width='3' /><text x='330' y='115' font-family='sans-serif' fill='#dc3545'>Decay</text><line x1='50' y1='250' x2='350' y2='250' stroke='#333' stroke-width='2' /><line x1='50' y1='250' x2='50' y2='50' stroke='#333' stroke-width='2' /><text x='360' y='255' font-family='sans-serif'>Time (n)</text><text x='20' y='55' font-family='sans-serif' transform='rotate(90 20,55)'>Amount (A)</text></svg>",
  "step1": {
    "title": "Concept: Understanding Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth happens when a quantity <strong>increases</strong> by the same percentage each time period. The multiplier used is <strong>greater than 1</strong>. This leads to growth that becomes faster over time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a savings account where your money increases by 5% every year. The amount you have doesn't just grow by a fixed amount; it grows by 5% of the new total each year, so growth speeds up.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using the Growth Multiplier",
      "problem": "A plant grows by 10% each week. If the plant is 30 cm tall now, what will its height be after 1 week?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier if the plant grows by 10% each week?",
          "answer": "1.10",
          "feedback": "Correct. Add 10% to 100% to get 110%, which as a multiplier is 1.10."
        },
        {
          "id": "q2",
          "prompt": "Calculate the plant's height after 1 week using the multiplier and current height of 30 cm.",
          "answer": "33",
          "feedback": "Correct. 30 cm × 1.10 = 33 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay occurs when a quantity <strong>decreases</strong> by the same percentage each time period. The multiplier is between <strong>0 and 1</strong>, causing the amount to shrink but never reach zero.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a radioactive substance that loses 20% of its mass every hour. After each hour, you're left with 80% of what you had before.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using the Decay Multiplier",
      "problem": "A radioactive isotope has a mass of 100 grams and decays by 15% each day. What is the mass after 1 day?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier if the mass decays by 15% each day?",
          "answer": "0.85",
          "feedback": "Correct. Subtract 15% from 100% to get 85%, so the multiplier is 0.85."
        },
        {
          "id": "q2",
          "prompt": "Calculate the mass after 1 day using the multiplier and the initial mass of 100 grams.",
          "answer": "85",
          "feedback": "Correct. 100 g × 0.85 = 85 g."
        }
      ]
    }
  },
  "step3": {
    "title": "Skill Check: Calculate Amount After Multiple Periods",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the amount after multiple periods, raise the growth or decay multiplier to the power of the number of periods, then multiply by the initial amount.</p>",
    "workedExample": {
      "title": "Worked Example: Compound Growth Over 3 Periods",
      "problem": "An investment grows by 7% each year. The initial amount is £500. What is the amount after 3 years?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the multiplier for 7% growth.",
          "answer": "1.07",
          "feedback": "Correct. 100% + 7% = 107%, multiplier is 1.07."
        },
        {
          "id": "q2",
          "prompt": "What power should you raise the multiplier to for 3 years?",
          "answer": "3",
          "feedback": "Correct. Multiply by the multiplier 3 times (power of 3)."
        },
        {
          "id": "q3",
          "prompt": "Calculate 1.07 raised to the power 3.",
          "answer": "1.225043",
          "feedback": "Correct. 1.07³ ≈ 1.225."
        },
        {
          "id": "q4",
          "prompt": "Multiply the initial amount £500 by 1.225 to estimate the amount after 3 years (round to nearest £).",
          "answer": "613",
          "feedback": "Correct. £500 × 1.225 ≈ £613."
        }
      ]
    }
  },
  "step4": {
    "title": "Interpreting Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth graphs curve upwards, getting steeper over time. Exponential decay graphs curve downwards but never touch zero. Recognising these characteristic shapes helps understand the situation modelled.</p>",
    "workedExample": {
      "title": "Worked Example: Identify the Type of Graph",
      "problem": "You see two graphs: one rising rapidly upwards and one gradually falling closer to the x-axis. Which graph shows growth and which shows decay?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Select the graph that represents exponential growth.",
          "answer": "rising graph",
          "feedback": "Correct. Growth curves get steeper and rise."
        },
        {
          "id": "q2",
          "prompt": "Select the graph that represents exponential decay.",
          "answer": "falling graph",
          "feedback": "Correct. Decay curves fall but never reach zero."
        }
      ]
    }
  },
  "step5": {
    "title": "Solving for Unknown Periods or Original Amount",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Sometimes you must find how many time periods have passed or the original amount from the final amount and multiplier using algebra and logarithms.</p>",
    "workedExample": {
      "title": "Worked Example: Find Number of Periods",
      "problem": "£1000 grows to £1210 with a compound interest rate of 5% per year. How many years has the money been growing?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for 5% growth?",
          "answer": "1.05",
          "feedback": "Correct. 100% + 5% = 105%, multiplier is 1.05."
        },
        {
          "id": "q2",
          "prompt": "Write the equation to find the number of years n: 1000 × 1.05ⁿ = 1210. What is 1.05ⁿ?",
          "answer": "1.21",
          "feedback": "Correct. Divide both sides by 1000, 1.05ⁿ = 1.21."
        },
        {
          "id": "q3",
          "prompt": "Using logs, find n = log(1.21) ÷ log(1.05). Calculate the value (round to 2 decimal places).",
          "answer": "4",
          "feedback": "Correct. n ≈ 4 years."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A sum of £2000 is invested at an interest rate of 4% per year, compounded annually. Calculate:</span><ol><li>the amount after 5 years,</li><li>how long it will take for the investment to reach £2500,</li><li>the original amount if the final amount is £2430 after 3 years at 4% compound interest.</li></ol>",
      "hint": "Use the formula A = P × rⁿ. For unknown n or P, use logarithms and isolate the unknown variable.",
      "mustHaveKeywords": ["compound interest", "multiplier", "logarithm"],
      "optionalKeywords": ["exponential", "growth", "decay"],
      "modelAnswer": "<span>1) Calculate multiplier r = 1.04.<br>Amount after 5 years: A = 2000 × 1.04⁵ ≈ £2433.<br>2) Find n where 2000 × 1.04ⁿ = 2500.<br>Divide both sides: 1.04ⁿ = 1.25.<br>Take logs: n = log(1.25) ÷ log(1.04) ≈ 5.62 years.<br>3) With A = 2430 and n = 3:<br>2430 = P × 1.04³.<br>Calculate P = 2430 ÷ (1.04³) ≈ £2163.</span>",
      "scaffoldPrompts": [
        "Recall the compound interest formula.",
        "Calculate the multiplier from percentage interest.",
        "Raise the multiplier to the power of years for total growth.",
        "Use logarithms when the exponent or original amount is unknown."
      ]
    }
  }
};