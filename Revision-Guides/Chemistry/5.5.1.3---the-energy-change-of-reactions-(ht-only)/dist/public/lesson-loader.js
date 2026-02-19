window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.5.1.3 - The energy change of reactions (HT only)",
  "strapline": "Understanding how energy changes during chemical reactions through bond energies and reaction profiles.",
  "learningObjectives": [
    "Students should be able to calculate the energy change from the difference between the sum of the energy needed to break bonds in the reactants and the sum of the energy released when bonds in the products are formed (Chemistry 5.5.1.3)",
    "Students should be able to interpret reaction profiles showing energy changes during reactions and identify whether reactions are exothermic or endothermic (Chemistry 5.5.1.3)",
    "Students should be able to use bond energy data from tables to calculate overall energy changes in kilojoules per mole (Chemistry 5.5.1.3)"
  ],
  "keyFormulas": [
    "Energy change = Sum of bond energies of bonds broken (reactants) - Sum of bond energies of bonds formed (products)",
    "Positive energy change means endothermic reaction",
    "Negative energy change means exothermic reaction"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='40' width='300' height='160' fill='#e7f3fe' stroke='#333' /><text x='200' y='70' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16'>Reaction Profile Diagram</text><line x1='70' y1='180' x2='330' y2='180' stroke='#555' stroke-width='2'/><text x='60' y='185' font-family='sans-serif' font-size='12'>Reactants</text><text x='340' y='185' font-family='sans-serif' font-size='12'>Products</text><polyline points='70,170 150,70 230,90 310,100' fill='none' stroke='#1f77b4' stroke-width='3'/><text x='150' y='60' font-family='sans-serif' font-size='12' fill='#1f77b4'>Activation Energy</text><line x1='150' y1='170' x2='150' y2='70' stroke='#d62728' stroke-width='2' stroke-dasharray='4 4'/><line x1='220' y1='170' x2='220' y2='100' stroke='#2ca02c' stroke-width='2'/><text x='225' y='165' font-family='sans-serif' font-size='12' fill='#2ca02c'>Energy change</text></svg>",
  "step1": {
    "title": "Concept: What is Bond Energy?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Bond energy is the amount of energy needed to break one mole of a specific type of covalent bond in gaseous molecules. It is measured in kilojoules per mole (kJ/mol). Different bonds have different bond energies depending on the atoms involved and bond strength.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a bond like a spring holding two balls together. The bond energy is how much effort (energy) you need to pull the balls apart. Strong springs (bonds) need more energy to break.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Bond Energies",
      "problem": "Given the bond energies: H–H = 436 kJ/mol, Cl–Cl = 243 kJ/mol, and H–Cl = 431 kJ/mol, identify which bond requires the most energy to break.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the energy needed to break the H–H bond?",
          "answer": "436",
          "feedback": "Correct. The H–H bond energy is 436 kJ/mol."
        },
        {
          "id": "q2",
          "prompt": "What is the energy needed to break the Cl–Cl bond?",
          "answer": "243",
          "feedback": "Correct. The Cl–Cl bond energy is 243 kJ/mol."
        },
        {
          "id": "q3",
          "prompt": "Which bond has the highest bond energy?",
          "answer": "H–H",
          "feedback": "Correct. The H–H bond requires the most energy to break (436 kJ/mol)."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Calculating Energy Change of a Reaction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The overall energy change of a chemical reaction is calculated by subtracting the total energy released when new bonds form in the products from the total energy needed to break bonds in the reactants:</p><p class=\"text-sm leading-6\">Energy change = <strong>Energy to break bonds (reactants)</strong> - <strong>Energy to form bonds (products)</strong></p><p>A positive value means the reaction is endothermic (absorbs energy), and a negative value means it is exothermic (releases energy).</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Energy Change Step-by-Step",
      "problem": "Calculate the energy change for a reaction where breaking bonds requires 500 kJ, and forming bonds releases 600 kJ.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the energy required to break bonds (kJ):",
          "answer": "500",
          "feedback": "Correct. Energy for breaking bonds is 500 kJ."
        },
        {
          "id": "q2",
          "prompt": "Enter the energy released when bonds are formed (kJ):",
          "answer": "600",
          "feedback": "Correct. Energy released forming bonds is 600 kJ."
        },
        {
          "id": "q3",
          "prompt": "Calculate the energy change using the formula (break - form):",
          "answer": "-100",
          "feedback": "Correct. 500 - 600 = -100 kJ. The reaction releases energy, so it is exothermic."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Reaction Profiles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A reaction profile graph shows the energy of reactants and products during a reaction. It includes the <em>activation energy</em> (energy needed to start the reaction) and the <em>overall energy change</em>. The y-axis is energy, and the x-axis is the progress of the reaction.</p><p>If products are at lower energy than reactants, the reaction is exothermic; if higher, endothermic.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine climbing a hill (activation energy) to go from one valley (reactants) to another (products). If the valley you reach is lower, you release energy (exothermic). If it is higher, you have absorbed energy (endothermic).</p>"
    },
    "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='160' fill='#fef7e7' stroke='#333'/><polyline points='60,180 120,80 180,120 240,130 300,100 360,110' fill='none' stroke='#ff7f0e' stroke-width='3'/><line x1='120' y1='180' x2='120' y2='80' stroke='#d62728' stroke-width='2' stroke-dasharray='4 4'/><text x='125' y='110' font-family='sans-serif' font-size='12' fill='#d62728'>Activation Energy</text><text x='55' y='195' font-family='sans-serif' font-size='12'>Reactants</text><text x='355' y='195' font-family='sans-serif' font-size='12'>Products</text><line x1='70' y1='150' x2='350' y2='100' stroke='#2ca02c' stroke-width='2'/><text x='200' y='140' font-family='sans-serif' font-size='12' fill='#2ca02c'>Overall energy change</text></svg>"
  },
  "step4": {
    "title": "Practice: Using Bond Energy Data to Calculate Reaction Energy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use bond energy values from a table to calculate the energy change for a reaction by summing bond energies for all bonds broken and all bonds formed.</p>",
    "workedExample": {
      "title": "Example Reaction: H<sub>2</sub> + Cl<sub>2</sub> → 2HCl",
      "problem": "Calculate the energy change for the reaction given these average bond energies:<br>H–H = 436 kJ/mol, Cl–Cl = 243 kJ/mol, H–Cl = 431 kJ/mol",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate total energy to break reactant bonds (H–H and Cl–Cl):",
          "answer": "679",
          "feedback": "Correct. 436 + 243 = 679 kJ."
        },
        {
          "id": "q2",
          "prompt": "Calculate total energy released forming product bonds (2 × H–Cl):",
          "answer": "862",
          "feedback": "Correct. 2 × 431 = 862 kJ."
        },
        {
          "id": "q3",
          "prompt": "Calculate overall energy change (break - form):",
          "answer": "-183",
          "feedback": "Correct. 679 - 862 = -183 kJ, so the reaction is exothermic."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following indicates an exothermic reaction?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The energy required to break bonds is less than the energy released forming bonds.</span>",
            "isCorrect": true,
            "explanation": "Correct. More energy is released than absorbed, so energy is given off."
          },
          {
            "id": "b",
            "label": "<span>The energy required to break bonds is greater than the energy released forming bonds.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This would be an endothermic reaction."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>On a reaction profile, what does the peak represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The energy of the reactants.</span>",
            "isCorrect": false,
            "explanation": "Wrong. The reactants are at lower energy before the peak."
          },
          {
            "id": "b",
            "label": "<span>The activation energy of the reaction.</span>",
            "isCorrect": true,
            "explanation": "Correct. The peak shows the highest energy point, the activation energy."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Using bond energy data, explain how to calculate the energy change of the following reaction and state whether it is exothermic or endothermic:<br>CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</span>",
      "hint": "Remember to identify all bonds broken in the reactants and all bonds formed in the products, then apply the formula Energy change = bonds broken - bonds formed.",
      "mustHaveKeywords": ["bond energy", "bonds broken", "bonds formed", "energy change", "exothermic", "endothermic"],
      "optionalKeywords": ["activation energy", "reaction profile", "kJ/mol"],
      "modelAnswer": "<span>To calculate the energy change, first sum the bond energies of all bonds broken in reactants (C–H and O=O bonds in CH<sub>4</sub> and O<sub>2</sub>). Next, sum the bond energies of all bonds formed in products (C=O bonds in CO<sub>2</sub> and O–H bonds in H<sub>2</sub>O). Subtract the total energy released forming bonds from the total energy required to break bonds. If the result is negative, the reaction is exothermic; if positive, it is endothermic.</span>",
      "scaffoldPrompts": [
        "Identify and list all the bonds broken in the reactants.",
        "Identify and list all the bonds formed in the products.",
        "Calculate the total energy needed to break bonds.",
        "Calculate the total energy released on bond formation.",
        "Subtract to find the energy change.",
        "Interpret the sign of the energy change to classify the reaction."
      ]
    }
  }
};