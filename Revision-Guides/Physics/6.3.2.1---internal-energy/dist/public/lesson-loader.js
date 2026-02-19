window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.3.2.1 - Internal energy",
  "strapline": "Understanding how internal energy changes during physical state changes and the conservation of mass in reversible physical changes.",
  "learningObjectives": [
    "Students should be able to describe how, when substances change state, mass is conserved and that changes of state are physical changes which differ from chemical changes because the material recovers its original properties if the change is reversed (Physics 6.3.2.1)",
    "Students should be able to explain the changes in internal energy during changes of state and that these physical changes do not involve changes in temperature (Physics 6.3.2.1)",
    "Students should be able to define internal energy as the total kinetic energy and potential energy of all the particles (atoms and molecules) that make up a system (Physics 6.3.2.1)"
  ],
  "keyFormulas": [
    "Internal Energy (U) = Total Kinetic Energy + Total Potential Energy of particles",
    "Mass before change = Mass after change (Conservation of Mass)",
    "During state change: ΔTemperature = 0, ΔInternal Energy ≠ 0"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='50' y='20' width='100' height='80' fill='#6ca0dc' stroke='#333' />  <text x='100' y='60' font-family='sans-serif' font-size='14' fill='#fff' text-anchor='middle'>Solid</text>  <circle cx='250' cy='60' r='40' fill='#f6a623' stroke='#333' />  <text x='250' y='65' font-family='sans-serif' font-size='14' fill='#fff' text-anchor='middle'>Liquid</text>  <ellipse cx='150' cy='200' rx='100' ry='40' fill='#e24a42' stroke='#333' />  <text x='150' y='205' font-family='sans-serif' font-size='14' fill='#fff' text-anchor='middle'>Gas</text>  <line x1='150' y1='100' x2='200' y2='160' stroke='#333' stroke-width='2' marker-end='url(#arrow)'/>  <line x1='200' y1='160' x2='150' y2='100' stroke='#333' stroke-width='2' marker-end='url(#arrow)'/>  <defs>    <marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto-start-reverse'>      <path d='M0,0 L10,5 L0,10 z' fill='#333'/>    </marker>  </defs>  <text x='230' y='130' font-family='sans-serif' font-size='10' fill='#333'>Melt / Freeze</text>  <text x='100' y='180' font-family='sans-serif' font-size='10' fill='#333'>Vaporize / Condense</text></svg>",
  "step1": {
    "title": "Concept: What is Internal Energy?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Internal energy is the total kinetic energy (movement energy) and potential energy (energy stored in the bonds between particles) of all particles in a system. When a substance is heated, its internal energy increases as particles move faster and their bonds store more energy.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a crowd of people dancing. The faster they move, the more kinetic energy the crowd has. Also, how tightly they hold hands is like potential energy stored in bonds.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Understanding Internal Energy",
      "problem": "A solid block is heated. Let's break down what happens to its particles’ energy.",
      "questions": [
        {
          "id": "q1",
          "prompt": "When heated, do the particles' speed increase or decrease?",
          "answer": "increase",
          "feedback": "Correct, the kinetic energy increases as particles move faster."
        },
        {
          "id": "q2",
          "prompt": "Does internal energy only include kinetic energy, or also potential energy stored between particles?",
          "answer": "also potential energy",
          "feedback": "Yes, internal energy includes both kinetic and potential energy."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Changes of State Are Physical Changes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a substance changes state (solid, liquid, gas), its mass stays the same. These changes are physical because the substance can return to its original state and properties without any new substances forming.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like melting and refreezing ice cubes: no new substance is created, and the original water properties remain.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Mass Conservation in State Change",
      "problem": "An ice cube melts to water. Let's check what happens to mass.",
      "questions": [
        {
          "id": "q1",
          "prompt": "If the ice mass is 50g before melting, what is the water mass after melting?",
          "answer": "50g",
          "feedback": "Correct, mass is conserved during physical state changes."
        }
      ]
    }
  },
  "step3": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following best describes a change of state?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Mass is conserved and the change is reversible</span>",
            "isCorrect": true,
            "explanation": "Correct! Physical changes keep mass the same and are reversible."
          },
          {
            "id": "b",
            "label": "<span>Mass changes and new substances form</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Chemical changes involve mass changes and new substances."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>During a change of state, what happens to the temperature?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>It remains constant</span>",
            "isCorrect": true,
            "explanation": "Correct, the temperature stays the same during the state change."
          },
          {
            "id": "b",
            "label": "<span>It increases continuously</span>",
            "isCorrect": false,
            "explanation": "Incorrect, the temperature only rises before or after the change of state."
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Energy Changes During State Changes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Energy transferred to a substance during melting or boiling is used to break bonds between particles (increasing potential energy), not to increase temperature or particle speed. During freezing or condensation, energy is released as bonds form.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like paying money (energy) to loosen chains (bonds) so people can move more freely. The amount spent doesn’t make people run faster but frees them.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Temperature During Boiling",
      "problem": "Water is heated from 20°C to 100°C and then boiled.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What happens to temperature during boiling at 100°C?",
          "answer": "stays constant",
          "feedback": "Correct! Temperature remains constant though energy is added."
        },
        {
          "id": "q2",
          "prompt": "What does the added energy do during boiling?",
          "answer": "break bonds",
          "feedback": "Yes, energy breaks intermolecular bonds to change state."
        }
      ]
    }
  },
  "step5": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> energy is the energy due to particle motion, and <span class=\"font-semibold\">_____</span> energy is the energy stored between particles.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "kinetic",
                "label": "kinetic",
                "isCorrect": true,
                "feedback": "Correct! Kinetic energy relates to motion."
              },
              {
                "value": "potential",
                "label": "potential",
                "isCorrect": false,
                "feedback": "Try again. This term refers to stored energy."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "potential",
                "label": "potential",
                "isCorrect": true,
                "feedback": "Correct! Potential energy is stored in bonds."
              },
              {
                "value": "kinetic",
                "label": "kinetic",
                "isCorrect": false,
                "feedback": "Try again. This is energy of motion."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>During a change of state, the substance's <span class=\"font-semibold\">_____</span> remains constant while <span class=\"font-semibold\">_____</span> energy changes.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "temperature",
                "label": "temperature",
                "isCorrect": true,
                "feedback": "Correct! Temperature stays the same during the state change."
              },
              {
                "value": "mass",
                "label": "mass",
                "isCorrect": false,
                "feedback": "Try again. Mass is conserved but this term is about heat."
              }
            ]
          },
          {
            "id": "b4",
            "options": [
              {
                "value": "potential",
                "label": "potential",
                "isCorrect": true,
                "feedback": "Correct! Potential energy changes as bonds break/form."
              },
              {
                "value": "kinetic",
                "label": "kinetic",
                "isCorrect": false,
                "feedback": "Try again. Kinetic energy relates to temperature."
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
      "prompt": "<span>Explain the changes in internal energy of a substance during a change of state, and why the temperature does not change during this process.</span>",
      "hint": "Remember to mention kinetic and potential energy and the role of breaking/forming bonds.",
      "mustHaveKeywords": ["internal energy", "kinetic energy", "potential energy", "temperature constant", "breaking bonds", "forming bonds", "physical change"],
      "optionalKeywords": ["reversible", "mass conserved", "particles"],
      "modelAnswer": "<span>Internal energy is the sum of the kinetic and potential energy of particles. During a change of state, energy is used to break or form bonds between particles, which changes the potential energy. The kinetic energy—and therefore the temperature—remains constant since the particles do not move faster or slower on average. This process is a physical change where mass is conserved and the substance keeps its properties, making the change reversible.</span>",
      "scaffoldPrompts": [
        "Start by defining internal energy.",
        "Describe what happens to kinetic energy during the change of state.",
        "Explain the role of potential energy related to bonds.",
        "Clarify why temperature does not change even though energy is transferred.",
        "Mention that this is a physical change and mass is conserved."
      ]
    }
  }
};