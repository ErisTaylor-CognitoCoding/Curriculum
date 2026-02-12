window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.2 - Venn diagrams (probability notation) (Part 2)",
  "strapline": "Learn to interpret, construct, and calculate probabilities using Venn diagrams with formal probability notation including unions, intersections, and complements.",
  "learningObjectives": [
    "Students should interpret and construct Venn diagrams with two or more events to represent probability situations (Maths 5.2)",
    "Students should use formal probability notation including P(A), P(B), P(A ∪ B) for union, P(A ∩ B) for intersection, and P(A') for complement (Maths 5.2)",
    "Students should calculate probabilities using Venn diagrams by identifying regions representing different combinations of events, including mutually exclusive and non-mutually exclusive events (Maths 5.2)"
  ],
  "keyFormulas": [
    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    "P(A') = 1 - P(A)",
    "If events A and B are mutually exclusive, then P(A ∩ B) = 0"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#f9f9f9' stroke='#333' /><circle cx='140' cy='150' r='80' fill='#a8d0e6' fill-opacity='0.5' stroke='#0077b6' /><circle cx='260' cy='150' r='80' fill='#f7a440' fill-opacity='0.5' stroke='#ef6f6c' /><text x='140' y='70' text-anchor='middle' font-family='sans-serif' font-weight='bold' fill='#0077b6'>A</text><text x='260' y='70' text-anchor='middle' font-family='sans-serif' font-weight='bold' fill='#ef6f6c'>B</text><text x='200' y='230' text-anchor='middle' font-family='sans-serif'>Universal Set</text></svg>",
  "step1": {
    "title": "Concept: Understanding the Union P(A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union of two events A and B, written as <strong>P(A ∪ B)</strong>, represents the probability that either event A occurs, or event B occurs, or both occur. In a Venn diagram with circles for A and B, this includes all areas inside either circle.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two groups of people: those who like football (A) and those who like basketball (B). The union represents anyone who likes football, basketball, or both sports.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If P(A) = 0.4 and P(B) = 0.3 with P(A ∩ B) = 0.1, find P(A ∪ B).</span>",
        "<span>Use formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.3 - 0.1 = 0.6.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Intersection P(A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection of two events A and B, written as <strong>P(A ∩ B)</strong>, represents the probability that both events happen at the same time. In a Venn diagram, this is the overlapping region where the two circles meet.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Consider people who like both football and basketball. This overlap shows those individuals in both groups, representing P(A ∩ B).</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If 10% of people like both football and basketball, then P(A ∩ B) = 0.1.</span>",
        "<span>This is the overlap region in the Venn diagram.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding the Complement P(A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of an event A, written as <strong>P(A')</strong>, is the probability that event A does NOT happen. On a Venn diagram, this is represented by all areas outside the circle for A but inside the universal set.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is people who like football, then A' is the group who do not like football at all.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If P(A) = 0.6, then P(A') = 1 - 0.6 = 0.4.</span>",
        "<span>So, 40% of people do not like football.</span>"
      ]
    }
  },
  "step4": {
    "title": "Calculating Probabilities Using Venn Diagrams: Mutual Exclusivity",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Events are mutually exclusive if they cannot happen at the same time, which means <strong>P(A ∩ B) = 0</strong>. The two circles in the Venn diagram do not overlap.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Choosing either heads or tails in a coin toss: both can’t happen together.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given P(A) = 0.3 and P(B) = 0.2, with A and B mutually exclusive, find P(A ∪ B).</span>",
        "<span>Since P(A ∩ B) = 0, then P(A ∪ B) = 0.3 + 0.2 = 0.5.</span>"
      ]
    }
  },
  "step5": {
    "title": "Calculating Probabilities Using Venn Diagrams: Non-Mutually Exclusive Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If events can occur together, the intersection probability must be subtracted when finding the union to avoid double counting.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Some people can like both football and basketball, so their overlap must be counted only once.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If P(A) = 0.5, P(B) = 0.4, and P(A ∩ B) = 0.2, find P(A ∪ B).</span>",
        "<span>P(A ∪ B) = 0.5 + 0.4 - 0.2 = 0.7.</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does P(A') represent in probability notation?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The probability that event A does NOT occur.</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! P(A') is the complement of A, meaning event A does not happen.</span>"
          },
          {
            "id": "b",
            "label": "<span>The probability that events A and B both occur.</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. That is the intersection P(A ∩ B).</span>"
          },
          {
            "id": "c",
            "label": "<span>The probability that either A or B occur or both.</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. That describes the union P(A ∪ B).</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of two events is the probability that both happen at the same time.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "intersection",
                "label": "Intersection (P(A ∩ B))",
                "isCorrect": true,
                "feedback": "Correct! The intersection is where both events occur."
              },
              {
                "value": "union",
                "label": "Union (P(A ∪ B))",
                "isCorrect": false,
                "feedback": "Try again. The union is different; it means either event or both."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The symbol <span class=\"font-semibold\">P(A ∪ B)</span> represents the <span class=\"font-semibold\">_____</span> of events A and B.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "union",
                "label": "Union",
                "isCorrect": true,
                "feedback": "Correct! P(A ∪ B) means the union."
              },
              {
                "value": "complement",
                "label": "Complement",
                "isCorrect": false,
                "feedback": "Try again. Complement is represented by P(A')."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Constructing Venn Diagrams with Probabilities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To construct Venn diagrams for probability problems, start with the universal set and draw circles for each event. Label probabilities in each region carefully, ensuring intersections and complements are clearly marked.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw two intersecting circles labeled A and B inside a rectangle representing the universal set.</span>",
        "<span>Fill in P(A ∩ B) inside the overlap, P(A only) and P(B only) in the non-overlapping parts, and P(neither) outside both circles.</span>"
      ]
    }
  },
  "step9": {
    "title": "Advanced Calculation: Finding Missing Probabilities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Given some probabilities and the total probability of the universal set as 1, you can find missing values by subtracting known probabilities from 1.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If P(A) = 0.5, P(B) = 0.3, and P(A ∩ B) = 0.1, find the probability that neither A nor B occurs.</span>",
        "<span>P(neither) = 1 - P(A ∪ B) = 1 - [P(A) + P(B) - P(A ∩ B)] = 1 - (0.5 + 0.3 - 0.1) = 0.3.</span>"
      ]
    }
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A survey questioned 100 students. 60 like football (event A), 40 like basketball (event B), and 25 like both. Using this information:</span><ol><li>Draw a Venn diagram to represent the data.</li><li>Calculate P(A ∪ B).</li><li>Calculate P(A').</li></ol>",
      "hint": "Remember to use the formula for union and subtract the intersection. Also, use the total of 100 students to convert numbers into probabilities.",
      "mustHaveKeywords": [
        "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
        "P(A') = 1 - P(A)",
        "Venn diagram",
        "probability"
      ],
      "optionalKeywords": [
        "mutually exclusive",
        "intersection",
        "complement"
      ],
      "modelAnswer": "<span>First, find probabilities: P(A) = 60/100 = 0.6, P(B) = 40/100 = 0.4, P(A ∩ B) = 25/100 = 0.25.<br />Draw two overlapping circles labeled A and B with the intersection labeled 0.25, A only as 0.6 - 0.25 = 0.35, B only as 0.4 - 0.25 = 0.15.<br />P(A ∪ B) = 0.6 + 0.4 - 0.25 = 0.75.<br />P(A') = 1 - 0.6 = 0.4.</span>",
      "scaffoldPrompts": [
        "Calculate individual probabilities from the numbers given.",
        "Identify the intersection value for the overlap region.",
        "Use the union formula to find P(A ∪ B).",
        "Calculate complement by subtracting P(A) from 1."
      ]
    }
  }
};