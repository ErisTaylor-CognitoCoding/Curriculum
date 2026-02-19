window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.1 - Calculations with bounds",
  "strapline": "Understanding and applying upper and lower bounds to calculations with a given degree of accuracy.",
  "learningObjectives": [
    "Students should be able to apply calculations to upper and lower bounds for numbers given to a specified degree of accuracy (Maths 1.1)",
    "Students should be able to determine the maximum and minimum possible results of arithmetic operations using bounds (Maths 1.1)",
    "Students should be able to interpret problems involving bounds in real-world contexts (Maths 1.1)"
  ],
  "keyFormulas": [
    "Upper Bound = value + 0.5 × degree of accuracy",
    "Lower Bound = value - 0.5 × degree of accuracy",
    "Maximum result = result calculated using upper bound values",
    "Minimum result = result calculated using lower bound values"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='75' x2='350' y2='75' stroke='#333' stroke-width='2'/><circle cx='150' cy='75' r='10' fill='#4A90E2'/><text x='150' y='100' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#000'>Rounded value</text><circle cx='110' cy='75' r='10' fill='#50E3C2'/><text x='110' y='60' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#000'>Lower Bound</text><circle cx='190' cy='75' r='10' fill='#F5A623'/><text x='190' y='60' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#000'>Upper Bound</text><line x1='110' y1='75' x2='150' y2='75' stroke='#50E3C2' stroke-width='2' stroke-dasharray='4 4'/><line x1='150' y1='75' x2='190' y2='75' stroke='#F5A623' stroke-width='2' stroke-dasharray='4 4'/></svg>",
  "step1": {
    "title": "Concept: Understanding Degree of Accuracy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>degree of accuracy</strong> tells us to what precision a number is rounded. For example, if a number is rounded to the nearest 10, the degree of accuracy is 10; if rounded to 1 decimal place, the degree of accuracy is 0.1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine measuring the length of a table with a ruler marked in centimeters versus one marked only in tens of centimeters. The smaller the unit on the ruler, the higher the accuracy.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify the Degree of Accuracy",
      "problem": "If a number is 54.3 rounded to 1 decimal place, what is the degree of accuracy?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What decimal place is the number rounded to?",
          "answer": "1",
          "feedback": "Correct! The number is rounded to 1 decimal place."
        },
        {
          "id": "q2",
          "prompt": "What is the value of the degree of accuracy in numeric form?",
          "answer": "0.1",
          "feedback": "Excellent! The degree of accuracy is 0.1 when rounded to 1 decimal place."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> is the maximum value the original number could have had before rounding or truncating. It is found by adding half the degree of accuracy to the stated value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you round your height to the nearest centimeter, your real height could be slightly more. The upper bound is this highest possible height before rounding.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the Upper Bound",
      "problem": "A length is recorded as 20 cm, rounded to the nearest cm. What is the upper bound?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the degree of accuracy.",
          "answer": "1",
          "feedback": "Correct! Rounded to the nearest cm means degree of accuracy is 1."
        },
        {
          "id": "q2",
          "prompt": "Calculate half the degree of accuracy.",
          "answer": "0.5",
          "feedback": "Correct. Half of 1 is 0.5."
        },
        {
          "id": "q3",
          "prompt": "Add this to the recorded value to find the upper bound.",
          "answer": "20.5",
          "feedback": "Well done! 20 + 0.5 = 20.5 is the upper bound."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the minimum possible value the original number could have been before rounding or truncating. It is found by subtracting half the degree of accuracy from the stated value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a price tag says £5 rounded to the nearest £1, the real price could have been just below £5. The lower bound is this smallest possible price.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the Lower Bound",
      "problem": "A width is given as 15 cm rounded to the nearest 1 cm. What is the lower bound?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the degree of accuracy?",
          "answer": "1",
          "feedback": "Correct, this is rounded to the nearest 1 cm."
        },
        {
          "id": "q2",
          "prompt": "Find half the degree of accuracy.",
          "answer": "0.5",
          "feedback": "Correct, half of 1 is 0.5."
        },
        {
          "id": "q3",
          "prompt": "Subtract this from the recorded value.",
          "answer": "14.5",
          "feedback": "Good! 15 - 0.5 = 14.5 is the lower bound."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying Bounds to Arithmetic: Addition and Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To calculate the maximum and minimum values when adding or subtracting numbers rounded to certain degrees of accuracy, add or subtract the upper or lower bounds accordingly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two pieces of rope each measured approximately. Their combined length has upper and lower bounds based on the bounds of each rope length.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Bounds on Addition",
      "problem": "Add two lengths: 7.3 cm (to 1 d.p.) and 4.6 cm (to 1 d.p.). Find the minimum and maximum possible sum.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the upper bound of 7.3 cm.",
          "answer": "7.35",
          "feedback": "Correct! Half of 0.1 is 0.05, so 7.3 + 0.05 = 7.35."
        },
        {
          "id": "q2",
          "prompt": "Calculate the upper bound of 4.6 cm.",
          "answer": "4.65",
          "feedback": "Correct! 4.6 + 0.05 = 4.65."
        },
        {
          "id": "q3",
          "prompt": "Find maximum sum (upper bound 7.3 + upper bound 4.6).",
          "answer": "12",
          "feedback": "Well done! 7.35 + 4.65 = 12."
        },
        {
          "id": "q4",
          "prompt": "Calculate the lower bound of 7.3 cm.",
          "answer": "7.25",
          "feedback": "Correct! 7.3 - 0.05 = 7.25."
        },
        {
          "id": "q5",
          "prompt": "Calculate the lower bound of 4.6 cm.",
          "answer": "4.55",
          "feedback": "Correct! 4.6 - 0.05 = 4.55."
        },
        {
          "id": "q6",
          "prompt": "Find minimum sum (lower bound 7.3 + lower bound 4.6).",
          "answer": "11.8",
          "feedback": "Great! 7.25 + 4.55 = 11.8."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying Bounds to Arithmetic: Multiplication and Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying or dividing values with bounds, calculate the maximum and minimum by multiplying or dividing the relevant upper and lower bounds. Maximum product or quotient comes from multiplying/dividing upper bounds; minimum from lower bounds or vice versa depending on sign.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of areas or ratios with measures that can vary within bounds; the total area or ratio changes accordingly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Bounds on Multiplication",
      "problem": "Calculate the bounds for the area of a rectangle with length 5.4 m and width 2.1 m, both rounded to 1 decimal place.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the upper bound of length 5.4 m.",
          "answer": "5.45",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Find the upper bound of width 2.1 m.",
          "answer": "2.15",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate maximum area (upper length × upper width).",
          "answer": "11.7175",
          "feedback": "Well done! 5.45 × 2.15 = 11.7175 m²."
        },
        {
          "id": "q4",
          "prompt": "Find the lower bound of length 5.4 m.",
          "answer": "5.35",
          "feedback": "Correct."
        },
        {
          "id": "q5",
          "prompt": "Find the lower bound of width 2.1 m.",
          "answer": "2.05",
          "feedback": "Correct."
        },
        {
          "id": "q6",
          "prompt": "Calculate minimum area (lower length × lower width).",
          "answer": "10.9675",
          "feedback": "Good! 5.35 × 2.05 = 10.9675 m²."
        }
      ]
    }
  },
  "step6": {
    "title": "Interpreting Real-World Problems with Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Problems involving bounds appear across contexts — from construction measurements to financial estimates. Understanding bounds helps provide safe margins and assess uncertainties.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">For example, when building a fence, knowing the maximum and minimum length estimates helps buy enough materials without wasting money.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Real-World Problem",
      "problem": "A wooden board is measured as 120 cm rounded to the nearest cm. You need to cut 4 pieces of this length. Find the maximum and minimum total length of the 4 pieces.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the upper bound of one piece?",
          "answer": "120.5",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "What is the maximum total length for 4 pieces?",
          "answer": "482",
          "feedback": "Great! 4 × 120.5 = 482 cm."
        },
        {
          "id": "q3",
          "prompt": "What is the lower bound of one piece?",
          "answer": "119.5",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "What is the minimum total length for 4 pieces?",
          "answer": "478",
          "feedback": "Well done! 4 × 119.5 = 478 cm."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bottle is labelled as containing 500 ml of liquid, rounded to the nearest 10 ml. A second bottle contains 325 ml, rounded to the nearest 5 ml. Calculate the upper and lower bounds for the total volume if both bottles are poured into a jug.</span>",
      "hint": "Remember to calculate half the degree of accuracy for each volume and then sum the bounds appropriately.",
      "mustHaveKeywords": ["upper bound", "lower bound", "degree of accuracy", "sum", "half the degree of accuracy"],
      "optionalKeywords": ["real-world context", "margin of error"],
      "modelAnswer": "<span>First, find the degree of accuracy for each bottle: 10 ml for the first, 5 ml for the second. Calculate half these to find the bound offsets (5 ml and 2.5 ml). The upper bound total is (500 + 5) + (325 + 2.5) = 832.5 ml. The lower bound total is (500 - 5) + (325 - 2.5) = 817.5 ml. This gives the maximum and minimum possible total volumes.</span>",
      "scaffoldPrompts": ["Identify degree of accuracy for each measurement", "Calculate half of each degree of accuracy", "Find upper bounds of both volumes", "Sum upper bounds", "Find lower bounds of both volumes", "Sum lower bounds"]
    }
  }
};