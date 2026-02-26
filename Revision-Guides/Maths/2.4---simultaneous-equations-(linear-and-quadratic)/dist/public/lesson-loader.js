window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.4 - Simultaneous equations (linear and quadratic)",
  "strapline": "Learn to solve and interpret simultaneous equations where one is linear and the other quadratic, using substitution and graphical methods.",
  "learningObjectives": [
    "Students should be able to solve simultaneous equations where one equation is linear and the other is quadratic using substitution methods (Maths 2.4)",
    "Students should be able to interpret solutions graphically as points of intersection between a linear and quadratic graph (Maths 2.4)"
  ],
  "keyFormulas": [
    "Linear equation: y = mx + c",
    "Quadratic equation: y = ax\u00b2 + bx + c",
    "Substitution method: Replace y in one equation with its expression from the other equation"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='20' width='320' height='260' fill='#f9f9f9' stroke='#222' /><line x1='60' y1='250' x2='340' y2='50' stroke='#0074d9' stroke-width='2' /><path d='M60 230 Q150 30 340 110' stroke='#ff4136' fill='none' stroke-width='2' /><circle cx='140' cy='100' r='4' fill='#2ecc40' /><circle cx='280' cy='140' r='4' fill='#2ecc40' /><text x='50' y='270' font-family='sans-serif' font-size='10'>x-axis</text><text x='10' y='30' font-family='sans-serif' font-size='10'>y-axis</text><text x='350' y='55' font-family='sans-serif' font-size='12' fill='#0074d9'>Linear</text><text x='350' y='120' font-family='sans-serif' font-size='12' fill='#ff4136'>Quadratic</text><text x='150' y='90' font-family='sans-serif' font-size='12' fill='#2ecc40'>Intersection points</text></svg>",
  "step1": {
    "title": "Understanding Simultaneous Equations (Linear and Quadratic)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Simultaneous equations consist of two equations with two variables. In this topic, one is <strong>linear</strong> (a straight line, e.g., y = 2x + 1) and the other is <strong>quadratic</strong> (a parabola, e.g., y = x\u00b2 - 3x + 2). The solution is the set of x and y values that satisfy <em>both</em> equations at the same time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two roads: one is a straight highway (linear) and the other a curved mountain road (quadratic). The intersections of these roads represent the solutions to the simultaneous equations.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Equations",
      "problem": "Identify if the following are linear or quadratic equations: <br> 1) y = 3x + 4, <br> 2) y = x\u00b2 + 2x - 1.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is y = 3x + 4 linear or quadratic?",
          "answer": "linear",
          "feedback": "Correct. This equation is linear because x is to the first power."
        },
        {
          "id": "q2",
          "prompt": "Is y = x\u00b2 + 2x - 1 linear or quadratic?",
          "answer": "quadratic",
          "feedback": "Correct. This is quadratic because it contains an x squared term."
        }
      ]
    }
  },
  "step2": {
    "title": "Introducing the Substitution Method",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To solve simultaneous equations, we can express one variable from the linear equation and substitute it into the quadratic. This removes one variable and lets us solve for the other.</p>",
    "workedExample": {
      "title": "Worked Example: Starting Substitution",
      "problem": "Given the system: <br> y = 2x + 1 <br> y = x\u00b2 - 3x + 2 <br> Rearrange the linear equation to express y in terms of x (already done here). What is y equal to?",
      "questions": [
        {
          "id": "q3",
          "prompt": "What does y equal according to the linear equation?",
          "answer": "2x + 1",
          "feedback": "Well done, y = 2x + 1."
        }
      ]
    }
  },
  "step3": {
    "title": "Applying Substitution to Solve for x",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Since y = 2x + 1, substitute this into the quadratic to form one equation in x only. Solve this quadratic equation to find the x values where the line and parabola intersect.</p>",
    "workedExample": {
      "title": "Worked Example: Substituting y",
      "problem": "Substitute y = 2x + 1 into y = x\u00b2 - 3x + 2. Write the resulting equation.",
      "questions": [
        {
          "id": "q4",
          "prompt": "Write the equation after substitution: 2x + 1 = x\u00b2 - 3x + 2",
          "answer": "2x + 1 = x^2 - 3x + 2",
          "feedback": "Correct! Now rearrange this equation to standard form."
        },
        {
          "id": "q5",
          "prompt": "Rearrange to standard quadratic form: 0 = x\u00b2 - 3x + 2 - 2x - 1",
          "answer": "0 = x^2 - 5x + 1",
          "feedback": "Excellent. Now solve this quadratic equation."
        }
      ]
    }
  },
  "step4": {
    "title": "Solving the Quadratic Equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find values of x, solve the quadratic equation found in the previous step. Use the quadratic formula if needed: x = [-b ± √(b² - 4ac)] / 2a.</p>",
    "workedExample": {
      "title": "Worked Example: Quadratic Formula",
      "problem": "Solve x\u00b2 - 5x + 1 = 0 using the quadratic formula.",
      "questions": [
        {
          "id": "q6",
          "prompt": "Identify a, b, and c in ax\u00b2 + bx + c = 0",
          "answer": "a=1, b=-5, c=1",
          "feedback": "Correct. a = 1, b = -5, c = 1."
        },
        {
          "id": "q7",
          "prompt": "Calculate the discriminant: b\u00b2 - 4ac",
          "answer": "21",
          "feedback": "Good. Discriminant = (-5)\u00b2 - 4\u00d71\u00d71 = 25 - 4 = 21."
        },
        {
          "id": "q8",
          "prompt": "Write the formula for x using the discriminant",
          "answer": "x = [5 \u00b1 \u221a21]/2",
          "feedback": "Excellent."
        }
      ]
    }
  },
  "step5": {
    "title": "Finding Corresponding y Values and Interpreting Solutions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the x values found to calculate y values from the linear equation. These pairs (x,y) are the solutions to the simultaneous equations and correspond to intersection points on the graph.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate y",
      "problem": "If x = (5 + √21)/2, find y using y = 2x + 1.",
      "questions": [
        {
          "id": "q9",
          "prompt": "Calculate y = 2x + 1 for x = (5 + √21)/2",
          "answer": "6 + \u221a21",
          "feedback": "Correct. Simplify carefully to find exact or approximate y."
        },
        {
          "id": "q10",
          "prompt": "Explain what these (x, y) points represent graphically.",
          "answer": "Points of intersection",
          "feedback": "Right! These points are where the line and parabola cross."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='20' width='320' height='260' fill='#fff8dc' stroke='#222' /><line x1='60' y1='250' x2='340' y2='50' stroke='#0074d9' stroke-width='2' /><path d='M60 230 Q150 40 340 100' stroke='#ff4136' fill='none' stroke-width='2' /><circle cx='143' cy='100' r='5' fill='#2ecc40' /><circle cx='279' cy='140' r='5' fill='#2ecc40' /><text x='150' y='90' font-family='sans-serif' font-size='12' fill='#2ecc40'>Solution 1</text><text x='270' y='150' font-family='sans-serif' font-size='12' fill='#2ecc40'>Solution 2</text></svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the simultaneous equations:<br> y = x + 4 <br> y = x\u00b2 + 2x - 1 <br> Use substitution to find the points of intersection, then explain what these points represent graphically.</span>",
      "hint": "Start by expressing y from the linear equation, substitute into the quadratic, then solve the quadratic equation. Finally, find y values and interpret.",
      "mustHaveKeywords": ["substitution", "quadratic formula", "intersection points", "solve for x", "solve for y"],
      "optionalKeywords": ["discriminant", "graphical interpretation", "coordinate plane"],
      "modelAnswer": "<span>First, express y = x + 4. Substitute into the quadratic: x + 4 = x\u00b2 + 2x -1. Rearranged: 0 = x\u00b2 + 2x -1 - x -4 = x\u00b2 + x -5. Solve the quadratic equation x\u00b2 + x -5 = 0 using the quadratic formula to find x values. Then substitute back into y = x + 4 to find y values. These (x,y) points are the intersection points of the line and parabola on the graph, representing the simultaneous solutions.</span>",
      "scaffoldPrompts": ["Write y from the linear equation", "Substitute y into quadratic", "Rearrange to standard form", "Use quadratic formula to solve for x", "Calculate y values", "Explain what coordinates mean graphically"]
    }
  }
};