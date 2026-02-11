window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Using cumulative frequency graphs to estimate median, quartiles, and compare distributions",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Median from cumulative frequency graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of an ordered data set. On a cumulative frequency graph, the total frequency (n) is the highest cumulative frequency. To find the median, locate <em>n/2</em> on the y-axis, then read horizontally to the cumulative frequency curve, and drop down vertically to the x-axis to estimate the median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine lining up students by height and finding the person in the middle. The cumulative frequency graph helps us find that middle person by counting halfway along the line.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 40, so half is 20.</span>",
        "<span>Mark 20 on the cumulative frequency (y) axis.</span>",
        "<span>Draw a horizontal line from 20 to the curve.</span>",
        "<span>From the curve, drop down a vertical line to the x-axis.</span>",
        "<span>This value on the x-axis is the estimated median.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Quartiles from cumulative frequency graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles divide the data into four equal parts. The lower quartile (Q1) is found by locating <em>n/4</em> on the y-axis and reading across to the curve, then down to the x-axis. The upper quartile (Q3) is found similarly at <em>3n/4</em>. These quartiles help us understand the spread of the data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like cutting a cake into four equal slices. Q1 and Q3 mark where the first and third cuts are, splitting the data into four parts.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 40, so Q1 is at 10 and Q3 at 30 on the y-axis.</span>",
        "<span>Draw horizontal lines at 10 and 30 to the curve.</span>",
        "<span>Drop vertical lines from the curve to the x-axis at these points.</span>",
        "<span>Read off the x-axis to get estimates for Q1 and Q3.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The interquartile range measures the spread of the middle 50% of the data and is found by subtracting the lower quartile (Q1) from the upper quartile (Q3): <em>IQR = Q3 - Q1</em>. This tells us how spread out the central portion of the data is.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the IQR as measuring the width of the middle half of the data, like measuring just the middle stretch of a running track.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If Q1 is 15 and Q3 is 35, then IQR = 35 - 15 = 20.</span>",
        "<span>This means the middle 50% of data spans 20 units on the x-axis.</span>"
      ]
    }
  },
  "step4": {
    "title": "Interpretation: Finding frequencies above or below thresholds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using cumulative frequency graphs, we can find how many data values fall below or above a certain value by reading the cumulative frequency at that point. Values below a threshold correspond to the cumulative frequency directly; values above are found by subtracting this number from the total frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like counting how many students scored below 60 on a test by looking at the cumulative count at 60, and those above 60 by subtracting from the total number of students.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 50.</span>",
        "<span>Cumulative frequency at 70 on x-axis is 35.</span>",
        "<span>This means 35 data values are ≤ 70.</span>",
        "<span>Number of data values above 70 is 50 - 35 = 15.</span>"
      ]
    }
  },
  "step5": {
    "title": "Comparison: Using cumulative frequency graphs to compare distributions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By comparing the medians, quartiles, and interquartile ranges from cumulative frequency graphs of two or more sets of data, we can understand differences in location, spread, and shape. Shifts to the right indicate larger values, and differences in slope indicate spread.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like comparing the height distributions of two classes by looking at their cumulative frequency graphs to see which class is generally taller or has more variation in heights.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Graph A’s median is at 40, Graph B’s median is at 50—Graph B tends to have higher values.</span>",
        "<span>Graph A’s IQR is 15, Graph B’s IQR is 25—Graph B has a wider spread in the middle 50% of data.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows the distribution of test scores for a group of 80 students. Use the graph to estimate the median, lower quartile, and upper quartile. Then calculate the interquartile range and describe what this tells you about the spread of the middle 50% of scores.</span>",
      "hint": "Remember to find n/4, n/2, and 3n/4 on the y-axis, read across to the curve, and then down to the x-axis to estimate quartiles and median.",
      "mustHaveKeywords": ["median", "lower quartile", "upper quartile", "interquartile range", "spread", "middle 50%"],
      "optionalKeywords": ["cumulative frequency graph", "estimate", "data distribution"],
      "modelAnswer": "<span>First, find n = 80. Then calculate n/4 = 20, n/2 = 40, and 3n/4 = 60. From the cumulative frequency graph, estimate the values on the x-axis corresponding to these frequencies: the lower quartile (Q1) at 20, the median at 40, and the upper quartile (Q3) at 60. Then calculate the interquartile range as IQR = Q3 - Q1. This tells us the spread of the middle 50% of scores—how concentrated or spread out they are.</span>",
      "scaffoldPrompts": [
        "Find the total frequency and calculate n/4, n/2, 3n/4.",
        "Locate these frequencies on the cumulative frequency (y) axis.",
        "For each, read horizontally to the curve and drop down to the x-axis.",
        "Record the corresponding x-values as Q1, median, and Q3.",
        "Calculate IQR = Q3 - Q1 and interpret the value."
      ]
    }
  }
};