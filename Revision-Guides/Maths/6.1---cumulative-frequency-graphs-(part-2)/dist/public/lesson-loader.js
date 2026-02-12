window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Using cumulative frequency graphs to estimate medians, quartiles, interquartile range, interpret data distribution, and compare datasets.",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "keyFormulas": [
    "Median = value at (n/2)th cumulative frequency",
    "Lower quartile (Q1) = value at (n/4)th cumulative frequency",
    "Upper quartile (Q3) = value at (3n/4)th cumulative frequency",
    "Interquartile range (IQR) = Q3 − Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='20' width='320' height='250' fill='#f9f9f9' stroke='#444' stroke-width='2'/><line x1='40' y1='270' x2='360' y2='270' stroke='#000' stroke-width='1'/><line x1='40' y1='270' x2='40' y2='20' stroke='#000' stroke-width='1'/><polyline points='40,260 100,230 160,200 220,150 280,120 340,90' fill='none' stroke='#0a74da' stroke-width='3'/><text x='20' y='270' font-family='Arial' font-size='12'>0</text><text x='20' y='150' font-family='Arial' font-size='12'>n</text><text x='100' y='285' font-family='Arial' font-size='12'>5</text><text x='160' y='285' font-family='Arial' font-size='12'>10</text><text x='220' y='285' font-family='Arial' font-size='12'>15</text><text x='280' y='285' font-family='Arial' font-size='12'>20</text><text x='340' y='285' font-family='Arial' font-size='12'>25</text><text x='200' y='50' text-anchor='middle' font-family='Arial' font-size='14' font-weight='bold' fill='#0a74da'>Cumulative Frequency Graph</text></svg>",
  "step1": {
    "title": "Understanding the Median from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of a data set. To find it on a cumulative frequency graph, first find half the total frequency (n/2). Then from that value on the y-axis, draw a horizontal line to the curve, and from the intersection draw a vertical line down to the x-axis. That x-value is the median estimate.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine lining up all students by height. The median is the height of the student right in the middle of the line.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Median",
      "problem": "A cumulative frequency graph shows a total frequency of 40 students. Find the median value.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is half of the total frequency n/2?",
          "answer": "20",
          "feedback": "Correct. Half of 40 is 20."
        },
        {
          "id": "q2",
          "prompt": "Start at 20 on the y-axis. Are you able to reach the cumulative frequency curve? (Answer yes or no)",
          "answer": "yes",
          "feedback": "Correct. You should locate 20 on the cumulative frequency curve."
        },
        {
          "id": "q3",
          "prompt": "From the intersection, draw a line down to the x-axis. What is the estimated median value (round if needed)?",
          "answer": "12",
          "feedback": "Good job. Reading down from the curve gives a median value of approximately 12."
        }
      ]
    }
  },
  "step2": {
    "title": "Identifying Quartiles on a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles divide the data into four equal parts. The lower quartile (Q1) is at n/4 of the total frequency and the upper quartile (Q3) is at 3n/4. To find Q1 and Q3, we read along from these values on the y-axis to the curve, then down to the x-axis for estimates.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Quartiles",
      "problem": "Using the same graph with total frequency 40, find estimates for Q1 and Q3.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate n/4.",
          "answer": "10",
          "feedback": "Great. n/4 of 40 is 10."
        },
        {
          "id": "q2",
          "prompt": "Calculate 3n/4.",
          "answer": "30",
          "feedback": "Correct. 3 quarters of 40 is 30."
        },
        {
          "id": "q3",
          "prompt": "What is the estimated value of Q1 (read x-axis from curve at frequency 10)?",
          "answer": "7",
          "feedback": "Well done. The estimate from the graph is approximately 7."
        },
        {
          "id": "q4",
          "prompt": "What is the estimated value of Q3 (read x-axis from curve at frequency 30)?",
          "answer": "17",
          "feedback": "Correct. The estimate from the graph is around 17."
        }
      ]
    }
  },
  "step3": {
    "title": "Calculating Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The interquartile range measures the spread of the middle 50% of data. It is found by subtracting the lower quartile (Q1) from the upper quartile (Q3): <strong>IQR = Q3 − Q1</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Finding the IQR",
      "problem": "Using the quartiles you found (Q1 = 7 and Q3 = 17), calculate the interquartile range.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is Q3?",
          "answer": "17",
          "feedback": "Correct. Q3 is 17."
        },
        {
          "id": "q2",
          "prompt": "What is Q1?",
          "answer": "7",
          "feedback": "Correct. Q1 is 7."
        },
        {
          "id": "q3",
          "prompt": "Calculate IQR = Q3 − Q1.",
          "answer": "10",
          "feedback": "Good job. The interquartile range is 10."
        }
      ]
    }
  },
  "step4": {
    "title": "Interpreting Data Values Below or Above Thresholds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A cumulative frequency graph allows us to find how many data values fall below or above certain numbers. To find how many are below a value, read that value on the x-axis, then up to the curve and across to the y-axis. For above, subtract this cumulative frequency from the total.</p>",
    "workedExample": {
      "title": "Worked Example: Data Values Below or Above a Threshold",
      "problem": "From a cumulative frequency graph of 50 students, estimate how many students scored below 15 and how many scored above 15.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Read cumulative frequency at 15 on x-axis.",
          "answer": "35",
          "feedback": "Well done. There are about 35 students below 15."
        },
        {
          "id": "q2",
          "prompt": "Calculate how many students scored above 15 (total 50 minus the below count).",
          "answer": "15",
          "feedback": "Correct. 50 − 35 = 15 students scored above 15."
        }
      ]
    }
  },
  "step5": {
    "title": "Comparing Distributions Using Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By comparing two cumulative frequency graphs on the same axes, we can analyze differences in medians, quartiles, spread, and overall distribution shape. This helps us understand which dataset has greater values or more variability.</p>",
    "workedExample": {
      "title": "Worked Example: Compare Two Datasets",
      "problem": "Two cumulative frequency graphs show scores of two classes, A and B. Class A has a median around 12 and Class B around 15. Which class generally scores higher?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which class has the higher median value?",
          "answer": "B",
          "feedback": "Correct. Class B has a median of 15, higher than class A."
        },
        {
          "id": "q2",
          "prompt": "What does a higher median tell us about the class scores?",
          "answer": "They are generally higher",
          "feedback": "Exactly. A higher median means more data values are above lower values."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph for a test with 60 students shows the following information: the curve crosses 15 cumulative frequency at a score of 8, 30 at 12, and 45 at 17. Use this graph to estimate the median, the lower quartile, the upper quartile, and the interquartile range.</span>",
      "hint": "Remember to find the median at n/2, lower quartile at n/4, and upper quartile at 3n/4 of total frequency. Use interpolation if needed along the graph curve.",
      "mustHaveKeywords": ["median", "lower quartile", "upper quartile", "interquartile range", "cumulative frequency"],
      "optionalKeywords": ["estimate", "graph interpretation", "data spread"],
      "modelAnswer": "<span>The median is found at the 30<sup>th</sup> cumulative frequency (n/2 = 60/2). From the graph, the score at 30 cumulative frequency is 12, so the median is approximately 12. The lower quartile is at 15 (n/4 = 60/4), corresponding to a score of 8. The upper quartile is at 45 (3n/4 = 3×60/4), corresponding to a score of 17. The interquartile range is Q3 − Q1 = 17 − 8 = 9.</span>",
      "scaffoldPrompts": [
        "Calculate n/2, n/4, and 3n/4 first.",
        "Find the scores corresponding to these cumulative frequencies from the graph.",
        "Subtract Q1 from Q3 to get the interquartile range."
      ]
    }
  }
};