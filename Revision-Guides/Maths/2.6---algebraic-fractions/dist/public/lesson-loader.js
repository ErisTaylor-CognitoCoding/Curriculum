window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.6 - Algebraic fractions",
  "strapline": "Understanding how to simplify, operate on, and solve problems with algebraic fractions.",
  "learningObjectives": [
    "Students should be able to simplify algebraic fractions by factorising and cancelling common factors (Maths 2.6)",
    "Students should be able to add, subtract, multiply and divide algebraic fractions using the same rules as numerical fractions (Maths 2.6)",
    "Students should be able to apply algebraic fraction techniques to solve problems involving complex rational expressions (Maths 2.6)"
  ],
  "keyFormulas": [
    "Concept 1: Algebraic Fraction - A fraction where the numerator and/or denominator contains algebraic expressions (e.g., x/3, (2x+1)/(x-5)). These follow the same rules as numerical fractions but require algebraic manipulation.",
    "Concept 2: Factorising to Simplify - Express algebraic expressions as products of their factors, then cancel common factors between numerator and denominator to simplify.",
    "Concept 3: Common Denominator - When adding or subtracting algebraic fractions, find a shared denominator, often by multiplying denominators or finding their lowest common multiple."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 120' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='160' height='40' fill='#e0f7fa' stroke='#00796b' /><text x='100' y='45' font-family='Arial' font-size='18' fill='#004d40' text-anchor='middle' dominant-baseline='middle'>&#x28;2x + 4&#x29; / &#x28;x&#x2B;2&#x29;</text><line x1='0' y1='70' x2='400' y2='70' stroke='#000'/><rect x='220' y='20' width='160' height='40' fill='#ffe0b2' stroke='#ef6c00' /><text x='300' y='45' font-family='Arial' font-size='18' fill='#e65100' text-anchor='middle' dominant-baseline='middle'>(x + 2) / 3</text></svg>",
  "step1": {
    "title": "Concept: What is an Algebraic Fraction?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An algebraic fraction has algebraic expressions in the numerator and/or denominator. They behave like normal fractions but need algebra skills to simplify and combine.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of an algebraic fraction like a recipe where ingredients (numbers or variables) need to be grouped and simplified before cooking.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying an Algebraic Fraction",
      "problem": "Is the expression <strong>(3x + 6) / (x + 2)</strong> an algebraic fraction?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the numerator contain variable(s)?",
          "answer": "yes",
          "feedback": "Correct. The numerator contains the variable x."
        },
        {
          "id": "q2",
          "prompt": "Does the denominator contain variable(s)?",
          "answer": "yes",
          "feedback": "Correct. The denominator contains the variable x."
        },
        {
          "id": "q3",
          "prompt": "Based on your answers, is this an algebraic fraction?",
          "answer": "yes",
          "feedback": "Right! Both numerator and denominator have algebraic expressions, so it is an algebraic fraction."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Factorising to Simplify Algebraic Fractions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Factorise both numerator and denominator into products of simpler terms, then cancel common factors to simplify the fraction.</p>",
    "workedExample": {
      "title": "Worked Example: Simplifying an Algebraic Fraction",
      "problem": "Simplify <strong>(6x^2 + 12x) / (3x)</strong> by factorising and cancelling.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Factorise the numerator: 6x^2 + 12x =",
          "answer": "6x(x+2)",
          "feedback": "Correct, 6x is common in both terms."
        },
        {
          "id": "q2",
          "prompt": "Factorise the denominator: 3x =",
          "answer": "3x",
          "feedback": "Denominator is already factored."
        },
        {
          "id": "q3",
          "prompt": "Cancel the common factors between numerator and denominator.",
          "answer": "2(x+2)",
          "feedback": "Correct. Cancel 3x: 6x/3x = 2."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Adding and Subtracting Algebraic Fractions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Find a common denominator, convert fractions, then add or subtract numerators.</p>",
    "workedExample": {
      "title": "Worked Example: Adding Algebraic Fractions",
      "problem": "Add <strong>1/(x+1) + 2/(x-1)</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the common denominator of (x+1) and (x-1)?",
          "answer": "(x+1)(x-1)",
          "feedback": "Correct, multiply the denominators to find the common denominator."
        },
        {
          "id": "q2",
          "prompt": "Rewrite 1/(x+1) with the common denominator.",
          "answer": "(x-1)/((x+1)(x-1))",
          "feedback": "Good! Multiply numerator and denominator by (x-1)."
        },
        {
          "id": "q3",
          "prompt": "Rewrite 2/(x-1) with the common denominator.",
          "answer": "2(x+1)/((x+1)(x-1))",
          "feedback": "Correct! Multiply numerator and denominator by (x+1)."
        },
        {
          "id": "q4",
          "prompt": "Add the numerators: (x-1) + 2(x+1) =",
          "answer": "3x+1",
          "feedback": "Right! Combine like terms: x - 1 + 2x + 2 = 3x + 1."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Multiplying and Dividing Algebraic Fractions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Multiply numerators and denominators directly. For division, multiply by the reciprocal of the divisor.</p>",
    "workedExample": {
      "title": "Worked Example: Multiplying Algebraic Fractions",
      "problem": "Calculate <strong>(x/3) × (6/(x+2))</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply the numerators: x × 6 =",
          "answer": "6x",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Multiply the denominators: 3 × (x + 2) =",
          "answer": "3(x+2)",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Write the fraction after multiplication.",
          "answer": "6x / 3(x+2)",
          "feedback": "Well done!"
        },
        {
          "id": "q4",
          "prompt": "Simplify the fraction by cancelling common factors.",
          "answer": "2x / (x+2)",
          "feedback": "Correct. 6x/3(x+2) simplifies as 6/3=2."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Complex Rational Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Expressions where algebraic fractions appear in numerator and/or denominator. Simplify by simplifying inner fractions, factorising, and applying fraction rules.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify a Complex Rational Expression",
      "problem": "Simplify <strong>[(x/(x+1)) / (1/(x-1))]</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Rewrite the division of fractions as multiplication by the reciprocal.",
          "answer": "(x/(x+1)) × ((x-1)/1)",
          "feedback": "Correct! Dividing by a fraction means multiplying by its reciprocal."
        },
        {
          "id": "q2",
          "prompt": "Multiply numerators: x × (x-1) =",
          "answer": "x(x-1)",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Multiply denominators: (x+1) × 1 =",
          "answer": "x+1",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Write the simplified fraction.",
          "answer": "x(x-1)/(x+1)",
          "feedback": "Well done!"
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Simplify the algebraic fraction <em>(4x^2 - 12x) / (2x^2 - 18)</em> fully. Then, use your result to find the value of the expression when x = 4.</span>",
      "hint": "Remember to factorise numerator and denominator completely, cancel common factors, then substitute the value of x.",
      "mustHaveKeywords": ["factorise", "cancel common factors", "substitute", "simplify"],
      "optionalKeywords": ["quadratic expression", "value of x"],
      "modelAnswer": "<span>First, factorise numerator: 4x^2 - 12x = 4x(x - 3).<br>Factorise denominator: 2x^2 - 18 = 2(x^2 - 9) = 2(x - 3)(x + 3).<br>Cancel common factor (x - 3).<br>Simplified fraction: (4x) / (2(x + 3)) = 2x / (x + 3).<br>Substitute x = 4: 2 × 4 / (4 + 3) = 8 / 7.</span>",
      "scaffoldPrompts": [
        "Step 1: Factorise numerator and denominator.",
        "Step 2: Identify and cancel common factors.",
        "Step 3: Simplify the resulting expression.",
        "Step 4: Substitute x = 4 and calculate value."
      ]
    }
  }
};