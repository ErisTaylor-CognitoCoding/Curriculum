window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.2.1 - Newton's First Law",
  "strapline": "Understanding how objects behave when forces act—or don’t act—on them",
  "learningObjectives": [
    "Students should understand that objects remain at rest or continue moving at constant velocity unless acted upon by a resultant force (Physics 6.5.4.2.1)",
    "Students should understand the concept of inertia as an object's tendency to resist changes in motion (Physics 6.5.4.2.1)"
  ],
  "keyFormulas": [
    "Resultant Force, F = Σ forces acting on an object",
    "Newton's First Law: If F = 0, velocity is constant",
    "Inertia: Property, no direct formula but related to mass (m)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>  <rect x='20' y='70' width='60' height='60' fill='#a2d2ff' stroke='#003049' stroke-width='2'/>  <text x='50' y='65' font-family='Arial' font-size='14' text-anchor='middle' fill='#003049'>Box</text>  <line x1='80' y1='100' x2='150' y2='100' stroke='#d62828' stroke-width='4' marker-end='url(#arrowhead)'/>  <text x='115' y='90' font-family='Arial' font-size='12' fill='#d62828'>F (force)</text>  <defs>    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#d62828' />    </marker>  </defs></svg>",
  "step1": {
    "title": "Introduction to Newton's First Law",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Newton's First Law states that an object will remain at rest or continue moving at a constant velocity unless acted upon by a resultant force. This means if no forces change an object's motion, it keeps doing what it was already doing.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a hockey puck sliding on ice. If there were no friction, it would keep sliding forever at the same speed and direction. The hockey puck only changes its motion when a force, like a player's stick or the friction of the ice, acts on it.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Motion Changes",
      "problem": "Consider a ball at rest on a flat surface. What happens if no forces act on the ball?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Will the ball start moving by itself? (Answer 'yes' or 'no')",
          "answer": "no",
          "feedback": "Correct. The ball will not start moving on its own without a force."
        },
        {
          "id": "q2",
          "prompt": "If a force pushes the ball, what will happen?",
          "answer": "it will move",
          "feedback": "Well done! A force will cause the ball to move."
        },
        {
          "id": "q3",
          "prompt": "If the ball is rolling at constant speed and no forces act, what happens to its speed?",
          "answer": "it stays the same",
          "feedback": "Exactly. The speed remains constant with no unbalanced forces."
        }
      ]
    }
  },
  "step2": {
    "title": "Key Concept: What is Inertia?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Inertia is the property of an object to resist changes in its motion. The greater the mass of the object, the greater its inertia—meaning it is harder to start moving or stop it.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Pushing an empty shopping trolley is easy, but pushing a full trolley is much harder because the full one has more mass and therefore more inertia.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing Inertia",
      "problem": "Two boxes, A and B, sit stationary. Box A is light and Box B is heavy. Which one has greater inertia?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which box is harder to start moving, A or B?",
          "answer": "B",
          "feedback": "Correct! Box B has greater inertia because it has more mass."
        },
        {
          "id": "q2",
          "prompt": "If equal forces push both boxes with same force, which moves slower initially?",
          "answer": "B",
          "feedback": "Right. The heavier box accelerates less due to higher inertia."
        }
      ]
    }
  },
  "step3": {
    "title": "Resultant Force: Unbalanced vs Balanced Forces",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The resultant force is the overall force acting on an object after combining all individual forces. If the resultant force is zero, forces are balanced and the motion doesn’t change. If not zero, the object accelerates or decelerates.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'>  <rect x='150' y='60' width='100' height='40' fill='#90be6d' stroke='#405d27' stroke-width='2'/>  <line x1='150' y1='80' x2='110' y2='80' stroke='#ef476f' stroke-width='4' marker-end='url(#arrowLeft)'/>  <line x1='250' y1='80' x2='290' y2='80' stroke='#118ab2' stroke-width='4' marker-end='url(#arrowRight)'/>  <text x='130' y='55' font-family='Arial' font-size='12'>5 N</text>  <text x='270' y='55' font-family='Arial' font-size='12'>5 N</text>  <text x='200' y='120' font-family='Arial' font-size='14' fill='#333' text-anchor='middle'>Box with balanced forces</text>  <defs>    <marker id='arrowRight' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#118ab2' />    </marker>    <marker id='arrowLeft' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'>      <polygon points='10 0, 0 3.5, 10 7' fill='#ef476f' />    </marker>  </defs></svg>"
  },
  "step4": {
    "title": "Interactive Example: Calculating Resultant Force",
    "explanation": "<p>Calculate the resultant force when multiple forces act on an object in opposite directions.</p>",
    "workedExample": {
      "title": "Worked Example: Forces on a Box",
      "problem": "A box has a force of 10 N pushing to the right and a force of 4 N pushing to the left. What is the resultant force and direction?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the magnitude of the force to the right (in N):",
          "answer": "10",
          "feedback": "Correct. The force to the right is 10 N."
        },
        {
          "id": "q2",
          "prompt": "Enter the magnitude of the force to the left (in N):",
          "answer": "4",
          "feedback": "Correct. The force to the left is 4 N."
        },
        {
          "id": "q3",
          "prompt": "Calculate the difference between the two forces to find the resultant force magnitude:",
          "answer": "6",
          "feedback": "Correct. 10 N - 4 N = 6 N."
        },
        {
          "id": "q4",
          "prompt": "What is the direction of the resultant force? (right or left)",
          "answer": "right",
          "feedback": "Correct. The larger force is towards the right."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying Newton's First Law in Daily Life",
    "explanation": "<p>Newton's First Law explains many everyday observations, like why a passenger lurches forward when a car suddenly stops—a result of inertia.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p>When a car suddenly brakes, your body tends to keep moving forward because of inertia. Seatbelts provide the force needed to change your motion safely.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Inertia and Safety",
      "problem": "Why do seatbelts prevent injury during sudden stops?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What property of your body causes you to keep moving forward when the car stops?",
          "answer": "inertia",
          "feedback": "Correct! Your body's inertia makes you want to keep moving."
        },
        {
          "id": "q2",
          "prompt": "What does the seatbelt do in this situation?",
          "answer": "exerts a force to stop forward motion",
          "feedback": "Yes! It applies a force to change your motion and keep you safe."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain Newton's First Law and the concept of inertia in the context of an object moving in space with no forces acting on it.</span>",
      "hint": "Remember to describe motion when forces are balanced or zero and relate inertia to mass.",
      "mustHaveKeywords": ["resultant force", "constant velocity", "inertia", "mass", "resist changes"],
      "optionalKeywords": ["space", "no friction"],
      "modelAnswer": "<span>Newton's First Law states that if the resultant force on an object is zero, it will maintain its state of rest or move at constant velocity. In space, where there are no forces like friction or air resistance, an object will continue moving indefinitely at the same speed and direction. This happens because of inertia, which is the property of an object to resist any change to its motion. The greater the mass of the object, the greater its inertia, meaning it is harder to start, stop, or change its motion.</span>",
      "scaffoldPrompts": [
        "Start by defining Newton's First Law in terms of resultant force and motion.",
        "Describe what happens to an object in space where no forces act.",
        "Explain the meaning of inertia and how it relates to mass.",
        "Connect inertia with why the object's motion doesn't change."
      ]
    }
  }
};