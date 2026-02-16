window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Learn how to estimate medians, quartiles, interquartile range and interpret and compare data using cumulative frequency graphs.",
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
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#444' stroke-width='1.5'/><polyline fill='none' stroke='#0074D9' stroke-width='3' points='50,250 100,200 150,160 200,130 250,100 300,80 340,60'/><line x1='50' y1='144' x2='340' y2='144' stroke='red' stroke-dasharray='5,5'/><circle cx='190' cy='144' r='5' fill='red'/><text x='150' y='135' font-family='Arial' font-size='14' fill='red'>Median at n/2</text><text x='200' y='280' font-family='Arial' font-size='14'>Data values</text><text x='10' y='150' font-family='Arial' font-size='14' transform='rotate(-90 10,150)'>Cumulative Frequency</text></svg>",
  "step1": {
    "title": "Concept: Finding the Median from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of a data set. On a cumulative frequency graph, you find the median by locating <em>half</em> the total frequency (n/2) on the vertical axis. Then,<br />draw a horizontal line to meet the curve, and from that point drop a vertical line down to the horizontal axis to read the median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine lining up all your exam scores in order. The median is the score right in the middle of that line, where half the scores are below and half above.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating the Median",
      "problem": "A cumulative frequency graph shows 80 data points in total. Use the graph to estimate the median value.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is half of 80 (n/2)?",
          "answer": "40",
          "feedback": "Correct! The median corresponds to the 40th data value."
        },
        {
          "id": "q2",
          "prompt": "On the cumulative frequency graph, draw a horizontal line at frequency 40. Does it meet the curve? Yes or No?",
          "answer": "Yes",
          "feedback": "Correct! You should then drop a line down to the x-axis to find the median."
        },
        {
          "id": "q3",
          "prompt": "At what value on the x-axis does the line drop down to? Enter your estimate.",
          "answer": "Enter student input",
          "feedback": "Great! This is your median estimate."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Finding Quartiles using a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles divide your data into four equal parts. The lower quartile (Q1) is the value at one-quarter of the total frequency (n/4), and the upper quartile (Q3) is at three-quarters (3n/4). To find them on the graph, find these frequencies on the vertical axis, then read across to the curve and drop down to the x-axis for the values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of quartiles like cutting a cake into four equal slices, marking the values that divide those slices.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating Quartiles",
      "problem": "For a data set of 80 points, estimate the lower quartile (Q1) and upper quartile (Q3) from the cumulative frequency graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is one quarter of 80 (n/4)?",
          "answer": "20",
          "feedback": "Correct. Q1 corresponds to the 20th data value."
        },
        {
          "id": "q2",
          "prompt": "What is three quarters of 80 (3n/4)?",
          "answer": "60",
          "feedback": "Correct. Q3 corresponds to the 60th data value."
        },
        {
          "id": "q3",
          "prompt": "Using the graph, find the value on the x-axis corresponding to frequency 20 (Q1). Enter your estimate.",
          "answer": "Enter student input",
          "feedback": "Good! That is your Q1 estimate."
        },
        {
          "id": "q4",
          "prompt": "Using the graph, find the value on the x-axis corresponding to frequency 60 (Q3). Enter your estimate.",
          "answer": "Enter student input",
          "feedback": "Well done! That is your Q3 estimate."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The interquartile range (IQR) measures the spread of the middle 50% of the data. It is the difference between the upper quartile (Q3) and the lower quartile (Q1): <em>IQR = Q3 − Q1</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">IQR is like the width of the middle half of your data. If it's a narrow range, most data are close together; if wide, data are more spread out.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating IQR",
      "problem": "Using the quartiles you found, calculate the interquartile range (IQR). Q1 = your answer from previous step, Q3 = your answer from previous step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "If Q3 is ____, and Q1 is ____, what is Q3 − Q1? Enter your calculated IQR.",
          "answer": "Enter student input",
          "feedback": "Correct, this shows the range of the middle 50% of your data."
        }
      ]
    }
  },
  "step4": {
    "title": "Using Cumulative Frequency Graphs to Count Data Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency graphs can also tell us how many data points fall below or above certain values. To find how many data are below a value, find that value on the x-axis, move up to the curve, then read the frequency on the y-axis. For above, subtract from total.</p>",
    "workedExample": {
      "title": "Worked Example: Data Values Below a Threshold",
      "problem": "On a cumulative frequency graph for 80 data points, estimate how many values are below 120.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find 120 on the x-axis and move up to the curve. What is the cumulative frequency at this point?",
          "answer": "Enter student input",
          "feedback": "Great! This tells you how many data values are less than or equal to 120."
        },
        {
          "id": "q2",
          "prompt": "How many data values are above 120? (Total data minus cumulative frequency at 120)",
          "answer": "Enter student input",
          "feedback": "Correct!"
        }
      ]
    }
  },
  "step5": {
    "title": "Comparing Distributions Using Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By plotting cumulative frequency graphs of two or more data sets on the same axes, you can compare medians, spreads, and distribution shapes. Differences in steepness and curve position reflect differences in data distributions.</p>",
    "workedExample": {
      "title": "Worked Example: Comparing Two Graphs",
      "problem": "Two cumulative frequency graphs for different classes show their test scores. Estimate which class has the higher median and which class has more spread.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the median (n/2) for each graph by locating the 50th data point frequency and estimating the corresponding x-axis value for each class.",
          "answer": "Enter student input for Class A and Class B",
          "feedback": "Well done! The higher value means a higher median score."
        },
        {
          "id": "q2",
          "prompt": "Estimate the IQR for each class using the quartile method on each graph. Which class has a larger IQR?",
          "answer": "Enter student input",
          "feedback": "Correct! A larger IQR indicates greater spread of the middle 50% of data."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Use a cumulative frequency graph of 100 data values. Estimate the median, lower quartile, upper quartile, and interquartile range from the graph shown. Then explain how you would find how many data points are greater than a specific value, e.g. 70. Finally, compare this distribution with another cumulative frequency graph to state which data set has a higher median and which has a larger interquartile range.</span>",
      "hint": "Remember to locate n/2, n/4, and 3n/4 on the frequency axis and use the curve to find corresponding values. Use total data count to find counts above thresholds.",
      "mustHaveKeywords": ["median", "quartiles", "interquartile range", "cumulative frequency", "compare distributions"],
      "optionalKeywords": ["estimate", "threshold", "spread", "data values"],
      "modelAnswer": "<span>To estimate the median, find 50 (which is n/2) on the cumulative frequency axis, read across to the curve and then drop down to find the median value. For the lower quartile, find 25 (n/4), and for the upper quartile, find 75 (3n/4), repeating the same process. The interquartile range is calculated by subtracting the lower quartile from the upper quartile (IQR = Q3 - Q1). To find how many data points are greater than 70, find the cumulative frequency at 70, then subtract this from the total of 100. When comparing with another graph, look at the medians to see which data set has a higher center, and use the IQR values to compare the spread of the middle 50% data. This will tell you which distribution is more spread out.</span>",
      "scaffoldPrompts": [
        "Find the total number of data points.",
        "Calculate n/2, n/4, and 3n/4 on the frequency axis.",
        "Find the values corresponding to these frequencies on the graph's curve.",
        "Calculate IQR by subtracting Q1 from Q3.",
        "Use the cumulative frequency value at 70 to find how many values are above this.",
        "Compare median and IQR values of two graphs."
      ]
    }
  }
};