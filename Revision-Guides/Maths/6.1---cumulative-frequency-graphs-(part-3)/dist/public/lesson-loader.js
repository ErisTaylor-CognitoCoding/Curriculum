window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Use cumulative frequency graphs to find data below or above thresholds, compare distributions, and estimate median, quartiles, and IQR.",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold is a specific value on the horizontal axis of a cumulative frequency graph. By moving upwards from this value to the curve and then across to the vertical axis, you can determine how many data values are less than or equal to that threshold. To find how many data values are above this threshold, subtract the cumulative frequency at that point from the total number of data values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a line of people ordered from shortest to tallest. Picking a height (threshold) is like pointing to a spot in the line; counting who is before you tells you how many are below that height, and counting after shows those taller.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Choose a threshold, e.g., 12.</span>",
        "<span>From 12 on the horizontal axis, move vertically to the curve.</span>",
        "<span>Then move horizontally to the vertical axis to find cumulative frequency, e.g., 30.</span>",
        "<span>If total data values are 50, then 50 - 30 = 20 are above the threshold.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If the cumulative frequency at a threshold of 15 is 40 and the total data values are 60, how many data values are above 15?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>20</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! You subtract cumulative frequency (40) from total (60) to get 20 above 15.</span>"
          },
          {
            "id": "b",
            "label": "<span>15</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect: 15 is not related here; you must use total minus cumulative frequency.</span>"
          },
          {
            "id": "c",
            "label": "<span>40</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect: 40 is how many values are below or equal to 15, not above.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is a value on the horizontal axis used to determine data counts below or above it.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "threshold",
                "label": "threshold",
                "isCorrect": true,
                "feedback": "Correct! Threshold is the specific horizontal axis value."
              },
              {
                "value": "median",
                "label": "median",
                "isCorrect": false,
                "feedback": "Try again: median is a special value but not the general name for horizontal axis value used for counting."
              },
              {
                "value": "cumulative frequency",
                "label": "cumulative frequency",
                "isCorrect": false,
                "feedback": "Try again: cumulative frequency is vertical axis data, not the horizontal threshold."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Comparing distributions using cumulative frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency graphs are on the same axes, you can compare their medians, quartiles, and interquartile ranges to understand distribution differences. A steeper section of the curve means many data points are clustered in that range (less spread), while a flatter section shows data are more spread out.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two hills — a steep hill means climbing quickly over a short distance just like a cluster of data, while a gentle slope shows a slow rise like data spread far apart.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot two cumulative frequency graphs on one grid.</span>",
        "<span>Estimate medians: the x-values at 50% total frequency for each.</span>",
        "<span>Compare quartiles and IQRs to see which has a higher median or wider spread.</span>",
        "<span>Interpret: the steeper graph section indicates clustering; flatter parts indicate data spread.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To estimate the median, locate 50% of the total frequency on the vertical axis, then move horizontally to the curve and down to the horizontal axis for the median value. Similarly, find 25% (Q1) and 75% (Q3) on the vertical axis, follow across to the curve, and down for quartile estimates. The interquartile range (IQR) is the difference Q3 − Q1, representing the spread of the middle 50% of data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a marathon runner’s timing: the median is the middle finisher’s time, while Q1 and Q3 show the time of the faster and slower quarter runners. The IQR is the range of times for the central half of the runners.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 80; find 50% = 40 on vertical axis for median estimate.</span>",
        "<span>From 40 on vertical axis, draw horizontal line to curve then drop down to horizontal axis reading median value, e.g., 23.</span>",
        "<span>Repeat for 25% (20) and 75% (60) frequencies to find Q1 and Q3 values.</span>",
        "<span>Calculate IQR = Q3 - Q1.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows the distribution of test scores for two classes, A and B, on the same axes. Class A has a steeper curve between scores 40 and 60, while class B’s curve is flatter in this range. The median of class A is 55 and class B is 50. Explain which class has a greater spread of scores and why, and estimate the interquartile range for class A given Q1 = 45 and Q3 = 65.</span>",
      "hint": "Remember to compare curve steepness, medians, quartiles, and calculate IQR by subtracting Q1 from Q3.",
      "mustHaveKeywords": ["steeper curve", "clustered data", "flatter section", "greater spread", "median", "interquartile range", "IQR", "Q3 minus Q1"],
      "optionalKeywords": ["data consistency", "middle 50% of data"],
      "modelAnswer": "<span>Class A's steeper curve between 40 and 60 indicates data points are clustered closely in that score range, showing less spread and more consistency. Class B's flatter curve shows data are spread out more, indicating a greater spread of scores. Since Class A's median is 55, which is higher than Class B's 50, the class generally scored higher. The interquartile range for Class A is Q3 - Q1 = 65 - 45 = 20, showing the spread of the middle 50% of the scores.</span>",
      "scaffoldPrompts": ["Identify which curve is steeper or flatter in the given range.", "Explain what a steeper curve indicates about data spread.", "Compare median values to understand central tendency.", "Calculate IQR by subtracting Q1 from Q3."]
    }
  }
};