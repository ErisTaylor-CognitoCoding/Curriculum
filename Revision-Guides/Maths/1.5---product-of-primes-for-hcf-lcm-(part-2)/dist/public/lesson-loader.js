window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.5 - Product of primes for HCF/LCM (Part 2)",
  "strapline": "Understanding prime factorisation and using it to find the Highest Common Factor (HCF) and Lowest Common Multiple (LCM) of numbers.",
  "learningObjectives": [
    "Students should be able to express numbers as products of prime factors using factor trees or division methods (Maths 1.5)",
    "Students should be able to use prime factorisation to find the Highest Common Factor (HCF) of two or more numbers (Maths 1.5)",
    "Students should be able to use prime factorisation to find the Lowest Common Multiple (LCM) of two or more numbers (Maths 1.5)"
  ],
  "keyFormulas": [
    "Formula 1: a² + b² = c² (Pythagoras)",
    "Formula 2: A = πr² (Area of circle)",
    "Reminder: Always check units"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='150' text-anchor='middle' font-family='sans-serif'>Concept Diagram</text></svg>",
  "step1": {
    "title": "Concept: Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Prime factorisation means breaking down a number into a product of only prime numbers. For example, 12 can be represented as 2 × 2 × 3 or <em>2<sup>2</sup> × 3</em>. This is important because it helps us find the HCF and LCM of numbers systematically.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of prime factors as the building blocks or Lego bricks of a number. Just like complex structures are built from simple bricks, all numbers are built from prime numbers.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Prime Factorisation of 36",
      "problem": "Find the prime factorisation of <strong>36</strong> using division.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide 36 by the smallest prime number. What is the quotient?",
          "answer": "18",
          "feedback": "Correct! 36 ÷ 2 = 18."
        },
        {
          "id": "q2",
          "prompt": "Divide 18 by the smallest prime number. What is the quotient?",
          "answer": "9",
          "feedback": "Correct! 18 ÷ 2 = 9."
        },
        {
          "id": "q3",
          "prompt": "Divide 9 by the smallest prime number. What is the quotient?",
          "answer": "3",
          "feedback": "Correct! 9 ÷ 3 = 3."
        },
        {
          "id": "q4",
          "prompt": "Divide 3 by the smallest prime number. What is the quotient?",
          "answer": "1",
          "feedback": "Correct! 3 ÷ 3 = 1, so we have completed the factorisation."
        },
        {
          "id": "q5",
          "prompt": "Write down all the prime factors of 36.",
          "answer": "2, 2, 3, 3",
          "feedback": "Correct! 36 = 2 × 2 × 3 × 3 or 2<sup>2</sup> × 3<sup>2</sup>."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Finding the HCF by Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The Highest Common Factor (HCF) of two or more numbers is found by identifying all prime factors common to the numbers and taking the lowest power of each. Multiply these to get the HCF.</p>",
    "workedExample": {
      "title": "Worked Example: Find the HCF of 24 and 36",
      "problem": "Use prime factorisation to find the HCF of <strong>24</strong> and <strong>36</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Prime factorise 24. What are the prime factors?",
          "answer": "2, 2, 2, 3",
          "feedback": "Correct! 24 = 2<sup>3</sup> × 3."
        },
        {
          "id": "q2",
          "prompt": "Prime factorise 36. What are the prime factors?",
          "answer": "2, 2, 3, 3",
          "feedback": "Correct! 36 = 2<sup>2</sup> × 3<sup>2</sup>."
        },
        {
          "id": "q3",
          "prompt": "Identify the common prime factors with the lowest powers.",
          "answer": "2, 2, 3",
          "feedback": "Correct! The lowest powers are 2<sup>2</sup> and 3<sup>1</sup>."
        },
        {
          "id": "q4",
          "prompt": "Multiply these common factors to find the HCF.",
          "answer": "12",
          "feedback": "Correct! HCF = 2 × 2 × 3 = 12."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Finding the LCM by Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The Lowest Common Multiple (LCM) of two or more numbers is found by taking the highest powers of all prime factors that appear in any of the numbers and multiplying them together. This gives the smallest number divisible by all given numbers.</p>",
    "workedExample": {
      "title": "Worked Example: Find the LCM of 24 and 36",
      "problem": "Use prime factorisation to find the LCM of <strong>24</strong> and <strong>36</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Prime factorise 24. What are the prime factors?",
          "answer": "2, 2, 2, 3",
          "feedback": "Correct! 24 = 2<sup>3</sup> × 3."
        },
        {
          "id": "q2",
          "prompt": "Prime factorise 36. What are the prime factors?",
          "answer": "2, 2, 3, 3",
          "feedback": "Correct! 36 = 2<sup>2</sup> × 3<sup>2</sup>."
        },
        {
          "id": "q3",
          "prompt": "Write down all prime factors with the highest powers from both numbers.",
          "answer": "2, 2, 2, 3, 3",
          "feedback": "Correct! Highest powers are 2<sup>3</sup> and 3<sup>2</sup>."
        },
        {
          "id": "q4",
          "prompt": "Multiply these prime factors to find the LCM.",
          "answer": "72",
          "feedback": "Correct! LCM = 2 × 2 × 2 × 3 × 3 = 72."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Prime Factorisation with Factor Trees",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use factor trees to break numbers down into primes step-by-step. This visual method helps see the prime factors clearly.</p>",
    "workedExample": {
      "title": "Worked Example: Factor Tree of 90",
      "problem": "Create a factor tree for <strong>90</strong> and list its prime factors.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Choose any two factors of 90 (other than 1 and 90).",
          "answer": "9 and 10",
          "feedback": "Good choice! 9 × 10 = 90."
        },
        {
          "id": "q2",
          "prompt": "Factorise 9 into primes.",
          "answer": "3, 3",
          "feedback": "Correct. 9 = 3 × 3."
        },
        {
          "id": "q3",
          "prompt": "Factorise 10 into primes.",
          "answer": "2, 5",
          "feedback": "Correct. 10 = 2 × 5."
        },
        {
          "id": "q4",
          "prompt": "List all prime factors of 90 from the tree.",
          "answer": "2, 3, 3, 5",
          "feedback": "Well done! 90 = 2 × 3 × 3 × 5."
        }
      ]
    }
  },
  "step5": {
    "title": "Quick Quiz: Choose the Correct HCF",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the HCF of 18 and 30?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>6</span>",
            "isCorrect": true,
            "explanation": "Correct! The HCF of 18 and 30 is 6."
          },
          {
            "id": "b",
            "label": "<span>12</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 12 is not a factor of 30."
          },
          {
            "id": "c",
            "label": "<span>9</span>",
            "isCorrect": false,
            "explanation": "Incorrect. 9 is not a factor of 30."
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Use prime factorisation to find both the HCF and LCM of 48 and 180.</span>",
      "hint": "First, prime factorise both numbers. Then find the common prime factors for the HCF and the highest powers for the LCM.",
      "mustHaveKeywords": ["prime factorisation", "lowest power", "highest power", "multiply"],
      "optionalKeywords": ["factor trees", "division method"],
      "modelAnswer": "<span>Prime factorise 48 = 2<sup>4</sup> × 3 and 180 = 2<sup>2</sup> × 3<sup>2</sup> × 5. The HCF is the product of the lowest powers of common primes: 2<sup>2</sup> × 3 = 12. The LCM is the product of the highest powers of all primes appearing: 2<sup>4</sup> × 3<sup>2</sup> × 5 = 720.</span>",
      "scaffoldPrompts": [
        "Step 1: Find the prime factors of 48.",
        "Step 2: Find the prime factors of 180.",
        "Step 3: Identify common primes and their lowest powers for HCF.",
        "Step 4: Identify all primes with their highest powers for LCM.",
        "Step 5: Multiply to get HCF and LCM."
      ]
    }
  }
};