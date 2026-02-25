window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.3 - Histograms (frequency density, unequal class widths)",
  "strapline": "Learn how to construct and interpret histograms when class widths are unequal, focusing on frequency density and accurate data representation.",
  "learningObjectives": [
    "Students should construct histograms with unequal class widths, understanding that the vertical axis represents frequency density rather than frequency (Maths 6.3)",
    "Students should use the relationship frequency density = frequency ÷ class width to accurately draw and read information from histograms (Maths 6.3)",
    "Students should interpret histograms with unequal class widths to extract and compare data (Maths 6.3)"
  ],
  "keyFormulas": [
    "Frequency density = frequency \u00f7 class width",
    "Class width = upper boundary - lower boundary",
    "Area of bar = frequency (frequency density \u00d7 class width)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='280' height='200' fill='#f9f9f9' stroke='#666' stroke-width='2'/><line x1='50' y1='250' x2='330' y2='250' stroke='#333' stroke-width='2'/><line x1='50' y1='50' x2='50' y2='250' stroke='#333' stroke-width='2'/><text x='190' y='270' font-family='sans-serif' font-size='14' text-anchor='middle'>Class intervals</text><text transform='rotate(-90)' x='-150' y='30' font-family='sans-serif' font-size='14' text-anchor='middle'>Frequency Density</text><rect x='70' y='180' width='40' height='70' fill='#4287f5'/><rect x='120' y='140' width='60' height='110' fill='#42f554'/><rect x='185' y='100' width='30' height='150' fill='#f58a42'/><rect x='220' y='160' width='90' height='90' fill='#f54291'/><text x='90' y='265' font-family='sans-serif' font-size='12' text-anchor='middle'>10-15</text><text x='150' y='265' font-family='sans-serif' font-size='12' text-anchor='middle'>15-21</text><text x='200' y='265' font-family='sans-serif' font-size='12' text-anchor='middle'>21-24</text><text x='265' y='265' font-family='sans-serif' font-size='12' text-anchor='middle'>24-33</text></svg>",
  "step1": {
    "title": "Understanding Frequency Density",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In histograms with unequal class widths, the height of each bar is the <strong>frequency density</strong>, not simply the frequency. This ensures that the <em>area</em> of the bar accurately represents the frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling containers of different widths with water. The water height changes depending on the container width to hold the same volume. Similarly, bars have different widths but heights adjust (frequency density) so areas (frequency) stay accurate.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Frequency Density",
      "problem": "A class interval is 10-15 with frequency 25. Calculate its frequency density.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the <strong>class width</strong> of the interval 10-15?",
          "answer": "5",
          "feedback": "Correct. 15 - 10 = 5."
        },
        {
          "id": "q2",
          "prompt": "Using frequency density = frequency ÷ class width, what is the frequency density?",
          "answer": "5",
          "feedback": "Correct. 25 ÷ 5 = 5."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Class Width",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Class width is the size or span of each interval in the data. It is found by subtracting the lower boundary from the upper boundary.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of class width as the length of a shelf segment where you place your books. The wider the segment, the more books can fit inside it.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Class Width",
      "problem": "Find the class width for the interval 21-29.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Subtract the lower boundary from the upper boundary: 29 - 21 = ?",
          "answer": "8",
          "feedback": "Correct. Class width = 8."
        }
      ]
    }
  },
  "step3": {
    "title": "Unequal Class Widths and Their Impact",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When class intervals have different widths, using frequency directly for bar height would distort the data. Instead, use <strong>frequency density</strong> for the vertical axis, so the bar's area, not height, represents frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine drawing rectangles representing water volumes. If widths differ, heights must adjust to show the same volume accurately.</p>"
    }
  },
  "step4": {
    "title": "Calculating Frequency Density for Multiple Classes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Calculate the frequency density for each class interval using frequency density = frequency ÷ class width.</p>",
    "workedExample": {
      "title": "Worked Example: Frequency Densities for Unequal Class Widths",
      "problem": "Use the following data: <br><br>Class Intervals: 10-15, 15-21, 21-24 <br>Frequencies: 30, 42, 36",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the class width for 15-21.",
          "answer": "6",
          "feedback": "Correct. 21 - 15 = 6."
        },
        {
          "id": "q2",
          "prompt": "Calculate frequency density for 10-15 (frequency 30, width 5).",
          "answer": "6",
          "feedback": "Correct. 30 ÷ 5 = 6."
        },
        {
          "id": "q3",
          "prompt": "Calculate frequency density for 15-21 (frequency 42, width 6).",
          "answer": "7",
          "feedback": "Correct. 42 ÷ 6 = 7."
        },
        {
          "id": "q4",
          "prompt": "Calculate frequency density for 21-24 (frequency 36, width 3).",
          "answer": "12",
          "feedback": "Correct. 36 ÷ 3 = 12."
        }
      ]
    }
  },
  "step5": {
    "title": "Constructing the Histogram",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Draw the histogram using class intervals on the horizontal axis and frequency density on the vertical axis. Each bar's width matches the class width, and bar height is the calculated frequency density.</p>",
    "workedExample": {
      "title": "Worked Example: Drawing a Histogram",
      "problem": "Using data from the previous step, sketch bars for each class interval with the correct widths and frequency densities. Visualise a bar from x=10 to 15 with height 6, from 15 to 21 with height 7, and from 21 to 24 with height 12.",
      "questions": []
    },
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='350' y2='250' stroke='#000' stroke-width='2'/><line x1='50' y1='50' x2='50' y2='250' stroke='#000' stroke-width='2'/><text x='200' y='280' font-family='sans-serif' font-size='14' text-anchor='middle'>Class Intervals</text><text transform='rotate(-90)' x='-150' y='20' font-family='sans-serif' font-size='14' text-anchor='middle'>Frequency Density</text><rect x='50' y='190' width='50' height='60' fill='#4a90e2'/><rect x='100' y='180' width='60' height='70' fill='#50e3c2'/><rect x='160' y='120' width='30' height='130' fill='#f5a623'/><text x='75' y='265' font-family='sans-serif' font-size='12' text-anchor='middle'>10-15</text><text x='130' y='265' font-family='sans-serif' font-size='12' text-anchor='middle'>15-21</text><text x='175' y='265' font-family='sans-serif' font-size='12' text-anchor='middle'>21-24</text></svg>"
  },
  "step6": {
    "title": "Interpreting Histograms with Unequal Class Widths",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the histogram to compare frequencies by looking at the area of each bar. Even if a bar is taller with a narrow width, it might represent a smaller frequency than a wider but shorter bar.</p>",
    "workedExample": {
      "title": "Worked Example: Comparing Frequencies",
      "problem": "Given two bars: one with width 2 and height 15, another with width 5 and height 6, which represents a higher frequency?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the frequency for bar 1: 2 x 15 = ?",
          "answer": "30",
          "feedback": "Correct. Frequency = 30."
        },
        {
          "id": "q2",
          "prompt": "Calculate the frequency for bar 2: 5 x 6 = ?",
          "answer": "30",
          "feedback": "Correct. Frequency = 30."
        },
        {
          "id": "q3",
          "prompt": "Do both bars represent the same frequency?",
          "answer": "Yes",
          "feedback": "Correct, the area (frequency) is the same despite different heights and widths."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Why do we use frequency density instead of frequency on the vertical axis in histograms with unequal class widths?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>To ensure the area of each bar represents the frequency</span>",
            "isCorrect": true,
            "explanation": "Correct. Frequency density adjusts for unequal widths so bar areas correctly show frequency."
          },
          {
            "id": "b",
            "label": "<span>Because frequency is always smaller than frequency density</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The choice is to accurately represent data, not due to size comparison."
          },
          {
            "id": "c",
            "label": "<span>Because class widths are always equal</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Frequency density is used especially when class widths are unequal."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The height of each bar in a histogram with unequal class widths represents the <span class=\"font-semibold\">_____</span>, which is calculated by dividing the frequency by the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "frequency density", "label": "frequency density", "isCorrect": true, "feedback": "Correct!"},
              {"value": "frequency", "label": "frequency", "isCorrect": false, "feedback": "Try again. The height is frequency density, not frequency."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "class width", "label": "class width", "isCorrect": true, "feedback": "Correct!"},
              {"value": "frequency", "label": "frequency", "isCorrect": false, "feedback": "Try again. Frequency density divides frequency by class width."}
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A grouped frequency table shows the following data:</span><br><br><table border='1' cellpadding='5' cellspacing='0'><tr><th>Class Interval</th><th>Frequency</th></tr><tr><td>5-10</td><td>20</td></tr><tr><td>10-15</td><td>40</td></tr><tr><td>15-25</td><td>30</td></tr><tr><td>25-35</td><td>50</td></tr></table><br><span>Construct a histogram with unequal class widths on graph paper. Then, explain how you calculate the frequency density for each class and use it to draw the histogram.</span>",
      "hint": "Calculate class widths, then frequency densities using frequency ÷ class width. Draw bars with widths equal to class widths and heights equal to frequency densities.",
      "mustHaveKeywords": ["frequency density", "class width", "frequency ÷ class width", "area represents frequency"],
      "optionalKeywords": ["unequal intervals", "accurate data representation"],
      "modelAnswer": "<span>First, calculate the class width for each interval: 5, 5, 10, and 10 respectively. Then, calculate frequency density for each by dividing the frequency by the class width: 20 ÷ 5 = 4, 40 ÷ 5 = 8, 30 ÷ 10 = 3, 50 ÷ 10 = 5. Finally, on the histogram, draw each bar with the class width on the horizontal axis and the frequency density on the vertical axis. The area of each bar corresponds to the frequency, ensuring an accurate representation despite unequal widths.</span>",
      "scaffoldPrompts": [
        "Start by identifying the class widths for all intervals.",
        "Calculate the frequency densities using the formula.",
        "Sketch the histogram using widths and heights corresponding to the class widths and frequency densities."
      ]
    }
  }
};