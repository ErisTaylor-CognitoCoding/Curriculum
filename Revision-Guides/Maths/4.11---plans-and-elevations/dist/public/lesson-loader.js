window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.11 - Plans and elevations",
  "strapline": "Understanding how 2D views represent 3D solids from different viewpoints.",
  "learningObjectives": [
    "Students should be able to draw and interpret plans and elevations of 3D solids from different viewpoints (Maths 4.11)",
    "Students should develop spatial reasoning skills to visualise 2D representations of 3D shapes (Maths 4.11)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='150' y='50' width='100' height='100' fill='#a5d8ff' stroke='#333' /><rect x='180' y='20' width='40' height='30' fill='#339af0' stroke='#333' /><text x='200' y='180' font-family='sans-serif' font-size='14' text-anchor='middle'>3D Solid</text></svg>",
  "step1": {
    "title": "Concept: What is a Plan View?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>plan view</strong> is a 2D drawing of a 3D shape as seen from directly above. It shows the outline and details that would be visible if you were looking down from a bird's-eye perspective.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine looking down on a building from a helicopter. What you see of the roof and overall shape is the plan view.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying a Plan View",
      "problem": "Look at this simple 3D shape. Describe the plan view by inputting the main shape you see from above.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the basic 2D shape you see in the plan view (e.g., square, rectangle, circle)?",
          "answer": "rectangle",
          "feedback": "Correct. The plan view outlines a rectangle shape."
        },
        {
          "id": "q2",
          "prompt": "Is there a smaller shape visible inside the rectangle (yes or no)?",
          "answer": "yes",
          "feedback": "Correct. There is a smaller rectangle visible representing an upper section."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: What is a Front Elevation?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>front elevation</strong> shows the 3D shape as seen looking directly at the front. This 2D view shows height and width, revealing the face of the solid.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like standing in front of a house and observing its facade — how high the door is, the windows, and the roof slope.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Drawing a Front Elevation",
      "problem": "Given a cuboid with a smaller cuboid on top, describe the main shapes visible in the front elevation by entering the shapes seen.",
      "questions": [
        {
          "id": "q3",
          "prompt": "What shape forms the main base in the front elevation?",
          "answer": "rectangle",
          "feedback": "Correct. The cuboid base shows as a rectangle."
        },
        {
          "id": "q4",
          "prompt": "What shape appears on top of that rectangle?",
          "answer": "rectangle",
          "feedback": "Correct. The smaller top cuboid also looks like a rectangle."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: What is a Side Elevation?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>side elevation</strong> is a view looking directly at the shape from the side (left or right). This shows the profile of the object, revealing height and depth.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine standing at the side of a building and observing the shape from that angle only.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Interpreting a Side Elevation",
      "problem": "A solid has a front rectangle 10cm wide and 5cm high, with a smaller block behind it at the side. Input the width and height you see in the side elevation.",
      "questions": [
        {
          "id": "q5",
          "prompt": "What is the height of the main shape in cm?",
          "answer": "5",
          "feedback": "Correct. The height remains consistent in the side elevation."
        },
        {
          "id": "q6",
          "prompt": "What is the width of the side elevation shape in cm?",
          "answer": "6",
          "feedback": "Correct. The depth (width from side view) is 6 cm."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Matching Plan and Elevations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Look at the three 2D views (plan, front elevation, side elevation) of a 3D object. Match each view to the correct diagram of the 3D object.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='150' y='70' width='80' height='80' fill='#86c7f3' stroke='#333' /><rect x='190' y='30' width='20' height='40' fill='#3a9df8' stroke='#333' /><text x='200' y='180' font-family='sans-serif' font-size='14' text-anchor='middle'>3D Object</text></svg>",
    "workedExample": {
      "title": "Step by Step: Match Views",
      "problem": "From the 2D views provided below, select the correct plan, front elevation, and side elevation for the 3D shape above.",
      "questions": [
        {
          "id": "q7",
          "prompt": "Which of these shapes is the plan view?",
          "answer": "rectangle with smaller rectangle inside",
          "feedback": "Correct. The plan shows the outline and smaller top shape from above."
        },
        {
          "id": "q8",
          "prompt": "Which shape is the front elevation?",
          "answer": "taller rectangle with smaller rectangle on top",
          "feedback": "Correct. The front elevation shows height clearly."
        },
        {
          "id": "q9",
          "prompt": "Which shape is the side elevation?",
          "answer": "rectangle showing depth and height profile",
          "feedback": "Correct. The side view shows the shape’s side profile."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which view shows the top surface of a 3D solid?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Plan view</span>",
            "isCorrect": true,
            "explanation": "<span>Correct. Plan view is looking directly from above.</span>"
          },
          {
            "id": "b",
            "label": "<span>Front elevation</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Front elevation looks from the front.</span>"
          },
          {
            "id": "c",
            "label": "<span>Side elevation</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Side elevation looks at side profile.</span>"
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the 2D view of a 3D object as seen from above.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "plan",
                "label": "Plan",
                "isCorrect": true,
                "feedback": "Correct! The plan is the top view."
              },
              {
                "value": "front",
                "label": "Front elevation",
                "isCorrect": false,
                "feedback": "Incorrect, that's the view from the front."
              },
              {
                "value": "side",
                "label": "Side elevation",
                "isCorrect": false,
                "feedback": "Incorrect, that's the side view."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> shows the shape's profile when viewed from the side.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "side",
                "label": "Side elevation",
                "isCorrect": true,
                "feedback": "Correct! The side elevation shows the profile from the side."
              },
              {
                "value": "plan",
                "label": "Plan",
                "isCorrect": false,
                "feedback": "Incorrect, that's the top view."
              },
              {
                "value": "front",
                "label": "Front elevation",
                "isCorrect": false,
                "feedback": "Incorrect, that's the view from the front."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to draw the plan, front elevation, and side elevation for a 3D solid cube with a smaller cube on top.</span>",
      "hint": "Remember to consider the viewpoint for each view and sketch only visible edges.",
      "mustHaveKeywords": ["plan view", "front elevation", "side elevation", "3D solid", "viewpoints"],
      "optionalKeywords": ["edges", "outline", "height", "width", "depth"],
      "modelAnswer": "<span>To draw the plan view, position yourself looking directly above the solid and sketch the outline of both cubes. The front elevation requires looking straight at the front face, drawing the height and width showing both cubes stacked. The side elevation involves viewing from either the left or right side and sketching the height and depth profile of the combined solid. For each view, only visible edges are drawn to represent the 3D shape in 2D.</span>",
      "scaffoldPrompts": [
        "Think about where you would 'stand' to see each view.",
        "Draw each dimension visible from that angle: height and width for front, height and depth for side, length and width for plan."
      ]
    }
  }
};