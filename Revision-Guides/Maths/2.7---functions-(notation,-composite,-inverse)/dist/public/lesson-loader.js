window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.7 - Functions (notation, composite, inverse)",
  "strapline": "Learn how to use function notation, combine functions, and find inverses by reversing operations.",
  "learningObjectives": [
    "Students should understand and use function notation including f(x) (Maths 2.7)",
    "Students should find and work with composite functions by combining two or more functions (Maths 2.7)",
    "Students should determine inverse functions by reversing the operations of a given function (Maths 2.7)"
  ],
  "keyFormulas": [
    "Function notation: f(x) = expression",
    "Composite function: (f ∘ g)(x) = f(g(x))",
    "Inverse function: f⁻¹(x), where f(f⁻¹(x)) = x"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='80' width='100' height='40' fill='#d9e8fb' stroke='#333' /><text x='70' y='105' font-family='sans-serif' font-size='14' text-anchor='middle'>Input x</text><line x1='120' y1='100' x2='170' y2='100' stroke='#333' marker-end='url(#arrow)' /><rect x='170' y='70' width='80' height='60' fill='#fbe7d9' stroke='#333' /><text x='210' y='100' font-family='sans-serif' font-size='14' text-anchor='middle'>Function f</text><line x1='250' y1='100' x2='300' y2='100' stroke='#333' marker-end='url(#arrow)' /><rect x='300' y='80' width='80' height='40' fill='#d9f7db' stroke='#333' /><text x='340' y='105' font-family='sans-serif' font-size='14' text-anchor='middle'>Output f(x)</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L10,5 L0,10 L2,5 z' fill='#333'/></marker></defs></svg>",
  "step1": {
    "title": "Concept 1: Understanding Function Notation f(x)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A function is a rule that assigns exactly one output to each input. The notation <strong>f(x)</strong> means the function <em>f</em> applied to the input <em>x</em>. For example, if <em>f(x) = 2x + 3</em>, then to find <em>f(5)</em> you replace <em>x</em> with 5 and calculate: <em>2(5) + 3 = 13</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a function as a machine where you input a number (x), the machine applies a rule to it, and then it outputs a new number (<em>f(x)</em>).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate f(4) if f(x) = 3x - 1",
      "problem": "Find f(4).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Replace x with 4 in the expression 3x - 1.",
          "answer": "3(4) - 1",
          "feedback": "Correct! Substituting x with 4 gives 3(4) - 1."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Calculate 3 times 4.",
          "answer": "12",
          "feedback": "Good! 3 × 4 = 12."
        },
        {
          "id": "q3",
          "prompt": "Step 3: Subtract 1 from 12 to get the final answer.",
          "answer": "11",
          "feedback": "Well done! 12 - 1 = 11, so f(4) = 11."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Composite Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Composite functions apply one function to the result of another. Written as <em>(f ∘ g)(x)</em> or <em>f(g(x))</em>, this means you first apply <em>g(x)</em>, then apply <em>f</em> to that result. For example, if <em>f(x) = x + 2</em> and <em>g(x) = 3x</em>, then <em>(f ∘ g)(x) = f(g(x)) = f(3x) = 3x + 2</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of composite functions as two machines in a row: the first machine <em>g</em> changes the input, and the next machine <em>f</em> processes that changed output.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find (f ∘ g)(2) for f(x) = 2x - 1 and g(x) = x²",
      "problem": "Calculate (f ∘ g)(2).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Calculate g(2) = 2².",
          "answer": "4",
          "feedback": "Correct, 2 squared is 4."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Substitute g(2) = 4 into f(x), so find f(4) = 2(4) - 1.",
          "answer": "2(4) - 1",
          "feedback": "Well done! Replacing x by 4 in f(x)."
        },
        {
          "id": "q3",
          "prompt": "Step 3: Calculate 2 × 4 - 1.",
          "answer": "7",
          "feedback": "Excellent! 2 × 4 - 1 = 7, so (f ∘ g)(2) = 7."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Inverse Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An inverse function <em>f⁻¹(x)</em> reverses the effect of the original function <em>f(x)</em>. If <em>f(a) = b</em>, then <em>f⁻¹(b) = a</em>. To find the inverse, replace <em>f(x)</em> by <em>y</em>, swap <em>x</em> and <em>y</em>, then solve for <em>y</em>. This means that applying a function and then its inverse returns you to the original input: <em>f(f⁻¹(x)) = x</em> and <em>f⁻¹(f(x)) = x</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a function like locking a door and its inverse like unlocking it — they cancel each other out.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the inverse of f(x) = 3x + 4",
      "problem": "Calculate f⁻¹(x).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Write y = 3x + 4.",
          "answer": "y = 3x + 4",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Swap x and y: x = 3y + 4.",
          "answer": "x = 3y + 4",
          "feedback": "Good job."
        },
        {
          "id": "q3",
          "prompt": "Step 3: Solve for y: first subtract 4 from both sides.",
          "answer": "x - 4 = 3y",
          "feedback": "That's right."
        },
        {
          "id": "q4",
          "prompt": "Step 4: Divide both sides by 3 to isolate y.",
          "answer": "y = (x - 4)/3",
          "feedback": "Excellent! This is f⁻¹(x)."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is f(3) if f(x) = x² - 1?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>8</span>",
            "isCorrect": true,
            "explanation": "Correct, 3 squared is 9, minus 1 is 8."
          },
          {
            "id": "b",
            "label": "<span>10</span>",
            "isCorrect": false,
            "explanation": "Incorrect, 3 squared minus 1 is 8, not 10."
          },
          {
            "id": "c",
            "label": "<span>7</span>",
            "isCorrect": false,
            "explanation": "Incorrect, 3 squared minus 1 is 8."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Given f(x) = 2x + 1 and g(x) = x - 3, what is (g ∘ f)(2)?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>2</span>",
            "isCorrect": false,
            "explanation": "First apply f(2) = 5, then g(5) = 2."
          },
          {
            "id": "b",
            "label": "<span>6</span>",
            "isCorrect": true,
            "explanation": "Correct! f(2) = 5, g(5) = 5 - 3 = 2, so (g ∘ f)(2) = 2."
          },
          {
            "id": "c",
            "label": "<span>10</span>",
            "isCorrect": false,
            "explanation": "No, check the steps again."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The notation <span class=\"font-semibold\">_____</span> means 'the function applied to the input'</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "f(x)",
                "label": "f(x)",
                "isCorrect": true,
                "feedback": "Correct! f(x) represents a function applied to x."
              },
              {
                "value": "x",
                "label": "x",
                "isCorrect": false,
                "feedback": "Try again. This represents the input, not the function applied."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> function combines two functions by applying one after the other.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "composite",
                "label": "composite",
                "isCorrect": true,
                "feedback": "Correct! Composite functions apply one function after another."
              },
              {
                "value": "inverse",
                "label": "inverse",
                "isCorrect": false,
                "feedback": "Incorrect. Inverse functions undo the original function."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span>An <span class=\"font-semibold\">_____</span> function reverses the effect of the original function.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "inverse",
                "label": "inverse",
                "isCorrect": true,
                "feedback": "Correct! Inverse functions undo the effect of the original function."
              },
              {
                "value": "composite",
                "label": "composite",
                "isCorrect": false,
                "feedback": "Incorrect. Composite functions combine functions rather than reverse them."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to find the inverse of the function f(x) = 5x - 7 and verify that it is the correct inverse.</span>",
      "hint": "Remember to swap x and y, then solve for y; use composition to verify.",
      "mustHaveKeywords": ["swap x and y", "solve for y", "compose functions", "identity function"],
      "optionalKeywords": ["substitute", "check both f(f⁻¹(x)) and f⁻¹(f(x))"],
      "modelAnswer": "<span>To find the inverse of f(x) = 5x - 7, start by writing y = 5x - 7. Then swap x and y to get x = 5y - 7. Solve for y: add 7 to both sides, x + 7 = 5y, then divide by 5, y = (x + 7)/5. Therefore, the inverse function is f⁻¹(x) = (x + 7)/5. To verify, compose f(f⁻¹(x)) = 5 * ((x + 7)/5) - 7 = x + 7 - 7 = x, and f⁻¹(f(x)) = ((5x - 7) + 7)/5 = 5x / 5 = x, confirming it is the correct inverse.</span>",
      "scaffoldPrompts": [
        "Write y = 5x - 7.",
        "Swap the roles of x and y.",
        "Isolate y on one side.",
        "Write down the inverse function.",
        "Check by composing f and f⁻¹ to see if you get x."
      ]
    }
  }
};