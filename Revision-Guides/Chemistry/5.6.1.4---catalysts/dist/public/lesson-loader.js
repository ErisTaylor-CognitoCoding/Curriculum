window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.6.1.4 - Catalysts",
  "strapline": "Understanding the role of catalysts in speeding up chemical reactions and their applications.",
  "learningObjectives": [
    "Students should understand that catalysts are substances that increase the rate of chemical reactions without being chemically changed or used up themselves (Chemistry 5.6.1.4)",
    "Students should understand that catalysts work by providing an alternative reaction pathway with lower activation energy (Chemistry 5.6.1.4)",
    "Students should know examples of catalysts used in industrial processes and everyday applications, including biological catalysts called enzymes (Chemistry 5.6.1.4)"
  ],
  "keyFormulas": [
    "There are no specific formulas related directly to catalysts, but concepts such as activation energy and reaction rate depend on graph interpretation and energy diagrams."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='30' y='220' width='340' height='50' fill='#e0e0e0' rx='5' ry='5'/>  <path d='M 50 220 Q 120 100 190 180 Q 260 230 330 140 L 370 140' stroke='#0077cc' fill='none' stroke-width='3'/>  <path d='M 50 220 Q 120 140 190 160 Q 260 190 330 140 L 370 140' stroke='#cc5500' fill='none' stroke-width='3'/>  <text x='50' y='230' font-family='Arial' font-size='12' fill='#333'>Reactants</text>  <text x='345' y='135' font-family='Arial' font-size='12' fill='#0077cc' text-anchor='end'>Without Catalyst</text>  <text x='345' y='155' font-family='Arial' font-size='12' fill='#cc5500' text-anchor='end'>With Catalyst</text>  <text x='185' y='100' font-family='Arial' font-size='14' fill='#0077cc'>Activation Energy (Ea)</text>  <text x='185' y='160' font-family='Arial' font-size='14' fill='#cc5500'>Lower Activation Energy (Ea')</text></svg>",
  "step1": {
    "title": "What is a Catalyst?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A catalyst is a substance that speeds up a chemical reaction without being chemically changed or used up during the reaction. At the end, the catalyst remains unchanged and can be used again in further reactions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a catalyst as a shortcut on a journey. It provides a quicker route but doesn't get tired or lost itself.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify a Catalyst",
      "problem": "In the decomposition of hydrogen peroxide (<em>H<sub>2</sub>O<sub>2</sub></em>) into water and oxygen, manganese dioxide (<em>MnO<sub>2</sub></em>) is added. Is <em>MnO<sub>2</sub></em> acting as a catalyst?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the substance change chemically during the reaction?",
          "answer": "No",
          "feedback": "Correct, <em>MnO<sub>2</sub></em> does not change chemically."
        },
        {
          "id": "q2",
          "prompt": "Does it increase the rate of the reaction?",
          "answer": "Yes",
          "feedback": "Correct, <em>MnO<sub>2</sub></em> speeds up the decomposition."
        },
        {
          "id": "q3",
          "prompt": "Therefore, is <em>MnO<sub>2</sub></em> a catalyst?",
          "answer": "Yes",
          "feedback": "Exactly! <em>MnO<sub>2</sub></em> is a catalyst as it speeds up the reaction without being used up."
        }
      ]
    }
  },
  "step2": {
    "title": "How Catalysts Work",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Catalysts work by providing an alternative reaction pathway with a lower activation energy than the uncatalysed reaction. This means that more particles have enough energy to react, increasing the reaction rate.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <path d='M50 250 Q150 100 250 250' stroke='#555555' stroke-width='3' fill='none'/>  <path d='M50 250 Q150 170 250 250' stroke='#cc0000' stroke-width='3' fill='none'/>  <line x1='150' y1='100' x2='150' y2='250' stroke='#555555' stroke-dasharray='5,5'/>  <line x1='150' y1='170' x2='150' y2='250' stroke='#cc0000' stroke-dasharray='5,5'/>  <text x='150' y='90' font-family='Arial' font-size='12' fill='#555555' text-anchor='middle'>Ea (activation energy)</text>  <text x='150' y='160' font-family='Arial' font-size='12' fill='#cc0000' text-anchor='middle'>Ea' (lowered by catalyst)</text>  <text x='50' y='270' font-family='Arial' font-size='12' fill='#000000'>Reactants</text>  <text x='250' y='270' font-family='Arial' font-size='12' fill='#000000'>Products</text>  <text x='100' y='180' font-family='Arial' font-size='14' fill='#cc0000'>Alternative Pathway</text></svg>"
  },
  "step3": {
    "title": "Key Concept: Activation Energy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Activation energy is the minimum energy that particles must have to react. Catalysts lower this energy barrier, making it easier for reactions to happen.</p>",
    "analogy": {
      "title": "Activation Energy Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing a ball over a hill. The activation energy is the height of the hill. A catalyst lowers the hill's height, so it's easier to push the ball over.</p>"
    }
  },
  "step4": {
    "title": "Concept: Alternative Reaction Pathway",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Catalysts provide an alternative reaction pathway that requires less energy. This means the reaction can happen faster as more particles can overcome the energy barrier.</p>",
    "workedExample": {
      "title": "Worked Example: Activation Energy Values",
      "problem": "A reaction has an activation energy of 80 kJ/mol without a catalyst. With a catalyst, the activation energy reduces to 50 kJ/mol. Calculate how much energy is saved by using the catalyst.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the activation energy without the catalyst (in kJ/mol)?",
          "answer": "80",
          "feedback": "Correct, the activation energy without catalyst is 80 kJ/mol."
        },
        {
          "id": "q2",
          "prompt": "What is the activation energy with the catalyst (in kJ/mol)?",
          "answer": "50",
          "feedback": "Correct, the activation energy is lowered to 50 kJ/mol."
        },
        {
          "id": "q3",
          "prompt": "Calculate the energy saved by the catalyst (Ea - Ea').",
          "answer": "30",
          "feedback": "Exactly! 80 - 50 = 30 kJ/mol saved."
        }
      ]
    }
  },
  "step5": {
    "title": "Examples of Catalysts in Industry and Everyday Life",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Catalysts are used widely in industry to speed up reactions and save energy. For example, iron is used in the Haber process to produce ammonia. Enzymes are biological catalysts that speed up reactions in living organisms.</p>",
    "examples": [
      "<strong>Industrial:</strong> Iron catalyst in the Haber process synthesizing ammonia.",
      "<strong>Environmental:</strong> Catalytic converters in cars use platinum and rhodium to reduce harmful emissions.",
      "<strong>Biological:</strong> Enzymes such as amylase which breaks down starch in saliva."
    ]
  },
  "step6": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the main role of a catalyst in a chemical reaction?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Speeds up the reaction without being used up</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Catalysts speed up reactions and remain unchanged.</span>"
          },
          {
            "id": "b",
            "label": "<span>Increases the temperature of the reaction</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Catalysts do not affect temperature.</span>"
          },
          {
            "id": "c",
            "label": "<span>Becomes part of the products</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Catalysts are not consumed or changed.</span>"
          },
          {
            "id": "d",
            "label": "<span>Prevents the reaction from happening</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Catalysts accelerate reactions.</span>"
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which of these is an example of a biological catalyst?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Iron</span>",
            "isCorrect": false,
            "explanation": "<span>Iron is an industrial catalyst, not biological.</span>"
          },
          {
            "id": "b",
            "label": "<span>Enzyme</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Enzymes are biological catalysts.</span>"
          },
          {
            "id": "c",
            "label": "<span>Platinum</span>",
            "isCorrect": false,
            "explanation": "<span>Platinum is used in catalytic converters but is not biological.</span>"
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> provides an alternative reaction pathway with lower activation energy.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "catalyst",
                "label": "catalyst",
                "isCorrect": true,
                "feedback": "Correct! Catalysts provide the alternative pathway."
              },
              {
                "value": "product",
                "label": "product",
                "isCorrect": false,
                "feedback": "Incorrect, a product is formed after reaction completion."
              },
              {
                "value": "reactant",
                "label": "reactant",
                "isCorrect": false,
                "feedback": "Incorrect, reactants are substances before the reaction occurs."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> energy is lowered by catalysts.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "activation",
                "label": "activation",
                "isCorrect": true,
                "feedback": "Correct! Catalysts lower activation energy."
              },
              {
                "value": "potential",
                "label": "potential",
                "isCorrect": false,
                "feedback": "Incorrect, potential energy is not the key term here."
              },
              {
                "value": "thermal",
                "label": "thermal",
                "isCorrect": false,
                "feedback": "Incorrect. Thermal energy is related to heat but not directly lowered by catalysts."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how catalysts increase the rate of chemical reactions and give examples of catalysts used in industry and biology.</span>",
      "hint": "Remember to mention activation energy, reaction pathway, and state examples clearly.",
      "mustHaveKeywords": [
        "catalyst",
        "activation energy",
        "alternative reaction pathway",
        "enzyme",
        "industrial catalyst"
      ],
      "optionalKeywords": [
        "reaction rate",
        "unchanged",
        "used up"
      ],
      "modelAnswer": "<span>A catalyst increases the rate of a chemical reaction by providing an alternative reaction pathway that has a lower activation energy than the uncatalysed pathway. This means more reactant particles have enough energy to react, so the reaction happens faster. Catalysts are not chemically changed or used up during the reaction, so they can be reused. Examples of catalysts include iron in the Haber process used industrially to make ammonia, and enzymes which act as biological catalysts to speed up reactions in living organisms.</span>",
      "scaffoldPrompts": [
        "First, describe what a catalyst does to activation energy.",
        "Next, explain how this affects the reaction rate.",
        "Finally, give examples of catalysts used in industry and living things."
      ]
    }
  }
};