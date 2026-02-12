window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 3)",
  "strapline": "Learn how to calculate with upper and lower bounds in multiplication and division problems, applying systematic counting and rounding concepts.",
  "learningObjectives": [
    "Students should apply systematic listing strategies to find the number of possible outcomes of single events and two successive events (Maths 1.1)",
    "Students should calculate with bounds to solve problems involving measurements and rounded values (Maths 1.1)",
    "Students should determine upper and lower bounds of calculations involving multiplication and division (Maths 1.1)"
  ],
  "keyFormulas": [
    "Upper bound = rounded value + half the rounding unit",
    "Lower bound = rounded value - half the rounding unit (or rounded value itself if rounding to nearest unit)",
    "Bounds for multiplication: maximum = upper bound × upper bound, minimum = lower bound × lower bound",
    "Bounds for division: maximum = upper bound ÷ lower bound, minimum = lower bound ÷ upper bound"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='120' height='100' fill='#d3e5ff' stroke='#4a90e2' stroke-width='2'/><text x='110' y='115' font-family='sans-serif' font-size='14' fill='#333' text-anchor='middle'>Rounded Value</text><line x1='170' y1='100' x2='210' y2='100' stroke='#888' stroke-width='2' marker-end='url(#arrow)'/><circle cx='230' cy='100' r='15' fill='#a0d468'/><text x='230' y='105' font-family='sans-serif' font-size='14' fill='#fff' text-anchor='middle'>Upper Bound</text><line x1='170' y1='130' x2='210' y2='130' stroke='#888' stroke-width='2' marker-end='url(#arrow)'/><circle cx='230' cy='130' r='15' fill='#ed5565'/><text x='230' y='135' font-family='sans-serif' font-size='14' fill='#fff' text-anchor='middle'>Lower Bound</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto'><path d='M0,0 L0,6 L9,3 z' fill='#888' /></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a number is rounded to the nearest whole unit, the <strong>upper bound</strong> is the greatest value it could have been before rounding, found by adding half the rounding unit. The <strong>lower bound</strong> is the smallest possible value, which for nearest whole number rounding is the number itself minus half the rounding unit.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of rounding as measuring with a ruler marked only in whole centimeters. If you measure something as 5 cm, it could have been anywhere from 4.5 cm up to just under 5.5 cm.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a length rounded to 7 cm to the nearest whole cm, find the upper bound.</span>",
        "<span>Upper bound = 7 + 0.5 = 7.5 cm</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Calculating Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the smallest value the measurement could be before rounding. For rounding to the nearest whole number, it is the rounded value minus half the rounding unit.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a width rounded to 10 m, the lower bound = 10 - 0.5 = 9.5 m</span>"
      ]
    }
  },
  "step3": {
    "title": "Using Bounds in Multiplication Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying two measurements, to find the possible range of answers, multiply the upper bounds together for the maximum product, and multiply the lower bounds together for the minimum product.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Length = 5.0 m (rounded to nearest 0.1 m). Bounds: 4.95 m to 5.05 m</span>",
        "<span>Width = 3.0 m (rounded to nearest 0.1 m). Bounds: 2.95 m to 3.05 m</span>",
        "<span>Maximum area = 5.05 × 3.05</span>",
        "<span>Minimum area = 4.95 × 2.95</span>"
      ]
    }
  },
  "step4": {
    "title": "Using Bounds in Division Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For division, the maximum value comes from dividing the upper bound of the numerator by the lower bound of the denominator. The minimum value comes from dividing the lower bound of the numerator by the upper bound of the denominator.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Numerator rounded to 50 (nearest 1). Bounds: 49.5 to 50.5</span>",
        "<span>Denominator rounded to 10 (nearest 1). Bounds: 9.5 to 10.5</span>",
        "<span>Maximum quotient = 50.5 ÷ 9.5</span>",
        "<span>Minimum quotient = 49.5 ÷ 10.5</span>"
      ]
    }
  },
  "step5": {
    "title": "Systematic Listing: Outcomes and Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Systematic listing can help make sure you consider all possible combinations of bounds when dealing with two successive events or combined measurements.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given two measurements rounded to nearest 1: 7 and 4</span>",
        "<span>List their bounds: (6.5 to 7.5) and (3.5 to 4.5)</span>",
        "<span>Possible combinations for products: 6.5×3.5, 6.5×4.5, 7.5×3.5, 7.5×4.5</span>",
        "<span>Use this list to find min and max products</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangular board has a length measured as 12.0 m and a width measured as 3.0 m, both rounded to the nearest 0.1 m. Calculate the upper and lower bounds for the possible area of the board.</span>",
      "hint": "Remember to calculate the upper and lower bounds for both length and width before multiplying. Use length upper bound × width upper bound for max area and length lower bound × width lower bound for min area.",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiply", "area"],
      "optionalKeywords": ["rounding unit", "range", "maximum", "minimum"],
      "modelAnswer": "<span>First, identify the rounding unit (0.1 m). The upper bound of length = 12.0 + 0.05 = 12.05 m, lower bound = 12.0 - 0.05 = 11.95 m. The upper bound of width = 3.0 + 0.05 = 3.05 m, lower bound = 3.0 - 0.05 = 2.95 m. The maximum area = 12.05 × 3.05 = 36.7525 m² (approx). The minimum area = 11.95 × 2.95 = 35.2525 m² (approx). So, the area lies between 35.25 m² and 36.75 m².</span>",
      "scaffoldPrompts": [
        "Identify the rounding units for length and width.",
        "Calculate the upper and lower bounds for length and width.",
        "Multiply the bounds to find maximum and minimum area."
      ]
    }
  }
};