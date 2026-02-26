window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.1 - Compound measures (pressure, density, speed)",
  "strapline": "Understanding and applying speed, density, and pressure as compound measures using their formulas and rearrangements.",
  "learningObjectives": [
    "Students should be able to calculate and apply speed using the formula speed = distance ÷ time, and rearrange the formula to find distance or time (Maths 3.1)",
    "Students should be able to calculate and apply density using the formula density = mass ÷ volume, and rearrange the formula to find mass or volume (Maths 3.1)",
    "Students should be able to calculate and apply pressure using the formula pressure = force ÷ area, and rearrange the formula to find force or area (Maths 3.1)"
  ],
  "keyFormulas": [
    "speed = distance ÷ time",
    "density = mass ÷ volume",
    "pressure = force ÷ area",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#e8f0fe' stroke='#333' stroke-width='1'/><text x='200' y='40' text-anchor='middle' font-family='sans-serif' font-weight='bold'>Compound Measures Overview</text><g><rect x='40' y='60' width='100' height='60' fill='#acd8fa' stroke='#333'/><text x='90' y='95' font-family='sans-serif' font-weight='bold' font-size='14' text-anchor='middle'>Speed</text><text x='90' y='115' font-family='sans-serif' font-size='12' text-anchor='middle'>distance ÷ time</text><text x='90' y='130' font-family='sans-serif' font-size='12' text-anchor='middle'>(m/s, km/h)</text></g><g><rect x='150' y='60' width='100' height='60' fill='#f8d7da' stroke='#333'/><text x='200' y='95' font-family='sans-serif' font-weight='bold' font-size='14' text-anchor='middle'>Density</text><text x='200' y='115' font-family='sans-serif' font-size='12' text-anchor='middle'>mass ÷ volume</text><text x='200' y='130' font-family='sans-serif' font-size='12' text-anchor='middle'>(g/cm³, kg/m³)</text></g><g><rect x='260' y='60' width='100' height='60' fill='#d4edda' stroke='#333'/><text x='310' y='95' font-family='sans-serif' font-weight='bold' font-size='14' text-anchor='middle'>Pressure</text><text x='310' y='115' font-family='sans-serif' font-size='12' text-anchor='middle'>force ÷ area</text><text x='310' y='130' font-family='sans-serif' font-size='12' text-anchor='middle'>(Pa, N/m²)</text></g></svg>",
  "step1": {
    "title": "Concept: What are Compound Measures?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>compound measure</strong> combines two or more measurements into one value. This often forms a <em>ratio or rate</em> like speed (distance per time), density (mass per volume), and pressure (force per area). They help describe how one quantity changes in relation to another.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of compound measures like a speedometer in a car, which tells you how far you travel for each second or hour; it's combining distance and time, just like speed does.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying a Compound Measure",
      "problem": "Which of the following is a compound measure?<ul><li>A) Mass</li><li>B) Speed</li><li>C) Volume</li></ul>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is mass a compound measure? (yes/no)",
          "answer": "no",
          "feedback": "Correct! Mass is a single measure, not a combination."
        },
        {
          "id": "q2",
          "prompt": "Is speed a compound measure? (yes/no)",
          "answer": "yes",
          "feedback": "Correct! Speed combines distance and time."
        },
        {
          "id": "q3",
          "prompt": "Is volume a compound measure? (yes/no)",
          "answer": "no",
          "feedback": "Correct! Volume measures space alone, not a ratio."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Calculating and Rearranging Speed",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Speed shows how fast something moves. The formula is <strong>speed = distance ÷ time</strong>. You can rearrange this to find distance as <strong>distance = speed × time</strong> or time as <strong>time = distance ÷ speed</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Speed",
      "problem": "A car travels 150 km in 3 hours. What is its speed?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the distance travelled (in km)?",
          "answer": "150",
          "feedback": "Correct, the car travels 150 km."
        },
        {
          "id": "q2",
          "prompt": "What is the time taken (in hours)?",
          "answer": "3",
          "feedback": "Correct, the time taken is 3 hours."
        },
        {
          "id": "q3",
          "prompt": "Calculate speed using speed = distance ÷ time.",
          "answer": "50",
          "feedback": "Correct! Speed = 150 ÷ 3 = 50 km/h."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='280' height='130' fill='#f0f4ff' stroke='#1a73e8' stroke-width='2'/><text x='150' y='40' font-family='sans-serif' font-weight='bold' font-size='16' fill='#1a73e8' text-anchor='middle'>Car Journey</text><line x1='50' y1='100' x2='250' y2='100' stroke='#1a73e8' stroke-width='4' marker-end='url(#arrow)' /><text x='150' y='120' font-family='sans-serif' font-size='12' fill='#333' text-anchor='middle'>Distance = 150 km</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='9' refY='5' orient='auto'><path d='M0,0 L10,5 L0,10 Z' fill='#1a73e8'/></marker></defs></svg>"
    }
  },
  "step3": {
    "title": "Concept: Calculating and Rearranging Density",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Density shows how much mass there is in a certain volume. The formula is <strong>density = mass ÷ volume</strong>. To find mass, use <strong>mass = density × volume</strong>. To find volume, use <strong>volume = mass ÷ density</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Density",
      "problem": "An object has a mass of 300 grams and a volume of 100 cm³. What is its density?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the mass (in grams)?",
          "answer": "300",
          "feedback": "Correct, mass is 300 grams."
        },
        {
          "id": "q2",
          "prompt": "What is the volume (in cm³)?",
          "answer": "100",
          "feedback": "Correct, volume is 100 cm³."
        },
        {
          "id": "q3",
          "prompt": "Calculate density using density = mass ÷ volume.",
          "answer": "3",
          "feedback": "Correct! Density = 300 ÷ 100 = 3 g/cm³."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='280' height='130' fill='#fff4f4' stroke='#d9534f' stroke-width='2'/><text x='150' y='40' font-family='sans-serif' font-weight='bold' font-size='16' fill='#d9534f' text-anchor='middle'>Density Calculation</text><rect x='80' y='70' width='140' height='40' fill='#d9534f' opacity='0.2' stroke='#d9534f'/><text x='150' y='95' font-family='sans-serif' font-size='12' fill='#d9534f' text-anchor='middle'>Mass = 300 g</text><text x='150' y='110' font-family='sans-serif' font-size='12' fill='#d9534f' text-anchor='middle'>Volume = 100 cm³</text></svg>"
    }
  },
  "step4": {
    "title": "Concept: Calculating and Rearranging Pressure",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Pressure measures how much force is applied over an area. The formula is <strong>pressure = force ÷ area</strong>. Rearranged for force is <strong>force = pressure × area</strong> and for area is <strong>area = force ÷ pressure</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Pressure",
      "problem": "A force of 200 N is applied to an area of 4 m². What is the pressure?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the force (in Newtons)?",
          "answer": "200",
          "feedback": "Correct, the force is 200 N."
        },
        {
          "id": "q2",
          "prompt": "What is the area (in m²)?",
          "answer": "4",
          "feedback": "Correct, the area is 4 m²."
        },
        {
          "id": "q3",
          "prompt": "Calculate pressure using pressure = force ÷ area.",
          "answer": "50",
          "feedback": "Correct! Pressure = 200 ÷ 4 = 50 Pa."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 300 160' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='280' height='140' fill='#e6f4ea' stroke='#28a745' stroke-width='2'/><text x='150' y='40' font-family='sans-serif' font-weight='bold' font-size='16' fill='#28a745' text-anchor='middle'>Pressure Concept</text><rect x='100' y='60' width='100' height='40' fill='#28a745' opacity='0.15' stroke='#28a745'/><text x='150' y='85' font-family='sans-serif' font-size='12' fill='#28a745' text-anchor='middle'>Force = 200 N</text><text x='150' y='105' font-family='sans-serif' font-size='12' fill='#28a745' text-anchor='middle'>Area = 4 m²</text></svg>"
    }
  },
  "step5": {
    "title": "Apply: Rearranging Formulas Practice",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Practice rearranging compound measure formulas to find the unknown variable.</p>",
    "workedExample": {
      "title": "Worked Example: Find Distance",
      "problem": "Speed is 60 km/h and time is 2 hours. Find the distance travelled.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Using the formula distance = speed × time, what is the speed?",
          "answer": "60",
          "feedback": "Correct! Speed is 60 km/h."
        },
        {
          "id": "q2",
          "prompt": "What is the time (in hours)?",
          "answer": "2",
          "feedback": "Correct! Time is 2 hours."
        },
        {
          "id": "q3",
          "prompt": "Calculate distance travelled.",
          "answer": "120",
          "feedback": "Correct! Distance = 60 × 2 = 120 km."
        }
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ on Compound Measures",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which formula correctly represents pressure?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>pressure = force ÷ area</span>",
            "isCorrect": true,
            "explanation": "Correct! Pressure is force divided by area."
          },
          {
            "id": "b",
            "label": "<span>pressure = mass ÷ volume</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That is the formula for density."
          },
          {
            "id": "c",
            "label": "<span>pressure = distance ÷ time</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That is the formula for speed."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Which is a correct rearrangement of the speed formula to find time?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>time = speed × distance</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Time is distance divided by speed."
          },
          {
            "id": "b",
            "label": "<span>time = distance ÷ speed</span>",
            "isCorrect": true,
            "explanation": "Correct! Time = distance ÷ speed."
          },
          {
            "id": "c",
            "label": "<span>time = speed ÷ distance</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This formula is invalid."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>Density is defined as <span class=\"font-semibold\">_____</span> divided by <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "mass",
                "label": "mass",
                "isCorrect": true,
                "feedback": "Correct! Density = mass ÷ volume."
              },
              {
                "value": "volume",
                "label": "volume",
                "isCorrect": false,
                "feedback": "Try again. Density is mass divided by volume."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "volume",
                "label": "volume",
                "isCorrect": true,
                "feedback": "Correct! Density = mass ÷ volume."
              },
              {
                "value": "mass",
                "label": "mass",
                "isCorrect": false,
                "feedback": "Try again. Volume is the denominator."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A balloon contains 5 kg of gas and occupies a volume of 10 m³. Calculate the density of the gas inside the balloon. Then, if the gas exerts a force of 100 N on an area of 2 m², find the pressure exerted on that area.</span>",
      "hint": "Use density = mass ÷ volume; pressure = force ÷ area. Always check your units and show your working clearly.",
      "mustHaveKeywords": [
        "density",
        "pressure",
        "mass",
        "volume",
        "force",
        "area",
        "formula",
        "units"
      ],
      "optionalKeywords": [
        "rearrangement",
        "show working"
      ],
      "modelAnswer": "<span>First, calculate density: density = mass ÷ volume = 5 kg ÷ 10 m³ = 0.5 kg/m³.<br/>Next, calculate pressure: pressure = force ÷ area = 100 N ÷ 2 m² = 50 Pa.<br/>Thus, the density of the gas is 0.5 kg/m³ and the pressure exerted is 50 Pascals.</span>",
      "scaffoldPrompts": [
        "Identify the mass and volume for density calculation",
        "Calculate density using the formula",
        "Identify force and area for pressure calculation",
        "Calculate pressure using the formula"
      ]
    }
  }
};