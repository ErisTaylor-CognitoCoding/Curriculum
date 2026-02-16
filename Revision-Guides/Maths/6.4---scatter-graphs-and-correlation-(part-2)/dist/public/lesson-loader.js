window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.4 - Scatter graphs and correlation (Part 2)",
  "strapline": "Learn how to plot scatter graphs from bivariate data, identify types and strength of correlation, and understand the implications of correlation.",
  "learningObjectives": [
    "Students should construct scatter graphs by plotting bivariate data as coordinate points to identify relationships between two variables (Maths 6.4)",
    "Students should distinguish between positive correlation, negative correlation, and no correlation in scatter graphs (Maths 6.4)",
    "Students should describe the strength of correlation as strong, weak, or zero, and understand that correlation does not necessarily imply causation (Maths 6.4)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = \u03C0r\u00B2 (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><line x1='70' y1='230' x2='320' y2='80' stroke='green' stroke-width='3'/><text x='60' y='240' font-family='sans-serif' font-size='12'>Negative correlation</text><line x1='70' y1='180' x2='320' y2='230' stroke='red' stroke-width='3'/><text x='60' y='170' font-family='sans-serif' font-size='12'>Positive correlation</text><circle cx='180' cy='150' r='5' fill='blue'/><text x='150' y='140' font-family='sans-serif' font-size='12'>Bivariate Data Points</text></svg>",
  "step1": {
    "title": "Concept: Understanding Bivariate Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Bivariate data consists of two related sets of values. Each pair includes two variables measured together, like <em>height and shoe size</em> or <em>study time and test scores</em>. We use scatter graphs to plot these pairs as coordinate points on an x-y plane.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine plotting the weight and height of your classmates on a graph. Each point represents one person’s weight on the x-axis and height on the y-axis.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Bivariate Data Points",
      "problem": "Given the data pairs: (2, 3), (4, 5), (1, 2). Plot these points on a scatter graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the x and y coordinates of the first point?",
          "answer": "2, 3",
          "feedback": "Correct. The x-coordinate is 2 and the y-coordinate is 3."
        },
        {
          "id": "q2",
          "prompt": "Place a point where x=4 and y=5 on the graph. What is its coordinate pair?",
          "answer": "4, 5",
          "feedback": "Correct! This point represents the pair (4, 5)."
        },
        {
          "id": "q3",
          "prompt": "Finally, plot the point (1, 2). What are the coordinates?",
          "answer": "1, 2",
          "feedback": "Well done! All three points are now plotted."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Recognising Positive Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Positive correlation happens when two variables increase together. On a scatter graph, this forms an upward slope from left to right, showing that as one variable gets bigger, so does the other.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about how the more hours you study, the higher your test scores might be. Both increase together.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Positive Correlation",
      "problem": "Look at these points: (1, 2), (2, 4), (3, 6). Do they show positive correlation?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the y-value increase as the x-value increases?",
          "answer": "Yes",
          "feedback": "Correct! The y-values increase as x-values do."
        },
        {
          "id": "q2",
          "prompt": "Do the points form an upward slope from left to right?",
          "answer": "Yes",
          "feedback": "Exactly, indicating positive correlation."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Recognising Negative Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Negative correlation occurs when one variable increases while the other decreases. The points will make a downward slope from left to right on the scatter graph.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If time spent watching TV increases, test scores may decrease. As one goes up, the other goes down.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Negative Correlation",
      "problem": "Consider these points: (1, 6), (2, 4), (3, 2). Do they show negative correlation?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the y-value decrease as the x-value increases?",
          "answer": "Yes",
          "feedback": "Correct! The y-values decrease as x-values increase."
        },
        {
          "id": "q2",
          "prompt": "Do the points form a downward slope from left to right?",
          "answer": "Yes",
          "feedback": "That's right! This means the correlation is negative."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: No Correlation in Scatter Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">No correlation means there is no clear relationship between the two variables. The points appear scattered randomly without a clear upward or downward pattern.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">The number of pets someone has probably has no connection to their height — the points on the graph show no pattern.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying No Correlation",
      "problem": "Examine these points: (1, 3), (2, 1), (3, 4), (4, 2). Is there a correlation?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Do the points form an upward or downward slope?",
          "answer": "No",
          "feedback": "Correct, they do not follow a slope."
        },
        {
          "id": "q2",
          "prompt": "Is there a clear pattern between x and y values?",
          "answer": "No",
          "feedback": "Yes, there is no correlation."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Describing the Strength of Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The strength of correlation tells us how closely the data points follow the trend line. It can be <strong>strong</strong> (points tightly clustered), <strong>weak</strong> (points loosely scattered around the trend), or <strong>zero</strong> (no pattern at all).</p><p><strong>Important:</strong> Correlation does NOT mean causation; just because two variables move together does not mean one causes the other.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Even if ice cream sales and shark attacks both increase in summer (strong correlation), one does not cause the other — both relate to warmer weather.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Judging the Strength of Correlation",
      "problem": "Look at the scatter graph below (imagine points either tightly close to a line, loosely spread, or randomly scattered). Identify the correlation strength:",
      "questions": [
        {
          "id": "q1",
          "prompt": "If points are very close to an upward line, is the correlation strong, weak, or zero?",
          "answer": "strong",
          "feedback": "Correct! Points close to a line show strong correlation."
        },
        {
          "id": "q2",
          "prompt": "If points are loosely spread around a line, is the correlation strong, weak, or zero?",
          "answer": "weak",
          "feedback": "Yes, this is weak correlation."
        },
        {
          "id": "q3",
          "prompt": "If points are randomly scattered with no pattern, what is the correlation strength?",
          "answer": "zero",
          "feedback": "Correct! No clear pattern means zero correlation."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to construct a scatter graph from bivariate data and describe how to identify positive, negative, or no correlation, including how to describe the strength of any correlation.</span>",
      "hint": "Remember to mention plotting points, slope direction, clustering of points, and the difference between correlation and causation.",
      "mustHaveKeywords": ["scatter graph", "bivariate data", "positive correlation", "negative correlation", "no correlation", "strong", "weak", "correlation does not imply causation"],
      "optionalKeywords": ["trend line", "causation", "scatter points"],
      "modelAnswer": "<span>To construct a scatter graph, plot each paired set of bivariate data as coordinate points on an x-y axis. Positive correlation is identified by points forming an upward slope, where increasing x corresponds to increasing y. Negative correlation is when points form a downward slope, meaning as x increases, y decreases. No correlation shows points scattered randomly with no clear pattern. The strength of correlation depends on how closely points cluster around a line: 'strong' if tightly clustered, 'weak' if loosely spread, and 'zero' if no trend. Importantly, correlation does not imply one variable causes the other.</span>",
      "scaffoldPrompts": ["Think about how to plot each data pair", "Then consider how to tell if points slope up or down", "Next, evaluate how tightly points cluster", "Finally, explain why correlation is not causation"]
    }
  }
};