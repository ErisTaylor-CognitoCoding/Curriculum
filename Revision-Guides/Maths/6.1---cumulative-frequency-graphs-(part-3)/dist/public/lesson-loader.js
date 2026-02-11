window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Using cumulative frequency graphs to analyse data distributions and estimate key statistics",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept 1: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold is a specific value on the horizontal axis of a cumulative frequency graph. By reading vertically up to the curve and then horizontally to the vertical axis, we can find how many data values are less than or equal to that threshold. If we subtract this number from the total frequency, we get how many data values are above the threshold.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine counting how many students scored below a certain mark on a test. If you know how many students scored less than or equal to 60, you can find out how many scored above 60 by subtracting from the total class size.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the threshold value on the horizontal axis, e.g. 50.</span>",
        "<span>Draw a vertical line from 50 up to the cumulative frequency curve.</span>",
        "<span>From the point where it meets the curve, draw a horizontal line to the vertical axis.</span>",
        "<span>Read the cumulative frequency value at this point; this equals the number of data values ≤ 50.</span>",
        "<span>Subtract this from the total frequency (e.g., 100) to find the number of data values above 50.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept Check: Understanding threshold values",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the cumulative frequency value at a threshold on the horizontal axis represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The number of data values less than or equal to the threshold</span>",
            "isCorrect": true,
            "explanation": "Correct! The cumulative frequency shows how many data points fall below or exactly at the threshold."
          },
          {
            "id": "b",
            "label": "<span>The number of data values exactly equal to the threshold</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The cumulative frequency is cumulative, so it counts all values up to and including the threshold, not just equal values."
          },
          {
            "id": "c",
            "label": "<span>The total frequency of the data set</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The total frequency is the maximum cumulative frequency at the highest data value."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Concept 2: Comparing distributions using cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency graphs are plotted on the same axes, we can compare their medians, quartiles, and interquartile ranges (IQRs). This comparison helps us determine which data set has higher values, greater spread, or more consistency. Steeper parts of the curve mean data are clustered in that range, while flatter sections indicate data are more spread out.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two groups of runners completing a race: if one group's graph rises steeply, many runners finished around the same time; if the other group's graph is flatter, runner finishing times are more varied.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot cumulative frequency curves of two data sets on the same axes.</span>",
        "<span>Identify median points for each distribution at 50% of total frequency.</span>",
        "<span>Compare quartiles and IQRs from the curves to see differences in spread and central tendency.</span>",
        "<span>Note where curves are steep or flat to assess clustering or spread.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Interpreting comparative cumulative frequency graphs",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>If one cumulative frequency curve is steeper between Q1 and Q3 than another, what does this suggest about the data?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The data are more tightly clustered in this range</span>",
            "isCorrect": true,
            "explanation": "Correct! A steeper curve indicates many data points lie close together within this quartile range."
          },
          {
            "id": "b",
            "label": "<span>The data are more spread out in this range</span>",
            "isCorrect": false,
            "explanation": "Incorrect. A flat curve shows spread out data; steepness shows clustering."
          },
          {
            "id": "c",
            "label": "<span>The data has no values in this range</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The curve rising means data are present; flat would suggest few or none."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Concept 3: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">From cumulative frequency curves, the median is found at 50% of the total frequency, the lower quartile (Q1) at 25%, and the upper quartile (Q3) at 75%. To find these, read horizontally from these cumulative frequency values to the curve, then down vertically to the data axis to estimate the values. The interquartile range (IQR) is calculated by subtracting Q1 from Q3, showing the spread of the middle 50% of data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like dividing a crowd into four equal groups by height and seeing how tall the shortest and tallest in the middle half are.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the total frequency from the highest point on the vertical axis, e.g. 80.</span>",
        "<span>Calculate 25%, 50%, and 75% of the total frequency: 20, 40, and 60.</span>",
        "<span>From 20 on the vertical axis, read horizontally to the curve, then down to the horizontal axis to estimate Q1.</span>",
        "<span>Repeat to find median (40) and Q3 (60) values.</span>",
        "<span>Subtract Q1 from Q3 to find IQR.</span>"
      ]
    }
  },
  "step6": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> represents the middle value of the data, and the <span class=\"font-semibold\">_____</span> shows the spread of the middle 50% of data.</span>",
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
                "feedback": "Try again. The mean is the average, not the middle value."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "IQR",
                "label": "IQR",
                "isCorrect": true,
                "feedback": "Correct! The IQR measures the spread of the middle 50%."
              },
              {
                "value": "range",
                "label": "range",
                "isCorrect": false,
                "feedback": "Incorrect. The range is total spread, not just the middle 50%."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Use a cumulative frequency graph to explain how to estimate the number of data points above a threshold, compare two data sets, and estimate the median, quartiles, and IQR.</span>",
      "hint": "Remember to use the total frequency for percentages, find cumulative frequencies at thresholds, and describe what the steepness of curves tells you.",
      "mustHaveKeywords": ["cumulative frequency", "threshold", "median", "quartiles", "IQR", "compare", "steeper", "flatter"],
      "optionalKeywords": ["total frequency", "data values above", "spread", "distribution"],
      "modelAnswer": "<span>To estimate the number of data points above a threshold using a cumulative frequency graph, first find the cumulative frequency at that threshold by reading from the horizontal axis up to the curve and then across to the vertical axis. Subtract this value from the total frequency to find the number above. To compare two data sets, plot their cumulative frequency curves on the same axes and compare their medians and quartiles by finding the values at 50%, 25%, and 75% of total frequency respectively. The shape of the curves indicates spread; a steeper curve shows more data clustered, while a flatter one shows data more spread out. The IQR is the difference between the upper and lower quartiles, showing the spread of the middle 50% of data.</span>",
      "scaffoldPrompts": ["Identify the total frequency first", "Find cumulative frequency values at the threshold", "Subtract to find values above the threshold", "Locate quartile and median cumulative frequencies", "Compare steepness of curves for spread and clustering"]
    }
  }
};