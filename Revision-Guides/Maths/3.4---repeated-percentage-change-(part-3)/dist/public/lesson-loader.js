window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.4 - Repeated percentage change (Part 3)",
  "strapline": "Applying multipliers raised to powers to calculate repeated percentage changes and their real-world applications.",
  "learningObjectives": [
    "Students should be able to calculate the result of applying the same percentage change multiple times using multipliers raised to powers (Maths 3.4)",
    "Students should be able to apply repeated percentage change techniques to real-world contexts including compound interest, population change, and depreciation (Maths 3.4)"
  ],
  "step1": {
    "title": "Concept 1: Repeated percentage change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Repeated percentage change occurs when the same percentage increase or decrease is applied multiple times in succession, such as earning 5% interest each year for 3 years. The effect is cumulative and not simply additive.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a snowball rolling down a hill, growing 5% bigger every minute. Each minute, the snowball is 5% bigger than the previous minute, so the size grows faster over time.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with £100 savings.</span>",
        "<span>Each year you earn 5% interest, so after the first year: £100 + 5% of £100 = £105.</span>",
        "<span>After the second year you earn 5% on £105, so the amount is £105 + 5% of £105 = £110.25.</span>",
        "<span>This shows the percentage is applied repeatedly, not just to the original amount.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Multiplier method with powers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Instead of calculating each percentage change step-by-step, you can use the multiplier raised to the power of the number of times the change happens. For example, for a 10% increase three times, use multiplier (1.1)<sup>3</sup>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of climbing a ladder with steps that grow 10% taller each time you step. Instead of measuring each step, you multiply the original step height by the power of 1.1 to find the total height after several steps.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate the amount after 3 years with 10% increase each year, starting with £200.</span>",
        "<span>Multiplier for 10% increase = 1.1</span>",
        "<span>Use formula: 200 × 1.1<sup>3</sup> = 200 × 1.331 = £266.20 approximately.</span>"
      ]
    }
  },
  "step3": {
    "title": "Key Concept: Compound interest",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Compound interest is the interest calculated on both the initial principal and the accumulated interest from previous periods, representing repeated percentage growth over time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just like a snowball growing bigger not only because of new snow but also because the snow it already has attracts more snow, compound interest accumulates on interest already earned.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A bank offers 4% compound interest annually on £1000.</span>",
        "<span>After 1 year: £1000 × 1.04 = £1040.</span>",
        "<span>After 2 years: £1040 × 1.04 = £1081.60.</span>",
        "<span>Using multiplier form: £1000 × 1.04<sup>2</sup> = £1081.60.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which multiplier represents a 15% decrease repeated 4 times?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>0.85<sup>4</sup></span>",
            "isCorrect": true,
            "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A 15% decrease means multiply by 0.85 each time, and for 4 times, the multiplier is 0.85 raised to the power of 4.</p>"
          },
          {
            "id": "b",
            "label": "<span>1.15<sup>4</sup></span>",
            "isCorrect": false,
            "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">1.15 represents a 15% increase, not a decrease.</p>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is used to calculate repeated percentage change efficiently by raising it to the power of the number of periods.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "multiplier",
                "label": "multiplier",
                "isCorrect": true,
                "feedback": "<p class=\"text-sm leading-6 text-muted-foreground\">Correct! The multiplier is the key value.</p>"
              },
              {
                "value": "percentage",
                "label": "percentage",
                "isCorrect": false,
                "feedback": "<p class=\"text-sm leading-6 text-muted-foreground\">Try again – the term needed is 'multiplier' not 'percentage'.</p>"
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
      "prompt": "<span>A population of 12,000 increases by 3% each year. Calculate the population after 5 years.</span>",
      "hint": "Remember to use the multiplier for a 3% increase and raise it to the power of 5.",
      "mustHaveKeywords": ["multiplier", "power", "3% increase", "formula", "calculate"],
      "optionalKeywords": ["compound growth", "population formula"],
      "modelAnswer": "<span>First, find the multiplier for a 3% increase: 1 + 0.03 = 1.03.<br>Then apply the repeated percentage change formula: 12,000 × 1.03<sup>5</sup>.<br>Calculate 1.03<sup>5</sup> = approximately 1.159274.<br>Multiply: 12,000 × 1.159274 ≈ 13,911.<br>So, the population after 5 years is approximately 13,911.</span>",
      "scaffoldPrompts": [
        "Identify the multiplier for a 3% increase.",
        "Write the formula using the multiplier raised to the power of 5.",
        "Calculate the power and multiply by the original population."
      ]
    }
  }
};