window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.3.1 - Stopping distance",
  "strapline": "Understanding how stopping distance combines thinking and braking distances and the factors affecting reaction time.",
  "learningObjectives": [
    "Students should understand that stopping distance is the sum of thinking distance and braking distance (Physics 6.5.4.3.1)",
    "Students should understand how reaction time affects thinking distance and therefore overall stopping distance (Physics 6.5.4.3.1)",
    "Students should be able to identify and explain factors that affect reaction time including tiredness, distractions, alcohol, drugs, and age (Physics 6.5.4.3.1)"
  ],
  "keyFormulas": [
    "Stopping distance = Thinking distance + Braking distance",
    "Thinking distance = speed × reaction time",
    "Braking distance depends on speed² and factors like road and vehicle conditions"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'>  <rect x='10' y='60' width='80' height='20' fill='#4a90e2' />  <text x='50' y='55' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#000'>Thinking Distance</text>  <rect x='90' y='60' width='150' height='20' fill='#d9534f' />  <text x='165' y='55' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#000'>Braking Distance</text>  <line x1='10' y1='80' x2='240' y2='80' stroke='#333' stroke-width='2' />  <circle cx='10' cy='70' r='5' fill='#333' />  <circle cx='240' cy='70' r='5' fill='#333' />  <text x='125' y='110' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#000'><strong>Stopping Distance</strong></text></svg>",
  "step1": {
    "title": "Concept: What is Stopping Distance?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Stopping distance is the total distance a vehicle travels from the moment the driver sees a hazard to when the vehicle fully stops. It is made up of two parts: thinking distance and braking distance.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine playing catch: first you notice the ball (thinking), then you move your hand to catch it (braking). The total time equals both actions combined.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Stopping Distance Components",
      "problem": "A car is driving at 20 m/s. Its driver's reaction time is 1.5 seconds. The braking distance on the road is 30 meters. Calculate the thinking distance and then the stopping distance step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the thinking distance by multiplying speed by reaction time (20 m/s × 1.5 s). What is the thinking distance?",
          "answer": "30",
          "feedback": "Correct! Thinking distance = 30 meters."
        },
        {
          "id": "q2",
          "prompt": "What is the braking distance given in the problem?",
          "answer": "30",
          "feedback": "Correct! Braking distance is 30 meters."
        },
        {
          "id": "q3",
          "prompt": "Add the thinking distance and braking distance to find the stopping distance.",
          "answer": "60",
          "feedback": "Well done! Stopping distance = 30 + 30 = 60 meters."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Reaction Time and Thinking Distance",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Reaction time is how long it takes a driver to respond to a hazard. The longer the reaction time, the greater the thinking distance, increasing stopping distance.</p>",
    "workedExample": {
      "title": "Worked Example: Effect of Reaction Time",
      "problem": "If a driver’s reaction time changes from 1 second to 2 seconds while traveling at 15 m/s, calculate the thinking distance for both reaction times.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate thinking distance for 1 second reaction time (15 m/s × 1 s).",
          "answer": "15",
          "feedback": "Correct! Thinking distance is 15 meters."
        },
        {
          "id": "q2",
          "prompt": "Calculate thinking distance for 2 seconds reaction time (15 m/s × 2 s).",
          "answer": "30",
          "feedback": "Correct! Thinking distance is 30 meters."
        },
        {
          "id": "q3",
          "prompt": "How does doubling reaction time affect thinking distance?",
          "answer": "It doubles the thinking distance",
          "feedback": "Exactly! Longer reaction times increase thinking distance linearly."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The total <span class=\"font-semibold\">_____</span> is made up of thinking distance plus <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "stopping distance", "label": "stopping distance", "isCorrect": true, "feedback": "Correct!"},
              {"value": "reaction distance", "label": "reaction distance", "isCorrect": false, "feedback": "Try again, the total is stopping distance."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "braking distance", "label": "braking distance", "isCorrect": true, "feedback": "Correct!"},
              {"value": "acceleration distance", "label": "acceleration distance", "isCorrect": false, "feedback": "Incorrect, it is braking distance."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The thinking distance depends on the <span class=\"font-semibold\">_____</span> and the driver's <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {"value": "speed", "label": "speed", "isCorrect": true, "feedback": "Correct!"},
              {"value": "braking force", "label": "braking force", "isCorrect": false, "feedback": "Try again, thinking distance depends on speed."}
            ]
          },
          {
            "id": "b4",
            "options": [
              {"value": "reaction time", "label": "reaction time", "isCorrect": true, "feedback": "Correct!"},
              {"value": "mass of car", "label": "mass of car", "isCorrect": false, "feedback": "Incorrect, that affects braking distance."}
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Factors Affecting Reaction Time",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Reaction time can be affected by tiredness, distractions (like using a phone), alcohol, drugs, and age. Each of these can increase the reaction time, increasing thinking distance and stopping distance.</p>",
    "workedExample": {
      "title": "Worked Example: Impact of Tiredness",
      "problem": "A driver’s reaction time when well-rested is 1.2 seconds but increases to 2.0 seconds when tired. Traveling at a speed of 18 m/s, calculate the increase in thinking distance caused by tiredness.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate thinking distance when the driver is well-rested (18 m/s × 1.2 s).",
          "answer": "21.6",
          "feedback": "Correct! Thinking distance is 21.6 meters."
        },
        {
          "id": "q2",
          "prompt": "Calculate thinking distance when the driver is tired (18 m/s × 2.0 s).",
          "answer": "36",
          "feedback": "Correct! Thinking distance is 36 meters."
        },
        {
          "id": "q3",
          "prompt": "Calculate the increase in thinking distance due to tiredness.",
          "answer": "14.4",
          "feedback": "Well done! The increase is 36 - 21.6 = 14.4 meters."
        }
      ]
    }
  },
  "step5": {
    "title": "Diagram Interpretation: Stopping Distance Visual",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Look at the diagram to understand how thinking and braking distances combine to form stopping distance.</p>",
    "diagramHtml": "<svg viewBox='0 0 500 120' xmlns='http://www.w3.org/2000/svg'>  <rect x='20' y='50' width='100' height='20' fill='#6a9ef0' />  <text x='70' y='45' font-family='sans-serif' font-size='12' fill='#000' text-anchor='middle'>Thinking Distance</text>  <rect x='120' y='50' width='200' height='20' fill='#e06666' />  <text x='220' y='45' font-family='sans-serif' font-size='12' fill='#000' text-anchor='middle'>Braking Distance</text>  <line x1='20' y1='70' x2='320' y2='70' stroke='#333' stroke-width='2' />  <circle cx='20' cy='70' r='5' fill='#222' />  <circle cx='320' cy='70' r='5' fill='#222' />  <text x='170' y='110' font-family='sans-serif' font-size='14' fill='#000' text-anchor='middle'><strong>Stopping Distance</strong></text></svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how reaction time affects the stopping distance of a vehicle. Include in your answer factors that can affect reaction time.</span>",
      "hint": "Remember to describe the difference between thinking distance and braking distance, and how reaction time influences the thinking distance part.",
      "mustHaveKeywords": ["reaction time", "thinking distance", "stopping distance", "factors", "tiredness", "distractions", "alcohol", "drugs", "age"],
      "optionalKeywords": ["braking distance", "speed", "road conditions"],
      "modelAnswer": "<span>Stopping distance is the sum of thinking distance and braking distance. Thinking distance depends on the driver's reaction time, which is the time between seeing a hazard and applying the brakes. If reaction time increases, thinking distance increases, thus increasing the overall stopping distance. Factors that affect reaction time include tiredness, distractions such as mobile phone use, alcohol consumption, drugs, and age. These factors can delay the driver's response, making it take longer to start braking and increasing the risk of accidents.</span>",
      "scaffoldPrompts": [
        "Define what stopping distance consists of.",
        "Explain what reaction time is and how it relates to thinking distance.",
        "List factors that increase reaction time and how they affect stopping distance."
      ]
    }
  }
};