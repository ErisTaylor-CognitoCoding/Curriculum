window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Learn to use and interpret cumulative frequency graphs for thresholds, comparisons, and estimates.",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold is a specific value on the horizontal axis of a cumulative frequency graph. By locating the threshold value, reading vertically up to the cumulative frequency curve, and then horizontally across to the vertical axis, you can find out how many data values are less than or equal to that threshold. To find how many data values are above this threshold, subtract the cumulative frequency at the threshold from the total frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a queue of people waiting to enter a concert. The threshold is a mark on the line representing a certain position. By counting the people up to that mark, you know how many have arrived before that point, and the rest are behind it.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the cumulative frequency at the threshold value (e.g., 30 minutes).</span>",
        "<span>Read across horizontally to find how many data values are less than or equal to this time.</span>",
        "<span>Subtract this number from the total number of data points to find how many are above the threshold.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If the total frequency is 100 and the cumulative frequency at threshold 40 is 65, how many data values are above 40?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>35</span>",
            "isCorrect": true,
            "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Since 65 values are at or below 40, the remaining 35 (100 - 65) are above 40.</p>"
          },
          {
            "id": "b",
            "label": "<span>65</span>",
            "isCorrect": false,
            "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">65 values are less than or equal to 40, not above.</p>"
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Concept: Comparing distributions using cumulative frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency graphs are drawn on the same axes, we can compare their distributions by examining their medians, quartiles, and interquartile ranges. A steeper section on the curve shows many data values clustered in that range, while a flatter section shows data spread over a wider range. This helps in understanding which distribution has higher or lower values and which is more consistent.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Picture two runners in a race. One speedily covers a short distance (steep curve), while the other jogs steadily over a longer distance (flatter curve). This shows different distributions of their pace.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at the medians (50% mark) of both distributions to see which group has higher values.</span>",
        "<span>Compare the steepness of the curves between quartiles to understand spread.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>Which of the following indicates a distribution with more consistent data around the median?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>A steep curve between Q1 and Q3</span>",
            "isCorrect": true,
            "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A steep curve means many data are clustered closely, indicating less spread and more consistency.</p>"
          },
          {
            "id": "b",
            "label": "<span>A flat curve between Q1 and Q3</span>",
            "isCorrect": false,
            "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A flat curve shows the data spread out over a wide range, so less consistency.</p>"
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Concept: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median corresponds to the 50% cumulative frequency, the lower quartile (Q1) to 25%, and the upper quartile (Q3) to 75%. To estimate these, draw a horizontal line from the cumulative frequency value (e.g., 50% total frequency for median) to the curve, then drop a vertical line down to the horizontal axis. The difference between Q3 and Q1 gives the interquartile range (IQR), representing the spread of the middle 50% of data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of Q1, median, and Q3 as milestones on a journey showing where people have reached at 25%, 50%, and 75% completion levels.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find 25%, 50%, and 75% of the total frequency.</span>",
        "<span>Draw horizontal lines from these values to intersect the curve.</span>",
        "<span>Drop vertical lines down from the intersections to the horizontal axis to find estimated data values for Q1, median, and Q3.</span>",
        "<span>Calculate IQR by subtracting Q1 from Q3.</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> represents the middle value of the data, and it is found at the <span class=\"font-semibold\">_____</span> percentile on the cumulative frequency graph.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "median",
                "isCorrect": true,
                "feedback": "<p class=\"text-sm leading-6 text-muted-foreground\">Correct! The median is the middle value.</p>"
              },
              {
                "value": "mode",
                "label": "mode",
                "isCorrect": false,
                "feedback": "<p class=\"text-sm leading-6 text-muted-foreground\">Incorrect. The mode is the most frequent value, not the middle.</p>"
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "50%",
                "label": "50%",
                "isCorrect": true,
                "feedback": "<p class=\"text-sm leading-6 text-muted-foreground\">Correct! The median is at the 50% cumulative frequency.</p>"
              },
              {
                "value": "25%",
                "label": "25%",
                "isCorrect": false,
                "feedback": "<p class=\"text-sm leading-6 text-muted-foreground\">Incorrect. 25% corresponds to the lower quartile (Q1).</p>"
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
      "prompt": "<span>A cumulative frequency graph shows the total frequency as 120. Use the graph to estimate how many data values fall below 45, and find the median and interquartile range (IQR). Explain your process.</span>",
      "hint": "<span>Start by finding the cumulative frequency at 45, then locate 25%, 50%, and 75% of the total frequency on the vertical axis to estimate Q1, median, and Q3.</span>",
      "mustHaveKeywords": ["cumulative frequency", "threshold", "median", "quartiles", "interquartile range", "estimate"],
      "optionalKeywords": ["subtract", "compare", "data values"],
      "modelAnswer": "<span>First, find the cumulative frequency value at threshold 45 by reading the graph. This gives the number of data values below or equal to 45. Next, calculate 25%, 50%, and 75% of the total frequency (120), which are 30, 60, and 90 respectively. Draw horizontal lines at these values to meet the curve, then drop down vertically to the x-axis to estimate Q1, median, and Q3. Finally, subtract Q1 from Q3 to find the IQR, representing the spread of the middle 50% of data.</span>",
      "scaffoldPrompts": [
        "<span>Identify the total frequency and calculate 25%, 50%, and 75% of it.</span>",
        "<span>Use the cumulative frequency graph to find cumulative frequencies at threshold values and percentile points.</span>",
        "<span>Estimate quartiles and subtract to find the interquartile range.</span>"
      ]
    }
  }
};