window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.3 - Histograms (frequency density, unequal class widths) (Part 1)",
  "strapline": "Understanding how to calculate frequency density, construct histograms with unequal class widths, and interpret these histograms through area calculations.",
  "learningObjectives": [
    "Students should calculate frequency density using the formula frequency density = frequency \u00f7 class width (Maths 6.3)",
    "Students should construct histograms from grouped frequency tables with unequal class intervals, understanding that area represents frequency (Maths 6.3)",
    "Students should interpret histograms by working backwards from frequency density to find actual frequencies (Maths 6.3)"
  ],
  "keyFormulas": [
    "Frequency density = frequency \u00f7 class width",
    "Area of histogram bar = frequency density \u00d7 class width = frequency",
    "Class width = upper boundary - lower boundary"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='60' width='80' height='150' fill='#4a90e2' /><rect x='150' y='100' width='120' height='110' fill='#50e3c2' /><rect x='275' y='80' width='40' height='130' fill='#f5a623' /><line x1='50' y1='210' x2='350' y2='210' stroke='#333' stroke-width='2'/><line x1='50' y1='210' x2='50' y2='40' stroke='#333' stroke-width='2'/><text x='90' y='225' font-family='sans-serif' font-size='14' text-anchor='middle'>10-18</text><text x='210' y='225' font-family='sans-serif' font-size='14' text-anchor='middle'>18-30</text><text x='295' y='225' font-family='sans-serif' font-size='14' text-anchor='middle'>30-34</text><text x='20' y='60' font-family='sans-serif' font-size='14' text-anchor='middle' transform='rotate(-90 20,60)'>Frequency Density</text><text x='200' y='30' font-family='sans-serif' font-size='16' font-weight='bold' text-anchor='middle'>Histogram with Unequal Class Widths</text></svg>",
  "step1": {
    "title": "Concept: Frequency Density",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Frequency density is a key value calculated by dividing the frequency of a class by its class width. It is used as the height of each bar in a histogram when class widths are not equal, so the area of the bar correctly represents the frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling bars of different widths with water. The height of water (frequency density) changes with the width to ensure the total volume (area) corresponds to the amount of water (frequency).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Frequency Density",
      "problem": "Calculate the frequency density for a class with frequency 40 and class width 8.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the frequency?",
          "answer": "40",
          "feedback": "Correct. The frequency is 40."
        },
        {
          "id": "q2",
          "prompt": "What is the class width?",
          "answer": "8",
          "feedback": "Correct. The class width is 8."
        },
        {
          "id": "q3",
          "prompt": "Calculate frequency density using frequency \u00f7 class width.",
          "answer": "5",
          "feedback": "Well done! 40 \u00f7 8 = 5."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Class Width",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Class width is the length of an interval in a grouped frequency table. It is calculated by subtracting the lower boundary from the upper boundary of the class. Unequal class widths mean we must use frequency density instead of just frequency as bar height in histograms.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of different width shelves holding the same number of books. The amount of books divided by shelf width gives the 'density' of books on each shelf.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Class Width",
      "problem": "Find the class width of the interval 15 to 24.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the upper boundary of the class?",
          "answer": "24",
          "feedback": "Correct. The upper boundary is 24."
        },
        {
          "id": "q2",
          "prompt": "What is the lower boundary of the class?",
          "answer": "15",
          "feedback": "Correct. The lower boundary is 15."
        },
        {
          "id": "q3",
          "prompt": "Calculate the class width (upper boundary - lower boundary).",
          "answer": "9",
          "feedback": "Well done! 24 - 15 = 9."
        }
      ]
    }
  },
  "step3": {
    "title": "Constructing a Histogram",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When constructing histograms with unequal class widths, the height of each bar must be the frequency density. The width is the class width, so the area represents the frequency.</p>",
    "workedExample": {
      "title": "Worked Example: Drawing Histogram Bars",
      "problem": "Given class 10-15 with frequency 20 and class 15-25 with frequency 40, find the correct height (frequency density) of each bar.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the class width of 10-15?",
          "answer": "5",
          "feedback": "Correct. 15 - 10 = 5."
        },
        {
          "id": "q2",
          "prompt": "Calculate frequency density for 10-15 (20 \u00f7 5).",
          "answer": "4",
          "feedback": "Correct, frequency density is 4."
        },
        {
          "id": "q3",
          "prompt": "What is the class width of 15-25?",
          "answer": "10",
          "feedback": "Correct, 25 - 15 = 10."
        },
        {
          "id": "q4",
          "prompt": "Calculate frequency density for 15-25 (40 \u00f7 10).",
          "answer": "4",
          "feedback": "Correct, frequency density is 4."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Area Represents Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In histograms with unequal class widths, the area of each bar (height \u00d7 width) equals the class's frequency. This links frequency density and frequency directly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you paint bars of different widths but with heights adjusted to keep the painted area representing the number of items, the total paint on each bar corresponds to frequency.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using Area to Find Frequency",
      "problem": "A histogram bar has width 4 and height (frequency density) 3. Find the frequency.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the formula connecting frequency, frequency density and class width?",
          "answer": "frequency = frequency density \u00d7 class width",
          "feedback": "Correct! Frequency is area = height \u00d7 width."
        },
        {
          "id": "q2",
          "prompt": "Calculate frequency (3 \u00d7 4).",
          "answer": "12",
          "feedback": "Well done. The frequency is 12."
        }
      ]
    }
  },
  "step5": {
    "title": "Interpreting Histograms: Working Backwards",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Given a histogram with bars of known frequency density and class width, you can find the frequency by multiplying both. This helps when working with given histograms to find missing frequencies.</p>",
    "workedExample": {
      "title": "Worked Example: Find Frequency from Histogram Bar",
      "problem": "A histogram bar shows a class width of 6 and a frequency density of 2.5. Find the frequency.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the class width?",
          "answer": "6",
          "feedback": "Correct, the class width is 6."
        },
        {
          "id": "q2",
          "prompt": "What is the frequency density?",
          "answer": "2.5",
          "feedback": "Correct, the frequency density is 2.5."
        },
        {
          "id": "q3",
          "prompt": "Calculate the frequency (frequency density \u00d7 class width).",
          "answer": "15",
          "feedback": "Excellent! 2.5 \u00d7 6 = 15."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A grouped frequency table has classes 5\u201310, 10\u201320, and 20\u201335 with frequencies 15, 25, and 30 respectively. Calculate the frequency density for each class and draw a histogram based on this data. Explain why the area of each bar represents the frequency.</span>",
      "hint": "Calculate class widths first, find each frequency density then remember: Area = frequency density \u00d7 class width.",
      "mustHaveKeywords": ["frequency density", "class width", "area represents frequency", "histogram"],
      "optionalKeywords": ["unequal class widths", "grouped frequency table"],
      "modelAnswer": "<span>First, calculate class widths: 5\u201310 is 5, 10\u201320 is 10, 20\u201335 is 15. Then, frequency densities are frequencies divided by class widths: 15\u00f75=3, 25\u00f710=2.5, and 30\u00f715=2. The histogram bars should have widths equal to each class width and heights equal to the frequency densities. The area of each bar equals frequency because height (frequency density) multiplied by width (class width) gives the frequency.</span>",
      "scaffoldPrompts": [
        "What is the width of each class interval?",
        "Calculate frequency density for each class.",
        "Explain how to use frequency density and class width to draw the histogram.",
        "Describe how the area of a bar relates to frequency."
      ]
    }
  }
};