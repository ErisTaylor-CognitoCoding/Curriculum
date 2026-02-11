window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR (Part 2)",
  "strapline": "Learn to estimate median, quartiles, and interquartile range from grouped data using cumulative frequency and linear interpolation.",
  "learningObjectives": [
    "Students should be able to estimate the median from grouped frequency data using cumulative frequency methods (Maths 6.2)",
    "Students should be able to estimate the lower quartile, upper quartile, and interquartile range from grouped frequency data (Maths 6.2)",
    "Students should be able to use linear interpolation within class intervals to find statistical measures when exact data values are not available (Maths 6.2)"
  ],
  "step1": {
    "title": "Concept: Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to a particular class boundary. It helps us understand how data accumulates across intervals, which is essential for finding the position of the median and quartiles in grouped data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling a bucket with layers of sand. Each layer represents the frequency of a class interval. The cumulative frequency is the total height of the sand after adding each layer, showing how much sand is in the bucket up to that point.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: List the frequencies for each class interval.</span>",
        "<span>Step 2: Start with the first frequency and record it as the first cumulative frequency.</span>",
        "<span>Step 3: Add the second frequency to the first to get the second cumulative frequency.</span>",
        "<span>Step 4: Continue adding frequencies cumulatively for all class intervals.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Median from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of a data set. In grouped data, we estimate the median by locating the class interval containing the n/2<sup>th</sup> value using cumulative frequencies, then use linear interpolation to find an accurate estimate within that class.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of sitting in a movie theatre and finding the seat right in the middle row. You count rows until you find where the middle seat lies by knowing the total number of seats and working to half.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Determine the total number of data points, n, by summing frequencies.</span>",
        "<span>Step 2: Calculate n/2 to find the median position.</span>",
        "<span>Step 3: Use the cumulative frequency table to find the class interval containing the median position.</span>",
        "<span>Step 4: Use linear interpolation within that median class interval to estimate the median value.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Linear Interpolation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Linear interpolation assumes data values are evenly spread within a class interval. It allows us to estimate a specific value (like median or quartiles) inside the interval based on relative position within that class using cumulative frequencies.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine walking in a straight line between two landmarks at set distances. If you are halfway, you estimate you are exactly in the middle, even if you didn’t measure precisely. Linear interpolation works the same way for values within intervals.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify the lower boundary of the class interval.</span>",
        "<span>Step 2: Calculate how far into the interval the target position lies by subtracting the cumulative frequency before the interval from the target cumulative frequency.</span>",
        "<span>Step 3: Divide this by the frequency of the interval to find the fraction of the interval to move across.</span>",
        "<span>Step 4: Multiply this fraction by the class width and add it to the lower boundary to estimate the value.</span>"
      ]
    }
  },
  "step4": {
    "title": "Estimating the Lower Quartile (Q1)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The lower quartile is the value below which 25% of the data lies. To estimate it from grouped data, find the class that contains the n/4<sup>th</sup> data point using cumulative frequency, then use linear interpolation within that class.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Calculate n/4 to find the position of the lower quartile.</span>",
        "<span>Step 2: Locate the class interval containing the n/4<sup>th</sup> data point using the cumulative frequency table.</span>",
        "<span>Step 3: Use linear interpolation within that class interval to estimate Q1.</span>"
      ]
    }
  },
  "step5": {
    "title": "Estimating the Upper Quartile (Q3) and Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The upper quartile is the value below which 75% of the data lies. Estimate Q3 by finding the 3n/4<sup>th</sup> data point in cumulative frequencies and interpolating within the class. The interquartile range (IQR) is the difference between Q3 and Q1, representing the middle 50% spread of data.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Calculate 3n/4 to locate the position of the upper quartile.</span>",
        "<span>Step 2: Find the class interval that contains the 3n/4<sup>th</sup> data point via cumulative frequency.</span>",
        "<span>Step 3: Estimate Q3 by interpolating within that class interval.</span>",
        "<span>Step 4: Calculate IQR as Q3 minus Q1.</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the cumulative frequency represent in grouped data?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The total frequency at the end of all intervals</span>",
            "isCorrect": false,
            "explanation": "This describes the overall total frequency but not cumulative frequencies at each interval."
          },
          {
            "id": "b",
            "label": "<span>The running total of frequencies up to a particular class boundary</span>",
            "isCorrect": true,
            "explanation": "Correct! Cumulative frequency is the running total up to that point."
          },
          {
            "id": "c",
            "label": "<span>The difference between the highest and lowest class boundaries</span>",
            "isCorrect": false,
            "explanation": "This describes class width, not cumulative frequency."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Knowledge Check: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>To estimate the median from grouped data, you first calculate the <span class=\"font-semibold\">_____</span> position which is n/2.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "medianPosition",
                "label": "median position",
                "isCorrect": true,
                "feedback": "Correct! The median position is n/2."
              },
              {
                "value": "mean",
                "label": "mean",
                "isCorrect": false,
                "feedback": "Incorrect. The mean is different from the median position."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Guided Practice: Interpolating the Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Given grouped data and a cumulative frequency table, practice estimating the median using linear interpolation by following these steps.</p>",
    "workedExample": {
      "title": "Worked Example - Steps",
      "bullets": [
        "<span>Step 1: Calculate n and n/2.</span>",
        "<span>Step 2: Identify the median class from the cumulative frequency table.</span>",
        "<span>Step 3: Record the lower boundary (L), cumulative frequency before median class (CF), frequency of median class (f), and class width (w).</span>",
        "<span>Step 4: Use the formula: Median = L + ((n/2 - CF) / f) × w to estimate the median.</span>"
      ]
    }
  },
  "step9": {
    "title": "Guided Practice: Estimating Quartiles and IQR",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the same data, estimate Q1 and Q3 by finding positions n/4 and 3n/4 and interpolating as done with the median. Then find IQR by subtracting Q1 from Q3.</p>",
    "workedExample": {
      "title": "Worked Example - Steps",
      "bullets": [
        "<span>Step 1: Calculate positions for Q1 = n/4 and Q3 = 3n/4.</span>",
        "<span>Step 2: Locate corresponding class intervals for each quartile.</span>",
        "<span>Step 3: Use linear interpolation for Q1 and Q3 as with the median.</span>",
        "<span>Step 4: Compute IQR = Q3 - Q1.</span>"
      ]
    }
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given grouped frequency data and its cumulative frequency table, explain how to estimate the median value using linear interpolation.</span>",
      "hint": "Remember to find the total frequency, the median position, identify the median class, and apply the interpolation formula carefully.",
      "mustHaveKeywords": ["total frequency", "n/2 position", "median class", "lower class boundary", "cumulative frequency", "class frequency", "class width", "linear interpolation", "estimate"],
      "optionalKeywords": ["frequency distribution", "cumulative total"],
      "modelAnswer": "<span>First, sum all frequencies to find the total number of data points, n. Calculate the median position as n/2. Then, use the cumulative frequency table to determine the class interval containing this median position; this is called the median class. Record the lower boundary (L) of this median class, the cumulative frequency before this class (CF), the frequency of this class (f), and the class width (w). Apply linear interpolation using the formula: Median = L + ((n/2 - CF) / f) × w to estimate the median value accurately within the grouped data.</span>",
      "scaffoldPrompts": [
        "What is the total frequency (n)?",
        "Calculate the median position (n/2).",
        "Which class interval contains this position based on cumulative frequencies?",
        "Identify L, CF, f, and w for this class.",
        "Use the interpolation formula to estimate the median."
      ]
    }
  }
};