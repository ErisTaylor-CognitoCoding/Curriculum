window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.7 - Circle theorems and proofs",
  "strapline": "Explore fundamental circle theorems and learn to prove key angles and tangent properties.",
  "learningObjectives": [
    "Students should understand and prove that the angle subtended by an arc at the centre is twice the angle subtended at any point on the circumference (Maths 4.7)",
    "Students should understand and prove that the angle in a semicircle is a right angle (Maths 4.7)",
    "Students should understand and prove properties of tangents to circles, including that a tangent is perpendicular to the radius at the point of contact (Maths 4.7)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='100' stroke='#333' fill='none' stroke-width='2'/><line x1='200' y1='150' x2='280' y2='150' stroke='#1E90FF' stroke-width='3' /><line x1='200' y1='150' x2='260' y2='220' stroke='#1E90FF' stroke-width='3' /><line x1='260' y1='220' x2='280' y2='150' stroke='#FF6347' stroke-width='3'/><circle cx='280' cy='150' r='5' fill='#FF6347'/><circle cx='260' cy='220' r='5' fill='#FF6347'/><circle cx='200' cy='150' r='5' fill='#1E90FF'/><text x='190' y='145' font-family='sans-serif' font-size='14' fill='#1E90FF'>O</text><text x='285' y='145' font-family='sans-serif' font-size='14' fill='#FF6347'>A</text><text x='265' y='230' font-family='sans-serif' font-size='14' fill='#FF6347'>B</text><text x='220' y='130' font-family='sans-serif' font-size='14' fill='#000'>Centre angle ∠AOB</text><text x='250' y='190' font-family='sans-serif' font-size='14' fill='#000'>Circumference angle ∠AB</text></svg>",
  "step1": {
    "title": "Concept: Angle at the Centre Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>angle subtended</strong> by an arc at the centre of a circle is always <strong>twice</strong> the angle subtended by the same arc at any point on the circumference.</p><p>This means if the angle at the centre is <em>2x</em>, then the angle on the circumference is <em>x</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine shining a flashlight from the centre of a circular pond to two points on the shore. The light beam angle from the centre looks wider than the angle you'd see walking along the shore between those points.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Circumference Angle",
      "problem": "Angle at the centre (∠AOB) is <strong>80°</strong>. Find the angle at the circumference (∠AB).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is half of the centre angle (80° / 2)?",
          "answer": "40",
          "feedback": "Correct. Half of 80° is 40°."
        },
        {
          "id": "q2",
          "prompt": "So, what is the angle at the circumference (∠AB)?",
          "answer": "40",
          "feedback": "Exactly! The circumference angle is 40°."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Angle in a Semicircle Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Any angle inscribed in a semicircle is a <strong>right angle (90°)</strong>. This happens because the diameter subtends a 180° arc, and the angle on the circumference is always half this, therefore 90°.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='100' stroke='#333' fill='none' stroke-width='2'/><line x1='100' y1='150' x2='300' y2='150' stroke='#1E90FF' stroke-width='3' /><line x1='100' y1='150' x2='230' y2='210' stroke='#FF6347' stroke-width='3' /><line x1='230' y1='210' x2='300' y2='150' stroke='#FF6347' stroke-width='3' /><circle cx='100' cy='150' r='5' fill='#1E90FF'/><circle cx='300' cy='150' r='5' fill='#1E90FF'/><circle cx='230' cy='210' r='5' fill='#FF6347'/><text x='85' y='145' font-family='sans-serif' font-size='14' fill='#1E90FF'>A</text><text x='305' y='145' font-family='sans-serif' font-size='14' fill='#1E90FF'>B</text><text x='235' y='225' font-family='sans-serif' font-size='14' fill='#FF6347'>C</text><text x='170' y='140' font-family='sans-serif' font-size='14' fill='#000'>Diameter AB</text></svg>",
    "workedExample": {
      "title": "Worked Example: Confirming the Semicircle Angle",
      "problem": "In the circle above, find the angle ∠ACB, where AB is the diameter.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the measure of the angle in a semicircle?",
          "answer": "90",
          "feedback": "Correct! The angle ∠ACB is 90 degrees."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Tangent-Radius Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A tangent to a circle touches the circle at exactly one point. The radius drawn to that point is always <strong>perpendicular</strong> to the tangent line, making a 90° angle.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='100' stroke='#333' fill='none' stroke-width='2'/><line x1='200' y1='150' x2='280' y2='150' stroke='#1E90FF' stroke-width='3' /><line x1='280' y1='150' x2='320' y2='110' stroke='#FF6347' stroke-width='3' /><circle cx='280' cy='150' r='5' fill='#1E90FF'/><text x='190' y='145' font-family='sans-serif' font-size='14' fill='#1E90FF'>O</text><text x='285' y='145' font-family='sans-serif' font-size='14' fill='#FF6347'>T</text><text x='300' y='130' font-family='sans-serif' font-size='14' fill='#000'>Tangent line</text><text x='230' y='120' font-family='sans-serif' font-size='14' fill='#000'>Radius OT</text><text x='295' y='160' font-family='sans-serif' font-size='14' fill='#000'>∠OT tangent = 90°</text></svg>",
    "workedExample": {
      "title": "Worked Example: Recognising Perpendicular Tangent",
      "problem": "Given a radius OT of length 80 mm, a tangent touches at point T. What is the angle between OT and the tangent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the angle between a radius and tangent at the point of contact?",
          "answer": "90",
          "feedback": "Correct! The radius is perpendicular to the tangent, so the angle is 90°."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Proof: Angle at the Centre Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's prove the angle at the centre theorem step-by-step by constructing two radii and chords and measuring their angles.</p>",
    "workedExample": {
      "title": "Proof Steps",
      "problem": "Given circle centre O and points A and B on circumference:",
      "questions": [
        {
          "id": "q1",
          "prompt": "Draw radii OA and OB. Measure the angle ∠AOB at the centre. Enter this angle in degrees.",
          "answer": "Enter the measured value",
          "feedback": "Check your drawing and enter the measured angle."
        },
        {
          "id": "q2",
          "prompt": "Next, measure the angle ∠AB at any point C on the circumference different from A and B. What is this angle?",
          "answer": "Enter the measured value",
          "feedback": "Note the angle at C on the circumference."
        },
        {
          "id": "q3",
          "prompt": "Is the centre angle ∠AOB approximately twice the circumference angle ∠ACB? Enter <strong>yes</strong> or <strong>no</strong>.",
          "answer": "yes",
          "feedback": "Correct, the centre angle is twice the circumference angle according to the theorem."
        }
      ]
    }
  },
  "step5": {
    "title": "Practice: Identify Theorems in Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Given each diagram, identify which of the three circle theorems is shown.</p>",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Diagram shows an angle subtended by diameter on circumference labelled 90°. Which theorem applies?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Angle in a semicircle theorem</span>",
            "isCorrect": true,
            "explanation": "Correct — an angle inscribed in a semicircle is always 90°."
          },
          {
            "id": "b",
            "label": "<span>Angle at the centre theorem</span>",
            "isCorrect": false,
            "explanation": "Incorrect — this is about angles at the centre, not semicircles."
          },
          {
            "id": "c",
            "label": "<span>Tangent-radius theorem</span>",
            "isCorrect": false,
            "explanation": "Incorrect — this theorem deals with tangents and radii."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>Diagram shows a tangent touching circle at T and radius OT. The angle between them is 90°. What theorem is this?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Tangent-radius theorem</span>",
            "isCorrect": true,
            "explanation": "Correct! The radius and tangent are perpendicular at point of contact."
          },
          {
            "id": "b",
            "label": "<span>Angle in a semicircle theorem</span>",
            "isCorrect": false,
            "explanation": "Incorrect — this theorem is about angles in semicircles."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain why the angle subtended by an arc at the centre of a circle is twice the angle subtended by the same arc at the circumference. Use a labelled diagram in your explanation.</span>",
      "hint": "Remember to draw lines from the centre to the points on the circumference and consider the properties of isosceles triangles.",
      "mustHaveKeywords": ["angle at centre", "angle at circumference", "twice", "radii", "isosceles triangle"],
      "optionalKeywords": ["arc", "circle", "proof", "triangle properties"],
      "modelAnswer": "<span>The angle subtended by an arc at the centre is twice the angle subtended at the circumference because the two radii from the centre form an isosceles triangle with the chord. By examining the angles in this triangle and the circle's properties, it is proven that the centre angle is double any angle on the circumference subtended by the same arc.</span>",
      "scaffoldPrompts": [
        "Draw a circle with centre O and points A and B on the circumference.",
        "Draw radii OA and OB, and a point C on the circumference different from A and B.",
        "Consider the triangle OAB and the triangle ACB separately.",
        "Use the properties of isosceles triangles and the sum of angles in a triangle.",
        "Show the relationship leads to the centre angle being twice the circumference angle."
      ]
    }
  }
};