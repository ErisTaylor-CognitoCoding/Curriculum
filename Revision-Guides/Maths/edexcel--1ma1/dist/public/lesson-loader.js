window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Using cumulative frequency graphs to find values above or below thresholds, compare distributions, and estimate medians and quartiles",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold is a specific value on the horizontal axis of a cumulative frequency graph. By locating this threshold on the x-axis, then reading vertically to the curve and horizontally across to the y-axis, we find how many data values are less than or equal to that threshold. Subtracting this number from the total frequency gives the count of values above the threshold.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a line of students standing in height order. If you pick a height threshold, counting everyone shorter than that height is like reading the cumulative frequency below the threshold on the graph.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Choose a threshold value on the horizontal axis, such as 30.</span>",
        "<span>Draw a vertical line up to the cumulative frequency curve.</span>",
        "<span>From the point on the curve, draw a horizontal line to the vertical axis to read the number of data values below or equal to 30.</span>",
        "<span>Subtract this number from the total frequency to find data values above 30.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Comparing distributions using cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency graphs are shown on the same axes, comparing their medians, quartiles, and interquartile ranges (IQRs) helps us understand differences in their distributions. A steeper curve means more data is clustered in that range, while a flatter section indicates data spread out. This lets us compare the central values and spreads between two data sets.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two roads going uphill at different steepnesses. The steeper road shows a big change in height over a short distance (data clustered), while the gentle slope shows heights spread out over longer distances (data spread out).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot both cumulative frequency graphs on the same axes.</span>",
        "<span>Locate median, quartiles, and compare their positions on each graph.</span>",
        "<span>Note which graph is steeper in certain sections to understand data clustering.</span>",
        "<span>Conclude which distribution has higher values or greater consistency based on these comparisons.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median corresponds to 50% of the total frequency on the vertical axis, the lower quartile (Q1) to 25%, and the upper quartile (Q3) to 75%. To estimate these values:</p><ol><li>Find the cumulative frequency value for Q1, median, and Q3 on the vertical axis.</li><li>From these points, draw horizontal lines to the curve.</li><li>Drop vertical lines from the curve down to the horizontal axis to read the corresponding data values.</li></ol><p>The interquartile range (IQR) is calculated as Q3 minus Q1, representing the spread of the middle 50% of data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a chocolate bar divided into four equal parts. The first break is at Q1, the second break is the median, and the third break at Q3. The IQR is like the size of the middle two pieces.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the total frequency, for example 100 data points.</span>",
        "<span>Find 25, 50, and 75 on the vertical axis (representing cumulative frequency).</span>",
        "<span>Draw horizontal lines from these points to the curve, then vertically down to the data axis.</span>",
        "<span>Read the corresponding data values for Q1, median, and Q3.</span>",
        "<span>Calculate IQR as Q3 minus Q1.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does a steep section on a cumulative frequency graph indicate?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Data values are clustered closely together in that range</span>",
            "isCorrect": true,
            "explanation": "Correct! A steep curve shows many data points in a small interval."
          },
          {
            "id": "b",
            "label": "<span>Data values are spread out evenly</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Spread out data create flatter sections, not steep ones."
          },
          {
            "id": "c",
            "label": "<span>There are no data points in that range</span>",
            "isCorrect": false,
            "explanation": "Incorrect. No data in a range would create a horizontal flat line."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> represents 50% of the total frequency on a cumulative frequency graph.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "Median",
                "isCorrect": true,
                "feedback": "Correct! The median corresponds to the 50% cumulative frequency."
              },
              {
                "value": "quartile",
                "label": "Quartile",
                "isCorrect": false,
                "feedback": "Try again. Quartiles include median but median specifically marks 50%."
              },
              {
                "value": "threshold",
                "label": "Threshold",
                "isCorrect": false,
                "feedback": "Try again. Threshold refers to specific x-axis values, not the 50% point."
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
      "prompt": "<span>Use a cumulative frequency graph to determine how many values fall above 40, estimate the median and IQR, and compare this distribution with another shown on the same graph.</span>",
      "hint": "Remember to read values vertically and horizontally on the graph, estimate quartiles carefully, and use the steepness of curves to compare distributions.",
      "mustHaveKeywords": [
        "threshold",
        "median",
        "interquartile range",
        "compare",
        "steep",
        "flat"
      ],
      "optionalKeywords": [
        "data values",
        "quartiles",
        "distribution",
        "estimate"
      ],
      "modelAnswer": "<span>To find how many data values fall above 40, locate 40 on the horizontal axis and read up to the curve, then across to find the cumulative frequency below or equal to 40. Subtract this from the total frequency. To estimate the median, find 50% of the total frequency and read horizontally to the curve and then down to the x-axis. Do the same for 25% and 75% to find Q1 and Q3, then calculate IQR = Q3 - Q1. When comparing distributions, look at where medians and quartiles lie: the distribution with larger median values has higher central tendency. Steeper sections indicate more clustered data, while flatter sections show more spread; use this to discuss consistency and spread.</span>",
      "scaffoldPrompts": [
        "First, identify the total frequency of the data.",
        "Next, find the cumulative frequency at the threshold 40.",
        "Calculate how many values are above 40.",
        "Estimate median and quartiles using 50%, 25%, and 75% of total frequency.",
        "Subtract Q1 from Q3 to find the interquartile range.",
        "Look for differences in steepness and position of curves to compare distributions."
      ]
    }
  }
};