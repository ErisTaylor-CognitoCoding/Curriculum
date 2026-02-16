window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest) (Part 1)",
  "strapline": "Explore how quantities increase or decrease exponentially over time, using growth and decay multipliers, compound interest formulas, and interpreting exponential graphs.",
  "learningObjectives": [
    "Students should be able to calculate final amounts after repeated percentage changes using growth and decay multipliers (Maths 3.2)",
    "Students should be able to use the compound interest formula to model exponential growth in real-world contexts such as investments and population growth (Maths 3.2)",
    "Students should be able to recognise and interpret exponential graphs showing characteristic curves of growth and decay (Maths 3.2)"
  ],
  "keyFormulas": [
    "Growth multiplier = 1 + (percentage increase ÷ 100)",
    "Decay multiplier = 1 - (percentage decrease ÷ 100)",
    "Compound Interest Formula: A = P × (1 + r)^n, where A = final amount, P = principal, r = interest rate (decimal), n = number of periods"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#666' />  <path d='M60 260 Q 150 60 340 60' stroke='#2b7a78' stroke-width='3' fill='none'/>  <text x='200' y='280' text-anchor='middle' font-family='sans-serif' font-size='16' fill='#17252a'>Exponential Growth Curve</text>  <path d='M60 60 Q 250 250 340 250' stroke='#d00000' stroke-width='3' fill='none'/>  <text x='200' y='40' text-anchor='middle' font-family='sans-serif' font-size='16' fill='#d00000'>Exponential Decay Curve</text></svg>",
  "step1": {
    "title": "Concept: Understanding Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth occurs when a quantity increases by the same percentage over equal time periods. This means the amount gets bigger and bigger faster each time because you multiply by a number greater than 1, called the <strong>growth multiplier</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a savings account where you earn 5% interest every year. Each year, your money grows by 5%, so next year you earn interest on the interest you gained before. This is like your money 'snowballing'.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Growth Multiplier",
      "problem": "A population of rabbits increases by 6% every month. What is the growth multiplier?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the percentage increase as a decimal?",
          "answer": "0.06",
          "feedback": "Correct. 6% as a decimal is 0.06."
        },
        {
          "id": "q2",
          "prompt": "Using the formula (1 + decimal increase), what is the growth multiplier?",
          "answer": "1.06",
          "feedback": "Correct. The growth multiplier is 1 + 0.06 = 1.06."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay happens when a quantity decreases by the same percentage over equal time periods. In this case, you multiply by a number between 0 and 1, called the <strong>decay multiplier</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about radioactive materials losing 10% of their mass each hour. The material becomes less and less over time, multiplying by a number less than 1 each hour.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Decay Multiplier",
      "problem": "A drug in the bloodstream decreases by 8% each hour. What is the decay multiplier?",
      "questions": [
        {
          "id": "q3",
          "prompt": "What is the percentage decrease as a decimal?",
          "answer": "0.08",
          "feedback": "Correct. 8% as a decimal is 0.08."
        },
        {
          "id": "q4",
          "prompt": "Using the formula (1 - decimal decrease), what is the decay multiplier?",
          "answer": "0.92",
          "feedback": "Correct. The decay multiplier is 1 - 0.08 = 0.92."
        }
      ]
    }
  },
  "step3": {
    "title": "Applying Growth and Decay Multipliers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the final amount after multiple time periods of growth or decay, multiply the starting amount repeatedly by the growth or decay multiplier for each period.</p>",
    "workedExample": {
      "title": "Worked Example: Final Amount after Growth",
      "problem": "A tree's height increases by 4% each year. It is 5 m tall now. How tall will it be after 3 years? Use the growth multiplier.",
      "questions": [
        {
          "id": "q5",
          "prompt": "Calculate the growth multiplier for 4% increase.",
          "answer": "1.04",
          "feedback": "Correct. Growth multiplier is 1.04."
        },
        {
          "id": "q6",
          "prompt": "What expression shows the height after 3 years?",
          "answer": "5 × 1.04^3",
          "feedback": "Correct. Height = 5 × (1.04)^3."
        },
        {
          "id": "q7",
          "prompt": "Calculate 1.04^3 (use a calculator).",
          "answer": "1.124864",
          "feedback": "Correct. 1.04 raised to the power 3 is approximately 1.1249."
        },
        {
          "id": "q8",
          "prompt": "Final height after 3 years = 5 × 1.124864. Calculate this.",
          "answer": "5.62432",
          "feedback": "Great! The tree will be approximately 5.62 meters tall."
        }
      ]
    }
  },
  "step4": {
    "title": "Using the Compound Interest Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The compound interest formula models exponential growth in money invested or population growth. It is <em>A = P × (1 + r)^n</em>, where <strong>P</strong> is the initial amount, <strong>r</strong> is the interest rate as a decimal, and <strong>n</strong> is the number of periods.</p>",
    "workedExample": {
      "title": "Worked Example: Compound Interest",
      "problem": "You invest £1000 at an interest rate of 3% per year, compounded annually. How much will you have after 5 years?",
      "questions": [
        {
          "id": "q9",
          "prompt": "Identify P (principal amount).",
          "answer": "1000",
          "feedback": "Correct. P = £1000."
        },
        {
          "id": "q10",
          "prompt": "Convert 3% to decimal r.",
          "answer": "0.03",
          "feedback": "Correct. 3% as a decimal is 0.03."
        },
        {
          "id": "q11",
          "prompt": "Write the compound interest formula substitution.",
          "answer": "1000 × (1 + 0.03)^5",
          "feedback": "Correct. A = 1000 × (1.03)^5."
        },
        {
          "id": "q12",
          "prompt": "Calculate (1.03)^5 using a calculator.",
          "answer": "1.159274",
          "feedback": "Correct. (1.03)^5 ≈ 1.159274."
        },
        {
          "id": "q13",
          "prompt": "Multiply 1000 by 1.159274 to find A.",
          "answer": "1159.27",
          "feedback": "Great! The investment will be worth approximately £1159.27."
        }
      ]
    }
  },
  "step5": {
    "title": "Recognising and Interpreting Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth graphs curve upward, becoming steeper over time. Exponential decay graphs curve downward, approaching zero but never touching it. Understanding these shapes helps interpret real-world data.</p>",
    "workedExample": {
      "title": "Worked Example: Identify the Graph",
      "problem": "Look at a graph showing a quantity that halves every year. Is this exponential growth or decay?",
      "questions": [
        {
          "id": "q14",
          "prompt": "Is the multiplier greater than 1 or between 0 and 1?",
          "answer": "Between 0 and 1",
          "feedback": "Correct. Halving means the multiplier is 0.5, which is between 0 and 1."
        },
        {
          "id": "q15",
          "prompt": "Does this graph represent growth or decay?",
          "answer": "Decay",
          "feedback": "Yes, it is exponential decay."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A city’s population is currently 150,000 people and grows by 2.5% each year. Calculate the population after 4 years. Then describe the shape of the graph showing this growth.</span>",
      "hint": "Remember to convert the percentage to a growth multiplier first and use the formula A = P × (1 + r)^n. The graph will curve upwards showing exponential growth.",
      "mustHaveKeywords": ["growth multiplier", "compound interest formula", "exponential growth graph"],
      "optionalKeywords": ["population", "percentage increase", "curvature"],
      "modelAnswer": "<span>First, convert 2.5% to decimal: 0.025. The growth multiplier is 1 + 0.025 = 1.025. Using the compound interest formula A = 150,000 × (1.025)^4. Calculate (1.025)^4 ≈ 1.1038. Multiply: 150,000 × 1.1038 ≈ 165,570. Thus, the population after 4 years is approximately 165,570. The graph of this growth is an upward-curving exponential graph, becoming steeper over time, showing the population increases at an increasing rate.</span>",
      "scaffoldPrompts": [
        "Step 1: Convert the percentage increase to a decimal.",
        "Step 2: Calculate the growth multiplier.",
        "Step 3: Substitute values into A = P × (1 + r)^n.",
        "Step 4: Calculate the exponent (1 + r)^n.",
        "Step 5: Multiply by the initial population to get the final amount.",
        "Step 6: Describe the exponential growth curve shape."
      ]
    }
  }
};