window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.5 - Product of primes for HCF/LCM (Part 2)",
  "strapline": "Learn to use prime factorisation to find HCF and LCM efficiently for two or more numbers.",
  "learningObjectives": [
    "Students should be able to express numbers as products of prime factors using factor trees or division methods (Maths 1.5)",
    "Students should be able to use prime factorisation to find the Highest Common Factor (HCF) of two or more numbers (Maths 1.5)",
    "Students should be able to use prime factorisation to find the Lowest Common Multiple (LCM) of two or more numbers (Maths 1.5)"
  ],
  "step1": {
    "title": "Concept 1: Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Prime factorisation means breaking down a number into a product of prime numbers only. These prime numbers, when multiplied together, give the original number. For example, 12 can be written as 2 × 2 × 3, or using indices as 2<sup>2</sup> × 3.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of prime factors like the basic building blocks or LEGO bricks of a number. Just as a LEGO model is made up from small bricks, every number is made of prime factors.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Prime Factorisation of 24",
      "bullets": [
        "<span>Start dividing 24 by the smallest prime, 2: 24 ÷ 2 = 12</span>",
        "<span>Divide 12 by 2 again: 12 ÷ 2 = 6</span>",
        "<span>Divide 6 by 2 once more: 6 ÷ 2 = 3</span>",
        "<span>3 is prime, so stop dividing</span>",
        "<span>Prime factorisation is 2 × 2 × 2 × 3 or 2<sup>3</sup> × 3</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Finding HCF using Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The Highest Common Factor (HCF) of two or more numbers is found by multiplying the prime factors common to all numbers, using the lowest power of these primes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If two people have different collections of LEGO bricks, the HCF is like the set of bricks that both have in common, in the smallest amounts they both share.</p>"
    },
    "workedExample": {
      "title": "Worked Example: HCF of 18 and 24",
      "bullets": [
        "<span>Prime factorise 18: 2 × 3 × 3 (2 × 3<sup>2</sup>)</span>",
        "<span>Prime factorise 24: 2 × 2 × 2 × 3 (2<sup>3</sup> × 3)</span>",
        "<span>Common prime factors are 2 and 3</span>",
        "<span>Lowest power of 2 in both is 2<sup>1</sup>, lowest power of 3 is 3<sup>1</sup></span>",
        "<span>Multiply: 2 × 3 = 6, so HCF(18, 24) = 6</span>"
      ]
    }
  },
  "step3": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What is the prime factorisation of 36?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>2 × 2 × 3 × 3</span>",
            "isCorrect": true,
            "explanation": "Correct! 36 breaks down into 2 × 2 × 3 × 3."
          },
          {
            "id": "b",
            "label": "<span>2 × 3 × 6</span>",
            "isCorrect": false,
            "explanation": "Incorrect, 6 is not prime. Prime factorisation must only include prime numbers."
          },
          {
            "id": "c",
            "label": "<span>3 × 12</span>",
            "isCorrect": false,
            "explanation": "Incorrect, 12 is not prime. Factorisation includes only primes."
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept 3: Finding LCM using Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The Lowest Common Multiple (LCM) of two or more numbers is found by multiplying all prime factors that appear in any of the numbers, using the highest power of each prime.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you want to build something that needs all the different LEGO bricks from each collection, in the greatest quantity they appear. The LCM is this combined set, ensuring both collections can build it.</p>"
    },
    "workedExample": {
      "title": "Worked Example: LCM of 18 and 24",
      "bullets": [
        "<span>Prime factorise 18: 2 × 3 × 3 (2 × 3<sup>2</sup>)</span>",
        "<span>Prime factorise 24: 2 × 2 × 2 × 3 (2<sup>3</sup> × 3)</span>",
        "<span>Prime factors appearing: 2 and 3</span>",
        "<span>Highest power of 2 is 2<sup>3</sup>, highest power of 3 is 3<sup>2</sup></span>",
        "<span>Multiply: 2<sup>3</sup> × 3<sup>2</sup> = 8 × 9 = 72, so LCM(18, 24) = 72</span>"
      ]
    }
  },
  "step5": {
    "title": "Quick Practice: Prime Factorisation and HCF",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Try finding the HCF of 30 and 45 by first writing their prime factors.</p>",
    "workedExample": {
      "title": "Hints",
      "bullets": [
        "<span>Prime factorise 30</span>",
        "<span>Prime factorise 45</span>",
        "<span>Identify common prime factors and their lowest powers</span>",
        "<span>Multiply these common factors</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to find both the HCF and LCM of 36 and 60 using prime factorisation.</span>",
      "hint": "Remember to factorise both numbers fully and compare the powers of each prime factor carefully.",
      "mustHaveKeywords": ["prime factorisation", "common factors", "lowest power", "highest power", "multiply"],
      "optionalKeywords": ["factor trees", "division method", "product of primes"],
      "modelAnswer": "<span>First, find the prime factorisation of both numbers: 36 = 2<sup>2</sup> × 3<sup>2</sup> and 60 = 2<sup>2</sup> × 3 × 5. For HCF, identify the common primes and take the lowest powers: 2<sup>2</sup> and 3<sup>1</sup>, so HCF = 2<sup>2</sup> × 3 = 12. For LCM, take all primes to highest powers found: 2<sup>2</sup>, 3<sup>2</sup>, and 5<sup>1</sup>, so LCM = 2<sup>2</sup> × 3<sup>2</sup> × 5 = 180.</span>",
      "scaffoldPrompts": [
        "Step 1: Prime factorise each number completely.",
        "Step 2: List the prime factors with their powers for each number.",
        "Step 3: To find HCF, multiply primes common to both numbers using lowest powers.",
        "Step 4: To find LCM, multiply all primes using highest powers from either number."
      ]
    }
  }
};