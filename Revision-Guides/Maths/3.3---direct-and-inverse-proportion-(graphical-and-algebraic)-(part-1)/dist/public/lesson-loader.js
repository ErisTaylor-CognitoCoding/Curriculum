window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.3 - Direct and inverse proportion (graphical and algebraic) (Part 1)",
  "strapline": "Understanding how direct and inverse proportion relationships are expressed algebraically and graphically, and identifying their constants of proportionality.",
  "learningObjectives": [
    "Students should recognise and plot graphs of direct proportion (y = kx) producing straight lines through the origin (Maths 3.3)",
    "Students should recognise and plot graphs of inverse proportion (y = k/x) producing reciprocal curves (Maths 3.3)",
    "Students should identify the constant of proportionality from graphs and equations involving direct and inverse proportion (Maths 3.3)"
  ],
  "keyFormulas": [
    "y = kx (Direct proportion)",
    "y = k/x (Inverse proportion)",
    "k = y/x (Constant of proportionality for direct proportion)",
    "k = xy (Constant of proportionality for inverse proportion)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='340' height='240' fill='#fafafa' stroke='#ccc' /><line x1='50' y1='250' x2='350' y2='50' stroke='#0074D9' stroke-width='3'/><text x='355' y='55' font-family='sans-serif' font-size='12' fill='#0074D9'>Direct Proportion: y = kx</text><path d='M 60 250 Q 150 120 340 50' stroke='#FF4136' fill='none' stroke-width='3'/><text x='345' y='60' font-family='sans-serif' font-size='12' fill='#FF4136'>Inverse Proportion: y = k/x</text><line x1='50' y1='250' x2='50' y2='30' stroke='#666' stroke-width='1' /><line x1='50' y1='250' x2='350' y2='250' stroke='#666' stroke-width='1' /><text x='40' y='265' font-family='sans-serif' font-size='12'>0</text></svg>",
  "step1": {
    "title": "Concept: Understanding Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct proportion means that as one value increases, the other increases at a constant rate. The equation is <strong>y = kx</strong>, where <em>k</em> is the constant of proportionality. The graph is always a straight line passing through the origin (0,0).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of filling a water tank at a steady rate. The amount of water (y) is directly proportional to the time (x) spent filling it. If you fill twice as long, you get twice the water.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Direct Proportion Graph",
      "problem": "Given y = 3x, plot the graph for values x = 1, 2, 3.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y when x = 1.",
          "answer": "3",
          "feedback": "Correct! y = 3 × 1 = 3."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 2.",
          "answer": "6",
          "feedback": "Well done! y = 3 × 2 = 6."
        },
        {
          "id": "q3",
          "prompt": "Calculate y when x = 3.",
          "answer": "9",
          "feedback": "Excellent! y = 3 × 3 = 9."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Inverse proportion means that as one value increases, the other decreases such that their product is constant. It is written as <strong>y = k/x</strong>. Its graph is a reciprocal curve (hyperbola) that approaches but never touches the axes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine sharing a fixed amount of money among people. The more people (x), the less each gets (y). Their total share (product xy) remains constant.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Inverse Proportion Graph",
      "problem": "Given y = 8/x, find y for x = 1, 2, 4.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y when x = 1.",
          "answer": "8",
          "feedback": "Correct. y = 8 ÷ 1 = 8."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 2.",
          "answer": "4",
          "feedback": "Good job! y = 8 ÷ 2 = 4."
        },
        {
          "id": "q3",
          "prompt": "Calculate y when x = 4.",
          "answer": "2",
          "feedback": "Well done. y = 8 ÷ 4 = 2."
        }
      ]
    }
  },
  "step3": {
    "title": "Identifying the Constant of Proportionality",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The constant of proportionality (<em>k</em>) links the variables in both direct and inverse proportion. For direct proportion, it is the gradient of the line and given by k = y/x. For inverse proportion, it equals the product xy, which stays constant.</p>",
    "workedExample": {
      "title": "Find the constant k",
      "problem": "Given data points from a direct proportion: (x=4, y=12), find k.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate k = y/x for the given point.",
          "answer": "3",
          "feedback": "Correct: 12 ÷ 4 = 3."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Recognise Direct Proportion from Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct proportion graphs are straight lines passing through (0,0). Any straight line that doesn't start at the origin is not direct proportion.</p>",
    "workedExample": {
      "title": "Is this direct proportion?",
      "problem": "A graph passes through points (0,0), (2,6), (4,12). Is this direct proportion?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the ratio y/x for two points and check if it is constant.",
          "answer": "3",
          "feedback": "Correct. Both (6/2) and (12/4) equal 3, so it's direct proportion."
        }
      ]
    }
  },
  "step5": {
    "title": "Practice: Recognise Inverse Proportion from Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Inverse proportion graphs have reciprocal curves (hyperbolas). The product of x and y remains constant, and the curve approaches the axes but never crosses them.</p>",
    "workedExample": {
      "title": "Is this inverse proportion?",
      "problem": "A graph passes through points (1,10), (2,5), (5,2). Is this inverse proportion?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the product xy for two points and check if it's constant.",
          "answer": "10",
          "feedback": "Correct. For (1,10) and (2,5), both xy = 10, so inverse proportion."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to determine whether two variables are in direct or inverse proportion given a table of values and how to find the constant of proportionality from those values.</span>",
      "hint": "Remember to check if the ratio y/x or the product xy stays constant across the table.",
      "mustHaveKeywords": ["direct proportion", "inverse proportion", "constant of proportionality", "ratio", "product"],
      "optionalKeywords": ["graph", "straight line", "reciprocal curve"],
      "modelAnswer": "<span>To determine if two variables are in direct proportion, check if the ratio y/x is constant for all pairs of values, meaning y = kx, a straight line graph through the origin. For inverse proportion, check if the product xy is constant, meaning y = k/x, represented by a reciprocal curve. The constant of proportionality k is that constant ratio or product found from the data.</span>",
      "scaffoldPrompts": ["Check the ratio y/x for all values", "Check the product xy for all values", "If ratios match, it's direct proportion", "If products match, it's inverse proportion", "Identify constant k from the ratio or product"]
    }
  }
};