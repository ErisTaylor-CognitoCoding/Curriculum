window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.2 - Venn diagrams (probability notation) (Part 3)",
  "strapline": "Learn how to interpret and construct Venn diagrams for two or more events and use formal probability notation to calculate probabilities including union, intersection, and complements.",
  "learningObjectives": [
    "Students should interpret and construct Venn diagrams with two or more events, using them to calculate probabilities by identifying regions that represent different combinations of events (Maths 5.2)",
    "Students should apply formal probability notation including P(A), P(B), P(A \u222a B) for union, and P(A \u2229 B) for intersection when working with Venn diagrams (Maths 5.2)",
    "Students should work with complement notation P(A') and use Venn diagrams to solve problems involving mutually exclusive and non-mutually exclusive events (Maths 5.2)"
  ],
  "keyFormulas": [
    "P(A \u222a B) = P(A) + P(B) - P(A \u2229 B)",
    "P(A') = 1 - P(A)",
    "For mutually exclusive events: P(A \u2229 B) = 0"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='340' height='240' fill='#f9f9f9' stroke='#333'/><circle cx='150' cy='150' r='90' fill='#a2cffe88' stroke='#2166b0' stroke-width='3'/><text x='150' y='60' font-family='sans-serif' font-weight='bold' font-size='20' text-anchor='middle'>A</text><circle cx='250' cy='150' r='90' fill='#efa3a3a6' stroke='#b02121' stroke-width='3'/><text x='250' y='60' font-family='sans-serif' font-weight='bold' font-size='20' text-anchor='middle'>B</text><text x='200' y='260' font-family='sans-serif' font-style='italic' font-size='16' text-anchor='middle'>Sample Space</text></svg>",
  "step1": {
    "title": "Concept: Understanding the Union of Events P(A \u222a B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union of two events, <strong>P(A \u222a B)</strong>, means the probability that event <em>A</em> happens <strong>or</strong> event <em>B</em> happens, or both occur. In a Venn diagram, this is represented by all the area covered by circles <em>A</em> and <em>B</em> combined.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two clubs at school: the Drama Club (A) and the Music Club (B). The union is the set of all students who are in Drama, or Music, or both.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify the probabilities for each event, e.g., P(A) = 0.5, P(B) = 0.4.</span>",
        "<span>Step 2: Identify the overlap (both A and B), e.g., P(A \u2229 B) = 0.2.</span>",
        "<span>Step 3: Use the formula P(A \u222a B) = P(A) + P(B) - P(A \u2229 B) = 0.5 + 0.4 - 0.2 = 0.7.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ on Intersection",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which region of a Venn diagram represents the intersection <strong>P(A \u2229 B)</strong>?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The overlapping area between circles A and B</span>",
            "isCorrect": true,
            "explanation": "Correct! The intersection is where both events A and B occur together."
          },
          {
            "id": "b",
            "label": "<span>The total area of circle A plus circle B</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Adding the total areas represents the union, not just the intersection."
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
        "sentence": "<span>The complement of event A is written as <strong>P(<span class=\"font-semibold\">_____</span>)</strong> and represents the probability that event A does <em>not</em> happen.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "A'",
                "label": "A'",
                "isCorrect": true,
                "feedback": "Correct! The complement of A is denoted by A'."
              },
              {
                "value": "B",
                "label": "B",
                "isCorrect": false,
                "feedback": "Incorrect. B is a different event, not the complement of A."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Understanding the Intersection of Events P(A \u2229 B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection <strong>P(A \u2229 B)</strong> is the probability that both events A and B happen at the same time. In a Venn diagram, this is shown by the overlapping region between the circles A and B.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is students who play football and B is students who play tennis, the intersection is students who play both football <em>and</em> tennis.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Find the number of students who play football (P(A) = 0.6) and tennis (P(B) = 0.5).</span>",
        "<span>Step 2: Overlap found to be P(A \u2229 B) = 0.3, meaning 30% play both.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Working with Complements P(A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of event A, written as <strong>P(A')</strong>, is the probability that event A does NOT occur. On a Venn diagram, this includes everything outside circle A but inside the total sample space.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is the event it rains today, then A' is the event it does not rain.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Given P(A) = 0.7, find P(A').</span>",
        "<span>Step 2: Use the formula P(A') = 1 - P(A) = 1 - 0.7 = 0.3.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Using a Venn diagram, explain how to calculate P(A \u222a B) when given P(A), P(B), and P(A \u2229 B). Also, describe how to find the complement P(A').</span>",
      "hint": "Remember to start by identifying the probabilities of each event, use the formula for union to avoid double counting the overlap, and use 1 minus the probability for the complement.",
      "mustHaveKeywords": ["union", "intersection", "complement", "Venn diagram"],
      "optionalKeywords": ["mutually exclusive", "overlap", "sample space"],
      "modelAnswer": "<span>To calculate P(A \u222a B), first add the probabilities of events A and B, then subtract the intersection P(A \u2229 B) to avoid counting the overlap twice. This can be written as P(A \u222a B) = P(A) + P(B) - P(A \u2229 B). The Venn diagram shows these regions clearly as the total area covered by both circles minus the overlapping part counted twice. To find the complement P(A'), subtract the probability of event A from 1 because the complement includes all outcomes not in A within the sample space, so P(A') = 1 - P(A).</span>",
      "scaffoldPrompts": ["Start by labeling P(A), P(B), and P(A \u2229 B) on your Venn diagram", "Write down the union formula and substitute values", "Explain why subtracting the intersection is necessary", "Define complement as everything outside A within the sample space", "Remember P(A') = 1 - P(A)"]
    }
  }
};