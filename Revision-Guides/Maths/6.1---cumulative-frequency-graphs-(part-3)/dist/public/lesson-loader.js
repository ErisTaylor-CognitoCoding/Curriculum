window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)",
  "strapline": "Using cumulative frequency graphs to find thresholds, compare distributions, and estimate median and quartiles",
  "learningObjectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "step1": {
    "title": "Concept: Threshold values on cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A threshold is a specific value on the horizontal axis of a cumulative frequency graph. By reading vertically up from this value to the curve, and then horizontally to the vertical axis, we can find how many data points are less than or equal to this threshold. To find how many data points are above it, subtract this cumulative frequency from the total frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a line of people waiting to enter a concert. The threshold is like asking how many people have a ticket numbered less than or equal to a certain number. Counting everyone ahead of that ticket number gives you the 'below the threshold' count, while the rest are above.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the threshold value, for example 30.</span>",
        "<span>Go up vertically from 30 to the curve on the cumulative frequency graph.</span>",
        "<span>From that point on the curve, read horizontally to the vertical cumulative frequency axis.</span>",
        "<span>Read and note the cumulative frequency value, say 45.</span>",
        "<span>If the total frequency is 70, the number of data points above 30 is 70 - 45 = 25.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If the cumulative frequency at threshold 40 is 60 and total frequency is 80, how many data points are above 40?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>20</span>",
            "isCorrect": true,
            "explanation": "<span>60 data points are below or equal to 40, so 80 - 60 = 20 are above.</span>"
          },
          {
            "id": "b",
            "label": "<span>40</span>",
            "isCorrect": false,
            "explanation": "<span>This incorrectly assumes half the data is above 40 without calculation.</span>"
          },
          {
            "id": "c",
            "label": "<span>60</span>",
            "isCorrect": false,
            "explanation": "<span>60 represents the number below or equal to 40, not above.</span>"
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the value on the vertical axis that corresponds to a threshold value on the horizontal axis.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "cumulative frequency",
                "label": "cumulative frequency",
                "isCorrect": true,
                "feedback": "Correct! This shows how many data points fall below or equal to that threshold."
              },
              {
                "value": "median",
                "label": "median",
                "isCorrect": false,
                "feedback": "Incorrect. The median is a special percentile but here we need cumulative frequency."
              },
              {
                "value": "interquartile range",
                "label": "interquartile range",
                "isCorrect": false,
                "feedback": "Incorrect. The IQR measures spread, not a point value on the axis."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Comparing distributions using cumulative frequency graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two cumulative frequency graphs are plotted on the same axes, compare their medians, quartiles, and interquartile ranges (IQRs) to understand their differences. A higher median indicates larger central values. Steeper curves suggest data clustered closely in a range, while flatter sections mean data is spread out more widely.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two hills: a steep hill is like a steep cumulative frequency curve indicating most data points are close together, while a gentle slope represents data spread out over a wider range.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at two cumulative frequency curves on the same graph.</span>",
        "<span>Find medians by locating 50% of the total frequency on the vertical axis, then down to data values.</span>",
        "<span>Compare median locations to see which distribution tends to have higher values.</span>",
        "<span>Compare the shape to see which is steeper or flatter to judge spread.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Reading estimates from cumulative frequency curves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Estimate the median at 50% of total frequency, the lower quartile (Q1) at 25%, and the upper quartile (Q3) at 75% on the vertical axis. From these points, draw horizontal lines to the curve, then down to the data axis to find the respective values. The interquartile range (IQR) is Q3 minus Q1, showing the spread of the middle 50% of the data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine slicing a pie into quarters: Q1, median, and Q3 mark the edges of these slices, and the IQR is like the size of the middle slices together.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify total frequency, say 100.</span>",
        "<span>Mark 25, 50, and 75 on the vertical axis (for Q1, median, Q3).</span>",
        "<span>From each, draw a horizontal line to meet the curve, then drop vertically down to the data axis.</span>",
        "<span>Note the values where the lines meet the horizontal axis: these are estimates for Q1, median and Q3.</span>",
        "<span>Compute IQR = Q3 - Q1.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows a total of 120 data points. Estimate how many data values are below 45 and how many are above 45. Then compare two cumulative frequency graphs on the same axes, explaining which distribution has a higher median and a larger spread. Finally, estimate the median, quartiles, and interquartile range from one cumulative frequency curve.</span>",
      "hint": "<span>Remember to find cumulative frequency at 45, subtract from total for above count; locate median at 50% frequency for comparing medians; estimate Q1 and Q3 for interquartile range.</span>",
      "mustHaveKeywords": ["cumulative frequency", "threshold", "median", "quartiles", "interquartile range", "compare distributions"],
      "optionalKeywords": ["curve steepness", "spread", "data clustered"],
      "modelAnswer": "<span>To find the number below 45, read the cumulative frequency at 45 from the graph. Subtract this value from 120 to get how many values are above 45. When comparing two distributions on the same graph, note the median location by finding 60 (50% of 120) on the vertical axis and drawing across to each curve, then down to data values; the higher median means generally larger data values. Also compare the spread by noting the width between Q1 and Q3; a larger IQR means more spread. For one curve, estimate median, Q1, and Q3 by drawing horizontal lines from 25%, 50%, and 75% of total frequency to the curve and then down to the axis, subtract Q1 from Q3 to find IQR.</span>",
      "scaffoldPrompts": [
        "<span>Step 1: Identify cumulative frequency at 45 on the graph.</span>",
        "<span>Step 2: Calculate how many values are above 45.</span>",
        "<span>Step 3: Locate 60 (50% of total) on vertical axis to find median for each distribution.</span>",
        "<span>Step 4: Compare median values and curve steepness for spread.</span>",
        "<span>Step 5: Draw lines for Q1 (30), median (60), and Q3 (90) on the graph to find estimates.</span>",
        "<span>Step 6: Calculate IQR as Q3 minus Q1.</span>"
      ]
    }
  }
};