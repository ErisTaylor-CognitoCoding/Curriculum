window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.4.3.4 - Electrolysis of aqueous solutions",
  "strapline": "Understanding how water affects ion discharge during electrolysis of aqueous salt solutions and predicting electrode products.",
  "learningObjectives": [
    "Students should understand how the presence of water affects which ions are discharged at each electrode during electrolysis of aqueous solutions (Chemistry 5.4.3.4)",
    "Students should be able to predict products at the anode and cathode, understanding that less reactive metals are deposited at the cathode whilst more reactive metals remain in solution, and that halide ions are discharged in preference to hydroxide ions at the anode unless the solution is very dilute (Chemistry 5.4.3.4)",
    "Students should be able to write half equations for electrode reactions and explain observations during the electrolysis of various salt solutions such as copper sulfate, sodium chloride, and dilute sulfuric acid (Chemistry 5.4.3.4)"
  ],
  "keyFormulas": [
    "At cathode: Metal ions discharged if metal less reactive than hydrogen; otherwise H⁺ ions discharged producing H₂ gas",
    "At anode: Halide ions (Cl⁻, Br⁻, I⁻) discharged if present in concentration; otherwise OH⁻ ions discharged producing O₂ gas",
    "Half equations depend on ions discharged; e.g. Cu²⁺ + 2e⁻ → Cu, 2H₂O + 2e⁻ → H₂ + 2OH⁻, 4OH⁻ → O₂ + 2H₂O + 4e⁻"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f9f9f9' stroke='#333' /><line x1='120' y1='70' x2='120' y2='230' stroke='blue' stroke-width='5'/><line x1='280' y1='70' x2='280' y2='230' stroke='red' stroke-width='5'/><text x='120' y='40' fill='blue' font-size='18' font-family='sans-serif' text-anchor='middle' font-weight='bold'>Cathode (-)</text><text x='280' y='40' fill='red' font-size='18' font-family='sans-serif' text-anchor='middle' font-weight='bold'>Anode (+)</text><text x='200' y='140' fill='#333' font-family='sans-serif' font-size='16' text-anchor='middle'>Aqueous solution with ionic compound</text></svg>",
  "step1": {
    "title": "Concept: Aqueous Electrolysis and Ion Discharge",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When an ionic compound dissolves in water, it separates into its ions. During electrolysis of this aqueous solution, ions from the dissolved salt and water (H<sup>+</sup> and OH<sup>−</sup>) compete to be discharged (gain or lose electrons) at the electrodes. The nature of the ions discharged depends on their reactivity and the solution concentration.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Consider a race where several runners compete (ions trying to be discharged). The ones who are faster or more favored (less reactive or more concentrated ions) reach the finish line (electrodes) first and get to participate in reactions.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Competing Ions in Electrolysis",
      "problem": "A solution contains copper sulfate dissolved in water. Identify which ions will compete for discharge at the electrodes.",
      "questions": [
        {
          "id": "q1",
          "prompt": "List the positive ions present in the solution.",
          "answer": "Cu²⁺, H⁺",
          "feedback": "Correct. Copper ions and hydrogen ions from water are both present as cations."
        },
        {
          "id": "q2",
          "prompt": "List the negative ions present in the solution.",
          "answer": "SO₄²⁻, OH⁻",
          "feedback": "Correct. Sulfate ions and hydroxide ions from water are both present as anions."
        },
        {
          "id": "q3",
          "prompt": "Which positive ion is less reactive, Cu²⁺ or H⁺? Which ion will discharge at the cathode?",
          "answer": "Cu²⁺ is less reactive, so Cu²⁺ ions discharge at the cathode.",
          "feedback": "Correct. Less reactive Cu²⁺ ions are discharged in preference to H⁺."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Rules for Discharge at the Cathode",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">At the cathode (negative electrode), if the metal ion is less reactive than hydrogen, the metal ion is discharged and deposited as the metal. If the metal ion is more reactive than hydrogen, hydrogen ions from water are discharged instead producing hydrogen gas.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the cathode as a club with a guest list—only less reactive metals (VIPs) get to enter, while highly reactive metals are turned away, so hydrogen gas is produced instead.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Predicting Cathode Product",
      "problem": "Predict the cathode product during electrolysis of aqueous sodium chloride solution.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is sodium metal more or less reactive than hydrogen?",
          "answer": "More reactive",
          "feedback": "Correct. Sodium is more reactive than hydrogen."
        },
        {
          "id": "q2",
          "prompt": "Which ion will be discharged at the cathode, Na⁺ or H⁺?",
          "answer": "H⁺ ions",
          "feedback": "Correct. Hydrogen ions are discharged producing hydrogen gas."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Rules for Discharge at the Anode",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">At the anode (positive electrode), halide ions (Cl⁻, Br⁻, I⁻) are discharged in preference to hydroxide ions unless the solution is very dilute. If no halides are present or concentration is low, hydroxide ions are discharged producing oxygen gas.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the anode as a highly selective filter that allows halide ions through first because they are more ‘greedy’ for discharge, while hydroxide ions are backup participants.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Predicting Anode Product",
      "problem": "Predict the anode product during electrolysis of aqueous sodium chloride solution.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are chloride ions present in the solution?",
          "answer": "Yes",
          "feedback": "Correct, Cl⁻ ions are present from sodium chloride."
        },
        {
          "id": "q2",
          "prompt": "Will chloride ions or hydroxide ions discharge at the anode?",
          "answer": "Chloride ions discharge at the anode.",
          "feedback": "Correct, halide ions are discharged preferentially producing chlorine gas."
        }
      ]
    }
  },
  "step4": {
    "title": "Writing Half Equations for Electrode Reactions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Half equations show the transfer of electrons during oxidation or reduction at electrodes. At the cathode, reduction occurs (gain of electrons); at the anode, oxidation occurs (loss of electrons). Writing accurate half equations helps explain the products formed.</p>",
    "workedExample": {
      "title": "Worked Example: Half Equation for Copper Electrolysis",
      "problem": "Write the half equation for copper ion discharge at the cathode.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Copper ion charge and electrons needed?",
          "answer": "Cu²⁺ gains 2 electrons",
          "feedback": "Correct, Cu²⁺ requires 2 electrons."
        },
        {
          "id": "q2",
          "prompt": "Write the reduction half equation for Cu²⁺ ion.",
          "answer": "Cu²⁺ + 2e⁻ → Cu",
          "feedback": "Correct, copper ion is reduced to copper metal."
        }
      ]
    }
  },
  "step5": {
    "title": "Example Application: Electrolysis of Dilute Sulfuric Acid",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dilute sulfuric acid contains H⁺ and SO₄²⁻ ions. During electrolysis, water ions compete. Predict the products at each electrode.</p>",
    "workedExample": {
      "title": "Worked Example: Products at Electrodes",
      "problem": "Predict the gas produced at the cathode and anode during electrolysis of dilute sulfuric acid.",
      "questions": [
        {
          "id": "q1",
          "prompt": "At the cathode, which ion is discharged: H⁺ or a metal ion?",
          "answer": "H⁺ ions are discharged because there is no metal cation.",
          "feedback": "Correct, hydrogen ions are reduced to hydrogen gas."
        },
        {
          "id": "q2",
          "prompt": "At the anode, which ion is discharged: SO₄²⁻ or OH⁻?",
          "answer": "OH⁻ ions are discharged because sulfate is not discharged easily.",
          "feedback": "Correct, hydroxide ions oxidize to oxygen gas."
        },
        {
          "id": "q3",
          "prompt": "Write the half equation for the cathode reaction.",
          "answer": "2H⁺ + 2e⁻ → H₂",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Write the half equation for the anode reaction.",
          "answer": "4OH⁻ → O₂ + 2H₂O + 4e⁻",
          "feedback": "Correct."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how the products formed during electrolysis of aqueous copper sulfate differ from those formed during electrolysis of aqueous sodium chloride. Include half equations for the electrode reactions and reasons based on ion discharge rules.</span>",
      "hint": "Remember to consider metal reactivity, presence of halide ions, and competition from water ions.",
      "mustHaveKeywords": ["cathode", "anode", "less reactive metal", "halide ions", "hydrogen gas", "chlorine gas", "half equations"],
      "optionalKeywords": ["oxidation", "reduction", "hydroxide ions", "oxygen gas"],
      "modelAnswer": "<span>During electrolysis of aqueous copper sulfate, Cu²⁺ ions are less reactive than hydrogen and are reduced at the cathode to copper metal (<em>Cu²⁺ + 2e⁻ → Cu</em>). At the anode, sulfate ions are not discharged; instead, hydroxide ions from water are oxidized producing oxygen gas (<em>4OH⁻ → O₂ + 2H₂O + 4e⁻</em>).<br/>In contrast, for aqueous sodium chloride, sodium ions are more reactive than hydrogen, so hydrogen ions are reduced at the cathode producing hydrogen gas (<em>2H⁺ + 2e⁻ → H₂</em>). At the anode, chloride ions (halides) are discharged in preference to hydroxide ions producing chlorine gas (<em>2Cl⁻ → Cl₂ + 2e⁻</em>).</span>",
      "scaffoldPrompts": [
        "Identify ions present in each solution.",
        "Apply cathode discharge rules for metals and hydrogen.",
        "Apply anode discharge rules considering halide presence.",
        "Write half equations for cathode and anode reactions."
      ]
    }
  }
};