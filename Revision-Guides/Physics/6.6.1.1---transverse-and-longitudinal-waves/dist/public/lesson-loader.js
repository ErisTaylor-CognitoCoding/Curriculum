window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.6.1.1 - Transverse and longitudinal waves",
  "strapline": "An introduction to the types of waves and their key properties including amplitude, wavelength, frequency, and wave speed, with calculations using the wave equation.",
  "learningObjectives": [
    "Students should be able to distinguish between transverse waves (where oscillations are perpendicular to the direction of energy transfer) and longitudinal waves (where oscillations are parallel to the direction of energy transfer) (Physics 6.6.1.1)",
    "Students should be able to identify and describe the key properties of waves including amplitude, wavelength, frequency and wave speed (Physics 6.6.1.1)",
    "Students should be able to apply the wave equation (wave speed = frequency × wavelength) to calculate wave quantities (Physics 6.6.1.1)"
  ],
  "keyFormulas": [
    "Wave equation: wave speed = frequency × wavelength (v = f × λ)",
    "Frequency = Number of oscillations per second (Hz)",
    "Speed (v) is in metres per second (m/s), wavelength (λ) in metres (m), frequency (f) in hertz (Hz)"
  ],
  "diagramHtml": "<svg viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg'><text x='250' y='20' font-family='sans-serif' font-size='18' text-anchor='middle' font-weight='bold'>Transverse and Longitudinal Waves</text><line x1='20' y1='80' x2='480' y2='80' stroke='black' stroke-width='2' marker-end='url(#arrow)' /><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto'><path d='M0,0 L10,5 L0,10 z' fill='black'/></marker></defs><path d='M20 80 Q40 40 60 80 T100 80 T140 80 T180 80 T220 80 T260 80 T300 80 T340 80 T380 80 T420 80 T460 80' fill='none' stroke='blue' stroke-width='2'/><text x='250' y='110' font-family='sans-serif' font-size='12' text-anchor='middle' fill='blue'>Transverse wave oscillations (vertical) perpendicular to energy (horizontal)</text><rect x='20' y='130' width='20' height='40' fill='orange'/><line x1='30' y1='130' x2='30' y2='170' stroke='black' stroke-width='2'/><line x1='30' y1='170' x2='70' y2='170' stroke='black' stroke-width='2' marker-end='url(#arrow)' /><circle cx='70' cy='155' r='10' fill='none' stroke='red' stroke-width='2' /><line x1='80' y1='155' x2='100' y2='155' stroke='red' stroke-width='2' marker-end='url(#arrow)' /><text x='130' y='160' fill='black' font-family='sans-serif' font-size='12'>Longitudinal wave oscillations (compression and rarefaction) parallel to energy</text></svg>",
  "step1": {
    "title": "Concept: Understanding Transverse Waves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>transverse wave</strong> is a wave where the oscillations (vibrations) of particles are <em>perpendicular</em> to the direction of energy transfer. This means the particles move up and down or side to side while the wave energy moves forward.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine shaking a rope up and down. The wave you see traveling along the rope is transverse because the rope moves up and down (oscillation) while the wave travels horizontally (energy transfer).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Transverse Waves",
      "problem": "Look at this wave on a string. Is it transverse or longitudinal? What direction are the oscillations relative to energy transfer?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are the particle oscillations perpendicular or parallel to the wave's direction?",
          "answer": "perpendicular",
          "feedback": "Correct! In transverse waves, the oscillations are perpendicular to energy transfer."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Longitudinal Waves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>longitudinal wave</strong> is a wave where the oscillations of particles are <em>parallel</em> to the direction of energy transfer. The particles move back and forth in the same direction as the wave travels, creating compressions and rarefactions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine pushing and pulling a spring. The compressions move along the spring in the same direction you push it, showing that the oscillations are parallel to energy transfer.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Longitudinal Waves",
      "problem": "Sound waves travel through air as longitudinal waves. What direction do the air particles oscillate relative to the wave's direction?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Choose the correct direction of oscillations: perpendicular or parallel?",
          "answer": "parallel",
          "feedback": "Correct! In longitudinal waves, oscillations are parallel to energy transfer."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Properties of Waves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Waves have key properties:<ul><li><strong>Amplitude</strong>: the maximum displacement from rest position, measured in metres (m).</li><li><strong>Wavelength</strong>: the distance between two corresponding points in consecutive waves, e.g., crest to crest.</li><li><strong>Frequency</strong>: number of waves passing a point per second, in hertz (Hz).</li><li><strong>Wave speed</strong>: how fast the wave travels, in metres per second (m/s).</li></ul></p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of ocean waves: amplitude is how high the waves are, wavelength is the distance between wave crests, frequency is how many waves pass you every second, and wave speed is how fast the waves move toward the shore.</p>"
    }
  },
  "step4": {
    "title": "Concept: Amplitude in Waves",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>amplitude</strong> of a wave is its maximum displacement from the resting (equilibrium) position. It reflects the energy the wave carries: larger amplitude means more energy.</p>",
    "workedExample": {
      "title": "Worked Example: Measuring Amplitude",
      "problem": "A wave on a string moves 0.03 m above the rest position at its highest point. What is its amplitude?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the amplitude value in metres:",
          "answer": "0.03",
          "feedback": "Correct! The amplitude is 0.03 m."
        }
      ]
    }
  },
  "step5": {
    "title": "Wave Equation and Calculations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The wave equation links wave speed (<em>v</em>), frequency (<em>f</em>), and wavelength (λ): <strong>v = f × λ</strong>. You can rearrange to find any one quantity if you know the other two.</p>",
    "workedExample": {
      "title": "Interactive Worked Example: Using the Wave Equation",
      "problem": "Calculate the wave speed if the frequency is 10 Hz and the wavelength is 2 m.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the frequency (Hz)?",
          "answer": "10",
          "feedback": "Correct! Frequency is 10 Hz."
        },
        {
          "id": "q2",
          "prompt": "What is the wavelength (m)?",
          "answer": "2",
          "feedback": "Correct! Wavelength is 2 m."
        },
        {
          "id": "q3",
          "prompt": "Use the equation wave speed = frequency × wavelength to calculate wave speed:",
          "answer": "20",
          "feedback": "Correct! Wave speed = 10 × 2 = 20 m/s."
        }
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following waves is a transverse wave?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Sound waves in air</span>",
            "isCorrect": false,
            "explanation": "Sound waves are longitudinal, with oscillations parallel to energy transfer."
          },
          {
            "id": "b",
            "label": "<span>Light waves</span>",
            "isCorrect": true,
            "explanation": "Correct! Light waves are transverse, oscillating perpendicular to energy transfer."
          },
          {
            "id": "c",
            "label": "<span>Ultrasound waves</span>",
            "isCorrect": false,
            "explanation": "Ultrasound waves in air are longitudinal, like sound."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What does a larger amplitude mean in a wave?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The wave has more energy</span>",
            "isCorrect": true,
            "explanation": "Correct! Larger amplitude corresponds to higher energy."
          },
          {
            "id": "b",
            "label": "<span>The wave has higher frequency</span>",
            "isCorrect": false,
            "explanation": "Amplitude is unrelated to frequency."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A wave where oscillations are <span class=\"font-semibold\">_____</span> to the direction of energy transfer is called a transverse wave.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "perpendicular",
                "label": "perpendicular",
                "isCorrect": true,
                "feedback": "Correct! Transverse waves oscillate perpendicular to energy transfer."
              },
              {
                "value": "parallel",
                "label": "parallel",
                "isCorrect": false,
                "feedback": "Incorrect. That describes longitudinal waves."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Frequency is measured in <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "hertz",
                "label": "hertz (Hz)",
                "isCorrect": true,
                "feedback": "Correct! Frequency is in hertz, the number of oscillations per second."
              },
              {
                "value": "metres",
                "label": "metres",
                "isCorrect": false,
                "feedback": "Incorrect. Metres measure distance, not frequency."
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
      "prompt": "<span>Explain the difference between transverse and longitudinal waves and describe the key properties of waves. Then calculate the wave speed for a wave with frequency 15 Hz and wavelength 0.4 m.</span>",
      "hint": "<span>Remember to include definitions of each wave type, wave properties (amplitude, wavelength, frequency), and use the wave equation for calculation.</span>",
      "mustHaveKeywords": ["transverse", "longitudinal", "oscillations", "perpendicular", "parallel", "amplitude", "wavelength", "frequency", "wave speed", "v = f × λ"],
      "optionalKeywords": ["compressions", "rarefactions", "energy transfer"],
      "modelAnswer": "<span>Transverse waves have oscillations perpendicular to the direction of energy transfer, such as light waves. Longitudinal waves have oscillations parallel to the direction of energy transfer, like sound waves, which have compressions and rarefactions. Key wave properties include amplitude (maximum displacement), wavelength (distance between wave peaks), frequency (oscillations per second), and wave speed (how fast the wave travels). Using the wave equation v = f × λ, the wave speed is 15 Hz × 0.4 m = 6 m/s.</span>",
      "scaffoldPrompts": [
        "Define transverse waves and direction of oscillations",
        "Define longitudinal waves and direction of oscillations",
        "List the wave properties and their meanings",
        "Recall and write the wave equation",
        "Substitute the given frequency and wavelength values",
        "Calculate and state the wave speed"
      ]
    }
  }
};