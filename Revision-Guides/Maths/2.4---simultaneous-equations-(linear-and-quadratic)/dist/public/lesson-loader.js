window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.4 - Simultaneous equations (linear and quadratic)",
  "strapline": "Learn how to solve simultaneous equations where one is linear and the other is quadratic, using substitution, and understand their graphical interpretation as intersection points.",
  "learningObjectives": [
    "Students should be able to solve simultaneous equations where one equation is linear and the other is quadratic using substitution methods (Maths 2.4)",
    "Students should be able to interpret solutions graphically as points of intersection between a linear and quadratic graph (Maths 2.4)"
  ],
  "keyFormulas": [
    "Linear equation: y = mx + c",
    "Quadratic equation: y = ax² + bx + c",
    "Substitution method: Replace y or x from one equation into the other to solve for the variable"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <rect x='0' y='0' width='400' height='300' fill='#FFF'/>\
    <line x1='50' y1='250' x2='350' y2='50' stroke='#0074D9' stroke-width='2' />\
    <path d='M 50 210 Q 200 10 350 210' stroke='#FF4136' stroke-width='2' fill='none'/>\
    <circle cx='150' cy='140' r='4' fill='#2ECC40' />\
    <circle cx='263' cy='100' r='4' fill='#2ECC40' />\
    <text x='100' y='270' font-family='sans-serif' font-size='14px' fill='#0074D9'>Linear</text>\
    <text x='270' y='270' font-family='sans-serif' font-size='14px' fill='#FF4136'>Quadratic</text>\
    <text x='110' y='130' font-family='sans-serif' font-size='12px' fill='#2ECC40'>Intersection 1</text>\
    <text x='270' y='90' font-family='sans-serif' font-size='12px' fill='#2ECC40'>Intersection 2</text>\
    <line x1='150' y1='140' x2='150' y2='250' stroke='#2ECC40' stroke-dasharray='4' />\
    <line x1='263' y1='100' x2='263' y2='250' stroke='#2ECC40' stroke-dasharray='4' />\
    <line x1='50' y1='250' x2='350' y2='250' stroke='#000' />\
    <line x1='50' y1='250' x2='50' y2='50' stroke='#000' />\
    <text x='360' y='255' font-family='sans-serif' font-size='12px'>x</text>\
    <text x='40' y='40' font-family='sans-serif' font-size='12px'>y</text>\
  </svg>",
  "step1": {
    "title": "Concept: Understanding simultaneous equations (linear and quadratic)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Simultaneous equations involve finding values of <em>x</em> and <em>y</em> that satisfy two equations at the same time. Here, one equation is linear (a straight line) and the other is quadratic (a parabola).</p><p class=\"text-sm leading-6 text-muted-foreground\">The solutions correspond to the points where the line and parabola intersect on a graph.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two roads crossing—one straight and one curved. The places where they cross are points where both roads meet, just like solutions where both equations hold true.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Writing the equations",
      "problem": "Given the equations y = 2x + 1 (linear) and y = x² - 3 (quadratic), verify that these are linear and quadratic respectively.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the first equation linear? Type 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Correct. y = 2x + 1 is linear because it has x to the power of 1."
        },
        {
          "id": "q2",
          "prompt": "Is the second equation quadratic? Type 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Correct. y = x² - 3 is quadratic because of the x squared term."
        }
      ]
    }
  },
  "step2": {
    "title": "Using substitution method: Rearranging the linear equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To solve simultaneously, express <em>y</em> from the linear equation (if not already done) and substitute this into the quadratic equation to find <em>x</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Rearranging",
      "problem": "Given y = 3x - 2, write an expression to substitute into y = x² + 1.",
      "questions": [
        {
          "id": "q3",
          "prompt": "What is y in terms of x?",
          "answer": "3x - 2",
          "feedback": "Correct. y is already expressed as 3x - 2."
        }
      ]
    }
  },
  "step3": {
    "title": "Substitution: Form the single quadratic equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Substitute y = 3x - 2 into y = x² + 1, then set the equations equal to find the values of x.</p>",
    "workedExample": {
      "title": "Worked Example: Substitute y",
      "problem": "Substitute y = 3x - 2 into y = x² + 1 and write the equation with x only.",
      "questions": [
        {
          "id": "q4",
          "prompt": "Replace y in the second equation with 3x - 2.",
          "answer": "3x - 2 = x² + 1",
          "feedback": "Good! Now rearrange this to standard quadratic form."
        }
      ]
    }
  },
  "step4": {
    "title": "Rearrange to standard quadratic form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Bring all terms to one side so the quadratic equation is equal to zero.</p>",
    "workedExample": {
      "title": "Worked Example: Rearranging",
      "problem": "Rearrange 3x - 2 = x² + 1 to the form ax² + bx + c = 0.",
      "questions": [
        {
          "id": "q5",
          "prompt": "Subtract 3x and add 2 to both sides.",
          "answer": "0 = x² + 1 - 3x + 2",
          "feedback": "Correct. Now simplify the right side."
        },
        {
          "id": "q6",
          "prompt": "Simplify the right side.",
          "answer": "0 = x² - 3x + 3",
          "feedback": "Perfect, we now have a quadratic equation to solve."
        }
      ]
    }
  },
  "step5": {
    "title": "Solve quadratic for x",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use factorization or the quadratic formula to find the values of <em>x</em> from the quadratic equation.</p>",
    "workedExample": {
      "title": "Worked Example: Solving quadratic",
      "problem": "Solve x² - 3x + 3 = 0 for <em>x</em> using the quadratic formula.",
      "questions": [
        {
          "id": "q7",
          "prompt": "Identify values of a, b, and c.",
          "answer": "a=1, b=-3, c=3",
          "feedback": "Good. a=1, b=-3, c=3."
        },
        {
          "id": "q8",
          "prompt": "Calculate the discriminant: b² - 4ac.",
          "answer": "(-3)*(-3) - 4*1*3",
          "feedback": "Correct. The discriminant is 9 - 12 = -3."
        },
        {
          "id": "q9",
          "prompt": "Is the discriminant positive, zero, or negative?",
          "answer": "negative",
          "feedback": "Correct, it is negative meaning no real roots."
        }
      ]
    }
  },
  "step6": {
    "title": "Interpret solutions graphically: Points of intersection",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If the quadratic equation has no real roots, it means the line and parabola do not intersect.</p><p>The number of real solutions corresponds to the number of intersection points.</p>",
    "workedExample": {
      "title": "Interpretation",
      "problem": "Given the previous equations, how many points of intersection exist?",
      "questions": [
        {
          "id": "q10",
          "prompt": "No real roots means how many intersection points?",
          "answer": "0",
          "feedback": "Correct, the line and parabola do not intersect."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
        <rect x='0' y='0' width='400' height='300' fill='#fff'/>\
        <line x1='50' y1='150' x2='350' y2='150' stroke='#0074D9' stroke-width='2' />\
        <path d='M50 220 Q200 50 350 220' stroke='#FF4136' stroke-width='2' fill='none'/>\
        <text x='90' y='145' font-family='sans-serif' font-size='14px' fill='#0074D9'>y = 3x - 2</text>\
        <text x='90' y='50' font-family='sans-serif' font-size='14px' fill='#FF4136'>y = x² + 1</text>\
        <text x='130' y='270' font-family='sans-serif' font-size='16px' fill='#000'>No intersections</text>\
        <line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-dasharray='4 4'/>\
        <line x1='50' y1='220' x2='350' y2='220' stroke='#000' stroke-dasharray='4 4'/>\
        <line x1='50' y1='50' x2='50' y2='270' stroke='#000'/>\
        <line x1='50' y1='150' x2='50' y2='270' stroke='#000'/>\
        <text x='360' y='155' font-family='sans-serif' font-size='12px'>x</text>\
        <text x='40' y='40' font-family='sans-serif' font-size='12px'>y</text>\
      </svg>"
    }
  },
  "step7": {
    "title": "Example: Solve simultaneous equations with two real solutions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now try solving a system where the quadratic equation has two real roots, meaning two points of intersection.</p>",
    "workedExample": {
      "title": "Worked Example: y = x + 1 and y = -x² + 4",
      "problem": "Solve y = x + 1 and y = -x² + 4 simultaneously.",
      "questions": [
        {
          "id": "q11",
          "prompt": "Substitute y = x + 1 into y = -x² + 4. What equation do you get?",
          "answer": "x + 1 = -x² + 4",
          "feedback": "Great! Now rearrange to get a quadratic equal to zero."
        },
        {
          "id": "q12",
          "prompt": "Rearrange to ax² + bx + c = 0 format.",
          "answer": "x² + x - 3 = 0",
          "feedback": "Correct. Now solve for x using the quadratic formula."
        },
        {
          "id": "q13",
          "prompt": "Calculate discriminant: b² - 4ac.",
          "answer": "1*1 - 4*1*(-3)",
          "feedback": "Correct, the discriminant is 1 + 12 = 13."
        },
        {
          "id": "q14",
          "prompt": "Does the discriminant show two real roots?",
          "answer": "yes",
          "feedback": "Correct. So there are two points of intersection."
        },
        {
          "id": "q15",
          "prompt": "Use quadratic formula to find first x: (-b + √discriminant) / 2a",
          "answer": "(-1 + 3.6056) / 2",
          "feedback": "Good. Compute to get approximately 1.3028."
        },
        {
          "id": "q16",
          "prompt": "Calculate corresponding y value using y = x + 1 for x = 1.3028.",
          "answer": "2.3028",
          "feedback": "Correct."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
        <rect x='0' y='0' width='400' height='300' fill='#fff'/>\
        <path d='M50 250 L350 50' stroke='#0074D9' stroke-width='2' />\
        <path d='M50 130 Q200 10 350 130' stroke='#FF4136' stroke-width='2' fill='none'/>\
        <circle cx='230' cy='140' r='4' fill='#2ECC40' />\
        <circle cx='100' cy='70' r='4' fill='#2ECC40' />\
        <text x='240' y='150' font-family='sans-serif' font-size='12px' fill='#2ECC40'>Intersection 1</text>\
        <text x='70' y='60' font-family='sans-serif' font-size='12px' fill='#2ECC40'>Intersection 2</text>\
        <line x1='230' y1='140' x2='230' y2='250' stroke='#2ECC40' stroke-dasharray='4' />\
        <line x1='100' y1='70' x2='100' y2='250' stroke='#2ECC40' stroke-dasharray='4' />\
        <line x1='50' y1='250' x2='350' y2='250' stroke='#000' />\
        <line x1='50' y1='250' x2='50' y2='50' stroke='#000' />\
        <text x='360' y='255' font-family='sans-serif' font-size='12px'>x</text>\
        <text x='40' y='40' font-family='sans-serif' font-size='12px'>y</text>\
      </svg>"
    }
  },
  "step8": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the number of solutions to simultaneous linear and quadratic equations represent graphically?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The number of points where the linear and quadratic graphs intersect</span>",
            "isCorrect": true,
            "explanation": "Correct! Solutions correspond to intersection points."
          },
          {
            "id": "b",
            "label": "<span>The number of tangent lines to the quadratic graph</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Tangent lines refer to slopes, not solution counts."
          },
          {
            "id": "c",
            "label": "<span>The number of solutions to only the quadratic equation</span>",
            "isCorrect": false,
            "explanation": "Incorrect. We consider solutions that satisfy both equations."
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> method involves replacing one variable in one equation with an expression from the other.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "substitution",
                "label": "substitution",
                "isCorrect": true,
                "feedback": "Correct! This is the substitution method."
              },
              {
                "value": "elimination",
                "label": "elimination",
                "isCorrect": false,
                "feedback": "Try again. Elimination is a different method."
              }
            ]
          }
        ]
      }
    ]
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the simultaneous equations: y = 2x - 1 and y = x² - 3x + 2. Explain each step carefully and interpret the solutions graphically.</span>",
      "hint": "Start by substituting y = 2x - 1 into the quadratic equation and rearranging into a quadratic formula. Then solve for x, find corresponding y, and sketch the graphs to find intersection points.",
      "mustHaveKeywords": ["substitution", "quadratic formula", "solutions", "points of intersection"],
      "optionalKeywords": ["discriminant", "graphical interpretation"],
      "modelAnswer": "<span>First, substitute y = 2x - 1 into y = x² - 3x + 2 to get 2x - 1 = x² - 3x + 2. Rearranging gives 0 = x² - 5x + 3. Then use the quadratic formula to solve for x. The discriminant is 25 - 12 = 13, which is positive, so two solutions exist. Calculate x values and substitute back to find y. Graphs of the line and parabola intersect at these points, confirming the real solutions.</span>",
      "scaffoldPrompts": [
        "Write y from the linear equation.",
        "Substitute this into the quadratic equation.",
        "Rearrange the equation so that one side equals zero.",
        "Calculate the discriminant to determine number of real roots.",
        "Solve for x using the quadratic formula.",
        "Use found x values to calculate corresponding y.",
        "Interpret the solution points as graph intersections."
      ]
    }
  }
};