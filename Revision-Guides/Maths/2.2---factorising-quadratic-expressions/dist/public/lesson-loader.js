window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.2 - Factorising quadratic expressions",
  "strapline": "Learn how to factorise quadratic expressions and solve quadratic equations by factorisation.",
  "learningObjectives": [
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a = 1 (Maths 2.2)",
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a > 1 (Maths 2.2)",
    "Students should be able to solve quadratic equations by factorisation by setting each factor equal to zero (Maths 2.2)"
  ],
  "keyFormulas": [
    "Quadratic expression general form: ax² + bx + c where a, b, c are constants and a ≠ 0",
    "Factorisation form: ax² + bx + c = (dx + e)(fx + g) where d × f = a and e × g = c",
    "Zero Product Property: If (x + p)(x + q) = 0 then x + p = 0 or x + q = 0"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>  <rect x='50' y='30' width='300' height='140' fill='#f9f9f9' stroke='#333' stroke-width='2' rx='8' ry='8'/>  <text x='200' y='70' text-anchor='middle' font-family='Arial' font-size='18' fill='#333'>Quadratic Expression</text>  <text x='200' y='110' text-anchor='middle' font-family='Arial' font-size='20' fill='#007ACC' font-weight='bold'>ax² + bx + c</text>  <line x1='100' y1='150' x2='150' y2='190' stroke='#555' stroke-width='2'/>  <line x1='300' y1='150' x2='250' y2='190' stroke='#555' stroke-width='2'/>  <text x='130' y='185' font-family='Arial' font-size='16' fill='#008000'>(dx + e)</text>  <text x='270' y='185' font-family='Arial' font-size='16' fill='#008000'>(fx + g)</text></svg>",
  "step1": {
    "title": "Concept: What is a Quadratic Expression?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic expression</strong> is an algebraic expression of the form <em>ax<sup>2</sup> + bx + c</em>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants and <em>a ≠ 0</em>. It involves the variable squared as its highest power.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a quadratic expression like a recipe that involves an ingredient squared, like flour squared, combined with other ingredients like sugar and butter.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Components",
      "problem": "Consider the quadratic expression <strong>x² + 5x + 6</strong>. Identify the values of a, b, and c.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of <em>a</em> (the coefficient of x²)?",
          "answer": "1",
          "feedback": "Correct. The coefficient of x² is 1."
        },
        {
          "id": "q2",
          "prompt": "What is the value of <em>b</em> (the coefficient of x)?",
          "answer": "5",
          "feedback": "Correct. The coefficient of x is 5."
        },
        {
          "id": "q3",
          "prompt": "What is the value of <em>c</em> (the constant term)?",
          "answer": "6",
          "feedback": "Correct. The constant term is 6."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: What is Factorisation?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Factorisation is the process of writing an expression as a product of its factors. For quadratics, this means expressing <em>ax<sup>2</sup> + bx + c</em> as the product of two binomial expressions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like breaking down a whole cake (quadratic expression) into two slices (binomial factors) that multiply back to form the whole cake.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Simple Factorisation where a = 1",
      "problem": "Factorise <strong>x² + 5x + 6</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find two numbers that multiply to 6 (the constant term) and add to 5 (the coefficient of x). Enter the first number:",
          "answer": "2",
          "feedback": "Correct. 2 and 3 multiply to 6."
        },
        {
          "id": "q2",
          "prompt": "Enter the second number:",
          "answer": "3",
          "feedback": "Correct. 2 + 3 equals 5."
        },
        {
          "id": "q3",
          "prompt": "Write the factorised form using these numbers inside binomials: (x + ?) (x + ?)",
          "answer": "(x + 2)(x + 3)",
          "feedback": "Correct! The factorised form is (x + 2)(x + 3)."
        }
      ]
    }
  },
  "step3": {
    "title": "Interactive Practice: Factorising Quadratics where a=1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's practice factorising quadratics where the leading coefficient <em>a</em> equals 1.</p>",
    "workedExample": {
      "title": "Example",
      "problem": "Factorise <strong>x² + 7x + 12</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find two numbers that multiply to 12 and add to 7. Input the first number:",
          "answer": "3",
          "feedback": "Good! 3 and 4 multiply to 12."
        },
        {
          "id": "q2",
          "prompt": "Input the second number:",
          "answer": "4",
          "feedback": "Correct! 3 + 4 = 7."
        },
        {
          "id": "q3",
          "prompt": "Write the factorised form in the format: (x + ?)(x + ?)",
          "answer": "(x + 3)(x + 4)",
          "feedback": "Well done! The factorised form is (x + 3)(x + 4)."
        }
      ]
    }
  },
  "step4": {
    "title": "Factorising Quadratics where a > 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When the coefficient <em>a</em> is greater than 1, we use the 'split the middle term' method or trial and error to factorise.</p>",
    "workedExample": {
      "title": "Worked Example: Factorise 2x² + 7x + 3",
      "problem": "Factorise <strong>2x² + 7x + 3</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply a × c: 2 × 3 = ?",
          "answer": "6",
          "feedback": "Correct. 2 times 3 equals 6."
        },
        {
          "id": "q2",
          "prompt": "Find two numbers that multiply to 6 and add to 7:",
          "answer": "6 and 1",
          "feedback": "Good! 6 × 1 = 6 and 6 + 1 = 7."
        },
        {
          "id": "q3",
          "prompt": "Rewrite 7x as 6x + 1x: 2x² + 6x + 1x + 3. Now group: (2x² + 6x) + (1x + 3). What is the greatest common factor (GCF) of the first group?",
          "answer": "2x",
          "feedback": "Correct. 2x is the GCF of 2x² and 6x."
        },
        {
          "id": "q4",
          "prompt": "What is the GCF of the second group (1x + 3)?",
          "answer": "1",
          "feedback": "Correct. 1 is the GCF here."
        },
        {
          "id": "q5",
          "prompt": "Factor each group: 2x(x + 3) + 1(x + 3). What is the common binomial factor?",
          "answer": "x + 3",
          "feedback": "Correct! (x + 3) is common."
        },
        {
          "id": "q6",
          "prompt": "Write the final factorised form by taking out (x + 3): (2x + 1)(x + 3). Enter the complete factorised expression:",
          "answer": "(2x + 1)(x + 3)",
          "feedback": "Excellent! The factorised form is (2x + 1)(x + 3)."
        }
      ]
    }
  },
  "step5": {
    "title": "Solving Quadratic Equations by Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Once factorised, solve quadratic equations by setting each factor equal to zero and solving for the variable.</p>",
    "workedExample": {
      "title": "Solve 2x² + 7x + 3 = 0 using factorisation",
      "problem": "Solve the quadratic equation <strong>2x² + 7x + 3 = 0</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Factorise the quadratic: (2x + 1)(x + 3) = 0. Is this correct? (yes/no)",
          "answer": "yes",
          "feedback": "Correct. The factorisation is (2x + 1)(x + 3) = 0."
        },
        {
          "id": "q2",
          "prompt": "Set the first factor equal to zero: 2x + 1 = 0. Solve for x:",
          "answer": "-1/2",
          "feedback": "Correct. x = -1/2."
        },
        {
          "id": "q3",
          "prompt": "Set the second factor equal to zero: x + 3 = 0. Solve for x:",
          "answer": "-3",
          "feedback": "Correct! x = -3."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 300 100' xmlns='http://www.w3.org/2000/svg'><text x='10' y='30' font-family='Arial' font-size='18' fill='#000'>(2x + 1)(x + 3) = 0</text><line x1='10' y1='40' x2='150' y2='40' stroke='#333' stroke-width='2'/><text x='10' y='70' font-family='Arial' font-size='16' fill='#007ACC'>2x + 1 = 0  →  x = -1/2</text><text x='10' y='90' font-family='Arial' font-size='16' fill='#007ACC'>x + 3 = 0  →  x = -3</text></svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Factorise the quadratic expression 3x² + 11x + 6 and solve the equation 3x² + 11x + 6 = 0 by factorisation.</span>",
      "hint": "Remember to multiply a and c, find two numbers that multiply to ac and add to b, then split the middle term, group, factorise each group, and solve by setting factors to zero.",
      "mustHaveKeywords": ["factorisation", "split middle term", "set each factor equal to zero", "solve for x"],
      "optionalKeywords": ["grouping", "binomial"],
      "modelAnswer": "<span>First, multiply a × c: 3 × 6 = 18. Find two numbers that multiply to 18 and add to 11: 9 and 2. Rewrite 11x as 9x + 2x: 3x² + 9x + 2x + 6. Group: (3x² + 9x) + (2x + 6). Factor each group: 3x(x + 3) + 2(x + 3). Factor out common binomial: (3x + 2)(x + 3) = 0. Set each factor to zero: 3x + 2 = 0 → x = -2/3 and x + 3 = 0 → x = -3.</span>",
      "scaffoldPrompts": ["Multiply a by c", "Find two numbers that multiply to ac and add to b", "Rewrite middle term by splitting", "Group the terms in pairs", "Factor out the GCF from each group", "Factorise the common binomial", "Set each factor equal to zero and solve for x"]
    }
  }
};