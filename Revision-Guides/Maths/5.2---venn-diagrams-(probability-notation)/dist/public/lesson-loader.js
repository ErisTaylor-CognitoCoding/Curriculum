window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.2 - Venn diagrams (probability notation)",
  "strapline": "Use Venn diagrams to visualise probability events and apply notation for unions, intersections, complements, and conditional probability.",
  "learningObjectives": [
    "Students should use Venn diagrams to represent probability situations and apply correct probability notation including unions, intersections and complements of events (Maths 5.2)",
    "Students should understand conditional probability and calculate P(A|B), recognising how this differs from independent events (Maths 5.2)",
    "Students should apply the formula for conditional probability and interpret these probabilities in real-world contexts (Maths 5.2)"
  ],
  "keyFormulas": [
    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    "P(A') = 1 - P(A)",
    "P(A|B) = P(A ∩ B) / P(B), where P(B) > 0"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <circle cx='150' cy='150' r='80' fill='#add8e6' fill-opacity='0.5' stroke='#005f99' stroke-width='2'/>\
    <text x='150' y='80' text-anchor='middle' font-family='sans-serif' font-size='20' fill='#005f99'>A</text>\
    <circle cx='250' cy='150' r='80' fill='#f08080' fill-opacity='0.5' stroke='#990000' stroke-width='2'/>\
    <text x='250' y='80' text-anchor='middle' font-family='sans-serif' font-size='20' fill='#990000'>B</text>\
    <text x='120' y='270' font-family='sans-serif' font-size='14'>Union (A ∪ B): Both circles combined</text>\
    <text x='120' y='290' font-family='sans-serif' font-size='14'>Intersection (A ∩ B): Overlapping area</text>\
    </svg>",
  "step1": {
    "title": "Concept: Understanding the Union of Events (A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>union</strong> of two events A and B, written as <strong>A ∪ B</strong>, represents the probability that either event A happens, or event B happens, or both happen. In a Venn diagram, this is the total area covered by the two circles representing A and B combined.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of A and B as two groups of friends at a party. The union is all the people who are in group A, or in group B, or in both groups.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Calculating P(A ∪ B)",
      "problem": "A survey shows P(A) = 0.4 and P(B) = 0.5 with P(A ∩ B) = 0.2. Calculate P(A ∪ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of P(A)?",
          "answer": "0.4",
          "feedback": "Correct, P(A) is given as 0.4."
        },
        {
          "id": "q2",
          "prompt": "What is the value of P(B)?",
          "answer": "0.5",
          "feedback": "Correct, P(B) is given as 0.5."
        },
        {
          "id": "q3",
          "prompt": "What is the value of the intersection P(A ∩ B)?",
          "answer": "0.2",
          "feedback": "Correct, the overlap is 0.2."
        },
        {
          "id": "q4",
          "prompt": "Using the formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B), calculate P(A ∪ B).",
          "answer": "0.7",
          "feedback": "Well done! 0.4 + 0.5 - 0.2 = 0.7."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Intersection of Events (A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>intersection</strong> of two events A and B, written as <strong>A ∩ B</strong>, represents the probability that both events happen at the same time. On a Venn diagram, this is the overlap area of both circles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it as the people who are in both friend groups A and B at the party.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Find Intersection probability",
      "problem": "Given a Venn diagram where P(A ∪ B) = 0.8, P(A) = 0.5 and P(B) = 0.6, calculate P(A ∩ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify P(A ∪ B).",
          "answer": "0.8",
          "feedback": "Correct, the union probability is 0.8."
        },
        {
          "id": "q2",
          "prompt": "Identify P(A).",
          "answer": "0.5",
          "feedback": "Correct, P(A) is 0.5."
        },
        {
          "id": "q3",
          "prompt": "Identify P(B).",
          "answer": "0.6",
          "feedback": "Good, P(B) is 0.6."
        },
        {
          "id": "q4",
          "prompt": "Use the formula: P(A ∩ B) = P(A) + P(B) - P(A ∪ B). Calculate P(A ∩ B).",
          "answer": "0.3",
          "feedback": "Exactly right! 0.5 + 0.6 - 0.8 = 0.3."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding the Complement of an Event (A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>complement</strong> of event A, written as <strong>A'</strong>, is the probability that event A <em>does not</em> occur. In a Venn diagram, this is the area outside circle A.</p><p>P(A') is calculated as 1 minus P(A).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A represents the people who brought a gift, A' represents those who did not.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Calculating P(A')",
      "problem": "If P(A) = 0.65, find the probability of the complement, P(A').",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A)?",
          "answer": "0.65",
          "feedback": "Correct, P(A) is 0.65."
        },
        {
          "id": "q2",
          "prompt": "Calculate P(A') = 1 - P(A). What is P(A')?",
          "answer": "0.35",
          "feedback": "Well done. 1 - 0.65 = 0.35."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Introduction to Conditional Probability P(A|B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability, written as <strong>P(A|B)</strong>, is the probability of event A occurring given that event B has already occurred. It focuses on a smaller sample space restricted to B.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If B is the group of people wearing glasses, P(A|B) is the probability of a person also having a pet, given they're wearing glasses.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Calculate P(A|B)",
      "problem": "Given P(A ∩ B) = 0.15 and P(B) = 0.25, find P(A|B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A ∩ B)?",
          "answer": "0.15",
          "feedback": "Correct, P(A ∩ B) is 0.15."
        },
        {
          "id": "q2",
          "prompt": "What is P(B)?",
          "answer": "0.25",
          "feedback": "Good, P(B) is 0.25."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A|B) = P(A ∩ B) / P(B). What value do you get?",
          "answer": "0.6",
          "feedback": "Well done! 0.15 / 0.25 = 0.6."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Difference Between Conditional Probability and Independent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Events A and B are <strong>independent</strong> if the occurrence of B does not affect the probability of A. This means <em>P(A|B) = P(A)</em>. If <em>P(A|B) ≠ P(A)</em>, the events are dependent.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Flipping a coin is independent of rolling a die; flipping heads doesn't affect rolling a 6.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Determine Dependence",
      "problem": "If P(A) = 0.4 and P(A|B) = 0.6, are A and B independent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A)?",
          "answer": "0.4",
          "feedback": "Correct, P(A) is 0.4."
        },
        {
          "id": "q2",
          "prompt": "What is P(A|B)?",
          "answer": "0.6",
          "feedback": "Right, given as 0.6."
        },
        {
          "id": "q3",
          "prompt": "Are the events independent? (Type 'yes' or 'no')",
          "answer": "no",
          "feedback": "Correct, since P(A|B) ≠ P(A), events are dependent."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>In a group of students, 40% like football (event A) and 50% like basketball (event B). The probability that a student likes both sports is 20%. Calculate:</span><ol><li>P(A ∪ B)</li><li>The complement of liking football, P(A')</li><li>The conditional probability P(A|B)</li></ol>",
      "hint": "Use the formulas for union, complement, and conditional probability. Remember P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
      "mustHaveKeywords": ["union", "complement", "conditional probability", "P(A ∪ B)", "P(A')", "P(A|B)"],
      "optionalKeywords": ["Venn diagram", "intersection"],
      "modelAnswer": "<span>First, calculate P(A ∪ B) = 0.4 + 0.5 - 0.2 = 0.7.<br>Second, the complement P(A') = 1 - 0.4 = 0.6.<br>Third, conditional probability P(A|B) = P(A ∩ B) / P(B) = 0.2 / 0.5 = 0.4.</span>",
      "scaffoldPrompts": [
        "Identify given probabilities P(A), P(B), and P(A ∩ B).",
        "Apply the union formula to find P(A ∪ B).",
        "Calculate the complement of P(A).",
        "Apply conditional probability formula for P(A|B)."
      ]
    }
  }
};