window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.4 - Set notation for probability (Part 2)",
  "strapline": "Explore how set notation using union, intersection, and complement helps represent and calculate probabilities of events.",
  "learningObjectives": [
    "Students should use set notation to represent probability events, including the symbols for union (∪), intersection (∩), and complement (A') (Maths 5.4)",
    "Students should calculate probabilities using set notation and interpret probability statements written in this mathematical language (Maths 5.4)",
    "Students should understand how to express compound events using Venn diagrams and set notation, such as P(A ∪ B) and P(A ∩ B) (Maths 5.4)"
  ],
  "step1": {
    "title": "Concept: Union (∪) of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union of two events A and B, written as A ∪ B, includes all outcomes that are in event A or event B or in both. The probability of A ∪ B, written as P(A ∪ B), is the chance that either event A or event B or both happen.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two groups of friends invited to a party: Group A and Group B. The union represents all friends who come from either group, including those who belong to both groups.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Event A = rolling an even number on a dice (2,4,6)</span>",
        "<span>Event B = rolling a number greater than 3 (4,5,6)</span>",
        "<span>A ∪ B = numbers that are even or greater than 3: {2,4,5,6}</span>",
        "<span>So, P(A ∪ B) = 4 outcomes out of 6, or \\(\\frac{4}{6}\\)</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Intersection (∩) of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The intersection of two events A and B, written as A ∩ B, shows all outcomes that occur in both events simultaneously. The probability P(A ∩ B) is the chance that both event A and event B happen at the same time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two clubs at school: Science Club (A) and Math Club (B). The intersection represents students who are members of both clubs.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Event A = letters in the word ‘MATH’ (M,A,T,H)</span>",
        "<span>Event B = vowels (A,E,I,O,U)</span>",
        "<span>A ∩ B = letters that are in both sets = {A}</span>",
        "<span>So, P(A ∩ B) = 1 letter out of 4 = \\(\\frac{1}{4}\\)</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Complement (A') of an Event",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The complement of an event A, written A', includes all outcomes that are not in A. The probability P(A') is the chance that event A does not happen. Importantly, P(A) + P(A') = 1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If event A is ‘it rains today,’ then A' is ‘it does not rain today’ — all other weather outcomes besides rain.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Event A = drawing a red card from a deck (26 red cards)</span>",
        "<span>Total cards in deck = 52</span>",
        "<span>P(A) = \\(\\frac{26}{52} = \\frac{1}{2}\\)</span>",
        "<span>P(A') = 1 - P(A) = 1 - \\(\\frac{1}{2}\\) = \\(\\frac{1}{2}\\)</span>"
      ]
    }
  },
  "step4": {
    "title": "Using Venn Diagrams to Represent Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Venn diagrams visually represent events and their relationships. Circles represent sets (events), and overlapping regions show intersections. The union covers all parts of the circles combined. The complement is the area outside the circle of event A within the universal set.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two overlapping circles on a whiteboard: one for fans of football and one for fans of basketball. The overlapping area is those who like both sports.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw two circles labeled A and B overlapping.</span>",
        "<span>Shade A ∪ B as all areas covered by either circle.</span>",
        "<span>Shade A ∩ B as only the overlapping part.</span>",
        "<span>Shade A' as the area outside circle A.</span>"
      ]
    }
  },
  "step5": {
    "title": "Calculating Probabilities Using Set Notation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can calculate probabilities using formulas involving unions, intersections, and complements. For example, P(A ∪ B) = P(A) + P(B) - P(A ∩ B), because outcomes in the intersection are counted twice otherwise.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">When counting guests who like tea or coffee, those who like both get counted twice if you just add the groups. Subtracting the overlap corrects this.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>P(A) = \\(\\frac{1}{3}\\)</span>",
        "<span>P(B) = \\(\\frac{1}{2}\\)</span>",
        "<span>P(A ∩ B) = \\(\\frac{1}{6}\\)</span>",
        "<span>Calculate P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = \\(\\frac{1}{3} + \\frac{1}{2} - \\frac{1}{6} = \\frac{1}{2}\\)</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which expression shows the probability that either event A or event B occurs?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>P(A ∪ B)</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! The union represents either A or B or both occurring.</span>"
          },
          {
            "id": "b",
            "label": "<span>P(A ∩ B)</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. The intersection represents both A and B occurring together.</span>"
          },
          {
            "id": "c",
            "label": "<span>P(A')</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. The complement represents the event not occurring.</span>"
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> of two events A and B is written as A ∩ B and represents outcomes in both A and B simultaneously.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "union",
                "label": "union",
                "isCorrect": false,
                "feedback": "<span>Try again. The union represents all outcomes in A or B or both.</span>"
              },
              {
                "value": "intersection",
                "label": "intersection",
                "isCorrect": true,
                "feedback": "<span>Correct! The intersection is outcomes in both events.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Applying Set Notation to Real Problems",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use knowledge of set notation to translate real-world events into set language and calculate probabilities using the formulas and diagrams.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Event A: Students who play football (20 students)</span>",
        "<span>Event B: Students who play basketball (15 students)</span>",
        "<span>Students who play both sports = 5</span>",
        "<span>Total students = 40</span>",
        "<span>Express A ∪ B and find P(A ∪ B)</span>",
        "<span>Calculate: P(A ∪ B) = (20/40) + (15/40) - (5/40) = 30/40 = \\(\\frac{3}{4}\\)</span>"
      ]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to calculate the probability of the union of two events using set notation and probabilities of individual events.</span>",
      "hint": "<span>Remember to consider events that occur in both A and B when adding probabilities.</span>",
      "mustHaveKeywords": ["union", "P(A ∪ B)", "P(A)", "P(B)", "P(A ∩ B)", "subtract"],
      "optionalKeywords": ["overlap", "double-counting", "formula"],
      "modelAnswer": "<span>The probability of the union of two events A and B, written as P(A ∪ B), is calculated by adding the probabilities of each event, P(A) and P(B), then subtracting the probability of their intersection, P(A ∩ B), to avoid double counting outcomes that occur in both A and B. So, P(A ∪ B) = P(A) + P(B) - P(A ∩ B).</span>",
      "scaffoldPrompts": [
        "<span>Start by writing the formula for the union.</span>",
        "<span>Identify P(A) and P(B).</span>",
        "<span>Explain why you subtract the intersection P(A ∩ B).</span>"
      ]
    }
  }
};