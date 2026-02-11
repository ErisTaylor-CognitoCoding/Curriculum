window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.7 - Estimation and approximation (Part 2)",
  "strapline": "Learn how to round, truncate, and estimate calculations accurately and check your answers for reasonableness.",
  "learningObjectives": [
    "Students should be able to estimate answers to calculations by rounding numbers to appropriate degrees of accuracy, including rounding to significant figures and decimal places (Maths 1.7)",
    "Students should be able to check whether calculated answers are reasonable by comparing them to estimated values (Maths 1.7)",
    "Students should be able to truncate numbers and understand the difference between rounding and truncation (Maths 1.7)"
  ],
  "step1": {
    "title": "Concept 1: Significant Figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Significant figures are the meaningful digits in a number that contribute to its precision. The first significant figure is the first non-zero digit from the left. For example, in 0.00456, the first significant figure is 4.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine counting jewels in a necklace. You only count the sparkling jewels (significant figures), not the empty spaces or faint spots.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number: 0.00456</span>",
        "<span>Locate first non-zero digit: 4</span>",
        "<span>First significant figure is 4.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Decimal Places",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Decimal places refer to the number of digits after the decimal point. Rounding to a specific number of decimal places means keeping only that many digits after the decimal point and rounding the last digit appropriately.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of decimal places like levels on a volume knob. Each decimal place adjusts the sound a little more precisely after the main number.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number: 3.4567</span>",
        "<span>Round to 2 decimal places</span>",
        "<span>Look at the 3rd decimal place, 6, which rounds the 2nd place up</span>",
        "<span>Rounded number: 3.46</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Truncation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Truncation means cutting off digits after a certain point without rounding. Unlike rounding, truncation simply removes digits regardless of their value. For example, truncating 3.789 to 1 decimal place gives 3.7, while rounding would give 3.8.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Truncation is like cutting a piece of string at a certain length and ignoring the rest, even if it's almost long enough to add more.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number: 3.789</span>",
        "<span>Truncate to 1 decimal place</span>",
        "<span>Ignore digits after the first decimal place</span>",
        "<span>Result: 3.7</span>"
      ]
    }
  },
  "step4": {
    "title": "Estimating Answers by Rounding",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can make calculations easier by rounding numbers first, then performing the calculation. This helps estimate answers quickly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like approximating travel time by rounding the time intervals to simplest numbers to quickly know when you'll arrive.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate 23.7 + 48.9 exactly</span>",
        "<span>Round 23.7 to 24, round 48.9 to 49</span>",
        "<span>Estimate: 24 + 49 = 73</span>"
      ]
    }
  },
  "step5": {
    "title": "Checking Reasonableness of Answers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">After calculating an exact answer, compare it to your estimate by rounding to check if your answer makes sense.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Checking your work is like double-checking your shopping bill by estimating totals to make sure nothing is way off.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Exact calculation: 199.5 ÷ 4.9 = 40.71 (calculator)</span>",
        "<span>Estimate by rounding: 200 ÷ 5 = 40</span>",
        "<span>Estimated answer is close to exact value, so answer is reasonable.</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of these best describes truncation?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Removing digits without rounding</span>",
            "isCorrect": true,
            "explanation": "Correct, truncation cuts off digits without rounding them."
          },
          {
            "id": "b",
            "label": "<span>Rounding digits up or down</span>",
            "isCorrect": false,
            "explanation": "Incorrect, rounding changes the digit depending on the next digit."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the total number of digits that carry meaning in a number.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "significant_figures",
                "label": "significant figures",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "decimal_places",
                "label": "decimal places",
                "isCorrect": false,
                "feedback": "Try again. Decimal places count digits after the decimal point, not all meaningful digits."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Practice: Estimation by Rounding",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimate the answers by rounding to 2 significant figures or 1 decimal place as indicated.</p>",
    "workedExample": {
      "title": "Try It Yourself",
      "bullets": [
        "<span>Estimate 234.56 + 78.9 by rounding both to 2 significant figures.</span>",
        "<span>Estimate 3.1415 × 2.7 by rounding the first to 3.1 (1 decimal place) and the second to 3 (1 significant figure).</span>"
      ]
    }
  },
  "step9": {
    "title": "Final Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how you would estimate the answer to 153.7 × 6.28 by rounding numbers to appropriate degrees of accuracy, and then how you would check if your exact calculated answer is reasonable. Also explain the difference between rounding and truncation using examples.</span>",
      "hint": "Remember to check your rounding skills on both significant figures and decimal places. Use an example number to show truncation clearly.",
      "mustHaveKeywords": [
        "rounding",
        "significant figures",
        "decimal places",
        "estimate",
        "reasonable",
        "truncation",
        "difference"
      ],
      "optionalKeywords": [
        "calculate",
        "compare",
        "cut off digits",
        "without rounding"
      ],
      "modelAnswer": "<span>First, round 153.7 to 150 (2 significant figures) and 6.28 to 6 (1 decimal place). Estimate the product as 150 × 6 = 900. Then, calculate the exact answer (using a calculator). Compare the exact answer to the estimate; if it is close, the answer is reasonable. Truncation is different from rounding because it just cuts off digits without increasing or decreasing the last retained digit, e.g., truncating 3.789 to 1 decimal place gives 3.7, but rounding would give 3.8.</span>",
      "scaffoldPrompts": [
        "Think about how to round each number first.",
        "Then multiply to estimate.",
        "Calculate the exact answer and compare.",
        "Explain how truncating is different from rounding with an example."
      ]
    }
  }
};