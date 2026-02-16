window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.5 - Product of primes for HCF/LCM (Part 1)",
  "strapline": "Understanding how to break down numbers into prime factors and use these to find the Highest Common Factor and Lowest Common Multiple.",
  "learningObjectives": [
    "Students should be able to express numbers as products of their prime factors using factor trees or division methods (Maths 1.5)",
    "Students should be able to use prime factorisation to find the Highest Common Factor (HCF) of two or more numbers (Maths 1.5)",
    "Students should be able to use prime factorisation to find the Lowest Common Multiple (LCM) of two or more numbers (Maths 1.5)"
  ],
  "keyFormulas": [
    "Prime Factorisation: e.g. 12 = 2 × 2 × 3 or 2<sup>2</sup> × 3",
    "HCF: Multiply the common prime factors with the lowest powers.",
    "LCM: Multiply all prime factors, using the highest powers found in either number."
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='150' height='260' fill='#e8f0fe' stroke='#1a73e8' stroke-width='2'/><text x='95' y='60' font-family='sans-serif' font-size='20' text-anchor='middle' fill='#1a73e8'>Factor Tree for 60</text><line x1='95' y1='75' x2='40' y2='120' stroke='#1a73e8' stroke-width='2'/><line x1='95' y1='75' x2='150' y2='120' stroke='#1a73e8' stroke-width='2'/><text x='40' y='140' font-family='sans-serif' font-size='18' fill='#333'>6</text><text x='150' y='140' font-family='sans-serif' font-size='18' fill='#333'>10</text><line x1='40' y1='155' x2='20' y2='190' stroke='#1a73e8' stroke-width='2'/><line x1='40' y1='155' x2='60' y2='190' stroke='#1a73e8' stroke-width='2'/><text x='20' y='210' font-family='sans-serif' font-size='18' fill='#333'>2</text><text x='60' y='210' font-family='sans-serif' font-size='18' fill='#333'>3</text><line x1='150' y1='155' x2='130' y2='190' stroke='#1a73e8' stroke-width='2'/><line x1='150' y1='155' x2='170' y2='190' stroke='#1a73e8' stroke-width='2'/><text x='130' y='210' font-family='sans-serif' font-size='18' fill='#333'>2</text><text x='170' y='210' font-family='sans-serif' font-size='18' fill='#333'>5</text></svg>",
  "step1": {
    "title": "Concept: Understanding Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Prime factorisation means breaking down a whole number into the prime numbers that multiply together to make the original number. For example, 12 can be expressed as 2 × 2 × 3 or 2<sup>2</sup> × 3.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of prime factors like the basic Lego bricks that build a structure. Every number’s structure is made from these fundamental blocks.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Prime Factorisation of 36",
      "problem": "Find the prime factors of <strong>36</strong> using a factor tree or division.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Start dividing 36 by the smallest prime number possible. What is the first divisor you use?",
          "answer": "2",
          "feedback": "Correct. 2 is the smallest prime number that divides 36."
        },
        {
          "id": "q2",
          "prompt": "What is 36 divided by 2?",
          "answer": "18",
          "feedback": "Correct. 36 ÷ 2 = 18."
        },
        {
          "id": "q3",
          "prompt": "Continue prime factorisation of 18. What is the next prime divisor?",
          "answer": "2",
          "feedback": "Correct. 2 divides 18."
        },
        {
          "id": "q4",
          "prompt": "What is 18 divided by 2?",
          "answer": "9",
          "feedback": "Correct. 18 ÷ 2 = 9."
        },
        {
          "id": "q5",
          "prompt": "Now factor 9. What prime number divides 9?",
          "answer": "3",
          "feedback": "Correct. 3 is a prime factor of 9."
        },
        {
          "id": "q6",
          "prompt": "What is 9 divided by 3?",
          "answer": "3",
          "feedback": "Correct. 9 ÷ 3 = 3."
        },
        {
          "id": "q7",
          "prompt": "Is 3 prime? Type 'yes' or 'no'.",
          "answer": "yes",
          "feedback": "Correct. 3 is a prime number."
        },
        {
          "id": "q8",
          "prompt": "List all the prime factors of 36.",
          "answer": "2, 2, 3, 3",
          "feedback": "Well done! The prime factors of 36 are 2 × 2 × 3 × 3 or 2<sup>2</sup> × 3<sup>2</sup>."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Finding the Highest Common Factor (HCF) Using Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The HCF is the largest number that divides two or more numbers exactly. To find the HCF using prime factors, write each number as a product of primes, find the common prime factors, and multiply them.</p>"
  },
  "step3": {
    "title": "Worked Example: Find the HCF of 24 and 36",
    "explanation": "<p>Let’s find the prime factors of 24 and 36 and then work out their HCF.</p>",
    "workedExample": {
      "title": "Step-by-step",
      "problem": "Find the HCF of <strong>24</strong> and <strong>36</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the prime factors of 24?",
          "answer": "2, 2, 2, 3",
          "feedback": "Correct. 24 = 2 × 2 × 2 × 3 or 2<sup>3</sup> × 3."
        },
        {
          "id": "q2",
          "prompt": "What are the prime factors of 36?",
          "answer": "2, 2, 3, 3",
          "feedback": "Correct. 36 = 2 × 2 × 3 × 3 or 2<sup>2</sup> × 3<sup>2</sup>."
        },
        {
          "id": "q3",
          "prompt": "List the common prime factors between 24 and 36.",
          "answer": "2, 2, 3",
          "feedback": "Correct. Both numbers share two 2s and one 3."
        },
        {
          "id": "q4",
          "prompt": "Now multiply the common prime factors to find the HCF.",
          "answer": "12",
          "feedback": "Well done! The HCF of 24 and 36 is 12."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Understanding the Lowest Common Multiple (LCM) Using Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The LCM is the smallest number that both numbers divide into exactly. To find the LCM using prime factorisation, use all prime factors from both numbers, taking the highest power of each prime.</p>"
  },
  "step5": {
    "title": "Worked Example: Find the LCM of 24 and 36",
    "explanation": "<p>Using the prime factors from before, let’s find the LCM.</p>",
    "workedExample": {
      "title": "Step-by-step",
      "problem": "Find the LCM of <strong>24</strong> and <strong>36</strong>.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Recall the prime factors of 24.",
          "answer": "2, 2, 2, 3",
          "feedback": "Correct. 24 = 2<sup>3</sup> × 3."
        },
        {
          "id": "q2",
          "prompt": "Recall the prime factors of 36.",
          "answer": "2, 2, 3, 3",
          "feedback": "Correct. 36 = 2<sup>2</sup> × 3<sup>2</sup>."
        },
        {
          "id": "q3",
          "prompt": "For each prime (2 and 3), select the highest power appearing in either number.",
          "answer": "2<sup>3</sup>, 3<sup>2</sup>",
          "feedback": "Correct. Highest power of 2 is 3 and 3 is 2."
        },
        {
          "id": "q4",
          "prompt": "Multiply these highest powers to find the LCM.",
          "answer": "72",
          "feedback": "Well done! The LCM of 24 and 36 is 72."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to use prime factorisation to find both the HCF and LCM of two numbers, 18 and 30.</span>",
      "hint": "Remember to start by prime factorising both numbers fully, then identify common and highest powers of primes.",
      "mustHaveKeywords": ["prime factorisation", "common prime factors", "highest powers", "multiply"],
      "optionalKeywords": ["factor tree", "division method", "HCF", "LCM"],
      "modelAnswer": "<span>First, prime factorise 18 and 30 fully. For HCF, identify the common prime factors and multiply them using the lowest powers. For LCM, take all prime factors from both numbers, using the highest powers, then multiply them to get the smallest common multiple.</span>",
      "scaffoldPrompts": [
        "Prime factorise 18.",
        "Prime factorise 30.",
        "Identify common prime factors for HCF.",
        "Multiply common factors to find HCF.",
        "Identify highest powers for each prime for LCM.",
        "Multiply highest powers to find LCM."
      ]
    }
  }
};