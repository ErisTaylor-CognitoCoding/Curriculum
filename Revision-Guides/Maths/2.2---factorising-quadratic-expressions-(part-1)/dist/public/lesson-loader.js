window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.2 - Factorising quadratic expressions (Part 1)",
  "strapline": "Learn how to factorise quadratic expressions in the forms x² + bx + c and ax² + bx + c where a > 1",
  "learningObjectives": [
    "Students should be able to factorise quadratic expressions of the form x² + bx + c (Maths 2.2)",
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a > 1 (Maths 2.2)"
  ],
  "step1": {
    "title": "Concept 1: Quadratic Expression",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic expression</strong> is an algebraic expression where the highest power of the variable is 2, typically in the form <em>ax<sup>2</sup> + bx + c</em>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine building a rectangular garden. The <em>length</em> and <em>width</em> may change, but the total area depends on the square of one dimension plus some linear and constant components, like in a quadratic expression.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the quadratic expression: <em>x<sup>2</sup> + 5x + 6</em></span>",
        "<span>The highest power is 2, confirming it is quadratic</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Factorising",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Factorising is the process of breaking down an expression into a product of simpler expressions (factors). It is the reverse operation of expansion.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like breaking a Lego model into smaller bricks. Factorising takes a big expression and splits it into smaller parts which multiply to give the original.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Take <em>x<sup>2</sup> + 5x + 6</em></span>",
        "<span>Find expressions that multiply to give this: (x + 2)(x + 3)</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Factor Pairs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>factor pair</strong> consists of two numbers which multiply together to give a specific product. When factorising quadratic expressions of the form <em>x<sup>2</sup> + bx + c</em>, we look for factor pairs of <em>c</em> that add to give <em>b</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of factor pairs like pairs of socks in a drawer. You need two socks (numbers) that fit together (multiply) perfectly to make a pair (the product), and the pair’s combined length is like their sum.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For the quadratic <em>x<sup>2</sup> + 5x + 6</em>, the product is 6 and the sum is 5</span>",
        "<span>Factor pairs of 6: (1,6) and (2,3)</span>",
        "<span>Only (2,3) sum to 5, so factors are (x + 2)(x + 3)</span>"
      ]
    }
  },
  "step4": {
    "title": "Step-by-step Factorising Quadratics of the form x² + bx + c",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To factorise quadratics where the coefficient of <em>x<sup>2</sup></em> is 1:</p><ul><li>Find two numbers that multiply to <em>c</em> and add to <em>b</em>.</li><li>Write the quadratic as a product of two binomials using these two numbers.</li></ul>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Factorise <em>x<sup>2</sup> + 7x + 12</em></span>",
        "<span>Factors of 12: (1,12), (2,6), (3,4)</span>",
        "<span>Sum that equals 7 is (3,4)</span>",
        "<span>Answer: (x + 3)(x + 4)</span>"
      ]
    }
  },
  "step5": {
    "title": "Factorising Quadratics of the form ax² + bx + c where a > 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For quadratics where <em>a</em> is greater than 1, factorising is more complex. One method is to multiply <em>a</em> and <em>c</em>, then find factor pairs of this product that add to <em>b</em>.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Factorise 2x<sup>2</sup> + 7x + 3</span>",
        "<span>Multiply a and c: 2 × 3 = 6</span>",
        "<span>Find two numbers that multiply to 6 and add to 7: (6,1)</span>",
        "<span>Rewrite 7x as 6x + 1x: 2x<sup>2</sup> + 6x + 1x + 3</span>",
        "<span>Factor by grouping: 2x(x + 3) + 1(x + 3)</span>",
        "<span>Final factorised form: (2x + 1)(x + 3)</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Factorise the quadratic expression <em>3x<sup>2</sup> + 11x + 6</em>.</span>",
      "hint": "Remember to multiply <em>a</em> and <em>c</em> first, then find factor pairs that add to <em>b</em>.",
      "mustHaveKeywords": ["factor pairs", "multiply", "add", "grouping"],
      "optionalKeywords": ["factorising", "common factor"],
      "modelAnswer": "<span>First multiply a and c: 3×6=18. Then find factor pairs of 18 that add to 11: (9,2). Rewrite 11x as 9x + 2x: 3x² + 9x + 2x + 6. Group terms: 3x(x + 3) + 2(x + 3). Factor out common binomial: (3x + 2)(x + 3).</span>",
      "scaffoldPrompts": [
        "Multiply the coefficient a by the constant c",
        "Find factor pairs of that number which add to b",
        "Rewrite the middle term using these two numbers",
        "Group the terms and factor each group",
        "Write down the common binomial factor"
      ]
    }
  }
};