window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.4.2.3 - Half-lives and the random nature of radioactive decay",
  "strapline": "Understand how half-life measures radioactive decay over time and how decay occurs randomly yet predictably in large samples, distinguishing contamination from irradiation hazards.",
  "learningObjectives": [
    "Students should understand that half-life is a measure of the time taken for half of the radioactive nuclei in a sample to decay (Physics 6.4.2.3)",
    "Students should understand that radioactive decay is a random process that cannot be predicted for individual atoms but shows predictable patterns for large numbers of atoms (Physics 6.4.2.3)",
    "Students should distinguish between radioactive contamination and irradiation, evaluating the hazards associated with each (Physics 6.4.2.3)"
  ],
  "keyFormulas": [
    "N = N_0 × (1/2)^(t / T_{1/2})  (Number of nuclei remaining after time t)",
    "Activity A = A_0 × (1/2)^(t / T_{1/2})  (Activity after time t)",
    "Reminder: Always check units, time must be consistent with half-life units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#f9f9f9' stroke='#333'/><text x='200' y='40' font-family='sans-serif' font-size='16' font-weight='bold' text-anchor='middle'>Exponential Decay Curve</text><polyline fill='none' stroke='#0074d9' stroke-width='3' points='40,260 80,200 120,150 160,110 200,80 240,55 280,40 320,30 360,25'/><text x='370' y='260' font-family='sans-serif' font-size='12'>Time (t)</text><text x='30' y='20' font-family='sans-serif' font-size='12' transform='rotate(-90 30,20)'>Nuclei Remaining (N)</text></svg>",
  "step1": {
    "title": "Concept: Understanding Half-life",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Half-life is the time taken for half of the radioactive nuclei in a sample to decay. Every radioactive isotope has its own constant half-life, which can be extremely short or long.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a large group of people, and after a fixed time, half of them leave. The time it takes for half the group to leave is like the half-life. You can predict the group size remaining over time but not who specifically will leave.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Remaining Nuclei after One Half-life",
      "problem": "A sample has 1000 radioactive nuclei. Calculate how many nuclei remain after one half-life.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many nuclei are there initially?",
          "answer": "1000",
          "feedback": "Correct. The sample starts with 1000 nuclei."
        },
        {
          "id": "q2",
          "prompt": "What fraction remains after one half-life?",
          "answer": "0.5",
          "feedback": "Correct. After one half-life, half the nuclei remain."
        },
        {
          "id": "q3",
          "prompt": "Calculate the number of nuclei remaining after one half-life.",
          "answer": "500",
          "feedback": "Correct. Half of 1000 is 500 nuclei remaining."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Random Nature of Radioactive Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Radioactive decay is a random process at the level of individual nuclei — we cannot predict exactly when a specific atom will decay. However, for large numbers of nuclei, the overall decay follows a predictable pattern described by the half-life.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of flipping a very large number of coins: while you can't predict the outcome of a single flip, the total number of heads will be close to half the flips over large numbers.</p>"
    }
  },
  "step3": {
    "title": "Worked Example: Predicting Decay Over Multiple Half-lives",
    "explanation": "<p>Use the half-life formula to predict how many nuclei remain after multiple half-lives.</p>",
    "workedExample": {
      "title": "Interactive Calculation",
      "problem": "A radioactive isotope has a half-life of 3 hours and an initial sample of 800 nuclei. Calculate the remaining nuclei after 9 hours.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many half-lives have passed after 9 hours? (Use: total time ÷ half-life)",
          "answer": "3",
          "feedback": "Correct. 9 hours ÷ 3 hours = 3 half-lives."
        },
        {
          "id": "q2",
          "prompt": "Calculate (1/2) to the power of the number of half-lives (i.e. (1/2)^3).",
          "answer": "0.125",
          "feedback": "Correct. (1/2)^3 = 0.125."
        },
        {
          "id": "q3",
          "prompt": "Calculate the remaining nuclei after 9 hours (800 × 0.125).",
          "answer": "100",
          "feedback": "Correct. 800 × 0.125 = 100 nuclei remaining."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='160' fill='#fcfcfc' stroke='#222'/><text x='200' y='40' font-family='sans-serif' font-size='16' font-weight='bold' text-anchor='middle'>Decay over 3 half-lives</text><line x1='60' y1='180' x2='60' y2='60' stroke='#e74c3c' stroke-width='12'/><line x1='140' y1='180' x2='140' y2='90' stroke='#e67e22' stroke-width='12'/><line x1='220' y1='180' x2='220' y2='130' stroke='#f1c40f' stroke-width='12'/><line x1='300' y1='180' x2='300' y2='170' stroke='#2ecc71' stroke-width='12'/><text x='60' y='195' font-family='sans-serif' font-size='12' text-anchor='middle'>Start (800)</text><text x='140' y='195' font-family='sans-serif' font-size='12' text-anchor='middle'>1 half-life</text><text x='220' y='195' font-family='sans-serif' font-size='12' text-anchor='middle'>2 half-lives</text><text x='300' y='195' font-family='sans-serif' font-size='12' text-anchor='middle'>3 half-lives</text></svg>"
    }
  },
  "step4": {
    "title": "Concept: Radioactive Contamination",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Radioactive contamination is when unwanted radioactive material is deposited on or inside an object. This material emits harmful radiation until it is removed or decays naturally.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine mud splashed on your clothes – the mud (contamination) stays until you wash it off, continuously causing dirt (radiation).</p>"
    }
  },
  "step5": {
    "title": "Concept: Radioactive Irradiation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Irradiation occurs when an object is exposed to radiation without itself becoming radioactive. The object does not emit radiation once the source is removed.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like sunlight on your skin — your skin doesn't stay 'hot' after the sun is gone, though you were exposed.</p>"
    }
  },
  "step6": {
    "title": "Distinguishing Contamination from Irradiation and Hazard Evaluation",
    "explanation": "<p>Contamination is a direct source of radiation due to radioactive material being present on/in objects, posing persistent risk. Irradiation temporarily exposes objects or people to radiation but does not make them radioactive. Understanding the hazard involves recognizing that contamination requires removal, but irradiation is controlled by removing the source.</p>",
    "workedExample": {
      "title": "Interactive Hazard Scenario",
      "problem": "A worker handles a contaminated surface that emits beta radiation and stands near a gamma source for a short time. Answer the following:",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which hazard poses a persistent risk: contamination or irradiation?",
          "answer": "contamination",
          "feedback": "Correct. Contamination emits radiation until cleaned or it decays."
        },
        {
          "id": "q2",
          "prompt": "Which type of radiation penetrates the body more deeply, beta or gamma?",
          "answer": "gamma",
          "feedback": "Correct. Gamma radiation is more penetrating than beta radiation."
        },
        {
          "id": "q3",
          "prompt": "After leaving the area, which hazard continues to pose risk to the worker?",
          "answer": "contamination",
          "feedback": "Correct. Irradiation risk ends once exposure stops, contamination risk may remain."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the half-life of a radioactive isotope represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The time taken for half of the radioactive nuclei in a sample to decay</span>",
            "isCorrect": true,
            "explanation": "Correct. The half-life is defined as this time period."
          },
          {
            "id": "b",
            "label": "<span>The time taken for all nuclei to decay</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Not all nuclei decay at the half-life."
          },
          {
            "id": "c",
            "label": "<span>The time after which decay stops</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Decay continues over time but becomes slower."
          },
          {
            "id": "d",
            "label": "<span>The time to completely remove contamination</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Removal depends on physical cleaning, not half-life."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Why can't we predict exactly when a single radioactive nucleus will decay?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Radioactive decay is a random process</span>",
            "isCorrect": true,
            "explanation": "Correct. Each nucleus decays randomly."
          },
          {
            "id": "b",
            "label": "<span>Because half-lives change constantly</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Half-lives are constant properties."
          },
          {
            "id": "c",
            "label": "<span>Because radioactive material is invisible</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Visibility doesn't affect decay predictability."
          },
          {
            "id": "d",
            "label": "<span>Because contamination affects decay rates</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Contamination affects exposure, not decay timing."
          }
        ]
      },
      {
        "id": "mcq-3",
        "question": "<span>Which statement best differentiates radioactive contamination and irradiation?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Contamination involves radioactive material being present, irradiation is exposure to radiation without material being present</span>",
            "isCorrect": true,
            "explanation": "Correct. Contamination means radioactive particles remain; irradiation is temporary exposure."
          },
          {
            "id": "b",
            "label": "<span>Irradiation is more hazardous than contamination</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Hazard depends on context; contamination often poses long-term risk."
          },
          {
            "id": "c",
            "label": "<span>Contamination refers to external exposure only</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Contamination can be external or internal."
          },
          {
            "id": "d",
            "label": "<span>They are the same and used interchangeably</span>",
            "isCorrect": false,
            "explanation": "Incorrect. They refer to different phenomena."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of a radioactive isotope is the time taken for half of the nuclei to decay.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "half-life",
                "label": "half-life",
                "isCorrect": true,
                "feedback": "Correct! Half-life is the right term."
              },
              {
                "value": "contamination",
                "label": "contamination",
                "isCorrect": false,
                "feedback": "Incorrect. Contamination is different."
              },
              {
                "value": "irradiation",
                "label": "irradiation",
                "isCorrect": false,
                "feedback": "Incorrect. Irradiation is exposure, not decay time."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Radioactive decay is a <span class=\"font-semibold\">_____</span> process at the atomic level.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "random",
                "label": "random",
                "isCorrect": true,
                "feedback": "Correct! Decay timing is random."
              },
              {
                "value": "predictable",
                "label": "predictable",
                "isCorrect": false,
                "feedback": "Incorrect. Individual decay timing is random."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span><span class=\"font-semibold\">_____</span> is the unwanted presence of radioactive material on surfaces or inside objects.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "contamination",
                "label": "contamination",
                "isCorrect": true,
                "feedback": "Correct! Contamination involves radioactive material presence."
              },
              {
                "value": "irradiation",
                "label": "irradiation",
                "isCorrect": false,
                "feedback": "Incorrect. Irradiation is exposure, not contamination."
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
      "prompt": "<span>Explain the concept of half-life and why radioactive decay is considered a random process. Additionally, describe how radioactive contamination differs from irradiation and discuss the hazards associated with each.</span>",
      "hint": "Remember to define half-life clearly, mention the randomness of decay on an atomic level versus large-scale predictability, and explain contamination as a persistent hazard versus irradiation as temporary exposure.",
      "mustHaveKeywords": ["half-life", "random", "radioactive contamination", "irradiation", "hazards"],
      "optionalKeywords": ["exponential decay", "radioactive nuclei", "removal", "exposure"],
      "modelAnswer": "<span>The half-life of a radioactive isotope is the time taken for half of the radioactive nuclei in a sample to decay. Radioactive decay is a random process because it is impossible to predict the exact moment when an individual nucleus will decay, but when considering large numbers of atoms, the decay follows a predictable exponential pattern. Radioactive contamination occurs when radioactive material is present on or within an object, continuously emitting radiation until it is removed or decays naturally, posing a persistent hazard. Irradiation, on the other hand, is exposure to radiation without the object becoming radioactive itself, so once the radioactive source is removed, the hazard stops. Contamination requires careful removal and decontamination to eliminate risks, whereas irradiation risks are controlled by limiting exposure time and distance.</span>",
      "scaffoldPrompts": [
        "Define half-life with an example",
        "Explain why decay is random at the atomic level but predictable statistically",
        "Describe what radioactive contamination entails",
        "Explain how irradiation differs from contamination",
        "Evaluate the hazards associated with contamination and irradiation"
      ]
    }
  }
};