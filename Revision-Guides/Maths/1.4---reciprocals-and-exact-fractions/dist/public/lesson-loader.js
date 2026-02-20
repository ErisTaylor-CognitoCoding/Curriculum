window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.4 - Reciprocals and exact fractions",
  "strapline": "Learn how to simplify surds, rationalise denominators, and work with exact fractional values rather than decimals.",
  "learningObjectives": [
    "Students should be able to simplify surd expressions using the rules of square roots (Maths 1.4)",
    "Students should be able to rationalise denominators by eliminating surds from the bottom of fractions (Maths 1.4)",
    "Students should be able to work with exact fractional values rather than decimal approximations (Maths 1.4)"
  ],
  "keyFormulas": [
    "√(a × b) = √a × √b",
    "Rationalising denominator: multiply numerator and denominator by suitable surd",
    "Reciprocal of a number x is 1/x"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='210' fill='#f9f9f9' stroke='#666' stroke-width='2'/><text x='200' y='50' font-family='Arial' font-size='16' font-weight='bold' text-anchor='middle'>Simplifying Surds Example</text><line x1='100' y1='120' x2='160' y2='120' stroke='#007ACC' stroke-width='3'/><line x1='130' y1='80' x2='130' y2='120' stroke='#007ACC' stroke-width='3'/><text x='130' y='75' font-family='Arial' font-size='24' text-anchor='middle' fill='#007ACC'>√12</text><text x='130' y='140' font-family='Arial' font-size='24' text-anchor='middle' fill='#007ACC'>2√3</text><text x='230' y='120' font-family='Arial' font-size='20' fill='#333'>√12 = √(4 × 3)</text><text x='230' y='150' font-family='Arial' font-size='20' fill='#333'>= √4 × √3 = 2√3</text></svg>",
  "step1": {
    "title": "Concept: What is a Surd?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>surd</strong> is an irrational number expressed as a root, usually a square root, that cannot be simplified to a whole number or fraction. Examples include <em>√2</em>, <em>√3</em>, and <em>√5</em>. However, <em>√4</em> is not a surd because it simplifies to 2.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a surd like a mystery box that you cannot open fully. Some boxes (like <em>√4</em>) can be opened to get a neat number (2), but others (like <em>√2</em>) stay mysterious and can't be simplified further.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Surds",
      "problem": "Determine if the following are surds: <em>√2</em>, <em>√9</em>, <em>√5</em>, and <em>√16</em>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is <em>√2</em> a surd? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct, √2 cannot be simplified to a whole number."
        },
        {
          "id": "q2",
          "prompt": "Is <em>√9</em> a surd? (Yes/No)",
          "answer": "No",
          "feedback": "Right, √9 equals 3, so it is not a surd."
        },
        {
          "id": "q3",
          "prompt": "Is <em>√5</em> a surd? (Yes/No)",
          "answer": "Yes",
          "feedback": "Correct, √5 cannot be simplified to a whole number."
        },
        {
          "id": "q4",
          "prompt": "Is <em>√16</em> a surd? (Yes/No)",
          "answer": "No",
          "feedback": "Correct, √16 equals 4, so it is not a surd."
        }
      ]
    }
  },
  "step2": {
    "title": "Simplifying Surds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">We simplify surds by rewriting them using the product rule of square roots: <em>√(a × b) = √a × √b</em>. Find perfect square factors inside the root and simplify.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify √12",
      "problem": "Simplify <em>√12</em> step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find a perfect square factor of 12.",
          "answer": "4",
          "feedback": "Good, 4 is a perfect square and a factor of 12."
        },
        {
          "id": "q2",
          "prompt": "Rewrite √12 as √(4 × 3). What is the next step?",
          "answer": "√4 × √3",
          "feedback": "Correct, by the product rule."
        },
        {
          "id": "q3",
          "prompt": "Calculate √4.",
          "answer": "2",
          "feedback": "Yes, √4 equals 2."
        },
        {
          "id": "q4",
          "prompt": "What is the simplified surd form of √12?",
          "answer": "2√3",
          "feedback": "Well done! √12 = 2√3."
        }
      ]
    }
  },
  "step3": {
    "title": "Rationalising the Denominator",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rationalising the denominator means removing surds from the bottom of fractions by multiplying numerator and denominator by the same surd.</p>",
    "workedExample": {
      "title": "Worked Example: Rationalise the denominator of 1/√2",
      "problem": "Rationalise <em>1/√2</em>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What should we multiply numerator and denominator by to rationalise 1/√2?",
          "answer": "√2",
          "feedback": "Correct! Multiply by √2/√2."
        },
        {
          "id": "q2",
          "prompt": "Multiply numerator: 1 × √2 = ?",
          "answer": "√2",
          "feedback": "Good."
        },
        {
          "id": "q3",
          "prompt": "Multiply denominator: √2 × √2 = ?",
          "answer": "2",
          "feedback": "Right, √2 × √2 = 2."
        },
        {
          "id": "q4",
          "prompt": "Write the rationalised fraction.",
          "answer": "√2/2",
          "feedback": "Perfect! The denominator is now rational."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Simplify and Rationalise",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Apply what you have learned to simplify and rationalise the following expression:</p>",
    "problem": "<p>Simplify and rationalise: <em>5 / √8</em>.</p>",
    "questions": [
      {
        "id": "q1",
        "prompt": "Simplify the denominator √8 into a surd multiplied by an integer.",
        "answer": "2√2",
        "feedback": "Correct, √8 = 2√2."
      },
      {
        "id": "q2",
        "prompt": "Rewrite the fraction using the simplified denominator.",
        "answer": "5 / (2√2)",
        "feedback": "Yes, now it's 5 over 2√2."
      },
      {
        "id": "q3",
        "prompt": "Multiply numerator and denominator by √2 to rationalise the denominator.",
        "answer": "Multiply by √2/√2",
        "feedback": "Good, multiply both to keep the fraction equal."
      },
      {
        "id": "q4",
        "prompt": "Calculate numerator: 5 × √2 = ?",
        "answer": "5√2",
        "feedback": "Correct."
      },
      {
        "id": "q5",
        "prompt": "Calculate denominator: 2√2 × √2 = ?",
        "answer": "2 × 2 = 4",
        "feedback": "Yes, √2 × √2 = 2, so denominator becomes 4."
      },
      {
        "id": "q6",
        "prompt": "Write the final rationalised fraction.",
        "answer": "5√2 / 4",
        "feedback": "Well done! You have rationalised the denominator."
      }
    ]
  },
  "step5": {
    "title": "Working with Exact Fractions instead of Decimals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using exact fractional forms (like <em>√2/2</em>) is often more accurate than decimal approximations (like 0.707). This avoids rounding errors in calculations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine measuring with a ruler marked in fractions instead of a digital display that might round the measurement. Fractions keep the true value exact.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing Exact and Decimal",
      "problem": "Is <em>1 / √2</em> equal to 0.7 or 0.707? Explain why exact values are preferred.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the decimal approximation of 1/√2.",
          "answer": "0.707",
          "feedback": "Good. The approximate decimal value is 0.707 (rounded)."
        },
        {
          "id": "q2",
          "prompt": "Write 1/√2 in rationalised form.",
          "answer": "√2/2",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Explain why it’s better to use √2/2 rather than 0.707 in calculations.",
          "answer": "Exact fractions avoid rounding errors and maintain accuracy.",
          "feedback": "Excellent explanation!"
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Simplify the expression <em>3 / √18</em> and rationalise the denominator fully. Explain each step and write your answer as an exact fraction, not a decimal.</span>",
      "hint": "Remember to simplify surds first by finding perfect square factors. Then multiply numerator and denominator by the appropriate surd to rationalise.",
      "mustHaveKeywords": ["simplify surd", "rationalise denominator", "exact fraction", "perfect square factor"],
      "optionalKeywords": ["product rule", "eliminating surds", "step-by-step"],
      "modelAnswer": "<span>First, simplify √18 by finding its perfect square factor: √18 = √(9 × 2) = √9 × √2 = 3√2. Rewrite the fraction: 3 / (3√2) = 1 / √2. To rationalise the denominator, multiply numerator and denominator by √2: (1 × √2) / (√2 × √2) = √2 / 2. The simplified, rationalised exact fraction is <strong>√2/2</strong>.</span>",
      "scaffoldPrompts": [
        "Step 1: Simplify the surd in the denominator.",
        "Step 2: Rewrite the fraction using the simplified surd.",
        "Step 3: Rationalise the denominator by multiplying numerator and denominator by the surd.",
        "Step 4: Simplify the resulting fraction and write the answer as an exact fraction."
      ]
    }
  }
};