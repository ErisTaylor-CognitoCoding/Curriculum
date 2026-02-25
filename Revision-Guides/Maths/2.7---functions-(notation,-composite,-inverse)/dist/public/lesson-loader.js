window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.7 - Functions (notation, composite, inverse)",
  "strapline": "Explore how functions work with notation, combining functions, and reversing them to find inverses.",
  "learningObjectives": [
    "Students should understand and use function notation including f(x) (Maths 2.7)",
    "Students should find and work with composite functions by combining two or more functions (Maths 2.7)",
    "Students should determine inverse functions by reversing the operations of a given function (Maths 2.7)"
  ],
  "keyFormulas": [
    "Function notation: f(x) = expression defining output from input x",
    "Composite function: (f ∘ g)(x) = f(g(x))",
    "Inverse function: If y = f(x), then f⁻¹(y) = x"
  ],
  "diagramHtml": "<svg viewBox='0 0 420 250' xmlns='http://www.w3.org/2000/svg' aria-labelledby='title'><title>Function notation and composition diagram</title><rect x='10' y='20' width='120' height='50' fill='#cce5ff' stroke='#004085' rx='10'/><text x='70' y='50' font-family='sans-serif' font-size='14' fill='#004085' text-anchor='middle'>Input x</text><line x1='130' y1='45' x2='190' y2='45' stroke='#004085' stroke-width='2' marker-end='url(#arrow)'/><rect x='190' y='15' width='110' height='60' fill='#d4edda' stroke='#155724' rx='10'/><text x='245' y='45' font-family='sans-serif' font-size='14' fill='#155724' text-anchor='middle'>Function f(x) = 2x + 3</text><line x1='300' y1='45' x2='360' y2='45' stroke='#004085' stroke-width='2' marker-end='url(#arrow)'/><rect x='360' y='20' width='40' height='50' fill='#fff3cd' stroke='#856404' rx='10'/><text x='380' y='50' font-family='sans-serif' font-size='14' fill='#856404' text-anchor='middle'>Output f(x)</text><defs><marker id='arrow' markerWidth='6' markerHeight='6' refX='5' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 L1,3 z' fill='#004085' /></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding Function Notation f(x)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A function <strong>f</strong> is a rule that gives you exactly one output for each input <em>x</em>. We write this as <strong>f(x)</strong> which means 'function <strong>f</strong> applied to <em>x</em>'. For example, if <strong>f(x) = 2x + 3</strong>, then when <em>x = 5</em>, <strong>f(5) = 2×5 + 3 = 13</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a function like a vending machine: you put in a number (<em>x</em>), it performs a calculation and gives you a snack (output value).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Evaluate f(4) for f(x) = 3x - 1",
      "problem": "Find the output when <strong>x = 4</strong> in the function <strong>f(x) = 3x - 1</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Substitute x with 4 in f(x) = 3x - 1. What expression do you get?",
          "answer": "3(4) - 1",
          "feedback": "Correct. You've replaced x with 4."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Calculate 3 × 4.",
          "answer": "12",
          "feedback": "Correct. 3 times 4 equals 12."
        },
        {
          "id": "q3",
          "prompt": "Step 3: Subtract 1 from 12. What is the final answer?",
          "answer": "11",
          "feedback": "Correct. The output value is 11."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Composite Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A composite function is when you combine two functions so that the output of one becomes the input of the other. Written as <strong>f(g(x))</strong>, this means you first apply <strong>g</strong> to <em>x</em>, then apply <strong>f</strong> to the result.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two machines in a row: Machine G first changes the input, then Machine F changes that result again.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find f(g(2)) for f(x) = x + 2 and g(x) = 3x",
      "problem": "Calculate the composite function f(g(2)).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Find g(2). What is g(2) if g(x) = 3x?",
          "answer": "6",
          "feedback": "Correct. 3 times 2 is 6."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Now find f(g(2)) = f(6). What is f(6) if f(x) = x + 2?",
          "answer": "8",
          "feedback": "Correct. 6 plus 2 equals 8."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Inverse Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An inverse function <strong>f⁻¹(x)</strong> reverses what the original function <strong>f(x)</strong> does. If <strong>f(a) = b</strong>, then <strong>f⁻¹(b) = a</strong>. To find an inverse, replace f(x) with y, swap x and y, then solve for y.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of locking and unlocking a door: the lock function has an inverse which unlocks it and returns it to the original state.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the inverse of f(x) = 2x + 3",
      "problem": "Find f⁻¹(x) for the function f(x) = 2x + 3.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Write f(x) as y: y = 2x + 3.",
          "answer": "y = 2x + 3",
          "feedback": "Correct. We start with y = 2x + 3."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Swap x and y: x = 2y + 3. Write this down.",
          "answer": "x = 2y + 3",
          "feedback": "Correct. x and y are swapped."
        },
        {
          "id": "q3",
          "prompt": "Step 3: Solve for y. Subtract 3 from both sides: x - 3 = 2y. Write the new expression.",
          "answer": "x - 3 = 2y",
          "feedback": "Correct. You're isolating y."
        },
        {
          "id": "q4",
          "prompt": "Step 4: Divide both sides by 2 to solve for y: y = (x - 3) / 2. Write the inverse function f⁻¹(x).",
          "answer": "f⁻¹(x) = (x - 3) / 2",
          "feedback": "Correct. This is the inverse function."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the value of f(3) if f(x) = 4x - 5?</span>",
        "options": [
          {"id": "a", "label": "<span>7</span>", "isCorrect": true, "explanation": "Correct! 4×3 - 5 = 12 - 5 = 7."},
          {"id": "b", "label": "<span>12</span>", "isCorrect": false, "explanation": "Incorrect. 12 is 4×3 but you still need to subtract 5."},
          {"id": "c", "label": "<span>2</span>", "isCorrect": false, "explanation": "Incorrect. Check the calculation again."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which expression represents the composite function (g ∘ f)(x) if f(x) = x + 1 and g(x) = 2x?</span>",
        "options": [
          {"id": "a", "label": "<span>2(x + 1)</span>", "isCorrect": true, "explanation": "Correct! Apply f first (x + 1), then g: 2 times (x + 1)."},
          {"id": "b", "label": "<span>(2x) + 1</span>", "isCorrect": false, "explanation": "Incorrect. This applies operations in the wrong order."},
          {"id": "c", "label": "<span>x + 2</span>", "isCorrect": false, "explanation": "Incorrect. This is neither f(x) nor g(x) composition."}
        ]
      }
    ]
  },
  "step5": {
    "title": "Fill in the Blanks: Key Terminology",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> shows the output value of a function when given an input x.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "output", "label": "output", "isCorrect": true, "feedback": "Correct! The output is what the function returns."},
              {"value": "input", "label": "input", "isCorrect": false, "feedback": "Incorrect. The input is what you put into the function."},
              {"value": "variable", "label": "variable", "isCorrect": false, "feedback": "Incorrect. A variable represents a quantity but is not the output."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>A composite function is written as <span class=\"font-semibold\">_____</span>, which means apply one function then the other.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "f(g(x))", "label": "f(g(x))", "isCorrect": true, "feedback": "Correct! This means apply g first, then f."},
              {"value": "f + g(x)", "label": "f + g(x)", "isCorrect": false, "feedback": "Incorrect. This indicates addition, not composition."},
              {"value": "f(x)g(x)", "label": "f(x)g(x)", "isCorrect": false, "feedback": "Incorrect. This indicates multiplication."}
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span>The inverse function <span class=\"font-semibold\">_____</span> reverses what f(x) does.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {"value": "f⁻¹(x)", "label": "f⁻¹(x)", "isCorrect": true, "feedback": "Correct! The inverse gives the input from the output."},
              {"value": "f(x)", "label": "f(x)", "isCorrect": false, "feedback": "Incorrect. This is the original function."},
              {"value": "g(x)", "label": "g(x)", "isCorrect": false, "feedback": "Incorrect. This is a different function."}
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given the functions f(x) = 4x - 7 and g(x) = x/2, find (a) the composite function f(g(x)), (b) the inverse of f(x), and (c) verify by showing that f(f⁻¹(x)) = x.</span>",
      "hint": "Remember to substitute properly for composition, use swapping and solving to find inverses, and verify by composition.",
      "mustHaveKeywords": ["composite function", "inverse function", "swap variables", "solve for y", "verify identity"],
      "optionalKeywords": ["substitution", "simplify", "function notation"],
      "modelAnswer": "<span><strong>(a)</strong> Find f(g(x)) by substituting g(x) into f: f(g(x)) = f(x/2) = 4(x/2) - 7 = 2x - 7. <br /><strong>(b)</strong> For inverse of f(x) = 4x - 7, write y = 4x - 7, swap x and y: x = 4y - 7, then solve for y: x + 7 = 4y, y = (x + 7)/4, so f⁻¹(x) = (x + 7)/4. <br /><strong>(c)</strong> Verify f(f⁻¹(x)) = f((x + 7)/4) = 4((x + 7)/4) - 7 = x + 7 - 7 = x, confirming the inverse is correct.</span>",
      "scaffoldPrompts": [
        "Step 1: Write down f(g(x)) by substituting g(x) into f(x).",
        "Step 2: Write y = f(x), then swap x and y to start finding the inverse.",
        "Step 3: Solve for y after swapping to get f⁻¹(x).",
        "Step 4: Substitute f⁻¹(x) back into f(x) and simplify to verify if it equals x."
      ]
    }
  }
};