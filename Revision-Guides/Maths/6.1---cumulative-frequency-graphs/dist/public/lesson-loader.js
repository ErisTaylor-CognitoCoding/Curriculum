window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.1 - Cumulative frequency graphs",
  "strapline": "Understanding how to construct and interpret cumulative frequency graphs to find medians and quartiles.",
  "learningObjectives": [
    "Students should construct cumulative frequency graphs by plotting cumulative frequencies against upper class boundaries (Maths 6.1)",
    "Students should interpret cumulative frequency graphs to read off median values and quartiles from the curve (Maths 6.1)"
  ],
  "keyFormulas": [
    "Cumulative Frequency at a class boundary = sum of all frequencies up to that boundary",
    "Median value ≈ value of x at which cumulative frequency = n/2 (where n is total frequency)",
    "Quartiles correspond to cumulative frequencies at n/4 (Q1) and 3n/4 (Q3)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='320' height='230' fill='#f9f9f9' stroke='#333'/><line x1='50' y1='250' x2='350' y2='250' stroke='#555' stroke-width='2'/><line x1='50' y1='250' x2='50' y2='40' stroke='#555' stroke-width='2'/><text x='200' y='280' text-anchor='middle' font-family='sans-serif' font-size='14'>Upper Class Boundaries</text><text x='15' y='150' font-family='sans-serif' font-size='14' transform='rotate(-90 15 150)'>Cumulative Frequency</text><circle cx='100' cy='200' r='4' fill='#0074D9'/><circle cx='150' cy='170' r='4' fill='#0074D9'/><circle cx='200' cy='140' r='4' fill='#0074D9'/><circle cx='250' cy='110' r='4' fill='#0074D9'/><circle cx='300' cy='80' r='4' fill='#0074D9'/><path d='M100 200 Q125 185 150 170 T200 140 T250 110 T300 80' stroke='#0074D9' stroke-width='2' fill='none'/></svg>",
  "step1": {
    "title": "Concept: What is Cumulative Frequency?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to a certain upper class boundary. You add each class frequency to the sum of all previous frequencies to get these values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of filling a bucket with water in stages. Each class frequency is a bucket of water you add. The cumulative frequency is the total amount of water after each stage.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Cumulative Frequency",
      "problem": "Given the frequency table: 5, 8, 10, 7, calculate cumulative frequencies step-by-step.",
      "questions": [
        {
          "id": "cf1",
          "prompt": "What is the cumulative frequency after the first class (frequency 5)?",
          "answer": "5",
          "feedback": "Correct! The total after first class is just 5."
        },
        {
          "id": "cf2",
          "prompt": "Add the second frequency (8) to the first total. What is the new total?",
          "answer": "13",
          "feedback": "Well done! 5 + 8 = 13."
        },
        {
          "id": "cf3",
          "prompt": "Add the next frequency (10). What is the updated cumulative frequency?",
          "answer": "23",
          "feedback": "Correct! 13 + 10 = 23."
        },
        {
          "id": "cf4",
          "prompt": "Finally, add 7. What is the total cumulative frequency?",
          "answer": "30",
          "feedback": "Excellent! 23 + 7 = 30."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Upper Class Boundaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Upper class boundaries are the highest values in each class interval. On a cumulative frequency graph, you'll plot cumulative frequencies against these boundaries on the x-axis.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a ruler divided into blocks; the upper boundary marks the end of each block.</p>"
    },
    "workedExample": {
      "title": "Identifying Upper Class Boundaries",
      "problem": "If the class intervals are 10-20, 20-30, 30-40, what are the upper class boundaries?",
      "questions": [
        {
          "id": "ucb1",
          "prompt": "What is the upper class boundary for 10-20?",
          "answer": "20",
          "feedback": "Correct! The upper boundary is 20."
        },
        {
          "id": "ucb2",
          "prompt": "What is the upper class boundary for 20-30?",
          "answer": "30",
          "feedback": "Right! It is 30."
        },
        {
          "id": "ucb3",
          "prompt": "What is the upper class boundary for 30-40?",
          "answer": "40",
          "feedback": "Exactly! The boundary is 40."
        }
      ]
    }
  },
  "step3": {
    "title": "Plotting a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To draw a cumulative frequency graph, plot each cumulative frequency point against its upper class boundary. Then join these points smoothly to draw the cumulative frequency curve (ogive).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like connecting dots on a map with a smooth path, showing a gradual increase.</p>"
    },
    "workedExample": {
      "title": "Plot Points and Draw the Curve",
      "problem": "Given upper class boundaries: 20, 30, 40, 50 and cumulative frequencies: 5, 13, 23, 30, plot the points and draw the curve. First, identify the coordinates to plot.",
      "questions": [
        {
          "id": "plot1",
          "prompt": "What is the first point to plot (x,y)?",
          "answer": "(20,5)",
          "feedback": "Correct! First point is (20,5)."
        },
        {
          "id": "plot2",
          "prompt": "What is the second point (x,y)?",
          "answer": "(30,13)",
          "feedback": "Yes! The second point is (30,13)."
        },
        {
          "id": "plot3",
          "prompt": "What is the third point (x,y)?",
          "answer": "(40,23)",
          "feedback": "Good! The third point is (40,23)."
        },
        {
          "id": "plot4",
          "prompt": "What is the fourth point (x,y)?",
          "answer": "(50,30)",
          "feedback": "Excellent! Fourth point is (50,30)."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='320' height='230' fill='#fff' stroke='#000'/><line x1='50' y1='250' x2='350' y2='250' stroke='#000' stroke-width='2'/><line x1='50' y1='250' x2='50' y2='40' stroke='#000' stroke-width='2'/><text x='200' y='280' text-anchor='middle' font-family='sans-serif' font-size='14'>Upper Class Boundaries</text><text x='15' y='150' font-family='sans-serif' font-size='14' transform='rotate(-90 15 150)'>Cumulative Frequency</text><circle cx='110' cy='230' r='5' fill='#FF4136'/><circle cx='160' cy='207' r='5' fill='#FF4136'/><circle cx='210' cy='170' r='5' fill='#FF4136'/><circle cx='260' cy='150' r='5' fill='#FF4136'/></svg>"
  },
  "step4": {
    "title": "Interpreting the Median from a Cumulative Frequency Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the value corresponding to half the total frequency (n/2). On the cumulative frequency graph, find n/2 on the y-axis, then read horizontally to the curve and down to the x-axis to estimate the median.</p>",
    "workedExample": {
      "title": "Finding the Median",
      "problem": "If total frequency n = 30, find where 15 (n/2) lies on the y-axis and estimate the median from the curve.",
      "questions": [
        {
          "id": "median1",
          "prompt": "What is n/2 if n = 30?",
          "answer": "15",
          "feedback": "Correct! Half of 30 is 15."
        },
        {
          "id": "median2",
          "prompt": "Using the graph, find the upper class boundary value on the x-axis where cumulative frequency reaches 15.",
          "answer": "Approximately 33",
          "feedback": "Good! The median is about 33."
        }
      ]
    }
  },
  "step5": {
    "title": "Using the Graph to Find Quartiles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quartiles divide the data into four equal parts. Q1 is the value at cumulative frequency n/4, and Q3 at 3n/4. Estimate these from the graph just like the median.</p>",
    "workedExample": {
      "title": "Estimating Quartiles",
      "problem": "For n = 30, find Q1 and Q3 on the cumulative frequency graph.",
      "questions": [
        {
          "id": "q1-1",
          "prompt": "Calculate n/4 for n=30.",
          "answer": "7.5",
          "feedback": "Correct! One quarter of 30 is 7.5."
        },
        {
          "id": "q1-2",
          "prompt": "Calculate 3n/4 for n=30.",
          "answer": "22.5",
          "feedback": "Right! Three quarters of 30 is 22.5."
        },
        {
          "id": "q1-3",
          "prompt": "Use the graph to estimate the upper class boundary for Q1 (cumulative frequency = 7.5).",
          "answer": "Approximately 23",
          "feedback": "Good! Q1 is near 23."
        },
        {
          "id": "q1-4",
          "prompt": "Use the graph to estimate the upper class boundary for Q3 (cumulative frequency = 22.5).",
          "answer": "Approximately 38",
          "feedback": "Excellent! Q3 is about 38."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A frequency table for exam scores is:<br>Scores: 0-10, 10-20, 20-30, 30-40, 40-50<br>Frequencies: 2, 6, 8, 12, 7<br>Construct a cumulative frequency table and draw a cumulative frequency graph. Then estimate the median and quartiles.</span>",
      "hint": "Calculate cumulative frequencies first, then plot against upper class boundaries. Use n/2, n/4, and 3n/4 on the y-axis to estimate median and quartiles from the graph.",
      "mustHaveKeywords": ["cumulative frequency", "upper class boundary", "median", "quartiles", "curve", "n/2", "n/4", "3n/4"],
      "optionalKeywords": ["ogive", "smooth curve", "interpolation"],
      "modelAnswer": "<span>First, calculate cumulative frequencies: 2, 8, 16, 28, 35.<br>Plot against upper class boundaries: 10, 20, 30, 40, 50.<br>Draw a smooth curve connecting these points.<br>Total frequency n=35, so median is at 17.5, Q1 at 8.75, Q3 at 26.25.<br>From the graph estimate median ~ 28, Q1 ~ 18, Q3 ~ 38.<br>This shows how to interpret the cumulative frequency graph to find median and quartiles.</span>",
      "scaffoldPrompts": [
        "Step 1: Calculate cumulative frequencies from the given frequencies.",
        "Step 2: Identify upper class boundaries for each class interval.",
        "Step 3: Plot cumulative frequencies against these boundaries on graph paper.",
        "Step 4: Draw a smooth curve through the points.",
        "Step 5: Locate n/4, n/2, and 3n/4 on the y-axis.",
        "Step 6: Draw horizontal lines from these points to meet the curve, then drop vertical lines to read x-values for quartiles and median."
      ]
    }
  }
};