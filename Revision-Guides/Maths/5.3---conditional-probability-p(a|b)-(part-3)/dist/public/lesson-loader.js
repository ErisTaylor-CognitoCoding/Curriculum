window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 3)",
  "strapline": "Understanding and applying conditional probability to dependent events using tables and tree diagrams.",
  "learningObjectives": [
    "Students should calculate conditional probabilities using the formula P(A|B) = P(A ∩ B) ÷ P(B) (Maths 5.3)",
    "Students should apply conditional probability to real-world scenarios involving dependent events, such as drawing items without replacement (Maths 5.3)",
    "Students should interpret two-way tables and tree diagrams where prior outcomes influence subsequent probabilities (Maths 5.3)"
  ],
  "keyFormulas": [
    "P(A|B) = \\frac{P(A \\cap B)}{P(B)}",
    "P(A \\cap B) = P(A) \\times P(B|A) or P(B) \\times P(A|B)",
    "For dependent events: Adjust probabilities after first event affects second"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#e8f0fe' stroke='#2a4d69' /><text x='200' y='40' font-family='sans-serif' font-weight='bold' font-size='16' text-anchor='middle'>Tree Diagram Example</text><line x1='200' y1='50' x2='120' y2='120' stroke='#2a4d69' stroke-width='2' /><line x1='200' y1='50' x2='280' y2='120' stroke='#2a4d69' stroke-width='2' /><text x='110' y='115' font-family='sans-serif' font-size='14'>Event B</text><text x='290' y='115' font-family='sans-serif' font-size='14'>Not B</text><line x1='120' y1='120' x2='70' y2='190' stroke='#2a4d69' stroke-width='2' /><line x1='120' y1='120' x2='170' y2='190' stroke='#2a4d69' stroke-width='2' /><text x='65' y='185' font-family='sans-serif' font-size='14'>Event A</text><text x='175' y='185' font-family='sans-serif' font-size='14'>Not A</text></svg>",
  "step1": {
    "title": "Introducing Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability measures the likelihood of event <strong>A</strong> happening given that event <strong>B</strong> has already occurred. The notation for this is <em>P(A|B)</em>, read as 'probability of A given B'.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a bag of colored balls. If you are told the ball drawn was red (<em>B</em>), what is the chance that it is also striped (<em>A</em>)? This adjusted chance is the conditional probability.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating P(A|B)",
      "problem": "From a class of 30 students, 18 play football (B), and among those 8 also play basketball (A). Calculate P(A|B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many students play football? (P(B))",
          "answer": "18",
          "feedback": "Correct, 18 students play football."
        },
        {
          "id": "q2",
          "prompt": "How many students play both football and basketball? (P(A ∩ B))",
          "answer": "8",
          "feedback": "Correct, 8 students play both sports."
        },
        {
          "id": "q3",
          "prompt": "Use the formula: P(A|B) = P(A ∩ B) ÷ P(B). Calculate P(A|B) as a fraction.",
          "answer": "8/18",
          "feedback": "Well done, 8 divided by 18 is correct."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">When events are dependent, the outcome of one event affects the probability of the next. Drawing cards from a deck without replacement is a classic example.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you pick a red card from a deck and don’t put it back, the deck changes for the next pick. This changes the probabilities of what’s left.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Drawing Without Replacement",
      "problem": "A bag contains 5 red and 3 blue balls. One ball is drawn (without replacement), then another. What is the probability both are red?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the probability the first ball is red? Provide as a fraction.",
          "answer": "5/8",
          "feedback": "Correct, 5 out of 8 balls are red initially."
        },
        {
          "id": "q2",
          "prompt": "After one red ball is drawn, how many red balls remain?",
          "answer": "4",
          "feedback": "Correct, one less red ball remains."
        },
        {
          "id": "q3",
          "prompt": "How many balls remain in total after the first draw?",
          "answer": "7",
          "feedback": "Correct, total balls decrease by one."
        },
        {
          "id": "q4",
          "prompt": "Calculate the probability the second ball is red given the first was red.",
          "answer": "4/7",
          "feedback": "Good, as only 4 red balls remain out of 7."
        },
        {
          "id": "q5",
          "prompt": "Combine the probabilities to find P(both red) = P(first red) × P(second red given first). Write the product as a fraction.",
          "answer": "5/8 × 4/7",
          "feedback": "Excellent, you’ve correctly combined dependent events."
        }
      ]
    }
  },
  "step3": {
    "title": "Interpreting Two-Way Tables",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two-way tables display frequencies or probabilities of two categorical variables and can be used to find conditional probabilities.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a matrix showing how many students play different sports, cross-classified by gender. The table helps us find probabilities like 'probability a student is male given they play football'.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Conditional Probability from a Two-Way Table",
      "problem": "The table below shows numbers of students playing tennis or not, split by gender:<br><table border='1'><tr><th></th><th>Tennis</th><th>No Tennis</th><th>Total</th></tr><tr><td>Male</td><td>15</td><td>10</td><td>25</td></tr><tr><td>Female</td><td>20</td><td>5</td><td>25</td></tr><tr><td>Total</td><td>35</td><td>15</td><td>50</td></tr></table><br>Calculate the probability that a student is male given that they play tennis.",
      "questions": [
        {
          "id": "q1",
          "prompt": "According to the table, how many students play tennis? (P(B))",
          "answer": "35",
          "feedback": "Correct, 35 students play tennis."
        },
        {
          "id": "q2",
          "prompt": "How many students are male and play tennis? (P(A ∩ B))",
          "answer": "15",
          "feedback": "Correct, 15 males play tennis."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(male | tennis) = P(male ∩ tennis) ÷ P(tennis) as a fraction.",
          "answer": "15/35",
          "feedback": "Nice one, 15 divided by 35 is correct."
        }
      ]
    }
  },
  "step4": {
    "title": "Interpreting Tree Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tree diagrams visually represent dependent events and their conditional probabilities for each subsequent branch.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine planning a day with two activities. Each branch shows the chance of each activity happening, and these depend on the previous choice.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Using a Tree Diagram for Conditional Probability",
      "problem": "A box contains 3 green and 2 yellow marbles. One marble is drawn, then another without replacement. Use a tree diagram to find the probability both marbles are green.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the probability of drawing a green marble first?",
          "answer": "3/5",
          "feedback": "Correct, 3 green out of 5 total."
        },
        {
          "id": "q2",
          "prompt": "If the first marble was green, what is the probability the second marble is green?",
          "answer": "2/4",
          "feedback": "Well done, 2 remaining green from 4 total."
        },
        {
          "id": "q3",
          "prompt": "Calculate the combined probability both marbles are green by multiplying the branches.",
          "answer": "3/5 × 2/4",
          "feedback": "Excellent, product of probabilities along the branches."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying Conditional Probability to Real-World Problems",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probabilities are often used to solve problems where outcomes are related, like quality control or medical tests.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a test detects a disease with a certain accuracy, the probability someone has the disease given a positive test is a conditional probability.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Real-World Scenario",
      "problem": "A factory produces 10% defective items. If one defective item is found, what is the chance the next item is also defective when sampling without replacement?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the initial probability of an item being defective?",
          "answer": "0.1",
          "feedback": "Correct, 10% chance."
        },
        {
          "id": "q2",
          "prompt": "If one defective item is removed, what happens to the total number of items?",
          "answer": "Decreases by 1",
          "feedback": "Good, total reduces by one."
        },
        {
          "id": "q3",
          "prompt": "Should the probability of next defective item increase, decrease, or stay the same? Explain your reasoning.",
          "answer": "Decrease",
          "feedback": "Correct, fewer defective remain so chance decreases."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bag contains 4 red and 6 blue balls. Two balls are drawn in succession without replacement. Calculate the probability that the second ball drawn is blue given that the first ball drawn was red.</span>",
      "hint": "Use the formula P(A|B) = P(A ∩ B) ÷ P(B) and remember the total changes after the first draw.",
      "mustHaveKeywords": ["conditional probability", "dependent events", "without replacement", "formula P(A|B)", "intersection"],
      "optionalKeywords": ["two-way table", "tree diagram"],
      "modelAnswer": "<span>First, identify event B as 'first ball red', and event A as 'second ball blue'. Calculate P(B) = 4/10. Then, find P(A ∩ B): probability first is red AND second is blue, which is (4/10) × (6/9) = 24/90. Finally, apply formula P(A|B) = P(A ∩ B) ÷ P(B) = (24/90) ÷ (4/10) = (24/90) × (10/4) = 24/36 = 2/3.</span>",
      "scaffoldPrompts": [
        "Step 1: Define events A and B clearly.",
        "Step 2: Calculate probability of event B (first ball drawn is red).",
        "Step 3: Find joint probability of A and B (both events happen in order).",
        "Step 4: Substitute values into the conditional probability formula.",
        "Step 5: Simplify your answer to the lowest fraction."
      ]
    }
  }
};