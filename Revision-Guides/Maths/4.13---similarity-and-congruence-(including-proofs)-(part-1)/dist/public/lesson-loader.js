window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.13 - Similarity and congruence (including proofs) (Part 1)",
  "strapline": "Understanding congruent and similar shapes including formal criteria like SSS.",
  "learningObjectives": [
    "Students should understand that two shapes are congruent if they have the same shape and size, and that corresponding sides and angles are equal (Maths 4.13)",
    "Students should understand that two shapes are similar if they have the same shape but different sizes, with corresponding angles equal and corresponding sides in the same ratio (Maths 4.13)",
    "Students should be able to identify congruent and similar shapes using formal criteria including SSS, SAS, ASA and RHS (Maths 4.13)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='25' y='50' width='150' height='100' fill='#a0d8f0' stroke='#03396c' stroke-width='2'/><text x='100' y='180' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#03396c'>Congruent Rectangle A</text><rect x='225' y='25' width='100' height='66' fill='#f7cac9' stroke='#920000' stroke-width='2'/><text x='275' y='110' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#920000'>Similar Rectangle B</text><line x1='25' y1='50' x2='225' y2='25' stroke='#999' stroke-dasharray='5,5'/><text x='125' y='40' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#666'>Same shape, different size</text></svg>",
  "step1": {
    "title": "Concept: What is Congruence?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two shapes are <strong>congruent</strong> when they are exactly the same in both <em>shape</em> and <em>size</em>. This means all corresponding sides have the same length, and all corresponding angles are equal. One shape can be moved by rotation, reflection or translation to exactly fit the other.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two identical cut-out paper triangles: if you place one on top of the other, they fit exactly with no overlaps or gaps.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Checking Congruency for Two Triangles",
      "problem": "You have two triangles. Triangle 1 has sides of length 5 cm, 7 cm, and 9 cm. Triangle 2 has sides 7 cm, 9 cm, and 5 cm. Are these triangles congruent based on side lengths?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the length of the shortest side of Triangle 1?",
          "answer": "5",
          "feedback": "Correct. The shortest side is 5 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the length of the shortest side of Triangle 2?",
          "answer": "5",
          "feedback": "Correct. The shortest side is also 5 cm."
        },
        {
          "id": "q3",
          "prompt": "Do all corresponding sides match in length?",
          "answer": "yes",
          "feedback": "Correct. Since all sides correspond with equal lengths, the triangles are congruent by SSS."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: What is Similarity?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Similarity</strong> means two shapes have the same shape but may have different sizes. All corresponding angles are equal, but corresponding sides are proportional with a constant <em>scale factor</em>. One shape can be an enlargement or reduction of the other.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a small photograph and a large poster of the same image: they look the same but the poster is a scaled-up version of the photo.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Scale Factor Between Similar Triangles",
      "problem": "Triangle A has sides 3 cm, 4 cm, and 5 cm. Triangle B has sides 6 cm, 8 cm, and 10 cm. Determine if these triangles are similar and find the scale factor.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the ratio of the shortest side of Triangle B to Triangle A?",
          "answer": "2",
          "feedback": "Correct. 6/3 = 2"
        },
        {
          "id": "q2",
          "prompt": "Does the ratio hold for the other sides (4 to 8 and 5 to 10)? Answer yes or no.",
          "answer": "yes",
          "feedback": "Correct. 8/4 = 2 and 10/5 = 2"
        },
        {
          "id": "q3",
          "prompt": "Are corresponding angles equal based on the side ratios? (Yes/No)",
          "answer": "yes",
          "feedback": "Correct. The triangles are similar with scale factor 2."
        }
      ]
    }
  },
  "step3": {
    "title": "Identifying Congruent Shapes Using SSS Criterion",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>SSS (Side-Side-Side)</strong> criterion confirms two triangles are congruent if all three pairs of corresponding sides are equal in length. This is a formal rule used in proofs to establish congruence.</p>",
    "analyticExample": {
      "title": "Interactive: Apply the SSS criterion",
      "problem": "Given Triangle X with sides 8 cm, 6 cm, and 10 cm, and Triangle Y with sides 6 cm, 10 cm, and 8 cm, are the triangles congruent by SSS?",
      "questions": [
        {
          "id": "q1",
          "prompt": "List the sides of Triangle X in ascending order.",
          "answer": "6,8,10",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "List the sides of Triangle Y in ascending order.",
          "answer": "6,8,10",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Based on side lengths alone, are Triangles X and Y congruent?",
          "answer": "yes",
          "feedback": "Correct. The triangles are congruent by the SSS criterion."
        }
      ]
    }
  },
  "step4": {
    "title": "Other Congruence Criteria Overview",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Besides SSS, other criteria used to prove triangle congruence include <strong>SAS</strong> (Side-Angle-Side), <strong>ASA</strong> (Angle-Side-Angle) and <strong>RHS</strong> (Right angle-Hypotenuse-Side). Each looks at different combinations of sides and angles.</p>"
  },
  "step5": {
    "title": "Interactive Check: Congruence or Similarity?",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Two triangles have all corresponding angles equal but side lengths are in ratio 1:3. What can you conclude?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The triangles are congruent</span>",
            "isCorrect": false,
            "explanation": "Incorrect - congruent triangles must have the same size."
          },
          {
            "id": "b",
            "label": "<span>The triangles are similar</span>",
            "isCorrect": true,
            "explanation": "Correct - same angles but different sizes means similarity."
          },
          {
            "id": "c",
            "label": "<span>The triangles are neither similar nor congruent</span>",
            "isCorrect": false,
            "explanation": "Incorrect - matching angles confirm similarity."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to determine if two triangles are congruent using the SSS criterion, and describe the difference between congruence and similarity.</span>",
      "hint": "Remember to include side comparison details and angle considerations.",
      "mustHaveKeywords": [
        "congruent",
        "same size",
        "same shape",
        "corresponding sides equal",
        "corresponding angles equal",
        "similar",
        "scale factor"
      ],
      "optionalKeywords": [
        "transformation",
        "rotation",
        "reflection",
        "translation"
      ],
      "modelAnswer": "<span>Two triangles are <strong>congruent</strong> if all three pairs of corresponding sides are equal in length, known as the Side-Side-Side (SSS) criterion. When triangles are congruent, their corresponding angles are also equal, meaning they are identical in both <em>shape</em> and <em>size</em>. Congruent triangles can be mapped onto each other by transformations such as rotation, reflection, or translation. In contrast, <strong>similar</strong> triangles have the same shape but different sizes. Their corresponding angles are equal, but their corresponding sides are in proportion, related by a constant scale factor. Similarity involves enlargement or reduction but not necessarily identical size.</span>",
      "scaffoldPrompts": [
        "Start by explaining what SSS means.",
        "Describe what congruence means regarding sides and angles.",
        "Explain what similarity means and how scale factor is involved."
      ]
    }
  }
};