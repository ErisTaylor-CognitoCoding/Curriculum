window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.1 - Expanding products of multiple linear expressions (Part 2)",
  "strapline": "Learn how to expand and simplify products of two or more linear expressions by multiplying terms and collecting like terms.",
  "learningObjectives": [
    "Students should be able to expand the product of two or more linear expressions (Maths 2.1)",
    "Students should be able to simplify algebraic expressions by collecting like terms after expansion (Maths 2.1)",
    ""
  ],
  "keyFormulas": [
    "When expanding (a + b)(c + d) = ac + ad + bc + bd",
    "For three brackets: (a + b)(c + d)(e + f) = Expand two first, then multiply by third",
    "Collecting like terms means adding coefficients of terms with the same variable and power"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#333' stroke-width='2'/><text x='200' y='80' font-family='Arial' font-size='18' font-weight='bold' fill='#222' text-anchor='middle'>Expanding (x + 1)(x - 2)(x + 3)</text><text x='200' y='130' font-family='Arial' font-size='16' fill='#555' text-anchor='middle'>(x + 1)(x - 2) = x² - x - 2</text><text x='200' y='170' font-family='Arial' font-size='16' fill='#555' text-anchor='middle''>Result × (x + 3) = x³ + 2x² - 5x - 6</text><rect x='150' y='195' width='100' height='5' fill='#4A90E2' /></svg>",
  "step1": {
    "title": "Concept 1: Product of linear expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying two linear expressions, such as <em>(x + 3)(x - 2)</em>, multiply each term in the first bracket by each term in the second bracket. Then add the results together and simplify by collecting like terms.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it like distributing gifts: if you have a box with two types of gifts and another box with two types, to find all combinations, you pick one gift from each box and pair them all together.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Multiply x by x: x × x = x²</span>",
        "<span>Multiply x by -2: x × (-2) = -2x</span>",
        "<span>Multiply 3 by x: 3 × x = 3x</span>",
        "<span>Multiply 3 by -2: 3 × (-2) = -6</span>",
        "<span>Combine like terms: -2x + 3x = x</span>",
        "<span>Final answer: x² + x - 6</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Expanding triple products",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To expand three linear expressions like <em>(x + 1)(x - 2)(x + 3)</em>, first expand the first two brackets to get a quadratic. Then multiply the resulting expression by the third bracket, applying the same distributive method.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Expand first two brackets: (x + 1)(x - 2) = x² - x - 2</span>",
        "<span>Multiply result by third bracket: (x² - x - 2)(x + 3)</span>",
        "<span>Multiply each term: x² × x = x³</span>",
        "<span>x² × 3 = 3x²</span>",
        "<span>-x × x = -x²</span>",
        "<span>-x × 3 = -3x</span>",
        "<span>-2 × x = -2x</span>",
        "<span>-2 × 3 = -6</span>",
        "<span>Combine like terms: 3x² - x² = 2x² and -3x - 2x = -5x</span>",
        "<span>Final answer: x³ + 2x² - 5x - 6</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Like terms",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Like terms are terms that have the same variable raised to the same power. For example, <em>3x²</em> and <em>5x²</em> are like terms and can be added, but <em>3x²</em> and <em>3x</em> are not and cannot be combined.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine like terms are like apples—only apples can be combined together, you can’t mix apples and oranges.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Terms: 4x², 7x², -3x, and 5x</span>",
        "<span>Combine like terms with x²: 4x² + 7x² = 11x²</span>",
        "<span>Combine like terms with x: -3x + 5x = 2x</span>",
        "<span>Final simplified expression: 11x² + 2x</span>"
      ]
    }
  },
  "step4": {
    "title": "Practice: Expand (2x + 3)(x - 4)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the distributive method to multiply each term in the first bracket by each term in the second, then add and simplify.</p>",
    "task": {
      "type": "input",
      "prompt": "<span>Expand and simplify (2x + 3)(x - 4)</span>",
      "expectedAnswer": "2x^2 - 8x + 3x - 12",
      "correctFeedback": "<span>Well done! You correctly expanded and combined like terms.</span>",
      "incorrectFeedback": "<span>Try again by multiplying each term carefully.</span>"
    }
  },
  "step5": {
    "title": "Practice: Expand (x + 2)(x - 3)(x + 5)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">First expand two brackets, then multiply by the third bracket. Remember to combine like terms at the end.</p>",
    "task": {
      "type": "input",
      "prompt": "<span>Expand and simplify (x + 2)(x - 3)(x + 5)</span>",
      "expectedAnswer": "x^3 + 4x^2 - 13x - 30",
      "correctFeedback": "<span>Great job! You have successfully expanded the triple product.</span>",
      "incorrectFeedback": "<span>Double check your expansion steps and ensure you combine all like terms.</span>"
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Expand and simplify fully the expression (3x + 1)(x - 2)(x + 4).</span>",
      "hint": "Remember to expand the first two brackets, then multiply the result by the third bracket. Finally, collect like terms carefully.",
      "mustHaveKeywords": ["expand", "multiply", "collect like terms", "simplify"],
      "optionalKeywords": ["distributive law", "combine"],
      "modelAnswer": "<span>First, expand (3x + 1)(x - 2) giving 3x² - 6x + x - 2 = 3x² - 5x - 2. Then multiply this result by (x + 4), giving (3x² - 5x - 2)(x + 4). Apply distributive law: 3x² × x = 3x³, 3x² × 4 = 12x², -5x × x = -5x², -5x × 4 = -20x, -2 × x = -2x, -2 × 4 = -8. Combine like terms: 12x² - 5x² = 7x², and -20x - 2x = -22x. The final simplified expression is 3x³ + 7x² - 22x - 8.</span>",
      "scaffoldPrompts": ["Expand the first two brackets", "Multiply the resulting expression by the third bracket", "Combine all like terms"]
    }
  }
};