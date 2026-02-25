window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.2 - Standard form calculations",
  "strapline": "Learn to work with very large and very small numbers using standard form and apply laws of indices for calculations.",
  "learningObjectives": [
    "Students should be able to multiply and divide numbers in standard form, applying the laws of indices (Maths 1.2)",
    "Students should be able to convert between ordinary numbers and standard form notation (Maths 1.2)",
    "Students should be able to perform calculations with standard form in real-world contexts involving very large and very small numbers (Maths 1.2)"
  ],
  "keyFormulas": [
    "Standard Form: a × 10<sup>n</sup> where 1 ≤ a < 10 and n is an integer",
    "Laws of Indices for Multiplication: 10<sup>m</sup> × 10<sup>n</sup> = 10<sup>m+n</sup>",
    "Laws of Indices for Division: 10<sup>m</sup> ÷ 10<sup>n</sup> = 10<sup>m-n</sup>"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='110' fill='#f9fafb' stroke='#333' stroke-width='2' rx='10' ry='10'/><text x='200' y='50' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#222'>Example: Writing 3,400,000 in Standard Form</text><text x='60' y='90' font-family='sans-serif' font-size='20' fill='#555'>3,400,000</text><text x='220' y='90' font-family='sans-serif' font-size='20' fill='#007acc'>= 3.4 × 10<sup>6</sup></text></svg>",
  "step1": {
    "title": "Concept: Understanding Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Standard form is a way to write very large or very small numbers as a number between 1 and 10 multiplied by a power of 10. For example, <strong>3,400,000</strong> is <strong>3.4 × 10<sup>6</sup></strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of standard form like scientific shorthand: instead of writing many zeros, you show how many times you multiply by 10.</p>"
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
    "title": "Concept: Laws of Indices for Multiplying in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying powers of 10, add the indices: 10<sup>m</sup> × 10<sup>n</sup> = 10<sup>m+n</sup>. We apply this to multiply numbers in standard form efficiently.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like stacking blocks: stacking 3 blocks and 4 blocks makes 7 blocks (3 + 4 = 7).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Multiply (3 × 10<sup>4</sup>) × (2 × 10<sup>3</sup>)",
      "problem": "Calculate (3 × 10<sup>4</sup>) × (2 × 10<sup>3</sup>).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the decimal parts: 3 × 2 = ?",
          "answer": "6",
          "feedback": "Correct. 3 multiplied by 2 equals 6."
        },
        {
          "id": "q2",
          "prompt": "Add the indices: 4 + 3 = ?",
          "answer": "7",
          "feedback": "Correct. Adding the powers of 10 indices gives 7."
        },
        {
          "id": "q3",
          "prompt": "Write the answer in standard form: 6 × 10<sup>?</sup>",
          "answer": "7",
          "feedback": "Correct! The answer is 6 × 10<sup>7</sup>."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Laws of Indices for Dividing in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing powers of 10, subtract the indices: 10<sup>m</sup> ÷ 10<sup>n</sup> = 10<sup>m-n</sup>. This helps dividing numbers in standard form.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like removing blocks from a stack: if you have 6 blocks and remove 2, you are left with 4 blocks (6 - 2 = 4).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Divide (8 × 10<sup>6</sup>) ÷ (4 × 10<sup>2</sup>)",
      "problem": "Calculate (8 × 10<sup>6</sup>) ÷ (4 × 10<sup>2</sup>).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide the decimal parts: 8 ÷ 4 = ?",
          "answer": "2",
          "feedback": "Correct. 8 divided by 4 equals 2."
        },
        {
          "id": "q2",
          "prompt": "Subtract the indices: 6 - 2 = ?",
          "answer": "4",
          "feedback": "Correct. Subtracting the powers of 10 indices gives 4."
        },
        {
          "id": "q3",
          "prompt": "Write the answer in standard form: 2 × 10<sup>?</sup>",
          "answer": "4",
          "feedback": "Correct! The answer is 2 × 10<sup>4</sup>."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Converting Small Numbers to Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Standard form is also used for very small numbers. For example, 0.00045 = 4.5 × 10<sup>-4</sup>. The negative power tells you the decimal moves to the right.</p>",
    "workedExample": {
      "title": "Worked Example: Convert 0.0072 to Standard Form",
      "problem": "Convert 0.0072 into standard form.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first non-zero digit (value of 'a')",
          "answer": "7",
          "feedback": "Correct. The first non-zero digit is 7."
        },
        {
          "id": "q2",
          "prompt": "Place the decimal after the first digit. What is 'a'?",
          "answer": "7.2",
          "feedback": "Correct. 7.2 is between 1 and 10."
        },
        {
          "id": "q3",
          "prompt": "How many places did the decimal move? (Value of 'n', negative for moving right)",
          "answer": "-3",
          "feedback": "Correct. The decimal moved 3 places to the right."
        }
      ]
    }
  },
  "step5": {
    "title": "Real-World Context: Calculations with Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Standard form helps us manage very large or small numbers in science, such as distances in space or sizes of atoms.</p>",
    "workedExample": {
      "title": "Worked Example: Distance Calculation",
      "problem": "The distance from Earth to the Sun is approximately 1.5 × 10<sup>8</sup> km. The distance from the Earth to Mars is approximately 2.2 × 10<sup>8</sup> km. Estimate how many times further Mars is than the Sun from Earth by dividing these distances.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide the decimal parts: 2.2 ÷ 1.5 = ? (Round to 1 decimal place)",
          "answer": "1.5",
          "feedback": "Correct. 2.2 divided by 1.5 equals approximately 1.5."
        },
        {
          "id": "q2",
          "prompt": "Subtract the indices: 8 - 8 = ?",
          "answer": "0",
          "feedback": "Correct. The powers of 10 cancel out."
        },
        {
          "id": "q3",
          "prompt": "Write the answer in standard form: 1.5 × 10<sup>?</sup>",
          "answer": "0",
          "feedback": "Correct! The answer is 1.5 × 10<sup>0</sup> which equals 1.5."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>The mass of a new exoplanet is estimated to be 4.5 × 10<sup>24</sup> kg, and the mass of a small asteroid is 3 × 10<sup>15</sup> kg. Calculate how many times more massive the exoplanet is compared to the asteroid, showing all your working in standard form. Explain your steps.</span>",
      "hint": "Remember to divide the numbers and subtract the indices. Check your final answer is in standard form.",
      "mustHaveKeywords": ["divide", "subtract indices", "standard form"],
      "optionalKeywords": ["power of ten", "decimal adjustment"],
      "modelAnswer": "<span>To find how many times more massive the exoplanet is, divide their masses: (4.5 ÷ 3) × 10<sup>24 - 15</sup> = 1.5 × 10<sup>9</sup>. I divided the decimal parts and subtracted the indices. The answer is in correct standard form.</span>",
      "scaffoldPrompts": ["Divide the decimal parts: 4.5 ÷ 3", "Subtract the indices: 24 - 15", "Combine your results in standard form"]
    }
  }
};