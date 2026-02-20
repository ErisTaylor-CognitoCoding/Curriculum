window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.1 - Cumulative frequency graphs",
  "strapline": "Learn how to construct and interpret cumulative frequency graphs to find medians and quartiles.",
  "learningObjectives": [
    "Students should construct cumulative frequency graphs by plotting cumulative frequencies against upper class boundaries (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to read off median values and quartiles from the curve (Maths 6.1)"
  ],
  "keyFormulas": [
    "Cumulative Frequency = Sum of frequencies up to a given class boundary",
    "Median = Value at (N/2)<sup>th</sup> cumulative frequency",
    "Quartiles = Values at (N/4)<sup>th</sup> and (3N/4)<sup>th</sup> cumulative frequencies"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='40' y='40' width='320' height='200' fill='#fafafa' stroke='#bbb' stroke-width='1'/>  <line x1='40' y1='240' x2='360' y2='240' stroke='#333' stroke-width='2'/>  <line x1='40' y1='40' x2='40' y2='240' stroke='#333' stroke-width='2'/>  <text x='30' y='250' font-family='sans-serif' font-size='12' text-anchor='middle'>20</text>  <text x='110' y='255' font-family='sans-serif' font-size='12' text-anchor='middle'>40</text>  <text x='180' y='255' font-family='sans-serif' font-size='12' text-anchor='middle'>60</text>  <text x='250' y='255' font-family='sans-serif' font-size='12' text-anchor='middle'>80</text>  <text x='320' y='255' font-family='sans-serif' font-size='12' text-anchor='middle'>100</text>  <text x='10' y='240' font-family='sans-serif' font-size='12' text-anchor='end'>0</text>  <text x='10' y='140' font-family='sans-serif' font-size='12' text-anchor='end'>50</text>  <text x='10' y='40' font-family='sans-serif' font-size='12' text-anchor='end'>100</text>  <polyline fill='none' stroke='#0074d9' stroke-width='2' points='40,220 110,185 180,130 250,80 320,50'/>  <circle cx='40' cy='220' r='4' fill='#0074d9'/>  <circle cx='110' cy='185' r='4' fill='#0074d9'/>  <circle cx='180' cy='130' r='4' fill='#0074d9'/>  <circle cx='250' cy='80' r='4' fill='#0074d9'/>  <circle cx='320' cy='50' r='4' fill='#0074d9'/>  <text x='360' y='245' font-family='sans-serif' font-size='12'>Upper Class Boundary</text>  <text x='5' y='30' font-family='sans-serif' font-size='12' transform='rotate(-90 15,40)'>Cumulative Frequency</text></svg>",
  "step1": {
    "title": "Concept: Understanding Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies from the start of the data set up to a particular class boundary. It helps us see how values accumulate over intervals.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine counting people entering a stadium row by row. The cumulative frequency is like counting everyone seated up to a certain row to know the total so far.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Cumulative Frequencies",
      "problem": "Given the frequency table:<br><table><tr><th>Class Interval</th><th>Frequency</th></tr><tr><td>10 - 20</td><td>4</td></tr><tr><td>20 - 30</td><td>7</td></tr><tr><td>30 - 40</td><td>5</td></tr></table> Calculate the cumulative frequencies step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the cumulative frequency up to 20?",
          "answer": "4",
          "feedback": "Correct. The first cumulative frequency is the same as the first frequency."
        },
        {
          "id": "q2",
          "prompt": "Add the frequency for 20-30 to the previous total. What is the cumulative frequency up to 30?",
          "answer": "11",
          "feedback": "Correct. 4 + 7 = 11."
        },
        {
          "id": "q3",
          "prompt": "Add the frequency for 30-40. What is the cumulative frequency up to 40?",
          "answer": "16",
          "feedback": "Correct. 11 + 5 = 16."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Upper Class Boundaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The upper class boundary is the highest point of a class interval and is used for plotting on the x-axis of cumulative frequency graphs.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the upper class boundary as the top shelf in a bookcase section; it marks the end of a particular group.</p>"
    },
    "workedExample": {
      "title": "Interactive Practice: Identify Upper Class Boundaries",
      "problem": "For these intervals, enter their upper class boundaries:<br><ul><li>15 - 25</li><li>35 - 45</li><li>50 - 60</li></ul>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the upper class boundary for 15 - 25",
          "answer": "25",
          "feedback": "Correct. The upper boundary is 25."
        },
        {
          "id": "q2",
          "prompt": "Enter the upper class boundary for 35 - 45",
          "answer": "45",
          "feedback": "Good job! The upper boundary is 45."
        },
        {
          "id": "q3",
          "prompt": "Enter the upper class boundary for 50 - 60",
          "answer": "60",
          "feedback": "Well done. 60 is correct."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Constructing the Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Plot cumulative frequency values against their corresponding upper class boundaries on a graph. Then, draw a smooth curve (ogive) through these points.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like connecting dots on a treasure map to reveal the path, the cumulative frequency curve connects cumulative points to show data distribution.</p>"
    },
    "workedExample": {
      "title": "Interactive Step-by-Step Plotting",
      "problem": "Use the cumulative frequencies [4, 11, 16] and upper boundaries [20, 30, 40]. Plot each point on the graph and draw the curve.",
      "questions": [
        {
          "id": "q1",
          "prompt": "At x = 20, what y-value do you plot?",
          "answer": "4",
          "feedback": "Correct, plot (20,4)."
        },
        {
          "id": "q2",
          "prompt": "At x = 30, plot the cumulative frequency point. Enter y-value.",
          "answer": "11",
          "feedback": "Right, plot (30,11)."
        },
        {
          "id": "q3",
          "prompt": "At x = 40, plot the last point. Enter y-value.",
          "answer": "16",
          "feedback": "Correct, plot (40,16). Now draw a smooth curve through these points."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Interpreting the Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">From the curve, you can find the median and quartiles by locating values at specific cumulative frequencies.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the curve as a ladder: stepping up to halfway shows the median, and quarter steps show quartiles.</p>"
    },
    "workedExample": {
      "title": "Finding Median on a Graph",
      "problem": "If the total frequency is 16, find the median value from the graph by locating the cumulative frequency 8 on y-axis and reading its x-value.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is half of total frequency 16?",
          "answer": "8",
          "feedback": "Correct. The median corresponds to the cumulative frequency 8."
        },
        {
          "id": "q2",
          "prompt": "From the graph, estimate the x-value that corresponds to cumulative frequency 8.",
          "answer": "Approximately 25",
          "feedback": "Well done. The median lies near 25."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the cumulative frequency represent on a graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The number of data points below a certain value</span>",
            "isCorrect": true,
            "explanation": "Correct. Cumulative frequency totals data points up to a given class boundary."
          },
          {
            "id": "b",
            "label": "<span>The frequency within a class interval only</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That describes a frequency, not cumulative frequency."
          },
          {
            "id": "c",
            "label": "<span>The midpoint of class intervals</span>",
            "isCorrect": false,
            "explanation": "Wrong. Midpoint relates to class intervals, not cumulative frequency."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What is plotted on the x-axis of a cumulative frequency graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The upper class boundaries</span>",
            "isCorrect": true,
            "explanation": "Correct. Upper class boundaries are plotted on the x-axis."
          },
          {
            "id": "b",
            "label": "<span>The cumulative frequencies</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Cumulative frequencies are on the y-axis."
          },
          {
            "id": "c",
            "label": "<span>The class midpoints</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Midpoints are not used on cumulative frequency graphs."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the running total of frequencies up to a particular class boundary.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "cumulativeFrequency",
                "label": "Cumulative Frequency",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "median",
                "label": "Median",
                "isCorrect": false,
                "feedback": "Incorrect. Median is a central value, not a running total."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the highest value of a class interval, used on the x-axis.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "upperClassBoundary",
                "label": "Upper Class Boundary",
                "isCorrect": true,
                "feedback": "Well done!"
              },
              {
                "value": "lowerClassBoundary",
                "label": "Lower Class Boundary",
                "isCorrect": false,
                "feedback": "Incorrect, it's the upper class boundary here."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A grouped frequency table shows scores of students in a test:<br><table><tr><th>Score</th><th>Frequency</th></tr><tr><td>0 - 10</td><td>3</td></tr><tr><td>10 - 20</td><td>5</td></tr><tr><td>20 - 30</td><td>7</td></tr><tr><td>30 - 40</td><td>5</td></tr></table> Construct a cumulative frequency table, plot a cumulative frequency graph and estimate the median and lower quartile.</span>",
      "hint": "Remember to add frequencies step-by-step to find cumulative frequencies, plot points using upper class boundaries, then use the graph to find median at N/2 and quartile at N/4.",
      "mustHaveKeywords": ["cumulative frequency", "upper class boundary", "median", "lower quartile", "graph"],
      "optionalKeywords": ["ogive", "curve"],
      "modelAnswer": "<span>First, calculate cumulative frequencies:<br>0-10 = 3,<br>10-20 = 3 + 5 = 8,<br>20-30 = 8 + 7 = 15,<br>30-40 = 15 + 5 = 20.<br>Plot these points (10,3), (20,8), (30,15), and (40,20) on the graph.<br>Draw a smooth curve through the points forming the ogive.<br>Median is at cumulative frequency 20/2 = 10; read the x-value at y = 10 (between 20 and 30).<br>Lower quartile at 20/4 = 5; read x at y = 5 (between 10 and 20).</span>",
      "scaffoldPrompts": [
        "Calculate cumulative frequencies step-by-step",
        "Identify upper class boundaries for plotting",
        "Plot points accurately on the graph",
        "Draw a smooth curve through points",
        "Use the curve to read median and quartiles"
      ]
    }
  }
};