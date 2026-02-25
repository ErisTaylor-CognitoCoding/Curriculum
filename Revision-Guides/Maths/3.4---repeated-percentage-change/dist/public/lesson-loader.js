window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.4 - Repeated percentage change",
  "strapline": "Understanding how to calculate repeated percentage changes using multipliers, solve compound interest and depreciation problems, and the effect of scale factors on area and volume.",
  "learningObjectives": [
    "Students should calculate repeated percentage changes using multipliers raised to powers (Maths 3.4)",
    "Students should solve problems involving compound interest and depreciation (Maths 3.4)",
    "Students should understand how scale factors affect area (multiplied by k²) and volume (multiplied by k³) when shapes are enlarged by linear scale factor k (Maths 3.4)"
  ],
  "keyFormulas": [
    "Multiplier for increase = 1 + (percentage increase ÷ 100)",
    "Multiplier for decrease = 1 - (percentage decrease ÷ 100)",
    "Compound amount = Principal × (multiplier)<sup>number of periods</sup>",
    "New Area = Original Area × k²",
    "New Volume = Original Volume × k³"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='100' height='100' fill='#87ceeb' stroke='#333' stroke-width='2'/><rect x='150' y='20' width='200' height='200' fill='#add8e6' stroke='#333' stroke-width='2' opacity='0.6'/><text x='70' y='140' font-family='sans-serif' font-size='14' text-anchor='middle'>Original Square</text><text x='250' y='240' font-family='sans-serif' font-size='14' text-anchor='middle'>Square scaled by k=2</text><line x1='120' y1='70' x2='150' y2='70' stroke='#333' stroke-dasharray='4' marker-end='url(#arrowhead)'/><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#333'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Multipliers for Percentage Change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a quantity increases or decreases by a percentage, we can use a multiplier to find the new value in one step. For example, an increase of 5% means multiply by 1.05; a decrease of 15% means multiply by 0.85.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a shopping price tag. If the price goes up by 10%, you multiply by 1.10. If it goes down by 20%, you multiply by 0.80. The multiplier does the work in one step!</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Multiplier",
      "problem": "A jacket originally costs £80. It is increased by 12%. What multiplier do we use?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 12% increase to a decimal multiplier.",
          "answer": "1.12",
          "feedback": "Correct! Since it's an increase, we add the percentage to 1."
        }
      ]
    }
  },
  "step2": {
    "title": "Applying Multipliers Repeatedly",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a percentage change happens repeatedly over multiple periods (like years), we raise the multiplier to the power of the number of periods.</p>",
    "workedExample": {
      "title": "Worked Example: Repeated Percentage Increase",
      "problem": "A laptop costs £500 and its price increases by 5% every year for 3 years. What is the price after 3 years?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for a 5% increase?",
          "answer": "1.05",
          "feedback": "Correct! 5% increase means multiply by 1.05."
        },
        {
          "id": "q2",
          "prompt": "How many times is this multiplier applied (number of years)?",
          "answer": "3",
          "feedback": "Correct. We apply the multiplier for each year."
        },
        {
          "id": "q3",
          "prompt": "Set up the expression to find the new price (example: 500 × ?^3).",
          "answer": "500 × 1.05^3",
          "feedback": "Correct! This expression calculates the increased price after 3 years."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Compound Interest",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Compound interest is interest earned on the original amount and on the interest previously earned, causing your investment to grow exponentially.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a snowball rolling down a hill, getting bigger because snow sticks to it, just like interest grows with previous interest included.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Compound Interest Calculation",
      "problem": "You invest £1000 at 4% compound interest per year. What is the amount after 5 years?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the multiplier for 4% interest.",
          "answer": "1.04",
          "feedback": "Correct! A 4% increase means multiply by 1.04."
        },
        {
          "id": "q2",
          "prompt": "Write an expression for the total amount after 5 years.",
          "answer": "1000 × 1.04^5",
          "feedback": "Correct! This expression gives the compound amount."
        }
      ]
    }
  },
  "step4": {
    "title": "Understanding Depreciation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Depreciation is when something loses value over time, often calculated as a repeated percentage decrease.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Depreciation",
      "problem": "A car worth £15,000 depreciates by 8% per year. What is its value after 4 years?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What multiplier represents an 8% decrease?",
          "answer": "0.92",
          "feedback": "Correct! Subtract 0.08 from 1 gives 0.92."
        },
        {
          "id": "q2",
          "prompt": "Write the expression for the car's value after 4 years.",
          "answer": "15000 × 0.92^4",
          "feedback": "Correct! This expression calculates the depreciated value."
        }
      ]
    }
  },
  "step5": {
    "title": "Effect of Scale Factors on Area and Volume",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If a shape is enlarged by a linear scale factor k, its area changes by k² and its volume changes by k³.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='100' height='100' fill='#8bc34a' opacity='0.7' stroke='#555' stroke-width='2'/><rect x='200' y='50' width='200' height='200' fill='#aed581' opacity='0.5' stroke='#555' stroke-width='2'/><text x='100' y='170' font-family='sans-serif' font-size='14' text-anchor='middle'>Original square (area = 100×100)</text><text x='300' y='270' font-family='sans-serif' font-size='14' text-anchor='middle'>Scaled square (k=2, area multiplied by 2²=4)</text></svg>",
    "workedExample": {
      "title": "Worked Example: Scale Factor and Area",
      "problem": "A square has sides 5 cm. It is scaled up by a factor of 3. What is the area of the new square?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the area of the original square.",
          "answer": "25",
          "feedback": "Correct! Area = 5 × 5 = 25 cm²."
        },
        {
          "id": "q2",
          "prompt": "What power of the scale factor affects area?",
          "answer": "2",
          "feedback": "Correct! Area changes by k squared."
        },
        {
          "id": "q3",
          "prompt": "Calculate the multiplier for area change (3²).",
          "answer": "9",
          "feedback": "Correct! The area increases by a factor of 9."
        },
        {
          "id": "q4",
          "prompt": "Calculate the new area by multiplying the original area by 9.",
          "answer": "225",
          "feedback": "Correct! The new area is 225 cm²."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A car’s value is £20,000 and it depreciates by 10% each year. Calculate the value of the car after 3 years.</span>",
      "hint": "Use the multiplier for depreciation and raise it to the power of the number of years.",
      "mustHaveKeywords": ["multiplier", "power", "depreciation", "value after 3 years"],
      "optionalKeywords": ["decimal multiplier", "repeated percentage decrease"],
      "modelAnswer": "<span>The multiplier for 10% depreciation is 0.90. The value after 3 years is calculated by multiplying the original value by 0.90 raised to the power of 3: £20,000 × 0.90³ = £14,580.</span>",
      "scaffoldPrompts": [
        "Write down the multiplier for a 10% decrease.",
        "Identify how many times to apply this multiplier.",
        "Form the expression with the power for 3 years.",
        "Calculate the final value step-by-step."
      ]
    }
  }
};