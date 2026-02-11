window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Using cumulative frequency graphs to interpret data distributions and estimate key statistics",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold is a specific value on the horizontal axis of a cumulative frequency graph. By reading upwards from this value to the curve, and then horizontally across to the vertical axis, we find how many data values are less than or equal to it. Subtracting this number from the total frequency shows how many data values lie above the threshold.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine counting people standing shorter than a certain height at a theme park entrance. The height line is the threshold, and counting how many stand below it is like reading the cumulative frequency graph.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the number of data values below 30 on the graph by reading up from 30 to the curve, then across to the frequency axis.</span>",
        "<span>If the total number of data points is 100, subtract the cumulative frequency found from 100 to find how many exceed 30.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Comparing distributions using cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By plotting two cumulative frequency graphs on the same set of axes, we can compare their medians, quartiles, and IQRs. A steeper curve indicates data clustered in that range (less spread), while a flatter section indicates that data is more spread out. Comparing these shapes helps us draw conclusions about differences in central tendency and variability between distributions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two runners' speed over a race plotted on a graph. A steep climb means the runner quickly gains distance (clustered data), while a flatter line means slower progress (spread out performance).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at two cumulative frequency curves over the same data range on the graph.</span>",
        "<span>Identify which curve reaches 50% of their total frequency sooner (median comparison) and which curve is steeper between quartiles (spread comparison).</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To estimate the median, locate 50% of the total frequency on the vertical axis and read horizontally to the curve, then down to the horizontal axis to find the median value. Similarly, find 25% and 75% of the total frequency to estimate the lower quartile (Q1) and upper quartile (Q3). The interquartile range (IQR) is calculated by subtracting Q1 from Q3, showing the spread of the middle 50% of the data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of slicing a cake into four equal parts by weight (frequency). Finding these slices helps you know where the cutoff points (quartiles) are on the cake.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a cumulative frequency graph with total frequency 200, find 50%, 25%, and 75% of 200 (100, 50, and 150).</span>",
        "<span>From those cumulative frequencies, read horizontally across to the curve, then down to the data axis to estimate median, Q1, and Q3.</span>",
        "<span>Calculate IQR = Q3 - Q1.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the vertical axis on a cumulative frequency graph represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The number of data values less than or equal to the value on the horizontal axis</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! The vertical axis shows cumulative frequencies, the total count of data values up to a point.</span>"
          },
          {
            "id": "b",
            "label": "<span>The value of each individual data point</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Individual data values are shown on the horizontal axis, not the cumulative count.</span>"
          },
          {
            "id": "c",
            "label": "<span>The frequency of the most common data value</span>",
            "isCorrect": false,
            "explanation": "<span>No, the vertical axis shows cumulative totals, not modal frequency.</span>"
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Knowledge Check: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the value at 50% of the total cumulative frequency.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "median",
                "isCorrect": true,
                "feedback": "Correct! The median corresponds to 50% cumulative frequency."
              },
              {
                "value": "mode",
                "label": "mode",
                "isCorrect": false,
                "feedback": "Try again. Mode is the most frequent value, not related to 50% cumulative frequency."
              },
              {
                "value": "range",
                "label": "range",
                "isCorrect": false,
                "feedback": "Incorrect. Range is the difference between max and min data values."
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
      "prompt": "<span>Explain how to use a cumulative frequency graph to estimate the median, quartiles, and interquartile range for a dataset.</span>",
      "hint": "<span>Remember to identify total frequency and locate 25%, 50%, and 75% of this on the vertical axis first.</span>",
      "mustHaveKeywords": [
        "cumulative frequency",
        "total frequency",
        "median",
        "quartiles",
        "interquartile range",
        "read horizontally",
        "estimate"
      ],
      "optionalKeywords": [
        "vertical axis",
        "horizontal axis",
        "subtract",
        "spread"
      ],
      "modelAnswer": "<span>First, find the total frequency from the graph. Then calculate 25%, 50%, and 75% of the total frequency. From these values on the vertical axis, draw horizontal lines to meet the curve. Next, read down vertically from these points to the horizontal axis to estimate the lower quartile (Q1), median, and upper quartile (Q3). Finally, subtract Q1 from Q3 to find the interquartile range (IQR), which shows the spread of the middle 50% of the data.</span>",
      "scaffoldPrompts": [
        "<span>What is the total number of data points represented?</span>",
        "<span>What cumulative frequencies correspond to Q1, median, and Q3?</span>",
        "<span>How do you find the values on the horizontal axis from these cumulative frequencies?</span>",
        "<span>How is the interquartile range calculated from Q1 and Q3?</span>"
      ]
    }
  }
};