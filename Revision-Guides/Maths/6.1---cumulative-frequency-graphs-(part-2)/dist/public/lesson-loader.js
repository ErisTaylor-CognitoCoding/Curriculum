window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Learn to find medians, quartiles, interquartile range and interpret cumulative frequency graphs",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept 1: Median from cumulative frequency graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value in a data set when all values are ordered. On a cumulative frequency graph, you find the median by locating half the total frequency (n/2) on the vertical axis, then reading across to the curve and dropping down vertically to the x-axis. This gives an estimate of the median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a queue at a cinema. The median person is the one standing exactly in the middle of the line. If you know the total number in line, halfway along gives the median position.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify total frequency n = 100</span>",
        "<span>Step 2: Calculate n/2 = 50, find 50 on cumulative frequency axis</span>",
        "<span>Step 3: Read horizontally across from 50 to meet the curve</span>",
        "<span>Step 4: Drop down vertically from the curve to the x-axis</span>",
        "<span>Step 5: Read the value on x-axis - this is the estimated median</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Quartiles from cumulative frequency graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles split the data into four equal parts. The lower quartile (Q1) is the value at one quarter of the total frequency (n/4), and the upper quartile (Q3) is at three quarters of the total frequency (3n/4). On the cumulative frequency graph, locate these frequencies on the vertical axis and read across to the curve, then down to the x-axis to estimate Q1 and Q3.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine dividing a chocolate bar equally into four parts: Q1 marks the end of the first quarter, and Q3 marks the end of the third quarter of the bar.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Total frequency n = 80</span>",
        "<span>Step 2: Calculate n/4 = 20 and 3n/4 = 60</span>",
        "<span>Step 3: Find 20 on vertical frequency axis, read across to curve, then down to x-axis to get Q1</span>",
        "<span>Step 4: Find 60 on vertical axis, read across to curve, then down to x-axis to get Q3</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The interquartile range (IQR) measures the spread of the middle 50% of the data. It is calculated by subtracting the lower quartile (Q1) from the upper quartile (Q3): IQR = Q3 - Q1. A larger IQR indicates more variability in the middle 50% of values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of measuring how wide the chocolate bar's center section is — the IQR shows how thick the middle half of your data is.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Find Q1 = 15 from cumulative frequency graph</span>",
        "<span>Step 2: Find Q3 = 40 from cumulative frequency graph</span>",
        "<span>Step 3: Calculate IQR = Q3 - Q1 = 40 - 15 = 25</span>"
      ]
    }
  },
  "step4": {
    "title": "Interpreting the number of data values below or above a threshold",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can interpret how many data values lie below or above a certain value by reading from the x-axis to the curve and then horizontally to the frequency axis. This allows you to estimate cumulative counts for any given threshold in the data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine checking how many people reached a certain height on a climbing wall by looking up from that height to the curve, then reading the number of climbers who got that far or further.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Choose threshold value on x-axis, e.g. 30</span>",
        "<span>Step 2: Read vertically up to the curve at value 30</span>",
        "<span>Step 3: Read horizontally across to the y-axis to find cumulative frequency</span>",
        "<span>Step 4: The value on y-axis is how many data values are &le; 30</span>"
      ]
    }
  },
  "step5": {
    "title": "Comparing two distributions using cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When comparing two sets of data with their cumulative frequency graphs, features like medians, quartiles, and interquartile ranges show differences in distribution. You can compare central tendency and spread by looking at the positions and shape of the two curves.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine comparing heights of two different teams by looking at their growth charts side by side to see which are generally taller or more varied.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify median values on both curves and compare</span>",
        "<span>Step 2: Compare IQRs to see which distribution is more spread out</span>",
        "<span>Step 3: Note how quickly the curves rise indicating clustering of data</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>How do you find the median from a cumulative frequency graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Find half the total frequency, read horizontally across to the curve, then drop down vertically to the x-axis</span>",
            "isCorrect": true,
            "explanation": "This procedure correctly finds the median value."
          },
          {
            "id": "b",
            "label": "<span>Find the highest frequency on the graph and use the corresponding x-axis value</span>",
            "isCorrect": false,
            "explanation": "This corresponds to the maximum value, not the median."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What does the interquartile range (IQR) represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The range between the highest and lowest values</span>",
            "isCorrect": false,
            "explanation": "This describes the overall range, not specifically the IQR."
          },
          {
            "id": "b",
            "label": "<span>The difference between the upper quartile and the lower quartile</span>",
            "isCorrect": true,
            "explanation": "Correct! IQR = Q3 - Q1."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the middle value of a data set when arranged in order.</span>",
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
                "value": "mode",
                "label": "mode",
                "isCorrect": false,
                "feedback": "Incorrect. The mode is the most frequent value."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The interquartile range is calculated by subtracting the <span class=\"font-semibold\">_____</span> quartile from the <span class=\"font-semibold\">_____</span> quartile.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "lower",
                "label": "lower",
                "isCorrect": true,
                "feedback": "Correct! The lower quartile is Q1."
              },
              {
                "value": "upper",
                "label": "upper",
                "isCorrect": false,
                "feedback": "Incorrect here. The lower quartile should be subtracted from the upper."
              }
            ]
          },
          {
            "id": "b3",
            "options": [
              {
                "value": "upper",
                "label": "upper",
                "isCorrect": true,
                "feedback": "Correct! Subtract Q1 from the upper quartile Q3."
              },
              {
                "value": "median",
                "label": "median",
                "isCorrect": false,
                "feedback": "Incorrect. The IQR is the difference between Q3 and Q1."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows a data set with total frequency 120. Estimate the median, the lower and upper quartiles, and then find the interquartile range. Use the graph provided to interpret how many data values are below the value 75. Finally, compare this data set with another distribution with a higher median and a larger interquartile range.</span>",
      "hint": "<span>Remember: Use the vertical axis for frequency values (n/2, n/4, 3n/4), then find corresponding values on the x-axis. For comparison, focus on position of medians and spread of IQR.</span>",
      "mustHaveKeywords": ["median", "quartile", "interquartile range", "cumulative frequency", "estimate", "compare", "distribution"],
      "optionalKeywords": ["threshold", "data values", "spread"],
      "modelAnswer": "<span>First, find the median by locating 60 (n/2) on the frequency axis, then read across to the curve and down to the x-axis for the median estimate. Next, find the lower quartile (30, n/4) and upper quartile (90, 3n/4) on the frequency axis and read corresponding x-axis values. Calculate the interquartile range by subtracting the lower quartile from the upper quartile. To find how many data values fall below 75, read vertically at 75 to the curve and then horizontally to the cumulative frequency axis. For comparison, note the higher median and larger IQR of the second distribution indicate it is skewed higher and more spread out.</span>",
      "scaffoldPrompts": [
        "Identify total frequency n and calculate n/2, n/4, 3n/4",
        "Read values from the cumulative frequency graph at these points",
        "Calculate the IQR using Q3 minus Q1",
        "Interpret the cumulative frequency at the threshold value",
        "Compare the key statistics between the two distributions"
      ]
    }
  }
};