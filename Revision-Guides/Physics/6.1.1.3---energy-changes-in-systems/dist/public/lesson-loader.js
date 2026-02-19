window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.1.1.3 - Energy changes in systems",
  "strapline": "Understanding how energy is stored, transferred, and transformed within systems, including power calculations.",
  "learningObjectives": [
    "Students should be able to describe all the changes involved in the way energy is stored when a system changes, for common situations (Physics 6.1.1.3)",
    "Students should be able to calculate the changes in energy involved when a system is changed by heating, work done by forces, and work done when a current flows (Physics 6.1.1.3)",
    "Students should be able to define power as the rate of energy transfer and calculate power using P = E/t and P = W/t (Physics 6.1.1.3)"
  ],
  "keyFormulas": [
    "P = E / t (Power as energy transferred per unit time)",
    "P = W / t (Power as work done per unit time)",
    "ΔE = Q (Change in energy due to heating)",
    "E = F × d (Work done by a force)",
    "E = V × I × t (Energy transferred by an electric current)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='20' y='20' width='160' height='100' fill='#b3d9ff' stroke='#00529b' stroke-width='2'/>  <text x='100' y='50' text-anchor='middle' font-family='Arial' font-size='14' fill='#003366'>Energy Store</text>  <text x='100' y='70' text-anchor='middle' font-family='Arial' font-size='12' fill='#003366'>Kinetic, Gravitational, Thermal</text>  <line x1='180' y1='70' x2='280' y2='70' stroke='#00529b' stroke-width='2' marker-end='url(#arrowhead)'/>  <rect x='280' y='20' width='100' height='100' fill='#ffd6a5' stroke='#b35900' stroke-width='2'/>  <text x='330' y='50' text-anchor='middle' font-family='Arial' font-size='14' fill='#663300'>Energy Transfer</text>  <text x='330' y='70' text-anchor='middle' font-family='Arial' font-size='12' fill='#663300'>Mechanically, Electrically, Heating, Radiation</text>  <defs>  <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>    <polygon points='0 0, 10 3.5, 0 7' fill='#00529b'/>  </marker>  </defs></svg>",
  "step1": {
    "title": "Concept 1: Energy Stores",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Energy in a system can be stored in various forms including <strong>kinetic</strong> (due to movement), <strong>gravitational potential</strong> (due to height), <strong>elastic potential</strong> (when objects are stretched or compressed), <strong>chemical</strong> (stored in fuels or food), <strong>thermal</strong> (internal energy related to temperature), and <em>nuclear</em> stores (energy in atomic nuclei).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of energy stores like different types of batteries: a moving car has kinetic energy battery charged; a stretched spring holds elastic potential energy like a compressed spring battery.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Energy Stores",
      "problem": "A ball at the top of a hill, a stretched bow, and a flowing electric current each contain energy. Identify the type of energy store present in each case.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What type of energy store does the ball at the top of the hill have?",
          "answer": "Gravitational potential",
          "feedback": "Correct! Its energy is due to its height above the ground."
        },
        {
          "id": "q2",
          "prompt": "What type of energy store does the stretched bow have?",
          "answer": "Elastic potential",
          "feedback": "Correct! The bow stores energy in its stretched elastic material."
        },
        {
          "id": "q3",
          "prompt": "What energy store is present in the flowing electric current?",
          "answer": "Electrical energy (part of kinetic store of charges)",
          "feedback": "Correct! The moving charges carry electrical energy."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Energy Transfer Pathways",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Energy is transferred from one store to another via four main pathways: <strong>mechanically</strong> (forces doing work), <strong>electrically</strong> (by electric currents), <strong>heating</strong> (thermal energy transfer), and <strong>radiation</strong> (such as light or sound waves transferring energy).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine energy transfer like different ways to pass a ball: by pushing it (mechanically), throwing a charged ball along wires (electrically), warming a friend by a fire (heating), or shining a flashlight (radiation).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Energy Transfer Type",
      "problem": "Match each scenario to the correct energy transfer pathway: 1) Pedal powering a bicycle, 2) Current heating a filament lamp, 3) Sun warming your skin, 4) Sound from a speaker.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the energy transfer when pedaling a bicycle?",
          "answer": "Mechanically",
          "feedback": "Correct! Muscles apply force creating mechanical work."
        },
        {
          "id": "q2",
          "prompt": "What about the current heating the filament lamp?",
          "answer": "Electrically",
          "feedback": "Correct! Electrical energy is transformed by current flow."
        },
        {
          "id": "q3",
          "prompt": "The sun warming your skin is energy transferred by?",
          "answer": "Radiation",
          "feedback": "Correct! Energy travels as electromagnetic radiation."
        },
        {
          "id": "q4",
          "prompt": "Sound from a speaker transfers energy by?",
          "answer": "Radiation",
          "feedback": "Correct! Vibrations carry energy as sound waves (a type of radiation)."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Energy Dissipation and Conservation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When energy transfers occur, some energy is always dissipated — spread out as thermal energy to the surroundings making energy less useful. <em>However, the total energy in the system and surroundings remains constant</em>, following the law of conservation of energy.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of energy like water in pipes: some water leaks (dissipates) but it doesn’t disappear; just spreads elsewhere.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Energy Dissipation in a Moving Car",
      "problem": "A car moving at a constant speed loses some kinetic energy due to friction. What happens to the lost energy?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Where does the lost kinetic energy go?",
          "answer": "It is dissipated as thermal energy (heat) due to friction.",
          "feedback": "Correct! Friction converts some kinetic energy into heat."
        },
        {
          "id": "q2",
          "prompt": "Does this break the conservation of energy law?",
          "answer": "No",
          "feedback": "Correct! The total energy is conserved as it dissipates to the surroundings."
        }
      ]
    }
  },
  "step4": {
    "title": "Calculating Energy Changes: Heating",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Energy transferred by heating can be calculated using <strong>ΔE = Q</strong>, where <em>Q</em> is the heat energy supplied to or from the system.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of heating a pan of water: energy transferred to the water raises its thermal energy store.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Energy from Heating",
      "problem": "A kettle supplies 3000 J of energy to boil water. Enter the energy supplied.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the heat energy supplied (in joules):",
          "answer": "3000",
          "feedback": "Correct! 3000 J of energy is supplied by heating."
        }
      ]
    }
  },
  "step5": {
    "title": "Calculating Energy Changes: Work Done by Forces",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Work done by a force transfers energy and can be calculated using <strong>E = F × d</strong>, where <em>F</em> is the force applied and <em>d</em> is the distance moved in the direction of the force.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Pushing a box across the floor transfers energy mechanically as work.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Work Done",
      "problem": "A person pushes a box with a force of 50 N over a distance of 4 m. Enter the values to find the energy transferred.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the applied force (N):",
          "answer": "50",
          "feedback": "Correct! The force applied is 50 N."
        },
        {
          "id": "q2",
          "prompt": "Enter the distance moved (m):",
          "answer": "4",
          "feedback": "Correct! The box moves 4 m."
        },
        {
          "id": "q3",
          "prompt": "Calculate the work done (energy transferred) in joules:",
          "answer": "200",
          "feedback": "Correct! Work done = 50 N × 4 m = 200 J."
        }
      ]
    }
  },
  "step6": {
    "title": "Calculating Energy Changes: Electrical Work and Power",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Energy transferred by electric current can be calculated with <strong>E = V × I × t</strong>, where <em>V</em> is voltage, <em>I</em> is current, and <em>t</em> is time. Power is the rate of energy transfer, given by <strong>P = E / t</strong> or <strong>P = W / t</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of electrical energy like water flow: voltage is pressure, current is flow rate, time is how long the tap is open.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Electrical Energy and Power",
      "problem": "An electric heater uses 12 A current at 230 V for 10 seconds. Calculate the energy transferred and power.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter current (A):",
          "answer": "12",
          "feedback": "Correct! Current is 12 A."
        },
        {
          "id": "q2",
          "prompt": "Enter voltage (V):",
          "answer": "230",
          "feedback": "Correct! Voltage is 230 V."
        },
        {
          "id": "q3",
          "prompt": "Enter time (s):",
          "answer": "10",
          "feedback": "Correct! Time is 10 s."
        },
        {
          "id": "q4",
          "prompt": "Calculate energy transferred (E = V × I × t) in joules:",
          "answer": "27600",
          "feedback": "Correct! E = 230 × 12 × 10 = 27,600 J."
        },
        {
          "id": "q5",
          "prompt": "Calculate power (P = E / t) in watts:",
          "answer": "2760",
          "feedback": "Correct! P = 27,600 / 10 = 2760 W."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is NOT an energy store?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Kinetic energy</span>",
            "isCorrect": false,
            "explanation": "Kinetic energy is a valid energy store related to motion."
          },
          {
            "id": "b",
            "label": "<span>Gravitational potential energy</span>",
            "isCorrect": false,
            "explanation": "Gravitational potential energy is an energy store due to height."
          },
          {
            "id": "c",
            "label": "<span>Heat energy lost</span>",
            "isCorrect": true,
            "explanation": "Heat energy lost is energy transferred/dissipated, not a store."
          },
          {
            "id": "d",
            "label": "<span>Chemical energy</span>",
            "isCorrect": false,
            "explanation": "Chemical energy is stored energy in substances."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Energy transfer mechanically occurs when:</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>A force does work by moving an object</span>",
            "isCorrect": true,
            "explanation": "Correct! Mechanical energy transfer involves forces doing work."
          },
          {
            "id": "b",
            "label": "<span>A current flows through a wire</span>",
            "isCorrect": false,
            "explanation": "This is electrical energy transfer."
          },
          {
            "id": "c",
            "label": "<span>Light heats a surface</span>",
            "isCorrect": false,
            "explanation": "This is energy transfer by radiation."
          },
          {
            "id": "d",
            "label": "<span>Thermal conduction through a solid</span>",
            "isCorrect": false,
            "explanation": "This is energy transfer by heating."
          }
        ]
      },
      {
        "id": "mcq-3",
        "question": "<span>Power is defined as:</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Energy transferred per unit time</span>",
            "isCorrect": true,
            "explanation": "Yes, that is the correct definition."
          },
          {
            "id": "b",
            "label": "<span>Work done multiplied by time</span>",
            "isCorrect": false,
            "explanation": "No, power is work divided by time."
          },
          {
            "id": "c",
            "label": "<span>Force multiplied by distance</span>",
            "isCorrect": false,
            "explanation": "This calculates work done, not power."
          },
          {
            "id": "d",
            "label": "<span>Current multiplied by voltage</span>",
            "isCorrect": false,
            "explanation": "This gives power only if multiplied by time appropriately."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>Energy can be stored in different ways, including <span class=\"font-semibold\">_____</span> (due to height) and <span class=\"font-semibold\">_____</span> (due to motion).</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "kinetic",
                "label": "Kinetic",
                "isCorrect": false,
                "feedback": "No, kinetic is energy due to motion, not height."
              },
              {
                "value": "gravitational potential",
                "label": "Gravitational potential",
                "isCorrect": true,
                "feedback": "Correct! This is energy stored due to height."
              },
              {
                "value": "thermal",
                "label": "Thermal",
                "isCorrect": false,
                "feedback": "Incorrect: thermal relates to temperature, not height."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "gravitational potential",
                "label": "Gravitational potential",
                "isCorrect": false,
                "feedback": "No, this is energy stored due to height, not motion."
              },
              {
                "value": "kinetic",
                "label": "Kinetic",
                "isCorrect": true,
                "feedback": "Correct! Kinetic energy is due to motion."
              },
              {
                "value": "elastic potential",
                "label": "Elastic potential",
                "isCorrect": false,
                "feedback": "Elastic potential energy is stored in stretched/compressed materials."
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how energy is stored and transferred when a cyclist pedals uphill, including how to calculate the power output if the cyclist delivers 500 J of energy in 5 seconds.</span>",
      "hint": "Remember to describe energy stores involved, energy pathways for transfer, energy dissipation, and use the formula <strong>P = E / t</strong> for power calculation.",
      "mustHaveKeywords": ["kinetic energy", "gravitational potential energy", "mechanical transfer", "energy dissipation", "power", "formula P = E / t"],
      "optionalKeywords": ["friction", "thermal energy", "energy conservation"],
      "modelAnswer": "<span>When a cyclist pedals uphill, chemical energy stored in muscles is transferred mechanically to the bike, increasing its kinetic energy as it moves and gravitational potential energy as it gains height. Some energy is dissipated as thermal energy due to friction in the bike's moving parts and air resistance. The power output of the cyclist can be calculated using P = E / t, so with 500 J of energy transferred in 5 seconds, power is 500 / 5 = 100 W. Energy is conserved overall, though some energy becomes less useful due to dissipation.</span>",
      "scaffoldPrompts": ["Identify the initial and final energy stores involved.", "Describe how energy is transferred as the cyclist pedals.", "Explain energy dissipation occurring in the system.", "Use the formula for power to calculate the output based on energy and time."]
    }
  }
};