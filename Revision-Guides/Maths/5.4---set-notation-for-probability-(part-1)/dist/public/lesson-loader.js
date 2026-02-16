window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.4 - Set notation for probability (Part 1)",
  "strapline": "Understanding how to use set notation and Venn diagrams to describe and calculate probabilities.",
  "learningObjectives": [
    "Students should be able to use set notation to represent probability events, including the symbols for union (∪), intersection (∩), and complement (A') (Maths 5.4)",
    "Students should be able to express compound events using Venn diagrams and set notation, such as P(A ∪ B) for the probability of A or B occurring, and P(A ∩ B) for the probability of both A and B occurring (Maths 5.4)",
    "Students should be able to calculate probabilities using set notation and interpret probability statements written in this mathematical language (Maths 5.4)"
  ],
  "keyFormulas": [
    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    "P(A') = 1 - P(A)",
    "P(A ∩ B) ≤ P(A) and P(A ∩ B) ≤ P(B)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='140' cy='150' r='80' fill='#AED6F1' fill-opacity='0.5' stroke='#21618C' stroke-width='3'/><circle cx='260' cy='150' r='80' fill='#F5B7B1' fill-opacity='0.5' stroke='#C0392B' stroke-width='3'/><text x='90' y='150' font-family='sans-serif' font-size='20' fill='#21618C'>A</text><text x='310' y='150' font-family='sans-serif' font-size='20' fill='#C0392B'>B</text></svg>",
  "step1": {
    "title": "Concept: Introduction to Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Set notation is a concise way to describe groups of outcomes in probability using special symbols. It helps us write and analyse event relationships clearly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a basket of fruits. Using set notation is like grouping apples and oranges separately so you can easily talk about all apples, all oranges, or fruits that are both apples and oranges (if that were possible).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Event Sets",
      "problem": "Suppose event A is 'rolling an even number on a dice' and event B is 'rolling a number greater than 3'. Represent A and B using set notation.",
      "questions": [
        {
          "id": "q1",
          "prompt": "List the outcomes for event A (even numbers from 1 to 6) as a set.",
          "answer": "{2, 4, 6}",
          "feedback": "Correct! Even numbers on a dice are 2, 4, and 6."
        },
        {
          "id": "q2",
          "prompt": "List the outcomes for event B (numbers greater than 3).",
          "answer": "{4, 5, 6}",
          "feedback": "Good! Numbers greater than 3 are 4, 5, and 6."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Union (∪) of Sets",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union symbol (∪) means 'or'. When combining events A and B using A ∪ B, we include all outcomes in A, all outcomes in B, and avoid counting any twice.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A represents people who like football, and B represents people who like basketball, then A ∪ B includes everyone who likes either football, basketball, or both.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find A ∪ B",
      "problem": "Using sets A = {2, 4, 6} and B = {4, 5, 6}, write down A ∪ B.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Combine the outcomes of A and B without repeats.",
          "answer": "{2, 4, 5, 6}",
          "feedback": "Correct. Include all unique outcomes from both sets."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Intersection (∩) of Sets",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection symbol (∩) means 'and'. A ∩ B contains only the outcomes that are present in both event A and event B.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is students who speak English and B is students who speak French, A ∩ B represents students who speak both English and French.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find A ∩ B",
      "problem": "Using sets A = {2, 4, 6} and B = {4, 5, 6}, write A ∩ B.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify outcomes common to both A and B.",
          "answer": "{4, 6}",
          "feedback": "Great! These outcomes appear in both sets."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Complement (A') of a Set",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of A, written as A', represents all the outcomes that are NOT in event A but are in the sample space.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is 'all students wearing glasses', A' is 'all students NOT wearing glasses' in the same group.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find A'",
      "problem": "If the sample space for rolling a dice is {1,2,3,4,5,6} and A = {2, 4, 6}, find A'.",
      "questions": [
        {
          "id": "q1",
          "prompt": "List all outcomes in the sample space not in A.",
          "answer": "{1, 3, 5}",
          "feedback": "Correct. These outcomes are outside event A."
        }
      ]
    }
  },
  "step5": {
    "title": "Using Venn Diagrams with Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Venn diagrams visually represent events and their relationships like union, intersection, and complement helping us understand probability calculations.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two overlapping circles where different coloured regions represent different event areas, showing how events overlap or stay separate.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Shade A ∪ B",
      "problem": "Look at the Venn diagram and shade the area representing A ∪ B.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which areas must be shaded? (Write 'A only', 'B only', 'Both')",
          "answer": "A only, B only, Both",
          "feedback": "Perfect! The union includes all parts of A and B."
        }
      ]
    }
  },
  "step6": {
    "title": "Calculate Probability Using Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">We can use set notation to compute probabilities for compound events like P(A ∪ B), P(A ∩ B), and the complement P(A').</p>",
    "workedExample": {
      "title": "Worked Example: Calculate P(A ∪ B)",
      "problem": "Given P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2, find P(A ∪ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the formula for P(A ∪ B).",
          "answer": "P(A) + P(B) - P(A ∩ B)",
          "feedback": "Correct! This formula avoids double counting the intersection."
        },
        {
          "id": "q2",
          "prompt": "Substitute given values into the formula.",
          "answer": "0.4 + 0.5 - 0.2",
          "feedback": "Great substitution."
        },
        {
          "id": "q3",
          "prompt": "Calculate the value.",
          "answer": "0.7",
          "feedback": "Correct. P(A ∪ B) = 0.7"
        }
      ]
    }
  },
  "step7": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the symbol A ∩ B represent in probability?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The probability of A or B occurring</span>",
            "isCorrect": false,
            "explanation": "That's the union, not the intersection."
          },
          {
            "id": "b",
            "label": "<span>The probability of both A and B occurring</span>",
            "isCorrect": true,
            "explanation": "Correct! Intersection means both events happen."
          },
          {
            "id": "c",
            "label": "<span>The complement of A</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Complement is written as A'."
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
        "sentence": "<span>The symbol <span class=\"font-semibold\">_____</span> means 'or' when combining two sets.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "union",
                "label": "∪ (Union)",
                "isCorrect": true,
                "feedback": "Correct! The union symbol means 'or'."
              },
              {
                "value": "intersection",
                "label": "∩ (Intersection)",
                "isCorrect": false,
                "feedback": "Try again. Intersection means 'and'."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The set <span class=\"font-semibold\">_____</span> contains all outcomes not in event A.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "complement",
                "label": "A' (Complement)",
                "isCorrect": true,
                "feedback": "Correct! Complement means 'not in A'."
              },
              {
                "value": "union",
                "label": "A ∪ B (Union)",
                "isCorrect": false,
                "feedback": "Try again. Union means 'or'."
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
      "prompt": "<span>Describe how to use set notation and Venn diagrams to find the probability of either event A or event B (or both) happening, and calculate this probability given values for P(A), P(B), and P(A ∩ B).</span>",
      "hint": "Remember to use the formula for union of two events and explain the meaning of each symbol in your answer.",
      "mustHaveKeywords": ["set notation", "union", "P(A ∪ B)", "P(A) + P(B) - P(A ∩ B)"],
      "optionalKeywords": ["Venn diagram", "overlap", "intersection", "compound events"],
      "modelAnswer": "<span>To find the probability of event A or event B or both occurring, we use set notation with the union symbol ∪, written as P(A ∪ B). This means the probability of A or B happening. Using a Venn diagram, we represent events A and B as overlapping circles. The union includes all areas inside A, inside B, and their overlap. The formula to calculate this is P(A ∪ B) = P(A) + P(B) - P(A ∩ B), where P(A) and P(B) are the probabilities of each event separately, and P(A ∩ B) is the probability of both events happening together. We subtract P(A ∩ B) to avoid double counting the overlap.</span>",
      "scaffoldPrompts": [
        "Start by explaining what P(A ∪ B) means in terms of 'or' events.",
        "Describe how the Venn diagram shows the union of two events.",
        "Write down the formula linking P(A ∪ B), P(A), P(B), and P(A ∩ B).",
        "Explain why you subtract P(A ∩ B) in the formula.",
        "Conclude by describing how to calculate the value when given probabilities."
      ]
    }
  }
};