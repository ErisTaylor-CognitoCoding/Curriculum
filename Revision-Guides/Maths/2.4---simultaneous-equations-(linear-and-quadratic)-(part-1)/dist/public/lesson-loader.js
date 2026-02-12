window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.4 - Simultaneous equations (linear and quadratic) (Part 1)",
  "strapline": "Learn how to solve simultaneous equations where one is linear and the other quadratic using substitution and understand the intersection points of lines and curves.",
  "learningObjectives": [
    "Students should be able to solve simultaneous equations where one equation is linear and the other is quadratic using substitution methods (Maths 2.4)",
    "Students should understand that solving simultaneous equations with one linear and one quadratic equation finds the points of intersection between a straight line and a curve (Maths 2.4)",
    ""
  ],
  "keyFormulas": [
    "y = mx + c (Equation of a straight line)",
    "y = ax² + bx + c (Equation of a quadratic curve)",
    "Substitution involves replacing one variable with an expression from another equation"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#333' /><circle cx='200' cy='150' r='60' fill='none' stroke='#2a9d8f' stroke-width='2'/><line x1='100' y1='220' x2='300' y2='80' stroke='#e76f51' stroke-width='2'/><text x='210' y='75' font-family='sans-serif' font-size='14' fill='#e76f51'>y = linear</text><text x='120' y='210' font-family='sans-serif' font-size='14' fill='#2a9d8f'>y = quadratic</text></svg>",
  "step1": {
    "title": "Concept 1: What are Simultaneous Equations (Linear and Quadratic)?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Simultaneous equations are two or more equations containing the same variables. When one is a straight line (linear) and the other is a curve (quadratic), solving them together means finding the values that satisfy <em>both</em> equations at the same time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two roads on a map: one is a straight highway, the other a winding mountain road. Where they cross are points both paths share — just like solving simultaneous equations to find where the line and curve meet.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Equation 1: y = 2x + 3 (linear)</span>",
        "<span>Equation 2: y = x² + 5x - 2 (quadratic)</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Understanding the Substitution Method",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The substitution method replaces one variable in one equation with an expression from the other equation. For linear and quadratic pairs, substitute the linear equation for y into the quadratic equation to get a single quadratic in terms of x.</p>",
    "workedExample": {
      "title": "Worked Example (cont.)",
      "bullets": [
        "<span>Substitute y from the linear eqn into the quadratic: 2x + 3 = x² + 5x - 2</span>",
        "<span>Rearrange to get 0 = x² + 5x - 2 - 2x - 3 → 0 = x² + 3x - 5</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Finding Points of Intersection",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The solutions to simultaneous equations give you the (x, y) points where the line and curve intersect on a graph. These intersections correspond to the real roots of the quadratic you get after substitution.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just like the meeting points of two paths on a hiking trail, the intersection points tell us exactly where the line crosses the curve — could be none, one (touching), or two points.</p>"
    }
  },
  "step4": {
    "title": "Step-by-Step Solution Procedure",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">1. Rearrange the linear equation so y or x is alone (if not already).<br>2. Substitute that expression into the quadratic equation.<br>3. Simplify to form a quadratic equation in one variable.<br>4. Solve the quadratic (using factorising, formula or completing the square).<br>5. Use each solution to find the corresponding y value from the linear equation.<br>6. Write your final answers as coordinate pairs (x, y).</p>"
  },
  "step5": {
    "title": "Example Problem: Solve Using Substitution",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Solve the simultaneous equations:<br>y = x + 1<br>y = x² - 3</p>",
    "workedExample": {
      "title": "Solution Steps",
      "bullets": [
        "<span>Substitute y = x + 1 into y = x² - 3:</span>",
        "<span>x + 1 = x² - 3</span>",
        "<span>Rearranged: 0 = x² - x - 4</span>",
        "<span>Solve quadratic: (x - 2)(x + 2) does not factorise nicely, use formula</span>",
        "<span>Use quadratic formula to find x: x = [1 ± sqrt(1 + 16)] / 2</span>",
        "<span>Find corresponding y values by substituting x back into y = x + 1</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the simultaneous equations using substitution:<br>y = 3x - 2<br>y = x² + x + 1</span>",
      "hint": "Remember to replace y with 3x - 2 in the quadratic equation and then solve the resulting quadratic equation.",
      "mustHaveKeywords": ["substitution", "quadratic equation", "points of intersection"],
      "optionalKeywords": ["discriminant", "coordinate pairs"],
      "modelAnswer": "<span>First, substitute y = 3x - 2 into y = x² + x + 1 to get 3x - 2 = x² + x + 1. Rearranged, this becomes 0 = x² + x + 1 - 3x + 2 ⇒ 0 = x² - 2x + 3. Then solve this quadratic equation using the quadratic formula. The discriminant is negative, so there are no real solutions, meaning the line does not intersect the curve. Therefore, there are no points of intersection.</span>",
      "scaffoldPrompts": [
        "Write down the substitution step",
        "Rearrange to form a quadratic in terms of x",
        "Calculate the discriminant",
        "Interpret the discriminant to find how many intersections",
        "Find coordinate points if real solutions exist"
      ]
    }
  }
};