window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.5.2 - Conservation of momentum",
  "strapline": "Understanding momentum, the principle of conservation of momentum, and solving related collision problems.",
  "learningObjectives": [
    "Students should understand that momentum is defined as the product of mass and velocity and is measured in kilogram metres per second (kg m/s) (Physics 6.5.5.2)",
    "Students should understand that in a closed system the total momentum before a collision equals the total momentum after (conservation of momentum principle) (Physics 6.5.5.2)",
    "Students should be able to apply conservation of momentum to solve problems involving collisions between objects (Physics 6.5.5.2)"
  ],
  "keyFormulas": [
    "Momentum (p) = mass (m) × velocity (v)",
    "Conservation of Momentum: Total momentum before collision = Total momentum after collision",
    "Reminder: Make sure to keep units consistent and check direction of velocities"
  ],
  "diagramHtml": "<svg viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg'>  <rect x='20' y='80' width='60' height='40' fill='#4a90e2' stroke='#333' />  <text x='50' y='75' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#333'>Object A</text>  <line x1='80' y1='100' x2='140' y2='100' stroke='#000' stroke-width='3' marker-end='url(#arrowhead)' />  <text x='110' y='95' font-family='sans-serif' font-size='12' fill='#000'>v<sub>1</sub></text>  <rect x='140' y='80' width='60' height='40' fill='#d94e4e' stroke='#333' />  <text x='170' y='75' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#333'>Object B</text>  <line x1='200' y1='120' x2='260' y2='120' stroke='#000' stroke-width='3' marker-end='url(#arrowhead)' />  <text x='230' y='115' font-family='sans-serif' font-size='12' fill='#000'>v<sub>2</sub></text>  <defs>    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#000' />    </marker>  </defs></svg>",
  "step1": {
    "title": "Concept: What is Momentum?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Momentum is a quantity that shows how hard it is to stop a moving object. It depends on both the <strong>mass</strong> of the object and its <strong>velocity</strong>. The formula for momentum is <em>momentum = mass × velocity</em>, and it is measured in <strong>kilogram metres per second (kg m/s)</strong>.</p><p>For example, a large truck moving slowly can have the same momentum as a small car moving very fast.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing a heavy shopping trolley versus a light bicycle. The trolley is harder to stop because it has more momentum. This is because of its larger mass, even if both are moving at the same speed.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Momentum",
      "problem": "Let's calculate the momentum of an object step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the mass of the object in kilograms (kg):",
          "answer": "10",
          "feedback": "Good! The mass is 10 kg."
        },
        {
          "id": "q2",
          "prompt": "Enter the velocity of the object in metres per second (m/s):",
          "answer": "3",
          "feedback": "Correct, velocity is 3 m/s."
        },
        {
          "id": "q3",
          "prompt": "Calculate the momentum using p = m × v. What is the momentum in kg m/s?",
          "answer": "30",
          "feedback": "Well done! Momentum = 10 × 3 = 30 kg m/s."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Conservation of Momentum Principle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In a <strong>closed system</strong> where no external forces act, the total momentum before an event like a collision is exactly equal to the total momentum after the event. This is called the <em>conservation of momentum</em> principle.</p><p>This means momentum can be transferred between objects, but the total amount remains unchanged.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a game of billiards. When the cue ball strikes another ball, some of the cue ball's momentum is passed to the other ball. Though individual momenta of balls change, the total momentum before and after the collision stays the same.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Conservation",
      "problem": "Two objects are involved in a collision. Follow each step to analyze the momentum.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter mass of object 1 in kg:",
          "answer": "4",
          "feedback": "Mass of object 1 is 4 kg."
        },
        {
          "id": "q2",
          "prompt": "Enter initial velocity of object 1 in m/s (use positive for right):",
          "answer": "5",
          "feedback": "Object 1 initial velocity = 5 m/s."
        },
        {
          "id": "q3",
          "prompt": "Enter mass of object 2 in kg:",
          "answer": "2",
          "feedback": "Mass of object 2 is 2 kg."
        },
        {
          "id": "q4",
          "prompt": "Enter initial velocity of object 2 in m/s (use positive for right):",
          "answer": "-3",
          "feedback": "Object 2 initial velocity = -3 m/s (left)."
        },
        {
          "id": "q5",
          "prompt": "Calculate total momentum before collision (sum of momenta):",
          "answer": "14",
          "feedback": "Correct. Total momentum before = (4×5) + (2×-3) = 20 - 6 = 14 kg m/s."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Concept: What is a Closed System?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>closed system</strong> means no external forces (like friction or air resistance) act on the objects involved. This simplification allows us to apply the conservation of momentum easily.</p><p>While in reality forces often act, ignoring them helps us understand the core physics.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine playing billiards on a perfectly smooth, frictionless table in a vacuum. Under these ideal conditions, the system is closed and the conservation of momentum applies perfectly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Is This a Closed System?",
      "problem": "Decide if these scenarios describe a closed system.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Two ice skaters push off from each other on frictionless ice. Is this a closed system? (yes/no)",
          "answer": "yes",
          "feedback": "Correct. No external forces act; system is closed."
        },
        {
          "id": "q2",
          "prompt": "A car crashes on a road with friction and wind resistance. Is this a closed system? (yes/no)",
          "answer": "no",
          "feedback": "Right. External forces like friction and air resistance act here."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying Conservation of Momentum to Collisions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To solve collision problems, write the total momentum before collision and set it equal to total momentum after. Use the formula:</p><p><strong>m<sub>1</sub>v<sub>1i</sub> + m<sub>2</sub>v<sub>2i</sub> = m<sub>1</sub>v<sub>1f</sub> + m<sub>2</sub>v<sub>2f</sub></strong></p><p>where <em>i</em> stands for initial velocity and <em>f</em> for final velocity, and <em>m</em> is mass.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Unknown Velocity After Collision",
      "problem": "Two objects collide: object 1 has mass 3 kg, initial velocity 4 m/s; object 2 has mass 2 kg, initial velocity -1 m/s (opposite direction). Object 1 moves post-collision at 2 m/s. Find object 2's final velocity step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate total initial momentum: (3×4) + (2×-1) = ?",
          "answer": "10",
          "feedback": "Correct, total initial momentum = 10 kg m/s."
        },
        {
          "id": "q2",
          "prompt": "Calculate momentum of object 1 after collision: 3 × 2 = ?",
          "answer": "6",
          "feedback": "Exactly, object 1 momentum after collision is 6 kg m/s."
        },
        {
          "id": "q3",
          "prompt": "Using conservation, total final momentum = 10. Momentum of object 2 after collision = 10 - 6 = ?",
          "answer": "4",
          "feedback": "Good! Object 2’s momentum after collision is 4 kg m/s."
        },
        {
          "id": "q4",
          "prompt": "Find the final velocity of object 2: momentum / mass = 4 / 2 = ?",
          "answer": "2",
          "feedback": "Correct, object 2’s final velocity is 2 m/s."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the unit of momentum?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Newton (N)</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Newton is a unit of force, not momentum."
          },
          {
            "id": "b",
            "label": "<span>Kilogram metre per second (kg m/s)</span>",
            "isCorrect": true,
            "explanation": "Correct. Momentum is measured in kg m/s."
          },
          {
            "id": "c",
            "label": "<span>Joule (J)</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Joule is a unit of energy."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>In which system is the total momentum conserved during a collision?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Open system with external forces</span>",
            "isCorrect": false,
            "explanation": "Wrong. External forces mean momentum is not conserved."
          },
          {
            "id": "b",
            "label": "<span>Closed system with no external forces</span>",
            "isCorrect": true,
            "explanation": "Correct. Momentum is conserved in closed systems."
          },
          {
            "id": "c",
            "label": "<span>Any system with friction</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Friction is an external force."
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
        "sentence": "<span>The total <span class=\"font-semibold\">_____</span> before a collision in a closed system is always equal to the total <span class=\"font-semibold\">_____</span> after the collision.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "momentum",
                "label": "momentum",
                "isCorrect": true,
                "feedback": "Correct! The conservation of momentum means total momentum is constant."
              },
              {
                "value": "energy",
                "label": "energy",
                "isCorrect": false,
                "feedback": "Incorrect, this sentence refers specifically to momentum."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "momentum",
                "label": "momentum",
                "isCorrect": true,
                "feedback": "Well done! Total momentum before equals total momentum after."
              },
              {
                "value": "force",
                "label": "force",
                "isCorrect": false,
                "feedback": "Not correct. Conservation applies to momentum here."
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
      "prompt": "<span>Two ice skaters, one with a mass of 50 kg moving at 4 m/s to the right and the other with a mass of 70 kg standing still, push off each other on frictionless ice. Calculate the velocity of the second skater after the push, assuming the first skater moves at 2 m/s to the left afterwards.</span>",
      "hint": "Remember: total momentum before = total momentum after; consider direction with signs.",
      "mustHaveKeywords": ["conservation of momentum", "momentum before equals momentum after", "velocity", "mass"],
      "optionalKeywords": ["closed system", "frictionless ice", "sign convention"],
      "modelAnswer": "<span>First calculate total initial momentum (only the first skater is moving): p_initial = 50×4 + 70×0 = 200 kg m/s. After push, first skater moves left at 2 m/s, so p1_final = 50 × (-2) = -100 kg m/s. Let velocity of second skater be v m/s. Applying conservation: 200 = -100 + 70 × v. Solve for v: 70v = 300 ⇒ v = 300/70 ≈ 4.29 m/s to the right.</span>",
      "scaffoldPrompts": [
        "Calculate total momentum before the push.",
        "Determine momentum of first skater after push using direction.",
        "Set up equation using conservation of momentum.",
        "Solve for velocity of second skater."
      ]
    }
  }
};