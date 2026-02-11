window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Using cumulative frequency graphs to estimate medians, quartiles, and compare data distributions",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Median from cumulative frequency graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median represents the middle value of a dataset. On a cumulative frequency graph, start by finding half the total frequency, n/2. From this point on the vertical axis, draw a horizontal line to the curve, then drop vertically down to the x-axis. The x-value you reach is the median estimate.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of lining up students by height. The median is like picking the student standing exactly in the middle of the line. The cumulative frequency graph helps you find that middle person by counting half the group.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate the total frequency, e.g., 40 students.</span>",
        "<span>Find half the total: 40 / 2 = 20.</span>",
        "<span>On the vertical axis of the cumulative frequency graph, locate 20.</span>",
        "<span>Draw a horizontal line from 20 to meet the cumulative frequency curve.</span>",
        "<span>Drop a vertical line from that point to the horizontal axis to find the median value.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Quartiles from cumulative frequency graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles split data into four equal parts. The lower quartile (Q1) is found at one quarter (n/4) of the total frequency, and the upper quartile (Q3) is found at three quarters (3n/4) of the total frequency. These values can be read off by locating these frequencies on the y-axis and finding corresponding x-values on the curve.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine slicing a cake into four equal slices. Each slice represents a quarter of the total. Finding Q1 and Q3 is like locating the edges of those slices along the cake.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 40, so find n/4 = 10 and 3n/4 = 30.</span>",
        "<span>Locate 10 on the vertical axis and draw a horizontal line to the cumulative frequency curve, then drop down to the x-axis to find Q1.</span>",
        "<span>Repeat for 30 to find Q3 in the same way.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The interquartile range measures the spread of the middle 50% of data. It is calculated as the difference between the upper quartile and the lower quartile: IQR = Q3 - Q1. This tells how spread out the central half of the values are.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you think about the cake slices again, the IQR tells you how thick the middle two slices are compared to the whole cake.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>After finding Q1 = 12 and Q3 = 18 from the graph, calculate IQR = 18 - 12 = 6.</span>",
        "<span>This means the middle 50% of data spans a range of 6 units.</span>"
      ]
    }
  },
  "step4": {
    "title": "Interpreting cumulative frequency graphs to find data counts below or above a threshold",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use the cumulative frequency graph to find out how many data values fall below or above a certain x-value (threshold). For below, find the point on the x-axis, draw a vertical line up to the curve, then across to the y-axis to read the cumulative frequency. For above, subtract that value from the total frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like checking how many students are shorter than a certain height; the graph shows how many have reached that height or less.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>On the graph, find x = 15.</span>",
        "<span>Draw a vertical line up to the curve, then horizontal to y-axis; suppose this reads 25.</span>",
        "<span>If total frequency is 40, values above 15 are 40 - 25 = 15.</span>"
      ]
    }
  },
  "step5": {
    "title": "Comparing distributions using cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By comparing two cumulative frequency graphs on the same axes, you can see differences in medians, quartiles, and IQRs, revealing how the sets of data differ in spread and center. Steeper curves indicate less spread, while curves farther to the right indicate larger values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Comparing two lines on hill climbs shows which slope is steeper and which side reaches higher points first, similar to comparing distributions.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Overlay two cumulative frequency curves for test scores from different classes.</span>",
        "<span>Note which graph has a higher median point (rightmost at half frequency) to tell which class scored higher overall.</span>",
        "<span>Look at the steepness of the curves to compare spread of scores.</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the interquartile range (IQR) represent on a cumulative frequency graph?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The difference between the upper quartile (Q3) and lower quartile (Q1)</span>",
            "isCorrect": true,
            "explanation": "<span>The IQR measures the spread of the middle 50% of the data, calculated as Q3 minus Q1.</span>"
          },
          {
            "id": "b",
            "label": "<span>The middle value of the entire data set</span>",
            "isCorrect": false,
            "explanation": "<span>This describes the median, not the IQR.</span>"
          },
          {
            "id": "c",
            "label": "<span>The total number of data points below the median</span>",
            "isCorrect": false,
            "explanation": "<span>The IQR is a range between quartiles, not a count of points.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is found by locating half the total frequency on the vertical axis then reading across to the curve on a cumulative frequency graph.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "Median",
                "isCorrect": true,
                "feedback": "<span>Correct! The median is located this way.</span>"
              },
              {
                "value": "mean",
                "label": "Mean",
                "isCorrect": false,
                "feedback": "<span>Incorrect. The mean is not found directly from a cumulative frequency graph.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The lower quartile (Q1) corresponds to data value at <span class=\"font-semibold\">_____</span> of the total frequency on a cumulative frequency graph.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "one quarter",
                "label": "One quarter (n/4)",
                "isCorrect": true,
                "feedback": "<span>Yes! Q1 is at a quarter of the total frequency.</span>"
              },
              {
                "value": "half",
                "label": "Half (n/2)",
                "isCorrect": false,
                "feedback": "<span>No, half the total frequency corresponds to the median, not Q1.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Using cumulative frequency graphs to determine data counts",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find how many data points fall below a certain value, draw a vertical line up from that value on the x-axis to the curve, then across to the y-axis to read the cumulative frequency. To find data points above, subtract this cumulative frequency from the total number of data points.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Data has total frequency 50. Check how many scores are below 30.</span>",
        "<span>Draw vertical line at x = 30 up to curve; horizontal line to y-axis reads 35.</span>",
        "<span>Therefore, 35 data points are below 30, and 50 - 35 = 15 points are above 30.</span>"
      ]
    }
  },
  "step9": {
    "title": "Comparing two distributions from cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency graphs are plotted on the same axes, you can compare their medians by looking at the x-value corresponding to half the total frequency on the vertical axis for each graph. Differences in steepness show variation in spread — a steeper increase indicates less spread.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Two graphs represent test scores from Class A and Class B.</span>",
        "<span>Class A's median is at 70, Class B's at 75 — Class B scored higher overall.</span>",
        "<span>Class A's curve is steeper, meaning scores are less spread than Class B's.</span>"
      ]
    }
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Using a cumulative frequency graph, explain how you would estimate the median, the lower quartile, and the interquartile range. Also describe how you would find the number of data values above a given threshold.</span>",
      "hint": "Remember to find key fractions of the total frequency (n/2, n/4, 3n/4) and use them to read from the vertical axis across the graph.",
      "mustHaveKeywords": ["median", "lower quartile", "interquartile range", "cumulative frequency", "threshold"],
      "optionalKeywords": ["n/2", "n/4", "3n/4", "vertical axis", "horizontal axis", "subtract"],
      "modelAnswer": "<span>First, find the total frequency (n). To estimate the median, locate n/2 on the vertical (cumulative frequency) axis, draw a horizontal line to the curve, then drop down vertically to the horizontal axis to find the median value. For the lower quartile (Q1), locate n/4 on the vertical axis and proceed the same way. To find the interquartile range (IQR), estimate the upper quartile (Q3) at 3n/4 and calculate IQR = Q3 - Q1. To find how many data values are above a threshold, locate the threshold on the horizontal axis, draw a vertical line up to the curve, read the corresponding frequency on the vertical axis, then subtract this from the total frequency.</span>",
      "scaffoldPrompts": [
        "Step 1: Identify total frequency and calculate n/2, n/4, and 3n/4.",
        "Step 2: Use these to find median, Q1, and Q3 on the graph.",
        "Step 3: Calculate IQR by subtracting Q1 from Q3.",
        "Step 4: Use the graph to find frequency below the threshold, then subtract from total to find above threshold count."
      ]
    }
  }
};