window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.1 - Tree diagrams (conditional probability)",
  "strapline": "Learn how to visually represent multi-stage probability experiments using tree diagrams and calculate probabilities of dependent events.",
  "learningObjectives": [
    "Students should learn to represent multi-stage probability scenarios visually using tree diagrams (Maths 5.1)",
    "Students should use tree diagram branches to determine the probability of dependent events occurring in sequence (Maths 5.1)"
  ],
  "keyFormulas": [
    "P(A and B) = P(A) × P(B|A)  (Probability of dependent events occurring in sequence)",
    "P(B|A) = P(A and B) / P(A)  (Definition of conditional probability)",
    "Sum of probabilities from any branch point = 1"
  ],
  "diagramHtml": "<svg viewBox='0 0 350 180' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='90' x2='120' y2='40' stroke='#333' stroke-width='2'/><line x1='50' y1='90' x2='120' y2='140' stroke='#333' stroke-width='2'/><line x1='120' y1='40' x2='190' y2='20' stroke='#333' stroke-width='2'/><line x1='120' y1='40' x2='190' y2='60' stroke='#333' stroke-width='2'/><line x1='120' y1='140' x2='190' y2='120' stroke='#333' stroke-width='2'/><line x1='120' y1='140' x2='190' y2='160' stroke='#333' stroke-width='2'/><circle cx='50' cy='90' r='12' fill='#e0e0e0' stroke='#333'/><text x='50' y='95' text-anchor='middle' font-family='sans-serif' font-size='12'>Start</text><circle cx='120' cy='40' r='12' fill='#f7f7f7' stroke='#333'/><text x='120' y='45' text-anchor='middle' font-family='sans-serif' font-size='12'>A</text><circle cx='120' cy='140' r='12' fill='#f7f7f7' stroke='#333'/><text x='120' y='145' text-anchor='middle' font-family='sans-serif' font-size='12'>B</text><circle cx='190' cy='20' r='12' fill='#fff' stroke='#333'/><text x='190' y='25' text-anchor='middle' font-family='sans-serif' font-size='12'>A1</text><circle cx='190' cy='60' r='12' fill='#fff' stroke='#333'/><text x='190' y='65' text-anchor='middle' font-family='sans-serif' font-size='12'>A2</text><circle cx='190' cy='120' r='12' fill='#fff' stroke='#333'/><text x='190' y='125' text-anchor='middle' font-family='sans-serif' font-size='12'>B1</text><circle cx='190' cy='160' r='12' fill='#fff' stroke='#333'/><text x='190' y='165' text-anchor='middle' font-family='sans-serif' font-size='12'>B2</text><text x='85' y='60' font-family='sans-serif' font-size='11'>P(A)</text><text x='85' y='130' font-family='sans-serif' font-size='11'>P(B)</text><text x='155' y='10' font-family='sans-serif' font-size='11'>P(A1|A)</text><text x='155' y='70' font-family='sans-serif' font-size='11'>P(A2|A)</text><text x='155' y='110' font-family='sans-serif' font-size='11'>P(B1|B)</text><text x='155' y='170' font-family='sans-serif' font-size='11'>P(B2|B)</text></svg>",
  "step1": {
    "title": "Concept: What is a Tree Diagram?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A tree diagram is a branching diagram that shows all possible outcomes of a probability experiment involving two or more events. Each branch represents a possible outcome,<strong> with probabilities written on the branches</strong>. It helps us visualise complex, multi-stage probability events clearly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a family tree: it branches out to show parents, children, grandchildren, and so on. Similarly, a tree diagram branches out to show all possible outcomes in sequence.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Drawing a Simple Tree Diagram",
      "problem": "Imagine tossing a coin twice. Draw a tree diagram showing all possible outcomes.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the possible outcomes of the first toss? (Type 'H' for heads or 'T' for tails)",
          "answer": "H,T",
          "feedback": "Correct! The first toss can be Heads or Tails."
        },
        {
          "id": "q2",
          "prompt": "For each branch from the first toss, what are the outcomes of the second toss? (Use 'H,T')",
          "answer": "H,T",
          "feedback": "Correct. The second toss also has Heads or Tails."
        },
        {
          "id": "q3",
          "prompt": "What is the total number of possible outcomes after two tosses?",
          "answer": "4",
          "feedback": "Correct! 2 outcomes from first toss × 2 from second toss = 4 total."
        }
      ]
    }
  },
  "step2": {
    "title": "Key Concept: Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability is the chance that an event happens given that another event has already occurred. In tree diagrams, <strong>branch probabilities depend on earlier branches</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Conditional Probability",
      "problem": "You have a bag with 3 red balls and 2 blue balls. You pick one ball without replacement, then pick a second ball. What is the probability that the first ball is red and the second ball is blue?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the probability of picking a red ball first? (Type your answer as a fraction)",
          "answer": "3/5",
          "feedback": "Correct. There are 3 red balls out of 5 total."
        },
        {
          "id": "q2",
          "prompt": "After picking a red ball first, how many balls remain? (Total remaining)",
          "answer": "4",
          "feedback": "Correct. One ball was removed, so 4 remain."
        },
        {
          "id": "q3",
          "prompt": "How many blue balls remain after first picking red?",
          "answer": "2",
          "feedback": "Correct. No blue balls were removed yet."
        },
        {
          "id": "q4",
          "prompt": "What is the probability of picking a blue ball second given a red ball was picked first? (fraction)",
          "answer": "2/4",
          "feedback": "Correct. 2 blue balls remain out of 4 total."
        }
      ]
    }
  },
  "step3": {
    "title": "Using Tree Diagrams for Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events are where the outcome of one affects the probability of the next. For example, picking cards without replacement changes the deck composition, affecting probabilities for subsequent picks.</p>",
    "workedExample": {
      "title": "Worked Example: Dependent Events with Tree Diagram",
      "problem": "A box has 4 green and 6 yellow marbles. Two draws are made <em>without replacement</em>. Use a tree diagram to find P(green then yellow).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(green first)? (fraction)",
          "answer": "4/10",
          "feedback": "Great! There are 4 green marbles out of 10."
        },
        {
          "id": "q2",
          "prompt": "After picking green first, how many marbles are left?",
          "answer": "9",
          "feedback": "Correct, 1 marble removed, so 9 remain."
        },
        {
          "id": "q3",
          "prompt": "How many yellow marbles remain after picking green?",
          "answer": "6",
          "feedback": "Exactly. Yellow marbles remain unchanged."
        },
        {
          "id": "q4",
          "prompt": "What is P(yellow second | green first)? (fraction)",
          "answer": "6/9",
          "feedback": "Correct! 6 yellow out of 9 marbles left."
        },
        {
          "id": "q5",
          "prompt": "Calculate P(green then yellow) by multiplying P(green first) × P(yellow second | green first). (Type as fraction or decimal)",
          "answer": "24/90",
          "feedback": "Correct! 4/10 × 6/9 = 24/90."
        }
      ]
    }
  },
  "step4": {
    "title": "Interactive Practice: Completing a Tree Diagram",
    "explanation": "<p>Let's practice completing a tree diagram when picking fruits from a basket without replacement.</p>",
    "problem": "There are 2 apples and 3 oranges in a basket. Two fruits are picked in sequence without replacement.",
    "questions": [
      {
        "id": "q1",
        "prompt": "What is the probability of picking an apple first?",
        "answer": "2/5",
        "feedback": "Correct! 2 apples out of 5 fruits."
      },
      {
        "id": "q2",
        "prompt": "What is the probability of picking an orange first?",
        "answer": "3/5",
        "feedback": "Correct! 3 oranges out of 5 fruits."
      },
      {
        "id": "q3",
        "prompt": "If an apple was picked first, what is the probability of picking an orange second?",
        "answer": "3/4",
        "feedback": "Well done! After one apple is removed, 4 fruits remain with 3 oranges."
      },
      {
        "id": "q4",
        "prompt": "If an orange was picked first, what is the probability of picking an apple second?",
        "answer": "2/4",
        "feedback": "Great! 2 apples remain out of 4 fruits."
      },
      {
        "id": "q5",
        "prompt": "Calculate the probability of picking an apple then an orange in sequence.",
        "answer": "6/20",
        "feedback": "Correct! 2/5 × 3/4 = 6/20."
      },
      {
        "id": "q6",
        "prompt": "Calculate the probability of picking an orange then an apple in sequence.",
        "answer": "6/20",
        "feedback": "Correct! 3/5 × 2/4 = 6/20."
      }
    ],
    "diagramHtml": "<svg viewBox='0 0 400 180' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='90' r='14' fill='#e0f7fa' stroke='#00796b'/><text x='50' y='95' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#004d40'>Start</text><line x1='64' y1='85' x2='130' y2='50' stroke='#004d40' stroke-width='2'/><line x1='64' y1='95' x2='130' y2='130' stroke='#004d40' stroke-width='2'/><circle cx='140' cy='50' r='12' fill='#b2dfdb' stroke='#00796b'/><text x='140' y='55' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#004d40'>Apple 1st</text><circle cx='140' cy='130' r='12' fill='#b2dfdb' stroke='#00796b'/><text x='140' y='135' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#004d40'>Orange 1st</text><line x1='152' y1='50' x2='220' y2='30' stroke='#004d40' stroke-width='2'/><line x1='152' y1='50' x2='220' y2='70' stroke='#004d40' stroke-width='2'/><line x1='152' y1='130' x2='220' y2='110' stroke='#004d40' stroke-width='2'/><line x1='152' y1='130' x2='220' y2='150' stroke='#004d40' stroke-width='2'/><circle cx='230' cy='30' r='12' fill='#80cbc4' stroke='#00796b'/><text x='230' y='35' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#004d40'>Orange 2nd</text><circle cx='230' cy='70' r='12' fill='#80cbc4' stroke='#00796b'/><text x='230' y='75' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#004d40'>Apple 2nd</text><circle cx='230' cy='110' r='12' fill='#80cbc4' stroke='#00796b'/><text x='230' y='115' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#004d40'>Apple 2nd</text><circle cx='230' cy='150' r='12' fill='#80cbc4' stroke='#00796b'/><text x='230' y='155' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#004d40'>Orange 2nd</text><text x='90' y='45' font-family='sans-serif' font-size='11' fill='#004d40'>2/5</text><text x='90' y='135' font-family='sans-serif' font-size='11' fill='#004d40'>3/5</text><text x='185' y='25' font-family='sans-serif' font-size='11' fill='#004d40'>3/4</text><text x='185' y='75' font-family='sans-serif' font-size='11' fill='#004d40'>1/4</text><text x='185' y='115' font-family='sans-serif' font-size='11' fill='#004d40'>2/4</text><text x='185' y='165' font-family='sans-serif' font-size='11' fill='#004d40'>2/4</text></svg>"
  },
  "step5": {
    "title": "Quick Quiz: Identify Dependent and Independent Events",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following pairs of events are <strong>dependent</strong>?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>Drawing two cards from a deck <em>without replacement</em></span>",
            "isCorrect": true,
            "explanation": "Correct. The first draw changes the composition, affecting the second."
          },
          {
            "id": "b",
            "label": "<span>Flipping a coin twice</span>",
            "isCorrect": false,
            "explanation": "No, each coin toss is independent of the previous outcome."
          },
          {
            "id": "c",
            "label": "<span>Choosing balls from a bag, <em>replacing each ball before drawing again</em></span>",
            "isCorrect": false,
            "explanation": "No, because the bag composition stays the same for each draw."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A box contains 5 red, 3 blue, and 2 green balls. Two balls are drawn in sequence without replacement. Use a tree diagram to calculate the probability that the first ball is red and the second ball is green.</span>",
      "hint": "<span>Remember to update the total number of balls and remaining balls of each color after the first draw.</span>",
      "mustHaveKeywords": ["tree diagram", "conditional probability", "dependent events", "multiply probabilities"],
      "optionalKeywords": ["without replacement", "total outcomes", "branching"],
      "modelAnswer": "<span>First, draw branches for the first draw with probabilities of picking each colour (5/10 red, 3/10 blue, 2/10 green). Next, from the branch where the first ball is red, draw branches for the second draw updating the totals (now 9 balls remain with 2 green). Calculate P(red first) = 5/10 and P(green second | red first) = 2/9. Multiply these to get P(red then green) = (5/10) × (2/9) = 10/90 = 1/9.</span>",
      "scaffoldPrompts": [
        "Start by writing probabilities for the first draw branches",
        "Update the total number of balls after the first ball is drawn",
        "Write probabilities for the second draw branches given the first event",
        "Multiply the probabilities along the branch red → green"
      ]
    }
  }
};