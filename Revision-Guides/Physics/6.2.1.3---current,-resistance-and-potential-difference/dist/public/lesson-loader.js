window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.2.1.3 - Current, resistance and potential difference",
  "strapline": "Understanding the flow of electric charge, how voltage drives current, and how resistance affects circuit behavior.",
  "learningObjectives": [
    "Students should understand that electric current is a flow of electrical charge and is measured in amperes (A) (Physics 6.2.1.3)",
    "Students should understand the relationship between current, resistance and potential difference, and be able to apply Ohm's law (V = IR) to calculate these quantities in electrical circuits (Physics 6.2.1.3)",
    "Students should understand how resistance affects current flow for a given potential difference (Physics 6.2.1.3)"
  ],
  "keyFormulas": [
    "Ohm's Law: V = IR",
    "Current: I = Q / t (Current equals charge divided by time)",
    "Resistance Units: 1 ohm (Ω) = 1 volt per ampere"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='100' width='360' height='40' fill='#e0f7fa' stroke='#00796b' stroke-width='3' rx='8' ry='8'/><circle cx='60' cy='120' r='10' fill='#004d40'/><line x1='70' y1='120' x2='180' y2='120' stroke='#004d40' stroke-width='4' marker-end='url(#arrow)'/><rect x='180' y='105' width='80' height='30' fill='#b2dfdb' stroke='#004d40'/><line x1='260' y1='120' x2='340' y2='120' stroke='#004d40' stroke-width='4' marker-end='url(#arrow)'/><circle cx='340' cy='120' r='10' fill='#004d40'/><defs><marker id='arrow' markerWidth='8' markerHeight='8' refX='5' refY='4' orient='auto'><path d='M0,0 L8,4 L0,8 L2,4 z' fill='#004d40'/></marker></defs><text x='100' y='95' font-family='Arial' font-size='14' fill='#004d40'>Battery (Voltage source)</text><text x='190' y='120' font-family='Arial' font-size='14' fill='#004d40'>Resistor (Resistance)</text><text x='10' y='140' font-family='Arial' font-size='14' fill='#004d40'>Current flows this way</text></svg>",
  "step1": {
    "title": "Concept: What is Electric Current?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Electric current is the flow of electrical charge through a conductor, like a wire. It is measured in amperes (A). One ampere means one coulomb of charge passes a point every second.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine water flowing through a pipe. The amount of water flowing past a point in the pipe per second is like the electric current in a wire.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Current from Charge and Time",
      "problem": "Calculate the current if 12 coulombs of charge flow through a conductor in 4 seconds.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What formula relates current (I), charge (Q), and time (t)?",
          "answer": "I = Q / t",
          "feedback": "Correct! Current equals charge divided by time."
        },
        {
          "id": "q2",
          "prompt": "Input the charge Q (in coulombs):",
          "answer": "12",
          "feedback": "Correct, 12 C."
        },
        {
          "id": "q3",
          "prompt": "Input the time t (in seconds):",
          "answer": "4",
          "feedback": "Correct, 4 s."
        },
        {
          "id": "q4",
          "prompt": "Calculate the current I (in amperes):",
          "answer": "3",
          "feedback": "Correct! I = 12 C / 4 s = 3 A."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: What is Potential Difference?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Potential difference, or voltage, is the energy transferred per unit charge between two points in a circuit. It is the push that drives current through the circuit and is measured in volts (V).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the pressure pushing water through a pipe. Voltage is like that pressure pushing electrical charges around a circuit.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Voltage in a Circuit",
      "problem": "If a battery provides 9 volts, what does it mean for the charges in the circuit?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the unit of potential difference?",
          "answer": "V",
          "feedback": "Correct! Potential difference is measured in volts (V)."
        },
        {
          "id": "q2",
          "prompt": "What does a 9 V battery do to charges in a circuit?",
          "answer": "Pushes them with energy",
          "feedback": "Correct! It transfers energy to charges, causing current to flow."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: What is Resistance?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Resistance is the opposition to current flow in a conductor. It is measured in ohms (Ω). A higher resistance means it is harder for current to flow through the conductor.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine narrowing the pipe in a water system. The narrower the pipe, the harder it is for water to flow. This is like resistance in an electrical circuit.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Resistance in Circuits",
      "problem": "A wire has a resistance of 5 Ω. What effect does this have on the current if voltage is constant?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does higher resistance increase or decrease current for a fixed voltage?",
          "answer": "Decrease",
          "feedback": "Correct! More resistance means less current flows."
        },
        {
          "id": "q2",
          "prompt": "If voltage is fixed at 10 V, and resistance is 5 Ω, which law relates these values?",
          "answer": "Ohm's law",
          "feedback": "Correct! Ohm’s law connects voltage, current, and resistance."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying Ohm's Law (V = IR)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Ohm's law states: voltage (V) equals current (I) times resistance (R). This lets us calculate any one quantity if the other two are known.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Voltage from Current and Resistance",
      "problem": "Calculate voltage if current is 2 A and resistance is 4 Ω.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Input the current I in amperes:",
          "answer": "2",
          "feedback": "Correct. Current is 2 A."
        },
        {
          "id": "q2",
          "prompt": "Input the resistance R in ohms:",
          "answer": "4",
          "feedback": "Correct. Resistance is 4 Ω."
        },
        {
          "id": "q3",
          "prompt": "Calculate voltage V = I × R:",
          "answer": "8",
          "feedback": "Correct! Voltage is 8 volts."
        }
      ]
    }
  },
  "step5": {
    "title": "Worked Example: Calculating Current from Voltage and Resistance",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using Ohm's law, current I = V / R.</p>",
    "workedExample": {
      "title": "Calculate Current",
      "problem": "Find current if voltage is 12 V and resistance is 6 Ω.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Input the voltage V in volts:",
          "answer": "12",
          "feedback": "Correct. Voltage is 12 V."
        },
        {
          "id": "q2",
          "prompt": "Input the resistance R in ohms:",
          "answer": "6",
          "feedback": "Correct. Resistance is 6 Ω."
        },
        {
          "id": "q3",
          "prompt": "Calculate current I = V / R:",
          "answer": "2",
          "feedback": "Correct! Current is 2 A."
        }
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which one correctly describes resistance?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Resistance increases current flow in a circuit.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Resistance opposes current flow, so it decreases current."
          },
          {
            "id": "b",
            "label": "<span>Resistance opposes current flow and is measured in ohms (Ω).</span>",
            "isCorrect": true,
            "explanation": "Correct! Resistance opposes current and is measured in ohms."
          },
          {
            "id": "c",
            "label": "<span>Resistance is the energy transferred per unit charge.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That describes potential difference (voltage), not resistance."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the energy transferred per unit charge in a circuit.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "voltage",
                "label": "Voltage",
                "isCorrect": true,
                "feedback": "Correct! Voltage is potential difference measured in volts."
              },
              {
                "value": "current",
                "label": "Current",
                "isCorrect": false,
                "feedback": "No, current is the flow of charge, not energy transferred."
              },
              {
                "value": "resistance",
                "label": "Resistance",
                "isCorrect": false,
                "feedback": "No, resistance opposes current, it is not energy transfer."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Electric <span class=\"font-semibold\">_____</span> is the flow of charge through a conductor.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "current",
                "label": "Current",
                "isCorrect": true,
                "feedback": "Correct! Current is the flow of electrical charge."
              },
              {
                "value": "voltage",
                "label": "Voltage",
                "isCorrect": false,
                "feedback": "No, voltage is potential difference, not flow of charge."
              },
              {
                "value": "resistance",
                "label": "Resistance",
                "isCorrect": false,
                "feedback": "No, resistance opposes current flow."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Worked Example: Resistance Affecting Current",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let’s explore how resistance affects current when voltage is kept constant.</p>",
    "workedExample": {
      "title": "Calculating Current with Different Resistances",
      "problem": "Given a constant voltage of 10 V, calculate the current for resistances of 2 Ω, 5 Ω, and 10 Ω.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate current I when R = 2 Ω (I = V / R):",
          "answer": "5",
          "feedback": "Correct! I = 10 V / 2 Ω = 5 A."
        },
        {
          "id": "q2",
          "prompt": "Calculate current I when R = 5 Ω:",
          "answer": "2",
          "feedback": "Correct! I = 10 V / 5 Ω = 2 A."
        },
        {
          "id": "q3",
          "prompt": "Calculate current I when R = 10 Ω:",
          "answer": "1",
          "feedback": "Correct! I = 10 V / 10 Ω = 1 A."
        },
        {
          "id": "q4",
          "prompt": "How does increasing resistance affect current for the same voltage?",
          "answer": "Current decreases",
          "feedback": "Correct! Higher resistance reduces current flow."
        }
      ]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain the relationship between current, resistance, and potential difference in an electrical circuit and describe how changing the resistance affects the current flow.</span>",
      "hint": "Remember to include Ohm's law (V = IR) and discuss the effect of resistance on current when voltage is constant.",
      "mustHaveKeywords": ["Ohm's law", "current", "resistance", "potential difference", "voltage", "decreases", "increases"],
      "optionalKeywords": ["energy transfer", "electrons", "opposition", "conductors"],
      "modelAnswer": "<span>Ohm's law shows that the potential difference (voltage) across a conductor is equal to the product of the current flowing through it and its resistance (V = IR). Current is the flow of electric charge measured in amperes, resistance is the opposition to this flow measured in ohms, and potential difference is the energy transferred per unit charge in volts. For a fixed voltage, if resistance increases, the current decreases because it is harder for charges to flow. Conversely, if resistance decreases, current increases. This relationship is fundamental in understanding and designing electrical circuits.</span>",
      "scaffoldPrompts": [
        "Start by defining current, resistance, and potential difference.",
        "State Ohm’s law and explain the formula V = IR.",
        "Describe how current changes if resistance increases while voltage stays constant."
      ]
    }
  }
};