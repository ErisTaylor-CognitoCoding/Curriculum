window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.2 - Work done and energy transfer",
  "strapline": "Understanding how work is done by forces, how energy transfers, and the behaviour of elastic objects under force.",
  "learningObjectives": [
    "Students should understand that work is done when a force causes an object to move through a distance and be able to calculate work done using W = Fs (Physics 6.5.2)",
    "Students should understand that work done against frictional forces is mainly transferred to thermal energy stores (Physics 6.5.2)",
    "Students should understand the relationship between force and extension in elastic objects, including Hooke's Law, the limit of proportionality, and be able to calculate elastic potential energy stored in stretched springs (Physics 6.5.2)"
  ],
  "keyFormulas": [
    "Work done: W = Fs (Work done (J) = Force (N) × Distance (m))",
    "Hooke's Law: F = ke (Force (N) = Spring constant (N/m) × Extension (m))",
    "Elastic potential energy: E = 0.5 × k × e² (Energy (J) = 0.5 × Spring constant × Extension squared)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='20' y='140' width='150' height='60' fill='#9ecae1' stroke='#31708f' stroke-width='2'/>\n  <line x1='170' y1='170' x2='300' y2='170' stroke='#d62728' stroke-width='4'/>\n  <line x1='300' y1='170' x2='350' y2='170' stroke='#2ca02c' stroke-width='3' stroke-dasharray='10,5'/>\n  <circle cx='350' cy='170' r='15' fill='#ff7f0e'/>\n  <text x='25' y='130' font-family='Arial' font-size='14' fill='#055a8c'>Box (Object)</text>\n  <text x='220' y='160' font-family='Arial' font-size='14' fill='#d62728'>Force: F (N)</text>\n  <text x='330' y='160' font-family='Arial' font-size='14' fill='#2ca02c'>Distance: s (m)</text>\n  <text x='25' y='230' font-family='Arial' font-size='16' fill='#000' font-weight='bold'>Work done = Force × Distance</text>\n</svg>",
  "step1": {
    "title": "Concept: What is Work Done?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Work is done when a force causes an object to move through a distance. It quantifies the amount of energy transferred by the force acting over that distance.</p><p class=\"text-sm leading-6 text-muted-foreground\">The formula to calculate work done is <strong>W = Fs</strong>, where <em>W</em> is work done in joules (J), <em>F</em> is force in newtons (N), and <em>s</em> is distance in metres (m).</p><p>One joule of work is done when a force of one newton moves an object by one metre in the direction of the force.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing a shopping trolley in a supermarket. If you push with a force and make it move, you are doing work on the trolley. If the trolley doesn’t move, no work is done, no matter how hard you push.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Work Done",
      "problem": "Calculate the work done when a force of 15 N moves an object 8 m along a flat surface.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the magnitude of the force applied? (in N)",
          "answer": "15",
          "feedback": "Correct. The force applied is 15 N."
        },
        {
          "id": "q2",
          "prompt": "What distance does the object move? (in m)",
          "answer": "8",
          "feedback": "Correct. The object moves 8 metres."
        },
        {
          "id": "q3",
          "prompt": "Calculate the work done using W = Fs (write only the numerical value).",
          "answer": "120",
          "feedback": "Well done! Work done = 15 N × 8 m = 120 J."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Energy Transfer through Friction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When work is done against frictional forces, the energy is mainly transferred into thermal energy stores. The friction force resists movement and causes heating of the surfaces involved.</p><p>This is why rubbing your hands together makes them warm, and why brakes get hot when stopping a vehicle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of sliding a book across a table. The friction between the book and table converts some of your pushing energy into heat, which you might feel if you touch the book or the surface after sliding it.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Friction and Thermal Energy",
      "problem": "A cyclist applies a frictional force of 20 N to stop moving. The bike moves 10 m before it stops. How much energy is transferred to thermal energy?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the frictional force applied? (N)",
          "answer": "20",
          "feedback": "Correct, frictional force is 20 N."
        },
        {
          "id": "q2",
          "prompt": "What distance does the bike move while stopping? (m)",
          "answer": "10",
          "feedback": "Correct, the bike moves 10 m."
        },
        {
          "id": "q3",
          "prompt": "Calculate the work done against friction and thus the thermal energy transferred (numerical value only).",
          "answer": "200",
          "feedback": "Correct! The energy transferred to thermal energy stores is 200 J."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Hooke’s Law and Elastic Extension",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Hooke’s Law states that the extension of an elastic object, such as a spring, is directly proportional to the force applied, provided the limit of proportionality is not exceeded.</p><p>The law can be written as <strong>F = ke</strong>, where <em>F</em> is force in newtons, <em>k</em> is the spring constant in newtons per metre (N/m), and <em>e</em> is extension in metres.</p><p>The limit of proportionality is the point beyond which Hooke’s Law no longer applies and the spring will not return to its original length if the force is removed.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a spring in a pen or a slinky toy that stretches smoothly with a gentle pull. If pulled too far, it won’t go back to its original shape — it has passed its limit of proportionality.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Force using Hooke's Law",
      "problem": "A spring has a spring constant of 200 N/m. Calculate the force needed to stretch it by 0.05 m.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the spring constant (k)? (N/m)",
          "answer": "200",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "What is the extension (e)? (m)",
          "answer": "0.05",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate the force using F = ke (numerical value only).",
          "answer": "10",
          "feedback": "Correct! Force = 200 N/m × 0.05 m = 10 N."
        }
      ]
    }
  },
  "step4": {
    "title": "Calculating Elastic Potential Energy",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The elastic potential energy stored in a stretched spring is given by the formula <strong>E = 0.5 × k × e²</strong>, where <em>E</em> is energy in joules, <em>k</em> is the spring constant in N/m, and <em>e</em> is the extension in metres.</p><p>This energy is stored as potential energy and can do work when the spring returns to its natural length.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine stretching a bowstring: the energy you put into pulling the string back is stored as elastic potential energy until released.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Elastic Potential Energy",
      "problem": "A spring has a spring constant of 300 N/m and is stretched by 0.1 m. Calculate the energy stored.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the spring constant (k)? (N/m)",
          "answer": "300",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "What is the extension (e)? (m)",
          "answer": "0.1",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate the elastic potential energy using E = 0.5 × k × e² (numerical value only).",
          "answer": "1.5",
          "feedback": "Excellent! E = 0.5 × 300 × (0.1)² = 1.5 J."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which formula correctly calculates work done when a force moves an object?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>W = Fs</span>",
            "isCorrect": true,
            "explanation": "Correct. Work done is force multiplied by distance moved."
          },
          {
            "id": "b",
            "label": "<span>W = F/s</span>",
            "isCorrect": false,
            "explanation": "Incorrect, work done is not force divided by distance."
          },
          {
            "id": "c",
            "label": "<span>W = F + s</span>",
            "isCorrect": false,
            "explanation": "Incorrect, work done is a product, not a sum."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>When work is done against friction, energy is mainly transferred to:</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Gravitational energy stores</span>",
            "isCorrect": false,
            "explanation": "Incorrect, friction converts energy mainly into thermal energy."
          },
          {
            "id": "b",
            "label": "<span>Thermal energy stores</span>",
            "isCorrect": true,
            "explanation": "Correct. Friction causes heating."
          },
          {
            "id": "c",
            "label": "<span>Kinetic energy stores</span>",
            "isCorrect": false,
            "explanation": "Incorrect, friction reduces kinetic energy by converting it to heat."
          }
        ]
      },
      {
        "id": "mcq-3",
        "question": "<span>Hooke’s Law is no longer valid when:</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The limit of proportionality is exceeded</span>",
            "isCorrect": true,
            "explanation": "Correct, beyond this limit the extension is not proportional to force."
          },
          {
            "id": "b",
            "label": "<span>The force is less than zero</span>",
            "isCorrect": false,
            "explanation": "Incorrect, negative force can simply mean force in opposite direction."
          },
          {
            "id": "c",
            "label": "<span>The spring constant changes</span>",
            "isCorrect": false,
            "explanation": "Incorrect, the spring constant is fixed for a spring within elastic limits."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Describe how work done by a force is related to the energy transferred, including an explanation of how friction affects this process. Include how Hooke's Law applies to elastic springs and describe the energy stored.</span>",
      "hint": "Remember to explain the formula for work done, how friction converts energy to heat, and how force and extension relate in springs.",
      "mustHaveKeywords": ["work done", "energy transferred", "friction", "thermal energy", "Hooke's Law", "elastic potential energy"],
      "optionalKeywords": ["limit of proportionality", "spring constant"],
      "modelAnswer": "<span>Work done occurs when a force causes an object to move a distance, calculated by W = Fs. The energy transferred by the work done changes the energy in the system; for example, when overcoming friction, this energy is transferred mainly to thermal energy stores, causing heating. Hooke's Law states that for elastic springs, the force applied is proportional to extension (F = ke), provided the limit of proportionality is not exceeded. The work done in stretching a spring is stored as elastic potential energy, calculated using E = 0.5 × k × e².</span>",
      "scaffoldPrompts": [
        "Start by defining work done and its formula",
        "Explain energy transfer when friction is present",
        "Describe Hooke's Law and the relationship of force and extension",
        "Explain how energy is stored in a stretched spring"
      ]
    }
  }
};