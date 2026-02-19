window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.3 - Forces and elasticity",
  "strapline": "Understanding the work done by forces, Hooke's Law, and energy stored in elastic materials",
  "learningObjectives": [
    "Students should be able to calculate the work done by a force using the equation W = Fs and understand that work done against frictional forces is mainly transferred to thermal energy stores (Physics 6.5.3)",
    "Students should be able to describe the relationship between force and extension in elastic objects and explain Hooke's Law including the limit of proportionality (Physics 6.5.3)",
    "Students should be able to calculate the elastic potential energy stored in stretched springs and understand energy transfers in scenarios involving forces and movement (Physics 6.5.3)"
  ],
  "keyFormulas": [
    "Work done: W = F × s",
    "Hooke's Law: F = k × e",
    "Elastic potential energy: E = 0.5 × k × e²"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='150' x2='350' y2='150' stroke='#333' stroke-width='3'/><rect x='90' y='130' width='30' height='40' fill='#999' stroke='#555'/><line id='spring' x1='120' y1='150' x2='300' y2='150' stroke='#ff6600' stroke-width='4' stroke-dasharray='10,5'/><text x='50' y='170' font-family='sans-serif' font-size='14'>Fixed point</text><text x='310' y='170' font-family='sans-serif' font-size='14'>Force F applied →</text><text x='180' y='100' font-family='sans-serif' font-size='16' fill='#cc3300'><tspan>e</tspan> (extension)</text></svg>",
  "step1": {
    "title": "Concept: Work Done by a Force",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Work is done when a force causes an object to move in the direction of the force. The amount of work done <strong>W</strong> is calculated using <em>W = F × s</em> where <strong>F</strong> is the force in newtons (N) and <strong>s</strong> is the distance moved in metres (m). The unit of work is the joule (J).</p><p>If friction is involved, the work done against friction mainly transfers energy to the thermal energy store, heating the surfaces in contact.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Pushing a box across a floor requires effort. The harder you push and the further the box moves, the more work you do. If the floor is rough, some of your effort heats the floor and the box due to friction.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Work Done",
      "problem": "Calculate the work done when a force of 10 N moves an object 5 m in the direction of the force.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the force applied in newtons (N):",
          "answer": "10",
          "feedback": "Correct. The force given is 10 N."
        },
        {
          "id": "q2",
          "prompt": "Enter the distance moved in metres (m):",
          "answer": "5",
          "feedback": "Correct. The distance moved is 5 m."
        },
        {
          "id": "q3",
          "prompt": "Calculate the work done using W = F × s. What is W?",
          "answer": "50",
          "feedback": "Correct! Work done is 10 N × 5 m = 50 J."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Hooke's Law and Extension",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Hooke's Law</strong> states that the extension <em>e</em> of an elastic object is directly proportional to the applied force <em>F</em>, as long as the limit of proportionality is not exceeded. This can be written as <em>F = k × e</em>, where <em>k</em> is the spring constant representing stiffness.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a spring like a stretchy elastic band – the more you pull, the more it stretches, but only up to a point before it stops behaving predictably.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Force or Extension",
      "problem": "A spring has a spring constant of 200 N/m. Find the force needed to stretch the spring 0.1 m.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the spring constant k in N/m:",
          "answer": "200",
          "feedback": "Correct. The spring constant is 200 N/m."
        },
        {
          "id": "q2",
          "prompt": "Enter the extension e in metres:",
          "answer": "0.1",
          "feedback": "Correct. The spring is stretched by 0.1 m."
        },
        {
          "id": "q3",
          "prompt": "Calculate the force F using F = k × e:",
          "answer": "20",
          "feedback": "Correct! Force = 200 × 0.1 = 20 N."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Limit of Proportionality",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>limit of proportionality</strong> is the maximum force up to which Hooke’s Law applies. Beyond this point, the force-extension relationship becomes non-linear, and the object may suffer permanent deformation and may not return to its original length.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">When you stretch a rubber band lightly, it springs back to its shape. If you stretch it too far, it stays stretched and does not return to its original size.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying the Limit of Proportionality",
      "problem": "A spring extends by 2 cm under a force of 4 N and behaves elastically. At 6 N, it extends by 7 cm. Is the spring still obeying Hooke's Law at 6 N?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the expected extension if Hooke’s Law applies for the 6 N force (using ratio 4 N → 2 cm):",
          "answer": "3",
          "feedback": "Correct. If proportional, 6 N should cause 3 cm extension."
        },
        {
          "id": "q2",
          "prompt": "Compare this expected extension with the actual extension of 7 cm. Is the spring obeying Hooke’s Law at 6 N? (Answer 'yes' or 'no')",
          "answer": "no",
          "feedback": "Correct. The actual extension is much larger, so Hooke's Law is not obeyed."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Elastic Potential Energy Stored in Springs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When you stretch or compress a spring, energy is stored in it as <strong>elastic potential energy</strong>. The energy stored is calculated as <em>E = 0.5 × k × e²</em> where <em>k</em> is the spring constant and <em>e</em> is the extension.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Stretching a spring is like pulling back a bowstring; the more you stretch, the more energy is stored ready to be released.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Elastic Potential Energy",
      "problem": "Calculate the elastic potential energy stored in a spring with spring constant 150 N/m stretched by 0.2 m.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the spring constant k in N/m:",
          "answer": "150",
          "feedback": "Correct. k = 150 N/m."
        },
        {
          "id": "q2",
          "prompt": "Enter the extension e in metres:",
          "answer": "0.2",
          "feedback": "Correct. e = 0.2 m."
        },
        {
          "id": "q3",
          "prompt": "Calculate the elastic potential energy E = 0.5 × k × e²:",
          "answer": "3",
          "feedback": "Correct! E = 0.5 × 150 × (0.2)² = 3 J."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the unit of work done?</span>",
        "options": [
          {"id": "a", "label": "<span>Newton (N)</span>", "isCorrect": false, "explanation": "Incorrect, newton is the unit of force."},
          {"id": "b", "label": "<span>Joule (J)</span>", "isCorrect": true, "explanation": "Correct. Work done is measured in joules."},
          {"id": "c", "label": "<span>Metre (m)</span>", "isCorrect": false, "explanation": "Incorrect, metre is the unit of distance."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which equation correctly represents Hooke's Law?</span>",
        "options": [
          {"id": "a", "label": "<span>F = ke</span>", "isCorrect": true, "explanation": "Correct. Force is proportional to extension."},
          {"id": "b", "label": "<span>W = Fs</span>", "isCorrect": false, "explanation": "Incorrect, this equation is for work done."},
          {"id": "c", "label": "<span>E = 0.5ke²</span>", "isCorrect": false, "explanation": "Incorrect, this describes elastic potential energy."}
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A 0.5 m long spring is stretched by 0.1 m by a force of 20 N. Calculate (a) the spring constant of the spring, (b) the work done in stretching the spring, and (c) the elastic potential energy stored in the spring. Discuss what happens to the energy when the force is removed.</span>",
      "hint": "Use the formula F = ke for spring constant, W = Fs for work done, and E = 0.5ke² for elastic potential energy. Think about energy transfers after the force is removed.",
      "mustHaveKeywords": ["spring constant", "work done", "elastic potential energy", "energy transfers"],
      "optionalKeywords": ["limit of proportionality", "thermal energy"],
      "modelAnswer": "<span>(a) Using F = ke, k = F / e = 20 N / 0.1 m = 200 N/m.<br/>(b) Work done, W = F × s = 20 N × 0.1 m = 2 J.<br/>(c) Elastic potential energy stored, E = 0.5 × 200 × (0.1)² = 1 J.<br/>The remaining work done (1 J) is converted mainly into thermal energy due to internal friction. When the force is removed, the spring returns to its original length and releases stored elastic energy.</span>",
      "scaffoldPrompts": ["Calculate spring constant using F = ke", "Calculate work done using W = Fs", "Calculate elastic potential energy using E = 0.5ke²", "Explain energy conversion after force removal"]
    }
  }
};