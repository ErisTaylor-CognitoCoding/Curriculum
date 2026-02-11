window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.2 - Venn diagrams (probability notation) (Part 3)",
  "strapline": "Using Venn diagrams and probability notation to solve complex event problems",
  "learningObjectives": [
    "Students should interpret and construct Venn diagrams with two or more events, using them to calculate probabilities by identifying regions that represent different combinations of events (Maths 5.2)",
    "Students should apply formal probability notation including P(A), P(B), P(A ∪ B) for union, and P(A ∩ B) for intersection when working with Venn diagrams (Maths 5.2)",
    "Students should work with complement notation P(A') and use Venn diagrams to solve problems involving mutually exclusive and non-mutually exclusive events (Maths 5.2)"
  ],
  "step1": {
    "title": "Concept: Understanding the Union P(A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union of two events A and B, denoted by <strong>P(A ∪ B)</strong>, is the probability that either event A happens, or event B happens, or both happen. In a Venn diagram, this is shown by all the areas covered by both circles, including the overlap.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you want to watch a movie at either Cinema A or Cinema B. The union represents all the movies available at Cinema A or Cinema B or both.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify the circles representing events A and B on the Venn diagram.</span>",
        "<span>Step 2: Shade all regions that represent A, B, or both.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Intersection P(A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection of two events A and B, written as <strong>P(A ∩ B)</strong>, is the probability that both A and B happen at the same time. On a Venn diagram, this is the overlapping region of the two circles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two clubs: Club A and Club B. The intersection is like the people who are members of both clubs.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Find where circles A and B overlap.</span>",
        "<span>Step 2: Shade only this overlapping part to represent <em>P(A ∩ B)</em>.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: The Complement P(A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of an event A, denoted as <strong>P(A')</strong>, is the probability that event A does NOT occur. On a Venn diagram, this includes all areas outside circle A but within the total sample space.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is the event 'rainy day,' then A' is a 'non-rainy day.' The complement is everything except what is inside circle A.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify circle A on the Venn diagram.</span>",
        "<span>Step 2: Shade the area outside circle A but inside the large rectangle (sample space).</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying Probability Notation in Venn Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the formal probability symbols to describe event regions in a Venn diagram. For example, P(A) is the area inside circle A, P(B) inside circle B, P(A ∪ B) the total of both circles combined, and P(A ∩ B) their overlap.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just like a map shows different territories, a Venn diagram shows event territories, which we can name with probability notation.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Label each region with its corresponding probability notation.</span>",
        "<span>Step 2: Calculate probabilities by adding or subtracting areas based on notation.</span>"
      ]
    }
  },
  "step5": {
    "title": "Solving Problems with Mutually Exclusive Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Mutually exclusive events cannot happen at the same time; their intersection is empty. Thus, P(A ∩ B) = 0. For these, P(A ∪ B) = P(A) + P(B).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of choosing either red or blue marbles from a bag but not both at once - these are mutually exclusive events.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Confirm no overlap on Venn diagram.</span>",
        "<span>Step 2: Add probabilities to find union probability.</span>"
      ]
    }
  },
  "step6": {
    "title": "Solving Problems with Non-Mutually Exclusive Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When events can occur together, P(A ∩ B) ≠ 0. Use the formula P(A ∪ B) = P(A) + P(B) − P(A ∩ B) to avoid double counting the overlap.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If someone likes both tea and coffee, we must subtract the overlap so we don’t count them twice when finding how many like at least one.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify P(A), P(B), and the overlap P(A ∩ B) from the diagram or problem.</span>",
        "<span>Step 2: Calculate P(A ∪ B) = P(A) + P(B) − P(A ∩ B).</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which region on a Venn diagram represents <strong>P(A ∪ B)</strong>?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Only the overlapping area of A and B</span>",
            "isCorrect": false,
            "explanation": "This represents only the intersection P(A ∩ B), not the union."
          },
          {
            "id": "b",
            "label": "<span>The total of both circles A and B including overlap</span>",
            "isCorrect": true,
            "explanation": "Correct! The union covers all of A and B combined."
          },
          {
            "id": "c",
            "label": "<span>The area outside both circles</span>",
            "isCorrect": false,
            "explanation": "This area represents the complement of A ∪ B, not the union itself."
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The symbol <span class=\"font-semibold\">_____</span> represents the probability that event A does not occur.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "P(A')",
                "label": "P(A')",
                "isCorrect": true,
                "feedback": "Correct! P(A') is the complement of A."
              },
              {
                "value": "P(A ∪ B)",
                "label": "P(A ∪ B)",
                "isCorrect": false,
                "feedback": "No, that's the union of A and B."
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given two events A and B where P(A) = 0.5, P(B) = 0.4, and P(A ∩ B) = 0.2, use a Venn diagram to find P(A ∪ B) and P(A').</span>",
      "hint": "Remember to use the formula for the union and the definition of the complement.",
      "mustHaveKeywords": ["P(A ∪ B)", "P(A')", "union formula", "complement"],
      "optionalKeywords": ["Venn diagrams", "probability notation"],
      "modelAnswer": "<span>First, use the union formula: P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.5 + 0.4 − 0.2 = 0.7.<br>Next, find the complement: P(A') = 1 − P(A) = 1 − 0.5 = 0.5.<br>These answers can be visualized on a Venn diagram by shading the union area for P(A ∪ B) and the area outside circle A for P(A').</span>",
      "scaffoldPrompts": [
        "Draw circles A and B intersecting within the sample space.",
        "Label the probabilities: 0.5 for A, 0.4 for B, and 0.2 for the overlap.",
        "Calculate P(A ∪ B) using the formula.",
        "Calculate P(A') by subtracting P(A) from 1."
      ]
    }
  }
};