window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.13 - Similarity and congruence (including proofs)",
  "strapline": "Understanding how shapes relate through similarity and congruence, and constructing formal proofs using angle and side properties.",
  "learningObjectives": [
    "Students should understand and be able to identify when two shapes are mathematically similar (corresponding angles equal and corresponding sides in the same ratio) (Maths 4.13)",
    "Students should understand and be able to identify when two shapes are congruent (identical in shape and size) (Maths 4.13)",
    "Students should be able to construct formal proofs to demonstrate similarity and congruence using properties of corresponding angles and proportional sides (Maths 4.13)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='50' width='140' height='100' fill='#d1e7dd' stroke='#0f5132' stroke-width='2' /><rect x='220' y='90' width='280' height='200' fill='#f8d7da' stroke='#842029' stroke-width='2' transform='scale(0.5)' /><text x='110' y='30' font-family='Arial' font-size='16' fill='#0f5132' text-anchor='middle'>Congruent Rectangle</text><text x='360' y='70' font-family='Arial' font-size='16' fill='#842029' text-anchor='middle'>Similar Rectangle (Scale factor 2)</text><line x1='180' y1='150' x2='220' y2='150' stroke='#333' stroke-dasharray='5 5' /><text x='200' y='145' font-family='Arial' font-size='14' fill='#333' text-anchor='middle'>Compare</text></svg>",
  "step1": {
    "title": "Concept: What is Congruence?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two shapes are <strong>congruent</strong> if they are exactly the same in shape and size. This means all corresponding sides have equal length and all corresponding angles are equal. Congruent shapes can be moved via rotation, reflection or translation but remain unchanged in their size or shape.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two identical jigsaw puzzle pieces. No matter how you flip or turn one piece, it will fit perfectly on the other because they are congruent.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Congruent Shapes",
      "problem": "Given two triangles, input the lengths of the sides for Triangle A (cm): a=3, b=4, c=5. Triangle B has sides: a=?, b=?, c=?. Are they congruent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter length of side a for Triangle B (cm).",
          "answer": "3",
          "feedback": "Correct. Side a matches Triangle A."
        },
        {
          "id": "q2",
          "prompt": "Enter length of side b for Triangle B (cm).",
          "answer": "4",
          "feedback": "Correct. Side b matches Triangle A."
        },
        {
          "id": "q3",
          "prompt": "Enter length of side c for Triangle B (cm).",
          "answer": "5",
          "feedback": "Correct. Side c matches Triangle A."
        }
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: Multiple Choice",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is true about congruent shapes?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>They have the same shape but different sizes.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This describes similar shapes, not congruent."
          },
          {
            "id": "b",
            "label": "<span>They are identical in shape and size with equal corresponding sides and angles.</span>",
            "isCorrect": true,
            "explanation": "Correct. Congruent shapes match exactly in size and shape."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>Two shapes are <span class=\"font-semibold\">_____</span> if all corresponding angles are equal and all corresponding sides are in the same ratio.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "congruent",
                "label": "congruent",
                "isCorrect": false,
                "feedback": "Try again. This describes identical sizes and shapes."
              },
              {
                "value": "similar",
                "label": "similar",
                "isCorrect": true,
                "feedback": "Correct! This defines similarity."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Understanding Similarity",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Shapes are <strong>similar</strong> if they have the same shape but different sizes. This means all <em>corresponding angles</em> are equal, and all <em>corresponding sides</em> are in proportion (same ratio). One shape can be an enlargement or reduction of the other.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Consider photographs: a thumbnail and a poster of the same image are similar. They look the same but differ in size.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Checking Similarity",
      "problem": "Triangle A has sides 3 cm, 4 cm, 5 cm. Triangle B has sides 6 cm, 8 cm, 10 cm. Are they similar? Enter the scale factor k from A to B:",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the ratio of side 6 cm (B) to 3 cm (A). What is k?",
          "answer": "2",
          "feedback": "Correct, 6/3 = 2."
        },
        {
          "id": "q2",
          "prompt": "Check ratio for side 8 cm (B) to 4 cm (A). Is it equal to k?",
          "answer": "2",
          "feedback": "Correct, 8/4 = 2."
        },
        {
          "id": "q3",
          "prompt": "Check ratio for side 10 cm (B) to 5 cm (A). Is it equal to k?",
          "answer": "2",
          "feedback": "Correct, 10/5 = 2. All ratios equal, so triangles are similar."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Scale Factor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Scale factor</strong> is the ratio between corresponding sides of similar shapes. If one shape is an enlargement of another by a scale factor <em>k</em>, then every side length in the enlarged shape is <em>k</em> times the length of the corresponding side in the original.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you zoom in or out on a digital image, the scale factor changes the size but keeps the shape identical.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using Scale Factor",
      "problem": "A rectangle with length 5 cm and width 3 cm is enlarged by a scale factor of 3. Enter the new length and width:",
      "questions": [
        {
          "id": "q1",
          "prompt": "New length = (old length) × k = ? cm",
          "answer": "15",
          "feedback": "Correct, 5 × 3 = 15 cm."
        },
        {
          "id": "q2",
          "prompt": "New width = (old width) × k = ? cm",
          "answer": "9",
          "feedback": "Correct, 3 × 3 = 9 cm."
        }
      ]
    }
  },
  "step6": {
    "title": "Constructing Formal Proofs of Similarity and Congruence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To prove two shapes are similar or congruent formally, you use known properties such as corresponding angles and proportional sides. For congruence proofs, use criteria like SSS, SAS, and ASA. For similarity, demonstrate equal corresponding angles and that side ratios are equal.</p>",
    "workedExample": {
      "title": "Worked Example: Proof Using SAS (Side-Angle-Side)",
      "problem": "Triangle ABC and Triangle DEF: AB = DE, angle B = angle E, and BC = EF. Are they congruent? Enter 'yes' or 'no'.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are these triangles congruent by SAS?",
          "answer": "yes",
          "feedback": "Correct, SAS shows congruence."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: True or False",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>True or False: Two shapes with all angles equal and sides in proportion are always congruent.</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>True</span>",
            "isCorrect": false,
            "explanation": "False. They are similar but not necessarily congruent unless scale factor is 1."
          },
          {
            "id": "b",
            "label": "<span>False</span>",
            "isCorrect": true,
            "explanation": "Correct. Congruence requires equal size, so scale factor must be 1."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Fill in the Blanks: Terms in Proofs",
    "cloze": [
      {
        "id": "cloze-2",
        "sentence": "<span>For congruence proofs, criteria like <span class=\"font-semibold\">_____</span>, SAS and ASA are commonly used.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "SSS",
                "label": "SSS",
                "isCorrect": true,
                "feedback": "Correct! SSS stands for 'Side Side Side'."
              },
              {
                "value": "Pythagoras",
                "label": "Pythagoras",
                "isCorrect": false,
                "feedback": "Incorrect. Pythagoras is used for right triangles, not congruence criteria."
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Example Proof: Proving Similarity",
    "explanation": "<p>Given two triangles where two pairs of angles are equal, prove the triangles are similar by AA (Angle-Angle) similarity.</p>",
    "workedExample": {
      "title": "Worked Example: AA Similarity Proof",
      "problem": "Triangle XYZ has angles 50°, 60°, 70°. Triangle PQR has angles 50°, 60°, 70°. Are the triangles similar? Type 'yes' or 'no'.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are the triangles similar by AA?",
          "answer": "yes",
          "feedback": "Correct. Two equal angles guarantee similarity."
        }
      ]
    }
  },
  "step10": {
    "title": "Interactive Diagram: Identify Corresponding Parts",
    "explanation": "<p>Use the diagram to identify corresponding angles and sides between two triangles.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><polygon points='50,250 200,50 350,250' fill='#CCE5FF' stroke='#004085' stroke-width='3'/><text x='45' y='265' font-family='Arial' font-size='16' fill='#004085'>A</text><text x='200' y='40' font-family='Arial' font-size='16' fill='#004085'>B</text><text x='355' y='265' font-family='Arial' font-size='16' fill='#004085'>C</text><polygon points='100,225 225,100 300,225' fill='#FFD9CC' stroke='#7F0000' stroke-width='3'/><text x='95' y='240' font-family='Arial' font-size='16' fill='#7F0000'>D</text><text x='225' y='90' font-family='Arial' font-size='16' fill='#7F0000'>E</text><text x='305' y='240' font-family='Arial' font-size='16' fill='#7F0000'>F</text></svg>",
    "workedExample": {
      "title": "Question: Corresponding Angles",
      "problem": "Which angle in triangle DEF corresponds to angle B in triangle ABC? Enter letter D, E, or F.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Corresponding angle to B is?",
          "answer": "E",
          "feedback": "Correct. Angle B corresponds to angle E."
        }
      ]
    }
  },
  "step11": {
    "title": "Proof Writing: Structured Steps",
    "explanation": "<p>Learn how to write a formal proof step-by-step by stating what is known, what you need to prove, and supporting each claim with reason.</p>",
    "workedExample": {
      "title": "Worked Example: Writing a Congruence Proof",
      "problem": "Prove triangle ABC ≅ triangle DEF given AB = DE, AC = DF, and angle A = angle D.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which congruence criterion applies? (SSS / SAS / ASA / RHS)",
          "answer": "SAS",
          "feedback": "Correct, two sides and the included angle."
        },
        {
          "id": "q2",
          "prompt": "Name one pair of corresponding sides equal.",
          "answer": "AB and DE",
          "feedback": "Correct, given AB = DE."
        },
        {
          "id": "q3",
          "prompt": "State the pair of equal angles.",
          "answer": "angle A and angle D",
          "feedback": "Correct, given angle A = angle D."
        }
      ]
    }
  },
  "step12": {
    "title": "Knowledge Check: MCQ on Criteria",
    "mcqs": [
      {
        "id": "mcq-3",
        "question": "<span>Which of the following is NOT a valid method to prove two triangles are congruent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>SSS (Side Side Side)</span>",
            "isCorrect": false,
            "explanation": "SSS is a valid congruence criterion."
          },
          {
            "id": "b",
            "label": "<span>SAS (Side Angle Side)</span>",
            "isCorrect": false,
            "explanation": "SAS is a valid congruence criterion."
          },
          {
            "id": "c",
            "label": "<span>SSA (Side Side Angle)</span>",
            "isCorrect": true,
            "explanation": "SSA is not generally valid to prove congruence."
          }
        ]
      }
    ]
  },
  "step13": {
    "title": "Practice: Proving Similarity via Side Ratios",
    "workedExample": {
      "title": "Example: Prove Triangle Similarity",
      "problem": "Triangles XYZ and PQR have side lengths: XY=6 cm, YZ=9 cm, XZ=12 cm; and PQ=4 cm, QR=6 cm, PR=8 cm. Calculate side ratios and decide if triangles are similar.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate ratio XY / PQ:",
          "answer": "1.5",
          "feedback": "Correct, 6 / 4 = 1.5."
        },
        {
          "id": "q2",
          "prompt": "Calculate ratio YZ / QR:",
          "answer": "1.5",
          "feedback": "Correct, 9 / 6 = 1.5."
        },
        {
          "id": "q3",
          "prompt": "Calculate ratio XZ / PR:",
          "answer": "1.5",
          "feedback": "Correct, 12 / 8 = 1.5."
        },
        {
          "id": "q4",
          "prompt": "Are triangles similar based on side ratios?",
          "answer": "yes",
          "feedback": "All ratios equal. Triangles are similar."
        }
      ]
    }
  },
  "step14": {
    "title": "Summary: Differences Between Similarity and Congruence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Congruent</strong> shapes have the same size and shape (all sides and angles exactly equal). <strong>Similar</strong> shapes have the same shape but possibly different sizes; corresponding angles equal, sides proportional. Use scale factor to describe enlargement or reduction.</p>"
  },
  "step15": {
    "title": "Review Quiz: True or False",
    "mcqs": [
      {
        "id": "mcq-4",
        "question": "<span>True or False: Similar figures always have a scale factor of 1.</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>True</span>",
            "isCorrect": false,
            "explanation": "False. Scale factor may be any positive number, 1 means congruent."
          },
          {
            "id": "b",
            "label": "<span>False</span>",
            "isCorrect": true,
            "explanation": "Correct. Scale factor can vary; only 1 means identical size."
          }
        ]
      }
    ]
  },
  "step16": {
    "title": "Interactive Review: Match Definitions",
    "cloze": [
      {
        "id": "cloze-3",
        "sentence": "<span>Match the term to its definition: <br>1. Congruent<br>2. Similar<br>3. Scale Factor</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "identical_shape_size",
                "label": "1 - Identical shape and size",
                "isCorrect": true,
                "feedback": "Correct, that is congruent."
              },
              {
                "value": "same_shape_ratio_sides",
                "label": "2 - Same shape, proportional sides",
                "isCorrect": true,
                "feedback": "Correct, that is similarity."
              },
              {
                "value": "ratio_sides_enlargement",
                "label": "3 - Ratio of corresponding sides",
                "isCorrect": true,
                "feedback": "Correct, that defines scale factor."
              }
            ]
          }
        ]
      }
    ]
  },
  "step17": {
    "title": "Final Practice: Proof Using SSS for Congruence",
    "workedExample": {
      "title": "Worked Example: SSS Proof",
      "problem": "Triangles ABC and DEF have sides: AB=7 cm, BC=5 cm, AC=6 cm; DE=7 cm, EF=6 cm, DF=5 cm. Are they congruent? Enter 'yes' or 'no'.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are the corresponding sides equal in length?",
          "answer": "yes",
          "feedback": "Correct, all pairs match."
        },
        {
          "id": "q2",
          "prompt": "Are triangles congruent by SSS?",
          "answer": "yes",
          "feedback": "Correct, all three sides equal so triangles are congruent."
        }
      ]
    }
  },
  "step18": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to prove that two triangles are similar using properties of corresponding angles and side ratios. Then state how you would prove congruence using criteria such as SAS or SSS.</span>",
      "hint": "Remember to check both angle equality and side proportionality for similarity, and exact side and angle matches for congruence.",
      "mustHaveKeywords": ["corresponding angles", "side ratios", "SAS", "SSS", "angle equality", "proportional sides"],
      "optionalKeywords": ["AA", "ASA", "scale factor", "formal proof"],
      "modelAnswer": "<span>To prove two triangles are similar, first show that at least two corresponding angles are equal (AA), or show that all corresponding angles are equal. Then demonstrate that the sides around those angles are in the same ratio, called the scale factor. For congruence, you must show that all corresponding sides and angles are exactly equal. You can use criteria such as Side-Angle-Side (SAS) where two sides and the included angle are equal, or Side-Side-Side (SSS) where all three sides are equal in length. The proof should be structured logically, stating given information and reasons for each step.</span>",
      "scaffoldPrompts": ["Start by identifying corresponding angles and sides.", "Check for equality of angles for similarity.", "Calculate ratios of sides to confirm scale factor.", "Explain criteria needed for congruence.", "Provide a logical sequence of statements with reasons."]
    }
  }
};