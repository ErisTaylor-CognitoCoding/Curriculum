window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.8 - Iterative methods for solving equations",
  "strapline": "Use iterative methods to approximate solutions to equations that cannot be solved algebraically, understanding convergence through repeated calculations.",
  "learningObjectives": [
    "Students should understand and use iterative methods to find approximate solutions to equations that cannot be solved algebraically (Maths 2.8)",
    "Students should understand that successive approximations converge towards a solution through repeated calculations (Maths 2.8)"
  ],
  "keyFormulas": [
    "Iterative formula: x<sub>n+1</sub> = f(x<sub>n</sub>) (Using the previous value to find the next)",
    "Convergence condition: |x<sub>n+1</sub> - x<sub>n</sub>| → 0 as n → ∞",
    "Rearranged equation: x = f(x) (Form needed for iteration)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='20' width='300' height='260' fill='#f9f9f9' stroke='#666' stroke-width='2'/><circle cx='200' cy='150' r='60' fill='none' stroke='#333' stroke-width='2'/><text x='200' y='150' font-family='Arial' font-size='14' text-anchor='middle' fill='#333'>x<sub>n</sub></text><path d='M200 90 L170 110 L180 140' stroke='#0074D9' stroke-width='3' fill='none' marker-end='url(#arrowhead)'/><text x='140' y='120' font-family='Arial' font-size='12' fill='#0074D9'>Apply f(x)</text><path d='M260 110 L230 130 L240 160' stroke='#FF4136' stroke-width='3' fill='none' marker-end='url(#arrowhead)'/><text x='280' y='140' font-family='Arial' font-size='12' fill='#FF4136'>Next approx x<sub>n+1</sub></text><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#333'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: What is an Iterative Method?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <em>iterative method</em> is a process where we repeatedly apply a formula to get closer to the solution of an equation. Starting with an initial guess, we use the output to find a better approximation each time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine tuning a radio to find a station. You adjust the dial bit by bit (iterations), getting closer to clear sound (the solution) each time.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Simple Iteration Step",
      "problem": "Use the iterative formula x = (x<sup>2</sup> + 4) / 6 starting from x<sub>0</sub> = 1 to find x<sub>1</sub>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate x<sub>1</sub> using x<sub>0</sub> = 1 in the formula x = (x<sup>2</sup> + 4) / 6.",
          "answer": "0.8333",
          "feedback": "Correct! (1<sup>2</sup> + 4)/6 = 5/6 = 0.8333."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Rearrangement for Iteration",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To use iterative methods, equations are rewritten into the form <strong>x = f(x)</strong>. This ensures we can use the output as the next input, repeating the process.</p>",
    "workedExample": {
      "title": "Worked Example: Rearranging x<sup>3</sup> + x - 1 = 0",
      "problem": "Rewrite the equation as x = f(x) for iteration.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Rearrange to isolate x on one side: x<sup>3</sup> + x = 1",
          "answer": "x = 1 - x^3",
          "feedback": "Correct. Now x is expressed as a function of x."
        },
        {
          "id": "q2",
          "prompt": "Is the form x = 1 - x<sup>3</sup> directly suitable for iteration? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct. This is a valid iterative formula."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Convergence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When the values from iteration get closer and closer to a specific value, we say the iteration <strong>converges</strong>. This means our approximations approach the true solution.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of walking towards a door step by step, each step half the remaining distance. You approach the door but cover less distance each step — this illustrates convergence.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Checking Convergence",
      "problem": "Given iterations x<sub>0</sub>=1, x<sub>1</sub>=0.8, x<sub>2</sub>=0.78, x<sub>3</sub>=0.779, x<sub>4</sub>=0.7795, is the sequence converging?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the difference |x<sub>n+1</sub> - x<sub>n</sub>| get smaller each time? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct, the values are getting closer indicating convergence."
        }
      ]
    }
  },
  "step4": {
    "title": "Iterative Process: Step-by-Step Approach",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The iterative method is repeated by: choosing a starting value, applying the formula to find a new value, then using the new value as input for the next iteration.</p>",
    "workedExample": {
      "title": "Worked Example: Continuing Iterations",
      "problem": "Use x = (x<sup>2</sup> + 4)/6 and start with x<sub>0</sub> = 1. Find x<sub>2</sub> and x<sub>3</sub>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "From x<sub>0</sub>=1, calculate x<sub>1</sub>.",
          "answer": "0.8333",
          "feedback": "Correct! (1<sup>2</sup>+4)/6 = 5/6 = 0.8333"
        },
        {
          "id": "q2",
          "prompt": "Using x<sub>1</sub>=0.8333, calculate x<sub>2</sub> = (x<sub>1</sub><sup>2</sup> + 4)/6.",
          "answer": "0.8403",
          "feedback": "Well done! (0.8333<sup>2</sup> + 4)/6 ≈ (0.694 + 4)/6 = 0.8403"
        },
        {
          "id": "q3",
          "prompt": "Using x<sub>2</sub>=0.8403, calculate x<sub>3</sub>.",
          "answer": "0.8410",
          "feedback": "Correct! (0.8403<sup>2</sup> + 4)/6 ≈ (0.706 + 4)/6 = 0.8410"
        }
      ]
    }
  },
  "step5": {
    "title": "Key Factors Affecting Convergence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Not all iterations converge. Convergence depends on the function f(x) and starting value. If values wander or oscillate, the method may fail to converge.</p>",
    "workedExample": {
      "title": "Worked Example: Checking Divergence",
      "problem": "Apply x = (x + 2/x)/2 to approximate √2 starting at x<sub>0</sub> = 1. Calculate x<sub>1</sub> and x<sub>2</sub>. Does this method converge?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate x<sub>1</sub> = (1 + 2/1)/2.",
          "answer": "1.5",
          "feedback": "Correct! (1 + 2)/2 = 1.5"
        },
        {
          "id": "q2",
          "prompt": "Calculate x<sub>2</sub> = (1.5 + 2/1.5)/2.",
          "answer": "1.4167",
          "feedback": "Great! (1.5 + 1.3333)/2 = 1.4167"
        },
        {
          "id": "q3",
          "prompt": "Looking at values 1, 1.5, 1.4167, are they approaching √2 (~1.414)? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct. The iteration is converging to √2."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A student uses the iterative method to solve the equation x<sup>3</sup> + x - 1 = 0 by rearranging it to x = 1 - x<sup>3</sup>.</span><br><span>(a) Use x<sub>0</sub> = 0.5 to find x<sub>1</sub> and x<sub>2</sub>.</span><br><span>(b) Explain whether the method appears to be converging based on these values.</span>",
      "hint": "Remember to substitute the value of x into the formula each time and observe how close the approximations become.",
      "mustHaveKeywords": ["iteration", "substitute", "converge", "approximation"],
      "optionalKeywords": ["successive", "values", "estimate"],
      "modelAnswer": "<span>(a) Substituting x<sub>0</sub> = 0.5, x<sub>1</sub> = 1 - (0.5)<sup>3</sup> = 1 - 0.125 = 0.875.<br>Then x<sub>2</sub> = 1 - (0.875)<sup>3</sup> = 1 - 0.6699 = 0.3301.<br>(b) The values jump from 0.5 to 0.875 to 0.3301, which shows they are not getting closer. This indicates the iteration is not converging with this rearrangement.</span>",
      "scaffoldPrompts": [
        "Calculate x<sub>1</sub> by substituting x<sub>0</sub> into the iterative formula.",
        "Calculate x<sub>2</sub> using x<sub>1</sub>.",
        "Compare x<sub>1</sub> and x<sub>2</sub> to see if the values get closer."
      ]
    }
  }
};