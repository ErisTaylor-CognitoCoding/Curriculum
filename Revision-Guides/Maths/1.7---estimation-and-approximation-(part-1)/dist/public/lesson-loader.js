window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.7 - Estimation and approximation (Part 1)",
  "strapline": "Learn to round numbers and estimate answers effectively using decimals, significant figures, and rounding techniques.",
  "learningObjectives": [
    "Students should be able to round numbers to a specified number of decimal places (Maths 1.7)",
    "Students should be able to round numbers to a specified number of significant figures (Maths 1.7)",
    "Students should be able to estimate answers to calculations by rounding numbers to an appropriate degree of accuracy (Maths 1.7)"
  ],
  "step1": {
    "title": "Concept 1: Rounding to Decimal Places",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rounding to decimal places means reducing the number of digits after the decimal point. To round to a certain decimal place, look at the digit just one place beyond where you want to round: if it is 5 or more, round the last kept digit up; if it is 4 or less, keep the last digit the same.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine measuring water to fill a bottle. You fill it carefully but if a tiny bit is left over, less than half a teaspoon, you ignore it. If it is more, you add enough to reach the next full teaspoon. That's like rounding decimals!</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Round 3.146 to 2 decimal places.</span>",
        "<span>Look at the 3rd decimal digit (6). Since 6 ≥ 5, round the 2nd decimal digit (4) up to 5.</span>",
        "<span>The rounded number is 3.15.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Significant figures are the digits that carry meaning in a number, starting from the first non-zero digit on the left. Significant figures include all digits from that digit onwards, including zeros between non-zero digits but not leading zeros.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of significant figures like the characters in a story. Zeros at the start are like silent extras and don’t count, but zeros between characters are important supporting roles and count as significant.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Round 0.004562 to 3 significant figures.</span>",
        "<span>Identify the first non-zero digit: 4 (4 is the 1st significant figure).</span>",
        "<span>Keep 3 digits: 4, 5, and 6.</span>",
        "<span>The rounded number is 0.00456.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Estimation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimation involves finding an approximate answer by rounding numbers to easier values. This is useful for quick calculations and checking if an exact answer makes sense.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you are guessing how many candies are in a jar, you wouldn’t count each one exactly but estimate by grouping and rounding to simpler numbers.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Estimate 47.6 + 32.9 by rounding numbers.</span>",
        "<span>Round 47.6 to 50 and 32.9 to 30.</span>",
        "<span>Add the rounded numbers: 50 + 30 = 80.</span>",
        "<span>The estimate is 80, easier to calculate mentally.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is 12.678 rounded to 2 decimal places?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>12.68</span>",
            "isCorrect": true,
            "explanation": "<span>The third decimal digit (8) is ≥ 5, so round the second decimal digit (7) up by one.</span>"
          },
          {
            "id": "b",
            "label": "<span>12.67</span>",
            "isCorrect": false,
            "explanation": "<span>This rounds down incorrectly because the digit after the 2nd decimal place is 8.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the first non-zero digit that determines significant figures in a number.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "first significant figure",
                "label": "first significant figure",
                "isCorrect": true,
                "feedback": "Correct! This digit starts the count of significant figures."
              },
              {
                "value": "decimal place",
                "label": "decimal place",
                "isCorrect": false,
                "feedback": "Try again. Decimal place relates to position after the decimal point, not significance."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-2",
        "sentence": "<span>When rounding to decimal places, if the digit just after the rounding place is <span class=\"font-semibold\">_____</span> or more, round up the digit to keep.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "5",
                "label": "5",
                "isCorrect": true,
                "feedback": "Correct! Digits 5 or greater cause rounding up."
              },
              {
                "value": "4",
                "label": "4",
                "isCorrect": false,
                "feedback": "Try again. 4 or less means round down."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>Round 0.007849 to 2 significant figures.</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>0.0078</span>",
            "isCorrect": false,
            "explanation": "<span>This only keeps two digits but misses the rounding up from the third significant figure.</span>"
          },
          {
            "id": "b",
            "label": "<span>0.0078</span>",
            "isCorrect": false,
            "explanation": "<span>Same as option a, still incorrect with rounding.</span>"
          },
          {
            "id": "c",
            "label": "<span>0.0078</span>",
            "isCorrect": false,
            "explanation": "<span>Repeated incorrect answer, select carefully.</span>"
          },
          {
            "id": "d",
            "label": "<span>0.0078</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect due to lack of rounding.</span>"
          },
          {
            "id": "e",
            "label": "<span>0.0078</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect, no rounding applied.</span>"
          },
          {
            "id": "f",
            "label": "<span>0.0078</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect, rounding missing.</span>"
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Estimation Practice",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Practice estimating the answer to calculations by rounding the numbers first to sensible values.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Estimate 253.7 × 3.1</span>",
        "<span>Round 253.7 to 250 and 3.1 to 3</span>",
        "<span>Multiply 250 × 3 = 750</span>",
        "<span>Estimate answer is approximately 750.</span>"
      ]
    }
  },
  "step9": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-3",
        "question": "<span>Estimate the sum of 87.9 and 46.4 by rounding to nearest whole numbers.</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>130</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect, 87.9 rounds up and 46.4 rounds down, so check sum.</span>"
          },
          {
            "id": "b",
            "label": "<span>135</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! 87.9 rounds to 88, 46.4 rounds to 46, 88 + 46 = 134 close to 135.</span>"
          },
          {
            "id": "c",
            "label": "<span>140</span>",
            "isCorrect": false,
            "explanation": "<span>Too high based on rounding rules.</span>"
          }
        ]
      }
    ]
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to round 0.005276 to 3 significant figures and then estimate the sum of 0.005276 and 0.002158 by rounding appropriately.</span>",
      "hint": "Remember to identify the first non-zero digit for significant figures and consider sensible rounding for estimation.",
      "mustHaveKeywords": [
        "significant figures",
        "first non-zero digit",
        "rounding",
        "estimate",
        "approximate"
      ],
      "optionalKeywords": [
        "decimal places",
        "mental calculation",
        "check"
      ],
      "modelAnswer": "<span>To round 0.005276 to 3 significant figures, first identify the first non-zero digit which is 5. Then keep three digits starting from 5: '5', '2', and '7'. Looking at the fourth digit '6' (which is 5 or more), round the last kept digit up. So the number becomes 0.00528. To estimate the sum of 0.005276 and 0.002158, round both numbers to an appropriate degree of accuracy, for example to 3 significant figures, giving 0.00528 and 0.00216. Adding these gives approximately 0.00744. This method helps to find an approximate answer quickly for checking calculations.</span>",
      "scaffoldPrompts": [
        "Identify the first non-zero digit in 0.005276.",
        "Select the next two digits to include for 3 significant figures.",
        "Check the digit after the third significant figure to decide to round up or down.",
        "Round both numbers to a suitable accuracy for easy addition.",
        "Add the rounded numbers for an estimate."
      ]
    }
  }
};