window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.3.2 - Reaction time",
  "strapline": "Understanding human reaction time and its impact on vehicle stopping distances.",
  "learningObjectives": [
    "Students should understand that typical human reaction time ranges from 0.2 to 0.9 seconds (Physics 6.5.4.3.2)",
    "Students should be able to identify and explain factors that affect reaction time including tiredness, distractions, alcohol, drugs, and age (Physics 6.5.4.3.2)",
    "Students should understand how reaction time directly influences thinking distance and overall stopping distance of a vehicle (Physics 6.5.4.3.2)"
  ],
  "keyFormulas": [
    "Reaction time (s) = Time delay between stimulus and response",
    "Thinking distance (m) = Reaction time (s) × Speed (m/s)",
    "Stopping distance (m) = Thinking distance + Braking distance"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='70' width='360' height='10' fill='#ccc'/><text x='200' y='60' font-family='sans-serif' font-size='14' text-anchor='middle'>Road</text><circle cx='50' cy='75' r='15' fill='#007acc'/><text x='50' y='75' font-family='sans-serif' font-size='12' fill='white' text-anchor='middle' dominant-baseline='middle'>Car</text><line x1='100' y1='75' x2='180' y2='75' stroke='#e67e22' stroke-width='6' /><text x='140' y='65' font-family='sans-serif' font-size='12' fill='#e67e22' text-anchor='middle'>Thinking Distance</text><line x1='190' y1='75' x2='350' y2='75' stroke='#c0392b' stroke-width='6' /><text x='270' y='65' font-family='sans-serif' font-size='12' fill='#c0392b' text-anchor='middle'>Braking Distance</text></svg>",
  "step1": {
    "title": "Concept: What is Reaction Time?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Reaction time is the interval between when a driver perceives a hazard stimulus and when they initiate a response, such as pressing the brake. For humans, this typically ranges from 0.2 to 0.9 seconds.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of reaction time like the delay between hearing thunder and seeing lightning — it takes a moment before your brain processes the sound and you respond.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating Reaction Time",
      "problem": "Estimate a driver's reaction time based on their response to a hazard.",
      "questions": [
        {
          "id": "rt-q1",
          "prompt": "If a driver sees a hazard and presses the brake 0.5 seconds later, what is their reaction time?",
          "answer": "0.5",
          "feedback": "Correct. The reaction time is the time delay between stimulus and response."
        },
        {
          "id": "rt-q2",
          "prompt": "Is 0.5 seconds within the typical human reaction time range of 0.2 to 0.9 seconds?",
          "answer": "yes",
          "feedback": "Correct. 0.5 seconds is within the typical range."
        }
      ]
    }
  },
  "step2": {
    "title": "Factors Affecting Reaction Time",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Reaction time can vary depending on factors such as tiredness, distractions, alcohol or drugs, and the driver's age.</p>",
    "workedExample": {
      "title": "Example: Impact of Factors",
      "problem": "Consider how tiredness might affect a driver's reaction time.",
      "questions": [
        {
          "id": "factors-q1",
          "prompt": "Would tiredness increase or decrease reaction time?",
          "answer": "increase",
          "feedback": "Correct. Tiredness typically slows reaction time, so it increases."
        },
        {
          "id": "factors-q2",
          "prompt": "Name two other factors that can negatively affect reaction time.",
          "answer": "distractions, alcohol",
          "feedback": "Correct. Distractions and alcohol are examples that increase reaction time."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Thinking Distance",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Thinking distance is the distance a vehicle travels during the driver's reaction time before the brakes are applied. It depends on the reaction time and the speed of the vehicle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like a computer’s delay before executing a command, thinking distance is the 'delay distance' before braking starts.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Thinking Distance",
      "problem": "Calculate the thinking distance for a car traveling at 20 m/s with a reaction time of 0.7 seconds.",
      "questions": [
        {
          "id": "td-q1",
          "prompt": "What is the reaction time value (s)?",
          "answer": "0.7",
          "feedback": "Correct."
        },
        {
          "id": "td-q2",
          "prompt": "What is the speed of the vehicle in meters per second (m/s)?",
          "answer": "20",
          "feedback": "Correct."
        },
        {
          "id": "td-q3",
          "prompt": "Calculate thinking distance using the formula: thinking distance = reaction time × speed.",
          "answer": "14",
          "feedback": "Correct. 0.7 × 20 = 14 meters."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='60' width='360' height='15' fill='#b0d8f7'/><circle cx='70' cy='68' r='12' fill='#2980b9'/><text x='70' y='68' fill='white' font-family='sans-serif' font-size='12' text-anchor='middle' dominant-baseline='middle'>Car</text><line x1='85' y1='70' x2='220' y2='70' stroke='#f39c12' stroke-width='8' /><text x='152' y='50' font-family='sans-serif' font-size='12' fill='#f39c12' text-anchor='middle'>Thinking Distance = 14m</text></svg>"
  },
  "step4": {
    "title": "Concept: Stopping Distance",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Stopping distance is the total distance a vehicle travels from when the driver first sees a hazard until the vehicle comes to a complete stop. It is the sum of thinking distance and braking distance.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Stopping Distance",
      "problem": "Calculate the stopping distance if the thinking distance is 14 m and braking distance is 30 m.",
      "questions": [
        {
          "id": "sd-q1",
          "prompt": "What is the thinking distance in meters?",
          "answer": "14",
          "feedback": "Correct."
        },
        {
          "id": "sd-q2",
          "prompt": "What is the braking distance in meters?",
          "answer": "30",
          "feedback": "Correct."
        },
        {
          "id": "sd-q3",
          "prompt": "Calculate the total stopping distance: thinking distance + braking distance.",
          "answer": "44",
          "feedback": "Correct. 14 + 30 = 44 meters."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='60' width='360' height='20' fill='#e8f0fe'/><circle cx='60' cy='70' r='12' fill='#2980b9'/><text x='60' y='70' fill='white' font-family='sans-serif' font-size='12' text-anchor='middle' dominant-baseline='middle'>Car</text><line x1='75' y1='70' x2='180' y2='70' stroke='#f39c12' stroke-width='8' /><text x='127' y='50' font-family='sans-serif' font-size='12' fill='#f39c12' text-anchor='middle'>Thinking Distance</text><line x1='185' y1='70' x2='350' y2='70' stroke='#c0392b' stroke-width='8' /><text x='268' y='50' font-family='sans-serif' font-size='12' fill='#c0392b' text-anchor='middle'>Braking Distance</text></svg>"
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Question",
    "mcqs": [
      {
        "id": "mcq-rt-1",
        "question": "<span>Which factor would NOT increase a driver's reaction time?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Tiredness</span>",
            "isCorrect": false,
            "explanation": "Tiredness slows reaction time, increasing it."
          },
          {
            "id": "b",
            "label": "<span>Alcohol consumption</span>",
            "isCorrect": false,
            "explanation": "Alcohol impairs reaction time, increasing delay."
          },
          {
            "id": "c",
            "label": "<span>Practice and alertness</span>",
            "isCorrect": true,
            "explanation": "Practice and alertness can reduce reaction time."
          },
          {
            "id": "d",
            "label": "<span>Distractions</span>",
            "isCorrect": false,
            "explanation": "Distractions increase reaction time by delaying response."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how reaction time affects the thinking distance and stopping distance of a vehicle, and describe factors that can influence reaction time.</span>",
      "hint": "Remember to define reaction time, link it to thinking and stopping distances, and include relevant factors that affect reaction time.",
      "mustHaveKeywords": ["reaction time", "thinking distance", "stopping distance", "factors", "tiredness", "distractions", "alcohol", "age"],
      "optionalKeywords": ["braking distance", "overall stopping distance", "response delay"],
      "modelAnswer": "<span>Reaction time is the delay between a driver perceiving a hazard and starting to respond, typically between 0.2 and 0.9 seconds. This reaction time determines the thinking distance, which is the distance the vehicle travels before the brakes are applied. Since stopping distance is the sum of thinking distance and braking distance, longer reaction times increase the total stopping distance. Factors such as tiredness, distractions, alcohol, drugs, and age can increase reaction time by slowing a driver's response, leading to longer thinking and stopping distances.</span>",
      "scaffoldPrompts": [
        "Define reaction time and provide typical values.",
        "Explain how reaction time affects thinking distance.",
        "Show how thinking distance combines with braking distance to form stopping distance.",
        "List and explain factors that can increase reaction time."
      ]
    }
  }
};