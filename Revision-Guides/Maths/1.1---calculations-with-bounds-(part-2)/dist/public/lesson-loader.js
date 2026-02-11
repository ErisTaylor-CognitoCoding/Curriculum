window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 2)",
  "strapline": "Understanding how to calculate bounds in compound calculations involving rounded values.",
  "learningObjectives": [
    "Students should be able to apply the concepts of upper and lower bounds to calculate the bounds of compound measures and expressions involving rounded values (Maths 1.1)",
    "Students should be able to solve problems involving calculations with bounds, including error intervals and maximum/minimum values (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept 1: Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a value is rounded to the nearest quantity, it can represent a range of possible actual values. The <strong>lower bound</strong> is the smallest value that could have been rounded to the given number, and the <strong>upper bound</strong> is the largest value before it rounds up to the next number.</p><p>For example, if a length is recorded as 5 cm to the nearest centimetre, the lower bound is 4.5 cm and the upper bound is 5.5 cm (but not including 5.5 cm).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of rounding like measuring the height of a plant with a ruler marked only in whole centimetres. If the measurement shows 5 cm, the actual height might be anything from 4.5 cm to almost 5.5 cm.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a length is 7 m to the nearest metre, find the lower and upper bounds.</span>",
        "<span>Lower bound = 7 - 0.5 = 6.5 m</span>",
        "<span>Upper bound = 7 + 0.5 = 7.5 m (but not including 7.5 m)</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Error Intervals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Error intervals express the range within which the true value lies for a rounded measurement, written using inequalities. This communicates clearly the uncertainty introduced by rounding.</p><p>If a value <em>x</em> is 5 cm rounded to the nearest cm, the error interval is <strong>4.5 ≤ x &lt; 5.5</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you are allowed to guess the weight of an object but only within a specific range. The error interval is that allowable range.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Value is 12 m to nearest metre.</span>",
        "<span>Error interval: 11.5 ≤ x &lt; 12.5</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Compound Calculations with Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When performing calculations such as addition, subtraction, multiplication, or division with rounded values, use the upper and lower bounds to find the highest and lowest possible answers.</p><p>For addition and subtraction, add or subtract the bounds directly. For multiplication and division, consider all combinations of upper and lower bounds to find the maximum and minimum possible results.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the range of heights of two plants. The tallest combined height comes by adding the tallest possible values (upper bounds), while the shortest combined height comes from adding the shortest possible values (lower bounds).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Two lengths: 4 m and 6 m to nearest metre.</span>",
        "<span>Lower bounds: 3.5 m and 5.5 m; upper bounds: 4.5 m and 6.5 m.</span>",
        "<span>Minimum sum = 3.5 + 5.5 = 9 m</span>",
        "<span>Maximum sum = 4.5 + 6.5 = 11 m</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying Bounds in Multiplication",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For multiplication with bounds, calculate the product using all combinations of lower and upper bounds to find the minimum and maximum possible values.</p><p>This involves multiplying each value's upper bound with the other's upper bound, the lower with lower, and the mixed pairs, then identifying the smallest and largest products.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Number A = 3 to nearest 1, bounds: 2.5 to 3.5</span>",
        "<span>Number B = 5 to nearest 1, bounds: 4.5 to 5.5</span>",
        "<span>Calculate all products: 2.5 × 4.5 = 11.25, 2.5 × 5.5 = 13.75, 3.5 × 4.5 = 15.75, 3.5 × 5.5 = 19.25</span>",
        "<span>Minimum product = 11.25, Maximum product = 19.25</span>"
      ]
    }
  },
  "step5": {
    "title": "Applying Bounds in Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Division with bounds works similarly to multiplication but requires careful consideration since dividing by smaller or larger values affects the result differently.</p><p>The minimum quotient is found by dividing the smallest numerator by the largest denominator, and the maximum quotient by dividing the largest numerator by the smallest denominator.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Numerator = 8 (7.5 to 8.5), Denominator = 4 (3.5 to 4.5)</span>",
        "<span>Minimum quotient = 7.5 ÷ 4.5 ≈ 1.67</span>",
        "<span>Maximum quotient = 8.5 ÷ 3.5 ≈ 2.43</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangle’s length is measured as 7 m to the nearest metre and its width as 3 m to the nearest metre. Calculate the bounds for the area of the rectangle.</span>",
      "hint": "Remember to find the upper and lower bounds of length and width, then multiply all combinations to find the minimum and maximum area.",
      "mustHaveKeywords": [
        "upper bound",
        "lower bound",
        "compound calculations",
        "minimum area",
        "maximum area"
      ],
      "optionalKeywords": [
        "error interval",
        "multiplication bounds"
      ],
      "modelAnswer": "<span>The length bounds are 6.5 m to 7.5 m, and the width bounds are 2.5 m to 3.5 m. Calculate the area by multiplying all combinations: minimum area = 6.5 × 2.5 = 16.25 m<sup>2</sup>, maximum area = 7.5 × 3.5 = 26.25 m<sup>2</sup>. So, the area lies between 16.25 m<sup>2</sup> and 26.25 m<sup>2</sup>.</span>",
      "scaffoldPrompts": [
        "Step 1: Find the lower and upper bounds for length and width.",
        "Step 2: Multiply the lower bounds for minimum area.",
        "Step 3: Multiply the upper bounds for maximum area."
      ]
    }
  }
};