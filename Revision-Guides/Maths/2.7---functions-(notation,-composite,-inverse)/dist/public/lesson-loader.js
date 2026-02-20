window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.7 - Functions (notation, composite, inverse)",
  "strapline": "Explore how to use function notation, combine functions into composites, and find inverses by reversing operations.",
  "learningObjectives": [
    "Students should understand and use function notation including f(x) (Maths 2.7)",
    "Students should find and work with composite functions by combining two or more functions (Maths 2.7)",
    "Students should determine inverse functions by reversing the operations of a given function (Maths 2.7)"
  ],
  "keyFormulas": [
    "Function notation: f(x) = expression involving x",
    "Composite function: (f ∘ g)(x) = f(g(x))",
    "Inverse function condition: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='50' width='140' height='100' fill='#e0f7fa' stroke='#00796b' stroke-width='2' rx='10' ry='10'/><text x='100' y='80' text-anchor='middle' font-family='sans-serif' font-size='16' fill='#004d40'>Input x</text><line x1='100' y1='150' x2='100' y2='180' stroke='#00796b' stroke-width='2' marker-end='url(#arrowhead)'/><rect x='80' y='180' width='120' height='100' fill='#fff3e0' stroke='#f57c00' stroke-width='2' rx='10' ry='10'/><text x='140' y='210' font-family='sans-serif' font-size='16' fill='#e65100'>Function f</text><line x1='200' y1='230' x2='280' y2='230' stroke='#f57c00' stroke-width='2' marker-end='url(#arrowhead)'/><rect x='280' y='170' width='80' height='120' fill='#ede7f6' stroke='#512da8' stroke-width='2' rx='10' ry='10'/><text x='320' y='230' font-family='sans-serif' font-size='16' fill='#311b92'>Output f(x)</text><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#000'/></marker></defs></svg>",
  "step1": {
    "title": "Understanding Function Notation f(x)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A function assigns exactly one output value to each input value. The notation <strong>f(x)</strong> represents the output when the function <em>f</em> is applied to the input <em>x</em>.</p><p>For example, if <em>f(x) = 2x + 3</em>, then <em>f(5) = 2(5) + 3 = 13</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a vending machine where you press a button (input <em>x</em>) and you get a specific snack (output <em>f(x)</em>). Each button corresponds to exactly one snack.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Evaluating f(x)",
      "problem": "Given f(x) = 3x - 4, find f(7).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Substitute 7 for x in the function expression f(x) = 3x -4.",
          "answer": "3(7) - 4",
          "feedback": "Correct. You replace x with 7."
        },
        {
          "id": "q2",
          "prompt": "Calculate 3 × 7.",
          "answer": "21",
          "feedback": "Right. 3 times 7 equals 21."
        },
        {
          "id": "q3",
          "prompt": "Now subtract 4 from 21.",
          "answer": "17",
          "feedback": "Exactly, 21 minus 4 is 17, so f(7) = 17."
        }
      ]
    }
  },
  "step2": {
    "title": "Composite Functions: Combining Two Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Composite functions use the output of one function as the input for another. If <em>f(x)</em> and <em>g(x)</em> are functions, then the composite <em>f(g(x))</em> means apply <em>g</em> to <em>x</em>, then apply <em>f</em> to the result.</p><p>Notation: <strong>fg(x)</strong> or <strong>f(g(x))</strong></p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a factory where Part A is made first (function g), then Part B is added to Part A (function f). The final product is the composite of these two steps.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find fg(2)",
      "problem": "Given f(x) = x + 2 and g(x) = 3x, find fg(2).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate g(2) by substituting 2 into g(x) = 3x.",
          "answer": "6",
          "feedback": "Correct. g(2) = 3 × 2 = 6."
        },
        {
          "id": "q2",
          "prompt": "Now substitute your answer into f(x) = x + 2 to find f(g(2)).",
          "answer": "8",
          "feedback": "Correct. f(6) = 6 + 2 = 8."
        }
      ]
    }
  },
  "step3": {
    "title": "Determining Inverse Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An inverse function <em>f⁻¹(x)</em> reverses the action of <em>f(x)</em>. If <em>f(a) = b</em>, then <em>f⁻¹(b) = a</em>. To find an inverse:</p><ol><li>Replace <em>f(x)</em> with <em>y</em>.</li><li>Swap <em>x</em> and <em>y</em>.</li><li>Solve for <em>y</em>.</li></ol><p>The composition properties are <em>f(f⁻¹(x)) = x</em> and <em>f⁻¹(f(x)) = x</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like encrypting a message with <em>f</em> and decrypting it with <em>f⁻¹</em>, returning to the original message.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find f⁻¹(x)",
      "problem": "Given f(x) = 2x + 5, find its inverse function f⁻¹(x).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the function with y instead of f(x): y = 2x + 5",
          "answer": "y = 2x + 5",
          "feedback": "Correct, replace f(x) with y."
        },
        {
          "id": "q2",
          "prompt": "Swap x and y: x = 2y + 5",
          "answer": "x = 2y + 5",
          "feedback": "Well done, swapped x and y."
        },
        {
          "id": "q3",
          "prompt": "Solve for y. Start by subtracting 5 from both sides.",
          "answer": "x - 5 = 2y",
          "feedback": "Correct. You isolate the 2y term."
        },
        {
          "id": "q4",
          "prompt": "Now divide both sides by 2 to solve for y.",
          "answer": "(x - 5)/2",
          "feedback": "Right. y = (x - 5)/2, which is the inverse function."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Practice: Evaluate Functions and Composites",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Practice evaluating functions and their composites to strengthen understanding.</p>",
    "workedExample": {
      "title": "Evaluate f(3), g(4) and fg(3)",
      "problem": "Given f(x) = 4x - 1 and g(x) = x², find f(3), g(4), and fg(3).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate f(3) = 4 × 3 - 1",
          "answer": "11",
          "feedback": "Correct. 4 × 3 = 12, then 12 -1 = 11."
        },
        {
          "id": "q2",
          "prompt": "Calculate g(4) = 4²",
          "answer": "16",
          "feedback": "Yes, 4 squared is 16."
        },
        {
          "id": "q3",
          "prompt": "Find fg(3) by first finding g(3), then applying f to that result.",
          "answer": "37",
          "feedback": "Exactly. g(3) = 9, and f(9) = 4 × 9 - 1 = 35."
        }
      ]
    }
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The notation <span class=\"font-semibold\">_____</span> means the output of the function <em>f</em> when the input is x.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "1", "label": "f(x)", "isCorrect": true, "feedback": "Correct! This is function notation."},
              {"value": "2", "label": "x + f", "isCorrect": false, "feedback": "No, this is not standard function notation."},
              {"value": "3", "label": "f + x", "isCorrect": false, "feedback": "Incorrect. The output depends on input x."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> function reverses the effect of the original function.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "1", "label": "Inverse", "isCorrect": true, "feedback": "Correct! Inverse functions undo the original."},
              {"value": "2", "label": "Composite", "isCorrect": false, "feedback": "No, composite means combining functions."},
              {"value": "3", "label": "Polynomial", "isCorrect": false, "feedback": "Incorrect. This term is unrelated here."}
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given f(x) = 5x - 3 and g(x) = 2x + 1, find (a) the composite function fg(x), (b) evaluate fg(4), and (c) find the inverse of f(x).</span>",
      "hint": "Remember to substitute g(x) into f(x) for the composite and follow the inverse function method (swap x and y) carefully.",
      "mustHaveKeywords": ["composite function", "substitute", "inverse function", "swap x and y", "solve for y"],
      "optionalKeywords": ["evaluate", "function notation", "simplify"],
      "modelAnswer": "<span>(a) fg(x) = f(g(x)) = 5(2x + 1) - 3 = 10x + 5 - 3 = 10x + 2; (b) fg(4) = 10(4) + 2 = 40 + 2 = 42; (c) To find inverse of f: set y = 5x - 3, swap x and y to get x = 5y - 3, then solve for y: x + 3 = 5y ⇒ y = (x + 3)/5. Hence f⁻¹(x) = (x + 3)/5.</span>",
      "scaffoldPrompts": ["Start by finding g(x) and substitute it into f", "Simplify the expression for fg(x)", "Calculate fg(4) by substituting 4 into your fg(x)", "For inverse, set y = f(x) and swap x and y", "Solve for y to find f⁻¹(x)"]
    }
  }
};