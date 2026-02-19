window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.1.1.4 - Power",
  "strapline": "Understanding power as the rate of energy transfer and calculating it using key equations.",
  "learningObjectives": [
    "Students should understand power as the rate of energy transfer and learn to calculate power using the equations P = E/t and P = W/t (Physics 6.1.1.4)",
    "Students should understand the watt as the unit of power equivalent to one joule per second (Physics 6.1.1.4)"
  ],
  "keyFormulas": [
    "P = E / t (Power equals energy transferred divided by time)",
    "P = W / t (Power equals work done divided by time)",
    "1 W = 1 J/s (One watt is one joule per second)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#e6f2ff' stroke='#004080' stroke-width='2'/><text x='200' y='90' font-family='Arial' font-size='16' fill='#004080' text-anchor='middle'>Power Flow Diagram</text><line x1='70' y1='150' x2='330' y2='150' stroke='#007acc' stroke-width='6' stroke-linecap='round'/><text x='200' y='170' font-family='Arial' font-size='14' fill='#004080' text-anchor='middle'>Energy transferred quickly or slowly</text><circle cx='100' cy='150' r='15' fill='#007acc' /><text x='100' y='150' font-family='Arial' font-size='12' fill='#ffffff' text-anchor='middle' alignment-baseline='middle'>Energy</text><circle cx='300' cy='150' r='15' fill='#007acc' /><text x='300' y='150' font-family='Arial' font-size='12' fill='#ffffff' text-anchor='middle' alignment-baseline='middle'>Device</text></svg>",
  "step1": {
    "title": "Concept: What is Power?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Power is the rate at which energy is transferred or work is done. It answers: <em>How quickly does energy move?</em> A high-power device transfers energy quickly, while a low-power device does it more slowly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling two buckets with water. One bucket is filled with a fast-flow tap (high power), the other one with a slow drip (low power). Both buckets can hold the same water (energy), but the time taken is very different.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Power Conceptually",
      "problem": "If a device transfers 60 joules of energy in 3 seconds, how do you find its power?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the total energy transferred (E) in joules?",
          "answer": "60",
          "feedback": "Correct. The energy transferred is 60 J."
        },
        {
          "id": "q2",
          "prompt": "What is the time taken (t) in seconds?",
          "answer": "3",
          "feedback": "Correct. The time taken is 3 seconds."
        },
        {
          "id": "q3",
          "prompt": "Using P = E/t, calculate the power in watts.",
          "answer": "20",
          "feedback": "Correct. Power P = 60 / 3 = 20 watts."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: The Unit of Power - Watt",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The watt (W) is the SI unit of power. It describes how much energy is transferred per second. One watt equals one joule per second (1 W = 1 J/s). It is named after James Watt, who improved steam engines.</p>",
    "workedExample": {
      "title": "Worked Example: Interpret the Watt",
      "problem": "If a toaster uses 800 watts, how many joules of energy does it transfer each second?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the power rating (P) of the toaster in watts?",
          "answer": "800",
          "feedback": "Correct. The toaster's power is 800 W."
        },
        {
          "id": "q2",
          "prompt": "Using the definition of watt, how many joules does it transfer per second?",
          "answer": "800",
          "feedback": "Correct. 800 W means 800 J/s."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Power Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Power can be calculated using two equations: <strong>P = E / t</strong> (power equals energy transferred divided by time) and <strong>P = W / t</strong> (power equals work done divided by time). Since work done is a form of energy transfer, both equations give the same result.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you lift a box (work done) or transfer heat energy over time, both calculate power — just two ways to measure the same rate of energy change.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using Both Power Equations",
      "problem": "A worker does 1500 J of work in 30 seconds. Calculate the power using the work equation.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the work done (W) in joules?",
          "answer": "1500",
          "feedback": "Correct. The work done is 1500 J."
        },
        {
          "id": "q2",
          "prompt": "What is the time taken (t) in seconds?",
          "answer": "30",
          "feedback": "Correct. The time taken is 30 seconds."
        },
        {
          "id": "q3",
          "prompt": "Calculate the power P = W/t in watts.",
          "answer": "50",
          "feedback": "Correct. Power P = 1500 / 30 = 50 W."
        }
      ]
    }
  },
  "step4": {
    "title": "Example Calculation: Energy Transfer with P = E/t",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let’s calculate power when we know the energy transferred and the time taken.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Power",
      "problem": "An electric kettle transfers 24000 J in 120 seconds. Calculate its power output.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the energy transferred (E) in joules:",
          "answer": "24000",
          "feedback": "Good, the energy is 24000 J."
        },
        {
          "id": "q2",
          "prompt": "Enter the time taken (t) in seconds:",
          "answer": "120",
          "feedback": "Correct, the time is 120 seconds."
        },
        {
          "id": "q3",
          "prompt": "Calculate the power (P = E/t) in watts:",
          "answer": "200",
          "feedback": "Correct! Power is 24000 ÷ 120 = 200 W."
        }
      ]
    }
  },
  "step5": {
    "title": "Example Calculation: Work Done with P = W/t",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the work done and time to find power when lifting or moving objects.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='100' y='80' width='60' height='60' fill='#ffd966' stroke='#996600' stroke-width='2'/><line x1='130' y1='80' x2='130' y2='40' stroke='#996600' stroke-width='4' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6' fill='#996600' /></marker></defs><text x='130' y='110' font-family='Arial' font-size='14' fill='#996600' text-anchor='middle'>Box</text><text x='130' y='30' font-family='Arial' font-size='14' fill='#996600' text-anchor='middle'>Force Up</text></svg>",
    "workedExample": {
      "title": "Worked Example: Power in Lifting Work",
      "problem": "A person lifts a crate doing 900 J of work in 15 seconds. Calculate the power output.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the work done (W) in joules:",
          "answer": "900",
          "feedback": "Correct! Work done is 900 J."
        },
        {
          "id": "q2",
          "prompt": "Enter the time taken (t) in seconds:",
          "answer": "15",
          "feedback": "Good. Time taken is 15 seconds."
        },
        {
          "id": "q3",
          "prompt": "Calculate power (P = W/t) in watts:",
          "answer": "60",
          "feedback": "Yes! Power = 900 ÷ 15 = 60 W."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>An electric motor does 5000 J of work in 20 seconds. Explain how to calculate the power output of the motor, including the units and meaning of the result.</span>",
      "hint": "Remember to use the equation P = W/t. Define work done and power with units.",
      "mustHaveKeywords": ["power", "work done", "time", "watts", "joules", "seconds"],
      "optionalKeywords": ["energy transfer", "rate"],
      "modelAnswer": "<span>Power is the rate at which work is done or energy is transferred. Using the formula P = W / t, substitute the given values: work done W = 5000 joules and time t = 20 seconds. Calculate power as P = 5000 J ÷ 20 s = 250 watts (W). This means the motor transfers energy at a rate of 250 joules every second.</span>",
      "scaffoldPrompts": ["What is the equation for power involving work and time?", "What values do you substitute into the equation?", "How do you calculate the numeric answer?", "What units does power have and what do they mean?"]
    }
  }
};