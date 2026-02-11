window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 3)",
  "strapline": "Understanding and calculating conditional probability in dependent events using formulae, tables, and tree diagrams.",
  "learningObjectives": [
    "Students should calculate conditional probabilities using the formula P(A|B) = P(A ∩ B) ÷ P(B) (Maths 5.3)",
    "Students should apply conditional probability to real-world scenarios involving dependent events, such as drawing items without replacement (Maths 5.3)",
    "Students should interpret two-way tables and tree diagrams where prior outcomes influence subsequent probabilities (Maths 5.3)"
  ],
  "step1": {
    "title": "Concept: Conditional Probability P(A|B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability, written as P(A|B), is the probability that event <strong>A</strong> happens given that event <strong>B</strong> has already occurred. The vertical bar '<strong>|</strong>' means 'given that' or 'on condition that'. This changes the probability because the sample space is now limited to the event B.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a box of mixed fruits. If you know the first fruit picked was an apple, what is the chance the next picked fruit is an orange? The second pick's chance depends on the first, so this is conditional probability.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify the events A and B.</span>",
        "<span>Step 2: Find P(A ∩ B), the chance both happen together.</span>",
        "<span>Step 3: Find P(B), the probability of event B.</span>",
        "<span>Step 4: Calculate <strong>P(A|B) = P(A ∩ B) ÷ P(B)</strong>.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the vertical bar '|' signify in P(A|B)?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>'Given that' event B has occurred</span>",
            "isCorrect": true,
            "explanation": "Correct! The '|' means conditional on B having happened."
          },
          {
            "id": "b",
            "label": "<span>Intersection of A and B</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The intersection is written as P(A ∩ B), not P(A|B)."
          },
          {
            "id": "c",
            "label": "<span>Union of A or B</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Union is written as P(A ∪ B), not P(A|B)."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The probability of both events A and B occurring together is called <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "P(A ∩ B)",
                "label": "P(A ∩ B)",
                "isCorrect": true,
                "feedback": "Correct! This is the notation for the intersection of A and B."
              },
              {
                "value": "P(A|B)",
                "label": "P(A|B)",
                "isCorrect": false,
                "feedback": "Try again. This represents conditional probability, not intersection."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Events that affect each other's probabilities are called <span class=\"font-semibold\">_____</span> events.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "Dependent",
                "label": "Dependent",
                "isCorrect": true,
                "feedback": "Correct! Dependent events influence each other's probabilities."
              },
              {
                "value": "Independent",
                "label": "Independent",
                "isCorrect": false,
                "feedback": "Incorrect. Independent events do not affect each other's probabilities."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Dependent Events and Drawing Without Replacement",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events occur when one event changes the probability of another event happening. An example is drawing cards without replacement, where the first draw affects the total number and types of cards left for the second draw.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you pick a red ball from a bag and do not put it back, the chance of picking a red ball again changes because one less ball is in the bag.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Count the total items initially.</span>",
        "<span>Step 2: Calculate the probability of the first event.</span>",
        "<span>Step 3: Adjust totals after the first event (no replacement).</span>",
        "<span>Step 4: Calculate the probability of the second event given the first has happened.</span>"
      ]
    }
  },
  "step5": {
    "title": "Interpreting Two-Way Tables for Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two-way tables display frequencies or probabilities of events and their intersections. You can use them to find conditional probabilities by focusing on one subset of the table —the event given.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a friendship chart showing boys and girls who like sports or music. You can find the chance a randomly chosen boy likes sports using the subcategory in the boy row.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify the row or column for the given event B.</span>",
        "<span>Step 2: Find the number of outcomes where both A and B happen.</span>",
        "<span>Step 3: Divide the number of A and B by the number in B's row/column.</span>"
      ]
    }
  },
  "step6": {
    "title": "Using Tree Diagrams for Sequential Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tree diagrams show all possible outcomes of sequential events and their probabilities. When events are dependent, probabilities in later branches change based on earlier outcomes. Multiply probabilities along branches to find combined probabilities.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine choosing ice cream flavors one after another, where your choice first affects what is left next. The tree shows each pick's probability step by step.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Draw branches for each possible first event with their probabilities.</span>",
        "<span>Step 2: From each first event branch, draw branches for the second event with updated probabilities.</span>",
        "<span>Step 3: Multiply along branches to find probabilities of combined events.</span>",
        "<span>Step 4: Use these to find conditional probabilities as needed.</span>"
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bag contains 5 red balls and 3 blue balls. Two balls are drawn one after the other without replacement. Calculate the probability that the second ball drawn is blue given that the first ball drawn was red.</span>",
      "hint": "Remember to use the formula <strong>P(A|B) = P(A ∩ B) ÷ P(B)</strong> and adjust the total after the first draw.",
      "mustHaveKeywords": ["P(A|B)", "dependent events", "without replacement", "conditional probability", "intersection"],
      "optionalKeywords": ["tree diagram", "two-way table"],
      "modelAnswer": "<span>First, define events: B = second ball is blue, R = first ball is red.<br/>Calculate P(R) = 5/8 (since 5 red and 3 blue, total 8).<br/>Calculate P(B ∩ R) = probability first red then blue = (5/8) × (3/7) = 15/56.<br/>Use formula: P(B|R) = P(B ∩ R) ÷ P(R) = (15/56) ÷ (5/8) = (15/56) × (8/5) = 3/7.<br/>So, the probability that the second ball is blue given the first was red is 3/7.</span>",
      "scaffoldPrompts": [
        "Identify the events A and B clearly.",
        "Find the total number of balls before and after the first draw.",
        "Calculate the probability of A and B happening together.",
        "Use the conditional probability formula."
      ]
    }
  }
};