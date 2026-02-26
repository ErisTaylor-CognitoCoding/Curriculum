window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.3 - Conditional probability P(A|B)",
  "strapline": "Learn how to find the probability of an event given that another event has already occurred using Venn diagrams and correct notation.",
  "learningObjectives": [
    "Students should understand conditional probability and calculate P(A|B), the probability of event A occurring given that event B has already occurred (Maths 5.3)",
    "Students should use Venn diagrams to represent probability situations and apply correct probability notation including unions, intersections and complements of events (Maths 5.3)",
    "Students should recognise how conditional probability differs from independent events and interpret these probabilities in real-world contexts (Maths 5.3)"
  ],
  "keyFormulas": [
    "P(A|B) = P(A \u2229 B) \u00f7 P(B)",
    "P(A \u2229 B) = Probability of both A and B occurring",
    "P(A \u222a B) = Probability of A or B or both occurring"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <circle cx='140' cy='150' r='80' fill='#add8e6' fill-opacity='0.6' stroke='#000' stroke-width='2' />\
    <circle cx='260' cy='150' r='80' fill='#90ee90' fill-opacity='0.6' stroke='#000' stroke-width='2' />\
    <text x='90' y='150' font-family='sans-serif' font-size='16' fill='#000'>A</text>\
    <text x='310' y='150' font-family='sans-serif' font-size='16' fill='#000'>B</text>\
    <text x='200' y='150' font-family='sans-serif' font-size='16' fill='#700'>A \u2229 B (intersection)</text>\
    </svg>",
  "step1": {
    "title": "Concept: What is Conditional Probability?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability, denoted by <strong>P(A|B)</strong>, means the probability of event <em>A</em> happening, given that event <em>B</em> has already occurred. This changes the sample space to only the outcomes where <em>B</em> occurs.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you are picking a card from a deck. If you know the card is red (event B), what's the chance it's a heart (event A)? The knowledge that the card is red changes the possible outcomes.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding P(A|B)",
      "problem": "A box contains 3 red balls and 5 blue balls. You randomly pick one ball. Event A is 'The ball is red'. Event B is 'You picked a ball from the box'. Calculate P(A|B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(B), the probability of event B (picking a ball from the box)?",
          "answer": "1",
          "feedback": "Correct. Since you are certain to pick a ball from the box, P(B) = 1."
        },
        {
          "id": "q2",
          "prompt": "What is P(A \u2229 B), the probability of the ball being red and picked from the box?",
          "answer": "3/8",
          "feedback": "Correct. There are 3 red balls out of 8 total."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A|B) = P(A \u2229 B) \u00f7 P(B). What is the answer?",
          "answer": "3/8",
          "feedback": "Correct. Since P(B) = 1, P(A|B) = 3/8."
        }
      ]
    }
  },
  "step2": {
    "title": "Using Venn Diagrams for Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Venn diagrams visually show the relationships between events A and B. The intersection region (A \u2229 B) represents outcomes common to both A and B, crucial for finding conditional probability.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
      <circle cx='140' cy='150' r='80' fill='#add8e6' fill-opacity='0.6' stroke='#000' stroke-width='2' />\
      <circle cx='260' cy='150' r='80' fill='#90ee90' fill-opacity='0.6' stroke='#000' stroke-width='2' />\
      <text x='90' y='150' font-family='sans-serif' font-size='16' fill='#000'>A</text>\
      <text x='310' y='150' font-family='sans-serif' font-size='16' fill='#000'>B</text>\
      <rect x='150' y='120' width='90' height='60' fill='#f99' fill-opacity='0.5' />\
      <text x='195' y='155' font-family='sans-serif' font-size='14' fill='#700'>Intersection A \u2229 B</text>\
      </svg>",
    "workedExample": {
      "title": "Worked Example: Identify Regions",
      "problem": "On the Venn diagram, identify the intersection region. What does it represent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Select what the intersection region (overlap of A and B) represents.",
          "answer": "Outcomes belonging to both A and B",
          "feedback": "Correct! The intersection contains outcomes common to both events."
        }
      ]
    }
  },
  "step3": {
    "title": "Calculating Conditional Probability from a Frequency Table",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability can also be calculated from frequency tables by dividing the frequency of both A and B by the total frequency of B.</p>",
    "workedExample": {
      "title": "Worked Example: Frequency Table",
      "problem": "A survey of 100 people found 40 like tea (event B), and 25 of these also like coffee (event A). Calculate P(A|B).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(B), the probability a person likes tea?",
          "answer": "40/100",
          "feedback": "Correct. 40 out of 100 people like tea."
        },
        {
          "id": "q2",
          "prompt": "What is P(A \u2229 B), the probability a person likes both coffee and tea?",
          "answer": "25/100",
          "feedback": "Correct. 25 people like both coffee and tea."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A|B) = P(A \u2229 B) \u00f7 P(B). What is the answer?",
          "answer": "25/40",
          "feedback": "Correct. Divide 25/100 by 40/100 to get 25/40 or 5/8."
        }
      ]
    }
  },
  "step4": {
    "title": "Understanding Union of Events in Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The union of events A and B, written as <strong>P(A \u222a B)</strong>, is the probability of A or B or both happening. It's useful to understand how events relate but is different from conditional probability.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
      <circle cx='140' cy='150' r='80' fill='#add8e6' fill-opacity='0.6' stroke='#000' stroke-width='2' />\
      <circle cx='260' cy='150' r='80' fill='#90ee90' fill-opacity='0.6' stroke='#000' stroke-width='2' />\
      <text x='90' y='150' font-family='sans-serif' font-size='16' fill='#000'>A</text>\
      <text x='310' y='150' font-family='sans-serif' font-size='16' fill='#000'>B</text>\
      <rect x='60' y='80' width='280' height='140' fill='#aaffaa' fill-opacity='0.3' />\
      <text x='190' y='140' font-family='sans-serif' font-size='16' fill='#070'>A \u222a B (union)</text>\
      </svg>",
    "workedExample": {
      "title": "Worked Example: Identify the Union",
      "problem": "What outcomes are covered by the union of A and B on the Venn diagram?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Choose the correct description of P(A \u222a B).",
          "answer": "All outcomes in A or B or both",
          "feedback": "Correct. The union covers all outcomes in either event."
        }
      ]
    }
  },
  "step5": {
    "title": "Conditional Probability vs Independent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability considers that event B has happened, affecting the chance of A. Independent events occur without affecting one another, meaning P(A|B) = P(A).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Rolling two dice: the result of the first die does not affect the second; they are independent events. But if the second die is only rolled after the first shows a six, the events become conditional.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Recognising Independence",
      "problem": "If P(A) = 0.4, and P(A|B) = 0.4, are events A and B independent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is P(A|B) equal to P(A)?",
          "answer": "Yes",
          "feedback": "Correct, they are equal."
        },
        {
          "id": "q2",
          "prompt": "Are events A and B independent?",
          "answer": "Yes",
          "feedback": "Correct. Equal probabilities mean A and B are independent."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bag contains 6 red, 4 green, and 5 blue marbles. A marble is picked at random. Let event A be 'The marble is red' and event B be 'The marble is not blue'. Calculate P(A|B).</span>",
      "hint": "Remember to find P(A \u2229 B) and P(B) first, then use P(A|B) = P(A \u2229 B) \u00f7 P(B).",
      "mustHaveKeywords": ["intersection", "conditional probability", "divide", "P(A|B)"],
      "optionalKeywords": ["Venn diagram", "sample space", "non-blue marbles"],
      "modelAnswer": "<span>First, event B means 'not blue', so possible outcomes are red or green marbles, total 6 + 4 = 10.<br>Event A \u2229 B means the marble is red and not blue, i.e., red marbles: 6.<br>Therefore, P(A \u2229 B) = 6/15 (since 15 total marbles) and P(B) = 10/15.<br>Calculate P(A|B) = (6/15) \u00f7 (10/15) = 6/10 = 0.6.</span>",
      "scaffoldPrompts": ["Identify total marbles in event B", "Find number of marbles in A \u2229 B", "Use the formula for conditional probability"]
    }
  }
};