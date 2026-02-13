window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 2)",
  "strapline": "Using cumulative frequency graphs to estimate medians, quartiles, interquartile range, and compare data distributions.",
  "learningObjectives": [
    "Students should be able to use cumulative frequency graphs to find estimates for the median, quartiles, and interquartile range (Maths 6.1)",
    "Students should be able to interpret cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should be able to compare distributions using cumulative frequency graphs (Maths 6.1)"
  ],
  "keyFormulas": [
    "Median: Read from n/2 on frequency axis to curve then to x-axis",
    "Lower Quartile (Q1): Read at n/4 of total frequency",
    "Upper Quartile (Q3): Read at 3n/4 of total frequency",
    "Interquartile Range (IQR) = Q3 - Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#444'/><polyline fill='none' stroke='#0074d9' stroke-width='2' points='50,250 90,210 130,180 170,140 210,110 250,90 290,70 330,60'/><text x='200' y='280' text-anchor='middle' fill='#333' font-family='sans-serif' font-size='14'>Cumulative Frequency Graph</text><line x1='200' y1='40' x2='200' y2='250' stroke='#888' stroke-dasharray='4'/><circle cx='200' cy='145' r='4' fill='#d62728'/><text x='210' y='140' font-family='sans-serif' font-size='12' fill='#d62728'>Median</text></svg>",
  "step1": {
    "title": "Concept 1: Finding the Median from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>median</strong> is the middle value of a data set. To find it from a cumulative frequency graph, find half the total frequency (n/2) on the vertical axis, then move horizontally to the curve, and down to the horizontal axis to estimate the median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of lining up a group of people from shortest to tallest. The median person is the one exactly in the middle. On the graph, n/2 represents this middle position.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating the Median",
      "problem": "A cumulative frequency graph has a total frequency of 80. Estimate the median value.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate half of the total frequency (n/2). What is the value?",
          "answer": "40",
          "feedback": "Correct! Half of 80 is 40."
        },
        {
          "id": "q2",
          "prompt": "From 40 on the cumulative frequency axis, move horizontally to touch the curve. Then move down to the value axis. What is the estimated median value?",
          "answer": "Answer depends on diagram, e.g., 25",
          "feedback": "Good job! You have correctly read the median from the graph."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Understanding Quartiles on the Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>quartiles</strong> divide the data into four equal parts. The <em>lower quartile (Q1)</em> corresponds to the value at <code>n/4</code>, and the <em>upper quartile (Q3)</em> corresponds to the value at <code>3n/4</code> on the cumulative frequency axis. Read these points across to the curve, then straight down to find the values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine cutting a cake into four equal slices. Each slice represents a quartile of the data.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating Quartiles",
      "problem": "Using the same cumulative frequency graph with total frequency 80, estimate Q1 and Q3.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate n/4 of the total frequency. What is the value?",
          "answer": "20",
          "feedback": "Correct! A quarter of 80 is 20."
        },
        {
          "id": "q2",
          "prompt": "Calculate 3n/4 of the total frequency. What is the value?",
          "answer": "60",
          "feedback": "Correct! Three quarters of 80 is 60."
        },
        {
          "id": "q3",
          "prompt": "Find the value corresponding to 20 on the cumulative frequency axis by reading the graph (horizontal to curve, then down). What is the estimated Q1?",
          "answer": "Answer depends on diagram, e.g., 15",
          "feedback": "Good! You have successfully estimated Q1."
        },
        {
          "id": "q4",
          "prompt": "Find the value corresponding to 60 on the cumulative frequency axis by reading the graph similarly. What is the estimated Q3?",
          "answer": "Answer depends on diagram, e.g., 30",
          "feedback": "Excellent! You have correctly found Q3."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Interquartile Range (IQR)</strong> is the difference between the upper quartile (Q3) and the lower quartile (Q1). It measures the spread of the middle 50% of your data and shows how spread out the central values are.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of trimming off the 'tails' of the data and focusing on the middle section – that spread is the IQR.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the IQR",
      "problem": "Using the estimated values for Q1 and Q3 from the previous step, find the interquartile range.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Recall the value for Q1. What is it?",
          "answer": "Answer from previous step, e.g., 15",
          "feedback": "Correct, that is the lower quartile."
        },
        {
          "id": "q2",
          "prompt": "Recall the value for Q3. What is it?",
          "answer": "Answer from previous step, e.g., 30",
          "feedback": "Correct, that is the upper quartile."
        },
        {
          "id": "q3",
          "prompt": "Calculate the IQR by subtracting Q1 from Q3 (Q3 - Q1). What is the answer?",
          "answer": "15",
          "feedback": "Well done! The IQR is the spread between Q3 and Q1."
        }
      ]
    }
  },
  "step4": {
    "title": "Interpreting Values on a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use cumulative frequency graphs to find how many data points fall below or above certain values. Find the value on the horizontal axis, then move vertically up to the curve, and read the cumulative frequency on the vertical axis.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This is like counting how many people in a queue are shorter than a given height.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Counting Data Values Below a Threshold",
      "problem": "Using the graph, estimate how many data values fall below 20.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Locate 20 on the horizontal axis and move up to the curve. What is the cumulative frequency value approximately at that point?",
          "answer": "Answer depends on diagram, e.g., 30",
          "feedback": "Great! You have found how many data points are below 20."
        }
      ]
    }
  },
  "step5": {
    "title": "Comparing Distributions Using Cumulative Frequency Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">By plotting cumulative frequency graphs for two or more sets of data, you can compare their medians, spread (IQR), and general distribution shapes visually to see differences.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This is like comparing the height distributions of two different classes of students by looking at their cumulative height graphs side by side.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing Medians and IQRs",
      "problem": "Two cumulative frequency graphs show the scores of two different classes on a test. Class A has median around 60 and IQR around 15, Class B has median around 70 and IQR around 10. What can you say about the performance and spread?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which class has the higher median score?",
          "answer": "Class B",
          "feedback": "Correct, Class B's median is 70, higher than Class A's 60."
        },
        {
          "id": "q2",
          "prompt": "Which class has more variation in scores based on the IQR?",
          "answer": "Class A",
          "feedback": "Correct, Class A has a larger IQR, indicating more variability."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows the distribution of heights (in cm) of 100 students. The median height is found at 155 cm, the lower quartile (Q1) at 145 cm, and the upper quartile (Q3) at 165 cm.</span><br/><span>Explain how to find the interquartile range from this graph and describe what the IQR tells us about the data.</span>",
      "hint": "Remember to identify Q1 and Q3 on the cumulative frequency axis before calculating the difference.",
      "mustHaveKeywords": ["interquartile range", "Q3 minus Q1", "spread", "middle 50%"],
      "optionalKeywords": ["median", "quartiles", "data distribution"],
      "modelAnswer": "<span>The interquartile range (IQR) is found by subtracting the lower quartile (Q1) from the upper quartile (Q3). Using the graph, identify Q1 and Q3 values by locating the heights where the cumulative frequency reaches 25 and 75 (which are quarters of 100). The IQR = Q3 - Q1 = 165 cm - 145 cm = 20 cm. This measure shows the spread of the middle 50% of students' heights, indicating how close or spread out these central values are.</span>",
      "scaffoldPrompts": [
        "Identify the total number of data points (n).",
        "Calculate n/4 and 3n/4 positions on the frequency axis.",
        "Find the corresponding heights for these positions on the graph.",
        "Subtract Q1 from Q3 to get the IQR.",
        "Explain what the IQR represents in the context of the data."
      ]
    }
  }
};