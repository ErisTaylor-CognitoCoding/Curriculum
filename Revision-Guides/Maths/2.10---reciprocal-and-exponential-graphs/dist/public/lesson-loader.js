window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.10 - Reciprocal and exponential graphs",
  "strapline": "Explore the shapes and key features of reciprocal and exponential graphs including asymptotes and intercepts.",
  "learningObjectives": [
    "Students should be able to sketch reciprocal graphs of the form y = a/x and identify their key features including asymptotes (Maths 2.10)",
    "Students should be able to sketch exponential graphs of the form y = k^x and identify their key features including intercepts (Maths 2.10)",
    "Students should be able to recognise and describe the properties of reciprocal and exponential functions from their graphs (Maths 2.10)"
  ],
  "keyFormulas": [
    "Formula 1: y = \\frac{a}{x} (Reciprocal function)",
    "Formula 2: y = k^x (Exponential function)",
    "Reminder: Asymptotes are lines the graph approaches but never touches"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='20' width='340' height='260' fill='#fafafa' stroke='#ddd' /><line x1='30' y1='150' x2='370' y2='150' stroke='#999' stroke-dasharray='5,5' /><line x1='200' y1='20' x2='200' y2='280' stroke='#999' stroke-dasharray='5,5' /><path d='M170 270 C 180 150 220 150 230 30' stroke='#e63946' stroke-width='2' fill='none' /><path d='M230 270 C 220 150 180 150 170 30' stroke='#1d3557' stroke-width='2' fill='none' /><text x='375' y='155' font-family='sans-serif' font-size='12' fill='#555'>x-axis</text><text x='210' y='15' font-family='sans-serif' font-size='12' fill='#555'>y-axis</text><text x='150' y='140' font-family='sans-serif' font-size='14' fill='#e63946'>y = a/x (branch 1)</text><text x='210' y='290' font-family='sans-serif' font-size='14' fill='#1d3557'>y = a/x (branch 2)</text></svg>",
  "step1": {
    "title": "Concept: Reciprocal Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>reciprocal function</strong> has the form <em>y = a/x</em>, where <em>a</em> is a non-zero constant. Its graph consists of two curves in opposite quadrants that approach but never touch the x-axis or y-axis. These axes are called <em>asymptotes</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a car driving along a curved road that gets closer and closer to a straight fence (asymptote) but never actually touches it, no matter how far it goes.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketching y = 4/x",
      "problem": "Let's sketch the graph for <strong>y = 4/x</strong> step-by-step.",
      "questions": [
        {
          "id": "recip-q1",
          "prompt": "What is the value of <em>y</em> when <em>x = 1</em>?",
          "answer": "4",
          "feedback": "Correct! y = 4/1 = 4."
        },
        {
          "id": "recip-q2",
          "prompt": "What is the value of <em>y</em> when <em>x = 2</em>?",
          "answer": "2",
          "feedback": "Correct! y = 4/2 = 2."
        },
        {
          "id": "recip-q3",
          "prompt": "What happens to <em>y</em> as <em>x</em> becomes very large (tends to infinity)?",
          "answer": "0",
          "feedback": "Exactly! y tends towards 0, so the x-axis is a horizontal asymptote."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Exponential Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>exponential function</strong> has the form <em>y = k^x</em>, where <em>k</em> is a positive constant called the base. The graph either rapidly increases or decreases and always passes through the point (0, 1) because any number raised to 0 is 1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of exponential growth like the spread of a viral video online: starts slow, then quickly becomes popular.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketching y = 2^x",
      "problem": "Let's sketch the graph for <strong>y = 2^x</strong> step-by-step.",
      "questions": [
        {
          "id": "exp-q1",
          "prompt": "What is the value of <em>y</em> when <em>x = 0</em>?",
          "answer": "1",
          "feedback": "Correct! 2^0 = 1."
        },
        {
          "id": "exp-q2",
          "prompt": "What is the value of <em>y</em> when <em>x = 3</em>?",
          "answer": "8",
          "feedback": "Correct! 2^3 = 8."
        },
        {
          "id": "exp-q3",
          "prompt": "What happens to <em>y</em> as <em>x</em> becomes very negative (tends to -∞)?",
          "answer": "0",
          "feedback": "Exactly! y approaches 0 but never reaches it, so the x-axis is a horizontal asymptote."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> are lines that the graph approaches but never touches.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "asymptotes", "label": "asymptotes", "isCorrect": true, "feedback": "Correct! Asymptotes never touch the graph."},
              {"value": "intercepts", "label": "intercepts", "isCorrect": false, "feedback": "Incorrect. Intercepts are where the graph crosses the axes."},
              {"value": "gradients", "label": "gradients", "isCorrect": false, "feedback": "Incorrect. Gradient refers to the slope of the graph."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The exponential graph of y = k^x always passes through the point (0, <span class=\"font-semibold\">_____</span>).</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "1", "label": "1", "isCorrect": true, "feedback": "Correct! k^0 = 1 for any k > 0."},
              {"value": "0", "label": "0", "isCorrect": false, "feedback": "Incorrect. The value at x=0 is always 1, not zero."}
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Comparing Graph Properties",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Reciprocal graphs</strong> have two branches and two asymptotes (x = 0 and y = 0). <strong>Exponential graphs</strong> have one continuous curve and one horizontal asymptote (y = 0).</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='25' y='25' width='350' height='250' fill='#fff' stroke='#ccc'/><line x1='200' y1='25' x2='200' y2='275' stroke='#999' stroke-dasharray='5,5'/><line x1='25' y1='150' x2='375' y2='150' stroke='#999' stroke-dasharray='5,5'/><path d='M175 260 C 185 150 215 150 225 40' stroke='#f94144' stroke-width='2' fill='none'/><path d='M225 260 C 215 150 185 150 175 40' stroke='#f94144' stroke-width='2' fill='none'/><path d='M150 150 Q 200 250 250 80' stroke='#277da1' stroke-width='2' fill='none'/><text x='300' y='80' font-family='sans-serif' font-size='14' fill='#277da1'>Exponential (y = k^x)</text><text x='60' y='80' font-family='sans-serif' font-size='14' fill='#f94144'>Reciprocal (y = a/x)</text><text x='380' y='155' font-family='sans-serif' font-size='12' fill='#999'>x-axis</text><text x='205' y='20' font-family='sans-serif' font-size='12' fill='#999'>y-axis</text></svg>",
    "questions": [
      {
        "id": "compare-q1",
        "prompt": "Which graph has two branches: reciprocal or exponential?",
        "answer": "reciprocal",
        "feedback": "Correct! Reciprocal graphs have two distinct branches."
      },
      {
        "id": "compare-q2",
        "prompt": "Which graph always passes through (0, 1)?",
        "answer": "exponential",
        "feedback": "Correct! Exponential graphs pass through (0, 1)."
      }
    ]
  },
  "step5": {
    "title": "Interactive Sketching Activity",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the values you calculated earlier to sketch the graphs of y = 3/x and y = 2^x. Try plotting these sets of points on graph paper or a digital tool.</p>",
    "questions": [
      {
        "id": "sketch-q1",
        "prompt": "For y = 3/x, what is y when x = -1?",
        "answer": "-3",
        "feedback": "Correct! y = 3/(-1) = -3, point (-1, -3) is on the graph."
      },
      {
        "id": "sketch-q2",
        "prompt": "For y = 2^x, what is y when x = -2?",
        "answer": "0.25",
        "feedback": "Correct! y = 2^(-2) = 1/4 = 0.25."
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to sketch the reciprocal graph y = -5/x and the exponential graph y = 3^x. Include the key features such as asymptotes and intercepts in your answer.</span>",
      "hint": "Remember to check the behavior of the function as x approaches 0 and ±∞, and the special points like intercepts.",
      "mustHaveKeywords": ["asymptote", "intercept", "curve", "approaches", "passes through (0,1)"],
      "optionalKeywords": ["branches", "positive/negative values of a or k", "domain", "range"],
      "modelAnswer": "<span>The reciprocal graph y = -5/x has two branches located in quadrants II and IV due to the negative 'a'. It has vertical and horizontal asymptotes at the y-axis (x=0) and x-axis (y=0), which the graph approaches but never touches. The graph does not cross these asymptotes. The exponential graph y = 3^x is a single continuous curve passing through (0, 1) because any number to the zero power is 1. It grows rapidly for positive x and approaches the x-axis (y=0) as x → -∞, which is a horizontal asymptote. It never crosses the x-axis.</span>",
      "scaffoldPrompts": ["Start by identifying asymptotes for the reciprocal function", "Find key points such as intercepts for both graphs", "Explain how the graphs behave at large positive and negative x values"]
    }
  }
};