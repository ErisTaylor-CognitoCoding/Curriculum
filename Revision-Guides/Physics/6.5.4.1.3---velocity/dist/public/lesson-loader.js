window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.1.3 - Velocity",
  "strapline": "Understanding velocity as a vector, calculating it, and interpreting related graphs.",
  "learningObjectives": [
    "Students should understand that velocity is a vector quantity, including both magnitude and direction, and how it differs from speed (Physics 6.5.4.1.3)",
    "Students should be able to calculate velocity using the equation velocity = displacement / time (Physics 6.5.4.1.3)",
    "Students should be able to analyse distance-time graphs to determine speed from the gradient and interpret different types of motion (Physics 6.5.4.1.3)"
  ],
  "keyFormulas": [
    "Velocity (v) = Displacement (Δx) / Time (t)",
    "Speed = Distance / Time",
    "Displacement is a vector quantity (magnitude and direction)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>\n  <!-- Coordinate axis -->\n  <line x1='50' y1='150' x2='350' y2='150' stroke='#333' stroke-width='2'/>\n  <line x1='50' y1='150' x2='50' y2='50' stroke='#333' stroke-width='2'/>\n  <text x='355' y='155' font-family='sans-serif' font-size='12'>Time (s)</text>\n  <text x='10' y='55' font-family='sans-serif' font-size='12'>Distance (m)</text>\n\n  <!-- Distance-time graph line -->\n  <polyline points='50,150 150,110 250,80 350,40' fill='none' stroke='#1f77b4' stroke-width='3'/>\n\n  <!-- Points -->\n  <circle cx='50' cy='150' r='4' fill='#1f77b4'/>\n  <circle cx='150' cy='110' r='4' fill='#1f77b4'/>\n  <circle cx='250' cy='80' r='4' fill='#1f77b4'/>\n  <circle cx='350' cy='40' r='4' fill='#1f77b4'/>\n\n  <text x='150' y='90' font-family='sans-serif' font-size='10'>Constant speed</text>\n</svg>",
  "step1": {
    "title": "Concept: What is Velocity?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Velocity is a <strong>vector quantity</strong> that describes both how fast an object moves and in which direction. This means velocity includes magnitude (speed) and direction. It is often measured in metres per second (<em>m/s</em>).</p><p class=\"text-sm leading-6 text-muted-foreground\">Velocity differs from speed, which is a scalar quantity and only has magnitude without direction.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine driving a car at 60 km/h <em>north</em>. Your speed is 60 km/h, but your velocity is 60 km/h north. If you turn and drive 60 km/h south, your speed remains the same, but your velocity changes because the direction changed.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Velocity",
      "problem": "A cyclist travels 10 metres east in 5 seconds. What is their velocity?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the displacement (distance with direction)? Enter the value in metres.",
          "answer": "10",
          "feedback": "Correct! The cyclist's displacement is 10 metres east."
        },
        {
          "id": "q2",
          "prompt": "How much time did it take? Enter the time in seconds.",
          "answer": "5",
          "feedback": "Correct! The time taken is 5 seconds."
        },
        {
          "id": "q3",
          "prompt": "Calculate velocity = displacement / time. What is the numerical value (m/s)?",
          "answer": "2",
          "feedback": "Correct! 10 metres / 5 seconds = 2 m/s."
        },
        {
          "id": "q4",
          "prompt": "Add the direction to complete the velocity.",
          "answer": "2 m/s east",
          "feedback": "Excellent! The velocity is 2 m/s east."
        }
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: Velocity vs Speed",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which statement correctly describes velocity?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Velocity is a scalar quantity that only measures how fast an object moves.</span>",
            "isCorrect": false,
            "explanation": "Velocity is not a scalar; it includes direction, so it is a vector quantity."
          },
          {
            "id": "b",
            "label": "<span>Velocity is a vector quantity including both magnitude and direction of motion.</span>",
            "isCorrect": true,
            "explanation": "Correct! Velocity includes both speed and direction."
          },
          {
            "id": "c",
            "label": "<span>Velocity and speed mean the same thing.</span>",
            "isCorrect": false,
            "explanation": "Speed is scalar; velocity is vector. They are different concepts."
          },
          {
            "id": "d",
            "label": "<span>Velocity is only the direction of motion without magnitude.</span>",
            "isCorrect": false,
            "explanation": "Velocity must include magnitude (speed) and direction."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>Velocity is a <span class=\"font-semibold\">_____</span> quantity, while speed is a <span class=\"font-semibold\">_____</span> quantity.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "vector",
                "label": "Vector",
                "isCorrect": true,
                "feedback": "Correct! Velocity has magnitude and direction."
              },
              {
                "value": "scalar",
                "label": "Scalar",
                "isCorrect": false,
                "feedback": "Incorrect. Velocity has direction as well."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "vector",
                "label": "Vector",
                "isCorrect": false,
                "feedback": "Speed is scalar, not vector."
              },
              {
                "value": "scalar",
                "label": "Scalar",
                "isCorrect": true,
                "feedback": "Correct! Speed only has magnitude."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: What is Displacement?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Displacement is the straight-line distance from an object's start position to its end position, including direction. It can be positive, negative, or zero depending on direction.</p><p class=\"text-sm leading-6 text-muted-foreground\">For example, if you walk 5 metres east and then 3 metres west, your total distance is 8 metres but your displacement is 2 metres east.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like walking from home to a friend’s house (displacement), regardless of the path you took (distance).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Displacement",
      "problem": "A runner moves 12 m west, then 5 m east. What is the total displacement?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the first displacement value in metres (use negative for west):",
          "answer": "-12",
          "feedback": "Good! West is negative displacement."
        },
        {
          "id": "q2",
          "prompt": "Enter the second displacement value (east is positive):",
          "answer": "5",
          "feedback": "Correct, east is positive displacement."
        },
        {
          "id": "q3",
          "prompt": "Calculate total displacement (sum the values):",
          "answer": "-7",
          "feedback": "Correct! Total displacement is -7 m (7 m west)."
        }
      ]
    }
  },
  "step5": {
    "title": "Interpreting Distance-Time Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Distance-time graphs show how far an object has traveled at different times. The <strong>gradient</strong> (slope) of the graph equals the speed of the object. A steeper gradient means higher speed.</p><p class=\"text-sm leading-6 text-muted-foreground\">Horizontal sections show the object is stationary. Curved lines indicate changing speed.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>\n  <line x1='50' y1='150' x2='350' y2='150' stroke='#333' stroke-width='2'/>\n  <line x1='50' y1='150' x2='50' y2='50' stroke='#333' stroke-width='2'/>\n  <text x='360' y='155' font-family='sans-serif' font-size='12'>Time (s)</text>\n  <text x='10' y='55' font-family='sans-serif' font-size='12'>Distance (m)</text>\n\n  <polyline points='50,150 120,110 180,90 240,90 300,130 350,140' fill='none' stroke='#d62728' stroke-width='3'/>\n  <circle cx='240' cy='90' r='4' fill='#d62728'/>\n  <text x='245' y='85' font-family='sans-serif' font-size='12'>Stationary</text>\n</svg>"
  },
  "step6": {
    "title": "Worked Example: Calculating Speed from a Distance-Time Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the graph, calculate the speed between 0s and 6s where the distance changes from 0 m to 12 m.</p>",
    "workedExample": {
      "title": "Step-by-step Calculation",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the change in distance (in metres) between 0s and 6s?",
          "answer": "12",
          "feedback": "Correct! Distance increased by 12 m."
        },
        {
          "id": "q2",
          "prompt": "What is the change in time (in seconds)?",
          "answer": "6",
          "feedback": "Correct! Time increased by 6 seconds."
        },
        {
          "id": "q3",
          "prompt": "Calculate the speed using speed = distance / time.",
          "answer": "2",
          "feedback": "Correct! Speed = 12 m / 6 s = 2 m/s."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A car travels 100 metres north in 20 seconds, then returns south 40 metres in 10 seconds. Calculate the car's average velocity for the whole journey.</span>",
      "hint": "Remember to calculate total displacement and total time. Average velocity = total displacement ÷ total time.",
      "mustHaveKeywords": ["displacement", "vector", "direction", "average velocity", "total time"],
      "optionalKeywords": ["distance", "scalar", "m/s"],
      "modelAnswer": "<span>First, find the total displacement: 100 m north - 40 m south = 60 m north. Total time is 20 s + 10 s = 30 s. Average velocity = displacement ÷ time = 60 m north ÷ 30 s = 2 m/s north.</span>",
      "scaffoldPrompts": ["Calculate displacement for each leg of the journey.", "Sum the displacements considering direction.", "Add the total time.", "Divide total displacement by total time to find average velocity."]
    }
  }
};