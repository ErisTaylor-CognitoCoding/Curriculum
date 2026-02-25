window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest)",
  "strapline": "Understanding and calculating exponential growth and decay, including compound interest, through repeated percentage changes.",
  "learningObjectives": [
    "Students should understand and calculate compound interest for quantities increasing or decreasing by a constant percentage over time (Maths 3.2)",
    "Students should model exponential growth and decay situations using appropriate mathematical notation and formulae (Maths 3.2)",
    "Students should solve problems involving repeated percentage change in practical contexts (Maths 3.2)"
  ],
  "keyFormulas": [
    "Exponential Growth/Decay formula: A = P × multiplier^n",
    "Compound Interest formula: A = P(1 + r/100)^n",
    "Multiplier = 1 + r/100 for growth, 1 - r/100 for decay"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='50' width='360' height='200' fill='#e8f4fd' stroke='#0080c0' rx='15' ry='15'/><text x='200' y='90' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='18' fill='#004080'>Exponential Growth Example</text><text x='40' y='130' font-family='sans-serif' font-size='14'>Year 0: Principal = P</text><text x='40' y='160' font-family='sans-serif' font-size='14'>Year 1: Amount = P × multiplier</text><text x='40' y='190' font-family='sans-serif' font-size='14'>Year 2: Amount = P × multiplier²</text><text x='40' y='220' font-family='sans-serif' font-size='14'>Year n: Amount = P × multiplierⁿ</text></svg>",
  "step1": {
    "title": "Concept: Understanding Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth happens when a quantity increases by a fixed percentage in each equal time period. This causes the total amount to grow faster as time passes. The key feature is the multiplier, which is greater than 1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a savings account where your money earns 5% interest every year. Each year, the interest is added to your total, so next year’s interest is on a higher amount.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Amount After 3 Years with 5% Growth",
      "problem": "You have £1000 in a savings account earning 5% interest compounded yearly. What amount do you have after 3 years?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the principal amount (P)?",
          "answer": "1000",
          "feedback": "Correct. The initial amount is £1000."
        },
        {
          "id": "q2",
          "prompt": "What is the interest rate (r) as a percentage?",
          "answer": "5",
          "feedback": "Correct. The interest rate is 5%."
        },
        {
          "id": "q3",
          "prompt": "Calculate the multiplier for growth (1 + r/100). What is it?",
          "answer": "1.05",
          "feedback": "Correct. The multiplier is 1 + 5/100 = 1.05."
        },
        {
          "id": "q4",
          "prompt": "What is the number of time periods (n)?",
          "answer": "3",
          "feedback": "Correct. The money grows for 3 years."
        },
        {
          "id": "q5",
          "prompt": "Using the formula A = P × multiplier^n, what is the expression to calculate the amount A?",
          "answer": "1000 × 1.05^3",
          "feedback": "Correct. The amount after 3 years is 1000 × 1.05^3."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay occurs when a quantity decreases by a fixed percentage during equal time periods. The multiplier is between 0 and 1, causing the quantity to reduce more slowly over time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a radioactive substance that loses 10% of its mass every year. The remaining amount shrinks but never immediately reaches zero.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Amount After 4 Years with 10% Decay",
      "problem": "A substance weighs 500 grams and loses 10% of its mass each year. What is its weight after 4 years?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the initial amount (P)?",
          "answer": "500",
          "feedback": "Correct. The starting mass is 500 grams."
        },
        {
          "id": "q2",
          "prompt": "What is the decay rate (r) as a percentage?",
          "answer": "10",
          "feedback": "Correct. The mass decreases by 10% each year."
        },
        {
          "id": "q3",
          "prompt": "Calculate the multiplier for decay (1 - r/100). What is it?",
          "answer": "0.9",
          "feedback": "Correct. The multiplier is 1 - 10/100 = 0.9."
        },
        {
          "id": "q4",
          "prompt": "How many years (n) has the decay happened over?",
          "answer": "4",
          "feedback": "Correct. The decay happens for 4 years."
        },
        {
          "id": "q5",
          "prompt": "Write the formula expression to find the remaining mass after 4 years.",
          "answer": "500 × 0.9^4",
          "feedback": "Correct. Remaining mass = 500 × 0.9^4."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Compound Interest Explained",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Compound interest means interest is earned on the initial principal and also on the interest accumulated from previous periods. This leads to faster growth than simple interest.</p><p>Use the formula: <strong>A = P(1 + r/100)^n</strong></p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you deposit money in an account paying compound interest, the earned interest each year also earns interest in subsequent years.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Compound Interest",
      "problem": "You invest £2000 at 4% compound interest per year. Find the total after 5 years.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the principal amount (P)?",
          "answer": "2000",
          "feedback": "Correct. You started with £2000."
        },
        {
          "id": "q2",
          "prompt": "What is the annual interest rate (r)?",
          "answer": "4",
          "feedback": "Correct. The rate is 4%."
        },
        {
          "id": "q3",
          "prompt": "How many years (n) does the money grow?",
          "answer": "5",
          "feedback": "Correct. The investment period is 5 years."
        },
        {
          "id": "q4",
          "prompt": "Write the multiplier (1 + r/100).",
          "answer": "1.04",
          "feedback": "Correct. Multiplier = 1 + 4/100 = 1.04."
        },
        {
          "id": "q5",
          "prompt": "Write the full compound interest expression for amount A.",
          "answer": "2000 × 1.04^5",
          "feedback": "Correct. The amount after 5 years is 2000 × 1.04^5."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Example: Modeling Growth and Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now let's model a real-world problem using exponential growth or decay formulas. You will input values step-by-step to calculate the final amount.</p>",
    "workedExample": {
      "title": "Scenario: Population Growth",
      "problem": "A town has 15,000 residents and its population grows by 3% every year. Find the estimated population after 6 years.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the initial population (P):",
          "answer": "15000",
          "feedback": "Correct. The town starts with 15,000 residents."
        },
        {
          "id": "q2",
          "prompt": "Enter the annual growth rate (r) in %:",
          "answer": "3",
          "feedback": "Correct. Growth rate is 3%."
        },
        {
          "id": "q3",
          "prompt": "Calculate the growth multiplier (1 + r/100):",
          "answer": "1.03",
          "feedback": "Correct. Multiplier is 1 + 3/100 = 1.03."
        },
        {
          "id": "q4",
          "prompt": "Enter number of years (n):",
          "answer": "6",
          "feedback": "Correct. We are finding the population after 6 years."
        },
        {
          "id": "q5",
          "prompt": "Write the formula expression for the population after 6 years:",
          "answer": "15000 × 1.03^6",
          "feedback": "Yes, that's the correct expression."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='380' height='110' fill='#e1f5d1' stroke='#4caf50' rx='10' ry='10'/><text x='200' y='55' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='#33691e'>Population Growth Model</text><text x='30' y='90' font-family='sans-serif' font-size='14'>P = 15,000</text><text x='30' y='115' font-family='sans-serif' font-size='14'>Multiplier = 1 + (3/100) = 1.03</text><text x='30' y='140' font-family='sans-serif' font-size='14'>n = 6 years</text></svg>"
    }
  },
  "step5": {
    "title": "Practice: Calculating Exponential Decay with Repeated Percentage Change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let’s apply exponential decay to a practical example where something loses value repeatedly by a percentage.</p>",
    "workedExample": {
      "title": "Example: Car Depreciation",
      "problem": "A car valued at £20,000 loses 15% of its value every year. Calculate its value after 3 years.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter initial value (P):",
          "answer": "20000",
          "feedback": "Correct. The car starts at £20,000."
        },
        {
          "id": "q2",
          "prompt": "Enter depreciation rate (r):",
          "answer": "15",
          "feedback": "Correct. The car loses 15% of its value yearly."
        },
        {
          "id": "q3",
          "prompt": "Calculate decay multiplier (1 - r/100):",
          "answer": "0.85",
          "feedback": "Correct. Multiplier is 1 - 15/100 = 0.85."
        },
        {
          "id": "q4",
          "prompt": "Enter number of years (n):",
          "answer": "3",
          "feedback": "Correct. We want value after 3 years."
        },
        {
          "id": "q5",
          "prompt": "Write the formula expression to find value after 3 years:",
          "answer": "20000 × 0.85^3",
          "feedback": "Exactly. Value after 3 years is 20000 × 0.85^3."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 420 160' xmlns='http://www.w3.org/2000/svg'><rect x='15' y='25' width='390' height='120' fill='#fdecea' stroke='#e53935' rx='15' ry='15'/><text x='210' y='60' font-family='sans-serif' font-weight='bold' font-size='17' fill='#b71c1c' text-anchor='middle'>Car Depreciation Model</text><text x='35' y='95' font-family='sans-serif' font-size='14'>Initial Value (P): £20,000</text><text x='35' y='125' font-family='sans-serif' font-size='14'>Multiplier = 1 - 15/100 = 0.85</text><text x='35' y='155' font-family='sans-serif' font-size='14'>Years (n): 3</text></svg>"
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A savings account has an initial balance of £2500 and offers 6% compound interest annually. Calculate the amount in the account after 7 years. Then explain how to model this problem using the exponential growth formula and identify each component.</span>",
      "hint": "Remember to use the formula A = P(1 + r/100)^n and carefully identify principal, rate, multiplier, and time periods.",
      "mustHaveKeywords": ["compound interest", "multiplier", "principal", "exponential growth", "time periods"],
      "optionalKeywords": ["percentage rate", "power notation", "final amount"],
      "modelAnswer": "<span>To calculate the amount after 7 years, use the compound interest formula A = P(1 + r/100)^n where P = 2500, r = 6, and n = 7. The multiplier is 1 + 6/100 = 1.06. Substitute these values: A = 2500 × 1.06^7. This models exponential growth because the amount grows by a fixed percentage (6%) each year, making the growth compound. Each year corresponds to one time period n, and the total amount accumulates interest on the principal and prior interest.</span>",
      "scaffoldPrompts": [
        "Identify the principal amount and rate of interest.",
        "Calculate the multiplier using the formula 1 + r/100.",
        "Determine the number of time periods (years).",
        "Write the compound interest formula substitution.",
        "Explain why this is exponential growth."
      ]
    }
  }
};