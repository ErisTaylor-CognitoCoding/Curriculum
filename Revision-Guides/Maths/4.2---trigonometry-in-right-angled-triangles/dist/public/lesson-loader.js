window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.2 - Trigonometry in right-angled triangles",
  "strapline": "Understanding how to use sine, cosine, and tangent ratios to find missing angles and sides in right-angled triangles, and interpreting bearings measured clockwise from north.",
  "learningObjectives": [
    "Students should know the trigonometric ratios sine, cosine and tangent and apply them to find angles and lengths in right-angled triangles (Maths 4.2)",
    "Students should interpret and use three-figure bearings measured clockwise from the north line (N) (Maths 4.2)",
    ""
  ],
  "keyFormulas": [
    "sin(θ) = opposite/hypotenuse",
    "cos(θ) = adjacent/hypotenuse",
    "tan(θ) = opposite/adjacent"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='100' y1='200' x2='300' y2='200' stroke='#333' stroke-width='3'/><line x1='300' y1='200' x2='300' y2='100' stroke='#333' stroke-width='3'/><line x1='100' y1='200' x2='300' y2='100' stroke='#333' stroke-width='3'/><text x='205' y='175' font-family='sans-serif' font-size='16' fill='#000'>hypotenuse</text><text x='200' y='215' font-family='sans-serif' font-size='16' fill='#000'>adjacent</text><text x='310' y='150' font-family='sans-serif' font-size='16' fill='#000'>opposite</text><circle cx='300' cy='200' r='10' fill='none' stroke='#000' stroke-width='1'/><text x='280' y='225' font-family='sans-serif' font-size='24' fill='#000'>θ</text></svg>",
  "step1": {
    "title": "Introduction to Sine, Cosine and Tangent",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In any right-angled triangle, the three main trigonometric ratios relate the angles to the sides. <strong>Sine</strong> (sin) compares the length of the side opposite the angle to the hypotenuse. <strong>Cosine</strong> (cos) compares the adjacent side to the hypotenuse. <strong>Tangent</strong> (tan) compares the opposite side to the adjacent side.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a ladder leaning against a wall: the height it reaches is the opposite side, the distance from the wall is the adjacent side, and the ladder itself is the hypotenuse.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Sides",
      "problem": "In a right-angled triangle with angle θ, can you identify which side is opposite, adjacent, and the hypotenuse?",
      "questions": [
        {
          "id": "q1",
          "prompt": "If θ is the angle between the adjacent side and hypotenuse, what side lies opposite θ?",
          "answer": "opposite",
          "feedback": "Correct. The side opposite the angle θ is called the opposite side."
        },
        {
          "id": "q2",
          "prompt": "Which side is always the longest side in a right-angled triangle?",
          "answer": "hypotenuse",
          "feedback": "Correct. The hypotenuse is the longest side opposite the right angle."
        },
        {
          "id": "q3",
          "prompt": "Name the side that forms the angle θ together with the hypotenuse.",
          "answer": "adjacent",
          "feedback": "Correct. The side next to the angle θ, but not the hypotenuse, is the adjacent side."
        }
      ]
    }
  },
  "step2": {
    "title": "Using the Sine Ratio to Find a Missing Length",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use the sine ratio to find a missing side length when you know the angle and one side. The formula is <em>sin(θ) = opposite / hypotenuse</em>. Rearranging helps find the unknown side.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Opposite Side",
      "problem": "In a right-angled triangle, θ = 30° and the hypotenuse is 10 cm. Find the length of the opposite side to θ.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the formula involving sin(θ), opposite, and hypotenuse.",
          "answer": "sin(30) = opposite/10",
          "feedback": "Correct, that's the right formula to start with."
        },
        {
          "id": "q2",
          "prompt": "Calculate sin(30) using a calculator or known values.",
          "answer": "0.5",
          "feedback": "Correct. sin(30°) = 0.5."
        },
        {
          "id": "q3",
          "prompt": "Rearrange the formula to find 'opposite'.",
          "answer": "opposite = 10 × 0.5",
          "feedback": "Correct, multiply both sides by 10."
        },
        {
          "id": "q4",
          "prompt": "Calculate the length of the opposite side.",
          "answer": "5",
          "feedback": "Correct. The opposite side is 5 cm."
        }
      ]
    }
  },
  "step3": {
    "title": "Using the Cosine Ratio to Find a Missing Length",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cosine relates the adjacent side and the hypotenuse in a right-angled triangle: <em>cos(θ) = adjacent / hypotenuse</em>. This can be rearranged to find either side.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Adjacent Side",
      "problem": "In a right-angled triangle, θ = 60° and hypotenuse = 8 cm. Find the adjacent side length.",
      "questions": [
        {
          "id": "q1",
          "prompt": "State the cosine formula for this problem.",
          "answer": "cos(60) = adjacent/8",
          "feedback": "Correct, that's the starting formula."
        },
        {
          "id": "q2",
          "prompt": "Calculate cos(60).",
          "answer": "0.5",
          "feedback": "Correct. cos(60°) = 0.5."
        },
        {
          "id": "q3",
          "prompt": "Rearrange the formula to find adjacent.",
          "answer": "adjacent = 8 × 0.5",
          "feedback": "Right, multiply both sides by 8."
        },
        {
          "id": "q4",
          "prompt": "Calculate the adjacent side length.",
          "answer": "4",
          "feedback": "Correct. The adjacent side is 4 cm."
        }
      ]
    }
  },
  "step4": {
    "title": "Using the Tangent Ratio to Find a Missing Length",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tangent is the ratio of the opposite side to the adjacent side: <em>tan(θ) = opposite / adjacent</em>. Rearranging this formula helps find missing sides when an angle and one side are known.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Opposite Side",
      "problem": "In a right-angled triangle, θ = 45° and the adjacent side is 7 cm. Find the length of the opposite side.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the tangent ratio formula for this problem.",
          "answer": "tan(45) = opposite/7",
          "feedback": "Correct, this sets up the equation."
        },
        {
          "id": "q2",
          "prompt": "Calculate tan(45).",
          "answer": "1",
          "feedback": "Correct, tan(45°) = 1."
        },
        {
          "id": "q3",
          "prompt": "Rearrange to find opposite.",
          "answer": "opposite = 7 × 1",
          "feedback": "Correct, multiply both sides by 7."
        },
        {
          "id": "q4",
          "prompt": "Calculate the opposite side length.",
          "answer": "7",
          "feedback": "Correct. The opposite side is 7 cm."
        }
      ]
    }
  },
  "step5": {
    "title": "Finding an Angle Using Trigonometry",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Trigonometric ratios can also be used to find an unknown angle when two sides are known. Use the inverse functions: <em>sin<sup>-1</sup></em>, <em>cos<sup>-1</sup></em>, or <em>tan<sup>-1</sup></em> on a calculator.</p>",
    "workedExample": {
      "title": "Worked Example: Finding an Angle",
      "problem": "In a right-angled triangle, the opposite side is 5 cm and the adjacent side is 8 cm. Find the angle θ.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Choose which trigonometric ratio to use (sin, cos, or tan) based on the sides given.",
          "answer": "tan",
          "feedback": "Correct. Tangent relates opposite and adjacent sides."
        },
        {
          "id": "q2",
          "prompt": "Set up the formula using tan(θ).",
          "answer": "tan(θ) = 5/8",
          "feedback": "Correct, this is the correct ratio."
        },
        {
          "id": "q3",
          "prompt": "Use the inverse tangent function to find θ: θ = tan<sup>-1</sup>(5/8). What is θ (to nearest degree)?",
          "answer": "32",
          "feedback": "Correct. θ ≈ 32°."
        }
      ]
    }
  },
  "step6": {
    "title": "Interpreting and Using Three-Figure Bearings",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Bearings are measured clockwise from the north line and are always given as three-digit numbers from 000° to 360°. Interpreting bearings helps determine direction in navigation and mapping.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a compass rose with 0° at north, 90° east, 180° south, and 270° west. Bearings always start at 000° at north and move clockwise.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Reading Bearings",
      "problem": "A boat is travelling on a bearing of 075°. What direction is it heading?",
      "questions": [
        {
          "id": "q1",
          "prompt": "From north line (0°), is 075° clockwise or anticlockwise?",
          "answer": "clockwise",
          "feedback": "Correct. Bearings are always measured clockwise."
        },
        {
          "id": "q2",
          "prompt": "Which cardinal direction does 075° lie closest to? (N, NE, E, SE, etc.)",
          "answer": "NE",
          "feedback": "Correct, 075° is just east of northeast."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>In a right-angled triangle, one angle measures 40°. The side adjacent to this angle is 9 cm long. Find (a) the length of the hypotenuse, (b) the length of the opposite side, and (c) the bearing of a point if the direction from North is the hypotenuse pointing at 40° clockwise. Show all your working.</span>",
      "hint": "Use the cosine ratio to find the hypotenuse, sine ratio to find the opposite side, and remember bearings are measured clockwise from North with three digits.",
      "mustHaveKeywords": ["cosine", "sine", "bearing", "clockwise", "hypotenuse", "opposite side"],
      "optionalKeywords": ["inverse functions", "triangle", "angle", "adjacent"],
      "modelAnswer": "<span>(a) Using cosine: cos(40°) = adjacent / hypotenuse → hypotenuse = 9 / cos(40°) ≈ 11.76 cm.<br>(b) Using sine: sin(40°) = opposite / hypotenuse → opposite = hypotenuse × sin(40°) ≈ 11.76 × 0.6428 ≈ 7.56 cm.<br>(c) The bearing is measured clockwise from north. Since the angle is 40°, the bearing is 040°.</span>",
      "scaffoldPrompts": [
        "Start with cosine formula to find hypotenuse.",
        "Use your hypotenuse to find the opposite side using sine.",
        "Consider how bearings are defined from the North line."
      ]
    }
  }
};