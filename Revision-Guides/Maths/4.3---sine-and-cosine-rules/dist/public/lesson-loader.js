window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.3 - Sine and cosine rules",
  "strapline": "Learn how to apply the sine and cosine rules to solve problems involving non-right-angled triangles.",
  "learningObjectives": [
    "Students should be able to apply the sine rule to find unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to apply the cosine rule to find unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to select the appropriate rule (sine or cosine) to solve problems involving non-right-angled triangles (Maths 4.3)"
  ],
  "keyFormulas": [
    "Sine Rule: a/sin(A) = b/sin(B) = c/sin(C)",
    "Cosine Rule: a² = b² + c² - 2bc·cos(A)",
    "Non-right-angled triangles require sine or cosine rules rather than SOH CAH TOA"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><polygon points='100,250 300,250 200,50' fill='#e3f2fd' stroke='#1976d2' stroke-width='3'/><text x='90' y='260' font-family='sans-serif' font-size='16'>b</text><text x='310' y='260' font-family='sans-serif' font-size='16'>c</text><text x='190' y='40' font-family='sans-serif' font-size='16'>a</text><text x='115' y='230' font-family='sans-serif' font-size='16'>A</text><text x='285' y='230' font-family='sans-serif' font-size='16'>B</text><text x='195' y='260' font-family='sans-serif' font-size='16'>C</text></svg>",
  "step1": {
    "title": "Concept: Understanding the Sine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>sine rule</strong> relates the sides and angles of a non-right-angled triangle: <em>a/sin(A) = b/sin(B) = c/sin(C)</em>. It is useful when you know two angles and one side, or two sides and a non-included angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine matching different-sized shadows of three poles at different angles—the sine rule helps relate their lengths and angles just like linking poles and their shadows.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given triangle with A = 30°, B = 45° and side a = 8 cm.</span>",
        "<span>Find side b using b/sin(B) = a/sin(A).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>cosine rule</strong> is used to find a side or an angle in any triangle when you know two sides and the included angle, or all three sides. The formula is <em>a² = b² + c² - 2bc·cos(A)</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the cosine rule as a more general version of Pythagoras, adjusting for non-right angles.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given sides b = 7, c = 10, and angle A = 60°.</span>",
        "<span>Find side a using the cosine rule formula.</span>"
      ]
    }
  },
  "step3": {
    "title": "When to Use Sine or Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the <strong>sine rule</strong> when you have either two angles and one side or two sides and a non-included angle. Use the <strong>cosine rule</strong> when you have two sides and the angle between them, or when all three sides are known.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Choosing the correct rule is like choosing the right tool: sine rule fits certain scenarios, cosine rule fits others.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a triangle with sides 5, 7 and angle 40° between them, use cosine rule.</span>",
        "<span>Given triangle with sides 8, 12 and angle opposite the 8 cm side, use sine rule.</span>"
      ]
    }
  },
  "step4": {
    "title": "Practice: Applying the Sine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Calculate the unknown side or angle using the sine rule. Remember to set the ratios equal properly and use the sine function on your calculator.</p>",
    "workedExample": {
      "title": "Example",
      "bullets": [
        "<span>Triangle with A = 50°, B = 60°, side a = 9 cm.</span>",
        "<span>Calculate side b using b/sin(B) = a/sin(A).</span>"
      ]
    }
  },
  "step5": {
    "title": "Practice: Applying the Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use cosine rule to find unknown sides or angles. Rearrange the formula as needed. To find angles, use the cosine inverse function after calculation.</p>",
    "workedExample": {
      "title": "Example",
      "bullets": [
        "<span>Triangle with sides b = 6, c = 8 and angle A = 70°.</span>",
        "<span>Find side a using a² = b² + c² - 2bc·cos(A).</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A triangle has sides of length 7 cm and 10 cm with an included angle of 50°. Calculate the length of the third side and then find the size of the largest angle in the triangle.</span>",
      "hint": "Remember to first use the cosine rule to find the unknown side. Then use the sine rule or cosine rule to find the largest angle. Always label sides and angles clearly.",
      "mustHaveKeywords": ["cosine rule", "sine rule", "included angle", "opposite angle", "calculate"],
      "optionalKeywords": ["triangle", "non-right-angled", "inverse cosine", "inverse sine"],
      "modelAnswer": "<span>First apply the cosine rule: a² = b² + c² - 2bc·cos(A). Calculate side a. Then identify the largest side and use the sine rule or cosine rule to find the largest angle opposite that side. Show clear steps and correct use of formulas.</span>",
      "scaffoldPrompts": [
        "Identify which sides and angles you know.",
        "Apply the cosine rule to find the unknown side.",
        "Determine the largest side to find the largest angle.",
        "Apply sine or cosine rule to find the largest angle."
      ]
    }
  }
};