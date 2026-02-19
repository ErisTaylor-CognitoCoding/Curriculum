window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.2.2 - Newton's Second Law",
  "strapline": "Understanding how force, mass, and acceleration are related through Newton's Second Law.",
  "learningObjectives": [
    "Students should understand that the acceleration of an object is directly proportional to the resultant force acting on it and inversely proportional to its mass (Physics 6.5.4.2.2)",
    "Students should be able to apply Newton's Second Law using the equation F = ma to solve numerical problems (Physics 6.5.4.2.2)",
    "Students should be able to explain real-world examples of forces and motion using Newton's Second Law (Physics 6.5.4.2.2)"
  ],
  "keyFormulas": [
    "F = ma (Newton's Second Law: Force equals mass times acceleration)",
    "a ∝ F (Acceleration is directly proportional to force when mass is constant)",
    "a ∝ 1/m (Acceleration is inversely proportional to mass when force is constant)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Forces and acceleration diagram'><rect x='20' y='100' width='150' height='50' fill='#a2d2ff' stroke='#000'/><text x='95' y='130' text-anchor='middle' font-family='sans-serif' font-size='16' fill='#000'>Mass (m)</text><line x1='170' y1='125' x2='230' y2='125' stroke='#000' stroke-width='2' marker-end='url(#arrow)'/><text x='200' y='115' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#000'>Force (F)</text><circle cx='280' cy='125' r='25' fill='#ffafcc' stroke='#000'/><text x='280' y='130' text-anchor='middle' font-family='sans-serif' font-size='20' fill='#000'>a</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L0,6 L9,3 z' fill='#000'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Newton's Second Law Explained",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Newton's Second Law states that the acceleration (<em>a</em>) of an object is directly proportional to the resultant force (<strong>F</strong>) acting on it and inversely proportional to its mass (<strong>m</strong>). This is expressed in the formula <strong>F = ma</strong>, where force is measured in newtons (N), mass in kilograms (kg), and acceleration in metres per second squared (m/s<sup>2</sup>).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing a shopping trolley: the harder you push (greater force), the faster it speeds up (greater acceleration). But if the trolley is full (more mass), it accelerates more slowly except if you push harder.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding F = ma",
      "problem": "An object has a mass of 4 kg and experiences a force of 20 N. What is its acceleration?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the mass (m) of the object in kg:",
          "answer": "4",
          "feedback": "Correct. The mass of the object is 4 kg."
        },
        {
          "id": "q2",
          "prompt": "Enter the force (F) applied in newtons (N):",
          "answer": "20",
          "feedback": "Correct. The force applied is 20 N."
        },
        {
          "id": "q3",
          "prompt": "Use F = ma to calculate the acceleration (a). Recall a = F ÷ m. What is the acceleration in m/s²?",
          "answer": "5",
          "feedback": "Correct. The acceleration is 20 ÷ 4 = 5 m/s²."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Direct Proportionality Between Force and Acceleration",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When the mass remains constant, increasing the force on an object increases its acceleration proportionally. For example, if the force doubles, the acceleration doubles too.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of pushing a sled with a fixed weight. If you push twice as hard, it accelerates twice as fast.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Doubling the Force",
      "problem": "An object has a mass of 3 kg and is pushed with a force of 6 N. Then the force doubles to 12 N. Calculate the acceleration before and after doubling the force.",
      "questions": [
        {
          "id": "q4",
          "prompt": "Initial force (N):",
          "answer": "6",
          "feedback": "Correct. The initial force is 6 N."
        },
        {
          "id": "q5",
          "prompt": "Mass of the object (kg):",
          "answer": "3",
          "feedback": "Correct. Mass is 3 kg."
        },
        {
          "id": "q6",
          "prompt": "Calculate initial acceleration (a = F/m) in m/s²:",
          "answer": "2",
          "feedback": "Correct. Initial acceleration is 6 ÷ 3 = 2 m/s²."
        },
        {
          "id": "q7",
          "prompt": "New force (N) after doubling:",
          "answer": "12",
          "feedback": "Correct. The new force is 12 N."
        },
        {
          "id": "q8",
          "prompt": "Calculate new acceleration (a = F/m) in m/s²:",
          "answer": "4",
          "feedback": "Correct. New acceleration is 12 ÷ 3 = 4 m/s²."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='80' width='120' height='40' fill='#ffd6a5' stroke='#333'/><text x='90' y='105' text-anchor='middle' font-family='sans-serif' font-size='14'>Mass = 3 kg</text><line x1='150' y1='100' x2='220' y2='100' stroke='#333' stroke-width='3' marker-end='url(#arrow)'/><text x='185' y='90' text-anchor='middle' font-family='sans-serif' font-size='14'>Force = 6 N</text><line x1='220' y1='100' x2='280' y2='50' stroke='#e07a5f' stroke-width='5' marker-end='url(#arrow)'/><text x='250' y='40' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#e07a5f'>Force doubled = 12 N</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto'><path d='M0,0 L0,6 L9,3 Z' fill='#333'/></marker></defs></svg>"
    }
  },
  "step3": {
    "title": "Concept: Inverse Proportionality Between Mass and Acceleration",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If the force remains constant, increasing the mass of an object decreases its acceleration. Specifically, doubling the mass halves the acceleration.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Pushing an empty wheelbarrow is easier and it accelerates quickly. But if the wheelbarrow is loaded with bricks (more mass), it accelerates slower for the same push.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Doubling the Mass",
      "problem": "A force of 15 N acts on an object. First, the object has a mass of 3 kg. Then the mass doubles to 6 kg. Calculate acceleration before and after mass change.",
      "questions": [
        {
          "id": "q9",
          "prompt": "Force applied (N):",
          "answer": "15",
          "feedback": "Correct. Force is constant at 15 N."
        },
        {
          "id": "q10",
          "prompt": "Initial mass (kg):",
          "answer": "3",
          "feedback": "Correct. Initial mass is 3 kg."
        },
        {
          "id": "q11",
          "prompt": "Calculate initial acceleration in m/s²:",
          "answer": "5",
          "feedback": "Correct. Acceleration = 15 ÷ 3 = 5 m/s²."
        },
        {
          "id": "q12",
          "prompt": "New mass after doubling (kg):",
          "answer": "6",
          "feedback": "Correct. New mass is 6 kg."
        },
        {
          "id": "q13",
          "prompt": "Calculate new acceleration in m/s²:",
          "answer": "2.5",
          "feedback": "Correct. Acceleration = 15 ÷ 6 = 2.5 m/s²."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='80' width='120' height='40' fill='#b5ead7' stroke='#333'/><text x='100' y='105' text-anchor='middle' font-family='sans-serif' font-size='14'>Mass = 3 kg</text><line x1='160' y1='100' x2='220' y2='100' stroke='#333' stroke-width='4' marker-end='url(#arrow)'/><text x='190' y='85' text-anchor='middle' font-family='sans-serif' font-size='14'>Force = 15 N</text><rect x='260' y='80' width='140' height='40' fill='#ffcbf2' stroke='#333'/><text x='330' y='105' text-anchor='middle' font-family='sans-serif' font-size='14'>Mass doubled = 6 kg</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto'><path d='M0,0 L0,6 L9,3 Z' fill='#333'/></marker></defs></svg>"
    }
  },
  "step4": {
    "title": "Apply Newton's Second Law: Breaking Down F = ma",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To solve problems using F = ma, identify known quantities and convert units if required. Rearrange the equation to find the missing value: <strong>a = F ÷ m</strong>, <strong>m = F ÷ a</strong>, or <strong>F = ma</strong>.</p>",
    "workedExample": {
      "title": "Interactive Calculation with Unknown Force",
      "problem": "An object accelerates at 3 m/s² and has a mass of 10 kg. What force causes this acceleration?",
      "questions": [
        {
          "id": "q14",
          "prompt": "Enter mass (kg):",
          "answer": "10",
          "feedback": "Correct. Mass is 10 kg."
        },
        {
          "id": "q15",
          "prompt": "Enter acceleration (m/s²):",
          "answer": "3",
          "feedback": "Correct. Acceleration is 3 m/s²."
        },
        {
          "id": "q16",
          "prompt": "Calculate force F (N) using F = ma:",
          "answer": "30",
          "feedback": "Correct. Force = 10 × 3 = 30 N."
        }
      ]
    }
  },
  "step5": {
    "title": "Real World Example: Car Acceleration",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a car accelerates, the engine applies a force through the wheels to the road. The car's acceleration depends on this force and the car’s mass.</p>",
    "analogy": {
      "title": "Real Life Example",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">A sports car (lower mass and strong engine force) accelerates faster than a large truck (large mass with similar force applied).</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Predicting Car Acceleration",
      "problem": "A truck applies a force of 4000 N and has a mass of 2000 kg. Calculate its acceleration.",
      "questions": [
        {
          "id": "q17",
          "prompt": "Enter the force applied (N):",
          "answer": "4000",
          "feedback": "Correct. Force is 4000 N."
        },
        {
          "id": "q18",
          "prompt": "Enter the mass of the truck (kg):",
          "answer": "2000",
          "feedback": "Correct. Mass is 2000 kg."
        },
        {
          "id": "q19",
          "prompt": "Calculate the acceleration (m/s²):",
          "answer": "2",
          "feedback": "Correct. a = 4000 ÷ 2000 = 2 m/s²."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='80' width='140' height='50' fill='#d0f4de' stroke='#000'/><text x='100' y='110' font-family='sans-serif' font-size='14' text-anchor='middle'>Truck mass = 2000 kg</text><line x1='170' y1='105' x2='250' y2='105' stroke='#0b3c49' stroke-width='4' marker-end='url(#arrow)'/><text x='210' y='90' font-family='sans-serif' font-size='14' text-anchor='middle'>Force applied = 4000 N</text><circle cx='310' cy='105' r='20' fill='#a5d8ff' stroke='#000'/><text x='310' y='110' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#000'>a</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto'><path d='M0,0 L0,6 L9,3 Z' fill='#0b3c49'/></marker></defs></svg>"
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A force of 50 N is applied to push a box of mass 10 kg along a frictionless surface. Calculate the acceleration of the box. Then explain how the acceleration would change if (a) the force is doubled, and (b) the mass is doubled, using Newton's Second Law.</span>",
      "hint": "Remember to use the formula F = ma, and consider the relationships of direct and inverse proportionality.",
      "mustHaveKeywords": ["force", "mass", "acceleration", "direct proportionality", "inverse proportionality", "Newton's Second Law", "F = ma"],
      "optionalKeywords": ["frictionless", "numerical calculation", "units"],
      "modelAnswer": "<span>The acceleration is calculated by rearranging Newton's Second Law: a = F ÷ m = 50 N ÷ 10 kg = 5 m/s<sup>2</sup>. (a) If the force doubles to 100 N and mass stays the same, acceleration doubles to 10 m/s<sup>2</sup> due to direct proportionality between force and acceleration. (b) If the mass doubles to 20 kg with force constant at 50 N, acceleration halves to 2.5 m/s<sup>2</sup> because acceleration is inversely proportional to mass.</span>",
      "scaffoldPrompts": [
        "First calculate initial acceleration using a = F ÷ m.",
        "Think how doubling force affects acceleration if mass stays constant.",
        "Think how doubling mass affects acceleration if force stays constant.",
        "Use direct and inverse proportionality concepts to explain."
      ]
    }
  }
};