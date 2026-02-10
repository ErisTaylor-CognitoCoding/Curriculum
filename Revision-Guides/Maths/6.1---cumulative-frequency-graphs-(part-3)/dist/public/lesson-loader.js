window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Use cumulative frequency graphs to estimate thresholds, compare distributions, and calculate summary statistics.",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept 1: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold is a specific value on the horizontal axis of a cumulative frequency graph. By reading vertically up to the curve and then horizontally across to the vertical axis, you can find how many data values are below or equal to that threshold. Subtracting this from the total number of data points tells you how many values lie above the threshold.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a queue at a ticket counter. The threshold is like a checkpoint number in line. Counting how many people are in front (below the checkpoint) and how many remain behind (above the checkpoint) helps manage the crowd</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Choose a threshold value on the horizontal axis, e.g., 40.</span>",
        "<span>Move vertically up from 40 to meet the cumulative frequency curve.</span>",
        "<span>From this point on the curve, move horizontally to the vertical axis to read the frequency below 40.</span>",
        "<span>If total frequency is 100 and frequency below 40 is 65, then 35 data values are above 40.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Comparing distributions using cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Plotting two cumulative frequency graphs on the same axes allows for comparison of distribution features. Medians, quartiles, and interquartile ranges (IQRs) can be compared to identify which distribution tends to have higher values, a greater spread, or consistent clustering. A steeper curve section means data are densely packed, while a flatter section indicates a wider spread.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine measuring two groups' heights. Plotting their cumulative frequencies shows which group generally grows taller or has a more varied height range.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot both class A and class B cumulative frequency graphs on one set of axes.</span>",
        "<span>Identify median and quartiles from each graph.</span>",
        "<span>Compare median heights to decide which class is generally taller.</span>",
        "<span>Compare IQRs to assess which group has a wider height spread or more consistency.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To estimate the median, first find 50% of the total frequency on the vertical axis, then read horizontally to the curve and drop down to the horizontal axis. Repeat the process for the lower quartile (Q1) at 25% and the upper quartile (Q3) at 75%. The interquartile range (IQR) is the difference Q3 − Q1, showing the spread of the middle 50% of the data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimating quartiles is like slicing a loaf of bread into four parts by weight, not length. You find the points where 25%, 50%, and 75% of the weight has passed, to understand distribution.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 200; find 50% which is 100 on the vertical axis for median.</span>",
        "<span>From 100, read horizontally to the curve, then down to the data axis for the median value.</span>",
        "<span>Similarly find 25% (50) and 75% (150) for Q1 and Q3.</span>",
        "<span>Calculate IQR as Q3 − Q1 to get spread of middle 50%.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does a steep section of a cumulative frequency graph indicate?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Data values are clustered close together in that range</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! A steep curve means many data points fall within a small range of values.</span>"
          },
          {
            "id": "b",
            "label": "<span>Data values are spread very evenly over the range</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Even spread leads to a gentler slope, not steep.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> on a cumulative frequency graph shows the middle value when data is ordered.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "Median",
                "isCorrect": true,
                "feedback": "<span>Correct! The median divides data into two equal halves.</span>"
              },
              {
                "value": "mode",
                "label": "Mode",
                "isCorrect": false,
                "feedback": "<span>Try again. The mode is the most frequent value, not the middle.</span>"
              },
              {
                "value": "mean",
                "label": "Mean",
                "isCorrect": false,
                "feedback": "<span>Try again. The mean is the average, not the middle value.</span>"
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
      "prompt": "<span>Explain how to use a cumulative frequency graph to find how many data values lie above a given threshold and how to estimate the interquartile range.</span>",
      "hint": "<span>Remember to find cumulative frequency below the threshold first, then subtract from total for above. Use 25% and 75% of total frequency to find quartiles for IQR.</span>",
      "mustHaveKeywords": ["threshold", "cumulative frequency", "subtract", "25%", "75%", "interquartile range", "median"],
      "optionalKeywords": ["total frequency", "horizontal and vertical axis", "estimate"],
      "modelAnswer": "<span>To find how many values lie above a threshold, first locate the threshold value on the horizontal axis and move vertically up to the cumulative frequency curve. From this point, move horizontally to the vertical axis to find the cumulative frequency below the threshold. Subtract this value from the total frequency to get the number of values above the threshold. To estimate the interquartile range, find 25% and 75% of the total frequency on the vertical axis (these represent Q1 and Q3). From each, move horizontally to the curve, then drop down vertically to the horizontal axis to find the corresponding data values. The difference between Q3 and Q1 is the interquartile range, which shows the spread of the middle 50% of the data.</span>",
      "scaffoldPrompts": [
        "Think about how to find the frequency below the threshold using the graph.",
        "Then subtract that from the total frequency to get the values above the threshold.",
        "For the IQR, identify what percentages relate to the quartiles on the vertical axis.",
        "Use these points to estimate Q1 and Q3 from the graph before subtracting."
      ]
    }
  }
};