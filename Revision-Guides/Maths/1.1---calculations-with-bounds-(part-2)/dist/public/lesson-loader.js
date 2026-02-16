window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 2)",
  "strapline": "Understanding how to apply upper and lower bounds to compound measures and solve problems involving error intervals and maximum/minimum calculations.",
  "learningObjectives": [
    "Students should be able to apply the concepts of upper and lower bounds to calculate the bounds of compound measures and expressions involving rounded values (Maths 1.1)",
    "Students should be able to solve problems involving calculations with bounds, including error intervals and maximum/minimum values (Maths 1.1)",
    ""
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='150' text-anchor='middle' font-family='sans-serif'>Bounds Visualization</text><line x1='120' y1='150' x2='280' y2='150' stroke='blue' stroke-width='2' marker-start='url(#arrow)' marker-end='url(#arrow)'/><text x='80' y='140' font-family='sans-serif' font-size='12'>Lower Bound</text><text x='290' y='140' font-family='sans-serif' font-size='12'>Upper Bound</text><defs><marker id='arrow' viewBox='0 0 10 10' refX='5' refY='5' markerWidth='4' markerHeight='4' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='blue'/></marker></defs></svg>",
  "step1": {
    "title": "Concept 1: Understanding Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a measurement is rounded, the <strong>upper bound</strong> is the highest possible original value before rounding and the <strong>lower bound</strong> is the lowest. For example, if a length is given as <strong>5 cm to the nearest cm</strong>, the lower bound is 4.5 cm and the upper bound is 5.5 cm (but the value is less than 5.5 cm).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the bounds like the edges of a box where the actual number could lie anywhere inside. If you say the box is 5 cm, it might actually be anywhere between 4.5 cm and just under 5.5 cm.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Bounds",
      "problem": "A rod length is recorded as <strong>7 cm to the nearest cm</strong>. Find the lower and upper bounds.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the lower bound for the rod length?",
          "answer": "6.5",
          "feedback": "Correct! The lower bound is 7 - 0.5 = 6.5 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the upper bound for the rod length?",
          "answer": "7.5",
          "feedback": "Correct! The upper bound is 7 + 0.5 = 7.5 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Error Intervals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>error interval</strong> expresses the range of possible values using inequality notation. For example, if <em>x = 5 cm to the nearest cm</em>, then the error interval is <strong>4.5 ≤ x &lt; 5.5</strong>. This describes all possible actual values that round to 5.</p>",
    "workedExample": {
      "title": "Worked Example: Writing Error Intervals",
      "problem": "Given a measurement of <strong>12 m to the nearest meter</strong>, write the error interval using inequalities.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the inequality including the lower bound.",
          "answer": "11.5 ≤ x",
          "feedback": "Good! The measurement is at least 11.5 m."
        },
        {
          "id": "q2",
          "prompt": "Complete the inequality with the upper bound (less than).",
          "answer": "12.5",
          "feedback": "Correct! The upper bound is less than 12.5 m."
        },
        {
          "id": "q3",
          "prompt": "Write the full error interval.",
          "answer": "11.5 ≤ x < 12.5",
          "feedback": "Excellent! This interval shows all possible actual values."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Compound Calculations with Bounds (Addition and Subtraction)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When adding or subtracting rounded numbers, calculate the minimum and maximum possible results by combining the lower and upper bounds accordingly. For example, to find the bounds of <em>a + b</em>, add the lower bounds for the minimum sum and the upper bounds for the maximum sum.</p>",
    "workedExample": {
      "title": "Worked Example: Adding Two Rounded Values",
      "problem": "Two lengths are 3 cm and 4 cm, both rounded to the nearest cm. Calculate the bounds of their sum.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the lower bound of the 3 cm length?",
          "answer": "2.5",
          "feedback": "Correct! Lower bound = 3 - 0.5 = 2.5 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the upper bound of the 3 cm length?",
          "answer": "3.5",
          "feedback": "Correct! Upper bound = 3 + 0.5 = 3.5 cm."
        },
        {
          "id": "q3",
          "prompt": "What is the lower bound of the 4 cm length?",
          "answer": "3.5",
          "feedback": "Good! Lower bound is 4 - 0.5 = 3.5 cm."
        },
        {
          "id": "q4",
          "prompt": "What is the upper bound of the 4 cm length?",
          "answer": "4.5",
          "feedback": "Correct! Upper bound is 4 + 0.5 = 4.5 cm."
        },
        {
          "id": "q5",
          "prompt": "Calculate the minimum possible sum by adding the lower bounds.",
          "answer": "6",
          "feedback": "Yes! 2.5 + 3.5 = 6 cm."
        },
        {
          "id": "q6",
          "prompt": "Calculate the maximum possible sum by adding the upper bounds.",
          "answer": "8",
          "feedback": "Correct! 3.5 + 4.5 = 8 cm."
        }
      ]
    }
  },
  "step4": {
    "title": "Compound Calculations with Bounds (Multiplication and Division)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For multiplication or division involving rounded values, we consider all combinations of upper and lower bounds to find the maximum and minimum possible values. This is because multiplying or dividing bounds can produce maximum results from either upper or lower bounds depending on sign and sizes.</p>",
    "workedExample": {
      "title": "Worked Example: Multiplying Bounds",
      "problem": "A length of 5 cm and a width of 3 cm are given, both rounded to the nearest cm. Find the bounds for the area by multiplying these lengths.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the lower bound of the length.",
          "answer": "4.5",
          "feedback": "Correct! Lower bound = 5 - 0.5 = 4.5 cm."
        },
        {
          "id": "q2",
          "prompt": "Find the upper bound of the length.",
          "answer": "5.5",
          "feedback": "Correct! Upper bound = 5 + 0.5 = 5.5 cm."
        },
        {
          "id": "q3",
          "prompt": "Find the lower bound of the width.",
          "answer": "2.5",
          "feedback": "Good! Lower bound = 3 - 0.5 = 2.5 cm."
        },
        {
          "id": "q4",
          "prompt": "Find the upper bound of the width.",
          "answer": "3.5",
          "feedback": "Correct! Upper bound = 3 + 0.5 = 3.5 cm."
        },
        {
          "id": "q5",
          "prompt": "Calculate the smallest possible area (minimum) by trying all combinations of bounds.",
          "answer": "11.25",
          "feedback": "Correct! Minimum area = 4.5 × 2.5 = 11.25 cm²."
        },
        {
          "id": "q6",
          "prompt": "Calculate the largest possible area (maximum) by trying all combinations of bounds.",
          "answer": "19.25",
          "feedback": "Almost correct. Try 5.5 × 3.5 = 19.25 cm²."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying Bounds to Expressions with Multiple Operations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When expressions contain several operations with rounded values (for example, addition and multiplication), calculate bounds step-by-step using the bounds from the previous results and apply the combination principles at each step.</p>",
    "workedExample": {
      "title": "Worked Example: Step-by-step Bounds for Combined Expression",
      "problem": "Calculate the bounds for the expression (rounded to nearest cm): (6 + 4) × 3.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the lower and upper bounds for 6 cm.",
          "answer": "Lower: 5.5; Upper: 6.5",
          "feedback": "Correct! Lower bound is 6 - 0.5 = 5.5, upper bound is 6 + 0.5 = 6.5."
        },
        {
          "id": "q2",
          "prompt": "Find the lower and upper bounds for 4 cm.",
          "answer": "Lower: 3.5; Upper: 4.5",
          "feedback": "Correct! Lower bound is 4 - 0.5 = 3.5, upper bound is 4 + 0.5 = 4.5."
        },
        {
          "id": "q3",
          "prompt": "Calculate the minimum and maximum sums of (6 + 4) using these bounds.",
          "answer": "Min: 5.5 + 3.5 = 9; Max: 6.5 + 4.5 = 11",
          "feedback": "Great! Sum bounds: 9 (min) and 11 (max)."
        },
        {
          "id": "q4",
          "prompt": "Find the lower and upper bounds for 3 cm.",
          "answer": "Lower: 2.5; Upper: 3.5",
          "feedback": "Correct! Bounds for 3 cm are 2.5 and 3.5."
        },
        {
          "id": "q5",
          "prompt": "Find the minimum value of the entire expression by multiplying the smallest sum and smallest 3.",
          "answer": "9 × 2.5 = 22.5",
          "feedback": "Correct! Minimum is 9 × 2.5 = 22.5."
        },
        {
          "id": "q6",
          "prompt": "Find the maximum value of the entire expression by multiplying the largest sum and largest 3.",
          "answer": "11 × 3.5 = 38.5",
          "feedback": "Good! Maximum is 11 × 3.5 = 38.5."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangle has its length given as 7 cm to the nearest cm and its width given as 4 cm to the nearest cm. Find the possible upper and lower bounds for the area of the rectangle. Explain your method clearly.</span>",
      "hint": "Remember to calculate the bounds for both the length and width before multiplying to find the bounds of the area.",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiply", "error interval"],
      "optionalKeywords": ["inequality", "compound calculations", "maximum area", "minimum area"],
      "modelAnswer": "<span>First, calculate the lower and upper bounds for the length: 6.5 cm ≤ length < 7.5 cm. Next, calculate the lower and upper bounds for the width: 3.5 cm ≤ width < 4.5 cm. To find the minimum possible area, multiply the lower bounds: 6.5 × 3.5 = 22.75 cm². To find the maximum possible area, multiply the upper bounds: 7.5 × 4.5 = 33.75 cm². Therefore, the area lies within the bounds 22.75 cm² ≤ area < 33.75 cm².</span>",
      "scaffoldPrompts": ["Calculate bounds of length", "Calculate bounds of width", "Find minimum area by multiplying lower bounds", "Find maximum area by multiplying upper bounds"]
    }
  }
};