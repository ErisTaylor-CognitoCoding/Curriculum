window.lessonContent = {
  "subject": "Biology",
  "specCode": "",
  "topicTitle": "4.1.3.2 - Osmosis",
  "strapline": "Understanding the movement of water across membranes and its importance in living organisms.",
  "learningObjectives": [
    "Students should understand osmosis as the movement of water molecules across a partially permeable membrane from a dilute solution to a more concentrated solution (Biology 4.1.3.2)",
    "Students should understand osmosis as a special case of diffusion (Biology 4.1.3.2)",
    "Students should be able to explain the importance of osmosis in living organisms (Biology 4.1.3.2)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='120' y='50' width='160' height='200' fill='#d0eaff' stroke='#0057b7' stroke-width='2'/><line x1='200' y1='50' x2='200' y2='250' stroke='#0057b7' stroke-width='4' stroke-dasharray='10,5'/><text x='60' y='120' font-family='sans-serif' font-size='14' fill='#000'>Dilute solution (high water concentration)</text><text x='240' y='120' font-family='sans-serif' font-size='14' fill='#000'>Concentrated solution (low water concentration)</text><circle cx='100' cy='150' r='12' fill='#0af' fill-opacity='0.6'/><circle cx='300' cy='150' r='6' fill='#004080' fill-opacity='0.8'/><text x='70' y='170' font-family='sans-serif' font-size='12' fill='#000'>Water molecules</text><text x='270' y='170' font-family='sans-serif' font-size='12' fill='#000'>Solute molecules (blocked)</text><path d='M135 150 L180 150' stroke='#0077cc' stroke-width='3' marker-end='url(#arrow)' /><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#0077cc'/></marker></defs><text x='150' y='140' font-family='sans-serif' font-size='14' fill='#0077cc' font-style='italic'>Water moves this way</text></svg>",
  "step1": {
    "title": "Concept: What is Osmosis?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Osmosis is the <strong>net movement</strong> of water molecules from an area of higher water concentration (a dilute solution) to an area of lower water concentration (a concentrated solution) through a <em>partially permeable membrane</em>. This membrane allows only certain small molecules like water to pass through, blocking larger molecules such as solutes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a crowd moving from a less crowded room to a more crowded one through a narrow door that only allows people (water) to pass but not large boxes (solute molecules).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Visualising Osmosis",
      "problem": "A bag filled with a sugar solution is immersed in pure water. The bag's membrane is partially permeable. Predict the direction of water movement.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the sugar solution inside the bag dilute or concentrated compared to the pure water outside?",
          "answer": "concentrated",
          "feedback": "Correct. The sugar solution has more solute, so less water concentration inside."
        },
        {
          "id": "q2",
          "prompt": "Which side has the higher water concentration: inside the bag or outside?",
          "answer": "outside",
          "feedback": "Correct. Pure water outside means higher water concentration."
        },
        {
          "id": "q3",
          "prompt": "In which direction will water move through the partially permeable membrane?",
          "answer": "into the bag",
          "feedback": "Correct. Water moves from dilute to concentrated solution."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Osmosis as a Special Case of Diffusion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Diffusion is the movement of particles from an area of higher concentration to an area of lower concentration. Osmosis is a <strong>special case</strong> of diffusion that only involves the movement of water molecules across a partially permeable membrane.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of diffusion as people moving from a crowded area to a less crowded one. Osmosis is like moving through a gate that allows <em>only</em> people (water) but not large luggage (solute).</p>"
    }
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>Osmosis involves movement of <span class=\"font-semibold\">_____</span> molecules across a <span class=\"font-semibold\">_____</span> membrane from a <span class=\"font-semibold\">_____</span> solution to a <span class=\"font-semibold\">_____</span> solution.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "water", "label": "water", "isCorrect": true, "feedback": "Correct! Osmosis involves water molecules."},
              {"value": "solute", "label": "solute", "isCorrect": false, "feedback": "Incorrect. Solutes do not move in osmosis."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "partially permeable", "label": "partially permeable", "isCorrect": true, "feedback": "Correct! The membrane allows only certain molecules to pass."},
              {"value": "impermeable", "label": "impermeable", "isCorrect": false, "feedback": "Incorrect. Osmosis requires a partially permeable membrane."}
            ]
          },
          {
            "id": "b3",
            "options": [
              {"value": "dilute", "label": "dilute", "isCorrect": true, "feedback": "Correct! Water moves from dilute solution."},
              {"value": "concentrated", "label": "concentrated", "isCorrect": false, "feedback": "Incorrect. Water moves from dilute to concentrated, not the other way."}
            ]
          },
          {
            "id": "b4",
            "options": [
              {"value": "concentrated", "label": "concentrated", "isCorrect": true, "feedback": "Correct! Water moves to the concentrated solution."},
              {"value": "dilute", "label": "dilute", "isCorrect": false, "feedback": "Incorrect. Water moves towards the concentrated side."}
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Partially Permeable Membrane",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>partially permeable membrane</strong> allows only certain small molecules like water to pass through while blocking larger molecules such as sugars or salts dissolved in the solution.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='40' width='300' height='70' fill='#a2d5f2' stroke='#00447c' stroke-width='3'/><text x='200' y='30' font-family='sans-serif' font-size='16' fill='#00447c' text-anchor='middle'>Partially Permeable Membrane</text><circle cx='90' cy='75' r='10' fill='#0077e6' /><text x='90' y='110' font-family='sans-serif' font-size='12' fill='#000' text-anchor='middle'>Water</text><circle cx='150' cy='75' r='18' fill='#ff6600' opacity='0.7'/><text x='150' y='110' font-family='sans-serif' font-size='12' fill='#000' text-anchor='middle'>Solute molecules</text><line x1='100' y1='75' x2='145' y2='75' stroke='#0077e6' stroke-width='3' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='6' refY='3' orient='auto'><path d='M0 0 L6 3 L0 6 Z' fill='#0077e6'/></marker></defs></svg>"
  },
  "step5": {
    "title": "Concept: Concentration Gradient",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>concentration gradient</strong> is the difference in concentration of a substance between two areas. It drives the movement of particles from an area of higher concentration to an area of lower concentration.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like a scent spreading from a sprayed area to the rest of the room, particles move down their concentration gradient.</p>"
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how osmosis occurs across a partially permeable membrane and describe one example of its importance in a living organism.</span>",
      "hint": "Remember to include movement of water, the role of the membrane, concentration gradient, and a biological example.",
      "mustHaveKeywords": ["water molecules", "partially permeable membrane", "dilute", "concentrated", "concentration gradient", "living organism", "importance"],
      "optionalKeywords": ["plant cells", "animal cells", "turgor pressure", "kidney function"],
      "modelAnswer": "<span>Osmosis is the net movement of water molecules across a partially permeable membrane from a dilute solution (higher water concentration) to a more concentrated solution (lower water concentration). The partially permeable membrane allows only water molecules to pass through while blocking solutes. This movement occurs down the concentration gradient. Osmosis is important in living organisms, for example, in plant cells where it helps maintain turgor pressure, keeping the plant rigid and upright.</span>",
      "scaffoldPrompts": ["What moves during osmosis?", "What is the role of the membrane?", "From where to where does water move?", "Why does this movement happen?", "Give an example in plants or animals."]
    }
  }
};