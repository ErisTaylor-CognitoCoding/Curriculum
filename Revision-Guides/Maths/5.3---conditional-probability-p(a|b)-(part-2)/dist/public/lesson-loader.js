window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 2)",
  "strapline": "Learning to calculate and apply conditional probability in dependent event scenarios using formulae, two-way tables, and tree diagrams.",
  "learningObjectives": [
    "Students should calculate conditional probabilities using the formula P(A|B) = P(A \u2229 B) \u00f7 P(B) (Maths 5.3)",
    "Students should apply conditional probability to real-world scenarios involving dependent events, such as drawing items without replacement (Maths 5.3)",
    "Students should interpret two-way tables and tree diagrams where prior outcomes influence subsequent probabilities (Maths 5.3)"
  ],
  "keyFormulas": [
    "P(A|B) = P(A \u2229 B) \u00f7 P(B), where P(B) > 0",
    "P(A \u2229 B) = Probability of both A and B occurring together",
    "Conditional probabilities change if events are dependent (outcomes affect each other)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#eef6f9' stroke='#0971b2' stroke-width='2'/><text x='200' y='50' text-anchor='middle' font-family='sans-serif' font-size='18' fill='#0971b2'>Tree Diagram: Drawing Without Replacement</text><line x1='200' y1='60' x2='120' y2='120' stroke='#333' stroke-width='2'/><line x1='200' y1='60' x2='280' y2='120' stroke='#333' stroke-width='2'/><circle cx='120' cy='120' r='20' fill='#bae1ff'/><text x='120' y='125' text-anchor='middle' font-family='sans-serif' font-size='14'>Item A (P=3/5)</text><line x1='120' y1='140' x2='80' y2='200' stroke='#333' stroke-width='2'/><line x1='120' y1='140' x2='160' y2='200' stroke='#333' stroke-width='2'/><circle cx='80' cy='200' r='20' fill='#ffd6a5'/><text x='80' y='205' text-anchor='middle' font-family='sans-serif' font-size='14'>Item A (P=2/4)</text><circle cx='160' cy='200' r='20' fill='#ffd6a5'/><text x='160' y='205' text-anchor='middle' font-family='sans-serif' font-size='14'>Other (P=2/4)</text><circle cx='280' cy='120' r='20' fill='#bae1ff'/><text x='280' y='125' text-anchor='middle' font-family='sans-serif' font-size='14'>Other (P=2/5)</text><line x1='280' y1='140' x2='240' y2='200' stroke='#333' stroke-width='2'/><line x1='280' y1='140' x2='320' y2='200' stroke='#333' stroke-width='2'/><circle cx='240' cy='200' r='20' fill='#ffd6a5'/><text x='240' y='205' text-anchor='middle' font-family='sans-serif' font-size='14'>Item A (P=3/4)</text><circle cx='320' cy='200' r='20' fill='#ffd6a5'/><text x='320' y='205' text-anchor='middle' font-family='sans-serif' font-size='14'>Other (P=1/4)</text></svg>",
  "step1": {
    "title": "Concept: Understanding Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability P(A|B) is the probability that event A happens given that event B has already occurred. It means we focus only on situations where B is true and ask how likely A is under this condition.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a box of red and blue balls. If I tell you I picked a blue ball (B), what is the chance the ball is also small (A)? You only consider blue balls when calculating this.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Conditional Probability Formula Parts",
      "problem": "If P(A ∩ B) = 0.3 and P(B) = 0.5, calculate P(A|B). Let's find each part step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A ∩ B), the probability of both A and B occurring?",
          "answer": "0.3",
          "feedback": "Correct! P(A ∩ B) is 0.3."
        },
        {
          "id": "q2",
          "prompt": "What is P(B), the probability of B occurring?",
          "answer": "0.5",
          "feedback": "Right! P(B) is given as 0.5."
        },
        {
          "id": "q3",
          "prompt": "Using these, what is P(A|B) = P(A ∩ B) ÷ P(B)? Calculate the value.",
          "answer": "0.6",
          "feedback": "Excellent! 0.3 ÷ 0.5 = 0.6."
        }
      ]
    }
  },
  "step2": {
    "title": "Applying the Formula: Dependent Events Example",
    "explanation": "<p>When events affect each other, like drawing cards without replacing, the probabilities change after each event. Let's see how probabilities update.</p>",
    "workedExample": {
      "title": "Worked Example: Drawing Without Replacement",
      "problem": "There are 5 balls: 3 red and 2 blue. One ball is drawn, then another without replacement. Find P(second is red | first was red).",
      "questions": [
        {
          "id": "q4",
          "prompt": "What is the probability the first ball drawn is red (P(B))?",
          "answer": "3/5",
          "feedback": "Correct, 3 red balls out of 5 total."
        },
        {
          "id": "q5",
          "prompt": "After drawing a red ball first, how many red balls remain?",
          "answer": "2",
          "feedback": "Correct! One red ball is removed, so 2 remain."
        },
        {
          "id": "q6",
          "prompt": "What is the probability the second ball drawn is red given the first was red (P(A|B))?",
          "answer": "2/4",
          "feedback": "Great! Now 4 balls remain total, 2 are red."
        }
      ]
    }
  },
  "step3": {
    "title": "Interpreting Two-Way Tables",
    "explanation": "<p>Two-way tables summarise probabilities for joint events. We use them to find P(A ∩ B) and P(B) and then calculate P(A|B).</p>",
    "workedExample": {
      "title": "Worked Example: Two-Way Table",
      "problem": "A survey shows 30 people like tea and 20 like coffee. 10 people like both. Find P(Tea | Coffee).",
      "questions": [
        {
          "id": "q7",
          "prompt": "What is P(Tea ∩ Coffee)?",
          "answer": "10/60",
          "feedback": "Correct! 10 people like both out of 60."
        },
        {
          "id": "q8",
          "prompt": "What is P(Coffee)?",
          "answer": "20/60",
          "feedback": "Right! 20 people like coffee out of 60."
        },
        {
          "id": "q9",
          "prompt": "Calculate P(Tea | Coffee) = P(Tea ∩ Coffee) ÷ P(Coffee). What is the answer?",
          "answer": "0.5",
          "feedback": "Good job! 10/60 ÷ 20/60 = 0.5."
        }
      ]
    }
  },
  "step4": {
    "title": "Interpreting Tree Diagrams for Dependent Events",
    "explanation": "<p>Tree diagrams show sequences of events with branches illustrating different possible outcomes and their probabilities.</p>",
    "workedExample": {
      "title": "Worked Example: Tree Diagram Walkthrough",
      "problem": "Use the tree diagram of 5 balls (3 red, 2 blue) drawn without replacement. Calculate P(second blue | first red).",
      "questions": [
        {
          "id": "q10",
          "prompt": "What is P(first red)?",
          "answer": "3/5",
          "feedback": "Correct!"
        },
        {
          "id": "q11",
          "prompt": "After first red, how many blue balls remain?",
          "answer": "2",
          "feedback": "Right, none removed since first was red."
        },
        {
          "id": "q12",
          "prompt": "What is total balls left after first draw?",
          "answer": "4",
          "feedback": "Correct!"
        },
        {
          "id": "q13",
          "prompt": "Calculate P(second blue | first red).",
          "answer": "2/4",
          "feedback": "Excellent!"
        }
      ]
    }
  },
  "step5": {
    "title": "Checking Understanding: Multiple Choice Quiz",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which formula correctly expresses conditional probability?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>P(A|B) = P(A \u2229 B) \u00f7 P(B)</span>",
            "isCorrect": true,
            "explanation": "Correct! This is the definition of conditional probability."
          },
          {
            "id": "b",
            "label": "<span>P(B) = P(A) \u00f7 P(A \u2229 B)</span>",
            "isCorrect": false,
            "explanation": "Incorrect. This formula is not valid."
          },
          {
            "id": "c",
            "label": "<span>P(A \u2229 B) = P(A|B) + P(B)</span>",
            "isCorrect": false,
            "explanation": "Wrong. P(A \u2229 B) is a product, not sum."
          }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>When drawing without replacement, the events are:</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Independent</span>",
            "isCorrect": false,
            "explanation": "Incorrect. Without replacement, events affect each other."
          },
          {
            "id": "b",
            "label": "<span>Dependent</span>",
            "isCorrect": true,
            "explanation": "Correct! Outcome of first affects probabilities of second."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A box contains 6 green and 4 yellow marbles. Two marbles are drawn one after the other without replacement. Calculate the conditional probability that the second marble is yellow given that the first marble is green.</span>",
      "hint": "Remember to calculate P(A \u2229 B) and P(B) first, then apply the formula P(A|B) = P(A \u2229 B) \u00f7 P(B). Careful to consider how the first draw changes the total.",
      "mustHaveKeywords": ["conditional probability", "without replacement", "P(A|B)", "dependent events"],
      "optionalKeywords": ["total marbles", "reduced sample size"],
      "modelAnswer": "<span>First, identify events: B = first marble green, A = second marble yellow. P(B) = 6/10 as 6 green marbles out of 10. After first green taken, marbles left: 9 total, 4 yellow remain. So, P(A|B) = 4/9. Using the formula, P(A|B) = P(A \u2229 B) \u00f7 P(B), finding P(A \u2229 B) is (6/10) \u00d7 (4/9) = 24/90 = 4/15, and P(B) = 6/10. Finally, P(A|B) = (4/15) \u00f7 (6/10) = (4/15) \u00d7 (10/6) = 4/9.</span>",
      "scaffoldPrompts": ["Calculate P(B): probability first marble green","Determine how many marbles remain after first draw","Find P(A|B): probability second is yellow given first green","Apply the formula P(A|B) = P(A \u2229 B) \u00f7 P(B) to confirm"]
    }
  }
};