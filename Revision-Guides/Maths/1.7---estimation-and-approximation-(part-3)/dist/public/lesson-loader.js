window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.7 - Estimation and approximation (Part 3)",
  "strapline": "Master the art of rounding, truncating, and estimating to check answers and solve problems efficiently.",
  "learningObjectives": [
    "Students should be able to estimate answers to calculations by rounding numbers to appropriate degrees of accuracy, including rounding to significant figures and decimal places (Maths 1.7)",
    "Students should be able to check whether calculated answers are reasonable by comparing them to estimated values (Maths 1.7)",
    "Students should be able to truncate numbers and understand the difference between rounding and truncation, applying these techniques to real-world problems (Maths 1.7)"
  ],
  "step1": {
    "title": "Concept: Estimation by rounding",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimation involves replacing exact numbers with rounded ones to quickly find an approximate answer. This helps in checking whether detailed calculations are sensible without needing full accuracy.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you want to know roughly how many apples are in a basket without counting each one; rounding the count to the nearest ten gives you a quick estimate.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Original numbers: 48 + 97</span>",
        "<span>Round 48 to 50 and 97 to 100</span>",
        "<span>Estimated sum: 50 + 100 = 150</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Significant figures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Significant figures count all meaningful digits in a number, starting from the first non-zero digit. Rounding to significant figures means adjusting a number to keep its important information while reducing less important detail.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a photograph where only the most important parts are in focus; significant figures keep only those important details clear.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number: 0.004356</span>",
        "<span>Round to 3 significant figures: 0.00436 (digits are 4, 3, 6)</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Decimal places",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Decimal places refer to digits following the decimal point. Rounding to decimal places means keeping a fixed number of digits after the decimal point to control accuracy.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like measuring ingredients in cooking to a certain decimal place ensures the right amount without overcomplicating the recipe.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number: 3.14159</span>",
        "<span>Round to 2 decimal places: 3.14</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Checking if answers are reasonable",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">After calculating an exact answer, compare it with an estimated result to verify if it makes sense. Large differences indicate possible errors in calculation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you expect your shopping bill to be around $50 and the receipt shows $500, you would double-check for mistakes.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Exact calculation: 98.7 × 2.05 = 202.335</span>",
        "<span>Estimate by rounding: 100 × 2 = 200</span>",
        "<span>Since 202.335 is close to 200, the answer is reasonable</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Truncation vs Rounding",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Truncation cuts off digits after a certain decimal place without changing the previous digits, while rounding adjusts the last kept digit based on the first dropped digit.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Truncation is like chopping off extra digits like cutting off the end of a rope; rounding is like deciding whether to tie a knot to increase length or cut it shorter.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number: 4.768</span>",
        "<span>Truncate to 2 decimal places: 4.76</span>",
        "<span>Round to 2 decimal places: 4.77</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Estimate the product of 53.428 and 7.09 by rounding to 3 significant figures. Then calculate the exact product and explain whether the answer is reasonable. Finally, truncate the exact answer to 2 decimal places and explain the difference between rounding and truncation in this context.</span>",
      "hint": "Remember to: round both numbers to 3 significant figures, multiply, then compare your estimate with your exact answer before truncating the final result.",
      "mustHaveKeywords": ["rounding", "significant figures", "estimate", "truncate", "reasonable", "comparison"],
      "optionalKeywords": ["decimal places", "approximate"],
      "modelAnswer": "<span>First, round 53.428 to 3 significant figures = 53.4 and 7.09 to 3 significant figures = 7.09 (already at 3 sf). Estimated product = 53.4 × 7.09 ≈ 378.6. Calculating exactly: 53.428 × 7.09 = 378.65852. The exact answer is close to the estimate, so it is reasonable. Truncating to 2 decimal places gives 378.65, which cuts off digits without rounding up. Rounding would have increased the last digit if the following digit was 5 or more, while truncation simply removes extra digits.</span>",
      "scaffoldPrompts": [
        "Step 1: Round each number to 3 significant figures.",
        "Step 2: Multiply the rounded numbers to estimate.",
        "Step 3: Calculate the exact product.",
        "Step 4: Compare estimate and exact to check reasonableness.",
        "Step 5: Truncate the exact product to 2 decimal places.",
        "Step 6: Explain differences between truncation and rounding."
      ]
    }
  }
};