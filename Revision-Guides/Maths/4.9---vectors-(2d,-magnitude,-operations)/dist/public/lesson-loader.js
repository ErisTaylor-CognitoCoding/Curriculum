window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.9 - Vectors (2D, magnitude, operations)",
  "strapline": "Understanding 2D vectors, their magnitude, and fundamental vector operations using column notation and Pythagoras' theorem.",
  "learningObjectives": [
    "Students should understand vector notation and be able to represent 2D vectors in column form (Maths 4.9)",
    "Students should be able to calculate the magnitude of a 2D vector using Pythagoras' theorem (Maths 4.9)",
    "Students should be able to perform vector operations including addition, subtraction, and scalar multiplication (Maths 4.9)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: |v| = sqrt(x² + y²) (Magnitude of vector v = (x, y))",
    "Reminder: Vector addition is performed component-wise"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='150' y2='150' stroke='#0074D9' stroke-width='3' marker-end='url(#arrowhead)'/><line x1='150' y1='150' x2='250' y2='200' stroke='#FF4136' stroke-width='3' marker-end='url(#arrowhead)'/><line x1='50' y1='250' x2='250' y2='200' stroke='#2ECC40' stroke-width='3' stroke-dasharray='5,5' marker-end='url(#arrowhead)'/><text x='105' y='180' font-family='sans-serif' font-size='14' fill='#0074D9'>&lt;u&gt; (3, -4)</text><text x='200' y='185' font-family='sans-serif' font-size='14' fill='#FF4136'>&lt;v&gt; (5, 2)</text><text x='140' y='270' font-family='sans-serif' font-size='14' fill='#2ECC40'>u + v (8, -2)</text><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#333' /></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding Vectors and Vector Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>vector</strong> is a quantity that has both <em>magnitude</em> (size) and <em>direction</em>. We can represent vectors using arrows, or write them in <strong>column vector notation</strong> showing their horizontal and vertical components.</p><p>For example, a vector pointing 3 units right and 4 units up is written as <strong>\\( \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\)</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a vector like walking on a grid map. You might walk 3 steps east (right) and 4 steps north (up). This journey can be described exactly by the vector <strong>\\( \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\)</strong>.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Write a vector in column form",
      "problem": "Write a vector that points 5 units left and 2 units down in column vector notation.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the horizontal component (x-direction)? (Hint: left means negative direction)",
          "answer": "-5",
          "feedback": "Correct. Left corresponds to negative x-direction."
        },
        {
          "id": "q2",
          "prompt": "What is the vertical component (y-direction)? (Hint: down means negative direction)",
          "answer": "-2",
          "feedback": "Correct. Down corresponds to negative y-direction."
        },
        {
          "id": "q3",
          "prompt": "Write the vector in column form using these components.",
          "answer": "\\( \\begin{pmatrix} -5 \\\\ -2 \\end{pmatrix} \\)",
          "feedback": "Well done! That's the correct column vector notation."
        }
      ]
    }
  },
  "step2": {
    "title": "Calculate the Magnitude of a Vector Using Pythagoras' Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>magnitude</strong> (length) of a vector <strong>\\( \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\)</strong> is the distance from the origin to the point (x, y). We use Pythagoras' theorem: <strong>magnitude = \\( \\sqrt{x^2 + y^2} \\)</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Magnitude",
      "problem": "Find the magnitude of the vector <strong>\\( \\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix} \\)</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Square the horizontal component (6): What is 6²?",
          "answer": "36",
          "feedback": "Correct, 6² = 36."
        },
        {
          "id": "q2",
          "prompt": "Square the vertical component (8): What is 8²?",
          "answer": "64",
          "feedback": "Correct, 8² = 64."
        },
        {
          "id": "q3",
          "prompt": "Add these squares together: 36 + 64 = ?",
          "answer": "100",
          "feedback": "Right! 36 + 64 = 100."
        },
        {
          "id": "q4",
          "prompt": "Take the square root of 100 to find the magnitude.",
          "answer": "10",
          "feedback": "Excellent! The magnitude is 10."
        }
      ]
    }
  },
  "step3": {
    "title": "Vector Addition: Adding Two Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Adding two vectors involves adding their horizontal components and their vertical components separately: <br><strong>\\( \\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} + \\begin{pmatrix} x_2 \\\\ y_2 \\end{pmatrix} = \\begin{pmatrix} x_1 + x_2 \\\\ y_1 + y_2 \\end{pmatrix} \\)</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Add vectors",
      "problem": "Add <strong>\\( \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix} \\)</strong> and <strong>\\( \\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix} \\)</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Add the horizontal components: 3 + 4 = ?",
          "answer": "7",
          "feedback": "Correct, 3 + 4 = 7."
        },
        {
          "id": "q2",
          "prompt": "Add the vertical components: 5 + (-2) = ?",
          "answer": "3",
          "feedback": "Well done, 5 + (-2) = 3."
        },
        {
          "id": "q3",
          "prompt": "Write the resulting vector in column form.",
          "answer": "\\( \\begin{pmatrix} 7 \\\\ 3 \\end{pmatrix} \\)",
          "feedback": "Excellent! That's the sum of the two vectors."
        }
      ]
    }
  },
  "step4": {
    "title": "Vector Subtraction: Subtracting Two Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Subtracting one vector from another also involves subtracting components separately: <br><strong>\\( \\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} - \\begin{pmatrix} x_2 \\\\ y_2 \\end{pmatrix} = \\begin{pmatrix} x_1 - x_2 \\\\ y_1 - y_2 \\end{pmatrix} \\)</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Subtract vectors",
      "problem": "Subtract <strong>\\( \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} \\)</strong> from <strong>\\( \\begin{pmatrix} 7 \\\\ 1 \\end{pmatrix} \\)</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Subtract the horizontal components: 7 - 2 = ?",
          "answer": "5",
          "feedback": "Correct, 7 - 2 = 5."
        },
        {
          "id": "q2",
          "prompt": "Subtract the vertical components: 1 - 3 = ?",
          "answer": "-2",
          "feedback": "Good, 1 - 3 = -2."
        },
        {
          "id": "q3",
          "prompt": "Write the resulting vector in column form.",
          "answer": "\\( \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix} \\)",
          "feedback": "Perfect! This is the result of the subtraction."
        }
      ]
    }
  },
  "step5": {
    "title": "Scalar Multiplication of a Vector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Scalar multiplication means multiplying a vector by a number (scalar), scaling its magnitude but keeping direction if scalar is positive: <br><strong>\\( k \\times \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} kx \\\\ ky \\end{pmatrix} \\)</strong>, where <em>k</em> is a real number.</p>",
    "workedExample": {
      "title": "Worked Example: Scalar multiply a vector",
      "problem": "Multiply <strong>\\( \\begin{pmatrix} -4 \\\\ 3 \\end{pmatrix} \\)</strong> by 3.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the horizontal component: 3 × (-4) = ?",
          "answer": "-12",
          "feedback": "Correct, 3 × (-4) = -12."
        },
        {
          "id": "q2",
          "prompt": "Multiply the vertical component: 3 × 3 = ?",
          "answer": "9",
          "feedback": "Well done, 3 × 3 = 9."
        },
        {
          "id": "q3",
          "prompt": "Write the resulting vector in column form.",
          "answer": "\\( \\begin{pmatrix} -12 \\\\ 9 \\end{pmatrix} \\)",
          "feedback": "Excellent! The vector is scaled by 3."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given the vectors \\( \\mathbf{a} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix} \\) and \\( \\mathbf{b} = \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix} \\), calculate:</span><ol><li>The magnitude of \\( \\mathbf{a} \\).</li><li>The vector \\( 2\\mathbf{a} - 3\\mathbf{b} \\) in column form.</li></ol>",
      "hint": "Use Pythagoras' theorem to find magnitudes and apply scalar multiplication and vector subtraction component-wise.",
      "mustHaveKeywords": ["magnitude", "Pythagoras", "scalar multiplication", "vector subtraction"],
      "optionalKeywords": ["column vector", "components", "square root"],
      "modelAnswer": "<span>1. The magnitude of \\( \\mathbf{a} \\) is \\( \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\).<br>2. Calculate \\( 2\\mathbf{a} = \\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix} \\) and \\( 3\\mathbf{b} = \\begin{pmatrix} -3 \\\\ 6 \\end{pmatrix} \\). Then: \\( 2\\mathbf{a} - 3\\mathbf{b} = \\begin{pmatrix} 6 - (-3) \\\\ -8 - 6 \\end{pmatrix} = \\begin{pmatrix} 9 \\\\ -14 \\end{pmatrix} \\).</span>",
      "scaffoldPrompts": ["Calculate the squares of the components of \\( \\mathbf{a} \\)", "Sum the squares and find the square root", "Multiply vector \\( \\mathbf{a} \\) by 2", "Multiply vector \\( \\mathbf{b} \\) by 3", "Subtract the resulting vectors component-wise"]
    }
  }
};