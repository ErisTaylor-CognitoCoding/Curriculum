window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 2)",
  "strapline": "Apply and solve problems involving upper and lower bounds in compound calculations and error intervals.",
  "learningObjectives": [
    "Students should be able to apply the concepts of upper and lower bounds to calculate the bounds of compound measures and expressions involving rounded values (Maths 1.1)",
    "Students should be able to solve problems involving calculations with bounds, including error intervals and maximum/minimum values (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept 1: Upper and Lower Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The upper bound represents the greatest possible value a rounded measurement could have had before rounding, while the lower bound represents the smallest possible value. For example, a length rounded to 5 cm (nearest cm) means the actual length lies between 4.5 cm (inclusive) and 5.5 cm (exclusive).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of measuring water in a bottle with a cup marked only by whole numbers. If it reads 5 cups, the actual water amount could be a little less than 5 cups or a little more but less than 6 cups. This is similar to lower and upper bounds.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a length of 5 cm to the nearest cm, identify the lower bound.</span>",
        "<span>Lower bound = 5 - 0.5 = 4.5 cm.</span>",
        "<span>Identify the upper bound.</span>",
        "<span>Upper bound = 5 + 0.5 = 5.5 cm (but not including 5.5 cm).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Error Intervals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Error intervals give a way to show the range of possible values for a rounded number using inequalities. For example, if <em>x</em> is 5 cm to the nearest cm, the error interval is 4.5 ≤ x < 5.5, representing all values <em>x</em> could take.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine shooting arrows at a target but you only know your shots landed somewhere between two rings. This range of possible shots is like an error interval.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If x = 5 cm to the nearest cm, write the error interval.</span>",
        "<span>Error interval: 4.5 ≤ x < 5.5</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Compound Calculations with Bounds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When calculating with rounded values, the maximum or minimum result depends on combining upper and lower bounds correctly. For addition or subtraction, find max/min using the limits; for multiplication and division, consider all combinations of bounds to find the max and min results.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine mixing two ingredients each measured approximately. To find the maximum total amount, combine max amounts; for minimum, combine minimum amounts.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate bounds for addition: length 5 cm ±0.5, width 3 cm ±0.5.</span>",
        "<span>Minimum sum = lower bound length + lower bound width = 4.5 + 2.5 = 7.0 cm.</span>",
        "<span>Maximum sum = upper bound length + upper bound width = 5.5 + 3.5 = 9.0 cm.</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying Bounds to Multiplication",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For multiplication, calculate products of all combinations of upper and lower bounds. The smallest and largest products are the bounds of the result.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Measurement A: 5 cm to nearest cm, bounds 4.5 and 5.5; Measurement B: 3 cm to nearest cm, bounds 2.5 and 3.5.</span>",
        "<span>Calculate all products: 4.5×2.5=11.25, 4.5×3.5=15.75, 5.5×2.5=13.75, 5.5×3.5=19.25.</span>",
        "<span>Minimum product = 11.25, maximum product = 19.25.</span>"
      ]
    }
  },
  "step5": {
    "title": "Calculating Bounds for Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For division, similarly calculate all quotients using upper and lower bounds of numerator and denominator, then identify minimum and maximum quotients. Remember the denominator's lower bound cannot be zero.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Value A: 10 to nearest unit, bounds 9.5 and 10.5; Value B: 2 to nearest unit, bounds 1.5 and 2.5.</span>",
        "<span>Calculate quotients: 9.5÷2.5=3.8, 9.5÷1.5≈6.33, 10.5÷2.5=4.2, 10.5÷1.5=7.</span>",
        "<span>Minimum quotient ≈ 3.8, maximum quotient = 7.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangle has a length of 8 cm and a width of 3 cm, both rounded to the nearest cm. Calculate the bounds for the area of the rectangle.</span>",
      "hint": "Remember to find the lower and upper bounds of both length and width first, then consider all products of bounds to find the minimum and maximum area.",
      "mustHaveKeywords": ["upper bound", "lower bound", "bounds of length and width", "minimum area", "maximum area"],
      "optionalKeywords": ["product of bounds", "error intervals"],
      "modelAnswer": "<span>First, find the bounds for length: 7.5 cm ≤ length < 8.5 cm. Then find the bounds for width: 2.5 cm ≤ width < 3.5 cm. Calculate all products of bounds to find minimum and maximum areas: 7.5 × 2.5 = 18.75 cm² (minimum), 7.5 × 3.5 = 26.25 cm², 8.5 × 2.5 = 21.25 cm², 8.5 × 3.5 = 29.75 cm² (maximum). Therefore, the area lies between 18.75 cm² and 29.75 cm².</span>",
      "scaffoldPrompts": [
        "Calculate the lower and upper bounds for length and width.",
        "Multiply every combination of bounds to find possible areas.",
        "Identify the smallest and largest product to determine the bounds for area."
      ]
    }
  }
};