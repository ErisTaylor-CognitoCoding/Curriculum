window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.11 - Gradient of curves and areas under graphs",
  "strapline": "Learn to sketch reciprocal and exponential graphs, calculate gradients of curves using tangents, and estimate areas under graphs using counting squares and the trapezium rule.",
  "learningObjectives": [
    "Students should be able to sketch reciprocal graphs of the form y = a/x and exponential graphs of the form y = k^x, identifying key features including asymptotes and intercepts (Maths 2.11)",
    "Students should understand gradients of curves by drawing tangents at specific points and calculating rates of change (Maths 2.11)",
    "Students should estimate areas under graphs by counting squares or using the trapezium rule to find approximate areas between a curve and the x-axis (Maths 2.11)"
  ],
  "keyFormulas": [
    "Gradient of a straight line = rise/run",
    "Gradient of a curve ≈ gradient of tangent drawn at a point = Δy/Δx",
    "Area by trapezium rule = ½ × (sum of parallel sides) × height"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <line x1='50' y1='150' x2='350' y2='150' stroke='#333' stroke-width='2'/>\
    <line x1='200' y1='20' x2='200' y2='280' stroke='#333' stroke-width='2'/>\
    <path d='M60 240 Q120 80 340 20' fill='none' stroke='blue' stroke-width='2'/>\
    <text x='210' y='50' font-family='sans-serif' font-size='12'>y = k^x (exponential)</text>\
  </svg>",
  "step1": {
    "title": "Concept 1: Reciprocal graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A reciprocal graph is the curve of the form <strong>y = a/x</strong>. It has two branches located in opposite quadrants and approaches but never touches the axes, called <em>asymptotes</em>. The x and y axes themselves are these asymptotes.</p><p>The graph is undefined at x=0, so there is a vertical asymptote at x=0 and a horizontal asymptote at y=0.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two boats moving away from a dock at opposite directions, getting further apart but never touching a marker line on the river bank (the axes).</p>"
    },
    "workedExample": {
      "title": "Interactive Worked Example: Plot points for y = 2/x",
      "problem": "Let's plot the graph of y = 2/x by finding points. Please enter values for x and compute y step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter a positive value for x (e.g., 1, 2, 4):",
          "answer": ["1", "2", "4"],
          "feedback": "Good! Let's calculate y = 2/x for this value."
        },
        {
          "id": "q2",
          "prompt": "Calculate y = 2 divided by your x:",
          "answer": ["2", "1", "0.5"],
          "feedback": "Correct! y = 2/x for your chosen value."
        },
        {
          "id": "q3",
          "prompt": "Enter a negative value for x (e.g., -1, -2, -4):",
          "answer": ["-1", "-2", "-4"],
          "feedback": "Great! Now calculate y for this x."
        },
        {
          "id": "q4",
          "prompt": "Calculate y = 2 divided by your x:",
          "answer": ["-2", "-1", "-0.5"],
          "feedback": "Well done! You found the corresponding y value."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Exponential graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An exponential graph follows <strong>y = k^x</strong>. If the base <em>k</em> is greater than 1, the graph shows rapid growth, curving upwards. If 0 &lt; k &lt; 1, it shows decay, curving downwards.</p><p>The graph always passes through (0,1) because any number to the zero power is 1, and the x-axis (y=0) is a horizontal asymptote it never crosses.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like money in a bank account with compound interest, the amount grows faster and faster over time.</p>"
    },
    "workedExample": {
      "title": "Interactive Worked Example: Plot y = 3^x",
      "problem": "Choose x-values to calculate and plot the graph of y = 3^x.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter a value for x (try 0):",
          "answer": "0",
          "feedback": "Correct! 3⁰ = 1."
        },
        {
          "id": "q2",
          "prompt": "Enter a positive value for x (e.g., 1, 2):",
          "answer": ["1", "2"],
          "feedback": "Great! Now calculate y = 3^x for the value."
        },
        {
          "id": "q3",
          "prompt": "Calculate y = 3 to the power of your x:",
          "answer": ["3", "9"],
          "feedback": "Right! The value increases quickly."
        },
        {
          "id": "q4",
          "prompt": "Try a negative value for x (e.g., -1):",
          "answer": "-1",
          "feedback": "Good idea! Calculate y = 3^-1."
        },
        {
          "id": "q5",
          "prompt": "Calculate y = 3^-1:",
          "answer": "1/3",
          "feedback": "Exactly, 3^-1 = 1/3."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Gradient of a curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The gradient of a curve at a point is the steepness of the curve there. It changes along the curve and is found by drawing a tangent line at the point and calculating the gradient of this tangent line, which is <em>rise over run</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a hill where the steepness changes as you walk; the tangent shows how steep it is at exactly where you're standing.</p>"
    },
    "workedExample": {
      "title": "Interactive Worked Example: Finding gradient at a point on y = x²",
      "problem": "Find the gradient of y = x² at x = 2 by drawing a tangent line.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y at x=2:",
          "answer": "4",
          "feedback": "Correct, y = 2² = 4."
        },
        {
          "id": "q2",
          "prompt": "Estimate two points on the tangent line near (2,4), choose x=1.9 and x=2.1, and input their y values (you may estimate or calculate approximately):",
          "answer": ["3.6", "4.4"],
          "feedback": "Good estimates for the tangent!"
        },
        {
          "id": "q3",
          "prompt": "Calculate gradient = (change in y) / (change in x) = (4.4 - 3.6) / (2.1 - 1.9):",
          "answer": "4",
          "feedback": "Correct! Gradient at x=2 is approximately 4."
        }
      ]
    }
  },
  "step4": {
    "title": "Estimating areas under curves by counting squares",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">One way to estimate the area under a curve between two points on the x-axis is to count the full and partial squares under the curve on graph paper and add them up.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like counting tiles to find the area of a floor, where some tiles are only partially covered.</p>"
    },
    "workedExample": {
      "title": "Interactive Worked Example: Estimating area under y = 1/x from x=1 to x=3",
      "problem": "Use provided grid and graph to estimate area by counting full and half squares.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many full squares are under the curve between x=1 and x=3?",
          "answer": "8",
          "feedback": "Correct, there are 8 full squares."
        },
        {
          "id": "q2",
          "prompt": "Estimate how many half squares (combined) are under the curve in this interval:",
          "answer": "4",
          "feedback": "Right, about 4 half squares make 2 full squares."
        },
        {
          "id": "q3",
          "prompt": "What is your total approximate area (full + half counted as 0.5 each)?",
          "answer": "10",
          "feedback": "Good estimate, total area ≈ 10 square units."
        }
      ]
    }
  },
  "step5": {
    "title": "Estimating area under curves using the trapezium rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The trapezium rule estimates area under a curve by dividing it into trapeziums between x-values, calculating each area, and summing them up.</p><p>Area between x = a and b ≈ ½ × (sum of parallel sides) × height for each trapezium.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like approximating a curved hill by flat panels to find the total area beneath it.</p>"
    },
    "workedExample": {
      "title": "Interactive Worked Example: Use trapezium rule on y = x² from x=1 to x=3 in 2 intervals",
      "problem": "Calculate areas of trapeziums between points (1,1), (2,4), and (3,9).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate area of trapezium between x=1 and x=2: height = 1, parallel sides y=1 and y=4. Area = 0.5 × (1+4) × 1 = ?",
          "answer": "2.5",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Calculate area of trapezium between x=2 and x=3: height = 1, parallel sides y=4 and y=9. Area = 0.5 × (4+9) × 1 = ?",
          "answer": "6.5",
          "feedback": "Well done."
        },
        {
          "id": "q3",
          "prompt": "Sum both areas to estimate total area under curve from x=1 to x=3:",
          "answer": "9",
          "feedback": "Correct, approximate total area is 9."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Sketch the reciprocal graph y = 3/x and the exponential graph y = (1/2)^x. Identify the asymptotes and intercepts. Then find the gradient of y = x² at x = 3 by drawing a tangent and calculating its gradient. Finally, estimate the area under y = x from x=1 to x=4 using the trapezium rule with 3 equal intervals.</span>",
      "hint": "Remember: Reciprocal graphs approach axes but never cross; exponential graphs pass through (0,1) and asymptote to y=0; gradients on curves change and need tangents; trapezium rule divides area under curve into trapeziums.",
      "mustHaveKeywords": ["reciprocal graph", "exponential graph", "asymptote", "gradient", "tangent line", "trapezium rule", "area estimation"],
      "optionalKeywords": ["intercept", "rates of change", "approximation"],
      "modelAnswer": "<span>The reciprocal graph y = 3/x has vertical and horizontal asymptotes at x=0 and y=0, crosses neither axis, with two branches in opposite quadrants. The exponential graph y = (1/2)^x passes through (0,1) and decays towards y=0 as x increases, with y=0 as the horizontal asymptote. To find the gradient of y = x² at x=3, draw a tangent and use points close to x=3 to calculate gradient, which is approximately 6. For the area under y = x from 1 to 4, use trapezium rule with intervals [1,2], [2,3], [3,4]: calculate y-values at these points; compute areas of each trapezium; sum them to estimate the total area.</span>",
      "scaffoldPrompts": [
        "Start by plotting reciprocal graph points for y = 3/x.",
        "Draw the exponential graph and label the asymptote.",
        "At x=3, calculate y and select nearby points for the tangent gradient.",
        "List y-values at x=1,2,3,4 for trapezium rule.",
        "Calculate each trapezium's area and add."
      ]
    }
  }
};