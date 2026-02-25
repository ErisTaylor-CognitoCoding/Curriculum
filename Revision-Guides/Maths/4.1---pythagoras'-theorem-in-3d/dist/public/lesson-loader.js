window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.1 - Pythagoras' theorem in 3D",
  "strapline": "Learn to use Pythagoras' theorem to find distances in three-dimensional shapes by breaking them down into right-angled triangles.",
  "learningObjectives": [
    "Students should be able to apply Pythagoras' theorem to find lengths in three-dimensional shapes by identifying right-angled triangles within the structure (Maths 4.1)",
    "Students should be able to calculate distances between vertices in cuboids and other 3D objects by breaking problems into component right-angled triangles (Maths 4.1)"
  ],
  "keyFormulas": [
    "Formula 1: a\u00b2 + b\u00b2 = c\u00b2 (Pythagoras)",
    "Formula 2: Distance d = \\sqrt{l^2 + w^2 + h^2} (3D Pythagoras for space diagonals)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <rect x='70' y='70' width='180' height='120' fill='#d0e7f9' stroke='#333'/>\n  <line x1='70' y1='190' x2='250' y2='70' stroke='#f35' stroke-width='2' />\n  <circle cx='70' cy='70' r='4' fill='#333' />\n  <circle cx='250' cy='190' r='4' fill='#333' />\n  <text x='70' y='60' font-size='14' fill='#000'>A</text>\n  <text x='250' y='210' font-size='14' fill='#000'>B</text>\n  <text x='160' y='70' font-size='14' fill='#000'>Face diagonal</text>\n  <text x='160' y='180' font-size='14' fill='#000'>Space diagonal</text>\n</svg>",
  "step1": {
    "title": "Understanding the 2D Pythagoras' Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Pythagoras' theorem states that in a right-angled triangle, the square of the hypotenuse (<em>c</em>) is equal to the sum of the squares of the other two sides (<em>a</em> and <em>b</em>): a\u00b2 + b\u00b2 = c\u00b2.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a ladder leaning against a wall. The height from the ground to the top of the ladder, the distance from the wall, and the length of the ladder itself form a right-angled triangle.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the hypotenuse",
      "problem": "A right-angled triangle has legs of <strong>3 cm</strong> and <strong>4 cm</strong>. Find the length of the hypotenuse.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Square the lengths of the two legs (3 and 4). What are these values?",
          "answer": ["9", "16"],
          "feedback": "Correct, 3\u00b2 = 9 and 4\u00b2 = 16."
        },
        {
          "id": "q2",
          "prompt": "Add these squares together: 9 + 16 = ?",
          "answer": "25",
          "feedback": "Correct, the sum is 25."
        },
        {
          "id": "q3",
          "prompt": "Take the square root of 25 to find the hypotenuse length.",
          "answer": "5",
          "feedback": "Correct, the hypotenuse is 5 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Face Diagonal of a Cuboid",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>face diagonal</strong> is the diagonal across one face of a cuboid. This diagonal forms the hypotenuse of a right-angled triangle with the lengths of the sides of that face.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate face diagonal",
      "problem": "A cuboid has a length of <strong>6 cm</strong> and a width of <strong>8 cm</strong>. Find the face diagonal across the base.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Square the length and width: 6\u00b2 and 8\u00b2",
          "answer": ["36", "64"],
          "feedback": "Correct, 6\u00b2 = 36 and 8\u00b2 = 64."
        },
        {
          "id": "q2",
          "prompt": "Add these values: 36 + 64 = ?",
          "answer": "100",
          "feedback": "Correct, the sum is 100."
        },
        {
          "id": "q3",
          "prompt": "Square root of 100 is?",
          "answer": "10",
          "feedback": "Correct, so the face diagonal is 10 cm."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 200 150' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='30' y='40' width='120' height='80' fill='#ccf2cc' stroke='#333' />\n  <line x1='30' y1='40' x2='150' y2='120' stroke='#f36' stroke-width='3'/>\n  <text x='20' y='50' font-size='14' fill='#000'>6 cm</text>\n  <text x='80' y='135' font-size='14' fill='#000'>8 cm</text>\n  <text x='90' y='85' font-size='14' fill='#000' fill-opacity='0.8'>Face diagonal</text>\n</svg>"
  },
  "step3": {
    "title": "Key Concept: Space Diagonal",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>space diagonal</strong> is a line connecting two vertices of a 3D shape that do not lie on the same face — for example, opposite corners of a cuboid. It can be found by applying Pythagoras' theorem twice, involving length, width, and height.</p>",
    "workedExample": {
      "title": "Worked Example: Find the space diagonal",
      "problem": "A cuboid has dimensions: length = <strong>3 cm</strong>, width = <strong>4 cm</strong>, height = <strong>5 cm</strong>. Find the space diagonal.",
      "questions": [
        {
          "id": "q1",
          "prompt": "First, calculate the face diagonal of the base (length and width). What is \\u03B4 = \\sqrt{3^{2}+4^{2}}?",
          "answer": "5",
          "feedback": "Correct, the base diagonal is 5 cm."
        },
        {
          "id": "q2",
          "prompt": "Now find the space diagonal using \\u03B4 and height: \\sqrt{5^{2}+5^{2}} = ?",
          "answer": "7.07",
          "feedback": "Well done! The space diagonal is approximately 7.07 cm."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 220 170' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='40' y='40' width='120' height='90' fill='#e0dbf7' stroke='#333'/>\n  <line x1='40' y1='130' x2='160' y2='40' stroke='#6a3' stroke-width='3'/>\n  <line x1='40' y1='40' x2='80' y2='10' stroke='#333'/>\n  <line x1='160' y1='40' x2='200' y2='10' stroke='#333'/>\n  <line x1='200' y1='10' x2='80' y2='10' stroke='#333'/>\n  <line x1='80' y1='10' x2='80' y2='100' stroke='#333'/>\n  <line x1='200' y1='10' x2='200' y2='100' stroke='#333'/>\n  <line x1='200' y1='100' x2='160' y2='130' stroke='#333'/>\n  <text x='50' y='70' font-size='14' fill='#000'>3 cm</text>\n  <text x='100' y='140' font-size='14' fill='#000'>4 cm</text>\n  <text x='140' y='30' font-size='14' fill='#000'>5 cm</text>\n  <text x='100' y='90' fill='#000' font-size='14'>Space diagonal</text>\n</svg>"
  },
  "step4": {
    "title": "Right-Angled Triangle Decomposition",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To apply Pythagoras' theorem in 3D, break the 3D figure into two right-angled triangles: first on a face, then including height to form a second right triangle. This process helps calculate unknown lengths like space diagonals easily.</p>",
    "workedExample": {
      "title": "Worked Example: Decomposition process",
      "problem": "Using a cuboid of sides 7 cm, 24 cm, and 25 cm, find the space diagonal by decomposing into two right triangles.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the base's face diagonal: \\u03B4 = \\sqrt{7^{2} + 24^{2}} = ?",
          "answer": "25",
          "feedback": "Correct, the base diagonal is 25 cm."
        },
        {
          "id": "q2",
          "prompt": "Use \\u03B4 and height: \\sqrt{25^{2} + 25^{2}} = ?",
          "answer": "35.36",
          "feedback": "Correct, space diagonal ≈ 35.36 cm."
        }
      ]
    }
  },
  "step5": {
    "title": "Practice: Calculate Distance Between Vertices",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Apply your knowledge by finding distances between vertices in cuboids and other 3D shapes, breaking down the problem into right-angled triangles for easier calculation.</p>",
    "workedExample": {
      "title": "Problem: Distance in Cuboid",
      "problem": "Find the space diagonal of a cuboid with length 9 cm, width 12 cm, and height 15 cm.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the face diagonal of the base: \\u03B4 = \\sqrt{9^{2} + 12^{2}} = ?",
          "answer": "15",
          "feedback": "Correct, base diagonal is 15 cm."
        },
        {
          "id": "q2",
          "prompt": "Calculate the space diagonal: \\sqrt{15^{2} + 15^{2}} = ? (to two decimal places)",
          "answer": ["21.21", "21.2"],
          "feedback": "Good job! The space diagonal is approximately 21.21 cm."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cuboid has dimensions length = 5 cm, width = 12 cm, and height = 13 cm. Calculate the length of the space diagonal between opposite vertices.</span>",
      "hint": "Remember to first calculate the face diagonal and then use it with the height to apply Pythagoras' theorem again.",
      "mustHaveKeywords": ["face diagonal", "space diagonal", "Pythagoras' theorem"],
      "optionalKeywords": ["right-angled triangles", "sqrt", "break down"],
      "modelAnswer": "<span>First, find the face diagonal of the base: \\u03B4 = \\sqrt{5^{2} + 12^{2}} = \\sqrt{25 + 144} = \\sqrt{169} = 13 cm.<br/>Next, use this face diagonal and the height 13 cm to find the space diagonal: \\sqrt{13^{2} + 13^{2}} = \\sqrt{169 + 169} = \\sqrt{338} \\approx 18.38 cm.<br/>Therefore, the space diagonal is approximately 18.38 cm.</span>",
      "scaffoldPrompts": ["Calculate the base face diagonal using length and width.", "Use the face diagonal and height to find the space diagonal."]
    },
    "diagramHtml": "<svg viewBox='0 0 240 180' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'>\n  <rect x='50' y='60' width='120' height='90' fill='#fce4d6' stroke='#333'/>\n  <line x1='50' y1='150' x2='170' y2='60' stroke='#d9534f' stroke-width='3' />\n  <line x1='50' y1='60' x2='90' y2='30' stroke='#333'/>\n  <line x1='170' y1='60' x2='210' y2='30' stroke='#333'/>\n  <line x1='210' y1='30' x2='90' y2='30' stroke='#333'/>\n  <line x1='90' y1='30' x2='90' y2='120' stroke='#333'/>\n  <line x1='210' y1='30' x2='210' y2='120' stroke='#333'/>\n  <line x1='210' y1='120' x2='170' y2='150' stroke='#333'/>\n  <text x='60' y='95' font-size='14' fill='#000'>5 cm</text>\n  <text x='120' y='160' font-size='14' fill='#000'>12 cm</text>\n  <text x='160' y='40' font-size='14' fill='#000'>13 cm</text>\n  <text x='110' y='110' fill='#000' font-weight='bold' font-size='14'>Space diagonal</text>\n</svg>"
  }
};