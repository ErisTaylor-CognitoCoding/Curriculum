window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Learn how to use cumulative frequency graphs to estimate medians, quartiles, interquartile range, interpret data thresholds, and compare distributions.",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "keyFormulas": [
    "Median estimate from graph: Locate n/2 on y-axis, read across to curve, then down to x-axis",
    "Lower quartile (Q1): Locate n/4 on y-axis, read across to curve, then down to x-axis",
    "Upper quartile (Q3): Locate 3n/4 on y-axis, read across to curve, then down to x-axis",
    "Interquartile range (IQR): IQR = Q3 - Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><polyline points='60,220 120,190 180,150 240,120 300,90 350,70' stroke='#0074D9' stroke-width='3' fill='none'/><line x1='195' y1='50' x2='195' y2='250' stroke='#FF4136' stroke-dasharray='4'/><line x1='50' y1='135' x2='350' y2='135' stroke='#FF4136' stroke-dasharray='4'/><text x='200' y='45' font-family='sans-serif' font-size='12' fill='#FF4136' text-anchor='middle'>Median (n/2)</text><text x='45' y='135' font-family='sans-serif' font-size='12' fill='#FF4136' text-anchor='end'>n/2 frequency</text><text x='200' y='280' font-family='sans-serif' font-size='14' text-anchor='middle'>Data values</text><text x='20' y='150' font-family='sans-serif' font-size='14' transform='rotate(-90 20,150)' text-anchor='middle'>Cumulative Frequency</text></svg>",
  "step1": {
    "title": "Concept 1: Finding the Median from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value in an ordered data set. To estimate the median from a cumulative frequency graph, identify the total frequency n, then find n/2 on the y-axis. From this point, trace horizontally until you meet the curve. Then trace vertically down to the x-axis to read the median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of lining up all students by height. The median height is the height of the student in the middle of the line, just like finding the middle frequency on the graph shows the median data value.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency (n) = 40.</span>",
        "<span>Calculate n/2 = 20.</span>",
        "<span>Find 20 on y-axis, draw horizontal line to curve.</span>",
        "<span>From intersection, draw vertical line down to x-axis to read median.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Understanding Quartiles on a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles divide data into four equal parts. To estimate the lower quartile (Q1), find n/4 on the y-axis, then read across to the cumulative frequency curve and down to the x-axis. For the upper quartile (Q3), use 3n/4 on the y-axis.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you split your class into four groups by height, the heights at these group boundaries are Q1 and Q3 on the graph.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency (n) = 40.</span>",
        "<span>Find n/4 = 10 on y-axis for Q1.</span>",
        "<span>Draw horizontal line to curve, then down to x-axis for lower quartile.</span>",
        "<span>Find 3n/4 = 30 on y-axis for Q3, repeat same process.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The interquartile range (IQR) measures the spread of the middle 50% of data. Calculate it by subtracting the lower quartile (Q1) from the upper quartile (Q3). On a cumulative frequency graph, first estimate Q1 and Q3, then find IQR = Q3 - Q1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">IQR can be seen as the size of the middle group when splitting data into four parts, showing how spread out values are in the middle range.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>From graph, estimate Q1 = 15.</span>",
        "<span>Estimate Q3 = 25.</span>",
        "<span>Calculate IQR = 25 - 15 = 10.</span>"
      ]
    }
  },
  "step4": {
    "title": "Interpreting Data Values from Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency graphs allow you to find how many data values are below or above a certain value. For a value on the x-axis, read vertically up to the curve, then horizontally to the y-axis to find how many values are less than or equal to it. To find how many are above, subtract this number from the total frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If your exam scores are lined up, you can find how many students scored below a particular mark using the graph just like reading cumulative scores.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency (n) = 50.</span>",
        "<span>Find the value 30 on the x-axis.</span>",
        "<span>Draw vertical line up to curve, then horizontal to y-axis, which reads 35.</span>",
        "<span>So, 35 values are ≤ 30, and 50 - 35 = 15 are above.</span>"
      ]
    }
  },
  "step5": {
    "title": "Comparing Distributions Using Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can compare two or more data sets by plotting their cumulative frequency graphs together. Differences in median, spread (IQR), and shape give insight into how data distributions differ.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine comparing heights of boys and girls in a class using cumulative graphs to see who is generally taller and how spread out heights are.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Two cumulative frequency graphs plotted: Dataset A and Dataset B.</span>",
        "<span>Graph A has median of 20, Graph B median of 25.</span>",
        "<span>Graph A has IQR narrower than Graph B, showing less spread.</span>",
        "<span>From graphs, conclude Dataset B typically has higher and more varied values.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph for test scores shows a total of 60 students. Use the graph to estimate the median, lower quartile, upper quartile, and interquartile range. Then explain how many students scored below 40 marks and compare this distribution to another provided graph.</span>",
      "hint": "Remember to locate n/2, n/4, 3n/4 on the y-axis to find quartiles and median, and use total frequency to calculate above/below counts. For comparison, consider median and IQR differences.",
      "mustHaveKeywords": ["median", "quartiles", "interquartile range", "interpret", "compare"],
      "optionalKeywords": ["distribution", "spread", "cumulative frequency"],
      "modelAnswer": "<span>First, find the median by locating 60/2 = 30 on the y-axis, trace to the curve and down to the x-axis for the median estimate. Next, find the lower quartile by locating 60/4 = 15, and the upper quartile at 3 × 60/4 = 45, reading each from the curve. Calculate the interquartile range as Q3 − Q1. To find how many scored below 40, locate 40 on x-axis, find cumulative frequency from graph. Compare the medians and IQRs of both graphs to describe differences in typical scores and spread.</span>",
      "scaffoldPrompts": [
        "Step 1: Identify total frequency n and calculate n/2, n/4, and 3n/4.",
        "Step 2: Use cumulative frequency graph to find median and quartiles.",
        "Step 3: Calculate IQR as difference between Q3 and Q1.",
        "Step 4: Use graph to find cumulative frequency for value 40 and subtract from total for above 40.",
        "Step 5: Examine a second cumulative frequency graph to note changes in median and IQR for comparison.",
        "Step 6: Summarize comparison describing differences in center and spread of distributions."
      ]
    }
  }
};