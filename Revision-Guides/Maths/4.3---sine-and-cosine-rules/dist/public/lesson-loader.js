window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.3 - Sine and cosine rules",
  "strapline": "Learn how to apply the sine and cosine rules to find unknown sides and angles in any triangle, and use the sine area formula for area calculations.",
  "learningObjectives": [
    "Students should be able to apply the sine rule to calculate unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to apply the cosine rule to calculate unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to calculate the area of any triangle using the formula Area = ½ab sin C (Maths 4.3)"
  ],
  "keyFormulas": [
    "Concept 1: Sine Rule - a/sin A = b/sin B = c/sin C",
    "Concept 2: Cosine Rule - a² = b² + c² - 2bc cos A",
    "Concept 3: Area Formula - Area = ½ab sin C"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><polygon points='60,250 350,250 180,70' fill='#cce5ff' stroke='#004085' stroke-width='2'/><text x='40' y='255' font-family='sans-serif' font-size='14'>B</text><text x='360' y='255' font-family='sans-serif' font-size='14'>C</text><text x='170' y='50' font-family='sans-serif' font-size='14'>A</text><line x1='60' y1='250' x2='350' y2='250' stroke='#004085' stroke-width='2'/><text x='200' y='265' font-family='sans-serif' font-size='14'>a</text><line x1='180' y1='70' x2='350' y2='250' stroke='#004085' stroke-width='2'/><text x='270' y='160' font-family='sans-serif' font-size='14'>b</text><line x1='60' y1='250' x2='180' y2='70' stroke='#004085' stroke-width='2'/><text x='100' y='150' font-family='sans-serif' font-size='14'>c</text><text x='70' y='240' font-family='sans-serif' font-size='14' fill='#004085'>B</text><text x='180' y='90' font-family='sans-serif' font-size='14' fill='#004085'>∠A</text><text x='350' y='240' font-family='sans-serif' font-size='14' fill='#004085'>∠C</text></svg>",
  "step1": {
    "title": "Introduction to the Sine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>sine rule</strong> relates the ratios of sides to the sines of their opposite angles in any triangle: <em>a/sin A = b/sin B = c/sin C</em>. Use it when you know either two angles and one side, or two sides and a non-included angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a musical tune where the length of strings and the notes they produce are linked. Knowing either the tune (angles) or string length helps you find the other.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using the Sine Rule",
      "problem": "In triangle ABC, angle A = 40°, angle B = 60°, and side a = 8 cm. Find side b.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is angle C?",
          "answer": "80",
          "feedback": "Correct! The angles sum to 180°, so C = 180 - 40 - 60 = 80°."
        },
        {
          "id": "q2",
          "prompt": "Write the sine rule ratio involving sides a and b and their opposite angles.",
          "answer": "a/sin A = b/sin B",
          "feedback": "Correct! The sine rule states a/sin A = b/sin B."
        },
        {
          "id": "q3",
          "prompt": "Substitute the known values: 8 / sin 40° = b / sin 60°. What is b?",
          "answer": "8 * sin 60 / sin 40",
          "feedback": "Great! Now calculate b = 8 × (sin 60°) / (sin 40°)."
        }
      ]
    }
  },
  "step2": {
    "title": "Introduction to the Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>cosine rule</strong> helps find unknown sides or angles in any triangle: <em>a² = b² + c² - 2bc cos A</em>. Use it when you know two sides and the included angle, or all three sides.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine calculating the third side of a stretched bow string given the length of two parts and the angle between them.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using the Cosine Rule",
      "problem": "In triangle ABC, sides b = 7 cm, c = 10 cm, and angle A = 60°. Find side a.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the cosine rule formula for side a.",
          "answer": "a^2 = b^2 + c^2 - 2bc cos A",
          "feedback": "Correct! That's the formula to use."
        },
        {
          "id": "q2",
          "prompt": "Substitute & calculate a² = 7² + 10² - 2×7×10×cos 60°. What is a²?",
          "answer": "49 + 100 - 140 * 0.5",
          "feedback": "Correct! Now compute: 49 + 100 - 70 = 79."
        },
        {
          "id": "q3",
          "prompt": "What is side a (take square root of a²)?",
          "answer": "sqrt(79)",
          "feedback": "Exactly! Side a ≈ 8.89 cm."
        }
      ]
    }
  },
  "step3": {
    "title": "Calculating the Area of a Triangle Using Sine",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The area of any triangle can be found using <strong>Area = ½ab sin C</strong>, where a and b are two sides enclosing angle C. This works for all triangles, not just right-angled ones.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like finding the shadow area of a tilted rectangular sheet by using the length, width, and angle between them.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Area Calculation",
      "problem": "In triangle ABC, sides a = 9 cm, b = 12 cm, and angle C = 50°. Find the area of the triangle.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write down the formula and substitute the values.",
          "answer": "Area = 0.5 × 9 × 12 × sin 50",
          "feedback": "Correct! Now calculate the numerical value."
        },
        {
          "id": "q2",
          "prompt": "Calculate sin 50° (round to 2 decimal places).",
          "answer": "0.77",
          "feedback": "Well done! sin 50° ≈ 0.77."
        },
        {
          "id": "q3",
          "prompt": "Calculate the area now using 0.5 × 9 × 12 × 0.77.",
          "answer": "41.58",
          "feedback": "Correct! The area is approximately 41.58 cm²."
        }
      ]
    }
  },
  "step4": {
    "title": "When to Use Sine or Cosine Rules",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Deciding which rule to use depends on the information given: Use <strong>sine rule</strong> if you know two angles and one side (AAS or ASA) or two sides and a non-included angle (SSA). Use <strong>cosine rule</strong> if you know two sides and the included angle (SAS), or all three sides (SSS).</p>",
    "workedExample": {
      "title": "Classify the Triangle Information Scenario",
      "problem": "Given: angle A = 45°, angle B = 55°, side a = 6 cm. Which rule is appropriate to find side b?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which rule fits this scenario: Sine rule or Cosine rule?",
          "answer": "Sine rule",
          "feedback": "Correct! Two angles and one side suits the sine rule."
        }
      ]
    }
  },
  "step5": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> Rule is used when you know two sides and the included angle.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              { "value": "sine", "label": "Sine", "isCorrect": false, "feedback": "Try again! This scenario fits the cosine rule." },
              { "value": "cosine", "label": "Cosine", "isCorrect": true, "feedback": "Correct! The cosine rule is used here." }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>In triangle XYZ, side x = 8 cm, side y = 6 cm, and angle Z = 100°. Calculate the length of side z and the area of the triangle.</span>",
      "hint": "Use the cosine rule first to calculate side z, then use the sine area formula with sides x and y and angle Z.",
      "mustHaveKeywords": ["cosine rule", "sine area formula", "substitution", "final answer"],
      "optionalKeywords": ["rounding", "units", "triangle properties"],
      "modelAnswer": "<span>First apply the cosine rule: z² = x² + y² - 2xy cos Z = 8² + 6² - 2 × 8 × 6 × cos 100°. Calculate cos 100°, substitute and find z. Then calculate the area using ½ × x × y × sin Z.</span>",
      "scaffoldPrompts": ["Write down cosine rule formula.", "Calculate cos 100°.", "Substitute the values into the formula.", "Find z by taking the square root.", "Write down the area formula.", "Calculate sin 100°.", "Substitute known values to find the area."]
    }
  }
};