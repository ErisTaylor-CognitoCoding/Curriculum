window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.5 - Scale factors for area and volume",
  "strapline": "Explore how changing the size of shapes affects their area and volume using scale factors.",
  "learningObjectives": [
    "Students should understand that when a shape is enlarged by a linear scale factor k, the area is multiplied by k\u00b2 (Maths 3.5)",
    "Students should understand that when a shape is enlarged by a linear scale factor k, the volume is multiplied by k\u00b3 (Maths 3.5)",
    "Students should be able to calculate the effect of scale factors on area and volume in problem-solving contexts (Maths 3.5)"
  ],
  "keyFormulas": [
    "Area scale factor = k\u00b2 where k is the linear scale factor",
    "Volume scale factor = k\u00b3 where k is the linear scale factor",
    "Volume of cuboid = length \u00d7 width \u00d7 height"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='30' y='50' width='100' height='100' fill='#a0c4ff' stroke='#333' />\n  <text x='80' y='170' font-family='sans-serif' font-size='14' text-anchor='middle'>Original Square (10x10)</text>\n  <rect x='180' y='30' width='200' height='200' fill='#90be6d' fill-opacity='0.7' stroke='#333' />\n  <text x='280' y='250' font-family='sans-serif' font-size='14' text-anchor='middle'>Scaled Square (20x20)</text>\n  <line x1='130' y1='100' x2='180' y2='100' stroke='#e63946' stroke-width='2' marker-end='url(#arrow)' />\n  <defs>\n    <marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto' markerUnits='strokeWidth'>\n      <path d='M0,0 L0,6 L9,3 z' fill='#e63946' />\n    </marker>\n  </defs>\n</svg>",
  "step1": {
    "title": "Understanding Linear Scale Factor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a shape is enlarged, every length in that shape is multiplied by a <strong>linear scale factor</strong> <em>k</em>. For example, if <em>k = 3</em>, every side becomes 3 times longer.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a photograph on your phone. Zooming in by a factor of 2 doubles the width and height of the picture.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating New Length After Scaling",
      "problem": "A square has side length 4 cm. It is enlarged by a linear scale factor of 2. What is the new side length?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What was the original length of one side of the square?",
          "answer": "4",
          "feedback": "Correct. The original side length is 4 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the linear scale factor k?",
          "answer": "2",
          "feedback": "Correct. The shape is enlarged by a factor of 2."
        },
        {
          "id": "q3",
          "prompt": "Calculate the new side length by multiplying the original side length by k.",
          "answer": "8",
          "feedback": "Correct! 4 cm multiplied by 2 equals 8 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "How Area Changes Using Scale Factors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When you enlarge a 2D shape by a linear scale factor <em>k</em>, the <strong>area</strong> is multiplied by <em>k\u00b2</em> because area is two-dimensional.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you double the length and width of a rectangular table, the surface area doesn't just double; it gets four times as large (2\u00b2 = 4).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating New Area After Scaling",
      "problem": "A rectangle has an area of 15 cm\u00b2. It is enlarged with a linear scale factor of 3. What is the new area?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the linear scale factor, k?",
          "answer": "3",
          "feedback": "Correct, the shape's linear dimensions are multiplied by 3."
        },
        {
          "id": "q2",
          "prompt": "By what factor is the area multiplied?",
          "answer": "9",
          "feedback": "Yes, since area scale factor = k\u00b2 = 3\u00b2 = 9."
        },
        {
          "id": "q3",
          "prompt": "Calculate the new area by multiplying the original area by 9.",
          "answer": "135",
          "feedback": "Correct, 15 \u00d7 9 = 135 cm\u00b2."
        }
      ]
    }
  },
  "step3": {
    "title": "How Volume Changes Using Scale Factors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For 3D shapes, enlarging by a linear scale factor <em>k</em> multiplies the <strong>volume</strong> by <em>k\u00b3</em> because volume is three-dimensional.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you triple the edge lengths of a cube, its volume increases by 27 times (3\u00b3 = 27).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating New Volume After Scaling",
      "problem": "A cube has a volume of 8 cm\u00b3. It is enlarged by a linear scale factor of 2. What is the new volume?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the linear scale factor k?",
          "answer": "2",
          "feedback": "Correct! The cube's edges are doubled."
        },
        {
          "id": "q2",
          "prompt": "By what factor is the volume multiplied?",
          "answer": "8",
          "feedback": "Yes, volume scale factor = k\u00b3 = 2\u00b3 = 8."
        },
        {
          "id": "q3",
          "prompt": "Calculate the new volume by multiplying the original volume by 8.",
          "answer": "64",
          "feedback": "Correct! 8 cm\u00b3 \u00d7 8 = 64 cm\u00b3."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Visualisation: Scale Factors and Area",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Observe how increasing the linear scale factor changes the area of a square.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>\n  <rect id='original' x='20' y='50' width='50' height='50' fill='#f94144' stroke='#000' />\n  <text x='45' y='120' font-family='sans-serif' font-size='14' text-anchor='middle'>Original (5x5)</text>\n  <rect id='scaled' x='120' y='20' width='100' height='100' fill='#577590' fill-opacity='0.7' stroke='#000' />\n  <text x='170' y='140' font-family='sans-serif' font-size='14' text-anchor='middle'>Scaled (10x10)</text>\n  <text x='300' y='100' font-family='sans-serif' font-size='16' fill='#222'>Area scale factor = 4 (2\u00b2)</text>\n</svg>",
    "workedExample": {
      "title": "Calculate the area scale factor",
      "problem": "The side length of the square doubles from 5 cm to 10 cm. What is the area scale factor?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the linear scale factor?",
          "answer": "2",
          "feedback": "Correct, the side length doubles."
        },
        {
          "id": "q2",
          "prompt": "Calculate the area scale factor by squaring k.",
          "answer": "4",
          "feedback": "Right! 2 squared is 4."
        }
      ]
    }
  },
  "step5": {
    "title": "Interactive Visualisation: Scale Factors and Volume",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">See how the volume changes when the linear scale factor changes for a cube.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='40' y='150' width='50' height='50' fill='#43aa8b' stroke='#000' />\n  <text x='65' y='220' font-family='sans-serif' font-size='14' text-anchor='middle'>Original Cube (5x5x5)</text>\n  <rect x='150' y='70' width='100' height='100' fill='#f3722c' fill-opacity='0.7' stroke='#000' />\n  <text x='200' y='190' font-family='sans-serif' font-size='14' text-anchor='middle'>Scaled Cube (10x10x10)</text>\n  <text x='320' y='130' font-family='sans-serif' font-size='16' fill='#222'>Volume scale factor = 8 (2\u00b3)</text>\n</svg>",
    "workedExample": {
      "title": "Calculate the volume scale factor",
      "problem": "A cube's sides increase from 5 cm to 10 cm. What is the volume scale factor?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the linear scale factor k.",
          "answer": "2",
          "feedback": "Correct, the length has doubled."
        },
        {
          "id": "q2",
          "prompt": "Calculate the volume scale factor by cubing k.",
          "answer": "8",
          "feedback": "Right! 2 cubed is 8."
        }
      ]
    }
  },
  "step6": {
    "title": "Applying Scale Factors in Problem Solving",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use scale factors to solve real-world problems involving changes in area and volume.</p>",
    "workedExample": {
      "title": "Problem: Enlarging a Prism",
      "problem": "A rectangular prism has dimensions 4 cm by 3 cm by 5 cm. It is enlarged by a linear scale factor of 3. Calculate the new volume.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the original volume of the prism?",
          "answer": "60",
          "feedback": "Correct, 4 \u00d7 3 \u00d7 5 = 60 cm\u00b3."
        },
        {
          "id": "q2",
          "prompt": "What is the linear scale factor k?",
          "answer": "3",
          "feedback": "Correct, the shape is enlarged by a factor of 3."
        },
        {
          "id": "q3",
          "prompt": "Calculate the volume scale factor (k\u00b3).",
          "answer": "27",
          "feedback": "Correct, 3\u00b3 = 27."
        },
        {
          "id": "q4",
          "prompt": "Multiply the original volume by the volume scale factor to get the new volume.",
          "answer": "1620",
          "feedback": "Correct! 60 \u00d7 27 = 1620 cm\u00b3."
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If a shape is enlarged by a linear scale factor of 4, by what factor is its area multiplied?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>4</span>",
            "isCorrect": false,
            "explanation": "Area is multiplied by the square of the scale factor, not the linear factor."
          },
          {
            "id": "b",
            "label": "<span>16</span>",
            "isCorrect": true,
            "explanation": "Correct! Area scale factor is 4\u00b2 = 16."
          },
          {
            "id": "c",
            "label": "<span>8</span>",
            "isCorrect": false,
            "explanation": "8 is the cube of 2, not related to the scale factor of 4."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>When the linear scale factor is 5, what is the volume scale factor?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>10</span>",
            "isCorrect": false,
            "explanation": "Volume scale factor is the cube, not double, of the linear scale factor."
          },
          {
            "id": "b",
            "label": "<span>25</span>",
            "isCorrect": false,
            "explanation": "25 is the square of 5, the area scale factor, not volume."
          },
          {
            "id": "c",
            "label": "<span>125</span>",
            "isCorrect": true,
            "explanation": "Correct, 5\u00b3 = 125."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> scale factor is the ratio by which every linear dimension of a shape is multiplied.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "area",
                "label": "area",
                "isCorrect": false,
                "feedback": "Not quite, area scale factor relates to two dimensions."
              },
              {
                "value": "linear",
                "label": "linear",
                "isCorrect": true,
                "feedback": "Correct! Linear scale factor scales lengths."
              },
              {
                "value": "volume",
                "label": "volume",
                "isCorrect": false,
                "feedback": "Volume scale factor relates to three dimensions."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> scale factor equals the cube of the linear scale factor.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "area",
                "label": "area",
                "isCorrect": false,
                "feedback": "Area scale factor is the square, not cube."
              },
              {
                "value": "linear",
                "label": "linear",
                "isCorrect": false,
                "feedback": "Linear scale factor is the basis for scaling, not cubed itself."
              },
              {
                "value": "volume",
                "label": "volume",
                "isCorrect": true,
                "feedback": "Correct! Volume scale factor = k\u00b3."
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
      "prompt": "<span>A cylinder has height 10 cm and radius 4 cm. It is enlarged by a linear scale factor of 2. Calculate the new surface area and volume of the cylinder.</span>",
      "hint": "Remember: Surface area scales by k\u00b2 and volume scales by k\u00b3. Use formulas: Surface area of cylinder = 2\u03C0rh + 2\u03C0r\u00b2, Volume = \u03C0r\u00b2h.",
      "mustHaveKeywords": ["linear scale factor", "area scale factor", "volume scale factor", "surface area", "volume", "multiply"],
      "optionalKeywords": ["pi (\\u03C0)", "enlargement", "radius", "height"],
      "modelAnswer": "<span>First, calculate the original surface area and volume: Surface area = 2\u03C0 \u00D7 4 \u00D7 10 + 2\u03C0 \u00D7 4\u00B2 = 80\u03C0 + 32\u03C0 = 112\u03C0 cm\u00B2.<br/>Volume = \u03C0 \u00D7 4\u00B2 \u00D7 10 = 160\u03C0 cm\u00B3.<br/>The linear scale factor k = 2.<br/>Surface area scale factor = 2\u00B2 = 4.<br/>New surface area = 112\u03C0 \u00D7 4 = 448\u03C0 cm\u00B2.<br/>Volume scale factor = 2\u00B3 = 8.<br/>New volume = 160\u03C0 \u00D7 8 = 1280\u03C0 cm\u00B3.</span>",
      "scaffoldPrompts": [
        "Calculate original surface area and volume.",
        "Identify linear scale factor k.",
        "Calculate area scale factor (k\u00b2) and volume scale factor (k\u00b3).",
        "Multiply original surface area and volume by their respective scale factors."
      ]
    }
  }
};