window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR",
  "strapline": "Learn how to estimate the median and quartiles from grouped frequency tables and use the interquartile range as a measure of spread.",
  "learningObjectives": [
    "Students should be able to estimate the median from a grouped frequency table using the position formula n/2 (Maths 6.2)",
    "Students should be able to estimate the lower quartile (Q1) and upper quartile (Q3) from grouped frequency tables using positions n/4 and 3n/4 respectively (Maths 6.2)",
    "Students should be able to calculate the interquartile range (IQR) as the difference between the upper and lower quartiles and understand its use as a measure of spread (Maths 6.2)"
  ],
  "keyFormulas": [
    "Position of median = n / 2",
    "Position of lower quartile (Q1) = n / 4",
    "Position of upper quartile (Q3) = 3n / 4",
    "Interquartile range (IQR) = Q3 - Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 180' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='100' height='40' fill='#cee7f0' stroke='#333'/><rect x='140' y='30' width='100' height='40' fill='#a3d2ca' stroke='#333'/><rect x='240' y='30' width='100' height='40' fill='#f6bd60' stroke='#333'/><text x='90' y='95' font-family='sans-serif' font-size='14' text-anchor='middle'>Class Interval 1</text><text x='190' y='95' font-family='sans-serif' font-size='14' text-anchor='middle'>Class Interval 2</text><text x='290' y='95' font-family='sans-serif' font-size='14' text-anchor='middle'>Class Interval 3</text><text x='200' y='150' font-family='sans-serif' font-size='16' font-weight='bold' text-anchor='middle'>Grouped Frequency Table Example</text></svg>",
  "step1": {
    "title": "Understanding Grouped Frequency Tables",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>grouped frequency table</strong> organizes continuous data into intervals (also called classes) and shows how many data points fall into each interval. This helps summarize large datasets in an easy-to-read format.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine sorting a large box of mixed-size shoes into shelves by size ranges. Each shelf (interval) has a count (frequency) of shoes that fit the sizes in that range.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Frequencies",
      "problem": "Given a grouped frequency table of students' test scores split into intervals, identify how many scored between 30-39.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Look at the row for 30-39. What is the frequency listed?",
          "answer": "7",
          "feedback": "Correct! 7 students scored between 30 and 39."
        }
      ]
    }
  },
  "step2": {
    "title": "Estimating the Median from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>median</strong> is the middle value when all data points are ordered. For grouped data, first find the cumulative frequencies, then locate the class containing the median position <em>n/2</em>. Use interpolation within this class to estimate the median value.</p>",
    "workedExample": {
      "title": "Worked Example: Find the Median Position",
      "problem": "A table shows frequencies for each class interval. There are 40 data points in total. What is the median position?",
      "questions": [
        {
          "id": "q2",
          "prompt": "Calculate n / 2 where n = 40.",
          "answer": "20",
          "feedback": "Correct! The median is at the 20th data point."
        }
      ]
    }
  },
  "step3": {
    "title": "Calculating the Lower Quartile (Q1)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower quartile (Q1)</strong> is the value below which 25% of the data lies. Estimate it by finding the data position <em>n/4</em> in the cumulative frequency and interpolating within the corresponding group.</p>",
    "workedExample": {
      "title": "Worked Example: Find Q1 Position",
      "problem": "Using the same table with n=40, what is the position of Q1?",
      "questions": [
        {
          "id": "q3",
          "prompt": "Calculate n / 4 for n=40.",
          "answer": "10",
          "feedback": "Correct! The lower quartile is at the 10th data point."
        }
      ]
    }
  },
  "step4": {
    "title": "Calculating the Upper Quartile (Q3)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper quartile (Q3)</strong> is the value below which 75% of the data lies. Estimate it using the data position <em>3n/4</em> and interpolate in that class interval.</p>",
    "workedExample": {
      "title": "Worked Example: Find Q3 Position",
      "problem": "Find the position of Q3 when total frequency n=40.",
      "questions": [
        {
          "id": "q4",
          "prompt": "Calculate 3n / 4 where n = 40.",
          "answer": "30",
          "feedback": "Correct! The upper quartile is at the 30th data point."
        }
      ]
    }
  },
  "step5": {
    "title": "Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>interquartile range (IQR)</strong> measures the spread of the middle 50% of data and is calculated as <em>IQR = Q3 - Q1</em>. A larger IQR means more spread, while a smaller IQR means data is tightly packed around the center.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate IQR",
      "problem": "If Q1 is estimated as 25 and Q3 as 40, what is the IQR?",
      "questions": [
        {
          "id": "q5",
          "prompt": "Calculate Q3 - Q1.",
          "answer": "15",
          "feedback": "Correct! The IQR is 15."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A grouped frequency table of ages of 48 participants is given. The class intervals and frequencies are:<br>10-19: 5, 20-29: 13, 30-39: 17, 40-49: 8, 50-59: 5.<br>Estimate the median age, the lower quartile, upper quartile, and the interquartile range.</span>",
      "hint": "Calculate the total frequency n first. Use n/2, n/4, and 3n/4 positions to find median, Q1, and Q3 intervals. Use linear interpolation within those intervals.",
      "mustHaveKeywords": ["grouped frequency table", "cumulative frequency", "interpolation", "median", "quartiles", "interquartile range"],
      "optionalKeywords": ["measures of spread", "continuous data"],
      "modelAnswer": "<span>First, calculate the total frequency n = 48. Median position is 48/2 = 24, Q1 = 48/4 = 12, Q3 = 3×48/4 = 36.<br>Construct cumulative frequency table to find which class intervals contain these positions.<br>Interpolate within the identified intervals to estimate median, Q1, and Q3 values.<br>Finally, subtract Q1 from Q3 to find the IQR.</span>",
      "scaffoldPrompts": ["Calculate total frequency and positions n/2, n/4, 3n/4", "Draw cumulative frequency table", "Identify class intervals for each position", "Calculate cumulative frequencies to find class boundaries", "Use interpolation formula to estimate median and quartiles", "Calculate IQR as Q3 minus Q1"]
    }
  }
};