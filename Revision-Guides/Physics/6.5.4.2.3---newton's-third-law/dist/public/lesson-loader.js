window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.2.3 - Newton's Third Law",
  "strapline": "Understanding how interacting objects exert equal and opposite forces on each other.",
  "learningObjectives": [
    "Students should understand that when two objects interact, they exert equal and opposite forces on each other (Newton's Third Law) (Physics 6.5.4.2.3)",
    "Students should be able to identify and explain action-reaction pairs in real-world examples (Physics 6.5.4.2.3)",
    "Students should be able to apply Newton's Third Law to solve numerical problems involving forces (Physics 6.5.4.2.3)"
  ],
  "keyFormulas": [
    "Newton's Third Law: F<sub>AB</sub> = - F<sub>BA</sub> (Forces between two interacting objects are equal in magnitude and opposite in direction)",
    "Force units: 1 Newton (N) = 1 kg·m/s²",
    "Reminder: Forces in action-reaction pairs act on different objects"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='50' y='100' width='100' height='50' fill='#90caf9' stroke='#1976d2' stroke-width='2' />\n  <rect x='250' y='100' width='100' height='50' fill='#f48fb1' stroke='#c2185b' stroke-width='2' />\n  <text x='100' y='95' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#1976d2'>Object A</text>\n  <text x='300' y='95' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#c2185b'>Object B</text>\n  <line x1='150' y1='125' x2='250' y2='125' stroke='#1976d2' stroke-width='3' marker-end='url(#arrowhead)' />\n  <line x1='250' y1='135' x2='150' y2='135' stroke='#c2185b' stroke-width='3' marker-end='url(#arrowhead)' />\n  <text x='200' y='115' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#1976d2'><em>Force F<sub>AB</sub></em></text>\n  <text x='200' y='155' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#c2185b'><em>Force F<sub>BA</sub></em></text>\n  <defs>\n    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>\n      <polygon points='0 0, 10 3.5, 0 7' fill='#333' />\n    </marker>\n  </defs>\n</svg>",
  "step1": {
    "title": "Concept: Understanding Newton's Third Law",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Newton's Third Law states that when two objects interact, they exert <strong>equal</strong> and <strong>opposite</strong> forces on each other. This means if Object A pushes on Object B, then Object B pushes back on Object A with the same force in the opposite direction.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two people pushing against each other's hands. When one pushes, they feel the same force pushing back, just in the opposite direction.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Forces",
      "problem": "Two ice skaters push off one another. Each skater feels a push. If Skater A pushes with a force of <strong>20 N</strong>, what force does Skater B feel?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the magnitude of the force Skater B feels?",
          "answer": "20",
          "feedback": "Correct. The force is equal in magnitude."
        },
        {
          "id": "q2",
          "prompt": "What is the direction of the force Skater B feels compared to the force applied by Skater A?",
          "answer": "opposite",
          "feedback": "Correct. The force is equal in magnitude but opposite in direction."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Action-Reaction Pairs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Every force has a partner force called an <strong>action-reaction pair</strong>. These pairs are equal in magnitude, opposite in direction, and act on <em>different</em> objects. They always happen simultaneously and neither force exists without the other.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">When you sit on a chair, your body pushes down on the chair (action), and the chair pushes up on your body (reaction).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Action-Reaction Pairs",
      "problem": "A book rests on a table. Identify the action-reaction force pairs.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What force does the book apply on the table?",
          "answer": "weight",
          "feedback": "Correct. The book applies its weight downward on the table."
        },
        {
          "id": "q2",
          "prompt": "What is the reaction force to the book's weight on the table?",
          "answer": "normal force",
          "feedback": "Correct. The table pushes back up with an equal force called the normal force."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Interaction Forces",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Interaction forces occur only when two objects interact. Such forces always come as pairs acting on different objects—never both on the same object. This is why forces in Newton’s Third Law are described as <em>interaction forces</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine tug-of-war: the rope pulls on both teams equally but in opposite directions. The forces are interaction forces acting on different teams.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Interaction Forces",
      "problem": "Two magnets attract each other with a force of <strong>5 N</strong>. Identify the forces acting and on which objects.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What force does Magnet A exert on Magnet B?",
          "answer": "5",
          "feedback": "Correct. Magnet A pulls Magnet B with 5 N."
        },
        {
          "id": "q2",
          "prompt": "What force does Magnet B exert on Magnet A?",
          "answer": "5",
          "feedback": "Correct. Magnet B pulls Magnet A with 5 N in the opposite direction."
        },
        {
          "id": "q3",
          "prompt": "Are these forces acting on the same object or different objects?",
          "answer": "different",
          "feedback": "Correct. The forces act on different magnets."
        }
      ]
    }
  },
  "step4": {
    "title": "Apply Newton’s Third Law Numerically: Step 1 - Identify Forces",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When solving problems, first identify the pair of interacting objects and the forces they exert on each other.</p>",
    "workedExample": {
      "title": "Worked Example: Two Boxes Push Each Other",
      "problem": "Box A pushes Box B with a force of <strong>30 N</strong>. What is the force Box B exerts on Box A?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the magnitude of the force Box B exerts on Box A?",
          "answer": "30",
          "feedback": "Correct. The forces are equal in magnitude."
        }
      ]
    }
  },
  "step5": {
    "title": "Apply Newton’s Third Law Numerically: Step 2 - Solve Problem with Inputs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's practice by inputting values step-by-step to find unknown forces using Newton's Third Law.</p>",
    "workedExample": {
      "title": "Worked Example: Interaction Force Calculation",
      "problem": "A person pushes a wall with a force. Input the magnitude of the force applied, then find the force the wall applies back.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the force the person applies on the wall (N):",
          "answer": "variable",
          "feedback": "Good, you entered a force.",
          "validation": "number > 0"
        },
        {
          "id": "q2",
          "prompt": "What force does the wall exert on the person? (N)",
          "answerFromPrev": "q1",
          "feedback": "Correct! The wall pushes back with the same magnitude force."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how Newton's Third Law applies when a person jumps off the ground. Include identification of action-reaction pairs and interaction forces.</span>",
      "hint": "Remember to describe the forces the person applies on the ground and the forces the ground applies on the person.",
      "mustHaveKeywords": ["equal and opposite forces", "action-reaction pairs", "interaction forces", "different objects"],
      "optionalKeywords": ["simultaneous", "cannot exist independently"],
      "modelAnswer": "<span>When a person jumps off the ground, they push down on the ground with a force (action). According to Newton's Third Law, the ground pushes back up with an equal and opposite force (reaction). These two forces form an action-reaction pair which are interaction forces acting on different objects (person and ground). They occur simultaneously and cannot exist independently. This reaction force from the ground propels the person upward.</span>",
      "scaffoldPrompts": [
        "Think about the force the person applies on the ground.",
        "Consider the force the ground applies back on the person.",
        "Explain why these forces form a pair according to Newton’s Third Law."
      ]
    }
  }
};