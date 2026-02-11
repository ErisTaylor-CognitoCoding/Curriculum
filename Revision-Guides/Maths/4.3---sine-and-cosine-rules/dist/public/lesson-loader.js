window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.3 - Sine and cosine rules",
  "strapline": "Master using sine and cosine rules to solve problems in non-right-angled triangles.",
  "learningObjectives": [
    "Students should be able to apply the sine rule to find unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to apply the cosine rule to find unknown sides and angles in non-right-angled triangles (Maths 4.3)",
    "Students should be able to select the appropriate rule (sine or cosine) to solve problems involving non-right-angled triangles (Maths 4.3)"
  ],
  "step1": {
    "title": "Concept: Understanding the Sine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The sine rule relates the sides and angles in any triangle, not just right-angled ones. It states that the ratio of the length of a side to the sine of its opposite angle is the same for all three sides: <strong>a/sin(A) = b/sin(B) = c/sin(C)</strong>. It is especially useful when you know two angles and one side or two sides and a non-included angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a musical band where each instrument’s volume corresponds to a side length and the tune’s pitch corresponds to an angle. The sine rule is like a formula that keeps the music balanced, so the volumes and pitches stay in harmony no matter which instrument you adjust first.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the known values in the triangle including two angles and one side.</span>",
        "<span>Use the sine rule formula to find the unknown side or angle by setting up a ratio.</span>",
        "<span>Calculate the missing value by rearranging the equation and solving.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>When is the sine rule most appropriate to use?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>When two angles and one side, or two sides and a non-included angle are known</span>",
            "isCorrect": true,
            "explanation": "Correct! The sine rule applies when you have these known values in a triangle."
          },
          {
            "id": "b",
            "label": "<span>When two sides and the included angle, or all three sides are known</span>",
            "isCorrect": false,
            "explanation": "Incorrect, this situation is best solved using the cosine rule."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Concept: Understanding the Cosine Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The cosine rule helps find unknown sides or angles in any triangle when the sine rule is not suitable. The formula is <strong>a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc·cos(A)</strong>. It is useful when you know two sides and the included angle, or all three sides and need to find an angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the cosine rule like measuring the distance across a park diagonally using the lengths of two adjacent sides of a field and the angle between them, giving you an exact measurement where simple methods don’t apply.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the known sides and angle in the triangle.</span>",
        "<span>Write down the cosine rule formula and substitute the known values.</span>",
        "<span>Solve algebraically to find the unknown side or calculate the angle using the inverse cosine.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>Which information allows you to use the cosine rule?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Two sides and their included angle, or all three sides</span>",
            "isCorrect": true,
            "explanation": "Correct! This information fits the conditions for using the cosine rule."
          },
          {
            "id": "b",
            "label": "<span>Two angles and one side</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This is a case for the sine rule."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Concept: Identifying Non-Right-Angled Triangles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A non-right-angled triangle is any triangle that does not have a 90-degree angle. Unlike right-angled triangles where SOH CAH TOA applies, non-right triangles require the sine or cosine rules to find unknown sides or angles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a box that is not perfectly square, where right-angle methods don’t work. You need special techniques like the sine and cosine rules to measure the other angles and side lengths.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Check the triangle’s angles to confirm none are 90°.</span>",
        "<span>Decide whether to apply the sine or cosine rule based on known sides and angles.</span>",
        "<span>Use the appropriate rule to calculate missing sides or angles step-by-step.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A triangle has sides of lengths 7 cm and 10 cm with the included angle of 60°. Find the length of the third side. Then, given two angles and one side of another triangle, explain how to find the unknown side using the sine rule.</span>",
      "hint": "Remember to identify the correct rule to use first. For the cosine rule, label sides and angles carefully, and for the sine rule, check which sides and angles you know.",
      "mustHaveKeywords": [
        "cosine rule",
        "sine rule",
        "included angle",
        "opposite angle",
        "equation substitution",
        "inverse sine",
        "inverse cosine"
      ],
      "optionalKeywords": [
        "Pythagoras",
        "triangle classification",
        "non-right triangle"
      ],
      "modelAnswer": "<span>Use the cosine rule a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc·cos(A) to find the unknown side: substitute 7, 10, and 60° values, then solve for a. To find an unknown side using the sine rule, identify two known angles and one side, write the ratio a/sin(A) = b/sin(B), and substitute known values. Rearrange to find the missing side and calculate using the sine inverse if needed.</span>",
      "scaffoldPrompts": [
        "Start by labeling the triangle’s sides and angles.",
        "Recall when to apply the cosine or sine rule.",
        "Write down the formula with details substituted.",
        "Show each manipulation step clearly for substitution and solving."
      ]
    }
  }
};