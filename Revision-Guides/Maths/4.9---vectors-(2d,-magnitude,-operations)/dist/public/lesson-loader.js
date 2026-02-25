window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.9 - Vectors (2D, magnitude, operations)",
  "strapline": "Introduction to 2D vectors, understanding components, calculating magnitude, and performing basic vector operations.",
  "learningObjectives": [
    "Students should be able to represent 2D vectors as column vectors and understand their components in the x and y directions (Maths 4.9)",
    "Students should be able to calculate the magnitude of a 2D vector using Pythagoras' theorem (Maths 4.9)",
    "Students should be able to perform vector operations including addition, subtraction and scalar multiplication (Maths 4.9)"
  ],
  "keyFormulas": [
    "Formula 1: a\u00b2 + b\u00b2 = c\u00b2 (Pythagoras)",
    "Formula 2: \\|\\mathbf{v}\\| = \\sqrt{x^2 + y^2} (Magnitude of vector)",
    "Reminder: Vectors have both magnitude and direction"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg' style='background:#f9f9f9;'><line x1='50' y1='250' x2='350' y2='250' stroke='#333' stroke-width='2'/><line x1='50' y1='250' x2='50' y2='50' stroke='#333' stroke-width='2'/><polyline points='50,250 150,150 50,150' fill='none' stroke='#007ACC' stroke-width='3' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='9' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L0,6 L9,3 z' fill='#007ACC'/></marker></defs><text x='160' y='140' font-family='sans-serif' font-size='16' fill='#007ACC'>Vector \u03b2 = <tspan font-weight='bold'>(100, -100)</tspan></text><text x='45' y='270' font-family='sans-serif' font-size='14'>x</text><text x='25' y='150' font-family='sans-serif' font-size='14'>y</text></svg>",
  "step1": {
    "title": "Understanding 2D Vectors and Components",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>vector</strong> is a quantity that has both <em>magnitude</em> (how much) and <em>direction</em>. In 2D, vectors are written as <strong>column vectors</strong> with two components: the <em>x</em> (horizontal) component and the <em>y</em> (vertical) component.</p><p>For example, the vector (3, 2) means move 3 units right (x) and 2 units up (y).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a treasure map: to get to the treasure, you walk 3 steps east and 2 steps north. The direction and distance you walk defines a vector.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Representing a Movement as a Vector",
      "problem": "You move 4 steps to the right and 5 steps up. Represent this movement as a vector.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the x-component (horizontal movement)?",
          "answer": "4",
          "feedback": "Correct. You moved 4 steps right."
        },
        {
          "id": "q2",
          "prompt": "What is the y-component (vertical movement)?",
          "answer": "5",
          "feedback": "Correct. You moved 5 steps up."
        },
        {
          "id": "q3",
          "prompt": "Write the vector as a column vector with x on top and y below.",
          "answer": "[4; 5]",
          "feedback": "Correct! The vector is \\u27e8 4, 5 \\u27e9 (4 on top, 5 below)."
        }
      ]
    }
  },
  "step2": {
    "title": "Calculating Magnitude of a 2D Vector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>magnitude</strong> (length) of a vector <em>v</em> = (x, y) is calculated using Pythagoras' theorem:<br> \\|v\\| = \\sqrt{x^2 + y^2}.</p>",
    "workedExample": {
      "title": "Worked Example: Find the magnitude of a vector",
      "problem": "Find the magnitude of the vector \\u27e8 3, 4 \\u27e9.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Square the x component (3): what is 3\u00b2?",
          "answer": "9",
          "feedback": "Correct. 3 squared is 9."
        },
        {
          "id": "q2",
          "prompt": "Square the y component (4): what is 4\u00b2?",
          "answer": "16",
          "feedback": "Correct. 4 squared is 16."
        },
        {
          "id": "q3",
          "prompt": "Add these squares: 9 + 16 = ?",
          "answer": "25",
          "feedback": "Correct. The sum is 25."
        },
        {
          "id": "q4",
          "prompt": "Find the square root of 25 (the magnitude):",
          "answer": "5",
          "feedback": "Correct! The magnitude is 5."
        }
      ]
    }
  },
  "step3": {
    "title": "Vector Addition",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To <strong>add</strong> two vectors, add their respective components:<br> If \\u27e8x_1, y_1\\u27e9 and \\u27e8x_2, y_2\\u27e9 are vectors, then:<br> \\u27e8x_1, y_1\\u27e9 + \\u27e8x_2, y_2\\u27e9 = \\u27e8x_1 + x_2, y_1 + y_2\\u27e9</p>",
    "workedExample": {
      "title": "Worked Example: Add two vectors",
      "problem": "Add the vectors \\u27e8 2, 3 \\u27e9 and \\u27e8 4, 1 \\u27e9.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Add the x-components: 2 + 4 = ?",
          "answer": "6",
          "feedback": "Correct. 2 + 4 = 6."
        },
        {
          "id": "q2",
          "prompt": "Add the y-components: 3 + 1 = ?",
          "answer": "4",
          "feedback": "Correct. 3 + 1 = 4."
        },
        {
          "id": "q3",
          "prompt": "Write the resulting vector:",
          "answer": "[6; 4]",
          "feedback": "Correct! The sum is \\u27e8 6, 4 \\u27e9."
        }
      ]
    }
  },
  "step4": {
    "title": "Vector Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To <strong>subtract</strong> one vector from another, subtract their respective components:<br> \\u27e8x_1, y_1\\u27e9 - \\u27e8x_2, y_2\\u27e9 = \\u27e8x_1 - x_2, y_1 - y_2\\u27e9</p>",
    "workedExample": {
      "title": "Worked Example: Subtract two vectors",
      "problem": "Subtract \\u27e8 1, 2 \\u27e9 from \\u27e8 5, 7 \\u27e9.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Subtract the x-components: 5 - 1 = ?",
          "answer": "4",
          "feedback": "Correct. 5 - 1 = 4."
        },
        {
          "id": "q2",
          "prompt": "Subtract the y-components: 7 - 2 = ?",
          "answer": "5",
          "feedback": "Correct. 7 - 2 = 5."
        },
        {
          "id": "q3",
          "prompt": "Write the resulting vector:",
          "answer": "[4; 5]",
          "feedback": "Correct! The difference is \\u27e8 4, 5 \\u27e9."
        }
      ]
    }
  },
  "step5": {
    "title": "Scalar Multiplication of Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Multiplying a vector by a scalar means multiplying each component by that number:<br> k \\times \\u27e8x, y\\u27e9 = \\u27e8kx, ky\\u27e9</p>",
    "workedExample": {
      "title": "Worked Example: Scalar multiplication",
      "problem": "Multiply the vector \\u27e8 3, 5 \\u27e9 by 4.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the x-component: 3 \u00d7 4 = ?",
          "answer": "12",
          "feedback": "Correct. 3 times 4 is 12."
        },
        {
          "id": "q2",
          "prompt": "Multiply the y-component: 5 \u00d7 4 = ?",
          "answer": "20",
          "feedback": "Correct. 5 times 4 is 20."
        },
        {
          "id": "q3",
          "prompt": "Write the resulting vector:",
          "answer": "[12; 20]",
          "feedback": "Correct! The new vector is \\u27e8 12, 20 \\u27e9."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A vector \\u27e8x, y\\u27e9 has a magnitude of 13 and x-component 5. Find the y-component. Then calculate the vector \\u27e8x, y\\u27e9 multiplied by scalar 3.</span>",
      "hint": "Use Pythagoras' theorem to find y. Then multiply each component by 3.",
      "mustHaveKeywords": ["Pythagoras", "magnitude", "scalar multiplication"],
      "optionalKeywords": ["square root", "components"],
      "modelAnswer": "<span>Using \\|v\\| = \\sqrt{x^2 + y^2}, 13 = \\sqrt{5^2 + y^2}, 13^2 = 25 + y^2, 169 - 25 = y^2, y^2 = 144, y = 12.<br>Multiplying by scalar 3: 3 \\times \\u27e8 5, 12 \\u27e9 = \\u27e8 15, 36 \\u27e9.</span>",
      "scaffoldPrompts": [
        "Step 1: Write the formula for magnitude using x and y components.",
        "Step 2: Substitute values and solve for y.",
        "Step 3: Multiply each component of the vector by 3."
      ]
    }
  }
};