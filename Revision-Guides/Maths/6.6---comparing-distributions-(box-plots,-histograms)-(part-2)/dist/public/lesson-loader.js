window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.6 - Comparing distributions (box plots, histograms) (Part 2)",
  "strapline": "Learn how to compare and interpret distributions using box plots and histograms by examining measures of central tendency, spread, and shape.",
  "learningObjectives": [
    "Students should be able to compare two or more distributions using box plots and histograms, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should be able to analyse and interpret statistical diagrams to make comparative statements about datasets using appropriate statistical language (Maths 6.6)",
    "Students should be able to draw conclusions from visual representations of data and justify their comparisons (Maths 6.6)"
  ],
  "keyFormulas": [
    "Median: The middle value when data is ordered",
    "Range = Maximum value - Minimum value",
    "Interquartile Range (IQR) = Q3 - Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#999' stroke-width='1'/><text x='200' y='20' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16'>Example Box Plots and Histograms</text><rect x='60' y='100' width='15' height='100' fill='#4a90e2' /><rect x='85' y='90' width='15' height='110' fill='#7ed6f7' /><line x1='67' y1='90' x2='67' y2='80' stroke='#333' stroke-width='3' /><line x1='92' y1='90' x2='92' y2='70' stroke='#333' stroke-width='3' /><rect x='140' y='140' width='80' height='30' fill='none' stroke='#333' stroke-width='2'/><line x1='160' y1='140' x2='160' y2='170' stroke='#333' stroke-width='2'/><line x1='200' y1='140' x2='200' y2='170' stroke='#333' stroke-width='2'/><line x1='220' y1='140' x2='220' y2='170' stroke='#333' stroke-width='2'/><text x='195' y='190' font-family='sans-serif' font-size='10'>Box Plot</text></svg>",
  "step1": {
    "title": "Concept: Measures of Central Tendency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of central tendency like the <strong>median</strong>, <strong>mean</strong>, and <strong>mode</strong> describe the 'middle' or most typical value in a dataset. When comparing distributions, identifying which dataset has the higher or lower median or mean helps show differences in typical values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of central tendency like the average height of people in two different classes. If one class has a higher median height, students there are generally taller.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying the Median from Box Plots",
      "problem": "Two box plots show the test scores of Class A and Class B. Identify the median score for each class.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the median for Class A? (Hint: Look for the line inside the box)",
          "answer": "65",
          "feedback": "Correct! The median is the center line inside the box."
        },
        {
          "id": "q2",
          "prompt": "What is the median for Class B?",
          "answer": "75",
          "feedback": "Great! Class B has a median of 75, which is higher."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Measures of Spread",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Measures of spread describe how much the data varies. This includes the <strong>range</strong>, <strong>interquartile range (IQR)</strong>, and <strong>standard deviation</strong>. A dataset with a larger spread shows more variability.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If two students take the same test, one with scores close together and another with very different scores, the first has a smaller spread and the second a larger spread.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing Range and IQR",
      "problem": "Using the same box plots, calculate the range and IQR for Class A and Class B.",
      "questions": [
        {
          "id": "q3",
          "prompt": "Find the range for Class A (Max - Min)",
          "answer": "40",
          "feedback": "Correct. Subtract the minimum value from the maximum."
        },
        {
          "id": "q4",
          "prompt": "Find the IQR for Class B (Q3 - Q1)",
          "answer": "20",
          "feedback": "Good! The IQR measures the spread of the middle 50% of data."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Distribution Shape",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The shape of a distribution shows patterns like whether it is <strong>symmetrical</strong>, <strong>positively skewed</strong> (tail to the right), <strong>negatively skewed</strong> (tail to the left), or contains <strong>outliers</strong>. Understanding shape helps explain differences between datasets beyond averages and spread.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a race where most runners finish together (symmetrical) versus one race where a few runners finish much later (positively skewed).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Distribution Shape from Histograms",
      "problem": "Look at two histograms representing sales numbers. Identify the distribution shapes.",
      "questions": [
        {
          "id": "q5",
          "prompt": "Is Histogram 1 symmetrical, positively skewed, or negatively skewed?",
          "answer": "Symmetrical",
          "feedback": "Correct! The bars are balanced around the center."
        },
        {
          "id": "q6",
          "prompt": "Is Histogram 2 symmetrical, positively skewed, or negatively skewed?",
          "answer": "Positively skewed",
          "feedback": "Well done! The tail is longer on the right side."
        }
      ]
    }
  },
  "step4": {
    "title": "Interpreting Box Plots to Compare Distributions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Box plots display key summary statistics visually: minimum, Q1, median, Q3, and maximum. When comparing datasets using box plots, note differences in medians, spread (length of boxes and whiskers), and any outliers.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like comparing the heights of two trees by looking at their trunks and branches — some have thicker, longer trunks (spread), others have branches (outliers) sticking out.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Making Comparative Statements from Box Plots",
      "problem": "Given two box plots, use statistical language to make comparisons.",
      "questions": [
        {
          "id": "q7",
          "prompt": "Which box plot has a higher median? Enter 'A' or 'B'.",
          "answer": "B",
          "feedback": "Correct! B has a higher median."
        },
        {
          "id": "q8",
          "prompt": "Which dataset shows more variability (wider spread)? Answer 'A' or 'B'.",
          "answer": "A",
          "feedback": "Yes! A has a larger interquartile range and range."
        }
      ]
    }
  },
  "step5": {
    "title": "Interpreting Histograms to Compare Distributions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Histograms use bars to show frequencies of data in intervals. Comparing histograms involves looking at the concentrations of data, modes, spread, and skewness.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it like stacking boxes of different heights side by side — taller stacks mean more data in that interval.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Analysing Two Histograms",
      "problem": "Compare two histograms showing the number of hours students spend studying each week.",
      "questions": [
        {
          "id": "q9",
          "prompt": "Which histogram shows students generally studying more hours? Enter '1' or '2'.",
          "answer": "2",
          "feedback": "Correct, Histogram 2 has bars more concentrated at higher values."
        },
        {
          "id": "q10",
          "prompt": "Which histogram appears more spread out, indicating more variability?",
          "answer": "1",
          "feedback": "Good! Histogram 1 is more spread with a longer tail."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Compare the two distributions shown in the box plots and histograms provided. Identify and explain differences in their measures of central tendency, spread, and shape, and draw a conclusion about the datasets.</span>",
      "hint": "Remember to mention median, range or IQR, skewness or symmetry, and justify your statements using statistical language.",
      "mustHaveKeywords": ["median", "spread", "skewed", "IQR", "compare", "variation"],
      "optionalKeywords": ["outliers", "distribution shape"],
      "modelAnswer": "<span>The median of Dataset B is higher than Dataset A, indicating a generally higher central value. Dataset A shows a larger range and IQR, so it has greater spread and variability. The shape of Dataset A's distribution is positively skewed, while Dataset B's is more symmetrical. Therefore, Dataset B tends to have more consistent values with higher central tendency, whereas Dataset A has more variation and some higher extreme values. This is supported by the box plot whiskers and the histogram tails.</span>",
      "scaffoldPrompts": ["Identify the medians on the box plots", "Compare ranges and IQRs", "Look for skewness or symmetry in histograms"]
    }
  }
};