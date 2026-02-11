window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR (Part 3)",
  "strapline": "Learn to estimate median and quartiles from grouped frequency data using cumulative frequency and linear interpolation.",
  "learningObjectives": [
    "Students should be able to estimate the median from grouped frequency data using cumulative frequency methods (Maths 6.2)",
    "Students should be able to estimate the lower quartile, upper quartile, and interquartile range from grouped frequency data using cumulative frequency curves and linear interpolation (Maths 6.2)",
    "Students should be able to read and interpret values from cumulative frequency curves to determine measures of location and spread for grouped data (Maths 6.2)"
  ],
  "step1": {
    "title": "Concept: Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is a running total of all the frequencies up to the upper boundary of each class interval. It helps us see how many data points lie below a certain value. This running total lets us estimate median and quartiles from grouped data even when individual data points are not available.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling buckets of water where each bucket represents a class interval. Cumulative frequency is like measuring the total amount of water collected up to a certain bucket, telling us how much water has accumulated so far.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with class intervals and frequencies: 0-10 (5), 10-20 (8), 20-30 (7).</span>",
        "<span>Calculate cumulative frequency: 5, then 5 + 8 = 13, then 13 + 7 = 20.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Linear Interpolation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Linear interpolation assumes data is evenly spread within a class interval. It is used to estimate values such as the median or quartiles more accurately by calculating how far into the interval the desired position lies.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like assuming cars are evenly spaced in a parking lot row: if you know a car is halfway through the row, you can estimate its exact position even without exact data.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If the median position is halfway through the 10-20 interval, estimate the median by starting at 10 and adding half the interval width: 10 + 0.5 × 10 = 15.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Median from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of the dataset. For grouped data, use the cumulative frequency to find the class containing the middle value (n/2). Then estimate the median within that median class using linear interpolation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Finding the median is like cutting a cake into two equal halves by weight, not just size, even if the pieces are of different shapes.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate total frequency (n). If n = 20, median position is 20/2 = 10.</span>",
        "<span>Find the cumulative frequency just greater than or equal to 10 to identify the median class.</span>",
        "<span>Use linear interpolation to estimate the median within that class.</span>"
      ]
    }
  },
  "step4": {
    "title": "Estimating Quartiles from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the cumulative frequency to find the positions of the lower quartile (n/4) and upper quartile (3n/4). Identify the class intervals containing these positions and apply linear interpolation to estimate the quartiles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of finding the 25% and 75% marks in a relay race, by watching when runners pass the quarter and three-quarter points on the track.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency n = 20, LQ position = 20/4 = 5, UQ position = 15.</span>",
        "<span>Locate the intervals containing cumulative frequencies just greater than or equal to 5 and 15.</span>",
        "<span>Use linear interpolation inside each interval to estimate the lower and upper quartiles.</span>"
      ]
    }
  },
  "step5": {
    "title": "Using Cumulative Frequency Curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A cumulative frequency curve plots cumulative frequency against the upper class boundaries. You can read the median and quartiles directly from the graph by locating the frequencies n/2, n/4, and 3n/4 on the vertical axis and then reading corresponding values on the horizontal axis.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's similar to reading a speed-time graph: by knowing the cumulative distance (frequency), you can find the time (value) at which certain distances were reached.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw cumulative frequency on the vertical axis and upper class boundaries on the horizontal axis.</span>",
        "<span>Locate n/2 on the vertical axis; draw a horizontal line to the curve then down to the horizontal axis to estimate the median.</span>"
      ]
    }
  },
  "step6": {
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
            "explanation": "<span>Correct! It shows the running total of frequencies up to that point.</span>"
          },
          {
            "id": "b",
            "label": "<span>The difference between class intervals</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. That describes class width, not cumulative frequency.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> class contains the median value in grouped data.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "median",
                "isCorrect": true,
                "feedback": "<span>Correct! The median class contains the median value position.</span>"
              },
              {
                "value": "mode",
                "label": "mode",
                "isCorrect": false,
                "feedback": "<span>Try again. The mode is the most frequent class, not necessarily the median.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Estimating Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The interquartile range (IQR) measures the spread of the middle 50% of the data. Calculate it by subtracting the lower quartile from the upper quartile: IQR = Q3 − Q1. Use your estimates from cumulative frequency or interpolation for Q1 and Q3.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the IQR as the width of the safest part of a bridge — it shows where most of the traffic (data) flows, ignoring extreme ends.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If estimated Q1 = 12 and Q3 = 22, then the IQR is 22 − 12 = 10.</span>"
      ]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to estimate the median, lower quartile, upper quartile, and interquartile range from grouped frequency data using cumulative frequency and linear interpolation.</span>",
      "hint": "<span>Remember to first calculate cumulative frequencies, identify class intervals for each position, and then apply interpolation.</span>",
      "mustHaveKeywords": [
        "cumulative frequency",
        "median class",
        "linear interpolation",
        "lower quartile",
        "upper quartile",
        "interquartile range"
      ],
      "optionalKeywords": [
        "running total",
        "class boundaries",
        "estimate"
      ],
      "modelAnswer": "<span>To estimate these statistics from grouped frequency data, first calculate the cumulative frequency for each class. Determine total frequency n and find the positions for the median (n/2), lower quartile (n/4), and upper quartile (3n/4). Identify the median, lower quartile, and upper quartile classes by locating which cumulative frequency intervals contain these positions. Then use linear interpolation within those classes to estimate the exact values by assuming data is evenly spread within the class. Finally, calculate the interquartile range as the difference between the estimated upper and lower quartiles.</span>",
      "scaffoldPrompts": [
        "<span>Calculate cumulative frequencies from the data.</span>",
        "<span>Locate median, Q1, and Q3 positions by dividing total frequency.</span>",
        "<span>Identify the corresponding class intervals for each position.</span>",
        "<span>Apply linear interpolation using class boundaries and frequencies.</span>",
        "<span>Subtract Q1 from Q3 to find the interquartile range.</span>"
      ]
    }
  }
};