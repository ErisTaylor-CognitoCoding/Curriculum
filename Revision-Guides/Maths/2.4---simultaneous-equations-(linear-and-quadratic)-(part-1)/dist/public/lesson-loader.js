window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.4 - Simultaneous equations (linear and quadratic) (Part 1)",
  "strapline": "Learn to solve systems with one linear and one quadratic equation using substitution and understand their graphical intersections.",
  "learningObjectives": [
    "Students should be able to solve simultaneous equations where one equation is linear and the other is quadratic using substitution methods (Maths 2.4)",
    "Students should understand that solving simultaneous equations with one linear and one quadratic equation finds the points of intersection between a straight line and a curve (Maths 2.4)"
  ],
  "step1": {
    "title": "Concept: Simultaneous equations (linear and quadratic)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Simultaneous equations are a pair of equations with different expressions involving the same variables. Here, one is linear (for example, y = 2x + 3) and the other is quadratic (for example, y = x<sup>2</sup> + 5x - 2). Solving them together means finding values for x and y that satisfy both equations at once.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two roads crossing a valley on different paths — one is straight and the other curves up and down like a hill. The points where the roads meet are the intersection points we try to find when solving these equations.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given y = 2x + 3 and y = x<sup>2</sup> - x, we know both equal y.</span>",
        "<span>Set 2x + 3 = x<sup>2</sup> - x to find x.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Substitution method",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The substitution method involves replacing one variable with an expression from the other equation. For linear and quadratic pairs, substitute y from the linear equation into the quadratic one to get a quadratic equation in terms of x only.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like plugging one puzzle piece exactly into another — once fitted, you can see the full shape of the solution.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with y = 2x + 3, substitute into y = x<sup>2</sup> - x to get 2x + 3 = x<sup>2</sup> - x.</span>",
        "<span>Rearrange to form a quadratic: 0 = x<sup>2</sup> - 3x - 3.</span>"
      ]
    }
  },
  "step3": {
    "title": "Skill: Rearranging to form quadratic equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rearrange the equation from step 2 to the standard quadratic form ax<sup>2</sup> + bx + c = 0 so you can solve it using factorisation, completing the square, or the quadratic formula.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of cleaning up your desk — putting things in order helps you work faster and easier.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Rewrite 2x + 3 = x<sup>2</sup> - x as x<sup>2</sup> - 3x - 3 = 0 by subtracting 2x + 3 from both sides.</span>",
        "<span>Now the quadratic is ready to solve.</span>"
      ]
    }
  },
  "step4": {
    "title": "Skill: Solving the quadratic equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Solve the quadratic equation using the quadratic formula: x = [-b ± √(b<sup>2</sup> - 4ac)] / 2a, or by factorisation if possible. This gives the x-coordinates where the line and curve intersect.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This is like finding the 'keys' to unlock the solution for x.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For x<sup>2</sup> - 3x - 3 = 0, use a=1, b=-3, c=-3.</span>",
        "<span>Calculate discriminant: (-3)<sup>2</sup> - 4(1)(-3) = 9 + 12 = 21.</span>",
        "<span>Find x = [3 ± √21] / 2.</span>"
      ]
    }
  },
  "step5": {
    "title": "Skill: Finding corresponding y-values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Substitute the x-values back into the linear equation (e.g., y = 2x + 3) to calculate the corresponding y-values for the points of intersection.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">After finding where the roads cross on the x-axis, check the height (y) at those spots to know the exact meeting points.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Use x = (3 + √21)/2 in y = 2x + 3 to find y.</span>",
        "<span>Also use x = (3 - √21)/2 in y = 2x + 3 for the other y.</span>"
      ]
    }
  },
  "step6": {
    "title": "Concept: Points of intersection",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The solutions (x, y) represent points where the straight line meets the curve on a graph. Depending on the discriminant, there can be 0 (no intersection), 1 (tangent), or 2 (two points crossing) solutions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two roads passing by a hill: they might not meet, just touch, or cross twice depending on their paths.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Here, the discriminant was positive, showing 2 intersections at (x, y), found from previous steps.</span>",
        "<span>Graphing confirms the line crosses the curve twice.</span>"
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the simultaneous equations y = 3x - 1 and y = x<sup>2</sup> + x + 1 and explain what your solutions mean graphically.</span>",
      "hint": "<span>Remember to substitute y from the linear equation into the quadratic, rearrange into standard form, solve the quadratic, then find y values. Finally, interpret each solution as points of intersection.</span>",
      "mustHaveKeywords": ["substitution", "quadratic equation", "discriminant", "points of intersection", "linear and quadratic"],
      "optionalKeywords": ["graph", "roots", "real solutions", "intersection points"],
      "modelAnswer": "<span>First, substitute y = 3x - 1 into y = x<sup>2</sup> + x + 1 giving 3x - 1 = x<sup>2</sup> + x + 1. Rearrange to 0 = x<sup>2</sup> - 2x + 2. Solve the quadratic equation using the discriminant b<sup>2</sup> - 4ac = (-2)<sup>2</sup> - 4(1)(2) = 4 - 8 = -4, which is less than zero, so there are no real solutions. This means the line and curve do not intersect on the graph.</span>",
      "scaffoldPrompts": [
        "Substitute y from the linear into quadratic equation.",
        "Rearrange the equation to 0 = ax<sup>2</sup> + bx + c form.",
        "Calculate the discriminant to check the number of solutions.",
        "Solve for x if possible, then find y using the linear equation.",
        "Explain the number of intersection points on the graph based on your solutions."
      ]
    }
  }
};