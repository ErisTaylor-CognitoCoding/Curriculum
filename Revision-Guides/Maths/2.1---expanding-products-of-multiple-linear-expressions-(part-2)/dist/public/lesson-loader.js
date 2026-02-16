window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.1 - Expanding products of multiple linear expressions (Part 2)",
  "strapline": "Learn to expand products of two or more linear expressions and simplify by collecting like terms.",
  "learningObjectives": [
    "Students should be able to expand the product of two or more linear expressions (Maths 2.1)",
    "Students should be able to simplify algebraic expressions by collecting like terms after expansion (Maths 2.1)",
    ""
  ],
  "keyFormulas": [
    "Concept: When expanding (a + b)(c + d), multiply each term in the first bracket by each term in the second.",
    "For three linear expressions (x + a)(x + b)(x + c), first expand two brackets, then multiply the result by the third.",
    "Like terms have the same variable and power, so they can be combined by addition or subtraction."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='130' text-anchor='middle' font-family='sans-serif' font-size='16'>Multiplying Terms in Brackets</text><line x1='90' y1='170' x2='150' y2='170' stroke='#333' /><text x='120' y='190' text-anchor='middle' font-family='sans-serif' font-size='12'>(x + 2)(x - 3)</text><circle cx='120' cy='170' r='5' fill='#6c63ff' /><circle cx='150' cy='170' r='5' fill='#6c63ff' /><line x1='120' y1='170' x2='120' y2='210' stroke='#333' stroke-dasharray='4 2' /><line x1='150' y1='170' x2='150' y2='210' stroke='#333' stroke-dasharray='4 2' /><text x='135' y='240' text-anchor='middle' font-family='sans-serif' font-size='14'>Multiply Each Term</text></svg>",
  "step1": {
    "title": "Concept: Product of Linear Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying two linear expressions, such as <em>(x + 3)(x - 2)</em>, multiply each term in the first bracket by each term in the second bracket, then simplify by collecting like terms.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of multiplying brackets like distributing pieces of food to friends: each item in one set is given to each item in the other set.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Expand (x + 3)(x - 2)",
      "problem": "Step-by-step expand (x + 3)(x - 2)",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the first terms: What is x × x?",
          "answer": "x^2",
          "feedback": "Correct! x multiplied by x is x²."
        },
        {
          "id": "q2",
          "prompt": "Multiply the outer terms: What is x × (-2)?",
          "answer": "-2x",
          "feedback": "Yes! x times -2 is -2x."
        },
        {
          "id": "q3",
          "prompt": "Multiply the inner terms: What is 3 × x?",
          "answer": "3x",
          "feedback": "Correct! 3 times x is 3x."
        },
        {
          "id": "q4",
          "prompt": "Multiply the last terms: What is 3 × (-2)?",
          "answer": "-6",
          "feedback": "Right! 3 times -2 is -6."
        },
        {
          "id": "q5",
          "prompt": "Now collect like terms: Combine -2x and 3x.",
          "answer": "x",
          "feedback": "Exactly! -2x + 3x equals x."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Expanding Triple Products",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To expand products of three linear expressions, for example <em>(x + 1)(x - 2)(x + 3)</em>, first expand two brackets, then multiply the expanded result by the third bracket.</p>",
    "workedExample": {
      "title": "Worked Example: Expand (x + 1)(x - 2)(x + 3) - First Two Brackets",
      "problem": "First, expand (x + 1)(x - 2). Step by step:",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is x × x?",
          "answer": "x^2",
          "feedback": "Correct, x times x is x²."
        },
        {
          "id": "q2",
          "prompt": "What is x × (-2)?",
          "answer": "-2x",
          "feedback": "Yes, x times -2 is -2x."
        },
        {
          "id": "q3",
          "prompt": "What is 1 × x?",
          "answer": "x",
          "feedback": "Correct, 1 times x is x."
        },
        {
          "id": "q4",
          "prompt": "What is 1 × (-2)?",
          "answer": "-2",
          "feedback": "Exactly, 1 times -2 is -2."
        },
        {
          "id": "q5",
          "prompt": "Combine like terms: -2x + x = ?",
          "answer": "-x",
          "feedback": "Correct! -2x + x equals -x."
        }
      ]
    }
  },
  "step3": {
    "title": "Continue Expansion: Multiply Result by Third Bracket",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now multiply the result from step 2, which is <em>x^2 - x - 2</em>, by the third bracket <em>(x + 3)</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Multiply (x² - x - 2)(x + 3)",
      "problem": "Multiply each term in <em>x^2 - x - 2</em> by each term in <em>x + 3</em> step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is x² × x?",
          "answer": "x^3",
          "feedback": "Correct, x² times x is x³."
        },
        {
          "id": "q2",
          "prompt": "What is x² × 3?",
          "answer": "3x^2",
          "feedback": "Right, x² times 3 is 3x²."
        },
        {
          "id": "q3",
          "prompt": "What is -x × x?",
          "answer": "-x^2",
          "feedback": "Correct, -x times x is -x²."
        },
        {
          "id": "q4",
          "prompt": "What is -x × 3?",
          "answer": "-3x",
          "feedback": "Yes, -x times 3 is -3x."
        },
        {
          "id": "q5",
          "prompt": "What is -2 × x?",
          "answer": "-2x",
          "feedback": "Correct, -2 times x is -2x."
        },
        {
          "id": "q6",
          "prompt": "What is -2 × 3?",
          "answer": "-6",
          "feedback": "Exactly, -2 times 3 is -6."
        },
        {
          "id": "q7",
          "prompt": "Now combine like terms: 3x² and -x²?",
          "answer": "2x^2",
          "feedback": "Good! 3x² - x² equals 2x²."
        },
        {
          "id": "q8",
          "prompt": "Combine like terms: -3x and -2x?",
          "answer": "-5x",
          "feedback": "Correct! -3x - 2x equals -5x."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Like Terms",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Like terms contain the same variable with the same powers, such as 3x² and 5x². Terms like 3x and 3x² are not like terms and cannot be combined.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like terms are like socks of the same kind in a drawer; they can be paired together. Different powers are like socks of different sizes and cannot be paired.</p>"
    }
  },
  "step5": {
    "title": "Practice: Identify and Combine Like Terms",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Identify and combine like terms from the expression: 4x + 3x² - 2x + 7 - 5x² + 1.</p>",
    "questions": [
      {
        "id": "q1",
        "prompt": "Which terms are like terms with 4x?",
        "answer": "-2x",
        "feedback": "Correct, both have the variable x to the power 1."
      },
      {
        "id": "q2",
        "prompt": "Which terms are like terms with 3x²?",
        "answer": "-5x^2",
        "feedback": "Correct, both have x squared."
      },
      {
        "id": "q3",
        "prompt": "What is 4x - 2x?",
        "answer": "2x",
        "feedback": "Yes! Combining like terms 4x - 2x gives 2x."
      },
      {
        "id": "q4",
        "prompt": "What is 3x² - 5x²?",
        "answer": "-2x^2",
        "feedback": "Correct, combining 3x² - 5x² equals -2x²."
      },
      {
        "id": "q5",
        "prompt": "Combine the constants 7 and 1.",
        "answer": "8",
        "feedback": "Right, 7 + 1 equals 8."
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Expand and simplify the expression (x + 2)(x - 4)(x + 5).</span>",
      "hint": "Remember to first expand two brackets, then multiply the result by the third bracket. Collect like terms carefully.",
      "mustHaveKeywords": ["expand", "multiply each term", "collect like terms"],
      "optionalKeywords": ["distributive law", "simplify", "polynomial"],
      "modelAnswer": "<span>First, expand (x + 2)(x - 4) to get x² - 4x + 2x - 8 = x² - 2x - 8. Then multiply this by (x + 5): multiply each term in x² - 2x - 8 by x and 5, resulting in x³ + 5x² - 2x² - 10x - 8x - 40. Combine like terms: x³ + (5x² - 2x²) + (-10x - 8x) - 40 = x³ + 3x² - 18x - 40.</span>",
      "scaffoldPrompts": [
        "Start by multiplying (x + 2)(x - 4)",
        "Simplify the expression from step 1",
        "Multiply your result by (x + 5)",
        "Expand all products term-by-term",
        "Collect and combine like terms"
      ]
    }
  }
};