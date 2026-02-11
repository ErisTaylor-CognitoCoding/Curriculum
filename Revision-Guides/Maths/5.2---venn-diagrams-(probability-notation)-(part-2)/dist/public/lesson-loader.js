window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.2 - Venn diagrams (probability notation) (Part 2)",
  "strapline": "Understanding and applying probability notation with Venn diagrams including union, intersection, and complement",
  "learningObjectives": [
    "Students should interpret and construct Venn diagrams with two or more events to represent probability situations (Maths 5.2)",
    "Students should use formal probability notation including P(A), P(B), P(A ∪ B) for union, P(A ∩ B) for intersection, and P(A') for complement (Maths 5.2)",
    "Students should calculate probabilities using Venn diagrams by identifying regions representing different combinations of events, including mutually exclusive and non-mutually exclusive events (Maths 5.2)"
  ],
  "step1": {
    "title": "Concept: Union P(A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union <strong>P(A ∪ B)</strong> is the probability that either event <em>A</em> happens, or event <em>B</em> happens, or both. In a Venn diagram, this includes all the areas inside circle <em>A</em>, circle <em>B</em>, and the overlapping part.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two groups of friends invited to a party. The union is like counting all the friends who come from either group, including those who are in both groups.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Circle A represents students who like football, circle B represents students who like basketball.</span>",
        "<span>P(A ∪ B) means the probability a student likes football or basketball or both, so include all students in either circle A or B.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Intersection P(A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection <strong>P(A ∩ B)</strong> is the probability that both event <em>A</em> and event <em>B</em> occur together. It is represented by the overlapping region of circles <em>A</em> and <em>B</em> in a Venn diagram.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine people who like football and basketball. The intersection is the group of people who like <em>both</em> sports — the overlap between the two friend groups.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>From the students who like football or basketball, the intersection counts only those who like both.</span>",
        "<span>If 5 students like both sports, P(A ∩ B) is the probability represented by these 5 students over the total number of students.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Complement P(A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement <strong>P(A')</strong> represents the probability that event <em>A</em> does NOT occur. In a Venn diagram, this is the area outside circle <em>A</em> but still inside the universal set.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If event A is students who have pets, then A' is students who <em>do not</em> have pets.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If 40% of students have pets, then P(A) = 0.4.</span>",
        "<span>P(A') = 1 - P(A) = 0.6, the probability that a student chosen does not have a pet.</span>"
      ]
    }
  },
  "step4": {
    "title": "Calculating Probability with Venn Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To calculate probabilities from a Venn diagram, identify the number or proportion of elements in each region and express probability as number of favourable outcomes over total outcomes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If out of 50 students, 20 like football, 15 like basketball, and 5 like both, use the Venn diagram to allocate numbers to each region and calculate probabilities accordingly.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total students = 50</span>",
        "<span>Only football = 20 - 5 = 15, only basketball = 15 - 5 = 10, both = 5</span>",
        "<span>P(A ∪ B) = (15 + 10 + 5) / 50 = 30/50 = 0.6</span>"
      ]
    }
  },
  "step5": {
    "title": "Mutually Exclusive Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Mutually exclusive events are events that cannot happen at the same time. On a Venn diagram, their circles do not overlap, so <strong>P(A ∩ B) = 0</strong>. The probability of their union is the sum of individual probabilities.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Choosing a card from a deck: the event 'card is a heart' and 'card is a club' are mutually exclusive — they can’t happen together.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>P(A) = 0.3, P(B) = 0.4, events A and B mutually exclusive.</span>",
        "<span>P(A ∪ B) = P(A) + P(B) = 0.3 + 0.4 = 0.7</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which region of a Venn diagram represents the event P(A ∩ B)?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The overlapping region between circles A and B</span>",
            "isCorrect": true,
            "explanation": "Correct! The intersection is the overlap of A and B."
          },
          {
            "id": "b",
            "label": "<span>All areas inside circles A or B</span>",
            "isCorrect": false,
            "explanation": "Incorrect. That represents the union P(A ∪ B)."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>If events A and B are mutually exclusive, what is P(A ∩ B)?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>0</span>",
            "isCorrect": true,
            "explanation": "Correct! Mutually exclusive events have no overlap."
          },
          {
            "id": "b",
            "label": "<span>1</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Overlap is zero, not certain."
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
        "sentence": "<span>The probability that event A does not happen is denoted by <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "P(A')",
                "label": "P(A')",
                "isCorrect": true,
                "feedback": "Correct! P(A') denotes the complement of A."
              },
              {
                "value": "P(A ∩ B)",
                "label": "P(A ∩ B)",
                "isCorrect": false,
                "feedback": "Incorrect, that is the intersection of A and B."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The probability that either event A OR event B (or both) happens is <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "P(A ∪ B)",
                "label": "P(A ∪ B)",
                "isCorrect": true,
                "feedback": "Correct! This is the union."
              },
              {
                "value": "P(A')",
                "label": "P(A')",
                "isCorrect": false,
                "feedback": "Incorrect, that is the complement of A."
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
      "prompt": "<span>Using a Venn diagram, explain how to calculate P(A ∪ B) when events A and B are not mutually exclusive.</span>",
      "hint": "Remember to consider the overlap region and not count it twice.",
      "mustHaveKeywords": [
        "union",
        "intersection",
        "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)"
      ],
      "optionalKeywords": [
        "Venn diagram",
        "mutually exclusive",
        "overlapping region",
        "subtract overlap"
      ],
      "modelAnswer": "<span>To calculate P(A ∪ B) when events A and B are not mutually exclusive, first add the probabilities of A and B. However, since their intersection is counted twice, subtract P(A ∩ B) once. This can be expressed as <strong>P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</strong>. Use a Venn diagram to visualize the overlapping part so it is not counted twice.</span>",
      "scaffoldPrompts": [
        "Draw circles for events A and B showing their overlap",
        "Identify P(A), P(B), and P(A ∩ B)",
        "Use the formula to combine probabilities accounting for overlap"
      ]
    }
  }
};