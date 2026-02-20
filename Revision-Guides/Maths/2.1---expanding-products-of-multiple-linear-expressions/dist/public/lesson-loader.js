window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.1 - Expanding products of multiple linear expressions",
  "strapline": "Learn to expand products of two or three linear expressions using the distributive law to form quadratic and cubic expressions.",
  "learningObjectives": [
    "Students should be able to expand brackets involving multiple linear expressions, such as (x + 2)(x + 3), applying the distributive law systematically (Maths 2.1)",
    "Students should be able to expand triple brackets like (x + 1)(x - 2)(x + 4) to generate higher-order polynomial expressions (Maths 2.1)",
    ""
  ],
  "keyFormulas": [
    "Concept: <strong>Distributive law</strong> - a(b + c) = ab + ac",
    "Formula: (a + b)(c + d) = ac + ad + bc + bd",
    "Reminder: Expand brackets step-by-step to avoid errors"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='160' height='160' fill='#e0f7fa' stroke='#00796b' stroke-width='3'/><text x='100' y='50' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#004d40'>(x + 2)(x + 3)</text><line x1='40' y1='80' x2='180' y2='80' stroke='#004d40' stroke-width='2' stroke-dasharray='4'/><text x='100' y='110' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#00796b'>x×x</text><text x='140' y='110' font-family='sans-serif' font-size='14' fill='#00796b'>x×3</text><text x='60' y='140' font-family='sans-serif' font-size='14' fill='#00796b'>2×x</text><text x='140' y='140' font-family='sans-serif' font-size='14' fill='#00796b'>2×3</text></svg>",
  "step1": {
    "title": "Concept: Understanding Linear Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>linear expression</strong> is an algebraic expression where the highest power of the variable is 1, for example <em>x + 3</em> or <em>2x - 5</em>. This means that the variable x is not squared or cubed, and that these expressions form the building blocks for expanding brackets.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a linear expression like a simple recipe with just one ingredient — the variable x — plus some added seasoning (constants). When you mix two recipes, you combine their ingredients carefully.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Linear Expressions",
      "problem": "Which of the following are linear expressions?<br>1) x + 7<br>2) 3x<sup>2</sup> + 1<br>3) 4 - 2x<br>4) x<sup>3</sup> + 5",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is 'x + 7' a linear expression? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct! The highest power of x is 1."
        },
        {
          "id": "q2",
          "prompt": "Is '3x² + 1' a linear expression? (Yes/No)",
          "answer": "No",
          "feedback": "Correct! The variable x is squared, so it is not linear."
        },
        {
          "id": "q3",
          "prompt": "Is '4 - 2x' a linear expression? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct! The highest power of x is 1."
        },
        {
          "id": "q4",
          "prompt": "Is 'x³ + 5' a linear expression? (Yes/No)",
          "answer": "No",
          "feedback": "Correct! The variable x is cubed, so not linear."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Applying the Distributive Law",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The distributive law lets us multiply a single term by a sum inside brackets: <em>a(b + c) = ab + ac</em>. This is the foundation of expanding brackets with linear expressions.</p><p>For example, to expand <em>(x + 2)(x + 3)</em>, you distribute each term in the first bracket to every term in the second bracket.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p>Think of it like distributing flyers: if you have 2 sets of locations, you visit every individual location from one set to every location of the other — covering all combinations.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Expand (x + 2)(x + 3)",
      "problem": "Step 1: Multiply the first term in the first bracket (x) by the first term in the second bracket (x). What do you get?",
      "questions": [
        {
          "id": "q1",
          "prompt": "x × x = ?",
          "answer": "x²",
          "feedback": "Correct! x times x is x squared."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Multiply the first term in the first bracket (x) by the second term in the second bracket (3). What do you get?",
          "answer": "3x",
          "feedback": "Correct! x times 3 is 3x."
        },
        {
          "id": "q3",
          "prompt": "Step 3: Multiply the second term in the first bracket (2) by the first term in the second bracket (x). What do you get?",
          "answer": "2x",
          "feedback": "Correct! 2 times x is 2x."
        },
        {
          "id": "q4",
          "prompt": "Step 4: Multiply the second term in the first bracket (2) by the second term in the second bracket (3). What do you get?",
          "answer": "6",
          "feedback": "Correct! 2 times 3 is 6."
        },
        {
          "id": "q5",
          "prompt": "Step 5: Write down the full expanded expression by combining all terms.",
          "answer": "x² + 3x + 2x + 6",
          "feedback": "Correct! This is the expanded form before simplifying."
        },
        {
          "id": "q6",
          "prompt": "Step 6: Simplify like terms to get the final expanded form.",
          "answer": "x² + 5x + 6",
          "feedback": "Correct! The terms 3x and 2x add up to 5x."
        }
      ]
    }
  },
  "step3": {
    "title": "Knowledge Check: MCQ on Distributive Law",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which expression correctly applies the distributive law to expand (x + 4)(x + 5)?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>x² + 5x + 4x + 20</span>",
            "isCorrect": true,
            "explanation": "Correct! Each term is multiplied: x×x, x×5, 4×x, 4×5."
          },
          {
            "id": "b",
            "label": "<span>x + 4x + 5 + 20</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The terms are not multiplied correctly, missing x² term."
          },
          {
            "id": "c",
            "label": "<span>x² + 9</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This only adds 4 and 5, and misses most multiplication steps."
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Expanding Triple Brackets Step-by-Step",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When expanding three linear brackets, such as <em>(x + 1)(x - 2)(x + 4)</em>, first expand two brackets at a time to form a quadratic expression, then multiply that result by the third bracket.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p>Imagine combining two recipes first, then adding a third recipe to that mixture to create a more complex dish — step-by-step combination makes it manageable.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Expand (x + 1)(x - 2)(x + 4) Part 1",
      "problem": "Expand the first two brackets:<br><em>(x + 1)(x - 2)</em>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply x by x.",
          "answer": "x²",
          "feedback": "Correct! x times x is x squared."
        },
        {
          "id": "q2",
          "prompt": "Multiply x by -2.",
          "answer": "-2x",
          "feedback": "Correct, x times -2 is -2x."
        },
        {
          "id": "q3",
          "prompt": "Multiply 1 by x.",
          "answer": "x",
          "feedback": "Correct! 1 times x is x."
        },
        {
          "id": "q4",
          "prompt": "Multiply 1 by -2.",
          "answer": "-2",
          "feedback": "Correct! 1 times -2 is -2."
        },
        {
          "id": "q5",
          "prompt": "Write the expanded form before simplifying.",
          "answer": "x² - 2x + x - 2",
          "feedback": "Well done! Now simplify like terms."
        },
        {
          "id": "q6",
          "prompt": "Simplify to get the quadratic expression.",
          "answer": "x² - x - 2",
          "feedback": "Great! This is your quadratic from the first two brackets."
        }
      ]
    }
  },
  "step5": {
    "title": "Worked Example: Multiply the Result by the Third Bracket",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now multiply the quadratic <em>x² - x - 2</em> by the remaining linear expression <em>(x + 4)</em>. Use distributive law carefully with each term.</p>",
    "workedExample": {
      "title": "Step-by-Step Expansion of (x² - x - 2)(x + 4)",
      "problem": "Start by multiplying each term in <em>x² - x - 2</em> by <em>x</em>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "x² × x = ?",
          "answer": "x³",
          "feedback": "Correct. x² times x is x cubed."
        },
        {
          "id": "q2",
          "prompt": "-x × x = ?",
          "answer": "-x²",
          "feedback": "Right. -x times x is -x squared."
        },
        {
          "id": "q3",
          "prompt": "-2 × x = ?",
          "answer": "-2x",
          "feedback": "Correct. -2 times x is -2x."
        },
        {
          "id": "q4",
          "prompt": "Now multiply each term in <em>x² - x - 2</em> by 4.",
          "answer": "",
          "feedback": "Let's find each product step-by-step."
        },
        {
          "id": "q5",
          "prompt": "x² × 4 = ?",
          "answer": "4x²",
          "feedback": "Correct! x² times 4 is 4x²."
        },
        {
          "id": "q6",
          "prompt": "-x × 4 = ?",
          "answer": "-4x",
          "feedback": "Correct! -x times 4 is -4x."
        },
        {
          "id": "q7",
          "prompt": "-2 × 4 = ?",
          "answer": "-8",
          "feedback": "Correct! -2 times 4 is -8."
        },
        {
          "id": "q8",
          "prompt": "Write out all the terms before simplifying.",
          "answer": "x³ - x² - 2x + 4x² - 4x - 8",
          "feedback": "Excellent! Now combine like terms to finish."
        },
        {
          "id": "q9",
          "prompt": "Combine like terms to write the final expanded expression.",
          "answer": "x³ + 3x² - 6x - 8",
          "feedback": "Correct! You have successfully expanded the triple brackets."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 450 150' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='130' height='120' fill='#fff3e0' stroke='#ff7043' stroke-width='2'/><text x='75' y='40' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#bf360c'>(x + 1)(x - 2)</text><text x='75' y='70' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#bf360c'>= x² - x - 2</text><rect x='170' y='10' width='130' height='120' fill='#e8f5e9' stroke='#43a047' stroke-width='2'/><text x='235' y='40' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#1b5e20''> (x² - x - 2)(x + 4)</text><polyline points='140,70 170,70' stroke='#757575' stroke-width='2' marker-end='url(#arrowhead)' /><text x='300' y='100' font-family='sans-serif' font-size='16' fill='#1b5e20' text-anchor='middle'>x³ + 3x² - 6x - 8</text><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#757575' /></marker></defs></svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Expand and simplify the expression (2x + 1)(x - 3)(x + 5). Show your step-by-step working.</span>",
      "hint": "Start by expanding two brackets first, then multiply the resulting quadratic by the third bracket. Use distributive law carefully and combine like terms.",
      "mustHaveKeywords": ["distributive law", "like terms", "quadratic", "expand brackets"],
      "optionalKeywords": ["simplify", "polynomial", "coefficients"],
      "modelAnswer": "<span>First expand (2x + 1)(x - 3):<br>2x·x = 2x²<br>2x·(-3) = -6x<br>1·x = x<br>1·(-3) = -3<br>Combine to get 2x² - 5x - 3.<br><br>Next, multiply this by (x + 5):<br>2x²·x = 2x³<br>2x²·5 = 10x²<br>-5x·x = -5x²<br>-5x·5 = -25x<br>-3·x = -3x<br>-3·5 = -15<br><br>Combine like terms:<br>2x³ + (10x² - 5x²) + (-25x - 3x) - 15<br>= 2x³ + 5x² - 28x - 15.<br>This is the fully expanded and simplified expression.</span>",
      "scaffoldPrompts": [
        "Expand (2x + 1)(x - 3) first.",
        "Write down all multiplication steps for the first two brackets.",
        "Simplify the quadratic result from step 1.",
        "Multiply this quadratic by (x + 5) term-by-term.",
        "Combine all like terms to finalize the cubic expression."
      ]
    }
  }
};