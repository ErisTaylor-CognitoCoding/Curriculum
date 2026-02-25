window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.1 - Expanding products of multiple linear expressions",
  "strapline": "Learn to expand products of two or more linear expressions using the distributive law to form quadratic and higher-order polynomials.",
  "learningObjectives": [
    "Students should be able to expand brackets involving multiple linear expressions, such as (x + 2)(x + 3), applying the distributive law systematically (Maths 2.1)",
    "Students should be able to expand triple brackets like (x + 1)(x - 2)(x + 4) to generate higher-order polynomial expressions (Maths 2.1)",
    ""
  ],
  "keyFormulas": [
    "Distributive Law: a(b + c) = ab + ac",
    "Expansion of two binomials: (x + a)(x + b) = x² + (a + b)x + ab",
    "Notation for quadratic: ax² + bx + c"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='210' fill='#e8f0fe' stroke='#1a73e8' stroke-width='2'/><text x='200' y='45' font-family='Arial' font-size='16' font-weight='bold' text-anchor='middle' fill='#1a73e8'>Multiplying (x + 2)(x + 3)</text><rect x='60' y='70' width='100' height='100' fill='#ffffff' stroke='#1a73e8'/><text x='110' y='110' font-family='Arial' font-size='18' text-anchor='middle' fill='#1a73e8'>x</text><text x='110' y='140' font-family='Arial' font-size='18' text-anchor='middle' fill='#1a73e8'>2</text><rect x='220' y='70' width='100' height='100' fill='#ffffff' stroke='#1a73e8'/><text x='270' y='110' font-family='Arial' font-size='18' text-anchor='middle' fill='#1a73e8'>x</text><text x='270' y='140' font-family='Arial' font-size='18' text-anchor='middle' fill='#1a73e8'>3</text><line x1='60' y1='70' x2='320' y2='170' stroke='#1a73e8' stroke-width='2' stroke-dasharray='5,5'/><text x='200' y='200' font-family='Arial' font-size='14' text-anchor='middle' fill='#1a73e8'>Distribute every term in one bracket across the other</text></svg>",
  "step1": {
    "title": "Concept: Understanding Linear Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>linear expression</strong> is an algebraic expression where the highest power of the variable is 1, for example, <em>(x + 3)</em> or <em>(2x - 5)</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a linear expression as a simple recipe with just one main ingredient (the variable) raised to the first power.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Linear Expressions",
      "problem": "Is <strong>(3x + 7)</strong> a linear expression?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the highest power of x in (3x + 7)?",
          "answer": "1",
          "feedback": "Correct. The power of x is 1, so this is a linear expression."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Applying the Distributive Law to Two Brackets",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To multiply two linear expressions, we apply the <strong>distributive law</strong>: multiply each term in the first bracket by each term in the second bracket.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like giving each friend (term in the first bracket) a gift to pass to each other friend (term in the second bracket).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Expand (x + 2)(x + 3)",
      "problem": "Expand the product step-by-step by multiplying each term.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply x by x:",
          "answer": "x^2",
          "feedback": "Right! x × x = x²."
        },
        {
          "id": "q2",
          "prompt": "Multiply x by 3:",
          "answer": "3x",
          "feedback": "Good! x × 3 = 3x."
        },
        {
          "id": "q3",
          "prompt": "Multiply 2 by x:",
          "answer": "2x",
          "feedback": "Correct! 2 × x = 2x."
        },
        {
          "id": "q4",
          "prompt": "Multiply 2 by 3:",
          "answer": "6",
          "feedback": "Yes! 2 × 3 = 6."
        },
        {
          "id": "q5",
          "prompt": "Now, combine all terms carefully:",
          "answer": "x^2 + 3x + 2x + 6",
          "feedback": "Well done! Write all terms together."
        },
        {
          "id": "q6",
          "prompt": "Simplify 3x + 2x:",
          "answer": "5x",
          "feedback": "Correct. Adding like terms 3x + 2x = 5x."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Resulting Quadratic Expression",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">After expansion, the product of two linear expressions becomes a <strong>quadratic expression</strong> because it includes an <em>x<sup>2</sup></em> term.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like growing from a simple recipe with one ingredient to a more complex dish with a new ingredient added.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Quadratic Form",
      "problem": "What is the simplified form of (x + 2)(x + 3)?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the final simplified expression:",
          "answer": "x^2 + 5x + 6",
          "feedback": "Correct! This is a quadratic expression."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Expanding Triple Brackets",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To expand triple brackets such as <em>(x + 1)(x - 2)(x + 4)</em>, start by expanding two brackets first, then multiply the result by the third bracket.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like building a tower block by block, first combine two, then add the third.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Expand (x + 1)(x - 2)(x + 4)",
      "problem": "Step 1: Expand (x + 1)(x - 2).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply x by x:",
          "answer": "x^2",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Multiply x by -2:",
          "answer": "-2x",
          "feedback": "Good."
        },
        {
          "id": "q3",
          "prompt": "Multiply 1 by x:",
          "answer": "x",
          "feedback": "Yes."
        },
        {
          "id": "q4",
          "prompt": "Multiply 1 by -2:",
          "answer": "-2",
          "feedback": "Correct."
        },
        {
          "id": "q5",
          "prompt": "Combine like terms: -2x + x",
          "answer": "-x",
          "feedback": "Well done."
        },
        {
          "id": "q6",
          "prompt": "Write your simplified expression for Step 1:",
          "answer": "x^2 - x - 2",
          "feedback": "Correct."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Multiply the Result with the Third Bracket",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Next, multiply the quadratic expression from step 1 by the third bracket <em>(x + 4)</em> using the distributive law again.</p>",
    "workedExample": {
      "title": "Worked Example: Multiply (x^2 - x - 2)(x + 4)",
      "problem": "Distribute each term of the quadratic across both terms in (x + 4).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply x² by x:",
          "answer": "x^3",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Multiply x² by 4:",
          "answer": "4x^2",
          "feedback": "Good."
        },
        {
          "id": "q3",
          "prompt": "Multiply -x by x:",
          "answer": "-x^2",
          "feedback": "Yes."
        },
        {
          "id": "q4",
          "prompt": "Multiply -x by 4:",
          "answer": "-4x",
          "feedback": "Correct."
        },
        {
          "id": "q5",
          "prompt": "Multiply -2 by x:",
          "answer": "-2x",
          "feedback": "Good."
        },
        {
          "id": "q6",
          "prompt": "Multiply -2 by 4:",
          "answer": "-8",
          "feedback": "Correct."
        },
        {
          "id": "q7",
          "prompt": "Write out all terms together:",
          "answer": "x^3 + 4x^2 - x^2 - 4x - 2x - 8",
          "feedback": "Well done."
        },
        {
          "id": "q8",
          "prompt": "Combine the like terms (4x² - x²) and (-4x - 2x):",
          "answer": "3x^2 - 6x",
          "feedback": "Correct."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Expand fully and simplify the expression <strong>(x + 3)(x - 1)(x + 5)</strong>.</span>",
      "hint": "Remember to expand two brackets first, simplify, then multiply the result by the third bracket carefully applying the distributive law.",
      "mustHaveKeywords": ["distributive law", "combine like terms", "expand", "simplify"],
      "optionalKeywords": ["higher-order polynomial", "quadratic", "linear expressions"],
      "modelAnswer": "<span>First, expand (x + 3)(x - 1) = x<sup>2</sup> - x + 3x - 3 = x<sup>2</sup> + 2x - 3.<br/>Then multiply this result by (x + 5): (x<sup>2</sup> + 2x - 3)(x + 5) = x<sup>3</sup> + 5x<sup>2</sup> + 2x<sup>2</sup> + 10x - 3x - 15.<br/>Combine like terms: x<sup>3</sup> + (5x<sup>2</sup> + 2x<sup>2</sup>) + (10x - 3x) - 15 = x<sup>3</sup> + 7x<sup>2</sup> + 7x - 15.<br/>This is the fully expanded and simplified form.</span>",
      "scaffoldPrompts": ["Expand the first two brackets", "Simplify the expression", "Multiply the result by the third bracket", "Combine like terms to simplify"]
    }
  }
};