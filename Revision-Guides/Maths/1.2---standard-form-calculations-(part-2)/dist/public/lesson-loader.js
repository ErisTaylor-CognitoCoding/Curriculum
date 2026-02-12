window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.2 - Standard form calculations (Part 2)",
  "strapline": "Learn how to multiply and divide numbers in standard form, adjust powers of ten, and convert between ordinary numbers and standard form through multi-step calculations.",
  "learningObjectives": [
    "Students should apply the laws of indices when multiplying and dividing numbers in standard form (Maths 1.2)",
    "Students should adjust the power of 10 to ensure answers remain in correct standard form notation (Maths 1.2)",
    "Students should convert between ordinary numbers and standard form within the context of multi-step calculations (Maths 1.2)"
  ],
  "keyFormulas": [
    "Concept 1: (a × 10^m) × (b × 10^n) = (a × b) × 10^(m+n)",
    "Concept 2: (a × 10^m) ÷ (b × 10^n) = (a ÷ b) × 10^(m−n)",
    "Concept 3: Correct standard form format: A × 10^n where 1 ≤ A < 10 and n is an integer"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='100' width='360' height='100' fill='#e8f4fc' stroke='#0366d6' stroke-width='2' rx='10'/><text x='200' y='140' text-anchor='middle' font-family='Arial' font-size='16' fill='#0366d6' font-weight='bold' >Standard Form Multiplication</text><text x='200' y='170' text-anchor='middle' font-family='Arial' font-size='14' fill='#333'> (2 × 10<sup>3</sup>) × (3 × 10<sup>4</sup>) = (2 × 3) × 10<sup>3+4</sup> = 6 × 10<sup>7</sup> </text><line x1='120' y1='200' x2='280' y2='200' stroke='#0366d6' stroke-width='2' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#0366d6' /></marker></defs></svg>",
  "step1": {
    "title": "Concept: Laws of Indices in Standard Form",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying numbers in standard form, multiply the decimal parts and add the exponents of 10. When dividing, divide the decimal parts and subtract the exponents of 10.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the powers of 10 as stacking blocks: when multiplying, you add blocks to build a taller tower; when dividing, you remove blocks from the stack.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Multiply (4 × 10<sup>5</sup>) and (3 × 10<sup>3</sup>)</span>",
        "<span>Multiply decimals: 4 × 3 = 12</span>",
        "<span>Add powers: 5 + 3 = 8</span>",
        "<span>Combined: 12 × 10<sup>8</sup></span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Correct Standard Form Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A number is in correct standard form if the decimal part A satisfies 1 ≤ A &lt; 10. If A is not in this range, adjust A and compensate by changing the power of 10 accordingly.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>From previous example: 12 × 10<sup>8</sup> is NOT correct standard form because 12 &gt; 10</span>",
        "<span>Adjust by writing 12 as 1.2 × 10<sup>1</sup></span>",
        "<span>So, 12 × 10<sup>8</sup> = 1.2 × 10<sup>1</sup> × 10<sup>8</sup> = 1.2 × 10<sup>9</sup></span>"
      ]
    }
  },
  "step3": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq1",
        "question": "<span>What is (5 × 10<sup>4</sup>) ÷ (2 × 10<sup>2</sup>) in correct standard form?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>2.5 × 10<sup>2</sup></span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. The powers of 10 need to be subtracted (4 - 2 = 2), but decimal part needs correct division.</span>"
          },
          {
            "id": "b",
            "label": "<span>2.5 × 10<sup>2</sup></span>",
            "isCorrect": false,
            "explanation": "<span>Decimal division is correct but powers of ten subtraction and adjustment is needed.</span>"
          },
          {
            "id": "c",
            "label": "<span>2.5 × 10<sup>2</sup></span>",
            "isCorrect": true,
            "explanation": "<span>Correct. Dividing decimals: 5 ÷ 2=2.5, subtracting powers: 4−2=2 so answer is 2.5 × 10<sup>2</sup>.</span>"
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze1",
        "sentence": "<span>When multiplying standard form numbers, you <span class=\"font-semibold\">_____</span> the decimal parts and <span class=\"font-semibold\">_____</span> the powers of 10.</span>",
        "blanks": [
          {
            "id": "blank1",
            "options": [
              {"value": "add", "label": "add", "isCorrect": false, "feedback": "Try again, decimal parts are multiplied."},
              {"value": "multiply", "label": "multiply", "isCorrect": true, "feedback": "Correct! Decimal parts are multiplied."}
            ]
          },
          {
            "id": "blank2",
            "options": [
              {"value": "add", "label": "add", "isCorrect": true, "feedback": "Correct! Powers of 10 are added."},
              {"value": "subtract", "label": "subtract", "isCorrect": false, "feedback": "Try again, powers are added when multiplying."}
            ]
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Multi-step Standard Form Calculation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's perform a calculation involving multiplication and division with standard form numbers, ensuring the answer is in correct standard form.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Calculate (6 × 10<sup>7</sup>) × (5 × 10<sup>−3</sup>) ÷ (2 × 10<sup>2</sup>)</span>",
        "<span>Step 1: Multiply decimals: 6 × 5 = 30</span>",
        "<span>Step 2: Add powers: 7 + (−3) = 4</span>",
        "<span>Result after multiplication: 30 × 10<sup>4</sup></span>",
        "<span>Step 3: Now divide by (2 × 10<sup>2</sup>): decimal division 30 ÷ 2 = 15</span>",
        "<span>Step 4: Subtract powers: 4 − 2 = 2</span>",
        "<span>Result: 15 × 10<sup>2</sup> which is not standard form</span>",
        "<span>Step 5: Adjust: 15 = 1.5 × 10<sup>1</sup>, so answer = 1.5 × 10<sup>1+2</sup> = 1.5 × 10<sup>3</sup></span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Calculate the value of (3.2 × 10<sup>6</sup>) × (4.5 × 10<sup>−2</sup>) ÷ (6 × 10<sup>3</sup>) and express your answer in correct standard form.</span>",
      "hint": "Remember to multiply/divide the decimal parts separately and add/subtract the powers of ten. Then adjust your answer to ensure the decimal part is between 1 and 10.",
      "mustHaveKeywords": ["multiply decimals", "add powers of 10", "divide decimals", "subtract powers of 10", "correct standard form"],
      "optionalKeywords": ["adjust powers", "convert"],
      "modelAnswer": "<span>First multiply decimals: 3.2 × 4.5 = 14.4<br>Next add powers of ten: 6 + (−2) = 4<br>Result after multiplication: 14.4 × 10<sup>4</sup><br>Divide decimals: 14.4 ÷ 6 = 2.4<br>Subtract powers of ten: 4 − 3 = 1<br>Result after division: 2.4 × 10<sup>1</sup><br>Decimal part 2.4 is between 1 and 10, so final answer is <strong>2.4 × 10<sup>1</sup></strong>.</span>",
      "scaffoldPrompts": [
        "Step 1: Multiply 3.2 and 4.5, then add the powers 6 and -2.",
        "Step 2: Divide your intermediate answer by 6 × 10^3 by dividing decimals and subtracting powers.",
        "Step 3: Check if your decimal part is between 1 and 10; adjust if needed."
      ]
    }
  }
};