window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.2.4.1 - Power",
  "strapline": "Understanding power as the rate of energy transfer and calculating it in electrical contexts",
  "learningObjectives": [
    "Students should understand that power is the rate of energy transfer, measured in watts (Physics 6.2.4.1)",
    "Students should be able to calculate power using the equations P = E/t and P = IV (Physics 6.2.4.1)",
    "Students should be able to analyse energy transfers in everyday electrical appliances, including useful and wasted energy (Physics 6.2.4.1)"
  ],
  "keyFormulas": [
    "Power (P) = Energy transferred (E) / Time taken (t) --> P = E / t",
    "Power (P) = Current (I) × Voltage (V) --> P = IV",
    "Watt (W) = Joule per second (J/s)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>\
    <rect x='20' y='20' width='360' height='160' rx='15' ry='15' fill='#e0f7fa' stroke='#00796b' stroke-width='3'/>\
    <text x='200' y='50' font-family='Arial' font-size='18' font-weight='bold' fill='#004d40' text-anchor='middle'>Power as Energy Transfer Rate</text>\
    <line x1='60' y1='100' x2='330' y2='100' stroke='#004d40' stroke-width='4' marker-end='url(#arrowhead)' />\
    <circle cx='60' cy='100' r='20' fill='#004d40' />\
    <text x='60' y='105' text-anchor='middle' font-family='Arial' font-size='20' fill='white'>E</text>\
    <circle cx='330' cy='100' r='20' fill='#004d40' />\
    <text x='330' y='105' text-anchor='middle' font-family='Arial' font-size='20' fill='white'>t</text>\
    <text x='195' y='80' font-family='Arial' font-size='16' fill='#00796b'>Energy transferred over time</text>\
    <defs>\
      <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>\
        <polygon points='0 0, 10 3.5, 0 7' fill='#004d40' />\
      </marker>\
    </defs>\
  </svg>",
  "step1": {
    "title": "Concept: Understanding Power",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Power is the rate at which energy is transferred or work is done. It tells us how quickly energy is being used or converted from one form to another. The unit of power is the watt (W), where 1 watt equals 1 joule per second (1 W = 1 J/s).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling a bucket with water: power is like how fast you fill the bucket. A high power means the bucket fills quickly; low power means it fills slowly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: What is Power?",
      "problem": "An appliance transfers 600 joules of energy in 30 seconds. Calculate the power used.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the energy transferred (in joules):",
          "answer": "600",
          "feedback": "Good, the energy transferred is 600 J."
        },
        {
          "id": "q2",
          "prompt": "Enter the time taken (in seconds):",
          "answer": "30",
          "feedback": "Correct, the time taken is 30 seconds."
        },
        {
          "id": "q3",
          "prompt": "Calculate the power using P = E / t:",
          "answer": "20",
          "feedback": "Well done! The power is 20 watts."
        }
      ]
    }
  },
  "step2": {
    "title": "Using the Formula P = IV",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Power can also be calculated using current and voltage with the equation: <strong>P = IV</strong>, where P is power in watts, I is current in amperes, and V is voltage in volts.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Power with IV",
      "problem": "An electrical kettle has a current of 5 A and a voltage of 230 V. Find the power rating.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the current (in amperes):",
          "answer": "5",
          "feedback": "Correct, current is 5 A."
        },
        {
          "id": "q2",
          "prompt": "Enter the voltage (in volts):",
          "answer": "230",
          "feedback": "Correct, voltage is 230 V."
        },
        {
          "id": "q3",
          "prompt": "Calculate the power using P = IV:",
          "answer": "1150",
          "feedback": "Excellent! The power is 1150 watts or 1.15 kW."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>Power is measured in a unit called the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "joule", "label": "Joule", "isCorrect": false, "feedback": "No, joule is a unit of energy, not power."},
              {"value": "watt", "label": "Watt", "isCorrect": true, "feedback": "Correct! The watt is the unit of power."},
              {"value": "ampere", "label": "Ampere", "isCorrect": false, "feedback": "No, ampere is the unit of current."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The equation <strong>P = E / t</strong> relates power to <span class=\"font-semibold\">_____</span> transferred and <span class=\"font-semibold\">_____</span> taken.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "energy", "label": "energy", "isCorrect": true, "feedback": "Correct! Energy transferred."},
              {"value": "power", "label": "power", "isCorrect": false, "feedback": "No, power is what the formula calculates."}
            ]
          },
          {
            "id": "b3",
            "options": [
              {"value": "time", "label": "time", "isCorrect": true, "feedback": "Correct! Time taken."},
              {"value": "current", "label": "current", "isCorrect": false, "feedback": "No, current is not in this formula."}
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following statements is true about power?</span>",
        "options": [
          {"id": "a", "label": "<span>Power is the total energy transferred.</span>", "isCorrect": false, "explanation": "Power is not total energy; it is a rate of energy transfer."},
          {"id": "b", "label": "<span>Power is the rate of energy transfer measured in watts.</span>", "isCorrect": true, "explanation": "Correct! Power is the rate of energy transfer, measured in watts."},
          {"id": "c", "label": "<span>Power equals current divided by voltage.</span>", "isCorrect": false, "explanation": "Incorrect, power equals current times voltage."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>If an appliance uses 200 J of energy in 10 seconds, what is the power?</span>",
        "options": [
          {"id": "a", "label": "<span>20 W</span>", "isCorrect": true, "explanation": "Power = 200 J / 10 s = 20 W."},
          {"id": "b", "label": "<span>210 W</span>", "isCorrect": false, "explanation": "Incorrect calculation."},
          {"id": "c", "label": "<span>1000 W</span>", "isCorrect": false, "explanation": "Too large for this energy and time."}
        ]
      }
    ]
  },
  "step5": {
    "title": "Analyzing Energy Transfer in Appliances",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Everyday electrical appliances transfer energy, part of which is useful (e.g., heating water) and part is often wasted (e.g., heating surrounding air). Understanding power helps us analyze efficiency by comparing useful output versus total energy input.</p>",
    "workedExample": {
      "title": "Worked Example: Energy Efficiency",
      "problem": "A heater transfers 2000 J of useful heat energy but wastes 500 J as heat to the environment every second. Calculate the power used and percentage efficiency.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate total energy transferred per second:",
          "answer": "2500",
          "feedback": "Correct. Total energy = useful + wasted = 2000 + 500 = 2500 J."
        },
        {
          "id": "q2",
          "prompt": "Calculate power used by the heater in watts (P = E/t):",
          "answer": "2500",
          "feedback": "Right. Power is energy per second, so 2500 watts."
        },
        {
          "id": "q3",
          "prompt": "Calculate the efficiency percentage (useful energy ÷ total energy × 100):",
          "answer": "80",
          "feedback": "Well done! Efficiency = (2000 ÷ 2500) × 100 = 80%."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>An electric motor transfers 1500 J of energy in 25 seconds. It operates at a voltage of 120 V and current of 5 A.</span><br/><span>Calculate (a) the power output of the motor using P = E/t, (b) the power input using P = IV, and (c) explain why the power input and output might differ.</span>",
      "hint": "Use the formulas P = E/t and P = IV carefully and consider energy loss mechanisms.",
      "mustHaveKeywords": ["power output", "power input", "efficiency", "energy loss"],
      "optionalKeywords": ["heat", "friction", "wasted energy"],
      "modelAnswer": "<span>(a) Power output = Energy transferred / time = 1500 J / 25 s = 60 W.<br/>(b) Power input = Current × Voltage = 5 A × 120 V = 600 W.<br/>(c) Power input is greater than output because some energy is wasted (e.g., as heat due to friction and resistance), so efficiency is less than 100%.</span>",
      "scaffoldPrompts": [
        "Calculate power output by dividing energy transferred by time.",
        "Calculate power input by multiplying current and voltage.",
        "Consider practical reasons why not all input energy becomes useful output."
      ]
    }
  }
};