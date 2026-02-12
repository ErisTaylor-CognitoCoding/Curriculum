window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.1 - Pythagoras' theorem in 3D",
  "strapline": "Learn how to apply Pythagoras' theorem to find lengths within three-dimensional shapes such as cuboids by working in stages.",
  "learningObjectives": [
    "Students should be able to apply Pythagoras' theorem to find lengths in three-dimensional shapes including cuboids (Maths 4.1)",
    "Students should be able to calculate the diagonal of a cuboid using Pythagoras' theorem in multiple stages (Maths 4.1)",
    "Students should be able to solve problems involving right-angled triangles in 3D contexts (Maths 4.1)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><line x1='50' y1='250' x2='350' y2='250' stroke='#000' stroke-width='2'/><line x1='350' y1='250' x2='350' y2='50' stroke='#000' stroke-width='2'/><line x1='350' y1='50' x2='50' y2='50' stroke='#000' stroke-width='2'/><line x1='50' y1='50' x2='50' y2='250' stroke='#000' stroke-width='2'/><line x1='50' y1='250' x2='150' y2='150' stroke='#f00' stroke-width='2' /><line x1='150' y1='150' x2='350' y2='50' stroke='#00f' stroke-width='2' /><text x='60' y='240' font-family='sans-serif' font-size='14'>a</text><text x='355' y='150' font-family='sans-serif' font-size='14'>b</text><text x='180' y='140' font-family='sans-serif' font-size='14' fill='#f00'>d(1)</text><text x='250' y='80' font-family='sans-serif' font-size='14' fill='#00f'>d(2)</text><text x='200' y='20' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold'>3D Pythagoras</text></svg>",
  "step1": {
    "title": "Concept: Understanding Pythagoras' Theorem in 3D",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Pythagoras' theorem (a² + b² = c²) in 2D helps us find the length of a side in a right-angled triangle. In 3D, we apply this theorem step-by-step to calculate lengths inside shapes like cuboids, by first finding a diagonal on a face and then using that diagonal with another length to find a space diagonal.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine walking across a rectangular garden diagonally instead of along the edges, then climbing a ladder to the roof diagonally — combining these steps helps us find the total distance.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Find the diagonal on the base using a² + b² = c².</span>",
        "<span>Step 2: Use this diagonal and the height to find the space diagonal using a² + b² = c² again.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following describes the space diagonal of a cuboid?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The longest diagonal connecting opposite vertices inside the cuboid.</span>",
            "isCorrect": true,
            "explanation": "Correct. The space diagonal passes through the interior, joining opposite corners."
          },
          {
            "id": "b",
            "label": "<span>A diagonal on one flat rectangular face.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That describes the face diagonal, not the space diagonal."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is calculated first when applying Pythagoras' theorem in 3D to find the space diagonal.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "faceDiagonal",
                "label": "face diagonal",
                "isCorrect": true,
                "feedback": "Correct! The face diagonal is found before the space diagonal."
              },
              {
                "value": "spaceDiagonal",
                "label": "space diagonal",
                "isCorrect": false,
                "feedback": "Try again. The space diagonal is calculated after finding the face diagonal."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Applying 3D Pythagoras Step-by-Step",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the space diagonal of a cuboid with edges of length a, b, and c: first find the face diagonal on the base using a and b, then use that result and c as the two shorter sides in another right-angled triangle to find the space diagonal.</p>",
    "workedExample": {
      "title": "Example",
      "bullets": [
        "<span>Given a cuboid with lengths 3 cm, 4 cm, and height 5 cm.</span>",
        "<span>Step 1: Calculate face diagonal: √(3² + 4²) = √(9 + 16) = 5 cm.</span>",
        "<span>Step 2: Calculate space diagonal: √(5² + 5²) = √(25 + 25) = √50 = 7.07 cm approx.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept Check: True or False",
    "mcqs": [
      {
        "id": "tf-1",
        "question": "<span>True or False: The space diagonal of a cuboid is always longer than any face diagonal.</span>",
        "options": [
          {
            "id": "true",
            "label": "<span>True</span>",
            "isCorrect": true,
            "explanation": "Correct. The space diagonal spans across the 3D interior and is the longest."
          },
          {
            "id": "false",
            "label": "<span>False</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The space diagonal is longer than any face diagonal."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cuboid has dimensions 6 cm by 8 cm by 10 cm. Calculate the length of its longest diagonal.</span>",
      "hint": "Remember to find the diagonal across the base first before using the height to calculate the space diagonal.",
      "mustHaveKeywords": ["face diagonal", "space diagonal", "Pythagoras", "square root"],
      "optionalKeywords": ["ignore units", "steps", "diagram"],
      "modelAnswer": "<span>First, find the face diagonal across the base: √(6² + 8²) = √(36 + 64) = √100 = 10 cm.<br> Then use this face diagonal and the height to find the space diagonal: √(10² + 10²) = √(100 + 100) = √200 = 14.14 cm approx.<br>Therefore, the longest diagonal is approximately 14.14 cm.</span>",
      "scaffoldPrompts": [
        "Start by finding the diagonal of the bottom face using Pythagoras.",
        "Use the result as one side and the height as the other side to find the space diagonal."
      ]
    }
  }
};