window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.2 - Factorising quadratic expressions (Part 1)",
  "strapline": "Learn how to factorise quadratic expressions where the leading coefficient is 1 or greater than 1.",
  "learningObjectives": [
    "Students should be able to factorise quadratic expressions of the form x² + bx + c (Maths 2.2)",
    "Students should be able to factorise quadratic expressions of the form ax² + bx + c where a > 1 (Maths 2.2)"
  ],
  "step1": {
    "title": "Concept: Understanding Quadratic Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic expression</strong> is an algebraic expression where the highest power of the variable is 2. It usually has the form <em>ax<sup>2</sup> + bx + c</em>, where <em>a</em>, <em>b</em>, and <em>c</em> are constants, and <em>a ≠ 0</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of quadratic expressions like a recipe where the powers of variables represent ingredients in different amounts. The highest power (the square term) sets the main flavour.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the terms of <em>x<sup>2</sup> + 5x + 6</em>: coefficients are <em>a=1</em>, <em>b=5</em>, <em>c=6</em>.</span>",
        "<span>Recognise this is a quadratic expression because the highest power is 2.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: What is Factorising?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Factorising is the process of writing an expression as a product of its factors, which are simpler expressions that multiply to form the original one. For quadratic expressions, this 'breaks down' the quadratic into two binomials.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just like splitting a chocolate bar into smaller pieces, factorising breaks a complex expression into smaller parts that multiply back to the original.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with <em>x<sup>2</sup> + 5x + 6</em></span>",
        "<span>We want to find two binomials (x + m)(x + n) that multiply to give this expression.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding Factor Pairs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>factor pair</strong> consists of two numbers which multiply to give a product. When factorising quadratics where <em>a=1</em>, find two numbers that multiply to <em>c</em> and add up to <em>b</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like finding two numbers whose product is the area of a rectangle, but whose sum is the perimeter divided by 2.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For <em>x<sup>2</sup> + 5x + 6</em>, find factor pairs of 6: (1,6), (2,3)</span>",
        "<span>Check which pair sums to 5: 2 + 3 = 5</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying Factorising to Expressions of the form x² + bx + c",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When factorising a quadratic with <em>a = 1</em>, write the expression as <em>(x + m)(x + n)</em> where <em>m</em> and <em>n</em> are numbers found from factor pairs of <em>c</em> that add to <em>b</em>.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Factorise <em>x<sup>2</sup> + 7x + 12</em>.</span>",
        "<span>Find factor pairs of 12: (1,12), (2,6), (3,4)</span>",
        "<span>Check sums: 1+12=13, 2+6=8, 3+4=7. So use 3 and 4.</span>",
        "<span>Answer: <em>(x + 3)(x + 4)</em></span>"
      ]
    }
  },
  "step5": {
    "title": "Factorising quadratics where a > 1",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For expressions where <em>a &gt; 1</em>, factorising requires a method such as splitting the middle term. Multiply <em>a</em> and <em>c</em>, then find two numbers that multiply to <em>ac</em> and add to <em>b</em>. Then rewrite <em>bx</em> as the sum of two terms using these numbers and factor by grouping.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Factorise <em>2x<sup>2</sup> + 7x + 3</em>.</span>",
        "<span>Calculate <em>a × c = 2 × 3 = 6</em>.</span>",
        "<span>Find factor pairs of 6 that add to 7: (1, 6).</span>",
        "<span>Split the middle term: <em>2x<sup>2</sup> + 1x + 6x + 3</em>.</span>",
        "<span>Factor by grouping: <em>x(2x + 1) + 3(2x + 1)</em>.</span>",
        "<span>Final factorisation: <em>(x + 3)(2x + 1)</em>.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Factorise the quadratic expression <em>3x<sup>2</sup> + 11x + 6</em> showing all your working.</span>",
      "hint": "Remember to multiply <em>a</em> and <em>c</em> first and then find suitable factor pairs.",
      "mustHaveKeywords": ["factor pairs", "split the middle term", "factor by grouping", "binomials"],
      "optionalKeywords": ["coefficient", "grouping"],
      "modelAnswer": "<span>First, multiply <em>a × c = 3 × 6 = 18</em>. Find two numbers that multiply to 18 and add to 11 (these are 9 and 2). Rewrite the middle term as <em>9x + 2x</em>. So the expression is <em>3x<sup>2</sup> + 9x + 2x + 6</em>. Factor by grouping: <em>3x(x + 3) + 2(x + 3)</em>. The factorised form is <em>(3x + 2)(x + 3)</em>.</span>",
      "scaffoldPrompts": [
        "Multiply the first and last coefficients",
        "Find two numbers that multiply to this product and add to the middle coefficient",
        "Split the middle term accordingly",
        "Group terms and factor each group",
        "Write the final factorised expression"
      ]
    }
  }
};