window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.2.4.3 - The National Grid",
  "strapline": "Understanding how the National Grid transmits electricity efficiently using high voltages and transformers.",
  "learningObjectives": [
    "Students should understand that the National Grid is a system of cables and transformers linking power stations to consumers (Physics 6.2.4.3)",
    "Students should explain why high voltages are used to transmit electricity in the National Grid to reduce energy losses during transmission (Physics 6.2.4.3)",
    ""
  ],
  "keyFormulas": [
    "Power loss due to resistance: P = I² × R",
    "Relationship between voltage and current in transformers: Vp × Ip = Vs × Is",
    "Voltage change ratio in transformers: Vp / Vs = Np / Ns"
  ],
  "diagramHtml": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='130' width='80' height='40' fill='#4a90e2' stroke='#333' /><text x='50' y='155' font-family='sans-serif' font-size='12' fill='#fff' text-anchor='middle'>Power Station</text><line x1='90' y1='150' x2='150' y2='150' stroke='#333' stroke-width='3'/><rect x='150' y='120' width='50' height='60' fill='#f5a623' stroke='#333'/><text x='175' y='155' font-family='sans-serif' font-size='10' fill='#333' text-anchor='middle'>Step-up Transformer</text><line x1='200' y1='150' x2='320' y2='150' stroke='#333' stroke-width='4'/><line x1='320' y1='140' x2='320' y2='160' stroke='#333' stroke-width='4'/><line x1='320' y1='140' x2='360' y2='100' stroke='#333' stroke-width='2' stroke-dasharray='4 4'/><line x1='320' y1='160' x2='360' y2='200' stroke='#333' stroke-width='2' stroke-dasharray='4 4'/><rect x='360' y='120' width='50' height='60' fill='#f5a623' stroke='#333'/><text x='385' y='155' font-family='sans-serif' font-size='10' fill='#333' text-anchor='middle'>Step-down Transformer</text><line x1='410' y1='150' x2='470' y2='150' stroke='#333' stroke-width='3'/><rect x='470' y='130' width='80' height='40' fill='#7ed321' stroke='#333'/><text x='510' y='155' font-family='sans-serif' font-size='12' fill='#fff' text-anchor='middle'>Homes & Businesses</text></svg>",
  "step1": {
    "title": "Concept: What is the National Grid?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The National Grid is a nationwide network of high-voltage cables and transformers that distribute electrical energy from power stations to homes, businesses, and industries.</p><p>It ensures electricity generated at power stations reaches consumers reliably and safely across large distances.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the National Grid as a system of highways and rest stops: power stations are cities where electricity is produced, cables are the highways carrying traffic (electricity), and transformers are the rest stops where the voltage is adjusted for safe and efficient travel.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Components in the National Grid",
      "problem": "Look at the diagram of the National Grid. Identify and name the device that increases voltage before transmission and the device that decreases voltage before electricity reaches homes.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the name of the device that increases (steps-up) the voltage at the power station?",
          "answer": "Step-up transformer",
          "feedback": "Correct. The step-up transformer raises voltage for efficient transmission."
        },
        {
          "id": "q2",
          "prompt": "What device decreases (steps-down) the voltage near homes and businesses?",
          "answer": "Step-down transformer",
          "feedback": "Correct. The step-down transformer reduces voltage to safe levels for consumers."
        }
      ]
    }
  },
  "step2": {
    "title": "Why Use High Voltage? Understanding Energy Loss",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Electricity loses energy as heat in cables due to resistance. The power loss (P) is proportional to the square of the current (I): <strong>P = I<sup>2</sup> × R</strong>, where R is the resistance of the cables.</p><p>To reduce energy loss, the current through cables must be minimised.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine water flowing through a narrow pipe: the more water flowing, the harder it is to push and the more heat is generated. Increasing voltage in electricity is like increasing pressure to move the same energy with less flow (current).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Power Loss",
      "problem": "A cable has resistance 5Ω. Calculate the power loss when the current is 2A.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What formula relates power loss to current and resistance?",
          "answer": "P = I² × R",
          "feedback": "Correct. Power loss depends on the square of current and resistance."
        },
        {
          "id": "q2",
          "prompt": "Substitute I = 2A and R = 5Ω into the formula. What is P?",
          "answer": "20",
          "feedback": "Correct. P = 2² × 5 = 4 × 5 = 20 watts."
        }
      ]
    }
  },
  "step3": {
    "title": "How do Transformers help reduce Energy Loss?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Transformers change voltage and current levels without changing the power (ignoring losses). A <strong>step-up transformer</strong> increases voltage and decreases current before transmission, reducing energy loss.</p><p>Near consumers, a <strong>step-down transformer</strong> reduces voltage to safe levels.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Transformers act like gearboxes on a bicycle: stepping up voltage is like changing to a higher gear to cover distance faster with less effort (current), stepping down voltage is like changing to a lower gear for safe control near the destination.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Transformer Voltage Ratios",
      "problem": "A step-up transformer raises voltage from 25,000 V to 400,000 V. Calculate the ratio of the number of turns on the primary coil (N<sub>p</sub>) to the secondary coil (N<sub>s</sub>).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the transformer voltage ratio formula.",
          "answer": "Vp / Vs = Np / Ns",
          "feedback": "Correct. Voltage ratio equals turns ratio."
        },
        {
          "id": "q2",
          "prompt": "Calculate Np / Ns = 25000 / 400000. What is the ratio?",
          "answer": "0.0625",
          "feedback": "Correct. The primary coil has 6.25% the turns of the secondary coil."
        }
      ]
    }
  },
  "step4": {
    "title": "Multiple Choice Check: Transformers and the National Grid",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Why does the National Grid use changes in voltage to transmit electricity?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>To reduce current and therefore decrease energy lost as heat</span>",
            "isCorrect": true,
            "explanation": "Correct. High voltage reduces current, which reduces energy loss."
          },
          {
            "id": "b",
            "label": "<span>To increase current so energy is transmitted faster</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Increasing current would increase energy loss, not speed."
          },
          {
            "id": "c",
            "label": "<span>To keep the voltage the same for safety</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Voltage must be changed to transmit efficiently and safely."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Fill in the Blanks: Key Vocabulary",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> transformer increases voltage for transmission, and the <span class=\"font-semibold\">_____</span> transformer decreases voltage near consumers.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "step-up",
                "label": "step-up",
                "isCorrect": true,
                "feedback": "Correct! Step-up transformer increases voltage."
              },
              {
                "value": "step-down",
                "label": "step-down",
                "isCorrect": false,
                "feedback": "Try again. This transformer decreases voltage."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "step-down",
                "label": "step-down",
                "isCorrect": true,
                "feedback": "Correct! Step-down transformer decreases voltage."
              },
              {
                "value": "step-up",
                "label": "step-up",
                "isCorrect": false,
                "feedback": "Try again. This transformer increases voltage."
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
      "prompt": "<span>Explain how and why high voltages are used in the National Grid to reduce energy losses during electricity transmission.</span>",
      "hint": "Remember to discuss power loss formula P = I<sup>2</sup> × R, and how transformers adjust voltage and current.",
      "mustHaveKeywords": ["National Grid", "step-up transformer", "step-down transformer", "high voltage", "reduce current", "energy loss"],
      "optionalKeywords": ["power loss", "resistance", "transmission cables"],
      "modelAnswer": "<span>The National Grid uses a system of cables and transformers to transmit electricity from power stations to consumers. High voltages are achieved by step-up transformers which increase voltage and decrease current before electricity is sent through transmission cables. Since power loss due to resistance is proportional to the square of the current (P = I<sup>2</sup> × R), reducing current reduces energy lost as heat. Near homes and businesses, step-down transformers reduce the voltage to safe levels for use. This system ensures efficient and safe transmission of electrical power across long distances.</span>",
      "scaffoldPrompts": ["Describe what the National Grid is.", "Explain energy loss in cables and the role of current.", "Detail how step-up and step-down transformers change voltage and current.", "Conclude why high voltage transmission is beneficial."]
    }
  }
};