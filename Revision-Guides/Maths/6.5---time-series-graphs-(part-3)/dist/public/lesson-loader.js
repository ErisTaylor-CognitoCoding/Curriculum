window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.5 - Time series graphs (Part 3)",
  "strapline": "Learn how to construct and interpret time series graphs to identify trends and seasonal variations in data collected over time.",
  "learningObjectives": [
    "Students should construct time series graphs by plotting points to display data collected at regular intervals over a period of time (Maths 6.5)",
    "Students should interpret time series graphs to identify key features such as increasing or decreasing trends and seasonal variations (Maths 6.5)",
    "Students should read values from time series graphs and analyse trends and patterns in data sets (Maths 6.5)"
  ],
  "keyFormulas": [
    "Formula 1: There are no standard algebraic formulas for time series graphs, but careful plotting of points with time on the horizontal axis and values on the vertical axis is essential.",
    "Formula 2: Understanding trends involves comparing values over consecutive time periods to determine increase, decrease, or stability.",
    "Reminder: Always label axes clearly and use appropriate scales."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'> <rect x='40' y='30' width='320' height='220' fill='#f9f9f9' stroke='#333' stroke-width='1.5' /> <line x1='60' y1='250' x2='340' y2='250' stroke='#000' stroke-width='2' /> <line x1='60' y1='250' x2='60' y2='50' stroke='#000' stroke-width='2' /> <text x='60' y='270' font-family='sans-serif' font-size='14' fill='#000' text-anchor='middle'>Jan</text> <text x='120' y='270' font-family='sans-serif' font-size='14' fill='#000' text-anchor='middle'>Feb</text> <text x='180' y='270' font-family='sans-serif' font-size='14' fill='#000' text-anchor='middle'>Mar</text> <text x='240' y='270' font-family='sans-serif' font-size='14' fill='#000' text-anchor='middle'>Apr</text> <text x='300' y='270' font-family='sans-serif' font-size='14' fill='#000' text-anchor='middle'>May</text> <text x='20' y='250' font-family='sans-serif' font-size='14' fill='#000' text-anchor='end'>0</text> <text x='20' y='210' font-family='sans-serif' font-size='14' fill='#000' text-anchor='end'>20</text> <text x='20' y='170' font-family='sans-serif' font-size='14' fill='#000' text-anchor='end'>40</text> <text x='20' y='130' font-family='sans-serif' font-size='14' fill='#000' text-anchor='end'>60</text> <text x='20' y='90' font-family='sans-serif' font-size='14' fill='#000' text-anchor='end'>80</text> <polyline fill='none' stroke='#007acc' stroke-width='2' points='60,210 120,170 180,130 240,150 300,110' /> <circle cx='60' cy='210' r='4' fill='#007acc' /> <circle cx='120' cy='170' r='4' fill='#007acc' /> <circle cx='180' cy='130' r='4' fill='#007acc' /> <circle cx='240' cy='150' r='4' fill='#007acc' /> <circle cx='300' cy='110' r='4' fill='#007acc' /> <text x='200' y='30' font-family='sans-serif' font-size='16' fill='#333' text-anchor='middle'><strong>Sample Time Series Graph</strong></text> <text x='380' y='250' font-family='sans-serif' font-size='14' fill='#333' text-anchor='end'>Time (Months)</text> <text x='40' y='40' font-family='sans-serif' font-size='14' fill='#333' text-anchor='start' transform='rotate(-90 40,40)'>Value</text> </svg>",
  "step1": {
    "title": "Concept: Understanding a Time Series Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>time series graph</strong> shows data collected <em>at regular intervals</em> over a period of time. Time is always shown on the horizontal (x) axis, while the measured value goes on the vertical (y) axis. Points representing data values are plotted and connected by line segments to reveal trends and patterns.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a time series graph like tracking the temperature each day. You write down the temperature every morning and then connect the dots on a graph to see if it's getting warmer or colder over the week.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Points on a Time Series Graph",
      "problem": "You collected data on the number of visitors to a park each month: January: 30, February: 45, March: 40. Let's plot these points on a graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What value do you plot for January on the vertical axis?",
          "answer": "30",
          "feedback": "Correct. January's value is 30 visitors."
        },
        {
          "id": "q2",
          "prompt": "For February, what value do you plot?",
          "answer": "45",
          "feedback": "Good! February's value is 45 visitors."
        },
        {
          "id": "q3",
          "prompt": "For March, what value do you plot?",
          "answer": "40",
          "feedback": "Yes! March's value is 40 visitors."
        },
        {
          "id": "q4",
          "prompt": "Connect the three points with line segments. Does the graph show an increase, decrease, or mixed trend?",
          "answer": "Mixed",
          "feedback": "Correct. The graph increases from January to February, then decreases from February to March."
        }
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: Identify Trends",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which description best fits a time series graph that shows values steadily rising over time?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Decreasing trend</span>",
            "isCorrect": false,
            "explanation": "Incorrect. A steadily rising graph shows an increasing trend, not decreasing."
          },
          {
            "id": "b",
            "label": "<span>Increasing trend</span>",
            "isCorrect": true,
            "explanation": "Correct! A steady rise means an increasing trend."
          },
          {
            "id": "c",
            "label": "<span>Seasonal variation</span>",
            "isCorrect": false,
            "explanation": "Seasonal variation involves repeating patterns, not steady rise."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> graph connects data points collected at regular intervals to show trends over time.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "time series",
                "label": "time series",
                "isCorrect": true,
                "feedback": "Well done! A time series graph shows data over time."
              },
              {
                "value": "bar",
                "label": "bar",
                "isCorrect": false,
                "feedback": "Incorrect. Bar graphs do not connect points over time."
              },
              {
                "value": "pie",
                "label": "pie",
                "isCorrect": false,
                "feedback": "Incorrect. Pie charts show proportions, not trends over time."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> is the general direction the data moves, such as increasing or decreasing.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "trend",
                "label": "trend",
                "isCorrect": true,
                "feedback": "Correct! Trend means the overall direction of the data."
              },
              {
                "value": "seasonal variation",
                "label": "seasonal variation",
                "isCorrect": false,
                "feedback": "No, seasonal variation refers to repeating patterns, not direction."
              },
              {
                "value": "axis",
                "label": "axis",
                "isCorrect": false,
                "feedback": "Axis is part of the graph, not the data direction."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span>Regular, repeating changes at specific times in a year are called <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "seasonal variation",
                "label": "seasonal variation",
                "isCorrect": true,
                "feedback": "Yes! Seasonal variation means repeating changes that happen in cycles."
              },
              {
                "value": "data points",
                "label": "data points",
                "isCorrect": false,
                "feedback": "No, data points are values collected, not cyclical changes."
              },
              {
                "value": "trend",
                "label": "trend",
                "isCorrect": false,
                "feedback": "Trend is the overall direction, not repeating changes."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Interpreting Trends from a Time Series Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Look at the plotted points and the shape of the connected lines to find trends. If the line slopes upwards over time, it shows an <strong>increasing trend</strong>. If it slopes downwards, it shows a <strong>decreasing trend</strong>. If the line stays mostly flat, the trend is <strong>stable</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Identifying the Trend",
      "problem": "Given a graph with points: January - 20, February - 30, March - 25, April - 35, identify the trend from January to April.",
      "questions": [
        {
          "id": "q1",
          "prompt": "From January to February, does the value increase, decrease, or stay constant?",
          "answer": "increase",
          "feedback": "Correct! The value goes from 20 to 30, an increase."
        },
        {
          "id": "q2",
          "prompt": "From February to March, what happens to the value?",
          "answer": "decrease",
          "feedback": "Good! The value falls from 30 to 25."
        },
        {
          "id": "q3",
          "prompt": "Looking at all data, is the overall trend increasing, decreasing, or mixed?",
          "answer": "mixed",
          "feedback": "Correct. The graph rises and falls, so the overall trend is mixed."
        }
      ]
    }
  },
  "step5": {
    "title": "Identifying Seasonal Variation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Seasonal variation is when data shows a repeating pattern over regular time intervals, such as higher sales during summer months and lower in winter. Look for cycles or repeated ups and downs in the graph that occur at specific times.</p>",
    "workedExample": {
      "title": "Worked Example: Spotting Seasonal Patterns",
      "problem": "A graph shows ice cream sales each month: peaks in June, July, August and valleys in December, January and February. Is this an example of seasonal variation?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Do the sales increase and decrease in a regular, repeating yearly cycle?",
          "answer": "yes",
          "feedback": "Correct! The pattern repeats every year."
        },
        {
          "id": "q2",
          "prompt": "What is this repeating pattern called?",
          "answer": "seasonal variation",
          "feedback": "Right! This is called seasonal variation."
        }
      ]
    }
  },
  "step6": {
    "title": "Reading Values and Analysing Patterns",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You should be able to read exact values from the graph by looking at the vertical axis at given time points and use these values to discuss trends or seasonal effects. This helps to understand the data’s real-world implications.</p>",
    "workedExample": {
      "title": "Worked Example: Reading Values and Describing Patterns",
      "problem": "A time series graph shows monthly rainfall (mm) for 6 months: Jan-40, Feb-45, Mar-50, Apr-45, May-40, Jun-35. Read the value for March and describe the pattern.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the rainfall value for March?",
          "answer": "50",
          "feedback": "Correct! The rainfall in March is 50 mm."
        },
        {
          "id": "q2",
          "prompt": "Describe the trend in rainfall from January to June.",
          "answer": "decreasing",
          "feedback": "Yes! The rainfall rises slightly then generally decreases after March."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to construct and interpret a time series graph to identify trends and seasonal variations in a data set collected monthly over a year.</span>",
      "hint": "Remember to mention plotting points, labeling axes, looking for increasing or decreasing trends, and recognizing repeating seasonal patterns.",
      "mustHaveKeywords": ["plotting points", "trend", "seasonal variation", "regular intervals"],
      "optionalKeywords": ["line segments", "label axes", "data values"],
      "modelAnswer": "<span>To construct a time series graph, start by plotting data points with time on the horizontal axis at regular intervals, and the values measured on the vertical axis. Connect these points with line segments to show how the data changes over time. To interpret the graph, look for trends where values generally increase, decrease, or stay constant. Also, identify seasonal variation by noting any repeating patterns or cycles that occur at similar times each year.</span>",
      "scaffoldPrompts": [
        "First, describe how you plot points on the graph with time and values.",
        "Next, explain how to identify a trend in the graph.",
        "Then, describe how to spot seasonal variations from repeated patterns."
      ]
    }
  }
};