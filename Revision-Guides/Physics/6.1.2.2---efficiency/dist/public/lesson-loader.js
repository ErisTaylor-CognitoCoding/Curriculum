window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.1.2.2 - Efficiency",
  "strapline": "Understanding how to calculate efficiency as the ratio of useful energy output to total energy input and why energy transfers are never 100% efficient.",
  "learningObjectives": [
    "Students should learn how to calculate the proportion of useful energy output compared to total energy input, understanding that no energy transfer is 100% efficient due to energy being dissipated to the surroundings, often as heat (Physics 6.1.2.2)",
    "Students should apply efficiency calculations using both energy values and power values, expressing efficiency as either a decimal or percentage (Physics 6.1.2.2)"
  ],
  "keyFormulas": [
    "Efficiency = (Useful energy output / Total energy input)",
    "Efficiency = (Useful power output / Total power input)",
    "Efficiency can be expressed as a decimal or a percentage (Multiply decimal by 100 to get %)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='30' y='50' width='140' height='100' fill='#e0f7fa' stroke='#00796b' stroke-width='3'/>\n  <text x='100' y='45' font-family='Arial' font-size='16' text-anchor='middle' fill='#00796b'>Energy Input</text>\n  <rect x='230' y='50' width='140' height='100' fill='#fff3e0' stroke='#f57c00' stroke-width='3'/>\n  <text x='300' y='45' font-family='Arial' font-size='16' text-anchor='middle' fill='#f57c00'>Useful Energy Output</text>\n  <line x1='170' y1='100' x2='230' y2='100' stroke='#00796b' stroke-width='6' stroke-linecap='round'/>\n  <text x='200' y='90' font-family='Arial' font-size='14' fill='#00796b' text-anchor='middle'>Energy Transfer</text>\n  <text x='200' y='130' font-family='Arial' font-size='12' fill='#bf360c' text-anchor='middle'>Wasted energy as heat</text>\n  <line x1='160' y1='150' x2='210' y2='150' stroke='#bf360c' stroke-width='4' stroke-dasharray='6 6' />\n  <polygon points='210,140 220,150 210,160' fill='#bf360c' />\n</svg>",
  "step1": {
    "title": "Concept: What is Efficiency?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Efficiency measures how well a device converts the input energy into useful output energy. Since energy can never be created or destroyed but only transferred, some energy is always lost to the surroundings, usually as heat. Therefore, efficiency is always less than 100%.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a bucket being filled with water (energy input). The useful energy is like water collected without spilling. Some water spills out (wasted energy). The efficiency is the amount of water kept compared to the total poured in.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Efficiency",
      "problem": "A device receives <strong>100 J</strong> of energy input and produces <strong>60 J</strong> of useful energy output. Calculate its efficiency.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the total energy input (J)?",
          "answer": "100",
          "feedback": "Correct. The total energy input is 100 J."
        },
        {
          "id": "q2",
          "prompt": "What is the useful energy output (J)?",
          "answer": "60",
          "feedback": "Correct. The useful energy output is 60 J."
        },
        {
          "id": "q3",
          "prompt": "Calculate efficiency using Efficiency = Useful output / Total input",
          "answer": "0.6",
          "feedback": "Correct. Efficiency as a decimal is 0.6."
        },
        {
          "id": "q4",
          "prompt": "Express the efficiency as a percentage.",
          "answer": "60",
          "feedback": "Correct. Multiplying 0.6 by 100 gives 60% efficiency."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Useful Energy and Wasted Energy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Useful energy is the energy transferred to the desired store or used for the intended purpose. Wasted energy is energy lost to the surroundings in unwanted forms like heat or sound.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">When using a toaster, the useful energy is the heat that toasts bread. The wasted energy is heat lost to the air around the toaster.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Useful vs Wasted Energy",
      "problem": "A light bulb receives 50 J of electrical energy. It outputs 10 J as light energy. How much energy is wasted?",
      "questions": [
        {
          "id": "q5",
          "prompt": "What is the useful energy output (J)?",
          "answer": "10",
          "feedback": "Correct. Useful energy (light) is 10 J."
        },
        {
          "id": "q6",
          "prompt": "Calculate the wasted energy (J).",
          "answer": "40",
          "feedback": "Correct. Wasted energy is 50 J - 10 J = 40 J."
        }
      ]
    }
  },
  "step3": {
    "title": "Efficiencies using Power Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Efficiency calculations work the same way with power values as with energy values. Power is energy transferred per second. Use the formula Efficiency = Useful power output / Total power input.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Efficiency from Power",
      "problem": "A motor uses 500 W of electrical power and delivers 350 W of mechanical power. Find the efficiency.",
      "questions": [
        {
          "id": "q7",
          "prompt": "What is the total power input (W)?",
          "answer": "500",
          "feedback": "Correct. The total input power is 500 W."
        },
        {
          "id": "q8",
          "prompt": "What is the useful power output (W)?",
          "answer": "350",
          "feedback": "Correct. Useful output power is 350 W."
        },
        {
          "id": "q9",
          "prompt": "Calculate the efficiency as a decimal.",
          "answer": "0.7",
          "feedback": "Correct. Efficiency = 350 / 500 = 0.7."
        },
        {
          "id": "q10",
          "prompt": "Convert efficiency to a percentage.",
          "answer": "70",
          "feedback": "Correct. 0.7 multiplied by 100 is 70%."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Efficiency Calculation MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If a machine has an efficiency of 80%, which of the following is true?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>20% of energy is wasted</span>",
            "isCorrect": true,
            "explanation": "<span>Correct. 100% - 80% efficiency = 20% wasted energy.</span>"
          },
          {
            "id": "b",
            "label": "<span>The machine produces 80% more energy than it uses</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Efficiency can never be more than 100%, so it can't produce more energy than input.</span>"
          },
          {
            "id": "c",
            "label": "<span>All input energy is converted into useful output</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Efficiency less than 100% means some input energy is wasted.</span>"
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the energy transferred to the desired purpose, while <span class=\"font-semibold\">_____</span> is energy lost to the surroundings.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "useful energy output",
                "label": "useful energy output",
                "isCorrect": true,
                "feedback": "Correct! Useful energy output is the desired energy."
              },
              {
                "value": "wasted energy",
                "label": "wasted energy",
                "isCorrect": false,
                "feedback": "Try again. This is energy lost, not useful."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "wasted energy",
                "label": "wasted energy",
                "isCorrect": true,
                "feedback": "Correct! Wasted energy is lost to surroundings."
              },
              {
                "value": "useful energy output",
                "label": "useful energy output",
                "isCorrect": false,
                "feedback": "Try again. This is the useful energy, not wasted."
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
      "prompt": "<span>A motor uses electrical energy at a rate of 750 W and delivers mechanical energy at 600 W to a machine. Calculate the efficiency of the motor as a percentage. Explain why the efficiency is not 100% and describe what happens to the wasted energy.</span>",
      "hint": "Remember efficiency = useful output / total input × 100%. Consider energy transfers and losses.",
      "mustHaveKeywords": ["efficiency calculation", "energy lost as heat", "energy input and output"],
      "optionalKeywords": ["power input", "power output", "percentage efficiency"],
      "modelAnswer": "<span>The efficiency is calculated by dividing the useful power output (600 W) by the total power input (750 W) and multiplying by 100%, giving 80%. The efficiency is not 100% because some energy is always lost, often as heat due to friction and electrical resistance in the motor. This wasted energy is transferred to the surroundings and is not useful for the motor's intended mechanical work.</span>",
      "scaffoldPrompts": ["Calculate efficiency using given powers", "Explain why no energy transfer is fully efficient", "Describe where wasted energy goes"]
    }
  }
};