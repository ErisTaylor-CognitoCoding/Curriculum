window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.1 - Pythagoras' theorem in 3D",
  "strapline": "Applying Pythagoras' theorem in three dimensions to find distances in 3D shapes by breaking them into right-angled triangles.",
  "learningObjectives": [
    "Students should be able to apply Pythagoras' theorem to find lengths in three-dimensional shapes by identifying right-angled triangles within the structure (Maths 4.1)",
    "Students should be able to calculate distances between vertices in cuboids and other 3D objects by breaking problems into component right-angled triangles (Maths 4.1)"
  ],
  "keyFormulas": [
    "Formula 1: a\u00b2 + b\u00b2 = c\u00b2 (Pythagoras)",
    "Formula 2: d = \\sqrt{l^2 + w^2 + h^2} (Space diagonal of cuboid)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='80' y='100' width='160' height='100' fill='none' stroke='#333' stroke-width='2'/>\n  <line x1='80' y1='100' x2='130' y2='60' stroke='#333' stroke-width='2'/>\n  <line x1='240' y1='100' x2='290' y2='60' stroke='#333' stroke-width='2'/>\n  <line x1='130' y1='60' x2='290' y2='60' stroke='#333' stroke-width='2'/>\n  <line x1='130' y1='60' x2='130' y2='160' stroke='#555' stroke-dasharray='4 4'/>\n  <line x1='290' y1='60' x2='290' y2='160' stroke='#555' stroke-dasharray='4 4'/>\n  <line x1='130' y1='160' x2='290' y2='160' stroke='#333' stroke-width='2'/>\n  <!-- Labels -->\n  <text x='110' y='210' font-family='sans-serif' font-size='14'>Length (l)</text>\n  <text x='40' y='150' font-family='sans-serif' font-size='14'>Width (w)</text>\n  <text x='215' y='50' font-family='sans-serif' font-size='14'>Height (h)</text>\n</svg>",
  "step1": {
    "title": "Introduction to Pythagoras in 3D",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Pythagoras' theorem helps us find lengths of sides in right-angled triangles. In three dimensions, we apply it step-by-step to find distances such as the space diagonal of 3D shapes by breaking them into right-angled triangles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine climbing a ladder from the floor to the top corner of a room. First, you walk along the floor (length), then up the wall (height). To find the direct distance, you use Pythagoras in two steps.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding a Cuboid's Dimensions",
      "problem": "A cuboid has length 3m, width 4m, and height 5m. Let's find the length of the space diagonal.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Use Pythagoras to find the diagonal of the base (length and width). Calculate \\(d = \\sqrt{3^2 + 4^2}\\): what is d?",
          "answer": "5",
          "feedback": "Correct. \\(\\sqrt{9 + 16} = \\sqrt{25} = 5\\)."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Now apply Pythagoras again using the base diagonal d and the height 5m to find the space diagonal. Calculate \\(D = \\sqrt{5^2 + 5^2}\\): what is D?",
          "answer": "7.07",
          "feedback": "<p>Correct. \\(\\sqrt{25 + 25} = \\sqrt{50} \\approx 7.07\\).</p><p>Note: Accept answers rounded to 2 decimal places.</p>"
        }
      ]
    }
  },
  "step2": {
    "title": "Concept Check: Definitions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is a <strong>space diagonal</strong> in a cuboid?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>A line connecting two adjacent vertices on the same face.</span>",
            "isCorrect": false,
            "explanation": "<span>This describes an edge, not a space diagonal.</span>"
          },
          {
            "id": "b",
            "label": "<span>A line segment connecting two vertices that are not on the same face of the cuboid.</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! A space diagonal passes through the cuboid connecting opposite corners.</span>"
          },
          {
            "id": "c",
            "label": "<span>The diagonal of a flat 2D face of the cuboid.</span>",
            "isCorrect": false,
            "explanation": "<span>This is a face diagonal, not the space diagonal.</span>"
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the hypotenuse of a right-angled triangle lying on a face of a 3D shape.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "space diagonal",
                "label": "space diagonal",
                "isCorrect": false,
                "feedback": "<span>Incorrect, that is the diagonal through the volume, not a face.</span>"
              },
              {
                "value": "face diagonal",
                "label": "face diagonal",
                "isCorrect": true,
                "feedback": "<span>Correct!</span>"
              },
              {
                "value": "edge",
                "label": "edge",
                "isCorrect": false,
                "feedback": "<span>Edges are sides, not diagonals.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Applying Right-Angled Triangle Decomposition",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To solve 3D length problems, split the structure into two right-angled triangles: first find the face diagonal, then use it with the height to find the space diagonal.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of walking inside a building: first walk along the floor diagonally, then climb straight up. This breaks the journey into two right-angled steps.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding a Face Diagonal",
      "problem": "A rectangular face has sides 6 cm and 8 cm. Find the face diagonal step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate \\(d = \\sqrt{6^2 + 8^2}\\). What is d?",
          "answer": "10",
          "feedback": "Correct, \\(\\sqrt{36 + 64} = \\sqrt{100} = 10\\)."
        }
      ]
    }
  },
  "step5": {
    "title": "Interactive Example: Calculating Distance Between Vertices",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the decomposition approach for finding the distance between opposite corners in a cuboid with sides 7cm, 24cm, and 25cm.</p>",
    "workedExample": {
      "title": "Step-by-step Calculation",
      "problem": "Find the length of the space diagonal connecting opposite vertices of the cuboid.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Calculate the base diagonal: \\(d = \\sqrt{7^2 + 24^2}\\). What is d?",
          "answer": "25",
          "feedback": "Correct. \\(\\sqrt{49 + 576} = \\sqrt{625} = 25\\)."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Use height 25 cm and base diagonal d = 25 cm to calculate the space diagonal: \\(D = \\sqrt{25^2 + 25^2}\\). What is D (to 2 decimal places)?",
          "answer": "35.36",
          "feedback": "Correct! \\(\\sqrt{625 + 625} = \\sqrt{1250} \\approx 35.36\\)."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cuboid has dimensions length 9 cm, width 12 cm, and height 15 cm. Calculate the length of the space diagonal between opposite vertices. Show your working.</span>",
      "hint": "Remember to first find the diagonal of the base using length and width, then apply Pythagoras again with this result and the height.",
      "mustHaveKeywords": ["base diagonal", "Pythagoras", "space diagonal", "length", "width", "height"],
      "optionalKeywords": ["square root", "hypotenuse", "right-angled triangle"],
      "modelAnswer": "<span>First, find the base diagonal \\(d = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\) cm.<br/>Then find the space diagonal:<br/>\\(D = \\sqrt{d^2 + height^2} = \\sqrt{15^2 + 15^2} = \\sqrt{225 + 225} = \\sqrt{450} \\approx 21.21\\) cm.<br/>Therefore, the space diagonal is approximately 21.21 cm.</span>",
      "scaffoldPrompts": ["Calculate the diagonal of the base (length and width).", "Use that diagonal and the height to find the space diagonal using Pythagoras' theorem."]
    }
  }
};