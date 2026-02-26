window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.3 - Solving quadratic equations",
  "strapline": "Learn how to factorise and solve quadratic equations using various methods including factorisation, completing the square, and the quadratic formula.",
  "learningObjectives": [
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a = 1 (Maths 2.3)",
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a > 1 (Maths 2.3)",
    "Students should be able to solve quadratic equations by factorisation, completing the square, and using the quadratic formula (Maths 2.3)"
  ],
  "keyFormulas": [
    "Concept 1: Quadratic expression - An algebraic expression in the form ax² + bx + c, where a, b, and c are constants and a ≠ 0. Example: x² + 5x + 6 or 2x² - 7x + 3.",
    "Concept 2: Factorisation - Breaking a quadratic into two binomial factors: e.g. x² + 5x + 6 = (x + 2)(x + 3).",
    "Concept 3: Zero product property - If AB = 0, then A=0 or B=0. This helps solve equations by setting factors to zero."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='60' width='320' height='180' fill='#e8f0fe' stroke='#3a76d2' stroke-width='2'/><text x='200' y='100' font-family='Arial' font-size='18' fill='#1e3a8a' text-anchor='middle'>Quadratic Expression</text><text x='50' y='140' font-family='Arial' font-size='14' fill='#1e3a8a'>ax\u00B2 + bx + c</text><text x='50' y='170' font-family='Arial' font-size='14' fill='#3b82f6'>Example: x\u00B2 + 5x + 6</text><line x1='180' y1='135' x2='220' y2='190' stroke='#3b82f6' stroke-width='2'/><text x='230' y='190' font-family='Arial' font-size='14' fill='#1e3a8a'>(x + 2)(x + 3)</text></svg>",
  "step1": {
    "title": "Concept: Understanding Quadratic Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic expression</strong> is an algebraic expression of the form <em>ax\u00B2 + bx + c</em>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants and <em>a \u2260 0</em>. This expression represents a parabola when graphed.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a quadratic expression like a recipe with three ingredients, where <em>a</em> is the main ingredient that shapes the dish, and <em>b</em> and <em>c</em> add flavor.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying a Quadratic Expression",
      "problem": "Is <strong>3x\u00B2 + 7x - 2</strong> a quadratic expression?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of 'a' in 3x\u00B2 + 7x - 2?",
          "answer": "3",
          "feedback": "Correct! <em>a</em> is the coefficient of x\u00B2, which is 3."
        },
        {
          "id": "q2",
          "prompt": "Confirm if 'a' equals zero or not.",
          "answer": "not zero",
          "feedback": "Right! Since <em>a</em> is 3 (not zero), this expression is quadratic."
        }
      ]
    }
  },
  "step2": {
    "title": "Factorising Quadratics where a = 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When <em>a = 1</em>, to factorise <em>x\u00B2 + bx + c</em>, find two numbers that multiply to <em>c</em> and add to <em>b</em>. Then write as <em>(x + m)(x + n)</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Factorise x\u00B2 + 5x + 6",
      "problem": "Factorise <strong>x\u00B2 + 5x + 6</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What two numbers multiply to 6?",
          "answer": ["2","3"],
          "feedback": "Correct! 2 × 3 = 6."
        },
        {
          "id": "q2",
          "prompt": "Do these numbers add up to 5?",
          "answer": ["5","5"],
          "feedback": "Yes, 2 + 3 = 5."
        },
        {
          "id": "q3",
          "prompt": "Write the factorised form using these numbers.",
          "answer": "(x + 2)(x + 3)",
          "feedback": "Well done! The factorised form is (x + 2)(x + 3)."
        }
      ]
    }
  },
  "step3": {
    "title": "Factorising Quadratics where a > 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When <em>a > 1</em>, use the method of decomposition to factor expressions like <em>ax\u00B2 + bx + c</em> by splitting the middle term and factoring by grouping.</p>",
    "workedExample": {
      "title": "Worked Example: Factorise 2x\u00B2 + 7x + 3",
      "problem": "Factorise <strong>2x\u00B2 + 7x + 3</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find two numbers that multiply to (2 × 3) = 6 and add to 7.",
          "answer": ["6", "1"],
          "feedback": "Correct, 6 × 1 = 6 and 6 + 1 = 7."
        },
        {
          "id": "q2",
          "prompt": "Rewrite expression splitting the middle term using 6x and 1x.",
          "answer": "2x\u00B2 + 6x + 1x + 3",
          "feedback": "Well done!"
        },
        {
          "id": "q3",
          "prompt": "Factorise by grouping: take common factor from first two and last two terms.",
          "answer": "(2x(x + 3) + 1(x + 3))",
          "feedback": "Right!"
        },
        {
          "id": "q4",
          "prompt": "Write the final factorised form.",
          "answer": "(2x + 1)(x + 3)",
          "feedback": "Excellent! The factorised form is (2x + 1)(x + 3)."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 420 220' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='400' height='200' fill='#f9fafb' stroke='#4f46e5' stroke-width='2'/><text x='20' y='40' font-family='Arial' font-size='15'>2x\u00B2 + 7x + 3</text><text x='20' y='70' font-family='Arial' font-size='14'>Step 1: Multiply 'a' \u00D7 'c' = 6</text><text x='20' y='95' font-family='Arial' font-size='14'>Step 2: Find factors of 6 that add to 7: 6, 1</text><text x='20' y='120' font-family='Arial' font-size='14'>Step 3: Rewrite as 2x\u00B2 + 6x + 1x + 3</text><text x='20' y='145' font-family='Arial' font-size='14'>Step 4: Factor by grouping</text><text x='20' y='170' font-family='Arial' font-size='15' font-weight='bold'>(2x + 1)(x + 3)</text></svg>"
    }
  },
  "step4": {
    "title": "Solving Quadratic Equations by Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Once factorised, set each factor to zero using the <strong>zero product property</strong> to find the solutions of the quadratic equation.</p>",
    "workedExample": {
      "title": "Worked Example: Solve x\u00B2 + 5x + 6 = 0",
      "problem": "Solve <strong>x\u00B2 + 5x + 6 = 0</strong> by factorisation.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Factorise the quadratic expression.",
          "answer": "(x + 2)(x + 3)",
          "feedback": "Correct! The factorised form is (x + 2)(x + 3)."
        },
        {
          "id": "q2",
          "prompt": "Set each factor equal to zero. What are the equations?",
          "answer": ["x + 2 = 0", "x + 3 = 0"],
          "feedback": "Right! Each factor equals zero."
        },
        {
          "id": "q3",
          "prompt": "Solve each equation for x.",
          "answer": ["x = -2", "x = -3"],
          "feedback": "Excellent! The solutions are x = -2 and x = -3."
        }
      ]
    }
  },
  "step5": {
    "title": "Solving Quadratics by Completing the Square",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Completing the square rewrites a quadratic in the form <em>(x + p)\u00B2 = q</em>, making it easier to solve by taking square roots.</p>",
    "workedExample": {
      "title": "Worked Example: Solve x\u00B2 + 6x + 5 = 0 by completing the square",
      "problem": "Solve <strong>x\u00B2 + 6x + 5 = 0</strong> using completing the square.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Rewrite equation: x\u00B2 + 6x = ? (move 5 to the other side)",
          "answer": "-5",
          "feedback": "Correct, moving 5 to the right side: x\u00B2 + 6x = -5."
        },
        {
          "id": "q2",
          "prompt": "Take half of 6, square it, and add to both sides. What is this number?",
          "answer": "9",
          "feedback": "Right! Half of 6 is 3; 3 squared is 9."
        },
        {
          "id": "q3",
          "prompt": "Write the left side as a squared binomial and the right side as a number.",
          "answer": "(x + 3)² = 4",
          "feedback": "Perfect! Equation becomes (x + 3)\u00B2 = 4."
        },
        {
          "id": "q4",
          "prompt": "Take the square root of both sides and write the two possible solutions.",
          "answer": ["x + 3 = 2", "x + 3 = -2"],
          "feedback": "Correct!"
        },
        {
          "id": "q5",
          "prompt": "Solve each for x.",
          "answer": ["x = -1", "x = -5"],
          "feedback": "Well done! Solutions: x = -1 and x = -5."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 420 240' xmlns='http://www.w3.org/2000/svg'><rect x='15' y='20' width='390' height='200' fill='#e0f2fe' stroke='#0369a1' stroke-width='2'/><text x='30' y='50' font-family='Arial' font-size='16'>Starting with x\u00B2 + 6x + 5 = 0</text><text x='30' y='75' font-family='Arial' font-size='14'>Move 5: x\u00B2 + 6x = -5</text><text x='30' y='100' font-family='Arial' font-size='14'>Add (6/2)\u00B2 = 9: x\u00B2 + 6x + 9 = 4</text><text x='30' y='125' font-family='Arial' font-size='14'>Rewrite as (x + 3)\u00B2 = 4</text><text x='30' y='150' font-family='Arial' font-size='14'>Square root: x + 3 = \u00B12</text><text x='30' y='175' font-family='Arial' font-size='14'>Solutions: x = -1 or x = -5</text></svg>"
    }
  },
  "step6": {
    "title": "Solving Quadratics Using the Quadratic Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The quadratic formula <em>x = \u2212b \u00B1 \u221A(b\u00B2 \u2212 4ac) / 2a</em> solves any quadratic equation <em>ax\u00B2 + bx + c = 0</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Solve 2x\u00B2 + 3x - 2 = 0 using the quadratic formula",
      "problem": "Use the quadratic formula to find the roots of <strong>2x\u00B2 + 3x - 2 = 0</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify coefficients a, b, and c.",
          "answer": ["2", "3", "-2"],
          "feedback": "Correct: a = 2, b = 3, c = -2."
        },
        {
          "id": "q2",
          "prompt": "Calculate the discriminant: b\u00B2 - 4ac.",
          "answer": "3\u00B2 - 4(2)(-2) = 9 + 16 = 25",
          "feedback": "Right! The discriminant is 25."
        },
        {
          "id": "q3",
          "prompt": "Write the full quadratic formula substituting a, b, and discriminant values.",
          "answer": "x = [-3 \u00B1 \u221A25] / 4",
          "feedback": "Well done."
        },
        {
          "id": "q4",
          "prompt": "Calculate the two possible values for x.",
          "answer": ["(-3 + 5) / 4 = 0.5", "(-3 - 5) / 4 = -2"],
          "feedback": "Excellent! Solutions are x = 0.5 and x = -2."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Factorise the quadratic expression 3x\u00B2 + 11x + 6 and solve the equation 3x\u00B2 + 11x + 6 = 0 by factorisation.</span>",
      "hint": "Remember to find two numbers that multiply to a \u00D7 c and add to b, then factorise by grouping.",
      "mustHaveKeywords": ["factorise", "zero product property", "set each factor to zero", "solutions"],
      "optionalKeywords": ["binomial", "common factor", "roots"],
      "modelAnswer": "<span>First, multiply a and c: 3 \u00D7 6 = 18. Find two numbers that multiply to 18 and add to 11, which are 9 and 2. Rewrite as 3x\u00B2 + 9x + 2x + 6. Factor by grouping: 3x(x + 3) + 2(x + 3). Then factor out the common binomial: (3x + 2)(x + 3) = 0. Using zero product property, set each factor equal to zero: 3x + 2 = 0 or x + 3 = 0. Solve for x: x = -2/3 or x = -3 are the solutions.</span>",
      "scaffoldPrompts": ["What do you multiply a and c to get?", "Which two numbers multiply to this product and add to b?", "How do you split the middle term?", "What common factors can you factor from each group?", "Write the factorised expression.", "Apply zero product property to solve."]
    }
  }
};