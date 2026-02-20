window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.5 - Scale factors for area and volume",
  "strapline": "Understand how linear scale factors affect area and volume, and learn to calculate these effects in problem-solving contexts.",
  "learningObjectives": [
    "Students should understand that when a shape is enlarged by a linear scale factor k, the area is multiplied by k² (Maths 3.5)",
    "Students should understand that when a shape is enlarged by a linear scale factor k, the volume is multiplied by k³ (Maths 3.5)",
    "Students should be able to calculate the effect of scale factors on area and volume in problem-solving contexts (Maths 3.5)"
  ],
  "keyFormulas": [
    "Linear scale factor: k (ratio of enlargement for lengths)",
    "Area scale factor: k² (area multiplied by k squared)",
    "Volume scale factor: k³ (volume multiplied by k cubed)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='100' width='100' height='80' fill='#8ecae6' stroke='#023047' stroke-width='2'/><text x='100' y='195' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#023047'>Original Rectangle</text><rect x='200' y='50' width='200' height='160' fill='#219ebc' stroke='#023047' stroke-width='2' opacity='0.7'/><text x='300' y='230' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#023047'>Enlarged (k=2)</text></svg>",
  "step1": {
    "title": "Concept: Linear Scale Factor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a shape is enlarged, each length measurement is multiplied by a <strong>linear scale factor</strong> <em>k</em>. For example, if <em>k = 3</em>, each side of the shape becomes 3 times longer.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a small photo that you zoom in on your phone. The photo gets bigger, and each side stretches by the same scale factor.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Applying a Linear Scale Factor",
      "problem": "A square has a side length of <strong>4 cm</strong>. If the square is enlarged by a linear scale factor of <strong>3</strong>, what is the new side length?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the original side length of the square.",
          "answer": "4",
          "feedback": "Correct. The original side length is 4 cm."
        },
        {
          "id": "q2",
          "prompt": "Enter the linear scale factor <em>k</em>.",
          "answer": "3",
          "feedback": "Correct. The scale factor is 3."
        },
        {
          "id": "q3",
          "prompt": "Calculate the new side length by multiplying the original side by the scale factor.",
          "answer": "12",
          "feedback": "Exactly! 4 cm × 3 = 12 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Area Scale Factor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a 2D shape is enlarged by a linear scale factor <em>k</em>, its <strong>area</strong> increases by <em>k²</em>. This happens because area depends on two dimensions: length and width, both scaled by <em>k</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you blow up a balloon to twice its diameter, the surface area grows by four times (2²), because both dimensions are scaled.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Area Change After Enlargement",
      "problem": "A rectangle with area <strong>20 cm²</strong> is enlarged by a scale factor of <strong>2</strong>. What is the area of the enlarged rectangle?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the scale factor <em>k</em>.",
          "answer": "2",
          "feedback": "Correct. The scale factor is 2."
        },
        {
          "id": "q2",
          "prompt": "Calculate the scale factor squared, <em>k²</em>.",
          "answer": "4",
          "feedback": "Right. 2 squared is 4."
        },
        {
          "id": "q3",
          "prompt": "Multiply the original area by <em>k²</em> to find the new area.",
          "answer": "80",
          "feedback": "Correct! 20 × 4 = 80 cm²."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Volume Scale Factor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a 3D shape is enlarged by linear scale factor <em>k</em>, its volume increases by <em>k³</em>. Volume depends on three dimensions, so all are scaled by <em>k</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">When a cube's edges are doubled, its volume grows eight times because volume scales as the cube of the scale factor.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Volume Change After Enlargement",
      "problem": "A cube with volume <strong>27 cm³</strong> is enlarged by a scale factor of <strong>3</strong>. What is the volume of the enlarged cube?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the scale factor <em>k</em>.",
          "answer": "3",
          "feedback": "Correct. The scale factor is 3."
        },
        {
          "id": "q2",
          "prompt": "Calculate <em>k³</em> (cube of the scale factor).",
          "answer": "27",
          "feedback": "Good. 3 cubed is 27."
        },
        {
          "id": "q3",
          "prompt": "Multiply the original volume by <em>k³</em> to find the new volume.",
          "answer": "729",
          "feedback": "Exactly! 27 × 27 = 729 cm³."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Example: Combining Linear, Area, and Volume Scale Factors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's explore how linear scale factors affect lengths, areas, and volumes together using a cube.</p>",
    "workedExample": {
      "title": "Worked Example: Scaling a Cube",
      "problem": "A cube has sides of length <strong>5 cm</strong>, surface area <strong>150 cm²</strong>, and volume <strong>125 cm³</strong>. The cube is enlarged by a scale factor <em>k</em>. You will calculate the new length, surface area, and volume step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the scale factor <em>k</em>.",
          "answer": "2",
          "feedback": "Correct. The scale factor is 2."
        },
        {
          "id": "q2",
          "prompt": "Calculate the new side length (original length × k).",
          "answer": "10",
          "feedback": "Right! 5 cm × 2 = 10 cm."
        },
        {
          "id": "q3",
          "prompt": "Calculate the new surface area (original surface area × k²).",
          "answer": "600",
          "feedback": "Correct! 150 cm² × 4 = 600 cm²."
        },
        {
          "id": "q4",
          "prompt": "Calculate the new volume (original volume × k³).",
          "answer": "1000",
          "feedback": "Exactly! 125 cm³ × 8 = 1000 cm³."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If the linear scale factor is 4, what is the area scale factor?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>8</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Area scales by k squared, so 4² = 16."
          },
          {
            "id": "b",
            "label": "<span>16</span>",
            "isCorrect": true,
            "explanation": "Correct! The area scale factor is 16 when k = 4."
          },
          {
            "id": "c",
            "label": "<span>64</span>",
            "isCorrect": false,
            "explanation": "64 is the volume scale factor, not area."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>A rectangular prism’s volume increases by a factor of 125 after enlargement. What was the linear scale factor?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>3</span>",
            "isCorrect": false,
            "explanation": "3 cubed is 27, which is too small."
          },
          {
            "id": "b",
            "label": "<span>5</span>",
            "isCorrect": true,
            "explanation": "Correct! 5³ = 125."
          },
          {
            "id": "c",
            "label": "<span>25</span>",
            "isCorrect": false,
            "explanation": "25 squared is 625, unrelated to volume here."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> scale factor changes the lengths of a shape.</span>",
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
                "feedback": "Incorrect. Area scale factors multiply areas, not lengths."
              },
              {
                "value": "volume",
                "label": "volume",
                "isCorrect": false,
                "feedback": "Incorrect. Volume scale factors multiply volume, not lengths."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>If a shape is enlarged by a linear scale factor <em>k</em>, its volume is multiplied by <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "k²",
                "label": "k²",
                "isCorrect": false,
                "feedback": "Incorrect. k squared relates to area, not volume."
              },
              {
                "value": "k³",
                "label": "k³",
                "isCorrect": true,
                "feedback": "Correct! Volume scales by k cubed."
              },
              {
                "value": "k",
                "label": "k",
                "isCorrect": false,
                "feedback": "Incorrect. k relates to linear dimensions only."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cylindrical water tank has a radius of 3 m, height 5 m, and volume V. The tank is enlarged so every dimension is multiplied by a scale factor of 4. Calculate the new volume of the enlarged tank and explain how the scale factor affects the volume.</span>",
      "hint": "Remember to cube the linear scale factor to find the volume scale factor.",
      "mustHaveKeywords": [
        "linear scale factor",
        "volume scale factor",
        "cube",
        "multiply"
      ],
      "optionalKeywords": [
        "dimensions",
        "scaled",
        "volume formula"
      ],
      "modelAnswer": "<span>When the tank is enlarged by a linear scale factor of 4, the volume increases by 4<sup>3</sup> = 64 times. The original volume V = π × 3² × 5 = 45π m³. The new volume = 64 × 45π = 2880π m³.</span>",
      "scaffoldPrompts": [
        "Step 1: Identify the linear scale factor and what it does.",
        "Step 2: Calculate the original volume using the formula V = πr²h.",
        "Step 3: Find the volume scale factor by cubing the linear scale factor.",
        "Step 4: Multiply the original volume by the volume scale factor for the new volume."
      ]
    }
  }
};