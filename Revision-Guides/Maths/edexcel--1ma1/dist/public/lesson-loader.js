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
    "title": "Concept 1: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold is a specific value on the horizontal axis of a cumulative frequency graph. By reading vertically up from this threshold to the curve, and then horizontally across to the vertical axis, we can find how many data values are less than or equal to that value. To find data values above it, subtract this number from the total frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a crowd gathering behind a fence where the horizontal axis is the fence length representing age. If you stand at a certain point on the fence (a threshold), looking at where people have gathered tells you how many are younger (or below) that age. The rest are beyond (above) it.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Locate the threshold value (e.g., 30) on the horizontal axis.</span>",
        "<span>Step 2: Move vertically up to the cumulative frequency curve.</span>",
        "<span>Step 3: From the curve, move horizontally to the vertical axis to read the cumulative frequency (e.g., 40).</span>",
        "<span>Step 4: If the total frequency is 100, calculate how many are above 30 by subtracting: 100 - 40 = 60.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>On a cumulative frequency graph, how do you find how many data points are below a certain threshold?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Read vertically up from the threshold to the curve, then horizontally to the cumulative frequency axis.</span>",
            "isCorrect": true,
            "explanation": "<span>This is the correct method to find the cumulative frequency below the threshold.</span>"
          },
          {
            "id": "b",
            "label": "<span>Read horizontally from the threshold to the cumulative frequency axis.</span>",
            "isCorrect": false,
            "explanation": "<span>The horizontal axis represents data values, not frequencies, so this does not give the number below the threshold.</span>"
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Concept 2: Comparing distributions using cumulative frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency graphs are plotted on the same axes, we can compare their medians, quartiles, and interquartile ranges. A curve that is steeper in certain regions indicates data clustering over that range, while flatter sections show the data spread out. Comparing median heights shows which distribution has higher central values, and comparing IQRs shows which has greater spread.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two hills on a landscape; a steep hill represents most people gathering tightly at certain values, while a gentle slope means people are spread out across the range.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Plot two cumulative frequency curves on the same axes from given data.</span>",
        "<span>Step 2: Locate median (50%) points on both curves to compare central tendency.</span>",
        "<span>Step 3: Identify quartiles (25% and 75%) on each curve to estimate spread.</span>",
        "<span>Step 4: Compare the interquartile ranges (IQR = Q3 - Q1) of each to assess variability.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>What does a steeper section on a cumulative frequency curve indicate?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The data values are tightly clustered in that range.</span>",
            "isCorrect": true,
            "explanation": "<span>A steeper curve means many data values are packed closely together there.</span>"
          },
          {
            "id": "b",
            "label": "<span>The data values are very spread out.</span>",
            "isCorrect": false,
            "explanation": "<span>A flat curve indicates data spread out, not a steep one.</span>"
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Concept 3: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median (Q2) is the data value found at 50% of the total frequency. The lower quartile (Q1) and upper quartile (Q3) correspond to 25% and 75% cumulative frequencies respectively. To estimate these, read horizontally from the cumulative frequency axis to the curve, then vertically down to the data axis. The interquartile range (IQR) is the difference between Q3 and Q1 and shows the spread of the middle 50% of the data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine slicing a loaf of bread into four parts; the cut positions represent quartiles dividing the data into four equal groups.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Find 25%, 50%, and 75% of the total frequency on the vertical axis.</span>",
        "<span>Step 2: From each percentage, move horizontally to the curve, then down vertically to read the corresponding data value on the horizontal axis.</span>",
        "<span>Step 3: Calculate IQR as Q3 minus Q1.</span>"
      ]
    }
  },
  "step6": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the middle value of the data set.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "Median",
                "isCorrect": true,
                "feedback": "<span>Correct! The median divides the dataset into two equal halves.</span>"
              },
              {
                "value": "mean",
                "label": "Mean",
                "isCorrect": false,
                "feedback": "<span>Incorrect. The mean is the average, but the median is the middle value.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> shows the difference between the upper and lower quartiles.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "IQR",
                "label": "Interquartile Range (IQR)",
                "isCorrect": true,
                "feedback": "<span>Correct! The IQR measures the spread of the middle 50% of data.</span>"
              },
              {
                "value": "range",
                "label": "Range",
                "isCorrect": false,
                "feedback": "<span>Incorrect. Range is difference between maximum and minimum, not quartiles.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-3",
        "question": "<span>How do you estimate the lower quartile (Q1) from a cumulative frequency graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Find 25% of total frequency, then read horizontally to the curve and down to the data axis.</span>",
            "isCorrect": true,
            "explanation": "<span>Correct method to estimate Q1.</span>"
          },
          {
            "id": "b",
            "label": "<span>Find 75% of total frequency and read vertically down from the curve.</span>",
            "isCorrect": false,
            "explanation": "<span>This method is for Q3, not Q1.</span>"
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Practice Calculating Above and Below Thresholds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Given a cumulative frequency graph with total frequency 120, estimate how many data values lie below 50 and how many lie above 80.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Read cumulative frequency at 50 on the horizontal axis (e.g., 70).</span>",
        "<span>Step 2: This means 70 values are below or equal to 50.</span>",
        "<span>Step 3: Read cumulative frequency at 80 (e.g., 110).</span>",
        "<span>Step 4: So 110 values are below or equal to 80, meaning 10 are above 80 (120 - 110).</span>"
      ]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph for two classes, A and B, is given. Class A has a total frequency of 100 and Class B has 120. Using the graph, estimate the medians, quartiles, and IQRs for both classes. Then compare which class has a higher median and which class has a greater spread of data.</span>",
      "hint": "Remember to find 25%, 50%, and 75% of each total frequency to estimate quartiles and median, then calculate the IQR for each.",
      "mustHaveKeywords": ["median", "quartiles", "IQR", "compare", "steeper", "spread", "central tendency"],
      "optionalKeywords": ["cumulative frequency", "distribution", "data values"],
      "modelAnswer": "<span>To answer, first find 25%, 50%, and 75% of each class's total frequency. Then, for each percentage, read across to the curve and down to the data axis to estimate Q1, median, and Q3. Calculate IQR = Q3 - Q1 for each. Compare medians to see which class is higher. Compare IQRs and curve steepness to discuss spread and data clustering. A steeper curve section means more clustering in that range. Finally, summarize which class shows more consistency or spread.</span>",
      "scaffoldPrompts": [
        "Calculate 25%, 50%, and 75% of the total frequencies.",
        "Mark these points on the vertical axis and locate corresponding values on the horizontal axis.",
        "Subtract Q1 from Q3 to find the IQR for each class.",
        "Compare medians and IQRs, and describe what this shows about the data distributions."
      ]
    }
  }
};