window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.4 - Scatter graphs and correlation (Part 3)",
  "strapline": "Learn how to construct scatter graphs by plotting bivariate data, identify different types of correlation, and understand the strength and meaning of correlations.",
  "learningObjectives": [
    "Students should construct scatter graphs by plotting bivariate data as coordinate points to identify relationships between two variables (Maths 6.4)",
    "Students should distinguish between positive correlation, negative correlation, and no correlation in scatter graphs (Maths 6.4)",
    "Students should describe the strength of correlation as strong, weak, or zero, and understand that correlation does not necessarily imply causation (Maths 6.4)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><line x1='70' y1='230' x2='320' y2='80' stroke='green' stroke-width='3' /><circle cx='90' cy='210' r='5' fill='blue' /><circle cx='140' cy='170' r='5' fill='blue' /><circle cx='190' cy='140' r='5' fill='blue' /><circle cx='240' cy='110' r='5' fill='blue' /><circle cx='290' cy='75' r='5' fill='blue' /><text x='60' y='245' font-family='sans-serif' font-size='12'>Variable X</text><text x='20' y='50' font-family='sans-serif' font-size='12' transform='rotate(-90 20,50)'>Variable Y</text><text x='200' y='40' font-family='sans-serif' font-size='14' font-weight='bold' text-anchor='middle'>Positive Correlation Scatter Plot</text></svg>",
  "step1": {
    "title": "Understanding Bivariate Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Bivariate data involves collecting two pieces of information for each item or person, for example, height and shoe size or hours studied and test scores.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of bivariate data like pairing the number of hours you study with the marks you get on a test, so each pair shows two related numbers.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Identifying Bivariate Data",
      "problem": "Look at the following data pairs collected from 3 students:<br>Student A: (3 hours, 70 marks)<br>Student B: (5 hours, 85 marks)<br>Student C: (2 hours, 60 marks)<br>Which numbers correspond to the two variables being measured?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the first variable measured?",
          "answer": "hours studied",
          "feedback": "Correct! The first variable is hours studied."
        },
        {
          "id": "q2",
          "prompt": "What is the second variable measured?",
          "answer": "test scores",
          "feedback": "Correct! The second variable is test scores."
        }
      ]
    }
  },
  "step2": {
    "title": "Plotting Points on a Scatter Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To construct a scatter graph, plot each pair of values as a point on the coordinate grid: the first variable on the x-axis and the second on the y-axis.</p>",
    "workedExample": {
      "title": "Interactive Example: Plotting a Point",
      "problem": "Plot the point representing (4 hours, 75 marks) on a scatter graph with hours studied on the x-axis and marks on the y-axis.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the x-coordinate (hours studied)?",
          "answer": "4",
          "feedback": "Correct! The x-coordinate is 4."
        },
        {
          "id": "q2",
          "prompt": "What is the y-coordinate (marks)?",
          "answer": "75",
          "feedback": "Correct! The y-coordinate is 75."
        },
        {
          "id": "q3",
          "prompt": "Is the point plotted at (4, 75)?",
          "answer": "yes",
          "feedback": "Correct! Well done plotting the point."
        }
      ]
    }
  },
  "step3": {
    "title": "Identifying Positive Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A positive correlation means that as one variable increases, the other variable also tends to increase. The points on the scatter graph generally slope upwards from left to right.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about how as the temperature rises, ice cream sales usually increase – both variables go up together.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Recognizing Positive Correlation",
      "problem": "You have some points plotted on a scatter graph showing hours studied and marks. The points slope upwards. What type of correlation is this?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is this a positive, negative, or no correlation?",
          "answer": "positive",
          "feedback": "Correct! The upward trend shows a positive correlation."
        }
      ]
    }
  },
  "step4": {
    "title": "Identifying Negative Correlation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A negative correlation means that as one variable increases, the other variable tends to decrease. The points on the scatter graph generally slope downwards from left to right.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Consider how as the number of hours spent playing video games increases, the time spent studying may decrease – one goes up, the other goes down.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Recognizing Negative Correlation",
      "problem": "Points on a scatter graph slope downwards. What type of correlation does this indicate?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Choose: positive, negative, or no correlation?",
          "answer": "negative",
          "feedback": "Correct! The downward slope indicates negative correlation."
        }
      ]
    }
  },
  "step5": {
    "title": "Identifying No Correlation and Correlation Strength",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">No correlation means there is no obvious pattern or trend in the scatter points.<br>The strength of correlation can be described as strong (points close to a straight line), weak (points more spread out), or zero (no clear pattern).<br>Remember: correlation does not imply one variable causes the other.</p>",
    "workedExample": {
      "title": "Interactive Example: Assessing Strength of Correlation",
      "problem": "Look at a scatter graph where points are tightly clustered close to an upward line, and another with points spread widely but still trending upwards.<br>Which has a stronger correlation?",
      "questions": [
        {
          "id": "q1",
          "prompt": "First graph correlation strength?",
          "answer": "strong",
          "feedback": "Correct! Points close to a line show strong correlation."
        },
        {
          "id": "q2",
          "prompt": "Second graph correlation strength?",
          "answer": "weak",
          "feedback": "Correct! Points spread out show weak correlation."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to construct a scatter graph from bivariate data and how to identify different types and strengths of correlation.</span>",
      "hint": "Remember to mention plotting points, positive/negative/no correlation, and what strong or weak correlation looks like.",
      "mustHaveKeywords": ["plot points", "positive correlation", "negative correlation", "no correlation", "strong", "weak", "correlation strength"],
      "optionalKeywords": ["causation", "scatter graph", "bivariate data"],
      "modelAnswer": "<span>To construct a scatter graph, plot each pair of bivariate data as coordinate points with one variable on the x-axis and the other on the y-axis. Positive correlation shows points rising from left to right, negative correlation shows points falling, and no correlation shows no clear trend. The strength of correlation is strong if points lie close to a straight line and weak if points are more spread out. Correlation does not imply causation.</span>",
      "scaffoldPrompts": ["Start by explaining how to plot bivariate data as points", "Describe how the direction of points shows correlation type", "Explain how close points are to a line shows strength", "Include why correlation does not mean causation"]
    }
  }
};