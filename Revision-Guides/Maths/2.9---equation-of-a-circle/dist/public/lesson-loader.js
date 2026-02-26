window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.9 - Equation of a circle",
  "strapline": "Learn to understand, identify, and form the equation of a circle using its centre and radius.",
  "learningObjectives": [
    "Students should understand and use the equation of a circle with centre (a, b) and radius r in the form (x-a)² + (y-b)² = r² (Maths 2.9)",
    "Students should identify the centre and radius of a circle from its equation (Maths 2.9)",
    "Students should form the equation of a circle given information about its centre and radius on coordinate grids (Maths 2.9)"
  ],
  "keyFormulas": [
    "Concept Formula: (x - a)² + (y - b)² = r² (Equation of a circle)",
    "Radius definition: r = distance from centre to any point on the circle",
    "Centre coordinates: (a, b)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='80' stroke='#2a9d8f' fill='none' stroke-width='3'/><line x1='200' y1='150' x2='280' y2='150' stroke='#e76f51' stroke-width='2' marker-end='url(#arrow)'/><circle cx='200' cy='150' r='3' fill='#264653'/><text x='210' y='160' font-family='sans-serif' font-size='14' fill='#264653'>(a, b)</text><text x='240' y='145' font-family='sans-serif' font-size='14' fill='#e76f51'>r</text><defs><marker id='arrow' markerWidth='6' markerHeight='6' refX='5' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 L1,3 Z' fill='#e76f51'/></marker></defs></svg>",
  "step1": {
    "title": "Understanding the Centre of a Circle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The centre of a circle is the fixed point (a, b) where all points on the circle's edge are the same distance away. In the equation <em>(x - a)² + (y - b)² = r²</em>, the values a and b represent the x and y coordinates of the centre.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the centre as the hub of a bicycle wheel. The spokes (radius lines) stretch out evenly to the rim (circle edge).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying the Centre",
      "problem": "Given the equation <strong>(x - 3)² + (y + 2)² = 25</strong>, find the centre of the circle.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of 'a' in the equation?",
          "answer": "3",
          "feedback": "Correct! 'a' is the number 3, from (x - 3)."
        },
        {
          "id": "q2",
          "prompt": "What is the value of 'b' in the equation?",
          "answer": "-2",
          "feedback": "Correct! 'b' is -2, since the equation uses (y + 2) which is (y - (-2))."
        },
        {
          "id": "q3",
          "prompt": "What are the coordinates of the centre (a, b)?",
          "answer": "3, -2",
          "feedback": "Correct! The centre is at (3, -2)."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding the Radius of a Circle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The radius is the distance from the centre (a, b) to any point on the circle. The radius is represented by <em>r</em> in the equation <em>(x - a)² + (y - b)² = r²</em>. The right side of the equation is the radius squared (<em>r²</em>).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the radius as the length of a spoke on the bike wheel, stretching from the hub (centre) to the rim.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Radius",
      "problem": "Given the equation <strong>(x + 1)² + (y - 4)² = 49</strong>, find the radius of the circle.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of r² in the equation?",
          "answer": "49",
          "feedback": "Correct! The right side is r² = 49."
        },
        {
          "id": "q2",
          "prompt": "What is the radius r (evaluate √49)?",
          "answer": "7",
          "feedback": "Correct! The radius r is 7."
        }
      ]
    }
  },
  "step3": {
    "title": "Forming the Equation from Centre and Radius",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If you know the centre (a, b) and radius r of a circle, you can write its equation using <em>(x - a)² + (y - b)² = r²</em>. Just substitute the values of a, b, and r.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like setting a rule based on the fixed distance from the centre to the edge.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Writing the Equation",
      "problem": "Write the equation of a circle with centre at (2, -3) and radius 5.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Substitute the x-centre value (a) into the formula (x - a)²",
          "answer": "x - 2",
          "feedback": "Correct! (x - 2) represents the horizontal distance from the centre."
        },
        {
          "id": "q2",
          "prompt": "Substitute the y-centre value (b) into the formula (y - b)²",
          "answer": "y + 3",
          "feedback": "Correct! Since b = -3, (y - (-3)) becomes (y + 3)."
        },
        {
          "id": "q3",
          "prompt": "Square the radius value (r²)",
          "answer": "25",
          "feedback": "Correct! 5 squared equals 25."
        },
        {
          "id": "q4",
          "prompt": "Write the full equation of the circle.",
          "answer": "(x - 2)^2 + (y + 3)^2 = 25",
          "feedback": "Well done! This is the standard form equation of the circle."
        }
      ]
    }
  },
  "step4": {
    "title": "Identifying Centre and Radius from an Equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Given any circle equation in standard form, you can identify both its centre (a, b) and radius r by comparing it to <em>(x - a)² + (y - b)² = r²</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like decoding a message by matching the parts to what you already know.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Decode Components",
      "problem": "Identify the centre and radius of the circle with equation <strong>(x + 4)² + (y - 1)² = 36</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the x-coordinate of the centre (a)?",
          "answer": "-4",
          "feedback": "Correct! Since the expression is (x + 4), a = -4."
        },
        {
          "id": "q2",
          "prompt": "What is the y-coordinate of the centre (b)?",
          "answer": "1",
          "feedback": "Correct! As the expression is (y - 1), b = 1."
        },
        {
          "id": "q3",
          "prompt": "What is the radius of the circle?",
          "answer": "6",
          "feedback": "Correct! Radius r = √36 = 6."
        }
      ]
    }
  },
  "step5": {
    "title": "Using Coordinate Grids to Form Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use coordinate grids to find the centre and radius visually and then write the equation of the circle using what you found.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It is like measuring distances on a map to write directions precisely.</p>"
    },
    "workedExample": {
      "title": "Worked Example: From Diagram to Equation",
      "problem": "A circle is shown on a grid with centre at (−1, 2) and passes through the point (3, 2). Write the equation of this circle.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Confirm the centre coordinates (a, b).",
          "answer": "-1, 2",
          "feedback": "Correct! Centre is at (-1, 2)."
        },
        {
          "id": "q2",
          "prompt": "Calculate the radius as the distance between centre and point on the circle.",
          "answer": "4",
          "feedback": "Correct! Distance between (-1, 2) and (3, 2) is 4 units."
        },
        {
          "id": "q3",
          "prompt": "Square the radius value (r²).",
          "answer": "16",
          "feedback": "Correct! 4 squared is 16."
        },
        {
          "id": "q4",
          "prompt": "Write the standard form equation of the circle.",
          "answer": "(x + 1)^2 + (y - 2)^2 = 16",
          "feedback": "Excellent! This is the correct equation."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='300' fill='#f9f9f9'/><g stroke='#999' stroke-width='1'><line x1='50' y1='150' x2='350' y2='150'/><line x1='200' y1='50' x2='200' y2='250'/></g><circle cx='120' cy='110' r='40' fill='none' stroke='#264653' stroke-width='2'/><circle cx='120' cy='110' r='3' fill='#e76f51'/><text x='125' y='115' font-family='sans-serif' font-size='14' fill='#e76f51'>(-1, 2)</text><circle cx='280' cy='110' r='3' fill='#2a9d8f'/><text x='285' y='115' font-family='sans-serif' font-size='14' fill='#2a9d8f'>(3, 2)</text><line x1='120' y1='110' x2='280' y2='110' stroke='#e76f51' stroke-width='2' stroke-dasharray='5,5'/></svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given the equation of a circle <strong>(x - 5)² + (y + 7)² = 81</strong>, identify the centre and radius, then write the equation of a circle with the same centre but radius 10.</span>",
      "hint": "Remember to correctly change the sign of b and square the new radius for the equation.",
      "mustHaveKeywords": ["centre", "radius", "equation", "standard form", "square"],
      "optionalKeywords": ["substitute", "coordinates"],
      "modelAnswer": "<span>The centre is (5, -7) and the radius is √81 = 9. For a radius 10, square 10 to get 100, so the new equation is (x - 5)² + (y + 7)² = 100.</span>",
      "scaffoldPrompts": ["Identify the centre from (x - a) and (y - b) terms", "Calculate the radius from r²", "Find new r² for radius 10", "Write the new equation substituting values"]
    }
  }
};