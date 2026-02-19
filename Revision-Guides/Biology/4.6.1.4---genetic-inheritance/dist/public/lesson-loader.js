window.lessonContent = {
  "subject": "Biology",
  "specCode": "",
  "topicTitle": "4.6.1.4 - Genetic inheritance",
  "strapline": "Explore the basics of genetic inheritance including alleles, dominant and recessive traits, and how to predict genetic outcomes using Punnett squares.",
  "learningObjectives": [
    "Students should understand that most phenotypic features are the result of multiple genes interacting, rather than single gene inheritance (monohybrid) (Biology 4.6.1.4)",
    "Students should understand the concept of dominant and recessive alleles and be able to use genetic diagrams and Punnett squares to predict the outcomes of monohybrid crosses (Biology 4.6.1.4)",
    "Students should understand and use genetic terminology including genotype, phenotype, homozygous, and heterozygous (Biology 4.6.1.4)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='60' width='70' height='70' fill='#cce5ff' stroke='#333' /><text x='45' y='55' font-family='sans-serif' font-size='14' text-anchor='middle'>Gene</text><text x='45' y='95' font-family='sans-serif' font-size='14' text-anchor='middle'>Allele A</text><rect x='90' y='60' width='70' height='70' fill='#ffcccc' stroke='#333' /><text x='125' y='95' font-family='sans-serif' font-size='14' text-anchor='middle'>Allele a</text><line x1='10' y1='60' x2='45' y2='40' stroke='#333' stroke-width='2' /><line x1='160' y1='60' x2='125' y2='40' stroke='#333' stroke-width='2' /><text x='75' y='25' font-family='sans-serif' font-size='16' font-weight='bold'>Gene</text><text x='210' y='90' font-family='sans-serif' font-size='14'>Alleles are different versions of the same gene</text></svg>",
  "step1": {
    "title": "Concept: Understanding Alleles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>allele</strong> is a version of a gene. For each gene, an organism inherits two alleles — one from each parent. These alleles can be the same or different, and they influence specific traits.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of alleles like different flavors of ice cream: vanilla and chocolate are different 'versions' or alleles. Your genes determine which flavor(s) you get from your parents.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Alleles",
      "problem": "If a pea plant inherits one allele for tallness <strong>(T)</strong> from its mother and one allele for shortness <strong>(t)</strong> from its father, what are its two alleles?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the first allele inherited",
          "answer": "T",
          "feedback": "Correct. The first allele (from mother) is T."
        },
        {
          "id": "q2",
          "prompt": "Enter the second allele inherited",
          "answer": "t",
          "feedback": "Correct. The second allele (from father) is t."
        },
        {
          "id": "q3",
          "prompt": "Write the genotype of the plant using the alleles",
          "answer": "Tt",
          "feedback": "Correct. The genotype is Tt, indicating one dominant and one recessive allele."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Dominant and Recessive Alleles",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>dominant allele</strong> expresses its trait if at least one copy is present (represented by a capital letter). A <strong>recessive allele</strong> only shows its trait if two copies are present (represented by a lowercase letter).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the dominant allele as a loudspeaker that always plays, while the recessive allele is a quiet voice that can only be heard if no loudspeaker is present.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Recognizing Dominant Traits",
      "problem": "Using the genotype <strong>Tt</strong>, which allele determines the plant’s height in the phenotype?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is the dominant allele T or t?",
          "answer": "T",
          "feedback": "Correct. T is the dominant allele."
        },
        {
          "id": "q2",
          "prompt": "What will be the plant’s height phenotype? (tall or short)",
          "answer": "tall",
          "feedback": "Correct. The dominant allele T causes the plant to be tall."
        }
      ]
    }
  },
  "step3": {
    "title": "Genetic Terminology: Genotype and Phenotype",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>genotype</strong> is the genetic makeup of an organism (e.g., BB, Bb, bb). The <strong>phenotype</strong> is the observable characteristic resulting from that genotype, such as tall or short.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the genotype as the recipe (the actual ingredients), and the phenotype as the cooked dish (the visible outcome).</p>"
    },
    "workedExample": {
      "title": "Worked Example: Connecting Genotype and Phenotype",
      "problem": "A plant’s genotype is <strong>bb</strong>. Using the dominant allele concept, what is the phenotype?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Is b dominant or recessive?",
          "answer": "recessive",
          "feedback": "Correct. b is a recessive allele."
        },
        {
          "id": "q2",
          "prompt": "What is the phenotype of the plant with genotype bb?",
          "answer": "short",
          "feedback": "Correct. Two recessive alleles means the plant is short."
        }
      ]
    }
  },
  "step4": {
    "title": "Using Punnett Squares to Predict Monohybrid Crosses",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Punnett squares help predict the possible genotypes of offspring from two parents by combining their alleles in a simple grid.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a Punnett square like a chessboard that shows every possible combination of parents' alleles in the offspring.</p>"
    },
    "workedExample": {
      "title": "Interactive Worked Example: Completing a Punnett Square",
      "problem": "Cross a heterozygous tall plant (Tt) with a homozygous short plant (tt). Fill in the Punnett square.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the alleles for the heterozygous tall parent (top labels, separated by comma)",
          "answer": "T,t",
          "feedback": "Correct. Heterozygous alleles are T and t."
        },
        {
          "id": "q2",
          "prompt": "Enter the alleles for the homozygous short parent (side labels, separated by comma)",
          "answer": "t,t",
          "feedback": "Correct. Homozygous short parent alleles are both t."
        },
        {
          "id": "q3",
          "prompt": "Fill in the genotype result for the top left box (alleles combined)",
          "answer": "Tt",
          "feedback": "Correct! One dominant allele T and one recessive allele t."
        },
        {
          "id": "q4",
          "prompt": "Fill in the genotype result for the top right box",
          "answer": "tt",
          "feedback": "Correct! Two recessive alleles t."
        },
        {
          "id": "q5",
          "prompt": "Fill in the genotype for the bottom left box",
          "answer": "Tt",
          "feedback": "Correct! Same as top left."
        },
        {
          "id": "q6",
          "prompt": "Fill in the genotype for the bottom right box",
          "answer": "tt",
          "feedback": "Correct! Same as top right."
        }
      ],
      "diagramHtml": "<svg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif' font-size='14'><rect x='40' y='40' width='40' height='40' fill='#e6f2ff' stroke='#333'/><rect x='80' y='40' width='40' height='40' fill='#ffe6e6' stroke='#333'/><rect x='40' y='80' width='40' height='40' fill='#e6f2ff' stroke='#333'/><rect x='80' y='80' width='40' height='40' fill='#ffe6e6' stroke='#333'/><text x='20' y='60' text-anchor='middle' dominant-baseline='middle' font-weight='bold'>t</text><text x='20' y='100' text-anchor='middle' dominant-baseline='middle' font-weight='bold'>t</text><text x='60' y='20' text-anchor='middle' dominant-baseline='middle' font-weight='bold'>T</text><text x='100' y='20' text-anchor='middle' dominant-baseline='middle' font-weight='bold'>t</text><text x='60' y='60' text-anchor='middle' dominant-baseline='middle' id='cell1'></text><text x='100' y='60' text-anchor='middle' dominant-baseline='middle' id='cell2'></text><text x='60' y='100' text-anchor='middle' dominant-baseline='middle' id='cell3'></text><text x='100' y='100' text-anchor='middle' dominant-baseline='middle' id='cell4'></text></svg>"
    }
  },
  "step5": {
    "title": "Genotype and Phenotype Ratios",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">From the completed Punnett square, you can calculate the genotypic and phenotypic ratios of the offspring.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Ratios",
      "problem": "Using the previous Punnett square, what are the genotypic and phenotypic ratios of offspring?",
      "questions": [
        {
          "id": "q1",
          "prompt": "How many offspring genotypes are <em>Tt</em> out of 4?",
          "answer": "2",
          "feedback": "Correct, 2 out of 4 are Tt."
        },
        {
          "id": "q2",
          "prompt": "How many offspring genotypes are <em>tt</em> out of 4?",
          "answer": "2",
          "feedback": "Correct, 2 out of 4 are tt."
        },
        {
          "id": "q3",
          "prompt": "What is the genotypic ratio (Tt to tt)? Format as X:Y",
          "answer": "2:2",
          "feedback": "Correct. The genotypic ratio is 2:2."
        },
        {
          "id": "q4",
          "prompt": "What is the phenotypic ratio (tall to short)? Format as X:Y",
          "answer": "2:2",
          "feedback": "Correct. Tall (Tt) and short (tt) plants appear in equal numbers."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how dominant and recessive alleles affect the phenotypes in a monohybrid cross and how to use a Punnett square to predict offspring genotypes and phenotypes.</span>",
      "hint": "Remember to define key terms like genotype, phenotype, dominant and recessive alleles. Use an example cross to support your explanation.",
      "mustHaveKeywords": ["dominant allele", "recessive allele", "genotype", "phenotype", "Punnett square"],
      "optionalKeywords": ["monohybrid", "heterozygous", "homozygous", "genotypic ratio", "phenotypic ratio"],
      "modelAnswer": "<span>Dominant alleles are traits expressed if present at least once, while recessive alleles require two copies to be expressed. A genotype is the genetic makeup (e.g., TT, Tt, tt), and the phenotype is the observable trait, such as tall or short. Using a Punnett square, we can combine parental alleles to predict offspring genotypes and phenotypes. For example, crossing Tt (heterozygous tall) with tt (homozygous short) produces a 1:1 genotypic ratio of Tt and tt, and a phenotypic ratio of 1 tall : 1 short.</span>",
      "scaffoldPrompts": [
        "Define dominant and recessive alleles.",
        "Explain what genotype and phenotype mean.",
        "Describe how a Punnett square works.",
        "Give an example of a monohybrid cross.",
        "Interpret the offspring ratios you get from that cross."
      ]
    }
  }
};