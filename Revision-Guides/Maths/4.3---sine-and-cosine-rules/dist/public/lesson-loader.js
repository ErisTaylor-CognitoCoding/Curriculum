window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.3 - Sine and cosine rules",
  "strapline": "Learn how to use the sine and cosine rules to solve non-right-angled triangles and calculate their areas.",
  "learningObjectives": [
    "Students should be able to apply the sine rule to calculate unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to apply the cosine rule to calculate unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to calculate the area of any triangle using the formula Area = ½ab sin C (Maths 4.3)"
  ],
  "keyFormulas": [
    "Sine Rule: a/sin A = b/sin B = c/sin C",
    "Cosine Rule: a² = b² + c² - 2bc cos A",
    "Area Formula: Area = ½ab sin C"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><polygon points='60,250 300,250 140,80' fill='#cce5ff' stroke='#004085' stroke-width='2'/><text x='55' y='270' font-family='sans-serif' font-size='14' fill='#004085'>B</text><text x='305' y='270' font-family='sans-serif' font-size='14' fill='#004085'>C</text><text x='135' y='70' font-family='sans-serif' font-size='14' fill='#004085'>A</text><line x1='60' y1='250' x2='300' y2='250' stroke='#004085' stroke-width='2'/><line x1='60' y1='250' x2='140' y2='80' stroke='#004085' stroke-width='2'/><line x1='140' y1='80' x2='300' y2='250' stroke='#004085' stroke-width='2'/><text x='180' y='260' font-family='sans-serif' font-size='14' fill='#004085'>a</text><text x='90' y='160' font-family='sans-serif' font-size='14' fill='#004085'>b</text><text x='230' y='140' font-family='sans-serif' font-size='14' fill='#004085'>c</text><text x='70' y='230' font-family='sans-serif' font-size='14' fill='#004085'>B</text><text x='190' y='95' font-family='sans-serif' font-size='14' fill='#004085'>A</text><text x='290' y='230' font-family='sans-serif' font-size='14' fill='#004085'>C</text></svg>",
  "step1": {
    "title": "Concept: Understanding the Sine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>sine rule</strong> is a formula connecting the lengths of sides of any triangle to the sines of its opposite angles: <em>a/sin A = b/sin B = c/sin C</em>. It’s used when you know either two angles and one side, or two sides and a non-included angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine shining a flashlight at a triangle. The brightness (side length) relates to the angle of the beam hitting it. The sine rule helps match those angles to side lengths, like linking beam angles to brightness levels.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using the Sine Rule to Find a Side",
      "problem": "In triangle ABC, angle A = 40°, angle B = 60° and side a = 8 cm. Find side b.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the size of angle C? (Hint: Sum of angles in a triangle = 180°)",
          "answer": "80",
          "feedback": "Correct! 180° - 40° - 60° = 80°."
        },
        {
          "id": "q2",
          "prompt": "Write the sine rule ratio involving side a and angle A.",
          "answer": "8 / sin 40",
          "feedback": "Correct. Side a over sine of angle A is 8 / sin 40°."
        },
        {
          "id": "q3",
          "prompt": "Write the sine rule ratio involving side b and angle B.",
          "answer": "b / sin 60",
          "feedback": "Correct. Side b over sine of angle B is b / sin 60°."
        },
        {
          "id": "q4",
          "prompt": "Set up the equation relating these two ratios.",
          "answer": "8 / sin 40 = b / sin 60",
          "feedback": "Correct! This sets the sine rule to find b."
        },
        {
          "id": "q5",
          "prompt": "Rearrange the equation to solve for b.",
          "answer": "b = 8 × sin 60 / sin 40",
          "feedback": "Well done! That’s the correct rearrangement."
        },
        {
          "id": "q6",
          "prompt": "Calculate b using sin 40° ≈ 0.6428 and sin 60° ≈ 0.866.",
          "answer": "10.79",
          "feedback": "Correct! Side b ≈ 10.79 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>cosine rule</strong> relates the lengths of sides of any triangle with the cosine of one angle: <em>a² = b² + c² - 2bc cos A</em>. It is useful when two sides and the included angle are known, or when all three sides are known and you want to find an angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the cosine rule like adjusting the classic Pythagoras theorem for triangles that aren’t right-angled. It ‘corrects’ the relationship using the cosine of the angle in the middle.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding a Side Using Cosine Rule",
      "problem": "Triangle ABC has sides b = 7 cm, c = 10 cm, and angle A = 60°. Find side a.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write down the cosine rule formula for side a².",
          "answer": "a² = b² + c² - 2bc cos A",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Substitute the values into the formula.",
          "answer": "a² = 7² + 10² - 2 × 7 × 10 × cos 60",
          "feedback": "Correct substitution."
        },
        {
          "id": "q3",
          "prompt": "Calculate the values: 7², 10² and cos 60° ≈ 0.5.",
          "answer": "a² = 49 + 100 - 2 × 7 × 10 × 0.5",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Calculate the subtraction term: 2 × 7 × 10 × 0.5",
          "answer": "70",
          "feedback": "Correct! 2 × 7 × 10 × 0.5 = 70."
        },
        {
          "id": "q5",
          "prompt": "Complete the equation for a².",
          "answer": "a² = 149 - 70",
          "feedback": "Exactly right."
        },
        {
          "id": "q6",
          "prompt": "Calculate a² and then a (√a²).",
          "answer": "a = 9.22",
          "feedback": "Well done! Side a ≈ 9.22 cm."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Calculating Area Using ½ab sin C",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <em>area of any triangle</em> can be calculated using the formula <strong>Area = ½ × a × b × sin C</strong>, where a and b are two sides, and C is the included angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This formula extends the idea of base × height ÷ 2 by incorporating the angle between the two sides to find the height implicitly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Area",
      "problem": "In triangle ABC, sides a = 8 cm and b = 6 cm, and angle C = 50°. Find the area.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the formula to calculate the area.",
          "answer": "Area = 1/2 × a × b × sin C",
          "feedback": "Correct!"
        },
        {
          "id": "q2",
          "prompt": "Substitute the given values into the formula.",
          "answer": "Area = 1/2 × 8 × 6 × sin 50",
          "feedback": "Good substitution."
        },
        {
          "id": "q3",
          "prompt": "Calculate sin 50° (use 0.766).",
          "answer": "Area = 1/2 × 8 × 6 × 0.766",
          "feedback": "Correct!"
        },
        {
          "id": "q4",
          "prompt": "Calculate the product 1/2 × 8 × 6.",
          "answer": "24",
          "feedback": "Well done!"
        },
        {
          "id": "q5",
          "prompt": "Calculate the final area: 24 × 0.766.",
          "answer": "18.38",
          "feedback": "Correct! Area ≈ 18.38 cm²."
        }
      ]
    }
  },
  "step4": {
    "title": "Check Your Understanding: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which formula would you use to find an unknown side when two sides and the included angle are known?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Sine Rule</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Sine rule is used when two angles and a side, or two sides and a non-included angle are known.</span>"
          },
          {
            "id": "b",
            "label": "<span>Cosine Rule</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! The cosine rule is used with two sides and the included angle.</span>"
          },
          {
            "id": "c",
            "label": "<span>Area formula ½ab sin C</span>",
            "isCorrect": false,
            "explanation": "<span>This calculates area, not side lengths.</span>"
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> rule relates sides of a triangle with the sines of their opposite angles.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "sine",
                "label": "Sine",
                "isCorrect": true,
                "feedback": "<span>Correct!</span>"
              },
              {
                "value": "cosine",
                "label": "Cosine",
                "isCorrect": false,
                "feedback": "<span>Try again. Cosine rule uses cosines, not sines.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The formula <span class=\"font-semibold\">a² = b² + c² - 2bc cos A</span> is known as the _____ rule.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "cosine",
                "label": "Cosine",
                "isCorrect": true,
                "feedback": "<span>Correct!</span>"
              },
              {
                "value": "sine",
                "label": "Sine",
                "isCorrect": false,
                "feedback": "<span>Incorrect. This is the cosine rule formula.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span>The area formula involving sine is <span class=\"font-semibold\">Area = ½ab sin _____</span>.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "C",
                "label": "C",
                "isCorrect": true,
                "feedback": "<span>Correct! It uses the angle between sides a and b.</span>"
              },
              {
                "value": "A",
                "label": "A",
                "isCorrect": false,
                "feedback": "<span>Try again. The formula uses the included angle between sides a and b.</span>"
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
      "prompt": "<span>Given triangle ABC where side a = 9 cm, side b = 12 cm, and angle C = 70°, calculate angle B using the sine rule, then find side c using the cosine rule.</span>",
      "hint": "<span>First find angle A (sum angles = 180°), use sine rule to find angle B, then apply cosine rule to find side c.</span>",
      "mustHaveKeywords": ["sine rule", "cosine rule", "angle calculation", "side length"],
      "optionalKeywords": ["rearrangement", "substitution"],
      "modelAnswer": "<span>Step 1: Calculate angle A = 180° - angle B - 70°. Step 2: Use sine rule a/sin A = b/sin B to find angle B. Step 3: Rearrange and solve for angle B. Step 4: Use cosine rule c² = a² + b² - 2ab cos C to find side c. Step 5: Calculate c and write the answer.</span>",
      "scaffoldPrompts": ["Check sum of angles", "Apply sine rule with known sides and angles", "Rearrange to find unknown angle", "Apply cosine rule formula", "Calculate final side length"]
    }
  }
};