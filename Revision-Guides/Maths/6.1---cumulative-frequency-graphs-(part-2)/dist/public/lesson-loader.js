window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Learn how to find medians, quartiles, interquartile ranges, and interpret cumulative frequency graphs.",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Median from cumulative frequency graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>median</strong> is the middle value of a data set. On a cumulative frequency graph, we find it by first locating <em>half</em> of the total frequency (n/2) on the y-axis. Then, we draw a horizontal line from this point to meet the curve. From the intersection, we drop a vertical line down to the x-axis to estimate the median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a line of people ranked by height. The median would be the person standing right in the middle. Using the graph is like estimating where the middle person stands without counting each individual.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate total frequency (n).</span>",
        "<span>Find n/2 and mark this value on the cumulative frequency (y) axis.</span>",
        "<span>Draw a horizontal line from n/2 until it hits the cumulative frequency curve.</span>",
        "<span>Drop a vertical line from this point to the x-axis to find the median estimate.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Quartiles on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles divide the data into four equal parts. On a cumulative frequency graph, the <strong>lower quartile (Q1)</strong> is found at <em>n/4</em> of the total frequency, and the <strong>upper quartile (Q3)</strong> at <em>3n/4</em>. We read these values by marking these frequencies on the y-axis, drawing horizontal lines to the curve, and then dropping vertical lines to the x-axis to estimate Q1 and Q3.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of dividing a pizza into 4 equal slices. Quartiles split your data into four equal parts, just like those slices.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find total frequency n.</span>",
        "<span>Mark n/4 and 3n/4 on the y-axis.</span>",
        "<span>Draw horizontal lines from these points to the cumulative frequency curve.</span>",
        "<span>Drop vertical lines down to the x-axis to find Q1 and Q3.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>interquartile range (IQR)</strong> shows the spread of the middle 50% of data. It is found by subtracting the lower quartile from the upper quartile: <em>IQR = Q3 - Q1</em>. A larger IQR means data is more spread out in the middle, while a smaller IQR means it is more clustered.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If quartiles are slices of a cake, the IQR measures the size of the 'middle half' slice, showing how thick it is compared to the rest.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Use your graph to estimate Q1 and Q3.</span>",
        "<span>Calculate IQR by subtracting Q1 from Q3 (IQR = Q3 - Q1).</span>"
      ]
    }
  },
  "step4": {
    "title": "Using cumulative frequency graphs to find how many values fall below or above thresholds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">On a cumulative frequency graph, you can estimate how many data values fall below a certain threshold by locating that value on the x-axis, drawing a vertical line up to the curve, then reading the value on the y-axis. This y-value gives the cumulative frequency, or number of data points below that threshold. To find how many are above, subtract this number from the total frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a dam collecting water as you move along a river. The height of the water shows how many fish have swum by so far. You can check any point to see how many passed before.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the threshold on the x-axis.</span>",
        "<span>Draw a vertical line from this threshold to the cumulative frequency curve.</span>",
        "<span>Read the cumulative frequency on the y-axis.</span>",
        "<span>Subtract from total frequency to find how many data points are above the threshold.</span>"
      ]
    }
  },
  "step5": {
    "title": "Comparing distributions using cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When comparing two cumulative frequency graphs, you can assess differences in medians, quartiles, and spreads visually. A curve shifted to the right typically shows larger values. Differences in steepness tell you about data spread (steeper means more clustered, flatter means more spread out). Comparing IQRs and medians helps understand differences between data sets.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like comparing two hills: one steep and narrow, the other wide and gentle, to see which is taller and how steep their slopes are.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at medians by finding the point at n/2 on each graph and compare x-values.</span>",
        "<span>Estimate quartiles and IQRs for each distribution.</span>",
        "<span>Note which graph reaches maximum frequency faster to judge data spread.</span>",
        "<span>Use these observations to describe differences between data sets.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows the results of a class test with a total of 40 students.</span><br><span>Use the graph to estimate the median, lower quartile, upper quartile, and interquartile range.</span><br><span>Explain how you would find how many students scored less than 65, and how many scored more than 85.</span>",
      "hint": "Remember to find n/2, n/4, and 3n/4 on the y-axis to estimate median and quartiles; use vertical lines for thresholds on x-axis, then read the y-axis values.",
      "mustHaveKeywords": [
        "median",
        "quartiles",
        "interquartile range",
        "cumulative frequency",
        "threshold",
        "estimate"
      ],
      "optionalKeywords": [
        "n/2",
        "n/4",
        "3n/4"
      ],
      "modelAnswer": "<span>First, find the total frequency, n = 40 students.</span> <span>To estimate the median, find n/2 = 20 on the y-axis, draw a horizontal line to the curve, then drop vertically to x-axis to find the median score.</span> <span>Similarly, find n/4 = 10 and 3n/4 = 30 on the y-axis to find the lower quartile and upper quartile respectively.</span> <span>The interquartile range is calculated by subtracting the lower quartile from the upper quartile (IQR = Q3 - Q1).</span> <span>To find how many students scored less than 65, locate 65 on the x-axis, draw a vertical line up to the curve, then horizontally read off the cumulative frequency on the y-axis.</span> <span>Subtract this value from total frequency to find how many scored more than 85 by using the same steps for 85 as threshold.</span>",
      "scaffoldPrompts": [
        "Identify total frequency from the graph.",
        "Mark n/2 on the y-axis to find the median.",
        "Find n/4 and 3n/4 on the y-axis to find quartiles.",
        "Calculate IQR by subtracting Q1 from Q3.",
        "For thresholds, mark the score on the x-axis, then find the cumulative frequency.",
        "Subtract from total frequency to find counts above the threshold."
      ]
    }
  }
};