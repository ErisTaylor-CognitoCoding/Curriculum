window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.5 - Linear and quadratic inequalities",
  "strapline": "Understanding how to solve and represent linear and quadratic inequalities in one or two variables.",
  "learningObjectives": [
    "Students should be able to solve linear inequalities in one variable and represent the solution set on a number line (Maths 2.5)",
    "Students should be able to solve quadratic inequalities and express solutions using correct inequality notation (Maths 2.5)",
    "Students should be able to represent regions satisfied by linear inequalities in two variables graphically (Maths 2.5)"
  ],
  "keyFormulas": [
    "Concept 1: Linear inequality in one variable - An inequality of the form ax + b > c, ax + b < c, ax + b ≥ c, or ax + b ≤ c",
    "Concept 2: Quadratic inequality - Involving x² term; solved by finding roots of related quadratic equation and testing intervals",
    "Concept 3: Solution set representation - Use of number lines for one variable and shaded regions on coordinate axes for two variables"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f8f8f8' stroke='#333'/><text x='200' y='30' text-anchor='middle' font-family='sans-serif' font-weight='bold'>Number Line for Linear Inequality</text><line x1='60' y1='150' x2='340' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='140' x2='200' y2='160' stroke='#000' stroke-width='2'/><circle cx='200' cy='150' r='8' fill='none' stroke='#000' stroke-width='2'/><text x='200' y='175' text-anchor='middle' font-family='sans-serif'>x &lt; 4</text><line x1='70' y1='150' x2='190' y2='150' stroke='#8bd34b' stroke-width='6' stroke-linecap='round'/></svg>",
  "step1": {
    "title": "Concept 1: Understanding Linear Inequalities in One Variable",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A linear inequality in one variable looks like <em>ax + b &gt; c</em> or <em>ax + b ≤ c</em>. Instead of a single solution like an equation, the answers form a range of values. For example, if <em>x + 3 &lt; 7</em>, then <em>x &lt; 4</em>, so any number less than 4 satisfies this.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of inequality solutions like a speed limit sign on a road. If the sign says 'Speed &lt; 60 mph', then any speed under 60 is allowed, not just one exact number.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Solving a Linear Inequality",
      "problem": "Solve the inequality <strong>2x + 5 &gt; 11</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Subtract 5 from both sides. What is the new inequality?",
          "answer": "2x > 6",
          "feedback": "Correct. Subtracting 5 from both sides maintains the inequality."
        },
        {
          "id": "q2",
          "prompt": "Divide both sides by 2 (positive number). What do you get?",
          "answer": "x > 3",
          "feedback": "Correct! Dividing by a positive number does not flip the inequality."
        },
        {
          "id": "q3",
          "prompt": "How would you represent this solution on a number line? Describe or sketch.",
          "answer": "A number line with an open circle at 3 and a shaded line going right (greater than 3)",
          "feedback": "Exactly! Open circle because it's strictly greater than 3, shaded to the right."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Solving Quadratic Inequalities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Quadratic inequalities involve squares like <em>x² + bx + c &gt; 0</em>. We solve by first finding the roots of the related quadratic equation <em>x² + bx + c = 0</em>, then testing intervals between roots to see where the inequality holds.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a roller coaster track where the height corresponds to the quadratic value. The inequality tells you where the track is above ground (&gt; 0) or below ground (&lt; 0).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Solve the quadratic inequality <strong>x² - 4x - 5 &lt; 0</strong>",
      "problem": "Find values of x where the expression is less than zero.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Find the roots by solving <em>x² - 4x - 5 = 0</em>. What are the roots?",
          "answer": "5 and -1",
          "feedback": "Correct. (x - 5)(x + 1) = 0 so roots are x = 5 and x = -1."
        },
        {
          "id": "q2",
          "prompt": "Mark these roots on a number line dividing it into 3 intervals: (-∞, -1), (-1, 5), (5, ∞).",
          "answer": "Correct. Three intervals divided by -1 and 5.",
          "feedback": "Great! These intervals will be tested next."
        },
        {
          "id": "q3",
          "prompt": "Test a value in each interval in the inequality <em>x² - 4x -5 &lt; 0</em>. For example, x = 0 for (-1, 5). Does it satisfy the inequality?",
          "answer": "Yes, 0² - 0 - 5 = -5 &lt; 0",
          "feedback": "Correct, so the inequality holds between -1 and 5."
        },
        {
          "id": "q4",
          "prompt": "Based on testing, what is the solution set?",
          "answer": "x ∈ (-1, 5)",
          "feedback": "Exactly, the inequality is true only for x values between -1 and 5."
        }
      ]
    }
  },
  "step3": {
    "title": "Representing Solution Sets on Number Lines",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For one-variable inequalities, the solution set is shown on a number line. Use an open circle for &lt; or &gt; and a closed circle for ≤ or ≥. Shade the part of the line representing all solutions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the open circle like a door slightly open (no entry) and the closed circle like a door fully closed (entry allowed).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Represent <strong>x ≥ -2</strong> on a number line",
      "problem": "Show the solution set graphically.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Should the circle at -2 be open or closed?",
          "answer": "Closed",
          "feedback": "Correct, because x can equal -2 (≥ symbol)."
        },
        {
          "id": "q2",
          "prompt": "Which direction do we shade: left or right of -2?",
          "answer": "Right",
          "feedback": "Correct, because x is greater than or equal to -2."
        }
      ]
    }
  },
  "step4": {
    "title": "Graphical Representation of Linear Inequalities in Two Variables",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For inequalities like <em>y &lt; 2x + 3</em>, we represent the boundary line <em>y = 2x + 3</em> on a coordinate plane. Then shade the region satisfying the inequality. Use a solid line for ≤ or ≥, and dashed line for &lt; or &gt;.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the line as a fence defining a yard. The shaded region is the area where you are allowed to play.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Graph <strong>y ≤ x + 1</strong>",
      "problem": "Draw the boundary and shade the solution region.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the boundary line solid or dashed?",
          "answer": "Solid",
          "feedback": "Correct, because the inequality includes ≤."
        },
        {
          "id": "q2",
          "prompt": "Choose a test point not on the line, e.g., (0,0). Does it satisfy y ≤ x + 1?",
          "answer": "Yes",
          "feedback": "0 ≤ 0 + 1 is true, so shade towards (0,0)."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='250' x2='350' y2='50' stroke='#0000cc' stroke-width='2'/><rect x='50' y='50' width='300' height='200' fill='#d0e8f2' opacity='0.4'/><line x1='200' y1='50' x2='200' y2='250' stroke='#ccc'/><line x1='50' y1='150' x2='350' y2='150' stroke='#ccc'/><text x='355' y='55' font-family='sans-serif' font-size='14' fill='#0000cc'>&lt;= line: y = x + 1</text></svg>"
    }
  },
  "step5": {
    "title": "Interactive Practice: Solve and Represent",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's solve and represent another linear inequality together.</p>",
    "workedExample": {
      "title": "Solve the inequality <strong>3x - 4 &lt; 2</strong> and represent solution on a number line.",
      "problem": "Step-by-step solution:",
      "questions": [
        {
          "id": "q1",
          "prompt": "Add 4 to both sides. What is the new inequality?",
          "answer": "3x < 6",
          "feedback": "Correct. Adding 4 kept the inequality direction the same."
        },
        {
          "id": "q2",
          "prompt": "Divide both sides by 3. What is the inequality now?",
          "answer": "x < 2",
          "feedback": "Correct. Dividing by positive number preserves inequality."
        },
        {
          "id": "q3",
          "prompt": "How do you represent x < 2 on a number line?",
          "answer": "Open circle at 2 and shading to the left",
          "feedback": "Excellent! Open circle because x is strictly less than 2."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given the quadratic inequality <strong>x² - 6x + 8 ≥ 0</strong>, solve for x and represent the solution set on a number line. Then, graph the linear inequality <em>y &lt; 3x - 2</em> and indicate the shaded region clearly.</span>",
      "hint": "Remember to find roots of the quadratic and test intervals. For the linear inequality, determine the boundary line and check which side to shade using a test point.",
      "mustHaveKeywords": ["roots", "interval testing", "number line", "boundary line", "shaded region"],
      "optionalKeywords": ["inequality notation", "solid line", "test point"],
      "modelAnswer": "<span>First, solve <em>x² - 6x + 8 = 0</em> => (x - 4)(x - 2) = 0 so roots are 2 and 4. Test intervals (-∞,2), (2,4), and (4,∞) to check where inequality holds ≥ 0. Values outside [2,4] satisfy the inequality, so solution is <em>x ≤ 2</em> or <em>x ≥ 4</em>. Represent this on a number line with closed circles at 2 and 4, shading left of 2 and right of 4. For <em>y &lt; 3x - 2</em>, draw the dashed line <em>y = 3x - 2</em>. Test (0,0): 0 &lt; -2 is false, so shade the opposite side of the line.</span>",
      "scaffoldPrompts": ["Find roots of the quadratic equation.", "Test values in each interval between roots.", "Write the solution with correct inequality notation.", "Draw and label the boundary line for the linear inequality.", "Use a test point to decide where to shade."]
    }
  }
};