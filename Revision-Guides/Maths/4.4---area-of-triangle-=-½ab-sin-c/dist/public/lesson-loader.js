window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.4 - Area of triangle = ½ab sin C",
  "strapline": "Learn how to find the area of any triangle using two sides and the included angle with the formula Area = ½ab sin C.",
  "learningObjectives": [
    "Students should develop and apply the formula for finding the area of any triangle using two sides and the included angle: Area = ½ab sin C (Maths 4.4)",
    "Students should solve problems involving triangular shapes using the area formula (Maths 4.4)"
  ],
  "keyFormulas": [
    "Formula 1: Area = ½ab sin C (Area of triangle using two sides and included angle)",
    "Reminder: sin θ is from trigonometry relating angles to ratios of sides",
    "Reminder: Angles must be in degrees or radians consistent with the sine value"
  ],
  "diagramHtml": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 250,150 150,50' fill='#cce5ff' stroke='#004085' stroke-width='2'/><text x='45' y='165' font-family='sans-serif' font-size='14' fill='#004085'>a</text><text x='255' y='165' font-family='sans-serif' font-size='14' fill='#004085'>b</text><text x='150' y='40' font-family='sans-serif' font-size='14' fill='#004085'>C</text><path d='M120 155 A30 30 0 0 1 140 130' fill='none' stroke='#004085' stroke-width='2'/></svg>",
  "step1": {
    "title": "Understanding the Area Formula with Sine",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For any triangle with sides <em>a</em> and <em>b</em> and the included angle <em>C</em>, the area can be found using the formula <strong>Area = ½ab sin C</strong>. This formula uses the sine of the angle between the two sides.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine holding two sticks fixed at an angle and spreading them out. The space they cover depends on the length of the sticks and the angle between them, similar to how two sides and their included angle determine a triangle's area.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Area Step-by-Step",
      "problem": "Find the area of a triangle with sides <strong>a</strong> = 7 cm, <strong>b</strong> = 5 cm, and included angle <strong>C</strong> = 60°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of side <strong>a</strong>?",
          "answer": "7",
          "feedback": "Correct! Side a is 7 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the value of side <strong>b</strong>?",
          "answer": "5",
          "feedback": "Well done! Side b is 5 cm."
        },
        {
          "id": "q3",
          "prompt": "What is the measure of the included angle <strong>C</strong> in degrees?",
          "answer": "60",
          "feedback": "Good! The angle C is 60 degrees."
        },
        {
          "id": "q4",
          "prompt": "Calculate sin 60° (to 2 decimal places).",
          "answer": "0.87",
          "feedback": "Correct! sin 60° ≈ 0.87."
        },
        {
          "id": "q5",
          "prompt": "Now multiply ½ × a × b × sin C = ½ × 7 × 5 × 0.87. What is the product?",
          "answer": "15.225",
          "feedback": "Great! The multiplication gives 15.225."
        },
        {
          "id": "q6",
          "prompt": "What is the area of the triangle in square centimeters?",
          "answer": "15.225",
          "feedback": "Correct! The area is approximately 15.2 cm²."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 250,150 150,50' fill='#e0f7fa' stroke='#00796b' stroke-width='2'/><text x='40' y='160' font-family='sans-serif' font-size='14' fill='#00796b'>7 cm (a)</text><text x='255' y='160' font-family='sans-serif' font-size='14' fill='#00796b'>5 cm (b)</text><text x='140' y='40' font-family='sans-serif' font-size='14' fill='#00796b'>60° (C)</text><path d='M115 155 A30 30 0 0 1 135 130' fill='none' stroke='#00796b' stroke-width='2'/></svg>"
    }
  },
  "step2": {
    "title": "Identifying the Included Angle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The included angle <em>C</em> is the angle between the two known sides. Correctly identifying this angle is essential because the formula specifically uses the sine of the angle between the two sides you know.</p>",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which angle is the included angle between sides a and b in the triangle below?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Angle opposite side a</span>",
            "isCorrect": false,
            "explanation": "This angle is not between the two given sides."
          },
          {
            "id": "b",
            "label": "<span>The angle where sides a and b meet</span>",
            "isCorrect": true,
            "explanation": "Correct! The included angle lies between sides a and b."
          },
          {
            "id": "c",
            "label": "<span>Any angle in the triangle</span>",
            "isCorrect": false,
            "explanation": "Only the angle between the two sides counts as the included angle."
          }
        ]
      }
    ],
    "diagramHtml": "<svg viewBox='0 0 250 180' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 200,150 130,70' fill='#f9fbe7' stroke='#827717' stroke-width='2'/><text x='40' y='165' font-family='sans-serif' font-size='14' fill='#827717'>a</text><text x='210' y='165' font-family='sans-serif' font-size='14' fill='#827717'>b</text><text x='125' y='60' font-family='sans-serif' font-size='14' fill='#827717'>?</text><path d='M110 150 A30 30 0 0 1 140 120' fill='none' stroke='#827717' stroke-width='2'/></svg>"
  },
  "step3": {
    "title": "Deriving the Formula for Area using Trigonometry",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The standard area formula for a triangle is ½ × base × height. We can use trigonometry to express the height in terms of one side and the sine of the included angle, leading to the formula <strong>Area = ½ab sin C</strong>.</p>",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The formula for area starts as ½ × <span class=\"font-semibold\">_____</span> × height. Using trigonometry, height = b × sin <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "a",
                "label": "a",
                "isCorrect": true,
                "feedback": "Correct! 'a' is used here as the base."
              },
              {
                "value": "c",
                "label": "c",
                "isCorrect": false,
                "feedback": "Try again, 'c' is not the base in this context."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "C",
                "label": "C",
                "isCorrect": true,
                "feedback": "Correct! 'C' is the included angle."
              },
              {
                "value": "B",
                "label": "B",
                "isCorrect": false,
                "feedback": "No, the angle needed is the included angle C."
              }
            ]
          }
        ]
      }
    ],
    "diagramHtml": "<svg viewBox='0 0 280 200' xmlns='http://www.w3.org/2000/svg'><polygon points='50,150 250,150 130,60' fill='#fff3e0' stroke='#ef6c00' stroke-width='2'/><line x1='130' y1='60' x2='130' y2='150' stroke='#ef6c00' stroke-dasharray='4'/><text x='40' y='165' font-family='sans-serif' font-size='14' fill='#ef6c00'>a (base)</text><text x='255' y='165' font-family='sans-serif' font-size='14' fill='#ef6c00'>b</text><text x='25' y='120' font-family='sans-serif' font-size='14' fill='#ef6c00'>height = b sin C</text><text x='140' y='50' font-family='sans-serif' font-size='14' fill='#ef6c00'>C</text><path d='M110 150 A30 30 0 0 1 140 120' fill='none' stroke='#ef6c00' stroke-width='2'/></svg>"
  },
  "step4": {
    "title": "Applying the Formula: Practice with Interactive Questions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the formula <strong>Area = ½ab sin C</strong> to find areas of a triangle by inputting values step-by-step.</p>",
    "workedExample": {
      "title": "Practice Example",
      "problem": "A triangle has sides <strong>a = 8 cm</strong>, <strong>b = 6 cm</strong> and included angle <strong>C = 45°</strong>. Calculate its area.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the length of side a (cm):",
          "answer": "8",
          "feedback": "Correct, side a is 8 cm."
        },
        {
          "id": "q2",
          "prompt": "Enter the length of side b (cm):",
          "answer": "6",
          "feedback": "Good, side b is 6 cm."
        },
        {
          "id": "q3",
          "prompt": "Enter the measure of the included angle C (degrees):",
          "answer": "45",
          "feedback": "Correct! Angle C is 45°."
        },
        {
          "id": "q4",
          "prompt": "Calculate sin 45° (to 3 decimal places):",
          "answer": "0.707",
          "feedback": "Correct! sin 45° ≈ 0.707."
        },
        {
          "id": "q5",
          "prompt": "Compute the area: ½ × 8 × 6 × 0.707 = ?",
          "answer": "16.968",
          "feedback": "Well done! The area is approximately 16.97 cm²."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><polygon points='60,160 260,160 160,70' fill='#e8f5e9' stroke='#2e7d32' stroke-width='2'/><text x='50' y='175' font-family='sans-serif' font-size='14' fill='#2e7d32'>8 cm (a)</text><text x='265' y='175' font-family='sans-serif' font-size='14' fill='#2e7d32'>6 cm (b)</text><text x='155' y='60' font-family='sans-serif' font-size='14' fill='#2e7d32'>45° (C)</text><path d='M130 165 A30 30 0 0 1 160 140' fill='none' stroke='#2e7d32' stroke-width='2'/></svg>"
    }
  },
  "step5": {
    "title": "Common Mistakes to Avoid",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When using the formula, watch out for these common errors:</p><ul><li>Not identifying the included angle correctly.</li><li>Using the wrong sides for 'a' or 'b'.</li><li>Using an angle measure in radians without adjusting the sine function inputs.</li><li>Rounding sine values too early, causing inaccurate results.</li></ul>",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>Which of the following will lead to an incorrect area calculation?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Using the angle opposite one of the sides instead of the included angle</span>",
            "isCorrect": true,
            "explanation": "Exactly, this angle is not between the two given sides, so the formula won't apply correctly."
          },
          {
            "id": "b",
            "label": "<span>Using the included angle measured in degrees and sine of that angle</span>",
            "isCorrect": false,
            "explanation": "Using degrees with sine is correct provided your calculator is set to degrees."
          },
          {
            "id": "c",
            "label": "<span>Applying the formula Area = ½ab sin C after correct identification</span>",
            "isCorrect": false,
            "explanation": "This is the correct approach."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A triangle has sides measuring 10 cm and 12 cm with an included angle of 70°. Calculate the area of this triangle. Explain your method.</span>",
      "hint": "Remember to identify the two sides and the included angle, use the formula Area = ½ab sin C and calculate sine of the angle accurately.",
      "mustHaveKeywords": [
        "area",
        "½ab sin C",
        "included angle"
      ],
      "optionalKeywords": [
        "sine",
        "calculator",
        "degrees"
      ],
      "modelAnswer": "<span>To find the area, identify the two sides: a = 10 cm, b = 12 cm, and included angle C = 70°. Then use the formula Area = ½ × 10 × 12 × sin 70°. Calculating sin 70° ≈ 0.94, we get Area ≈ 0.5 × 10 × 12 × 0.94 = 56.4 cm².</span>",
      "scaffoldPrompts": [
        "Start by writing down the given sides and angle.",
        "Recall the formula for area using ½ab sin C.",
        "Calculate sine of the angle using a calculator.",
        "Multiply the values to find the area."
      ],
      "diagramHtml": "<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg'><polygon points='60,180 280,180 170,80' fill='#ede7f6' stroke='#512da8' stroke-width='2'/><text x='50' y='195' font-family='sans-serif' font-size='14' fill='#512da8'>10 cm (a)</text><text x='285' y='195' font-family='sans-serif' font-size='14' fill='#512da8'>12 cm (b)</text><text x='165' y='70' font-family='sans-serif' font-size='14' fill='#512da8'>70° (C)</text><path d='M140 180 A40 40 0 0 1 180 140' fill='none' stroke='#512da8' stroke-width='2'/></svg>"
    }
  }
};