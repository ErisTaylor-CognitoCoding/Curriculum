window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.1 - Tree diagrams (conditional probability)",
  "strapline": "Learn to visually represent multi-stage probability problems and calculate probabilities for dependent events using tree diagrams.",
  "learningObjectives": [
    "Students should learn to represent multi-stage probability scenarios visually using tree diagrams (Maths 5.1)",
    "Students should use tree diagram branches to determine the probability of dependent events occurring in sequence (Maths 5.1)"
  ],
  "keyFormulas": [
    "P(A and B) = P(A) × P(B|A)",
    "Sum of probabilities at each branch = 1",
    "Conditional Probability: P(B|A) = P(A and B) / P(A)"
  ],
  "diagramHtml": "<svg viewBox='0 0 480 320' xmlns='http://www.w3.org/2000/svg' style='font-family:sans-serif;'>\
    <line x1='50' y1='40' x2='150' y2='100' stroke='#333' stroke-width='2' />\
    <line x1='50' y1='40' x2='150' y2='180' stroke='#333' stroke-width='2' />\
    <circle cx='50' cy='40' r='8' fill='#555' />\
    <circle cx='150' cy='100' r='8' fill='#333' />\
    <circle cx='150' cy='180' r='8' fill='#333' />\
    <text x='30' y='35' font-size='14' fill='#000'>Start</text>\
    <text x='160' y='95' font-size='14' fill='#000'>Event A</text>\
    <text x='160' y='175' font-size='14' fill='#000'>Not A</text>\
    <text x='100' y='65' font-size='14' fill='#000'>P(A)=p</text>\
    <text x='100' y='145' font-size='14' fill='#000'>P(not A)=1-p</text>\
  </svg>",
  "step1": {
    "title": "Concept: What is a Tree Diagram?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>tree diagram</strong> is a visual tool used to display all possible outcomes of a multi-stage probability experiment. Each branch represents an outcome with its associated probability written on it.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a family tree showing branches for each generation. Each branch represents possible paths your family could have taken, just as each branch in a tree diagram shows possible outcomes.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Drawing a Simple Tree Diagram",
      "problem": "Draw a tree diagram for flipping a coin twice, showing all possible outcomes.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the two possible outcomes of a coin flip?",
          "answer": "Heads, Tails",
          "feedback": "Correct. The coin can land on Heads or Tails."
        },
        {
          "id": "q2",
          "prompt": "Draw two branches from the start representing these outcomes. Done?",
          "answer": "done",
          "feedback": "Good. You should have two branches labeled Heads and Tails."
        },
        {
          "id": "q3",
          "prompt": "Now, for the second flip, draw branches from each first flip outcome representing Heads or Tails again.",
          "answer": "done",
          "feedback": "Perfect. The tree now shows all possible outcomes for two flips."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability is the chance that an event happens given that another event has already occurred. In a tree diagram, the probabilities on branches at the second level depend on the outcome of the first event.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you pick a colored marble from a bag and don’t put it back. The chance of picking a red marble on the second pick depends on the first pick because the total marbles have changed.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Conditional Probability",
      "problem": "A bag contains 3 red and 2 blue marbles. One marble is picked without replacement. What is the probability the second marble is blue given the first was red?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the probability of picking a red marble first?",
          "answer": "3/5",
          "feedback": "Correct. There are 3 red marbles out of 5 total."
        },
        {
          "id": "q2",
          "prompt": "Given the first marble was red (not replaced), how many marbles remain?",
          "answer": "4",
          "feedback": "Correct. One marble is taken out, so 4 remain."
        },
        {
          "id": "q3",
          "prompt": "How many blue marbles remain?",
          "answer": "2",
          "feedback": "Correct. The blue marbles were not touched, so still 2."
        },
        {
          "id": "q4",
          "prompt": "What is the probability of picking blue as the second marble given first was red?",
          "answer": "2/4",
          "feedback": "Well done! That's 1/2 after simplification."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events are those where the outcome of one affects the probability of the next. In our marble example, because marbles are not replaced, the outcome of the first pick changes probabilities for the second.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like picking sweets from a jar without replacing them. Each choice affects the sweets left and their likelihood of being picked next.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Dependent Events",
      "problem": "A bag has 4 green and 3 yellow balls. Two balls are picked one after the other without replacement. Are the two picks dependent or independent events?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the first pick affect what happens in the second?",
          "answer": "yes",
          "feedback": "Correct. Because the first ball is not replaced, it changes the total and probabilities."
        },
        {
          "id": "q2",
          "prompt": "Therefore, are these dependent events?",
          "answer": "dependent",
          "feedback": "Right. Removing a ball changes the chance of what comes next."
        }
      ]
    }
  },
  "step4": {
    "title": "Building a Complete Tree Diagram for Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let’s build a tree diagram for the previous green and yellow ball example. First, draw branches for the first pick with probabilities. Then draw branches for the second pick from each first pick outcome, adjusting probabilities since there is no replacement.</p>",
    "workedExample": {
      "title": "Worked Example: Construct a Tree Diagram",
      "problem": "Fill in the probabilities for each branch in the tree diagram for two picks without replacement from 4 green and 3 yellow balls.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(Green) on the first pick?",
          "answer": "4/7",
          "feedback": "Correct, 4 green out of 7 total balls."
        },
        {
          "id": "q2",
          "prompt": "What is P(Yellow) on the first pick?",
          "answer": "3/7",
          "feedback": "Correct, 3 yellow out of 7 total balls."
        },
        {
          "id": "q3",
          "prompt": "If first pick was Green, what is P(Green) on second pick?",
          "answer": "3/6",
          "feedback": "Right, one green taken so 3 green remain out of 6."
        },
        {
          "id": "q4",
          "prompt": "If first pick was Green, what is P(Yellow) on second pick?",
          "answer": "3/6",
          "feedback": "Correct, 3 yellow remain out of 6."
        },
        {
          "id": "q5",
          "prompt": "If first pick was Yellow, what is P(Green) on second pick?",
          "answer": "4/6",
          "feedback": "Yes, all green remain, 4 out of 6 balls."
        },
        {
          "id": "q6",
          "prompt": "If first pick was Yellow, what is P(Yellow) on second pick?",
          "answer": "2/6",
          "feedback": "Correct, one yellow taken, 2 yellow remain out of 6."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 500 320' xmlns='http://www.w3.org/2000/svg' style='font-family:sans-serif;'>\
      <circle cx='40' cy='40' r='6' fill='#333' />\
      <line x1='40' y1='40' x2='140' y2='100' stroke='#000' stroke-width='2' />\
      <line x1='40' y1='40' x2='140' y2='180' stroke='#000' stroke-width='2' />\
      <circle cx='140' cy='100' r='6' fill='#555'/>\
      <circle cx='140' cy='180' r='6' fill='#555'/>\
      <line x1='140' y1='100' x2='240' y2='60' stroke='#000' stroke-width='2' />\
      <line x1='140' y1='100' x2='240' y2='140' stroke='#000' stroke-width='2' />\
      <line x1='140' y1='180' x2='240' y2='160' stroke='#000' stroke-width='2' />\
      <line x1='140' y1='180' x2='240' y2='220' stroke='#000' stroke-width='2' />\
      <circle cx='240' cy='60' r='6' fill='#777'/>\
      <circle cx='240' cy='140' r='6' fill='#777'/>\
      <circle cx='240' cy='160' r='6' fill='#777'/>\
      <circle cx='240' cy='220' r='6' fill='#777'/>\
      <text x='10' y='35' font-size='12'>Start</text>\
      <text x='150' y='95' font-size='12'>Green</text>\
      <text x='150' y='175' font-size='12'>Yellow</text>\
      <text x='90' y='75' font-size='12'>4/7</text>\
      <text x='90' y='155' font-size='12'>3/7</text>\
      <text x='190' y='55' font-size='12'>Green 3/6</text>\
      <text x='190' y='135' font-size='12'>Yellow 3/6</text>\
      <text x='190' y='165' font-size='12'>Green 4/6</text>\
      <text x='190' y='225' font-size='12'>Yellow 2/6</text>\
    </svg>"
  },
  "step5": {
    "title": "Calculating Probabilities Using Tree Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the probability of a sequence of dependent events happening, multiply the probabilities along the branches of the tree diagram.</p>",
    "workedExample": {
      "title": "Worked Example: Probability of Picking Two Green Balls in a Row",
      "problem": "What is the probability of picking two green balls consecutively without replacement from 4 green and 3 yellow balls?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the probability of the first green ball?",
          "answer": "4/7",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "What is the probability of the second green ball given the first was green?",
          "answer": "3/6",
          "feedback": "Correct."
        },
        {
          "id": "q3",
          "prompt": "Multiply these probabilities to find the overall probability.",
          "answer": "12/42",
          "feedback": "Yes, multiply 4/7 × 3/6 = 12/42."
        },
        {
          "id": "q4",
          "prompt": "Simplify the fraction 12/42.",
          "answer": "2/7",
          "feedback": "Great! 12/42 simplifies to 2/7."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A box contains 5 red and 3 white balls. Two balls are drawn one after the other without replacement. Draw a tree diagram to represent all possible outcomes and calculate the probability that both balls drawn are white.</span>",
      "hint": "Remember to adjust probabilities for the second pick as the total number of balls changes after the first draw.",
      "mustHaveKeywords": ["tree diagram", "conditional probability", "dependent events", "multiply probabilities"],
      "optionalKeywords": ["no replacement", "probability branches", "simplify fractions"],
      "modelAnswer": "<span>First, draw branches for the first draw with probabilities: P(Red) = 5/8, P(White) = 3/8. Then for the second draw from each first outcome, adjust probabilities: if first is white, P(White second) = 2/7. Multiply along the path for two whites: (3/8) × (2/7) = 6/56 = 3/28.</span>",
      "scaffoldPrompts": [
        "Start by drawing two branches for the first ball: red and white.",
        "Write their probabilities on the branches.",
        "From each first pick outcome, draw two more branches for the second pick with updated probabilities.",
        "Identify the branches where both picks are white.",
        "Multiply probabilities along those branches to find the final answer."
      ]
    }
  }
};