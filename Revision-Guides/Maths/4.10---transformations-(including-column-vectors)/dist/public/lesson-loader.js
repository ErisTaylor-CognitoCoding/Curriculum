window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.10 - Transformations (including column vectors)",
  "strapline": "Understand how to use column vectors for transformations and perform vector operations including magnitude calculation.",
  "learningObjectives": [
    "Students should be able to calculate the magnitude of a vector using Pythagoras' theorem (Maths 4.10)",
    "Students should be able to perform vector operations including addition, subtraction and scalar multiplication (Maths 4.10)",
    "Students should be able to describe transformations using column vectors to represent movements in the x and y directions (Maths 4.10)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: Vector Addition Resultant = (x₁ + x₂, y₁ + y₂)",
    "Reminder: When scaling a vector, multiply both components by the scalar"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='150' y2='100' stroke='#0074D9' stroke-width='3' marker-end='url(#arrow)' /><line x1='150' y1='100' x2='300' y2='200' stroke='#FF4136' stroke-width='3' marker-end='url(#arrow)' /><line x1='50' y1='250' x2='300' y2='200' stroke='#2ECC40' stroke-width='3' stroke-dasharray='5,5' marker-end='url(#arrow)' /><defs><marker id='arrow' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#333'/></marker></defs><text x='55' y='265' font-family='sans-serif' font-size='14'>Origin</text><text x='140' y='90' font-family='sans-serif' font-size='14'>Vector A</text><text x='290' y='190' font-family='sans-serif' font-size='14'>Vector B</text><text x='260' y='130' font-family='sans-serif' font-size='14' fill='#2ECC40'>Resultant</text></svg>",
  "step1": {
    "title": "Concept: Column Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>column vector</strong> represents movement or position in two dimensions. It is written as two numbers in brackets: the top number shows horizontal movement (x-direction), and the bottom number shows vertical movement (y-direction).</p><p>For example, <strong>\\( \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\)</strong> means moving 3 units right and 4 units up.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you are walking on a grid. The column vector tells you how many steps to take horizontally, then vertically.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding a Column Vector",
      "problem": "Interpreting the vector <strong>\\( \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix} \\)</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many units does the vector move horizontally (x-direction)?",
          "answer": "2",
          "feedback": "Correct! The top number is the horizontal movement."
        },
        {
          "id": "q2",
          "prompt": "How many units does the vector move vertically (y-direction)?",
          "answer": "-3",
          "feedback": "Correct! The bottom number shows vertical movement downwards."
        }
      ]
    }
  },
  "step2": {
    "title": "Calculating the Magnitude of a Vector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>magnitude</strong> of a vector is its length. Use Pythagoras' theorem: treat the x and y components as the two legs of a right-angled triangle, then find the hypotenuse.</p>",
    "workedExample": {
      "title": "Worked Example: Find the Magnitude",
      "problem": "Find the magnitude of <strong>\\( \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\)</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Square the horizontal component (3²):",
          "answer": "9",
          "feedback": "Correct! 3 squared is 9."
        },
        {
          "id": "q2",
          "prompt": "Square the vertical component (4²):",
          "answer": "16",
          "feedback": "Correct! 4 squared is 16."
        },
        {
          "id": "q3",
          "prompt": "Add the squares (9 + 16):",
          "answer": "25",
          "feedback": "Correct! 9 plus 16 is 25."
        },
        {
          "id": "q4",
          "prompt": "Find the square root of 25 (magnitude):",
          "answer": "5",
          "feedback": "Correct! The magnitude is 5 units."
        }
      ]
    }
  },
  "step3": {
    "title": "Vector Addition",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To add two vectors, add their corresponding components: add the x-values together and add the y-values together.</p><p>For example, <strong>\\( \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix} \\)</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Add Vectors",
      "problem": "Add the vectors <strong>\\( \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix} + \\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix} \\)</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Add the x-components (2 + -1):",
          "answer": "1",
          "feedback": "Correct! 2 plus -1 equals 1."
        },
        {
          "id": "q2",
          "prompt": "Add the y-components (5 + 3):",
          "answer": "8",
          "feedback": "Correct! 5 plus 3 equals 8."
        }
      ]
    }
  },
  "step4": {
    "title": "Vector Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Subtract vectors by subtracting corresponding components: subtract the x-values and the y-values.</p><p>Example: <strong>\\( \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix} \\)</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Subtract Vectors",
      "problem": "Subtract <strong>\\( \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} \\)</strong> from <strong>\\( \\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix} \\)</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Subtract the x-components (5 - 1):",
          "answer": "4",
          "feedback": "Correct! 5 minus 1 equals 4."
        },
        {
          "id": "q2",
          "prompt": "Subtract the y-components (7 - 2):",
          "answer": "5",
          "feedback": "Correct! 7 minus 2 equals 5."
        }
      ]
    }
  },
  "step5": {
    "title": "Scalar Multiplication of Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Multiply a vector by a scalar by multiplying both components by that number. This stretches or shrinks the vector.</p><p>Example: <strong>3 × \\( \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 12 \\end{pmatrix} \\)</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Multiply by a Scalar",
      "problem": "Multiply <strong>\\( \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix} \\)</strong> by 4.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the x-component (-2 × 4):",
          "answer": "-8",
          "feedback": "Correct! -2 times 4 is -8."
        },
        {
          "id": "q2",
          "prompt": "Multiply the y-component (3 × 4):",
          "answer": "12",
          "feedback": "Correct! 3 times 4 is 12."
        }
      ]
    }
  },
  "step6": {
    "title": "Using Column Vectors for Transformations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Transformations on a point can be described by adding a column vector representing movement in the x and y directions.</p><p>If a point is at <strong>\\( (x, y) \\)</strong> and translated by vector <strong>\\( \\begin{pmatrix} a \\\\ b \\end{pmatrix} \\)</strong>, the new position is <strong>\\( (x + a, y + b) \\)</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Describe a Translation",
      "problem": "A point is at <strong>\\( (2, 3) \\)</strong>. Translate it by <strong>\\( \\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix} \\)</strong>. What is the new position?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Add the x-coordinate and translation (2 + 4):",
          "answer": "6",
          "feedback": "Correct! The new x-coordinate is 6."
        },
        {
          "id": "q2",
          "prompt": "Add the y-coordinate and translation (3 + -1):",
          "answer": "2",
          "feedback": "Correct! The new y-coordinate is 2."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given the vectors <strong>\\( \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\)</strong> and <strong>\\( \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix} \\)</strong>, calculate the magnitude of their sum vector. Explain each step.</span>",
      "hint": "Remember to add corresponding components first, then calculate magnitude using Pythagoras' theorem.",
      "mustHaveKeywords": ["vector addition", "magnitude", "Pythagoras' theorem"],
      "optionalKeywords": ["components", "square root"],
      "modelAnswer": "<span>First, add the vectors by components: (3 + -1, 4 + 2) = (2, 6). Then, calculate the magnitude: \\( \\sqrt{2^2 + 6^2} = \\sqrt{4 + 36} = \\sqrt{40} \\). Finally, simplify the square root if possible.</span>",
      "scaffoldPrompts": ["Add the x-components of the two vectors", "Add the y-components of the two vectors", "Use Pythagoras' theorem to find the magnitude"]
    }
  }
};