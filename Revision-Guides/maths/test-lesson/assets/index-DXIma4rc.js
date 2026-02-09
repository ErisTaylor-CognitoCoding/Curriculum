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
      "concept": "Cumulative frequency graph",
      "explanation": "A graph that shows the cumulative total of frequencies up to each data value, allowing us to see how many data points fall below a particular value."
    },
    {
      "concept": "Median from cumulative frequency graph",
      "explanation": "The median is found by locating half of the total frequency on the y-axis and reading off the corresponding x-value."
    },
    {
      "concept": "Interquartile range estimation",
      "explanation": "By finding the first quartile (25% total frequency) and third quartile (75% total frequency) on the graph, then subtracting, you estimate the spread of the middle 50% of data."
    }
  ],
  "steps": [
    {
      "title": "Introduction to Cumulative Frequency Graphs",
      "content": "A cumulative frequency graph shows the running total of frequencies up to a certain value. It is a useful tool to find how many data points fall below or above specific values, and helps estimate medians, quartiles, and interquartile range.",
      "questions": []
    },
    {
      "title": "Multiple Choice Question: Reading Values from the Graph",
      "content": "If a cumulative frequency graph has a total of 100 data points, what does the y-value at the median represent?",
      "questions": [
        {
          "type": "multipleChoice",
          "question": "What is the cumulative frequency value used to find the median?",
          "options": [
            "25",
            "50",
            "75",
            "100"
          ],
          "answer": "50",
          "explanation": "The median corresponds to the value at half the total frequency, so for 100 data points, this is 50."
        }
      ]
    },
    {
      "title": "Dropdown Cloze: Terminology and Concepts",
      "content": "Complete the sentences about cumulative frequency graphs.",
      "questions": [
        {
          "type": "dropdownCloze",
          "sentence": "The median is found by locating ___(half/quarter/third)___ of the total frequency on the y-axis.",
          "options": ["half", "quarter", "third"],
          "answer": "half"
        },
        {
          "type": "dropdownCloze",
          "sentence": "The interquartile range estimates the range between the ___(first/second/third)___ and ___(first/second/third)___ quartiles.",
          "optionsSets": [
            ["first", "second", "third"],
            ["first", "second", "third"]
          ],
          "answers": ["first", "third"]
        },
        {
          "type": "dropdownCloze",
          "sentence": "To find how many values fall below a threshold, read the cumulative frequency graph at the ___(x/y/z)___-value corresponding to that threshold.",
          "options": ["x", "y", "z"],
          "answer": "x"
        }
      ]
    },
    {
      "title": "Summary: Key Points on Cumulative Frequency Graphs",
      "content": "Cumulative frequency graphs are used to find how many data values fall below a threshold and to estimate the median, quartiles, and interquartile range. The median is at half the total frequency, the first quartile at 25%, and the third quartile at 75%. The interquartile range is the difference between the third and first quartiles.",
      "questions": [
        {
          "type": "dropdownCloze",
          "sentence": "The median corresponds to ___(25%/50%/75%)___ of the total cumulative frequency.",
          "options": ["25%", "50%", "75%"],
          "answer": "50%"
        }
      ]
    },
    {
      "title": "Practice Question: Use a Cumulative Frequency Graph",
      "content": "A cumulative frequency graph shows that at x = 30, the cumulative frequency is 40, and at x = 60, the cumulative frequency is 90. If the total frequency is 100, estimate: (a) How many data points are less than 30? (b) The median value. (c) The interquartile range if the first quartile corresponds to cumulative frequency 25 and the third quartile corresponds to cumulative frequency 75.",
      "questions": [
        {
          "type": "shortAnswer",
          "question": "(a) How many data points are less than 30?",
          "answer": "40",
          "explanation": "The cumulative frequency at x=30 is 40, meaning 40 data points fall below 30."
        },
        {
          "type": "shortAnswer",
          "question": "(b) Estimate the median value from the graph.",
          "answer": "between 45 and 50",
          "explanation": "Half the total frequency is 50. The cumulative frequency reaches 40 at x=30 and 90 at x=60, so the median (50) lies between 30 and 60, closer to 45-50."
        },
        {
          "type": "shortAnswer",
          "question": "(c) Estimate the interquartile range.",
          "answer": "difference between x at 75th percentile and x at 25th percentile",
          "explanation": "Find x-values corresponding to cumulative frequencies 25 and 75, then subtract the smaller from the larger to find the interquartile range."
        }
      ]
    }
  ]
}