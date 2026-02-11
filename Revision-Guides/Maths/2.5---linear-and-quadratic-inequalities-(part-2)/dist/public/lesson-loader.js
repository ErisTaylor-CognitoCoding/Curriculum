window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.5 - Linear and quadratic inequalities (Part 2)",
  "strapline": "Learn how to solve quadratic inequalities by finding critical values and testing regions, and represent solutions using set notation and number line diagrams.",
  "learningObjectives": [
    "Students should be able to solve quadratic inequalities by finding critical values and testing regions (Maths 2.5)",
    "Students should be able to represent solutions to quadratic inequalities using set notation and number line diagrams (Maths 2.5)"
  ],
  "step1": {
    "title": "Concept: Quadratic Inequalities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>quadratic inequality</strong> is an inequality that contains a square term (for example, <em>x<sup>2</sup></em>) such as <em>x<sup>2</sup> - 5x + 6 &gt; 0</em> or <em>2x<sup>2</sup> + 3x - 5 &le; 0</em>. Unlike quadratic equations which have exact solutions, quadratic inequalities have a <em>range of values</em> for the variable that satisfy the inequality.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a quadratic inequality like being told to find all positions on a number line where a ball is above a certain height, instead of exactly at one height. The ball might be above that height in a whole region, not just one point.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Consider the inequality <em>x<sup>2</sup> - 5x + 6 &gt; 0</em>.</span>",
        "<span>This means finding all <em>x</em> values for which the expression is positive.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Critical Values",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>critical values</strong> are the points where the quadratic expression equals zero. You find these by solving the quadratic equation formed by replacing the inequality sign with an equals sign. These points split the number line into regions to test for the inequality.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the critical values as fences on a field that separate different zones. We want to check which zones satisfy the inequality.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Solve <em>x<sup>2</sup> - 5x + 6 = 0</em>.</span>",
        "<span>Factorize: <em>(x - 2)(x - 3) = 0</em>.</span>",
        "<span>Critical values: <em>x = 2</em> and <em>x = 3</em>.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Region Testing",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Region testing involves picking a test value from each region between and beyond critical values, then substituting into the quadratic expression to check if the inequality holds true in that region.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of this as checking the temperature in each room of a house to see if it’s warm enough — you only check one spot per room.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Choose test values: less than 2, between 2 and 3, greater than 3.</span>",
        "<span>For <em>x = 1</em> (less than 2): <em>1<sup>2</sup> - 5·1 + 6 = 2 &gt; 0</em> (true).</span>",
        "<span>For <em>x = 2.5</em>: <em>(2.5)<sup>2</sup> - 5·2.5 + 6 = -0.25 &gt; 0</em> (false).</span>",
        "<span>For <em>x = 4</em>: <em>4<sup>2</sup> - 5·4 + 6 = 2 &gt; 0</em> (true).</span>",
        "<span>Therefore, the solution regions are <em>x &lt; 2</em> or <em>x &gt; 3</em>.</span>"
      ]
    }
  },
  "step4": {
    "title": "Representing Solutions Using Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Solutions to quadratic inequalities are often expressed in <em>set notation</em>. Use interval notation to indicate ranges like <em>(-∞, 2)</em> or <em>(3, ∞)</em> for regions where the inequality holds.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">This is like marking sections of a street where parking is allowed with signs indicating the start and end of those sections.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>From previous step, solution regions are <em>x &lt; 2</em> or <em>x &gt; 3</em>.</span>",
        "<span>Write as <em>{x | x &lt; 2} ∪ {x | x &gt; 3}</em> or as intervals <em>(-∞, 2) ∪ (3, ∞)</em>.</span>"
      ]
    }
  },
  "step5": {
    "title": "Representing Solutions on Number Line Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Number line diagrams visually show the solution by shading regions where the inequality holds and marking critical values with open or closed dots depending on inclusion.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like drawing lines on a map to show which roads are open or closed.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw a number line.</span>",
        "<span>Mark critical values 2 and 3 as open circles because the inequality is &gt;, not &ge;.</span>",
        "<span>Shade regions to the left of 2 and to the right of 3 indicating solution areas.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Solve the quadratic inequality <em>3x<sup>2</sup> - 7x - 6 &lt; 0</em> and represent your solution in set notation and on a number line diagram.</span>",
      "hint": "Remember to find critical values by solving the quadratic equation <em>3x<sup>2</sup> - 7x - 6 = 0</em>. Then test regions to determine where the inequality holds.",
      "mustHaveKeywords": ["critical values", "test regions", "set notation", "number line diagram"],
      "optionalKeywords": ["factoring", "interval notation"],
      "modelAnswer": "<span>First, solve <em>3x<sup>2</sup> - 7x - 6 = 0</em> by factorization: <em>(3x + 2)(x - 3) = 0</em>, so critical values are <em>x = -2/3</em> and <em>x = 3</em>.<br>Next, select test points in the regions <em>x &lt; -2/3</em>, <em>-2/3 &lt; x &lt; 3</em>, and <em>x &gt; 3</em>.<br>Calculate the expression at each test point to check where the inequality is true.<br>Conclude the solution set is <em>(-2/3, 3)</em>.<br>Represent this on a number line by drawing open circles at -2/3 and 3 and shading the region between.</span>",
      "scaffoldPrompts": [
        "Step 1: Solve <em>3x<sup>2</sup> - 7x - 6 = 0</em> to find critical values.",
        "Step 2: Choose test values in each region divided by critical values.",
        "Step 3: Substitute test values into the inequality to check if true.",
        "Step 4: Write the solution set using set notation.",
        "Step 5: Draw a number line showing solution regions."
      ]
    }
  }
};