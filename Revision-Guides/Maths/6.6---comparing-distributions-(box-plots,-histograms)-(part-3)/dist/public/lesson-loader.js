window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.6 - Comparing distributions (box plots, histograms) (Part 3)",
  "strapline": "Learn to compare and interpret data distributions using box plots and histograms by identifying differences in central tendency, spread, and shape.",
  "learningObjectives": [
    "Students should be able to compare two or more distributions using box plots and histograms, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should be able to analyse and interpret visual representations to make comparative statements about datasets, such as which distribution has a greater median, larger range, or more skewed shape (Maths 6.6)",
    "Students should be able to draw conclusions from statistical diagrams and justify their comparisons using appropriate mathematical vocabulary related to distribution characteristics (Maths 6.6)"
  ],
  "keyFormulas": [
    "Median = Middle value when data is ordered",
    "Range = Maximum value - Minimum value",
    "Interquartile Range (IQR) = Q3 - Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='150' text-anchor='middle' font-family='sans-serif' font-size='16' fill='#333'>Box plot and histogram comparison</text></svg>",
  "step1": {
    "title": "Concept: Understanding Measures of Central Tendency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of central tendency show us a 'typical' value of a dataset. The median is the middle value when data is ordered. The mean is the average, and the mode is the most frequent value. In box plots, the median is represented by the line inside the box.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine scores of students on a test. The median is like the student in the middle if you lined them up by score, showing a typical performance.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying the Median from a Box Plot",
      "problem": "Given a box plot with the median line at 45, identify the median value.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What does the line inside the box represent?",
          "answer": "median",
          "feedback": "Correct. The line inside the box shows the median."
        },
        {
          "id": "q2",
          "prompt": "Identify the median value from the box plot if the line is at 45.",
          "answer": "45",
          "feedback": "Correct. The median value is 45."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Measures of Spread in Distributions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of spread tell us how data values are spread out or dispersed. The range is difference between the maximum and minimum values. The interquartile range (IQR) measures the spread of the middle 50% of data and is Q3 minus Q1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you think of students’ test scores again, 'spread' tells you how varied the scores are — whether most are close together or very different.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Range and IQR from a Box Plot",
      "problem": "Calculate the range and IQR from a box plot where minimum = 20, Q1 = 35, median = 50, Q3 = 65, maximum = 80.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the range (maximum - minimum)",
          "answer": "60",
          "feedback": "Correct. Range = 80 - 20 = 60."
        },
        {
          "id": "q2",
          "prompt": "Calculate the interquartile range (IQR = Q3 - Q1)",
          "answer": "30",
          "feedback": "Correct. IQR = 65 - 35 = 30."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding Distribution Shape",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The shape of a distribution can be symmetric, positively skewed (longer tail to the right), or negatively skewed (longer tail to the left). This helps describe how values are distributed across the dataset.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the age of moviegoers. If most are young but a few are much older, the distribution might be positively skewed (tail to the right).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Determining Skewness from a Histogram",
      "problem": "Look at a histogram with a tail stretching to higher values on the right side. What type of skew does this show?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the distribution symmetric, positively skewed, or negatively skewed?",
          "answer": "positively skewed",
          "feedback": "Correct. A tail to the right shows positive skew."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Comparison: Medians and Range between Two Box Plots",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When comparing box plots, it's important to analyse medians to find which dataset tends to have higher typical values. Next, compare ranges and IQRs to understand variability.</p>",
    "workedExample": {
      "title": "Worked Example: Compare Two Box Plots",
      "problem": "Box plot A median = 55, range = 40; Box plot B median = 60, range = 30. Which dataset has a higher typical value and which has greater spread?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which dataset has the higher median?",
          "answer": "B",
          "feedback": "Correct. Box plot B has median 60, higher than 55."
        },
        {
          "id": "q2",
          "prompt": "Which dataset has the larger range?",
          "answer": "A",
          "feedback": "Correct. Box plot A has range 40, larger than 30."
        }
      ]
    }
  },
  "step5": {
    "title": "Analyzing Histograms: Comparing Shape and Spread",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When comparing histograms, look at the shape (symmetry or skewness), the spread (width of bars with data), and location of peaks to compare the distributions.</p>",
    "workedExample": {
      "title": "Worked Example: Interpret Two Histograms",
      "problem": "Histogram 1 is symmetric with two peaks; Histogram 2 is skewed left. Which histogram is more symmetric? Which has more skew?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which histogram is symmetric?",
          "answer": "1",
          "feedback": "Correct. Histogram 1 is symmetric."
        },
        {
          "id": "q2",
          "prompt": "Which histogram is skewed left (negatively skewed)?",
          "answer": "2",
          "feedback": "Correct. Histogram 2 is negatively skewed."
        }
      ]
    }
  },
  "step6": {
    "title": "Drawing Conclusions and Justifying Comparisons",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use appropriate mathematical vocabulary to justify comparisons like ‘median’, ‘range’, ‘IQR’, and ‘skewness’ when describing differences between distributions.</p>",
    "workedExample": {
      "title": "Worked Example: Justify Comparing Two Distributions",
      "problem": "Two box plots show medians of 45 and 60, with ranges 20 and 15. Write a sentence comparing them using correct terms.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write a comparative statement including median and range.",
          "answer": "",
          "feedback": "Try to include which median is greater and which range is wider."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the line inside the box on a box plot represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Range</span>",
            "isCorrect": false,
            "explanation": "The range is the spread from minimum to maximum, not the line."
          },
          {
            "id": "b",
            "label": "<span>Median</span>",
            "isCorrect": true,
            "explanation": "Correct. The line inside the box represents the median."
          },
          {
            "id": "c",
            "label": "<span>Mean</span>",
            "isCorrect": false,
            "explanation": "The mean is not shown as a line inside the box plot."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which of the following shows a positively skewed distribution?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>A distribution with a tail extending to the right</span>",
            "isCorrect": true,
            "explanation": "Correct. Positive skew means the tail extends to higher values on the right."
          },
          {
            "id": "b",
            "label": "<span>A distribution with a tail extending to the left</span>",
            "isCorrect": false,
            "explanation": "A tail on the left indicates negative skew."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the middle value of an ordered dataset and appears as a line inside a box plot.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "mean",
                "label": "mean",
                "isCorrect": false,
                "feedback": "Try again. The mean is the average, not shown as a line inside the box."
              },
              {
                "value": "median",
                "label": "median",
                "isCorrect": true,
                "feedback": "Correct! The median is the middle value shown as a line inside the box plot."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> measures the spread between the minimum and maximum values in a dataset.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "interquartile range",
                "label": "interquartile range",
                "isCorrect": false,
                "feedback": "Try again. The interquartile range is Q3 minus Q1."
              },
              {
                "value": "range",
                "label": "range",
                "isCorrect": true,
                "feedback": "Correct! The range is max minus min."
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Compare the two distributions shown by the box plots and histograms provided. Discuss differences in their median, range, interquartile range, and shape. Use appropriate mathematical vocabulary to justify your comparison.</span>",
      "hint": "Remember to describe median and spread using numbers from the graphs, and mention whether the distributions are symmetric or skewed.",
      "mustHaveKeywords": ["median", "range", "interquartile range", "skewed", "symmetric", "distribution"],
      "optionalKeywords": ["spread", "shape", "centre", "variability"],
      "modelAnswer": "<span>The first distribution has a median of X, which is higher/lower than the second distribution’s median of Y. The range of the first is A, compared to B for the second, showing that the data in the first is more/less spread out. The IQR of the first is C, indicating that the middle 50% of the data is more/less dispersed than in the second distribution where the IQR is D. Looking at shape, the first distribution is symmetric/positively skewed/negatively skewed, while the second distribution is ... This suggests differences in how the data values are concentrated and dispersed in each dataset.</span>",
      "scaffoldPrompts": [
        "Identify the median in each distribution.",
        "Calculate range and IQR for each.",
        "Describe the shape of each distribution.",
        "Use these observations to compare and contrast."
      ]
    }
  }
};