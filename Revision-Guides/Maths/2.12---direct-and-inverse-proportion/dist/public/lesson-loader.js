window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.12 - Direct and inverse proportion",
  "strapline": "Understanding how two quantities are related when one changes directly or inversely with the other.",
  "learningObjectives": [
    "Students should recognise and identify direct proportion relationships between two quantities (Maths 2.12)",
    "Students should recognise and identify inverse proportion relationships between two quantities (Maths 2.12)",
    "Students should use the proportionality symbol ∝ to express proportional relationships and solve problems involving direct and inverse proportion (Maths 2.12)"
  ],
  "keyFormulas": [
    "Direct proportion: y ∝ x or y = kx where k is the constant of proportionality",
    "Inverse proportion: y ∝ 1/x or y = k/x where k is the constant of proportionality",
    "Proportionality symbol (∝) means 'is proportional to'"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='140' height='180' fill='#d6eaff' stroke='#000' stroke-width='2'/><rect x='210' y='50' width='140' height='180' fill='#ffd6d6' stroke='#000' stroke-width='2'/><text x='120' y='40' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='14'>Direct Proportion</text><text x='280' y='40' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='14'>Inverse Proportion</text><text x='120' y='260' font-family='Arial' font-size='12'>If x doubles, y doubles</text><text x='280' y='260' font-family='Arial' font-size='12'>If x doubles, y halves</text><line x1='70' y1='220' x2='180' y2='90' stroke='#0077cc' stroke-width='3'/><circle cx='180' cy='90' r='5' fill='#0077cc'/><line x1='210' y1='90' x2='340' y2='220' stroke='#cc3300' stroke-width='3'/><circle cx='210' cy='90' r='5' fill='#cc3300'/></svg>",
  "step1": {
    "title": "Concept: Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two quantities are in <strong>direct proportion</strong> when they increase or decrease at the same rate. This means if one quantity changes, the other changes by the same scale factor. We write this as <em>y ∝ x</em> or <em>y = kx</em> where <em>k</em> is a constant.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you are buying apples where the cost depends directly on how many apples you buy. If you buy twice as many apples, you pay twice the price.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the constant of proportionality",
      "problem": "If y is directly proportional to x and y = 12 when x = 3, find the constant k.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write down the equation to represent the proportionality.",
          "answer": "y = kx",
          "feedback": "Correct. The general formula for direct proportion is y = kx."
        },
        {
          "id": "q2",
          "prompt": "Substitute y = 12 and x = 3 into the equation.",
          "answer": "12 = 3k",
          "feedback": "Correct substitution."
        },
        {
          "id": "q3",
          "prompt": "What is the value of k?",
          "answer": "4",
          "feedback": "Correct. Dividing both sides by 3 gives k = 4."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Inverse Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two quantities are in <strong>inverse proportion</strong> when one increases as the other decreases so their product is constant. This is written as <em>y ∝ 1/x</em> or <em>y = k/x</em>, where <em>k</em> is a constant.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling a tank with water. If you have more pipes (x), the time taken (y) decreases. If you double the number of pipes, the filling time halves.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the constant in inverse proportion",
      "problem": "If y is inversely proportional to x and y = 8 when x = 3, find k.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the equation representing inverse proportion.",
          "answer": "y = k/x",
          "feedback": "Correct. The formula for inverse proportion is y = k/x."
        },
        {
          "id": "q2",
          "prompt": "Substitute the known values y = 8 and x = 3.",
          "answer": "8 = k/3",
          "feedback": "Correct substitution."
        },
        {
          "id": "q3",
          "prompt": "Calculate the value of k.",
          "answer": "24",
          "feedback": "Correct. Multiply both sides by 3 to find k = 24."
        }
      ]
    }
  },
  "step3": {
    "title": "Using the Proportionality Symbol (∝)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The symbol ∝ means '<em>is proportional to</em>'. For example, <em>y ∝ x</em> means y changes in direct proportion to x. Similarly, <em>y ∝ 1/x</em> means y changes in inverse proportion to x. This helps us write relationships before replacing ∝ with an equation that includes a constant.</p>",
    "workedExample": {
      "title": "Worked Example: Express the relationship using ∝",
      "problem": "Speed is directly proportional to the distance travelled for a fixed time period. Write this relationship using the proportionality symbol.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Choose the correct proportionality statement.",
          "answer": "speed ∝ distance",
          "feedback": "Correct. Speed is directly proportional to distance for fixed time."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Calculation: Direct Proportion Problem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use your knowledge of direct proportion to find unknown values by calculating the constant of proportionality.</p>",
    "workedExample": {
      "title": "Scenario: A car travels 60 km in 1 hour. How far does it travel in 3 hours at the same speed?",
      "problem": "Distance (d) is directly proportional to time (t). Given d = 60 when t = 1, find d when t = 3.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the constant of proportionality k using d = k × t.",
          "answer": "60",
          "feedback": "Correct. k = 60 here."
        },
        {
          "id": "q2",
          "prompt": "Calculate d when t = 3 using d = kt.",
          "answer": "180",
          "feedback": "Correct. 60 × 3 = 180 km."
        }
      ]
    }
  },
  "step5": {
    "title": "Interactive Calculation: Inverse Proportion Problem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Solve inverse proportion problems by finding the constant and then using it to find unknowns.</p>",
    "workedExample": {
      "title": "Scenario: It takes 4 workers 6 hours to build a wall. How many hours will 12 workers take to build the same wall, assuming work is inversely proportional to workers?",
      "problem": "Work time (h) is inversely proportional to number of workers (w). Given h = 6 when w = 4, find h when w = 12.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the constant k using h = k/w.",
          "answer": "24",
          "feedback": "Correct. k = 6 × 4 = 24."
        },
        {
          "id": "q2",
          "prompt": "Calculate h when w = 12 using h = k/w.",
          "answer": "2",
          "feedback": "Correct. 24 ÷ 12 = 2 hours."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A biker finds that the time taken to travel a fixed distance is inversely proportional to their speed. When they cycle at 10 km/h, it takes 3 hours. Calculate the time it takes if the biker increases speed to 15 km/h. Explain the steps used.</span>",
      "hint": "Remember to first find the constant of proportionality and then use it to find the unknown value.",
      "mustHaveKeywords": ["inverse proportion", "constant of proportionality", "formula h = k / w or t = k / s"],
      "optionalKeywords": ["units", "substitution"],
      "modelAnswer": "<span>The time taken (t) is inversely proportional to speed (s), so t = k / s. Given t = 3 when s = 10, find k = t × s = 3 × 10 = 30. Then find t when s = 15 by t = 30 / 15 = 2 hours.</span>",
      "scaffoldPrompts": ["Write the formula for inverse proportion.", "Calculate the constant k.", "Substitute the new speed to find the new time."]
    }
  }
};