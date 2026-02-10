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
      "concept": "Cumulative frequency graph",
      "explanation": "A graph that shows the cumulative total of frequencies up to each data value, allowing you to determine the number of data points below a specific threshold."
    },
    {
      "concept": "Median estimation",
      "explanation": "Using the cumulative frequency graph to find the middle value where half the data lies below, by identifying the 50th percentile on the vertical axis."
    },
    {
      "concept": "Interquartile range (IQR)",
      "explanation": "The range between the first quartile (25th percentile) and third quartile (75th percentile), estimated from the cumulative frequency graph to measure data spread."
    }
  ],
  "steps": [
    {
      "title": "Introduction to Cumulative Frequency Graphs",
      "content": "Cumulative frequency graphs are useful tools for visualizing data distributions. They allow you to find how many data values lie below a certain value and to estimate key statistics like the median and quartiles.",
      "questions": []
    },
    {
      "title": "Multiple Choice Question: Reading Cumulative Frequency Graphs",
      "content": "A cumulative frequency graph shows that 30 values are below 15. If the total data set has 50 values, how many values are above 15?",
      "questions": [
        {
          "type": "multipleChoice",
          "question": "How many data values lie above the value 15?",
          "options": [
            "15",
            "20",
            "30",
            "50"
          ],
          "answer": "20",
          "explanation": "Since 30 values are below 15 out of 50 total, 50 - 30 = 20 values lie above 15."
        }
      ]
    },
    {
      "title": "Dropdown Cloze: Finding Median, Quartiles, and IQR",
      "content": "Use the cumulative frequency graph to estimate the __________ (hint: 50th percentile). The first quartile corresponds to the __________ percentile, and the third quartile corresponds to the __________ percentile. The interquartile range is the difference between the __________ and __________.",
      "questions": [
        {
          "type": "dropdownCloze",
          "text": "Use the cumulative frequency graph to estimate the {median/mean/mode} (hint: 50th percentile). The first quartile corresponds to the {25th/10th/75th} percentile, and the third quartile corresponds to the {75th/50th/90th} percentile. The interquartile range is the difference between the {median/first quartile/third quartile} and {third quartile/median/first quartile}.",
          "answers": [
            "median",
            "25th",
            "75th",
            "third quartile",
            "first quartile"
          ]
        }
      ]
    },
    {
      "title": "Summary Cloze: Key Points on Cumulative Frequency Graphs",
      "content": "A cumulative frequency graph helps to see how many data values lie __________ a certain point. It is useful to estimate the __________, quartiles, and the __________, which measures the spread of the middle 50% of data.",
      "questions": [
        {
          "type": "dropdownCloze",
          "text": "A cumulative frequency graph helps to see how many data values lie {above/below/equal to} a certain point. It is useful to estimate the {mean/median/mode}, quartiles, and the {range/interquartile range/variance}, which measures the spread of the middle 50% of data.",
          "answers": [
            "below",
            "median",
            "interquartile range"
          ]
        }
      ]
    },
    {
      "title": "Practice Question: Interpreting a Cumulative Frequency Graph",
      "content": "The cumulative frequency graph below shows the scores of 60 students in a test. \n\n- How many students scored below 40?\n- Estimate the median score.\n- Calculate the interquartile range.",
      "questions": [
        {
          "type": "shortAnswer",
          "question": "Number of students scoring below 40:",
          "answer": "25",
          "explanation": "From the graph, the cumulative frequency at score 40 is 25."
        },
        {
          "type": "shortAnswer",
          "question": "Median score (50th percentile):",
          "answer": "45",
          "explanation": "Half of 60 is 30; find the score corresponding to cumulative frequency 30 on the graph, which is approximately 45."
        },
        {
          "type": "shortAnswer",
          "question": "Interquartile range (difference between Q3 and Q1):",
          "answer": "20",
          "explanation": "Q1 (25th percentile) corresponds to cumulative frequency 15 (approx score 35); Q3 (75th percentile) corresponds to cumulative frequency 45 (approx score 55). So IQR = 55 - 35 = 20."
        }
      ]
    }
  ]
};