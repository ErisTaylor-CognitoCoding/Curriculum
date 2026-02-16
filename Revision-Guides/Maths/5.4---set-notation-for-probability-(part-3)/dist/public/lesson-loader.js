window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.4 - Set notation for probability (Part 3)",
  "strapline": "Understanding how to use set notation to represent and calculate probabilities of compound events.",
  "learningObjectives": [
    "Students should use set notation to represent probability events, including the symbols for union (∪), intersection (∩), and complement (A') (Maths 5.4)",
    "Students should express compound events using Venn diagrams and set notation, such as P(A ∪ B) and P(A ∩ B) (Maths 5.4)",
    "Students should calculate probabilities using set notation and interpret probability statements written in this mathematical language (Maths 5.4)"
  ],
  "keyFormulas": [
    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) (Probability of union)",
    "P(A ∩ B) = P(A) × P(B) if A and B are independent (Probability of intersection of independent events)",
    "P(A') = 1 - P(A) (Probability of complement)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='150' cy='150' r='80' fill='#a6dcef' stroke='#333' /><text x='150' y='80' text-anchor='middle' font-family='sans-serif' font-size='20'>A</text><circle cx='250' cy='150' r='80' fill='#f9a1a1' fill-opacity='0.6' stroke='#333' /><text x='250' y='80' text-anchor='middle' font-family='sans-serif' font-size='20'>B</text><text x='100' y='260' font-family='sans-serif' font-size='16'>Union (A ∪ B) = All inside either circle</text><text x='100' y='280' font-family='sans-serif' font-size='16'>Intersection (A ∩ B) = Overlapping area</text></svg>",
  "step1": {
    "title": "Concept: Union (∪) of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union of two events A and B, written as <strong>A ∪ B</strong>, represents all outcomes that are in A <em>or</em> in B or in both. The probability <strong>P(A ∪ B)</strong> is the chance of either event A or event B (or both) occurring.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the union as combining the members of two friend groups A and B. The union includes everyone who is in either group or both groups.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding P(A ∪ B)",
      "problem": "In a class, 30 students like football (event A), 20 students like basketball (event B), and 10 students like both sports. Find P(A ∪ B) if the total number of students is 50.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the number of students who like football (|A|):",
          "answer": "30",
          "feedback": "Correct! |A| = 30."
        },
        {
          "id": "q2",
          "prompt": "Enter the number of students who like basketball (|B|):",
          "answer": "20",
          "feedback": "Correct! |B| = 20."
        },
        {
          "id": "q3",
          "prompt": "Enter the number of students who like both sports (|A ∩ B|):",
          "answer": "10",
          "feedback": "Correct! |A ∩ B| = 10."
        },
        {
          "id": "q4",
          "prompt": "Calculate the number of students who like football or basketball or both: |A ∪ B| = |A| + |B| - |A ∩ B| = ?",
          "answer": "40",
          "feedback": "That's right! 30 + 20 - 10 = 40."
        },
        {
          "id": "q5",
          "prompt": "Calculate P(A ∪ B) = |A ∪ B| / total students:",
          "answer": "0.8",
          "feedback": "Well done! 40 / 50 = 0.8."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Intersection (∩) of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection of two events A and B, written as <strong>A ∩ B</strong>, represents all outcomes that are in both A and B simultaneously. The probability <strong>P(A ∩ B)</strong> is the chance that both events occur together.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A and B are two clubs, the intersection is the group of people who are members of both clubs.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating P(A ∩ B)",
      "problem": "Two dice are rolled. Event A is rolling an even number on die 1, event B is rolling a number greater than 3 on die 2. What is P(A ∩ B)?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many even numbers are there on die 1?",
          "answer": "3",
          "feedback": "Correct! Even numbers: 2, 4, 6."
        },
        {
          "id": "q2",
          "prompt": "How many numbers greater than 3 are there on die 2?",
          "answer": "3",
          "feedback": "Correct! Numbers: 4, 5, 6."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A) = number of favourable outcomes / total outcomes on die 1:",
          "answer": "0.5",
          "feedback": "Right! 3/6 = 0.5."
        },
        {
          "id": "q4",
          "prompt": "Calculate P(B) = number of favourable outcomes / total outcomes on die 2:",
          "answer": "0.5",
          "feedback": "Good! 3/6 = 0.5."
        },
        {
          "id": "q5",
          "prompt": "Assuming independence, calculate P(A ∩ B) = P(A) × P(B):",
          "answer": "0.25",
          "feedback": "Exactly! 0.5 × 0.5 = 0.25."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Complement (A') of an Event",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of an event A, written as <strong>A'</strong>, represents all outcomes that are not in A. The probability <strong>P(A')</strong> is the chance that event A does not occur. The formula is <strong>P(A') = 1 - P(A)</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is the event 'rain tomorrow', then A' is 'no rain tomorrow'.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding P(A')",
      "problem": "If the probability of drawing a red card from a deck is 0.3, what is the probability of NOT drawing a red card?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A) for drawing a red card?",
          "answer": "0.3",
          "feedback": "Correct, P(A) = 0.3."
        },
        {
          "id": "q2",
          "prompt": "Use the formula P(A') = 1 - P(A). Calculate P(A'):",
          "answer": "0.7",
          "feedback": "Well done! 1 - 0.3 = 0.7."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Expressing Compound Events with Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use Venn diagrams and set notation to express probabilities such as <strong>P(A ∪ B)</strong> and <strong>P(A ∩ B)</strong>. Recognise how these events relate in diagrams.</p>",
    "workedExample": {
      "title": "Worked Example: Venn Diagram Identification",
      "problem": "Given a Venn diagram of events A and B, shade the region that represents <strong>P(A ∪ B')</strong>. What does this notation mean?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which regions of the Venn diagram should be shaded to represent <strong>A ∪ B'</strong>?",
          "answer": "All of A plus outside B",
          "feedback": "Correct! Shade all of A and everything outside B."
        },
        {
          "id": "q2",
          "prompt": "Describe in words what <strong>P(A ∪ B')</strong> means.",
          "answer": "Probability of A or not B occurring",
          "feedback": "Exactly. It means event A happens or event B does not happen (or both)."
        }
      ]
    }
  },
  "step5": {
    "title": "Calculating Probability Using Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Calculate probabilities of compound events using the formulas for unions, intersections, and complements. Interpret what probability statements such as <strong>P(A ∩ B)</strong> and <strong>P(A')</strong> mean in context.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating P(A ∪ B) with Probabilities",
      "problem": "Events A and B have probabilities P(A) = 0.6, P(B) = 0.4 and P(A ∩ B) = 0.3. Find P(A ∪ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A) given?",
          "answer": "0.6",
          "feedback": "Correct, P(A) = 0.6."
        },
        {
          "id": "q2",
          "prompt": "What is P(B) given?",
          "answer": "0.4",
          "feedback": "Correct, P(B) = 0.4."
        },
        {
          "id": "q3",
          "prompt": "What is P(A ∩ B) given?",
          "answer": "0.3",
          "feedback": "Correct, P(A ∩ B) = 0.3."
        },
        {
          "id": "q4",
          "prompt": "Calculate P(A ∪ B) using formula: P(A) + P(B) - P(A ∩ B) = ?",
          "answer": "0.7",
          "feedback": "Great! 0.6 + 0.4 - 0.3 = 0.7."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A survey shows that 40% of people like tea (event T) and 50% like coffee (event C). 20% like both tea and coffee.</span><br><span>Using set notation, find the probability that a person chosen at random likes tea or coffee but NOT both.</span>",
      "hint": "Think about the union and intersection of T and C. Use the formula for union probabilities and subtract the intersection.",
      "mustHaveKeywords": ["union", "intersection", "P(T ∪ C)", "P(T ∩ C)", "complement", "probability"],
      "optionalKeywords": ["mutually exclusive", "Venn diagram"],
      "modelAnswer": "<span>First, find P(T ∪ C) = P(T) + P(C) - P(T ∩ C) = 0.4 + 0.5 - 0.2 = 0.7. The event 'tea or coffee but NOT both' is <em>either T only or C only</em>, which is <span>P(T ∪ C) - P(T ∩ C) = 0.7 - 0.2 = 0.5</span>.</span>",
      "scaffoldPrompts": [
        "Calculate P(T ∪ C) using the formula.",
        "Subtract P(T ∩ C) from the union to exclude those who like both."
      ]
    }
  }
};