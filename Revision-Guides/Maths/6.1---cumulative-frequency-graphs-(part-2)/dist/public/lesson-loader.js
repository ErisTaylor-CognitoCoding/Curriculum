window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Learn to estimate median, quartiles, interquartile range, interpret thresholds, and compare distributions using cumulative frequency graphs.",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "keyFormulas": [
    "Median: Read off value corresponding to n/2 from cumulative frequency curve",
    "Lower Quartile (Q1): Value at n/4 total frequency",
    "Upper Quartile (Q3): Value at 3n/4 total frequency",
    "Interquartile Range (IQR) = Q3 - Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f9f9f9' stroke='#333'/><polyline points='60,240 120,180 180,140 240,110 300,90 360,75' fill='none' stroke='#0074D9' stroke-width='3'/><line x1='50' y1='145' x2='360' y2='145' stroke='red' stroke-dasharray='5,5'/><text x='45' y='150' font-family='sans-serif' font-size='12' fill='red'>n/2</text><line x1='180' y1='240' x2='180' y2='75' stroke='red' stroke-dasharray='5,5'/><text x='180' y='265' font-family='sans-serif' font-size='12' text-anchor='middle' fill='red'>Median</text></svg>",
  "step1": {
    "title": "Concept 1: Finding the Median from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of a data set. To estimate it from a cumulative frequency graph, find half the total frequency (n/2) on the y-axis. Then read across horizontally until you meet the curve, and from that point read vertically down to the x-axis to find the median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine lining up all your classmates in order of height. The median is the height of the person standing exactly in the middle.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>The total frequency is 40, so half is 20.</span>",
        "<span>Find 20 on the y-axis and draw a line horizontally to the curve.</span>",
        "<span>From that point, draw a line vertically down to the x-axis to read the median.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Understanding Quartiles from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles divide data into four equal parts. On a cumulative frequency graph, you find the lower quartile (Q1) at one quarter of the total frequency (n/4), and the upper quartile (Q3) at three quarters (3n/4). Reading across from these points to the curve, then down to the x-axis, gives estimates for Q1 and Q3.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of dividing a chocolate bar into 4 equal pieces. Each break point corresponds to a quartile in your data.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 40.</span>",
        "<span>Calculate n/4 = 10 and 3n/4 = 30.</span>",
        "<span>Find 10 and 30 on the y-axis, then read across to the curve and down to the x-axis to find Q1 and Q3.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The interquartile range measures the spread of the middle 50% of the data. It is found by subtracting the lower quartile from the upper quartile: IQR = Q3 - Q1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine measuring how wide the middle half of a pack of cards is, ignoring the top and bottom quarters.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If Q1 is 12 and Q3 is 22, then IQR = 22 - 12 = 10.</span>",
        "<span>This means the middle 50% of data spans a range of 10 units.</span>"
      ]
    }
  },
  "step4": {
    "title": "Interpreting Thresholds from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use the graph to find how many data values lie below or above a certain threshold. For a value on the x-axis, read up to the curve, then across to the y-axis to find the cumulative frequency. This gives the count of data values less than or equal to that value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like counting how many students score less than a cutoff mark in a test.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the threshold value 15 on the x-axis.</span>",
        "<span>Go up to the curve, then across to read the cumulative frequency, say 28.</span>",
        "<span>So, 28 data values are less than or equal to 15.</span>"
      ]
    }
  },
  "step5": {
    "title": "Comparing Distributions Using Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By comparing two cumulative frequency graphs on the same axes, you can compare different data sets. Look at differences in medians, quartiles, and spread (IQR), and see which distribution has higher or lower values overall.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like comparing two runners’ times in different races to see who generally finishes faster.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Graph A has median at 14, Graph B at 18 – Graph B generally has higher values.</span>",
        "<span>Graph A’s IQR is smaller showing less spread compared to Graph B.</span>",
        "<span>This shows Graph B’s data is higher and more varied.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows the heights of 40 students. Using the graph, estimate the median, lower quartile, and upper quartile. Calculate the interquartile range. Then, explain how you would use the graph to find how many students are shorter than 150 cm, and describe how you could compare this distribution to another group of students using a second cumulative frequency graph.</span>",
      "hint": "Remember to locate n/2, n/4, and 3n/4 on the y-axis to find median and quartiles. Use the graph axes carefully to interpret values.",
      "mustHaveKeywords": ["median", "quartiles", "interquartile range", "cumulative frequency", "compare distributions"],
      "optionalKeywords": ["thresholds", "spread", "interpretation"],
      "modelAnswer": "<span>First, find half the total frequency (20) on the y-axis and read across to the curve and down to the x-axis to estimate the median. Then find 10 (n/4) and 30 (3n/4) similarly to estimate Q1 and Q3. Calculate IQR as Q3 - Q1. To find how many students are shorter than 150 cm, locate 150 cm on the x-axis, move up to the curve, then across to the y-axis to find the cumulative frequency at that height. To compare distributions, plot the second group's cumulative frequency graph on the same axes, compare their medians and quartiles, and see differences in shape and spread.</span>",
      "scaffoldPrompts": [
        "Find n/2, n/4, and 3n/4 on the y-axis.",
        "Read across to the curve and then down to the x-axis for median and quartiles.",
        "Calculate IQR by subtracting Q1 from Q3.",
        "Interpret cumulative frequency for a specific x-value to find counts below threshold.",
        "Discuss differences seen when overlaying another cumulative frequency graph."
      ]
    }
  }
};