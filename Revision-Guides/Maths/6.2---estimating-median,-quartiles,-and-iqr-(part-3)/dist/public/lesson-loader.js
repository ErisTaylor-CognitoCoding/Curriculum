window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.2 - Estimating median, quartiles, and IQR (Part 3)",
  "strapline": "Learn how to estimate median, quartiles, and interquartile range from grouped frequency data using cumulative frequency methods and linear interpolation.",
  "learningObjectives": [
    "Students should be able to estimate the median from grouped frequency data using cumulative frequency methods (Maths 6.2)",
    "Students should be able to estimate the lower quartile, upper quartile, and interquartile range from grouped frequency data using cumulative frequency curves and linear interpolation (Maths 6.2)",
    "Students should be able to read and interpret values from cumulative frequency curves to determine measures of location and spread for grouped data (Maths 6.2)"
  ],
  "step1": {
    "title": "Concept: Understanding Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is a running total of frequencies that shows how many data points fall below the upper boundary of each class interval. It allows us to estimate statistical measures like the median when only grouped data is available, by showing the accumulation of data rather than individual values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling containers with marbles, each container representing a class interval. As we pour marbles into each container, cumulative frequency is like counting all marbles in the containers so far — it tells us how many marbles are in all containers up to a certain point.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>List class intervals and their frequencies.</span>",
        "<span>Add frequencies cumulatively from the first class to the last to find cumulative frequencies.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Estimating the Median from Grouped Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the middle value of a dataset. For grouped data, we estimate the median by locating the class where the cumulative frequency reaches half the total frequency (n/2). We then use linear interpolation within this class to find a precise estimate.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you think of a queue with people arranged by height, the median is the height of the middle person. We find the right group (class) where this person is, then estimate exactly where they stand among others of similar height.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the total number (n) of data points and calculate n/2.</span>",
        "<span>Identify the median class where the cumulative frequency first equals or exceeds n/2.</span>",
        "<span>Use linear interpolation formula to estimate the median within that class.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Linear Interpolation for Estimates",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Linear interpolation assumes data is spread evenly across a class interval. Using this assumption, we estimate precise values like the median or quartiles by proportionally dividing the interval based on cumulative frequencies.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you have a ruler marked in centimeters but need to measure millimeters, you estimate the position between two known marks equally. Linear interpolation finds the value within a class interval in the same way.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify class boundaries and cumulative frequencies just before and after the position you want to estimate.</span>",
        "<span>Apply the interpolation formula: <em>estimated value = lower boundary + ((target frequency - cumulative frequency before) / frequency in class) × class width</em>.</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Estimating Lower and Upper Quartiles Using Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Lower quartile (Q1) is the data value at 1/4 of the total frequency, and upper quartile (Q3) at 3/4 of the total frequency. We find these by locating the points on the cumulative frequency curve corresponding to n/4 and 3n/4, then using interpolation to estimate them accurately within the appropriate class intervals.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you divide a marathon route into four equal distance parts, the first checkpoint at one-quarter and the third at three-quarters give you markers of progress. Similarly, quartiles mark data values dividing the dataset into four parts.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate n/4 and 3n/4 to find target cumulative frequencies for Q1 and Q3.</span>",
        "<span>Determine the classes where these frequencies lie and apply linear interpolation within those classes.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Using Cumulative Frequency Curves to Read and Interpret Data",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A cumulative frequency curve plots cumulative frequency against upper class boundaries. By reading the curve at specific cumulative frequency points (like n/2, n/4, and 3n/4), you can estimate the median, quartiles, and calculate the interquartile range visually or by interpolation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine reading a height chart that shows cumulative heights of trees growing up the hill. You can find approximate heights corresponding to midway points by looking along the chart line and estimating between markers.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot the cumulative frequency against class upper boundaries to create a curve.</span>",
        "<span>Locate required cumulative frequencies on the vertical axis and read horizontally to find corresponding data values.</span>",
        "<span>Use interpolation if necessary to estimate precise values between points on the curve.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A grouped frequency table shows the number of hours studied by 100 students in a week. Using the cumulative frequency method and linear interpolation, estimate the median, lower quartile, upper quartile, and interquartile range. Explain your method clearly.</span>",
      "hint": "Remember to calculate cumulative frequencies first, then find positions for n/4, n/2, and 3n/4, and use linear interpolation within the appropriate classes.",
      "mustHaveKeywords": ["cumulative frequency", "linear interpolation", "median class", "quartile class", "interquartile range"],
      "optionalKeywords": ["class boundaries", "frequency table", "estimate"],
      "modelAnswer": "<span>First, calculate cumulative frequencies to find the total of 100 students. Then find n/2 = 50, n/4 = 25, and 3n/4 = 75. Identify the median class where cumulative frequency reaches 50, and similarly for lower and upper quartiles at 25 and 75 respectively. Use linear interpolation formula within these classes to estimate the median, Q1, and Q3. Finally, calculate the interquartile range as Q3 minus Q1.</span>",
      "scaffoldPrompts": ["Calculate cumulative frequencies from the frequency table.", "Find the cumulative frequency positions for Q1, median, and Q3.", "Identify the classes where these positions lie.", "Apply linear interpolation to estimate values inside those classes.", "Calculate the interquartile range as Q3 - Q1."]
    }
  }
};