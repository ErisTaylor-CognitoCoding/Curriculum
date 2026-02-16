window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.5 - Scale factors for area and volume (Part 2)",
  "strapline": "Explore how scale factors affect the area and volume of shapes and learn to solve related problems.",
  "learningObjectives": [
    "Students should understand that when a shape is enlarged by a linear scale factor k, the area is multiplied by k² (Maths 3.5)",
    "Students should understand that when a shape is enlarged by a linear scale factor k, the volume is multiplied by k³ (Maths 3.5)",
    "Students should apply scale factor relationships to solve problems involving similar shapes in 2D and 3D contexts (Maths 3.5)"
  ],
  "keyFormulas": [
    "Area scale factor = k\u00b2 (where k is the linear scale factor)",
    "Volume scale factor = k\u00b3 (where k is the linear scale factor)",
    "Linear scale factor (k) = new length / original length"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='100' height='100' fill='#d9eaf7' stroke='#333' /><rect x='200' y='50' width='200' height='200' fill='#74a9cf' stroke='#333' /><text x='100' y='170' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#333'>Original Square (side 10)</text><text x='300' y='270' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#333'>Enlarged Square (side 20)</text><line x1='150' y1='100' x2='200' y2='100' stroke='#333' stroke-dasharray='4' marker-end='url(#arrowhead)' /><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#333' /></marker></defs><text x='175' y='90' font-family='sans-serif' font-size='14' fill='#000'>k = 2</text></svg>",
  "step1": {
    "title": "Concept: Understanding the Linear Scale Factor (k)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>linear scale factor</strong> (k) is the number you multiply every linear dimension of a shape by to enlarge or reduce it. For example, if k = 3, all lengths become three times larger.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of resizing a photograph. If you double both the height and width, the photo's linear scale factor is 2.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the Linear Scale Factor",
      "problem": "An original rectangle has a length of 5 cm. After enlargement, the length is 15 cm. Find the linear scale factor k.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the original length?",
          "answer": "5",
          "feedback": "Correct. The original length is 5 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the new length after enlargement?",
          "answer": "15",
          "feedback": "Correct. The new length is 15 cm."
        },
        {
          "id": "q3",
          "prompt": "Calculate the linear scale factor k as new length divided by original length.",
          "answer": "3",
          "feedback": "Correct! 15 ÷ 5 = 3, so k = 3."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Scale Factor for Area (k²)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a 2D shape is enlarged by a linear scale factor <em>k</em>, its <strong>area</strong> increases by the factor <em>k<sup>2</sup></em>. This is because area depends on two dimensions: length and width.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you double the length and width of a square photo, the area becomes <em>2<sup>2</sup> = 4</em> times larger.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the Area Scale Factor",
      "problem": "A square has side length 4 cm. It's enlarged so the side length is 8 cm. What is the scale factor for the area?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the linear scale factor k?",
          "answer": "2",
          "feedback": "Correct! 8 ÷ 4 = 2."
        },
        {
          "id": "q2",
          "prompt": "What is k squared (k\u00b2)?",
          "answer": "4",
          "feedback": "Correct. 2 squared is 4."
        },
        {
          "id": "q3",
          "prompt": "By what factor does the area increase?",
          "answer": "4",
          "feedback": "Correct! The area is multiplied by 4."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Scale Factor for Volume (k³)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a 3D shape is enlarged by a linear scale factor <em>k</em>, its <strong>volume</strong> increases by the factor <em>k<sup>3</sup></em>. This happens because volume depends on three dimensions: length, width, and height.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you double the length, width, and height of a cube, its volume becomes <em>2<sup>3</sup> = 8</em> times larger.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find the Volume Scale Factor",
      "problem": "A cube has side length 3 cm. It is enlarged so its side length is 6 cm. What is the scale factor for volume?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the linear scale factor k?",
          "answer": "2",
          "feedback": "Correct. 6 ÷ 3 = 2."
        },
        {
          "id": "q2",
          "prompt": "What is k cubed (k\u00b3)?",
          "answer": "8",
          "feedback": "Correct. 2 cubed is 8."
        },
        {
          "id": "q3",
          "prompt": "By what factor does the volume increase?",
          "answer": "8",
          "feedback": "Correct! The volume is multiplied by 8."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying Scale Factors in 2D: Area Problem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the relationship between linear scale factor and area scale factor to find missing values in similar 2D shapes.</p>",
    "workedExample": {
      "title": "Worked Example: Find Missing Area",
      "problem": "Two similar triangles have a linear scale factor of 3. The area of the smaller triangle is 10 cm<sup>2</sup>. Find the area of the larger triangle.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the linear scale factor k?",
          "answer": "3",
          "feedback": "Correct. Given directly."
        },
        {
          "id": "q2",
          "prompt": "Calculate the area scale factor k\u00b2.",
          "answer": "9",
          "feedback": "Correct! 3 squared is 9."
        },
        {
          "id": "q3",
          "prompt": "Multiply the smaller area by the area scale factor to find the larger area.",
          "answer": "90",
          "feedback": "Correct. 10 × 9 = 90 cm²."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying Scale Factors in 3D: Volume Problem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the linear scale factor to find volume changes in similar 3D shapes.</p>",
    "workedExample": {
      "title": "Worked Example: Find Missing Volume",
      "problem": "Two similar cones have a linear scale factor of 0.5. The volume of the larger cone is 64 cm<sup>3</sup>. Find the volume of the smaller cone.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the linear scale factor k?",
          "answer": "0.5",
          "feedback": "Correct. Given in problem."
        },
        {
          "id": "q2",
          "prompt": "Calculate the volume scale factor k\u00b3.",
          "answer": "0.125",
          "feedback": "Correct! 0.5 cubed is 0.125."
        },
        {
          "id": "q3",
          "prompt": "Multiply the larger volume by the volume scale factor to find the smaller volume.",
          "answer": "8",
          "feedback": "Correct. 64 × 0.125 = 8 cm³."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cylinder has a radius of 4 cm and a height of 10 cm. It is enlarged by a linear scale factor of 1.5. Explain how the volume of the cylinder changes.</span>",
      "hint": "Remember to first identify the linear scale factor and then calculate the volume scale factor.",
      "mustHaveKeywords": ["linear scale factor", "volume scale factor", "k", "k³", "multiply", "original volume"],
      "optionalKeywords": ["radius", "height", "dimensions", "cylinder"],
      "modelAnswer": "<span>The linear scale factor <em>k</em> is 1.5. The volume scale factor is <em>k³ = 1.5³ = 3.375</em>. This means the volume of the enlarged cylinder is 3.375 times the original volume.</span>",
      "scaffoldPrompts": ["Identify the linear scale factor k.", "Calculate k³ to find the volume scale factor.", "Multiply the original volume by this volume scale factor."]
    }
  }
};