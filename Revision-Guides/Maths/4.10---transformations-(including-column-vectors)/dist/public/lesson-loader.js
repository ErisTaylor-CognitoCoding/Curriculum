window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.10 - Transformations (including column vectors)",
  "strapline": "Learn how to represent and manipulate transformations using column vectors, calculate vector magnitudes, and perform vector operations.",
  "learningObjectives": [
    "Students should be able to calculate the magnitude of a vector using Pythagoras' theorem (Maths 4.10)",
    "Students should be able to perform vector operations including addition, subtraction and scalar multiplication (Maths 4.10)",
    "Students should be able to describe transformations using column vectors to represent movements in the x and y directions (Maths 4.10)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: Vector magnitude = √(x² + y²)",
    "Reminder: Vector addition/subtraction done component-wise"
  ],
  "diagramHtml": "<svg viewBox='0 0 200 150' xmlns='http://www.w3.org/2000/svg'>  <line x1='20' y1='130' x2='180' y2='130' stroke='#333' stroke-width='2' />  <line x1='20' y1='130' x2='20' y2='20' stroke='#333' stroke-width='2' />  <line x1='20' y1='130' x2='100' y2='60' stroke='#0074D9' stroke-width='3' marker-end='url(#arrow)' />  <line x1='20' y1='130' x2='100' y2='130' stroke='#FF4136' stroke-width='2' stroke-dasharray='4 4' />  <line x1='100' y1='130' x2='100' y2='60' stroke='#FF4136' stroke-width='2' stroke-dasharray='4 4' />  <text x='22' y='140' font-family='sans-serif' font-size='12'>0,0</text>  <text x='95' y='145' font-family='sans-serif' font-size='12' fill='#FF4136'>x</text>  <text x='9' y='65' font-family='sans-serif' font-size='12' fill='#FF4136'>y</text>  <text x='105' y='80' font-family='sans-serif' font-size='14' fill='#0074D9'>&lt;3<br/>&lt;7</text>  <defs>    <marker id='arrow' markerWidth='10' markerHeight='10' refX='6' refY='3' orient='auto' markerUnits='strokeWidth'>      <path d='M0,0 L0,6 L9,3 z' fill='#0074D9' />    </marker>  </defs></svg>",
  "step1": {
    "title": "Introducing Column Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>column vector</strong> is a way to represent movement or position in 2D as two numbers in a column: the top number shows movement along the x-axis (horizontal), and the bottom number shows movement along the y-axis (vertical).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of column vectors like giving directions: 'Walk 3 steps east (x), then 7 steps north (y)'. The vector is <em>〈3<br>7〉</em>.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Writing a Movement as a Column Vector",
      "problem": "Write the movement: 4 steps right and 5 steps up as a column vector.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the x (horizontal) movement:",
          "answer": "4",
          "feedback": "Correct, the x component is 4."
        },
        {
          "id": "q2",
          "prompt": "Enter the y (vertical) movement:",
          "answer": "5",
          "feedback": "Correct, the y component is 5."
        },
        {
          "id": "q3",
          "prompt": "Write your final column vector:",
          "answer": "<br>5",
          "feedback": "Great! The vector is written as <em>〈4<br>5〉</em>."
        }
      ]
    }
  },
  "step2": {
    "title": "Calculating the Magnitude of a Vector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>magnitude</strong> of a vector is the length of the arrow it represents, found using Pythagoras' theorem: magnitude = \\(\\sqrt{x^2 + y^2}\\).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you walk 3 steps east and 4 steps north, how far are you from your start point \"as the crow flies\"? Use Pythagoras' theorem to find out.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Magnitude",
      "problem": "Calculate the magnitude of vector <em>〈3<br>4〉</em>.",
      "questions": [
        {
          "id": "q1_mag",
          "prompt": "Square the x component (3²):",
          "answer": "9",
          "feedback": "Correct, 3 squared is 9."
        },
        {
          "id": "q2_mag",
          "prompt": "Square the y component (4²):",
          "answer": "16",
          "feedback": "Correct, 4 squared is 16."
        },
        {
          "id": "q3_mag",
          "prompt": "Add the squares: 9 + 16 =",
          "answer": "25",
          "feedback": "Correct, 9 plus 16 is 25."
        },
        {
          "id": "q4_mag",
          "prompt": "Find the square root of 25:",
          "answer": "5",
          "feedback": "Correct! The magnitude is 5."
        }
      ]
    }
  },
  "step3": {
    "title": "Vector Addition",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To add two vectors, add their corresponding components: add the x-values together and the y-values together.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you walk 2 steps east then 3 steps east, your total eastward movement is 5 steps (2 + 3).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Adding Vectors",
      "problem": "Add vectors <em>〈2<br>3〉</em> and <em>〈4<br>1〉</em>.",
      "questions": [
        {
          "id": "q1_add_x",
          "prompt": "Add the x components: 2 + 4 =",
          "answer": "6",
          "feedback": "Correct, 2 plus 4 equals 6."
        },
        {
          "id": "q2_add_y",
          "prompt": "Add the y components: 3 + 1 =",
          "answer": "4",
          "feedback": "Correct, 3 plus 1 equals 4."
        },
        {
          "id": "q3_add_final",
          "prompt": "Write the resultant vector:",
          "answer": "<br>4",
          "feedback": "Correct! The sum is <em>〈6<br>4〉</em>."
        }
      ]
    }
  },
  "step4": {
    "title": "Vector Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Subtract a vector by subtracting its components from the other vector's components, x minus x and y minus y.</p>",
    "workedExample": {
      "title": "Worked Example: Subtracting Vectors",
      "problem": "Calculate <em>〈5<br>7〉</em> - <em>〈2<br>4〉</em>.",
      "questions": [
        {
          "id": "q1_sub_x",
          "prompt": "Subtract the x components: 5 - 2 =",
          "answer": "3",
          "feedback": "Correct."
        },
        {
          "id": "q2_sub_y",
          "prompt": "Subtract the y components: 7 - 4 =",
          "answer": "3",
          "feedback": "Correct."
        },
        {
          "id": "q3_sub_final",
          "prompt": "Write the result as a vector:",
          "answer": "<br>3",
          "feedback": "Well done. Result vector is <em>〈3<br>3〉</em>."
        }
      ]
    }
  },
  "step5": {
    "title": "Scalar Multiplication of Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Multiply a vector by a number (a scalar) by multiplying both x and y components by that number.</p>",
    "workedExample": {
      "title": "Worked Example: Scalar Multiplication",
      "problem": "Multiply vector <em>〈3<br>5〉</em> by 4.",
      "questions": [
        {
          "id": "q1_scalar_x",
          "prompt": "Multiply the x component: 3 × 4 =",
          "answer": "12",
          "feedback": "Correct."
        },
        {
          "id": "q2_scalar_y",
          "prompt": "Multiply the y component: 5 × 4 =",
          "answer": "20",
          "feedback": "Correct."
        },
        {
          "id": "q3_scalar_final",
          "prompt": "Write the resulting vector:",
          "answer": "<br>20",
          "feedback": "Good job. The answer is <em>〈12<br>20〉</em>."
        }
      ]
    }
  },
  "step6": {
    "title": "Describing Transformations with Column Vectors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Transformations can be described by column vectors showing how a point moves horizontally and vertically. For example, a vector <em>〈2<br>3〉</em> moves a point 2 units right and 3 units up.</p>",
    "diagramHtml": "<svg viewBox='0 0 220 150' xmlns='http://www.w3.org/2000/svg'>  <line x1='20' y1='130' x2='200' y2='130' stroke='#333' stroke-width='2' />  <line x1='20' y1='130' x2='20' y2='20' stroke='#333' stroke-width='2' />  <circle cx='50' cy='100' r='5' fill='#0074D9' />  <circle cx='50' cy='100' r='5' fill='none' stroke='#0074D9' stroke-width='2' />  <circle cx='100' cy='70' r='5' fill='#FF851B' />  <line x1='50' y1='100' x2='100' y2='70' stroke='#2ECC40' stroke-width='3' marker-end='url(#arrow)' />  <text x='45' y='115' font-family='sans-serif' font-size='12'>P</text>  <text x='95' y='65' font-family='sans-serif' font-size='12'>P'</text>  <text x='70' y='120' font-family='sans-serif' font-size='14' fill='#2ECC40'>&lt;50, -30&gt;</text>  <defs>    <marker id='arrow' markerWidth='10' markerHeight='10' refX='6' refY='3' orient='auto' markerUnits='strokeWidth'>      <path d='M0,0 L0,6 L9,3 z' fill='#2ECC40'/>    </marker>  </defs></svg>",
    "workedExample": {
      "title": "Worked Example: Describe the Transformation as a Vector",
      "problem": "Point P moves from (50,100) to P' at (100,70). Write the column vector describing this transformation.",
      "questions": [
        {
          "id": "q1_tf_x",
          "prompt": "Calculate horizontal movement: 100 - 50 =",
          "answer": "50",
          "feedback": "Correct, the point moves 50 units right."
        },
        {
          "id": "q2_tf_y",
          "prompt": "Calculate vertical movement: 70 - 100 =",
          "answer": "-30",
          "feedback": "Correct, the point moves 30 units down."
        },
        {
          "id": "q3_tf_vector",
          "prompt": "Write the column vector for the transformation:",
          "answer": "<br>-30",
          "feedback": "Well done! The transformation vector is <em>〈50<br>-30〉</em>."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to find the magnitude of a vector and describe a transformation using a column vector.</span>",
      "hint": "Remember to use Pythagoras' theorem for magnitude and explain what each component of the column vector represents.",
      "mustHaveKeywords": ["Pythagoras", "square root", "horizontal movement", "vertical movement", "column vector"],
      "optionalKeywords": ["resultant vector", "transformation", "components"],
      "modelAnswer": "<span>To find the magnitude of a vector, use Pythagoras' theorem: square the x and y components, add them, then take the square root of that sum. A column vector describes a transformation by showing movement horizontally (x) and vertically (y). The top number is the horizontal movement along the x-axis, and the bottom number is the vertical movement along the y-axis.</span>",
      "scaffoldPrompts": ["What does each number in a column vector represent?", "How do you apply Pythagoras' theorem to find magnitude?", "How do you write the vector showing movement from one point to another?"]
    }
  }
};