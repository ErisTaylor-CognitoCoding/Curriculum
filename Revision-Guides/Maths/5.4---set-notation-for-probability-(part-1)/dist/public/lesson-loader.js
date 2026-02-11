window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.4 - Set notation for probability (Part 1)",
  "strapline": "Learn how to represent probability events using set notation and interpret compound events with Venn diagrams.",
  "learningObjectives": [
    "Students should be able to use set notation to represent probability events, including the symbols for union (∪), intersection (∩), and complement (A') (Maths 5.4)",
    "Students should be able to express compound events using Venn diagrams and set notation, such as P(A ∪ B) for the probability of A or B occurring, and P(A ∩ B) for the probability of both A and B occurring (Maths 5.4)",
    "Students should be able to calculate probabilities using set notation and interpret probability statements written in this mathematical language (Maths 5.4)"
  ],
  "step1": {
    "title": "Concept: Set Notation in Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Set notation is a mathematical way to describe groups of outcomes or events using symbols. In probability, it helps to write complex event combinations clearly and precisely.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a set like a basket holding different types of fruit. Set notation helps us describe which fruits are in the basket and how baskets can combine or overlap.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Consider event A as 'rolling an even number' on a die: A = {2,4,6}.</span>",
        "<span>Set notation helps us collect and describe these outcomes clearly.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Union (∪) Symbol",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union symbol (∪) means 'or'. When we write A ∪ B, we include all outcomes that are in event A, or event B, or both together.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If Basket A has apples and Basket B has oranges, A ∪ B means all fruit in either Basket A or Basket B, including both apples and oranges.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Event A = {1,2,3}, Event B = {3,4,5}</span>",
        "<span>A ∪ B = {1,2,3,4,5} because it includes numbers in either A, B, or both.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Intersection (∩) Symbol",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection symbol (∩) means 'and'. A ∩ B includes only outcomes that appear in both event A and event B at the same time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If Basket A has apples and Basket B has green fruit, A ∩ B means the green apples found in both baskets.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Event A = {1,2,3}, Event B = {3,4,5}</span>",
        "<span>A ∩ B = {3} because 3 is the only number in both events.</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Complement (A') Symbol",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of an event A, written A', means all the outcomes in the sample space that are NOT in event A.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If Basket A has apples, A' means all fruit except apples — what is NOT in Basket A.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Sample space S = {1,2,3,4,5,6}, event A = {1,2,3}</span>",
        "<span>Complement A' = {4,5,6}, because these are outcomes NOT in A.</span>"
      ]
    }
  },
  "step5": {
    "title": "Expressing Probabilities Using Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">We write probabilities of events using set notation, such as P(A ∪ B) which means 'probability that A or B occurs', and P(A ∩ B) which means 'probability that both A and B occur'.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine combining baskets or finding common fruit — set notation represents these actions mathematically, and we calculate how likely they are.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given P(A) = 0.3, P(B) = 0.4, and P(A ∩ B) = 0.1</span>",
        "<span>P(A ∪ B) = P(A) + P(B) – P(A ∩ B) = 0.3 + 0.4 – 0.1 = 0.6</span>"
      ]
    }
  },
  "step6": {
    "title": "Using Venn Diagrams to Visualise Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Venn diagrams use circles to represent sets or events visually. Overlapping areas represent intersections (∩), combined areas represent unions (∪), and outside areas represent complements.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine overlapping hula hoops showing shared fruit between baskets — the overlap is the intersection, the total area covered is the union.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw two intersecting circles labeled A and B for two events.</span>",
        "<span>The overlap shows outcomes in A ∩ B; the combined area inside both circles is A ∪ B.</span>"
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the symbol ∪ represent in probability set notation?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Intersection (AND)</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Intersection means 'and', but ∪ means 'or'.</span>"
          },
          {
            "id": "b",
            "label": "<span>Union (OR)</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Union means all outcomes in A or B or both.</span>"
          },
          {
            "id": "c",
            "label": "<span>Complement (NOT)</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. Complement is written as A'.</span>"
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
        "sentence": "<span>The symbol <span class=\"font-semibold\">_____</span> means the outcomes that happen in both event A and event B.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "union",
                "label": "union (∪)",
                "isCorrect": false,
                "feedback": "<span>Try again. Union means 'or', not 'and'.</span>"
              },
              {
                "value": "intersection",
                "label": "intersection (∩)",
                "isCorrect": true,
                "feedback": "<span>Correct! Intersection is the overlap representing 'and'.</span>"
              },
              {
                "value": "complement",
                "label": "complement (A')",
                "isCorrect": false,
                "feedback": "<span>Try again. Complement means outcomes not in A.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step9": {
    "title": "Practice Question: Interpreting Set Notation",
    "practice": {
      "prompt": "<span>Given a sample space S = {1,2,3,4,5,6}, event A = {2,4,6}, event B = {4,5,6}, write down the sets for A ∪ B, A ∩ B, and A'.</span>",
      "hint": "<span>List all elements in each relevant set carefully, remembering the meaning of union, intersection, and complement.</span>",
      "mustHaveKeywords": ["A ∪ B", "A ∩ B", "A'"],
      "optionalKeywords": ["sample space", "outcomes"],
      "modelAnswer": "<span>A ∪ B = {2,4,5,6}, A ∩ B = {4,6}, A' = {1,3,5}</span>",
      "scaffoldPrompts": [
        "<span>First, find all outcomes in A or B for A ∪ B.</span>",
        "<span>Second, identify outcomes common to both A and B for A ∩ B.</span>",
        "<span>Third, find outcomes in S not in A for A'.</span>"
      ]
    }
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to use set notation and Venn diagrams to find the probability of 'A or B' and 'A and B'. Use P(A), P(B) and P(A ∩ B) in your explanation.</span>",
      "hint": "<span>Remember to define union and intersection, describe how Venn diagrams show these, and use the probability formula for P(A ∪ B).</span>",
      "mustHaveKeywords": ["union", "intersection", "P(A ∪ B)", "P(A ∩ B)", "Venn diagram"],
      "optionalKeywords": ["sample space", "overlap"],
      "modelAnswer": "<span>In set notation, 'A or B' is represented by the union A ∪ B, which includes all outcomes in A, B, or both. 'A and B' is represented by the intersection A ∩ B, which includes only outcomes in both A and B. Venn diagrams show these by overlapping circles where the overlapping area is A ∩ B and the total area covered by both circles is A ∪ B. To find the probability of 'A or B', use the formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B), which accounts for double counting the intersection. The probability of 'A and B' is given directly by P(A ∩ B).</span>",
      "scaffoldPrompts": [
        "<span>Define union (A ∪ B) and intersection (A ∩ B).</span>",
        "<span>Describe how the Venn diagram visually represents these sets.</span>",
        "<span>Explain the formula P(A ∪ B) = P(A) + P(B) – P(A ∩ B).</span>",
        "<span>State how P(A ∩ B) gives probability of both events occurring.</span>"
      ]
    }
  }
};