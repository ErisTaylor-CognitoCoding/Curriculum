window.lessonContent = {
  "subject": "Biology",
  "specCode": "",
  "topicTitle": "4.6.3.4 - Resistant bacteria",
  "strapline": "Understanding how bacteria develop resistance to antibiotics and the implications of resistant strains like MRSA.",
  "learningObjectives": [
    "Students should be able to explain how bacteria can develop resistance to antibiotics through natural selection (Biology 4.6.3.4)",
    "Students should understand why resistant strains such as MRSA have emerged (Biology 4.6.3.4)",
    "Students should understand the importance of reducing antibiotic use to slow the development of resistant bacteria (Biology 4.6.3.4)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='40' width='360' height='220' fill='#e6f2ff' stroke='#004d99' stroke-width='2'/><circle cx='90' cy='150' r='15' fill='#4da6ff'/><circle cx='140' cy='150' r='15' fill='#004d99'/><circle cx='190' cy='150' r='15' fill='#a6c8ff'/><text x='50' y='30' font-family='sans-serif' font-size='16' fill='#004d99'>Natural selection in bacteria</text><text x='50' y='270' font-family='sans-serif' font-size='12' fill='#004d99'>Blue circles: bacteria population</text><line x1='90' y1='165' x2='90' y2='250' stroke='#004d99' stroke-width='2' marker-end='url(#arrowhead)'/><line x1='140' y1='165' x2='140' y2='180' stroke='#004d99' stroke-width='2' marker-end='url(#arrowhead)'/><line x1='190' y1='165' x2='190' y2='250' stroke='#004d99' stroke-width='2' marker-end='url(#arrowhead)'/><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#004d99'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: What is Antibiotic Resistance?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Antibiotic resistance is the <strong>ability of bacteria to survive and reproduce</strong> even when antibiotics are present that would normally kill them or stop their growth.</p><p class=\"text-sm leading-6 text-muted-foreground\">This means the antibiotics become <em>less effective</em> over time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of antibiotics as a weed killer sprayed on a garden. If some weeds have a natural protection against it, they survive and grow, while others die. Eventually, only the resistant weeds remain.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Resistant Bacteria",
      "problem": "A sample contains 1000 bacteria. 999 die after antibiotic treatment, but 1 survives and reproduces. What does this show?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many bacteria survived after the antibiotic was applied?",
          "answer": "1",
          "feedback": "Correct. One bacterium survived the antibiotic."
        },
        {
          "id": "q2",
          "prompt": "What does the survival of this bacterium suggest about its resistance?",
          "answer": "It is resistant to the antibiotic",
          "feedback": "Correct. This bacterium is resistant, allowing it to survive."
        },
        {
          "id": "q3",
          "prompt": "Why can this bacterium lead to a resistant strain in the future?",
          "answer": "Because it reproduces and passes on resistance",
          "feedback": "Correct. Resistance genes can pass to offspring."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Natural Selection in Bacteria",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Random mutations occasionally occur in bacteria. Some mutations allow bacteria to resist antibiotics.</p><p class=\"text-sm leading-6 text-muted-foreground\">When antibiotics are used, bacteria without resistance die, and resistant bacteria survive and reproduce. This process is called <strong>natural selection</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like only certain colors of insects survive when sprayed with a pesticide, causing that color to increase in the population over time.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Tracking Resistance Development",
      "problem": "In a population of 10,000 bacteria, 0.1% carry a mutation giving antibiotic resistance. You apply antibiotics killing 99% of non-resistant bacteria. How many resistant bacteria remain?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the number of resistant bacteria before antibiotic treatment.",
          "answer": "10",
          "feedback": "Correct. 0.1% of 10,000 is 10 bacteria."
        },
        {
          "id": "q2",
          "prompt": "Calculate the number of non-resistant bacteria before treatment.",
          "answer": "9990",
          "feedback": "Correct. 10,000 - 10 = 9990 non-resistant bacteria."
        },
        {
          "id": "q3",
          "prompt": "Calculate the number of non-resistant bacteria killed by antibiotics (99%).",
          "answer": "9890",
          "feedback": "Correct. 99% of 9990 is 9890."
        },
        {
          "id": "q4",
          "prompt": "Calculate how many non-resistant bacteria survive (1%).",
          "answer": "100",
          "feedback": "Correct. 1% of 9990 = 100."
        },
        {
          "id": "q5",
          "prompt": "Find total bacteria left after antibiotic application.",
          "answer": "110",
          "feedback": "Correct. 10 resistant + 100 non-resistant survive = 110."
        }
      ]
    }
  },
  "step3": {
    "title": "Key Term: Antibiotic Resistance",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>Antibiotic resistance is the ability of bacteria to <span class=\"font-semibold\">_____</span> and <span class=\"font-semibold\">_____</span> in the presence of antibiotics.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {"value": "survive", "label": "survive", "isCorrect": true, "feedback": "Correct! Resistant bacteria survive."},
              {"value": "die", "label": "die", "isCorrect": false, "feedback": "Try again, resistant bacteria do not die."}
            ]
          },
          {
            "id": "b2",
            "options": [
              {"value": "reproduce", "label": "reproduce", "isCorrect": true, "feedback": "Correct! Resistant bacteria can reproduce."},
              {"value": "stop", "label": "stop", "isCorrect": false, "feedback": "Try again, resistant bacteria continue to reproduce."}
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Why Have Resistant Strains Such As MRSA Emerged?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Overuse and misuse of antibiotics have created strong selection pressure on bacteria.</p><p class=\"text-sm leading-6 text-muted-foreground\">This has led to the emergence of resistant strains like <strong>MRSA (Methicillin-resistant Staphylococcus aureus)</strong>, which are difficult to treat because they do not respond to many common antibiotics.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It is like pests becoming resistant to a pesticide because that pesticide is used too often, forcing only resistant pests to survive.</p>"
    },
    "workedExample": {
      "title": "Example: Understanding MRSA Resistance",
      "problem": "MRSA is resistant to methicillin, a common antibiotic for Staphylococcus infections. Why does this resistance make MRSA infections difficult to treat?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What happens when antibiotics are ineffective against bacteria?",
          "answer": "Bacteria survive and multiply",
          "feedback": "Correct. Ineffective antibiotics allow bacteria to multiply."
        },
        {
          "id": "q2",
          "prompt": "Why does MRSA pose a serious health risk?",
          "answer": "Because infections are harder to treat",
          "feedback": "Correct. Resistant infections require stronger or alternative treatments."
        }
      ]
    }
  },
  "step5": {
    "title": "Importance of Reducing Antibiotic Use",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Reducing unnecessary antibiotic use slows the development of resistant bacteria.</p><p class=\"text-sm leading-6 text-muted-foreground\">This helps maintain the effectiveness of antibiotics for treating infections and prevents the spread of resistant strains.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like not overusing a pesticide to prevent pests from becoming resistant, keeping the pesticide effective longer.</p>"
    },
    "workedExample": {
      "title": "Interactive Example: Impact of Reducing Antibiotic Use",
      "problem": "If a hospital reduces antibiotic use by 50%, how might this affect the number of resistant bacteria over time?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does reducing antibiotic use increase or decrease selection pressure on bacteria?",
          "answer": "Decrease",
          "feedback": "Correct. Less antibiotic use means lower selection pressure."
        },
        {
          "id": "q2",
          "prompt": "What is likely to happen to the population of resistant bacteria over time with less antibiotic use?",
          "answer": "It will decrease or grow more slowly",
          "feedback": "Correct. Resistant bacteria are less favored when antibiotics are less common."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how the process of natural selection leads to the development of antibiotic-resistant bacteria such as MRSA, and why it is important to reduce the use of antibiotics to combat resistance.</span>",
      "hint": "Remember to include <em>mutation</em>, <em>selection pressure</em>, and <em>gene inheritance</em> in your explanation.",
      "mustHaveKeywords": ["natural selection", "mutation", "resistant bacteria", "MRSA", "antibiotic use", "selection pressure"],
      "optionalKeywords": ["reproduction", "health risk", "infection", "misuse"],
      "modelAnswer": "<span>Random mutations in bacteria sometimes produce individuals resistant to antibiotics. When antibiotics are used, these resistant bacteria survive while non-resistant ones die. This creates selection pressure, favoring resistant bacteria that then reproduce and pass on resistance genes. Over time, resistant strains like MRSA emerge, making infections hard to treat. Reducing antibiotic use lowers selection pressure, slowing the spread of resistance and preserving antibiotic effectiveness.</span>",
      "scaffoldPrompts": [
        "Think about how mutations introduce variation in bacteria.",
        "Then consider how antibiotics affect survival of different bacteria.",
        "Finally, explain why less antibiotic use helps control resistance."
      ]
    }
  }
};