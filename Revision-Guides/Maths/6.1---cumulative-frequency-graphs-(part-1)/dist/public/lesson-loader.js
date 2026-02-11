window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 1)",
  "strapline": "Learn to construct and interpret cumulative frequency graphs to estimate medians and analyze grouped data.",
  "learningObjectives": [
    "Students should be able to construct cumulative frequency graphs by plotting cumulative frequency against the upper class boundaries of grouped data (Maths 6.1)",
    "Students should be able to draw smooth cumulative frequency curves from plotted data (Maths 6.1)",
    "Students should be able to use cumulative frequency graphs to find estimates for the median and interpret data values above or below certain thresholds (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Understanding Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to a certain point in a data set. It is calculated by adding each frequency to the sum of the previous frequencies. This helps to see how data accumulates over intervals.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling a jar with layers of colored sand every day. The cumulative frequency is like measuring the total height of sand after each day's addition, showing the build-up over time.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given frequencies: 3, 5, 7, 2</span>",
        "<span>Calculate cumulative frequencies: 3, 3+5=8, 8+7=15, 15+2=17</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Upper Class Boundaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The upper class boundary is the highest value in each class interval. When plotting cumulative frequency graphs, the cumulative frequency is plotted against these boundaries to represent the data accurately without gaps.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you think of each class interval as a shelf in a bookcase, the upper class boundary is the exact end edge of each shelf where the books stop.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If data class intervals are 10-19, 20-29, 30-39, then the upper boundaries are 19.5, 29.5, 39.5 (adding 0.5 to include full interval).</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Plotting Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To construct a cumulative frequency graph, plot cumulative frequencies on the vertical axis and the upper class boundaries on the horizontal axis. Connect the points with a smooth curve to visualize the running total of data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Visualize plotting the growing height of layers of sediment in a riverbank, where each point marks the total height up to that layer.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot the points (19.5, 3), (29.5, 8), (39.5, 15), (49.5, 17) on axes</span>",
        "<span>Draw a smooth curve through these points</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Drawing Smooth Cumulative Frequency Curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The cumulative frequency curve should be drawn smoothly, typically forming an S-shape. This smooth curve helps to better estimate values between plotted points, such as medians or quartiles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the curve as a gently flowing hill rather than jagged steps, representing the steady accumulation of data.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot points accurately on graph paper.</span>",
        "<span>Use a smooth freehand curve to connect points, avoiding sharp angles.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Estimating the Median from Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median can be estimated from a cumulative frequency graph by finding half the total frequency on the vertical axis and drawing a horizontal line to meet the curve, then dropping down vertically to the horizontal axis to read the median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine dividing a group of people into two equal halves by height; the point where the half mark lies is like finding the median on the graph.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 17, half is 8.5</span>",
        "<span>Draw a horizontal line at 8.5 on the cumulative frequency axis.</span>",
        "<span>Find where this line meets the curve, drop a vertical line to the horizontal axis.</span>",
        "<span>Read the median value from the horizontal axis.</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is plotted on the horizontal axis of a cumulative frequency graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Upper class boundaries</span>",
            "isCorrect": true,
            "explanation": "Correct – cumulative frequencies are plotted against upper class boundaries."
          },
          {
            "id": "b",
            "label": "<span>Individual data values</span>",
            "isCorrect": false,
            "explanation": "Incorrect – the graph uses grouped data and plots against upper class boundaries rather than individual values."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Knowledge Check: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> frequency is the total number of data points up to the upper boundary of a class interval.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "cumulative",
                "label": "cumulative",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "individual",
                "label": "individual",
                "isCorrect": false,
                "feedback": "Try again; the term refers to running totals."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Concept: Interpreting Values Above or Below Thresholds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using a cumulative frequency graph, we can estimate how many data values are above or below certain points by reading frequencies at the corresponding upper boundaries.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like checking how many people scored below a certain mark on a test by reading cumulative totals on a graph.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If total frequency is 50 and the cumulative frequency at a value 30 is 35, then 35 values are ≤ 30 and 15 values are > 30.</span>"
      ]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given a grouped data set with class intervals and frequencies, explain how you would construct a cumulative frequency graph and estimate the median from it.</span>",
      "hint": "Remember to find cumulative frequencies, plot against upper class boundaries, draw a smooth curve, then find half the total frequency to estimate the median.",
      "mustHaveKeywords": ["cumulative frequency", "upper class boundary", "smooth curve", "estimate", "median"],
      "optionalKeywords": ["horizontal axis", "vertical axis", "half total frequency"],
      "modelAnswer": "<span>First, calculate the cumulative frequency by adding the frequencies up to each class interval. Then use the upper class boundaries as the horizontal axis values and plot the cumulative frequencies on the vertical axis. Draw a smooth curve through the plotted points. To estimate the median, find half of the total frequency on the vertical axis, draw a horizontal line to intersect the curve, then drop a vertical line down to the horizontal axis to read the median value.</span>",
      "scaffoldPrompts": [
        "Calculate cumulative frequencies.",
        "Identify upper class boundaries.",
        "Plot points on the graph.",
        "Draw a smooth curve.",
        "Use half the total frequency to find the median."
      ]
    }
  }
};