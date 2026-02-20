window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "4.8 - Arcs, sectors, and segments",
  "strapline": "Understanding how to calculate arc length, sector area, and segment area in circles.",
  "learningObjectives": [
    "Students should be able to calculate the arc length of a circle using the formula (θ/360) × 2πr where θ is the central angle in degrees (Maths 4.8)",
    "Students should be able to calculate the area of a sector of a circle using the formula (θ/360) × πr² where θ is the central angle in degrees (Maths 4.8)",
    "Students should be able to calculate the area of a segment by subtracting the area of a triangle from the area of a sector (Maths 4.8)"
  ],
  "keyFormulas": [
    "Arc Length: (θ/360) × 2πr",
    "Sector Area: (θ/360) × πr²",
    "Segment Area = Sector Area − Triangle Area"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='150' r='100' fill='#fdeadb' stroke='#753e04' stroke-width='3'/><path d='M200 150 L283 150 A100 100 0 0 1 250 75 Z' fill='#ffa50099' stroke='#753e04' stroke-width='2'/><line x1='200' y1='150' x2='283' y2='150' stroke='#753e04' stroke-width='2'/><line x1='200' y1='150' x2='250' y2='75' stroke='#753e04' stroke-width='2'/><path d='M283 150 Q240 105 250 75' fill='none' stroke='#0066cc' stroke-width='2' stroke-dasharray='5,5'/><text x='205' y='155' font-size='20' font-family='sans-serif' fill='#753e04'>&theta;</text><text x='230' y='140' font-size='16' font-family='sans-serif' fill='#753e04'>r</text><text x='270' y='150' font-size='16' font-family='sans-serif' fill='#753e04'>arc</text></svg>",
  "step1": {
    "title": "Concept: What is an Arc?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>arc</strong> is a curved section of the circumference of a circle between two points. The length of this arc depends on the <em>central angle</em> θ. The total circumference is 2πr, so the arc length is a fraction of this based on θ.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the arc like a piece of string wrapped around a circular pie. The string length around just a slice corresponds to the arc length.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Arc Length Step-by-Step",
      "problem": "Find the length of an arc with radius <strong>7 cm</strong> and central angle <strong>60°</strong>.",
      "questions": [
        {
          "id": "step1-q1",
          "prompt": "What is the value of the radius r?",
          "answer": "7",
          "feedback": "Correct. The radius r is 7 cm."
        },
        {
          "id": "step1-q2",
          "prompt": "What is the value of the central angle θ in degrees?",
          "answer": "60",
          "feedback": "Correct. The central angle θ is 60°."
        },
        {
          "id": "step1-q3",
          "prompt": "Use the formula (θ/360) × 2πr. Calculate (60/360).",
          "answer": "1/6",
          "feedback": "Correct. 60 divided by 360 is 1/6."
        },
        {
          "id": "step1-q4",
          "prompt": "Calculate 2 × π × 7.",
          "answer": "44",
          "feedback": "Correct. 2 × π × 7 ≈ 44 (using π ≈ 3.14)."
        },
        {
          "id": "step1-q5",
          "prompt": "Calculate the arc length by multiplying 1/6 by 44.",
          "answer": "7.33",
          "feedback": "Correct. The arc length ≈ 7.33 cm."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: What is a Sector?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>sector</strong> of a circle is a region bounded by two radii and the arc between them. It looks like a 'slice' of pizza. The area of a sector is a fraction of the total circle area πr², proportional to the central angle θ.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine cutting a pizza into slices. Each slice is a sector of the pizza (circle).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Sector Area Step-by-Step",
      "problem": "Find the area of a sector with radius <strong>10 cm</strong> and central angle <strong>90°</strong>.",
      "questions": [
        {
          "id": "step2-q1",
          "prompt": "What is the radius r?",
          "answer": "10",
          "feedback": "Correct. The radius is 10 cm."
        },
        {
          "id": "step2-q2",
          "prompt": "What is the central angle θ?",
          "answer": "90",
          "feedback": "Correct. θ is 90°."
        },
        {
          "id": "step2-q3",
          "prompt": "Calculate (θ/360), that is (90/360).",
          "answer": "1/4",
          "feedback": "Correct. 90 divided by 360 is 1/4."
        },
        {
          "id": "step2-q4",
          "prompt": "Calculate π × r² (use π ≈ 3.14).",
          "answer": "314",
          "feedback": "Correct. π × 10² = 3.14 × 100 = 314 cm²."
        },
        {
          "id": "step2-q5",
          "prompt": "Multiply (1/4) × 314 to find the sector area.",
          "answer": "78.5",
          "feedback": "Correct. Sector area is 78.5 cm²."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: What is a Segment?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>segment</strong> of a circle is the region bounded by a chord and the arc above it. To find its area, subtract the area of the triangle formed by the two radii and the chord from the area of the sector.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine slicing a pizza and then cutting off the crust edge of the slice — the remaining shape is like a segment.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Segment Area Step-by-Step",
      "problem": "Find the area of a segment with radius <strong>8 cm</strong> and central angle <strong>60°</strong>. The triangle area formed = 27.7 cm².",
      "questions": [
        {
          "id": "step3-q1",
          "prompt": "Calculate the sector area using (θ/360) × πr² with θ = 60° and r = 8.",
          "answer": "33.5",
          "feedback": "Correct. Sector area ≈ 33.5 cm²."
        },
        {
          "id": "step3-q2",
          "prompt": "What is the given triangle area?",
          "answer": "27.7",
          "feedback": "Correct. Triangle area is 27.7 cm²."
        },
        {
          "id": "step3-q3",
          "prompt": "Subtract the triangle area from the sector area to find the segment area.",
          "answer": "5.8",
          "feedback": "Correct. Segment area is approximately 5.8 cm²."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice Calculating Arc Length",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Try calculating the arc length for a circle with radius <strong>12 cm</strong> and central angle <strong>150°</strong>. Use the formula (θ/360) × 2πr.</p>",
    "workedExample": {
      "title": "Your Turn: Calculate Arc Length",
      "problem": "Given radius = 12 cm and θ = 150°, find the arc length step-by-step.",
      "questions": [
        {
          "id": "step4-q1",
          "prompt": "Calculate (150/360).",
          "answer": "5/12",
          "feedback": "Correct. 150 divided by 360 simplifies to 5/12."
        },
        {
          "id": "step4-q2",
          "prompt": "Calculate 2 × π × 12 (use π ≈ 3.14).",
          "answer": "75.4",
          "feedback": "Correct. 2 × 3.14 × 12 = 75.4."
        },
        {
          "id": "step4-q3",
          "prompt": "Multiply (5/12) × 75.4 for the arc length.",
          "answer": "31.4",
          "feedback": "Correct. Arc length is approximately 31.4 cm."
        }
      ]
    }
  },
  "step5": {
    "title": "Practice Calculating Sector Area",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's work on calculating the area of a sector with radius <strong>5 cm</strong> and central angle <strong>120°</strong>.</p>",
    "workedExample": {
      "title": "Your Turn: Calculate Sector Area",
      "problem": "Calculate the sector area step-by-step using the formula (θ/360) × πr².",
      "questions": [
        {
          "id": "step5-q1",
          "prompt": "Calculate (120/360).",
          "answer": "1/3",
          "feedback": "Correct. 120 divided by 360 is 1/3."
        },
        {
          "id": "step5-q2",
          "prompt": "Calculate π × 5² (use π ≈ 3.14).",
          "answer": "78.5",
          "feedback": "Correct. π × 25 = 78.5 cm²."
        },
        {
          "id": "step5-q3",
          "prompt": "Multiply 1/3 × 78.5.",
          "answer": "26.17",
          "feedback": "Correct. Sector area is approximately 26.17 cm²."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A circle has a radius of 9 cm. A sector of this circle has a central angle of 70°. Calculate (a) the length of the arc, (b) the area of the sector, and (c) the area of the segment if the triangle formed by the two radii and chord has an area of 27 cm².</span>",
      "hint": "Remember to use the formulas for arc length, sector area, and subtract the triangle area from the sector area to find the segment area.",
      "mustHaveKeywords": ["arc length", "sector area", "segment area", "subtract triangle area"],
      "optionalKeywords": ["central angle", "radius", "π"],
      "modelAnswer": "<span>(a) Arc length = (70/360) × 2 × π × 9<br/>(b) Sector area = (70/360) × π × 9²<br/>(c) Segment area = Sector area − Triangle area = [value from (b)] − 27 cm²</span>",
      "scaffoldPrompts": ["Calculate (70/360) as a fraction or decimal", "Calculate full circumference or area first", "Multiply fractions by circumference or area", "Subtract given triangle area from sector area for segment"]
    }
  }
};