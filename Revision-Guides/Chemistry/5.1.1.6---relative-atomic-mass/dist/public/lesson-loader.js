window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.1.1.6 - Relative atomic mass",
  "strapline": "Understanding the concept of relative atomic mass and calculating it using isotopic abundances.",
  "learningObjectives": [
    "Students should understand that relative atomic mass (Ar) compares the mass of atoms of an element to one-twelfth of the mass of a carbon-12 atom (Chemistry 5.1.1.6)",
    "Students should be able to calculate relative atomic mass from isotopic abundances (Chemistry 5.1.1.6)",
    "Students should understand why most elements have relative atomic masses that are not whole numbers due to the presence of different isotopes (Chemistry 5.1.1.6)"
  ],
  "keyFormulas": [
    "Relative atomic mass (Ar) = \\sum (isotopic mass × fractional abundance)",
    "Fractional abundance = (percentage abundance) ÷ 100",
    "Reminder: Ar is a ratio and has no units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='160' fill='#e6f2ff' stroke='#004080' stroke-width='2'/><text x='200' y='50' font-family='Arial' font-size='18' fill='#004080' text-anchor='middle'><tspan font-weight='bold'>Carbon-12 atom reference</tspan></text><circle cx='130' cy='120' r='30' fill='#99ccff' stroke='#004080' stroke-width='2'/><text x='130' y='125' font-family='Arial' font-size='14' fill='#004080' text-anchor='middle'>12</text><text x='130' y='145' font-family='Arial' font-size='12' fill='#004080' text-anchor='middle'>Mass number</text><circle cx='270' cy='120' r='30' fill='#b3d9ff' stroke='#004080' stroke-width='2'/><text x='270' y='115' font-family='Arial' font-size='14' fill='#004080' text-anchor='middle'>Isotope</text><text x='270' y='135' font-family='Arial' font-size='12' fill='#004080' text-anchor='middle'>Relative mass</text><line x1='160' y1='120' x2='240' y2='120' stroke='#004080' stroke-width='2' marker-end='url(#arrowhead)'/><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#004080'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding Relative Atomic Mass (Ar)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Relative atomic mass (<em>Ar</em>) compares the mass of an atom of an element to <strong>one-twelfth</strong> of the mass of a <sup>12</sup>C (carbon-12) atom. It is a ratio and therefore has no units. Because elements often exist as a mixture of isotopes, the <em>Ar</em> is a weighted average of these isotopes based on their natural abundances.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of weighing apples in a basket: if some apples are heavier and some are lighter, the average weight depends on how many heavy vs light apples there are — similarly, relative atomic mass takes the weighted average of isotopes.</p>"
    },
    "workedExample": {
      "title": "Worked Example: What is relative atomic mass?",
      "problem": "If carbon-12 has a mass of exactly 12 and carbon-13 has a mass of 13, and natural carbon contains 99% carbon-12 and 1% carbon-13, calculate relative atomic mass.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: What is the fractional abundance of carbon-12?",
          "answer": "0.99",
          "feedback": "Correct! 99% as a fraction is 0.99."
        },
        {
          "id": "q2",
          "prompt": "Step 2: What is the fractional abundance of carbon-13?",
          "answer": "0.01",
          "feedback": "Correct! 1% as a fraction is 0.01."
        },
        {
          "id": "q3",
          "prompt": "Step 3: Multiply each isotope mass by its fractional abundance: What is 12 × 0.99?",
          "answer": "11.88",
          "feedback": "Correct, 12 × 0.99 = 11.88."
        },
        {
          "id": "q4",
          "prompt": "Step 4: Calculate 13 × 0.01.",
          "answer": "0.13",
          "feedback": "Correct, 13 × 0.01 = 0.13."
        },
        {
          "id": "q5",
          "prompt": "Step 5: Add your results from Step 3 and 4 to find Ar.",
          "answer": "12.01",
          "feedback": "Correct! 11.88 + 0.13 = 12.01, the relative atomic mass."
        }
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does relative atomic mass (Ar) compare an atom’s mass to?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>One-twelfth of the mass of a carbon-12 atom</span>",
            "isCorrect": true,
            "explanation": "Correct! Relative atomic mass is defined relative to one-twelfth the mass of carbon-12."
          },
          {
            "id": "b",
            "label": "<span>The mass of an electron</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Electron mass is not used for relative atomic mass comparisons."
          },
          {
            "id": "c",
            "label": "<span>One-twelfth of the mass of oxygen-16</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The reference is always carbon-12, not oxygen."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Why is the relative atomic mass of most elements not a whole number?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Because elements have different isotopes with different mass numbers</span>",
            "isCorrect": true,
            "explanation": "Correct! Different isotopes with varying mass numbers cause the weighted average to be non-integer."
          },
          {
            "id": "b",
            "label": "<span>Because of experimental errors when measuring atomic masses</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Experimental errors do not systematically cause this effect."
          },
          {
            "id": "c",
            "label": "<span>Because atoms constantly change their mass</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Atoms do not change mass spontaneously."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>Atoms of the same element with different numbers of neutrons are called <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "isotopes",
                "label": "Isotopes",
                "isCorrect": true,
                "feedback": "Correct! Atoms with same protons but different neutrons are isotopes."
              },
              {
                "value": "ions",
                "label": "Ions",
                "isCorrect": false,
                "feedback": "Try again. Ions differ by charge, not neutrons."
              },
              {
                "value": "molecules",
                "label": "Molecules",
                "isCorrect": false,
                "feedback": "Try again. Molecules are groups of atoms, not isotopes."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____ _____</span> is calculated using the abundance and masses of an element's isotopes.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "relative atomic mass",
                "label": "relative atomic mass",
                "isCorrect": true,
                "feedback": "Correct! Ar is a weighted average based on isotopes."
              },
              {
                "value": "atomic number",
                "label": "atomic number",
                "isCorrect": false,
                "feedback": "Incorrect, atomic number is the number of protons."
              },
              {
                "value": "mass number",
                "label": "mass number",
                "isCorrect": false,
                "feedback": "Mass number is isotope-specific, not weighted average."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Worked Example: Interactive Calculation",
    "explanation": "<p>Calculate the relative atomic mass of chlorine if it has two isotopes: chlorine-35 (mass = 34.97, abundance = 75.77%) and chlorine-37 (mass = 36.97, abundance = 24.23%).</p>",
    "workedExample": {
      "title": "Step-by-step calculation",
      "problem": "Calculate the average relative atomic mass (Ar) of chlorine.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: Convert 75.77% to a fractional abundance.",
          "answer": "0.7577",
          "feedback": "Correct! Decimal form of 75.77% is 0.7577."
        },
        {
          "id": "q2",
          "prompt": "Step 2: Convert 24.23% to a fractional abundance.",
          "answer": "0.2423",
          "feedback": "Correct! Decimal form of 24.23% is 0.2423."
        },
        {
          "id": "q3",
          "prompt": "Step 3: Calculate the contribution of isotope chlorine-35: 34.97 × 0.7577",
          "answer": "26.5009",
          "feedback": "Correct, 34.97 × 0.7577 = 26.5009."
        },
        {
          "id": "q4",
          "prompt": "Step 4: Calculate the contribution of isotope chlorine-37: 36.97 × 0.2423",
          "answer": "8.9575",
          "feedback": "Correct, 36.97 × 0.2423 = 8.9575."
        },
        {
          "id": "q5",
          "prompt": "Step 5: Add the two contributions to find Ar.",
          "answer": "35.4584",
          "feedback": "Correct. Adding 26.5009 + 8.9575 = 35.4584."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 500 120' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='480' height='100' fill='#fffef7' stroke='#a67c00' stroke-width='2'/><text x='250' y='40' font-family='Arial' font-size='16' fill='#a67c00' text-anchor='middle'>Chlorine Isotopes and Abundances</text><circle cx='140' cy='85' r='25' fill='#ffd966' stroke='#a67c00' stroke-width='2'/><text x='140' y='90' font-family='Arial' font-size='14' fill='#a67c00' text-anchor='middle'>35Cl</text><text x='140' y='110' font-family='Arial' font-size='12' fill='#a67c00' text-anchor='middle'>75.77%</text><circle cx='360' cy='85' r='25' fill='#fff2cc' stroke='#a67c00' stroke-width='2'/><text x='360' y='90' font-family='Arial' font-size='14' fill='#a67c00' text-anchor='middle'>37Cl</text><text x='360' y='110' font-family='Arial' font-size='12' fill='#a67c00' text-anchor='middle'>24.23%</text></svg>"
    }
  },
  "step5": {
    "title": "Why Relative Atomic Mass Values Are Not Whole Numbers",
    "explanation": "<p>Most elements have relative atomic masses that are not whole numbers because they exist naturally as mixtures of isotopes. Each isotope has a different mass number, so the weighted average reflects the combined contribution of all isotopes. This causes the average atomic mass to be a decimal number rather than an integer.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p>Like a mixed bag of coins of different values where you calculate the average value per coin, elements mix isotopes so the average mass isn’t a whole number.</p>"
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Chlorine occurs naturally as two isotopes: chlorine-35 (34.97 u) with 75.77% abundance and chlorine-37 (36.97 u) with 24.23% abundance. Calculate the relative atomic mass of chlorine and explain why this value is not a whole number.</span>",
      "hint": "Remember to convert percentages to decimals and multiply by isotope masses before adding. Consider the definition of relative atomic mass in your explanation.",
      "mustHaveKeywords": ["relative atomic mass", "weighted average", "isotopes", "fractional abundance"],
      "optionalKeywords": ["mass number", "natural abundance", "decimal value"],
      "modelAnswer": "<span>The relative atomic mass of chlorine is calculated by multiplying each isotope's mass by its fractional abundance and then adding these values: (34.97 × 0.7577) + (36.97 × 0.2423) = 26.50 + 8.96 = 35.46 (rounded to two decimal places). This value is not a whole number because chlorine exists as a mixture of isotopes with different masses. The relative atomic mass is a weighted average reflecting the proportion of each isotope naturally present.</span>",
      "scaffoldPrompts": [
        "Step 1: Convert percentage abundances to fractions",
        "Step 2: Multiply each isotope mass by its fractional abundance",
        "Step 3: Sum the values to find the relative atomic mass",
        "Step 4: Explain that multiple isotopes cause the Ar to be a decimal"
      ]
    }
  }
};