window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR",
  "strapline": "Learn how to estimate key measures of central tendency and spread from grouped frequency tables using position formulas and interpolation.",
  "learningObjectives": [
    "Students should be able to estimate the median from a grouped frequency table using the position formula n/2 (Maths 6.2)",
    "Students should be able to estimate the lower quartile (Q1) and upper quartile (Q3) from grouped frequency tables using positions n/4 and 3n/4 respectively (Maths 6.2)",
    "Students should be able to calculate the interquartile range (IQR) as the difference between the upper and lower quartiles and understand its use as a measure of spread (Maths 6.2)"
  ],
  "keyFormulas": [
    "Position of median = n/2",
    "Position of Q1 = n/4",
    "Position of Q3 = 3n/4",
    "Interquartile Range (IQR) = Q3 - Q1",
    "Median / Quartile estimate = Lower boundary + \\left( \\frac{(Position - Cumulative frequency before class)}{Frequency of class} \\right) \\times Class width"
  ],
  "diagramHtml": "<svg viewBox='0 0 420 260' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='40' width='380' height='160' fill='#f9f9f9' stroke='#444' stroke-width='2'/><text x='210' y='20' font-family='Arial' font-size='16' text-anchor='middle' fill='#333'>Grouped Frequency Table</text><line x1='60' y1='200' x2='360' y2='200' stroke='#666' stroke-width='1'/><text x='80' y='190' font-family='Arial' font-size='12'>Class Intervals</text><text x='320' y='190' font-family='Arial' font-size='12'>Frequency</text><text x='80' y='150' font-family='Arial' font-size='14'>10 - 20</text><text x='80' y='130' font-family='Arial' font-size='14'>20 - 30</text><text x='80' y='110' font-family='Arial' font-size='14'>30 - 40</text><text x='80' y='90' font-family='Arial' font-size='14'>40 - 50</text><text x='320' y='150' font-family='Arial' font-size='14'>5</text><text x='320' y='130' font-family='Arial' font-size='14'>8</text><text x='320' y='110' font-family='Arial' font-size='14'>12</text><text x='320' y='90' font-family='Arial' font-size='14'>10</text><line x1='150' y1='190' x2='150' y2='50' stroke='#bbb' stroke-dasharray='4 2'/><line x1='225' y1='190' x2='225' y2='50' stroke='#bbb' stroke-dasharray='4 2'/><text x='150' y='230' font-family='Arial' font-size='12' text-anchor='middle'>Median position</text><text x='225' y='230' font-family='Arial' font-size='12' text-anchor='middle'>Quartile positions</text></svg>",
  "step1": {
    "title": "Understanding Grouped Frequency Tables",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>grouped frequency table</strong> presents continuous data divided into intervals (called classes), with each interval showing how many data points fall within it (frequency). This format helps summarise large datasets, making it easier to analyse.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of grouped data as sorting a box of mixed pencils by length into groups (e.g., 10-20 cm, 20-30 cm). The frequency is how many pencils fall into each length range.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Frequency Classes",
      "problem": "Here is part of a grouped frequency table of students' test scores:<br><br>10-20: 5 students<br>20-30: 8 students<br>30-40: 12 students<br>40-50: 10 students<br><br>What is the total number of students (n)?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Add the frequencies: 5 + 8 + 12 + 10 = ?",
          "answer": "35",
          "feedback": "Correct. The total number of students is 35."
        }
      ]
    }
  },
  "step2": {
    "title": "Estimating the Median from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>median</strong> is the middle value in ordered data. For grouped data, calculate the position <em>n/2</em>, find which class contains this position, and then interpolate within that class to estimate the median.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine lining students in order by height; the median is the one in the middle. If grouped by height intervals, we find the interval containing the middle student and estimate their exact height within that interval.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Median Position",
      "problem": "Given the total number of students n = 35, use the formula to find the median position.",
      "questions": [
        {
          "id": "q2",
          "prompt": "Calculate n/2 = ?",
          "answer": "17.5",
          "feedback": "Correct. The median is between the 17th and 18th student."
        }
      ]
    }
  },
  "step3": {
    "title": "Locating the Median Class",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use cumulative frequency to find which class contains the median position (17.5). Add frequencies until the cumulative frequency is equal to or just exceeds the median position.</p>",
    "workedExample": {
      "title": "Worked Example: Cumulative Frequencies",
      "problem": "Find the cumulative frequencies and identify the median class for median position 17.5 using:<br>Class intervals & frequencies:<br>10-20: 5<br>20-30: 8<br>30-40: 12<br>40-50: 10",
      "questions": [
        {
          "id": "q3",
          "prompt": "Cumulative frequency after 10-20: 5",
          "answer": "5",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Cumulative frequency after 20-30 (5 + 8): ?",
          "answer": "13",
          "feedback": "Correct."
        },
        {
          "id": "q5",
          "prompt": "Cumulative frequency after 30-40 (13 + 12): ?",
          "answer": "25",
          "feedback": "Correct."
        },
        {
          "id": "q6",
          "prompt": "Which class contains the median position 17.5 (cumulative frequency just exceeding 17.5)?",
          "answer": "30-40",
          "feedback": "Correct. The median class is 30-40."
        }
      ]
    }
  },
  "step4": {
    "title": "Estimating the Median Value Using Interpolation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the formula:<br><em>Median ≈ Lower boundary of median class + \\left( \\frac{(n/2 - cumulative frequency before median class)}{frequency of median class} \\right) × class width</em></p>",
    "workedExample": {
      "title": "Worked Example: Median Calculation",
      "problem": "Given:<br>Median class: 30-40<br>Lower boundary (L) = 30<br>Cumulative frequency before class = 13<br>Frequency of class = 12<br>Class width = 10<br>Calculate the estimated median.",
      "questions": [
        {
          "id": "q7",
          "prompt": "Calculate numerator (n/2 - cumulative frequency before class): 17.5 - 13 = ?",
          "answer": "4.5",
          "feedback": "Correct."
        },
        {
          "id": "q8",
          "prompt": "Calculate fraction: 4.5 / 12 = ?",
          "answer": "0.375",
          "feedback": "Correct."
        },
        {
          "id": "q9",
          "prompt": "Multiply by class width: 0.375 × 10 = ?",
          "answer": "3.75",
          "feedback": "Correct."
        },
        {
          "id": "q10",
          "prompt": "Add to lower boundary: 30 + 3.75 = ?",
          "answer": "33.75",
          "feedback": "Correct. The estimated median is 33.75."
        }
      ]
    }
  },
  "step5": {
    "title": "Estimating Quartiles (Q1 and Q3)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower quartile (Q1)</strong> is the value at position <em>n/4</em>, and the <strong>upper quartile (Q3)</strong> is at position <em>3n/4</em>. Estimate each by finding their positions, locating corresponding classes using cumulative frequency, then interpolating.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Q1 and locate class",
      "problem": "Using n = 35, find Q1 position and identify its class.<br>Frequencies: 10-20:5, 20-30:8, 30-40:12, 40-50:10",
      "questions": [
        {
          "id": "q11",
          "prompt": "Calculate n/4 = ?",
          "answer": "8.75",
          "feedback": "Correct."
        },
        {
          "id": "q12",
          "prompt": "Locate class where cumulative frequency just exceeds 8.75:<br>Cumulative frequencies are 5, 13, 25, 35. Which class?",
          "answer": "20-30",
          "feedback": "Correct. Q1 class = 20-30."
        }
      ]
    }
  },
  "step6": {
    "title": "Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>interquartile range (IQR)</strong> measures spread by subtracting the lower quartile from the upper quartile: <em>IQR = Q3 - Q1</em>. It shows the range of the middle 50% of data, helping to understand variability.</p>",
    "workedExample": {
      "title": "Worked Example: Estimating IQR",
      "problem": "You estimated:<br>Q1 ≈ 23.5<br>Q3 ≈ 38.75<br>Calculate the IQR.",
      "questions": [
        {
          "id": "q13",
          "prompt": "Subtract Q1 from Q3: 38.75 - 23.5 = ?",
          "answer": "15.25",
          "feedback": "Correct. The IQR is 15.25."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A grouped frequency table of daily study hours for 40 students is below:<br><br>Hours | Frequency<br>0-2 | 6<br>2-4 | 10<br>4-6 | 12<br>6-8 | 8<br>8-10 | 4<br><br>Estimate the median, lower quartile (Q1), upper quartile (Q3), and the interquartile range (IQR) of the study hours.</span>",
      "hint": "Calculate total frequency n first. Use position formulas n/2, n/4, and 3n/4 to find positions. Determine median, Q1, and Q3 classes using cumulative frequencies and interpolate within classes.",
      "mustHaveKeywords": ["grouped frequency table", "cumulative frequency", "interpolation", "median", "quartiles", "IQR"],
      "optionalKeywords": ["measure of spread", "position formula", "class width"],
      "modelAnswer": "<span>First, total frequency n = 40.<br>Median position = 40/2 = 20<br>Q1 position = 40/4 = 10<br>Q3 position = 3×40/4 = 30<br><br>Calculate cumulative frequencies:<br>0-2: 6<br>2-4: 16 (6 + 10)<br>4-6: 28 (16 + 12)<br>6-8: 36 (28 + 8)<br>8-10: 40 (36 + 4)<br><br>Median class is 4-6 (since 28 ≥ 20).<br>Q1 class is 2-4 (since 16 ≥ 10).<br>Q3 class is 6-8 (since 36 ≥ 30).<br><br>Use interpolation formula for each:<br>Median ≈ 4 + ((20 - 16)/12) × 2 = 4 + (4/12)×2 = 4 + 0.67 = 4.67 hours<br>Q1 ≈ 2 + ((10 - 6)/10) × 2 = 2 + (4/10)×2 = 2 + 0.8 = 2.8 hours<br>Q3 ≈ 6 + ((30 - 28)/8) × 2 = 6 + (2/8)×2 = 6 + 0.5 = 6.5 hours<br><br>Interquartile range IQR = Q3 - Q1 = 6.5 - 2.8 = 3.7 hours<br><br>This means the middle 50% of students study between approximately 2.8 and 6.5 hours, with a spread of 3.7 hours.</span>",
      "scaffoldPrompts": [
        "Step 1: Calculate total frequency n.",
        "Step 2: Find median, Q1, and Q3 positions.",
        "Step 3: Calculate cumulative frequencies.",
        "Step 4: Identify the classes for median, Q1, and Q3.",
        "Step 5: Use interpolation to estimate values.",
        "Step 6: Calculate the IQR as the difference between Q3 and Q1."
      ]
    }
  }
};