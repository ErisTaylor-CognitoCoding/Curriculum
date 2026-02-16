window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.1 - Pythagoras' theorem in 3D",
  "strapline": "Learn how to apply Pythagoras' theorem step-by-step to calculate lengths and diagonals in three-dimensional shapes.",
  "learningObjectives": [
    "Students should be able to apply Pythagoras' theorem to find lengths in three-dimensional shapes including cuboids (Maths 4.1)",
    "Students should be able to calculate the diagonal of a cuboid using Pythagoras' theorem in multiple stages (Maths 4.1)",
    "Students should be able to solve problems involving right-angled triangles in 3D contexts (Maths 4.1)"
  ],
  "keyFormulas": [
    "Formula 1: a\u00b2 + b\u00b2 = c\u00b2 (Pythagoras)",
    "Formula 2: A = \u03c0r\u00b2 (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='140' width='180' height='100' fill='#d9e8fb' stroke='#333' stroke-width='2'/><line x1='60' y1='140' x2='120' y2='70' stroke='#333' stroke-width='2'/><line x1='240' y1='140' x2='300' y2='70' stroke='#333' stroke-width='2'/><line x1='120' y1='70' x2='300' y2='70' stroke='#333' stroke-width='2'/><line x1='300' y1='70' x2='300' y2='170' stroke='#333' stroke-width='2'/><text x='45' y='190' font-family='sans-serif' font-size='14'>Width (a)</text><text x='140' y='60' font-family='sans-serif' font-size='14'>Height (c)</text><text x='150' y='270' font-family='sans-serif' font-size='14'>Length (b)</text><text x='260' y='130' font-family='sans-serif' font-size='14' fill='red'><strong>Space diagonal (d)</strong></text></svg>",
  "step1": {
    "title": "Concept: Understanding 3D Pythagoras",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Pythagoras' theorem a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup> can be used to find lengths in 3D shapes by breaking the problem into parts. First, find the diagonal of a base face, then use this diagonal with the height to find the space diagonal.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine climbing stairs: first, you walk diagonally across the floor (the base diagonal), then climb vertically (height), which together create the straight path up the stairs (space diagonal).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding a Face Diagonal",
      "problem": "A cuboid has a width of 3 cm and a length of 4 cm. Find the diagonal across the base.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Use Pythagoras' theorem: What is a\u00b2 + b\u00b2 for the base where a = 3 and b = 4?",
          "answer": "25",
          "feedback": "Correct, 3\u00b2 + 4\u00b2 = 9 + 16 = 25."
        },
        {
          "id": "q2",
          "prompt": "What is the square root of 25 to find the base diagonal?",
          "answer": "5",
          "feedback": "Correct, the base diagonal is 5 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Applying 3D Pythagoras to Find Space Diagonal",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now that you know how to find the face diagonal, use it and the cuboid's height to find the space diagonal inside the cuboid.</p>",
    "workedExample": {
      "title": "Worked Example: Finding the Space Diagonal",
      "problem": "The cuboid from Step 1 has a height of 12 cm. Find the space diagonal.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Square the base diagonal you found previously (5 cm). What is 5\u00b2?",
          "answer": "25",
          "feedback": "Good! 5\u00b2 = 25."
        },
        {
          "id": "q2",
          "prompt": "Square the height (12 cm). What is 12\u00b2?",
          "answer": "144",
          "feedback": "Correct, 12\u00b2 = 144."
        },
        {
          "id": "q3",
          "prompt": "Add the two squares: 25 + 144 = ?",
          "answer": "169",
          "feedback": "Well done, 25 + 144 = 169."
        },
        {
          "id": "q4",
          "prompt": "Find the square root of 169 to get the space diagonal.",
          "answer": "13",
          "feedback": "Excellent, the space diagonal is 13 cm."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the longest diagonal inside a 3D shape connecting opposite corners.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "spaceDiagonal",
                "label": "Space diagonal",
                "isCorrect": true,
                "feedback": "Correct! The space diagonal connects opposite vertices inside the shape."
              },
              {
                "value": "faceDiagonal",
                "label": "Face diagonal",
                "isCorrect": false,
                "feedback": "Try again. The face diagonal runs along one face, not through the interior."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The diagonal across a flat face of a 3D shape is called the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "faceDiagonal",
                "label": "Face diagonal",
                "isCorrect": true,
                "feedback": "Correct! Face diagonals lie on the shape's faces."
              },
              {
                "value": "spaceDiagonal",
                "label": "Space diagonal",
                "isCorrect": false,
                "feedback": "Incorrect. The space diagonal passes through the interior of the shape."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Practice: Calculate the Space Diagonal",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Try calculating the space diagonal of a cuboid with width 6 cm, length 8 cm, and height 10 cm, step-by-step.</p>",
    "workedExample": {
      "title": "Practice Exercise",
      "problem": "Find the space diagonal of the cuboid with the given dimensions.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the base diagonal using width = 6 and length = 8. Calculate 6\u00b2 + 8\u00b2.",
          "answer": "100",
          "feedback": "Correct, 6\u00b2 + 8\u00b2 = 36 + 64 = 100."
        },
        {
          "id": "q2",
          "prompt": "What is the square root of 100 (the base diagonal)?",
          "answer": "10",
          "feedback": "Well done, the base diagonal is 10 cm."
        },
        {
          "id": "q3",
          "prompt": "Now square the height: 10\u00b2 = ?",
          "answer": "100",
          "feedback": "Correct, 10\u00b2 = 100."
        },
        {
          "id": "q4",
          "prompt": "Add the base diagonal squared and height squared: 100 + 100 = ?",
          "answer": "200",
          "feedback": "Correct, the sum is 200."
        },
        {
          "id": "q5",
          "prompt": "Find the square root of 200 for the space diagonal (give answer as a simplified radical or decimal).",
          "answer": "sqrt(200)",
          "feedback": "Good attempt! The simplified radical is 10\u221a2 or approximately 14.14 cm."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying Pythagoras in Real 3D Problem Solving",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use your knowledge to solve problems involving right-angled triangles in real 3D contexts, such as finding the length of a ladder leaning against a wall.</p>",
    "workedExample": {
      "title": "Worked Example",
      "problem": "A rectangular room measures 5 m by 12 m with a height of 3 m. What is the shortest ladder length to reach the top corner diagonally opposite the floor corner?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the diagonal across the floor (5 m by 12 m). What is 5\u00b2 + 12\u00b2?",
          "answer": "169",
          "feedback": "Correct, 5\u00b2 + 12\u00b2 = 25 + 144 = 169."
        },
        {
          "id": "q2",
          "prompt": "What is the square root of 169 (floor diagonal)?",
          "answer": "13",
          "feedback": "Yes! The floor diagonal is 13 m."
        },
        {
          "id": "q3",
          "prompt": "Now square the height (3 m): 3\u00b2 = ?",
          "answer": "9",
          "feedback": "Correct, 3\u00b2 = 9."
        },
        {
          "id": "q4",
          "prompt": "Add the floor diagonal squared and height squared: 169 + 9 = ?",
          "answer": "178",
          "feedback": "Correct, total is 178."
        },
        {
          "id": "q5",
          "prompt": "Find the square root of 178 to get the ladder length (round to 2 decimal places).",
          "answer": "13.34",
          "feedback": "Well done! The ladder length is approximately 13.34 m."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cuboid has dimensions 7 cm, 24 cm, and 25 cm. Calculate the length of the longest diagonal inside the cuboid.</span>",
      "hint": "Remember to find the diagonal across the base first, then use Pythagoras' theorem again with the height.",
      "mustHaveKeywords": ["face diagonal", "space diagonal", "Pythagoras' theorem", "square root"],
      "optionalKeywords": ["units", "step-by-step", "length"],
      "modelAnswer": "<span>First, calculate the face diagonal using Pythagoras on the base with sides 7 cm and 24 cm: 7\u00b2 + 24\u00b2 = 49 + 576 = 625, so the face diagonal is \u221a625 = 25 cm. Next, apply Pythagoras again using the face diagonal (25 cm) and the height (25 cm): 25\u00b2 + 25\u00b2 = 625 + 625 = 1250. The space diagonal is \u221a1250 = 25\u221a2 cm (approx 35.36 cm). This is the longest diagonal in the cuboid.</span>",
      "scaffoldPrompts": [
        "Calculate the base diagonal first using the 7 cm and 24 cm sides.",
        "Then use that diagonal and the height of 25 cm to apply Pythagoras again."
      ]
    }
  }
};