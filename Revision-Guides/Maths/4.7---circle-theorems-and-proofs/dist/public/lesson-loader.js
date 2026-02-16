window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.7 - Circle theorems and proofs",
  "strapline": "Explore the fundamental circle theorems and learn to construct geometric proofs involving angles and arcs.",
  "learningObjectives": [
    "Students should understand and apply the theorem that the angle subtended by an arc at the centre is twice the angle subtended at any point on the circumference (Maths 4.7)",
    "Students should understand and apply the theorem that angles in the same segment are equal (Maths 4.7)",
    "Students should be able to construct geometric proofs for circle theorems using correct mathematical reasoning (Maths 4.7)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='100' stroke='#333' fill='none' stroke-width='2'/><line x1='200' y1='150' x2='280' y2='150' stroke='#f00' stroke-width='2'/><line x1='200' y1='150' x2='240' y2='70' stroke='#00f' stroke-width='2'/><line x1='240' y1='70' x2='280' y2='150' stroke='#00f' stroke-width='2'/><text x='195' y='145' font-family='sans-serif' font-size='14' fill='#f00'>&#x03A8;</text><text x='250' y='75' font-family='sans-serif' font-size='14' fill='#00f'>&#x03B8;</text><text x='160' y='220' font-family='sans-serif' font-size='12' fill='#333'>Centre O</text></svg>",
  "step1": {
    "title": "Concept: Angle at the Centre Theorem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The angle subtended by an arc at the centre of a circle is <strong>twice</strong> the angle subtended at any point on the circumference by the same arc.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine shining a flashlight from the centre of a circular stage; the light covers a larger angle at the centre than the shadow it casts on the edge of the stage.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Angles Using the Angle at the Centre Theorem",
      "problem": "In a circle, the angle at the centre (Psi) formed by an arc is unknown. The angle subtended by this arc at a point on the circumference (Theta) is 30°. Find the value of the centre angle (Psi).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Input the angle subtended at the circumference (Theta).",
          "answer": "30",
          "feedback": "Correct, Theta is 30°."
        },
        {
          "id": "q2",
          "prompt": "Using the theorem, calculate the angle at the centre (Psi).",
          "answer": "60",
          "feedback": "Correct, Psi is twice Theta, so 60°."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Angle at the Circumference",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The angle at the circumference is the angle formed anywhere on the edge of the circle by two chords that meet at that point, using the same arc endpoints.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like standing at different points around a campfire and seeing how the angle between two sticks changes – except the angle at the circumference remains constant for the same arc.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Angle at the Circumference",
      "problem": "A chord of a circle subtends an angle of 40° at one point on the circumference. If another point on the same segment views the same chord, what is the angle at this second point?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the angle at the first point on the circumference.",
          "answer": "40",
          "feedback": "Good, the angle is 40°."
        },
        {
          "id": "q2",
          "prompt": "According to the theorem, what is the angle at the second point in the same segment?",
          "answer": "40",
          "feedback": "Correct, angles in the same segment are equal."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Concept: Angles in the Same Segment",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">All angles subtended by the same arc and lying in the same segment (that is, on the same side of the chord) of the circle are equal.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a spotlight projecting the same shape shadow on a wall from different points in a room but the shadow's size stays the same.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Confirming Equal Angles in the Same Segment",
      "problem": "Two points A and B lie on the same segment of a circle, subtending angles of 55° and unknown at the circumference to the same chord. Find the unknown angle at point B.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Input the angle at point A.",
          "answer": "55",
          "feedback": "Correct, angle at A is 55°."
        },
        {
          "id": "q2",
          "prompt": "What is the angle at point B in the same segment?",
          "answer": "55",
          "feedback": "Correct, angles in the same segment are equal."
        }
      ]
    }
  },
  "step4": {
    "title": "Geometric Proof Introduction",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Understanding the properties of circle theorems allows us to create <strong>geometric proofs</strong> to logically prove why these theorems always hold true.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like building a case in court, each statement and fact is checked until a final conclusion is proven beyond doubt.</p>"
    },
    "workedExample": {
      "title": "Step Through: Proving the Angle at the Centre Theorem",
      "problem": "We want to prove that the angle at the centre is twice the angle at the circumference using a circle with centre O, and points A and B on circumference forming arc AB.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Step 1: What is the angle between the two radii O to A and O to B called?",
          "answer": "angle at the centre",
          "feedback": "Correct, it's the angle at the centre, ∠AOB."
        },
        {
          "id": "q2",
          "prompt": "Step 2: The angle at the circumference formed by points A, B and C on the circumference is?",
          "answer": "angle at the circumference",
          "feedback": "Correct, ∠ACB is the angle at the circumference."
        },
        {
          "id": "q3",
          "prompt": "Step 3: What is the relationship between ∠AOB and ∠ACB?",
          "answer": "angle at the centre is twice angle at the circumference",
          "feedback": "Correct. ∠AOB = 2 × ∠ACB."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which statement about angles in a circle is true?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The angle subtended at the centre is equal to the angle at the circumference.</span>",
            "isCorrect": false,
            "explanation": "The angle at the centre is actually twice that at the circumference."
          },
          {
            "id": "b",
            "label": "<span>Angles subtended by the same arc at the circumference but in different segments are equal.</span>",
            "isCorrect": false,
            "explanation": "Angles in the same segment, not different segments, are equal."
          },
          {
            "id": "c",
            "label": "<span>The angle subtended by an arc at the centre is twice the angle subtended at any point on the circumference.</span>",
            "isCorrect": true,
            "explanation": "Correct. This is the central circle theorem."
          },
          {
            "id": "d",
            "label": "<span>Angles in the same segment are always different.</span>",
            "isCorrect": false,
            "explanation": "Incorrect, angles in the same segment are equal."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to prove that the angle subtended by an arc at the centre of a circle is twice the angle subtended at the circumference, using correct geometric reasoning.</span>",
      "hint": "Remember to consider the triangle formed by the centre and the points on the circumference, and use properties of isosceles triangles and circle radii.",
      "mustHaveKeywords": ["angle at the centre", "angle at the circumference", "isosceles triangle", "circle radii", "twice"],
      "optionalKeywords": ["corresponding arcs", "geometric proof", "triangle properties"],
      "modelAnswer": "<span>To prove the angle at the centre is twice the angle at the circumference, consider a circle with centre O and points A and B on the circumference forming the arc AB. Join O to A and O to B, creating two radii and an isosceles triangle OAB. Let C be a point on the circumference forming the angle at the circumference. Using the properties of isosceles triangles and angle sums, we show that the angle at the centre (∠AOB) is exactly twice the angle at the circumference (∠ACB).</span>",
      "scaffoldPrompts": ["Start by drawing the radii OA and OB.", "Identify the isosceles triangles formed.", "Relate the angles inside these triangles.", "Use the angle sum property of triangles.", "Derive the relationship between angles at centre and circumference."]
    }
  }
};