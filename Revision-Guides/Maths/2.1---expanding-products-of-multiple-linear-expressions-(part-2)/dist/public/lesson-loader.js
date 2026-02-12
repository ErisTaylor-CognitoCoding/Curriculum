window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.1 - Expanding products of multiple linear expressions (Part 2)",
  "strapline": "Understanding how to expand and simplify the product of two or more linear expressions by multiplying each term and collecting like terms.",
  "learningObjectives": [
    "Students should be able to expand the product of two or more linear expressions (Maths 2.1)",
    "Students should be able to simplify algebraic expressions by collecting like terms after expansion (Maths 2.1)"
  ],
  "keyFormulas": [
    "Product of two linear expressions: (a + b)(c + d) = ac + ad + bc + bd",
    "Expanding triple products: (a + b)(c + d)(e + f) can be done by first expanding two brackets then multiplying by the third",
    "Collecting like terms: Combine terms with the same variable and power, e.g., 3x + 4x = 7x"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='100' text-anchor='middle' font-family='sans-serif' font-size='16'><tspan x='200' dy='1.2em' font-weight='bold' fill='#222'>Expanding (x + 2)(x - 3)</tspan><tspan x='200' dy='2em' fill='#555'>x × x = x²</tspan><tspan x='200' dy='1.5em' fill='#555'>x × -3 = -3x</tspan><tspan x='200' dy='1.5em' fill='#555'>2 × x = 2x</tspan><tspan x='200' dy='1.5em' fill='#555'>2 × -3 = -6</tspan><tspan x='200' dy='2em' font-weight='bold' fill='#222'>Simplify: x² - x - 6</tspan></text></svg>",
  "step1": {
    "title": "Concept 1: Product of linear expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying two linear expressions such as <em>(x + 3)(x - 2)</em>, multiply each term in the first bracket by each term in the second bracket. Then combine like terms to simplify.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it like distributing invitations to everyone at two different groups: each person from group one must talk to each person from group two.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Multiply x by x to get x²</span>",
        "<span>Multiply x by -2 to get -2x</span>",
        "<span>Multiply 3 by x to get 3x</span>",
        "<span>Multiply 3 by -2 to get -6</span>",
        "<span>Combine like terms: -2x + 3x = x</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Expanding triple products",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To expand three brackets, first expand any two of them fully, then multiply the resulting expression by the remaining bracket.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with (x + 1)(x - 2)(x + 3)</span>",
        "<span>First expand (x + 1)(x - 2) to get x² - x - 2</span>",
        "<span>Then multiply (x² - x - 2) by (x + 3)</span>",
        "<span>Multiply each term: x²·x = x³, x²·3 = 3x², -x·x = -x², -x·3 = -3x, -2·x = -2x, -2·3 = -6</span>",
        "<span>Combine like terms: 3x² - x² = 2x² and -3x - 2x = -5x</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Like terms",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Like terms have the same variable with the same power. For example, 3x² and 5x² are like terms, but 3x² and 3x are not.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of like terms as items of the same kind that you can add up, like apples with apples. You can't add apples and oranges directly.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>In the expression 4x + 3x, both terms are like terms so combine to 7x</span>",
        "<span>In 2x² + 5x, these are not like terms and cannot be combined further</span>"
      ]
    }
  },
  "step4": {
    "title": "Practice: Expand (x + 4)(x + 2)",
    "prompt": "<p class=\"text-sm leading-6 text-muted-foreground\">Multiply each term and then collect like terms.</p>",
    "hint": "Multiply x by both terms in the second bracket, then multiply 4 by both terms, finally combine like terms.",
    "expectedAnswer": "(x + 4)(x + 2) = x² + 2x + 4x + 8 = x² + 6x + 8"
  },
  "step5": {
    "title": "Practice: Expand (x + 1)(x - 3)(x + 2)",
    "prompt": "<p class=\"text-sm leading-6 text-muted-foreground\">First expand any two brackets, then multiply by the third.</p>",
    "hint": "Start with (x + 1)(x - 3), then multiply the answer by (x + 2), and remember to collect like terms.",
    "expectedAnswer": "(x + 1)(x - 3)(x + 2) = (x² - 2x - 3)(x + 2) = x³ + 2x² - 2x² - 4x - 3x - 6 = x³ - 7x - 6"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Expand and simplify fully: (x - 2)(x + 5)(x + 3)</span>",
      "hint": "Start by expanding the first two brackets, then multiply the result by the third bracket, and finally collect all like terms.",
      "mustHaveKeywords": ["expand", "multiply each term", "collect like terms", "simplify"],
      "optionalKeywords": ["distributive law", "triple product", "combine"],
      "modelAnswer": "<span>First, expand (x - 2)(x + 5) = x² + 5x - 2x - 10 = x² + 3x - 10. Then multiply by (x + 3): (x² + 3x - 10)(x + 3). Multiply each term: x²·x = x³, x²·3 = 3x², 3x·x = 3x², 3x·3 = 9x, -10·x = -10x, -10·3 = -30. Combine like terms: 3x² + 3x² = 6x² and 9x - 10x = -x. Final expression: x³ + 6x² - x - 30.</span>",
      "scaffoldPrompts": [
        "First, multiply (x - 2) and (x + 5)",
        "Next, multiply the resulting expression by (x + 3)",
        "Then multiply every term in the expanded form by each term in (x + 3)",
        "Finally, combine all like terms to simplify"
      ]
    }
  }
};