window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.2 - Standard form calculations",
  "strapline": "Learn how to convert, multiply, and divide numbers in standard form using the laws of indices, applying these to large or small real-world values.",
  "learningObjectives": [
    "Students should be able to multiply and divide numbers in standard form, applying the laws of indices (Maths 1.2)",
    "Students should be able to convert between ordinary numbers and standard form notation (Maths 1.2)",
    "Students should be able to perform calculations with standard form in real-world contexts involving very large and very small numbers (Maths 1.2)"
  ],
  "keyFormulas": [
    "Formula 1: a × 10<sup>n</sup> (Standard form notation)",
    "Formula 2: 10<sup>m</sup> × 10<sup>n</sup> = 10<sup>m+n</sup> (Laws of indices for multiplication)",
    "Formula 3: 10<sup>m</sup> ÷ 10<sup>n</sup> = 10<sup>m-n</sup> (Laws of indices for division)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='25' y='40' width='350' height='120' rx='10' ry='10' fill='#eaf4fb' stroke='#3178c6' stroke-width='2'/><text x='200' y='75' font-family='Arial' font-size='18' fill='#3178c6' text-anchor='middle'><tspan x='200' dy='1.2em'>Standard Form Representation</tspan></text><text x='200' y='110' font-family='Arial' font-size='14' fill='#08457e' text-anchor='middle'>Number = a × 10<sup>n</sup></text><text x='200' y='140' font-family='Arial' font-size='14' fill='#08457e' text-anchor='middle'>where 1 ≤ a &lt; 10 and n ∈ ℤ</text></svg>",
  "step1": {
    "title": "Concept: Understanding Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Standard form is a concise way to write very large or very small numbers as <em>a × 10<sup>n</sup></em>, where <strong>1 ≤ a &lt; 10</strong> and <strong>n</strong> is an integer indicating how many places the decimal moves.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of standard form like scientific shorthand—just as an abbreviation simplifies words, standard form simplifies long numbers.</p>"
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
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Multiplying Numbers in Standard Form Using Laws of Indices",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying numbers in standard form, multiply the 'a' values and add the exponents of 10 using the law <strong>10<sup>m</sup> × 10<sup>n</sup> = 10<sup>m+n</sup></strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Multiply (3 × 10<sup>4</sup>) × (2 × 10<sup>3</sup>)",
      "problem": "Calculate the product step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the 'a' values: 3 × 2 = ?",
          "answer": "6",
          "feedback": "Correct, 3 × 2 = 6."
        },
        {
          "id": "q2",
          "prompt": "Add the powers of 10: 4 + 3 = ?",
          "answer": "7",
          "feedback": "Correct, 4 + 3 = 7."
        },
        {
          "id": "q3",
          "prompt": "Write the answer in standard form: a × 10<sup>n</sup>",
          "answer": "6 × 10^7",
          "feedback": "Correct! The product is 6 × 10<sup>7</sup>."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 140' xmlns='http://www.w3.org/2000/svg'><text x='20' y='40' font-family='Arial' font-size='16' fill='#222'>Multiply the 'a' values:</text><text x='250' y='40' font-family='Arial' font-size='16' fill='#007acc'>3 × 2 = 6</text><line x1='25' y1='50' x2='375' y2='50' stroke='#007acc' stroke-width='2' stroke-dasharray='5 3'/><text x='20' y='80' font-family='Arial' font-size='16' fill='#222'>Add the indices:</text><text x='250' y='80' font-family='Arial' font-size='16' fill='#007acc'>4 + 3 = 7</text><text x='20' y='115' font-family='Arial' font-size='16' fill='#222'>Final answer:</text><text x='250' y='115' font-family='Arial' font-size='16' fill='#007acc'>6 × 10<sup>7</sup></text></svg>"
  },
  "step3": {
    "title": "Concept: Dividing Numbers in Standard Form Using Laws of Indices",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing numbers in standard form, divide the 'a' values and subtract the exponents of 10 using the law <strong>10<sup>m</sup> ÷ 10<sup>n</sup> = 10<sup>m-n</sup></strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Divide (8 × 10<sup>6</sup>) ÷ (2 × 10<sup>2</sup>)",
      "problem": "Calculate the quotient step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide the 'a' values: 8 ÷ 2 = ?",
          "answer": "4",
          "feedback": "Correct, 8 ÷ 2 = 4."
        },
        {
          "id": "q2",
          "prompt": "Subtract the powers of 10: 6 - 2 = ?",
          "answer": "4",
          "feedback": "Correct, 6 - 2 = 4."
        },
        {
          "id": "q3",
          "prompt": "Write the answer in standard form: a × 10<sup>n</sup>",
          "answer": "4 × 10^4",
          "feedback": "Correct! The quotient is 4 × 10<sup>4</sup>."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 140' xmlns='http://www.w3.org/2000/svg'><text x='20' y='40' font-family='Arial' font-size='16' fill='#222'>Divide the 'a' values:</text><text x='250' y='40' font-family='Arial' font-size='16' fill='#d94f4f'>8 ÷ 2 = 4</text><line x1='25' y1='50' x2='375' y2='50' stroke='#d94f4f' stroke-width='2' stroke-dasharray='5 3'/><text x='20' y='80' font-family='Arial' font-size='16' fill='#222'>Subtract the indices:</text><text x='250' y='80' font-family='Arial' font-size='16' fill='#d94f4f'>6 - 2 = 4</text><text x='20' y='115' font-family='Arial' font-size='16' fill='#222'>Final answer:</text><text x='250' y='115' font-family='Arial' font-size='16' fill='#d94f4f'>4 × 10<sup>4</sup></text></svg>"
  },
  "step4": {
    "title": "Practice: Convert Ordinary Numbers to Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Try converting these ordinary numbers into standard form. Remember, place the decimal after the first non-zero digit and count how many places the decimal moves.</p>",
    "workedExample": {
      "title": "Convert 0.00076 to Standard Form",
      "problem": "Follow steps to write 0.00076 in standard form.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first non-zero digit.",
          "answer": "7",
          "feedback": "Correct, the first non-zero digit is 7."
        },
        {
          "id": "q2",
          "prompt": "Place the decimal after this digit. What is 'a'?",
          "answer": "7.6",
          "feedback": "Good, 7.6 is between 1 and 10."
        },
        {
          "id": "q3",
          "prompt": "How many places did the decimal move? (Negative if right)",
          "answer": "-4",
          "feedback": "Exactly, the decimal moved 4 places to the right."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the product of (4 × 10<sup>5</sup>) and (3 × 10<sup>2</sup>) in standard form?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>7 × 10<sup>7</sup></span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. You must multiply 4 × 3 and add the exponents 5 + 2 = 7.</span>"
          },
          {
            "id": "b",
            "label": "<span>12 × 10<sup>7</sup></span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. This is the raw multiplication but not expressed correctly in standard form where 'a' must be less than 10.</span>"
          },
          {
            "id": "c",
            "label": "<span>1.2 × 10<sup>8</sup></span>",
            "isCorrect": true,
            "explanation": "<span>Correct! 4 × 3 = 12 and 5 + 2 = 7, so 12 × 10<sup>7</sup> = 1.2 × 10<sup>8</sup> after adjusting.</span>"
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which is the correct standard form for 0.000092?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>9.2 × 10<sup>-5</sup></span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Move decimal 5 places to the right, so exponent is -5.</span>"
          },
          {
            "id": "b",
            "label": "<span>0.92 × 10<sup>-4</sup></span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. 'a' must be between 1 and 10, 0.92 is less than 1.</span>"
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A star is 4.5 × 10<sup>16</sup> kilometers away from Earth. A spaceship travels at a speed of 3 × 10<sup>7</sup> kilometers per hour. Calculate how many hours it will take the spaceship to reach the star. Show your working in standard form.</span>",
      "hint": "Remember to divide the total distance by the speed and apply laws of indices correctly.",
      "mustHaveKeywords": ["divide", "laws of indices", "standard form"],
      "optionalKeywords": ["multiplication", "exponents"],
      "modelAnswer": "<span>To find the time, divide distance by speed:<br>Time = (4.5 × 10<sup>16</sup>) ÷ (3 × 10<sup>7</sup>)<br>= (4.5 ÷ 3) × 10<sup>16 - 7</sup><br>= 1.5 × 10<sup>9</sup> hours</span>",
      "scaffoldPrompts": [
        "Identify what the question asks (time = distance ÷ speed)",
        "Divide the numbers with 'a' values",
        "Subtract the powers of 10",
        "Write the final answer in correct standard form"
      ]
    }
  }
};