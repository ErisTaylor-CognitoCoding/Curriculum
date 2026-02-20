window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.3 - Surds (simplifying and rationalising)",
  "strapline": "Understanding surds, how to simplify them, and how to rationalise denominators to work accurately with exact values.",
  "learningObjectives": [
    "Students should simplify surd expressions using the rules of square roots (Maths 1.3)",
    "Students should rationalise denominators by eliminating surds from the bottom of fractions (Maths 1.3)",
    "Students should work with exact fractional values rather than decimal approximations to maintain accuracy in algebraic manipulation (Maths 1.3)"
  ],
  "keyFormulas": [
    "Formula 1: √(a × b) = √a × √b (Product Rule for Square Roots)",
    "Formula 2: (√a)² = a (Square of a square root)",
    "Reminder: Rationalising the denominator by multiplying numerator and denominator by a surd to eliminate surds below the line"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='380' height='160' fill='#f9f9f9' stroke='#333' stroke-width='2'/><text x='200' y='50' font-family='Arial' font-size='18' text-anchor='middle' fill='#222'>Simplification of √12</text><text x='50' y='100' font-family='Arial' font-size='16'>√12 = √(4 × 3)</text><text x='50' y='130' font-family='Arial' font-size='16'>= √4 × √3</text><text x='50' y='160' font-family='Arial' font-size='16'>= 2√3</text></svg>",
  "step1": {
    "title": "Concept: Understanding Surds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>surd</strong> is an irrational square root that cannot be simplified to a whole number or exact fraction, like <em>√2</em>, <em>√3</em>, or <em>√5</em>. These numbers continue infinitely without repeating decimals and are kept in root form to maintain exactness in calculations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of surds like an endless decimal that goes on without a repeating pattern, so instead of writing a complicated decimal, we keep it as the root symbol, like a secret code representing a precise value.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Is √9 a surd?",
      "problem": "Decide if <strong>√9</strong> is a surd or not.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate √9.",
          "answer": "3",
          "feedback": "Correct. √9 = 3."
        },
        {
          "id": "q2",
          "prompt": "Is 3 an irrational number (a surd)?",
          "answer": "no",
          "feedback": "Correct. 3 is a rational number, so √9 is not a surd."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Simplifying Surds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Simplifying surds involves expressing the surd in the simplest form by finding the largest square factor inside the root and separating it out. For example, <em>√12</em> can be written as <em>√(4 × 3) = √4 × √3 = 2√3</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify √50",
      "problem": "Simplify <strong>√50</strong> step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the largest perfect square factor of 50.",
          "answer": "25",
          "feedback": "Correct. 25 is the largest perfect square that divides 50."
        },
        {
          "id": "q2",
          "prompt": "Rewrite √50 as √(25 × 2).",
          "answer": "√(25 × 2)",
          "feedback": "Good. √50 = √(25 × 2)."
        },
        {
          "id": "q3",
          "prompt": "Separate the surds: write √25 × √2.",
          "answer": "√25 × √2",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Calculate √25.",
          "answer": "5",
          "feedback": "Correct. √25 = 5."
        },
        {
          "id": "q5",
          "prompt": "Write the simplified form of √50.",
          "answer": "5√2",
          "feedback": "Correct. The simplified form is 5√2."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Rationalising the Denominator",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rationalising the denominator means removing surds from the denominator of a fraction by multiplying numerator and denominator by an appropriate surd. For example, <em>1/√2</em> becomes <em>√2/2</em> when multiplied by <em>√2/√2</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Rationalise 1/√3",
      "problem": "Rationalise the denominator of <strong>1/√3</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What surd should you multiply numerator and denominator by?",
          "answer": "√3",
          "feedback": "Correct. Multiply by √3/√3 to rationalise."
        },
        {
          "id": "q2",
          "prompt": "Multiply numerator: 1 × √3 = ?",
          "answer": "√3",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Multiply denominator: √3 × √3 = ?",
          "answer": "3",
          "feedback": "Correct. √3 × √3 = 3."
        },
        {
          "id": "q4",
          "prompt": "Write the rationalised expression.",
          "answer": "√3/3",
          "feedback": "Correct. Answer is √3/3."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='30' width='360' height='90' fill='#eef6f9' stroke='#1a76d2' stroke-width='2'/><text x='200' y='70' font-family='Arial' font-size='20' text-anchor='middle' fill='#0b3954'>1/√3 × √3/√3 = √3 / 3</text></svg>"
  },
  "step4": {
    "title": "Practice: Simplify Surd Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Apply your skills to simplify surds in various forms by identifying the largest square factors.</p>",
    "workedExample": {
      "title": "Try simplifying √32",
      "problem": "Simplify <strong>√32</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the largest perfect square factor of 32?",
          "answer": "16",
          "feedback": "Correct. 16 is the largest perfect square factor."
        },
        {
          "id": "q2",
          "prompt": "Rewrite √32 as √(16 × 2).",
          "answer": "√(16 × 2)",
          "feedback": "Good."
        },
        {
          "id": "q3",
          "prompt": "Separate it into √16 × √2.",
          "answer": "√16 × √2",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Calculate √16.",
          "answer": "4",
          "feedback": "Correct."
        },
        {
          "id": "q5",
          "prompt": "Write the final simplified surd.",
          "answer": "4√2",
          "feedback": "Well done."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multi-Choice Questions on Surds",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is a surd?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>√4</span>",
            "isCorrect": false,
            "explanation": "√4 = 2, which is rational."
          },
          {
            "id": "b",
            "label": "<span>√10</span>",
            "isCorrect": true,
            "explanation": "Correct. √10 is an irrational surd."
          },
          {
            "id": "c",
            "label": "<span>3</span>",
            "isCorrect": false,
            "explanation": "3 is a rational number, not a surd."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which is the correctly rationalised form of 5/√2?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>5√2/2</span>",
            "isCorrect": true,
            "explanation": "Correct. Multiply numerator and denominator by √2."
          },
          {
            "id": "b",
            "label": "<span>5/2√2</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Surd remains in the denominator."
          },
          {
            "id": "c",
            "label": "<span>5/√4</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Denominator is still a root, and √4 is 2."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Simplify the expression and rationalise the denominator: <em>3 / √8</em>.</span>",
      "hint": "<span>First simplify the surd √8, then multiply numerator and denominator by an appropriate surd to rationalise the denominator.</span>",
      "mustHaveKeywords": ["simplify", "largest square factor", "rationalise denominator", "multiply numerator and denominator", "simplified surd"],
      "optionalKeywords": ["exact value", "no decimal approximation"],
      "modelAnswer": "<span>Start by simplifying √8 as √(4 × 2) = 2√2. So the expression is 3 / (2√2). To rationalise, multiply numerator and denominator by √2: (3 × √2) / (2√2 × √2) = 3√2 / (2 × 2) = 3√2 / 4. Final answer: <strong>3√2⁄4</strong> with no surd in the denominator.</span>",
      "scaffoldPrompts": [
        "What is the largest perfect square factor of 8?",
        "Rewrite √8 in simplest surd form.",
        "What is the denominator after substitution?",
        "Which surd should you multiply numerator and denominator by?",
        "Perform the multiplication and simplify denominator.",
        "Write final answer."
      ]
    }
  }
};