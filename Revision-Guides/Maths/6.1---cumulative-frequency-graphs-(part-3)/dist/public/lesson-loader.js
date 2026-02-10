window.lessonContent = {
  "metadata": {
    "subject": "Maths",
    "specCode": "Edexcel- 1MA1",
    "topicCode": "6.1 - cumulative frequency graphs (part 3)",
    "topicTitle": "6.1 - Cumulative frequency graphs (Part 3)"
  },
  "objectives": [
    "Students should use cumulative frequency graphs to determine how many data values fall below or above certain thresholds (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to compare distributions (Maths 6.1)",
    "Students should estimate the median, quartiles, and interquartile range from cumulative frequency graphs (Maths 6.1)"
  ],
  "keyConcepts": [
    {
      "concept": "Reading values from a cumulative frequency graph",
      "explanation": "Cumulative frequency graphs show the total number of data points less than or equal to a certain value. You can read values by drawing horizontal or vertical lines from points on the graph."
    },
    {
      "concept": "Estimating medians and quartiles",
      "explanation": "The median corresponds to the 50th percentile, while the lower and upper quartiles correspond to the 25th and 75th percentiles, which can be found by locating these frequencies on the vertical axis and reading the corresponding values on the horizontal axis."
    },
    {
      "concept": "Comparing distributions using cumulative frequency graphs",
      "explanation": "By comparing shapes, spread, and median positions on cumulative frequency graphs, you can compare different data sets in terms of central tendency and variability."
    }
  ],
  "steps": [
    {
      "title": "Introduction to Cumulative Frequency Graphs",
      "content": "Cumulative frequency graphs represent the total number of observations less than or equal to a particular value. They are useful for determining how many data points lie below or above specific thresholds, estimating medians and quartiles, and comparing different data distributions.",
      "questions": []
    },
    {
      "title": "Multiple Choice Question: Reading Values",
      "content": "If a cumulative frequency graph shows that at value 30 the cumulative frequency is 45, what does this mean?",
      "questions": [
        {
          "type": "multipleChoiceQuestion",
          "question": "What does a cumulative frequency of 45 at value 30 tell you?",
          "options": [
            "There are 45 data points exactly equal to 30",
            "There are 45 data points less than or equal to 30",
            "There are 30 data points less than or equal to 45",
            "The median is 30"
          ],
          "answer": "There are 45 data points less than or equal to 30",
          "explanation": "A cumulative frequency at a certain value shows the total number of data points less than or equal to that value."
        }
      ]
    },
    {
      "title": "Dropdown Cloze Questions: Estimating Median and Quartiles",
      "content": "Fill in the blanks to correctly estimate the median and quartiles from a cumulative frequency graph. The median corresponds to the ___ percentile, the lower quartile corresponds to the ___ percentile, and the upper quartile corresponds to the ___ percentile.",
      "questions": [
        {
          "type": "dropdownCloze",
          "sentence": "The median corresponds to the {medianPercentile} percentile, the lower quartile corresponds to the {lowerQuartilePercentile} percentile, and the upper quartile corresponds to the {upperQuartilePercentile} percentile.",
          "options": {
            "medianPercentile": ["50th", "25th", "75th"],
            "lowerQuartilePercentile": ["25th", "50th", "75th"],
            "upperQuartilePercentile": ["75th", "50th", "25th"]
          },
          "answers": {
            "medianPercentile": "50th",
            "lowerQuartilePercentile": "25th",
            "upperQuartilePercentile": "75th"
          },
          "explanation": "The median is the 50th percentile, the lower quartile is the 25th percentile, and the upper quartile is the 75th percentile."
        }
      ]
    },
    {
      "title": "Summary Cloze: Key Points on Cumulative Frequency Graphs",
      "content": "Complete the sentences below to summarize important concepts.",
      "questions": [
        {
          "type": "dropdownCloze",
          "sentence": "A cumulative frequency graph shows the total number of data points {relation} a certain value. We can estimate the median by finding the {medianFrequency} on the vertical axis and reading across to the horizontal axis. The interquartile range is the difference between the {upperQuartile} and {lowerQuartile}.",
          "options": {
            "relation": ["less than or equal to", "greater than", "equal to"],
            "medianFrequency": ["50th percentile", "25th percentile", "75th percentile"],
            "upperQuartile": ["upper quartile", "median", "lower quartile"],
            "lowerQuartile": ["lower quartile", "median", "upper quartile"]
          },
          "answers": {
            "relation": "less than or equal to",
            "medianFrequency": "50th percentile",
            "upperQuartile": "upper quartile",
            "lowerQuartile": "lower quartile"
          },
          "explanation": "Cumulative frequency graphs represent totals of data points less than or equal to given values; the median is at the 50th percentile, and the interquartile range is the difference between upper and lower quartiles."
        }
      ]
    },
    {
      "title": "Practice Question: Interpreting a Cumulative Frequency Graph",
      "content": "A cumulative frequency graph shows the following data for a test: At score 40, cumulative frequency is 20; at score 70, cumulative frequency is 80; and total number of students is 100.",
      "questions": [
        {
          "type": "multipleChoiceQuestion",
          "question": "How many students scored more than 70?",
          "options": [
            "20",
            "80",
            "70",
            "100"
          ],
          "answer": "20",
          "explanation": "Since the cumulative frequency at 70 is 80, there are 80 students scoring 70 or below. Therefore, 100 - 80 = 20 students scored more than 70."
        }
      ]
    }
  ]
};