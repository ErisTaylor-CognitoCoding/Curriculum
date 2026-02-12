window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 1)",
  "strapline": "Learn how to construct and interpret cumulative frequency graphs to analyse grouped data and estimate medians.",
  "learningObjectives": [
    "Students should be able to construct cumulative frequency graphs by plotting cumulative frequency against the upper class boundaries of grouped data (Maths 6.1)",
    "Students should be able to draw smooth cumulative frequency curves from plotted data (Maths 6.1)",
    "Students should be able to use cumulative frequency graphs to find estimates for the median and interpret data values above or below certain thresholds (Maths 6.1)"
  ],
  "keyFormulas": [
    "Cumulative frequency = sum of frequencies up to a point",
    "Median estimate = value corresponding to half the total frequency on the cumulative frequency curve",
    "Upper class boundary = highest value in each class interval"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#666' /><line x1='50' y1='250' x2='350' y2='250' stroke='#333' stroke-width='2'/><line x1='50' y1='250' x2='50' y2='50' stroke='#333' stroke-width='2'/><text x='30' y='260' font-family='sans-serif' font-size='12'>0</text><text x='70' y='265' font-family='sans-serif' font-size='12'>10</text><text x='130' y='265' font-family='sans-serif' font-size='12'>20</text><text x='190' y='265' font-family='sans-serif' font-size='12'>30</text><text x='250' y='265' font-family='sans-serif' font-size='12'>40</text><text x='310' y='265' font-family='sans-serif' font-size='12'>50</text><text x='10' y='250' font-family='sans-serif' font-size='12'>0</text><text x='10' y='210' font-family='sans-serif' font-size='12'>5</text><text x='10' y='170' font-family='sans-serif' font-size='12'>10</text><text x='10' y='130' font-family='sans-serif' font-size='12'>15</text><text x='10' y='90' font-family='sans-serif' font-size='12'>20</text><circle cx='70' cy='210' r='3' fill='#0074D9'/><circle cx='130' cy='170' r='3' fill='#0074D9'/><circle cx='190' cy='130' r='3' fill='#0074D9'/><circle cx='250' cy='90' r='3' fill='#0074D9'/><path d='M70 210 Q100 190 130 170 T190 130 T250 90' fill='none' stroke='#0074D9' stroke-width='2'/><text x='150' y='30' font-family='sans-serif' font-size='16' font-weight='bold'>Cumulative Frequency Graph Example</text></svg>",
  "step1": {
    "title": "Concept: What is Cumulative Frequency?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to a certain point in grouped data. You add each frequency to the total of all previous frequencies to get the cumulative frequency for each class interval.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of filling a bucket with water from several smaller containers. After pouring each container, the water level rises — this rising level is like cumulative frequency increasing as you add data groups.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given frequencies: 5, 8, 10</span>",
        "<span>Calculate cumulative frequencies: First class 5, then 5 + 8 = 13, then 13 + 10 = 23</span>"
      ]
    }
  },
  "step2": {
    "title": "Key Concept: Upper Class Boundaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When plotting cumulative frequency graphs, the cumulative frequency is always plotted against the upper class boundary of each group. The upper class boundary is the maximum value included in that interval.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine intervals as doors. You always mark the running count at the top of the doorframe, which represents the upper boundary where the count ends.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Class intervals: 0–9, 10–19, 20–29</span>",
        "<span>Upper class boundaries: 9, 19, 29</span>"
      ]
    }
  },
  "step3": {
    "title": "Plotting the Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Plot the points with the x-coordinate as the upper class boundary and the y-coordinate as the cumulative frequency for that class. Then connect these points smoothly to form the cumulative frequency curve.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like connecting stars in the sky, smooth the line to follow the points rather than joining them with straight edges, creating an easy-to-read S-shaped curve.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot points: (9, 5), (19, 13), (29, 23)</span>",
        "<span>Draw a smooth curve through these points</span>"
      ]
    }
  },
  "step4": {
    "title": "Using the Cumulative Frequency Curve to Find the Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the value that splits the data into two equal halves. On a cumulative frequency graph, find half of the total frequency on the y-axis, and then draw a horizontal line across to meet the curve. Drop down vertically to the x-axis to estimate the median value.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency = 40, so half = 20</span>",
        "<span>At y = 20, draw horizontal line to curve, then drop vertical line to x-axis</span>",
        "<span>This x-value is the estimated median</span>"
      ]
    }
  },
  "step5": {
    "title": "Interpreting Data Using the Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can estimate how many data points lie above or below a certain value using the curve. For a value on the x-axis, find its cumulative frequency on the curve to see how many data points are up to that amount.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Estimate how many students scored below 25 by finding the point at x = 25 on the curve</span>",
        "<span>Read the corresponding cumulative frequency on the y-axis</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is plotted on the x-axis of a cumulative frequency graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Upper class boundaries</span>",
            "isCorrect": true,
            "explanation": "Correct! The upper class boundary represents the limit of each group on the x-axis."
          },
          {
            "id": "b",
            "label": "<span>Frequencies</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Frequencies are used to calculate cumulative frequency, but are plotted on the y-axis."
          },
          {
            "id": "c",
            "label": "<span>Cumulative frequency values</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Cumulative frequencies are plotted on the y-axis."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the running total of frequencies up to a point.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "cumulative_frequency",
                "label": "Cumulative Frequency",
                "isCorrect": true,
                "feedback": "Correct! Cumulative frequency is a running total."
              },
              {
                "value": "median",
                "label": "Median",
                "isCorrect": false,
                "feedback": "Incorrect, median is a statistical value, not a running total."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the highest value in a class interval, used for plotting on the x-axis.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "upper_class_boundary",
                "label": "Upper Class Boundary",
                "isCorrect": true,
                "feedback": "Correct! This is what we use on the x-axis."
              },
              {
                "value": "frequency",
                "label": "Frequency",
                "isCorrect": false,
                "feedback": "Incorrect, frequency is the count within the class interval."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Drawing Smooth Cumulative Frequency Curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Unlike line graphs, cumulative frequency curves are drawn smoothly, avoiding sharp angles. This smoothness helps estimate values such as medians more accurately and reflects the gradual accumulation of data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the curve like a gently winding river rather than a series of stair steps. The smooth shape makes it easier to read off values between points.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot points at upper class boundaries and cumulative frequencies</span>",
        "<span>Use a smooth wrist movement or a flexible ruler to join points with a curve, not straight lines</span>"
      ]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to construct a cumulative frequency graph from grouped data and how to use it to estimate the median.</span>",
      "hint": "Remember to include how cumulative frequencies are calculated, what is plotted on each axis, and the steps to find the median on the graph.",
      "mustHaveKeywords": ["cumulative frequency", "upper class boundary", "smooth curve", "median estimate"],
      "optionalKeywords": ["grouped data", "class intervals", "horizontal line", "vertical line"],
      "modelAnswer": "<span>First, calculate the cumulative frequency by adding frequencies cumulatively up to each class interval. Plot these cumulative frequencies on the y-axis against the upper class boundaries of each interval on the x-axis. Draw a smooth curve through the plotted points. To estimate the median, find half the total frequency on the y-axis, draw a horizontal line across to meet the curve, then drop a vertical line to the x-axis. The x-value where it meets is the median estimate.</span>",
      "scaffoldPrompts": [
        "Start by calculating cumulative frequency from given data",
        "Plot the points correctly on graph axes",
        "Draw a smooth curve through the points",
        "Find half the total frequency and use lines to estimate median"
      ]
    }
  }
};