window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.10 - Reciprocal and exponential graphs",
  "strapline": "Explore how to sketch and analyse graphs of reciprocal and exponential functions, identifying key features like asymptotes and intercepts.",
  "learningObjectives": [
    "Students should be able to sketch reciprocal graphs of the form y = a/x and identify their key features including asymptotes (Maths 2.10)",
    "Students should be able to sketch exponential graphs of the form y = k^x and identify their key features including intercepts (Maths 2.10)",
    "Students should be able to recognise and describe the properties of reciprocal and exponential functions from their graphs (Maths 2.10)"
  ],
  "keyFormulas": [
    "Reciprocal function: y = a/x where a ≠ 0",
    "Exponential function: y = k^x where k > 0",
    "Asymptote: A line that the graph approaches but never touches"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='350' fill='#fff'/><line x1='50' y1='300' x2='350' y2='300' stroke='#000' stroke-width='2'/><line x1='200' y1='50' x2='200' y2='310' stroke='#000' stroke-width='2'/><text x='355' y='305' font-family='sans-serif' font-size='14'>x</text><text x='210' y='55' font-family='sans-serif' font-size='14'>y</text><path d='M210 280 Q270 120 210 80' stroke='#1f77b4' stroke-width='3' fill='none'/><path d='M190 80 Q130 120 190 280' stroke='#1f77b4' stroke-width='3' fill='none'/><line x1='200' y1='50' x2='200' y2='310' stroke='#777' stroke-dasharray='5,5'/><line x1='50' y1='300' x2='350' y2='300' stroke='#777' stroke-dasharray='5,5'/><text x='280' y='160' font-family='sans-serif' font-size='13' fill='#333'>y = 1/x</text><path d='M50 260 Q150 215 350 150' stroke='#d62728' stroke-width='3' fill='none'/><text x='310' y='160' font-family='sans-serif' font-size='13' fill='#d62728'>y = 2^x</text><circle cx='200' cy='300' r='4' fill='#d62728'/><text x='210' y='320' font-family='sans-serif' font-size='13' fill='#d62728'>(0,1)</text></svg>",
  "step1": {
    "title": "Introduction to Reciprocal Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A reciprocal function has the form <strong>y = a/x</strong>, where <em>a</em> is a constant. It produces two separate branches located in different quadrants. These graphs never touch either axis, which act as asymptotes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two roads running infinitely close to but never touching the riverbanks (the axes). The roads curve away but remain bounded near these invisible barriers.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketch y = 2/x",
      "problem": "Let's sketch y = 2/x step-by-step and identify asymptotes.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the asymptotes for y = 2/x? (Which lines does the graph approach but never cross?)",
          "answer": "x=0 and y=0",
          "feedback": "Correct. The x-axis (y=0) and y-axis (x=0) are asymptotes for y = 2/x."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 1",
          "answer": "2",
          "feedback": "Correct, y = 2/1 = 2."
        },
        {
          "id": "q3",
          "prompt": "Calculate y when x = -1",
          "answer": "-2",
          "feedback": "Right, y = 2 / -1 = -2."
        },
        {
          "id": "q4",
          "prompt": "Describe the behaviour of the graph as x approaches 0 from the positive side.",
          "answer": "y approaches infinity",
          "feedback": "Yes! As x gets close to 0+, y becomes very large (tends to infinity)."
        },
        {
          "id": "q5",
          "prompt": "Describe the behaviour of the graph as x approaches 0 from the negative side.",
          "answer": "y approaches negative infinity",
          "feedback": "Correct. As x approaches 0-, y becomes very large in the negative direction."
        }
      ]
    }
  },
  "step2": {
    "title": "Introduction to Exponential Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An exponential function is of the form <strong>y = k^x</strong> where <em>k</em> is a positive base. It passes through <strong>(0, 1)</strong> because any nonzero number raised to the power 0 is 1. The graph means rapid growth if <em>k > 1</em> or rapid decay if <em>0 &lt; k &lt; 1</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of compound interest in a bank account growing quickly, or radioactive decay shrinking over time.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketch y = 3^x",
      "problem": "Step through calculating values to sketch y = 3^x and identify key points.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the y-intercept (value when x=0)?",
          "answer": "1",
          "feedback": "Correct, 3^0 = 1."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 1",
          "answer": "3",
          "feedback": "Yes, 3^1 = 3."
        },
        {
          "id": "q3",
          "prompt": "Calculate y when x = -1",
          "answer": "1/3",
          "feedback": "Correct, 3^-1 = 1/3."
        },
        {
          "id": "q4",
          "prompt": "Does the graph have any asymptotes? If yes, identify them.",
          "answer": "y=0",
          "feedback": "Right. The x-axis (y=0) is a horizontal asymptote."
        }
      ]
    }
  },
  "step3": {
    "title": "Comparing Reciprocal and Exponential Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Both reciprocal and exponential functions have unique characteristics. Reciprocal graphs have two branches and vertical and horizontal asymptotes. Exponential graphs have one continuous curve and only one asymptote, the x-axis.</p>",
    "workedExample": {
      "title": "Worked Example: Identifying Properties",
      "problem": "Given graphs of y = 4/x and y = (1/2)^x, identify features.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which graph will pass through (0,1)?",
          "answer": "y = (1/2)^x",
          "feedback": "Correct. Exponential graphs always pass through (0,1)."
        },
        {
          "id": "q2",
          "prompt": "Which graph has two separate branches?",
          "answer": "y = 4/x",
          "feedback": "Yes. Reciprocal graphs have two branches."
        },
        {
          "id": "q3",
          "prompt": "What asymptotes does y = 4/x have?",
          "answer": "x=0 and y=0",
          "feedback": "Correct, the axes serve as asymptotes."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Sketch: Reciprocal Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Try sketching reciprocal graphs for different values of <em>a</em> in y = a/x. Observe how changing <em>a</em> affects the shape and position of the graph.</p>",
    "workedExample": {
      "title": "Sketch y = a/x for a = -3",
      "problem": "Input values step-by-step to plot points for y = -3/x.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y when x = 1",
          "answer": "-3",
          "feedback": "Correct, -3 / 1 = -3."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = -1",
          "answer": "3",
          "feedback": "Right, -3 / -1 = 3."
        },
        {
          "id": "q3",
          "prompt": "What is the asymptote the graph approaches as x approaches 0 from the positive side?",
          "answer": "y approaches negative infinity",
          "feedback": "Correct."
        }
      ]
    }
  },
  "step5": {
    "title": "Interactive Sketch: Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now plot exponential graphs by choosing a base <em>k</em>. Notice how larger values of <em>k</em> cause faster growth and smaller values between 0 and 1 cause decay.</p>",
    "workedExample": {
      "title": "Sketch y = 0.5^x",
      "problem": "Step through calculations for y = 0.5^x for selected x-values.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y when x = 0",
          "answer": "1",
          "feedback": "Correct, any base to zero power is 1."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 2",
          "answer": "0.25",
          "feedback": "Right, 0.5^2 = 0.25."
        },
        {
          "id": "q3",
          "prompt": "Calculate y when x = -1",
          "answer": "2",
          "feedback": "Yes, 0.5^-1 = 1 / 0.5 = 2."
        }
      ]
    }
  },
  "step6": {
    "title": "Review: Key Features of Reciprocal and Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's summarise the main points: Reciprocal graphs have two branches with vertical and horizontal asymptotes. Exponential graphs show growth/decay and pass through (0, 1) with a horizontal asymptote at y = 0.</p>",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The reciprocal graph y = a/x has asymptotes at <span class=\"font-semibold\">_____</span> and <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "x=0", "label": "x=0 (y-axis)", "isCorrect": true, "feedback": "Correct!"},
              {"value": "y=1", "label": "y=1", "isCorrect": false, "feedback": "No, it's the axes."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "y=0", "label": "y=0 (x-axis)", "isCorrect": true, "feedback": "Correct!"},
              {"value": "x=1", "label": "x=1", "isCorrect": false, "feedback": "No, it's the axes."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Exponential functions y = k^x always pass through the point <span class=\"font-semibold\">(0, _____)</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "1", "label": "1", "isCorrect": true, "feedback": "Correct!"},
              {"value": "0", "label": "0", "isCorrect": false, "feedback": "No, the y-intercept is 1."}
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Sketch the graph of y = -4/x and the graph of y = 0.25^x on the same axes. Describe the key features of each graph including asymptotes and intercepts.</span>",
      "hint": "Remember to calculate values at specific points and identify where the graphs approach but never touch (asymptotes). For exponential functions, check the point (0,1).",
      "mustHaveKeywords": ["asymptote", "intercept", "growth", "decay"],
      "optionalKeywords": ["branches", "horizontal asymptote", "vertical asymptote"],
      "modelAnswer": "<span>The graph of y = -4/x has two branches, one in quadrant II and the other in quadrant IV. The asymptotes are the x-axis (y=0) and the y-axis (x=0). The graph never touches these lines. The graph of y = 0.25^x is a decreasing exponential curve that passes through the point (0,1). It has a horizontal asymptote at y=0 because the values get closer to zero but never reach it. y = -4/x shows a hyperbola with reflections due to the negative constant, while y = 0.25^x shows exponential decay.</span>",
      "scaffoldPrompts": [
        "Calculate y-values for y = -4/x at x = 1, -1, 2, -2",
        "Identify asymptotes of y = -4/x",
        "Calculate y-values for y = 0.25^x at x = -1, 0, 1, 2",
        "Identify asymptotes and intercept of y = 0.25^x",
        "Compare and describe the behaviours of both graphs"
      ]
    }
  }
};