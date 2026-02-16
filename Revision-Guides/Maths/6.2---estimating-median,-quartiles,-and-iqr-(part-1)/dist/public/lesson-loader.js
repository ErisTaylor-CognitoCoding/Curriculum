window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR (Part 1)",
  "strapline": "Learn how to estimate key statistical measures from grouped frequency data using cumulative frequency and interpolation methods.",
  "learningObjectives": [
    "Students should be able to estimate the median from grouped frequency data using cumulative frequency methods (Maths 6.2)",
    "Students should be able to estimate the lower quartile, upper quartile, and interquartile range from grouped frequency data (Maths 6.2)",
    "Students should be able to use linear interpolation within class intervals to find statistical measures when exact data values are not available (Maths 6.2)"
  ],
  "keyFormulas": [
    "Median position = \\( \\frac{n}{2} \\), where n is total frequency",
    "Lower quartile position = \\( \\frac{n}{4} \\), Upper quartile position = \\( \\frac{3n}{4} \\)",
    "Interpolation formula: \\( \\text{Value} = L + \\left(\\frac{P - F}{f}\\right) \\times w \\), where:<br>- \\(L\\) is lower boundary of the class<br>- \\(P\\) is position (e.g. median position)<br>- \\(F\\) is cumulative frequency before class<br>- \\(f\\) is frequency of class<br>- \\(w\\) is class width"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='40' width='300' height='210' fill='#e8f4fc' stroke='#333' stroke-width='2'/><text x='200' y='20' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#1a1a1a'>Grouped Frequency Table with Cumulative Frequency</text><line x1='50' y1='230' x2='350' y2='230' stroke='#000' stroke-width='1'/><line x1='50' y1='230' x2='50' y2='40' stroke='#000' stroke-width='1'/><text x='90' y='60' font-family='sans-serif' font-size='14' fill='#000'>Class Interval</text><text x='250' y='60' font-family='sans-serif' font-size='14' fill='#000'>Frequency</text><text x='330' y='60' font-family='sans-serif' font-size='14' fill='#000'>Cumulative Frequency</text><text x='90' y='90' font-family='sans-serif' font-size='13' fill='#000'>10 - 20</text><text x='250' y='90' font-family='sans-serif' font-size='13' fill='#000'>5</text><text x='330' y='90' font-family='sans-serif' font-size='13' fill='#000'>5</text><text x='90' y='120' font-family='sans-serif' font-size='13' fill='#000'>20 - 30</text><text x='250' y='120' font-family='sans-serif' font-size='13' fill='#000'>8</text><text x='330' y='120' font-family='sans-serif' font-size='13' fill='#000'>13</text><text x='90' y='150' font-family='sans-serif' font-size='13' fill='#000'>30 - 40</text><text x='250' y='150' font-family='sans-serif' font-size='13' fill='#000'>12</text><text x='330' y='150' font-family='sans-serif' font-size='13' fill='#000'>25</text><text x='90' y='180' font-family='sans-serif' font-size='13' fill='#000'>40 - 50</text><text x='250' y='180' font-family='sans-serif' font-size='13' fill='#000'>5</text><text x='330' y='180' font-family='sans-serif' font-size='13' fill='#000'>30</text></svg>",
  "step1": {
    "title": "Concept: Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies in a grouped frequency table. It tells you how many data points lie below the upper boundary of each class interval.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling jars one by one. The first jar contains 5 marbles, the next 8, and so on. Cumulative frequency tells you the total marbles in all jars up to a certain point.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find Cumulative Frequency",
      "problem": "Given the frequency table:<br><ul><li>10-20: 5</li><li>20-30: 8</li><li>30-40: 12</li><li>40-50: 5</li></ul>Calculate the cumulative frequencies.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the cumulative frequency for the first class (10-20)?",
          "answer": "5",
          "feedback": "Correct. The cumulative frequency is the first frequency itself."
        },
        {
          "id": "q2",
          "prompt": "Add the frequency of the second class (8) to the previous cumulative frequency. What is the new cumulative frequency?",
          "answer": "13",
          "feedback": "Right! 5 + 8 = 13."
        },
        {
          "id": "q3",
          "prompt": "Add the frequency of the third class (12) to the previous cumulative frequency of 13. What is the new cumulative frequency?",
          "answer": "25",
          "feedback": "That's correct. 13 + 12 = 25."
        },
        {
          "id": "q4",
          "prompt": "Finally, add the last frequency (5) to 25. What cumulative frequency do you get?",
          "answer": "30",
          "feedback": "Well done! 25 + 5 = 30."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Median from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of the data, found by locating the position \\( n/2 \\) in cumulative frequency, then interpolating inside the class interval where this position lies.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Median Position",
      "problem": "Using the cumulative frequency table with total frequency \\( n=30 \\), find the median position and determine which class interval contains the median.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the median position \\( n/2 \\). What is it?",
          "answer": "15",
          "feedback": "Correct. \\( 30/2 = 15 \\)."
        },
        {
          "id": "q2",
          "prompt": "Identify the class interval where cumulative frequency first reaches or exceeds 15.",
          "answer": "30-40",
          "feedback": "Right. The cumulative frequency jumps from 13 to 25 at class 30-40, so median lies here."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Interpolation to Estimate Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Since exact data values within the median class aren’t known, we estimate the median using linear interpolation:</p><p>\\( \\text{Median} = L + \\left(\\frac{\\frac{n}{2} - F}{f} \\right) \\times w \\)</p><p>Where:<ul><li><strong>L</strong> = lower boundary of median class</li><li><strong>F</strong> = cumulative frequency before median class</li><li><strong>f</strong> = frequency of median class</li><li><strong>w</strong> = width of median class</li></ul></p>",
    "workedExample": {
      "title": "Worked Example: Calculate the Median Value",
      "problem": "Use the median class 30-40 with:<br>- \\( n=30 \\),<br>- cumulative frequency before median class \\( F=13 \\),<br>- frequency of median class \\( f=12 \\),<br>- class width \\( w=10 \\),<br>to find the median.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the lower boundary \\( L \\) of the median class 30-40?",
          "answer": "30",
          "feedback": "Correct, the class starts at 30."
        },
        {
          "id": "q2",
          "prompt": "Calculate \\( \\frac{n}{2} - F \\) = 15 - 13. What is the value?",
          "answer": "2",
          "feedback": "Good. 15 - 13 = 2."
        },
        {
          "id": "q3",
          "prompt": "Divide this by the frequency of the median class: \\( \\frac{2}{12} \\). What is this fraction (decimal value)?",
          "answer": "0.1667",
          "feedback": "Yes, \\( 2 ÷ 12 = 0.1667 \\) approximately."
        },
        {
          "id": "q4",
          "prompt": "Multiply by the class width \\( 0.1667 × 10 \\). What do you get?",
          "answer": "1.667",
          "feedback": "Correct, about 1.67."
        },
        {
          "id": "q5",
          "prompt": "Add this to the lower boundary: \\( 30 + 1.667 \\). What is the estimate for the median?",
          "answer": "31.67",
          "feedback": "Excellent! Estimated median is approximately 31.67."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Lower Quartile (Q1)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The lower quartile (Q1) is the value that divides the lowest 25% of the data from the rest, found by locating the position \\( n/4 \\) in the cumulative frequency and interpolating within that class.</p>",
    "workedExample": {
      "title": "Worked Example: Finding the Lower Quartile Class",
      "problem": "Using \\( n=30 \\), find the quartile position and identify the class interval containing Q1.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the position \\( n/4 \\). What is it?",
          "answer": "7.5",
          "feedback": "Correct, \\( 30 ÷ 4 = 7.5 \\)."
        },
        {
          "id": "q2",
          "prompt": "Which class interval contains this cumulative frequency position 7.5?",
          "answer": "20-30",
          "feedback": "Right! The cumulative frequency reaches 13 at 20-30, which includes 7.5."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Calculating Lower Quartile by Interpolation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Apply interpolation for Q1 using the formula:<br>\\( Q1 = L + \\left(\\frac{\\frac{n}{4} - F}{f} \\right) \\times w \\)</p>",
    "workedExample": {
      "title": "Worked Example: Compute Lower Quartile Estimate",
      "problem": "For Q1 with:<br>- class 20-30,<br>- lower boundary \\( L = 20 \\),<br>- cumulative frequency before class \\( F = 5 \\),<br>- frequency \\( f = 8 \\),<br>- class width \\( w = 10 \\),<br>calculate the estimated lower quartile.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate \\( n/4 - F = 7.5 - 5 \\). What is the answer?",
          "answer": "2.5",
          "feedback": "Correct, \\( 7.5 - 5 = 2.5 \\)."
        },
        {
          "id": "q2",
          "prompt": "Divide by frequency: \\( 2.5 ÷ 8 \\). What is the decimal value?",
          "answer": "0.3125",
          "feedback": "Yes, \\( 2.5 ÷ 8 = 0.3125 \\)."
        },
        {
          "id": "q3",
          "prompt": "Multiply by class width: \\( 0.3125 × 10 \\). What is the result?",
          "answer": "3.125",
          "feedback": "Exactly, 3.125."
        },
        {
          "id": "q4",
          "prompt": "Add this to the lower boundary: \\( 20 + 3.125 \\). What is the estimated value for Q1?",
          "answer": "23.125",
          "feedback": "Great! The estimated lower quartile is approximately 23.13."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given the grouped frequency table below:<br><br><table border='1' cellpadding='5' cellspacing='0'><tr><th>Class Interval</th><th>Frequency</th></tr><tr><td>5 - 15</td><td>7</td></tr><tr><td>15 - 25</td><td>12</td></tr><tr><td>25 - 35</td><td>9</td></tr><tr><td>35 - 45</td><td>2</td></tr></table><br>Calculate:<br>1. The estimated median;<br>2. The estimated lower quartile (Q1);<br>3. The interquartile range (IQR).</span>",
      "hint": "First, calculate cumulative frequencies and total frequency. Use the interpolation formula for median and lower quartile. Then find IQR by subtracting Q1 from Q3.",
      "mustHaveKeywords": ["cumulative frequency", "interpolation", "median position", "quartile position", "interquartile range"],
      "optionalKeywords": ["class width", "frequency", "lower boundary"],
      "modelAnswer": "<span>Step 1: Calculate cumulative frequencies and total frequency (n=30).<br>Step 2: Median position = n/2 = 15; locate median class.<br>Step 3: Interpolate using formula to estimate median.<br>Step 4: Lower quartile position = n/4 = 7.5; locate quartile class and interpolate.<br>Step 5: Upper quartile position = 3n/4 = 22.5; locate quartile class and interpolate.<br>Step 6: Calculate IQR = Q3 − Q1.</span>",
      "scaffoldPrompts": [
        "Calculate cumulative frequencies for the data.",
        "Find the class containing the median using the median position.",
        "Use interpolation formula to estimate median value.",
        "Calculate position and locate Q1, then interpolate to estimate it.",
        "Calculate position and locate Q3, then interpolate to estimate it.",
        "Find IQR = Q3 - Q1."
      ]
    }
  }
};