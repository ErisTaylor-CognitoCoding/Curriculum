window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 1)",
  "strapline": "An introduction to understanding and calculating conditional probability including dependent events.",
  "learningObjectives": [
    "Students should understand that conditional probability examines the probability of an event A occurring given that another event B has already occurred, expressed using the notation P(A|B) (Maths 5.3)",
    "Students should learn to calculate conditional probabilities using the formula P(A|B) = P(A ∩ B) ÷ P(B) (Maths 5.3)",
    "Students should explore how the occurrence of one event affects the likelihood of another event happening in real-world scenarios involving dependent events (Maths 5.3)"
  ],
  "step1": {
    "title": "Concept: Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability is the probability of one event happening given that another event has already occurred. It is written as <strong>P(A|B)</strong> and read as 'the probability of A given B'. This helps us understand how the occurrence of event B changes the likelihood of event A.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a bag with 5 red and 5 blue marbles. If you know that someone already took out a blue marble (event B), what is the chance that the next marble you pick is red (event A)? The probability changes because the condition (blue marble already taken) affects what remains.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>There are 5 red and 5 blue marbles in a bag.</span>",
        "<span>Event B: The first marble drawn is blue.</span>",
        "<span>Event A: The second marble drawn is red.</span>",
        "<span>Calculate <strong>P(A|B)</strong>.</span>",
        "<span>Step 1: Total marbles after first blue drawn is 9 (5 red + 4 blue).</span>",
        "<span>Step 2: Probability of drawing red after blue is <strong>5/9</strong>.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of these best describes conditional probability P(A|B)?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The probability of event A occurring given that event B has already occurred.</span>",
            "isCorrect": true,
            "explanation": "<span>This is the definition of conditional probability.</span>"
          },
          {
            "id": "b",
            "label": "<span>The probability that events A and B occur independently.</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect, conditional probability considers dependence, not independence.</span>"
          },
          {
            "id": "c",
            "label": "<span>The probability that either event A or B occurs.</span>",
            "isCorrect": false,
            "explanation": "<span>This is the union of events, not conditional probability.</span>"
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> represents the probability that both events A and B occur together.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "intersection",
                "label": "intersection (P(A ∩ B))",
                "isCorrect": true,
                "feedback": "<span>Correct! P(A ∩ B) is the intersection.</span>"
              },
              {
                "value": "union",
                "label": "union (P(A ∪ B))",
                "isCorrect": false,
                "feedback": "<span>Try again. Union means either A or B or both occur.</span>"
              },
              {
                "value": "complement",
                "label": "complement (P(A^c))",
                "isCorrect": false,
                "feedback": "<span>Try again. Complement is the event not happening.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events occur when the outcome of one event affects the probability of another event. For example, when drawing cards without replacement, the first card drawn changes the composition of the deck, changing the probability for the second draw.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you pick a jellybean out of a jar and don't put it back, the chance of picking a red jellybean next time is changed by what you took first.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Deck has 52 cards.</span>",
        "<span>Event B: first card drawn is a King.</span>",
        "<span>What is P(second card is an Ace | first card is a King)?</span>",
        "<span>Step 1: After removing one King, 51 cards remain.</span>",
        "<span>Step 2: 4 Aces remain, so P(Ace second | King first) = 4/51.</span>"
      ]
    }
  },
  "step5": {
    "title": "Working with Formula for Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The formula for conditional probability is <strong>P(A|B) = P(A ∩ B) ÷ P(B)</strong>. This means the probability of A occurring given B has happened equals the probability both happen divided by the probability B happens.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Two events A and B have <strong>P(A ∩ B) = 0.12</strong> and <strong>P(B) = 0.3</strong>.</span>",
        "<span>Find P(A|B)</span>",
        "<span>Calculate: P(A|B) = 0.12 ÷ 0.3 = 0.4</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bag has 7 green and 5 yellow balls. One ball is drawn and is yellow (event B). Without replacing it, another ball is drawn (event A). Calculate <strong>P(A|B)</strong>, the probability that the second ball is green.</span>",
      "hint": "<span>Remember to first find the total balls left after the first yellow ball is drawn, then use the formula <strong>P(A|B) = P(A ∩ B) ÷ P(B)</strong>.</span>",
      "mustHaveKeywords": ["conditional probability", "dependent events", "P(A|B)", "formula", "probability"],
      "optionalKeywords": ["intersection", "without replacement"],
      "modelAnswer": "<span>After drawing a yellow ball first, there are 7 green and 4 yellow balls left, total 11 balls. The probability that the first ball is yellow, P(B), is 5/12. The probability that the second ball is green after the first yellow is P(A ∩ B) = (5/12) * (7/11). To find P(A|B), divide P(A ∩ B) by P(B):<br>P(A|B) = [(5/12) * (7/11)] ÷ (5/12) = 7/11.<br>Therefore, the probability that the second ball is green given the first was yellow is 7/11.</span>",
      "scaffoldPrompts": [
        "Identify how many balls remain after the first draw.",
        "Calculate the formula P(A|B) = P(A ∩ B) ÷ P(B).",
        "Simplify the expression to find the final probability."
      ]
    }
  }
};