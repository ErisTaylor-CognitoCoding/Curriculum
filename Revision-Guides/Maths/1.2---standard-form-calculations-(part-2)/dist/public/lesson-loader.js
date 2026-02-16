window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.2 - Standard form calculations (Part 2)",
  "strapline": "Learn to multiply, divide and perform multi-step calculations using standard form, applying laws of indices and ensuring correct notation.",
  "learningObjectives": [
    "Students should apply the laws of indices when multiplying and dividing numbers in standard form (Maths 1.2)",
    "Students should adjust the power of 10 to ensure answers remain in correct standard form notation (Maths 1.2)",
    "Students should convert between ordinary numbers and standard form within the context of multi-step calculations (Maths 1.2)"
  ],
  "keyFormulas": [
    "When multiplying: (a × 10^m) × (b × 10^n) = (a × b) × 10^(m+n)",
    "When dividing: (a × 10^m) ÷ (b × 10^n) = (a ÷ b) × 10^(m−n)",
    "Correct standard form: A × 10^n where 1 ≤ A < 10 and n is an integer"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='100' width='360' height='100' fill='#e8f4f8' stroke='#0077b6' stroke-width='2'/><text x='200' y='140' text-anchor='middle' font-family='sans-serif' font-size='18' fill='#023e8a'>Multiplying in Standard Form</text><text x='200' y='170' text-anchor='middle' font-family='sans-serif' font-size='16' fill='#0077b6'>(2 × 10<sup>3</sup>) × (3 × 10<sup>4</sup>) = 6 × 10<sup>7</sup></text></svg>",
  "step1": {
    "title": "Concept: Laws of Indices in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying numbers written in standard form, multiply their decimal parts and add their powers of 10. When dividing, divide their decimal parts and subtract their powers of 10.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the powers of 10 as steps on a ladder: multiplying means climbing up more steps (adding), dividing means climbing down (subtracting).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Multiplying in Standard Form",
      "problem": "Multiply (2 × 10<sup>3</sup>) by (3 × 10<sup>4</sup>).",
      "questions": [
        {
          "id": "q1",
          "prompt": "First, multiply the decimal numbers: 2 × 3 = ?",
          "answer": "6",
          "feedback": "<p>Correct. Multiplying the numbers gives 6.</p>"
        },
        {
          "id": "q2",
          "prompt": "Next, add the powers of 10: 3 + 4 = ?",
          "answer": "7",
          "feedback": "<p>Excellent! Adding the powers of 10 gives 7.</p>"
        },
        {
          "id": "q3",
          "prompt": "Combine both parts. What is the product in standard form before adjustment?",
          "answer": "6 × 10^7",
          "feedback": "<p>Correct. The product is 6 × 10<sup>7</sup>, already in correct standard form.</p>"
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Correct Standard Form Notation",
    "explanation": "<p>A number is correctly written in standard form if the decimal part 'A' is between 1 and less than 10, written as A × 10<sup>n</sup>. If 'A' is not in this range, adjust by shifting the decimal and changing the power accordingly.</p>",
    "workedExample": {
      "title": "Worked Example: Adjusting to Correct Standard Form",
      "problem": "Express 35 × 10<sup>6</sup> in proper standard form.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is 35 between 1 and 10? (Yes/No)",
          "answer": "No",
          "feedback": "<p>Correct, 35 is greater than 10 and needs adjustment.</p>"
        },
        {
          "id": "q2",
          "prompt": "Divide 35 by 10 to adjust decimal: 35 ÷ 10 = ?",
          "answer": "3.5",
          "feedback": "<p>Good job. Dividing by 10 shifts decimal, new 'A' is 3.5.</p>"
        },
        {
          "id": "q3",
          "prompt": "Add 1 to the power of 10 because we divided decimal by 10: 6 + 1 = ?",
          "answer": "7",
          "feedback": "<p>Exactly! Increase power by 1 to keep value equal.</p>"
        },
        {
          "id": "q4",
          "prompt": "Write the number in correct standard form.",
          "answer": "3.5 × 10^7",
          "feedback": "<p>Correct. The number is 3.5 × 10<sup>7</sup>.</p>"
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Dividing in Standard Form",
    "explanation": "<p>To divide numbers in standard form, divide the decimal parts and subtract the powers of 10.</p>",
    "workedExample": {
      "title": "Worked Example: Dividing in Standard Form",
      "problem": "Divide (4.5 × 10<sup>5</sup>) by (1.5 × 10<sup>2</sup>).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide the decimals: 4.5 ÷ 1.5 = ?",
          "answer": "3",
          "feedback": "<p>Correct, 4.5 divided by 1.5 is 3.</p>"
        },
        {
          "id": "q2",
          "prompt": "Subtract the powers of 10: 5 – 2 = ?",
          "answer": "3",
          "feedback": "<p>Good job! The new power is 3.</p>"
        },
        {
          "id": "q3",
          "prompt": "Write the answer before adjustment.",
          "answer": "3 × 10^3",
          "feedback": "<p>Correct. 3 × 10<sup>3</sup> is already proper standard form.</p>"
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Adjusting Standard Form after Division",
    "explanation": "<p>If after dividing the decimal part is not between 1 and 10, adjust the number by shifting the decimal and compensating by changing the power of 10.</p>",
    "workedExample": {
      "title": "Worked Example: Adjust and Simplify",
      "problem": "Divide (6 × 10<sup>7</sup>) by (2 × 10<sup>3</sup>) and express in correct standard form.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide decimals: 6 ÷ 2 = ?",
          "answer": "3",
          "feedback": "<p>Correct. The quotient is 3.</p>"
        },
        {
          "id": "q2",
          "prompt": "Subtract powers of 10: 7 – 3 = ?",
          "answer": "4",
          "feedback": "<p>Good, power is now 4.</p>"
        },
        {
          "id": "q3",
          "prompt": "Is 3 between 1 and 10? (Yes/No)",
          "answer": "Yes",
          "feedback": "<p>Yes, so no adjustment needed.</p>"
        },
        {
          "id": "q4",
          "prompt": "Write the final answer in standard form.",
          "answer": "3 × 10^4",
          "feedback": "<p>Correct.</p>"
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Multi-step Standard Form Calculations",
    "explanation": "<p>Some problems require multiple steps, converting ordinary numbers to standard form, performing multiplication or division, then adjusting the answer to correct standard form.</p>",
    "workedExample": {
      "title": "Worked Example: Multi-step Calculation",
      "problem": "Calculate (5300 × 1.2 × 10<sup>4</sup>) ÷ (4.0 × 10<sup>2</sup>) and give your answer in standard form.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert 5300 into standard form as a × 10^n. What is 'a'?",
          "answer": "5.3",
          "feedback": "<p>Correct.</p>"
        },
        {
          "id": "q2",
          "prompt": "What is 'n' for 5300 in standard form?",
          "answer": "3",
          "feedback": "<p>Correct.</p>"
        },
        {
          "id": "q3",
          "prompt": "Now multiply decimals: 5.3 × 1.2 = ?",
          "answer": "6.36",
          "feedback": "<p>Great.</p>"
        },
        {
          "id": "q4",
          "prompt": "Add powers of 10 for multiplication: 3 + 4 = ?",
          "answer": "7",
          "feedback": "<p>Correct.</p>"
        },
        {
          "id": "q5",
          "prompt": "Divide decimal by 4.0: 6.36 ÷ 4.0 = ? (Round to two decimal places)",
          "answer": "1.59",
          "feedback": "<p>Correct.</p>"
        },
        {
          "id": "q6",
          "prompt": "Subtract powers of 10 for division: 7 – 2 = ?",
          "answer": "5",
          "feedback": "<p>Good job.</p>"
        },
        {
          "id": "q7",
          "prompt": "Is 1.59 between 1 and 10? (Yes/No)",
          "answer": "Yes",
          "feedback": "<p>Yes, the decimal is correctly placed.</p>"
        },
        {
          "id": "q8",
          "prompt": "Write the final answer in correct standard form.",
          "answer": "1.59 × 10^5",
          "feedback": "<p>Excellent. The final answer is 1.59 × 10<sup>5</sup>.</p>"
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A spacecraft travels a distance of 4.8 × 10<sup>7</sup> km in 1.6 × 10<sup>3</sup> hours. Calculate the average speed in km/h, expressing your answer in correct standard form.</span>",
      "hint": "Remember to divide the distance by the time and adjust your answer to proper standard form if needed.",
      "mustHaveKeywords": ["divide decimals", "subtract powers", "correct standard form"],
      "optionalKeywords": ["adjust decimal", "laws of indices"],
      "modelAnswer": "<span>First divide the decimals: 4.8 ÷ 1.6 = 3. Then subtract the powers of 10: 7 – 3 = 4. The speed is 3 × 10<sup>4</sup> km/h, which is in correct standard form.</span>",
      "scaffoldPrompts": ["What operation to find speed? (speed = distance ÷ time)", "Divide the decimal parts", "Subtract the powers of 10", "Check if number is in correct standard form"]
    }
  }
};