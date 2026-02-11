window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.8 - Arcs, sectors, and segments",
  "strapline": "Understanding how to calculate lengths, perimeters, and areas related to arcs, sectors, and segments of circles.",
  "learningObjectives": [
    "Students should calculate arc lengths, perimeters and areas of sectors of circles (Maths 4.8)",
    "Students should calculate areas and perimeters of segments of circles (Maths 4.8)"
  ],
  "step1": {
    "title": "Concept 1: Arc",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>arc</strong> is a curved section of the circumference of a circle. The length of an arc depends on the angle at the centre of the circle that it subtends. It is a portion of the full circumference proportional to the central angle out of 360°.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the outer edge of a round clock face. The arc would be like the curved part of the clock’s edge between two hour marks, determined by the angle between those marks.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the length of an arc that subtends a 60° angle in a circle with radius 10 cm.</span>",
        "<span>Step 1: Calculate the circumference = 2 × π × 10 = 62.83 cm.</span>",
        "<span>Step 2: Find fraction of the circumference = 60° ⁄ 360° = 1/6.</span>",
        "<span>Step 3: Arc length = (1/6) × 62.83 = 10.47 cm.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Sector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>sector</strong> is a 'slice' of a circle bounded by two radii and the arc between them. The area of a sector is a fraction of the total circle area based on the central angle over 360°.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like a slice of pizza is a sector of the whole pizza circle, the slice’s size depends on how wide the angle between its two straight edges (radii) is.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the area of a sector with a 90° angle and radius 8 cm.</span>",
        "<span>Step 1: Calculate total circle area = π × 8<sup>2</sup> = 201.06 cm<sup>2</sup>.</span>",
        "<span>Step 2: Fraction of the circle = 90° ⁄ 360° = 1/4.</span>",
        "<span>Step 3: Sector area = 1/4 × 201.06 = 50.27 cm<sup>2</sup>.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Segment",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>segment</strong> is the region between a chord and the arc it cuts off. A minor segment is smaller than a semicircle, while a major segment is bigger. To find the area of a segment, subtract the area of the triangle formed by the chord and the circle center from the sector area.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine cutting a slice from an orange with a knife: the curved skin part is the arc, the straight cut is the chord, and the peel area between them is the segment.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the area of a segment with a 60° central angle and radius 6 cm.</span>",
        "<span>Step 1: Calculate sector area = (60°/360°) × π × 6<sup>2</sup> = 18.85 cm<sup>2</sup>.</span>",
        "<span>Step 2: Find area of triangle formed by two radii and chord = 0.5 × 6 × 6 × sin(60°) = 15.59 cm<sup>2</sup>.</span>",
        "<span>Step 3: Segment area = sector area - triangle area = 18.85 - 15.59 = 3.26 cm<sup>2</sup>.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ on Arcs",
    "mcqs": [{
      "id": "mcq-1",
      "question": "<span>What is the formula to find the length of an arc in a circle?</span>",
      "options": [
        {"id": "a", "label": "<span>Arc length = (angle/360) × 2πr</span>", "isCorrect": true, "explanation": "Correct! The arc length is proportional to the angle over the full 360° circumference."},
        {"id": "b", "label": "<span>Arc length = πr<sup>2</sup> × (angle/360)</span>", "isCorrect": false, "explanation": "Incorrect. This is the formula for area of a sector, not arc length."},
        {"id": "c", "label": "<span>Arc length = 2r × angle</span>", "isCorrect": false, "explanation": "Incorrect. This does not correctly relate radius and angle for arc length."}
      ]
    }]
  },
  "step5": {
    "title": "Knowledge Check: Fill in the Blanks",
    "cloze": [{
      "id": "cloze-1",
      "sentence": "<span>The area of a sector is calculated as a <span class=\"font-semibold\">_____</span> of the total circle's area, based on the central angle.</span>",
      "blanks": [{
        "id": "b1",
        "options": [
          {"value": "fraction", "label": "fraction", "isCorrect": true, "feedback": "Correct! The sector area is a fraction of the full circle area."},
          {"value": "multiple", "label": "multiple", "isCorrect": false, "feedback": "Try again. The sector area is part of the total, so it is a fraction, not a multiple."}
        ]
      }]
    }]
  },
  "step6": {
    "title": "Calculating Perimeter of a Sector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The perimeter of a sector includes two radii plus the length of the arc that connects them. Use the formula: <strong>Perimeter = 2r + arc length</strong>.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate the perimeter of a sector with radius 7 cm and central angle 120°.</span>",
        "<span>Step 1: Find arc length = (120/360) × 2π × 7 ≈ 14.66 cm.</span>",
        "<span>Step 2: Calculate perimeter = 2 × 7 + 14.66 = 28 + 14.66 = 28.66 cm.</span>"
      ]
    }
  },
  "step7": {
    "title": "Calculating Perimeter of a Segment",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The perimeter of a segment is the length of the chord plus the length of the arc. First find the chord length using trigonometry or the cosine rule, then add the arc length.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate the perimeter of a segment with radius 5 cm and central angle 90°.</span>",
        "<span>Step 1: Find arc length = (90/360) × 2π × 5 = (1/4) × 31.42 = 7.85 cm.</span>",
        "<span>Step 2: Find chord length using formula: chord = 2r × sin(angle/2) = 2 × 5 × sin(45°) ≈ 7.07 cm.</span>",
        "<span>Step 3: Perimeter of segment = chord length + arc length = 7.07 + 7.85 = 14.92 cm.</span>"
      ]
    }
  },
  "step8": {
    "title": "Knowledge Check: MCQ on Segments",
    "mcqs": [{
      "id": "mcq-2",
      "question": "<span>What is the correct method to find the area of a segment?</span>",
      "options": [
        {"id": "a", "label": "<span>Subtract the triangle area from the sector area</span>", "isCorrect": true, "explanation": "Correct. Area of segment = sector area - triangle area."},
        {"id": "b", "label": "<span>Add the arc length to the chord length</span>", "isCorrect": false, "explanation": "Incorrect. This gives the perimeter, not area."},
        {"id": "c", "label": "<span>Calculate the full circle area and divide by two</span>", "isCorrect": false, "explanation": "Incorrect. This finds half the circle area, not the segment area."}
      ]
    }]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A circle has radius 12 cm. Calculate the area and perimeter of the segment cut off by a chord subtending a 60° angle at the centre.</span>",
      "hint": "Remember to first find the sector area and triangle area to get the segment area. For perimeter, find the chord length and add the arc length.",
      "mustHaveKeywords": ["arc length", "sector area", "triangle area", "segment area", "chord length", "perimeter"],
      "optionalKeywords": ["radius", "central angle", "sine", "cosine"],
      "modelAnswer": "<span>Step 1: Calculate arc length = (60/360) × 2π × 12 = (1/6) × 75.4 ≈ 12.57 cm.<br>Step 2: Sector area = (60/360) × π × 12<sup>2</sup> = (1/6) × 452.39 ≈ 75.40 cm<sup>2</sup>.<br>Step 3: Triangle area = 0.5 × 12 × 12 × sin(60°) = 0.5 × 144 × 0.866 = 62.35 cm<sup>2</sup>.<br>Step 4: Segment area = sector area - triangle area = 75.40 - 62.35 = 13.05 cm<sup>2</sup>.<br>Step 5: Chord length = 2 × 12 × sin(30°) = 24 × 0.5 = 12 cm.<br>Step 6: Perimeter of segment = chord length + arc length = 12 + 12.57 = 24.57 cm.</span>",
      "scaffoldPrompts": [
        "Calculate the arc length first using radius and angle.",
        "Find the sector area.",
        "Calculate the area of the triangle within the sector.",
        "Subtract to get the segment area.",
        "Calculate the chord length using sine of half the angle.",
        "Add chord and arc lengths for perimeter."
      ]
    }
  }
};