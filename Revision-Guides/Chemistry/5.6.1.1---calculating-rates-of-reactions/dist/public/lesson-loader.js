window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.6.1.1 - Calculating rates of reactions",
  "strapline": "Understanding how to calculate and interpret the rate of chemical reactions using measurements and graphs.",
  "learningObjectives": [
    "Students should be able to calculate the rate of a chemical reaction by measuring the quantity of reactants used or products formed over time using the formula: rate of reaction = amount of reactant used or product formed ÷ time (Chemistry 5.6.1.1)",
    "Students should be able to interpret experimental data to determine reaction rates at different time intervals, including calculating rates from graphs by finding gradients of curves (Chemistry 5.6.1.1)"
  ],
  "keyFormulas": [
    "rate of reaction = amount of reactant used or product formed ÷ time",
    "Units can be g/s (grams per second), cm³/s (cubic centimeters per second), mol/s (moles per second)",
    "Gradient = change in y ÷ change in x (used to find rate from a curve)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='320' height='180' fill='#e6f4ff' stroke='#0057b8' stroke-width='2' rx='10' ry='10'/><line x1='70' y1='180' x2='320' y2='80' stroke='#0073e6' stroke-width='3' /><circle cx='70' cy='180' r='4' fill='#004080'/><circle cx='145' cy='160' r='4' fill='#004080'/><circle cx='220' cy='125' r='4' fill='#004080'/><circle cx='295' cy='80' r='4' fill='#004080'/><text x='30' y='185' font-family='Arial' font-size='14' fill='#004080'>0</text><text x='65' y='200' font-family='Arial' font-size='14' fill='#004080'>time (s)</text><text x='5' y='60' font-family='Arial' font-size='14' fill='#004080' transform='rotate(-90 15,60)'>Volume of gas (cm³)</text></svg>",
  "step1": {
    "title": "Concept: What is the rate of reaction?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>rate of reaction</strong> tells us how fast a chemical reaction happens. It measures the amount of reactant used up or product formed per unit of time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it like filling a glass with water: the rate is how quickly the glass fills up, not just whether it's full or empty.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Rate",
      "problem": "Imagine a reaction produces gas. If 20 cm³ of gas is made in 10 seconds, how quickly is the gas produced on average?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the <strong>amount of product formed</strong>?",
          "answer": "20",
          "feedback": "Correct! 20 cm³ of gas is produced."
        },
        {
          "id": "q2",
          "prompt": "What is the <strong>time interval</strong>?",
          "answer": "10",
          "feedback": "Correct! The time taken is 10 seconds."
        },
        {
          "id": "q3",
          "prompt": "Calculate the rate of reaction (amount ÷ time). Write your answer in cm³/s.",
          "answer": "2",
          "feedback": "Well done! 20 cm³ ÷ 10 s = 2 cm³/s."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Using the rate formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The formula for calculating rate is:<br><em>rate of reaction = amount of reactant used or product formed ÷ time</em>. The units depend on the quantities you measure, for example grams per second (g/s) or cubic centimeters per second (cm³/s).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like calculating your speed as distance travelled divided by time taken.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Rate calculation with mass",
      "problem": "A reaction uses 5 grams of a reactant in 20 seconds. Find the reaction rate in g/s.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How much reactant is used?",
          "answer": "5",
          "feedback": "Correct! 5 grams was used."
        },
        {
          "id": "q2",
          "prompt": "How much time does it take?",
          "answer": "20",
          "feedback": "Correct! 20 seconds is the time interval."
        },
        {
          "id": "q3",
          "prompt": "Calculate the rate of reaction (amount ÷ time) in g/s.",
          "answer": "0.25",
          "feedback": "Great! 5 g ÷ 20 s = 0.25 g/s."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Interpreting reaction rates from graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Graphs can show how the amount of product changes over time. The <strong>gradient</strong> (or slope) of the graph at any point gives the <em>instantaneous rate of reaction</em> at that time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine driving a car. The steepness of the road on a graph tells you your speed at that moment.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding gradient from graph",
      "problem": "Using the graph showing gas volume over time, calculate the gradient between two points (t=2s, vol=12cm³) and (t=6s, vol=28cm³).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the change in volume (Δy)?",
          "answer": "16",
          "feedback": "Correct! 28 cm³ - 12 cm³ = 16 cm³."
        },
        {
          "id": "q2",
          "prompt": "What is the change in time (Δx)?",
          "answer": "4",
          "feedback": "Correct! 6 s - 2 s = 4 s."
        },
        {
          "id": "q3",
          "prompt": "Calculate the gradient (Δy ÷ Δx). What is the rate in cm³/s?",
          "answer": "4",
          "feedback": "Well done! 16 cm³ ÷ 4 s = 4 cm³/s."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Gradient of a curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For curved graphs, the gradient at a point is found by drawing a tangent line — a straight line touching the curve at only that point — and calculating its slope.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a hill with varying steepness: the gradient changes depending on where you stand.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating gradient from a curve tangent",
      "problem": "You draw a tangent line on a curve between points (3 s, 15 cm³) and (5 s, 23 cm³). Find the rate of reaction at 4 seconds.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the change in volume (Δy) between these points.",
          "answer": "8",
          "feedback": "Correct! 23 cm³ - 15 cm³ = 8 cm³."
        },
        {
          "id": "q2",
          "prompt": "Calculate the change in time (Δx).",
          "answer": "2",
          "feedback": "Correct! 5 s - 3 s = 2 s."
        },
        {
          "id": "q3",
          "prompt": "Find the gradient (Δy ÷ Δx), which gives the rate at 4 seconds.",
          "answer": "4",
          "feedback": "Great! 8 cm³ ÷ 2 s = 4 cm³/s."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following best describes the rate of reaction?</span>",
        "options": [
          {"id": "a", "label": "<span>The total amount of product after reaction finishes</span>", "isCorrect": false, "explanation": "This describes total product, not the rate."},
          {"id": "b", "label": "<span>The change in amount of reactant or product per unit time</span>", "isCorrect": true, "explanation": "Correct! Rate measures how quickly changes happen over time."},
          {"id": "c", "label": "<span>The time taken for product to form</span>", "isCorrect": false, "explanation": "Time alone does not describe rate unless combined with amount."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What does the gradient of a tangent line on a reaction graph represent?</span>",
        "options": [
          {"id": "a", "label": "<span>Average rate over entire reaction</span>", "isCorrect": false, "explanation": "Gradient of tangent is instantaneous rate, not average."},
          {"id": "b", "label": "<span>Instantaneous rate of reaction at that time</span>", "isCorrect": true, "explanation": "Correct! Tangent gradient shows rate at that point."},
          {"id": "c", "label": "<span>Total change in product formed</span>", "isCorrect": false, "explanation": "Total change is represented by the height of the curve, not its slope."}
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A student investigates the reaction between magnesium ribbon and hydrochloric acid. They measure the volume of hydrogen gas produced every 10 seconds over 50 seconds and record the following data:<br><br>Time (s): 0, 10, 20, 30, 40, 50<br>Volume of gas (cm³): 0, 15, 27, 35, 40, 42<br><br>Calculate the average rate of reaction between 10 and 30 seconds. Then calculate the instantaneous rate at 20 seconds from the graph by finding the gradient of the curve.</span>",
      "hint": "Calculate change in gas volume and time. For gradient, draw a tangent line or approximate by finding the slope between close points around 20 seconds.",
      "mustHaveKeywords": ["rate of reaction", "amount of product", "time", "gradient", "instantaneous rate"],
      "optionalKeywords": ["average rate", "graph", "volume of gas", "tangent", "slope"],
      "modelAnswer": "<span>The average rate between 10 and 30 seconds is calculated by dividing the change in volume by the change in time: (35 cm³ - 15 cm³) ÷ (30 s - 10 s) = 20 cm³ ÷ 20 s = 1.0 cm³/s. The instantaneous rate at 20 seconds is estimated by finding the gradient of the curve at that point. By approximating the slope between 10 s (15 cm³) and 30 s (35 cm³), the gradient is also 1.0 cm³/s. This shows that at 20 seconds, the rate of reaction is approximately 1.0 cm³/s.</span>",
      "scaffoldPrompts": [
        "Step 1: Find volume change between 10s and 30s",
        "Step 2: Find time difference",
        "Step 3: Calculate average rate using change in volume ÷ change in time",
        "Step 4: Identify points near 20s on the graph",
        "Step 5: Calculate gradient between these points to estimate instantaneous rate"
      ]
    }
  }
};