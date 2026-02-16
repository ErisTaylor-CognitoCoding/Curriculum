window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.5 - Linear and quadratic inequalities (Part 1)",
  "strapline": "Learn to solve linear inequalities algebraically and represent their solutions on number lines.",
  "learningObjectives": [
    "Students should solve linear inequalities using algebraic methods (Maths 2.5)",
    "Students should represent solutions to linear inequalities on number lines (Maths 2.5)",
    "Students should interpret inequality notation and solution sets correctly (Maths 2.5)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='150' text-anchor='middle' font-family='sans-serif'>Concept Diagram</text></svg>",
  "step1": {
    "title": "Concept 1: Understanding Linear Inequalities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>linear inequality</strong> compares two expressions using symbols like &lt;, &gt;, ≤, or ≥, where the variable’s highest power is 1. For example, <em>3x + 5 &gt; 11</em> means values of <em>x</em> making the left side greater than the right side.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it like a weighing scale where one side must be heavier (greater) or at least as heavy (greater or equal).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Solving a Linear Inequality",
      "problem": "Solve the inequality: <strong>2x + 3 &lt; 7</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Start by subtracting 3 from both sides. What is the new inequality?",
          "answer": "2x < 4",
          "feedback": "Correct! Subtracting 3 keeps the inequality valid."
        },
        {
          "id": "q2",
          "prompt": "Now divide both sides by 2. What is the inequality for x?",
          "answer": "x < 2",
          "feedback": "Well done! Dividing by a positive number keeps the inequality direction."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Solution Set of an Inequality",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>solution set</strong> of an inequality shows all values of the variable that make the inequality true. Unlike equations having one solution, inequalities often have infinitely many solutions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine all numbers bigger than 2. That’s a whole range, not just a single point.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify the Solution Set",
      "problem": "For <strong>x &lt; 2</strong>, which of the following numbers satisfy the inequality? Choose all that apply.",
      "questions": [
        {
          "id": "q3",
          "prompt": "Is x = 1 a solution?",
          "answer": "yes",
          "feedback": "Correct! 1 is less than 2."
        },
        {
          "id": "q4",
          "prompt": "Is x = 2 a solution?",
          "answer": "no",
          "feedback": "Right, because the inequality is strictly less than 2."
        },
        {
          "id": "q5",
          "prompt": "Is x = 3 a solution?",
          "answer": "no",
          "feedback": "Correct, 3 is greater than 2."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Number Line Representation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">We can show all solutions on a <strong>number line</strong>. Use an <strong>open circle</strong> (○) at the boundary if the inequality doesn’t include equality (&lt; or &gt;). Use a <strong>closed circle</strong> (●) if it does include equality (≤ or ≥). Then shade in the numbers representing the solutions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the open circle as a door that is closed, so you can’t stand exactly on the boundary number, but the shaded region is where you are allowed.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Draw the Number Line",
      "problem": "Represent <strong>x ≥ 3</strong> on a number line.",
      "questions": [
        {
          "id": "q6",
          "prompt": "Should the circle at 3 be open or closed?",
          "answer": "closed",
          "feedback": "Correct! 'Greater than or equal to' means include 3."
        },
        {
          "id": "q7",
          "prompt": "In which direction do you shade?",
          "answer": "right",
          "feedback": "Right! Values greater than or equal to 3 go to the right on the number line."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Practice: Solve and Represent Inequalities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Try solving the inequality below and then represent the solution on a number line.</p>",
    "workedExample": {
      "title": "Practice Problem",
      "problem": "Solve and represent <strong>4x - 5 &gt; 7</strong>.",
      "questions": [
        {
          "id": "q8",
          "prompt": "Add 5 to both sides. What is the new inequality?",
          "answer": "4x > 12",
          "feedback": "Great! Adding 5 to both sides keeps the inequality correct."
        },
        {
          "id": "q9",
          "prompt": "Divide both sides by 4. What is the inequality for x?",
          "answer": "x > 3",
          "feedback": "Correct! Division by positive number does not change inequality direction."
        },
        {
          "id": "q10",
          "prompt": "Should the circle at 3 be open or closed on the number line?",
          "answer": "open",
          "feedback": "Right, 'greater than' means exclude 3, so open circle."
        },
        {
          "id": "q11",
          "prompt": "Which direction is the shading?",
          "answer": "right",
          "feedback": "Yes! Shade to the right for values greater than 3."
        }
      ]
    }
  },
  "step5": {
    "title": "Interpreting Inequality Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">It is important to understand the meaning of notation. For example, <em>x ≤ 5</em> means <em>x</em> can be any number less than or equal to 5, including 5. Using the correct notation ensures clear communication of solutions.</p>",
    "workedExample": {
      "title": "Identify Notation Meaning",
      "problem": "What does <strong>x &gt;= -1</strong> represent?",
      "questions": [
        {
          "id": "q12",
          "prompt": "Is -1 included in the solution set?",
          "answer": "yes",
          "feedback": "Correct! The '≥' symbol means include -1."
        },
        {
          "id": "q13",
          "prompt": "Are values smaller than -1 included?",
          "answer": "no",
          "feedback": "Right! Only values greater than or equal to -1 are part of the solution."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the inequality <strong>3x - 4 ≤ 11</strong> and represent the solution set on a number line. Explain your steps clearly, interpreting the solution using inequality notation.</span>",
      "hint": "Remember to isolate <em>x</em> carefully and check the inequality direction when dividing. Use the correct circle symbol for the number line.",
      "mustHaveKeywords": ["subtract", "divide", "inequality direction", "solution set", "number line", "open circle", "closed circle"],
      "optionalKeywords": ["shade", "boundary value"],
      "modelAnswer": "<span>First, add 4 to both sides to get 3x ≤ 15. Then divide both sides by 3 (a positive number), giving x ≤ 5. For the number line, draw a closed circle at 5 because the inequality includes ‘equal to’, and shade all values to the left, representing all numbers less than or equal to 5.</span>",
      "scaffoldPrompts": ["Start by isolating the term containing x.", "Remember how division affects inequality direction.", "Decide which circle symbol to use at the boundary.", "Describe the direction to shade on the number line."]
    }
  }
};