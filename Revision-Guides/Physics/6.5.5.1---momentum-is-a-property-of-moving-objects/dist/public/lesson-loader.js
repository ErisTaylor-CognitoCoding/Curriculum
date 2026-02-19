window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.5.1 - Momentum is a property of moving objects",
  "strapline": "Understanding momentum, its calculation, conservation in closed systems, and applications to collisions.",
  "learningObjectives": [
    "Students should understand that momentum is defined as the product of mass and velocity (p = mv) and is measured in kilogram metres per second (kg m/s) (Physics 6.5.5.1)",
    "Students should understand the principle of conservation of momentum in a closed system, where total momentum before an interaction equals total momentum after (Physics 6.5.5.1)",
    "Students should be able to apply momentum concepts to solve problems involving collisions and interactions between objects (Physics 6.5.5.1)"
  ],
  "keyFormulas": [
    "Momentum formula: p = mv, where p is momentum (kg m/s), m is mass (kg), and v is velocity (m/s).",
    "Conservation of momentum: total momentum before = total momentum after, in a closed system.",
    "Reminder: Always keep consistency in units (kg for mass, m/s for velocity)."
  ],
  "diagramHtml": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='120' width='150' height='60' fill='#8ecae6' stroke='#023047' stroke-width='3'/><text x='85' y='150' font-family='sans-serif' font-size='18' fill='#023047' text-anchor='middle'>Mass m</text><line x1='160' y1='150' x2='300' y2='150' stroke='#219ebc' stroke-width='4' marker-end='url(#arrow)'/><text x='230' y='140' font-family='sans-serif' font-size='18' fill='#219ebc' text-anchor='middle'>Velocity v</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#219ebc'/></marker></defs><text x='250' y='260' font-family='sans-serif' font-size='20' fill='#023047'>Momentum p = m × v</text></svg>",
  "step1": {
    "title": "Concept: What is Momentum?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Momentum is a measure of how much motion an object has. It depends on two things: the object's mass and its velocity. The greater the mass or velocity, the more momentum the object has.</p><p class=\"text-sm leading-6 text-muted-foreground\">The formula to calculate momentum is <strong>p = mv</strong>, where <em>p</em> is momentum, <em>m</em> is mass, and <em>v</em> is velocity.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a shopping trolley. If it's empty and you push it slowly, it has little momentum. But if it's full of heavy bags and you push it fast, it has a lot more momentum and is harder to stop.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Momentum",
      "problem": "Calculate the momentum of a 10 kg object moving at 3 m/s.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mass (m) of the object in kg?",
          "answer": "10",
          "feedback": "Correct. The mass given is 10 kg."
        },
        {
          "id": "q2",
          "prompt": "What is the velocity (v) of the object in m/s?",
          "answer": "3",
          "feedback": "Correct. The velocity given is 3 m/s."
        },
        {
          "id": "q3",
          "prompt": "Using p = mv, calculate the momentum (p).",
          "answer": "30",
          "feedback": "Correct. Momentum p = 10 × 3 = 30 kg m/s."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Conservation of Momentum",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two or more objects interact in a closed system, the total momentum before the interaction equals the total momentum after the interaction. This is called the <strong>conservation of momentum</strong>.</p><p class=\"text-sm leading-6 text-muted-foreground\">No momentum is lost; it just transfers between the objects involved.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a game of pool (billiards). When the cue ball hits another ball, its speed decreases, but the other ball starts moving. The total momentum of both balls together stays the same.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Momentum Conservation in a Collision",
      "problem": "Two objects collide in a closed system: Object A has a momentum of 20 kg m/s before collision, Object B has a momentum of 10 kg m/s. What is the total momentum after the collision?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the total momentum before the collision?",
          "answer": "30",
          "feedback": "Correct. 20 + 10 = 30 kg m/s."
        },
        {
          "id": "q2",
          "prompt": "Using conservation of momentum, what is the total momentum after the collision?",
          "answer": "30",
          "feedback": "Correct. Total momentum is conserved, so it remains 30 kg m/s."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Closed Systems",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>closed system</strong> is one where no external forces act on the objects involved. This is important for momentum conservation because if outside forces are present, momentum may change.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine ice skaters pushing off each other on smooth ice (very little friction). They are roughly a closed system and momentum is conserved as they push apart.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying a Closed System",
      "problem": "Is a collision between two cars on a road a closed system? Explain briefly.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are external forces like friction present during the collision?",
          "answer": "Yes",
          "feedback": "Correct. Friction from the road and air resistance act as external forces."
        },
        {
          "id": "q2",
          "prompt": "Based on your answer, is this a perfectly closed system?",
          "answer": "No",
          "feedback": "Correct. Because external forces are present, it is not a perfectly closed system."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying Momentum to Collisions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In collisions, momentum is transferred between the objects involved. By knowing masses and velocities before or after, we can calculate missing values using conservation of momentum.</p>",
    "diagramHtml": "<svg viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='100' width='80' height='50' fill='#fb8500' stroke='#ffb703' stroke-width='3'/><text x='100' y='135' font-family='sans-serif' font-size='16' fill='black' text-anchor='middle'>m1</text><line x1='140' y1='125' x2='260' y2='125' stroke='#219ebc' marker-end='url(#arrow)' stroke-width='4'/><text x='200' y='115' font-family='sans-serif' font-size='16' fill='#219ebc' text-anchor='middle'>v1</text><rect x='260' y='100' width='80' height='50' fill='#219ebc' stroke='#023047' stroke-width='3'/><text x='300' y='135' font-family='sans-serif' font-size='16' fill='white' text-anchor='middle'>m2</text><line x1='100' y1='80' x2='100' y2='30' stroke='#023047' stroke-width='3'/><line x1='300' y1='80' x2='300' y2='30' stroke='#023047' stroke-width='3'/><text x='200' y='20' font-family='sans-serif' font-size='18' fill='#023047' text-anchor='middle'>Before collision</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#219ebc'/></marker></defs></svg>",
    "workedExample": {
      "title": "Worked Example: Finding Velocity after Collision",
      "problem": "Object A (mass 5 kg) moves at 3 m/s towards stationary object B (mass 3 kg). After collision, object A moves at 1 m/s. Find the velocity of object B after collision.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate initial momentum of object A before collision (p = mv).",
          "answer": "15",
          "feedback": "Correct. 5 × 3 = 15 kg m/s."
        },
        {
          "id": "q2",
          "prompt": "Calculate momentum of object A after collision (mass × new velocity).",
          "answer": "5",
          "feedback": "Correct. 5 × 1 = 5 kg m/s."
        },
        {
          "id": "q3",
          "prompt": "What is the total momentum before (object A + object B)?",
          "answer": "15",
          "feedback": "Correct. Object B is stationary before collision, so total momentum is 15."
        },
        {
          "id": "q4",
          "prompt": "Apply conservation of momentum: Total momentum after collision = Total before. What is momentum of object B after collision?",
          "answer": "10",
          "feedback": "Correct. 15 (total before) - 5 (A after) = 10 kg m/s for B."
        },
        {
          "id": "q5",
          "prompt": "Calculate velocity of object B after collision (p = mv => v = p/m).",
          "answer": "3.33",
          "feedback": "Correct. Velocity = 10 / 3 = 3.33 m/s."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following best defines momentum?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Mass multiplied by velocity</span>",
            "isCorrect": true,
            "explanation": "Correct. Momentum is defined as mass times velocity."
          },
          {
            "id": "b",
            "label": "<span>Mass multiplied by acceleration</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Momentum involves velocity, not acceleration."
          },
          {
            "id": "c",
            "label": "<span>Velocity divided by mass</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Momentum is a product, not a division."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>In a closed system, after two objects collide, the total momentum is:</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Greater than before the collision</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Momentum is conserved, so it does not increase."
          },
          {
            "id": "b",
            "label": "<span>Equal to the total momentum before the collision</span>",
            "isCorrect": true,
            "explanation": "Correct. Conservation of momentum means total momentum remains the same."
          },
          {
            "id": "c",
            "label": "<span>Less than before the collision</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Momentum does not decrease in a closed system."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of an object is calculated by multiplying its mass by its velocity.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "momentum",
                "label": "Momentum",
                "isCorrect": true,
                "feedback": "Correct! Momentum = mass × velocity."
              },
              {
                "value": "acceleration",
                "label": "Acceleration",
                "isCorrect": false,
                "feedback": "Incorrect. Acceleration is the rate of change of velocity."
              },
              {
                "value": "force",
                "label": "Force",
                "isCorrect": false,
                "feedback": "Incorrect. Force relates to mass and acceleration."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>In a <span class=\"font-semibold\">_____</span> system, the total momentum before and after an interaction remains constant.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "closed",
                "label": "Closed",
                "isCorrect": true,
                "feedback": "Correct! Momentum is conserved in closed systems."
              },
              {
                "value": "open",
                "label": "Open",
                "isCorrect": false,
                "feedback": "Incorrect. External forces can act in open systems, so momentum is not necessarily conserved."
              },
              {
                "value": "violent",
                "label": "Violent",
                "isCorrect": false,
                "feedback": "Incorrect. 'Violent' is unrelated terminology here."
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
      "prompt": "<span>A 4 kg cart moving at 6 m/s collides with a 6 kg cart initially at rest on a frictionless track. After the collision, the 4 kg cart moves at 2 m/s. Calculate the velocity of the 6 kg cart after the collision.</span>",
      "hint": "Use conservation of momentum: total momentum before collision equals total momentum after collision. Calculate initial momentum, then find the missing velocity step-by-step.",
      "mustHaveKeywords": ["momentum", "conservation of momentum", "velocity", "mass", "collision"],
      "optionalKeywords": ["closed system", "frictionless track"],
      "modelAnswer": "<span>First, calculate initial momentum: p_initial = m1 × v1 + m2 × v2 = 4 × 6 + 6 × 0 = 24 kg m/s.<br>After collision, p_final = m1 × v1' + m2 × v2' = 4 × 2 + 6 × v2'.<br>Set p_initial = p_final: 24 = 8 + 6 × v2'.<br>Rearranged: 6 × v2' = 16 => v2' = 16 / 6 = 2.67 m/s.<br>The 6 kg cart moves at 2.67 m/s after collision.</span>",
      "scaffoldPrompts": [
        "Calculate the initial momentum of both carts before collision.",
        "Write the expression for total momentum after collision using given variables.",
        "Set total initial momentum equal to total final momentum.",
        "Solve for the unknown velocity of the second cart."
      ]
    }
  }
};