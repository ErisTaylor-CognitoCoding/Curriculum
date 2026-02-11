window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 1)",
  "strapline": "Understanding limits of accuracy and calculations involving upper and lower bounds and standard form.",
  "learningObjectives": [
    "Students should apply and interpret limits of accuracy when rounding or truncating, including upper and lower bounds (Maths 1.1)",
    "Students should calculate with numbers in standard form including multiplying and dividing numbers expressed in standard form (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept: Understanding Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> of a rounded number is the maximum value the original number could have been before rounding. For example, if a number is rounded to 1 decimal place, the upper bound is found by adding 0.05 to the rounded value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you measure a length and round it to 2.3 cm. The true length could be slightly longer but less than 2.35 cm, so 2.35 cm is the upper bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>The number 4.7 is rounded to 1 decimal place.</span>",
        "<span>Add 0.05 to 4.7: 4.7 + 0.05 = 4.75</span>",
        "<span>Therefore, the upper bound is 4.75.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> of a rounded number is the minimum value the original number could have been before rounding. For a number rounded to 1 decimal place, subtract 0.05 from the rounded value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If the length is recorded as 2.3 cm, the original may be slightly shorter but not less than 2.25 cm, which is the lower bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number: 4.7 rounded to 1 decimal place</span>",
        "<span>Subtract 0.05: 4.7 - 0.05 = 4.65</span>",
        "<span>Hence, the lower bound is 4.65.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Limits of Accuracy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Limits of accuracy refer to the range within which the true value lies before rounding or truncation. This range is between the lower and upper bounds. It helps us understand the maximum possible error in measurements or calculations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If the length is recorded as 4.7 cm ± 0.05 cm, the true length is between 4.65 cm and 4.75 cm.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given value: 5.2 (rounded to 1 decimal place)</span>",
        "<span>Lower bound: 5.2 - 0.05 = 5.15</span>",
        "<span>Upper bound: 5.2 + 0.05 = 5.25</span>",
        "<span>Limits of accuracy: 5.15 ≤ x < 5.25</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Multiplying Numbers in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying numbers in standard form, multiply the significant figures and then add the powers of 10. Finally, adjust the answer so the significant figure is between 1 and 10.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of multiplying 3 × 10<sup>4</sup> by 2 × 10<sup>3</sup>. You multiply 3 by 2 and add 4 and 3 to get 5 × 10<sup>7</sup>.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Multiply (3.2 × 10<sup>4</sup>) by (4 × 10<sup>2</sup>)</span>",
        "<span>Multiply significant figures: 3.2 × 4 = 12.8</span>",
        "<span>Add powers of 10: 4 + 2 = 6</span>",
        "<span>Write result: 12.8 × 10<sup>6</sup></span>",
        "<span>Adjust to standard form: 1.28 × 10<sup>7</sup></span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Dividing Numbers in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing numbers in standard form, divide the significant figures and subtract the powers of 10. Adjust the answer to ensure the significant figure is between 1 and 10.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine dividing 6 × 10<sup>5</sup> by 2 × 10<sup>3</sup>. Divide 6 by 2 and subtract 5 - 3 to get 3 × 10<sup>2</sup>.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Divide (8 × 10<sup>6</sup>) by (2 × 10<sup>3</sup>)</span>",
        "<span>Divide significant figures: 8 ÷ 2 = 4</span>",
        "<span>Subtract powers of 10: 6 - 3 = 3</span>",
        "<span>Write result: 4 × 10<sup>3</sup></span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Calculate the upper and lower bounds for a length measured as 7.4 cm to 1 decimal place. Then multiply the bounds by 3.2 × 10<sup>2</sup> and express your answers in standard form.</span>",
      "hint": "Remember to add or subtract 0.05 for bounds and multiply significant figures and powers of 10 separately.",
      "mustHaveKeywords": [
        "upper bound",
        "lower bound",
        "standard form",
        "multiply",
        "calculate"
      ],
      "optionalKeywords": [
        "power of 10",
        "significant figure",
        "adjust",
        "limits of accuracy"
      ],
      "modelAnswer": "<span>The upper bound for 7.4 is 7.4 + 0.05 = 7.45 cm. The lower bound is 7.4 - 0.05 = 7.35 cm. To multiply, convert to standard form:<br>7.45 × 3.2 × 10<sup>2</sup> = (7.45 × 3.2) × 10<sup>2</sup> = 23.84 × 10<sup>2</sup> = 2.384 × 10<sup>3</sup> cm<br>7.35 × 3.2 × 10<sup>2</sup> = (7.35 × 3.2) × 10<sup>2</sup> = 23.52 × 10<sup>2</sup> = 2.352 × 10<sup>3</sup> cm</span>",
      "scaffoldPrompts": [
        "First, find the upper and lower bounds by adding and subtracting 0.05.",
        "Next, multiply each bound by 3.2 × 10² separately.",
        "Multiply the significant figures and add the powers of ten.",
        "Adjust your answer to proper standard form if needed."
      ]
    }
  }
};