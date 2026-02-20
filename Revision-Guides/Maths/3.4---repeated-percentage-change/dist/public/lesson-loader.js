window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.4 - Repeated percentage change",
  "strapline": "Learn how to calculate repeated percentage changes using multipliers, solve compound interest and depreciation problems, and understand scale factor effects on area and volume.",
  "learningObjectives": [
    "Students should calculate repeated percentage changes using multipliers raised to powers (Maths 3.4)",
    "Students should solve problems involving compound interest and depreciation (Maths 3.4)",
    "Students should understand how scale factors affect area (multiplied by k²) and volume (multiplied by k³) when shapes are enlarged by linear scale factor k (Maths 3.4)"
  ],
  "keyFormulas": [
    "Multiplier formula: multiplier = 1 + (percentage change ÷ 100) for increase, multiplier = 1 - (percentage change ÷ 100) for decrease",
    "Compound interest formula: A = P × (multiplier)^n",
    "Area scale factor formula: Area ratio = k², Volume scale factor formula: Volume ratio = k³"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='100' height='100' fill='#AEDFF7' stroke='#333'/><text x='100' y='170' font-family='Arial' font-size='14' text-anchor='middle'>Original Square</text><rect x='200' y='90' width='150' height='150' fill='#83C77F' stroke='#333'/><text x='275' y='260' font-family='Arial' font-size='14' text-anchor='middle'>Scaled Square (k = 1.5)</text><line x1='150' y1='150' x2='200' y2='150' stroke='#555' stroke-dasharray='4,4'/><text x='175' y='140' font-family='Arial' font-size='12' text-anchor='middle'>Linear scale factor k = 1.5</text></svg>",
  "step1": {
    "title": "Concept: Understanding Multipliers for Percentage Changes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>multiplier</strong> is a decimal number that helps you calculate percentage changes in one step. To increase a value by a certain percentage, multiply by <em>1 + (percentage ÷ 100)</em>. To decrease, multiply by <em>1 - (percentage ÷ 100)</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a multiplier like a multiplier on a game score. If your score increases by 20%, your new score is your original score multiplied by 1.20.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate a Multiplier for 15% Decrease",
      "problem": "What multiplier should you use to find the new value after a 15% decrease?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is this an increase or a decrease?",
          "answer": "decrease",
          "feedback": "Correct, it is a decrease."
        },
        {
          "id": "q2",
          "prompt": "Write 15% as a decimal.",
          "answer": "0.15",
          "feedback": "Correct, 15% as a decimal is 0.15."
        },
        {
          "id": "q3",
          "prompt": "Calculate 1 - 0.15 to find the multiplier.",
          "answer": "0.85",
          "feedback": "Correct, the multiplier for a 15% decrease is 0.85."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Repeated Percentage Change Using Powers of Multipliers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a percentage change happens multiple times, you use the multiplier raised to the power of the number of times the change occurs. For example, if a value increases by 5% each year for 3 years, multiply by 1.05³.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This is like climbing stairs where each step up makes you 5% taller; after 3 steps, you multiply by 1.05 three times.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate value after 3 years of 5% increase",
      "problem": "If an amount is £200 and increases by 5% each year for 3 years, what is the multiplier to use?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the multiplier for 5% increase.",
          "answer": "1.05",
          "feedback": "Correct, multiplier is 1.05."
        },
        {
          "id": "q2",
          "prompt": "What power will you raise the multiplier to for 3 years?",
          "answer": "3",
          "feedback": "Correct, raise to the power of 3."
        },
        {
          "id": "q3",
          "prompt": "Write the expression for the multiplier to the power of 3.",
          "answer": "1.05^3",
          "feedback": "Correct, use 1.05 to the power of 3."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Solving Compound Interest Problems",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Compound interest means you earn interest on the initial amount and on the interest already earned. Use the formula: <strong>A = P × (multiplier)<sup>n</sup></strong>, where <em>P</em> is the principal amount, <em>n</em> is the number of periods, and the multiplier includes the interest rate.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like a snowball rolling downhill; it gets bigger by collecting more snow each time it rolls over new snow, similar to earning interest on your initial money plus all previous interest.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Compound Interest Calculation",
      "problem": "Calculate the amount after 4 years with a principal of £1000 at 3% compound interest per year.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for 3% interest?",
          "answer": "1.03",
          "feedback": "Correct, multiplier is 1.03."
        },
        {
          "id": "q2",
          "prompt": "What is the exponent (number of years)?",
          "answer": "4",
          "feedback": "Correct, number of years is 4."
        },
        {
          "id": "q3",
          "prompt": "Write the full formula to calculate the amount.",
          "answer": "1000 × 1.03^4",
          "feedback": "Correct, that is the correct formula."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Understanding Depreciation as Repeated Percentage Decrease",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Depreciation is when an asset loses value over time. This is calculated as a repeated percentage decrease, so we use a multiplier less than 1 raised to the power of periods: <strong>Value = Initial × (multiplier)<sup>n</sup></strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a new car losing value each year; each year's value depends on the previous year's reduced amount.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Depreciation Calculation",
      "problem": "A laptop worth £800 depreciates by 10% each year. Calculate its value after 3 years.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for 10% depreciation?",
          "answer": "0.90",
          "feedback": "Correct, multiplier is 0.90."
        },
        {
          "id": "q2",
          "prompt": "What power will the multiplier be raised to for 3 years?",
          "answer": "3",
          "feedback": "Correct, power is 3."
        },
        {
          "id": "q3",
          "prompt": "Write the formula to calculate the laptop’s value after 3 years.",
          "answer": "800 × 0.90^3",
          "feedback": "Correct, this represents the depreciated value."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Scale Factors Affecting Area and Volume",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a shape is enlarged by a linear scale factor <em>k</em>, its area changes by a factor of <strong>k²</strong> and its volume by a factor of <strong>k³</strong>. This shows how repeated percentage changes affect two- and three-dimensional measures.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you double the length of a box (k=2), the surface area grows by 4 times (2²) and the volume grows by 8 times (2³).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Area and Volume Scale Factors",
      "problem": "A cube is enlarged by a scale factor of 1.5. Calculate the factor by which its area and volume increase.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the area scale factor?",
          "answer": "2.25",
          "feedback": "Correct, 1.5² = 2.25."
        },
        {
          "id": "q2",
          "prompt": "What is the volume scale factor?",
          "answer": "3.375",
          "feedback": "Correct, 1.5³ = 3.375."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A car is bought for £20,000 and depreciates by 12% each year. Calculate the car’s value after 5 years. Then explain how the repeated percentage decrease affects the value over time.</span>",
      "hint": "Remember to convert the percentage decrease into a multiplier and raise it to the power of the number of years. Consider how value changes yearly.",
      "mustHaveKeywords": ["multiplier", "power", "compound depreciation", "exponential decrease"],
      "optionalKeywords": ["initial value", "percentage decrease", "value after n years"],
      "modelAnswer": "<span>First, convert the 12% depreciation into a multiplier: 1 - 0.12 = 0.88. Then, use the formula for repeated percentage decrease: Value after 5 years = 20000 × 0.88<sup>5</sup>. The car's value decreases exponentially each year because depreciation applies on the reduced value, not the original. This explains why the value drops faster over consecutive years.</span>",
      "scaffoldPrompts": ["Find the multiplier for 12% depreciation", "Write the expression to calculate value after 5 years", "Explain why depreciation is a repeated percentage change"]
    }
  }
};