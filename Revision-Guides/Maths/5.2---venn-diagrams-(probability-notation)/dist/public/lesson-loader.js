window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.2 - Venn diagrams (probability notation)",
  "strapline": "Use Venn diagrams to understand probability events with unions, intersections, complements and apply conditional probability in real-world contexts.",
  "learningObjectives": [
    "Students should use Venn diagrams to represent probability situations and apply correct probability notation including unions, intersections and complements of events (Maths 5.2)",
    "Students should understand conditional probability and calculate P(A|B), recognising how this differs from independent events (Maths 5.2)",
    "Students should apply the formula for conditional probability and interpret these probabilities in real-world contexts (Maths 5.2)"
  ],
  "keyFormulas": [
    "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
    "P(A') = 1 − P(A)",
    "P(A | B) = P(A ∩ B) / P(B), provided P(B) > 0"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <circle cx='140' cy='150' r='80' fill='#9ecae1' fill-opacity='0.5' stroke='#3182bd' />  <text x='140' y='50' font-family='sans-serif' font-size='20' fill='#3182bd' text-anchor='middle'>Event A</text>  <circle cx='260' cy='150' r='80' fill='#fdae6b' fill-opacity='0.5' stroke='#e6550d' />  <text x='260' y='50' font-family='sans-serif' font-size='20' fill='#e6550d' text-anchor='middle'>Event B</text>  <text x='80' y='280' font-family='sans-serif' font-size='14'>A ∪ B area: all shaded parts</text>  <text x='80' y='300' font-family='sans-serif' font-size='14'>A ∩ B area: overlapping region</text>  </svg>",
  "step1": {
    "title": "Concept: Understanding Union of Events (A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union <strong>A ∪ B</strong> represents the event that either <em>A</em>, or <em>B</em>, or both happen. On a Venn diagram, it's the total area covered by both circles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two friends inviting guests to a party. The union is everyone invited by either friend or both.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating P(A ∪ B)",
      "problem": "Events A and B have probabilities P(A) = 0.5 and P(B) = 0.4, overlap P(A ∩ B) = 0.2. Find P(A ∪ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the probability of event A? Enter the value for P(A).",
          "answer": "0.5",
          "feedback": "Correct. P(A) = 0.5."
        },
        {
          "id": "q2",
          "prompt": "What is the probability of event B? Enter the value for P(B).",
          "answer": "0.4",
          "feedback": "Correct. P(B) = 0.4."
        },
        {
          "id": "q3",
          "prompt": "What is the probability that both A and B occur? Enter P(A ∩ B).",
          "answer": "0.2",
          "feedback": "Correct, P(A ∩ B) = 0.2."
        },
        {
          "id": "q4",
          "prompt": "Use the formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Calculate and enter P(A ∪ B).",
          "answer": "0.7",
          "feedback": "Correct! P(A ∪ B) = 0.5 + 0.4 - 0.2 = 0.7."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Intersection of Events (A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection <strong>A ∩ B</strong> represents the event that <em>both</em> events <em>A</em> and <em>B</em> happen at the same time. It is the overlapping part of the circles in the Venn diagram.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the overlapping guests who were invited by both friends to the party.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding P(A ∩ B)",
      "problem": "Suppose P(A) = 0.6 and P(B) = 0.5, and P(A ∪ B) = 0.8. Find P(A ∩ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Type the value of P(A).",
          "answer": "0.6",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Type the value of P(B).",
          "answer": "0.5",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Type the value of P(A ∪ B).",
          "answer": "0.8",
          "feedback": "Correct."
        },
        {
          "id": "q4",
          "prompt": "Formula: P(A ∩ B) = P(A) + P(B) - P(A ∪ B). Calculate and enter P(A ∩ B).",
          "answer": "0.3",
          "feedback": "Yes! P(A ∩ B) = 0.6 + 0.5 - 0.8 = 0.3."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Complement of an Event (A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement <strong>A'</strong> means that event <em>A</em> does <em>not</em> happen. It's shown on a Venn diagram as everything outside circle A.</p><p>P(A') = 1 − P(A)</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If 'A' is the set of guests who accepted the invitation, 'A&#39;' represents those who declined or didn&#39;t respond.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding a Complement Probability",
      "problem": "If P(A) = 0.35, what is P(A')?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the value of P(A).",
          "answer": "0.35",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Calculate P(A') = 1 − P(A). Enter your answer.",
          "answer": "0.65",
          "feedback": "Well done! P(A') = 1 − 0.35 = 0.65."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Conditional Probability P(A | B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability <strong>P(A | B)</strong> is the probability that event <em>A</em> happens given that event <em>B</em> has already happened. It is written as <em>P(A | B) = P(A ∩ B) / P(B)</em>, assuming P(B) > 0.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you know a guest came to the party (event B), what is the probability that they also stayed for dinner (event A)?</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Conditional Probability",
      "problem": "Given P(A ∩ B) = 0.25 and P(B) = 0.5, calculate P(A | B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the value of P(A ∩ B).",
          "answer": "0.25",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Enter the value of P(B).",
          "answer": "0.5",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A | B) = P(A ∩ B) / P(B). Enter your answer.",
          "answer": "0.5",
          "feedback": "Well done! P(A | B) = 0.25 / 0.5 = 0.5."
        }
      ]
    }
  },
  "step5": {
    "title": "Concept: Distinguishing Conditional Probability and Independence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two events are <em>independent</em> if the occurrence of one does not affect the probability of the other: <strong>P(A | B) = P(A)</strong>. If <em>P(A | B) ≠ P(A)</em>, then they are <em>dependent</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Flipping a coin twice is independent; getting heads on the first toss doesn't affect the second. But if you pick a card from a deck without replacement, the second pick depends on the first.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Check if Two Events are Independent",
      "problem": "Given P(A) = 0.4, P(A | B) = 0.4, are events A and B independent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A)? Enter the value.",
          "answer": "0.4",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "What is P(A | B)? Enter the value.",
          "answer": "0.4",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Are events A and B independent (P(A | B) = P(A))? Type 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Correct! Since P(A | B) = P(A), A and B are independent."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A school survey finds that 30% of students play football (event F), 40% play basketball (event B), and 10% play both football and basketball. </span><br/><span>Using Venn diagrams and probability notation, calculate:</span><br/><ol><li>P(F ∪ B)</li><li>The probability a student plays neither football nor basketball.</li><li>The conditional probability P(F | B).</li></ol>",
      "hint": "Recall P(F ∪ B) = P(F) + P(B) - P(F ∩ B) and P(neither) = 1 - P(F ∪ B). Use P(F | B) = P(F ∩ B) / P(B).",
      "mustHaveKeywords": ["Venn diagram", "P(F ∪ B)", "P(neither)", "P(F | B)", "conditional probability"],
      "optionalKeywords": ["probability notation", "complement"],
      "modelAnswer": "<span>Use the formula for union: P(F ∪ B) = 0.3 + 0.4 - 0.1 = 0.6.<br/>Probability of neither = 1 - 0.6 = 0.4.<br/>Conditional probability P(F | B) = P(F ∩ B) / P(B) = 0.1 / 0.4 = 0.25.<br/>Represent these visually using a Venn diagram with overlapping circles for events F and B.</span>",
      "scaffoldPrompts": [
        "Draw two overlapping circles and label them F and B.",
        "Write down the given probabilities inside and outside the circles.",
        "Calculate P(F ∪ B) using the formula.",
        "Calculate the complement probability for students playing neither sport.",
        "Use the conditional probability formula to find P(F | B)."
      ]
    }
  }
};