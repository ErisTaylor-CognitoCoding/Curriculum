window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.12 - Direct and inverse proportion",
  "strapline": "Understand and apply direct and inverse proportion relationships, using the proportionality symbol ∝ to solve related problems.",
  "learningObjectives": [
    "Students should recognise and identify direct proportion relationships between two quantities (Maths 2.12)",
    "Students should recognise and identify inverse proportion relationships between two quantities (Maths 2.12)",
    "Students should use the proportionality symbol ∝ to express proportional relationships and solve problems involving direct and inverse proportion (Maths 2.12)"
  ],
  "keyFormulas": [
    "y ∝ x (Direct Proportion) means y = kx",
    "y ∝ 1/x (Inverse Proportion) means y = k/x",
    "k is the constant of proportionality"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='40' y='40' width='150' height='150' fill='#e0f7fa' stroke='#00796b' stroke-width='2' rx='10' ry='10'/>  <text x='115' y='20' font-family='sans-serif' font-size='16' fill='#00796b' text-anchor='middle'><strong>Direct Proportion</strong></text>  <line x1='50' y1='180' x2='180' y2='70' stroke='#00796b' stroke-width='3' />  <circle cx='50' cy='180' r='5' fill='#004d40' />  <circle cx='180' cy='70' r='5' fill='#004d40' />  <text x='120' y='30' font-family='sans-serif' font-size='14' fill='#00796b' text-anchor='middle'>y ∝ x</text>  <rect x='210' y='40' width='150' height='150' fill='#fff3e0' stroke='#ef6c00' stroke-width='2' rx='10' ry='10'/>  <text x='285' y='20' font-family='sans-serif' font-size='16' fill='#ef6c00' text-anchor='middle'><strong>Inverse Proportion</strong></text>   <path d='M 220 170 Q 280 80 350 200' stroke='#ef6c00' stroke-width='3' fill='none' />  <circle cx='220' cy='170' r='5' fill='#e65100' />  <circle cx='350' cy='200' r='5' fill='#e65100' />  <text x='285' y='30' font-family='sans-serif' font-size='14' fill='#ef6c00' text-anchor='middle'>y ∝ 1/x</text>  </svg>",
  "step1": {
    "title": "Introduction to Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two quantities are in <strong>direct proportion</strong> when they change at the same rate. If one quantity doubles, the other doubles too.</p><p>This means y ∝ x, or y = kx, where k is a constant.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine buying apples where the cost is directly proportional to the number of apples bought. If the price for one apple is constant, buying more apples means paying more.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Direct Proportion - Cost of Apples",
      "problem": "The cost of apples (£) is directly proportional to the number of apples bought. If 3 apples cost £6, find the cost of 5 apples.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of k (constant of proportionality) in y = kx, based on 3 apples costing £6?",
          "answer": "2",
          "feedback": "Correct! k = cost/number = 6/3 = 2."
        },
        {
          "id": "q2",
          "prompt": "Using k, what is the cost for 5 apples?",
          "answer": "10",
          "feedback": "Correct! Cost = 2 × 5 = £10."
        }
      ]
    }
  },
  "step2": {
    "title": "Introduction to Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two quantities are in <strong>inverse proportion</strong> when one increases as the other decreases. If one quantity doubles, the other halves.</p><p>This means y ∝ 1/x, or y = k/x, where k is a constant.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about the time taken to complete a journey when speed changes. The faster you go, the less time it takes — time is inversely proportional to speed.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Inverse Proportion - Journey Time",
      "problem": "The time (in hours) taken to travel a fixed distance is inversely proportional to the speed (in km/h). If the journey takes 4 hours at 30 km/h, find the time at 60 km/h.",
      "questions": [
        {
          "id": "q3",
          "prompt": "Find the constant of proportionality k using y = k/x, where y is time and x is speed.",
          "answer": "120",
          "feedback": "Correct! k = time × speed = 4 × 30 = 120."
        },
        {
          "id": "q4",
          "prompt": "Using k, find the time taken at 60 km/h.",
          "answer": "2",
          "feedback": "Correct! Time = 120/60 = 2 hours."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding the Proportionality Symbol (∝)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The symbol <strong>∝</strong> means 'is proportional to'. It shows a relationship between two variables without explicitly showing the constant of proportionality.</p><p>Example: y ∝ x means y changes as x does but needs k to find exact values.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of ∝ as a shortcut to say: 'y depends on x.' Like saying speed ∝ distance/time.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Expressing Proportionality",
      "problem": "Express the relationship between the amount of fuel used (y) and distance travelled (x) when fuel used increases as distance increases.",
      "questions": [
        {
          "id": "q5",
          "prompt": "Write a proportionality statement using ∝.",
          "answer": "y ∝ x",
          "feedback": "Correct! Fuel used is directly proportional to distance."
        },
        {
          "id": "q6",
          "prompt": "Write an equation including the constant k.",
          "answer": "y = kx",
          "feedback": "Correct! This shows the exact relationship."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Identify Type of Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Decide whether the two quantities are in direct or inverse proportion from different scenarios.</p>",
    "analogy": null,
    "workedExample": {
      "title": "Practice Example",
      "problem": "For each example, select whether the quantities are in direct or inverse proportion.",
      "questions": [
        {
          "id": "q7",
          "prompt": "The more hours you work, the more money you earn.",
          "answer": "Direct",
          "feedback": "Correct! More hours means more money, a direct proportion."
        },
        {
          "id": "q8",
          "prompt": "The higher the speed of a car, the less time it takes to reach the destination.",
          "answer": "Inverse",
          "feedback": "Correct! Time and speed have an inverse relationship."
        },
        {
          "id": "q9",
          "prompt": "The number of workers and the time taken to complete a job.",
          "answer": "Inverse",
          "feedback": "Correct! More workers means less time, inverse proportion."
        }
      ]
    }
  },
  "step5": {
    "title": "Using Proportions to Solve Problems",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Apply proportions to solve problems by first identifying direct or inverse relationships, then writing equations using y = kx or y = k/x.</p>",
    "analogy": null,
    "workedExample": {
      "title": "Worked Example: Problem Solving",
      "problem": "A recipe uses 2 cups of flour to make 8 cookies. How much flour is needed for 20 cookies?",
      "questions": [
        {
          "id": "q10",
          "prompt": "Is the amount of flour directly or inversely proportional to the number of cookies?",
          "answer": "Direct",
          "feedback": "Correct! More cookies need more flour."
        },
        {
          "id": "q11",
          "prompt": "Find the constant of proportionality k in y = kx (flour = k × number of cookies).",
          "answer": "0.25",
          "feedback": "Correct! k = 2 ÷ 8 = 0.25 cups per cookie."
        },
        {
          "id": "q12",
          "prompt": "Find the flour needed for 20 cookies using the constant k.",
          "answer": "5",
          "feedback": "Correct! Flour = 0.25 × 20 = 5 cups."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A car travels a fixed distance. The time taken (t) to complete the journey is inversely proportional to its speed (s).</span><br><span>Explain how you would find the time taken if the speed is changed.</span>",
      "hint": "Remember to first find the constant of proportionality by using the initial time and speed, then use it to find the new time.",
      "mustHaveKeywords": ["inverse proportion", "constant of proportionality", "t = k/s", "substitute values"],
      "optionalKeywords": ["relationship", "change in speed", "direct relationship between k and distance"],
      "modelAnswer": "<span>Since time t is inversely proportional to speed s, we write t ∝ 1/s which can be expressed as t = k/s where k is a constant. To find k, multiply the initial time by the initial speed. Then substitute the new speed into t = k/s to find the new time.</span>",
      "scaffoldPrompts": [
        "State the inverse proportion relationship using ∝.",
        "Find the constant k from given values.",
        "Write the formula for the new time.",
        "Substitute new speed into the formula.",
        "Calculate the new time."
      ]
    }
  }
};