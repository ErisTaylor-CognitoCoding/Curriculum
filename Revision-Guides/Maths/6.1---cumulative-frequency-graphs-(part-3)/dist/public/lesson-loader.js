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
      "concept": "Cumulative Frequency",
      "explanation": "The running total of frequencies up to a certain class or value in the data."
    },
    {
      "concept": "Median from Cumulative Frequency",
      "explanation": "The median corresponds to the value at half the total frequency on the cumulative frequency graph."
    },
    {
      "concept": "Interquartile Range (IQR)",
      "explanation": "The difference between the third quartile (Q3) and the first quartile (Q1), estimated from the cumulative frequency graph."
    }
  ],
  "steps": [
    {
      "type": "intro",
      "title": "Introduction to Cumulative Frequency Graphs",
      "content": "Cumulative frequency graphs show the running total of data points up to each value. They help us find how many values are below or above thresholds and to estimate important statistics like the median and quartiles."
    },
    {
      "type": "multipleChoiceQuestion",
      "title": "Finding the Median from a Cumulative Frequency Graph",
      "content": "If a cumulative frequency graph has a total frequency of 60, at which cumulative frequency value would you find the median?",
      "questions": [
        {
          "question": "Select the cumulative frequency that corresponds to the median:",
          "options": ["15", "30", "60", "45"],
          "answer": "30",
          "explanation": "The median is at half the total frequency, so at 60 / 2 = 30."
        }
      ]
    },
    {
      "type": "dropdownCloze",
      "title": "Estimating Quartiles and IQR",
      "content": "Use the cumulative frequency graph to estimate the following: The first quartile (Q1) is found at ___1___ of the total frequency, while the third quartile (Q3) is found at ___2___ of the total frequency. The interquartile range (IQR) is ___3___ minus ___4___.",
      "questions": [
        {
          "blankMap": {
            "___1___": ["one quarter", "one half", "three quarters"],
            "___2___": ["three quarters", "one quarter", "one half"],
            "___3___": ["Q3", "Q1", "Median"],
            "___4___": ["Q1", "Q3", "Median"]
          },
          "answers": {
            "___1___": "one quarter",
            "___2___": "three quarters",
            "___3___": "Q3",
            "___4___": "Q1"
          },
          "explanations": {
            "___1___": "Q1 corresponds to 25% of the total frequency",
            "___2___": "Q3 corresponds to 75% of the total frequency",
            "___3___": "IQR is the difference between Q3 and Q1",
            "___4___": "IQR subtracts Q1 from Q3"
          }
        }
      ]
    },
    {
      "type": "summaryCloze",
      "title": "Summary of Key Points",
      "content": "A cumulative frequency graph helps us determine ___1___ values below or above given points. The median is located at ___2___ the total frequency. Quartiles divide the data into ___3___ parts, and the interquartile range shows the spread of the ___4___ 50% of the data.",
      "questions": [
        {
          "blankMap": {
            "___1___": ["how many", "what percentage", "the exact"],
            "___2___": ["half", "a quarter", "three quarters"],
            "___3___": ["four", "two", "three"],
            "___4___": ["middle", "lowest", "highest"]
          },
          "answers": {
            "___1___": "how many",
            "___2___": "half",
            "___3___": "four",
            "___4___": "middle"
          },
          "explanations": {
            "___1___": "The cumulative frequency counts how many values fall below or above a threshold.",
            "___2___": "The median lies at half the total frequency.",
            "___3___": "Quartiles split data into four equal parts.",
            "___4___": "IQR measures the spread of the middle 50% of data."
          }
        }
      ]
    },
    {
      "type": "practiceQuestion",
      "title": "Practice: Estimating from a Cumulative Frequency Graph",
      "content": "A set of data has a total frequency of 80. Using a cumulative frequency graph, estimate the median, Q1, and Q3 if the values at these cumulative frequencies are: 20 (Q1), 40 (Median), and 60 (Q3). What is the interquartile range?",
      "questions": [
        {
          "question": "Calculate the interquartile range:",
          "answer": "40",
          "explanation": "IQR = Q3 - Q1 = 60 - 20 = 40."
        },
        {
          "question": "Which value corresponds to the median?",
          "answer": "40",
          "explanation": "The median is the value at half the total frequency (80 / 2 = 40)."
        }
      ]
    }
  ]
};