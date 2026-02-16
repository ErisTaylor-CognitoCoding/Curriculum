window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.8 - Arcs, sectors, and segments",
  "strapline": "Understanding and calculating arc lengths, areas and perimeters of sectors and segments within circles.",
  "learningObjectives": [
    "Students should calculate arc lengths, perimeters and areas of sectors of circles (Maths 4.8)",
    "Students should calculate areas and perimeters of segments of circles (Maths 4.8)",
    ""
  ],
  "keyFormulas": [
    "Arc length = (θ/360) × 2πr",
    "Area of sector = (θ/360) × πr²",
    "Area of segment = Area of sector – Area of triangle",
    "Perimeter of sector = 2r + arc length"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='100' fill='#e3f2fd' stroke='#1976d2' stroke-width='2'/><path d='M200 150 L290 150 A100 100 0 0 1 140 230 Z' fill='#64b5f6' stroke='#1565c0' stroke-width='2'/><line x1='200' y1='150' x2='290' y2='150' stroke='#0d47a1' stroke-width='3' /><line x1='200' y1='150' x2='140' y2='230' stroke='#0d47a1' stroke-width='3' /><text x='220' y='145' font-family='sans-serif' font-size='14' fill='#0d47a1'>r</text><text x='230' y='190' font-family='sans-serif' font-size='14' fill='#0d47a1'>Arc</text><text x='150' y='140' font-family='sans-serif' font-size='14' fill='#0d47a1'>Chord</text></svg>",
  "step1": {
    "title": "Concept: Understanding an Arc",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>arc</strong> is a curved part of the circumference of a circle. It’s measured as a fraction of the full circle's circumference, depending on the angle at the center that it subtends.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a clock: the path traced by the minute hand between 12 and 3 is an arc representing one-quarter of the circle.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Arc Length",
      "problem": "Find the length of an arc with radius 7 cm and central angle 60°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the fraction of the circle's circumference represented by the 60° angle? (Enter angle ÷ 360)",
          "answer": "0.1667",
          "feedback": "Correct! 60° ÷ 360° = 1/6 ≈ 0.1667."
        },
        {
          "id": "q2",
          "prompt": "Calculate the full circumference of the circle (2 × π × 7). Enter your answer rounded to 2 decimals.",
          "answer": "43.98",
          "feedback": "Correct! 2 × π × 7 ≈ 43.98 cm."
        },
        {
          "id": "q3",
          "prompt": "Calculate the arc length by multiplying the fraction by the circumference.",
          "answer": "7.33",
          "feedback": "Correct! Arc length = 1/6 × 43.98 ≈ 7.33 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding a Sector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>sector</strong> is a 'slice' of the circle bounded by two radii and the arc. Its area is a fraction of the total circle's area, based on the angle at the center.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like a pizza slice — the bigger the slice angle, the bigger the sector.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Sector Area",
      "problem": "Find the area of a sector with radius 10 cm and angle 90°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What fraction of the circle does the 90° sector represent? (90 ÷ 360)",
          "answer": "0.25",
          "feedback": "Correct. 90° is 1/4 of the full circle."
        },
        {
          "id": "q2",
          "prompt": "What is the full area of the circle? (π × r²) Enter your answer rounded to 2 decimals.",
          "answer": "314.16",
          "feedback": "Correct! π × 10² = 314.16 cm²."
        },
        {
          "id": "q3",
          "prompt": "Calculate the sector area by multiplying the fraction by the full area.",
          "answer": "78.54",
          "feedback": "Correct! Sector area = 1/4 × 314.16 = 78.54 cm²."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding a Segment",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>segment</strong> is the area between a chord and its corresponding arc. The <em>minor segment</em> is smaller than a semicircle, the <em>major segment</em> is larger. Its area is calculated by subtracting the area of the triangle formed by the chord and two radii from the sector area.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine cutting off a slice from a pizza not just at the edges of the slice but a straight cut across the curved crust, what remains between that cut and the curved crust is a segment.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Segment Area",
      "problem": "Find the area of a segment with radius 8 cm and central angle 60°. (Hint: Find sector area and subtract triangle area.)",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the sector area first using (θ/360 × πr²). Enter your answer rounded to 2 decimals.",
          "answer": "67.02",
          "feedback": "Correct! (60/360) × π × 8² ≈ 67.02 cm²."
        },
        {
          "id": "q2",
          "prompt": "Find the area of the triangle formed by the two radii and chord. Use formula: (1/2) × r² × sin θ. Enter answer rounded to 2 decimals.",
          "answer": "27.71",
          "feedback": "Correct! (1/2) × 8² × sin 60° ≈ 27.71 cm²."
        },
        {
          "id": "q3",
          "prompt": "Calculate the segment area by subtracting triangle area from sector area.",
          "answer": "39.31",
          "feedback": "Correct! 67.02 – 27.71 = 39.31 cm²."
        }
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: Multiple Choice Questions (MCQ)",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which formula correctly gives the arc length of a circle's sector?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Arc length = (θ/360) × 2πr</span>",
            "isCorrect": true,
            "explanation": "<span>Correct, because arc length is a fraction of circumference.</span>"
          },
          {
            "id": "b",
            "label": "<span>Arc length = πr² × (θ/360)</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect; that formula is for sector area, not arc length.</span>"
          },
          {
            "id": "c",
            "label": "<span>Arc length = 2r + (θ/360) × πr²</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect formula mixing perimeter and area.</span>"
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What part of the circle does a segment represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The area between two radii and the arc</span>",
            "isCorrect": false,
            "explanation": "<span>That is a sector, not a segment.</span>"
          },
          {
            "id": "b",
            "label": "<span>The area between a chord and the arc it cuts off</span>",
            "isCorrect": true,
            "explanation": "<span>Correct, this defines a segment.</span>"
          },
          {
            "id": "c",
            "label": "<span>The entire circumference of a circle</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect, circumference is the circle perimeter.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is a curved section of the circumference determined by the angle at the centre.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "arc",
                "label": "Arc",
                "isCorrect": true,
                "feedback": "<span>Correct! An arc is a curved part of the circumference.</span>"
              },
              {
                "value": "sector",
                "label": "Sector",
                "isCorrect": false,
                "feedback": "<span>Try again. A sector is an area, not just the curve.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> is the 'slice' of a circle bounded by two radii and an arc.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "sector",
                "label": "Sector",
                "isCorrect": true,
                "feedback": "<span>Correct! A sector is like a pizza slice.</span>"
              },
              {
                "value": "segment",
                "label": "Segment",
                "isCorrect": false,
                "feedback": "<span>Incorrect. A segment includes a chord, not two radii.</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-3",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> is the area between a chord and the arc it cuts off.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "segment",
                "label": "Segment",
                "isCorrect": true,
                "feedback": "<span>Correct! A segment lies between a chord and its arc.</span>"
              },
              {
                "value": "arc",
                "label": "Arc",
                "isCorrect": false,
                "feedback": "<span>Try again. An arc is just the curved boundary.</span>"
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
      "prompt": "<span>A circle has a radius of 12 cm. Calculate:</span><ul><li>The length of an arc intercepted by a central angle of 45°</li><li>The area of the sector formed by this central angle.</li><li>The area of the segment formed by the same angle.</li></ul>",
      "hint": "<span>Use formulas for arc length, sector area, and subtract the triangle area from sector area for the segment.</span>",
      "mustHaveKeywords": ["arc length", "sector area", "segment area", "central angle", "radius", "triangle area"],
      "optionalKeywords": ["perimeter", "sine function", "subtract"],
      "modelAnswer": "<span>First, calculate arc length = (45/360) × 2π × 12 = (1/8) × 75.40 = 9.42 cm.<br>Second, sector area = (45/360) × π × 12² = (1/8) × 452.39 = 56.55 cm².<br>Third, find triangle area: (1/2) × 12² × sin 45° = 72 × 0.707 = 50.91 cm².<br>Finally, segment area = sector area – triangle area = 56.55 – 50.91 = 5.64 cm².</span>",
      "scaffoldPrompts": [
        "Calculate fraction of circle for 45° angle.",
        "Calculate full circumference and circle area.",
        "Find sector area using fraction and circle area.",
        "Calculate triangle area using (1/2) × r² × sin θ.",
        "Subtract triangle area from sector area to find segment area."
      ]
    }
  }
};