window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.3.2.4 - Limiting reactants (HT only)",
  "strapline": "Understanding which reactant limits product formation and calculating maximum product in reactions with non-stoichiometric reactant amounts.",
  "learningObjectives": [
    "Students should understand that when two or more reactants are mixed, one reactant may be completely used up first (the limiting reactant), preventing further product formation (Chemistry 5.3.2.4)",
    "Students should calculate which reactant is the limiting reactant by comparing the moles of each reactant present to the moles required according to the balanced equation (Chemistry 5.3.2.4)",
    "Students should use the limiting reactant concept to determine the maximum amount of product that can be formed in reactions where reactants are not present in exact stoichiometric proportions (Chemistry 5.3.2.4)"
  ],
  "keyFormulas": [
    "Moles = mass / molar mass",
    "Mole ratio from balanced equation: aA + bB → products",
    "Maximum product moles = limiting reactant moles × product/reactant stoichiometric ratio"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='100' width='150' height='80' fill='#9ae6b4' stroke='#2f855a' stroke-width='3'/><text x='95' y='150' font-family='Arial' font-size='16' fill='#2f855a' text-anchor='middle'>Reactant A (Limiting)</text><rect x='230' y='100' width='150' height='80' fill='#90cdf4' stroke='#2b6cb0' stroke-width='3'/><text x='305' y='150' font-family='Arial' font-size='16' fill='#2b6cb0' text-anchor='middle'>Reactant B (Excess)</text><polygon points='170,140 230,130 230,170 170,160' fill='#f6ad55' /><text x='200' y='125' font-family='Arial' font-size='14' fill='#dd6b20' text-anchor='middle'>Reaction</text><circle cx='200' cy='230' r='40' fill='#f56565' stroke='#c53030' stroke-width='3'/><text x='200' y='235' font-family='Arial' font-size='16' fill='white' text-anchor='middle'>Product</text></svg>",
  "step1": {
    "title": "Concept: Understanding the Limiting Reactant",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When two or more reactants are combined in a chemical reaction, one reactant might run out before the others. This reactant is called the <strong>limiting reactant</strong>. It limits the amount of product made because the reaction stops as soon as this reactant is used up.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine making sandwiches with 10 slices of bread and 8 slices of cheese. Bread is the limiting item because after using all the bread, you can’t make any more sandwiches, even though cheese remains.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying the Limiting Reactant",
      "problem": "Consider the reaction: <strong>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</strong>. You have 4 moles of H<sub>2</sub> and 3 moles of O<sub>2</sub>. Which is the limiting reactant?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many moles of H<sub>2</sub> are required for 3 moles of O<sub>2</sub>?",
          "answer": "6",
          "feedback": "Correct! From the balanced equation 2 moles H<sub>2</sub> react with 1 mole O<sub>2</sub>, so 3 moles O<sub>2</sub> need 6 moles H<sub>2</sub>."
        },
        {
          "id": "q2",
          "prompt": "Do you have enough H<sub>2</sub> to react with 3 moles of O<sub>2</sub>?",
          "answer": "No",
          "feedback": "Correct. You only have 4 moles H<sub>2</sub>, less than the 6 needed, so H<sub>2</sub> is limiting."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Excess Reactant",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>excess reactant</strong> is the reactant that remains after the limiting reactant is fully consumed. It is present in greater amount than required by the balanced equation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the sandwich example, cheese is the excess reactant because there are slices left unused once the bread is all used up.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Determining Excess Reactant Leftover",
      "problem": "For the reaction <strong>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</strong>, if 4 moles H<sub>2</sub> react with 3 moles O<sub>2</sub>, calculate how many moles of O<sub>2</sub> are left unreacted after the reaction finishes (H<sub>2</sub> limiting).",
      "questions": [
        {
          "id": "q3",
          "prompt": "What is the mole ratio of H<sub>2</sub> to O<sub>2</sub> from the equation?",
          "answer": "2:1",
          "feedback": "Correct! 2 moles H<sub>2</sub> react with 1 mole O<sub>2</sub>."
        },
        {
          "id": "q4",
          "prompt": "How many moles of O<sub>2</sub> will react with 4 moles of H<sub>2</sub>?",
          "answer": "2",
          "feedback": "Correct. 4 moles H<sub>2</sub> require 2 moles O<sub>2</sub> (half the moles of hydrogen)."
        },
        {
          "id": "q5",
          "prompt": "How many moles of O<sub>2</sub> remain unused?",
          "answer": "1",
          "feedback": "Correct! Originally 3 moles O<sub>2</sub> minus 2 moles used equals 1 mole leftover."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Stoichiometric Proportions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Reactants mixed in <strong>stoichiometric proportions</strong> have mole amounts exactly matching the mole ratio from the balanced equation. This means no reactant is in excess or limiting.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like having exactly 10 slices each of bread and cheese for sandwiches, so both run out simultaneously.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Checking for Stoichiometric Proportions",
      "problem": "Is a mixture of 2 moles H<sub>2</sub> and 1 mole O<sub>2</sub> in stoichiometric proportions for <strong>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</strong>?",
      "questions": [
        {
          "id": "q6",
          "prompt": "What ratio do the reactants have?",
          "answer": "2:1",
          "feedback": "Correct! The ratio of H<sub>2</sub> to O<sub>2</sub> is 2 to 1."
        },
        {
          "id": "q7",
          "prompt": "Is this the same as the balanced equation ratio?",
          "answer": "Yes",
          "feedback": "Correct! This matches the stoichiometric ratio exactly."
        }
      ]
    }
  },
  "step4": {
    "title": "Calculating Moles from Mass",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To use mole ratios, first convert masses of reactants to moles using <strong>moles = mass ÷ molar mass</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Converting Mass to Moles",
      "problem": "Calculate moles of 8 g H<sub>2</sub> given molar mass of H<sub>2</sub> is 2 g/mol.",
      "questions": [
        {
          "id": "q8",
          "prompt": "What is the formula to calculate moles?",
          "answer": "mass / molar mass",
          "feedback": "Correct!"
        },
        {
          "id": "q9",
          "prompt": "Calculate moles of H<sub>2</sub> from 8 g.",
          "answer": "4",
          "feedback": "Correct. 8 g ÷ 2 g/mol = 4 moles."
        }
      ]
    }
  },
  "step5": {
    "title": "Determining the Limiting Reactant Using Moles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">After calculating moles of each reactant, compare the mole ratios with those from the balanced equation to find the limiting reactant.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Limiting Reactant from Masses",
      "problem": "Given 8 g H<sub>2</sub> and 48 g O<sub>2</sub>, molar masses 2 g/mol H<sub>2</sub> and 32 g/mol O<sub>2</sub>, find the limiting reactant for <strong>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</strong>.",
      "questions": [
        {
          "id": "q10",
          "prompt": "Calculate moles of H<sub>2</sub>.",
          "answer": "4",
          "feedback": "Correct."
        },
        {
          "id": "q11",
          "prompt": "Calculate moles of O<sub>2</sub>.",
          "answer": "1.5",
          "feedback": "Correct. 48 g ÷ 32 g/mol = 1.5 moles."
        },
        {
          "id": "q12",
          "prompt": "How many moles of H<sub>2</sub> are needed to react with 1.5 moles O<sub>2</sub>?",
          "answer": "3",
          "feedback": "Correct! Using 2:1 ratio, 1.5 mol O<sub>2</sub> × 2 = 3 mol H<sub>2</sub>."
        },
        {
          "id": "q13",
          "prompt": "Do you have enough H<sub>2</sub> to react with 1.5 moles O<sub>2</sub>?",
          "answer": "Yes",
          "feedback": "Correct. You have 4 moles H<sub>2</sub>, more than 3 required, so O<sub>2</sub> is limiting."
        }
      ]
    }
  },
  "step6": {
    "title": "Using Limiting Reactant to Find Maximum Product",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The amount of product formed depends only on the limiting reactant. Use its moles and the balanced equation’s mole ratio to find maximum product possible.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Maximum Water Formed",
      "problem": "For the reaction <strong>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</strong>, how many moles of water can form from limiting reactant O<sub>2</sub> at 1.5 moles?",
      "questions": [
        {
          "id": "q14",
          "prompt": "What is the mole ratio of O<sub>2</sub> to H<sub>2</sub>O?",
          "answer": "1:2",
          "feedback": "Correct."
        },
        {
          "id": "q15",
          "prompt": "Calculate moles of H<sub>2</sub>O produced from 1.5 moles O<sub>2</sub>.",
          "answer": "3",
          "feedback": "Correct! 1.5 × 2 = 3 moles H<sub>2</sub>O."
        }
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A student reacts 5.0 g of magnesium with 10.0 g of oxygen. The balanced equation is <strong>2Mg + O<sub>2</sub> → 2MgO</strong>. Identify the limiting reactant, calculate the maximum mass of MgO formed, and the mass of excess reactant left over.</span>",
      "hint": "Remember to calculate moles of each reactant first, then compare to balanced ratios. Use molar masses: Mg = 24 g/mol, O<sub>2</sub> = 32 g/mol, MgO = 40 g/mol.",
      "mustHaveKeywords": ["limiting reactant", "maximum mass", "excess reactant", "molecules", "molar mass"],
      "optionalKeywords": ["stoichiometric ratio", "mole calculations", "reaction stops"],
      "modelAnswer": "<span>First convert mass to moles: 5.0 g Mg = 5.0 ÷ 24 = 0.208 mol; 10.0 g O<sub>2</sub> = 10.0 ÷ 32 = 0.3125 mol. From equation, 2 mol Mg reacts with 1 mol O<sub>2</sub>, so 0.208 mol Mg needs 0.104 mol O<sub>2</sub>. Since 0.3125 mol O<sub>2</sub> available &gt; 0.104 mol, Mg is limiting. Max MgO formed = moles MgO = moles Mg = 0.208 mol. Mass MgO = 0.208 × 40 = 8.32 g. Oxygen remaining = 0.3125 - 0.104 = 0.2085 mol = 0.2085 × 32 = 6.67 g leftover.</span>",
      "scaffoldPrompts": [
        "Convert grams to moles for each reactant.",
        "Use mole ratios from the equation to find limiting reactant.",
        "Calculate moles of product from limiting reactant.",
        "Convert moles of product to grams.",
        "Calculate leftover excess reactant."
      ]
    }
  }
};