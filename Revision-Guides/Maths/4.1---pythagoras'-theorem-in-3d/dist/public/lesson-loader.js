window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.1 - Pythagoras' theorem in 3D",
  "strapline": "Using Pythagoras' theorem to find lengths and diagonals in three-dimensional shapes.",
  "learningObjectives": [
    "Students should be able to apply Pythagoras' theorem to find lengths in three-dimensional shapes including cuboids (Maths 4.1)",
    "Students should be able to calculate the diagonal of a cuboid using Pythagoras' theorem in multiple stages (Maths 4.1)",
    "Students should be able to solve problems involving right-angled triangles in 3D contexts (Maths 4.1)"
  ],
  "step1": {
    "title": "Concept: Understanding 2D Pythagoras’ theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Pythagoras' theorem states that in a right-angled triangle, the square of the hypotenuse (the side opposite the right angle) equals the sum of the squares of the other two sides: <strong>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a right-angled triangle as a corner of a rectangular room, where the lengths of two walls (a and b) can be used to find the distance across the floor (c).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a triangle with sides 3 cm and 4 cm, find the hypotenuse.</span>",
        "<span>Calculate: 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25.</span>",
        "<span>Take square root of 25 = 5 cm (hypotenuse length).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Applying Pythagoras in 3D - Face diagonal",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In 3D shapes, like cuboids, the face diagonal is the diagonal across a flat rectangular face and can be found by applying Pythagoras' theorem in 2D on that face.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a rectangular book cover: the longest diagonal from one corner to the opposite corner on the cover is the face diagonal.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A cuboid face measures 6 cm by 8 cm. Find the face diagonal.</span>",
        "<span>Calculate: 6<sup>2</sup> + 8<sup>2</sup> = 36 + 64 = 100.</span>",
        "<span>Square root of 100 = 10 cm (face diagonal).</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Finding the space diagonal in 3D shapes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The space diagonal is the longest distance between two opposite vertices inside a 3D shape like a cuboid. To find it, apply Pythagoras' theorem twice: first find a face diagonal, then use it with the height to find the space diagonal.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you imagine a gift box, the space diagonal is the longest straight line you can put inside it from one corner to the opposite corner.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a cuboid with edges 6 cm, 8 cm, and height 10 cm, find the space diagonal.</span>",
        "<span>Step 1: Find the face diagonal on the base: sqrt(6<sup>2</sup> + 8<sup>2</sup>) = 10 cm.</span>",
        "<span>Step 2: Use this face diagonal and height to find space diagonal: sqrt(10<sup>2</sup> + 10<sup>2</sup>) = sqrt(200) ≈ 14.14 cm.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the term for the longest diagonal inside a cuboid connecting opposite vertices?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Space diagonal</span>",
            "isCorrect": true,
            "explanation": "Correct! The longest diagonal inside a 3D shape is called the space diagonal."
          },
          {
            "id": "b",
            "label": "<span>Face diagonal</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Face diagonal lies on the flat face, not inside the shape."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>How many stages are usually needed to find a space diagonal using Pythagoras' theorem in a cuboid?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>One</span>",
            "isCorrect": false,
            "explanation": "No, one stage only finds a diagonal in 2D."
          },
          {
            "id": "b",
            "label": "<span>Two</span>",
            "isCorrect": true,
            "explanation": "Correct! First find a face diagonal then use it with height to find the space diagonal."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of a cuboid is the diagonal that is found across a flat rectangular face.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "face diagonal",
                "label": "face diagonal",
                "isCorrect": true,
                "feedback": "Correct! The diagonal on a flat face is called face diagonal."
              },
              {
                "value": "space diagonal",
                "label": "space diagonal",
                "isCorrect": false,
                "feedback": "Try again. Space diagonal goes through the interior of the shape."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>To find the length of the space diagonal, you first find a <span class=\"font-semibold\">_____</span> then use it with the cube's height.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "face diagonal",
                "label": "face diagonal",
                "isCorrect": true,
                "feedback": "Correct! The intermediate diagonal on the face is needed."
              },
              {
                "value": "hypotenuse",
                "label": "hypotenuse",
                "isCorrect": false,
                "feedback": "Try again. The hypotenuse is a side in a triangle."
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
      "prompt": "<span>A cuboid has dimensions 5 cm by 12 cm by 13 cm. Calculate the length of the space diagonal inside the cuboid.</span>",
      "hint": "Remember to find the diagonal on the base first, then use it with the height to find the space diagonal.",
      "mustHaveKeywords": ["Pythagoras' theorem", "face diagonal", "space diagonal", "square root"],
      "optionalKeywords": ["hypotenuse", "3D diagonal"],
      "modelAnswer": "<span>First, apply Pythagoras' theorem to the base: sqrt(5<sup>2</sup> + 12<sup>2</sup>) = sqrt(25 + 144) = sqrt(169) = 13 cm (face diagonal). Then use this face diagonal with the height of 13 cm: sqrt(13<sup>2</sup> + 13<sup>2</sup>) = sqrt(169 + 169) = sqrt(338) ≈ 18.4 cm. Therefore, the space diagonal is approximately 18.4 cm.</span>",
      "scaffoldPrompts": [
        "Calculate the face diagonal of the base first.",
        "Use the face diagonal and the height to calculate the space diagonal."
      ]
    }
  }
};