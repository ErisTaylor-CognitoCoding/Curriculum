window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 3)",
  "strapline": "Learn how to calculate and apply conditional probabilities with dependent events using real-world examples and representations.",
  "learningObjectives": [
    "Students should calculate conditional probabilities using the formula P(A|B) = P(A ∩ B) ÷ P(B) (Maths 5.3)",
    "Students should apply conditional probability to real-world scenarios involving dependent events, such as drawing items without replacement (Maths 5.3)",
    "Students should interpret two-way tables and tree diagrams where prior outcomes influence subsequent probabilities (Maths 5.3)"
  ],
  "step1": {
    "title": "Concept: Understanding Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability <strong>P(A|B)</strong> is the probability of event A occurring given that event B has already occurred. The vertical bar '|' means 'given that' or 'on condition that'. It helps us focus on a smaller sample space where B is true.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you go to a bakery that sells 10 muffins, 4 chocolate and 6 vanilla. If you know a muffin is chocolate, what's the chance it has sprinkles? You are focusing only on chocolate muffins, not the whole batch.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Step 1: Identify events A and B: A = muffin has sprinkles, B = muffin is chocolate.</span>",
        "<span>Step 2: Find P(A ∩ B) (probability of muffin being chocolate with sprinkles) and P(B) (probability of chocolate muffin).</span>",
        "<span>Step 3: Calculate P(A|B) = P(A ∩ B) ÷ P(B) to find the conditional probability.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>If event B has happened, what does P(A|B) represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The probability of A happening regardless of B</span>",
            "isCorrect": false,
            "explanation": "<span>P(A) without any conditions is not conditional probability.</span>"
          },
          {
            "id": "b",
            "label": "<span>The probability of A happening given B has occurred</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! P(A|B) is the probability of A assuming B has already happened.</span>"
          },
          {
            "id": "c",
            "label": "<span>The probability of B happening given A has occurred</span>",
            "isCorrect": false,
            "explanation": "<span>This is P(B|A), the reverse conditional probability.</span>"
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
                "value": "P(A ∩ B)",
                "label": "P(A ∩ B)",
                "isCorrect": true,
                "feedback": "<span>Correct! P(A ∩ B) is the intersection probability.</span>"
              },
              {
                "value": "P(A | B)",
                "label": "P(A | B)",
                "isCorrect": false,
                "feedback": "<span>Incorrect, that is conditional probability, not intersection.</span>"
              },
              {
                "value": "Dependent Events",
                "label": "Dependent Events",
                "isCorrect": false,
                "feedback": "<span>Incorrect, this is a type of event relationship, not a probability value.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Dependent Events and Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events are those where the outcome of one affects the probability of the other. For example, when drawing cards without replacement from a deck, the probability changes because the total number of possible outcomes changes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you pick a marble from a bag without putting it back, the chance of picking a green marble changes because there are fewer marbles left in the bag.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with 5 red and 3 blue balls in a bag.</span>",
        "<span>Find the probability of drawing a red ball first: P(R1) = 5/8.</span>",
        "<span>If the first ball is red, find the probability of drawing a blue ball second: P(B2|R1) = 3/7.</span>",
        "<span>Note how the total changes from 8 to 7 since one ball was removed.</span>"
      ]
    }
  },
  "step5": {
    "title": "Interpreting Representations: Two-Way Tables",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two-way tables help organize data about two categorical variables. Conditional probabilities can be found by focusing only on a row or column depending on the 'given' condition.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">A table showing how many students like math vs science, where you can find the chance a student likes science given they like math by looking at the math row.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at the row for students who like math: 30 like both math and science, 20 like math only.</span>",
        "<span>Calculate P(science | math) = 30 / (30 + 20) = 30/50 = 0.6.</span>"
      ]
    }
  },
  "step6": {
    "title": "Interpreting Representations: Tree Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tree diagrams show sequential events and their probabilities. Each branch represents the probability of an event happening after the previous event(s). They are useful for visualizing conditional probability, especially in dependent events.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of choosing an ice cream flavor then choosing a topping, where the probability of toppings depends on the chosen flavor.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>First draw: 5 red, 3 blue balls; probability of red = 5/8.</span>",
        "<span>Second draw depends on first result: if first red, then blue chance = 3/7; if first blue, then red chance = 5/7.</span>",
        "<span>Multiply along branches to find combined probabilities like P(red then blue) = 5/8 × 3/7.</span>"
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bag contains 6 green marbles and 4 yellow marbles. Two marbles are drawn one after the other without replacement. Calculate the probability that the second marble is yellow given that the first marble drawn was green.</span>",
      "hint": "<span>Remember to adjust the total number of marbles left after the first draw and use the conditional probability formula P(A|B) = P(A ∩ B) ÷ P(B).</span>",
      "mustHaveKeywords": ["conditional probability", "dependent events", "without replacement", "P(A|B)", "P(A ∩ B)"],
      "optionalKeywords": ["total marbles", "intersection", "probability tree"],
      "modelAnswer": "<span>First, find P(B), the probability the first marble is green: 6/10. Then find P(A ∩ B), the probability the first is green and the second is yellow: (6/10) × (4/9) = 24/90. Using the formula, P(second is yellow | first is green) = P(A ∩ B) / P(B) = (24/90) ÷ (6/10) = (24/90) × (10/6) = 4/9.</span>",
      "scaffoldPrompts": ["Identify event A: second marble is yellow.", "Identify event B: first marble is green.", "Calculate P(B).", "Calculate P(A ∩ B).", "Apply the formula P(A|B) = P(A ∩ B) ÷ P(B)."]
    }
  }
};