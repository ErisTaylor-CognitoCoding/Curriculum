window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.2 - Venn diagrams (probability notation) (Part 2)",
  "strapline": "Using Venn diagrams and formal probability notation to calculate combined event probabilities including union, intersection, and complements.",
  "learningObjectives": [
    "Students should interpret and construct Venn diagrams with two or more events to represent probability situations (Maths 5.2)",
    "Students should use formal probability notation including P(A), P(B), P(A ∪ B) for union, P(A ∩ B) for intersection, and P(A') for complement (Maths 5.2)",
    "Students should calculate probabilities using Venn diagrams by identifying regions representing different combinations of events, including mutually exclusive and non-mutually exclusive events (Maths 5.2)"
  ],
  "keyFormulas": [
    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) (Probability of union)",
    "P(A ∩ B) = Probability that both A and B occur (intersection)",
    "P(A') = 1 - P(A) (Probability of the complement of A)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <circle cx='150' cy='150' r='80' fill='rgba(255,0,0,0.3)' stroke='red' stroke-width='2'/>  <circle cx='250' cy='150' r='80' fill='rgba(0,0,255,0.3)' stroke='blue' stroke-width='2'/>  <text x='100' y='70' font-family='Arial' font-size='20' fill='red'>A</text>  <text x='290' y='70' font-family='Arial' font-size='20' fill='blue'>B</text>  <rect x='20' y='20' width='360' height='260' fill='none' stroke='#333' stroke-width='1'/>  <text x='30' y='290' font-family='Arial' font-size='14' fill='#000'>&#x25A1; Universal Set</text></svg>",
  "step1": {
    "title": "Understanding Union: P(A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>union</strong> of two events A and B, written as <strong>P(A ∪ B)</strong>, is the probability that <em>either event A, event B, or both</em> happen. On a Venn diagram, this means all the areas covered by circle A, circle B, or where they overlap.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two groups of friends invited to a party. The union means how many people came from either group or both groups.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding P(A ∪ B)",
      "problem": "In a class, 0.4 probability of students like football (event A), and 0.5 probability like basketball (event B). Probability of liking both sports is 0.2. Find P(A ∪ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A)?",
          "answer": "0.4",
          "feedback": "Correct. P(A) = 0.4."
        },
        {
          "id": "q2",
          "prompt": "What is P(B)?",
          "answer": "0.5",
          "feedback": "Correct. P(B) = 0.5."
        },
        {
          "id": "q3",
          "prompt": "What is P(A ∩ B)?",
          "answer": "0.2",
          "feedback": "Correct. P(A ∩ B) = 0.2."
        },
        {
          "id": "q4",
          "prompt": "Use the formula to calculate P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Enter your answer as a decimal.",
          "answer": "0.7",
          "feedback": "Well done! 0.4 + 0.5 - 0.2 = 0.7."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Intersection: P(A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>intersection</strong> of two events A and B, written as <strong>P(A ∩ B)</strong>, is the probability that <em>both events A and B occur together</em>. On the Venn diagram, this is the overlapping area where circles A and B meet.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two overlapping friend groups. The intersection are the friends common to both groups who attend the party.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Intersection Probability",
      "problem": "If P(A) = 0.6, P(B) = 0.5 and P(A ∪ B) = 0.8, what is P(A ∩ B)?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Recall the formula: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Rearrange to find P(A ∩ B).",
          "answer": "P(A ∩ B) = P(A) + P(B) - P(A ∪ B)",
          "feedback": "Correct, now substitute the values."
        },
        {
          "id": "q2",
          "prompt": "Calculate P(A ∩ B) by substituting values: 0.6 + 0.5 - 0.8 = ?",
          "answer": "0.3",
          "feedback": "Great! P(A ∩ B) = 0.3."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Complement: P(A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>complement</strong> of an event A, written as <strong>P(A')</strong>, is the probability that event A <em>does NOT occur</em>. On a Venn diagram, this is everything outside circle A but inside the universal set.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If event A is 'it rains today,' then the complement A' is 'it does not rain today.'</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Complement Probability",
      "problem": "If P(A) = 0.65, find P(A').",
      "questions": [
        {
          "id": "q1",
          "prompt": "Recall the formula for complement: P(A') = 1 - P(A). What is 1 - 0.65?",
          "answer": "0.35",
          "feedback": "Correct. The probability that A does not occur is 0.35."
        }
      ]
    }
  },
  "step4": {
    "title": "Constructing Venn diagrams with two events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Learn to draw and label two-event Venn diagrams accurately and shade the regions corresponding to union, intersection, or complements as needed.</p>",
    "workedExample": {
      "title": "Worked Example: Drawing and labeling a Venn diagram",
      "problem": "Draw a Venn diagram for events A and B. Shade the region representing P(A ∩ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "After drawing circles A and B overlapping, which area should you shade for P(A ∩ B)? (Outside both, A only, B only, overlap)?",
          "answer": "overlap",
          "feedback": "Correct. The intersection is the overlapping region."
        }
      ]
    }
  },
  "step5": {
    "title": "Calculating probabilities for mutually exclusive events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Mutually exclusive events cannot happen at the same time, so P(A ∩ B) = 0. This simplifies calculations for unions as P(A ∪ B) = P(A) + P(B).</p>",
    "workedExample": {
      "title": "Worked Example: Mutually Exclusive Events",
      "problem": "Events A and B are mutually exclusive. P(A) = 0.3, P(B) = 0.4. Find P(A ∪ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A ∩ B) for mutually exclusive events?",
          "answer": "0",
          "feedback": "Correct, mutually exclusive means no overlap."
        },
        {
          "id": "q2",
          "prompt": "Use the formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B) to calculate the union.",
          "answer": "0.7",
          "feedback": "Well done! 0.3 + 0.4 - 0 = 0.7."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>In a survey, 60% of people like tea (event A) and 50% like coffee (event B). 30% like both tea and coffee.</span><br><br><span>Calculate:</span><br><ol><li>P(A ∪ B)</li><li>P(A')</li></ol>",
      "hint": "Use the formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B) and P(A') = 1 - P(A).",
      "mustHaveKeywords": ["union", "complement", "formula", "subtraction"],
      "optionalKeywords": ["Venn diagram", "intersection"],
      "modelAnswer": "<span>To find P(A ∪ B), use the formula: P(A) + P(B) - P(A ∩ B) = 0.6 + 0.5 - 0.3 = 0.8.<br>To find P(A'), subtract from 1: P(A') = 1 - 0.6 = 0.4.</span>",
      "scaffoldPrompts": ["Write down the values for P(A), P(B), and P(A ∩ B).", "Apply the union formula carefully.", "Calculate the complement by subtracting P(A) from 1."]
    }
  }
};