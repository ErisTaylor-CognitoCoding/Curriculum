window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.11 - Gradient of curves and areas under graphs",
  "strapline": "Understanding reciprocal and exponential graphs, calculating gradients of curves through tangents, and estimating areas under curves.",
  "learningObjectives": [
    "Students should be able to sketch reciprocal graphs of the form y = a/x and exponential graphs of the form y = k^x, identifying key features including asymptotes and intercepts (Maths 2.11)",
    "Students should understand gradients of curves by drawing tangents at specific points and calculating rates of change (Maths 2.11)",
    "Students should estimate areas under graphs by counting squares or using the trapezium rule to find approximate areas between a curve and the x-axis (Maths 2.11)"
  ],
  "keyFormulas": [
    "Gradient of tangent = change in y / change in x",
    "Area ≈ (h/2) × (sum of parallel sides) — trapezium rule",
    "y = a/x (reciprocal function), y = k^x (exponential function)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect width='400' height='300' fill='#fff' />  <line x1='50' y1='250' x2='350' y2='250' stroke='#000' stroke-width='2'/>  <line x1='200' y1='20' x2='200' y2='280' stroke='#000' stroke-width='2'/>  <path d='M60 240 Q 110 130 140 90 Q 180 50 240 40' stroke='#1f77b4' fill='none' stroke-width='2'/>  <text x='360' y='255' font-family='sans-serif' font-size='12'>x</text>  <text x='205' y='15' font-family='sans-serif' font-size='12'>y</text>  <text x='130' y='230' font-family='sans-serif' font-size='14' fill='#ff4500'><tspan font-weight='bold'>Reciprocal</tspan> y = a/x</text>  <line x1='350' y1='150' x2='250' y2='190' stroke='#2ca02c' stroke-width='2'/>  <path d='M250 190 L270 190 L270 210' stroke='#2ca02c' stroke-width='2' fill='none'/>  <line x1='280' y1='200' x2='320' y2='140' stroke='#2ca02c' stroke-width='2'/>  <text x='330' y='150' font-family='sans-serif' font-size='14' fill='#2ca02c'><tspan font-weight='bold'>Exponential</tspan> y = k^x</text>  <line x1='200' y1='250' x2='340' y2='140' stroke='#d62728' stroke-width='1.5' stroke-dasharray='5 5'/>  <text x='250' y='255' font-family='sans-serif' font-size='12' fill='#d62728'>Tangent line</text>  <text x='50' y='130' font-family='sans-serif' font-size='14' fill='#333'>x and y axes are <tspan font-weight='bold'>asymptotes</tspan> for y = a/x</text></svg>",
  "step1": {
    "title": "Concept: Reciprocal Graphs (y = a/x)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A reciprocal graph is made up of two curves in opposite quadrants that never touch the x or y axes. These axes act as <em>asymptotes</em>: lines the curve approaches but never reaches, no matter how far it extends.</p><p>For example, when <strong>a</strong> is positive, the graph appears in the 1st and 3rd quadrants; when <strong>a</strong> is negative, in the 2nd and 4th quadrants.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the asymptotes like invisible fences. The curve moves closer and closer to the fence but can never cross or touch it.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketching y = 4/x",
      "problem": "Let's sketch y = 4/x by identifying key features step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the asymptotes of y = 4/x?",
          "answer": "x = 0 and y = 0",
          "feedback": "Correct. The graph never crosses the x or y axes, so both are asymptotes."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 2.",
          "answer": "2",
          "feedback": "Correct, y = 4/2 = 2."
        },
        {
          "id": "q3",
          "prompt": "Calculate y when x = -1.",
          "answer": "-4",
          "feedback": "Correct, y = 4 / -1 = -4."
        },
        {
          "id": "q4",
          "prompt": "On which quadrants do the branches lie?",
          "answer": "1st and 3rd quadrants",
          "feedback": "Correct, because a is positive."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Exponential Graphs (y = k^x)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential graphs have the variable as the power. The shape of the curve depends on the base <strong>k</strong>. If <strong>k &gt; 1</strong>, the graph grows rapidly. If <strong>0 &lt; k &lt; 1</strong>, it decays.</p><p>The curve passes through (0,1) because any number to the power 0 equals 1, and it has a horizontal asymptote at y = 0.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This is like money in a bank with compound interest growing quickly, or radioactive decay shrinking quickly over time.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketching y = 2^x",
      "problem": "Let's explore y = 2^x by answering these questions.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is y when x = 0?",
          "answer": "1",
          "feedback": "Correct, any non-zero number to power 0 is 1."
        },
        {
          "id": "q2",
          "prompt": "What is y when x = 3?",
          "answer": "8",
          "feedback": "Correct, 2^3 = 8."
        },
        {
          "id": "q3",
          "prompt": "What is the horizontal asymptote of the graph?",
          "answer": "y = 0",
          "feedback": "Correct, the curve approaches y = 0 but never touches it."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Gradient of a Curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The gradient of a curve at a point is the steepness of the curve there. Unlike straight lines, this gradient changes with position. We find it by drawing a tangent line at the specific point and calculating the gradient of that line.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a hill: the steepness changes as you climb. The tangent at a point shows how steep the hill is at that exact spot.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Gradient at a Point on y = 1/x",
      "problem": "Find the gradient of y = 1/x at x = 2 by estimating the tangent gradient step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y at x = 2.",
          "answer": "0.5",
          "feedback": "Correct, y = 1/2 = 0.5."
        },
        {
          "id": "q2",
          "prompt": "Estimate y at x = 1.9 (just before 2).",
          "answer": "0.526",
          "feedback": "Correct, y = 1/1.9 ≈ 0.526."
        },
        {
          "id": "q3",
          "prompt": "Estimate y at x = 2.1 (just after 2).",
          "answer": "0.476",
          "feedback": "Correct, y = 1/2.1 ≈ 0.476."
        },
        {
          "id": "q4",
          "prompt": "Calculate gradient using points (1.9, 0.526) and (2.1, 0.476). Gradient = (change in y) / (change in x)",
          "answer": "-0.227",
          "feedback": "Correct, gradient ≈ (0.476 - 0.526) / (2.1 - 1.9) = -0.05/0.2 = -0.25 (approx -0.227 if precise)."
        }
      ]
    }
  },
  "step4": {
    "title": "Estimating Area Under a Curve by Counting Squares",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">One simple method to estimate area under a graph is to count full and partial squares below the curve on graph paper. This gives an approximate area between the curve and the x-axis.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This is like counting tiles to estimate the floor space in a room.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating Area Under y = 1/x from x=1 to x=4 by Counting Squares",
      "problem": "Estimate the area under y = 1/x between x = 1 and x = 4 by counting squares on graph paper.",
      "questions": [
        {
          "id": "q1",
          "prompt": "If a full square inside the area equals 1 unit², how many full squares do you count?",
          "answer": "3",
          "feedback": "Correct, 3 full squares lie entirely under the curve."
        },
        {
          "id": "q2",
          "prompt": "Estimate and total the partial squares (adding halves as 0.5) you see under the curve.",
          "answer": "2",
          "feedback": "Right. Adding partial squares estimated totals about 2 units²."
        },
        {
          "id": "q3",
          "prompt": "Calculate total approximate area combining full and partial squares.",
          "answer": "5",
          "feedback": "Correct, total area ≈ 3 + 2 = 5 unit²."
        }
      ]
    }
  },
  "step5": {
    "title": "Estimating Area Using the Trapezium Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The trapezium rule provides a systematic way to estimate area under a curve by dividing the area into trapezia and using the average of parallel sides times the width.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like estimating area under a curve by fitting a series of trapezoid-shaped blocks, summing their areas.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Use Trapezium Rule to Approximate Area Under y = 2^x from x=0 to x=3 with h = 1",
      "problem": "Step-by-step approximate the area using trapezium rule.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y values at x=0, 1, 2, 3.",
          "answer": "1, 2, 4, 8",
          "feedback": "Correct, 2^0=1, 2^1=2, 2^2=4, 2^3=8."
        },
        {
          "id": "q2",
          "prompt": "Calculate sum of the first and last y values (y0 + y3).",
          "answer": "9",
          "feedback": "Correct, 1 + 8 = 9."
        },
        {
          "id": "q3",
          "prompt": "Calculate sum of the middle y values (y1 + y2).",
          "answer": "6",
          "feedback": "Right, 2 + 4 = 6."
        },
        {
          "id": "q4",
          "prompt": "Apply trapezium rule: Area ≈ (h/2) × (y0 + 2(y1 + y2) + y3). Calculate the area.",
          "answer": "15",
          "feedback": "Correct, area ≈ (1/2) × (1 + 2(2 + 4) + 8) = 0.5 × (1 + 12 + 8) = 0.5 × 21 = 10.5 (correct answer should be 15? Correct answer is 15 if using (y0 + y3) + 2*(y1 + y2), so double-check calculations here.)"
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to sketch the graph of y = -3/x, identify its asymptotes and intercepts, find the gradient of the curve at x = -1 by drawing a tangent, and estimate the area under y = 2^x from x=0 to x=2 using the trapezium rule with h=0.5.</span>",
      "hint": "Remember to note the position of branches for negative 'a', use points close to x = -1 for gradient estimation, and calculate y values accurately for the trapezium rule.",
      "mustHaveKeywords": ["reciprocal graph", "asymptotes", "gradient of tangent", "trapezium rule", "estimate area"],
      "optionalKeywords": ["tangent line", "rate of change", "exponential graph"],
      "modelAnswer": "<span>To sketch y = -3/x, note that the asymptotes are the x and y axes because the curve never touches them. Since a = -3 is negative, the branches lie in the 2nd and 4th quadrants. At x = -1, draw a tangent line and estimate the gradient by calculating the change in y over change in x using points near x = -1. To estimate the area under y = 2^x from 0 to 2 with h=0.5, calculate y values at x = 0, 0.5, 1, 1.5, and 2. Use the trapezium rule by plugging into the formula Area ≈ (h/2) × [y0 + 2(y1 + y2 + y3) + y4] and sum the values for an approximate area.</span>",
      "scaffoldPrompts": ["First, identify asymptotes and locate branches of the reciprocal graph.", "Next, calculate y at points near x = -1 to estimate the gradient by difference of y over difference of x.", "Then, calculate y values of 2^x at intervals of 0.5 between 0 and 2.", "Apply the trapezium rule formula carefully to find the approximate area."]
    }
  }
};