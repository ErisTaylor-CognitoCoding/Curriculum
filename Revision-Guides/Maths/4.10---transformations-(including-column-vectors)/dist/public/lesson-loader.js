window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.10 - Transformations (including column vectors)",
  "strapline": "Learn how to describe and perform translations, reflections, rotations, enlargements, and how to combine these transformations on coordinate grids using column vectors.",
  "learningObjectives": [
    "Students should be able to describe translations using column vectors (Maths 4.10)",
    "Students should be able to perform and describe reflections, rotations and enlargements (Maths 4.10)",
    "Students should be able to identify and combine multiple transformations on a coordinate grid (Maths 4.10)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#f9f9f9' stroke='#666' stroke-width='1'/><line x1='200' y1='0' x2='200' y2='300' stroke='#999' stroke-dasharray='4'/><line x1='0' y1='150' x2='400' y2='150' stroke='#999' stroke-dasharray='4'/><circle cx='140' cy='110' r='15' fill='#3b82f6'/><circle cx='180' cy='130' r='15' fill='#ef4444'/><text x='140' y='100' font-family='Arial' font-size='14' fill='#000'>P</text><text x='180' y='120' font-family='Arial' font-size='14' fill='#000'>P'</text><text x='205' y='280' font-family='Arial' font-size='12' fill='#444'>Coordinate Grid with Transformation Points</text></svg>",
  "step1": {
    "title": "Concept: Translation and Column Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>translation</strong> moves every point in a shape the same distance and direction. The shape does not change size or orientation. We describe this movement using a <strong>column vector</strong>, which shows horizontal and vertical movements.</p><p>A column vector looks like <br><span><strong>\\[ \\begin{pmatrix} a \\\\ b \\end{pmatrix} \\]</strong></span> where <em>a</em> is how far left or right, and <em>b</em> is how far up or down the shape moves.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine sliding a book across a table without turning it. The book's position changes but its shape and orientation remain the same. The column vector tells you how many steps right/left and up/down you slid the book.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Describe a Translation",
      "problem": "A triangle has a vertex at (2, 3). It is translated using the column vector <strong>\\( \\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix} \\)</strong>. What are the new coordinates of the vertex?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How much does the shape move horizontally (a)?",
          "answer": "4",
          "feedback": "Correct. The vector shows movement 4 units to the right."
        },
        {
          "id": "q2",
          "prompt": "How much does the shape move vertically (b)?",
          "answer": "-2",
          "feedback": "Correct. The vector shows movement 2 units down."
        },
        {
          "id": "q3",
          "prompt": "Calculate the new x-coordinate (original 2 plus horizontal movement):",
          "answer": "6",
          "feedback": "Correct! 2 + 4 = 6."
        },
        {
          "id": "q4",
          "prompt": "Calculate the new y-coordinate (original 3 plus vertical movement):",
          "answer": "1",
          "feedback": "Correct! 3 + (-2) = 1."
        },
        {
          "id": "q5",
          "prompt": "Write the new vertex coordinates as (x, y):",
          "answer": "6,1",
          "feedback": "Well done! The new vertex is at (6, 1)."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Reflection",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>reflection</strong> flips a shape over a mirror line. Each point is the same distance from the mirror line as its corresponding reflected point, but on the opposite side.</p><p>Common mirror lines include the x-axis, y-axis, or lines like y = x.</p>",
    "workedExample": {
      "title": "Worked Example: Reflecting a Point",
      "problem": "Reflect the point (3, 5) in the x-axis. What are the new coordinates?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What happens to the x-coordinate when reflecting in the x-axis?",
          "answer": "3",
          "feedback": "Correct. The x-coordinate stays the same during reflection in the x-axis."
        },
        {
          "id": "q2",
          "prompt": "What happens to the y-coordinate when reflecting in the x-axis?",
          "answer": "-5",
          "feedback": "Correct. The y-coordinate changes sign (positive to negative)."
        },
        {
          "id": "q3",
          "prompt": "Write the new coordinates after reflection:",
          "answer": "3,-5",
          "feedback": "Good job! The point reflects to (3, -5)."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Rotation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Rotation</strong> turns a shape around a fixed point called the center of rotation. Common rotations are 90°, 180°, or 270° clockwise or anticlockwise.</p>",
    "workedExample": {
      "title": "Worked Example: Rotate a Point 90° clockwise about the origin",
      "problem": "Rotate the point (2, 3) 90° clockwise about the origin (0,0). What are the new coordinates?",
      "questions": [
        {
          "id": "q1",
          "prompt": "After 90° clockwise rotation, what happens to the x-coordinate?",
          "answer": "3",
          "feedback": "Correct. The new x is the original y-coordinate."
        },
        {
          "id": "q2",
          "prompt": "What happens to the y-coordinate after the rotation?",
          "answer": "-2",
          "feedback": "Correct. The new y is the negative of the original x-coordinate."
        },
        {
          "id": "q3",
          "prompt": "Write the coordinates after rotation:",
          "answer": "3,-2",
          "feedback": "Great! The point moves to (3, -2)."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Enlargement",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Enlargement</strong> changes the size of a shape by a scale factor from a center of enlargement. Points are moved further away or closer, but the shape remains similar and angles unchanged.</p>",
    "workedExample": {
      "title": "Worked Example: Enlarge a Point",
      "problem": "Enlarge the point (1, 2) by a scale factor of 3 from the origin (0,0). What are the new coordinates?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the x-coordinate by the scale factor:",
          "answer": "3",
          "feedback": "Correct, 1 × 3 = 3."
        },
        {
          "id": "q2",
          "prompt": "Multiply the y-coordinate by the scale factor:",
          "answer": "6",
          "feedback": "Correct, 2 × 3 = 6."
        },
        {
          "id": "q3",
          "prompt": "Write the new coordinates after enlargement:",
          "answer": "3,6",
          "feedback": "Excellent! The point is now at (3, 6)."
        }
      ]
    }
  },
  "step5": {
    "title": "Combining Multiple Transformations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Shapes can undergo more than one transformation in sequence, such as a translation followed by a reflection. It’s important to do them in the correct order.</p>",
    "workedExample": {
      "title": "Worked Example: Combine Translation and Reflection",
      "problem": "Start with point (1, 2). First, translate using <strong>\\( \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix} \\)</strong>. Then reflect the result in the y-axis. Find the final coordinates.",
      "questions": [
        {
          "id": "q1",
          "prompt": "After translation, what is the new point? Calculate the x-coordinate:",
          "answer": "4",
          "feedback": "Correct. 1 + 3 = 4."
        },
        {
          "id": "q2",
          "prompt": "After translation, calculate the y-coordinate:",
          "answer": "1",
          "feedback": "Correct. 2 + (-1) = 1."
        },
        {
          "id": "q3",
          "prompt": "Coordinates after translation are (4, 1). Now reflect in the y-axis. What happens to the x-coordinate?",
          "answer": "-4",
          "feedback": "Correct. The x-coordinate changes sign when reflected in the y-axis."
        },
        {
          "id": "q4",
          "prompt": "What happens to the y-coordinate after this reflection?",
          "answer": "1",
          "feedback": "Correct. The y-coordinate stays the same."
        },
        {
          "id": "q5",
          "prompt": "Write the final coordinates after both transformations:",
          "answer": "-4,1",
          "feedback": "Well done! The final point is (-4, 1)."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A triangle has vertices at A(1, 2), B(3, 4) and C(5, 2). It is translated by the vector <strong>\\( \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix} \\)</strong>, then rotated 180° about the origin, and finally reflected in the x-axis.</span>",
      "hint": "Remember to apply the transformations in the order given, calculating new coordinates after each step.",
      "mustHaveKeywords": ["translation", "rotation 180°", "reflection", "coordinates", "order of transformations"],
      "optionalKeywords": ["vector addition", "coordinate grid", "negative signs"],
      "modelAnswer": "<span>First, translate each vertex by subtracting 2 from the x-coordinate and adding 3 to the y-coordinate. Next, rotate the translated vertices 180° about the origin by changing (x, y) to (-x, -y). Lastly, reflect these rotated points in the x-axis by keeping x the same and changing y to its opposite. Show all coordinate steps clearly in order.</span>",
      "scaffoldPrompts": ["Translate vertex A: (1, 2) + (-2, 3) = ?", "Rotate the translated vertex A 180° about origin: ?", "Reflect the rotated vertex A in the x-axis: ?", "Repeat for vertices B and C"]
    }
  }
};