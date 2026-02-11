window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Using cumulative frequency graphs to find data counts, compare distributions, and estimate medians and quartiles",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept 1: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold is a specific value on the horizontal axis of a cumulative frequency graph. By finding this value, reading vertically up to the curve, then horizontally to the frequency axis, we can find the number of data points that are less than or equal to this threshold. To find how many data values are above this threshold, we subtract that count from the total number of data points.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a queue of people waiting for tickets sorted by height. If you want to know how many people are below a certain height, look up to that person's position then count how many people are before them. To find how many are taller, subtract from the total number in the queue.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the cumulative frequency at the threshold value 30 on the graph.</span>",
        "<span>Read the cumulative frequency value on the vertical axis (e.g., 40).</span>",
        "<span>If the total frequency is 100, then number of data values above 30 is 100 - 40 = 60.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Comparing distributions using cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency curves are on the same graph, we compare their medians, quartiles, and interquartile ranges to understand differences in distributions. A higher median means generally larger values, a wider IQR means more spread, and steepness in the curve shows clustering of data points.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Consider two lines showing rain accumulation. A quicker rise (steeper) means most rain fell quickly (clustered data), while a slower rise (flatter) shows rain was spread out over time (spread data).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at two cumulative frequency graphs for different tests.</span>",
        "<span>Identify medians (50% cumulative frequency) for each.</span>",
        "<span>Compare the quartiles and IQRs to determine which test scores were generally higher or more variable.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median corresponds to the 50% mark of the total frequency. The lower quartile (Q1) is at 25%, and the upper quartile (Q3) is at 75%. To estimate these, find these percentages on the vertical axis, read horizontally to the graph curve, then drop down vertically to the horizontal (data) axis to find the estimated values. The interquartile range (IQR) is Q3 minus Q1 and measures the spread of the middle 50% of data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine dividing a class of students into four groups based on their scores. The end points of the middle two groups mark the quartiles; the difference between these shows how scores vary in the middle.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find total frequency, e.g., 80.</span>",
        "<span>Calculate 25% (20), 50% (40), and 75% (60) values on the frequency axis.</span>",
        "<span>From each, read horizontally to the curve, then down to the data axis to estimate Q1, median, and Q3 respectively.</span>",
        "<span>Calculate IQR = Q3 - Q1 to find spread of middle 50% of data.</span>"
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
            "label": "<span>Data values are clustered in that range</span>",
            "isCorrect": true,
            "explanation": "<span>A steep curve means many data points fall within a small range, showing clustering.</span>"
          },
          {
            "id": "b",
            "label": "<span>Data values are spread out over a wide range</span>",
            "isCorrect": false,
            "explanation": "<span>A flat section indicates spread data, not a steep section.</span>"
          },
          {
            "id": "c",
            "label": "<span>The total frequency at that point</span>",
            "isCorrect": false,
            "explanation": "<span>The steepness describes data clustering, not total frequency.</span>"
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Knowledge Check: Fill in the Blank",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The median is found at <span class=\"font-semibold\">_____</span> percent of the total frequency.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "25",
                "label": "25",
                "isCorrect": false,
                "feedback": "<span>Incorrect. 25% is the lower quartile (Q1).</span>"
              },
              {
                "value": "50",
                "label": "50",
                "isCorrect": true,
                "feedback": "<span>Correct! The median corresponds to 50% of the total frequency.</span>"
              },
              {
                "value": "75",
                "label": "75",
                "isCorrect": false,
                "feedback": "<span>Incorrect. 75% is the upper quartile (Q3).</span>"
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
      "prompt": "<span>Use a cumulative frequency graph to estimate the number of data values below 45 and above 65, compare two distributions' medians and IQRs, and explain what these comparisons reveal about the data.</span>",
      "hint": "<span>Remember to read the cumulative frequency at the threshold values, calculate differences from totals, and estimate quartiles from the 25%, 50%, and 75% cumulative frequencies.</span>",
      "mustHaveKeywords": ["threshold", "median", "interquartile range", "compare", "distribution"],
      "optionalKeywords": ["spread", "consistency", "steep curve", "flattened section"],
      "modelAnswer": "<span>First, identify the cumulative frequency values at 45 and 65. The frequency below 45 is read directly from the graph. The frequency above 65 is total frequency minus the cumulative frequency at 65. Next, find the median (50%), lower quartile (25%), and upper quartile (75%) for both distributions by reading the graph at these percentages. Calculate the IQR by subtracting Q1 from Q3. By comparing the medians, we see which distribution generally has higher data values. Comparing IQRs shows which distribution has more spread or consistency. Steeper parts of the curve indicate data clustering. This comparison helps interpret differences between the two data sets.</span>",
      "scaffoldPrompts": [
        "<span>Identify total frequency from the graph.</span>",
        "<span>Read cumulative frequencies at 45 and 65.</span>",
        "<span>Calculate frequencies above and below these thresholds.</span>",
        "<span>Find 25%, 50%, 75% cumulative frequencies and estimate quartiles.</span>",
        "<span>Calculate IQRs and compare medians.</span>",
        "<span>Explain what differences in medians and IQRs indicate about data distributions.</span>"
      ]
    }
  }
};