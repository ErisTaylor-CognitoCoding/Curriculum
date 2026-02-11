window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.9 - Vectors (2D, magnitude, operations)",
  "strapline": "Understanding 2D vectors, magnitude calculation, and vector operations",
  "learningObjectives": [
    "Students should understand vector notation and be able to represent 2D vectors in column form (Maths 4.9)",
    "Students should be able to calculate the magnitude of a 2D vector using Pythagoras' theorem (Maths 4.9)",
    "Students should be able to perform vector operations including addition, subtraction, and scalar multiplication (Maths 4.9)"
  ],
  "step1": {
    "title": "Concept: What is a Vector?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A vector is a quantity that has both <strong>magnitude</strong> (size) and <strong>direction</strong>. It can be represented by an arrow showing where it points and how long it is, or by numbers showing its components.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a journey where you walk 3 steps east and 4 steps north. The total journey can be described as a vector with direction and length.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>We start at the origin (0,0).</span>",
        "<span>The vector can be represented as an arrow pointing 3 units right (east) and 4 units up (north).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Column Vector Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Vectors in 2D are often written in <em>column notation</em> showing the horizontal component (x) above and the vertical component (y) below, inside brackets.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Writing a vector as a column is like recording how far east you have gone on top and how far north below.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A vector going 3 units east and 4 units north is written as \\( \\begin{pmatrix}3 \\\\ 4\\end{pmatrix} \\).</span>",
        "<span>This means 3 in the x-direction and 4 in the y-direction.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Calculating Magnitude of a Vector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The magnitude (or length) of a vector is found using Pythagoras' theorem: \\( \\text{magnitude} = \\sqrt{x^2 + y^2} \\), where x and y are the components.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you walk 3 steps east and 4 steps north, the total straight-line distance (magnitude) of your journey is the hypotenuse of a right triangle with sides 3 and 4.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate the magnitude of vector \\( \\begin{pmatrix}3 \\\\ 4\\end{pmatrix} \\):</span>",
        "<span>Magnitude = \\( \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\).</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Vector Addition",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Adding two vectors means adding their corresponding components to create a new vector.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given \\( \\begin{pmatrix}2 \\\\ 3\\end{pmatrix} + \\begin{pmatrix}1 \\\\ 4\\end{pmatrix} = \\begin{pmatrix}2+1 \\\\ 3+4\\end{pmatrix} = \\begin{pmatrix}3 \\\\ 7\\end{pmatrix} \\).</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Vector Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Subtracting one vector from another means subtracting their components to find the vector pointing from one to the other.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate \\( \\begin{pmatrix}5 \\\\ 6\\end{pmatrix} - \\begin{pmatrix}2 \\\\ 3\\end{pmatrix} = \\begin{pmatrix}5-2 \\\\ 6-3\\end{pmatrix} = \\begin{pmatrix}3 \\\\ 3\\end{pmatrix} \\).</span>"
      ]
    }
  },
  "step6": {
    "title": "Concept: Scalar Multiplication",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Multiplying a vector by a scalar (a number) scales the vector's magnitude without changing its direction (except if negative).</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given scalar 3 and vector \\( \\begin{pmatrix}2 \\\\ 4\\end{pmatrix} \\), multiply each component:</span>",
        "<span>\\( 3 \\times \\begin{pmatrix}2 \\\\ 4\\end{pmatrix} = \\begin{pmatrix}6 \\\\ 12\\end{pmatrix} \\)</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the magnitude of the vector \\( \\begin{pmatrix}6 \\\\ 8\\end{pmatrix} \\)?</span>",
        "options": [
          {"id": "a", "label": "<span>10</span>", "isCorrect": true, "explanation": "Correct, \\( \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\)."},
          {"id": "b", "label": "<span>14</span>", "isCorrect": false, "explanation": "Incorrect, this is the sum of the components, not the magnitude."},
          {"id": "c", "label": "<span>2</span>", "isCorrect": false, "explanation": "Incorrect, this value is too small for the vector given."}
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A vector is a quantity that has both <span class=\"font-semibold\">_____</span> and <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "magnitude", "label": "Magnitude", "isCorrect": true, "feedback": "Correct! Vectors have magnitude."},
              {"value": "color", "label": "Color", "isCorrect": false, "feedback": "Incorrect, vectors do not have color."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "direction", "label": "Direction", "isCorrect": true, "feedback": "Correct! Vectors have direction."},
              {"value": "speed", "label": "Speed", "isCorrect": false, "feedback": "Incorrect, speed is different from direction."}
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given two vectors \\( \\mathbf{a} = \\begin{pmatrix}3 \\\\ 4\\end{pmatrix} \\) and \\( \\mathbf{b} = \\begin{pmatrix}1 \\\\ 2\\end{pmatrix} \\), calculate the vector \\( 2\\mathbf{a} - \\mathbf{b} \\) and find its magnitude.</span>",
      "hint": "<span>First perform scalar multiplication, then vector subtraction, finally use Pythagoras' theorem to find magnitude.</span>",
      "mustHaveKeywords": ["scalar multiplication", "vector subtraction", "Pythagoras' theorem", "magnitude"],
      "optionalKeywords": ["column notation", "components"],
      "modelAnswer": "<span>First, calculate \\( 2\\mathbf{a} = \\begin{pmatrix}6 \\\\ 8\\end{pmatrix} \\). Then subtract \\( \\mathbf{b} \\): \\( \\begin{pmatrix}6 \\\\ 8\\end{pmatrix} - \\begin{pmatrix}1 \\\\ 2\\end{pmatrix} = \\begin{pmatrix}5 \\\\ 6\\end{pmatrix} \\). Finally, find the magnitude using Pythagoras' theorem: \\( \\sqrt{5^2 + 6^2} = \\sqrt{25 + 36} = \\sqrt{61} \\approx 7.81 \\).</span>",
      "scaffoldPrompts": [
        "<span>Calculate \\( 2\\mathbf{a} \\) by multiplying each component by 2.</span>",
        "<span>Subtract vector \\( \\mathbf{b} \\) from the result.</span>",
        "<span>Use \\( \\sqrt{x^2 + y^2} \\) to find the magnitude.</span>"
      ]
    }
  }
};