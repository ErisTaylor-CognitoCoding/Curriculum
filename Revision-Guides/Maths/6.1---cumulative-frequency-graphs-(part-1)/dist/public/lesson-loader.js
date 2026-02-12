window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 1)",
  "strapline": "Learn how to construct and interpret cumulative frequency graphs to estimate medians and understand data distributions.",
  "learningObjectives": [
    "Students should be able to construct cumulative frequency graphs by plotting cumulative frequency against the upper class boundaries of grouped data (Maths 6.1)",
    "Students should be able to draw smooth cumulative frequency curves from plotted data (Maths 6.1)",
    "Students should be able to use cumulative frequency graphs to find estimates for the median and interpret data values above or below certain thresholds (Maths 6.1)"
  ],
  "keyFormulas": [
    "Formula 1: Cumulative Frequency = Sum of all frequencies up to the current class",
    "Formula 2: Median ≈ value corresponding to the (n/2)<sup>th</sup> cumulative frequency on the curve",
    "Reminder: Use upper class boundaries for the x-axis when plotting"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#333' /><polyline fill='none' stroke='#0074D9' stroke-width='2' points='80,260 130,220 180,180 230,140 280,100 330,70'/><circle cx='80' cy='260' r='4' fill='#0074D9'/><circle cx='130' cy='220' r='4' fill='#0074D9'/><circle cx='180' cy='180' r='4' fill='#0074D9'/><circle cx='230' cy='140' r='4' fill='#0074D9'/><circle cx='280' cy='100' r='4' fill='#0074D9'/><circle cx='330' cy='70' r='4' fill='#0074D9'/><text x='180' y='290' font-family='sans-serif' font-size='14' text-anchor='middle'>Upper Class Boundaries</text><text x='10' y='150' font-family='sans-serif' font-size='14' transform='rotate(-90 10,150)' text-anchor='middle'>Cumulative Frequency</text></svg>",
  "step1": {
    "title": "Concept: What is Cumulative Frequency?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to a certain point in grouped data. For each class interval, you add its frequency to the sum of the previous frequencies, building a total that increases as you move through the data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling a jar with coins, adding a certain number each day. The cumulative frequency is like the total number of coins in the jar up to that day — it always increases.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Cumulative Frequency",
      "problem": "Given the frequency table:<br><table><tr><th>Class Interval</th><th>Frequency</th></tr><tr><td>0 - 10</td><td>3</td></tr><tr><td>10 - 20</td><td>5</td></tr><tr><td>20 - 30</td><td>7</td></tr></table> Calculate the cumulative frequency for each class.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the cumulative frequency for the class 0 - 10?",
          "answer": "3",
          "feedback": "Correct. The first cumulative frequency is just the frequency of the first class."
        },
        {
          "id": "q2",
          "prompt": "What is the cumulative frequency for the class 10 - 20?",
          "answer": "8",
          "feedback": "Correct! 3 (previous total) + 5 = 8."
        },
        {
          "id": "q3",
          "prompt": "What is the cumulative frequency for the class 20 - 30?",
          "answer": "15",
          "feedback": "Correct. Add the last frequency to the previous total: 8 + 7 = 15."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Upper Class Boundaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Upper class boundaries are the highest value in each class interval. When plotting a cumulative frequency graph, these values go on the x-axis. They help to show the continuous scale of data classes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of each class as a shelf on a bookcase. The upper class boundary is like the top edge of the shelf marking the highest item it can hold.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Upper Class Boundaries",
      "problem": "For the classes 0 - 10, 10 - 20, and 20 - 30, state the upper class boundaries.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the upper class boundary for 0 - 10?",
          "answer": "10",
          "feedback": "Correct! It is the highest value in that class."
        },
        {
          "id": "q2",
          "prompt": "What is the upper class boundary for 10 - 20?",
          "answer": "20",
          "feedback": "Well done! The upper boundary is 20."
        },
        {
          "id": "q3",
          "prompt": "What is the upper class boundary for 20 - 30?",
          "answer": "30",
          "feedback": "Correct! The highest value is 30."
        }
      ]
    }
  },
  "step3": {
    "title": "Constructing the Cumulative Frequency Table",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To build a cumulative frequency graph, combine cumulative frequencies with their corresponding upper class boundaries in a table. This table will form the basis for plotting the graph.</p>",
    "workedExample": {
      "title": "Worked Example: Create the Table",
      "problem": "Using the frequencies and upper class boundaries below, complete the table:<br><table><tr><th>Class Interval</th><th>Frequency</th><th>Upper Class Boundary</th><th>Cumulative Frequency</th></tr><tr><td>0 - 10</td><td>3</td><td>10</td><td>?</td></tr><tr><td>10 - 20</td><td>5</td><td>20</td><td>?</td></tr><tr><td>20 - 30</td><td>7</td><td>30</td><td>?</td></tr></table>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the cumulative frequency for 0 - 10:",
          "answer": "3",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Enter the cumulative frequency for 10 - 20:",
          "answer": "8",
          "feedback": "Good, 3 + 5 = 8."
        },
        {
          "id": "q3",
          "prompt": "Enter the cumulative frequency for 20 - 30:",
          "answer": "15",
          "feedback": "Correct again! 8 + 7 = 15."
        }
      ]
    }
  },
  "step4": {
    "title": "Plotting Points on the Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Plot the cumulative frequency on the y-axis against the upper class boundaries on the x-axis using the table values. Each point shows how many data values fall up to that boundary.</p>",
    "workedExample": {
      "title": "Worked Example: Plotting Points",
      "problem": "Plot these points: (10, 3), (20, 8), (30, 15) on a graph with cumulative frequency on y-axis and upper class boundary on x-axis.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the coordinates for the first point?",
          "answer": "(10, 3)",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "What are the coordinates for the second point?",
          "answer": "(20, 8)",
          "feedback": "Well done."
        },
        {
          "id": "q3",
          "prompt": "What are the coordinates for the third point?",
          "answer": "(30, 15)",
          "feedback": "Correct."
        }
      ]
    }
  },
  "step5": {
    "title": "Drawing a Smooth Cumulative Frequency Curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Join the plotted points with a smooth, S-shaped curve. The curve should not have sharp corners but flow smoothly through or near the points, showing the cumulative rise in frequencies.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine connecting the dots on a rollercoaster track smoothly — rises and curves flow naturally without any sudden jumps.</p>"
    },
    "workedExample": {
      "title": "Practice Drawing the Curve",
      "problem": "Plot points as before and draw a smooth curve through them.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does your curve pass through all points smoothly?",
          "answer": "yes",
          "feedback": "Excellent! A smooth curve accurately represents cumulative data."
        }
      ]
    }
  },
  "step6": {
    "title": "Using the Graph to Estimate the Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of the dataset. To estimate it from the cumulative frequency graph, find half the total frequency on the y-axis, draw a horizontal line to intersect the curve, then drop a vertical line to the x-axis to read the median value.</p>",
    "workedExample": {
      "title": "Worked Example: Estimating Median",
      "problem": "Total frequency is 15. Half is 7.5. Use your cumulative frequency curve to find the estimated median.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is half the total frequency?",
          "answer": "7.5",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "On the graph, draw a horizontal line at 7.5 cumulative frequency. What upper class boundary does the vertical line from the curve intersect with?",
          "answer": "Between 15 and 20",
          "feedback": "Good, the median lies between these values."
        }
      ]
    }
  },
  "step7": {
    "title": "Interpreting Data Values Above or Below Thresholds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use the curve to estimate how many data values lie above or below any given value by drawing vertical or horizontal lines. This helps interpret proportions of data within certain ranges.</p>",
    "workedExample": {
      "title": "Worked Example: Estimating Frequencies from Graph",
      "problem": "Use the cumulative frequency curve to find how many values are below 25.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Draw a vertical line at 25 on the x-axis and read the cumulative frequency.",
          "answer": "12",
          "feedback": "Correct. About 12 data values are below 25."
        },
        {
          "id": "q2",
          "prompt": "How many data values are above 25?",
          "answer": "3",
          "feedback": "Yes, total frequency (15) minus 12 below means 3 above."
        }
      ]
    }
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A grouped frequency table has classes 0-5, 5-10, 10-15, 15-20 with frequencies 4, 6, 8 and 2.</span><br><span>Construct a cumulative frequency table, plot the cumulative frequency graph, draw a smooth curve, and use it to estimate the median.</span>",
      "hint": "Remember to calculate cumulative frequencies, plot against upper class boundaries, draw carefully, and use half the total frequency to find the median.",
      "mustHaveKeywords": ["cumulative frequency", "upper class boundary", "smooth curve", "median"],
      "optionalKeywords": ["estimate", "interpolation", "frequency totals"],
      "modelAnswer": "<span>First, calculate cumulative frequencies: 4, 10, 18, 20. Then plot these against upper boundaries 5, 10, 15, 20. Draw a smooth curve through the points. Half total frequency is 10, find where y=10 cuts the curve. Read the corresponding x-value as the median estimate.</span>",
      "scaffoldPrompts": ["Calculate cumulative frequencies first", "Plot points with upper boundaries", "Draw a smooth curve through the points", "Find half the total frequency", "Locate this on the y-axis and project to x-axis"]
    }
  }
};