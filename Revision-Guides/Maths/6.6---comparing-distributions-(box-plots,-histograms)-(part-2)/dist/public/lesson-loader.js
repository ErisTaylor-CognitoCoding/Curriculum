window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.6 - Comparing distributions (box plots, histograms) (Part 2)",
  "strapline": "Develop skills to compare multiple data distributions using box plots and histograms by evaluating measures of central tendency, spread, and shape.",
  "learningObjectives": [
    "Students should compare two or more distributions using box plots and histograms, identifying differences in measures of central tendency, spread, and shape (Maths 6.6)",
    "Students should analyse and interpret visual representations to make comparative statements about datasets, such as which distribution has a greater median, larger range, or more skewed shape (Maths 6.6)",
    "Students should draw conclusions from statistical diagrams and justify their comparisons using appropriate mathematical vocabulary related to distribution characteristics (Maths 6.6)"
  ],
  "keyFormulas": [
    "Median Position Estimate = (N + 1) / 2 (for ordered data)",
    "Range = Maximum Value − Minimum Value",
    "Interquartile Range (IQR) = Q3 − Q1"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='50' width='320' height='200' fill='#f9f9f9' stroke='#444' /><text x='200' y='30' text-anchor='middle' font-family='Arial' font-size='16' fill='#222'>Example Box Plots and Histogram Comparison</text><line x1='70' y1='200' x2='130' y2='200' stroke='#0074D9' stroke-width='4'/><line x1='70' y1='140' x2='130' y2='140' stroke='#0074D9' stroke-width='8'/><line x1='70' y1='120' x2='130' y2='120' stroke='#0074D9' stroke-width='10'/><rect x='190' y='120' width='130' height='70' fill='#FF4136' opacity='0.6'/><text x='255' y='115' font-family='Arial' font-size='14' fill='#900'>Histogram Bars</text></svg>",
  "step1": {
    "title": "Concept: Comparing Measures of Central Tendency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When comparing distributions, check the median values first. On a box plot, the median is the line inside the box. On histograms, estimate the median by finding the data point where the accumulated frequencies reach half the total.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the median as the 'middle score' in a race: the runner crossing the finish line exactly in the center position, separating the faster half from the slower half.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Median from Box Plots",
      "problem": "Two box plots show exam scores for Class A and Class B. Identify which class has the higher median score.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Looking at Class A's box plot, at what value is the median line inside the box?",
          "answer": "72",
          "feedback": "Correct. The median line for Class A is at 72."
        },
        {
          "id": "q2",
          "prompt": "Looking at Class B's box plot, what is the median line value?",
          "answer": "68",
          "feedback": "Correct. The median line for Class B is at 68."
        },
        {
          "id": "q3",
          "prompt": "Which class has the higher median exam score?",
          "answer": "Class A",
          "feedback": "Correct. Class A's median score is higher than Class B's."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Comparing Measures of Spread",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Spread tells us how spread out the data is. This includes comparing the range (max − min) and the interquartile range (IQR = Q3 − Q1) on box plots. A larger spread signals more variability in scores.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two sets of runners: one group finishes all close together, another group finishes with large gaps between them. The second group shows greater spread in finishing times.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Range and IQR from Box Plots",
      "problem": "Use the data from the box plots for Class A: minimum = 50, Q1 = 65, median = 72, Q3 = 80, maximum = 90. Find the range and IQR.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the range for Class A (max − min).",
          "answer": "40",
          "feedback": "Correct. Range = 90 − 50 = 40."
        },
        {
          "id": "q2",
          "prompt": "Calculate the IQR for Class A (Q3 − Q1).",
          "answer": "15",
          "feedback": "Correct. IQR = 80 − 65 = 15."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Recognising Distribution Shape and Skewness",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Distribution shape shows us symmetry or skewness. A box plot with the median line nearer to one side and longer whiskers on one direction indicates skewness. Histograms show skew by the direction of the tail and peak position.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a slide: If the middle is closer to one end and the slope extends longer to the opposite end, it represents skew in the data.</p>"
    },
    "workedExample": {
      "title": "Interactive: Identifying Skewness in Box Plots",
      "problem": "Given a box plot where the median is closer to Q1 and the upper whisker is longer than the lower whisker, what kind of skewness is represented?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Type the skewness direction (positive, negative, or symmetric).",
          "answer": "positive",
          "feedback": "Correct. When the median is closer to Q1 with a longer upper whisker, it is positively skewed."
        }
      ]
    }
  },
  "step4": {
    "title": "Skill Practice: Comparing Histograms",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Histograms help compare shapes by examining bar heights, spread, and tails. The tallest bar indicates the mode, while the symmetry of the shape suggests if it's skewed or not.</p>",
    "workedExample": {
      "title": "Interactive: Comparing Two Histograms",
      "problem": "Two histograms show test results for Year 10 and Year 11. Determine which histogram likely has a higher median and which has a broader spread.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which histogram has the mode at a higher value?",
          "answer": "Year 11",
          "feedback": "Correct, Year 11's histogram mode is at a higher value."
        },
        {
          "id": "q2",
          "prompt": "Which histogram appears to have a larger spread?",
          "answer": "Year 10",
          "feedback": "Correct, Year 10's histogram bars spread wider across the x-axis."
        }
      ]
    }
  },
  "step5": {
    "title": "Analysis: Making Comparative Statements",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To compare distributions, use terms like median, range, IQR, skewness, and shape. Justify comparisons by referring clearly to these measures and representations.</p>",
    "workedExample": {
      "title": "Writing Comparative Statements",
      "problem": "Given two box plots, describe which distribution has a higher median, larger spread, and any skewness observed.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write a sentence comparing medians of the two distributions.",
          "answer": "Distribution A has a higher median than Distribution B.",
          "feedback": "Good. You identified which median is greater."
        },
        {
          "id": "q2",
          "prompt": "Write a sentence comparing spreads using range or IQR.",
          "answer": "Distribution B has a larger range than Distribution A, indicating greater spread.",
          "feedback": "Excellent. You compared spread using range."
        },
        {
          "id": "q3",
          "prompt": "Describe any skewness apparent in either distribution.",
          "answer": "Distribution A is positively skewed as shown by the longer upper whisker and median closer to Q1.",
          "feedback": "Correct. Your skewness description is accurate."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Two box plots compare the test scores of two classes. Explain how you would compare these distributions, including differences in median, spread, and skewness.</span>",
      "hint": "Remember to refer to median lines, ranges, IQRs, whiskers, and any asymmetry to describe skewness.",
      "mustHaveKeywords": ["median", "range", "IQR", "skewness", "whiskers", "distribution"],
      "optionalKeywords": ["symmetry", "spread", "central tendency"],
      "modelAnswer": "<span>To compare the two box plots, first identify which distribution has the higher median by looking at the central line within the boxes. Next, compare the spread by calculating or estimating the range (difference between the maximum and minimum values) and the interquartile range (IQR) by subtracting Q1 from Q3. Observe the length of the whiskers and the positions of the median within the boxes to identify skewness: if the median is closer to Q1 with a longer upper whisker, this indicates positive skew, and if closer to Q3 with a longer lower whisker, negative skew. Use this information to justify differences in distribution shape and variability.</span>",
      "scaffoldPrompts": [
        "Identify the medians on each box plot and compare them.",
        "Calculate or estimate the range and IQR for each distribution.",
        "Describe the skewness by examining median position and whiskers.",
        "Summarize your comparisons using proper statistical vocabulary."
      ]
    }
  }
};