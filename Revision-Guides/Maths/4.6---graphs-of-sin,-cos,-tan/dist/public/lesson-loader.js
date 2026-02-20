window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.6 - Graphs of sin, cos, tan",
  "strapline": "Explore the exact values and graphical properties of sine, cosine, and tangent functions to solve trigonometric problems.",
  "learningObjectives": [
    "Students should recall and use exact trigonometric values for key angles (0°, 30°, 45°, 60°, 90°) without a calculator, applying these to solve problems involving surds (Maths 4.6)",
    "Students should explore the graphical representations of sine, cosine and tangent functions, identifying key features such as periodicity, amplitude, and asymptotes (Maths 4.6)",
    "Students should use trigonometric graphs to solve equations within given intervals (Maths 4.6)"
  ],
  "keyFormulas": [
    "sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2",
    "cos 30° = √3/2, cos 45° = √2/2, cos 60° = 1/2",
    "tan 30° = 1/√3, tan 45° = 1, tan 60° = √3"
  ],
  "diagramHtml": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg' style='background:#f9f9f9'><rect x='40' y='20' width='420' height='260' fill='white' stroke='#ccc' stroke-width='1'/><line x1='50' y1='150' x2='450' y2='150' stroke='#333' /><line x1='50' y1='20' x2='50' y2='280' stroke='#333' /><text x='460' y='155' font-family='Arial' font-size='12'>x (degrees)</text><text x='10' y='25' font-family='Arial' font-size='12'>y</text><path d='M50 150 Q150 50 250 150 T450 150' fill='none' stroke='blue' stroke-width='2'/><path d='M50 150 C125 75 175 225 250 150 S 375 75 450 150' fill='none' stroke='red' stroke-width='2'/><path d='M50 260 L50 40' stroke='green' stroke-dasharray='5,5' /><text x='200' y='40' font-family='Arial' font-size='12' fill='blue'>Sin graph</text><text x='200' y='60' font-family='Arial' font-size='12' fill='red'>Cos graph</text></svg>",
  "step1": {
    "title": "Concept 1: Exact Trigonometric Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Recall the exact values of <em>sin</em>, <em>cos</em>, and <em>tan</em> at angles 0°, 30°, 45°, 60°, and 90°, expressed using fractions and surds. This avoids calculator use and helps with solving problems efficiently.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like knowing your times tables by heart, memorising these key values allows quick answers to trigonometry problems without extra tools.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find sin 45°",
      "problem": "What is the exact value of <strong>sin 45°</strong>?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Recall the simplified surd form for sin 45°.",
          "answer": "√2/2",
          "feedback": "Correct! sin 45° = √2/2."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Understanding Periodicity",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Sine and cosine graphs repeat every 360° (2π radians), while tangent graphs repeat every 180° (π radians). This repetitive property is called periodicity.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a clock's hands completing cycles every 12 hours — similar to how these functions repeat their values after a fixed angle.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Period of tan x",
      "problem": "What is the period of the <strong>tan x</strong> function?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Between what angles does tan x repeat its pattern?",
          "answer": "180°",
          "feedback": "Correct, the period of tan x is 180° (or π radians)."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Amplitude of Sine and Cosine",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Amplitude is the maximum distance the sine or cosine graph moves from its central horizontal axis. For <em>sin x</em> and <em>cos x</em>, the amplitude is 1, so their graphs oscillate between -1 and +1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a swing moving 1 meter forward and 1 meter back from its resting point; that distance is the amplitude.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Amplitude of sin x",
      "problem": "What is the amplitude of the graph of <strong>y = sin x</strong>?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the maximum value sin x reaches?",
          "answer": "1",
          "feedback": "Correct, the maximum value is 1."
        },
        {
          "id": "q2",
          "prompt": "What is the minimum value sin x reaches?",
          "answer": "-1",
          "feedback": "Correct, the minimum value is -1."
        }
      ]
    }
  },
  "step4": {
    "title": "Graph Features: Asymptotes of the Tangent Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tangent graphs have vertical asymptotes where the function is undefined, occurring at 90° + k·180°, where k is an integer. The graph approaches these lines but never touches them.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like approaching a cliff edge you cannot cross, the function gets infinitely close to the asymptotes but never crosses them.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Locate asymptotes of tan x",
      "problem": "At what degrees does the graph of <strong>tan x</strong> have vertical asymptotes between 0° and 360°?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first vertical asymptote in this range.",
          "answer": "90°",
          "feedback": "Correct, the first asymptote is at 90°."
        },
        {
          "id": "q2",
          "prompt": "Identify the second vertical asymptote in this range.",
          "answer": "270°",
          "feedback": "Correct, the second asymptote is at 270°."
        }
      ]
    }
  },
  "step5": {
    "title": "Using Graphs to Solve Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Trigonometric graphs can be used to solve equations such as sin x = 1/2 within a given interval by identifying points where the graph intersects the horizontal line y = 1/2.</p>",
    "workedExample": {
      "title": "Worked Example: Solve sin x = 1/2 in 0° ≤ x ≤ 360°",
      "problem": "Find all values of <strong>x</strong> between 0° and 360° for which sin x = 1/2.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Recall sin 30°. Is sin 30° = 1/2?",
          "answer": "Yes",
          "feedback": "Correct! sin 30° = 1/2."
        },
        {
          "id": "q2",
          "prompt": "Recall sin 150°. Is sin 150° = 1/2?",
          "answer": "Yes",
          "feedback": "Correct! sin 150° = 1/2."
        },
        {
          "id": "q3",
          "prompt": "Are there any other values between 0° and 360° where sin x equals 1/2?",
          "answer": "No",
          "feedback": "Correct, only at 30° and 150°."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Use your knowledge of the sine, cosine, and tangent graphs to solve the equation: Find all solutions to <em>tan x = √3</em> for 0° ≤ x ≤ 360°. Explain your method clearly.</span>",
      "hint": "Remember to consider the period of the tangent function and the key exact values of tan at special angles.",
      "mustHaveKeywords": ["tan 60°", "period 180°", "vertical asymptotes", "solutions within given interval"],
      "optionalKeywords": ["graph intersections", "exact values", "angle measurement in degrees"],
      "modelAnswer": "<span>To solve tan x = √3, recall that tan 60° = √3. Since tangent has a period of 180°, the solutions are x = 60° and 60° + 180° = 240°. Therefore, within 0° to 360°, the solutions are <strong>60°</strong> and <strong>240°</strong>. Note the vertical asymptotes at 90° and 270°, which the graph cannot cross, confirming these solutions.</span>",
      "scaffoldPrompts": ["Identify where tan x equals √3 on the unit circle", "Add the period 180° to find other solutions in the interval"]
    }
  }
};