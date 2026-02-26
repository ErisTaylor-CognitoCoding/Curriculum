window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.1 - Expanding products of multiple linear expressions",
  "strapline": "Learn to expand products of two or three linear expressions using the distributive law to create quadratic and cubic polynomials.",
  "learningObjectives": [
    "Students should be able to expand brackets involving multiple linear expressions, such as (x + 2)(x + 3), applying the distributive law systematically (Maths 2.1)",
    "Students should be able to expand triple brackets like (x + 1)(x - 2)(x + 4) to generate higher-order polynomial expressions (Maths 2.1)",
    ""
  ],
  "keyFormulas": [
    "Concept 1: Linear expression - An algebraic expression where the highest power of the variable is 1, such as (x + 3) or (2x - 5)",
    "Concept 2: Distributive law - The mathematical principle that states a(b + c) = ab + ac, which we use to multiply expressions by distributing each term",
    "Concept 3: Quadratic expression - An algebraic expression where the highest power of the variable is 2, typically in the form ax\u00b2 + bx + c"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='140' height='100' fill='#ddeeff' stroke='#336699' stroke-width='2'/><text x='110' y='100' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#223366'>&#40;x + 2&#41;</text><rect x='220' y='40' width='140' height='100' fill='#ddefdd' stroke='#339933' stroke-width='2'/><text x='290' y='100' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#224422'>&#40;x + 3&#41;</text><text x='190' y='160' font-family='sans-serif' font-size='20' text-anchor='middle' fill='#000'>Expansion by Distribution</text><line x1='180' y1='90' x2='220' y2='90' stroke='#000' stroke-width='2' marker-end='url(#arrowhead)'/><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#000'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding Linear Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>linear expression</strong> is an algebraic expression where the highest power of the variable is 1. For example, <em>(x + 3)</em> or <em>(2x - 5)</em>. These are the building blocks for the expressions we will expand.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of linear expressions as simple Lego blocks, each having just one level. When we multiply them, we connect the blocks in new ways to build bigger structures.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Linear Expressions",
      "problem": "Is the expression <em>(3x + 7)</em> linear?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the highest power of x in 3x + 7?",
          "answer": "1",
          "feedback": "Correct. The highest power is 1, so it is linear."
        },
        {
          "id": "q2",
          "prompt": "Does 7 affect the degree of the expression?",
          "answer": "No",
          "feedback": "Right, constants do not affect the degree."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Applying the Distributive Law",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>distributive law</strong> states that a(b + c) = ab + ac. This means you multiply each term inside the bracket by the term outside the bracket. This principle helps us multiply brackets with multiple terms.</p>",
    "workedExample": {
      "title": "Worked Example: Expand Simple Product",
      "problem": "Expand <em>2(x + 3)</em> using the distributive law.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply 2 by x:",
          "answer": "2x",
          "feedback": "Correct. 2 times x is 2x."
        },
        {
          "id": "q2",
          "prompt": "Multiply 2 by 3:",
          "answer": "6",
          "feedback": "Correct. 2 times 3 is 6."
        },
        {
          "id": "q3",
          "prompt": "Write down the full expanded expression:",
          "answer": "2x + 6",
          "feedback": "Well done! The expanded form is 2x + 6."
        }
      ]
    }
  },
  "step3": {
    "title": "Step-by-Step Expansion of Two Linear Expressions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To expand the product of two linear expressions like <em>(x + 2)(x + 3)</em>, multiply each term in the first bracket by each term in the second bracket systematically.</p>",
    "workedExample": {
      "title": "Worked Example: Expand (x + 2)(x + 3)",
      "problem": "Expand the expression step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply <em>x</em> by <em>x</em>:",
          "answer": "x\u00b2",
          "feedback": "Correct. x times x is x\u00b2."
        },
        {
          "id": "q2",
          "prompt": "Multiply <em>x</em> by <em>3</em>:",
          "answer": "3x",
          "feedback": "Right. x times 3 is 3x."
        },
        {
          "id": "q3",
          "prompt": "Multiply <em>2</em> by <em>x</em>:",
          "answer": "2x",
          "feedback": "Correct. 2 times x is 2x."
        },
        {
          "id": "q4",
          "prompt": "Multiply <em>2</em> by <em>3</em>:",
          "answer": "6",
          "feedback": "Good. 2 times 3 is 6."
        },
        {
          "id": "q5",
          "prompt": "Combine all terms:",
          "answer": "x\u00b2 + 3x + 2x + 6",
          "feedback": "Exactly. Now, we can simplify by combining like terms."
        },
        {
          "id": "q6",
          "prompt": "Simplify the expression by adding the like terms (3x + 2x):",
          "answer": "5x",
          "feedback": "Correct! 3x + 2x equals 5x."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 400 160' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='60' height='30' fill='#ddeeff' stroke='#336699'/><text x='50' y='40' font-family='sans-serif' font-size='18' fill='#000' text-anchor='middle'>(x + 2)</text><rect x='120' y='20' width='60' height='30' fill='#ddefdd' stroke='#339933'/><text x='150' y='40' font-family='sans-serif' font-size='18' fill='#000' text-anchor='middle'>(x + 3)</text><text x='260' y='40' font-family='sans-serif' font-size='18' fill='#222'>&#8594; Multiply each term</text><line x1='80' y1='35' x2='120' y2='35' stroke='#000' stroke-width='2' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#000'/></marker></defs></svg>"
  },
  "step4": {
    "title": "Expanding Triple Brackets",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When expanding three linear expressions like <em>(x + 1)(x - 2)(x + 4)</em>, start by expanding the first two brackets, then multiply the result by the third.</p>",
    "workedExample": {
      "title": "Worked Example: Expand (x + 1)(x - 2)(x + 4)",
      "problem": "Expand step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "First, expand (x + 1)(x - 2): Multiply x by x:",
          "answer": "x\u00b2",
          "feedback": "Correct. x times x is x\u00b2."
        },
        {
          "id": "q2",
          "prompt": "Multiply x by -2:",
          "answer": "-2x",
          "feedback": "Correct. x times -2 is -2x."
        },
        {
          "id": "q3",
          "prompt": "Multiply 1 by x:",
          "answer": "x",
          "feedback": "Right. 1 times x is x."
        },
        {
          "id": "q4",
          "prompt": "Multiply 1 by -2:",
          "answer": "-2",
          "feedback": "Correct. 1 times -2 is -2."
        },
        {
          "id": "q5",
          "prompt": "Combine like terms from (x + 1)(x - 2):",
          "answer": "x\u00b2 - x - 2",
          "feedback": "Excellent! -2x + x equals -x."
        },
        {
          "id": "q6",
          "prompt": "Next, multiply the result by (x + 4). Start with x\u00b2 times x:",
          "answer": "x\u00b3",
          "feedback": "Correct. x\u00b2 times x is x\u00b3."
        },
        {
          "id": "q7",
          "prompt": "Multiply x\u00b2 by 4:",
          "answer": "4x\u00b2",
          "feedback": "Good. x\u00b2 times 4 is 4x\u00b2."
        },
        {
          "id": "q8",
          "prompt": "Multiply -x by x:",
          "answer": "-x\u00b2",
          "feedback": "Correct. -x times x is -x\u00b2."
        },
        {
          "id": "q9",
          "prompt": "Multiply -x by 4:",
          "answer": "-4x",
          "feedback": "Right. -x times 4 is -4x."
        },
        {
          "id": "q10",
          "prompt": "Multiply -2 by x:",
          "answer": "-2x",
          "feedback": "Correct. -2 times x is -2x."
        },
        {
          "id": "q11",
          "prompt": "Multiply -2 by 4:",
          "answer": "-8",
          "feedback": "Correct. -2 times 4 is -8."
        },
        {
          "id": "q12",
          "prompt": "Write all terms together:",
          "answer": "x\u00b3 + 4x\u00b2 - x\u00b2 - 4x - 2x - 8",
          "feedback": "Nice. We will simplify next."
        },
        {
          "id": "q13",
          "prompt": "Simplify the x\u00b2 terms: 4x\u00b2 - x\u00b2",
          "answer": "3x\u00b2",
          "feedback": "Correct. 4x\u00b2 minus x\u00b2 equals 3x\u00b2."
        },
        {
          "id": "q14",
          "prompt": "Simplify the x terms: -4x - 2x",
          "answer": "-6x",
          "feedback": "Correct. -4x minus 2x is -6x."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 420 180' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='90' height='40' fill='#ddeeff' stroke='#336699'/><text x='65' y='45' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#223366'>(x + 1)</text><rect x='130' y='20' width='90' height='40' fill='#ddefdd' stroke='#339933'/><text x='175' y='45' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#224422'>(x - 2)</text><rect x='240' y='20' width='90' height='40' fill='#ffeedd' stroke='#cc6600'/><text x='285' y='45' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#994400'>(x + 4)</text><text x='365' y='40' font-family='sans-serif' font-size='16' fill='#000'>Expand first two, then third</text><line x1='110' y1='40' x2='130' y2='40' stroke='#000' stroke-width='2' marker-end='url(#arrow)'/><line x1='220' y1='40' x2='240' y2='40' stroke='#000' stroke-width='2' marker-end='url(#arrow)'/><defs><marker id='arrow' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#000'/></marker></defs></svg>"
  },
  "step5": {
    "title": "Practice: Combine and Simplify Terms",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">After multiplying terms in brackets, always combine like terms carefully to simplify your polynomial expression.</p>",
    "workedExample": {
      "title": "Worked Example: Simplify Expression",
      "problem": "Simplify the expression:<br><em>x\u00b2 + 5x + 3x + 4 - 1</em>",
      "questions": [
        {
          "id": "q1",
          "prompt": "Combine the x terms: 5x + 3x",
          "answer": "8x",
          "feedback": "Well done! 5x plus 3x equals 8x."
        },
        {
          "id": "q2",
          "prompt": "Combine the constants: 4 - 1",
          "answer": "3",
          "feedback": "Correct. 4 minus 1 equals 3."
        },
        {
          "id": "q3",
          "prompt": "Write the simplified expression:",
          "answer": "x\u00b2 + 8x + 3",
          "feedback": "Excellent! The simplified expression is x\u00b2 + 8x + 3."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Expand and simplify the expression (x + 2)(x - 1)(x + 5). Show all your steps clearly.</span>",
      "hint": "Remember to first expand two brackets, then multiply the result by the third bracket. Apply the distributive law carefully and combine like terms at the end.",
      "mustHaveKeywords": ["distributive law", "combine like terms", "expand", "simplify"],
      "optionalKeywords": ["quadratic", "cubic", "polynomial"],
      "modelAnswer": "<span>First, expand (x + 2)(x - 1) using distributive law:<br> x\u00b2 - x + 2x - 2 = x\u00b2 + x - 2.<br> Then multiply this result by (x + 5):<br> x\u00b2(x + 5) + x(x + 5) - 2(x + 5) = x\u00b3 + 5x\u00b2 + x\u00b2 + 5x - 2x - 10.<br> Combine like terms: x\u00b3 + 6x\u00b2 + 3x - 10.<br> The fully expanded and simplified expression is <strong>x\u00b3 + 6x\u00b2 + 3x - 10</strong>.</span>",
      "scaffoldPrompts": [
        "Step 1: Expand (x + 2)(x - 1)",
        "Step 2: Write down the simplified expression",
        "Step 3: Multiply the simplified result from Step 2 by (x + 5)",
        "Step 4: Multiply each term and write all terms down",
        "Step 5: Combine like terms",
        "Step 6: Write the fully simplified polynomial"
      ]
    }
  }
};