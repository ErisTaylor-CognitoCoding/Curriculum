window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.10 - Transformations (including column vectors)",
  "strapline": "Learn how to describe and perform translations, reflections, rotations, enlargements, and combine transformations using column vectors.",
  "learningObjectives": [
    "Students should be able to describe translations using column vectors (Maths 4.10)",
    "Students should be able to perform and describe reflections, rotations and enlargements (Maths 4.10)",
    "Students should be able to identify and combine multiple transformations on a coordinate grid (Maths 4.10)"
  ],
  "step1": {
    "title": "Concept: Translation and Column Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>translation</strong> is a transformation that moves every point of a shape the same distance in the same direction. The shape’s size and orientation remain unchanged. We describe translations using <strong>column vectors</strong>, which show horizontal and vertical movement.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine sliding a book across a table without rotating or flipping it. The book keeps its shape and size but moves position. The column vector tells us how far and in which direction the book slides.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Translate point A(2, 3) by the column vector \\( \\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix} \\).</span>",
        "<span>Move 4 units to the right (positive horizontal) and 2 units down (negative vertical) from A’s coordinates.</span>",
        "<span>New position = (2 + 4, 3 - 2) = (6, 1).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Reflection",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>reflection</strong> flips a shape over a mirror line. Each point and its image are the same distance from this mirror line, but on opposite sides.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of looking at yourself in a mirror. Your reflection is the same distance behind the mirror as you are in front, but reversed.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Reflect point B(3, 5) over the y-axis.</span>",
        "<span>Since the mirror line is the y-axis, the x-coordinate changes sign, the y remains the same.</span>",
        "<span>New point is (-3, 5).</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Rotation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>rotation</strong> turns a shape around a fixed point (called the centre of rotation) by a specific angle and direction.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine turning a steering wheel; the wheel spins around a central point without changing size or shape.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Rotate point C(1, 2) 90° clockwise about the origin.</span>",
        "<span>Using the rule for 90° clockwise rotation: (x, y) → (y, -x).</span>",
        "<span>New coordinates are (2, -1).</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Enlargement",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>enlargement</strong> changes the size of a shape by a scale factor from a centre of enlargement. The shape’s angles stay the same but its size increases or decreases.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of zooming in or out on a photo. The picture remains similar, just bigger or smaller.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Enlarge point D(2, 3) by a scale factor of 3 from the origin.</span>",
        "<span>Multiply both coordinates by 3: (2 × 3, 3 × 3).</span>",
        "<span>New point is (6, 9).</span>"
      ]
    }
  },
  "step5": {
    "title": "Combining Transformations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Shapes can undergo several transformations in sequence. Understanding the order and effect of each transformation helps you find the final position of the shape or points.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with point E(1, 2).</span>",
        "<span>First, translate by \\( \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix} \\) → E becomes (4, 3).</span>",
        "<span>Then reflect over the x-axis → new point is (4, -3).</span>",
        "<span>So the combined transformation maps E(1, 2) to (4, -3).</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: Multiple Choice Question",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Point P(2, -1) is translated by the column vector \\( \\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix} \\). What are the new coordinates of P?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>(-1, 3)</span>",
            "isCorrect": true,
            "explanation": "<span>Correct: (2 - 3, -1 + 4) = (-1, 3).</span>"
          },
          {
            "id": "b",
            "label": "<span>(5, -5)</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect: This swaps the vector components or signs.</span>"
          },
          {
            "id": "c",
            "label": "<span>(-5, 3)</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect: The horizontal movement was subtracted correctly but vertical movement is wrong.</span>"
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> moves every point the same distance in the same direction without changing the size or orientation of the shape.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "translation",
                "label": "translation",
                "isCorrect": true,
                "feedback": "<span>Correct! A translation moves the shape without changing its size or orientation.</span>"
              },
              {
                "value": "rotation",
                "label": "rotation",
                "isCorrect": false,
                "feedback": "<span>Try again. Rotation turns a shape, it does not slide it.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> flips a shape over a mirror line.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "reflection",
                "label": "reflection",
                "isCorrect": true,
                "feedback": "<span>Correct! A reflection flips the shape across a line.</span>"
              },
              {
                "value": "enlargement",
                "label": "enlargement",
                "isCorrect": false,
                "feedback": "<span>Try again. Enlargement changes size but does not flip the shape.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to perform a translation of a shape using a column vector, and then reflect the translated shape in the x-axis. Describe the transformations in terms of coordinates.</span>",
      "hint": "<span>Remember to add the column vector components to each coordinate for the translation, then change the sign of the y-coordinate for the reflection.</span>",
      "mustHaveKeywords": ["translation", "column vector", "reflect", "x-axis", "coordinates"],
      "optionalKeywords": ["sequence", "sign change", "horizontal", "vertical"],
      "modelAnswer": "<span>First, describe the translation by adding the <strong>horizontal</strong> component of the column vector to the x-coordinate and the <strong>vertical</strong> component to the y-coordinate of each point in the shape. This moves the shape without changing its size or orientation. Next, reflect the translated shape in the x-axis by keeping the x-coordinate the same and changing the y-coordinate to its negative value. This flips the shape over the x-axis.</span>",
      "scaffoldPrompts": [
        "<span>What does the column vector represent?</span>",
        "<span>How do you apply the column vector to coordinates?</span>",
        "<span>What changes when reflecting in the x-axis?</span>"
      ]
    }
  }
};