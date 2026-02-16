window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR (Part 2)",
  "strapline": "Learn to estimate median, quartiles, and interquartile range from grouped frequency data using cumulative frequencies and linear interpolation.",
  "learningObjectives": [
    "Students should be able to estimate the median from grouped frequency data using cumulative frequency methods (Maths 6.2)",
    "Students should be able to estimate the lower quartile, upper quartile, and interquartile range from grouped frequency data (Maths 6.2)",
    "Students should be able to use linear interpolation within class intervals to find statistical measures when exact data values are not available (Maths 6.2)"
  ],
  "keyFormulas": [
    "Median position = \\( \\frac{n}{2} \\)",
    "Linear interpolation formula: \\( L + \\left( \\frac{P - F}{f} \\right) \\times w \\)",
    "Interquartile Range (IQR) = Upper Quartile - Lower Quartile"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='320' height='230' fill='#f9f9f9' stroke='#333' stroke-width='2'/><line x1='80' y1='250' x2='80' y2='50' stroke='#555' stroke-width='2'/><line x1='80' y1='250' x2='360' y2='250' stroke='#555' stroke-width='2'/><text x='200' y='270' text-anchor='middle' font-family='sans-serif' font-size='14'>Class Intervals</text><text x='40' y='40' font-family='sans-serif' font-size='14' fill='#333'>Cumulative Frequency</text><line x1='100' y1='230' x2='100' y2='250' stroke='#333' stroke-width='2'/><line x1='140' y1='210' x2='140' y2='250' stroke='#333' stroke-width='2'/><line x1='180' y1='190' x2='180' y2='250' stroke='#333' stroke-width='2'/><line x1='220' y1='170' x2='220' y2='250' stroke='#333' stroke-width='2'/><line x1='260' y1='150' x2='260' y2='250' stroke='#333' stroke-width='2'/><circle cx='140' cy='210' r='5' fill='#1f77b4'/><circle cx='180' cy='190' r='5' fill='#1f77b4'/><circle cx='220' cy='170' r='5' fill='#1f77b4'/><polyline points='100,230 140,210 180,190 220,170 260,150' fill='none' stroke='#1f77b4' stroke-width='2'/><text x='130' y='230' font-family='sans-serif' font-size='12'>Class intervals</text><text x='90' y='245' font-family='sans-serif' font-size='12'>30-40</text><text x='130' y='245' font-family='sans-serif' font-size='12'>40-50</text><text x='170' y='245' font-family='sans-serif' font-size='12'>50-60</text></svg>",
  "step1": {
    "title": "Concept: Understanding Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to the upper boundary of each class interval. It helps identify the position of the median and quartiles in grouped data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling jars one after another with marbles, counting the total marbles after each jar. This is like cumulative frequency accumulating as you move through groups.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Cumulative Frequency",
      "problem": "Given class intervals with frequencies: 10, 15, 20, 25, calculate cumulative frequencies.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the cumulative frequency after the first class interval?",
          "answer": "10",
          "feedback": "Correct. After the first class, cumulative frequency equals the first frequency."
        },
        {
          "id": "q2",
          "prompt": "What is the cumulative frequency after the second class interval (10 + 15)?",
          "answer": "25",
          "feedback": "Correct. Sum of first two frequencies: 10 + 15 = 25."
        },
        {
          "id": "q3",
          "prompt": "What is the cumulative frequency after the third interval (10 + 15 + 20)?",
          "answer": "45",
          "feedback": "Correct. Adding the next frequency: 25 + 20 = 45."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Finding Median Position in Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To estimate the median, find the total number of data points (n), then calculate \\( \\frac{n}{2} \\) to locate the median's position using cumulative frequency.</p>",
    "workedExample": {
      "title": "Worked Example: Median Position",
      "problem": "A grouped dataset has a total frequency of 70. What is the position of the median?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate \\( n \\) (total frequency).",
          "answer": "70",
          "feedback": "Correct. Total frequency is 70."
        },
        {
          "id": "q2",
          "prompt": "Calculate the median position \\( \\frac{n}{2} \\).",
          "answer": "35",
          "feedback": "Correct. Median position is 35."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Identifying the Median Class Interval",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use cumulative frequency to determine which class interval contains the median position. This is the first class interval where cumulative frequency exceeds or equals \\( \\frac{n}{2} \\).</p>",
    "workedExample": {
      "title": "Worked Example: Locating Median Class",
      "problem": "With cumulative frequencies: 12, 28, 45, 60, 70, find the median class if \\( \\frac{n}{2} = 35 \\).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Look for the first cumulative frequency ≥ 35.",
          "answer": "45",
          "feedback": "Correct. 45 is the first cumulative frequency above 35."
        },
        {
          "id": "q2",
          "prompt": "Identify the class interval corresponding to this cumulative frequency (third interval).",
          "answer": "Third class interval",
          "feedback": "Correct. The median class is the third interval."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Using Linear Interpolation to Estimate Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Linear interpolation assumes data is evenly spread within the median class interval. It estimates the exact median value using the formula: <br> \\( \\text{Median} = L + \\left( \\frac{\\frac{n}{2} - F}{f} \\right) \\times w \\)</p><ul><li>\\( L \\) = lower boundary of median class</li><li>\\( F \\) = cumulative frequency before median class</li><li>\\( f \\) = frequency of median class</li><li>\\( w \\) = class width</li></ul>",
    "workedExample": {
      "title": "Worked Example: Calculating Median Using Interpolation",
      "problem": "Median class: 50–60, \\( L=50 \\), \\( F=28 \\), \\( f=17 \\), class width \\( w=10 \\), total frequency \\( n=70 \\). Find the median.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the median position \\( \\frac{n}{2} \\).",
          "answer": "35",
          "feedback": "Correct. 70 ÷ 2 = 35."
        },
        {
          "id": "q2",
          "prompt": "Calculate median using: \\( 50 + \\left( \\frac{35 - 28}{17} \\right) \\times 10 \\). What is the value of the fraction \\( \\frac{35 - 28}{17} \\)?",
          "answer": "0.4118",
          "feedback": "Correct. (35 - 28) ÷ 17 = 0.4118 approximately."
        },
        {
          "id": "q3",
          "prompt": "Calculate \\( 0.4118 \\times 10 \\).",
          "answer": "4.118",
          "feedback": "Correct. 0.4118 × 10 = 4.118."
        },
        {
          "id": "q4",
          "prompt": "Add to lower boundary: 50 + 4.118 = ?",
          "answer": "54.118",
          "feedback": "Correct! The estimated median is approximately 54.12."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Estimating Quartiles Using Interpolation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Lower quartile \\( (Q_1) \\) and upper quartile \\( (Q_3) \\) positions are calculated as \\( \\frac{n}{4} \\) and \\( \\frac{3n}{4} \\) respectively. Then use cumulative frequency and linear interpolation to estimate their values similarly to the median.</p>",
    "workedExample": {
      "title": "Worked Example: Finding \\( Q_1 \\) and \\( Q_3 \\)",
      "problem": "In dataset with \\( n=70 \\), find positions of \\( Q_1 \\) and \\( Q_3 \\). Using cumulative frequencies: 12, 28, 45, 60, 70; \\( Q_1 \\) lies in second interval 40-50 (\\( L=40 \\), \\( F=12 \\), \\( f=16 \\), \\( w=10 \\)), find \\( Q_1 \\).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate position of \\( Q_1 = \\frac{n}{4} \\).",
          "answer": "17.5",
          "feedback": "Correct. 70 ÷ 4 = 17.5."
        },
        {
          "id": "q2",
          "prompt": "Is 17.5 less than or equal to 28 cumulative frequency?",
          "answer": "Yes",
          "feedback": "Correct, so \\( Q_1 \\) is in the second class."
        },
        {
          "id": "q3",
          "prompt": "Calculate quartile using linear interpolation: \\( 40 + \\left( \\frac{17.5 - 12}{16} \\right) \\times 10 \\), what is the fraction?",
          "answer": "0.34375",
          "feedback": "Correct. (17.5 - 12) ÷ 16 = 0.34375."
        },
        {
          "id": "q4",
          "prompt": "Calculate \\( 0.34375 \\times 10 \\).",
          "answer": "3.4375",
          "feedback": "Correct. 0.34375 × 10 = 3.4375."
        },
        {
          "id": "q5",
          "prompt": "Add to lower boundary: 40 + 3.4375 = ?",
          "answer": "43.4375",
          "feedback": "Correct, \\( Q_1 \\approx 43.44 \\)."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A grouped frequency table shows the number of hours studied per week by 80 students:<br><br>Class Intervals: 0-10, 10-20, 20-30, 30-40, 40-50<br>Frequencies: 5, 15, 25, 20, 15<br><br>Estimate the median, lower quartile (Q1), upper quartile (Q3), and the interquartile range (IQR) from the data using cumulative frequency and linear interpolation.</span>",
      "hint": "Remember to calculate cumulative frequencies first, then determine positions of median and quartiles using n/2, n/4, and 3n/4. Use linear interpolation formula to estimate values within intervals.",
      "mustHaveKeywords": ["cumulative frequency", "linear interpolation", "median class", "quartile positions", "IQR calculation"],
      "optionalKeywords": ["class boundaries", "frequency", "class width"],
      "modelAnswer": "<span>First, calculate cumulative frequencies. Then find median position n/2 = 40, Q1 position n/4 = 20, Q3 position 3n/4 = 60. Identify the corresponding class intervals for median, Q1, and Q3. Use linear interpolation formula: <strong>Lower boundary + ((position - cumulative frequency before class) / frequency of class) × class width</strong> to estimate median, Q1, and Q3 values. Finally, calculate IQR = Q3 - Q1.</span>",
      "scaffoldPrompts": [
        "Calculate cumulative frequencies from given frequencies.",
        "Find positions of median, Q1, and Q3 based on total frequency.",
        "Identify the class intervals containing these positions.",
        "Apply linear interpolation to each class interval.",
        "Calculate the difference Q3 - Q1 for the IQR."
      ]
    }
  }
};