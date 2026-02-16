window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "4.12 - Surface area and volume (spheres, cones, pyramids, frustums)",
  "strapline": "Understanding how to calculate surface area and volume of spheres, cones, pyramids and frustums, and applying these to solve complex problems involving composite 3D shapes.",
  "learningObjectives": [
    "Students should be able to calculate the surface area of spheres, cones, pyramids and frustums using appropriate formulae (Maths 4.12)",
    "Students should be able to calculate the volume of spheres, cones, pyramids and frustums using appropriate formulae (Maths 4.12)",
    "Students should be able to apply surface area and volume formulae to solve complex problems involving composite 3D shapes (Maths 4.12)"
  ],
  "keyFormulas": [
    "Sphere surface area = 4πr<sup>2</sup>",
    "Sphere volume = (4/3)πr<sup>3</sup>",
    "Cone curved surface area = πrl",
    "Cone total surface area = πrl + πr<sup>2</sup>",
    "Cone volume = (1/3)πr<sup>2</sup>h",
    "Pyramid volume = (1/3) × base area × height",
    "Pyramid surface area = base area + sum of triangular face areas",
    "Frustum volume = volume of larger shape minus smaller shape",
    "Reminder: Always check units and use consistent dimensions"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='150' r='50' stroke='#333' fill='none'/><text x='100' y='215' text-anchor='middle' font-family='sans-serif' font-size='14'>Sphere (r)</text><path d='M250 200 L320 100 L320 200 Z' stroke='#333' fill='none'/><line x1='250' y1='200' x2='285' y2='140' stroke='#333' /><line x1='285' y1='140' x2='320' y2='200' stroke='#333' /><text x='285' y='125' text-anchor='middle' font-family='sans-serif' font-size='14'>Cone (r, l, h)</text><polygon points='50,50 90,20 130,50 110,90 70,90' stroke='#333' fill='none'/><text x='90' y='15' text-anchor='middle' font-family='sans-serif' font-size='14'>Pyramid</text></svg>",
  "step1": {
    "title": "Concept: Sphere Surface Area and Volume",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>sphere</strong> is a perfectly round 3D shape. Every point on the surface is the same distance (radius <em>r</em>) from the centre. Its surface area is given by <strong>4πr<sup>2</sup></strong> and volume by <strong>(4/3)πr<sup>3</sup></strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a basketball: all points on the surface are equally far from the centre, forming a perfect sphere.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Surface Area of a Sphere",
      "problem": "Calculate the surface area of a sphere with radius <strong>5 cm</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the radius <em>r</em>?",
          "answer": "5",
          "feedback": "Correct. The radius is 5 cm."
        },
        {
          "id": "q2",
          "prompt": "Write the formula for surface area.",
          "answer": "4πr^2",
          "feedback": "Correct. Surface area = 4πr²."
        },
        {
          "id": "q3",
          "prompt": "Calculate 4 × π × 5².",
          "answer": "314.16",
          "feedback": "Correct. 4 × π × 25 = 314.16 cm²."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Cone Surface Area and Volume",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>cone</strong> has a circular base and tapers to an apex. The curved surface area is <strong>πrl</strong> where <em>l</em> is the slant height. Total surface area includes the base: <strong>πrl + πr<sup>2</sup></strong>. Volume is given by <strong>(1/3)πr<sup>2</sup>h</strong> where <em>h</em> is the vertical height.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine an ice cream cone: the curved surface is where you hold the ice cream, and the base is the circular opening.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Volume of a Cone",
      "problem": "Calculate the volume of a cone with radius <strong>3 cm</strong> and height <strong>4 cm</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the radius <em>r</em>?",
          "answer": "3",
          "feedback": "Correct, r = 3 cm."
        },
        {
          "id": "q2",
          "prompt": "What is the height <em>h</em>?",
          "answer": "4",
          "feedback": "Correct, h = 4 cm."
        },
        {
          "id": "q3",
          "prompt": "Write the formula for volume of a cone.",
          "answer": "(1/3)πr^2h",
          "feedback": "Correct, volume = (1/3)πr²h."
        },
        {
          "id": "q4",
          "prompt": "Calculate (1/3) × π × 3² × 4.",
          "answer": "37.70",
          "feedback": "Correct! Volume ≈ 37.70 cm³."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Pyramid Volume and Surface Area",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>pyramid</strong> has a polygon base and triangular faces meeting at an apex. The volume is <strong>(1/3) × base area × height</strong>. The surface area is the base area plus the sum of the triangular face areas.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the Great Pyramid of Giza: a square base with triangular faces rising to the apex.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Pyramid Volume",
      "problem": "A square pyramid has base side length 6 cm and height 9 cm. Calculate its volume.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the base area (square).",
          "answer": "36",
          "feedback": "Correct. Area = 6 × 6 = 36 cm²."
        },
        {
          "id": "q2",
          "prompt": "Write the volume formula.",
          "answer": "(1/3) × base area × height",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate (1/3) × 36 × 9.",
          "answer": "108",
          "feedback": "Correct. Volume = 108 cm³."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Frustum Volume and Surface Area",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>frustum</strong> is a pyramid or cone with the top cut off parallel to the base. Its volume is found by subtracting the volume of the smaller removed shape from the original larger one. Surface area includes the areas of the two parallel faces and the curved or triangular faces connecting them.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a lampshade shaped like a cone but cut flat on top, creating a smaller circle parallel to the base.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Frustum Volume",
      "problem": "Find the volume of a cone frustum with lower radius 5 cm, upper radius 3 cm and height 6 cm.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Recall the formula for frustum volume: (1/3)πh(R² + r² + Rr). What are R and r?",
          "answer": "5 and 3",
          "feedback": "Correct, R = 5 cm (lower radius), r = 3 cm (upper radius)."
        },
        {
          "id": "q2",
          "prompt": "Write the formula for volume using given values.",
          "answer": "(1/3)π × 6 × (5² + 3² + 5 × 3)",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate the sum inside the bracket: 25 + 9 + 15.",
          "answer": "49",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Calculate (1/3) × π × 6 × 49.",
          "answer": "307.88",
          "feedback": "Correct. Volume ≈ 307.88 cm³."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying Formulae to Composite Shapes",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Many real-world objects combine multiple shapes like cones and cylinders. To find total surface area or volume, calculate each part separately then add or subtract appropriately.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a cone sitting on top of a cylinder, such as an ice cream cone with a base. Find areas and volumes of each, then combine.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Composite Volume",
      "problem": "Calculate the volume of a solid made of a cylinder (radius 4 cm, height 10 cm) with a cone (radius 4 cm, height 6 cm) on top.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the volume of the cylinder using πr²h.",
          "answer": "502.65",
          "feedback": "Correct, volume = π × 4² × 10 = 502.65 cm³."
        },
        {
          "id": "q2",
          "prompt": "Calculate the volume of the cone using (1/3)πr²h.",
          "answer": "100.53",
          "feedback": "Correct, volume = (1/3) × π × 4² × 6 = 100.53 cm³."
        },
        {
          "id": "q3",
          "prompt": "Add the two volumes to find total volume.",
          "answer": "603.18",
          "feedback": "Correct. Total volume ≈ 603.18 cm³."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Calculate the total surface area and volume of a composite solid made of a hemisphere of radius 7 cm attached to a right circular cone with the same radius and a height of 24 cm.</span>",
      "hint": "Remember to calculate the surface areas separately, paying attention to overlapping surfaces. Use appropriate formulae for hemisphere surface area and cone surface area and volume. Ensure consistent units.",
      "mustHaveKeywords": ["surface area", "curved surface area", "base area", "volume", "π", "radius", "height"],
      "optionalKeywords": ["total surface area", "composite solid", "hemisphere", "right circular cone"],
      "modelAnswer": "<span>First, calculate the curved surface area of the hemisphere as 2πr², since the base attaches to the cone and is not exposed. Next, calculate the curved surface area of the cone using πrl, where l = √(r² + h²). Add these two for total surface area. Then, calculate volume of the hemisphere as (2/3)πr³ and volume of the cone as (1/3)πr²h. Sum these volumes for total volume. Ensure units are consistent and final answers are given in cm² and cm³ respectively.</span>",
      "scaffoldPrompts": ["Calculate the curved surface area of the hemisphere.", "Determine the slant height of the cone.", "Calculate the cone’s curved surface area.", "Add surface area components while excluding the hemisphere base.", "Calculate volumes of hemisphere and cone separately.", "Add volumes for total volume."]
    }
  }
};