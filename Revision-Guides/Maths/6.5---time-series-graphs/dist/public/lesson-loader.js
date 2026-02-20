window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.5 - Time series graphs",
  "strapline": "Learn to create, analyse, and use time series graphs to understand data collected over time.",
  "learningObjectives": [
    "Students should be able to create time series graphs to display data collected over time (Maths 6.5)",
    "Students should be able to analyse time series graphs to identify trends and patterns in data (Maths 6.5)",
    "Students should be able to use time series graphs to make informed predictions about future values (Maths 6.5)"
  ],
  "keyFormulas": [
    "No specific formulas for time series graphs, focus is on data representation and interpretation."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='200' fill='#f9f9f9' stroke='#333' /><line x1='60' y1='230' x2='360' y2='230' stroke='#000' stroke-width='2' /><line x1='60' y1='230' x2='60' y2='40' stroke='#000' stroke-width='2' /><text x='210' y='280' font-family='sans-serif' font-size='14' text-anchor='middle'>Time (Days)</text><text x='15' y='140' font-family='sans-serif' font-size='14' transform='rotate(-90 15,140)' text-anchor='middle'>Value</text><polyline fill='none' stroke='#0074d9' stroke-width='2' points='60,180 100,150 140,130 180,100 220,120 260,90 300,80 340,60' /><circle cx='60' cy='180' r='4' fill='#0074d9' /><circle cx='100' cy='150' r='4' fill='#0074d9' /><circle cx='140' cy='130' r='4' fill='#0074d9' /><circle cx='180' cy='100' r='4' fill='#0074d9' /><circle cx='220' cy='120' r='4' fill='#0074d9' /><circle cx='260' cy='90' r='4' fill='#0074d9' /><circle cx='300' cy='80' r='4' fill='#0074d9' /><circle cx='340' cy='60' r='4' fill='#0074d9' /><text x='60' y='195' font-family='sans-serif' font-size='10' text-anchor='middle'>Day 1</text><text x='100' y='195' font-family='sans-serif' font-size='10' text-anchor='middle'>Day 2</text><text x='140' y='195' font-family='sans-serif' font-size='10' text-anchor='middle'>Day 3</text><text x='180' y='195' font-family='sans-serif' font-size='10' text-anchor='middle'>Day 4</text><text x='220' y='195' font-family='sans-serif' font-size='10' text-anchor='middle'>Day 5</text><text x='260' y='195' font-family='sans-serif' font-size='10' text-anchor='middle'>Day 6</text><text x='300' y='195' font-family='sans-serif' font-size='10' text-anchor='middle'>Day 7</text><text x='340' y='195' font-family='sans-serif' font-size='10' text-anchor='middle'>Day 8</text></svg>",
  "step1": {
    "title": "Introduction: What is a Time Series Graph?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>time series graph</strong> is a line graph that shows how data changes over time. Time is always plotted along the horizontal axis (x-axis), and the value being measured is plotted on the vertical axis (y-axis). Points are connected by lines to illustrate changes between successive times.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine watching the temperature outside every hour throughout the day and plotting that on a graph. The graph will show you how the temperature rises and falls as time moves forward.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting a Time Series Graph",
      "problem": "Plot the following data points on a graph showing temperature over 5 days: Day 1: 15°C, Day 2: 17°C, Day 3: 16°C, Day 4: 18°C, Day 5: 20°C.",
      "questions": [
        {
          "id": "q1",
          "prompt": "For Day 1, what coordinates represent the point? Format as (Day, Temperature)",
          "answer": "(1, 15)",
          "feedback": "Correct, the x-value is 1 for Day 1, and y-value is 15 for temperature."
        },
        {
          "id": "q2",
          "prompt": "For Day 3, what coordinates represent the point?",
          "answer": "(3, 16)",
          "feedback": "That's right! Day 3 corresponds to x=3 and temperature is 16."
        },
        {
          "id": "q3",
          "prompt": "After plotting all points, what is the next step to complete the time series graph?",
          "answer": "Connect the points with line segments",
          "feedback": "Excellent! Connecting the points shows continuous change over time."
        }
      ]
    }
  },
  "step2": {
    "title": "Key Concept: Understanding Trend",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>trend</strong> in a time series graph is the general direction that data shows over the entire period — it might go upwards, downwards, or stay fairly level. Spotting trends helps us understand long-term patterns.</p>",
    "workedExample": {
      "title": "Worked Example: Identifying the Trend",
      "problem": "Look at a graph where the data points for sales over 7 days are increasing from 50 to 85 units. What type of trend does this show?",
      "questions": [
        {
          "id": "q4",
          "prompt": "Is the sales trend increasing, decreasing, or constant?",
          "answer": "increasing",
          "feedback": "Correct. The values are going up over time."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Concept: Seasonal Variation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Seasonal variation</strong> is a repeating pattern within a time series that happens at regular intervals, like a weekly rise in sales every weekend or yearly temperature patterns.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about ice cream sales that always increase during summer months and fall in winter — this is seasonal variation.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Detecting Seasonal Variation",
      "problem": "A shop records daily visitors and notices a spike every Saturday. What does this pattern represent?",
      "questions": [
        {
          "id": "q5",
          "prompt": "What is the name of the regular repeating spike pattern every Saturday?",
          "answer": "seasonal variation",
          "feedback": "Well done. Regular patterns repeating on specific time intervals are seasonal variations."
        }
      ]
    }
  },
  "step4": {
    "title": "Creating Your Own Time Series Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's practice by collecting your own data over time and plotting it on a graph. Use a ruler to mark time evenly on the x-axis and values on the y-axis.</p>",
    "workedExample": {
      "title": "Interactive Example: Plotting Your Data",
      "problem": "Record the number of hours you study each day for 5 days. Now, enter your data points one by one to plot them.",
      "questions": [
        {
          "id": "q6",
          "prompt": "Enter study hours for Day 1:",
          "answer": "2",
          "feedback": "Good, 2 hours on Day 1."
        },
        {
          "id": "q7",
          "prompt": "Enter study hours for Day 2:",
          "answer": "3",
          "feedback": "3 hours recorded."
        },
        {
          "id": "q8",
          "prompt": "Enter study hours for Day 3:",
          "answer": "4",
          "feedback": "4 hours noted."
        },
        {
          "id": "q9",
          "prompt": "Enter study hours for Day 4:",
          "answer": "3",
          "feedback": "3 hours added."
        },
        {
          "id": "q10",
          "prompt": "Enter study hours for Day 5:",
          "answer": "5",
          "feedback": "5 hours recorded."
        },
        {
          "id": "q11",
          "prompt": "Now, connect these points with line segments. What general trend do you observe?",
          "answer": "increasing",
          "feedback": "Correct, your study hours show an increasing trend."
        }
      ]
    }
  },
  "step5": {
    "title": "Analysing Time Series Graphs to Identify Patterns",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To analyse a time series graph, look for overall trends, seasonal patterns, and random fluctuations. These help in understanding what influences the data.</p>",
    "workedExample": {
      "title": "Worked Example: Spotting Patterns",
      "problem": "Given a graph of monthly temperatures showing a wavy pattern with peaks in summer and dips in winter, answer questions to describe the data.",
      "questions": [
        {
          "id": "q12",
          "prompt": "What is the main trend for temperature over the year?",
          "answer": "relatively constant with seasonal variation",
          "feedback": "Good, average temperature stays around a level but changes regularly due to seasons."
        },
        {
          "id": "q13",
          "prompt": "Name the repeating pattern observed every year.",
          "answer": "seasonal variation",
          "feedback": "Correct, the rise and fall in temperature with seasons is seasonal variation."
        }
      ]
    }
  },
  "step6": {
    "title": "Using Time Series Graphs to Make Predictions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By understanding the trend and seasonal patterns, we can predict future values on a time series graph. This is useful for planning or making decisions.</p>",
    "workedExample": {
      "title": "Interactive Example: Making Predictions",
      "problem": "A shop sells an average of 50 items on Monday and sales increase by 5 items each following day. Using your graph, predict the sales on Day 6.",
      "questions": [
        {
          "id": "q14",
          "prompt": "What is the predicted sales for Day 5?",
          "answer": "70",
          "feedback": "Correct, starting at 50 and increasing 5 each day: Day 5 = 50 + (5 x 4) = 70."
        },
        {
          "id": "q15",
          "prompt": "Using the trend, predict sales for Day 6.",
          "answer": "75",
          "feedback": "Yes! Sales should be 75 (70 + 5) on Day 6."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which axis in a time series graph shows the passage of time?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The horizontal (x) axis</span>",
            "isCorrect": true,
            "explanation": "Correct, time is always plotted on the x-axis."
          },
          {
            "id": "b",
            "label": "<span>The vertical (y) axis</span>",
            "isCorrect": false,
            "explanation": "Incorrect, the y-axis shows the variable measured, not time."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What does a downward trend in a time series graph indicate?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Values decreasing over time</span>",
            "isCorrect": true,
            "explanation": "Correct. A downward trend means values are going down over time."
          },
          {
            "id": "b",
            "label": "<span>Values increasing over time</span>",
            "isCorrect": false,
            "explanation": "Wrong. That describes an upward trend."
          }
        ]
      },
      {
        "id": "mcq-3",
        "question": "<span>What term describes a repeating pattern in a time series graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Seasonal variation</span>",
            "isCorrect": true,
            "explanation": "Correct, seasonal variation means repeated patterns at fixed intervals."
          },
          {
            "id": "b",
            "label": "<span>Random fluctuation</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Random fluctuations do not follow a pattern."
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
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> graph shows data changes over time, with time on the horizontal axis.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "time series",
                "label": "time series",
                "isCorrect": true,
                "feedback": "Correct! This is the definition of a time series graph."
              },
              {
                "value": "bar",
                "label": "bar",
                "isCorrect": false,
                "feedback": "No, bar graph is different."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> is a general increase or decrease in data over time.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "trend",
                "label": "trend",
                "isCorrect": true,
                "feedback": "Correct! Trend shows the overall direction in data."
              },
              {
                "value": "peak",
                "label": "peak",
                "isCorrect": false,
                "feedback": "Incorrect, a peak is a single high point, not a trend."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span><span class=\"font-semibold\">_____</span> variation refers to patterns that repeat regularly over time in data.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "seasonal",
                "label": "seasonal",
                "isCorrect": true,
                "feedback": "Right! Seasonal variation repeats at regular intervals."
              },
              {
                "value": "random",
                "label": "random",
                "isCorrect": false,
                "feedback": "No, random variation is irregular and unpredictable."
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
      "prompt": "<span>A company records the number of products sold every month over a year and creates a time series graph. Explain how the company can use this graph to identify trends and seasonal variation, and how this information could help them make decisions about stock levels for the coming year.</span>",
      "hint": "<span>Remember to describe trends, seasonal patterns, and how predictions help planning.</span>",
      "mustHaveKeywords": ["trend", "seasonal variation", "prediction", "stock levels"],
      "optionalKeywords": ["increase", "decrease", "plan", "cycles"],
      "modelAnswer": "<span>The time series graph shows trends by indicating whether sales are generally increasing, decreasing or stable. It also reveals seasonal variation by displaying regular fluctuations such as higher sales during certain months. Using this information, the company can predict future sales and adjust stock levels to meet expected demand, avoiding shortages or excess stock.</span>",
      "scaffoldPrompts": [
        "First, look for the overall direction of sales over time — is there a trend?",
        "Next, identify any repeating patterns showing seasonal variation.",
        "Finally, explain why understanding these helps predict future sales and plan stock."
      ]
    }
  }
};