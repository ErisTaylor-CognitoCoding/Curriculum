window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.1 - Calculations with bounds",
  "strapline": "Understanding how to calculate and interpret upper and lower bounds for numbers given to a specified degree of accuracy.",
  "learningObjectives": [
    "Students should be able to apply calculations to upper and lower bounds for numbers given to a specified degree of accuracy (Maths 1.1)",
    "Students should be able to determine the maximum and minimum possible results of arithmetic operations using bounds (Maths 1.1)",
    "Students should be able to interpret problems involving bounds in real-world contexts (Maths 1.1)"
  ],
  "keyFormulas": [
    "Upper Bound = stated value + (½ × degree of accuracy)",
    "Lower Bound = stated value - (½ × degree of accuracy)",
    "Degree of Accuracy examples: nearest 10, nearest 0.1, nearest 1 decimal place"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='75' x2='350' y2='75' stroke='#333' stroke-width='3'/><circle cx='200' cy='75' r='12' fill='#4A90E2' /><text x='200' y='75' fill='white' font-family='sans-serif' font-size='14' text-anchor='middle' dominant-baseline='middle'>Rounded Value</text><line x1='188' y1='75' x2='100' y2='75' stroke='#E94E77' stroke-width='4'/><circle cx='100' cy='75' r='8' fill='#E94E77' /><text x='100' y='95' font-family='sans-serif' font-size='12' text-anchor='middle'>Lower Bound</text><line x1='212' y1='75' x2='300' y2='75' stroke='#50C878' stroke-width='4'/><circle cx='300' cy='75' r='8' fill='#50C878' /><text x='300' y='95' font-family='sans-serif' font-size='12' text-anchor='middle'>Upper Bound</text><text x='200' y='130' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#333'>Number line showing lower bound, rounded value, and upper bound</text></svg>",
  "step1": {
    "title": "Concept: Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> is the greatest possible value a rounded number could originally have been before rounding. It is found by adding half of the degree of accuracy to the given number.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of measuring a pencil length shown as 10cm to the nearest cm. The actual length could be a bit longer, up to 10.5cm, which is the upper bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Upper Bound",
      "problem": "Find the upper bound of 46 rounded to the nearest 10.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the degree of accuracy for 'nearest 10'?",
          "answer": "10",
          "feedback": "Correct. The degree of accuracy is 10."
        },
        {
          "id": "q2",
          "prompt": "Calculate half of the degree of accuracy.",
          "answer": "5",
          "feedback": "Correct. Half of 10 is 5."
        },
        {
          "id": "q3",
          "prompt": "Add this half degree of accuracy to the given number 46. What is the upper bound?",
          "answer": "51",
          "feedback": "Right! 46 + 5 = 51, so the upper bound is 51."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the smallest possible value a rounded number could originally have been before rounding. It is found by subtracting half of the degree of accuracy from the given number.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the pencil example, if a pencil length is given as 10 cm to the nearest cm, the actual length could be down to 9.5 cm, which is the lower bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Lower Bound",
      "problem": "Find the lower bound of 46 rounded to the nearest 10.",
      "questions": [
        {
          "id": "q4",
          "prompt": "What is the degree of accuracy for 'nearest 10' again?",
          "answer": "10",
          "feedback": "Correct."
        },
        {
          "id": "q5",
          "prompt": "Half of 10 is?",
          "answer": "5",
          "feedback": "Good."
        },
        {
          "id": "q6",
          "prompt": "Now subtract 5 from 46. What is the lower bound?",
          "answer": "41",
          "feedback": "Exactly! 46 - 5 = 41."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Degree of Accuracy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>degree of accuracy</strong> refers to the precision to which a number is rounded, such as nearest 10, nearest 1 decimal place, or nearest 3 significant figures. This determines the size of the bounds.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a measurement is given as 3.2m to 1 decimal place. The degree of accuracy is 0.1, because the number was rounded to the nearest tenth of a meter.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Degree of Accuracy",
      "problem": "A length is recorded as 3.2m to 1 decimal place. What is the degree of accuracy?",
      "questions": [
        {
          "id": "q7",
          "prompt": "What is the place value of the last digit (2) in 3.2?",
          "answer": "tenths",
          "feedback": "Correct, this is the tenths place."
        },
        {
          "id": "q8",
          "prompt": "What is the size of 1 in the tenths place as a decimal?",
          "answer": "0.1",
          "feedback": "Right! That’s the degree of accuracy."
        }
      ]
    }
  },
  "step4": {
    "title": "Calculating Bounds for Decimal Numbers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For numbers rounded to decimal places, the bounds are calculated using the decimal degree of accuracy. For example, for 2.36 rounded to 1 decimal place, the degree of accuracy is 0.1.</p>",
    "workedExample": {
      "title": "Worked Example: Bounds for 2.36 (rounded to 1 decimal place)",
      "problem": "Find the upper and lower bounds of 2.4 (rounded to 1 decimal place).",
      "questions": [
        {
          "id": "q9",
          "prompt": "What is the degree of accuracy for 1 decimal place?",
          "answer": "0.1",
          "feedback": "Yes, 0.1 is the degree of accuracy."
        },
        {
          "id": "q10",
          "prompt": "Calculate half of 0.1.",
          "answer": "0.05",
          "feedback": "Correct, half of 0.1 is 0.05."
        },
        {
          "id": "q11",
          "prompt": "Add 0.05 to 2.4 for the upper bound.",
          "answer": "2.45",
          "feedback": "Good! The upper bound is 2.45."
        },
        {
          "id": "q12",
          "prompt": "Subtract 0.05 from 2.4 for the lower bound.",
          "answer": "2.35",
          "feedback": "Exactly! The lower bound is 2.35."
        }
      ]
    }
  },
  "step5": {
    "title": "Determining Bounds in Real-World Contexts",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Bounds can be used to find the maximum and minimum possible values in real situations, like tolerances in measurements for construction or manufacturing.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a table length is given as 120 cm rounded to the nearest cm, the true length is between 119.5 cm and 120.5 cm. This helps decide if the table fits a space with strict size limits.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Real-World Bounds",
      "problem": "A metal sheet is 250 cm long to the nearest 5 cm. What are the bounds on the length?",
      "questions": [
        {
          "id": "q13",
          "prompt": "What is the degree of accuracy?",
          "answer": "5",
          "feedback": "Correct."
        },
        {
          "id": "q14",
          "prompt": "What is half the degree of accuracy?",
          "answer": "2.5",
          "feedback": "Yes, half of 5 is 2.5."
        },
        {
          "id": "q15",
          "prompt": "Calculate the lower bound (250 - 2.5).",
          "answer": "247.5",
          "feedback": "Good!"
        },
        {
          "id": "q16",
          "prompt": "Calculate the upper bound (250 + 2.5).",
          "answer": "252.5",
          "feedback": "Correct!"
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A length is recorded as 75 mm, rounded to the nearest millimetre. Calculate the upper and lower bounds. Use these bounds to find the maximum possible perimeter of a rectangle with lengths 75 mm and 40 mm (rounded to nearest mm). Show your working clearly.</span>",
      "hint": "Remember to calculate half the degree of accuracy; calculate bounds for both lengths; then add the maximum and minimum possible perimeters carefully.",
      "mustHaveKeywords": ["upper bound", "lower bound", "degree of accuracy", "perimeter"],
      "optionalKeywords": ["units", "max perimeter", "min perimeter"],
      "modelAnswer": "<span>The degree of accuracy for nearest mm is 1 mm, so half is 0.5 mm.<br />Upper bound of 75 mm = 75 + 0.5 = 75.5 mm.<br />Lower bound of 75 mm = 75 - 0.5 = 74.5 mm.<br />Upper bound of 40 mm = 40 + 0.5 = 40.5 mm.<br />Lower bound of 40 mm = 40 - 0.5 = 39.5 mm.<br />Maximum perimeter = 2 × (upper bound length + upper bound width) = 2 × (75.5 + 40.5) = 2 × 116 = 232 mm.<br />Minimum perimeter = 2 × (lower bound length + lower bound width) = 2 × (74.5 + 39.5) = 2 × 114 = 228 mm.</span>",
      "scaffoldPrompts": ["What is the degree of accuracy for nearest mm?", "Calculate the half degree of accuracy.", "Find upper and lower bounds for each length.", "Use bounds to calculate maximum and minimum perimeter."]
    }
  }
};