window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR",
  "strapline": "Learn how to estimate the median and quartiles from grouped frequency tables and calculate the interquartile range to understand data spread.",
  "learningObjectives": [
    "Students should be able to estimate the median from a grouped frequency table using the position formula n/2 (Maths 6.2)",
    "Students should be able to estimate the lower quartile (Q1) and upper quartile (Q3) from grouped frequency tables using positions n/4 and 3n/4 respectively (Maths 6.2)",
    "Students should be able to calculate the interquartile range (IQR) as the difference between the upper and lower quartiles and understand its use as a measure of spread (Maths 6.2)"
  ],
  "keyFormulas": [
    "Median position = n/2",
    "Lower quartile (Q1) position = n/4",
    "Upper quartile (Q3) position = 3n/4",
    "Interquartile range (IQR) = Q3 − Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='40' y='80' width='320' height='140' fill='#f9f9f9' stroke='#444' stroke-width='2'/>\n  <text x='200' y='40' text-anchor='middle' font-family='sans-serif' font-size='18' fill='#222'>Grouped Frequency Table</text>\n  <text x='60' y='110' font-family='sans-serif' font-size='14' fill='#333'>Class Interval</text>\n  <text x='320' y='110' font-family='sans-serif' font-size='14' fill='#333'>Frequency</text>\n  <line x1='60' y1='115' x2='120' y2='115' stroke='#666'/>\n  <line x1='280' y1='115' x2='340' y2='115' stroke='#666'/>\n  <text x='60' y='140' font-family='sans-serif' font-size='14'>10 - 20</text>\n  <text x='320' y='140' font-family='sans-serif' font-size='14'>4</text>\n  <text x='60' y='170' font-family='sans-serif' font-size='14'>20 - 30</text>\n  <text x='320' y='170' font-family='sans-serif' font-size='14'>8</text>\n  <text x='60' y='200' font-family='sans-serif' font-size='14'>30 - 40</text>\n  <text x='320' y='200' font-family='sans-serif' font-size='14'>10</text>\n  <text x='60' y='230' font-family='sans-serif' font-size='14'>40 - 50</text>\n  <text x='320' y='230' font-family='sans-serif' font-size='14'>6</text>\n  <line x1='60' y1='245' x2='340' y2='245' stroke='#888' stroke-dasharray='4 2'/>\n</svg>",
  "step1": {
    "title": "Understanding Grouped Frequency Tables",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>grouped frequency table</strong> arranges continuous data into intervals called classes, each with a frequency showing how many data points fall into that range. This is useful for summarizing large datasets.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of grouping students by height ranges (e.g., 150-160cm, 160-170cm) instead of listing each student's exact height.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Interpreting a Grouped Frequency Table",
      "problem": "Given the frequency table below, what is the total number of data points (n)?\n\nClass Intervals: 10–20, 20–30, 30–40, 40–50\nFrequencies: 4, 8, 10, 6",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the frequency for the class 10–20?",
          "answer": "4",
          "feedback": "Correct, 4 data points are in the 10–20 range."
        },
        {
          "id": "q2",
          "prompt": "What is the frequency for the class 30–40?",
          "answer": "10",
          "feedback": "Correct, 10 data points are in the 30–40 range."
        },
        {
          "id": "q3",
          "prompt": "Calculate the total number of data points (n) by adding all frequencies.",
          "answer": "28",
          "feedback": "Correct, 4 + 8 + 10 + 6 = 28 data points in total."
        }
      ]
    }
  },
  "step2": {
    "title": "Estimating the Median from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>median</strong> is the middle value of the dataset at position <em>n/2</em>. For grouped data, find which class contains this position and then use interpolation to estimate the median value.</p>",
    "workedExample": {
      "title": "Worked Example: Finding the Median Class",
      "problem": "Using the previous table, find the median class interval.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is n/2 for the total frequency n=28?",
          "answer": "14",
          "feedback": "Correct, half of 28 is 14."
        },
        {
          "id": "q2",
          "prompt": "Calculate cumulative frequency up to each class:\n10–20: 4\n20–30: 12\n30–40: 22\n40–50: 28\nWhich class contains the 14th item?",
          "answer": "30–40",
          "feedback": "Correct, the 14th data point falls within the 30–40 class interval."
        }
      ]
    }
  },
  "step3": {
    "title": "Interpolating to Estimate the Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To estimate the median inside the median class, use the formula:<br/><em>Median = L + ((n/2 – F) / f) × w</em><br/>where:<br/>L = lower boundary of median class<br/>F = cumulative frequency before median class<br/>f = frequency of median class<br/>w = class width</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Median Value",
      "problem": "Given in the previous data:<br/>Median class = 30–40<br/>L = 30, F = 12, f = 10, w = 10<br/>Calculate the median.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate (n/2 – F):",
          "answer": "2",
          "feedback": "Correct, 14 – 12 = 2."
        },
        {
          "id": "q2",
          "prompt": "Calculate fraction (n/2 – F) / f:",
          "answer": "0.2",
          "feedback": "Correct, 2 / 10 = 0.2."
        },
        {
          "id": "q3",
          "prompt": "Calculate (fraction) × w:",
          "answer": "2",
          "feedback": "Correct, 0.2 × 10 = 2."
        },
        {
          "id": "q4",
          "prompt": "Add to lower boundary L to estimate median:",
          "answer": "32",
          "feedback": "Correct, 30 + 2 = 32."
        }
      ]
    }
  },
  "step4": {
    "title": "Estimating Quartiles from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower quartile (Q1)</strong> is at position <em>n/4</em> and the <strong>upper quartile (Q3)</strong> is at position <em>3n/4</em>. Find these positions in the cumulative frequency and interpolate similarly to the median.</p>",
    "workedExample": {
      "title": "Worked Example: Identify Quartile Classes",
      "problem": "Using n=28, find the positions of Q1 and Q3 and identify their classes from cumulative frequencies: 4, 12, 22, 28.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate n/4:",
          "answer": "7",
          "feedback": "Correct, 28 ÷ 4 = 7."
        },
        {
          "id": "q2",
          "prompt": "Calculate 3n/4:",
          "answer": "21",
          "feedback": "Correct, 3 × 28 ÷ 4 = 21."
        },
        {
          "id": "q3",
          "prompt": "Which class contains the 7th data point?",
          "answer": "20–30",
          "feedback": "Correct, 7 lies between cumulative frequencies 4 and 12."
        },
        {
          "id": "q4",
          "prompt": "Which class contains the 21st data point?",
          "answer": "30–40",
          "feedback": "Correct, 21 lies between cumulative frequencies 12 and 22."
        }
      ]
    }
  },
  "step5": {
    "title": "Interpolating to Estimate Q1 and Q3",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the formula:<br/><em>Quartile = L + ((position – F) / f) × w</em><br/>just like for the median, where each variable corresponds to the quartile class.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Q1 and Q3",
      "problem": "For Q1:<br/>Class: 20–30, L=20, F=4, f=8, w=10, position=7<br/>For Q3:<br/>Class: 30–40, L=30, F=12, f=10, w=10, position=21",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate (position – F) for Q1:",
          "answer": "3",
          "feedback": "Correct, 7 – 4 = 3."
        },
        {
          "id": "q2",
          "prompt": "Calculate fraction for Q1: 3 / 8",
          "answer": "0.375",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate Q1 estimate: 20 + 0.375 × 10",
          "answer": "23.75",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Calculate (position – F) for Q3:",
          "answer": "9",
          "feedback": "Correct, 21 – 12 = 9."
        },
        {
          "id": "q5",
          "prompt": "Calculate fraction for Q3: 9 / 10",
          "answer": "0.9",
          "feedback": "Correct."
        },
        {
          "id": "q6",
          "prompt": "Calculate Q3 estimate: 30 + 0.9 × 10",
          "answer": "39",
          "feedback": "Correct."
        }
      ]
    }
  },
  "step6": {
    "title": "Calculating and Interpreting the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>interquartile range (IQR)</strong> is the difference between upper quartile (Q3) and lower quartile (Q1): <em>IQR = Q3 − Q1</em>. It shows the spread of the middle 50% of data, and is useful for understanding variability and detecting outliers.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate IQR",
      "problem": "Using previous estimates, Q1 = 23.75 and Q3 = 39, calculate the IQR.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate IQR = Q3 − Q1",
          "answer": "15.25",
          "feedback": "Correct, 39 − 23.75 = 15.25."
        },
        {
          "id": "q2",
          "prompt": "Explain what this IQR value tells you about the data.",
          "answer": "The middle 50% of data lies within a range of 15.25 units, indicating the spread or variability of the data.",
          "feedback": "Good explanation!"
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given the grouped frequency table below, estimate the median, lower quartile (Q1), upper quartile (Q3), and calculate the interquartile range (IQR). Explain each step.</span>\n\n<table border='1' cellspacing='0' cellpadding='5'>\n<tr><th>Class Interval</th><th>Frequency</th></tr>\n<tr><td>5–15</td><td>5</td></tr>\n<tr><td>15–25</td><td>10</td></tr>\n<tr><td>25–35</td><td>12</td></tr>\n<tr><td>35–45</td><td>8</td></tr>\n<tr><td>45–55</td><td>5</td></tr>\n</table>",
      "hint": "Calculate total frequency first, then use n/4, n/2, 3n/4 positions to find quartile classes. Use interpolation formula to estimate each quartile and median before calculating IQR.",
      "mustHaveKeywords": ["grouped frequency table", "position formula", "interpolation", "median", "quartile", "interquartile range"],
      "optionalKeywords": ["spread", "variability", "data analysis"],
      "modelAnswer": "<span>First, find total frequency n = 40. Calculate positions for Q1 = 10, median = 20, Q3 = 30. Identify class intervals containing these positions via cumulative frequency. Then interpolate using Q = L + ((position - F)/f) × w for each quartile. Finally, subtract Q1 from Q3 to find IQR, which measures data spread.</span>",
      "scaffoldPrompts": ["Calculate total frequency (n).", "Find n/4, n/2, and 3n/4 positions.", "Determine which class interval each position falls into using cumulative frequencies.", "Apply the interpolation formula for each quartile.", "Calculate the difference Q3 - Q1 to get the IQR.", "Explain the importance of the IQR."]
    }
  }
};