window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel-1MA1",
  "topicTitle": "5.2 - Venn diagrams (probability notation) (Part 2)",
  "strapline": "Understanding and calculating probabilities with Venn diagrams using formal notation.",
  "learningObjectives": [
    "Students should interpret and construct Venn diagrams with two or more events to represent probability situations (Maths 5.2)",
    "Students should use formal probability notation including P(A), P(B), P(A ∪ B) for union, P(A ∩ B) for intersection, and P(A') for complement (Maths 5.2)",
    "Students should calculate probabilities using Venn diagrams by identifying regions representing different combinations of events, including mutually exclusive and non-mutually exclusive events (Maths 5.2)"
  ],
  "step1": {
    "title": "Concept: Union P(A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>union</strong> of two events, represented as <em>P(A ∪ B)</em>, is the probability that either event A occurs, or event B occurs, or both. In a Venn diagram, this is shown as all the regions inside circle A, circle B, or both overlapping parts.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two friend groups A and B. The union group includes everyone who is in group A, or group B, or both groups.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify regions that belong to circle A or circle B.</span>",
        "<span>Step 2: Add the probabilities (or counts) of these regions to find P(A ∪ B).</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Intersection P(A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>intersection</strong> of two events, denoted <em>P(A ∩ B)</em>, is the probability that both events A and B happen simultaneously. In a Venn diagram, this corresponds to the overlapping area between circles A and B.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a Venn diagram as two overlapping circles representing people who like tea (A) and people who like coffee (B). The intersection is those who like both tea AND coffee.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Locate the overlapping area of circles A and B.</span>",
        "<span>Step 2: Use the value of this overlap area to find P(A ∩ B).</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Complement P(A')",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>complement</strong> of event A, denoted <em>P(A')</em>, is the probability that event A does NOT occur. On a Venn diagram, this is all the area outside circle A but still inside the universal set.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If circle A represents students who passed a test, then the complement A' represents students who did <em>not</em> pass the test.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify all parts of the universal set not inside circle A.</span>",
        "<span>Step 2: Add probabilities of these regions to find P(A').</span>"
      ]
    }
  },
  "step4": {
    "title": "Calculating Probability with Venn Diagrams: Mutually Exclusive Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">If two events A and B are <strong>mutually exclusive</strong>, they cannot happen together. Therefore, <em>P(A ∩ B) = 0</em>. The union probability in this case is <em>P(A ∪ B) = P(A) + P(B)</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like flipping a coin: you cannot get heads and tails at the same time — these outcomes are mutually exclusive.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Confirm that the two circles in the Venn diagram do not overlap.</span>",
        "<span>Step 2: Find P(A) and P(B), then add them because there is no intersection.</span>"
      ]
    }
  },
  "step5": {
    "title": "Calculating Probability with Venn Diagrams: Non-Mutually Exclusive Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When events A and B are <strong>not mutually exclusive</strong>, the intersection <em>P(A ∩ B)</em> is not zero. To find the union probability, use the formula <em>P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</em> to avoid counting the overlap twice.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If some people like both tea and coffee, counting all tea drinkers and all coffee drinkers then adding would count those people twice, so we subtract the overlap once.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify values for P(A), P(B), and P(A ∩ B) on the Venn diagram.</span>",
        "<span>Step 2: Calculate P(A ∪ B) using the formula.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to use a Venn diagram to calculate the probability of the union of two events that are not mutually exclusive, given P(A) = 0.5, P(B) = 0.6, and P(A ∩ B) = 0.2.</span>",
      "hint": "Remember to use the formula for the union of two events: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
      "mustHaveKeywords": ["P(A)", "P(B)", "P(A ∩ B)", "union", "subtract", "overlap"],
      "optionalKeywords": ["Venn diagram", "probability", "mutually exclusive"],
      "modelAnswer": "<span>To calculate the union probability for two non-mutually exclusive events using a Venn diagram, first identify the probabilities P(A) and P(B) represented by each circle. Then find the overlap area which is the intersection P(A ∩ B). Use the formula P(A ∪ B) = P(A) + P(B) - P(A ∩ B) to combine these probabilities, subtracting the intersection once to avoid double counting. Substituting the values gives P(A ∪ B) = 0.5 + 0.6 - 0.2 = 0.9.</span>",
      "scaffoldPrompts": [
        "Start by writing down the given probabilities.",
        "Identify which part of the Venn diagram each probability corresponds to.",
        "Recall the formula for the union of two events and apply it here.",
        "Calculate the final probability."
      ]
    }
  }
};