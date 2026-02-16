window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.3 - Direct and inverse proportion (graphical and algebraic) (Part 3)",
  "strapline": "Explore how two quantities relate directly or inversely through graphs and algebra, applying these concepts to real-world problems.",
  "learningObjectives": [
    "Students should be able to recognise and plot graphs of direct proportion (y = kx, producing straight lines through the origin) and inverse proportion (y = k/x, producing reciprocal curves) (Maths 3.3)",
    "Students should be able to work with algebraic forms to solve problems involving proportional relationships and identify the constant of proportionality from graphs and equations (Maths 3.3)",
    "Students should be able to apply concepts of direct and inverse proportion to real-world contexts where quantities vary proportionally (Maths 3.3)"
  ],
  "keyFormulas": [
    "y = kx (Direct Proportion)",
    "y = k/x (Inverse Proportion)",
    "k = y/x (Constant of proportionality for direct proportion)",
    "k = xy (Constant of proportionality for inverse proportion)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='340' height='240' fill='#fff8e1' stroke='#666' stroke-width='2'/><line x1='50' y1='250' x2='350' y2='50' stroke='#1e88e5' stroke-width='3'/><text x='360' y='45' font-family='Arial' font-size='14' fill='#1e88e5'>y = kx</text><path d='M50 250 Q 130 150 210 110 Q 290 80 350 60' fill='none' stroke='#e53935' stroke-width='3'/><text x='360' y='65' font-family='Arial' font-size='14' fill='#e53935'>y = k/x</text><line x1='50' y1='250' x2='50' y2='30' stroke='#333'/><line x1='50' y1='250' x2='350' y2='250' stroke='#333'/><text x='20' y='35' font-family='Arial' font-size='12' fill='#333'>y</text><text x='355' y='265' font-family='Arial' font-size='12' fill='#333'>x</text></svg>",
  "step1": {
    "title": "Concept: Understanding Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct proportion means two quantities increase or decrease together at the same rate. If you double one quantity, the other doubles. It is written as <strong>y = kx</strong>, where <strong>k</strong> is a constant.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about a taxi meter: the cost (<em>y</em>) is directly proportional to the distance travelled (<em>x</em>), with the constant <em>k</em> being the cost per mile.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Direct Proportion",
      "problem": "Suppose y is directly proportional to x with k = 3. Plot the points and find y when x = 4.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y when x = 1 using y = kx.",
          "answer": "3",
          "feedback": "Correct! y = 3 × 1 = 3."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 2.",
          "answer": "6",
          "feedback": "Correct. y = 3 × 2 = 6."
        },
        {
          "id": "q3",
          "prompt": "Calculate y when x = 4.",
          "answer": "12",
          "feedback": "Well done! y = 3 × 4 = 12."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Inverse proportion happens when one quantity increases as the other decreases. It is given by <strong>y = k/x</strong>. If one doubles, the other halves so their product is constant.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine workers completing a job: The time taken (<em>y</em>) is inversely proportional to the number of workers (<em>x</em>), assuming all work at the same speed.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Inverse Proportion",
      "problem": "If y = k/x and k = 24, find y when x = 3.",
      "questions": [
        {
          "id": "q4",
          "prompt": "Calculate y for x = 6.",
          "answer": "4",
          "feedback": "Correct. y = 24 ÷ 6 = 4."
        },
        {
          "id": "q5",
          "prompt": "Calculate y for x = 3.",
          "answer": "8",
          "feedback": "Correct! y = 24 ÷ 3 = 8."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Concept: Constant of Proportionality",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The constant <strong>k</strong> defines the exact relationship between x and y. In direct proportion, <strong>k = y ÷ x</strong>. In inverse proportion, <strong>k = x × y</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">The constant is like the fixed price per item or the total work done regardless of how it’s divided.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding k from Values",
      "problem": "Given values of x and y, find the constant k for both proportions.",
      "questions": [
        {
          "id": "q6",
          "prompt": "If y = 12 when x = 4 in a direct proportion, find k.",
          "answer": "3",
          "feedback": "Correct! k = y ÷ x = 12 ÷ 4 = 3."
        },
        {
          "id": "q7",
          "prompt": "If y = 6 when x = 4 in an inverse proportion, find k.",
          "answer": "24",
          "feedback": "Correct. k = x × y = 4 × 6 = 24."
        }
      ]
    }
  },
  "step4": {
    "title": "Graphical Interpretation of Proportions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct proportion graphs are straight lines through the origin, while inverse proportion graphs are curved hyperbolas that approach the axes but never touch them.</p>",
    "workedExample": {
      "title": "Worked Example: Identify the Graph Type",
      "problem": "From the graph, decide if the relationship is direct or inverse proportion.",
      "questions": [
        {
          "id": "q8",
          "prompt": "If the graph is a straight line passing through (0,0), is it direct or inverse proportion?",
          "answer": "direct",
          "feedback": "Correct! A straight line through the origin indicates direct proportion."
        },
        {
          "id": "q9",
          "prompt": "If the graph is a curve that approaches but never touches the axes, what type is it?",
          "answer": "inverse",
          "feedback": "Correct. The curve shape indicates inverse proportion."
        }
      ]
    }
  },
  "step5": {
    "title": "Solving Problems Using Algebraic Forms",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use algebraic formulas <em>y = kx</em> or <em>y = k/x</em> to solve problems after finding k from given values.</p>",
    "workedExample": {
      "title": "Worked Example: Solving a Direct Proportion Problem",
      "problem": "A car travels 60 miles in 1 hour. How far does it go in 5 hours?",
      "questions": [
        {
          "id": "q10",
          "prompt": "Find the constant k if y = kx, y is distance, x is time.",
          "answer": "60",
          "feedback": "Correct! k = 60 miles/hour."
        },
        {
          "id": "q11",
          "prompt": "Calculate distance y when x = 5 hours.",
          "answer": "300",
          "feedback": "Correct! Distance = 60 × 5 = 300 miles."
        }
      ]
    }
  },
  "step6": {
    "title": "Applying Proportions to Real-World Contexts",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct and inverse proportions describe many everyday relationships like speed and time, or quantity and cost. Understanding them helps solve practical problems.</p>",
    "workedExample": {
      "title": "Worked Example: Inverse Proportion in Real Life",
      "problem": "If 8 workers take 6 hours to complete a task, how long will it take 12 workers?",
      "questions": [
        {
          "id": "q12",
          "prompt": "Find the constant k using k = x × y.",
          "answer": "48",
          "feedback": "Correct! k = 8 × 6 = 48."
        },
        {
          "id": "q13",
          "prompt": "Calculate time y for x = 12 workers.",
          "answer": "4",
          "feedback": "Well done! Time = 48 ÷ 12 = 4 hours."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A machine fills bottles with juice. The time taken (<em>y</em> minutes) to fill <em>x</em> bottles is inversely proportional to the number of machines operating. If 3 machines take 20 minutes to fill the bottles, how long will 5 machines take?</span>",
      "hint": "Remember to find the constant of proportionality first using k = x × y, then solve for y with the new x.",
      "mustHaveKeywords": ["inverse proportion", "constant of proportionality", "k = x × y"],
      "optionalKeywords": ["reciprocal relationship", "time decreases as machines increase"],
      "modelAnswer": "<span>Because time and number of machines are inversely proportional, we use y = k/x. First, find k = 3 × 20 = 60. Next, for 5 machines, y = 60 ÷ 5 = 12 minutes.</span>",
      "scaffoldPrompts": ["Identify the quantities that are inversely proportional", "Calculate k using given values", "Use k to find the new value of y"]
    }
  }
};