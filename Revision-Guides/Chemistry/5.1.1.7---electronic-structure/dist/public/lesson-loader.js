window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.1.1.7 - Electronic structure",
  "strapline": "Understanding how electrons are arranged in atoms and how this determines chemical properties and position in the periodic table.",
  "learningObjectives": [
    "Students should understand that electrons in atoms occupy specific energy levels or shells around the nucleus (Chemistry 5.1.1.7)",
    "Students should be able to write electronic structures for the first 20 elements using numerical notation (Chemistry 5.1.1.7)",
    "Students should be able to relate electronic structure to an element's position in the periodic table and its chemical properties (Chemistry 5.1.1.7)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='20' fill='#fdd835' stroke='#b28d00' stroke-width='2'/><circle cx='200' cy='150' r='70' fill='none' stroke='#2196f3' stroke-width='2'/><circle cx='200' cy='150' r='110' fill='none' stroke='#4caf50' stroke-width='2'/><text x='200' y='145' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#000'>Nucleus</text><text x='200' y='80' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#2196f3'>Shell 1 (max 2 e⁻)</text><text x='200' y='40' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#4caf50'>Shell 2 (max 8 e⁻)</text></svg>",
  "step1": {
    "title": "Concept: Electron Shells",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Electrons in an atom are arranged in energy levels called shells around the nucleus. The shells fill from the lowest energy level first. The first shell can hold up to 2 electrons, the second and third shells can each hold up to 8 electrons.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of electron shells as floors in a building. You fill the ground floor (first shell) with up to 2 people (electrons) before moving to the next floor (second shell) which can hold more people.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Filling Electron Shells Step-by-Step",
      "problem": "Determine the electron distribution for an atom with 5 electrons.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many electrons can the first shell hold?",
          "answer": "2",
          "feedback": "Correct. The first shell can hold a maximum of 2 electrons."
        },
        {
          "id": "q2",
          "prompt": "Place 2 electrons in the first shell. How many electrons remain to place?",
          "answer": "3",
          "feedback": "Correct. 5 - 2 = 3 electrons remain."
        },
        {
          "id": "q3",
          "prompt": "How many electrons can the second shell hold?",
          "answer": "8",
          "feedback": "Correct. The second shell can hold up to 8 electrons."
        },
        {
          "id": "q4",
          "prompt": "Place the remaining 3 electrons in the second shell. What is the electronic structure notation?",
          "answer": "2,3",
          "feedback": "Correct! The configuration is 2 electrons in first shell and 3 in second shell."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Electronic Structure Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Electronic structure (or configuration) shows how many electrons occupy each shell. It is written as numbers separated by commas, starting from the innermost shell.</p><p>Example: Sodium’s electronic structure is <strong>2,8,1</strong>, meaning 2 electrons in first shell, 8 in second, and 1 in third.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Similar to writing how many people are on each floor of a building separated by commas.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Writing Electronic Structure for Oxygen (8 electrons)",
      "problem": "Write the electron configuration for oxygen.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many electrons in the first shell?",
          "answer": "2",
          "feedback": "Correct, first shell fills to max 2 electrons."
        },
        {
          "id": "q2",
          "prompt": "How many electrons remain after filling first shell?",
          "answer": "6",
          "feedback": "Correct, 8 total - 2 is 6 electrons left."
        },
        {
          "id": "q3",
          "prompt": "How many electrons go into the second shell?",
          "answer": "6",
          "feedback": "Correct, the remaining electrons go to the second shell."
        },
        {
          "id": "q4",
          "prompt": "Write the complete electronic structure notation for oxygen.",
          "answer": "2,6",
          "feedback": "Correct! Oxygen’s electronic structure is 2,6."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Valence Electrons and Chemical Reactivity",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Valence electrons are the electrons in the outermost shell of an atom. These electrons determine how an element behaves chemically and its group membership on the periodic table.</p><p>Elements with the same number of valence electrons tend to have similar chemical properties.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of valence electrons as the outermost layer of people on a floor, who decide how the whole group interacts with others nearby.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Valence Electrons in Chlorine (17 electrons)",
      "problem": "Determine the number of valence electrons for chlorine.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the electron configuration of chlorine.",
          "answer": "2,8,7",
          "feedback": "Correct! Chlorine has 2 in first, 8 in second, and 7 in third shell."
        },
        {
          "id": "q2",
          "prompt": "How many electrons are in the outermost shell?",
          "answer": "7",
          "feedback": "Correct! The valence shell has 7 electrons."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Writing Electronic Structures",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let’s practice writing electronic structures for several elements using their atomic numbers.</p>",
    "workedExample": {
      "title": "Worked Example: Writing Electronic Structures for Neon (10 electrons)",
      "problem": "Write the electronic structure notation for neon.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many electrons can the first shell hold?",
          "answer": "2",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "How many electrons remain after first shell is filled?",
          "answer": "8",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "How many electrons do we place in the second shell?",
          "answer": "8",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Write the final electronic structure for neon.",
          "answer": "2,8",
          "feedback": "Correct! Neon is 2,8."
        }
      ]
    }
  },
  "step5": {
    "title": "Interactive Quiz: Relate Electronic Structure to Periodic Table Position",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following elements has a valence electron configuration of 2,8,1 and belongs to Group 1?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Magnesium (2,8,2)</span>",
            "isCorrect": false,
            "explanation": "<span>Magnesium has two valence electrons, so not group 1.</span>"
          },
          {
            "id": "b",
            "label": "<span>Sodium (2,8,1)</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Sodium has 1 valence electron and is in Group 1.</span>"
          },
          {
            "id": "c",
            "label": "<span>Neon (2,8)</span>",
            "isCorrect": false,
            "explanation": "<span>Neon has a full outer shell and is in Group 18 (noble gases).</span>"
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how the electronic structure of an element relates to its position in the periodic table and its chemical properties.</span>",
      "hint": "Remember to discuss shells, valence electrons, and groups.",
      "mustHaveKeywords": ["electron shells", "valence electrons", "group", "chemical properties"],
      "optionalKeywords": ["period", "outermost shell", "reactivity"],
      "modelAnswer": "<span>The electronic structure shows how electrons are arranged in shells around the nucleus. The number of electrons in the outermost shell (valence electrons) determines an element’s position in a group on the periodic table. Elements in the same group have the same number of valence electrons, which gives them similar chemical properties. For example, elements in Group 1 have one valence electron and are very reactive.</span>",
      "scaffoldPrompts": [
        "Think about how electrons fill shells and what valence electrons are.",
        "Then explain how the number of valence electrons aligns with group number and relates to chemical reactivity."
      ]
    }
  }
};