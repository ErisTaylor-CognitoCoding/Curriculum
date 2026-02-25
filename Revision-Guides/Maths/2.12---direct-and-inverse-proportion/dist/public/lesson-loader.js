window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.12 - Direct and inverse proportion",
  "strapline": "Understanding and applying the relationships where quantities increase or decrease together or inversely, using the proportionality symbol ∝.",
  "learningObjectives": [
    "Students should recognise and identify direct proportion relationships between two quantities (Maths 2.12)",
    "Students should recognise and identify inverse proportion relationships between two quantities (Maths 2.12)",
    "Students should use the proportionality symbol ∝ to express proportional relationships and solve problems involving direct and inverse proportion (Maths 2.12)"
  ],
  "keyFormulas": [
    "y ∝ x or y = kx (Direct Proportion)",
    "y ∝ 1/x or y = k/x (Inverse Proportion)",
    "∝ means 'is proportional to'"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg' aria-label='Graphs of direct and inverse proportion'>  <rect x='30' y='30' width='160' height='160' fill='#e8f4fd' stroke='#333' />  <text x='110' y='20' font-family='Arial' font-size='14' fill='#000' text-anchor='middle'>Direct Proportion: y ∝ x</text>  <line x1='40' y1='170' x2='170' y2='40' stroke='#007acc' stroke-width='3' />  <text x='185' y='175' font-family='Arial' font-size='12' fill='#007acc'>y = kx</text>  <rect x='210' y='30' width='160' height='160' fill='#fde8e8' stroke='#333' />  <text x='290' y='20' font-family='Arial' font-size='14' fill='#000' text-anchor='middle'>Inverse Proportion: y ∝ 1/x</text>  <path d='M 220 40 Q 295 120 370 170' fill='none' stroke='#cc3300' stroke-width='3' />  <text x='385' y='175' font-family='Arial' font-size='12' fill='#cc3300'>y = k/x</text></svg>",
  "step1": {
    "title": "Concept: Understanding Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two quantities are in direct proportion if they increase or decrease at the same rate. This means if one quantity doubles, the other doubles too. The mathematical notation is <strong>y ∝ x</strong>, which can also be written as <strong>y = kx</strong> where <em>k</em> is the constant of proportionality.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of filling bottles with water: if you double the time spent filling, the amount of water doubles. The amount of water is directly proportional to the time.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the constant of proportionality",
      "problem": "If y is directly proportional to x, and y = 12 when x = 4, find the constant of proportionality, k.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of x?",
          "answer": "4",
          "feedback": "Correct! x is 4."
        },
        {
          "id": "q2",
          "prompt": "What is the value of y?",
          "answer": "12",
          "feedback": "Correct! y is 12."
        },
        {
          "id": "q3",
          "prompt": "Use y = kx to find k. What is k?",
          "answer": "3",
          "feedback": "Correct! k = y/x = 12/4 = 3."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two quantities are in inverse proportion if one increases while the other decreases at the same rate. This means if one quantity doubles, the other halves. This is written as <strong>y ∝ 1/x</strong> or <strong>y = k/x</strong> where <em>k</em> is a constant.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a job to complete. The more people working on it, the less time it takes. Time is inversely proportional to the number of workers.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the constant of proportionality",
      "problem": "If y is inversely proportional to x and y = 6 when x = 4, find the constant k.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of x?",
          "answer": "4",
          "feedback": "Correct! x is 4."
        },
        {
          "id": "q2",
          "prompt": "What is the value of y?",
          "answer": "6",
          "feedback": "Correct! y is 6."
        },
        {
          "id": "q3",
          "prompt": "Calculate k using y = k/x. What is k?",
          "answer": "24",
          "feedback": "Correct! k = y * x = 6 * 4 = 24."
        }
      ]
    }
  },
  "step3": {
    "title": "Using the ∝ Symbol",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The symbol <strong>∝</strong> means \"is proportional to.\" For example, <em>y ∝ x</em> means y is directly proportional to x. Similarly, <em>y ∝ 1/x</em> means y is inversely proportional to x. We use this symbol to set up equations before solving.</p>",
    "workedExample": {
      "title": "Worked Example: Writing proportionality",
      "problem": "Write down the equation for y when y is directly proportional to x with constant k.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How do you write 'y is proportional to x' using ∝?",
          "answer": "y ∝ x",
          "feedback": "Correct!"
        },
        {
          "id": "q2",
          "prompt": "Write the equation including the constant k.",
          "answer": "y = kx",
          "feedback": "Correct!"
        }
      ]
    }
  },
  "step4": {
    "title": "Identifying Direct vs Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">It's important to recognize whether quantities are directly or inversely proportional from context or description.</p>",
    "workedExample": {
      "title": "Worked Example: Identify proportion type",
      "problem": "If speed increases as time taken to travel a fixed distance decreases, is speed directly or inversely proportional to time?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is speed ∝ time or speed ∝ 1/time?",
          "answer": "speed ∝ 1/time",
          "feedback": "Correct! Speed and time are inversely proportional because if speed doubles, time halves."
        }
      ]
    }
  },
  "step5": {
    "title": "Solving Problems Involving Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the formula <em>y = kx</em> to solve problems by first finding the constant of proportionality and then finding missing values.</p>",
    "workedExample": {
      "title": "Worked Example: Using direct proportion",
      "problem": "y is directly proportional to x. When x = 5, y = 20. Find y when x = 8.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the constant k using y = kx when x=5 and y=20.",
          "answer": "4",
          "feedback": "Correct! k = 20/5 = 4."
        },
        {
          "id": "q2",
          "prompt": "Substitute k and x=8 to find y.",
          "answer": "32",
          "feedback": "Correct! y = 4 × 8 = 32."
        }
      ]
    }
  },
  "step6": {
    "title": "Solving Problems Involving Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For inverse proportion, use the formula <em>y = k/x</em>. Find the constant k first, then use it to find the missing variable.</p>",
    "workedExample": {
      "title": "Worked Example: Using inverse proportion",
      "problem": "y is inversely proportional to x. When x = 3, y = 12. Find y when x = 6.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate k using y = k/x when x = 3 and y = 12.",
          "answer": "36",
          "feedback": "Correct! k = y × x = 12 × 3 = 36."
        },
        {
          "id": "q2",
          "prompt": "Find y when x = 6 using y = k/x.",
          "answer": "6",
          "feedback": "Correct! y = 36 / 6 = 6."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which equation correctly shows an inverse proportion relationship between y and x?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>y = 5x</span>",
            "isCorrect": false,
            "explanation": "This shows direct proportion, not inverse."
          },
          {
            "id": "b",
            "label": "<span>y = 5/x</span>",
            "isCorrect": true,
            "explanation": "Correct! y is inversely proportional to x."
          },
          {
            "id": "c",
            "label": "<span>y = x + 5</span>",
            "isCorrect": false,
            "explanation": "This is a linear relationship, not proportional."
          },
          {
            "id": "d",
            "label": "<span>y = 5 - x</span>",
            "isCorrect": false,
            "explanation": "This is not a proportional relationship."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>When two quantities increase at the <span class=\"font-semibold\">_____</span> rate, they are in direct proportion.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "same",
                "label": "same",
                "isCorrect": true,
                "feedback": "Correct! Direct proportion involves increasing or decreasing at the same rate."
              },
              {
                "value": "different",
                "label": "different",
                "isCorrect": false,
                "feedback": "Try again. Direct proportion means the same rate."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>In inverse proportion, if one quantity doubles, the other <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "halves",
                "label": "halves",
                "isCorrect": true,
                "feedback": "Correct! One quantity halves as the other doubles in inverse proportion."
              },
              {
                "value": "doubles",
                "label": "doubles",
                "isCorrect": false,
                "feedback": "Try again. One quantity halves when the other doubles in inverse proportion."
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A car’s speed is directly proportional to the distance it travels in a fixed time. The speed is also inversely proportional to the time taken for a fixed distance.</span><br/><span>(a) If a car travels 60 km in 1 hour, find the distance it will travel in 3 hours at the same speed.</span><br/><span>(b) If the car travels a fixed distance of 120 km, find the time taken when the speed is 40 km/h.</span>",
      "hint": "Use y = kx for direct proportion and y = k/x for inverse proportion. Find k using given values, then solve for unknowns.",
      "mustHaveKeywords": ["direct proportion", "inverse proportion", "constant of proportionality", "formula", "substitute"],
      "optionalKeywords": ["units", "check answers"],
      "modelAnswer": "<span>(a) Distance ∝ time (direct proportion). Given: distance = 60 km, time = 1 hour. k = distance / time = 60 / 1 = 60.<br/>Distance after 3 hours = k × 3 = 60 × 3 = 180 km.<br/><br/>(b) Speed ∝ 1/time (inverse proportion). Given distance = 120 km (fixed), speed = 40 km/h.<br/>Use formula: speed = k / time → k = speed × time.<br/>First find time for speed 40 km/h: time = distance / speed = 120 / 40 = 3 hours.<br/>So k = 40 × 3 = 120.<br/>Answer: Time taken = 3 hours.</span>",
      "scaffoldPrompts": [
        "Identify which quantities are directly proportional.",
        "Calculate the constant k for direct proportion.",
        "Use k to find the unknown distance.",
        "Identify the inverse proportion relationship for speed and time.",
        "Calculate the time taken using speed and distance."
      ]
    }
  }
};