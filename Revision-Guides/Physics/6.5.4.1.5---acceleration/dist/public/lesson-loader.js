window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.1.5 - Acceleration",
  "strapline": "Understanding acceleration as the rate of change of velocity, interpreting velocity-time graphs, and exploring Newton's First Law of Motion.",
  "learningObjectives": [
    "Students should understand acceleration as the rate of change of velocity, and be able to calculate acceleration using the equation: acceleration = change in velocity \u00f7 time (Physics 6.5.4.1.5)",
    "Students should be able to interpret velocity-time graphs to determine acceleration (Physics 6.5.4.1.5)",
    "Students should understand Newton's First Law of Motion: that objects remain at rest or continue moving at constant velocity unless acted upon by a resultant force, and explore the concept of inertia (Physics 6.5.4.1.5)"
  ],
  "keyFormulas": [
    "acceleration = \\frac{change \\; in \\; velocity}{time}",
    "gradient \\; of \\; velocity-time \\; graph = acceleration",
    "distance = area \\; under \\; velocity-time \\; graph"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='20' width='340' height='240' fill='#f9f9f9' stroke='#444' stroke-width='2'/><line x1='50' y1='260' x2='350' y2='260' stroke='#000' stroke-width='2'/><line x1='50' y1='260' x2='50' y2='40' stroke='#000' stroke-width='2'/><text x='355' y='265' font-family='sans-serif' font-size='14'>Time (s)</text><text x='10' y='45' font-family='sans-serif' font-size='14' transform='rotate(-90 10,45)'>Velocity (m/s)</text><polyline points='50,240 150,180 250,120 350,80' fill='none' stroke='#007acc' stroke-width='3'/><circle cx='50' cy='240' r='4' fill='#007acc'/><circle cx='150' cy='180' r='4' fill='#007acc'/><circle cx='250' cy='120' r='4' fill='#007acc'/><circle cx='350' cy='80' r='4' fill='#007acc'/><text x='180' y='100' font-family='sans-serif' font-size='16' fill='#007acc'>Velocity-time graph</text></svg>",
  "step1": {
    "title": "Concept: What is Acceleration?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Acceleration is the <strong>rate of change of velocity</strong>. It measures how quickly an object's velocity changes over time, and is measured in <em>metres per second squared (m/s<sup>2</sup>)</em>. Acceleration can be positive (speeding up), negative (slowing down, called deceleration), or zero (constant velocity).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a car accelerating on a road. When the driver presses the gas pedal, the car speeds up—that's positive acceleration. When the driver brakes, the car slows down—negative acceleration. When cruising steadily on the highway, the car's velocity is constant, so acceleration is zero.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Acceleration",
      "problem": "<p>A car changes its velocity from 0 m/s to 20 m/s in 5 seconds. Calculate the acceleration.</p>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: What is the initial velocity (u) of the car (m/s)?",
          "answer": "0",
          "feedback": "Correct, the car starts from rest, so initial velocity is 0 m/s."
        },
        {
          "id": "q2",
          "prompt": "Step 2: What is the final velocity (v) of the car (m/s)?",
          "answer": "20",
          "feedback": "Correct, the car reaches 20 m/s."
        },
        {
          "id": "q3",
          "prompt": "Step 3: How much time (t) does the change take? (seconds)",
          "answer": "5",
          "feedback": "Correct, the change takes 5 seconds."
        },
        {
          "id": "q4",
          "prompt": "Step 4: Calculate the change in velocity (v - u).",
          "answer": "20",
          "feedback": "Correct, change in velocity is 20 m/s - 0 m/s = 20 m/s."
        },
        {
          "id": "q5",
          "prompt": "Step 5: Use the formula acceleration = change in velocity \u00f7 time. What is the acceleration?",
          "answer": "4",
          "feedback": "Correct, acceleration = 20 m/s \u00f7 5 s = 4 m/s\u00b2."
        }
      ]
    }
  },
  "step2": {
    "title": "Interpreting Velocity-Time Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A velocity-time graph shows how velocity changes over time. The <strong>gradient (slope)</strong> of the line on this graph represents the acceleration. A straight, upward-sloping line means constant acceleration; a horizontal line means zero acceleration (constant velocity); and a downward slope shows deceleration.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='20' width='340' height='240' fill='#fff8e1' stroke='#444' stroke-width='2'/><line x1='50' y1='260' x2='350' y2='260' stroke='#000' stroke-width='2'/><line x1='50' y1='260' x2='50' y2='40' stroke='#000' stroke-width='2'/><text x='355' y='265' font-family='sans-serif' font-size='14'>Time (s)</text><text x='10' y='45' font-family='sans-serif' font-size='14' transform='rotate(-90 10,45)'>Velocity (m/s)</text><polyline points='50,240 150,140 250,60 350,40' fill='none' stroke='#d32f2f' stroke-width='3'/><circle cx='50' cy='240' r='4' fill='#d32f2f'/><circle cx='150' cy='140' r='4' fill='#d32f2f'/><circle cx='250' cy='60' r='4' fill='#d32f2f'/><circle cx='350' cy='40' r='4' fill='#d32f2f'/><text x='180' y='100' font-family='sans-serif' font-size='16' fill='#d32f2f'>Deceleration shown as negative slope</text></svg>",
    "workedExample": {
      "title": "Worked Example: Acceleration from a Velocity-Time Graph",
      "problem": "<p>Examine a velocity-time graph where velocity drops from 30 m/s at 0 seconds to 10 m/s at 4 seconds. Calculate the acceleration.</p>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: What is the initial velocity (v<sub>i</sub>)?",
          "answer": "30",
          "feedback": "Correct, initial velocity is 30 m/s."
        },
        {
          "id": "q2",
          "prompt": "Step 2: What is the final velocity (v<sub>f</sub>)?",
          "answer": "10",
          "feedback": "Correct, final velocity is 10 m/s."
        },
        {
          "id": "q3",
          "prompt": "Step 3: What is the time taken (t)?",
          "answer": "4",
          "feedback": "Correct, it takes 4 seconds."
        },
        {
          "id": "q4",
          "prompt": "Step 4: Calculate the change in velocity (v<sub>f</sub> - v<sub>i</sub>).",
          "answer": "-20",
          "feedback": "Correct, change in velocity = 10 - 30 = -20 m/s."
        },
        {
          "id": "q5",
          "prompt": "Step 5: Calculate the acceleration (change in velocity \u00f7 time).",
          "answer": "-5",
          "feedback": "Correct, acceleration = -20 m/s \u00f7 4 s = -5 m/s\u00b2 (deceleration)."
        }
      ]
    }
  },
  "step3": {
    "title": "Newton's First Law and Inertia",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Newton's First Law of Motion states: <em>an object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a resultant (unbalanced) force.</em> This means that inertia is the tendency of objects to resist a change in their motion.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine sliding a book on a smooth table. It keeps moving until friction (a force) slows it down. Without forces like friction, the book would keep moving forever at the same speed and direction.</p>"
    },
    "interactiveConceptCheck": {
      "title": "Concept Check",
      "questions": [
        {
          "id": "inertia-q1",
          "prompt": "If a hockey puck slides on ice without friction, what will happen to its motion?",
          "answer": "It will continue moving at constant velocity",
          "feedback": "Correct! Without forces to stop it, the puck keeps moving."
        },
        {
          "id": "inertia-q2",
          "prompt": "What force is needed to change the velocity of an object?",
          "answer": "A resultant force",
          "feedback": "Correct. Only a resultant (unbalanced) force changes an object's velocity."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice Questions (MCQs)",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does a zero gradient on a velocity-time graph indicate?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The object is accelerating.</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Zero gradient means velocity is constant, so acceleration is zero.</span>"
          },
          {
            "id": "b",
            "label": "<span>The object is at rest.</span>",
            "isCorrect": false,
            "explanation": "<span>Not necessarily. The object can have a constant velocity different from zero.</span>"
          },
          {
            "id": "c",
            "label": "<span>The object has zero acceleration.</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Zero gradient means zero acceleration.</span>"
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Newton's First Law says that an object will change its velocity only if:</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>it experiences a resultant force.</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! A resultant force is needed to change velocity.</span>"
          },
          {
            "id": "b",
            "label": "<span>it is moving very fast.</span>",
            "isCorrect": false,
            "explanation": "<span>Speed alone does not cause change in velocity.</span>"
          },
          {
            "id": "c",
            "label": "<span>it is at rest.</span>",
            "isCorrect": false,
            "explanation": "<span>Being at rest doesn't guarantee velocity change unless there's a force.</span>"
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>Acceleration is the rate of change of <span class=\"font-semibold\">_____</span> with respect to time.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "velocity",
                "label": "velocity",
                "isCorrect": true,
                "feedback": "Correct! Acceleration relates to velocity changes."
              },
              {
                "value": "distance",
                "label": "distance",
                "isCorrect": false,
                "feedback": "Incorrect. Distance is not the rate of change here."
              },
              {
                "value": "time",
                "label": "time",
                "isCorrect": false,
                "feedback": "Incorrect. Time is the independent variable, not what changes."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The gradient of a velocity-time graph represents <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "acceleration",
                "label": "acceleration",
                "isCorrect": true,
                "feedback": "Correct! Gradient equals acceleration."
              },
              {
                "value": "distance",
                "label": "distance",
                "isCorrect": false,
                "feedback": "Incorrect. Distance is represented by the area under the graph."
              },
              {
                "value": "force",
                "label": "force",
                "isCorrect": false,
                "feedback": "Incorrect. Force is not shown by gradient on this graph."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cyclist starts from rest and reaches a velocity of 15 m/s in 3 seconds.</span><br/><span>(a) Calculate the cyclist's acceleration.</span><br/><span>(b) Draw a velocity-time graph for this motion.</span><br/><span>(c) Explain how Newton's First Law applies to the cyclist before starting and while accelerating.</span>",
      "hint": "Remember to use acceleration = change in velocity \u00f7 time and describe forces or absence of forces for Newton's First Law.",
      "mustHaveKeywords": ["acceleration", "velocity", "time", "resultant force", "inertia"],
      "optionalKeywords": ["gradient", "velocity-time graph", "constant velocity", "unbalanced force"],
      "modelAnswer": "<span>(a) Acceleration = (final velocity - initial velocity) \u00f7 time = (15 m/s - 0 m/s) \u00f7 3 s = 5 m/s<sup>2</sup>.<br/>(b) The velocity-time graph is a straight line from (0,0) to (3,15) indicating constant acceleration.<br/>(c) According to Newton's First Law, the cyclist remains at rest until a resultant force (pedaling) acts to change the velocity. The force caused by pedaling overcomes inertia, causing acceleration.</span>",
      "scaffoldPrompts": ["Calculate change in velocity first.", "Divide by the time taken.", "Sketch velocity on vertical axis and time on horizontal.", "Consider forces acting on the cyclist at rest and while moving."]
    }
  }
};