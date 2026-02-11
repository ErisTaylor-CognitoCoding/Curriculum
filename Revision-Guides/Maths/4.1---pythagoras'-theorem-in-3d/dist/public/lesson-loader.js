window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.1 - Pythagoras' theorem in 3D",
  "strapline": "Applying Pythagoras' theorem to calculate lengths and diagonals in three-dimensional shapes such as cuboids.",
  "learningObjectives": [
    "Students should be able to apply Pythagoras' theorem to find lengths in three-dimensional shapes including cuboids (Maths 4.1)",
    "Students should be able to calculate the diagonal of a cuboid using Pythagoras' theorem in multiple stages (Maths 4.1)",
    "Students should be able to solve problems involving right-angled triangles in 3D contexts (Maths 4.1)"
  ],
  "step1": {
    "title": "Concept: Understanding 3D Pythagoras' Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Pythagoras' theorem (<em>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></em>) can be applied in three dimensions by breaking down the problem into two stages. First, calculate the diagonal of one face or base of a 3D shape. Then use this diagonal and the height as the two shorter sides of a right triangle to find the space diagonal.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine walking across the floor diagonally (face diagonal), then climbing straight up an elevator (height). The direct distance from the start to the top corner (space diagonal) is longer and can be found using Pythagoras twice.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Find the diagonal across the base of a cuboid with sides 3 m and 4 m using <em>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></em>.</span>",
        "<span>Step 2: Use the diagonal found and the height of 5 m as the two sides to find the space diagonal.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which formula represents the correct method to find the space diagonal <em>d</em> of a cuboid with sides <em>a</em>, <em>b</em>, and height <em>c</em>?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>d = √(a² + b² + c²)</span>",
            "isCorrect": true,
            "explanation": "Correct: The space diagonal is the square root of the sum of the squares of all three dimensions."
          },
          {
            "id": "b",
            "label": "<span>d = a + b + c</span>",
            "isCorrect": false,
            "explanation": "Incorrect: Adding lengths directly does not give the space diagonal length."
          },
          {
            "id": "c",
            "label": "<span>d = √(a² + c²)</span>",
            "isCorrect": false,
            "explanation": "Incorrect: This only considers two dimensions, missing one side of the cuboid."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The longest diagonal inside a 3D shape that connects two opposite corners is called the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "space diagonal",
                "label": "space diagonal",
                "isCorrect": true,
                "feedback": "Correct! This is the longest line inside the shape connecting opposite vertices."
              },
              {
                "value": "face diagonal",
                "label": "face diagonal",
                "isCorrect": false,
                "feedback": "Try again. The face diagonal is on a flat face, not through the whole interior."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>A diagonal across a flat face of a cuboid, calculated using 2D Pythagoras theorem, is called a <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "face diagonal",
                "label": "face diagonal",
                "isCorrect": true,
                "feedback": "Correct! This diagonal lies on one face of the cuboid."
              },
              {
                "value": "space diagonal",
                "label": "space diagonal",
                "isCorrect": false,
                "feedback": "Try again. The space diagonal runs through the interior, not just a face."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Applying 3D Pythagoras to Cuboids",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find a space diagonal in a cuboid, first apply Pythagoras to the base to find the face diagonal. Then apply Pythagoras a second time using this face diagonal and the cuboid's height.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the face diagonal for a cuboid base with sides 6 cm and 8 cm: √(6² + 8²) = √(36 + 64) = √100 = 10 cm.</span>",
        "<span>Use this face diagonal and height 12 cm to find space diagonal: √(10² + 12²) = √(100 + 144) = √244 ≈ 15.62 cm.</span>"
      ]
    }
  },
  "step5": {
    "title": "Multi-stage Problem Solving with Right-Angled Triangles in 3D",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Many 3D problems require breaking down complex shapes into right-angled triangles that can be solved using Pythagoras' theorem in steps.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Example: Calculate the diagonal distance from one bottom corner of a cuboid with dimensions 4 m, 3 m, and 12 m to the opposite top corner.</span>",
        "<span>Step 1: Find base diagonal: √(4² + 3²) = √(16 + 9) = √25 = 5 m.</span>",
        "<span>Step 2: Find space diagonal using height: √(5² + 12²) = √(25 + 144) = √169 = 13 m.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cuboid has length 7 cm, width 24 cm, and height 25 cm. Calculate the length of the space diagonal of the cuboid.</span>",
      "hint": "Remember to calculate the diagonal of the base first using Pythagoras, then use this diagonal and the height to find the space diagonal.",
      "mustHaveKeywords": ["Pythagoras","space diagonal","face diagonal","√(a² + b²)","breaking problem into stages"],
      "optionalKeywords": ["length of cuboid","width of cuboid","height of cuboid"],
      "modelAnswer": "<span>First, calculate the diagonal of the base which has sides 7 cm and 24 cm: √(7² + 24²) = √(49 + 576) = √625 = 25 cm. Then, use this base diagonal and the height 25 cm to find the space diagonal: √(25² + 25²) = √(625 + 625) = √1250 = 25√2 cm.</span>",
      "scaffoldPrompts": ["Calculate the base diagonal using length and width.","Then use the base diagonal and height in Pythagoras to find the space diagonal."]
    }
  }
};