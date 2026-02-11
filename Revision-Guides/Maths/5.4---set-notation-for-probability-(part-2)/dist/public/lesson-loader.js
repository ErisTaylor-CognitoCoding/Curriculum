window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.4 - Set notation for probability (Part 2)",
  "strapline": "Learn how to use set notation to represent and calculate probabilities of compound events with union, intersection, and complement.",
  "learningObjectives": [
    "Students should use set notation to represent probability events, including the symbols for union (∪), intersection (∩), and complement (A') (Maths 5.4)",
    "Students should calculate probabilities using set notation and interpret probability statements written in this mathematical language (Maths 5.4)",
    "Students should understand how to express compound events using Venn diagrams and set notation, such as P(A ∪ B) and P(A ∩ B) (Maths 5.4)"
  ],
  "step1": {
    "title": "Concept: Union (∪)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union of two events <strong>A</strong> and <strong>B</strong>, written as <strong>A ∪ B</strong>, represents all outcomes that are in <strong>A</strong> or <strong>B</strong> or in both. In terms of probability, <strong>P(A ∪ B)</strong> means the probability that event <strong>A</strong> happens, or event <strong>B</strong> happens, or both happen.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two groups of students: one group likes football (A) and another likes basketball (B). The union <em>A ∪ B</em> is all students who like football or basketball or both.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Event A: Probability of rain tomorrow is 0.3.</span>",
        "<span>Event B: Probability of wind tomorrow is 0.4.</span>",
        "<span>P(A ∪ B) is the chance of rain or wind or both happening.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Intersection (∩)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection of two events <strong>A</strong> and <strong>B</strong>, written as <strong>A ∩ B</strong>, includes only the outcomes that are common to both <strong>A</strong> and <strong>B</strong>. In probability, <strong>P(A ∩ B)</strong> means the chance that both event <strong>A</strong> and event <strong>B</strong> occur at the same time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the same groups of students, <em>A ∩ B</em> is the group of students who like both football and basketball.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Event A: Probability of picking a red card from a deck is 0.5.</span>",
        "<span>Event B: Probability of picking a face card is 0.25.</span>",
        "<span>If 0.1 is the probability of picking a red face card, then P(A ∩ B) = 0.1.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Complement (A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of an event <strong>A</strong>, written as <strong>A'</strong>, represents all outcomes where event <strong>A</strong> does not happen. The rule is that <strong>P(A) + P(A') = 1</strong>, since either <strong>A</strong> happens or it doesn't.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If event A is 'it rains tomorrow', then <em>A'</em> is 'it does not rain tomorrow'. Together these cover all possibilities.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Probability it rains tomorrow is P(A) = 0.3.</span>",
        "<span>Therefore, probability it does not rain is P(A') = 1 - 0.3 = 0.7.</span>"
      ]
    }
  },
  "step4": {
    "title": "Using Venn Diagrams to Represent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Venn diagrams visually show events and their relationships. Circles represent events; overlapping areas show intersections, and the area outside an event's circle is its complement. They help in understanding unions, intersections, and complements clearly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two overlapping circles labeled A and B: the union is every part covered by both circles, the intersection is only the overlapping area.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw two circles intersecting labeled A and B.</span>",
        "<span>Shade the union A ∪ B – all areas inside both circles.</span>",
        "<span>Shade the intersection A ∩ B – only the overlapping part.</span>"
      ]
    }
  },
  "step5": {
    "title": "Calculating Probabilities Using Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To calculate <strong>P(A ∪ B)</strong>, use the formula: <strong>P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</strong> to avoid double counting. This formula is important when <strong>A</strong> and <strong>B</strong> are not mutually exclusive.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like counting people who like football or basketball: if you add both groups, the ones who like both get counted twice unless subtracted once.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>P(A) = 0.4, P(B) = 0.3, P(A ∩ B) = 0.1</span>",
        "<span>Calculate P(A ∪ B): 0.4 + 0.3 - 0.1 = 0.6</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which set notation represents the probability of both events A and B happening?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>P(A ∪ B)</span>",
            "isCorrect": false,
            "explanation": "<span>P(A ∪ B) is the probability of A or B or both happening, not both together.</span>"
          },
          {
            "id": "b",
            "label": "<span>P(A ∩ B)</span>",
            "isCorrect": true,
            "explanation": "<span>Correct. The intersection symbol ∩ represents both A and B occurring together.</span>"
          },
          {
            "id": "c",
            "label": "<span>P(A')</span>",
            "isCorrect": false,
            "explanation": "<span>P(A') is the probability that A does not occur.</span>"
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
        "sentence": "<span>The symbol <strong>∩</strong> in probability notation represents the <span class=\"font-semibold\">_____</span> of two events.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "union",
                "label": "union",
                "isCorrect": false,
                "feedback": "Try again. ∩ does not represent union."
              },
              {
                "value": "intersection",
                "label": "intersection",
                "isCorrect": true,
                "feedback": "Correct! ∩ means intersection."
              },
              {
                "value": "complement",
                "label": "complement",
                "isCorrect": false,
                "feedback": "Try again. The complement is denoted by A'."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Applying Complement in Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If <strong>P(A)</strong> is known, you can find the probability that event <strong>A</strong> does not happen using the complement, <strong>P(A') = 1 - P(A)</strong>. This helps calculate probabilities more easily when complements are simpler to find.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If the chance of passing a test is 0.7, then the chance of failing is 1 - 0.7 = 0.3.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given P(A) = 0.8 for event A.</span>",
        "<span>Calculate P(A') = 1 - 0.8 = 0.2.</span>"
      ]
    }
  },
  "step9": {
    "title": "Combining Set Notations in Venn Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can use Venn diagrams to visualize expressions like <strong>P((A ∪ B)')</strong> or <strong>P(A' ∩ B)</strong>. These represent complements of unions or intersections combined with complements respectively.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">For example, <em>(A ∪ B)'</em> represents all outcomes outside both A and B — neither A nor B occurs.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Sketch Venn diagram with two overlapping circles A and B.</span>",
        "<span>Shade outside both circles to represent (A ∪ B)'.</span>"
      ]
    }
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given two events A and B with probabilities P(A) = 0.5, P(B) = 0.4, and P(A ∩ B) = 0.2, calculate P(A ∪ B), P(A'), and explain what these represent in terms of outcomes.</span>",
      "hint": "<span>Remember the formula for union: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) and that P(A') = 1 - P(A).</span>",
      "mustHaveKeywords": ["union", "complement", "formula", "probability", "intersection"],
      "optionalKeywords": ["Venn diagram", "compound events"],
      "modelAnswer": "<span>The probability of the union is P(A ∪ B) = 0.5 + 0.4 - 0.2 = 0.7, which means the likelihood of either A or B or both occurring. The complement P(A') = 1 - 0.5 = 0.5, meaning the probability that event A does not happen.</span>",
      "scaffoldPrompts": [
        "<span>First, write down the values given for P(A), P(B), and P(A ∩ B).</span>",
        "<span>Use the formula for union to calculate P(A ∪ B).</span>",
        "<span>Calculate the complement P(A') using 1 - P(A).</span>",
        "<span>Explain what these probabilities represent in terms of event outcomes.</span>"
      ]
    }
  }
};