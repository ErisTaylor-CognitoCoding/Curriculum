window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR (Part 1)",
  "strapline": "Learn how to estimate the median, quartiles, and interquartile range using grouped frequency data and cumulative frequency.",
  "learningObjectives": [
    "Students should be able to estimate the median from grouped frequency data using cumulative frequency methods (Maths 6.2)",
    "Students should be able to estimate the lower quartile, upper quartile, and interquartile range from grouped frequency data (Maths 6.2)",
    "Students should be able to use linear interpolation within class intervals to find statistical measures when exact data values are not available (Maths 6.2)"
  ],
  "step1": {
    "title": "Concept 1: Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to each class interval in a grouped frequency table. It helps to see how many data values lie at or below the upper boundary of each interval.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling buckets one by one with water. The cumulative frequency is like measuring how much water you have after filling each bucket in turn.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a frequency table of test scores for 30 students, calculate the cumulative frequency by adding the frequency of each class interval to the previous total.</span>",
        "<span>For example, if the first class interval has frequency 5, and the second has frequency 8, the cumulative frequency for the second interval is 5 + 8 = 13.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Estimating the Median from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of the data set. For grouped frequency data, find the position <em>n/2</em> in the cumulative frequency, then use linear interpolation within the class interval where this position lies to estimate the median.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If data were people standing in order from shortest to tallest, the median is the person standing in the middle. The cumulative frequency helps locate the group where this person stands.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>There are 30 data points; find n/2 = 15.</span>",
        "<span>Identify the class interval where the cumulative frequency first reaches or exceeds 15.</span>",
        "<span>Use linear interpolation with the formula: Median = lower boundary + [(n/2 - cumulative frequency before interval) / frequency of interval] × class width.</span>"
      ]
    }
  },
  "step3": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the cumulative frequency tell you in a grouped frequency table?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>How many data values are at or below the upper boundary of a class interval</span>",
            "isCorrect": true,
            "explanation": "<span>Cumulative frequency is a running total showing how many values lie below or on the class interval boundary.</span>"
          },
          {
            "id": "b",
            "label": "<span>The average of values in each class interval</span>",
            "isCorrect": false,
            "explanation": "<span>The average is not cumulative frequency; it is calculated differently.</span>"
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept 3: Estimating the Lower Quartile (Q1)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The lower quartile (Q1) divides the lowest 25% of data from the rest. To estimate Q1, find the position n/4 in the cumulative frequency, then interpolate within the class containing this value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of Q1 as the point where the first quarter of people in a line are shorter than this height.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>With 30 data points, calculate n/4 = 7.5.</span>",
        "<span>Find the class interval where the cumulative frequency reaches or exceeds 7.5.</span>",
        "<span>Use linear interpolation: Q1 = lower boundary + [(n/4 - cumulative frequency before interval) / frequency of interval] × class width.</span>"
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>To find Q1, you need which position in the cumulative frequency?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>n/4</span>",
            "isCorrect": true,
            "explanation": "<span>Q1 is at the 25th percentile, which corresponds to n/4 position in data.</span>"
          },
          {
            "id": "b",
            "label": "<span>n/2</span>",
            "isCorrect": false,
            "explanation": "<span>n/2 is the median, not the first quartile.</span>"
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Concept 4: Using Linear Interpolation Within Class Intervals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When exact data values are unknown inside grouped data intervals, linear interpolation assumes data is evenly spread within a class interval to estimate values like median and quartiles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like assuming people stand evenly spaced in each group when we only know the total count in the group.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If the class interval is 10 to 20, and you need to estimate the median within it, use the formula: median = lower boundary + ((desired position - cumulative frequency before interval)/frequency in interval) × class width.</span>",
        "<span>This gives an estimate assuming even distribution across the interval length.</span>"
      ]
    }
  },
  "step7": {
    "title": "Practice Question",
    "practice": {
      "prompt": "<span>Given the grouped frequency table below, estimate the median using cumulative frequency and linear interpolation.</span><br><br><table border=\"1\" cellpadding=\"5\"><tr><th>Class Interval</th><th>Frequency</th></tr><tr><td>0 - 10</td><td>5</td></tr><tr><td>10 - 20</td><td>8</td></tr><tr><td>20 - 30</td><td>12</td></tr><tr><td>30 - 40</td><td>5</td></tr><tr><td>40 - 50</td><td>10</td></tr></table>",
      "hint": "<span>Calculate the total frequency, find n/2, then find which interval this position lies in.</span>",
      "mustHaveKeywords": ["cumulative frequency", "linear interpolation", "median position"],
      "optionalKeywords": ["class width", "lower boundary"],
      "modelAnswer": "<span>First, find total frequency: 5 + 8 + 12 + 5 + 10 = 40. Median position = 40/2 = 20.<br>Calculate cumulative frequencies:<br>0-10: 5<br>10-20: 13<br>20-30: 25<br>The median lies in the 20-30 interval because cumulative frequency reaches 25.<br>Use linear interpolation:<br>Median = 20 + ((20 - 13) / 12) × 10 = 20 + (7/12) × 10 ≈ 20 + 5.83 = 25.83.</span>",
      "scaffoldPrompts": [
        "Calculate the total of frequencies.",
        "Find the position n/2 in the data set.",
        "Identify the class interval where this position lies.",
        "Apply the linear interpolation formula."
      ]
    }
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to estimate the lower quartile (Q1) from grouped frequency data using cumulative frequency and linear interpolation.</span>",
      "hint": "<span>Remember to find the position of Q1 as n/4 and locate the appropriate class interval before interpolating.</span>",
      "mustHaveKeywords": ["cumulative frequency", "n/4 position", "class interval", "linear interpolation"],
      "optionalKeywords": ["lower boundary", "frequency of interval", "class width"],
      "modelAnswer": "<span>To estimate Q1, first calculate n/4 where n is the total number of data points. Then use cumulative frequency to find the class interval that contains the n/4-th data point. Use linear interpolation within this interval by taking the lower boundary plus ((n/4 - cumulative frequency before the interval) divided by the frequency in the interval) times the class width. This estimates the lower quartile value.</span>",
      "scaffoldPrompts": [
        "Calculate total frequency and find n/4.",
        "Use cumulative frequency to identify the relevant class interval.",
        "Apply the linear interpolation formula step-by-step."
      ]
    }
  }
};