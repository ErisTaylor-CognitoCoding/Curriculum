window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 2)",
  "strapline": "Applying upper and lower bounds to compound calculations and solving problems with error intervals and maximum/minimum values.",
  "learningObjectives": [
    "Students should be able to apply the concepts of upper and lower bounds to calculate the bounds of compound measures and expressions involving rounded values (Maths 1.1)",
    "Students should be able to solve problems involving calculations with bounds, including error intervals and maximum/minimum values (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept 1: Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> is the maximum value a number could have been before rounding, while the <strong>lower bound</strong> is the minimum value. For example, if a length is given as 5 cm to the nearest cm, the lower bound is 4.5 cm and the upper bound is 5 cm (up to but not including 5.5 cm).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you estimate your daily walking distance to be about 5 km, but really it could be slightly less or more depending on your exact route; these are your bounds.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given length = 5 cm to nearest cm.</span>",
        "<span>Lower bound = 4.5 cm (halfway point before 5).</span>",
        "<span>Upper bound = 5.5 cm (not included).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Error Intervals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>error interval</strong> expresses the range of possible values for a rounded number using inequalities. For example, x = 5 cm to the nearest cm means the value lies within <em>4.5 ≤ x < 5.5</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it like a safety margin: your actual measured value could be a little less or just under a certain amount.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If x = 5 cm to nearest cm, then error interval is 4.5 ≤ x < 5.5.</span>",
        "<span>This means x can be any value from 4.5 up to, but not including, 5.5.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Compound Calculations with Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When performing calculations (addition, subtraction, multiplication, division) with rounded values, calculate upper and lower bounds separately. For multiplication and division, consider all combinations of bounds to find the maximum and minimum results.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you estimate lengths of two boards, the longest possible combined length comes from adding the upper bounds, and the shortest from adding the lower bounds. But for multiplication, the largest product might involve the upper bound of one value and the lower bound of another, depending on their values.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Length A = 3.0 cm to nearest cm, lower bound 2.5 cm, upper bound 3.5 cm.</span>",
        "<span>Length B = 4.0 cm to nearest cm, lower bound 3.5 cm, upper bound 4.5 cm.</span>",
        "<span>For addition, minimum sum = 2.5 + 3.5 = 6.0 cm.</span>",
        "<span>Maximum sum = 3.5 + 4.5 = 8.0 cm.</span>",
        "<span>For multiplication, check all products of bounds to find min and max.</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying Bounds to Addition and Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For addition or subtraction, calculate the lower bound by using the smallest values and the upper bound by using the largest values from each number.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two measuring cups with uncertain amounts of liquid. To find the total possible volume range, add the minimum possible volume of each for the lower bound and add the maximum possible for the upper bound.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given: 7.0 ± 0.5 and 3.0 ± 0.5 (to nearest whole number).</span>",
        "<span>Lower sum = (7.0 - 0.5) + (3.0 - 0.5) = 6.5 + 2.5 = 9.0.</span>",
        "<span>Upper sum = (7.0 + 0.5) + (3.0 + 0.5) = 7.5 + 3.5 = 11.0.</span>"
      ]
    }
  },
  "step5": {
    "title": "Applying Bounds to Multiplication and Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For multiplication and division, consider all four combinations of upper and lower bounds to find the smallest and largest product or quotient.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine multiplying the possible minimum and maximum prices of two ingredients to find the range of possible total costs.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Values: 4.0 ± 0.5 and 2.0 ± 0.5.</span>",
        "<span>Bounds for first: 3.5 (LB), 4.5 (UB); for second: 1.5 (LB), 2.5 (UB).</span>",
        "<span>Check products: 3.5×1.5=5.25, 3.5×2.5=8.75, 4.5×1.5=6.75, 4.5×2.5=11.25.</span>",
        "<span>Minimum product = 5.25, maximum product = 11.25.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A length is measured as 6 cm to the nearest cm and a width is measured as 3 cm to the nearest cm. Find the upper and lower bounds for the perimeter of the rectangle formed by these measurements.</span>",
      "hint": "Remember to find the bounds for each side first and then calculate the perimeter bounds using addition. The perimeter is 2(length + width).",
      "mustHaveKeywords": ["upper bound", "lower bound", "perimeter", "addition", "compound calculation", "bounds"],
      "optionalKeywords": ["error interval", "maximum", "minimum"],
      "modelAnswer": "<span>First find bounds for length: 5.5 ≤ length < 6.5.<br>Bounds for width: 2.5 ≤ width < 3.5.<br>Calculate minimum perimeter: 2 × (5.5 + 2.5) = 2 × 8.0 = 16 cm.<br>Calculate maximum perimeter: 2 × (6.5 + 3.5) = 2 × 10.0 = 20 cm.<br>So perimeter bounds are 16 cm ≤ P < 20 cm.</span>",
      "scaffoldPrompts": [
        "Find lower and upper bounds for length and width first.",
        "Add the bounds for length and width to find bounds for the sum.",
        "Multiply the sum bounds by 2 for the perimeter bounds."
      ]
    }
  }
};