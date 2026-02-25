window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.3 - Solving quadratic equations",
  "strapline": "Learn how to factorise and solve quadratic equations using factorisation, completing the square, and the quadratic formula.",
  "learningObjectives": [
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a = 1 (Maths 2.3)",
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a > 1 (Maths 2.3)",
    "Students should be able to solve quadratic equations by factorisation, completing the square, and using the quadratic formula (Maths 2.3)"
  ],
  "keyFormulas": [
    "Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a",
    "Completing the square: ax² + bx + c = a(x + b/2a)² - (b² - 4ac) / 4a",
    "Zero product property: If AB = 0 then A = 0 or B = 0"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 160' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='30' width='80' height='80' fill='#e0f7fa' stroke='#006064' stroke-width='2'/><text x='50' y='25' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#004d40'>x²</text><rect x='110' y='30' width='160' height='80' fill='#e8f5e9' stroke='#2e7d32' stroke-width='2'/><text x='190' y='75' font-family='sans-serif' font-size='20' text-anchor='middle' fill='#1b5e20'>ax² + bx + c</text><path d='M 280 70 L 310 70' stroke='#000' stroke-width='3' marker-end='url(#arrow)'/><text x='320' y='75' font-family='sans-serif' font-size='14' fill='#000'>Factorisation &amp; Solutions</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='7' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L0,6 L9,3 z' fill='#000'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding Quadratic Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic expression</strong> is any expression in the form <em>ax<sup>2</sup> + bx + c</em> where <em>a</em>, <em>b</em>, and <em>c</em> are constants, and <em>a ≠ 0</em>. For example, <em>x<sup>2</sup> + 5x + 6</em> or <em>2x<sup>2</sup> - 7x + 3</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the quadratic expression as a recipe made of three ingredients: <em>a</em> controls the amount of flour (x<sup>2</sup>), <em>b</em> the sugar (x), and <em>c</em> the eggs (constant). Changing the amount of each ingredient changes the final cake shape (graph).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying parts of a quadratic expression",
      "problem": "Identify <em>a</em>, <em>b</em>, and <em>c</em> in the equation <strong>x<sup>2</sup> + 7x + 10</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of <em>a</em> in <em>x<sup>2</sup> + 7x + 10</em>?",
          "answer": "1",
          "feedback": "Correct! Since x² has no coefficient, <em>a</em> = 1."
        },
        {
          "id": "q2",
          "prompt": "What is the value of <em>b</em>?",
          "answer": "7",
          "feedback": "Correct! The coefficient of x is 7."
        },
        {
          "id": "q3",
          "prompt": "What is the value of <em>c</em>?",
          "answer": "10",
          "feedback": "Correct! The constant term is 10."
        }
      ]
    }
  },
  "step2": {
    "title": "Factorising Quadratics where a = 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When <em>a = 1</em>, we factorise by finding two numbers that multiply to <em>c</em> and add to <em>b</em>. Then write the expression as <em>(x + m)(x + n)</em>.</p>",
    "workedExample": {
      "title": "Interactive Example: Factorise x² + 5x + 6",
      "problem": "Find two numbers that multiply to 6 and add to 5.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the first number:",
          "answer": "2",
          "feedback": "Correct! 2 is one of the numbers."
        },
        {
          "id": "q2",
          "prompt": "Enter the second number:",
          "answer": "3",
          "feedback": "Correct! 3 is the other number."
        },
        {
          "id": "q3",
          "prompt": "Write the factorised form:",
          "answer": "(x + 2)(x + 3)",
          "feedback": "Perfect! The factorised form is (x + 2)(x + 3)."
        }
      ]
    }
  },
  "step3": {
    "title": "Factorising Quadratics where a > 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When <em>a > 1</em>, use the <strong>splitting the middle term</strong> method: multiply <em>a</em> and <em>c</em>, find two numbers that multiply to <em>ac</em> and add to <em>b</em>, then split the middle term and factor by grouping.</p>",
    "workedExample": {
      "title": "Interactive Example: Factorise 2x² + 7x + 3",
      "problem": "Multiply a and c: 2 × 3 = ?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the product of a and c:",
          "answer": "6",
          "feedback": "Correct! 2 × 3 = 6."
        },
        {
          "id": "q2",
          "prompt": "Find two numbers that multiply to 6 and add to 7:",
          "answer": "6 and 1",
          "feedback": "Correct! 6 and 1 work."
        },
        {
          "id": "q3",
          "prompt": "Split the middle term using those numbers: write as 2x² + 6x + x + 3",
          "answer": "2x² + 6x + x + 3",
          "feedback": "Good! Now group and factorise."
        },
        {
          "id": "q4",
          "prompt": "Write the factorised form:",
          "answer": "(2x + 1)(x + 3)",
          "feedback": "Correct! The factorised form is (2x + 1)(x + 3)."
        }
      ]
    }
  },
  "step4": {
    "title": "Using the Zero Product Property to Solve Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If the product of two factors equals zero, at least one factor is zero. This helps solve factorised quadratic equations by setting each factor equal to zero and solving for x.</p>",
    "workedExample": {
      "title": "Solve (x + 2)(x - 3) = 0",
      "questions": [
        {
          "id": "q1",
          "prompt": "Set the first factor equal to zero: x + 2 = ?",
          "answer": "0",
          "feedback": "Correct, set x + 2 = 0."
        },
        {
          "id": "q2",
          "prompt": "Solve for x:",
          "answer": "-2",
          "feedback": "Correct! x = -2."
        },
        {
          "id": "q3",
          "prompt": "Set the second factor equal to zero: x - 3 = ?",
          "answer": "0",
          "feedback": "Correct, set x - 3 = 0."
        },
        {
          "id": "q4",
          "prompt": "Solve for x:",
          "answer": "3",
          "feedback": "Correct! x = 3."
        }
      ]
    }
  },
  "step5": {
    "title": "Completing the Square Method",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rewrite the quadratic in the form <em>a(x + d)² + e = 0</em> by completing the square, then solve for x by isolating the square term.</p>",
    "workedExample": {
      "title": "Interactive Example: Solve x² + 6x + 5 = 0 by completing the square",
      "problem": "",
      "questions": [
        {
          "id": "q1",
          "prompt": "Take half of the coefficient of x and square it: (6/2)² = ?",
          "answer": "9",
          "feedback": "Correct! Half of 6 is 3, and 3² = 9."
        },
        {
          "id": "q2",
          "prompt": "Rewrite the equation as (x + 3)² = ? (adjust the constant accordingly)",
          "answer": "4",
          "feedback": "Correct! x² + 6x + 9 = (x + 3)², so 5 + 4 = 9, therefore (x + 3)² = 4."
        },
        {
          "id": "q3",
          "prompt": "Take the square root of both sides: x + 3 = ±?",
          "answer": "2",
          "feedback": "Correct! sqrt(4) = 2."
        },
        {
          "id": "q4",
          "prompt": "Solve for x:",
          "answer": "-3 ± 2",
          "feedback": "Exactly! x = -3 + 2 or x = -3 - 2."
        }
      ]
    }
  },
  "step6": {
    "title": "Solving Quadratics Using the Quadratic Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the quadratic formula <em>x = (-b ± √(b² - 4ac)) / 2a</em> to find the solutions to any quadratic equation.</p>",
    "workedExample": {
      "title": "Interactive Example: Solve 2x² + 3x - 2 = 0 using the quadratic formula",
      "problem": "",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify a, b, and c:",
          "answer": "2, 3, -2",
          "feedback": "Correct! a=2, b=3, c=-2."
        },
        {
          "id": "q2",
          "prompt": "Calculate the discriminant: b² - 4ac = ?",
          "answer": "17",
          "feedback": "Correct! 3² - 4×2×(-2) = 9 + 16 =17."
        },
        {
          "id": "q3",
          "prompt": "Find the square root of the discriminant: √17 ≈ ? (to 2 decimal places)",
          "answer": "4.12",
          "feedback": "Correct! √17 ≈ 4.12."
        },
        {
          "id": "q4",
          "prompt": "Calculate the two solutions using x = (-b ± √(b² - 4ac)) / 2a:",
          "answer": "(-3 + 4.12)/4 and (-3 - 4.12)/4",
          "feedback": "Correct! You are setting up the formula properly."
        },
        {
          "id": "q5",
          "prompt": "Write the approximate decimal solutions:",
          "answer": "0.28 and -1.78",
          "feedback": "Great! x ≈ 0.28 or x ≈ -1.78."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the quadratic equation 3x² + 5x - 2 = 0 using factorisation. Show all your working.</span>",
      "hint": "Remember to find two numbers that multiply to a × c and add to b, then use the zero product property.",
      "mustHaveKeywords": ["factorisation", "zero product property", "correct factors"],
      "optionalKeywords": ["grouping", "splitting middle term", "binomial factors"],
      "modelAnswer": "<span>First, multiply a and c: 3 × -2 = -6.<br>Find two numbers that multiply to -6 and add to 5: 6 and -1.<br>Rewrite equation: 3x² + 6x - x - 2 = 0.<br>Group: (3x² + 6x) + (-x - 2) = 0.<br>Factor each group: 3x(x + 2) - 1(x + 2) = 0.<br>Factor out common binomial: (3x - 1)(x + 2) = 0.<br>Set each factor to zero: 3x - 1 = 0 or x + 2 = 0.<br>Solve: x = 1/3 or x = -2.</span>",
      "scaffoldPrompts": [
        "Multiply a and c.",
        "Find two numbers that multiply to ac and add to b.",
        "Rewrite and split the middle term.",
        "Group terms and factorise.",
        "Set each factor equal to zero.",
        "Solve for x."
      ]
    }
  }
};