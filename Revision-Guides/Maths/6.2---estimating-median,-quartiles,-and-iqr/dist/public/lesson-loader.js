window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR",
  "strapline": "Learn how to estimate the median, quartiles, and interquartile range from grouped frequency tables to understand data spread.",
  "learningObjectives": [
    "Students should be able to estimate the median from a grouped frequency table using the position formula n/2 (Maths 6.2)",
    "Students should be able to estimate the lower quartile (Q1) and upper quartile (Q3) from grouped frequency tables using positions n/4 and 3n/4 respectively (Maths 6.2)",
    "Students should be able to calculate the interquartile range (IQR) as the difference between the upper and lower quartiles and understand its use as a measure of spread (Maths 6.2)"
  ],
  "keyFormulas": [
    "Position of median = n/2 where n is total frequency",
    "Position of lower quartile (Q1) = n/4",
    "Position of upper quartile (Q3) = 3n/4",
    "Interquartile Range (IQR) = Q3 - Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='40' y='50' width='420' height='200' fill='#f9f9f9' stroke='#666' stroke-width='2'/>\n  <text x='250' y='30' font-family='Arial' font-size='16' font-weight='bold' text-anchor='middle'>Grouped Frequency Table Example</text>\n  <line x1='70' y1='70' x2='70' y2='230' stroke='#333' stroke-width='1'/>\n  <line x1='70' y1='70' x2='430' y2='70' stroke='#333' stroke-width='1'/>\n  <line x1='110' y1='70' x2='110' y2='230' stroke='#ccc' stroke-dasharray='3,3'/>\n  <line x1='170' y1='70' x2='170' y2='230' stroke='#ccc' stroke-dasharray='3,3'/>\n  <line x1='230' y1='70' x2='230' y2='230' stroke='#ccc' stroke-dasharray='3,3'/>\n  <line x1='290' y1='70' x2='290' y2='230' stroke='#ccc' stroke-dasharray='3,3'/>\n  <line x1='350' y1='70' x2='350' y2='230' stroke='#ccc' stroke-dasharray='3,3'/>\n  <line x1='410' y1='70' x2='410' y2='230' stroke='#ccc' stroke-dasharray='3,3'/>\n  <text x='40' y='100' font-family='Arial' font-size='14'>Class Interval</text>\n  <text x='120' y='100' font-family='Arial' font-size='14'>Frequency</text>\n  <text x='60' y='130' font-family='Arial' font-size='13'>10 - 20</text>\n  <text x='140' y='130' font-family='Arial' font-size='13'>5</text>\n  <text x='60' y='160' font-family='Arial' font-size='13'>20 - 30</text>\n  <text x='140' y='160' font-family='Arial' font-size='13'>8</text>\n  <text x='60' y='190' font-family='Arial' font-size='13'>30 - 40</text>\n  <text x='140' y='190' font-family='Arial' font-size='13'>12</text>\n  <text x='60' y='220' font-family='Arial' font-size='13'>40 - 50</text>\n  <text x='140' y='220' font-family='Arial' font-size='13'>10</text>\n  <text x='250' y='200' font-family='Arial' font-size='12' fill='#d00' font-weight='bold'>Median Class Interval Highlighted</text>\n  <rect x='230' y='180' width='80' height='30' fill='#ffdce0' stroke='#d00' stroke-width='1.5'/>\n</svg>",
  "step1": {
    "title": "Understanding Grouped Frequency Tables",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>grouped frequency table</strong> organizes continuous data into intervals called classes, showing how often data falls within each range. It helps summarize large datasets.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of sorting a box of different lengths of pencils into groups, for example, 10-20 cm, 20-30 cm, and so on. The table tells you how many pencils fall in each length group.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Classes and Frequencies",
      "problem": "Here is a grouped frequency table. How many data points lie in the class interval 30 - 40?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Look at the frequency value for class 30 - 40. Enter that number.",
          "answer": "12",
          "feedback": "Correct! There are 12 data points between 30 and 40."
        }
      ]
    }
  },
  "step2": {
    "title": "Estimating the Median from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of your dataset. For grouped data, first find the position <em>n/2</em>, where <em>n</em> is the total frequency. Then identify which class interval contains the median by cumulative frequency.</p>",
    "workedExample": {
      "title": "Worked Example: Finding the Median Class",
      "problem": "Given the frequency table, find the class interval that contains the median.",
      "questions": [
        {
          "id": "q2",
          "prompt": "Calculate the total number of data points (n). Enter your answer.",
          "answer": "35",
          "feedback": "Correct. Sum of frequencies: 5 + 8 + 12 + 10 = 35."
        },
        {
          "id": "q3",
          "prompt": "Find the median position (n/2). Enter the value.",
          "answer": "17.5",
          "feedback": "Correct. 35 divided by 2 equals 17.5."
        },
        {
          "id": "q4",
          "prompt": "Using cumulative frequencies, which class contains the 17.5th data point? Enter the class interval (e.g. 30 - 40).",
          "answer": "30 - 40",
          "feedback": "Correct! The 17.5th value lies in the 30 - 40 interval."
        }
      ]
    }
  },
  "step3": {
    "title": "Estimating the Median Value: Interpolation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Once the median class is found, estimate the median value by interpolating within this class using: <br /><em>Median = lower class boundary + ((n/2 - cumulative frequency before median class) / frequency of median class) × class width.</em></p>",
    "workedExample": {
      "title": "Worked Example: Calculating the Median",
      "problem": "Estimate the median value for the data below, where the median class is 30 - 40.",
      "questions": [
        {
          "id": "q5",
          "prompt": "Enter the lower class boundary of the median class (30 - 40).",
          "answer": "29.5",
          "feedback": "Correct. Usually, class boundaries are 0.5 less than the lower class limit."
        },
        {
          "id": "q6",
          "prompt": "Enter the cumulative frequency before the median class.",
          "answer": "13",
          "feedback": "Correct. Sum of frequencies before 30 - 40 is 5 + 8 = 13."
        },
        {
          "id": "q7",
          "prompt": "Enter the frequency of the median class.",
          "answer": "12",
          "feedback": "Correct. Frequency of 30 - 40 class is 12."
        },
        {
          "id": "q8",
          "prompt": "Enter the class width of the median class.",
          "answer": "10",
          "feedback": "Correct. Class width (40 - 30) = 10."
        }
      ]
    }
  },
  "step4": {
    "title": "Estimating the Lower and Upper Quartiles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">We find the lower quartile (Q1) and upper quartile (Q3) in the same way as the median but use the positions <em>n/4</em> and <em>3n/4</em> respectively in the ordered data.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Quartile Positions",
      "problem": "Using the table with total frequency n=35, find the positions for Q1 and Q3.",
      "questions": [
        {
          "id": "q9",
          "prompt": "Calculate n/4 for Q1. Enter your answer.",
          "answer": "8.75",
          "feedback": "Correct. 35 divided by 4 equals 8.75."
        },
        {
          "id": "q10",
          "prompt": "Calculate 3n/4 for Q3. Enter your answer.",
          "answer": "26.25",
          "feedback": "Correct. 3 times 35 divided by 4 equals 26.25."
        }
      ]
    }
  },
  "step5": {
    "title": "Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The interquartile range (IQR) is a measure of spread, calculated as the difference between the upper quartile (Q3) and lower quartile (Q1): <br/><strong>IQR = Q3 - Q1</strong>. It shows where the middle 50% of data lies.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating IQR",
      "problem": "Once you have estimated Q1 and Q3, calculate the IQR.",
      "questions": [
        {
          "id": "q11",
          "prompt": "If Q1 is 25.4 and Q3 is 38.6, enter the IQR value.",
          "answer": "13.2",
          "feedback": "Correct. 38.6 minus 25.4 equals 13.2."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>You are given the following grouped frequency table:<br/><br/><table border='1' cellpadding='5' cellspacing='0'><tr><th>Class Interval</th><th>Frequency</th></tr><tr><td>5 - 15</td><td>7</td></tr><tr><td>15 - 25</td><td>10</td></tr><tr><td>25 - 35</td><td>13</td></tr><tr><td>35 - 45</td><td>8</td></tr></table><br/>Estimate the median, lower quartile (Q1), upper quartile (Q3), and calculate the IQR. Explain each step including how you find the positions and which class intervals they lie in.</span>",
      "hint": "Remember to calculate total frequency first, then find positions n/2, n/4, and 3n/4. Use cumulative frequencies to locate classes, then interpolate within classes.",
      "mustHaveKeywords": ["cumulative frequency", "class interval", "position", "interpolation", "IQR"],
      "optionalKeywords": ["spread", "middle 50%", "quartiles"],
      "modelAnswer": "<span>First, calculate total frequency: 7 + 10 + 13 + 8 = 38.<br/>Median position is 38/2 = 19; find class with cumulative frequency passing 19.<br/>Cumulative frequencies: 7, 17, 30, 38 – median lies in 25 - 35 class.<br/>Lower quartile position is 38/4 = 9.5; lies in 15 - 25 class.<br/>Upper quartile position is 3 × 38/4 = 28.5; lies in 25 - 35 class.<br/>Use interpolation within each class to estimate median, Q1, and Q3.<br/>Finally, calculate IQR = Q3 - Q1.<br/>This process helps summarize data spread focusing on the middle 50%.</span>",
      "scaffoldPrompts": [
        "Calculate total frequency (n).",
        "Find positions of median, Q1, and Q3 using n/2, n/4, 3n/4.",
        "Construct cumulative frequency table.",
        "Identify class intervals containing median, Q1, and Q3.",
        "Use interpolation formula to estimate values.",
        "Compute IQR as Q3 minus Q1."
      ]
    }
  }
};