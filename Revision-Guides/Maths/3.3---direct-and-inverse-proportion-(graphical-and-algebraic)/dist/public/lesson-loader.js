window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.3 - Direct and inverse proportion (graphical and algebraic)",
  "strapline": "Understanding and solving problems involving direct and inverse proportion through graphs and equations.",
  "learningObjectives": [
    "Students should recognise and interpret graphs that illustrate direct and inverse proportion (Maths 3.3)",
    "Students should construct and interpret equations for direct and inverse proportion in the form y = kx and y = k/x (Maths 3.3)",
    "Students should solve problems involving direct and inverse proportion using both graphical and algebraic methods (Maths 3.3)"
  ],
  "keyFormulas": [
    "Direct proportion: y = kx",
    "Inverse proportion: y = k/x (or equivalently xy = k)",
    "Gradient of line (direct proportion) = k; Constant product (inverse proportion) = k"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='40' y='30' width='320' height='220' fill='#f9f9f9' stroke='#555' rx='8' ry='8'/>\n  <line x1='60' y1='250' x2='340' y2='50' stroke='#1e90ff' stroke-width='3'/>\n  <text x='340' y='260' font-family='Arial' font-size='14' fill='#333' text-anchor='end'>y = kx (Direct Proportion)</text>\n  <path d='M60,260 Q120,150 340,50' fill='none' stroke='#f05454' stroke-width='3'/>\n  <text x='340' y='40' font-family='Arial' font-size='14' fill='#333' text-anchor='end'>y = k/x (Inverse Proportion)</text>\n  <line x1='60' y1='260' x2='60' y2='40' stroke='#333' />\n  <line x1='60' y1='260' x2='340' y2='260' stroke='#333' />\n  <text x='30' y='45' font-family='Arial' font-size='12' fill='#333'>y</text>\n  <text x='345' y='275' font-family='Arial' font-size='12' fill='#333'>x</text>\n</svg>",
  "step1": {
    "title": "Concept: Understanding Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct proportion means two variables change at the same rate. When one doubles, the other doubles too. This relationship is written as <strong>y = kx</strong>, where <em>k</em> is a constant.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a bakery where the price depends on the number of breads bought. Buying 2 breads costs twice as much as 1 bread. Price and number of breads are directly proportional.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding k and y for direct proportion",
      "problem": "Given y = kx, if y = 10 when x = 5, find k and then find y when x = 8.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of k given y = 10 when x = 5?",
          "answer": "2",
          "feedback": "Correct! Since y = kx, k = y/x = 10/5 = 2."
        },
        {
          "id": "q2",
          "prompt": "Using k = 2, find y when x = 8.",
          "answer": "16",
          "feedback": "Correct! y = kx = 2 × 8 = 16."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Inverse proportion means one variable increases while the other decreases such that their product is constant. If one doubles, the other halves. Algebraically, this is shown as <strong>y = k/x</strong> or <strong>xy = k</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If 4 workers complete a job in 6 hours, then 8 workers will do it in half the time (3 hours). Number of workers and time are inversely proportional.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding k and y for inverse proportion",
      "problem": "Given y = k/x, if y = 6 when x = 4, find k and then find y when x = 8.",
      "questions": [
        {
          "id": "q3",
          "prompt": "What is the value of k given y = 6 when x = 4?",
          "answer": "24",
          "feedback": "Correct! Since y = k/x, k = xy = 4 × 6 = 24."
        },
        {
          "id": "q4",
          "prompt": "Using k = 24, find y when x = 8.",
          "answer": "3",
          "feedback": "Correct! y = k/x = 24 / 8 = 3."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='40' y='30' width='320' height='220' fill='#fef9f9' stroke='#b03a2e' rx='8' ry='8'/>\n  <path d='M60,250 Q150,120 340,60' fill='none' stroke='#b03a2e' stroke-width='3'/>\n  <text x='340' y='45' font-family='Arial' font-size='14' fill='#b03a2e' text-anchor='end'>y = k/x</text>\n  <line x1='60' y1='250' x2='340' y2='250' stroke='#b03a2e' />\n  <line x1='60' y1='250' x2='60' y2='40' stroke='#b03a2e' />\n  <text x='30' y='45' font-family='Arial' font-size='12' fill='#b03a2e'>y</text>\n  <text x='345' y='265' font-family='Arial' font-size='12' fill='#b03a2e'>x</text>\n</svg>"
    }
  },
  "step3": {
    "title": "Key Concepts: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following graphs represents a direct proportion relationship?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>A straight line through the origin</span>",
            "isCorrect": true,
            "explanation": "Correct! Direct proportion graphs are straight lines through the origin."
          },
          {
            "id": "b",
            "label": "<span>A curve approaching both axes but never touching them</span>",
            "isCorrect": false,
            "explanation": "This is a graph of inverse proportion, not direct proportion."
          },
          {
            "id": "c",
            "label": "<span>A horizontal line</span>",
            "isCorrect": false,
            "explanation": "A horizontal line shows y constant, not proportional to x."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What does the constant 'k' represent in y = kx?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The gradient of the line</span>",
            "isCorrect": true,
            "explanation": "Yes, k is the gradient and constant of proportionality."
          },
          {
            "id": "b",
            "label": "<span>The constant product of x and y</span>",
            "isCorrect": false,
            "explanation": "This applies to inverse proportion (y = k / x), not y = kx."
          },
          {
            "id": "c",
            "label": "<span>The y-intercept</span>",
            "isCorrect": false,
            "explanation": "For direct proportion, the line passes through the origin, so y-intercept = 0."
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>In <strong>direct proportion</strong>, the equation is <em>y = <span class=\"font-semibold\">_____</span>x</em>, where the constant of proportionality is <em>k</em>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "k",
                "label": "k",
                "isCorrect": true,
                "feedback": "Correct! The constant of proportionality is k."
              },
              {
                "value": "x",
                "label": "x",
                "isCorrect": false,
                "feedback": "Incorrect. The constant multiplying x is k."
              },
              {
                "value": "1",
                "label": "1",
                "isCorrect": false,
                "feedback": "Incorrect. The constant is not always 1."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>In <strong>inverse proportion</strong>, the product of x and y is a constant, expressed as <em>xy = <span class=\"font-semibold\">_____</span></em>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "k",
                "label": "k",
                "isCorrect": true,
                "feedback": "Correct! k is the constant product."
              },
              {
                "value": "y",
                "label": "y",
                "isCorrect": false,
                "feedback": "Incorrect. The constant product is k."
              },
              {
                "value": "x",
                "label": "x",
                "isCorrect": false,
                "feedback": "Incorrect. The constant product is k."
              }
            ]
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Solving problems: Applying direct and inverse proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's solve a question where you choose the type of proportion, find the constant k, then solve for unknown values.</p>",
    "workedExample": {
      "title": "Worked Example: Classifying and solving proportion problems",
      "problem": "A car travels 150 miles in 3 hours. How far can it travel in 5 hours assuming speed is constant? Then, if the car travels 150 miles in 3 hours, how long would it take to travel 250 miles at the same speed?",
      "questions": [
        {
          "id": "q5",
          "prompt": "Is distance and time directly or inversely proportional?",
          "answer": "direct",
          "feedback": "Correct, distance and time are directly proportional at constant speed."
        },
        {
          "id": "q6",
          "prompt": "Find the constant of proportionality k (distance per hour) using y = kx where y is distance and x is time.",
          "answer": "50",
          "feedback": "Correct! k = distance/time = 150 ÷ 3 = 50 miles per hour."
        },
        {
          "id": "q7",
          "prompt": "Using k = 50, find the distance traveled in 5 hours.",
          "answer": "250",
          "feedback": "Correct! y = kx = 50 × 5 = 250 miles."
        },
        {
          "id": "q8",
          "prompt": "For the second part, what is the variable representing time when distance is 250 miles? Use y = kx.",
          "answer": "5",
          "feedback": "Correct! Time = distance ÷ k = 250 ÷ 50 = 5 hours."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A pump fills a tank in 4 hours. How long will it take to fill the same tank with 2 pumps working together, assuming both pumps work at the same rate? Explain whether the relationship between number of pumps and time taken is direct or inverse proportion and solve the problem.</span>",
      "hint": "Consider if increasing the number of pumps increases or decreases the filling time. Use y = k/x for inverse proportion if appropriate.",
      "mustHaveKeywords": ["inverse proportion", "constant product", "k = number × time", "time with 2 pumps"],
      "optionalKeywords": ["work rate", "mutual efficiency"],
      "modelAnswer": "<span>The number of pumps and time taken to fill the tank are inversely proportional because more pumps decrease the time.</span><br><span>Let number of pumps be x and time be y with constant product k: xy = k.</span><br><span>Using 1 pump and 4 hours, k = 1 × 4 = 4.</span><br><span>For 2 pumps, time y = k/x = 4/2 = 2 hours.</span>",
      "scaffoldPrompts": ["Is the relationship direct or inverse?", "Write the equation involving k and x, y", "Find k using initial values", "Calculate y when x = 2"]
    }
  }
};