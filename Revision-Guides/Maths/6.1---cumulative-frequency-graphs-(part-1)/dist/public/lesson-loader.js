window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 1)",
  "strapline": "Learn how to construct and interpret cumulative frequency graphs to estimate medians and analyze data distributions.",
  "learningObjectives": [
    "Students should be able to construct cumulative frequency graphs by plotting cumulative frequency against the upper class boundaries of grouped data (Maths 6.1)",
    "Students should be able to draw smooth cumulative frequency curves from plotted data (Maths 6.1)",
    "Students should be able to use cumulative frequency graphs to find estimates for the median and interpret data values above or below certain thresholds (Maths 6.1)"
  ],
  "keyFormulas": [
    "Cumulative Frequency = Sum of frequencies up to a given class",
    "Median estimate = Lower class boundary + \\left( \\frac{\\frac{N}{2} - F}{f} \\right) \\times Class width",
    "Interpretation of cumulative frequency graph involves reading values at specified frequencies or class boundaries"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='320' height='220' fill='#f9f9f9' stroke='#333' stroke-width='2'/><line x1='40' y1='250' x2='360' y2='250' stroke='#000' stroke-width='2'/><line x1='40' y1='250' x2='40' y2='30' stroke='#000' stroke-width='2'/><text x='370' y='255' font-family='sans-serif' font-size='12'>Upper Class Boundary</text><text x='10' y='20' font-family='sans-serif' font-size='12' transform='rotate(270 10,20)'>Cumulative Frequency</text><circle cx='100' cy='220' r='4' fill='#0074D9'/><circle cx='160' cy='180' r='4' fill='#0074D9'/><circle cx='220' cy='130' r='4' fill='#0074D9'/><circle cx='280' cy='90' r='4' fill='#0074D9'/><path d='M100 220 Q160 180 220 130 T280 90' fill='none' stroke='#0074D9' stroke-width='2'/></svg>",
  "step1": {
    "title": "Concept 1: What is Cumulative Frequency?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the <strong>running total</strong> of frequencies up to a particular point in a grouped data set. It shows how many data points fall below or within a certain value by adding frequencies as you move through the classes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine counting people entering a stadium, adding up how many have entered by the end of each 10-minute interval to get a running total.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Cumulative Frequency",
      "problem": "Given frequencies for class intervals: 10-20 (5), 20-30 (8), 30-40 (7), find the cumulative frequencies step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the cumulative frequency after the first class (10-20)?",
          "answer": "5",
          "feedback": "Correct! The first cumulative frequency is the frequency of that class itself."
        },
        {
          "id": "q2",
          "prompt": "What is the cumulative frequency after the second class (20-30)?",
          "answer": "13",
          "feedback": "Good! Add 8 to the previous total of 5 to get 13."
        },
        {
          "id": "q3",
          "prompt": "What is the cumulative frequency after the third class (30-40)?",
          "answer": "20",
          "feedback": "Correct! Add 7 to the previous total of 13 to get 20."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Understanding Upper Class Boundaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The upper class boundary is the <strong>highest value</strong> included in each class interval. When plotting cumulative frequencies on a graph, you plot the cumulative frequency against these upper boundaries.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If the class interval is 10-20, the upper class boundary is 20; it is like the finish line in a race.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Upper Class Boundaries",
      "problem": "Find the upper class boundaries for intervals: 0-9, 10-19, 20-29.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the upper class boundary for 0-9?",
          "answer": "9",
          "feedback": "Correct! The highest value in the interval is 9."
        },
        {
          "id": "q2",
          "prompt": "What is the upper class boundary for 10-19?",
          "answer": "19",
          "feedback": "Yes! The upper class boundary for this interval is 19."
        },
        {
          "id": "q3",
          "prompt": "What is the upper class boundary for 20-29?",
          "answer": "29",
          "feedback": "Good job! It is 29 for this class."
        }
      ]
    }
  },
  "step3": {
    "title": "Plotting Points for the Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To construct a cumulative frequency graph, plot points where the x-axis is the <em>upper class boundary</em> and the y-axis is the <em>cumulative frequency</em> for that class.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of marking checkpoints on a map (upper boundary) and noting how many miles you have covered (cumulative frequency) to see your progress.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Plot Points",
      "problem": "From cumulative frequencies: Class intervals and upper boundaries: 10-19 (9), 20-29 (19), cumulative frequencies: 5, 13. Plot the first two points.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What coordinates represent the first point? (Format: x,y)",
          "answer": "9,5",
          "feedback": "Correct! Upper boundary is 9 and cumulative frequency is 5."
        },
        {
          "id": "q2",
          "prompt": "What coordinates represent the second point? (Format: x,y)",
          "answer": "19,13",
          "feedback": "Well done! Upper boundary 19 and cumulative frequency 13."
        }
      ]
    }
  },
  "step4": {
    "title": "Drawing the Smooth Cumulative Frequency Curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Join the plotted points with a smooth, curved line called the <strong>cumulative frequency curve</strong>. This curve is usually <em>S-shaped</em> and helps estimate medians and other values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like following a gently winding river through waypoints, the curve smoothly connects your plotted points.</p>"
    },
    "workedExample": {
      "title": "Practice Drawing",
      "problem": "You have points plotted for a cumulative frequency graph. Try sketching a smooth curve through these points on your paper.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Describe the shape of your curve.",
          "answer": "Smooth S-shape",
          "feedback": "Good! The curve should be smooth and roughly S-shaped."
        }
      ]
    }
  },
  "step5": {
    "title": "Using the Curve to Estimate the Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find an estimate for the median from a cumulative frequency graph, find the total number of data points <strong>N</strong>, locate \\( \\frac{N}{2} \\) on the cumulative frequency axis, then read across to the curve, and down to the x-axis to find the estimated median value.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It&apos;s like finding the halfway mark on a race timeline to see where the median runner crosses the finish line.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimate Median",
      "problem": "Total frequency (N) is 40. On the graph, locate 20 (half of 40) on the y-axis, find the corresponding x-value on the curve.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value on the x-axis at cumulative frequency 20?",
          "answer": "Ask the student to input their estimate from their reading or provide a value from a provided graph image",
          "feedback": "Check if the value is within the expected class interval. If incorrect, prompt to try again."
        }
      ]
    }
  },
  "step6": {
    "title": "Interpreting Data from the Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can also use the curve to estimate how many data points fall below or above certain values by reading the cumulative frequency at those points on the x-axis.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like checking how many people have passed different checkpoints in a race by reading the curve.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimate Number of Data Points",
      "problem": "On the curve, find cumulative frequency at x = 25. How many data points fall below or equal to this value?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Input the cumulative frequency at x = 25.",
          "answer": "Student input required",
          "feedback": "If correct, confirm the student understands cumulative totals."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the cumulative frequency represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The frequency within each class only</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Cumulative frequency is the running total, not just the frequency per class."
          },
          {
            "id": "b",
            "label": "<span>The total frequency up to and including a class</span>",
            "isCorrect": true,
            "explanation": "Correct. It adds all frequencies up to that class."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>When plotting a cumulative frequency graph, on which axis do you plot the upper class boundaries?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>x-axis</span>",
            "isCorrect": true,
            "explanation": "Correct! Upper class boundaries go on the x-axis."
          },
          {
            "id": "b",
            "label": "<span>y-axis</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Cumulative frequency goes on the y-axis."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the running total of frequencies up to a certain point.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "frequency",
                "label": "frequency",
                "isCorrect": false,
                "feedback": "Try again. This is just the number of data in one class."
              },
              {
                "value": "cumulative frequency",
                "label": "cumulative frequency",
                "isCorrect": true,
                "feedback": "Correct! It adds up frequencies as you move through the classes."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the highest value included in a class interval used for plotting.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "lower class boundary",
                "label": "lower class boundary",
                "isCorrect": false,
                "feedback": "Not quite. This is the lowest value."
              },
              {
                "value": "upper class boundary",
                "label": "upper class boundary",
                "isCorrect": true,
                "feedback": "Correct! The x-axis plots use the upper class boundaries."
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
      "prompt": "<span>Explain how to construct and use a cumulative frequency graph to estimate the median of grouped data.</span>",
      "hint": "Remember to plot cumulative frequency against upper class boundaries and find the half total frequency on the graph.",
      "mustHaveKeywords": ["cumulative frequency", "upper class boundary", "plot points", "smooth curve", "estimate median", "half total frequency"],
      "optionalKeywords": ["interpret data", "read values", "class intervals"],
      "modelAnswer": "<span>To construct a cumulative frequency graph, first calculate the cumulative frequency by adding frequencies up to each class. Then plot these cumulative frequencies against the upper class boundaries of each class interval on a graph. Join the points with a smooth curve. To estimate the median, find half the total number of data points (\\( \\frac{N}{2} \\)) on the cumulative frequency axis, draw a horizontal line to meet the curve, then drop down vertically to the x-axis. The x-axis value at this point is the estimated median.</span>",
      "scaffoldPrompts": ["Calculate cumulative frequencies from grouped data", "Plot points against upper class boundaries", "Draw a smooth curve through plotted points", "Find half the total frequency", "Use the curve to estimate the median value"]
    }
  }
};