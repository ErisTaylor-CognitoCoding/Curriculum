window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR (Part 3)",
  "strapline": "Learn how to estimate median, quartiles, and interquartile range from grouped frequency data using cumulative frequency methods and linear interpolation.",
  "learningObjectives": [
    "Students should be able to estimate the median from grouped frequency data using cumulative frequency methods (Maths 6.2)",
    "Students should be able to estimate the lower quartile, upper quartile, and interquartile range from grouped frequency data using cumulative frequency curves and linear interpolation (Maths 6.2)",
    "Students should be able to read and interpret values from cumulative frequency curves to determine measures of location and spread for grouped data (Maths 6.2)"
  ],
  "keyFormulas": [
    "Median = L + \\left(\\frac{\\frac{n}{2} - F}{f}\\right) \\times w",
    "Lower Quartile (Q1) = L + \\left(\\frac{\\frac{n}{4} - F}{f}\\right) \\times w",
    "Upper Quartile (Q3) = L + \\left(\\frac{\\frac{3n}{4} - F}{f}\\right) \\times w",
    "Interquartile Range (IQR) = Q3 - Q1",
    "Where: L = lower boundary of the median/quartile class, F = cumulative frequency before the class, f = frequency of the class, w = class width, n = total number of values"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#333' stroke-width='2'/><polyline points='50,250 90,200 130,160 170,130 210,110 250,90 290,70 330,50' fill='none' stroke='#007acc' stroke-width='3'/><text x='50' y='270' font-family='sans-serif' font-size='14' fill='#333'>Class Intervals</text><text x='10' y='50' font-family='sans-serif' font-size='14' fill='#333' transform='rotate(-90 10,50)'>Cumulative Frequency</text><circle cx='170' cy='130' r='4' fill='#d9534f'/><text x='180' y='125' font-family='sans-serif' font-size='12' fill='#d9534f'>Median Estimate</text></svg>",
  "step1": {
    "title": "Understanding Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies. It shows the number of data values below the upper boundary of each class interval. This total helps us estimate measures like the median when individual data points aren't given.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine counting runners finishing a race lap by lap. The cumulative frequency is like the total number of runners who have finished up to each lap.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Cumulative Frequency",
      "problem": "Here are frequencies for class intervals: 0-10 (5), 10-20 (8), 20-30 (12). Calculate cumulative frequencies for each class.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the cumulative frequency for the 0-10 class?",
          "answer": "5",
          "feedback": "Correct. The first cumulative frequency equals the first frequency."
        },
        {
          "id": "q2",
          "prompt": "What is the cumulative frequency for the 10-20 class?",
          "answer": "13",
          "feedback": "Correct. 5 + 8 = 13 cumulative frequency."
        },
        {
          "id": "q3",
          "prompt": "What is the cumulative frequency for the 20-30 class?",
          "answer": "25",
          "feedback": "Correct. 13 + 12 = 25 cumulative frequency."
        }
      ]
    }
  },
  "step2": {
    "title": "Estimating the Median Using Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of a dataset. Using cumulative frequency, we find the class where the middle value lies, then interpolate for a more precise estimate.</p>",
    "workedExample": {
      "title": "Worked Example: Median Estimation",
      "problem": "Given cumulative frequencies 5, 13, and 25 for classes 0-10, 10-20, 20-30 respectively, and total n = 25, find the median class.",
      "questions": [
        {
          "id": "q4",
          "prompt": "Calculate n/2 (the median position).",
          "answer": "12.5",
          "feedback": "Correct. The median lies at the 12.5th data value."
        },
        {
          "id": "q5",
          "prompt": "Which class interval contains the 12.5th value? (Options: 0-10, 10-20, 20-30)",
          "answer": "10-20",
          "feedback": "Correct. The cumulative frequency hits 13 in this interval, which contains the median position."
        }
      ]
    }
  },
  "step3": {
    "title": "Linear Interpolation to Estimate Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Linear interpolation assumes data is evenly spread within the median class to estimate the median more accurately using the formula:</p><p><strong>Median = L + \\left(\\frac{\\frac{n}{2} - F}{f}\\right) \\times w</strong></p><p>where L = lower boundary, F = cumulative frequency before the median class, f = frequency of the median class, w = class width.</p>",
    "workedExample": {
      "title": "Worked Example: Median Calculation Using Interpolation",
      "problem": "For class 10-20: L=10, F=5, f=8, w=10, and n/2=12.5, calculate the median.",
      "questions": [
        {
          "id": "q6",
          "prompt": "Calculate \\(\\frac{n}{2} - F\\).",
          "answer": "7.5",
          "feedback": "Correct. 12.5 - 5 = 7.5"
        },
        {
          "id": "q7",
          "prompt": "Divide by the class frequency f: 7.5 ÷ 8 = ?",
          "answer": "0.9375",
          "feedback": "Correct. 7.5 ÷ 8 = 0.9375"
        },
        {
          "id": "q8",
          "prompt": "Multiply by class width w: 0.9375 × 10 = ?",
          "answer": "9.375",
          "feedback": "Correct. 0.9375 × 10 = 9.375"
        },
        {
          "id": "q9",
          "prompt": "Add L: 10 + 9.375 = ? (This is the median estimate)",
          "answer": "19.375",
          "feedback": "Great! The estimated median is 19.375."
        }
      ]
    }
  },
  "step4": {
    "title": "Estimating Quartiles Using Cumulative Frequency and Interpolation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Lower quartile (Q1) and upper quartile (Q3) represent the 25th and 75th percentiles of data. Similar to the median, use \\( n/4 \\) and \\( 3n/4 \\) positions on the cumulative frequency graph and interpolate within the relevant classes to estimate Q1 and Q3.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Q1",
      "problem": "Using total n=25, calculate the position of Q1 and find the class containing it from cumulative frequencies: 5, 13, 25.",
      "questions": [
        {
          "id": "q10",
          "prompt": "Calculate n/4.",
          "answer": "6.25",
          "feedback": "Correct. 25 ÷ 4 = 6.25"
        },
        {
          "id": "q11",
          "prompt": "Which class contains the 6.25th value? (Options: 0-10, 10-20, 20-30)",
          "answer": "10-20",
          "feedback": "Correct. Cumulative frequency 5 and 13 show 6.25 lies in 10-20."
        }
      ]
    }
  },
  "step5": {
    "title": "Calculating Q1 and Q3 with Interpolation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the interpolation formula for Q1 and Q3 with appropriate positions \\( \\frac{n}{4} \\) and \\( \\frac{3n}{4} \\).</p>",
    "workedExample": {
      "title": "Worked Example: Q1 Calculation",
      "problem": "For class 10-20: L=10, F=5, f=8, w=10, n/4=6.25, calculate Q1.",
      "questions": [
        {
          "id": "q12",
          "prompt": "Calculate \\( \\frac{n}{4} - F \\).",
          "answer": "1.25",
          "feedback": "Correct. 6.25 - 5 = 1.25"
        },
        {
          "id": "q13",
          "prompt": "Divide by frequency f: 1.25 ÷ 8 = ?",
          "answer": "0.15625",
          "feedback": "Correct. 1.25 ÷ 8 = 0.15625"
        },
        {
          "id": "q14",
          "prompt": "Multiply by class width w: 0.15625 × 10 = ?",
          "answer": "1.5625",
          "feedback": "Correct. 0.15625 × 10 = 1.5625"
        },
        {
          "id": "q15",
          "prompt": "Add L to find Q1: 10 + 1.5625 = ?",
          "answer": "11.5625",
          "feedback": "Great! The estimated lower quartile (Q1) is 11.5625."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to estimate the median and interquartile range from grouped frequency data using cumulative frequencies and linear interpolation.</span>",
      "hint": "Remember to specify how to find the relevant class, use cumulative frequencies, calculate positions like n/2, n/4, and 3n/4, and apply the interpolation formula.",
      "mustHaveKeywords": ["cumulative frequency", "median class", "linear interpolation", "n/2", "n/4", "3n/4", "interquartile range", "class width", "frequency", "lower boundary"],
      "optionalKeywords": ["draw cumulative frequency curve", "estimate values from graph"],
      "modelAnswer": "<span>To estimate the median, first calculate n/2 where n is total frequency. Use cumulative frequency to find the median class containing the n/2-th value. Then apply linear interpolation using the formula: <em>Median = L + ((n/2 - F) / f) × w</em>, where L is the lower class boundary of the median class, F is cumulative frequency before the median class, f is the frequency of that class, and w is the class width. To find quartiles, calculate n/4 for the lower quartile and 3n/4 for the upper quartile, locate their classes similarly, and use the same interpolation method. The interquartile range is then Q3 minus Q1.</span>",
      "scaffoldPrompts": [
        "Start by finding the total frequency n.",
        "Calculate n/2, n/4, and 3n/4 to identify median and quartile positions.",
        "Locate these positions on the cumulative frequency table or curve.",
        "Determine the class intervals containing these positions.",
        "Apply linear interpolation for each measure using the known formula."
      ]
    }
  }
};