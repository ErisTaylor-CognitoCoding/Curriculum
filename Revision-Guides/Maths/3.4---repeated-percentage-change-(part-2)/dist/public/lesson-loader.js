window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.4 - Repeated percentage change (Part 2)",
  "strapline": "Understand how to apply the same percentage change multiple times using multipliers raised to powers and explore real-world applications like compound interest and asset depreciation.",
  "learningObjectives": [
    "Students should be able to calculate the result of applying the same percentage change multiple times using multipliers raised to powers (Maths 3.4)",
    "Students should be able to apply repeated percentage change techniques to real-world contexts including compound interest, investment growth, and depreciation of assets (Maths 3.4)",
    ""
  ],
  "keyFormulas": [
    "Final value = Original value × (multiplier)^n",
    "Multiplier for increase = 1 + (percentage increase ÷ 100)",
    "Multiplier for decrease = 1 - (percentage decrease ÷ 100)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#e8f0fe' stroke='#4285f4' stroke-width='2'/><text x='200' y='90' font-family='Arial' font-size='18' font-weight='bold' fill='#1a73e8' text-anchor='middle'>Repeated Percentage Change</text><text x='200' y='130' font-family='Arial' font-size='14' fill='#333' text-anchor='middle'>Original value × (multiplier)<tspan dy='-5' font-size='10'>n</tspan></text><circle cx='130' cy='200' r='20' fill='#a8c4f8'/><text x='130' y='205' font-family='Arial' font-size='12' fill='#000' text-anchor='middle'>Start</text><circle cx='270' cy='200' r='20' fill='#a8c4f8'/><text x='270' y='205' font-family='Arial' font-size='12' fill='#000' text-anchor='middle'>End</text><line x1='150' y1='200' x2='250' y2='200' stroke='#1a73e8' stroke-width='3' marker-end='url(#arrowhead)'/><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#1a73e8'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding Repeated Percentage Change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Repeated percentage change happens when a value increases or decreases by the same percentage multiple times. This is common in situations like savings accounts accumulating interest yearly or a car losing value over several years.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine watering a plant that grows 10% taller each week. The plant's height doesn't just increase by the same fixed amount every week, but by 10% of its current height, so it grows faster and faster.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Multiplier for 5% Increase",
      "problem": "If a value increases by 5% every year, what multiplier would you use to calculate the value after 1 year?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 5% to a decimal fraction.",
          "answer": "0.05",
          "feedback": "Correct. 5% as a decimal is 0.05."
        },
        {
          "id": "q2",
          "prompt": "What should the multiplier be to increase the value by 5%?",
          "answer": "1.05",
          "feedback": "Correct. The multiplier is 1 + 0.05 = 1.05."
        }
      ]
    }
  },
  "step2": {
    "title": "Using Powers to Apply Repeated Change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Instead of multiplying the original value repeatedly by the multiplier, you can raise the multiplier to the power of how many times the change occurs. This is much faster for larger numbers of repetitions.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Value After 3 Years of 5% Increase",
      "problem": "Use the multiplier 1.05 to find the value after 3 years starting from £200.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What power would you raise 1.05 to for 3 years?",
          "answer": "3",
          "feedback": "Correct. The multiplier is raised to the power of 3."
        },
        {
          "id": "q2",
          "prompt": "Calculate 1.05³ (you can estimate or use a calculator).",
          "answer": "1.157625",
          "feedback": "Good attempt! 1.05³ is approximately 1.157625."
        },
        {
          "id": "q3",
          "prompt": "Multiply the original value £200 by the multiplier raised to the power 3. What is the new value?",
          "answer": "231.53",
          "feedback": "Well done! £200 × 1.157625 ≈ £231.53."
        }
      ]
    }
  },
  "step3": {
    "title": "Identifying the Correct Multiplier for a Percentage Decrease",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a value decreases by a percentage, the multiplier is less than 1. It is found by subtracting the percentage (as a decimal) from 1.</p>",
    "workedExample": {
      "title": "Worked Example: Multiplier for 8% Decrease",
      "problem": "Calculate the multiplier for a value that decreases by 8% each year.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 8% to a decimal.",
          "answer": "0.08",
          "feedback": "Correct. 8% as a decimal is 0.08."
        },
        {
          "id": "q2",
          "prompt": "What is 1 minus 0.08?",
          "answer": "0.92",
          "feedback": "Correct. The multiplier is 1 - 0.08 = 0.92."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying Repeated Decreases Using Powers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can apply the multiplier for decreases repeatedly by raising it to the power of the number of times the decrease occurs.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Depreciation of a £1000 Item Over 5 Years With 8% Annual Decrease",
      "problem": "Find the value after 5 years.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Raise the multiplier 0.92 to the power of 5.",
          "answer": "0.6591",
          "feedback": "Correct. 0.92⁵ is approximately 0.6591."
        },
        {
          "id": "q2",
          "prompt": "Multiply £1000 by 0.6591 to find the value after 5 years.",
          "answer": "659.10",
          "feedback": "Well done. The value after 5 years is about £659.10."
        }
      ]
    }
  },
  "step5": {
    "title": "Compound Interest: Repeated Percentage Increase in Real Life",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Compound interest means that interest is added to the principal so that future interest is earned on the interest already added. This causes exponential growth.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Compound Interest Over 4 Years",
      "problem": "An investment of £500 grows at 6% interest compounded annually. Calculate the amount after 4 years.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for 6% interest?",
          "answer": "1.06",
          "feedback": "Correct. Multiplier is 1 + 0.06 = 1.06."
        },
        {
          "id": "q2",
          "prompt": "Raise 1.06 to the power of 4.",
          "answer": "1.2625",
          "feedback": "Correct. 1.06⁴ is approximately 1.2625."
        },
        {
          "id": "q3",
          "prompt": "Multiply the original amount £500 by 1.2625 to get the total after 4 years.",
          "answer": "631.25",
          "feedback": "Great! £500 × 1.2625 = £631.25."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>An item costs £800 and decreases in value by 7% every year. Calculate its value after 6 years.</span>",
      "hint": "Remember to calculate the multiplier for a decrease and raise it to the power of 6 before multiplying by the original value.",
      "mustHaveKeywords": [
        "multiplier",
        "powers",
        "percentage decrease",
        "calculate"
      ],
      "optionalKeywords": [
        "repeated percentage change",
        "depreciation"
      ],
      "modelAnswer": "<span>First, convert 7% to decimal: 0.07.<br />Calculate the multiplier for decrease: 1 - 0.07 = 0.93.<br />Raise the multiplier to the power of 6: 0.93<sup>6</sup> ≈ 0.6477.<br />Multiply the original value by this: £800 × 0.6477 = £518.16.<br />Therefore, after 6 years, the item will be worth approximately £518.16.</span>",
      "scaffoldPrompts": [
        "What decimal multiplier corresponds to a 7% decrease?",
        "How do you apply this multiplier multiple times?",
        "Calculate the multiplier raised to the power of 6.",
        "Multiply the original price by this result to get the final value."
      ]
    }
  }
};