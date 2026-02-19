window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.3.2.2 - Temperature changes in a system and specific heat capacity",
  "strapline": "Understanding how energy transfer affects temperature and how to calculate this using specific heat capacity.",
  "learningObjectives": [
    "Students should be able to calculate the amount of energy stored in or released from a system as its temperature changes using the equation: change in thermal energy = mass × specific heat capacity × temperature change (Physics 6.3.2.2)",
    "Students should be able to explain that the specific heat capacity of a substance is the amount of energy required to raise the temperature of one kilogram of the substance by one degree Celsius (Physics 6.3.2.2)",
    ""
  ],
  "keyFormulas": [
    "Change in thermal energy, ΔE = m × c × Δθ",
    "Where ΔE is in joules (J), m is mass in kilograms (kg), c is specific heat capacity in joules per kilogram per degree Celsius (J/kg°C), and Δθ is temperature change in degrees Celsius (°C)",
    "Reminder: Always check units and convert temperature if given in Kelvin"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#e0f7fa' stroke='#00796b' stroke-width='2'/><text x='200' y='90' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#004d40'><tspan x='200' dy='1.2em'>Specific Heat Capacity Concept</tspan></text><text x='100' y='150' font-family='sans-serif' font-size='14' fill='#004d40'>Mass (m)</text><circle cx='120' cy='160' r='15' fill='#004d40'/><text x='300' y='150' font-family='sans-serif' font-size='14' fill='#004d40'>Specific Heat Capacity (c)</text><rect x='280' y='145' width='30' height='30' fill='#004d40'/><text x='200' y='230' font-family='sans-serif' font-size='14' fill='#004d40'>Temperature Change (Δθ)</text><line x1='200' y1='240' x2='200' y2='270' stroke='#004d40' stroke-width='3' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto'><path d='M0 0 L10 5 L0 10 z' fill='#004d40'/></marker></defs></svg>",
  "step1": {
    "title": "Introduction to Specific Heat Capacity",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Specific heat capacity is the amount of energy required to raise the temperature of 1 kilogram of a substance by 1°C. Different materials need different amounts of energy due to their molecular structure.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of specific heat capacity like the 'thermal resistance' of a material. For example, water is like a big sponge soaking up heat slowly, while copper heats up quickly like a thin metal sheet.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Specific Heat Capacity",
      "problem": "What is the specific heat capacity of water if it requires 4200 J to raise 1 kg of water by 1°C?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How much energy is needed to raise 1 kg of water by 1°C?",
          "answer": "4200",
          "feedback": "Correct. 4200 J is needed for 1 kg for a 1°C increase."
        },
        {
          "id": "q2",
          "prompt": "What is the unit of specific heat capacity?",
          "answer": "J/kg°C",
          "feedback": "Correct. Joules per kilogram per degree Celsius is the unit."
        }
      ]
    }
  },
  "step2": {
    "title": "Calculating Change in Thermal Energy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The energy transferred to or from a substance due to temperature change is called the change in thermal energy (ΔE). Use the formula ΔE = m × c × Δθ, where m is mass, c is specific heat capacity, and Δθ is temperature change.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Thermal Energy Change",
      "problem": "Calculate the energy required to heat 2 kg of copper from 25°C to 75°C. Specific heat capacity of copper = 385 J/kg°C.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mass (m) in kg?",
          "answer": "2",
          "feedback": "Correct. The mass is 2 kg."
        },
        {
          "id": "q2",
          "prompt": "What is the specific heat capacity (c) of copper in J/kg°C?",
          "answer": "385",
          "feedback": "Correct. Copper's specific heat capacity is 385 J/kg°C."
        },
        {
          "id": "q3",
          "prompt": "Calculate the temperature change Δθ = final temperature - initial temperature.",
          "answer": "50",
          "feedback": "Correct. 75°C - 25°C = 50°C."
        },
        {
          "id": "q4",
          "prompt": "Calculate the change in thermal energy using ΔE = m × c × Δθ.",
          "answer": "38500",
          "feedback": "Correct. ΔE = 2 × 385 × 50 = 38500 J."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept Check: Temperature Change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Temperature change, Δθ, is the difference between the final and initial temperature of a substance. It can be positive (if heating) or negative (if cooling). The unit is degrees Celsius (°C) or Kelvin (K).</p>",
    "workedExample": {
      "title": "Worked Example: Determining Temperature Change",
      "problem": "A metal block cools from 150°C to 90°C. Calculate the temperature change.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the initial temperature?",
          "answer": "150",
          "feedback": "Correct. Initial temperature is 150°C."
        },
        {
          "id": "q2",
          "prompt": "What is the final temperature?",
          "answer": "90",
          "feedback": "Correct. Final temperature is 90°C."
        },
        {
          "id": "q3",
          "prompt": "Calculate Δθ = final - initial temperature.",
          "answer": "-60",
          "feedback": "Correct. Temperature change is -60°C, indicating cooling."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Practice: Calculate Energy Transfer",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Now practice calculating the energy transferred when heating or cooling substances by entering the values step-by-step.</p>",
    "workedExample": {
      "title": "Calculate Energy Transfer",
      "problem": "A 3 kg block of iron is heated from 20°C to 70°C. Specific heat capacity of iron is 450 J/kg°C. Calculate the energy gained by the block.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the mass of the iron block in kg:",
          "answer": "3",
          "feedback": "Correct, the mass is 3 kg."
        },
        {
          "id": "q2",
          "prompt": "Enter the specific heat capacity of iron (J/kg°C):",
          "answer": "450",
          "feedback": "Correct, specific heat capacity is 450 J/kg°C."
        },
        {
          "id": "q3",
          "prompt": "Calculate temperature change Δθ = final - initial temperature:",
          "answer": "50",
          "feedback": "Correct, temperature change is 50°C."
        },
        {
          "id": "q4",
          "prompt": "Calculate change in thermal energy ΔE = m × c × Δθ (in joules):",
          "answer": "67500",
          "feedback": "Correct. ΔE = 3 × 450 × 50 = 67500 J."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying Knowledge: Comparing Materials",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Different materials require different amounts of energy to raise their temperature. This affects heating and cooling rates.</p>",
    "workedExample": {
      "title": "Comparing Heating of Water and Copper",
      "problem": "Which requires more energy: heating 1 kg of water by 10°C or heating 1 kg of copper by 10°C?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the specific heat capacity of water (J/kg°C)?",
          "answer": "4200",
          "feedback": "Correct, water's is 4200 J/kg°C."
        },
        {
          "id": "q2",
          "prompt": "What is the specific heat capacity of copper (J/kg°C)?",
          "answer": "385",
          "feedback": "Correct, copper's is 385 J/kg°C."
        },
        {
          "id": "q3",
          "prompt": "Calculate energy to heat 1 kg of water by 10°C: ΔE = m × c × Δθ.",
          "answer": "42000",
          "feedback": "Correct, ΔE = 1 × 4200 × 10 = 42000 J."
        },
        {
          "id": "q4",
          "prompt": "Calculate energy to heat 1 kg of copper by 10°C: ΔE = m × c × Δθ.",
          "answer": "3850",
          "feedback": "Correct, ΔE = 1 × 385 × 10 = 3850 J."
        },
        {
          "id": "q5",
          "prompt": "Which requires more energy?",
          "answer": "water",
          "feedback": "Correct, water requires significantly more energy."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Calculate the energy required to raise the temperature of 5 kg of a substance with specific heat capacity 900 J/kg°C by 20°C. Also explain what specific heat capacity tells us about a material.</span>",
      "hint": "Remember to use the formula ΔE = m × c × Δθ, and define specific heat capacity clearly.",
      "mustHaveKeywords": ["specific heat capacity", "energy", "mass", "temperature change", "joules"],
      "optionalKeywords": ["material", "degrees Celsius", "heat transfer"],
      "modelAnswer": "<span>The energy required is calculated using ΔE = m × c × Δθ. Substituting values: ΔE = 5 kg × 900 J/kg°C × 20°C = 90000 J. Specific heat capacity is the amount of energy needed to raise the temperature of 1 kg of a substance by 1 degree Celsius. It indicates how much heat energy a material can store for a given temperature change.</span>",
      "scaffoldPrompts": ["Start by identifying the values: mass, specific heat capacity, and temperature change.", "Calculate the energy using the formula.", "Explain the meaning of specific heat capacity in your own words."]
    }
  }
};