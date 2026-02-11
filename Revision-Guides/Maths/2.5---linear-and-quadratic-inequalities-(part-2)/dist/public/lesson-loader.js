window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.5 - Linear and quadratic inequalities (Part 2)",
  "strapline": "Learn how to solve quadratic inequalities by finding critical values, testing regions, and representing solutions using set notation and number lines.",
  "learningObjectives": [
    "Students should be able to solve quadratic inequalities by finding critical values and testing regions (Maths 2.5)",
    "Students should be able to represent solutions to quadratic inequalities using set notation and number line diagrams (Maths 2.5)"
  ],
  "step1": {
    "title": "Concept 1: Quadratic Inequality",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic inequality</strong> contains a squared term like <em>x<sup>2</sup></em>. Examples include <em>x<sup>2</sup> - 5x + 6 &gt; 0</em> or <em>2x<sup>2</sup> + 3x - 5 ≤ 0</em>. Unlike quadratic equations that give exact answers, quadratic inequalities have <em>ranges</em> of solutions where the inequality is true.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a quadratic equation like a bridge that crosses a river at specific points (the roots). A quadratic inequality asks: On which sides of the river (intervals) can you safely cross?</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Consider the inequality <em>x<sup>2</sup> - 5x + 6 &gt; 0</em>.</span>",
        "<span>We want to find where this expression is greater than zero.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Finding Critical Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Critical values are where the quadratic expression equals zero. Solve the related quadratic equation by setting it to zero: <em>x<sup>2</sup> - 5x + 6 = 0</em>. These values split the number line into regions to test.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the critical values as doorways. On each side of these doorways, the conditions inside the rooms (regions) could be different.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Factorise: <em>(x - 2)(x - 3) = 0</em>.</span>",
        "<span>Critical values are <em>x = 2</em> and <em>x = 3</em>.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Region Testing",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Test values from each region formed by the critical values to check where the inequality is true. Pick test points less than 2, between 2 and 3, and greater than 3.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like checking the temperature in different rooms to know if it is warm enough, test values tell us if the inequality is satisfied in each region.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Test <em>x = 1</em>: <em>1<sup>2</sup> - 5(1) + 6 = 1 - 5 + 6 = 2 &gt; 0</em>, true.</span>",
        "<span>Test <em>x = 2.5</em>: <em>(2.5)<sup>2</sup> - 5(2.5) + 6 = 6.25 - 12.5 + 6 = -0.25 &lt; 0</em>, false.</span>",
        "<span>Test <em>x = 4</em>: <em>4<sup>2</sup> - 5(4) + 6 = 16 - 20 + 6 = 2 &gt; 0</em>, true.</span>"
      ]
    }
  },
  "step4": {
    "title": "Representing Solutions on a Number Line",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Mark critical values on a number line using open or closed circles depending on inequality (strict or inclusive). Shade regions where the inequality is true.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the number line as a path where you paint the sections where the rule applies.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Critical points at 2 and 3 are marked with open circles since the inequality is strict ( &gt; 0 ).</span>",
        "<span>Shade the regions &lt; 2 and &gt; 3 where the inequality holds true.</span>"
      ]
    }
  },
  "step5": {
    "title": "Representing Solutions Using Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Express the solution as a union of intervals, e.g. <em>{x | x &lt; 2 or x &gt; 3}</em>, meaning all values less than 2 or greater than 3.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Set notation is a shorthand map telling you exactly which sections of the path are included.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Write the solution as: <em>x &lt; 2</em> or <em>x &gt; 3</em>.</span>",
        "<span>In interval notation: <em>(-∞, 2) ∪ (3, ∞)</em>.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the quadratic inequality <em>2x<sup>2</sup> - 7x + 3 ≤ 0</em> and represent the solution both on a number line and in set notation.</span>",
      "hint": "Remember to find critical values by solving the equation <em>2x<sup>2</sup> - 7x + 3 = 0</em>, test regions between those values, then write the solution clearly.",
      "mustHaveKeywords": ["critical values", "test regions", "set notation", "number line"],
      "optionalKeywords": ["factorisation", "union of intervals"],
      "modelAnswer": "<span>First, solve <em>2x<sup>2</sup> - 7x + 3 = 0</em>. Factorising gives: <em>(2x - 1)(x - 3) = 0</em>, so critical values are <em>x = 0.5</em> and <em>x = 3</em>. Test points in regions: for <em>x = 0</em>, expression is positive; for <em>x = 2</em>, expression is negative; for <em>x = 4</em>, expression is positive. Since inequality is ≤ 0, solution is where expression is negative or zero, so <em>0.5 ≤ x ≤ 3</em>. Represented on number line with filled circles at 0.5 and 3, shading in between. In set notation: <em>{x | 0.5 ≤ x ≤ 3}</em> or <em>[0.5, 3]</em>.</span>",
      "scaffoldPrompts": [
        "Start by rewriting the inequality as an equation to find critical values.",
        "Next, find test points in each interval created by the critical values.",
        "Determine which intervals satisfy the inequality.",
        "Draw the number line, marking critical points with appropriate circles.",
        "Write the solution in set notation using intervals."
      ]
    }
  }
};