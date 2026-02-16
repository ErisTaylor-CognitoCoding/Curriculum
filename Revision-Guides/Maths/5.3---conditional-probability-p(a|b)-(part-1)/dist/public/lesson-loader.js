window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 1)",
  "strapline": "Understand how to calculate and interpret conditional probabilities and how one event affects the likelihood of another.",
  "learningObjectives": [
    "Students should understand that conditional probability examines the probability of an event A occurring given that another event B has already occurred, expressed using the notation P(A|B) (Maths 5.3)",
    "Students should learn to calculate conditional probabilities using the formula P(A|B) = P(A \u2229 B) \u00f7 P(B) (Maths 5.3)",
    "Students should explore how the occurrence of one event affects the likelihood of another event happening in real-world scenarios involving dependent events (Maths 5.3)"
  ],
  "keyFormulas": [
    "P(A|B) = P(A \u2229 B) \u00f7 P(B) (Conditional Probability Formula)",
    "P(A \u2229 B) = Probability that both A and B occur (Intersection of A and B)",
    "Remember: P(B) \u2260 0 when calculating P(A|B)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><circle cx='150' cy='150' r='80' fill='#add8e6' stroke='#333' stroke-width='2'/><circle cx='230' cy='150' r='80' fill='#90ee90' stroke='#333' stroke-width='2' fill-opacity='0.7'/><text x='100' y='90' font-family='sans-serif' font-size='16' fill='#000'>Event A</text><text x='250' y='90' font-family='sans-serif' font-size='16' fill='#000'>Event B</text><text x='180' y='160' font-family='sans-serif' font-size='18' fill='#000' font-weight='bold'>A \u2229 B</text></svg>",
  "step1": {
    "title": "Concept: What is Conditional Probability?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability looks at the chance of event <strong>A</strong> happening if we already know event <strong>B</strong> has occurred. This is written as <strong>P(A|B)</strong> and read as 'the probability of A given B'. It helps us understand how knowledge of one event changes the likelihood of another.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a bag of colored balls. If you know the first ball drawn is red, what are the chances the next ball is blue? This is conditional probability because the first event affects the second.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding P(A|B) Notation",
      "problem": "If event B has definitely happened, what does P(A|B) represent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is P(A|B) the chance of event A happening regardless of event B?",
          "answer": "no",
          "feedback": "Correct, P(A|B) is specifically the chance of A happening given B has happened."
        },
        {
          "id": "q2",
          "prompt": "Is P(A|B) the chance of event A happening after knowing B occurred?",
          "answer": "yes",
          "feedback": "Exactly! P(A|B) describes the probability of A assuming B has occurred."
        }
      ]
    }
  },
  "step2": {
    "title": "Formula Introduction: How to Calculate Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The formula to calculate conditional probability is: <strong>P(A|B) = P(A \u2229 B) \u00f7 P(B)</strong>.<br>This means you divide the probability of both events A and B happening together by the probability that B happens.</p>",
    "workedExample": {
      "title": "Worked Example: Using the Formula Step-by-Step",
      "problem": "Suppose P(A \u2229 B) = 0.3 and P(B) = 0.5. Find P(A|B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the value of P(A \u2229 B)?",
          "answer": "0.3",
          "feedback": "Correct, this is the numerator in the formula."
        },
        {
          "id": "q2",
          "prompt": "What is the value of P(B)?",
          "answer": "0.5",
          "feedback": "Correct, this is the denominator in the formula."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A|B) = P(A \u2229 B) \u00f7 P(B). What is your answer?",
          "answer": "0.6",
          "feedback": "Correct! 0.3 \u00f7 0.5 = 0.6."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Concept: Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events are where the outcome of one affects the other. For example, if you draw a card from a deck and do not replace it, the probabilities change for the next draw because the deck composition is altered.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine picking sweets from a jar without putting any back. Each pick changes the chance of getting certain sweets next.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Dependent Events",
      "problem": "You have 3 red and 2 blue balls in a bag. You pick a ball without replacing it. If the first ball is red, what is the probability the second ball is blue?",
      "questions": [
        {
          "id": "q1",
          "prompt": "After picking one red ball, how many balls are left in total?",
          "answer": "4",
          "feedback": "Correct, 5 total initially - 1 picked = 4 left."
        },
        {
          "id": "q2",
          "prompt": "How many blue balls remain in the bag?",
          "answer": "2",
          "feedback": "Correct, blue balls are untouched."
        },
        {
          "id": "q3",
          "prompt": "What is the probability of picking a blue ball now?",
          "answer": "0.5",
          "feedback": "Yes, 2 blue balls out of 4 total balls, so 2/4 = 0.5."
        }
      ]
    }
  },
  "step4": {
    "title": "Understanding P(A ∩ B) - The Intersection of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">P(A \u2229 B) represents the probability that both events A and B happen at the same time. It is the overlap between event A and event B.</p>",
    "analogy": {
      "title": "Visual Example",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is the set of all red cards and B is the set of all face cards in a deck, P(A \u2229 B) is the probability of drawing a red face card (e.g., queen of hearts).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding P(A ∩ B)",
      "problem": "In a deck of 52 cards, there are 26 red cards and 12 face cards. 6 cards are both red and face cards. Find P(A \u2229 B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the number of red face cards?",
          "answer": "6",
          "feedback": "Correct, 6 red face cards."
        },
        {
          "id": "q2",
          "prompt": "What is the total number of cards in the deck?",
          "answer": "52",
          "feedback": "Correct, 52 cards total."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A \u2229 B) = Number of red face cards \u00f7 total cards. What is your answer as a decimal?",
          "answer": "0.115",
          "feedback": "Correct, 6/52 \u2248 0.115."
        }
      ]
    }
  },
  "step5": {
    "title": "Putting It All Together: Calculate P(A|B) Using P(A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the conditional probability P(A|B), you need both P(A \u2229 B) and P(B). Divide the overlap probability by the probability of B to see how event B affects event A.</p>",
    "workedExample": {
      "title": "Worked Example: Complete Calculation",
      "problem": "From the previous card example, P(A \u2229 B) = 6/52, and P(B) = 12/52. Calculate P(A|B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A \u2229 B) as a fraction?",
          "answer": "6/52",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "What is P(B) as a fraction?",
          "answer": "12/52",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A|B) = P(A \u2229 B) \u00f7 P(B). What is the simplified fraction or decimal?",
          "answer": "0.5",
          "feedback": "Yes, (6/52) \u00f7 (12/52) = 6/12 = 0.5."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bag contains 5 red balls and 7 green balls. Two balls are drawn one after the other without replacement. Calculate the probability that the second ball drawn is green given that the first ball drawn was red.</span>",
      "hint": "Remember to update the number of balls after the first draw and use the formula P(A|B) = P(A \u2229 B) \u00f7 P(B).",
      "mustHaveKeywords": ["P(A|B)", "dependent events", "P(A \u2229 B)", "probability update"],
      "optionalKeywords": ["without replacement", "intersection"],
      "modelAnswer": "<span>First, find P(B): the probability the first ball is red. There are 5 red balls out of 12 total, so P(B) = 5/12.<br>Next, find P(A \u2229 B): the probability both balls are red then green in order. First red (5/12), then green (7/11), so P(A \u2229 B) = (5/12) \u00d7 (7/11) = 35/132.<br>Finally, use the formula: P(A|B) = P(A \u2229 B) / P(B) = (35/132) \u00f7 (5/12) = (35/132) \u00d7 (12/5) = 7/11 ≈ 0.636.<br>So, the probability the second ball is green given the first is red is 7/11.</span>",
      "scaffoldPrompts": [
        "Step 1: Calculate P(B) - the probability the first ball drawn is red.",
        "Step 2: Calculate P(A \u2229 B) - the probability that first ball is red and second is green.",
        "Step 3: Divide P(A \u2229 B) by P(B) to get P(A|B)."
      ]
    }
  }
};