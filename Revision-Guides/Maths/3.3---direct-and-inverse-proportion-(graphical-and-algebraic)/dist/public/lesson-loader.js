window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.3 - Direct and inverse proportion (graphical and algebraic)",
  "strapline": "Understanding and working with relationships where variables change directly or inversely with each other, using graphs and equations.",
  "learningObjectives": [
    "Students should recognise and interpret graphs that illustrate direct and inverse proportion (Maths 3.3)",
    "Students should construct and interpret equations for direct and inverse proportion in the form y = kx and y = k/x (Maths 3.3)",
    "Students should solve problems involving direct and inverse proportion using both graphical and algebraic methods (Maths 3.3)"
  ],
  "keyFormulas": [
    "y = kx (Direct Proportion)",
    "y = k/x (Inverse Proportion)",
    "k = constant of proportionality"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='300' fill='#fff'/><line x1='50' y1='250' x2='350' y2='50' stroke='#0074D9' stroke-width='3'/><text x='355' y='55' font-family='sans-serif' font-size='14' fill='#0074D9'>Direct Proportion y = kx</text><path d='M60 240 Q150 150 340 40' stroke='#FF4136' stroke-width='3' fill='none'/><text x='345' y='45' font-family='sans-serif' font-size='14' fill='#FF4136'>Inverse Proportion y = k/x</text><line x1='50' y1='250' x2='50' y2='20' stroke='#333' stroke-width='1'/><line x1='50' y1='250' x2='360' y2='250' stroke='#333' stroke-width='1'/><text x='45' y='265' font-family='sans-serif' font-size='12'>0</text><text x='360' y='265' font-family='sans-serif' font-size='12'>x</text><text x='30' y='20' font-family='sans-serif' font-size='12'>y</text></svg>",
  "step1": {
    "title": "Concept: Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct proportion means if one variable increases, the other increases at the same rate. Algebraically represented as <strong>y = kx</strong>, where <em>k</em> is a constant.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you buy 3 apples at £2 each, the total price doubles if the number of apples doubles.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding k in y = kx",
      "problem": "Given y = 12 when x = 4, find the constant k in the equation y = kx.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of x?",
          "answer": "4",
          "feedback": "Correct, x is given as 4."
        },
        {
          "id": "q2",
          "prompt": "What is the value of y?",
          "answer": "12",
          "feedback": "Correct, y is given as 12."
        },
        {
          "id": "q3",
          "prompt": "Calculate k using k = y / x. What is k?",
          "answer": "3",
          "feedback": "Well done! k = 12 ÷ 4 = 3."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Graph of Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The graph of direct proportion is a straight line through the origin (0,0). The gradient (steepness) of the line equals the constant k.</p>",
    "diagramHtml": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='160' x2='260' y2='40' stroke='#0074D9' stroke-width='3'/><line x1='40' y1='160' x2='40' y2='20' stroke='#333' stroke-width='1'/><line x1='40' y1='160' x2='280' y2='160' stroke='#333' stroke-width='1'/><circle cx='40' cy='160' r='3' fill='#0074D9'/><text x='38' y='175' font-family='sans-serif' font-size='12'>0</text><text x='270' y='170' font-family='sans-serif' font-size='12'>x</text><text x='20' y='25' font-family='sans-serif' font-size='12'>y</text><text x='150' y='180' font-family='sans-serif' font-size='14' fill='#0074D9'>y = 2x</text></svg>"
  },
  "step3": {
    "title": "Concept: Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Inverse proportion means as one variable increases, the other decreases such that their product is constant. Algebraically represented as <strong>y = k / x</strong> or <strong>xy = k</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If 4 workers finish a task in 6 hours, doubling the workers to 8 means the time halves to 3 hours.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding k in y = k/x",
      "problem": "Given y = 5 when x = 8 in the equation y = k / x, find k.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What value is x?",
          "answer": "8",
          "feedback": "Correct, x is 8."
        },
        {
          "id": "q2",
          "prompt": "What value is y?",
          "answer": "5",
          "feedback": "Correct, y is 5."
        },
        {
          "id": "q3",
          "prompt": "Calculate k using k = xy. What is k?",
          "answer": "40",
          "feedback": "Well done! k = 5 × 8 = 40."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Graph of Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The graph of inverse proportion is a curved hyperbola that approaches the axes but never touches them. It shows decreasing values of y as x increases.</p>",
    "diagramHtml": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><path d='M50 160 Q150 100 260 50' stroke='#FF4136' stroke-width='3' fill='none'/><line x1='50' y1='160' x2='50' y2='20' stroke='#333' stroke-width='1'/><line x1='50' y1='160' x2='280' y2='160' stroke='#333' stroke-width='1'/><text x='38' y='175' font-family='sans-serif' font-size='12'>0</text><text x='270' y='175' font-family='sans-serif' font-size='12'>x</text><text x='20' y='25' font-family='sans-serif' font-size='12'>y</text><text x='150' y='180' font-family='sans-serif' font-size='14' fill='#FF4136'>y = 40/x</text></svg>"
  },
  "step5": {
    "title": "Applying Direct and Inverse Proportion Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the constant k, you can solve problems by forming and manipulating equations of the form <em>y = kx</em> for direct proportion and <em>y = k/x</em> for inverse proportion.</p>",
    "workedExample": {
      "title": "Worked Example: Solve for y in inverse proportion",
      "problem": "Given y varies inversely with x, and y = 6 when x = 10, find y when x = 15.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate k (product of x and y) using x = 10 and y = 6.",
          "answer": "60",
          "feedback": "Correct! k = 10 × 6 = 60."
        },
        {
          "id": "q2",
          "prompt": "Write the formula y = k / x with the value of k substituted.",
          "answer": "y = 60 / x",
          "feedback": "Good! The formula is y = 60 / x."
        },
        {
          "id": "q3",
          "prompt": "Find y when x = 15 by substituting into y = 60 / x.",
          "answer": "4",
          "feedback": "Exactly, y = 60 ÷ 15 = 4."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A farmer notices that the time taken to harvest a field varies inversely with the number of workers. When 5 workers harvest it, it takes 12 hours. How long would it take 8 workers to harvest the same field? Explain your steps.</span>",
      "hint": "Remember to find the constant of proportionality first, then use it to calculate the new time.",
      "mustHaveKeywords": ["inverse proportion", "constant of proportionality", "multiply", "divide"],
      "optionalKeywords": ["reciprocal", "product"],
      "modelAnswer": "<span>The time taken and number of workers are inversely proportional, so time = k / workers. First, find k by multiplying 5 workers × 12 hours = 60. Then, to find new time for 8 workers, divide k by 8: 60 ÷ 8 = 7.5 hours.</span>",
      "scaffoldPrompts": ["Identify variables and relationship", "Calculate k = workers × time", "Use k to find new time for 8 workers"]
    }
  }
};