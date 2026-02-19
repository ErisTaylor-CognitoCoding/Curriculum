window.lessonContent = {
  "subject": "Maths",
  "specCode": "",
  "topicTitle": "2.11 - Gradient of curves and areas under graphs",
  "strapline": "Explore sketching reciprocal and exponential graphs, calculating gradients of curves using tangents, and estimating areas under curves using counting methods and the trapezium rule.",
  "learningObjectives": [
    "Students should be able to sketch reciprocal graphs of the form y = a/x and exponential graphs of the form y = k^x, identifying key features including asymptotes and intercepts (Maths 2.11)",
    "Students should understand gradients of curves by drawing tangents at specific points and calculating rates of change (Maths 2.11)",
    "Students should estimate areas under graphs by counting squares or using the trapezium rule to find approximate areas between a curve and the x-axis (Maths 2.11)"
  ],
  "keyFormulas": [
    "Gradient of tangent = (change in y) / (change in x)",
    "Area ≈ sum of trapeziums: \\( \\frac{h}{2} \\times (y_1 + y_2) \\)",
    "Asymptote: Line that a curve approaches but never touches"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <!-- Reciprocal graph y = 2/x -->  <line x1='200' y1='0' x2='200' y2='300' stroke='#999' stroke-dasharray='5,5' />  <line x1='0' y1='150' x2='400' y2='150' stroke='#999' stroke-dasharray='5,5' />  <path d='M350 50 Q300 90 250 140 Q210 190 190 220 Q160 250 100 290' fill='none' stroke='#b33' stroke-width='2' />  <path d='M50 250 Q95 210 130 170 Q135 150 150 120 Q180 70 180 50' fill='none' stroke='#b33' stroke-width='2' />  <text x='210' y='15' font-family='sans-serif' font-size='12' fill='#666'>y-axis (asymptote)</text>  <text x='370' y='145' font-family='sans-serif' font-size='12' fill='#666'>x-axis (asymptote)</text>  <text x='320' y='70' font-family='sans-serif' font-size='14' fill='#b33' font-weight='bold'>y = 2/x</text></svg>",
  "step1": {
    "title": "Understanding Reciprocal Graphs y = a/x",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>reciprocal graph</strong> y = a/x has two separate branches, each in opposite quadrants (top-right and bottom-left for positive a). These curves never touch the x-axis or y-axis, which act as <em>asymptotes</em>. The curve approaches these lines but never crosses them.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a magnet and metal; the magnet (axes) attracts the curve but never lets it touch.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Sketching y = 2/x",
      "problem": "Let's sketch y = 2/x and identify asymptotes and intercepts.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What are the asymptotes for y = 2/x? Type 'x=__' for vertical and 'y=__' for horizontal.",
          "answer": "x=0,y=0",
          "feedback": "Correct! The axes x=0 and y=0 are asymptotes."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 1 (substitute into y = 2/x).",
          "answer": "2",
          "feedback": "Right, y = 2/1 = 2."
        },
        {
          "id": "q3",
          "prompt": "Calculate y when x = -2.",
          "answer": "-1",
          "feedback": "Good! y = 2 / -2 = -1."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Exponential Graphs y = k^x",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">An <strong>exponential graph</strong> has the form y = k<sup>x</sup>. If k&gt;1, the graph grows rapidly, curving upwards; if 0&lt;k&lt;1, it decays towards zero. The x-axis (y=0) is a horizontal asymptote, and the graph passes through (0,1).</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <line x1='50' y1='250' x2='350' y2='250' stroke='#999' stroke-dasharray='5,5' />  <line x1='50' y1='50' x2='50' y2='250' stroke='#999' stroke-dasharray='5,5' />  <path d='M50 230 Q120 180 200 150 Q280 120 340 80' fill='none' stroke='#257' stroke-width='2' />  <circle cx='50' cy='250' r='4' fill='#257' />  <text x='55' y='255' font-family='sans-serif' font-size='12' fill='#257'>(0,1)</text>  <text x='350' y='60' font-family='sans-serif' font-size='14' fill='#257' font-weight='bold'>y = (1/2)<sup>x</sup></text>  <text x='180' y='270' font-family='sans-serif' font-size='12' fill='#666'>x-axis (asymptote)</text></svg>",
    "workedExample": {
      "title": "Worked Example: Sketching y = 3^x",
      "problem": "Sketch y = 3^x and identify key features.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is y when x = 0?",
          "answer": "1",
          "feedback": "Correct! Any number to the power 0 is 1."
        },
        {
          "id": "q2",
          "prompt": "Calculate y when x = 2.",
          "answer": "9",
          "feedback": "Yes, 3^2 = 9."
        },
        {
          "id": "q3",
          "prompt": "Identify the horizontal asymptote.",
          "answer": "y=0",
          "feedback": "The graph approaches but never touches the x-axis (y=0)."
        }
      ]
    }
  },
  "step3": {
    "title": "Gradient of Curves: Drawing and Calculating Tangents",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>gradient</strong> of a curve at a point is the slope of the tangent line at that point. Unlike straight lines, the gradient changes as you move along the curve. To find the gradient, draw a tangent, then calculate \"rise over run\" from two points on that tangent.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of the curve as a hill, and the tangent as the slope where you stand at a spot; it varies depending on where you stand.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Gradient on y = 1/x at x = 2",
      "problem": "Estimate the gradient of y = 1/x at x = 2 by drawing a tangent and calculating its slope.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate y when x = 2.",
          "answer": "0.5",
          "feedback": "y = 1/2 = 0.5 is correct."
        },
        {
          "id": "q2",
          "prompt": "Assuming tangent intersects near (1.5, 0.7) and (2.5, 0.4), calculate the gradient of the tangent line: gradient = (change in y)/(change in x).",
          "answer": "-0.3",
          "feedback": "Gradient = (0.4 - 0.7) / (2.5 - 1.5) = -0.3 is correct."
        }
      ]
    }
  },
  "step4": {
    "title": "Estimating Area Under Curves: Counting Squares",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">We can estimate areas under a curve by counting full and partial squares on graph paper beneath the curve. Although approximate, this method gives a good estimation especially for irregular shapes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of counting how many floor tiles are covered by a shadow cast by a curved object.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating Area under y = 1/x from x=1 to 3",
      "problem": "Estimate the area under y = 1/x between x=1 and x=3 by counting full and half squares on graph paper divided into units of 1x1.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Count the number of full squares beneath the curve.",
          "answer": "2",
          "feedback": "Good, 2 full squares are covered."
        },
        {
          "id": "q2",
          "prompt": "Count the number of half squares and divide by 2 to add to full squares.",
          "answer": "3",
          "feedback": "Yes, 6 half squares equal 3 full squares. Total area approx 5 sq units."
        }
      ]
    }
  },
  "step5": {
    "title": "Estimating Area Using the Trapezium Rule",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>trapezium rule</strong> estimates area under a curve by dividing the region into trapeziums rather than rectangles. The formula for area of each trapezium is \\( \\frac{h}{2}(y_1 + y_2) \\), where h is the width between x-values and y<sub>1</sub>, y<sub>2</sub> are the corresponding y-values.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <line x1='50' y1='250' x2='350' y2='250' stroke='#999' stroke-dasharray='5,5' />  <line x1='50' y1='50' x2='50' y2='250' stroke='#999' stroke-dasharray='5,5' />  <path id='curve' d='M50 230 Q150 120 250 90 Q350 70 350 60' fill='none' stroke='#227' stroke-width='2' />  <polygon points='50,230 150,120 150,250 50,250' fill='#88c' opacity='0.4' />  <polygon points='150,120 250,90 250,250 150,250' fill='#88c' opacity='0.4' />  <text x='100' y='240' font-family='sans-serif' font-size='12' fill='#555'>Trapezium 1</text>  <text x='200' y='240' font-family='sans-serif' font-size='12' fill='#555'>Trapezium 2</text></svg>",
    "workedExample": {
      "title": "Worked Example: Apply Trapezium Rule to y = x^2 from x=1 to 3 (h=1)",
      "problem": "Given y-values: y(1)=1, y(2)=4, y(3)=9, calculate the area estimate under the curve using trapeziums.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate area of trapezium between x=1 and x=2: \\( \\frac{1}{2} \\times (1 + 4) \\).",
          "answer": "2.5",
          "feedback": "Correct! (1/2)*(1+4) = 2.5"
        },
        {
          "id": "q2",
          "prompt": "Calculate area of trapezium between x=2 and x=3: \\( \\frac{1}{2} \\times (4 + 9) \\).",
          "answer": "6.5",
          "feedback": "Yes! (1/2)*(4+9) = 6.5"
        },
        {
          "id": "q3",
          "prompt": "Add the two areas for total approximate area under the curve.",
          "answer": "9",
          "feedback": "Total area estimate = 2.5 + 6.5 = 9 units²."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A curve is defined by the equation y = 4 / x for x > 0.</span><br/><span>a) Sketch the graph, showing key features such as asymptotes and values at x=1 and x=2.</span><br/><span>b) At the point where x=2, estimate the gradient of the curve by drawing a tangent and calculating its gradient using two points you choose on the tangent.</span><br/><span>c) Estimate the area under the curve from x=1 to x=3 by using the trapezium rule with intervals of length 1.</span>",
      "hint": "<span>Recall the vertical and horizontal asymptotes for reciprocal graphs; use y=4/x to find y-values at given x; for gradient, draw tangent and calculate slope; apply trapezium rule formula with y-values at x=1,2,3.</span>",
      "mustHaveKeywords": ["asymptotes", "gradient", "tangent", "trapezium rule", "area estimation"],
      "optionalKeywords": ["rate of change", "approximation"],
      "modelAnswer": "<span>a) The asymptotes are x=0 and y=0 (axes). The graph has two branches, for x>0 the curve passes through (1,4) and (2,2).</span><br/><span>b) To estimate the gradient at x=2, draw a tangent line at (2,2). Choose two points on this tangent, for example (1.5,2.67) and (2.5,1.60), calculate gradient as (1.60-2.67)/(2.5-1.5) = -1.07.</span><br/><span>c) Applying the trapezium rule: h=1, y1=4 (x=1), y2=2 (x=2), y3=1.33 (x=3)</span><br/><span>Area ≈ (1/2)*(4+2) + (1/2)*(2+1.33) = 3 + 1.665 = 4.665 units² (approx).</span>",
      "scaffoldPrompts": [
        "Step 1: Identify and draw asymptotes and key points from the equation y=4/x.",
        "Step 2: At x=2, sketch a tangent line and choose two clear points on it to find the gradient.",
        "Step 3: Use y-values at x=1, 2, and 3 for trapezium rule calculation."
      ]
    }
  }
};