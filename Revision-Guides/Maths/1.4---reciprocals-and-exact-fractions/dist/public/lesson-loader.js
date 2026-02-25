window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.4 - Reciprocals and exact fractions",
  "strapline": "Learn how to simplify surds, rationalise denominators, and work with exact fractional values to avoid decimal approximations.",
  "learningObjectives": [
    "Students should be able to simplify surd expressions using the rules of square roots (Maths 1.4)",
    "Students should be able to rationalise denominators by eliminating surds from the bottom of fractions (Maths 1.4)",
    "Students should be able to work with exact fractional values rather than decimal approximations (Maths 1.4)"
  ],
  "keyFormulas": [
    "√(a × b) = √a × √b (Product rule for square roots)",
    "To rationalise denominator: (1/√a) × (√a/√a) = √a/a",
    "Exact fraction form preferred over decimal approximations for precision"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='120' width='300' height='60' fill='#f9f9f9' stroke='#666' rx='10' ry='10'/><text x='200' y='150' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#333'>√(a × b) = √a × √b</text><circle cx='150' cy='200' r='25' fill='#d1e7dd'/><text x='150' y='205' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#0f5132'>√12</text><circle cx='250' cy='200' r='25' fill='#f8d7da'/><text x='250' y='205' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#842029'>2√3</text><line x1='175' y1='200' x2='225' y2='200' stroke='#333' stroke-width='2' marker-end='url(#arrowhead)'/><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#333'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: What is a Surd?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>surd</strong> is an irrational number in root form that cannot be simplified to a whole number or exact fraction. Common examples include <em>√2</em>, <em>√3</em>, and <em>√5</em>. If a root simplifies to a whole number, it is not a surd (e.g., <em>√4 = 2</em>).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of surds like the irrational parts of numbers that don't 'end' neatly like decimals with no repeating pattern—like trying to cut a pizza into infinite slices equally.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify a Surd",
      "problem": "Is <strong>√8</strong> a surd? Simplify if possible.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the prime factorization of 8?",
          "answer": "2 × 2 × 2",
          "feedback": "Good! 8 = 2 × 2 × 2."
        },
        {
          "id": "q2",
          "prompt": "Rewrite √8 as √(4 × 2) using the product rule.",
          "answer": "√4 × √2",
          "feedback": "Correct, splitting roots helps simplify."
        },
        {
          "id": "q3",
          "prompt": "What is √4?",
          "answer": "2",
          "feedback": "Right! √4 = 2."
        },
        {
          "id": "q4",
          "prompt": "Write simplified form of √8.",
          "answer": "2√2",
          "feedback": "Perfect! 2√2 is simplified surd form."
        },
        {
          "id": "q5",
          "prompt": "Is √8 a surd after simplification?",
          "answer": "Yes",
          "feedback": "Correct. Since √2 cannot be simplified further, 2√2 is a surd."
        }
      ]
    }
  },
  "step2": {
    "title": "Simplifying Surds",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To simplify a surd, find the largest perfect square factor and rewrite the root as the product of two square roots, then simplify the perfect square.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify √50",
      "problem": "Simplify the surd √50 step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find a perfect square factor of 50.",
          "answer": "25",
          "feedback": "Correct, 25 is a perfect square factor of 50."
        },
        {
          "id": "q2",
          "prompt": "Rewrite √50 as √(25 × 2).",
          "answer": "√25 × √2",
          "feedback": "Well done!"
        },
        {
          "id": "q3",
          "prompt": "Simplify √25.",
          "answer": "5",
          "feedback": "Yes! √25 = 5."
        },
        {
          "id": "q4",
          "prompt": "Write the simplified form of √50.",
          "answer": "5√2",
          "feedback": "Excellent! The simplified form is 5√2."
        }
      ]
    }
  },
  "step3": {
    "title": "Rationalising the Denominator",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Rationalising means removing the surd from the denominator of a fraction by multiplying numerator and denominator by the same surd. This makes the denominator a rational number.</p>",
    "workedExample": {
      "title": "Worked Example: Rationalise 1/√3",
      "problem": "Rationalise the denominator of <em>1/√3</em> step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What should you multiply numerator and denominator by?",
          "answer": "√3",
          "feedback": "Good! Multiply by √3 to eliminate the surd."
        },
        {
          "id": "q2",
          "prompt": "Multiply numerator: 1 × √3 = ?",
          "answer": "√3",
          "feedback": "Correct!"
        },
        {
          "id": "q3",
          "prompt": "Multiply denominator: √3 × √3 = ?",
          "answer": "3",
          "feedback": "Yes, √3 × √3 = 3."
        },
        {
          "id": "q4",
          "prompt": "Write the rationalised fraction.",
          "answer": "√3/3",
          "feedback": "Perfect! The denominator is now rational."
        }
      ]
    }
  },
  "step4": {
    "title": "Working with Exact Fractions vs Decimals",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exact fractions or surds retain accuracy, unlike decimal approximations that may be rounded and lose precision. Use exact values whenever possible to keep answers precise.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like keeping money in exact currency amounts rather than estimating with rounded figures — you avoid small errors accumulating.</p>"
    },
    "workedExample": {
      "title": "Worked Example: π in Fractional Form",
      "problem": "Why is using <em>22/7</em> instead of decimal 3.14 useful?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is 3.14 an exact value for π?",
          "answer": "No",
          "feedback": "Correct, 3.14 is an approximation."
        },
        {
          "id": "q2",
          "prompt": "Is 22/7 exact or approximate?",
          "answer": "Approximate",
          "feedback": "Right, 22/7 is a better approximation but still not exact."
        },
        {
          "id": "q3",
          "prompt": "When doing calculations, why might exact surds or fractions be better than decimals?",
          "answer": "To keep precision and avoid rounding errors",
          "feedback": "Exactly, so results are more accurate."
        }
      ]
    }
  },
  "step5": {
    "title": "Practice Rationalising More Complex Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can rationalise denominators involving sums or differences with surds by multiplying numerator and denominator by the conjugate.</p>",
    "workedExample": {
      "title": "Worked Example: Rationalise 1 / (√2 + 1)",
      "problem": "Rationalise the denominator of <em>1 / (√2 + 1)</em>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the conjugate of (√2 + 1)?",
          "answer": "√2 - 1",
          "feedback": "Good! The conjugate changes the sign."
        },
        {
          "id": "q2",
          "prompt": "Multiply numerator and denominator by the conjugate.",
          "answer": "Multiply by (√2 - 1) / (√2 - 1)",
          "feedback": "Correct!"
        },
        {
          "id": "q3",
          "prompt": "Write numerator after multiplication: 1 × (√2 - 1) = ?",
          "answer": "√2 - 1",
          "feedback": "Right."
        },
        {
          "id": "q4",
          "prompt": "Write denominator after multiplication: (√2 + 1)(√2 - 1) = ?",
          "answer": "2 - 1",
          "feedback": "Yes, difference of squares: a² - b²."
        },
        {
          "id": "q5",
          "prompt": "Simplify denominator: 2 - 1 = ?",
          "answer": "1",
          "feedback": "Exactly."
        },
        {
          "id": "q6",
          "prompt": "Write the simplified expression.",
          "answer": "√2 - 1",
          "feedback": "Perfect! Denominator rationalised."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Rationalise the denominator and simplify the expression below stating your answer as an exact fraction or surd:</span><br/><span>\\( \\frac{5}{\\sqrt{8}} \\)</span>",
      "hint": "Remember to simplify surds before rationalising. Use \\( \\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b} \\).",
      "mustHaveKeywords": ["simplify surd", "rationalise denominator", "exact fraction", "surds"],
      "optionalKeywords": ["product rule", "conjugate"],
      "modelAnswer": "<span>First, simplify \\( \\sqrt{8} \\) to \\( 2\\sqrt{2} \\). Then rewrite the expression as \\( \\frac{5}{2\\sqrt{2}} \\). To rationalise, multiply numerator and denominator by \\( \\sqrt{2} \\):</span> <br/><span>\\( \\frac{5 \\times \\sqrt{2}}{2\\sqrt{2} \\times \\sqrt{2}} = \\frac{5\\sqrt{2}}{2 \\times 2} = \\frac{5\\sqrt{2}}{4} \\)</span><br/><span>This is the simplified exact form with a rational denominator.</span>",
      "scaffoldPrompts": [
        "Step 1: Simplify \\( \\sqrt{8} \\).",
        "Step 2: Write the fraction with the simplified surd in the denominator.",
        "Step 3: Multiply numerator and denominator by the surd to rationalise.",
        "Step 4: Simplify numerator and denominator fully."
      ]
    }
  }
};