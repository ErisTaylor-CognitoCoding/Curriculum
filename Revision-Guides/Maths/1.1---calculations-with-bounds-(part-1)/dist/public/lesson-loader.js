window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 1)",
  "strapline": "Understanding rounding bounds and calculations with numbers in standard form.",
  "learningObjectives": [
    "Students should apply and interpret limits of accuracy when rounding or truncating, including upper and lower bounds (Maths 1.1)",
    "Students should calculate with numbers in standard form including multiplying and dividing numbers expressed in standard form (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept: Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> of a rounded number is the largest value the original number could have been before rounding. When a number is rounded to 1 decimal place, the upper bound is found by adding 0.05 to the rounded value. This helps us understand the possible range of the original number.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a jar shown to hold about 2.3 litres of water after rounding. The actual amount could be anywhere up to 2.35 litres, which is like the upper bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with a number rounded to 1 decimal place, e.g. 3.4.</span>",
        "<span>Add 0.05 to find the upper bound: 3.4 + 0.05 = 3.45.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the smallest value the original number could have been before rounding. For a number rounded to 1 decimal place, subtract 0.05 from the rounded value to find the lower bound.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the jar example again, if the jar shows 2.3 litres rounded, it could contain as little as 2.25 litres, which is the lower bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Take the rounded number 3.4.</span>",
        "<span>Subtract 0.05 to find the lower bound: 3.4 - 0.05 = 3.35.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Limits of Accuracy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>limits of accuracy</strong> refer to the range between the lower and upper bounds. This shows all the possible values the original measurement could have had before rounding, which helps identify the maximum possible error in calculations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a bottle is labelled as 1.2 litres (rounded), the actual volume lies between 1.15 and 1.25 litres — the limits of accuracy.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a number rounded to 1 decimal place: 7.8.</span>",
        "<span>Lower bound = 7.8 - 0.05 = 7.75.</span>",
        "<span>Upper bound = 7.8 + 0.05 = 7.85.</span>",
        "<span>Limits of accuracy: 7.75 to 7.85.</span>"
      ]
    }
  },
  "step4": {
    "title": "Calculations with Standard Form: Multiplication",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying numbers in standard form, multiply the decimal parts and add the powers of ten. For example, multiplying 3 × 10<sup>4</sup> by 2 × 10<sup>3</sup> involves multiplying 3 by 2 and adding 4 + 3.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Multiply decimals: 3 × 2 = 6.</span>",
        "<span>Add powers of 10: 10<sup>4</sup> × 10<sup>3</sup> = 10<sup>7</sup>.</span>",
        "<span>Final answer: 6 × 10<sup>7</sup>.</span>"
      ]
    }
  },
  "step5": {
    "title": "Calculations with Standard Form: Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing numbers in standard form, divide the decimal parts and subtract the powers of ten. For example, dividing 8 × 10<sup>5</sup> by 2 × 10<sup>2</sup> involves dividing 8 by 2 and subtracting 5 - 2.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Divide decimals: 8 ÷ 2 = 4.</span>",
        "<span>Subtract powers of 10: 10<sup>5</sup> ÷ 10<sup>2</sup> = 10<sup>3</sup>.</span>",
        "<span>Final answer: 4 × 10<sup>3</sup>.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A number is rounded to 1 decimal place and recorded as 5.6. Calculate the upper and lower bounds of this number. Then, multiply the upper bound by 3.2 × 10<sup>2</sup> and give your answer in standard form. Show your working clearly.</span>",
      "hint": "<span>Remember to first find the bounds by adding and subtracting 0.05, then carefully multiply the numbers in standard form by multiplying the decimals and adding powers of ten.</span>",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiply decimals", "add powers of ten", "standard form"],
      "optionalKeywords": ["limits of accuracy", "final answer"],
      "modelAnswer": "<span>Lower bound = 5.6 - 0.05 = 5.55<br>Upper bound = 5.6 + 0.05 = 5.65<br><br>Multiply upper bound by 3.2 × 10<sup>2</sup>:<br>5.65 × 3.2 = 18.08<br>Express 18.08 × 10<sup>2</sup> in standard form: 1.808 × 10<sup>3</sup><br><br>Final answer: 1.808 × 10<sup>3</sup></span>",
      "scaffoldPrompts": [
        "<span>Step 1: Find the lower bound by subtracting 0.05 from 5.6.</span>",
        "<span>Step 2: Find the upper bound by adding 0.05 to 5.6.</span>",
        "<span>Step 3: Multiply the upper bound decimal by 3.2.</span>",
        "<span>Step 4: Multiply 10<sup>0</sup> by 10<sup>2</sup> (here, powers of ten for 5.65 is 10<sup>0</sup>).</span>",
        "<span>Step 5: Convert the answer into standard form if necessary.</span>"
      ]
    }
  }
};