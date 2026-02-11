window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.1 - Expanding products of multiple linear expressions (Part 2)",
  "strapline": "Learn to expand products of two or more linear expressions and simplify by collecting like terms",
  "learningObjectives": [
    "Students should be able to expand the product of two or more linear expressions (Maths 2.1)",
    "Students should be able to simplify algebraic expressions by collecting like terms after expansion (Maths 2.1)"
  ],
  "step1": {
    "title": "Concept 1: Product of linear expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying two linear expressions, such as <em>(x + 3)(x - 2)</em>, multiply each term in the first bracket by each term in the second bracket. After that, simplify the expression by collecting like terms.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it like distributing toppings on two separate pizzas to make all combined possible combinations of toppings when sharing.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Multiply <em>x</em> by both <em>x</em> and <em>-2</em>: <em>x × x = x²</em> and <em>x × (-2) = -2x</em></span>",
        "<span>Multiply <em>3</em> by both <em>x</em> and <em>-2</em>: <em>3 × x = 3x</em> and <em>3 × (-2) = -6</em></span>",
        "<span>Write all terms together: <em>x² - 2x + 3x - 6</em></span>",
        "<span>Collect like terms: <em>x² + ( -2x + 3x ) - 6 = x² + x - 6</em></span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Expanding triple products",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To expand three linear expressions, for example <em>(x + 1)(x - 2)(x + 3)</em>, first multiply two brackets together, then multiply the result by the third bracket and simplify fully by collecting like terms.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine layering three different colored filters on a light. First combine two, then add the third to see the full effect.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Expand first two brackets: (x + 1)(x - 2) = x² - 2x + x - 2 = x² - x - 2</span>",
        "<span>Multiply this result by the third bracket: (x² - x - 2)(x + 3)</span>",
        "<span>Multiply each term in <em>x² - x - 2</em> by each term in <em>x + 3</em>: <em>x² × x = x³</em>, <em>x² × 3 = 3x²</em>, <em>-x × x = -x²</em>, <em>-x × 3 = -3x</em>, <em>-2 × x = -2x</em>, <em>-2 × 3 = -6</em></span>",
        "<span>List all terms: <em>x³ + 3x² - x² - 3x - 2x - 6</em></span>",
        "<span>Collect like terms: <em>x³ + (3x² - x²) + (-3x - 2x) - 6 = x³ + 2x² - 5x - 6</em></span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Like terms",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Like terms are terms that contain the same variable raised to the same power. For example, <em>3x²</em> and <em>5x²</em> are like terms and can be combined by adding coefficients, but <em>3x²</em> and <em>3x</em> are not like terms.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of like terms as similar fruits in a basket — you can combine the apples but you cannot combine apples with oranges.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given terms <em>4x²</em> and <em>7x²</em>, add their coefficients: 4 + 7 = 11, so <em>4x² + 7x² = 11x²</em></span>",
        "<span>Given terms <em>5x</em> and <em>3x²</em>, these are not like terms and cannot be combined</span>"
      ]
    }
  },
  "step4": {
    "title": "Practice: Expanding two linear expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Try expanding and simplifying the expression <em>(2x + 5)(x - 4)</em> by multiplying each term and collecting like terms.</p>",
    "practice": {
      "prompt": "<span>Expand and simplify <em>(2x + 5)(x - 4)</em></span>",
      "hint": "Multiply each term in the first bracket by each term in the second, then combine like terms.",
      "mustHaveKeywords": ["2x²", "-8x", "5x", "-20"],
      "optionalKeywords": ["collect like terms"],
      "modelAnswer": "<span>2x × x = 2x², 2x × (-4) = -8x, 5 × x = 5x, 5 × (-4) = -20; sum: 2x² - 8x + 5x - 20 = 2x² - 3x - 20</span>",
      "scaffoldPrompts": ["Multiply first terms", "Multiply outer terms", "Multiply inner terms", "Multiply last terms", "Combine like terms"]
    }
  },
  "step5": {
    "title": "Practice: Expanding triple linear expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now try expanding three expressions, for example, <em>(x + 2)(x - 1)(x + 4)</em>. First, multiply any two brackets, then multiply the result by the third.</p>",
    "practice": {
      "prompt": "<span>Expand and simplify <em>(x + 2)(x - 1)(x + 4)</em></span>",
      "hint": "Expand two brackets first, simplify, then multiply the third bracket.",
      "mustHaveKeywords": ["x³", "5x²", "x", "-8"],
      "optionalKeywords": ["like terms", "multiply"],
      "modelAnswer": "<span>(x + 2)(x - 1) = x² - x + 2x - 2 = x² + x - 2; then (x² + x - 2)(x + 4) = x³ + 4x² + x² + 4x - 2x - 8 = x³ + 5x² + 2x - 8</span>",
      "scaffoldPrompts": ["Multiply first two brackets", "Simplify intermediate result", "Multiply by third bracket", "Collect like terms"]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Expand and simplify the expression <em>(3x - 1)(x + 5)(2x - 3)</em>. Explain each step carefully.</span>",
      "hint": "<span>Start by multiplying two brackets, then multiply the result by the third. Remember to collect like terms at the end.</span>",
      "mustHaveKeywords": ["6x³", "-9x²", "25x", "-15"],
      "optionalKeywords": ["distributive law", "simplify", "like terms"],
      "modelAnswer": "<span>First multiply (3x - 1)(x + 5): 3x×x=3x², 3x×5=15x, -1×x=-x, -1×5=-5; sum: 3x² +14x -5. Next multiply this by (2x -3): 3x²×2x=6x³, 3x²×(-3)=-9x², 14x×2x=28x², 14x×(-3)=-42x, -5×2x=-10x, -5×(-3)=15. Combine like terms: 6x³ + ( -9x² + 28x²) + (-42x -10x) + 15 = 6x³ + 19x² - 52x + 15</span>",
      "scaffoldPrompts": [
        "Multiply first two brackets and simplify",
        "Multiply intermediate result by third bracket",
        "Calculate each product carefully",
        "Collect like terms to simplify"
      ]
    }
  }
};