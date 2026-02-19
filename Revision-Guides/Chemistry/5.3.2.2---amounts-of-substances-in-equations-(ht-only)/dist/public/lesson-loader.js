window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.3.2.2 - Amounts of substances in equations (HT only)",
  "strapline": "Understanding how to calculate the masses of reactants and products using balanced equations, molar ratios, and relative formula masses.",
  "learningObjectives": [
    "Students should be able to calculate the masses of reactants and products from balanced symbol equations (Chemistry 5.3.2.2)",
    "Students should be able to use relative formula masses and molar ratios from balanced equations to determine reacting masses (Chemistry 5.3.2.2)",
    "Students should be able to calculate how much product can be formed from given quantities of reactants using balanced equations (Chemistry 5.3.2.2)"
  ],
  "keyFormulas": [
    "Moles = Mass / Mr",
    "Mass = Moles × Mr",
    "Molar ratio from balanced equation used to relate moles of reactants and products"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg' font-family='Arial' font-size='14'><rect x='20' y='20' width='360' height='260' fill='#eef6ff' stroke='#3a8dde' stroke-width='2' rx='15' ry='15'/><text x='200' y='50' text-anchor='middle' fill='#054a91' font-weight='bold'>Example Reaction: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</text><line x1='80' y1='120' x2='160' y2='120' stroke='#3a8dde' stroke-width='2' marker-end='url(#arrow)'/><text x='115' y='110' text-anchor='middle' fill='#054a91'>2 mol H<sub>2</sub></text><line x1='80' y1='140' x2='160' y2='140' stroke='#3a8dde' stroke-width='2' marker-end='url(#arrow)'/><text x='115' y='160' text-anchor='middle' fill='#054a91'>1 mol O<sub>2</sub></text><line x1='240' y1='130' x2='320' y2='130' stroke='#3a8dde' stroke-width='2' marker-end='url(#arrow)'/><text x='280' y='120' text-anchor='middle' fill='#054a91'>2 mol H<sub>2</sub>O</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto'><path d='M0,0 L0,6 L9,3 z' fill='#3a8dde' /></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding Molar Ratios",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>molar ratio</strong> in a chemical equation tells us the relative amount of moles of reactants and products involved in the reaction. It is shown by the numbers in front of the chemical formulas in a balanced equation. For example, in the reaction <em>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</em> the molar ratio is 2:1:2.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the molar ratio as a recipe: if you want to make 2 cakes (products), you need 2 eggs (reactant A) and 1 cup of milk (reactant B). The numbers tell you the proportions needed.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Molar Ratio",
      "problem": "What is the molar ratio of reactants and products in the equation <strong>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</strong>?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many moles of H<sub>2</sub> are involved?",
          "answer": "2",
          "feedback": "Correct. The coefficient in front is 2."
        },
        {
          "id": "q2",
          "prompt": "How many moles of O<sub>2</sub> react?",
          "answer": "1",
          "feedback": "Right! The coefficient here is 1 (implicit)."
        },
        {
          "id": "q3",
          "prompt": "How many moles of H<sub>2</sub>O are produced?",
          "answer": "2",
          "feedback": "Yes! There are 2 moles of water formed."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Relative Formula Mass (Mr)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>relative formula mass (Mr)</strong> is the sum of the relative atomic masses of all atoms present in a compound. It is used to convert between mass in grams and amount in moles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of Mr as the 'weight' of one molecule or formula unit compared to the atomic mass unit scale, just like weighing the ingredients for a recipe.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Mr of Water",
      "problem": "Calculate the relative formula mass (Mr) of water, H<sub>2</sub>O.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the relative atomic mass of hydrogen (H)?",
          "answer": "1",
          "feedback": "Correct. Hydrogen has a relative atomic mass of 1."
        },
        {
          "id": "q2",
          "prompt": "What is the relative atomic mass of oxygen (O)?",
          "answer": "16",
          "feedback": "Correct. Oxygen has a relative atomic mass of 16."
        },
        {
          "id": "q3",
          "prompt": "Calculate total Mr: (2 × H) + (1 × O) = ?",
          "answer": "18",
          "feedback": "Right! 2 × 1 + 16 = 18."
        }
      ]
    }
  },
  "step3": {
    "title": "Calculating Moles from Mass and Mr",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the formula: <strong>moles = mass ÷ Mr</strong>; this allows you to find the amount of substance from its mass.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Moles of Water",
      "problem": "How many moles are in 36 g of water (Mr = 18)?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the given mass of water?",
          "answer": "36",
          "feedback": "Correct. The mass given is 36 g."
        },
        {
          "id": "q2",
          "prompt": "What is the relative formula mass (Mr) of water?",
          "answer": "18",
          "feedback": "Correct. Mr is 18."
        },
        {
          "id": "q3",
          "prompt": "Calculate the moles: mass ÷ Mr = ?",
          "answer": "2",
          "feedback": "Yes! 36 ÷ 18 = 2 moles."
        }
      ]
    }
  },
  "step4": {
    "title": "Using Molar Ratios to Find Moles of Other Reactants or Products",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Once you know the moles of one substance, use the molar ratio from the balanced equation to find moles of other substances involved.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Moles of Oxygen Needed",
      "problem": "If 2 moles of H<sub>2</sub> react, how many moles of O<sub>2</sub> are needed in the equation <em>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</em>?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the molar ratio of H<sub>2</sub> to O<sub>2</sub>?",
          "answer": "2:1",
          "feedback": "Correct. The ratio is 2 moles H<sub>2</sub> to 1 mole O<sub>2</sub>."
        },
        {
          "id": "q2",
          "prompt": "Given 2 moles of H<sub>2</sub>, how many moles of O<sub>2</sub> are required?",
          "answer": "1",
          "feedback": "Correct. 2 mol H<sub>2</sub> reacts with 1 mol O<sub>2</sub>."
        }
      ]
    }
  },
  "step5": {
    "title": "Calculating Mass of Product Formed",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the moles of product (from molar ratio) and the Mr of product to calculate the mass formed: <strong>mass = moles × Mr</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Mass of Water Produced",
      "problem": "If 1 mole of O<sub>2</sub> reacts, how much mass of water is produced using <em>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</em> (Mr H<sub>2</sub>O = 18)?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the molar ratio of O<sub>2</sub> to H<sub>2</sub>O?",
          "answer": "1:2",
          "feedback": "Correct. 1 mole of O<sub>2</sub> gives 2 moles H<sub>2</sub>O."
        },
        {
          "id": "q2",
          "prompt": "How many moles of water are produced from 1 mole of O<sub>2</sub>?",
          "answer": "2",
          "feedback": "Yes, 2 moles of H<sub>2</sub>O."
        },
        {
          "id": "q3",
          "prompt": "Calculate the mass of 2 moles of water (mass = moles × Mr):",
          "answer": "36",
          "feedback": "Correct. 2 × 18 = 36 g."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Calculate the mass of aluminum oxide formed when 54 g of aluminum reacts with excess oxygen in the reaction: 4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub>.</span>",
      "hint": "Start by calculating moles of Al, then use the molar ratio to find moles of Al<sub>2</sub>O<sub>3</sub>, and finally calculate the mass using Mr.",
      "mustHaveKeywords": ["moles", "molar ratio", "Mr", "balanced equation"],
      "optionalKeywords": ["limiting reagent", "stoichiometry", "mass calculation"],
      "modelAnswer": "<span>First, calculate moles of Al: moles = mass / Mr = 54 / 27 = 2 moles.<br>Use molar ratio from balanced equation: 4 moles Al produce 2 moles Al<sub>2</sub>O<sub>3</sub>, so 2 moles Al produce (2 × 2/4) = 1 mole Al<sub>2</sub>O<sub>3</sub>.<br>Calculate Mr of Al<sub>2</sub>O<sub>3</sub>: (2 × 27) + (3 × 16) = 54 + 48 = 102.<br>Mass of Al<sub>2</sub>O<sub>3</sub> = moles × Mr = 1 × 102 = 102 g.</span>",
      "scaffoldPrompts": [
        "Calculate moles of aluminum:",
        "Identify molar ratio between aluminum and aluminum oxide:",
        "Calculate moles of aluminum oxide formed:",
        "Calculate mass of aluminum oxide formed:"
      ]
    }
  }
};