window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.3 - Solving quadratic equations (Part 1)",
  "strapline": "Learn how to solve quadratic equations by factorisation and rearrange equations into standard form.",
  "learningObjectives": [
    "Students should be able to solve quadratic equations by factorisation (Maths 2.3)",
    "Students should be able to rearrange quadratic equations into the standard form ax² + bx + c = 0 before solving (Maths 2.3)"
  ],
  "step1": {
    "title": "Concept: Understanding Quadratic Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic equation</strong> is an equation where the highest power of the variable x is 2. It is usually written in the <em>standard form</em> ax<sup>2</sup> + bx + c = 0, where a, b, and c are numbers and a ≠ 0.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the equation like a recipe where you must have exactly two eggs (the x² term), some sugar (the x term), and some flour (the constant). If the eggs are missing, it’s not the recipe we want!</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the highest power of x in the equation 3x<sup>2</sup> + 5x - 2 = 0.</span>",
        "<span>The highest power of x is 2, so this is a quadratic equation in standard form.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Rearranging into Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Sometimes quadratic equations are not given in standard form. You must rearrange the equation so that one side is 0 and the other side is ax<sup>2</sup> + bx + c.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like putting everything on one side of a balance scale to see what’s left on the other side clearly.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given: x<sup>2</sup> = 4x + 5</span>",
        "<span>Subtract 4x and 5 from both sides to get x<sup>2</sup> - 4x - 5 = 0 (standard form).</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Factorisation is breaking down the quadratic expression into a product of two brackets. For example, x<sup>2</sup> + 5x + 6 can be factorised as (x + 2)(x + 3).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it like splitting a number into two smaller numbers that multiply back to the original number.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Factorise x<sup>2</sup> + 7x + 10.</span>",
        "<span>Find two numbers that multiply to 10 and add to 7: 5 and 2.</span>",
        "<span>Write as (x + 5)(x + 2).</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: The Zero Product Property",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>zero product property</strong> states that if the product of two factors is zero, at least one of the factors must be zero. This helps us solve factorised quadratic equations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If two gates are chained together and the chain is broken, at least one of the gates must be open.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Solve (x + 3)(x - 5) = 0.</span>",
        "<span>Set each bracket equal to zero: x + 3 = 0 or x - 5 = 0.</span>",
        "<span>Solve for x: x = -3 or x = 5.</span>"
      ]
    }
  },
  "step5": {
    "title": "Practice: Solving Quadratics by Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now try solving quadratic equations by factorisation after rearranging them into standard form.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Solve: x<sup>2</sup> + 4x = 5.</span>",
        "<span>Step 1: Rearrange to x<sup>2</sup> + 4x - 5 = 0.</span>",
        "<span>Step 2: Factorise: (x + 5)(x - 1) = 0.</span>",
        "<span>Step 3: Set each factor to zero: x + 5 = 0 or x - 1 = 0.</span>",
        "<span>Step 4: Solve x = -5 or x = 1.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to solve the quadratic equation 2x<sup>2</sup> - 3x = 5 by factorisation.</span>",
      "hint": "Remember to first rearrange the equation to standard form and then factorise before applying the zero product property.",
      "mustHaveKeywords": ["standard form", "factorise", "zero product property", "set each factor to zero"],
      "optionalKeywords": ["rearrange", "solve for x"],
      "modelAnswer": "<span>First, rearrange the equation so that one side is 0: 2x<sup>2</sup> - 3x - 5 = 0. Then factorise the quadratic expression (2x + 2)(x - 5/2) or equivalent factor pairs. Next, apply the zero product property: set each factor equal to zero, so 2x + 2 = 0 or x - 5/2 = 0. Finally, solve each equation for x to find the solutions.</span>",
      "scaffoldPrompts": [
        "Start by moving all terms to one side of the equals sign.",
        "Look for two numbers that multiply to a×c and add to b.",
        "Rewrite the middle term to help with factorisation.",
        "Apply the zero product property by setting each factor equal to zero.",
        "Solve each resulting linear equation."
      ]
    }
  }
};