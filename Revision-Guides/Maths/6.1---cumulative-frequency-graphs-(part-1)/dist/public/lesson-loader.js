window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 1)",
  "strapline": "Learn to construct and interpret cumulative frequency graphs using grouped data.",
  "learningObjectives": [
    "Students should be able to construct cumulative frequency graphs by plotting cumulative frequency against the upper class boundaries of grouped data (Maths 6.1)",
    "Students should be able to draw smooth cumulative frequency curves from plotted data (Maths 6.1)",
    "Students should be able to use cumulative frequency graphs to find estimates for the median and interpret data values above or below certain thresholds (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Understanding Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to a certain point in grouped data. Each cumulative frequency value is found by adding the current group's frequency to the total frequencies of all preceding groups.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling buckets of water one after the other. The cumulative frequency is like measuring how much water you have poured in all the buckets up to a certain point.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with a frequency table of grouped data.</span>",
        "<span>Add the frequency of the first group.</span>",
        "<span>For the next group, add its frequency to the previous cumulative total.</span>",
        "<span>Repeat this for all groups to find the cumulative frequencies.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Identifying Upper Class Boundaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Upper class boundaries are the highest values in each group interval. When plotting cumulative frequency graphs, we plot cumulative frequency against these upper boundaries, not the midpoints or lower boundaries.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of each group as a finish line in a race. The cumulative frequency is how many runners have crossed up to that finish line, which is the upper boundary of that group.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at a group interval, e.g., 10–19.</span>",
        "<span>Identify the upper class boundary (e.g., 19).</span>",
        "<span>Use this boundary as the x-coordinate when plotting the graph.</span>"
      ]
    }
  },
  "step3": {
    "title": "Practice: Calculating Upper Class Boundaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Sometimes class intervals may not be continuous. Learn to adjust class boundaries by adding or subtracting 0.5 when intervals appear as 10–19, 20–29.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If intervals are 10–19 and 20–29, the upper class boundary for the first is 19.5 to avoid gaps.</span>",
        "<span>The next class's lower boundary becomes 19.5, ensuring continuous intervals.</span>"
      ]
    }
  },
  "step4": {
    "title": "Step: Plotting Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Plot cumulative frequency values on the vertical axis and the upper class boundaries on the horizontal axis. Join these points with a smooth curve to form the cumulative frequency curve.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Plotting the graph is like plotting the amount of water poured up to each bucket’s edge, connecting points to see the increasing total smoothly.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Mark points where the x-coordinate is upper class boundary and y is cumulative frequency.</span>",
        "<span>Join these points smoothly to form an 'S'-shaped curve.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: The Cumulative Frequency Curve Shape",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The cumulative frequency curve typically has an 'S' shape because it starts slowly, rises steeply where data is dense, and levels off as frequencies reduce.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">The curve is like climbing a hill that starts gentle, gets steep at the middle, then flattens out at the top.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Observe the plotted points on a graph.</span>",
        "<span>Draw a smooth curve connecting them without sharp corners.</span>"
      ]
    }
  },
  "step6": {
    "title": "Using the Curve: Estimating the Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median can be estimated from the curve by finding the cumulative frequency value halfway through the total frequency, then drawing a horizontal line from this value to the curve and dropping down vertically to read the median from the x-axis.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate half of the total frequency.</span>",
        "<span>From this value, draw a horizontal line to the cumulative frequency curve.</span>",
        "<span>Drop vertically from curve to x-axis to find the median upper class boundary estimate.</span>"
      ]
    }
  },
  "step7": {
    "title": "Interpreting Values Above or Below Thresholds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the cumulative frequency graph to estimate how many data points lie above or below a certain value by reading frequencies at given upper class boundaries and comparing to total frequencies.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Locate the value of interest on the x-axis.</span>",
        "<span>Read the cumulative frequency at this point.</span>",
        "<span>Subtract from total frequency if looking for points above this value.</span>"
      ]
    }
  },
  "step8": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the cumulative frequency represent in grouped data?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The total frequency up to a class boundary</span>",
            "isCorrect": true,
            "explanation": "Correct! It is the running total of frequencies."
          },
          {
            "id": "b",
            "label": "<span>The frequency in each individual class only</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That's just the frequency, not cumulative."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which axis do we plot the upper class boundaries on in a cumulative frequency graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Vertical (y) axis</span>",
            "isCorrect": false,
            "explanation": "Wrong. Upper class boundaries go on the x-axis."
          },
          {
            "id": "b",
            "label": "<span>Horizontal (x) axis</span>",
            "isCorrect": true,
            "explanation": "Correct! Upper class boundaries are on the x-axis."
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the highest value in a grouped class interval and is plotted on the x-axis.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "Upper Class Boundary",
                "label": "Upper Class Boundary",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "Median",
                "label": "Median",
                "isCorrect": false,
                "feedback": "No, the median is a statistical measure, not a boundary."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the smooth S-shaped curve drawn through the cumulative frequency points.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "Cumulative Frequency Curve",
                "label": "Cumulative Frequency Curve",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "Frequency Polygon",
                "label": "Frequency Polygon",
                "isCorrect": false,
                "feedback": "Incorrect, that is a different graph."
              }
            ]
          }
        ]
      }
    ]
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to construct a cumulative frequency graph from grouped data and how to estimate the median using the graph.</span>",
      "hint": "Remember to start by calculating cumulative frequencies, plot against correct boundaries, draw a smooth curve, then find half the total frequency for the median estimate.",
      "mustHaveKeywords": ["cumulative frequency", "upper class boundary", "plot", "smooth curve", "half the total", "median"],
      "optionalKeywords": ["interpret", "estimate"],
      "modelAnswer": "<span>First, calculate the cumulative frequency by adding frequencies progressively. Then, plot these cumulative frequencies against the upper class boundaries of each group interval. Draw a smooth S-shaped cumulative frequency curve through the points. To estimate the median, find half of the total frequency, draw a horizontal line from this value to intersect the curve, then drop a vertical line to the x-axis. The x-value at this point is the estimated median.</span>",
      "scaffoldPrompts": [
        "Start with the frequency table and add frequencies cumulatively.",
        "Identify the upper class boundaries for each group.",
        "Plot cumulative frequencies vs. upper class boundaries.",
        "Draw a smooth curve through plotted points.",
        "Find half the total frequency to locate the median on the y-axis.",
        "Use the curve to read the median on the x-axis."
      ]
    }
  }
};