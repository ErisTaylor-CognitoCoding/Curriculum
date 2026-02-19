window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.4.2.1 - Radioactive decay and nuclear radiation",
  "strapline": "Understanding the types and properties of nuclear radiation and how to represent radioactive decay with nuclear equations.",
  "learningObjectives": [
    "Students should be able to describe the properties of alpha, beta, and gamma radiation, including their penetrating powers and ionising abilities (Physics 6.4.2.1)",
    "Students should be able to write and balance nuclear equations to represent radioactive decay processes, ensuring conservation of mass numbers and atomic numbers (Physics 6.4.2.1)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='10' y='60' width='80' height='40' fill='#FF6666' stroke='#333' />\n  <text x='50' y='90' font-family='sans-serif' font-size='14' fill='#000' text-anchor='middle'>Alpha (α)</text>\n  <line x1='90' y1='80' x2='150' y2='80' stroke='#FF6666' stroke-width='4' stroke-linecap='round'/>\n\n  <rect x='160' y='60' width='80' height='40' fill='#6699FF' stroke='#333' />\n  <text x='200' y='90' font-family='sans-serif' font-size='14' fill='#000' text-anchor='middle'>Beta (β)</text>\n  <line x1='240' y1='80' x2='310' y2='80' stroke='#6699FF' stroke-width='2' stroke-linecap='round' stroke-dasharray='5,5'/>\n\n  <rect x='320' y='60' width='70' height='40' fill='#CCCCCC' stroke='#333' />\n  <text x='355' y='90' font-family='sans-serif' font-size='14' fill='#000' text-anchor='middle'>Gamma (γ)</text>\n  <line x1='390' y1='80' x2='455' y2='80' stroke='#999999' stroke-width='1' stroke-linecap='round' stroke-dasharray='2,4'/>\n\n  <text x='50' y='130' font-family='sans-serif' font-size='12' fill='#000'>Highly ionising</text>\n  <text x='200' y='130' font-family='sans-serif' font-size='12' fill='#000'>Moderate ionising</text>\n  <text x='350' y='130' font-family='sans-serif' font-size='12' fill='#000'>Low ionising</text>\n\n  <text x='50' y='150' font-family='sans-serif' font-size='12' fill='#000'>Stopped by paper/skin</text>\n  <text x='200' y='150' font-family='sans-serif' font-size='12' fill='#000'>Stopped by thin aluminium</text>\n  <text x='350' y='150' font-family='sans-serif' font-size='12' fill='#000'>Stopped by thick lead/concrete</text>\n</svg>",
  "step1": {
    "title": "Concept: Introduction to Radioactive Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Radioactive decay is the process where an unstable atomic nucleus loses energy by emitting radiation. This makes the nucleus more stable, often transforming it into a different element or isotope. The types of radiation emitted include alpha, beta, and gamma radiation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a radioactive nucleus like a hot cup of coffee: it cools down (becomes stable) by letting off steam (radiation). Different types of steam have different effects and strengths.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Decay Types",
      "problem": "A nucleus emits a particle made up of 2 protons and 2 neutrons. Identify the type of radiation emitted.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many protons are in the emitted particle?",
          "answer": "2",
          "feedback": "Correct. The particle has 2 protons."
        },
        {
          "id": "q2",
          "prompt": "How many neutrons are in the emitted particle?",
          "answer": "2",
          "feedback": "Correct. The particle has 2 neutrons."
        },
        {
          "id": "q3",
          "prompt": "What is the name of this type of radiation?",
          "answer": "Alpha radiation",
          "feedback": "Correct. Alpha radiation consists of helium nuclei (2 protons and 2 neutrons)."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Properties of Alpha, Beta, and Gamma Radiation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Alpha, beta, and gamma radiation differ in their composition, penetration abilities, and ionising power:</p><ul><li><strong>Alpha (α):</strong> Helium nuclei, highly ionising but low penetration (stopped by paper or skin)</li><li><strong>Beta (β):</strong> High-speed electrons, moderate ionising and penetration (stopped by thin aluminium)</li><li><strong>Gamma (γ):</strong> Electromagnetic waves, low ionising but very high penetration (stopped by thick lead or concrete)</li></ul>"
  },
  "step3": {
    "title": "Interactive: Classify Radiation Types",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span><strong>Alpha radiation</strong> is stopped by _____.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "paper", "label": "paper", "isCorrect": true, "feedback": "Correct! Alpha particles are stopped by paper or skin."},
              {"value": "thin aluminium", "label": "thin aluminium", "isCorrect": false, "feedback": "Incorrect. Thin aluminium stops beta particles, not alpha."},
              {"value": "lead", "label": "lead", "isCorrect": false, "feedback": "Lead is needed to stop gamma radiation, alpha is stopped by something much less thick."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span><strong>Beta radiation</strong> is stopped by _____.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "paper", "label": "paper", "isCorrect": false, "feedback": "Paper stops alpha, beta requires something thicker."},
              {"value": "thin aluminium", "label": "thin aluminium", "isCorrect": true, "feedback": "Correct! Beta radiation is stopped by thin aluminium."},
              {"value": "lead", "label": "lead", "isCorrect": false, "feedback": "Lead is mainly used to stop gamma radiation."}
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span><strong>Gamma radiation</strong> is stopped by _____.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {"value": "lead", "label": "lead", "isCorrect": true, "feedback": "Correct! Gamma rays require dense materials like lead to be stopped."},
              {"value": "thin aluminium", "label": "thin aluminium", "isCorrect": false, "feedback": "Not thick enough to stop gamma radiation."},
              {"value": "paper", "label": "paper", "isCorrect": false, "feedback": "Paper has no effect on gamma rays."}
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Ionising Ability and Penetrating Power",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Ionising ability means how easily radiation can remove electrons from atoms or molecules, causing chemical changes. Alpha particles have the highest ionising power but can be stopped easily. Gamma rays penetrate deeply but ionise less.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of ionising ability like having a strong hammer (alpha) which breaks things quickly but can't go far, versus a gentle breeze (gamma) that can travel far but causes less damage.</p>"
    }
  },
  "step5": {
    "title": "Interactive: Write and Balance a Nuclear Equation - Alpha Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When alpha decay happens, the nucleus loses 2 protons and 2 neutrons (an alpha particle). Both the mass number and atomic number change and must be balanced.</p>",
    "workedExample": {
      "title": "Worked Example: Balancing Alpha Decay Equation",
      "problem": "An isotope of uranium, <sup>238</sup><sub>92</sub>U, undergoes alpha decay. Write the balanced nuclear equation.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mass number of the alpha particle emitted?",
          "answer": "4",
          "feedback": "Correct. Alpha particles have mass number 4."
        },
        {
          "id": "q2",
          "prompt": "What is the atomic number of the alpha particle emitted?",
          "answer": "2",
          "feedback": "Correct. Alpha particles contain 2 protons."
        },
        {
          "id": "q3",
          "prompt": "What is the mass number of the daughter nucleus (original mass number - 4)?",
          "answer": "234",
          "feedback": "Correct. 238 - 4 = 234."
        },
        {
          "id": "q4",
          "prompt": "What is the atomic number of the daughter nucleus (original atomic number - 2)?",
          "answer": "90",
          "feedback": "Correct. 92 - 2 = 90."
        },
        {
          "id": "q5",
          "prompt": "Write the full balanced nuclear equation using format: <sup>Mass</sup><sub>Atomic</sub>Element → <sup>Mass</sup><sub>Atomic</sub>Element + <sup>4</sup><sub>2</sub>He",
          "answer": "⁽²³⁸⁾₉₂U → ⁽²³⁴⁾₉₀Th + ⁽⁴⁾₂He",
          "feedback": "Correct! The uranium decays to thorium plus an alpha particle."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'>\n  <text x='20' y='50' font-family='sans-serif' font-size='24'>⁽²³⁸⁾<tspan dy='-10' font-size='14'>92</tspan>U</text>\n  <text x='110' y='50' font-family='sans-serif' font-size='24'>→</text>\n  <text x='150' y='50' font-family='sans-serif' font-size='24'>⁽²³⁴⁾<tspan dy='-10' font-size='14'>90</tspan>Th</text>\n  <text x='270' y='50' font-family='sans-serif' font-size='24'>+</text>\n  <text x='300' y='50' font-family='sans-serif' font-size='24'>⁽⁴⁾<tspan dy='-10' font-size='14'>2</tspan>He</text>\n</svg>"
    }
  },
  "step6": {
    "title": "Interactive: Write and Balance a Nuclear Equation - Beta Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In beta decay, a neutron in the nucleus changes into a proton and emits a beta particle (an electron). The atomic number increases by 1 but the mass number stays the same.</p>",
    "workedExample": {
      "title": "Worked Example: Balancing Beta Decay Equation",
      "problem": "An isotope of carbon, <sup>14</sup><sub>6</sub>C, undergoes beta decay. Write the balanced nuclear equation.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What happens to the mass number in beta decay?",
          "answer": "It stays the same",
          "feedback": "Correct. Beta decay does not change the mass number."
        },
        {
          "id": "q2",
          "prompt": "What happens to the atomic number in beta decay?",
          "answer": "It increases by 1",
          "feedback": "Correct. A neutron becomes a proton, increasing atomic number by 1."
        },
        {
          "id": "q3",
          "prompt": "What is the mass number of the daughter nucleus?",
          "answer": "14",
          "feedback": "Correct. Mass number remains 14."
        },
        {
          "id": "q4",
          "prompt": "What is the atomic number of the daughter nucleus (6 + 1)?",
          "answer": "7",
          "feedback": "Correct. 6 + 1 = 7."
        },
        {
          "id": "q5",
          "prompt": "Write the full balanced nuclear equation using format: <sup>Mass</sup><sub>Atomic</sub>Element → <sup>Mass</sup><sub>Atomic</sub>Element + <sup>0</sup><sub>-1</sub>e",
          "answer": "⁽¹⁴⁾₆C → ⁽¹⁴⁾₇N + ⁽⁰⁾₋₁e",
          "feedback": "Correct! Carbon-14 decays to nitrogen-14 emitting a beta particle."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 100' xmlns='http://www.w3.org/2000/svg'>\n  <text x='20' y='50' font-family='sans-serif' font-size='24'>⁽¹⁴⁾<tspan dy='-10' font-size='14'>6</tspan>C</text>\n  <text x='110' y='50' font-family='sans-serif' font-size='24'>→</text>\n  <text x='150' y='50' font-family='sans-serif' font-size='24'>⁽¹⁴⁾<tspan dy='-10' font-size='14'>7</tspan>N</text>\n  <text x='270' y='50' font-family='sans-serif' font-size='24'>+</text>\n  <text x='300' y='50' font-family='sans-serif' font-size='24'>⁽⁰⁾<tspan dy='-10' font-size='14'>-1</tspan>e</text>\n</svg>"
    }
  },
  "step7": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which type of radiation has the highest penetrating power?</span>",
        "options": [
          {"id": "a", "label": "<span>Alpha radiation</span>", "isCorrect": false, "explanation": "Alpha radiation is the least penetrating, stopped by paper."},
          {"id": "b", "label": "<span>Beta radiation</span>", "isCorrect": false, "explanation": "Beta radiation penetrates more than alpha but less than gamma."},
          {"id": "c", "label": "<span>Gamma radiation</span>", "isCorrect": true, "explanation": "Gamma radiation is the most penetrating, stopped by thick lead or concrete."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>During alpha decay, what happens to the atomic number of the nucleus?</span>",
        "options": [
          {"id": "a", "label": "<span>It increases by 2</span>", "isCorrect": false, "explanation": "Alpha decay causes the atomic number to decrease, not increase."},
          {"id": "b", "label": "<span>It decreases by 2</span>", "isCorrect": true, "explanation": "Alpha particles contain 2 protons, so atomic number decreases by 2."},
          {"id": "c", "label": "<span>It stays the same</span>", "isCorrect": false, "explanation": "Atomic number changes during alpha decay."}
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain the properties of alpha, beta, and gamma radiation, including their ionising abilities and penetrating powers, and write a balanced nuclear equation to represent the alpha decay of <sup>210</sup><sub>84</sub>Po.</span>",
      "hint": "Remember to state the composition, penetrating power, and ionisation for each type of radiation. For the nuclear equation, balance both atomic and mass numbers.",
      "mustHaveKeywords": ["alpha radiation", "beta radiation", "gamma radiation", "penetrating power", "ionising ability", "nuclear equation", "alpha decay", "mass number", "atomic number"],
      "optionalKeywords": ["conservation of mass", "daughter nucleus", "He nucleus"],
      "modelAnswer": "<span>Alpha radiation consists of helium nuclei (2 protons and 2 neutrons), has high ionising ability but low penetrating power, stopped by paper or skin. Beta radiation consists of high-speed electrons, has moderate ionising and penetrating power, stopped by thin aluminium. Gamma radiation is electromagnetic waves, has low ionising ability but very high penetrating power, stopped by thick lead or concrete.<br><br>In the alpha decay of <sup>210</sup><sub>84</sub>Po, the nucleus loses 2 protons and 2 neutrons (an alpha particle): <sup>210</sup><sub>84</sub>Po → <sup>206</sup><sub>82</sub>Pb + <sup>4</sup><sub>2</sub>He. The mass and atomic numbers balance on both sides, showing conservation of mass and atomic numbers.</span>",
      "scaffoldPrompts": [
        "Describe the composition of each type of radiation.",
        "Explain their penetrating power and ionising ability.",
        "Identify mass and atomic number changes in alpha decay.",
        "Write the nuclear equation step-by-step."
      ]
    }
  }
};