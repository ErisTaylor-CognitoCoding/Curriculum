window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.4.2.5 - Strong and weak acids (HT only)",
  "strapline": "Understanding the difference between strong and weak acids by their ionisation in aqueous solution and how this affects pH.",
  "learningObjectives": [
    "Students should distinguish between strong and weak acids based on their degree of ionisation in aqueous solution (Chemistry 5.4.2.5)",
    "Students should understand that strong acids (hydrochloric, nitric and sulfuric acid) completely ionise in water, whilst weak acids (ethanoic, citric and carbonic acid) only partially ionise (Chemistry 5.4.2.5)",
    "Students should explain how the pH of a weak acid is higher than that of a strong acid of the same concentration due to the lower concentration of hydrogen ions produced (Chemistry 5.4.2.5)"
  ],
  "keyFormulas": [
    "Concept 3: Degree of ionisation = (Concentration of ionised acid / Initial concentration of acid) × 100%",
    "pH = -log[H⁺]",
    "Reminder: Strong acids have 100% ionisation; weak acids have less than 5% ionisation"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='160' height='100' fill='#ff6666' stroke='#a33' stroke-width='2' rx='10' ry='10' /><text x='100' y='60' font-family='sans-serif' font-weight='bold' font-size='18' fill='#800000' text-anchor='middle'>Strong Acid</text><text x='100' y='85' font-family='sans-serif' font-size='14' fill='#800000' text-anchor='middle'>100% ionisation</text><line x1='180' y1='70' x2='220' y2='70' stroke='#000' stroke-width='3' marker-end='url(#arrow)' /><circle cx='260' cy='50' r='7' fill='#ff0000' /><text x='275' y='55' font-family='sans-serif' font-size='14'>H⁺ ions</text><circle cx='260' cy='90' r='7' fill='#0000ff' /><text x='275' y='95' font-family='sans-serif' font-size='14'>Anions</text><defs><marker id='arrow' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'><path d='M0,0 L10,3.5 L0,7' fill='#000' /></marker></defs><rect x='20' y='160' width='160' height='100' fill='#6699ff' stroke='#3366aa' stroke-width='2' rx='10' ry='10' /><text x='100' y='200' font-family='sans-serif' font-weight='bold' font-size='18' fill='#003366' text-anchor='middle'>Weak Acid</text><text x='100' y='225' font-family='sans-serif' font-size='14' fill='#003366' text-anchor='middle'>Partial ionisation (~5%)</text><line x1='180' y1='210' x2='220' y2='210' stroke='#000' stroke-width='3' marker-end='url(#arrow)' /><circle cx='260' cy='190' r='7' fill='#ff0000' /><text x='275' y='195' font-family='sans-serif' font-size='14'>Few H⁺ ions</text><circle cx='260' cy='230' r='7' fill='#0000ff' /><text x='275' y='235' font-family='sans-serif' font-size='14'>Mostly molecules</text></svg>",
  "step1": {
    "title": "Concept: Understanding Strong Acids",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>strong acid</strong> is one that <em>completely ionises</em> in aqueous solution. This means every molecule of the acid donates its hydrogen ion (H<sup>+</sup>) to the solution.</p><p>Examples include hydrochloric acid (HCl), nitric acid (HNO<sub>3</sub>), and sulfuric acid (H<sub>2</sub>SO<sub>4</sub>).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a strong acid like a group of people who all actively raise their hands when asked a question — everyone participates fully.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Ionisation of HCl (Strong Acid)",
      "problem": "Given a 0.1 mol/dm³ hydrochloric acid solution, how many moles of H⁺ ions are produced?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What percentage of HCl molecules ionise in water?",
          "answer": "100",
          "feedback": "Correct. Strong acids ionise completely (100%)."
        },
        {
          "id": "q2",
          "prompt": "Calculate the concentration of H⁺ ions produced in mol/dm³.",
          "answer": "0.1",
          "feedback": "Correct. Since all molecules ionise, [H⁺] = 0.1 mol/dm³."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Weak Acids",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>weak acid</strong> only <em>partially ionises</em> in aqueous solution. This means only a fraction of its molecules release H<sup>+</sup> ions.</p><p>Examples include ethanoic acid (CH<sub>3</sub>COOH), citric acid, and carbonic acid (H<sub>2</sub>CO<sub>3</sub>).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a weak acid like a room where only a few people raise their hands when asked a question — participation is partial.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Ionisation of Ethanoic Acid (Weak Acid)",
      "problem": "A 0.1 mol/dm³ ethanoic acid solution ionises to produce 0.005 mol/dm³ of H⁺ ions. What is the degree of ionisation?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the formula to calculate degree of ionisation (%)?",
          "answer": "(0.005 / 0.1) * 100",
          "feedback": "Correct. Degree of ionisation = (ionised concentration / initial concentration) × 100%"
        },
        {
          "id": "q2",
          "prompt": "Calculate the degree of ionisation.",
          "answer": "5",
          "feedback": "Correct. Degree of ionisation is 5%."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Terminology: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> acid completely ionises in water, while a <span class=\"font-semibold\">_____</span> acid only partially ionises.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "strong", "label": "strong", "isCorrect": true, "feedback": "Correct! Strong acids ionise completely."},
              {"value": "weak", "label": "weak", "isCorrect": false, "feedback": "Incorrect. Weak acids do not ionise completely."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "weak", "label": "weak", "isCorrect": true, "feedback": "Correct! Weak acids ionise only partially."},
              {"value": "strong", "label": "strong", "isCorrect": false, "feedback": "Incorrect. Strong acids ionise completely."}
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Why Do Weak Acids Have Higher pH?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Since weak acids only partially ionise, they produce fewer H<sup>+</sup> ions compared to strong acids of the same concentration. This means the solution is less acidic and thus has a <strong>higher pH</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If acidity is loudness, strong acids are like shouting, while weak acids are speaking softly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Comparing pH of Strong and Weak Acid Solutions",
      "problem": "Compare the pH of 0.01 mol/dm³ hydrochloric acid (strong) and 0.01 mol/dm³ ethanoic acid (weak, ionisation 1%).",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the concentration of H⁺ ions in the strong acid?",
          "answer": "0.01",
          "feedback": "Correct. Strong acid fully ionises to 0.01 mol/dm³ H⁺."
        },
        {
          "id": "q2",
          "prompt": "What is the concentration of H⁺ ions in the weak acid?",
          "answer": "0.0001",
          "feedback": "Correct. 1% of 0.01 is 0.0001 mol/dm³."
        },
        {
          "id": "q3",
          "prompt": "Calculate the pH of the strong acid solution (pH = -log[H⁺]).",
          "answer": "2",
          "feedback": "Correct. pH = -log(0.01) = 2."
        },
        {
          "id": "q4",
          "prompt": "Calculate the pH of the weak acid solution.",
          "answer": "4",
          "feedback": "Correct. pH = -log(0.0001) = 4."
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which of the following is NOT a strong acid?</span>",
        "options": [
          {"id": "a", "label": "<span>Hydrochloric acid (HCl)</span>", "isCorrect": false, "explanation": "HCl is a strong acid."},
          {"id": "b", "label": "<span>Nitric acid (HNO₃)</span>", "isCorrect": false, "explanation": "HNO₃ is a strong acid."},
          {"id": "c", "label": "<span>Ethanoic acid (CH₃COOH)</span>", "isCorrect": true, "explanation": "Ethanoic acid is a weak acid."},
          {"id": "d", "label": "<span>Sulfuric acid (H₂SO₄)</span>", "isCorrect": false, "explanation": "H₂SO₄ is a strong acid."}
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain why a 0.1 mol/dm³ solution of ethanoic acid has a higher pH than a 0.1 mol/dm³ solution of hydrochloric acid.</span>",
      "hint": "Remember to discuss ionisation and concentration of hydrogen ions.",
      "mustHaveKeywords": ["ionisation", "partial", "complete", "hydrogen ions", "pH"],
      "optionalKeywords": ["concentration", "weak acid", "strong acid"],
      "modelAnswer": "<span>Ethanoic acid is a weak acid and only partially ionises in aqueous solution, releasing fewer hydrogen ions compared to hydrochloric acid, which is a strong acid and fully ionises. Because ethanoic acid produces a lower concentration of hydrogen ions, its pH is higher than that of hydrochloric acid at the same concentration.</span>",
      "scaffoldPrompts": ["Describe the difference in ionisation between strong and weak acids.", "Relate the ionisation to the concentration of hydrogen ions in solution.", "Explain how this affects the pH value."]
    }
  }
};