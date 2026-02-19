window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.1.1 - Scalar and vector quantities",
  "strapline": "Understanding the difference between scalar and vector quantities, and exploring contact and non-contact forces.",
  "learningObjectives": [
    "Students should distinguish between scalar quantities (which have magnitude only, such as distance, speed, mass and temperature) and vector quantities (which have both magnitude and direction, such as displacement, velocity, force and acceleration) (Physics 6.5.1.1)",
    "Students should explore the difference between contact forces (such as friction, air resistance, tension and normal contact force) and non-contact forces (such as gravitational force, electrostatic force and magnetic force) (Physics 6.5.1.1)",
    ""
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: F = m × a (Newton's Second Law)",
    "Reminder: Always state magnitude and units when describing quantities"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='20' y='20' width='360' height='260' fill='#f9f9f9' stroke='#333' stroke-width='2'/>  <text x='200' y='40' font-family='Arial' font-size='16' font-weight='bold' text-anchor='middle'>Vector Quantity Example: Displacement</text>  <line x1='50' y1='250' x2='250' y2='100' stroke='#0077cc' stroke-width='4' marker-end='url(#arrowhead)'/>  <circle cx='50' cy='250' r='5' fill='#0077cc'/>  <circle cx='250' cy='100' r='5' fill='#0077cc'/>  <text x='40' y='270' font-family='Arial' font-size='14'>Start Point</text>  <text x='260' y='90' font-family='Arial' font-size='14'>End Point</text>  <text x='150' y='160' font-family='Arial' font-size='14' fill='#0077cc'>Displacement</text>  <defs>    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#0077cc' />    </marker>  </defs></svg>",
  "step1": {
    "title": "Introduction to Scalar Quantities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Scalar quantities have <strong>magnitude only</strong>. This means they measure 'how much' but have no direction.</p><p>Examples are distance, speed, mass, temperature, and time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine measuring how much water is in a bottle. The amount (magnitude) tells you the quantity, but not any direction.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Scalars",
      "problem": "Decide if the following quantities are scalar: 5 km, 60 kg, 30°C, 20 m/s, and 15 seconds.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is <strong>5 km</strong> scalar or vector?",
          "answer": "scalar",
          "feedback": "Correct. 5 km refers to distance, which has magnitude only."
        },
        {
          "id": "q2",
          "prompt": "Is <strong>20 m/s</strong> scalar or vector?",
          "answer": "scalar",
          "feedback": "Incorrect. 20 m/s is speed, which is scalar. Velocity would be vector."
        },
        {
          "id": "q3",
          "prompt": "Is <strong>60 kg</strong> scalar or vector?",
          "answer": "scalar",
          "feedback": "Correct. Mass is scalar."
        }
      ]
    }
  },
  "step2": {
    "title": "Introduction to Vector Quantities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Vector quantities have both <strong>magnitude and direction</strong>. To fully describe them, you must state both.</p><p>Examples are displacement, velocity, force, acceleration, and momentum.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you tell someone to walk 5 km <em>north</em>, you're giving them a vector: how far and in which direction.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Vectors",
      "problem": "Identify which of the following are vector quantities: 10 m east, 50 N downwards, 15 m/s, 30°C.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is <strong>10 m east</strong> scalar or vector?",
          "answer": "vector",
          "feedback": "Correct. Displacement has direction."
        },
        {
          "id": "q2",
          "prompt": "Is <strong>30°C</strong> scalar or vector?",
          "answer": "scalar",
          "feedback": "Correct. Temperature has no direction."
        },
        {
          "id": "q3",
          "prompt": "Is <strong>50 N downwards</strong> a vector?",
          "answer": "vector",
          "feedback": "Correct. Force includes direction."
        }
      ]
    }
  },
  "step3": {
    "title": "Contact Forces Explained",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Contact forces happen when two objects physically touch. Examples:</p><ul><li><strong>Friction:</strong> force resisting motion between surfaces</li><li><strong>Air resistance:</strong> force acting opposite to an object's motion through air</li><li><strong>Tension:</strong> force in a stretched string or rope</li><li><strong>Normal contact force:</strong> force perpendicular to surface contact</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">When you push a book along a table, the friction force acts between the book and table surfaces.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Listing Contact Forces",
      "problem": "Select the contact forces from the following: gravity, tension in rope, magnet pulling, friction, electrostatic force.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is <strong>gravity</strong> a contact force?",
          "answer": "no",
          "feedback": "Correct. Gravity is a non-contact force."
        },
        {
          "id": "q2",
          "prompt": "Is <strong>tension in rope</strong> a contact force?",
          "answer": "yes",
          "feedback": "Correct. Tension requires physical contact."
        },
        {
          "id": "q3",
          "prompt": "Is <strong>electrostatic force</strong> contact or non-contact?",
          "answer": "non-contact",
          "feedback": "Correct. It acts at a distance."
        }
      ]
    }
  },
  "step4": {
    "title": "Non-Contact Forces Explained",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Non-contact forces act over a distance without physical contact between objects. Examples:</p><ul><li><strong>Gravitational force:</strong> attraction between masses</li><li><strong>Electrostatic force:</strong> attraction or repulsion due to electric charges</li><li><strong>Magnetic force:</strong> force between magnets or magnetic materials</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Magnets can pull objects without touching them because of magnetic force.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Non-Contact Forces",
      "problem": "True or false: The force pulling an apple to the ground is a contact force.",
      "questions": [
        {
          "id": "q1",
          "prompt": "True or false?",
          "answer": "false",
          "feedback": "Correct. Gravity is a non-contact force."
        }
      ]
    }
  },
  "step5": {
    "title": "Distinguishing Scalar and Vector Quantities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Remember: <strong>Scalar</strong> quantities need only magnitude; <strong>Vector</strong> quantities need magnitude and direction.</p><p>Use arrows to represent vectors, where length shows magnitude and arrowhead shows direction.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>  <text x='50' y='30' font-family='Arial' font-size='16'><strong>Scalar Examples:</strong></text>  <text x='50' y='60' font-family='Arial' font-size='14'>Mass = 5 kg</text>  <text x='50' y='90' font-family='Arial' font-size='14'>Temperature = 20°C</text>  <text x='250' y='30' font-family='Arial' font-size='16'><strong>Vector Examples:</strong></text>  <line x1='250' y1='60' x2='350' y2='60' stroke='#cc0000' stroke-width='5' marker-end='url(#arrowhead)' />  <text x='360' y='65' font-family='Arial' font-size='14'>Velocity 10 m/s East</text>  <line x1='250' y1='90' x2='320' y2='140' stroke='#cc0000' stroke-width='5' marker-end='url(#arrowhead)' />  <text x='325' y='150' font-family='Arial' font-size='14'>Force 50 N at 45°</text>  <defs>    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#cc0000' />    </marker>  </defs></svg>",
    "workedExample": {
      "title": "Interactive Example: Is Quantity Scalar or Vector?",
      "problem": "Identify if the following quantities are scalar or vector: 40 N force on a box upwards, 100 m total distance run, 15 m/s velocity south, 25°C temperature.",
      "questions": [
        {
          "id": "q1",
          "prompt": "40 N force upwards: scalar or vector?",
          "answer": "vector",
          "feedback": "Correct. Force includes direction."
        },
        {
          "id": "q2",
          "prompt": "100 m distance run: scalar or vector?",
          "answer": "scalar",
          "feedback": "Correct. Distance has magnitude only."
        },
        {
          "id": "q3",
          "prompt": "15 m/s velocity south: scalar or vector?",
          "answer": "vector",
          "feedback": "Correct. Velocity has direction."
        },
        {
          "id": "q4",
          "prompt": "25°C temperature: scalar or vector?",
          "answer": "scalar",
          "feedback": "Correct. Temperature is scalar."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain the difference between scalar and vector quantities, giving two examples of each, and describe what distinguishes contact forces from non-contact forces with examples.</span>",
      "hint": "Remember to mention magnitude and direction for vectors, and physical contact for forces.",
      "mustHaveKeywords": ["magnitude", "direction", "contact force", "non-contact force"],
      "optionalKeywords": ["examples", "friction", "gravity"],
      "modelAnswer": "<span>Scalar quantities have magnitude only, like distance and temperature. Vector quantities have both magnitude and direction, such as displacement and force. Contact forces occur when objects physically touch, examples include friction and tension. Non-contact forces act over a distance without contact, such as gravitational and magnetic forces.</span>",
      "scaffoldPrompts": ["Define scalar quantities with examples", "Define vector quantities with examples", "Explain contact forces", "Explain non-contact forces"]
    }
  }
};