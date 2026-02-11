window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.6 - Comparing distributions (box plots, histograms) (Part 2)",
  "strapline": "Learn to compare multiple data distributions using box plots and histograms by analysing measures of central tendency, spread, and shape.",
  "learningObjectives": [
    "Students should compare two or more distributions using box plots and histograms, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should analyse and interpret visual representations to make comparative statements about datasets, such as which distribution has a greater median, larger range, or more skewed shape (Maths 6.6)",
    "Students should draw conclusions from statistical diagrams and justify their comparisons using appropriate mathematical vocabulary related to distribution characteristics (Maths 6.6)"
  ],
  "step1": {
    "title": "Concept: Measures of Central Tendency in Comparison",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When comparing distributions, <strong>central tendency</strong> tells us where the 'middle' of the data lies. The <em>median</em> is shown by the line inside the box on a box plot, which splits the data in half. On histograms, we estimate the median by finding the point where half the data is accumulated from the frequencies. Comparing medians helps us see which dataset has generally larger or smaller values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of medians like the halfway point on a running track: the runner at the median position marks the central spot of runners' finishing times.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at two box plots showing test scores for Class A and Class B.</span>",
        "<span>Identify the median line inside each box.</span>",
        "<span>See which median line is higher to determine which class had the generally better scores.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Measures of Spread in Comparison",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Spread shows how varied or dispersed a dataset is. Key measures include the <strong>range</strong> (maximum minus minimum), and the <strong>interquartile range (IQR)</strong> (distance between Q3 and Q1 on a box plot). A larger spread means data values vary more widely. Comparing the spread helps us understand which distribution is more consistent or has greater variability.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the range as the length of a leash of a dog; a longer leash means the dog can wander more, similar to data being more spread out.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at two histograms of daily temperatures for two cities.</span>",
        "<span>Calculate the range by subtracting the lowest from the highest temperature for each city.</span>",
        "<span>Compare the ranges to see which city has more temperature variability.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Shape and Skewness",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The shape of a distribution tells us about symmetry and skewness. A symmetrical distribution has balanced tails, while a positively skewed distribution has a longer tail on the right, and a negatively skewed one has a longer tail on the left. On box plots, skewness is seen by the median's position inside the box and the length of whiskers; on histograms, skewness is seen by where the peak is and direction of the tail.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of skewness like a see-saw: if one side is heavier (longer tail), the see-saw tips that way.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Examine a box plot where the median line is closer to the lower quartile with a longer whisker above the box.</span>",
        "<span>Identify this as a positively skewed distribution because the right side tail is longer.</span>",
        "<span>Check a histogram to confirm by looking for a peak left of center and a tail trailing right.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>When comparing two box plots, the median line in Box Plot A is higher than in Box Plot B. What does this tell you about the datasets?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Dataset A generally has higher values than Dataset B.</span>",
            "isCorrect": true,
            "explanation": "The median represents the middle value; a higher median means Dataset A's central tendency is larger."
          },
          {
            "id": "b",
            "label": "<span>Dataset B has more spread than Dataset A.</span>",
            "isCorrect": false,
            "explanation": "Median doesn't tell us about spread; it only tells us about central values."
          },
          {
            "id": "c",
            "label": "<span>Dataset B is positively skewed compared to Dataset A.</span>",
            "isCorrect": false,
            "explanation": "Skewness relates to shape and whiskers, not just median position."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is represented by the line inside the box on a box plot.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "Median",
                "isCorrect": true,
                "feedback": "Correct! The median is the middle value line inside the box."
              },
              {
                "value": "mode",
                "label": "Mode",
                "isCorrect": false,
                "feedback": "Try again. The mode is the most frequent value, not shown as a line on box plots."
              },
              {
                "value": "mean",
                "label": "Mean",
                "isCorrect": false,
                "feedback": "Try again. The mean is an average and is not indicated by the box plot line."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The difference between the largest and smallest values in a dataset is called the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "range",
                "label": "Range",
                "isCorrect": true,
                "feedback": "Correct! The range measures spread by subtracting minimum from maximum."
              },
              {
                "value": "interquartile range",
                "label": "Interquartile Range",
                "isCorrect": false,
                "feedback": "Not quite. The interquartile range only considers the middle 50% of data."
              },
              {
                "value": "variance",
                "label": "Variance",
                "isCorrect": false,
                "feedback": "Variance is a different measure of spread involving averages of squared deviations."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Compare two box plots for two classes' exam scores, describing differences in median, spread, and skewness. Use correct mathematical terms.</span>",
      "hint": "Remember to check median lines, ranges or IQR for spread, and whisker lengths or median position for skewness.",
      "mustHaveKeywords": ["median", "range", "interquartile range", "skewness", "whiskers", "central tendency", "spread", "distribution shape"],
      "optionalKeywords": ["positive skew", "negative skew", "symmetry", "frequency"],
      "modelAnswer": "<span>The box plot for Class A shows a higher median line than Class B, indicating Class A generally scored higher. Class A's box is narrower, so it has a smaller interquartile range compared to Class B, suggesting less spread or variability. The median in Class B's box plot is closer to the lower quartile with a longer upper whisker, showing a positive skew, while Class A's plot looks more symmetrical. Therefore, Class A's scores are higher and more consistent, whereas Class B's scores are more spread out and skewed right.</span>",
      "scaffoldPrompts": [
        "Identify and compare the median locations in both box plots.",
        "Calculate or estimate the range and interquartile range for each dataset.",
        "Examine the position of the median within each box and the whisker lengths for skewness.",
        "Use vocabulary like median, spread, interquartile range, skewness, and symmetry to justify your comparisons."
      ]
    }
  }
};