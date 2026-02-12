window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 3)",
  "strapline": "Explore calculating conditional probabilities using real-world dependent events, interpreting two-way tables and tree diagrams.",
  "learningObjectives": [
    "Students should calculate conditional probabilities using the formula P(A|B) = P(A \u2229 B) \u00f7 P(B) (Maths 5.3)",
    "Students should apply conditional probability to real-world scenarios involving dependent events, such as drawing items without replacement (Maths 5.3)",
    "Students should interpret two-way tables and tree diagrams where prior outcomes influence subsequent probabilities (Maths 5.3)"
  ],
  "keyFormulas": [
    "P(A|B) = P(A \u2229 B) \u00f7 P(B) (Conditional probability)",
    "P(A \u2229 B) = Probability of both events A and B occurring",
    "Dependent events affect each other's probabilities"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='220' fill='#f9f9f9' stroke='#666' stroke-width='2'/><text x='200' y='70' text-anchor='middle' font-family='sans-serif' font-size='16' fill='#333'>Tree Diagram for Drawing Without Replacement</text><line x1='200' y1='90' x2='120' y2='140' stroke='#000' stroke-width='2'/><line x1='200' y1='90' x2='280' y2='140' stroke='#000' stroke-width='2'/><circle cx='200' cy='90' r='10' fill='#cce5ff' stroke='#004080' stroke-width='2'/><text x='200' y='95' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#004080'>Start</text><circle cx='120' cy='140' r='10' fill='#99ccff' stroke='#004080' stroke-width='2'/><text x='120' y='145' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#004080'>A</text><circle cx='280' cy='140' r='10' fill='#99ccff' stroke='#004080' stroke-width='2'/><text x='280' y='145' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#004080'>B</text><polyline points='120,140 100,170 80,170 80,200' fill='none' stroke='#000' stroke-width='2'/><text x='60' y='190' font-family='sans-serif' font-size='12' fill='#000'>P(A)</text><polyline points='280,140 300,170 320,170 320,200' fill='none' stroke='#000' stroke-width='2'/><text x='340' y='190' font-family='sans-serif' font-size='12' fill='#000'>P(B | A\u2019s done)</text></svg>",
  "step1": {
    "title": "Concept: Understanding Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability, denoted as P(A|B), is the probability that event <strong>A</strong> happens given that event <strong>B</strong> has already occurred. It changes the probability frame because the outcome of B has influenced the likelihood of A.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a bag with 5 red and 5 blue marbles. If you pick a marble and it is blue (event B happens), what is the chance that the next marble drawn is red (event A)? This is different from just randomly picking a red marble first because the occurrence of B changes the setup.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the events: A = 'next marble drawn is red', B = 'first marble drawn is blue'</span>",
        "<span>Calculate P(A|B) = P(A \u2229 B) \u00f7 P(B), where P(B) is chance of blue first and P(A \u2229 B) is chance of blue then red</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the symbol '|' represent in P(A|B)?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>'Given that' or 'on the condition that'</span>",
            "isCorrect": true,
            "explanation": "Correct! The vertical bar means we are finding the probability of A happening after B has occurred."
          },
          {
            "id": "b",
            "label": "<span>'And' or 'intersection of events'</span>",
            "isCorrect": false,
            "explanation": "Incorrect. The intersection is represented by \u2229, not the vertical bar."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> events are those where the outcome of one affects the probability of the other.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "dependent",
                "label": "dependent",
                "isCorrect": true,
                "feedback": "Correct! Dependent events affect each other's probabilities."
              },
              {
                "value": "independent",
                "label": "independent",
                "isCorrect": false,
                "feedback": "Try again. Independent events do not affect each other's probabilities."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Worked Example: Calculating P(A|B) using Drawing Without Replacement",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Suppose a box contains 3 red balls and 2 green balls. One ball is drawn without replacement. If the first ball drawn is red (event B), what is the probability that the second ball drawn is green (event A)?</p>",
    "workedExample": {
      "title": "Step-by-step",
      "bullets": [
        "<span>Total balls initially: 5</span>",
        "<span>After drawing a red ball, remaining balls: 2 red and 2 green (total 4)</span>",
        "<span>P(B) = Probability first ball is red = 3/5</span>",
        "<span>P(A \u2229 B) = Probability first is red AND second is green = P(B) \u00d7 P(A|B) = (3/5) \u00d7 (2/4)</span>",
        "<span>Using formula, P(A|B) = P(A \u2229 B) \u00f7 P(B) = (3/5 \u00d7 2/4) \u00f7 (3/5) = 2/4</span>"
      ]
    }
  },
  "step5": {
    "title": "Interpreting Two-Way Tables",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two-way tables organize data about two categorical variables. You can use these tables to find conditional probabilities by focusing on a specific column or row, treating it as the condition.</p>",
    "workedExample": {
      "title": "Example",
      "bullets": [
        "<span>Table shows numbers of students who passed or failed two subjects.</span>",
        "<span>Find P(pass Subject 1 | passed Subject 2) by dividing number passing both subjects by total passing Subject 2.</span>"
      ]
    }
  },
  "step6": {
    "title": "Interpreting Tree Diagrams in Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tree diagrams visually show sequences of events where outcomes affect probabilities of future events. Branch probabilities adjust as events occur, helping calculate conditional probabilities.</p>",
    "analogy": {
      "title": "Example",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you draw a card from a deck and do not replace it, the number and probability of remaining cards change. A tree diagram shows the probabilities of each draw step by step.</p>"
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A box contains 4 blue pens and 6 black pens. Two pens are drawn one after the other without replacement. Find the probability that the second pen drawn is blue given that the first pen drawn was black.</span>",
      "hint": "Remember to adjust the total count and counts of pens after the first draw when calculating the probability for the second draw.",
      "mustHaveKeywords": ["conditional probability", "dependent events", "without replacement"],
      "optionalKeywords": ["P(A|B)", "intersection"],
      "modelAnswer": "<span>First, identify events: B = 'first pen is black', A = 'second pen is blue'. Initially, P(B) = 6/10. After drawing a black pen, remaining pens are 4 blue and 5 black (total 9). So P(A|B) = number of blue pens left / total pens left = 4/9.</span>",
      "scaffoldPrompts": ["Calculate total pens and counts after first draw", "Use the formula P(A|B) = P(A \u2229 B) / P(B) or directly find P(A|B) by adjusting counts"]
    }
  }
};