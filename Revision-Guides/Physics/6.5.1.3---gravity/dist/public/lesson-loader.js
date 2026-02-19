window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.1.3 - Gravity",
  "strapline": "Understanding gravity as a universal force affecting masses and how it determines weight on different planets.",
  "learningObjectives": [
    "Students should understand that gravity is a force that acts between all masses, with the force depending on the mass of the objects and the distance between them (Physics 6.5.1.3)",
    "Students should understand that gravitational field strength varies on different planets and affects the weight of objects, while mass remains constant (Physics 6.5.1.3)",
    "Students should be able to calculate weight using the equation: weight = mass \u00d7 gravitational field strength (W = mg) (Physics 6.5.1.3)"
  ],
  "keyFormulas": [
    "Weight = mass \u00d7 gravitational field strength (W = mg)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <circle cx='100' cy='150' r='30' fill='#6baed6' stroke='#2171b5' stroke-width='3' />  <circle cx='300' cy='150' r='60' fill='#fd8d3c' stroke='#e6550d' stroke-width='3' />  <line x1='130' y1='150' x2='240' y2='150' stroke='#636363' stroke-width='2' marker-end='url(#arrowhead)' />  <text x='80' y='190' font-family='sans-serif' font-size='14' fill='#2171b5'>Mass 1</text>  <text x='280' y='220' font-family='sans-serif' font-size='14' fill='#e6550d'>Mass 2</text>  <text x='175' y='140' font-family='sans-serif' font-size='14' fill='#636363'>Distance (r)</text>  <defs>    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#636363' />    </marker>  </defs></svg>",
  "step1": {
    "title": "Concept: What is Gravity?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Gravity is a non-contact force that acts between all objects with mass. The strength of this force depends on the masses involved and the distance between them. On Earth, this force pulls objects towards the ground, giving them weight.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two magnets pulling each other: the bigger and closer they are, the stronger the pull. Gravity works in a similar way but acts between all masses, even though we don't see it.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying gravitational force factors",
      "problem": "Consider two objects: one small ball and one large ball some distance apart. How do mass and distance affect the gravitational force?",
      "questions": [
        {
          "id": "q1",
          "prompt": "If the large ball's mass increases, does the gravitational force between the balls increase or decrease?",
          "answer": "increase",
          "feedback": "Correct. Increasing mass increases gravitational force."
        },
        {
          "id": "q2",
          "prompt": "If the distance between the balls doubles, does the gravitational force increase, decrease, or stay the same?",
          "answer": "decrease",
          "feedback": "Correct. Increasing distance decreases gravitational force."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Gravitational Field Strength",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Gravitational field strength (<em>g</em>) is the force experienced per unit mass at a point in space. It varies depending on the planet or moon and is measured in newtons per kilogram (N/kg). On Earth, <em>g</em> \u2248 9.8 N/kg, often rounded to 10 N/kg for simplicity.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of <em>g</em> as the 'pulling power' of a planet. Larger planets like Jupiter have stronger 'pull,' while smaller ones like the Moon have weaker 'pull.'</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing gravitational field strengths",
      "problem": "Earth's <em>g</em> is about 9.8 N/kg, and Mars's <em>g</em> is about 3.7 N/kg. Which planet will make an object weigh less, and why?",
      "questions": [
        {
          "id": "q3",
          "prompt": "Which gravitational field strength is smaller, Earth or Mars?",
          "answer": "Mars",
          "feedback": "Correct. Mars has a smaller gravitational field strength."
        },
        {
          "id": "q4",
          "prompt": "Will an object weigh less or more on Mars compared to Earth?",
          "answer": "less",
          "feedback": "Correct. Weight is less on Mars due to lower gravitational field strength."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Weight vs Mass",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Mass</strong> is the amount of matter in an object and remains constant anywhere in the universe. <strong>Weight</strong> is the force exerted on that mass by gravity and depends on the gravitational field strength. Weight changes with location; mass does not.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of mass as how much 'stuff' you have, like the amount of sugar in a bag, while weight is like the force trying to pull that sugar down a slope; the slope’s steepness varies.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Distinguishing mass and weight",
      "problem": "A person has a mass of 60 kg. On Earth, what is their weight? And will their mass change on the Moon?",
      "questions": [
        {
          "id": "q5",
          "prompt": "Calculate the weight on Earth using g = 9.8 N/kg.",
          "answer": "588",
          "feedback": "Correct. Weight = 60 kg \u00d7 9.8 N/kg = 588 N."
        },
        {
          "id": "q6",
          "prompt": "Does the person’s mass change on the Moon?",
          "answer": "no",
          "feedback": "Correct. Mass is constant regardless of location."
        }
      ]
    }
  },
  "step4": {
    "title": "Calculation: Calculating Weight Using W = mg",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Weight (W) is calculated by multiplying mass (<em>m</em>) by gravitational field strength (<em>g</em>): <strong>W = mg</strong>. Weight is measured in newtons (N), mass in kilograms (kg), and <em>g</em> in newtons per kilogram (N/kg).</p>",
    "workedExample": {
      "title": "Interactive Worked Example: Calculate Weight",
      "problem": "Calculate the weight of an object on Earth with a mass of 15 kg.",
      "questions": [
        {
          "id": "q7",
          "prompt": "Enter the mass of the object (kg):",
          "answer": "15",
          "feedback": "Correct."
        },
        {
          "id": "q8",
          "prompt": "Enter the gravitational field strength on Earth (N/kg):",
          "answer": "9.8",
          "feedback": "Correct."
        },
        {
          "id": "q9",
          "prompt": "Calculate the weight using W = mg (in N):",
          "answer": "147",
          "feedback": "Correct. 15 kg \u00d7 9.8 N/kg = 147 N."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'>  <rect x='50' y='80' width='100' height='50' fill='#6baed6' stroke='#2171b5' />  <text x='100' y='110' text-anchor='middle' font-family='sans-serif' font-size='14' fill='white'>15 kg</text>  <line x1='100' y1='80' x2='100' y2='40' stroke='#e6550d' stroke-width='3' marker-end='url(#arrow)' />  <text x='110' y='60' font-family='sans-serif' font-size='14' fill='#e6550d'>Weight (W)</text>  <defs>    <marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='5' orient='auto'>      <path d='M0 0 L10 5 L0 10 Z' fill='#e6550d'/>    </marker>  </defs></svg>"
    }
  },
  "step5": {
    "title": "Calculation: Weight on Different Planets",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Since gravitational field strength varies on different planets, weight changes, but mass remains the same. Use W = mg with the correct <em>g</em> value for each planet.</p>",
    "workedExample": {
      "title": "Interactive Worked Example: Weight on Mars",
      "problem": "Calculate the weight of a 50 kg object on Mars where g = 3.7 N/kg.",
      "questions": [
        {
          "id": "q10",
          "prompt": "Enter the mass of the object (kg):",
          "answer": "50",
          "feedback": "Correct."
        },
        {
          "id": "q11",
          "prompt": "Enter the gravitational field strength on Mars (N/kg):",
          "answer": "3.7",
          "feedback": "Correct."
        },
        {
          "id": "q12",
          "prompt": "Calculate the weight on Mars (in N):",
          "answer": "185",
          "feedback": "Correct. 50 kg \u00d7 3.7 N/kg = 185 N."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 320 180' xmlns='http://www.w3.org/2000/svg'>  <circle cx='80' cy='100' r='40' fill='#fdae6b' stroke='#e6550d' stroke-width='3' />  <text x='80' y='105' font-family='sans-serif' font-size='16' fill='#e6550d' text-anchor='middle'>Mars</text>  <rect x='210' y='70' width='60' height='60' fill='#6baed6' stroke='#2171b5' />  <text x='240' y='105' font-family='sans-serif' font-size='16' fill='white' text-anchor='middle'>50 kg</text>  <line x1='150' y1='100' x2='210' y2='100' stroke='#636363' stroke-width='2' marker-end='url(#arrowhead)' />  <text x='180' y='90' font-family='sans-serif' font-size='14' fill='#636363'>Calculate W = mg</text>  <defs>    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#636363'/>    </marker>  </defs></svg>"
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A satellite has a mass of 200 kg. Calculate its weight on Earth and explain how its weight would change if it was taken to a planet with half Earth's gravitational field strength.</span>",
      "hint": "Remember to use the formula <em>W = mg</em> and that mass does not change between planets.",
      "mustHaveKeywords": ["weight", "mass", "gravitational field strength", "W = mg", "constant", "half"],
      "optionalKeywords": ["Newton", "N/kg", "force"],
      "modelAnswer": "<span>The weight on Earth is calculated as W = mg = 200 kg \u00d7 9.8 N/kg = 1960 N. If taken to a planet with half Earth's gravitational field strength (4.9 N/kg), the weight becomes 200 kg \u00d7 4.9 N/kg = 980 N. The mass remains constant at 200 kg, but the weight changes because gravitational field strength changes.</span>",
      "scaffoldPrompts": ["First calculate the weight on Earth using W = mg.", "Next calculate the weight on the other planet using half the value of g.", "Explain the difference between mass and weight in this context."]
    }
  }
};