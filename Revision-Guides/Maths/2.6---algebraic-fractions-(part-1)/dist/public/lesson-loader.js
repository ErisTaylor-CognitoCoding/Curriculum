window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.6 - Algebraic fractions (Part 1)",
  "strapline": "Introduction to simplifying and multiplying algebraic fractions using factorisation techniques.",
  "learningObjectives": [
    "Students should be able to simplify algebraic fractions by cancelling common factors (Maths 2.6)",
    "Students should be able to multiply algebraic fractions and simplify the result (Maths 2.6)",
    "Students should be able to factorise quadratic expressions in numerators and denominators to simplify algebraic fractions (Maths 2.6)"
  ],
  "keyFormulas": [
    "Formula 1: Algebraic fraction = <em>numerator</em> / <em>denominator</em>",
    "Formula 2: Factorising quadratics: ax² + bx + c = (mx + n)(px + q)",
    "Reminder: Cancel only common factors, never terms being added or subtracted"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='80' width='340' height='160' fill='#eef4fb' stroke='#2a4d69' stroke-width='2'/><text x='200' y='120' font-family='Arial' font-size='20' font-weight='bold' fill='#2a4d69' text-anchor='middle'>Algebraic Fraction Example</text><text x='200' y='160' font-family='Arial' font-size='18' fill='#2a4d69' text-anchor='middle'><tspan>Numerator: (x<sup>2</sup> - 4)</tspan></text><path d='M 150 180 L 250 180' stroke='#2a4d69' stroke-width='3'/><text x='200' y='210' font-family='Arial' font-size='18' fill='#2a4d69' text-anchor='middle'><tspan>Denominator: (x + 2)</tspan></text></svg>",
  "step1": {
    "title": "Concept: Understanding Algebraic Fractions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>algebraic fraction</strong> has an expression with letters and numbers in the numerator and/or denominator, for example <em>3x/5</em> or <em>(x + 2)/(x - 1)</em>. We simplify these by cancelling common factors.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just like you simplify <em>6/8</em> to <em>3/4</em> by dividing top and bottom by 2, you simplify algebraic fractions by cancelling common terms.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Recognising Algebraic Fractions",
      "problem": "Is <em>(x + 3)/5</em> an algebraic fraction?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the numerator contain algebraic expressions (letters/numbers)?",
          "answer": "yes",
          "feedback": "Correct. The numerator is (x + 3), which contains the variable x."
        },
        {
          "id": "q2",
          "prompt": "Is the denominator a number, variable, or both?",
          "answer": "number",
          "feedback": "Correct. The denominator is 5, a constant number."
        },
        {
          "id": "q3",
          "prompt": "Therefore, is (x + 3)/5 an algebraic fraction?",
          "answer": "yes",
          "feedback": "Correct. It is an algebraic fraction because the numerator contains a variable."
        }
      ]
    }
  },
  "step2": {
    "title": "Simplifying Algebraic Fractions by Cancelling Common Factors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To simplify algebraic fractions, factor both numerator and denominator fully, then cancel out any common factors.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify (6x)/(9x²)",
      "problem": "Simplify the fraction <em>(6x)/(9x²)</em>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the common factor in the numerical coefficients 6 and 9?",
          "answer": "3",
          "feedback": "Correct. 3 is the greatest common factor."
        },
        {
          "id": "q2",
          "prompt": "What powers of x appear in numerator and denominator?",
          "answer": "x and x²",
          "feedback": "Correct. Numerator has x, denominator has x squared."
        },
        {
          "id": "q3",
          "prompt": "Cancel common factors in numerator and denominator. What remains after canceling 3 and 'x'?",
          "answer": "2/3x",
          "feedback": "Correct. 6 ÷ 3 = 2, 9 ÷ 3 = 3, and x ÷ x = 1, so denominator has x left as x² ÷ x = x."
        }
      ]
    }
  },
  "step3": {
    "title": "Multiplying Algebraic Fractions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When multiplying algebraic fractions, multiply the numerators together and the denominators together, then simplify the resulting fraction by factorising and cancelling common factors.</p>",
    "workedExample": {
      "title": "Worked Example: Multiply (x/3) × (6/x²)",
      "problem": "Calculate <em>(x/3) × (6/x²)</em> and simplify.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the numerators: x × 6 = ?",
          "answer": "6x",
          "feedback": "Correct. The numerators multiply to 6x."
        },
        {
          "id": "q2",
          "prompt": "Multiply the denominators: 3 × x² = ?",
          "answer": "3x²",
          "feedback": "Correct. The denominators multiply to 3x²."
        },
        {
          "id": "q3",
          "prompt": "Simplify the fraction (6x)/(3x²) by cancelling common factors.",
          "answer": "2/x",
          "feedback": "Correct. 6 ÷ 3 = 2 and x ÷ x² = 1/x so fraction simplifies to 2/x."
        }
      ]
    }
  },
  "step4": {
    "title": "Factorising Quadratic Expressions in Numerators and Denominators",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quadratic expressions can often be factorised into two binomials. This helps find common factors in numerator and denominator so algebraic fractions can be simplified.</p>",
    "workedExample": {
      "title": "Worked Example: Factorise numerator and denominator in (x² - 9) / (x² + 5x + 6)",
      "problem": "Factorise both the numerator (x² - 9) and the denominator (x² + 5x + 6).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Factorise the numerator x² - 9 as a difference of squares.",
          "answer": "(x - 3)(x + 3)",
          "feedback": "Correct. x² - 9 = (x - 3)(x + 3)."
        },
        {
          "id": "q2",
          "prompt": "Factorise the denominator x² + 5x + 6 into two binomials.",
          "answer": "(x + 2)(x + 3)",
          "feedback": "Correct. x² + 5x + 6 = (x + 2)(x + 3)."
        },
        {
          "id": "q3",
          "prompt": "Identify the common factors in numerator and denominator.",
          "answer": "x + 3",
          "feedback": "Correct. The factor (x + 3) is common."
        }
      ]
    }
  },
  "step5": {
    "title": "Simplify Using Factorisation and Cancelling",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">After factorising, cancel the common factors to simplify the algebraic fraction fully.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify (x² - 9) / (x² + 5x + 6) using factors",
      "problem": "Using the previous factorisation, simplify the fraction.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the fraction using the factors: (x - 3)(x + 3) / (x + 2)(x + 3).",
          "answer": "(x - 3)(x + 3)/(x + 2)(x + 3)",
          "feedback": "Correct. Expressed fully as factors."
        },
        {
          "id": "q2",
          "prompt": "Cancel the common factor (x + 3). What is the simplified fraction?",
          "answer": "(x - 3) / (x + 2)",
          "feedback": "Correct. Cancelled (x + 3) from numerator and denominator."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Simplify the algebraic fraction <em>(x² + 7x + 12) / (x² + 4x + 3)</em> by factorising and cancelling common factors.</span>",
      "hint": "Factorise numerator and denominator fully first, then identify and cancel common factors.",
      "mustHaveKeywords": ["factorise", "common factors", "cancel", "simplify"],
      "optionalKeywords": ["quadratic expressions", "binomials"],
      "modelAnswer": "<span>First factorise numerator: x² + 7x + 12 = (x + 3)(x + 4). Factorise denominator: x² + 4x + 3 = (x + 1)(x + 3). The common factor is (x + 3), so it can be cancelled. The simplified fraction is (x + 4) / (x + 1).</span>",
      "scaffoldPrompts": ["Factorise numerator as two binomials", "Factorise denominator as two binomials", "Identify common factors", "Cancel common factors", "Write final simplified fraction"]
    }
  }
};