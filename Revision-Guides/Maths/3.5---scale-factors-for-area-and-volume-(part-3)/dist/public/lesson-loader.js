window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.5 - Scale factors for area and volume (Part 3)",
  "strapline": "Explore how enlarging shapes affects their area and volume using scale factors.",
  "learningObjectives": [
    "Students should understand that when a shape is enlarged by a linear scale factor k, the area is multiplied by k² (Maths 3.5)",
    "Students should understand that when a shape is enlarged by a linear scale factor k, the volume is multiplied by k³ (Maths 3.5)",
    "Students should apply scale factor relationships to solve problems involving similar shapes, including finding missing dimensions and calculating scaled areas and volumes (Maths 3.5)"
  ],
  "keyFormulas": [
    "Linear scale factor k: new length = k × original length",
    "Area scale factor k²: new area = k² × original area",
    "Volume scale factor k³: new volume = k³ × original volume"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='100' height='100' fill='#add8e6' stroke='#333' /><text x='100' y='175' text-anchor='middle' font-family='sans-serif' font-size='14'>Original Square</text><rect x='220' y='50' width='200' height='200' fill='#90ee90' stroke='#333' /><text x='320' y='275' text-anchor='middle' font-family='sans-serif' font-size='14'>Enlarged Square (k=2)</text><line x1='150' y1='100' x2='220' y2='100' stroke='#333' stroke-dasharray='5,5'/><text x='185' y='90' font-family='sans-serif' font-size='14' text-anchor='middle'>k=2</text></svg>",
  "step1": {
    "title": "Concept: Understanding the Linear Scale Factor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>linear scale factor (k)</strong> is the multiplier that changes the lengths of all sides of a shape. If k = 3, every length in the shape is multiplied by 3, making the shape three times bigger in length.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine resizing a photo on your phone — if you make it twice as wide, the linear scale factor k is 2, and all straight edges get twice as long.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the new length",
      "problem": "A square has a side length of <strong>4 cm</strong>. It is enlarged by a scale factor of <strong>3</strong>. What is the new side length?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the original side length?",
          "answer": "4",
          "feedback": "Correct! The original length is 4 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the scale factor (k)?",
          "answer": "3",
          "feedback": "Well done! The scale factor is 3."
        },
        {
          "id": "q3",
          "prompt": "Calculate the new side length (original length × k).",
          "answer": "12",
          "feedback": "Excellent! 4 cm × 3 = 12 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Scale Factors and Area",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a shape is enlarged by a linear scale factor <strong>k</strong>, its <strong>area</strong> changes by a factor of <strong>k²</strong>. This means every length is multiplied by k, but areas grow by the square of k.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you double the side of a square (k=2), the area becomes four times bigger because 2² = 4.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate the new area",
      "problem": "A square has an area of <strong>9 cm²</strong>. It is enlarged by a scale factor of <strong>3</strong>. What is the new area?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the original area?",
          "answer": "9",
          "feedback": "Correct! The original area is 9 cm²."
        },
        {
          "id": "q2",
          "prompt": "What is the scale factor (k)?",
          "answer": "3",
          "feedback": "Good job! k is 3."
        },
        {
          "id": "q3",
          "prompt": "Calculate the new area using k² × original area.",
          "answer": "81",
          "feedback": "Correct! 3² × 9 = 9 × 9 = 81 cm²."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Scale Factors and Volume",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a 3D shape is enlarged by a linear scale factor <strong>k</strong>, its <strong>volume</strong> changes by a factor of <strong>k³</strong>. Volumes grow by the cube of k because all three dimensions are scaled.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you triple each dimension of a cube (k=3), its volume becomes 27 times bigger since 3³ = 27.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate the new volume",
      "problem": "A cube has a volume of <strong>64 cm³</strong>. It is enlarged by a scale factor of <strong>2</strong>. What is the new volume?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the original volume?",
          "answer": "64",
          "feedback": "Correct! The original volume is 64 cm³."
        },
        {
          "id": "q2",
          "prompt": "What is the scale factor (k)?",
          "answer": "2",
          "feedback": "Good! k equals 2."
        },
        {
          "id": "q3",
          "prompt": "Calculate the new volume using k³ × original volume.",
          "answer": "512",
          "feedback": "Well done! 2³ × 64 = 8 × 64 = 512 cm³."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the new area scale factor if the linear scale factor is 4?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>8</span>",
            "isCorrect": false,
            "explanation": "<span>8 is the cube, not square of 4.</span>"
          },
          {
            "id": "b",
            "label": "<span>16</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! 4² = 16 is the area scale factor.</span>"
          },
          {
            "id": "c",
            "label": "<span>64</span>",
            "isCorrect": false,
            "explanation": "<span>64 is the cube of 4, related to volume scale factor.</span>"
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>If a volume increases by a factor of 125, what is the linear scale factor?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>25</span>",
            "isCorrect": false,
            "explanation": "<span>Linear scale factor is the cube root, not the square root.</span>"
          },
          {
            "id": "b",
            "label": "<span>5</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! 5³ = 125 so linear scale factor is 5.</span>"
          },
          {
            "id": "c",
            "label": "<span>15</span>",
            "isCorrect": false,
            "explanation": "<span>15 is unrelated here; it's not the cube root of 125.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> scale factor multiplies all lengths by the same value.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "linear",
                "label": "linear",
                "isCorrect": true,
                "feedback": "Correct! The linear scale factor changes lengths."
              },
              {
                "value": "area",
                "label": "area",
                "isCorrect": false,
                "feedback": "Incorrect. Area scale factor changes areas, not lengths."
              },
              {
                "value": "volume",
                "label": "volume",
                "isCorrect": false,
                "feedback": "Incorrect. Volume scale factor changes volumes, not lengths."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>When scaling 3D shapes, the volume is multiplied by <span class=\"font-semibold\">k<sup>_____</sup></span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "3",
                "label": "3",
                "isCorrect": true,
                "feedback": "Correct! Volume scale factor is k³."
              },
              {
                "value": "2",
                "label": "2",
                "isCorrect": false,
                "feedback": "Incorrect. 2 relates to area scaling, not volume."
              },
              {
                "value": "1",
                "label": "1",
                "isCorrect": false,
                "feedback": "Incorrect. Volume scales by cube power."
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
      "prompt": "<span>A cube has a side length of 5 cm and volume 125 cm³. It is enlarged by a scale factor of 4. Calculate the new volume and explain your process.</span>",
      "hint": "Remember to apply the volume scale factor formula and show each step.",
      "mustHaveKeywords": ["linear scale factor", "k³", "volume", "scale factor"],
      "optionalKeywords": ["cube", "side length", "dimensions"],
      "modelAnswer": "<span>First, identify the linear scale factor k = 4. The volume of a 3D shape scales by k³, so calculate 4³ = 64. Then multiply the original volume by 64 to find the new volume. The original volume is 125 cm³, so the new volume is 125 × 64 = 8000 cm³.</span>",
      "scaffoldPrompts": ["What is the linear scale factor k?", "Calculate k³ as the volume scale factor", "Multiply original volume by k³"]
    }
  }
};