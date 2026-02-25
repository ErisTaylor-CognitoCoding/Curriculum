window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.5 - Linear and quadratic inequalities",
  "strapline": "Understanding how to solve and represent linear and quadratic inequalities both algebraically and graphically.",
  "learningObjectives": [
    "Students should be able to solve linear inequalities in one variable and represent the solution set on a number line (Maths 2.5)",
    "Students should be able to solve quadratic inequalities and express solutions using correct inequality notation (Maths 2.5)",
    "Students should be able to represent regions satisfied by linear inequalities in two variables graphically (Maths 2.5)"
  ],
  "keyFormulas": [
    "Linear inequality general form: ax + b > c, ax + b < c, ax + b ≥ c, ax + b ≤ c",
    "Quadratic inequality: ax² + bx + c > 0 or < 0 (depending on the problem)",
    "Number line and coordinate plane representations for inequalities"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#e8f0fe' stroke='#2a3d66' stroke-width='2'/><line x1='50' y1='150' x2='350' y2='150' stroke='#333' stroke-width='2'/><line x1='200' y1='50' x2='200' y2='250' stroke='#333' stroke-width='2'/><text x='360' y='155' font-family='sans-serif' font-size='14' fill='#333'>x</text><text x='205' y='40' font-family='sans-serif' font-size='14' fill='#333'>y</text><circle cx='200' cy='150' r='5' fill='none' stroke='red' stroke-width='2'/><path d='M 200 150 Q 270 100 320 60' fill='none' stroke='blue' stroke-width='2' stroke-dasharray='5 5'/><text x='210' y='140' font-family='sans-serif' font-size='13' fill='blue'>y &gt; 2x - 3</text></svg>",
  "step1": {
    "title": "Concept: Understanding Linear Inequalities in One Variable",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A linear inequality in one variable looks like: <em>ax + b &gt; c</em> or similar forms. The solution is not a single value but a range of values, which can be shown on a number line.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a thermostat. If the temperature is set to be greater than 20°C, it means the temperature can be any value above 20°C, not just one specific number.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Solving a Linear Inequality Step-by-Step",
      "problem": "Solve the inequality <strong>3x - 5 &lt; 7</strong> and represent the solution on a number line.",
      "questions": [
        {
          "id": "q1",
          "prompt": "First, add 5 to both sides. What inequality do you get?",
          "answer": "3x < 12",
          "feedback": "Correct, adding 5 gives 3x &lt; 12."
        },
        {
          "id": "q2",
          "prompt": "Next, divide both sides by 3 to isolate x. What is the solution?",
          "answer": "x < 4",
          "feedback": "Well done! Dividing by 3 yields x &lt; 4."
        },
        {
          "id": "q3",
          "prompt": "On a number line from 0 to 6, where would you shade to represent x &lt; 4?",
          "answer": "Shade all values less than 4 but not including 4",
          "feedback": "Exactly, shade to the left of 4 with an open circle at 4."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Solving Quadratic Inequalities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quadratic inequalities involve expressions like <em>x² + bx + c &gt; 0</em>. To solve them, find the roots of the related equation <em>x² + bx + c = 0</em> and determine intervals where the inequality holds true.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a rollercoaster track shaped like a parabola. The inequality shows where the track is above or below a level ground (the x-axis).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Solving a Quadratic Inequality Step-by-Step",
      "problem": "Solve the inequality <strong>x² - 5x + 6 &lt; 0</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the roots of the quadratic equation x² - 5x + 6 = 0.",
          "answer": "x = 2 and x = 3",
          "feedback": "Correct! The quadratic factors as (x - 2)(x - 3) = 0."
        },
        {
          "id": "q2",
          "prompt": "Using the roots, break the number line into intervals: (-∞, 2), (2, 3), and (3, ∞). Test a value from the interval (2, 3), for example x=2.5, to see if it satisfies x² - 5x + 6 &lt; 0.",
          "answer": "True",
          "feedback": "Exactly! For x=2.5, the expression is negative, so inequality holds."
        },
        {
          "id": "q3",
          "prompt": "Which interval(s) satisfy the inequality x² - 5x + 6 &lt; 0?",
          "answer": "Between 2 and 3",
          "feedback": "Yes, the solution set is 2 &lt; x &lt; 3."
        }
      ]
    }
  },
  "step3": {
    "title": "Representing Solutions on Number Lines and Coordinate Planes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Solutions for inequalities in one variable are shown on number lines using shading and open or closed circles. For inequalities in two variables, the solution region is shown as a shaded area on the coordinate plane.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of shading on coordinate paper like highlighting areas on a map - the shaded region represents all places that satisfy certain conditions.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Graphing a Linear Inequality in Two Variables",
      "problem": "Graph the inequality <strong>y &lt; 2x - 3</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "First, graph the boundary line y = 2x - 3. Is this line solid or dashed for the inequality y &lt; 2x - 3?",
          "answer": "Dashed",
          "feedback": "Correct. Because the inequality is strict '<', the boundary is dashed."
        },
        {
          "id": "q2",
          "prompt": "Choose the test point (0,0). Does it satisfy y &lt; 2x - 3?",
          "answer": "No",
          "feedback": "Right. 0 &lt; 2*0 - 3 → 0 &lt; -3 is false."
        },
        {
          "id": "q3",
          "prompt": "Shade the region where the inequality is true. Should it be above or below the boundary line?",
          "answer": "Below",
          "feedback": "Correct. Since (0,0) is false and lies below the line, shade the opposite side, which is below the line."
        }
      ]
    }
  },
  "step4": {
    "title": "Key Concept Reinforcement: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A linear inequality in one variable can be written as <strong class=\"font-semibold\">_____</strong>, where the solution is a <strong class=\"font-semibold\">_____</strong> of values.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "ax + b > c", "label": "ax + b > c", "isCorrect": true, "feedback": "Correct! This represents a linear inequality."},
              {"value": "ax^2 + bx + c = 0", "label": "ax^2 + bx + c = 0", "isCorrect": false, "feedback": "Incorrect. That is a quadratic equation, not an inequality."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "range", "label": "range", "isCorrect": true, "feedback": "Well done! The solution is a range of values."},
              {"value": "single value", "label": "single value", "isCorrect": false, "feedback": "No, inequalities represent multiple solutions, not a single value."}
            ]
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the solution set of the inequality 2x + 3 &ge; 7?</span>",
        "options": [
          {"id": "a", "label": "<span>x &ge; 2</span>", "isCorrect": true, "explanation": "Correct. Solve 2x + 3 &ge; 7 by subtracting 3 and dividing by 2."},
          {"id": "b", "label": "<span>x &le; 2</span>", "isCorrect": false, "explanation": "Incorrect, this reverses the inequality."},
          {"id": "c", "label": "<span>x &gt; 2</span>", "isCorrect": false, "explanation": "Incorrect, the correct symbol is &ge; because the inequality includes equality."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which intervals contain solutions to the inequality x² - 4x + 3 &lt; 0?</span>",
        "options": [
          {"id": "a", "label": "<span>(1, 3)</span>", "isCorrect": true, "explanation": "Correct. The roots are x=1 and x=3; inequality holds between them."},
          {"id": "b", "label": "<span>(-∞, 1)</span>", "isCorrect": false, "explanation": "Incorrect. This interval yields inequality greater than 0."},
          {"id": "c", "label": "<span>(3, ∞)</span>", "isCorrect": false, "explanation": "Incorrect. The inequality is not satisfied here."}
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the quadratic inequality <strong>x² - 6x + 8 &ge; 0</strong>. Then represent your solution set on a number line.</span>",
      "hint": "Remember to find the roots first by solving the quadratic equation, then test intervals around the roots to decide where the inequality holds.",
      "mustHaveKeywords": ["quadratic roots", "test intervals", "solution notation", "number line"],
      "optionalKeywords": ["greater than or equal to", "closed circles on number line"],
      "modelAnswer": "<span>First, solve x² - 6x + 8 = 0 by factoring: (x - 2)(x - 4) = 0, roots are x = 2 and x = 4. The parabola opens upwards, so the expression is &ge; 0 outside of the interval (2, 4). Test values less than 2 and greater than 4 to confirm. Hence, solution set is x &le; 2 or x &ge; 4. Represent this on a number line with closed circles at 2 and 4 and shading to the left of 2 and right of 4.</span>",
      "scaffoldPrompts": ["Find the roots of the quadratic equation.", "Determine the direction of the parabola (upwards or downwards).", "Test values in each interval divided by roots.", "Write the solution set in inequality form.", "Draw the number line and shade accordingly."]
    }
  }
};