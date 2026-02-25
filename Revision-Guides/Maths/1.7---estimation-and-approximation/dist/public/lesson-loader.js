window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.7 - Estimation and approximation",
  "strapline": "Learn to round numbers, use significant figures, and estimate answers to check calculations.",
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
  "diagramHtml": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='460' height='260' fill='#f9f9f9' stroke='#333' rx='15' ry='15'/><text x='250' y='50' text-anchor='middle' font-family='sans-serif' font-size='18' font-weight='bold'>Rounding to Decimal Places</text><text x='250' y='90' text-anchor='middle' font-family='sans-serif' font-size='14'>Number: 3.14159265</text><line x1='180' y1='110' x2='320' y2='110' stroke='#777' stroke-width='1' marker-end='url(#arrow)'/><text x='250' y='140' text-anchor='middle' font-family='sans-serif' font-size='14'>Round to 3 decimal places = 3.142</text><defs><marker id='arrow' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#777'/></marker></defs></svg>",
  "step1": {
    "title": "Understanding Decimal Places",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Decimal places are the digits that come after the decimal point in a number. For example, in <strong>4.673</strong>, there are 3 decimal places. To round a number to a certain decimal place, look at the digit immediately after the place you want to round to. If that digit is 5 or more, round up; if less, round down.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of decimal places as seats after the decimal ‘gate’. Rounding is like deciding if someone sitting just beyond the last seat should 'step up' onto that seat or stay put.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rounding to 2 Decimal Places",
      "problem": "Round <strong>5.6789</strong> to 2 decimal places.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the digit in the 2nd decimal place?",
          "answer": "7",
          "feedback": "Correct! The second decimal place digit is 7."
        },
        {
          "id": "q2",
          "prompt": "Look at the next digit (3rd decimal place). What is it?",
          "answer": "8",
          "feedback": "Correct! The digit after the 2nd decimal place is 8."
        },
        {
          "id": "q3",
          "prompt": "Since the next digit is 8, will you round the 7 (2nd decimal place) up or leave it?",
          "answer": "Round up",
          "feedback": "Correct! Because 8 is 5 or more, the 7 rounds up to 8."
        },
        {
          "id": "q4",
          "prompt": "What is the final rounded number?",
          "answer": "5.68",
          "feedback": "Exactly! 5.6789 rounded to 2 decimal places is 5.68."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Significant figures (sig figs) show the precision of a number. Count from the first non-zero digit onwards. For instance, 0.00456 has 3 significant figures (4, 5, and 6). Zeroes between or after digits may or may not count depending on their position.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of significant figures like important pieces of a puzzle. Only these pieces tell you exactly how precise your number is.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Counting Significant Figures",
      "problem": "How many significant figures are in the number <strong>0.00720</strong>?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first non-zero digit.",
          "answer": "7",
          "feedback": "Correct! The first non-zero digit is 7."
        },
        {
          "id": "q2",
          "prompt": "Now count all digits from the 7 to the end.",
          "answer": "3",
          "feedback": "Yes! The digits 7, 2, and the trailing zero count, giving 3 significant figures."
        }
      ]
    }
  },
  "step3": {
    "title": "Rounding to a Specified Number of Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When rounding to significant figures, keep the specified number starting from the first non-zero digit. Round the last digit according to the digit that follows it.</p>",
    "workedExample": {
      "title": "Worked Example: Round 0.004568 to 2 Significant Figures",
      "problem": "Round <strong>0.004568</strong> to 2 significant figures.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first 2 significant figures (digits).",
          "answer": "4 and 5",
          "feedback": "Correct! The first two sig figs are digits 4 and 5."
        },
        {
          "id": "q2",
          "prompt": "Look at the third significant digit after the first two. What is it?",
          "answer": "6",
          "feedback": "Yes, the third digit is 6."
        },
        {
          "id": "q3",
          "prompt": "Since it is 6 (>=5), do you round the second digit (5) up or keep it?",
          "answer": "Round up",
          "feedback": "Correct! The 5 rounds up to 6."
        },
        {
          "id": "q4",
          "prompt": "Write the rounded number to 2 significant figures.",
          "answer": "0.0046",
          "feedback": "Excellent! Rounded to 2 significant figures, the number is 0.0046."
        }
      ]
    }
  },
  "step4": {
    "title": "Using Estimation to Check Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimation helps us check if our detailed calculations are reasonable by quickly rounding numbers and doing approximate calculations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like taking a quick glance at a map to plan a route before driving in detail.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimate and Check",
      "problem": "Estimate the result of 48.7 × 3.95 and compare with the exact answer.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Round the numbers to 1 significant figure for estimation.",
          "answer": "50 and 4",
          "feedback": "Correct! 48.7 rounds to 50, and 3.95 rounds to 4."
        },
        {
          "id": "q2",
          "prompt": "Estimate the product using these rounded numbers.",
          "answer": "200",
          "feedback": "Good! 50 × 4 = 200."
        },
        {
          "id": "q3",
          "prompt": "Why is this estimate useful before you calculate exactly?",
          "answer": "To check if the exact answer is sensible",
          "feedback": "Exactly! Estimation helps check if detailed results make sense."
        }
      ]
    }
  },
  "step5": {
    "title": "Common Mistakes and Tips",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Avoid counting zeros incorrectly in significant figures. Always identify the first non-zero digit. When estimating, use appropriate rounding levels—too rough, and you lose accuracy; too detailed, and you lose speed.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of estimation like using a street lamp, not a torch—you want a broad light, not a focused beam.</p>"
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Round 0.023476 to 3 significant figures and then estimate the product of 24.53 and 7.98 using suitable rounding. Explain how estimation helps check your detailed calculation.</span>",
      "hint": "Remember to identify the first non-zero digit when rounding significant figures and choose rounding levels that simplify the numbers for estimation.",
      "mustHaveKeywords": ["significant figures", "rounding", "estimation", "check", "reasonableness"],
      "optionalKeywords": ["decimal places", "approximate", "calculation"],
      "modelAnswer": "<span>To round 0.023476 to 3 significant figures, identify the first three non-zero digits: 2, 3, and 4. The fourth digit is 7 which rounds the third digit up, so the rounded number is 0.0235. For estimation, round 24.53 to 25 and 7.98 to 8, then multiply to get approximately 200. Estimation helps check the reasonableness of calculations by providing a quick approximate answer that the exact calculation should be close to, making errors easier to spot.</span>",
      "scaffoldPrompts": [
        "Identify the first three significant digits in 0.023476",
        "Decide whether to round up based on the next digit",
        "Round 24.53 and 7.98 to suitable numbers for estimation",
        "Multiply your rounded numbers",
        "Explain why estimation is useful in calculations"
      ]
    }
  }
};