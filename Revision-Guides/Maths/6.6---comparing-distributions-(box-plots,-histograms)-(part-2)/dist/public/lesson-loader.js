window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.6 - Comparing distributions (box plots, histograms) (Part 2)",
  "strapline": "Learn to compare multiple data distributions by analysing box plots and histograms using key statistical measures.",
  "learningObjectives": [
    "Students should be able to compare two or more distributions using box plots and histograms, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should be able to analyse and interpret statistical diagrams to make comparative statements about datasets using appropriate statistical language (Maths 6.6)",
    "Students should be able to draw conclusions from visual representations of data and justify their comparisons (Maths 6.6)"
  ],
  "keyFormulas": [
    "Median = The middle value when data is ordered",
    "Range = Maximum value − Minimum value",
    "IQR = Q3 − Q1 (Interquartile Range: middle 50% spread)"
  ],
  "diagramHtml": "<svg viewBox='0 0 450 250' xmlns='http://www.w3.org/2000/svg'>  <!-- Two boxplots side by side -->  <rect x='50' y='60' width='100' height='30' fill='#8fbce6' stroke='#333'/>  <line x1='100' y1='40' x2='100' y2='90' stroke='#333' stroke-width='2'/>  <line x1='75' y1='75' x2='125' y2='75' stroke='#333' stroke-width='2'/>  <circle cx='110' cy='75' r='4' fill='#1f77b4' />  <text x='75' y='120' font-family='Arial' font-size='14' fill='#333'>Boxplot A</text>  <rect x='220' y='40' width='120' height='50' fill='#f28e2b' stroke='#333'/>  <line x1='250' y1='20' x2='250' y2='90' stroke='#333' stroke-width='2'/>  <line x1='245' y1='75' x2='275' y2='75' stroke='#333' stroke-width='2'/>  <circle cx='260' cy='75' r='4' fill='#d55e00' />  <text x='235' y='120' font-family='Arial' font-size='14' fill='#333'>Boxplot B</text>  <!-- Histogram bars -->  <rect x='50' y='180' width='30' height='40' fill='#6a994e' />  <rect x='85' y='140' width='30' height='80' fill='#6a994e' />  <rect x='120' y='120' width='30' height='100' fill='#6a994e' />  <rect x='155' y='160' width='30' height='60' fill='#6a994e' />  <rect x='190' y='180' width='30' height='40' fill='#6a994e' />  <text x='100' y='230' font-family='Arial' font-size='14' fill='#333'>Histogram A</text>  <rect x='270' y='190' width='30' height='30' fill='#b22222' />  <rect x='305' y='140' width='30' height='80' fill='#b22222' />  <rect x='340' y='110' width='30' height='110' fill='#b22222' />  <rect x='375' y='130' width='30' height='90' fill='#b22222' />  <rect x='410' y='180' width='30' height='40' fill='#b22222' />  <text x='320' y='230' font-family='Arial' font-size='14' fill='#333'>Histogram B</text></svg>",
  "step1": {
    "title": "Understanding Measures of Central Tendency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of central tendency describe the middle or typical value in a dataset. The main measures are median, mean, and mode. When comparing two distributions, identifying which has the higher or lower central value provides key insights.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the median like the middle seat in a row of chairs; it tells you the position right in the center.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Median",
      "problem": "Dataset A: 4, 7, 9, 10, 15. Dataset B: 3, 6, 8, 14, 14.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the median of Dataset A? (Middle value when data ordered)",
          "answer": "9",
          "feedback": "Correct! 9 is the middle value."
        },
        {
          "id": "q2",
          "prompt": "What is the median of Dataset B?",
          "answer": "8",
          "feedback": "Correct! 8 is the middle value."
        },
        {
          "id": "q3",
          "prompt": "Which dataset has the higher median?",
          "answer": "Dataset A",
          "feedback": "Correct! Dataset A has a higher median of 9."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Measures of Spread",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of spread describe how the data values are spread out. Key measures include the range (difference between max and min), interquartile range (IQR – middle 50% range), and standard deviation.</p><p>When comparing distributions, a wider spread means more variability.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine people standing in a line: a tight cluster means small spread; people far apart mean a large spread.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Range and IQR",
      "problem": "Dataset A: 4, 7, 9, 10, 15. Dataset B: 3, 6, 8, 14, 14.",
      "questions": [
        {
          "id": "q4",
          "prompt": "Calculate the range of Dataset A.",
          "answer": "11",
          "feedback": "Correct! Range = 15 - 4 = 11."
        },
        {
          "id": "q5",
          "prompt": "Calculate the range of Dataset B.",
          "answer": "11",
          "feedback": "Correct! Range = 14 - 3 = 11."
        },
        {
          "id": "q6",
          "prompt": "What is the IQR of Dataset A? (Q3 - Q1; Q1 = 7, Q3 = 10)",
          "answer": "3",
          "feedback": "Correct! IQR = 10 - 7 = 3."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Distribution Shape",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The shape of the distribution tells us how data values are arranged. It can be symmetrical, positively skewed (long tail right), negatively skewed (long tail left), or have outliers that are unusually high or low values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a distribution's shape like the silhouette of a mountain: is it tall and centered (symmetrical), or does one side slope longer (skewed)?</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Skewness from Histograms",
      "problem": "Look at the two histograms below (Histogram A and Histogram B). Which one shows a positive skew and which one is more symmetrical?",
      "questions": [
        {
          "id": "q7",
          "prompt": "Which histogram is positively skewed (tail longer on right)?",
          "answer": "Histogram B",
          "feedback": "Correct! Histogram B has a longer tail on the right."
        },
        {
          "id": "q8",
          "prompt": "Which histogram is symmetrical?",
          "answer": "Histogram A",
          "feedback": "Correct! Histogram A is approximately symmetrical."
        }
      ]
    }
  },
  "step4": {
    "title": "Comparing Box Plots for Central Tendency and Spread",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Box plots visually display median, quartiles, and spread. When comparing two box plots, you can quickly see differences in medians, the range, IQR, and spot outliers.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Box plots are like summary cards showing key stats: median (middle line), spread (length of the box and whiskers), and outliers (dots).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing Box Plots",
      "problem": "Look at Boxplot A and Boxplot B above. Identify which has the higher median and which has the greater spread.",
      "questions": [
        {
          "id": "q9",
          "prompt": "Which box plot has the higher median?",
          "answer": "Boxplot B",
          "feedback": "Correct! The median line in Boxplot B is higher."
        },
        {
          "id": "q10",
          "prompt": "Which box plot shows greater spread?",
          "answer": "Boxplot B",
          "feedback": "Correct! Boxplot B has a longer whisker length indicating more spread."
        }
      ]
    }
  },
  "step5": {
    "title": "Using Statistical Language to Compare Distributions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When describing differences between datasets, use clear statistical terms: mention measures of central tendency (median, mean), spread (range, IQR), shape (skewness), and presence of outliers.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Describing data is like giving a weather report: you mention the average temperature (central tendency), how much it fluctuates (spread), and if there are unusual spikes (outliers).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Writing a Comparative Statement",
      "problem": "Given Boxplot A (median 9, IQR 3) and Boxplot B (median 12, IQR 5 with an outlier), write a comparative statement using appropriate statistics vocabulary.",
      "questions": [
        {
          "id": "q11",
          "prompt": "State which distribution has the higher central value and justify.",
          "answer": "Boxplot B has a higher median of 12 compared to 9 in Boxplot A.",
          "feedback": "Correct! This indicates higher typical values in Boxplot B."
        },
        {
          "id": "q12",
          "prompt": "Compare the spread of the two distributions using IQR.",
          "answer": "Boxplot B has a wider IQR of 5, showing more variability than Boxplot A, which has an IQR of 3.",
          "feedback": "Correct! Boxplot B's data is more spread out."
        },
        {
          "id": "q13",
          "prompt": "Mention any outliers if present and their effect.",
          "answer": "Boxplot B has an outlier, indicating an unusually high value that could affect interpretation.",
          "feedback": "Correct! Outliers can skew average calculations."
        }
      ]
    }
  },
  "step6": {
    "title": "Interpreting Histograms: Shape and Comparative Statements",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Histograms show data frequency distribution. When comparing histograms, examine symmetry, skewness, modality (number of peaks), and spread. Use these to support comparative statements.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Histograms are like mountain profiles that show where data clusters and trails off.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing Two Histograms",
      "problem": "Observe Histogram A and Histogram B in the diagram: Histogram A is symmetric and shows one peak around 20-25. Histogram B has a peak near 15 but a longer tail towards higher values.",
      "questions": [
        {
          "id": "q14",
          "prompt": "Describe the shape of Histogram A.",
          "answer": "Symmetrical with one clear peak.",
          "feedback": "Correct! Histogram A is roughly bell-shaped."
        },
        {
          "id": "q15",
          "prompt": "Describe the shape of Histogram B.",
          "answer": "Positively skewed with a longer right tail.",
          "feedback": "Correct! Histogram B has a positive skew."
        },
        {
          "id": "q16",
          "prompt": "Which histogram suggests greater variability in the data and why?",
          "answer": "Histogram B, because of the longer tail and spread of values.",
          "feedback": "Correct! The right skew indicates wider data spread."
        }
      ]
    }
  },
  "step7": {
    "title": "Combined Comparison Practice: Box Plots and Histograms",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using both box plots and histograms together allows a fuller understanding of datasets. Box plots summarise quartiles and spread while histograms illustrate frequency and shape.</p>",
    "workedExample": {
      "title": "Worked Example: Holistic Data Comparison",
      "problem": "Using the diagrams provided, compare Distribution A and Distribution B considering median, spread, shape, and outliers.",
      "questions": [
        {
          "id": "q17",
          "prompt": "Identify which distribution has the higher median.",
          "answer": "Distribution B",
          "feedback": "Correct! Distribution B’s median is higher."
        },
        {
          "id": "q18",
          "prompt": "Identify which distribution has more spread.",
          "answer": "Distribution B",
          "feedback": "Correct! Distribution B shows longer whiskers and more spread in histogram bars."
        },
        {
          "id": "q19",
          "prompt": "Describe the shape of each distribution based on histograms.",
          "answer": "Distribution A is symmetrical; Distribution B is positively skewed.",
          "feedback": "Well done! This matches the histogram appearance."
        },
        {
          "id": "q20",
          "prompt": "Are there any outliers? If yes, which distribution and how can you tell?",
          "answer": "Yes, Distribution B has an outlier shown as a separate point on the box plot.",
          "feedback": "Correct! Outliers are indicated by dots outside whiskers."
        }
      ]
    }
  },
  "step8": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which measure of central tendency is least affected by outliers?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Mean</span>",
            "isCorrect": false,
            "explanation": "<span>Mean is affected by extreme values or outliers.</span>"
          },
          {
            "id": "b",
            "label": "<span>Median</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Median is resistant to outliers.</span>"
          },
          {
            "id": "c",
            "label": "<span>Mode</span>",
            "isCorrect": false,
            "explanation": "<span>Mode can be affected if outliers repeat frequently.</span>"
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>If a box plot shows a long whisker on the right side, what does this indicate?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Negative skew</span>",
            "isCorrect": false,
            "explanation": "<span>Long right whisker indicates positive skew, not negative.</span>"
          },
          {
            "id": "b",
            "label": "<span>Positive skew</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Long whisker on right suggests positive skew.</span>"
          },
          {
            "id": "c",
            "label": "<span>Symmetric distribution</span>",
            "isCorrect": false,
            "explanation": "<span>Symmetry would show roughly equal whisker lengths.</span>"
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the middle value of a dataset when the numbers are arranged in order.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "mean",
                "label": "mean",
                "isCorrect": false,
                "feedback": "Try again. The mean is the average, not the middle value."
              },
              {
                "value": "median",
                "label": "median",
                "isCorrect": true,
                "feedback": "Correct! Median is the middle value."
              },
              {
                "value": "mode",
                "label": "mode",
                "isCorrect": false,
                "feedback": "Try again. Mode is the most frequent value."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> describes the spread of the middle 50% of data.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "range",
                "label": "range",
                "isCorrect": false,
                "feedback": "Try again. Range is total spread."
              },
              {
                "value": "IQR",
                "label": "IQR",
                "isCorrect": true,
                "feedback": "Correct! IQR is interquartile range."
              }
            ]
          }
        ]
      }
    ]
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Compare the two datasets shown by box plots and histograms, describing differences in central tendency, spread, shape, and presence of outliers. Justify your answer with specific reference to the diagrams.</span>",
      "hint": "Remember to mention median, IQR or range, skewness, and any outliers shown. Use statistical language precisely.",
      "mustHaveKeywords": ["median", "spread", "skewness", "outlier", "compare", "justify"],
      "optionalKeywords": ["IQR", "range", "symmetrical", "positively skewed", "negatively skewed"],
      "modelAnswer": "<span>The median of Distribution B is higher than Distribution A, indicating higher typical values. Distribution B shows greater spread as its IQR and range are larger, which suggests more variability. The box plot for Distribution B also displays an outlier which shows an unusually high data point. The histogram of Distribution A appears symmetrical, whereas Distribution B is positively skewed with a tail extending to the right. Overall, Distribution B has higher central tendency, more spread, a positive skew, and an outlier, distinguishing it clearly from Distribution A.</span>",
      "scaffoldPrompts": ["Start by identifying the medians from the box plots.", "Then compare ranges and IQRs for spread.", "Next, describe the shape of histograms to identify skewness.", "Finally, mention any outliers and conclude your comparison."]
    }
  }
};