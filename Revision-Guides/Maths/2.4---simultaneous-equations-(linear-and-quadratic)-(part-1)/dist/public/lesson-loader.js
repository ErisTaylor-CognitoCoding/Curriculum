window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.4 - Simultaneous equations (linear and quadratic) (Part 1)",
  "strapline": "Learn how to solve simultaneous equations where one is linear and the other is quadratic using substitution, and understand how these solutions represent points of intersection between a line and a curve.",
  "learningObjectives": [
    "Students should be able to solve simultaneous equations where one equation is linear and the other is quadratic using substitution methods (Maths 2.4)",
    "Students should understand that solving simultaneous equations with one linear and one quadratic equation finds the points of intersection between a straight line and a curve (Maths 2.4)",
    ""
  ],
  "keyFormulas": [
    "Concept 1: Simultaneous equations (linear and quadratic) - For example, y = 2x + 3 and y = x² + 5x - 2.",
    "Concept 2: Substitution method - Substitute y = 2x + 3 into y = x² + 5x - 2 to get x² + 5x - 2 = 2x + 3.",
    "Concept 3: Points of intersection - The solution(s) to the simultaneous equations represent the (x, y) points where the line meets the curve on a graph."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#e8f0fe' stroke='#2a5db0' stroke-width='2'/><path d='M60 260 Q 150 100 340 200' stroke='#d32f2f' stroke-width='3' fill='none'/><line x1='50' y1='220' x2='350' y2='120' stroke='#388e3c' stroke-width='3'/><text x='60' y='80' font-family='Arial' font-size='12' fill='#d32f2f'>Curve: y = x² + 5x - 2</text><text x='200' y='50' font-family='Arial' font-size='12' fill='#388e3c'>Line: y = 2x + 3</text><circle cx='130' cy='180' r='5' fill='#000'/><circle cx='280' cy='160' r='5' fill='#000'/><text x='140' y='175' font-family='Arial' font-size='11'>Intersection</text></svg>",
  "step1": {
    "title": "Concept: Understanding Simultaneous Equations (Linear and Quadratic)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Simultaneous equations involve finding values of variables that satisfy both equations. Here, one is a straight line (linear) and the other is a curve (quadratic). They can have zero, one, or two solutions depending on how the line and curve intersect.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a road (the straight line) crossing a hill (the curve). The points where the road meets the hill are the intersections we want to find.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Equations",
      "problem": "Given y = 2x + 3 and y = x² + 5x - 2, identify which is linear and which is quadratic.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which equation represents a straight line?",
          "answer": "y = 2x + 3",
          "feedback": "Correct. y = 2x + 3 is linear because x has a power of 1."
        },
        {
          "id": "q2",
          "prompt": "Which equation represents a curve (quadratic)?",
          "answer": "y = x² + 5x - 2",
          "feedback": "Right! y = x² + 5x - 2 is quadratic because of the x² term."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: The Substitution Method",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To solve these simultaneous equations, we substitute the linear equation's expression for y into the quadratic equation. This eliminates y and leaves one equation with only x.</p>",
    "workedExample": {
      "title": "Worked Example: Setting Up the Substitution",
      "problem": "Use substitution to write one quadratic equation in x from these two equations:<br>y = 2x + 3 and y = x² + 5x - 2.",
      "questions": [
        {
          "id": "q3",
          "prompt": "Substitute y = 2x + 3 into y = x² + 5x - 2. Write the resulting equation.",
          "answer": "2x + 3 = x² + 5x - 2",
          "feedback": "Correct. Substituted the linear expression for y into the quadratic."
        },
        {
          "id": "q4",
          "prompt": "Rewrite the equation as: 0 = x² + 5x - 2 - 2x - 3. What is it simplified to?",
          "answer": "0 = x² + 3x - 5",
          "feedback": "Good! Simplify terms to 0 = x² + 3x - 5."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Solving the Quadratic Equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now, solve the quadratic equation 0 = x² + 3x - 5 to find the x-values where the line and curve intersect.</p>",
    "workedExample": {
      "title": "Worked Example: Using the Quadratic Formula",
      "problem": "Solve 0 = x² + 3x - 5 for x using the quadratic formula: x = [-b ± √(b² - 4ac)] / 2a.",
      "questions": [
        {
          "id": "q5",
          "prompt": "Identify a, b, and c in the equation x² + 3x - 5 = 0.",
          "answer": "a=1, b=3, c=-5",
          "feedback": "Correct. a=1, b=3, and c=-5."
        },
        {
          "id": "q6",
          "prompt": "Calculate the discriminant: b² - 4ac.",
          "answer": "3² - 4 × 1 × (-5) = 9 + 20 = 29",
          "feedback": "Well done! Discriminant is 29."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Finding the x-values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the quadratic formula and the discriminant to find the two possible values of x, which will give the points of intersection.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate x-values",
      "problem": "Find the two x-values for x = [-3 ± √29] / 2.",
      "questions": [
        {
          "id": "q7",
          "prompt": "Calculate x = (-3 + √29) / 2 (round to 2 decimal places).",
          "answer": "1.19",
          "feedback": "Correct! x ≈ 1.19."
        },
        {
          "id": "q8",
          "prompt": "Calculate x = (-3 - √29) / 2 (round to 2 decimal places).",
          "answer": "-4.19",
          "feedback": "Correct! x ≈ -4.19."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Finding the Corresponding y-values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Substitute each x-value back into the linear equation y = 2x + 3 to find the matching y-values for the points of intersection.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate y-values",
      "problem": "Find y for each x from step 4 using y = 2x + 3.",
      "questions": [
        {
          "id": "q9",
          "prompt": "Find y when x = 1.19 (rounded to 2 decimal places).",
          "answer": "5.38",
          "feedback": "Correct! y = 2(1.19) + 3 = 5.38."
        },
        {
          "id": "q10",
          "prompt": "Find y when x = -4.19 (rounded to 2 decimal places).",
          "answer": "-5.38",
          "feedback": "Correct! y = 2(-4.19) + 3 = -5.38."
        }
      ]
    }
  },
  "step6": {
    "title": "Concept: Points of Intersection",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The solutions are the points where the line and curve cross: (1.19, 5.38) and (-4.19, -5.38). Sometimes, there may be one or zero points depending on the discriminant.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If the road just touches the hill (one intersection), it is called a tangent. If it doesn't meet at all, there are no intersections.</p>"
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the simultaneous equations:<br>y = 3x - 4<br>y = x² + x + 1<br>Find the points of intersection between the line and the curve.</span>",
      "hint": "Substitute y = 3x - 4 into the quadratic equation to form a single quadratic equation in x. Then solve for x using the quadratic formula or by factorisation if possible.",
      "mustHaveKeywords": ["substitution", "quadratic formula", "discriminant", "points of intersection"],
      "optionalKeywords": ["real roots", "solutions", "coordinates"],
      "modelAnswer": "<span>Substitute y = 3x - 4 into y = x² + x + 1 to get 3x - 4 = x² + x + 1.<br>Rearranged: 0 = x² + x + 1 - 3x + 4 → 0 = x² - 2x + 5.<br>Calculate the discriminant: (-2)² - 4×1×5 = 4 - 20 = -16.<br>Since the discriminant is negative, there are no real points of intersection. The line does not cross the curve.</span>",
      "scaffoldPrompts": [
        "Step 1: Write down both equations.",
        "Step 2: Substitute the linear equation expression for y into the quadratic.",
        "Step 3: Simplify to form a quadratic equation equal to zero.",
        "Step 4: Calculate the discriminant to determine the number of solutions.",
        "Step 5: Conclude how many points of intersection exist based on the discriminant."
      ]
    }
  }
};