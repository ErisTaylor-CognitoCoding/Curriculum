window.lessonContent = {
  "subject": "Biology",
  "specCode": "",
  "topicTitle": "4.1.3.3 - Active transport",
  "strapline": "Learn how cells move substances against concentration gradients using energy, a crucial process for nutrient absorption.",
  "learningObjectives": [
    "Students should be able to describe how substances are transported into and out of cells by diffusion, osmosis and active transport (Biology 4.1.3)",
    "Students should be able to explain the differences between the three processes of diffusion, osmosis and active transport (Biology 4.1.3)",
    "Students should be able to explain how active transport is used to absorb substances such as mineral ions in plant roots and glucose in the gut (Biology 4.1.3.3)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='40' y='60' width='120' height='180' fill='#e0f7fa' stroke='#00796b' stroke-width='2' rx='15' ry='15'/>\n  <text x='100' y='40' font-family='Arial' font-size='18' fill='#004d40' text-anchor='middle'>Cell Membrane</text>\n  <circle cx='100' cy='100' r='12' fill='#ff7043'/>\n  <circle cx='100' cy='140' r='12' fill='#ff7043'/>\n  <circle cx='100' cy='180' r='12' fill='#ff7043'/>\n  <rect x='160' y='115' width='160' height='70' fill='#fff9c4' stroke='#fbc02d' stroke-width='2' rx='10' ry='10'/>\n  <text x='240' y='150' font-family='Arial' font-size='14' fill='#f57f17' text-anchor='middle'>Protein Pump using ATP</text>\n  <path d='M160 150 L80 150' stroke='#f57f17' stroke-width='3' marker-end='url(#arrow)' />\n  <path d='M120 85 L120 30' stroke='#00796b' stroke-width='2' marker-end='url(#arrow)' />\n  <text x='120' y='25' font-family='Arial' font-size='14' fill='#004d40' text-anchor='middle'>Low concentration</text>\n  <defs>\n    <marker id='arrow' markerWidth='8' markerHeight='8' refX='5' refY='3' orient='auto' markerUnits='strokeWidth'>\n      <path d='M0,0 L0,6 L9,3 z' fill='#f57f17' />\n    </marker>\n  </defs>\n</svg>",
  "step1": {
    "title": "Concept: What is Active Transport?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Active transport is the movement of substances <strong>from a region of lower concentration to a region of higher concentration</strong>, going against the concentration gradient. This process requires energy released from respiration.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing a ball uphill against gravity; it needs energy. Similarly, cells use energy to move substances against their natural flow.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Concentration Gradient",
      "problem": "A mineral ion concentration outside a plant root cell is 2 units, and inside is 8 units. Does the ion move by diffusion or active transport? Input your reasoning.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the concentration higher outside or inside the cell? (Type 'outside' or 'inside')",
          "answer": "inside",
          "feedback": "Correct! The concentration is higher inside (8 units vs 2 units)."
        },
        {
          "id": "q2",
          "prompt": "If substances naturally move from high to low concentration, which direction would the ion diffuse?",
          "answer": "outside",
          "feedback": "Correct! Ions would naturally diffuse out if possible."
        },
        {
          "id": "q3",
          "prompt": "Given the ions are absorbed into the cell (from low to high concentration), what process enables this?",
          "answer": "active transport",
          "feedback": "Correct! Active transport moves ions against the gradient."
        }
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: Diffusion, Osmosis or Active Transport?",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following requires energy to move substances against their concentration gradient?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Diffusion</span>",
            "isCorrect": false,
            "explanation": "Diffusion is passive and does not require energy."
          },
          {
            "id": "b",
            "label": "<span>Osmosis</span>",
            "isCorrect": false,
            "explanation": "Osmosis is a passive process moving water down its concentration gradient."
          },
          {
            "id": "c",
            "label": "<span>Active Transport</span>",
            "isCorrect": true,
            "explanation": "Correct! Active transport uses energy to move substances against the gradient."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The energy molecule used in active transport is called <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "glucose",
                "label": "Glucose",
                "isCorrect": false,
                "feedback": "Incorrect. Glucose is a sugar, not an energy molecule."
              },
              {
                "value": "ATP",
                "label": "ATP",
                "isCorrect": true,
                "feedback": "Correct! ATP provides energy for active transport."
              },
              {
                "value": "Oxygen",
                "label": "Oxygen",
                "isCorrect": false,
                "feedback": "Incorrect. Oxygen is not the direct energy molecule."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Active transport moves substances <span class=\"font-semibold\">_____</span> their concentration gradient.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "down",
                "label": "Down",
                "isCorrect": false,
                "feedback": "Incorrect. Moving down the gradient is diffusion or osmosis."
              },
              {
                "value": "against",
                "label": "Against",
                "isCorrect": true,
                "feedback": "Correct! Active transport moves substances against the gradient."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "How Active Transport Works: Step-by-Step",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Proteins in the cell membrane act as pumps, using energy from ATP to move molecules from low to high concentration areas. The pump changes shape to carry molecules through the membrane.</p>",
    "workedExample": {
      "title": "Interactive Example: ATP Use in Active Transport",
      "problem": "Suppose ATP releases 30 units of energy per molecule. If active transport requires 90 units of energy, how many ATP molecules are needed? Calculate step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How much energy does one ATP molecule provide?",
          "answer": "30",
          "feedback": "Correct. One ATP molecule provides 30 units."
        },
        {
          "id": "q2",
          "prompt": "Energy required for active transport?",
          "answer": "90",
          "feedback": "Correct. The process requires 90 units."
        },
        {
          "id": "q3",
          "prompt": "Divide total energy needed by energy per ATP to find number of ATP molecules:",
          "answer": "3",
          "feedback": "Correct! 90 ÷ 30 = 3 ATP molecules needed."
        }
      ]
    }
  },
  "step5": {
    "title": "Real World Application: Absorbing Nutrients",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Plants absorb mineral ions from the soil and animals absorb glucose from the gut using active transport, allowing them to take in substances even when concentrations are higher inside their cells.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='50' y='40' width='130' height='170' fill='#dcedc8' stroke='#33691e' stroke-width='2' rx='12' ry='12'/>\n  <text x='115' y='30' font-family='Arial' font-size='16' fill='#1b5e20' text-anchor='middle'>Plant Root Cell</text>\n  <circle cx='110' cy='70' r='10' fill='#64b5f6' />\n  <circle cx='110' cy='110' r='10' fill='#64b5f6'/>\n  <path d='M30 80 L50 75 L50 110 L30 115 Z' fill='#64b5f6' />\n  <text x='15' y='75' font-family='Arial' font-size='12' fill='#1b5e20'>Mineral ions</text>\n  <path d='M230 150 L180 150' stroke='#33691e' stroke-width='3' marker-end='url(#arrow)' />\n  <text x='230' y='145' font-family='Arial' font-size='14' fill='#33691e'>Energy used to pump ions</text>\n  <defs>\n    <marker id='arrow' markerWidth='8' markerHeight='8' refX='5' refY='3' orient='auto' markerUnits='strokeWidth'>\n      <path d='M0,0 L0,6 L9,3 Z' fill='#33691e' />\n    </marker>\n  </defs>\n</svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how active transport enables plant root cells to absorb mineral ions from the soil even when the concentration is higher inside the cell.</span>",
      "hint": "Remember to mention the role of energy and membrane proteins.",
      "mustHaveKeywords": ["active transport", "against concentration gradient", "energy", "ATP", "protein pumps"],
      "optionalKeywords": ["respiration", "mineral ions", "cell membrane"],
      "modelAnswer": "<span>Active transport allows plant root cells to absorb mineral ions from the soil against the concentration gradient by using energy from ATP produced during respiration. Protein pumps in the cell membrane use this energy to move ions from a lower concentration outside the cell to a higher concentration inside.</span>",
      "scaffoldPrompts": ["What direction do mineral ions move relative to their concentration?", "What provides the energy for this movement?", "Which structures in the membrane help this process?"]
    }
  }
};