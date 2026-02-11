window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.5 - Linear and quadratic inequalities (Part 1)",
  "strapline": "Introduction to solving and representing linear inequalities using algebraic methods and number lines.",
  "learningObjectives": [
    "Students should solve linear inequalities using algebraic methods (Maths 2.5)",
    "Students should represent solutions to linear inequalities on number lines (Maths 2.5)",
    "Students should interpret inequality notation and solution sets correctly (Maths 2.5)"
  ],
  "step1": {
    "title": "Concept: Understanding Linear Inequalities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>linear inequality</strong> compares two expressions using inequality signs (<em>&lt;</em>, <em>&gt;</em>, <em>≤</em>, <em>≥</em>) where the variable has an exponent of 1. For example, 3x + 5 &gt; 11 means values of x that make 3x + 5 greater than 11.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a speed limit sign: it says speed must be &lt; 60 mph. The inequality shows which speeds are allowed (solutions) and which are not.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with 3x + 5 &gt; 11</span>",
        "<span>Subtract 5 from both sides: 3x &gt; 6</span>",
        "<span>Divide both sides by 3: x &gt; 2</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Solution Set of Inequalities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>solution set</strong> of an inequality is all the possible values of the variable that make the inequality true. Unlike equations, inequalities usually have infinitely many solutions within a range.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you must be older than 18 to enter a club (x &gt; 18), then everyone older than 18 is allowed inside - that's your solution set.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>x &gt; 2 means any value greater than 2, such as 2.1, 3, 10, or 100</span>",
        "<span>All these numbers together form the solution set.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Representing Solutions on Number Lines",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>number line representation</strong> visualises solutions. Use an open circle (○) if the inequality is strict (&lt; or &gt;) and a closed circle (●) if it is inclusive (&le; or &ge;). Shade the line to the left or right to show all solutions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a spotlight shining on all the numbers that solve the inequality on a straight line.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For x &gt; 2 draw an open circle at 2</span>",
        "<span>Shade all values to the right (greater than 2)</span>"
      ]
    }
  },
  "step4": {
    "title": "Practice: Solve and Represent Inequality",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Solve the inequality 2x - 7 &le; 15 and represent the solution on a number line.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Add 7 to both sides: 2x &le; 22</span>",
        "<span>Divide both sides by 2: x &le; 11</span>",
        "<span>Draw a closed circle at 11 and shade to the left</span>"
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which graph correctly represents the inequality x &ge; 4?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Closed circle at 4 with shading to the right</span>",
            "isCorrect": true,
            "explanation": "Correct. x ≥ 4 includes 4 and all numbers greater than 4."
          },
          {
            "id": "b",
            "label": "<span>Open circle at 4 with shading to the right</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The circle should be closed because inequality includes 4."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the set of all values that make the inequality true.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "solution set",
                "label": "solution set",
                "isCorrect": true,
                "feedback": "Correct! The solution set contains all valid values."
              },
              {
                "value": "equation",
                "label": "equation",
                "isCorrect": false,
                "feedback": "Try again. An equation is different from a solution set."
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the inequality 5x + 3 &gt; 18 and represent your solution on a number line. Explain what each part of the number line shows.</span>",
      "hint": "Remember to isolate x using inverse operations, use an open or closed circle correctly, and shade the correct side.",
      "mustHaveKeywords": ["solve", "number line", "inequality", "open circle", "shade right"],
      "optionalKeywords": ["inverse operations", "solution set"],
      "modelAnswer": "<span>First, subtract 3 from both sides giving 5x > 15. Then divide both sides by 5 to get x &gt; 3. On the number line, draw an open circle at 3 because the inequality is strict (&gt;) and shade to the right representing all values greater than 3. This shows every value that satisfies the inequality.</span>",
      "scaffoldPrompts": ["Start by moving constants to one side.", "Divide to isolate x.", "Draw on the number line using circles and shading."]
    }
  }
};