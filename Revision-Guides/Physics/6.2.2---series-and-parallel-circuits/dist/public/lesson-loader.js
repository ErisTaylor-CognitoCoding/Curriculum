window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.2.2 - Series and parallel circuits",
  "strapline": "Understanding how resistors affect current and potential difference in series and parallel circuits.",
  "learningObjectives": [
    "Students should understand that resistors are components that reduce current flow in circuits, including fixed and variable resistors, and calculate resistance using potential difference and current (Physics 6.2.2)",
    "Students should understand that in series circuits current is the same throughout whilst potential difference is shared, whereas in parallel circuits potential difference is the same across each branch but current is divided (Physics 6.2.2)",
    "Students should calculate total resistance in both circuit types and explain how adding components affects current and potential difference differently in each arrangement (Physics 6.2.2)"
  ],
  "keyFormulas": [
    "Resistance, R = Potential Difference, V ÷ Current, I",
    "Total Resistance in Series: R_total = R_1 + R_2 + R_3 + ...",
    "Total Resistance in Parallel: 1/R_total = 1/R_1 + 1/R_2 + 1/R_3 + ..."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <rect x='30' y='120' width='340' height='160' fill='#f9f9f9' stroke='#333' stroke-width='1' rx='12' ry='12'/>\
    <text x='200' y='40' font-family='Arial' font-weight='bold' font-size='16' text-anchor='middle'>Simple Series & Parallel Circuit</text>\
    <line x1='50' y1='180' x2='350' y2='180' stroke='#000' stroke-width='2' />\
    <circle cx='100' cy='180' r='12' fill='#d1d1d1' stroke='#666' stroke-width='2' />\
    <text x='100' y='180' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle'>R1</text>\
    <circle cx='170' cy='180' r='12' fill='#d1d1d1' stroke='#666' stroke-width='2' />\
    <text x='170' y='180' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle'>R2</text>\
    <circle cx='240' cy='180' r='12' fill='#d1d1d1' stroke='#666' stroke-width='2' />\
    <text x='240' y='180' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle'>R3</text>\
    <!-- Parallel branches -->\
    <line x1='100' y1='180' x2='100' y2='240' stroke='#000' stroke-width='2' />\
    <line x1='240' y1='180' x2='240' y2='240' stroke='#000' stroke-width='2' />\
    <line x1='100' y1='240' x2='240' y2='240' stroke='#000' stroke-width='2' />\
    <circle cx='170' cy='240' r='12' fill='#b0e0e6' stroke='#666' stroke-width='2' />\
    <text x='170' y='240' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle'>R4</text>\
    <text x='50' y='200' font-family='Arial' font-size='10'>Series</text>\
    <text x='180' y='260' font-family='Arial' font-size='10' text-anchor='middle'>Parallel Branch</text>\
  </svg>",
  "step1": {
    "title": "Concept 1: Understanding Resistors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>resistor</strong> is a component that <em>opposes</em> or reduces the electric current flow in a circuit. There are <strong>fixed resistors</strong>, which always have the same resistance, and <strong>variable resistors</strong> that can be adjusted to change resistance.</p><p>Resistance (R) is calculated using the formula: <strong>R = V ÷ I</strong>, where V is potential difference across the resistor and I is current through it.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a resistor like a narrow pipe in a water system. It restricts the water (current) flow. Fixed resistors are like pipes with a fixed width, while variable resistors are like adjustable valves.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Resistance",
      "problem": "A resistor has a potential difference of <strong>12 V</strong> across it and a current of <strong>3 A</strong> flowing through it. Calculate the resistance.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the potential difference (V) in volts:",
          "answer": "12",
          "feedback": "Correct, the potential difference given is 12 V."
        },
        {
          "id": "q2",
          "prompt": "Enter the current (I) in amperes:",
          "answer": "3",
          "feedback": "Correct, the current given is 3 A."
        },
        {
          "id": "q3",
          "prompt": "Using R = V ÷ I, calculate the resistance (R) in ohms:",
          "answer": "4",
          "feedback": "Well done! 12 ÷ 3 = 4 Ω."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Series Circuits",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In a <strong>series circuit</strong>, components are connected end-to-end in a single loop. This means:</p><ul><li>The <strong>current</strong> is the same through every component.</li><li>The <strong>potential difference</strong> (voltage) is shared between components.</li><li>The <strong>total resistance</strong> is the sum of all resistors' resistances: <em>R_total = R_1 + R_2 + ...</em></li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a single-lane road where all cars (current) must pass one after another. The total length of the road is like total resistance.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Total Resistance in Series",
      "problem": "Three fixed resistors are connected in series with resistance values 2 Ω, 5 Ω and 3 Ω. Find the total resistance.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the resistance of the first resistor (Ω):",
          "answer": "2",
          "feedback": "Correct, first resistor is 2 Ω."
        },
        {
          "id": "q2",
          "prompt": "Enter the resistance of the second resistor (Ω):",
          "answer": "5",
          "feedback": "Correct, second resistor is 5 Ω."
        },
        {
          "id": "q3",
          "prompt": "Enter the resistance of the third resistor (Ω):",
          "answer": "3",
          "feedback": "Correct, third resistor is 3 Ω."
        },
        {
          "id": "q4",
          "prompt": "Calculate the total resistance (Ω):",
          "answer": "10",
          "feedback": "Excellent! 2 + 5 + 3 = 10 Ω."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Parallel Circuits",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In a <strong>parallel circuit</strong>, components are connected in branches across the same two points. This means:</p><ul><li>The <strong>potential difference</strong> across each branch is the same.</li><li>The <strong>current</strong> divides between branches.</li><li>The <strong>total resistance</strong> is less than the smallest individual resistance, calculated with: <em>1/R_total = 1/R_1 + 1/R_2 + ...</em></li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a multi-lane highway where traffic (current) splits between lanes. The overall resistance is reduced as there are multiple paths.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Total Resistance in Parallel",
      "problem": "Two resistors with resistances 6 Ω and 3 Ω are connected in parallel. Calculate the total resistance.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter resistance of first resistor (Ω):",
          "answer": "6",
          "feedback": "Correct, first resistor is 6 Ω."
        },
        {
          "id": "q2",
          "prompt": "Enter resistance of second resistor (Ω):",
          "answer": "3",
          "feedback": "Correct, second resistor is 3 Ω."
        },
        {
          "id": "q3",
          "prompt": "Calculate reciprocal of 6 Ω (1/6):",
          "answer": "0.1667",
          "feedback": "Good, 1/6 ≈ 0.1667."
        },
        {
          "id": "q4",
          "prompt": "Calculate reciprocal of 3 Ω (1/3):",
          "answer": "0.3333",
          "feedback": "Well done, 1/3 ≈ 0.3333."
        },
        {
          "id": "q5",
          "prompt": "Sum the reciprocals: 0.1667 + 0.3333 =",
          "answer": "0.5",
          "feedback": "Correct, sum is 0.5."
        },
        {
          "id": "q6",
          "prompt": "Calculate total resistance as reciprocal of sum (1/0.5):",
          "answer": "2",
          "feedback": "Excellent! Total resistance is 2 Ω."
        }
      ]
    }
  },
  "step4": {
    "title": "Current and Potential Difference in Series Circuits",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In series circuits, the <strong>current</strong> is the <em>same</em> through all components, but the <strong>potential difference</strong> is <em>shared</em> between them. The sum of the potential differences across each component equals the total voltage supplied by the source.</p>",
    "workedExample": {
      "title": "Worked Example: Current and Voltage in Series",
      "problem": "A 12 V battery is connected to three resistors in series. The potential differences across the resistors are 3 V, 5 V and 4 V. Find the current if the total resistance is 10 Ω.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate total potential difference across resistors (V):",
          "answer": "12",
          "feedback": "Correct, 3 + 5 + 4 = 12 V (matches battery voltage)."
        },
        {
          "id": "q2",
          "prompt": "Current (I) = V_total ÷ R_total. Calculate current (A):",
          "answer": "1.2",
          "feedback": "Well done! 12 ÷ 10 = 1.2 A."
        }
      ]
    }
  },
  "step5": {
    "title": "Current and Potential Difference in Parallel Circuits",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In parallel circuits, the <strong>potential difference</strong> across each branch is the <em>same</em> and equals the source voltage. The <strong>current</strong> is <em>divided</em> between branches, depending on the resistance of each branch.</p>",
    "workedExample": {
      "title": "Worked Example: Current Division in Parallel",
      "problem": "A 9 V battery supplies two parallel resistors with resistances 3 Ω and 6 Ω. Calculate the current through each resistor.",
      "questions": [
        {
          "id": "q1",
          "prompt": "State the potential difference across each resistor (V):",
          "answer": "9",
          "feedback": "Correct, voltage across each parallel branch is equal to battery voltage, 9 V."
        },
        {
          "id": "q2",
          "prompt": "Calculate current through 3 Ω resistor (I = V ÷ R):",
          "answer": "3",
          "feedback": "Good, 9 ÷ 3 = 3 A."
        },
        {
          "id": "q3",
          "prompt": "Calculate current through 6 Ω resistor:",
          "answer": "1.5",
          "feedback": "Correct, 9 ÷ 6 = 1.5 A."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how adding more resistors in series and in parallel affects the total resistance, current, and potential difference in the circuit.</span>",
      "hint": "Remember to discuss changes in current and voltage for both circuit types and use key terms like resistance, current, potential difference, series, and parallel.",
      "mustHaveKeywords": ["resistance", "current", "potential difference", "series", "parallel"],
      "optionalKeywords": ["total resistance", "voltage division", "current division"],
      "modelAnswer": "<span>Adding resistors in series increases the total resistance because the resistances add together. This causes the overall current in the circuit to decrease. The potential difference is shared between the components, so each resistor gets part of the total voltage.</span><br><span>Adding resistors in parallel decreases the total resistance because the reciprocal of the total resistance is the sum of the reciprocals of individual resistances. This results in an increase in current supplied by the source. The potential difference across each resistor in parallel remains the same as the source voltage.</span>",
      "scaffoldPrompts": ["Start by describing how resistors in series affect total resistance.", "Then explain the changes in current and potential difference in series circuits.", "Next, describe how resistors in parallel affect total resistance.", "Finally, explain the changes in current and potential difference in parallel circuits."]
    }
  }
};