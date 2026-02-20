window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.7 - Estimation and approximation",
  "strapline": "Learn to round numbers, use significant figures, and apply estimation to verify calculations.",
  "learningObjectives": [
    "Students should round numbers to a specified number of decimal places (Maths 1.7)",
    "Students should round numbers to a specified number of significant figures (Maths 1.7)",
    "Students should use estimation to check the reasonableness of calculations (Maths 1.7)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#e8f0fe' stroke='#2a2a2a' stroke-width='2'/><text x='200' y='80' font-family='Arial' font-size='16' text-anchor='middle' fill='#333'>Rounding to Decimal Places</text><text x='60' y='120' font-family='Arial' font-size='14' fill='#555'>3.14159</text><line x1='130' y1='110' x2='130' y2='130' stroke='#f04e4e' stroke-width='2'/><text x='160' y='125' font-family='Arial' font-size='14' fill='#111'>Look at next digit to decide rounding</text><circle cx='130' cy='110' r='5' fill='#f04e4e'/><text x='60' y='170' font-family='Arial' font-size='14' fill='#555'>Rounded to 3 decimal places:</text><text x='220' y='170' font-family='Arial' font-size='14' font-weight='bold' fill='#111'>3.142</text></svg>",
  "step1": {
    "title": "Concept 1: Rounding to Decimal Places",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Decimal places refer to the number of digits after the decimal point. To round a number to a specific number of decimal places, look at the digit immediately after that place. If it is 5 or greater, round the last kept digit up. If less than 5, leave it as is.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine cutting a rope exactly to a certain length. If the rope is just a bit longer than your mark, you trim it to that exact length; otherwise, you keep it as it is.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rounding to 2 Decimal Places",
      "problem": "Round <strong>7.3469</strong> to 2 decimal places.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the 2nd decimal place digit (the second digit after the decimal)?",
          "answer": "4",
          "feedback": "Correct. The 2nd decimal place digit is 4."
        },
        {
          "id": "q2",
          "prompt": "Look at the digit after the 2nd decimal place. Is it 5 or more?",
          "answer": "6",
          "feedback": "Yes, 6 is greater than 5, so we round the 2nd decimal place up."
        },
        {
          "id": "q3",
          "prompt": "After rounding, what is the number to 2 decimal places?",
          "answer": "7.35",
          "feedback": "Correct! 7.3469 rounded to 2 decimal places is 7.35."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Significant figures are the digits that carry meaningful precision. Counting starts from the first non-zero digit. Zeros between or after significant digits can be significant depending on position.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of significant figures as the digits that tell you how exact your measurement is—like measuring a length to the nearest millimeter versus the nearest meter.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Counting Significant Figures",
      "problem": "How many significant figures are in <strong>0.00780</strong>?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the first non-zero digit?",
          "answer": "7",
          "feedback": "Correct. It is 7."
        },
        {
          "id": "q2",
          "prompt": "Count all digits from the first non-zero including zeros that follow. How many significant figures?",
          "answer": "3",
          "feedback": "Correct. The significant figures are 7, 8, and the trailing zero."
        }
      ]
    }
  },
  "step3": {
    "title": "Rounding to a Specified Number of Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When rounding to significant figures, identify how many digits you want to keep starting from the first non-zero digit. Then round according to the next digit after the last kept digit.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of zooming in on a number: the first few digits you see are the most significant and rounding affects the precision of the overall number.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rounding to 3 Significant Figures",
      "problem": "Round <strong>0.045678</strong> to 3 significant figures.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first 3 significant digits.",
          "answer": "456",
          "feedback": "Correct! They are 4, 5, and 6."
        },
        {
          "id": "q2",
          "prompt": "Look at the digit after the third significant figure. Is it 5 or more?",
          "answer": "7",
          "feedback": "Yes, 7 is greater than 5 so we round up."
        },
        {
          "id": "q3",
          "prompt": "Write the number rounded to 3 significant figures.",
          "answer": "0.0457",
          "feedback": "Correct! 0.045678 rounded to 3 significant figures is 0.0457."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept 3: Estimation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimation means finding an approximate value by rounding numbers first to make calculations quicker and easier. Estimation helps check if detailed answers are reasonable to avoid mistakes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like eyeballing the cost of groceries before going to the till to check if the final bill looks correct.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating a Calculation",
      "problem": "Estimate the sum of <strong>67.8</strong> and <strong>52.3</strong> by rounding to 1 decimal place first.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Round 67.8 to 1 decimal place.",
          "answer": "67.8",
          "feedback": "Correct, it stays 67.8."
        },
        {
          "id": "q2",
          "prompt": "Round 52.3 to 1 decimal place.",
          "answer": "52.3",
          "feedback": "Correct, it stays 52.3."
        },
        {
          "id": "q3",
          "prompt": "Estimate the sum of 67.8 and 52.3 (using the rounded values).",
          "answer": "120.1",
          "feedback": "Correct! The estimate for the sum is 120.1."
        }
      ]
    }
  },
  "step5": {
    "title": "Practical Use of Estimation to Check Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimation is useful for spotting errors in complex calculations by simplifying numbers before calculation and comparing the estimate with the exact answer.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like quickly estimating the total cost to check if the receipt looks correct after shopping.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Checking Multiplication by Estimation",
      "problem": "Check if 29.6 × 4.8 = 142.08 seems reasonable using estimation.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Round 29.6 to 1 significant figure.",
          "answer": "30",
          "feedback": "Correct. 29.6 rounds to 30."
        },
        {
          "id": "q2",
          "prompt": "Round 4.8 to 1 significant figure.",
          "answer": "5",
          "feedback": "Correct. 4.8 rounds to 5."
        },
        {
          "id": "q3",
          "prompt": "Estimate the product using the rounded numbers.",
          "answer": "150",
          "feedback": "Correct! 30 × 5 = 150."
        },
        {
          "id": "q4",
          "prompt": "Is 142.08 close to the estimate of 150? Answer 'Yes' or 'No'.",
          "answer": "Yes",
          "feedback": "Correct, 142.08 is close enough to 150, so the calculation is reasonable."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how you would round the number 0.0034627 to 4 significant figures and then use estimation to check if the product of 0.0034627 and 5289 is reasonable.</span>",
      "hint": "Remember to identify significant figures starting from the first non-zero digit, and round each value before multiplying for estimation.",
      "mustHaveKeywords": ["significant figures", "rounding", "estimation", "first non-zero digit", "approximate product"],
      "optionalKeywords": ["precision", "checking calculations", "reasonableness"],
      "modelAnswer": "<span>First, identify the first non-zero digit in 0.0034627, which is 3. To round to 4 significant figures, keep digits 3, 4, 6, and 3, rounding the last digit based on the next digit (2), so the rounded number is 0.003463. Next, for estimation, round 0.0034627 to 0.0035 (2 significant figures) and 5289 to 5300 (2 significant figures). Multiply 0.0035 × 5300 approximately equals 18.55. Check if the exact multiplication is close to this estimate to ensure the calculation is reasonable.</span>",
      "scaffoldPrompts": [
        "Identify the first four significant figures in the number.",
        "Check the digit after the 4th figure to decide on rounding.",
        "Round the numbers for estimation before multiplying.",
        "Compare your estimation to the exact multiplication."
      ]
    }
  }
};