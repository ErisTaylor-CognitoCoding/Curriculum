window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 2)",
  "strapline": "Understanding how to calculate with upper and lower bounds in compound measures and solve related problems.",
  "learningObjectives": [
    "Students should be able to apply the concepts of upper and lower bounds to calculate the bounds of compound measures and expressions involving rounded values (Maths 1.1)",
    "Students should be able to solve problems involving calculations with bounds, including error intervals and maximum/minimum values (Maths 1.1)",
    ""
  ],
  "keyFormulas": [
    "Upper bound = value + half the rounding unit",
    "Lower bound = value - half the rounding unit",
    "For compound measures: use max/min combinations of bounds to find overall max/min",
    "Error interval: expressed as inequalities to show possible value range"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='120' width='100' height='60' fill='#e0f7fa' stroke='#00796b' stroke-width='2'/><text x='100' y='90' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#004d40'>Length = 5 cm (rounded)</text><line x1='50' y1='120' x2='40' y2='180' stroke='#004d40' stroke-width='1' marker-end='url(#arrow)'/><line x1='150' y1='120' x2='160' y2='180' stroke='#004d40' stroke-width='1' marker-end='url(#arrow)'/><text x='20' y='200' font-family='sans-serif' font-size='14' fill='#004d40'>Lower bound = 4.5 cm</text><text x='170' y='200' font-family='sans-serif' font-size='14' fill='#004d40'>Upper bound &lt; 5.5 cm</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6' fill='#004d40' /></marker></defs></svg>",
  "step1": {
    "title": "Concept: Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The upper bound is the highest possible value before rounding, and the lower bound is the lowest possible value. For example, if a length is 5 cm rounded to the nearest cm, the lower bound is 4.5 cm and the upper bound is just under 5.5 cm.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a box that can hold items between 4.5 cm and 5.499... cm long. The exact length of the item is unknown but must fit somewhere in this box.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Length given as 5 cm to nearest cm</span>",
        "<span>Lower bound = 4.5 cm</span>",
        "<span>Upper bound = 5.5 cm (not including)</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Error Intervals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Error intervals express the possible values of a rounded number using inequalities. For example, if x is 5 cm rounded to the nearest cm, then 4.5 ≤ x < 5.5.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Value: 7.2 m rounded to 1 decimal place</span>",
        "<span>Lower bound = 7.15 m</span>",
        "<span>Upper bound = 7.25 m (not including)</span>",
        "<span>Error interval: 7.15 ≤ x < 7.25</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Compound Calculations with Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When rounding values are used in calculations (such as area or speed), calculate the upper and lower bounds of each value first, then combine them to find the maximum and minimum results.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Width = 3.4 m to 1 decimal place; bounds 3.35 to 3.45</span>",
        "<span>Length = 5.2 m to 1 decimal place; bounds 5.15 to 5.25</span>",
        "<span>Calculate area bounds: minimum area = 3.35 × 5.15, maximum area = 3.45 × 5.25</span>"
      ]
    }
  },
  "step4": {
    "title": "Practice: Calculate Bounds for Addition and Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For addition and subtraction, find the sum or difference of the upper bounds and lower bounds to get the maximum and minimum possible answers.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>5.3 ± 0.05 and 3.7 ± 0.05</span>",
        "<span>Lower bound of total = 5.25 + 3.65 = 8.9</span>",
        "<span>Upper bound of total = 5.35 + 3.75 = 9.1</span>"
      ]
    }
  },
  "step5": {
    "title": "Practice: Calculate Bounds for Multiplication and Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For multiplication and division, consider all combinations of upper and lower bounds to find the maximum and minimum possible results, as this can be more complex.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Length bounds: 4.95 to 5.05, Width bounds: 2.95 to 3.05</span>",
        "<span>Calculate all products: 4.95 × 2.95, 4.95 × 3.05, 5.05 × 2.95, 5.05 × 3.05</span>",
        "<span>Maximum product is the largest of these</span>",
        "<span>Minimum product is the smallest of these</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangle has lengths rounded to the nearest cm as 15 cm and 8 cm. Calculate the upper and lower bounds for its area.</span>",
      "hint": "Remember to find the bounds for each side first, then calculate all possible area bounds to find the minimum and maximum area.",
      "mustHaveKeywords": ["upper bound", "lower bound", "area", "multiply", "maximum", "minimum"],
      "optionalKeywords": ["compound calculations", "error intervals"],
      "modelAnswer": "<span>First, find the bounds for each side: 15 cm rounded to nearest cm has lower bound 14.5 cm and upper bound just under 15.5 cm. Similarly, 8 cm has bounds 7.5 cm and just under 8.5 cm. Calculate all combinations for area: minimum area = 14.5 × 7.5 = 108.75 cm², maximum area = 15.5 × 8.5 = 131.75 cm². Therefore, the area lies between 108.75 cm² and 131.75 cm².</span>",
      "scaffoldPrompts": [
        "Identify bounds for the first length",
        "Identify bounds for the second length",
        "Calculate the smallest possible area",
        "Calculate the largest possible area"
      ]
    }
  }
};