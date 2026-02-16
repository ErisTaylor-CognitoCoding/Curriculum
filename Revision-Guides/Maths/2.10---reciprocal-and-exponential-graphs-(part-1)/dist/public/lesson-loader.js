window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.10 - Reciprocal and exponential graphs (Part 1)",
  "strapline": "Understand and sketch reciprocal and exponential graphs, identifying their key features and asymptotes.",
  "learningObjectives": [
    "Students should be able to sketch reciprocal graphs of the form y = k/x, identify their asymptotes, and recognise their distinctive features such as the two separate curves (Maths 2.10)",
    "Students should be able to sketch exponential graphs of the form y = kˣ and recognise their key characteristics including rapid growth or decay (Maths 2.10)",
    ""
  ],
  "keyFormulas": [
    "y = \\frac{k}{x} (Reciprocal graph)",
    "y = k^x (Exponential graph)",
    "Asymptotes: lines the graph approaches but does not touch"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f9f9f9' stroke='#333' /><text x='200' y='20' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold'>Reciprocal and Exponential Graphs</text><line x1='200' y1='50' x2='200' y2='250' stroke='#555' stroke-width='1' /><line x1='50' y1='150' x2='350' y2='150' stroke='#555' stroke-width='1' /><path d='M175 60 Q 200 100 225 60' stroke='blue' fill='none' stroke-width='2' /><path d='M175 240 Q 200 200 225 240' stroke='blue' fill='none' stroke-width='2' /><path d='M350 235 Q 300 175 250 235' stroke='red' fill='none' stroke-width='2' /><path d='M50 65 Q 100 125 150 65' stroke='red' fill='none' stroke-width='2' /></svg>",
  "step1": {
    "title": "Concept: Reciprocal Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>reciprocal graph</strong> has the form <em>y = k/x</em> where <em>k</em> is a constant. It consists of two separate curves called branches that lie in opposite quadrants. The graph never touches the <em>x</em>-axis or <em>y</em>-axis but gets closer and closer to them. These axes are called <strong>asymptotes</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two cars driving on opposite sides of a wide river (the axes). They can drive endlessly without ever touching the riverbanks, getting closer but never crossing.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketching y = 6/x",
      "problem": "Let's sketch the graph of <strong>y = 6/x</strong>. Find some points first.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Choose x = 1. What is y?",
          "answer": "6",
          "feedback": "Correct! y = 6/1 = 6."
        },
        {
          "id": "q2",
          "prompt": "Choose x = 2. Calculate y.",
          "answer": "3",
          "feedback": "Correct. y = 6/2 = 3."
        },
        {
          "id": "q3",
          "prompt": "Choose x = -3. Calculate y.",
          "answer": "-2",
          "feedback": "Right! y = 6/(-3) = -2."
        }
      ]
    }
  },
  "step2": {
    "title": "Identifying Asymptotes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>asymptotes</strong> are lines the reciprocal graph approaches but never touches. For <em>y = k/x</em>, these are the <em>x</em>-axis (<em>y=0</em>) and the <em>y</em>-axis (<em>x=0</em>).</p>",
    "workedExample": {
      "title": "Worked Example: Identify Asymptotes for y = 6/x",
      "problem": "What are the asymptotes of <strong>y = 6/x</strong>?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is y = 0 an asymptote?",
          "answer": "yes",
          "feedback": "Correct! The graph never touches the x-axis, so y=0 is an asymptote."
        },
        {
          "id": "q2",
          "prompt": "Is x = 0 an asymptote?",
          "answer": "yes",
          "feedback": "Yes, the graph never crosses the y-axis either."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>exponential graph</strong> has the form <em>y = k<sup>x</sup></em>, where <em>k</em> is a positive constant. When <em>k > 1</em>, the graph shows rapid growth. When <em>0 &lt; k &lt; 1</em>, the graph shows exponential decay. All exponential graphs pass through the point (0,1) and have the <em>x</em>-axis as a horizontal asymptote.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of exponential growth like a virus doubling every hour, growing faster and faster. Exponential decay is like a melting ice cube getting smaller at a fast rate.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketching y = 2ˣ",
      "problem": "Let's sketch the graph of <strong>y = 2<sup>x</sup></strong>. Calculate some points first.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y when x = 0.",
          "answer": "1",
          "feedback": "Correct! Any number to the power 0 is 1."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 2.",
          "answer": "4",
          "feedback": "Correct. 2 squared equals 4."
        },
        {
          "id": "q3",
          "prompt": "Calculate y when x = -1.",
          "answer": "0.5",
          "feedback": "Yes! 2 to the power -1 equals 1/2 = 0.5."
        }
      ]
    }
  },
  "step4": {
    "title": "Key Features of Reciprocal Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Remember the reciprocal graph has two branches: one in the top right quadrant and one in the bottom left quadrant (when <em>k&gt;0</em>). It never touches the axes but gets closer and closer. The shape flips if <em>k</em> is negative.</p>",
    "workedExample": {
      "title": "Worked Example: Sketch y = -4/x",
      "problem": "Find some points to understand y = -4/x.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y when x = 1.",
          "answer": "-4",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = -2.",
          "answer": "2",
          "feedback": "Good! y = -4 / -2 = 2."
        }
      ]
    }
  },
  "step5": {
    "title": "Key Features of Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential graphs all pass through (0,1). When <em>k&gt;1</em>, the graph increases rapidly and the x-axis (<em>y=0</em>) is the horizontal asymptote approached from above. When <em>0&lt;k&lt;1</em>, the graph decreases rapidly approaching the x-axis from above.</p>",
    "workedExample": {
      "title": "Worked Example: Sketch y = (1/3)<sup>x</sup>",
      "problem": "Calculate some points of y = (1/3)^x.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y when x = 0.",
          "answer": "1",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 2.",
          "answer": "1/9",
          "feedback": "Yes, (1/3)^2 = 1/9."
        },
        {
          "id": "q3",
          "prompt": "Calculate y when x = -1.",
          "answer": "3",
          "feedback": "Correct! (1/3)^-1 = 3."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to sketch the graph of y = 5/x and identify its asymptotes. Then sketch the graph of y = (1/2)<sup>x</sup> and describe its key features.</span>",
      "hint": "Remember to calculate a few points for each graph, identify asymptotes clearly, and state features like growth or decay.",
      "mustHaveKeywords": ["reciprocal graph", "asymptote", "exponential decay", "passes through (0,1)"],
      "optionalKeywords": ["branches", "horizontal asymptote"],
      "modelAnswer": "<span>For y = 5/x, plot points by choosing values for x and calculating y. The graph has two branches, one in the first and one in the third quadrant, with asymptotes at x = 0 and y = 0 (the axes), which the graph never touches. For y = (1/2)<sup>x</sup>, note it passes through (0,1), shows exponential decay because the base is between 0 and 1, and approaches the x-axis (y=0) as x increases, which is its horizontal asymptote.</span>",
      "scaffoldPrompts": ["Start by choosing x values for each graph", "Calculate corresponding y values", "Identify asymptotes by noting which lines the graph never touches", "Describe the shape and behaviour of each curve"]
    }
  }
};