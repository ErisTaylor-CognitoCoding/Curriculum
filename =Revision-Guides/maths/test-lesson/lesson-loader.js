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
      "concept": "Cumulative Frequency Graph",
      "explanation": "A graph that shows the cumulative total of frequencies up to each class boundary, allowing you to see how many data points fall below a particular value."
    },
    {
      "concept": "Median from Cumulative Frequency Graph",
      "explanation": "The median is the value at the middle of the dataset and can be estimated as the x-value corresponding to half the total frequency on the cumulative frequency graph."
    },
    {
      "concept": "Interquartile Range (IQR)",
      "explanation": "The IQR is the difference between the upper quartile (Q3) and lower quartile (Q1). These quartiles can be found by identifying the values at 25% and 75% of the total frequency on the cumulative frequency graph."
    }
  ],
  "steps": [
    {
      "title": "Introduction to Cumulative Frequency Graphs",
      "content": "A cumulative frequency graph shows how data accumulates over an interval. It is useful for finding how many data points fall below certain values, estimating medians, quartiles, and comparing different sets of data.",
      "questions": []
    },
    {
      "title": "Multiple Choice Question: Reading Values from a Cumulative Frequency Graph",
      "content": "Given a cumulative frequency graph with a total frequency of 100, how many data values are below 30?",
      "questions": [
        {
          "type": "multipleChoice",
          "question": "If the cumulative frequency at 30 is 45, how many data values fall below 30?",
          "options": ["30", "45", "55", "70"],
          "answer": "45",
          "explanation": "The cumulative frequency at 30 shows the number of data points less than or equal to 30, which is 45."
        }
      ]
    },
    {
      "title": "Dropdown Cloze: Estimating Median and Quartiles",
      "content": "Fill in the blanks to complete the steps to estimate the median and quartiles from a cumulative frequency graph.",
      "questions": [
        {
          "type": "dropdownCloze",
          "text": "To find the median, locate the value at ____% of the total frequency. To find the lower quartile (Q1), locate the value at ____% and for the upper quartile (Q3), locate the value at ____%.",
          "dropdowns": [
            {
              "options": ["25", "50", "75"],
              "answer": "50"
            },
            {
              "options": ["25", "50", "75"],
              "answer": "25"
            },
            {
              "options": ["25", "50", "75"],
              "answer": "75"
            }
          ],
          "explanation": "The median is at 50% cumulative frequency, the lower quartile at 25%, and the upper quartile at 75%."
        }
      ]
    },
    {
      "title": "Summary: Understanding Cumulative Frequency Graphs",
      "content": "Complete the summary by dragging the correct terms to the blanks.",
      "questions": [
        {
          "type": "summaryCloze",
          "text": "Cumulative frequency graphs help us find the _____ (1) of a dataset by locating the value at 50% of the total frequency. The difference between the _____ (2) and _____ (3) quartiles is called the interquartile range (IQR), showing data spread.",
          "blanks": [
            {
              "blankId": "1",
              "options": ["median", "mode", "mean"],
              "answer": "median"
            },
            {
              "blankId": "2",
              "options": ["upper", "lower", "middle"],
              "answer": "upper"
            },
            {
              "blankId": "3",
              "options": ["lower", "upper", "median"],
              "answer": "lower"
            }
          ],
          "explanation": "The median is at 50%. The interquartile range is the difference between the upper (Q3) and lower (Q1) quartiles."
        }
      ]
    },
    {
      "title": "Practice Question: Applying Knowledge",
      "content": "A cumulative frequency graph shows a total of 120 students. Use the graph to estimate:",
      "questions": [
        {
          "type": "practice",
          "question": "a) How many students scored below 40?\nb) Estimate the median score.\nc) Calculate the interquartile range from the cumulative frequency graph.",
          "answerGuide": "a) Read the cumulative frequency at 40.\nb) Find the score corresponding to 50% (60th student).\nc) Find the scores at 25% (30th student) and 75% (90th student), then subtract the lower from the upper.",
          "explanation": "These steps use the cumulative frequency graph to find the requested values by locating frequencies at particular cumulative points."
        }
      ]
    }
  ]
}