window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.6 - Algebraic fractions",
  "strapline": "Learn how to simplify, manipulate, and solve problems using algebraic fractions.",
  "learningObjectives": [
    "Students should be able to simplify algebraic fractions by factorising and cancelling common factors (Maths 2.6)",
    "Students should be able to add, subtract, multiply and divide algebraic fractions using the same rules as numerical fractions (Maths 2.6)",
    "Students should be able to apply algebraic fraction techniques to solve problems involving complex rational expressions (Maths 2.6)"
  ],
  "keyFormulas": [
    "Concept 1: Algebraic Fraction - A fraction where the numerator and/or denominator contains algebraic expressions (e.g., x/3, (2x+1)/(x-5)). These follow the same rules as numerical fractions but require algebraic manipulation.",
    "Concept 2: Factorising to Simplify - Express numerator and denominator as products of factors, then cancel common factors to simplify.",
    "Concept 3: Common Denominator - For addition/subtraction, find a common denominator by multiplying denominators or finding their lowest common multiple."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='160' fill='#f9f9f9' stroke='#666' rx='10' ry='10'/><text x='200' y='45' font-family='Arial' font-size='14' text-anchor='middle' fill='#222'>Example Algebraic Fraction</text><text x='200' y='90' font-family='Arial' font-size='20' text-anchor='middle' fill='#000' font-weight='bold'>&#x28;2x + 4&#x29; / &#x28;x<sup>2</sup> - 4&#x29;</text><line x1='130' y1='95' x2='270' y2='95' stroke='#000' stroke-width='2'/><text x='200' y='140' font-family='Arial' font-size='14' text-anchor='middle' fill='#333'>Factorise numerator and denominator</text></svg>",
  "step1": {
    "title": "Concept: What is an Algebraic Fraction?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <em>algebraic fraction</em> is a fraction where the numerator and/or denominator contains algebraic expressions, such as variables or polynomials. They follow the same arithmetic rules as numerical fractions, but require factorising and other algebraic techniques to simplify.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of an algebraic fraction like a recipe: the numerator and denominator are ingredients made from different components (algebraic terms). Before combining, you need to break down the ingredients (factorise) to see if any parts cancel out.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Recognising an Algebraic Fraction",
      "problem": "Is the following an algebraic fraction? <strong>(2x + 3) / (x - 1)</strong>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the numerator contain algebraic terms?",
          "answer": "yes",
          "feedback": "Correct! The numerator has '2x + 3', which includes the variable x."
        },
        {
          "id": "q2",
          "prompt": "Does the denominator contain algebraic terms?",
          "answer": "yes",
          "feedback": "Correct! The denominator has 'x - 1', which includes the variable x."
        },
        {
          "id": "q3",
          "prompt": "Therefore, is the whole fraction algebraic?",
          "answer": "yes",
          "feedback": "Correct! Since both numerator and denominator have algebraic expressions, it is an algebraic fraction."
        }
      ]
    }
  },
  "step2": {
    "title": "Simplifying Algebraic Fractions by Factorising and Cancelling",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To simplify algebraic fractions, first <strong>factorise</strong> both numerator and denominator. Then cancel any common factors shared between them.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify (2x + 4) / (x<sup>2</sup> - 4)",
      "problem": "Simplify the algebraic fraction <strong>(2x + 4) / (x<sup>2</sup> - 4)</strong>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Factorise the numerator: What is the factorised form of 2x + 4?",
          "answer": "2(x + 2)",
          "feedback": "Correct! 2 is a common factor: 2(x + 2)."
        },
        {
          "id": "q2",
          "prompt": "Factorise the denominator: What is the factorised form of x<sup>2</sup> - 4?",
          "answer": "(x - 2)(x + 2)",
          "feedback": "Correct! x<sup>2</sup> - 4 is a difference of squares: (x - 2)(x + 2)."
        },
        {
          "id": "q3",
          "prompt": "Cancel the common factor(s) from numerator and denominator.",
          "answer": "x + 2",
          "feedback": "Correct! (x + 2) appears in numerator and denominator so it cancels out."
        }
      ]
    },
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Simplifying is like reducing a recipe by removing repeated ingredients on the top and bottom—they balance each other out.</p>"
    }
  },
  "step3": {
    "title": "Adding and Subtracting Algebraic Fractions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To add or subtract algebraic fractions, first find a <strong>common denominator</strong>. This is often the product or the lowest common multiple of the denominators. Then rewrite each fraction with this denominator before combining the numerators.</p>",
    "workedExample": {
      "title": "Worked Example: Add (1 / (x + 1)) + (2 / (x - 1))",
      "problem": "Add the fractions <strong>1 / (x + 1)</strong> and <strong>2 / (x - 1)</strong>",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the common denominator of (x + 1) and (x - 1)?",
          "answer": "(x + 1)(x - 1)",
          "feedback": "Correct! Multiply both denominators as they don’t factor further."
        },
        {
          "id": "q2",
          "prompt": "Rewrite 1 / (x + 1) with the common denominator.",
          "answer": "(x - 1) / ((x + 1)(x - 1))",
          "feedback": "Correct! Multiply numerator and denominator by (x - 1)."
        },
        {
          "id": "q3",
          "prompt": "Rewrite 2 / (x - 1) with the common denominator.",
          "answer": "2(x + 1) / ((x + 1)(x - 1))",
          "feedback": "Correct! Multiply numerator and denominator by (x + 1)."
        },
        {
          "id": "q4",
          "prompt": "Add the numerators over the common denominator.",
          "answer": "(x - 1) + 2(x + 1)",
          "feedback": "Correct! When adding, add numerators directly."
        }
      ]
    }
  },
  "step4": {
    "title": "Multiplying and Dividing Algebraic Fractions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Multiplying algebraic fractions follows the same rule as numerical fractions: multiply numerators together and denominators together. For division, multiply by the reciprocal (invert the second fraction).</p>",
    "workedExample": {
      "title": "Worked Example: Multiply and Divide Fractions",
      "problem": "Multiply <strong>(x / (x + 2))</strong> by <strong>((x + 3) / 5)</strong>; then divide the result by <strong>((x - 1) / 2)</strong>",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the product of the numerators?",
          "answer": "x(x + 3)",
          "feedback": "Correct! Multiply numerator terms directly."
        },
        {
          "id": "q2",
          "prompt": "What is the product of the denominators?",
          "answer": "5(x + 2)",
          "feedback": "Correct! Multiply denominator terms directly."
        },
        {
          "id": "q3",
          "prompt": "Now divide by (x - 1) / 2. What is the reciprocal of (x - 1) / 2?",
          "answer": "2 / (x - 1)",
          "feedback": "Exactly! Flip numerator and denominator."
        },
        {
          "id": "q4",
          "prompt": "Multiply the fraction by this reciprocal: numerator?",
          "answer": "2x(x + 3)",
          "feedback": "Correct! Multiply 2 with previous numerator."
        },
        {
          "id": "q5",
          "prompt": "Multiply the fraction by this reciprocal: denominator?",
          "answer": "5(x + 2)(x - 1)",
          "feedback": "Correct! Multiply previous denominator by (x - 1)."
        }
      ]
    }
  },
  "step5": {
    "title": "Solving Problems Involving Complex Rational Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Complex rational expressions are algebraic fractions where the numerator and/or denominator are themselves algebraic fractions. To solve problems, simplify step-by-step by factorising, finding common denominators, and applying multiplication or division rules.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify Complex Fraction",
      "problem": "Simplify <strong>((x / (x + 1)) / ((x - 1) / (x + 2)))</strong>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Rewrite the division as multiplication by the reciprocal.",
          "answer": "(x / (x + 1)) × ((x + 2) / (x - 1))",
          "feedback": "Correct! Division becomes multiplication by reciprocal."
        },
        {
          "id": "q2",
          "prompt": "Multiply the numerators together.",
          "answer": "x(x + 2)",
          "feedback": "Exactly! Multiply numerator terms directly."
        },
        {
          "id": "q3",
          "prompt": "Multiply the denominators together.",
          "answer": "(x + 1)(x - 1)",
          "feedback": "Correct! Multiply denominator terms directly."
        },
        {
          "id": "q4",
          "prompt": "Factor the denominator and check for common factors.",
          "answer": "(x + 1)(x - 1)",
          "feedback": "Correct! It is already factorised as difference of squares."
        },
        {
          "id": "q5",
          "prompt": "Can you simplify further by cancelling any common factors?",
          "answer": "No",
          "feedback": "Correct! There are no common factors between numerator and denominator."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Simplify the algebraic fraction <strong>(3x<sup>2</sup> - 12) / (6x - 24)</strong> fully and state any restrictions on the variable x.</span>",
      "hint": "<span>Remember to factorise numerator and denominator, cancel common factors, and consider values making the denominator zero.</span>",
      "mustHaveKeywords": ["factorise", "cancel", "restrictions", "denominator", "simplify"],
      "optionalKeywords": ["common factors", "variable domain"],
      "modelAnswer": "<span>First, factorise numerator: 3x<sup>2</sup> - 12 = 3(x<sup>2</sup> - 4) = 3(x - 2)(x + 2). Factorise denominator: 6x - 24 = 6(x - 4). The fraction becomes [3(x - 2)(x + 2)] / [6(x - 4)]. Cancel common factors if any: none match, so simplified form is as is, but numerator and denominator share a factor of 3/6 = 1/2, so final fraction = (1/2)(x - 2)(x + 2) / (x - 4). Restrictions: denominator ≠ 0, so x ≠ 4.</span>",
      "scaffoldPrompts": ["Factor numerator and denominator", "Identify common factors to cancel", "Write simplified fraction", "Determine values that make denominator zero"]
    }
  }
};