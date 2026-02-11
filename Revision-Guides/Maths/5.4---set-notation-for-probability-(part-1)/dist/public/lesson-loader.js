window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.4 - Set notation for probability (Part 1)",
  "strapline": "Learn to use set notation and Venn diagrams to calculate and interpret probabilities of compound events.",
  "learningObjectives": [
    "Students should be able to use set notation to represent probability events, including the symbols for union (∪), intersection (∩), and complement (A') (Maths 5.4)",
    "Students should be able to express compound events using Venn diagrams and set notation, such as P(A ∪ B) for the probability of A or B occurring, and P(A ∩ B) for the probability of both A and B occurring (Maths 5.4)",
    "Students should be able to calculate probabilities using set notation and interpret probability statements written in this mathematical language (Maths 5.4)"
  ],
  "step1": {
    "title": "Concept: What is Set Notation?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Set notation is a mathematical way of describing groups of outcomes, called events, using special symbols. In probability, we use these symbols to combine and describe events in an easy and clear way.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a set as a basket containing all the apples you have. Set notation is like the labels you put on different baskets to describe which apples they have.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Define the set A as the event 'rolling an even number on a die'.</span>",
        "<span>Step 2: Write A = {2, 4, 6} using set notation.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: The Union Symbol (∪)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union symbol ∪ means 'or', so A ∪ B includes all outcomes that are in event A, or event B, or both.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is the set of red balls and B is the set of blue balls, A ∪ B is the basket containing all red and blue balls combined.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Let A = {1, 2, 3} and B = {3, 4, 5}.</span>",
        "<span>Step 2: Find A ∪ B = {1, 2, 3, 4, 5}.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: The Intersection Symbol (∩)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection symbol ∩ means 'and', so A ∩ B includes only outcomes that are in both event A and event B at the same time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is red balls and B is the balls that are large, then A ∩ B is the basket containing only red and large balls.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Let A = {1, 2, 3} and B = {3, 4, 5}.</span>",
        "<span>Step 2: Find A ∩ B = {3}, the common outcome.</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: The Complement Symbol (A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of a set A, written as A', is all outcomes in the sample space that are NOT in A.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is the set of red balls in a basket, A' is all balls that are not red.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: If the sample space S = {1, 2, 3, 4, 5, 6} and A = {2, 4, 6}.</span>",
        "<span>Step 2: Then A' = {1, 3, 5}.</span>"
      ]
    }
  },
  "step5": {
    "title": "Using Venn Diagrams to Express P(A ∪ B) and P(A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Venn diagrams visually represent events. The probability of A or B occurring is written as P(A ∪ B), and the probability of both A and B occurring is written as P(A ∩ B).</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Draw two overlapping circles labelled A and B inside a rectangle representing the sample space.</span>",
        "<span>Step 2: Shade the region in A or B to represent P(A ∪ B), and shade only the overlapping region for P(A ∩ B).</span>"
      ]
    }
  },
  "step6": {
    "title": "Calculating Probabilities Using Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the probability of compound events, we use the formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B) and can also calculate complements using P(A') = 1 - P(A).</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Suppose P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2.</span>",
        "<span>Step 2: Calculate P(A ∪ B) = 0.4 + 0.5 - 0.2 = 0.7.</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the union symbol (∪) in set notation represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>'And' - outcomes in both events</span>",
            "isCorrect": false,
            "explanation": "<span>The intersection symbol (∩) means 'and', not union.</span>"
          },
          {
            "id": "b",
            "label": "<span>'Or' - outcomes in either or both events</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! The union symbol (∪) means 'or' including all outcomes in either set.</span>"
          },
          {
            "id": "c",
            "label": "<span>The complement of an event</span>",
            "isCorrect": false,
            "explanation": "<span>Complement is written as A', not union.</span>"
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
        "sentence": "<span>The symbol for the complement of event A is <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "A'",
                "label": "A'",
                "isCorrect": true,
                "feedback": "<span>Correct! The complement of A is written as A'.</span>"
              },
              {
                "value": "A∩B",
                "label": "A∩B",
                "isCorrect": false,
                "feedback": "<span>Incorrect. A∩B means intersection, not complement.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Practice: Calculate P(A ∪ B) and P(A ∩ B)",
    "practice": {
      "prompt": "<span>Given P(A) = 0.3, P(B) = 0.6 and P(A ∩ B) = 0.2, calculate P(A ∪ B).</span>",
      "hint": "<span>Remember the formula: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).</span>",
      "mustHaveKeywords": ["P(A ∪ B)", "P(A)", "P(B)", "P(A ∩ B)", "subtract"],
      "optionalKeywords": ["union", "probability"],
      "modelAnswer": "<span>Using the formula, P(A ∪ B) = 0.3 + 0.6 - 0.2 = 0.7.</span>",
      "scaffoldPrompts": [
        "<span>Step 1: Write down the given probabilities.</span>",
        "<span>Step 2: Substitute the values into the formula for the union of two events.</span>",
        "<span>Step 3: Perform the calculation carefully.</span>"
      ]
    }
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A survey showed 40% of people like apples (event A), 50% like bananas (event B), and 20% like both apples and bananas. Write the events using set notation and calculate the probability that a person likes either apples or bananas.</span>",
      "hint": "<span>Think about how to write the compound event using union and then apply the formula.</span>",
      "mustHaveKeywords": ["P(A ∪ B)", "P(A)", "P(B)", "P(A ∩ B)", "0.40", "0.50", "0.20", "calculate"],
      "optionalKeywords": ["union", "compound events", "set notation"],
      "modelAnswer": "<span>Write the event as P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.40 + 0.50 - 0.20 = 0.70. So, 70% like apples or bananas.</span>",
      "scaffoldPrompts": [
        "<span>Identify the probabilities of events A, B and their intersection.</span>",
        "<span>Write the expression for P(A ∪ B).</span>",
        "<span>Substitute the given numbers and calculate.</span>"
      ]
    }
  }
};