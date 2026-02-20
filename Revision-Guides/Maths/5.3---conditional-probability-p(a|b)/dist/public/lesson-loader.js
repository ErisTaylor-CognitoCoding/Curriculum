window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.3 - Conditional probability P(A|B)",
  "strapline": "Learn how to calculate the probability of an event occurring given that another event has already happened, using Venn diagrams and probability notation.",
  "learningObjectives": [
    "Students should understand conditional probability and calculate P(A|B), the probability of event A occurring given that event B has already occurred (Maths 5.3)",
    "Students should use Venn diagrams to represent probability situations and apply correct probability notation including unions, intersections and complements of events (Maths 5.3)",
    "Students should recognise how conditional probability differs from independent events and interpret these probabilities in real-world contexts (Maths 5.3)"
  ],
  "keyFormulas": [
    "Conditional Probability: P(A|B) = \\frac{P(A \\cap B)}{P(B)}",
    "Intersection of Events: P(A \\cap B) is the probability that both A and B occur",
    "Union of Events: P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <circle cx='140' cy='150' r='80' fill='#8fbcd4' fill-opacity='0.5' stroke='#2a4d69' stroke-width='2' />\
    <text x='90' y='150' font-family='sans-serif' font-size='18' fill='#2a4d69'>A</text>\
    <circle cx='260' cy='150' r='80' fill='#f76c6c' fill-opacity='0.5' stroke='#b22222' stroke-width='2' />\
    <text x='310' y='150' font-family='sans-serif' font-size='18' fill='#b22222'>B</text>\
    <rect x='50' y='50' width='300' height='200' fill='none' stroke='#333' stroke-dasharray='5,5' />\
    <text x='200' y='40' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#333'>Venn Diagram of Events A and B</text>\
  </svg>",
  "step1": {
    "title": "Concept: Understanding Conditional Probability P(A|B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability, written as <strong>P(A|B)</strong>, means the probability that event <em>A</em> happens assuming event <em>B</em> has already happened. This changes the sample space since we only consider cases where <em>B</em> is true.</p><p class=\"text-sm leading-6 text-muted-foreground\"><strong>Formula:</strong> <em>P(A|B) = P(A ∩ B) / P(B)</em></p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a box of red and blue balls. You know a ball drawn is blue (<em>B</em>). Now, the chance it is also shiny (<em>A</em>) is the conditional probability P(A|B), because you only look at blue balls.</p>"
    },
    "workedExample": {
      "title": "Interactive Worked Example: Understanding P(A|B)",
      "problem": "A school has 20 students: 12 boys and 8 girls. 5 boys play football. What is the probability a student plays football given they are a boy, P(Football|Boy)?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many boys are there in total?",
          "answer": "12",
          "feedback": "Correct. There are 12 boys."
        },
        {
          "id": "q2",
          "prompt": "How many boys play football?",
          "answer": "5",
          "feedback": "Correct. 5 boys play football."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(Football ∩ Boy) as a fraction of total students (5 out of 20). What is this value?",
          "answer": "0.25",
          "feedback": "Yes, 5/20 = 0.25."
        },
        {
          "id": "q4",
          "prompt": "Calculate P(Boy) (12 out of 20). What is this value?",
          "answer": "0.6",
          "feedback": "Correct, 12/20 = 0.6."
        },
        {
          "id": "q5",
          "prompt": "Finally, calculate P(Football|Boy) = P(Football ∩ Boy) ÷ P(Boy). What is the result?",
          "answer": "0.4167",
          "feedback": "Well done! 0.25 ÷ 0.6 = approximately 0.4167."
        }
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which formula correctly represents conditional probability P(A|B)?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>P(A|B) = P(A) × P(B)</span>",
            "isCorrect": false,
            "explanation": "<span>No, this describes joint probability assuming independence, not conditional probability.</span>"
          },
          {
            "id": "b",
            "label": "<span>P(A|B) = P(A ∩ B) ÷ P(B)</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! Conditional probability is the probability both occur divided by probability of B.</span>"
          },
          {
            "id": "c",
            "label": "<span>P(A|B) = P(A) + P(B) - P(A ∩ B)</span>",
            "isCorrect": false,
            "explanation": "<span>This is the formula for the union of two events, not conditional probability.</span>"
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the overlapping part of two events in a Venn diagram.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "intersection",
                "label": "Intersection",
                "isCorrect": true,
                "feedback": "Correct! The overlapping area is the intersection."
              },
              {
                "value": "union",
                "label": "Union",
                "isCorrect": false,
                "feedback": "No, the union covers all areas of both circles."
              },
              {
                "value": "complement",
                "label": "Complement",
                "isCorrect": false,
                "feedback": "No, the complement is outside the event circle."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Representing Events with Venn Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use Venn diagrams to visualise events A and B. The union (A ∪ B) includes all areas covered by both circles, the intersection (A ∩ B) is only the overlap, while the complement of an event is the area outside that event's circle.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
      <circle cx='140' cy='150' r='80' fill='#6a9fb5' fill-opacity='0.5' stroke='#274156' stroke-width='2' />\
      <text x='90' y='150' font-family='sans-serif' font-size='18' fill='#274156'>A</text>\
      <circle cx='260' cy='150' r='80' fill='#d97676' fill-opacity='0.5' stroke='#8b3a3a' stroke-width='2' />\
      <text x='310' y='150' font-family='sans-serif' font-size='18' fill='#8b3a3a'>B</text>\
      <rect x='50' y='50' width='300' height='200' fill='none' stroke='#222' stroke-dasharray='5,5' />\
      <text x='200' y='40' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#222'>Venn Diagram: Union, Intersection, Complements</text>\
    </svg>"
  },
  "step5": {
    "title": "Understanding Difference Between Conditional and Independent Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two events are independent if knowing one has happened does not affect the probability of the other. For independent events, P(A|B) = P(A). For dependent events, P(A|B) changes based on B occurring.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you roll a fair dice twice, the outcome of the first roll does not affect the second roll (independent). But if you pick a card from a deck and do not replace it, the next pick is conditional (dependent) as the deck changed.</p>"
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A bag contains 10 red, 8 blue, and 7 green marbles. One marble is drawn at random. Given that the marble drawn is not green, find the probability that it is red.</span>",
      "hint": "Remember to identify events A and B, find P(A ∩ B), and P(B) before calculating P(A|B).",
      "mustHaveKeywords": ["conditional probability", "P(A|B)", "intersection", "not green", "reduce sample space"],
      "optionalKeywords": ["Venn diagram", "dependent events"],
      "modelAnswer": "<span>Let A = drawing a red marble, B = drawing a marble that is not green. Total marbles = 25, marbles not green = 10 + 8 = 18. P(A ∩ B) = P(red and not green) = 10/25 = 0.4. P(B) = 18/25 = 0.72. Therefore, P(A|B) = P(A ∩ B) / P(B) = 0.4 / 0.72 ≈ 0.5556. So, the probability it is red given it is not green is approximately 0.556.</span>",
      "scaffoldPrompts": [
        "Identify event A and event B clearly.",
        "Calculate P(A ∩ B), the probability of both A and B.",
        "Calculate P(B), the probability of event B.",
        "Apply the formula for conditional probability."
      ]
    }
  }
};