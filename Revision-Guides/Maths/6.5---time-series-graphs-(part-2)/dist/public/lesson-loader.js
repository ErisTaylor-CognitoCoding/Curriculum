window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.5 - Time series graphs (Part 2)",
  "strapline": "Learn how to construct and interpret time series graphs to identify trends and seasonal variations in data collected over time.",
  "learningObjectives": [
    "Students should construct time series graphs by plotting points to show trends and patterns in data sets collected at regular intervals over a period of time (Maths 6.5)",
    "Students should interpret time series graphs by reading values and identifying key features such as increasing or decreasing trends and seasonal variations (Maths 6.5)",
    ""
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><line x1='70' y1='230' x2='70' y2='50' stroke='#000' /><line x1='70' y1='230' x2='350' y2='230' stroke='#000' /><text x='35' y='55' font-family='sans-serif' font-size='12'>Value</text><text x='350' y='250' font-family='sans-serif' font-size='12' text-anchor='end'>Time (Months)</text><polyline points='70,180 120,160 170,140 220,125 270,110 320,130 350,100' fill='none' stroke='#0074D9' stroke-width='2'/><circle cx='70' cy='180' r='3' fill='#0074D9'/><circle cx='120' cy='160' r='3' fill='#0074D9'/><circle cx='170' cy='140' r='3' fill='#0074D9'/><circle cx='220' cy='125' r='3' fill='#0074D9'/><circle cx='270' cy='110' r='3' fill='#0074D9'/><circle cx='320' cy='130' r='3' fill='#0074D9'/><circle cx='350' cy='100' r='3' fill='#0074D9'/><text x='200' y='40' font-family='sans-serif' font-size='14' font-weight='bold' text-anchor='middle'>Example Time Series Graph</text></svg>",
  "step1": {
    "title": "Concept: What is a Time Series Graph?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>time series graph</strong> shows how data values change over time. The horizontal axis (x-axis) usually represents time intervals like days, months, or years. The vertical axis (y-axis) shows the values recorded at those times. Plotting points and connecting them helps us see changes and patterns.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine tracking how tall you grow each year. A time series graph is like plotting your height at birthdays on a line to see how you grow over time.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Points",
      "problem": "A shop records the number of ice creams sold each month: January - 50, February - 70, March - 90. Let's plot these points on a graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What value do you plot on the y-axis for January?",
          "answer": "50",
          "feedback": "Correct. January sales were 50."
        },
        {
          "id": "q2",
          "prompt": "Now plot the point for February. What y-value do you use?",
          "answer": "70",
          "feedback": "Right. February sales were 70."
        },
        {
          "id": "q3",
          "prompt": "Finally, what value is plotted for March?",
          "answer": "90",
          "feedback": "Exactly. March sales were 90."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Trends",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>trend</strong> shows the overall direction a time series moves. It can be <em>increasing</em> (values go up), <em>decreasing</em> (values go down), or <em>stable</em> (values stay about the same). Identifying trends helps predict future behaviour.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like watching plants grow over weeks, an increasing trend means height is going up. If they wilt, there's a decreasing trend.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Trends",
      "problem": "The monthly temperature is recorded as: Jan 5°C, Feb 7°C, Mar 10°C, Apr 14°C. What trend do you see?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the temperature rising, falling, or stable?",
          "answer": "rising",
          "feedback": "Correct! The temperature is rising."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Recognising Seasonal Variation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Seasonal variation means patterns repeat regularly, such as every year or every season. For example, ice cream sales peak in summer and dip in winter. These recurring patterns are important to recognise in time series data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of how your electricity use is higher every winter due to heating—this repeated change is seasonal variation.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Spotting Seasonal Variation",
      "problem": "A store records sales of hats over a year: high in summer months (June, July, August), low in others. Is this seasonal variation?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does selling more hats every summer illustrate seasonal variation?",
          "answer": "yes",
          "feedback": "Right! This repeating pattern shows seasonal variation."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Plotting Points on a Time Series Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the data below, plot the points for each month on the graph, then connect the dots.</p>",
    "workedExample": {
      "title": "Plot the following sales data:",
      "problem": "Sales in units: April - 30, May - 45, June - 55, July - 60",
      "questions": [
        {
          "id": "q1",
          "prompt": "What y-value do you plot for April?",
          "answer": "30",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "What y-value for May?",
          "answer": "45",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Plot June sales on the graph. What value?",
          "answer": "55",
          "feedback": "Well done."
        },
        {
          "id": "q4",
          "prompt": "Finally, plot July sales. Value?",
          "answer": "60",
          "feedback": "Great!"
        }
      ]
    }
  },
  "step5": {
    "title": "Interpretation: Reading Time Series Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Look at a time series graph and identify features: where values rise or fall, points of peaks or troughs, and repeating patterns. This helps understand the data's story.</p>",
    "workedExample": {
      "title": "Interpreting a Graph",
      "problem": "Given a graph showing sales increasing from 40 in Jan to 80 in June, then falling to 50 in Sept, describe the trend and any seasonal variation.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the overall trend increasing, decreasing, or stable between January and June?",
          "answer": "increasing",
          "feedback": "Correct, sales rose."
        },
        {
          "id": "q2",
          "prompt": "From June to September, what is the trend?",
          "answer": "decreasing",
          "feedback": "Yes, sales fell."
        },
        {
          "id": "q3",
          "prompt": "If sales rise every summer then fall in autumn, what variation is this?",
          "answer": "seasonal",
          "feedback": "Exactly, this is seasonal variation."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A business collects monthly data on customers visiting their shop for 12 months. The graph shows a generally rising trend but dips every December. Explain what this tells us about the trend and seasonal variations in the customer's visits.</span>",
      "hint": "Remember to describe the overall direction of data and what repeated dips show.",
      "mustHaveKeywords": ["trend", "seasonal variation", "December", "dip", "rising"],
      "optionalKeywords": ["pattern", "regular intervals"],
      "modelAnswer": "<span>The graph shows a <strong>rising trend</strong> as customer visits increase over the months, but there is a clear <strong>seasonal variation</strong> where visits dip every December, indicating a regular decrease during that month despite the overall growth.</span>",
      "scaffoldPrompts": ["Look at how the data changes overall from the start to the end of the year.", "Identify what happens specifically during December each year.", "Use the terms trend and seasonal variation in your explanation."]
    }
  }
};