window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.4 - Area of triangle = ½ab sin C",
  "strapline": "Learn to calculate the area of any triangle using trigonometry and exact angle values.",
  "learningObjectives": [
    "Students should be able to calculate the area of any triangle using the formula ½ab sin C (Maths 4.4)",
    "Students should be able to apply exact trigonometric values for key angles (0°, 30°, 45°, 60°, 90°) without a calculator (Maths 4.4)"
  ],
  "step1": {
    "title": "Concept: Area formula ½ab sin C",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The formula <strong>Area = ½ab sin C</strong> helps to find the area of any triangle when you know two sides and the included angle. Here, <em>a</em> and <em>b</em> are the lengths of two sides, and <em>C</em> is the angle between them. This is useful when you don’t know or cannot easily find the height.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine laying down two sticks at an angle. Instead of measuring the height from the base, you simply use the length of sticks and the angle between them to find the area of the triangle they form.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given sides a = 7 cm and b = 5 cm, and angle C = 60° between them.</span>",
        "<span>Calculate the area: Area = ½ × 7 × 5 × sin 60° = 17.5 × sin 60°</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Exact trigonometric values for key angles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Some sine values for key angles are exact and should be memorised: <br>sin 0° = 0, sin 30° = ½, sin 45° = √2/2, sin 60° = √3/2, sin 90° = 1.<br>Using these values exactly avoids rounding errors when calculating area without a calculator.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of these exact sine values like exact measurements on a ruler—knowing them by heart helps quickly solve problems without needing a calculator.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find sin 45°: sin 45° = √2/2 ≈ 0.707</span>",
        "<span>If angle C = 45°, use sin 45° exactly instead of an approximate decimal.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Included angle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The angle <strong>C</strong> in the formula is the angle between the two known sides <em>a</em> and <em>b</em>. It is called the <em>included angle</em>. Identifying the correct angle is crucial for using the formula correctly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the included angle as the hinge connecting two sticks; the area depends on how wide this hinge opens.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Triangle with sides 8 cm and 6 cm and angle between them marked as 50°.</span>",
        "<span>Use 50° as angle C because it is between the two known sides.</span>"
      ]
    }
  },
  "step4": {
    "title": "Calculating area using the formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the area, substitute the lengths and sine of the included angle into the formula: Area = ½ × a × b × sin C. Calculate sine exactly if possible, then multiply all terms.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a = 10 cm, b = 7 cm, and C = 30°.</span>",
        "<span>Area = ½ × 10 × 7 × sin 30° = 35 × ½ = 17.5 cm<sup>2</sup>.</span>"
      ]
    }
  },
  "step5": {
    "title": "Practice: Use exact sine values to calculate area",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the memorised sine values to solve area problems quickly without a calculator.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Sides: 9 cm and 4 cm; angle between them 60°.</span>",
        "<span>Area = ½ × 9 × 4 × sin 60° = 18 × √3/2 = 9√3 cm<sup>2</sup>.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Find the area of a triangle with sides 12 cm and 8 cm enclosing an angle of 45°. Show your working using exact values.</span>",
      "hint": "Remember to identify the included angle and use exact sine values from memory.",
      "mustHaveKeywords": ["½ab sin C", "included angle", "sin 45°", "exact trigonometric values"],
      "optionalKeywords": ["simplify", "multiply", "area in cm<sup>2</sup>"],
      "modelAnswer": "<span>First, identify the sides a = 12 cm, b = 8 cm, and included angle C = 45°. Use the formula area = ½ × 12 × 8 × sin 45°. Since sin 45° = √2/2, area = 48 × √2/2 = 24√2 cm<sup>2</sup>.</span>",
      "scaffoldPrompts": [
        "Identify the two sides and the included angle.",
        "Recall the exact sine value for 45°.",
        "Substitute the values into the formula ½ab sin C.",
        "Simplify the expression for the area."
      ]
    }
  }
};