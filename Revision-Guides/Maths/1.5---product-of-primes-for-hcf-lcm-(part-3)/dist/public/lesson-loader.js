window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.5 - Product of primes for HCF/LCM (Part 3)",
  "strapline": "Understanding prime factorisation to find HCF and LCM using prime products",
  "learningObjectives": [
    "Students should be able to express numbers as products of prime factors using factor trees or division methods (Maths 1.5)",
    "Students should be able to use prime factorisation to find the Highest Common Factor (HCF) of two or more numbers (Maths 1.5)",
    "Students should be able to use prime factorisation to find the Lowest Common Multiple (LCM) of two or more numbers (Maths 1.5)"
  ],
  "step1": {
    "title": "Concept: Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Prime factorisation is the process of breaking down a number into the product of its prime factors only. Every number can be uniquely written this way. For example, 24 can be factorised as 2<sup>3</sup> × 3.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a number as a LEGO® structure built from blocks. Prime factors are like the smallest indivisible LEGO blocks used to build any structure.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with 24.</span>",
        "<span>Divide by 2: 24 ÷ 2 = 12.</span>",
        "<span>Divide 12 by 2: 12 ÷ 2 = 6.</span>",
        "<span>Divide 6 by 2: 6 ÷ 2 = 3.</span>",
        "<span>3 is prime, so stop.</span>",
        "<span>Prime factors are 2, 2, 2, and 3, or 2<sup>3</sup> × 3.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Highest Common Factor (HCF) using Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The HCF of two or more numbers is found by multiplying the common prime factors they share, using the lowest power of each common factor.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two necklaces built from beads (prime factors). The HCF is like the largest chain you can make from beads common to both necklaces.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Find prime factorisation of 24: 2<sup>3</sup> × 3.</span>",
        "<span>Find prime factorisation of 36: 2<sup>2</sup> × 3<sup>2</sup>.</span>",
        "<span>Common prime factors are 2 and 3.</span>",
        "<span>Take lowest powers: 2<sup>2</sup> and 3<sup>1</sup>.</span>",
        "<span>Multiply to find HCF: 2<sup>2</sup> × 3 = 4 × 3 = 12.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Lowest Common Multiple (LCM) using Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The LCM is found by multiplying all prime factors present in any of the numbers, using the highest power of each prime factor from the numbers involved.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two LEGO® models requiring blocks. The LCM is like the smallest box that contains all the blocks needed to build both models completely.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Prime factors of 24: 2<sup>3</sup> × 3.</span>",
        "<span>Prime factors of 36: 2<sup>2</sup> × 3<sup>2</sup>.</span>",
        "<span>Include all primes with highest powers: 2<sup>3</sup> and 3<sup>2</sup>.</span>",
        "<span>Multiply to find LCM: 2<sup>3</sup> × 3<sup>2</sup> = 8 × 9 = 72.</span>"
      ]
    }
  },
  "step4": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the prime factorisation of 36?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>2<sup>2</sup> × 3<sup>2</sup></span>",
            "isCorrect": true,
            "explanation": "Correct, 36 = 2 × 2 × 3 × 3."
          },
          {
            "id": "b",
            "label": "<span>2 × 3<sup>3</sup></span>",
            "isCorrect": false,
            "explanation": "Incorrect, 3<sup>3</sup> is too high a power."
          },
          {
            "id": "c",
            "label": "<span>2<sup>3</sup> × 3</span>",
            "isCorrect": false,
            "explanation": "Incorrect, 2 is squared, not cubed."
          }
        ]
      }
    ]
  },
  "step5": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the greatest number that divides two or more numbers without a remainder.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "HCF",
                "label": "HCF",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "LCM",
                "label": "LCM",
                "isCorrect": false,
                "feedback": "Try again. This refers to a different concept."
              }
            ]
          }
        ]
      },
      {
        "id": "cloze-2",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the smallest number that is a multiple of two or more numbers.</span>",
        "blanks": [
          {
            "id": "b2",
            "options": [
              {
                "value": "LCM",
                "label": "LCM",
                "isCorrect": true,
                "feedback": "Correct!"
              },
              {
                "value": "HCF",
                "label": "HCF",
                "isCorrect": false,
                "feedback": "Try again. This term is for a greatest factor, not a smallest multiple."
              }
            ]
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Using prime factorisation, find the Highest Common Factor (HCF) and Lowest Common Multiple (LCM) of 48 and 180. Explain each step clearly.</span>",
      "hint": "Remember to find the prime factors of each number, write them using powers, then identify common factors for the HCF and all factors for the LCM.",
      "mustHaveKeywords": ["prime factorisation", "common prime factors", "lowest power", "highest power", "multiply"],
      "optionalKeywords": ["factor trees", "division method", "powers"],
      "modelAnswer": "<span>First, find the prime factorisation of 48: 48 = 2<sup>4</sup> × 3.<br>Then find the prime factorisation of 180: 180 = 2<sup>2</sup> × 3<sup>2</sup> × 5.<br>For the HCF, take the common prime factors with the lowest powers: 2<sup>2</sup> and 3.<br>Multiply: HCF = 2<sup>2</sup> × 3 = 4 × 3 = 12.<br>For the LCM, take all prime factors with the highest powers: 2<sup>4</sup>, 3<sup>2</sup>, and 5.<br>Multiply: LCM = 2<sup>4</sup> × 3<sup>2</sup> × 5 = 16 × 9 × 5 = 720.</span>",
      "scaffoldPrompts": [
        "Start by writing the prime factorisation of 48.",
        "Next, write the prime factorisation of 180.",
        "Identify the common prime factors and lowest powers to find the HCF.",
        "Identify all prime factors and highest powers to find the LCM."
      ]
    }
  }
};