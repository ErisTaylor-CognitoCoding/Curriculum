window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.2 - Trigonometry in right-angled triangles",
  "strapline": "Understanding and applying sine, cosine, and tangent ratios to solve problems involving right-angled triangles.",
  "learningObjectives": [
    "Students should know the sine, cosine and tangent ratios in right-angled triangles (Maths 4.2)",
    "Students should be able to use sine, cosine and tangent ratios to find unknown sides in right-angled triangles (Maths 4.2)",
    "Students should be able to use sine, cosine and tangent ratios to find unknown angles in right-angled triangles (Maths 4.2)"
  ],
  "keyFormulas": [
    "Sine ratio: sin(θ) = opposite / hypotenuse",
    "Cosine ratio: cos(θ) = adjacent / hypotenuse",
    "Tangent ratio: tan(θ) = opposite / adjacent"
  ],
  "diagramHtml": "<svg viewBox='0 0 300 220' xmlns='http://www.w3.org/2000/svg'><polygon points='50,180 250,180 250,60' fill='#d0e6f7' stroke='#1f4e79' stroke-width='3'/><line x1='50' y1='180' x2='250' y2='180' stroke='#1f4e79' stroke-width='3'/><line x1='250' y1='180' x2='250' y2='60' stroke='#1f4e79' stroke-width='3'/><line x1='250' y1='60' x2='50' y2='180' stroke='#1f4e79' stroke-width='3'/><text x='240' y='190' font-family='sans-serif' font-size='16'>Adjacent</text><text x='130' y='130' font-family='sans-serif' font-size='16' fill='#1f4e79'>Hypotenuse</text><text x='30' y='130' font-family='sans-serif' font-size='16'>Opposite</text><circle cx='250' cy='180' r='10' fill='none' stroke='#1f4e79' stroke-width='2'/><text x='255' y='185' font-family='sans-serif' font-size='18' fill='#1f4e79'>θ</text></svg>",
  "step1": {
    "title": "Introduction to Sine, Cosine and Tangent Ratios",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The sine, cosine and tangent ratios connect the angles of a right-angled triangle with the lengths of its sides. They are essential tools to solve problems involving right-angled triangles.</p><p class=\"text-sm leading-6 text-muted-foreground\"><strong>Sine</strong> (sin) relates the <em>opposite</em> side to the <em>hypotenuse</em>: sin(θ) = opposite / hypotenuse.<br><strong>Cosine</strong> (cos) relates the <em>adjacent</em> side to the <em>hypotenuse</em>: cos(θ) = adjacent / hypotenuse.<br><strong>Tangent</strong> (tan) relates the <em>opposite</em> side to the <em>adjacent</em> side: tan(θ) = opposite / adjacent.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a ladder leaning against a wall at an angle θ. Sine, cosine, and tangent help us understand relationships between the height reached on the wall (opposite), the base distance from the wall (adjacent), and the length of the ladder (hypotenuse).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Sides",
      "problem": "Given a right-angled triangle with angle θ marked, identify the opposite, adjacent, and hypotenuse sides relative to θ.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which side is opposite to the angle θ?",
          "answer": "opposite",
          "feedback": "Correct! The side opposite the angle θ is called the opposite side."
        },
        {
          "id": "q2",
          "prompt": "Which side touches angle θ but is not the hypotenuse?",
          "answer": "adjacent",
          "feedback": "Well done! The side that touches θ but isn't the hypotenuse is the adjacent side."
        },
        {
          "id": "q3",
          "prompt": "What is the longest side opposite the right angle called?",
          "answer": "hypotenuse",
          "feedback": "Correct. The longest side opposite the 90° angle is the hypotenuse."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding the Sine Ratio",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The sine of an angle in a right-angled triangle is defined as the ratio of the length of the opposite side to the hypotenuse.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Sine",
      "problem": "In a right-angled triangle, the length of the side opposite angle θ is 4 cm, and the hypotenuse is 5 cm. Find sin(θ).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the length of the opposite side?",
          "answer": "4",
          "feedback": "Good, opposite side is 4 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the length of the hypotenuse?",
          "answer": "5",
          "feedback": "Correct, hypotenuse is 5 cm."
        },
        {
          "id": "q3",
          "prompt": "Calculate sin(θ) = opposite/hypotenuse",
          "answer": "0.8",
          "feedback": "Yes! sin(θ) = 4/5 = 0.8."
        }
      ]
    }
  },
  "step3": {
    "title": "Using Cosine Ratio",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The cosine of an angle in a right-angled triangle is the ratio of the length of the adjacent side to the hypotenuse.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Cosine",
      "problem": "In a right-angled triangle, the length of the side adjacent to angle θ is 3 cm, and the hypotenuse is 5 cm. Find cos(θ).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the length of the adjacent side?",
          "answer": "3",
          "feedback": "Correct, adjacent side is 3 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the length of the hypotenuse?",
          "answer": "5",
          "feedback": "Great, hypotenuse is 5 cm."
        },
        {
          "id": "q3",
          "prompt": "Calculate cos(θ) = adjacent/hypotenuse",
          "answer": "0.6",
          "feedback": "Correct! cos(θ) = 3/5 = 0.6."
        }
      ]
    }
  },
  "step4": {
    "title": "Using Tangent Ratio",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The tangent of an angle in a right-angled triangle is the ratio of the length of the opposite side to the adjacent side.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Tangent",
      "problem": "In a right-angled triangle, the opposite side is 4 cm and the adjacent side is 3 cm. Find tan(θ).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the length of the opposite side?",
          "answer": "4",
          "feedback": "Correct, opposite side is 4 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the length of the adjacent side?",
          "answer": "3",
          "feedback": "Right, adjacent side is 3 cm."
        },
        {
          "id": "q3",
          "prompt": "Calculate tan(θ) = opposite/adjacent",
          "answer": "1.3333",
          "feedback": "Yes! tan(θ) = 4/3 ≈ 1.3333."
        }
      ]
    }
  },
  "step5": {
    "title": "Finding an Unknown Side Using Trigonometry",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use sine, cosine or tangent ratios to find an unknown side when you know one side and one angle (other than the right angle) in a right-angled triangle.</p>",
    "workedExample": {
      "title": "Worked Example: Finding a Side",
      "problem": "In a right-angled triangle, angle θ = 30°, and the hypotenuse is 10 cm. Find the length of the opposite side.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which ratio involves opposite and hypotenuse sides?",
          "answer": "sin",
          "feedback": "Correct! sin(θ) = opposite/hypotenuse."
        },
        {
          "id": "q2",
          "prompt": "Calculate sin(30°) (Use calculator or known values).",
          "answer": "0.5",
          "feedback": "Right, sin(30°) = 0.5."
        },
        {
          "id": "q3",
          "prompt": "Using sin(30°) = opposite / 10, calculate opposite side length.",
          "answer": "5",
          "feedback": "Yes! opposite = 0.5 × 10 = 5 cm."
        }
      ]
    }
  },
  "step6": {
    "title": "Finding an Unknown Angle Using Trigonometry",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can find an angle when you know two sides of a right-angled triangle by rearranging sine, cosine, or tangent formulae and using inverse functions.</p>",
    "workedExample": {
      "title": "Worked Example: Finding an Angle",
      "problem": "In a right-angled triangle, the opposite side is 6 cm and the adjacent side is 8 cm. Find angle θ.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which ratio involves opposite and adjacent sides?",
          "answer": "tan",
          "feedback": "Correct! tan(θ) = opposite / adjacent."
        },
        {
          "id": "q2",
          "prompt": "Calculate tan(θ) = 6/8 = ? (decimal form)",
          "answer": "0.75",
          "feedback": "Good, tan(θ) = 0.75."
        },
        {
          "id": "q3",
          "prompt": "Find θ by calculating tan⁻¹(0.75) in degrees (round to nearest degree).",
          "answer": "37",
          "feedback": "Correct! θ ≈ 37°."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A ladder leans against a wall forming a 65° angle with the ground. The ladder is 8 m long. Calculate how high the ladder reaches up the wall.</span>",
      "hint": "Remember to identify the opposite and hypotenuse sides relative to the angle, then use the sine ratio.",
      "mustHaveKeywords": ["sine ratio", "opposite side", "hypotenuse", "sin(65°)", "calculation", "length in meters"],
      "optionalKeywords": ["Pythagoras", "angle of elevation"],
      "modelAnswer": "<span>First, identify the sides: the hypotenuse is the length of the ladder (8 m), and the opposite side is the height the ladder reaches. Using the sine ratio sin(65°) = opposite / 8, rearranging gives opposite = 8 × sin(65°). Calculating sin(65°) ≈ 0.9063, so opposite ≈ 8 × 0.9063 = 7.25 m. Therefore, the ladder reaches approximately 7.25 meters up the wall.</span>",
      "scaffoldPrompts": [
        "Identify the hypotenuse and opposite sides relative to the given angle.",
        "Write the sine ratio formula for the angle.",
        "Substitute the known values into the formula.",
        "Calculate the sine of 65° using a calculator.",
        "Multiply to find the unknown side length.",
        "Write the final answer with correct units."
      ]
    }
  }
};