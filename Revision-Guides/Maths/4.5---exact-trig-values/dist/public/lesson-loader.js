window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.5 - Exact trig values",
  "strapline": "Learn to recall and apply exact values of sine, cosine, and tangent for key angles without a calculator.",
  "learningObjectives": [
    "Students should recall and use exact trigonometric values for sin, cos, and tan of 0°, 30°, 45°, 60°, and 90° without a calculator (Maths 4.5)",
    "Students should apply exact trigonometric values to solve problems involving surds (Maths 4.5)",
    ""
  ],
  "keyFormulas": [
    "sin 0° = 0, cos 0° = 1, tan 0° = 0",
    "sin 30° = 1/2, cos 30° = √3/2, tan 30° = √3/3",
    "sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1",
    "sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3",
    "sin 90° = 1, cos 90° = 0, tan 90° is undefined"
  ],
  "diagramHtml": "<svg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>\n  <circle cx='150' cy='150' r='100' stroke='black' stroke-width='2' fill='none'/>\n  <line x1='150' y1='150' x2='250' y2='150' stroke='blue' stroke-width='2'/>\n  <line x1='150' y1='150' x2='100' y2='64.95' stroke='red' stroke-width='2'/>\n  <line x1='100' y1='64.95' x2='250' y2='150' stroke='green' stroke-width='2'/>\n  <text x='152' y='140' font-family='sans-serif' font-size='16'>O</text>\n  <text x='252' y='155' font-family='sans-serif' font-size='16'>A</text>\n  <text x='70' y='60' font-family='sans-serif' font-size='16'>B</text>\n  <text x='180' y='190' font-family='sans-serif' font-size='16' fill='blue'>cos θ</text>\n  <text x='105' y='20' font-family='sans-serif' font-size='16' fill='red'>sin θ</text>\n  <text x='175' y='100' font-family='sans-serif' font-size='16' fill='green'>hypotenuse</text>\n</svg>",
  "step1": {
    "title": "Concept: Understanding Exact Trigonometric Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exact trigonometric values for angles 0°, 30°, 45°, 60°, and 90° are fixed fractions and surds that you can recall without a calculator. These values come from special triangles and the unit circle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just as you memorize times tables to work out multiplication quickly, learning these exact trig values helps solve problems efficiently without approximations.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding sin 30°",
      "problem": "What is the exact value of sin 30°? Provide your answer as a fraction or surd.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Consider the special triangle with angles 30°, 60°, and 90°. What is the length of the side opposite the 30° angle if the hypotenuse is 1?",
          "answer": "1/2",
          "feedback": "Correct! The side opposite 30° is half the hypotenuse."
        },
        {
          "id": "q2",
          "prompt": "Given this, what is sin 30°?",
          "answer": "1/2",
          "feedback": "Correct. sin 30° = opposite/hypotenuse = 1/2."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: The Key Angles and Their Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The key angles 0°, 30°, 45°, 60°, and 90° have corresponding exact sine, cosine, and tangent values often expressed using <em>surds</em> such as √2 and √3.</p>",
    "workedExample": {
      "title": "Worked Example: Recall cos 45°",
      "problem": "Recall the exact value of cos 45°. Enter your answer as a fraction involving a surd if needed.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What special triangle helps find cos 45°?",
          "answer": "Isosceles right triangle",
          "feedback": "Correct, the triangle with angles 45°, 45°, and 90° helps here."
        },
        {
          "id": "q2",
          "prompt": "If each leg is length 1, what is the hypotenuse?",
          "answer": "√2",
          "feedback": "Correct, using Pythagoras the hypotenuse is √2."
        },
        {
          "id": "q3",
          "prompt": "Calculate cos 45° = adjacent/hypotenuse. What is this value?",
          "answer": "√2/2",
          "feedback": "Exactly, cos 45° = 1 / √2 = √2/2 after rationalising."
        }
      ]
    }
  },
  "step3": {
    "title": "Practice: Matching Values to Angles",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>sin 60° = <span class=\"font-semibold\">_____</span></span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "a", "label": "√3/2", "isCorrect": true, "feedback": "Correct! sin 60° = √3/2."},
              {"value": "b", "label": "1/2", "isCorrect": false, "feedback": "Incorrect, 1/2 is sin 30°."},
              {"value": "c", "label": "√2/2", "isCorrect": false, "feedback": "Incorrect, √2/2 is sin 45°."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>tan 30° = <span class=\"font-semibold\">_____</span></span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "a", "label": "√3/3", "isCorrect": true, "feedback": "Correct! tan 30° = √3/3."},
              {"value": "b", "label": "1", "isCorrect": false, "feedback": "Incorrect, tan 45° = 1."},
              {"value": "c", "label": "√3", "isCorrect": false, "feedback": "Incorrect, tan 60° = √3."}
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Using Surds in Trigonometric Ratios",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Surds like √2 and √3 appear in trig values because of the geometric relationships in right triangles. Knowing how to manipulate these surds is important when calculating exact values.</p>",
    "workedExample": {
      "title": "Worked Example: Simplifying tan 45°",
      "problem": "Find tan 45° using the sides of the 45°-45°-90° triangle and write as an exact surd or simplified fraction.",
      "questions": [
        {
          "id": "q1",
          "prompt": "In a 45° triangle with legs 1 and hypotenuse √2, what is tan 45° = opposite/adjacent?",
          "answer": "1",
          "feedback": "Correct, opposite and adjacent are both 1, so tan 45° = 1."
        }
      ]
    }
  },
  "step5": {
    "title": "Interactive Diagram: Visualizing Exact Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the unit circle diagram below to see the exact sine and cosine values for key angles visually.</p>",
    "diagramHtml": "<svg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>\n  <circle cx='150' cy='150' r='100' stroke='black' stroke-width='2' fill='none'/>\n  <!-- 30° point -->\n  <line x1='150' y1='150' x2='236' y2='200' stroke='red' stroke-width='2'/>\n  <circle cx='236' cy='200' r='4' fill='red'/>\n  <text x='240' y='205' font-family='sans-serif' font-size='14' fill='red'>30°</text>\n  <!-- 45° point -->\n  <line x1='150' y1='150' x2='221' y2='79' stroke='blue' stroke-width='2'/>\n  <circle cx='221' cy='79' r='4' fill='blue'/>\n  <text x='224' y='75' font-family='sans-serif' font-size='14' fill='blue'>45°</text>\n  <!-- 60° point -->\n  <line x1='150' y1='150' x2='200' y2='54' stroke='green' stroke-width='2'/>\n  <circle cx='200' cy='54' r='4' fill='green'/>\n  <text x='204' y='50' font-family='sans-serif' font-size='14' fill='green'>60°</text>\n  <!-- x and y axis -->\n  <line x1='50' y1='150' x2='250' y2='150' stroke='grey' stroke-width='1' stroke-dasharray='5,5'/>\n  <line x1='150' y1='50' x2='150' y2='250' stroke='grey' stroke-width='1' stroke-dasharray='5,5'/>\n</svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Use exact trigonometric values to find the height of a triangle with a 60° angle and hypotenuse length 10 cm. Express your answer as a surd.</span>",
      "hint": "Remember to apply sin θ = opposite/hypotenuse and use sin 60° = √3/2.",
      "mustHaveKeywords": ["sin 60°", "hypotenuse", "opposite", "height", "surd", "√3/2"],
      "optionalKeywords": ["triangle", "exact value", "without calculator"],
      "modelAnswer": "<span>To find the height (opposite side), use sin 60° = height / 10. Since sin 60° = √3/2, then height = 10 × √3/2 = 5√3 cm.</span>",
      "scaffoldPrompts": ["Identify the opposite side for the 60° angle.", "Write out sin 60° = opposite/hypotenuse.", "Substitute the known values.", "Solve for the height (opposite side)."]
    }
  }
};