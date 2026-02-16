window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 1)",
  "strapline": "Learn how to construct and interpret cumulative frequency graphs for grouped data to estimate medians and analyse data distributions.",
  "learningObjectives": [
    "Students should be able to construct cumulative frequency graphs by plotting cumulative frequency against the upper class boundaries of grouped data (Maths 6.1)",
    "Students should be able to draw smooth cumulative frequency curves from plotted data (Maths 6.1)",
    "Students should be able to use cumulative frequency graphs to find estimates for the median and interpret data values above or below certain thresholds (Maths 6.1)"
  ],
  "keyFormulas": [
    "Cumulative frequency = sum of frequencies up to a given class interval",
    "Median estimate = value corresponding to cumulative frequency equal to half total frequency on the graph",
    "Upper class boundary = highest value in a class interval"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#333' /><line x1='60' y1='230' x2='320' y2='230' stroke='#666' /><line x1='60' y1='230' x2='60' y2='50' stroke='#666' /><polyline points='60,220 120,180 180,140 240,100 300,70' fill='none' stroke='#1a73e8' stroke-width='3' /><text x='180' y='260' font-family='sans-serif' font-size='12' text-anchor='middle'>Upper Class Boundaries</text><text x='20' y='140' font-family='sans-serif' font-size='12' text-anchor='middle' transform='rotate(-90 20 140)'>Cumulative Frequency</text></svg>",
  "step1": {
    "title": "Concept: Understanding Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies up to a certain point in a grouped data set. To find it, add the frequency for each class interval to the sum of frequencies before it.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling a jar with layers of coins for each day. The cumulative frequency is like counting all the coins you've added up to that day, not just the day's coins.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Cumulative Frequencies",
      "problem": "Here is the frequency table for scores in a test: <br> Class Intervals: 0-10, 10-20, 20-30, 30-40 <br> Frequencies: 3, 7, 5, 5 <br> Calculate the cumulative frequencies step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the cumulative frequency for the first interval 0-10?",
          "answer": "3",
          "feedback": "Correct. It is the same as the frequency for the first class."
        },
        {
          "id": "q2",
          "prompt": "Add the frequency of the second interval (10-20). What is the new cumulative frequency?",
          "answer": "10",
          "feedback": "Great! 3 + 7 = 10 cumulative frequency now."
        },
        {
          "id": "q3",
          "prompt": "Now add the frequency of the third interval (20-30). What is the cumulative frequency?",
          "answer": "15",
          "feedback": "Correct! 10 + 5 equals 15."
        },
        {
          "id": "q4",
          "prompt": "Finally, add the frequency of the last interval (30-40). What is the total cumulative frequency?",
          "answer": "20",
          "feedback": "Well done! 15 + 5 equals 20, the total frequency."
        }
      ]
    }
  },
  "step2": {
    "title": "Plotting Points: Using Upper Class Boundaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When plotting cumulative frequency graphs, use the <strong>upper class boundaries</strong> of intervals as the x-coordinates and cumulative frequencies as the y-coordinates. The upper class boundary is the highest value in each interval, adjusted if needed for gaps.</p>",
    "workedExample": {
      "title": "Worked Example: Identify Upper Class Boundaries",
      "problem": "Given class intervals 0-10, 10-20, 20-30, 30-40, list the upper class boundaries.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the upper class boundary for 0-10?",
          "answer": "10",
          "feedback": "Correct. The highest value in the interval."
        },
        {
          "id": "q2",
          "prompt": "What is the upper class boundary for 10-20?",
          "answer": "20",
          "feedback": "Good. That’s right."
        },
        {
          "id": "q3",
          "prompt": "What is the upper class boundary for 20-30?",
          "answer": "30",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "What is the upper class boundary for 30-40?",
          "answer": "40",
          "feedback": "Excellent."
        }
      ]
    }
  },
  "step3": {
    "title": "Interactive: Plotting Points on a Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now that we have cumulative frequencies and upper class boundaries, plot the points on graph paper or a grid. Each point corresponds to an (upper class boundary, cumulative frequency) pair.</p>",
    "workedExample": {
      "title": "Plotting Example Points",
      "problem": "Using the cumulative frequency data from Step 1 ([10, 20, 30, 40] and cumulative frequencies [3, 10, 15, 20]), plot these points.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Where would you plot the point for upper class boundary 10 with cumulative frequency 3? Provide coordinates as (x,y).",
          "answer": "(10,3)",
          "feedback": "Correct! Plot at (10,3)."
        },
        {
          "id": "q2",
          "prompt": "What coordinates correspond to the second point?",
          "answer": "(20,10)",
          "feedback": "Good job."
        },
        {
          "id": "q3",
          "prompt": "What coordinates correspond to the third point?",
          "answer": "(30,15)",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "What coordinates correspond to the final point?",
          "answer": "(40,20)",
          "feedback": "Well done."
        }
      ]
    }
  },
  "step4": {
    "title": "Drawing the Cumulative Frequency Curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Connect the points using a smooth, <em>S-shaped</em> curve, not straight lines. This <strong>cumulative frequency curve</strong> helps estimate medians and interpret the data smoothly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the curve as a gently flowing river connecting specific water measurement points, allowing you to estimate values between these points easily.</p>"
    },
    "workedExample": {
      "title": "Interactive Drawing Exercise",
      "problem": "Imagine your points are plotted. How would you connect these points? Choose an option:",
      "questions": [
        {
          "id": "q1",
          "prompt": "Option A: Join points with straight lines only. Option B: Draw a smooth curve joining points. Which is correct?",
          "answer": "Option B",
          "feedback": "Correct! Smooth curves represent cumulative frequency better."
        }
      ]
    }
  },
  "step5": {
    "title": "Using the Curve to Estimate the Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To estimate the median from the graph, find half the total frequency on the y-axis, then read across to the curve and down to the x-axis. This gives an estimate of the median value.</p>",
    "workedExample": {
      "title": "Estimating the Median Step-by-Step",
      "problem": "Total cumulative frequency is 20. Find the median using the graph.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is half the total frequency?",
          "answer": "10",
          "feedback": "Correct, half of 20 is 10."
        },
        {
          "id": "q2",
          "prompt": "Draw a horizontal line from y=10 to the curve. Then drop a line vertically to the x-axis. If this aligns with approximately 22, what is the median estimate?",
          "answer": "22",
          "feedback": "Correct! The median is approximately 22."
        }
      ]
    }
  },
  "step6": {
    "title": "Interpreting Values from the Curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use the curve to find the number of data points above or below certain thresholds by locating the threshold on the x-axis and reading the cumulative frequency.</p>",
    "workedExample": {
      "title": "Finding Frequency Above a Threshold",
      "problem": "Using the curve, estimate how many students scored less than 25 if the cumulative frequency at 25 is about 12.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many students scored less than 25?",
          "answer": "12",
          "feedback": "Correct. The cumulative frequency indicates 12 students."
        },
        {
          "id": "q2",
          "prompt": "How many students scored above 25? (Total 20 students)",
          "answer": "8",
          "feedback": "Good! 20 total - 12 below 25 equals 8 above."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cumulative frequency graph shows the results of a test taken by 50 students. The class intervals and frequencies are given below: <br><br> 0-10: 5 <br> 10-20: 15 <br> 20-30: 20 <br> 30-40: 10. <br><br> Using this information, construct a cumulative frequency table and plot the points. <br> Then, draw a smooth cumulative frequency curve and use it to estimate the median score. Finally, estimate how many students scored more than 25.</span>",
      "hint": "Remember to calculate cumulative frequencies carefully and use upper class boundaries to plot. Half the total frequency helps locate the median.",
      "mustHaveKeywords": ["cumulative frequency", "upper class boundary", "median estimate", "smooth curve"],
      "optionalKeywords": ["interpretation", "frequency above a threshold"],
      "modelAnswer": "<span>First, calculate cumulative frequencies: 5, 20, 40, 50. Use upper class boundaries 10, 20, 30, 40. Plot each (boundary, cumulative frequency) pair. Draw a smooth curve through these points. Half the total frequency is 25. Find y=25 on the cumulative frequency axis, draw across to curve and down to x-axis to estimate the median. Then, find cumulative frequency at 25 to estimate how many scored less than 25 and subtract from total for those scoring above.</span>",
      "scaffoldPrompts": [
        "Calculate cumulative frequencies step-by-step",
        "Identify and use upper class boundaries",
        "Plot the points on graph paper or grid",
        "Join points with a smooth S-shaped curve",
        "Find half the total frequency for median estimate",
        "Estimate frequency above a given score"
      ]
    }
  }
};