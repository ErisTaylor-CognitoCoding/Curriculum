window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.7 - Circle theorems and proofs",
  "strapline": "Exploring key circle theorems involving angles and tangents, and how to prove them.",
  "learningObjectives": [
    "Students should understand and prove that the angle subtended by an arc at the centre is twice the angle subtended at any point on the circumference (Maths 4.7)",
    "Students should understand and prove that the angle in a semicircle is a right angle (Maths 4.7)",
    "Students should understand and prove properties of tangents to circles, including that a tangent is perpendicular to the radius at the point of contact (Maths 4.7)"
  ],
  "keyFormulas": [
    "Angle at centre = 2 × angle at circumference (same arc)",
    "Angle in a semicircle = 90°",
    "Tangent ⟂ radius at point of contact"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <circle cx='200' cy='150' r='100' fill='none' stroke='#333' stroke-width='2' />  <line x1='200' y1='150' x2='300' y2='150' stroke='#1f77b4' stroke-width='2' />  <line x1='200' y1='150' x2='150' y2='90' stroke='#ff7f0e' stroke-width='2' />  <line x1='150' y1='90' x2='300' y2='150' stroke='#2ca02c' stroke-width='2' />  <circle cx='200' cy='150' r='4' fill='#d62728' />  <circle cx='300' cy='150' r='4' fill='#d62728' />  <circle cx='150' cy='90' r='4' fill='#d62728' />  <text x='205' y='155' font-family='sans-serif' font-size='14' fill='#1f77b4'>O</text>  <text x='310' y='155' font-family='sans-serif' font-size='14' fill='#2ca02c'>A</text>  <text x='130' y='80' font-family='sans-serif' font-size='14' fill='#ff7f0e'>B</text>  <text x='235' y='120' font-family='sans-serif' font-size='14' fill='#000'>∠AOB</text>  <text x='195' y='70' font-family='sans-serif' font-size='14' fill='#000'>∠AB</text></svg>",
  "step1": {
    "title": "Concept: Angle at the Centre Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The angle subtended by an arc at the centre of a circle is twice the angle subtended by the same arc at any point on the circumference. This means if you draw two radii to the ends of an arc and measure the angle at the centre (O), it will be exactly double the angle formed on the circumference.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a spotlight at the centre shining on the arc. The larger angle at the centre lights up the smaller angle seen on the edge of the circle.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Angle at the Centre",
      "problem": "A circle has centre O. Points A and B lie on the circumference. The angle at the circumference ∠AB is 30°. What is the angle at the centre ∠AOB?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the measure of the angle at the circumference ∠AB?",
          "answer": "30",
          "feedback": "Correct. The problem states the angle at circumference is 30°."
        },
        {
          "id": "q2",
          "prompt": "Use the theorem: Angle at centre = 2 × angle at circumference. Calculate ∠AOB.",
          "answer": "60",
          "feedback": "Correct. The angle at the centre is 2 × 30° = 60°."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Angle in a Semicircle Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An angle inscribed in a semicircle, where the diameter forms the base, is always a right angle (90°). This means if the endpoints of the diameter are connected with any point on the circumference on the opposite side, the angle is always 90°.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like looking at a half-moon shape: wherever you look from the curved edge above the diameter, the angle formed is a perfect corner.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Right Angle in Semicircle",
      "problem": "In a circle with diameter AB, point C lies on the circumference. What is the measure of ∠ACB?",
      "questions": [
        {
          "id": "q3",
          "prompt": "What shape does AB form inside the circle?",
          "answer": "diameter",
          "feedback": "Correct. AB is the diameter of the circle."
        },
        {
          "id": "q4",
          "prompt": "According to the theorem, what is the measure of ∠ACB?",
          "answer": "90",
          "feedback": "Correct. The angle in the semicircle is 90°."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Tangent-Radius Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A tangent is a straight line that touches a circle at exactly one point. The radius drawn to the point of contact is perpendicular to the tangent line. This means they form a right angle (90°) at the point where the tangent touches the circle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the tangent like a straight road touching a circular pond at one spot. The radius is like a path from the pond’s centre to the shore, and the road (tangent) meets that path at a perfect right angle.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Proving Tangent and Radius Perpendicular",
      "problem": "A circle with centre O has a tangent line touching the circle at point T. The radius OT is drawn. What is the angle between OT and the tangent line?",
      "questions": [
        {
          "id": "q5",
          "prompt": "What is the relationship between a tangent and radius at the point of contact?",
          "answer": "perpendicular",
          "feedback": "Correct. They are perpendicular at point T."
        },
        {
          "id": "q6",
          "prompt": "What angle in degrees corresponds to perpendicular lines?",
          "answer": "90",
          "feedback": "Correct. Perpendicular lines meet at 90°."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is twice the angle subtended by an arc at the circumference?</span>",
        "options": [
          {"id": "a", "label": "<span>Angle at the centre</span>", "isCorrect": true, "explanation": "Correct. The angle at the centre is twice the angle at the circumference."},
          {"id": "b", "label": "<span>Angle in a semicircle</span>", "isCorrect": false, "explanation": "Incorrect. Angle in a semicircle is always 90°, unrelated here."},
          {"id": "c", "label": "<span>Angle between two tangents</span>", "isCorrect": false, "explanation": "Incorrect. Tangent angle properties differ."}
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What angle does an angle inscribed in a semicircle always make?</span>",
        "options": [
          {"id": "a", "label": "<span>45°</span>", "isCorrect": false, "explanation": "Incorrect. The angle is 90°."},
          {"id": "b", "label": "<span>90°</span>", "isCorrect": true, "explanation": "Correct. Angle in a semicircle is a right angle."},
          {"id": "c", "label": "<span>180°</span>", "isCorrect": false, "explanation": "Incorrect. 180° is a straight line, not an inscribed angle."}
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> touches a circle at just one point.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "val1", "label": "tangent", "isCorrect": true, "feedback": "Correct! A tangent touches a circle at exactly one point."},
              {"value": "val2", "label": "chord", "isCorrect": false, "feedback": "Incorrect, a chord passes through two points on the circle."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The radius is <span class=\"font-semibold\">_____</span> to the tangent at the point of contact.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "val1", "label": "perpendicular", "isCorrect": true, "feedback": "Correct! The radius is perpendicular to the tangent."},
              {"value": "val2", "label": "parallel", "isCorrect": false, "feedback": "Incorrect, the radius is not parallel to the tangent."}
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A circle has centre O and diameter AB. Point C lies on the circumference. The line tangent to the circle touches it at point B.</span><br><span>Prove using these points that the angle ∠ACB is 90°, and explain why the tangent at B is perpendicular to radius OB.</span>",
      "hint": "Remember to use: the angle in a semicircle theorem and the tangent-radius theorem. Include reasoning about the diameter and radius.",
      "mustHaveKeywords": ["angle in a semicircle", "90 degrees", "tangent-radius perpendicularity", "radius OB", "point of contact B"],
      "optionalKeywords": ["circle", "diameter", "circumference", "proof"],
      "modelAnswer": "<span>Since AB is the diameter, point C lies on the circumference forming angle ∠ACB. By the angle in a semicircle theorem, ∠ACB is a right angle (90°). The tangent touches the circle at B, so by the tangent-radius theorem, the tangent line at B is perpendicular to radius OB because the radius to the point of contact is always perpendicular to the tangent. Therefore, both parts are proven.</span>",
      "scaffoldPrompts": ["Identify that AB is the diameter", "State the angle in a semicircle theorem", "Apply the theorem to ∠ACB", "Explain the tangent-radius relationship at B"]
    }
  }
};