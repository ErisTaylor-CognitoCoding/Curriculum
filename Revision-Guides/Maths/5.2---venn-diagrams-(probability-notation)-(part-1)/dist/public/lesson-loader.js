window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.2 - Venn diagrams (probability notation) (Part 1)",
  "strapline": "Learn how to interpret and construct Venn diagrams with two events using formal probability notation.",
  "learningObjectives": [
    "Students should interpret and construct Venn diagrams with two events to represent probability situations (Maths 5.2)",
    "Students should use formal probability notation including P(A), P(B), P(A \u222a B) for union, and P(A \u2229 B) for intersection (Maths 5.2)",
    "Students should identify and label regions in Venn diagrams that represent different combinations of events (Maths 5.2)"
  ],
  "keyFormulas": [
    "P(A) = Probability of event A",
    "P(A \u222a B) = P(A) + P(B) - P(A \u2229 B)",
    "P(A \u2229 B) = Probability that events A and B both occur"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <circle cx='140' cy='150' r='80' fill='#99c2ff' fill-opacity='0.5' stroke='#1a1a1a'/>\
    <circle cx='260' cy='150' r='80' fill='#ff9999' fill-opacity='0.5' stroke='#1a1a1a'/>\
    <text x='90' y='70' font-family='sans-serif' font-size='20' fill='#000'>A</text>\
    <text x='310' y='70' font-family='sans-serif' font-size='20' fill='#000'>B</text>\
    <text x='20' y='290' font-family='sans-serif' font-size='14' fill='#000'>Sample Space</text>\
  </svg>",
  "step1": {
    "title": "Introduction to Venn Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>Venn diagram</strong> uses overlapping circles to visually represent the relationships between different sets or events. Each circle represents an event, and overlapping regions show where events coincide or intersect.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two coloured transparent circles overlapped on a table. The overlapping area shows what they have in common, like friends who attend both clubs.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Regions in a Venn Diagram",
      "problem": "You see two circles labelled A and B overlapping. We want to identify each region representing: only A, only B, both A and B, and neither.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which region shows all outcomes in event <strong>A</strong> (including those also in B)?",
          "answer": "circle A",
          "feedback": "Correct. The whole circle A includes all outcomes where event A happens."
        },
        {
          "id": "q2",
          "prompt": "Which part of the diagram represents outcomes in <strong>both</strong> A and B (their intersection)?",
          "answer": "overlapping area",
          "feedback": "Correct. The overlap between circles A and B shows outcomes in both events."
        },
        {
          "id": "q3",
          "prompt": "What region represents outcomes that are in B only, but not in A?",
          "answer": "part of circle B excluding overlap",
          "feedback": "Correct. The non-overlapping part of circle B contains outcomes only in B."
        }
      ]
    }
  },
  "step2": {
    "title": "Formal Probability Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">We use symbols like <strong>P(A)</strong> to denote the probability of event A occurring. For two events A and B, <strong>P(B)</strong> is the probability of B, <strong>P(A \u222a B)</strong> represents the probability of A or B (or both), and <strong>P(A \u2229 B)</strong> means the probability that both events occur together.</p>",
    "workedExample": {
      "title": "Worked Example: Understanding Probability Notation",
      "problem": "Consider two events: A and B. We want to express their probabilities formally.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the notation for the probability of event A occurring?",
          "answer": "P(A)",
          "feedback": "Correct. Probability of event A is written as P(A)."
        },
        {
          "id": "q2",
          "prompt": "What notation shows the probability of either event A or event B (or both) happening?",
          "answer": "P(A \u222a B)",
          "feedback": "Correct. P(A \u222a B) denotes the union of A and B."
        },
        {
          "id": "q3",
          "prompt": "What notation represents the probability of both events A and B occurring together?",
          "answer": "P(A \u2229 B)",
          "feedback": "Correct. P(A \u2229 B) is the intersection of A and B."
        }
      ]
    }
  },
  "step3": {
    "title": "Labeling Regions in Venn Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Each part of a Venn diagram corresponds to a specific combination of events:</p> <ul><li><strong>Only A</strong>: Outcomes in A but not in B</li><li><strong>Only B</strong>: Outcomes in B but not in A</li><li><strong>Both A and B</strong>: Outcomes common to both events</li><li><strong>Neither A nor B</strong>: Outcomes outside both circles</li></ul>",
    "workedExample": {
      "title": "Worked Example: Identifying Specific Regions",
      "problem": "Given a Venn diagram with events A and B, label the regions correctly.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Label the region that represents <em>only</em> event A.",
          "answer": "A only",
          "feedback": "Well done. That region is inside circle A but outside the intersection."
        },
        {
          "id": "q2",
          "prompt": "Label the region where the two events overlap.",
          "answer": "A \u2229 B",
          "feedback": "Correct. This intersection contains outcomes common to events A and B."
        }
      ]
    }
  },
  "step4": {
    "title": "Calculating Union Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union of two events A and B, written <strong>P(A \u222a B)</strong>, is the probability that <em>either</em> A or B or both occur. We calculate it using:</p><p class=\"text-sm leading-6 text-muted-foreground\"><strong>P(A \u222a B) = P(A) + P(B) - P(A \u2229 B)</strong></p><p>This formula avoids counting the intersection twice.</p>",
    "workedExample": {
      "title": "Worked Example: Step-by-Step Union Probability",
      "problem": "Given P(A) = 0.5, P(B) = 0.4, and P(A \u2229 B) = 0.2, find P(A \u222a B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A)?",
          "answer": "0.5",
          "feedback": "Correct, P(A) = 0.5"
        },
        {
          "id": "q2",
          "prompt": "What is P(B)?",
          "answer": "0.4",
          "feedback": "Correct, P(B) = 0.4"
        },
        {
          "id": "q3",
          "prompt": "What is P(A \u2229 B)?",
          "answer": "0.2",
          "feedback": "Correct, the intersection probability is 0.2"
        },
        {
          "id": "q4",
          "prompt": "Calculate P(A \u222a B) using the formula.",
          "answer": "0.7",
          "feedback": "Correct! P(A \u222a B) = 0.5 + 0.4 - 0.2 = 0.7"
        }
      ]
    }
  },
  "step5": {
    "title": "Interpreting Venn Diagrams in Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Look at a Venn diagram and use it to write probabilities using correct notation. For example, <em>the part only in A</em> corresponds to <strong>P(A) - P(A \u2229 B)</strong>. This helps break down complex probability problems.</p>",
    "workedExample": {
      "title": "Worked Example: Writing Probabilities from Venn Diagram Regions",
      "problem": "In a diagram with events A and B: find the probability of only event A occurring if P(A) = 0.6 and P(A \u2229 B) = 0.3.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the expression for the probability of only event A.",
          "answer": "P(A) - P(A \u2229 B)",
          "feedback": "Correct. The probability of A only excludes the overlap with B."
        },
        {
          "id": "q2",
          "prompt": "Calculate the probability of only A.",
          "answer": "0.3",
          "feedback": "Correct. 0.6 - 0.3 = 0.3"
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given P(A) = 0.7, P(B) = 0.5 and P(A \u2229 B) = 0.3, draw a Venn diagram showing A and B. Label all regions and calculate P(A \u222a B) and the probability of only B.</span>",
      "hint": "Remember to set the intersection area first, then subtract from individual probabilities to find 'only A' and 'only B' regions.",
      "mustHaveKeywords": ["Venn diagram", "P(A \u222a B)", "only B", "intersection"],
      "optionalKeywords": ["union", "probability notation"],
      "modelAnswer": "<span>Draw two overlapping circles labeled A and B. Label the overlapping part as 0.3 (P(A \u2229 B)), the part of A alone as 0.7 - 0.3 = 0.4, and the part of B alone as 0.5 - 0.3 = 0.2. Calculate P(A \u222a B) = 0.7 + 0.5 - 0.3 = 0.9. The probability of only B is 0.2.</span>",
      "scaffoldPrompts": ["Start by placing the intersection probability correctly", "Subtract the intersection to find 'only A' and 'only B'", "Use the formula for union to check your answer"]
    }
  }
};