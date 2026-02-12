window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "3.2 - Growth and decay (exponential, compound interest) (Part 2)",
  "strapline": "Understanding and solving problems involving compound interest and exponential growth and decay through formulas and graphs.",
  "learningObjectives": [
    "Students should be able to model situations involving repeated percentage changes using the formula for compound interest and exponential equations (Maths 3.2)",
    "Students should be able to interpret and construct exponential graphs, recognising the characteristic curves of growth and decay (Maths 3.2)",
    "Students should be able to solve problems involving finding the original amount or the number of time periods in compound interest scenarios (Maths 3.2)"
  ],
  "keyFormulas": [
    "Compound Interest Formula: A = P × (1 + r)^n where P is the principal, r is the rate per period (as decimal), n is number of periods, A is the amount",
    "Exponential Growth Multiplier: 1 + (percentage growth ÷ 100)",
    "Exponential Decay Multiplier: 1 - (percentage decay ÷ 100)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><text x='200' y='40' text-anchor='middle' font-family='sans-serif' font-weight='bold'>Exponential Growth and Decay Curves</text><polyline points='60,250 100,200 150,150 200,110 250,85 300,70 340,60' fill='none' stroke='green' stroke-width='3'/><text x='350' y='70' font-family='sans-serif' fill='green'>Growth</text><polyline points='60,60 100,90 150,130 200,170 250,210 300,240 340,260' fill='none' stroke='red' stroke-width='3'/><text x='350' y='260' font-family='sans-serif' fill='red'>Decay</text><line x1='50' y1='250' x2='350' y2='250' stroke='#333' stroke-width='1'/><line x1='50' y1='50' x2='50' y2='250' stroke='#333' stroke-width='1'/><text x='180' y='280' font-family='sans-serif'>Time period</text><text x='10' y='150' font-family='sans-serif' transform='rotate(-90 10,150)'>Quantity</text></svg>",
  "step1": {
    "title": "Concept: Exponential Growth",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth occurs when a quantity increases by the same percentage repeatedly over equal time periods. This results in faster and faster growth as time passes. The growth multiplier is always greater than 1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a population of bacteria doubling every hour. The number grows slowly at first, but quickly accelerates as the bacteria multiplies repeatedly.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Starting with 100 bacteria, doubling every hour means a 100% increase per hour.</span>",
        "<span>The multiplier = 1 + (100 ÷ 100) = 2.</span>",
        "<span>After 3 hours, amount = 100 × 2^3 = 100 × 8 = 800 bacteria.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Exponential Decay",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential decay happens when a quantity decreases by the same percentage repeatedly over equal time periods, leading to a slowing decline. The decay multiplier is always between 0 and 1.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think about a radioactive substance that loses 10% of its mass every hour. Its mass gets smaller, but never quite reaches zero.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Starting with 200g of a substance losing 10% every hour.</span>",
        "<span>The multiplier = 1 - (10 ÷ 100) = 0.9.</span>",
        "<span>After 3 hours, mass = 200 × 0.9^3 ≈ 200 × 0.729 = 145.8 g.</span>"
      ]
    }
  },
  "step3": {
    "title": "Growth/Decay Multiplier Understanding",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The growth or decay multiplier converts percentage changes into a decimal multiplier used in exponential equations. For growth, add the percentage increase to 100%. For decay, subtract the percentage decrease from 100%.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>5% growth multiplier = 1 + 0.05 = 1.05.</span>",
        "<span>12% decay multiplier = 1 - 0.12 = 0.88.</span>"
      ]
    }
  },
  "step4": {
    "title": "Interpreting and Drawing Exponential Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Exponential growth graphs curve upwards steeply, showing increasing growth. Exponential decay graphs curve downwards, approaching zero but never quite reaching it.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">When saving money with compound interest, your bank balance grows slowly at first but increases faster as interest compounds over time, shown by a rising curve.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot points for 2% growth per month: multiplier = 1.02.</span>",
        "<span>Calculate balance after 0, 1, 2, 3 months starting with £100: £100, £102, £104.04, £106.12.</span>",
        "<span>Draw smooth curve through points showing growth.</span>"
      ]
    }
  },
  "step5": {
    "title": "Solving for Original Amount and Time Periods",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Using the compound interest formula A = P × (1 + r)^n, we can find the original amount (P) or the number of time periods (n) by rearranging the formula and using logarithms where needed.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Given A = 729, r = 10% = 0.10, n = 3, find P.</span>",
        "<span>Rearrange: P = A / (1 + r)^n = 729 / 1.1^3 = 729 / 1.331 = 547.66.</span>",
        "<span>Given P = 500, r = 5% = 0.05, A = 610.51, find n.</span>",
        "<span>(1 + r)^n = A / P → 1.05^n = 610.51 / 500 = 1.221.</span>",
        "<span>Take logs: n × log(1.05) = log(1.221) → n = log(1.221)/log(1.05) ≈ 4.</span>"
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A sum of £800 is invested in an account paying 6% compound interest per year. How many years will it take for the investment to grow to £1,200? Show all your working clearly.</span>",
      "hint": "Remember to write down the formula and isolate the unknown variable using logarithms.",
      "mustHaveKeywords": ["compound interest formula", "logarithm", "multiplier", "rearranging equation"],
      "optionalKeywords": ["percentage", "years", "principal", "amount"],
      "modelAnswer": "<span>Using the formula A = P × (1 + r)^n where A = 1200, P = 800, r = 0.06:</span><br/><span>1200 = 800 × 1.06^n</span><br/><span>Divide both sides by 800: 1.5 = 1.06^n</span><br/><span>Take logarithms: log(1.5) = n × log(1.06)</span><br/><span>Rearrange for n: n = log(1.5) / log(1.06)</span><br/><span>Calculate: n ≈ 0.1761 / 0.0253 ≈ 6.96 years.</span><br/><span>Therefore, it takes about 7 years for the investment to grow to £1,200.</span>",
      "scaffoldPrompts": [
        "Write down the compound interest formula with the known values.",
        "Divide both sides to isolate the exponential expression.",
        "Apply logarithms to both sides to solve for n.",
        "Calculate the logarithms and divide to find n approximately."
      ]
    }
  }
};