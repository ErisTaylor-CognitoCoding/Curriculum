window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.5 - Exact trig values",
  "strapline": "Learn the exact values of sine, cosine, and tangent for key angles and apply them to solve problems without a calculator.",
  "learningObjectives": [
    "Students should know the exact values of sin θ and cos θ for θ = 0°, 30°, 45°, 60° and 90° and the exact value of tan θ for θ = 0°, 30°, 45° and 60° (Maths 4.5)",
    "Students should apply exact trigonometric values to solve problems without a calculator (Maths 4.5)"
  ],
  "step1": {
    "title": "Concept 1: Exact trigonometric values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exact trigonometric values are specific known results for sine, cosine, and tangent functions at angles 0°, 30°, 45°, 60°, and 90°. These values are often expressed as fractions or surds like <em>√3/2</em> rather than decimal approximations. Memorising these values is essential for solving problems without a calculator.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just like knowing your multiplication tables helps you calculate quickly without a calculator, knowing these exact trig values helps you work out angles and sides exactly and efficiently.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Recall sin 30° = 1/2.</span>",
        "<span>So if sin θ = 1/2, then θ = 30° exactly.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Special triangles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exact trig values come from two special right-angled triangles: a 45-45-90 triangle and a 30-60-90 triangle. These triangles have side lengths in fixed ratios which allow us to derive sine, cosine, and tangent values for those angles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of these triangles as building blocks, like Lego pieces with fixed shapes and sizes from which you can create exact angle measurements.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>45-45-90 Triangle: sides in ratio 1:1:√2.</span>",
        "<span>Therefore sin 45° = opposite/hypotenuse = 1/√2, which simplifies to √2/2.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Surd form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Surd form is a way to write irrational numbers that include roots exactly without converting to decimals. For example, instead of 0.707, we use √2/2 to keep precision in trig values like sin 45° and cos 45°.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like writing <em>50/100</em> instead of 0.5 when you want to keep the fraction exact.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>sin 60° = √3/2 instead of 0.866...</span>",
        "<span>This exact form helps in precise calculations without rounding errors.</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying exact values: sin and cos for key angles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Memorise the following exact values for sine and cosine at 0°, 30°, 45°, 60°, and 90° to solve problems without calculators.</p><ul><li>sin θ: 0, 1/2, √2/2, √3/2, 1</li><li>cos θ: 1, √3/2, √2/2, 1/2, 0</li></ul>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find cos 30°: The exact value is √3/2 from the 30-60-90 triangle.</span>",
        "<span>Use that to solve: If adjacent side is 5 cm, hypotenuse = 5 ÷ (√3/2) = (5 × 2)/√3 = 10/√3</span>"
      ]
    }
  },
  "step5": {
    "title": "Applying exact values: tan for key angles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Know the exact values for tangent at 0°, 30°, 45°, and 60°:</p><ul><li>tan 0° = 0</li><li>tan 30° = 1/√3 (or √3/3)</li><li>tan 45° = 1</li><li>tan 60° = √3</li></ul><p>Use these values to solve angle and length problems without a calculator.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find tan 60°: It's √3.</span>",
        "<span>If opposite side = 7 cm, adjacent side = opposite ÷ tan 60° = 7 ÷ √3 = 7√3/3 cm exactly.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given a right triangle where the angle θ is 30°, and the adjacent side to θ is 10 cm, find the length of the hypotenuse and the opposite side using exact trigonometric values.</span>",
      "hint": "Remember to use exact values for cos 30° and sin 30° and express answers in surd form where necessary.",
      "mustHaveKeywords": ["cos 30°", "sin 30°", "exact value", "surd"],
      "optionalKeywords": ["30-60-90 triangle", "hypotenuse", "opposite side"],
      "modelAnswer": "<span>Using cos 30° = √3/2, hypotenuse = adjacent ÷ cos 30° = 10 ÷ (√3/2) = 10 × (2/√3) = 20/√3.<br>Using sin 30° = 1/2, opposite = hypotenuse × sin 30° = (20/√3) × 1/2 = 10/√3.</span>",
      "scaffoldPrompts": [
        "Identify the given side and angle.",
        "Use cos for adjacent and hypotenuse relationship.",
        "Rearrange to find hypotenuse.",
        "Use sin to find opposite side from hypotenuse."
      ]
    }
  }
};