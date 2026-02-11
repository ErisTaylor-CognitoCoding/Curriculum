window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 1)",
  "strapline": "Understanding and applying upper and lower bounds along with calculations in standard form.",
  "learningObjectives": [
    "Students should apply and interpret limits of accuracy when rounding or truncating, including upper and lower bounds (Maths 1.1)",
    "Students should calculate with numbers in standard form including multiplying and dividing numbers expressed in standard form (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept 1: Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> is the highest value a rounded or truncated number could have been before rounding. For example, when a number is rounded to 1 decimal place, the upper bound is found by adding 0.05 to the rounded value. This means the actual number could be just less than the upper bound.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you measure a bottle of water and write down 1.2 litres rounded to 1 decimal place. The true volume could be anything up to but not including 1.25 litres, which is the upper bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number rounded to 1 decimal place: 3.6</span>",
        "<span>To find the upper bound, add 0.05: 3.6 + 0.05 = 3.65</span>",
        "<span>Therefore, the upper bound is 3.65</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the lowest value a rounded or truncated number could have been before rounding. When rounded to 1 decimal place, the lower bound is found by subtracting 0.05 from the rounded value. This sets the minimum possible value the original number could have been.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the bottle example, if you recorded 1.2 litres, the actual volume could be as low as 1.15 litres, which is the lower bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number rounded to 1 decimal place: 7.3</span>",
        "<span>To find the lower bound, subtract 0.05: 7.3 - 0.05 = 7.25</span>",
        "<span>Therefore, the lower bound is 7.25</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Limits of Accuracy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Limits of accuracy</strong> define the range of possible values that a measurement could represent after rounding or truncation. By knowing the upper and lower bounds, you understand the potential variation or error in the measurements, which is crucial when making calculations to avoid mistakes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you measure a wooden board and say it is 5.0 cm (to 1 decimal place), the true length lies somewhere between 4.95 cm and 5.05 cm. This range is the limit of accuracy.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Measurement: 2.4m rounded to 1 decimal place</span>",
        "<span>Lower bound = 2.4 - 0.05 = 2.35m</span>",
        "<span>Upper bound = 2.4 + 0.05 = 2.45m</span>",
        "<span>Limits of accuracy: 2.35m ≤ actual length &lt; 2.45m</span>"
      ]
    }
  },
  "step4": {
    "title": "Calculating with Numbers in Standard Form (Multiplication)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Standard form expresses very large or very small numbers as a × 10<sup>n</sup>. When multiplying numbers in standard form, multiply the decimal parts, then add the powers of 10.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of standard form numbers like pieces of a recipe. You multiply the amounts (decimals) and then combine the size of the pots (powers of 10).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate (3 × 10<sup>4</sup>) × (2 × 10<sup>3</sup>)</span>",
        "<span>Multiply decimal parts: 3 × 2 = 6</span>",
        "<span>Add the powers of 10: 4 + 3 = 7</span>",
        "<span>Answer = 6 × 10<sup>7</sup></span>"
      ]
    }
  },
  "step5": {
    "title": "Calculating with Numbers in Standard Form (Division)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing numbers in standard form, divide the decimal parts, then subtract the powers of 10 in the denominator from the numerator.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you are dividing ingredient quantities; you separate the count of units and then adjust the scale of measurement.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate (8 × 10<sup>6</sup>) ÷ (4 × 10<sup>2</sup>)</span>",
        "<span>Divide decimal parts: 8 ÷ 4 = 2</span>",
        "<span>Subtract powers of 10: 6 - 2 = 4</span>",
        "<span>Answer = 2 × 10<sup>4</sup></span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A length is recorded as 5.7 cm correct to 1 decimal place. Another length is recorded as 3.2 × 10<sup>3</sup> mm in standard form. Find the upper and lower bounds of the first length in cm and then multiply the upper bound of the first length by the second length. Give your answer in standard form.</span>",
      "hint": "Remember to convert units if necessary and to apply the rules of upper and lower bounds carefully before multiplying numbers in standard form.",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiply", "standard form"],
      "optionalKeywords": ["decimal place", "conversion", "power of 10"],
      "modelAnswer": "<span>First, convert 3.2 × 10<sup>3</sup> mm to cm: 3.2 × 10<sup>3</sup> mm = 3200 mm = 320 cm.<br>Upper bound of 5.7 cm = 5.7 + 0.05 = 5.75 cm.<br>Lower bound of 5.7 cm = 5.7 - 0.05 = 5.65 cm.<br>Multiply the upper bound by the second length: 5.75 × 320 = 1840.<br>Express in standard form: 1.84 × 10<sup>3</sup> cm.<br>Final answer: 1.84 × 10<sup>3</sup> cm.</span>",
      "scaffoldPrompts": [
        "Step 1: Find the upper and lower bounds of 5.7 cm.",
        "Step 2: Convert 3.2 × 10<sup>3</sup> mm to cm.",
        "Step 3: Multiply the upper bound in cm by the converted length.",
        "Step 4: Express your answer in standard form."
      ]
    }
  }
};