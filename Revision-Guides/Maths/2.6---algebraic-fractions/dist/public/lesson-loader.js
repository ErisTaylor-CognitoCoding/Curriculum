window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.6 - Algebraic fractions",
  "strapline": "Learn how to simplify, manipulate, and solve problems involving algebraic fractions using factorisation and operations analogous to numerical fractions.",
  "learningObjectives": [
    "Students should be able to simplify algebraic fractions by factorising and cancelling common factors (Maths 2.6)",
    "Students should be able to add, subtract, multiply and divide algebraic fractions using the same rules as numerical fractions (Maths 2.6)",
    "Students should be able to apply algebraic fraction techniques to solve problems involving complex rational expressions (Maths 2.6)"
  ],
  "keyFormulas": [
    "Concept 1: Algebraic Fraction - A fraction where the numerator and/or denominator contains algebraic expressions (e.g., x/3, (2x+1)/(x-5)). These follow the same rules as numerical fractions but require algebraic manipulation.",
    "Concept 2: Factorising to Simplify - Express algebraic expressions as products of factors and cancel common factors between numerator and denominator.",
    "Concept 3: Common Denominator - For addition and subtraction, find a shared denominator by multiplying denominators or finding the least common multiple of expressions."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='340' height='140' fill='#fefefe' stroke='#555' rx='10' ry='10'/><text x='200' y='60' font-family='Arial' font-size='16' text-anchor='middle' fill='#333'><tspan x='200' dy='0'>Algebraic Fraction Example</tspan><tspan x='200' dy='25' font-size='14' fill='#555'>(2x + 4) / (x² - 4)</tspan><line x1='130' y1='90' x2='270' y2='90' stroke='#333' stroke-width='2'/><text x='100' y='130' font-family='Arial' font-size='14' fill='#222'>(2x + 4)</text><text x='280' y='130' font-family='Arial' font-size='14' fill='#222'>(x² - 4)</text></svg>",
  "step1": {
    "title": "Concept: Understanding Algebraic Fractions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>algebraic fraction</strong> is a fraction where the numerator, denominator, or both contain algebraic expressions with variables. They are manipulated similarly to numerical fractions but require additional algebraic techniques such as factorisation.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of algebraic fractions as recipes where ingredients (numbers) are replaced by variable expressions; you still combine, simplify, and measure the same way, but with more care.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify numerator and denominator",
      "problem": "Consider the fraction <em>(3x + 6)/(x² - 9)</em>. What is the numerator and what is the denominator?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the numerator?",
          "answer": "3x + 6",
          "feedback": "Correct! The numerator is the expression above the fraction line."
        },
        {
          "id": "q2",
          "prompt": "What is the denominator?",
          "answer": "x^2 - 9",
          "feedback": "Correct! The denominator is the expression below the fraction line."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Simplifying Algebraic Fractions by Factorising and Cancelling",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To simplify algebraic fractions, you factorise both numerator and denominator into their simplest factors, then cancel any common factors.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify (3x + 6)/(x² - 9)",
      "problem": "Simplify the fraction by factorising numerator and denominator.",
      "questions": [
        {
          "id": "q3",
          "prompt": "Factorise the numerator 3x + 6.",
          "answer": "3(x + 2)",
          "feedback": "Correct! 3 is a common factor."
        },
        {
          "id": "q4",
          "prompt": "Factorise the denominator x² - 9.",
          "answer": "(x - 3)(x + 3)",
          "feedback": "Correct! This is a difference of squares."
        },
        {
          "id": "q5",
          "prompt": "Are there any common factors to cancel?",
          "answer": "No",
          "feedback": "Correct! There are no common factors to cancel here."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Adding and Subtracting Algebraic Fractions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To add or subtract algebraic fractions, find a <strong>common denominator</strong>, often by multiplying denominators or finding a lowest common multiple, then adjust numerators accordingly before combining.</p>",
    "workedExample": {
      "title": "Worked Example: Add (1)/(x + 2) + (3)/(x - 1)",
      "problem": "Find the sum of the two fractions.",
      "questions": [
        {
          "id": "q6",
          "prompt": "What is the common denominator?",
          "answer": "(x + 2)(x - 1)",
          "feedback": "Correct! Multiply both denominators to get the common denominator."
        },
        {
          "id": "q7",
          "prompt": "Rewrite (1)/(x + 2) with the common denominator.",
          "answer": "(x - 1)/((x + 2)(x - 1))",
          "feedback": "Correct! Multiply numerator and denominator by (x - 1)."
        },
        {
          "id": "q8",
          "prompt": "Rewrite (3)/(x - 1) with the common denominator.",
          "answer": "(3(x + 2))/((x + 2)(x - 1))",
          "feedback": "Correct! Multiply numerator and denominator by (x + 2)."
        },
        {
          "id": "q9",
          "prompt": "Add the numerators: (x - 1) + 3(x + 2). What is the result?",
          "answer": "4x + 5",
          "feedback": "Correct! Simplify the numerator."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' font-family='Arial' font-size='16' fill='#333'>&#40;1&#41;&#47;&#40;x + 2&#41; + &#40;3&#41;&#47;&#40;x - 1&#41;</text><text x='20' y='70' font-family='Arial' font-size='16' fill='#000'>&#61; &#40;x - 1&#41;&#47;&#40;&#40;x + 2&#41;&#40;x - 1&#41;&#41; + &#40;3&#40;x + 2&#41;&#41;&#47;&#40;&#40;x + 2&#41;&#40;x - 1&#41;&#41;</text><line x1='20' y1='90' x2='380' y2='90' stroke='#000' stroke-width='2'/><text x='20' y='130' font-family='Arial' font-size='16' fill='#000'>&#61; &#40;4x + 5&#41;&#47;&#40;&#40;x + 2&#41;&#40;x - 1&#41;&#41;</text></svg>"
  },
  "step4": {
    "title": "Concept: Multiplying and Dividing Algebraic Fractions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Multiplying algebraic fractions involves multiplying numerators and denominators directly. Dividing is done by multiplying by the reciprocal of the divisor fraction.</p>",
    "workedExample": {
      "title": "Worked Example: Multiply and Divide Fractions",
      "problem": "Calculate (2x)/(x + 1) × (x - 3)/(4) and then divide (2x)/(x + 1) by (4)/(x - 3).",
      "questions": [
        {
          "id": "q10",
          "prompt": "Multiply the numerators: 2x × (x - 3). What is the product?",
          "answer": "2x(x - 3)",
          "feedback": "Correct! We multiply numerators directly."
        },
        {
          "id": "q11",
          "prompt": "Multiply the denominators: (x + 1) × 4.",
          "answer": "4(x + 1)",
          "feedback": "Correct!"
        },
        {
          "id": "q12",
          "prompt": "The product is (2x(x - 3))/(4(x + 1)). Write this as your answer.",
          "answer": "2x(x - 3)/[4(x + 1)]",
          "feedback": "Correct!"
        },
        {
          "id": "q13",
          "prompt": "Now divide (2x)/(x + 1) by (4)/(x - 3). What operation follows?",
          "answer": "Multiply by reciprocal",
          "feedback": "Correct! Dividing fractions means multiplying by the reciprocal."
        },
        {
          "id": "q14",
          "prompt": "What is the reciprocal of (4)/(x - 3)?",
          "answer": "(x - 3)/4",
          "feedback": "Correct!"
        },
        {
          "id": "q15",
          "prompt": "Now multiply (2x)/(x + 1) × (x - 3)/4. Write the resulting fraction.",
          "answer": "2x(x - 3) / 4(x + 1)",
          "feedback": "Correct!"
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Solving Problems with Complex Rational Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Complex rational expressions contain fractions within fractions. Simplify the numerator and denominator first, then apply fraction rules to simplify or solve.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify Complex Fraction",
      "problem": "Simplify: ((x/ (x+1)) + (2/(x-1)) ) / ( (3x)/(x^2 - 1) )",
      "questions": [
        {
          "id": "q16",
          "prompt": "Factor the denominator x² - 1.",
          "answer": "(x + 1)(x - 1)",
          "feedback": "Correct! Difference of squares factorisation."
        },
        {
          "id": "q17",
          "prompt": "Find the common denominator of (x/(x + 1)) + (2/(x - 1)).",
          "answer": "(x + 1)(x - 1)",
          "feedback": "Correct! Multiply the two denominators."
        },
        {
          "id": "q18",
          "prompt": "Rewrite and add the numerators over the common denominator.",
          "answer": "x(x - 1) + 2(x + 1)",
          "feedback": "Correct!"
        },
        {
          "id": "q19",
          "prompt": "Write the entire numerator as one fraction: [x(x - 1) + 2(x + 1)] / [(x + 1)(x - 1)]",
          "answer": "x(x - 1) + 2(x + 1)/ (x + 1)(x - 1)",
          "feedback": "Correct!"
        },
        {
          "id": "q20",
          "prompt": "Rewrite the entire expression as a division of two fractions.",
          "answer": "([x(x - 1) + 2(x + 1)] / [(x + 1)(x - 1)]) ÷ (3x/[(x + 1)(x - 1)])",
          "feedback": "Correct!"
        },
        {
          "id": "q21",
          "prompt": "Simplify by multiplying numerator by reciprocal of the denominator.",
          "answer": "([x(x - 1) + 2(x + 1)] / [(x + 1)(x - 1)]) × ([(x + 1)(x - 1)] / 3x)",
          "feedback": "Correct! Now cancel common factors."
        },
        {
          "id": "q22",
          "prompt": "Cancel the common factors (x + 1)(x - 1). What is left?",
          "answer": "([x(x - 1) + 2(x + 1)]) / 3x",
          "feedback": "Correct! The complex fraction is simplified."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Simplify the complex algebraic fraction: ((2x)/(x-3) - (x+1)/(x+4)) ÷ ((x² - 9)/(x² - 16))</span>",
      "hint": "Remember to factorise expressions and find common denominators before simplifying the complex fraction.",
      "mustHaveKeywords": ["factorise", "common denominator", "reciprocal", "cancel common factors"],
      "optionalKeywords": ["difference of squares", "simplify numerator and denominator separately"],
      "modelAnswer": "<span>First, factorise the denominators where possible: x² - 9 = (x - 3)(x + 3), x² - 16 = (x - 4)(x + 4). Then find a common denominator for the subtraction in the numerator, rewrite both fractions with this denominator and subtract the numerators. Next, rewrite the overall division as multiplication by the reciprocal of the denominator fraction. Finally, cancel any common factors and simplify to obtain the simplest form.</span>",
      "scaffoldPrompts": ["Factorise all quadratic expressions first", "Find the least common denominator for subtraction", "Rewrite subtraction as a single fraction", "Rewrite division as multiplication", "Cancel common factors and simplify"]
    }
  }
};