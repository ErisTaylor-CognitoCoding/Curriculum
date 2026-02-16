window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.3 - Sine and cosine rules",
  "strapline": "Learn how to use the sine and cosine rules to solve problems involving non-right-angled triangles.",
  "learningObjectives": [
    "Students should be able to apply the sine rule to find unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to apply the cosine rule to find unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to select the appropriate rule (sine or cosine) to solve problems involving non-right-angled triangles (Maths 4.3)"
  ],
  "keyFormulas": [
    "Concept 1: Sine Rule: a/sin(A) = b/sin(B) = c/sin(C)",
    "Concept 2: Cosine Rule: a² = b² + c² - 2bc·cos(A)",
    "Concept 3: Non-right-angled triangle: triangle without a 90° angle, requiring sine or cosine rules"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <polygon points='100,250 300,250 180,100' fill='#e0f7fa' stroke='#00796b' stroke-width='3'/>  <text x='90' y='265' font-family='sans-serif' font-size='18' fill='#004d40'>B</text>  <text x='305' y='265' font-family='sans-serif' font-size='18' fill='#004d40'>C</text>  <text x='165' y='90' font-family='sans-serif' font-size='18' fill='#004d40'>A</text>  <line x1='100' y1='250' x2='300' y2='250' stroke='#004d40' stroke-width='2' />  <text x='195' y='270' font-family='sans-serif' font-size='16' fill='#00695c'>a</text>  <line x1='100' y1='250' x2='180' y2='100' stroke='#004d40' stroke-width='2' />  <text x='130' y='180' font-family='sans-serif' font-size='16' fill='#00695c'>b</text>  <line x1='180' y1='100' x2='300' y2='250' stroke='#004d40' stroke-width='2' />  <text x='240' y='180' font-family='sans-serif' font-size='16' fill='#00695c'>c</text>  <text x='130' y='110' font-family='sans-serif' font-size='14' fill='#004d40'>A</text>  <text x='70' y='255' font-family='sans-serif' font-size='14' fill='#004d40'>B</text>  <text x='310' y='255' font-family='sans-serif' font-size='14' fill='#004d40'>C</text></svg>",
  "step1": {
    "title": "Concept: Understanding Non-Right-Angled Triangles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Non-right-angled triangles do not have a 90-degree angle, so we cannot use basic trigonometry (SOH CAH TOA). Instead, we use the sine and cosine rules to find unknown sides or angles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a triangular park with no right angles; you need special rules (sine or cosine) to find the length of a side or the size of an angle because simple right-angle methods don’t apply.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Non-Right Angled Triangles",
      "problem": "Look at the triangle with angles: 50°, 60°, and 70°. Is this triangle right-angled?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Input ‘Yes’ if it has a 90° angle, otherwise ‘No’.",
          "answer": "No",
          "feedback": "Correct! None of the angles are 90°, so this triangle is non-right angled."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: The Sine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The sine rule states that in any triangle, <strong>a/sin(A) = b/sin(B) = c/sin(C)</strong>. It helps find unknown sides or angles when two angles and one side, or two sides and a non-included angle are known.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine balancing scales holding sides and their opposite angles. The ratio remains equal regardless of the side chosen.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding a Side Using the Sine Rule",
      "problem": "Triangle ABC has angles A=40°, B=60°, side a=10 cm. Find side b.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is sin(A)?",
          "answer": "sin(40°)",
          "feedback": "Correct, sin(40°) is used in the rule."
        },
        {
          "id": "q2",
          "prompt": "What is sin(B)?",
          "answer": "sin(60°)",
          "feedback": "Correct, sin(60°) is important for side b."
        },
        {
          "id": "q3",
          "prompt": "Write the equation to find b: b = a × sin(B) / sin(A).",
          "answer": "b = 10 × sin(60°) / sin(40°)",
          "feedback": "Correct! Now calculate b using this."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: The Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The cosine rule is <strong>a² = b² + c² - 2bc·cos(A)</strong> and is used when you know two sides and the included angle or all three sides and want to find an angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine adjusting one side of a triangle while keeping two sides fixed; the cosine rule accounts for the ‘tilt’ caused by the angle between those sides.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding a Side Using the Cosine Rule",
      "problem": "Triangle ABC has sides b=7 cm, c=8 cm, and angle A=60°. Find side a.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write down the cosine rule formula for a².",
          "answer": "a² = b² + c² - 2bc·cos(A)",
          "feedback": "Correct formula."
        },
        {
          "id": "q2",
          "prompt": "Substitute values: a² = 7² + 8² - 2 × 7 × 8 × cos(60°).",
          "answer": "a² = 49 + 64 - 112 × cos(60°)",
          "feedback": "Correct substitution."
        },
        {
          "id": "q3",
          "prompt": "Calculate the value of 'a²' using cos(60°) = 0.5.",
          "answer": "a² = 113 - 56",
          "feedback": "Correct, 112 × 0.5 = 56."
        }
      ]
    }
  },
  "step4": {
    "title": "Choosing Between Sine and Cosine Rules",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Select the sine rule if you know two angles and a side, or two sides and a non-included angle. Choose the cosine rule if you know two sides and the included angle, or all three sides.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the sine rule as the 'angle-led' rule and the cosine rule as the 'side-led' rule.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Selecting the Correct Rule",
      "problem": "You know: angle B = 50°, angle C = 70°, side a = 20 cm. Which rule to use to find side b?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are two angles and one side known?",
          "answer": "Yes",
          "feedback": "Correct, so use the sine rule."
        }
      ]
    }
  },
  "step5": {
    "title": "Practice: Solving for Unknown Sides and Angles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Practice solving problems step-by-step using the sine rule or cosine rule, depending on the known information.</p>",
    "workedExample": {
      "title": "Worked Example: Find Angle Using Cosine Rule",
      "problem": "Triangle with sides a=9 cm, b=7 cm, c=5 cm. Find angle A.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the cosine rule rearranged to find cos(A): cos(A) = (b² + c² - a²) / (2bc).",
          "answer": "cos(A) = (7² + 5² - 9²) / (2 × 7 × 5)",
          "feedback": "Correct rearrangement and substitution."
        },
        {
          "id": "q2",
          "prompt": "Calculate cos(A): (49 + 25 - 81) / 70 = ?",
          "answer": "-7 / 70",
          "feedback": "Correct, calculate numerator and denominator."
        },
        {
          "id": "q3",
          "prompt": "Find A by calculating arccos(-0.1). Enter angle in degrees (rounded to nearest degree).",
          "answer": "95",
          "feedback": "Well done! The angle A is approximately 95°."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>In triangle XYZ, angle X = 45°, side x = 12 cm, and side y = 15 cm. Use the sine or cosine rule to find angle Y and side z. Show all your calculations clearly.</span>",
      "hint": "First decide which rule is appropriate for each part. Remember to label the triangle carefully and check your units.",
      "mustHaveKeywords": ["sine rule", "cosine rule", "opposite angle", "included angle", "arccos", "arcsin"],
      "optionalKeywords": ["rounding", "degrees", "formula substitution"],
      "modelAnswer": "<span>Use cosine rule to find side z, as two sides and included angle X are known:<br/>z² = x² + y² - 2xy·cos(X). Then use sine rule to find angle Y:<br/>sin(Y)/y = sin(X)/z.<br/>Complete the calculations step-by-step including using arccos and arcsin functions, rounding angles correctly.</span>",
      "scaffoldPrompts": [
        "Step 1: Identify known values and what to find.",
        "Step 2: Apply cosine rule to find side z.",
        "Step 3: Calculate z from the equation.",
        "Step 4: Apply sine rule to find angle Y.",
        "Step 5: Calculate angle Y from sine value.",
        "Step 6: Check that all angles sum to 180°."
      ]
    }
  }
};