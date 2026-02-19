window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.1.1 - Distance and displacement",
  "strapline": "Understanding the difference between distance and displacement, their physical meanings, quantities, and applications in problem solving.",
  "learningObjectives": [
    "Students should distinguish between distance as the total length of a path travelled and displacement as the straight-line distance from start to finish in a specific direction (Physics 6.5.4.1.1)",
    "Students should understand that displacement is a vector quantity whilst distance is scalar (Physics 6.5.4.1.1)",
    "Students should apply concepts of distance and displacement to practical scenarios and solve numerical problems (Physics 6.5.4.1.1)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: Displacement = Straight line distance with direction",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='10' y='10' width='380' height='280' fill='#eef5fb' stroke='#333' stroke-width='2' rx='15' ry='15'/>  <circle cx='50' cy='250' r='8' fill='#007acc'/>  <text x='20' y='270' font-family='sans-serif' font-size='14' fill='#007acc'>Start</text>  <circle cx='350' cy='80' r='8' fill='#cc3300'/>  <text x='320' y='70' font-family='sans-serif' font-size='14' fill='#cc3300'>Finish</text>  <path d='M50 250 L150 250 L150 150 L250 150 L350 80' stroke='#007acc' stroke-width='3' fill='none' stroke-dasharray='10 6'/>  <line x1='50' y1='250' x2='350' y2='80' stroke='#cc3300' stroke-width='3'/>  <text x='180' y='240' font-family='sans-serif' font-size='12' fill='#007acc'>Distance (path length)</text>  <text x='200' y='150' font-family='sans-serif' font-size='12' fill='#cc3300'>Displacement (straight line)</text>  <polygon points='345,75 355,80 345,85' fill='#cc3300'/>  <polygon points='155,255 165,260 155,265' fill='#007acc'/> </svg>",
  "step1": {
    "title": "Concept: Defining Distance",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Distance is a <strong>scalar quantity</strong> that measures the total length of the path an object travels, regardless of direction. It is always positive or zero and is measured in units such as metres (m) or kilometres (km).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you are walking in a park following a winding path. The distance is the total length of that path you walked, no matter which way you turned.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Distance Travelled",
      "problem": "Suppose Sarah walks 3 metres east, then 4 metres north along a path. What is the total distance Sarah has travelled?",
      "questions": [
        {
          "id": "wex1-q1",
          "prompt": "What is the distance travelled east?",
          "answer": "3",
          "feedback": "Correct. Sarah walks 3 metres east."
        },
        {
          "id": "wex1-q2",
          "prompt": "What is the distance travelled north?",
          "answer": "4",
          "feedback": "Correct. Sarah then walks 4 metres north."
        },
        {
          "id": "wex1-q3",
          "prompt": "What is the total distance travelled?",
          "answer": "7",
          "feedback": "Correct. Total distance is the sum: 3 + 4 = 7 metres."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Defining Displacement",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Displacement is a <strong>vector quantity</strong> that measures the straight-line distance from the starting point to the ending point in a specific direction. It combines magnitude (length) and direction, such as '5 m north-east'.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you walked straight from the start to the finish point across the park, displacement is that direct line from start to finish, not the winding path.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Displacement",
      "problem": "Using Sarah's walk from step 1, calculate the displacement from start to finish.",
      "questions": [
        {
          "id": "wex2-q1",
          "prompt": "What are the horizontal and vertical components of displacement?",
          "answer": "3, 4",
          "feedback": "Correct. 3 metres east (horizontal), 4 metres north (vertical)."
        },
        {
          "id": "wex2-q2",
          "prompt": "Use Pythagoras' theorem to find the magnitude of displacement (c):",
          "answer": "5",
          "feedback": "Correct. c = √(3² + 4²) = 5 metres."
        },
        {
          "id": "wex2-q3",
          "prompt": "What is the direction of displacement relative to east? (tan θ = opposite/adjacent = north/east)",
          "answer": "53.13",
          "feedback": "Correct. θ = arctan(4/3) ≈ 53.13° north of east."
        }
      ]
    }
  },
  "step3": {
    "title": "Difference between Scalar and Vector Quantities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Scalar quantities</strong> have only magnitude (size), for example distance, speed, temperature. <strong>Vector quantities</strong> have both magnitude and direction, for example displacement, velocity, force.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Speed (scalar) tells you how fast you are going, but velocity (vector) tells you how fast and in which direction.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Scalar or Vector",
      "problem": "Decide whether the following quantities are scalar or vector: 1) Distance 2) Displacement 3) Speed 4) Velocity",
      "questions": [
        {
          "id": "wex3-q1",
          "prompt": "Is distance scalar or vector?",
          "answer": "scalar",
          "feedback": "Correct! Distance has magnitude only."
        },
        {
          "id": "wex3-q2",
          "prompt": "Is displacement scalar or vector?",
          "answer": "vector",
          "feedback": "Correct! Displacement has magnitude and direction."
        },
        {
          "id": "wex3-q3",
          "prompt": "Is speed scalar or vector?",
          "answer": "scalar",
          "feedback": "Correct! Speed is magnitude only."
        },
        {
          "id": "wex3-q4",
          "prompt": "Is velocity scalar or vector?",
          "answer": "vector",
          "feedback": "Correct! Velocity includes direction."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying Distance and Displacement: Practical Scenario",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In real life, humans and vehicles rarely travel in straight lines. To analyze motion accurately, distinguishing between distance travelled and the net displacement is essential.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">For example, a driver following a winding road might travel 15 km total (distance) but end up only 8 km from the starting location in a straight line (displacement).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Car Trip Analysis",
      "problem": "A car travels 6 km east, then turns and travels 8 km south. Calculate the total distance and the displacement from its starting point.",
      "questions": [
        {
          "id": "wex4-q1",
          "prompt": "What is the total distance travelled?",
          "answer": "14",
          "feedback": "Correct. Distance = 6 + 8 = 14 km."
        },
        {
          "id": "wex4-q2",
          "prompt": "Use Pythagoras to calculate the magnitude of the displacement:",
          "answer": "10",
          "feedback": "Correct. Displacement = √(6² + 8²) = 10 km."
        },
        {
          "id": "wex4-q3",
          "prompt": "What is the direction of displacement relative to east? (θ = arctan(8/6))",
          "answer": "53.13",
          "feedback": "Correct. Direction ≈ 53.13° south of east."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which statement correctly describes displacement?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Displacement is the total distance travelled along the path.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This describes distance, not displacement."
          },
          {
            "id": "b",
            "label": "<span>Displacement has both magnitude and direction and is the straight-line distance between start and finish.</span>",
            "isCorrect": true,
            "explanation": "Correct. Displacement is a vector quantity."
          },
          {
            "id": "c",
            "label": "<span>Displacement only has magnitude with no direction.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That describes a scalar quantity."
          },
          {
            "id": "d",
            "label": "<span>Displacement is always longer than distance.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Displacement is always less than or equal to distance."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cyclist travels 12 km north, then 5 km east. Calculate the total distance travelled and the cyclist's displacement from the start. Include magnitude and direction of the displacement.</span>",
      "hint": "Remember to add path lengths for distance. Use Pythagoras for displacement magnitude, and trigonometry for direction.",
      "mustHaveKeywords": ["distance", "displacement", "Pythagoras", "direction", "vector"],
      "optionalKeywords": ["magnitude", "degrees", "arctan"],
      "modelAnswer": "<span>The total distance travelled is 12 km + 5 km = 17 km. Displacement is the straight-line distance from start to finish, calculated using Pythagoras: √(12² + 5²) = √(144 + 25) = √169 = 13 km. The direction is given by θ = arctan(opposite/adjacent) = arctan(5/12) which is approximately 22.62° east of north.</span>",
      "scaffoldPrompts": [
        "Step 1: Add the distances travelled in each leg for total distance.",
        "Step 2: Use Pythagoras' theorem to find the straight-line displacement.",
        "Step 3: Calculate the angle of displacement direction using trigonometry."
      ]
    }
  }
};