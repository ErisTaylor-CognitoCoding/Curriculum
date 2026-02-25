window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.3 - Surds (simplifying and rationalising)",
  "strapline": "Understanding how to simplify surds and rationalise denominators to maintain exact values in algebraic expressions.",
  "learningObjectives": [
    "Students should simplify surd expressions using the rules of square roots (Maths 1.3)",
    "Students should rationalise denominators by eliminating surds from the bottom of fractions (Maths 1.3)",
    "Students should work with exact fractional values rather than decimal approximations to maintain accuracy in algebraic manipulation (Maths 1.3)"
  ],
  "keyFormulas": [
    "√(a × b) = √a × √b",
    "√(a²) = a",
    "Rationalising: \\frac{1}{\\sqrt{a}} = \\frac{\\sqrt{a}}{a}"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f8f8f8' stroke='#222' stroke-width='2'/><text x='200' y='90' text-anchor='middle' font-family='Arial' font-size='20' fill='#333'>Simplifying Surds</text><text x='120' y='130' font-family='Arial' font-size='16' fill='#555'>√12 = √(4 × 3)</text><text x='120' y='160' font-family='Arial' font-size='16' fill='#555'>= √4 × √3</text><text x='120' y='190' font-family='Arial' font-size='16' fill='#555'>= 2√3</text></svg>",
  "step1": {
    "title": "Concept: What is a Surd?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>surd</strong> is an irrational square root that cannot be simplified to a whole number or exact fraction. Examples include <em>√2</em>, <em>√3</em>, and <em>√5</em>. These values continue infinitely without repeating decimals and are left in root form for exactness rather than as decimals.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a surd like an endless infinite road – it never ends and never repeats the same pattern, so we write it as a symbol rather than trying to list all the decimals.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying a Surd",
      "problem": "Is <strong>√9</strong> a surd?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is √9 simplified?",
          "answer": "3",
          "feedback": "Correct, √9 = 3, which is a rational number, so it is not a surd."
        },
        {
          "id": "q2",
          "prompt": "Is 3 a surd? Answer 'yes' or 'no'.",
          "answer": "no",
          "feedback": "Correct! 3 is rational, so √9 is NOT a surd."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Simplifying Surds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Simplifying surds means writing them in the simplest form by finding the largest square factor and separating it. For example, √12 can be broken down to √(4×3) = √4 × √3 = 2√3.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like breaking a number into smaller, more manageable building blocks to see the simpler parts clearly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Simplify √18",
      "problem": "Simplify the surd √18 step by step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the largest perfect square factor of 18.",
          "answer": "9",
          "feedback": "Correct, 9 is the largest perfect square factor of 18."
        },
        {
          "id": "q2",
          "prompt": "Write √18 as √(9 × ___). Fill the blank.",
          "answer": "2",
          "feedback": "Correct, √18 = √(9 × 2)."
        },
        {
          "id": "q3",
          "prompt": "Separate as √9 × √2. What is √9?",
          "answer": "3",
          "feedback": "Correct! √9 = 3."
        },
        {
          "id": "q4",
          "prompt": "Write the simplified surd form.",
          "answer": "3√2",
          "feedback": "Well done! √18 simplifies to 3√2."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Rationalising the Denominator",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rationalising the denominator means eliminating surds from the bottom of fractions by multiplying numerator and denominator by an appropriate surd. This leaves the denominator rational.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It is like clearing fog to make the bottom of the fraction clear and easier to work with.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rationalise \\( \\frac{1}{\\sqrt{2}} \\)",
      "problem": "Rationalise the denominator of \\( \\frac{1}{\\sqrt{2}} \\).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What should you multiply numerator and denominator by to rationalise?",
          "answer": "√2",
          "feedback": "Correct, multiply both by √2."
        },
        {
          "id": "q2",
          "prompt": "Multiply numerator: 1 × √2 = ?",
          "answer": "√2",
          "feedback": "Right! Numerator is now √2."
        },
        {
          "id": "q3",
          "prompt": "Multiply denominator: √2 × √2 = ?",
          "answer": "2",
          "feedback": "Correct, √2 × √2 = 2."
        },
        {
          "id": "q4",
          "prompt": "Write the rationalised form of the fraction.",
          "answer": "√2/2",
          "feedback": "Great! The rationalised form is √2/2."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of these is a surd?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>√16</span>",
            "isCorrect": false,
            "explanation": "√16 = 4 which is rational, so not a surd."
          },
          {
            "id": "b",
            "label": "<span>√7</span>",
            "isCorrect": true,
            "explanation": "Correct! √7 cannot be simplified to a rational number, so it is a surd."
          },
          {
            "id": "c",
            "label": "<span>3</span>",
            "isCorrect": false,
            "explanation": "3 is rational, not a surd."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> is an irrational square root left in root form to keep exactness.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "surd",
                "label": "Surd",
                "isCorrect": true,
                "feedback": "Correct! A surd is an irrational square root."
              },
              {
                "value": "integer",
                "label": "Integer",
                "isCorrect": false,
                "feedback": "Incorrect, integers are whole numbers."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Simplifying a surd involves finding the largest ______ factor to separate.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "square",
                "label": "Square",
                "isCorrect": true,
                "feedback": "Correct! We find the largest square factor."
              },
              {
                "value": "prime",
                "label": "Prime",
                "isCorrect": false,
                "feedback": "Incorrect, prime factors are not used for this process."
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
      "prompt": "<span>Simplify the surd \\( \\frac{5}{\\sqrt{20}} \\), giving your answer in simplest form with a rationalised denominator.</span>",
      "hint": "Remember to simplify the surd under the root first, then multiply numerator and denominator by the required surd to remove the surd from the denominator.",
      "mustHaveKeywords": ["simplify", "rationalise denominator", "exact values", "√5"],
      "optionalKeywords": ["largest square factor", "multiplying numerator and denominator"],
      "modelAnswer": "<span>First, simplify \\( \\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5} \\). So the fraction is \\( \\frac{5}{2\\sqrt{5}} \\). To rationalise, multiply numerator and denominator by \\( \\sqrt{5} \\): \\( \\frac{5}{2\\sqrt{5}} \\times \\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{5\\sqrt{5}}{2 \\times 5} = \\frac{\\sqrt{5}}{2} \\). This is the simplified form with a rationalised denominator maintained as an exact value.</span>",
      "scaffoldPrompts": [
        "Step 1: Simplify the surd in the denominator.",
        "Step 2: Multiply numerator and denominator to remove the surd from the denominator.",
        "Step 3: Simplify the resulting fraction."
      ]
    }
  }
};