window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Use and interpret cumulative frequency graphs to analyze data distributions and estimate key statistics.",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold is a specific value on the horizontal axis of a cumulative frequency graph. By reading upwards from this value to meet the cumulative frequency curve and then moving horizontally across to the vertical axis, you can determine how many data values are less than or equal to that threshold. To find how many data points are greater than the threshold, subtract this number from the total frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a queue of people waiting to get tickets. If you want to know how many people are in line up to a certain person (threshold), you count them starting from the front up to that person. If you want to know how many are behind, subtract that number from the total queue.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the cumulative frequency at the threshold value 30 by reading up to the curve on the graph.</span>",
        "<span>Read across to the vertical axis to see that 40 data values are less than or equal to 30.</span>",
        "<span>If the total frequency is 100, then the number of data values above 30 is 100 - 40 = 60.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>On a cumulative frequency graph, what does the value at a threshold represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The number of data values less than or equal to the threshold</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! The cumulative frequency shows how many values fall below or equal to the threshold.</span>"
          },
          {
            "id": "b",
            "label": "<span>The number of data values greater than the threshold</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. To find values greater than the threshold, subtract from total frequency.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> on a cumulative frequency graph is the value where 50% of the data falls below it.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "median",
                "isCorrect": true,
                "feedback": "Correct! The median corresponds to the 50% cumulative frequency."
              },
              {
                "value": "mode",
                "label": "mode",
                "isCorrect": false,
                "feedback": "Try again. The mode is the most frequent value, not the 50% point."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>On the cumulative frequency graph, the <span class=\"font-semibold\">_____</span> quartile corresponds to the point where 25% of data lies below it.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "lower quartile",
                "label": "lower quartile (Q1)",
                "isCorrect": true,
                "feedback": "Correct! The lower quartile is at 25% cumulative frequency."
              },
              {
                "value": "upper quartile",
                "label": "upper quartile (Q3)",
                "isCorrect": false,
                "feedback": "Try again. The upper quartile is at 75%."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Comparing distributions using cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency graphs are shown on the same axes, you can compare their medians, quartiles, and interquartile ranges (IQRs). The distribution with the higher median generally has larger values. A steeper section on the curve shows data clustered closely together (less spread), while flatter sections show that the values are more spread out. This helps identify which data set is more consistent or which varies more.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two hills seen from the side. A steep hill means the height changes quickly over a short distance (clustering), whereas a long gentle slope means gradual height change (spread out data).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at two cumulative frequency curves plotted on the same graph.</span>",
        "<span>The median is found where cumulative frequency reaches 50% — identify and compare these points for each curve.</span>",
        "<span>Note that one curve is steeper in the middle range indicating less spread compared to the flatter curve.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Estimating median, quartiles, and IQR from cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimate the median by finding the value on the horizontal axis corresponding to 50% of the total cumulative frequency. Similarly, estimate the lower quartile (Q1) at 25% and the upper quartile (Q3) at 75%. The interquartile range (IQR) is calculated by subtracting Q1 from Q3 and represents the range of the middle 50% of data.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate total frequency of the data (e.g., 200).</span>",
        "<span>Find 25%, 50%, and 75% of total frequency (e.g., 50, 100, 150).</span>",
        "<span>Locate these values on the vertical axis and read horizontally across to the curve.</span>",
        "<span>From the points on the curve, drop vertically down to the horizontal axis to estimate Q1, median, and Q3.</span>",
        "<span>Calculate IQR = Q3 – Q1.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Use the cumulative frequency graph provided to: (a) estimate how many data values are below 60, (b) compare the shape and spread of this data set with another, and (c) calculate the interquartile range.</span>",
      "hint": "Remember to find cumulative frequencies for the threshold and quartiles using percentages of total frequency. Look at curve steepness to compare spread.",
      "mustHaveKeywords": ["estimate", "threshold", "median", "quartiles", "interquartile range", "compare", "spread", "data values"],
      "optionalKeywords": ["steepness", "total frequency", "consistency"],
      "modelAnswer": "<span>(a) To estimate the number of data values below 60, find 60 on the horizontal axis, trace up to the curve, then horizontally to read the cumulative frequency (e.g., 70). This means 70 data values are below or equal to 60.<br><br>(b) Comparing distributions, observe the median (50% point) and shape of both curves. If the curve here is steeper in parts, the data is more clustered; a flatter curve indicates more spread. Use these features to explain which data set shows higher values or greater consistency.<br><br>(c) To calculate the interquartile range (IQR), find the lower quartile (25%) and upper quartile (75%) cumulative frequency positions on the graph. Read corresponding data values on the horizontal axis (e.g., Q1 = 40, Q3 = 80), then subtract Q1 from Q3 to get IQR = 40.</span>",
      "scaffoldPrompts": [
        "Identify the total frequency and calculate 25%, 50%, and 75% of it.",
        "Find how many data values fall below 60 using the graph.",
        "Compare the steepness of this graph with another to comment on spread.",
        "Find Q1 and Q3 values by reading the graph and calculate IQR."
      ]
    }
  }
};