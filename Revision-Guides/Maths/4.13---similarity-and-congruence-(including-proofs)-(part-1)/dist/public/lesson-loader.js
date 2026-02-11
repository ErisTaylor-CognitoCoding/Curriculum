window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.13 - Similarity and congruence (including proofs) (Part 1)",
  "strapline": "Understanding congruent and similar shapes and criteria for identifying them in geometry",
  "learningObjectives": [
    "Students should understand that two shapes are congruent if they have the same shape and size, and that corresponding sides and angles are equal (Maths 4.13)",
    "Students should understand that two shapes are similar if they have the same shape but different sizes, with corresponding angles equal and corresponding sides in the same ratio (Maths 4.13)",
    "Students should be able to identify congruent and similar shapes using formal criteria including SSS, SAS, ASA and RHS (Maths 4.13)"
  ],
  "step1": {
    "title": "Concept: Congruence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two shapes are congruent if they are identical in both shape and size. This means all corresponding sides are equal in length and all corresponding angles are equal in measure. One shape can be transformed into the other through rotation, reflection, or translation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two jigsaw puzzle pieces that fit exactly on top of each other without any gaps or overlaps. If you can place one precisely over the other by flipping or sliding it, they are congruent.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify two triangles with all three sides measuring 5cm, 7cm, and 9cm each.</span>",
        "<span>Check if each pair of corresponding sides are equal - here they are.</span>",
        "<span>Conclude the triangles are congruent since all sides and angles match.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Similarity",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two shapes are similar if they have the same shape but different sizes. This means corresponding angles are equal, but corresponding sides are proportional with the same scale factor. Essentially, one shape is an enlargement or reduction of the other.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a photograph and its smaller printed version. Both have the same shape, but different sizes. The printed photo is a scaled version of the original.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Compare two triangles where angles are 30°, 60°, and 90° in each.</span>",
        "<span>Check the side lengths are proportional, for example, 3cm, 5cm, 6cm for one and 6cm, 10cm, 12cm for the other.</span>",
        "<span>Confirm the triangles are similar as angles are equal and sides share a common ratio of 2.</span>"
      ]
    }
  },
  "step3": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which statement describes congruent shapes correctly?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>They have the same shape and size, including equal corresponding sides and angles.</span>",
            "isCorrect": true,
            "explanation": "<span>Correct: Congruent shapes match exactly in size and shape.</span>"
          },
          {
            "id": "b",
            "label": "<span>They have the same shape but different sizes, with sides proportional.</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect: This describes similar shapes, not congruent ones.</span>"
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>Two shapes are <span class=\"font-semibold\">_____</span> if all corresponding sides and angles are <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "congruent", "label": "congruent", "isCorrect": true, "feedback": "Correct! Congruent means same size and shape."},
              {"value": "similar", "label": "similar", "isCorrect": false, "feedback": "Try again. Similar means same shape but different sizes."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "equal", "label": "equal", "isCorrect": true, "feedback": "Correct! Corresponding parts are equal in congruent shapes."},
              {"value": "proportional", "label": "proportional", "isCorrect": false, "feedback": "Try again. Proportional sides apply to similarity."}
            ]
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Concept: SSS (Side-Side-Side) Criterion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The SSS criterion states that if all three sides of one triangle are exactly equal in length to the corresponding three sides of another triangle, then the two triangles are congruent.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine using three sticks to make a triangle. If you have another set of three sticks with the same lengths, you can form a triangle that fits exactly over the first, proving congruence.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Triangle A has sides 4cm, 6cm, and 8cm.</span>",
        "<span>Triangle B has sides 4cm, 6cm, and 8cm as well.</span>",
        "<span>By the SSS rule, Triangle A is congruent to Triangle B.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how you would prove that two triangles are congruent using the SSS criterion.</span>",
      "hint": "Remember to check the lengths of all three sides in both triangles and confirm they are equal.",
      "mustHaveKeywords": ["SSS", "three sides", "equal length", "congruent triangles"],
      "optionalKeywords": ["transformations", "corresponding sides"],
      "modelAnswer": "<span>To prove two triangles are congruent using the SSS criterion, you measure all three sides of the first triangle and compare them to the corresponding sides of the second triangle. If all three pairs of sides are exactly equal in length, then the triangles are congruent because the shape and size must be identical according to SSS.</span>",
      "scaffoldPrompts": ["Identify the three sides of each triangle", "Compare each pair of corresponding sides", "Confirm if all three pairs are equal"]
    }
  }
};