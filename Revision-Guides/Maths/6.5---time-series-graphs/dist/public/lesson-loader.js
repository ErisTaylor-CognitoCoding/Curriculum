window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.5 - Time series graphs",
  "strapline": "Understanding how to create, analyse, and interpret time series graphs to observe trends, seasonal variation, and make predictions.",
  "learningObjectives": [
    "Students should be able to create time series graphs to display data collected over time (Maths 6.5)",
    "Students should be able to analyse time series graphs to identify trends and patterns in data (Maths 6.5)",
    "Students should be able to use time series graphs to make informed predictions about future values (Maths 6.5)"
  ],
  "keyFormulas": [
    "Conceptual formulas related to time series graphs focus on plotting and interpreting data points over time.",
    "No numerical formulas are directly needed; instead a focus on graph reading and trend identification applies.",
    "Reminder: Axes must be labeled clearly with time on horizontal axis and measured variable on vertical axis."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='40' width='300' height='200' fill='#fff' stroke='#333' /><line x1='50' y1='230' x2='350' y2='230' stroke='#000' stroke-width='2'/><line x1='50' y1='230' x2='50' y2='40' stroke='#000' stroke-width='2'/><text x='200' y='265' text-anchor='middle' font-family='sans-serif' font-size='14'>Time (months)</text><text x='20' y='140' font-family='sans-serif' font-size='14' transform='rotate(-90 20,140)'>Sales (£)</text><polyline fill='none' stroke='#0074d9' stroke-width='2' points='50,210 100,180 150,160 200,140 250,110 300,90 350,70'/><circle cx='50' cy='210' r='4' fill='#0074d9'/><circle cx='100' cy='180' r='4' fill='#0074d9'/><circle cx='150' cy='160' r='4' fill='#0074d9'/><circle cx='200' cy='140' r='4' fill='#0074d9'/><circle cx='250' cy='110' r='4' fill='#0074d9'/><circle cx='300' cy='90' r='4' fill='#0074d9'/><circle cx='350' cy='70' r='4' fill='#0074d9'/><text x='50' y='240' font-family='sans-serif' font-size='12' text-anchor='middle'>Jan</text><text x='100' y='240' font-family='sans-serif' font-size='12' text-anchor='middle'>Feb</text><text x='150' y='240' font-family='sans-serif' font-size='12' text-anchor='middle'>Mar</text><text x='200' y='240' font-family='sans-serif' font-size='12' text-anchor='middle'>Apr</text><text x='250' y='240' font-family='sans-serif' font-size='12' text-anchor='middle'>May</text><text x='300' y='240' font-family='sans-serif' font-size='12' text-anchor='middle'>Jun</text><text x='350' y='240' font-family='sans-serif' font-size='12' text-anchor='middle'>Jul</text></svg>",
  "step1": {
    "title": "Concept: What is a Time Series Graph?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>time series graph</strong> displays data points collected over successive intervals of time. The horizontal axis shows the time intervals (like months or years), and the vertical axis shows the variable being measured (like sales or temperature). Points are connected by lines to show change over time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine tracking the temperature outside every day and plotting each day’s temperature on a graph. Connecting these points shows how temperature rises and falls over days – that’s exactly what a time series graph does.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Data Points",
      "problem": "You collected the following monthly sales data (£) for a small shop:<br>January: 40, February: 55, March: 70<br>Plot these points on a time series graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What should be on the horizontal axis?",
          "answer": "Time",
          "feedback": "Correct! The horizontal axis represents time periods like months."
        },
        {
          "id": "q2",
          "prompt": "What should be on the vertical axis?",
          "answer": "Sales",
          "feedback": "Correct! The vertical axis shows the measured variable, here sales in £."
        },
        {
          "id": "q3",
          "prompt": "What coordinates represent February’s data point?",
          "answer": "February, 55",
          "feedback": "Yes! The February point is at February on the time axis and 55 on the sales axis."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Identifying Trends in Time Series Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>trend</strong> shows the overall direction the data moves over time. It could be an <em>increasing</em> trend (upwards), a <em>decreasing</em> trend (downwards), or it could be roughly <em>constant</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the number of customers visiting a store each month. If every month there are more customers than the last, that’s an upward trend.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Spotting Trends",
      "problem": "A graph shows sales rising from 40 in January to 70 in March, then falling back to 50 in May. Is the overall trend upwards or downwards?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Look at sales from January (40) to March (70). What is the trend?",
          "answer": "Increasing",
          "feedback": "Correct, sales increased from 40 to 70."
        },
        {
          "id": "q2",
          "prompt": "From March (70) to May (50), what is the trend?",
          "answer": "Decreasing",
          "feedback": "Yes, sales dropped from 70 to 50."
        },
        {
          "id": "q3",
          "prompt": "Overall, between January (40) and May (50), what can you say about the trend?",
          "answer": "Increasing",
          "feedback": "Correct. Despite the drop, sales rose overall from 40 to 50."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Recognising Seasonal Variation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"> <strong>Seasonal variation</strong> are regular, repeating patterns or fluctuations in data that occur at predictable time intervals, like daily, weekly, monthly, or yearly cycles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about ice cream sales – they usually rise in summer months and fall in winter. This repeating pattern is seasonal variation.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Seasonal Patterns",
      "problem": "Sales figures rise every December and drop every January in yearly data. What does this pattern indicate?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What kind of pattern repeats every year in December and January?",
          "answer": "Seasonal variation",
          "feedback": "Correct! This pattern repeats regularly at the same time each year."
        },
        {
          "id": "q2",
          "prompt": "Is seasonal variation the same as a trend?",
          "answer": "No",
          "feedback": "Correct, a trend is the overall direction, seasonal variation is a regular repeating pattern within that."
        }
      ]
    }
  },
  "step4": {
    "title": "Skill: Creating a Time Series Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Learn how to plot data collected over time. Start by marking time intervals on the horizontal axis and the variable values on the vertical axis. Plot each data point, then connect them with straight lines to complete the time series graph.</p>",
    "workedExample": {
      "title": "Interactive Graph Plotting",
      "problem": "Plot the following sales data:<br>April: 60, May: 80, June: 75<br>Provide the coordinates of each point.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Coordinates for April?",
          "answer": "April, 60",
          "feedback": "Correct, April at 60 sales."
        },
        {
          "id": "q2",
          "prompt": "Coordinates for May?",
          "answer": "May, 80",
          "feedback": "Yes, May at 80 sales."
        },
        {
          "id": "q3",
          "prompt": "Coordinates for June?",
          "answer": "June, 75",
          "feedback": "Correct, June at 75 sales."
        }
      ]
    }
  },
  "step5": {
    "title": "Skill: Analysing Time Series Graphs to Identify Trends and Patterns",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Once you have a time series graph, examine its shape to identify upward or downward trends and any seasonal cycles. Look for periods where the graph rises or falls regularly.</p>",
    "workedExample": {
      "title": "Interactive Analysis",
      "problem": "Given a graph with rising sales each spring and falling sales in winter, what patterns can you identify?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is there a general trend over several years if sales increase yearly?",
          "answer": "Yes, upward trend",
          "feedback": "Correct, sales increasing yearly means an upward trend."
        },
        {
          "id": "q2",
          "prompt": "What is the repeating pattern within each year?",
          "answer": "Seasonal variation",
          "feedback": "Yes, rising in spring and falling in winter repeats seasonally."
        }
      ]
    }
  },
  "step6": {
    "title": "Skill: Using Time Series Graphs to Predict Future Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By observing trends and seasonal variations, you can make educated guesses about future data points. Use an upward trend to predict increases, and account for seasonal patterns to refine your predictions.</p>",
    "workedExample": {
      "title": "Interactive Prediction Example",
      "problem": "If sales have increased by 10 units each month over the last 6 months and normally peak in July, estimate sales for August.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the expected sales increase from July to August, ignoring seasonality?",
          "answer": "10",
          "feedback": "Correct, a 10 unit increase following trend."
        },
        {
          "id": "q2",
          "prompt": "If July is a seasonal peak, would August sales likely be higher, lower, or about the same?",
          "answer": "Lower",
          "feedback": "Right, after a peak, sales usually drop because of seasonal variation."
        },
        {
          "id": "q3",
          "prompt": "Based on trend and seasonality, what would be a reasonable prediction for August sales if July sales were 120?",
          "answer": "Between 110 and 120",
          "feedback": "Great! Considering trend (+10) and seasonal dip, estimate sales just below peak."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the horizontal axis represent in a time series graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The variable being measured</span>",
            "isCorrect": false,
            "explanation": "No, the vertical axis shows the variable."
          },
          {
            "id": "b",
            "label": "<span>Time intervals</span>",
            "isCorrect": true,
            "explanation": "Correct! The horizontal axis always displays time."
          },
          {
            "id": "c",
            "label": "<span>Frequency of data</span>",
            "isCorrect": false,
            "explanation": "Frequency is not shown on the horizontal axis in time series."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which of the following best describes a trend?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>A repeating pattern occurring at regular time intervals</span>",
            "isCorrect": false,
            "explanation": "This describes seasonal variation, not a trend."
          },
          {
            "id": "b",
            "label": "<span>A general direction in which data moves over time</span>",
            "isCorrect": true,
            "explanation": "Correct! A trend shows the overall direction of the data."
          },
          {
            "id": "c",
            "label": "<span>Random changes in the data</span>",
            "isCorrect": false,
            "explanation": "Random changes are noise, not a trend."
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
        "sentence": "<span>A <strong>_____</strong> graph shows data points collected over time, with the <em>time</em> on the horizontal axis and the <em>variable</em> on the vertical axis.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "timeSeriesGraph",
                "label": "time series",
                "isCorrect": true,
                "feedback": "Correct! The graph showing data over time is a time series graph."
              },
              {
                "value": "barGraph",
                "label": "bar",
                "isCorrect": false,
                "feedback": "Incorrect, bar graphs do not necessarily show data over time."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <strong>_____</strong> is the overall direction or pattern the data follows over time, such as upwards or downwards.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "trend",
                "label": "trend",
                "isCorrect": true,
                "feedback": "Correct! A trend shows the general direction of data."
              },
              {
                "value": "seasonalVariation",
                "label": "seasonal variation",
                "isCorrect": false,
                "feedback": "No, seasonal variation is a repeating pattern not a trend."
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
      "prompt": "<span>Explain how to use a time series graph to identify trends and seasonal variation, and how you would use the graph to predict future data points.</span>",
      "hint": "Remember to describe what features to look for on the axes, how to spot different patterns, and how trends and seasonal variations influence predictions.",
      "mustHaveKeywords": [
        "horizontal axis",
        "trend",
        "seasonal variation",
        "prediction"
      ],
      "optionalKeywords": [
        "variable",
        "data points",
        "patterns",
        "future values"
      ],
      "modelAnswer": "<span>To analyse a time series graph, first identify the <strong>horizontal axis</strong> which shows time and the <strong>vertical axis</strong> showing the measured variable. A <strong>trend</strong> is seen as the general direction the data moves over time — it can increase, decrease, or stay constant. <strong>Seasonal variation</strong> appears as regular repeating patterns at predictable intervals. By recognising these, you can make a <strong>prediction</strong> about future values, expecting trends to continue unless disrupted, and seasonal patterns to repeat similarly in upcoming time periods.</span>",
      "scaffoldPrompts": [
        "Start by describing what axes represent.",
        "Then explain what a trend is and how to spot it.",
        "Next, describe seasonal variation and how it shows as repeating patterns.",
        "Finally, explain how these features help in making predictions based on the graph."
      ]
    }
  }
};