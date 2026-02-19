window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.3.2.5 - Concentration of solutions",
  "strapline": "Learn how to calculate and manipulate concentrations of solutions using mass, volume, and moles of solute.",
  "learningObjectives": [
    "Students should be able to calculate the mass of solute in a given volume of solution of known concentration in g/dm³ (Chemistry 5.3.2.5)",
    "Students should be able to calculate the concentration of solutions in g/dm³ and mol/dm³ using the formula: concentration = mass of solute ÷ volume of solution (Chemistry 5.3.2.5)",
    "Students should be able to rearrange the concentration formula to find unknown values of mass, volume, or concentration (Chemistry 5.3.2.5)"
  ],
  "keyFormulas": [
    "concentration (g/dm³) = mass of solute (g) ÷ volume of solution (dm³)",
    "concentration (mol/dm³) = moles of solute (mol) ÷ volume of solution (dm³)",
    "mass of solute = concentration × volume",
    "volume of solution = mass of solute ÷ concentration"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='80' width='320' height='140' fill='#d0e9f7' stroke='#31708f' stroke-width='3' /><text x='200' y='50' font-family='sans-serif' font-size='18' fill='#31708f' text-anchor='middle'><strong>Solution Container</strong></text><text x='80' y='140' font-family='sans-serif' font-size='14' fill='#12587f'>Solute (solid) dissolves</text><line x1='90' y1='145' x2='150' y2='170' stroke='#31708f' stroke-width='2' marker-end='url(#arrow)' /><circle cx='250' cy='170' r='20' fill='#4aa3df' stroke='#31708f' /><text x='250' y='175' font-family='sans-serif' font-size='14' fill='#ffffff' text-anchor='middle'>Solvent (liquid)</text><text x='200' y='230' font-family='sans-serif' font-size='16' fill='#31708f' text-anchor='middle'>Solution (solute + solvent)</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto'><path d='M0 0 L10 5 L0 10 Z' fill='#31708f'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: What is a Solution?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>solution</strong> is a mixture formed when a <em>solute</em> dissolves in a <em>solvent</em>. The <strong>solute</strong> is the substance that dissolves, and the <strong>solvent</strong> is usually a liquid that does the dissolving.</p><p class=\"text-sm leading-6 text-muted-foreground\">Understanding this is important because concentration describes the amount of solute dissolved in a particular volume of solution.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of making a lemonade drink: the sugar is the solute, and the water is the solvent. The lemonade mix is the solution.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Parts of a Solution",
      "problem": "Look at the picture of lemonade. Can you identify the solute and the solvent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the solute in lemonade?",
          "answer": "sugar",
          "feedback": "Correct! Sugar is the solute that dissolves into water."
        },
        {
          "id": "q2",
          "prompt": "What is the solvent in lemonade?",
          "answer": "water",
          "feedback": "Correct! Water is the solvent that dissolves the sugar."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Concentration in g/dm³",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Concentration in <strong>grams per cubic decimetre (g/dm³)</strong> tells us how many grams of solute are dissolved in one cubic decimetre (1 dm³) of solution. Note that 1 dm³ equals 1000 cm³ or 1 litre.</p><p class=\"text-sm leading-6 text-muted-foreground\">This measurement helps us describe how 'strong' or 'dilute' a solution is.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine adding sugar to tea: the more sugar dissolved in a fixed volume, the sweeter (more concentrated) the tea taste.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate concentration in g/dm³",
      "problem": "You have a solution with 5 g of salt dissolved in 0.5 dm³ of water. Calculate the concentration in g/dm³.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mass of solute in grams?",
          "answer": "5",
          "feedback": "Correct, the mass of salt here is 5 g."
        },
        {
          "id": "q2",
          "prompt": "What is the volume of the solution in dm³?",
          "answer": "0.5",
          "feedback": "Correct, the volume given is 0.5 dm³."
        },
        {
          "id": "q3",
          "prompt": "Use the formula concentration = mass ÷ volume. What is the concentration in g/dm³?",
          "answer": "10",
          "feedback": "Correct, 5 ÷ 0.5 = 10 g/dm³."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding Concentration in mol/dm³ (Molarity)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Concentration can also be measured in <strong>mol/dm³</strong>, which tells us how many moles of solute are present per one dm³ of solution. This is also called the molarity of the solution.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of molarity like counting particles — one mole means approximately 6.02 × 10<sup>23</sup> particles. Molarity tells you how many such particle groups are in each litre.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate concentration in mol/dm³",
      "problem": "You dissolve 0.25 mol of a solute in 0.5 dm³ of solution. What is the molar concentration in mol/dm³?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many moles of solute are dissolved?",
          "answer": "0.25",
          "feedback": "Correct, 0.25 mol is given."
        },
        {
          "id": "q2",
          "prompt": "What is the volume of the solution in dm³?",
          "answer": "0.5",
          "feedback": "Correct, 0.5 dm³ is given."
        },
        {
          "id": "q3",
          "prompt": "Calculate concentration = moles ÷ volume. What is the molarity in mol/dm³?",
          "answer": "0.5",
          "feedback": "Correct, 0.25 ÷ 0.5 = 0.5 mol/dm³."
        }
      ]
    }
  },
  "step4": {
    "title": "Skill: Rearranging the Concentration Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The concentration formula can be rearranged to find the mass, volume, or concentration when the other two are known:</p><ul><li>mass = concentration × volume</li><li>volume = mass ÷ concentration</li><li>concentration = mass ÷ volume</li></ul><p>Rearranging formulas is an important skill for solving concentration problems.</p>",
    "workedExample": {
      "title": "Worked Example: Find unknown mass",
      "problem": "A solution has a concentration of 4 g/dm³ and volume 3 dm³. Find the mass of solute.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the concentration (g/dm³)?",
          "answer": "4",
          "feedback": "Correct, concentration is 4 g/dm³."
        },
        {
          "id": "q2",
          "prompt": "What is the volume (dm³)?",
          "answer": "3",
          "feedback": "Correct, volume is 3 dm³."
        },
        {
          "id": "q3",
          "prompt": "Use mass = concentration × volume. What is the mass of solute in grams?",
          "answer": "12",
          "feedback": "Correct, 4 × 3 = 12 g of solute."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is the correct formula to calculate concentration in g/dm³?</span>",
        "options": [
          {"id": "a", "label": "<span>concentration = volume ÷ mass</span>", "isCorrect": false, "explanation": "Incorrect. Concentration is mass divided by volume, not volume divided by mass."},
          {"id": "b", "label": "<span>concentration = mass ÷ volume</span>", "isCorrect": true, "explanation": "Correct! Concentration equals mass of solute divided by volume of solution."},
          {"id": "c", "label": "<span>concentration = mass × volume</span>", "isCorrect": false, "explanation": "Incorrect. Concentration is not mass multiplied by volume."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>If you increase the volume of solution but keep the mass of solute the same, what happens to the concentration?</span>",
        "options": [
          {"id": "a", "label": "<span>Concentration increases</span>", "isCorrect": false, "explanation": "Incorrect, concentration decreases if volume increases while mass remains constant."},
          {"id": "b", "label": "<span>Concentration stays the same</span>", "isCorrect": false, "explanation": "Incorrect, concentration changes when volume changes if mass is constant."},
          {"id": "c", "label": "<span>Concentration decreases</span>", "isCorrect": true, "explanation": "Correct! Increasing volume dilutes the solution, decreasing concentration."}
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The substance that dissolves is called the <span class=\"font-semibold\">_____</span>, and the liquid it dissolves in is called the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "solute", "label": "solute", "isCorrect": true, "feedback": "Correct! The solute is the substance that dissolves."},
              {"value": "solvent", "label": "solvent", "isCorrect": false, "feedback": "Incorrect. This is the liquid, not the solute."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "solvent", "label": "solvent", "isCorrect": true, "feedback": "Correct! The solvent is the liquid that dissolves the solute."},
              {"value": "solute", "label": "solute", "isCorrect": false, "feedback": "Incorrect. The solute is the substance dissolved, not the solvent."}
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A solution has a concentration of 8 g/dm³. Calculate the mass of solute present in 250 cm³ of this solution. Show all working clearly.</span>",
      "hint": "<span>Remember to convert the volume from cm³ to dm³ before using the formula!</span>",
      "mustHaveKeywords": ["concentration", "mass", "volume", "convert cm³ to dm³", "formula rearrangement"],
      "optionalKeywords": ["unit conversion", "g/dm³", "multiplication"],
      "modelAnswer": "<span>First, convert 250 cm³ to dm³: 250 cm³ ÷ 1000 = 0.25 dm³.<br>Use the formula: mass = concentration × volume<br>mass = 8 g/dm³ × 0.25 dm³ = 2 g.<br>Therefore, the mass of solute is 2 grams.</span>",
      "scaffoldPrompts": [
        "What is the volume in dm³?",
        "What formula relates mass, concentration, and volume?",
        "Substitute values into the formula and calculate mass."
      ]
    }
  }
};