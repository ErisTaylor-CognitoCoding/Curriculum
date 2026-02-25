window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.12 - Surface area and volume (spheres, cones, pyramids, frustums)",
  "strapline": "Explore how to calculate surface area and volume for spheres, cones, pyramids, and frustums using their key formulae and geometric properties.",
  "learningObjectives": [
    "Calculate the surface area and volume of spheres using the formulae SA = 4πr² and V = (4/3)πr³ (Maths 4.12)",
    "Calculate the surface area and volume of cones and pyramids using the formulae SA = πr² + πrl (cone) and V = (1/3) × base area × height (Maths 4.12)",
    "Calculate the surface area and volume of frustums by understanding them as composite solids formed from removing smaller shapes from larger ones (Maths 4.12)"
  ],
  "keyFormulas": [
    "SA = 4πr² (Surface area of a sphere)",
    "V = (4/3)πr³ (Volume of a sphere)",
    "SA(cone) = πr² + πrl (Surface area of a cone)",
    "V = (1/3) × base area × height (Volume of cones & pyramids)",
    "Concept: Frustums are formed by removing smaller shapes from larger solids",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='80' fill='#90cdf4' stroke='#1a202c' stroke-width='3'/><text x='200' y='150' font-family='sans-serif' font-size='16' fill='#1a202c' text-anchor='middle' dominant-baseline='middle'>Sphere (r)</text></svg>",
  "step1": {
    "title": "Concept: Understanding the Sphere",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>sphere</strong> is a perfectly round 3D shape where every point on the surface is the same distance <em>r</em> from the centre. The surface area (SA) and volume (V) depend only on this radius.</p><p>Use the formulas: SA = 4πr² and V = (4/3)πr³.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a perfectly round ball like a basketball, where the distance from its centre to the surface is the same everywhere.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Sphere Surface Area & Volume",
      "problem": "A sphere has radius <strong>r</strong>. Calculate its surface area and volume.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the radius r (in cm):",
          "answer": "7",
          "feedback": "Great, radius = 7 cm."
        },
        {
          "id": "q2",
          "prompt": "Calculate the surface area using SA = 4πr². Provide your answer in terms of π.",
          "answer": "196π",
          "feedback": "Correct, SA = 4 × 7² = 4 × 49 = 196π cm²."
        },
        {
          "id": "q3",
          "prompt": "Calculate the volume using V = (4/3)πr³. Provide your answer in terms of π.",
          "answer": "1372/3 π",
          "feedback": "Well done, V = (4/3) × 7³ = (4/3) × 343 = 1372/3 π cm³."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Cone",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>cone</strong> is a 3D shape with a circular base that narrows to an apex (tip). The slant height <em>l</em> is the diagonal length from base edge to the apex.</p><p>Use these formulas:<br>Surface area (SA) = πr² + πrl, <br>Volume (V) = (1/3)πr²h where <em>h</em> is vertical height.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine an ice cream cone – the flat circular opening is the base, and the height goes straight up from the center.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Cone Surface Area and Volume",
      "problem": "Given a cone with radius <strong>r</strong> and height <strong>h</strong>, find its surface area and volume.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the radius r (cm):",
          "answer": "5",
          "feedback": "Radius is 5 cm."
        },
        {
          "id": "q2",
          "prompt": "Enter the vertical height h (cm):",
          "answer": "12",
          "feedback": "Height is 12 cm."
        },
        {
          "id": "q3",
          "prompt": "Calculate the slant height l using Pythagoras: l = √(r² + h²). Provide your answer (rounded to 2 decimals):",
          "answer": "13",
          "feedback": "Correct. l = √(5² + 12²) = √(25+144) = √169 = 13 cm."
        },
        {
          "id": "q4",
          "prompt": "Calculate surface area using SA = πr² + πrl. Express your answer in terms of π.",
          "answer": "90π",
          "feedback": "Well done! SA = π × 5² + π × 5 × 13 = 25π + 65π = 90π cm²."
        },
        {
          "id": "q5",
          "prompt": "Calculate volume using V = (1/3)πr²h. Give your answer in terms of π.",
          "answer": "100π",
          "feedback": "Correct! V = (1/3) × π × 25 × 12 = (1/3) × 300π = 100π cm³."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding the Pyramid",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>pyramid</strong> is a 3D shape with a polygonal base and triangular faces meeting at an apex. The volume depends on the base area and perpendicular height.</p><p>Use: <em>Volume = (1/3) × base area × perpendicular height</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a pyramid-shaped tent; its base is the floor and the apex is the top tip where all sides meet.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Pyramid Volume",
      "problem": "Find the volume of a pyramid with a square base of side 6 m and height 10 m.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the base area (side²):",
          "answer": "36",
          "feedback": "Correct, base area = 6 × 6 = 36 m²."
        },
        {
          "id": "q2",
          "prompt": "Using V = (1/3) × base area × height, calculate the volume:",
          "answer": "120",
          "feedback": "Well done! V = (1/3) × 36 × 10 = 120 m³."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Understanding Frustums",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>frustum</strong> is a solid formed by cutting the top off a cone or pyramid, leaving two parallel bases. We find its surface area and volume by treating it as a composite solid formed by subtracting a smaller shape from a larger one.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a cone ice cream with the pointed tip cut off. The remaining shape is a frustum.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Volume of a Frustum of a Cone",
      "problem": "A cone has height 15 cm and base radius 8 cm. The top is cut off by slicing parallel to the base, leaving a frustum of height 10 cm and top radius 5 cm. Find the volume of the frustum.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the volume of the original cone with r=8, h=15 (use V = (1/3)πr²h):",
          "answer": "320π",
          "feedback": "Correct! V = (1/3) × π × 64 × 15 = 320π cm³."
        },
        {
          "id": "q2",
          "prompt": "Calculate the height of the removed smaller cone (total height - frustum height):",
          "answer": "5",
          "feedback": "Right, height of smaller cone = 15 - 10 = 5 cm."
        },
        {
          "id": "q3",
          "prompt": "Calculate volume of smaller cone with r=5, h=5:",
          "answer": "125π/3",
          "feedback": "Correct. V = (1/3) × π × 25 × 5 = 125π/3 cm³."
        },
        {
          "id": "q4",
          "prompt": "Calculate the volume of the frustum = volume original cone - volume smaller cone:",
          "answer": "835π/3",
          "feedback": "Yes! Volume frustum = 320π - 125π/3 = 960π/3 - 125π/3 = 835π/3 cm³."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Mixed MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the formula for the surface area of a sphere?</span>",
        "options": [
          {"id": "a", "label": "<span>SA = 4πr²</span>", "isCorrect": true, "explanation": "Correct, this is the surface area of a sphere."},
          {"id": "b", "label": "<span>SA = πr² + πrl</span>", "isCorrect": false, "explanation": "This is the formula for the surface area of a cone."},
          {"id": "c", "label": "<span>SA = (1/3) × base area × height</span>", "isCorrect": false, "explanation": "This is the formula for volume of cones or pyramids, not surface area."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which formula correctly calculates the volume of a pyramid?</span>",
        "options": [
          {"id": "a", "label": "<span>V = πr²h</span>", "isCorrect": false, "explanation": "This calculates the volume of a cylinder."},
          {"id": "b", "label": "<span>V = (1/3) × base area × perpendicular height</span>", "isCorrect": true, "explanation": "Correct. This is the pyramid volume formula."},
          {"id": "c", "label": "<span>V = 4/3πr³</span>", "isCorrect": false, "explanation": "This calculates the volume of a sphere."}
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A frustum is formed by cutting the top off a cone. The frustum has bottom radius 12 cm, top radius 7 cm, and height 9 cm. Calculate the volume of the frustum.</span>",
      "hint": "Use the formula for frustum of a cone volume: V = (1/3)πh (R² + Rr + r²) where R and r are bottom and top radii.",
      "mustHaveKeywords": ["frustum", "volume", "radius", "height", "formula"],
      "optionalKeywords": ["π", "R", "r", "h", "substitution"],
      "modelAnswer": "<span>The volume of a frustum is found using the formula V = (1/3)πh (R² + Rr + r²). Substituting R=12 cm, r=7 cm, h=9 cm:<br>V = (1/3) × π × 9 × (12² + 12×7 + 7²)<br>= 3π × (144 + 84 + 49)<br>= 3π × 277 = 831π cm³.<br>Therefore, the volume is 831π cm³.</span>",
      "scaffoldPrompts": [
        "Recall the volume formula for a conical frustum.",
        "Substitute the values of R, r, and h into the formula.",
        "Calculate each term inside the parentheses.",
        "Multiply by (1/3)πh to find the volume."
      ]
    }
  }
};