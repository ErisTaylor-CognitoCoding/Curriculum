window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.3.2.3 - Using moles to balance equations (HT only)",
  "strapline": "Use mole calculations to find stoichiometric ratios and verify balanced equations quantitatively.",
  "learningObjectives": [
    "Students should be able to use mole calculations to determine the correct stoichiometric ratios between reactants and products in chemical equations (Chemistry 5.3.2.3)",
    "Students should be able to convert between masses, moles and balanced symbol equations to verify that equations are correctly balanced using quantitative methods (Chemistry 5.3.2.3)"
  ],
  "keyFormulas": [
    "Moles = mass (g) ÷ molar mass (g/mol)",
    "Ratio of moles in balanced equation = coefficients in chemical equation",
    "Mass conservation: total mass of reactants = total mass of products"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>  <rect x='10' y='30' width='180' height='130' fill='#e0f7fa' stroke='#00796b' stroke-width='2' rx='10' ry='10'/>  <text x='100' y='20' font-family='Arial' font-size='16' fill='#004d40' text-anchor='middle'>Example Mole Ratio Diagram</text>  <circle cx='60' cy='100' r='18' fill='#26a69a'/>  <text x='60' y='105' font-family='Arial' font-size='20' fill='white' text-anchor='middle'>2 mol</text>  <text x='60' y='125' font-family='Arial' font-size='14' fill='#004d40' text-anchor='middle'>H₂</text>  <circle cx='140' cy='100' r='18' fill='#ef5350'/>  <text x='140' y='105' font-family='Arial' font-size='20' fill='white' text-anchor='middle'>1 mol</text>  <text x='140' y='125' font-family='Arial' font-size='14' fill='#b71c1c' text-anchor='middle'>O₂</text>  <line x1='78' y1='100' x2='122' y2='100' stroke='#004d40' stroke-width='2' marker-end='url(#arrowhead)'/>  <defs>    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#004d40' />    </marker>  </defs></svg>",
  "step1": {
    "title": "Concept: Understanding Stoichiometric Ratios",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In a balanced chemical equation, the stoichiometric ratios represent how many moles of each reactant and product react or are formed. These are given by the coefficients in the equation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of recipe ingredients where the quantity of each ingredient is proportional to others. The mole ratios tell us how much of each chemical ingredient is needed for the reaction, just like a recipe.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Identify Mole Ratios",
      "problem": "Consider the equation: <em>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</em>. Determine the mole ratio of H<sub>2</sub> to O<sub>2</sub>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the coefficient for H<sub>2</sub>?",
          "answer": "2",
          "feedback": "Correct, the coefficient for H<sub>2</sub> is 2."
        },
        {
          "id": "q2",
          "prompt": "What is the coefficient for O<sub>2</sub>?",
          "answer": "1",
          "feedback": "Correct, the coefficient for O<sub>2</sub> is 1."
        },
        {
          "id": "q3",
          "prompt": "What is the mole ratio of H<sub>2</sub> to O<sub>2</sub>?",
          "answer": "2:1",
          "feedback": "Exactly, the ratio of moles H<sub>2</sub> to O<sub>2</sub> is 2:1."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Mole-to-Mole Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the mole ratio from the balanced equation to calculate the amount of product formed or reactant used when the amount of another substance is known.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a recipe uses 2 cups of flour for every 1 cup of sugar, then knowing the flour amount helps calculate sugar needed. Similarly, mole ratios help calculate moles of substances.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Calculate Moles of Product",
      "problem": "In the reaction <em>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</em>, if you have 4 moles of H<sub>2</sub>, how many moles of H<sub>2</sub>O are produced?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mole ratio of H<sub>2</sub> to H<sub>2</sub>O?",
          "answer": "2",
          "feedback": "Correct, 2 moles of H<sub>2</sub> produce 2 moles of H<sub>2</sub>O; ratio is 2:2 or 1:1."
        },
        {
          "id": "q2",
          "prompt": "Given 4 moles of H<sub>2</sub>, how many moles of H<sub>2</sub>O are formed?",
          "answer": "4",
          "feedback": "Correct, 4 moles of H<sub>2</sub> produce 4 moles of H<sub>2</sub>O."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Converting Mass to Moles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the formula moles = mass ÷ molar mass to convert a given mass of a substance into moles, so it can be related to other substances by mole ratios.</p>",
    "workedExample": {
      "title": "Interactive Example: Calculate Moles from Mass",
      "problem": "Calculate the number of moles in 18g of H<sub>2</sub>O (molar mass = 18 g/mol).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mass given (g)?",
          "answer": "18",
          "feedback": "Correct, the mass is 18 g."
        },
        {
          "id": "q2",
          "prompt": "What is the molar mass of H<sub>2</sub>O (g/mol)?",
          "answer": "18",
          "feedback": "Correct, molar mass of H<sub>2</sub>O is 18 g/mol."
        },
        {
          "id": "q3",
          "prompt": "Calculate the moles: moles = mass ÷ molar mass = ?",
          "answer": "1",
          "feedback": "Correct, moles = 18 ÷ 18 = 1 mole."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Verifying Balanced Equations Using Mass and Moles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Check if a chemical equation is balanced by converting given masses to moles and comparing the mole ratios to the equation coefficients.</p>",
    "workedExample": {
      "title": "Interactive Example: Verify Balance by Mass",
      "problem": "Consider reaction: <em>N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub></em>. Given 28 g N<sub>2</sub> (molar mass 28 g/mol) and 6 g H<sub>2</sub> (molar mass 2 g/mol), determine if equation balances for these amounts.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate moles of N<sub>2</sub>: mass 28 g / molar mass 28 g/mol = ?",
          "answer": "1",
          "feedback": "Correct, 1 mole of N<sub>2</sub>."
        },
        {
          "id": "q2",
          "prompt": "Calculate moles of H<sub>2</sub>: mass 6 g / molar mass 2 g/mol = ?",
          "answer": "3",
          "feedback": "Correct, 3 moles of H<sub>2</sub>."
        },
        {
          "id": "q3",
          "prompt": "Compare mole ratio H<sub>2</sub> : N<sub>2</sub> with equation coefficients. Are they proportional?",
          "answer": "Yes",
          "feedback": "Correct, the ratio 3:1 matches coefficients: 3 moles H<sub>2</sub> react with 1 mole N<sub>2</sub>."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Calculating Masses Using Balanced Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">From moles calculated via ratios, convert back into mass using mass = moles × molar mass to find how much product or reactant is involved.</p>",
    "workedExample": {
      "title": "Interactive Example: Find Mass of Product",
      "problem": "Using <em>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</em>, if 4 moles of H<sub>2</sub> react, find the mass of H<sub>2</sub>O produced (molar mass = 18 g/mol).",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many moles of H<sub>2</sub>O are formed?",
          "answer": "4",
          "feedback": "Correct, mole ratio is 1:1, so 4 moles H<sub>2</sub> produce 4 moles H<sub>2</sub>O."
        },
        {
          "id": "q2",
          "prompt": "Calculate mass of H<sub>2</sub>O: moles × molar mass = ?",
          "answer": "72",
          "feedback": "Correct, 4 × 18 = 72 g of H<sub>2</sub>O."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A sample contains 10 g of carbon reacting with oxygen to form carbon dioxide. Write the balanced equation and use mole calculations to verify if the equation is balanced and calculate the mass of oxygen required.</span>",
      "hint": "Use molar masses C = 12 g/mol, O = 16 g/mol. Calculate moles carbon and relate to O<sub>2</sub> using mole ratios.",
      "mustHaveKeywords": ["moles", "stoichiometric ratio", "mass conservation", "balanced chemical equation"],
      "optionalKeywords": ["molar mass", "mass-to-moles conversion"],
      "modelAnswer": "<span>Balanced equation: C + O<sub>2</sub> → CO<sub>2</sub>. Moles of C = 10 ÷ 12 ≈ 0.83 mol. Mole ratio from equation is 1:1 between C and O<sub>2</sub>, so 0.83 mol O<sub>2</sub> needed. Mass of O<sub>2</sub> = 0.83 × (32 g/mol) = 26.6 g. Verified mass conservation between reactants and product.</span>",
      "scaffoldPrompts": [
        "1. Write and balance the chemical equation.",
        "2. Calculate moles of carbon from mass given.",
        "3. Use mole ratio to find moles of oxygen required.",
        "4. Convert moles of oxygen to mass.",
        "5. Confirm total mass of reactants equals mass of products."
      ]
    }
  }
};