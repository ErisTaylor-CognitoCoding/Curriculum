window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.4 - Set notation for probability (Part 2)",
  "strapline": "Understanding and using set notation for probability including union, intersection, and complement symbols to calculate compound event probabilities.",
  "learningObjectives": [
    "Students should use set notation to represent probability events, including the symbols for union (∪), intersection (∩), and complement (A') (Maths 5.4)",
    "Students should calculate probabilities using set notation and interpret probability statements written in this mathematical language (Maths 5.4)",
    "Students should understand how to express compound events using Venn diagrams and set notation, such as P(A ∪ B) and P(A ∩ B) (Maths 5.4)"
  ],
  "keyFormulas": [
    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    "P(A') = 1 - P(A)",
    "P(A ∩ B) ≤ P(A) and P(A ∩ B) ≤ P(B)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='140' cy='150' r='70' fill='#95d5b2' fill-opacity='0.5' stroke='#2d6a4f' stroke-width='3'/><circle cx='260' cy='150' r='70' fill='#52b788' fill-opacity='0.5' stroke='#1b4332' stroke-width='3'/><text x='140' y='50' font-family='sans-serif' font-size='18' fill='#2d6a4f' text-anchor='middle'>Event A</text><text x='260' y='50' font-family='sans-serif' font-size='18' fill='#1b4332' text-anchor='middle'>Event B</text><text x='100' y='230' font-family='sans-serif' font-size='16' fill='#000'>A ∪ B</text><text x='200' y='180' font-family='sans-serif' font-size='16' fill='#000'>A ∩ B</text><rect x='10' y='10' width='380' height='280' fill='none' stroke='#000' stroke-width='1'/></svg>",
  "step1": {
    "title": "Concept: Understanding the Union (∪) of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union of two sets, A and B, written as <strong>A ∪ B</strong>, includes all outcomes that occur in either event A, event B, or both. In probability, <em>P(A ∪ B)</em> means the probability that either event A or event B (or both) happen.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two groups of friends: Group A plays football, and Group B plays basketball. The union group <em>A ∪ B</em> is all friends who play either football or basketball or both.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying A ∪ B",
      "problem": "Given sets A = {1, 2, 3} and B = {3, 4, 5}, find A ∪ B.",
      "questions": [
        {
          "id": "q1",
          "prompt": "List the numbers in set A.",
          "answer": "1, 2, 3",
          "feedback": "Correct, set A contains 1, 2, and 3."
        },
        {
          "id": "q2",
          "prompt": "List the numbers in set B.",
          "answer": "3, 4, 5",
          "feedback": "Correct, set B contains 3, 4, and 5."
        },
        {
          "id": "q3",
          "prompt": "Combine all unique numbers from both sets to form A ∪ B.",
          "answer": "1, 2, 3, 4, 5",
          "feedback": "Correct! The union contains all numbers from both sets without duplicates."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding the Intersection (∩) of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection of two sets A and B, written as <strong>A ∩ B</strong>, contains all outcomes that occur in both sets simultaneously. In probability, <em>P(A ∩ B)</em> is the probability that both events happen at the same time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the friends example, the intersection <em>A ∩ B</em> is the group of friends who play both football and basketball.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying A ∩ B",
      "problem": "Using sets A = {1, 2, 3} and B = {3, 4, 5}, find A ∩ B.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which numbers appear in both sets A and B?",
          "answer": "3",
          "feedback": "Correct, 3 is the only number in both sets."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding the Complement (A') of an Event",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of event A, written as <strong>A'</strong>, includes all outcomes not in A. In probability, <em>P(A')</em> means the probability that event A does not happen. The probabilities of A and its complement add up to 1: <em>P(A) + P(A') = 1</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a jar of marbles: if event A is picking a red marble, then the complement A' is picking any marble that is not red.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding P(A')",
      "problem": "If the probability of event A happening is 0.6, find P(A').",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of P(A)?",
          "answer": "0.6",
          "feedback": "Correct, P(A) is given as 0.6."
        },
        {
          "id": "q2",
          "prompt": "Using the formula P(A') = 1 - P(A), calculate P(A').",
          "answer": "0.4",
          "feedback": "Correct, 1 - 0.6 equals 0.4."
        }
      ]
    }
  },
  "step4": {
    "title": "Calculating Probability of Union Using Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the probability of the union of two events <strong>A ∪ B</strong>, use the formula: <em>P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</em>. This subtracts the overlap to avoid double counting.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Counting students who play football (A) or basketball (B): add those who play football and those who play basketball, then subtract those who play both (A ∩ B) because they were counted twice.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate P(A ∪ B)",
      "problem": "If P(A) = 0.5, P(B) = 0.4, and P(A ∩ B) = 0.2, calculate P(A ∪ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A) + P(B)?",
          "answer": "0.9",
          "feedback": "Correct, 0.5 + 0.4 = 0.9."
        },
        {
          "id": "q2",
          "prompt": "Subtract P(A ∩ B) from the sum. What is the result?",
          "answer": "0.7",
          "feedback": "Correct, 0.9 - 0.2 = 0.7."
        },
        {
          "id": "q3",
          "prompt": "Write the final answer for P(A ∪ B).",
          "answer": "0.7",
          "feedback": "Correct, P(A ∪ B) is 0.7."
        }
      ]
    }
  },
  "step5": {
    "title": "Expressing Compound Events Using Venn Diagrams and Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Venn diagrams help visualize relationships between events. Use circles to show sets A and B, overlapping where they intersect. Combined with set notation, you can write probabilities such as <em>P(A ∪ B)</em> and <em>P(A ∩ B)</em> directly from the diagram.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two overlapping circles representing friends who like tea (A) and friends who like coffee (B). The overlapping region shows friends who like both.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Interpreting Venn Diagram Probabilities",
      "problem": "In a Venn diagram, the probabilities are: P(A) = 0.6, P(B) = 0.5, and P(A ∩ B) = 0.3. Find P(A ∪ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate P(A) + P(B).",
          "answer": "1.1",
          "feedback": "Correct, 0.6 + 0.5 = 1.1."
        },
        {
          "id": "q2",
          "prompt": "Subtract P(A ∩ B) from the sum to find P(A ∪ B).",
          "answer": "0.8",
          "feedback": "Correct, 1.1 - 0.3 = 0.8."
        }
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which set notation represents all outcomes that are in event A but not in event B?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>A ∩ B</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Intersection means outcomes in both A and B."
          },
          {
            "id": "b",
            "label": "<span>A ∪ B</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Union means outcomes in A or B or both."
          },
          {
            "id": "c",
            "label": "<span>A \\ B or A minus B</span>",
            "isCorrect": true,
            "explanation": "Correct! It means outcomes in A but not in B."
          },
          {
            "id": "d",
            "label": "<span>A'</span>",
            "isCorrect": false,
            "explanation": "Incorrect. A' is the complement of A."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>What is P(A') if P(A) = 0.25?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>0.75</span>",
            "isCorrect": true,
            "explanation": "Correct. P(A') = 1 - 0.25 = 0.75."
          },
          {
            "id": "b",
            "label": "<span>1.25</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Probability cannot be greater than 1."
          },
          {
            "id": "c",
            "label": "<span>0.25</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This is P(A), not P(A')."
          },
          {
            "id": "d",
            "label": "<span>0</span>",
            "isCorrect": false,
            "explanation": "Incorrect. P(A') is not zero unless P(A) = 1."
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The symbol for the <span class=\"font-semibold\">_____</span> of two events is ∩.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "union",
                "label": "union",
                "isCorrect": false,
                "feedback": "Incorrect. The union uses the symbol ∪."
              },
              {
                "value": "intersection",
                "label": "intersection",
                "isCorrect": true,
                "feedback": "Correct! The intersection symbol is ∩."
              },
              {
                "value": "complement",
                "label": "complement",
                "isCorrect": false,
                "feedback": "Incorrect. Complement is denoted by A'."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>P(A') represents the probability of the <span class=\"font-semibold\">_____</span> of event A.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "union",
                "label": "union",
                "isCorrect": false,
                "feedback": "Incorrect. Union refers to A ∪ B."
              },
              {
                "value": "intersection",
                "label": "intersection",
                "isCorrect": false,
                "feedback": "Incorrect. Intersection refers to A ∩ B."
              },
              {
                "value": "complement",
                "label": "complement",
                "isCorrect": true,
                "feedback": "Correct! P(A') is the complement of event A."
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
      "prompt": "<span>Given two events A and B where P(A) = 0.6, P(B) = 0.5, and P(A ∩ B) = 0.3, calculate:</span><ul><li>P(A ∪ B)</li><li>P(A')</li></ul>",
      "hint": "Use the formulas: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) and P(A') = 1 - P(A).",
      "mustHaveKeywords": ["union", "complement", "subtract", "probability", "formula"],
      "optionalKeywords": ["Venn diagram", "intersection", "compound events"],
      "modelAnswer": "<span>First, calculate the union: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.6 + 0.5 - 0.3 = 0.8.<br/>Then, find the complement of A: P(A') = 1 - P(A) = 1 - 0.6 = 0.4.<br/>Therefore, P(A ∪ B) = 0.8 and P(A') = 0.4.</span>",
      "scaffoldPrompts": [
        "Recall the formula for the union of two events.",
        "Calculate the sum of P(A) and P(B).",
        "Subtract the intersection probability P(A ∩ B).",
        "Use the complement rule for P(A')."
      ]
    }
  }
};