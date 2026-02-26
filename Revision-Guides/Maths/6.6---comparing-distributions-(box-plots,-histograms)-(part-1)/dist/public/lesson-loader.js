window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.6 - Comparing distributions (box plots, histograms) (Part 1)",
  "strapline": "Learn to compare data distributions using box plots and histograms by analysing measures of central tendency, spread, and shape.",
  "learningObjectives": [
    "Students should be able to compare two or more distributions using box plots, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should be able to compare two or more distributions using histograms, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should be able to analyse and interpret statistical diagrams to make comparative statements about datasets, justifying comparisons using appropriate statistical language (Maths 6.6)"
  ],
  "keyFormulas": [
    "Box Plot Key Values: Minimum, Q1 (Lower Quartile), Median (Q2), Q3 (Upper Quartile), Maximum",
    "Range = Maximum − Minimum",
    "Interquartile Range (IQR) = Q3 − Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='80' width='300' height='10' fill='#ccc' /><rect x='140' y='50' width='120' height='50' fill='#66ccff' stroke='#000' stroke-width='1' /><line x1='140' y1='50' x2='140' y2='100' stroke='#000' /><line x1='200' y1='50' x2='200' y2='100' stroke='#000' stroke-width='3' /><line x1='260' y1='50' x2='260' y2='100' stroke='#000' /><line x1='50' y1='85' x2='140' y2='85' stroke='#000' stroke-width='2' /><line x1='260' y1='85' x2='350' y2='85' stroke='#000' stroke-width='2' /><text x='50' y='105' font-family='sans-serif' font-size='12'>Minimum</text><text x='140' y='105' font-family='sans-serif' font-size='12'>Q1</text><text x='200' y='105' font-family='sans-serif' font-size='12' font-weight='bold'>Median</text><text x='260' y='105' font-family='sans-serif' font-size='12'>Q3</text><text x='350' y='105' font-family='sans-serif' font-size='12'>Maximum</text></svg>",
  "step1": {
    "title": "Concept: Understanding Box Plots",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A box plot (or box-and-whisker diagram) visually shows how data is spread by dividing it into five key values: minimum, lower quartile (Q1), median (Q2), upper quartile (Q3), and maximum. The box shows the middle 50% of data (the interquartile range or IQR), while the 'whiskers' extend to the minimum and maximum.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a box plot like a packed suitcase. The box is the main clothes packed in the middle (the middle 50% of your data), and the whiskers are the few extra items poking out at the edges (minimum and maximum values).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Box Plot Parts",
      "problem": "You have the following values of a box plot: Minimum = 10, Q1 = 20, Median = 30, Q3 = 40, Maximum = 50. Input these values step-by-step into the box plot parts.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the minimum value",
          "answer": "10",
          "feedback": "Correct. Minimum is the smallest data value."
        },
        {
          "id": "q2",
          "prompt": "Enter the lower quartile (Q1)",
          "answer": "20",
          "feedback": "Correct. Q1 is the 25th percentile."
        },
        {
          "id": "q3",
          "prompt": "Enter the median (Q2)",
          "answer": "30",
          "feedback": "Correct. Median divides the data into two halves."
        },
        {
          "id": "q4",
          "prompt": "Enter the upper quartile (Q3)",
          "answer": "40",
          "feedback": "Correct. Q3 is the 75th percentile."
        },
        {
          "id": "q5",
          "prompt": "Enter the maximum value",
          "answer": "50",
          "feedback": "Correct. Maximum is the largest data value."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Measures of Central Tendency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of central tendency tell us where the 'centre' of a dataset is. The median (middle value) is used often with box plots. The mean (average) and mode (most frequent value) are also central tendency measures but are shown more explicitly in histograms.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the central tendency as the average height of students in a class; it gives an idea of a typical height.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing Medians",
      "problem": "Dataset A has a median of 15 and Dataset B has a median of 20. Which dataset has a higher central tendency?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Type the median value for Dataset A",
          "answer": "15",
          "feedback": "Correct, Dataset A's median is 15."
        },
        {
          "id": "q2",
          "prompt": "Type the median value for Dataset B",
          "answer": "20",
          "feedback": "Correct, Dataset B's median is 20."
        },
        {
          "id": "q3",
          "prompt": "Which median is higher?",
          "answer": "20",
          "feedback": "Correct, Dataset B has a higher median, indicating the data tends to be higher."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Measures of Spread",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of spread describe how varied the data is. The range is the difference between maximum and minimum, while the interquartile range (IQR) is the difference between the upper quartile (Q3) and lower quartile (Q1). A larger spread means more variability.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of spread as the amount of space students take when sitting in a row. More spread means students are sitting farther apart.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Range and IQR",
      "problem": "A box plot has Minimum = 12, Q1 = 18, Q3 = 27, Maximum = 35. Calculate the range and IQR.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the range (Maximum - Minimum)",
          "answer": "23",
          "feedback": "Correct. 35 - 12 = 23"
        },
        {
          "id": "q2",
          "prompt": "Calculate the interquartile range (Q3 - Q1)",
          "answer": "9",
          "feedback": "Correct. 27 - 18 = 9"
        }
      ]
    }
  },
  "step4": {
    "title": "Interpretation: Comparing Box Plots",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When comparing two or more box plots, look for differences in their medians, IQRs, and overall range. Differences in median indicate which dataset tends to have larger or smaller values, while differences in spread show which is more variable.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine comparing two classes' test scores: a higher median means one class generally scored better, and a wider IQR means scores were more varied.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Compare Two Box Plots",
      "problem": "Dataset X has median 24, IQR 10; Dataset Y has median 28, IQR 6. Input which dataset has the higher median and which has the wider spread.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which dataset has the higher median?",
          "answer": "Y",
          "feedback": "Correct. Dataset Y median is 28 which is higher than 24."
        },
        {
          "id": "q2",
          "prompt": "Which dataset has the wider spread (IQR)?",
          "answer": "X",
          "feedback": "Correct. Dataset X IQR is 10 which is wider than 6."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Histograms and Distribution Shape",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Histograms display data grouping by frequency in intervals and help show distribution shape (skewness, symmetry). Comparing histograms includes identifying differences in central tendency (peak position), spread (width of bars), and shape (skew or modality).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a histogram like a skyline of a city where the shape and height of buildings represent how data is clustered or spread out.</p>"
    },
    "workedExample": {
      "title": "Interactive Histogram Comparison",
      "problem": "View the histogram below comparing two datasets. Answer questions about their distribution center and spread.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which dataset has the peak (highest bar) further right, indicating a higher typical value?",
          "answer": "Dataset B",
          "feedback": "Correct! Dataset B’s peak is further right showing higher central tendency."
        },
        {
          "id": "q2",
          "prompt": "Which dataset has wider spread based on bars covering more intervals?",
          "answer": "Dataset A",
          "feedback": "Correct! Dataset A’s bars cover a wider range of values."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='100' width='20' height='40' fill='#4d79ff'/><rect x='70' y='80' width='20' height='60' fill='#4d79ff'/><rect x='100' y='60' width='20' height='80' fill='#4d79ff'/><rect x='130' y='90' width='20' height='50' fill='#4d79ff'/><rect x='160' y='110' width='20' height='30' fill='#4d79ff'/><rect x='220' y='70' width='20' height='70' fill='#ff6666'/><rect x='250' y='100' width='20' height='40' fill='#ff6666'/><rect x='280' y='120' width='20' height='20' fill='#ff6666'/></svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Compare the two datasets shown by their box plots and histograms. Describe the differences in central tendency, spread, and shape using correct statistical language to support your answer.</span>",
      "hint": "Remember to mention median, IQR, range for box plots, and peak positions, spread width and skewness for histograms.",
      "mustHaveKeywords": ["median", "interquartile range", "range", "central tendency", "spread", "shape", "skewness"],
      "optionalKeywords": ["outliers", "modality"],
      "modelAnswer": "<span>The first dataset has a median of X which is higher/lower than the second dataset's median of Y, indicating a higher/lower central tendency. The IQR of the first dataset is A, which is wider/narrower than the second dataset's IQR of B, showing more/less variability. The range also supports this conclusion. The histograms confirm these observations by showing the peak bars are located further right/left for one dataset. Additionally, the first dataset's histogram is more symmetrical/skewed, while the second shows skewness towards...</span>",
      "scaffoldPrompts": ["Start by describing the medians for both datasets.", "Next compare the spread using range and IQR.", "Then analyse the histograms' shapes and central tendencies.", "Use statistical terminology throughout your answer."]
    }
  }
};