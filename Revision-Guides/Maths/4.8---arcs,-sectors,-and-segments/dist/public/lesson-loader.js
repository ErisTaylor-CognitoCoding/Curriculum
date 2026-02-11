window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.8 - Arcs, sectors, and segments",
  "strapline": "Calculating lengths and areas related to arcs, sectors, and segments of circles",
  "learningObjectives": [
    "Students should calculate arc lengths, perimeters and areas of sectors of circles (Maths 4.8)",
    "Students should calculate areas and perimeters of segments of circles (Maths 4.8)"
  ],
  "step1": {
    "title": "Concept 1: Arc",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An arc is a curved section of the circumference of a circle. It is measured as a portion of the total circumference, based on the central angle in degrees. The length of the arc can be calculated by finding what fraction the central angle is of 360°, then multiplying that fraction by the total circumference (2πr).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a circular clock face. The arc is like the curved path the minute hand travels between two points on the clock’s edge.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a circle of radius 7 cm and a central angle of 90°, find the arc length.</span>",
        "<span>Step 1: Find the fraction of the circle = 90° ÷ 360° = 1/4.</span>",
        "<span>Step 2: Calculate circumference = 2 × π × 7 = 14π cm.</span>",
        "<span>Step 3: Multiply fraction by circumference = 1/4 × 14π = 3.5π cm.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Sector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A sector is a 'slice' of a circle bounded by two radii and the arc between them, like a pizza slice. The area of a sector depends on the size of the central angle. To find the area, calculate the fraction of the full circle area represented by the central angle, then multiply by the area of the full circle (πr²).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of cutting a pizza into equal slices. Each slice is a sector of the pizza’s circular base.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the area of a sector with radius 10 cm and central angle 72°.</span>",
        "<span>Step 1: Find fraction of circle = 72° ÷ 360° = 1/5.</span>",
        "<span>Step 2: Calculate full circle area = π × 10² = 100π cm².</span>",
        "<span>Step 3: Multiply fraction by full area = 1/5 × 100π = 20π cm².</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Segment",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A segment of a circle is the region between a chord and the arc it cuts off. A minor segment is smaller than a semicircle and a major segment is larger. To find the area of a segment, subtract the area of the triangle formed by the chord and the center of the circle from the area of the sector enclosing that segment.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine cutting a slice of cake where the bottom edge is straight (the chord) and the top edge is curved (the arc); the cake slice above the chord and under the curved top forms the segment.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a circle with radius 8 cm and central angle 60°, find the area of the segment.</span>",
        "<span>Step 1: Calculate sector area = (60° ÷ 360°) × π × 8² = (1/6) × 64π = 10.67π cm².</span>",
        "<span>Step 2: Calculate area of the isosceles triangle formed by two radii and chord using formula: (1/2) × r² × sin(θ) = (1/2) × 8² × sin 60° = 32 × (√3/2) = 16√3 cm².</span>",
        "<span>Step 3: Find segment area = sector area − triangle area = 10.67π − 16√3 cm² (leave exact or approximate).</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of these formulas correctly gives the length of an arc?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Arc length = (θ / 360°) × 2πr</span>",
            "isCorrect": true,
            "explanation": "This multiplies the fraction of the circle (θ/360°) by the circumference, giving the arc length."
          },
          {
            "id": "b",
            "label": "<span>Arc length = πr² × (θ / 360°)</span>",
            "isCorrect": false,
            "explanation": "This formula is for the area of a sector, not the arc length."
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
        "sentence": "<span>An <span class=\"font-semibold\">_____</span> is a curved part of a circle’s circumference.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "arc",
                "label": "arc",
                "isCorrect": true,
                "feedback": "Correct! The curved section is called an arc."
              },
              {
                "value": "sector",
                "label": "sector",
                "isCorrect": false,
                "feedback": "Try again. A sector includes radii and the arc, but the curved part alone is called an arc."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-2",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> is a slice of a circle bounded by two radii and an arc.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "sector",
                "label": "sector",
                "isCorrect": true,
                "feedback": "Correct! A sector includes two radii and the arc."
              },
              {
                "value": "segment",
                "label": "segment",
                "isCorrect": false,
                "feedback": "Try again. This describes a sector, not a segment."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-3",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> is the area between a chord and the arc it cuts off.</span>",
        "blanks": [
          {
            "id": "b3",
            "options": [
              {
                "value": "segment",
                "label": "segment",
                "isCorrect": true,
                "feedback": "Correct! The segment is the area between chord and arc."
              },
              {
                "value": "sector",
                "label": "sector",
                "isCorrect": false,
                "feedback": "Try again. A sector is larger, including two radii."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Calculating Perimeter of a Sector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The perimeter of a sector is the sum of the lengths of the two radii and the arc length. This is calculated as: Perimeter = 2r + arc length.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the perimeter of a sector with radius 5 cm and central angle 120°.</span>",
        "<span>Step 1: Calculate arc length = (120° ÷ 360°) × 2π × 5 = (1/3) × 10π = 10.47 cm.</span>",
        "<span>Step 2: Calculate perimeter = 2 × 5 + 10.47 = 20.47 cm.</span>"
      ]
    }
  },
  "step9": {
    "title": "Calculating Perimeter of a Segment",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The perimeter of a segment includes the length of the chord plus the arc length that bounds the segment.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the perimeter of a segment with radius 6 cm and central angle 90°.</span>",
        "<span>Step 1: Calculate arc length = (90° ÷ 360°) × 2π × 6 = (1/4) × 12π = 3π ≈ 9.42 cm.</span>",
        "<span>Step 2: Calculate chord length using formula: chord = 2r × sin(θ/2) = 2 × 6 × sin 45° = 12 × (√2/2) = 8.49 cm.</span>",
        "<span>Step 3: Calculate perimeter = arc length + chord length = 9.42 + 8.49 = 17.91 cm.</span>"
      ]
    }
  },
  "step10": {
    "title": "Practice Question: Arc Length",
    "practice": {
      "prompt": "<span>Calculate the arc length of a sector with radius 15 cm and central angle 72°.</span>",
      "hint": "<span>Remember to find the fraction of the circumference corresponding to the angle first.</span>",
      "mustHaveKeywords": ["arc length", "circumference", "fraction", "radius", "angle"],
      "optionalKeywords": ["π", "multiply"],
      "modelAnswer": "<span>First find the fraction: 72° ÷ 360° = 1/5. Then find the circumference: 2 × π × 15 = 30π cm. Multiply fraction by circumference: 1/5 × 30π = 6π cm. So, arc length = 6π cm.</span>",
      "scaffoldPrompts": ["Calculate the circumference of the circle first.", "Find the fraction of the circle for the given angle.", "Multiply the fraction by the circumference."]
    }
  },
  "step11": {
    "title": "Practice Question: Sector Area",
    "practice": {
      "prompt": "<span>Find the area of a sector with radius 12 cm and central angle 150°.</span>",
      "hint": "<span>Use the sector area formula: area = (θ / 360) × πr².</span>",
      "mustHaveKeywords": ["sector area", "central angle", "radius", "π", "fraction"],
      "optionalKeywords": ["circle area"],
      "modelAnswer": "<span>Step 1: Find fraction of circle = 150° ÷ 360° = 5/12. Step 2: Calculate full circle area = π × 12² = 144π cm². Step 3: Multiply fraction by full area: 5/12 × 144π = 60π cm². Therefore, sector area = 60π cm².</span>",
      "scaffoldPrompts": ["Calculate the total area of the circle.", "Find the fraction of the circle for the sector.", "Multiply the fraction by the total area."]
    }
  },
  "step12": {
    "title": "Practice Question: Segment Area",
    "practice": {
      "prompt": "<span>Calculate the area of a segment in a circle of radius 10 cm with a central angle of 60°.</span>",
      "hint": "<span>Use the formula: segment area = sector area − triangle area.</span>",
      "mustHaveKeywords": [
        "segment area",
        "sector area",
        "triangle area",
        "radius",
        "central angle",
        "sin"
      ],
      "optionalKeywords": ["π", "subtract"],
      "modelAnswer": "<span>Step 1: Calculate sector area = (60° ÷ 360°) × π × 10² = (1/6) × 100π = (50/3)π ≈ 52.36 cm². Step 2: Calculate triangle area = (1/2) × 10² × sin 60° = 50 × √3/2 ≈ 43.30 cm². Step 3: Segment area = sector area − triangle area ≈ 52.36 − 43.30 = 9.06 cm².</span>",
      "scaffoldPrompts": [
        "Calculate the sector area first.",
        "Find the area of the triangle formed by the two radii and the chord.",
        "Subtract the triangle area from the sector area."
      ]
    }
  },
  "step13": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A circle has a radius of 14 cm and a sector with a central angle of 135°. Calculate the perimeter and area of the sector, then find the area of the corresponding minor segment.</span>",
      "hint": "<span>Start by finding the arc length and the areas of the sector and triangle. Use these to find the perimeter and segment area.</span>",
      "mustHaveKeywords": [
        "perimeter",
        "arc length",
        "sector area",
        "triangle area",
        "segment area",
        "radius",
        "central angle",
        "sin"
      ],
      "optionalKeywords": [
        "π",
        "subtract",
        "chord",
        "formula"
      ],
      "modelAnswer": "<span>Step 1: Find the arc length: (135°/360°) × 2π × 14 = (3/8) × 28π = 10.5π cm ≈ 32.99 cm. Step 2: Calculate sector area: (135°/360°) × π × 14² = (3/8) × 196π = 73.5π cm² ≈ 230.38 cm². Step 3: Calculate triangle area: (1/2) × 14² × sin 135° = 98 × (√2/2) = 49√2 ≈ 69.30 cm². Step 4: Calculate segment area: sector area − triangle area ≈ 230.38 − 69.30 = 161.08 cm². Step 5: Calculate perimeter of sector: 2 × 14 + arc length = 28 + 32.99 = 60.99 cm.</span>",
      "scaffoldPrompts": [
        "Calculate the arc length first.",
        "Use the sector area formula to find sector area.",
        "Compute the area of the triangle using radius and sine of the angle.",
        "Subtract the triangle area from sector area to get segment area.",
        "Sum the arc length and two radii to find perimeter of sector."
      ]
    }
  }
};