window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.7 - Circle theorems and proofs",
  "strapline": "Understanding and proving key circle theorems and properties of tangents through interactive examples and reasoning.",
  "learningObjectives": [
    "Students should understand and prove that the angle subtended by an arc at the centre is twice the angle subtended at any point on the circumference (Maths 4.7)",
    "Students should understand and prove that the angle in a semicircle is a right angle (Maths 4.7)",
    "Students should understand and prove properties of tangents to circles, including that a tangent is perpendicular to the radius at the point of contact (Maths 4.7)"
  ],
  "keyFormulas": [
    "Concept 1: Angle at the centre theorem - The angle formed by two radii at the centre of a circle is exactly twice the angle formed by two chords connecting the same two points on the circumference",
    "Concept 2: Angle in a semicircle theorem - Any angle inscribed in a semicircle (where the diameter forms the base) is always a right angle (90°)",
    "Concept 3: Tangent-radius theorem - A tangent line touches a circle at exactly one point and is always perpendicular (at 90°) to the radius drawn to that point of contact"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='100' fill='none' stroke='#333' stroke-width='2'/><circle cx='200' cy='150' r='5' fill='#333'/><line x1='200' y1='150' x2='320' y2='90' stroke='#555' stroke-width='2'/><line x1='200' y1='150' x2='120' y2='90' stroke='#555' stroke-width='2'/><line x1='120' y1='90' x2='320' y2='90' stroke='#999' stroke-width='2' stroke-dasharray='5,5'/><text x='205' y='170' font-family='sans-serif' font-size='14' fill='#333'>O</text><text x='320' y='85' font-family='sans-serif' font-size='14' fill='#333'>A</text><text x='110' y='85' font-family='sans-serif' font-size='14' fill='#333'>B</text></svg>",
  "step1": {
    "title": "Concept: Angle at the Centre Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>angle at the centre</strong> of a circle formed by two radii (lines from the centre to the circumference) is always exactly <em>twice</em> the angle subtended by the same arc at any point on the circumference.</p><p>This means if you pick two points A and B on a circle and measure the angle between the radii at the centre, that angle will be 2 times the angle formed at any point on the circle's edge between the same points A and B.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a pizza slice. The angle at the central point where the slices meet (centre) is bigger than the angle on the crust (circumference), and exactly twice as big for the same slice.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Angle Calculation",
      "problem": "Given a circle with centre O, points A and B on the circumference, and angle AOB at the centre is 80°, find the angle APB at a point P on the circumference.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the angle at the centre (angle AOB in degrees):",
          "answer": "80",
          "feedback": "Correct. Angle AOB is 80°."
        },
        {
          "id": "q2",
          "prompt": "Calculate the angle at the circumference (angle APB). Remember the angle at the centre is twice that at the circumference.",
          "answer": "40",
          "feedback": "Right! The angle at the circumference is half the angle at the centre."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Angle in a Semicircle Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>angle in a semicircle</strong> theorem states that any angle formed inside a semicircle (where the diameter is the base) is always a right angle (<strong>90°</strong>).</p><p>This means if you draw a triangle with one side as the diameter of the circle, the angle opposite that side is always a right angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a half-moon shape: any triangle formed inside it with the diameter as base will have a perfect corner angle.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Proving Angle in a Semicircle",
      "problem": "In circle O, AB is the diameter. Point C lies on the circumference forming triangle ABC. Find angle ACB.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is AB a diameter? Enter 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Correct, AB is the diameter."
        },
        {
          "id": "q2",
          "prompt": "Based on the theorem, what is the measure of angle ACB?",
          "answer": "90",
          "feedback": "Yes! The angle in a semicircle is 90°."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Tangent-Radius Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>tangent</strong> to a circle touches the circle at exactly one point. The <em>radius</em> drawn to this point of contact is always perpendicular to the tangent line, i.e. they meet at a <strong>90°</strong> angle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a rope just touching a round tree trunk. The rope is the tangent and the stick placed from the centre of the tree to the rope is the radius, meeting the rope perfectly at a right angle.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Identifying the Right Angle",
      "problem": "A tangent line touches a circle at point T, and radius OT is drawn. What is the angle between the radius OT and the tangent at T?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Measure or enter the angle between the radius and tangent (in degrees):",
          "answer": "90",
          "feedback": "Correct, the angle between the radius and tangent is always 90°."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>According to the angle at the centre theorem, if the angle at the centre is 100°, what is the angle subtended at the circumference by the same arc?</span>",
        "options": [
          {"id": "a", "label": "<span>50°</span>", "isCorrect": true, "explanation": "Correct, it's half of 100°."},
          {"id": "b", "label": "<span>100°</span>", "isCorrect": false, "explanation": "Incorrect, the angle at the circumference is half the central angle."},
          {"id": "c", "label": "<span>200°</span>", "isCorrect": false, "explanation": "Wrong, it's not double the centre angle."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What is the size of the angle in a semicircle?</span>",
        "options": [
          {"id": "a", "label": "<span>90°</span>", "isCorrect": true, "explanation": "Correct, the angle in a semicircle is a right angle."},
          {"id": "b", "label": "<span>180°</span>", "isCorrect": false, "explanation": "Incorrect, 180° is a straight line, not an angle inside the triangle."},
          {"id": "c", "label": "<span>45°</span>", "isCorrect": false, "explanation": "Wrong, the angle is always 90° in a semicircle."}
        ]
      },
      {
        "id": "mcq-3",
        "question": "<span>What is true about the tangent and radius at the point of contact?</span>",
        "options": [
          {"id": "a", "label": "<span>They meet at a right angle</span>", "isCorrect": true, "explanation": "Correct, tangent is perpendicular to the radius."},
          {"id": "b", "label": "<span>They are parallel</span>", "isCorrect": false, "explanation": "Incorrect, they are perpendicular, not parallel."},
          {"id": "c", "label": "<span>The angle between them varies</span>", "isCorrect": false, "explanation": "Wrong, the angle is always 90°."}
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The angle formed by two radii at the centre is __________ the angle subtended at the circumference.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "twice", "label": "twice", "isCorrect": true, "feedback": "Correct! The angle at the centre is twice the angle at the circumference."},
              {"value": "half", "label": "half", "isCorrect": false, "feedback": "Incorrect. It is twice, not half."},
              {"value": "equal to", "label": "equal to", "isCorrect": false, "feedback": "Wrong! The central angle is double the circumference angle."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>An angle in a semicircle is always a __________.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "right angle", "label": "right angle", "isCorrect": true, "feedback": "Correct! The angle in a semicircle is 90°."},
              {"value": "acute angle", "label": "acute angle", "isCorrect": false, "feedback": "Wrong. It is specifically a right angle."},
              {"value": "reflex angle", "label": "reflex angle", "isCorrect": false, "feedback": "Incorrect, reflex angles are larger than 180°, not in this case."}
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span>A tangent to a circle touches it at exactly __________ point(s).</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {"value": "one", "label": "one", "isCorrect": true, "feedback": "Correct! A tangent touches the circle at exactly one point."},
              {"value": "two", "label": "two", "isCorrect": false, "feedback": "Incorrect. Tangents have exactly one point of contact."},
              {"value": "none", "label": "none", "isCorrect": false, "feedback": "Wrong. A tangent must touch the circle."}
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Prove that the angle at the centre of a circle is twice the angle at the circumference subtended by the same arc.</span>",
      "hint": "Use properties of isosceles triangles formed by radii and chord, and consider triangle angle sums.",
      "mustHaveKeywords": ["radii", "isosceles triangle", "angle sum", "centre", "circumference"],
      "optionalKeywords": ["arc", "chord", "proof"],
      "modelAnswer": "<span>Consider two points A and B on the circumference. Join OA and OB where O is the centre, forming two radii. The triangle OAB is isosceles since OA = OB. The angle at O (angle AOB) is formed by these two radii. Pick a point P on the circumference on the same arc AB. Triangle APB has the angle at P subtended by arc AB. By using the properties of isosceles triangles and the sum of angles in a triangle, you can show that angle AOB = 2 × angle APB.</span>",
      "scaffoldPrompts": [
        "1. Identify the radii and chord in the figure.",
        "2. Recognize triangle OAB is isosceles with OA = OB.",
        "3. Write down the angles at the base of the isosceles triangle.",
        "4. Consider the triangle formed at the circumference.",
        "5. Use angle sum property to relate angles at the centre and circumference."
      ]
    }
  }
};