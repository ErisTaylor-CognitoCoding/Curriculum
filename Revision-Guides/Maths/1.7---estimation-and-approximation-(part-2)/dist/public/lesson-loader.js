window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.7 - Estimation and approximation (Part 2)",
  "strapline": "Develop skills to estimate calculations through rounding to significant figures and decimal places, check the reasonableness of answers using estimation, and understand truncation.",
  "learningObjectives": [
    "Students should be able to estimate answers to calculations by rounding numbers to appropriate degrees of accuracy, including rounding to significant figures and decimal places (Maths 1.7)",
    "Students should be able to check whether calculated answers are reasonable by comparing them to estimated values (Maths 1.7)",
    "Students should be able to truncate numbers and understand the difference between rounding and truncation (Maths 1.7)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='90' text-anchor='middle' font-family='sans-serif' font-weight='bold'>Rounding &amp; Truncation</text><text x='200' y='130' text-anchor='middle' font-family='sans-serif'>Significant Figures</text><line x1='100' y1='150' x2='300' y2='150' stroke='#333' stroke-width='2' /><circle cx='150' cy='180' r='15' fill='#3b82f6' /><text x='150' y='185' font-family='sans-serif' fill='#fff' font-size='16' text-anchor='middle'>4</text><circle cx='250' cy='180' r='15' fill='#ef4444' /><text x='250' y='185' font-family='sans-serif' fill='#fff' font-size='16' text-anchor='middle'>5</text><text x='150' y='220' font-family='sans-serif' font-size='12' text-anchor='middle'>First sig fig</text><text x='250' y='220' font-family='sans-serif' font-size='12' text-anchor='middle'>Second sig fig</text></svg>",
  "step1": {
    "title": "Understanding Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Significant figures are the meaningful digits that show the precision of a number. The first significant figure is the first non-zero digit from the left. For example, in <strong>0.00456</strong>, the digits <strong>4</strong>, <strong>5</strong>, and <strong>6</strong> are significant, and the first significant figure is 4.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of significant figures like the important ingredients in a recipe. Even if there are small amounts of other ingredients, the key ones determine the final taste, just like significant figures decide a number's accuracy.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Significant Figures",
      "problem": "Identify the first significant figure in the number <strong>0.00456</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the first non-zero digit in 0.00456?",
          "answer": "4",
          "feedback": "Correct. The first significant figure is 4."
        },
        {
          "id": "q2",
          "prompt": "How many significant figures are in 0.00456?",
          "answer": "3",
          "feedback": "Correct. The significant figures are 4, 5, and 6."
        }
      ]
    }
  },
  "step2": {
    "title": "Rounding to Decimal Places",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Decimal places refer to how many digits appear after the decimal point. When rounding to a certain number of decimal places, keep only that many digits after the decimal and round the last digit according to the digit following it.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine cutting a ribbon to a certain length with precision. Rounding decimal places is like saying you only need it precise to a centimetre and ignoring smaller lengths.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rounding to 2 Decimal Places",
      "problem": "Round the number <strong>3.1467</strong> to 2 decimal places.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Look at the 3rd decimal place (thousandths). What is this digit?",
          "answer": "6",
          "feedback": "Correct. The 3rd decimal place digit is 6."
        },
        {
          "id": "q2",
          "prompt": "Since it's 6, should the 2nd decimal place digit be rounded up or stay the same? (Yes = round up, No = stay the same)",
          "answer": "Yes",
          "feedback": "Correct. Because the 3rd decimal place digit is 5 or more, we round up the 2nd decimal place."
        },
        {
          "id": "q3",
          "prompt": "What is the rounded number to 2 decimal places?",
          "answer": "3.15",
          "feedback": "Correct! The number rounded to 2 decimal places is 3.15."
        }
      ]
    }
  },
  "step3": {
    "title": "Rounding to Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rounding to significant figures means adjusting the number to keep a certain count of meaningful digits, starting from the first non-zero digit. Digits beyond that count are rounded appropriately.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you only have space to write a few important digits on a label, so you keep the most important numbers and round the rest.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rounding to 3 Significant Figures",
      "problem": "Round the number <strong>0.0045678</strong> to 3 significant figures.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the 3rd significant digit?",
          "answer": "7",
          "feedback": "Correct. The first three significant digits are 4, 5, and 7."
        },
        {
          "id": "q2",
          "prompt": "Look at the digit after the 3rd significant figure (which is the 4th sig fig). What is this digit?",
          "answer": "8",
          "feedback": "Correct. The 4th significant figure digit is 8."
        },
        {
          "id": "q3",
          "prompt": "Should you round the 3rd significant figure up or keep it the same? (Yes = round up, No = keep the same)",
          "answer": "Yes",
          "feedback": "Correct. Since 8 is greater than 5, round the 7 up."
        },
        {
          "id": "q4",
          "prompt": "Write the rounded number to 3 significant figures.",
          "answer": "0.00457",
          "feedback": "Correct! The rounded number is 0.00457."
        }
      ]
    }
  },
  "step4": {
    "title": "Understanding Truncation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Truncation means cutting off digits after a certain point without changing the last kept digit. Unlike rounding, truncated numbers just drop the extra digits without increasing the last digit.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like cutting off extra pieces of string exactly where you want, ignoring their length, instead of adjusting the string length slightly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Truncating a Number",
      "problem": "Truncate the number <strong>3.789</strong> to 1 decimal place.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the digit in the 1st decimal place?",
          "answer": "7",
          "feedback": "Correct. The digit in the 1st decimal place is 7."
        },
        {
          "id": "q2",
          "prompt": "What digit(s) will be removed when truncating to 1 decimal place?",
          "answer": "8 and 9",
          "feedback": "Correct. The digits 8 and 9 will be removed."
        },
        {
          "id": "q3",
          "prompt": "What is the truncated number to 1 decimal place?",
          "answer": "3.7",
          "feedback": "Correct! The truncated number is 3.7."
        }
      ]
    }
  },
  "step5": {
    "title": "Checking Reasonableness of Answers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can check if an answer is reasonable by estimating using rounding and comparing the estimate to the calculated value. If they are close or follow the estimation logic, the answer is likely correct.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like estimating the total cost of shopping before checking your receipt; if the receipt is wildly different, you know to check again.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimation Check",
      "problem": "Estimate the product of 29.6 and 4.98 by rounding both to 1 significant figure and then check if the exact product 147.408 is reasonable.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Round 29.6 to 1 significant figure.",
          "answer": "30",
          "feedback": "Correct. 29.6 rounds to 30."
        },
        {
          "id": "q2",
          "prompt": "Round 4.98 to 1 significant figure.",
          "answer": "5",
          "feedback": "Correct. 4.98 rounds to 5."
        },
        {
          "id": "q3",
          "prompt": "Multiply your rounded numbers: 30 × 5 = ?",
          "answer": "150",
          "feedback": "Correct, your estimate is 150."
        },
        {
          "id": "q4",
          "prompt": "Is the exact product 147.408 close to your estimate of 150? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct! The exact answer is very close to the estimate, so it is reasonable."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to round the number 0.027849 to 3 significant figures, then truncate the same number to 3 decimal places. Finally, check if the value 0.0278 is a reasonable estimate for 0.027849 by comparing the two.</span>",
      "hint": "Remember to identify significant figures carefully and understand the difference between rounding and truncation. Check the digits you keep and remove in each step.",
      "mustHaveKeywords": ["significant figures", "truncate", "rounding", "estimate", "comparison"],
      "optionalKeywords": ["decimal places", "digits"],
      "modelAnswer": "<span>To round 0.027849 to 3 significant figures, identify the first three significant digits (2, 7, and 8), then round based on the 4th digit (which is 4). Since 4 is less than 5, keep the 3rd digit as 8, so the rounded number is 0.0278. To truncate 0.027849 to 3 decimal places, keep the first three digits after the decimal point (0.027) and remove all following digits without rounding, so it becomes 0.027. The estimate 0.0278 is close to the original number and is reasonable because it preserves precision through rounding, whereas truncation simply cuts off digits.</span>",
      "scaffoldPrompts": ["Identify the first three significant figures in the number.", "Decide how to round based on the next digit.", "Explain truncation and identify which digits remain.", "Compare rounded and truncated values to the original number."]
    }
  }
};