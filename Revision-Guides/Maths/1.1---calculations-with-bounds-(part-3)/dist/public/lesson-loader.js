window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.1 - Calculations with bounds (Part 3)",
  "strapline": "Understanding and applying upper and lower bounds in multiplication and division calculations involving rounded measurements.",
  "learningObjectives": [
    "Students should apply systematic listing strategies to find the number of possible outcomes of single events and two successive events (Maths 1.1)",
    "Students should calculate with bounds to solve problems involving measurements and rounded values (Maths 1.1)",
    "Students should determine upper and lower bounds of calculations involving multiplication and division (Maths 1.1)"
  ],
  "step1": {
    "title": "Concept 1: Upper Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>upper bound</strong> is the maximum possible value a measurement could have before rounding. It is found by adding half of the rounding unit to the rounded value. For example, if a length is rounded to the nearest 1 cm and recorded as 5 cm, the upper bound is 5 + 0.5 = 5.5 cm.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the upper bound like the top shelf limit in a jar filled with marbles you counted approximately—you know it can’t be more than a certain number above what you recorded.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given the length is 8 cm rounded to nearest cm, find the upper bound.</span>",
        "<span>The rounding unit is 1 cm, so half is 0.5 cm.</span>",
        "<span>Upper bound = 8 + 0.5 = 8.5 cm.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Lower Bound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>lower bound</strong> is the minimum possible value a measurement could have had before rounding. When rounding to the nearest whole unit, the lower bound is generally the rounded value minus half the rounding unit. However, for this topic, the convention used is that the lower bound equals the rounded value itself because measurements are assumed to be rounded down.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine setting a minimum weight limit for a parcel; the weight cannot be less than this container's recorded weight.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If a width is recorded as 6 cm to the nearest whole cm, find the lower bound.</span>",
        "<span>Since we consider the rounded value as the minimum, lower bound = 6 cm.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Bounds in Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When performing calculations involving measurements rounded to the nearest unit, use upper and lower bounds to find possible ranges for answers. For <strong>multiplication and division</strong>, identify the correct bounds to use in order to find the largest and smallest possible answers. Typically, the maximum result comes from multiplying the upper bounds or dividing lower bound by upper bound, and the minimum result comes from multiplying the lower bounds or dividing upper bound by lower bound depending on the operation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of measuring two boards to build a shelf. Their lengths may be a little more or less than recorded, so the total possible length of the shelf varies between a minimum and a maximum found using bounds.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Length A = 5 cm (to nearest cm), so bounds are 4.5 cm to 5.5 cm.</span>",
        "<span>Length B = 3 cm (to nearest cm), bounds 2.5 cm to 3.5 cm.</span>",
        "<span>Calculate minimum possible product: 4.5 &times; 2.5 = 11.25 cm<sup>2</sup>.</span>",
        "<span>Calculate maximum possible product: 5.5 &times; 3.5 = 19.25 cm<sup>2</sup>.</span>"
      ]
    }
  },
  "step4": {
    "title": "Systematic Listing of Possible Outcomes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">List all possible outcomes of two successive events by combining each upper and lower bound value. This helps to check complete ranges in calculations involving bounds.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like creating a table of all possible coffee sizes and flavors to see how many combinations you can order.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Possible lengths: 4.5 cm and 5.5 cm.</span>",
        "<span>Possible widths: 2.5 cm and 3.5 cm.</span>",
        "<span>Possible products: 4.5 &times; 2.5, 4.5 &times; 3.5, 5.5 &times; 2.5, 5.5 &times; 3.5.</span>",
        "<span>Calculate each to find full range from 11.25 to 19.25 cm<sup>2</sup>.</span>"
      ]
    }
  },
  "step5": {
    "title": "Calculating Bounds for Division Problems",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When dividing measurements with bounds, identify which bounds produce the maximum and minimum results by carefully selecting numerator and denominator bounds. Generally, maximum quotient is found by dividing the highest numerator by the lowest denominator, and minimum quotient by dividing the lowest numerator by the highest denominator.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like the fastest speed being distance at maximum bound divided by minimum time, and slowest speed being minimum distance divided by maximum time.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Distance = 30 m (bounds 29.5 m - 30.5 m), Time = 5 s (bounds 4.5 s - 5.5 s).</span>",
        "<span>Max speed = 30.5 / 4.5 ≈ 6.78 m/s.</span>",
        "<span>Min speed = 29.5 / 5.5 ≈ 5.36 m/s.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A box has a length of 12 cm rounded to the nearest cm and a width of 8 cm rounded to the nearest cm. Calculate the upper and lower bounds of the area of the base of the box.</span>",
      "hint": "Remember to find the upper and lower bounds for length and width first, then find the smallest and largest possible products.",
      "mustHaveKeywords": ["upper bound", "lower bound", "multiplication", "range"],
      "optionalKeywords": ["rounding unit", "half the rounding unit", "measurement"],
      "modelAnswer": "<span>First, find the bounds for length: 12 cm rounded to nearest cm means lower bound = 11.5 cm, upper bound = 12.5 cm.<br>For width: 8 cm rounded means lower bound = 7.5 cm, upper bound = 8.5 cm.<br>Calculate minimum area = lower length × lower width = 11.5 × 7.5 = 86.25 cm².<br>Calculate maximum area = upper length × upper width = 12.5 × 8.5 = 106.25 cm².<br>Therefore, the area of the base is between 86.25 cm² and 106.25 cm².</span>",
      "scaffoldPrompts": [
        "What is the rounding unit for length and width?",
        "Calculate half the rounding unit and add to find upper bounds.",
        "Subtract half the rounding unit or consider rounded value for lower bounds.",
        "Multiply the bounds to find minimum and maximum areas."
      ]
    }
  }
};