window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.1 - Calculations with bounds",
  "strapline": "Understanding how to calculate using upper and lower bounds for numbers given to a certain degree of accuracy.",
  "learningObjectives": [
    "Students should be able to apply calculations to upper and lower bounds for numbers given to a specified degree of accuracy (Maths 1.1)",
    "Students should be able to determine the maximum and minimum possible results of arithmetic operations using bounds (Maths 1.1)",
    "Students should be able to interpret problems involving bounds in real-world contexts (Maths 1.1)"
  ],
  "keyFormulas": [
    "Upper Bound = stated value + 1/2 (degree of accuracy)",
    "Lower Bound = stated value - 1/2 (degree of accuracy)",
    "Maximum result = operation applied to upper bounds (or lower bounds depending on operation)",
    "Minimum result = operation applied to lower bounds (or upper bounds depending on operation)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='50' x2='350' y2='50' stroke='#000' stroke-width='2'/><circle cx='200' cy='50' r='8' fill='#007ACC'/><text x='200' y='40' font-family='sans-serif' font-size='14' fill='#000' text-anchor='middle'>Stated Value</text><line x1='150' y1='48' x2='150' y2='52' stroke='#E63946' stroke-width='3'/><text x='150' y='40' font-family='sans-serif' font-size='14' fill='#E63946' text-anchor='middle'>Lower Bound</text><line x1='250' y1='48' x2='250' y2='52' stroke='#2A9D8F' stroke-width='3'/><text x='250' y='40' font-family='sans-serif' font-size='14' fill='#2A9D8F' text-anchor='middle'>Upper Bound</text></svg>",
  "step1": {
    "title": "Concept: Understanding Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a number is rounded to a certain degree of accuracy, the original number could be anywhere between two bounds: the upper bound and the lower bound. The <strong>upper bound</strong> is the highest possible number before rounding, and the <strong>lower bound</strong> is the lowest.</p><p class=\"text-sm leading-6 text-muted-foreground\">To find them, you add or subtract half of the degree of accuracy from the given number.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you measure a table length rounded to the nearest centimetre as 120 cm. The actual length could be slightly less or more, anywhere between 119.5 cm (lower bound) and 120.5 cm (upper bound).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Bounds of a Rounded Number",
      "problem": "A number is rounded to 1 decimal place and is given as <strong>5.6</strong>. Find the upper and lower bounds.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the degree of accuracy here?",
          "answer": "0.1",
          "feedback": "Correct. Rounding to 1 decimal place means the degree of accuracy is 0.1."
        },
        {
          "id": "q2",
          "prompt": "Calculate half the degree of accuracy.",
          "answer": "0.05",
          "feedback": "Exactly. Half of 0.1 is 0.05."
        },
        {
          "id": "q3",
          "prompt": "What is the lower bound? (5.6 - 0.05)",
          "answer": "5.55",
          "feedback": "Correct. The lower bound is 5.55."
        },
        {
          "id": "q4",
          "prompt": "What is the upper bound? (5.6 + 0.05)",
          "answer": "5.65",
          "feedback": "Right. The upper bound is 5.65."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Applying Bounds to Addition and Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When adding or subtracting numbers given to certain bounds, the maximum result is found by adding the upper bounds, and the minimum result is found by adding the lower bounds (or vice versa for subtraction, depending on context).</p>",
    "workedExample": {
      "title": "Worked Example: Adding Bounds",
      "problem": "Two lengths are 7.4 cm and 8.2 cm, each rounded to 1 decimal place. Find the minimum and maximum possible total length.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the lower bound of 7.4 cm.",
          "answer": "7.35",
          "feedback": "Correct: 7.4 - 0.05 = 7.35."
        },
        {
          "id": "q2",
          "prompt": "Find the upper bound of 7.4 cm.",
          "answer": "7.45",
          "feedback": "Perfect: 7.4 + 0.05 = 7.45."
        },
        {
          "id": "q3",
          "prompt": "Find the lower bound of 8.2 cm.",
          "answer": "8.15",
          "feedback": "Correct: 8.2 - 0.05 = 8.15."
        },
        {
          "id": "q4",
          "prompt": "Find the upper bound of 8.2 cm.",
          "answer": "8.25",
          "feedback": "Well done: 8.2 + 0.05 = 8.25."
        },
        {
          "id": "q5",
          "prompt": "What is the minimum possible total length? (Add the lower bounds)",
          "answer": "15.5",
          "feedback": "Correct: 7.35 + 8.15 = 15.5 cm."
        },
        {
          "id": "q6",
          "prompt": "What is the maximum possible total length? (Add the upper bounds)",
          "answer": "15.7",
          "feedback": "Good: 7.45 + 8.25 = 15.7 cm."
        }
      ]
    }
  },
  "step3": {
    "title": "Knowledge Check: MCQ on Bounds",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If a number is rounded to the nearest 10 and the stated value is 90, what is the lower bound?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>85</span>",
            "isCorrect": true,
            "explanation": "Correct. Half of 10 is 5, so 90 - 5 = 85."
          },
          {
            "id": "b",
            "label": "<span>80</span>",
            "isCorrect": false,
            "explanation": "Incorrect, the lower bound is half the degree of accuracy below the stated value."
          },
          {
            "id": "c",
            "label": "<span>95</span>",
            "isCorrect": false,
            "explanation": "No, 95 would be the upper bound."
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Bounds and Multiplication/Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For multiplication and division, to find the maximum and minimum results using bounds, you multiply or divide combinations of upper and lower bounds to determine the range of possible answers.</p>",
    "workedExample": {
      "title": "Worked Example: Multiplying with Bounds",
      "problem": "A length of 4.8 m (to 1 decimal place) is multiplied by width 2.3 m (to 1 decimal place). Find the minimum and maximum possible product.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the lower bound of 4.8 m.",
          "answer": "4.75",
          "feedback": "Correct: 4.8 - 0.05 = 4.75."
        },
        {
          "id": "q2",
          "prompt": "Find the upper bound of 4.8 m.",
          "answer": "4.85",
          "feedback": "Correct: 4.8 + 0.05 = 4.85."
        },
        {
          "id": "q3",
          "prompt": "Find the lower bound of 2.3 m.",
          "answer": "2.25",
          "feedback": "Correct: 2.3 - 0.05 = 2.25."
        },
        {
          "id": "q4",
          "prompt": "Find the upper bound of 2.3 m.",
          "answer": "2.35",
          "feedback": "Correct: 2.3 + 0.05 = 2.35."
        },
        {
          "id": "q5",
          "prompt": "Calculate the minimum possible product (multiply the two lowest bounds).",
          "answer": "10.6875",
          "feedback": "Correct: 4.75 × 2.25 = 10.6875."
        },
        {
          "id": "q6",
          "prompt": "Calculate the maximum possible product (multiply the two highest bounds).",
          "answer": "11.3975",
          "feedback": "Correct: 4.85 × 2.35 = 11.3975."
        }
      ]
    }
  },
  "step5": {
    "title": "Interpretation: Real-World Contexts with Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In real life, measurements and values are often rounded. Understanding bounds helps us estimate the range of possible actual values, helping in error checking and safety margins.</p>",
    "analogy": {
      "title": "Example",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a car's fuel consumption is recorded as 6.0 L/100km (to 1 decimal place), the actual consumption might be between 5.95 and 6.05 L/100km. This range is important when calculating travel costs or planning fuel stops.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Applying Bounds in Context",
      "problem": "A rectangular garden is measured as 10.0m by 5.0m, each to 1 decimal place. What is the range for the garden's possible area?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the lower bound for length.",
          "answer": "9.95",
          "feedback": "Correct: 10.0 - 0.05 = 9.95."
        },
        {
          "id": "q2",
          "prompt": "Find the upper bound for length.",
          "answer": "10.05",
          "feedback": "Correct: 10.0 + 0.05 = 10.05."
        },
        {
          "id": "q3",
          "prompt": "Find the lower bound for width.",
          "answer": "4.95",
          "feedback": "Correct: 5.0 - 0.05 = 4.95."
        },
        {
          "id": "q4",
          "prompt": "Find the upper bound for width.",
          "answer": "5.05",
          "feedback": "Correct: 5.0 + 0.05 = 5.05."
        },
        {
          "id": "q5",
          "prompt": "Calculate the minimum area (using lower bounds).",
          "answer": "49.2525",
          "feedback": "Correct: 9.95 × 4.95 = 49.2525 m²."
        },
        {
          "id": "q6",
          "prompt": "Calculate the maximum area (using upper bounds).",
          "answer": "50.7525",
          "feedback": "Correct: 10.05 × 5.05 = 50.7525 m²."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A machine part is specified to have length 12.0 cm and width 7.0 cm, both rounded to 1 decimal place. Calculate the minimum and maximum possible area of the part, explaining your method.</span>",
      "hint": "Remember to find the upper and lower bounds for each measurement first and then use these to find the possible range of areas.",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiply bounds", "minimum area", "maximum area"],
      "optionalKeywords": ["degree of accuracy", "rounded to 1 decimal place", "half the degree of accuracy"],
      "modelAnswer": "<span>First, find the lower bound for length: 12.0 - 0.05 = 11.95 cm, and the upper bound: 12.0 + 0.05 = 12.05 cm. Then for width, the lower bound is 7.0 - 0.05 = 6.95 cm and the upper bound is 7.0 + 0.05 = 7.05 cm. The minimum possible area is the product of the two lower bounds: 11.95 × 6.95 = 83.0025 cm². The maximum possible area is the product of the two upper bounds: 12.05 × 7.05 = 84.8025 cm². Therefore, the area lies between 83.0025 cm² and 84.8025 cm².</span>",
      "scaffoldPrompts": ["Identify the degree of accuracy", "Calculate half the degree of accuracy", "Find the upper and lower bounds for each measurement", "Calculate the minimum area by multiplying lower bounds", "Calculate the maximum area by multiplying upper bounds"]
    }
  }
};