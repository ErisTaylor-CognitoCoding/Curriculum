window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.3 - Histograms (frequency density, unequal class widths) (Part 1)",
  "strapline": "Learning how to calculate frequency density and construct histograms from grouped data with unequal class widths.",
  "learningObjectives": [
    "Students should calculate frequency density using the formula frequency density = frequency ÷ class width (Maths 6.3)",
    "Students should construct histograms from grouped frequency tables with unequal class intervals, understanding that area represents frequency (Maths 6.3)",
    "Students should interpret histograms by working backwards from frequency density to find actual frequencies (Maths 6.3)"
  ],
  "step1": {
    "title": "Concept: Understanding Frequency Density",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Frequency density is calculated by dividing the frequency of a class by its class width. It acts as the <em>height</em> of the bars in a histogram when class widths vary, ensuring the bar's area accurately represents the frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a garden and want to paint a fence with sections of different widths. To make each section represent the same amount of paint (frequency), the height of the paint on wider sections must be less so that the painted area stays consistent.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Frequency = 30, Class width = 5</span>",
        "<span>Frequency density = 30 ÷ 5 = 6</span>",
        "<span>This means the height of the bar for this class should be 6.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Calculating Class Width",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The class width is the difference between the upper and lower boundaries of a class interval. It tells us how wide each group is in the frequency table.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If a class interval is 20-25, the class width = 25 - 20 = 5</span>",
        "<span>If a class interval is 30-40, the class width = 40 - 30 = 10</span>"
      ]
    }
  },
  "step3": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the class width of the class interval 15-22?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>7</span>",
            "isCorrect": true,
            "explanation": "Correct because 22 - 15 = 7"
          },
          {
            "id": "b",
            "label": "<span>37</span>",
            "isCorrect": false,
            "explanation": "Incorrect because 37 is not the difference of the boundaries"
          },
          {
            "id": "c",
            "label": "<span>15</span>",
            "isCorrect": false,
            "explanation": "Incorrect because 15 is just the lower boundary, not the width."
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Constructing Histograms Using Frequency Density",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When class widths are unequal, the height of a bar in a histogram is its frequency density, not frequency. The width of the bar is the class width, so area (height × width) represents the frequency.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Class interval: 10-20, frequency = 40, class width = 10</span>",
        "<span>Frequency density = 40 ÷ 10 = 4 (height of bar)</span>",
        "<span>Draw a bar from 10 to 20 with height 4</span>",
        "<span>The area of this bar = 4 × 10 = 40, which matches the frequency</span>"
      ]
    }
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the height of a bar when the class widths vary.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "frequencyDensity",
                "label": "frequency density",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "frequency",
                "label": "frequency",
                "isCorrect": false,
                "feedback": "Frequency is not the height when class widths are unequal."
              },
              {
                "value": "classWidth",
                "label": "class width",
                "isCorrect": false,
                "feedback": "Class width is the width of the bar, not its height."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The area of a bar in a histogram represents the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "frequency",
                "label": "frequency",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "classWidth",
                "label": "class width",
                "isCorrect": false,
                "feedback": "Class width does not represent count."
              },
              {
                "value": "frequencyDensity",
                "label": "frequency density",
                "isCorrect": false,
                "feedback": "Frequency density is height, not area."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Interpreting Histograms: Working Backwards from Frequency Density",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If given the frequency density and the class width, you can find the frequency by multiplying them (frequency = frequency density × class width).</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Frequency density = 3, class width = 8</span>",
        "<span>Frequency = 3 × 8 = 24</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>A histogram bar has height 5 and width 4. What is the frequency?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>20</span>",
            "isCorrect": true,
            "explanation": "Area = height × width = 5 × 4 = 20, which is frequency."
          },
          {
            "id": "b",
            "label": "<span>9</span>",
            "isCorrect": false,
            "explanation": "9 is not related to height and width multiplication."
          },
          {
            "id": "c",
            "label": "<span>1.25</span>",
            "isCorrect": false,
            "explanation": "Incorrect calculation."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Summary: Key Formulae",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Frequency Density = Frequency ÷ Class Width</strong><br/><strong>Frequency = Frequency Density × Class Width</strong></p>",
    "workedExample": {
      "title": "Recall Example",
      "bullets": [
        "<span>Frequency = 50, Class width = 5 → Frequency Density = 10</span>",
        "<span>Frequency Density = 6, Class width = 4 → Frequency = 24</span>"
      ]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A grouped frequency table shows the following data: Class intervals 10-15, 15-25, 25-30 with frequencies 20, 30, and 50 respectively.<br/>(a) Calculate the frequency density for each class.<br/>(b) Draw a histogram representing this data.<br/>(c) Given a histogram bar for the interval 15-25 with height 3, work out the frequency represented by this bar.</span>",
      "hint": "Remember to correctly calculate class widths first, then use frequency density = frequency ÷ class width. Use frequency = frequency density × class width when working backwards.",
      "mustHaveKeywords": ["frequency density", "class width", "area represents frequency", "multiply", "divide"],
      "optionalKeywords": ["unequal class widths", "histogram bars", "grouped frequency table"],
      "modelAnswer": "<span>(a) Class widths: 10-15 = 5, 15-25 = 10, 25-30 = 5.<br/>Frequency densities:<br/>10-15: 20 ÷ 5 = 4<br/>15-25: 30 ÷ 10 = 3<br/>25-30: 50 ÷ 5 = 10<br/>(b) Draw bars with widths 5, 10, 5 and heights 4, 3, 10 respectively.<br/>(c) For 15-25 interval: Frequency = height × class width = 3 × 10 = 30.</span>",
      "scaffoldPrompts": ["Calculate class widths first.", "Use frequency density formula to find bar heights.", "Draw bars with correct widths and heights.", "Multiply height and width to find frequency."]
    }
  }
};