window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.2 - Trigonometry in right-angled triangles",
  "strapline": "Understand and use sine, cosine and tangent ratios to find unknown sides and angles in right-angled triangles.",
  "learningObjectives": [
    "Students should know the sine, cosine and tangent ratios in right-angled triangles (Maths 4.2)",
    "Students should be able to use sine, cosine and tangent ratios to find unknown sides in right-angled triangles (Maths 4.2)",
    "Students should be able to use sine, cosine and tangent ratios to find unknown angles in right-angled triangles (Maths 4.2)"
  ],
  "keyFormulas": [
    "sin(θ) = opposite / hypotenuse",
    "cos(θ) = adjacent / hypotenuse",
    "tan(θ) = opposite / adjacent"
  ],
  "diagramHtml": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'>  <polygon points='50,150 250,150 50,50' fill='#e0f7fa' stroke='#00796b' stroke-width='3'/>  <line x1='50' y1='150' x2='50' y2='50' stroke='#00796b' stroke-width='3'/>  <line x1='50' y1='50' x2='250' y2='150' stroke='#00796b' stroke-width='3'/>  <text x='30' y='100' font-family='Arial' font-size='18' fill='#004d40'>adjacent</text>  <text x='150' y='170' font-family='Arial' font-size='18' fill='#004d40'>hypotenuse</text>  <text x='80' y='90' font-family='Arial' font-size='18' fill='#004d40'>opposite</text>  <text x='55' y='55' font-family='Arial' font-size='18' fill='#004d40'>&#x03B8;</text>  <path d='M60 65 L70 65 L70 75' stroke='#004d40' fill='none' stroke-width='2'/>  <path d='M50 150 L60 140 L70 150' stroke='#004d40' fill='none' stroke-width='2'/>  <path d='M50 150 L60 160 L70 150' stroke='#004d40' fill='none' stroke-width='2'/> </svg>",
  "step1": {
    "title": "Concept: Understanding the Sine Ratio",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>sine ratio</strong> in a right-angled triangle relates an angle <em>θ</em> to the ratio of the length of the <strong>opposite side</strong> to the <strong>hypotenuse</strong>. It is written as <em>sin(θ) = opposite / hypotenuse</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the triangle as a ladder leaning against a wall. The sine ratio helps you relate the height the ladder reaches on the wall (opposite) to the length of the ladder itself (hypotenuse).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Sine Ratio",
      "problem": "Given a right triangle where the length opposite to angle θ is 3 units and the hypotenuse is 5 units, find sin(θ).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the length of the opposite side?",
          "answer": "3",
          "feedback": "Correct! The opposite side length is 3 units."
        },
        {
          "id": "q2",
          "prompt": "What is the length of the hypotenuse?",
          "answer": "5",
          "feedback": "Correct! The hypotenuse length is 5 units."
        },
        {
          "id": "q3",
          "prompt": "Calculate sin(θ) = opposite / hypotenuse. What is sin(θ)?",
          "answer": "0.6",
          "feedback": "Correct! 3 divided by 5 equals 0.6."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Cosine Ratio",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>cosine ratio</strong> relates the angle <em>θ</em> to the ratio of the length of the <strong>adjacent side</strong> to the <strong>hypotenuse</strong>. It is written as <em>cos(θ) = adjacent / hypotenuse</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the ladder again. Cosine relates the distance along the ground from the wall to the base of the ladder (adjacent) to the ladder’s length (hypotenuse).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Cosine Ratio",
      "problem": "In a right triangle, the adjacent side to angle θ is 4 units and the hypotenuse is 5 units. Find cos(θ).",
      "questions": [
        {
          "id": "q4",
          "prompt": "What is the length of the adjacent side?",
          "answer": "4",
          "feedback": "Correct! The adjacent side length is 4 units."
        },
        {
          "id": "q5",
          "prompt": "What is the length of the hypotenuse?",
          "answer": "5",
          "feedback": "Correct! The hypotenuse length is 5 units."
        },
        {
          "id": "q6",
          "prompt": "Calculate cos(θ) = adjacent / hypotenuse. What is cos(θ)?",
          "answer": "0.8",
          "feedback": "Correct! 4 divided by 5 equals 0.8."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding the Tangent Ratio",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>tangent ratio</strong> relates angle <em>θ</em> to the ratio of the length of the <strong>opposite side</strong> to the <strong>adjacent side</strong>. Written as <em>tan(θ) = opposite / adjacent</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This ratio compares the height of the ladder on the wall (opposite) with how far the base of the ladder is from the wall (adjacent).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Tangent Ratio",
      "problem": "In a right triangle, the opposite side to θ is 3 units, and the adjacent side is 4 units. Calculate tan(θ).",
      "questions": [
        {
          "id": "q7",
          "prompt": "What is the length of the opposite side?",
          "answer": "3",
          "feedback": "Correct! Opposite side length is 3 units."
        },
        {
          "id": "q8",
          "prompt": "What is the length of the adjacent side?",
          "answer": "4",
          "feedback": "Correct! Adjacent side length is 4 units."
        },
        {
          "id": "q9",
          "prompt": "Calculate tan(θ) = opposite / adjacent. What is tan(θ)?",
          "answer": "0.75",
          "feedback": "Correct! 3 divided by 4 equals 0.75."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying Ratios to Find Unknown Sides",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can rearrange each ratio to find a missing side in a right-angled triangle when you know one side and the angle <em>θ</em>. For example, to find the opposite side using sine: <em>opposite = hypotenuse × sin(θ)</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Finding an Unknown Side using Sine",
      "problem": "A right-angled triangle has a hypotenuse of 10 units and angle θ = 30°. Find the length of the opposite side.",
      "questions": [
        {
          "id": "q10",
          "prompt": "What is the value of sin(30°)? (Use a calculator or recall it)",
          "answer": "0.5",
          "feedback": "Correct! sin(30°) = 0.5."
        },
        {
          "id": "q11",
          "prompt": "Calculate opposite side = hypotenuse × sin(θ). What is the length of the opposite side?",
          "answer": "5",
          "feedback": "Correct! 10 × 0.5 = 5 units."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying Ratios to Find Unknown Angles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use inverse trigonometric functions to find an unknown angle when you know the lengths of two sides. For example, <em>θ = sin<sup>-1</sup>(opposite / hypotenuse)</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Finding an Unknown Angle",
      "problem": "In a right triangle, the opposite side is 7 units, and the hypotenuse is 25 units. Find angle θ.",
      "questions": [
        {
          "id": "q12",
          "prompt": "Calculate the ratio opposite / hypotenuse.",
          "answer": "0.28",
          "feedback": "Correct! 7 divided by 25 is 0.28."
        },
        {
          "id": "q13",
          "prompt": "Using your calculator, find θ = sin<sup>-1</sup>(0.28). Round to nearest degree.",
          "answer": "16",
          "feedback": "Correct! θ ≈ 16°."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>In a right-angled triangle, angle θ is 40°, and the side adjacent to θ is 8 cm. Find the length of the opposite side and the hypotenuse.</span>",
      "hint": "Use the sine and cosine ratios. Remember to round your answers to two decimal places if necessary.",
      "mustHaveKeywords": ["sin", "cos", "opposite", "hypotenuse", "right-angled triangle", "ratio"],
      "optionalKeywords": ["rounding", "calculator"],
      "modelAnswer": "<span>To find the opposite side, use sin(θ) = opposite / hypotenuse. But since hypotenuse is unknown, first find it using cos(θ) = adjacent / hypotenuse.</span><br><span>Rearranged: hypotenuse = adjacent / cos(40°) = 8 / 0.7660 ≈ 10.45 cm.</span><br><span>Then find opposite: opposite = hypotenuse × sin(40°) = 10.45 × 0.6428 ≈ 6.72 cm.</span>",
      "scaffoldPrompts": ["Step 1: Find hypotenuse using adjacent side and cosine ratio.", "Step 2: Use hypotenuse and sine ratio to find opposite side."]
    }
  }
};