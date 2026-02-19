window.lessonContent = {
  "subject": "Chemistry",
  "specCode": "",
  "topicTitle": "5.4.1.2 - The reactivity series",
  "strapline": "Understanding metals ranked by their tendency to lose electrons, predict displacement reactions, and relate to extraction and corrosion.",
  "learningObjectives": [
    "Students should understand that metals can be arranged in a reactivity series based on their tendency to lose electrons and form positive ions (Chemistry 5.4.1.2)",
    "Students should be able to use the reactivity series to predict the outcomes of displacement reactions between metals and metal compounds (Chemistry 5.4.1.2)",
    "Students should understand how the reactivity series relates to metal extraction methods and resistance to corrosion (Chemistry 5.4.1.2)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 250' xmlns='http://www.w3.org/2000/svg' role='img' aria-labelledby='title'><title>Reactivity Series Bar Chart</title><rect x='50' y='20' width='300' height='210' fill='#f9f9f9' stroke='#333'/><text x='200' y='40' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='14'>Reactivity Series of Metals</text><line x1='80' y1='220' x2='320' y2='220' stroke='#000' stroke-width='1' /><text x='75' y='230' font-family='sans-serif' font-size='12'>Most Reactive</text><text x='315' y='230' font-family='sans-serif' font-size='12' text-anchor='end'>Least Reactive</text><rect x='60' y='80' width='40' height='140' fill='#e24c4b' /><text x='80' y='230' font-family='sans-serif' font-size='10' text-anchor='middle'>K</text><rect x='110' y='100' width='40' height='120' fill='#ec7f3a' /><text x='130' y='230' font-family='sans-serif' font-size='10' text-anchor='middle'>Na</text><rect x='160' y='90' width='40' height='130' fill='#f5c24d' /><text x='180' y='230' font-family='sans-serif' font-size='10' text-anchor='middle'>Ca</text><rect x='210' y='120' width='40' height='100' fill='#6aa84f' /><text x='230' y='230' font-family='sans-serif' font-size='10' text-anchor='middle'>Zn</text><rect x='260' y='160' width='40' height='60' fill='#3d85c6' /><text x='280' y='230' font-family='sans-serif' font-size='10' text-anchor='middle'>Fe</text><rect x='310' y='190' width='40' height='30' fill='#6d9eeb' /><text x='330' y='230' font-family='sans-serif' font-size='10' text-anchor='middle'>Cu</text></svg>",
  "step1": {
    "title": "Concept: What is the Reactivity Series?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>reactivity series</strong> is a ranking of metals <em>in order of their reactivity</em>. It starts with the most reactive metals, such as potassium, and ends with the least reactive, like gold. The key factor is how easily a metal loses electrons to form positive ions.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the reactivity series like a race where metals compete to lose electrons. The metals that lose electrons fastest win and rank highest.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Reactivity from Electron Loss",
      "problem": "Given three metals: Metal A loses electrons quickly, Metal B loses electrons slowly, and Metal C does not lose electrons, arrange them in order of reactivity (most to least).",
      "questions": [
        {
          "id": "q1",
          "prompt": "Which metal loses electrons the quickest? (Type A, B or C)",
          "answer": "A",
          "feedback": "Correct! Metal A is the most reactive."
        },
        {
          "id": "q2",
          "prompt": "Which metal loses electrons the slowest?",
          "answer": "B",
          "feedback": "Correct. Metal B is less reactive than A but more than C."
        },
        {
          "id": "q3",
          "prompt": "Which metal does not lose electrons and is least reactive?",
          "answer": "C",
          "feedback": "Correct! Metal C is the least reactive."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Understanding Displacement Reactions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>displacement reaction</strong> occurs when a more reactive metal displaces a less reactive metal from its compound in solution. For example, zinc metal can displace copper from copper sulfate solution because zinc is more reactive than copper.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two friends exchanging gifts: the one who cares more (more reactive) takes the gift (metal ion) away from the less caring friend (less reactive metal).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Predicting Displacement",
      "problem": "A piece of metal X is placed into a solution containing metal Y sulfate. Metal X is more reactive than metal Y. What will happen?",
      "questions": [
        {
          "id": "q4",
          "prompt": "Will metal X displace metal Y from the solution? (yes/no)",
          "answer": "yes",
          "feedback": "Correct! The more reactive metal displaces the less reactive one."
        },
        {
          "id": "q5",
          "prompt": "What is produced as a result of this displacement? (metal/compound/ion)",
          "answer": "metal",
          "feedback": "Correct. The displaced metal appears as a solid metal."
        }
      ]
    }
  },
  "step3": {
    "title": "Interactive Check: Arrange Metals by Reactivity",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The metal <span class=\"font-semibold\">_____</span> is more reactive than zinc but less reactive than potassium.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "calcium",
                "label": "Calcium",
                "isCorrect": true,
                "feedback": "Correct! Calcium fits in that position."
              },
              {
                "value": "iron",
                "label": "Iron",
                "isCorrect": false,
                "feedback": "Incorrect. Iron is less reactive than zinc."
              },
              {
                "value": "copper",
                "label": "Copper",
                "isCorrect": false,
                "feedback": "Incorrect. Copper is one of the least reactive metals."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span><strong>_____</strong> is a metal that will NOT displace copper from copper sulfate solution.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "silver",
                "label": "Silver",
                "isCorrect": true,
                "feedback": "Correct. Silver is less reactive than copper."
              },
              {
                "value": "magnesium",
                "label": "Magnesium",
                "isCorrect": false,
                "feedback": "Incorrect. Magnesium is more reactive and would displace copper."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Key Concept: Oxidation in Reactivity",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Oxidation is the <strong>loss of electrons</strong> by a metal atom to form a positive ion. Metals higher in the reactivity series oxidise more easily because they lose electrons more readily.</p>",
    "workedExample": {
      "title": "Worked Example: Electron Loss in Metals",
      "problem": "Metal M forms M<sup>2+</sup> ions by losing electrons. How many electrons does each atom lose?",
      "questions": [
        {
          "id": "q6",
          "prompt": "Number of electrons lost per atom of metal M?",
          "answer": "2",
          "feedback": "Correct! M forms a 2+ ion by losing 2 electrons."
        }
      ]
    }
  },
  "step5": {
    "title": "Diagram Activity: Predict Displacement",
    "explanation": "<p>Look at the metals on this simplified reactivity series. Predict if the given metal will displace copper from copper sulfate solution.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 120' xmlns='http://www.w3.org/2000/svg' role='img' aria-labelledby='title'><title>Reactivity Bars for Displacement Activity</title><rect x='20' y='20' width='60' height='80' fill='#e24c4b'/><text x='50' y='115' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#000'>Zn</text><rect x='120' y='40' width='60' height='60' fill='#3d85c6'/><text x='150' y='115' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#000'>Fe</text><rect x='220' y='70' width='60' height='30' fill='#6d9eeb'/><text x='250' y='115' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#000'>Cu</text></svg>",
    "questions": [
      {
        "id": "q7",
        "prompt": "Will zinc displace copper from copper sulfate solution? (yes/no)",
        "answer": "yes",
        "feedback": "Correct! Zinc is more reactive than copper."
      },
      {
        "id": "q8",
        "prompt": "Will iron displace copper from copper sulfate solution? (yes/no)",
        "answer": "yes",
        "feedback": "Correct! Iron is more reactive than copper."
      },
      {
        "id": "q9",
        "prompt": "Will copper displace iron from iron sulfate solution? (yes/no)",
        "answer": "no",
        "feedback": "Correct! Copper is less reactive and cannot displace iron."
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how the reactivity series helps predict the outcome of displacement reactions and relates to methods of metal extraction and corrosion resistance.</span>",
      "hint": "<span>Remember to include terms like oxidation, electron loss, and metal reactivity.</span>",
      "mustHaveKeywords": ["reactivity series", "displacement reaction", "oxidation", "electron loss", "metal extraction", "corrosion resistance"],
      "optionalKeywords": ["positive ions", "less reactive", "more reactive", "extraction methods such as reduction with carbon or electrolysis"],
      "modelAnswer": "<span>The reactivity series ranks metals according to how easily they lose electrons (oxidation) to form positive ions. More reactive metals lose electrons more readily and can displace less reactive metals from their compounds in displacement reactions. This series helps predict which metals will react and which will not. It also relates to metal extraction methods because highly reactive metals require energy-intensive techniques like electrolysis, while less reactive metals can be extracted by reduction with carbon. Additionally, metals lower in the reactivity series tend to resist corrosion better because they oxidise less easily.</span>",
      "scaffoldPrompts": [
        "Start by defining the reactivity series and electron loss",
        "Describe how a displacement reaction occurs between metals of different reactivity",
        "Explain how reactivity affects the choice of extraction method",
        "Discuss how reactivity influences resistance to corrosion"
      ]
    }
  }
};