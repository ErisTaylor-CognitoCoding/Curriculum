window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.4 - Repeated percentage change (Part 3)",
  "strapline": "Understanding how to calculate multiple percentage changes using powers of multipliers and applying this to real-life contexts such as compound interest and depreciation.",
  "learningObjectives": [
    "Students should be able to calculate the result of applying the same percentage change multiple times using multipliers raised to powers (Maths 3.4)",
    "Students should be able to apply repeated percentage change techniques to real-world contexts including compound interest, population change, and depreciation (Maths 3.4)",
    ""
  ],
  "keyFormulas": [
    "Multiplier = 1 + (percentage increase ÷ 100) for an increase",
    "Multiplier = 1 - (percentage decrease ÷ 100) for a decrease",
    "Repeated change: Final amount = Initial amount × (Multiplier)^number of times applied"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#e8f4fc' stroke='#2a75bb' /><text x='200' y='90' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='16'>Repeated Percentage Change</text><circle cx='120' cy='160' r='40' fill='#a0d2f8' /><text x='120' y='165' text-anchor='middle' font-family='sans-serif' font-size='12'>Year 1</text><circle cx='200' cy='160' r='40' fill='#6ca0dc' /><text x='200' y='165' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#fff'>Year 2</text><circle cx='280' cy='160' r='40' fill='#2a75bb' /><text x='280' y='165' text-anchor='middle' font-family='sans-serif' font-size='12' fill='#fff'>Year 3</text><path d='M160 160 L180 160' stroke='#2a75bb' stroke-width='3' marker-end='url(#arrowhead)' /><path d='M240 160 L260 160' stroke='#2a75bb' stroke-width='3' marker-end='url(#arrowhead)' /><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#2a75bb'/></marker></defs></svg>",
  "step1": {
    "title": "Concept: Understanding repeated percentage change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Repeated percentage change happens when the same percentage increase or decrease is applied multiple times in a row. For example, earning 5% interest every year for 3 years means the amount grows 3 times by 5%.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you have a snowball that grows by rolling through fresh snow every minute. Each minute, it becomes 10% bigger than its size just before that minute.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Recognising repeated percentage change",
      "problem": "A city’s population grows by 4% each year. What happens after 3 years?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the percentage increase each year?",
          "answer": "4",
          "feedback": "Correct. The population grows by 4% annually."
        },
        {
          "id": "q2",
          "prompt": "How many times is the percentage applied over 3 years?",
          "answer": "3",
          "feedback": "Correct. The 4% increase is applied 3 times, once each year."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Using the multiplier method",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Instead of calculating each step, we can use a multiplier for the percentage change. For an increase of 10%, the multiplier is 1.1. To apply an increase 3 times, raise the multiplier to the power 3: <em>1.1^3</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the multiplier as a growth factor; applying it multiple times is like stacking growth layers on top of each other quickly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating repeated change with multipliers",
      "problem": "Calculate the value after a 10% increase applied 3 times starting from £100.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for a 10% increase?",
          "answer": "1.1",
          "feedback": "Correct. 1 + 10/100 = 1.1."
        },
        {
          "id": "q2",
          "prompt": "Calculate the multiplier raised to the power of 3 (1.1^3). Use a calculator.",
          "answer": "1.331",
          "feedback": "Correct. 1.1^3 = 1.331 approximately."
        },
        {
          "id": "q3",
          "prompt": "Multiply the initial amount by this power: 100 × 1.331 = ?",
          "answer": "133.1",
          "feedback": "Correct! The new value after 3 increases of 10% is £133.10."
        }
      ]
    }
  },
  "step3": {
    "title": "Identifying multipliers for increases and decreases",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">For increases, the multiplier is greater than 1. For decreases, the multiplier is less than 1. For example, a 5% decrease means a multiplier of 0.95.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like walking backwards 5% of the distance each step reduces your position, reflecting a decrease multiplier.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Multiplier for percentage decrease",
      "problem": "Find the multiplier for a 7% decrease.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the decimal equivalent of 7%?",
          "answer": "0.07",
          "feedback": "Correct. 7% is 0.07 in decimal."
        },
        {
          "id": "q2",
          "prompt": "Calculate the multiplier for a 7% decrease (1 - 0.07).",
          "answer": "0.93",
          "feedback": "Correct. The multiplier is 0.93."
        }
      ]
    }
  },
  "step4": {
    "title": "Applying repeated percentage change to compound interest",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Compound interest is a real-world example where repeated percentage increase applies: interest is earned on both the initial principal and the accumulated interest.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine your money growing like a snowball picking up more snow over time because the snowball itself gets bigger and attracts more snow.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Compound interest calculation",
      "problem": "Calculate the amount after 4 years with 5% compound interest on £200 principal.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for 5% interest?",
          "answer": "1.05",
          "feedback": "Correct. Multiplier = 1 + 5/100 = 1.05."
        },
        {
          "id": "q2",
          "prompt": "Raise the multiplier to the power of 4 (1.05^4). Use a calculator.",
          "answer": "1.2155",
          "feedback": "Correct. 1.05^4 ≈ 1.2155."
        },
        {
          "id": "q3",
          "prompt": "Multiply by initial amount: 200 × 1.2155 = ?",
          "answer": "243.1",
          "feedback": "Correct. Amount is approximately £243.10 after 4 years."
        }
      ]
    }
  },
  "step5": {
    "title": "Applying repeated percentage change to population and depreciation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Repeated percentage change techniques can be applied to population growth or shrinkage and to depreciation of assets where values decrease repeatedly by a fixed percentage.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just like a car losing 12% of its value each year, repeated depreciation means the value after each year is smaller, calculated by using a multiplier less than 1 raised to the power of years.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Depreciation calculation",
      "problem": "Calculate the value of a laptop worth £1200 after 3 years if it depreciates by 12% each year.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the multiplier for a 12% decrease?",
          "answer": "0.88",
          "feedback": "Correct. Multiplier = 1 - 12/100 = 0.88."
        },
        {
          "id": "q2",
          "prompt": "Raise the multiplier to power 3 (0.88^3). Use a calculator.",
          "answer": "0.6815",
          "feedback": "Correct. 0.88^3 ≈ 0.6815."
        },
        {
          "id": "q3",
          "prompt": "Multiply by initial value: 1200 × 0.6815 = ?",
          "answer": "817.8",
          "feedback": "Correct. Value is approximately £817.80 after 3 years."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A town's population decreases by 3% each year. Its current population is 25,000. Calculate the population after 5 years.</span>",
      "hint": "Remember to convert the percentage decrease to a multiplier. Then raise it to the power of 5 before multiplying by the initial population.",
      "mustHaveKeywords": ["multiplier", "percentage decrease", "powers", "population after 5 years"],
      "optionalKeywords": ["compound decrease", "decay", "exponential decay"],
      "modelAnswer": "<span>First, find the multiplier: 1 - (3/100) = 0.97.<br/>Raise this to the power 5: 0.97<sup>5</sup> = approximately 0.8587.<br/>Multiply by initial population: 25,000 × 0.8587 = 21,467.5.<br/>After 5 years, the population will be approximately 21,468.</span>",
      "scaffoldPrompts": [
        "What is the multiplier for a 3% decrease?",
        "What does raising the multiplier to the power of 5 represent?",
        "How do you find the population after 5 years?"
      ]
    }
  }
};