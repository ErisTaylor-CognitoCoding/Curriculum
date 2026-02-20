window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.12 - Surface area and volume (spheres, cones, pyramids, frustums)",
  "strapline": "Understand how to calculate surface area and volume of spheres, cones, pyramids, and frustums using key formulae and geometric concepts.",
  "learningObjectives": [
    "Calculate the surface area and volume of spheres using the formulae SA = 4πr² and V = (4/3)πr³ (Maths 4.12)",
    "Calculate the surface area and volume of cones and pyramids using the formulae SA = πr² + πrl (cone) and V = (1/3) × base area × height (Maths 4.12)",
    "Calculate the surface area and volume of frustums by understanding them as composite solids formed from removing smaller shapes from larger ones (Maths 4.12)"
  ],
  "keyFormulas": [
    "SA of sphere = 4πr², Volume of sphere = (4/3)πr³",
    "SA of cone = πr² + πrl, Volume of cone = (1/3)πr²h",
    "Volume of pyramid = (1/3) × base area × height",
    "Composite volumes = Larger solid volume - smaller removed volume",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='80' stroke='#333' stroke-width='2' fill='none'/><text x='200' y='150' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#333'>Sphere (r)</text></svg>",
  "step1": {
    "title": "Concept: Understanding the Sphere",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>sphere</strong> is a perfectly round 3D shape where every point on the surface is the same distance (<em>radius</em>, r) from the centre. The surface area (SA) and volume (V) of a sphere are given by the formulae <strong>SA = 4πr²</strong> and <strong>V = (4/3)πr³</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a basketball; every point on its surface is the same distance from the centre, defining a perfect sphere.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Surface Area of a Sphere",
      "problem": "Calculate the surface area of a sphere with radius <strong>r</strong>.",
      "questions": [
        {
          "id": "se1-q1",
          "prompt": "Enter the radius (r) of the sphere in cm:",
          "answer": "7",
          "feedback": "Great! r = 7 cm"
        },
        {
          "id": "se1-q2",
          "prompt": "Calculate r² (square the radius):",
          "answer": "49",
          "feedback": "Correct! 7² = 49"
        },
        {
          "id": "se1-q3",
          "prompt": "Calculate 4 × π × r² (approximate π = 3.14):",
          "answer": "615.44",
          "feedback": "Well done! 4 × 3.14 × 49 ≈ 615.44 cm²"
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Cone",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>cone</strong> is a 3D shape with a circular base of radius <em>r</em> that tapers smoothly to an apex. The slant height <em>l</em> is the distance along the side from base to apex. The total surface area is <strong>SA = πr² + πrl</strong> and the volume is <strong>V = (1/3)πr²h</strong>, where <em>h</em> is the vertical height.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine an ice cream cone. The circular top is the base, and the pointy end is the apex.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Surface Area of a Cone",
      "problem": "Calculate the total surface area of a cone with radius 3 cm and slant height 5 cm.",
      "questions": [
        {
          "id": "se2-q1",
          "prompt": "Calculate πr² (using π ≈ 3.14):",
          "answer": "28.26",
          "feedback": "Correct! π × 3² = 3.14 × 9 = 28.26 cm²"
        },
        {
          "id": "se2-q2",
          "prompt": "Calculate πrl (using π ≈ 3.14):",
          "answer": "47.1",
          "feedback": "Good! π × 3 × 5 = 3.14 × 15 = 47.1 cm²"
        },
        {
          "id": "se2-q3",
          "prompt": "Add to find total surface area = πr² + πrl:",
          "answer": "75.36",
          "feedback": "Exactly! 28.26 + 47.1 = 75.36 cm²"
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding the Pyramid",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>pyramid</strong> is a 3D solid with a polygon base and triangular faces that converge to an apex. The volume formula is <strong>V = (1/3) × base area × perpendicular height</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">The Great Pyramid of Giza is a famous example of a pyramid with a square base.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Volume of a Pyramid",
      "problem": "Calculate the volume of a pyramid with a square base side length 6 m and height 9 m.",
      "questions": [
        {
          "id": "se3-q1",
          "prompt": "Calculate the base area (side × side):",
          "answer": "36",
          "feedback": "Correct! 6 m × 6 m = 36 m²"
        },
        {
          "id": "se3-q2",
          "prompt": "Use the formula V = (1/3) × base area × height. Calculate the volume:",
          "answer": "108",
          "feedback": "Well done! (1/3) × 36 × 9 = 108 m³"
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Understanding Frustums",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>frustum</strong> is a part of a solid (like a cone or pyramid) that remains after cutting off the top with a cut parallel to the base. To find surface area or volume, treat frustums as composite solids—find volume or area of larger shape then subtract the smaller top portion.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a lampshade shaped like a cone with the top cut off—that's a frustum.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Volume of a Frustum of a Cone",
      "problem": "Calculate the volume of a frustum of a cone with height 10 cm, bottom radius 6 cm and top radius 3 cm.",
      "questions": [
        {
          "id": "se4-q1",
          "prompt": "Calculate volume of whole larger cone (height 13 cm): Use V = (1/3)πr²h, with r = 6 cm, h = 13 cm:",
          "answer": "490.09",
          "feedback": "Correct! (1/3) × π × 6² × 13 ≈ 490.09 cm³"
        },
        {
          "id": "se4-q2",
          "prompt": "Calculate volume of smaller cone removed (height 3 cm, radius 3 cm):",
          "answer": "28.27",
          "feedback": "Good! (1/3) × π × 3² × 3 ≈ 28.27 cm³"
        },
        {
          "id": "se4-q3",
          "prompt": "Find volume of the frustum by subtraction:",
          "answer": "461.82",
          "feedback": "Exactly! 490.09 - 28.27 = 461.82 cm³"
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is the correct formula for the volume of a cone?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>V = πr²h</span>",
            "isCorrect": false,
            "explanation": "This is the formula for the volume of a cylinder."
          },
          {
            "id": "b",
            "label": "<span>V = (1/3)πr²h</span>",
            "isCorrect": true,
            "explanation": "Correct! The volume of a cone is one third that of a cylinder with the same base and height."
          },
          {
            "id": "c",
            "label": "<span>V = 4/3πr³</span>",
            "isCorrect": false,
            "explanation": "This is the formula for the volume of a sphere."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A frustum of a pyramid has a square base of side length 8 m, a top square of side length 4 m, and height 6 m. Calculate the volume of the frustum.</span>",
      "hint": "<span>Recall the volume of a pyramid is (1/3) × base area × height. Use the difference of volumes approach for the frustum.</span>",
      "mustHaveKeywords": ["volume", "pyramid", "base area", "height", "frustum", "subtract"],
      "optionalKeywords": ["composite solid", "similar triangles"],
      "modelAnswer": "<span>First, find the volume of the larger pyramid with base side 8 m and height estimated using similar triangles. Then find the volume of the smaller pyramid cut off with base side 4 m. Subtract the smaller volume from the larger volume to get the frustum's volume.</span>",
      "scaffoldPrompts": ["Calculate base areas of large and small pyramids", "Find the heights using proportionality", "Apply volume formula for both pyramids", "Subtract smaller volume from bigger one"]
    }
  }
};