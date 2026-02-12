window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.4 - Area of triangle = ½ab sin C",
  "strapline": "Learn to calculate the area of any triangle using trigonometry and apply exact values of sine for key angles.",
  "learningObjectives": [
    "Students should be able to calculate the area of any triangle using the formula ½ab sin C (Maths 4.4)",
    "Students should be able to apply exact trigonometric values for key angles (0°, 30°, 45°, 60°, 90°) without a calculator (Maths 4.4)",
    ""
  ],
  "keyFormulas": [
    "Formula 1: Area = ½ × a × b × sin C",
    "Formula 2: sin 30° = ½, sin 45° = √2/2, sin 60° = √3/2, sin 90° = 1",
    "Reminder: The angle C is the included angle between sides a and b"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><polygon points='80,250 320,250 180,80' fill='#e0f7fa' stroke='#00796b' stroke-width='3'/><text x='90' y='265' font-family='sans-serif' font-size='16'>a</text><text x='310' y='265' font-family='sans-serif' font-size='16'>b</text><text x='160' y='75' font-family='sans-serif' font-size='16'>C</text><line x1='80' y1='250' x2='180' y2='80' stroke='#004d40' stroke-width='2' stroke-dasharray='5,5'/></svg>",
  "step1": {
    "title": "Concept: Understanding the Area Formula ½ab sin C",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The formula ½ab sin C calculates the area of any triangle when you know two sides <em>a</em> and <em>b</em>, and the <strong>included angle C</strong> between them. It is useful when the height is unknown or difficult to find.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of finding the area like stretching a piece of fabric between two sticks (the sides). The angle between the sticks controls how much fabric is covered, similar to how sin C affects the area.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given sides a = 5 cm, b = 7 cm, and angle C = 60°</span>",
        "<span>Calculate area using ½ × 5 × 7 × sin 60°</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which angle must be used in the formula ½ab sin C to find the area?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The angle between the two sides used (included angle C)</span>",
            "isCorrect": true,
            "explanation": "Correct! The included angle between the two known sides is essential for the formula."
          },
          {
            "id": "b",
            "label": "<span>Any angle of the triangle</span>",
            "isCorrect": false,
            "explanation": "Incorrect. It must be the angle between the two known sides."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the angle included between sides a and b in the formula ½ab sin C.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "includedAngle",
                "label": "included angle",
                "isCorrect": true,
                "feedback": "Correct! Angle C is the included angle."
              },
              {
                "value": "rightAngle",
                "label": "right angle",
                "isCorrect": false,
                "feedback": "Incorrect. It's called the included angle, not necessarily a right angle."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Exact Values of sin for Key Angles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Memorise the exact sine values for 0°, 30°, 45°, 60°, and 90° to confidently use the formula without a calculator.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of these angle values like 'special keys' that unlock quick calculations in trigonometry.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the area when a = 8 cm, b = 6 cm, and angle C = 45°</span>",
        "<span>Use sin 45° = √2/2, so area = ½ × 8 × 6 × √2/2</span>"
      ]
    }
  },
  "step5": {
    "title": "Practice: Calculate Area Using Exact Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the exact sine values from memory to calculate the area of given triangles without a calculator.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Sides: a = 10, b = 7, angle C = 30°</span>",
        "<span>Area = ½ × 10 × 7 × sin 30° = ½ × 10 × 7 × ½ = 17.5</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Calculate the area of a triangle with sides of length 9 cm and 12 cm, where the included angle is 60°. Use exact values for sine and show all your working.</span>",
      "hint": "Remember to identify which sides correspond to a and b, use sin 60° = √3/2, and then apply the formula ½ab sin C.",
      "mustHaveKeywords": ["area", "½ab sin C", "included angle", "sin 60° = √3/2"],
      "optionalKeywords": ["formula substitution", "units"],
      "modelAnswer": "<span>First, identify the sides a = 9 cm and b = 12 cm, with included angle C = 60°. Using the formula area = ½ × 9 × 12 × sin 60°. Since sin 60° = √3/2, substitute this in to get area = ½ × 9 × 12 × (√3/2). Simplify to area = (½ × 9 × 12 × √3) / 2 = (108 × √3) / 4 = 27√3 cm².</span>",
      "scaffoldPrompts": ["Identify sides a and b", "Recall exact sine value for 60°", "Substitute into formula ½ab sin C", "Simplify step-by-step"]
    }
  }
};