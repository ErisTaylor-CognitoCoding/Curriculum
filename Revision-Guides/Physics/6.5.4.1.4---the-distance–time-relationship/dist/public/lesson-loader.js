window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.1.4 - The distance–time relationship",
  "strapline": "Understanding how distance and time relate through graphs to analyse motion and speed.",
  "learningObjectives": [
    "Students should be able to analyse distance-time graphs to determine speed from the gradient (Physics 6.5.4.1.4)",
    "Students should be able to interpret different types of motion including stationary objects and constant speed from distance-time graphs (Physics 6.5.4.1.4)",
    "Students should understand how the steepness of the line on a distance-time graph relates to the speed of movement (Physics 6.5.4.1.4)"
  ],
  "keyFormulas": [
    "Speed = distance ÷ time",
    "Gradient = change in distance (rise) ÷ change in time (run)",
    "Reminder: The steeper the line on a distance-time graph, the faster the speed"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='300' fill='#ffffff'/><line x1='50' y1='250' x2='350' y2='50' stroke='#0074D9' stroke-width='3'/><line x1='50' y1='250' x2='350' y2='250' stroke='#333' stroke-width='2'/><line x1='50' y1='250' x2='50' y2='50' stroke='#333' stroke-width='2'/><text x='200' y='280' font-family='sans-serif' font-size='14' text-anchor='middle'>Time (s)</text><text x='10' y='150' font-family='sans-serif' font-size='14' text-anchor='middle' transform='rotate(-90 10,150)'>Distance (m)</text><circle cx='50' cy='250' r='4' fill='#FF4136'/><circle cx='200' cy='150' r='4' fill='#FF4136'/><circle cx='350' cy='50' r='4' fill='#FF4136'/><text x='55' y='245' font-family='sans-serif' font-size='12'>0</text><text x='195' y='155' font-family='sans-serif' font-size='12'>Distance at 10s</text><text x='355' y='55' font-family='sans-serif' font-size='12'>Distance at 20s</text></svg>",
  "step1": {
    "title": "Concept: What is a Distance-Time Graph?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>distance-time graph</strong> shows how far an object has travelled over time. Time is always on the horizontal axis (x-axis), and distance is on the vertical axis (y-axis).</p><p class=\"text-sm leading-6 text-muted-foreground\">Each point on the graph tells you the total distance travelled at that particular time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you track how far a car drives every second. If you plot all these distances against time on a graph, you get a distance-time graph.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Reading a Distance-Time Graph",
      "problem": "At 5 seconds, what is the distance travelled if the graph shows 40 metres?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the time in seconds (hint: it's given as 5s)",
          "answer": "5",
          "feedback": "Correct! The time is 5 seconds."
        },
        {
          "id": "q2",
          "prompt": "What distance does the graph show at 5 seconds?",
          "answer": "40",
          "feedback": "Correct! The object has travelled 40 metres at 5 seconds."
        },
        {
          "id": "q3",
          "prompt": "Write the coordinate point representing this information as (time, distance)",
          "answer": "(5, 40)",
          "feedback": "Correct! Point (5, 40) means at 5 seconds, distance travelled is 40 metres."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Gradient",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>gradient</strong> of a distance-time graph line is the slope, which shows how steep the line is. It is calculated as the change in distance (rise) divided by the change in time (run).</p><p>On a distance-time graph, the gradient represents the <strong>speed</strong> of the object.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Speed from a Gradient",
      "problem": "Calculate the speed of an object if it moves from 10 m at 2 seconds to 50 m at 6 seconds.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the change in distance (final distance - initial distance)?",
          "answer": "40",
          "feedback": "Correct! 50 m - 10 m = 40 m."
        },
        {
          "id": "q2",
          "prompt": "What is the change in time (final time - initial time)?",
          "answer": "4",
          "feedback": "Correct! 6 s - 2 s = 4 s."
        },
        {
          "id": "q3",
          "prompt": "Calculate the speed: change in distance ÷ change in time",
          "answer": "10",
          "feedback": "Correct! 40 m ÷ 4 s = 10 m/s."
        }
      ]
    }
  },
  "step3": {
    "title": "Interpreting Motion From Distance-Time Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Different motions show as different lines on a distance-time graph:</p><ul><li><strong>Stationary object:</strong> Flat horizontal line (distance does not change with time)</li><li><strong>Constant speed:</strong> Straight diagonal line indicating steady distance increase</li><li><strong>Varying speed:</strong> Curved or changing slope lines</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about a car at traffic lights (stationary), then moving steadily along a road (constant speed).</p>"
    },
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='300' fill='#fff'/>  <line x1='50' y1='200' x2='350' y2='200' stroke='#FF4136' stroke-width='3'/><text x='360' y='205' font-family='sans-serif' font-size='12'>Stationary</text>  <line x1='50' y1='250' x2='350' y2='50' stroke='#0074D9' stroke-width='3'/><text x='360' y='55' font-family='sans-serif' font-size='12'>Constant Speed</text>  <line x1='50' y1='250' x2='350' y2='140' stroke='#2ECC40' stroke-width='3' stroke-dasharray='10 5'/><text x='360' y='145' font-family='sans-serif' font-size='12'>Changing Speed</text>  <line x1='50' y1='250' x2='50' y2='50' stroke='#333' stroke-width='2'/><line x1='50' y1='250' x2='350' y2='250' stroke='#333' stroke-width='2'/><text x='200' y='280' font-family='sans-serif' font-size='14' text-anchor='middle'>Time (s)</text><text x='10' y='150' font-family='sans-serif' font-size='14' text-anchor='middle' transform='rotate(-90 10,150)'>Distance (m)</text></svg>"
  },
  "step4": {
    "title": "Concept: Steepness and Speed",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The steeper the line on a distance-time graph, the faster the object is moving.</p><p>If the line is flat (horizontal), the speed is zero because the distance is not changing over time.</p>",
    "workedExample": {
      "title": "Worked Example: Comparing Speeds",
      "problem": "Two objects start at the same point. Object A has a line with a steep gradient, Object B has a shallow gradient. Which object is faster?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which object's gradient is steeper?",
          "answer": "Object A",
          "feedback": "Correct! Object A has the steeper gradient."
        },
        {
          "id": "q2",
          "prompt": "Which object is moving faster?",
          "answer": "Object A",
          "feedback": "Correct! Steeper gradient means higher speed."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does a flat horizontal line on a distance-time graph indicate?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The object is moving at a constant speed</span>",
            "isCorrect": false,
            "explanation": "Incorrect. A flat line means distance is not changing, so the object is stationary."
          },
          {
            "id": "b",
            "label": "<span>The object is stationary</span>",
            "isCorrect": true,
            "explanation": "Correct! No change in distance over time means the object is not moving."
          },
          {
            "id": "c",
            "label": "<span>The object is accelerating</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Acceleration would show as a curved line."
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
        "sentence": "<span>The steepness of the line on a distance-time graph is called the <span class=\"font-semibold\">_____</span>, which shows the <span class=\"font-semibold\">_____</span> of the object.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "gradient",
                "label": "gradient",
                "isCorrect": true,
                "feedback": "Correct! The steepness of the line is called the gradient."
              },
              {
                "value": "velocity",
                "label": "velocity",
                "isCorrect": false,
                "feedback": "Try again. 'Velocity' is related to speed but not the steepness."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "speed",
                "label": "speed",
                "isCorrect": true,
                "feedback": "Correct! The gradient represents speed on a distance-time graph."
              },
              {
                "value": "distance",
                "label": "distance",
                "isCorrect": false,
                "feedback": "Try again. Distance is measured on the y-axis, not by the gradient."
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
      "prompt": "<span>Explain how you can determine the speed of a moving object from its distance-time graph.</span>",
      "hint": "Remember to mention the axes, how to find the gradient, and what the gradient represents.",
      "mustHaveKeywords": [
        "distance-time graph",
        "gradient",
        "change in distance",
        "change in time",
        "speed"
      ],
      "optionalKeywords": [
        "rise over run",
        "steepness",
        "units"
      ],
      "modelAnswer": "<span>To determine the speed from a distance-time graph, first identify that time is plotted on the x-axis and distance on the y-axis. Then calculate the gradient of the graph, which is the change in distance divided by the change in time (rise over run). This gradient represents the speed of the object. A steeper gradient means a higher speed. By selecting two points on the line and finding their coordinates, you can compute the speed by dividing the difference in distance by the difference in time.</span>",
      "scaffoldPrompts": [
        "Identify which axis represents time and which represents distance.",
        "Select two points on the graph and find their coordinates.",
        "Calculate the change in distance and change in time between these points.",
        "Divide the change in distance by the change in time to find the speed."
      ]
    }
  }
};