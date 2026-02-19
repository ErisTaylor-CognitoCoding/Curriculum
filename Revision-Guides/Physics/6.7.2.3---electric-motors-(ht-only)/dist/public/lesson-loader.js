window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.7.2.3 - Electric motors (HT only)",
  "strapline": "Understanding the motor effect and how it produces continuous rotation using a split-ring commutator in DC motors.",
  "learningObjectives": [
    "Students should understand that a current-carrying conductor in a magnetic field experiences a force (the motor effect) (Physics 6.7.2.3)",
    "Students should be able to explain how the motor effect is applied in a simple DC motor with a split-ring commutator to produce continuous rotation (Physics 6.7.2.3)"
  ],
  "keyFormulas": [
    "Force on a current-carrying conductor: F = BIL (where F = force in newtons, B = magnetic flux density in teslas, I = current in amperes, L = length of conductor in the magnetic field in metres)",
    "Reminder: The direction of force can be found by Fleming's Left-Hand Rule"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='220' width='360' height='10' fill='#888'/><rect x='150' y='50' width='100' height='120' fill='#d3d3d3' stroke='#444' stroke-width='2'/><line x1='150' y1='110' x2='250' y2='110' stroke='#000' stroke-width='4'/><line x1='200' y1='50' x2='200' y2='170' stroke='#000' stroke-width='6'/><circle cx='200' cy='200' r='30' fill='none' stroke='#444' stroke-width='3'/><text x='180' y='110' font-family='sans-serif' font-size='12' fill='#000'>Coil</text><text x='130' y='180' font-family='sans-serif' font-size='12' fill='#f00'>N</text><text x='260' y='180' font-family='sans-serif' font-size='12' fill='#00f'>S</text><line x1='130' y1='150' x2='260' y2='150' stroke='red' stroke-width='4' marker-end='url(#arrow)' marker-start='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto-start-reverse'><path d='M0 0 L10 5 L0 10 z' fill='red'/></marker></defs><text x='120' y='140' font-family='sans-serif' font-size='10' fill='#000'>Magnetic Field</text></svg>",
  "step1": {
    "title": "Concept: The Motor Effect",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a conductor carrying an electric current is placed within a magnetic field, it experiences a force. This phenomenon is called the motor effect. The direction and magnitude of the force depend on the direction of the magnetic field, the direction of the current, and the strength of both.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing a shopping cart (current) through a strong wind (magnetic field). The wind pushes the cart sideways — similar to how the magnetic field pushes on the current to create force.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating the Force on a Conductor",
      "problem": "Calculate the force on a 0.5 m long wire carrying a 3 A current placed in a magnetic field of 0.4 T.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of the magnetic flux density (B) in teslas?",
          "answer": "0.4",
          "feedback": "Correct. The magnetic flux density is 0.4 T."
        },
        {
          "id": "q2",
          "prompt": "What is the current (I) flowing through the conductor in amperes?",
          "answer": "3",
          "feedback": "Correct. The current is 3 A."
        },
        {
          "id": "q3",
          "prompt": "What is the length (L) of the conductor in metres within the magnetic field?",
          "answer": "0.5",
          "feedback": "Correct. The length is 0.5 m."
        },
        {
          "id": "q4",
          "prompt": "Calculate the force using the formula F = BIL. Enter your answer in newtons.",
          "answer": "0.6",
          "feedback": "Correct. Force = 0.4 × 3 × 0.5 = 0.6 N."
        }
      ]
    }
  },
  "step2": {
    "title": "Key Rule: Fleming's Left-Hand Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Fleming's Left-Hand Rule is used to find the direction of the force on a current-carrying wire in a magnetic field. Stretch out the thumb, first finger, and second finger of your left hand so they are perpendicular to each other. The first finger points in the direction of the magnetic field (N to S), the second finger points in the direction of the current (+ to -), and the thumb points in the direction of the force (motion).</p>",
    "workedExample": {
      "title": "Worked Example: Determining Force Direction",
      "problem": "A straight conductor carries current upwards and is placed in a magnetic field directed from left (North) to right (South). Using Fleming's Left-Hand Rule, determine the direction of the force on the conductor.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Point your first finger. Which direction is the magnetic field? (left or right)",
          "answer": "left",
          "feedback": "Correct. The magnetic field is from North to South, left to right."
        },
        {
          "id": "q2",
          "prompt": "Point your second finger. Which way is the current? (up or down)",
          "answer": "up",
          "feedback": "Correct. The current is flowing upwards."
        },
        {
          "id": "q3",
          "prompt": "Where does your thumb point? (forward, backwards, into the page, out of the page)",
          "answer": "into the page",
          "feedback": "Correct. The force direction is into the page (perpendicular to both field and current)."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding the Split-ring Commutator",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Split-ring commutator</strong> is a device used in a simple DC motor to reverse the current direction in the coil every half turn. This reversal of current keeps the force direction on each side of the coil consistent, allowing continuous rotation rather than oscillation.</p>",
    "workedExample": {
      "title": "Worked Example: How the Commutator Works",
      "problem": "Explain what happens to the current direction in the coil when the split-ring commutator reverses every half turn.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the current direction switch or remain the same after each half turn?",
          "answer": "switch",
          "feedback": "Correct. The current reverses every half turn."
        },
        {
          "id": "q2",
          "prompt": "What is the purpose of this switch in current direction? (Keep coil rotating continuously / Stop rotation)",
          "answer": "Keep coil rotating continuously",
          "feedback": "Correct. It ensures the coil continues spinning in the same direction."
        }
      ]
    }
  },
  "step4": {
    "title": "Diagram Interpretation: Simple DC Motor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Observe the simple DC motor diagram below. Identify the magnetic field, coil, split-ring commutator, and direction of forces acting on the coil sides using Fleming's Left-Hand Rule.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='100' y='60' width='200' height='160' fill='#e0e0e0' stroke='#333' stroke-width='2'/><circle cx='200' cy='140' r='60' fill='none' stroke='#555' stroke-width='3'/><line x1='140' y1='140' x2='260' y2='140' stroke='#000' stroke-width='6'/><rect x='185' y='50' width='30' height='15' fill='#b22222'/><rect x='185' y='200' width='30' height='15' fill='#b22222'/><text x='110' y='130' font-family='sans-serif' font-size='14' fill='#004080'>N</text><text x='270' y='130' font-family='sans-serif' font-size='14' fill='#004080'>S</text><text x='160' y='80' font-family='sans-serif' font-size='12' fill='#000'>Coil side</text><text x='240' y='80' font-family='sans-serif' font-size='12' fill='#000'>Coil side</text><path d='M180 140 l-20 0' stroke='red' stroke-width='5' marker-end='url(#arrow)'/><path d='M220 140 l20 0' stroke='blue' stroke-width='5' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto'><path d='M0 0 L10 5 L0 10 z' fill='red'/></marker></defs></svg>",
    "workedExample": {
      "title": "Worked Example: Applying Fleming's Rule on the Motor Coil",
      "problem": "Use the diagram and Fleming's Left-Hand Rule to determine the force direction on each side of the coil.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the direction of the magnetic field? (N to S, left to right or right to left)",
          "answer": "left to right",
          "feedback": "Correct. The magnetic field moves from North (left) to South (right)."
        },
        {
          "id": "q2",
          "prompt": "If current flows as shown by the red and blue arrows in the coil sides (left side into the coil, right side out), what is the force direction on the left coil side? (up or down)",
          "answer": "up",
          "feedback": "Correct. Force on the left coil side is upwards."
        },
        {
          "id": "q3",
          "prompt": "What is the force direction on the right coil side? (up or down)",
          "answer": "down",
          "feedback": "Correct. Force on the right coil side is downwards — causing rotation."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What causes the force on a current-carrying conductor inside a magnetic field?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The interaction between the magnetic field and the moving charges in the conductor</span>",
            "isCorrect": true,
            "explanation": "Correct. The force arises due to the interaction of magnetic field and current."
          },
          {
            "id": "b",
            "label": "<span>The resistance of the conductor increasing</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Resistance affects heating, not force direction."
          },
          {
            "id": "c",
            "label": "<span>The conductor pushing back the magnetic field</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The force is exerted by the magnetic field on the conductor."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What is the role of the split-ring commutator in a DC motor?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>It maintains continuous rotation by reversing current direction every half turn</span>",
            "isCorrect": true,
            "explanation": "Correct. This current reversal prevents the motor from oscillating."
          },
          {
            "id": "b",
            "label": "<span>It increases the voltage across the coil</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The commutator does not increase voltage."
          },
          {
            "id": "c",
            "label": "<span>It controls the speed of the motor</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Speed is controlled by voltage and current, not by the commutator."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how the motor effect is used in a simple DC motor with a split-ring commutator to produce continuous rotation.</span>",
      "hint": "Remember to mention the force on the current-carrying coil, the role of the magnetic field, and how the split-ring commutator reverses current.",
      "mustHaveKeywords": ["motor effect", "force", "current-carrying conductor", "magnetic field", "split-ring commutator", "reverse current", "continuous rotation"],
      "optionalKeywords": ["coil", "direction", "Fleming's Left-Hand Rule"],
      "modelAnswer": "<span>The motor effect causes a force to act on a current-carrying conductor placed in a magnetic field, producing a turning force (torque) on the coil in the motor. The split-ring commutator reverses the current direction in the coil every half turn, which reverses the force direction on each side of the coil. This reversal prevents the coil from oscillating and ensures it continues rotating in the same direction, producing continuous rotation.</span>",
      "scaffoldPrompts": [
        "Start by describing the motor effect and how a force acts on a current-carrying wire in a magnetic field.",
        "Explain that this force produces turning motion in the coil.",
        "Describe the role of the split-ring commutator in reversing the current every half turn.",
        "Conclude explaining how this reversal keeps the coil spinning continuously in one direction."
      ]
    }
  }
};