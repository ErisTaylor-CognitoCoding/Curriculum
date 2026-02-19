window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.7.2.1 - Electromagnetism",
  "strapline": "Understanding how current-carrying conductors interact with magnetic fields to produce forces and movement.",
  "learningObjectives": [
    "Students should understand that when a conductor carrying a current is placed in a magnetic field the conductor experiences a force (Physics 6.7.2.1)",
    "Students should understand the factors that affect the size of the force on a conductor in a magnetic field: the magnitude of the current, the strength of the magnetic field, and the length of the conductor in the magnetic field (Physics 6.7.2.1)",
    "Students should be able to use Fleming's left-hand rule to represent the relative orientation of the force, the current in the conductor and the magnetic field [Higher Tier] (Physics 6.7.2.1)"
  ],
  "keyFormulas": [
    "Force on conductor, F = BIL",
    "Where: F = force in newtons (N), B = magnetic flux density in tesla (T), I = current in amperes (A), L = length of conductor in magnetic field in meters (m)",
    "Reminder: Direction of force is given by Fleming's left-hand rule"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f9f9f9' stroke='#222' /><line x1='70' y1='150' x2='330' y2='150' stroke='#d9534f' stroke-width='8' /><text x='200' y='40' text-anchor='middle' font-family='Arial' font-size='16' fill='#333'>Current (I) in conductor</text><line x1='200' y1='50' x2='200' y2='250' stroke='#0275d8' stroke-width='8' /><text x='220' y='170' font-family='Arial' font-size='16' fill='#333'>Magnetic Field (B)</text><polyline points='70,150 100,120 120,100' fill='none' stroke='#5cb85c' stroke-width='8' marker-end='url(#arrowhead)' /><text x='130' y='110' font-family='Arial' font-size='16' fill='#333'>Force (F)</text><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#5cb85c'/></marker></defs></svg>",
  "step1": {
    "title": "Introduction to the Motor Effect",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a conductor carrying an electric current is placed within a magnetic field, it experiences a force. This is called the <strong>Motor Effect</strong>. The force causes the conductor to move. This principle is the basis of many electric motors.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing a shopping trolley (conductor) through a windy street (magnetic field). The wind pushes sideways against the trolley as you push it forward, causing it to move in a different direction. Similarly, the magnetic field pushes the current-carrying conductor.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying the Motor Effect",
      "problem": "Suppose a conductor carrying current is placed between two magnets. Does it experience a force? Let's find out with some questions.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is a force felt by the conductor when current flows and there is a magnetic field?",
          "answer": "yes",
          "feedback": "Correct. The conductor experiences a force when current and magnetic field are present."
        },
        {
          "id": "q2",
          "prompt": "Which of these causes the force: current, magnetic field, or both?",
          "answer": "both",
          "feedback": "Right! Both current and magnetic field are needed to produce the force."
        },
        {
          "id": "q3",
          "prompt": "Does the conductor move because of the force?",
          "answer": "yes",
          "feedback": "Exactly. The force causes the conductor to move."
        }
      ]
    }
  },
  "step2": {
    "title": "Factors Affecting the Force on a Conductor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The size of the force on the conductor depends on three main factors:</p><ul><li><strong>Current (I):</strong> More current means a bigger force.</li><li><strong>Magnetic Field Strength (B):</strong> A stronger magnetic field produces a stronger force.</li><li><strong>Length of Conductor in Field (L):</strong> A longer conductor in the magnetic field increases the force.</li></ul>",
    "workedExample": {
      "title": "Worked Example: Calculating Force",
      "problem": "Calculate the force on a conductor 0.3 m long carrying 4 A current in a magnetic field of 0.2 T.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the length of the conductor in meters (L):",
          "answer": "0.3",
          "feedback": "Got it. L = 0.3 m."
        },
        {
          "id": "q2",
          "prompt": "Enter the current in amperes (I):",
          "answer": "4",
          "feedback": "Great. I = 4 A."
        },
        {
          "id": "q3",
          "prompt": "Enter the magnetic field strength in tesla (B):",
          "answer": "0.2",
          "feedback": "Correct. B = 0.2 T."
        },
        {
          "id": "q4",
          "prompt": "Calculate the force using F = BIL",
          "answer": "0.24",
          "feedback": "Correct! F = 0.2 × 4 × 0.3 = 0.24 N."
        }
      ]
    }
  },
  "step3": {
    "title": "Using Fleming's Left-Hand Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Fleming's Left-Hand Rule is a tool to determine the direction of the force on the conductor. Use your left hand and stretch out the <strong>Thumb</strong>, <strong>First Finger</strong>, and <strong>Second Finger</strong> so they are all at right angles.</p><ul><li><strong>Thumb:</strong> Direction of the Force (Motion)</li><li><strong>First Finger:</strong> Direction of the Magnetic Field (North to South)</li><li><strong>Second Finger:</strong> Direction of the Current (Positive to Negative)</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of your left hand as a compass:</p><ul><li>The first finger points to magnetic north.</li><li>The second finger shows the electric current flow.</li><li>The thumb then shows the direction the force pushes the conductor.</li></ul>"
    },
    "workedExample": {
      "title": "Worked Example: Applying Fleming's Left-Hand Rule",
      "problem": "Use Fleming's left-hand rule to find the direction of force if current flows left to right and magnetic field points upwards.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Point your second finger in the direction of current: left to right. Is this correct?",
          "answer": "yes",
          "feedback": "Good. Second finger = current direction."
        },
        {
          "id": "q2",
          "prompt": "Point your first finger upwards for magnetic field. Correct?",
          "answer": "yes",
          "feedback": "Yes! First finger = magnetic field direction."
        },
        {
          "id": "q3",
          "prompt": "Which way does your thumb point? (Your answer)",
          "answer": "out of the page",
          "feedback": "Perfect! The force is directed out of the page."
        }
      ]
    }
  },
  "step4": {
    "title": "Summarising the Motor Effect",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The motor effect results in a force on a conductor placed in a magnetic field when current flows. The size and direction depend on current, magnetic field strength, conductor length, and relative orientation.</p>",
    "workedExample": {
      "title": "Worked Example: Predicting Outcome",
      "problem": "If the current direction reverses, what happens to the force direction?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does reversing the current reverse the force direction?",
          "answer": "yes",
          "feedback": "Correct. Reversing current reverses force direction."
        }
      ]
    }
  },
  "step5": {
    "title": "Key Terminology Check: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The phenomenon where a current-carrying conductor experiences a force in a magnetic field is called the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "Motor Effect", "label": "Motor Effect", "isCorrect": true, "feedback": "Correct!"},
              {"value": "Electrolysis", "label": "Electrolysis", "isCorrect": false, "feedback": "Incorrect, try again."},
              {"value": "Ohm's Law", "label": "Ohm's Law", "isCorrect": false, "feedback": "Incorrect, try again."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Fleming's Left-Hand Rule helps to find the direction of <span class=\"font-semibold\">_____</span>, magnetic field and current.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "Force", "label": "Force", "isCorrect": true, "feedback": "Correct!"},
              {"value": "Voltage", "label": "Voltage", "isCorrect": false, "feedback": "Incorrect, try again."},
              {"value": "Resistance", "label": "Resistance", "isCorrect": false, "feedback": "Incorrect, try again."}
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how the motor effect produces a force on a current-carrying conductor in a magnetic field, and describe how Fleming's left-hand rule can be used to find the direction of this force.</span>",
      "hint": "Remember to include the role of current, magnetic field strength, length of conductor, and description of each finger in Fleming’s left-hand rule.",
      "mustHaveKeywords": ["motor effect", "current", "magnetic field", "force", "Fleming's left-hand rule", "thumb", "first finger", "second finger"],
      "optionalKeywords": ["direction", "strength", "length of conductor", "right angles", "electric motors"],
      "modelAnswer": "<span>The motor effect occurs when a conductor carrying an electric current is placed in a magnetic field, causing the conductor to experience a force. The size of this force depends on the magnitude of the current, the strength of the magnetic field, and the length of the conductor within the field. Fleming’s left-hand rule helps to determine the direction of this force: the thumb points in the direction of the force (motion), the first finger points in the direction of the magnetic field (north to south), and the second finger points in the direction of the current. All three are held at right angles to each other. This principle explains how electric motors work.</span>",
      "scaffoldPrompts": [
        "Start by defining the motor effect.",
        "Describe the factors affecting the force size.",
        "Explain how Fleming's left-hand rule is applied.",
        "Describe the direction each finger represents.",
        "Summarise the importance of the motor effect."
      ]
    }
  }
};