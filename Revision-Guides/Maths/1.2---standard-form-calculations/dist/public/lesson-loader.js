window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.2 - Standard form calculations",
  "strapline": "Learn how to express, multiply, divide and apply standard form in real-world problems involving large and small numbers.",
  "learningObjectives": [
    "Students should be able to multiply and divide numbers in standard form, applying the laws of indices (Maths 1.2)",
    "Students should be able to convert between ordinary numbers and standard form notation (Maths 1.2)",
    "Students should be able to perform calculations with standard form in real-world contexts involving very large and very small numbers (Maths 1.2)"
  ],
  "keyFormulas": [
    "Concept 1: Standard Form - a × 10<sup>n</sup>, where 1 ≤ a &lt; 10 and n is an integer",
    "Concept 2: Laws of Indices for Multiplication - 10<sup>m</sup> × 10<sup>n</sup> = 10<sup>m+n</sup>",
    "Concept 3: Laws of Indices for Division - 10<sup>m</sup> ÷ 10<sup>n</sup> = 10<sup>m-n</sup>"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='50' width='340' height='200' fill='#e8f0fe' stroke='#2a558c' stroke-width='2' rx='15' ry='15'/><text x='200' y='110' font-family='sans-serif' font-size='20' fill='#2a558c' text-anchor='middle'>Example: 3,400,000</text><text x='200' y='150' font-family='sans-serif' font-size='18' fill='#1a1a1a' text-anchor='middle'>= 3.4 × 10<sup>6</sup></text><line x1='170' y1='160' x2='170' y2='200' stroke='#2a558c' stroke-width='2' marker-end='url(#arrow)'/><text x='200' y='230' font-family='sans-serif' font-size='16' fill='#555' text-anchor='middle'>Decimal moved 6 places left</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L0,6 L9,3 z' fill='#2a558c'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: What is Standard Form?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Standard form is a way to write very large or very small numbers using powers of ten to make them easier to read and work with. The number is written as <em>a × 10<sup>n</sup></em>, where <strong>1 ≤ a &lt; 10</strong> and <em>n</em> is an integer.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of standard form like using abbreviations or scientific shorthand to write long numbers quickly, similar to saying \"1k\" for 1000 but using powers of 10 instead.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Converting to Standard Form",
      "problem": "Convert the number <strong>5300</strong> into standard form.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first non-zero digit (value of 'a' before decimal adjustment)",
          "answer": "5",
          "feedback": "Correct. The first significant figure is 5."
        },
        {
          "id": "q2",
          "prompt": "Place the decimal after the first digit. What is 'a'?",
          "answer": "5.3",
          "feedback": "Correct. 5.3 is between 1 and 10."
        },
        {
          "id": "q3",
          "prompt": "How many places did the decimal move? (Value of 'n')",
          "answer": "3",
          "feedback": "Correct. It moved 3 places to the left."
        },
        {
          "id": "q4",
          "prompt": "Write the number in standard form using 'a' and 'n'.",
          "answer": "5.3 × 10^3",
          "feedback": "Excellent! 5300 = 5.3 × 10<sup>3</sup> in standard form."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Laws of Indices for Multiplication",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying numbers in standard form, multiply the 'a' values &amp; add the powers of 10 (indices): <br> <strong>10<sup>m</sup> × 10<sup>n</sup> = 10<sup>m+n</sup></strong></p>",
    "workedExample": {
      "title": "Worked Example: Multiply (2 × 10<sup>3</sup>) and (3 × 10<sup>4</sup>)",
      "problem": "Calculate (2 × 10<sup>3</sup>) × (3 × 10<sup>4</sup>)",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the 'a' values: 2 × 3 = ?",
          "answer": "6",
          "feedback": "Correct. 2 times 3 is 6."
        },
        {
          "id": "q2",
          "prompt": "Add the indices: 3 + 4 = ?",
          "answer": "7",
          "feedback": "Correct. 3 plus 4 equals 7."
        },
        {
          "id": "q3",
          "prompt": "Write the answer in standard form.",
          "answer": "6 × 10^7",
          "feedback": "Well done! The product is 6 × 10<sup>7</sup>."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Laws of Indices for Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing numbers in standard form, divide the 'a' values &amp; subtract the powers of 10 (indices): <br> <strong>10<sup>m</sup> ÷ 10<sup>n</sup> = 10<sup>m-n</sup></strong></p>",
    "workedExample": {
      "title": "Worked Example: Divide (8 × 10<sup>6</sup>) by (2 × 10<sup>2</sup>)",
      "problem": "Calculate (8 × 10<sup>6</sup>) ÷ (2 × 10<sup>2</sup>)",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide the 'a' values: 8 ÷ 2 = ?",
          "answer": "4",
          "feedback": "Correct. 8 divided by 2 equals 4."
        },
        {
          "id": "q2",
          "prompt": "Subtract the indices: 6 - 2 = ?",
          "answer": "4",
          "feedback": "Correct. 6 minus 2 equals 4."
        },
        {
          "id": "q3",
          "prompt": "Write the answer in standard form.",
          "answer": "4 × 10^4",
          "feedback": "Perfect! The quotient is 4 × 10<sup>4</sup>."
        }
      ]
    }
  },
  "step4": {
    "title": "Converting Small Numbers to Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For small numbers less than 1, move the decimal to create a number between 1 and 10, then use a negative power of ten.</p>",
    "workedExample": {
      "title": "Worked Example: Convert 0.00045 to standard form",
      "problem": "Write 0.00045 in standard form.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first non-zero digit.",
          "answer": "4",
          "feedback": "Correct, the first non-zero digit is 4."
        },
        {
          "id": "q2",
          "prompt": "Place the decimal after this digit. What is 'a'?",
          "answer": "4.5",
          "feedback": "Good! 'a' is 4.5."
        },
        {
          "id": "q3",
          "prompt": "How many places did the decimal move to the right? (Value of 'n')",
          "answer": "5",
          "feedback": "Correct, moved 5 places to the right."
        },
        {
          "id": "q4",
          "prompt": "Write the number in standard form.",
          "answer": "4.5 × 10^-5",
          "feedback": "Excellent! 0.00045 = 4.5 × 10<sup>-5</sup>."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying Standard Form in Real-World Contexts",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Standard form helps in handling extremely large or small numbers in fields like astronomy, physics, and engineering.</p>",
    "workedExample": {
      "title": "Worked Example: Distance Between Planets",
      "problem": "The distance from Earth to the Sun is approximately 1.5 × 10<sup>8</sup> km. The distance from the Sun to Jupiter is 7.8 × 10<sup>8</sup> km. Calculate the total distance from Earth to Jupiter via the Sun.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Add the two numbers: (1.5 × 10<sup>8</sup>) + (7.8 × 10<sup>8</sup>). What is the sum?",
          "answer": "9.3 × 10^8",
          "feedback": "Correct! Add the coefficients since powers of 10 are the same: 1.5 + 7.8 = 9.3"
        },
        {
          "id": "q2",
          "prompt": "Express your answer in standard form if not already.",
          "answer": "9.3 × 10^8",
          "feedback": "Great! The sum is already in standard form."
        }
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is the correct standard form for 0.0062?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>6.2 × 10<sup>-3</sup></span>",
            "isCorrect": false,
            "explanation": "Incorrect, 0.0062 = 6.2 × 10<sup>-3</sup> would mean moving decimal 3 places but it should be 4."
          },
          {
            "id": "b",
            "label": "<span>6.2 × 10<sup>-4</sup></span>",
            "isCorrect": true,
            "explanation": "Correct! The decimal moved 4 places to the right."
          },
          {
            "id": "c",
            "label": "<span>0.62 × 10<sup>-2</sup></span>",
            "isCorrect": false,
            "explanation": "Incorrect. 'a' must be between 1 and 10."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the number multiplied by a power of 10 in standard form notation.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "coefficient",
                "label": "coefficient",
                "isCorrect": true,
                "feedback": "Correct! The coefficient is the number a, where 1 ≤ a &lt; 10."
              },
              {
                "value": "exponent",
                "label": "exponent",
                "isCorrect": false,
                "feedback": "Not quite. The exponent is the power of 10, not the number multiplied."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> tells how many times the decimal place has moved in standard form.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "exponent",
                "label": "exponent",
                "isCorrect": true,
                "feedback": "Correct! The exponent (or index) n represents the number of decimal moves."
              },
              {
                "value": "coefficient",
                "label": "coefficient",
                "isCorrect": false,
                "feedback": "Wrong. The coefficient is the number being multiplied, not the decimal movement."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bacterium measures 2.5 × 10<sup>-6</sup> meters. A virus measures 3 × 10<sup>-8</sup> meters. Calculate how many times larger the bacterium is than the virus.</span>",
      "hint": "Divide the bacterium's length by the virus's length using standard form laws.",
      "mustHaveKeywords": ["divide", "subtract indices", "standard form"],
      "optionalKeywords": ["power of ten", "coefficients"],
      "modelAnswer": "<span>To find how many times larger the bacterium is, divide: (2.5 × 10<sup>-6</sup>) ÷ (3 × 10<sup>-8</sup>) = (2.5 ÷ 3) × 10<sup>-6 - (-8)</sup> = 0.8333 × 10<sup>2</sup>. Writing 0.8333 × 10<sup>2</sup> as 8.333 × 10<sup>1</sup> shows the bacterium is approximately 8.3 × 10<sup>1</sup> or 83 times larger than the virus.</span>",
      "scaffoldPrompts": ["First divide the coefficients 2.5 ÷ 3.", "Then subtract the exponents (-6) - (-8).", "Rewrite the answer in correct standard form."]
    }
  }
};