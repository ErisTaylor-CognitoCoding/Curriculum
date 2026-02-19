window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.3.2.3 - Changes of state and specific latent heat",
  "strapline": "Explore how substances absorb or release energy during temperature changes and when changing state, focusing on specific heat capacity and specific latent heat.",
  "learningObjectives": [
    "Students should be able to use the equation for specific heat capacity to calculate temperature changes in systems (Physics 6.3.2.3)",
    "Students should be able to use the equation for specific latent heat to calculate the energy required for substances to change state without changing temperature (Physics 6.3.2.3)",
    "Students should be able to distinguish between specific latent heat of fusion and specific latent heat of vaporisation (Physics 6.3.2.3)"
  ],
  "keyFormulas": [
    "Q = mcΔT (Energy transferred = mass × specific heat capacity × temperature change)",
    "Q = mL (Energy required for change of state = mass × specific latent heat)",
    "Reminder: Ensure units of mass (kg), temperature (°C), and energy (Joules) are consistent"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#e0f7fa' stroke='#00796b' stroke-width='3'/><text x='200' y='90' text-anchor='middle' font-family='sans-serif' font-size='20' fill='#004d40'>Heating Curve of Water</text><line x1='100' y1='230' x2='280' y2='230' stroke='#00796b' stroke-width='4'/><line x1='100' y1='230' x2='100' y2='80' stroke='#00796b' stroke-width='4'/><text x='95' y='75' font-family='sans-serif' font-size='14' fill='#004d40'>T (°C)</text><text x='290' y='235' font-family='sans-serif' font-size='14' fill='#004d40'>Time</text><polyline points='100,230 150,180 150,140 210,140 210,100 280,100' stroke='#00796b' stroke-width='3' fill='none'/><circle cx='150' cy='180' r='5' fill='#004d40'/><circle cx='150' cy='140' r='5' fill='#004d40'/><circle cx='210' cy='140' r='5' fill='#004d40'/><circle cx='210' cy='100' r='5' fill='#004d40'/><text x='120' y='170' font-family='sans-serif' font-size='12' fill='#004d40'>Melting Point</text><text x='220' y='130' font-family='sans-serif' font-size='12' fill='#004d40'>Boiling Point</text></svg>",
  "step1": {
    "title": "Concept: Specific Heat Capacity",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Specific heat capacity is the amount of energy needed to raise the temperature of 1 kilogram of a substance by 1°C. Different materials need different amounts of energy, which is why water heats up slower than metal.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of heating water and metal pans on a stove. The metal pan heats up quickly because it has a low specific heat capacity, while the water takes longer due to its higher specific heat capacity.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Temperature Change",
      "problem": "Calculate how much energy is needed to raise the temperature of 2 kg of water by 10°C. (Specific heat capacity of water = 4200 J/kg°C)",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mass (m) of the water in kg?",
          "answer": "2",
          "feedback": "Correct, the mass is 2 kg."
        },
        {
          "id": "q2",
          "prompt": "What is the temperature change (ΔT) in °C?",
          "answer": "10",
          "feedback": "Correct, the temperature change is 10°C."
        },
        {
          "id": "q3",
          "prompt": "What is the specific heat capacity (c) of water in J/kg°C?",
          "answer": "4200",
          "feedback": "Correct, the specific heat capacity is 4200 J/kg°C."
        },
        {
          "id": "q4",
          "prompt": "Using Q = mcΔT, calculate the energy (Q) required in Joules.",
          "answer": "84000",
          "feedback": "Correct! Q = 2 × 4200 × 10 = 84000 J."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Change of State",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A change of state occurs when a substance changes between solid, liquid, and gas. During melting, boiling, or freezing, energy is absorbed or released but the temperature remains constant because the energy goes into breaking or forming bonds.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine ice melting in your hand. The temperature doesn’t change until all the ice melts, even though heat is being absorbed.</p>"
    }
  },
  "step3": {
    "title": "Key Concept: Specific Latent Heat",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Specific latent heat is the amount of energy needed to change 1 kg of a substance from one state to another without changing its temperature. This energy breaks or forms the bonds between particles during state changes.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Energy for Melting",
      "problem": "How much energy is needed to melt 0.5 kg of ice? (Specific latent heat of fusion for ice = 334,000 J/kg)",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mass (m) of the ice in kg?",
          "answer": "0.5",
          "feedback": "Correct, mass is 0.5 kg."
        },
        {
          "id": "q2",
          "prompt": "What is the specific latent heat of fusion (L) for ice in J/kg?",
          "answer": "334000",
          "feedback": "Correct, it is 334,000 J/kg."
        },
        {
          "id": "q3",
          "prompt": "Calculate the energy (Q) required to melt the ice using Q = mL.",
          "answer": "167000",
          "feedback": "Correct! Q = 0.5 × 334,000 = 167,000 J."
        }
      ]
    }
  },
  "step4": {
    "title": "Distinguish: Latent Heat of Fusion vs Vaporisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Latent heat of fusion</strong> is the energy needed to change a substance between solid and liquid states. <strong>Latent heat of vaporisation</strong> is the energy needed to change between liquid and gas states. Both occur at constant temperature but require different amounts of energy.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of melting ice to water (fusion) versus boiling water to steam (vaporisation). Boiling requires much more energy due to stronger bonds between liquid and gas particles.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing Energies",
      "problem": "Calculate the energy required to boil 1 kg of water. (Specific latent heat of vaporisation = 2,260,000 J/kg)",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mass (m) in kg?",
          "answer": "1",
          "feedback": "Correct, mass is 1 kg."
        },
        {
          "id": "q2",
          "prompt": "What is the specific latent heat of vaporisation (L) in J/kg?",
          "answer": "2260000",
          "feedback": "Correct, it is 2,260,000 J/kg."
        },
        {
          "id": "q3",
          "prompt": "Calculate the energy (Q) required to boil the water using Q = mL.",
          "answer": "2260000",
          "feedback": "Correct! Q = 1 × 2,260,000 = 2,260,000 J."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>During which process does energy get absorbed but temperature stays the same?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Heating a liquid</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The temperature would increase during heating."
          },
          {
            "id": "b",
            "label": "<span>Melting ice</span>",
            "isCorrect": true,
            "explanation": "Correct. During melting, energy is absorbed but temperature remains constant."
          },
          {
            "id": "c",
            "label": "<span>Cooling a gas</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The temperature decreases when cooling a gas."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What does specific latent heat measure?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Energy to raise temperature of 1 kg by 1°C</span>",
            "isCorrect": false,
            "explanation": "Incorrect, that is specific heat capacity."
          },
          {
            "id": "b",
            "label": "<span>Energy to change state of 1 kg without temperature change</span>",
            "isCorrect": true,
            "explanation": "Correct! It measures energy required to change state at constant temperature."
          },
          {
            "id": "c",
            "label": "<span>Energy lost during cooling</span>",
            "isCorrect": false,
            "explanation": "Incorrect, this is not specific latent heat."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A 3 kg block of ice at 0°C is heated until it becomes water at 20°C. Calculate the total energy required to melt the ice and then heat the resulting water. (Specific latent heat of fusion = 334,000 J/kg, Specific heat capacity of water = 4200 J/kg°C)</span>",
      "hint": "Remember to calculate the energy for melting first, then the energy for heating the water, and add the two results.",
      "mustHaveKeywords": ["latent heat of fusion", "specific heat capacity", "energy", "temperature change"],
      "optionalKeywords": ["mass", "joules", "melting point", "final temperature"],
      "modelAnswer": "<span>First, calculate the energy to melt ice using Q = mL = 3 × 334,000 = 1,002,000 J. Then calculate energy to heat water using Q = mcΔT = 3 × 4200 × 20 = 252,000 J. Total energy required = 1,002,000 + 252,000 = 1,254,000 J.</span>",
      "scaffoldPrompts": [
        "Calculate energy to melt the ice using the latent heat of fusion.",
        "Calculate energy to raise temperature of melted water using specific heat capacity.",
        "Add both energy amounts for total energy required."
      ]
    }
  }
};