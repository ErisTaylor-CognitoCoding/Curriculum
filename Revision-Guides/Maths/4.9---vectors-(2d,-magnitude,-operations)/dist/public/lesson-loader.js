window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.9 - Vectors (2D, magnitude, operations)",
  "strapline": "Introduction to 2D vectors, their components, magnitude, and basic operations.",
  "learningObjectives": [
    "Students should be able to represent 2D vectors as column vectors and understand their components in the x and y directions (Maths 4.9)",
    "Students should be able to calculate the magnitude of a 2D vector using Pythagoras' theorem (Maths 4.9)",
    "Students should be able to perform vector operations including addition, subtraction and scalar multiplication (Maths 4.9)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: |v| = √(x² + y²) (Magnitude of vector v = (x, y))",
    "Reminder: Always label vector components clearly"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='350' y2='250' stroke='#000' stroke-width='2' marker-end='url(#arrow)'/><line x1='50' y1='250' x2='50' y2='50' stroke='#000' stroke-width='2' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L10,5 L0,10 L2,5 Z' fill='#333'/></marker></defs><line x1='50' y1='250' x2='200' y2='150' stroke='#f44336' stroke-width='3' marker-end='url(#arrow)'/><text x='125' y='270' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#000'>&lt;— x component</text><text x='20' y='200' font-family='sans-serif' font-size='14' fill='#000'>&#8593; y component</text><text x='180' y='145' font-family='sans-serif' font-size='16' fill='#f44336' font-weight='bold'>&#40;x, y&#41;</text></svg>",
  "step1": {
    "title": "Concept: Representing 2D Vectors as Column Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A vector is a quantity with both magnitude (how much) and direction (which way). In 2D, vectors can be represented as <strong>column vectors</strong> showing horizontal (x) and vertical (y) components.</p><p class=\"text-sm leading-6 text-muted-foreground\">For example, the vector pointing 3 units right and 2 units up is written as <br><strong>&#91;3<br>2&#93;</strong> or simply (3, 2).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of vector components like directions on a treasure map: how far east (x) and how far north (y) you need to travel.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Writing a Vector From a Diagram",
      "problem": "Identify the components of a vector that moves 4 units right and 3 units up.",
      "questions": [
        {
          "id": "v1q1",
          "prompt": "What is the horizontal (x) component?",
          "answer": "4",
          "feedback": "Correct, the vector moves 4 units to the right."
        },
        {
          "id": "v1q2",
          "prompt": "What is the vertical (y) component?",
          "answer": "3",
          "feedback": "Correct, the vector moves 3 units upwards."
        },
        {
          "id": "v1q3",
          "prompt": "Write this vector as a column vector.",
          "answer": "[4, 3]",
          "feedback": "Well done! The vector is written as [4, 3]."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Calculating Magnitude Using Pythagoras' Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>magnitude</strong> of a vector is its length, calculated using Pythagoras' theorem: if a vector has components (x, y), then its magnitude is <em>√(x² + y²)</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Magnitude Calculation",
      "problem": "Calculate the magnitude of vector <strong>[3, 4]</strong>.",
      "questions": [
        {
          "id": "magq1",
          "prompt": "Square the x component: 3² = ?",
          "answer": "9",
          "feedback": "Good job! 3 squared is 9."
        },
        {
          "id": "magq2",
          "prompt": "Square the y component: 4² = ?",
          "answer": "16",
          "feedback": "Correct, 4 squared is 16."
        },
        {
          "id": "magq3",
          "prompt": "Add these squares: 9 + 16 = ?",
          "answer": "25",
          "feedback": "Yes, 9 plus 16 equals 25."
        },
        {
          "id": "magq4",
          "prompt": "Find √25 = ?",
          "answer": "5",
          "feedback": "Exactly, the magnitude is 5."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Vector Addition",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To <strong>add</strong> two vectors, add their x components together and their y components together.</p><p>If <em>v = (x₁, y₁)</em> and <em>w = (x₂, y₂)</em>, then <em>v + w = (x₁ + x₂, y₁ + y₂)</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Adding Two Vectors",
      "problem": "Find the sum of vectors <strong>[2, 3]</strong> and <strong>[4, 1]</strong>.",
      "questions": [
        {
          "id": "addq1",
          "prompt": "Add the x components: 2 + 4 = ?",
          "answer": "6",
          "feedback": "Correct, 2 plus 4 equals 6."
        },
        {
          "id": "addq2",
          "prompt": "Add the y components: 3 + 1 = ?",
          "answer": "4",
          "feedback": "Yes, 3 plus 1 equals 4."
        },
        {
          "id": "addq3",
          "prompt": "Write the resulting vector as a column vector.",
          "answer": "[6, 4]",
          "feedback": "Well done! The sum is [6, 4]."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='150' y2='200' stroke='#2196f3' stroke-width='3' marker-end='url(#arrow)'/><line x1='150' y1='200' x2='310' y2='160' stroke='#4caf50' stroke-width='3' marker-end='url(#arrow)'/><line x1='50' y1='250' x2='310' y2='160' stroke='#f44336' stroke-width='3' stroke-dasharray='5,5' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L10,5 L0,10 L2,5 Z' fill='#333'/></marker></defs><text x='100' y='195' font-family='sans-serif' font-size='14' fill='#2196f3'>v = [2,3]</text><text x='220' y='150' font-family='sans-serif' font-size='14' fill='#4caf50'>w = [4,1]</text><text x='180' y='280' font-family='sans-serif' font-size='14' fill='#f44336'>v + w = [6,4]</text></svg>"
    }
  },
  "step4": {
    "title": "Concept: Vector Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To <strong>subtract</strong> one vector from another, subtract the corresponding components.</p><p>If <em>v = (x₁, y₁)</em> and <em>w = (x₂, y₂)</em>, then <em>v - w = (x₁ - x₂, y₁ - y₂)</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Subtracting Two Vectors",
      "problem": "Find the difference between vectors <strong>[5, 7]</strong> and <strong>[3, 2]</strong>.",
      "questions": [
        {
          "id": "subq1",
          "prompt": "Subtract the x components: 5 - 3 = ?",
          "answer": "2",
          "feedback": "Correct, 5 minus 3 is 2."
        },
        {
          "id": "subq2",
          "prompt": "Subtract the y components: 7 - 2 = ?",
          "answer": "5",
          "feedback": "Yes, 7 minus 2 is 5."
        },
        {
          "id": "subq3",
          "prompt": "Write the resulting vector as a column vector.",
          "answer": "[2, 5]",
          "feedback": "Great job! The difference is [2, 5]."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='250' y2='120' stroke='#673ab7' stroke-width='3' marker-end='url(#arrow)'/><line x1='50' y1='250' x2='150' y2='170' stroke='#009688' stroke-width='3' marker-end='url(#arrow)'/><line x1='150' y1='170' x2='250' y2='120' stroke='#ff9800' stroke-width='3' marker-end='url(#arrow)'/><text x='100' y='265' font-family='sans-serif' font-size='14' fill='#000'>Origin</text><text x='160' y='185' font-family='sans-serif' font-size='14' fill='#009688'>w = [3,2]</text><text x='260' y='130' font-family='sans-serif' font-size='14' fill='#673ab7'>v = [5,7]</text><text x='200' y='140' font-family='sans-serif' font-size='14' fill='#ff9800'>v - w = [2,5]</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L10,5 L0,10 L2,5 Z' fill='#333'/></marker></defs></svg>"
    }
  },
  "step5": {
    "title": "Concept: Scalar Multiplication of Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Multiplying a vector by a scalar (a number) changes its magnitude but not its direction unless the scalar is negative.</p><p>If <em>v = (x, y)</em> and <em>k</em> is a scalar, then <em>k * v = (k*x, k*y)</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Scalar Multiplication",
      "problem": "Multiply vector <strong>[2, 5]</strong> by scalar <strong>3</strong>.",
      "questions": [
        {
          "id": "scalq1",
          "prompt": "Multiply the x component: 3 * 2 = ?",
          "answer": "6",
          "feedback": "Correct, 3 times 2 is 6."
        },
        {
          "id": "scalq2",
          "prompt": "Multiply the y component: 3 * 5 = ?",
          "answer": "15",
          "feedback": "Good, 3 times 5 is 15."
        },
        {
          "id": "scalq3",
          "prompt": "Write the resulting vector.",
          "answer": "[6, 15]",
          "feedback": "Well done! The scalar multiple is [6, 15]."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A vector <strong>v</strong> is given as [6, 8].</span><br><span>Calculate:</span><ul><li>The magnitude of vector <strong>v</strong>.</li><li>A new vector <strong>w</strong> which is <strong>v</strong> multiplied by 0.5.</li><li>The vector <strong>u = v - w</strong>.</li></ul>",
      "hint": "<span>Remember: Use Pythagoras' theorem for magnitude. Multiply each component by 0.5 for scalar multiplication. Subtract corresponding components for subtraction.</span>",
      "mustHaveKeywords": ["magnitude", "scalar multiplication", "vector subtraction", "Pythagoras' theorem"],
      "optionalKeywords": ["components", "square root", "direction"],
      "modelAnswer": "<span>To find the magnitude of <strong>v = [6, 8]</strong>, calculate √(6² + 8²) = √(36 + 64) = √100 = 10.<br>Scalar multiply <strong>v</strong> by 0.5: <strong>w = [0.5 × 6, 0.5 × 8] = [3, 4]</strong>.<br>Subtract vectors: <strong>u = v - w = [6 - 3, 8 - 4] = [3, 4]</strong>.</span>",
      "scaffoldPrompts": ["Step 1: Calculate the magnitude of [6, 8]", "Step 2: Multiply each component by 0.5", "Step 3: Subtract the resulting vector from the original vector"]
    },
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='170' y2='130' stroke='#e91e63' stroke-width='3' marker-end='url(#arrow)'/><line x1='50' y1='250' x2='110' y2='170' stroke='#3f51b5' stroke-width='3' marker-end='url(#arrow)'/><line x1='110' y1='170' x2='170' y2='130' stroke='#009688' stroke-width='3' stroke-dasharray='4,4' marker-end='url(#arrow)'/><text x='160' y='120' font-family='sans-serif' font-size='14' fill='#e91e63'>v = [6,8]</text><text x='100' y='160' font-family='sans-serif' font-size='14' fill='#3f51b5'>w = [3,4]</text><text x='140' y='190' font-family='sans-serif' font-size='14' fill='#009688'>u = v - w = [3,4]</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L10,5 L0,10 L2,5 Z' fill='#333'/></marker></defs></svg>"
  }
};