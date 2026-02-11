window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 1)",
  "strapline": "Learn how to apply limits of accuracy and calculate with standard form numbers including multiplying and dividing.",
  "learningObjectives": [
    "Students should apply and interpret limits of accuracy when rounding or truncating, including upper and lower bounds (Maths 1.1)",
    "Students should calculate with numbers in standard form including multiplying and dividing numbers expressed in standard form (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept: Understanding Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> is the largest value that a number could have before it was rounded or truncated. For example, if a number is rounded to 1 decimal place, adding 0.05 to that number gives the upper bound.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the upper bound as the highest possible height a person could be before you rounded their height down. If you round someone's height to 1 decimal place as 1.2 m, their real height could be just less than 1.25 m (the upper bound).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number given: 4.3 (rounded to 1 decimal place)</span>",
        "<span>Calculate upper bound: 4.3 + 0.05 = 4.35</span>",
        "<span>So, the upper bound is 4.35</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the smallest value that a number could have before rounding or truncating. For a number rounded to 1 decimal place, subtracting 0.05 from that number gives the lower bound.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the lower bound as the shortest possible height of the person before rounding their height. If the rounded height is 4.3 m, the real height could be as low as 4.25 m (the lower bound).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number given: 4.3 (rounded to 1 decimal place)</span>",
        "<span>Calculate lower bound: 4.3 - 0.05 = 4.25</span>",
        "<span>So, the lower bound is 4.25</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Limits of Accuracy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>limits of accuracy</strong> describe the range of values that the original measurement could be, based on the rounding or truncation applied. This range lies between the lower and upper bounds.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Limits of accuracy are like the blurry edges on a photo; you know the object is somewhere between those edges. For example, a length recorded as 4.3 m (rounded) means the real length is between 4.25 m and 4.35 m.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Rounded number: 4.3 (to 1 decimal place)</span>",
        "<span>Lower bound: 4.3 - 0.05 = 4.25</span>",
        "<span>Upper bound: 4.3 + 0.05 = 4.35</span>",
        "<span>Limits of accuracy: 4.25 &lt; number &lt; 4.35</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Multiplying Numbers in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying numbers in standard form, multiply the decimal parts first and then add the powers of 10 exponents.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like multiplying the base amounts first, then combining the scale factors (powers of 10) by adding their exponents.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Multiply (3 × 10<sup>4</sup>) by (2 × 10<sup>3</sup>)</span>",
        "<span>Multiply the decimals: 3 × 2 = 6</span>",
        "<span>Add the exponents: 4 + 3 = 7</span>",
        "<span>Result: 6 × 10<sup>7</sup></span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Dividing Numbers in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing numbers in standard form, divide the decimal parts and subtract the exponents of 10 in the denominator from those in the numerator.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it as dividing the basic numbers first, then subtracting the scales (exponents) to find the final scale.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Divide (6 × 10<sup>5</sup>) by (2 × 10<sup>2</sup>)</span>",
        "<span>Divide the decimals: 6 ÷ 2 = 3</span>",
        "<span>Subtract the exponents: 5 - 2 = 3</span>",
        "<span>Result: 3 × 10<sup>3</sup></span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A length is recorded as 5.6 m, rounded to 1 decimal place. Calculate the upper and lower bounds for this measurement and then find the possible range (limits of accuracy).</span><br/><span>After that, multiply the upper bound by 3.2 × 10<sup>2</sup> and give your answer in standard form.</span>",
      "hint": "Remember to find the bounds by adding or subtracting 0.05 and then multiply decimals and add exponents when working with standard form.",
      "mustHaveKeywords": ["upper bound", "lower bound", "limits of accuracy", "standard form", "multiply", "exponents"],
      "optionalKeywords": ["rounding", "decimal", "power of 10"],
      "modelAnswer": "<span>The upper bound is 5.6 + 0.05 = 5.65 m.<br/>The lower bound is 5.6 - 0.05 = 5.55 m.<br/>Limits of accuracy: 5.55 &lt; length &lt; 5.65 m.<br/>Multiply upper bound by 3.2 × 10<sup>2</sup>:<br/>5.65 × 3.2 = 18.08.<br/>Express 18.08 in standard form: 1.808 × 10<sup>1</sup>.<br/>Add exponents for 10<sup>0</sup> (from 5.65) + 10<sup>2</sup> = 10<sup>2</sup>, so final answer is approximately 1.808 × 10<sup>3</sup>.</span>",
      "scaffoldPrompts": [
        "Start by calculating the upper bound by adding 0.05 to 5.6",
        "Calculate the lower bound by subtracting 0.05 from 5.6",
        "Write out the limits of accuracy between your bounds",
        "Multiply the upper bound (decimal) by 3.2",
        "Convert your product to standard form",
        "Add the exponents from the powers of 10"
      ]
    }
  }
};