window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.2 - Factorising quadratic expressions (Part 1)",
  "strapline": "Learn to break down quadratic expressions into simpler factors for easier manipulation and solving.",
  "learningObjectives": [
    "Students should be able to factorise quadratic expressions of the form x² + bx + c (Maths 2.2)",
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a > 1 (Maths 2.2)",
    ""
  ],
  "keyFormulas": [
    "Concept: Quadratic expression is generally ax\u00b2 + bx + c",
    "Factor pairs multiply to c and add to b when a = 1",
    "When a > 1, factorising involves splitting the middle term or other methods"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f9f9f9' stroke='#333' /><text x='200' y='100' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#222'>Factorising Quadratics</text><text x='200' y='140' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#555'>x\u00b2 + bx + c</text><text x='200' y='180' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#777'>Find factors of c that add to b</text></svg>",
  "step1": {
    "title": "Understanding Quadratic Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic expression</strong> is an algebraic expression where the highest power of the variable is 2. Typically, it is in the form <em>ax<sup>2</sup> + bx + c</em>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants.</p><p>Examples: <em>x<sup>2</sup> + 5x + 6</em>, <em>2x<sup>2</sup> + 3x + 1</em></p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a quadratic expression like a recipe: it is made from ingredients (terms) combined in a particular way. To factorise is like breaking down the recipe into simpler ingredient groups (factors).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Parts of a Quadratic",
      "problem": "For the quadratic expression <strong>x<sup>2</sup> + 7x + 12</strong>, identify <em>a</em>, <em>b</em>, and <em>c</em>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of <em>a</em> (coefficient of x²)?",
          "answer": "1",
          "feedback": "Correct. The coefficient of x² is 1."
        },
        {
          "id": "q2",
          "prompt": "What is the value of <em>b</em> (coefficient of x)?",
          "answer": "7",
          "feedback": "Correct. The coefficient of x is 7."
        },
        {
          "id": "q3",
          "prompt": "What is the value of <em>c</em> (constant term)?",
          "answer": "12",
          "feedback": "Correct. The constant term is 12."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Factorising",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Factorising is the process of writing an expression as a product of simpler expressions (called factors). It reverses the expansion process. For example, (x + 3)(x + 4) expands to x<sup>2</sup> + 7x + 12, so factorising x<sup>2</sup> + 7x + 12 finds those factors.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like taking apart a LEGO model to find which smaller blocks it is made from.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Recognising Factors",
      "problem": "If (x + 2)(x + 5) expands to a quadratic expression, what is the expression?",
      "questions": [
        {
          "id": "q4",
          "prompt": "Multiply the first terms: x * x = ?",
          "answer": "x^2",
          "feedback": "Correct. x times x equals x²."
        },
        {
          "id": "q5",
          "prompt": "Multiply the outer terms: x * 5 = ?",
          "answer": "5x",
          "feedback": "Correct. x times 5 equals 5x."
        },
        {
          "id": "q6",
          "prompt": "Multiply the inner terms: 2 * x = ?",
          "answer": "2x",
          "feedback": "Correct. 2 times x equals 2x."
        },
        {
          "id": "q7",
          "prompt": "Multiply the last terms: 2 * 5 = ?",
          "answer": "10",
          "feedback": "Correct. 2 times 5 equals 10."
        },
        {
          "id": "q8",
          "prompt": "Write the expanded expression by adding all terms: x² + 5x + 2x + 10 equals ?",
          "answer": "x^2 + 7x + 10",
          "feedback": "Correct. After combining like terms, the expression is x² + 7x + 10."
        }
      ]
    }
  },
  "step3": {
    "title": "Finding Factor Pairs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When factorising quadratics of the form <em>x² + bx + c</em> (where <em>a</em> = 1), we look for two numbers that multiply to <em>c</em> and add to <em>b</em>. These two numbers will help us write the factors.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you want two numbers that when multiplied make a certain product (<em>c</em>), but they also must fit together perfectly in size (add up) to make another number (<em>b</em>).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Factor Pairs for x² + 7x + 10",
      "problem": "Find two numbers that multiply to 10 and add to 7.",
      "questions": [
        {
          "id": "q9",
          "prompt": "List factor pairs of 10 (multiply to 10):",
          "answer": "1 and 10, 2 and 5",
          "feedback": "Correct. The pairs are 1 & 10, and 2 & 5."
        },
        {
          "id": "q10",
          "prompt": "Which factor pair adds to 7?",
          "answer": "2 and 5",
          "feedback": "Correct. 2 + 5 = 7."
        }
      ]
    }
  },
  "step4": {
    "title": "Factorising Quadratics of the Form x² + bx + c",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the two numbers found, we can write the quadratic as (x + m)(x + n), where <em>m</em> and <em>n</em> are the factor pairs of <em>c</em> that add to <em>b</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Factorise x² + 7x + 10",
      "problem": "Write the quadratic as a product of two brackets.",
      "questions": [
        {
          "id": "q11",
          "prompt": "Fill in the two brackets: (x + __)(x + __)",
          "answer": "2 and 5",
          "feedback": "Well done! The factorised form is (x + 2)(x + 5)."
        }
      ]
    }
  },
  "step5": {
    "title": "Factorising Quadratics with a > 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When <em>a</em> is greater than 1 (e.g., <em>2x² + 7x + 3</em>), we need to use more advanced methods, such as splitting the middle term. This involves finding two numbers that multiply to <em>a \u00d7 c</em> and add to <em>b</em>, then splitting the middle term accordingly.</p>",
    "workedExample": {
      "title": "Worked Example: Factorise 2x² + 7x + 3",
      "problem": "Find two numbers multiplying to 2\u00d73 = 6 and adding to 7.",
      "questions": [
        {
          "id": "q12",
          "prompt": "List pairs of factors of 6:",
          "answer": "1 and 6, 2 and 3",
          "feedback": "Correct. The pairs are 1 & 6 and 2 & 3."
        },
        {
          "id": "q13",
          "prompt": "Which pair adds to 7?",
          "answer": "1 and 6",
          "feedback": "Correct. 1 + 6 = 7."
        },
        {
          "id": "q14",
          "prompt": "Split the middle term using these numbers: 2x² + __x + __x + 3",
          "answer": "1x and 6x",
          "feedback": "Correct. Split as 2x² + 1x + 6x + 3."
        }
      ]
    }
  },
  "step6": {
    "title": "Completing Factorisation with Grouping",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Next, factorise by grouping: group the first two and last two terms and factor each group separately, then factor out the common binomial.</p>",
    "workedExample": {
      "title": "Worked Example: Factorise 2x² + 7x + 3 Fully",
      "problem": "Factorise by grouping: 2x² + 1x + 6x + 3",
      "questions": [
        {
          "id": "q15",
          "prompt": "Factorise first group: 2x² + 1x",
          "answer": "x(2x + 1)",
          "feedback": "Correct. Factoring x out gives x(2x + 1)."
        },
        {
          "id": "q16",
          "prompt": "Factorise second group: 6x + 3",
          "answer": "3(2x + 1)",
          "feedback": "Correct. Factoring 3 out gives 3(2x + 1)."
        },
        {
          "id": "q17",
          "prompt": "Factor out the common binomial (2x + 1): (x + __)(2x + 1)",
          "answer": "3",
          "feedback": "Correct. Final factorisation is (x + 3)(2x + 1)."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Factorise the quadratic expression 3x<sup>2</sup> + 5x + 2 and explain each step you take.</span>",
      "hint": "Remember to multiply a and c, then find factor pairs that add to b. Use grouping to complete the factorisation.",
      "mustHaveKeywords": ["factor pairs", "split middle term", "grouping", "common binomial"],
      "optionalKeywords": ["coefficients", "factorising", "quadratic expression"],
      "modelAnswer": "<span>First, multiply a and c: 3 * 2 = 6. Then find two numbers that multiply to 6 and add to 5, which are 2 and 3. Next, split the middle term: 3x<sup>2</sup> + 2x + 3x + 2. Group the terms: (3x<sup>2</sup> + 2x) + (3x + 2). Factor each group: x(3x + 2) + 1(3x + 2). Finally, factor out the common binomial to get (x + 1)(3x + 2).</span>",
      "scaffoldPrompts": ["What is a * c?", "Which numbers multiply to a * c and add to b?", "How do you split the middle term?", "How do you factor by grouping?"]
    }
  }
};