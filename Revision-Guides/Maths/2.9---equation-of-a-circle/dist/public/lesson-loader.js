window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.9 - Equation of a circle",
  "strapline": "Learn how to represent circles using equations, identify their centre and radius, and form equations from given data.",
  "learningObjectives": [
    "Students should understand and use the equation of a circle with centre (a, b) and radius r in the form (x-a)² + (y-b)² = r² (Maths 2.9)",
    "Students should identify the centre and radius of a circle from its equation (Maths 2.9)",
    "Students should form the equation of a circle given information about its centre and radius on coordinate grids (Maths 2.9)"
  ],
  "keyFormulas": [
    "Equation of a circle: (x - a)² + (y - b)² = r²",
    "Radius squared: r² is the square of the radius",
    "Centre coordinates: (a, b)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='80' stroke='black' stroke-width='2' fill='none'/><circle cx='200' cy='150' r='3' fill='red' /><line x1='200' y1='150' x2='280' y2='150' stroke='blue' stroke-width='2' marker-end='url(#arrowhead)'/><text x='210' y='140' font-family='sans-serif' font-size='14'>r</text><text x='180' y='145' font-family='sans-serif' font-size='14' fill='red'>(a, b)</text><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='blue'/></marker></defs></svg>",
  "step1": {
    "title": "Understanding the Centre of a Circle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The centre of a circle is the fixed point <strong>(a, b)</strong> from which all points on the circle are the same distance (radius). In the equation <em>(x - a)² + (y - b)² = r²</em>, the values a and b represent the <strong>coordinates of the centre</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a string tied to a pin on a board at point (a, b). The string stretched out to length r draws a perfect circle around the pin. The pin is the centre.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify the Centre",
      "problem": "Given the equation <strong>(x - 4)² + (y + 3)² = 25</strong>, find the centre of the circle.",
      "questions": [
        {
          "id": "step1-q1",
          "prompt": "What is the value of <em>a</em> in (x - a)?",
          "answer": "4",
          "feedback": "Correct! Since it is (x - 4), <em>a = 4</em>."
        },
        {
          "id": "step1-q2",
          "prompt": "What is the value of <em>b</em> in (y - b)? Note the equation is (y + 3)², so think carefully.",
          "answer": "-3",
          "feedback": "Correct! Because the equation has (y + 3)², <em>b = -3</em>."
        },
        {
          "id": "step1-q3",
          "prompt": "Write the centre coordinates as (a, b).",
          "answer": "(4, -3)",
          "feedback": "Correct! The centre is at (4, -3)."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding the Radius of a Circle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The radius is the distance <strong>r</strong> from the centre to any point on the circle's edge. In the equation <em>(x - a)² + (y - b)² = r²</em>, the value on the right side <strong>r²</strong> is the square of the radius.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the radius as the length of the string used to draw the circle. It is always the same length from the centre to the edge.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the Radius",
      "problem": "Given the equation <strong>(x - 2)² + (y - 5)² = 49</strong>, find the radius of the circle.",
      "questions": [
        {
          "id": "step2-q1",
          "prompt": "What is the value of r²?",
          "answer": "49",
          "feedback": "Correct. r² = 49."
        },
        {
          "id": "step2-q2",
          "prompt": "What is the radius r? (Find the square root of 49)",
          "answer": "7",
          "feedback": "Correct! The radius r = 7."
        }
      ]
    }
  },
  "step3": {
    "title": "Forming the Equation of a Circle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To form the equation of a circle, use the centre <strong>(a, b)</strong> and radius <strong>r</strong> in the equation <em>(x - a)² + (y - b)² = r²</em>. Substitute the values of a, b, and r to write the complete equation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like entering the coordinates of the center and the length of the radius into a formula machine to get the circle equation.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Write the Circle Equation",
      "problem": "Form the equation of a circle with centre at (3, -2) and radius 5.",
      "questions": [
        {
          "id": "step3-q1",
          "prompt": "Write the expression for (x - a)² using a = 3.",
          "answer": "(x - 3)²",
          "feedback": "Correct."
        },
        {
          "id": "step3-q2",
          "prompt": "Write the expression for (y - b)² using b = -2.",
          "answer": "(y + 2)²",
          "feedback": "Correct! Subtracting -2 is the same as adding 2."
        },
        {
          "id": "step3-q3",
          "prompt": "What is r² if radius r = 5?",
          "answer": "25",
          "feedback": "Correct."
        },
        {
          "id": "step3-q4",
          "prompt": "Write the complete equation of the circle.",
          "answer": "(x - 3)² + (y + 2)² = 25",
          "feedback": "Excellent! That is the correct circle equation."
        }
      ]
    }
  },
  "step4": {
    "title": "Identifying Centre and Radius from Different Circle Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Circle equations can look like <em>(x - a)² + (y - b)² = r²</em>, but sometimes the signs and numbers can be tricky. Remember that subtracting a negative value means adding, which affects the centre coordinates.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like a mirror image, where subtracting a negative shifts the centre in the positive direction.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Extract Centre and Radius",
      "problem": "Given the equation <strong>(x + 1)² + (y - 6)² = 16</strong>, find the centre and radius.",
      "questions": [
        {
          "id": "step4-q1",
          "prompt": "What is the value of a in (x - a)? The equation has (x + 1)², so find a.",
          "answer": "-1",
          "feedback": "Yes, because (x + 1)² = (x - (-1))², so a = -1."
        },
        {
          "id": "step4-q2",
          "prompt": "What is the value of b in (y - b)?",
          "answer": "6",
          "feedback": "Correct! b = 6."
        },
        {
          "id": "step4-q3",
          "prompt": "Write the centre coordinate (a, b).",
          "answer": "(-1, 6)",
          "feedback": "Perfect! The centre is (-1, 6)."
        },
        {
          "id": "step4-q4",
          "prompt": "What is r²?",
          "answer": "16",
          "feedback": "Correct."
        },
        {
          "id": "step4-q5",
          "prompt": "Calculate the radius r.",
          "answer": "4",
          "feedback": "Well done! The radius is 4."
        }
      ]
    }
  },
  "step5": {
    "title": "Using a Coordinate Grid to Form Circle Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Start by identifying the centre point (a, b) on the grid, then measure the radius (distance from the centre to the edge). Use these values in the equation <em>(x - a)² + (y - b)² = r²</em> to write the circle's equation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of plotting points on graph paper to find centre and radius before writing the equation.</p>"
    },
    "workedExample": {
      "title": "Worked Example: From Grid to Equation",
      "problem": "On a coordinate grid, a circle has centre at (1, 2) and passes through point (1, 5). Write the equation of the circle.",
      "questions": [
        {
          "id": "step5-q1",
          "prompt": "What are the coordinates of the centre (a, b)?",
          "answer": "(1, 2)",
          "feedback": "Correct!"
        },
        {
          "id": "step5-q2",
          "prompt": "Find the radius r by calculating the distance from (1, 2) to (1, 5). What is this distance?",
          "answer": "3",
          "feedback": "Yes! The vertical distance is 3 units."
        },
        {
          "id": "step5-q3",
          "prompt": "What is r²?",
          "answer": "9",
          "feedback": "Correct!"
        },
        {
          "id": "step5-q4",
          "prompt": "Write the complete equation of the circle.",
          "answer": "(x - 1)² + (y - 2)² = 9",
          "feedback": "Excellent!"
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A circle has its centre at (-3, 4) and passes through the point (0, 0). Write the equation of the circle in standard form.</span>",
      "hint": "Remember to first find the radius by calculating the distance between the two points. Then use the centre coordinates and radius squared in the equation (x - a)² + (y - b)² = r².",
      "mustHaveKeywords": ["centre", "radius", "distance formula", "equation", "standard form"],
      "optionalKeywords": ["substitution", "coordinates", "squared"],
      "modelAnswer": "<span>First, find the radius r by calculating the distance between the centre (-3, 4) and the point (0, 0). Using the distance formula: r = √[(0 + 3)² + (0 - 4)²] = √(9 + 16) = √25 = 5. The radius is 5, so r² = 25. The centre is (-3, 4). Substitute into the standard form equation: (x + 3)² + (y - 4)² = 25.</span>",
      "scaffoldPrompts": ["Calculate the difference in x-coordinates", "Calculate the difference in y-coordinates", "Use the distance formula", "Square the radius", "Write the equation using the centre and r²"]
    }
  }
};