window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Understanding and interpreting cumulative frequency graphs to analyze data distributions",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>threshold</strong> is a specific value on the horizontal axis of a cumulative frequency graph. To find how many data values fall below or equal to this threshold, read vertically from that value up to the curve, then horizontally across to the vertical axis. This tells you the cumulative frequency less than or equal to the threshold. Subtracting this number from the total frequency gives how many values are above the threshold.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine counting people standing in line to enter a movie. If the threshold is the height of a door, reading the cumulative frequency is like counting how many people are short enough to fit under it. Those who are taller are 'above' the threshold.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Locate the threshold value 60 on the horizontal axis.</span>",
        "<span>Find the point on the cumulative frequency curve above 60.</span>",
        "<span>Read horizontally across to the vertical axis to find cumulative frequency (e.g., 40).</span>",
        "<span>If total frequency is 100, then 100 - 40 = 60 values are above 60.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If a cumulative frequency graph shows that 45 data points are less than or equal to 70, and the total frequency is 90, how many data points are above 70?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>45</span>",
            "isCorrect": false,
            "explanation": "<span>This is the number below or equal to 70, not above.</span>"
          },
          {
            "id": "b",
            "label": "<span>90</span>",
            "isCorrect": false,
            "explanation": "<span>This is the total frequency, not the number above 70.</span>"
          },
          {
            "id": "c",
            "label": "<span>45</span>",
            "isCorrect": false,
            "explanation": "<span>Repeats option a, still incorrect.</span>"
          },
          {
            "id": "d",
            "label": "<span>45 (90 - 45)</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Subtract the cumulative frequency from the total to find above threshold.</span>"
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Concept: Comparing distributions using cumulative frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency graphs are plotted on the same axes, you can compare their shapes and features. The <em>median</em>, <em>quartiles</em>, and <em>interquartile ranges</em> tell us about the center and spread. A steeper curve means data values are clustered closely together within that range, while a gentler slope means data is more spread out.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two groups of runners on a track: one group runs together tightly (steep curve), while the other is more spread out (flatter curve). The distribution curve shapes reflect these group differences.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot both cumulative frequency graphs on the same grid.</span>",
        "<span>Compare their medians by finding the 50% cumulative frequency points for each.</span>",
        "<span>Look at the slope between quartiles; a steeper slope indicates less spread.</span>",
        "<span>Decide which distribution values tend to be higher or more consistent.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>Which of the following indicates a distribution with more consistent data values?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>A cumulative frequency graph with a steep slope between Q1 and Q3</span>",
            "isCorrect": true,
            "explanation": "<span>Correct. A steep slope between quartiles means less spread and more consistency.</span>"
          },
          {
            "id": "b",
            "label": "<span>A cumulative frequency graph with a flat slope between Q1 and Q3</span>",
            "isCorrect": false,
            "explanation": "<span>A flat slope indicates spread-out data values, so less consistency.</span>"
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Concept: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To estimate the median, lower quartile (Q1), and upper quartile (Q3), use the cumulative frequency scale: find 25%, 50%, and 75% of the total frequency on the vertical axis. From these points, read horizontally across to the cumulative frequency curve, then down to the horizontal axis to find the corresponding data values. The interquartile range (IQR) is calculated by subtracting Q1 from Q3 and shows the range of the middle 50% of the data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This is like marking three checkpoints on a stairway representing data accumulation: the 25%, 50%, and 75% steps, then looking sideways to see what height you reach on the survey measure.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency = 80.</span>",
        "<span>Find 25% of 80 = 20, 50% of 80 = 40, and 75% of 80 = 60 on the vertical axis.</span>",
        "<span>From these points, move horizontally to the curve, then down to the horizontal axis to estimate Q1, median, and Q3.</span>",
        "<span>Calculate IQR = Q3 - Q1 to find the central spread.</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the middle value found at 50% of the cumulative frequency.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "median",
                "isCorrect": true,
                "feedback": "<span>Correct! The median corresponds to 50% cumulative frequency.</span>"
              },
              {
                "value": "mean",
                "label": "mean",
                "isCorrect": false,
                "feedback": "<span>Incorrect, mean is the average, not from cumulative frequency graphs.</span>"
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
      "prompt": "<span>Use a cumulative frequency graph with total frequency 100 to estimate how many data values fall below 45, compare two distributions based on their cumulative frequency graphs, and estimate the median, quartiles, and interquartile range for one distribution.</span>",
      "hint": "<span>Remember to read vertically and horizontally on the graph carefully and compare medians and spreads from the curves.</span>",
      "mustHaveKeywords": ["threshold", "median", "quartiles", "interquartile range", "compare distributions"],
      "optionalKeywords": ["steeper slope", "flat slope", "total frequency", "above/below values"],
      "modelAnswer": "<span>First, locate 45 on the horizontal axis and read up to the curve to find the cumulative frequency, which gives the number below or equal to 45. Subtract this from 100 to find how many values are above 45. Then, when comparing two cumulative frequency graphs, look at their medians by finding the 50% frequency points and compare their quartiles and interquartile ranges by reading the 25% and 75% frequency points. A steeper slope indicates data are more concentrated in that range, while a flatter slope shows the data is spread out.</span>",
      "scaffoldPrompts": [
        "Locate the threshold value on the horizontal axis and find the corresponding cumulative frequency.",
        "Calculate the number of data values above the threshold by subtracting from total frequency.",
        "For comparing graphs, find and compare medians and quartiles of both distributions.",
        "Estimate the interquartile range (IQR) by subtracting Q1 from Q3."
      ]
    }
  }
};