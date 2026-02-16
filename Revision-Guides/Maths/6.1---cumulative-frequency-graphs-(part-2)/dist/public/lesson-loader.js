window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Learn to use and interpret cumulative frequency graphs to estimate medians, quartiles, interquartile range, and compare distributions.",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "keyFormulas": [
    "Median = value at n/2 on cumulative frequency graph",
    "Lower Quartile (Q1) = value at n/4 on cumulative frequency graph",
    "Upper Quartile (Q3) = value at 3n/4 on cumulative frequency graph",
    "Interquartile Range (IQR) = Q3 - Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='320' height='220' fill='#f9fafb' stroke='#222' stroke-width='1.5'/><polyline fill='none' stroke='#007acc' stroke-width='2' points='40,250 90,220 130,180 170,140 220,100 270,80 360,50'/><line x1='185' y1='30' x2='185' y2='250' stroke='#ff4d4d' stroke-dasharray='4 4' /><line x1='40' y1='135' x2='360' y2='135' stroke='#ff4d4d' stroke-dasharray='4 4' /><text x='185' y='270' font-family='sans-serif' font-size='12' fill='#333' text-anchor='middle'>n/2 (Median)</text><text x='10' y='135' font-family='sans-serif' font-size='12' fill='#333' text-anchor='end'>n/4 (Q1)</text><text x='10' y='80' font-family='sans-serif' font-size='12' fill='#333' text-anchor='end'>3n/4 (Q3)</text></svg>",
  "step1": {
    "title": "Concept: Finding the Median from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>median</strong> of a data set is the middle value when the data is ordered. On a cumulative frequency graph, you find the median by locating <em>half</em> the total number of data points (n/2) on the y-axis, then reading across to the curve, and dropping down to the x-axis to find the median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a queue of people sorted by height. To find the median height, you find the person exactly in the middle of the line. The cumulative frequency graph helps by showing how many people are at or below each height.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating the Median",
      "problem": "The cumulative frequency graph for the heights of 40 students is shown. Estimate the median height.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is half of the total number of students (40)?",
          "answer": "20",
          "feedback": "Correct! Half of 40 is 20."
        },
        {
          "id": "q2",
          "prompt": "Using the y-axis, find the height corresponding to cumulative frequency 20 by reading across to the curve and then down to the x-axis.",
          "answer": "Enter the estimated height value based on the graph (e.g., 160)",
          "feedback": "Great! That height corresponds to the median."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Finding Quartiles from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles split data into four equal parts. The <strong>lower quartile</strong> (Q1) is the value at n/4, while the <strong>upper quartile</strong> (Q3) is at 3n/4 on the cumulative frequency graph. Read these points by finding values on the y-axis then projecting onto the curve and down to the x-axis.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If splitting a pizza into four equal slices, the first slice ends at Q1, and the third slice ends at Q3. On the graph, these mark the limits for the middle 50% of data.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating Quartiles",
      "problem": "Given 40 data points, estimate Q1 and Q3 from the cumulative frequency graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is one quarter (n/4) of 40?",
          "answer": "10",
          "feedback": "Correct! n/4 is 10."
        },
        {
          "id": "q2",
          "prompt": "Estimate the value on the x-axis corresponding to a cumulative frequency of 10 by reading the graph.",
          "answer": "Enter estimated Q1 value (e.g., 140)",
          "feedback": "Well done! This is your Q1 estimate."
        },
        {
          "id": "q3",
          "prompt": "What is three quarters (3n/4) of 40?",
          "answer": "30",
          "feedback": "Correct! 3n/4 equals 30."
        },
        {
          "id": "q4",
          "prompt": "Estimate the value on the x-axis corresponding to a cumulative frequency of 30 from the graph.",
          "answer": "Enter estimated Q3 value (e.g., 170)",
          "feedback": "Great! This is your Q3 estimate."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Interquartile Range (IQR)</strong> measures the spread of the middle 50% of the data. It is found by subtracting the lower quartile from the upper quartile: <em>IQR = Q3 - Q1</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the IQR as the width of a fence around the middle section of a garden. It shows how wide the main part of the data is, ignoring extreme values.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the IQR",
      "problem": "Using your previous Q1 and Q3 estimates, calculate the IQR.",
      "questions": [
        {
          "id": "q1",
          "prompt": "If Q1 is 140 and Q3 is 170, what is Q3 - Q1?",
          "answer": "30",
          "feedback": "Correct! 170 minus 140 equals 30."
        }
      ]
    }
  },
  "step4": {
    "title": "Using Cumulative Frequency Graphs to Find Data Below or Above Thresholds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use the graph to find how many data points fall below or above any value. Find the value on the x-axis, read vertically to the curve, and then horizontally to the y-axis for frequency.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Data Below a Threshold",
      "problem": "How many students are shorter than 150 cm?",
      "questions": [
        {
          "id": "q1",
          "prompt": "On the x-axis at 150 cm, read vertically to the graph line.",
          "answer": "Student types in whether they see the curve and read the y-axis value.",
          "feedback": "Once you reach the curve at this point, read horizontally to the y-axis to find the number below 150 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the cumulative frequency corresponding to 150 cm?",
          "answer": "Enter estimated cumulative frequency (e.g., 12)",
          "feedback": "Correct, this means 12 students are shorter than 150 cm."
        }
      ]
    }
  },
  "step5": {
    "title": "Comparing Distributions Using Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By overlaying or comparing two cumulative frequency graphs, you can compare their medians, quartiles, and spread. This helps understand which data set has higher or more varied values.</p>",
    "workedExample": {
      "title": "Worked Example: Comparing Two Cumulative Frequency Graphs",
      "problem": "Two classes have their height data plotted on cumulative frequency graphs. Which class tends to be taller? Which has more variation?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify which graph has the higher median value by comparing their medians.",
          "answer": "Class with higher median",
          "feedback": "Correct, the higher median shows generally taller students."
        },
        {
          "id": "q2",
          "prompt": "Which graph has the larger interquartile range (IQR)?",
          "answer": "Class with larger IQR",
          "feedback": "Yes! A larger IQR means more variation in heights."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Use the cumulative frequency graph of a data set with 50 data points to estimate the median, quartiles, and interquartile range. Then explain how you would find how many values are below a certain threshold and compare this data set to another using cumulative frequency graphs.</span>",
      "hint": "Remember to use n/2 for median and n/4 and 3n/4 for quartiles. To find data counts below a value, read the cumulative frequency at that value. For comparison, look at medians and IQRs of each distribution.",
      "mustHaveKeywords": ["median", "quartiles", "interquartile range", "threshold", "compare distributions"],
      "optionalKeywords": ["cumulative frequency", "estimate", "spread", "variation"],
      "modelAnswer": "<span>To estimate the median, find n/2 = 25 on the y-axis and read across to the curve, then down to the x-axis. For quartiles, find the values at n/4 = 12.5 and 3n/4 = 37.5 similarly. Calculate the interquartile range as Q3 minus Q1. To find how many values fall below a threshold, locate that value on the x-axis, then read the cumulative frequency on the y-axis. Comparing distributions involves looking at differences in medians to see which set tends to have larger values, and comparing IQRs to assess spread.</span>",
      "scaffoldPrompts": [
        "Calculate n/2, n/4, and 3n/4 for the data set",
        "Use the graph to find estimated median and quartiles",
        "Calculate IQR from quartiles",
        "Explain method to find number below a threshold value",
        "Describe how to compare two cumulative frequency graphs"
      ]
    }
  }
};