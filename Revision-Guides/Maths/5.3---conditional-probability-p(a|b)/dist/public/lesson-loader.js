window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "5.3 - Conditional probability P(A|B)",
  "strapline": "Understand how to calculate conditional probability P(A|B), use Venn diagrams for probability notation, and distinguish conditional probability from independence in real-world contexts.",
  "learningObjectives": [
    "Students should understand conditional probability and calculate P(A|B), the probability of event A occurring given that event B has already occurred (Maths 5.3)",
    "Students should use Venn diagrams to represent probability situations and apply correct probability notation including unions, intersections and complements of events (Maths 5.3)",
    "Students should recognise how conditional probability differs from independent events and interpret these probabilities in real-world contexts (Maths 5.3)"
  ],
  "keyFormulas": [
    "P(A|B) = P(A ∩ B) ÷ P(B) (Conditional Probability Formula)",
    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) (Union of Events)",
    "P(B^c) = 1 - P(B) (Complement of an Event)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
  <circle cx='150' cy='150' r='80' fill='#8fbc8f' fill-opacity='0.5' stroke='#2f4f4f' stroke-width='2'/>\
  <circle cx='250' cy='150' r='80' fill='#4682b4' fill-opacity='0.5' stroke='#2f4f4f' stroke-width='2'/>\
  <text x='85' y='150' font-family='sans-serif' font-size='20' fill='#2f4f4f'>A</text>\
  <text x='315' y='150' font-family='sans-serif' font-size='20' fill='#2f4f4f'>B</text>\
  <text x='180' y='150' font-family='sans-serif' font-size='18' fill='#000'>A ∩ B</text>\
  <text x='50' y='250' font-family='sans-serif' font-size='16' fill='#444'>Venn Diagram: Overlapping events A and B</text>\
  </svg>",
  "step1": {
    "title": "Introducing Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability <strong>P(A|B)</strong> is the probability of event <em>A</em> occurring given that event <em>B</em> has already happened. This changes the sample space because we only consider outcomes where <em>B</em> occurs.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you want to know the probability it rains today (<em>A</em>), but only considering days where the sky is cloudy (<em>B</em>). The chance of rain changes since you already know it's cloudy.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding P(A|B)",
      "problem": "In a class, 40% of students are girls (B). Of these girls, 30% passed the maths test (A). Find P(A|B), the probability a student passed the test given they are a girl.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is event B in this problem?",
          "answer": "girl",
          "feedback": "Correct. Event B is the student is a girl."
        },
        {
          "id": "q2",
          "prompt": "What is event A in this problem?",
          "answer": "passed the maths test",
          "feedback": "Correct. Event A is the student passed the maths test."
        },
        {
          "id": "q3",
          "prompt": "What is P(A|B) given in the problem?",
          "answer": "0.30",
          "feedback": "Correct. 30% or 0.30 is the probability a girl passed."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Intersection and Union of Events",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>intersection</strong> <em>(A ∩ B)</em> means both events A and B happen. The <strong>union</strong> <em>(A ∪ B)</em> means either A or B or both happen. These concepts help us apply the formula for conditional probability.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <circle cx='150' cy='150' r='80' fill='#f4a261' fill-opacity='0.5' stroke='#e76f51' stroke-width='2'/>\
    <circle cx='250' cy='150' r='80' fill='#2a9d8f' fill-opacity='0.5' stroke='#264653' stroke-width='2'/>\
    <text x='90' y='150' font-family='sans-serif' font-size='18' fill='#333'>A</text>\
    <text x='310' y='150' font-family='sans-serif' font-size='18' fill='#333'>B</text>\
    <path d='M190 140 A30 30 0 0 1 210 160 L190 160 Z' fill='#e63946'/>\
    <text x='190' y='155' font-family='sans-serif' font-size='16' fill='#fff'>A ∩ B</text>\
    <text x='170' y='240' font-family='sans-serif' font-size='14' fill='#444'>Intersection (overlap)</text>\
    </svg>"
  },
  "step3": {
    "title": "Calculating Conditional Probability Step-by-Step",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the formula <strong>P(A|B) = P(A ∩ B) ÷ P(B)</strong>. This means to find the probability of A given B, divide the probability that both happen by the probability that B happens.</p>",
    "workedExample": {
      "title": "Worked Example: Interactive Calculation of P(A|B)",
      "problem": "In a survey, 50 people like tea (B), and 20 of those also like coffee (A). Calculate P(A|B), the probability someone who likes tea also likes coffee.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is P(B), the probability someone likes tea? (Assume total 100 surveyed)",
          "answer": "0.50",
          "feedback": "Correct. 50 out of 100 like tea, so P(B) = 0.50."
        },
        {
          "id": "q2",
          "prompt": "What is P(A ∩ B), the probability someone likes both tea and coffee?",
          "answer": "0.20",
          "feedback": "Correct. 20 out of 100 like both, so P(A ∩ B) = 0.20."
        },
        {
          "id": "q3",
          "prompt": "Calculate P(A|B) = P(A ∩ B) ÷ P(B). What is the answer?",
          "answer": "0.4",
          "feedback": "Correct. 0.20 ÷ 0.50 = 0.4 or 40%."
        }
      ]
    }
  },
  "step4": {
    "title": "Using Venn Diagrams to Represent Conditional Probability",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Venn diagrams visually show events A and B and their overlaps. The conditional probability looks at the overlap <em>A ∩ B</em> relative to the whole circle B.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
    <circle cx='150' cy='150' r='80' fill='#ffd166' fill-opacity='0.5' stroke='#f4a261' stroke-width='2'/>\
    <circle cx='250' cy='150' r='80' fill='#06d6a0' fill-opacity='0.5' stroke='#118ab2' stroke-width='2'/>\
    <text x='110' y='150' font-family='sans-serif' font-size='20' fill='#000'>A</text>\
    <text x='300' y='150' font-family='sans-serif' font-size='20' fill='#000'>B</text>\
    <ellipse cx='200' cy='150' rx='30' ry='50' fill='#ef476f' fill-opacity='0.7'/>\
    <text x='180' y='150' font-family='sans-serif' font-size='18' fill='#fff'>A ∩ B</text>\
    <text x='100' y='270' font-family='sans-serif' font-size='14' fill='#444'>Overlap is numerator for P(A|B)</text>\
    <text x='100' y='290' font-family='sans-serif' font-size='14' fill='#444'>Whole B circle is denominator</text>\
    </svg>"
  },
  "step5": {
    "title": "Difference Between Conditional Probability and Independence",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Conditional probability changes when knowing B affects A. If A and B are <em>independent</em>, knowing B does not change the chance of A, so P(A|B) = P(A). Understanding this difference is important in real-world problems.</p>",
    "workedExample": {
      "title": "Worked Example: Recognising Independence",
      "problem": "If the probability of rain (A) is 0.3 and the probability of carrying an umbrella (B) is 0.4, and P(A ∩ B) = 0.12, are A and B independent?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate P(A) × P(B). What is it?",
          "answer": "0.12",
          "feedback": "Correct. 0.3 × 0.4 = 0.12."
        },
        {
          "id": "q2",
          "prompt": "Is P(A ∩ B) equal to P(A) × P(B)?",
          "answer": "yes",
          "feedback": "Correct. Since P(A ∩ B) = 0.12, same as product, A and B are independent."
        },
        {
          "id": "q3",
          "prompt": "What is P(A|B) if A and B are independent?",
          "answer": "0.3",
          "feedback": "Correct. P(A|B) = P(A) when independent."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A school surveyed students and found that 60% like football (B) and 25% like both football and basketball (A). Find the conditional probability that a student likes basketball given they like football. Explain how you found your answer using correct notation and a Venn diagram description.</span>",
      "hint": "Remember to use the formula <strong>P(A|B) = P(A ∩ B) ÷ P(B)</strong>. Describe the overlap and the event B region in your explanation.",
      "mustHaveKeywords": ["P(A|B)", "P(A ∩ B)", "P(B)", "conditional probability", "Venn diagram", "overlap"],
      "optionalKeywords": ["sample space", "independent", "intersection", "union"],
      "modelAnswer": "<span>First, identify the given probabilities: P(B) = 0.60 and P(A ∩ B) = 0.25. Using the conditional probability formula <strong>P(A|B) = P(A ∩ B) ÷ P(B)</strong>, calculate P(A|B) = 0.25 ÷ 0.60 = 0.4167. This means that given a student likes football (Event B), there is a 41.67% chance they like basketball (Event A). On a Venn diagram, this is the overlap area (A ∩ B) compared to the entire circle B representing football fans.</span>",
      "scaffoldPrompts": ["Identify P(B) and P(A ∩ B) from the information given", "Write down the formula for P(A|B)", "Substitute into the formula and calculate the answer", "Explain what the overlap area in the Venn diagram represents"]
    }
  }
};