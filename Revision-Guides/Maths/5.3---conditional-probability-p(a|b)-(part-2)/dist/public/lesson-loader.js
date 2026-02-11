window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.3 - Conditional probability P(A|B) (Part 2)",
  "strapline": "Calculating and applying conditional probability in dependent event scenarios using tables and tree diagrams.",
  "learningObjectives": [
    "Students should calculate conditional probabilities using the formula P(A|B) = P(A ∩ B) ÷ P(B) (Maths 5.3)",
    "Students should apply conditional probability to real-world scenarios involving dependent events, such as drawing items without replacement (Maths 5.3)",
    "Students should interpret two-way tables and tree diagrams where prior outcomes influence subsequent probabilities (Maths 5.3)"
  ],
  "step1": {
    "title": "Concept: Conditional Probability and Its Meaning",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability describes the chance that event A happens given that event B has already happened. It is written as P(A|B), where the vertical bar '|' means 'given that' or 'conditional on'. This reflects how knowing the outcome of B changes the probability of A.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a bag of fruits. If you know the first fruit drawn was an apple, the chance of the second fruit being an orange changes depending on that first draw.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Suppose event B is 'drawing an apple first' and event A is 'drawing an orange second'.</span>",
        "<span>We want to find P(A|B) — the probability of drawing an orange after an apple.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: The Conditional Probability Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The formula to calculate conditional probability is <strong>P(A|B) = P(A ∩ B) ÷ P(B)</strong>. This means you divide the probability that both events happen by the probability of the condition event B. Remember, <em>P(B)</em> must be greater than zero for this to work.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it like splitting a group based on B happening first, then looking at how many of those also have A. For example, from all people who like coffee (B), how many also like tea (A)?</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If P(both red cards) = 1/221 and P(first card red) = 26/52, then</span>",
        "<span>P(second card red | first card red) = (1/221) ÷ (26/52) = Calculated value</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Dependent Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Dependent events are events where the outcome of one affects the probability of the other. This often happens in real life, like drawing cards without replacement where the first draw changes the makeup of the deck for the second.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you take one cookie from a jar and don’t replace it, the chance of picking a chocolate chip the next time depends on what remains in the jar.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A bag has 5 red and 3 blue balls. If you pick one red ball without replacing it, find probability next pick is red.</span>",
        "<span>The total decreases for the second event, showing dependence: P(second red | first red) = 4/7.</span>"
      ]
    }
  },
  "step4": {
    "title": "Applying Conditional Probability in Two-Way Tables",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Two-way tables help organize data about multiple events. You can use them to calculate conditional probabilities by focusing on the appropriate row or column, which corresponds to the condition event B.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the table as sorting fruits by colour and type. If you know the colour, the table helps you find the chance of a specific fruit within that category.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given a table of students' sport choices by gender, find P(girl | plays netball).</span>",
        "<span>Identify the number of girls who play netball and divide by total netball players.</span>"
      ]
    }
  },
  "step5": {
    "title": "Using Tree Diagrams for Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Tree diagrams visually show how probabilities change after an event occurs. Each branch shows possible outcomes and their probabilities, allowing easy calculation of dependent event probabilities.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">A tree is like a decision map where each choice branches out and affects the next possible outcomes.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw a tree for two draws from a bag with 3 red and 2 green balls without replacement.</span>",
        "<span>Calculate P(second ball green | first ball red) using branch probabilities.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A box contains 4 red, 5 blue, and 6 green marbles. Two marbles are drawn without replacement. Calculate the probability that the second marble drawn is blue given that the first marble drawn was red.</span>",
      "hint": "Remember to use the conditional probability formula and consider how the first draw affects the second.",
      "mustHaveKeywords": ["conditional probability", "dependent events", "P(A|B) = P(A ∩ B) ÷ P(B)"],
      "optionalKeywords": ["two-way tables", "tree diagrams", "without replacement"],
      "modelAnswer": "<span>First, find P(Both first red and second blue) = P(first red) × P(second blue | first red). P(first red) = 4/15. After drawing a red, remaining marbles = 14, with 5 blue. So, P(second blue | first red) = 5/14. Then, P(A ∩ B) = 4/15 × 5/14 = 20/210 = 2/21. P(B) is the probability first marble is red = 4/15. Finally, P(second blue | first red) = (2/21) ÷ (4/15) = (2/21) × (15/4) = 30/84 = 5/14.</span>",
      "scaffoldPrompts": [
        "Identify event A and event B.",
        "Calculate P(A ∩ B) using probabilities in sequence.",
        "Calculate P(B).",
        "Divide P(A ∩ B) by P(B) to find P(A|B)."
      ]
    }
  }
};