window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.6 - Graphs of sin, cos, tan",
  "strapline": "Explore how to sketch and interpret the graphs of sine, cosine, and tangent functions, focusing on their key features such as amplitude, period, and asymptotes.",
  "learningObjectives": [
    "Students should be able to sketch and interpret graphs of y = sin x, y = cos x and y = tan x for angles of any size (Maths 4.6)",
    "Students should understand and identify key features of trigonometric graphs including amplitude, period and asymptotes (Maths 4.6)",
    "Students should know exact trigonometric values for key angles 0°, 30°, 45°, 60°, 90° and apply them to plot trigonometric graphs (Maths 4.6)"
  ],
  "keyFormulas": [
    "Formula: y = sin x, y = cos x, y = tan x",
    "Amplitude formula: amplitude = maximum height from the central axis",
    "Period formula: Period of sine and cosine = 360°, Period of tangent = 180°"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='150' x2='380' y2='150' stroke='black' stroke-width='2'/><line x1='50' y1='20' x2='50' y2='280' stroke='black' stroke-width='2'/><path d='M50 150 Q 100 100 150 150 T 250 150 T 350 150' fill='none' stroke='#1f77b4' stroke-width='2'/><text x='360' y='145' font-family='sans-serif' font-size='14' fill='#1f77b4'>y=sin x</text><path d='M50 150 M50 100 Q 100 150 150 100 T 250 100 T 350 100' fill='none' stroke='#ff7f0e' stroke-width='2'/><text x='360' y='105' font-family='sans-serif' font-size='14' fill='#ff7f0e'>y=cos x</text><path d='M60 150 L 100 50 M 140 150 L 180 250 M 220 150 L 260 50 M 300 150 L 340 250' fill='none' stroke='#2ca02c' stroke-width='2' stroke-dasharray='5,5'/><text x='350' y='155' font-family='sans-serif' font-size='14' fill='#2ca02c'>y=tan x (asymptotes)</text></svg>",
  "step1": {
    "title": "Introduction to Periodic Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Periodic functions repeat their values at regular intervals. The sine and cosine functions repeat every 360°, while the tangent function repeats every 180°.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of periodic functions like a clock. Just as the clock's hands repeat their position every 12 hours, these functions repeat their pattern after a fixed angle.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Recognising the Period",
      "problem": "Determine the period of y = sin x and y = tan x.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the period of y = sin x (in degrees)?",
          "answer": "360",
          "feedback": "Correct. The sine function repeats every 360°."
        },
        {
          "id": "q2",
          "prompt": "What is the period of y = tan x (in degrees)?",
          "answer": "180",
          "feedback": "Correct. The tangent function repeats every 180°."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Amplitude of Sine and Cosine",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Amplitude is the maximum vertical distance from the central axis to the peak of the wave. For y = sin x and y = cos x, the amplitude is 1, meaning the graphs range from -1 to 1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a swing moving back and forth. The amplitude is how far it goes from its resting position to the highest point.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Amplitude",
      "problem": "Find the amplitude of y = cos x.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the maximum value y can take?",
          "answer": "1",
          "feedback": "Correct. The maximum is 1."
        },
        {
          "id": "q2",
          "prompt": "What is the minimum value y can take?",
          "answer": "-1",
          "feedback": "Correct. The minimum is -1."
        },
        {
          "id": "q3",
          "prompt": "What is the amplitude?",
          "answer": "1",
          "feedback": "Correct. Amplitude is 1 because the graph ranges from -1 to 1."
        }
      ]
    }
  },
  "step3": {
    "title": "Plotting Key Angles on Sine and Cosine Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Key angles such as 0°, 30°, 45°, 60°, and 90° have exact trigonometric values which help in plotting graphs.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just like points on a map help you navigate, these key angle values help you accurately draw the graph.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating sin values",
      "problem": "Calculate sin x for x = 0°, 30°, 45°, 60°, 90°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "sin 0° equals?",
          "answer": "0",
          "feedback": "Correct. sin 0° = 0."
        },
        {
          "id": "q2",
          "prompt": "sin 30° equals?",
          "answer": "0.5",
          "feedback": "Correct. sin 30° = 0.5."
        },
        {
          "id": "q3",
          "prompt": "sin 45° equals? (approximately 0.707)",
          "answer": "0.707",
          "feedback": "Correct. sin 45° ≈ 0.707."
        },
        {
          "id": "q4",
          "prompt": "sin 60° equals?",
          "answer": "0.866",
          "feedback": "Correct. sin 60° ≈ 0.866."
        },
        {
          "id": "q5",
          "prompt": "sin 90° equals?",
          "answer": "1",
          "feedback": "Correct. sin 90° = 1."
        }
      ]
    }
  },
  "step4": {
    "title": "Identifying Asymptotes in the Tangent Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The tangent graph has vertical asymptotes where the function is undefined. These occur at odd multiples of 90°, such as 90°, 270°, etc.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of asymptotes as invisible walls the graph approaches but never touches.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Locating Tangent Asymptotes",
      "problem": "Find the first two asymptotes of y = tan x between 0° and 360°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the first vertical asymptote after 0°?",
          "answer": "90",
          "feedback": "Correct. First asymptote is at 90°."
        },
        {
          "id": "q2",
          "prompt": "What is the second vertical asymptote after 0°?",
          "answer": "270",
          "feedback": "Correct. Second asymptote is at 270°."
        }
      ]
    }
  },
  "step5": {
    "title": "Plot y = sin x and y = cos x for angles over 360°",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Sine and cosine graphs repeat after 360°, so you can sketch their graphs for angles greater than 360° by repeating the pattern.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This is like a repeating wallpaper pattern that continues indefinitely.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Extending the Graph",
      "problem": "If sin 30° = 0.5, what is sin 390° (which is 360° + 30°)?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate sin 390°.",
          "answer": "0.5",
          "feedback": "Correct! sin 390° = sin 30° = 0.5 since sine repeats every 360°."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Sketch the graph of y = tan x from 0° to 360°. Identify its period, amplitude, and asymptotes. Explain your reasoning and label key points including asymptotes and zeros.</span>",
      "hint": "Remember that tangent has vertical asymptotes at odd multiples of 90°, and no amplitude as it can grow infinitely large.",
      "mustHaveKeywords": ["period", "asymptotes", "no amplitude", "zeros", "180° period"],
      "optionalKeywords": ["graph shape", "increasing behavior"],
      "modelAnswer": "<span>The graph of y = tan x has a period of 180°, meaning it repeats every 180°. It has vertical asymptotes at x = 90° and x = 270°, where the function is undefined. Unlike sine and cosine, tangent does not have an amplitude as its values can increase or decrease without bound. The zeros occur at multiples of 180° (0°, 180°, 360°). The graph increases from negative infinity to positive infinity between asymptotes.</span>",
      "scaffoldPrompts": [
        "Start by marking the asymptotes at 90° and 270°.",
        "Mark zeros at 0°, 180°, and 360°.",
        "Note the tangent graph's values between asymptotes and how it repeats every 180°."
      ]
    }
  }
};