window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.8 - Key ideas",
  "strapline": "Understanding the motor effect, the operation of a simple DC motor, and consolidating core magnetism and electromagnetism concepts.",
  "learningObjectives": [
    "Students should understand the motor effect: that a current-carrying conductor in a magnetic field experiences a force (Physics 6.8.1)",
    "Students should understand how a simple DC motor works, including the role of the split-ring commutator in producing continuous rotation (Physics 6.8.2)",
    "Students should consolidate understanding of key ideas from magnetism and electromagnetism, including magnetic fields, electromagnets, the motor effect, and electromagnetic induction (Physics 6.8.3)"
  ],
  "keyFormulas": [
    "Force, F = BIL (Force on a current-carrying conductor in a magnetic field)",
    "Fleming's Left-Hand Rule: Thumb = Force, First Finger = Magnetic Field, Second Finger = Current Direction",
    "Reminder: Current direction reverses every half turn in a DC motor due to the split-ring commutator"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='100' width='340' height='100' fill='#e3f2fd' stroke='#0d47a1' stroke-width='2'/><line x1='100' y1='120' x2='300' y2='120' stroke='#000' stroke-width='4' /><circle cx='200' cy='150' r='40' fill='#90caf9' stroke='#1565c0' stroke-width='2'/><text x='200' y='155' font-family='sans-serif' font-size='14' fill='#0d47a1' text-anchor='middle'>Current Coil</text><path d='M150 60 L250 60 L250 95 L150 95 Z' fill='#4caf50'/><text x='200' y='80' font-family='sans-serif' font-size='12' fill='white' text-anchor='middle'>Magnetic Field</text><path d='M120 210 L280 210' stroke='#f44336' stroke-width='6' marker-end='url(#arrowhead)' /><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#f44336'/></marker></defs><text x='200' y='230' font-family='sans-serif' font-size='14' fill='#b71c1c' text-anchor='middle'>Direction of Force (Motor Effect)</text></svg>",
  "step1": {
    "title": "Concept: The Motor Effect",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a current flows through a conductor placed within a magnetic field, the conductor experiences a force. This force is the key principle behind how electric motors work.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing a shopping trolley (conductor) in a windy street (magnetic field). The wind pushes the trolley sideways when you push it forward, just like the magnetic field pushing the conductor.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Force on a Conductor",
      "problem": "A conductor of length <strong>0.5 m</strong> carries a current of <strong>3 A</strong> in a magnetic field of strength <strong>0.2 T</strong>. Calculate the force on the conductor.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the magnetic field strength (B in tesla):",
          "answer": "0.2",
          "feedback": "Correct. The magnetic field strength is 0.2 T."
        },
        {
          "id": "q2",
          "prompt": "Enter the current through the conductor (I in amperes):",
          "answer": "3",
          "feedback": "Correct. The current is 3 A."
        },
        {
          "id": "q3",
          "prompt": "Enter the length of the conductor in the magnetic field (L in meters):",
          "answer": "0.5",
          "feedback": "Correct. The length is 0.5 m."
        },
        {
          "id": "q4",
          "prompt": "Calculate the force using the formula F = B × I × L (in newtons):",
          "answer": "0.3",
          "feedback": "Correct. F = 0.2 × 3 × 0.5 = 0.3 N."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Fleming's Left-Hand Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Fleming's Left-Hand Rule helps you find the direction of force on a current-carrying conductor in a magnetic field. Hold your left hand so your <em>First Finger</em> points in the direction of the magnetic field, your <em>Second Finger</em> points in the direction of current, then your <em>Thumb</em> points in the direction of the force or motion.</p>",
    "diagramHtml": "<svg viewBox='0 0 200 160' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='80' r='60' fill='#bbdefb' stroke='#0d47a1' stroke-width='3'/><text x='100' y='25' font-family='sans-serif' font-size='16' font-weight='bold' fill='#0d47a1' text-anchor='middle'>Fleming's Left-Hand Rule</text><line x1='70' y1='90' x2='50' y2='120' stroke='#f44336' stroke-width='6'/><text x='20' y='130' font-family='sans-serif' font-size='14' fill='#b71c1c'>Field (1st finger)</text><line x1='120' y1='55' x2='120' y2='85' stroke='#4caf50' stroke-width='6'/><text x='130' y='45' font-family='sans-serif' font-size='14' fill='#2e7d32'>Current (2nd finger)</text><line x1='95' y1='70' x2='130' y2='35' stroke='#ff9800' stroke-width='6'/><text x='140' y='30' font-family='sans-serif' font-size='14' fill='#ef6c00'>Force/Thumb</text></svg>",
    "workedExample": {
      "title": "Worked Example: Using Fleming's Left-Hand Rule",
      "problem": "A wire carries current to the right and lies in a magnetic field pointing into the page. Use Fleming's left-hand rule to find the direction of the force.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Point your first finger in the direction of the magnetic field (Into or Out of the page). Which direction is it?",
          "answer": "into",
          "feedback": "Correct. The magnetic field is into the page."
        },
        {
          "id": "q2",
          "prompt": "Point your second finger in the direction of current (Left or Right). Which direction is it?",
          "answer": "right",
          "feedback": "Correct. The current is to the right."
        },
        {
          "id": "q3",
          "prompt": "Which direction does your thumb point (Up, Down, Left or Right)?",
          "answer": "up",
          "feedback": "Correct. The force is upwards."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: The Split-Ring Commutator in DC Motors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A split-ring commutator reverses the current direction in the coil every half turn to keep the motor spinning in the same direction. It changes the connections to the power supply to ensure continuous rotation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a split-ring commutator like a rotating switch that flips the current like changing gears on a bike, so the motor keeps turning the same way.</p>"
    },
    "diagramHtml": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><circle cx='150' cy='100' r='80' fill='#e1f5fe' stroke='#0288d1' stroke-width='3'/><rect x='140' y='20' width='20' height='40' fill='#0288d1'/><rect x='140' y='140' width='20' height='40' fill='#0288d1'/><line x1='150' y1='100' x2='230' y2='100' stroke='#c62828' stroke-width='5'/><line x1='70' y1='100' x2='150' y2='100' stroke='#388e3c' stroke-width='5'/><text x='150' y='15' font-family='sans-serif' font-size='14' fill='#01579b' text-anchor='middle'>Split-Ring Commutator</text><text x='245' y='105' font-family='sans-serif' font-size='12' fill='#c62828'>Current out</text><text x='45' y='105' font-family='sans-serif' font-size='12' fill='#388e3c'>Current in</text></svg>",
    "workedExample": {
      "title": "Worked Example: Role of the Split-Ring Commutator",
      "problem": "Explain why the current needs to reverse every half turn in a simple DC motor.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What would happen if the current did not reverse every half turn?",
          "answer": "The coil would stop rotating or oscillate.",
          "feedback": "Correct. Without reversing, the forces would oppose continuous rotation."
        },
        {
          "id": "q2",
          "prompt": "How does the split-ring commutator achieve this reversal?",
          "answer": "By switching contacts every half turn.",
          "feedback": "Correct. The split rings swap the current connections."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Motor Effect MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following correctly describes the motor effect?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>A force is exerted on a current-carrying conductor in a magnetic field.</span>",
            "isCorrect": true,
            "explanation": "Correct, this is the motor effect."
          },
          {
            "id": "b",
            "label": "<span>A magnetic field is created by a moving magnet.</span>",
            "isCorrect": false,
            "explanation": "Incorrect, this is related to magnetic fields but not the motor effect."
          },
          {
            "id": "c",
            "label": "<span>A current is induced by a changing magnetic field.</span>",
            "isCorrect": false,
            "explanation": "Incorrect, this describes electromagnetic induction."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> reverses the direction of current in a DC motor every half turn to maintain continuous rotation.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "split-ring commutator",
                "label": "Split-ring commutator",
                "isCorrect": true,
                "feedback": "Correct! The split-ring commutator reverses the current."
              },
              {
                "value": "electromagnet",
                "label": "Electromagnet",
                "isCorrect": false,
                "feedback": "Incorrect. An electromagnet creates a magnetic field but does not reverse current."
              },
              {
                "value": "armature",
                "label": "Armature",
                "isCorrect": false,
                "feedback": "Incorrect. The armature is the rotating coil, not the current-reversing device."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Using <span class=\"font-semibold\">_____</span> helps determine the force direction on a current-carrying conductor in a magnetic field.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "flemings left-hand rule",
                "label": "Fleming's left-hand rule",
                "isCorrect": true,
                "feedback": "Correct! It predicts the force direction."
              },
              {
                "value": "right-hand grip rule",
                "label": "Right-hand grip rule",
                "isCorrect": false,
                "feedback": "Incorrect. This rule is used to determine magnetic field direction."
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
      "prompt": "<span>Explain how a simple DC motor works, including the role of the motor effect and the split-ring commutator.</span>",
      "hint": "Remember to describe the forces on the current-carrying coil and why current reversal is needed.",
      "mustHaveKeywords": ["motor effect", "current-carrying conductor", "force", "split-ring commutator", "current reversal", "continuous rotation"],
      "optionalKeywords": ["magnetic field", "coil", "electromagnet"],
      "modelAnswer": "<span>A simple DC motor works by placing a coil of wire carrying current in a magnetic field, which experiences a force due to the motor effect. This force causes the coil to rotate. The split-ring commutator reverses the direction of the current in the coil every half turn, ensuring the forces continue to push the coil in the same rotational direction, producing continuous rotation.</span>",
      "scaffoldPrompts": [
        "Describe the motor effect and what causes the force on the coil.",
        "Explain why the coil would stop without reversing the current.",
        "Describe how the split-ring commutator reverses the current and its effect on rotation."
      ]
    }
  }
};