window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.7 - Estimation and approximation (Part 1)",
  "strapline": "Learn how to round numbers and estimate calculations to check answers and simplify problems.",
  "learningObjectives": [
    "Students should be able to round numbers to a specified number of decimal places (Maths 1.7)",
    "Students should be able to round numbers to a specified number of significant figures (Maths 1.7)",
    "Students should be able to estimate answers to calculations by rounding numbers to an appropriate degree of accuracy (Maths 1.7)"
  ],
  "keyFormulas": [
    "Formula 1: a\u00b2 + b\u00b2 = c\u00b2 (Pythagoras)",
    "Formula 2: A = \u03c0r\u00b2 (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='100' text-anchor='middle' font-family='sans-serif' font-size='18'>Rounding to Decimal Places</text><line x1='50' y1='150' x2='350' y2='150' stroke='#666' stroke-width='2'/><circle cx='150' cy='150' r='8' fill='#5294e2'/><text x='150' y='155' text-anchor='middle' fill='#fff' font-family='sans-serif' font-size='16'>3</text><circle cx='200' cy='150' r='8' fill='#5294e2'/><text x='200' y='155' text-anchor='middle' fill='#fff' font-family='sans-serif' font-size='16'>5</text><circle cx='250' cy='150' r='8' fill='#777'/><text x='250' y='155' text-anchor='middle' fill='#fff' font-family='sans-serif' font-size='16'>7</text><text x='150' y='180' text-anchor='middle' font-family='sans-serif' font-size='14'>Decimal Place to Round</text><text x='200' y='180' text-anchor='middle' font-family='sans-serif' font-size='14'>Digit after to Check</text></svg>",
  "step1": {
    "title": "Concept 1: Rounding to Decimal Places",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rounding to decimal places means reducing the number of digits after the decimal point. To do this, look at the digit one place beyond where you want to round. If this digit is 5 or more, round the last kept digit up by one. If it is 4 or less, leave the last kept digit as it is.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have 2.46 apples and want to round to 1 decimal place (tenths). You look at the hundredths place, which is '6'. Because it is 5 or more, you round the 4 (tenths) up to 5, giving 2.5 apples.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rounding to 1 Decimal Place",
      "problem": "Round the number <strong>3.47</strong> to 1 decimal place.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What digit is at the first decimal place?",
          "answer": "4",
          "feedback": "Correct. The first decimal place digit is 4."
        },
        {
          "id": "q2",
          "prompt": "What digit is one place beyond (second decimal place)?",
          "answer": "7",
          "feedback": "Correct. The second decimal place digit is 7."
        },
        {
          "id": "q3",
          "prompt": "Is this digit 5 or more? Type 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Correct. Since 7 is 5 or more, you round up."
        },
        {
          "id": "q4",
          "prompt": "What is 3.4 rounded to 1 decimal place after rounding up?",
          "answer": "3.5",
          "feedback": "Well done! The rounded number is 3.5."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Rounding to Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Significant figures are the meaningful digits in a number starting from the first non-zero digit on the left. When rounding to significant figures, you keep the required number of significant digits and round based on the digit immediately after.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of significant figures as important digits that tell you how precise a measurement is. For example, the number 0.00456 has three significant figures: 4, 5, and 6.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rounding to 2 Significant Figures",
      "problem": "Round the number <strong>0.004567</strong> to 2 significant figures.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first non-zero digit.",
          "answer": "4",
          "feedback": "Correct. The first significant figure is 4."
        },
        {
          "id": "q2",
          "prompt": "What is the second significant figure digit after the 4?",
          "answer": "5",
          "feedback": "Yes, the second significant figure is 5."
        },
        {
          "id": "q3",
          "prompt": "Look at the next digit after the second significant figure (the third). What is it?",
          "answer": "6",
          "feedback": "Correct, the third digit is 6."
        },
        {
          "id": "q4",
          "prompt": "Is this digit 5 or more? Type 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Correct. Since 6 is 5 or more, round the second significant figure up."
        },
        {
          "id": "q5",
          "prompt": "What is the rounded number to 2 significant figures?",
          "answer": "0.0046",
          "feedback": "Good job! The rounded number is 0.0046."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Estimation Using Rounding",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimation involves rounding numbers in a calculation to make the arithmetic easier to do mentally, helping to quickly check if answers are reasonable.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you want to quickly add 48.7 and 33.9 in your head. You round them to 50 and 30, then add 50 + 30 = 80, which is close to the exact answer.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating a Sum",
      "problem": "Estimate the sum of <strong>48.7 + 33.9</strong> by rounding to the nearest 10.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Round 48.7 to the nearest 10.",
          "answer": "50",
          "feedback": "Correct, 48.7 rounded to the nearest 10 is 50."
        },
        {
          "id": "q2",
          "prompt": "Round 33.9 to the nearest 10.",
          "answer": "30",
          "feedback": "Correct, 33.9 rounded to the nearest 10 is 30."
        },
        {
          "id": "q3",
          "prompt": "Add the rounded numbers: 50 + 30 = ?",
          "answer": "80",
          "feedback": "Yes, the estimated sum is 80."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Rounding Decimals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Try rounding the following numbers to the requested decimal places.</p>",
    "workedExample": {
      "title": "Your Turn",
      "problem": "Round 7.286 to 2 decimal places.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the digit at the 2nd decimal place?",
          "answer": "8",
          "feedback": "Correct, the digit is 8."
        },
        {
          "id": "q2",
          "prompt": "What is the digit after the 2nd decimal place?",
          "answer": "6",
          "feedback": "Yes, the digit after is 6."
        },
        {
          "id": "q3",
          "prompt": "Is this digit 5 or more? (Type 'yes' or 'no')",
          "answer": "yes",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "What is 7.286 rounded to 2 decimal places?",
          "answer": "7.29",
          "feedback": "Well done!"
        }
      ]
    }
  },
  "step5": {
    "title": "Practice: Rounding to Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Round the following numbers to 3 significant figures.</p>",
    "workedExample": {
      "title": "Your Turn",
      "problem": "Round 0.007845 to 3 significant figures.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the first non-zero digit?",
          "answer": "7",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "What is the second significant figure digit?",
          "answer": "8",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "What is the third significant figure digit?",
          "answer": "4",
          "feedback": "Good."
        },
        {
          "id": "q4",
          "prompt": "Look at the next digit (fifth significant digit) after the 4. What is it?",
          "answer": "5",
          "feedback": "Correct."
        },
        {
          "id": "q5",
          "prompt": "Is this digit 5 or more? Type 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Yes, so round the third significant figure up."
        },
        {
          "id": "q6",
          "prompt": "What is the rounded number to 3 significant figures?",
          "answer": "0.00785",
          "feedback": "Well done!"
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>You are given the calculation 234.78 \u00d7 0.0569. Explain how you would estimate the answer by rounding, showing your working and justification.</span>",
      "hint": "Remember to round numbers to a suitable degree of accuracy before multiplying.",
      "mustHaveKeywords": ["round", "significant figures", "estimate", "approximate", "calculation"],
      "optionalKeywords": ["checking reasonableness", "mental math"],
      "modelAnswer": "<span>First, round 234.78 to 2 significant figures: 230.<br>Next, round 0.0569 to 2 significant figures: 0.057.<br>Then multiply the rounded numbers: 230 \u00d7 0.057 = 13.11 (approx).<br>This is an estimate of the answer that can be used to check if the exact calculation is reasonable.</span>",
      "scaffoldPrompts": ["Round 234.78 to 2 significant figures.", "Round 0.0569 to 2 significant figures.", "Multiply the rounded numbers to estimate."]
    }
  }
};