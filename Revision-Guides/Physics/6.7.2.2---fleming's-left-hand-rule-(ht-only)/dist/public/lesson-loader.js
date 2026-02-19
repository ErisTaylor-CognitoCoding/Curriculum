window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.7.2.2 - Fleming's left-hand rule (HT only)",
  "strapline": "Understanding how a current-carrying conductor in a magnetic field experiences a force and how to determine its direction using Fleming's left-hand rule.",
  "learningObjectives": [
    "Students should learn that a current-carrying conductor placed in a magnetic field experiences a force (Physics 6.7.2.2)",
    "Students should understand that the factors affecting the size of the force include current strength, magnetic field strength, and the length of conductor in the field (Physics 6.7.2.2)",
    "Students should be able to use Fleming's left-hand rule to determine the direction of the force on a current-carrying conductor in a magnetic field (Physics 6.7.2.2 HT)"
  ],
  "keyFormulas": [
    "Force, F = BIL (where B is magnetic field strength, I is current, and L is length of conductor in field)",
    "Reminder: Force direction can be found using Fleming's left-hand rule"
  ],
  "diagramHtml": "<svg viewBox='0 0 450 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='80' width='390' height='140' fill='#e0f7fa' stroke='#006064' stroke-width='2'/><text x='225' y='60' font-family='Arial' font-size='16' text-anchor='middle' fill='#004d40'><strong>Current-Carrying Conductor in Magnetic Field</strong></text><line x1='100' y1='200' x2='350' y2='200' stroke='#f4511e' stroke-width='6' /><text x='100' y='220' font-family='Arial' font-size='14' fill='#f4511e'>Conductor</text><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#0d47a1'/></marker></defs><line x1='150' y1='150' x2='150' y2='60' stroke='#0d47a1' stroke-width='4' marker-end='url(#arrowhead)' /><text x='150' y='50' font-family='Arial' font-size='14' fill='#0d47a1' text-anchor='middle'>Magnetic Field (B)</text><line x1='300' y1='250' x2='300' y2='180' stroke='#2e7d32' stroke-width='4' marker-end='url(#arrowhead)' /><text x='300' y='270' font-family='Arial' font-size='14' fill='#2e7d32' text-anchor='middle'>Current (I)</text><line x1='130' y1='220' x2='130' y2='130' stroke='#d81b60' stroke-width='4' marker-end='url(#arrowhead)' /><text x='130' y='120' font-family='Arial' font-size='14' fill='#d81b60' text-anchor='middle'>Force (F)</text></svg>",
  "step1": {
    "title": "Concept: Motor Effect",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a conductor carrying an electric current is placed inside a magnetic field, it experiences a force. This interaction is known as the <strong>motor effect</strong>. It is the fundamental principle behind many electric motors where electrical energy is converted to mechanical motion.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing a box across a table. The force you apply moves the box. Similarly, the magnetic field and current interact to 'push' the conductor, causing its motion.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Motor Effect",
      "problem": "A wire carrying current is placed between two magnets with the north and south poles facing each other. What happens to the wire?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the wire experience a force inside the magnetic field? (yes/no)",
          "answer": "yes",
          "feedback": "Correct. The motor effect causes a force on current-carrying conductors inside magnetic fields."
        },
        {
          "id": "q2",
          "prompt": "Is this force perpendicular to the magnetic field and current directions? (yes/no)",
          "answer": "yes",
          "feedback": "Correct. The force is at right angles to both the magnetic field and current."
        },
        {
          "id": "q3",
          "prompt": "Will the wire move if it is free to do so? (yes/no)",
          "answer": "yes",
          "feedback": "Correct. The force causes the wire to move."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Fleming's Left-Hand Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Fleming's left-hand rule helps us find the direction of the force on a current-carrying conductor in a magnetic field. Position your left hand so that:<ul><li>The <strong>First finger</strong> points in the direction of the <em>Magnetic Field (B)</em></li><li>The <strong>Second finger</strong> points in the direction of the <em>Current (I)</em></li><li>The <strong>Thumb</strong> points in the direction of the <em>Force (F)</em> or motion</li></ul></p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of each finger like a vector arrow: magnetic field, current, and force, all perpendicular to one another, like a 3D coordinate system you can physically demonstrate with your hand.</p>"
    },
    "workedExample": {
      "title": "Interactive Fleming's Rule Practice",
      "problem": "Use the image below to find the direction of the force if the magnetic field points <strong>north</strong> and the current flows <strong>east</strong>. Set your fingers accordingly.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Point your first finger in the correct magnetic field direction (north). Which way is your first finger pointing? (north/south/east/west)",
          "answer": "north",
          "feedback": "Correct. The first finger must point in the magnetic field direction, which is north."
        },
        {
          "id": "q2",
          "prompt": "Point your second finger in the current direction (east). Which way is your second finger pointing? (north/south/east/west)",
          "answer": "east",
          "feedback": "Correct. The second finger points toward the direction of current, which is east."
        },
        {
          "id": "q3",
          "prompt": "Where is your thumb pointing after positioning the first two fingers? (up/down/north/south/east/west)",
          "answer": "up",
          "feedback": "Correct. The thumb shows the force direction, which in this case would be upwards or perpendicular to both magnetic field and current."
        }
      ]
    }
  },
  "step3": {
    "title": "Factors Affecting the Size of the Force",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The magnitude of the force on the current-carrying conductor depends on:</p><ul><li><strong>Current strength (I):</strong> Greater current increases force.</li><li><strong>Magnetic field strength (B):</strong> Stronger magnet produces greater force.</li><li><strong>Length of conductor in magnetic field (L):</strong> Longer wire within the field experiences more force.</li></ul><p>This relationship is summarized by the formula <em>F = BIL</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing a door open: pushing harder (current), a stronger hinge resistance (magnetic field), or a longer door handle (length) all affect how much force you apply or feel.</p>"
    },
    "workedExample": {
      "title": "Calculate Force on a Conductor",
      "problem": "Calculate the force on a conductor 0.5 m long carrying a current of 3 A in a magnetic field of 0.2 T.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the magnetic field strength (B) in teslas (T).",
          "answer": "0.2",
          "feedback": "Correct. B = 0.2 T."
        },
        {
          "id": "q2",
          "prompt": "Identify the current (I) in amperes (A).",
          "answer": "3",
          "feedback": "Correct. I = 3 A."
        },
        {
          "id": "q3",
          "prompt": "Identify the length of the conductor (L) in metres (m).",
          "answer": "0.5",
          "feedback": "Correct. L = 0.5 m."
        },
        {
          "id": "q4",
          "prompt": "Calculate the force (F) using the formula F = BIL.",
          "answer": "0.3",
          "feedback": "Correct. F = 0.2 × 3 × 0.5 = 0.3 N."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Diagram Practice: Applying Fleming's Left-Hand Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the diagram, position your left hand to find the force direction for different orientations of magnetic field and current.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='120' width='300' height='70' fill='#fffde7' stroke='#fbc02d' stroke-width='3'/><line x1='100' y1='160' x2='320' y2='160' stroke='#d32f2f' stroke-width='5' marker-end='url(#arr)' /><text x='210' y='145' font-family='Arial' font-size='14' text-anchor='middle' fill='#d32f2f'>Conductor (Current)</text><defs><marker id='arr' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto'><path d='M 0 0 L 10 5 L 0 10 z' fill='#1976d2'/></marker></defs><line x1='200' y1='210' x2='200' y2='70' stroke='#1976d2' stroke-width='5' marker-end='url(#arr)' /><text x='210' y='80' font-family='Arial' font-size='14' text-anchor='start' fill='#1976d2'>Magnetic Field</text><line x1='70' y1='200' x2='70' y2='100' stroke='#388e3c' stroke-width='5' marker-end='url(#arr)' /><text x='80' y='140' font-family='Arial' font-size='14' fill='#388e3c' transform='rotate(-90 80 140)'>Force</text></svg>",
    "workedExample": {
      "title": "Identify Force Direction from Diagram",
      "problem": "Magnetic field points up, current flows right along the conductor. Indicate the force direction (up/down/left/right).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Use Fleming's left-hand rule and state the force direction.",
          "answer": "out of the page",
          "feedback": "Try again. Remember thumb is force, first finger is magnetic field (up), second finger current (right). The force is perpendicular to both."
        },
        {
          "id": "q2",
          "prompt": "Try again: the force is perpendicular to both directions you set. What is the force direction?",
          "answer": "towards you",
          "feedback": "Correct! The force comes out of the page (towards the observer)."
        }
      ]
    }
  },
  "step5": {
    "title": "Review: Factors affecting Force Size - Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The magnitude of force on the conductor increases if the <span class=\"font-semibold\">_____</span> or the <span class=\"font-semibold\">_____</span> or the <span class=\"font-semibold\">_____</span> increases.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "current", "label": "Current strength", "isCorrect": true, "feedback": "Correct! Increasing current increases force."},
              {"value": "voltage", "label": "Voltage", "isCorrect": false, "feedback": "Incorrect. Voltage is not directly in the formula for force here."},
              {"value": "resistance", "label": "Resistance", "isCorrect": false, "feedback": "Incorrect. Resistance affects current but is indirect here."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "magneticField", "label": "Magnetic field strength", "isCorrect": true, "feedback": "Correct! Stronger magnetic field increases force."},
              {"value": "temperature", "label": "Temperature", "isCorrect": false, "feedback": "Incorrect. Temperature does not directly affect force here."}
            ]
          },
          {
            "id": "b3",
            "options": [
              {"value": "length", "label": "Length of conductor in the magnetic field", "isCorrect": true, "feedback": "Correct! A longer conductor in the field increases force."},
              {"value": "width", "label": "Width of conductor", "isCorrect": false, "feedback": "Incorrect. Width is not directly relevant here."}
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how you would determine the direction of the force on a current-carrying conductor placed in a magnetic field using Fleming's left-hand rule, and describe the factors that affect the magnitude of this force.</span>",
      "hint": "Remember to mention each finger’s representation and the key variables that influence force size.",
      "mustHaveKeywords": ["Fleming's left-hand rule", "thumb", "first finger", "second finger", "current", "magnetic field", "force", "current strength", "magnetic field strength", "length of conductor"],
      "optionalKeywords": ["motor effect", "right angle", "electric motor"],
      "modelAnswer": "<span>To find the direction of the force, use Fleming's left-hand rule by positioning your left hand so that the thumb points in the direction of the force (motion), the first finger points in the direction of the magnetic field, and the second finger points in the direction of the current. The force is at right angles to both magnetic field and current. The magnitude of the force depends on the strength of the current flowing through the conductor, the strength of the magnetic field, and the length of conductor that is within the magnetic field. This effect is known as the motor effect and is the principle behind electric motors.</span>",
      "scaffoldPrompts": [
        "First, describe how to position your left hand fingers and what each represents.",
        "Next, explain which physical quantities affect the force size.",
        "Finally, summarize why understanding this principle is important in real-world devices."
      ]
    }
  }
};