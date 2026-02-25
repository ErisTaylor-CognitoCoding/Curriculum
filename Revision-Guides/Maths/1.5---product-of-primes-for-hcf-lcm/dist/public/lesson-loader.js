window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.5 - Product of primes for HCF/LCM",
  "strapline": "Learn how to express numbers as products of prime factors and use this to find the Highest Common Factor and Lowest Common Multiple.",
  "learningObjectives": [
    "Students should express numbers as products of prime factors using factor trees and division methods (Maths 1.5)",
    "Students should apply prime factorisation to find the highest common factor (HCF) of two or more numbers (Maths 1.5)",
    "Students should apply prime factorisation to find the lowest common multiple (LCM) of two or more numbers (Maths 1.5)"
  ],
  "keyFormulas": [
    "No standard formulas, but key methods: Product of primes = multiplication of prime factors",
    "HCF = product of common prime factors with lowest powers",
    "LCM = product of all prime factors with highest powers"
  ],
  "diagramHtml": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'>  <text x='150' y='20' font-family='sans-serif' font-size='16' text-anchor='middle'>Factor Tree for 36</text>  <circle cx='150' cy='50' r='15' fill='#a2d2ff' stroke='#333'/>  <text x='150' y='55' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#000'>36</text>  <line x1='150' y1='65' x2='110' y2='110' stroke='#333'/>  <circle cx='90' cy='130' r='15' fill='#ade8f4' stroke='#333'/>  <text x='90' y='135' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#000'>2</text>  <line x1='150' y1='65' x2='190' y2='110' stroke='#333'/>  <circle cx='210' cy='130' r='15' fill='#ade8f4' stroke='#333'/>  <text x='210' y='135' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#000'>18</text>  <line x1='190' y1='125' x2='160' y2='170' stroke='#333'/>  <circle cx='150' cy='190' r='15' fill='#caf0f8' stroke='#333'/>  <text x='150' y='195' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#000'>2</text>  <line x1='190' y1='125' x2='220' y2='170' stroke='#333'/>  <circle cx='230' cy='190' r='15' fill='#caf0f8' stroke='#333'/>  <text x='230' y='195' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#000'>9</text>  <line x1='225' y1='180' x2='200' y2='210' stroke='#333'/>  <circle cx='190' cy='230' r='15' fill='#d0f4de' stroke='#333'/>  <text x='190' y='235' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#000'>3</text>  <line x1='225' y1='180' x2='255' y2='210' stroke='#333'/>  <circle cx='260' cy='230' r='15' fill='#d0f4de' stroke='#333'/>  <text x='260' y='235' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#000'>3</text></svg>",
  "step1": {
    "title": "Concept: What is a Prime Factor?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>prime factor</strong> is a factor of a number that is also a <em>prime number</em>. Prime numbers have exactly two factors: 1 and themselves, for example, 2, 3, 5, 7, and 11.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of prime numbers as \"building blocks\" just like bricks in a wall — you can only build bigger numbers using these basic blocks.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identify Prime Factors of 18",
      "problem": "Find the prime factors of <strong>18</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is 2 a factor of 18? Type 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Correct! 18 ÷ 2 = 9, so 2 is a factor."
        },
        {
          "id": "q2",
          "prompt": "Is 3 a factor of 18? Type 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Correct! 18 ÷ 3 = 6, so 3 is a factor."
        },
        {
          "id": "q3",
          "prompt": "Is 9 a prime number? Type 'yes' or 'no'.",
          "answer": "no",
          "feedback": "Correct! 9 is not prime because it factors into 3 × 3."
        }
      ]
    }
  },
  "step2": {
    "title": "Exploring Product of Prime Factors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Every number can be broken down into a product of prime numbers. This is called <strong>prime factorisation</strong>. For example, 12 can be written as 2 × 2 × 3 or <em>2<sup>2</sup> × 3</em>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like breaking a LEGO model down to its smallest bricks.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Prime Factorisation of 24",
      "problem": "Find the product of prime factors for <strong>24</strong>.",
      "questions": [
        {
          "id": "q4",
          "prompt": "Divide 24 by the smallest prime number 2. What is the result?",
          "answer": "12",
          "feedback": "Correct! 24 ÷ 2 = 12."
        },
        {
          "id": "q5",
          "prompt": "Divide 12 by 2 again. What is the result?",
          "answer": "6",
          "feedback": "Good! 12 ÷ 2 = 6."
        },
        {
          "id": "q6",
          "prompt": "Divide 6 by 2 again. What is the result?",
          "answer": "3",
          "feedback": "Correct! 6 ÷ 2 = 3."
        },
        {
          "id": "q7",
          "prompt": "Is 3 a prime number? Type 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Yes! 3 is prime."
        },
        {
          "id": "q8",
          "prompt": "Write the prime factors of 24 as a product.",
          "answer": "2×2×2×3",
          "feedback": "Exactly! 24 = 2 × 2 × 2 × 3."
        }
      ]
    }
  },
  "step3": {
    "title": "Finding the Highest Common Factor (HCF) by Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The Highest Common Factor (HCF) of two or more numbers is the greatest number that divides all of them. Using prime factorisation, find the common prime factors with the smallest powers and multiply them.</p>",
    "workedExample": {
      "title": "Worked Example: Find HCF of 18 and 24",
      "problem": "Find the HCF of <strong>18</strong> and <strong>24</strong> using prime factors.",
      "questions": [
        {
          "id": "q9",
          "prompt": "Prime factors of 18 are 2 and 3. Write 18 as product of primes.",
          "answer": "2×3×3",
          "feedback": "Correct! 18 = 2 × 3 × 3."
        },
        {
          "id": "q10",
          "prompt": "Prime factors of 24 are 2 and 3. Write 24 as product of primes.",
          "answer": "2×2×2×3",
          "feedback": "Good! 24 = 2 × 2 × 2 × 3."
        },
        {
          "id": "q11",
          "prompt": "Identify the common prime factors.",
          "answer": "2×3",
          "feedback": "Correct! Both have at least one 2 and one 3."
        },
        {
          "id": "q12",
          "prompt": "Find the HCF by multiplying common factors: 2 × 3 = ?",
          "answer": "6",
          "feedback": "Correct! HCF is 6."
        }
      ]
    }
  },
  "step4": {
    "title": "Finding the Lowest Common Multiple (LCM) by Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The Lowest Common Multiple (LCM) of two or more numbers is the smallest number that is a multiple of each. Using prime factorisation, multiply each prime factor with its highest power found in any of the numbers.</p>",
    "workedExample": {
      "title": "Worked Example: Find LCM of 18 and 24",
      "problem": "Find the LCM of <strong>18</strong> and <strong>24</strong> using prime factors.",
      "questions": [
        {
          "id": "q13",
          "prompt": "Write the prime factorisation of 18.",
          "answer": "2×3×3",
          "feedback": "Correct! 18 = 2 × 3<sup>2</sup>."
        },
        {
          "id": "q14",
          "prompt": "Write the prime factorisation of 24.",
          "answer": "2×2×2×3",
          "feedback": "Correct! 24 = 2<sup>3</sup> × 3."
        },
        {
          "id": "q15",
          "prompt": "Take the highest power of 2 found (which is 2 to the power of ___?).",
          "answer": "3",
          "feedback": "Correct, highest power of 2 is 3."
        },
        {
          "id": "q16",
          "prompt": "Take the highest power of 3 found (which is 3 to the power of ___?).",
          "answer": "2",
          "feedback": "Right! Highest power of 3 is 2."
        },
        {
          "id": "q17",
          "prompt": "Calculate LCM = 2<sup>3</sup> × 3<sup>2</sup> = ?",
          "answer": "72",
          "feedback": "Perfect! LCM is 72."
        }
      ]
    }
  },
  "step5": {
    "title": "Practice: Prime Factorisation via Division Method",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Another way to find prime factors is by continuously dividing the number by the smallest prime factor until you reach 1.</p>",
    "workedExample": {
      "title": "Worked Example: Find prime factors of 60 by division",
      "problem": "Divide 60 by prime numbers step-by-step.",
      "questions": [
        {
          "id": "q18",
          "prompt": "Divide 60 by 2. What is the quotient?",
          "answer": "30",
          "feedback": "Correct! 60 ÷ 2 = 30."
        },
        {
          "id": "q19",
          "prompt": "Divide 30 by 2. What is the quotient?",
          "answer": "15",
          "feedback": "Good! 30 ÷ 2 = 15."
        },
        {
          "id": "q20",
          "prompt": "Divide 15 by 3. What is the quotient?",
          "answer": "5",
          "feedback": "Well done! 15 ÷ 3 = 5."
        },
        {
          "id": "q21",
          "prompt": "Is 5 prime? Type 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Correct! 5 is prime."
        },
        {
          "id": "q22",
          "prompt": "Write the prime factors of 60 as a product.",
          "answer": "2×2×3×5",
          "feedback": "Exactly! 60 = 2 × 2 × 3 × 5."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Use prime factorisation to find both the Highest Common Factor (HCF) and Lowest Common Multiple (LCM) of <strong>36</strong> and <strong>48</strong>. Explain your steps.</span>",
      "hint": "Remember to first express each number as a product of prime factors using factor trees or division. Then identify common factors for HCF and all factors for LCM.",
      "mustHaveKeywords": ["prime factorisation", "common factors", "highest power", "multiply"],
      "optionalKeywords": ["factor tree", "division method", "powers", "lowest common multiple"],
      "modelAnswer": "<span>First, write 36 as prime factors: 2<sup>2</sup> × 3<sup>2</sup>. Next, write 48 as prime factors: 2<sup>4</sup> × 3. The HCF is found by multiplying the common prime factors with the lowest powers: 2<sup>2</sup> × 3 = 12. The LCM is found by multiplying all prime factors with the highest powers: 2<sup>4</sup> × 3<sup>2</sup> = 144.</span>",
      "scaffoldPrompts": [
        "Start by finding the prime factors of 36.",
        "Then find the prime factors of 48.",
        "Identify the common prime factors with smallest powers for HCF.",
        "Identify the highest powers of each prime factor for LCM.",
        "Calculate and write down the HCF and LCM."
      ]
    }
  }
};