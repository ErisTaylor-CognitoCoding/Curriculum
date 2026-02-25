window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.6 - Comparing distributions (box plots, histograms) (Part 1)",
  "strapline": "Learn how to compare multiple data distributions using box plots and histograms by examining central tendency, spread, and shape.",
  "learningObjectives": [
    "Students should be able to compare two or more distributions using box plots, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should be able to compare two or more distributions using histograms, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should be able to analyse and interpret statistical diagrams to make comparative statements about datasets, justifying comparisons using appropriate statistical language (Maths 6.6)"
  ],
  "keyFormulas": [
    "Formula 1: Interquartile Range (IQR) = Q3 - Q1",
    "Formula 2: Range = Maximum - Minimum",
    "Reminder: Median divides data into two equal halves"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='100' fill='#f9f9f9' stroke='#333' /><line x1='125' y1='50' x2='125' y2='150' stroke='#007acc' stroke-width='3'/><line x1='275' y1='50' x2='275' y2='150' stroke='#007acc' stroke-width='3'/><rect x='125' y='80' width='150' height='40' fill='#00aaff' opacity='0.3'/><line x1='200' y1='80' x2='200' y2='120' stroke='#004466' stroke-width='2'/> <text x='200' y='75' font-family='sans-serif' font-size='14' text-anchor='middle'>Median</text><text x='100' y='170' font-family='sans-serif' font-size='12' text-anchor='middle'>Min</text><text x='300' y='170' font-family='sans-serif' font-size='12' text-anchor='middle'>Max</text></svg>",
  "step1": {
    "title": "Understanding Box Plots",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>box plot</strong> (or box-and-whisker diagram) visually summarises a dataset by showing five key values: <em>minimum</em>, <em>lower quartile (Q1)</em>, <em>median (Q2)</em>, <em>upper quartile (Q3)</em>, and <em>maximum</em>. The box represents the interquartile range (IQR) containing the middle 50% of data, while 'whiskers' extend to the minimum and maximum values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a team of runners lined up by finishing times. The box plot is like a summary photo showing where most runners finished (the box) and the slowest and fastest times (whiskers).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Elements of a Box Plot",
      "problem": "A box plot shows: Minimum = 10, Q1 = 15, Median = 20, Q3 = 25, Maximum = 30. Enter each key value one by one.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the minimum value?",
          "answer": "10",
          "feedback": "Correct! Minimum is the smallest value in the dataset."
        },
        {
          "id": "q2",
          "prompt": "What is the lower quartile (Q1)?",
          "answer": "15",
          "feedback": "Correct! Q1 marks the 25th percentile."
        },
        {
          "id": "q3",
          "prompt": "What is the median (Q2)?",
          "answer": "20",
          "feedback": "Well done! The median divides the dataset into two equal halves."
        },
        {
          "id": "q4",
          "prompt": "What is the upper quartile (Q3)?",
          "answer": "25",
          "feedback": "Correct! Q3 marks the 75th percentile."
        },
        {
          "id": "q5",
          "prompt": "What is the maximum value?",
          "answer": "30",
          "feedback": "Correct! Maximum is the largest value in the dataset."
        }
      ]
    }
  },
  "step2": {
    "title": "Measures of Central Tendency in Distributions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Central tendency refers to the typical or centre value of a dataset. The main measures are <strong>mean</strong>, <strong>median</strong>, and <strong>mode</strong>. When comparing box plots and histograms, the median or mean indicates where data values cluster.</p>",
    "workedExample": {
      "title": "Worked Example: Finding the Median",
      "problem": "Dataset A: [12, 18, 20, 25, 30]. Enter the median of this dataset.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the median value (middle number when ordered)?",
          "answer": "20",
          "feedback": "Correct! 20 is the middle value."
        }
      ]
    }
  },
  "step3": {
    "title": "Measures of Spread in Distributions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of spread describe the variability of the data. The <strong>range</strong> is the difference between maximum and minimum values. The <strong>interquartile range (IQR)</strong> is the difference between Q3 and Q1 and shows the spread of the middle 50% of data.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Range and IQR",
      "problem": "Given: Minimum = 8, Q1 = 15, Q3 = 25, Maximum = 30. Calculate the range and IQR step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the range (Maximum - Minimum)?",
          "answer": "22",
          "feedback": "Correct! 30 - 8 = 22."
        },
        {
          "id": "q2",
          "prompt": "What is the interquartile range (Q3 - Q1)?",
          "answer": "10",
          "feedback": "Well done! 25 - 15 = 10."
        }
      ]
    }
  },
  "step4": {
    "title": "Comparing Two Box Plots",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To compare two distributions using box plots, look at differences in median (central tendency), spread (IQR and range), and overall shape (symmetry, skewness). This helps identify which dataset has higher or more variable values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like comparing two classrooms' test scores: which class performed better on average (median), and which class had more consistent grades (spread).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing Two Box Plots",
      "problem": "Box Plot A: Median = 22, IQR = 8; Box Plot B: Median = 18, IQR = 12. Enter which box plot has the higher median and which has greater spread.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which box plot has the higher median?",
          "answer": "A",
          "feedback": "Correct! Box Plot A median is 22, higher than 18."
        },
        {
          "id": "q2",
          "prompt": "Which box plot has greater spread (IQR)?",
          "answer": "B",
          "feedback": "Correct! Box Plot B has an IQR of 12, greater than 8."
        }
      ]
    }
  },
  "step5": {
    "title": "Introduction to Histograms for Comparing Distributions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>histogram</strong> shows the distribution of data by grouping values into bins (intervals) on the x-axis and frequencies on the y-axis. When comparing histograms, look for differences in shapes, centre, and spread.</p>",
    "workedExample": {
      "title": "Worked Example: Interpreting Histogram Features",
      "problem": "Two histograms show exam scores for Group X and Group Y. Group X's scores cluster around 70, Group Y's scores spread from 50 to 90 more evenly. Answer questions about centre and spread.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which group has a higher central tendency (around higher scores)?",
          "answer": "X",
          "feedback": "Correct! Group X clusters around 70."
        },
        {
          "id": "q2",
          "prompt": "Which group has a wider spread of scores?",
          "answer": "Y",
          "feedback": "Correct! Group Y's scores spread evenly from 50 to 90."
        }
      ]
    }
  },
  "step6": {
    "title": "Analyzing and Interpreting Statistical Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To compare distributions accurately, use correct statistical language such as median, range, IQR, skewness, and refer specifically to features like outliers or clustering. This enables justified comparisons and deeper data insights.</p>",
    "workedExample": {
      "title": "Worked Example: Writing Comparative Statements",
      "problem": "Given two box plots: Plot 1 median = 25, IQR = 7; Plot 2 median = 20, IQR = 14. Write a comparative statement focusing on central tendency and spread. Type your response step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write a sentence comparing the medians.",
          "answer": "Plot 1 has a higher median than Plot 2",
          "feedback": "Good! You have identified the difference in central tendency."
        },
        {
          "id": "q2",
          "prompt": "Write a sentence comparing the spreads using IQR.",
          "answer": "Plot 2 has a greater spread than Plot 1 as its IQR is larger",
          "feedback": "Excellent! You've correctly described the difference in variability."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Compare the two distributions shown by these box plots and histograms. Describe differences in central tendency, spread, and shape. Use correct statistical terms in your explanation.</span>",
      "hint": "Remember to mention medians, IQRs, range, and any skewness if visible. Use phrases like 'higher median', 'greater spread', or 'more symmetric'.",
      "mustHaveKeywords": ["median", "interquartile range", "range", "spread", "central tendency", "distribution"],
      "optionalKeywords": ["skewness", "outlier", "shape"],
      "modelAnswer": "<span>The first distribution has a higher median, indicating a higher central tendency. Its interquartile range is smaller, which means the data is less spread out compared to the second distribution. The second distribution shows greater spread suggesting more variability. The shapes differ with the second appearing more skewed, while the first is fairly symmetric.</span>",
      "scaffoldPrompts": ["Identify the median in each plot", "Compare the IQR and range", "Describe overall shape and any asymmetry observed", "Use the terms central tendency and spread correctly"]
    }
  }
};