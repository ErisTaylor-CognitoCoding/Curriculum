window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.3.3.1 - Particle motion in gases",
  "strapline": "Explore how gas particles move randomly, how their kinetic energy relates to temperature, and how this motion causes pressure on container walls.",
  "learningObjectives": [
    "Students should understand that the molecules of a gas are in constant random motion and that the temperature of the gas is related to the average kinetic energy of the molecules (Physics 6.3.3.1)",
    "Students should understand that changing the temperature of a gas, held at constant volume, changes the pressure exerted by the gas (Physics 6.3.3.1)",
    "Students should explain how molecules in a gas have random motion and that they exert a force and hence a pressure on the walls of a container (Physics 6.3.3.1)"
  ],
  "keyFormulas": [
    "Pressure exerted by gas ∝ frequency and force of particle collisions",
    "Average kinetic energy ∝ temperature (in kelvin)",
    "Kinetic energy of one particle: KE = 0.5 × m × v²"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#eaf4ff' stroke='#004080' stroke-width='2'/><circle cx='60' cy='60' r='8' fill='#0077cc'/><circle cx='110' cy='110' r='8' fill='#0055aa'/><circle cx='150' cy='70' r='8' fill='#003377'/><circle cx='200' cy='160' r='8' fill='#004c99'/><circle cx='280' cy='100' r='8' fill='#0077cc'/><circle cx='320' cy='60' r='8' fill='#0055aa'/><path stroke='#003366' stroke-width='2' fill='none' d='M60 60 l20 15 m-10 -10 l30 20 m-15 -10 l25 15 m-10 -10 l35 25'/><text x='200' y='290' font-family='Arial' font-size='16' fill='#004080' text-anchor='middle'>Random motion of gas particles inside a container</text></svg>",
  "step1": {
    "title": "Concept: Random Motion of Gas Particles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Gas molecules move constantly in <strong>random directions</strong> with various speeds. They collide with each other and the walls of their container unpredictably. This <em>random motion</em> explains why gases expand to fill their containers.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a busy crowd in a large hall where people walk in all directions, bumping into each other and the walls. The unpredictable paths of each person represent gas particles' random motion.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Visualizing Random Motion",
      "problem": "Consider a sealed box filled with gas particles shown as dots moving randomly. What factors affect how fast particles move on average?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What increases the average speed of gas particles?",
          "answer": "temperature",
          "feedback": "Correct. Higher temperature means more kinetic energy and faster particle motion."
        },
        {
          "id": "q2",
          "prompt": "Do particles move in fixed paths or random directions?",
          "answer": "random directions",
          "feedback": "Yes, particles move unpredictably in all directions."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Gas Pressure",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Pressure in gases is caused by the <strong>force of collisions</strong> of particles against the walls of their container. More frequent and harder collisions increase the pressure exerted.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like raindrops hitting a windowpane, each hit creates a tiny force. The combined effect of many raindrop hits is the pressure you feel on the glass.</p>"
    },
    "workedExample": {
      "title": "Worked Example: What Affects Gas Pressure?",
      "problem": "If the number of gas particles in a container stays the same, but temperature increases, what happens to the pressure?",
      "questions": [
        {
          "id": "q3",
          "prompt": "Does pressure increase, decrease or stay the same when temperature rises at constant volume?",
          "answer": "increase",
          "feedback": "Correct. Higher temperature means particles move faster, collide more forcefully, so pressure rises."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Kinetic Energy and Temperature",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Kinetic energy</strong> is the energy particles have because of their motion. The average kinetic energy of gas particles is directly proportional to the <em>absolute temperature</em> (in kelvin).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of children running in a playground. On a cold day, they run slowly (low energy). On a warm day, they run faster (high energy).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate kinetic energy of a gas particle",
      "problem": "Calculate the kinetic energy of a nitrogen molecule (mass = 4.65 × 10⁻²⁶ kg) moving at 500 m/s.",
      "questions": [
        {
          "id": "q4",
          "prompt": "Input the mass of the molecule in kg:",
          "answer": "4.65e-26",
          "feedback": "Correct."
        },
        {
          "id": "q5",
          "prompt": "Input the velocity in m/s:",
          "answer": "500",
          "feedback": "Correct."
        },
        {
          "id": "q6",
          "prompt": "Use the formula KE = 0.5 × m × v². Calculate KE (in joules):",
          "answer": "5.81e-21",
          "feedback": "Well done! KE = 0.5 × 4.65e-26 × 500² = 5.81e-21 J."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Why do gas particles exert pressure on the walls of a container?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Because they are stationary and push constantly</span>",
            "isCorrect": false,
            "explanation": "Incorrect—gas particles are not stationary; they are always moving."
          },
          {
            "id": "b",
            "label": "<span>Because their random collisions with the container walls exert force</span>",
            "isCorrect": true,
            "explanation": "Correct! Pressure comes from collisions transferring force to the container walls."
          },
          {
            "id": "c",
            "label": "<span>Because gravity pulls them against the walls</span>",
            "isCorrect": false,
            "explanation": "Incorrect—gas pressure is not caused by gravity."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What happens to the average kinetic energy of gas particles if the temperature is doubled (in kelvin)?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>It halves</span>",
            "isCorrect": false,
            "explanation": "Incorrect, kinetic energy is proportional to temperature, so it should increase."
          },
          {
            "id": "b",
            "label": "<span>It doubles</span>",
            "isCorrect": true,
            "explanation": "Correct! Average kinetic energy is directly proportional to temperature in kelvin."
          },
          {
            "id": "c",
            "label": "<span>It stays the same</span>",
            "isCorrect": false,
            "explanation": "Incorrect—kinetic energy changes with temperature."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of gas particles refers to their unpredictable and continuous movement in all directions.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "random motion",
                "label": "random motion",
                "isCorrect": true,
                "feedback": "Correct! Gas particles move randomly."
              },
              {
                "value": "linear motion",
                "label": "linear motion",
                "isCorrect": false,
                "feedback": "Incorrect, gas particles do not move in straight predictable lines."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The force gas particles exert on the container walls per unit area is called <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "pressure",
                "label": "pressure",
                "isCorrect": true,
                "feedback": "Correct! This is the definition of gas pressure."
              },
              {
                "value": "temperature",
                "label": "temperature",
                "isCorrect": false,
                "feedback": "Incorrect, temperature is related to kinetic energy, not force per area."
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
      "prompt": "<span>Explain how the temperature of a gas affects the pressure it exerts when the volume is kept constant.</span>",
      "hint": "Remember to link temperature with particle speed, collisions, and force on container walls.",
      "mustHaveKeywords": ["temperature", "kinetic energy", "pressure", "collisions", "constant volume"],
      "optionalKeywords": ["average speed", "force", "container walls"],
      "modelAnswer": "<span>When the temperature of a gas increases at constant volume, the average kinetic energy of the gas molecules increases, causing them to move faster. Because the molecules move faster, they collide more frequently and with greater force against the container walls. These more frequent and harder collisions increase the pressure exerted by the gas on the walls of the container. Conversely, if the temperature decreases, the average kinetic energy and speed of the molecules decrease, causing less forceful collisions and lower pressure.</span>",
      "scaffoldPrompts": [
        "Start by defining the relationship between temperature and kinetic energy.",
        "Then describe how increased kinetic energy affects particle speed.",
        "Explain how particle speed affects collision frequency and force.",
        "Conclude with how this changes pressure at constant volume."
      ]
    }
  }
};