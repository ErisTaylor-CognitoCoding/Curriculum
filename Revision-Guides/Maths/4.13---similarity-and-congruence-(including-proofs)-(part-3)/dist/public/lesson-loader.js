window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.13 - Similarity and congruence (including proofs) (Part 3)",
  "strapline": "Master the criteria for triangle congruence, learn to construct formal proofs, and apply similarity and scale factors with confidence.",
  "learningObjectives": [
    "Students should be able to apply the conditions for congruence of triangles (SSS, SAS, ASA, RHS) to identify congruent triangles (Maths 4.13)",
    "Students should be able to construct formal geometric proofs to demonstrate congruence and similarity using properties of corresponding angles, sides and scale factors (Maths 4.13)",
    "Students should be able to distinguish between similar and congruent shapes and apply scale factors in similarity problems (Maths 4.13)"
  ],
  "step1": {
    "title": "Concept: Congruence Criteria for Triangles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Congruent triangles are identical in both shape and size. There are four key criteria used to prove congruence without further measurement: <strong>SSS</strong> (all three sides equal), <strong>SAS</strong> (two sides and the included angle equal), <strong>ASA</strong> (two angles and the included side equal), and <strong>RHS</strong> (right angle, hypotenuse, and one other side equal).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two jigsaw pieces: if the edges (sides) and corner angles fit perfectly under these criteria, the pieces are congruent, just like the triangles.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify two triangles with sides 5cm, 6cm, 7cm and 5cm, 6cm, 7cm.</span>",
        "<span>Since all three sides are equal, by <strong>SSS</strong>, the triangles are congruent.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Constructing Formal Geometric Proofs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A formal geometric proof is a logical series of steps that explains why two shapes are congruent or similar. Each statement must be justified using definitions, given information, or geometric properties. For congruence proofs, use the criteria (SSS, SAS, ASA, RHS) along with properties like corresponding angles or sides.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given triangles ABC and DEF with AB = DE, ∠B = ∠E, and BC = EF.</span>",
        "<span>Show triangles ABC and DEF are congruent using SAS:</span>",
        "<span>State AB = DE (given), ∠B = ∠E (given), BC = EF (given), then by SAS rule, the triangles are congruent.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Corresponding Elements in Similar Shapes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Similar shapes have the same shape but not necessarily the same size. Corresponding angles are always equal, and corresponding sides are proportional by a constant called the <em>scale factor</em>. Understanding this helps in solving problems about enlargement or reduction.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a photograph and its enlarged copy. The angles in both are identical, but the sides stretch by a scale factor to make the bigger image.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Triangles PQR and STU are similar with scale factor 2.</span>",
        "<span>If PQ = 4cm, then ST = 8cm.</span>",
        "<span>All angles match: ∠P = ∠S, ∠Q = ∠T, and ∠R = ∠U.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following sets of information is sufficient to prove two triangles congruent by SAS?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Two sides and the included angle are equal</span>",
            "isCorrect": true,
            "explanation": "Correct! SAS requires two sides with the included angle equal."
          },
          {
            "id": "b",
            "label": "<span>Two sides and a non-included angle are equal</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The angle must be the one included between the two sides."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> criterion states that two triangles are congruent if their corresponding sides are in the same ratio and their corresponding angles are equal.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "similarity",
                "label": "Similarity",
                "isCorrect": true,
                "feedback": "Correct! Similarity involves proportional sides and equal angles."
              },
              {
                "value": "congruence",
                "label": "Congruence",
                "isCorrect": false,
                "feedback": "Try again. Congruence requires side lengths to be equal, not just proportional."
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
      "prompt": "<span>Explain how to prove triangles ABC and DEF are congruent using the ASA criterion, given that ∠A = ∠D, ∠B = ∠E, and side AB = DE.</span>",
      "hint": "Remember to identify the included side and justify why the given information fits the ASA criteria.",
      "mustHaveKeywords": ["ASA", "included side", "equal angles", "congruent triangles"],
      "optionalKeywords": ["corresponding sides", "proof"],
      "modelAnswer": "<span>To prove triangles ABC and DEF are congruent using ASA, first identify that ∠A and ∠D are equal, and ∠B and ∠E are equal. The side AB equals DE, and it is the side included between these two angles. Since two angles and the included side are equal in both triangles, by the ASA criterion, the triangles are congruent.</span>",
      "scaffoldPrompts": ["Identify the two equal angles first.", "Check that the side is between these angles.", "Use the ASA criteria to conclude congruence."]
    }
  }
};