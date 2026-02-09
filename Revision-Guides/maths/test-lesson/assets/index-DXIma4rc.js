{
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
      "concept": "Reading values from cumulative frequency graphs",
      "explanation": "Cumulative frequency graphs show the running total of frequencies up to a given point. They allow you to find how many data points are below a certain value."
    },
    {
      "concept": "Estimating median and quartiles",
      "explanation": "The median corresponds to the 50th percentile, quartiles correspond to the 25th and 75th percentiles, and can be estimated by drawing horizontal lines from the cumulative frequency axis."
    },
    {
      "concept": "Comparing distributions using cumulative frequency graphs",
      "explanation": "You can compare medians, spread, and skewness of different data sets by comparing their cumulative frequency graphs."
    }
  ],
  "steps": [
    {
      "title": "Introduction to Cumulative Frequency Graphs",
      "content": "Cumulative frequency graphs are a way to visualize how data accumulates over a range. They are useful for understanding the distribution of data, including median, quartiles, and comparing different data sets.",
      "questions": []
    },
    {
      "title": "Multiple Choice: Interpreting a Cumulative Frequency Graph",
      "content": "Look at a cumulative frequency graph showing test scores out of 100. How many students scored less than 60?",
      "questions": [
        {
          "type": "multipleChoiceQuestion",
          "question": "If the cumulative frequency at a score of 60 is 35, what does this mean?",
          "options": [
            "35 students scored exactly 60",
            "35 students scored more than 60",
            "35 students scored less than or equal to 60",
            "35 students scored less than 60"
          ],
          "answers": [2],
          "explanations": [
            "Incorrect: cumulative frequency is not just at one score",
            "Incorrect: cumulative frequency counts up to that score, not above",
            "Correct: cumulative frequency at 60 means 35 students scored less than or equal to 60",
            "Incorrect: cumulative frequency includes scores equal to 60, so this is too narrow"
          ]
        }
      ]
    },
    {
      "title": "Dropdown Cloze: Estimate Median and Quartiles",
      "content": "Using a cumulative frequency graph for 100 data points, the median corresponds to where the cumulative frequency is at __50__ (dropdown), the lower quartile is at __25__ (dropdown), and the upper quartile is at __75__ (dropdown).",
      "questions": [
        {
          "type": "dropdownCloze",
          "text": "The median corresponds to the ___th percentile.",
          "dropdowns": [
            {
              "options": ["25", "50", "75", "100"],
              "correct": "50"
            }
          ]
        },
        {
          "type": "dropdownCloze",
          "text": "The lower quartile is the ___th percentile.",
          "dropdowns": [
            {
              "options": ["25", "50", "75", "100"],
              "correct": "25"
            }
          ]
        },
        {
          "type": "dropdownCloze",
          "text": "The upper quartile is the ___th percentile.",
          "dropdowns": [
            {
              "options": ["25", "50", "75", "100"],
              "correct": "75"
            }
          ]
        }
      ]
    },
    {
      "title": "Summary: Key Points about Cumulative Frequency Graphs",
      "content": "A cumulative frequency graph shows the ___(dropdown: number, average, percentage)___ of data points up to a certain value. The median corresponds to the ___(dropdown: 25th, 50th, 75th)___ percentile. Quartiles divide the data into ___(dropdown: two, three, four)___ equal parts.",
      "questions": [
        {
          "type": "dropdownCloze",
          "text": "A cumulative frequency graph shows the ___ of data points up to a certain value.",
          "dropdowns": [
            {
              "options": ["number", "average", "percentage"],
              "correct": "number"
            }
          ]
        },
        {
          "type": "dropdownCloze",
          "text": "The median corresponds to the ___ percentile.",
          "dropdowns": [
            {
              "options": ["25th", "50th", "75th"],
              "correct": "50th"
            }
          ]
        },
        {
          "type": "dropdownCloze",
          "text": "Quartiles divide the data into ___ equal parts.",
          "dropdowns": [
            {
              "options": ["two", "three", "four"],
              "correct": "four"
            }
          ]
        }
      ]
    },
    {
      "title": "Practice Question: Using a Cumulative Frequency Graph",
      "content": "A cumulative frequency graph shows the heights of 80 students. At 150 cm, the cumulative frequency is 10. At 160 cm, it is 30. At 170 cm, it is 60. At 180 cm, it is 80.",
      "questions": [
        {
          "type": "shortAnswer",
          "question": "How many students are shorter than 160 cm?",
          "answer": "30",
          "explanation": "The cumulative frequency at 160 cm indicates the number of students who are shorter than or equal to 160 cm."
        },
        {
          "type": "shortAnswer",
          "question": "Estimate the median height.",
          "answer": "Approximately 170 cm",
          "explanation": "The median corresponds to the 50th percentile, which is at cumulative frequency 40 (half of 80). Looking at the graph between 160 cm (30) and 170 cm (60), the median is around 165-170 cm, closer to 170 cm."
        },
        {
          "type": "shortAnswer",
          "question": "Calculate the interquartile range (IQR) if the lower quartile is at 155 cm and the upper quartile is at 175 cm.",
          "answer": "20",
          "explanation": "IQR = Upper quartile - Lower quartile = 175 - 155 = 20 cm."
        }
      ]
    }
  ]
}