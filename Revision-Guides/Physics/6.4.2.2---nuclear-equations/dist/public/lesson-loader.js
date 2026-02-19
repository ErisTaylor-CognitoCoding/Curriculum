window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.4.2.2 - Nuclear equations",
  "strapline": "Understanding how to represent and balance nuclear equations for radioactive decay processes and the properties of different radiation types.",
  "learningObjectives": [
    "Students should be able to represent radioactive decay processes using nuclear equations, ensuring both mass numbers and atomic numbers are conserved (Physics 6.4.2.2)",
    "Students should be able to write and balance nuclear equations for alpha decay and beta decay (Physics 6.4.2.2)",
    "Students should understand the properties of alpha, beta, and gamma radiation including their penetrating powers and ionising abilities (Physics 6.4.2.2)"
  ],
  "keyFormulas": [
    "Nuclear equation format: _<sup>mass number</sup><sub>atomic number</sub>Element_ → _<sup>mass number</sup><sub>atomic number</sub>Element_ + radiation particle",
    "Alpha decay: mass number decreases by 4, atomic number decreases by 2",
    "Beta decay: mass number stays the same, atomic number increases by 1"
  ],
  "diagramHtml": "<svg viewBox='0 0 450 250' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='170' height='100' fill='#d0e7f9' stroke='#1b4f72' rx='10' ry='10'/><text x='95' y='60' font-family='Arial' font-size='24' text-anchor='middle' fill='#114b5f'><tspan font-weight='bold' font-size='28'>${}</tspan><tspan x='95' y='90' font-size='18'>${}</tspan></text><line x1='180' y1='70' x2='270' y2='70' stroke='#114b5f' stroke-width='3' marker-end='url(#arrow)'/><rect x='280' y='20' width='140' height='100' fill='#f9e2d0' stroke='#954535' rx='10' ry='10'/><text x='350' y='60' font-family='Arial' font-size='24' text-anchor='middle' fill='#7a3e3e'><tspan font-weight='bold' font-size='28'>${}</tspan><tspan x='350' y='90' font-size='18'>${}</tspan></text><defs><marker id='arrow' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#114b5f'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding Nuclear Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A nuclear equation is a symbolic way to show a radioactive decay process. It includes the <em>parent nucleus</em> (starting element), the <em>radiation emitted</em>, and the <em>daughter nucleus</em> (new element formed). Importantly, the total mass numbers and atomic numbers must be equal on both sides to conserve mass and charge.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of nuclear equations like a balanced seesaw: the weight (mass number) and balance point (atomic number) must be the same on both sides for it to balance perfectly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Writing a Simple Nuclear Equation",
      "problem": "Write the nuclear equation for the alpha decay of Uranium-238.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mass number of Uranium before decay?",
          "answer": "238",
          "feedback": "Correct. Uranium-238 has a mass number of 238."
        },
        {
          "id": "q2",
          "prompt": "What is the atomic number of Uranium?",
          "answer": "92",
          "feedback": "Correct. Uranium's atomic number is 92."
        },
        {
          "id": "q3",
          "prompt": "What is the mass number of the alpha particle emitted?",
          "answer": "4",
          "feedback": "Correct. Alpha particles have a mass number of 4."
        },
        {
          "id": "q4",
          "prompt": "What is the atomic number of the alpha particle emitted?",
          "answer": "2",
          "feedback": "Correct. Alpha particles have an atomic number of 2."
        },
        {
          "id": "q5",
          "prompt": "Calculate the mass number of the daughter nucleus after alpha decay.",
          "answer": "234",
          "feedback": "Correct! 238 - 4 = 234."
        },
        {
          "id": "q6",
          "prompt": "Calculate the atomic number of the daughter nucleus after alpha decay.",
          "answer": "90",
          "feedback": "Correct! 92 - 2 = 90."
        },
        {
          "id": "q7",
          "prompt": "Write the full balanced nuclear equation using the symbols Uranium (U), Thorium (Th), and helium (He) for the alpha particle.",
          "answer": "⁴₂He + ²³⁴₉₀Th = ²³⁸₉₂U",
          "feedback": "Remember the parent nucleus is on the left. The correct equation is: ²³⁸₉₂U → ⁴₂He + ²³⁴₉₀Th.  Well done!"
        }
      ]
    }
  },
  "step2": {
    "title": "Key Concept: Alpha Decay Properties",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Alpha radiation</strong> consists of alpha particles (helium nuclei) which have a +2 charge and relatively high mass. They are strongly ionising but have low penetrating power and can be stopped by a sheet of paper or skin.</p>",
    "analogies": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Alpha particles are like a heavy bowling ball — very strong impact but it doesn’t travel far.</p>"
    }
  },
  "step3": {
    "title": "Concept: Beta Decay Process",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In beta decay, a neutron in the nucleus transforms into a proton and emits a beta particle (an electron, symbol <sup>0</sup><sub>-1</sub>e). This increases the atomic number by 1 but the mass number remains unchanged.</p>",
    "workedExample": {
      "title": "Worked Example: Beta Decay of Carbon-14",
      "problem": "Write the balanced nuclear equation for the beta decay of Carbon-14.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mass number of Carbon-14?",
          "answer": "14",
          "feedback": "Correct. Carbon-14 has mass number 14."
        },
        {
          "id": "q2",
          "prompt": "What is the atomic number of Carbon?",
          "answer": "6",
          "feedback": "Correct. Carbon's atomic number is 6."
        },
        {
          "id": "q3",
          "prompt": "What is the mass number of the beta particle emitted?",
          "answer": "0",
          "feedback": "Correct. Beta particles have effectively zero mass."
        },
        {
          "id": "q4",
          "prompt": "What is the atomic number of the beta particle?",
          "answer": "-1",
          "feedback": "Correct. The beta particle has an atomic number of -1 because it is an electron."
        },
        {
          "id": "q5",
          "prompt": "What is the atomic number of the daughter nucleus after beta decay?",
          "answer": "7",
          "feedback": "Correct! 6 + 1 = 7."
        },
        {
          "id": "q6",
          "prompt": "Write the complete balanced nuclear equation using symbols (⁰₋₁e for beta, ¹⁴₆C for carbon, and ¹⁴₇N for nitrogen).",
          "answer": "¹⁴₆C → ⁰₋₁e + ¹⁴₇N",
          "feedback": "Well done! This is the balanced equation for beta decay of Carbon-14."
        }
      ]
    }
  },
  "step4": {
    "title": "Radiation Types and Properties",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">There are three common types of ionising radiation:<ul><li><strong>Alpha (α):</strong> heavy, strongly ionising, low penetration (stopped by paper or skin).</li><li><strong>Beta (β):</strong> fast electron, moderately ionising, moderate penetration (stopped by aluminium).</li><li><strong>Gamma (γ):</strong> electromagnetic wave, weakly ionising, highly penetrating (requires thick lead or concrete to stop).</li></ul></p>"
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following statements about alpha radiation is correct?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Alpha particles have a mass number of 2 and atomic number of 1</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Alpha particles have a mass number of 4 and atomic number of 2."
          },
          {
            "id": "b",
            "label": "<span>Alpha particles are helium nuclei with 2 protons and 2 neutrons</span>",
            "isCorrect": true,
            "explanation": "Correct! Alpha particles are indeed helium nuclei."
          },
          {
            "id": "c",
            "label": "<span>Alpha particles have the highest penetrating power of the three radiation types</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Alpha particles have the lowest penetrating power."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>In beta decay, how do the mass number and atomic number of the nucleus change?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Mass number increases by 1, atomic number stays the same</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Mass number does not increase."
          },
          {
            "id": "b",
            "label": "<span>Mass number stays the same, atomic number increases by 1</span>",
            "isCorrect": true,
            "explanation": "Correct. Beta decay converts a neutron into a proton, increasing atomic number by 1."
          },
          {
            "id": "c",
            "label": "<span>Both mass number and atomic number decrease by 1</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Mass number does not decrease in beta decay."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>In <span class=\"font-semibold\">_____</span> decay, the atomic number of the element decreases by 2 and the mass number decreases by 4.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "alpha",
                "label": "alpha",
                "isCorrect": true,
                "feedback": "Correct! Alpha decay reduces atomic number by 2 and mass number by 4."
              },
              {
                "value": "beta",
                "label": "beta",
                "isCorrect": false,
                "feedback": "Incorrect. Beta decay increases atomic number by 1 and mass number stays the same."
              },
              {
                "value": "gamma",
                "label": "gamma",
                "isCorrect": false,
                "feedback": "Incorrect. Gamma radiation does not change atomic number or mass number."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to write and balance a nuclear equation for the beta decay of a radioactive isotope. Include how the mass and atomic numbers change, and describe the properties of the emitted radiation.</span>",
      "hint": "Remember to check conservation of atomic and mass numbers, and outline beta radiation properties like penetrating power and ionising ability.",
      "mustHaveKeywords": [
        "atomic number increases by 1",
        "mass number remains the same",
        "beta particle is an electron",
        "conservation of nucleon number",
        "moderate penetrating power",
        "moderate ionising effect"
      ],
      "optionalKeywords": [
        "neutron converts to proton",
        "symbol ⁰₋₁e",
        "stopped by aluminium"
      ],
      "modelAnswer": "<span>In beta decay, a neutron inside the nucleus changes into a proton and emits a beta particle (an electron, symbol <sup>0</sup><sub>-1</sub>e). The mass number stays the same because the total number of nucleons (protons + neutrons) does not change, but the atomic number increases by 1 to reflect the new proton. When writing the nuclear equation, balance both mass number and atomic number on each side. Beta radiation has a moderate penetrating power, being able to pass through paper but stopped by aluminium, and a moderate ionising ability.</span>",
      "scaffoldPrompts": [
        "Identify the starting isotope and its mass and atomic numbers",
        "Consider the emitted particle and its mass and atomic numbers",
        "Calculate the daughter nucleus's mass and atomic numbers",
        "Write the balanced nuclear equation",
        "Describe the properties of beta radiation"
      ]
    }
  }
};