window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.4 - Set notation for probability (Part 3)",
  "strapline": "Understanding set notation for union, intersection, and complement to calculate and interpret probabilities.",
  "learningObjectives": [
    "Students should use set notation to represent probability events, including the symbols for union (∪), intersection (∩), and complement (A') (Maths 5.4)",
    "Students should express compound events using Venn diagrams and set notation, such as P(A ∪ B) and P(A ∩ B) (Maths 5.4)",
    "Students should calculate probabilities using set notation and interpret probability statements written in this mathematical language (Maths 5.4)"
  ],
  "step1": {
    "title": "Concept: Union (∪) of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union of two events A and B, written as A ∪ B, includes <strong>all outcomes</strong> that are in event A <em>or</em> event B <em>or both</em>. In probability, P(A ∪ B) represents the chance that at least one of these events occurs.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two clubs A and B with members. A ∪ B is like everyone who is in club A, club B, or both clubs combined.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify the sets A and B.</span>",
        "<span>Step 2: Find all elements belonging to A or B.</span>",
        "<span>Step 3: Write the set union as A ∪ B.</span>",
        "<span>Step 4: Calculate P(A ∪ B) by adding probabilities where events overlap are not counted twice.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Intersection (∩) of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection of two events A and B, written as A ∩ B, consists of all outcomes that are common to both A and B. The probability P(A ∩ B) is the chance that both events happen at the same time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two overlapping circles representing events A and B. The intersection is the part where both circles overlap.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify outcomes that belong to both A and B simultaneously.</span>",
        "<span>Step 2: Write the intersection as A ∩ B.</span>",
        "<span>Step 3: Calculate P(A ∩ B) using data or a Venn diagram.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Complement (A') of an Event",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of an event A, written as A', includes all outcomes <em>not</em> in event A. The probability P(A') means the chance that event A does <strong>not</strong> occur. It is given by <em>P(A') = 1 - P(A)</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If event A is 'rain today', then A' is 'no rain today'. Together they cover all possibilities.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify event A and its probability P(A).</span>",
        "<span>Step 2: Calculate the complement probability: P(A') = 1 - P(A).</span>",
        "<span>Step 3: Interpret P(A') as likelihood that event A does not happen.</span>"
      ]
    }
  },
  "step4": {
    "title": "Using Venn Diagrams to Represent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Venn diagrams visually show the relationships between sets or events. Circles overlapping represent intersections, total area covered represents unions, and the area outside a circle represents complements.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like a map of places where circles overlap showing common parts, and separate or outside areas showing unique or complement parts.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Draw circles labeled A and B.</span>",
        "<span>Step 2: Shade the overlapping area for A ∩ B.</span>",
        "<span>Step 3: Shade all parts inside A or B for A ∪ B.</span>",
        "<span>Step 4: Shade outside A for A'.</span>"
      ]
    }
  },
  "step5": {
    "title": "Calculating Compound Probabilities Using Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use formulas to find probabilities of unions and intersections. For any two events, <em>P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</em> to avoid counting overlap twice. Interpret statements using correct symbols.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like counting people in two groups but subtracting those counted twice in both groups.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Find P(A), P(B), and P(A ∩ B) from data or diagram.</span>",
        "<span>Step 2: Apply formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B).</span>",
        "<span>Step 3: Calculate the value and interpret.</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which expression represents the probability that either event A or B (or both) occurs?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>P(A ∪ B)</span>",
            "isCorrect": true,
            "explanation": "Correct. The union symbol ∪ means 'either/or/both'."
          },
          {
            "id": "b",
            "label": "<span>P(A ∩ B)</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The intersection ∩ means both events happening together."
          },
          {
            "id": "c",
            "label": "<span>P(A')</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The complement A' means the event <em>A</em> does not occur."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of two events A and B is all outcomes in both of them together.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "union",
                "label": "union (∪)",
                "isCorrect": false,
                "feedback": "Try again. The union includes all outcomes in A or B."
              },
              {
                "value": "intersection",
                "label": "intersection (∩)",
                "isCorrect": true,
                "feedback": "Correct! The intersection is where both events happen together."
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Interpreting Probability Statements in Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Read statements like <em>P(A ∩ B)</em> as 'the probability that A and B both occur'. Similarly, <em>P(A')</em> means 'the probability that A does not occur'. Understanding the symbols helps to interpret real-life probability questions.</p>",
    "workedExample": {
      "title": "Example",
      "bullets": [
        "<span>If P(A) = 0.3 and P(B) = 0.5, P(A ∩ B) = 0.1, find P(A ∪ B).</span>",
        "<span>Use formula: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.3 + 0.5 - 0.1 = 0.7.</span>"
      ]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to find the probability of either event A or event B happening, given probabilities of A, B, and their intersection, using set notation.</span>",
      "hint": "Remember to use the formula for the union of two events and interpret each term carefully.",
      "mustHaveKeywords": ["P(A ∪ B)", "P(A)", "P(B)", "P(A ∩ B)", "formula", "set notation"],
      "optionalKeywords": ["Venn diagram", "union", "intersection", "complement"],
      "modelAnswer": "<span>To find the probability of either event A or event B occurring, we use the formula <em>P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</em>. This formula accounts for the fact that the outcomes in both A and B are counted twice when we add P(A) and P(B), so we subtract the intersection probability P(A ∩ B). Using set notation helps clearly define the events and their relationships.</span>",
      "scaffoldPrompts": [
        "Think about what P(A ∪ B) means in terms of sets.",
        "Recall the formula that connects P(A ∪ B), P(A), P(B), and P(A ∩ B).",
        "Explain why you subtract the intersection probability."
      ]
    }
  }
};