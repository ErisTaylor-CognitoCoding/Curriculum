window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.3 - Direct and inverse proportion (graphical and algebraic)",
  "strapline": "Understand how variables relate through direct and inverse proportion using graphs and equations.",
  "learningObjectives": [
    "Students should recognise and interpret graphs that illustrate direct and inverse proportion (Maths 3.3)",
    "Students should construct and interpret equations for direct and inverse proportion in the form y = kx and y = k/x (Maths 3.3)",
    "Students should solve problems involving direct and inverse proportion using both graphical and algebraic methods (Maths 3.3)"
  ],
  "keyFormulas": [
    "y = kx (Direct Proportion)",
    "y = k/x (Inverse Proportion)",
    "xy = k (Equivalent form of inverse proportion)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='340' height='240' fill='#f9f9f9' stroke='#666' stroke-width='1'/><line x1='50' y1='260' x2='350' y2='260' stroke='#000' stroke-width='2'/><line x1='50' y1='260' x2='50' y2='40' stroke='#000' stroke-width='2'/><text x='360' y='265' font-family='Arial' font-size='14'>x</text><text x='40' y='30' font-family='Arial' font-size='14'>y</text><line x1='50' y1='200' x2='350' y2='60' stroke='#1a73e8' stroke-width='3'/><text x='355' y='65' font-family='Arial' font-size='12' fill='#1a73e8'>y = kx (Direct)</text><path d='M50 250 Q150 100 350 60' fill='none' stroke='#e85141' stroke-width='3'/><text x='350' y='50' font-family='Arial' font-size='12' fill='#e85141'>y = k/x (Inverse)</text></svg>",
  "step1": {
    "title": "Concept: Understanding Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct proportion means that as one variable increases, the other increases at the same rate. This is represented by the equation <strong>y = kx</strong> where <em>k</em> is the constant of proportionality. The graph is a straight line passing through the origin.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you buy apples at a fixed price per kilo, the cost (y) is directly proportional to the weight (x). Double the weight, double the cost.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding k in Direct Proportion",
      "problem": "Given that y is directly proportional to x and when x = 4, y = 12, find the constant of proportionality k.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the equation showing direct proportion between y and x.",
          "answer": "y = kx",
          "feedback": "Correct! y = kx represents direct proportion."
        },
        {
          "id": "q2",
          "prompt": "Substitute x = 4 and y = 12 into the equation y = kx.",
          "answer": "12 = 4k",
          "feedback": "Correct substitution leads to 12 = 4k."
        },
        {
          "id": "q3",
          "prompt": "Solve 12 = 4k to find k.",
          "answer": "3",
          "feedback": "Correct. k = 3, the constant of proportionality."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Inverse proportion occurs when one variable increases, the other decreases at a reciprocal rate. This is expressed as <strong>y = k/x</strong> or equivalently <strong>xy = k</strong>. The graph is a hyperbola and never touches the axes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a task takes less time (y) the more people (x) are working on it, the relationship is inverse. Double the people, halve the time.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding k in Inverse Proportion",
      "problem": "y is inversely proportional to x. When x = 5, y = 8. Find k.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the equation for inverse proportion between y and x.",
          "answer": "y = k/x",
          "feedback": "Correct. This is the general formula for inverse proportion."
        },
        {
          "id": "q2",
          "prompt": "Substitute x = 5 and y = 8 into y = k/x.",
          "answer": "8 = k/5",
          "feedback": "Great! Substitution gives 8 = k/5."
        },
        {
          "id": "q3",
          "prompt": "Solve 8 = k/5 to find k.",
          "answer": "40",
          "feedback": "Correct! Multiplying both sides by 5 gives k = 40."
        }
      ]
    }
  },
  "step3": {
    "title": "Graph Interpretation: Identifying Proportion Types",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Graphs help us identify if two variables are in direct or inverse proportion. A straight line through the origin indicates direct proportion, while a curve (hyperbola) approaching the axes indicates inverse proportion.</p>",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which graph represents a direct proportion?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>A straight line through the origin</span>",
            "isCorrect": true,
            "explanation": "Correct! Direct proportion graphs are straight lines through the origin."
          },
          {
            "id": "b",
            "label": "<span>An upward curve approaching but not touching axes</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That's the shape of an inverse proportion graph."
          },
          {
            "id": "c",
            "label": "<span>A horizontal straight line</span>",
            "isCorrect": false,
            "explanation": "Incorrect. A horizontal line means y is constant, not proportional."
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>In direct proportion, the equation is <em>y = <span class=\"font-semibold\">_____</span>x</em>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "k",
                "label": "k",
                "isCorrect": true,
                "feedback": "Correct! k is the constant of proportionality."
              },
              {
                "value": "c",
                "label": "c",
                "isCorrect": false,
                "feedback": "Incorrect. The constant of proportionality is denoted by k."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>For inverse proportion, the product <em>xy</em> is <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "constant",
                "label": "constant",
                "isCorrect": true,
                "feedback": "Correct! The product xy remains constant (k) in inverse proportion."
              },
              {
                "value": "variable",
                "label": "variable",
                "isCorrect": false,
                "feedback": "Incorrect. In inverse proportion, xy remains constant."
              }
            ]
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Interactive Worked Example: Solve a Direct Proportion Problem",
    "explanation": "<p>Suppose y is directly proportional to x. When x = 7, y = 21.</p>",
    "workedExample": {
      "problem": "Find y when x = 10.",
      "questions": [
        {
          "id": "wex1-q1",
          "prompt": "First, find the constant of proportionality k using y = kx.",
          "answer": "3",
          "feedback": "Well done! k = 21 ÷ 7 = 3."
        },
        {
          "id": "wex1-q2",
          "prompt": "Using k, calculate y when x = 10.",
          "answer": "30",
          "feedback": "Correct! y = 3 × 10 = 30."
        }
      ]
    }
  },
  "step6": {
    "title": "Interactive Worked Example: Solve an Inverse Proportion Problem",
    "explanation": "<p>Suppose y is inversely proportional to x. When x = 6, y = 5.</p>",
    "workedExample": {
      "problem": "Find y when x = 3.",
      "questions": [
        {
          "id": "wex2-q1",
          "prompt": "Calculate the constant k using xy = k.",
          "answer": "30",
          "feedback": "Correct! k = 6 × 5 = 30."
        },
        {
          "id": "wex2-q2",
          "prompt": "Using k, find y when x = 3.",
          "answer": "10",
          "feedback": "Good job! y = 30 ÷ 3 = 10."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A car travels at a speed directly proportional to the time taken to complete a trip. If the trip takes 2 hours at 60 km/h, find the speed when the trip takes 5 hours. Also, if the speed is inversely proportional to the time, determine the speed when the trip takes 5 hours.</span>",
      "hint": "Use y = kx for direct proportion and y = k/x for inverse proportion. Find k first using the given data.",
      "mustHaveKeywords": ["constant of proportionality", "direct proportion", "inverse proportion", "solve for k"],
      "optionalKeywords": ["graph interpretation", "equation substitution"],
      "modelAnswer": "<span>First, identify if speed is directly or inversely proportional to time as described. For direct proportion, use y = kx; substitute speed and time to find k, then find speed for 5 hours. For inverse proportion, use y = k/x; find k similarly and then the speed for 5 hours.</span>",
      "scaffoldPrompts": ["Write the direct proportion equation and find k", "Calculate speed for 5 hours using direct proportion", "Write the inverse proportion equation and find k", "Calculate speed for 5 hours using inverse proportion"]
    }
  }
};