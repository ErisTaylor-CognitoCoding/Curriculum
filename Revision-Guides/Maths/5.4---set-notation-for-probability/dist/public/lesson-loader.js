window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.4 - Set notation for probability",
  "strapline": "Understanding how to use set notation to represent and calculate probabilities of combined events.",
  "learningObjectives": [
    "Students should use set notation including symbols for union (∪), intersection (∩), and complement (A') to represent combined events in probability (Maths 5.4)",
    "Students should calculate probabilities of combined events using set notation and Venn diagrams (Maths 5.4)",
    "Students should interpret and solve probability problems involving unions, intersections, and complements of events (Maths 5.4)"
  ],
  "keyFormulas": [
    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    "P(A') = 1 - P(A)",
    "P(A ∩ B) ≤ P(A) and P(A ∩ B) ≤ P(B)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg'> <circle cx='140' cy='125' r='80' fill='#79c0ff' fill-opacity='0.4' stroke='#0366d6' stroke-width='2'/> <circle cx='260' cy='125' r='80' fill='#ff8b6a' fill-opacity='0.4' stroke='#d73a49' stroke-width='2'/> <text x='60' y='40' font-family='sans-serif' font-size='14' fill='#0366d6'>Event A</text> <text x='280' y='40' font-family='sans-serif' font-size='14' fill='#d73a49'>Event B</text> <text x='190' y='130' font-family='sans-serif' font-size='16' font-weight='bold' fill='#444'>A ∩ B</text> <text x='110' y='225' font-family='sans-serif' font-size='12' fill='#555'>Sample Space (S)</text> <rect x='20' y='20' width='360' height='210' fill='none' stroke='#333' stroke-width='1.5' rx='12' ry='12' /></svg>",
  "step1": {
    "title": "Introduction to Sample Space and Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">In probability, the <strong>sample space</strong> (S or ξ) is the set of all possible outcomes of an experiment. Events are subsets of this sample space.</p><p>Example: Rolling a 6-sided die, <em>S = {1, 2, 3, 4, 5, 6}</em> represents all the possible outcomes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the sample space as the entire menu at a restaurant. An event is like choosing a specific dish or a set of dishes from the menu.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Sample Space and Event",
      "problem": "Consider flipping a coin twice. List the sample space and define event A as 'getting at least one head'.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the sample space (list all possible outcomes)?",
          "answer": "{HH, HT, TH, TT}",
          "feedback": "Well done! Those are all possible results from flipping a coin twice."
        },
        {
          "id": "q2",
          "prompt": "List the outcomes that belong to event A (at least one head).",
          "answer": "{HH, HT, TH}",
          "feedback": "Correct! All outcomes except TT have at least one head."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Union (A ∪ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>union</strong> of two events A and B, written as <strong>A ∪ B</strong>, includes all outcomes that are in A <em>or</em> B (or both).</p><p>The probability of A ∪ B represents the chance that either event occurs.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two clubs at school, Club A and Club B. The union is all students who are in Club A or Club B or both.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Probability of Union with Dice",
      "problem": "A die is rolled. Let A be the event 'rolling an even number' and B be the event 'rolling a number greater than 4'. Find the sample spaces of A, B, and A ∪ B.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is event A (even numbers)?",
          "answer": "{2, 4, 6}",
          "feedback": "Good! Those are the even numbers on a die."
        },
        {
          "id": "q2",
          "prompt": "What is event B (numbers greater than 4)?",
          "answer": "{5, 6}",
          "feedback": "Correct! These outcomes satisfy B."
        },
        {
          "id": "q3",
          "prompt": "What is A ∪ B (elements in A or B or both)?",
          "answer": "{2, 4, 5, 6}",
          "feedback": "Exactly! Combine all unique elements from A and B."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Intersection (A ∩ B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>intersection</strong> of two events A and B, denoted <strong>A ∩ B</strong>, is the set of outcomes common to both events. It represents the chance that both events happen simultaneously.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the club analogy, A ∩ B is the group of students who are members of both Club A and Club B.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Intersection Probability with Letters",
      "problem": "The set S = {a, b, c, d, e}. Let A = {a, b, c} and B = {b, c, d}. Find A ∩ B.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which elements are present in both A and B?",
          "answer": "{b, c}",
          "feedback": "Correct! Both b and c are in A and B."
        }
      ]
    }
  },
  "step4": {
    "title": "Using Complement (A') in Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>complement</strong> of an event A, written as <strong>A'</strong>, consists of all outcomes in the sample space that are NOT in A.</p><p>The complement represents the event 'A does not occur'.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is 'rain today', then A' means 'no rain today'.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Complement with Dice",
      "problem": "For the event A: 'rolling a 5' on a six-sided die, find A'.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the outcomes NOT in A?",
          "answer": "{1, 2, 3, 4, 6}",
          "feedback": "Exactly! All outcomes except 5 are in the complement."
        }
      ]
    }
  },
  "step5": {
    "title": "Calculating Probability of Combined Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the probability of combined events, use the formulas:</p><ul><li><strong>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</strong></li><li><strong>P(A') = 1 − P(A)</strong></li></ul><p>This avoids double counting the intersection when calculating union.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate P(A ∪ B)",
      "problem": "In a deck of cards, Let A be drawing a red card and B be drawing a king. Given P(A) = 26/52, P(B) = 4/52 and P(A ∩ B) = 2/52 (red kings), find P(A ∪ B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(A) + P(B)? Enter as a fraction.",
          "answer": "30/52",
          "feedback": "Correct sum of probabilities."
        },
        {
          "id": "q2",
          "prompt": "What is P(A ∩ B) to subtract?",
          "answer": "2/52",
          "feedback": "Right! This removes the double count."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
          "answer": "28/52",
          "feedback": "Well done! That's the combined probability."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A survey of 100 students showed 60 study Maths (event A) and 45 study Physics (event B). 30 study both Maths and Physics. Using set notation, calculate the probability that a randomly chosen student studies Maths or Physics (A ∪ B) and the probability that a student studies neither subject.</span>",
      "hint": "Use the formula for union and remember the complement represents 'neither'.",
      "mustHaveKeywords": ["union", "complement", "probability", "set notation"],
      "optionalKeywords": ["sample space", "intersection"],
      "modelAnswer": "<span>First find P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 60/100 + 45/100 − 30/100 = 75/100 or 0.75. Then, the probability of a student studying neither subject is the complement: 1 − P(A ∪ B) = 1 − 0.75 = 0.25.</span>",
      "scaffoldPrompts": [
        "Identify P(A), P(B), and P(A ∩ B) from the question.",
        "Apply the union formula to find P(A ∪ B).",
        "Calculate the complement to find the probability of neither event."
      ]
    }
  }
};