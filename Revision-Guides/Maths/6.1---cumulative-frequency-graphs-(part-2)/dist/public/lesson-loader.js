window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Learn to use and interpret cumulative frequency graphs to find medians, quartiles, interquartile ranges, and compare distributions.",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Finding the Median from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of a data set. When using a cumulative frequency graph, find the total number of data points (n), then locate <em>n/2</em> on the frequency (y) axis. From this value, draw a horizontal line until it meets the curve, then drop a vertical line down to the x-axis. The x-value where it meets is the median.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine lining up all students in a queue to get a prize. The median student is the one exactly in the middle of the queue.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Count the total frequency. For example, if there are 40 data points, n = 40.</span>",
        "<span>Step 2: Find n/2 = 40/2 = 20 on the vertical axis.</span>",
        "<span>Step 3: Draw a horizontal line from 20 to the cumulative frequency curve.</span>",
        "<span>Step 4: Drop a vertical line from the curve to the x-axis to find the median value.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Quartiles from Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles divide your data into four equal parts. The lower quartile (Q1) is at <em>n/4</em> of the total frequency, and the upper quartile (Q3) is at <em>3n/4</em>. To find these, locate these points on the y-axis, then read across to the curve and down to the x-axis.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of cutting a pizza into 4 equal slices — each slice represents a quartile of the data.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If n = 40 data points, find Q1 at 10 (40/4) on the y-axis.</span>",
        "<span>Draw a horizontal line from 10 to the cumulative frequency curve, then drop down to the x-axis to find Q1.</span>",
        "<span>Find Q3 at 30 (3×40/4) on the y-axis and repeat the process to find the upper quartile.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The interquartile range (IQR) measures the spread of the middle 50% of your data. It is found by subtracting the lower quartile (Q1) from the upper quartile (Q3): <strong>IQR = Q3 - Q1</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the IQR as the length of the middle half of a ruler marked by Q1 and Q3, showing the typical range of your data.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Once Q1 and Q3 are read off the graph, subtract Q1 from Q3 to find IQR.</span>",
        "<span>For example, if Q3 = 75 and Q1 = 50, then IQR = 75 - 50 = 25.</span>"
      ]
    }
  },
  "step4": {
    "title": "Using Cumulative Frequency Graphs to Find Number of Data Values Above or Below a Threshold",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find how many values fall below or above a certain number, locate that number on the x-axis of the cumulative frequency graph. From this point, draw a vertical line up to the curve, then read across to the y-axis to find the cumulative frequency. The number on the y-axis gives how many data points are less than or equal to that number.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Pick a value, e.g. 60, on the x-axis.</span>",
        "<span>Draw a vertical line up to the curve and then horizontally to the y-axis.</span>",
        "<span>If it reads 25, it means 25 data values are ≤ 60.</span>",
        "<span>To find how many values are above 60, subtract 25 from total frequency.</span>"
      ]
    }
  },
  "step5": {
    "title": "Comparing Two Distributions Using Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency graphs are drawn on the same axes, you can compare medians, quartiles, and spread to see which data set tends to have higher or more varied values.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the medians of both graphs and compare which is larger.</span>",
        "<span>Compare IQRs by finding Q3 and Q1 for each graph.</span>",
        "<span>Observe which graph reaches high cumulative frequencies faster, indicating smaller values overall.</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>How do you find the median on a cumulative frequency graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Find n/2 on the y-axis, draw a horizontal line to the curve, then drop vertically to the x-axis.</span>",
            "isCorrect": true,
            "explanation": "<span>The median corresponds to the data value at half the total frequency, so this method finds it.</span>"
          },
          {
            "id": "b",
            "label": "<span>Find the highest point on the curve and read the x-value.</span>",
            "isCorrect": false,
            "explanation": "<span>The highest point shows the total frequency, not the median.</span>"
          },
          {
            "id": "c",
            "label": "<span>Draw a vertical line at the mean value and read the frequency.</span>",
            "isCorrect": false,
            "explanation": "<span>This process does not locate the median on the cumulative frequency graph.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the value that divides the data into two equal halves.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "mean", "label": "Mean", "isCorrect": false, "feedback": "Try again - the mean is the average."},
              {"value": "median", "label": "Median", "isCorrect": true, "feedback": "Correct! The median is the middle value."},
              {"value": "mode", "label": "Mode", "isCorrect": false, "feedback": "Try again - the mode is the most frequent value."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> measures the spread between the upper and lower quartiles.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "IQR", "label": "Interquartile Range (IQR)", "isCorrect": true, "feedback": "Correct! IQR is calculated as Q3 - Q1."},
              {"value": "range", "label": "Range", "isCorrect": false, "feedback": "Try again - the range is difference between min and max values."},
              {"value": "variance", "label": "Variance", "isCorrect": false, "feedback": "Try again - variance is a different measure of spread."}
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows data on students’ test scores. Explain how to estimate the median, quartiles, and interquartile range from the graph, and describe how to find how many students scored less than 70.</span>",
      "hint": "Remember to use the total number of data points (n), locate n/2, n/4, and 3n/4 on the y-axis, and use vertical lines from the curve to the x-axis to find values.",
      "mustHaveKeywords": ["median", "quartiles", "interquartile range", "cumulative frequency", "n/2", "n/4", "3n/4", "below 70"],
      "optionalKeywords": ["estimate", "x-axis", "y-axis", "draw lines"],
      "modelAnswer": "<span>First, find the total frequency (n) on the graph. To estimate the median, locate n/2 on the y-axis, draw a horizontal line to the curve, then drop down to the x-axis to read the median score. For quartiles, find n/4 and 3n/4 on the y-axis; draw lines horizontally to the curve and then vertically to the x-axis to find the lower quartile (Q1) and upper quartile (Q3). Calculate the interquartile range by subtracting Q1 from Q3. To find how many students scored less than 70, locate 70 on the x-axis, draw a vertical line up to the curve, then horizontally to the y-axis; this value gives the cumulative frequency of scores less than or equal to 70.</span>",
      "scaffoldPrompts": [
        "Step 1: Identify total frequency from the graph.",
        "Step 2: Use n/2 to find median via horizontal then vertical lines.",
        "Step 3: Repeat for n/4 and 3n/4 to find quartiles.",
        "Step 4: Subtract Q1 from Q3 for the IQR.",
        "Step 5: Draw vertical line at 70, then horizontal to y-axis to find count below 70."
      ]
    }
  }
};