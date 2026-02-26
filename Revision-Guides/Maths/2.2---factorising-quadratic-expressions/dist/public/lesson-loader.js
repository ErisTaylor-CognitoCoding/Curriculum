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
    "Concept 1: Quadratic expression - An algebraic expression of the form ax² + bx + c where a, b, and c are constants and a ≠ 0. The highest power of the variable is 2.",
    "Concept 2: Factorisation - The process of writing an expression as a product of its factors. For quadratics, this means writing ax² + bx + c as the product of two binomial expressions (linear factors).",
    "Concept 3: Binomial factors - Linear expressions with two terms, such as (x + 3) or (2x - 5), which when multiplied together produce the original quadratic expression."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='380' height='280' fill='#eef5fb' stroke='#333' stroke-width='2'/><text x='200' y='40' font-family='Arial' font-weight='bold' font-size='18' text-anchor='middle'>Factorising a quadratic</text><text x='50' y='80' font-family='Arial' font-size='14' fill='#222'>Quadratic expression:</text><text x='50' y='110' font-family='Arial' font-size='24' fill='#054a91'>x² + 5x + 6</text><text x='50' y='150' font-family='Arial' font-size='14' fill='#222'>Factorised form:</text><text x='50' y='180' font-family='Arial' font-size='24' fill='#d23f31'>(x + 2)(x + 3)</text><line x1='50' y1='190' x2='150' y2='190' stroke='#d23f31' stroke-width='2' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto'><path d='M0 0 L10 5 L0 10 Z' fill='#d23f31'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding Quadratic Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic expression</strong> is an expression involving a variable raised to the power of 2, and it has the general form ax² + bx + c where a, b, and c are constants and a ≠ 0.</p><p class=\"text-sm leading-6 text-muted-foreground\">For example, x² + 5x + 6 is a quadratic expression where a = 1, b = 5, and c = 6.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a quadratic expression like a perfect recipe that combines different ingredients (terms with x², x, and a constant). Each term plays a unique role in the flavour (shape) of the expression.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify coefficients in a quadratic expression",
      "problem": "Identify the values of a, b, and c in the expression <strong>x² + 7x + 10</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of a (coefficient of x²)?",
          "answer": "1",
          "feedback": "Correct! a = 1 because the coefficient of x² is 1."
        },
        {
          "id": "q2",
          "prompt": "What is the value of b (coefficient of x)?",
          "answer": "7",
          "feedback": "Correct! b = 7."
        },
        {
          "id": "q3",
          "prompt": "What is the value of c (constant term)?",
          "answer": "10",
          "feedback": "Well done! c = 10."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Factorising Quadratics where a = 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a = 1, you factorise the quadratic expression by finding two numbers that multiply to c and add to b.</p><p>Example: Factorise <strong>x² + 5x + 6</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Factorise x² + 5x + 6",
      "problem": "Find two numbers that multiply to 6 and add to 5.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter one factor of 6:",
          "answer": "2",
          "feedback": "Good. 2 is a factor of 6."
        },
        {
          "id": "q2",
          "prompt": "Enter the other factor of 6:",
          "answer": "3",
          "feedback": "Correct, 3 × 2 = 6."
        },
        {
          "id": "q3",
          "prompt": "Do these numbers add to 5? (Enter yes or no)",
          "answer": "yes",
          "feedback": "Correct, 2 + 3 = 5."
        },
        {
          "id": "q4",
          "prompt": "Write the factorised form using these numbers in brackets: (x + ?) (x + ?)",
          "answer": "x + 2, x + 3",
          "feedback": "Correct! The factorised form is (x + 2)(x + 3)."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' font-family='Arial' font-size='16'>Multiply to: 6</text><circle cx='100' cy='50' r='20' fill='#4a90e2' opacity='0.3' /><text x='90' y='55' font-family='Arial' font-size='16'>2</text><circle cx='160' cy='50' r='20' fill='#4a90e2' opacity='0.3' /><text x='150' y='55' font-family='Arial' font-size='16'>3</text><line x1='120' y1='50' x2='140' y2='50' stroke='#333' stroke-width='1' stroke-dasharray='4'/><text x='130' y='40' font-family='Arial' font-size='14'>Add to 5</text><rect x='260' y='30' width='110' height='50' fill='#d23f31' opacity='0.1' stroke='#d23f31' /><text x='265' y='55' font-family='Arial' font-size='18' fill='#d23f31'>(x + 2)(x + 3)</text></svg>"
    }
  },
  "step3": {
    "title": "Concept: Factorising Quadratics where a > 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a > 1, the factorisation requires a method such as splitting the middle term or using the 'ac method' where you multiply a and c and then find two numbers that multiply to ac and add to b.</p>",
    "workedExample": {
      "title": "Worked Example: Factorise 2x² + 7x + 3",
      "problem": "Find two numbers that multiply to 2 × 3 = 6 and add to 7.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter one factor of 6:",
          "answer": "6",
          "feedback": "Good, 6 is a factor of 6."
        },
        {
          "id": "q2",
          "prompt": "Enter the other factor of 6:",
          "answer": "1",
          "feedback": "Correct, 6 × 1 = 6."
        },
        {
          "id": "q3",
          "prompt": "Do these numbers add to 7? (yes or no)",
          "answer": "yes",
          "feedback": "Correct, 6 + 1 = 7."
        },
        {
          "id": "q4",
          "prompt": "Rewrite the expression splitting the middle term: 2x² + ?x + ?x + 3",
          "answer": "6x, 1x",
          "feedback": "Correct. The expression becomes 2x² + 6x + 1x + 3."
        },
        {
          "id": "q5",
          "prompt": "Factor by grouping (2x² + 6x) + (1x + 3). What is the common factor from the first group?",
          "answer": "2x",
          "feedback": "Correct! 2x is the common factor."
        },
        {
          "id": "q6",
          "prompt": "What is the common factor from the second group (1x + 3)?",
          "answer": "1",
          "feedback": "Correct, 1 is common."
        },
        {
          "id": "q7",
          "prompt": "Write the factorised form: (?) (x + ?)",
          "answer": "2x + 1,  x + 3",
          "feedback": "Well done! The factorised form is (2x + 1)(x + 3)."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 210' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' font-family='Arial' font-size='16'>ac = 6, b = 7</text><circle cx='100' cy='70' r='25' fill='#59a14f' opacity='0.3' /><text x='85' y='75' font-family='Arial' font-size='18'>6</text><circle cx='180' cy='70' r='25' fill='#59a14f' opacity='0.3' /><text x='165' y='75' font-family='Arial' font-size='18'>1</text><line x1='125' y1='70' x2='155' y2='70' stroke='#333' stroke-width='2' stroke-dasharray='6'/><text x='140' y='55' font-family='Arial' font-size='14'>Add to 7</text><rect x='230' y='40' width='150' height='80' fill='#de425b' opacity='0.1' stroke='#de425b' /><text x='240' y='70' font-family='Arial' font-size='18' fill='#de425b'>2x(x + 3) + 1(x + 3)</text><text x='240' y='100' font-family='Arial' font-size='18' fill='#de425b'>(2x + 1)(x + 3)</text></svg>"
    }
  },
  "step4": {
    "title": "Concept: Solving Quadratic Equations by Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Once a quadratic expression is factorised, we can solve quadratic equations by setting each factor equal to zero and solving for x.</p>",
    "workedExample": {
      "title": "Worked Example: Solve (x + 2)(x + 3) = 0",
      "problem": "Set each factor equal to zero and find the values of x.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Set the first factor equal to zero: x + 2 = ?",
          "answer": "0",
          "feedback": "Correct, set x + 2 = 0."
        },
        {
          "id": "q2",
          "prompt": "Solve for x in x + 2 = 0:",
          "answer": "-2",
          "feedback": "Correct! x = -2."
        },
        {
          "id": "q3",
          "prompt": "Set the second factor equal to zero: x + 3 = ?",
          "answer": "0",
          "feedback": "Correct, set x + 3 = 0."
        },
        {
          "id": "q4",
          "prompt": "Solve for x in x + 3 = 0:",
          "answer": "-3",
          "feedback": "Correct! x = -3."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 350 150' xmlns='http://www.w3.org/2000/svg'><text x='40' y='30' font-family='Arial' font-size='18' fill='#333'>Factorised form:</text><text x='175' y='30' font-family='Arial' font-size='24' fill='#963d97'>(x + 2)(x + 3) = 0</text><line x1='160' y1='40' x2='160' y2='120' stroke='#963d97' stroke-width='2' stroke-dasharray='5'/><text x='20' y='80' font-family='Arial' font-size='18' fill='#333'>Solve:</text><text x='100' y='80' font-family='Arial' font-size='18' fill='#963d97'>x + 2 = 0 → x = -2</text><text x='100' y='110' font-family='Arial' font-size='18' fill='#963d97'>x + 3 = 0 → x = -3</text></svg>"
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the factorised form of x² + 9x + 20?</span>",
        "options": [
          { "id": "a", "label": "<span>(x + 4)(x + 5)</span>", "isCorrect": true, "explanation": "Correct! 4 × 5 = 20 and 4 + 5 = 9." },
          { "id": "b", "label": "<span>(x + 2)(x + 7)</span>", "isCorrect": false, "explanation": "Incorrect. 2 × 7 = 14, not 20." },
          { "id": "c", "label": "<span>(x + 3)(x + 6)</span>", "isCorrect": false, "explanation": "Incorrect. 3 × 6 = 18, not 20." }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which of the following is a correct factorisation of 3x² + 8x + 4?</span>",
        "options": [
          { "id": "a", "label": "<span>(3x + 2)(x + 2)</span>", "isCorrect": true, "explanation": "Correct! 3×1=3, 2×2=4, and 3×2 + 2×1 = 8." },
          { "id": "b", "label": "<span>(3x + 4)(x + 1)</span>", "isCorrect": false, "explanation": "Incorrect. The middle term does not sum to 8x." },
          { "id": "c", "label": "<span>(x + 4)(3x + 1)</span>", "isCorrect": false, "explanation": "Incorrect. The constant terms multiply incorrectly." }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Factorise the quadratic expression <strong>4x² + 11x + 6</strong> and solve the equation <em>4x² + 11x + 6 = 0</em> by factorisation.</span>",
      "hint": "Start by finding two numbers multiplying to a × c = 4 × 6 = 24 and adding to b = 11. Then split the middle term and factor by grouping.",
      "mustHaveKeywords": ["factorisation", "split the middle term", "common factor", "set each factor to zero", "solve for x"],
      "optionalKeywords": ["ac method", "binomial factors", "quadratic equation"],
      "modelAnswer": "<span>First, find two numbers that multiply to 24 and add to 11, which are 8 and 3.<br/>Rewrite as 4x² + 8x + 3x + 6.<br/>Factor by grouping: (4x² + 8x) + (3x + 6) = 4x(x + 2) + 3(x + 2).<br/>Factor out common binomial: (4x + 3)(x + 2).<br/>Set each factor equal to zero:<br/>4x + 3 = 0 → x = -3/4<br/>x + 2 = 0 → x = -2.<br/>These are the solutions.</span>",
      "scaffoldPrompts": ["Multiply a and c.", "Find factors of ac that add to b.", "Split the middle term.", "Group terms and factor out common factors.", "Write the final factorised form.", "Set each factor equal to zero and solve for x."]
    }
  }
};