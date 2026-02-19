window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.3.1.2 - Relative formula mass",
  "strapline": "Understanding how to calculate the relative formula mass (Mr) of compounds by adding relative atomic masses from the chemical formula.",
  "learningObjectives": [
    "Students should be able to calculate the relative formula mass (Mr) of compounds by adding together the relative atomic masses of all atoms shown in the chemical formula (Chemistry 5.3.1.2)",
    "Students should be able to use the periodic table to find relative atomic masses and apply this skill to work out the Mr for simple and complex substances including those with brackets in their formulae (Chemistry 5.3.1.2)"
  ],
  "keyFormulas": [
    "Relative formula mass (Mr) = sum of relative atomic masses (Ar) of all atoms in the formula",
    "Relative atomic mass (Ar) = mass of an atom relative to 1/12th the mass of carbon-12 atom",
    "Use brackets in formulas to multiply groups of atoms: e.g., Ca(OH)2 means 1 Calcium, 2 Oxygen, 2 Hydrogen atoms"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='380' height='130' rx='15' ry='15' fill='#e8f4f8' stroke='#0077b6' stroke-width='2'/><text x='200' y='40' font-family='Arial' font-size='18' fill='#023e8a' text-anchor='middle' font-weight='bold'>Sodium Chloride (NaCl) Formula</text><circle cx='130' cy='90' r='25' fill='#f94144'/><text x='130' y='95' font-family='Arial' font-size='20' fill='white' text-anchor='middle'>Na</text><circle cx='270' cy='90' r='25' fill='#577590'/><text x='270' y='95' font-family='Arial' font-size='20' fill='white' text-anchor='middle'>Cl</text><line x1='155' y1='90' x2='245' y2='90' stroke='#023e8a' stroke-width='4' stroke-linecap='round'/></svg>",
  "step1": {
    "title": "Concept: Understanding Relative Atomic Mass",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>Relative Atomic Mass (Ar)</strong> is the weighted average mass of an atom of an element compared to 1/12th the mass of a carbon-12 atom. We find this number for each element on the periodic table as the larger number above the element symbol.</p><p>For example, the relative atomic mass of oxygen (O) is approximately <strong>16</strong>, and hydrogen (H) is approximately <strong>1</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the carbon-12 atom as a standard weight. Then every other atom’s mass is compared against this standard to give the Relative Atomic Mass, similar to comparing weights to a standard kilogram.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Ar from the Periodic Table",
      "problem": "Using a periodic table, find the relative atomic mass (Ar) of sulfur (S).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the atomic number (number of protons) of sulfur (S)?",
          "answer": "16",
          "feedback": "Correct. Sulfur has 16 protons."
        },
        {
          "id": "q2",
          "prompt": "What is the larger number usually shown on the periodic table for sulfur indicating Ar?",
          "answer": "32",
          "feedback": "Correct. Sulfur’s relative atomic mass is approximately 32."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: What is Relative Formula Mass (Mr)?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>Relative Formula Mass (Mr)</strong> of a compound is the sum of the relative atomic masses of all the atoms in its chemical formula. It represents the total mass of one formula unit of the compound relative to carbon-12.</p><p>For example, in water (H<sub>2</sub>O), the Mr is calculated by adding Ar of 2 hydrogens plus Ar of 1 oxygen.</p>",
    "workedExample": {
      "title": "Interactive Example: Calculate Mr of Water",
      "problem": "Calculate the relative formula mass of H<sub>2</sub>O step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the Ar of hydrogen (H)?",
          "answer": "1",
          "feedback": "Correct. Ar of hydrogen is 1."
        },
        {
          "id": "q2",
          "prompt": "How many hydrogen atoms are in H<sub>2</sub>O?",
          "answer": "2",
          "feedback": "Correct. There are 2 hydrogen atoms."
        },
        {
          "id": "q3",
          "prompt": "What is the Ar of oxygen (O)?",
          "answer": "16",
          "feedback": "Correct. Ar of oxygen is 16."
        },
        {
          "id": "q4",
          "prompt": "How many oxygen atoms are in H<sub>2</sub>O?",
          "answer": "1",
          "feedback": "Correct. There is 1 oxygen atom."
        },
        {
          "id": "q5",
          "prompt": "Calculate the total Mr of H<sub>2</sub>O (2 × Ar(H) + 1 × Ar(O)):",
          "answer": "18",
          "feedback": "Well done! Mr of water is 18."
        }
      ]
    }
  },
  "step3": {
    "title": "Using the Periodic Table to Find Ar",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To calculate relative formula masses, you must use a periodic table to find the <strong>Ar</strong> of each element in the compound.</p><p>Remember to use the larger number (usually decimal or whole) above the element symbol. You can round to the nearest whole number for calculations at this level.</p>",
    "workedExample": {
      "title": "Practice: Find the Ar of Elements",
      "problem": "Find the Ar of the following elements: Carbon (C), Hydrogen (H), and Oxygen (O).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the Ar of Carbon (C)?",
          "answer": "12",
          "feedback": "Correct! Carbon’s Ar is approximately 12."
        },
        {
          "id": "q2",
          "prompt": "What is the Ar of Hydrogen (H)?",
          "answer": "1",
          "feedback": "Correct! Hydrogen’s Ar is approximately 1."
        },
        {
          "id": "q3",
          "prompt": "What is the Ar of Oxygen (O)?",
          "answer": "16",
          "feedback": "Correct! Oxygen’s Ar is approximately 16."
        }
      ]
    }
  },
  "step4": {
    "title": "Calculating Mr for a Simple Compound",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Add the relative atomic masses of every atom shown in the chemical formula to calculate the relative formula mass (Mr) of simple compounds with no brackets.</p><p>Example: Sodium chloride (NaCl) consists of one sodium atom and one chlorine atom.</p>",
    "workedExample": {
      "title": "Calculate Mr of NaCl",
      "problem": "Calculate the relative formula mass of sodium chloride (NaCl).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the Ar of Sodium (Na)?",
          "answer": "23",
          "feedback": "Correct. Ar of sodium is 23."
        },
        {
          "id": "q2",
          "prompt": "What is the Ar of Chlorine (Cl)?",
          "answer": "35.5",
          "feedback": "Correct. Ar of chlorine is approximately 35.5."
        },
        {
          "id": "q3",
          "prompt": "What is the total Mr of NaCl (Ar(Na) + Ar(Cl))?",
          "answer": "58.5",
          "feedback": "Great! The relative formula mass of NaCl is 58.5."
        }
      ]
    }
  },
  "step5": {
    "title": "Calculating Mr for Compounds with Brackets",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a formula contains brackets, multiply the Ar of every atom inside the bracket by the number outside the bracket before adding to the rest of the formula.</p><p>For example, in calcium hydroxide Ca(OH)<sub>2</sub>, the (OH) group is multiplied by 2.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 120' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' font-family='Arial' font-size='18' fill='#023e8a'>Ca(OH)<tspan dy='-10' font-size='12'>2</tspan></text><rect x='120' y='10' width='50' height='50' fill='#ffd166' stroke='#073b4c' stroke-width='2' ry='10'/><text x='145' y='40' font-family='Arial' font-size='20' fill='#073b4c' text-anchor='middle'>O</text><rect x='175' y='10' width='50' height='50' fill='#06d6a0' stroke='#073b4c' stroke-width='2' ry='10'/><text x='200' y='40' font-family='Arial' font-size='20' fill='#073b4c' text-anchor='middle'>H</text><text x='120' y='80' font-family='Arial' font-size='14' fill='#073b4c'>× 2</text></svg>",
    "workedExample": {
      "title": "Interactive Example: Calculate Mr of Ca(OH)2",
      "problem": "Calculate the relative formula mass of calcium hydroxide Ca(OH)<sub>2</sub> step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the Ar of calcium (Ca).",
          "answer": "40",
          "feedback": "Correct! Calcium has Ar = 40."
        },
        {
          "id": "q2",
          "prompt": "Find the Ar of oxygen (O).",
          "answer": "16",
          "feedback": "Correct! Oxygen has Ar = 16."
        },
        {
          "id": "q3",
          "prompt": "Find the Ar of hydrogen (H).",
          "answer": "1",
          "feedback": "Correct! Hydrogen has Ar = 1."
        },
        {
          "id": "q4",
          "prompt": "Calculate the total mass of (OH) group before multiplying by 2. (Ar(O) + Ar(H))",
          "answer": "17",
          "feedback": "Well done! 16 + 1 = 17."
        },
        {
          "id": "q5",
          "prompt": "Multiply the mass of (OH) by 2:",
          "answer": "34",
          "feedback": "Correct. 17 × 2 = 34."
        },
        {
          "id": "q6",
          "prompt": "Add the Ar of calcium to get total Mr (40 + 34):",
          "answer": "74",
          "feedback": "Excellent! Mr of Ca(OH)2 is 74."
        }
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following correctly describes the term relative formula mass (Mr)?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The sum of all relative atomic masses in a compound’s formula</span>",
            "isCorrect": true,
            "explanation": "Correct. Mr is the total of all Ar values in the compound."
          },
          {
            "id": "b",
            "label": "<span>The actual mass of one molecule measured in grams</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Mr is a relative number, not an actual mass."
          },
          {
            "id": "c",
            "label": "<span>The number of atoms in one molecule of a compound</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This describes the formula units, not Mr."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What is the effect of the bracket in Ca(OH)<sub>2</sub> when calculating Mr?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The numbers inside the bracket are added to the outside number</span>",
            "isCorrect": false,
            "explanation": "No. The outside number multiplies all atoms inside the bracket."
          },
          {
            "id": "b",
            "label": "<span>The outside number multiplies all atoms inside the bracket</span>",
            "isCorrect": true,
            "explanation": "Correct. The 2 multiplies O and H atoms inside the bracket."
          },
          {
            "id": "c",
            "label": "<span>The bracket means the group is ignored in the calculation</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The group inside bracket is always included and multiplied."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> represents the total sum of the relative atomic masses of the atoms in a compound.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "Mr",
                "label": "Relative formula mass (Mr)",
                "isCorrect": true,
                "feedback": "Correct! Mr is the total sum for a compound."
              },
              {
                "value": "Ar",
                "label": "Relative atomic mass (Ar)",
                "isCorrect": false,
                "feedback": "No, Ar relates to single atoms only."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The number outside brackets in a chemical formula acts to <span class=\"font-semibold\">_____</span> the number of atoms inside the bracket.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "multiply",
                "label": "Multiply",
                "isCorrect": true,
                "feedback": "Correct! It multiplies all atoms inside."
              },
              {
                "value": "add",
                "label": "Add",
                "isCorrect": false,
                "feedback": "Incorrect. It multiplies rather than adds."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Practice Problem: Calculate Mr for Sulfuric Acid (H2SO4)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Sulfuric acid’s chemical formula is H<sub>2</sub>SO<sub>4</sub>. Calculate its Mr by finding each element’s Ar and applying the correct atom counts.</p>",
    "workedExample": {
      "title": "Step-by-step calculation",
      "problem": "Calculate the Mr of H<sub>2</sub>SO<sub>4</sub>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the Ar of hydrogen (H)?",
          "answer": "1",
          "feedback": "Correct. Ar for H is 1."
        },
        {
          "id": "q2",
          "prompt": "How many hydrogen atoms are in H<sub>2</sub>SO<sub>4</sub>?",
          "answer": "2",
          "feedback": "Correct. There are 2 hydrogens."
        },
        {
          "id": "q3",
          "prompt": "What is the Ar of sulfur (S)?",
          "answer": "32",
          "feedback": "Correct. Ar for sulfur is 32."
        },
        {
          "id": "q4",
          "prompt": "How many sulfur atoms are present?",
          "answer": "1",
          "feedback": "Correct. Only 1 sulfur atom."
        },
        {
          "id": "q5",
          "prompt": "What is the Ar of oxygen (O)?",
          "answer": "16",
          "feedback": "Correct. Ar for oxygen is 16."
        },
        {
          "id": "q6",
          "prompt": "How many oxygen atoms are there?",
          "answer": "4",
          "feedback": "Correct. There are 4 oxygen atoms."
        },
        {
          "id": "q7",
          "prompt": "Calculate total Ar for hydrogen (2 × 1):",
          "answer": "2",
          "feedback": "Correct."
        },
        {
          "id": "q8",
          "prompt": "Calculate total Ar for sulfur (1 × 32):",
          "answer": "32",
          "feedback": "Correct."
        },
        {
          "id": "q9",
          "prompt": "Calculate total Ar for oxygen (4 × 16):",
          "answer": "64",
          "feedback": "Correct."
        },
        {
          "id": "q10",
          "prompt": "Add all together to find Mr (2 + 32 + 64):",
          "answer": "98",
          "feedback": "Well done! Mr of H2SO4 is 98."
        }
      ]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Calculate the relative formula mass of magnesium nitrate, Mg(NO<sub>3</sub>)<sub>2</sub>. Show your working.</span>",
      "hint": "Remember to find Ar values for Mg, N, and O. Multiply the atoms inside the brackets by the number outside.",
      "mustHaveKeywords": ["Ar", "multiply", "add", "Mg", "N", "O", "brackets"],
      "optionalKeywords": ["relative formula mass", "Mr", "atomic masses", "chemical formula"],
      "modelAnswer": "<span>First, find the Ar of magnesium (Mg=24), nitrogen (N=14), and oxygen (O=16). The formula Mg(NO<sub>3</sub>)<sub>2</sub> has 1 Mg atom, 2 nitrate groups.<br/>Each NO<sub>3</sub> contains 1 N and 3 O atoms, so multiply by 2: total N = 2 × 1 = 2 atoms; total O = 3 × 2 = 6 atoms.<br/>Calculate Mr: Mg = 24, N = 14 × 2 = 28, O = 16 × 6 = 96.<br/>Add all: 24 + 28 + 96 = 148.<br/>Therefore, the Mr of magnesium nitrate is 148.</span>",
      "scaffoldPrompts": [
        "Identify Ar values for each element in the formula.",
        "Calculate total atoms for N and O inside the bracket multiplied by 2.",
        "Sum all Ar values to find total Mr."
      ]
    }
  }
};