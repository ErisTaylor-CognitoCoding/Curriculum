window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.9 - Equation of a circle (Part 2)",
  "strapline": "Understanding how to write and manipulate the equation of a circle, and identifying key features from its equation on coordinate axes.",
  "learningObjectives": [
    "Students should be able to write and manipulate the equation of a circle in the form (x-a)² + (y-b)² = r², where (a,b) represents the centre and r is the radius (Maths 2.9)",
    "Students should be able to use the equation (x-a)² + (y-b)² = r² to identify key features of circles on coordinate axes (Maths 2.9)",
    ""
  ],
  "keyFormulas": [
    "Formula 1: (x - a)² + (y - b)² = r² (Equation of a circle)",
    "Formula 2: r = √(r²) (Radius from the equation)",
    "Reminder: In (x-a)², the centre's x-coordinate is +a, not -a"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='80' stroke='#333' stroke-width='2' fill='none'/><circle cx='200' cy='150' r='3' fill='red'/><line x1='200' y1='150' x2='280' y2='150' stroke='blue' stroke-width='2' marker-end='url(#arrowhead)'/><text x='210' y='145' font-family='sans-serif' font-size='16' fill='blue'>(a,b)</text><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='blue' /></marker></defs><text x='120' y='270' font-family='sans-serif' font-size='14' fill='#333'>(x-a)² + (y-b)² = r²</text></svg>",
  "step1": {
    "title": "Concept 1: Circle Equation in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The equation <strong>(x-a)² + (y-b)² = r²</strong> represents a circle centred at <em>(a, b)</em> with radius <em>r</em>. This form makes it easy to see where the circle is located on the coordinate plane and how big it is.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a clock face. The centre of the clock is the centre of the circle (point <em>(a, b)</em>), and the distance from the centre to the edge of the clock (to any number) is the radius <em>r</em>.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying the Equation of a Circle",
      "problem": "Given a circle with centre (3, -2) and radius 5, write its equation.",
      "questions": [
        {
          "id": "ex1-q1",
          "prompt": "What is the value of 'a' (x-coordinate of centre)?",
          "answer": "3",
          "feedback": "Correct! The centre x-coordinate is 3."
        },
        {
          "id": "ex1-q2",
          "prompt": "What is the value of 'b' (y-coordinate of centre)?",
          "answer": "-2",
          "feedback": "Correct! The centre y-coordinate is -2."
        },
        {
          "id": "ex1-q3",
          "prompt": "Write the equation substituting these values without expanding.",
          "answer": "(x-3)^2+(y+2)^2=25",
          "feedback": "Good job! Remember (y - b) with b = -2 becomes (y + 2)."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Centre Coordinates (a, b)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In the equation <em>(x - a)²</em>, the value of <em>a</em> is the x-coordinate of the centre. If the equation has (x - 3)², the centre's x-coordinate is <strong>+3</strong>. It’s the number that makes the bracket zero, not just the sign shown.</p>",
    "workedExample": {
      "title": "Worked Example: Finding the Centre from an Equation",
      "problem": "Given the circle equation (x - 4)² + (y + 5)² = 16, find the centre coordinates.",
      "questions": [
        {
          "id": "ex2-q1",
          "prompt": "What is the value of 'a' from (x - 4)²?",
          "answer": "4",
          "feedback": "Correct! The centre x-coordinate is +4."
        },
        {
          "id": "ex2-q2",
          "prompt": "What is the value of 'b' from (y + 5)²?",
          "answer": "-5",
          "feedback": "Correct! (y + 5)² means y - (-5), so the centre y-coordinate is -5."
        },
        {
          "id": "ex2-q3",
          "prompt": "Write the centre coordinates as (a, b).",
          "answer": "(4, -5)",
          "feedback": "Excellent! The centre is at (4, -5)."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Radius (r) and Working with r²",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The radius <em>r</em> is the distance from the centre to any point on the circle. The equation shows <em>r²</em> on the right side, so to get the radius itself, you take the square root of that number.</p>",
    "workedExample": {
      "title": "Worked Example: Find the Radius",
      "problem": "If the equation of a circle is (x - 1)² + (y + 3)² = 49, what is the radius?",
      "questions": [
        {
          "id": "ex3-q1",
          "prompt": "What is the value of r²?",
          "answer": "49",
          "feedback": "Correct! r² is 49."
        },
        {
          "id": "ex3-q2",
          "prompt": "Find r by taking the square root of 49.",
          "answer": "7",
          "feedback": "Correct! The radius r is 7."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Writing the Equation from Centre and Radius",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the values of <em>a</em>, <em>b</em>, and <em>r</em> to write the full equation of the circle. Remember to write (y - b) with the correct sign!</p>",
    "workedExample": {
      "title": "Worked Example: Write the Circle Equation",
      "problem": "A circle has centre (-2, 6) and radius 4. Write the equation.",
      "questions": [
        {
          "id": "ex4-q1",
          "prompt": "Write down (x - a)² part with the correct sign.",
          "answer": "(x+2)^2",
          "feedback": "Good! Since the centre x is -2, it becomes (x - (-2)) = (x + 2)."
        },
        {
          "id": "ex4-q2",
          "prompt": "Write down (y - b)² part with the correct sign.",
          "answer": "(y-6)^2",
          "feedback": "Correct! The y-coordinate +6 stays as (y - 6)."
        },
        {
          "id": "ex4-q3",
          "prompt": "Write the full equation including r².",
          "answer": "(x+2)^2+(y-6)^2=16",
          "feedback": "Excellent! The radius squared is 4² = 16."
        }
      ]
    }
  },
  "step5": {
    "title": "Practice: Identify Features from an Equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">From the equation of a circle, you can find the centre and radius quickly without graphing.</p>",
    "workedExample": {
      "title": "Worked Example: Identify Centre and Radius",
      "problem": "Given the circle equation (x + 5)² + (y - 7)² = 36, find the centre and radius.",
      "questions": [
        {
          "id": "ex5-q1",
          "prompt": "What is the centre x-coordinate 'a'?",
          "answer": "-5",
          "feedback": "Correct! (x + 5) means a = -5."
        },
        {
          "id": "ex5-q2",
          "prompt": "What is the centre y-coordinate 'b'?",
          "answer": "7",
          "feedback": "Correct! (y - 7) means b = 7."
        },
        {
          "id": "ex5-q3",
          "prompt": "What is r²?",
          "answer": "36",
          "feedback": "Correct! The radius squared is 36."
        },
        {
          "id": "ex5-q4",
          "prompt": "What is the radius r?",
          "answer": "6",
          "feedback": "Exactly! The radius is √36 = 6."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given the equation of a circle (x - 7)² + (y + 4)² = 81, explain how to find the centre and radius of the circle, including the correct signs.</span>",
      "hint": "Remember the signs inside the brackets indicate the opposite sign for the centre coordinates. Use square root to find the radius.",
      "mustHaveKeywords": ["centre", "radius", "square root", "(7, -4)", "9"],
      "optionalKeywords": ["coordinates", "radius squared"],
      "modelAnswer": "<span>The centre is found by looking at the brackets: (x - 7) means the centre x-coordinate is +7, and (y + 4) means the centre y-coordinate is -4. The radius squared is 81, so the radius is the square root of 81, which is 9.</span>",
      "scaffoldPrompts": [
        "Look at the x term inside the bracket and find a",
        "Look at the y term inside the bracket and find b",
        "Identify r² on the right side",
        "Calculate the square root of r² to find r"
      ]
    }
  }
};