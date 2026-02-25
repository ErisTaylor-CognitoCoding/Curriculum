window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.10 - Reciprocal and exponential graphs",
  "strapline": "Explore how to sketch and analyse reciprocal and exponential graphs, recognising their key features like asymptotes and intercepts.",
  "learningObjectives": [
    "Students should be able to sketch reciprocal graphs of the form y = a/x and identify their key features including asymptotes (Maths 2.10)",
    "Students should be able to sketch exponential graphs of the form y = k^x and identify their key features including intercepts (Maths 2.10)",
    "Students should be able to recognise and describe the properties of reciprocal and exponential functions from their graphs (Maths 2.10)"
  ],
  "keyFormulas": [
    "Concept 1: Reciprocal function - y = a/x",
    "Concept 2: Exponential function - y = k^x",
    "Concept 3: Asymptote - a line that a curve approaches but never reaches"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <rect x='40' y='40' width='320' height='220' fill='#f8f8f8' stroke='#333'/>\
    <line x1='40' y1='150' x2='360' y2='150' stroke='#000' stroke-width='1'/>\
    <line x1='200' y1='260' x2='200' y2='40' stroke='#000' stroke-width='1'/>\
    <path d='M120 60 Q150 90 190 140' fill='none' stroke='#1e90ff' stroke-width='2'/>\
    <path d='M280 240 Q250 210 210 160' fill='none' stroke='#1e90ff' stroke-width='2'/>\
    <text x='365' y='155' font-family='sans-serif' font-size='12' fill='#000'>x-axis</text>\
    <text x='205' y='35' font-family='sans-serif' font-size='12' fill='#000'>y-axis</text>\
    <text x='130' y='50' font-family='sans-serif' font-size='12' fill='#1e90ff'>y = a/x</text>\
  </svg>",
  "step1": {
    "title": "Concept: Reciprocal Function y = a/x",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The reciprocal function is defined as y = a/x where <strong>a</strong> is a constant. Its graph is made up of two separate curves called branches. These curves approach but never touch the x-axis or y-axis, which are called <em>asymptotes</em>.</p><p>For example, if a = 1, the graph shows one branch in quadrant I and another in quadrant III.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two cars racing towards two walls but never actually hitting them. The walls represent the asymptotes that the function's curve never crosses.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketching y = 2/x",
      "problem": "Let's sketch the graph of y = 2/x step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "If x = 1, what is y?",
          "answer": "2",
          "feedback": "Correct. y = 2 ÷ 1 = 2."
        },
        {
          "id": "q2",
          "prompt": "If x = 2, what is y?",
          "answer": "1",
          "feedback": "Correct. y = 2 ÷ 2 = 1."
        },
        {
          "id": "q3",
          "prompt": "If x = -1, what is y?",
          "answer": "-2",
          "feedback": "Right. y = 2 ÷ -1 = -2."
        },
        {
          "id": "q4",
          "prompt": "Name the two asymptotes of this graph.",
          "answer": "x=0 and y=0",
          "feedback": "Well done. The y-axis (x=0) and x-axis (y=0) are asymptotes."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Exponential Function y = k^x",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An exponential function has the form y = k^x, where <strong>k</strong> is a positive constant (the base). The graph shows rapid growth when k > 1 or decay if 0 &lt; k &lt; 1. The curve always passes through the point (0, 1), because any nonzero number raised to the power zero equals 1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of compound interest where money grows rapidly over time, similar to exponential growth in the graph of y = k^x.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketching y = 2^x",
      "problem": "Sketch y = 2^x by completing values step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y when x = 0.",
          "answer": "1",
          "feedback": "Correct. 2^0 = 1."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 1.",
          "answer": "2",
          "feedback": "Correct. 2^1 = 2."
        },
        {
          "id": "q3",
          "prompt": "Calculate y when x = -1.",
          "answer": "0.5",
          "feedback": "Correct. 2^-1 = 1/2 = 0.5."
        }
      ]
    }
  },
  "step3": {
    "title": "Identifying Key Features: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The graph of y = a/x has two branches and two asymptotes: the <span class=\"font-semibold\">_____</span>-axis and <span class=\"font-semibold\">_____</span>-axis.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "x-axis", "label": "x-axis", "isCorrect": true, "feedback": "Correct! The x-axis is an asymptote."},
              {"value": "y-axis", "label": "y-axis", "isCorrect": false, "feedback": "Try again. That is one asymptote, but the other is also an axis."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "y-axis", "label": "y-axis", "isCorrect": true, "feedback": "Correct! The y-axis is the other asymptote."},
              {"value": "x-axis", "label": "x-axis", "isCorrect": false, "feedback": "Try again."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The graph of y = k^x always passes through (0, <span class=\"font-semibold\">_____</span>).</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {"value": "1", "label": "1", "isCorrect": true, "feedback": "Correct! k^0 = 1 for any k ≠ 0."},
              {"value": "0", "label": "0", "isCorrect": false, "feedback": "Incorrect, k^0 = 1, not 0."}
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Graph Properties: True or False?",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>The reciprocal graph y = a/x touches the y-axis.</span>",
        "options": [
          {"id": "a", "label": "<span>True</span>", "isCorrect": false, "explanation": "False. The graph never touches the y-axis; it is an asymptote."},
          {"id": "b", "label": "<span>False</span>", "isCorrect": true, "explanation": "Correct. The y-axis is an asymptote and is never crossed."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>The exponential graph y = k^x always passes through (1, k).</span>",
        "options": [
          {"id": "a", "label": "<span>True</span>", "isCorrect": true, "explanation": "True. By definition y = k^1 = k."},
          {"id": "b", "label": "<span>False</span>", "isCorrect": false, "explanation": "Incorrect. It passes through (1, k)." }
        ]
      }
    ]
  },
  "step5": {
    "title": "Compare and Contrast: Reciprocal vs Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Reciprocal graphs have two separate branches and asymptotes along both axes. They display hyperbolic behavior with undefined values at x = 0.</p><p>In contrast, exponential graphs have one continuous curve, pass through (0, 1), and show rapid growth or decay without asymptotes on x=0 or y=0 (though they approach y=0 as x → -∞).</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
      <rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#666'/>\
      <line x1='40' y1='150' x2='360' y2='150' stroke='#111' stroke-width='1'/>\
      <line x1='200' y1='260' x2='200' y2='40' stroke='#111' stroke-width='1'/>\
      <path d='M120 60 Q150 90 190 140' fill='none' stroke='#0077cc' stroke-width='2'/>\
      <path d='M280 240 Q250 210 210 160' fill='none' stroke='#0077cc' stroke-width='2'/>\
      <path d='M80 220 Q140 150 270 70' fill='none' stroke='#cc5500' stroke-width='2'/>\
      <text x='130' y='50' font-family='sans-serif' font-size='12' fill='#0077cc'>Reciprocal y = a/x</text>\
      <text x='230' y='60' font-family='sans-serif' font-size='12' fill='#cc5500'>Exponential y = k^x</text>\
    </svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Sketch the graph of y = -3/x and describe its key features including the asymptotes. Then sketch y = (1/2)^x and state its key features including intercepts.</span>",
      "hint": "Remember to find points for various values of x and identify the behaviour near asymptotes and intercepts.",
      "mustHaveKeywords": ["branches", "asymptotes", "intercept", "growth", "decay"],
      "optionalKeywords": ["quadrants", "y-axis", "x-axis", "passing through (0,1)"],
      "modelAnswer": "<span>The graph of y = -3/x has two branches: one in quadrant II and one in quadrant IV because the function is negative when x is positive or negative. The asymptotes are the x-axis (y=0) and y-axis (x=0), which the curves approach but never touch. For y = (1/2)^x, the graph shows exponential decay, passing through (0,1). It approaches y=0 as x increases negatively and crosses y=1 at x=0.</span>",
      "scaffoldPrompts": ["Calculate values of y for x = 1, 2, -1, -2 for y = -3/x", "Identify where the graph approaches but does not touch (the asymptotes)", "Calculate values of y for x = -1, 0, 1, 2 for y = (1/2)^x", "Note the intercept where x=0"]
    }
  }
};