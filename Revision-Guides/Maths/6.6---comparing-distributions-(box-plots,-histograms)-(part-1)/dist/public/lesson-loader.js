window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.6 - Comparing distributions (box plots, histograms) (Part 1)",
  "strapline": "Learn how to compare datasets using box plots and histograms by analysing measures of central tendency, spread, and shape.",
  "learningObjectives": [
    "Students should be able to compare two or more distributions using box plots, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should be able to compare two or more distributions using histograms, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should be able to analyse and interpret statistical diagrams to make comparative statements about datasets, justifying comparisons using appropriate statistical language (Maths 6.6)"
  ],
  "keyFormulas": [
    "Range = Maximum − Minimum",
    "Interquartile Range (IQR) = Q3 − Q1",
    "Mean = Sum of values / Number of values"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg' aria-label='Example Box Plot showing min, Q1, median, Q3, max'><line x1='50' y1='100' x2='350' y2='100' stroke='#ccc' stroke-width='1'/><rect x='150' y='80' width='100' height='40' fill='#89CFF0' stroke='#333'/><line x1='150' y1='80' x2='150' y2='120' stroke='#333' stroke-width='2'/><line x1='250' y1='80' x2='250' y2='120' stroke='#333' stroke-width='2'/><line x1='200' y1='70' x2='200' y2='130' stroke='#E63946' stroke-width='3'/><line x1='100' y1='100' x2='150' y2='100' stroke='#333' stroke-width='2'/><line x1='250' y1='100' x2='300' y2='100' stroke='#333' stroke-width='2'/><circle cx='100' cy='100' r='4' fill='#1D3557'/><circle cx='300' cy='100' r='4' fill='#1D3557'/><text x='100' y='120' font-family='sans-serif' font-size='12' text-anchor='middle'>Min</text><text x='150' y='130' font-family='sans-serif' font-size='12' text-anchor='middle'>Q1</text><text x='200' y='70' font-family='sans-serif' font-size='12' font-weight='bold' text-anchor='middle'>Median</text><text x='250' y='130' font-family='sans-serif' font-size='12' text-anchor='middle'>Q3</text><text x='300' y='120' font-family='sans-serif' font-size='12' text-anchor='middle'>Max</text></svg>",
  "step1": {
    "title": "Concept: Understanding Box Plots",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>box plot</strong> is a diagram that displays the spread and centre of data using five key values: minimum, lower quartile (Q1), median (Q2), upper quartile (Q3), and maximum. The 'box' shows the middle 50% of the data (the interquartile range), and the 'whiskers' extend to the minimum and maximum values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a box plot like a packed lunch box. The box shows where most of your food (data) is, with the endpoints of the whiskers showing the smallest and largest items. The median is like the average-sized sandwich right in the middle.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying the Median from a Box Plot",
      "problem": "Look at the box plot below. Can you find the median value shown by the red line inside the box?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the value of the median position from the scale below the box plot (between 0 and 400):",
          "answer": "200",
          "feedback": "Correct! The median is the red line at 200."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Measures of Central Tendency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of central tendency describe the centre point of a dataset. The three main types are: <em>mean</em>, the average; <em>median</em>, the middle value when data is ordered; and <em>mode</em>, the most frequent value. When comparing datasets, the <strong>median</strong> is often easier to identify on box plots.</p>",
    "workedExample": {
      "title": "Worked Example: Finding the Median of a Dataset",
      "problem": "Given the data set: 3, 7, 7, 9, 12, find the median.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many numbers are in the data set?",
          "answer": "5",
          "feedback": "Correct. There are 5 numbers."
        },
        {
          "id": "q2",
          "prompt": "What is the middle number when the data is ordered?",
          "answer": "7",
          "feedback": "Correct. The middle number is 7."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Measures of Spread",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of spread tell us how spread out the data values are. The <strong>range</strong> is the difference between the maximum and minimum values. The <strong>interquartile range (IQR)</strong> is the difference between the upper quartile (Q3) and lower quartile (Q1), showing the spread of the middle 50% of the data.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Range and IQR",
      "problem": "From a given box plot, identify the minimum, Q1, Q3, and maximum values, then calculate the range and IQR.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the minimum value (left whisker end):",
          "answer": "50",
          "feedback": "Correct. Minimum is 50."
        },
        {
          "id": "q2",
          "prompt": "Enter the lower quartile (left side of the box):",
          "answer": "150",
          "feedback": "Correct. Q1 is 150."
        },
        {
          "id": "q3",
          "prompt": "Enter the upper quartile (right side of the box):",
          "answer": "250",
          "feedback": "Correct. Q3 is 250."
        },
        {
          "id": "q4",
          "prompt": "Enter the maximum value (right whisker end):",
          "answer": "350",
          "feedback": "Correct. Maximum is 350."
        },
        {
          "id": "q5",
          "prompt": "Calculate the range (max − min):",
          "answer": "300",
          "feedback": "Correct. Range = 350 − 50 = 300."
        },
        {
          "id": "q6",
          "prompt": "Calculate the interquartile range (Q3 − Q1):",
          "answer": "100",
          "feedback": "Correct. IQR = 250 − 150 = 100."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying Box Plots to Compare Distributions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When comparing two or more box plots, look at differences in median, range, and IQR. A higher median shows a dataset with larger centre values. Differences in IQR show which dataset has more variability in its middle 50%, and range shows overall variability.</p>",
    "workedExample": {
      "title": "Worked Example: Comparing Two Box Plots",
      "problem": "Look at two box plots below representing test scores for Class A and Class B. Use the medians and IQRs to decide which class performed better and which had more consistent scores.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the median score for Class A?",
          "answer": "220",
          "feedback": "Correct, median for Class A is 220."
        },
        {
          "id": "q2",
          "prompt": "What is the median score for Class B?",
          "answer": "180",
          "feedback": "Correct, median for Class B is 180."
        },
        {
          "id": "q3",
          "prompt": "Which class has a higher median? Type 'A' or 'B'.",
          "answer": "A",
          "feedback": "Correct. Class A has the higher median."
        },
        {
          "id": "q4",
          "prompt": "Which class shows a smaller IQR (more consistent scores)? Type 'A' or 'B'.",
          "answer": "B",
          "feedback": "Correct. Class B has the smaller IQR, so more consistent scores."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Understanding Histograms",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>histogram</strong> is a bar chart showing the frequency of data within intervals (bins). The height of each bar represents the number of data points in each bin, which helps visualise the shape, spread, and central tendency of the distribution.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' aria-label='Example Histogram with bars at different heights'><rect x='40' y='140' width='30' height='60' fill='#6699CC' /><rect x='80' y='110' width='30' height='90' fill='#6699CC' /><rect x='120' y='80' width='30' height='120' fill='#6699CC' /><rect x='160' y='90' width='30' height='110' fill='#6699CC' /><rect x='200' y='130' width='30' height='70' fill='#6699CC' /><rect x='240' y='160' width='30' height='40' fill='#6699CC' /><line x1='35' y1='200' x2='290' y2='200' stroke='#333' /><line x1='35' y1='40' x2='35' y2='200' stroke='#333' /><text x='55' y='210' font-family='sans-serif' font-size='12'>10-20</text><text x='95' y='210' font-family='sans-serif' font-size='12'>20-30</text><text x='135' y='210' font-family='sans-serif' font-size='12'>30-40</text><text x='175' y='210' font-family='sans-serif' font-size='12'>40-50</text><text x='215' y='210' font-family='sans-serif' font-size='12'>50-60</text><text x='255' y='210' font-family='sans-serif' font-size='12'>60-70</text><text x='10' y='60' font-family='sans-serif' font-size='12' transform='rotate(-90 15,60)'>Frequency</text></svg>",
    "workedExample": {
      "title": "Worked Example: Interpreting a Histogram",
      "problem": "Look at the histogram above. Which interval has the highest frequency?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the interval with the tallest bar (e.g., '30-40'):",
          "answer": "30-40",
          "feedback": "Correct. The 30-40 interval has the tallest bar."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "Compare the two given box plots and two histograms representing the scores of Group A and Group B in a maths test. Write a detailed explanation analysing the differences in their measures of central tendency, spread, and shape. Justify your answer using appropriate statistical language.",
      "hint": "Remember to mention median, range, interquartile range (IQR), and comment on the shape such as symmetry or skewness.",
      "mustHaveKeywords": ["median", "range", "interquartile range", "spread", "distribution", "shape"],
      "optionalKeywords": ["symmetry", "skewness", "frequency", "variability"],
      "modelAnswer": "<span>The median scores in the box plots show that Group A has a higher median than Group B, indicating Group A performed better. The interquartile range (IQR) for Group B is larger, suggesting their scores are more spread out, while Group A's scores are more consistent. The range for Group A is smaller, confirming less variability overall. The histograms reveal that Group A's scores are roughly symmetrical, while Group B's scores are skewed to the right with a longer tail towards higher scores. This affects the shape and indicates that while Group B has some high scorers, overall their scores are less centered than Group A.</span>",
      "scaffoldPrompts": [
        "Identify and compare the median values in both box plots.",
        "Calculate and compare the range and IQR for each group.",
        "Look at the shape of each histogram to identify symmetry or skewness.",
        "Summarise which group performed better and which was more consistent."
      ]
    }
  }
};