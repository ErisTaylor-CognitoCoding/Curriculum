window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.4 - Area of triangle = ½ab sin C",
  "strapline": "Learn how to find the area of any triangle using two sides and the included angle with the formula Area = ½ab sin C.",
  "learningObjectives": [
    "Students should develop and apply the formula for finding the area of any triangle using two sides and the included angle: Area = ½ab sin C (Maths 4.4)",
    "Students should solve problems involving triangular shapes using the area formula (Maths 4.4)",
    ""
  ],
  "keyFormulas": [
    "Area = ½ × base × height",
    "Area = ½ab sin C (where a and b are sides, C is included angle)",
    "sin θ = opposite / hypotenuse (definition of sine)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><polygon points='50,250 350,250 130,70' fill='#cce5ff' stroke='#003366' stroke-width='3'/><text x='40' y='255' font-family='sans-serif' font-size='16'>A</text><text x='360' y='255' font-family='sans-serif' font-size='16'>B</text><text x='120' y='60' font-family='sans-serif' font-size='16'>C</text><line x1='130' y1='70' x2='130' y2='250' stroke='#cc3300' stroke-dasharray='5,5' stroke-width='2'/><text x='135' y='160' fill='#cc3300' font-family='sans-serif' font-size='14'>&#x1A9B; (height)</text><text x='190' y='270' font-family='sans-serif' font-size='14'>a</text><text x='90' y='160' font-family='sans-serif' font-size='14'>b</text><text x='200' y='150' font-family='sans-serif' font-size='16' fill='#003366'>C</text></svg>",
  "step1": {
    "title": "Understanding the Area Formula Using Sine",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For any triangle with sides <em>a</em> and <em>b</em>, and the included angle <em>C</em> between them, the area can be found by multiplying half the product of the two sides by the sine of the included angle: <strong>Area = ½ab sin C</strong>.</p><p>This formula comes from expressing the height in terms of side <em>b</em> and the sine of angle <em>C</em>.</p>",
    "analogy": {
      "title": "Real World Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a triangular sail on a boat. Instead of measuring the height directly, you know the two edges of the sail and the angle between them. Using the formula, you can find the surface area of the sail easily.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Step 1 - Input Side a",
      "problem": "Calculate the area of a triangle with sides <em>a</em> and <em>b</em>, and included angle <em>C</em>. First, enter the length of side <strong>a</strong>:",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the length of side <em>a</em> (in cm):",
          "answer": "7",
          "feedback": "Correct. Side a = 7 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Worked Example: Step 2 - Input Side b",
    "explanation": "<p>Now, enter the length of side <em>b</em> of the triangle.</p>",
    "workedExample": {
      "title": "Worked Example: Input Side b",
      "problem": "Enter the length of side <strong>b</strong> (in cm):",
      "questions": [
        {
          "id": "q2",
          "prompt": "Length of side <em>b</em>:",
          "answer": "9",
          "feedback": "Great! Side b = 9 cm."
        }
      ]
    }
  },
  "step3": {
    "title": "Worked Example: Step 3 - Input Angle C",
    "explanation": "<p>Next, enter the measure of the included angle <em>C</em> between sides <em>a</em> and <em>b</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Input Included Angle C",
      "problem": "Enter the angle <strong>C</strong> in degrees:",
      "questions": [
        {
          "id": "q3",
          "prompt": "Value of angle C (°):",
          "answer": "60",
          "feedback": "Well done! Angle C = 60°."
        }
      ]
    }
  },
  "step4": {
    "title": "Understanding the Included Angle",
    "explanation": "<p>The included angle <em>C</em> is the angle between the two known sides <em>a</em> and <em>b</em>. It's important to identify this correctly, as the formula only works when the angle lies between the two sides you are using.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><polygon points='50,250 350,250 130,70' fill='#d9ead3' stroke='#274e13' stroke-width='3'/><text x='40' y='255' font-family='sans-serif' font-size='16'>A</text><text x='360' y='255' font-family='sans-serif' font-size='16'>B</text><text x='120' y='60' font-family='sans-serif' font-size='16'>C</text><path d='M130 70 L175 110 L130 150' fill='none' stroke='#274e13' stroke-width='2'/><text x='145' y='100' font-family='sans-serif' font-size='16' fill='#274e13'>C</text></svg>"
  },
  "step5": {
    "title": "Deriving the Area Formula Using Trigonometry",
    "explanation": "<p>The standard area formula for a triangle is <strong>Area = ½ × base × height</strong>. By dropping a perpendicular from one vertex to the opposite side, we can express the height as <em>height = b sin C</em>, where <em>b</em> is a side and <em>C</em> is the angle between <em>a</em> and <em>b</em>. Substituting height gives:</p><p><strong>Area = ½ × a × b sin C</strong></p>"
  },
  "step6": {
    "title": "Interactive Worked Example: Calculate the Area",
    "explanation": "<p>Using the values you entered earlier (<em>a = 7 cm</em>, <em>b = 9 cm</em>, <em>C = 60°</em>), calculate the area of the triangle step-by-step.</p>",
    "workedExample": {
      "title": "Find the Area Step-by-Step",
      "problem": "Calculate area using <strong>Area = ½ab sin C</strong>:",
      "questions": [
        {
          "id": "q4",
          "prompt": "Step 1: Calculate sin 60°. (Use 3 decimal places)",
          "answer": "0.866",
          "feedback": "Correct, sin 60° ≈ 0.866."
        },
        {
          "id": "q5",
          "prompt": "Step 2: Multiply sides a and b: 7 × 9 = ?",
          "answer": "63",
          "feedback": "Correct, 7 multiplied by 9 is 63."
        },
        {
          "id": "q6",
          "prompt": "Step 3: Multiply 63 by sin 60°: 63 × 0.866 = ? (3 decimal places)",
          "answer": "54.558",
          "feedback": "Excellent. The product is approximately 54.558."
        },
        {
          "id": "q7",
          "prompt": "Step 4: Multiply by ½: 0.5 × 54.558 = ? (3 decimal places)",
          "answer": "27.279",
          "feedback": "Great! The area is approximately 27.279 cm²."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: Multiple Choice Question",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the angle <em>C</em> represent in the formula <strong>Area = ½ab sin C</strong>?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The angle opposite side <em>a</em></span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. The angle <em>C</em> must be the included angle between sides <em>a</em> and <em>b</em>.</span>"
          },
          {
            "id": "b",
            "label": "<span>The angle included between sides <em>a</em> and <em>b</em></span>",
            "isCorrect": true,
            "explanation": "<span>Correct! The formula needs the angle between the two given sides.</span>"
          },
          {
            "id": "c",
            "label": "<span>Any angle in the triangle</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. The angle must be the one included between the two respective sides.</span>"
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> angle is the angle between two sides used in the area formula.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "included",
                "label": "included",
                "isCorrect": true,
                "feedback": "Correct! The included angle is between the two sides."
              },
              {
                "value": "opposite",
                "label": "opposite",
                "isCorrect": false,
                "feedback": "Try again. The opposite angle is not used here."
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A triangle has sides of length 8 cm and 12 cm with the included angle of 45°. Calculate the area of this triangle.</span>",
      "hint": "Remember to use the formula Area = ½ab sin C and convert the angle to radians if your calculator requires it.",
      "mustHaveKeywords": ["½", "sides", "sin", "included angle", "area"],
      "optionalKeywords": ["degrees", "trigonometry", "height"],
      "modelAnswer": "<span>Using the formula Area = ½ × 8 × 12 × sin 45°. Calculate sin 45° ≈ 0.707. Then area = 0.5 × 8 × 12 × 0.707 = 33.94 cm² (to 2 decimal places).</span>",
      "scaffoldPrompts": ["Identify sides a and b", "Identify included angle C", "Calculate sin C", "Multiply and apply ½"]
    }
  }
};