window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.1 - Pythagoras' theorem in 3D",
  "strapline": "Learn to use Pythagoras' theorem to calculate lengths in three-dimensional shapes by decomposing problems into right-angled triangles.",
  "learningObjectives": [
    "Students should be able to apply Pythagoras' theorem to find lengths in three-dimensional shapes by identifying right-angled triangles within the structure (Maths 4.1)",
    "Students should be able to calculate distances between vertices in cuboids and other 3D objects by breaking problems into component right-angled triangles (Maths 4.1)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Reminder: Distances in 3D often require two applications of Pythagoras' theorem",
    "Reminder: Identify the right angled triangles carefully in 3D shapes"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg' style='font-family:sans-serif'>\n  <rect x='80' y='50' width='200' height='120' fill='#e0e7ff' stroke='#4a4a4a' stroke-width='2'/>\n  <line x1='280' y1='50' x2='220' y2='10' stroke='#4a4a4a' stroke-width='2'/>\n  <line x1='80' y1='170' x2='20' y2='130' stroke='#4a4a4a' stroke-width='2'/>\n  <line x1='280' y1='170' x2='220' y2='130' stroke='#4a4a4a' stroke-width='2'/>\n  <line x1='20' y1='130' x2='220' y2='10' stroke='#4a4a4a' stroke-width='2'/>\n  <text x='90' y='45' font-size='14' fill='#333'>A</text>\n  <text x='275' y='45' font-size='14' fill='#333'>B</text>\n  <text x='75' y='185' font-size='14' fill='#333'>C</text>\n  <text x='275' y='185' font-size='14' fill='#333'>D</text>\n  <text x='15' y='125' font-size='14' fill='#333'>E</text>\n  <text x='215' y='5' font-size='14' fill='#333'>F</text>\n  <line x1='80' y1='50' x2='220' y2='10' stroke='red' stroke-width='3' />\n  <line x1='80' y1='170' x2='280' y2='170' stroke='blue' stroke-width='3' />\n  <line x1='280' y1='170' x2='220' y2='10' stroke='green' stroke-width='3' />\n  <text x='180' y='30' fill='red' font-weight='bold'>Face Diagonal</text>\n  <text x='160' y='190' fill='blue' font-weight='bold'>Edge</text>\n  <text x='200' y='100' fill='green' font-weight='bold'>Space Diagonal</text>\n</svg>",
  "step1": {
    "title": "Concept: Identifying Right-Angled Triangles in 3D",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In three-dimensional shapes like cuboids, right-angled triangles are formed on the faces and within the shape. These triangles allow us to use Pythagoras' theorem to find unknown distances.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the corners of a room (a cuboid). The floor, wall, and ceiling form right-angled triangles. Measuring the diagonal from one corner on the floor to the opposite upper corner involves combining these triangles.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the Face Diagonal of a Cuboid",
      "problem": "The base of a cuboid has sides of length 6 cm and 8 cm. Find the length of the diagonal across the base (face diagonal).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the two sides that form the right angle on the base.",
          "answer": ["6", "8"],
          "feedback": "Correct, the base sides are 6 cm and 8 cm forming the right angle."
        },
        {
          "id": "q2",
          "prompt": "Apply Pythagoras' theorem: Calculate c = √(6² + 8²). What is c?",
          "answer": "10",
          "feedback": "Correct! The face diagonal is 10 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Applying Pythagoras Twice to Find Space Diagonal",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the space diagonal in a cuboid, apply Pythagoras' theorem first to find a face diagonal, then use that diagonal and the third dimension to calculate the space diagonal.</p>",
    "workedExample": {
      "title": "Worked Example: Find the Space Diagonal",
      "problem": "A cuboid has length 6 cm, width 8 cm, and height 5 cm. Find the space diagonal connecting opposite vertices.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the base diagonal using length and width: √(6² + 8²). What is it?",
          "answer": "10",
          "feedback": "Correct. The base diagonal is 10 cm."
        },
        {
          "id": "q2",
          "prompt": "Using the base diagonal and height, calculate space diagonal: √(10² + 5²). What is it?",
          "answer": "11.18",
          "feedback": "Correct! The space diagonal is approximately 11.18 cm."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Key Terminology",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's define important terms used to describe lines in 3D shapes.</p>",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the diagonal line across a flat face of a 3D shape.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "face diagonal",
                "label": "face diagonal",
                "isCorrect": true,
                "feedback": "Correct! Face diagonal lies across a flat face."
              },
              {
                "value": "space diagonal",
                "label": "space diagonal",
                "isCorrect": false,
                "feedback": "Incorrect. Space diagonal connects vertices not on the same face."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> connects vertices that are not on the same face.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "space diagonal",
                "label": "space diagonal",
                "isCorrect": true,
                "feedback": "Correct! Space diagonal goes through the interior of the shape."
              },
              {
                "value": "face diagonal",
                "label": "face diagonal",
                "isCorrect": false,
                "feedback": "Incorrect. Face diagonal is on a flat face."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span><span class=\"font-semibold\">_____</span> is the process of breaking 3D problems into right-angled triangles for calculation.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "right-angled triangle decomposition",
                "label": "right-angled triangle decomposition",
                "isCorrect": true,
                "feedback": "Correct! This helps apply Pythagoras' theorem."
              },
              {
                "value": "vector addition",
                "label": "vector addition",
                "isCorrect": false,
                "feedback": "Incorrect. Vector addition is different."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Practice: Calculating Face Diagonal",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Calculate the diagonal of a face by treating the side lengths as sides of a right-angled triangle.</p>",
    "workedExample": {
      "title": "Example: Find face diagonal with sides 9 cm and 12 cm",
      "problem": "Find the length of the diagonal across a rectangular face with sides 9 cm and 12 cm.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Square each side: 9² and 12². What are the values?",
          "answer": ["81", "144"],
          "feedback": "Correct! 9 squared is 81 and 12 squared is 144."
        },
        {
          "id": "q2",
          "prompt": "Add the squares: 81 + 144 = ?",
          "answer": "225",
          "feedback": "Correct. The sum is 225."
        },
        {
          "id": "q3",
          "prompt": "Find the square root of 225. What is the diagonal length?",
          "answer": "15",
          "feedback": "Correct! The face diagonal is 15 cm."
        }
      ]
    }
  },
  "step5": {
    "title": "Practice: Calculating Space Diagonal in Cuboid",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the previously found face diagonal and height to find the space diagonal.</p>",
    "workedExample": {
      "title": "Example: Cuboid with base diagonal 15 cm and height 9 cm",
      "problem": "Find the space diagonal using the base diagonal 15 cm and height 9 cm.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Square the base diagonal: 15² = ?",
          "answer": "225",
          "feedback": "Correct! 15 squared is 225."
        },
        {
          "id": "q2",
          "prompt": "Square the height: 9² = ?",
          "answer": "81",
          "feedback": "Correct! 9 squared is 81."
        },
        {
          "id": "q3",
          "prompt": "Add the squares: 225 + 81 = ?",
          "answer": "306",
          "feedback": "Correct. The total is 306."
        },
        {
          "id": "q4",
          "prompt": "Find the square root of 306 (approximate to two decimals)",
          "answer": ["17.49", "17.5"],
          "feedback": "Correct! The space diagonal is approximately 17.5 cm."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cuboid has length 7 cm, width 24 cm and height 25 cm. Calculate the length of the space diagonal connecting opposite vertices.</span>",
      "hint": "Remember to first calculate the face diagonal of the base using length and width, then use this result with the height to find the space diagonal.",
      "mustHaveKeywords": ["Pythagoras' theorem", "face diagonal", "space diagonal", "square root"],
      "optionalKeywords": ["right-angled triangle decomposition", "approximation"],
      "modelAnswer": "<span>First, use Pythagoras' theorem to find the base (face) diagonal:<br/>√(7² + 24²) = √(49 + 576) = √625 = 25 cm.<br/>Then apply Pythagoras' theorem again using the base diagonal and height:<br/>√(25² + 25²) = √(625 + 625) = √1250 ≈ 35.36 cm.<br/>Therefore, the space diagonal is approximately 35.36 cm.</span>",
      "scaffoldPrompts": ["Calculate the base diagonal using length and width", "Use this base diagonal and height to find the space diagonal"]
    }
  }
};