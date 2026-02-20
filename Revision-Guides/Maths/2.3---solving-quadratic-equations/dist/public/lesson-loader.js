window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.3 - Solving quadratic equations",
  "strapline": "Learn to factorise quadratic expressions and solve quadratic equations by various methods including factorisation, completing the square, and the quadratic formula.",
  "learningObjectives": [
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a = 1 (Maths 2.3)",
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a > 1 (Maths 2.3)",
    "Students should be able to solve quadratic equations by factorisation, completing the square, and using the quadratic formula (Maths 2.3)"
  ],
  "keyFormulas": [
    "Formula 1: ax² + bx + c = (x + m)(x + n) when a = 1 and mn = c, m + n = b (Factorisation)",
    "Formula 2: x = [-b ± √(b² - 4ac)] / 2a (Quadratic formula)",
    "Formula 3: Completing the square: ax² + bx + c = a(x + p)² + q"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#f9f9f9' stroke='#444' stroke-width='2'/><text x='200' y='50' font-family='Arial' font-size='18' text-anchor='middle' fill='#222'>Factorisation of x² + 5x + 6</text><path d='M120,120 Q150,160 180,120' stroke='#555' stroke-width='2' fill='none'/><circle cx='130' cy='140' r='10' fill='#6fa8dc'/><circle cx='170' cy='140' r='10' fill='#6fa8dc'/><text x='125' y='145' font-family='Arial' font-size='14' fill='#fff' text-anchor='middle'>x + 2</text><text x='170' y='145' font-family='Arial' font-size='14' fill='#fff' text-anchor='middle'>x + 3</text><text x='200' y='240' font-family='Arial' font-size='20' text-anchor='middle' fill='#333'>&#40;x + 2&#41;&#40;x + 3&#41; = x² + 5x + 6</text></svg>",
  "step1": {
    "title": "Concept: What is a Quadratic Expression?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A quadratic expression is an algebraic expression of the form <em>ax<sup>2</sup> + bx + c</em>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants and <em>a</em> ≠ 0. Examples include <strong>x<sup>2</sup> + 5x + 6</strong> and <strong>2x<sup>2</sup> - 7x + 3</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a quadratic expression like a recipe: the number of ingredients (<em>a</em>, <em>b</em>, and <em>c</em>) determines how the dish (the expression) will taste or behave.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify the quadratic expression components",
      "problem": "Given the expression <strong>x<sup>2</sup> + 5x + 6</strong>, identify the values of <em>a</em>, <em>b</em>, and <em>c</em>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the coefficient <em>a</em> of x<sup>2</sup>?",
          "answer": "1",
          "feedback": "Correct. The coefficient of x² is 1."
        },
        {
          "id": "q2",
          "prompt": "What is the coefficient <em>b</em> of x?",
          "answer": "5",
          "feedback": "Correct. The coefficient of x is 5."
        },
        {
          "id": "q3",
          "prompt": "What is the constant term <em>c</em>?",
          "answer": "6",
          "feedback": "Correct. The constant term is 6."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Factorise Quadratics where a = 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When <em>a = 1</em>, you can factorise a quadratic expression <em>x<sup>2</sup> + bx + c</em> by finding two numbers that multiply to <em>c</em> and add to <em>b</em>. Then, write the factors as (<em>x + m</em>)(<em>x + n</em>).</p>",
    "workedExample": {
      "title": "Interactive Worked Example: Factorise x<sup>2</sup> + 5x + 6",
      "problem": "Factorise: <strong>x<sup>2</sup> + 5x + 6</strong>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter two numbers that multiply to 6:",
          "answer": ["2", "3"],
          "feedback": "Correct, 2 and 3 multiply to 6."
        },
        {
          "id": "q2",
          "prompt": "Do these numbers add to 5? Enter their sum:",
          "answer": "5",
          "feedback": "Correct, 2 + 3 = 5."
        },
        {
          "id": "q3",
          "prompt": "Write the factorised form as (x + ___)(x + ___):",
          "answer": ["2", "3"],
          "feedback": "Correct. The factorisation is (x + 2)(x + 3)."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Factorise Quadratics where a > 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When <em>a > 1</em>, factorising involves splitting the middle term or using the 'factor by grouping' method. Find two numbers that multiply to <em>a × c</em> and add to <em>b</em>, then rewrite the middle term using these numbers to factor by grouping.</p>",
    "workedExample": {
      "title": "Interactive Worked Example: Factorise 2x<sup>2</sup> + 7x + 3",
      "problem": "Factorise: <strong>2x<sup>2</sup> + 7x + 3</strong>",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the product of a and c (2 × 3)?",
          "answer": "6",
          "feedback": "Correct. 2 × 3 = 6."
        },
        {
          "id": "q2",
          "prompt": "Enter two numbers that multiply to 6 and add to 7:",
          "answer": ["6", "1"],
          "feedback": "Correct. 6 × 1 = 6 and 6 + 1 = 7."
        },
        {
          "id": "q3",
          "prompt": "Rewrite the expression by splitting the middle term: 2x² + _x + _x + 3",
          "answer": ["6x", "1x"],
          "feedback": "Correct. 2x² + 6x + 1x + 3."
        },
        {
          "id": "q4",
          "prompt": "Factor by grouping: Factor out from the first two terms:",
          "answer": "2x",
          "feedback": "Correct. 2x(x + 3)."
        },
        {
          "id": "q5",
          "prompt": "Factor out from the last two terms:",
          "answer": "1",
          "feedback": "Correct. 1(x + 3)."
        },
        {
          "id": "q6",
          "prompt": "Write the factorised expression:",
          "answer": ["(2x + 1)(x + 3)"],
          "feedback": "Correct. 2x² + 7x + 3 = (2x + 1)(x + 3)."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Zero Product Property",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The zero product property states that if the product of two factors equals zero, then at least one factor must be zero. This property is key for solving quadratic equations after factorising.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two switches connected in series: if the light is off (zero), then at least one switch must be off.</p>"
    },
    "workedExample": {
      "title": "Interactive Worked Example: Solve by factorisation",
      "problem": "Solve the quadratic equation: <strong>(x + 2)(x + 3) = 0</strong>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Set the first factor equal to zero and solve for x:",
          "answer": "-2",
          "feedback": "Correct. x + 2 = 0 → x = -2."
        },
        {
          "id": "q2",
          "prompt": "Set the second factor equal to zero and solve for x:",
          "answer": "-3",
          "feedback": "Correct. x + 3 = 0 → x = -3."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Solving Quadratics by Completing the Square",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Completing the square involves rewriting a quadratic into the form <em>a(x + p)<sup>2</sup> + q</em> and then solving for x by isolating the squared term.</p>",
    "workedExample": {
      "title": "Interactive Worked Example: Solve by completing the square",
      "problem": "Solve <strong>x<sup>2</sup> + 6x + 5 = 0</strong> by completing the square.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Rewrite the constant on the right: x² + 6x = ___",
          "answer": "-5",
          "feedback": "Correct. Move 5 to the right side: x² + 6x = -5."
        },
        {
          "id": "q2",
          "prompt": "Find half of 6 and square it: (6 ÷ 2)² = ___",
          "answer": "9",
          "feedback": "Correct. Half of 6 is 3, and 3² = 9."
        },
        {
          "id": "q3",
          "prompt": "Add 9 to both sides: x² + 6x + 9 = -5 + ___",
          "answer": "9",
          "feedback": "Correct. Adding 9 to both sides keeps the equation balanced."
        },
        {
          "id": "q4",
          "prompt": "Write the left side as a square: (x + ___)² = ___",
          "answer": ["3", "4"],
          "feedback": "Correct. (x + 3)² = 4."
        },
        {
          "id": "q5",
          "prompt": "Solve for x by taking the square root: x + 3 = ±√4 → x + 3 = ±___",
          "answer": "2",
          "feedback": "Correct. Square root of 4 is ±2."
        },
        {
          "id": "q6",
          "prompt": "Find both solutions for x:",
          "answer": ["-1", "-5"],
          "feedback": "Correct. x = -3 + 2 = -1 and x = -3 - 2 = -5."
        }
      ]
    }
  },
  "step6": {
    "title": "Concept: Solving Quadratics using the Quadratic Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The quadratic formula <em>x = [-b ± √(b² - 4ac)] / 2a</em> can solve any quadratic equation <em>ax² + bx + c = 0</em>. Use this when factorisation or completing the square is difficult.</p>",
    "workedExample": {
      "title": "Interactive Worked Example: Solve using the quadratic formula",
      "problem": "Solve <strong>2x<sup>2</sup> + 3x - 2 = 0</strong> using the quadratic formula.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify a, b, and c:",
          "answer": ["2", "3", "-2"],
          "feedback": "Correct. a = 2, b = 3, c = -2."
        },
        {
          "id": "q2",
          "prompt": "Calculate the discriminant: b² - 4ac = ___",
          "answer": "25",
          "feedback": "Correct. 3² - 4 × 2 × -2 = 9 + 16 = 25."
        },
        {
          "id": "q3",
          "prompt": "Find the square root of the discriminant:",
          "answer": "5",
          "feedback": "Correct. √25 = 5."
        },
        {
          "id": "q4",
          "prompt": "Calculate the two solutions using: (-b ± √discriminant) / 2a",
          "answer": ["0.5", "-2"],
          "feedback": "Correct. (−3 + 5)/4 = 0.5 and (−3 - 5)/4 = -2."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the equation <strong>3x<sup>2</sup> - 5x - 2 = 0</strong> by factorisation.</span>",
      "hint": "Remember to multiply a and c to find factors for splitting the middle term.",
      "mustHaveKeywords": ["factorisation", "zero product property", "solve for x"],
      "optionalKeywords": ["grouping", "binomial factors"],
      "modelAnswer": "<span>First, multiply a and c: 3 × -2 = -6. Find two numbers that multiply to -6 and add to -5 (they are -6 and 1). Rewrite the middle term: 3x<sup>2</sup> - 6x + 1x - 2 = 0. Factor by grouping: 3x(x - 2) + 1(x - 2) = 0. Factor out (x - 2): (3x + 1)(x - 2) = 0. Set each factor to zero: 3x + 1 = 0 → x = -1/3, and x - 2 = 0 → x = 2.</span>",
      "scaffoldPrompts": [
        "Calculate a × c",
        "Find two numbers that multiply to a × c and add to b",
        "Split the middle term",
        "Factor by grouping",
        "Apply the zero product property",
        "Solve each equation for x"
      ]
    }
  }
};