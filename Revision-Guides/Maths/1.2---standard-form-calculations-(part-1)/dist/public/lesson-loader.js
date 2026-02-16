window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.2 - Standard form calculations (Part 1)",
  "strapline": "Learn how to multiply and divide numbers in standard form using laws of indices and adjust powers of 10 correctly.",
  "learningObjectives": [
    "Students should be able to multiply and divide numbers written in standard form by applying the laws of indices (Maths 1.2)",
    "Students should be able to adjust the power of 10 to ensure answers remain in correct standard form notation (Maths 1.2)",
    "Students should be able to convert between ordinary numbers and standard form within multi-step calculations (Maths 1.2)"
  ],
  "keyFormulas": [
    "Concept 1: Standard Form (Scientific Notation) - a × 10<sup>n</sup> where 1 ≤ a < 10 and n is an integer",
    "Concept 2: Laws of Indices for Multiplication - 10<sup>m</sup> × 10<sup>n</sup> = 10<sup>m+n</sup>",
    "Concept 3: Laws of Indices for Division - 10<sup>m</sup> ÷ 10<sup>n</sup> = 10<sup>m-n</sup>"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f9f9f9' stroke='#333' /><text x='200' y='90' text-anchor='middle' font-family='sans-serif' font-weight='bold'>Standard Form Calculation</text><text x='70' y='140' font-family='sans-serif'>Example: (3.5 × 10<sup>4</sup>) × (2 × 10<sup>3</sup>)</text><text x='70' y='180' font-family='sans-serif'>Step 1: Multiply 3.5 and 2 = 7</text><text x='70' y='210' font-family='sans-serif'>Step 2: Add indices: 4 + 3 = 7</text><text x='70' y='240' font-family='sans-serif'>Answer: 7 × 10<sup>7</sup></text></svg>",
  "step1": {
    "title": "Concept: Understanding Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Standard form is a way to write very large or very small numbers as a product of a number between 1 and 10 and a power of 10. This simplifies calculations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of standard form like using magnifying glasses: the number part (a) adjusts the size, and the 10<sup>n</sup> part tells you how much to zoom in or out.</p>"
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
    "title": "Concept: Multiplying with Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying numbers in standard form, multiply the decimal parts and add the powers of 10 using the law of indices.</p>",
    "workedExample": {
      "title": "Worked Example: Multiplying Standard Form Numbers",
      "problem": "Calculate (2 × 10<sup>3</sup>) × (3 × 10<sup>4</sup>).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the decimal numbers: 2 × 3 = ?",
          "answer": "6",
          "feedback": "Correct. 2 multiplied by 3 equals 6."
        },
        {
          "id": "q2",
          "prompt": "Add the exponents: 3 + 4 = ?",
          "answer": "7",
          "feedback": "Correct. 3 plus 4 equals 7."
        },
        {
          "id": "q3",
          "prompt": "Write the answer in standard form as a × 10<sup>n</sup>.",
          "answer": "6 × 10^7",
          "feedback": "Correct. The answer is 6 × 10⁷."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Dividing with Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing numbers in standard form, divide the decimal parts and subtract the exponents using the law of indices.</p>",
    "workedExample": {
      "title": "Worked Example: Dividing Standard Form Numbers",
      "problem": "Calculate (8 × 10<sup>5</sup>) ÷ (2 × 10<sup>3</sup>).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide the decimal numbers: 8 ÷ 2 = ?",
          "answer": "4",
          "feedback": "Correct. 8 divided by 2 equals 4."
        },
        {
          "id": "q2",
          "prompt": "Subtract the exponents: 5 - 3 = ?",
          "answer": "2",
          "feedback": "Correct. 5 minus 3 equals 2."
        },
        {
          "id": "q3",
          "prompt": "Write the answer in standard form as a × 10<sup>n</sup>.",
          "answer": "4 × 10^2",
          "feedback": "Correct. The answer is 4 × 10²."
        }
      ]
    }
  },
  "step4": {
    "title": "Adjusting the Power of 10 to Keep Proper Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If after multiplication or division the decimal part <em>a</em> is not between 1 and 10, adjust <em>a</em> and change the power accordingly.</p>",
    "workedExample": {
      "title": "Worked Example: Adjusting to Standard Form",
      "problem": "Calculate (7 × 10<sup>4</sup>) × (6 × 10<sup>3</sup>) and adjust if needed.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply decimals: 7 × 6 = ?",
          "answer": "42",
          "feedback": "Correct. 7 multiplied by 6 equals 42."
        },
        {
          "id": "q2",
          "prompt": "Add exponents: 4 + 3 = ?",
          "answer": "7",
          "feedback": "Correct. 4 plus 3 equals 7."
        },
        {
          "id": "q3",
          "prompt": "Is 42 between 1 and 10? (yes or no)",
          "answer": "no",
          "feedback": "Correct. 42 is greater than 10, so adjustment is needed."
        },
        {
          "id": "q4",
          "prompt": "Rewrite 42 as 4.2 × 10<sup>1</sup>. Now update the power: 7 + 1 = ?",
          "answer": "8",
          "feedback": "Correct. Adding 1 to 7 gives 8."
        },
        {
          "id": "q5",
          "prompt": "Write final answer in standard form.",
          "answer": "4.2 × 10^8",
          "feedback": "Correct. The answer in standard form is 4.2 × 10⁸."
        }
      ]
    }
  },
  "step5": {
    "title": "Multi-step Calculation: Convert, Calculate and Convert Back",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You may need to convert ordinary numbers to standard form, perform calculations, then convert back.</p>",
    "workedExample": {
      "title": "Worked Example: Multi-step Calculation",
      "problem": "Calculate (4500 × 3 × 10<sup>2</sup>) ÷ (1.5 × 10<sup>4</sup>)",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 4500 to standard form.",
          "answer": "4.5 × 10^3",
          "feedback": "Correct. 4500 = 4.5 × 10³."
        },
        {
          "id": "q2",
          "prompt": "Multiply the decimals: 4.5 × 3 = ?",
          "answer": "13.5",
          "feedback": "Correct. 4.5 times 3 equals 13.5."
        },
        {
          "id": "q3",
          "prompt": "Add the powers of 10: 3 + 2 = ?",
          "answer": "5",
          "feedback": "Correct. 3 plus 2 equals 5."
        },
        {
          "id": "q4",
          "prompt": "Divide decimals: 13.5 ÷ 1.5 = ?",
          "answer": "9",
          "feedback": "Correct. 13.5 divided by 1.5 is 9."
        },
        {
          "id": "q5",
          "prompt": "Subtract the powers of 10: 5 - 4 = ?",
          "answer": "1",
          "feedback": "Correct. 5 minus 4 equals 1."
        },
        {
          "id": "q6",
          "prompt": "Write answer in standard form.",
          "answer": "9 × 10^1",
          "feedback": "Correct. The answer is 9 × 10¹."
        },
        {
          "id": "q7",
          "prompt": "Convert 9 × 10¹ back to ordinary number.",
          "answer": "90",
          "feedback": "Correct. 9 × 10¹ equals 90."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Calculate (3.2 × 10<sup>5</sup>) ÷ (4 × 10<sup>2</sup>) and write your answer in standard form. Show all your working.</span>",
      "hint": "Remember to divide the decimal parts and subtract the powers of 10. Adjust the result if necessary to keep it in standard form.",
      "mustHaveKeywords": ["divide", "subtract powers", "standard form", "adjust"],
      "optionalKeywords": ["laws of indices", "powers of 10"],
      "modelAnswer": "<span>First, divide 3.2 by 4 to get 0.8. Then subtract the powers: 5 - 2 = 3. Since 0.8 is less than 1, rewrite it as 8 × 10<sup>-1</sup>. Adjusting the power: 3 - 1 = 2. Therefore, the answer is 8 × 10<sup>2</sup>.</span>",
      "scaffoldPrompts": ["Divide the decimal numbers first", "Subtract the exponents next", "Check if your decimal is between 1 and 10", "Adjust the decimal and power if needed"]
    }
  }
};