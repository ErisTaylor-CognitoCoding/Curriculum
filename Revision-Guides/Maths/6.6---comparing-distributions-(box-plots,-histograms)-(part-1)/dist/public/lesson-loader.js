window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.6 - Comparing distributions (box plots, histograms) (Part 1)",
  "strapline": "Learn how to compare distributions using box plots and histograms by analysing central tendency, spread, and shape.",
  "learningObjectives": [
    "Students should be able to compare two or more distributions using box plots and histograms, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should be able to analyse and interpret statistical diagrams to make comparative statements about datasets, such as which distribution has a greater median, larger range, or more skewed shape (Maths 6.6)",
    "Students should be able to draw conclusions from statistical diagrams and justify their comparisons using appropriate mathematical vocabulary related to distribution characteristics (Maths 6.6)"
  ],
  "step1": {
    "title": "Concept: Measures of Central Tendency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of central tendency are values that represent the centre or typical value of a dataset. The three main types are the mean, median, and mode. In box plots, the median is shown as a line inside the box, which divides the data into two halves. In histograms, the median can be estimated by looking at the middle of the distribution shape.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of central tendency like the 'middle seat' on a bus: it represents the most typical or central position among all the seats (data points).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at the box plot and identify the line inside the box (median).</span>",
        "<span>Compare which distribution has a higher median by seeing which line is positioned further to the right on the scale.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Measures of Spread",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of spread describe how data values are spread out around the central value. Important measures include the range (difference between maximum and minimum), the interquartile range (IQR, the width of the box in a box plot representing the middle 50% of data), and standard deviation. These measures tell us how varied or consistent the data is.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Spread is like how far passengers are sitting from the middle seat on the bus — are they all clustered around it or spread wide apart?</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the range by subtracting the smallest value from the largest value.</span>",
        "<span>Identify the IQR from the width of the box in the box plot to see the spread of the middle 50% of data.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Distribution Shape",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The shape of a distribution shows the pattern of data. It can be symmetric (balanced evenly), positively skewed (tail is longer on the right with higher values), or negatively skewed (tail longer on the left with lower values). Understanding distribution shape helps to explain how data is distributed beyond measures of central tendency and spread.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the shape is like the silhouette of a hill: it can be perfectly balanced, leaning to one side, or stretched out with a long tail.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at the histogram bars and judge if they form a symmetrical shape or if one tail is longer.</span>",
        "<span>Identify if the distribution is positively or negatively skewed by noting where most values cluster and which side the tail extends.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which measure of central tendency is shown as a line inside a box on a box plot?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Median</span>",
            "isCorrect": true,
            "explanation": "Correct! The median divides the data into two halves and is shown as the line inside the box."
          },
          {
            "id": "b",
            "label": "<span>Mean</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The mean is not shown directly on a box plot."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Knowledge Check: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> tells us about the spread of the middle 50% of data in a box plot.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "iqr",
                "label": "Interquartile Range (IQR)",
                "isCorrect": true,
                "feedback": "Correct! IQR measures the spread of the middle 50% of data."
              },
              {
                "value": "mean",
                "label": "Mean",
                "isCorrect": false,
                "feedback": "Incorrect. The mean is a measure of central tendency, not spread."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Comparing Two Distributions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use your knowledge of central tendency, spread, and shape to compare two box plots or histograms. Make statements like: which has a higher median, which is more spread out, or which distribution is skewed. Support your comparisons using appropriate vocabulary such as 'median', 'range', 'IQR', 'skewed', and 'symmetrical'.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at the medians of both box plots to see which one is higher.</span>",
        "<span>Compare the lengths of the boxes (IQRs) to determine which distribution is more spread out in the middle 50%.</span>",
        "<span>Check the whiskers and range to see overall spread.</span>",
        "<span>See if one shape is skewed either positively or negatively and describe it.</span>"
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Two groups of students took different math tests. Below are their box plots and histograms. Compare the two distributions in terms of central tendency, spread, and shape. Use appropriate mathematical vocabulary in your answer.</span>",
      "hint": "Remember to check medians, ranges, IQRs, and look for skewness or symmetry in both plots.",
      "mustHaveKeywords": ["median", "range", "IQR", "skewed", "symmetrical", "box plot", "histogram"],
      "optionalKeywords": ["spread", "central tendency", "interquartile range", "distribution shape"],
      "modelAnswer": "<span>The first group has a higher median than the second group, shown by the higher median line in its box plot. The range of the first group is smaller, indicating less overall spread, but its IQR is larger, showing more variation in the middle 50%. The second group's histogram is positively skewed, with a tail extending to the right, whereas the first group's data is more symmetrical. These comparisons highlight differences in central tendency, spread, and shape between the two groups' results.</span>",
      "scaffoldPrompts": [
        "Identify each group's median from the box plots",
        "Compare the ranges and IQRs of both groups",
        "Describe the shape of both histograms and note any skewness",
        "Summarise your findings using the correct terminology"
      ]
    }
  }
};