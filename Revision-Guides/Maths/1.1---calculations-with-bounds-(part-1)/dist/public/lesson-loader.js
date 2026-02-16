window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 1)",
  "strapline": "Understanding how to work with upper and lower bounds and calculate with numbers in standard form.",
  "learningObjectives": [
    "Students should apply and interpret limits of accuracy when rounding or truncating, including upper and lower bounds (Maths 1.1)",
    "Students should calculate with numbers in standard form including multiplying and dividing numbers expressed in standard form (Maths 1.1)",
    ""
  ],
  "keyFormulas": [
    "Upper Bound = Rounded Value + (0.5 × the value of the last decimal place)",
    "Lower Bound = Rounded Value - (0.5 × the value of the last decimal place)",
    "Standard Form: a × 10ⁿ where 1 ≤ a < 10 and n is an integer"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='90' text-anchor='middle' font-family='sans-serif' font-weight='bold'>Bounds on a Number Rounded to 1 d.p.</text><line x1='80' y1='150' x2='320' y2='150' stroke='#333' stroke-width='2'/><circle cx='180' cy='150' r='8' fill='#007BFF'/><text x='180' y='145' text-anchor='middle' font-family='sans-serif' fill='#fff'>Rounded</text><circle cx='230' cy='150' r='8' fill='#28a745'/><text x='230' y='145' text-anchor='middle' font-family='sans-serif' fill='#fff'>Upper Bound</text><circle cx='130' cy='150' r='8' fill='#dc3545'/><text x='130' y='145' text-anchor='middle' font-family='sans-serif' fill='#fff'>Lower Bound</text></svg>",
  "step1": {
    "title": "Concept: Understanding Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>Upper Bound</strong> of a rounded number is the maximum possible value that the original number could have been before rounding. For a number rounded to 1 decimal place, we add 0.05 to find the upper bound.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of rounding as putting a fence around a garden. The upper bound is like the farthest edge of the garden inside the fence, representing the biggest possible size of the garden before the fence went up.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find Upper Bound Step-by-Step",
      "problem": "A length is rounded to 1 decimal place as 4.3 cm. Let's find its upper bound.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the rounded value?",
          "answer": "4.3",
          "feedback": "Correct, the rounded length is 4.3 cm."
        },
        {
          "id": "q2",
          "prompt": "What is half of the value of the last decimal place? (0.1 ÷ 2)",
          "answer": "0.05",
          "feedback": "Correct, half of 0.1 is 0.05."
        },
        {
          "id": "q3",
          "prompt": "What is the upper bound? Add 0.05 to 4.3.",
          "answer": "4.35",
          "feedback": "Well done! The upper bound is 4.35 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>Lower Bound</strong> of a rounded number is the smallest possible value that the original number could have been before rounding. For a number rounded to 1 decimal place, subtract 0.05 from the rounded value.</p>",
    "workedExample": {
      "title": "Worked Example: Find Lower Bound Step-by-Step",
      "problem": "A length is rounded to 1 decimal place as 7.8 cm. Let's find its lower bound.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the rounded value?",
          "answer": "7.8",
          "feedback": "Correct, the rounded length is 7.8 cm."
        },
        {
          "id": "q2",
          "prompt": "What is half of the value of the last decimal place? (0.1 ÷ 2)",
          "answer": "0.05",
          "feedback": "Correct, half of 0.1 is 0.05."
        },
        {
          "id": "q3",
          "prompt": "What is the lower bound? Subtract 0.05 from 7.8.",
          "answer": "7.75",
          "feedback": "Well done! The lower bound is 7.75 cm."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Limits of Accuracy Explained",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Limits of accuracy describe the <em>range</em> of possible values a number could have been before rounding or truncating. They are defined by the lower and upper bounds.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you measure something with a ruler that only has marks every millimeter, the real length could be anywhere between two marks. The limits of accuracy show this range.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Determine Limits of Accuracy",
      "problem": "Measurement is 12.4 cm to 1 decimal place. Find the limits of accuracy.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the lower bound.",
          "answer": "12.35",
          "feedback": "Correct, 12.4 - 0.05 = 12.35 cm."
        },
        {
          "id": "q2",
          "prompt": "Calculate the upper bound.",
          "answer": "12.45",
          "feedback": "Correct, 12.4 + 0.05 = 12.45 cm."
        },
        {
          "id": "q3",
          "prompt": "Write the limits of accuracy as an inequality.",
          "answer": "12.35 ≤ x < 12.45",
          "feedback": "Excellent! The measurement could be anywhere from 12.35 cm inclusive up to but not including 12.45 cm."
        }
      ]
    }
  },
  "step4": {
    "title": "Calculations with Numbers in Standard Form: Introduction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Standard form is a way to express very large or very small numbers as a number between 1 and 10 multiplied by a power of 10. This notation helps simplify calculations.</p>",
    "workedExample": {
      "title": "Worked Example: Convert to Standard Form",
      "problem": "Convert 0.00072 into standard form.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the first non-zero digit.",
          "answer": "7",
          "feedback": "Correct, the first non-zero digit is 7."
        },
        {
          "id": "q2",
          "prompt": "Place the decimal after this digit. What is the new number?",
          "answer": "7.2",
          "feedback": "Correct, it's 7.2."
        },
        {
          "id": "q3",
          "prompt": "How many places did the decimal move to the right? (Value of n as a negative integer)",
          "answer": "4",
          "feedback": "Yes, it moved 4 places."
        },
        {
          "id": "q4",
          "prompt": "Write the number in standard form.",
          "answer": "7.2 × 10⁻⁴",
          "feedback": "Well done! 0.00072 = 7.2 × 10⁻⁴."
        }
      ]
    }
  },
  "step5": {
    "title": "Multiplying Numbers in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying numbers in standard form, multiply the numbers (a parts) and add the powers of 10 (exponents).</p>",
    "workedExample": {
      "title": "Worked Example: Multiply in Standard Form",
      "problem": "Calculate (3 × 10³) × (2 × 10⁴).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the numbers (3 × 2).",
          "answer": "6",
          "feedback": "Correct, 3 × 2 = 6."
        },
        {
          "id": "q2",
          "prompt": "Add the powers of 10 (3 + 4).",
          "answer": "7",
          "feedback": "Correct, 3 + 4 = 7."
        },
        {
          "id": "q3",
          "prompt": "Write the answer in standard form.",
          "answer": "6 × 10⁷",
          "feedback": "Excellent! The answer is 6 × 10⁷."
        }
      ]
    }
  },
  "step6": {
    "title": "Dividing Numbers in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing numbers in standard form, divide the numbers (a parts) and subtract the powers of 10 (exponents).</p>",
    "workedExample": {
      "title": "Worked Example: Divide in Standard Form",
      "problem": "Calculate (5 × 10⁶) ÷ (2 × 10³).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide the numbers (5 ÷ 2).",
          "answer": "2.5",
          "feedback": "Correct, 5 ÷ 2 = 2.5."
        },
        {
          "id": "q2",
          "prompt": "Subtract the powers of 10 (6 - 3).",
          "answer": "3",
          "feedback": "Correct, 6 - 3 = 3."
        },
        {
          "id": "q3",
          "prompt": "Write the answer in standard form.",
          "answer": "2.5 × 10³",
          "feedback": "Well done! The answer is 2.5 × 10³."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A length is recorded as 9.6 cm, rounded to 1 decimal place. Calculate the upper and lower bounds of this measurement. Then, multiply the upper bound by 2.5 × 10² and give your answer in standard form.</span>",
      "hint": "Remember to find lower bound by subtracting 0.05, upper bound by adding 0.05, multiply the numbers, and add exponents in standard form.",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiply", "standard form", "powers of 10"],
      "optionalKeywords": ["decimal places", "limits of accuracy"],
      "modelAnswer": "<span>First find the lower bound: 9.6 - 0.05 = 9.55 cm. Next find upper bound: 9.6 + 0.05 = 9.65 cm. Then multiply the upper bound by 2.5 × 10²: 9.65 × 2.5 = 24.125. In standard form, 24.125 = 2.4125 × 10¹, so the answer is 2.4125 × 10¹ × 10² = 2.4125 × 10³. Final answer: 2.41 × 10³ cm (rounded to 3 significant figures).</span>",
      "scaffoldPrompts": [
        "Calculate lower bound by subtracting 0.05",
        "Calculate upper bound by adding 0.05",
        "Multiply upper bound by 2.5",
        "Convert product to standard form",
        "Add powers of 10"
      ]
    }
  }
};