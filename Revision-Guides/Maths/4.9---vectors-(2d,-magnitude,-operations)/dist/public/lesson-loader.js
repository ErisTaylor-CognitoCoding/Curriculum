window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.9 - Vectors (2D, magnitude, operations)",
  "strapline": "Understanding 2D vectors, magnitude calculation using Pythagoras, and vector operations",
  "learningObjectives": [
    "Students should understand vector notation and be able to represent 2D vectors in column form (Maths 4.9)",
    "Students should be able to calculate the magnitude of a 2D vector using Pythagoras' theorem (Maths 4.9)",
    "Students should be able to perform vector operations including addition, subtraction, and scalar multiplication (Maths 4.9)"
  ],
  "step1": {
    "title": "Concept: What is a Vector?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>vector</strong> is a quantity that has both <em>magnitude</em> (or size) and <em>direction</em>. It can be represented graphically by an arrow, where the length of the arrow shows the magnitude, and the arrow points in the direction of the vector.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine walking 3 steps east and 4 steps north. Your movement can be shown as an arrow pointing northeast (direction) with a specific length representing how far you have walked (magnitude).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw an arrow pointing right (east) 3 units long and then up (north) 4 units long.</span>",
        "<span>This arrow represents a vector with components 3 units in the horizontal direction and 4 units in the vertical direction.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Column Vector Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Vectors can be represented as <strong>column vectors</strong>, written with components stacked vertically in brackets. The top value is the horizontal component <em>x</em>, and the bottom value is the vertical component <em>y</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the vector as an ordered pair showing how far to move horizontally then vertically, but written vertically in column form like <em>\\( \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\)</em>.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A vector going 3 units right and 4 units up is written as <em>\\( \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\)</em>.</span>",
        "<span>This notation clearly separates the horizontal and vertical components.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Calculating Magnitude of a Vector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>magnitude</strong> (length) of a vector <em>\\( \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\)</em> is found using <em>Pythagoras' theorem</em>: <em>\\( \\sqrt{x^2 + y^2} \\)</em>. This calculates the length of the arrow from the origin.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the vector as the diagonal of a right triangle where the horizontal and vertical components are the other two sides. Using Pythagoras helps find the diagonal (magnitude).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For vector <em>\\( \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\)</em>, magnitude = <em>\\( \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 \\)</em>.</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Vector Addition",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Vector addition combines two vectors by adding their corresponding components: <em>\\( \\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} + \\begin{pmatrix} x_2 \\\\ y_2 \\end{pmatrix} = \\begin{pmatrix} x_1 + x_2 \\\\ y_1 + y_2 \\end{pmatrix} \\)</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of walking 3 steps east and 4 steps north, then another 2 steps east and 1 step north. The total movement is the sum of these steps in each direction.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Add <em>\\( \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} + \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 3 + 2 \\\\ 4 + 1 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix} \\)</em>.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Vector Subtraction and Scalar Multiplication",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Vector subtraction is done by subtracting corresponding components: <em>\\( \\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} - \\begin{pmatrix} x_2 \\\\ y_2 \\end{pmatrix} = \\begin{pmatrix} x_1 - x_2 \\\\ y_1 - y_2 \\end{pmatrix} \\)</em>. <br> Scalar multiplication multiplies each component by a real number: <em>\\( k \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} kx \\\\ ky \\end{pmatrix} \\)</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Subtracting vectors is like walking backward along a path. Scalar multiplication is like repeating the same movement multiple times or scaling it longer or shorter.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Subtracting <em>\\( \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} \\)</em> from <em>\\( \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\)</em> gives <em>\\( \\begin{pmatrix} 3 - 2 \\\\ 4 - 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} \\)</em>.</span>",
        "<span>Multiplying <em>\\( \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\)</em> by 2 gives <em>\\( \\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix} \\)</em>.</span>"
      ]
    }
  },
  "step6": {
    "title": "Practice Question",
    "practice": {
      "prompt": "<span>Given vectors <em>\\( \\mathbf{a} = \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix} \\)</em> and <em>\\( \\mathbf{b} = \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix} \\), find:</span><br><ol><li>The magnitude of <em>\\( \\mathbf{a} \\)</em>.</li><li>The vector sum <em>\\( \\mathbf{a} + \\mathbf{b} \\)</em>.</li><li>The vector result of <em>3\\mathbf{b} - \\mathbf{a}</em>.</li></ol>",
      "hint": "Use Pythagoras for magnitude. Add or subtract components for vector operations. Multiply each component by the scalar for scalar multiplication.",
      "mustHaveKeywords": ["magnitude", "Pythagoras' theorem", "addition", "subtraction", "scalar multiplication", "components"],
      "optionalKeywords": ["column vector", "horizontal component", "vertical component"],
      "modelAnswer": "<span>1. Magnitude of \\(\\mathbf{a}\\) = \\(\\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = 5\\).<br>2. \\(\\mathbf{a} + \\mathbf{b} = \\begin{pmatrix}4 + (-1) \\\\ 3 + 2\\end{pmatrix} = \\begin{pmatrix}3 \\\\ 5\\end{pmatrix}\\).<br>3. Calculate \\(3\\mathbf{b} = \\begin{pmatrix}3 \\times (-1) \\\\ 3 \\times 2\\end{pmatrix} = \\begin{pmatrix}-3 \\\\ 6\\end{pmatrix}\\). Then subtract \\(\\mathbf{a}\\):<br>\\(3\\mathbf{b} - \\mathbf{a} = \\begin{pmatrix}-3 - 4 \\\\ 6 - 3\\end{pmatrix} = \\begin{pmatrix}-7 \\\\ 3\\end{pmatrix}\\).</span>",
      "scaffoldPrompts": [
        "Step 1: Use \\( \\sqrt{x^2 + y^2} \\) to find magnitude of \\(\\mathbf{a}\\).",
        "Step 2: Add horizontal and vertical components of \\(\\mathbf{a}\\) and \\(\\mathbf{b}\\).",
        "Step 3: Multiply each component of \\(\\mathbf{b}\\) by 3, then subtract components of \\(\\mathbf{a}\\)."
      ]
    }
  }
};