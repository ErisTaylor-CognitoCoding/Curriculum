window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.2 - Trigonometry in right-angled triangles",
  "strapline": "Understanding and applying sine, cosine and tangent ratios to solve problems in right-angled triangles.",
  "learningObjectives": [
    "Students should know the sine, cosine and tangent ratios in right-angled triangles (Maths 4.2)",
    "Students should be able to use sine, cosine and tangent ratios to find unknown sides in right-angled triangles (Maths 4.2)",
    "Students should be able to use sine, cosine and tangent ratios to find unknown angles in right-angled triangles (Maths 4.2)"
  ],
  "keyFormulas": [
    "Sine ratio: sin(θ) = opposite/hypotenuse",
    "Cosine ratio: cos(θ) = adjacent/hypotenuse",
    "Tangent ratio: tan(θ) = opposite/adjacent"
  ],
  "diagramHtml": "<svg viewBox='0 0 200 150' xmlns='http://www.w3.org/2000/svg'>\
    <polygon points='20,130 180,130 20,30' fill='#e0f7fa' stroke='#00796b' stroke-width='3' />\
    <line x1='20' y1='130' x2='180' y2='130' stroke='#004d40' stroke-width='2' />\
    <text x='100' y='145' font-family='sans-serif' font-size='14' fill='#00796b' text-anchor='middle'>Adjacent</text>\
    <line x1='20' y1='130' x2='20' y2='30' stroke='#004d40' stroke-width='2' />\
    <text x='5' y='80' font-family='sans-serif' font-size='14' fill='#00796b' text-anchor='middle' transform='rotate(-90 5,80)'>Opposite</text>\
    <line x1='20' y1='30' x2='180' y2='130' stroke='#004d40' stroke-width='2' />\
    <text x='105' y='60' font-family='sans-serif' font-size='14' fill='#00796b' text-anchor='middle'>Hypotenuse</text>\
    <circle cx='25' cy='125' r='10' fill='none' stroke='#00796b' stroke-width='2' />\
    <text x='35' y='105' font-family='sans-serif' font-size='14' fill='#00796b'>&#x03B8;</text>\
  </svg>",
  "step1": {
    "title": "Concept: Understanding Sine, Cosine and Tangent Ratios",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In a right-angled triangle, each angle (other than the right angle) has three sides: the opposite side (opposite to the angle), the adjacent side (next to the angle), and the hypotenuse (longest side opposite the right angle). The sine, cosine and tangent ratios relate these sides to one of the triangle’s angles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the triangle as a ladder leaning against a wall. The angle between the ladder and the ground affects how high the ladder reaches (opposite side) relative to its length (hypotenuse) or base distance (adjacent side).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify the Sine Ratio",
      "problem": "In the triangle shown, if the angle &#x03B8; = 30°, identify the sine ratio in terms of the sides.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which side is opposite to angle &#x03B8;?",
          "answer": "opposite",
          "feedback": "Correct. The side opposite to the angle &#x03B8; is named opposite."
        },
        {
          "id": "q2",
          "prompt": "Which side is the hypotenuse?",
          "answer": "hypotenuse",
          "feedback": "Correct. The hypotenuse is the longest side opposite the right angle."
        },
        {
          "id": "q3",
          "prompt": "Write the sine ratio as a fraction of these sides.",
          "answer": "opposite/hypotenuse",
          "feedback": "Well done! sin(&#x03B8;) = opposite/hypotenuse."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Cosine Ratio",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cosine uses the adjacent side and the hypotenuse to form a ratio that depends on the angle &#x03B8;.</p>",
    "workedExample": {
      "title": "Worked Example: Identify the Cosine Ratio",
      "problem": "In the same triangle with angle &#x03B8; = 30°, identify the cosine ratio in terms of the sides.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which side is adjacent to angle &#x03B8;?",
          "answer": "adjacent",
          "feedback": "Correct! Adjacent side is next to the angle but not the hypotenuse."
        },
        {
          "id": "q2",
          "prompt": "Write the cosine ratio as a fraction of these sides.",
          "answer": "adjacent/hypotenuse",
          "feedback": "Correct! cos(&#x03B8;) = adjacent/hypotenuse."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding the Tangent Ratio",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tangent relates the opposite side to the adjacent side for an angle &#x03B8;.</p>",
    "workedExample": {
      "title": "Worked Example: Identify the Tangent Ratio",
      "problem": "In the triangle with angle &#x03B8; = 30°, identify the tangent ratio.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which two sides are used in the tangent ratio?",
          "answer": "opposite and adjacent",
          "feedback": "Great! Tangent uses opposite and adjacent sides."
        },
        {
          "id": "q2",
          "prompt": "Write the tangent ratio as a fraction of these sides.",
          "answer": "opposite/adjacent",
          "feedback": "Correct! tan(&#x03B8;) = opposite/adjacent."
        }
      ]
    }
  },
  "step4": {
    "title": "Using Ratios to Find Unknown Sides",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If one side and an angle are known (other than the right angle), you can use sine, cosine or tangent to find an unknown side of the right-angled triangle.</p>",
    "workedExample": {
      "title": "Worked Example: Find an Unknown Side Using Sine",
      "problem": "In a right-angled triangle, angle &#x03B8; = 40°, and the hypotenuse is 10 cm. Find the length of the opposite side.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the sine ratio for this problem.",
          "answer": "sin(40) = opposite/10",
          "feedback": "Correct! sin(40°) = opposite/hypotenuse = opposite/10."
        },
        {
          "id": "q2",
          "prompt": "Calculate sin(40°) to 3 decimal places.",
          "answer": "0.643",
          "feedback": "Correct, sin(40°) ≈ 0.643."
        },
        {
          "id": "q3",
          "prompt": "Rearrange the formula to find the opposite side.",
          "answer": "opposite = 10 × 0.643",
          "feedback": "Exactly! opposite = 10 × sin(40°)."
        },
        {
          "id": "q4",
          "prompt": "Calculate the length of the opposite side.",
          "answer": "6.43",
          "feedback": "Well done! The opposite side is 6.43 cm."
        }
      ]
    }
  },
  "step5": {
    "title": "Using Ratios to Find Unknown Angles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When the sides of a right-angled triangle are known, we can use inverse sine, cosine or tangent functions to find an unknown angle.</p>",
    "workedExample": {
      "title": "Worked Example: Find an Unknown Angle Using Tangent",
      "problem": "A triangle has opposite side 7 cm and adjacent side 24 cm. Find angle &#x03B8;.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the tangent ratio using these sides.",
          "answer": "tan(θ) = 7/24",
          "feedback": "Correct! tan(θ) = opposite/adjacent = 7/24."
        },
        {
          "id": "q2",
          "prompt": "Calculate the ratio 7/24 as a decimal.",
          "answer": "0.292",
          "feedback": "Correct, 7 ÷ 24 ≈ 0.292."
        },
        {
          "id": "q3",
          "prompt": "Use an inverse tangent function (tan⁻¹) to find angle &#x03B8;. Input value: 0.292.",
          "answer": "16.26",
          "feedback": "Correct, &#x03B8; ≈ 16.26°."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A right-angled triangle has one angle measuring 50° and a side adjacent to this angle measuring 8 cm. Find the length of the hypotenuse and the length of the side opposite this angle.</span>",
      "hint": "Remember to use the correct trigonometric ratios: cosine for adjacent/hypotenuse, sine for opposite/hypotenuse.",
      "mustHaveKeywords": ["sine", "cosine", "hypotenuse", "opposite", "adjacent", "right-angled triangle"],
      "optionalKeywords": ["calculator", "inverse functions", "rounding"],
      "modelAnswer": "<span>First, use cosine to find the hypotenuse: cos(50°) = adjacent/hypotenuse = 8/hypotenuse, rearranged to hypotenuse = 8 ÷ cos(50°). Calculate hypotenuse approximately. Then use sine to find the opposite side: sin(50°) = opposite/hypotenuse. Multiply the hypotenuse by sin(50°) to get the opposite side.</span>",
      "scaffoldPrompts": ["Identify which side lengths are known and unknown", "Select the correct trigonometric ratios for each unknown side", "Write down the relations and rearrange to solve", "Perform calculations carefully using a calculator", "Check your answers are sensible for the size of the triangle"]
    }
  }
};