window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.4 - Repeated percentage change (Part 1)",
  "strapline": "Understanding how to calculate repeated percentage changes using multipliers and powers in real-world problems",
  "learningObjectives": [
    "Students should be able to calculate the result of applying the same percentage change multiple times using multipliers raised to powers (Maths 3.4)",
    "Students should be able to solve problems involving compound interest, repeated depreciation, and population change without calculating each change step by step (Maths 3.4)",
    "Students should be able to apply repeated percentage change techniques to real-world contexts including investment growth and asset depreciation (Maths 3.4)"
  ],
  "step1": {
    "title": "Concept: Understanding Multipliers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A multiplier represents a percentage change as a decimal number. For a percentage increase, add the percentage to 100% and convert to decimal form. For a percentage decrease, subtract the percentage from 100% and convert to decimal form.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the multiplier as a growth or shrink button on a remote control that changes the original size by a certain percentage each time you press it.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>To find the multiplier for a 5% increase, add 5% to 100% which is 105% or 1.05 as a decimal.</span>",
        "<span>For a 5% decrease, subtract 5% from 100% which gives 95% or 0.95 as a decimal.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Repeated Percentage Change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Repeated percentage change means applying the same percentage increase or decrease multiple times. Instead of calculating each step individually, we use multipliers repeatedly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like pressing the growth/shrink button on the remote multiple times and the size changes step-by-step, but you don’t need to press the button again and again to know the final size.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A population grows by 3% each year. After 3 years, the total multiplier is 1.03 × 1.03 × 1.03.</span>",
        "<span>We can write this as 1.03³ instead of calculating each year’s growth separately.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Exponential Form for Repeated Changes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Repeated multiplication by the same multiplier can be written using powers or exponents. The base is the multiplier and the exponent shows how many times the percentage change is applied.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the exponent as the number of times you press the growth/shrink button, and the multiplier is the effect each press has on size.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Instead of calculating 1.05 × 1.05 × 1.05, write it as 1.05³.</span>",
        "<span>The exponent 3 shows the number of times the multiplier is applied.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the multiplier for a 7% decrease?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>0.93</span>",
            "isCorrect": true,
            "explanation": "Correct, because 100% - 7% = 93% = 0.93"
          },
          {
            "id": "b",
            "label": "<span>1.07</span>",
            "isCorrect": false,
            "explanation": "Incorrect, 1.07 represents a 7% increase, not decrease."
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
        "sentence": "<span>The number 1.04 is an example of a <span class=\"font-semibold\">_____</span> that represents a 4% _____.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "multiplier-increase",
                "label": "multiplier; increase",
                "isCorrect": true,
                "feedback": "Correct! 1.04 is the multiplier for a 4% increase."
              },
              {
                "value": "multiplier-decrease",
                "label": "multiplier; decrease",
                "isCorrect": false,
                "feedback": "Try again. 1.04 is more than 1 so it means increase, not decrease."
              },
              {
                "value": "percentage-increase",
                "label": "percentage; increase",
                "isCorrect": false,
                "feedback": "Incorrect. The number 1.04 is called a multiplier, not a percentage."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Applying Repeated Percentage Change to Real-World Problem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dealing with investments, depreciation, or population changes, use multipliers with exponents to find final values quickly.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>An investment increases by 6% each year. What is the multiplier after 4 years?</span>",
        "<span>Multiplier each year = 1.06</span>",
        "<span>Total multiplier = 1.06<sup>4</sup></span>",
        "<span>Calculate 1.06<sup>4</sup> to find the overall change after 4 years.</span>"
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>An item depreciates by 12% each year. Explain how you would calculate its value after 5 years without calculating the value each year step by step.</span>",
      "hint": "<span>Think about how to represent 12% decrease as a multiplier and then apply it repeatedly.</span>",
      "mustHaveKeywords": ["multiplier", "exponent", "power", "value after 5 years", "0.88", "raised to the power of 5"],
      "optionalKeywords": ["depreciation", "repeated percentage change", "compound decrease"],
      "modelAnswer": "<span>First, convert the 12% decrease into a multiplier: 100% - 12% = 88% or 0.88. Then, instead of multiplying by 0.88 five times, write it as 0.88<sup>5</sup>. Calculate 0.88<sup>5</sup> and multiply the original value by this to find its value after 5 years.</span>",
      "scaffoldPrompts": [
        "<span>What is the multiplier for a 12% decrease?</span>",
        "<span>How do you write repeated multiplication of this multiplier 5 times using powers?</span>",
        "<span>How do you use this to find the final value after 5 years?</span>"
      ]
    }
  }
};