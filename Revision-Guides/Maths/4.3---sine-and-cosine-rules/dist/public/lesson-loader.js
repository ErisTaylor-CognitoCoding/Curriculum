window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.3 - Sine and cosine rules",
  "strapline": "Learn how to solve non-right-angled triangles using sine and cosine rules.",
  "learningObjectives": [
    "Students should be able to apply the sine rule to find unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to apply the cosine rule to find unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to select the appropriate rule (sine or cosine) to solve problems involving non-right-angled triangles (Maths 4.3)"
  ],
  "step1": {
    "title": "Concept: Sine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The sine rule states that in any non-right-angled triangle, the ratio of a side length to the sine of its opposite angle is constant: <strong>a/sin(A) = b/sin(B) = c/sin(C)</strong>. This rule helps you find unknown sides when you know two angles and one side, or unknown angles when you know two sides and a non-included angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a three-legged stool with legs representing sides and the angles between them representing the angles of a triangle. The sine rule helps you compare lengths of legs by comparing the angles opposite them, like keeping the stool balanced.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given triangle ABC with angles A = 40°, B = 60°, and side a = 10 cm, find side b.</span>",
        "<span>Step 1: Find angle C using angle sum of triangle: C = 180° - 40° - 60° = 80°.</span>",
        "<span>Step 2: Use sine rule: a/sin(A) = b/sin(B) → 10/sin(40°) = b/sin(60°).</span>",
        "<span>Step 3: Rearrange to find b: b = (sin(60°) × 10)/sin(40°).</span>",
        "<span>Step 4: Calculate value of b (students to compute this themselves).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The cosine rule is used for non-right-angled triangles to find an unknown side or angle. The formula is <strong>a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc × cos(A)</strong>. It is used when you know two sides and the included angle, or all three sides to find an angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the cosine rule like adjusting one side of a tripod: by knowing two sides and the angle between them, you can figure out the last leg length accurately, even if the angle isn’t 90°.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given triangle ABC with sides b = 7 cm, c = 9 cm and angle A = 60°, find side a.</span>",
        "<span>Step 1: Use cosine rule: a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc × cos(A).</span>",
        "<span>Step 2: Substitute values: a<sup>2</sup> = 7<sup>2</sup> + 9<sup>2</sup> - 2 × 7 × 9 × cos(60°).</span>",
        "<span>Step 3: Simplify this expression.</span>",
        "<span>Step 4: Find a by taking the square root (students to calculate).</span>"
      ]
    }
  },
  "step3": {
    "title": "Identifying When to Use Sine or Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Choosing between sine and cosine rules depends on what information is given. Use sine rule when you know two angles and one side or two sides and a non-included angle. Use cosine rule when you know two sides and the included angle, or all three sides.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Triangle XYZ has sides x = 8 cm, y = 6 cm, and angle Z = 70°. Which rule applies to find side z?</span>",
        "<span>Since two sides and the included angle are known, use cosine rule.</span>"
      ]
    }
  },
  "step4": {
    "title": "Practice Applying the Sine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the sine rule to find unknown sides or angles step by step, remembering to find missing angles first where possible.</p>",
    "workedExample": {
      "title": "Practice Example",
      "bullets": [
        "<span>In triangle DEF, angles D = 50°, E = 65°, and side d = 12 cm. Find side e.</span>",
        "<span>Step 1: Calculate angle F = 180° - 50° - 65° = 65°.</span>",
        "<span>Step 2: Use sine rule: d/sin(D) = e/sin(E).</span>",
        "<span>Step 3: Substitute values and solve for e.</span>"
      ]
    }
  },
  "step5": {
    "title": "Practice Applying the Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the cosine rule to calculate unknown sides or angles when given the correct configurations.</p>",
    "workedExample": {
      "title": "Practice Example",
      "bullets": [
        "<span>Triangle GHI has sides g = 10 cm, h = 14 cm and included angle I = 45°. Find side i.</span>",
        "<span>Step 1: Apply cosine rule.</span>",
        "<span>Step 2: Calculate i<sup>2</sup> = 10<sup>2</sup> + 14<sup>2</sup> - 2 × 10 × 14 × cos(45°).</span>",
        "<span>Step 3: Simplify and find i.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to find an unknown side or angle in a non-right-angled triangle given various sets of information, including which rule you would apply and why.</span>",
      "hint": "Remember to identify which sides or angles are known and check if you have two angles and one side or two sides and the included angle to decide which rule to use.",
      "mustHaveKeywords": ["sine rule", "cosine rule", "opposite angle", "included angle", "non-right-angled triangle"],
      "optionalKeywords": ["triangle", "angle sum", "side length"],
      "modelAnswer": "<span>The first step is to determine what information is given. If two angles and one side, or two sides and a non-included angle are known, apply the sine rule which relates sides and sines of opposite angles. If two sides and the included angle, or all three sides are known, use the cosine rule. Then, use the relevant formula: for sine rule a/sin(A) = b/sin(B) = c/sin(C), and for cosine rule a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc cos(A). Calculate unknown sides or angles stepwise, checking all angles add up to 180°.</span>",
      "scaffoldPrompts": ["Identify known sides and angles.", "Decide if sine or cosine rule fits the known data.", "Apply the correct formula.", "Solve algebraically for the unknown."]
    }
  }
};