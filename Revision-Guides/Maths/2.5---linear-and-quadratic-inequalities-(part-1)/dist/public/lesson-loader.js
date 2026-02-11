window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.5 - Linear and quadratic inequalities (Part 1)",
  "strapline": "Learn to solve linear inequalities algebraically and represent their solution sets on number lines.",
  "learningObjectives": [
    "Students should solve linear inequalities using algebraic methods (Maths 2.5)",
    "Students should represent solutions to linear inequalities on number lines (Maths 2.5)",
    "Students should interpret inequality notation and solution sets correctly (Maths 2.5)"
  ],
  "step1": {
    "title": "Concept: Understanding Linear Inequalities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>linear inequality</strong> compares two expressions using symbols like <em>&lt;</em>, <em>&gt;</em>, <em>≤</em> or <em>≥</em>, and the variable is to the power of one. For example, <span>3x + 5 &gt; 11</span> means '3 times a number plus 5 is greater than 11'.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a speed limit sign on a road: it says speed &lt; 60 mph, so you should drive slower than 60. This is an inequality telling you a range, not just one exact speed.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with the inequality: 2x + 3 &lt; 11</span>",
        "<span>Subtract 3 from both sides: 2x &lt; 8</span>",
        "<span>Divide both sides by 2: x &lt; 4</span>",
        "<span>Solution set includes all values less than 4.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is a linear inequality?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>3x - 2 &ge; 7</span>",
            "isCorrect": true,
            "explanation": "<span>This is linear: variable x is to the power of 1 and inequality symbol is used.</span>"
          },
          {
            "id": "b",
            "label": "<span>x<sup>2</sup> + 4x &lt; 5</span>",
            "isCorrect": false,
            "explanation": "<span>This is quadratic, not linear, because x is squared.</span>"
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> shows all possible values that satisfy an inequality.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "solutionSet",
                "label": "solution set",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "equation",
                "label": "equation",
                "isCorrect": false,
                "feedback": "Try again. The solution set is the correct term here, not equation."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Representing Inequalities on Number Lines",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">We use number lines to visually represent the <strong>solution set</strong>. Use a <em>closed circle</em> (●) for ≤ or ≥ since the endpoint is included, and an <em>open circle</em> (○) for &lt; or &gt; because the endpoint is not included. Shade to the left or right depending on the inequality direction.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine shading a map to show where you are allowed to stand. A closed circle is like standing exactly on a spot allowed, an open circle means that spot is off-limits but nearby spots are allowed.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For x ≤ 3, draw a closed circle at 3 and shade all numbers to the left.</span>",
        "<span>For x &gt; 5, draw an open circle at 5 and shade all numbers to the right.</span>"
      ]
    }
  },
  "step5": {
    "title": "Practice Problem: Solve and Represent",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Solve the inequality and then sketch the solution on a number line: 4x - 7 &ge; 9.</p>",
    "workedExample": {
      "title": "Step-by-Step Solution",
      "bullets": [
        "<span>Start with 4x - 7 &ge; 9</span>",
        "<span>Add 7 to both sides: 4x &ge; 16</span>",
        "<span>Divide by 4: x &ge; 4</span>",
        "<span>On the number line, draw a closed circle at 4 and shade to the right.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the inequality 5x + 2 &lt; 17, then represent the solution set correctly on a number line. Explain your steps and notation used.</span>",
      "hint": "Remember to isolate x first. Use open or closed circles based on inequality symbols.",
      "mustHaveKeywords": ["isolate", "solution set", "number line", "open circle"],
      "optionalKeywords": ["shade", "inequality notation"],
      "modelAnswer": "<span>First, subtract 2 from both sides: 5x &lt; 15. Then divide both sides by 5: x &lt; 3. The solution set is all values less than 3. On the number line, draw an open circle at 3 (since it’s less than, not less than or equal to) and shade all points to the left. The notation x &lt; 3 correctly shows the range.</span>",
      "scaffoldPrompts": ["Subtract 2 from both sides", "Divide both sides by 5", "Choose the correct circle type for the inequality", "Shade in the correct region on the number line"]
    }
  }
};