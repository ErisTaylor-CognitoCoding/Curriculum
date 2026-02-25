window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.8 - Arcs, sectors, and segments",
  "strapline": "Understanding how to calculate arc length, sector area, and segment area in circles using central angles.",
  "learningObjectives": [
    "Students should be able to calculate the arc length of a circle using the formula (θ/360) × 2πr where θ is the central angle in degrees (Maths 4.8)",
    "Students should be able to calculate the area of a sector of a circle using the formula (θ/360) × πr² where θ is the central angle in degrees (Maths 4.8)",
    "Students should be able to calculate the area of a segment by subtracting the area of a triangle from the area of a sector (Maths 4.8)"
  ],
  "keyFormulas": [
    "Arc length formula: L = (θ/360) × 2πr",
    "Sector area formula: A = (θ/360) × πr²",
    "Segment area formula: Area_segment = Area_sector - Area_triangle"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='100' fill='#e0f7fa' stroke='#006064' stroke-width='3'/><line x1='200' y1='150' x2='300' y2='150' stroke='#004d40' stroke-width='3'/><line x1='200' y1='150' x2='260' y2='80' stroke='#004d40' stroke-width='3'/><path d='M258 80 A100 100 0 0 1 300 150' stroke='#00796b' stroke-width='4' fill='none'/><text x='215' y='130' font-family='sans-serif' font-size='14' fill='#004d40'>&#952;</text><text x='240' y='110' font-family='sans-serif' font-size='12' fill='#00796b'>Arc</text><text x='180' y='180' font-family='sans-serif' font-size='12' fill='#004d40'>Center</text></svg>",
  "step1": {
    "title": "Concept: Understanding the Arc Length",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>arc</strong> is a part of the circumference of a circle. The length of an arc depends on the central angle θ (in degrees) that spans it. The formula to calculate arc length is <em>L = (θ/360) × 2πr</em>, where <em>r</em> is the radius of the circle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a pizza. The crust along one slice is like the arc. The bigger the slice (angle θ), the longer the crust piece.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Arc Length",
      "problem": "Calculate the arc length of a circle with radius 7 cm and central angle 60°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the radius (r) of the circle?",
          "answer": "7",
          "feedback": "Correct. The radius is 7 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the central angle θ in degrees?",
          "answer": "60",
          "feedback": "Correct. The central angle is 60°."
        },
        {
          "id": "q3",
          "prompt": "Calculate the fraction θ/360.",
          "answer": "0.1667",
          "feedback": "Correct. 60 divided by 360 is approximately 0.1667."
        },
        {
          "id": "q4",
          "prompt": "Calculate the circumference 2πr (take π ≈ 3.14).",
          "answer": "43.96",
          "feedback": "Correct. 2 × 3.14 × 7 = 43.96 cm."
        },
        {
          "id": "q5",
          "prompt": "Calculate the arc length L = (θ/360) × 2πr.",
          "answer": "7.33",
          "feedback": "Correct. 0.1667 × 43.96 ≈ 7.33 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Calculating the Area of a Sector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>sector</strong> of a circle looks like a 'slice of pie' bounded by two radii and the arc between them. The area of a sector is a fraction of the total circle's area based on the central angle θ. The formula is <em>A = (θ/360) × πr²</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine cutting a pizza slice; the sector area is the slice's surface area on the pizza top.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Sector Area",
      "problem": "Find the area of a sector with radius 5 cm and central angle 90°.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the radius (r)?",
          "answer": "5",
          "feedback": "Correct. The radius is 5 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the central angle θ in degrees?",
          "answer": "90",
          "feedback": "Correct. The angle is 90°."
        },
        {
          "id": "q3",
          "prompt": "Calculate the fraction θ/360.",
          "answer": "0.25",
          "feedback": "Correct. 90 divided by 360 is 0.25."
        },
        {
          "id": "q4",
          "prompt": "Calculate πr² (use π ≈ 3.14).",
          "answer": "78.5",
          "feedback": "Correct. 3.14 × 5² = 78.5 cm²."
        },
        {
          "id": "q5",
          "prompt": "Calculate the sector area: (θ/360) × πr².",
          "answer": "19.625",
          "feedback": "Correct. 0.25 × 78.5 = 19.625 cm²."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding the Segment Area",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>segment</strong> is the region between a chord and the corresponding arc. To find the area of a segment, first calculate the sector area, then subtract the area of the triangle formed by the two radii and the chord.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the pizza slice again: the segment is the curved 'cap' area left when a straight line cuts the slice's tip off.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate the Area of a Segment",
      "problem": "Calculate the area of a segment in a circle with radius 10 cm and central angle 60°. Assume the triangle formed by the radii and chord is equilateral.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the radius (r)?",
          "answer": "10",
          "feedback": "Correct. Radius is 10 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the central angle θ?",
          "answer": "60",
          "feedback": "Correct. Central angle is 60°."
        },
        {
          "id": "q3",
          "prompt": "Calculate the sector area: (θ/360) × πr² (π ≈ 3.14).",
          "answer": "52.33",
          "feedback": "Correct. (60/360) × 3.14 × 10² = 52.33 cm²."
        },
        {
          "id": "q4",
          "prompt": "Calculate the area of the equilateral triangle: (√3/4) × side². Here, side length = radius = 10 cm. Use √3 ≈ 1.732.",
          "answer": "43.3",
          "feedback": "Correct. (1.732/4) × 10² = 43.3 cm²."
        },
        {
          "id": "q5",
          "prompt": "Calculate the segment area = sector area - triangle area.",
          "answer": "9.03",
          "feedback": "Correct. 52.33 - 43.3 = 9.03 cm²."
        }
      ]
    }
  },
  "step4": {
    "title": "Visualizing Arc, Sector, and Segment",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Look at this diagram to identify the arc, sector, and segment in the circle. Understanding these visually helps solve problems correctly.</p>",
    "diagramHtml": "<svg viewBox='0 0 360 300' xmlns='http://www.w3.org/2000/svg'><circle cx='180' cy='150' r='100' fill='#fff8e1' stroke='#fbc02d' stroke-width='3'/><line x1='180' y1='150' x2='280' y2='150' stroke='#ff6f00' stroke-width='4'/><line x1='180' y1='150' x2='230' y2='70' stroke='#ff6f00' stroke-width='4'/><path d='M230 70 A100 100 0 0 1 280 150' stroke='#ffa000' stroke-width='5' fill='none'/><line x1='230' y1='70' x2='280' y2='150' stroke='#f57c00' stroke-width='3' stroke-dasharray='6 4'/><text x='215' y='130' font-family='sans-serif' font-size='14' fill='#ef6c00'>&#952;</text><text x='240' y='100' font-family='sans-serif' font-size='13' fill='#ff6f00'>Arc</text><text x='230' y='160' font-family='sans-serif' font-size='13' fill='#f57c00'>Chord</text><text x='150' y='100' font-family='sans-serif' font-size='14' fill='#f9a825'>Sector</text><text x='180' y='280' font-family='sans-serif' font-size='13' fill='#fbc02d'>Circle</text></svg>"
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which formula correctly calculates the length of an arc with central angle θ and radius r?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>L = (θ/360) × 2πr</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Arc length is a fraction of the circumference.</span>"
          },
          {
            "id": "b",
            "label": "<span>L = πr²</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. πr² is area of a circle, not arc length.</span>"
          },
          {
            "id": "c",
            "label": "<span>L = (θ/360) × πr²</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. This formula calculates sector area, not arc length.</span>"
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>To find the area of a segment, you need to subtract which shape's area from the sector?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Triangle formed by two radii and the chord</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Subtract the triangle area from the sector area.</span>"
          },
          {
            "id": "b",
            "label": "<span>Circle area</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. The entire circle's area is too large.</span>"
          },
          {
            "id": "c",
            "label": "<span>Arc length</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Arc length is a length, not an area.</span>"
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A circle has a radius of 8 cm. A sector is defined by a central angle of 45°. Calculate:</span><ol><li>The length of the arc of the sector.</li><li>The area of the sector.</li><li>The area of the segment, assuming the triangle formed is isosceles.</li></ol>",
      "hint": "Remember to use the formulas for arc length and sector area, and subtract the triangle area from the sector area for the segment. Use π ≈ 3.14 and find the triangle area using trigonometry or formula for isosceles triangle.",
      "mustHaveKeywords": ["arc length", "sector area", "segment area", "subtraction", "central angle", "radius"],
      "optionalKeywords": ["π", "360", "triangle area", "trigonometry"],
      "modelAnswer": "<span>Step 1: Calculate arc length L = (45/360) × 2 × π × 8 = (1/8) × 2 × 3.14 × 8 = 6.28 cm.<br>Step 2: Calculate sector area A = (45/360) × π × 8² = (1/8) × 3.14 × 64 = 25.12 cm².<br>Step 3: Calculate triangle area using base = chord length and height or using formula: 0.5 × r² × sin(θ) = 0.5 × 8² × sin(45°) ≈ 22.63 cm².<br>Step 4: Segment area = sector area - triangle area = 25.12 - 22.63 = 2.49 cm².</span>",
      "scaffoldPrompts": [
        "Find arc length using the arc length formula.",
        "Find sector area using the sector area formula.",
        "Calculate the area of the triangle formed by the two radii and chord.",
        "Subtract the triangle area from sector area to get segment area."
      ]
    }
  }
};