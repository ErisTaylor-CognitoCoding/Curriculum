window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.10 - Transformations (including column vectors)",
  "strapline": "An introduction to representing movements and transformations using column vectors, calculating their magnitude, and performing vector operations.",
  "learningObjectives": [
    "Students should be able to calculate the magnitude of a vector using Pythagoras' theorem (Maths 4.10)",
    "Students should be able to perform vector operations including addition, subtraction and scalar multiplication (Maths 4.10)",
    "Students should be able to describe transformations using column vectors to represent movements in the x and y directions (Maths 4.10)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: Vector addition: \\[\\begin{bmatrix}x_1 \\\\ y_1\\end{bmatrix} + \\begin{bmatrix}x_2 \\\\ y_2\\end{bmatrix} = \\begin{bmatrix}x_1 + x_2 \\\\ y_1 + y_2\\end{bmatrix}\\]",
    "Formula 3: Magnitude of a vector: \\[ ||\\begin{bmatrix}x \\\\ y\\end{bmatrix}|| = \\sqrt{x^2 + y^2} \\]"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='350' y2='250' stroke='#333' stroke-width='2'/><line x1='50' y1='250' x2='50' y2='50' stroke='#333' stroke-width='2'/><line x1='50' y1='250' x2='200' y2='150' stroke='#e63946' stroke-width='4' marker-end='url(#arrowhead)'/><line x1='200' y1='150' x2='320' y2='220' stroke='#457b9d' stroke-width='4' marker-end='url(#arrowhead)'/><line x1='50' y1='250' x2='320' y2='220' stroke='#2a9d8f' stroke-width='4' stroke-dasharray='5,5' marker-end='url(#arrowhead)'/><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#333'/></marker></defs><text x='45' y='270' font-family='sans-serif' font-size='14'>0</text><text x='195' y='265' font-family='sans-serif' font-size='14'>Vector A</text><text x='295' y='245' font-family='sans-serif' font-size='14'>Vector B</text><text x='330' y='200' font-family='sans-serif' font-size='14'>A + B</text></svg>",
  "step1": {
    "title": "Concept: What is a Column Vector?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>column vector</strong> is a way to represent movement or position in two dimensions using two numbers inside a column: the top number shows horizontal movement (x-direction) and the bottom number shows vertical movement (y-direction). For example, <em>[3<br>4]</em> means moving 3 units right and 4 units up.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you want to walk in a park 3 steps east and then 4 steps north; the column vector shows those two movements stacked vertically.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying a Column Vector",
      "problem": "Given the movement on a grid as 5 steps left and 2 steps up, express this as a column vector.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the horizontal movement (x)? (Hint: left is negative, right is positive)",
          "answer": "-5",
          "feedback": "Correct. Left movements have negative x-values."
        },
        {
          "id": "q2",
          "prompt": "What is the vertical movement (y)? (Hint: up is positive, down is negative)",
          "answer": "2",
          "feedback": "Correct. Up movements have positive y-values."
        },
        {
          "id": "q3",
          "prompt": "Write the column vector using your answers.",
          "answer": "[ -5\n  2 ]",
          "feedback": "Good! The vector is \\(\\begin{bmatrix}-5 \\\\ 2\\end{bmatrix}\\)."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Calculating the Magnitude of a Vector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>magnitude</strong> of a vector is the length of the arrow representing the vector. To calculate magnitude, use Pythagoras' theorem: square both the horizontal and vertical components, add them together, then take the square root.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you walk 3 steps east and 4 steps north, the straight-line distance from where you started is like the hypotenuse of a right triangle with sides 3 and 4.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the Magnitude of Vector <br> \\(\\begin{bmatrix}3 \\\\ 4\\end{bmatrix}\\)",
      "problem": "Calculate the magnitude (length) of the vector <br> \\(\\begin{bmatrix}3 \\\\ 4\\end{bmatrix}\\).",
      "questions": [
        {
          "id": "q4",
          "prompt": "Square the horizontal component: \\(3^2 = ?\\)",
          "answer": "9",
          "feedback": "Correct. 3 squared is 9."
        },
        {
          "id": "q5",
          "prompt": "Square the vertical component: \\(4^2 = ?\\)",
          "answer": "16",
          "feedback": "Correct. 4 squared is 16."
        },
        {
          "id": "q6",
          "prompt": "Add these two squares together: 9 + 16 = ?",
          "answer": "25",
          "feedback": "Correct. Sum is 25."
        },
        {
          "id": "q7",
          "prompt": "Take the square root of 25 to find the magnitude.",
          "answer": "5",
          "feedback": "Correct! The vector's magnitude is 5."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Vector Addition",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Adding vectors means combining their movements by adding their corresponding horizontal (x) and vertical (y) components separately to find the resultant vector.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you walk 2 steps east and 3 steps north, then 4 steps east and 1 step north, the total movement is the sum of these vectors.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Add the vectors <br> \\(\\begin{bmatrix}2 \\\\ 3\\end{bmatrix} + \\begin{bmatrix}4 \\\\ 1\\end{bmatrix}\\)",
      "problem": "Calculate the sum of these two vectors.",
      "questions": [
        {
          "id": "q8",
          "prompt": "Add the horizontal components: 2 + 4 = ?",
          "answer": "6",
          "feedback": "Correct."
        },
        {
          "id": "q9",
          "prompt": "Add the vertical components: 3 + 1 = ?",
          "answer": "4",
          "feedback": "Correct."
        },
        {
          "id": "q10",
          "prompt": "Write the resultant vector.",
          "answer": "[ 6\n  4 ]",
          "feedback": "Well done! The sum is \\(\\begin{bmatrix}6 \\\\ 4\\end{bmatrix}\\)."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Vector Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Subtracting vectors is similar to addition but the second vector's components are subtracted from the first vector's components to find the difference vector.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you walked 5 steps east and 4 steps north, then returned 2 steps east and 1 step north, subtracting vectors shows your overall change in position.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Subtract the vectors <br> \\(\\begin{bmatrix}5 \\\\ 4\\end{bmatrix} - \\begin{bmatrix}2 \\\\ 1\\end{bmatrix}\\)",
      "problem": "Calculate the difference between these two vectors.",
      "questions": [
        {
          "id": "q11",
          "prompt": "Subtract the horizontal components: 5 - 2 = ?",
          "answer": "3",
          "feedback": "Correct."
        },
        {
          "id": "q12",
          "prompt": "Subtract the vertical components: 4 - 1 = ?",
          "answer": "3",
          "feedback": "Correct."
        },
        {
          "id": "q13",
          "prompt": "Write the resultant vector.",
          "answer": "[ 3\n  3 ]",
          "feedback": "Good! The difference is \\(\\begin{bmatrix}3 \\\\ 3\\end{bmatrix}\\)."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Scalar Multiplication of a Vector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Scalar multiplication means multiplying each component of a vector by the same number (called the scalar), which stretches or shrinks the vector.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If your step size doubles, your movement vector doubles in size but points in the same direction.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Multiply the vector <br> \\(\\begin{bmatrix}3 \\\\ 4\\end{bmatrix}\\) by 3",
      "problem": "Calculate the new vector after scalar multiplication.",
      "questions": [
        {
          "id": "q14",
          "prompt": "Multiply the horizontal component: 3 × 3 = ?",
          "answer": "9",
          "feedback": "Correct."
        },
        {
          "id": "q15",
          "prompt": "Multiply the vertical component: 4 × 3 = ?",
          "answer": "12",
          "feedback": "Correct."
        },
        {
          "id": "q16",
          "prompt": "Write the resulting vector.",
          "answer": "[ 9\n  12 ]",
          "feedback": "Well done! The scalar multiplied vector is \\(\\begin{bmatrix}9 \\\\ 12\\end{bmatrix}\\)."
        }
      ]
    }
  },
  "step6": {
    "title": "Using Column Vectors to Describe Transformations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Column vectors can describe transformations on a coordinate plane by showing movement in the x (horizontal) and y (vertical) directions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Moving a point 3 right and 2 up is the same as translating it by the vector \\(\\begin{bmatrix}3 \\\\ 2\\end{bmatrix}\\).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Describe the transformation",
      "problem": "Point P is at (2, 3). It is translated by the vector \\(\\begin{bmatrix}-1 \\\\ 4\\end{bmatrix}\\). What are the new coordinates of P after the transformation?",
      "questions": [
        {
          "id": "q17",
          "prompt": "Calculate the new x-coordinate (2 + (-1))",
          "answer": "1",
          "feedback": "Correct."
        },
        {
          "id": "q18",
          "prompt": "Calculate the new y-coordinate (3 + 4)",
          "answer": "7",
          "feedback": "Correct."
        },
        {
          "id": "q19",
          "prompt": "Write the new coordinates of point P.",
          "answer": "(1, 7)",
          "feedback": "Well done! The point moves to (1, 7)."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A point A is located at coordinates (4, 5). It is translated by the vector \\(\\begin{bmatrix}-3 \\\\ 2\\end{bmatrix}\\). Afterwards, it is translated again by the vector \\(\\begin{bmatrix}1 \\\\ -4\\end{bmatrix}\\). Calculate the final coordinates of point A and find the magnitude of the resultant transformation vector (the total movement). Show your working.</span>",
      "hint": "Remember to first add the two transformation vectors to find the resultant vector, then add this to the original point's coordinates. Use Pythagoras' theorem for the magnitude.",
      "mustHaveKeywords": [
        "column vector",
        "vector addition",
        "magnitude",
        "Pythagoras"
      ],
      "optionalKeywords": [
        "transformation",
        "resultant vector"
      ],
      "modelAnswer": "<span>Step 1: Add the two transformation vectors: \\(\\begin{bmatrix}-3 \\\\ 2\\end{bmatrix} + \\begin{bmatrix}1 \\\\ -4\\end{bmatrix} = \\begin{bmatrix}-3+1 \\\\ 2 + (-4)\\end{bmatrix} = \\begin{bmatrix}-2 \\\\ -2\\end{bmatrix}\\).<br>Step 2: Add this resultant vector to the original point: (4, 5) + (-2, -2) = (4 - 2, 5 - 2) = (2, 3).<br>Step 3: Calculate the magnitude of the resultant vector: \\(\\sqrt{(-2)^2 + (-2)^2} = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}\\).</span>",
      "scaffoldPrompts": [
        "Start by adding the two given column vectors.",
        "Apply the resultant vector to the original point's coordinates.",
        "Use Pythagoras' theorem to find the magnitude of the resultant vector."
      ]
    }
  }
};