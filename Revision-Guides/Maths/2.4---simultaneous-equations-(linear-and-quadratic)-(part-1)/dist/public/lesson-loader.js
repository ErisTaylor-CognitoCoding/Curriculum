window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.4 - Simultaneous equations (linear and quadratic) (Part 1)",
  "strapline": "Learn to solve simultaneous equations with one linear and one quadratic equation using substitution and understand these solutions as points of intersection.",
  "learningObjectives": [
    "Students should be able to solve simultaneous equations where one equation is linear and the other is quadratic using substitution methods (Maths 2.4)",
    "Students should understand that solving simultaneous equations with one linear and one quadratic equation finds the points of intersection between a straight line and a curve (Maths 2.4)"
  ],
  "step1": {
    "title": "Concept 1: Simultaneous equations (linear and quadratic)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Simultaneous equations involve finding values of <em>x</em> and <em>y</em> that satisfy more than one equation at the same time. When one equation is linear (like <strong>y = 2x + 3</strong>) and the other is quadratic (like <strong>y = x<sup>2</sup> + 5x - 2</strong>), the goal is to find points where the straight line and curve meet.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a highway (linear equation) and a mountain road (quadratic equation). The points where both roads share the same position are intersections—just like solving simultaneous equations finds where the line and curve cross.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Equation 1: y = 2x + 3</span>",
        "<span>Equation 2: y = x<sup>2</sup> + 5x - 2</span>",
        "<span>Set 2 equations equal since both equal y: 2x + 3 = x<sup>2</sup> + 5x - 2</span>",
        "<span>Rearrange to form a quadratic: 0 = x<sup>2</sup> + 5x - 2 - 2x - 3 → x<sup>2</sup> + 3x - 5 = 0</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Substitution method",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Substitution means replacing one variable with an expression from another equation. Since the linear equation expresses y in terms of x, substitute that expression into the quadratic equation to get one equation with one variable.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have two recipes where ingredient B is defined differently. Using substitution is like replacing B in one recipe with the amount from the other, so you only need to adjust one ingredient instead of two.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>From linear: y = 2x + 3</span>",
        "<span>Substitute into quadratic: (2x + 3) = x<sup>2</sup> + 5x - 2</span>",
        "<span>Create quadratic in x: x<sup>2</sup> + 5x - 2 - 2x - 3 = 0 → x<sup>2</sup> + 3x - 5 = 0</span>"
      ]
    }
  },
  "step3": {
    "title": "Solving the quadratic equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Once you have a quadratic equation from substitution, solve it using factorisation, completing the square, or the quadratic formula to find x values where both equations meet.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Solve x<sup>2</sup> + 3x - 5 = 0 using the quadratic formula: x = [-3 ± √(3² - 4×1×(-5))]/(2×1)</span>",
        "<span>Calculate inside the root: 9 + 20 = 29</span>",
        "<span>Find x values: x = [-3 ± √29]/2</span>"
      ]
    }
  },
  "step4": {
    "title": "Find corresponding y values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use each solution for x in the linear equation to calculate the corresponding y values. These (x, y) pairs are the points of intersection.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For x = [-3 + √29]/2, substitute into y = 2x + 3 to find y</span>",
        "<span>For x = [-3 - √29]/2, substitute into y = 2x + 3 to find y</span>",
        "<span>These create two points: (x<sub>1</sub>, y<sub>1</sub>) and (x<sub>2</sub>, y<sub>2</sub>)</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept 3: Points of intersection",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The solutions to simultaneous linear and quadratic equations represent the points where the graph of the line touches or crosses the parabola (curve). Depending on the discriminant, the number of solutions (points) can be 0, 1, or 2.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a straight piece of wire and a curved wire forming a shape. The spots where the two wires touch or cross are like the points of intersection found by solving the equations.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If the discriminant (b²-4ac) < 0, no real solutions → line misses the curve (0 points)</span>",
        "<span>If discriminant = 0, one solution → line touches the curve at one point (1 point)</span>",
        "<span>If discriminant > 0, two solutions → line cuts through curve at two points (2 points)</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the simultaneous equations y = x<sup>2</sup> + 4x + 1 and y = 3x + 7. Explain the steps you use to find the points of intersection.</span>",
      "hint": "Remember to substitute the linear equation into the quadratic and solve the quadratic equation carefully, then find corresponding y values.",
      "mustHaveKeywords": [
        "substitution",
        "quadratic equation",
        "solve",
        "points of intersection",
        "discriminant"
      ],
      "optionalKeywords": [
        "linear equation",
        "coordinates",
        "graph"
      ],
      "modelAnswer": "<span>First, set 3x + 7 equal to x<sup>2</sup> + 4x + 1. This gives a quadratic equation: x<sup>2</sup> + 4x + 1 = 3x + 7. Rearranged as x<sup>2</sup> + 4x + 1 - 3x - 7 = 0 → x<sup>2</sup> + x - 6 = 0. Solve this quadratic for x using factorisation or the quadratic formula. The solutions are x = 2 and x = -3. Substitute these x values into y = 3x + 7 to find y = 13 when x = 2 and y = -2 when x = -3. Therefore, the points of intersection are (2, 13) and (-3, -2).</span>",
      "scaffoldPrompts": [
        "Write down both equations.",
        "Substitute y from the linear into the quadratic equation.",
        "Simplify to form a quadratic equation in x.",
        "Solve the quadratic equation for x.",
        "Use values of x in the linear equation to find y.",
        "State the points of intersection."
      ]
    }
  }
};