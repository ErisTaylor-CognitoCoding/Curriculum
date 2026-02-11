window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.3 - Solving quadratic equations (Part 1)",
  "strapline": "Learn how to solve quadratic equations by factorisation and rearranging them into standard form.",
  "learningObjectives": [
    "Students should be able to solve quadratic equations by factorisation (Maths 2.3)",
    "Students should be able to rearrange quadratic equations into the standard form ax² + bx + c = 0 before solving (Maths 2.3)"
  ],
  "step1": {
    "title": "Concept: What is a quadratic equation?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A quadratic equation is an equation where the highest power of the variable x is 2. It can always be written in the standard form <strong>ax² + bx + c = 0</strong>, where a, b, and c are numbers and <em>a ≠ 0</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a quadratic equation like a recipe where the highest ingredient (x) is squared, like flour measured in a special squared bowl. This bowl's size affects everything else in the recipe.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Example: Write <em>x² + 5x = 6</em> in standard form.</span>",
        "<span>Step 1: Subtract 6 from both sides to get <em>x² + 5x - 6 = 0</em>.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Factorisation is breaking down expressions into brackets (called factors) that multiply to give the original expression. Factorising helps solve quadratic equations by turning them into a product of two expressions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like taking apart a machine into smaller parts to see how it works, then putting it back together by multiplying the parts.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Example: Factorise <em>x² + 5x + 6</em>.</span>",
        "<span>Find two numbers that multiply to 6 and add to 5: 2 and 3.</span>",
        "<span>So, factorised form is <em>(x + 2)(x + 3)</em>.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Zero Product Property",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The zero product property states that if the product of two factors is zero, then at least one of those factors must be zero. This allows us to solve the equation when it is factorised.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If two pipes are joined and no water flows through, at least one pipe must be blocked.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If (x + 2)(x + 3) = 0, then either x + 2 = 0 or x + 3 = 0.</span>",
        "<span>Solving each: x = -2 or x = -3.</span>"
      ]
    }
  },
  "step4": {
    "title": "Step-by-step: Rearranging quadratic equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To solve, the quadratic equation must be in standard form <em>ax² + bx + c = 0</em>. If it is not, rearrange it by moving all terms to one side.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Solve: x² = 3x + 4</span>",
        "<span>Step 1: Subtract 3x and 4 from both sides: x² - 3x - 4 = 0</span>",
        "<span>Now ready to factorise and solve.</span>"
      ]
    }
  },
  "step5": {
    "title": "Practice: Factorisation and solving",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use what you have learned to factorise and solve quadratic equations.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Solve: x² + x - 6 = 0</span>",
        "<span>Find numbers that multiply to -6 and add to 1: 3 and -2</span>",
        "<span>Factorise: (x + 3)(x - 2) = 0</span>",
        "<span>Use zero product property: x = -3 or x = 2</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the quadratic equation by factorisation: 2x² + 7x - 15 = 0. Show all steps clearly.</span>",
      "hint": "First rearrange if needed, then factorise the quadratic expression. Use zero product property to find solutions.",
      "mustHaveKeywords": [
        "standard form",
        "factorisation",
        "zero product property",
        "solutions"
      ],
      "optionalKeywords": [
        "common factor",
        "product-sum method"
      ],
      "modelAnswer": "<span>Step 1: The equation 2x² + 7x - 15 = 0 is already in standard form. <br>Step 2: Factorise 2x² + 7x -15. <br>Step 3: Find two numbers that multiply to 2 × -15 = -30 and add to 7 (10 and -3).<br>Step 4: Rewrite 7x as 10x - 3x: 2x² + 10x - 3x - 15 = 0.<br>Step 5: Factor by grouping: 2x(x + 5) - 3(x + 5) = 0.<br>Step 6: Factor out (x + 5): (2x - 3)(x + 5) = 0.<br>Step 7: Apply zero product property: 2x - 3 = 0 or x + 5 = 0.<br>Step 8: Solve each: x = 3/2 or x = -5.</span>",
      "scaffoldPrompts": [
        "Is the quadratic in standard form?",
        "What multiplies to ac and adds to b?",
        "How do you split the middle term?",
        "How do you factor by grouping?",
        "What happens when the product is zero?"
      ]
    }
  }
};