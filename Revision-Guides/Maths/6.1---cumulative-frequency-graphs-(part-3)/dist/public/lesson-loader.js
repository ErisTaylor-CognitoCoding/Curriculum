window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Using cumulative frequency graphs to find data thresholds, compare distributions, and estimate median, quartiles, and IQR.",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold value is a specific number chosen along the horizontal axis of a cumulative frequency graph. By drawing a line vertically from this threshold up to the curve, then horizontally to the vertical axis, you find the cumulative frequency — the number of data points less than or equal to that threshold. To find how many data points are above this threshold, subtract the cumulative frequency from the total number of data points.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a queue of people sorted by height. The threshold is like choosing a height marker. Counting how many people are shorter is like reading the cumulative frequency; subtracting this from the whole group tells you how many are taller.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Choose a threshold value on the horizontal axis, e.g., 60.</span>",
        "<span>Read vertically from 60 to the curve, then horizontally to find cumulative frequency, e.g., 35.</span>",
        "<span>If total frequency is 50, then number of data values above 60 = 50 - 35 = 15.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the cumulative frequency tell you when you read up to a threshold on the horizontal axis?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>How many data values are less than or equal to that threshold</span>",
            "isCorrect": true,
            "explanation": "Cumulative frequency counts all values up to and including the threshold."
          },
          {
            "id": "b",
            "label": "<span>How many data values are greater than the threshold</span>",
            "isCorrect": false,
            "explanation": "This number requires subtracting the cumulative frequency from the total frequency, not the cumulative frequency itself."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the number of data points less than or equal to a chosen value on the cumulative frequency graph.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "cumulative frequency",
                "label": "cumulative frequency",
                "isCorrect": true,
                "feedback": "Correct! The cumulative frequency counts data points up to the threshold."
              },
              {
                "value": "quartile",
                "label": "quartile",
                "isCorrect": false,
                "feedback": "Try again. Quartiles are specific points, not counts."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Comparing distributions using cumulative frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When you plot two cumulative frequency graphs on the same axes, you can compare their characteristics by examining their medians, quartiles, and interquartile ranges (IQRs). The graph with higher median values generally shows larger data values. Steeper parts of the curve indicate more data clustered tightly in that range, while flatter sections reveal spread-out data. Comparing the IQRs shows which distribution has greater variability or consistency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two classes' test results. By comparing their cumulative frequency graphs, you can decide which class did better overall and whose scores were more consistent or varied.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot two cumulative frequency graphs on the same axes.</span>",
        "<span>Identify median for each graph (value at 50% cumulative frequency).</span>",
        "<span>Compare the steepness of each curve between quartiles to assess spread.</span>",
        "<span>Draw conclusions on which distribution has higher values or more spread.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To estimate median, quartiles, and interquartile range from a cumulative frequency graph, first find the total number of data points. The median is found at 50% of the total frequency, the lower quartile at 25%, and the upper quartile at 75%. Draw horizontal lines from these cumulative frequencies to the curve, then drop vertical lines down to the horizontal axis to read the corresponding data values. The interquartile range (IQR) is calculated by subtracting Q1 from Q3 and shows the spread of the middle 50% of the data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine slicing a chocolate bar into four equal parts by its calorie content. The marks where you cut are like quartiles dividing the dataset into quarters by cumulative frequency.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency = 80.</span>",
        "<span>Find 25% of 80 (20), 50% of 80 (40), and 75% of 80 (60) on vertical axis.</span>",
        "<span>Draw horizontal lines at 20, 40, and 60 to the curve.</span>",
        "<span>From points on the curve, draw vertical lines down to horizontal axis to estimate Q1, median, Q3.</span>",
        "<span>Calculate IQR = Q3 − Q1.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows the heights of 100 students. Using the graph:</span><br><span>1. Estimate how many students are below 150 cm tall and how many are above.</span><br><span>2. Estimate the median height.</span><br><span>3. Estimate the lower and upper quartiles, then calculate the interquartile range.</span><br><span>4. Compare this distribution to a second cumulative frequency graph plotted on the same axes that has a higher median but smaller IQR.</span>",
      "hint": "Remember to read cumulative frequencies vertically from the horizontal threshold to the curve and horizontally to the vertical axis. For comparing graphs, look at medians and steepness between quartiles.",
      "mustHaveKeywords": [
        "cumulative frequency",
        "threshold",
        "median",
        "quartiles",
        "interquartile range",
        "compare distributions",
        "spread",
        "clustered data"
      ],
      "optionalKeywords": [
        "steeper curve",
        "flatter section",
        "total frequency"
      ],
      "modelAnswer": "<span>To estimate how many students are below 150 cm, find 150 on the horizontal axis, read up to the curve, then across to the vertical axis to get cumulative frequency. Subtract from total (100) to find those above. The median height is at 50 on vertical axis; draw horizontal to curve and down to horizontal axis for the median estimate. Similarly, find 25 and 75 on axis to estimate Q1 and Q3. The IQR is Q3 minus Q1.<br>Comparing to the second graph, a higher median means the values are generally taller. A smaller IQR means the middle 50% of heights are closer together, so the data is more consistent. A steeper curve indicates clustering of data in that region, while a flatter part indicates spread.</span>",
      "scaffoldPrompts": [
        "First, identify total frequency and locate 150 cm on the horizontal axis.",
        "Then read the cumulative frequency at 150 cm and subtract from total frequency to find values above.",
        "Locate 50% cumulative frequency for median, then 25% and 75% for quartiles.",
        "Calculate IQR = Q3 - Q1.",
        "Compare the steepness and median points of the two graphs to interpret differences."
      ]
    }
  }
};