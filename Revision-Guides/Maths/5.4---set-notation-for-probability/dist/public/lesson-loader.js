window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.4 - Set notation for probability",
  "strapline": "Learn to represent and solve probability problems using set notation and Venn diagrams with union, intersection, and complement.",
  "learningObjectives": [
    "Students should use set notation including symbols for union (∪), intersection (∩), and complement (A') to represent combined events in probability (Maths 5.4)",
    "Students should calculate probabilities of combined events using set notation and Venn diagrams (Maths 5.4)",
    "Students should interpret and solve probability problems involving unions, intersections, and complements of events (Maths 5.4)"
  ],
  "keyFormulas": [
    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    "P(A') = 1 - P(A)",
    "P(A ∩ B) ≤ P(A), P(B)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#f9f9f9' stroke='#333' /><circle cx='150' cy='150' r='80' fill='#85C1E9' fill-opacity='0.5' stroke='#1B4F72' /><circle cx='250' cy='150' r='80' fill='#F1948A' fill-opacity='0.5' stroke='#922B21' /><text x='105' y='145' font-family='sans-serif' font-weight='bold' font-size='20' fill='#1B4F72'>A</text><text x='285' y='145' font-family='sans-serif' font-weight='bold' font-size='20' fill='#922B21'>B</text><text x='190' y='280' font-family='sans-serif' font-size='16'>Sample Space (S)</text></svg>",
  "step1": {
    "title": "Introducing Sample Space and Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>sample space</strong>, denoted by <em>S</em>, is the set of all possible outcomes in a probability experiment. We use set notation to describe events within this sample space.</p><p>For example, rolling a six-sided die has sample space <em>S = {1, 2, 3, 4, 5, 6}</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine all possible flavors of ice cream in a shop as the 'sample space'. Any chosen flavor is an 'event'.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Defining Sample Space",
      "problem": "What is the sample space when tossing a coin twice?",
      "questions": [
        {
          "id": "q1",
          "prompt": "List all possible outcomes in the sample space.",
          "answer": "{HH, HT, TH, TT}",
          "feedback": "Correct! These are all possible results of tossing a coin twice."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Union (A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Union (A ∪ B)</strong> means all outcomes that belong to <em>A</em>, or <em>B</em>, or both.</p><p>The probability <em>P(A ∪ B)</em> gives the chance that at least one of the events happens.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p>Think of two circles overlapping: the union covers everything inside both circles combined.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding a Union",
      "problem": "A and B are events in the sample space with <em>P(A) = 0.3</em> and <em>P(B) = 0.4</em>, and <em>P(A ∩ B) = 0.1</em>. Find <em>P(A ∪ B)</em>.",
      "questions": [
        {
          "id": "q2",
          "prompt": "Write the formula for P(A ∪ B).",
          "answer": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
          "feedback": "Great! You remembered the correct formula."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A) + P(B).",
          "answer": "0.3 + 0.4",
          "feedback": "Good, that's 0.7."
        },
        {
          "id": "q4",
          "prompt": "Subtract P(A ∩ B) = 0.1 from the sum.",
          "answer": "0.7 - 0.1",
          "feedback": "Correct, the result is 0.6."
        },
        {
          "id": "q5",
          "prompt": "What is P(A ∪ B)?",
          "answer": "0.6",
          "feedback": "Well done! The probability of the union is 0.6."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Intersection (A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Intersection (A ∩ B)</strong> means all outcomes that belong to <em>A</em> <em>and</em> <em>B</em> at the same time.</p><p>The probability <em>P(A ∩ B)</em> is the chance that both events occur together.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p>If A and B are two overlapping circles, the intersection is the overlapping region only.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Intersection on a Venn Diagram",
      "problem": "Look at the Venn diagram where A and B overlap. If the total sample space is 100, with 30 in A, 40 in B, and 10 in both, what is <em>P(A ∩ B)</em>?",
      "questions": [
        {
          "id": "q6",
          "prompt": "How many outcomes are in both A and B?",
          "answer": "10",
          "feedback": "Correct, 10 outcomes are in the intersection."
        },
        {
          "id": "q7",
          "prompt": "Calculate P(A ∩ B) = number of outcomes in intersection / total outcomes.",
          "answer": "10/100",
          "feedback": "Yes, that equals 0.1."
        }
      ]
    }
  },
  "step4": {
    "title": "Understanding Complement (A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Complement (A')</strong> is the set of outcomes NOT in event <em>A</em>.</p><p>The probability <em>P(A')</em> shows the chance that event <em>A</em> does NOT happen.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p>If <em>A</em> means 'rain today', then <em>A'</em> means 'no rain today'.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Complement Probability",
      "problem": "If <em>P(A) = 0.25</em>, what is <em>P(A')</em>?",
      "questions": [
        {
          "id": "q8",
          "prompt": "Write the formula for P(A').",
          "answer": "P(A') = 1 - P(A)",
          "feedback": "Correct formula for complement."
        },
        {
          "id": "q9",
          "prompt": "Substitute P(A) = 0.25 into the formula.",
          "answer": "1 - 0.25",
          "feedback": "Good, subtracting 0.25 from 1."
        },
        {
          "id": "q10",
          "prompt": "Calculate P(A').",
          "answer": "0.75",
          "feedback": "Correct, the complement probability is 0.75."
        }
      ]
    }
  },
  "step5": {
    "title": "Combining Events Using Set Notation and Venn Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">We can combine union, intersection, and complement to describe more complex events in probability.</p><p>Using Venn diagrams helps visualize these combined events and calculate their probabilities.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#fdf6e3' stroke='#333' /><circle cx='150' cy='150' r='80' fill='#4caf50' fill-opacity='0.4' stroke='#2e7d32' /><circle cx='250' cy='150' r='80' fill='#f44336' fill-opacity='0.4' stroke='#b71c1c' /><text x='115' y='150' font-family='sans-serif' font-weight='bold' font-size='20' fill='#2e7d32'>A</text><text x='285' y='150' font-family='sans-serif' font-weight='bold' font-size='20' fill='#b71c1c'>B</text><text x='90' y='250' font-family='sans-serif' font-size='16' fill='#555'>A ∩ B (overlap)</text><path d='M100 130 A 80 80 0 0 1 200 130' fill='none' stroke='#000' stroke-width='2' stroke-dasharray='5 5'/></svg>",
    "workedExample": {
      "title": "Worked Example: Calculate P((A ∪ B)')",
      "problem": "Given <em>P(A) = 0.5</em>, <em>P(B) = 0.4</em>, and <em>P(A ∩ B) = 0.2</em>, find <em>P((A ∪ B)')</em>.",
      "questions": [
        {
          "id": "q11",
          "prompt": "First calculate P(A ∪ B) using the formula.",
          "answer": "0.5 + 0.4 - 0.2",
          "feedback": "Correct, sum minus intersection."
        },
        {
          "id": "q12",
          "prompt": "Calculate the sum.",
          "answer": "0.7",
          "feedback": "Yes, 0.7."
        },
        {
          "id": "q13",
          "prompt": "Use complement formula to find P((A ∪ B)').",
          "answer": "1 - 0.7",
          "feedback": "Right, subtract from 1."
        },
        {
          "id": "q14",
          "prompt": "Calculate final answer.",
          "answer": "0.3",
          "feedback": "Excellent! P((A ∪ B)') is 0.3."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "In a class of 40 students, 18 like football (event A), 22 like basketball (event B), and 10 like both. Calculate the probability that a randomly selected student likes football or basketball but not both.",
      "hint": "Use set notation and the formula for union and intersection. Remember: \"likes football or basketball but not both\" means the union without the intersection.",
      "mustHaveKeywords": ["P(A)", "P(B)", "P(A ∩ B)", "P(A ∪ B)", "complement"],
      "optionalKeywords": ["exclusive or", "Venn diagram"],
      "modelAnswer": "<span>First, find P(A) = 18/40 = 0.45, P(B) = 22/40 = 0.55, and P(A ∩ B) = 10/40 = 0.25. The event 'likes football or basketball but not both' is (A ∪ B) \\ (A ∩ B), which equals P(A) + P(B) - 2 × P(A ∩ B). Thus, the probability is 0.45 + 0.55 - 2 × 0.25 = 0.5.</span>",
      "scaffoldPrompts": ["Calculate individual event probabilities P(A) and P(B).", "Calculate the intersection probability P(A ∩ B).", "Find the union P(A ∪ B).", "Subtract the intersection to get exclusive or probability."]
    }
  }
};