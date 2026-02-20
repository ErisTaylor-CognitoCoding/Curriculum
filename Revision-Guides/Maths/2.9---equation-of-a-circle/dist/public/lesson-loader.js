window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.9 - Equation of a circle",
  "strapline": "Understanding and using the equation of a circle with centre (a, b) and radius r in coordinate geometry.",
  "learningObjectives": [
    "Students should understand and use the equation of a circle with centre (a, b) and radius r in the form (x-a)² + (y-b)² = r² (Maths 2.9)",
    "Students should identify the centre and radius of a circle from its equation (Maths 2.9)",
    "Students should form the equation of a circle given information about its centre and radius on coordinate grids (Maths 2.9)"
  ],
  "keyFormulas": [
    "Standard form: (x - a)² + (y - b)² = r²",
    "Radius = r (distance from centre to any point on circumference)",
    "Centre = (a, b)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='80' stroke='#0074D9' stroke-width='3' fill='none'/><line x1='200' y1='150' x2='280' y2='150' stroke='#FF4136' stroke-width='2' marker-end='url(#arrow)'/><circle cx='200' cy='150' r='3' fill='#FF4136'/><text x='205' y='145' font-family='sans-serif' font-size='14' fill='#FF4136'>(a, b)</text><text x='235' y='155' font-family='sans-serif' font-size='14' fill='#FF4136'>r</text><defs><marker id='arrow' markerWidth='6' markerHeight='6' refX='5' refY='3' orient='auto' markerUnits='strokeWidth'><path d='M0,0 L6,3 L0,6 L1,3 z' fill='#FF4136'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding the Centre of a Circle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>centre</strong> of a circle is the fixed point from which all points on the circumference are the same distance. It is represented by the coordinates <strong>(a, b)</strong> in the equation <em>(x - a)<sup>2</sup> + (y - b)<sup>2</sup> = r<sup>2</sup></em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the centre as the middle of a round clock face — all the numbers on the edge are the same distance from this middle point.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify the centre in (x - 3)<sup>2</sup> + (y + 2)<sup>2</sup> = 25",
      "problem": "Identify the centre coordinates (a, b) step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Look at the term (x - a). What is the value of 'a'?",
          "answer": "3",
          "feedback": "Correct! The term (x - 3) means a = 3."
        },
        {
          "id": "q2",
          "prompt": "Look at the term (y - b). Here it is (y + 2). What is the value of 'b'?",
          "answer": "-2",
          "feedback": "Exactly! (y + 2) means (y - (-2)), so b = -2."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Radius of a Circle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>radius</strong> is the constant distance from the centre to any point on the circle's edge. It is represented by <strong>r</strong> in the equation <em>(x - a)<sup>2</sup> + (y - b)<sup>2</sup> = r<sup>2</sup></em>, and appears squared on the right side.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a string tied from the centre of a circular garden to its edge. The length of this string is the radius.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify the radius in (x + 1)<sup>2</sup> + (y - 4)<sup>2</sup> = 36",
      "problem": "Find the radius r.",
      "questions": [
        {
          "id": "q3",
          "prompt": "What is r<sup>2</sup> on the right side of the equation?",
          "answer": "36",
          "feedback": "Correct, r² = 36."
        },
        {
          "id": "q4",
          "prompt": "Calculate the radius r (positive square root of 36).",
          "answer": "6",
          "feedback": "Yes! r = 6."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: The Standard Form of a Circle's Equation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>standard form</strong> equation of a circle is <em>(x - a)<sup>2</sup> + (y - b)<sup>2</sup> = r<sup>2</sup></em>. This shows that every point (x, y) on the circle is exactly r units from the centre (a, b).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like defining a boundary where every point is the same distance from the centre, like a 'fence' around the garden.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Write the equation from centre (2, -1) and radius 5",
      "problem": "Form the equation of the circle step-by-step.",
      "questions": [
        {
          "id": "q5",
          "prompt": "Write the (x - a)<sup>2</sup> part using a=2.",
          "answer": "(x - 2)^2",
          "feedback": "Good! That represents horizontal distance from centre."
        },
        {
          "id": "q6",
          "prompt": "Write the (y - b)<sup>2</sup> part using b=-1.",
          "answer": "(y + 1)^2",
          "feedback": "Correct! Since b = -1, (y - (-1))^2 = (y + 1)^2."
        },
        {
          "id": "q7",
          "prompt": "Write the right side as r², where r=5.",
          "answer": "25",
          "feedback": "Correct, 5 squared is 25."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Identify Centre and Radius from Equations",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's practice identifying centre and radius from given circle equations.</p>",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the centre and radius of the circle <em>(x + 3)^2 + (y - 5)^2 = 49</em>?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Centre: (-3, 5), Radius: 7</span>",
            "isCorrect": true,
            "explanation": "Correct! (x + 3) means a = -3, (y - 5) means b = 5, and 49 = 7² means radius = 7."
          },
          {
            "id": "b",
            "label": "<span>Centre: (3, -5), Radius: 49</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Signs and radius squared need careful attention."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Practice: Form the Equation from Centre and Radius",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Practice forming the equation given centre and radius.</p>",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>Given centre (<strong>4</strong>, <strong>-2</strong>) and radius <strong>3</strong>, write the equation: (x - <select id='b1' aria-label='a value'><option value='3'>3</option><option value='4'>4</option><option value='-4'>-4</option></select>)² + (y - <select id='b2' aria-label='b value'><option value='2'>2</option><option value='-2'>-2</option><option value='-3'>-3</option></select>)² = <select id='b3' aria-label='r squared'><option value='6'>6</option><option value='9'>9</option><option value='5'>5</option></select></span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "4",
                "label": "4",
                "isCorrect": true,
                "feedback": "Correct! Use (x - 4)."
              },
              {
                "value": "3",
                "label": "3",
                "isCorrect": false,
                "feedback": "Incorrect, centre x-value is 4, not 3."
              },
              {
                "value": "-4",
                "label": "-4",
                "isCorrect": false,
                "feedback": "Incorrect, sign is positive inside (x - a)."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "-2",
                "label": "-2",
                "isCorrect": true,
                "feedback": "Correct! Use (y - (-2)) = (y + 2)."
              },
              {
                "value": "2",
                "label": "2",
                "isCorrect": false,
                "feedback": "Incorrect, y-value is negative, so sign changes."
              },
              {
                "value": "-3",
                "label": "-3",
                "isCorrect": false,
                "feedback": "Incorrect value for b."
              }
            ]
          },
          {
            "id": "b3",
            "options": [
              {
                "value": "9",
                "label": "9",
                "isCorrect": true,
                "feedback": "Correct! Radius 3 squared is 9."
              },
              {
                "value": "6",
                "label": "6",
                "isCorrect": false,
                "feedback": "Incorrect, square the radius value."
              },
              {
                "value": "5",
                "label": "5",
                "isCorrect": false,
                "feedback": "Incorrect, check radius squared."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>The equation of a circle is given as (x - 1)<sup>2</sup> + (y + 4)<sup>2</sup> = 16. Identify the centre and radius of the circle, then write the equation of a circle with the same radius but centre (-2, 3).</span>",
      "hint": "Remember to change the centre correctly and square the radius value on the right side.",
      "mustHaveKeywords": ["centre", "radius", "equation", "standard form"],
      "optionalKeywords": ["coordinates", "distance"],
      "modelAnswer": "<span>The given equation is (x - 1)<sup>2</sup> + (y + 4)<sup>2</sup> = 16. The centre is at (1, -4) because (y + 4) = (y - (-4)). The radius r is 4 since 16 = 4<sup>2</sup>. To write the equation with centre (-2, 3) and the same radius, use (x - (-2))<sup>2</sup> + (y - 3)<sup>2</sup> = 4<sup>2</sup>, which simplifies to (x + 2)<sup>2</sup> + (y - 3)<sup>2</sup> = 16.</span>",
      "scaffoldPrompts": [
        "First, rewrite the given equation and identify a, b, and r.",
        "Next, plug the new centre values into the standard form (x - a)<sup>2</sup> + (y - b)<sup>2</sup> = r<sup>2</sup>.",
        "Finally, simplify and write the new equation."
      ]
    }
  }
};