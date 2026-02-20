window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.8 - Iterative methods for solving equations",
  "strapline": "Understanding how repeated calculations can approximate solutions to equations that are difficult to solve algebraically.",
  "learningObjectives": [
    "Students should understand and use iterative methods to find approximate solutions to equations that cannot be solved algebraically (Maths 2.8)",
    "Students should understand that successive approximations converge towards a solution through repeated calculations (Maths 2.8)"
  ],
  "keyFormulas": [
    "Iterative formula: xₙ₊₁ = f(xₙ)",
    "Rearranged form for iteration: x = f(x)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='20' y='20' width='360' height='210' fill='#f9f9f9' stroke='#666' stroke-width='2'/>\n  <text x='200' y='40' font-family='sans-serif' font-size='16' fill='#222' text-anchor='middle'>Iterative Method Process</text>\n  <circle cx='200' cy='90' r='30' fill='#4a90e2'/>\n  <text x='200' y='95' text-anchor='middle' fill='white' font-weight='bold'>x₀</text>\n  <path d='M200 120 L200 160' stroke='#333' stroke-width='2' marker-end='url(#arrowhead)' />\n  <circle cx='200' cy='190' r='30' fill='#7ed6f9'/>\n  <text x='200' y='195' text-anchor='middle' fill='#222' font-weight='bold'>x₁ = f(x₀)</text>\n  <path d='M230 190 L280 190' stroke='#333' stroke-width='2' marker-end='url(#arrowhead)' />\n  <text x='300' y='190' font-size='12' fill='#222'>Repeat</text>\n  <defs>\n    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'>\n      <polygon points='0 0, 10 3.5, 0 7' fill='#333' />\n    </marker>\n  </defs>\n</svg>",
  "step1": {
    "title": "Understanding the Iterative Method",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>iterative method</strong> means using a formula repeatedly, where the output from one step becomes the input for the next. This helps us find approximate solutions to equations that are too complex to solve exactly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine trying to reach a point on a map by walking half the remaining distance each time. Each step brings you closer, but you never jump straight there. That's like an iterative method getting you closer to the solution.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Starting Iterations",
      "problem": "Use the iterative formula xₙ₊₁ = (xₙ² + 4) / 6 to find approximate values starting from x₀ = 2.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate x₁ using x₀ = 2 with the formula x₁ = (x₀² + 4) / 6.",
          "answer": "2",
          "feedback": "Correct! (2² + 4) / 6 = (4 + 4)/6 = 8/6 = 1.333... Double-check your calculation."
        },
        {
          "id": "q2",
          "prompt": "Try calculating x₁ again carefully. What is the correct value?",
          "answer": "1.333",
          "feedback": "Correct! 8 divided by 6 is 1.333 (approximately)."
        },
        {
          "id": "q3",
          "prompt": "Now calculate x₂ using your value of x₁: x₂ = (x₁² + 4) / 6.",
          "answer": "1.296",
          "feedback": "Great! Squaring 1.333 gives 1.77, so x₂ = (1.77 +4)/6 ≈ 5.77/6 = 0.962. Check your calculations again."
        },
        {
          "id": "q4",
          "prompt": "Calculate x₂ accurately.",
          "answer": "0.962",
          "feedback": "Correct! x₂ = 0.962."
        }
      ]
    }
  },
  "step2": {
    "title": "Convergence Concept Check",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Successive approximations will converge if the values get closer to a fixed number, meaning the difference between iterations becomes smaller.</p>",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which statement best describes <strong>convergence</strong> in iterative methods?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Each step moves further away from the solution.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Convergence implies moving closer, not farther."
          },
          {
            "id": "b",
            "label": "<span>Steps get closer and closer to a fixed value (solution).</span>",
            "isCorrect": true,
            "explanation": "Correct! That's the idea of convergence."
          },
          {
            "id": "c",
            "label": "<span>The method finds the exact value in the first step.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Iterative methods usually require many steps."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> refers to rewriting an equation in the form <em>x = f(x)</em> to apply iteration.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "rearrangement-for-iteration",
                "label": "Rearrangement for iteration",
                "isCorrect": true,
                "feedback": "Correct! This step prepares the equation for iteration."
              },
              {
                "value": "convergence",
                "label": "Convergence",
                "isCorrect": false,
                "feedback": "Not quite. Convergence is about the iterations getting closer to the answer."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>An <span class=\"font-semibold\">_____</span> uses a repeated formula where the output is fed back as input to get closer to a solution.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "iterative-method",
                "label": "Iterative method",
                "isCorrect": true,
                "feedback": "Correct! That's the fundamental idea here."
              },
              {
                "value": "algebraic-method",
                "label": "Algebraic method",
                "isCorrect": false,
                "feedback": "No, iterative methods use repetition, algebraic methods do not."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span><span class=\"font-semibold\">_____</span> means the values from iterations become closer to a fixed solution.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "convergence",
                "label": "Convergence",
                "isCorrect": true,
                "feedback": "Right! Convergence means the iterations approach a specific limit."
              },
              {
                "value": "divergence",
                "label": "Divergence",
                "isCorrect": false,
                "feedback": "Wrong. Divergence means the values move away."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Rearranging an Equation for Iteration",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To use iteration, you must write the equation in the form <em>x = f(x)</em>. For example, for the equation <strong>x³ + x - 1 = 0</strong>, rearrange to <em>x = 1 - x³</em> or another suitable form.</p>",
    "workedExample": {
      "title": "Worked Example: Rearrangement Practice",
      "problem": "Rearrange <strong>2x + 3 = x²</strong> to the form <em>x = f(x)</em> for iteration.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Isolate the x² term: What is x² equal to?",
          "answer": "2x + 3",
          "feedback": "Correct, x² = 2x + 3."
        },
        {
          "id": "q2",
          "prompt": "Take the square root of both sides. Write the two possible forms for x.",
          "answer": "x = ±√(2x + 3)",
          "feedback": "Correct. Remember both positive and negative roots are possible."
        },
        {
          "id": "q3",
          "prompt": "Choose the form for iteration: x = √(2x + 3). Write this as the function f(x).",
          "answer": "f(x) = √(2x + 3)",
          "feedback": "Good choice. We usually pick the form that converges."
        }
      ]
    }
  },
  "step5": {
    "title": "Using Iterative Methods: Step by Step",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Start with an initial guess x₀, then repeatedly calculate x₁ = f(x₀), x₂ = f(x₁), and so on until values stop changing significantly.</p>",
    "workedExample": {
      "title": "Worked Example: Applying Iteration",
      "problem": "Use iteration with f(x) = √(2x + 3) starting at x₀ = 1 to find an approximate solution.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate x₁ = √(2*1 + 3).",
          "answer": "2",
          "feedback": "Correct, √(5) ≈ 2."
        },
        {
          "id": "q2",
          "prompt": "Calculate x₂ = √(2*2 + 3).",
          "answer": "2.236",
          "feedback": "Great, √(7) ≈ 2.236."
        },
        {
          "id": "q3",
          "prompt": "Calculate x₃ = √(2*2.236 + 3).",
          "answer": "2.345",
          "feedback": "Correct, √(7.472) ≈ 2.345."
        },
        {
          "id": "q4",
          "prompt": "Calculate x₄ = √(2*2.345 + 3).",
          "answer": "2.397",
          "feedback": "That's right, √(7.69) ≈ 2.397."
        },
        {
          "id": "q5",
          "prompt": "Do the values seem to be converging? Explain why or why not.",
          "answer": "Yes, they are getting closer and the difference between values is smaller.",
          "feedback": "Excellent! This shows convergence."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to use iterative methods to find an approximate solution to the equation <em>x³ + x - 1 = 0</em>. Include how you would rearrange the equation for iteration and how to check if the method converges.</span>",
      "hint": "Remember to rearrange the equation into <em>x = f(x)</em> form, choose a suitable starting value, perform iterations, and observe whether successive values get closer.",
      "mustHaveKeywords": ["rearrangement", "iteration formula", "initial guess", "convergence", "successive approximations"],
      "optionalKeywords": ["fixed point", "difference between iterations", "tolerance", "stopping criteria"],
      "modelAnswer": "<span>First, rearrange the equation <em>x³ + x - 1 = 0</em> into the form <em>x = f(x)</em>, for example, <em>x = 1 - x³</em>. Then, choose an initial guess <em>x₀</em>. Apply the iterative formula <em>xₙ₊₁ = f(xₙ)</em> repeatedly, calculating each new value from the previous. After each iteration, check if the difference between <em>xₙ₊₁</em> and <em>xₙ</em> is getting smaller, indicating convergence toward a solution. When the difference is within an acceptable small range, stop. This method approximates the root without solving algebraically.</span>",
      "scaffoldPrompts": [
        "How can you rearrange the equation into x = f(x)?",
        "What initial guess would you start with and why?",
        "How do you calculate successive values?",
        "How can you tell if your guesses are converging?",
        "When should you stop iterating?"
      ]
    }
  }
};