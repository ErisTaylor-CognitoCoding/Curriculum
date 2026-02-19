window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.3.1.4 - Chemical measurements",
  "strapline": "Understanding how to measure chemical quantities using relative formula mass, the mole concept, and solution concentration.",
  "learningObjectives": [
    "Students should be able to calculate the relative formula mass (Mr) of a substance from its chemical formula and relative atomic masses (Chemistry 5.3.1.4)",
    "Students should be able to use the mole concept to relate the amount of substance in moles to mass in grams and apply the formula: mass = moles \u00d7 Mr (Chemistry 5.3.1.4)",
    "Students should be able to calculate the concentration of solutions in g/dm\u00b3 and mol/dm\u00b3, and convert between these units (Chemistry 5.3.1.4)"
  ],
  "keyFormulas": [
    "Relative Formula Mass, Mr = sum of relative atomic masses in chemical formula",
    "mass = moles \u00d7 Mr",
    "Concentration (g/dm\u00b3) = mass of solute (g) / volume of solution (dm\u00b3)",
    "Concentration (mol/dm\u00b3) = moles of solute / volume of solution (dm\u00b3)"
  ],
  "diagramHtml": "<svg viewBox='0 0 450 250' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='410' height='210' fill='#eef6f9' stroke='#3a3a3a'/><text x='225' y='40' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16'>Relative Formula Mass of H\u2082O</text><circle cx='120' cy='120' r='25' fill='#82c0cc' /><text x='120' y='125' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#fff'>H</text><text x='120' y='145' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#fff'>1</text><circle cx='190' cy='90' r='40' fill='#f6a623' /><text x='190' y='95' text-anchor='middle' font-family='sans-serif' font-size='16' fill='#fff'>O</text><text x='190' y='120' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#fff'>16</text><line x1='145' y1='120' x2='160' y2='100' stroke='#333' stroke-width='2' marker-end='url(#arrowhead)'/><line x1='135' y1='130' x2='160' y2='140' stroke='#333' stroke-width='2' marker-end='url(#arrowhead)'/><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#333'/></marker></defs><text x='350' y='130' font-family='sans-serif' font-weight='bold' font-size='16'>Mr = (2 \u00d7 1) + 16 = 18</text></svg>",
  "step1": {
    "title": "Concept: Relative Formula Mass (Mr)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Relative Formula Mass (Mr) is the sum of the relative atomic masses of all atoms in a chemical formula. It tells us the combined mass of one formula unit compared to the carbon-12 scale. For example, water (H<sub>2</sub>O) has two hydrogen atoms and one oxygen atom.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of Mr as the total weight of all the ingredients in a recipe. Just like adding the weight of each ingredient gives you the total weight of the dish, adding atomic masses gives you the Mr of the molecule.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Mr of H<sub>2</sub>O",
      "problem": "Let's find the Mr of water (H<sub>2</sub>O):",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many hydrogen atoms are in H<sub>2</sub>O?",
          "answer": "2",
          "feedback": "Correct. There are 2 hydrogen atoms."
        },
        {
          "id": "q2",
          "prompt": "What is the relative atomic mass of hydrogen (H)?",
          "answer": "1",
          "feedback": "Correct. Hydrogen has an atomic mass of 1."
        },
        {
          "id": "q3",
          "prompt": "Multiply the number of hydrogen atoms by their atomic mass: 2 × ?",
          "answer": "2",
          "feedback": "Right. 2 × 1 = 2."
        },
        {
          "id": "q4",
          "prompt": "How many oxygen atoms are in H<sub>2</sub>O?",
          "answer": "1",
          "feedback": "Correct. There is 1 oxygen atom."
        },
        {
          "id": "q5",
          "prompt": "What is the relative atomic mass of oxygen (O)?",
          "answer": "16",
          "feedback": "Correct. Oxygen has an atomic mass of 16."
        },
        {
          "id": "q6",
          "prompt": "Add the total mass of hydrogen and oxygen atoms together to find Mr: 2 + ?",
          "answer": "16",
          "feedback": "Right. 2 + 16 = 18."
        },
        {
          "id": "q7",
          "prompt": "What is the final Mr of water (H<sub>2</sub>O)?",
          "answer": "18",
          "feedback": "Exactly! Mr = 18."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: The Mole",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The mole is a unit measuring the amount of substance. One mole contains <strong>6.02 \u00d7 10<sup>23</sup></strong> particles (Avogadro's constant). The mass of one mole of a substance in grams equals its relative formula mass (Mr).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the mole like a 'chemist's dozen.' Just as a dozen means 12 items, a mole means approximately 6.02 × 10<sup>23</sup> particles, no matter what the particles are.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Mass from Moles",
      "problem": "Calculate the mass of 3 moles of water (H<sub>2</sub>O). Recall: Mr of H<sub>2</sub>O is 18.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the formula to calculate mass from moles and Mr?",
          "answer": "mass = moles × Mr",
          "feedback": "Correct formula."
        },
        {
          "id": "q2",
          "prompt": "Calculate the mass: 3 moles × 18 = ?",
          "answer": "54",
          "feedback": "Correct. Mass = 54 g."
        },
        {
          "id": "q3",
          "prompt": "What is the mass of 3 moles of water?",
          "answer": "54",
          "feedback": "Exactly! The mass is 54 g."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Concentration of Solutions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Concentration tells us how much solute is dissolved in a volume of solution. It can be expressed as grams per cubic decimetre (g/dm<sup>3</sup>) or moles per cubic decimetre (mol/dm<sup>3</sup>).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine making lemonade: concentration is like how strong or weak the lemonade tastes, depending on how much sugar (solute) is dissolved in the water (solvent).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Concentration in g/dm<sup>3</sup>",
      "problem": "You dissolve 20 g of sodium chloride (NaCl) in 2 dm<sup>3</sup> of solution. What is the concentration in g/dm<sup>3</sup>?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the formula for concentration in g/dm<sup>3</sup>?",
          "answer": "concentration = mass / volume",
          "feedback": "Correct formula."
        },
        {
          "id": "q2",
          "prompt": "Calculate: 20 g / 2 dm<sup>3</sup> = ?",
          "answer": "10",
          "feedback": "Correct. Concentration = 10 g/dm³."
        },
        {
          "id": "q3",
          "prompt": "What is the concentration of this solution in g/dm<sup>3</sup>?",
          "answer": "10",
          "feedback": "Correct! Concentration = 10 g/dm³."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 300 180' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='260' height='140' fill='#def2f1' stroke='#333' /><text x='150' y='50' font-family='sans-serif' font-weight='bold' font-size='16' text-anchor='middle'>Solution Container</text><rect x='50' y='70' width='200' height='60' fill='#75b8aa' /><text x='150' y='100' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#fff'>Dissolved NaCl</text><text x='150' y='130' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#fff'>20 g in 2 dm\u00b3</text></svg>"
    }
  },
  "step4": {
    "title": "Calculate Concentration in mol/dm³",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find concentration in mol/dm<sup>3</sup>, divide the number of moles of solute by the volume of solution in dm<sup>3</sup>.</p>",
    "workedExample": {
      "title": "Worked Example: Concentration in mol/dm<sup>3</sup>",
      "problem": "If 0.5 moles of NaCl is dissolved in 1 dm<sup>3</sup> of solution, what is the concentration in mol/dm<sup>3</sup>?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the formula for concentration in mol/dm<sup>3</sup>?",
          "answer": "concentration = moles / volume",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Calculate: 0.5 moles / 1 dm<sup>3</sup> = ?",
          "answer": "0.5",
          "feedback": "Correct concentration is 0.5 mol/dm³."
        }
      ]
    }
  },
  "step5": {
    "title": "Convert Concentration from g/dm³ to mol/dm³",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To convert concentration from g/dm<sup>3</sup> to mol/dm<sup>3</sup>, divide the concentration in grams by the relative formula mass (Mr).</p>",
    "workedExample": {
      "title": "Worked Example: Conversion Example",
      "problem": "A sodium chloride solution has a concentration of 58.5 g/dm<sup>3</sup>. NaCl has Mr = 58.5. Find the concentration in mol/dm<sup>3</sup>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide the concentration in g/dm<sup>3</sup> by Mr: 58.5 / 58.5 = ?",
          "answer": "1",
          "feedback": "Correct! The concentration is 1 mol/dm³."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A solution contains 0.25 moles of magnesium chloride (MgCl<sub>2</sub>) dissolved in 0.5 dm<sup>3</sup> of water. Calculate:</span><ol><li>The Mr of MgCl<sub>2</sub></li><li>The concentration of the solution in mol/dm<sup>3</sup></li><li>The concentration in g/dm<sup>3</sup></li></ol>",
      "hint": "Remember: Mr = sum of atomic masses; concentration (mol/dm³) = moles ÷ volume; to find g/dm³ multiply mol/dm³ by Mr.",
      "mustHaveKeywords": ["Mr", "moles", "volume", "concentration", "mass"],
      "optionalKeywords": ["Avogadro's constant", "relative atomic mass"],
      "modelAnswer": "<span>First, calculate the Mr:<br/>Mg = 24, Cl = 35.5 × 2 = 71<br/>Mr = 24 + 71 = 95<br/><br/>Concentration in mol/dm³ = 0.25 moles / 0.5 dm³ = 0.5 mol/dm³<br/><br/>Concentration in g/dm³ = 0.5 mol/dm³ × 95 = 47.5 g/dm³</span>",
      "scaffoldPrompts": [
        "Step 1: Write the atomic masses and calculate Mr",
        "Step 2: Calculate molar concentration",
        "Step 3: Calculate concentration in grams per dm³"
      ]
    }
  }
};