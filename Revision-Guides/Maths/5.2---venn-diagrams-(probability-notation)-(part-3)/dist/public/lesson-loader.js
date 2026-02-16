window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.2 - Venn diagrams (probability notation) (Part 3)",
  "strapline": "Learn to interpret and use Venn diagrams with probability notation, focusing on unions, intersections, and complements to solve problems.",
  "learningObjectives": [
    "Students should interpret and construct Venn diagrams with two or more events, using them to calculate probabilities by identifying regions that represent different combinations of events (Maths 5.2)",
    "Students should apply formal probability notation including P(A), P(B), P(A ∪ B) for union, and P(A ∩ B) for intersection when working with Venn diagrams (Maths 5.2)",
    "Students should work with complement notation P(A') and use Venn diagrams to solve problems involving mutually exclusive and non-mutually exclusive events (Maths 5.2)"
  ],
  "keyFormulas": [
    "Concept 1: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    "Concept 2: P(A ∩ B) represents the overlapping probability of both A and B occurring",
    "Concept 3: P(A') = 1 - P(A)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='340' height='240' fill='#f9f9f9' stroke='#999'/><circle cx='150' cy='150' r='80' fill='rgba(255,0,0,0.3)' stroke='#c00'/><circle cx='230' cy='150' r='80' fill='rgba(0,0,255,0.3)' stroke='#00c'/><text x='150' y='250' font-family='sans-serif' font-size='18' fill='#000'>Event A</text><text x='230' y='250' font-family='sans-serif' font-size='18' fill='#000'>Event B</text><text x='50' y='80' font-family='sans-serif' font-size='14' fill='#000'>Sample Space</text></svg>",
  "step1": {
    "title": "Understanding P(A ∪ B) - The Union of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union <strong>P(A ∪ B)</strong> means the probability that <em>either event A or event B or both</em> occur. On a Venn diagram, it includes all the area covered by circles A and B combined.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two groups of friends coming to a party: Group A and Group B. <strong>The union</strong> means everyone who comes from either group or both groups.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding P(A ∪ B)",
      "problem": "Let P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2. Calculate P(A ∪ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the formula to find P(A ∪ B)?",
          "answer": "P(A) + P(B) - P(A ∩ B)",
          "feedback": "Correct! This accounts for overlap so it’s not counted twice."
        },
        {
          "id": "q2",
          "prompt": "Substitute the values into the formula: 0.4 + 0.5 - ?",
          "answer": "0.2",
          "feedback": "Great, you have substituted the intersection probability."
        },
        {
          "id": "q3",
          "prompt": "Calculate the value: 0.4 + 0.5 - 0.2 = ?",
          "answer": "0.7",
          "feedback": "Excellent! P(A ∪ B) = 0.7."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding P(A ∩ B) - The Intersection of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection <strong>P(A ∩ B)</strong> represents the probability that <em>both event A and event B occur together</em>. On a Venn diagram, this is the overlapping region between the two circles.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two clubs: a book club (A) and a music club (B). The intersection is the students who are members of <em>both clubs</em>.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying P(A ∩ B)",
      "problem": "Given P(A) = 0.6, P(B) = 0.3, and P(A ∪ B) = 0.75, find P(A ∩ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What formula connects P(A), P(B), P(A ∪ B), and P(A ∩ B)?",
          "answer": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
          "feedback": "Correct! We can rearrange to find P(A ∩ B)."
        },
        {
          "id": "q2",
          "prompt": "Rearrange formula to solve for P(A ∩ B). What is the formula?",
          "answer": "P(A) + P(B) - P(A ∪ B)",
          "feedback": "Well done! This isolates the intersection probability."
        },
        {
          "id": "q3",
          "prompt": "Substitute values: 0.6 + 0.3 - 0.75 = ?",
          "answer": "0.15",
          "feedback": "Excellent! The intersection probability is 0.15."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Complement: P(A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement <strong>P(A')</strong> is the probability that event A <em>does not</em> occur. On a Venn diagram, this is everything outside circle A but within the sample space.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is the event 'raining today', then A' means 'not raining today'.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculate P(A')",
      "problem": "If P(A) = 0.65, what is P(A')?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the formula relating P(A) and P(A')?",
          "answer": "P(A') = 1 - P(A)",
          "feedback": "Correct! The total probability equals 1."
        },
        {
          "id": "q2",
          "prompt": "Calculate 1 - 0.65 = ?",
          "answer": "0.35",
          "feedback": "Right! The probability that event A does not occur is 0.35."
        }
      ]
    }
  },
  "step4": {
    "title": "Mutually Exclusive and Non-Mutually Exclusive Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Mutually exclusive events cannot happen at the same time, meaning <strong>P(A ∩ B) = 0</strong>. Non-mutually exclusive events can overlap, so <strong>P(A ∩ B) &gt; 0</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is 'rolling an even number on a die' and B is 'rolling a 3', these events are mutually exclusive. But if B is 'rolling a number greater than 3', A and B overlap.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify If Events Are Mutually Exclusive",
      "problem": "Given P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0, are A and B mutually exclusive?",
      "questions": [
        {
          "id": "q1",
          "prompt": "If P(A ∩ B) = 0, are the events mutually exclusive?",
          "answer": "Yes",
          "feedback": "Correct! They cannot occur together."
        }
      ]
    }
  },
  "step5": {
    "title": "Using Venn Diagrams to Solve Probability Problems",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To solve problems, identify which region of the Venn diagram the question relates to: union, intersection, or complement, then use the appropriate probability formula.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating P(A' ∩ B)",
      "problem": "If P(A) = 0.3, P(B) = 0.5, and P(A ∩ B) = 0.1, find P(A' ∩ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What does P(A' ∩ B) represent on the Venn diagram?",
          "answer": "The part of B excluding the overlap with A",
          "feedback": "Correct! It’s B minus the intersection."
        },
        {
          "id": "q2",
          "prompt": "How do you find P(A' ∩ B) using P(B) and P(A ∩ B)?",
          "answer": "P(B) - P(A ∩ B)",
          "feedback": "Correct! Subtract the overlapping probability from P(B)."
        },
        {
          "id": "q3",
          "prompt": "Calculate 0.5 - 0.1 = ?",
          "answer": "0.4",
          "feedback": "Well done! The probability P(A' ∩ B) is 0.4."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Using the probabilities P(A) = 0.55, P(B) = 0.45, and P(A ∩ B) = 0.15, explain how to find:</span><ul><li>P(A ∪ B)</li><li>P(A')</li><li>P(A' ∩ B)</li></ul>",
      "hint": "Remember to use the formulas for union, complement, and subtraction of intersection within B.",
      "mustHaveKeywords": ["P(A ∪ B)", "P(A')", "P(A' ∩ B)"],
      "optionalKeywords": ["Venn diagram", "intersection", "complement"],
      "modelAnswer": "<span>To find <strong>P(A ∪ B)</strong>, use the formula P(A) + P(B) - P(A ∩ B) = 0.55 + 0.45 - 0.15 = 0.85.<br>To find <strong>P(A')</strong>, use the complement rule: 1 - P(A) = 1 - 0.55 = 0.45.<br>For <strong>P(A' ∩ B)</strong>, subtract the intersection from P(B): P(B) - P(A ∩ B) = 0.45 - 0.15 = 0.30.<br>Using a Venn diagram can help identify these regions visually.</span>",
      "scaffoldPrompts": [
        "Recall the formula for union of two events.",
        "Remember the complement rule for calculating P(A').",
        "Subtract the overlapping part from P(B) to get P(A' ∩ B)."
      ]
    }
  }
};