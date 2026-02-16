window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.5 - Time series graphs (Part 1)",
  "strapline": "Understanding how to construct, interpret, and analyze time series graphs to identify trends and seasonal variations.",
  "learningObjectives": [
    "Students should be able to construct time series graphs by plotting data collected at regular intervals over a period of time (Maths 6.5)",
    "Students should be able to interpret time series graphs and read values from them accurately (Maths 6.5)",
    "Students should be able to identify key features in time series graphs such as increasing or decreasing trends and seasonal variations (Maths 6.5)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='150' text-anchor='middle' font-family='sans-serif'>Concept Diagram</text></svg>",
  "step1": {
    "title": "Concept: What is a Time Series Graph?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>time series graph</strong> is a line graph that shows how data changes over <em>regular intervals of time</em>, such as days, months, or years. It helps track patterns and changes in data points collected at these consistent times.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine recording the temperature outside every day at noon. Plotting these temperatures on a graph against each day shows how the temperature changes over time, just like a time series graph.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Data Points for a Time Series Graph",
      "problem": "Plot the temperature recorded at noon over four days: Day 1 = 15°C, Day 2 = 17°C, Day 3 = 16°C, Day 4 = 18°C.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the temperature on Day 1?",
          "answer": "15",
          "feedback": "Correct. The temperature on Day 1 is 15°C."
        },
        {
          "id": "q2",
          "prompt": "Plot the point for Day 2: What is the temperature value to plot?",
          "answer": "17",
          "feedback": "Correct. Plot 17°C for Day 2."
        },
        {
          "id": "q3",
          "prompt": "What temperature do we plot for Day 3?",
          "answer": "16",
          "feedback": "Correct. Day 3 is 16°C."
        },
        {
          "id": "q4",
          "prompt": "Complete plotting by stating the temperature for Day 4.",
          "answer": "18",
          "feedback": "Well done. Day 4 is 18°C."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Trends in Time Series Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>trend</strong> in a time series graph shows the general direction of the data over time. It could be an <em>increasing trend</em> (going up), <em>decreasing trend</em> (going down), or staying <em>constant</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Identifying Trends",
      "problem": "Consider a graph showing sales of a product over six months: January - 50, February - 55, March - 60, April - 58, May - 62, June - 65.",
      "questions": [
        {
          "id": "q5",
          "prompt": "Are the sales generally increasing, decreasing, or constant?",
          "answer": "increasing",
          "feedback": "Correct. The sales values are generally going up over time."
        },
        {
          "id": "q6",
          "prompt": "Does the value in April break the trend? If yes, how?",
          "answer": "yes",
          "feedback": "Correct. April shows a slight dip from March's 60 to 58, a momentary decrease."
        }
      ]
    }
  },
  "step3": {
    "title": "Identifying Seasonal Variation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Seasonal variation</strong> means regular, repeating patterns in data that happen at specific times, such as higher ice cream sales in summer or more heating use in winter.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a clothing store selling more coats in winter and more swimwear in summer. The sales reflect seasonal variation.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Spotting Seasonal Patterns",
      "problem": "Look at monthly ice cream sales (in hundreds): Jan-20, Feb-22, Mar-40, Apr-45, May-50, Jun-70, Jul-90, Aug-85, Sep-60, Oct-40, Nov-30, Dec-25.",
      "questions": [
        {
          "id": "q7",
          "prompt": "During which months are sales highest?",
          "answer": "jun,jul,aug",
          "feedback": "Correct. Sales peak in June, July, and August."
        },
        {
          "id": "q8",
          "prompt": "What seasonal pattern does this suggest?",
          "answer": "higher sales in summer",
          "feedback": "Well done. Ice cream sales rise during summer months."
        }
      ]
    }
  },
  "step4": {
    "title": "Constructing a Time Series Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To construct a time series graph, plot time intervals on the horizontal axis and the measured data values on the vertical axis, then connect the points with a line.</p>",
    "workedExample": {
      "title": "Interactive Graph Plotting",
      "problem": "You have rainfall data over five consecutive months: January-30mm, February-40mm, March-35mm, April-50mm, May-45mm. Plot these points step-by-step.",
      "questions": [
        {
          "id": "q9",
          "prompt": "What is the rainfall amount to plot for January?",
          "answer": "30",
          "feedback": "Good. January is 30mm."
        },
        {
          "id": "q10",
          "prompt": "Next, plot rainfall for February.",
          "answer": "40",
          "feedback": "Correct, February is 40mm."
        },
        {
          "id": "q11",
          "prompt": "What rainfall value do you plot for March?",
          "answer": "35",
          "feedback": "Correct. March rainfall is 35mm."
        },
        {
          "id": "q12",
          "prompt": "Plot rainfall for April.",
          "answer": "50",
          "feedback": "Correct. April rainfall is 50mm."
        },
        {
          "id": "q13",
          "prompt": "Finally, plot rainfall for May.",
          "answer": "45",
          "feedback": "Well done. May rainfall is 45mm."
        }
      ]
    }
  },
  "step5": {
    "title": "Interpreting Time Series Graphs: Reading Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You should be able to accurately read exact values from a time series graph by locating the point on the graph and checking the corresponding value on the vertical axis.</p>",
    "workedExample": {
      "title": "Worked Example: Find Value From Graph",
      "problem": "Given a time series graph of monthly temperatures, identify the temperature for March if the point is at 12 units on the vertical scale.",
      "questions": [
        {
          "id": "q14",
          "prompt": "What temperature does the point at March correspond to?",
          "answer": "12",
          "feedback": "Correct. The temperature for March is 12 degrees based on the graph."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to construct a time series graph from given data, interpret the trend shown, and identify any seasonal variations present.</span>",
      "hint": "Remember to check the regularity of data intervals, label your axes, and look for repeated patterns over time.",
      "mustHaveKeywords": ["time intervals", "plot points", "trend", "seasonal variation"],
      "optionalKeywords": ["increasing", "decreasing", "seasonal pattern"],
      "modelAnswer": "<span>To construct a time series graph, plot data points with time intervals on the horizontal axis and data values on the vertical axis. Connect the points with a line to show change over time. Interpret the trend by observing if values increase, decrease, or remain stable. Identify seasonal variations by looking for repeating patterns at regular intervals, such as peaks or dips occurring in certain months or seasons.</span>",
      "scaffoldPrompts": ["Start by plotting the data points at equal time intervals", "Draw lines to connect points to reveal the trend", "Look closely for any repeating highs or lows indicating seasonal changes"]
    }
  }
};