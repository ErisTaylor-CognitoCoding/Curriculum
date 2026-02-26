window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest)",
  "strapline": "Understanding how quantities grow or shrink by constant percentages over time using exponential models and compound interest calculations.",
  "learningObjectives": [
    "Students should understand and calculate compound interest for quantities increasing or decreasing by a constant percentage over time (Maths 3.2)",
    "Students should model exponential growth and decay situations using appropriate mathematical notation and formulae (Maths 3.2)",
    "Students should solve problems involving repeated percentage change in practical contexts (Maths 3.2)"
  ],
  "keyFormulas": [
    "Exponential Growth/Decay: A = P × multiplier^n",
    "Compound Interest: A = P (1 + r/100)^n where A is final amount, P is principal, r is rate, n is number of time periods",
    "Multiplier for growth: > 1, Multiplier for decay: between 0 and 1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='50' width='360' height='200' fill='#e0f7fa' stroke='#006064' stroke-width='2'/><text x='200' y='80' font-family='sans-serif' font-size='18' fill='#004d40' text-anchor='middle'><strong>Exponential Growth and Decay</strong></text><line x1='60' y1='240' x2='60' y2='100' stroke='#004d40' stroke-width='2'/><line x1='60' y1='240' x2='350' y2='240' stroke='#004d40' stroke-width='2'/><text x='55' y='250' font-family='sans-serif' font-size='14' fill='#004d40' text-anchor='middle'>Time (n)</text><text x='15' y='100' font-family='sans-serif' font-size='14' fill='#004d40' text-anchor='middle' transform='rotate(-90 15,100)'>Amount (A)</text><circle cx='100' cy='210' r='6' fill='#00796b'/><text x='100' y='200' font-family='sans-serif' font-size='12' fill='#004d40' text-anchor='middle'>P (initial)</text><circle cx='180' cy='180' r='6' fill='#004d40'/><text x='180' y='170' font-family='sans-serif' font-size='12' fill='#004d40' text-anchor='middle'>Growth</text><circle cx='260' cy='140' r='6' fill='#004d40'/><text x='260' y='130' font-family='sans-serif' font-size='12' fill='#004d40' text-anchor='middle'>Faster growth</text><circle cx='340' cy='100' r='6' fill='#004d40'/><text x='340' y='90' font-family='sans-serif' font-size='12' fill='#004d40' text-anchor='middle'>Exponential growth</text><path d='M260 100 Q300 160 340 200' stroke='#c62828' stroke-width='2' fill='none' stroke-dasharray='5,5'/><text x='280' y='180' font-family='sans-serif' font-size='12' fill='#c62828'>Decay Curve</text></svg>",
  "step1": {
    "title": "Concept: Understanding Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth happens when a quantity increases by the same percentage over regular time periods. This results in the quantity growing faster and faster over time because the growth applies to the whole amount each time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine folding a paper in half repeatedly. Each time you fold, the thickness doubles, not just adding a fixed amount but increasing by a percentage, similar to exponential growth.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Exponential Growth",
      "problem": "A bacteria culture has 100 cells and grows by 20% every hour. Calculate the number of bacteria after 3 hours.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the principal amount (P)?",
          "answer": "100",
          "feedback": "Correct. The initial amount of bacteria is 100."
        },
        {
          "id": "q2",
          "prompt": "What is the growth rate as a decimal multiplier?",
          "answer": "1.2",
          "feedback": "Correct! 20% growth means multiply by 1 + 20/100 = 1.2."
        },
        {
          "id": "q3",
          "prompt": "How many hours will the growth occur for (n)?",
          "answer": "3",
          "feedback": "Correct. The growth happens for 3 time periods."
        },
        {
          "id": "q4",
          "prompt": "Using A = P × multiplier^n, write the expression for the final amount.",
          "answer": "100 × 1.2^3",
          "feedback": "Correct! The formula applied with given values."
        },
        {
          "id": "q5",
          "prompt": "Calculate 1.2 to the power of 3 (1.2^3).",
          "answer": "1.728",
          "feedback": "Correct. 1.2^3 = 1.728."
        },
        {
          "id": "q6",
          "prompt": "Multiply 100 by 1.728 to find the final number of bacteria.",
          "answer": "172.8",
          "feedback": "Correct! The bacteria count after 3 hours is approximately 173."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay occurs when a quantity decreases by the same percentage over equal time periods. This causes the quantity to shrink more and more slowly, approaching zero but never quite reaching it.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about how a hot cup of coffee cools down. It loses a percentage of its heat every minute, so it cools quickly at first, then more slowly over time - just like exponential decay.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Exponential Decay",
      "problem": "A car's value decreases by 15% every year. If it is worth £20,000 now, what will it be worth after 4 years?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the initial value (P)?",
          "answer": "20000",
          "feedback": "Correct. The starting value of the car is £20,000."
        },
        {
          "id": "q2",
          "prompt": "What is the decay multiplier (1 - 15/100)?",
          "answer": "0.85",
          "feedback": "Correct. Each year the car keeps 85% of its value."
        },
        {
          "id": "q3",
          "prompt": "What is the number of years (n)?",
          "answer": "4",
          "feedback": "Correct. We're calculating for 4 years."
        },
        {
          "id": "q4",
          "prompt": "Write the formula for the car's worth after 4 years.",
          "answer": "20000 × 0.85^4",
          "feedback": "Correct! This represents exponential decay."
        },
        {
          "id": "q5",
          "prompt": "Calculate the decay factor 0.85^4.",
          "answer": "0.522",
          "feedback": "Correct! 0.85 raised to the 4th power is about 0.522."
        },
        {
          "id": "q6",
          "prompt": "Multiply 20,000 by 0.522 to find the car's value after 4 years.",
          "answer": "10440",
          "feedback": "Correct! The car is worth approx £10,440 after 4 years."
        }
      ]
    }
  },
  "step3": {
    "title": "Introduction to Compound Interest",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Compound interest is interest calculated on the initial amount and on the interest accumulated from previous periods. This causes an amount to grow exponentially over time.</p>",
    "workedExample": {
      "title": "Worked Example: Compound Interest Calculation",
      "problem": "You invest £1,000 at an interest rate of 5% compound annually. What will the investment be worth after 3 years?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the principal (P)?",
          "answer": "1000",
          "feedback": "Correct. The initial investment is £1,000."
        },
        {
          "id": "q2",
          "prompt": "What is the interest rate (r)?",
          "answer": "5",
          "feedback": "Correct. The annual interest rate is 5%."
        },
        {
          "id": "q3",
          "prompt": "For how many years will interest be compounded (n)?",
          "answer": "3",
          "feedback": "Correct. The money grows for 3 years."
        },
        {
          "id": "q4",
          "prompt": "Write the compound interest formula with the values.",
          "answer": "1000 × (1 + 5/100)^3",
          "feedback": "Correct! Using A = P(1 + r/100)^n."
        },
        {
          "id": "q5",
          "prompt": "Calculate 1 + 5/100.",
          "answer": "1.05",
          "feedback": "Correct. 5% as a decimal is 0.05; 1 + 0.05 = 1.05."
        },
        {
          "id": "q6",
          "prompt": "Calculate 1.05^3.",
          "answer": "1.157625",
          "feedback": "Correct. 1.05 cubed is about 1.1576."
        },
        {
          "id": "q7",
          "prompt": "Calculate 1000 × 1.1576.",
          "answer": "1157.63",
          "feedback": "Correct! Investment will be about £1,157.63 after 3 years."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying the Multiplier Concept",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The multiplier in growth or decay shows how each period changes the amount. For growth, multiplier = 1 + r/100, and for decay, multiplier = 1 - r/100. Using the multiplier helps us model both situations with the same formula.</p>",
    "workedExample": {
      "title": "Worked Example: Writing the Multiplier",
      "problem": "Identify the multiplier for a quantity that decreases by 10% each year.",
      "questions": [
        {
          "id": "q1",
          "prompt": "If decrease is 10%, what decimal fraction represents the decrease?",
          "answer": "0.10",
          "feedback": "Correct. 10% as decimal is 0.10."
        },
        {
          "id": "q2",
          "prompt": "Calculate the multiplier (1 - 0.10).",
          "answer": "0.90",
          "feedback": "Correct. The multiplier is 0.90 for 10% decay."
        },
        {
          "id": "q3",
          "prompt": "Write the general formula for amount after n periods using this multiplier.",
          "answer": "A = P × 0.90^n",
          "feedback": "Correct! This is the decay model formula."
        }
      ]
    }
  },
  "step5": {
    "title": "Solving Practical Problems with Repeated Percentage Change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Many real-world problems involve quantities increasing or decreasing repeatedly by percentages, such as populations, investments, or depreciation. Setting up and solving exponential equations accurately is key.</p>",
    "workedExample": {
      "title": "Worked Example: Repeated Percentage Problem",
      "problem": "A population of 5,000 grows by 3% annually. What is the population after 5 years?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the initial population (P)?",
          "answer": "5000",
          "feedback": "Correct. The starting population is 5,000."
        },
        {
          "id": "q2",
          "prompt": "Find the growth multiplier (1 + 3/100).",
          "answer": "1.03",
          "feedback": "Correct. The multiplier for 3% growth is 1.03."
        },
        {
          "id": "q3",
          "prompt": "How many years does the growth occur (n)?",
          "answer": "5",
          "feedback": "Correct. Growth over 5 years."
        },
        {
          "id": "q4",
          "prompt": "Write the formula for the population after 5 years.",
          "answer": "5000 × 1.03^5",
          "feedback": "Correct! This models the population growth."
        },
        {
          "id": "q5",
          "prompt": "Calculate 1.03^5.",
          "answer": "1.159274",
          "feedback": "Correct. 1.03^5 ≈ 1.1593."
        },
        {
          "id": "q6",
          "prompt": "Multiply 5,000 by 1.1593 to find the population after 5 years.",
          "answer": "5796.37",
          "feedback": "Correct! The population will be approximately 5,796."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A sum of £2,500 is invested at an annual compound interest rate of 4.5%. Calculate the total amount in the account after 6 years. Show all your working clearly.</span>",
      "hint": "Remember to use the compound interest formula and convert the percentage rate into a decimal multiplier.",
      "mustHaveKeywords": ["compound interest", "multiplier", "exponent", "principal", "rate", "time"],
      "optionalKeywords": ["annual compounding", "growth factor", "power", "formula"],
      "modelAnswer": "<span>First, identify the principal P = £2,500, rate r = 4.5%, and time n = 6 years.<br>Convert the rate to a decimal multiplier: 1 + (4.5/100) = 1.045.<br>Use the compound interest formula A = P × (1 + r/100)^n = 2500 × 1.045^6.<br>Calculate 1.045^6 ≈ 1.3058.<br>Multiply 2500 × 1.3058 ≈ £3,264.50.<br>Therefore, the amount after 6 years will be approximately £3,264.50.</span>",
      "scaffoldPrompts": [
        "Identify the principal, rate, and time.",
        "Convert the percentage rate to a decimal multiplier.",
        "Set up the compound interest formula with values.",
        "Calculate the exponent power.",
        "Multiply to find the final amount."
      ]
    }
  }
};