window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.8 - Arcs, sectors, and segments",
  "strapline": "Understanding how to calculate arc lengths, sector areas, and segment areas in circles.",
  "learningObjectives": [
    "Students should be able to calculate the arc length of a circle using the formula (θ/360) × 2πr where θ is the central angle in degrees (Maths 4.8)",
    "Students should be able to calculate the area of a sector of a circle using the formula (θ/360) × πr² where θ is the central angle in degrees (Maths 4.8)",
    "Students should be able to calculate the area of a segment by subtracting the area of a triangle from the area of a sector (Maths 4.8)"
  ],
  "keyFormulas": [
    "Arc length = (θ/360) × 2πr",
    "Sector area = (θ/360) × πr²",
    "Segment area = Sector area - Triangle area"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
  <circle cx='200' cy='150' r='100' fill='#e0f7fa' stroke='#00796b' stroke-width='2'/>\
  <path d='M200 150 L292 90 A100 100 0 0 1 163 248 Z' fill='#80cbc4' stroke='#004d40' stroke-width='2'/>\
  <line x1='200' y1='150' x2='292' y2='90' stroke='#004d40' stroke-width='2'/>\
  <line x1='200' y1='150' x2='163' y2='248' stroke='#004d40' stroke-width='2'/>\
  <text x='200' y='140' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#004d40'>Center</text>\
  <text x='290' y='80' font-family='sans-serif' font-size='14' fill='#004d40'>Radius</text>\
  <text x='165' y='260' font-family='sans-serif' font-size='14' fill='#004d40'>Radius</text>\
  <text x='240' y='60' font-family='sans-serif' font-size='16' fill='#004d40'>&#x03B8; (θ)</text>\
  </svg>",
  "step1": {
    "title": "Concept: Understanding Arc Length",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>arc</strong> is a curved section of a circle’s circumference. The length of an arc depends on the <em>radius</em> of the circle and the <strong>central angle (θ)</strong> subtended by the arc at the center of the circle. The formula to calculate the arc length is <strong>(θ/360) × 2πr</strong>, where <em>r</em> is the radius and θ is the angle in degrees.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine cutting a slice from a pizza. The crust of the slice corresponds to an arc of the pizza’s circular edge. The size of the slice depends on the central angle formed by the two cuts.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Arc Length",
      "problem": "<p>Find the length of an arc with radius <strong>10 cm</strong> and central angle <strong>60°</strong>.</p>",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the circumference of the whole circle? (Use 2πr)",
          "answer": "62.8",
          "feedback": "Correct. Circumference = 2 × π × 10 ≈ 62.8 cm."
        },
        {
          "id": "q2",
          "prompt": "What fraction of the circle is the arc? (θ/360)",
          "answer": "0.1667",
          "feedback": "Correct. 60/360 = 1/6 ≈ 0.1667."
        },
        {
          "id": "q3",
          "prompt": "Calculate the arc length by multiplying fraction × circumference.",
          "answer": "10.47",
          "feedback": "Correct. Arc length ≈ 0.1667 × 62.8 ≈ 10.47 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Calculating the Area of a Sector",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>sector</strong> is a ‘slice’ of a circle defined by two radii and the arc between them. Its area is a fraction of the total area of the circle. The formula to find the area of a sector is <strong>(θ/360) × πr²</strong>, where θ is the central angle in degrees and r is the radius.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Sector Area",
      "problem": "<p>Calculate the area of a sector with radius <strong>8 cm</strong> and central angle <strong>45°</strong>.</p>",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the total area of the circle? (Use πr² with r=8)",
          "answer": "201.06",
          "feedback": "Correct. Total area ≈ π × 8² = π × 64 ≈ 201.06 cm²."
        },
        {
          "id": "q2",
          "prompt": "What fraction of the circle is this sector? (45/360)",
          "answer": "0.125",
          "feedback": "Correct. 45/360 = 1/8 = 0.125."
        },
        {
          "id": "q3",
          "prompt": "Calculate the sector area by multiplying fraction × total area.",
          "answer": "25.13",
          "feedback": "Correct. Sector area ≈ 0.125 × 201.06 ≈ 25.13 cm²."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding Segments of a Circle",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>segment</strong> is the area bounded by a <em>chord</em> (a straight line connecting two points on the circle) and the arc between those points. To find the segment area, calculate the sector area first, then subtract the area of the triangle formed by the two radii and the chord.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <circle cx='200' cy='150' r='100' fill='#ffe0b2' stroke='#fb8c00' stroke-width='2'/>\
    <path d='M200 150 L270 110 A100 100 0 0 1 130 110 Z' fill='#ffcc80' stroke='#ef6c00' stroke-width='2'/>\
    <line x1='200' y1='150' x2='270' y2='110' stroke='#ef6c00' stroke-width='2'/>\
    <line x1='200' y1='150' x2='130' y2='110' stroke='#ef6c00' stroke-width='2'/>\
    <line x1='270' y1='110' x2='130' y2='110' stroke='#ef6c00' stroke-width='2' stroke-dasharray='5,5'/>\
    <text x='200' y='145' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#bf360c'>Center</text>\
    <text x='280' y='110' font-family='sans-serif' font-size='14' fill='#bf360c'>Radius</text>\
    <text x='120' y='110' font-family='sans-serif' font-size='14' fill='#bf360c'>Radius</text>\
    <text x='200' y='105' font-family='sans-serif' font-size='16' fill='#bf360c'>&#x03B8; (θ)</text>\
    <text x='200' y='100' font-family='sans-serif' font-size='14' fill='#bf360c'>(Segment area = Sector area - Triangle area)</text>\
    </svg>"
  },
  "step4": {
    "title": "Calculating the Triangle Area within a Segment",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The triangle within the segment can be calculated using trigonometry. If the central angle is θ and radius is r, then the triangle area is:<br/><strong>(1/2) × r² × sin(θ)</strong>. This formula uses the sine of the central angle.</p>",
    "workedExample": {
      "title": "Worked Example: Triangle Area in Segment",
      "problem": "<p>Find the triangle area formed by two radii of length <strong>7 cm</strong> with a central angle of <strong>50°</strong>.</p>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write down the formula for the triangle area within the segment.",
          "answer": "0.5 × r² × sin(θ)",
          "feedback": "Correct. The triangle area = ½ × r² × sin(θ)."
        },
        {
          "id": "q2",
          "prompt": "Substitute r = 7 and θ = 50° (in degrees) into the formula.",
          "answer": "0.5 × 49 × sin(50)",
          "feedback": "Correct. Calculate 0.5 × 7² × sin(50°)."
        },
        {
          "id": "q3",
          "prompt": "Calculate the numerical value (Use sin(50°) ≈ 0.766).",
          "answer": "18.7",
          "feedback": "Correct. Triangle area ≈ 0.5 × 49 × 0.766 ≈ 18.7 cm²."
        }
      ]
    }
  },
  "step5": {
    "title": "Calculating Segment Area Step-by-Step",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the <strong>segment area</strong>, first calculate the sector area using <strong>(θ/360) × πr²</strong>, then subtract the triangle area <strong>(1/2 × r² × sin(θ))</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Full Segment Area Calculation",
      "problem": "<p>Calculate the segment area of a circle with radius <strong>7 cm</strong> and central angle <strong>50°</strong>.</p>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the sector area first: (50/360) × π × 7².",
          "answer": "21.16",
          "feedback": "Correct. Sector area ≈ (50/360) × π × 49 ≈ 21.16 cm²."
        },
        {
          "id": "q2",
          "prompt": "Calculate the triangle area: 0.5 × 7² × sin(50°).",
          "answer": "18.7",
          "feedback": "Correct. Triangle area ≈ 18.7 cm² (from previous step)."
        },
        {
          "id": "q3",
          "prompt": "Subtract triangle area from sector area to find the segment area.",
          "answer": "2.46",
          "feedback": "Correct. Segment area ≈ 21.16 - 18.7 = 2.46 cm²."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A circle has radius 12 cm and a central angle of 75°. Calculate:</span><ol><li>The length of the arc subtended by the angle.</li><li>The area of the sector formed by this angle.</li><li>The area of the segment bounded by the chord and the arc.</li></ol>",
      "hint": "Remember to: Calculate arc length using (θ/360) × 2πr; find sector area using (θ/360) × πr²; calculate triangle area using 0.5 × r² × sin(θ); then find segment area by subtracting triangle area from sector area.",
      "mustHaveKeywords": ["arc length", "sector area", "segment area", "triangle area", "central angle", "radius"],
      "optionalKeywords": ["use of sine", "circle geometry", "π approximated as 3.14 or use calculator"],
      "modelAnswer": "<span>First, calculate the arc length using the formula (75/360) × 2π × 12 ≈ 15.71 cm.<br/>Second, calculate the sector area as (75/360) × π × 12² ≈ 94.25 cm².<br/>Third, find the triangle area inside the sector as 0.5 × 12² × sin(75°) ≈ 0.5 × 144 × 0.966 ≈ 69.55 cm².<br/>Finally, subtract the triangle area from the sector area to get the segment area: 94.25 - 69.55 = 24.7 cm².</span>",
      "scaffoldPrompts": [
        "Start by calculating the circumference and total area of the circle.",
        "Find the fraction of the circle corresponding to the central angle (75°).",
        "Calculate the arc length first using the fraction and circumference.",
        "Calculate the sector area using the fraction and total area.",
        "Use trigonometry to calculate the triangle area inside the sector.",
        "Subtract to find the segment area."
      ]
    }
  }
};