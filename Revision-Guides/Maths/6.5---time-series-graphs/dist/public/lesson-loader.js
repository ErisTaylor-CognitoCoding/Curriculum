window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.5 - Time series graphs",
  "strapline": "Learn how to create, analyse, and interpret time series graphs to identify trends and seasonal patterns, and use these insights to make predictions.",
  "learningObjectives": [
    "Students should be able to create time series graphs to display data collected over time (Maths 6.5)",
    "Students should be able to analyse time series graphs to identify trends and patterns in data (Maths 6.5)",
    "Students should be able to use time series graphs to make informed predictions about future values (Maths 6.5)"
  ],
  "keyFormulas": [
    "No specific formulas are required for time series graphs, but remember to label axes clearly and use consistent intervals.",
    "Trend lines can sometimes be approximated using line of best fit techniques.",
    "Reminder: Always check the time intervals for consistency in your graph."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='200' fill='#f8f9fa' stroke='#333' /><line x1='60' y1='230' x2='340' y2='80' stroke='#007ACC' stroke-width='2' /><line x1='60' y1='230' x2='90' y2='200' stroke='#007ACC' stroke-width='2' /><line x1='90' y1='200' x2='120' y2='170' stroke='#007ACC' stroke-width='2' /><line x1='120' y1='170' x2='180' y2='140' stroke='#007ACC' stroke-width='2' /><line x1='180' y1='140' x2='240' y2='160' stroke='#007ACC' stroke-width='2' /><line x1='240' y1='160' x2='300' y2='130' stroke='#007ACC' stroke-width='2' /><circle cx='60' cy='230' r='3' fill='#007ACC'/><circle cx='90' cy='200' r='3' fill='#007ACC'/><circle cx='120' cy='170' r='3' fill='#007ACC'/><circle cx='180' cy='140' r='3' fill='#007ACC'/><circle cx='240' cy='160' r='3' fill='#007ACC'/><circle cx='300' cy='130' r='3' fill='#007ACC'/><text x='50' y='250' font-family='sans-serif' font-size='12'>Time (Months)</text><text x='10' y='150' font-family='sans-serif' font-size='12' transform='rotate(-90 10,150)'>Value</text><text x='150' y='30' font-family='sans-serif' font-weight='bold' font-size='16' text-anchor='middle'>Sample Time Series Graph</text></svg>",
  "step1": {
    "title": "Concept: What is a Time Series Graph?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>time series graph</strong> displays data points collected at successive time intervals. The horizontal axis (x-axis) shows the time intervals, and the vertical axis (y-axis) shows the values measured. Data points are connected by lines to illustrate how values change over time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine tracking the temperature every day for a week. Plotting these temperatures on a graph with days on the x-axis and temperature on the y-axis is like drawing a path that shows the weather changes day by day.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Daily Temperatures",
      "problem": "You collected temperature data (in °C) for 5 days: 15, 17, 16, 18, 20. Let's plot this on a time series graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What does the horizontal axis represent?",
          "answer": "time",
          "feedback": "Correct. The x-axis represents time intervals."
        },
        {
          "id": "q2",
          "prompt": "What does the vertical axis represent?",
          "answer": "temperature",
          "feedback": "Well done. The y-axis shows the measured temperature."
        },
        {
          "id": "q3",
          "prompt": "Plot the first data point: what coordinates correspond to day 1 and temperature 15°C?",
          "answer": "1,15",
          "feedback": "Great! The first point is at (1, 15)."
        },
        {
          "id": "q4",
          "prompt": "Plot the data point for day 3 and temperature 16°C.",
          "answer": "3,16",
          "feedback": "Excellent. That point is at (3, 16)."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Identifying Trends in Time Series Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>trend</strong> shows the general direction in which the data is moving over time. It can be <em>increasing</em> (values going up), <em>decreasing</em> (values going down), or remaining <em>constant</em>. Identifying trends helps to understand long-term change.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a stock price changing over months: if it generally rises, the trend is upward; if it falls, the trend is downward.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the Trend",
      "problem": "Here is a time series graph of sales over 6 months: 50, 53, 55, 58, 60, 62 units. Identify the trend.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are the sales increasing, decreasing, or constant over time?",
          "answer": "increasing",
          "feedback": "Correct. Sales are rising month by month."
        },
        {
          "id": "q2",
          "prompt": "What might this trend suggest about the sales?",
          "answer": "growth",
          "feedback": "Good job. It suggests sales are growing over time."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding Seasonal Variation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Seasonal variation</strong> refers to patterns or fluctuations that repeat regularly over specific intervals within a time series, such as daily, weekly, monthly, or yearly cycles. These patterns appear as ups and downs occurring at predictable time periods.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Sales of ice cream often increase every summer and drop every winter. This repeating rise and fall is an example of seasonal variation.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Spotting Seasonal Patterns",
      "problem": "A shop records monthly sales over 12 months: sales peak every July and drop in December. What is this repeating pattern called?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What do we call this repeating pattern in the data?",
          "answer": "seasonal variation",
          "feedback": "Correct. These are seasonal variations in sales."
        },
        {
          "id": "q2",
          "prompt": "How often does this pattern repeat?",
          "answer": "yearly",
          "feedback": "Well done! The pattern repeats every year."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Create Your Own Time Series Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's practice creating a time series graph using data collected over time.</p>",
    "workedExample": {
      "title": "Worked Example: Plotting Weekly Website Visitors",
      "problem": "You recorded the number of website visitors over 6 weeks: 120, 150, 145, 160, 170, 180. Let's plot these points step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value for week 2?",
          "answer": "150",
          "feedback": "Correct. Week 2 had 150 visitors."
        },
        {
          "id": "q2",
          "prompt": "Plot the point for week 4. What are the coordinates?",
          "answer": "4,160",
          "feedback": "Good job. The point is at (4, 160)."
        },
        {
          "id": "q3",
          "prompt": "After plotting all points, what general trend can you observe?",
          "answer": "increasing",
          "feedback": "Yes, the number of visitors is generally increasing over the weeks."
        }
      ]
    }
  },
  "step5": {
    "title": "Analysis: Interpret the Time Series Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Interpreting time series graphs involves identifying trends and seasonal patterns to draw conclusions from the data.</p>",
    "workedExample": {
      "title": "Worked Example: Analyse Sales Data",
      "problem": "Sales data (in units) for 12 months shows peaks every 3rd month and a general upward trend.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What type of trend is shown?",
          "answer": "upward",
          "feedback": "Correct, sales are generally increasing."
        },
        {
          "id": "q2",
          "prompt": "What does the peak every 3rd month suggest?",
          "answer": "seasonal variation",
          "feedback": "That's right. Regular peaks indicate seasonal variation."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Using a time series graph showing monthly sales data over two years, explain how you would identify both the trend and seasonal variations and how these can be used to predict future sales.</span>",
      "hint": "Remember to consider the direction and pattern of data points over time, as well as any repeating cycles within the year.",
      "mustHaveKeywords": ["trend", "seasonal variation", "prediction", "time series graph"],
      "optionalKeywords": ["cycles", "pattern", "forecast", "data points"],
      "modelAnswer": "<span>To identify the <strong>trend</strong>, examine the general direction of the data points on the time series graph over the two years. If values increase consistently, the trend is upward; if they decrease, it is downward. To find <strong>seasonal variations</strong>, look for recurring ups and downs that happen at regular intervals within each year, such as monthly peaks or dips. Understanding both the trend and seasonal variations allows you to <strong>predict</strong> future sales by extending the trend line and considering the expected seasonal patterns, helping to forecast upcoming values accurately.</span>",
      "scaffoldPrompts": ["Look at the overall movement of data points over time.", "Identify any repeating patterns within each year.", "Explain how these insights help make predictions."]
    }
  }
};