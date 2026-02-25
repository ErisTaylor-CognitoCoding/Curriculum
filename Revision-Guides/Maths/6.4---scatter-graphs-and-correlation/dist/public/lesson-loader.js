window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.4 - Scatter graphs and correlation",
  "strapline": "Learn how to construct and interpret scatter graphs, identify types and strength of correlation, and use lines of best fit for predictions.",
  "learningObjectives": [
    "Students should be able to construct and interpret scatter graphs, identifying positive, negative, and zero correlation between two variables (Maths 6.4)",
    "Students should be able to understand and describe the strength of correlation relationships in scatter graphs (Maths 6.4)",
    "Students should be able to draw and use lines of best fit to make predictions from scatter graphs (Maths 6.4)"
  ],
  "keyFormulas": [
    "No specific formulas for scatter graphs; focus on plotting points and line properties",
    "Reminder: A straight line equation can be used for line of best fit predictions",
    "Reminder: Correlation does not imply causation"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='320' height='240' fill='#f8f8f8' stroke='#333'/><line x1='60' y1='220' x2='340' y2='80' stroke='#0074D9' stroke-width='2'/><circle cx='80' cy='200' r='5' fill='#FF4136'/><circle cx='120' cy='170' r='5' fill='#FF4136'/><circle cx='160' cy='140' r='5' fill='#FF4136'/><circle cx='200' cy='110' r='5' fill='#FF4136'/><circle cx='240' cy='90' r='5' fill='#FF4136'/><text x='200' y='270' font-family='sans-serif' font-size='14' text-anchor='middle'>Scatter Graph Showing Positive Correlation</text><line x1='50' y1='30' x2='50' y2='270' stroke='#000'/><line x1='50' y1='270' x2='370' y2='270' stroke='#000'/><text x='20' y='50' font-family='sans-serif' font-size='12'>Y</text><text x='370' y='290' font-family='sans-serif' font-size='12'>X</text></svg>",
  "step1": {
    "title": "Introduction: What is a Scatter Graph?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>scatter graph</strong> plots two sets of data as points on a coordinate grid. Each point shows the values of two variables. This allows us to see if there is a relationship between them.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you want to see if taller students tend to have bigger shoe sizes. Each student is a point on the graph, with height on one axis and shoe size on the other. The scatter graph helps us spot a pattern.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting a Scatter Graph",
      "problem": "Plot the points for these pairs of data: (2,3), (4,5), (6,8).",
      "questions": [
        {
          "id": "step1-q1",
          "prompt": "Enter the x-coordinate of the first point:",
          "answer": "2",
          "feedback": "Correct, the x-coordinate is 2."
        },
        {
          "id": "step1-q2",
          "prompt": "Enter the y-coordinate of the first point:",
          "answer": "3",
          "feedback": "Correct, the y-coordinate is 3."
        },
        {
          "id": "step1-q3",
          "prompt": "Now plot the second point's x-coordinate:",
          "answer": "4",
          "feedback": "Correct."
        },
        {
          "id": "step1-q4",
          "prompt": "Now plot the second point's y-coordinate:",
          "answer": "5",
          "feedback": "Correct."
        },
        {
          "id": "step1-q5",
          "prompt": "Plot the third point's x-coordinate:",
          "answer": "6",
          "feedback": "Correct."
        },
        {
          "id": "step1-q6",
          "prompt": "Plot the third point's y-coordinate:",
          "answer": "8",
          "feedback": "Well done! You have plotted all points."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Correlation Types",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Correlation tells us about the direction and strength of the relationship between two variables on a scatter graph. There are three main types:</p><ul><li><strong>Positive correlation</strong>: both variables increase together.</li><li><strong>Negative correlation</strong>: one variable increases while the other decreases.</li><li><strong>No correlation</strong>: no clear relationship between variables.</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about how study hours relate to test scores. Usually, more hours mean better scores (positive). But an increase in distractions might lower scores (negative). Sometimes two things just don't affect each other (no correlation).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Correlation Type",
      "problem": "Look at these points: (1,2), (2,4), (3,6), (4,8). What type of correlation do they show?",
      "questions": [
        {
          "id": "step2-q1",
          "prompt": "Are the points showing a positive, negative, or zero correlation?",
          "answer": "positive",
          "feedback": "Correct! As x increases, y increases, so the correlation is positive."
        }
      ]
    }
  },
  "step3": {
    "title": "Describing Strength of Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The strength of correlation tells us how tightly the points cluster around a trend line.</p><ul><li><em>Strong correlation</em>: Points are very close to a straight line.</li><li><em>Moderate correlation</em>: Points are somewhat close but with some scatter.</li><li><em>Weak correlation</em>: Points are widely spread with no clear pattern.</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine throwing darts at a board. A strong correlation is like hitting very close to the bullseye each time. A weak correlation is like the darts scattered all over.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rate the Correlation Strength",
      "problem": "Given a scatter graph with points mostly close to a straight line but some outliers, is the correlation strong, moderate, or weak?",
      "questions": [
        {
          "id": "step3-q1",
          "prompt": "Choose the correlation strength:",
          "answer": "moderate",
          "feedback": "Correct, when points mostly follow a line but some are off, this is moderate correlation."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Line of Best Fit",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>line of best fit</strong> is a straight line drawn through the scatter points that best represents the trend, with roughly equal numbers of points above and below the line.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">The line of best fit is like drawing a central path through a group of hikers walking mostly in a straight line but with some variations on either side.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Drawing a Line of Best Fit",
      "problem": "Look at plotted points and estimate where to draw the line of best fit.",
      "questions": [
        {
          "id": "step4-q1",
          "prompt": "Move the line so that about half the points are above and half below. Which general direction does the line take? (e.g. upward, downward, flat)",
          "answer": "upward",
          "feedback": "Correct, the line slopes upward, showing positive correlation."
        }
      ]
    }
  },
  "step5": {
    "title": "Using the Line of Best Fit to Make Predictions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Once the line of best fit is drawn, you can use it to predict values. For example, given an x-value, find the corresponding y-value on the line.</p>",
    "workedExample": {
      "title": "Worked Example: Predicting Values",
      "problem": "From the line of best fit, predict y when x = 7.",
      "questions": [
        {
          "id": "step5-q1",
          "prompt": "Using the graph, estimate the y-value corresponding to x = 7.",
          "answer": "8",
          "feedback": "Good estimate! The line of best fit suggests y is about 8 when x is 7."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to construct a scatter graph and use it to identify the type and strength of correlation between two variables. Describe how to draw a line of best fit and make predictions using it.</span>",
      "hint": "Remember to explain plotting points, types of correlation (positive, negative, zero), how to describe strength, and use of the line of best fit for predictions.",
      "mustHaveKeywords": ["scatter graph", "correlation", "positive", "negative", "zero", "strength", "line of best fit", "prediction"],
      "optionalKeywords": ["trend", "outliers"],
      "modelAnswer": "<span>To construct a scatter graph, plot ordered pairs of two variables on a coordinate grid. By observing the pattern of points, you can identify correlation: <strong>positive</strong> if points rise from left to right, <strong>negative</strong> if they fall, and <strong>zero</strong> if no pattern exists. The <em>strength</em> is described by how closely points cluster around a line — strong if close, weak if scattered. A <strong>line of best fit</strong> is drawn roughly through the middle of points, balancing those above and below, to show the trend. This line can be used to estimate or predict values of one variable given values of the other.</span>",
      "scaffoldPrompts": ["How do you plot the points?", "What indicates the type of correlation?", "How do you describe strength?", "What is the purpose of the line of best fit?", "How do you make predictions?"]
    }
  }
};