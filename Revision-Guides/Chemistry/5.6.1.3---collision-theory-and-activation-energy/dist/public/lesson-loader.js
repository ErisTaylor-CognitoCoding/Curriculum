window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.6.1.3 - Collision theory and activation energy",
  "strapline": "Understanding how particles must collide with sufficient energy and correct orientation to react, and how factors influence reaction rates.",
  "learningObjectives": [
    "Students should explain that reactions occur when particles collide with sufficient energy and correct orientation (Chemistry 5.6.1.3)",
    "Students should define activation energy as the minimum amount of energy that particles must have when they collide for a reaction to take place (Chemistry 5.6.1.3)",
    "Students should explain how temperature, concentration, surface area, and catalysts affect the frequency and energy of collisions and therefore the rate of chemical reactions (Chemistry 5.6.1.3)"
  ],
  "keyFormulas": [
    "No specific numeric formulas are required for this topic but understanding activation energy is critical.",
    "Think conceptually about energy changes, collision frequency (rate) and factors influencing both."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#eef4fb' stroke='#333' stroke-width='2'/><circle cx='120' cy='150' r='20' fill='#4a90e2'/><circle cx='250' cy='150' r='20' fill='#d94f4f'/><text x='120' y='150' fill='white' font-family='sans-serif' font-size='14' text-anchor='middle' alignment-baseline='middle'>A</text><text x='250' y='150' fill='white' font-family='sans-serif' font-size='14' text-anchor='middle' alignment-baseline='middle'>B</text><line x1='140' y1='150' x2='230' y2='150' stroke='#333' stroke-width='3' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='10' refY='5' orient='auto'><path d='M0,0 L10,5 L0,10 Z' fill='#333'/></marker></defs><text x='200' y='40' font-family='sans-serif' font-size='16' fill='#333' font-weight='bold'>Collision with Correct Orientation</text><rect x='150' y='220' width='100' height='50' fill='#f9d423' stroke='#333' rx='10' ry='10'/><text x='200' y='250' font-family='sans-serif' font-size='14' fill='#333' text-anchor='middle' alignment-baseline='middle'>Energy Barrier</text><polyline points='50,270 190,180 310,270' fill='none' stroke='#a03232' stroke-width='4'/><text x='45' y='290' fill='#a03232' font-family='sans-serif' font-size='12'>Reactants</text><text x='310' y='290' fill='#a03232' font-family='sans-serif' font-size='12' text-anchor='end'>Products</text></svg>",
  "step1": {
    "title": "Introduction to Collision Theory",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Collision theory explains that chemical reactions only happen when particles collide. However, not all collisions cause reactions — the particles must collide with <strong>sufficient energy</strong> and in the <strong>correct orientation</strong> for bonds to break and form.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine trying to open a locked door: you need the <em>right key</em> (orientation) and enough force to turn it (energy). Without either, the door won't open.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Collision Requirements",
      "problem": "Two particles, A and B, collide. Decide step-by-step if they react based on energy and orientation.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the collision have enough energy? (Enter 'yes' or 'no')",
          "answer": "yes",
          "feedback": "Correct. Enough energy is needed to overcome activation energy."
        },
        {
          "id": "q2",
          "prompt": "Are the particles aligned correctly for a reaction? (Enter 'yes' or 'no')",
          "answer": "yes",
          "feedback": "Correct. Proper orientation is required to form/break bonds."
        },
        {
          "id": "q3",
          "prompt": "Given the answers above, will the particles react on collision? (Enter 'yes' or 'no')",
          "answer": "yes",
          "feedback": "Correct! Both conditions met means a successful collision."
        }
      ]
    }
  },
  "step2": {
    "title": "Defining Activation Energy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Activation energy</strong> is the minimum energy the colliding particles must have for a reaction to occur. It can be thought of as the energy barrier that particles need to overcome before bonds can break and new bonds form.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of activation energy as the effort needed to push a boulder uphill before it rolls down the other side — the reaction only proceeds once this initial effort is made.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Activation Energy Barrier",
      "problem": "A reaction requires 50 kJ/mol activation energy. You measure the energy of a collision. Enter if it is enough to react.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the collision energy in kJ/mol:",
          "answer": "55",
          "feedback": "Great! This energy is higher than the activation energy."
        },
        {
          "id": "q2",
          "prompt": "Is this collision energy sufficient for a reaction? (yes/no)",
          "answer": "yes",
          "feedback": "Correct! Energy exceeds activation energy threshold."
        }
      ]
    }
  },
  "step3": {
    "title": "Successful vs Unsuccessful Collisions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Not all collisions lead to reactions. A <strong>successful collision</strong> occurs only if the particles collide with at least the activation energy and correct orientation. Other collisions are <em>unsuccessful</em> and do not result in a reaction.</p>",
    "workedExample": {
      "title": "Worked Example: Identify Successful or Unsuccessful Collision",
      "problem": "Determine if these collisions will result in a reaction:",
      "questions": [
        {
          "id": "q1",
          "prompt": "Collision 1: Energy = 48 kJ/mol, Orientation = correct, Activation energy = 50 kJ/mol, react? (yes/no)",
          "answer": "no",
          "feedback": "Correct! Energy is insufficient despite correct orientation."
        },
        {
          "id": "q2",
          "prompt": "Collision 2: Energy = 60 kJ/mol, Orientation = incorrect, Activation energy = 50 kJ/mol, react? (yes/no)",
          "answer": "no",
          "feedback": "Correct! Orientation is wrong even if energy is sufficient."
        },
        {
          "id": "q3",
          "prompt": "Collision 3: Energy = 55 kJ/mol, Orientation = correct, Activation energy = 50 kJ/mol, react? (yes/no)",
          "answer": "yes",
          "feedback": "Correct! Both energy and orientation requirements met."
        }
      ]
    }
  },
  "step4": {
    "title": "How Temperature Affects Collisions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Increasing temperature increases particles’ kinetic energy, making collisions more frequent and more energetic. This increases the chances of collisions surpassing activation energy, which increases the rate of reaction.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like a busy dance floor where dancers move faster and bump into each other more often and harder.</p>"
    },
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='180' height='130' fill='#cce5ff' stroke='#004080' /><text x='100' y='40' font-family='sans-serif' font-weight='bold' font-size='14' fill='#004080' text-anchor='middle'>Low Temperature</text><circle cx='60' cy='90' r='12' fill='#0059b3' /><circle cx='120' cy='90' r='12' fill='#0059b3' /><line x1='60' y1='90' x2='120' y2='90' stroke='#003366' stroke-width='5' /><!-- arrow1 --><polyline points='60,90 54,80 62,82' fill='#0059b3'/><polyline points='120,90 126,80 119,82' fill='#0059b3'/><rect x='210' y='10' width='180' height='130' fill='#ffe6cc' stroke='#b35400' /><text x='300' y='40' font-family='sans-serif' font-weight='bold' font-size='14' fill='#b35400' text-anchor='middle'>High Temperature</text><circle cx='260' cy='90' r='12' fill='#ff6600' /><circle cx='320' cy='90' r='12' fill='#ff6600' /><line x1='260' y1='90' x2='320' y2='90' stroke='#cc5200' stroke-width='10' /><polyline points='260,90 249,75 255,78' fill='#ff6600'/><polyline points='320,90 331,75 325,78' fill='#ff6600'/></svg>"
  },
  "step5": {
    "title": "Effect of Concentration, Surface Area and Catalysts",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Concentration:</strong> Higher concentration means more particles in a volume, so more collisions.<br><strong>Surface Area:</strong> Increasing surface area of solid reactants exposes more particles to collide.<br><strong>Catalysts:</strong> Provide alternative reaction pathways with lower activation energy, increasing successful collisions without being used up.</p>",
    "workedExample": {
      "title": "Interactive Example: Predicting Effects on Reaction Rate",
      "problem": "Complete the table by predicting if the reaction rate will increase or decrease when the following changes occur:",
      "questions": [
        {
          "id": "q1",
          "prompt": "Increase temperature (yes to increase rate, no to decrease):",
          "answer": "yes",
          "feedback": "Correct! Increased temperature increases rate."
        },
        {
          "id": "q2",
          "prompt": "Decrease concentration (yes to increase rate, no to decrease):",
          "answer": "no",
          "feedback": "Correct! Decreasing concentration decreases rate."
        },
        {
          "id": "q3",
          "prompt": "Add a catalyst (yes to increase rate, no to decrease):",
          "answer": "yes",
          "feedback": "Correct! Catalysts increase rate."
        },
        {
          "id": "q4",
          "prompt": "Decrease surface area of solid reactants (yes to increase rate, no to decrease):",
          "answer": "no",
          "feedback": "Correct! Lower surface area decreases rate."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how temperature, concentration, surface area, and catalysts affect the rate of a chemical reaction according to collision theory.</span>",
      "hint": "Remember to discuss collision frequency, energy of collisions, orientation, and activation energy.",
      "mustHaveKeywords": ["collision frequency", "activation energy", "orientation", "energy of collisions"],
      "optionalKeywords": ["alternative pathway", "surface area", "concentration", "temperature", "catalyst"],
      "modelAnswer": "<span>According to collision theory, increasing temperature raises the kinetic energy of particles, increasing both the frequency and energy of collisions, so more particles collide with sufficient activation energy and correct orientation, speeding the reaction. Increasing concentration increases the number of particles in a volume, leading to more frequent collisions and higher reaction rate. Increasing surface area exposes more particles to collide, raising collision frequency. Catalysts provide an alternative reaction pathway with a lower activation energy, meaning that more collisions are successful at the same energy, increasing reaction rate without being consumed.</span>",
      "scaffoldPrompts": ["Think about how temperature affects particle energy and movement.", "Consider how concentration and surface area change the number of collisions.", "Explain the role of catalysts in lowering activation energy."]
    }
  }
};