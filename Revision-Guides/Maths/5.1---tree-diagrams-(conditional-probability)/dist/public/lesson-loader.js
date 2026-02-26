window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.1 - Tree diagrams (conditional probability)",
  "strapline": "Learn to visually represent multi-stage probability scenarios and calculate probabilities of dependent events using tree diagrams.",
  "learningObjectives": [
    "Students should learn to represent multi-stage probability scenarios visually using tree diagrams (Maths 5.1)",
    "Students should use tree diagram branches to determine the probability of dependent events occurring in sequence (Maths 5.1)"
  ],
  "keyFormulas": [
    "P(A and B) = P(A) × P(B|A) (Probability of dependent events)",
    "P(B|A) = P(A and B) / P(A) (Conditional Probability definition)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='50' x2='160' y2='100' stroke='black'/><line x1='50' y1='50' x2='160' y2='150' stroke='black'/><line x1='160' y1='100' x2='280' y2='70' stroke='black'/><line x1='160' y1='100' x2='280' y2='130' stroke='black'/><line x1='160' y1='150' x2='280' y2='170' stroke='black'/><line x1='160' y1='150' x2='280' y2='210' stroke='black'/><circle cx='50' cy='50' r='10' fill='#cce5ff'/><text x='45' y='55' font-family='sans-serif' font-size='14'>Start</text><circle cx='160' cy='100' r='10' fill='#f0f8ff'/><text x='155' y='105' font-family='sans-serif' font-size='14'>Event 1</text><circle cx='160' cy='150' r='10' fill='#f0f8ff'/><text x='155' y='155' font-family='sans-serif' font-size='14'>Event 1</text><circle cx='280' cy='70' r='10' fill='#e6f2ff'/><text x='275' y='75' font-family='sans-serif' font-size='14'>Outcome A</text><circle cx='280' cy='130' r='10' fill='#e6f2ff'/><text x='275' y='135' font-family='sans-serif' font-size='14'>Outcome B</text><circle cx='280' cy='170' r='10' fill='#e6f2ff'/><text x='275' y='175' font-family='sans-serif' font-size='14'>Outcome C</text><circle cx='280' cy='210' r='10' fill='#e6f2ff'/><text x='275' y='215' font-family='sans-serif' font-size='14'>Outcome D</text><text x='90' y='80' font-family='sans-serif' font-size='12'>P=...</text><text x='90' y='180' font-family='sans-serif' font-size='12'>P=...</text><text x='210' y='60' font-family='sans-serif' font-size='12'>P=...</text><text x='210' y='120' font-family='sans-serif' font-size='12'>P=...</text><text x='210' y='160' font-family='sans-serif' font-size='12'>P=...</text><text x='210' y='200' font-family='sans-serif' font-size='12'>P=...</text></svg>",
  "step1": {
    "title": "Concept: What is a Tree Diagram?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>tree diagram</strong> is a visual tool that helps us display <em>all possible outcomes</em> of a probability experiment involving two or more events. Each branch shows a possible result, with probabilities written along them.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a tree diagram like a family tree, where each branch leads to different family members. In probability, each branch leads to different outcomes.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Outcomes",
      "problem": "A coin is flipped, and then a six-sided die is rolled. List the possible outcomes on a tree diagram.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the two possible outcomes for the first flip?",
          "answer": "Heads, Tails",
          "feedback": "Correct. The coin has two outcomes: Heads or Tails."
        },
        {
          "id": "q2",
          "prompt": "For Heads, what are the possible die rolls?",
          "answer": "1, 2, 3, 4, 5, 6",
          "feedback": "Correct. The die can land on numbers 1 through 6."
        },
        {
          "id": "q3",
          "prompt": "For Tails, what are the possible die rolls?",
          "answer": "1, 2, 3, 4, 5, 6",
          "feedback": "Correct. The die rolls are the same regardless of the coin result."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability is the probability that one event happens <strong>given that</strong> another event has already occurred. It changes the chance of the second event depending on the first.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If it is raining now, the chance you'll take an umbrella is higher than usual. The probability of carrying an umbrella depends on the weather event.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Conditional Probability",
      "problem": "A bag has 3 red balls and 2 blue balls. One ball is taken out and not replaced. What is the probability the second ball is blue given the first was red?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(first ball is red)?",
          "answer": "3/5",
          "feedback": "Correct. 3 red balls out of 5 total balls."
        },
        {
          "id": "q2",
          "prompt": "After removing one red ball, how many balls remain?",
          "answer": "4",
          "feedback": "Correct. 5 - 1 = 4 balls left."
        },
        {
          "id": "q3",
          "prompt": "What is P(second ball is blue | first was red)?",
          "answer": "2/4",
          "feedback": "Correct. 2 blue balls remain out of 4 balls."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events are events where the outcome of the first event <strong>affects</strong> the probability of the second event. For example, picking cards without replacement changes the deck composition, affecting future probabilities.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you eat one candy from a bowl, the chances of picking a red candy next changes because there’s now one less candy in the bowl.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Dependence",
      "problem": "A box contains 5 green and 3 yellow marbles. You pick one marble without replacement. Find if the events 'first marble green' and 'second marble yellow' are dependent.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the probability of the second marble yellow affected by what the first marble was? (yes/no)",
          "answer": "yes",
          "feedback": "Correct, because the first pick changes the total marbles."
        },
        {
          "id": "q2",
          "prompt": "How many marbles remain after one is picked?",
          "answer": "7",
          "feedback": "Correct, one marble is removed from 8 total."
        }
      ]
    }
  },
  "step4": {
    "title": "Constructing a Tree Diagram for Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When events are dependent, the probabilities on branches after the first event must be adjusted to show the new conditions. This is important to correctly calculate probabilities in sequence.</p>",
    "workedExample": {
      "title": "Worked Example: Drawing and Labeling Branches",
      "problem": "A bag has 2 red and 3 blue balls. Drawing two balls without replacement, draw a tree diagram showing all possible outcomes with probabilities.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the probability of first ball red?",
          "answer": "2/5",
          "feedback": "Correct, 2 red balls out of 5 total."
        },
        {
          "id": "q2",
          "prompt": "If first ball was red, what probability should you put on second ball red?",
          "answer": "1/4",
          "feedback": "Correct, one red ball left out of 4."
        },
        {
          "id": "q3",
          "prompt": "If first ball was blue, what is P(second ball red)?",
          "answer": "2/4",
          "feedback": "Correct, 2 red balls left out of 4."
        }
      ]
    }
  },
  "step5": {
    "title": "Calculating Probabilities Using Tree Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the probability of dependent events happening in sequence, multiply the probabilities along the branches leading to the outcome.</p>",
    "workedExample": {
      "title": "Worked Example: Multiplying Branch Probabilities",
      "problem": "Using the previous red/blue balls example, find the probability of choosing a red then a blue ball.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(first ball red)?",
          "answer": "2/5",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "What is P(second ball blue | first red)?",
          "answer": "3/4",
          "feedback": "Correct, 3 blue balls remain out of 4."
        },
        {
          "id": "q3",
          "prompt": "Multiply these probabilities to get P(red then blue).",
          "answer": "6/20",
          "feedback": "Correct, 2/5 × 3/4 = 6/20."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bag contains 4 green and 6 yellow balls. Two balls are drawn without replacement. Use a tree diagram to calculate the probability that the first ball drawn is green and the second ball drawn is yellow.</span>",
      "hint": "Draw branches for the first and second draws, adjust probabilities for the second branch based on the first outcome.",
      "mustHaveKeywords": ["tree diagram", "conditional probability", "dependent events", "multiply probabilities"],
      "optionalKeywords": ["without replacement", "changing sample space"],
      "modelAnswer": "<span>First, draw two branches representing the first draw: green (4/10) and yellow (6/10). From each branch, draw two more branches for the second draw with updated probabilities: if first was green, second is yellow (6/9); if first was yellow, second is green (4/9). The probability of first green then second yellow is (4/10) × (6/9) = 24/90 = 4/15.</span>",
      "scaffoldPrompts": [
        "What is the probability of drawing a green ball first?",
        "After removing one green ball, what is the total number of balls left?",
        "What is the probability of drawing a yellow ball second given the first was green?",
        "Multiply these probabilities to find the final answer."
      ]
    }
  }
};