window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.2 - Trigonometry in right-angled triangles",
  "strapline": "Understanding and applying sine, cosine, and tangent ratios to calculate unknown angles and lengths in right-angled triangles and interpreting three-figure bearings.",
  "learningObjectives": [
    "Students should know the trigonometric ratios sine, cosine and tangent and apply them to find angles and lengths in right-angled triangles (Maths 4.2)",
    "Students should interpret and use three-figure bearings measured clockwise from the north line (N) (Maths 4.2)",
    ""
  ],
  "keyFormulas": [
    "sin(θ) = opposite / hypotenuse",
    "cos(θ) = adjacent / hypotenuse",
    "tan(θ) = opposite / adjacent"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='250' y2='250' stroke='#333' stroke-width='3'/><line x1='250' y1='250' x2='250' y2='50' stroke='#333' stroke-width='3'/><line x1='50' y1='250' x2='250' y2='50' stroke='#555' stroke-width='3'/><text x='150' y='270' font-family='sans-serif' font-size='16' text-anchor='middle'>Adjacent</text><text x='260' y='150' font-family='sans-serif' font-size='16' dominant-baseline='middle'>Opposite</text><text x='150' y='150' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#777'>Hypotenuse</text><circle cx='250' cy='250' r='20' fill='none' stroke='#777' stroke-width='2'/><text x='255' y='270' font-family='sans-serif' font-size='14' fill='#333'>θ</text></svg>",
  "step1": {
    "title": "Concept 1: Understanding Sine Ratio",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In a right-angled triangle, the <strong>sine</strong> of an angle θ is the ratio of the length of the side opposite the angle to the length of the hypotenuse.</p><p class=\"text-sm leading-6 text-muted-foreground\">This means <em>sin(θ) = opposite / hypotenuse</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a ladder leaning against a wall: the sine ratio helps you compare how high the ladder reaches (opposite) to the length of the ladder itself (hypotenuse).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a right triangle with hypotenuse 10 cm and opposite side 6 cm, calculate sin(θ).</span>",
        "<span>sin(θ) = opposite / hypotenuse = 6 / 10 = 0.6.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Understanding Cosine Ratio",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>cosine</strong> of an angle θ in a right-angled triangle is the ratio of the adjacent side to the hypotenuse.</p><p class=\"text-sm leading-6 text-muted-foreground\">This means <em>cos(θ) = adjacent / hypotenuse</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine standing next to a tree: the cosine ratio compares how far along the ground you are from the base (adjacent) to the length of a rope slanting to the top (hypotenuse).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given the hypotenuse is 13 cm and adjacent side is 12 cm, find cos(θ).</span>",
        "<span>cos(θ) = adjacent / hypotenuse = 12 / 13 ≈ 0.923.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Understanding Tangent Ratio",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>tangent</strong> of an angle θ in a right-angled triangle is the ratio of the opposite side to the adjacent side.</p><p class=\"text-sm leading-6 text-muted-foreground\">This means <em>tan(θ) = opposite / adjacent</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you measure how tall a tree appears from a certain horizontal distance, the tangent ratio compares the height (opposite) to the distance from you to the tree trunk (adjacent).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given the opposite side is 5 m and adjacent side is 7 m, find tan(θ).</span>",
        "<span>tan(θ) = opposite / adjacent = 5 / 7 ≈ 0.714.</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying Trigonometry to Find Unknown Lengths",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can rearrange the sine, cosine, and tangent formulas to find unknown sides when one side and an angle are known.</p><p class=\"text-sm leading-6 text-muted-foreground\">For example, if you know sin(θ) and hypotenuse, you can calculate the opposite side as opposite = hypotenuse × sin(θ).</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given θ = 30°, hypotenuse = 10 cm, find the length of the opposite side.</span>",
        "<span>Use sin(30°) = 0.5, so opposite = 10 × 0.5 = 5 cm.</span>"
      ]
    }
  },
  "step5": {
    "title": "Finding Angles Using Inverse Trigonometric Functions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If two sides of a right-angled triangle are known, use inverse sine, cosine, or tangent functions to find the angle.</p><p class=\"text-sm leading-6 text-muted-foreground\">For example, θ = sin<sup>−1</sup>(opposite / hypotenuse).</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Opposite side = 4 cm, hypotenuse = 6 cm, find θ.</span>",
        "<span>Calculate sin(θ) = 4/6 = 0.666..., so θ = sin<sup>−1</sup>(0.666...) ≈ 41.8°.</span>"
      ]
    }
  },
  "step6": {
    "title": "Interpreting and Using Three-Figure Bearings",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Bearings are angles measured clockwise from the north line (N) and given as three figures (e.g. 045°, 180°, 275°).</p><p class=\"text-sm leading-6 text-muted-foreground\">They help specify directions precisely in navigation and geometry problems.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A point is located at a bearing of 072°. This means it lies 72° clockwise from north.</span>",
        "<span>To draw, start at north line, measure 72° clockwise, and mark the point.</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which trigonometric ratio defines <em>tan(θ)</em> in a right-angled triangle?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Opposite divided by adjacent side</span>",
            "isCorrect": true,
            "explanation": "Correct! tan(θ) = opposite / adjacent."
          },
          {
            "id": "b",
            "label": "<span>Adjacent divided by hypotenuse</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That is the cosine ratio."
          },
          {
            "id": "c",
            "label": "<span>Opposite divided by hypotenuse</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That is the sine ratio."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The trigonometric ratio <strong>cosine</strong> equals <span class=\"font-semibold\">_____</span> divided by the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "opposite/hypotenuse",
                "label": "Opposite / Hypotenuse",
                "isCorrect": false,
                "feedback": "Incorrect, that is sine."
              },
              {
                "value": "adjacent/hypotenuse",
                "label": "Adjacent / Hypotenuse",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "opposite/adjacent",
                "label": "Opposite / Adjacent",
                "isCorrect": false,
                "feedback": "Incorrect, that is tangent."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "hypotenuse",
                "label": "Hypotenuse",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "adjacent",
                "label": "Adjacent",
                "isCorrect": false,
                "feedback": "No, denominator is hypotenuse for cosine."
              },
              {
                "value": "opposite",
                "label": "Opposite",
                "isCorrect": false,
                "feedback": "No, denominator is hypotenuse for cosine."
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Using Bearings With Trigonometry",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When you know a bearing and a distance, you can break the journey into horizontal and vertical parts using sine and cosine.</p><p class=\"text-sm leading-6 text-muted-foreground\">For example, if the bearing is θ from north, distance along north = distance × cos(θ), and distance east = distance × sin(θ).</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A boat travels 100 km on a bearing of 060°. Find the distance north and east.</span>",
        "<span>North distance = 100 × cos(60°) = 100 × 0.5 = 50 km.</span>",
        "<span>East distance = 100 × sin(60°) = 100 × 0.866 = 86.6 km.</span>"
      ]
    }
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A surveyor is standing at point A. Point B is 150 m away from A on a bearing of 045°. Using trigonometry, calculate how far east and how far north point B is from point A.</span>",
      "hint": "Remember bearings are clockwise from north. Use sine and cosine to find components.",
      "mustHaveKeywords": ["sine", "cosine", "bearing", "opposite", "adjacent"],
      "optionalKeywords": ["angle", "distance", "components", "right-angled triangle"],
      "modelAnswer": "<span>To find how far north and east point B is from A, first identify that the bearing from north is 045°, and the distance AB is 150 m. Draw a right-angled triangle with the hypotenuse 150 m and angle θ = 45° from the north line.<br>Distance north (adjacent side) = 150 × cos(45°) = 150 × 0.707 = 106.1 m.<br>Distance east (opposite side) = 150 × sin(45°) = 150 × 0.707 = 106.1 m.<br>Therefore, point B is approximately 106.1 m north and 106.1 m east of point A.</span>",
      "scaffoldPrompts": [
        "Identify the angle from the north (bearing)",
        "Use cosine to calculate the northward distance",
        "Use sine to calculate the eastward distance",
        "Multiply these ratios by the distance from A to B"
      ]
    }
  }
};