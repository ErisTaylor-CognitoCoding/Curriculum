window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.5.1.2 - Reaction profiles",
  "strapline": "Understanding how to interpret and draw energy changes during chemical reactions using reaction profile diagrams.",
  "learningObjectives": [
    "Students should be able to interpret and draw reaction profile diagrams for both exothermic and endothermic reactions (Chemistry 5.5.1.2)",
    "Students should be able to identify activation energy as the minimum energy needed for a reaction to occur from reaction profile diagrams (Chemistry 5.5.1.2)",
    "Students should be able to recognise the overall energy change of a reaction from the difference in energy levels between reactants and products (Chemistry 5.5.1.2)"
  ],
  "keyFormulas": [
    "Activation Energy (Ea) = Energy of activated complex − Energy of reactants",
    "Energy Change (ΔH) = Energy of products − Energy of reactants",
    "Reminder: Activation energy is always positive; ΔH can be positive (endothermic) or negative (exothermic)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Generic Reaction Profile Diagram'><rect width='400' height='250' fill='#fff'/><path d='M40 200 L100 150 Q130 120 160 180 L220 110 Q250 80 280 130 L340 90' stroke='#007ACC' stroke-width='3' fill='none'/><line x1='40' y1='200' x2='340' y2='90' stroke='none'/><text x='20' y='205' font-family='Arial' font-size='12'>Reactants</text><text x='350' y='95' font-family='Arial' font-size='12'>Products</text><line x1='100' y1='150' x2='160' y2='180' stroke='gray' stroke-dasharray='4' /><line x1='220' y1='110' x2='280' y2='130' stroke='gray' stroke-dasharray='4'/><circle cx='130' cy='120' r='6' fill='#FF5722'/><text x='120' y='110' font-family='Arial' font-size='12' fill='#FF5722'>Activation Energy (Ea)</text><line x1='40' y1='200' x2='130' y2='120' stroke='gray' stroke-dasharray='4'/><text x='150' y='220' font-family='Arial' font-size='14' fill='#000'>Energy</text><text x='200' y='230' font-family='Arial' font-size='14' fill='#000'>Reaction Progress</text></svg>",
  "step1": {
    "title": "Introduction to Reaction Profiles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>reaction profile</strong> is a graph showing the relative energy changes during a chemical reaction. It illustrates how the energy of the reactants changes as they convert to products. The y-axis represents energy and the x-axis represents the reaction progress.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine hiking over a hill: the hilltop represents the highest energy point a reaction must reach (activation energy), while the starting point and destination are the energy levels of reactants and products.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying parts of a Reaction Profile",
      "problem": "Given a reaction profile graph, let's identify key features step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What do the labels on the y-axis represent?",
          "answer": "Energy",
          "feedback": "Correct. The y-axis shows the energy of particles during the reaction."
        },
        {
          "id": "q2",
          "prompt": "What does the x-axis represent?",
          "answer": "Reaction progress",
          "feedback": "Correct. The x-axis shows the progress from reactants to products."
        },
        {
          "id": "q3",
          "prompt": "What does the peak (highest point) on the curve represent?",
          "answer": "Activation energy",
          "feedback": "Correct. This peak is the energy barrier that must be overcome for the reaction to proceed."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Activation Energy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>activation energy (Ea)</strong> is the minimum energy required for reactant particles to collide successfully and form products. It corresponds to the energy difference between the reactants and the highest point on the reaction profile.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of activation energy like the effort needed to push a boulder up a hill before it rolls down the other side.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Calculate Activation Energy",
      "problem": "Using a reaction profile, find the activation energy if reactants have energy 50 kJ/mol and the peak is at 120 kJ/mol.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the energy of the reactants?",
          "answer": "50",
          "feedback": "Correct. Reactants start at 50 kJ/mol."
        },
        {
          "id": "q2",
          "prompt": "What is the energy at the highest point (activated complex)?",
          "answer": "120",
          "feedback": "Correct. The peak is at 120 kJ/mol."
        },
        {
          "id": "q3",
          "prompt": "Calculate the activation energy (Ea).",
          "answer": "70",
          "feedback": "Correct. Activation energy = 120 − 50 = 70 kJ/mol."
        }
      ]
    }
  },
  "step3": {
    "title": "Energy Change (ΔH) in a Reaction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Energy change (ΔH)</strong> is calculated by subtracting the energy of the reactants from the energy of the products. This shows if a reaction is exothermic or endothermic.</p><ul><li>Exothermic: ΔH &lt; 0 (energy released)</li><li>Endothermic: ΔH &gt; 0 (energy absorbed)</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Exothermic is like sliding down a hill (energy released), endothermic is like climbing up a hill (energy absorbed).</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Calculate ΔH",
      "problem": "If reactants have 80 kJ/mol and products have 40 kJ/mol, calculate the energy change (ΔH).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What's the energy of the reactants?",
          "answer": "80",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "What's the energy of the products?",
          "answer": "40",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate ΔH = products − reactants.",
          "answer": "-40",
          "feedback": "Correct. ΔH = 40 − 80 = −40 kJ/mol (exothermic)."
        }
      ]
    }
  },
  "step4": {
    "title": "Drawing Reaction Profiles: Exothermic Reactions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In an <strong>exothermic reaction</strong>, the products have less energy than the reactants, so energy is released. The reaction profile starts higher for reactants and ends lower for products, showing a net energy decrease.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Exothermic Reaction Profile Diagram'><rect width='400' height='250' fill='#fff'/><path d='M50 180 Q120 80 190 130 T 340 140' stroke='#D32F2F' stroke-width='3' fill='none'/><text x='40' y='190' font-family='Arial' font-size='14'>Reactants (High Energy)</text><text x='320' y='150' font-family='Arial' font-size='14'>Products (Lower Energy)</text><line x1='120' y1='80' x2='120' y2='180' stroke='gray' stroke-dasharray='4'/><text x='125' y='90' font-family='Arial' font-size='12' fill='#D32F2F'>Activation Energy</text></svg>"
  },
  "step5": {
    "title": "Drawing Reaction Profiles: Endothermic Reactions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In an <strong>endothermic reaction</strong>, the products have more energy than the reactants because energy is absorbed. The reaction profile starts lower and ends higher, showing a net energy increase.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Endothermic Reaction Profile Diagram'><rect width='400' height='250' fill='#fff'/><path d='M50 120 Q120 190 190 130 T 340 140' stroke='#1976D2' stroke-width='3' fill='none'/><text x='40' y='130' font-family='Arial' font-size='14'>Reactants (Lower Energy)</text><text x='320' y='150' font-family='Arial' font-size='14'>Products (Higher Energy)</text><line x1='120' y1='190' x2='120' y2='120' stroke='gray' stroke-dasharray='4'/><text x='125' y='200' font-family='Arial' font-size='12' fill='#1976D2'>Activation Energy</text></svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how reaction profile diagrams can be used to distinguish between exothermic and endothermic reactions, and how activation energy and overall energy change are represented.</span>",
      "hint": "Remember to describe the relative energy levels of reactants and products, the peak energy, and sign of ΔH.",
      "mustHaveKeywords": ["activation energy", "energy change", "exothermic", "endothermic", "reactants", "products"],
      "optionalKeywords": ["energy profile diagram", "energy released", "energy absorbed", "energy barrier", "ΔH positive", "ΔH negative"],
      "modelAnswer": "<span>A reaction profile diagram shows the energy of reactants and products during a reaction. In an exothermic reaction, the products have lower energy than the reactants, so energy is released and ΔH is negative. In an endothermic reaction, products have higher energy than reactants, so energy is absorbed and ΔH is positive. The activation energy is shown as the peak energy difference between the reactants and the highest point on the diagram, representing the minimum energy needed for the reaction to occur.</span>",
      "scaffoldPrompts": ["Describe the relative energy levels of reactants and products in both reaction types.", "Explain what the peak in the diagram represents.", "State how energy change (ΔH) indicates if a reaction is exothermic or endothermic."]
    }
  }
};