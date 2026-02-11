window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.4 - Set notation for probability (Part 3)",
  "strapline": "Understanding probability using set notation including union, intersection, and complement.",
  "learningObjectives": [
    "Students should use set notation to represent probability events, including the symbols for union (∪), intersection (∩), and complement (A') (Maths 5.4)",
    "Students should express compound events using Venn diagrams and set notation, such as P(A ∪ B) and P(A ∩ B) (Maths 5.4)",
    "Students should calculate probabilities using set notation and interpret probability statements written in this mathematical language (Maths 5.4)"
  ],
  "step1": {
    "title": "Concept: Union (∪) of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>union</strong> of two events <em>A</em> and <em>B</em>, written as <strong>A ∪ B</strong>, includes all outcomes that are in <em>A</em> or <em>B</em> or both. The probability <strong>P(A ∪ B)</strong> is the chance that either event <em>A</em> or event <em>B</em> happens.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have blue marbles in one bag (<em>A</em>) and red marbles in another bag (<em>B</em>). The union <em>A ∪ B</em> is like taking all marbles that are either blue, red, or both colors if some marbles are mixed.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Event A is drawing a card that is a heart from a deck, event B is drawing a card that is a queen.</span>",
        "<span>The union A ∪ B includes all hearts plus all queens (including the queen of hearts).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Intersection (∩) of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>intersection</strong> of two events <em>A</em> and <em>B</em>, written <strong>A ∩ B</strong>, includes all outcomes that are in both <em>A</em> and <em>B</em> at the same time. The probability <strong>P(A ∩ B)</strong> is the chance both events happen together.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If bag <em>A</em> contains blue marbles and bag <em>B</em> contains marbles that are heavy, the intersection <em>A ∩ B</em> is the set of marbles that are both blue and heavy.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Using the card example, A is drawing a heart, B is drawing a queen.</span>",
        "<span>The intersection A ∩ B is just the queen of hearts.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Complement (A') of an Event",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>complement</strong> of an event <em>A</em>, written as <strong>A'</strong>, consists of all outcomes that are <em>not</em> in <em>A</em>. The probability <strong>P(A')</strong> means the event <em>A</em> does not happen. It is related by <strong>P(A') = 1 - P(A)</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If <em>A</em> is the event 'it rains today', then <em>A'</em> is the event 'it does not rain today'.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If the probability it rains today, P(A) = 0.3, then P(A') = 1 - 0.3 = 0.7.</span>"
      ]
    }
  },
  "step4": {
    "title": "Expressing Events with Venn Diagrams and Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use Venn diagrams to visually show events and their relationships. Set notation <em>A ∪ B</em>, <em>A ∩ B</em>, and <em>A'</em> corresponds to regions in the diagrams that represent outcomes of these events.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of overlapping bubbles where each bubble is an event. The whole bubble or overlapping part can be shaded to show union or intersection.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw two circles labeled A and B inside a rectangle for the sample space.</span>",
        "<span>Shade A ∪ B by coloring both circles entirely.</span>",
        "<span>Shade A ∩ B by coloring only the overlapping region.</span>"
      ]
    }
  },
  "step5": {
    "title": "Calculating Probability Using Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When calculating probabilities with set notation, use known formulas like <strong>P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</strong>. This avoids double counting the intersection.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If two groups share some members, to find how many are in either group, add both totals but subtract shared members once.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2</span>",
        "<span>Calculate P(A ∪ B) = 0.4 + 0.5 - 0.2 = 0.7</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does <strong>P(A ∩ B)</strong> represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The probability that event A or event B happens</span>",
            "isCorrect": false,
            "explanation": "This represents the union, not the intersection."
          },
          {
            "id": "b",
            "label": "<span>The probability that both event A and event B happen together</span>",
            "isCorrect": true,
            "explanation": "Correct! Intersection means both events happen."
          },
          {
            "id": "c",
            "label": "<span>The probability that event A does not happen</span>",
            "isCorrect": false,
            "explanation": "This is the complement of A, or P(A')."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of events A and B includes all outcomes in either event or both.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "union",
                "label": "union",
                "isCorrect": true,
                "feedback": "Correct! The union is A ∪ B."
              },
              {
                "value": "intersection",
                "label": "intersection",
                "isCorrect": false,
                "feedback": "Try again, this refers to a different concept."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of event A represents all outcomes not in A.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "complement",
                "label": "complement",
                "isCorrect": true,
                "feedback": "Correct! The complement is written A'."
              },
              {
                "value": "union",
                "label": "union",
                "isCorrect": false,
                "feedback": "Try again, union refers to combining events."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given P(A) = 0.35, P(B) = 0.5 and P(A ∩ B) = 0.2, calculate P(A ∪ B) and P(A').</span>",
      "hint": "Remember to use the formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B) and that P(A') = 1 - P(A).",
      "mustHaveKeywords": ["P(A ∪ B)", "P(A')", "union", "complement", "formula"],
      "optionalKeywords": ["intersection", "subtract", "probability"],
      "modelAnswer": "<span>First, calculate the union: P(A ∪ B) = 0.35 + 0.5 - 0.2 = 0.65.<br />Then calculate the complement: P(A') = 1 - 0.35 = 0.65.<br />So both probabilities are 0.65.</span>",
      "scaffoldPrompts": [
        "Write down what is given: P(A), P(B), and P(A ∩ B).",
        "Apply the formula for union probability.",
        "Calculate the complement of A."
      ]
    }
  }
};