window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.2.3.1 - Direct and alternating potential difference",
  "strapline": "Understanding direct and alternating potential difference, mains electricity characteristics, and wiring in a three-pin plug.",
  "learningObjectives": [
    "Students should understand the difference between direct and alternating potential difference (Physics 6.2.3.1)",
    "Students should know that mains electricity is an alternating current (a.c.) supply at 230V with a frequency of 50Hz (Physics 6.2.3.1)",
    "Students should understand the function of the live, neutral and earth wires in a three-pin plug and appropriate fuse ratings (Physics 6.2.3.1)"
  ],
  "keyFormulas": [
    "Frequency (Hz) = Number of cycles / Time (seconds)",
    "Voltage (V) = Electrical potential difference that drives current",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='25' y='25' width='450' height='250' fill='#f9f9f9' stroke='#444' />\n  <circle cx='150' cy='150' r='60' fill='#e0f7fa' stroke='#00796b' stroke-width='3'/>\n  <text x='150' y='150' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#00796b'>Direct Potential Difference (d.c.)</text>\n  <text x='150' y='170' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#004d40'>(Constant polarity)</text>\n  <circle cx='350' cy='150' r='60' fill='#ffecb3' stroke='#fbc02d' stroke-width='3'/>\n  <text x='350' y='150' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#fbc02d'>Alternating Potential Difference (a.c.)</text>\n  <text x='350' y='170' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#bf360c'>(Polarity alternates)</text>\n  <line x1='250' y1='80' x2='300' y2='80' stroke='#888' stroke-width='2' stroke-dasharray='5,5'/>\n  <line x1='250' y1='220' x2='300' y2='220' stroke='#888' stroke-width='2' stroke-dasharray='5,5'/>\n  <polyline points='240,60 262,80 240,100' fill='none' stroke='#777' stroke-width='2'/>\n  <polyline points='310,60 288,80 310,100' fill='none' stroke='#777' stroke-width='2'/>\n  <path d='M300 230 Q325 180 350 230' fill='none' stroke='#fbc02d' stroke-width='2'/>\n</svg>",
  "step1": {
    "title": "What is Direct Potential Difference (d.c.)?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct Potential Difference (d.c.) is a type of voltage where the electric current flows in only one direction. This means the polarity, which includes positive and negative terminals, remains constant and does not change over time. Common sources of d.c. are batteries and cells.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine water flowing steadily down a river in one direction only — this is like <strong>d.c.</strong> where current flows just one way.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Polarity in a Battery Circuit",
      "problem": "You have a 9 V battery connected to a circuit. Identify the positive and negative terminals and determine if the current direction changes.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the polarity of a standard 9 V battery's terminals?",
          "answer": "positive and negative",
          "feedback": "Correct! The battery has a positive terminal and a negative terminal."
        },
        {
          "id": "q2",
          "prompt": "Does the current change direction in a direct current circuit?",
          "answer": "no",
          "feedback": "Right! The current flows in one constant direction with d.c."
        }
      ]
    }
  },
  "step2": {
    "title": "What is Alternating Potential Difference (a.c.)?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Alternating Potential Difference (a.c.) is a voltage that periodically reverses direction, causing electric current to flow back and forth. The polarity alternates at a certain frequency. The electricity supplied to homes is a.c., providing 230 V at 50 Hz in the UK.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a swing moving forwards and backwards — this shows how current reverses direction in <strong>a.c.</strong></p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Frequency of a.c.",
      "problem": "The UK mains electricity is at 50 Hz, meaning 50 cycles per second. How many times does the current change direction in 1 second?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many complete cycles are in 1 second?",
          "answer": "50",
          "feedback": "Correct! There are 50 complete cycles each second."
        },
        {
          "id": "q2",
          "prompt": "How many times does the current change direction in one complete cycle?",
          "answer": "2",
          "feedback": "Yes! The current changes direction twice per cycle (once forward, once backward)."
        },
        {
          "id": "q3",
          "prompt": "Calculate how many times the current changes direction in 1 second.",
          "answer": "100",
          "feedback": "Well done! 50 cycles × 2 direction changes per cycle = 100."
        }
      ]
    }
  },
  "step3": {
    "title": "Frequency Explained",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Frequency is defined as the number of complete cycles of alternating current or voltage that occur each second, measured in Hertz (Hz). For example, UK mains electricity frequency is 50 Hz, meaning it completes 50 full cycles every second.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of frequency like the ticking of a clock, but instead of ticks, it's how many times a current swings back and forth each second.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Time for One Cycle",
      "problem": "If the frequency of a mains supply is 50 Hz, calculate the time for one complete cycle.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the formula to find time interval for one cycle from frequency?",
          "answer": "time = 1 / frequency",
          "feedback": "Correct! Time for one cycle is the reciprocal of frequency."
        },
        {
          "id": "q2",
          "prompt": "Calculate the time for one cycle with a frequency of 50 Hz (Answer in milliseconds).",
          "answer": "0.02",
          "feedback": "Correct! 1 ÷ 50 = 0.02 seconds = 20 milliseconds."
        }
      ]
    }
  },
  "step4": {
    "title": "Understanding Mains Electricity Characteristics",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Mains electricity supplies an alternating current (a.c.) at approximately 230 volts and a frequency of 50 Hertz in the UK. This supply powers household appliances and lighting.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Mains electricity is like a heartbeat that pulses 50 times every second, powering everything in your home.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Mains Voltage and Frequency",
      "problem": "Verify the frequency and voltage values of UK mains electricity.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the standard voltage for UK mains electricity?",
          "answer": "230",
          "feedback": "Correct! The standard voltage is about 230 V."
        },
        {
          "id": "q2",
          "prompt": "What is the frequency of the UK mains electricity supply?",
          "answer": "50",
          "feedback": "Yes! The frequency is 50 Hz."
        }
      ]
    }
  },
  "step5": {
    "title": "Function of Wires in a Three-Pin Plug",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Live wire:</strong> carries the current to the appliance, alternating voltage at about 230 V.<br/><strong>Neutral wire:</strong> completes the electrical circuit and carries current away, connected to earth at the power station.<br/><strong>Earth wire:</strong> a safety wire carrying current only if there is a fault, preventing electric shocks.<br/>The correct fuse rating protects the appliance by breaking the circuit if the current is too high.</p>",
    "diagramHtml": "<svg viewBox='0 0 350 200' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='10' y='50' width='330' height='100' fill='#f0f4c3' stroke='#8bc34a' stroke-width='3'/>\n  <circle cx='75' cy='100' r='20' fill='#d32f2f'/>\n  <text x='75' y='105' font-family='sans-serif' text-anchor='middle' fill='#fff' font-weight='bold' font-size='14'>Live</text>\n  <line x1='95' y1='100' x2='140' y2='100' stroke='#d32f2f' stroke-width='3' />\n  <circle cx='200' cy='100' r='20' fill='#1976d2'/>\n  <text x='200' y='105' font-family='sans-serif' text-anchor='middle' fill='#fff' font-weight='bold' font-size='14'>Neutral</text>\n  <line x1='220' y1='100' x2='265' y2='100' stroke='#1976d2' stroke-width='3' />\n  <circle cx='310' cy='100' r='20' fill='#388e3c'/>\n  <text x='310' y='105' font-family='sans-serif' text-anchor='middle' fill='#fff' font-weight='bold' font-size='14'>Earth</text>\n  <text x='170' y='160' font-family='sans-serif' font-size='12' fill='#555'>Fuse near live wire (protection)</text>\n  <line x1='75' y1='120' x2='75' y2='150' stroke='#d32f2f' stroke-width='2' stroke-dasharray='4,4'/>\n</svg>",
    "workedExample": {
      "title": "Worked Example: Fuse Rating Selection",
      "problem": "An appliance has a maximum current rating of 5 A. Suggest an appropriate fuse rating for safety.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Should the fuse rating be higher, equal, or lower than the maximum appliance current?",
          "answer": "higher",
          "feedback": "Correct! Fuse rating should be just above the appliance max current to avoid nuisance blowing."
        },
        {
          "id": "q2",
          "prompt": "Pick a suitable fuse rating from these options: 3 A, 5 A, 7 A",
          "answer": "7",
          "feedback": "Correct! A 7 A fuse is appropriate for a 5 A appliance."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain the differences between direct and alternating potential difference, including examples and describe the function of each wire in a UK three-pin plug, with appropriate reasoning about fuse ratings.</span>",
      "hint": "Remember to mention polarity, current direction, mains voltage/frequency, and safety features of wires and fuses.",
      "mustHaveKeywords": ["direct potential difference", "alternating potential difference", "live wire", "neutral wire", "earth wire", "fuse rating", "230 V", "50 Hz"],
      "optionalKeywords": ["polarity", "current direction", "safety", "protection"],
      "modelAnswer": "<span>Direct potential difference (d.c.) supplies current that flows in one direction with constant polarity; examples include batteries. Alternating potential difference (a.c.) reverses direction periodically, causing current to flow back and forth as in UK mains electricity, which has a voltage of about 230 V and frequency of 50 Hz. In a three-pin plug, the live wire carries current to the appliance, the neutral wire completes the circuit by carrying current away, and the earth wire provides a safety path in faults to prevent electric shocks. A fuse with an appropriate rating (slightly above the appliance's maximum current) protects the appliance by breaking the circuit if the current becomes too high.</span>",
      "scaffoldPrompts": [
        "Define direct potential difference and give an example.",
        "Define alternating potential difference with key numerical values.",
        "Describe the role of the live wire.",
        "Describe the role of the neutral wire.",
        "Describe the role of the earth wire.",
        "Explain how fuse ratings protect appliances."
      ]
    }
  }
};