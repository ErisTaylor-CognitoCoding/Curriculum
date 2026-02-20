window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.5 - Product of primes for HCF/LCM",
  "strapline": "Learn how to break down numbers into prime factors and use these to find the Highest Common Factor (HCF) and Lowest Common Multiple (LCM).",
  "learningObjectives": [
    "Students should express numbers as products of prime factors using factor trees and division methods (Maths 1.5)",
    "Students should apply prime factorisation to find the highest common factor (HCF) of two or more numbers (Maths 1.5)",
    "Students should apply prime factorisation to find the lowest common multiple (LCM) of two or more numbers (Maths 1.5)"
  ],
  "keyFormulas": [
    "Prime Factorisation: Expressing a number as a product of primes, e.g. 12 = 2² × 3",
    "HCF: Multiply the common prime factors raised to the lowest powers",
    "LCM: Multiply all prime factors raised to the highest powers found in either number"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='15' y='60' width='170' height='170' fill='#e7f3f9' stroke='#007acc' stroke-width='2'/><text x='100' y='45' font-family='Arial' font-size='14' fill='#007acc' text-anchor='middle'>Factor Tree for 24</text><line x1='100' y1='60' x2='40' y2='110' stroke='#007acc' stroke-width='2'/><line x1='100' y1='60' x2='160' y2='110' stroke='#007acc' stroke-width='2'/><line x1='40' y1='110' x2='15' y2='160' stroke='#007acc' stroke-width='2'/><line x1='40' y1='110' x2='65' y2='160' stroke='#007acc' stroke-width='2'/><line x1='160' y1='110' x2='135' y2='160' stroke='#007acc' stroke-width='2'/><line x1='160' y1='110' x2='185' y2='160' stroke='#007acc' stroke-width='2'/><text x='100' y='80' font-family='Arial' font-size='18' fill='#333' text-anchor='middle'>24</text><text x='40' y='130' font-family='Arial' font-size='18' fill='#333' text-anchor='middle'>6</text><text x='160' y='130' font-family='Arial' font-size='18' fill='#333' text-anchor='middle'>4</text><text x='15' y='185' font-family='Arial' font-size='18' fill='#007acc' text-anchor='middle'>2</text><text x='65' y='185' font-family='Arial' font-size='18' fill='#007acc' text-anchor='middle'>3</text><text x='135' y='185' font-family='Arial' font-size='18' fill='#007acc' text-anchor='middle'>2</text><text x='185' y='185' font-family='Arial' font-size='18' fill='#007acc' text-anchor='middle'>2</text></svg>",
  "step1": {
    "title": "Concept: Understanding Prime Factors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>prime factor</strong> is a factor of a number that is itself a prime number. Prime numbers have exactly two factors: 1 and the number itself (e.g., 2, 3, 5, 7, 11). Every number can be broken down uniquely into its prime factors.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of prime factors like the basic building blocks or LEGO bricks. Just as complicated LEGO structures are made by combining basic bricks, numbers are made by multiplying prime factors.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Prime Factorisation of 18",
      "problem": "Use a factor tree or division method to express <strong>18</strong> as a product of prime factors.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Start by dividing 18 by the smallest prime number possible. What is the first division?",
          "answer": "2",
          "feedback": "Correct! 18 ÷ 2 = 9."
        },
        {
          "id": "q2",
          "prompt": "Now divide the quotient (9) by the smallest prime number possible. What is it?",
          "answer": "3",
          "feedback": "Good! 9 ÷ 3 = 3."
        },
        {
          "id": "q3",
          "prompt": "Is 3 a prime number? If yes, write it down as part of your prime factors.",
          "answer": "3",
          "feedback": "Yes, 3 is prime."
        },
        {
          "id": "q4",
          "prompt": "Write the prime factorisation of 18 using the prime numbers found.",
          "answer": "2 × 3 × 3",
          "feedback": "Exactly! 18 = 2 × 3 × 3 or 2 × 3²."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Product of Prime Factors",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Any whole number can be represented as the <em>product</em> of prime numbers raised to their appropriate powers. This is called <strong>prime factorisation</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine writing the recipe of a cake: the ingredients (prime factors) combine in fixed amounts (powers) to bake exactly one cake (the original number).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Prime Factorisation of 60",
      "problem": "Write 60 as a product of prime factors using division.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Divide 60 by the smallest prime number. What is it and what is the quotient?",
          "answer": "2",
          "feedback": "Correct! 60 ÷ 2 = 30."
        },
        {
          "id": "q2",
          "prompt": "Divide the quotient (30) by the smallest prime number possible. What is it and the result?",
          "answer": "2",
          "feedback": "Correct! 30 ÷ 2 = 15."
        },
        {
          "id": "q3",
          "prompt": "Divide 15 by the smallest prime number possible. What do you get?",
          "answer": "3",
          "feedback": "Good! 15 ÷ 3 = 5."
        },
        {
          "id": "q4",
          "prompt": "Is 5 a prime number? Confirm and write all your prime factors.",
          "answer": "Yes, 5",
          "feedback": "Perfect. Prime factors are 2, 2, 3, and 5."
        },
        {
          "id": "q5",
          "prompt": "Express 60 as the product of primes with powers where applicable.",
          "answer": "2² × 3 × 5",
          "feedback": "Excellent! 60 = 2² × 3 × 5."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Finding the Highest Common Factor (HCF)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>highest common factor</strong> (HCF) of two or more numbers is the biggest number that divides them all without remainder. Using prime factorisation, the HCF is found by multiplying all common prime factors raised to the <em>lowest</em> power they appear in each number.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of two people sharing bundles of sticks. The HCF is the largest bundle size they both can share perfectly.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find HCF of 24 and 36",
      "problem": "Use prime factorisation to find the HCF of 24 and 36.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the prime factorisation of 24.",
          "answer": "2³ × 3",
          "feedback": "Correct! 24 = 2³ × 3."
        },
        {
          "id": "q2",
          "prompt": "Write the prime factorisation of 36.",
          "answer": "2² × 3²",
          "feedback": "Correct! 36 = 2² × 3²."
        },
        {
          "id": "q3",
          "prompt": "Identify the common prime factors and their lowest powers.",
          "answer": "2² and 3¹",
          "feedback": "Exactly! Common primes: 2 and 3 with lowest powers 2 and 1."
        },
        {
          "id": "q4",
          "prompt": "Calculate the HCF by multiplying the common factors with their lowest powers.",
          "answer": "2² × 3 = 12",
          "feedback": "Right! HCF is 12."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Finding the Lowest Common Multiple (LCM)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>Lowest Common Multiple</strong> (LCM) is the smallest number that is divisible by each of two or more numbers. Using prime factorisation, the LCM is found by multiplying all prime factors found in either number at their <em>highest</em> powers.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two runners on tracks with different lap lengths; the LCM is when they both meet again at the start line.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Find LCM of 8 and 12",
      "problem": "Use prime factorisation to find the LCM of 8 and 12.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the prime factorisation of 8.",
          "answer": "2³",
          "feedback": "Good! 8 = 2³."
        },
        {
          "id": "q2",
          "prompt": "Write the prime factorisation of 12.",
          "answer": "2² × 3",
          "feedback": "Right! 12 = 2² × 3."
        },
        {
          "id": "q3",
          "prompt": "Identify all prime factors and select the highest powers of each.",
          "answer": "2³ and 3¹",
          "feedback": "Exactly. Highest powers are 2³ and 3."
        },
        {
          "id": "q4",
          "prompt": "Calculate the LCM by multiplying these factors.",
          "answer": "2³ × 3 = 24",
          "feedback": "Correct! LCM is 24."
        }
      ]
    }
  },
  "step5": {
    "title": "Practice: Prime Factorisation and HCF/LCM",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's practice finding both HCF and LCM using prime factorisation on two numbers.</p>",
    "workedExample": {
      "title": "Practice with 45 and 60",
      "problem": "Find the prime factorisation, HCF, and LCM of 45 and 60.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Prime factorise 45.",
          "answer": "3² × 5",
          "feedback": "Correct! 45 = 3² × 5."
        },
        {
          "id": "q2",
          "prompt": "Prime factorise 60.",
          "answer": "2² × 3 × 5",
          "feedback": "Correct! 60 = 2² × 3 × 5."
        },
        {
          "id": "q3",
          "prompt": "Identify the common prime factors and lowest powers for HCF.",
          "answer": "3¹ and 5¹",
          "feedback": "Exactly. HCF uses 3 and 5 to the power of 1."
        },
        {
          "id": "q4",
          "prompt": "Calculate the HCF.",
          "answer": "3 × 5 = 15",
          "feedback": "Right! HCF is 15."
        },
        {
          "id": "q5",
          "prompt": "Identify all prime factors with highest powers for LCM.",
          "answer": "2², 3², 5¹",
          "feedback": "Good. LCM uses 2², 3², and 5."
        },
        {
          "id": "q6",
          "prompt": "Calculate the LCM.",
          "answer": "2² × 3² × 5 = 180",
          "feedback": "Correct! LCM is 180."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Use prime factorisation to find the HCF and LCM of 48 and 72. Show all your working clearly.</span>",
      "hint": "Remember to write both numbers as products of prime factors, find common factors for HCF, and highest powers for LCM.",
      "mustHaveKeywords": ["prime factorisation", "highest common factor", "lowest common multiple", "powers", "common factors"],
      "optionalKeywords": ["division method", "factor trees", "multiply"],
      "modelAnswer": "<span>First, prime factorise both numbers:<br> 48 = 2⁴ × 3<br> 72 = 2³ × 3²<br> Then, find the HCF by taking common prime factors with lowest powers:<br> HCF = 2³ × 3 = 24<br> For LCM, take all prime factors with highest powers:<br> LCM = 2⁴ × 3² = 144</span>",
      "scaffoldPrompts": ["Prime factorise 48 and 72 separately.", "Identify the common prime factors and their lowest powers for HCF.", "Identify all prime factors with highest powers for LCM.", "Multiply to get HCF and LCM."]
    }
  }
};