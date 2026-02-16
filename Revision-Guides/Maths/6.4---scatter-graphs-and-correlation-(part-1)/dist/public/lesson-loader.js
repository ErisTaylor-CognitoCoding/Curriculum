window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.4 - Scatter graphs and correlation (Part 1)",
  "strapline": "Learn how to construct and interpret scatter graphs to identify relationships between two variables, understand different types of correlation, and the concept that correlation does not imply causation.",
  "learningObjectives": [
    "Students should be able to construct scatter graphs by plotting bivariate data as coordinate points to identify relationships between two variables (Maths 6.4)",
    "Students should be able to interpret scatter graphs and distinguish between positive correlation, negative correlation, and no correlation (Maths 6.4)",
    "Students should be able to describe the strength of correlation as strong, weak, or zero, and understand that correlation does not necessarily imply causation (Maths 6.4)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f9f9f9' stroke='#000' stroke-width='2'/><line x1='50' y1='250' x2='350' y2='50' stroke='green' stroke-width='2'/><circle cx='100' cy='210' r='5' fill='blue'/><circle cx='150' cy='170' r='5' fill='blue'/><circle cx='200' cy='130' r='5' fill='blue'/><circle cx='250' cy='90' r='5' fill='blue'/><text x='180' y='280' font-family='sans-serif' font-size='14' text-anchor='middle'>Scatter Graph Example</text></svg>",
  "step1": {
    "title": "Concept: Introduction to Bivariate Data and Scatter Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Bivariate data consists of two variables measured for each item or individual, for example, the height and weight of students. By plotting these pairs of values as points on a grid, called a scatter graph, we can see patterns or relationships between the variables.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine plotting the position of birds in a park, where the x-axis is the distance from the pond and the y-axis is the height of the tree they are in. Each bird's position forms a coordinate point, helping you see if there is any relationship between distance from water and tree height preference.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting a Single Point",
      "problem": "Plot the coordinate point (3, 7) on an xy-grid.",
      "questions": [
        {
          "id": "q1",
          "prompt": "First, identify the value on the x-axis.",
          "answer": "3",
          "feedback": "Correct, the x-coordinate is 3."
        },
        {
          "id": "q2",
          "prompt": "Next, identify the value on the y-axis.",
          "answer": "7",
          "feedback": "Correct, the y-coordinate is 7."
        },
        {
          "id": "q3",
          "prompt": "Now, plot the point at (3, 7): move 3 units right and 7 units up. Is the point correctly placed?",
          "answer": "yes",
          "feedback": "Well done! This is how points are plotted on a scatter graph."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Positive Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A positive correlation means that as one variable increases, the other variable also tends to increase. For example, as hours studied go up, exam scores may also go up.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a plant’s growth and water given. More water tends to mean the plant grows taller — that’s a positive correlation.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Positive Correlation on a Scatter Graph",
      "problem": "Given these points: (1, 2), (2, 4), (3, 6), (4, 8), plot them and see what type of correlation they show.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Plot the point for (1, 2). What is the x-coordinate?",
          "answer": "1",
          "feedback": "Correct, x is 1."
        },
        {
          "id": "q2",
          "prompt": "What is the y-coordinate for the same point?",
          "answer": "2",
          "feedback": "Correct, y is 2."
        },
        {
          "id": "q3",
          "prompt": "Consider the points plotted. Does the y-value increase or decrease as x increases?",
          "answer": "increase",
          "feedback": "Correct, y increases as x increases, indicating a positive correlation."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Negative and No Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Negative correlation happens when one variable increases, but the other decreases. No correlation means there's no clear relationship between the variables.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about how the temperature outside and the number of layers worn might relate: if temperature drops, layers go up (negative correlation). But shoe size and favourite color likely have no correlation.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Classify the Correlation Type",
      "problem": "Look at these points: (1, 8), (2, 6), (3, 4), (4, 2), (5, 0). What kind of correlation do they show?",
      "questions": [
        {
          "id": "q1",
          "prompt": "As x increases from 1 to 5, what happens to y?",
          "answer": "decreases",
          "feedback": "Correct, y decreases as x increases."
        },
        {
          "id": "q2",
          "prompt": "Based on this, is the correlation positive, negative, or none?",
          "answer": "negative",
          "feedback": "Correct, this is a negative correlation."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Describing the Strength of Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Correlation strength shows how closely the points fit a pattern. A strong correlation has points close to a line; weak correlation points are more scattered but have a trend; zero correlation shows no pattern.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a hallway: a strong correlation is like people walking in a straight line, a weak correlation like people walking generally in the same direction but with some wandering, and zero correlation like people walking randomly everywhere.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Recognising the Strength of Correlation",
      "problem": "Look at the scatter points shown on a graph, some very tightly grouped along a line, others loosely scattered.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are points that lie close to a straight line showing a strong or weak correlation?",
          "answer": "strong",
          "feedback": "Correct, points close to a line indicate strong correlation."
        },
        {
          "id": "q2",
          "prompt": "If points are spread out but show a general trend, what is the correlation strength?",
          "answer": "weak",
          "feedback": "Correct, that's a weak correlation."
        },
        {
          "id": "q3",
          "prompt": "If there is no visible trend or pattern in the points, what correlation strength is this?",
          "answer": "zero",
          "feedback": "Correct, no pattern means zero correlation."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Correlation Does Not Imply Causation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Just because two variables have a correlation doesn't mean one causes the other. Other factors or coincidences can explain relationships.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just because ice cream sales and sunburn cases rise together in summer doesn’t mean ice cream causes sunburn. The season (summer) causes both to increase.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Limitations of Correlation",
      "problem": "A scatter graph shows a strong positive correlation between number of hours spent playing video games and performance in a maths test. Does playing more video games cause better maths performance?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What alternative explanations could there be?",
          "answer": "multiple choice",
          "options": [
            {"value": "a", "label": "Students who manage time well do both better", "isCorrect": true, "feedback": "Correct, time management might influence both."},
            {"value": "b", "label": "Playing video games improves maths automatically", "isCorrect": false, "feedback": "Not necessarily, correlation alone doesn't prove causation."},
            {"value": "c", "label": "There is no correlation", "isCorrect": false, "feedback": "The example states there is strong positive correlation."}
          ]
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to construct and interpret a scatter graph to identify the type and strength of correlation between two variables, also explaining why correlation does not imply causation.</span>",
      "hint": "Remember to mention bivariate data, plotting points, types of correlation (positive, negative, none), strength descriptions, and limitations of correlation.",
      "mustHaveKeywords": ["bivariate data", "scatter graph", "positive correlation", "negative correlation", "no correlation", "strong", "weak", "zero", "correlation does not imply causation"],
      "optionalKeywords": ["coordinate points", "trend", "pattern", "other factors"],
      "modelAnswer": "<span>First, collect bivariate data, which involves two variables measured for each item. Plot the data as coordinate points on a scatter graph, with one variable on the x-axis and the other on the y-axis. By observing the plotted points, you can identify the type of correlation: positive correlation occurs when points tend to go upwards from left to right, negative correlation when points go downwards, and no correlation when there is no clear pattern. The strength of the correlation describes how closely the points fit a line: strong (points close to a line), weak (points more scattered but trending), or zero (no pattern). It is important to remember that correlation does not imply causation, meaning just because two variables are related, one does not necessarily cause the other; other factors or coincidences may be involved.</span>",
      "scaffoldPrompts": ["What is bivariate data and how do you plot it?", "How do you identify positive, negative, and no correlation on a graph?", "How do you describe the strength of the correlation?", "Why does correlation not imply causation?"]
    }
  }
};