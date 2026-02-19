window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.2.1.4 - Resistors",
  "strapline": "Understanding resistors, their types, and behavior in electrical circuits including calculations of resistance and total resistance in series and parallel circuits.",
  "learningObjectives": [
    "Students should understand that resistors are components that reduce current flow in circuits, including fixed and variable resistors, and how to calculate resistance using potential difference and current (Physics 6.2.1.4)",
    "Students should understand the differences between series and parallel circuits, including that in series circuits current is the same throughout whilst potential difference is shared, whereas in parallel circuits potential difference is the same across each branch but current is divided (Physics 6.2.1.4)",
    "Students should be able to calculate total resistance in both series and parallel circuit types and explain how adding components affects current and potential difference differently in each arrangement (Physics 6.2.1.4)"
  ],
  "keyFormulas": [
    "Resistance (R) = Potential Difference (V) / Current (I)",
    "Total Resistance in Series (R_total) = R1 + R2 + R3 + ...",
    "Total Resistance in Parallel (1 / R_total) = (1 / R1) + (1 / R2) + (1 / R3) + ..."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif' >\n  <text x='20' y='20' font-weight='bold'>Basic Circuit with a Resistor</text>\n  <line x1='50' y1='50' x2='150' y2='50' stroke='#000' stroke-width='2'/>\n  <rect x='150' y='35' width='60' height='30' fill='#ccc' stroke='#000' stroke-width='2'/>\n  <text x='165' y='55' font-size='14'>Resistor</text>\n  <line x1='210' y1='50' x2='310' y2='50' stroke='#000' stroke-width='2'/>\n  <circle cx='310' cy='50' r='15' fill='none' stroke='#f00' stroke-width='2'/>\n  <text x='300' y='55' font-size='16' fill='#f00'>+</text>\n  <line x1='310' y1='65' x2='310' y2='150' stroke='#000' stroke-width='2'/>\n  <line x1='50' y1='150' x2='310' y2='150' stroke='#000' stroke-width='2'/>\n  <line x1='50' y1='150' x2='50' y2='50' stroke='#000' stroke-width='2'/>\n  <text x='60' y='100' font-size='14' fill='#555'>Battery</text>\n</svg>",
  "step1": {
    "title": "Introduction to Resistors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>resistor</strong> is a component in an electrical circuit that opposes or reduces the flow of electric current. It converts electrical energy into thermal energy and protects circuits by limiting current.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a resistor like narrowing a water pipe. The narrower the pipe, the harder it is for the water (current) to flow.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying a Resistor",
      "problem": "Look at the circuit diagram and identify the resistor component.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the resistor represented by in the given diagram? (Hint: Look for the rectangular shape)",
          "answer": "rectangular block",
          "feedback": "Correct. The resistor is shown as a rectangular block in the circuit."
        }
      ]
    }
  },
  "step2": {
    "title": "Types of Resistors: Fixed vs Variable",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Fixed resistors</strong> have a resistance value that does not change. <strong>Variable resistors</strong>, such as rheostats or potentiometers, allow the resistance to be adjusted, controlling current flow.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">A fixed resistor is like a fixed-size hose; a variable resistor is like a hose with a valve to adjust how much water flows through.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Fixed vs Variable Resistors",
      "problem": "Determine whether the resistor shown is fixed or variable by its symbol in the circuit diagram.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the resistor symbol a simple rectangle or a rectangle with an arrow across it?",
          "answer": "rectangle with arrow",
          "feedback": "Correct. A rectangle with an arrow indicates a variable resistor."
        }
      ]
    }
  },
  "step3": {
    "title": "Calculating Resistance Using Potential Difference and Current",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Resistance can be calculated using the formula <strong>R = V / I</strong>, where <em>R</em> is resistance in ohms (Ω), <em>V</em> is potential difference (volts), and <em>I</em> is current (amperes).</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Resistance",
      "problem": "Calculate the resistance of a resistor if the potential difference across it is 12 V and the current through it is 3 A.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the potential difference (V) in volts.",
          "answer": "12",
          "feedback": "Correct, the potential difference is 12 V."
        },
        {
          "id": "q2",
          "prompt": "Enter the current (I) in amperes.",
          "answer": "3",
          "feedback": "Correct, the current is 3 A."
        },
        {
          "id": "q3",
          "prompt": "Calculate R = V / I. What is the resistance in ohms?",
          "answer": "4",
          "feedback": "Correct. Resistance R = 12 / 3 = 4 Ω."
        }
      ]
    }
  },
  "step4": {
    "title": "Understanding Series Circuits",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In a <strong>series circuit</strong>, the current is the same through all components, but the potential difference (voltage) is shared across them.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'>\n  <text x='20' y='20' font-weight='bold'>Series Circuit</text>\n  <line x1='50' y1='100' x2='80' y2='100' stroke='#000' stroke-width='2'/>\n  <rect x='80' y='85' width='40' height='30' fill='#ccc' stroke='#000' stroke-width='2'/>\n  <text x='100' y='105' font-size='12'>R1</text>\n  <line x1='120' y1='100' x2='150' y2='100' stroke='#000' stroke-width='2'/>\n  <rect x='150' y='85' width='40' height='30' fill='#ccc' stroke='#000' stroke-width='2'/>\n  <text x='170' y='105' font-size='12'>R2</text>\n  <line x1='190' y1='100' x2='220' y2='100' stroke='#000' stroke-width='2'/>\n  <circle cx='50' cy='100' r='15' fill='none' stroke='#f00' stroke-width='2'/>\n  <text x='40' y='105' font-size='16' fill='#f00'>+</text>\n  <line x1='220' y1='100' x2='220' y2='130' stroke='#000' stroke-width='2'/>\n  <line x1='50' y1='130' x2='220' y2='130' stroke='#000' stroke-width='2'/>\n  <line x1='50' y1='115' x2='50' y2='85' stroke='#000' stroke-width='2'/>\n  <line x1='220' y1='115' x2='220' y2='85' stroke='#000' stroke-width='2'/>\n  <text x='80' y='65' font-size='12' fill='#555'>I same</text>\n  <text x='120' y='65' font-size='12' fill='#555'>V shared</text>\n</svg>",
    "workedExample": {
      "title": "Worked Example: Current and Voltage in Series",
      "problem": "If the current in a series circuit is 2 A, what is the current through each resistor?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Input the current through R1.",
          "answer": "2",
          "feedback": "Correct, current is the same through all components in series."
        },
        {
          "id": "q2",
          "prompt": "Input the current through R2.",
          "answer": "2",
          "feedback": "Correct, current is the same through all components in series."
        }
      ]
    }
  },
  "step5": {
    "title": "Understanding Parallel Circuits",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In a <strong>parallel circuit</strong>, the potential difference (voltage) across each branch is the same, but the current is divided among the branches depending on their resistance.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'>\n  <text x='20' y='20' font-weight='bold'>Parallel Circuit</text>\n  <line x1='50' y1='70' x2='350' y2='70' stroke='#000' stroke-width='2'/>\n  <line x1='50' y1='100' x2='350' y2='100' stroke='#000' stroke-width='2'/>\n\n  <line x1='120' y1='70' x2='120' y2='100' stroke='#000' stroke-width='2'/>\n  <rect x='120' y='80' width='40' height='10' fill='#ccc' stroke='#000' stroke-width='2'/>\n  <text x='135' y='88' font-size='12'>R1</text>\n\n  <line x1='220' y1='70' x2='220' y2='100' stroke='#000' stroke-width='2'/>\n  <rect x='220' y='80' width='40' height='10' fill='#ccc' stroke='#000' stroke-width='2'/>\n  <text x='235' y='88' font-size='12'>R2</text>\n\n  <circle cx='50' cy='85' r='15' fill='none' stroke='#f00' stroke-width='2'/>\n  <text x='40' y='90' font-size='16' fill='#f00'>+</text>\n  <line x1='50' y1='55' x2='50' y2='115' stroke='#000' stroke-width='2'/>\n  <line x1='350' y1='55' x2='350' y2='115' stroke='#000' stroke-width='2'/>\n\n  <text x='130' y='60' font-size='12' fill='#555'>V same</text>\n  <text x='130' y='125' font-size='12' fill='#555'>I divides</text>\n</svg>",
    "workedExample": {
      "title": "Worked Example: Voltage and Current in Parallel",
      "problem": "If the potential difference across a parallel circuit branch is 9 V, what is the voltage across each resistor?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Input the voltage across R1.",
          "answer": "9",
          "feedback": "Correct, voltage is the same across all branches in parallel."
        },
        {
          "id": "q2",
          "prompt": "Input the voltage across R2.",
          "answer": "9",
          "feedback": "Correct, voltage is the same across all branches in parallel."
        }
      ]
    }
  },
  "step6": {
    "title": "Calculating Total Resistance in Series Circuits",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In series circuits, total resistance is the sum of individual resistances: <strong>R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + ...</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Total Resistance in Series",
      "problem": "Calculate the total resistance of two resistors connected in series with values 3 Ω and 5 Ω.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter resistance value of R1 (Ω).",
          "answer": "3",
          "feedback": "Correct, R1 is 3 Ω."
        },
        {
          "id": "q2",
          "prompt": "Enter resistance value of R2 (Ω).",
          "answer": "5",
          "feedback": "Correct, R2 is 5 Ω."
        },
        {
          "id": "q3",
          "prompt": "Calculate R_total = R1 + R2 (Ω).",
          "answer": "8",
          "feedback": "Correct. Total resistance is 8 Ω."
        }
      ]
    }
  },
  "step7": {
    "title": "Calculating Total Resistance in Parallel Circuits",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In parallel circuits, total resistance is calculated using: <strong>1 / R<sub>total</sub> = 1 / R<sub>1</sub> + 1 / R<sub>2</sub> + ...</strong>. The total resistance is always less than the smallest individual resistor.</p>",
    "workedExample": {
      "title": "Worked Example: Total Resistance in Parallel",
      "problem": "Calculate the total resistance of two resistors connected in parallel with values 4 Ω and 12 Ω.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter resistance value of R1 (Ω).",
          "answer": "4",
          "feedback": "Correct, R1 is 4 Ω."
        },
        {
          "id": "q2",
          "prompt": "Enter resistance value of R2 (Ω).",
          "answer": "12",
          "feedback": "Correct, R2 is 12 Ω."
        },
        {
          "id": "q3",
          "prompt": "Calculate 1/R_total = 1/R1 + 1/R2. What is 1/R_total? (decimal value)",
          "answer": "0.3333",
          "feedback": "Good attempt. 1/4 = 0.25 and 1/12 ≈ 0.0833, sum ≈ 0.3333."
        },
        {
          "id": "q4",
          "prompt": "Calculate R_total = 1 divided by (sum above). What is the total resistance in ohms (round to 2 decimal places)?",
          "answer": "3",
          "feedback": "Correct. Total resistance is approximately 3 Ω."
        }
      ]
    }
  },
  "step8": {
    "title": "Effect of Adding Components on Current and Voltage",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Adding resistors in series increases total resistance, reduces total current, and shares voltage among resistors. Adding resistors in parallel decreases total resistance, allowing more current, but voltage remains constant across each resistor.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Adding resistance in series is like adding more narrow sections in a water pipe, making it harder for water to flow. Adding pipes in parallel is like opening extra routes, making it easier for water to flow.</p>"
    }
  },
  "step9": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following statements about current and potential difference is true?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>In a series circuit, potential difference is the same across each component.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. In series circuits, current is the same, but potential difference is shared."
          },
          {
            "id": "b",
            "label": "<span>In a parallel circuit, current is divided among branches, but the potential difference is the same across each branch.</span>",
            "isCorrect": true,
            "explanation": "Correct. This is the defining characteristic of parallel circuits."
          },
          {
            "id": "c",
            "label": "<span>Adding resistors in parallel increases total resistance.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Adding resistors in parallel decreases total resistance."
          }
        ]
      }
    ]
  },
  "step10": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> resistor has a fixed value, while a <span class=\"font-semibold\">_____</span> resistor allows adjustment of resistance.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "fixed",
                "label": "Fixed",
                "isCorrect": true,
                "feedback": "Correct! Fixed resistors have constant resistance."
              },
              {
                "value": "variable",
                "label": "Variable",
                "isCorrect": false,
                "feedback": "Try again. Variable resistors can be adjusted."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "variable",
                "label": "Variable",
                "isCorrect": true,
                "feedback": "Correct! Variable resistors allow resistance adjustment."
              },
              {
                "value": "fixed",
                "label": "Fixed",
                "isCorrect": false,
                "feedback": "Try again. Fixed resistors have constant resistance."
              }
            ]
          }
        ]
      }
    ]
  },
  "step11": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how resistance, current, and potential difference behave differently in series and parallel resistor arrangements, and how to calculate total resistance in each case.</span>",
      "hint": "Remember to discuss the current and voltage behavior in each circuit type and use the formulas for total resistance.",
      "mustHaveKeywords": ["series", "parallel", "current", "potential difference", "total resistance", "formula"],
      "optionalKeywords": ["fixed resistor", "variable resistor", "voltage division", "current division"],
      "modelAnswer": "<span>In series circuits, the current is the same throughout the circuit, but the potential difference is divided among the resistors. The total resistance is the sum of individual resistances: R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + .... In parallel circuits, the potential difference across each resistor is the same, but the current is divided among the branches. Total resistance is found by the reciprocal sum: 1 / R<sub>total</sub> = 1 / R<sub>1</sub> + 1 / R<sub>2</sub> + .... Adding resistors in series increases total resistance and decreases current, while adding resistors in parallel decreases total resistance and increases current.</span>",
      "scaffoldPrompts": ["Describe current and voltage in series circuits", "Describe current and voltage in parallel circuits", "Explain formulas for total resistance in series and parallel"]
    }
  }
};