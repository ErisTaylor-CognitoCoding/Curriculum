window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 1)",
  "strapline": "Introduction to calculating the probability of an event occurring given that another event has already happened, focusing on dependent events.",
  "learningObjectives": [
    "Students should understand that conditional probability examines the probability of an event A occurring given that another event B has already occurred, expressed using the notation P(A|B) (Maths 5.3)",
    "Students should learn to calculate conditional probabilities using the formula P(A|B) = P(A ∩ B) ÷ P(B) (Maths 5.3)",
    "Students should explore how the occurrence of one event affects the likelihood of another event happening in real-world scenarios involving dependent events (Maths 5.3)"
  ],
  "keyFormulas": [
    "P(A|B) = P(A ∩ B) ÷ P(B)",
    "P(A ∩ B) means the probability that both A and B happen together",
    "For dependent events, P(A ∩ B) = P(B) × P(A|B)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='70' width='280' height='180' fill='#f9f9f9' stroke='#333' /><circle cx='170' cy='160' r='70' fill='#b3d9ff' opacity='0.6'/><circle cx='230' cy='160' r='70' fill='#ff9999' opacity='0.6'/><text x='100' y='60' font-family='sans-serif' font-size='14' fill='#333'>Event A</text><text x='250' y='60' font-family='sans-serif' font-size='14' fill='#333'>Event B</text><text x='180' y='145' font-family='sans-serif' font-size='14' fill='#333'>A ∩ B</text></svg>",
  "step1": {
    "title": "Concept 1: What is Conditional Probability?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability describes the chance of an event <strong>A</strong> occurring given that another event <strong>B</strong> has already happened. This is written as <em>P(A|B)</em>, and is read as ‘the probability of A given B’. It helps us think about how knowing one outcome affects the chance of another.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a bag of sweets. You want to know the chance of picking a red sweet (<strong>A</strong>) but only after you have already picked a sweet that is not green (<strong>B</strong>). Conditional probability helps you figure out that chance.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Suppose P(B) is the chance of picking a sweet that’s not green.</span>",
        "<span>P(A|B) means the chance of picking red knowing the sweet is not green.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events occur when the outcome of one event affects the probability of another event happening. For example, if you draw cards from a deck without replacing them, the first card drawn changes the chance of drawing certain cards next.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">When your friend eats the last slice of pizza, the chance of you getting another slice is zero. The first event (your friend eating the last slice) changes the probability for you.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw one card from a deck, then draw a second without replacing the first.</span>",
        "<span>The chance of picking an Ace second depends on what the first card was.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Understanding P(A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The notation <em>P(A ∩ B)</em> represents the probability that both events <strong>A</strong> and <strong>B</strong> happen together. This is called the 'intersection' of A and B. It is the overlap where both conditions are true.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If <strong>A</strong> is ‘rain’ and <strong>B</strong> is ‘holiday’, then <em>P(A ∩ B)</em> is the chance of having rain while on holiday—both events happening simultaneously.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If P(A) = 0.3, P(B) = 0.5, and the probability of both is 0.2, then P(A ∩ B) = 0.2.</span>"
      ]
    }
  },
  "step4": {
    "title": "Using the Formula to Calculate Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability is calculated using the formula <em>P(A|B) = P(A ∩ B) ÷ P(B)</em>. This means we divide the probability of both events happening by the probability that event B happens.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If P(A ∩ B) = 0.15 and P(B) = 0.5, then P(A|B) = 0.15 ÷ 0.5 = 0.3.</span>",
        "<span>This means if B happens, the chance of A happening given B is 0.3.</span>"
      ]
    }
  },
  "step5": {
    "title": "Real-World Example: Drawing Cards",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Consider a deck of 52 cards. You draw one card, then without replacing it, draw a second card. The chance of drawing a Queen second depends on whether the first card was a Queen or not, showing conditional probability and dependent events in action.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>First, calculate P(B) = probability the second card is Queen.</span>",
        "<span>Then, find P(A ∩ B) = probability the first card was a Queen and the second is too.</span>",
        "<span>Use P(A|B) = P(A ∩ B) ÷ P(B) to find the conditional probability.</span>"
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
          {"id": "a", "label": "<span>The probability of event A occurring given event B has occurred</span>", "isCorrect": true, "explanation": "Correct! P(A|B) means probability of A given B."},
          {"id": "b", "label": "<span>The probability of event B occurring given event A has occurred</span>", "isCorrect": false, "explanation": "Incorrect. P(A|B) is the probability of A given B, not the other way around."},
          {"id": "c", "label": "<span>The sum of probabilities of events A and B</span>", "isCorrect": false, "explanation": "Incorrect. P(A|B) is conditional probability, not the sum."}
        ]
      }
    ]
  },
  "step7": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The probability that both events A and B happen together is called the <span class=\"font-semibold\">_____</span> of A and B.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "intersection", "label": "Intersection", "isCorrect": true, "feedback": "Correct! P(A ∩ B) is the intersection."},
              {"value": "union", "label": "Union", "isCorrect": false, "feedback": "Try again. Union means either A or B or both."},
              {"value": "difference", "label": "Difference", "isCorrect": false, "feedback": "Try again. Difference is not applicable here."}
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>Events where the outcome of one affects the chance of another are called <span class=\"font-semibold\">_____</span> events.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {"value": "dependent", "label": "Dependent", "isCorrect": true, "feedback": "Correct! Dependent events affect each other."},
              {"value": "independent", "label": "Independent", "isCorrect": false, "feedback": "Incorrect. Independent events do not affect each other."}
            ]
          }
        ]
      }
    ]
  },
  "step8": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to calculate the conditional probability P(A|B) and interpret what it means in terms of dependent events.</span>",
      "hint": "Remember to use the formula P(A|B) = P(A ∩ B) ÷ P(B) and explain how B affects A.",
      "mustHaveKeywords": ["conditional probability", "P(A|B)", "P(A ∩ B)", "dependent events"],
      "optionalKeywords": ["formula", "real-world example"],
      "modelAnswer": "<span>Conditional probability, written as P(A|B), is calculated by dividing the probability that both events A and B occur (P(A ∩ B)) by the probability that event B occurs (P(B)). This formula is: <em>P(A|B) = P(A ∩ B) ÷ P(B)</em>. It shows how the outcome of event B affects the likelihood of event A happening. This concept is important for dependent events, where knowing B has occurred changes the probability of A.</span>",
      "scaffoldPrompts": ["State the formula for conditional probability.", "Explain what P(A ∩ B) and P(B) represent.", "Describe how event B affects the probability of event A.", "Give a simple example involving dependent events."]
    }
  }
};