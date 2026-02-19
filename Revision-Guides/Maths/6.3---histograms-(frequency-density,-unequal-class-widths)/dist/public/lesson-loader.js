window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.3 - Histograms (frequency density, unequal class widths)",
  "strapline": "Learn to construct and interpret histograms with unequal class widths using frequency density to represent data accurately.",
  "learningObjectives": [
    "Students should construct histograms with unequal class widths, understanding that the vertical axis represents frequency density rather than frequency (Maths 6.3)",
    "Students should use the relationship frequency density = frequency ÷ class width to accurately draw and read information from histograms (Maths 6.3)",
    "Students should interpret histograms with unequal class widths to extract and compare data (Maths 6.3)"
  ],
  "keyFormulas": [
    "frequency density = frequency ÷ class width"
  ],
  "diagramHtml": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='240' width='400' height='10' fill='#000'/><rect x='40' y='40' width='10' height='210' fill='#000'/><text x='20' y='50' font-family='sans-serif' font-size='14'>Frequency Density</text><text x='230' y='280' font-family='sans-serif' font-size='14'>Class Intervals</text><rect x='50' y='140' width='40' height='110' fill='#4a90e2' /><rect x='100' y='80' width='60' height='170' fill='#50e3c2' /><rect x='165' y='200' width='30' height='50' fill='#f5a623' /><rect x='200' y='120' width='70' height='130' fill='#d0021b' /><text x='70' y='260' font-family='sans-serif' font-size='12'>5-9</text><text x='120' y='260' font-family='sans-serif' font-size='12'>9-15</text><text x='180' y='260' font-family='sans-serif' font-size='12'>15-18</text><text x='235' y='260' font-family='sans-serif' font-size='12'>18-25</text></svg>",
  "step1": {
    "title": "Concept: What is Frequency Density?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Frequency density is the height of each bar in a histogram where the class widths are <em>unequal</em>. It shows how dense the frequency is over the class interval, calculated by dividing the frequency by the class width. This allows the area of the bar to accurately represent the frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling containers of different widths with water. The water height (frequency density) changes so that the volume (area) reflects the amount of water (frequency).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Frequency Density",
      "problem": "Given the class interval 10-15 with frequency 25 and class interval 15-20 with frequency 10, calculate the frequency densities.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the class width for 10-15?",
          "answer": "5",
          "feedback": "Correct. 15 - 10 = 5."
        },
        {
          "id": "q2",
          "prompt": "Calculate frequency density for the interval 10-15 (frequency ÷ class width).",
          "answer": "5",
          "feedback": "Correct. 25 ÷ 5 = 5."
        },
        {
          "id": "q3",
          "prompt": "What is the class width for 15-20?",
          "answer": "5",
          "feedback": "Correct. 20 - 15 = 5."
        },
        {
          "id": "q4",
          "prompt": "Calculate frequency density for the interval 15-20 (frequency ÷ class width).",
          "answer": "2",
          "feedback": "Correct. 10 ÷ 5 = 2."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Class Width",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Class width is the size or range of each interval in grouped data. It is calculated by subtracting the lower boundary of a class from the upper boundary.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of each class as a shelf on a bookcase: the width is how wide the shelf is, which determines how many books (data points) fit.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find Class Widths",
      "problem": "Find the class widths for intervals 5-10, 10-20, and 20-25.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Class width of 5-10?",
          "answer": "5",
          "feedback": "Correct, 10 - 5 = 5."
        },
        {
          "id": "q2",
          "prompt": "Class width of 10-20?",
          "answer": "10",
          "feedback": "Correct, 20 - 10 = 10."
        },
        {
          "id": "q3",
          "prompt": "Class width of 20-25?",
          "answer": "5",
          "feedback": "Correct, 25 - 20 = 5."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Why Do We Use Frequency Density for Unequal Widths?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When class widths are unequal, using frequency on the vertical axis can mislead, as wider classes naturally accumulate more frequency. Frequency density accounts for the different widths, showing a fair comparison through bar heights.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine comparing how crowded two different-sized rooms are. Just counting people (frequency) is unfair if one room is bigger; you need to consider people per square meter (frequency density) instead.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Histogram Axis Explanation",
      "problem": "If one class is twice as wide as another but has the same frequency, explain why the histogram bar representing the wider class should be shorter when using frequency density.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What will happen to frequency density if class width doubles but frequency stays the same?",
          "answer": "It halves",
          "feedback": "Correct. Since frequency density = frequency ÷ class width, doubling width halves density."
        },
        {
          "id": "q2",
          "prompt": "How should the height of the bar for the wider class compare to the narrower class in the histogram?",
          "answer": "It should be shorter",
          "feedback": "Correct. The bar is shorter to show lower frequency density."
        }
      ]
    }
  },
  "step4": {
    "title": "Constructing a Histogram with Unequal Class Widths",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To construct a histogram with unequal class widths: calculate frequency densities for each class, set these on the vertical axis, use class intervals on the horizontal axis, and draw bars with widths matching class widths and heights matching frequency densities.</p>",
    "workedExample": {
      "title": "Worked Example: Drawing Bars Step-by-Step",
      "problem": "Using the data below, calculate frequency densities and plot bar heights for each class:<br/><table border='1' cellpadding='4'><tr><th>Class Interval</th><th>Frequency</th></tr><tr><td>0-2</td><td>6</td></tr><tr><td>2-5</td><td>15</td></tr><tr><td>5-10</td><td>20</td></tr></table>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate class width for 0-2",
          "answer": "2",
          "feedback": "Correct. 2 - 0 = 2."
        },
        {
          "id": "q2",
          "prompt": "Calculate frequency density for 0-2",
          "answer": "3",
          "feedback": "Correct. 6 ÷ 2 = 3."
        },
        {
          "id": "q3",
          "prompt": "Calculate class width for 2-5",
          "answer": "3",
          "feedback": "Correct. 5 - 2 = 3."
        },
        {
          "id": "q4",
          "prompt": "Calculate frequency density for 2-5",
          "answer": "5",
          "feedback": "Correct. 15 ÷ 3 = 5."
        },
        {
          "id": "q5",
          "prompt": "Calculate class width for 5-10",
          "answer": "5",
          "feedback": "Correct. 10 - 5 = 5."
        },
        {
          "id": "q6",
          "prompt": "Calculate frequency density for 5-10",
          "answer": "4",
          "feedback": "Correct. 20 ÷ 5 = 4."
        }
      ]
    }
  },
  "step5": {
    "title": "Interpreting Histograms with Unequal Class Widths",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The area of each bar represents the frequency of the class. By comparing areas, you can compare actual frequencies even if the bars have different widths and heights.</p>",
    "workedExample": {
      "title": "Worked Example: Comparing Frequencies from Histogram",
      "problem": "Two bars on a histogram have: Bar A (width = 2, height = 6), Bar B (width = 4, height = 3). Which class has a higher frequency?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate area of Bar A (frequency ≈ area = width × height).",
          "answer": "12",
          "feedback": "Correct. 2 × 6 = 12."
        },
        {
          "id": "q2",
          "prompt": "Calculate area of Bar B.",
          "answer": "12",
          "feedback": "Correct. 4 × 3 = 12."
        },
        {
          "id": "q3",
          "prompt": "Which bar represents a larger frequency, or are they equal?",
          "answer": "Equal",
          "feedback": "Correct. Both have equal area, so frequencies are equal."
        }
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Why do histograms with unequal class widths use frequency density on the vertical axis instead of frequency?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Because frequency density adjusts for different widths, allowing fair comparison of data</span>",
            "isCorrect": true,
            "explanation": "Correct. Frequency density accounts for varying class widths."
          },
          {
            "id": "b",
            "label": "<span>Because frequency is always harder to calculate</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Frequency is known but does not adjust for class width."
          },
          {
            "id": "c",
            "label": "<span>Because frequency density is always smaller than frequency</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Size difference isn’t the key reason for using frequency density."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What is the frequency density for a class with frequency 18 and class width 3?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>6</span>",
            "isCorrect": true,
            "explanation": "Correct. 18 ÷ 3 = 6."
          },
          {
            "id": "b",
            "label": "<span>21</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This confuses addition with division."
          },
          {
            "id": "c",
            "label": "<span>15</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Frequency density is frequency divided by class width, not multiplied."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> represents the height of each bar when class widths are unequal in a histogram.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "frequency density",
                "label": "frequency density",
                "isCorrect": true,
                "feedback": "Correct! Frequency density is used for bar heights."
              },
              {
                "value": "frequency",
                "label": "frequency",
                "isCorrect": false,
                "feedback": "Try again. Frequency is shown by area when class widths are unequal."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is calculated by subtracting the lower boundary from the upper boundary of a class interval.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "class width",
                "label": "class width",
                "isCorrect": true,
                "feedback": "Correct! This is how class width is found."
              },
              {
                "value": "frequency density",
                "label": "frequency density",
                "isCorrect": false,
                "feedback": "Try again. Frequency density is calculated differently."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A frequency table for test scores is shown with unequal class widths:</span><br/><table border='1' cellpadding='4'><tr><th>Score Interval</th><th>Frequency</th></tr><tr><td>0-10</td><td>15</td></tr><tr><td>10-15</td><td>20</td></tr><tr><td>15-25</td><td>30</td></tr></table><br/><span>Construct a histogram representing this data, explaining how you calculate frequency densities and use them to draw bars. Then interpret which score range is most densely populated.</span>",
      "hint": "<span>Calculate class widths first; then frequency densities; finally plot bar heights using frequency density and bar widths as class widths.</span>",
      "mustHaveKeywords": ["frequency density", "class width", "frequency ÷ class width", "histogram bar height", "area represents frequency"],
      "optionalKeywords": ["unequal class widths", "data interpretation"],
      "modelAnswer": "<span>First, find class widths: 0-10 is 10, 10-15 is 5, 15-25 is 10. Next, calculate frequency densities: 15 ÷ 10 = 1.5, 20 ÷ 5 = 4, and 30 ÷ 10 = 3. Draw bars with widths equal to class widths and heights equal to frequency densities. The bar for 10-15 is tallest, showing highest frequency density — this interval is the most densely populated. The area of bars reflects the frequency for each interval.</span>",
      "scaffoldPrompts": [
        "Find class widths by subtracting boundaries.",
        "Calculate frequency density using frequency ÷ class width.",
        "Use frequency densities to determine bar heights.",
        "Draw histogram bars using correct widths and heights.",
        "Analyze and compare bar heights to interpret data density."
      ]
    }
  }
};