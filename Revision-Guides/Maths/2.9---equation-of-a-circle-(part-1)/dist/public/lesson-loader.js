window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.9 - Equation of a circle (Part 1)",
  "strapline": "Learn how to write and interpret the equation of a circle on the coordinate plane.",
  "learningObjectives": [
    "Students should be able to write the equation of a circle in the form (x-a)² + (y-b)² = r², where (a,b) represents the centre and r is the radius (Maths 2.9)",
    "Students should be able to identify the centre and radius of a circle from its equation in the form (x-a)² + (y-b)² = r² (Maths 2.9)",
    "Students should be able to use the equation of a circle to identify key features of circles on coordinate axes (Maths 2.9)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='80' fill='none' stroke='#333' stroke-width='2'/><circle cx='200' cy='150' r='3' fill='#333'/><line x1='200' y1='150' x2='280' y2='150' stroke='#555' stroke-dasharray='4 2'/><text x='240' y='140' font-family='sans-serif' font-size='14' fill='#333'>(a,b)</text><text x='230' y='170' font-family='sans-serif' font-size='14' fill='#333'>r</text></svg>",
  "step1": {
    "title": "Concept: Equation of a Circle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A circle can be written using the formula <strong>(x - a)² + (y - b)² = r²</strong>, where <em>(a, b)</em> is the centre and <em>r</em> is the radius. Every point <em>(x, y)</em> on the circle satisfies this equation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the centre as the hub of a bicycle wheel and the radius as the length of the spokes. Every point on the rim is exactly one spoke length away from the hub.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Centre and Radius",
      "problem": "Given the circle equation (x - 3)² + (y + 4)² = 25, find the centre and the radius.",
      "questions": [
        {
          "id": "we1-q1",
          "prompt": "What is the x-coordinate of the centre?",
          "answer": "3",
          "feedback": "Correct! The centre's x-coordinate is +3 because of (x - 3)."
        },
        {
          "id": "we1-q2",
          "prompt": "What is the y-coordinate of the centre?",
          "answer": "-4",
          "feedback": "Correct! The y-coordinate is -4 because (y + 4) means y - (-4)."
        },
        {
          "id": "we1-q3",
          "prompt": "What is the radius r?",
          "answer": "5",
          "feedback": "Correct! Since r² = 25, r = √25 = 5."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Signs in the Equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In the equation <strong>(x - a)² + (y - b)² = r²</strong>, notice the minus signs inside the brackets. If the term is (x - 3), the centre's x-coordinate is +3; if it is (y + 4), the centre's y-coordinate is -4.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like subtracting a negative number adds, the signs in the brackets point to the opposite value for the centre coordinates.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find Centre from Equation",
      "problem": "Find the centre from (x + 2)² + (y - 5)² = 16.",
      "questions": [
        {
          "id": "we2-q1",
          "prompt": "What is the x-coordinate of the centre?",
          "answer": "-2",
          "feedback": "Exactly! (x + 2) means the centre's x-coordinate is -2."
        },
        {
          "id": "we2-q2",
          "prompt": "What is the y-coordinate of the centre?",
          "answer": "5",
          "feedback": "Correct! (y - 5) means y-coordinate is +5."
        }
      ]
    }
  },
  "step3": {
    "title": "Interactive Practice: Write Equation from Centre and Radius",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Given the centre and radius, write the equation of the circle in <strong>(x - a)² + (y - b)² = r²</strong> form.</p>",
    "workedExample": {
      "title": "Worked Example: Write Circle Equation",
      "problem": "Centre is (1, -2) and radius is 4. Write the circle's equation.",
      "questions": [
        {
          "id": "we3-q1",
          "prompt": "Write the term for (x - a) using your centre x-value.",
          "answer": "(x - 1)",
          "feedback": "Correct! The centre x-coordinate is +1 so (x - 1)."
        },
        {
          "id": "we3-q2",
          "prompt": "Write the term for (y - b) using your centre y-value.",
          "answer": "(y + 2)",
          "feedback": "Correct! The centre y-coordinate is -2 so (y + 2)."
        },
        {
          "id": "we3-q3",
          "prompt": "Write the full equation including r².",
          "answer": "(x - 1)² + (y + 2)² = 16",
          "feedback": "Great! Radius 4 squared is 16."
        }
      ]
    }
  },
  "step4": {
    "title": "Key Concept Check: Centre and Radius Identification",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "The <span class=\"font-semibold\">_____</span> is the fixed middle point of a circle.",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "centre", "label": "centre", "isCorrect": true, "feedback": "Correct! The centre is the middle point."},
              {"value": "radius", "label": "radius", "isCorrect": false, "feedback": "Incorrect, the radius is a length, not a point."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "The <span class=\"font-semibold\">_____</span> is the distance from the centre to the edge of the circle.",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "radius", "label": "radius", "isCorrect": true, "feedback": "Correct! The radius is the distance from centre to edge."},
              {"value": "diameter", "label": "diameter", "isCorrect": false, "feedback": "Try again, diameter is twice the radius."}
            ]
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is the correct centre and radius for the circle (x - 5)² + (y + 3)² = 36?</span>",
        "options": [
          {"id": "a", "label": "<span>Centre: (5, -3), Radius: 6</span>", "isCorrect": true, "explanation": "Correct: The radius is √36 = 6, centre coordinates opposite the signs in brackets."},
          {"id": "b", "label": "<span>Centre: (-5, 3), Radius: 36</span>", "isCorrect": false, "explanation": "Incorrect: The radius is the square root of 36, not 36 itself and centre signs are reversed."},
          {"id": "c", "label": "<span>Centre: (5, 3), Radius: 6</span>", "isCorrect": false, "explanation": "Incorrect: The y-coordinate sign is reversed, it should be -3."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What does the equation (x + 1)² + (y - 2)² = 9 represent?</span>",
        "options": [
          {"id": "a", "label": "<span>Circle with centre (-1, 2) and radius 3</span>", "isCorrect": true, "explanation": "Correct! Radius is √9=3 and centre is opposite signs."},
          {"id": "b", "label": "<span>Circle with centre (1, -2) and radius 9</span>", "isCorrect": false, "explanation": "Incorrect radius and centre interpretation."}
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Write the equation of a circle with centre at (–2, 3) and radius 7. Then identify its centre and radius from the equation (x + 2)² + (y - 3)² = 49.</span>",
      "hint": "Remember to write the centre coordinates with opposite signs inside the brackets and square the radius for the right side.",
      "mustHaveKeywords": ["(x - a)² + (y - b)² = r²", "centre", "radius", "square root"],
      "optionalKeywords": ["coordinate plane", "distance"],
      "modelAnswer": "<span>The equation with centre (–2, 3) and radius 7 is written as (x + 2)² + (y - 3)² = 49 because the signs flip inside the brackets and 7 squared is 49. From the equation (x + 2)² + (y - 3)² = 49, the centre is (–2, 3) and the radius is √49 = 7.</span>",
      "scaffoldPrompts": ["Identify the signs for centre coordinates carefully.", "Square the radius to form the right side of the equation.", "Reverse the signs in the equation to find the centre.", "Take the square root of the right side to find the radius."]
    }
  }
};