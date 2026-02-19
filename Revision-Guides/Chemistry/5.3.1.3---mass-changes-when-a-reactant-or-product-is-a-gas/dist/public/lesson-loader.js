window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.3.1.3 - Mass changes when a reactant or product is a gas",
  "strapline": "Understanding apparent and actual mass changes in reactions involving gases in open and closed systems.",
  "learningObjectives": [
    "Students should be able to explain why, in a reaction involving a change in mass, it is only the substances in the reaction vessel that are counted and not any gases that enter or leave (Chemistry 5.3.1.3)",
    "Students should be able to explain that in non-enclosed systems, mass appears to decrease when a gaseous product escapes to the surroundings, or increase when a gaseous reactant from the air reacts with a substance (Chemistry 5.3.1.3)",
    "Students should understand that the law of conservation of mass still applies to the total system including the surrounding air (Chemistry 5.3.1.3)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='30' y='50' width='160' height='200' fill='#d0e7f9' stroke='#0057a3' stroke-width='2'/>  <text x='110' y='75' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#0057a3'>Enclosed Vessel</text>  <circle cx='110' cy='150' r='30' fill='#a3cee6'/>  <text x='110' y='155' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#003559'>Reactants + Products</text>  <line x1='200' y1='150' x2='250' y2='150' stroke='#333' stroke-dasharray='5,5'/>  <rect x='250' y='50' width='120' height='200' fill='#fdebd0' stroke='#a66327' stroke-width='2'/>  <text x='310' y='75' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#a66327'>Open Vessel</text>  <circle cx='310' cy='150' r='30' fill='#f4c27b'/>  <text x='310' y='155' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#6a4320'>Substance inside</text>  <path d='M310 120 C 340 110, 340 190, 310 180' stroke='#d46a30' stroke-width='3' fill='none' marker-end='url(#arrowhead)'/>  <defs>    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#d46a30' />    </marker>  </defs>  <text x='360' y='140' font-family='sans-serif' font-size='12' fill='#6a4320'>Gas leaves</text></svg>",
  "step1": {
    "title": "Concept: What affects mass measurements in reactions involving gases?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In chemical reactions, the total mass of substances inside the reaction vessel is what is measured. However, if the vessel is open, gases may enter or leave during the reaction. This affects the measured mass because gases have mass but can move freely in and out.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a balloon filled with air inside a room. If you let some air out, the balloon becomes lighter, but the total air mass in the room plus balloon hasn’t changed—only the distribution has.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Measuring Mass in a Reaction",
      "problem": "A metal reacts with oxygen in an open container. How will the mass change we measure relate to the actual mass change?",
      "questions": [
        {
          "id": "q1",
          "prompt": "If oxygen enters the container and reacts, will the measured mass increase, decrease, or stay the same?",
          "answer": "increase",
          "feedback": "Correct. Oxygen gas enters the container and reacts, so the mass inside increases."
        },
        {
          "id": "q2",
          "prompt": "If a gaseous product escapes from the open container, will the measured mass increase, decrease, or stay the same?",
          "answer": "decrease",
          "feedback": "Correct. Mass appears to decrease because gas leaves the vessel."
        },
        {
          "id": "q3",
          "prompt": "In a fully closed container where no gas escapes or enters, how does the measured mass change?",
          "answer": "stay the same",
          "feedback": "Correct. The total mass of reactants and products inside stays constant."
        }
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Why do mass measurements in an open system seem to change when gases are involved?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Because gases entering or escaping change the mass inside the vessel.</span>",
            "isCorrect": true,
            "explanation": "Correct. Gases have mass and their movement changes the measured mass inside an open vessel."
          },
          {
            "id": "b",
            "label": "<span>Because mass is created or destroyed during the reaction.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Mass is not created or destroyed; it just moves in or out of the vessel."
          },
          {
            "id": "c",
            "label": "<span>Because the scale measures differently for gases and solids.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The scale measures total mass regardless of physical state."
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
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> system is one where gases can enter or leave during a reaction, affecting measured mass.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "open",
                "label": "open",
                "isCorrect": true,
                "feedback": "Correct! An open system allows gases to enter or escape."
              },
              {
                "value": "closed",
                "label": "closed",
                "isCorrect": false,
                "feedback": "Try again. A closed system does not allow gas exchange."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span><span class=\"font-semibold\">_____</span> mass change is the change in mass that is observed by weighing only contents inside the vessel, often affected by gas movement.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "Apparent",
                "label": "Apparent",
                "isCorrect": true,
                "feedback": "Correct! Apparent mass change is what we measure in the vessel."
              },
              {
                "value": "Absolute",
                "label": "Absolute",
                "isCorrect": false,
                "feedback": "Incorrect. Absolute is not the correct term here."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of mass states that total mass remains constant in a reaction including all reactants and products.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "conservation",
                "label": "conservation",
                "isCorrect": true,
                "feedback": "Correct! Mass is conserved in all reactions."
              },
              {
                "value": "creation",
                "label": "creation",
                "isCorrect": false,
                "feedback": "Incorrect. Mass cannot be created in chemical reactions."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Interactive Diagram Explanation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Study this diagram showing an open and a closed reaction vessel. Notice how gases can leave or enter the open vessel, changing its mass, but the total mass including the surroundings is constant.</p>",
    "diagramHtml": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='20' y='50' width='180' height='200' fill='#a6dcef' stroke='#15537d' stroke-width='3'/>  <text x='110' y='80' font-family='sans-serif' font-size='16' fill='#15537d' text-anchor='middle'>Closed Vessel</text>  <circle cx='110' cy='150' r='40' fill='#57b8f5'/>  <text x='110' y='155' font-family='sans-serif' font-size='14' fill='#083759' text-anchor='middle'>Reactants + Products</text>  <rect x='300' y='50' width='180' height='200' fill='#f9dba9' stroke='#a3751f' stroke-width='3'/>  <text x='390' y='80' font-family='sans-serif' font-size='16' fill='#a3751f' text-anchor='middle'>Open Vessel</text>  <circle cx='390' cy='150' r='40' fill='#f9bb48'/>  <text x='390' y='155' font-family='sans-serif' font-size='14' fill='#795007' text-anchor='middle'>Substance inside</text>  <path d='M430 120 Q460 100 430 180' stroke='#d46a30' stroke-width='3' fill='none' marker-end='url(#arrowhead)'/>  <text x='470' y='140' font-family='sans-serif' font-size='13' fill='#795007'>Gas escapes</text>  <defs>    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#d46a30' />    </marker>  </defs>  <text x='110' y='280' font-family='sans-serif' font-size='12' fill='#083759' text-anchor='middle'>Measured mass stays constant inside closed vessel</text>  <text x='390' y='280' font-family='sans-serif' font-size='12' fill='#795007' text-anchor='middle'>Measured mass changes due to gas exchange in open vessel</text></svg>"
  },
  "step5": {
    "title": "Interactive Worked Example: Calculate Apparent Mass Change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A reaction takes place in an open container. Initially, the mass of reactants inside is 10.0 g. During the reaction, a gaseous product escapes with a mass of 1.2 g. Calculate the apparent mass after the reaction.</p>",
    "workedExample": {
      "title": "Step-by-step Calculation",
      "problem": "Calculate the measured mass inside the container after gas escapes.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Initial mass inside the container (in g)?",
          "answer": "10.0",
          "feedback": "Correct. Starting mass is 10.0 g."
        },
        {
          "id": "q2",
          "prompt": "Mass of gaseous product that escapes (in g)?",
          "answer": "1.2",
          "feedback": "Correct. The gas lost has 1.2 g mass."
        },
        {
          "id": "q3",
          "prompt": "Calculate the apparent mass after gas escapes (Initial mass - escaped gas mass).",
          "answer": "8.8",
          "feedback": "Correct! 10.0 g - 1.2 g = 8.8 g apparent mass."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain why the mass measured in an open reaction vessel can change during a chemical reaction involving gases, and describe how this relates to the law of conservation of mass.</span>",
      "hint": "Remember to discuss gases entering or leaving, apparent vs actual mass, and total system mass.",
      "mustHaveKeywords": ["open system", "gases enter or escape", "apparent mass change", "conservation of mass", "total system"],
      "optionalKeywords": ["non-enclosed", "reaction vessel", "surroundings"],
      "modelAnswer": "<span>In an open system, gases can enter the reaction vessel or escape during the reaction. Because these gases have mass, their movement causes the measured mass inside the vessel to change. When a gaseous product escapes, the measured mass decreases, and when a gaseous reactant from the air enters, it increases. However, the law of conservation of mass still applies because the total mass of the system, including the surroundings (air), remains constant. The changes are only apparent in the reaction vessel, not in the overall system.</span>",
      "scaffoldPrompts": [
        "Start by defining an open system in terms of gas exchange.",
        "Explain how gases entering or escaping affect measured mass.",
        "Discuss the concept of apparent mass change versus actual total mass.",
        "Conclude by linking to the law of conservation of mass including surrounding air."
      ]
    }
  }
};