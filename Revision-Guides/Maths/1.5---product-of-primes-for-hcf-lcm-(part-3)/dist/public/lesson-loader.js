window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.5 - Product of primes for HCF/LCM (Part 3)",
  "strapline": "Learn how to find prime factors and use them to determine the Highest Common Factor and Lowest Common Multiple of numbers.",
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
    "title": "Concept: Understanding Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Prime factorisation is the process of breaking down a number into its basic building blocks: prime numbers. These prime factors multiply together to form the original number.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Just like breaking a LEGO structure into its smallest pieces helps you understand how it’s built, expressing a number as a product of prime factors shows its simplest parts.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Prime Factorisation of 24",
      "problem": "Express the number <strong>24</strong> as a product of its prime factors using division.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide 24 by the smallest prime number. What is the quotient?",
          "answer": "12",
          "feedback": "Correct. 24 ÷ 2 = 12."
        },
        {
          "id": "q2",
          "prompt": "Now divide 12 by the smallest prime number again. What is the quotient?",
          "answer": "6",
          "feedback": "Correct. 12 ÷ 2 = 6."
        },
        {
          "id": "q3",
          "prompt": "Divide 6 by the smallest prime number once more. What is the quotient?",
          "answer": "3",
          "feedback": "Correct. 6 ÷ 2 = 3."
        },
        {
          "id": "q4",
          "prompt": "Can 3 be divided evenly by 2? If not, divide by the next smallest prime number. What is the quotient?",
          "answer": "1",
          "feedback": "Correct. 3 ÷ 3 = 1."
        },
        {
          "id": "q5",
          "prompt": "List all the prime factors you found from the divisions.",
          "answer": "2, 2, 2, 3",
          "feedback": "Well done. The prime factors are three 2s and one 3."
        },
        {
          "id": "q6",
          "prompt": "Write 24 as a product of primes using index notation.",
          "answer": "2^3 × 3",
          "feedback": "Perfect! 24 = 2³ × 3."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Finding the Highest Common Factor (HCF)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The Highest Common Factor of two or more numbers is the largest number that divides all of them exactly. Using prime factorisation, it is found by multiplying only the prime factors that are common to all numbers, and by choosing the lowest powers of those primes.</p>",
    "workedExample": {
      "title": "Worked Example: Find HCF of 24 and 36",
      "problem": "Use prime factorisation to find the HCF of <strong>24</strong> and <strong>36</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the prime factorisation of 24.",
          "answer": "2^3 × 3",
          "feedback": "Correct, 24 = 2³ × 3."
        },
        {
          "id": "q2",
          "prompt": "Write the prime factorisation of 36.",
          "answer": "2^2 × 3^2",
          "feedback": "Correct, 36 = 2² × 3²."
        },
        {
          "id": "q3",
          "prompt": "Identify the common prime factors of 24 and 36.",
          "answer": "2 and 3",
          "feedback": "Great! Both numbers have the prime factors 2 and 3."
        },
        {
          "id": "q4",
          "prompt": "Use the lowest powers of the common primes. What is the power of 2?",
          "answer": "2",
          "feedback": "Correct. The lowest power of 2 is 2²."
        },
        {
          "id": "q5",
          "prompt": "What is the power of 3 you should use?",
          "answer": "1",
          "feedback": "Correct. The lowest power of 3 is 3¹."
        },
        {
          "id": "q6",
          "prompt": "Calculate the HCF by multiplying these common prime factors with their lowest powers.",
          "answer": "12",
          "feedback": "Well done! HCF = 2² × 3 = 4 × 3 = 12."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Finding the Lowest Common Multiple (LCM)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The Lowest Common Multiple of two or more numbers is the smallest number that all original numbers divide into exactly. Using prime factorisation, multiply all prime factors that appear in any number, using the highest power of each.</p>",
    "workedExample": {
      "title": "Worked Example: Find LCM of 24 and 36",
      "problem": "Use prime factorisation to find the LCM of <strong>24</strong> and <strong>36</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the prime factorisation of 24 again.",
          "answer": "2^3 × 3",
          "feedback": "Correct, 24 = 2³ × 3."
        },
        {
          "id": "q2",
          "prompt": "Write the prime factorisation of 36 again.",
          "answer": "2^2 × 3^2",
          "feedback": "Correct, 36 = 2² × 3²."
        },
        {
          "id": "q3",
          "prompt": "Identify all prime factors present in either number.",
          "answer": "2 and 3",
          "feedback": "Good. Both have primes 2 and 3."
        },
        {
          "id": "q4",
          "prompt": "Choose the highest power of 2 from both numbers.",
          "answer": "3",
          "feedback": "Correct. The highest power of 2 is 2³ from 24."
        },
        {
          "id": "q5",
          "prompt": "Choose the highest power of 3 from both numbers.",
          "answer": "2",
          "feedback": "Right! The highest power of 3 is 3² from 36."
        },
        {
          "id": "q6",
          "prompt": "Calculate the LCM by multiplying the highest powers of all prime factors.",
          "answer": "72",
          "feedback": "Excellent! LCM = 2³ × 3² = 8 × 9 = 72."
        }
      ]
    }
  },
  "step4": {
    "title": "Practice: Prime Factorisation of New Numbers",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Try breaking down these numbers into their prime factors using either a factor tree or division method.</p>",
    "workedExample": {
      "title": "Worked Example: Prime Factorisation of 90",
      "problem": "Express <strong>90</strong> as a product of prime factors.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide 90 by the smallest prime number. What is the quotient?",
          "answer": "45",
          "feedback": "Correct! 90 ÷ 2 = 45."
        },
        {
          "id": "q2",
          "prompt": "Is 45 divisible by 2? If not, try dividing by the next smallest prime number.",
          "answer": "15",
          "feedback": "Good. 45 ÷ 3 = 15."
        },
        {
          "id": "q3",
          "prompt": "Divide 15 by the smallest prime number possible.",
          "answer": "5",
          "feedback": "Right! 15 ÷ 3 = 5."
        },
        {
          "id": "q4",
          "prompt": "Divide 5 by the smallest prime number.",
          "answer": "1",
          "feedback": "Great! 5 ÷ 5 = 1."
        },
        {
          "id": "q5",
          "prompt": "List the prime factors of 90.",
          "answer": "2, 3, 3, 5",
          "feedback": "Correct! The prime factors are 2, 3², and 5."
        },
        {
          "id": "q6",
          "prompt": "Write 90 in index form using prime factors.",
          "answer": "2 × 3^2 × 5",
          "feedback": "Well done! 90 = 2 × 3² × 5."
        }
      ]
    }
  },
  "step5": {
    "title": "Application: Find HCF and LCM using Prime Factors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use prime factorisation to find the Highest Common Factor and Lowest Common Multiple of the numbers 90 and 150.</p>",
    "workedExample": {
      "title": "Worked Example: HCF and LCM of 90 and 150",
      "problem": "Find the HCF and LCM of <strong>90</strong> and <strong>150</strong> using their prime factors.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the prime factorisation of 90.",
          "answer": "2 × 3^2 × 5",
          "feedback": "Correct."
        },
        {
          "id": "q2",
          "prompt": "Write the prime factorisation of 150.",
          "answer": "2 × 3 × 5^2",
          "feedback": "Good job."
        },
        {
          "id": "q3",
          "prompt": "Identify the common prime factors of 90 and 150.",
          "answer": "2, 3, 5",
          "feedback": "Correct. All three primes are common."
        },
        {
          "id": "q4",
          "prompt": "Using the lowest powers of the common factors, what is the HCF's prime factorisation?",
          "answer": "2 × 3 × 5",
          "feedback": "Yes. HCF = 2¹ × 3¹ × 5¹."
        },
        {
          "id": "q5",
          "prompt": "Calculate the HCF's value.",
          "answer": "30",
          "feedback": "Well done! HCF = 30."
        },
        {
          "id": "q6",
          "prompt": "Using the highest powers of all prime factors, what is the LCM's prime factorisation?",
          "answer": "2 × 3^2 × 5^2",
          "feedback": "Perfect!"
        },
        {
          "id": "q7",
          "prompt": "Calculate the LCM's value.",
          "answer": "450",
          "feedback": "Great! LCM = 450."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to use prime factorisation to find the Highest Common Factor (HCF) and Lowest Common Multiple (LCM) of the numbers 48 and 180.</span>",
      "hint": "Remember to factorise both numbers into primes first, then use the common factors with the lowest powers for HCF, and all factors with highest powers for LCM.",
      "mustHaveKeywords": ["prime factorisation", "common prime factors", "lowest powers", "highest powers", "multiply"],
      "optionalKeywords": ["division method", "factor trees", "building blocks"],
      "modelAnswer": "<span>First, express both 48 and 180 as products of their prime factors. Then identify the common prime factors. For the HCF, multiply the common prime factors using their lowest powers found in both numbers. For the LCM, multiply all prime factors that appear in either number, using their highest powers. This method ensures the HCF is the greatest factor dividing both numbers and the LCM is the smallest number divisible by both.</span>",
      "scaffoldPrompts": ["Start by prime factorising 48 and 180.", "Find the common primes and their powers.", "Calculate the HCF by multiplying common primes with lowest powers.", "Calculate the LCM by multiplying all primes with highest powers."]
    }
  }
};