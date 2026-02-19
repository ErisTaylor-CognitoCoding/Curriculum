window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.1.4 - Resultant forces",
  "strapline": "Understanding how to calculate resultant forces, recognize balanced and unbalanced forces, and calculate weight.",
  "learningObjectives": [
    "Students should be able to calculate the resultant force acting on an object when multiple forces act in a straight line (Physics 6.5.1.4)",
    "Students should be able to determine whether forces are balanced or unbalanced and predict the resulting motion of objects (Physics 6.5.1.4)",
    "Students should understand that weight is the force acting on an object due to gravity and can calculate weight using W = mg (Physics 6.5.1.4)"
  ],
  "keyFormulas": [
    "Resultant Force = sum of forces in one direction - sum of forces in opposite direction",
    "Weight (W) = mass (m) × gravitational field strength (g)",
    "Reminder: Ensure forces acting in opposite directions are subtracted to find resultant force"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>  <rect x='50' y='70' width='300' height='60' fill='#d0e6f7' stroke='#333' />  <text x='200' y='60' font-family='Arial' font-size='14' text-anchor='middle'>Object with Forces Acting</text>  <line x1='80' y1='100' x2='140' y2='100' stroke='#007acc' stroke-width='4' marker-end='url(#arrowhead)' />  <text x='110' y='90' font-family='Arial' font-size='12' text-anchor='middle'>30 N</text>  <line x1='320' y1='100' x2='260' y2='100' stroke='#cc0000' stroke-width='4' marker-end='url(#arrowhead)' />  <text x='290' y='90' font-family='Arial' font-size='12' text-anchor='middle'>15 N</text>  <defs>    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#000' />    </marker>  </defs></svg>",
  "step1": {
    "title": "Concept: Understanding Resultant Force",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiple forces act along a straight line on an object, the <strong>resultant force</strong> is the single force that has the same effect as all those forces combined. Forces in the same direction are added, and forces in opposite directions are subtracted.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing a shopping trolley. If you push it forward with 20 N and someone else pushes from behind with 5 N, the trolley experiences a 25 N force forward. But if someone pulls back with 10 N while you push forward with 20 N, the trolley only moves forward with the resultant force of 10 N (20 N - 10 N).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Resultant Force (Step 1)",
      "problem": "Calculate the resultant force when two forces act on an object in opposite directions: 25 N to the right and 15 N to the left.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the magnitude of the force acting to the right (N):",
          "answer": "25",
          "feedback": "Correct. The force to the right is 25 N."
        },
        {
          "id": "q2",
          "prompt": "Enter the magnitude of the force acting to the left (N):",
          "answer": "15",
          "feedback": "Correct. The force to the left is 15 N."
        }
      ]
    }
  },
  "step2": {
    "title": "Worked Example (cont.): Finding the Resultant Force",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the resultant force, subtract the smaller force from the larger force<b> because they act in opposite directions.</b></p>",
    "workedExample": {
      "title": "Worked Example: Calculating Resultant Force (Step 2)",
      "problem": "Using your previous answers, what is the resultant force on the object in newtons (N)?",
      "questions": [
        {
          "id": "q3",
          "prompt": "Calculate 25 N minus 15 N:",
          "answer": "10",
          "feedback": "Correct, the resultant force is 10 N in the direction of the larger force (right)."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Balanced and Unbalanced Forces",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Balanced forces</strong> occur when the forces on an object are equal in size but opposite in direction, resulting in a <em>zero resultant force</em>. The object either stays at rest or moves with constant velocity. <strong>Unbalanced forces</strong> cause a non-zero resultant force and result in acceleration or deceleration.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a tug of war where both teams pull with equal force: the rope does not move (balanced). If one team pulls harder, the rope moves towards that team (unbalanced).</p>"
    }
  },
  "step4": {
    "title": "Interactive Example: Identify Balanced or Unbalanced Forces",
    "workedExample": {
      "title": "Worked Example: Force Balance Check",
      "problem": "Two forces act on a box: 10 N east and 10 N west. Are the forces balanced or unbalanced?",
      "questions": [
        {
          "id": "q4",
          "prompt": "Are the forces balanced or unbalanced? Type 'balanced' or 'unbalanced'.",
          "answer": "balanced",
          "feedback": "Correct! The forces are balanced because they are equal and opposite."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Weight and Calculation Using W = mg",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Weight (<em>W</em>) is the force acting on an object due to gravity. It depends on the object’s mass (<em>m</em>) and the gravitational field strength (<em>g</em>), which is approximately 9.8 N/kg on Earth. The formula is <strong>W = mg</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just like how mass is how much 'stuff' an object has, weight is how strongly gravity pulls on it.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Weight Step 1",
      "problem": "Calculate the weight of an object with mass 5 kg on Earth.",
      "questions": [
        {
          "id": "q5",
          "prompt": "Enter the mass of the object in kg:",
          "answer": "5",
          "feedback": "Correct. The mass is 5 kg."
        },
        {
          "id": "q6",
          "prompt": "Enter the value of gravitational field strength (g) on Earth (N/kg):",
          "answer": "9.8",
          "feedback": "Correct. The value of g on Earth is 9.8 N/kg."
        }
      ]
    }
  },
  "step6": {
    "title": "Worked Example: Calculating Weight Step 2",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Multiply the mass by the gravitational field strength to find the weight.</p>",
    "workedExample": {
      "title": "Worked Example: Final weight calculation",
      "problem": "Calculate weight using W = mg.",
      "questions": [
        {
          "id": "q7",
          "prompt": "Calculate 5 kg × 9.8 N/kg:",
          "answer": "49",
          "feedback": "Correct! The weight is 49 N."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq1",
        "question": "<span>Which of the following best describes resultant force?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The total force from combining all forces acting on an object in a straight line.</span>",
            "isCorrect": true,
            "explanation": "Correct! Resultant force combines all acting forces into a single force."
          },
          {
            "id": "b",
            "label": "<span>The force that only opposes motion.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Resultant force includes all forces, not just opposition."
          }
        ]
      },
      {
        "id": "mcq2",
        "question": "<span>What happens when forces on an object are balanced?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The object accelerates.</span>",
            "isCorrect": false,
            "explanation": "Wrong. Balanced forces produce zero acceleration."
          },
          {
            "id": "b",
            "label": "<span>The object remains at rest or moves at constant velocity.</span>",
            "isCorrect": true,
            "explanation": "Correct! Balanced forces mean no change in motion."
          }
        ]
      },
      {
        "id": "mcq3",
        "question": "<span>What is the weight of an object with mass 10 kg on Earth?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>98 N</span>",
            "isCorrect": true,
            "explanation": "Correct. Weight = 10 kg × 9.8 N/kg = 98 N."
          },
          {
            "id": "b",
            "label": "<span>10 N</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 10 N is too low for 10 kg on Earth."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> forces cause an object to accelerate.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "balanced",
                "label": "balanced",
                "isCorrect": false,
                "feedback": "Incorrect. Balanced forces do not cause acceleration."
              },
              {
                "value": "unbalanced",
                "label": "unbalanced",
                "isCorrect": true,
                "feedback": "Correct! Unbalanced forces cause acceleration."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze2",
        "sentence": "<span>Weight is calculated using the formula <strong>W = _____ × _____</strong>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "mass and gravity",
                "label": "mass and gravitational field strength",
                "isCorrect": true,
                "feedback": "Correct! W = m × g"
              },
              {
                "value": "mass and volume",
                "label": "mass and volume",
                "isCorrect": false,
                "feedback": "Incorrect. Weight depends on mass and gravitational field strength, not volume."
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A box is pushed to the right with a force of 40 N and to the left with a force of 25 N. The box has a mass of 3 kg.</span><br><span>Calculate the resultant force and state whether the forces are balanced or unbalanced. Then calculate the weight of the box. Explain the effect these forces will have on the motion of the box.</span>",
      "hint": "Remember to subtract forces acting in opposite directions to find resultant force, then use W = mg to find weight. Consider whether resultant force is zero or not.",
      "mustHaveKeywords": ["resultant force", "balanced", "unbalanced", "weight", "W = mg", "motion", "acceleration"],
      "optionalKeywords": ["direction", "Newton's laws"],
      "modelAnswer": "<span>The resultant force is 40 N - 25 N = 15 N to the right, so the forces are unbalanced because the resultant force is not zero. The weight is W = 3 kg × 9.8 N/kg = 29.4 N. Because there is an unbalanced force of 15 N, the box will accelerate to the right.</span>",
      "scaffoldPrompts": [
        "First calculate the resultant force by combining the two forces.",
        "Next, determine if the resultant force is zero to decide if forces are balanced.",
        "Then calculate the weight using mass and gravitational field strength.",
        "Finally, explain how the resultant force affects the box’s motion."
      ]
    }
  }
};