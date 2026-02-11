window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 2)",
  "strapline": "Learn how to apply bounds to compound calculations and solve problems involving error intervals and maximum/minimum values.",
  "learningObjectives": [
    "Students should be able to apply the concepts of upper and lower bounds to calculate the bounds of compound measures and expressions involving rounded values (Maths 1.1)",
    "Students should be able to solve problems involving calculations with bounds, including error intervals and maximum/minimum values (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept: Understanding Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> is the maximum value a number could have been before rounding, and the <strong>lower bound</strong> is the minimum. For example, if a length is 5 cm rounded to the nearest cm, the lower bound is 4.5 cm and the upper bound is 5.5 cm (but the upper bound is exclusive). This means the actual length is between 4.5 cm inclusive and 5.5 cm exclusive.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of measuring water in a jug marked in litres rounded to the nearest litre. If it is said to have 3 litres, the actual amount is at least 2.5 litres but less than 3.5 litres, representing the bounds.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a length of 7 m rounded to the nearest metre, find the upper and lower bounds.</span>",
        "<span>Lower bound = 6.5 m (7 - 0.5)</span>",
        "<span>Upper bound = 7.5 m (7 + 0.5), but actual value is less than 7.5 m</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Expressing Error Intervals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Error intervals express the range of possible values for a rounded number using inequalities. For the above example of 7 m rounded to nearest metre, we write 6.5 ≤ x < 7.5 to show the actual value could be anywhere within these bounds.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This is like saying you have at least $10 but less than $15 in your wallet; the exact amount is somewhere in between.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For x = 12 cm to the nearest cm, write the error interval.</span>",
        "<span>Error interval: 11.5 ≤ x < 12.5</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Compound Calculations with Bounds - Addition and Subtraction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When adding or subtracting rounded values, calculate the lower bound by adding or subtracting the lower bounds and the upper bound by adding or subtracting the upper bounds. This shows the minimum and maximum possible results.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Length A = 4.3 m to nearest 0.1 m; Length B = 5.1 m to nearest 0.1 m.</span>",
        "<span>Find bounds for A + B.</span>",
        "<span>Lower bound A = 4.25, Upper bound A = 4.35; Lower bound B = 5.05, Upper bound B = 5.15</span>",
        "<span>Lower bound sum = 4.25 + 5.05 = 9.3</span>",
        "<span>Upper bound sum = 4.35 + 5.15 = 9.5</span>",
        "<span>Result bounds: 9.3 ≤ A+B < 9.5</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Compound Calculations with Bounds - Multiplication and Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For multiplication and division involving bounds, consider all combinations of upper and lower bounds because the maximum and minimum results may not come from simply multiplying the lower bounds or upper bounds together. Careful comparison is required.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given A = 3.5 ± 0.05 and B = 2.1 ± 0.05, find bounds for A × B.</span>",
        "<span>Calculate bounds: A lower = 3.45, A upper = 3.55, B lower = 2.05, B upper = 2.15</span>",
        "<span>Compute products: 3.45 × 2.05 = 7.0725, 3.45 × 2.15 = 7.4175, 3.55 × 2.05 = 7.2775, 3.55 × 2.15 = 7.6325</span>",
        "<span>Minimum product = 7.0725, Maximum product = 7.6325</span>",
        "<span>Hence bounds: 7.0725 ≤ A × B < 7.6325</span>"
      ]
    }
  },
  "step5": {
    "title": "Practice: Applying Bounds to Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Practice applying bounds in expressions with multiple steps by calculating bounds for each part carefully and combining the results appropriately.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate bounds for (x + y) ÷ z where:</span>",
        "<span>x = 10 ± 0.5, y = 5 ± 0.2, z = 3 ± 0.1</span>",
        "<span>Find bounds x + y: lower = 9.5 + 4.8 = 14.3, upper = 10.5 + 5.2 = 15.7</span>",
        "<span>Then divide by bounds of z: z lower = 2.9, z upper = 3.1</span>",
        "<span>Calculate division combinations and identify minimum and maximum results:</span>",
        "<span>Minimum: 14.3 ÷ 3.1 = 4.6129..., Maximum: 15.7 ÷ 2.9 = 5.4137...</span>",
        "<span>Bounds for expression: 4.61 ≤ (x + y)/z < 5.41</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangle has length 7.4 m and width 3.2 m, both measured to the nearest 0.1 m. Calculate the bounds for the area of the rectangle.</span>",
      "hint": "Remember to find the upper and lower bounds for the length and width and then multiply all possible combinations to find the minimum and maximum area.",
      "mustHaveKeywords": ["upper bound", "lower bound", "area bounds", "multiply bounds"],
      "optionalKeywords": ["error intervals", "rounded values"],
      "modelAnswer": "<span>First find the bounds for length: lower bound is 7.35 m, upper bound is 7.45 m (since rounded to nearest 0.1 m). For width: lower bound is 3.15 m, upper bound is 3.25 m. Multiply all combinations: 7.35 × 3.15 = 23.1525, 7.35 × 3.25 = 23.8875, 7.45 × 3.15 = 23.4675, 7.45 × 3.25 = 24.2125. The minimum area is 23.1525 m², the maximum is 24.2125 m². So, the area bounds are 23.15 m² ≤ area < 24.21 m².</span>",
      "scaffoldPrompts": [
        "Identify the lower and upper bounds for length and width first.",
        "Multiply each possible combination of these bounds.",
        "Find the smallest and largest products to give the area bounds."
      ]
    }
  }
};