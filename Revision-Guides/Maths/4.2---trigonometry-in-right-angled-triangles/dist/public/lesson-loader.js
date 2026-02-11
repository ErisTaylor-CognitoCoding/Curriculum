window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.2 - Trigonometry in right-angled triangles",
  "strapline": "Understanding and applying sine, cosine, tangent ratios and interpreting three-figure bearings in right-angled triangles.",
  "learningObjectives": [
    "Students should know the trigonometric ratios sine, cosine and tangent and apply them to find angles and lengths in right-angled triangles (Maths 4.2)",
    "Students should interpret and use three-figure bearings measured clockwise from the north line (N) (Maths 4.2)"
  ],
  "step1": {
    "title": "Concept 1: Understanding Sine (sin)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The sine of an angle in a right-angled triangle is the ratio of the length of the opposite side to the hypotenuse. It is written as sin(&theta;) = opposite/hypotenuse.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the triangle as a ladder leaning against a wall. The sine ratio compares the height you reach on the wall (opposite side) with the ladder's length (hypotenuse).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify the angle &theta; and the lengths of the opposite side and hypotenuse.</span>",
        "<span>Step 2: Use the formula sin(&theta;) = opposite/hypotenuse to find the sine value.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Understanding Cosine (cos)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The cosine of an angle in a right-angled triangle is the ratio of the adjacent side to the hypotenuse. Expressed as cos(&theta;) = adjacent/hypotenuse.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the ladder analogy again, the cosine compares how far the base of the ladder is from the wall (adjacent side) to the ladder’s length (hypotenuse).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Label the adjacent side and hypotenuse relative to angle &theta;.</span>",
        "<span>Step 2: Calculate cos(&theta;) using adjacent/hypotenuse.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Understanding Tangent (tan)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tangent of an angle is the ratio of the opposite side length to the adjacent side length. It is written as tan(&theta;) = opposite/adjacent.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of climbing a hill: tangent compares the height gained (opposite) to the distance walked forward (adjacent).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify opposite and adjacent sides relative to angle &theta;.</span>",
        "<span>Step 2: Calculate tan(&theta;) = opposite/adjacent.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice Questions (MCQ)",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the value of sin(&theta;) in a right-angled triangle?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The ratio of the opposite side to the hypotenuse</span>",
            "isCorrect": true,
            "explanation": "Correct! Sine is opposite divided by hypotenuse."
          },
          {
            "id": "b",
            "label": "<span>The ratio of the adjacent side to the hypotenuse</span>",
            "isCorrect": false,
            "explanation": "Incorrect, that's cosine."
          },
          {
            "id": "c",
            "label": "<span>The ratio of the opposite side to the adjacent side</span>",
            "isCorrect": false,
            "explanation": "Incorrect, that's tangent."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which trigonometric ratio would you use to find the length of the side adjacent to the angle, given the hypotenuse?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>sin(&theta;)</span>",
            "isCorrect": false,
            "explanation": "No, sine relates opposite to hypotenuse."
          },
          {
            "id": "b",
            "label": "<span>cos(&theta;)</span>",
            "isCorrect": true,
            "explanation": "Correct, cosine relates adjacent to hypotenuse."
          },
          {
            "id": "c",
            "label": "<span>tan(&theta;)</span>",
            "isCorrect": false,
            "explanation": "Tangent relates opposite to adjacent, not hypotenuse."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Interpreting Three-Figure Bearings",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Bearings are measured clockwise from the north line (N) and always given as three-figure numbers between 000&deg; and 360&deg;. For example, east is 090&deg;, south-west is 225&deg;.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a compass rose where north is 000&deg;. Bearings rotate clockwise around the circle, so turning right from north increases the bearing number.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If a plane is flying directly east, its bearing is 090&deg;.</span>",
        "<span>If moving south-west, its bearing is 225&deg; because it's 225&deg; clockwise from north.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A right-angled triangle has an angle of 35&deg;. The length of the side adjacent to this angle is 8 cm. Calculate the length of the opposite side and the hypotenuse.</span>",
      "hint": "Remember to use the correct trigonometric ratios sine and cosine. Start by choosing the right ratio for opposite and adjacent sides.",
      "mustHaveKeywords": ["sine", "cosine", "opposite side", "hypotenuse", "adjacent side", "right-angled triangle"],
      "optionalKeywords": ["Pythagoras", "ratio"],
      "modelAnswer": "<span>First, use tan(35&deg;) = opposite/adjacent, so opposite = 8 × tan(35&deg;). Then, use cos(35&deg;) = adjacent/hypotenuse to find hypotenuse = 8 / cos(35&deg;).</span>",
      "scaffoldPrompts": [
        "Identify which sides relate to the given angle.",
        "Use tan(&theta;) = opposite/adjacent to find the opposite side.",
        "Use cos(&theta;) = adjacent/hypotenuse to find the hypotenuse."
      ]
    }
  }
};