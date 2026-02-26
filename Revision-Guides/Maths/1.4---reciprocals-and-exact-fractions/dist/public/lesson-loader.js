window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.4 - Reciprocals and exact fractions",
  "strapline": "Understanding and simplifying surds, rationalising denominators, and working with exact fractions instead of decimals.",
  "learningObjectives": [
    "Students should be able to simplify surd expressions using the rules of square roots (Maths 1.4)",
    "Students should be able to rationalise denominators by eliminating surds from the bottom of fractions (Maths 1.4)",
    "Students should be able to work with exact fractional values rather than decimal approximations (Maths 1.4)"
  ],
  "keyFormulas": [
    "Formula 1: √(a × b) = √a × √b",
    "Formula 2: Rationalising denominator: multiply numerator and denominator by surd in denominator",
    "Reminder: Do not convert exact surd or fractional answers into decimals"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='160' fill='#fafafa' stroke='#333' rx='10'/><text x='200' y='40' font-family='sans-serif' font-weight='bold' font-size='16' text-anchor='middle'>Simplifying Surds Diagram</text><text x='40' y='80' font-family='sans-serif' font-size='14'>√12 = √(4 × 3)</text><text x='40' y='110' font-family='sans-serif' font-size='14'>= √4 × √3 = 2√3</text><line x1='40' y1='95' x2='140' y2='95' stroke='#555' stroke-dasharray='4'/><circle cx='100' cy='95' r='6' fill='#8b0000'/><circle cx='160' cy='95' r='6' fill='#004080'/><text x='100' y='90' font-family='sans-serif' font-size='10' fill='#fff' text-anchor='middle'>4</text><text x='160' y='90' font-family='sans-serif' font-size='10' fill='#fff' text-anchor='middle'>3</text></svg>",
  "step1": {
    "title": "Concept: What is a Surd?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>surd</strong> is an irrational number expressed as a root, commonly a square root, which cannot be simplified to a whole number or fraction. For example, <em>√2</em>, <em>√3</em>, and <em>√5</em> are surds. However, <em>√4</em> = 2 is not a surd because it simplifies to a whole number.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of surds like puzzle pieces that don’t fit perfectly into simple shapes. While some puzzle pieces (like √4) can form a perfect square, surds like √2 are oddly shaped and cannot be simplified further.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying a Surd",
      "problem": "Is <strong>√8</strong> a surd? Simplify it if possible.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is a perfect square factor of 8?",
          "answer": "4",
          "feedback": "Correct! 4 is a perfect square and a factor of 8."
        },
        {
          "id": "q2",
          "prompt": "Rewrite √8 as √(4 × 2). What does it become?",
          "answer": "2√2",
          "feedback": "Correct! √8 = 2√2, which is simplified with a surd remaining."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Simplifying Surds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To simplify a surd, find the largest perfect square factor of the number under the root, then use <strong>√(a × b) = √a × √b</strong>. Simplify the root of the perfect square, and multiply it by the remaining surd.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify √50",
      "problem": "Simplify the surd expression <strong>√50</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the largest perfect square factor of 50.",
          "answer": "25",
          "feedback": "Correct! 25 is the largest perfect square factor."
        },
        {
          "id": "q2",
          "prompt": "Rewrite √50 as √(25 × 2).",
          "answer": "√25 × √2",
          "feedback": "Correct, √50 = √25 × √2."
        },
        {
          "id": "q3",
          "prompt": "Simplify √25.",
          "answer": "5",
          "feedback": "Yes, √25 = 5."
        },
        {
          "id": "q4",
          "prompt": "Write the final simplified surd expression.",
          "answer": "5√2",
          "feedback": "Well done! √50 simplifies to 5√2."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Rationalising the Denominator",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rationalising the denominator means removing surds from the bottom of a fraction. We do this by multiplying numerator and denominator by the same surd to make the denominator a rational number.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a fraction like a glass with a cloudy bottom — rationalising clears the cloudiness so the bottom is clear.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rationalise the denominator 1/√3",
      "problem": "Rationalise the denominator of <strong>1 / √3</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What should you multiply numerator and denominator by to rationalise?",
          "answer": "√3",
          "feedback": "Correct! Multiply top and bottom by √3."
        },
        {
          "id": "q2",
          "prompt": "Write the new numerator after multiplication.",
          "answer": "√3",
          "feedback": "Yes, 1 × √3 = √3."
        },
        {
          "id": "q3",
          "prompt": "Write the new denominator after multiplication.",
          "answer": "3",
          "feedback": "Correct! √3 × √3 = 3."
        },
        {
          "id": "q4",
          "prompt": "Write the fully rationalised fraction.",
          "answer": "√3/3",
          "feedback": "Good job! The rationalised form is √3/3."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Simplify and Rationalise",
    "workedExample": {
      "title": "Worked Example: Simplify and rationalise 5/√2",
      "problem": "Simplify and rationalise the fraction <strong>5 / √2</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply numerator and denominator by which surd?",
          "answer": "√2",
          "feedback": "Correct! Multiply top and bottom by √2."
        },
        {
          "id": "q2",
          "prompt": "Write the new numerator.",
          "answer": "5√2",
          "feedback": "Yes, 5 × √2 = 5√2."
        },
        {
          "id": "q3",
          "prompt": "Write the new denominator.",
          "answer": "2",
          "feedback": "Correct! √2 × √2 = 2."
        },
        {
          "id": "q4",
          "prompt": "What is the final simplified fraction?",
          "answer": "5√2/2",
          "feedback": "Well done! The rationalised fraction is 5√2/2."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is a surd?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>√25</span>",
            "isCorrect": false,
            "explanation": "<span>√25 = 5 which is a whole number, not a surd.</span>"
          },
          {
            "id": "b",
            "label": "<span>√7</span>",
            "isCorrect": true,
            "explanation": "<span>√7 cannot be simplified to a whole number or fraction, so it is a surd.</span>"
          },
          {
            "id": "c",
            "label": "<span>4</span>",
            "isCorrect": false,
            "explanation": "<span>4 is a whole number, not a surd.</span>"
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What is the rationalised form of 1/√5?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>√5/5</span>",
            "isCorrect": true,
            "explanation": "<span>Multiplying numerator and denominator by √5 gives √5/5.</span>"
          },
          {
            "id": "b",
            "label": "<span>1/5</span>",
            "isCorrect": false,
            "explanation": "<span>1/5 is not rationalised as it removes the surd incorrectly.</span>"
          },
          {
            "id": "c",
            "label": "<span>5/√5</span>",
            "isCorrect": false,
            "explanation": "<span>This is not rationalised because denominator still contains √5.</span>"
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> is an irrational number expressed as a root.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "surd",
                "label": "surd",
                "isCorrect": true,
                "feedback": "Correct! Surd is the term."
              },
              {
                "value": "fraction",
                "label": "fraction",
                "isCorrect": false,
                "feedback": "Incorrect. A fraction is a ratio of two numbers."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Rationalising the denominator means removing the <span class=\"font-semibold\">_____</span> from the bottom of a fraction.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "surd",
                "label": "surd",
                "isCorrect": true,
                "feedback": "Yes! Surds are removed from the denominator."
              },
              {
                "value": "integer",
                "label": "integer",
                "isCorrect": false,
                "feedback": "No. Integers are whole numbers."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Simplify the surd expression <strong>√72</strong> and then rationalise the denominator of the fraction <strong>3 / √8</strong>. Show your working clearly and use exact fractional values rather than decimal approximations.</span>",
      "hint": "<span>Start by finding perfect square factors of the surds. Remember to multiply numerator and denominator by the surd in the denominator to rationalise.</span>",
      "mustHaveKeywords": ["simplify", "perfect square", "rationalise denominator", "exact fraction"],
      "optionalKeywords": ["√2", "√3", "multiply top and bottom"],
      "modelAnswer": "<span>First, simplify √72: find the largest perfect square factor of 72, which is 36.<br>√72 = √(36 × 2) = √36 × √2 = 6√2.<br>Next, rationalise the denominator of 3/√8:<br>√8 can be simplified: √8 = 2√2.<br>Multiply numerator and denominator by √8 (or simplified form 2√2):<br>(3 × 2√2) / (√8 × 2√2) = 6√2 / 8 = (3√2)/4.<br>Thus, the simplified surd is 6√2 and the rationalised fraction is (3√2)/4.</span>",
      "scaffoldPrompts": [
        "<span>Step 1: Identify the largest perfect square factor of 72.</span>",
        "<span>Step 2: Rewrite √72 using this factor.</span>",
        "<span>Step 3: Simplify √8 in the denominator.</span>",
        "<span>Step 4: Multiply numerator and denominator by the appropriate surd.</span>",
        "<span>Step 5: Simplify the resulting fraction to exact form.</span>"
      ]
    }
  }
};