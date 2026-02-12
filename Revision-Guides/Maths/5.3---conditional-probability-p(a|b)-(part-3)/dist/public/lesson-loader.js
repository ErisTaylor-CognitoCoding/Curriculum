window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 3)",
  "strapline": "Understand and calculate conditional probabilities using formulae and interpret real-world examples involving dependent events.",
  "learningObjectives": [
    "Students should calculate conditional probabilities using the formula P(A|B) = P(A ∩ B) ÷ P(B) (Maths 5.3)",
    "Students should apply conditional probability to real-world scenarios involving dependent events, such as drawing items without replacement (Maths 5.3)",
    "Students should interpret two-way tables and tree diagrams where prior outcomes influence subsequent probabilities (Maths 5.3)"
  ],
  "keyFormulas": [
    "P(A|B) = P(A ∩ B) ÷ P(B)",
    "<strong>P(A ∩ B)</strong> = Probability that both event A and event B occur",
    "For dependent events, P(A|B) changes based on occurrence of B"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#444' stroke-width='2'/><text x='200' y='30' font-family='Arial' font-size='18' text-anchor='middle' fill='#222'>Tree Diagram Example</text><line x1='200' y1='60' x2='120' y2='120' stroke='#000' stroke-width='1.5'/><line x1='200' y1='60' x2='280' y2='120' stroke='#000' stroke-width='1.5'/><line x1='120' y1='120' x2='80' y2='180' stroke='#000' stroke-width='1.5'/><line x1='120' y1='120' x2='160' y2='180' stroke='#000' stroke-width='1.5'/><line x1='280' y1='120' x2='240' y2='180' stroke='#000' stroke-width='1.5'/><line x1='280' y1='120' x2='320' y2='180' stroke='#000' stroke-width='1.5'/><text x='160' y='60' font-family='Arial' font-size='14' text-anchor='middle' fill='#222'>Start</text><text x='80' y='140' font-family='Arial' font-size='14' fill='#222'>A</text><text x='160' y='140' font-family='Arial' font-size='14' fill='#222'>¬A</text><text x='240' y='140' font-family='Arial' font-size='14' fill='#222'>B</text><text x='320' y='140' font-family='Arial' font-size='14' fill='#222'>¬B</text></svg>",
  "step1": {
    "title": "Concept: Understanding Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability <strong>P(A|B)</strong> is the probability that event A happens given that event B has already occurred. It is calculated using the formula <em>P(A|B) = P(A ∩ B) ÷ P(B)</em>, where <strong>P(A ∩ B)</strong> is the probability of both events happening together, and <strong>P(B)</strong> is the probability of event B.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a bag of colored balls. You first pull out a red ball (event B). Now, given that you know the ball was red, what is the chance the next ball you draw is blue (event A)? This is conditional probability because your first draw affects your second.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>There are 5 red and 3 blue balls in a bag.</span>",
        "<span>Event B: Drawing a red ball on the first draw.</span>",
        "<span>Event A: Drawing a blue ball on the second draw without replacement.</span>",
        "<span>Calculate P(A|B) by finding P(A ∩ B) then dividing by P(B).</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the notation P(A|B) represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The probability of event A happening given that event B has occurred.</span>",
            "isCorrect": true,
            "explanation": "Correct! P(A|B) reads as 'the probability of A given B has happened.'"
          },
          {
            "id": "b",
            "label": "<span>The probability of event B happening given that event A has occurred.</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The order matters: P(A|B) means probability of A given B, not the other way around."
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
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> represents the probability of both events A and B occurring together.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "A",
                "label": "P(A ∩ B)",
                "isCorrect": true,
                "feedback": "Correct! P(A ∩ B) is the intersection of A and B."
              },
              {
                "value": "B",
                "label": "P(A|B)",
                "isCorrect": false,
                "feedback": "Not quite. P(A|B) is conditional probability, not the intersection."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Applying Conditional Probability to Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events affect each other’s probabilities. For example, drawing cards <em>without replacement</em> changes the sample space because the first event alters the total number of remaining items.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you eat one apple from a fruit basket, the chance of picking another apple next depends on the first apple you took. The events are dependent because the total available apples changed.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A box contains 4 green and 6 yellow marbles.</span>",
        "<span>One marble is drawn and not replaced; it is green.</span>",
        "<span>Find the probability that the next marble drawn is yellow.</span>",
        "<span>Use conditional probability considering the reduced total marbles after the first draw.</span>"
      ]
    }
  },
  "step5": {
    "title": "Interpreting Two-Way Tables for Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two-way tables show frequencies of occurrences across two categorical variables. Conditional probabilities can be calculated by focusing only on the column or row where event B has happened.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a table showing students who passed or failed and who studied or did not study.</span>",
        "<span>Calculate the probability a student passed given that they studied using the table.</span>",
        "<span>Use P(A|B) = P(A ∩ B) / P(B) by identifying correct counts from the table.</span>"
      ]
    }
  },
  "step6": {
    "title": "Interpreting Tree Diagrams for Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tree diagrams display sequences of events and their probabilities. You multiply along branches to find intersection events, then use division for conditional probabilities.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A coin is flipped, then a die is rolled.</span>",
        "<span>Calculate the probability of rolling a 6 given the coin landed heads.</span>",
        "<span>Use the tree diagram probabilities to calculate P(A ∩ B) then conditional P(A|B).</span>"
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bag contains 5 red and 7 blue balls. Two balls are drawn in sequence without replacement. Calculate the probability that the second ball is blue given that the first ball drawn was red.</span>",
      "hint": "First, find the probability of drawing a red ball then a blue ball (P(A ∩ B)). Then find the probability of drawing a red ball (P(B)). Use these to calculate P(A|B).",
      "mustHaveKeywords": ["conditional probability", "dependent events", "without replacement", "P(A ∩ B)", "P(B)"],
      "optionalKeywords": ["sequence of events", "sample space changes"],
      "modelAnswer": "<span>Since the first ball is red, P(B) = 5/12.<br/>After removing one red ball, there are now 4 red and 7 blue balls left, total 11.<br/>P(A ∩ B) = Probability first red then blue = (5/12) × (7/11) = 35/132.<br/>Therefore, P(A|B) = P(A ∩ B) ÷ P(B) = (35/132) ÷ (5/12) = (35/132) × (12/5) = 7/11.<br/>So the conditional probability the second ball is blue given the first was red is 7/11.</span>",
      "scaffoldPrompts": [
        "Identify event A and event B from the question.",
        "Calculate P(A ∩ B) by multiplying probabilities along the sequence.",
        "Calculate P(B), the probability of the event already occurred.",
        "Divide P(A ∩ B) by P(B) to find P(A|B)."
      ]
    }
  }
};