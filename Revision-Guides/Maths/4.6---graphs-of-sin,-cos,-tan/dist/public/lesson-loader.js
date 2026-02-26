window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.6 - Graphs of sin, cos, tan",
  "strapline": "Understanding exact values and graphical properties of sine, cosine, and tangent functions for problem-solving.",
  "learningObjectives": [
    "Students should recall and use exact trigonometric values for key angles (0°, 30°, 45°, 60°, 90°) without a calculator, applying these to solve problems involving surds (Maths 4.6)",
    "Students should explore the graphical representations of sine, cosine and tangent functions, identifying key features such as periodicity, amplitude, and asymptotes (Maths 4.6)",
    "Students should use trigonometric graphs to solve equations within given intervals (Maths 4.6)"
  ],
  "keyFormulas": [
    "Exact values: sin 30° = 1/2, cos 45° = √2/2, tan 60° = √3",
    "Period of sin and cos = 360° (2π radians), period of tan = 180° (π radians)",
    "Amplitude of sin and cos = 1; amplitude not defined for tan"
  ],
  "diagramHtml": "<svg viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg'><line x1='0' y1='100' x2='500' y2='100' stroke='#333' stroke-width='1'/><line x1='50' y1='0' x2='50' y2='200' stroke='#333' stroke-width='1'/><text x='55' y='15' font-family='sans-serif' font-size='12'>0°</text><text x='135' y='15' font-family='sans-serif' font-size='12'>90°</text><text x='215' y='15' font-family='sans-serif' font-size='12'>180°</text><text x='295' y='15' font-family='sans-serif' font-size='12'>270°</text><text x='375' y='15' font-family='sans-serif' font-size='12'>360°</text><polyline fill='none' stroke='blue' stroke-width='2' points='50,100 90,50 135,100 180,150 215,100 260,50 295,100 340,150 375,100'/><text x='50' y='120' font-family='sans-serif' font-size='12' fill='blue'>sin(x)</text></svg>",
  "step1": {
    "title": "Concept: Exact Trigonometric Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Recall exact values of <strong>sin</strong>, <strong>cos</strong>, and <strong>tan</strong> at special angles: 0°, 30°, 45°, 60°, and 90°. These values involve fractions and surds that you can remember and use without a calculator.</p><p>For example, <em>sin 30° = 1/2</em>, <em>cos 45° = √2/2</em>, and <em>tan 60° = √3</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of these values as your trig 'building blocks'—like memorizing times tables before tackling bigger problems.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Recall sin 45°",
      "problem": "What is the exact value of <strong>sin 45°</strong>? Provide your answer as a fraction or surd.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is sin 45° closer to 0, 1/2, or 1? Choose the closest option.",
          "answer": "1/2",
          "feedback": "Correct, sin 45° is √2/2 which is approximately 0.707, closer to 1/2 than 0 or 1."
        },
        {
          "id": "q2",
          "prompt": "Express sin 45° exactly using surds (write it as √a/b).",
          "answer": "√2/2",
          "feedback": "Correct. sin 45° = √2/2."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Periodicity of Trigonometric Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Understand that sine and cosine functions repeat their values every 360° (or 2π radians). Tangent repeats every 180° (or π radians). This repetition is called <strong>periodicity</strong>.</p>",
    "diagramHtml": "<svg viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg'><line x1='0' y1='100' x2='500' y2='100' stroke='#333' stroke-width='1'/><polyline fill='none' stroke='red' stroke-width='2' points='0,100 90,50 180,100 270,150 360,100 450,50'/><text x='180' y='180' font-family='sans-serif' font-size='12' fill='red'>One period (360°) of sin(x)</text></svg>"
  },
  "step3": {
    "title": "Concept: Amplitude of Sine and Cosine",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The amplitude is the maximum height of the wave from its central axis. For sine and cosine graphs, the amplitude is always 1, so the graphs oscillate between <em>-1</em> and <em>1</em>.</p><p>Tangent does not have an amplitude because its values can become infinitely large.</p>",
    "diagramHtml": "<svg viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg'><line x1='0' y1='100' x2='500' y2='100' stroke='#333' stroke-width='1'/><line x1='0' y1='0' x2='0' y2='200' stroke='#333' stroke-width='1'/><polyline fill='none' stroke='green' stroke-width='2' points='0,100 90,0 180,100 270,200 360,100 450,0'/><line x1='0' y1='0' x2='500' y2='0' stroke='gray' stroke-dasharray='4'/><line x1='0' y1='200' x2='500' y2='200' stroke='gray' stroke-dasharray='4'/><text x='20' y='15' font-family='sans-serif' font-size='12' fill='gray'>Amplitude = 1</text></svg>"
  },
  "step4": {
    "title": "Recall: Exact Values at Key Angles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Complete the table below with exact values of <strong>sin</strong>, <strong>cos</strong>, and <strong>tan</strong> at key angles.</p>",
    "workedExample": {
      "title": "Fill in the Trigonometric Values Table",
      "problem": "Fill in the value for <strong>cos 60°</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Recall the exact value of cos 60°.",
          "answer": "1/2",
          "feedback": "Correct! cos 60° = 1/2."
        }
      ]
    }
  },
  "step5": {
    "title": "Graph Exploration: Tangent Function and Asymptotes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The tangent function has vertical asymptotes where the function is undefined, occurring every 180° (π radians) at 90°, 270°, etc. These asymptotes are where the graph shoots to infinity.</p>",
    "diagramHtml": "<svg viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg'><line x1='0' y1='100' x2='500' y2='100' stroke='#333' stroke-width='1'/><line x1='125' y1='0' x2='125' y2='200' stroke='red' stroke-dasharray='5'/><line x1='375' y1='0' x2='375' y2='200' stroke='red' stroke-dasharray='5'/><polyline fill='none' stroke='orange' stroke-width='2' points='0,150 60,90 100,0 115,2 130,198 170,95 210,0 255,2 290,198 370,90 410,0 450,90 500,150'/><text x='125' y='15' font-family='sans-serif' font-size='12' fill='red'>Asymptote at 90°</text><text x='375' y='15' font-family='sans-serif' font-size='12' fill='red'>Asymptote at 270°</text></svg>"
  },
  "step6": {
    "title": "Using Graphs to Solve Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use graphs of sine, cosine, or tangent to find solutions to equations within specific intervals. Remember the key features such as turning points, zero crossings, and asymptotes.</p>",
    "workedExample": {
      "title": "Find where sin(x) = 1/2 between 0° and 360°",
      "problem": "Using the sine graph, identify angles where sin(x) = 1/2 from 0° to 360°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the first angle where sin(x) = 1/2.",
          "answer": "30",
          "feedback": "Correct! sin 30° = 1/2."
        },
        {
          "id": "q2",
          "prompt": "Enter the second angle where sin(x) = 1/2 in this interval.",
          "answer": "150",
          "feedback": "Correct! sin 150° = 1/2."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the period of the tangent function?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>360° (2π radians)</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This is the period of sine and cosine, not tangent."
          },
          {
            "id": "b",
            "label": "<span>180° (π radians)</span>",
            "isCorrect": true,
            "explanation": "Correct! Tangent repeats every 180°."
          },
          {
            "id": "c",
            "label": "<span>90° (π/2 radians)</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Tangent repeats every 180°, not 90°."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What is the amplitude of the cosine function?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>2</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The standard amplitude is 1."
          },
          {
            "id": "b",
            "label": "<span>1</span>",
            "isCorrect": true,
            "explanation": "Correct! Amplitude of cosine is 1."
          },
          {
            "id": "c",
            "label": "<span>Undefined</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Amplitude is defined for cosine."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of the sine graph is 1, meaning it oscillates between -1 and 1.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "amplitude",
                "label": "Amplitude",
                "isCorrect": true,
                "feedback": "Correct! Amplitude is the correct term."
              },
              {
                "value": "periodicity",
                "label": "Periodicity",
                "isCorrect": false,
                "feedback": "Incorrect, periodicity refers to the repeating interval, not height."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The period of the tangent function is <span class=\"font-semibold\">_____</span> degrees.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "90",
                "label": "90",
                "isCorrect": false,
                "feedback": "Incorrect. The tangent period is 180°."
              },
              {
                "value": "180",
                "label": "180",
                "isCorrect": true,
                "feedback": "Correct! The tangent function repeats every 180°."
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Use your knowledge of the sine and cosine graphs to solve for all values of x in degrees, where 0° ≤ x ≤ 360°, that satisfy the equation <em>2 sin x + 1 = 0</em>.</span>",
      "hint": "Remember to isolate sin x first, then use your knowledge of exact values and the unit circle to find all solutions in the given interval.",
      "mustHaveKeywords": ["sin x", "exact values", "unit circle", "solutions", "interval"],
      "optionalKeywords": ["graph", "periodicity", "check answers"],
      "modelAnswer": "<span>First, isolate sin x: 2 sin x + 1 = 0 → sin x = -1/2. From the unit circle, sin x = -1/2 at x = 210° and x = 330° within 0° to 360°. These are the two solutions.</span>",
      "scaffoldPrompts": ["Isolate sin x in the equation.", "Recall where sin x = -1/2 on the unit circle.", "Identify all angles in 0° to 360° where sin x equals this value."]
    }
  }
};