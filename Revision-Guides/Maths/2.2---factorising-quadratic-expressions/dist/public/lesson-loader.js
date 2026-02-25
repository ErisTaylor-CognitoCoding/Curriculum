window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.2 - Factorising quadratic expressions",
  "strapline": "Learn how to factorise quadratic expressions and solve quadratic equations using factorisation.",
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
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='160' fill='#eaf2f8' stroke='#2c3e50' stroke-width='2'/><text x='200' y='50' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#34495e'>Factorising Quadratic Expressions</text><text x='50' y='90' font-family='sans-serif' font-size='14' fill='#34495e'>ax² + bx + c</text><text x='100' y='120' font-family='sans-serif' font-size='14' fill='#34495e'>(x + p)(x + q) = x² + (p+q)x + pq</text><line x1='90' y1='105' x2='160' y2='105' stroke='#2980b9' stroke-width='1.5' marker-end='url(#arrowhead)' /><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#2980b9'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: What is a Quadratic Expression?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A quadratic expression is an algebraic expression where the highest power of the variable (usually x) is 2. It is written in the form <em>ax<sup>2</sup> + bx + c</em> where <em>a</em>, <em>b</em>, and <em>c</em> are constants and <em>a ≠ 0</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the quadratic expression like the shape of a bowl: the <em>x<sup>2</sup></em> term gives the bowl its curve, while the <em>bx</em> and <em>c</em> terms tilt and shift it.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Quadratic Parts",
      "problem": "Identify <em>a</em>, <em>b</em>, and <em>c</em> in the expression <strong>x² + 5x + 6</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of <em>a</em> (coefficient of x²)?",
          "answer": "1",
          "feedback": "Correct! The coefficient of x² is 1."
        },
        {
          "id": "q2",
          "prompt": "What is the value of <em>b</em> (coefficient of x)?",
          "answer": "5",
          "feedback": "Correct! The coefficient of x is 5."
        },
        {
          "id": "q3",
          "prompt": "What is the value of <em>c</em> (constant term)?",
          "answer": "6",
          "feedback": "Correct! The constant term is 6."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Factorisation Explained",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Factorisation is the process of rewriting a quadratic expression as the product of two binomial expressions. For example, rewriting <em>x² + 5x + 6</em> as <em>(x + 2)(x + 3)</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like breaking down a big Lego structure into two smaller pieces that when combined create the original shape.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Factorise x² + 5x + 6",
      "problem": "Find two numbers that multiply to 6 and add to 5.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the first number:",
          "answer": "2",
          "feedback": "Good! 2 is one of the factors."
        },
        {
          "id": "q2",
          "prompt": "Enter the second number:",
          "answer": "3",
          "feedback": "Correct! 3 is the other factor."
        },
        {
          "id": "q3",
          "prompt": "Write the factorised form using these numbers:",
          "answer": "(x + 2)(x + 3)",
          "feedback": "Excellent! That's the correct factorised form."
        }
      ]
    }
  },
  "step3": {
    "title": "Factorising Quadratics where a = 1: Guided Practice",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When the coefficient <em>a</em> is 1, we look for two numbers that multiply to <em>c</em> and add to <em>b</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Factorise x² + 7x + 12",
      "problem": "Find two numbers that multiply to 12 and add to 7.",
      "questions": [
        {
          "id": "q1",
          "prompt": "First number:",
          "answer": "3",
          "feedback": "Good start! 3 is a factor of 12."
        },
        {
          "id": "q2",
          "prompt": "Second number:",
          "answer": "4",
          "feedback": "Well done! 4 is the other factor."
        },
        {
          "id": "q3",
          "prompt": "Write the factorised expression:",
          "answer": "(x + 3)(x + 4)",
          "feedback": "Correct! That is the factorised form."
        }
      ]
    }
  },
  "step4": {
    "title": "Factorising Quadratics where a > 1: Introduction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When <em>a</em> is greater than 1, factorisation involves finding two numbers that multiply to <em>ac</em> and add to <em>b</em>. Then we split the middle term and factor by grouping.</p>",
    "workedExample": {
      "title": "Worked Example: Factorise 2x² + 7x + 3",
      "problem": "Step 1: Multiply a and c: 2 × 3 = 6. Find two numbers that multiply to 6 and add to 7.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the first number:",
          "answer": "6",
          "feedback": "Correct! 6 is one factor."
        },
        {
          "id": "q2",
          "prompt": "Enter the second number:",
          "answer": "1",
          "feedback": "Correct! 1 is the other factor."
        }
      ],
      "nextSteps": [
        {
          "step": "Step 2",
          "instruction": "Split the middle term using the two numbers: 2x² + 6x + 1x + 3"
        },
        {
          "step": "Step 3",
          "instruction": "Factor by grouping: (2x² + 6x) + (1x + 3) = 2x(x + 3) + 1(x + 3)"
        },
        {
          "step": "Step 4",
          "instruction": "Factor out common binomial: (2x + 1)(x + 3)"
        }
      ]
    }
  },
  "step5": {
    "title": "Solving Quadratic Equations by Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Once factorised, we set each binomial factor equal to zero and solve for <em>x</em> to find the roots of the quadratic equation.</p>",
    "workedExample": {
      "title": "Worked Example: Solve (x + 2)(x + 3) = 0",
      "problem": "Find the values of x.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Set the first factor equal to zero: x + 2 = ?",
          "answer": "0",
          "feedback": "Correct! You set the factor equal to zero."
        },
        {
          "id": "q2",
          "prompt": "Solve for x:",
          "answer": "-2",
          "feedback": "Good! x = -2."
        },
        {
          "id": "q3",
          "prompt": "Set the second factor equal to zero: x + 3 = ?",
          "answer": "0",
          "feedback": "Correct!"
        },
        {
          "id": "q4",
          "prompt": "Solve for x:",
          "answer": "-3",
          "feedback": "Excellent! x = -3."
        }
      ]
    }
  },
  "step6": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A quadratic expression is written in the form <em><span class=\"font-semibold\">_____</span></em>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "a",
                "label": "ax² + bx + c",
                "isCorrect": true,
                "feedback": "Correct! This is the standard form."
              },
              {
                "value": "b",
                "label": "ax + b",
                "isCorrect": false,
                "feedback": "Incorrect, that's linear form."
              },
              {
                "value": "c",
                "label": "a + bx + cx²",
                "isCorrect": false,
                "feedback": "Incorrect order."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Factorisation converts an expression into the product of <em><span class=\"font-semibold\">_____</span></em>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "a",
                "label": "factors",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "b",
                "label": "powers",
                "isCorrect": false,
                "feedback": "No, factorisation breaks expressions into factors."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span>Binomial factors are linear expressions with <em><span class=\"font-semibold\">_____</span></em> terms.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "a",
                "label": "two",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "b",
                "label": "one",
                "isCorrect": false,
                "feedback": "Incorrect, a binomial has two terms."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the factorised form of <em>x² + 9x + 20</em>?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>(x + 4)(x + 5)</span>",
            "isCorrect": true,
            "explanation": "Correct! 4 and 5 multiply to 20 and add to 9."
          },
          {
            "id": "b",
            "label": "<span>(x + 10)(x + 2)</span>",
            "isCorrect": false,
            "explanation": "No, 10 and 2 sum to 12, not 9."
          },
          {
            "id": "c",
            "label": "<span>(x + 6)(x + 3)</span>",
            "isCorrect": false,
            "explanation": "No, 6 and 3 sum to 9 but multiply to 18, not 20."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which method is best to factorise <em>3x² + 11x + 6</em>?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Using the method for a = 1</span>",
            "isCorrect": false,
            "explanation": "Incorrect, a ≠ 1 here."
          },
          {
            "id": "b",
            "label": "<span>Split the middle term method</span>",
            "isCorrect": true,
            "explanation": "Correct. When a > 1, split the middle term."
          },
          {
            "id": "c",
            "label": "<span>Trial and error only</span>",
            "isCorrect": false,
            "explanation": "Trial and error can be used but splitting middle term is systematic."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Factorise fully and solve the quadratic equation: <em>2x² + 7x + 3 = 0</em>.</span>",
      "hint": "Start by multiplying <em>a</em> and <em>c</em>, then find two numbers that multiply to this product and add to <em>b</em>. Use these to split the middle term and factorise by grouping. Finally, set each factor equal to zero to solve for <em>x</em>.",
      "mustHaveKeywords": ["multiply ac", "split middle term", "factor by grouping", "set factors to zero", "solve for x"],
      "optionalKeywords": ["quadratic equation", "roots", "binomial factors"],
      "modelAnswer": "<span>Multiply 2 and 3 to get 6. Find two numbers that multiply to 6 and add to 7: 6 and 1. Rewrite as 2x² + 6x + 1x + 3. Factor by grouping: 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3). Set each to zero: 2x + 1 = 0 → x = -1/2, and x + 3 = 0 → x = -3. So, the solutions are x = -1/2 and x = -3.</span>",
      "scaffoldPrompts": [
        "Think about what ac equals.",
        "Find two numbers that multiply to ac and add to b.",
        "Split the middle term using these numbers.",
        "Group terms and factorise each group.",
        "Factor out the common binomial factor.",
        "Set each bracket equal to zero and solve for x."
      ]
    }
  }
};