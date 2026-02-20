window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.4 - Area of triangle = ½ab sin C",
  "strapline": "Learn how to find the area of any triangle using two sides and the included angle with the formula Area = ½ab sin C.",
  "learningObjectives": [
    "Students should develop and apply the formula for finding the area of any triangle using two sides and the included angle: Area = ½ab sin C (Maths 4.4)",
    "Students should solve problems involving triangular shapes using the area formula (Maths 4.4)"
  ],
  "keyFormulas": [
    "Area = ½ab sin C - Area formula using two sides and included angle",
    "Standard area formula: Area = ½ × base × height",
    "Sine rule relation: height = b × sin C (when a is the base and C is the included angle)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg' aria-label='Triangle with sides a, b and included angle C'><polygon points='50,250 350,250 150,70' fill='#add8e6' stroke='#333' stroke-width='2'/><line x1='150' y1='70' x2='150' y2='250' stroke='#ff6f61' stroke-width='3' stroke-dasharray='5,5'/><text x='100' y='260' font-family='Arial' font-size='16' fill='#000'>a</text><text x='250' y='260' font-family='Arial' font-size='16' fill='#000'>b</text><text x='140' y='60' font-family='Arial' font-size='16' fill='#000'>C</text><text x='160' y='160' font-family='Arial' font-size='14' fill='#ff6f61'>&perp; height</text></svg>",
  "step1": {
    "title": "Understanding the Area Formula: Area = ½ab sin C",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The formula <strong>Area = ½ab sin C</strong> allows you to find the area of any triangle if you know two sides and the included angle between them. Here, <em>a</em> and <em>b</em> are sides, and <em>C</em> is the angle between those sides.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine stretching a flexible triangular sail: its area depends on how much the sail stretches (sides <em>a</em> and <em>b</em>) and the angle between these stretched edges (<em>C</em>).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Sides and Angle",
      "problem": "Consider a triangle with sides of lengths 7 cm and 10 cm enclosing an angle of 60° between them. Let's correctly identify the sides and angle to use the formula.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the length of side <em>a</em> (first given side):",
          "answer": "7",
          "feedback": "Correct, side <em>a</em> is 7 cm."
        },
        {
          "id": "q2",
          "prompt": "Enter the length of side <em>b</em> (second given side):",
          "answer": "10",
          "feedback": "Correct, side <em>b</em> is 10 cm."
        },
        {
          "id": "q3",
          "prompt": "Enter the included angle <em>C</em> (angle between sides a and b) in degrees:",
          "answer": "60",
          "feedback": "Exactly! The included angle <em>C</em> is 60°."
        }
      ]
    }
  },
  "step2": {
    "title": "Deriving the Formula Using Trigonometry",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The standard formula for the area of a triangle is <strong>½ × base × height</strong>. To use two sides and an angle, we express the height in terms of one side and the sine of the included angle.</p><p>Height = <em>b</em> × sin <em>C</em>. Substituting gives: Area = ½ × <em>a</em> × (<em>b</em> sin <em>C</em>) = ½ab sin C.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Similar to finding the shadow length of a stick based on the sun angle, using the angle <em>C</em> helps us find the perpendicular height needed for the area.</p>"
    }
  },
  "step3": {
    "title": "Identifying the Included Angle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The included angle is the angle that is exactly between the two sides you know. It is crucial to select the correct angle to use the area formula properly. Using the wrong angle will result in incorrect area calculation.</p>",
    "workedExample": {
      "title": "Worked Example: Identifying the Included Angle",
      "problem": "A triangle has sides of lengths 8 cm, 6 cm, and 10 cm. The angle between sides 8 cm and 6 cm is 50°. Which angle should be used as <em>C</em> in the formula?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the included angle between sides 8 cm and 6 cm the one you should use as <em>C</em>? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct! The included angle between the known sides should be used for <em>C</em>."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying the Formula: Calculating Area",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the formula <strong>Area = ½ab sin C</strong> by substituting the two side lengths and the sine of the included angle. Remember to convert the angle to radians if your calculator requires it, or set it to degree mode.</p>",
    "workedExample": {
      "title": "Worked Example: Step-by-Step Area Calculation",
      "problem": "Calculate the area of a triangle with sides 7 cm and 10 cm and an included angle of 60°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Substitute sides <em>a</em> = 7 and <em>b</em> = 10 into the formula (write numerical expression):",
          "answer": "0.5 * 7 * 10 * sin(60)",
          "feedback": "Great, you substituted the sides correctly."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Calculate sin(60°) (use a calculator or recall value):",
          "answer": "0.866",
          "feedback": "Correct. sin 60° ≈ 0.866."
        },
        {
          "id": "q3",
          "prompt": "Step 3: Complete the area calculation 0.5 × 7 × 10 × 0.866 = ?",
          "answer": "30.31",
          "feedback": "Well done! The area is approximately 30.31 cm²."
        }
      ]
    }
  },
  "step5": {
    "title": "Why This Formula Is Useful",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">This formula is useful because it allows you to calculate the area of any triangle without needing to find the height directly. This is especially helpful for non-right angled triangles or when height is difficult to measure.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like measuring the size of an irregular-shaped garden by using two fence sides and the angle between them rather than measuring the height directly.</p>"
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A triangle has sides of length 12 cm and 9 cm, and the angle between these sides measures 45°. Calculate the area of the triangle. Show your working step-by-step, including substituting values and evaluating the sine of the angle.</span>",
      "hint": "Remember to identify the included angle and use the formula Area = ½ab sin C. Use a calculator in degree mode for the sine value.",
      "mustHaveKeywords": ["included angle", "substitute", "sin", "½ab sin C", "area"],
      "optionalKeywords": ["degrees", "calculator", "approximate value"],
      "modelAnswer": "<span>First identify sides a = 12 cm and b = 9 cm, with included angle C = 45°. Use Area = ½ × 12 × 9 × sin(45°). Calculating sin(45°) ≈ 0.707, so Area ≈ 0.5 × 12 × 9 × 0.707 = 38.18 cm².</span>",
      "scaffoldPrompts": ["Identify the two sides and included angle", "Write down the formula", "Substitute values into the formula", "Calculate sine of the angle", "Multiply all to find the area"]
    }
  }
};