window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Learn how to use cumulative frequency graphs to estimate medians, quartiles, and interquartile ranges, interpret data thresholds, and compare distributions.",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "keyFormulas": [
    "Median: find n/2 on the frequency axis, read across to the curve, then down to the x-axis",
    "Lower Quartile (Q1): find n/4 on the frequency axis, read across to the curve, then down to the x-axis",
    "Upper Quartile (Q3): find 3n/4 on the frequency axis, read across to the curve, then down to the x-axis",
    "Interquartile Range (IQR) = Q3 - Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='40' width='300' height='220' fill='#f0f0f0' stroke='#333' /><polyline points='50,260 100,230 150,200 200,180 250,140 300,90 350,60' fill='none' stroke='#007acc' stroke-width='3'/><text x='360' y='65' font-family='sans-serif' font-size='12' fill='#007acc'>Cumulative Frequency Curve</text><line x1='250' y1='260' x2='250' y2='140' stroke='#ff0000' stroke-dasharray='4' /><circle cx='250' cy='140' r='5' fill='#ff0000'/><text x='255' y='135' font-family='sans-serif' font-size='12' fill='#ff0000'>Q3 (3n/4)</text><line x1='150' y1='260' x2='150' y2='200' stroke='#00aa00' stroke-dasharray='4' /><circle cx='150' cy='200' r='5' fill='#00aa00'/><text x='90' y='205' font-family='sans-serif' font-size='12' fill='#00aa00'>Median (n/2)</text><line x1='100' y1='260' x2='100' y2='230' stroke='#ffaa00' stroke-dasharray='4' /><circle cx='100' cy='230' r='5' fill='#ffaa00'/><text x='60' y='235' font-family='sans-serif' font-size='12' fill='#ffaa00'>Q1 (n/4)</text><text x='30' y='280' font-family='sans-serif' font-size='14'>Data values</text><text x='200' y='295' font-family='sans-serif' font-size='14'>Values (x-axis)</text></svg>",
  "step1": {
    "title": "Understanding Median from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value in a data set. Using a cumulative frequency graph, find half the total frequency (n/2) on the vertical axis, then move horizontally to the curve. From that point, move downward to the x-axis to estimate the median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine lining up students by height from shortest to tallest. The median is the student standing exactly in the middle of the line.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating the Median",
      "problem": "A cumulative frequency graph shows a total frequency of 80. Find the value corresponding to the median.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is half of the total frequency (n/2)?",
          "answer": "40",
          "feedback": "Correct, half of 80 is 40."
        },
        {
          "id": "q2",
          "prompt": "From 40 on the frequency axis, move horizontally to the curve. What value do you read off the x-axis?",
          "answer": "Accept user input for an estimate",
          "feedback": "Good, you've read the estimated median value correctly on the x-axis."
        }
      ]
    }
  },
  "step2": {
    "title": "Finding Quartiles from the Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles divide the data into four equal parts. On the cumulative frequency graph, find n/4 and 3n/4 on the vertical axis. Move horizontally to the curve and then down to the x-axis to estimate Q1 (lower quartile) and Q3 (upper quartile).</p>",
    "workedExample": {
      "title": "Worked Example: Estimating Quartiles",
      "problem": "For 80 total data points, find the values for Q1 and Q3 from the graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate n/4 (one quarter of total frequency).",
          "answer": "20",
          "feedback": "Correct, one quarter of 80 is 20."
        },
        {
          "id": "q2",
          "prompt": "Calculate 3n/4 (three quarters of total frequency).",
          "answer": "60",
          "feedback": "Correct, three quarters of 80 is 60."
        },
        {
          "id": "q3",
          "prompt": "From 20 on the frequency axis, move horizontally to the curve, then down to the x-axis. Enter the estimated Q1 value.",
          "answer": "Accept user input for an estimate",
          "feedback": "Good, that's your estimated Q1."
        },
        {
          "id": "q4",
          "prompt": "From 60 on the frequency axis, move horizontally to the curve, then down to the x-axis. Enter the estimated Q3 value.",
          "answer": "Accept user input for an estimate",
          "feedback": "Correct, that's your estimated Q3."
        }
      ]
    }
  },
  "step3": {
    "title": "Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The IQR is the difference between the upper quartile (Q3) and lower quartile (Q1). It shows the spread of the middle 50% of the data.</p>",
    "workedExample": {
      "title": "Worked Example: Finding the IQR",
      "problem": "Using your previous estimates, calculate the interquartile range.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Subtract your Q1 estimate from your Q3 estimate to find the IQR.",
          "answer": "Accept user input for IQR",
          "feedback": "Good calculation! That's the spread of the middle 50% of the data."
        }
      ]
    }
  },
  "step4": {
    "title": "Interpreting Thresholds on the Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use cumulative frequency graphs to find how many data values fall below or above a certain threshold by reading the graph horizontally and vertically accordingly.</p>",
    "workedExample": {
      "title": "Worked Example: Data Below a Threshold",
      "problem": "How many values lie below the value 30 on the x-axis?",
      "questions": [
        {
          "id": "q1",
          "prompt": "From 30 on the x-axis, move vertically up to the curve, then horizontally to the frequency axis. What is the cumulative frequency?",
          "answer": "Accept user input for cumulative frequency",
          "feedback": "Correct, that represents how many data points fall below the threshold 30."
        }
      ]
    }
  },
  "step5": {
    "title": "Comparing Two Distributions Using Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By plotting two cumulative frequency graphs on the same axes, you can compare medians, quartiles, and spreads to understand differences between data sets.</p>",
    "workedExample": {
      "title": "Worked Example: Comparing Medians",
      "problem": "Given two cumulative frequency graphs, which data set has the higher median?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the median of each dataset by locating n/2 on the frequency axis and following to the x-axis for both graphs.",
          "answer": "Accept user input for median estimates of both datasets",
          "feedback": "Good. Comparing these shows which dataset has the higher median."
        },
        {
          "id": "q2",
          "prompt": "Based on the medians, which dataset's central tendency is higher?",
          "answer": "Accept user input choosing which dataset has the higher median",
          "feedback": "Correct choice. This reflects the central tendency difference."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to estimate the median, quartiles, and interquartile range from a cumulative frequency graph and interpret how many data values fall below a given value.</span>",
      "hint": "Remember to locate the appropriate fraction of the total frequency on the vertical axis for medians and quartiles, use the graph to read values on the x-axis, and understand what the cumulative frequency at a point represents.",
      "mustHaveKeywords": ["median", "quartiles", "interquartile range", "cumulative frequency", "estimate", "interpret"],
      "optionalKeywords": ["compare distributions", "spread", "threshold"],
      "modelAnswer": "<span>To estimate the median, find half of the total frequency (n/2) on the vertical axis, move horizontally to the cumulative frequency curve, then down to the x-axis to read the median value. For quartiles, find n/4 and 3n/4 on the vertical axis and repeat the process to estimate Q1 and Q3. The interquartile range is calculated by subtracting Q1 from Q3, showing the spread of the middle 50% of data. To interpret how many values fall below a given x-axis value, move vertically up from that value to the curve, then horizontally to the frequency axis to read the cumulative frequency representing the count of data below that threshold.</span>",
      "scaffoldPrompts": [
        "Think about how to find the median using n/2 on the cumulative frequency graph.",
        "Then explain finding quartiles using n/4 and 3n/4 positions.",
        "Next, describe calculating the interquartile range from these quartiles.",
        "Finally, explain interpreting cumulative frequencies to find how many data points lie below a certain value."
      ]
    }
  }
};