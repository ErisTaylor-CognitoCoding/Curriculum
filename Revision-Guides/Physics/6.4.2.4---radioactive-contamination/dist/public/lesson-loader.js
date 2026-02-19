window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.4.2.4 - Radioactive contamination",
  "strapline": "Understanding half-life, the random nature of decay, and the difference between contamination and irradiation with associated hazards.",
  "learningObjectives": [
    "Students should understand half-life as a measure of the time taken for half of the radioactive nuclei in a sample to decay (Physics 6.4.2.4)",
    "Students should understand that radioactive decay is a random process that cannot be predicted for individual atoms but shows predictable patterns for large numbers of atoms (Physics 6.4.2.4)",
    "Students should distinguish between contamination (unwanted presence of radioactive materials on or in other materials) and irradiation (exposure to radiation), and evaluate the hazards associated with contamination (Physics 6.4.2.4)"
  ],
  "keyFormulas": [
    "Half-life (t½) = Time taken for half the radioactive nuclei in a sample to decay",
    "Activity (A) decreases over time according to the formula: A = A₀ × (½)^(t/t½) - where A₀ is initial activity, t elapsed time",
    "Reminder: Radioactive decay is random for individual atoms but statistically predictable in large samples"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Diagram showing radioactive decay curves and contamination example'><rect x='0' y='0' width='400' height='300' fill='#ffffff'/><text x='200' y='30' font-family='Arial' font-size='16' text-anchor='middle' fill='#333'>Radioactive Decay &amp; Contamination</text><line x1='50' y1='250' x2='350' y2='250' stroke='#444' stroke-width='2'/><line x1='50' y1='250' x2='50' y2='50' stroke='#444' stroke-width='2'/><text x='30' y='255' font-family='Arial' font-size='12'>0</text><text x='45' y='270' font-family='Arial' font-size='12'>Time (t)</text><text x='10' y='150' font-family='Arial' font-size='12' transform='rotate(-90 10,150)'>Activity (A)</text><path d='M50 250 Q110 180 170 130 Q230 90 290 65 Q350 50 350 50' fill='none' stroke='#1f77b4' stroke-width='3'/><circle cx='160' cy='160' r='12' fill='#d62728' opacity='0.7'/><text x='160' y='160' font-family='Arial' font-size='10' fill='#fff' text-anchor='middle' dy='4'>Contaminated</text><rect x='145' y='180' width='3' height='20' fill='#d62728'/><rect x='178' y='180' width='3' height='20' fill='#d62728'/><text x='160' y='205' font-family='Arial' font-size='10' fill='#d62728' text-anchor='middle'>Radiation emitted</text></svg>",
  "step1": {
    "title": "Concept: Understanding Half-life",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Half-life is the time taken for <strong>half of the radioactive nuclei</strong> in a sample to decay. Each radioactive isotope has its own fixed half-life which can range from fractions of a second to billions of years.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of half-life like flipping a massive pile of coins. After one round, half will likely show heads (decayed), and half tails (undecayed). The half-life tells you how long it takes for half to change.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Remaining Radioactive Nuclei",
      "problem": "A sample contains 1000 radioactive nuclei. The half-life of the isotope is 4 hours. How many nuclei remain after 8 hours?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many half-lives have passed after 8 hours?",
          "answer": "2",
          "feedback": "Correct! 8 hours ÷ 4 hours = 2 half-lives."
        },
        {
          "id": "q2",
          "prompt": "After one half-life, how many nuclei remain?",
          "answer": "500",
          "feedback": "Right! Half of 1000 is 500."
        },
        {
          "id": "q3",
          "prompt": "After two half-lives, how many nuclei remain?",
          "answer": "250",
          "feedback": "Correct! Half of 500 is 250."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Radioactive Decay as a Random Process",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Radioactive decay is a <strong>random process</strong>. We cannot predict when a specific nucleus will decay, but with large numbers, the overall decay pattern follows the half-life predictably.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like rain drops falling randomly, but over time, you can measure the average rainfall reliably.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Predicting Activity Over Time",
      "problem": "If a radioactive source has an activity of 800 Bq and a half-life of 5 hours, what is the expected activity after 10 hours?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many half-lives have passed in 10 hours?",
          "answer": "2",
          "feedback": "Good! 10 hours ÷ 5 hours = 2 half-lives."
        },
        {
          "id": "q2",
          "prompt": "Calculate the activity after 1 half-life:",
          "answer": "400",
          "feedback": "Correct! Activity halves each half-life: 800 ÷ 2 = 400 Bq."
        },
        {
          "id": "q3",
          "prompt": "Calculate the activity after 2 half-lives:",
          "answer": "200",
          "feedback": "Right! Half of 400 is 200 Bq."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Distinguishing Contamination vs Irradiation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Contamination</strong> is the unwanted presence of radioactive material on or inside other materials. <strong>Irradiation</strong> means being exposed to radiation without the radioactive material being present.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of contamination like sticky dust on your hands (you carry it with you), while irradiation is like being in sunlight (exposure without carrying the sun).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Contamination",
      "problem": "A scientist handles a radioactive sample carefully, but some dust lands on her gloves. What type of hazard is this?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is this contamination or irradiation?",
          "answer": "Contamination",
          "feedback": "Correct! Radioactive dust on gloves is contamination."
        },
        {
          "id": "q2",
          "prompt": "Why is contamination more hazardous than irradiation in this case?",
          "answer": "Because the radioactive dust continues emitting radiation and can be transferred",
          "feedback": "Exactly! Contaminated material continuously emits radiation and can spread."
        }
      ]
    }
  },
  "step4": {
    "title": "Hazards Associated with Radioactive Contamination",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Contamination is dangerous because radioactive material emits radiation continuously and can enter the body through skin, inhalation, or ingestion, causing damage to living cells.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like having poison on your skin that keeps harming you until you wash it off.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Evaluating Hazard Severity",
      "problem": "If a workbench is contaminated with radioactive dust, what actions reduce the hazard?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Name one method to reduce contamination hazard.",
          "answer": "Washing the area or removing contaminated material",
          "feedback": "Correct! Cleaning reduces radioactive contamination."
        },
        {
          "id": "q2",
          "prompt": "Why should contaminated materials be disposed of carefully?",
          "answer": "To prevent spreading radiation to other areas or people",
          "feedback": "Exactly! Proper disposal limits hazard spread."
        }
      ]
    }
  },
  "step5": {
    "title": "Example: Calculating Decay Over Multiple Half-lives",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using half-life, you can predict how much of a radioactive sample remains after several periods of decay.</p>",
    "workedExample": {
      "title": "Worked Example: Interactive Decay Calculation",
      "problem": "A sample has 1600 nuclei initially. The half-life is 3 hours. Calculate the remaining nuclei after 9 hours.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many half-lives have passed after 9 hours?",
          "answer": "3",
          "feedback": "Correct! 9 hours ÷ 3 hours = 3 half-lives."
        },
        {
          "id": "q2",
          "prompt": "Calculate the number of nuclei after 1 half-life (3 hours):",
          "answer": "800",
          "feedback": "Good job! Half of 1600 is 800."
        },
        {
          "id": "q3",
          "prompt": "Calculate remaining nuclei after 2 half-lives (6 hours):",
          "answer": "400",
          "feedback": "Correct! Half of 800 is 400."
        },
        {
          "id": "q4",
          "prompt": "Calculate remaining nuclei after 3 half-lives (9 hours):",
          "answer": "200",
          "feedback": "Well done! Half of 400 is 200 nuclei."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how the concept of half-life helps us understand radioactive decay and how contamination differs from irradiation. Include the hazards associated with contamination and ways to control it.</span>",
      "hint": "Remember to check for definitions of half-life and contamination, describe the random nature of decay, and cover hazard evaluation and safety precautions.",
      "mustHaveKeywords": ["half-life", "random", "contamination", "irradiation", "hazard"],
      "optionalKeywords": ["radioactive material", "radiation exposure", "safety precautions", "disposal"],
      "modelAnswer": "<span>Half-life is the time taken for half of the radioactive nuclei in a sample to decay, providing a predictable pattern for the decay of large numbers of atoms despite the random decay of individual nuclei. Contamination is the unwanted presence of radioactive material on or inside other materials, whereas irradiation is exposure to radiation without contamination. Contamination is hazardous because the material emits radiation continuously and can spread, causing harm by entering the body. Hazards can be controlled by removing or isolating contaminated materials, wearing protective equipment, and following proper disposal procedures.</span>",
      "scaffoldPrompts": ["Define half-life and explain its significance", "Describe why decay is random yet predictable", "Explain contamination and how it differs from irradiation", "Discuss hazards of contamination", "Suggest methods to control contamination hazards"]
    }
  }
};