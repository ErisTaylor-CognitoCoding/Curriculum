window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Using cumulative frequency graphs to find data values, compare distributions, and estimate median and quartiles.",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold value is a specific point along the horizontal axis (data axis) of a cumulative frequency graph. To find how many data points are less than or equal to this threshold, move vertically up to the curve and then horizontally to the vertical axis to read the cumulative frequency. To find how many data points are above this threshold, subtract this cumulative frequency from the total number of data points.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a crowd of people lined up by their height. If you pick a certain height as your threshold, the cumulative frequency graph tells you how many people are shorter or equal to that height (below threshold) and by subtracting from the total, how many are taller (above threshold).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a cumulative frequency graph with a total of 60 data points, find how many values are less than or equal to 25.</span>",
        "<span>Step 1: Move up vertically from 25 on the horizontal axis to the curve.</span>",
        "<span>Step 2: Move horizontally left to the vertical axis to read the cumulative frequency value, e.g., 40.</span>",
        "<span>Step 3: So, 40 data points are ≤ 25.</span>",
        "<span>Step 4: To find how many are above 25, subtract 40 from total 60, resulting in 20.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Comparing distributions using cumulative frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency graphs are shown on the same axes, we can compare their medians, quartiles and spread. A steeper curve indicates that data points are clustered in that range, while a flatter section shows data is spread out. This lets us decide which distribution tends to have higher or lower values and which is more consistent.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of comparing two runners’ race times on graphs. One graph with a steeper mid-section shows most runners finished around the same time (consistent), the other with a flatter curve means times varied more (spread out).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given two cumulative frequency graphs, notice Graph A’s curve is steeper than Graph B’s between quartiles.</span>",
        "<span>Step 1: This means Graph A’s data is more clustered (less spread) in the middle 50% compared to Graph B.</span>",
        "<span>Step 2: We can also compare medians by checking where each curve hits 50% of total frequency on the vertical axis and reading off the horizontal value.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To estimate the median, lower quartile (Q1) and upper quartile (Q3) from a cumulative frequency graph, use the total frequency to find 50%, 25%, and 75% points on the vertical axis. From these points, draw horizontal lines to the curve, then project down vertically to the horizontal axis to get data estimates. The interquartile range (IQR) is found by subtracting Q1 from Q3 and shows the spread of the middle 50% of the data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine slicing a cake into four parts where the 25%, 50%, and 75% marks divide the cake into equal amounts of cake by weight. These cuts represent Q1, median, and Q3, and the size between cuts is the IQR.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total data is 80, so 25%, 50%, and 75% correspond to frequencies 20, 40, and 60.</span>",
        "<span>Draw horizontal lines from 20, 40, and 60 on the vertical axis to the curve.</span>",
        "<span>Then drop down vertically to the horizontal axis to estimate Q1, median, and Q3 respectively.</span>",
        "<span>Calculate IQR = Q3 − Q1.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>On a cumulative frequency graph, if the total frequency is 100 and the curve reaches 70 at data value 30, how many data values are above 30?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>30</span>",
            "isCorrect": true,
            "explanation": "<span>Correct: 100 - 70 = 30 values are above 30.</span>"
          },
          {
            "id": "b",
            "label": "<span>70</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect: 70 is the count of values ≤ 30, not above.</span>"
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> on a cumulative frequency graph shows the middle value of the data.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "median",
                "isCorrect": true,
                "feedback": "Correct! The median is the middle value."
              },
              {
                "value": "mean",
                "label": "mean",
                "isCorrect": false,
                "feedback": "Try again. The mean is the average, not the middle."
              },
              {
                "value": "mode",
                "label": "mode",
                "isCorrect": false,
                "feedback": "Try again. The mode is the most frequent value."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is calculated as Q3 - Q1 and measures the spread of the middle 50% of data.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "interquartile range",
                "label": "interquartile range",
                "isCorrect": true,
                "feedback": "Correct! The IQR measures the spread."
              },
              {
                "value": "range",
                "label": "range",
                "isCorrect": false,
                "feedback": "Try again. The range covers all data, not just middle 50%."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to use a cumulative frequency graph to estimate the median and interquartile range and how to compare two distributions using these estimates.</span>",
      "hint": "Remember to find percentages of total frequency for median and quartiles, read values from the graph, then compare medians and IQRs.",
      "mustHaveKeywords": ["median", "quartiles", "interquartile range", "cumulative frequency", "compare distributions"],
      "optionalKeywords": ["spread", "steeper curve", "flatter curve", "total frequency"],
      "modelAnswer": "<span>To estimate the median and interquartile range from a cumulative frequency graph, first find 50%, 25%, and 75% of the total frequency on the vertical axis. From these points, draw horizontal lines to the curve and then read down vertically to the data axis to find the median (50%), lower quartile (25%), and upper quartile (75%). The interquartile range (IQR) is found by subtracting the lower quartile from the upper quartile, showing the spread of the middle 50% of data. To compare two distributions, plot their cumulative frequency graphs on the same axes and compare their medians and IQRs. A higher median shows generally larger values, while a smaller IQR indicates more consistency (less spread). The shape of the curves (steepness or flatness) also gives clues about data clustering or spread.</span>",
      "scaffoldPrompts": [
        "Think about how to identify median and quartile values on the graph.",
        "Then explain how to calculate IQR and use median and IQR to compare two distributions."
      ]
    }
  }
};