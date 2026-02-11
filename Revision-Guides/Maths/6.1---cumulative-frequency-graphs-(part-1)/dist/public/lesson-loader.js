window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 1)",
  "strapline": "Learn to construct and interpret cumulative frequency graphs to estimate medians and analyse data distributions.",
  "learningObjectives": [
    "Students should be able to construct cumulative frequency graphs by plotting cumulative frequency against the upper class boundaries of grouped data (Maths 6.1)",
    "Students should be able to draw smooth cumulative frequency curves from plotted data (Maths 6.1)",
    "Students should be able to use cumulative frequency graphs to find estimates for the median and interpret data values above or below certain thresholds (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to a certain point. You find each cumulative frequency by adding the current frequency to the sum of all previous frequencies in the data set.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling a jar with coins every day. Each day you add coins and keep track of how many coins there are in total now — that total is like the cumulative frequency.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given frequencies: 3, 5, 2, 6</span>",
        "<span>Calculate cumulative frequencies step-by-step: Start with 3, then 3+5=8, then 8+2=10, then 10+6=16</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Upper Class Boundary",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Upper class boundaries are the highest values in each group or class interval of grouped data. When plotting cumulative frequency graphs, the cumulative frequency is plotted against these upper class boundaries to show how total frequencies accumulate over the range.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of book chapters with page numbers: the upper class boundary is like the last page number of each chapter, showing the limit of that section.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If class intervals are 0-9, 10-19, 20-29, the upper class boundaries are 9, 19, and 29 respectively.</span>",
        "<span>Plot cumulative frequency values at these upper boundaries on the graph.</span>"
      ]
    }
  },
  "step3": {
    "title": "Drawing the Cumulative Frequency Curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">After plotting cumulative frequencies against upper class boundaries, you draw a smooth cumulative frequency curve by joining the points with a smooth, often S-shaped, line rather than straight lines.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like connecting dots to form a smooth hill path, rather than walking between trees in straight lines.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot points (9, 3), (19, 8), (29,10), (39,16) on graph paper.</span>",
        "<span>Draw a smooth curve passing through these points without sharp angles.</span>"
      ]
    }
  },
  "step4": {
    "title": "Using Cumulative Frequency to Estimate the Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value in ordered data. On the cumulative frequency graph, find half the total frequency on the vertical axis, then draw a horizontal line from this point to meet the curve, drop a vertical line onto the horizontal axis to estimate the median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like finding the halfway point of a journey – you see where half the people have arrived so far to estimate the midpoint.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If total frequency is 40, half is 20, but here total is 16, so half is 8.</span>",
        "<span>Draw line at 8 cumulative frequency, meet curve at 19, median estimated as 19 on horizontal axis.</span>"
      ]
    }
  },
  "step5": {
    "title": "Interpreting data values using the cumulative frequency graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can estimate how many data values fall above or below a certain threshold by using the cumulative frequency graph. Locate the value on the horizontal axis, then check the cumulative frequency on the vertical axis to find how many data points lie below that value or subtract to find how many lie above.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like counting how many people are shorter than a certain height by looking at a chart of heights sorted from smallest to largest.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find cumulative frequency at value 29 on horizontal axis equals 10.</span>",
        "<span>Then number of data values below 29 is 10, above is total frequency 16 - 10 = 6.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A grouped frequency table shows the following class intervals and frequencies: 0-9 (4), 10-19 (7), 20-29 (5), 30-39 (4). Construct the cumulative frequency table, plot a cumulative frequency graph using upper class boundaries, draw a smooth cumulative frequency curve, and use the graph to estimate the median. Finally, estimate how many data values are less than 25.</span>",
      "hint": "Remember to sum frequencies cumulatively and plot points at the upper class boundaries: 9, 19, 29, and 39. Use half the total frequency to estimate the median from your graph.",
      "mustHaveKeywords": ["cumulative frequency", "upper class boundary", "smooth curve", "median", "estimate"],
      "optionalKeywords": ["frequency table", "plot", "interpret"],
      "modelAnswer": "<span>First, the cumulative frequencies are: 4, 11 (4+7), 16 (11+5), 20 (16+4). Plot these points at upper boundaries 9, 19, 29, 39 respectively. Draw a smooth curve through these points. Half of total frequency 20 is 10, draw a horizontal line at 10 on vertical axis meeting the curve, drop vertical line to horizontal axis to estimate median, which will be around 17. For values less than 25, find cumulative frequency at 25: between 19 and 29, estimate around 14 data values below 25.</span>",
      "scaffoldPrompts": ["Calculate cumulative frequencies first", "Plot points on graph from cumulative frequencies", "Draw smooth curve through plotted points", "Find half the total frequency for median", "Use graph to find median value", "Find cumulative frequency corresponding to 25 to answer final part"]
    }
  }
};