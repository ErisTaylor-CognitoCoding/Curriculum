window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 3)",
  "strapline": "Applying upper and lower bounds in multiplication and division to solve measurement problems.",
  "learningObjectives": [
    "Students should apply systematic listing strategies to find the number of possible outcomes of single events and two successive events (Maths 1.1)",
    "Students should calculate with bounds to solve problems involving measurements and rounded values (Maths 1.1)",
    "Students should determine upper and lower bounds of calculations involving multiplication and division (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept: Understanding Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The upper bound is the maximum possible value a measurement could have been before rounding. It is found by adding half of the rounding unit to the rounded value. For example, if a length is rounded to the nearest cm and given as 5 cm, the upper bound is 5.5 cm.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a glass filled to the 5 cm mark. Due to measurement limits, it could actually be filled anywhere between 4.5 cm and 5.5 cm. The upper bound is like the highest point the water could reach before being rounded down to 5 cm.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>The measurement is 8 cm rounded to the nearest cm.</span>",
        "<span>The rounding unit is 1 cm, half of this is 0.5 cm.</span>",
        "<span>Upper bound = 8 + 0.5 = 8.5 cm.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The lower bound is the minimum possible value a measurement could have been before rounding. When rounding to the nearest unit, the lower bound is often the rounded value minus half the rounding unit. However, if the rounded value is exact at the nearest unit, the lower bound is the boundary just below it.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Consider the same glass filled to 5 cm. The water could have been as low as 4.5 cm but still rounded up to 5 cm. The lower bound is the lowest point before rounding changes to 4 cm.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>The measurement is 12 m rounded to the nearest meter.</span>",
        "<span>Half the rounding unit is 0.5 m.</span>",
        "<span>Lower bound = 12 - 0.5 = 11.5 m.</span>"
      ]
    }
  },
  "step3": {
    "title": "Applying Bounds to Multiplication",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying two rounded measurements, the lower bound of the product is found by multiplying the lower bounds of each measurement, and the upper bound is found by multiplying their upper bounds. This gives a range of possible values for the product.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Length = 5 cm (rounded to nearest cm), so bounds are 4.5 cm to 5.5 cm.</span>",
        "<span>Width = 3 cm (rounded to nearest cm), so bounds are 2.5 cm to 3.5 cm.</span>",
        "<span>Minimum area = 4.5 × 2.5 = 11.25 cm²</span>",
        "<span>Maximum area = 5.5 × 3.5 = 19.25 cm²</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying Bounds to Division",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing two rounded values, the minimum and maximum quotients come from dividing the appropriate bounds: divide the lower bound of the numerator by the upper bound of the denominator to get the minimum value and the upper bound of the numerator by the lower bound of the denominator to get the maximum value.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Numerator = 10 m rounded to nearest meter, bounds: 9.5 m to 10.5 m.</span>",
        "<span>Denominator = 2 m rounded to nearest meter, bounds: 1.5 m to 2.5 m.</span>",
        "<span>Minimum quotient = 9.5 ÷ 2.5 = 3.8</span>",
        "<span>Maximum quotient = 10.5 ÷ 1.5 = 7</span>"
      ]
    }
  },
  "step5": {
    "title": "Systematic Listing Strategy for Outcomes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the number of possible outcomes for two successive events (such as choosing different rounded values within bounds), use systematic listing. List all possible upper and lower bounds for each event and count all combinations.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>First measurement bounds: 4.5 cm or 5.5 cm; second measurement bounds: 2.5 cm or 3.5 cm.</span>",
        "<span>Possible products: 4.5×2.5, 4.5×3.5, 5.5×2.5, 5.5×3.5.</span>",
        "<span>Count possible outcomes: 4.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A rectangle has its length given as 7 cm rounded to the nearest cm and its width as 4 cm rounded to the nearest cm. Find the lower and upper bounds for the area of this rectangle.</span>",
      "hint": "Remember to find the upper and lower bounds for length and width first, then find the bounds for the area by multiplying these bounds systematically.",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiplication", "rounded value"],
      "optionalKeywords": ["rounding unit", "systematic listing"],
      "modelAnswer": "<span>First find bounds for length: lower bound = 7 - 0.5 = 6.5 cm, upper bound = 7 + 0.5 = 7.5 cm.<br>Then bounds for width: lower bound = 4 - 0.5 = 3.5 cm, upper bound = 4 + 0.5 = 4.5 cm.<br>Calculate minimum area = 6.5 × 3.5 = 22.75 cm².<br>Calculate maximum area = 7.5 × 4.5 = 33.75 cm².<br>So the area lies between 22.75 cm² and 33.75 cm².</span>",
      "scaffoldPrompts": [
        "Identify the rounding unit and calculate half of it.",
        "Determine the upper and lower bounds for length and width.",
        "Multiply bounds to find area bounds."
      ]
    }
  }
};