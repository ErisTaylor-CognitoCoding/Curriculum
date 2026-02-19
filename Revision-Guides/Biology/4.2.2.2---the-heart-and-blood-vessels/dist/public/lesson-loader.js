window.lessonContent = {
  "subject": "Biology",
  "specCode": "",
  "topicTitle": "4.2.2.2 - The heart and blood vessels",
  "strapline": "Understanding the heart's structure and function, the double circulatory system, and the roles of different blood vessels.",
  "learningObjectives": [
    "Students should understand the structure of the heart, including the four chambers, valves and major blood vessels (Biology 4.2.2.2)",
    "Students should understand how the heart pumps blood around the body through a double circulatory system (Biology 4.2.2.2)",
    "Students should understand the differences between arteries, veins and capillaries, and how their structures relate to their specific functions in transporting blood throughout the body (Biology 4.2.2.2)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='50' y='50' width='300' height='200' fill='#f0f8ff' stroke='#333' rx='20' ry='20'/>\n  <circle cx='125' cy='125' r='30' fill='#ff9999' stroke='#b22222' stroke-width='2'/>\n  <text x='125' y='130' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='14'>Right Atrium</text>\n  <circle cx='275' cy='125' r='30' fill='#99ccff' stroke='#1e90ff' stroke-width='2'/>\n  <text x='275' y='130' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='14'>Left Atrium</text>\n  <ellipse cx='125' cy='200' rx='40' ry='30' fill='#ff6666' stroke='#b22222' stroke-width='2'/>\n  <text x='125' y='205' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='14'>Right Ventricle</text>\n  <ellipse cx='275' cy='200' rx='40' ry='30' fill='#6699ff' stroke='#1e90ff' stroke-width='2'/>\n  <text x='275' y='205' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='14'>Left Ventricle</text>\n  <line x1='155' y1='125' x2='235' y2='125' stroke='#555' stroke-width='5' stroke-linecap='round' />\n  <line x1='155' y1='200' x2='235' y2='200' stroke='#555' stroke-width='5' stroke-linecap='round' />\n  <text x='200' y='90' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#000'>Pulmonary Veins</text>\n  <circle cx='200' cy='45' r='12' fill='#ff6666' />\n  <text x='200' y='50' text-anchor='middle' font-family='sans-serif' font-size='10' fill='#fff'>O<sub>2</sub></text>\n  <text x='60' y='250' font-family='sans-serif' font-size='12' fill='#333'>Blood flows:</text>\n  <polyline points='100,245 150,220 250,220 300,245' fill='none' stroke='#008000' stroke-width='3' marker-end='url(#arrowhead)' />\n  <defs>\n    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>\n      <polygon points='0 0, 10 3.5, 0 7' fill='#008000' />\n    </marker>\n  </defs>\n</svg>",
  "step1": {
    "title": "Concept: Structure of the Heart Chambers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The heart consists of four chambers: two atria and two ventricles. The <strong>atria</strong> are upper chambers that <em>receive blood</em>, while the <strong>ventricles</strong> are lower chambers that <em>pump blood out</em>. The right side handles <strong>deoxygenated blood</strong>, and the left side handles <strong>oxygenated blood</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the heart like a two-sided pump with four rooms: two rooms receive packages (blood), and two rooms send packages out to different destinations.</p>"
    },
    "workedExample": {
      "title": "Interactive: Identifying Heart Chambers",
      "problem": "Label the four chambers of the heart in this diagram.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which chamber receives deoxygenated blood from the body? (Type 'right atrium' or 'left atrium')",
          "answer": "right atrium",
          "feedback": "Correct! The right atrium receives deoxygenated blood from the body."
        },
        {
          "id": "q2",
          "prompt": "Which chamber pumps deoxygenated blood to the lungs? (Type 'right ventricle' or 'left ventricle')",
          "answer": "right ventricle",
          "feedback": "Correct! The right ventricle pumps blood to the lungs."
        },
        {
          "id": "q3",
          "prompt": "Which chamber receives oxygenated blood from the lungs? (Type 'left atrium' or 'right atrium')",
          "answer": "left atrium",
          "feedback": "Correct! The left atrium receives oxygenated blood."
        },
        {
          "id": "q4",
          "prompt": "Which chamber pumps oxygenated blood to the body? (Type 'left ventricle' or 'right ventricle')",
          "answer": "left ventricle",
          "feedback": "Correct! The left ventricle pumps blood to the body."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Heart Valves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Valves in the heart ensure blood flows in one direction only by opening to allow passage and closing to prevent backflow. Key valves include the <strong>tricuspid</strong>, <strong>mitral</strong>, <strong>pulmonary</strong>, and <strong>aortic</strong> valves.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Valves are like one-way doors, opening only to allow traffic forward and preventing vehicles (blood) from reversing.</p>"
    },
    "workedExample": {
      "title": "Interactive: Valve Function",
      "problem": "Select whether each valve opens or closes during the heartbeat phases.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the tricuspid valve open or close when the right atrium contracts?",
          "answer": "open",
          "feedback": "Correct, the tricuspid valve opens to let blood flow to the right ventricle."
        },
        {
          "id": "q2",
          "prompt": "Does the aortic valve open or close when the left ventricle contracts?",
          "answer": "open",
          "feedback": "Correct, the aortic valve opens to allow blood flow to the body."
        },
        {
          "id": "q3",
          "prompt": "Does the mitral valve open or close when the left ventricle contracts?",
          "answer": "close",
          "feedback": "Correct, it closes to prevent backflow into the left atrium."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: The Double Circulatory System",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The double circulatory system has two circuits: the <strong>pulmonary circuit</strong> carries blood between the heart and lungs for oxygenation, and the <strong>systemic circuit</strong> carries oxygenated blood from the heart to the rest of the body and back.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it like two separate delivery routes — one route sends packages to a central processing plant (lungs), and the other distributes them to various destinations (body tissues).</p>"
    },
    "workedExample": {
      "title": "Interactive: Trace the Circulatory Routes",
      "problem": "Identify whether the following blood flows belong to the pulmonary or systemic circuit.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Blood from the right ventricle to the lungs. (Type 'pulmonary' or 'systemic')",
          "answer": "pulmonary",
          "feedback": "Correct, this is the pulmonary circuit."
        },
        {
          "id": "q2",
          "prompt": "Blood from the left ventricle to the body's organs. (Type 'systemic' or 'pulmonary')",
          "answer": "systemic",
          "feedback": "Correct, this is the systemic circuit."
        },
        {
          "id": "q3",
          "prompt": "Blood from the lungs to the left atrium. (Type 'pulmonary' or 'systemic')",
          "answer": "pulmonary",
          "feedback": "Correct, this is part of the pulmonary circuit."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Differences Between Arteries, Veins, and Capillaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Arteries carry blood away from the heart, veins carry blood towards the heart, and capillaries connect arteries to veins for exchange of substances. Their structures reflect their functions: arteries have thick walls to withstand pressure, veins have valves to prevent backflow, and capillaries have thin walls to allow exchange.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine highways (arteries) carrying fast traffic away, return roads (veins) with checkpoints (valves) to prevent wrong direction, and narrow side streets (capillaries) where goods are delivered and picked up.</p>"
    },
    "workedExample": {
      "title": "Interactive: Identify Vessel Types by Structure",
      "problem": "Match the description to the correct blood vessel type.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Thick muscular walls to handle high pressure blood flow:",
          "answer": "arteries",
          "feedback": "Correct! Arteries withstand high pressure."
        },
        {
          "id": "q2",
          "prompt": "Valves present to stop backflow of blood:",
          "answer": "veins",
          "feedback": "Correct! Veins have valves."
        },
        {
          "id": "q3",
          "prompt": "Very thin walls to allow diffusion of oxygen and nutrients:",
          "answer": "capillaries",
          "feedback": "Correct! Capillaries have thin walls for exchange."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which chamber of the heart pumps oxygenated blood to the body?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Right ventricle</span>",
            "isCorrect": false,
            "explanation": "The right ventricle pumps deoxygenated blood to the lungs, not oxygenated blood to the body."
          },
          {
            "id": "b",
            "label": "<span>Left ventricle</span>",
            "isCorrect": true,
            "explanation": "Correct! The left ventricle pumps oxygenated blood to the body."
          },
          {
            "id": "c",
            "label": "<span>Right atrium</span>",
            "isCorrect": false,
            "explanation": "The right atrium receives deoxygenated blood from the body."
          },
          {
            "id": "d",
            "label": "<span>Left atrium</span>",
            "isCorrect": false,
            "explanation": "The left atrium receives oxygenated blood from the lungs."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What prevents blood from flowing backwards in the heart?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Muscles</span>",
            "isCorrect": false,
            "explanation": "Muscles help pump blood but do not prevent backflow."
          },
          {
            "id": "b",
            "label": "<span>Valves</span>",
            "isCorrect": true,
            "explanation": "Correct. Valves prevent backflow by opening and closing as needed."
          },
          {
            "id": "c",
            "label": "<span>Arteries</span>",
            "isCorrect": false,
            "explanation": "Arteries carry blood away from the heart, they don't prevent backflow."
          },
          {
            "id": "d",
            "label": "<span>Capillaries</span>",
            "isCorrect": false,
            "explanation": "Capillaries are small vessels for exchange, not for preventing backflow."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how the structure of the heart ensures efficient circulation of blood throughout the body.</span>",
      "hint": "Remember to mention the chambers, valves, and the double circulatory system.",
      "mustHaveKeywords": ["atria", "ventricles", "valves", "pulmonary circuit", "systemic circuit", "oxygenated", "deoxygenated"],
      "optionalKeywords": ["muscular walls", "prevent backflow", "lungs", "body tissues"],
      "modelAnswer": "<span>The heart has four chambers: the right atrium and ventricle handle deoxygenated blood, while the left atrium and ventricle handle oxygenated blood. Valves between the chambers and at the exits of the ventricles prevent backflow of blood, ensuring one-way flow. The double circulatory system consists of the pulmonary circuit that moves blood from the heart to the lungs and back for oxygenation, and the systemic circuit that pumps oxygenated blood from the heart to the rest of the body and returns deoxygenated blood. This structure allows efficient separation and delivery of oxygenated and deoxygenated blood throughout the body.</span>",
      "scaffoldPrompts": [
        "Start by describing the roles of the atria and ventricles.",
        "Explain the function of heart valves in directing blood flow.",
        "Describe the pulmonary and systemic circuits and their roles."
      ]
    }
  }
};