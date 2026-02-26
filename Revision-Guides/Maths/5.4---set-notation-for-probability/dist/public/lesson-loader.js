window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.4 - Set notation for probability",
  "strapline": "Understanding how to use set notation to represent and calculate combined probabilities with unions, intersections, and complements.",
  "learningObjectives": [
    "Students should use set notation including symbols for union (∪), intersection (∩), and complement (A') to represent combined events in probability (Maths 5.4)",
    "Students should calculate probabilities of combined events using set notation and Venn diagrams (Maths 5.4)",
    "Students should interpret and solve probability problems involving unions, intersections, and complements of events (Maths 5.4)"
  ],
  "keyFormulas": [
    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    "P(A') = 1 - P(A)",
    "P(A ∩ B) ≤ P(A) and P(A ∩ B) ≤ P(B)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
  <rect x='10' y='10' width='380' height='280' fill='#f9f9f9' stroke='#888'/>\
  <circle cx='150' cy='150' r='80' fill='#cce5ff' stroke='#004085' stroke-width='3' opacity='0.7'/>\
  <circle cx='250' cy='150' r='80' fill='#d4edda' stroke='#155724' stroke-width='3' opacity='0.7'/>\
  <text x='150' y='50' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#004085'>A</text>\
  <text x='250' y='50' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#155724'>B</text>\
  <text x='200' y='150' font-family='sans-serif' font-size='20' font-weight='bold' text-anchor='middle' fill='#721c24'>A ∩ B</text>\
  <text x='50' y='290' font-family='sans-serif' font-size='16' fill='#333'>Sample Space (S)</text>\
  </svg>",
  "step1": {
    "title": "Concept: Sample Space and Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>sample space</strong> (S or ξ) is the set of all possible outcomes in a probability experiment. For example, when rolling a die, <em>S = {1, 2, 3, 4, 5, 6}</em>. Using set notation helps us describe events and their combinations clearly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of <strong>sample space</strong> like all the colours of marbles in a bag. Each event is picking marbles of certain colours from that bag.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Define Sample Space for a Coin Toss",
      "problem": "Define the sample space S of a single coin toss.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are all the possible outcomes when you toss a coin?",
          "answer": "{Heads, Tails}",
          "feedback": "Correct. The sample space has two outcomes: Heads or Tails."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Union of Events (A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>union</strong> of two events <em>A ∪ B</em> is the set of outcomes that are in event A or event B, or in both. It represents the event that at least one of these events occurs.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is picking a blue marble and B is picking a red marble, then A ∪ B means picking a marble that is either blue or red (or both if possible).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding <em>P(A ∪ B)</em>",
      "problem": "Given <em>P(A) = 0.4</em>, <em>P(B) = 0.5</em>, and <em>P(A ∩ B) = 0.2</em>, calculate <em>P(A ∪ B)</em>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What formula do you use for <em>P(A ∪ B)</em>?",
          "answer": "P(A) + P(B) - P(A ∩ B)",
          "feedback": "Correct. This formula avoids double counting outcomes in the intersection."
        },
        {
          "id": "q2",
          "prompt": "Calculate <em>P(A ∪ B)</em> using the values given.",
          "answer": "0.7",
          "feedback": "Correct. 0.4 + 0.5 - 0.2 = 0.7."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Intersection of Events (A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>intersection</strong> <em>A ∩ B</em> represents the set of outcomes common to both events A and B. It is the event that both A and B occur simultaneously.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is students who like football and B is students who like basketball, A ∩ B is students who like both sports.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Intersection Probability from Venn Diagram",
      "problem": "From a Venn diagram with P(A) = 0.6, P(B) = 0.5, and P(A ∪ B) = 0.8, find P(A ∩ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which formula relates unions and intersections of two events?",
          "answer": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Rearrange the formula to find P(A ∩ B).",
          "answer": "P(A ∩ B) = P(A) + P(B) - P(A ∪ B)",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A ∩ B) using the values given.",
          "answer": "0.3",
          "feedback": "Correct. 0.6 + 0.5 - 0.8 = 0.3."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Complement of an Event (A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>complement</strong> of event A, written as <em>A'</em>, is the set of outcomes in the sample space that are NOT in event A. Its probability is <em>P(A') = 1 - P(A)</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If event A is raining today, then A' means it is NOT raining today.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate Complement Probability",
      "problem": "If the probability of event A is 0.65, find P(A').",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the formula for P(A').",
          "answer": "1 - P(A)",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Calculate P(A') using the value given.",
          "answer": "0.35",
          "feedback": "Correct. 1 - 0.65 = 0.35."
        }
      ]
    }
  },
  "step5": {
    "title": "Combined Events: Using Venn Diagrams and Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use Venn diagrams to visualize set notation events including unions, intersections, and complements. This helps in calculating probabilities by counting relevant outcomes or using formulas.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine shading parts of circles to show probabilities of combined events.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Identify Shaded Region for A' ∩ B",
      "problem": "In a Venn diagram with two events A and B, shade the region representing <em>A' ∩ B</em>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which area represents the complement of A (A')?",
          "answer": "Area outside circle A within the sample space",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Which part of B overlaps with A'?",
          "answer": "Area inside circle B but outside circle A",
          "feedback": "Correct."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
      <rect x='0' y='0' width='400' height='300' fill='#fff' stroke='#ccc'/>\
      <circle cx='140' cy='150' r='90' fill='#cce5ff' stroke='#004085' stroke-width='3' opacity='0.5'/>\
      <circle cx='250' cy='150' r='90' fill='#d4edda' stroke='#155724' stroke-width='3' opacity='0.5'/>\
      <path d='M250,60 a90,90 0 0,1 0,180 L250,60 Z' fill='#155724' opacity='0.7'/>\
      <text x='140' y='50' font-family='sans-serif' font-size='20' text-anchor='middle' fill='#004085'>A</text>\
      <text x='250' y='50' font-family='sans-serif' font-size='20' text-anchor='middle' fill='#155724'>B</text>\
      <text x='35' y='290' font-family='sans-serif' font-size='16' fill='#333'>Sample Space (S)</text>\
      </svg>"
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given two events A and B in a sample space S with probabilities P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2, use set notation and probability formulas to:</span><ul><li>Calculate P(A ∪ B)</li><li>Determine the probability of the complement of A (P(A'))</li><li>Explain what P(A ∪ B) and P(A ∩ B) represent in terms of the events</li></ul>",
      "hint": "Remember the formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B) and that complements are 1 minus the event probability.",
      "mustHaveKeywords": ["P(A ∪ B)", "P(A')", "union", "intersection", "complement"],
      "optionalKeywords": ["sample space", "set notation", "probability formulas"],
      "modelAnswer": "<span>P(A ∪ B) is the probability that either event A or event B or both occur. Using the formula: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.5 + 0.4 - 0.2 = 0.7. The complement of A, A', is the event that A does not happen, so P(A') = 1 - P(A) = 1 - 0.5 = 0.5. The intersection P(A ∩ B) is the probability that both events occur simultaneously, here 0.2.</span>",
      "scaffoldPrompts": [
        "Step 1: Write down given probabilities.",
        "Step 2: Recall the formula for P(A ∪ B) and substitute values.",
        "Step 3: Calculate P(A') using the complement rule.",
        "Step 4: Explain the meanings of union and intersection probabilities."
      ]
    }
  }
};