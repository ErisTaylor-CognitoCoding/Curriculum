window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.5 - Linear and quadratic inequalities",
  "strapline": "Understanding how to solve and represent linear and quadratic inequalities in one and two variables.",
  "learningObjectives": [
    "Students should be able to solve linear inequalities in one variable and represent the solution set on a number line (Maths 2.5)",
    "Students should be able to solve quadratic inequalities and express solutions using correct inequality notation (Maths 2.5)",
    "Students should be able to represent regions satisfied by linear inequalities in two variables graphically (Maths 2.5)"
  ],
  "keyFormulas": [
    "Concept 1: Linear inequality in one variable - An inequality that can be written in the form ax + b > c, ax + b < c, ax + b \u2265 c, or ax + b \u2264 c, where the solution is a range of values rather than a single value",
    "Concept 2: Quadratic inequality - An inequality involving a squared term, such as x\u00b2 + bx + c > 0, which can be solved by finding critical values (roots) and testing intervals to determine where the inequality holds true",
    "Concept 3: Solution set representation - The way we show all values that satisfy an inequality, using number lines for one variable or shaded regions on coordinate axes for two variables"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='100' x2='380' y2='100' stroke='#333' stroke-width='2' /><line x1='200' y1='20' x2='200' y2='180' stroke='#333' stroke-width='2' /><circle cx='150' cy='100' r='6' fill='#1f77b4'/><text x='150' y='80' font-family='sans-serif' font-size='14' text-anchor='middle'>a</text><circle cx='250' cy='100' r='6' fill='white' stroke='#1f77b4' stroke-width='2'/><text x='250' y='80' font-family='sans-serif' font-size='14' text-anchor='middle'>b</text><path d='M 150 100 L 130 70 L 170 70 Z' fill='#1f77b4' opacity='0.6'/><text x='50' y='130' font-family='sans-serif' font-size='14' fill='#555'>Number Line Example</text></svg>",
  "step1": {
    "title": "Concept 1: Understanding Linear Inequalities in One Variable",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A linear inequality in one variable is similar to a linear equation but uses inequality symbols like <strong>&gt;</strong>, <strong>&lt;</strong>, <strong>&#8805;</strong>, and <strong>&#8804;</strong>. Instead of a single solution, the answer is a range of values that satisfy the inequality.</p><p>For example, <em>2x + 3 &gt; 5</em> means find all x values that make this inequality true.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a thermostat: instead of setting one exact temperature, it might say 'temperature must be greater than 20\u00b0C.' This allows any temperature above 20\u00b0C, a range of temperatures, which matches the idea of an inequality solution.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Solve the inequality 3x - 4 &lt; 8",
      "problem": "Let's solve 3x - 4 &lt; 8 step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "First, add 4 to both sides. What do you get?",
          "answer": "12",
          "feedback": "Correct! 3x - 4 + 4 &lt; 8 + 4 simplifies to 3x &lt; 12."
        },
        {
          "id": "q2",
          "prompt": "Now, divide both sides by 3 (positive number, so inequality direction does not change). What is x &lt; ?",
          "answer": "4",
          "feedback": "Well done! Dividing 3x &lt; 12 by 3 gives x &lt; 4."
        },
        {
          "id": "q3",
          "prompt": "On the number line sketch, shade all values that satisfy x &lt; 4. Is the point 4 included (closed or open circle)?",
          "answer": "open",
          "feedback": "Correct! Because the inequality is strict (&lt;), the point 4 itself is not included, so we use an open circle."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Solving Quadratic Inequalities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A quadratic inequality involves expressions like x\u00b2 + bx + c &gt; 0 or x\u00b2 + bx + c \u2264 0. To solve these, find the roots of the corresponding quadratic equation and test intervals between and beyond the roots to see where the inequality holds.</p>",
    "workedExample": {
      "title": "Worked Example: Solve x\u00b2 - 5x + 6 \u2264 0",
      "problem": "Let's find the solution set step-by-step for x\u00b2 - 5x + 6 \u2264 0.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Factor the quadratic expression: x\u00b2 - 5x + 6 = ?",
          "answer": "(x - 2)(x - 3)",
          "feedback": "Correct! The expression factors into (x - 2)(x - 3)."
        },
        {
          "id": "q2",
          "prompt": "What are the roots (values of x for which expression equals 0)?",
          "answer": "2 and 3",
          "feedback": "Yes! The roots are x = 2 and x = 3."
        },
        {
          "id": "q3",
          "prompt": "Test the value x = 1 (less than 2). Is (1 - 2)(1 - 3) \u2264 0 true or false?",
          "answer": "false",
          "feedback": "Correct! (1 - 2)(1 - 3) = (-1)(-2) = 2, which is not \u2264 0."
        },
        {
          "id": "q4",
          "prompt": "Test the value x = 2.5 (between 2 and 3). Is (2.5 - 2)(2.5 - 3) \u2264 0 true or false?",
          "answer": "true",
          "feedback": "Correct! (0.5)(-0.5) = -0.25 \u2264 0 is true."
        },
        {
          "id": "q5",
          "prompt": "Test the value x = 4 (greater than 3). Is (4 - 2)(4 - 3) \u2264 0 true or false?",
          "answer": "false",
          "feedback": "Correct! (2)(1) = 2, not \u2264 0."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Representing Solution Sets",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Once solved, inequalities can be represented on number lines (for one variable) by shading the part of the line that satisfies the inequality, and for two variables, by shading regions on coordinate axes where the inequality holds.</p>",
    "workedExample": {
      "title": "Worked Example: Graph the solution for y \u2264 2x + 1",
      "problem": "<p>Let's visualize the solution region for the linear inequality y \u2264 2x + 1 step-by-step.</p>",
      "questions": [
        {
          "id": "q1",
          "prompt": "First, plot the boundary line y = 2x + 1. What type of line should it be? (solid or dashed)",
          "answer": "solid",
          "feedback": "Correct! Because the inequality includes \u2264 (less than or equal), the boundary line is solid."
        },
        {
          "id": "q2",
          "prompt": "Choose a test point not on the line, for example (0,0). Does this point satisfy y \u2264 2x + 1?",
          "answer": "yes",
          "feedback": "Yes! 0 \u2264 2(0) + 1 \u2192 0 \u2264 1, so (0,0) satisfies the inequality."
        },
        {
          "id": "q3",
          "prompt": "Shade the region that contains the point (0,0). Is it above or below the line?",
          "answer": "below",
          "feedback": "Correct! The solution region is below the line y = 2x + 1."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='0' width='400' height='300' fill='#fafafa'/><line x1='0' y1='250' x2='375' y2='0' stroke='#333' stroke-width='2'/><line x1='0' y1='300' x2='400' y2='300' stroke='#000'/><line x1='0' y1='0' x2='0' y2='300' stroke='#000'/><polygon points='0,300 375,300 375,0' fill='#add8e6' opacity='0.4'/><text x='200' y='280' font-family='sans-serif' font-size='16' fill='#333'>y ≤ 2x + 1 shaded region</text></svg>"
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice Questions (MCQ)",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is a solution to the inequality 4x - 7 &gt; 9?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>x = 5</span>",
            "isCorrect": true,
            "explanation": "Correct! 4(5) - 7 = 20 - 7 = 13, which is greater than 9."
          },
          {
            "id": "b",
            "label": "<span>x = 3</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 4(3) - 7 = 12 - 7 = 5, which is not greater than 9."
          },
          {
            "id": "c",
            "label": "<span>x = 4</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 4(4) - 7 = 16 - 7 = 9, equals 9 but doesn't satisfy 'greater than 9'."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which interval represents the solution to x\u00b2 - 4x - 5 &gt; 0?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>(-\u221e, -1) \u222a (5, \u221e)</span>",
            "isCorrect": true,
            "explanation": "Correct! Factoring gives (x - 5)(x + 1) &gt; 0 the solution is x &lt; -1 or x &gt; 5."
          },
          {
            "id": "b",
            "label": "<span>[-1, 5]</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Between the roots the inequality is negative, so this interval does not satisfy the inequality."
          },
          {
            "id": "c",
            "label": "<span>(-1, 5)</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This open interval is where expression \u2264 0, not &gt; 0."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The solution set of a linear inequality in one variable is usually represented on a <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "number-line",
                "label": "number line",
                "isCorrect": true,
                "feedback": "Correct! Number lines show all values satisfying the inequality."
              },
              {
                "value": "coordinate-plane",
                "label": "coordinate plane",
                "isCorrect": false,
                "feedback": "Incorrect. Coordinate planes typically represent solutions in two variables."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>When solving quadratic inequalities, the points where the associated quadratic equals zero are called <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "roots",
                "label": "roots",
                "isCorrect": true,
                "feedback": "Correct! Roots split the number line into intervals to test."
              },
              {
                "value": "vertices",
                "label": "vertices",
                "isCorrect": false,
                "feedback": "Incorrect. Vertices refer to the turning points of the parabola."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the quadratic inequality x\u00b2 - 4x + 3 &gt; 0, and represent the solution set on a number line. Explain the steps clearly.</span>",
      "hint": "Remember to start by solving the quadratic equation and then testing intervals to find where the inequality holds.",
      "mustHaveKeywords": ["roots", "test values", "intervals", "inequality sign", "number line"],
      "optionalKeywords": ["factorisation", "critical points", "open circle", "shading region"],
      "modelAnswer": "<span>First, solve the quadratic equation x\u00b2 - 4x + 3 = 0 by factorising as (x - 1)(x - 3) = 0, so roots are x = 1 and x = 3. These are our critical points.</span><br><span>Next, test values in each interval determined by the roots: choose x = 0 (left of 1), x = 2 (between 1 and 3), and x = 4 (right of 3). Check which intervals satisfy x\u00b2 - 4x + 3 &gt; 0.</span><br><span>For x = 0: (0 - 1)(0 - 3) = (-1)(-3) = 3 &gt; 0, true;</span><br><span>For x = 2: (2 - 1)(2 - 3) = (1)(-1) = -1 &gt; 0, false;</span><br><span>For x = 4: (4 - 1)(4 - 3) = (3)(1) = 3 &gt; 0, true.</span><br><span>Therefore, the solution set is x &lt; 1 or x &gt; 3. On the number line, represent these with open circles at 1 and 3 and shade all values less than 1 and greater than 3.</span>",
      "scaffoldPrompts": [
        "Step 1: Find the roots of the quadratic equation.",
        "Step 2: Pick test points in each interval created by the roots.",
        "Step 3: Determine which intervals satisfy the inequality.",
        "Step 4: Represent the solution on a number line with open/closed circles as appropriate."
      ]
    }
  }
};