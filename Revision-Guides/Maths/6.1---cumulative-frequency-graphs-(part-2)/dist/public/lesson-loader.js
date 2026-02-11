window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Using cumulative frequency graphs to find median, quartiles, IQR, interpret data and compare distributions",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Finding the Median from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>median</strong> is the middle value of a data set. To find the median using a cumulative frequency graph, first find half of the total frequency (n/2) on the y-axis. Then read horizontally across to the cumulative frequency curve, and from that point, read down vertically to the x-axis. This x-value gives an estimate for the median.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a line of people sorted by height. The median is the height of the person standing exactly in the middle of the line. The cumulative frequency graph helps you find that middle point without knowing each person's exact height.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the total frequency from the graph, for example 40.</span>",
        "<span>Calculate n/2 = 20, then locate 20 on the cumulative frequency (y) axis.</span>",
        "<span>Move horizontally from 20 to the curve, then down vertically to the x-axis.</span>",
        "<span>Read off the x-value, such as 15, as the estimated median.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Finding Quartiles from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles divide the data into four equal parts. To find the <em>lower quartile (Q1)</em>, find a quarter of the total frequency (n/4) on the y-axis, then follow the same process as for the median to find the corresponding x-value. To find the <em>upper quartile (Q3)</em>, find three quarters (3n/4) on the y-axis and repeat.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of slicing a pizza into four equal slices using the cumulative frequency graph to find the 'slices' that divide the data into quarters.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 40. Calculate n/4 = 10 and 3n/4 = 30.</span>",
        "<span>Locate 10 on the y-axis, read across to the curve, then down to the x-axis to find Q1.</span>",
        "<span>Locate 30 on the y-axis, repeat to find Q3.</span>",
        "<span>The values found are estimates of Q1 and Q3.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>interquartile range (IQR)</strong> measures the spread of the middle 50% of data. It is calculated by subtracting the lower quartile (Q1) from the upper quartile (Q3), so <em>IQR = Q3 - Q1</em>. This shows how spread out the middle half of the values are.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you think of the quartiles as the edges of the middle half of your data 'group', the IQR tells you how wide that group is.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify Q3 and Q1 values from the graph, for example Q3 = 20 and Q1 = 10.</span>",
        "<span>Calculate IQR = Q3 - Q1 = 20 - 10 = 10.</span>",
        "<span>This means the middle 50% of data values spread over 10 units.</span>"
      ]
    }
  },
  "step4": {
    "title": "Using Cumulative Frequency Graphs to Estimate Data Counts Below or Above Thresholds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use cumulative frequency graphs to estimate how many data values fall below or above a certain threshold. To find how many values are <em>below</em> a threshold, locate the threshold value on the x-axis, move up to the curve, then read the cumulative frequency on the y-axis. To find how many are <em>above</em> the threshold, subtract this number from the total frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like checking how many students scored below a certain mark on a test by looking at cumulative results up to that mark.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 50. Find how many scored below 18.</span>",
        "<span>Locate 18 on the x-axis, read up to the curve, then across to y-axis: say it’s 35.</span>",
        "<span>So 35 people scored below 18, and 50 - 35 = 15 scored above 18.</span>"
      ]
    }
  },
  "step5": {
    "title": "Comparing Distributions Using Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By comparing cumulative frequency graphs of two or more data sets, you can compare medians, quartiles, and spreads. A curve shifted further right indicates generally higher values. Steeper sections of the curve indicate more data packed into a small range.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine comparing heights of two classes by looking at their cumulative height distributions; you can tell which class tends to be taller and how variable their heights are.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at the median points of two cumulative frequency curves: one at 14, another at 17.</span>",
        "<span>The group with median 17 tends to have higher values.</span>",
        "<span>Compare IQRs by measuring the difference between Q3 and Q1 for each curve; a smaller IQR means less variation.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph for two classes' test scores is shown. The total scores for each class are 40. Use the graph to find the median, quartiles, and interquartile range for Class A. Then estimate how many students scored below 12 for Class A. Finally, explain which class performed better overall, using the graphs.</span>",
      "hint": "Remember to find n/2, n/4, and 3n/4 on the y-axis for medians and quartiles, and use the total to estimate numbers below thresholds. Compare median and spread to decide which class did better.",
      "mustHaveKeywords": ["n/2", "median", "quartiles", "IQR", "estimate", "compare distributions"],
      "optionalKeywords": ["threshold", "data values", "spread"],
      "modelAnswer": "<span>First calculate n/2 = 20, n/4 = 10, 3n/4 = 30 from total 40. Use the graph to find the x-values for these y-values to estimate median, Q1, and Q3. Then calculate IQR = Q3 - Q1. To estimate how many scored below 12, find 12 on x-axis, then read y-value on curve for Class A. Subtract from total to find frequency above 12. Comparing medians and IQRs of Class A and Class B graphs, decide which class generally scored higher and the variability in their scores.</span>",
      "scaffoldPrompts": ["Find total frequency and calculate n/2, n/4, 3n/4", "Use graph to estimate median, Q1, Q3", "Calculate IQR", "Find cumulative frequency at value 12", "Compute how many scored above 12", "Compare medians and IQRs for both classes"]
    }
  }
};