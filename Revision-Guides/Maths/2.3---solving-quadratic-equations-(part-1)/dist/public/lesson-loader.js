window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.3 - Solving quadratic equations (Part 1)",
  "strapline": "Learn how to solve quadratic equations by factorising and rearranging them into standard form.",
  "learningObjectives": [
    "Students should be able to solve quadratic equations by factorisation (Maths 2.3)",
    "Students should be able to rearrange quadratic equations into the standard form ax² + bx + c = 0 before solving (Maths 2.3)",
    ""
  ],
  "keyFormulas": [
    "Concept 1: Quadratic equation - ax² + bx + c = 0 where a ≠ 0",
    "Concept 2: Factorisation example: x² + 5x + 6 = (x + 2)(x + 3)",
    "Concept 3: Zero product property - if (x + a)(x + b) = 0 then x + a = 0 or x + b = 0"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='100' text-anchor='middle' font-family='sans-serif' font-size='18' fill='#000'>Quadratic Equation</text><text x='200' y='140' text-anchor='middle' font-family='sans-serif' font-size='16' fill='#333'>ax² + bx + c = 0</text><text x='200' y='180' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#666'>Factorisation</text><text x='200' y='210' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#666'>(x + m)(x + n) = 0</text></svg>",
  "step1": {
    "title": "Concept: Understanding Quadratic Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic equation</strong> is an equation where the highest power of x is 2, and it can be written in the standard form <em>ax<sup>2</sup> + bx + c = 0</em>, where <em>a</em>, <em>b</em>, and <em>c</em> are numbers and <em>a ≠ 0</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a quadratic equation like a symmetrical bowl-shaped curve that you can flip up or down depending on the sign of <em>a</em>.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying a Quadratic Equation",
      "problem": "Is the equation <strong>3x<sup>2</sup> + 4x - 5 = 0</strong> a quadratic equation?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the highest power of x in the equation?",
          "answer": "2",
          "feedback": "Correct, the highest power is 2, which means it's quadratic."
        },
        {
          "id": "q2",
          "prompt": "Is the coefficient of x² (which is 'a') zero or non-zero?",
          "answer": "non-zero",
          "feedback": "Correct, a = 3 which is not zero, confirming it is a quadratic equation."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Rearranging Quadratic Equations to Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Before solving, ensure the quadratic equation is rearranged into the standard form <em>ax<sup>2</sup> + bx + c = 0</em>. This often means moving all terms to one side.</p>",
    "workedExample": {
      "title": "Worked Example: Rearranging to Standard Form",
      "problem": "Rearrange <strong>x<sup>2</sup> + 5x = 6</strong> into the standard form.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the first step to get all terms on one side?",
          "answer": "Subtract 6 from both sides",
          "feedback": "Correct, subtracting 6 moves all terms to one side."
        },
        {
          "id": "q2",
          "prompt": "Write the equation after subtracting 6 on the right side.",
          "answer": "x^2 + 5x - 6 = 0",
          "feedback": "Correct, this is the standard form."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To solve quadratic equations by factorisation, break the quadratic expression into the product of two binomials (brackets). For example, <em>x<sup>2</sup> + 5x + 6 = (x + 2)(x + 3)</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Factorising a Quadratic",
      "problem": "Factorise <strong>x<sup>2</sup> + 5x + 6</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find two numbers that multiply to 6 and add to 5.",
          "answer": "2 and 3",
          "feedback": "Correct, 2 × 3 = 6 and 2 + 3 = 5."
        },
        {
          "id": "q2",
          "prompt": "Write the factorised form using these numbers.",
          "answer": "(x + 2)(x + 3)",
          "feedback": "Correct, the quadratic factorises to (x + 2)(x + 3)."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Zero Product Property",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If the product of two factors is zero, then one or both of the factors must be zero. This means to solve <em>(x + a)(x + b) = 0</em>, set each bracket equal to zero: <em>x + a = 0</em> or <em>x + b = 0</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Using Zero Product Property",
      "problem": "Solve <strong>(x + 2)(x + 3) = 0</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Set the first bracket equal to zero and solve for x.",
          "answer": "x = -2",
          "feedback": "Correct, x + 2 = 0 so x = -2."
        },
        {
          "id": "q2",
          "prompt": "Set the second bracket equal to zero and solve for x.",
          "answer": "x = -3",
          "feedback": "Correct, x + 3 = 0 so x = -3."
        }
      ]
    }
  },
  "step5": {
    "title": "Putting It All Together: Solving a Quadratic Equation by Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Follow the steps: rearrange to standard form, factorise, then use the zero product property to find the values of x.</p>",
    "workedExample": {
      "title": "Worked Example: Solve x² + 7x + 12 = 0",
      "problem": "Solve the quadratic equation by factorisation.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Is the equation in standard form ax² + bx + c = 0?",
          "answer": "Yes",
          "feedback": "Correct, it is already in standard form."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Find two numbers that multiply to 12 and add to 7.",
          "answer": "3 and 4",
          "feedback": "Correct, 3 × 4 = 12 and 3 + 4 = 7."
        },
        {
          "id": "q3",
          "prompt": "Step 3: Write the factorised form.",
          "answer": "(x + 3)(x + 4)",
          "feedback": "Correct, the factorised form is (x + 3)(x + 4)."
        },
        {
          "id": "q4",
          "prompt": "Step 4: Use zero product property to find the solutions for x.",
          "answer": "x = -3 or x = -4",
          "feedback": "Correct, solving each bracket gives x = -3 or x = -4."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the quadratic equation <em>2x² + 7x = 3</em> by factorisation. Show all your working.</span>",
      "hint": "First, rearrange the equation so that one side equals zero, then factorise and apply the zero product property.",
      "mustHaveKeywords": ["rearrange", "standard form", "factorisation", "zero product property", "solutions"],
      "optionalKeywords": ["coefficients", "common factor"],
      "modelAnswer": "<span>Step 1: Rearrange to standard form: 2x² + 7x - 3 = 0.<br>Step 2: Factorise the quadratic expression.<br>Step 3: Use the zero product property to set each factor equal to zero.<br>Step 4: Solve each resulting linear equation to find the values of x.</span>",
      "scaffoldPrompts": ["Move all terms to one side", "Look for two numbers whose product is ac (2 × -3 = -6) and sum is b (7)", "Rewrite the middle term using these numbers", "Factor by grouping", "Set each factor equal to zero", "Solve each simple equation"]
    }
  }
};