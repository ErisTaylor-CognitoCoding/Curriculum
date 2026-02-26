window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.12 - Surface area and volume (spheres, cones, pyramids, frustums)",
  "strapline": "Learn how to calculate surface area and volume for spheres, cones, pyramids, and frustums using key formulae and problem-solving strategies.",
  "learningObjectives": [
    "Calculate the surface area and volume of spheres using the formulae SA = 4πr² and V = (4/3)πr³ (Maths 4.12)",
    "Calculate the surface area and volume of cones and pyramids using the formulae SA = πr² + πrl (cone) and V = (1/3) × base area × height (Maths 4.12)",
    "Calculate the surface area and volume of frustums by understanding them as composite solids formed from removing smaller shapes from larger ones (Maths 4.12)"
  ],
  "keyFormulas": [
    "Surface area of a sphere = 4πr²",
    "Volume of a sphere = (4/3)πr³",
    "Surface area of a cone = πr² + πrl",
    "Volume of a cone = (1/3)πr²h",
    "Volume of a pyramid = (1/3) × base area × height",
    "Volume of a frustum = volume of larger solid - volume of smaller removed solid"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='80' fill='#a2cffe' stroke='#276fbf' stroke-width='3'/><text x='200' y='40' font-family='sans-serif' font-size='16' font-weight='bold' text-anchor='middle'>Sphere</text><line x1='200' y1='150' x2='280' y2='150' stroke='#333' stroke-width='2' marker-end='url(#arrowhead)'/><text x='240' y='140' font-family='sans-serif' font-size='14'>r</text><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#333'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding the Sphere",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>sphere</strong> is a perfectly round 3D shape where every point on the surface is the same distance (radius, <em>r</em>) from the centre. The surface area formula is <em>SA = 4πr²</em> and the volume formula is <em>V = (4/3)πr³</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a perfectly round ball, like a basketball. The distance from its centre to the surface is the radius.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Surface Area of a Sphere",
      "problem": "Calculate the surface area of a sphere with radius 5 cm.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the radius (<em>r</em>) of the sphere?",
          "answer": "5",
          "feedback": "Correct. The radius is 5 cm."
        },
        {
          "id": "q2",
          "prompt": "Calculate <em>r²</em> (radius squared): what is 5 × 5?",
          "answer": "25",
          "feedback": "Correct. 5 squared is 25."
        },
        {
          "id": "q3",
          "prompt": "Multiply by 4: what is 4 × 25?",
          "answer": "100",
          "feedback": "Correct. 4 times 25 is 100."
        },
        {
          "id": "q4",
          "prompt": "Now multiply by π (approx. 3.14): what is 100 × π?",
          "answer": "314",
          "feedback": "Correct. 100 × π is approximately 314 cm²."
        },
        {
          "id": "q5",
          "prompt": "What is the surface area of the sphere in cm²?",
          "answer": "314",
          "feedback": "Well done! The surface area is approximately 314 cm²."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Cone",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>cone</strong> has a circular base and a curved surface that tapers to a point called the apex. The total surface area is the sum of the base area and curved surface area: <em>SA = πr² + πrl</em>, where <em>r</em> is the radius and <em>l</em> is the slant height. The volume is <em>V = (1/3)πr²h</em>, where <em>h</em> is the vertical height.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine an ice cream cone with radius of the base circle and height from tip to base.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Volume of a Cone",
      "problem": "Find the volume of a cone with radius 3 cm and height 9 cm.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the radius <em>r</em>?",
          "answer": "3",
          "feedback": "Correct, r = 3 cm."
        },
        {
          "id": "q2",
          "prompt": "Square the radius: what is 3 × 3?",
          "answer": "9",
          "feedback": "9 is correct."
        },
        {
          "id": "q3",
          "prompt": "Multiply by π: 9 × π ≈ ?",
          "answer": "28.26",
          "feedback": "Correct, approximately 28.26."
        },
        {
          "id": "q4",
          "prompt": "Multiply by height <em>h = 9</em>: 28.26 × 9 = ?",
          "answer": "254.34",
          "feedback": "Good, 254.34 cm³."
        },
        {
          "id": "q5",
          "prompt": "Divide by 3 to complete volume formula: 254.34 ÷ 3 = ?",
          "answer": "84.78",
          "feedback": "Correct! Volume is approximately 84.78 cm³."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding the Pyramid",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>pyramid</strong> has a polygon base and triangular faces meeting at an apex. Its volume is calculated as <em>V = (1/3) × base area × perpendicular height</em>. The base area depends on the shape of the base (square, triangle, etc.).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the Egyptian pyramids: their base areas are polygonal and the height is the vertical distance from base to apex.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Volume of a Square-based Pyramid",
      "problem": "Find the volume of a pyramid with a square base of side 6 cm and height 10 cm.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the area of the base: what is 6 × 6?",
          "answer": "36",
          "feedback": "Correct, base area is 36 cm²."
        },
        {
          "id": "q2",
          "prompt": "Multiply by height: 36 × 10 = ?",
          "answer": "360",
          "feedback": "Correct, 360."
        },
        {
          "id": "q3",
          "prompt": "Divide by 3 to find volume: 360 ÷ 3 = ?",
          "answer": "120",
          "feedback": "Correct! Volume is 120 cm³."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Understanding the Frustum",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>frustum</strong> is a solid formed when the top of a cone or pyramid is cut off parallel to the base. To find its volume or surface area, think of it as the larger original solid minus the smaller removed top solid.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine slicing the top off a cone-shaped ice cream cone, leaving a smaller cone removed from the top.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Volume of a Conical Frustum",
      "problem": "A cone has height 15 cm and base radius 6 cm. The top is cut off 5 cm from the apex, forming a smaller cone removed. Find the volume of the remaining frustum.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the height of the smaller cone removed.",
          "answer": "5",
          "feedback": "Correct, smaller cone height is 5 cm."
        },
        {
          "id": "q2",
          "prompt": "Find the radius of the smaller cone using similar triangles. If original height is 15 cm, original radius 6 cm, radius scales linearly with height. What is radius of smaller cone?",
          "answer": "2",
          "feedback": "Correct. (5/15) × 6 = 2 cm."
        },
        {
          "id": "q3",
          "prompt": "Calculate volume of original cone: V = (1/3)πr²h. What is (1/3) × π × 6² × 15?",
          "answer": "565.5",
          "feedback": "Correct, approximately 565.5 cm³."
        },
        {
          "id": "q4",
          "prompt": "Calculate volume of smaller cone: V = (1/3)πr²h = (1/3)π × 2² × 5 = ?",
          "answer": "20.94",
          "feedback": "Correct, approximately 20.94 cm³."
        },
        {
          "id": "q5",
          "prompt": "Calculate volume of frustum: original cone volume minus smaller cone volume = ?",
          "answer": "544.56",
          "feedback": "Correct. 565.5 - 20.94 = 544.56 cm³ approximately."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which formula gives the surface area of a cone?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>SA = 2πrh + 2πr²</span>",
            "isCorrect": false,
            "explanation": "This is the surface area formula for a cylinder."
          },
          {
            "id": "b",
            "label": "<span>SA = πr² + πrl</span>",
            "isCorrect": true,
            "explanation": "Correct. This sums the base area and curved surface area of a cone."
          },
          {
            "id": "c",
            "label": "<span>SA = 4πr²</span>",
            "isCorrect": false,
            "explanation": "This is the surface area of a sphere."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What is the volume formula for a pyramid?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>V = (1/3) × base area × height</span>",
            "isCorrect": true,
            "explanation": "Correct!"
          },
          {
            "id": "b",
            "label": "<span>V = πr²h</span>",
            "isCorrect": false,
            "explanation": "This is the volume formula for a cylinder."
          },
          {
            "id": "c",
            "label": "<span>V = 4/3 π r³</span>",
            "isCorrect": false,
            "explanation": "This is the volume formula for a sphere."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A frustum is formed when the top 4 cm of a cone is removed. The original cone has a height of 12 cm and base radius 6 cm. Calculate the surface area and volume of the frustum.</span>",
      "hint": "Use similarity to find the radius of the smaller cone removed. Then subtract volumes. For surface area, consider the areas of both circular faces plus the curved surface area of the frustum.",
      "mustHaveKeywords": ["frustum", "volume", "surface area", "similar triangles", "radius", "height", "subtract"],
      "optionalKeywords": ["slant height", "π", "curved surface area"],
      "modelAnswer": "<span>First, use similar triangles to find the radius of the smaller cone: (4/12) × 6 = 2 cm. Calculate volumes: original cone volume = (1/3)π × 6² × 12 = 452.39 cm³, smaller cone volume = (1/3)π × 2² × 4 = 16.76 cm³. Volume of frustum = 452.39 - 16.76 = 435.63 cm³.<br/>For surface area, calculate the curved surface area of the frustum using slant heights and subtracting top curved area from original. Add areas of two circular faces: base with radius 6 cm and top with radius 2 cm. Finally, sum these for total surface area.</span>",
      "scaffoldPrompts": [
        "Calculate the radius of the smaller cone that was removed using similar triangles.",
        "Calculate the volume of the original cone.",
        "Calculate the volume of the smaller removed cone.",
        "Find the volume of the frustum by subtracting the smaller cone from the original cone.",
        "Calculate the slant heights and curved surface areas for the frustum.",
        "Add the areas of the two circular faces to find the total surface area."
      ]
    }
  }
};