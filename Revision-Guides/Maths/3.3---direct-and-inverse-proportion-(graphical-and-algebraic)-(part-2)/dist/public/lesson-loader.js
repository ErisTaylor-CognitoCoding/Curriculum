window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.3 - Direct and inverse proportion (graphical and algebraic) (Part 2)",
  "strapline": "Explore how direct and inverse proportion relationships are represented both graphically and algebraically, and learn to find and use the constant of proportionality.",
  "learningObjectives": [
    "Students should be able to recognise and plot graphs of direct proportion (y = kx) producing straight lines through the origin and inverse proportion (y = k/x) producing reciprocal curves (Maths 3.3)",
    "Students should be able to identify the constant of proportionality from graphs and equations in proportional relationships (Maths 3.3)",
    "Students should be able to work with algebraic forms to solve problems involving direct and inverse proportional relationships (Maths 3.3)"
  ],
  "keyFormulas": [
    "Direct Proportion: y = kx",
    "Inverse Proportion: y = k / x",
    "Constant of proportionality (k): For direct proportion k = y/x; For inverse proportion k = xy"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#000' /><line x1='50' y1='250' x2='350' y2='50' stroke='#1a73e8' stroke-width='3' /><path d='M 60 240 Q 150 150 350 70' fill='none' stroke='#ea4335' stroke-width='3' /><text x='360' y='60' font-family='sans-serif' font-size='14' fill='#ea4335'>Inverse: y = k/x</text><text x='360' y='50' font-family='sans-serif' font-size='14' fill='#1a73e8'>Direct: y = kx</text><circle cx='50' cy='250' r='4' fill='#000'/><text x='30' y='270' font-family='sans-serif' font-size='12'>0</text></svg>",
  "step1": {
    "title": "Understanding Direct Proportion (y = kx)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct proportion describes a relationship where two quantities increase or decrease at the same rate. If one doubles, the other doubles as well. Mathematically, this is written as <em>y = kx</em>, where <strong>k</strong> is the constant of proportionality or gradient.</p><p>The graph of a direct proportion is a straight line passing through the origin (0,0).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine buying apples: if 1 apple costs £2, 2 apples cost £4, 3 apples cost £6, and so on. The cost and the number of apples are directly proportional.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting a Direct Proportion Graph",
      "problem": "You have the direct proportion relationship y = 3x. Let's plot some points.",
      "questions": [
        {
          "id": "q1",
          "prompt": "If x = 1, what is y?",
          "answer": "3",
          "feedback": "Correct. y = 3 × 1 = 3."
        },
        {
          "id": "q2",
          "prompt": "If x = 2, what is y?",
          "answer": "6",
          "feedback": "Correct. y = 3 × 2 = 6."
        },
        {
          "id": "q3",
          "prompt": "If x = 4, what is y?",
          "answer": "12",
          "feedback": "Well done! y = 3 × 4 = 12."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Inverse Proportion (y = k/x)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Inverse proportion describes a relationship where one quantity increases while the other decreases at the same rate. Mathematically, <em>y = k/x</em>. The constant <strong>k</strong> is the product of the two variables and remains the same.</p><p>The graph of an inverse proportion is a reciprocal curve that approaches the axes but never touches them.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about speed and time when driving a fixed distance: the faster you go, the less time it takes. Speed and time are inversely proportional.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting an Inverse Proportion Graph",
      "problem": "Given y = 12 / x, plot some points.",
      "questions": [
        {
          "id": "q4",
          "prompt": "If x = 1, what is y?",
          "answer": "12",
          "feedback": "Correct. y = 12 / 1 = 12."
        },
        {
          "id": "q5",
          "prompt": "If x = 3, what is y?",
          "answer": "4",
          "feedback": "Correct. y = 12 / 3 = 4."
        },
        {
          "id": "q6",
          "prompt": "If x = 6, what is y?",
          "answer": "2",
          "feedback": "Well done! y = 12 / 6 = 2."
        }
      ]
    }
  },
  "step3": {
    "title": "Finding the Constant of Proportionality from Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can find the constant of proportionality <strong>k</strong> using the graph:</p><ul><li>For direct proportion (y = kx), find the gradient using two points: <em>k = Δy / Δx</em>.</li><li>For inverse proportion (y = k/x), multiply the <em>x</em> and <em>y</em> coordinates of any point on the graph: <em>k = xy</em>.</li></ul>",
    "workedExample": {
      "title": "Worked Example: Calculate k from Points",
      "problem": "Given two points on a direct proportion graph: (2, 10) and (4, 20), find k.",
      "questions": [
        {
          "id": "q7",
          "prompt": "Calculate the change in y (Δy) between the points.",
          "answer": "10",
          "feedback": "Correct. 20 - 10 = 10."
        },
        {
          "id": "q8",
          "prompt": "Calculate the change in x (Δx) between the points.",
          "answer": "2",
          "feedback": "Correct. 4 - 2 = 2."
        },
        {
          "id": "q9",
          "prompt": "Find the constant k = Δy / Δx.",
          "answer": "5",
          "feedback": "Well done! k = 10 / 2 = 5."
        }
      ]
    }
  },
  "step4": {
    "title": "Finding the Constant of Proportionality from Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For equations given in the forms y = kx or y = k/x:</p><ul><li>In direct proportion y = kx, <strong>k</strong> is the coefficient of <em>x</em>.</li><li>In inverse proportion y = k/x, <strong>k</strong> is the constant numerator.</li></ul>",
    "workedExample": {
      "title": "Worked Example: Identify k from Equations",
      "problem": "Find the value of k in each equation.",
      "questions": [
        {
          "id": "q10",
          "prompt": "For y = 7x, what is k?",
          "answer": "7",
          "feedback": "Correct. The coefficient of x is 7."
        },
        {
          "id": "q11",
          "prompt": "For y = 15 / x, what is k?",
          "answer": "15",
          "feedback": "Well done! The constant numerator k is 15."
        }
      ]
    }
  },
  "step5": {
    "title": "Solving Problems Using Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the equation y = kx to find missing values when given some information. First find <strong>k</strong>, then substitute known values to find unknowns.</p>",
    "workedExample": {
      "title": "Worked Example: Direct Proportion Calculation",
      "problem": "A car travels 150 km in 3 hours. Use direct proportion to find how far the car travels in 5 hours.",
      "questions": [
        {
          "id": "q12",
          "prompt": "Find the value of k (distance per hour).",
          "answer": "50",
          "feedback": "Correct. k = 150 / 3 = 50 km/h."
        },
        {
          "id": "q13",
          "prompt": "Calculate the distance for 5 hours using y = kx.",
          "answer": "250",
          "feedback": "Well done! Distance = 50 × 5 = 250 km."
        }
      ]
    }
  },
  "step6": {
    "title": "Solving Problems Using Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the equation y = k/x when one quantity decreases as the other increases. First find <strong>k</strong>, then substitute known values to find unknowns.</p>",
    "workedExample": {
      "title": "Worked Example: Inverse Proportion Calculation",
      "problem": "It takes 8 workers 12 hours to complete a job. How long would it take 6 workers?",
      "questions": [
        {
          "id": "q14",
          "prompt": "Find k, the product of workers and hours.",
          "answer": "96",
          "feedback": "Correct. k = 8 × 12 = 96."
        },
        {
          "id": "q15",
          "prompt": "Calculate how long it takes 6 workers (hours = k / number of workers).",
          "answer": "16",
          "feedback": "Well done! Hours = 96 / 6 = 16."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how you would use both direct and inverse proportion to solve a problem involving two variables. Include how to find the constant of proportionality from given data or graphs, and how to use this constant to find unknown values.</span>",
      "hint": "Remember to describe the difference in graphs for direct and inverse proportion and how the value of k is calculated in each case.",
      "mustHaveKeywords": ["constant of proportionality", "direct proportion", "inverse proportion", "graph", "algebraic equation"],
      "optionalKeywords": ["gradient", "product", "reciprocal curve", "straight line through origin"],
      "modelAnswer": "<span>To solve proportional problems, first identify if the relationship is direct (y = kx) or inverse (y = k/x) by considering how one quantity changes with the other. For direct proportion, the graph is a straight line through the origin and k is the gradient (k = y/x). For inverse proportion, the graph is a reciprocal curve and k is the product of x and y (k = xy). From given points or data, calculate k accordingly. Then use the appropriate formula substituting the known k and any given variable to find the unknown quantity.</span>",
      "scaffoldPrompts": [
        "Step 1: Determine if it is direct or inverse proportion",
        "Step 2: Find the constant k from data or a graph",
        "Step 3: Write the algebraic formula using k",
        "Step 4: Substitute known values to calculate unknowns"
      ]
    }
  }
};