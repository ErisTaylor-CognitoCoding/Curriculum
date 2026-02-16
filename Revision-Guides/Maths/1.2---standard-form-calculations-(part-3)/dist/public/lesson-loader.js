window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.2 - Standard form calculations (Part 3)",
  "strapline": "Learn how to multiply, divide and convert numbers in standard form, adjusting powers of ten correctly and practicing multi-step calculations.",
  "learningObjectives": [
    "Students should apply the laws of indices when multiplying and dividing numbers in standard form (Maths 1.2)",
    "Students should understand how to adjust the power of 10 to ensure answers remain in correct standard form notation (Maths 1.2)",
    "Students should practise converting between ordinary numbers and standard form within the context of multi-step calculations (Maths 1.2)"
  ],
  "keyFormulas": [
    "When multiplying: (a × 10^m) × (b × 10^n) = (a × b) × 10^(m + n)",
    "When dividing: (a × 10^m) ÷ (b × 10^n) = (a ÷ b) × 10^(m - n)",
    "Adjusting standard form: Ensure 1 ≤ a < 10 by moving the decimal point and adjusting the power of 10"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f9f9f9' stroke='#333'/><text x='200' y='130' text-anchor='middle' font-family='Arial' font-size='16'><tspan x='200' dy='0'>Standard Form Multiplication</tspan><tspan x='200' dy='25' font-size='14' fill='#555'>(3 × 10⁴) × (2 × 10⁵)</tspan><tspan x='200' dy='25' font-weight='bold'>= 6 × 10⁹</tspan></text></svg>",
  "step1": {
    "title": "Concept 1: Laws of Indices in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying numbers in standard form, multiply the front numbers and <strong>add</strong> their powers of 10. When dividing, divide the front numbers and <strong>subtract</strong> the powers of 10.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine stacking blocks: when you multiply, you stack heights (powers) together. When dividing, you remove some stacks (subtract powers).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Multiplying Numbers in Standard Form",
      "problem": "Calculate (3 × 10<sup>4</sup>) × (2 × 10<sup>5</sup>).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the front numbers: What is 3 × 2?",
          "answer": "6",
          "feedback": "Correct, 3 multiplied by 2 equals 6."
        },
        {
          "id": "q2",
          "prompt": "Add the powers of 10: What is 4 + 5?",
          "answer": "9",
          "feedback": "Right, 4 plus 5 is 9."
        },
        {
          "id": "q3",
          "prompt": "Combine your answers: What is the final expression in standard form?",
          "answer": "6 × 10^9",
          "feedback": "Excellent! The product is 6 × 10⁹."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Maintaining Correct Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Standard form requires the front number to be between 1 and 10. If the front number is outside this range, adjust by moving the decimal point and modifying the power of 10 accordingly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of standard form like setting the right gear in a car: if your number is too big or small, shift the decimal to get the correct 'gear' (range).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Adjusting the Front Number",
      "problem": "Adjust 35 × 10<sup>6</sup> into proper standard form.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is 35 between 1 and 10?",
          "answer": "No",
          "feedback": "Correct, 35 is larger than 10 and needs adjustment."
        },
        {
          "id": "q2",
          "prompt": "Move the decimal point left until the front number is between 1 and 10. What is the new front number?",
          "answer": "3.5",
          "feedback": "Good. Moving one place left gives 3.5."
        },
        {
          "id": "q3",
          "prompt": "If you moved the decimal one place to the left, how does the power of 10 change?",
          "answer": "Increase by 1",
          "feedback": "Yes, the power increases by 1 to keep the value equal."
        },
        {
          "id": "q4",
          "prompt": "What is the new complete standard form?",
          "answer": "3.5 × 10^7",
          "feedback": "Well done! The correct standard form is 3.5 × 10⁷."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Multi-step Standard Form Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Some problems need several steps, combining multiplication, division, addition, or subtraction. Addition and subtraction often require converting between ordinary numbers and standard form.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like cooking a recipe in stages, you convert ingredients (numbers), combine them carefully, then adjust the results to get the final dish (answer) in standard form.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Multi-step Calculation",
      "problem": "Calculate (4 × 10<sup>3</sup>) × (2 × 10<sup>2</sup>) ÷ (8 × 10<sup>1</sup>).",
      "questions": [
        {
          "id": "q1",
          "prompt": "First, multiply the front numbers: 4 × 2 = ?",
          "answer": "8",
          "feedback": "Correct, 4 times 2 is 8."
        },
        {
          "id": "q2",
          "prompt": "Add the powers of 10 for multiplication: 3 + 2 = ?",
          "answer": "5",
          "feedback": "Right, the sum is 5."
        },
        {
          "id": "q3",
          "prompt": "Now divide the front number by 8 (from the denominator): 8 ÷ 8 = ?",
          "answer": "1",
          "feedback": "Correct, 8 divided by 8 equals 1."
        },
        {
          "id": "q4",
          "prompt": "Subtract the powers of 10 in the division step: 5 − 1 = ?",
          "answer": "4",
          "feedback": "Yes, the difference is 4."
        },
        {
          "id": "q5",
          "prompt": "Write the final answer in standard form.",
          "answer": "1 × 10^4",
          "feedback": "Correct, the answer is 1 × 10⁴."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Converting Between Ordinary Numbers and Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Often you need to switch between ordinary numbers and standard form, especially in multi-step problems involving addition or subtraction.</p>",
    "workedExample": {
      "title": "Worked Example: Adding Numbers in Standard Form",
      "problem": "Add (3 × 10<sup>4</sup>) + (2 × 10<sup>5</sup>).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Convert both numbers to ordinary numbers before adding.",
          "answer": "30000 and 200000",
          "feedback": "Great! 3 × 10⁴ is 30000 and 2 × 10⁵ is 200000."
        },
        {
          "id": "q2",
          "prompt": "Add the ordinary numbers: 30000 + 200000 = ?",
          "answer": "230000",
          "feedback": "Correct, the sum is 230000."
        },
        {
          "id": "q3",
          "prompt": "Convert 230000 back to standard form.",
          "answer": "2.3 × 10^5",
          "feedback": "Exactly! 230000 equals 2.3 × 10⁵."
        }
      ]
    }
  },
  "step5": {
    "title": "Quick Quiz: Laws of Indices in Standard Form",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is (5 × 10^3) × (4 × 10^2) equal to?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>20 × 10^5</span>",
            "isCorrect": false,
            "explanation": "Check if the front number is between 1 and 10 in standard form."
          },
          {
            "id": "b",
            "label": "<span>2 × 10^6</span>",
            "isCorrect": true,
            "explanation": "Correct! Multiply front numbers and add powers: (5×4)=20; adjust to 2 × 10⁶."
          },
          {
            "id": "c",
            "label": "<span>9 × 10^5</span>",
            "isCorrect": false,
            "explanation": "Incorrect multiplication of front numbers."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What is (6 × 10^7) ÷ (3 × 10^4)?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>2 × 10^3</span>",
            "isCorrect": false,
            "explanation": "You forgot to subtract powers correctly."
          },
          {
            "id": "b",
            "label": "<span>2 × 10^4</span>",
            "isCorrect": true,
            "explanation": "Correct! Divide front numbers and subtract powers: 6 ÷ 3 = 2; 7 − 4 = 3."
          },
          {
            "id": "c",
            "label": "<span>2 × 10^5</span>",
            "isCorrect": false,
            "explanation": "Incorrect subtraction of powers of 10."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Calculate (5.0 × 10<sup>6</sup> × 4.0 × 10<sup>3</sup>) ÷ (2.0 × 10<sup>4</sup>), then express your answer in correct standard form.</span>",
      "hint": "Remember: multiply front numbers and add powers first, then divide front numbers and subtract powers. Adjust the final number to make sure the front number is between 1 and 10.",
      "mustHaveKeywords": ["multiply", "add powers", "divide", "subtract powers", "adjust front number", "standard form"],
      "optionalKeywords": ["laws of indices", "convert", "decimal point"],
      "modelAnswer": "<span>First multiply: 5.0 × 4.0 = 20.0 and 6 + 3 = 9 powers of 10 → 20.0 × 10<sup>9</sup>. Then divide: 20.0 ÷ 2.0 = 10.0 and 9 − 4 = 5 powers → 10.0 × 10<sup>5</sup>. Adjust to correct standard form: 1.0 × 10<sup>6</sup>.</span>",
      "scaffoldPrompts": [
        "Multiply the front numbers: 5.0 × 4.0 = ?",
        "Add the exponents of 10: 6 + 3 = ?",
        "Write intermediate multiplication result in standard form.",
        "Divide the front number by 2.0.",
        "Subtract the exponents: 9 − 4 = ?",
        "Write the division result before adjustment.",
        "Adjust the front number to be between 1 and 10 if needed."
      ]
    }
  }
};