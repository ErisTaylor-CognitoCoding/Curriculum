window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Using cumulative frequency graphs to estimate medians, quartiles, interpret data, and compare distributions",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept 1: Median from cumulative frequency graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>median</strong> is the middle value of a data set, dividing it into two equal halves. On a cumulative frequency graph, find half of the total frequency (n/2) on the y-axis (vertical axis). From this point, draw a horizontal line to the curve, then drop vertically down to the x-axis (horizontal axis). The x-value where this line ends is the estimated median.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a queue of people sorted by height. The median height is the height of the person standing exactly in the middle of the queue when counting from shortest to tallest.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate total frequency (e.g., 40).</span>",
        "<span>Find half of total frequency: 40 ÷ 2 = 20.</span>",
        "<span>Find 20 on the y-axis of the cumulative frequency graph.</span>",
        "<span>Draw a horizontal line from 20 to the curve, then vertically down to the x-axis.</span>",
        "<span>Read the corresponding x-value on the axis; that is the median.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Quartiles from cumulative frequency graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles split data into four equal parts. The <strong>lower quartile (Q1)</strong> corresponds to one quarter (n/4) of the total frequency while the <strong>upper quartile (Q3)</strong> corresponds to three quarters (3n/4). To find Q1 and Q3, locate n/4 and 3n/4 on the y-axis, draw horizontal lines to the curve, then drop vertically to the x-axis to read estimated values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of slicing a pizza into 4 equal slices; each slice represents a quartile of the whole pizza size.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 40; calculate n/4 = 10 and 3n/4 = 30.</span>",
        "<span>Find 10 and 30 on the y-axis of the cumulative frequency graph.</span>",
        "<span>Draw horizontal lines from these points to the curve and drop down vertically to the x-axis.</span>",
        "<span>Read off the x-values to estimate Q1 and Q3.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>interquartile range (IQR)</strong> measures the spread of the middle 50% of the data. It is found by subtracting the lower quartile (Q1) from the upper quartile (Q3). Formula: IQR = Q3 − Q1. A large IQR indicates more spread in the central data, while a small IQR shows the data is more clustered.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a marathon runner notes the times of the middle group finishing the race, the difference between the fastest and slowest in this middle group is like the IQR.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>From previous step, found Q1 at 12 km and Q3 at 20 km.</span>",
        "<span>Calculate IQR: 20 − 12 = 8 km.</span>",
        "<span>This means the middle 50% of runners finished between 12 km and 20 km.</span>"
      ]
    }
  },
  "step4": {
    "title": "Using cumulative frequency graphs to find data counts above or below thresholds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use a cumulative frequency graph to determine how many data points fall below or above a particular value. To find how many data values are below a threshold, read the cumulative frequency at that x-value. To find data values above a threshold, subtract this cumulative frequency from the total frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine counting how many students scored below 70 marks by looking at the cumulative count up to 70. The rest are those who scored above 70.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total data points = 50.</span>",
        "<span>At x = 60, cumulative frequency is 30.</span>",
        "<span>Number below 60 is 30.</span>",
        "<span>Number above 60 = 50 − 30 = 20.</span>"
      ]
    }
  },
  "step5": {
    "title": "Comparing distributions using cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency graphs can be used to compare two or more data distributions. Comparing medians shows which has higher typical values. Comparing IQRs shows which distribution has more spread or variability. Shape differences (e.g., steepness) indicate differences in data concentration.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Comparing two race results to see whose times cluster more tightly or who finishes generally faster.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Graph A has median at 15 and IQR 6.</span>",
        "<span>Graph B has median at 18 and IQR 10.</span>",
        "<span>Graph B tends to have higher values and more spread.</span>",
        "<span>This means Graph A’s data is more consistent and lower overall.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows data for test scores of 80 students. The total frequency is 80. Using the graph, estimate the median and the quartiles, then calculate the interquartile range. Finally, explain how you can find how many students scored above 70 marks using the graph.</span>",
      "hint": "<span>Remember to find n/2, n/4, and 3n/4 on the cumulative frequency axis to estimate median and quartiles. Use subtraction for counts above a value.</span>",
      "mustHaveKeywords": ["median", "quartiles", "interquartile range", "estimate", "cumulative frequency", "above threshold"],
      "optionalKeywords": ["n/2", "n/4", "3n/4", "subtract", "data values"],
      "modelAnswer": "<span>First, find the total frequency n = 80. Calculate n/2 = 40 for median, n/4 = 20 for Q1, and 3n/4 = 60 for Q3. Use the graph to find the x-values corresponding to these cumulative frequencies by drawing horizontal lines to the curve and dropping down to the x-axis. These x-values estimate the median and quartiles. Calculate IQR = Q3 − Q1. To find how many students scored above 70, locate 70 on the x-axis, read the cumulative frequency at 70, then subtract from the total frequency: Students above 70 = 80 − (cumulative frequency at 70).</span>",
      "scaffoldPrompts": [
        "Find total frequency and calculate n/2, n/4, 3n/4",
        "Use the graph to estimate median and quartiles",
        "Calculate IQR by subtracting Q1 from Q3",
        "Locate 70 on x-axis and find cumulative frequency at 70",
        "Subtract cumulative frequency at 70 from total frequency"
      ]
    }
  }
};