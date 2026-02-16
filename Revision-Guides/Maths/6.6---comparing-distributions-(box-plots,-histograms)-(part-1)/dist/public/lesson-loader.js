window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.6 - Comparing distributions (box plots, histograms) (Part 1)",
  "strapline": "Learn how to compare datasets by interpreting box plots and histograms, focusing on central tendency, spread, and shape.",
  "learningObjectives": [
    "Students should be able to compare two or more distributions using box plots and histograms, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should be able to analyse and interpret statistical diagrams to make comparative statements about datasets, such as which distribution has a greater median, larger range, or more skewed shape (Maths 6.6)",
    "Students should be able to draw conclusions from statistical diagrams and justify their comparisons using appropriate mathematical vocabulary related to distribution characteristics (Maths 6.6)"
  ],
  "keyFormulas": [
    "No specific formulas, focus on interpretation of measures: median, range, interquartile range (IQR), and identifying skewness.",
    "Range = Maximum value - Minimum value",
    "IQR = Q3 (upper quartile) - Q1 (lower quartile)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='150' text-anchor='middle' font-family='sans-serif' font-size='16'>Box Plot and Histogram Example</text></svg>",
  "step1": {
    "title": "Concept: Measures of Central Tendency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of central tendency describe the centre of a data distribution. The most common measures are the <strong>mean</strong>, <strong>median</strong>, and <strong>mode</strong>. In box plots, the median is marked with a line inside the box. For histograms, you can estimate the median based on cumulative frequencies or the shape symmetry.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the median as the middle point where half of your friends arrive before you and half after—it's the perfect 'middle' arrival time.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying the Median from a Box Plot",
      "problem": "Look at a box plot where the median line is at 55. What is the median value?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What number does the median line inside the box plot show?",
          "answer": "55",
          "feedback": "Correct. The median is 55 as shown by the line inside the box."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Measures of Spread",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of spread describe how data values are distributed around the centre. Key values include <strong>range</strong>, which is the difference between the maximum and minimum values, and <strong>interquartile range (IQR)</strong>, the width of the box in a box plot. These measures show how variable or consistent the data is.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a classroom where the range is how far apart the shortest and tallest students are, and the IQR is how tall most students are clustered around the middle.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Range and IQR from a Box Plot",
      "problem": "A box plot shows minimum = 40, lower quartile (Q1) = 50, upper quartile (Q3) = 70, and maximum = 90. Calculate the range and IQR.",
      "questions": [
        {
          "id": "q2",
          "prompt": "Calculate the range (max - min).",
          "answer": "50",
          "feedback": "Correct. The range is 90 - 40 = 50."
        },
        {
          "id": "q3",
          "prompt": "Calculate the interquartile range (Q3 - Q1).",
          "answer": "20",
          "feedback": "Correct. The IQR is 70 - 50 = 20."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Distribution Shape",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Distribution shape refers to how data values are arranged in terms of symmetry or skewness. A distribution can be <strong>symmetric</strong>, <strong>positively skewed</strong> (tail to the right), or <strong>negatively skewed</strong> (tail to the left). This affects the relative positions of the mean and median.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a seesaw perfectly balanced as symmetric, tipping right as positively skewed, and tipping left as negatively skewed.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Skewness from a Histogram",
      "problem": "You have a histogram with a longer tail extending towards higher values. Is this positively skewed, negatively skewed, or symmetric?",
      "questions": [
        {
          "id": "q4",
          "prompt": "Choose the skewness type based on the tail extending to the right.",
          "answer": "positively skewed",
          "feedback": "Correct. A tail extending to the right indicates positive skewness."
        }
      ]
    }
  },
  "step4": {
    "title": "Comparing Medians Using Box Plots",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To compare distributions, look at the median lines inside box plots. The distribution with the higher median has a higher central tendency. This helps identify which dataset generally has larger values.</p>",
    "workedExample": {
      "title": "Worked Example: Comparing Medians",
      "problem": "Box plot A has a median of 38 and box plot B has a median of 45. Which distribution has the higher median?",
      "questions": [
        {
          "id": "q5",
          "prompt": "Which median is greater, 38 or 45?",
          "answer": "45",
          "feedback": "Correct. 45 is greater, so box plot B has the higher median."
        }
      ]
    }
  },
  "step5": {
    "title": "Comparing Spread Using Range and IQR",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When comparing distributions, examine the range and IQR values. A larger range or IQR indicates more variability in the data. Use these to compare consistency and spread across datasets.</p>",
    "workedExample": {
      "title": "Worked Example: Comparing Spread",
      "problem": "Distribution A has range 60 and IQR 15; Distribution B has range 50 and IQR 25. Which has greater spread?",
      "questions": [
        {
          "id": "q6",
          "prompt": "Which distribution has the larger range?",
          "answer": "60",
          "feedback": "Correct. Distribution A has a larger range."
        },
        {
          "id": "q7",
          "prompt": "Which distribution has the larger IQR?",
          "answer": "25",
          "feedback": "Correct. Distribution B has a larger IQR."
        },
        {
          "id": "q8",
          "prompt": "Does this mean Distribution A or B is more variable overall?",
          "answer": "It depends",
          "feedback": "Correct. Different measures show different spread characteristics."
        }
      ]
    }
  },
  "step6": {
    "title": "Analysing and Interpreting Distribution Shape",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the shape of box plots and histograms to describe skewness. Positively skewed distributions have longer right tails; negatively skewed have longer left tails. Symmetric shapes have similar left and right sections.</p>",
    "workedExample": {
      "title": "Worked Example: Interpreting Skewness",
      "problem": "A box plot shows the median closer to the lower quartile and a long whisker extending to the maximum. What skewness does this suggest?",
      "questions": [
        {
          "id": "q9",
          "prompt": "Is the distribution symmetric, positively skewed, or negatively skewed?",
          "answer": "positively skewed",
          "feedback": "Correct. Median near lower quartile and long upper whisker indicates positive skew."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which measure is shown as a line inside a box plot's box?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Median</span>",
            "isCorrect": true,
            "explanation": "Correct. The median is represented by the line inside the box."
          },
          {
            "id": "b",
            "label": "<span>Mean</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Mean is not shown on a box plot."
          },
          {
            "id": "c",
            "label": "<span>Mode</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Mode is not shown on a box plot."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>A distribution with a long tail on the left is called:</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Positively skewed</span>",
            "isCorrect": false,
            "explanation": "Incorrect. A long left tail means negative skew."
          },
          {
            "id": "b",
            "label": "<span>Symmetric</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Symmetric means balanced tails."
          },
          {
            "id": "c",
            "label": "<span>Negatively skewed</span>",
            "isCorrect": true,
            "explanation": "Correct. Negative skew means tail extends to the left."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the middle value shown by a line in a box plot.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "median",
                "isCorrect": true,
                "feedback": "Correct! The median is the middle value."
              },
              {
                "value": "mode",
                "label": "mode",
                "isCorrect": false,
                "feedback": "Incorrect. The mode is the most frequent value, not shown as a box plot line."
              },
              {
                "value": "mean",
                "label": "mean",
                "isCorrect": false,
                "feedback": "Incorrect. The mean is not displayed as the line in a box plot."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> measures the spread of the middle 50% of data in a box plot.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "interquartile range",
                "label": "interquartile range",
                "isCorrect": true,
                "feedback": "Correct! The IQR shows the spread of the middle 50%."
              },
              {
                "value": "range",
                "label": "range",
                "isCorrect": false,
                "feedback": "Incorrect. Range is total spread, not just middle 50%."
              },
              {
                "value": "mode",
                "label": "mode",
                "isCorrect": false,
                "feedback": "Incorrect. Mode is a measure of central tendency."
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Applying Vocabulary: Describe Two Distributions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use mathematical vocabulary to compare two distributions. Use terms like <em>median</em>, <em>range</em>, <em>interquartile range</em>, <em>skewness</em>, and <em>symmetry</em> to communicate differences clearly.</p>",
    "workedExample": {
      "title": "Worked Example: Describing Differences",
      "problem": "Distribution X has median 50, range 40, and is symmetric. Distribution Y has median 45, range 60, and is positively skewed. Write a comparative statement.",
      "questions": [
        {
          "id": "q10",
          "prompt": "Which distribution has a higher median?",
          "answer": "Distribution X",
          "feedback": "Correct. Distribution X has a median of 50, higher than Distribution Y's 45."
        },
        {
          "id": "q11",
          "prompt": "Which distribution has a larger range?",
          "answer": "Distribution Y",
          "feedback": "Correct. Distribution Y's range is 60, greater than 40."
        },
        {
          "id": "q12",
          "prompt": "Describe the skewness of each distribution.",
          "answer": "X is symmetric; Y is positively skewed",
          "feedback": "Correct. Distribution X is balanced, Y has a tail to the right."
        }
      ]
    }
  },
  "step10": {
    "title": "Final Exam Style Question",
    "practice": {
      "prompt": "<span>Given two box plots and two histograms representing two datasets, compare the distributions. Identify which dataset has the greater median, which has more spread, and describe the skewness of each. Use appropriate statistical vocabulary in your answer.</span>",
      "hint": "Remember to check the median line positions, the range and IQR sizes, and the shape of the histogram bars or box plot whiskers to identify skewness.",
      "mustHaveKeywords": ["median", "range", "interquartile range", "skewness", "distribution"],
      "optionalKeywords": ["symmetry", "spread", "central tendency"],
      "modelAnswer": "<span>The first distribution has a higher median as indicated by the median line being further right in the box plot. Its range is smaller, suggesting less spread, while the second distribution shows a larger range and interquartile range indicating more variability. The histogram for the first distribution is symmetric, while the second is positively skewed with a longer tail on the right. Overall, these differences suggest the first distribution is more consistent with higher central values, and the second distribution has more spread and skewness.</span>",
      "scaffoldPrompts": ["First, identify the median positions on both box plots.", "Next, calculate or estimate the range and IQR for each.", "Finally, observe the shape and tails on the histograms to state skewness."]
    }
  }
};