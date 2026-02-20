window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.13 - Similarity and congruence (including proofs)",
  "strapline": "Learn to identify and prove when shapes are similar or congruent using angle properties and side ratios.",
  "learningObjectives": [
    "Students should understand and be able to identify when two shapes are mathematically similar (corresponding angles equal and corresponding sides in the same ratio) (Maths 4.13)",
    "Students should understand and be able to identify when two shapes are congruent (identical in shape and size) (Maths 4.13)",
    "Students should be able to construct formal proofs to demonstrate similarity and congruence using properties of corresponding angles and proportional sides (Maths 4.13)"
  ],
  "keyFormulas": [
    "Formula 1: Corresponding angles of similar shapes are equal",
    "Formula 2: Corresponding sides of similar shapes are in the ratio of the scale factor",
    "Formula 3: All corresponding sides and angles must be equal for congruence"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><g font-family='sans-serif'><polygon points='50,230 150,50 250,230' fill='#cce5ff' stroke='#004085' stroke-width='2'/><text x='100' y='250' font-size='14' fill='#004085'>Triangle A</text><polygon points='280,280 370,80 460,280' fill='#d4edda' stroke='#155724' stroke-width='2'/><text x='310' y='300' font-size='14' fill='#155724'>Triangle B</text><line x1='150' y1='50' x2='370' y2='80' stroke='#888' stroke-dasharray='5,5'/><text x='230' y='40' font-size='12' fill='#333'>Same angles ↓</text></g></svg>",
  "step1": {
    "title": "Concept: What is Congruence?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two shapes are <strong>congruent</strong> if they are identical in shape and size. This means all corresponding sides are equal in length and all corresponding angles are equal. Congruent shapes can be moved by rotation, reflection, or translation without changing their congruence.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of congruent shapes like two perfectly cut paper triangles from the same template. You can flip or rotate one, but it will always match the other exactly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Congruence",
      "problem": "Triangle A has sides 5 cm, 7 cm, and 8 cm. Triangle B has sides 7 cm, 5 cm, and 8 cm. Are they congruent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "List the sides of Triangle A in ascending order.",
          "answer": "5,7,8",
          "feedback": "Correct, sorting helps to compare."
        },
        {
          "id": "q2",
          "prompt": "List the sides of Triangle B in ascending order.",
          "answer": "5,7,8",
          "feedback": "Correct, now compare with Triangle A."
        },
        {
          "id": "q3",
          "prompt": "Are all corresponding sides equal in length?",
          "answer": "Yes",
          "feedback": "Correct, all sides match."
        },
        {
          "id": "q4",
          "prompt": "Given that side lengths match, what do you conclude about the triangles?",
          "answer": "They are congruent",
          "feedback": "Correct! The triangles are congruent."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: What is Similarity?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two shapes are <strong>similar</strong> if they have the same shape but different sizes. This means all corresponding angles are equal, and all corresponding sides are proportional (in the same ratio).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Similarity is like taking a photo of a shape and then resizing it larger or smaller — the shape remains the same but the size changes.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Similarity",
      "problem": "Triangle X has sides 3 cm, 4 cm, 5 cm. Triangle Y has sides 6 cm, 8 cm, and 10 cm. Are these triangles similar?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the ratio of corresponding sides (Triangle Y side / Triangle X side) for one pair (e.g., 6/3).",
          "answer": "2",
          "feedback": "Correct, the first pair ratio is 2."
        },
        {
          "id": "q2",
          "prompt": "Calculate the ratio for another pair (8/4).",
          "answer": "2",
          "feedback": "Correct, the ratio matches."
        },
        {
          "id": "q3",
          "prompt": "Calculate the ratio for the last pair (10/5).",
          "answer": "2",
          "feedback": "Correct, all ratios equal 2."
        },
        {
          "id": "q4",
          "prompt": "Are all corresponding angles equal?",
          "answer": "Yes",
          "feedback": "Correct, they are both right angled triangles with the same angles."
        },
        {
          "id": "q5",
          "prompt": "Given equal angles and consistent side ratios, what is your conclusion?",
          "answer": "The triangles are similar",
          "feedback": "Correct! The triangles are similar with scale factor 2."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Scale Factor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>scale factor</strong> is the ratio between corresponding sides of two similar shapes. If shape B is an enlargement of shape A by a scale factor <em>k</em>, then each side of shape B equals <em>k</em> times the corresponding side of shape A.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you have a small model car and a real car, the real car is a larger version with every length multiplied by the scale factor.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding the Scale Factor",
      "problem": "Shape A has a side length 10 cm. Shape B is similar, with the corresponding side 25 cm. What is the scale factor from A to B?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the scale factor (Shape B side / Shape A side).",
          "answer": "2.5",
          "feedback": "Correct, 25 ÷ 10 = 2.5"
        }
      ]
    }
  },
  "step4": {
    "title": "Using Angle Properties in Proofs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In similarity and congruence proofs, <strong>corresponding angles</strong> are compared. Equal corresponding angles can show similarity or help confirm congruence, especially when combined with side ratios or equal sides.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like matching angles on two folded pieces of paper helps verify if they can lay exactly over one another.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Corresponding Angles",
      "problem": "Triangles ABC and DEF are shown. Angles A and D are both 50°, angles B and E are both 60°. Are these angles sufficient to prove similarity?",
      "questions": [
        {
          "id": "q1",
          "prompt": "List the given pairs of equal angles.",
          "answer": "Angle A = Angle D, Angle B = Angle E",
          "feedback": "Correct! Two pairs of corresponding angles match."
        },
        {
          "id": "q2",
          "prompt": "Does having two pairs of equal corresponding angles prove the triangles similar? (yes/no)",
          "answer": "Yes",
          "feedback": "Correct, AA (Angle-Angle) similarity criterion applies."
        }
      ]
    }
  },
  "step5": {
    "title": "Using Side Lengths and Ratios in Proofs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Proving similarity also requires demonstrating that corresponding sides are in proportion – all side lengths have the same scale factor. Proving congruence requires that all corresponding sides are exactly equal in length.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like resizing a photograph where every side enlarges by the same amount, confirming proportional sides.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Checking Proportionality",
      "problem": "Triangle PQR has sides 4 cm, 6 cm, 8 cm. Triangle STU has sides 8 cm, 12 cm, 16 cm. Are the sides proportional?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate ratio ST/PQ for one pair: 8/4",
          "answer": "2",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Calculate ratio TU/QR for next pair: 12/6",
          "answer": "2",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate ratio US/RP for last pair: 16/8",
          "answer": "2",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Are all side ratios equal? (yes/no)",
          "answer": "Yes",
          "feedback": "Right, all ratios equal 2."
        }
      ]
    }
  },
  "step6": {
    "title": "Constructing Formal Proofs of Similarity and Congruence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A formal proof uses defined criteria (like SAS, ASA for congruence and AA for similarity) and properties of sides and angles to logically demonstrate similarity or congruence between two shapes.</p>",
    "workedExample": {
      "title": "Worked Example: Writing a Simple Proof",
      "problem": "Given triangles XYZ and ABC where ∠X = ∠A, ∠Y = ∠B, and side XY = 5 cm, side AB = 10 cm, side YZ = 7 cm and side BC = 14 cm, prove the triangles are similar.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which similarity criterion uses two angles?",
          "answer": "AA",
          "feedback": "Correct, Angle-Angle similarity."
        },
        {
          "id": "q2",
          "prompt": "Are the corresponding angles equal (∠X = ∠A and ∠Y = ∠B)?",
          "answer": "Yes",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate scale factor for sides XY and AB (10/5).",
          "answer": "2",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Calculate scale factor for YZ and BC (14/7).",
          "answer": "2",
          "feedback": "Correct."
        },
        {
          "id": "q5",
          "prompt": "Are side lengths proportional with the same ratio?",
          "answer": "Yes",
          "feedback": "Well done."
        },
        {
          "id": "q6",
          "prompt": "What is your conclusion about the triangles?",
          "answer": "They are similar by AA and side proportionality",
          "feedback": "Excellent! The triangles are similar."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of these conditions shows two triangles are congruent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>All corresponding sides equal and all corresponding angles equal</span>",
            "isCorrect": true,
            "explanation": "Correct, congruence requires both."
          },
          {
            "id": "b",
            "label": "<span>All corresponding angles equal but sides are proportional</span>",
            "isCorrect": false,
            "explanation": "This shows similarity, not necessarily congruence."
          },
          {
            "id": "c",
            "label": "<span>Only two pairs of sides equal</span>",
            "isCorrect": false,
            "explanation": "Insufficient to prove congruence."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What does a scale factor of 3 mean for similar shapes?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Each side of the larger shape is 3 times the corresponding side of the smaller shape</span>",
            "isCorrect": true,
            "explanation": "Correct."
          },
          {
            "id": "b",
            "label": "<span>Corresponding angles are 3 times larger</span>",
            "isCorrect": false,
            "explanation": "Angles remain equal in similar shapes."
          },
          {
            "id": "c",
            "label": "<span>The shapes are congruent</span>",
            "isCorrect": false,
            "explanation": "Scale factor > 1 means enlargement, not congruence."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of two similar shapes is the ratio of their corresponding sides.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "scale factor",
                "label": "scale factor",
                "isCorrect": true,
                "feedback": "Correct! Scale factor defines side length ratio."
              },
              {
                "value": "congruence",
                "label": "congruence",
                "isCorrect": false,
                "feedback": "Incorrect. Congruence means identical size and shape."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Two shapes are <span class=\"font-semibold\">_____</span> if all their corresponding sides and angles are equal.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "congruent",
                "label": "congruent",
                "isCorrect": true,
                "feedback": "Correct! Congruence means identical in shape and size."
              },
              {
                "value": "similar",
                "label": "similar",
                "isCorrect": false,
                "feedback": "Incorrect. Similar shapes have proportional sides."
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to prove two triangles are similar using angle and side properties, and provide a formal proof structure.</span>",
      "hint": "Remember to check corresponding angles, calculate side ratios, and use similarity criteria (AA, SAS, SSS).",
      "mustHaveKeywords": ["corresponding angles", "side ratios", "AA", "SAS", "SSS", "similarity criteria"],
      "optionalKeywords": ["proportional", "scale factor", "formal proof"],
      "modelAnswer": "<span>To prove two triangles are similar, first show that at least two pairs of corresponding angles are equal (AA criterion). Then demonstrate that corresponding sides are in proportion by calculating the ratio of at least two pairs of sides. Alternatively, use the SAS similarity criterion by showing two pairs of sides are proportional and the included angle is equal, or use the SSS similarity criterion by showing all three pairs of sides are proportional. Organise these steps in a formal proof starting with given information, then stating criteria and concluding similarity.</span>",
      "scaffoldPrompts": [
        "Identify and state equal corresponding angles",
        "Calculate and compare ratios of corresponding sides",
        "Choose which similarity criterion applies (AA, SAS, or SSS)",
        "Write the conclusion to the proof based on criteria"
      ]
    }
  }
};