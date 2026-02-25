window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.8 - Iterative methods for solving equations",
  "strapline": "Understanding how to use iterative methods to approximate solutions for equations that cannot be solved algebraically.",
  "learningObjectives": [
    "Students should understand and use iterative methods to find approximate solutions to equations that cannot be solved algebraically (Maths 2.8)",
    "Students should understand that successive approximations converge towards a solution through repeated calculations (Maths 2.8)"
  ],
  "keyFormulas": [
    "Iterative formula: x_{n+1} = f(x_n)",
    "Rearranged form for iteration: x = f(x)",
    "Convergence criteria depends on |f'(x)| < 1 near the solution"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='210' fill='#e8f0fe' stroke='#3a6ea5' stroke-width='2' rx='15' ry='15'/><text x='200' y='50' font-family='Arial' font-size='18' fill='#0b3d91' text-anchor='middle'>Iterative Method Process</text><circle cx='200' cy='110' r='30' fill='#a8c7ff' stroke='#174ea6' stroke-width='2'/><text x='200' y='115' font-family='Arial' font-size='14' fill='#002766' text-anchor='middle'>Guess x₀</text><path d='M 230 110 Q 280 90 330 110' stroke='#174ea6' stroke-width='2' fill='none' marker-end='url(#arrow)'/><circle cx='320' cy='110' r='30' fill='#a8c7ff' stroke='#174ea6' stroke-width='2'/><text x='320' y='115' font-family='Arial' font-size='14' fill='#002766' text-anchor='middle'>Calculate x₁ = f(x₀)</text><path d='M 310 140 Q 280 175 230 165' stroke='#174ea6' stroke-width='2' fill='none' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#174ea6' /></marker></defs><circle cx='210' cy='160' r='30' fill='#a8c7ff' stroke='#174ea6' stroke-width='2'/><text x='210' y='165' font-family='Arial' font-size='14' fill='#002766' text-anchor='middle'>Calculate x₂ = f(x₁)</text></svg>",
  "step1": {
    "title": "Introduction to Iterative Methods",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>iterative method</strong> is a way to solve equations by repeatedly applying a formula. You start with an initial guess (like x₀) and then find better guesses (x₁, x₂, ...) by applying a function repeatedly until the answers stop changing much.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of trying to guess the weight of a box by lifting it a few times and adjusting your guess based on how heavy it feels each time. Each guess gets closer to the actual weight.</p>"
    },
    "workedExample": {
      "title": "Worked example: First iteration for x = cos(x)",
      "problem": "Use the iterative formula x_{n+1} = cos(x_n). Start with x₀ = 1.0.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate x₁ = cos(x₀). Input x₀ = 1.0",
          "answer": "0.5403",
          "feedback": "Correct! cos(1.0) ≈ 0.5403"
        },
        {
          "id": "q2",
          "prompt": "Now calculate x₂ = cos(x₁). Use your answer from q1.",
          "answer": "0.8575",
          "feedback": "Correct! cos(0.5403) ≈ 0.8575"
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Convergence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If the values you get from the iterative method get closer and closer to a fixed number, we say the sequence <strong>converges</strong>. This fixed number is the approximate solution to the equation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine walking halfway to a wall repeatedly: each step halves the remaining distance. Your position converges to the wall.</p>"
    },
    "workedExample": {
      "title": "Check convergence for x = cos(x)",
      "problem": "Using previous values x₀=1.0, x₁=0.5403, x₂=0.8575, what happens next?",
      "questions": [
        {
          "id": "q3",
          "prompt": "Calculate x₃ = cos(x₂).",
          "answer": "0.6543",
          "feedback": "Great! cos(0.8575) ≈ 0.6543"
        },
        {
          "id": "q4",
          "prompt": "Is the difference |x₃ - x₂| smaller than |x₂ - x₁|?",
          "answer": "yes",
          "feedback": "Correct. The iterations are getting closer, so it is converging."
        }
      ]
    }
  },
  "step3": {
    "title": "Rearranging Equations for Iteration",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To use iterative methods, rewrite an equation in the form <strong>x = f(x)</strong>. This lets you plug a value in and calculate the next value.</p>",
    "workedExample": {
      "title": "Rewrite equation x³ + x - 1 = 0 for iteration",
      "problem": "Rearrange the equation to the form x = f(x).",
      "questions": [
        {
          "id": "q5",
          "prompt": "Rewrite as x = 1 - x³?",
          "answer": "no",
          "feedback": "Not quite, you must isolate x fully on one side. Try again."
        },
        {
          "id": "q6",
          "prompt": "Rewrite as x = (1 - x)^{1/3}?",
          "answer": "yes",
          "feedback": "Correct! That is one possible rearrangement: x = (1 - x)^{1/3}."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Example: Using Iteration to Solve x³ + x - 1 = 0",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the rearranged iterative formula x = (1 - x)^{1/3}. Start from x₀ = 0.5 and calculate the next iterations.</p>",
    "workedExample": {
      "title": "Calculate the next iterations",
      "problem": "Calculate x₁, x₂, and x₃.",
      "questions": [
        {
          "id": "q7",
          "prompt": "Calculate x₁ = (1 - x₀)^{1/3}, with x₀ = 0.5",
          "answer": "0.7937",
          "feedback": "Well done! (1 - 0.5)^{1/3} ≈ 0.7937"
        },
        {
          "id": "q8",
          "prompt": "Calculate x₂ = (1 - x₁)^{1/3}, using your x₁",
          "answer": "0.5848",
          "feedback": "Correct! (1 - 0.7937)^{1/3} ≈ 0.5848"
        },
        {
          "id": "q9",
          "prompt": "Calculate x₃ = (1 - x₂)^{1/3}",
          "answer": "0.7412",
          "feedback": "Great! (1 - 0.5848)^{1/3} ≈ 0.7412"
        }
      ]
    }
  },
  "step5": {
    "title": "Key Terminology: Fill in the blanks",
    "cloze": [
      {
        "id": "cloze1",
        "sentence": "<span>The process of applying a formula repeatedly to get closer to a solution is called the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "iteration", "label": "iteration", "isCorrect": true, "feedback": "Correct! This is the iterative method."},
              {"value": "integration", "label": "integration", "isCorrect": false, "feedback": "Incorrect. Integration is a different process."}
            ]
          }
        ]
      },
      {
        "id": "cloze2",
        "sentence": "<span><span class=\"font-semibold\">_____</span> describes when successive values get closer to a fixed point.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "convergence", "label": "convergence", "isCorrect": true, "feedback": "Correct! Convergence is the term."},
              {"value": "divergence", "label": "divergence", "isCorrect": false, "feedback": "Incorrect. Divergence is the opposite."}
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how you would use an iterative method to approximate the solution to the equation x³ + x - 1 = 0. Include how to rearrange the equation and how to check if the method is converging.</span>",
      "hint": "Remember to show your starting guess, explain the rearranged formula x = f(x), and describe what it means when the values get closer together.",
      "mustHaveKeywords": ["iterative method", "rearrangement", "convergence", "approximate solution"],
      "optionalKeywords": ["initial guess", "successive approximations"],
      "modelAnswer": "<span>To use an iterative method for x³ + x - 1 = 0, first rearrange it to <em>x = (1 - x)^{1/3}</em>. Then choose a starting guess, for example x₀ = 0.5. Calculate the next values using the formula x_{n+1} = (1 - x_n)^{1/3} repeatedly. The iterative values should get closer to the true solution—this is called convergence. You can check convergence by ensuring the difference between successive values decreases.</span>",
      "scaffoldPrompts": [
        "Start by rearranging the equation to x = f(x).",
        "Choose a starting value for x.",
        "Calculate the next iteration using the formula.",
        "Explain how to know if the values are converging."
      ]
    }
  }
};