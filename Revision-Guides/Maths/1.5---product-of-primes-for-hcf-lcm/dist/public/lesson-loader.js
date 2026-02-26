window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "1.5 - Product of primes for HCF/LCM",
  "strapline": "Understanding how prime factorisation helps us find the Highest Common Factor and Lowest Common Multiple of numbers.",
  "learningObjectives": [
    "Students should express numbers as products of prime factors using factor trees and division methods (Maths 1.5)",
    "Students should apply prime factorisation to find the highest common factor (HCF) of two or more numbers (Maths 1.5)",
    "Students should apply prime factorisation to find the lowest common multiple (LCM) of two or more numbers (Maths 1.5)"
  ],
  "keyFormulas": [
    "HCF = Product of common prime factors with smallest powers",
    "LCM = Product of all prime factors with highest powers from each number",
    "Prime factorisation expresses any number as a product of primes"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\
  <rect x='20' y='20' width='160' height='220' fill='#eef6fa' stroke='#3a86ff' stroke-width='2' rx='10' ry='10'/>\
  <text x='100' y='55' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='16' fill='#023047'>Factor Tree</text>\
  <line x1='100' y1='65' x2='70' y2='100' stroke='#023047' stroke-width='2'/>\
  <line x1='100' y1='65' x2='130' y2='100' stroke='#023047' stroke-width='2'/>\
  <circle cx='100' cy='50' r='15' fill='#8ecae6' stroke='#023047' stroke-width='1'/>\
  <text x='100' y='55' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='14' fill='#023047'>48</text>\
  <circle cx='70' cy='120' r='15' fill='#219ebc' stroke='#023047' stroke-width='1'/>\
  <text x='70' y='125' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='14' fill='white'>6</text>\
  <circle cx='130' cy='120' r='15' fill='#219ebc' stroke='#023047' stroke-width='1'/>\
  <text x='130' y='125' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='14' fill='white'>8</text>\
  <line x1='70' y1='135' x2='50' y2='170' stroke='#023047' stroke-width='2'/>\
  <line x1='70' y1='135' x2='90' y2='170' stroke='#023047' stroke-width='2'/>\
  <circle cx='50' cy='190' r='15' fill='#ffb703' stroke='#023047' stroke-width='1'/>\
  <text x='50' y='195' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='14' fill='black'>2</text>\
  <circle cx='90' cy='190' r='15' fill='#ffb703' stroke='#023047' stroke-width='1'/>\
  <text x='90' y='195' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='14' fill='black'>3</text>\
  <line x1='130' y1='135' x2='115' y2='170' stroke='#023047' stroke-width='2'/>\
  <line x1='130' y1='135' x2='145' y2='170' stroke='#023047' stroke-width='2'/>\
  <circle cx='115' cy='190' r='15' fill='#ffb703' stroke='#023047' stroke-width='1'/>\
  <text x='115' y='195' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='14' fill='black'>2</text>\
  <circle cx='145' cy='190' r='15' fill='#ffb703' stroke='#023047' stroke-width='1'/>\
  <text x='145' y='195' text-anchor='middle' font-family='Arial' font-weight='bold' font-size='14' fill='black'>4</text>\
  </svg>",
  "step1": {
    "title": "Concept: Prime Factors and Factor Trees",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>prime factor</strong> is a factor of a number that is also a prime number. Prime numbers are those greater than 1 that have exactly two factors: 1 and themselves. To find prime factors, we can use methods like <em>factor trees</em> or dividing by prime numbers repeatedly.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a number as a LEGO® model made from building blocks. Prime factors are the smallest blocks you cannot break down any further. Factor trees show how the big model is made from these smallest blocks.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Prime Factorisation using a Factor Tree",
      "problem": "Find the prime factors of <strong>48</strong>.",
      "questions": [
        {
          "id": "step1-q1",
          "prompt": "Start the factor tree: Find two numbers that multiply to give 48. Enter one of them.",
          "answer": ["6", "8"],
          "feedback": "Correct! 48 = 6 × 8."
        },
        {
          "id": "step1-q2",
          "prompt": "Break down 6 into prime factors: enter one factor of 6.",
          "answer": ["2", "3"],
          "feedback": "Well done! 6 breaks down into 2 and 3."
        },
        {
          "id": "step1-q3",
          "prompt": "Break down 8 into prime factors: enter one factor of 8.",
          "answer": ["2", "4"],
          "feedback": "Correct! 8 = 2 × 4."
        },
        {
          "id": "step1-q4",
          "prompt": "Break down 4 into prime factors: enter one factor of 4.",
          "answer": ["2", "2"],
          "feedback": "Yes! 4 breaks into 2 and 2."
        },
        {
          "id": "step1-q5",
          "prompt": "List all prime factors of 48 using your factor tree (enter numbers separated by commas).",
          "answer": ["2,2,2,2,3", "2,2,2,3,2", "2,2,3,2,2"],
          "feedback": "Great job! The prime factors of 48 are 2, 2, 2, 2 and 3."
        }
      ]
    }
  },
  "step2": {
    "title": "Prime Factorisation Using the Division Method",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An alternative to the factor tree is the division method, where you repeatedly divide the number by its smallest prime factor until you reach 1. This gives the prime factors step-by-step.</p>",
    "workedExample": {
      "title": "Worked Example: Division Method for 60",
      "problem": "Find the prime factors of <strong>60</strong> using division.",
      "questions": [
        {
          "id": "step2-q1",
          "prompt": "Divide 60 by the smallest prime number it is divisible by.",
          "answer": "2",
          "feedback": "Correct, 60 ÷ 2 = 30."
        },
        {
          "id": "step2-q2",
          "prompt": "Now divide 30 by the smallest prime number it is divisible by.",
          "answer": "2",
          "feedback": "Well done, 30 ÷ 2 = 15."
        },
        {
          "id": "step2-q3",
          "prompt": "Divide 15 by the smallest prime number it is divisible by.",
          "answer": "3",
          "feedback": "Good! 15 ÷ 3 = 5."
        },
        {
          "id": "step2-q4",
          "prompt": "Finally, divide 5 by the smallest prime number it is divisible by.",
          "answer": "5",
          "feedback": "Exactly! 5 ÷ 5 = 1."
        },
        {
          "id": "step2-q5",
          "prompt": "List all prime factors of 60 from this process.",
          "answer": ["2,2,3,5"],
          "feedback": "Great! The prime factors of 60 are 2, 2, 3, and 5."
        }
      ]
    }
  },
  "step3": {
    "title": "Understanding Highest Common Factor (HCF)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>Highest Common Factor (HCF)</strong> of two or more numbers is the largest number that divides all of them without leaving a remainder. Using prime factorisation, find the common prime factors and multiply them with their lowest powers.</p>",
    "workedExample": {
      "title": "Worked Example: Find the HCF of 48 and 60",
      "problem": "Find the HCF of <strong>48</strong> and <strong>60</strong> using prime factorisation.",
      "questions": [
        {
          "id": "step3-q1",
          "prompt": "List the prime factors of 48.",
          "answer": ["2,2,2,2,3"],
          "feedback": "Correct! 48 = 2⁴ × 3."
        },
        {
          "id": "step3-q2",
          "prompt": "List the prime factors of 60.",
          "answer": ["2,2,3,5"],
          "feedback": "Correct! 60 = 2² × 3 × 5."
        },
        {
          "id": "step3-q3",
          "prompt": "Identify the common prime factors between 48 and 60.",
          "answer": ["2,2,3"],
          "feedback": "Good! Common prime factors are two 2s and one 3."
        },
        {
          "id": "step3-q4",
          "prompt": "Calculate the HCF by multiplying the common prime factors.",
          "answer": ["12"],
          "feedback": "Excellent! HCF = 2 × 2 × 3 = 12."
        }
      ]
    }
  },
  "step4": {
    "title": "Understanding Lowest Common Multiple (LCM)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>Lowest Common Multiple (LCM)</strong> of two or more numbers is the smallest number that all numbers divide into without remainder. Using prime factorisation, multiply each prime factor the greatest number of times it occurs in any of the numbers.</p>",
    "workedExample": {
      "title": "Worked Example: Find the LCM of 48 and 60",
      "problem": "Find the LCM of <strong>48</strong> and <strong>60</strong> using prime factorisation.",
      "questions": [
        {
          "id": "step4-q1",
          "prompt": "List the prime factors of 48 with their powers.",
          "answer": ["2^4,3"],
          "feedback": "Correct! 48 = 2⁴ × 3."
        },
        {
          "id": "step4-q2",
          "prompt": "List the prime factors of 60 with their powers.",
          "answer": ["2^2,3,5"],
          "feedback": "Correct! 60 = 2² × 3 × 5."
        },
        {
          "id": "step4-q3",
          "prompt": "Select the highest powers of each prime factor from both numbers.",
          "answer": ["2^4,3,5"],
          "feedback": "Perfect! Highest powers are 2⁴, 3¹, and 5¹."
        },
        {
          "id": "step4-q4",
          "prompt": "Calculate LCM by multiplying these factors: 2⁴ × 3 × 5.",
          "answer": ["240"],
          "feedback": "Excellent! LCM = 16 × 3 × 5 = 240."
        }
      ]
    }
  },
  "step5": {
    "title": "Visualising HCF and LCM",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the products of prime factors, we can see how HCF includes only the common factors at their lowest powers, while LCM takes all factors at their highest powers. This helps in solving many problems involving divisibility and multiples.</p>",
    "diagramHtml": "<svg viewBox='0 0 500 250' xmlns='http://www.w3.org/2000/svg'>\
    <text x='50' y='30' font-family='Arial' font-size='16' font-weight='bold'>48 = 2<sup>4</sup> × 3</text>\
    <text x='50' y='60' font-family='Arial' font-size='16' font-weight='bold'>60 = 2<sup>2</sup> × 3 × 5</text>\
    <line x1='50' y1='75' x2='220' y2='75' stroke='#aaa' stroke-dasharray='4 2'/>\
    <text x='50' y='105' font-family='Arial' font-size='14' fill='#1d3557'>HCF:</text>\
    <rect x='90' y='85' width='60' height='30' fill='#457b9d' opacity='0.6' rx='5' ry='5'/>\
    <text x='120' y='105' font-family='Arial' font-size='16' font-weight='bold' fill='white'>2<sup>2</sup> × 3</text>\
    <text x='50' y='160' font-family='Arial' font-size='14' fill='#e63946'>LCM:</text>\
    <rect x='90' y='140' width='120' height='40' fill='#f1faee' stroke='#1d3557' stroke-width='2' rx='5' ry='5'/>\
    <text x='150' y='165' font-family='Arial' font-size='16' font-weight='bold' fill='#1d3557'>2<sup>4</sup> × 3 × 5</text>\
    </svg>"
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to find the Highest Common Factor (HCF) and Lowest Common Multiple (LCM) of two numbers using prime factorisation. Use the numbers 36 and 84 in your explanation.</span>",
      "hint": "Remember to first express each number as a product of prime factors, then compare the powers of common primes for HCF, and take the highest powers for LCM.",
      "mustHaveKeywords": ["prime factorisation", "common prime factors", "lowest powers", "highest powers", "multiply"],
      "optionalKeywords": ["division method", "factor tree"],
      "modelAnswer": "<span>To find the HCF and LCM of 36 and 84 using prime factorisation, first express each number as a product of primes: 36 = 2<sup>2</sup> × 3<sup>2</sup> and 84 = 2<sup>2</sup> × 3 × 7. The HCF is found by multiplying the common prime factors with the lowest powers, so HCF = 2<sup>2</sup> × 3 = 12. The LCM is found by multiplying all prime factors at their highest powers, so LCM = 2<sup>2</sup> × 3<sup>2</sup> × 7 = 252.</span>",
      "scaffoldPrompts": [
        "Start by finding the prime factors of 36 and 84.",
        "Identify the common prime factors and their lowest powers for HCF.",
        "Identify the highest powers of all prime factors for LCM.",
        "Multiply these to get the final HCF and LCM."
      ]
    }
  }
};