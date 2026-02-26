window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.3 - Sine and cosine rules",
  "strapline": "Learn how to solve any triangle using the sine and cosine rules, and find the area using trigonometry.",
  "learningObjectives": [
    "Students should be able to apply the sine rule to calculate unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to apply the cosine rule to calculate unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to calculate the area of any triangle using the formula Area = ½ab sin C (Maths 4.3)"
  ],
  "keyFormulas": [
    "Concept 1: Sine Rule - a/sin A = b/sin B = c/sin C. Used for two angles and one side or two sides and a non-included angle.",
    "Concept 2: Cosine Rule - a\u00b2 = b\u00b2 + c\u00b2 - 2bc cos A. Used when two sides and included angle, or all three sides are known.",
    "Concept 3: Area Formula (½ab sin C) - Area = ½ × side × side × sin of included angle."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><polygon points='50,250 350,250 150,50' fill='#cce5ff' stroke='#003366' stroke-width='3'/><text x='50' y='270' font-family='sans-serif' font-size='18'>B</text><text x='350' y='270' font-family='sans-serif' font-size='18'>C</text><text x='140' y='45' font-family='sans-serif' font-size='18'>A</text><line x1='150' y1='50' x2='150' y2='250' stroke='#003366' stroke-dasharray='5,5'/><text x='200' y='270' font-family='sans-serif' font-size='16'>a</text><text x='90' y='150' font-family='sans-serif' font-size='16'>b</text><text x='250' y='150' font-family='sans-serif' font-size='16'>c</text><text x='165' y='85' font-family='sans-serif' font-size='16'>A</text><text x='80' y='260' font-family='sans-serif' font-size='16'>B</text><text x='360' y='260' font-family='sans-serif' font-size='16'>C</text></svg>",
  "step1": {
    "title": "Concept: Understanding the Sine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The sine rule relates the sides and angles of any triangle using the formula: <em>a/sin A = b/sin B = c/sin C</em>. It helps find unknown sides or angles when you know two angles and one side, or two sides and a non-included angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a triangle as dance steps with timing. The sine rule keeps the timing perfectly balanced for each side and its opposite angle.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using the Sine Rule Step-by-Step",
      "problem": "In triangle ABC, angle A = 40°, angle B = 60°, and side a = 7 cm. Find side b.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is angle C? (Sum of angles in a triangle is 180°)",
          "answer": "80",
          "feedback": "Correct! 180 - 40 - 60 = 80°"
        },
        {
          "id": "q2",
          "prompt": "Write the sine rule relationship involving sides a and b and their opposite angles.",
          "answer": "a/sin A = b/sin B",
          "feedback": "Correct! a is opposite A, b opposite B."
        },
        {
          "id": "q3",
          "prompt": "Substitute given values into the sine rule: 7/sin 40° = b/sin 60°. What is sin 40° (rounded to 2 decimals)?",
          "answer": "0.64",
          "feedback": "Good! sin 40° ≈ 0.64"
        },
        {
          "id": "q4",
          "prompt": "What is sin 60° (rounded to 2 decimals)?",
          "answer": "0.87",
          "feedback": "Correct! sin 60° ≈ 0.87"
        },
        {
          "id": "q5",
          "prompt": "Calculate b = (7 × sin 60°) / sin 40°. What is b (rounded to 2 decimals)?",
          "answer": "9.52",
          "feedback": "Well done! b ≈ 9.52 cm"
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The cosine rule states that: <em>a\u00b2 = b\u00b2 + c\u00b2 - 2bc cos A</em>. This rule helps find a side when you know two sides and the included angle, or find an angle when all three sides are known.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it as calculating the length of a stretched rubber band connecting two points, accounting for the angle between them.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using the Cosine Rule Step-by-Step",
      "problem": "In triangle ABC, sides b = 8 cm, c = 6 cm, and angle A = 60°. Find side a.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write down the cosine rule formula to find side a.",
          "answer": "a^2 = b^2 + c^2 - 2bc cos A",
          "feedback": "Correct! This is the formula for finding a side."
        },
        {
          "id": "q2",
          "prompt": "Substitute the known values: a\u00b2 = 8\u00b2 + 6\u00b2 - 2 × 8 × 6 × cos 60°.",
          "answer": "a^2 = 64 + 36 - 96 × cos 60°",
          "feedback": "Good! 8 squared is 64, 6 squared is 36."
        },
        {
          "id": "q3",
          "prompt": "What is cos 60°?",
          "answer": "0.5",
          "feedback": "Correct! cos 60° = 0.5"
        },
        {
          "id": "q4",
          "prompt": "Calculate a\u00b2 = 64 + 36 - 96 × 0.5. What is a\u00b2?",
          "answer": "64",
          "feedback": "Right! 96 × 0.5 = 48; 64 + 36 - 48 = 52, actually. Please recalculate."
        },
        {
          "id": "q4_corrected",
          "prompt": "Recalculate a\u00b2 = 64 + 36 - 48. What is the correct value of a\u00b2?",
          "answer": "52",
          "feedback": "Correct! a\u00b2 = 52"
        },
        {
          "id": "q5",
          "prompt": "Find a by calculating the square root of 52 (rounded to 2 decimals).",
          "answer": "7.21",
          "feedback": "Well done! a ≈ 7.21 cm"
        }
      ]
    }
  },
  "step3": {
    "title": "Application: Calculating Angles Using the Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can also find an unknown angle when all three sides of a triangle are known using cosine rule rearranged: <em>cos A = (b\u00b2 + c\u00b2 - a\u00b2) / (2bc)</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Find angle A",
      "problem": "In triangle ABC, sides a = 7 cm, b = 9 cm, c = 10 cm. Find angle A.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Use the cosine rule formula to express cos A.",
          "answer": "cos A = (b^2 + c^2 - a^2) / (2bc)",
          "feedback": "Correct!"
        },
        {
          "id": "q2",
          "prompt": "Substitute values: cos A = (9\u00b2 + 10\u00b2 - 7\u00b2) / (2 × 9 × 10). Calculate numerator.",
          "answer": "144",
          "feedback": "Correct! 81 + 100 - 49 = 132 (please recalculate)."
        },
        {
          "id": "q2_corrected",
          "prompt": "Recalculate numerator: 9\u00b2 + 10\u00b2 - 7\u00b2.",
          "answer": "132",
          "feedback": "Correct! 81 + 100 - 49 = 132"
        },
        {
          "id": "q3",
          "prompt": "Calculate denominator: 2 × 9 × 10.",
          "answer": "180",
          "feedback": "Correct! 2 × 9 × 10 = 180"
        },
        {
          "id": "q4",
          "prompt": "Find cos A = 132 / 180 (rounded to 3 decimals).",
          "answer": "0.733",
          "feedback": "Well done! cos A ≈ 0.733"
        },
        {
          "id": "q5",
          "prompt": "Find angle A in degrees (use inverse cosine function).",
          "answer": "43.1",
          "feedback": "Correct! angle A ≈ 43.1°"
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Area of a Triangle using ½ab sin C",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Aside from base × height, the area of any triangle can be found with the formula: <em>Area = ½ × a × b × sin C</em>, where a and b are two sides enclosing the angle C.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Area",
      "problem": "In triangle ABC, side a = 10 cm, side b = 8 cm, and angle C = 50°. Find the area.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Substitute values into the area formula: Area = ½ × 10 × 8 × sin 50°. What is sin 50° (rounded to 2 decimals)?",
          "answer": "0.77",
          "feedback": "Correct! sin 50° ≈ 0.77"
        },
        {
          "id": "q2",
          "prompt": "Calculate area = 0.5 × 10 × 8 × 0.77.",
          "answer": "30.8",
          "feedback": "Well done! Area ≈ 30.8 cm²"
        }
      ]
    }
  },
  "step5": {
    "title": "Check Understanding: Mix and Apply Rules",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You may need to combine sine and cosine rules along with the area formula to solve complex triangle problems. Practice ensures understanding when to use each.</p>",
    "workedExample": {
      "title": "Worked Example: Solve a Triangle and Find Area",
      "problem": "Triangle PQR has sides PQ = 7 cm, PR = 9 cm, and angle Q = 60°. Find side QR and then find the area.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which rule helps find side QR when two sides and included angle are known?",
          "answer": "Cosine Rule",
          "feedback": "Correct! Use cosine rule for side QR."
        },
        {
          "id": "q2",
          "prompt": "Express the cosine rule to find QR (side opposite angle Q).",
          "answer": "QR^2 = PQ^2 + PR^2 - 2 × PQ × PR × cos Q",
          "feedback": "Correct!"
        },
        {
          "id": "q3",
          "prompt": "Substitute values: QR² = 7² + 9² - 2 × 7 × 9 × cos 60°. What is cos 60°?",
          "answer": "0.5",
          "feedback": "Right! cos 60° = 0.5"
        },
        {
          "id": "q4",
          "prompt": "Calculate QR² = 49 + 81 - 63. What is QR²?",
          "answer": "67",
          "feedback": "Correct!"
        },
        {
          "id": "q5",
          "prompt": "Find QR (square root of 67 rounded to 2 decimals).",
          "answer": "8.19",
          "feedback": "Well done! QR ≈ 8.19 cm"
        },
        {
          "id": "q6",
          "prompt": "Now find the area using ½ab sin C with sides PQ = 7, PR = 9 and angle Q = 60°. Calculate the area.",
          "answer": "27.27",
          "feedback": "Correct! Area = 0.5 × 7 × 9 × sin 60° ≈ 27.27 cm²"
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>In triangle XYZ, side XY = 12 cm, side YZ = 15 cm, and angle X = 45°. Calculate the length of side XZ. Then, find the area of triangle XYZ.</span>",
      "hint": "Use the cosine rule first to find the unknown side, then apply the area formula ½ab sin C with the two known sides and included angle.",
      "mustHaveKeywords": ["cosine rule", "square root", "area formula", "sin"],
      "optionalKeywords": ["degrees", "triangle properties", "rounding"],
      "modelAnswer": "<span>First, use the cosine rule: XZ² = XY² + YZ² - 2 × XY × YZ × cos angle X.<br/>Calculate the squares: 12² = 144, 15² = 225.<br/>Substitute: XZ² = 144 + 225 - 2 × 12 × 15 × cos 45°.<br/>Cos 45° is about 0.707, so XZ² = 369 - 360 × 0.707 = 369 - 254.52 = 114.48.<br/>Then, XZ ≈ √114.48 = 10.7 cm.<br/>Next, to find the area, use formula ½ × XY × YZ × sin angle X = 0.5 × 12 × 15 × sin 45°.<br/>Sin 45° is 0.707, so area ≈ 0.5 × 12 × 15 × 0.707 = 63.6 cm².</span>",
      "scaffoldPrompts": ["Write the cosine rule formula for side XZ.", "Calculate cosine of the given angle.", "Calculate XZ by square rooting your result.", "Write the area formula with the two sides and included angle.", "Calculate sin of the included angle.", "Compute the area using the formula."]
    }
  }
};