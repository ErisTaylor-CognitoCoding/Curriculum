window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.4 - Scatter graphs and correlation",
  "strapline": "Learn how to construct, interpret scatter graphs, identify types and strengths of correlation, and draw lines of best fit to make predictions.",
  "learningObjectives": [
    "Students should be able to construct and interpret scatter graphs, identifying positive, negative, and zero correlation between two variables (Maths 6.4)",
    "Students should be able to understand and describe the strength of correlation relationships in scatter graphs (Maths 6.4)",
    "Students should be able to draw and use lines of best fit to make predictions from scatter graphs (Maths 6.4)"
  ],
  "keyFormulas": [
    "Conceptual formulas: No strict formula, but understanding correlation direction and strength is key",
    "Line of Best Fit can be approximated by balancing points above and below the line",
    "No numeric formula given in spec for correlation coefficient"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>   <rect x='40' y='30' width='320' height='240' fill='#fff7e6' stroke='#333'/>   <line x1='60' y1='250' x2='350' y2='50' stroke='#888' stroke-width='2' id='lineOfBestFit'/>   <circle cx='80' cy='230' r='5' fill='#1f77b4'/>   <circle cx='120' cy='190' r='5' fill='#1f77b4'/>   <circle cx='160' cy='160' r='5' fill='#1f77b4'/>   <circle cx='200' cy='110' r='5' fill='#1f77b4'/>   <circle cx='240' cy='80' r='5' fill='#1f77b4'/>   <circle cx='280' cy='60' r='5' fill='#1f77b4'/>   <text x='200' y='20' font-family='sans-serif' font-size='16' text-anchor='middle'>Example Scatter Graph with Line of Best Fit</text>   <text x='20' y='275' font-family='sans-serif' font-size='12'>Variable X</text>   <text x='5' y='50' font-family='sans-serif' font-size='12' transform='rotate(-90 15,50)'>Variable Y</text> </svg>",
  "step1": {
    "title": "What is a Scatter Graph?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A scatter graph is a diagram that shows the relationship between two variables by plotting points representing ordered pairs on a coordinate grid.</p><p>Each point represents one measurement of both variables.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine marking the height and weight of students on a grid: height on the x-axis, weight on the y-axis. Each student is one point.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Points on a Scatter Graph",
      "problem": "Plot the points (2, 5), (4, 7), and (6, 3) on a scatter graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Where do you plot the point (2, 5)? Enter the coordinates for x then y.",
          "answer": "2,5",
          "feedback": "Correct, plot this point 2 on the x-axis and 5 on the y-axis."
        },
        {
          "id": "q2",
          "prompt": "Where do you plot (4, 7)? Enter x and y coordinates.",
          "answer": "4,7",
          "feedback": "Well done! This point goes at x=4, y=7."
        },
        {
          "id": "q3",
          "prompt": "Where do you plot (6, 3)? Enter x and y coordinates.",
          "answer": "6,3",
          "feedback": "Correct! Point plotted at x=6, y=3."
        }
      ]
    }
  },
  "step2": {
    "title": "What is Correlation?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Correlation shows how closely two variables are related in a scatter graph. It can be:</p><ul><li><strong>Positive</strong>: Both variables increase together.</li><li><strong>Negative</strong>: One increases as the other decreases.</li><li><strong>Zero</strong>: No obvious relationship.</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of correlation like the relationship between hours studied and exam scores (positive), or time spent watching TV and exam scores (possibly negative), or shoe size and test score (zero).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Correlation",
      "problem": "Look at this set of points plotted for variables X and Y:",
      "questions": [
        {
          "id": "q1",
          "prompt": "Do these points show a positive, negative, or zero correlation?",
          "answer": "positive",
          "feedback": "Correct. The points trend upwards, showing a positive correlation."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='50' y='50' width='300' height='200' fill='#eef6ff' stroke='#333' />  <circle cx='80' cy='230' r='6' fill='#007acc' />  <circle cx='130' cy='190' r='6' fill='#007acc' />  <circle cx='180' cy='150' r='6' fill='#007acc' />  <circle cx='230' cy='110' r='6' fill='#007acc' />  <circle cx='280' cy='70' r='6' fill='#007acc' />  <text x='200' y='280' font-family='sans-serif' font-size='14' text-anchor='middle'>Positive Correlation Example</text>  <line x1='60' y1='250' x2='320' y2='40' stroke='#007acc' stroke-width='2' stroke-dasharray='5,5'/></svg>"
    }
  },
  "step3": {
    "title": "Describing Strength of Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The strength of correlation shows how tightly clustered points are around an imaginary trend line:</p><ul><li><strong>Strong:</strong> Points lie close to a straight line.</li><li><strong>Moderate:</strong> Points show a clear trend but with some scatter.</li><li><strong>Weak:</strong> Points are very scattered with little trend.</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine looking at footprints on a beach. Sharp clear footsteps show a strong path (strong correlation). If the footprints get erratic, the path is weaker (weak correlation).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Strength of Correlation",
      "problem": "Look at these two scatter graphs A and B. Which shows stronger correlation?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is graph A or B showing stronger correlation?",
          "answer": "A",
          "feedback": "Correct. Graph A has points closer to a line, so stronger correlation."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>  <rect x='20' y='20' width='160' height='160' fill='#f9f9f9' stroke='#333' />  <circle cx='40' cy='160' r='5' fill='#d62728' />  <circle cx='70' cy='130' r='5' fill='#d62728' />  <circle cx='100' cy='100' r='5' fill='#d62728' />  <circle cx='130' cy='70' r='5' fill='#d62728' />  <circle cx='160' cy='40' r='5' fill='#d62728' />  <text x='100' y='190' font-family='sans-serif' font-size='12' text-anchor='middle'>Graph A (Strong Correlation)</text>  <rect x='220' y='20' width='160' height='160' fill='#f9f9f9' stroke='#333' />  <circle cx='240' cy='150' r='5' fill='#ff7f0e' />  <circle cx='270' cy='140' r='5' fill='#ff7f0e' />  <circle cx='300' cy='120' r='5' fill='#ff7f0e' />  <circle cx='330' cy='100' r='5' fill='#ff7f0e' />  <circle cx='360' cy='80' r='5' fill='#ff7f0e' />  <circle cx='250' cy='90' r='5' fill='#ff7f0e' />  <circle cx='280' cy='110' r='5' fill='#ff7f0e' />  <text x='300' y='190' font-family='sans-serif' font-size='12' text-anchor='middle'>Graph B (Weak/Moderate)</text></svg>"
    }
  },
  "step4": {
    "title": "What is the Line of Best Fit?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The line of best fit is a straight line drawn approximately through the middle of all the points on a scatter graph. It shows the overall trend and helps make predictions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a rope stretched tightly between points on a wall so that equal numbers of points lie above and below the rope.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Drawing a Line of Best Fit",
      "problem": "Look at this scatter graph. Try to draw a line that balances the points above and below it.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Suggest two points through which your line of best fit passes (enter as x1,y1 and x2,y2).",
          "answer": "2,7 8,3",
          "feedback": "Good attempt! This line should have roughly equal points above and below."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='40' y='30' width='320' height='240' fill='#fefefe' stroke='#333'/>  <circle cx='70' cy='220' r='6' fill='#2ca02c' />  <circle cx='110' cy='180' r='6' fill='#2ca02c' />  <circle cx='160' cy='150' r='6' fill='#2ca02c' />  <circle cx='220' cy='110' r='6' fill='#2ca02c' />  <circle cx='280' cy='90' r='6' fill='#2ca02c' />  <text x='200' y='20' font-family='sans-serif' font-size='16' text-anchor='middle'>Scatter Graph to Add Line of Best Fit</text></svg>"
    }
  },
  "step5": {
    "title": "Using the Line of Best Fit to Make Predictions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use the line of best fit to predict values of one variable given the other. Find the value on the x-axis, go up to the line, then across to the y-axis.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like guessing how tall a plant will be after 5 weeks, based on how tall it was in previous weeks.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Predicting from a Line of Best Fit",
      "problem": "Use the line of best fit which passes through points (2,7) and (8,3). Predict the y value when x = 5.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the slope (gradient) of the line. (slope = change in y ÷ change in x)",
          "answer": "-0.67",
          "feedback": "Correct, slope = (3 - 7) / (8 - 2) = -4/6 = -0.67"
        },
        {
          "id": "q2",
          "prompt": "Calculate the y-intercept using the point (2,7) and your slope (y = mx + c).",
          "answer": "8.34",
          "feedback": "Correct, rearranged: c = y - mx = 7 - (-0.67 × 2) = 7 + 1.34 = 8.34"
        },
        {
          "id": "q3",
          "prompt": "Using y = mx + c, find y when x = 5.",
          "answer": "5",
          "feedback": "Correct, y = -0.67×5 + 8.34 = -3.35 + 8.34 = 5 (approx)"
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how you would use a scatter graph to identify if there is a correlation between two variables, describe the strength of correlation, and use a line of best fit to make a prediction.</span>",
      "hint": "Remember to include how to plot points, types of correlation, what the line of best fit represents, and steps to predict values.",
      "mustHaveKeywords": ["scatter graph", "correlation", "positive", "negative", "zero", "line of best fit", "prediction"],
      "optionalKeywords": ["strength", "trend", "plot points", "interpret", "approximate"],
      "modelAnswer": "<span>First, plot the data as points on a scatter graph, with one variable on the x-axis and the other on the y-axis. Look for a pattern of points to identify correlation: if both variables increase together, the correlation is positive; if one increases while the other decreases, it’s negative; and if there’s no clear pattern, the correlation is zero. The strength of the correlation is described by how closely the points cluster around a trend line. Then, draw a line of best fit approximately through the points, balancing points above and below the line. You can use this line to make predictions by finding a value on one axis and seeing where it meets the line to estimate the other variable.</span>",
      "scaffoldPrompts": ["Start by explaining how to construct a scatter graph.", "Next, describe the different types of correlation with examples.", "Then, explain how to judge strength of correlation.", "Finally, describe how to draw and use a line of best fit for prediction."]
    }
  }
};