window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.6 - FDP conversions and percentages",
  "strapline": "Learn to convert fluently between fractions, decimals and percentages and apply these skills to solve percentage problems including increases, decreases, and reverse calculations.",
  "learningObjectives": [
    "Students should develop fluency in converting between fractions, decimals and percentages (Maths 1.6)",
    "Students should use these skills to solve percentage problems including finding percentages of amounts, percentage increase and decrease (Maths 1.6)",
    "Students should solve reverse percentage calculations (Maths 1.6)"
  ],
  "keyFormulas": [
    "Concept 1: Fraction to decimal: divide numerator by denominator; decimal to percentage: multiply by 100",
    "Concept 2: Percentage of amount = (percentage ÷ 100) × amount",
    "Concept 3: New amount after increase = original × (1 + percentage as decimal)",
    "Concept 4: New amount after decrease = original × (1 - percentage as decimal)",
    "Concept 5: Reverse percentage: original = new amount ÷ (1 ± percentage as decimal)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#eef6f9' stroke='#3399cc' stroke-width='2' rx='15' ry='15'/><text x='200' y='50' font-family='Arial' font-size='18' font-weight='600' fill='#23627c' text-anchor='middle'>FDP Equivalence</text><line x1='70' y1='120' x2='330' y2='120' stroke='#23627c' stroke-width='1.5'/><circle cx='100' cy='190' r='30' fill='#80bfff'/><text x='100' y='195' font-family='Arial' font-size='20' font-weight='bold' fill='#003366' text-anchor='middle'>1/2</text><circle cx='200' cy='190' r='30' fill='#99ccff'/><text x='200' y='195' font-family='Arial' font-size='20' font-weight='bold' fill='#003366' text-anchor='middle'>0.5</text><circle cx='300' cy='190' r='30' fill='#b3d9ff'/><text x='300' y='195' font-family='Arial' font-size='20' font-weight='bold' fill='#003366' text-anchor='middle'>50%</text><text x='100' y='160' font-family='Arial' font-size='10' fill='#23627c' text-anchor='middle'>Fraction</text><text x='200' y='160' font-family='Arial' font-size='10' fill='#23627c' text-anchor='middle'>Decimal</text><text x='300' y='160' font-family='Arial' font-size='10' fill='#23627c' text-anchor='middle'>Percentage</text><path d='M130 190 L170 190' stroke='#23627c' stroke-width='2' marker-end='url(#arrow)'/><path d='M230 190 L270 190' stroke='#23627c' stroke-width='2' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='6' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L0,6 L9,3 z' fill='#23627c'/></marker></defs></svg>",
  "step1": {
    "title": "Understanding FDP Equivalence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Fractions, decimals and percentages are just different ways to express the same value. For example, the fraction <strong>1/2</strong> is equal to the decimal <strong>0.5</strong> and the percentage <strong>50%</strong>. Being able to switch between these forms helps in many real-life calculations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of fractions, decimals and percentages like different languages saying the same thing. Just like 'hello' in English, 'hola' in Spanish, and 'bonjour' in French all mean a greeting, 1/2, 0.5 and 50% all mean the same amount.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Convert Fraction to Decimal and Percentage",
      "problem": "Convert the fraction <strong>3/4</strong> into a decimal and then to a percentage.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Divide numerator by denominator. What is 3 ÷ 4?",
          "answer": "0.75",
          "feedback": "Correct! 3 divided by 4 equals 0.75."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Convert the decimal 0.75 to a percentage by multiplying by 100. What is 0.75 × 100?",
          "answer": "75",
          "feedback": "Correct! 0.75 multiplied by 100 equals 75."
        },
        {
          "id": "q3",
          "prompt": "So, what is 3/4 as a percentage?",
          "answer": "75%",
          "feedback": "Correct! 3/4 = 0.75 = 75%."
        }
      ]
    }
  },
  "step2": {
    "title": "Finding Percentage of an Amount",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find a percentage of an amount, first convert the percentage to a decimal by dividing by 100. Then multiply that decimal by the amount.</p>",
    "workedExample": {
      "title": "Worked Example: Find 15% of £80",
      "problem": "Calculate 15% of £80 step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 15% to a decimal by dividing by 100. What is 15 ÷ 100?",
          "answer": "0.15",
          "feedback": "Correct! 15% as a decimal is 0.15."
        },
        {
          "id": "q2",
          "prompt": "Multiply 0.15 by 80. What is 0.15 × 80?",
          "answer": "12",
          "feedback": "Correct! 0.15 multiplied by 80 is £12."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='40' width='340' height='70' fill='#f9f9f9' stroke='#6699cc' rx='10' ry='10'/><text x='200' y='75' font-family='Arial' font-size='18' fill='#336699' text-anchor='middle'>15% × £80 = £12</text><text x='200' y='110' font-family='Arial' font-size='14' fill='#336699' text-anchor='middle'>(0.15 × 80)</text></svg>"
  },
  "step3": {
    "title": "Calculating Percentage Increase and Decrease",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When increasing an amount by a percentage, multiply by <code>1 + (percentage ÷ 100)</code>. When decreasing, multiply by <code>1 - (percentage ÷ 100)</code>.</p>",
    "workedExample": {
      "title": "Worked Example: Increase £50 by 20%",
      "problem": "Calculate the new amount after increasing £50 by 20%.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 20% to decimal: what is 20 ÷ 100?",
          "answer": "0.2",
          "feedback": "Correct! 20% as a decimal is 0.2."
        },
        {
          "id": "q2",
          "prompt": "Calculate 1 + 0.2.",
          "answer": "1.2",
          "feedback": "Correct! 1 + 0.2 equals 1.2."
        },
        {
          "id": "q3",
          "prompt": "Multiply 1.2 by £50. What is 1.2 × 50?",
          "answer": "60",
          "feedback": "Correct! The new amount is £60."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 120' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='380' height='80' fill='#e6f2ff' stroke='#005c99' rx='12' ry='12'/><text x='200' y='65' font-family='Arial' font-size='18' fill='#003366' font-weight='600' text-anchor='middle'>£50 increased by 20% = £60</text></svg>"
  },
  "step4": {
    "title": "Calculating Percentage Decrease",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the amount after a percentage decrease, multiply the original amount by <code>1 - (percentage ÷ 100)</code>.</p>",
    "workedExample": {
      "title": "Worked Example: Decrease £80 by 25%",
      "problem": "Calculate the new amount after decreasing £80 by 25%.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 25% to a decimal: what is 25 ÷ 100?",
          "answer": "0.25",
          "feedback": "Correct! 25% as a decimal is 0.25."
        },
        {
          "id": "q2",
          "prompt": "Calculate 1 - 0.25.",
          "answer": "0.75",
          "feedback": "Correct! 1 - 0.25 equals 0.75."
        },
        {
          "id": "q3",
          "prompt": "Multiply 0.75 by £80. What is 0.75 × 80?",
          "answer": "60",
          "feedback": "Correct! The new amount after decrease is £60."
        }
      ]
    }
  },
  "step5": {
    "title": "Reverse Percentage Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Reverse percentage problems involve finding the original amount before a percentage increase or decrease was applied. Use the formula: <code>original = new amount ÷ (1 ± percentage as decimal)</code>.</p>",
    "workedExample": {
      "title": "Worked Example: Find original price before 20% increase",
      "problem": "An item now costs £72 after a 20% increase. What was the original price?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 20% to decimal: what is 20 ÷ 100?",
          "answer": "0.2",
          "feedback": "Correct! 20% as a decimal is 0.2."
        },
        {
          "id": "q2",
          "prompt": "Calculate 1 + 0.2.",
          "answer": "1.2",
          "feedback": "Correct! 1.2 is the multiplier after increase."
        },
        {
          "id": "q3",
          "prompt": "Divide £72 by 1.2 to find the original price. What is 72 ÷ 1.2?",
          "answer": "60",
          "feedback": "Correct! The original price was £60."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 120' xmlns='http://www.w3.org/2000/svg'><rect x='5' y='20' width='390' height='80' fill='#fff5e6' stroke='#cc9900' rx='12' ry='12'/><text x='200' y='65' font-family='Arial' font-size='18' fill='#996600' font-weight='600' text-anchor='middle'>£72 ÷ 1.2 = £60 (Original Price)</text></svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A dress is priced at £90 after a 25% discount. Calculate the original price of the dress before the discount was applied.</span>",
      "hint": "Remember to convert the percentage discount to a decimal and add or subtract appropriately when calculating the original value.",
      "mustHaveKeywords": ["reverse percentage", "divide", "1 - decimal percentage", "original price"],
      "optionalKeywords": ["discount", "percentage decrease", "formula"],
      "modelAnswer": "<span>First, convert 25% to a decimal by dividing by 100 to get 0.25. Since the price is after a discount, multiply by (1 - 0.25) = 0.75. To find the original price, divide £90 by 0.75: £90 ÷ 0.75 = £120. Therefore, the original price before the discount was £120.</span>",
      "scaffoldPrompts": [
        "Convert the percentage discount to a decimal.",
        "Calculate the multiplier after discount (1 - decimal).",
        "Divide the discounted price by the multiplier to find original price."
      ]
    }
  }
};