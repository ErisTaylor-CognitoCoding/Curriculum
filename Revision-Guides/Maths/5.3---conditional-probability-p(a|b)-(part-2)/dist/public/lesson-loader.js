window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 2)",
  "strapline": "Use conditional probability to solve problems involving dependent events, two-way tables, and tree diagrams.",
  "learningObjectives": [
    "Students should calculate conditional probabilities using the formula P(A|B) = P(A ∩ B) ÷ P(B) (Maths 5.3)",
    "Students should apply conditional probability to real-world scenarios involving dependent events, such as drawing items without replacement (Maths 5.3)",
    "Students should interpret two-way tables and tree diagrams where prior outcomes influence subsequent probabilities (Maths 5.3)"
  ],
  "step1": {
    "title": "Concept: Understanding Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability <strong>P(A|B)</strong> represents the probability that event A occurs given that event B has already happened. The vertical bar <strong>|</strong> means 'given that' or 'conditional on'. It changes how we calculate chances because event B affects event A.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a bag of different colored balls. If you pick one out and it’s red (event B), the chance that the next ball is blue (event A) depends on that first red ball having been taken out — the condition changes the probabilities.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Suppose 6 red balls and 4 blue balls are in a bag.</span>",
        "<span>If you pick one ball and it’s red, what is the probability the next ball is blue? Use P(Blue|Red). Find total balls left (9).</span>",
        "<span>Use P(Blue & Red) / P(Red). P(Red) = 6/10, and P(Blue and Red) = Probability pick red then blue = (6/10) × (4/9).</span>",
        "<span>Calculate P(Blue|Red) = (6/10 × 4/9) ÷ (6/10) = 4/9.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does P(A|B) represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The probability that A and B happen together.</span>",
            "isCorrect": false,
            "explanation": "P(A|B) is conditional probability, not joint probability."
          },
          {
            "id": "b",
            "label": "<span>The probability that event A happens given that event B has occurred.</span>",
            "isCorrect": true,
            "explanation": "Correct! Conditional probability depends on event B happening first."
          },
          {
            "id": "c",
            "label": "<span>The probability of event B only.</span>",
            "isCorrect": false,
            "explanation": "P(A|B) is about event A given B, not B alone."
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
        "sentence": "<span>The formula for conditional probability is P(A|B) = P(<span class=\"font-semibold\">_____</span>) ÷ P(<span class=\"font-semibold\">_____</span>).</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "a1",
                "label": "A ∩ B, B",
                "isCorrect": true,
                "feedback": "Correct! P(A|B) = P(A ∩ B) ÷ P(B)."
              },
              {
                "value": "a2",
                "label": "A ∪ B, A",
                "isCorrect": false,
                "feedback": "Try again. The formula uses the intersection ∩, not union ∪."
              },
              {
                "value": "a3",
                "label": "B, A ∩ B",
                "isCorrect": false,
                "feedback": "The numerator is the intersection P(A ∩ B), the denominator is P(B)."
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "b1",
                "label": "B",
                "isCorrect": true,
                "feedback": "Correct! P(B) is in the denominator."
              },
              {
                "value": "b2",
                "label": "A",
                "isCorrect": false,
                "feedback": "Try again, the denominator is the condition event B."
              },
              {
                "value": "b3",
                "label": "A ∩ B",
                "isCorrect": false,
                "feedback": "P(A ∩ B) is the numerator, not denominator."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Dependent Events and Without Replacement",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Events are <strong>dependent</strong> when the outcome of one affects the probability of another. For example, drawing without replacement changes the total number of items and their probabilities for next picks.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of removing a specific card from a deck; there are now fewer cards for the next draw, changing the chance of drawing certain cards.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A bag contains 5 red and 3 green marbles. You pick one without replacement.</span>",
        "<span>What is the probability the second marble is red, given the first was green?</span>",
        "<span>Calculate total marbles after first pick: 7.</span>",
        "<span>Since first was green, red marbles remain 5. So P(Red|Green) = 5 / 7.</span>"
      ]
    }
  },
  "step5": {
    "title": "Interpreting Two-Way Tables for Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two-way tables display frequencies or probabilities for two events together. To find P(A|B), look at the proportion of event A among those that have event B.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A school survey shows 40 boys and 60 girls. 25 boys and 30 girls play football.</span>",
        "<span>Find probability a student plays football given they are a boy.</span>",
        "<span>P(football|boy) = Number of boys who play football / Total boys = 25 / 40 = 5/8.</span>"
      ]
    }
  },
  "step6": {
    "title": "Using Tree Diagrams for Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tree diagrams show all possible outcomes and their probabilities, branching step-by-step. Each branch probability depends on prior outcomes for dependent events, making it easier to find P(A|B).</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>There are 3 red and 2 blue balls. Draw two balls without replacement.</span>",
        "<span>First branch: P(Red first) = 3/5, P(Blue first) = 2/5.</span>",
        "<span>Second branch given first red: P(Red second|Red first) = 2/4, P(Blue second|Red first) = 2/4.</span>",
        "<span>To find P(Second ball blue given first ball red), use P(Blue second|Red first) = 2/4.</span>"
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A box contains 6 red and 4 green sweets. Two sweets are taken out one by one without replacement. Calculate the probability that the second sweet taken is green given that the first sweet taken was red.</span>",
      "hint": "Remember that after the first sweet is taken, the total number of sweets decreases and the composition changes. Use the formula P(A|B) = P(A ∩ B) ÷ P(B) and think about dependent events.",
      "mustHaveKeywords": [
        "conditional probability",
        "dependent events",
        "without replacement",
        "P(A|B) = P(A ∩ B) ÷ P(B)"
      ],
      "optionalKeywords": ["two sweets", "probabilities change after first pick"],
      "modelAnswer": "<span>Since the first sweet is red, it is removed from the box. Initially there were 6 red and 4 green sweets, now there are 5 red and 4 green sweets left, so 9 sweets total. The probability that the second sweet is green given the first was red is P(green|red) = number of green sweets remaining ÷ total sweets remaining = 4/9.</span>",
      "scaffoldPrompts": [
        "Identify total sweets and their colours initially.",
        "Calculate remaining sweets after first red sweet is taken.",
        "Apply the conditional probability formula considering dependent events."
      ]
    }
  }
};