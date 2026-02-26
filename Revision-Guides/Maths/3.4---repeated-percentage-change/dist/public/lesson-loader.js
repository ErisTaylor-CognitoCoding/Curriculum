window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "3.4 - Repeated percentage change",
  "strapline": "Understand and calculate percentage changes applied repeatedly through multipliers, including compound interest, depreciation, and the effect of scale factors on area and volume.",
  "learningObjectives": [
    "Students should calculate repeated percentage changes using multipliers raised to powers (Maths 3.4)",
    "Students should solve problems involving compound interest and depreciation (Maths 3.4)",
    "Students should understand how scale factors affect area (multiplied by k²) and volume (multiplied by k³) when shapes are enlarged by linear scale factor k (Maths 3.4)"
  ],
  "keyFormulas": [
    "Multiplier for increase = 1 + (percentage increase ÷ 100)",
    "Multiplier for decrease = 1 - (percentage decrease ÷ 100)",
    "Repeated percentage change formula: Final amount = Initial amount × (multiplier)^n",
    "Scale factor effects: Area scales by k², Volume scales by k³"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <rect x='30' y='30' width='100' height='100' fill='#90cdf4' stroke='#333' stroke-width='2' />\n  <text x='80' y='20' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#333'>Original shape</text>\n  <rect x='180' y='30' width='200' height='200' fill='#fc8181' stroke='#333' stroke-width='2' />\n  <text x='280' y='20' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#333'>Enlarged by scale factor k=2</text>\n  <line x1='130' y1='80' x2='180' y2='80' stroke='#333' stroke-dasharray='5,5' />\n  <text x='155' y='75' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#333'>Scale factor k=2</text>\n</svg>",
  "step1": {
    "title": "Concept: Understanding Multipliers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A multiplier is a decimal used to apply a percentage change in one step. Increasing by 5% means multiply by <strong>1.05</strong>. Decreasing by 15% means multiply by <strong>0.85</strong>. This simplifies repeated calculations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a multiplier as a speed controller on a treadmill. Increasing speed by 5% is like setting it to 105% of the current speed. Decreasing speed by 15% sets it to 85% of the current speed.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding a Multiplier",
      "problem": "Find the multiplier for a 12% increase and then a 20% decrease.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for a 12% increase?",
          "answer": "1.12",
          "feedback": "Correct! It’s 1 + 12/100 = 1.12."
        },
        {
          "id": "q2",
          "prompt": "What is the multiplier for a 20% decrease?",
          "answer": "0.8",
          "feedback": "Correct! It’s 1 - 20/100 = 0.8."
        }
      ]
    }
  },
  "step2": {
    "title": "Applying Multipliers to Repeated Percentage Change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a percentage change happens repeatedly, raise the multiplier to the power of the number of times the change happens. For example, an amount increasing by 5% annually for 3 years is multiplied by <em>(1.05)^3</em>.</p>",
    "workedExample": {
      "title": "Worked Example: Repeated Increase",
      "problem": "Calculate the amount after a 5% increase each year for 3 years on £100.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for a 5% increase?",
          "answer": "1.05",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Calculate the multiplier raised to the power of 3 (for 3 years). What is (1.05)^3?",
          "answer": "1.157625",
          "feedback": "Well done. (1.05)^3 ≈ 1.157625."
        },
        {
          "id": "q3",
          "prompt": "Calculate the final amount: £100 × 1.157625 = ?",
          "answer": "115.76",
          "feedback": "Correct! Final amount is approximately £115.76."
        }
      ]
    }
  },
  "step3": {
    "title": "Solving Compound Interest Problems",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Compound interest means earning interest on interest. It uses repeated percentage increase multipliers raised to the number of compounding periods.</p>",
    "workedExample": {
      "title": "Worked Example: Compound Interest",
      "problem": "Calculate the amount after 4 years if £200 is invested at 3% compound interest per year.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for a 3% increase?",
          "answer": "1.03",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Calculate (1.03)^4.",
          "answer": "1.1255",
          "feedback": "Good, (1.03)^4 ≈ 1.1255."
        },
        {
          "id": "q3",
          "prompt": "Calculate final amount: £200 × 1.1255 = ?",
          "answer": "225.10",
          "feedback": "Correct! Approximately £225.10."
        }
      ]
    }
  },
  "step4": {
    "title": "Solving Depreciation Problems",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Depreciation means an asset loses value periodically by a percentage. Use multipliers less than 1, raised to the number of periods, to find the decreased value.</p>",
    "workedExample": {
      "title": "Worked Example: Depreciation",
      "problem": "An asset worth £5000 depreciates by 8% annually. Find its value after 3 years.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for an 8% decrease?",
          "answer": "0.92",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Calculate (0.92)^3.",
          "answer": "0.7787",
          "feedback": "Good. (0.92)^3 ≈ 0.7787."
        },
        {
          "id": "q3",
          "prompt": "Calculate the asset’s value after 3 years: £5000 × 0.7787 = ?",
          "answer": "3893.50",
          "feedback": "Correct! Approximately £3893.50."
        }
      ]
    }
  },
  "step5": {
    "title": "Scale Factors Affecting Area and Volume",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When a shape is enlarged by a linear scale factor <em>k</em>, its area is multiplied by <em>k²</em> and its volume by <em>k³</em>. This can be seen by comparing original and enlarged shapes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a small cube made of sugar cubes. If you double its length (k=2), the new cube’s volume is <em>2³ = 8</em> times bigger, so it would take 8 times as many sugar cubes to make it.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Scale Factor Effects",
      "problem": "A square has area 9 cm². It is enlarged by scale factor 3. What is its new area? Then, a cube with volume 27 cm³ is enlarged by scale factor 3. What is its new volume?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the new area after enlargement? (Remember area scales by k²)",
          "answer": "81",
          "feedback": "Correct! New area = 9 × 3² = 9 × 9 = 81 cm²."
        },
        {
          "id": "q2",
          "prompt": "What is the new volume after enlargement? (Volume scales by k³)",
          "answer": "729",
          "feedback": "Correct! New volume = 27 × 3³ = 27 × 27 = 729 cm³."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A car depreciates in value by 12% each year. Its initial value is £15,000. Calculate the value of the car after 5 years. Then, the car undergoes an upgrade that doubles its size (linear scale factor k=2). If the original surface area of the car is 20 m², calculate the new surface area. Show all your working.</span>",
      "hint": "Use multiplier for depreciation and raise it to the power of years. Remember area scales by k² for enlargement. Write all steps clearly.",
      "mustHaveKeywords": ["multiplier", "power", "depreciation", "scale factor", "area", "k²"],
      "optionalKeywords": ["compound depreciation", "surface area enlargement"],
      "modelAnswer": "<span>First, find the depreciation multiplier: 1 - 12/100 = 0.88.<br/>Then raise to the power 5: (0.88)^5.<br/>Calculate (0.88)^5 ≈ 0.5277.<br/>Value after 5 years = £15,000 × 0.5277 ≈ £7,915.50.<br/><br/>For the surface area enlargement, scale factor k=2.<br/>New surface area = original area × k² = 20 × 2² = 20 × 4 = 80 m².</span>",
      "scaffoldPrompts": [
        "Step 1: Calculate the multiplier for 12% depreciation.",
        "Step 2: Raise the multiplier to the 5th power to find overall factor after 5 years.",
        "Step 3: Multiply the initial value by this factor.",
        "Step 4: Identify the scale factor k for size doubling.",
        "Step 5: Calculate the new surface area by multiplying original area by k squared."
      ]
    }
  }
};