window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.13 - Similarity and congruence (including proofs)",
  "strapline": "Explore the properties of similar and congruent shapes, understand scale factor, and learn how to prove similarity and congruence formally.",
  "learningObjectives": [
    "Students should understand and be able to identify when two shapes are mathematically similar (corresponding angles equal and corresponding sides in the same ratio) (Maths 4.13)",
    "Students should understand and be able to identify when two shapes are congruent (identical in shape and size) (Maths 4.13)",
    "Students should be able to construct formal proofs to demonstrate similarity and congruence using properties of corresponding angles and proportional sides (Maths 4.13)"
  ],
  "keyFormulas": [
    "Concept: Ratio of corresponding sides in similar shapes = scale factor (k)",
    "Property: Corresponding angles in similar shapes are equal",
    "Property: Corresponding sides in congruent shapes are equal"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='120' height='80' fill='#cce5ff' stroke='#333' /><text x='110' y='45' font-family='sans-serif' font-size='14' text-anchor='middle'>Rectangle A</text><rect x='220' y='100' width='180' height='120' fill='#ffdbb8' stroke='#333' /><text x='310' y='95' font-family='sans-serif' font-size='14' text-anchor='middle'>Rectangle B (Enlarged)</text><line x1='170' y1='90' x2='220' y2='160' stroke='#888' stroke-dasharray='5,5' /><text x='100' y='150' font-family='sans-serif' font-size='12' fill='#333'>Width = 120</text><text x='290' y='230' font-family='sans-serif' font-size='12' fill='#333'>Width = 180</text><text x='100' y='90' font-family='sans-serif' font-size='12' fill='#333'>Height = 80</text><text x='290' y='180' font-family='sans-serif' font-size='12' fill='#333'>Height = 120</text></svg>",
  "step1": {
    "title": "Concept: Understanding Congruence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two shapes are <strong>congruent</strong> if they have exactly the same size and shape. This means all corresponding sides are equal in length and all corresponding angles are equal. Congruent shapes can be moved by rotation, reflection or translation but still remain congruent.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two identical cookie cutters. If you cut dough with both, the shapes will be the same size and shape no matter where you place them.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Congruent Sides",
      "problem": "A triangle has sides 5 cm, 7 cm, and 8 cm. Another triangle has sides 7 cm, 8 cm, and 5 cm. Are they congruent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the lengths of the sides of the first triangle? Enter as comma-separated values.",
          "answer": "5,7,8",
          "feedback": "Correct. The sides are 5 cm, 7 cm, and 8 cm."
        },
        {
          "id": "q2",
          "prompt": "What are the lengths of the sides of the second triangle? Enter as comma-separated values.",
          "answer": "7,8,5",
          "feedback": "Correct. The sides are 7 cm, 8 cm, and 5 cm."
        },
        {
          "id": "q3",
          "prompt": "Are the sizes of corresponding sides equal (yes/no)?",
          "answer": "yes",
          "feedback": "Correct. Both triangles have the same side lengths and so could be congruent."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Similarity",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two shapes are <strong>similar</strong> if they have the same shape but not necessarily the same size. This means <em>all corresponding angles are equal</em> and <em>all corresponding sides are in the same ratio</em>. One shape can be an enlargement or reduction of the other.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a photo and its smaller printed version. The printed photo is similar to the original because the shapes and angles remain the same, but the size is different.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Check Similarity of Triangles",
      "problem": "Triangle A has sides 3 cm, 4 cm, 5 cm. Triangle B has sides 6 cm, 8 cm, 10 cm. Are they similar?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the ratio of the sides of Triangle B to Triangle A for the first side?",
          "answer": "2",
          "feedback": "Correct, 6/3 = 2."
        },
        {
          "id": "q2",
          "prompt": "Is this ratio the same for the second side?",
          "answer": "yes",
          "feedback": "Correct, 8/4 = 2."
        },
        {
          "id": "q3",
          "prompt": "Is this ratio the same for the third side?",
          "answer": "yes",
          "feedback": "Correct, 10/5 = 2."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Term: Scale Factor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>scale factor</strong> is the ratio of the lengths of corresponding sides of similar shapes. It tells us how much one shape has been enlarged or reduced compared to another.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a map uses a scale factor of 1:10,000, then 1 cm on the map represents 10,000 cm (100 m) in real life.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Scale Factor",
      "problem": "A rectangle has width 5cm and height 3cm. Another rectangle is similar but has a width of 15cm. What is the scale factor?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the ratio of the wider rectangle’s width to the smaller rectangle’s width.",
          "answer": "3",
          "feedback": "Correct. 15 cm ÷ 5 cm = 3."
        },
        {
          "id": "q2",
          "prompt": "What is the expected height of the larger rectangle using the scale factor?",
          "answer": "9",
          "feedback": "Correct. Height = 3 cm × 3 = 9 cm."
        }
      ]
    }
  },
  "step4": {
    "title": "Proving Congruence: Properties and Criteria",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To prove two shapes are congruent, show that all corresponding sides and angles are equal. For triangles, common congruence criteria include <strong>SSS</strong>, <strong>SAS</strong>, and <strong>ASA</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine confirming two puzzle pieces are identical by comparing their edges and corner shapes.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Prove Triangle Congruence by SAS",
      "problem": "Triangle ABC and Triangle DEF have AB = DE = 6 cm, angle B = angle E = 60°, and BC = EF = 8 cm. Are they congruent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are two pairs of sides equal? (yes/no)",
          "answer": "yes",
          "feedback": "Correct, AB = DE and BC = EF."
        },
        {
          "id": "q2",
          "prompt": "Is the included angle equal? (yes/no)",
          "answer": "yes",
          "feedback": "Correct, angle B equals angle E."
        },
        {
          "id": "q3",
          "prompt": "Based on SAS criteria, are the triangles congruent? (yes/no)",
          "answer": "yes",
          "feedback": "Correct. The triangles are congruent by SAS."
        }
      ]
    }
  },
  "step5": {
    "title": "Proving Similarity: Using Angle-Angle (AA) Criterion and Side Ratios",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To prove similarity, show that two pairs of corresponding angles are equal (AA criterion) or that corresponding sides are proportional. If two triangles have equal angles, their sides are in proportion.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Similar to comparing shadow shapes that have the same angles but different sizes depending on the light source.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using AA Criterion",
      "problem": "Triangle XYZ has angles 50°, 60°, and 70°. Triangle PQR has angles 50°, 60°, and 70°. Are they similar?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are two corresponding angles equal? (yes/no)",
          "answer": "yes",
          "feedback": "Correct, angles 50° and 60° match."
        },
        {
          "id": "q2",
          "prompt": "Based on AA criterion, are the triangles similar? (yes/no)",
          "answer": "yes",
          "feedback": "Correct. Triangles are similar with all three angles equal."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to prove two triangles are similar using the properties of angles and sides. Include how to find the scale factor and use it to calculate missing side lengths.</span>",
      "hint": "Remember to check that corresponding angles are equal and sides are proportional. The scale factor is the ratio of one pair of corresponding sides.",
      "mustHaveKeywords": ["corresponding angles", "proportional sides", "scale factor", "similarity"],
      "optionalKeywords": ["angle-angle criterion", "enlargement"],
      "modelAnswer": "<span>To prove two triangles are similar, first show that their corresponding angles are equal, usually by using the angle-angle (AA) criterion. Then, confirm that the lengths of their corresponding sides are proportional by calculating the ratios of each pair of corresponding sides. The common ratio is the scale factor. Using this scale factor, you can multiply or divide the sides of one triangle to find missing side lengths in the other, confirming similarity and solving problems involving enlargements or reductions.</span>",
      "scaffoldPrompts": [
        "Think about how to identify corresponding angles in both triangles.",
        "Then calculate the ratios of sides to confirm proportionality.",
        "Use the scale factor to find missing lengths."
      ]
    }
  }
};