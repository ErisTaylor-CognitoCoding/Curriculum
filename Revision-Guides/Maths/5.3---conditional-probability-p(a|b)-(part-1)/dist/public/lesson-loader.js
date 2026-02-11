window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 1)",
  "strapline": "Understanding and calculating conditional probabilities when one event affects the likelihood of another.",
  "learningObjectives": [
    "Students should understand that conditional probability examines the probability of an event A occurring given that another event B has already occurred, expressed using the notation P(A|B) (Maths 5.3)",
    "Students should learn to calculate conditional probabilities using the formula P(A|B) = P(A ∩ B) ÷ P(B) (Maths 5.3)",
    "Students should explore how the occurrence of one event affects the likelihood of another event happening in real-world scenarios involving dependent events (Maths 5.3)"
  ],
  "step1": {
    "title": "Concept: What is Conditional Probability?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability is the chance that event <strong>A</strong> happens given that event <strong>B</strong> has already occurred. We write this as <em>P(A|B)</em>, which means 'the probability of A given B'. This is different from the usual probability because we know <strong>B</strong> happened, so we only consider outcomes where <strong>B</strong> is true.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Consider a box of sweets with 10 total sweets, 7 red and 3 green. If you know a sweet taken is green (<strong>B</strong>), what is the chance that it is a sour green sweet (<strong>A</strong>)? This changes the probability because you are only looking at green sweets now.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Suppose P(A ∩ B) = 0.1 and P(B) = 0.4</span>",
        "<span>Then P(A|B) = P(A ∩ B) ÷ P(B) = 0.1 ÷ 0.4 = 0.25</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events are events where the outcome of one affects the probability of the other. For example, if you draw a card from a deck and don't replace it, the probability for the second draw changes because there is now one less card in the deck.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine picking a marble from a bag containing red and blue marbles. Once you remove one marble and do not put it back, the chance of picking a red marble changes on the second draw because the total number of marbles has changed.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Bag contains 5 red and 3 blue marbles (8 total).</span>",
        "<span>First pick is a red marble (event B).</span>",
        "<span>Probability of picking a blue marble second (event A) is now 3 out of 7, not 3 out of 8.</span>",
        "<span>This shows events are dependent because the first pick affects the second.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: The Intersection P(A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">P(A ∩ B) is the probability that both events A and B happen together. This is called the intersection of A and B. It represents the overlap where both events occur at the same time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you have a group of students who play football (event A) and some who play basketball (event B), P(A ∩ B) is the probability that a student plays both football and basketball.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>In a class of 30, 12 play football (A), 8 play basketball (B), and 5 play both (A ∩ B).</span>",
        "<span>P(A ∩ B) = 5/30 = 1/6.</span>"
      ]
    }
  },
  "step4": {
    "title": "Using the Formula P(A|B) = P(A ∩ B) ÷ P(B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To calculate conditional probability, you divide the probability of both events happening by the probability of the given event. This is: <em>P(A|B) = P(A ∩ B) ÷ P(B)</em>. It narrows down the total sample space to where <strong>B</strong> is true.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given P(A ∩ B) = 0.15 and P(B) = 0.3, find P(A|B).</span>",
        "<span>Calculate: P(A|B) = 0.15 ÷ 0.3 = 0.5.</span>"
      ]
    }
  },
  "step5": {
    "title": "Real World Example: Medical Testing",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Suppose a test detects a disease (event A) given a positive result (event B). Conditional probability helps find the chance a patient actually has the disease if their test is positive.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>The probability a patient tests positive is 0.1 (P(B)) and probability they have the disease and test positive is 0.08 (P(A ∩ B)).</span>",
        "<span>Calculate P(A|B) = 0.08 ÷ 0.1 = 0.8, so an 80% chance the patient has the disease given a positive result.</span>"
      ]
    }
  },
  "step6": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the notation P(A|B) represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The probability of A occurring before B happens.</span>",
            "isCorrect": false,
            "explanation": "<span>P(A|B) is about the probability of A <em>after</em> B has already occurred, not before.</span>"
          },
          {
            "id": "b",
            "label": "<span>The probability of A occurring given that B has already happened.</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! P(A|B) means the probability of A occurring given B has occurred.</span>"
          },
          {
            "id": "c",
            "label": "<span>The probability of B occurring given that A has already happened.</span>",
            "isCorrect": false,
            "explanation": "<span>This is P(B|A), not P(A|B).</span>"
          },
          {
            "id": "d",
            "label": "<span>The probability that neither A nor B occur.</span>",
            "isCorrect": false,
            "explanation": "<span>This is unrelated to the conditional probability notation.</span>"
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
        "sentence": "<span>The notation <span class=\"font-semibold\">_____</span> stands for the probability of event <strong>A</strong> happening <em>given</em> that event <strong>B</strong> has already happened.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "P(A|B)",
                "label": "P(A|B)",
                "isCorrect": true,
                "feedback": "<span>Correct! This is the notation for conditional probability.</span>"
              },
              {
                "value": "P(B|A)",
                "label": "P(B|A)",
                "isCorrect": false,
                "feedback": "<span>Incorrect. This means the probability of B given A.</span>"
              },
              {
                "value": "P(A ∩ B)",
                "label": "P(A ∩ B)",
                "isCorrect": false,
                "feedback": "<span>This is the probability of both A and B occurring together, not conditional on B.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Calculating Conditional Probability from a Tree Diagram",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tree diagrams help visualize dependent events. To find P(A|B), identify branches representing both A and B, then divide the probability of both by the probability of B.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A tree diagram shows P(B) = 0.5 and P(A ∩ B) = 0.2.</span>",
        "<span>Calculate P(A|B) = 0.2 ÷ 0.5 = 0.4.</span>"
      ]
    }
  },
  "step9": {
    "title": "Concept Check: True or False",
    "mcqs": [
      {
        "id": "mcq-2",
        "question": "<span>If two events are independent, then knowing B has occurred changes the probability of A.</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>True</span>",
            "isCorrect": false,
            "explanation": "<span>If events are independent, knowing B does NOT change the probability of A.</span>"
          },
          {
            "id": "b",
            "label": "<span>False</span>",
            "isCorrect": true,
            "explanation": "<span>Correct. For independent events, P(A|B) = P(A).</span>"
          }
        ]
      }
    ]
  },
  "step10": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A box contains 10 balls: 6 are red and 4 are blue. You pick one ball without looking. If the first ball picked is blue, what is the probability that the second ball picked (without replacement) is red?</span>",
      "hint": "<span>Remember to adjust the total number of balls after the first pick and think about how the first event affects the second.</span>",
      "mustHaveKeywords": ["conditional probability", "dependent events", "P(A|B)", "without replacement"],
      "optionalKeywords": ["intersection", "sample space reduction"],
      "modelAnswer": "<span>After picking a blue ball first, there are now 9 balls left: 6 red and 3 blue. The probability the second picked ball is red given the first was blue is P(red | first blue) = 6/9 = 2/3.</span>",
      "scaffoldPrompts": [
        "<span>What is the total number of balls before and after the first pick?</span>",
        "<span>Which event is given (the first pick) and which event are we finding the probability of (the second pick)?</span>"
      ]
    }
  }
};