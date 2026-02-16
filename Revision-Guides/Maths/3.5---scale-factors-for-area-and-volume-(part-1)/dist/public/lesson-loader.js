window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.5 - Scale factors for area and volume (Part 1)",
  "strapline": "Understanding how scale factors affect the area and volume of shapes when enlarged or reduced.",
  "learningObjectives": [
    "Students should understand that when a shape is enlarged by a linear scale factor k, the area is multiplied by k² (Maths 3.5)",
    "Students should understand that when a shape is enlarged by a linear scale factor k, the volume is multiplied by k³ (Maths 3.5)",
    "Students should apply scale factor relationships to solve problems involving similar shapes in 2D and 3D contexts (Maths 3.5)"
  ],
  "keyFormulas": [
    "Formula 1: Linear scale factor (k) - multiplier applied to lengths of shapes",
    "Formula 2: Area scale factor = k\u00b2 (when linear scale factor is k)",
    "Formula 3: Volume scale factor = k\u00b3 (when linear scale factor is k)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='100' height='80' fill='#90caf9' stroke='#1565c0' stroke-width='2'/><text x='100' y='48' font-family='sans-serif' font-size='14' fill='#1565c0' text-anchor='middle'>Original Rectangle</text><rect x='200' y='50' width='200' height='160' fill='#ffe082' stroke='#ffb300' stroke-width='2'/><text x='300' y='48' font-family='sans-serif' font-size='14' fill='#ff6f00' text-anchor='middle'>Enlarged Rectangle (k=2)</text><line x1='150' y1='130' x2='200' y2='130' stroke='#999' stroke-dasharray='5,5' /><text x='175' y='125' font-family='sans-serif' font-size='12' fill='#555' text-anchor='middle'>Linear scale factor k = 2</text></svg>",
  "step1": {
    "title": "Concept: Linear Scale Factor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a shape is enlarged or reduced, all its lengths are multiplied by a number called the <strong>linear scale factor (k)</strong>. For example, if k = 3, every length becomes 3 times bigger.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a picture on your phone. If you zoom in by a factor of 2, the height and width of what you see double — this is like a linear scale factor of 2.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Linear Scale Factor",
      "problem": "A square has sides of length 4 cm. It is enlarged so the new square has sides of length 12 cm. What is the linear scale factor?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the original side length?",
          "answer": "4",
          "feedback": "Correct. The original square's side is 4 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the enlarged side length?",
          "answer": "12",
          "feedback": "Correct. The enlarged square's side is 12 cm."
        },
        {
          "id": "q3",
          "prompt": "Calculate the linear scale factor k by dividing enlarged length by original length.",
          "answer": "3",
          "feedback": "Correct. 12 ÷ 4 = 3, so k = 3."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Area Scale Factor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a shape is enlarged by a linear scale factor <em>k</em>, its <strong>area</strong> is multiplied by <em>k<sup>2</sup></em>. This means the new area = original area × <em>k<sup>2</sup></em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you enlarge a photo to twice the width and height, the total surface (area) covered is 4 times bigger (because 2 × 2 = 4).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Area Change on Enlargement",
      "problem": "A rectangle with area 20 cm<sup>2</sup> is enlarged by a linear scale factor of 3. What is the new area?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the original area?",
          "answer": "20",
          "feedback": "Correct. The original area is 20 cm²."
        },
        {
          "id": "q2",
          "prompt": "What is the linear scale factor k?",
          "answer": "3",
          "feedback": "Correct. k = 3."
        },
        {
          "id": "q3",
          "prompt": "Calculate the area scale factor k².",
          "answer": "9",
          "feedback": "Correct. 3 squared = 9."
        },
        {
          "id": "q4",
          "prompt": "Calculate the new area by multiplying original area by k².",
          "answer": "180",
          "feedback": "Correct. 20 × 9 = 180 cm²."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Volume Scale Factor",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a 3D shape is enlarged by a linear scale factor <em>k</em>, its <strong>volume</strong> is multiplied by <em>k<sup>3</sup></em>. The new volume = original volume × <em>k<sup>3</sup></em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Enlarging a cube by a factor of 2 makes it eight times bigger in volume because 2 × 2 × 2 = 8.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Volume Change on Enlargement",
      "problem": "A cube with volume 27 cm<sup>3</sup> is enlarged by a linear scale factor of 3. What is the new volume?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the original volume?",
          "answer": "27",
          "feedback": "Correct. The original volume is 27 cm³."
        },
        {
          "id": "q2",
          "prompt": "What is the linear scale factor k?",
          "answer": "3",
          "feedback": "Correct. k = 3."
        },
        {
          "id": "q3",
          "prompt": "Calculate the volume scale factor k³.",
          "answer": "27",
          "feedback": "Correct. 3 cubed = 27."
        },
        {
          "id": "q4",
          "prompt": "Calculate the new volume by multiplying original volume by k³.",
          "answer": "729",
          "feedback": "Correct. 27 × 27 = 729 cm³."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying Scale Factors: Problem Solving in 2D",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the linear scale factor and area scale factor to solve problems about similar 2D shapes. Remember: lengths multiply by <em>k</em> and areas by <em>k<sup>2</sup></em>.</p>",
    "workedExample": {
      "title": "Worked Example: Area of Similar Triangles",
      "problem": "Triangle A has area 12 cm<sup>2</sup>. Triangle B is similar and its sides are twice as long as Triangle A. Find the area of Triangle B.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the linear scale factor (k)?",
          "answer": "2",
          "feedback": "Correct. Sides are twice as long, so k = 2."
        },
        {
          "id": "q2",
          "prompt": "What is the area scale factor (k²)?",
          "answer": "4",
          "feedback": "Correct. 2 squared = 4."
        },
        {
          "id": "q3",
          "prompt": "Calculate the area of Triangle B.",
          "answer": "48",
          "feedback": "Correct. 12 × 4 = 48 cm²."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying Scale Factors: Problem Solving in 3D",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Solve problems involving volume changes by using the volume scale factor <em>k<sup>3</sup></em>. This applies when two solids are similar in shape but different sizes.</p>",
    "workedExample": {
      "title": "Worked Example: Volume of Similar Solids",
      "problem": "A small cone has volume 50 cm<sup>3</sup>. A larger cone is similar with a linear scale factor of 4. What is the volume of the larger cone?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the linear scale factor k?",
          "answer": "4",
          "feedback": "Correct. k = 4."
        },
        {
          "id": "q2",
          "prompt": "Calculate the volume scale factor k³.",
          "answer": "64",
          "feedback": "Correct. 4³ = 64."
        },
        {
          "id": "q3",
          "prompt": "Calculate the volume of the larger cone.",
          "answer": "3200",
          "feedback": "Correct. 50 × 64 = 3200 cm³."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cylinder has radius 5 cm, height 10 cm and volume V. A second cylinder is similar but all lengths are scaled by a factor of 2. Calculate the volume of the second cylinder in terms of V.</span>",
      "hint": "Remember to apply the volume scale factor k³ to the original volume.",
      "mustHaveKeywords": ["linear scale factor", "volume scale factor", "k³", "multiply original volume"],
      "optionalKeywords": ["similar shapes", "scale lengths"],
      "modelAnswer": "<span>The linear scale factor is 2 because all lengths are scaled by 2. The volume scale factor is 2<sup>3</sup> = 8. Therefore, the volume of the second cylinder is 8 × V = 8V.</span>",
      "scaffoldPrompts": [
        "Identify the linear scale factor k.",
        "Calculate k³ for the volume scale factor.",
        "Multiply the original volume V by k³."
      ]
    }
  }
};