window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 2)",
  "strapline": "Understanding how to calculate conditional probabilities using formula and apply them to dependent events and interpreting two-way tables and tree diagrams.",
  "learningObjectives": [
    "Students should calculate conditional probabilities using the formula P(A|B) = P(A ∩ B) ÷ P(B) (Maths 5.3)",
    "Students should apply conditional probability to real-world scenarios involving dependent events, such as drawing items without replacement (Maths 5.3)",
    "Students should interpret two-way tables and tree diagrams where prior outcomes influence subsequent probabilities (Maths 5.3)"
  ],
  "keyFormulas": [
    "Conditional Probability: P(A|B) = P(A ∩ B) ÷ P(B)",
    "Where P(A|B) is the probability of A given B, and P(B) > 0",
    "For dependent events, probabilities change because outcomes affect each other"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='360' height='260' fill='#f9f9f9' stroke='#333' /><text x='200' y='40' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16'>Example Tree Diagram</text><line x1='200' y1='50' x2='120' y2='120' stroke='#0074D9' stroke-width='2'/><line x1='200' y1='50' x2='280' y2='120' stroke='#FF4136' stroke-width='2'/><circle cx='120' cy='120' r='15' fill='#0074D9' /><text x='120' y='125' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#fff'>B</text><circle cx='280' cy='120' r='15' fill='#FF4136'/><text x='280' y='125' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#fff'>B'</text><line x1='120' y1='120' x2='70' y2='190' stroke='#0074D9' stroke-width='2'/><text x='70' y='185' font-family='sans-serif' font-size='12' fill='#0074D9'>A|B</text><line x1='120' y1='120' x2='170' y2='190' stroke='#0074D9' stroke-width='2'/><text x='170' y='185' font-family='sans-serif' font-size='12' fill='#0074D9'>A'|B</text><line x1='280' y1='120' x2='230' y2='190' stroke='#FF4136' stroke-width='2'/><text x='230' y='185' font-family='sans-serif' font-size='12' fill='#FF4136'>A|B'</text><line x1='280' y1='120' x2='330' y2='190' stroke='#FF4136' stroke-width='2'/><text x='330' y='185' font-family='sans-serif' font-size='12' fill='#FF4136'>A'|B'</text></svg>",
  "step1": {
    "title": "Concept: Understanding Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability is the chance that event <strong>A</strong> happens given that event <strong>B</strong> has already happened. The notation <em>P(A|B)</em> means the probability of A <em>given that</em> B occurs.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a bag with red and blue marbles. If you pick a marble and it is red (event B), what is the chance the next marble you pick is blue (event A) given that your first pick was red?</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify events A and B clearly.</span>",
        "<span>Recognize that P(A|B) means the probability of A after B has occurred.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Using the Formula for Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To calculate <em>P(A|B)</em>, you use the formula: <strong>P(A|B) = P(A ∩ B) ÷ P(B)</strong>, where <em>P(A ∩ B)</em> is the probability both A and B occur, and <em>P(B) > 0</em>.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If P(A ∩ B) = 0.3 and P(B) = 0.5, then P(A|B) = 0.3 ÷ 0.5 = 0.6.</span>",
        "<span>Always ensure <em>P(B)</em> is not zero before dividing.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Dependent Events in Real-World Scenarios",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events are when the outcome of one event affects the probability of another. For example, drawing cards from a deck <em>without replacement</em> changes probabilities because the deck size changes after each draw.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you pick a red card from a deck and do not put it back, the next card you pick has a different chance of being red because one card is missing.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with total cards: 52.</span>",
        "<span>After removing one card, total cards reduce to 51, changing probabilities.</span>"
      ]
    }
  },
  "step4": {
    "title": "Skill: Interpreting Two-Way Tables for Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two-way tables show frequencies of two categories and help calculate conditional probabilities by focusing on one row or column as the condition.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at the row or column corresponding to event B.</span>",
        "<span>Calculate P(A|B) by dividing the number of outcomes where both A and B happen by the total outcomes in that row/column.</span>"
      ]
    }
  },
  "step5": {
    "title": "Skill: Using Tree Diagrams for Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tree diagrams show possible outcomes step by step. Probabilities along branches can change depending on previous events, perfect for dependent events.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with initial probabilities on the first branches.</span>",
        "<span>Multiply probabilities down branches to find joint probabilities.</span>",
        "<span>Use these to find conditional probabilities by dividing as per the formula.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A box contains 5 red and 3 blue balls. Two balls are drawn one after the other <strong>without replacement</strong>. Calculate the probability that the second ball is blue given that the first ball drawn was red.</span>",
      "hint": "Remember to update the total number of balls after the first draw and use the formula P(A|B) = P(A ∩ B) ÷ P(B).",
      "mustHaveKeywords": ["conditional probability", "dependent events", "without replacement", "P(A|B)", "formula"],
      "optionalKeywords": ["tree diagram", "two-way table"],
      "modelAnswer": "<span>First, find P(B first): probability first ball is red = 5/8.<br>Then find P(second ball blue and first ball red) = (5/8) × (3/7).<br>Conditional probability P(second blue | first red) = P(second blue ∩ first red) ÷ P(first red) = [(5/8) × (3/7)] ÷ (5/8) = 3/7.</span>",
      "scaffoldPrompts": [
        "What is the total number of balls before the first draw?",
        "What is the probability that the first ball is red?",
        "After removing one red ball, how many balls remain?",
        "What is the probability that the second ball is blue given the first was red?",
        "Use the formula P(A|B) = P(A ∩ B) ÷ P(B) to find the answer."
      ]
    }
  }
};