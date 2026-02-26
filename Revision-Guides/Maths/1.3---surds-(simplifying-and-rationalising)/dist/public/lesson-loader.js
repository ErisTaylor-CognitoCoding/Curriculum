window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.3 - Surds (simplifying and rationalising)",
  "strapline": "Learn how to simplify surds and rationalise denominators to work accurately with irrational numbers.",
  "learningObjectives": [
    "Students should simplify surd expressions using the rules of square roots (Maths 1.3)",
    "Students should rationalise denominators by eliminating surds from the bottom of fractions (Maths 1.3)",
    "Students should work with exact fractional values rather than decimal approximations to maintain accuracy in algebraic manipulation (Maths 1.3)"
  ],
  "keyFormulas": [
    "√(a×b) = √a × √b",
    "Rationalising a denominator: multiply numerator and denominator by the surd to eliminate root from denominator",
    "Exact form preferred over decimal approximations for surds"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='40' y='40' width='320' height='220' fill='#f8f9fa' stroke='#222' stroke-width='2' rx='10' ry='10'/>  <text x='200' y='80' font-family='Arial' font-size='18' font-weight='bold' text-anchor='middle'>Example: Simplifying √12</text>  <text x='60' y='130' font-family='Arial' font-size='16' fill='#111'>Step 1: Identify largest square factor:</text>  <text x='100' y='160' font-family='Arial' font-size='16' fill='#004085'>12 = 4 × 3</text>  <text x='60' y='190' font-family='Arial' font-size='16' fill='#111'>Step 2: Use root product rule:</text>  <text x='100' y='220' font-family='Arial' font-size='16' fill='#004085'>√12 = √4 × √3 = 2√3</text></svg>",
  "step1": {
    "title": "Concept: Understanding Surds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>surd</strong> is an irrational square root that cannot be simplified to a whole number or exact fraction. Examples include <em>√2</em>, <em>√3</em>, and <em>√5</em>. These numbers have non-repeating, infinite decimals and are kept in root form to maintain exactness.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of surds like an endless playlist of songs that never repeats; you can't simplify or write them exactly as a simple fraction, so you keep them 'in root form' just like you would refer to the playlist by its name rather than every song.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify if a number is a surd",
      "problem": "Is <strong>√9</strong> a surd?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of √9?",
          "answer": "3",
          "feedback": "Correct. √9 = 3, which is a whole number."
        },
        {
          "id": "q2",
          "prompt": "Based on this, is √9 a surd?",
          "answer": "No",
          "feedback": "Correct. Since it simplifies to a whole number, √9 is not a surd."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Simplifying Surds",
    "explanation": "<p>To simplify surds, find the largest perfect square factor inside the root and separate it out using the rule <em>√(a×b) = √a × √b</em>. For example, <em>√12 = √(4×3) = 2√3</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p>Imagine breaking a large bundle of sticks into smaller groups, where one group is a perfect square number of sticks that you can count easily.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Simplify √50",
      "problem": "Simplify <strong>√50</strong> step-by-step.",
      "questions": [
        {
          "id": "q3",
          "prompt": "Find the largest perfect square factor of 50.",
          "answer": "25",
          "feedback": "Correct! 25 is the largest perfect square factor of 50."
        },
        {
          "id": "q4",
          "prompt": "Express √50 as √(factor × remaining number).",
          "answer": "√(25 × 2)",
          "feedback": "Good. √50 = √(25 × 2)."
        },
        {
          "id": "q5",
          "prompt": "Simplify √25 × √2.",
          "answer": "5√2",
          "feedback": "Correct, √25 = 5, so final answer is 5√2."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Rationalising Denominators",
    "explanation": "<p>When a fraction has a surd in the denominator, rationalise it by multiplying numerator and denominator by the same surd. This eliminates the surd from the denominator. For example, <em>1/√2</em> becomes <em>√2/2</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p>It's like cleaning a dirty window (denominator) by wiping it with a cloth that has the same dirt, so you remove the dirt and can see through clearly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rationalise 1/√3",
      "problem": "Rationalise the fraction <strong>1/√3</strong>.",
      "questions": [
        {
          "id": "q6",
          "prompt": "What surd should you multiply numerator and denominator by?",
          "answer": "√3",
          "feedback": "Correct. Multiply by √3/√3."
        },
        {
          "id": "q7",
          "prompt": "Multiply numerator: 1 × √3 = ?",
          "answer": "√3",
          "feedback": "Right, numerator becomes √3."
        },
        {
          "id": "q8",
          "prompt": "Multiply denominator: √3 × √3 = ?",
          "answer": "3",
          "feedback": "Yes, since √3 × √3 = 3."
        },
        {
          "id": "q9",
          "prompt": "Write the new fraction after rationalising the denominator.",
          "answer": "√3/3",
          "feedback": "Perfect, the fraction is √3/3 now."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ on Simplifying Surds",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is the simplest form of <em>√18</em>?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>3√2</span>",
            "isCorrect": true,
            "explanation": "Correct! √18 = √(9×2) = 3√2."
          },
          {
            "id": "b",
            "label": "<span>6√3</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 6√3 is not the simplified form of √18."
          },
          {
            "id": "c",
            "label": "<span>9√2</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 9√2 is too large and not simplified."
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
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> is an irrational root that cannot be simplified to a fraction or whole number.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "surd",
                "label": "surd",
                "isCorrect": true,
                "feedback": "Correct! Surd is the right term."
              },
              {
                "value": "integer",
                "label": "integer",
                "isCorrect": false,
                "feedback": "Try again. Integers are whole numbers."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Simplifying surds uses the rule <strong>√(a × b) = _____</strong>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "√a × √b",
                "label": "√a × √b",
                "isCorrect": true,
                "feedback": "Correct! This is the product rule of roots."
              },
              {
                "value": "√a + √b",
                "label": "√a + √b",
                "isCorrect": false,
                "feedback": "Incorrect. Roots do not add this way."
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
      "prompt": "<span>Simplify the surd expression and rationalise the denominator for <em>5 / √8</em>. Show each step carefully.</span>",
      "hint": "First, simplify √8, then rationalise by multiplying numerator and denominator by a suitable surd.",
      "mustHaveKeywords": ["simplify", "largest square factor", "rationalise denominator", "multiply by surd"],
      "optionalKeywords": ["exact value", "fractional form"],
      "modelAnswer": "<span>Step 1: Simplify √8 as √(4×2) = 2√2.<br>Step 2: Rewrite expression as 5 / (2√2).<br>Step 3: To rationalise denominator, multiply numerator and denominator by √2.<br>Step 4: (5 × √2) / (2√2 × √2) = 5√2 / (2 × 2) = 5√2 / 4.<br>Answer: <strong>5√2 / 4</strong>.</span>",
      "scaffoldPrompts": [
        "Find the largest square factor of 8.",
        "Simplify the denominator using that factor.",
        "What surd will remove the surd in the denominator when multiplied?",
        "Multiply numerator and denominator by that surd.",
        "Simplify numerator and denominator separately."
      ]
    }
  }
};