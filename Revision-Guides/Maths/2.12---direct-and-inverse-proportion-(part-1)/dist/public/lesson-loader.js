window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.12 - Direct and inverse proportion (Part 1)",
  "strapline": "Understanding direct proportion relationships, finding constants, and solving related real-world problems.",
  "learningObjectives": [
    "Students should understand direct proportion where y = kx and identify proportional relationships from graphs, tables and contexts (Maths 2.12)",
    "Students should be able to find constants of proportionality in direct proportion situations (Maths 2.12)",
    "Students should be able to solve real-world problems involving direct proportion (Maths 2.12)"
  ],
  "keyFormulas": [
    "y = kx (Direct Proportion formula)",
    "k = y / x (Constant of proportionality)",
    "Gradient of y against x = k (Graph of direct proportion)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='350' y2='50' stroke='#007ACC' stroke-width='3' /><line x1='50' y1='50' x2='50' y2='250' stroke='#333' /><line x1='50' y1='250' x2='350' y2='250' stroke='#333' /><text x='360' y='260' font-family='sans-serif' font-size='14'>x</text><text x='40' y='40' font-family='sans-serif' font-size='14'>y</text><text x='200' y='280' font-family='sans-serif' font-size='16' fill='#007ACC'>y = kx</text><circle cx='50' cy='250' r='4' fill='#007ACC' /><text x='30' y='275' font-family='sans-serif' font-size='14' fill='#333'>(0,0)</text></svg>",
  "step1": {
    "title": "Concept: Understanding Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct proportion means that when one variable increases, the other increases at a constant rate. This is shown by the formula <strong>y = kx</strong>, where <em>k</em> is the constant of proportionality.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of filling a car with petrol. If the cost (<em>y</em>) is directly proportional to the amount of petrol (<em>x</em>), then doubling the petrol doubles the cost.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Direct Proportion",
      "problem": "Is the relationship between y and x direct proportion when y = 3x? Let's check.",
      "questions": [
        {
          "id": "q1",
          "prompt": "If x = 2, what is y?",
          "answer": "6",
          "feedback": "Correct. y = 3 × 2 = 6."
        },
        {
          "id": "q2",
          "prompt": "If x doubles from 2 to 4, what happens to y?",
          "answer": "12",
          "feedback": "Correct. y doubles from 6 to 12, showing direct proportion."
        }
      ]
    }
  },
  "step2": {
    "title": "Key Concept: Constant of Proportionality (k)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The constant <strong>k</strong> is the fixed multiplier in the direct proportion formula <em>y = kx</em>. It represents the ratio between y and x and stays the same for all pairs of values.</p>",
    "workedExample": {
      "title": "Worked Example: Finding k",
      "problem": "If y = 15 when x = 5, what is the constant of proportionality k?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate k using the formula k = y / x.",
          "answer": "3",
          "feedback": "Correct. k = 15 ÷ 5 = 3."
        }
      ]
    }
  },
  "step3": {
    "title": "Identifying Direct Proportion from Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The graph of y against x is a straight line through the origin (0,0) for direct proportion. The gradient of this line equals <em>k</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Graph Identification",
      "problem": "Look at a graph showing points (1, 2), (2, 4), (3, 6). Is this a direct proportion graph?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the graph pass through the origin (0,0)? (yes or no)",
          "answer": "yes",
          "feedback": "Correct. The line goes through (0,0)."
        },
        {
          "id": "q2",
          "prompt": "Is the ratio y/x constant for all points?",
          "answer": "yes",
          "feedback": "Correct. y/x = 2 for all points, so it's direct proportion."
        }
      ]
    }
  },
  "step4": {
    "title": "Identifying Direct Proportion from Tables",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In a table showing pairs of (x, y), if the ratio y/x is constant across all values, the variables are directly proportional.</p>",
    "workedExample": {
      "title": "Worked Example: Checking a Table",
      "problem": "Check the following table to see if y is directly proportional to x:<br><br>x | 1 | 2 | 3 | 4<br>y | 5 | 10 | 15 | 20",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y/x for each pair. What should you enter for y/x when x=3?",
          "answer": "5",
          "feedback": "Correct. y/x = 15 ÷ 3 = 5 across all pairs."
        },
        {
          "id": "q2",
          "prompt": "Is y/x constant for all pairs? (yes/no)",
          "answer": "yes",
          "feedback": "Correct, the ratio is constant which means direct proportion."
        }
      ]
    }
  },
  "step5": {
    "title": "Solving Real-World Problems Involving Direct Proportion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct proportion is often used to solve problems where one quantity changes at a constant rate compared to another. Use the equation y = kx and find k to solve the problems.</p>",
    "workedExample": {
      "title": "Worked Example: Cost of Apples",
      "problem": "Apples cost £3 for 2 kg. What is the cost for 5 kg?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the constant of proportionality, cost per 1 kg.",
          "answer": "1.5",
          "feedback": "Correct. £3 ÷ 2 kg = £1.5 per kg."
        },
        {
          "id": "q2",
          "prompt": "Calculate the cost for 5 kg by multiplying the cost per kg by 5.",
          "answer": "7.5",
          "feedback": "Correct. £1.5 × 5 = £7.5."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A car travels at a speed directly proportional to the time driven. If the car travels 90 km in 3 hours, how far will it travel in 5 hours?</span>",
      "hint": "Remember to find the constant of proportionality before calculating the new distance.",
      "mustHaveKeywords": ["direct proportion", "constant of proportionality", "formula y = kx", "distance", "time"],
      "optionalKeywords": ["gradient", "graph", "relationship"],
      "modelAnswer": "<span>Since distance and time are directly proportional, we use the formula distance = k × time. Given distance = 90 km when time = 3 hrs, k = 90 ÷ 3 = 30. For 5 hrs, distance = 30 × 5 = 150 km.</span>",
      "scaffoldPrompts": [
        "Identify the variables and write the direct proportion formula.",
        "Calculate the constant k using the given values.",
        "Use k to find the required distance for 5 hours."
      ]
    }
  }
};