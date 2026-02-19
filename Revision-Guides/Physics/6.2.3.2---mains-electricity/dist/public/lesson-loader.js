window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.2.3.2 - Mains electricity",
  "strapline": "Understanding the nature of mains electricity and the roles of different wires in a three-pin plug.",
  "learningObjectives": [
    "Students should understand the differences between direct current (d.c.) and alternating current (a.c.) (Physics 6.2.3.2)",
    "Students should know that mains electricity is an a.c. supply with a frequency of 50 Hz and voltage of about 230 V (Physics 6.2.3.2)",
    "Students should understand the function of the live, neutral and earth wires in a three-pin plug, including appropriate fuse ratings (Physics 6.2.3.2)"
  ],
  "keyFormulas": [
    "Frequency (Hz) = Number of cycles per second",
    "Voltage of UK mains supply ≈ 230 V",
    "Frequency of UK mains supply = 50 Hz"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#e9f5ff' stroke='#0077cc' stroke-width='2'/><circle cx='120' cy='150' r='20' fill='#a00' /><text x='120' y='150' font-family='sans-serif' font-size='12' fill='#fff' text-anchor='middle' alignment-baseline='middle'>Live</text><circle cx='200' cy='150' r='20' fill='#00a050' /><text x='200' y='150' font-family='sans-serif' font-size='12' fill='#fff' text-anchor='middle' alignment-baseline='middle'>Neutral</text><circle cx='280' cy='150' r='20' fill='#999999' /><text x='280' y='150' font-family='sans-serif' font-size='12' fill='#fff' text-anchor='middle' alignment-baseline='middle'>Earth</text><line x1='120' y1='170' x2='120' y2='220' stroke='#a00' stroke-width='3'/><line x1='200' y1='170' x2='200' y2='220' stroke='#00a050' stroke-width='3'/><line x1='280' y1='170' x2='280' y2='220' stroke='#999999' stroke-width='3'/><rect x='80' y='220' width='200' height='50' fill='#ccc' stroke='#555' stroke-width='2' rx='10' ry='10'/><text x='180' y='250' font-family='sans-serif' font-size='14' fill='#333' text-anchor='middle'>3-Pin Plug Wiring</text></svg>",
  "step1": {
    "title": "Concept: Understanding Direct Current (d.c.)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct current (d.c.) is an electric current that flows in one direction only. This means the potential difference (voltage) remains constant and does not change polarity over time. Examples of d.c. power sources include batteries and cells.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a river flowing steadily in one direction. This constant flow is similar to d.c. where current moves continuously the same way.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying a d.c. source",
      "problem": "Identify whether the following is a d.c. or a.c. power source: a battery-powered torch.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the electric current from a battery flow in one direction only? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct. Battery current is direct current flowing in one constant direction."
        },
        {
          "id": "q2",
          "prompt": "Does the voltage from a battery change its polarity over time? (Yes/No)",
          "answer": "No",
          "feedback": "Correct. Battery voltage remains constant without changing polarity."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Alternating Current (a.c.)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Alternating current (a.c.) is an electric current which constantly changes direction. The potential difference alternates between positive and negative values following a pattern. UK mains electricity supplies a.c. for domestic use.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of ocean waves moving back and forth on the beach – this back and forth motion is like an alternating current which reverses direction repeatedly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Recognizing a.c.",
      "problem": "Is the electricity coming from a standard UK mains socket direct current or alternating current?",
      "questions": [
        {
          "id": "q3",
          "prompt": "Does mains electricity change its direction continuously? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct. UK mains electricity is alternating current."
        },
        {
          "id": "q4",
          "prompt": "Does the potential difference reverse polarity in mains electricity? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct. The voltage alternates between positive and negative in mains supply."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Frequency of Mains Electricity",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The frequency of an alternating current is the number of complete cycles the current undergoes per second. It is measured in Hertz (Hz). In the UK, mains electricity has a frequency of 50 Hz.</p><p>Since each cycle includes a change in direction twice (positive and negative), the current changes direction 100 times per second.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about a metronome ticking back and forth 50 times each second. Each back-and-forth stroke corresponds to one cycle of the mains current.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Direction Changes",
      "problem": "Given a mains frequency of 50 Hz, calculate how many times per second the current changes direction.",
      "questions": [
        {
          "id": "q5",
          "prompt": "What is the frequency in Hz (cycles per second)? Enter a number.",
          "answer": "50",
          "feedback": "Correct. UK mains frequency is 50 Hz."
        },
        {
          "id": "q6",
          "prompt": "How many direction changes occur per cycle? (Hint: current changes direction twice per cycle.)",
          "answer": "2",
          "feedback": "Correct. Each cycle includes 2 direction changes."
        },
        {
          "id": "q7",
          "prompt": "Calculate the total number of direction changes per second.",
          "answer": "100",
          "feedback": "Correct! 50 cycles x 2 direction changes = 100 changes per second."
        }
      ]
    }
  },
  "step4": {
    "title": "Function of Live, Neutral and Earth wires",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Live Wire</strong>: Carries current from the supply to the appliance, usually at about 230 V and is brown.<br><strong>Neutral Wire</strong>: Returns current back to the supply and is at (or close to) zero volts, usually blue.<br><strong>Earth Wire</strong>: Protects users by providing a safe path for fault current to flow to ground, preventing electric shock. It is green and yellow striped.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the live wire as the incoming highway, the neutral wire as the outgoing highway, and the earth wire as an emergency escape route.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Wire Functions",
      "problem": "Match the wire color to its function in a UK three-pin plug.",
      "questions": [
        {
          "id": "q8",
          "prompt": "Which wire carries the high voltage current into the appliance? (Brown/Blue/Green-yellow)",
          "answer": "Brown",
          "feedback": "Correct. The live wire is brown and carries current in."
        },
        {
          "id": "q9",
          "prompt": "Which wire carries current back to the source? (Brown/Blue/Green-yellow)",
          "answer": "Blue",
          "feedback": "Correct. The neutral wire is blue and completes the circuit."
        },
        {
          "id": "q10",
          "prompt": "Which wire is for protection and safety? (Brown/Blue/Green-yellow)",
          "answer": "Green-yellow",
          "feedback": "Correct. Earth wire is green/yellow and provides safety."
        }
      ]
    }
  },
  "step5": {
    "title": "Understanding Fuse Ratings in a Three-Pin Plug",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A fuse connected in the live wire prevents fires by breaking the circuit if too much current flows. Fuse ratings (e.g., 3 A, 5 A, 13 A) are chosen based on the appliance's power requirements. Using the correct fuse rating helps protect the appliance and wiring.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">A fuse is like a safety valve that cuts off flow when pressure is too high, preventing damage.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Choosing the Correct Fuse",
      "problem": "An appliance has a power rating of 600 W and is designed to be used with a 230 V mains supply. Choose the correct fuse rating.",
      "questions": [
        {
          "id": "q11",
          "prompt": "Calculate the current drawn by the appliance. Use I = P/V where P=power, V=voltage.",
          "answer": "2.61",
          "feedback": "Correct. I = 600 ÷ 230 ≈ 2.61 A."
        },
        {
          "id": "q12",
          "prompt": "Which fuse rating is suitable: 3 A, 5 A or 13 A? (Choose one)",
          "answer": "3 A",
          "feedback": "Correct. Fuse rating must be slightly above calculated current; 3 A is appropriate."
        }
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What type of current is supplied by UK mains electricity?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Direct current (d.c.)</span>",
            "isCorrect": false,
            "explanation": "Incorrect. UK mains electricity is alternating current, not direct current."
          },
          {
            "id": "b",
            "label": "<span>Alternating current (a.c.)</span>",
            "isCorrect": true,
            "explanation": "Correct! UK mains electricity supplies alternating current."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What is the standard frequency of mains electricity in the UK?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>50 Hz</span>",
            "isCorrect": true,
            "explanation": "Correct. UK mains electricity frequency is 50 Hz."
          },
          {
            "id": "b",
            "label": "<span>60 Hz</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 60 Hz is used in some other countries, but not in the UK."
          }
        ]
      },
      {
        "id": "mcq-3",
        "question": "<span>Which wire in a three-pin plug is connected to the fuse?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Live wire</span>",
            "isCorrect": true,
            "explanation": "Correct. The fuse is always in the live wire."
          },
          {
            "id": "b",
            "label": "<span>Neutral wire</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The fuse is not connected to the neutral wire."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> wire carries current into the appliance.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "live",
                "label": "live",
                "isCorrect": true,
                "feedback": "Correct! The live wire carries current into the appliance."
              },
              {
                "value": "neutral",
                "label": "neutral",
                "isCorrect": false,
                "feedback": "Try again. The neutral wire carries current away from the appliance."
              },
              {
                "value": "earth",
                "label": "earth",
                "isCorrect": false,
                "feedback": "Incorrect. The earth wire is for safety, not carrying current in normal operation."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>UK mains electricity has a frequency of <span class=\"font-semibold\">_____</span> Hz.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "50",
                "label": "50",
                "isCorrect": true,
                "feedback": "Correct! The frequency is 50 Hz."
              },
              {
                "value": "60",
                "label": "60",
                "isCorrect": false,
                "feedback": "Incorrect. 60 Hz is common in other countries, but not the UK."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain the differences between direct current (d.c.) and alternating current (a.c.), and describe the roles of live, neutral, and earth wires in a three-pin plug including the importance of the fuse rating.</span>",
      "hint": "Remember to include the definitions of d.c. and a.c., the frequency and voltage of UK mains, and the safety functions of plug wiring.",
      "mustHaveKeywords": [
        "direct current",
        "alternating current",
        "frequency 50 Hz",
        "230 volts",
        "live wire",
        "neutral wire",
        "earth wire",
        "fuse rating"
      ],
      "optionalKeywords": [
        "voltage polarity",
        "safety",
        "protection",
        "current direction"
      ],
      "modelAnswer": "<span>Direct current (d.c.) is an electric current that flows in only one direction with a constant voltage, for example from batteries. Alternating current (a.c.) changes direction continually and its voltage alternates between positive and negative values. UK mains electricity is alternating current with a frequency of 50 Hz and a voltage of about 230 volts. In a three-pin plug, the live wire (brown) carries current into the appliance and is connected through a fuse which protects the circuit by breaking if the current is too high. The neutral wire (blue) completes the circuit by carrying current away. The earth wire (green and yellow) is a safety wire that prevents electric shocks by directing fault current safely to the ground. Choosing the correct fuse rating ensures protection against electrical fires and damage.</span>",
      "scaffoldPrompts": [
        "Start by defining direct current and alternating current.",
        "Explain the frequency and voltage of UK mains electricity and how a.c. behaves.",
        "Describe each wire in the plug and its function.",
        "Explain the role of the fuse and why the rating matters."
      ]
    }
  }
};