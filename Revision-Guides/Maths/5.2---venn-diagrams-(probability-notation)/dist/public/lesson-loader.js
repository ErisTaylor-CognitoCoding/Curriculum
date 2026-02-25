window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.2 - Venn diagrams (probability notation)",
  "strapline": "Use Venn diagrams to visualize probability events and apply notation for unions, intersections, complements, and conditional probability.",
  "learningObjectives": [
    "Students should use Venn diagrams to represent probability situations and apply correct probability notation including unions, intersections and complements of events (Maths 5.2)",
    "Students should understand conditional probability and calculate P(A|B), recognising how this differs from independent events (Maths 5.2)",
    "Students should apply the formula for conditional probability and interpret these probabilities in real-world contexts (Maths 5.2)"
  ],
  "keyFormulas": [
    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    "P(A') = 1 - P(A)",
    "P(A|B) = P(A ∩ B) / P(B)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <circle cx='140' cy='150' r='80' fill='rgba(0,123,255,0.3)' stroke='#007bff' stroke-width='2'/>\n  <circle cx='260' cy='150' r='80' fill='rgba(255,193,7,0.3)' stroke='#ffc107' stroke-width='2'/>\n  <text x='140' y='60' font-family='sans-serif' font-size='18' fill='#007bff' text-anchor='middle'>A</text>\n  <text x='260' y='60' font-family='sans-serif' font-size='18' fill='#ffc107' text-anchor='middle'>B</text>\n  <text x='100' y='295' font-family='sans-serif' font-size='14' fill='#333'>Circle A</text>\n  <text x='240' y='295' font-family='sans-serif' font-size='14' fill='#333'>Circle B</text>\n</svg>",
  "step1": {
    "title": "Concept: Understanding the Union of Events (A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>union</strong> of two events A and B, written as <em>A ∪ B</em>, means <em>either A happens, or B happens, or both happen</em>. In a Venn diagram, this is shown as all the space covered by both circles combined.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two overlapping groups of friends at a party. The union is everyone who belongs to either group or both.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding P(A ∪ B)",
      "problem": "In a class, 40% of students like apples (A), 50% like bananas (B), and 20% like both apples and bananas. Find the probability that a student likes apples or bananas.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A)?",
          "answer": "0.40",
          "feedback": "Correct. 40% is 0.40 as a probability."
        },
        {
          "id": "q2",
          "prompt": "What is P(B)?",
          "answer": "0.50",
          "feedback": "Correct. 50% is 0.50."
        },
        {
          "id": "q3",
          "prompt": "What is P(A ∩ B)?",
          "answer": "0.20",
          "feedback": "Good. 20% is 0.20."
        },
        {
          "id": "q4",
          "prompt": "Calculate P(A ∪ B) using the formula: P(A) + P(B) - P(A ∩ B). What do you get?",
          "answer": "0.70",
          "feedback": "Well done! 0.40 + 0.50 - 0.20 = 0.70"
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Intersection of Events (A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>intersection</strong> of two events, written <em>A ∩ B</em>, is the probability that both event A and event B happen at the same time. In a Venn diagram, this is the overlapping area of the two circles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two groups of friends who like apples and bananas. The intersection are the friends who like <em>both</em> fruits.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding P(A ∩ B)",
      "problem": "If the probability a student likes apples is 0.40, bananas is 0.50, and the union probability is 0.70, what is P(A ∩ B)?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Use the formula: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Rearrange to find P(A ∩ B). Write the rearranged formula.",
          "answer": "P(A ∩ B) = P(A) + P(B) - P(A ∪ B)",
          "feedback": "Correct! You isolate the intersection by subtracting the union from the sum."
        },
        {
          "id": "q2",
          "prompt": "Calculate P(A ∩ B) using values: 0.40 + 0.50 - 0.70",
          "answer": "0.20",
          "feedback": "Good job! The intersection is 0.20."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Complement of an Event (A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>complement</strong> of an event A, written <em>A'</em>, is the probability that event A does not happen. It includes <em>everything outside</em> circle A in a Venn diagram.</p><p>We calculate it by this formula: <strong>P(A') = 1 - P(A)</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If 40% of students like apples, then 60% do not like apples. Those 60% form the complement.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating P(A')",
      "problem": "If P(A) = 0.4, what is P(A')?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the formula to find P(A').",
          "answer": "1 - P(A)",
          "feedback": "Correct. The complement is 1 minus the event probability."
        },
        {
          "id": "q2",
          "prompt": "Calculate P(A') given P(A) = 0.4.",
          "answer": "0.6",
          "feedback": "Good! P(A') = 1 - 0.4 = 0.6."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Conditional Probability and Notation P(A|B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability, written as <em>P(A|B)</em>, is the probability that event A happens given that event B has already happened. It is <em>different</em> from independent events, where one does not affect the other.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a student is known to like bananas (event B), what is the chance they also like apples (event A)? That is P(A|B).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Conditional Probability",
      "problem": "Given P(A ∩ B) = 0.20 and P(B) = 0.50, find P(A|B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the formula for conditional probability: P(A|B) = ?",
          "answer": "P(A ∩ B) / P(B)",
          "feedback": "Correct! Conditional probability is intersection divided by the given event."
        },
        {
          "id": "q2",
          "prompt": "Substitute values into the formula.",
          "answer": "0.20 / 0.50",
          "feedback": "Good! Replace with actual values."
        },
        {
          "id": "q3",
          "prompt": "Calculate the result (decimal).",
          "answer": "0.4",
          "feedback": "Well done! P(A|B) = 0.4."
        }
      ]
    }
  },
  "step5": {
    "title": "Interpreting Conditional Probability vs Independence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If events A and B are independent, P(A|B) = P(A) because B happening does not affect the chance of A.</p><p>If P(A|B) ≠ P(A), then A and B are dependent events.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Whether you like apples is independent of liking bananas if liking bananas doesn't change your apple liking probability.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Checking Independence",
      "problem": "If P(A) = 0.4 and P(A|B) = 0.4, are events A and B independent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Compare P(A) and P(A|B). Are they the same?",
          "answer": "Yes",
          "feedback": "Correct! Both probabilities are equal."
        },
        {
          "id": "q2",
          "prompt": "What does that imply about independence?",
          "answer": "Events are independent",
          "feedback": "Well done! If conditioned probability equals original, events are independent."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A survey shows that 30% of people like tea (event T), 40% like coffee (event C), and 15% like both tea and coffee. Using Venn diagrams, calculate:</span><ol><li>P(T ∪ C)</li><li>P(T' )</li><li>P(T|C)</li></ol>",
      "hint": "Use formulas for unions, complements, and conditional probabilities. Interpret the Venn diagram carefully.",
      "mustHaveKeywords": ["union", "complement", "conditional probability", "intersection"],
      "optionalKeywords": ["Venn diagram", "probability notation"],
      "modelAnswer": "<span>To find P(T ∪ C), use P(T) + P(C) - P(T ∩ C) = 0.30 + 0.40 - 0.15 = 0.55. The complement P(T') = 1 - 0.30 = 0.70. The conditional probability P(T|C) = P(T ∩ C)/P(C) = 0.15/0.40 = 0.375.</span>",
      "scaffoldPrompts": ["Recall the formula for union of two events.", "Remember the complement formula: 1 minus event probability.", "Calculate conditional probability as intersection over given event."]
    }
  }
};