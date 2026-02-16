window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.5 - Linear and quadratic inequalities (Part 2)",
  "strapline": "Learn how to solve quadratic inequalities by finding critical values, testing regions, and representing solutions using set notation and number lines.",
  "learningObjectives": [
    "Students should be able to solve quadratic inequalities by finding critical values and testing regions (Maths 2.5)",
    "Students should be able to represent solutions to quadratic inequalities using set notation and number line diagrams (Maths 2.5)"
  ],
  "keyFormulas": [
    "Formula 1: Solve quadratic equation ax² + bx + c = 0 to find critical values",
    "Formula 2: Inequality test: Substitute test points into ax² + bx + c to check signs",
    "Reminder: Inequalities include >, <, ≥, and ≤; be careful with strict vs inclusive inequalities"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='220' width='300' height='5' fill='#333'/><circle cx='120' cy='222' r='7' fill='white' stroke='#333' stroke-width='2'/><circle cx='280' cy='222' r='7' fill='white' stroke='#333' stroke-width='2'/><line x1='120' y1='220' x2='120' y2='160' stroke='#888' stroke-dasharray='4 2'/><line x1='280' y1='220' x2='280' y2='160' stroke='#888' stroke-dasharray='4 2'/><text x='120' y='245' font-family='sans-serif' font-size='14' text-anchor='middle'>x = 2</text><text x='280' y='245' font-family='sans-serif' font-size='14' text-anchor='middle'>x = 5</text><text x='50' y='210' font-family='sans-serif' font-size='12'>Region 1</text><text x='200' y='210' font-family='sans-serif' font-size='12' text-anchor='middle'>Region 2</text><text x='350' y='210' font-family='sans-serif' font-size='12' text-anchor='end'>Region 3</text><path d='M 50 180 Q 120 120 280 140 Q 350 160 350 140' fill='none' stroke='#007acc' stroke-width='2'/><text x='200' y='100' font-family='sans-serif' font-size='16' fill='#007acc' text-anchor='middle'>Quadratic curve crossing at critical values</text></svg>",
  "step1": {
    "title": "Concept: What is a Quadratic Inequality?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic inequality</strong> contains a squared term (like <em>x²</em>) and looks like expressions such as <em>x² - 5x + 6 &gt; 0</em> or <em>2x² + 3x - 5 ≤ 0</em>. Unlike equations with exact answers, inequalities have ranges of values that satisfy them.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a quadratic inequality as a treasure map where you need to find areas (ranges) instead of pinpointing a single spot (exact solution).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying a Quadratic Inequality",
      "problem": "Is <strong>x² - 4x + 3 &lt; 0</strong> a quadratic inequality?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does this inequality contain a squared term?",
          "answer": "yes",
          "feedback": "Correct. The term x² is squared."
        },
        {
          "id": "q2",
          "prompt": "Is it an inequality (less than, greater than, ≤ or ≥) or an equation (=)?",
          "answer": "less than",
          "feedback": "Correct. This is a less than inequality (< 0)."
        },
        {
          "id": "q3",
          "prompt": "So, is this a quadratic inequality?",
          "answer": "yes",
          "feedback": "Correct! It is a quadratic inequality."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Finding Critical Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Critical values are the points where the quadratic expression equals zero, found by solving the related quadratic equation. These points split the number line into regions.</p>",
    "workedExample": {
      "title": "Worked Example: Finding critical values of x² - 5x + 6 &gt; 0",
      "problem": "Solve <strong>x² - 5x + 6 = 0</strong> to find critical values.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What two numbers multiply to 6 and add up to -5?",
          "answer": "-2 and -3",
          "feedback": "Good try, but check the signs carefully."
        },
        {
          "id": "q2",
          "prompt": "Try again: two numbers that multiply to +6 and add to -5?",
          "answer": "-2 and -3",
          "feedback": "Correct! -2 × -3 = 6 and -2 + -3 = -5."
        },
        {
          "id": "q3",
          "prompt": "Write the factorised form of the quadratic.",
          "answer": "(x - 2)(x - 3) = 0",
          "feedback": "Correct! This shows the critical values."
        },
        {
          "id": "q4",
          "prompt": "What are the critical values of x?",
          "answer": "2 and 3",
          "feedback": "Correct! These are where the quadratic equals zero."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Testing Regions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The critical values divide the number line into regions. We select test values from each region to check if the inequality holds true there.</p>",
    "workedExample": {
      "title": "Worked Example: Testing regions for x² - 5x + 6 &gt; 0",
      "problem": "With critical values at 2 and 3, test values in these regions: x &lt; 2, 2 &lt; x &lt; 3, x &gt; 3.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Test x = 1 (region x < 2). Calculate x² - 5x + 6.",
          "answer": "2",
          "feedback": "Correct! 1² - 5(1) + 6 = 2, which is > 0."
        },
        {
          "id": "q2",
          "prompt": "Does 2 satisfy the inequality x² - 5x + 6 &gt; 0 at x=1? Answer yes or no.",
          "answer": "yes",
          "feedback": "Correct. 2 > 0 means the inequality holds."
        },
        {
          "id": "q3",
          "prompt": "Test x = 2.5 (region 2 < x < 3). Calculate x² - 5x + 6.",
          "answer": " -0.25",
          "feedback": "Correct! 2.5² - 5(2.5) + 6 = -0.25, which is < 0."
        },
        {
          "id": "q4",
          "prompt": "Does -0.25 satisfy the inequality x² - 5x + 6 &gt; 0 at x=2.5? Answer yes or no.",
          "answer": "no",
          "feedback": "Correct. -0.25 is not greater than 0, so x=2.5 doesn't satisfy the inequality."
        },
        {
          "id": "q5",
          "prompt": "Test x = 4 (region x > 3). Calculate x² - 5x + 6.",
          "answer": "2",
          "feedback": "Correct! 16 - 20 + 6 = 2, which is > 0."
        },
        {
          "id": "q6",
          "prompt": "Does 2 satisfy the inequality x² - 5x + 6 &gt; 0 at x=4? Answer yes or no.",
          "answer": "yes",
          "feedback": "Correct. 2 > 0 means inequality holds for x=4."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Representing Solutions on a Number Line",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Once we know which regions satisfy the inequality, we shade those parts of the number line and mark critical values as included (solid dots) or excluded (open dots) depending on the inequality sign.</p>",
    "workedExample": {
      "title": "Worked Example: Draw solutions of x² - 5x + 6 &gt; 0 on a number line",
      "problem": "Represent the solution where x &lt; 2 or x &gt; 3.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Should the points 2 and 3 be included or excluded? (Use included if inequality has ≤ or ≥, excluded if > or <)",
          "answer": "excluded",
          "feedback": "Correct, since the inequality is strict (> 0), points 2 and 3 are excluded."
        },
        {
          "id": "q2",
          "prompt": "Which side(s) of the number line do we shade for the solution?",
          "answer": "left of 2 and right of 3",
          "feedback": "Correct! These are the solution regions."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Representing Solutions in Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">We write the solution using set notation by combining the intervals from the number line solution, using parentheses for excluded points and square brackets for included points.</p>",
    "workedExample": {
      "title": "Worked Example: Write solution for x² - 5x + 6 &gt; 0 in set notation",
      "problem": "Write the solution as a union of intervals.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the interval for values less than 2 (excluded).",
          "answer": "(-∞, 2)",
          "feedback": "Correct! Parenthesis means 2 is excluded."
        },
        {
          "id": "q2",
          "prompt": "Write the interval for values greater than 3 (excluded).",
          "answer": "(3, ∞)",
          "feedback": "Correct!"
        },
        {
          "id": "q3",
          "prompt": "Combine the intervals into one solution using the union symbol.",
          "answer": "(-∞, 2) ∪ (3, ∞)",
          "feedback": "Correct! This represents all values satisfying the inequality."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the inequality <strong>2x² - 7x - 4 ≤ 0</strong>, showing all your working and representing your solution on a number line and in set notation.</span>",
      "hint": "Remember to find critical values by solving the related equation, test each region, and decide whether to include the critical points.",
      "mustHaveKeywords": ["critical values", "region testing", "set notation", "number line"],
      "optionalKeywords": ["factorisation", "inequality sign", "test points"],
      "modelAnswer": "<span>First, solve 2x² - 7x - 4 = 0 by factorising or formula.<br>Find critical values x = -0.5 and x = 4.<br>Test values in intervals (-∞, -0.5), (-0.5, 4), (4, ∞).<br>Determine where inequality is ≤ 0.<br>Include points -0.5 and 4 because of ≤.<br>Solution is [-0.5, 4] and represented by a solid line between these points on the number line.</span>",
      "scaffoldPrompts": ["Start by solving the quadratic equation", "Then find intervals from critical values", "Test a point from each interval in the inequality", "Write the final solution in set notation and draw the number line"]
    }
  }
};