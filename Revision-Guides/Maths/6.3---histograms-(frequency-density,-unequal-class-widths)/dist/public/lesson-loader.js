window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "6.3 - Histograms (frequency density, unequal class widths)",
  "strapline": "Learn to construct and interpret histograms with unequal class widths using frequency density for accurate data representation.",
  "learningObjectives": [
    "Students should construct histograms with unequal class widths, understanding that the vertical axis represents frequency density rather than frequency (Maths 6.3)",
    "Students should use the relationship frequency density = frequency ÷ class width to accurately draw and read information from histograms (Maths 6.3)",
    "Students should interpret histograms with unequal class widths to extract and compare data (Maths 6.3)"
  ],
  "keyFormulas": [
    "Frequency density = Frequency ÷ Class width",
    "Class width = Upper boundary − Lower boundary",
    "Area of histogram bar = Frequency (Height × Width)"
  ],
  "diagramHtml": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg'>\
  <rect x='50' y='200' width='50' height='50' fill='#4A90E2' />\
  <rect x='110' y='150' width='100' height='100' fill='#50E3C2' />\
  <rect x='220' y='125' width='80' height='125' fill='#F5A623' />\
  <line x1='50' y1='200' x2='300' y2='200' stroke='#000' />\
  <line x1='50' y1='50' x2='50' y2='200' stroke='#000' />\
  <text x='75' y='270' font-family='sans-serif' font-size='12' text-anchor='middle'>5</text>\
  <text x='160' y='270' font-family='sans-serif' font-size='12' text-anchor='middle'>10</text>\
  <text x='260' y='270' font-family='sans-serif' font-size='12' text-anchor='middle'>8</text>\
  <text x='20' y='200' font-family='sans-serif' font-size='12' text-anchor='end'>0</text>\
  <text x='20' y='150' font-family='sans-serif' font-size='12' text-anchor='end'>50</text>\
  <text x='20' y='100' font-family='sans-serif' font-size='12' text-anchor='end'>100</text>\
  <text x='20' y='60' font-family='sans-serif' font-size='12' text-anchor='end'>150</text>\
  <text x='175' y='20' font-family='sans-serif' font-size='14' font-weight='bold' text-anchor='middle'>Histogram with Unequal Class Widths</text>\
  <text x='275' y='210' font-family='sans-serif' font-size='12'>Class Width</text>\
  <text x='10' y='40' font-family='sans-serif' font-size='12' transform='rotate(-90 10,40)'>Frequency Density</text>\
  </svg>",
  "step1": {
    "title": "Understanding Frequency Density",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When class widths in a histogram are unequal, the height of each bar is not the frequency but the <strong>frequency density</strong>. Frequency density is calculated as the <em>frequency divided by the class width</em>. This ensures that the area of each bar correctly represents the frequency of that class.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have different-sized sections of a garden with flowers; the number of flowers per square meter (density) might give a fair comparison even if the sections are different sizes.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Frequency Density",
      "problem": "A class interval 10-15 has a frequency of 30. Calculate the frequency density.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the class width for the interval 10-15?",
          "answer": "5",
          "feedback": "Correct! 15 - 10 = 5."
        },
        {
          "id": "q2",
          "prompt": "Calculate the frequency density (frequency ÷ class width).",
          "answer": "6",
          "feedback": "Correct! 30 ÷ 5 = 6."
        }
      ]
    }
  },
  "step2": {
    "title": "Defining Class Width",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>class width</strong> is the difference between the upper and lower boundaries of a class interval. Unequal class widths mean that the intervals may cover different ranges, for example: 10-15 and 15-25.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of each class interval as a piece of land — some plots might be bigger or smaller than others.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Class Width",
      "problem": "Find the class width for the interval 20-30.",
      "questions": [
        {
          "id": "q3",
          "prompt": "What is the upper boundary of the class interval?",
          "answer": "30",
          "feedback": "Correct! The upper boundary is 30."
        },
        {
          "id": "q4",
          "prompt": "What is the lower boundary of the class interval?",
          "answer": "20",
          "feedback": "Correct! The lower boundary is 20."
        },
        {
          "id": "q5",
          "prompt": "Calculate the class width (upper boundary - lower boundary).",
          "answer": "10",
          "feedback": "Correct! 30 − 20 = 10."
        }
      ]
    }
  },
  "step3": {
    "title": "Why Frequency Density is Needed for Unequal Class Widths",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When class widths vary, simply plotting frequencies can misrepresent data. Using frequency density on the vertical axis adjusts for different widths so that the area of each bar accurately reflects frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you paint fences of varying widths, measuring just the height of paint won't tell you how much was used; the area matters.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Interpret Frequency Density",
      "problem": "Class intervals and frequencies: 0–5 (20), 5–15 (30). Why might the taller bar not indicate more frequency in the 5–15 interval?",
      "questions": [
        {
          "id": "q6",
          "prompt": "Calculate the frequency density for 0–5 interval.",
          "answer": "4",
          "feedback": "Correct! 20 ÷ 5 = 4."
        },
        {
          "id": "q7",
          "prompt": "Calculate the frequency density for 5–15 interval.",
          "answer": "3",
          "feedback": "Correct! 30 ÷ 10 = 3."
        },
        {
          "id": "q8",
          "prompt": "Which interval has the higher frequency density?",
          "answer": "0–5",
          "feedback": "Correct! Even though frequency is larger for 5–15, density is higher for 0–5."
        }
      ]
    }
  },
  "step4": {
    "title": "Constructing a Histogram with Unequal Class Widths",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To construct the histogram, first calculate the frequency density for each interval. Then plot bars where the width represents the class width, and the height represents the frequency density.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine stretching or squeezing the base of bars according to class width, while adjusting height to match frequency density, so that the area corresponds accurately to frequency.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Drawing a Histogram",
      "problem": "Given the data: Class 1–3 frequency 15, Class 3–5 frequency 10, calculate heights and widths of bars.",
      "questions": [
        {
          "id": "q9",
          "prompt": "Calculate class width for 1–3.",
          "answer": "2",
          "feedback": "Correct! 3 − 1 = 2."
        },
        {
          "id": "q10",
          "prompt": "Calculate frequency density for 1–3.",
          "answer": "7.5",
          "feedback": "Correct! 15 ÷ 2 = 7.5."
        },
        {
          "id": "q11",
          "prompt": "Calculate class width for 3–5.",
          "answer": "2",
          "feedback": "Correct! 5 − 3 = 2."
        },
        {
          "id": "q12",
          "prompt": "Calculate frequency density for 3–5.",
          "answer": "5",
          "feedback": "Correct! 10 ÷ 2 = 5."
        }
      ]
    }
  },
  "step5": {
    "title": "Reading Information from Histograms with Unequal Class Widths",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the frequency of a class from a histogram, multiply the frequency density (height) by the class width (bar width). Remember that the area represents the frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like calculating the area of a rectangle to find total paint used, here the area gives total frequency.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Extracting Frequency from Histogram",
      "problem": "A histogram bar has height (frequency density) 8 and width (class width) 4. Calculate the frequency.",
      "questions": [
        {
          "id": "q13",
          "prompt": "Multiply frequency density and class width to find frequency.",
          "answer": "32",
          "feedback": "Correct! 8 × 4 = 32."
        }
      ]
    }
  },
  "step6": {
    "title": "Interpreting and Comparing Data from Histograms",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Comparing bars in histograms with unequal widths requires understanding the frequency density (height) and class width (width). Differences in area, not just height, reflect actual differences in frequency.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Two buckets may look different in height or width, but the volume (area of base × height) tells you exactly how much water they hold.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing Frequencies",
      "problem": "Class A bar has height 6 and width 3, Class B bar has height 4 and width 5. Which has higher frequency?",
      "questions": [
        {
          "id": "q14",
          "prompt": "Calculate frequency of Class A.",
          "answer": "18",
          "feedback": "Correct! 6 × 3 = 18."
        },
        {
          "id": "q15",
          "prompt": "Calculate frequency of Class B.",
          "answer": "20",
          "feedback": "Correct! 4 × 5 = 20."
        },
        {
          "id": "q16",
          "prompt": "Which class has the higher frequency?",
          "answer": "Class B",
          "feedback": "Correct! Class B has frequency 20 which is greater than Class A's 18."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A grouped frequency table with uneven class widths is given below. Construct a histogram using frequency density, and then answer questions about the data.</span><br><table border='1' cellpadding='4' cellspacing='0'><tr><th>Class Interval</th><th>Frequency</th></tr><tr><td>0–4</td><td>12</td></tr><tr><td>4–9</td><td>18</td></tr><tr><td>9–15</td><td>15</td></tr></table>",
      "hint": "Calculate class widths first, then frequency densities. Use these to plot height and width of bars.",
      "mustHaveKeywords": ["frequency density", "class width", "area represents frequency"],
      "optionalKeywords": ["unequal intervals", "interpretation"],
      "modelAnswer": "<span>First calculate class widths: 0–4 is 4, 4–9 is 5, 9–15 is 6.<br>Calculate frequency densities: 12 ÷ 4 = 3, 18 ÷ 5 = 3.6, 15 ÷ 6 = 2.5.<br>Draw histogram bars with widths 4, 5, and 6, and heights 3, 3.6, and 2.5 respectively.<br>To find frequency from bars, multiply height by width (area). Interpreting the histogram shows that the middle class has highest frequency density indicating concentration of data.</span>",
      "scaffoldPrompts": [
        "Calculate each class width.",
        "Calculate frequency density for each interval.",
        "Sketch histogram bars with correct widths and heights.",
        "Find the area of each bar to verify frequency.",
        "Compare frequency densities to interpret data."
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 600 350' xmlns='http://www.w3.org/2000/svg'>\
    <line x1='50' y1='300' x2='550' y2='300' stroke='#000' />\
    <line x1='50' y1='50' x2='50' y2='300' stroke='#000' />\
    <rect x='50' y='180' width='80' height='120' fill='#337AB7' />\
    <rect x='130' y='144' width='100' height='156' fill='#5CB85C' />\
    <rect x='230' y='195' width='120' height='105' fill='#F0AD4E' />\
    <text x='90' y='320' font-family='sans-serif' font-size='12' text-anchor='middle'>0–4</text>\
    <text x='180' y='320' font-family='sans-serif' font-size='12' text-anchor='middle'>4–9</text>\
    <text x='290' y='320' font-family='sans-serif' font-size='12' text-anchor='middle'>9–15</text>\
    <text x='10' y='180' font-family='sans-serif' font-size='12' text-anchor='end'>60</text>\
    <text x='10' y='240' font-family='sans-serif' font-size='12' text-anchor='end'>40</text>\
    <text x='10' y='300' font-family='sans-serif' font-size='12' text-anchor='end'>0</text>\
    <text x='300' y='40' font-family='sans-serif' font-size='14' font-weight='bold'>Histogram for Unequal Class Widths</text>\
    <text x='300' y='325' font-family='sans-serif' font-size='12'>Class Interval</text>\
    <text x='20' y='175' font-family='sans-serif' font-size='12' transform='rotate(-90 20,175)'>Frequency Density</text>\
    </svg>"
  }
};