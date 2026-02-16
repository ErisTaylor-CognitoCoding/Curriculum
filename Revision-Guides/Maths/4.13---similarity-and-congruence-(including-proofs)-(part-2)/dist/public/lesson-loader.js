window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.13 - Similarity and congruence (including proofs) (Part 2)",
  "strapline": "Explore formal criteria for congruence and similarity of shapes including how to construct geometric proofs using angles, sides and scale factors.",
  "learningObjectives": [
    "Students should be able to identify when two shapes are congruent or similar using formal criteria including SSS, SAS, ASA and RHS (Maths 4.13)",
    "Students should be able to construct formal geometric proofs to demonstrate why shapes are similar or congruent using properties of corresponding angles, sides and scale factors (Maths 4.13)",
    ""
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='150' height='120' fill='none' stroke='#333' stroke-width='2'/><text x='115' y='35' text-anchor='middle' font-family='sans-serif' font-weight='bold'>Triangle ABC</text><line x1='40' y1='40' x2='190' y2='40' stroke='#333' stroke-width='2'/><line x1='190' y1='40' x2='115' y2='160' stroke='#333' stroke-width='2'/><line x1='115' y1='160' x2='40' y2='40' stroke='#333' stroke-width='2'/><text x='35' y='40' font-family='sans-serif' font-weight='bold'>A</text><text x='195' y='40' font-family='sans-serif' font-weight='bold'>B</text><text x='110' y='175' font-family='sans-serif' font-weight='bold'>C</text><rect x='230' y='40' width='150' height='120' fill='none' stroke='#555' stroke-width='2'/><text x='305' y='35' text-anchor='middle' font-family='sans-serif' font-weight='bold'>Triangle DEF</text><line x1='230' y1='40' x2='380' y2='40' stroke='#555' stroke-width='2'/><line x1='380' y1='40' x2='305' y2='160' stroke='#555' stroke-width='2'/><line x1='305' y1='160' x2='230' y2='40' stroke='#555' stroke-width='2'/><text x='225' y='40' font-family='sans-serif' font-weight='bold'>D</text><text x='385' y='40' font-family='sans-serif' font-weight='bold'>E</text><text x='300' y='175' font-family='sans-serif' font-weight='bold'>F</text></svg>",
  "step1": {
    "title": "Concept: Congruence Criteria",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">There are four formal tests to prove that two triangles are congruent: <strong>SSS, SAS, ASA</strong> and <strong>RHS</strong>. These tests compare sides and angles in specific ways.</p><ul><li><strong>SSS</strong>: All three pairs of corresponding sides are equal.</li><li><strong>SAS</strong>: Two pairs of sides and the included angle are equal.</li><li><strong>ASA</strong>: Two pairs of angles and the included side are equal.</li><li><strong>RHS</strong>: For right-angled triangles, the hypotenuse and one other side are equal.</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine matching two jigsaw puzzle pieces exactly: SSS is like matching all edges, SAS is matching two edges and the corner where they meet, ASA is matching two corner shapes and the edge between, and RHS is like matching two pieces with a right angle and a matching edge.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Checking Congruence criteria step-by-step",
      "problem": "Two triangles have sides as follows: Triangle 1 sides are 5 cm, 7 cm, and 8 cm. Triangle 2 sides are 7 cm, 8 cm, and 5 cm.",
      "questions": [
        {
          "id": "q1",
          "prompt": "List the side lengths of Triangle 1 in ascending order.",
          "answer": "5, 7, 8",
          "feedback": "Good! You ordered the sides correctly."
        },
        {
          "id": "q2",
          "prompt": "Now list the side lengths of Triangle 2 in ascending order.",
          "answer": "5, 7, 8",
          "feedback": "Correct! Both triangles have the same side lengths."
        },
        {
          "id": "q3",
          "prompt": "Based on your answers, which congruence criterion would you apply to prove these triangles are congruent?",
          "answer": "SSS",
          "feedback": "Exactly! All three sides are equal, so SSS is the correct criteria."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Similarity Criteria",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two shapes are <em>similar</em> if all their corresponding angles are equal and their corresponding sides have the same ratio (called the scale factor). For triangles, similarity can be proved using:</p><ul><li><strong>AA</strong>: Two corresponding angles equal.</li><li><strong>SSS</strong>: Corresponding sides are in the same ratio.</li><li><strong>SAS</strong>: Two sides are in the same ratio and the included angle is equal.</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two photographs of the same object taken from different distances — they have the same shape and angles but different sizes. They're similar but not congruent.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Checking Similarity using AA",
      "problem": "Triangles PQR and XYZ have corresponding angles: ∠P=40°, ∠Q=60°, ∠R=80°; ∠X=40°, ∠Y=60°, ∠Z=80°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Do ∠P and ∠X correspond and are equal?",
          "answer": "Yes",
          "feedback": "Correct. The two angles match exactly."
        },
        {
          "id": "q2",
          "prompt": "Do ∠Q and ∠Y correspond and are equal?",
          "answer": "Yes",
          "feedback": "Good! These angles also correspond and are equal."
        },
        {
          "id": "q3",
          "prompt": "With two pairs of equal angles, what similarity criterion applies?",
          "answer": "AA",
          "feedback": "Well done! Two pairs of angles equal means triangles are similar by AA."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Formal Geometric Proofs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A formal geometric proof is a clear and logical sequence of statements and reasons that demonstrate why two shapes are congruent or similar. It typically includes:</p><ul><li>Stating the given information</li><li>Writing what you want to prove</li><li>Using properties of angles, sides, and scale factors to justify each step</li><li>Concluding the proof based on the criteria</li></ul>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">A proof is like a detective story presenting evidence step-by-step to prove a point beyond doubt.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Constructing a proof of triangle congruence",
      "problem": "Given two triangles ABC and DEF where AB = DE, AC = DF, and ∠A = ∠D, prove that the triangles are congruent.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the given information you write first?",
          "answer": "AB = DE, AC = DF, ∠A = ∠D",
          "feedback": "Correct! List the given equal sides and angles."
        },
        {
          "id": "q2",
          "prompt": "Which congruence criterion applies with two sides and the included angle equal?",
          "answer": "SAS",
          "feedback": "Yes, SAS criterion fits these conditions."
        },
        {
          "id": "q3",
          "prompt": "State the conclusion of the proof.",
          "answer": "△ABC ≅ △DEF",
          "feedback": "Well done! The triangles are congruent by SAS."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which congruence criterion requires a right angle to apply?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>SSS</span>",
            "isCorrect": false,
            "explanation": "SSS does not require a right angle."
          },
          {
            "id": "b",
            "label": "<span>RHS</span>",
            "isCorrect": true,
            "explanation": "Correct! RHS applies to right-angled triangles."
          },
          {
            "id": "c",
            "label": "<span>ASA</span>",
            "isCorrect": false,
            "explanation": "ASA applies to any triangles, not just right angled."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> criterion states that two triangles are congruent when two sides and the __________ angle are equal.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "SAS",
                "label": "SAS",
                "isCorrect": true,
                "feedback": "Correct! SAS is the correct term."
              },
              {
                "value": "ASA",
                "label": "ASA",
                "isCorrect": false,
                "feedback": "Incorrect, ASA involves angles and a side."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "included",
                "label": "included",
                "isCorrect": true,
                "feedback": "That's right! The angle between the two sides is the included angle."
              },
              {
                "value": "opposite",
                "label": "opposite",
                "isCorrect": false,
                "feedback": "Wrong, it must be the included angle."
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
      "prompt": "<span>Explain how to prove that two triangles are similar using the SAS similarity criterion. Include how you identify and use corresponding sides and angles in your explanation.</span>",
      "hint": "Remember to check which sides correspond and the ratio of their lengths, and confirm the included angle is equal.",
      "mustHaveKeywords": ["SAS", "included angle", "corresponding sides", "same ratio", "similar triangles"],
      "optionalKeywords": ["scale factor", "angles equal", "correspondence"],
      "modelAnswer": "<span>To prove two triangles are similar using the SAS criterion, you first identify two pairs of corresponding sides and confirm that their lengths are in the same ratio (the scale factor). Then you check the included angle between these pairs of sides to ensure it is equal in both triangles. If both these conditions hold, by the SAS similarity criterion, the two triangles are similar.</span>",
      "scaffoldPrompts": [
        "Identify two pairs of corresponding sides in the triangles.",
        "Calculate the ratio of these two pairs of sides and check if they are equal.",
        "Check that the angle included between these two pairs of sides is equal in both triangles.",
        "Use the SAS similarity criterion to state the triangles are similar."
      ]
    }
  }
};