window.lessonContent = {
  "subject": "Biology",
  "specCode": "",
  "topicTitle": "4.6.1.5 - Inherited disorders",
  "strapline": "Explore how certain medical conditions are inherited through genes, the role of dominant and recessive alleles, reading family pedigrees, and understanding human sex determination.",
  "learningObjectives": [
    "Students should understand that some disorders are inherited through genetic information passed from parents to offspring, including polydactyly (caused by a dominant allele) and cystic fibrosis (caused by a recessive allele) (Biology 4.6.1.5)",
    "Students should be able to interpret family pedigrees to understand how inherited disorders are passed on through generations (Biology 4.6.1.5)",
    "Students should understand how sex is determined in humans through sex chromosomes, with females having XX and males having XY, and be able to construct genetic diagrams showing the 50:50 probability of offspring sex (Biology 4.6.1.5)"
  ],
  "keyFormulas": [],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>\n  <!-- Simple diagram showing inheritance of allele from parents to offspring -->\n  <rect x='20' y='40' width='140' height='80' fill='#dceefb' stroke='#3b82f6' rx='8' ry='8'/>\n  <text x='90' y='70' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#1e40af'>Parent 1</text>\n  <text x='90' y='95' text-anchor='middle' font-family='sans-serif' font-size='12'>Genotype: Pp</text>\n  <rect x='240' y='40' width='140' height='80' fill='#fde68a' stroke='#ca8a04' rx='8' ry='8'/>\n  <text x='310' y='70' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#92400e'>Parent 2</text>\n  <text x='310' y='95' text-anchor='middle' font-family='sans-serif' font-size='12'>Genotype: Pp</text>\n  <line x1='160' y1='80' x2='240' y2='80' stroke='#6b7280' stroke-width='2' marker-end='url(#arrow)' />\n\n  <line x1='180' y1='110' x2='180' y2='180' stroke='#6b7280' stroke-width='2'/>\n  <line x1='320' y1='110' x2='320' y2='180' stroke='#6b7280' stroke-width='2'/>\n\n  <rect x='140' y='180' width='120' height='60' fill='#bbf7d0' stroke='#15803d' rx='8' ry='8'/>\n  <text x='200' y='205' text-anchor='middle' font-family='sans-serif' font-size='14' fill='#166534'><tspan x='200' dy='0'>Offspring</tspan><tspan x='200' dy='18'>Possible genotypes:</tspan><tspan x='200' dy='18'>PP, Pp, Pp, pp</tspan></text>\n  <defs>\n    <marker id='arrow' markerWidth='10' markerHeight='10' refX='5' refY='5' orient='auto-start-reverse'>\n      <path d='M0,0 L10,5 L0,10' fill='#6b7280' />\n    </marker>\n  </defs>\n</svg>",
  "step1": {
    "title": "What are inherited disorders?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Inherited disorders are medical conditions caused by faulty genes passed from parents to their children through reproduction. These disorders occur because of changes or mutations in genes, which can be dominant or recessive.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of genes like instructions in a recipe book. If one instruction is wrong (mutated), the final dish (your body) might not turn out as planned, causing a condition or disorder.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding dominant and recessive alleles",
      "problem": "Let's explore how different alleles can cause or prevent an inherited disorder.",
      "questions": [
        {
          "id": "q1",
          "prompt": "If 'P' is the dominant allele causing polydactyly and 'p' is normal, what genotype would cause polydactyly?",
          "answer": "PP or Pp",
          "feedback": "Correct. Both 'PP' and 'Pp' have at least one dominant allele causing the disorder."
        },
        {
          "id": "q2",
          "prompt": "If 'f' is the recessive allele for cystic fibrosis and 'F' is normal, which genotype causes the disorder?",
          "answer": "ff",
          "feedback": "Correct. Two recessive alleles 'ff' are needed for cystic fibrosis to be expressed."
        },
        {
          "id": "q3",
          "prompt": "Is a person with genotype 'Ff' a carrier or affected by cystic fibrosis?",
          "answer": "Carrier",
          "feedback": "Correct. 'Ff' individuals carry the allele but do not show symptoms."
        }
      ]
    }
  },
  "step2": {
    "title": "Interpreting Pedigree Charts",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A pedigree chart is a family tree that shows how inherited disorders pass through generations. Circles represent females, squares represent males, shaded shapes show affected individuals, and unshaded are unaffected.</p>",
    "diagramHtml": "<svg viewBox='0 0 350 200' xmlns='http://www.w3.org/2000/svg'>\n  <!-- Generation 1 -->\n  <circle cx='70' cy='40' r='15' stroke='#444' stroke-width='2' fill='#fff'/>\n  <rect x='120' y='25' width='30' height='30' stroke='#444' stroke-width='2' fill='#000'/>\n  <line x1='85' y1='40' x2='120' y2='40' stroke='#444' stroke-width='2'/>\n  <!-- Generation 2 -->\n  <circle cx='40' cy='110' r='15' stroke='#444' stroke-width='2' fill='#000'/>\n  <rect x='90' y='95' width='30' height='30' stroke='#444' stroke-width='2' fill='#fff'/>\n  <circle cx='160' cy='110' r='15' stroke='#444' stroke-width='2' fill='#fff'/>\n  <line x1='70' y1='55' x2='70' y2='95' stroke='#444' stroke-width='2'/>\n  <line x1='120' y1='55' x2='120' y2='95' stroke='#444' stroke-width='2'/>\n  <line x1='40' y1='125' x2='90' y2='125' stroke='#444' stroke-width='2'/>\n  <line x1='160' y1='125' x2='90' y2='125' stroke='#444' stroke-width='2'/>\n  <!-- Legends -->\n  <rect x='250' y='30' width='20' height='20' fill='#000' stroke='#000'/>\n  <text x='280' y='45' font-family='sans-serif' font-size='14'>Affected</text>\n  <rect x='250' y='60' width='20' height='20' fill='#fff' stroke='#000'/>\n  <text x='280' y='75' font-family='sans-serif' font-size='14'>Unaffected</text>\n  <circle cx='260' cy='110' r='15' fill='#fff' stroke='#000'/>\n  <text x='280' y='115' font-family='sans-serif' font-size='14'>Female</text>\n  <rect x='250' y='140' width='30' height='30' fill='#fff' stroke='#000'/>\n  <text x='280' y='160' font-family='sans-serif' font-size='14'>Male</text>\n</svg>",
    "workedExample": {
      "title": "Worked Example: Analyzing a pedigree",
      "problem": "Look at this pedigree. If the disorder is recessive, and individual in generation 2 who is a male and affected (black square), what can you infer about his parents' genotypes?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Are the parents carriers, affected, or unaffected for a recessive disorder?",
          "answer": "Carriers",
          "feedback": "Correct. Parents of an affected individual with a recessive disorder often are carriers (heterozygous)."
        },
        {
          "id": "q2",
          "prompt": "Why can't one parent be affected and the other unaffected for a recessive disorder causing this child’s condition?",
          "answer": "Because affected means 'ff', unaffected means 'FF' or 'Ff', child needs two 'f' alleles so both parents must carry at least one 'f'",
          "feedback": "Correct. An affected child needs two recessive alleles, so both parents must carry the faulty allele."
        }
      ]
    }
  },
  "step3": {
    "title": "Sex Determination in Humans",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Human sex is determined by sex chromosomes: females are XX and males are XY. The egg from the mother always contributes an X chromosome, while the sperm from the father contributes either an X or a Y chromosome, resulting in a 50:50 chance of male or female offspring.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a deck of cards where half the cards are red (X) and half are black (Y). The father's sperm randomly delivers one card, while the mother's egg always delivers a red card (X), deciding the 'color' (sex) of the child.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Predicting offspring sex",
      "problem": "Complete the genetic diagram to show the possible sex chromosomes of offspring from a female (XX) and a male (XY). Enter the expected genotypes.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write the female’s genotype:",
          "answer": "XX",
          "feedback": "Correct. Females have two X chromosomes."
        },
        {
          "id": "q2",
          "prompt": "Write the male’s genotype:",
          "answer": "XY",
          "feedback": "Correct. Males have one X and one Y chromosome."
        },
        {
          "id": "q3",
          "prompt": "List the possible chromosome combinations for their offspring:",
          "answer": "XX, XY",
          "feedback": "Correct. Offspring can inherit either XX (female) or XY (male)."
        }
      ]
    },
    "diagramHtml": "<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg'>\n  <!-- Parent genotypes -->\n  <text x='20' y='35' font-family='sans-serif' font-size='14'>Female (egg): XX</text>\n  <text x='20' y='60' font-family='sans-serif' font-size='12'>Gametes: X, X</text>\n  <text x='200' y='35' font-family='sans-serif' font-size='14'>Male (sperm): XY</text>\n  <text x='200' y='60' font-family='sans-serif' font-size='12'>Gametes: X, Y</text>\n\n  <!-- Punnett square -->\n  <rect x='70' y='80' width='180' height='120' fill='#f3f4f6' stroke='#6b7280' />\n  <!-- Row labels -->\n  <text x='85' y='95' font-family='sans-serif' font-size='14'>X</text>\n  <text x='85' y='145' font-family='sans-serif' font-size='14'>X</text>\n  <!-- Column labels -->\n  <text x='120' y='75' font-family='sans-serif' font-size='14'>X</text>\n  <text x='180' y='75' font-family='sans-serif' font-size='14'>Y</text>\n\n  <!-- Cells -->\n  <rect x='110' y='90' width='60' height='40' fill='#dbeafe' stroke='#3b82f6'/>\n  <text x='140' y='120' font-family='sans-serif' font-size='16' fill='#1e40af' text-anchor='middle'>XX</text>\n\n  <rect x='170' y='90' width='60' height='40' fill='#fee2e2' stroke='#b91c1c'/>\n  <text x='200' y='120' font-family='sans-serif' font-size='16' fill='#991b1b' text-anchor='middle'>XY</text>\n\n  <rect x='110' y='140' width='60' height='40' fill='#dbeafe' stroke='#3b82f6'/>\n  <text x='140' y='170' font-family='sans-serif' font-size='16' fill='#1e40af' text-anchor='middle'>XX</text>\n\n  <rect x='170' y='140' width='60' height='40' fill='#fee2e2' stroke='#b91c1c'/>\n  <text x='200' y='170' font-family='sans-serif' font-size='16' fill='#991b1b' text-anchor='middle'>XY</text>\n</svg>"
  },
  "step4": {
    "title": "Dominant vs Recessive Disorders",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Understand the difference between dominant and recessive inheritance: dominant disorders require just one faulty allele to show the disorder, while recessive disorders require two copies.</p>",
    "workedExample": {
      "title": "Worked Example: Predicting polydactyly inheritance",
      "problem": "A father has extra fingers (genotype Pp), and the mother is normal (pp). What are the chances their child will have polydactyly? Enter the genotypes for all possible offspring.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Write possible alleles from father:",
          "answer": "P or p",
          "feedback": "Correct. Father can contribute either P or p allele."
        },
        {
          "id": "q2",
          "prompt": "Write possible alleles from mother:",
          "answer": "p",
          "feedback": "Correct. Mother has genotype 'pp', so only 'p' alleles."
        },
        {
          "id": "q3",
          "prompt": "List possible offspring genotypes:",
          "answer": "Pp, pp",
          "feedback": "Correct. Children can have Pp (affected) or pp (unaffected)."
        },
        {
          "id": "q4",
          "prompt": "Calculate the probability a child will have polydactyly:",
          "answer": "50%",
          "feedback": "Correct. There is a 1 in 2 chance (50%) of inheriting the P allele."
        }
      ]
    }
  },
  "step5": {
    "title": "Recessive Disorder: Cystic Fibrosis Inheritance",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cystic fibrosis (CF) is caused by inheriting two recessive alleles (ff). Carriers have one recessive allele (Ff) but don't show symptoms.</p>",
    "workedExample": {
      "title": "Worked Example: Parents who are carriers",
      "problem": "Both parents are carriers for CF (genotype Ff). What are the chances their child will have cystic fibrosis? List all possible genotypes.",
      "questions": [
        {
          "id": "q1",
          "prompt": "List alleles from each parent:",
          "answer": "F or f from each",
          "feedback": "Correct. Each parent can pass on F or f."
        },
        {
          "id": "q2",
          "prompt": "List all possible child genotypes:",
          "answer": "FF, Ff, Ff, ff",
          "feedback": "Correct. Four possible genotypes with these combinations."
        },
        {
          "id": "q3",
          "prompt": "Which genotype causes cystic fibrosis?",
          "answer": "ff",
          "feedback": "Correct. Only 'ff' causes CF."
        },
        {
          "id": "q4",
          "prompt": "Calculate the probability a child will have CF:",
          "answer": "25%",
          "feedback": "Correct. One out of four chance (25%) for 'ff' genotype."
        },
        {
          "id": "q5",
          "prompt": "Calculate the probability a child will be a carrier:",
          "answer": "50%",
          "feedback": "Correct. Two out of four chances (50%) for 'Ff'."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how inherited disorders caused by dominant and recessive alleles can be passed through families. In your answer, describe how genetic diagrams and family pedigrees help predict the likelihood of offspring inheriting disorders like polydactyly and cystic fibrosis. Also, explain how sex is determined in humans.</span>",
      "hint": "Remember to include definitions of dominant and recessive alleles, use examples of polydactyly and cystic fibrosis, mention family pedigree interpretation, and describe sex chromosomes XX and XY with genetic diagram probabilities.",
      "mustHaveKeywords": ["dominant allele", "recessive allele", "polydactyly", "cystic fibrosis", "pedigree", "XX", "XY", "genetic diagram"],
      "optionalKeywords": ["carrier", "probability", "sex determination"],
      "modelAnswer": "<span>Inherited disorders are caused by faulty genes passed from parents to offspring. Dominant allele disorders, like polydactyly, need only one faulty allele to show the condition, while recessive disorders, like cystic fibrosis, require two copies. Family pedigrees visually represent how these disorders pass through generations by showing affected and unaffected individuals. Genetic diagrams, such as Punnett squares, help predict the probability of offspring inheriting specific alleles and thus the disorder. Sex is determined by the chromosomes contributed by parents: females have XX, males XY. The mother always provides an X chromosome, while the father can provide X or Y, resulting in a 50:50 chance of male or female offspring.</span>",
      "scaffoldPrompts": [
        "Define dominant and recessive alleles and give examples.",
        "Explain how pedigrees show inheritance across generations.",
        "Describe how genetic diagrams calculate offspring genotype probabilities.",
        "Explain how sex chromosomes determine biological sex in humans."
      ]
    }
  }
};