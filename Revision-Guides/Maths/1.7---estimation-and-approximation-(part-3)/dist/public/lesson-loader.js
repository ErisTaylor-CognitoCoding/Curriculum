window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.7 - Estimation and approximation (Part 3)",
  "strapline": "Learn how to estimate answers using rounding and truncation techniques and check if results are reasonable.",
  "learningObjectives": [
    "Students should be able to estimate answers to calculations by rounding numbers to appropriate degrees of accuracy, including rounding to significant figures and decimal places (Maths 1.7)",
    "Students should be able to check whether calculated answers are reasonable by comparing them to estimated values (Maths 1.7)",
    "Students should be able to truncate numbers and understand the difference between rounding and truncation, applying these techniques to real-world problems (Maths 1.7)"
  ],
  "keyFormulas": [
    "Formula 1: a \u00b1 b \u2248 (rounded a) \u00b1 (rounded b) (Estimation by rounding)",
    "Formula 2: Significant Figures - Count digits from 1st non-zero digit onwards",
    "Formula 3: Decimal Places - Number of digits after decimal point"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='150' text-anchor='middle' font-family='sans-serif' font-size='24'>Estimation Concepts</text><circle cx='150' cy='120' r='40' fill='#a8dadc' stroke='#1d3557' stroke-width='3'/><text x='150' y='125' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#1d3557'>Rounding</text><circle cx='250' cy='120' r='40' fill='#ffb4a2' stroke='#e63946' stroke-width='3'/><text x='250' y='125' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#e63946'>Truncation</text><line x1='190' y1='120' x2='210' y2='120' stroke='#555' stroke-width='2' /></svg>",
  "step1": {
    "title": "Concept: Estimation by Rounding",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimation involves replacing numbers with rounded values to find an approximate answer quickly. This helps check if exact calculations make sense.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of estimation like looking at a weather forecast: you don't need the exact temperature to decide your outfit, just a close idea.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating Sum by Rounding",
      "problem": "Estimate the sum of 48.7 and 33.2 by rounding to the nearest whole number.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Round 48.7 to the nearest whole number.",
          "answer": "49",
          "feedback": "Correct. 48.7 rounds up to 49."
        },
        {
          "id": "q2",
          "prompt": "Round 33.2 to the nearest whole number.",
          "answer": "33",
          "feedback": "Correct. 33.2 rounds down to 33."
        },
        {
          "id": "q3",
          "prompt": "Estimate the sum using your rounded numbers: 49 + 33 = ?",
          "answer": "82",
          "feedback": "Correct. The estimate for the sum is 82."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Significant figures show how precise a number is by counting all digits starting from the first non-zero digit.</p>",
    "workedExample": {
      "title": "Worked Example: Rounding to 3 Significant Figures",
      "problem": "Round 0.045678 to 3 significant figures.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first non-zero digit.",
          "answer": "4",
          "feedback": "Correct. The digit '4' is the first non-zero."
        },
        {
          "id": "q2",
          "prompt": "Write the first 3 significant digits.",
          "answer": "456",
          "feedback": "Correct. The first three digits are 4, 5, 6."
        },
        {
          "id": "q3",
          "prompt": "Now round 0.045678 to 3 significant figures.",
          "answer": "0.0457",
          "feedback": "Correct. Rounded to 3 s.f., it is 0.0457."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Rounding to Decimal Places",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rounding to decimal places means keeping a specified number of digits after the decimal point and adjusting the last kept digit.</p>",
    "workedExample": {
      "title": "Worked Example: Rounding to 2 Decimal Places",
      "problem": "Round 12.3467 to 2 decimal places.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Look at the 3rd decimal digit to decide rounding: what is it?",
          "answer": "6",
          "feedback": "Correct. The 3rd digit after decimal is 6."
        },
        {
          "id": "q2",
          "prompt": "Since 6 \u2265 5, round the 2nd decimal digit up. What does 12.3467 round to?",
          "answer": "12.35",
          "feedback": "Correct. Rounding up the 2nd digit results in 12.35."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Truncation vs Rounding",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Truncation cuts off numbers after a certain point without changing the last retained digit, different from rounding which may adjust it.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Truncation is like cutting a banana at a specific spot without peeling or adjusting its length, whereas rounding is like trimming to the nearest full banana.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Truncating a Number",
      "problem": "Truncate 7.689 to 2 decimal places.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the first two decimal digits?",
          "answer": "68",
          "feedback": "Correct. The digits after decimal are 6 and 8."
        },
        {
          "id": "q2",
          "prompt": "Write the truncated number to 2 decimal places.",
          "answer": "7.68",
          "feedback": "Good job. Truncation keeps the digits as is without rounding."
        }
      ]
    }
  },
  "step5": {
    "title": "Check Reasonableness of Answers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">After calculating an exact answer, estimate it to see if the result is sensible.</p>",
    "workedExample": {
      "title": "Worked Example: Verify by Estimation",
      "problem": "Exact answer: 29.84 + 14.96 = 44.8. Is this reasonable?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Estimate each number by rounding to the nearest whole number.",
          "answer": "30, 15",
          "feedback": "Correct. 29.84 rounds to 30, 14.96 rounds to 15."
        },
        {
          "id": "q2",
          "prompt": "Add the estimated numbers: 30 + 15 = ?",
          "answer": "45",
          "feedback": "Excellent. The estimate is 45."
        },
        {
          "id": "q3",
          "prompt": "Is the exact answer 44.8 close to your estimate?",
          "answer": "Yes",
          "feedback": "Good. Since 44.8 is close to 45, the exact answer is reasonable."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A shopkeeper calculates the total price of two items as £78.44 + £43.29. Estimate the total by rounding each to 1 decimal place, then compare the estimate to the exact sum. Explain how you check if the total is reasonable.</span>",
      "hint": "Remember to round each number to 1 decimal place and then add. Compare this to the exact answer by subtracting and considering the difference.",
      "mustHaveKeywords": ["rounding", "decimal places", "estimate", "reasonable"],
      "optionalKeywords": ["difference", "check", "comparison"],
      "modelAnswer": "<span>First, round each price to 1 decimal place: £78.44 rounds to £78.4 and £43.29 rounds to £43.3. Adding these gives an estimated total of £121.7. The exact total is £78.44 + £43.29 = £121.73. Since the estimate and exact total differ by only £0.03, the exact answer is reasonable. Estimation by rounding helps quickly check calculations.</span>",
      "scaffoldPrompts": ["Round both numbers to 1 decimal place.", "Add the rounded numbers.", "Find the exact total.", "Compare the estimate and exact total to check reasonableness."]
    }
  }
};