window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.9 - Vectors (2D, magnitude, operations)",
  "strapline": "An introduction to 2D vectors, their representation, magnitude calculation, and basic operations including addition, subtraction, and scalar multiplication.",
  "learningObjectives": [
    "Students should be able to represent 2D vectors as column vectors and understand their components in the x and y directions (Maths 4.9)",
    "Students should be able to calculate the magnitude of a 2D vector using Pythagoras' theorem (Maths 4.9)",
    "Students should be able to perform vector operations including addition, subtraction and scalar multiplication (Maths 4.9)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: \\|\\mathbf{v}\\| = \\sqrt{x^2 + y^2} (Magnitude of a vector \\mathbf{v} = (x, y))",
    "Reminder: Always represent vectors clearly with x and y components"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='350' y2='250' stroke='#666' stroke-width='2'/><line x1='50' y1='250' x2='50' y2='50' stroke='#666' stroke-width='2'/><line x1='50' y1='250' x2='200' y2='150' stroke='#0074D9' stroke-width='4' marker-end='url(#arrowhead)' /><circle cx='200' cy='150' r='4' fill='#0074D9'/><text x='205' y='145' font-family='sans-serif' font-size='16' fill='#0074D9'>&#40;3, 2&#41;</text><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#0074D9'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: What is a 2D Vector?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>vector</strong> in 2D is a quantity that has both <em>magnitude</em> (how far) and <em>direction</em>. It can be represented as a <strong>column vector</strong> which shows horizontal (x) and vertical (y) components, for example &#40;3, 2&#41; means the vector moves 3 units right and 2 units up.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine walking 3 steps east and then 2 steps north. Your total movement can be thought of as a vector <strong>(3, 2)</strong> representing your overall displacement.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Representing a Vector",
      "problem": "Write the vector that represents a movement of 4 units left and 5 units up.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the x-component (horizontal movement)? (Positive right, negative left)",
          "answer": "-4",
          "feedback": "Correct. Moving left means the x-component is negative."
        },
        {
          "id": "q2",
          "prompt": "What is the y-component (vertical movement)? (Positive up, negative down)",
          "answer": "5",
          "feedback": "Correct. Moving up means the y-component is positive."
        },
        {
          "id": "q3",
          "prompt": "Write the vector as a column vector (x, y).",
          "answer": "(-4, 5)",
          "feedback": "Well done! The vector is (-4, 5)."
        }
      ]
    }
  },
  "step2": {
    "title": "Calculating Magnitude of a Vector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>magnitude</strong> of a vector is its length. For a vector &#40;x, y&#41;, use <em>Pythagoras' theorem</em>: magnitude = &#8730;&#40;x<sup>2</sup> + y<sup>2</sup>&#41;.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Vector Magnitude",
      "problem": "Find the magnitude of the vector (3, 4).",
      "questions": [
        {
          "id": "m1",
          "prompt": "Square the x-component: 3<sup>2</sup> = ?",
          "answer": "9",
          "feedback": "Correct, 3 squared is 9."
        },
        {
          "id": "m2",
          "prompt": "Square the y-component: 4<sup>2</sup> = ?",
          "answer": "16",
          "feedback": "Correct, 4 squared is 16."
        },
        {
          "id": "m3",
          "prompt": "Add the squares: 9 + 16 = ?",
          "answer": "25",
          "feedback": "Correct, 9 + 16 equals 25."
        },
        {
          "id": "m4",
          "prompt": "Find the square root of 25. What is the magnitude?",
          "answer": "5",
          "feedback": "Correct! The magnitude is 5."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 300 250' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='210' x2='160' y2='90' stroke='#2E86C1' stroke-width='4' marker-end='url(#arrow)'/><line x1='40' y1='210' x2='160' y2='210' stroke='#555' stroke-dasharray='5,5'/><line x1='160' y1='90' x2='160' y2='210' stroke='#555' stroke-dasharray='5,5'/><circle cx='160' cy='90' r='5' fill='#2E86C1'/><text x='100' y='230' font-family='sans-serif' font-size='14'>3</text><text x='170' y='150' font-family='sans-serif' font-size='14'>4</text><text x='90' y='150' font-family='sans-serif' font-size='14' fill='#C0392B'>&#8730;(3<sup>2</sup> + 4<sup>2</sup>)</text><defs><marker id='arrow' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#2E86C1'/></marker></defs></svg>"
  },
  "step3": {
    "title": "Vector Addition and Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Vectors can be <strong>added</strong> or <strong>subtracted</strong> by combining their <em>respective components</em>. For example, <strong>(x₁, y₁) + (x₂, y₂) = (x₁ + x₂, y₁ + y₂)</strong>, and subtraction is similar: <strong>(x₁, y₁) - (x₂, y₂) = (x₁ - x₂, y₁ - y₂)</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Adding Vectors",
      "problem": "Add the vectors (2, 3) and (4, -1).",
      "questions": [
        {
          "id": "a1",
          "prompt": "Add the x-components: 2 + 4 = ?",
          "answer": "6",
          "feedback": "Correct, 2 + 4 equals 6."
        },
        {
          "id": "a2",
          "prompt": "Add the y-components: 3 + (-1) = ?",
          "answer": "2",
          "feedback": "Correct, 3 plus negative 1 is 2."
        },
        {
          "id": "a3",
          "prompt": "Write the resulting vector as (x, y).",
          "answer": "(6, 2)",
          "feedback": "Well done! The sum is (6, 2)."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 260' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='210' x2='170' y2='150' stroke='#2471A3' stroke-width='4' marker-end='url(#arrow)'/><line x1='170' y1='150' x2='290' y2='130' stroke='#28B463' stroke-width='4' marker-end='url(#arrow)'/><line x1='50' y1='210' x2='290' y2='130' stroke='#CB4335' stroke-width='4' stroke-dasharray='6,3' marker-end='url(#arrow)'/><text x='110' y='170' font-family='sans-serif' font-size='16' fill='#2471A3'>(2, 3)</text><text x='230' y='140' font-family='sans-serif' font-size='16' fill='#28B463'>(4, -1)</text><text x='180' y='110' font-family='sans-serif' font-size='16' fill='#CB4335'>(6, 2)</text><defs><marker id='arrow' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#000'/></marker></defs></svg>"
  },
  "step4": {
    "title": "Scalar Multiplication of Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Scalar multiplication means multiplying each component of a vector by a number (scalar). For vector (x, y) and scalar k, <strong>k(x, y) = (kx, ky)</strong>. This changes the magnitude but not direction if k > 0, or reverses direction if k < 0.</p>",
    "workedExample": {
      "title": "Worked Example: Scalar Multiplication",
      "problem": "Multiply the vector (3, -2) by the scalar 4.",
      "questions": [
        {
          "id": "s1",
          "prompt": "Multiply x-component: 3 × 4 = ?",
          "answer": "12",
          "feedback": "Correct, 3 times 4 is 12."
        },
        {
          "id": "s2",
          "prompt": "Multiply y-component: -2 × 4 = ?",
          "answer": "-8",
          "feedback": "Correct! Negative 2 times 4 is -8."
        },
        {
          "id": "s3",
          "prompt": "Write the resulting vector as (x, y).",
          "answer": "(12, -8)",
          "feedback": "Well done! The scaled vector is (12, -8)."
        }
      ]
    }
  },
  "step5": {
    "title": "Vector Subtraction: Worked Example",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Subtraction of vectors is done by subtracting individual components. For example, (x₁, y₁) - (x₂, y₂) = (x₁ - x₂, y₁ - y₂).</p>",
    "workedExample": {
      "title": "Worked Example: Subtracting Vectors",
      "problem": "Calculate (7, 5) - (2, 3).",
      "questions": [
        {
          "id": "sub1",
          "prompt": "Subtract x-components: 7 - 2 = ?",
          "answer": "5",
          "feedback": "Correct, 7 minus 2 equals 5."
        },
        {
          "id": "sub2",
          "prompt": "Subtract y-components: 5 - 3 = ?",
          "answer": "2",
          "feedback": "Correct, 5 minus 3 equals 2."
        },
        {
          "id": "sub3",
          "prompt": "Write the resulting vector as (x, y).",
          "answer": "(5, 2)",
          "feedback": "Good job! The result is (5, 2)."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given vectors A = (3, 4) and B = (-1, 2): Calculate the vector 3A - 2B and find its magnitude, showing all your working.</span>",
      "hint": "Remember to multiply each component by the scalar before subtracting, then use Pythagoras to find magnitude.",
      "mustHaveKeywords": ["scalar multiplication", "component-wise subtraction", "Pythagoras' theorem", "magnitude"],
      "optionalKeywords": ["column vector", "x component", "y component"],
      "modelAnswer": "<span>First, multiply vector A by 3: (3×3, 3×4) = (9, 12). Multiply vector B by 2: (2×-1, 2×2) = (-2, 4). Subtract the vectors: (9 - (-2), 12 - 4) = (11, 8). Then calculate magnitude: √(11² + 8²) = √(121 + 64) = √185 ≈ 13.6.</span>",
      "scaffoldPrompts": ["Multiply each component of A by 3", "Multiply each component of B by 2", "Subtract corresponding components", "Calculate the magnitude using √(x² + y²)"]
    },
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='140' y2='170' stroke='#2874A6' stroke-width='4' marker-end='url(#arrow)'/><line x1='50' y1='250' x2='30' y2='210' stroke='#117A65' stroke-width='4' marker-end='url(#arrow)'/><line x1='50' y1='250' x2='330' y2='80' stroke='#BA4A00' stroke-width='4' stroke-dasharray='6,3' marker-end='url(#arrow)'/><text x='140' y='160' font-family='sans-serif' font-size='14' fill='#2874A6'>3A = (9, 12)</text><text x='10' y='200' font-family='sans-serif' font-size='14' fill='#117A65'>2B = (-2, 4)</text><text x='230' y='50' font-family='sans-serif' font-size='14' fill='#BA4A00'>3A - 2B = (11, 8)</text><defs><marker id='arrow' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#000'/></marker></defs></svg>"
  }
};