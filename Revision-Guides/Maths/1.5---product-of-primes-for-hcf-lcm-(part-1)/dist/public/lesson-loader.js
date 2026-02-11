window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "1.5 - Product of primes for HCF/LCM (Part 1)",
  "strapline": "Understanding prime factorisation and its applications to find HCF and LCM.",
  "learningObjectives": [
    "Students should be able to express numbers as products of their prime factors using factor trees or division methods (Maths 1.5)",
    "Students should be able to use prime factorisation to find the Highest Common Factor (HCF) of two or more numbers (Maths 1.5)",
    "Students should be able to use prime factorisation to find the Lowest Common Multiple (LCM) of two or more numbers (Maths 1.5)"
  ],
  "step1": {
    "title": "Concept 1: Prime Factorisation",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Prime factorisation is the process of breaking down a number into its prime factors, which when multiplied together equal the original number. For example, 12 can be written as 2 × 2 × 3 or using exponents as 2<sup>2</sup> × 3.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of prime factorisation like a recipe: just like you break a cake down into individual ingredients, you break a number down into its 'ingredients' — the prime numbers.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start with the number 18.</span>",
        "<span>Divide by the smallest prime number: 18 ÷ 2 = 9.</span>",
        "<span>Next, factor 9 by dividing by the next smallest prime: 9 ÷ 3 = 3.</span>",
        "<span>Since 3 is prime, the factorisation stops here.</span>",
        "<span>So, 18 = 2 × 3 × 3 or 2 × 3<sup>2</sup>.</span>"
      ]
    }
  },
  "step2": {
    "title": "Using Factor Trees and Division Methods",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">You can find prime factors using two main methods: factor trees, where you split numbers step by step until all factors are prime, and division, where you divide repeatedly by primes.</p>",
    "workedExample": {
      "title": "Worked Example Using a Factor Tree",
      "bullets": [
        "<span>Start with 36 at the top of the tree.</span>",
        "<span>Split 36 into two factors, say 6 and 6.</span>",
        "<span>Split each 6 into 2 and 3 (both prime).</span>",
        "<span>So, 36 = 2 × 2 × 3 × 3 or 2<sup>2</sup> × 3<sup>2</sup>.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept 2: Highest Common Factor (HCF)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The Highest Common Factor is the largest number that divides two or more numbers exactly. Using prime factorisation, identify common prime factors in each number and multiply the common primes with the lowest powers.</p>",
    "workedExample": {
      "title": "Worked Example to find HCF of 18 and 24",
      "bullets": [
        "<span>Prime factorise 18: 2 × 3 × 3</span>",
        "<span>Prime factorise 24: 2 × 2 × 2 × 3</span>",
        "<span>Identify the common primes: 2 and 3</span>",
        "<span>Take the lowest powers: 2<sup>1</sup> and 3<sup>1</sup></span>",
        "<span>Multiply: 2 × 3 = 6, so HCF is 6</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept 3: Lowest Common Multiple (LCM)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The Lowest Common Multiple is the smallest number that is a multiple of two or more numbers. Using prime factorisation, take all prime factors that appear in any number, but take the highest powers for each prime.</p>",
    "workedExample": {
      "title": "Worked Example to find LCM of 18 and 24",
      "bullets": [
        "<span>Prime factorise 18: 2 × 3 × 3</span>",
        "<span>Prime factorise 24: 2 × 2 × 2 × 3</span>",
        "<span>Take each prime factor with the highest power: 2<sup>3</sup> and 3<sup>2</sup></span>",
        "<span>Multiply: 2<sup>3</sup> × 3<sup>2</sup> = 8 × 9 = 72</span>",
        "<span>So, LCM is 72</span>"
      ]
    }
  },
  "step5": {
    "title": "Practice with Prime Factorisation and HCF/LCM",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Try prime factorising numbers and then find their HCF and LCM using the steps you have learned.</p>",
    "workedExample": {
      "title": "Practice Example: 20 and 30",
      "bullets": [
        "<span>Prime factorise 20: 2 × 2 × 5</span>",
        "<span>Prime factorise 30: 2 × 3 × 5</span>",
        "<span>HCF: common primes are 2 and 5, so 2 × 5 = 10</span>",
        "<span>LCM: highest powers are 2<sup>2</sup>, 3<sup>1</sup>, and 5<sup>1</sup> = 4 × 3 × 5 = 60</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to find the HCF and LCM of 36 and 48 using prime factorisation.</span>",
      "hint": "Remember to prime factorise each number first, then identify common prime factors for HCF and highest powers for LCM.",
      "mustHaveKeywords": ["prime factorisation", "common prime factors", "lowest powers", "highest powers", "multiply"],
      "optionalKeywords": ["factor trees", "division method"],
      "modelAnswer": "<span>First, prime factorise 36 as 2<sup>2</sup> × 3<sup>2</sup> and 48 as 2<sup>4</sup> × 3. To find the HCF, identify common prime factors with the lowest powers: 2<sup>2</sup> and 3<sup>1</sup>. Multiply these to get 4 × 3 = 12. To find the LCM, take all prime factors with the highest powers: 2<sup>4</sup> and 3<sup>2</sup>. Multiply to get 16 × 9 = 144.</span>",
      "scaffoldPrompts": [
        "Prime factorise 36 and 48.",
        "Write down the powers of each prime.",
        "Find common primes and choose the lowest powers for HCF.",
        "Find all primes with highest powers for LCM.",
        "Multiply the chosen prime factors to get your final answers."
      ]
    }
  }
};