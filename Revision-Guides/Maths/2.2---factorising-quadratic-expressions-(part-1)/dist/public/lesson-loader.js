window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.2 - Factorising quadratic expressions (Part 1)",
  "strapline": "Learn how to factorise quadratic expressions of the forms x² + bx + c and ax² + bx + c where a > 1",
  "learningObjectives": [
    "Students should be able to factorise quadratic expressions of the form x² + bx + c (Maths 2.2)",
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a > 1 (Maths 2.2)"
  ],
  "step1": {
    "title": "Concept: What is a Quadratic Expression?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic expression</strong> is an algebraic expression where the highest power of the variable is 2. It usually takes the form <em>ax<sup>2</sup> + bx + c</em>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants. Here, <em>a</em> ≠ 0.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a quadratic expression as a family recipe with three main ingredients: one for the squared term, one for the single variable term, and one constant to add flavor. Just like combining ingredients gives you a unique dish, these terms combine to form the quadratic.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the terms in the expression: 3x<sup>2</sup> + 5x + 2</span>",
        "<span>Here, a = 3, b = 5, and c = 2.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: What is Factorising?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Factorising is the process of breaking down an expression into a product of simpler expressions called factors. For quadratics, it's the reverse of expanding brackets.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a puzzle picture made from multiple pieces (factors). Factorising is like seeing the full picture and figuring out how it breaks down into individual puzzle pieces.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Factorise x<sup>2</sup> + 5x + 6.</span>",
        "<span>Find two numbers that multiply to 6 and add to 5: 2 and 3.</span>",
        "<span>So, x<sup>2</sup> + 5x + 6 = (x + 2)(x + 3).</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding Factor Pairs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Factor pairs are two numbers that multiply to give a specific product. When factorising quadratics of the form x<sup>2</sup> + bx + c, identifying two factor pairs of <em>c</em> that add up to <em>b</em> is essential.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of factor pairs like matching socks in a drawer: you search through pairs to find the perfect match that fits together to form the correct sum.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find factor pairs of 12: (1, 12), (2, 6), (3, 4).</span>",
        "<span>Look for the pair that adds to 7: (3 + 4 = 7).</span>"
      ]
    }
  },
  "step4": {
    "title": "Step-by-step: Factorising x² + bx + c",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Follow these steps to factorise a quadratic of the form x<sup>2</sup> + bx + c.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Example: Factorise x<sup>2</sup> + 8x + 15.</span>",
        "<span>Step 1: Identify c = 15.</span>",
        "<span>Step 2: Find factor pairs of 15: (1,15), (3,5).</span>",
        "<span>Step 3: Find the pair which sums to b = 8: 3 + 5 = 8.</span>",
        "<span>Step 4: Write the factorised form: (x + 3)(x + 5).</span>"
      ]
    }
  },
  "step5": {
    "title": "Step-by-step: Factorising ax² + bx + c where a > 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When <em>a</em> is greater than 1, the factorising process requires an additional step known as 'splitting the middle term' to help find appropriate factors.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Example: Factorise 2x<sup>2</sup> + 7x + 3.</span>",
        "<span>Step 1: Multiply a and c: 2 × 3 = 6.</span>",
        "<span>Step 2: Find factor pairs of 6 that add to b = 7: (6, 1).</span>",
        "<span>Step 3: Split middle term: 2x<sup>2</sup> + 6x + 1x + 3.</span>",
        "<span>Step 4: Group terms: (2x<sup>2</sup> + 6x) + (1x + 3).</span>",
        "<span>Step 5: Factor each group: 2x(x + 3) + 1(x + 3).</span>",
        "<span>Step 6: Factor out common binomial: (2x + 1)(x + 3).</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Factorise the quadratic expression 3x<sup>2</sup> + 11x + 6 and explain your method step-by-step.</span>",
      "hint": "Remember to multiply a and c, find factor pairs of the product that add to b, and then use grouping.",
      "mustHaveKeywords": ["multiply a and c", "factor pairs", "split the middle term", "grouping", "common binomial"],
      "optionalKeywords": ["trial and error", "checking answer by expansion"],
      "modelAnswer": "<span>First, multiply a and c: 3 × 6 = 18. Then find two numbers that multiply to 18 and add to 11: 9 and 2. Split the middle term: 3x<sup>2</sup> + 9x + 2x + 6. Group terms: (3x<sup>2</sup> + 9x) + (2x + 6). Factor each group: 3x(x + 3) + 2(x + 3). Finally, factor out the common binomial: (3x + 2)(x + 3).</span>",
      "scaffoldPrompts": [
        "What is the product of a and c?",
        "Which factor pairs of the product add to b?",
        "How can you split the middle term using these factor pairs?",
        "Try grouping and factoring out common terms."
      ]
    }
  }
};