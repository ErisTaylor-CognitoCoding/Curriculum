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
    "Cumulative Frequency = Sum of all frequencies up to a class boundary",
    "Upper Class Boundary = Highest value in a class interval",
    "Median = The value dividing the data into two equal halves (50th percentile)",
    "Quartiles = Values dividing data into four equal parts (25th, 50th, 75th percentiles)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#fff' stroke='#222' /><line x1='70' y1='250' x2='70' y2='60' stroke='#333' stroke-width='2'/><line x1='70' y1='250' x2='360' y2='250' stroke='#333' stroke-width='2'/><text x='20' y='60' font-family='sans-serif' font-size='14'>Frequency</text><text x='200' y='280' font-family='sans-serif' font-size='14' text-anchor='middle'>Upper Class Boundaries</text><circle cx='120' cy='230' r='5' fill='#0074D9'/><circle cx='180' cy='200' r='5' fill='#0074D9'/><circle cx='240' cy='140' r='5' fill='#0074D9'/><circle cx='300' cy='100' r='5' fill='#0074D9'/><circle cx='360' cy='80' r='5' fill='#0074D9'/><path d='M120 230 Q150 215 180 200 T240 140 T300 100 T360 80' fill='none' stroke='#0074D9' stroke-width='2'/></svg>",
  "step1": {
    "title": "Concept: What is Cumulative Frequency?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to a particular class boundary. To find it, you keep adding the frequency of each class interval to the total of all previous frequencies.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of filling a jar with layers of different colored sand. Each layer represents a frequency for a class interval. The total amount of sand up to a certain color is the cumulative frequency.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Cumulative Frequencies",
      "problem": "Given the frequencies: 3, 7, 5, 8, calculate cumulative frequencies step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the cumulative frequency after the first group (frequency 3)?",
          "answer": "3",
          "feedback": "Correct, cumulative frequency starts with the first frequency."
        },
        {
          "id": "q2",
          "prompt": "Add the second frequency (7) to the previous total (3). What is the cumulative frequency now?",
          "answer": "10",
          "feedback": "Correct, 3 + 7 = 10."
        },
        {
          "id": "q3",
          "prompt": "Add the third frequency (5) to the total (10). What do you get?",
          "answer": "15",
          "feedback": "Correct, 10 + 5 = 15."
        },
        {
          "id": "q4",
          "prompt": "Add the fourth frequency (8) to the total (15). What is this cumulative frequency?",
          "answer": "23",
          "feedback": "Correct, 15 + 8 = 23."
        }
      ]
    }
  },
  "step2": {
    "title": "Key Terminology: Understanding Upper Class Boundaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The upper class boundary is the highest value within each class interval. When plotting cumulative frequency graphs, cumulative frequencies are plotted against these upper class boundaries on the x-axis.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a class interval is like a shelf, the upper class boundary is the edge at the top of the shelf where the next shelf begins.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Upper Class Boundaries",
      "problem": "Identify the upper class boundary for these intervals: 10-20, 20-30, 30-40.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the upper class boundary for the class 10-20?",
          "answer": "20",
          "feedback": "Correct, the boundary is the highest value in the interval."
        },
        {
          "id": "q2",
          "prompt": "What is the upper class boundary for the class 20-30?",
          "answer": "30",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "What is the upper class boundary for the class 30-40?",
          "answer": "40",
          "feedback": "Correct."
        }
      ]
    }
  },
  "step3": {
    "title": "Plotting Points on a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Plot cumulative frequency values on the y-axis against the corresponding upper class boundaries on the x-axis. Each point represents the total frequency up to that boundary.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of marking milestones on a hiking trail where the x-axis is distance and the y-axis is the total elevation climbed till that point.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plotting Points",
      "problem": "Using these cumulative frequencies [3, 10, 15, 23] and upper class boundaries [20, 30, 40, 50], plot the points.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Plot the point for upper class boundary 20. What is the cumulative frequency here?",
          "answer": "3",
          "feedback": "Correct. The point is (20, 3)."
        },
        {
          "id": "q2",
          "prompt": "Plot the point for upper class boundary 30 with its cumulative frequency.",
          "answer": "10",
          "feedback": "Correct. The point is (30, 10)."
        },
        {
          "id": "q3",
          "prompt": "Plot the point for upper class boundary 40.",
          "answer": "15",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Plot the point for upper class boundary 50.",
          "answer": "23",
          "feedback": "Correct."
        }
      ]
    }
  },
  "step4": {
    "title": "Drawing the Cumulative Frequency Curve (Ogive)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Join the plotted points smoothly with a curve to form an ogive. This curve helps estimate medians and quartiles visually.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine drawing a smooth river path connecting stepping stones across a stream.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketch the Curve",
      "problem": "After plotting points, draw a smooth curve connecting them without sharp corners.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Where should the curve start on the graph?",
          "answer": "At zero cumulative frequency (x equals the lower class boundary or just before the first upper class boundary)",
          "feedback": "Correct, the curve starts from the cumulative frequency of zero."
        },
        {
          "id": "q2",
          "prompt": "Should the curve be a series of straight lines or smooth?",
          "answer": "Smooth",
          "feedback": "Correct, the curve should be smooth to accurately estimate values like medians."
        }
      ]
    }
  },
  "step5": {
    "title": "Interpreting the Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Students learn to read median and quartiles by locating the corresponding cumulative frequency value on the y-axis and drawing a horizontal line to the curve, then dropping down to the x-axis to find the data value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like using a map's scale to find the real distance between two points by reading off values from the scale along the axes.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Median",
      "problem": "Total cumulative frequency is 50. Find the median by locating the 25th cumulative frequency value on the graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What cumulative frequency corresponds to the median?",
          "answer": "25",
          "feedback": "Correct, the median is at half the total cumulative frequency."
        },
        {
          "id": "q2",
          "prompt": "Draw a horizontal line from 25 on the y-axis to the curve, then vertically down to x-axis. What does the x-axis value represent?",
          "answer": "Median value (data value at 50th percentile)",
          "feedback": "Correct, that x-value is the median."
        }
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: Multiple Choice Questions on Terms",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the cumulative frequency?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The running total of frequencies up to a boundary</span>",
            "isCorrect": true,
            "explanation": "Correct, cumulative frequency sums frequencies up to each class boundary."
          },
          {
            "id": "b",
            "label": "<span>The frequency of each individual class only</span>",
            "isCorrect": false,
            "explanation": "Incorrect, this is just a class frequency, not cumulative."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Where are cumulative frequencies plotted on a cumulative frequency graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>On the x-axis</span>",
            "isCorrect": false,
            "explanation": "Incorrect, cumulative frequencies are plotted on the y-axis."
          },
          {
            "id": "b",
            "label": "<span>On the y-axis</span>",
            "isCorrect": true,
            "explanation": "Correct, cumulative frequencies go on the y-axis."
          }
        ]
      },
      {
        "id": "mcq-3",
        "question": "<span>The upper class boundary for the class interval 35-45 is:</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>35</span>",
            "isCorrect": false,
            "explanation": "Incorrect, 35 is the lower class boundary."
          },
          {
            "id": "b",
            "label": "<span>45</span>",
            "isCorrect": true,
            "explanation": "Correct, the upper class boundary is the highest value, 45."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the running total of frequencies up to the upper class boundary.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "cumulative frequency",
                "label": "Cumulative Frequency",
                "isCorrect": true,
                "feedback": "Correct! The cumulative frequency is the running total."
              },
              {
                "value": "median",
                "label": "Median",
                "isCorrect": false,
                "feedback": "Try again. The median is a measure of central tendency, not a running total."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is plotted on the x-axis when making a cumulative frequency graph.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "upper class boundary",
                "label": "Upper Class Boundary",
                "isCorrect": true,
                "feedback": "Correct! This is what goes on the x-axis."
              },
              {
                "value": "frequency",
                "label": "Frequency",
                "isCorrect": false,
                "feedback": "Incorrect. Frequencies are plotted as cumulative frequencies on the y-axis."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Interpreting Quartiles on a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles split the data into quarters. The first quartile (Q1) corresponds to the 25% cumulative frequency, the median (Q2) to 50%, and the third quartile (Q3) to 75%.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Quartiles",
      "problem": "If total frequency is 80, find cumulative frequencies for Q1, median, and Q3 and interpret the graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the cumulative frequency for Q1 (25%).",
          "answer": "20",
          "feedback": "Correct, 25% of 80 is 20."
        },
        {
          "id": "q2",
          "prompt": "Calculate the cumulative frequency for the median (50%).",
          "answer": "40",
          "feedback": "Correct, 50% of 80 is 40."
        },
        {
          "id": "q3",
          "prompt": "Calculate the cumulative frequency for Q3 (75%).",
          "answer": "60",
          "feedback": "Correct, 75% of 80 is 60."
        },
        {
          "id": "q4",
          "prompt": "How do you use these values on the graph?",
          "answer": "Draw horizontal lines from 20, 40, 60 on the y-axis to the curve and drop vertical lines to the x-axis to find Q1, median, and Q3 values.",
          "feedback": "Excellent, that's the correct method."
        }
      ]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows the distribution of test scores for 100 students in intervals 0-10, 10-20, 20-30, 30-40, 40-50. The cumulative frequencies are 8, 25, 55, 85, 100 respectively. Explain how you would estimate the median and interquartile range from this graph.</span>",
      "hint": "Remember to identify the cumulative frequency values for median (50) and quartiles (25 and 75) and use horizontal and vertical lines to read from the graph.",
      "mustHaveKeywords": ["median", "interquartile range", "cumulative frequency", "upper class boundary", "horizontal line", "vertical line"],
      "optionalKeywords": ["ogive", "percentiles"],
      "modelAnswer": "<span>To estimate the median, find half of the total cumulative frequency, which is 50. Draw a horizontal line from 50 on the y-axis to the cumulative frequency curve, then drop a vertical line to the x-axis to read the median value. To find the interquartile range, locate the 25th percentile (25) and 75th percentile (75) cumulative frequencies, draw horizontal lines from these to the curve, then drop vertical lines to find Q1 and Q3 values on the x-axis. Subtract Q1 from Q3 to get the interquartile range.</span>",
      "scaffoldPrompts": ["Identify total frequency and calculate median and quartile positions", "Draw lines on the graph at these cumulative frequencies", "Read corresponding x-axis values and calculate the difference for IQR"]
    }
  }
};