window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.3.1.1 - Conservation of mass and balanced chemical equations",
  "strapline": "Understanding the principle of conservation of mass and mastering the skill of writing balanced chemical equations with correct formulae and state symbols.",
  "learningObjectives": [
    "Students should understand that the total mass of reactants equals the total mass of products in a chemical reaction, demonstrating the principle of conservation of mass (Chemistry 5.3.1.1)",
    "Students should develop skills in writing balanced chemical equations using correct formulae and state symbols, ensuring that the number of atoms of each element is equal on both sides of the equation (Chemistry 5.3.1.1)",
    "Students should practise balancing equations by adjusting coefficients to represent the conservation of mass quantitatively (Chemistry 5.3.1.1)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Atoms rearranging in chemical reaction'>\n  <rect width='400' height='250' fill='#f9f9f9'/>\n  <!-- Reactants box -->\n  <rect x='20' y='30' width='160' height='190' fill='#d0e6f7' stroke='#2a7bbd' stroke-width='2'/>\n  <text x='100' y='20' font-family='Arial' font-weight='bold' font-size='16' text-anchor='middle' fill='#2a7bbd'>Reactants</text>\n  <!-- Atoms inside reactants -->\n  <circle cx='60' cy='70' r='15' fill='#f54242'/>\n  <circle cx='110' cy='70' r='15' fill='#42a5f5'/>\n  <circle cx='85' cy='130' r='15' fill='#f5a142'/>\n  <circle cx='135' cy='130' r='15' fill='#42f554'/>\n  <circle cx='60' cy='170' r='15' fill='#f54242'/>\n  <circle cx='110' cy='170' r='15' fill='#42a5f5'/>\n  <!-- Arrow -->\n  <polygon points='190,125 210,115 210,135' fill='#2a7bbd'/>\n  <polygon points='190,125 230,125 210,135' fill='#2a7bbd'/>\n  <!-- Products box -->\n  <rect x='240' y='30' width='140' height='190' fill='#d7f4d0' stroke='#3c7a2e' stroke-width='2'/>\n  <text x='310' y='20' font-family='Arial' font-weight='bold' font-size='16' text-anchor='middle' fill='#3c7a2e'>Products</text>\n  <!-- Atoms inside products rearranged -->\n  <circle cx='270' cy='90' r='15' fill='#f54242'/>\n  <circle cx='305' cy='90' r='15' fill='#42a5f5'/>\n  <circle cx='335' cy='90' r='15' fill='#f5a142'/>\n  <circle cx='285' cy='140' r='15' fill='#42f554'/>\n  <circle cx='320' cy='140' r='15' fill='#f54242'/>\n  <circle cx='355' cy='140' r='15' fill='#42a5f5'/>\n  <!-- Labels -->\n  <text x='60' y='105' font-family='Arial' font-size='12' fill='#000'>A</text>\n  <text x='110' y='105' font-family='Arial' font-size='12' fill='#000'>B</text>\n  <text x='85' y='165' font-family='Arial' font-size='12' fill='#000'>C</text>\n  <text x='135' y='165' font-family='Arial' font-size='12' fill='#000'>D</text>\n  <text x='270' y='125' font-family='Arial' font-size='12' fill='#000'>A</text>\n  <text x='305' y='125' font-family='Arial' font-size='12' fill='#000'>B</text>\n  <text x='335' y='125' font-family='Arial' font-size='12' fill='#000'>C</text>\n  <text x='285' y='175' font-family='Arial' font-size='12' fill='#000'>D</text>\n  <text x='320' y='175' font-family='Arial' font-size='12' fill='#000'>A</text>\n  <text x='355' y='175' font-family='Arial' font-size='12' fill='#000'>B</text>\n</svg>",
  "step1": {
    "title": "Concept: Conservation of Mass",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In any chemical reaction, the total mass of the reactants before the reaction is exactly equal to the total mass of the products formed. This is because atoms are only rearranged to form new substances and are neither created nor destroyed.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of building with Lego blocks. You don't lose or gain blocks when you rearrange them; the total number of blocks (atoms) stays the same before and after rebuilding.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Checking Mass Conservation",
      "problem": "A reaction starts with 10g of reactants. After the reaction, the products formed weigh 10g. Explain why the mass is conserved.",
      "questions": [
        {
          "id": "q1-1",
          "prompt": "Are atoms created or destroyed during the reaction? (yes/no)",
          "answer": "no",
          "feedback": "Correct. Atoms are not created or destroyed, only rearranged."
        },
        {
          "id": "q1-2",
          "prompt": "If atoms are neither created nor destroyed, what happens to the total mass during the reaction?",
          "answer": "remains the same",
          "feedback": "Exactly, the total mass remains constant."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Balanced Chemical Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Chemical equations represent reactions symbolically using chemical formulae. Balancing these equations means adjusting coefficients so that the number of atoms of each element is equal on both sides, reflecting conservation of mass.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of balancing weights on a seesaw: both sides must be equal for balance; likewise, both sides of a chemical equation must have equal atoms.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Writing a Balanced Equation for Hydrogen Combustion",
      "problem": "Balance the equation: H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O",
      "questions": [
        {
          "id": "q2-1",
          "prompt": "How many hydrogen atoms are on the left side in H<sub>2</sub>?",
          "answer": "2",
          "feedback": "Correct, H<sub>2</sub> means 2 hydrogen atoms."
        },
        {
          "id": "q2-2",
          "prompt": "How many hydrogen atoms are on the right side in H<sub>2</sub>O?",
          "answer": "2",
          "feedback": "Right, one molecule of H<sub>2</sub>O has 2 hydrogen atoms."
        },
        {
          "id": "q2-3",
          "prompt": "How many oxygen atoms on the left in O<sub>2</sub>?",
          "answer": "2",
          "feedback": "Correct, O<sub>2</sub> is a molecule of 2 oxygen atoms."
        },
        {
          "id": "q2-4",
          "prompt": "How many oxygen atoms on the right in one H<sub>2</sub>O molecule?",
          "answer": "1",
          "feedback": "Right, one oxygen atom per H<sub>2</sub>O."
        },
        {
          "id": "q2-5",
          "prompt": "What coefficient balances the oxygen atoms on both sides?",
          "answer": "2",
          "feedback": "Correct, put 2 before H<sub>2</sub>O to have 2 oxygen atoms on right."
        },
        {
          "id": "q2-6",
          "prompt": "What coefficient balances the hydrogen atoms then?",
          "answer": "2",
          "feedback": "Yes, put 2 before H<sub>2</sub> so both sides have 4 hydrogen atoms."
        }
      ]
    }
  },
  "step3": {
    "title": "State Symbols in Chemical Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">State symbols indicate the physical state of substances in a chemical equation: <em>(s)</em> solid, <em>(l)</em> liquid, <em>(g)</em> gas, and <em>(aq)</em> aqueous, meaning dissolved in water.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">State symbols are like labels on a package telling you if the item inside is frozen, liquid, gas, or dissolved in water.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Adding State Symbols",
      "problem": "Write the balanced equation for the reaction of solid sodium with water producing aqueous sodium hydroxide and hydrogen gas, including state symbols.",
      "questions": [
        {
          "id": "q3-1",
          "prompt": "What is the formula and state symbol for solid sodium?",
          "answer": "Na(s)",
          "feedback": "Correct, sodium is solid."
        },
        {
          "id": "q3-2",
          "prompt": "Water is usually what state? (Answer formula with state symbol)",
          "answer": "H2O(l)",
          "feedback": "Correct, water is a liquid."
        },
        {
          "id": "q3-3",
          "prompt": "What is the formula and state symbol for aqueous sodium hydroxide?",
          "answer": "NaOH(aq)",
          "feedback": "Right, sodium hydroxide dissolves in water."
        },
        {
          "id": "q3-4",
          "prompt": "What is the formula and state symbol for hydrogen gas released?",
          "answer": "H2(g)",
          "feedback": "Correct, hydrogen gas is (g)."
        },
        {
          "id": "q3-5",
          "prompt": "Balance the equation by coefficients: Na(s) + H2O(l) → NaOH(aq) + H2(g). What coefficient goes in front of NaOH?",
          "answer": "2",
          "feedback": "Good, 2 NaOH molecules balance oxygen and sodium."
        },
        {
          "id": "q3-6",
          "prompt": "What coefficient balances hydrogen gas on the right side?",
          "answer": "1",
          "feedback": "Correct, 1 H2 molecule for gas."
        },
        {
          "id": "q3-7",
          "prompt": "What coefficient balances sodium on the left side?",
          "answer": "2",
          "feedback": "Right, 2 Na atoms to match 2 NaOH on RHS."
        }
      ]
    }
  },
  "step4": {
    "title": "Practise: Quantitative Balancing Using Coefficients",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Balancing chemical equations requires adjusting coefficients to ensure atom numbers balance on both sides, demonstrating conservation of mass.</p>",
    "workedExample": {
      "title": "Practise Balancing: Combustion of Methane",
      "problem": "Balance the equation: CH<sub>4</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O",
      "questions": [
        {
          "id": "q4-1",
          "prompt": "How many carbon atoms on LHS in CH<sub>4</sub>?",
          "answer": "1",
          "feedback": "Correct, 1 carbon atom."
        },
        {
          "id": "q4-2",
          "prompt": "How many carbon atoms on RHS in CO<sub>2</sub>?",
          "answer": "1",
          "feedback": "Correct."
        },
        {
          "id": "q4-3",
          "prompt": "Hydrogen atoms in CH<sub>4</sub> on LHS?",
          "answer": "4",
          "feedback": "Yes, 4 hydrogen atoms."
        },
        {
          "id": "q4-4",
          "prompt": "How many hydrogen atoms in one molecule of H<sub>2</sub>O on the RHS?",
          "answer": "2",
          "feedback": "Correct."
        },
        {
          "id": "q4-5",
          "prompt": "What coefficient is needed before H<sub>2</sub>O to balance hydrogens?",
          "answer": "2",
          "feedback": "Right, 2 * 2 = 4 hydrogens on the right."
        },
        {
          "id": "q4-6",
          "prompt": "Count oxygen atoms on RHS: How many in CO<sub>2</sub> + 2 H<sub>2</sub>O?",
          "answer": "4",
          "feedback": "Good, 2 oxygen atoms in CO<sub>2</sub> + 2 *1 in water."
        },
        {
          "id": "q4-7",
          "prompt": "What coefficient balances oxygen atoms on LHS in O<sub>2</sub>?",
          "answer": "2",
          "feedback": "Correct, 2 O<sub>2</sub> molecules give 4 oxygen atoms."
        }
      ]
    }
  },
  "step5": {
    "title": "Interactive Review: Writing Balanced Equations with State Symbols",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Combine your understanding of chemical formulae, balancing, and state symbols to write balanced equations for reactions.</p>",
    "workedExample": {
      "title": "Example: Reaction of Magnesium with Hydrochloric Acid",
      "problem": "Write a balanced chemical equation including state symbols for magnesium reacting with hydrochloric acid to produce magnesium chloride and hydrogen gas.",
      "questions": [
        {
          "id": "q5-1",
          "prompt": "Write formula and state for magnesium solid:",
          "answer": "Mg(s)",
          "feedback": "Correct."
        },
        {
          "id": "q5-2",
          "prompt": "Write formula and state for hydrochloric acid aqueous:",
          "answer": "HCl(aq)",
          "feedback": "Correct."
        },
        {
          "id": "q5-3",
          "prompt": "Write formula and state for magnesium chloride aqueous:",
          "answer": "MgCl2(aq)",
          "feedback": "Correct."
        },
        {
          "id": "q5-4",
          "prompt": "Write formula and state for hydrogen gas:",
          "answer": "H2(g)",
          "feedback": "Correct."
        },
        {
          "id": "q5-5",
          "prompt": "Balance the equation coefficients: Mg(s) + HCl(aq) → MgCl2(aq) + H2(g). Coefficient before HCl?",
          "answer": "2",
          "feedback": "Good, 2 HCl molecules needed to balance chlorines."
        },
        {
          "id": "q5-6",
          "prompt": "Coefficient before hydrogen gas H2?",
          "answer": "1",
          "feedback": "Correct."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how the principle of conservation of mass relates to balancing a chemical equation, and describe the importance of state symbols in chemical equations.</span>",
      "hint": "Remember to mention atoms and their rearrangement, the role of coefficients, and the meaning of state symbols.",
      "mustHaveKeywords": ["conservation of mass", "atoms rearranged", "coefficients", "state symbols", "physical state"],
      "optionalKeywords": ["balanced equation", "chemical formulae", "represent substances"],
      "modelAnswer": "<span>The conservation of mass states that atoms are neither created nor destroyed in a chemical reaction; they are only rearranged. Therefore, the mass of reactants equals the mass of products. To reflect this in chemical equations, coefficients are adjusted to balance the number of atoms of each element on both sides, ensuring mass conservation. State symbols indicate the physical state of the substances involved—solid (s), liquid (l), gas (g), or aqueous (aq)—providing important information about the reaction conditions and reactants or products.</span>",
      "scaffoldPrompts": ["Think about what conservation of mass means for atoms in a reaction", "Explain why coefficients are used in equations", "Describe how state symbols give extra information about substances"]
    }
  }
};