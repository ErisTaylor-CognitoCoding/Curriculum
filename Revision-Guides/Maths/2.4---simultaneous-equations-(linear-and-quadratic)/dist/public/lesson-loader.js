window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.4 - Simultaneous equations (linear and quadratic)",
  "strapline": "Understanding how to solve and interpret simultaneous equations consisting of one linear and one quadratic equation using substitution and graphical methods.",
  "learningObjectives": [
    "Students should be able to solve simultaneous equations where one equation is linear and the other is quadratic using substitution methods (Maths 2.4)",
    "Students should be able to interpret solutions graphically as points of intersection between a linear and quadratic graph (Maths 2.4)"
  ],
  "keyFormulas": [
    "Linear equation general form: y = mx + c",
    "Quadratic equation standard form: y = ax² + bx + c",
    "Substitution method: Replace y (or x) in one equation using the other equation, then solve the resulting quadratic equation"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#333'/><line x1='60' y1='200' x2='340' y2='60' stroke='#0074D9' stroke-width='2'/><path d='M60 220 Q200 20 340 180' stroke='#FF4136' fill='none' stroke-width='2'/><text x='330' y='55' font-family='sans-serif' font-size='14' fill='#0074D9'>y = 2x + 5</text><text x='330' y='175' font-family='sans-serif' font-size='14' fill='#FF4136'>y = -0.01x² + 3x + 2</text><circle cx='230' cy='110' r='4' fill='#2ECC40'/><text x='235' y='115' font-family='sans-serif' font-size='12' fill='#2ECC40'>Intersection</text></svg>",
  "step1": {
    "title": "Concept: What are simultaneous equations?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Simultaneous equations involve finding values of variables that satisfy two equations at the same time. Here, one equation is <strong>linear</strong> (a straight line) and the other is <strong>quadratic</strong> (a parabola).</p><p>For example, the system <em>y = 2x + 3</em> and <em>y = x² - 4x + 5</em> asks us to find points where these two graphs meet.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two roads crossing a park: one is a straight path (linear), and the other is a curved path (quadratic). The points where they meet are like solutions to the simultaneous equations.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying the equations",
      "problem": "Given the equations <em>y = 3x + 1</em> and <em>y = x² - 4</em>, identify which is linear and which is quadratic.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which equation is linear?",
          "answer": "y = 3x + 1",
          "feedback": "Correct. The equation y = 3x + 1 is linear because its highest power of x is 1."
        },
        {
          "id": "q2",
          "prompt": "Which equation is quadratic?",
          "answer": "y = x² - 4",
          "feedback": "Correct. The equation y = x² - 4 is quadratic because it contains x squared."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding substitution method",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Substitution means expressing one variable from the linear equation and plugging it into the quadratic equation to solve for the unknown variable.</p><p>For example, if <em>y = 2x + 3</em>, substitute <em>y</em> into the quadratic <em>y = x² + 5</em> to get <em>2x + 3 = x² + 5</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Setup substitution",
      "problem": "Solve the system: <em>y = 2x + 3</em> and <em>y = x² + 5</em> by substitution.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write down the substitution equation by setting y from both equal.",
          "answer": "2x + 3 = x² + 5",
          "feedback": "Correct! We set y = 2x + 3 equal to y = x² + 5."
        },
        {
          "id": "q2",
          "prompt": "Rearrange to form quadratic equation: move all terms to one side.",
          "answer": "0 = x² - 2x + 2",
          "feedback": "Correct! Subtract 2x + 3 from both sides."
        }
      ]
    }
  },
  "step3": {
    "title": "Solving the quadratic equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Next, solve the quadratic equation <em>x² - 2x + 2 = 0</em> using factorization or the quadratic formula to find the x-values.</p>",
    "workedExample": {
      "title": "Worked Example: Quadratic formula step",
      "problem": "Solve <em>x² - 2x + 2 = 0</em> using the quadratic formula.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify values of a, b, and c.",
          "answer": "a=1, b=-2, c=2",
          "feedback": "Correct. a=1 (x²), b=-2 (x), c=2 (constant)."
        },
        {
          "id": "q2",
          "prompt": "Calculate the discriminant: b² - 4ac.",
          "answer": "(-2)² - 4*1*2 = 4 - 8 = -4",
          "feedback": "Correct. The discriminant is -4."
        },
        {
          "id": "q3",
          "prompt": "Does the discriminant tell us about the number of real solutions?",
          "answer": "No real solutions because discriminant is negative",
          "feedback": "Correct! Negative discriminant means no real intersections."
        }
      ]
    }
  },
  "step4": {
    "title": "Interpreting points of intersection graphically",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The points where the linear and quadratic graphs intersect correspond to real solutions of the simultaneous equations. No real solution means no intersections; one solution means tangent point; two solutions means two crossing points.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#fafafa' stroke='#333'/><line x1='80' y1='220' x2='320' y2='60' stroke='#0074D9' stroke-width='2'/><path d='M80 200 Q200 20 320 200' stroke='#FF4136' fill='none' stroke-width='2'/><text x='330' y='55' font-family='sans-serif' font-size='14' fill='#0074D9'>Linear: y = 2x + 3</text><text x='330' y='175' font-family='sans-serif' font-size='14' fill='#FF4136'>Quadratic: y = x² - 4x + 5</text><circle cx='180' cy='120' r='5' fill='#2ECC40'/><circle cx='250' cy='170' r='5' fill='#2ECC40'/><text x='185' y='115' font-family='sans-serif' font-size='12' fill='#2ECC40'>Intersection 1</text><text x='255' y='165' font-family='sans-serif' font-size='12' fill='#2ECC40'>Intersection 2</text></svg>"
  },
  "step5": {
    "title": "Example: Finding intersection points step-by-step",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Solve the system: <em>y = -x + 4</em> and <em>y = x² - 4x + 5</em> using substitution and interpret results graphically.</p>",
    "workedExample": {
      "title": "Interactive solution",
      "problem": "Substitute and solve stepwise:",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write substitution equation equating y-values.",
          "answer": "-x + 4 = x² - 4x + 5",
          "feedback": "Great! Both y expressions are set equal."
        },
        {
          "id": "q2",
          "prompt": "Rearrange to form quadratic: move all terms to one side.",
          "answer": "0 = x² - 3x + 1",
          "feedback": "Correct. Rearranged to standard quadratic form."
        },
        {
          "id": "q3",
          "prompt": "Calculate discriminant (b² - 4ac) for a=1, b=-3, c=1.",
          "answer": "9 - 4 = 5",
          "feedback": "Right! Discriminant is positive, so two real solutions."
        },
        {
          "id": "q4",
          "prompt": "Find roots using quadratic formula: x = [3 ± √5]/2 (approximate).",
          "answer": "x ≈ 2.618 or x ≈ 0.382",
          "feedback": "Excellent! Two solution values for x."
        },
        {
          "id": "q5",
          "prompt": "Find corresponding y-values using linear equation y = -x + 4.",
          "answer": "y ≈ 1.382 or y ≈ 3.618",
          "feedback": "Correct. These pairs are intersection points."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the simultaneous equations where one is linear and the other quadratic: <br>y = 3x - 2 and y = x² - x + 1. <br>Explain your method and interpret the solutions graphically.</span>",
      "hint": "Remember to substitute y from the linear equation into the quadratic, solve the quadratic, then find corresponding y-values. Check discriminant to know the number of solutions.",
      "mustHaveKeywords": ["substitution", "quadratic formula", "discriminant", "solutions", "points of intersection"],
      "optionalKeywords": ["real roots", "graph", "tangent", "parabola", "straight line"],
      "modelAnswer": "<span>First, substitute y=3x-2 into y=x² - x + 1 to get 3x - 2 = x² - x + 1. Rearranged: 0 = x² - 4x + 3. Calculate discriminant: (-4)² - 4*1*3 = 16 - 12 = 4, so two real solutions. Solve quadratic to find x-values and then substitute back to find y-values. These solutions correspond to two points where the line intersects the parabola on the graph.</span>",
      "scaffoldPrompts": ["Substitute y from linear into quadratic", "Rearrange to form quadratic equation", "Calculate discriminant", "Solve quadratic for x", "Find y using linear equation", "Interpret solutions as intersection points"]
    }
  }
};