window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.4 - Repeated percentage change (Part 2)",
  "strapline": "Applying repeated percentage change using multipliers and powers in real-world contexts",
  "learningObjectives": [
    "Students should be able to calculate the result of applying the same percentage change multiple times using multipliers raised to powers (Maths 3.4)",
    "Students should be able to apply repeated percentage change techniques to real-world contexts including compound interest, investment growth, and depreciation of assets (Maths 3.4)"
  ],
  "step1": {
    "title": "Concept 1: Repeated percentage change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Repeated percentage change occurs when the same percentage increase or decrease is applied multiple times to an initial value. Examples include annual interest on savings or yearly depreciation of a car’s value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a tree growing by the same percentage each year. Each year's growth builds on the previous year's height, making the growth compound over time.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If a car depreciates by 10% each year, after the first year it is worth 90% of its original value.</span>",
        "<span>After the second year, it loses 10% of its new value, so multiply by 0.9 again: Value = Original × 0.9 × 0.9 = Original × 0.9<sup>2</sup>.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Multiplier method with powers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The multiplier method uses a formula: <strong>Final value = Original value × (multiplier)<sup>n</sup></strong>, where <em>multiplier</em> is 1 plus the percentage increase (or 1 minus the decrease) as a decimal, and <em>n</em> is the number of times the change is applied.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This is like pressing the ×10 button on a calculator multiple times. Each press multiplies the number again by the same factor, just like repeated percentage changes.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate the value of £1000 after 3 years with a 5% annual increase.</span>",
        "<span>Multiplier = 1 + 0.05 = 1.05</span>",
        "<span>Final value = 1000 × 1.05<sup>3</sup></span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Compound interest",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Compound interest is the interest calculated on the initial principal and also on the accumulated interest of previous periods. This leads to exponential growth over time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine interest not only growing your savings but also interest being earned on the interest you already earned – like a snowball rolling downhill and growing larger.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>You invest £500 at 4% compound interest annually.</span>",
        "<span>Value after 2 years = 500 × 1.04<sup>2</sup></span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What number would you use as a multiplier for a 7% decrease applied repeatedly?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>0.93</span>",
            "isCorrect": true,
            "explanation": "<span>Correct: 7% decrease means 100% - 7% = 93%, so multiplier is 0.93.</span>"
          },
          {
            "id": "b",
            "label": "<span>1.07</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect: 1.07 would represent a 7% increase.</span>"
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
        "sentence": "<span>The multiplier for a repeated percentage increase is <span class=\"font-semibold\">_____</span> 1 plus the percentage expressed as a decimal.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "val1",
                "label": "equal to",
                "isCorrect": true,
                "feedback": "<span>Correct! The multiplier is 1 + the decimal percentage increase.</span>"
              },
              {
                "value": "val2",
                "label": "less than",
                "isCorrect": false,
                "feedback": "<span>Incorrect. It should be 1 plus, not less than 1.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Compound interest means the interest is earned on both the <span class=\"font-semibold\">_____</span> and the accumulated interest.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "val1",
                "label": "principal",
                "isCorrect": true,
                "feedback": "<span>Correct! Compound interest includes the principal.</span>"
              },
              {
                "value": "val2",
                "label": "tax",
                "isCorrect": false,
                "feedback": "<span>Incorrect. The correct term is principal, not tax.</span>"
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
      "prompt": "<span>A car worth £12,000 depreciates by 8% per year. Calculate its value after 4 years using the multiplier method. Explain each step of your method.</span>",
      "hint": "<span>Remember to convert the percentage decrease to a multiplier and raise it to the power of the number of years.</span>",
      "mustHaveKeywords": ["multiplier", "power", "depreciation", "8%", "value after 4 years"],
      "optionalKeywords": ["original value", "formula", "calculate"],
      "modelAnswer": "<span>First, convert the 8% depreciation to a multiplier: 1 - 0.08 = 0.92. Then, apply the formula: Final value = £12,000 × 0.92<sup>4</sup>. Calculate 0.92 raised to the power 4 and multiply this by £12,000 to find the car’s value after 4 years.</span>",
      "scaffoldPrompts": [
        "<span>Step 1: What is the multiplier for 8% depreciation?</span>",
        "<span>Step 2: Write down the formula to use with the multiplier and number of years.</span>",
        "<span>Step 3: Calculate the multiplier raised to the power 4.</span>",
        "<span>Step 4: Multiply that value by the original price.</span>"
      ]
    }
  }
};