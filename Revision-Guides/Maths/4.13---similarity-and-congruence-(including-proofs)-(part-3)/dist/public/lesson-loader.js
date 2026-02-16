window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.13 - Similarity and congruence (including proofs) (Part 3)",
  "strapline": "Explore the conditions for triangle congruence, learn to construct formal proofs for congruence and similarity, and understand how to distinguish and apply scale factors in similar and congruent shapes.",
  "learningObjectives": [
    "Students should be able to apply the conditions for congruence of triangles (SSS, SAS, ASA, RHS) to identify congruent triangles (Maths 4.13)",
    "Students should be able to construct formal geometric proofs to demonstrate congruence and similarity using properties of corresponding angles, sides and scale factors (Maths 4.13)",
    "Students should be able to distinguish between similar and congruent shapes and apply scale factors in similarity problems (Maths 4.13)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><polygon points='80,250 180,50 280,250' fill='none' stroke='#333' stroke-width='3'/><text x='170' y='240' font-family='sans-serif' font-size='14' fill='#333'>Triangle ABC</text><line x1='130' y1='150' x2='230' y2='150' stroke='#666' stroke-dasharray='4'/><text x='135' y='145' font-family='sans-serif' font-size='12' fill='#666'>Side AB</text></svg>",
  "step1": {
    "title": "Concept: Congruence Criteria for Triangles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Triangles are congruent when they have exactly the same size and shape. The four conditions that prove this are Side-Side-Side (SSS), Side-Angle-Side (SAS), Angle-Side-Angle (ASA), and Right angle-Hypotenuse-Side (RHS).</p><p>For example, if you know three sides match exactly (SSS), the triangles are congruent.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of congruent triangles like cut-out paper triangles that fit exactly one on top of the other — no gaps or overlaps. The congruence criteria are the rules that tell us when this perfect fit happens.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying SSS Congruence",
      "problem": "Triangle ABC has sides 5 cm, 7 cm, and 8 cm. Triangle DEF has sides 7 cm, 5 cm, and 8 cm. Are these triangles congruent by SSS?",
      "questions": [
        {
          "id": "q1",
          "prompt": "List the sides of Triangle ABC in ascending order.",
          "answer": "5, 7, 8",
          "feedback": "Correct. The sides are 5 cm, 7 cm, and 8 cm."
        },
        {
          "id": "q2",
          "prompt": "List the sides of Triangle DEF in ascending order.",
          "answer": "5, 7, 8",
          "feedback": "Correct. The sides are 5 cm, 7 cm, and 8 cm."
        },
        {
          "id": "q3",
          "prompt": "Do the sides of both triangles match in size?",
          "answer": "yes",
          "feedback": "Correct. All three sides are equal, so the triangles are congruent by SSS."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Formal Geometric Proofs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A formal geometric proof rigorously shows why two triangles are congruent or similar. It uses a sequence of statements, each justified by definitions, theorems, or given information.</p><p>We often use congruence criteria (SSS, SAS, ASA, RHS), properties of angles, and side ratios in proofs.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Writing a proof is like making a step-by-step argument in a court case, where every claim needs valid evidence to convince the judge.</p>"
    },
    "workedExample": {
      "title": "Worked Example: SAS Proof",
      "problem": "Prove that Triangle GHI is congruent to Triangle JKL given GH = JK, angle H = angle K, and HI = KL.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which congruence criterion applies given two sides and the included angle are equal?",
          "answer": "SAS",
          "feedback": "Correct. This is Side-Angle-Side (SAS)."
        },
        {
          "id": "q2",
          "prompt": "What is the first statement you would write in the proof?",
          "answer": "GH = JK, angle H = angle K, HI = KL",
          "feedback": "Correct. Start with the given equal sides and angle."
        },
        {
          "id": "q3",
          "prompt": "What conclusion can you write next based on the SAS criterion?",
          "answer": "Triangle GHI ≅ Triangle JKL",
          "feedback": "Correct. By SAS, the triangles are congruent."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Corresponding Elements in Similar Shapes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Similar shapes have the same angles but their sides are proportional — related by a scale factor.</p><p>Corresponding angles between similar triangles are equal, and corresponding sides are in the ratio of the scale factor.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of similar shapes as photographs of the same shape taken at different distances — the shape is the same but the size changes uniformly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Scale Factor",
      "problem": "Triangle PQR is similar to Triangle STU. Side PQ = 4 cm and side ST = 6 cm. What is the scale factor from PQR to STU?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the ratio of side ST to side PQ?",
          "answer": "1.5",
          "feedback": "Correct. 6 divided by 4 is 1.5."
        },
        {
          "id": "q2",
          "prompt": "Using the scale factor, if QR = 5 cm, what is the length of TU?",
          "answer": "7.5",
          "feedback": "Correct. Multiply 5 cm by 1.5 to get 7.5 cm."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of these is NOT a valid triangle congruence criterion?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>SSS (Side-Side-Side)</span>",
            "isCorrect": false,
            "explanation": "SSS is a valid congruence criterion."
          },
          {
            "id": "b",
            "label": "<span>AAS (Angle-Angle-Side)</span>",
            "isCorrect": true,
            "explanation": "AAS is a valid similarity criterion but not a standard congruence criterion in Edexcel 1MA1."
          },
          {
            "id": "c",
            "label": "<span>ASA (Angle-Side-Angle)</span>",
            "isCorrect": false,
            "explanation": "ASA is a valid congruence criterion."
          },
          {
            "id": "d",
            "label": "<span>RHS (Right angle-Hypotenuse-Side)</span>",
            "isCorrect": false,
            "explanation": "RHS is a valid congruence criterion for right-angled triangles."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> criterion states that if two sides and the included angle of one triangle are equal to two sides and the included angle of another triangle, then the triangles are congruent.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "SAS",
                "label": "SAS",
                "isCorrect": true,
                "feedback": "Correct! SAS stands for Side-Angle-Side."
              },
              {
                "value": "ASA",
                "label": "ASA",
                "isCorrect": false,
                "feedback": "Not quite, ASA uses two angles and the included side."
              },
              {
                "value": "SSS",
                "label": "SSS",
                "isCorrect": false,
                "feedback": "SSS requires three sides, not two sides and one angle."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>In similar triangles, corresponding angles are <span class=\"font-semibold\">_____</span> and corresponding sides are in the same ratio, known as the <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "equal",
                "label": "equal",
                "isCorrect": true,
                "feedback": "Correct! Corresponding angles are equal."
              },
              {
                "value": "proportional",
                "label": "proportional",
                "isCorrect": false,
                "feedback": "Angles must be equal, not just proportional."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "scale factor",
                "label": "scale factor",
                "isCorrect": true,
                "feedback": "Correct! This is the ratio of corresponding sides."
              },
              {
                "value": "hypotenuse",
                "label": "hypotenuse",
                "isCorrect": false,
                "feedback": "Hypotenuse is a side in right triangles, not the ratio."
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
      "prompt": "<span>Explain how to prove two triangles are congruent using the ASA criterion and describe how scale factors are used when the triangles are similar.</span>",
      "hint": "Remember to identify the equal angles and the included side first, and then explain the properties of similar triangles regarding corresponding angles and side ratios.",
      "mustHaveKeywords": ["ASA", "included side", "corresponding angles", "scale factor", "proportional sides"],
      "optionalKeywords": ["formal proof", "congruence criterion", "corresponding sides"],
      "modelAnswer": "<span>To prove two triangles are congruent using the ASA criterion, first identify two angles in one triangle that are equal to two angles in the other triangle. Then show that the side between these two angles (the included side) is also equal. By ASA, this confirms the triangles are congruent.</span><span>For similar triangles, corresponding angles are equal, but corresponding sides are proportional. The ratio between corresponding sides is called the scale factor. Applying this scale factor allows us to find unknown side lengths in one triangle based on the other.</span>",
      "scaffoldPrompts": ["Identify two pairs of equal angles.", "Find the included side between these angles and confirm it is equal.", "State the ASA congruence criterion.", "Explain what happens to side lengths in similar triangles.", "Define scale factor and how it relates to side lengths."]
    }
  }
};