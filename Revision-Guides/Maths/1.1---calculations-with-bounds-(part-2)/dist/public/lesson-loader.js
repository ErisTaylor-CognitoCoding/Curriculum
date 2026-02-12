window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 2)",
  "strapline": "Applying upper and lower bounds concepts to compound measures and solving problems involving maximum and minimum values.",
  "learningObjectives": [
    "Students should be able to apply the concepts of upper and lower bounds to calculate the bounds of compound measures and expressions involving rounded values (Maths 1.1)",
    "Students should be able to solve problems involving calculations with bounds, including error intervals and maximum/minimum values (Maths 1.1)",
    ""
  ],
  "keyFormulas": [
    "Upper bound = rounded value + half the rounding unit",
    "Lower bound = rounded value - half the rounding unit",
    "Error Interval: lower bound ≤ value < upper bound",
    "To find maximum/minimum values in compound calculations, combine the largest/smallest possible bounds appropriately"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f9f9f9' stroke='#555' stroke-width='2'/><text x='200' y='90' font-family='Arial' font-size='16' fill='#333' text-anchor='middle'>Upper and Lower Bounds on a Number Line</text><line x1='100' y1='150' x2='300' y2='150' stroke='#666' stroke-width='3' /><circle cx='150' cy='150' r='8' fill='#0074D9' /><text x='150' y='175' font-family='Arial' font-size='14' fill='#0074D9' text-anchor='middle'>(Lower Bound)</text><circle cx='250' cy='150' r='8' fill='#FF4136' /><text x='250' y='175' font-family='Arial' font-size='14' fill='#FF4136' text-anchor='middle'>(Upper Bound)</text><line x1='150' y1='140' x2='250' y2='140' stroke='#AAA' stroke-dasharray='5,5' stroke-width='2'/></svg>",
  "step1": {
    "title": "Concept 1: Understanding Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> of a rounded number is the maximum it could be before rounding, while the <strong>lower bound</strong> is the minimum it could be. For example, if a length is 5 cm rounded to the nearest cm, the lower bound is 4.5 cm and the upper bound is just under 5.5 cm (5.5 not included).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine measuring a rope that you round to the nearest meter. The rope could be a little shorter than 5.5 m but not quite 5.5 m, so 5.5 m is like a ceiling you cannot cross — that’s the upper bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A length is given as 7 cm to the nearest cm.</span>",
        "<span>Calculate its lower bound: 7 - 0.5 = 6.5 cm.</span>",
        "<span>Calculate its upper bound: 7 + 0.5 = 7.5 cm (not included).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Understanding Error Intervals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The error interval expresses the range in which a rounded value lies using inequalities. For a number rounded to the nearest unit, the error interval is between the lower and upper bounds. For example, if <em>x</em> = 5 cm (to nearest cm), then 4.5 ≤ <em>x</em> &lt; 5.5.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Value rounds to 12 to the nearest whole number.</span>",
        "<span>Write the error interval: 11.5 ≤ x &lt; 12.5.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Compound Calculations with Bounds - Addition and Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When adding or subtracting rounded values, calculate the lowest possible result by adding/subtracting the lower bounds, and the highest possible result by adding/subtracting the upper bounds.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Length A = 4.0 cm (to nearest 0.1 cm), so bounds are 3.95 ≤ A &lt; 4.05.</span>",
        "<span>Length B = 3.2 cm (to nearest 0.1 cm), so bounds are 3.15 ≤ B &lt; 3.25.</span>",
        "<span>Minimum sum = 3.95 + 3.15 = 7.10 cm.</span>",
        "<span>Maximum sum = 4.05 + 3.25 = 7.30 cm.</span>"
      ]
    }
  },
  "step4": {
    "title": "Compound Calculations with Bounds - Multiplication and Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying or dividing bounds, consider all combinations of upper and lower bounds from each value to find the maximum and minimum possible results. The maximum is the largest result from any combination and the minimum is the smallest result.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Value A = 2 cm (nearest 0.1 cm), bounds: 1.95 ≤ A &lt; 2.05.</span>",
        "<span>Value B = 3 cm (nearest 0.1 cm), bounds: 2.95 ≤ B &lt; 3.05.</span>",
        "<span>Calculate all products: 1.95 × 2.95, 1.95 × 3.05, 2.05 × 2.95, 2.05 × 3.05.</span>",
        "<span>Minimum is smallest product, maximum is largest product.</span>"
      ]
    }
  },
  "step5": {
    "title": "Applying Error Intervals and Bounds to Solve Problems",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use upper and lower bounds to determine error intervals and solve real-life problems involving maximum and minimum calculated values such as dimensions, areas, or rates, accounting for rounding errors.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A rectangle’s length is 10 m (nearest meter), width is 5 m (nearest meter).</span>",
        "<span>Calculate bounds for length: 9.5 ≤ L &lt; 10.5.</span>",
        "<span>Calculate bounds for width: 4.5 ≤ W &lt; 5.5.</span>",
        "<span>Minimum area = 9.5 × 4.5 = 42.75 m².</span>",
        "<span>Maximum area = 10.5 × 5.5 = 57.75 m².</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cylinder’s height is 15 cm to the nearest cm, and its radius is 7 cm to the nearest cm. Calculate the minimum and maximum possible volumes of the cylinder using the bounds. Assume volume V = πr²h.</span>",
      "hint": "Remember to calculate upper and lower bounds for height and radius first. Then consider all combinations of bounds to find minimum and maximum volumes.",
      "mustHaveKeywords": ["upper bound", "lower bound", "maximum volume", "minimum volume", "bounds", "compound calculation"],
      "optionalKeywords": ["error interval", "π", "volume formula"],
      "modelAnswer": "<span>First, find bounds: height 15 cm means 14.5 ≤ h &lt; 15.5; radius 7 cm means 6.5 ≤ r &lt; 7.5.</span><br/><span>Volume formula V = πr²h means volume depends on r squared and h.</span><br/><span>Calculate volumes using all combinations: minimum volume = π × (6.5)² × 14.5; maximum volume = π × (7.5)² × 15.5.</span><br/><span>This gives the minimum and maximum possible volumes considering the rounding bounds.</span>",
      "scaffoldPrompts": [
        "Calculate upper and lower bounds for height and radius.",
        "List all combinations of radius and height bounds.",
        "Square the radius bounds before multiplication.",
        "Multiply by corresponding height bounds to find volume bounds.",
        "Identify the minimum and maximum volume from your calculations."
      ]
    }
  }
};