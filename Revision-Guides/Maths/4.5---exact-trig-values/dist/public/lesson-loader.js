window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.5 - Exact trig values",
  "strapline": "Understanding and using exact trigonometric values for key angles without a calculator.",
  "learningObjectives": [
    "Students should recall and use exact trigonometric values for sin, cos, and tan of 0°, 30°, 45°, 60°, and 90° without a calculator (Maths 4.5)",
    "Students should apply exact trigonometric values to solve problems involving surds (Maths 4.5)",
    ""
  ],
  "keyFormulas": [
    "sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3",
    "sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1",
    "sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3",
    "sin 0° = 0, cos 0° = 1, tan 0° = 0",
    "sin 90° = 1, cos 90° = 0, tan 90° = undefined"
  ],
  "diagramHtml": "<svg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>\n  <circle cx='150' cy='150' r='100' stroke='#333' stroke-width='2' fill='none'/>\n  <line x1='150' y1='150' x2='250' y2='150' stroke='red' stroke-width='2'/>\n  <line x1='150' y1='150' x2='200' y2='67' stroke='blue' stroke-width='2'/>\n  <line x1='200' y1='67' x2='250' y2='150' stroke='green' stroke-width='2' stroke-dasharray='5,5'/>\n  <text x='225' y='140' font-family='sans-serif' font-size='16' fill='red'>adjacent</text>\n  <text x='190' y='75' font-family='sans-serif' font-size='16' fill='blue'>hypotenuse</text>\n  <text x='230' y='190' font-family='sans-serif' font-size='16' fill='green'>opposite</text>\n  <text x='155' y='285' font-family='sans-serif' font-size='16' fill='#333'><tspan>Unit Circle</tspan></text>\n  <text x='175' y='160' font-family='sans-serif' font-weight='bold' font-size='18' fill='#333'>θ</text>\n</svg>",
  "step1": {
    "title": "Understanding exact trig values for key angles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exact trigonometric values are specific values of sine, cosine, and tangent for angles like 0°, 30°, 45°, 60°, and 90° expressed with surds such as √2 and √3 rather than decimals. These help solve problems precisely without a calculator.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Knowing exact trig values is like knowing common measurements in cooking—like 1/2 a cup or 1 tsp—without guessing or estimating.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating sin 45°",
      "problem": "Find the exact value of sin 45°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the measure of the angle for this problem?",
          "answer": "45",
          "feedback": "Correct, the angle is 45°."
        },
        {
          "id": "q2",
          "prompt": "Recall the exact sine value for 45°. What is it expressed with a surd?",
          "answer": "√2/2",
          "feedback": "Excellent! sin 45° = √2/2."
        }
      ]
    }
  },
  "step2": {
    "title": "Recall exact values for sine",
    "explanation": "<p>Let's recall the exact sine values for key angles 0°, 30°, 45°, 60°, and 90°.</p>",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which is the exact value of sin 30°?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>1/2</span>",
            "isCorrect": true,
            "explanation": "Correct: sin 30° is exactly 1/2."
          },
          {
            "id": "b",
            "label": "<span>√3/2</span>",
            "isCorrect": false,
            "explanation": "Incorrect: √3/2 is actually cos 30° or sin 60°."
          },
          {
            "id": "c",
            "label": "<span>√2/2</span>",
            "isCorrect": false,
            "explanation": "Incorrect: √2/2 is the value for sin 45°."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Recall exact values for cosine",
    "explanation": "<p>Now let's test your knowledge of exact cosine values for the key angles.</p>",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>What is the exact value of cos 60°?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>1/2</span>",
            "isCorrect": true,
            "explanation": "Correct! cos 60° is 1/2 exactly."
          },
          {
            "id": "b",
            "label": "<span>√3/2</span>",
            "isCorrect": false,
            "explanation": "Incorrect: √3/2 is cos 30°, not cos 60°."
          },
          {
            "id": "c",
            "label": "<span>0</span>",
            "isCorrect": false,
            "explanation": "Incorrect: cos 90° is 0, not cos 60°."
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Recall exact values for tangent",
    "explanation": "<p>Tangent values can be exact values expressed with fractions and surds; let's recall them for key angles.</p>",
    "mcqs": [
      {
        "id": "mcq-3",
        "question": "<span>Which is the exact value of tan 45°?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>1</span>",
            "isCorrect": true,
            "explanation": "Correct, tan 45° equals exactly 1."
          },
          {
            "id": "b",
            "label": "<span>√3</span>",
            "isCorrect": false,
            "explanation": "Incorrect: √3 is the value for tan 60°."
          },
          {
            "id": "c",
            "label": "<span>0</span>",
            "isCorrect": false,
            "explanation": "Incorrect: tan 0° is 0, not tan 45°."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Fill in the blanks: Key angles and surds",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The exact value of sin 60° is <span class=\"font-semibold\">_____</span>, which includes the surd <sup>√</sup>3.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "√3/2",
                "label": "√3/2",
                "isCorrect": true,
                "feedback": "Correct! sin 60° = √3/2."
              },
              {
                "value": "1/2",
                "label": "1/2",
                "isCorrect": false,
                "feedback": "Incorrect. 1/2 is sin 30°, not sin 60°."
              },
              {
                "value": "√2/2",
                "label": "√2/2",
                "isCorrect": false,
                "feedback": "Incorrect. √2/2 corresponds to sin 45°."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Worked Example: Using exact trig values to solve a problem involving surds",
    "explanation": "<p>Use exact trig values to find the length of the side opposite to a 30° angle in a right triangle where the hypotenuse is 10 units.</p>",
    "workedExample": {
      "title": "Find the length of the opposite side given hypotenuse = 10 and angle = 30°",
      "problem": "Calculate the length of the side opposite the 30° angle using exact trig values.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Recall sin 30°. What is its exact value?",
          "answer": "1/2",
          "feedback": "Correct! sin 30° = 1/2."
        },
        {
          "id": "q2",
          "prompt": "Use the formula sin θ = opposite / hypotenuse. Rearranged: opposite = hypotenuse × sin θ. Calculate opposite = 10 × 1/2.",
          "answer": "5",
          "feedback": "Correct, the length of the opposite side is 5 units."
        }
      ]
    }
  },
  "step7": {
    "title": "Recall and Apply: Calculate exact trig values in surd form",
    "explanation": "<p>Let's apply your knowledge to find exact values involving surds.</p>",
    "workedExample": {
      "title": "Calculate tan 60° exactly",
      "problem": "Find the exact value of tan 60° without a calculator.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Recall tan 60° in exact surd form.",
          "answer": "√3",
          "feedback": "Correct! tan 60° = √3."
        }
      ]
    }
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A triangle has a right angle and one angle of 45°. The hypotenuse measures 14 units. Calculate the lengths of the other two sides using exact trig values. Show your working clearly.</span>",
      "hint": "Remember to use sin and cos for 45°, and express answers in surd form where applicable.",
      "mustHaveKeywords": ["sin 45°", "cos 45°", "√2/2", "hypotenuse × sin 45°", "hypotenuse × cos 45°"],
      "optionalKeywords": ["exact values", "surd", "right triangle"],
      "modelAnswer": "<span>Use sin 45° = √2/2 and cos 45° = √2/2. Opposite side = 14 × √2/2 = 7√2. Adjacent side = 14 × √2/2 = 7√2. Both sides are exactly 7√2 units long.</span>",
      "scaffoldPrompts": ["Identify the key angles", "Recall sin and cos values for 45°", "Use formulas opposite = hypotenuse × sin 45°, adjacent = hypotenuse × cos 45°"]
    }
  }
};