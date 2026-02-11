window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.2 - Venn diagrams (probability notation) (Part 3)",
  "strapline": "Using Venn diagrams and formal probability notation to solve problems with unions, intersections, and complements.",
  "learningObjectives": [
    "Students should interpret and construct Venn diagrams with two or more events, using them to calculate probabilities by identifying regions that represent different combinations of events (Maths 5.2)",
    "Students should apply formal probability notation including P(A), P(B), P(A ∪ B) for union, and P(A ∩ B) for intersection when working with Venn diagrams (Maths 5.2)",
    "Students should work with complement notation P(A') and use Venn diagrams to solve problems involving mutually exclusive and non-mutually exclusive events (Maths 5.2)"
  ],
  "step1": {
    "title": "Concept: Union P(A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union of two events A and B, written as <strong>P(A ∪ B)</strong>, represents the probability that either event A happens, or event B happens, or both happen. In a Venn diagram, this is all the area covered by both circles combined.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two groups of people: one who like apples (event A) and one who like bananas (event B). The union is everyone who likes apples or bananas or both.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the areas representing A and B in the Venn diagram.</span>",
        "<span>Add the probabilities of A and B, then subtract the overlapping part to avoid double counting.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Intersection P(A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection of two events A and B, written as <strong>P(A ∩ B)</strong>, is the probability that both events happen at the same time. In a Venn diagram, this is the overlapping section of circles A and B.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If event A is people who like apples and event B is people who like bananas, then the intersection is those who like both apples and bananas.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Locate the overlapping region between A and B on the Venn diagram.</span>",
        "<span>Use the given values or calculate the shared probability for those who belong to both events.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Complement P(A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of an event A, written as <strong>P(A')</strong>, is the probability that event A does not happen. On the Venn diagram, this is everything inside the sample space but outside circle A.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If event A is the group who like apples, then A' is the group who do NOT like apples.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find the total probability of the sample space, which is 1.</span>",
        "<span>Subtract P(A) from 1 to find P(A').</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying formal notation with Venn diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When working with Venn diagrams, formal probability notation lets us clearly express calculations. For instance, <strong>P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</strong> accounts for the overlap between events.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two overlapping circles representing fan bases of two TV shows. Using notation helps avoid counting people who like both shows twice.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2, substitute these into the formula.</span>",
        "<span>Calculate: P(A ∪ B) = 0.4 + 0.5 - 0.2 = 0.7.</span>"
      ]
    }
  },
  "step5": {
    "title": "Mutually exclusive versus non-mutually exclusive events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Events are <strong>mutually exclusive</strong> if they cannot happen at the same time, meaning <strong>P(A ∩ B) = 0</strong>. If they can happen together, they are <strong>non-mutually exclusive</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you roll a die, event A is 'rolling a 2' and event B is 'rolling a 5' — these are mutually exclusive. But if event A is 'rolling an even number' and event B is 'rolling a 5 or above,' these events can overlap.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>For mutually exclusive events, P(A ∪ B) = P(A) + P(B) because P(A ∩ B) = 0.</span>",
        "<span>For non-mutually exclusive events, use P(A ∪ B) = P(A) + P(B) - P(A ∩ B).</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Given the Venn diagram below shows events A and B in a sample space, with P(A) = 0.5, P(B) = 0.4, and P(A ∩ B) = 0.2, calculate:</span><ul><li>P(A ∪ B)</li><li>P(A')</li><li>Explain whether the events are mutually exclusive or not.</li></ul>",
      "hint": "Remember to use formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B) and that P(A') = 1 - P(A). Consider if P(A ∩ B) equals zero to determine mutual exclusivity.",
      "mustHaveKeywords": ["union", "intersection", "complement", "mutually exclusive", "formulas"],
      "optionalKeywords": ["sample space", "probability"],
      "modelAnswer": "<span>First, calculate P(A ∪ B) = 0.5 + 0.4 - 0.2 = 0.7.<br>P(A') = 1 - 0.5 = 0.5.<br>Since P(A ∩ B) = 0.2 is not zero, the events are not mutually exclusive.</span>",
      "scaffoldPrompts": [
        "Calculate P(A ∪ B) first using the formula.",
        "Next, find P(A') by subtracting P(A) from 1.",
        "Finally, check the value of P(A ∩ B) to determine mutual exclusivity."
      ]
    }
  }
};