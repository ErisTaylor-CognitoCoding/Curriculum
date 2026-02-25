window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.6 - Graphs of sin, cos, tan",
  "strapline": "Explore key exact values and graphical features of sine, cosine, and tangent functions to solve trigonometric problems accurately.",
  "learningObjectives": [
    "Students should recall and use exact trigonometric values for key angles (0°, 30°, 45°, 60°, 90°) without a calculator, applying these to solve problems involving surds (Maths 4.6)",
    "Students should explore the graphical representations of sine, cosine and tangent functions, identifying key features such as periodicity, amplitude, and asymptotes (Maths 4.6)",
    "Students should use trigonometric graphs to solve equations within given intervals (Maths 4.6)"
  ],
  "keyFormulas": [
    "Formula 1: sin 30° = 1/2, cos 45° = √2/2, tan 60° = √3 (Exact trigonometric values at key angles)",
    "Formula 2: Sine and cosine functions repeat every 360° (2π radians); tangent repeats every 180° (π radians) (Periodicity)",
    "Formula 3: Amplitude of sine and cosine = 1 (distance from centre line to max/min)"
  ],
  "diagramHtml": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Diagram of sine, cosine and tangent graphs showing amplitude and periodicity'><rect x='40' y='20' width='420' height='260' fill='#f9f9f9' stroke='#333'/><path d='M40 150 Q90 50 140 150 T240 150 T340 150 T440 150' stroke='#1f77b4' stroke-width='2' fill='none'/><text x='450' y='155' font-family='sans-serif' font-size='12' fill='#1f77b4'>sin x</text><path d='M40 150 Q90 250 140 150 T240 150 T340 150 T440 150' stroke='#ff7f0e' stroke-width='2' fill='none'/><text x='450' y='145' font-family='sans-serif' font-size='12' fill='#ff7f0e'>cos x</text><path d='M80 20 L80 280 M170 20 L170 280 M260 20 L260 280 M350 20 L350 280' stroke='#d62728' stroke-width='1' stroke-dasharray='5,5'/><path d='M40 150 L440 150' stroke='#333' stroke-width='1'/><path d='M100 20 Q135 150 170 280' stroke='#2ca02c' stroke-width='2' fill='none'/><path d='M260 20 Q295 150 330 280' stroke='#2ca02c' stroke-width='2' fill='none'/><text x='270' y='40' font-family='sans-serif' font-size='12' fill='#2ca02c'>tan x</text><text x='10' y='155' font-family='sans-serif' font-size='12'>0</text><text x='80' y='165' font-family='sans-serif' font-size='12'>π/2</text><text x='170' y='165' font-family='sans-serif' font-size='12'>π</text><text x='260' y='165' font-family='sans-serif' font-size='12'>3π/2</text><text x='350' y='165' font-family='sans-serif' font-size='12'>2π</text></svg>",
  "step1": {
    "title": "Concept: Exact Trigonometric Values at Key Angles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Memorising exact trigonometric values for 0°, 30°, 45°, 60°, and 90° allows you to solve problems involving surds easily without a calculator. For example, <strong>sin 30° = 1/2</strong>, <strong>cos 45° = √2/2</strong>, <strong>tan 60° = √3</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of these special angles as 'milestones' on a journey. Just like you remember significant mile markers on a road trip, these exact values are fixed points you can always recall on the unit circle.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding sin 45°",
      "problem": "Find the exact value of <strong>sin 45°</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Recall the value of sin 45°. Is it a fraction, a surd, or a decimal?",
          "answer": "surd",
          "feedback": "Correct, sin 45° is expressed as a surd."
        },
        {
          "id": "q2",
          "prompt": "What is the exact expression for sin 45° using surds and fractions?",
          "answer": "√2/2",
          "feedback": "Great! sin 45° = √2/2."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Periodicity of Trigonometric Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The sine and cosine functions repeat their values every 360° (2π radians). The tangent function repeats every 180° (π radians). This repeating nature is called <em>periodicity</em>, which means the graph shows the same pattern over defined intervals.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='150' fill='#fff'/><path d='M 0 75 Q 50 0 100 75 T 200 75 T 300 75 T 400 75' stroke='#1f77b4' fill='none' stroke-width='2'/><line x1='0' y1='75' x2='400' y2='75' stroke='#ccc' stroke-width='1'/><text x='50' y='140' font-family='sans-serif' font-size='12'>0°</text><text x='100' y='140' font-family='sans-serif' font-size='12'>180°</text><text x='200' y='140' font-family='sans-serif' font-size='12'>360°</text><text x='300' y='140' font-family='sans-serif' font-size='12'>540°</text><text x='10' y='20' fill='#1f77b4' font-family='sans-serif' font-size='14'>sin x graph showing periodicity</text></svg>"
  },
  "step3": {
    "title": "Concept: Amplitude of Sine and Cosine Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Amplitude is the maximum distance the graph moves above or below the horizontal axis. For the standard sine and cosine graphs, this amplitude is 1, so the graphs oscillate between -1 and +1.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='150' fill='#fff'/><line x1='0' y1='75' x2='400' y2='75' stroke='#333' stroke-width='1'/><path d='M0 75 Q50 25 100 75 T 200 75 T 300 75 T 400 75' stroke='#ff7f0e' fill='none' stroke-width='2'/><line x1='0' y1='25' x2='400' y2='25' stroke='#ccc' stroke-dasharray='5,5'/><line x1='0' y1='125' x2='400' y2='125' stroke='#ccc' stroke-dasharray='5,5'/><text x='410' y='27' font-family='sans-serif' font-size='12'>Amplitude = +1</text><text x='410' y='127' font-family='sans-serif' font-size='12'>Amplitude = -1</text></svg>"
  },
  "step4": {
    "title": "Worked Example: Finding Period and Amplitude from a Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using a graph of y = sin x, identify its amplitude and period.</p>",
    "workedExample": {
      "title": "Interactive Worked Example",
      "problem": "From the sine graph shown, input the amplitude and period values.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the amplitude of y = sin x?",
          "answer": "1",
          "feedback": "Correct, the amplitude is 1."
        },
        {
          "id": "q2",
          "prompt": "What is the period of y = sin x in degrees?",
          "answer": "360",
          "feedback": "Correct, sine repeats every 360°."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='150' fill='#f0f8ff' stroke='#333'/><line x1='0' y1='75' x2='400' y2='75' stroke='#333' stroke-width='1'/><path d='M0 75 Q50 25 100 75 T 200 75 T 300 75 T 400 75' stroke='#1f77b4' fill='none' stroke-width='2'/><text x='10' y='30' font-family='sans-serif' font-size='12'>Amplitude is height from center line to peak</text><text x='10' y='145' font-family='sans-serif' font-size='12'>Period is length of one full wave (0° to 360°)</text></svg>"
    }
  },
  "step5": {
    "title": "Concept: Asymptotes in the Tangent Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The tangent function has vertical asymptotes where it is undefined, occurring at 90°, 270°, etc. These asymptotes appear as dashed lines on the graph, marking points the curve approaches but never touches.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='150' fill='#fff'/><line x1='100' y1='0' x2='100' y2='150' stroke='#d62728' stroke-width='2' stroke-dasharray='5,5'/><line x1='300' y1='0' x2='300' y2='150' stroke='#d62728' stroke-width='2' stroke-dasharray='5,5'/><path d='M40 150 Q70 0 100 150 Q130 300 160 150 Q190 0 220 150 Q250 300 280 150 Q310 0 340 150 Q370 300 400 150' stroke='#2ca02c' stroke-width='2' fill='none'/><text x='105' y='20' font-family='sans-serif' font-size='12' fill='#d62728'>Asymptote at 90°</text><text x='305' y='20' font-family='sans-serif' font-size='12' fill='#d62728'>Asymptote at 270°</text></svg>"
  },
  "step6": {
    "title": "Using Graphs to Solve Trigonometric Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By using graphs of sine, cosine, or tangent, you can find solutions to equations within specific intervals by identifying where the graph crosses a target value or meets conditions.</p>",
    "workedExample": {
      "title": "Worked Example: Solve sin x = 0.5 in 0° ≤ x ≤ 360°",
      "problem": "Find all values of x between 0° and 360° where sin x = 0.5.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Using the sine graph, at approximately what angle between 0° and 90° does sin x = 0.5?",
          "answer": "30",
          "feedback": "Correct! sin 30° = 0.5."
        },
        {
          "id": "q2",
          "prompt": "Sine is positive in the first and second quadrants. What is the second angle (between 90° and 180°) where sin x = 0.5?",
          "answer": "150",
          "feedback": "Correct! sin 150° = 0.5."
        },
        {
          "id": "q3",
          "prompt": "Are there any other solutions between 0° and 360° for sin x = 0.5?",
          "answer": "no",
          "feedback": "Correct! Only 30° and 150° satisfy sin x = 0.5 in this interval."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='150' fill='#f0f8ff' stroke='#333'/><line x1='0' y1='75' x2='400' y2='75' stroke='#333' stroke-width='1'/><line x1='0' y1='50' x2='400' y2='50' stroke='#ff0000' stroke-dasharray='4' stroke-width='1'/><path d='M0 75 Q50 25 100 75 T 200 75 T 300 75 T 400 75' stroke='#1f77b4' fill='none' stroke-width='2'/><circle cx='50' cy='50' r='4' fill='#ff0000'/><circle cx='250' cy='50' r='4' fill='#ff0000'/><text x='40' y='40' font-family='sans-serif' font-size='12'>30°</text><text x='240' y='40' font-family='sans-serif' font-size='12'>150°</text><text x='10' y='140' font-family='sans-serif' font-size='12'>Graph shows sin x = 0.5 at 30° and 150°</text></svg>"
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is the exact value of cos 60°?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>1/2</span>",
            "isCorrect": true,
            "explanation": "Correct, cos 60° = 1/2."
          },
          {
            "id": "b",
            "label": "<span>√3/2</span>",
            "isCorrect": false,
            "explanation": "Incorrect, √3/2 is the value of cos 30°."
          },
          {
            "id": "c",
            "label": "<span>√2/2</span>",
            "isCorrect": false,
            "explanation": "Incorrect, √2/2 is the value of cos 45°."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of the sine wave is the height from the centre line to its peak.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "Amplitude",
                "label": "Amplitude",
                "isCorrect": true,
                "feedback": "Correct! Amplitude measures peak height."
              },
              {
                "value": "Period",
                "label": "Period",
                "isCorrect": false,
                "feedback": "Try again. Period is the length of one wave, not height."
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
      "prompt": "<span>Use the graph of y = cos x to solve the equation cos x = -√3/2 for 0° ≤ x ≤ 360°.</span>",
      "hint": "Remember to identify the quadrants where cosine is negative and use exact values for cosine of special angles.",
      "mustHaveKeywords": ["cosine", "quadrants", "exact value", "-√3/2", "360 degrees"],
      "optionalKeywords": ["unit circle", "radians", "graph", "periodicity"],
      "modelAnswer": "<span>Cosine of x equals -√3/2 at angles where cosine is negative, which is in the second and third quadrants. Knowing that cos 30° = √3/2, cos x = -√3/2 corresponds to x = 150° and x = 210° in the interval 0° ≤ x ≤ 360°.</span>",
      "scaffoldPrompts": [
        "Recall exact cosine values for special angles.",
        "Determine where cosine is negative between 0° and 360°.",
        "Use graph or unit circle to find matching angles."
      ]
    }
  }
};