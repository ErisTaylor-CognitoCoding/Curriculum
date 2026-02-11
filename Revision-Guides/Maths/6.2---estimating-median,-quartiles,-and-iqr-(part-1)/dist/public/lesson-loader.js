window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR (Part 1)",
  "strapline": "Learn to estimate median, quartiles, and interquartile range from grouped frequency data using cumulative frequency and interpolation.",
  "learningObjectives": [
    "Students should be able to estimate the median from grouped frequency data using cumulative frequency methods (Maths 6.2)",
    "Students should be able to estimate the lower quartile, upper quartile, and interquartile range from grouped frequency data (Maths 6.2)",
    "Students should be able to use linear interpolation within class intervals to find statistical measures when exact data values are not available (Maths 6.2)"
  ],
  "step1": {
    "title": "Concept: Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is a running total of frequencies up to each class interval in grouped data. It shows how many data points fall at or below the upper boundary of each group, helping locate positions like the median or quartiles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a queue of people entering a theater in groups. The cumulative frequency is like counting how many people have entered after each group finishes entering.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given grouped frequency data with classes and frequencies, add each frequency to the sum of the previous frequencies to find the cumulative frequency column.</span>",
        "<span>For example, if frequencies are 3, 5, and 7, the cumulative frequencies are 3, 8 (3+5), and 15 (8+7).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Estimating the Median from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value and can be estimated from grouped frequency data by first finding <em>n/2</em> (half the total frequency), locating the class interval that contains this cumulative frequency, then using interpolation within that interval to estimate the exact median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of slicing a cake into groups. Finding the median slice means finding the slice where half the cake is cut through, even if you only know the sizes of slices and not exactly where the cut is.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate total frequency <em>n</em> and find position <em>n/2</em>.</span>",
        "<span>Identify the class interval where the cumulative frequency is just greater than or equal to <em>n/2</em>.</span>",
        "<span>Use linear interpolation within this interval to estimate the median value.</span>"
      ]
    }
  },
  "step3": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [{
      "id": "mcq-1",
      "question": "<span>What does the cumulative frequency represent in grouped data?</span>",
      "options": [
        {
          "id": "a",
          "label": "<span>The total number of data points at or below the upper class boundary.</span>",
          "isCorrect": true,
          "explanation": "Correct! Cumulative frequency counts all data points up to and including each class interval."
        },
        {
          "id": "b",
          "label": "<span>The middle value of the data set.</span>",
          "isCorrect": false,
          "explanation": "Incorrect. The middle value is the median, not the cumulative frequency."
        },
        {
          "id": "c",
          "label": "<span>The difference between the highest and lowest data points.</span>",
          "isCorrect": false,
          "explanation": "Incorrect. That describes the range, not cumulative frequency."
        }
      ]
    }]
  },
  "step4": {
    "title": "Concept: Estimating the Lower Quartile (Q1)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The lower quartile divides the lowest 25% of data from the rest and can be found by locating the cumulative frequency at position <em>n/4</em>. Then interpolation is used to estimate the exact value within the class interval containing this position.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Picture slicing a pizza into four equal parts. The 1st quarter slice represents the lower quartile, separating the first 25% of the pizza from the rest.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate <em>n/4</em> to find the position of the lower quartile.</span>",
        "<span>Locate the class interval where the cumulative frequency reaches or exceeds <em>n/4</em>.</span>",
        "<span>Apply linear interpolation to estimate the lower quartile value within that interval.</span>"
      ]
    }
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [{
      "id": "cloze-1",
      "sentence": "<span>The <span class=\"font-semibold\">_____</span> is found by locating the cumulative frequency position at n/2 and interpolating within the class interval.</span>",
      "blanks": [{
        "id": "b1",
        "options": [
          {
            "value": "median",
            "label": "Median",
            "isCorrect": true,
            "feedback": "Correct! Median is estimated from the n/2 position."
          },
          {
            "value": "mode",
            "label": "Mode",
            "isCorrect": false,
            "feedback": "Try again. Mode is the most frequent value, not found by n/2."
          },
          {
            "value": "range",
            "label": "Range",
            "isCorrect": false,
            "feedback": "Try again. Range is difference between max and min."
          }
        ]
      }]
    }]
  },
  "step6": {
    "title": "Concept: Using Linear Interpolation Within Class Intervals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When exact data values are unknown, linear interpolation estimates values by assuming data is evenly spread within a class interval. This helps find median, quartiles, or other measures accurately from grouped data.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine walking evenly along a marked trail. Even if you only know distances at checkpoints, you estimate where you are in between based on how far you’ve walked.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the class interval where the required position lies.</span>",
        "<span>Calculate the frequency within this class interval.</span>",
        "<span>Determine how far into the class interval (proportionally) the position lies.</span>",
        "<span>Use the formula: Lower boundary + (Proportion × Class width) to estimate the value.</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [{
      "id": "mcq-2",
      "question": "<span>When is linear interpolation used in grouped frequency data?</span>",
      "options": [
        {
          "id": "a",
          "label": "<span>To estimate values like median or quartiles within a class interval.</span>",
          "isCorrect": true,
          "explanation": "Correct! It estimates values assuming even distribution within intervals."
        },
        {
          "id": "b",
          "label": "<span>To count the total frequency of the data.</span>",
          "isCorrect": false,
          "explanation": "Incorrect. Counting total frequency is simple addition, not interpolation."
        },
        {
          "id": "c",
          "label": "<span>To find the mode of data.</span>",
          "isCorrect": false,
          "explanation": "Incorrect. Mode is the highest frequency class, no interpolation needed."
        }
      ]
    }]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to estimate the median and the lower quartile from grouped frequency data using cumulative frequency and linear interpolation.</span>",
      "hint": "Remember to find total frequency, locate positions n/2 and n/4, identify intervals, and use proportional distances within intervals.",
      "mustHaveKeywords": ["cumulative frequency", "n/2", "n/4", "class interval", "linear interpolation", "proportion"],
      "optionalKeywords": ["frequency distribution", "upper boundary", "class width"],
      "modelAnswer": "<span>To estimate the median, first calculate the total frequency n and find position n/2. Use cumulative frequency to identify the class interval containing this position. Then apply linear interpolation: take the lower boundary of that class, add the class width multiplied by the proportion of how far n/2 is into the class interval (calculated by (n/2 - cumulative frequency before class) divided by class frequency). The same process is used for the lower quartile, but using position n/4 instead of n/2.</span>",
      "scaffoldPrompts": [
        "Think about how you calculate cumulative frequencies to find positions.",
        "Then determine which class intervals correspond to n/2 and n/4 positions.",
        "Finally, apply the interpolation formula within those intervals to estimate values."
      ]
    }
  }
};