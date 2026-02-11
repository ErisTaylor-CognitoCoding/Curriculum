window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Use cumulative frequency graphs to find thresholds, compare distributions, and estimate medians and quartiles",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold value is a specific point on the horizontal axis of a cumulative frequency graph. By moving vertically up from this threshold to the curve and then horizontally across to the vertical axis, you can find the number of data values that are less than or equal to that threshold. To find how many data values fall above that threshold, subtract this number from the total number of data points.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a crowd standing along a line where each person has a number representing their height. If you set a height threshold, you can count how many people are shorter or equal to that height by looking at a point on the line and see how many people have reached that height or lower.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a cumulative frequency graph with a total frequency of 100, find how many values are below 60.</span>",
        "<span>Find the point on the horizontal axis at 60 and move vertically until you reach the curve.</span>",
        "<span>Move horizontally from the curve to the vertical axis to read the cumulative frequency (say it is 75).</span>",
        "<span>Interpret this as 75 values below or equal to 60. The remaining 25 values lie above 60.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>How do you find the number of values above a threshold on a cumulative frequency graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Subtract the cumulative frequency at the threshold from the total frequency</span>",
            "isCorrect": true,
            "explanation": "Correct! The total data minus those below or equal to the threshold gives the number above."
          },
          {
            "id": "b",
            "label": "<span>Read the vertical axis value directly at the threshold</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The vertical axis value gives the cumulative frequency below or equal to the threshold, not above."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the value on the horizontal axis where 50% of the total data lies below or equal to it.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "Median",
                "isCorrect": true,
                "feedback": "Correct! The median divides the data into two equal halves."
              },
              {
                "value": "threshold",
                "label": "Threshold",
                "isCorrect": false,
                "feedback": "Try again. The threshold can be any value, but here we want the 50% point."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Comparing distributions using cumulative frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two cumulative frequency graphs plotted on the same axes can be compared to understand differences in their distributions. By examining medians, quartiles, and interquartile ranges (IQRs), we can see which data set tends to have higher or lower values, which is more spread out, and which one has more consistency. A steeper section of the curve shows data clustered tightly in that range, while a flatter section implies more spread.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two groups running marathon races on the same course. One group’s finish times cluster closely together (steeper curve), while another group is more spread out (flatter curve). You can tell who is more consistent and who takes longer by comparing their finish time distributions.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at two cumulative frequency graphs plotted together.</span>",
        "<span>Identify the median for each distribution at 50% cumulative frequency.</span>",
        "<span>Compare quartiles (25% and 75% points) to find IQR.</span>",
        "<span>Use these comparisons to determine which distribution has higher values or greater spread.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is located at 50% of the total frequency on the vertical axis. The lower quartile (Q1) is found at 25%, and the upper quartile (Q3) at 75%. From these points on the vertical axis, move horizontally to the curve, then drop vertically down to the horizontal axis to estimate these values. The interquartile range (IQR) is calculated as Q3 minus Q1 and represents the spread of the middle 50% of the data.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a cumulative frequency graph, locate 25%, 50%, and 75% of the total frequency on the vertical axis.</span>",
        "<span>From each point, move horizontally to the curve and then down to the horizontal axis to find the corresponding data values (Q1, median, Q3).</span>",
        "<span>Calculate the IQR as the difference between Q3 and Q1.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Use the given cumulative frequency graph to estimate the number of data values below 40, compare two distributions shown on the same graph, and find the median, quartiles, and IQR for one distribution.</span>",
      "hint": "Remember to read off values vertically and horizontally carefully. Use subtraction to find values above thresholds. Pay attention to the 25%, 50%, and 75% lines for quartiles and median.",
      "mustHaveKeywords": ["cumulative frequency", "threshold", "median", "quartiles", "IQR", "compare distributions"],
      "optionalKeywords": ["steeper curve", "spread", "consistency"],
      "modelAnswer": "<span>First, read the cumulative frequency at 40 on the horizontal axis to find how many data values are below 40. Subtract this from the total frequency to find how many are above.<br>Next, compare the two distributions by looking at their medians and IQRs from the graph. The distribution with a higher median has generally larger values. A smaller IQR suggests less spread and more consistency.<br>Estimate the median at 50% frequency, Q1 at 25%, and Q3 at 75% frequency by reading from the cumulative frequency curve. Calculate IQR as Q3 minus Q1.</span>",
      "scaffoldPrompts": ["Identify the total frequency of the data set.", "Find the cumulative frequency at the threshold 40.", "Subtract to find values above 40.", "Locate the 25%, 50%, and 75% points on the vertical axis for one distribution.", "Draw horizontal lines to the curve then down to the horizontal axis to estimate quartiles and median.", "Calculate the IQR by subtracting Q1 from Q3.", "Compare medians and IQRs of the two graphs to discuss distributions."]
    }
  }
};