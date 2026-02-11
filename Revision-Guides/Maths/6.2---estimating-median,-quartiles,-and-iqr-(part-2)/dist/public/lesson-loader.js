window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR (Part 2)",
  "strapline": "Learn to estimate the median, quartiles, and interquartile range from grouped frequency data using cumulative frequency and linear interpolation.",
  "learningObjectives": [
    "Students should be able to estimate the median from grouped frequency data using cumulative frequency methods (Maths 6.2)",
    "Students should be able to estimate the lower quartile, upper quartile, and interquartile range from grouped frequency data (Maths 6.2)",
    "Students should be able to use linear interpolation within class intervals to find statistical measures when exact data values are not available (Maths 6.2)"
  ],
  "step1": {
    "title": "Concept: Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to a certain class boundary. It helps us find where the median or quartiles lie within grouped data by showing how many data points lie below each class boundary.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling a staircase with water, where each step shows how much water collects up to that step. The cumulative frequency is like the total water collected up to each step—helping us see the position of specific data points.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the frequencies of each class interval.</span>",
        "<span>Add each frequency to the total of the previous classes to form the cumulative frequency column.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Median from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value, found at the position <em>n/2</em> in the cumulative frequency distribution. The median class is the group where this position lies, and we estimate the exact median value by interpolating within this class.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you stand in a queue and want to find the middle person, but the queue is divided into groups, you find which group holds the middle and then estimate their exact position within that group.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate <em>n/2</em>, where <em>n</em> is the total frequency.</span>",
        "<span>Locate the cumulative frequency just greater than or equal to <em>n/2</em> to find the median class.</span>",
        "<span>Use linear interpolation within this class to find the estimated median value.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Linear Interpolation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Linear interpolation assumes data values are evenly spread within a class interval. It lets us estimate a specific value’s exact position within that interval using proportional distances.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine stretching a rubber band evenly between two marks. If you want to find a point exactly 3/5 along the band, you measure 3/5 of the length from the start, assuming the stretch is uniform.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the class interval where the value lies.</span>",
        "<span>Use the formula: <em>Estimate = lower boundary + ((position - cumulative frequency before class) / frequency of class) × class width</em>.</span>"
      ]
    }
  },
  "step4": {
    "title": "Estimating the Lower Quartile",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The lower quartile (Q1) is the value below which 25% of the data lie. Find its position as <em>n/4</em> in the cumulative frequency, find the corresponding class, then estimate it using linear interpolation.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate <em>n/4</em> to find the position of Q1.</span>",
        "<span>Find the cumulative frequency class containing this position.</span>",
        "<span>Interpolate within that class interval using the linear interpolation formula.</span>"
      ]
    }
  },
  "step5": {
    "title": "Estimating the Upper Quartile",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The upper quartile (Q3) is the value below which 75% of the data lie. Find its position as <em>3n/4</em>, identify the class interval, and estimate Q3 with linear interpolation.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate <em>3n/4</em> to find Q3's position.</span>",
        "<span>Locate the class interval containing this position.</span>",
        "<span>Use linear interpolation to find an estimate for Q3.</span>"
      ]
    }
  },
  "step6": {
    "title": "Calculating the Interquartile Range (IQR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The IQR is the difference between the upper quartile and the lower quartile values: <em>IQR = Q3 - Q1</em>. It measures the spread of the middle 50% of data.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the estimated values of Q1 and Q3.</span>",
        "<span>Subtract Q1 from Q3 to find the IQR.</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does cumulative frequency represent in grouped data?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The total frequency up to a given class boundary</span>",
            "isCorrect": true,
            "explanation": "Correct! Cumulative frequency is the running total of frequencies up to a class boundary."
          },
          {
            "id": "b",
            "label": "<span>The frequency of the class interval itself only</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That describes the class frequency, not the cumulative frequency."
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
        "sentence": "<span>The estimated median lies in the <span class=\"font-semibold\">_____</span> class using cumulative frequency.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "median",
                "label": "Median",
                "isCorrect": true,
                "feedback": "Correct! The median value is found in the median class."
              },
              {
                "value": "lower quartile",
                "label": "Lower Quartile",
                "isCorrect": false,
                "feedback": "Try again. The median lies in the median class, not the lower quartile class."
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
      "prompt": "<span>Explain how to estimate the median and interquartile range (IQR) from grouped frequency data using cumulative frequency and linear interpolation.</span>",
      "hint": "Remember to identify the total frequency, find the median class and quartile classes using cumulative frequencies, then apply linear interpolation within these classes.",
      "mustHaveKeywords": ["cumulative frequency", "median class", "linear interpolation", "IQR", "lower quartile", "upper quartile"],
      "optionalKeywords": ["class intervals", "frequency", "position"],
      "modelAnswer": "<span>First, calculate the total frequency <em>n</em>. Then find the positions of the median (<em>n/2</em>), lower quartile (<em>n/4</em>), and upper quartile (<em>3n/4</em>) in the cumulative frequency table. Identify the class intervals containing these positions (median class, lower quartile class, upper quartile class). Using the class boundaries, frequencies, and cumulative frequencies before the class, apply linear interpolation: estimate = lower boundary + ((position - cumulative frequency before class) / frequency of class) × class width. Finally, subtract the estimated lower quartile from the upper quartile to find the IQR.</span>",
      "scaffoldPrompts": [
        "Calculate total frequency and cumulative frequencies.",
        "Locate the median and quartile class intervals.",
        "Use linear interpolation formula for each measure.",
        "Calculate the IQR by subtracting Q1 from Q3."
      ]
    }
  }
};