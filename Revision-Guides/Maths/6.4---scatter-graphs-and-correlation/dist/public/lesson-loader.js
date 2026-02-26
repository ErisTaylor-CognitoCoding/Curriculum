window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.4 - Scatter graphs and correlation",
  "strapline": "Learn to construct, interpret scatter graphs, identify correlations, and use lines of best fit for predictions.",
  "learningObjectives": [
    "Students should be able to construct and interpret scatter graphs, identifying positive, negative, and zero correlation between two variables (Maths 6.4)",
    "Students should be able to understand and describe the strength of correlation relationships in scatter graphs (Maths 6.4)",
    "Students should be able to draw and use lines of best fit to make predictions from scatter graphs (Maths 6.4)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <rect x='50' y='30' width='300' height='220' fill='#f9f9f9' stroke='#333'/>\
    <line x1='70' y1='230' x2='340' y2='60' stroke='#007acc' stroke-width='2' />\
    <circle cx='90' cy='210' r='5' fill='#d94f4f' />\
    <circle cx='125' cy='180' r='5' fill='#d94f4f'/>\
    <circle cx='160' cy='160' r='5' fill='#d94f4f'/>\
    <circle cx='200' cy='130' r='5' fill='#d94f4f'/>\
    <circle cx='235' cy='105' r='5' fill='#d94f4f'/>\
    <circle cx='270' cy='80' r='5' fill='#d94f4f'/>\
    <text x='200' y='270' text-anchor='middle' font-family='sans-serif'>Scatter Graph Example</text>\
    <text x='10' y='150' transform='rotate(-90 10,150)' font-family='sans-serif'>Variable Y</text>\
    <text x='200' y='290' font-family='sans-serif'>Variable X</text>\
  </svg>",
  "step1": {
    "title": "Concept: What is a Scatter Graph?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>scatter graph</strong> plots points on a coordinate grid to show the relationship between two variables. Each point represents an ordered pair <em>(x, y)</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine plotting stars in the sky where each star’s position shows two traits, like height and weight, helping to see if taller people weigh more or less.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Points",
      "problem": "You have data points for hours studied (x) and test score (y): (2, 60), (4, 75), (6, 85). Plot them on a scatter graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Where do you plot the point for (2, 60)? Enter the x-coordinate.",
          "answer": "2",
          "feedback": "Correct. The x-coordinate is 2."
        },
        {
          "id": "q2",
          "prompt": "Now enter the y-coordinate for this point.",
          "answer": "60",
          "feedback": "Correct. The y-coordinate is 60."
        },
        {
          "id": "q3",
          "prompt": "Plot the point for (4, 75). What are the coordinates?",
          "answer": "4, 75",
          "feedback": "Great, you have correctly identified the coordinates."
        },
        {
          "id": "q4",
          "prompt": "Finally, plot (6, 85). What are the x and y values?",
          "answer": "6, 85",
          "feedback": "Excellent! You’ve plotted all points correctly."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Correlation indicates how two variables are related. It can be <strong>positive</strong> (both increase), <strong>negative</strong> (one increases, the other decreases), or <strong>zero</strong> (no relationship).</p>",
    "workedExample": {
      "title": "Worked Example: Identifying Correlation Types",
      "problem": "Look at the following four scatter graphs. Identify the correlation type.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Graph 1 has points rising left to right. Which correlation is this?",
          "answer": "positive",
          "feedback": "Correct! It is positive correlation."
        },
        {
          "id": "q2",
          "prompt": "Graph 2 has points falling left to right. Which correlation is this?",
          "answer": "negative",
          "feedback": "Well done, that is negative correlation."
        },
        {
          "id": "q3",
          "prompt": "Graph 3 has points scattered with no visible pattern. Which correlation?",
          "answer": "zero",
          "feedback": "Correct! This shows zero correlation."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> graph plots points showing the relationship between two variables.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "scatter", "label": "scatter", "isCorrect": true, "feedback": "Correct!"},
              {"value": "bar", "label": "bar", "isCorrect": false, "feedback": "Incorrect, bar charts represent frequency."},
              {"value": "pie", "label": "pie", "isCorrect": false, "feedback": "A pie chart shows proportions, not relationships."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Positive correlation means both variables <span class=\"font-semibold\">_____</span> together.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "increase", "label": "increase", "isCorrect": true, "feedback": "Correct!"},
              {"value": "decrease", "label": "decrease", "isCorrect": false, "feedback": "Incorrect, positive correlation means both increase."},
              {"value": "stay the same", "label": "stay the same", "isCorrect": false, "feedback": "That describes zero correlation."}
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Determining Strength of Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <em>strength</em> of the correlation depends on how closely points lie to a straight line. <strong>Strong</strong> correlation means points lie close; <strong>weak</strong> correlation means points spread out more.</p>",
    "workedExample": {
      "title": "Worked Example: Strength of Correlation",
      "problem": "Given two scatter graphs, decide which shows stronger correlation.",
      "questions": [
        {
          "id": "q1",
          "prompt": "If points are closely grouped near a line, is the correlation strong or weak?",
          "answer": "strong",
          "feedback": "Correct! Close points mean strong correlation."
        },
        {
          "id": "q2",
          "prompt": "If points are widely scattered with no clear line, is correlation strong or weak?",
          "answer": "weak",
          "feedback": "Right, scattered points indicate weak correlation."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Line of Best Fit",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>line of best fit</strong> is a straight line that best represents the data trend on a scatter graph. It tries to have roughly equal points above and below.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like drawing a line through a flock of birds in flight so the line is as close as possible to all of them, showing their general direction.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Drawing a Line of Best Fit",
      "problem": "Draw a line of best fit for the points: (1,2), (2,3), (3,4), (4,6), (5,5) on a scatter graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Visually estimate a line that balances points above and below. What is the approximate slope (rise over run)?",
          "answer": "1",
          "feedback": "Correct. The slope is about 1."
        },
        {
          "id": "q2",
          "prompt": "Estimate the y-intercept (value when x=0) of the line.",
          "answer": "1",
          "feedback": "Yes, approximately 1."
        }
      ]
    }
  },
  "step6": {
    "title": "Using Line of Best Fit to Make Predictions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use the line of best fit to predict unknown values by substituting x-values into the line equation.</p>",
    "workedExample": {
      "title": "Worked Example: Prediction Using Line of Best Fit",
      "problem": "Given the line of best fit equation y = x + 1, predict the y value when x = 7.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Substitute x = 7 in y = x + 1. What is y?",
          "answer": "8",
          "feedback": "Correct! y = 7 + 1 = 8."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: Multiple Choice Questions (MCQ)",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following best describes a negative correlation in a scatter graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Points trend upwards left to right</span>",
            "isCorrect": false,
            "explanation": "This indicates positive correlation, not negative."
          },
          {
            "id": "b",
            "label": "<span>Points trend downwards left to right</span>",
            "isCorrect": true,
            "explanation": "Correct. Negative correlation means one variable increases as the other decreases."
          },
          {
            "id": "c",
            "label": "<span>Points are scattered randomly with no pattern</span>",
            "isCorrect": false,
            "explanation": "That describes zero correlation."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to construct a scatter graph from data, describe the type and strength of correlation shown, and how to use a line of best fit to make predictions.</span>",
      "hint": "Remember to mention plotting points, types of correlation, strength indicators, and how the line of best fit is drawn and used.",
      "mustHaveKeywords": ["scatter graph", "correlation", "line of best fit", "prediction", "strength"],
      "optionalKeywords": ["ordered pairs", "equal number of points above and below line", "positive", "negative", "zero"],
      "modelAnswer": "<span>To construct a scatter graph, plot each ordered pair from your data on a coordinate grid, with one variable on the x-axis and the other on the y-axis. By looking at the pattern of points, you can describe correlation: positive if points trend upwards, negative if they trend downwards, or zero if no pattern exists. The strength of correlation depends on how tightly the points cluster around a trend line—a strong correlation has points close to the line, a weak one has more spread out points. A line of best fit is drawn roughly through the middle of the points so there are equal numbers above and below. This line can then be used to make predictions by substituting x-values into its equation to estimate y-values.</span>",
      "scaffoldPrompts": [
        "Start by explaining how to plot the data points",
        "Describe how to identify types of correlation from the graph",
        "Discuss how to judge the strength of correlation",
        "Explain what a line of best fit is and how to draw it",
        "Show how to use the line of best fit equation for predictions"
      ]
    }
  }
};