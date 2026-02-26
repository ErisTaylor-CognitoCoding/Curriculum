window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.7 - Estimation and approximation",
  "strapline": "Learn how to round numbers and use estimation to check the reasonableness of calculations.",
  "learningObjectives": [
    "Students should round numbers to a specified number of decimal places (Maths 1.7)",
    "Students should round numbers to a specified number of significant figures (Maths 1.7)",
    "Students should use estimation to check the reasonableness of calculations (Maths 1.7)"
  ],
  "keyFormulas": [
    "Reminder: When rounding to decimal places, check the digit immediately after the last place required",
    "Reminder: Count significant figures starting from the first non-zero digit",
    "Reminder: Estimation simplifies numbers to check answers quickly"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='120' fill='#e0f7fa' stroke='#00796b' stroke-width='2'/><text x='200' y='80' font-family='Arial' font-size='20' fill='#004d40' text-anchor='middle'>Rounding to Decimal Places</text><text x='80' y='120' font-family='Arial' font-size='16' fill='#004d40'>3.146 rounded to 2 dp = 3.15</text><circle cx='183' cy='125' r='8' fill='#004d40'/><text x='180' y='130' font-family='Arial' font-size='14' fill='#fff'>6</text><text x='265' y='120' font-family='Arial' font-size='16' fill='#004d40'>Look at next digit (6) &gt; 5 so round up</text></svg>",
  "step1": {
    "title": "Concept: Rounding to Decimal Places",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rounding to decimal places means reducing the number of digits after the decimal point to a specific amount. Look at the digit immediately after the place you want to round to:</p><ul><li>If it is 5 or more, round up the last digit.</li><li>If it is less than 5, keep the last digit the same.</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like checking if you should give your friend an extra biscuit. If they already have 4, but you have 5 or more biscuits, you give them one more; otherwise, you leave it as it is.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Round 4.6789 to 2 decimal places",
      "problem": "Let's round 4.6789 to 2 decimal places step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What digit is in the 2nd decimal place?",
          "answer": "7",
          "feedback": "Correct! The 2nd decimal place digit is 7."
        },
        {
          "id": "q2",
          "prompt": "What digit is immediately after (the 3rd decimal place)?",
          "answer": "8",
          "feedback": "Yes! The digit at the 3rd decimal place is 8."
        },
        {
          "id": "q3",
          "prompt": "Is this digit 5 or greater? (decide if you round the 2nd decimal place up or keep it the same)",
          "answer": "yes",
          "feedback": "Correct. Since 8 is greater than 5, you round up."
        },
        {
          "id": "q4",
          "prompt": "What is the rounded number to 2 decimal places?",
          "answer": "4.68",
          "feedback": "Well done! The number rounded to 2 decimal places is 4.68."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Rounding to Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Significant figures are the digits that carry meaning in a number, starting from the first non-zero digit. When rounding to significant figures, keep the specified number of digits starting from the first non-zero digit, adjusting the last digit according to the next digit.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a treasure map with important landmarks. You only want the first few landmarks that matter for your journey, ignoring less important details further along the route.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Round 0.004562 to 3 significant figures",
      "problem": "Round the number 0.004562 to 3 significant figures step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first non-zero digit.",
          "answer": "4",
          "feedback": "Correct! The first non-zero digit is 4."
        },
        {
          "id": "q2",
          "prompt": "What is the 2nd significant figure digit?",
          "answer": "5",
          "feedback": "Yes, the second significant figure is 5."
        },
        {
          "id": "q3",
          "prompt": "What is the 3rd significant figure digit?",
          "answer": "6",
          "feedback": "Great! 6 is the third significant figure."
        },
        {
          "id": "q4",
          "prompt": "What digit comes next (4th digit) that will decide rounding?",
          "answer": "2",
          "feedback": "Correct, 2 is the next digit which helps decide rounding."
        },
        {
          "id": "q5",
          "prompt": "Should the 3rd significant figure (6) be rounded up or kept the same?",
          "answer": "keep",
          "feedback": "Correct. Since 2 is less than 5, keep the digit 6."
        },
        {
          "id": "q6",
          "prompt": "Write the rounded number to 3 significant figures.",
          "answer": "0.00456",
          "feedback": "Well done! The number rounded to 3 significant figures is 0.00456."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Using Estimation to Check Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimation means finding an approximate value by rounding numbers to make calculations easier and quicker. This helps you check if your detailed calculations make sense and catch mistakes early.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like guessing the total bill at a restaurant before the receipt arrives, so you know if the charge makes sense.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Estimate 49.7 × 3.98",
      "problem": "Estimate the product of 49.7 and 3.98 by rounding first.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Round 49.7 to nearest whole number.",
          "answer": "50",
          "feedback": "Correct, 49.7 rounds to 50."
        },
        {
          "id": "q2",
          "prompt": "Round 3.98 to nearest whole number.",
          "answer": "4",
          "feedback": "Yes, 3.98 rounds to 4."
        },
        {
          "id": "q3",
          "prompt": "Multiply the rounded values.",
          "answer": "200",
          "feedback": "Correct! 50 × 4 = 200."
        },
        {
          "id": "q4",
          "prompt": "Is the exact answer likely close to 200?",
          "answer": "yes",
          "feedback": "Yes, the actual answer should be close to 200."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>To round 6.378 to 2 decimal places, what is the correct answer?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>6.37</span>",
            "isCorrect": false,
            "explanation": "No, because the 3rd decimal is 8 which means the 2nd decimal place rounds up."
          },
          {
            "id": "b",
            "label": "<span>6.38</span>",
            "isCorrect": true,
            "explanation": "Correct. Since the 3rd decimal place is 8 (>5), round 7 up to 8."
          },
          {
            "id": "c",
            "label": "<span>6.40</span>",
            "isCorrect": false,
            "explanation": "No, rounding to 2 decimal places will not change the 1st decimal place."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>How many significant figures are in the number 0.007450?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>4</span>",
            "isCorrect": true,
            "explanation": "Correct. The significant figures are 7, 4, 5, and the trailing zero counts as significant."
          },
          {
            "id": "b",
            "label": "<span>3</span>",
            "isCorrect": false,
            "explanation": "No. The trailing zero after the 5 counts as a significant figure."
          },
          {
            "id": "c",
            "label": "<span>5</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The leading zeros do not count as significant figures."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> figures are the digits that carry meaningful information about precision.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "decimal",
                "label": "decimal",
                "isCorrect": false,
                "feedback": "Try again. This term refers to digits after the decimal point."
              },
              {
                "value": "significant",
                "label": "significant",
                "isCorrect": true,
                "feedback": "Correct! Significant figures provide precision."
              },
              {
                "value": "approximate",
                "label": "approximate",
                "isCorrect": false,
                "feedback": "No, approximate does not describe digits."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>When rounding to <span class=\"font-semibold\">_____</span> decimal places, you look at the digit immediately to the right of the last place you want to keep.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "exact",
                "label": "exact",
                "isCorrect": false,
                "feedback": "Try again. Exact is not related to rounding."
              },
              {
                "value": "specified",
                "label": "specified",
                "isCorrect": true,
                "feedback": "Correct! You round to the specified decimal places."
              },
              {
                "value": "random",
                "label": "random",
                "isCorrect": false,
                "feedback": "No, rounding is not random."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>You are given the number 0.0237894. Explain how you would round this number to 4 significant figures and then use estimation to check the reasonableness of the rounded number for a multiplication calculation by 12.34.</span>",
      "hint": "Remember to first identify the first non-zero digit for significant figures rounding and use rounding rules. For estimation, round both numbers before multiplying.",
      "mustHaveKeywords": ["significant figures", "rounding", "estimation", "reasonableness"],
      "optionalKeywords": ["approximate", "precision", "check answer"],
      "modelAnswer": "<span>To round 0.0237894 to 4 significant figures, first identify the first 4 digits starting from the first non-zero digit (2, 3, 7, 8). Look at the next digit (9) which is greater than or equal to 5, so round the 8 up to 9. The rounded number is 0.02379. To estimate when multiplying by 12.34, round 0.02379 to 0.024 and 12.34 to 12. Then multiply 0.024 × 12 = 0.288 as an estimation to check if the detailed exact multiplication result is reasonable.</span>",
      "scaffoldPrompts": ["Identify the first 4 significant digits", "Look at the next digit to decide rounding", "Round the number accordingly", "Round the other number for estimation", "Multiply the rounded numbers to estimate"]
    }
  }
};