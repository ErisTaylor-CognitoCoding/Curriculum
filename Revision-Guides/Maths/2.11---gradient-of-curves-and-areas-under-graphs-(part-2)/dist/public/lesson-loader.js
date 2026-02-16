window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.11 - Gradient of curves and areas under graphs (Part 2)",
  "strapline": "Understanding how to find gradients at points on curves using tangents and calculate areas under graphs using counting squares or the trapezium rule.",
  "learningObjectives": [
    "Students should be able to find gradients of curves at specific points by drawing tangents (Maths 2.11)",
    "Students should be able to calculate areas under graphs by counting squares or using the trapezium rule (Maths 2.11)",
    "Students should be able to link gradient and area concepts to rates of change and total quantities (Maths 2.11)"
  ],
  "keyFormulas": [
    "Gradient = rise/run",
    "Area using trapezium rule = \\( \\frac{h}{2}(a + b) \\) where \\(h\\) is the width, \\(a\\) and \\(b\\) are parallel side lengths",
    "Total area = sum of trapezia areas or counting squares under curve"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='320' height='220' fill='#f9f9f9' stroke='#333' /><polyline fill='none' stroke='#0074d9' stroke-width='2' points='50,200 100,150 150,120 200,70 250,90 300,130 350,160' /><line x1='200' y1='70' x2='275' y2='135' stroke='#ff4136' stroke-width='2' stroke-dasharray='5,5' /><text x='200' y='60' font-family='sans-serif' font-size='14' fill='#ff4136' text-anchor='middle'>Tangent Line</text><text x='200' y='270' font-family='sans-serif' font-size='15' fill='#333' text-anchor='middle'>Curve and Tangent Example</text></svg>",
  "step1": {
    "title": "Concept: Gradient of a Curve at a Point",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>gradient</strong> at a point on a curve is found by drawing a <em>tangent line</em> that just touches the curve at that point. We calculate the gradient of this tangent line using <strong>rise over run</strong>.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine riding a bike up and down hills. The steepness of the hill at any moment is like the gradient of the curve – it shows how fast you're going uphill or downhill right there.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Finding Gradient by Drawing a Tangent",
      "problem": "Find the gradient of the curve at a given point by drawing a tangent and calculating rise/run.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Draw a tangent line touching the curve at the point (200, 70). What is the vertical change (rise) between two points on the tangent?",
          "answer": "65",
          "feedback": "Correct. The rise from y=70 to y=135 is 65."
        },
        {
          "id": "q2",
          "prompt": "What is the horizontal change (run) between those two points on the tangent?",
          "answer": "75",
          "feedback": "Correct. The run from x=200 to x=275 is 75."
        },
        {
          "id": "q3",
          "prompt": "Calculate the gradient using rise/run = 65/75 (decimal rounded to 2 d.p.)",
          "answer": "0.87",
          "feedback": "Well done! The gradient is approximately 0.87."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Tangent Line Definition",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>tangent line</strong> is a straight line that touches a curve at exactly <em>one point</em>, showing the instantaneous rate of change (gradient) at that point.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of a tangent line like a tightrope touching the side of a mountain at just one spot without crossing into it.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Recognising a Tangent Line",
      "problem": "Which of the following lines touching a curve could be a tangent line?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Does the line that touches a curve at two points count as a tangent?",
          "answer": "No",
          "feedback": "Correct. A tangent touches at exactly one point."
        },
        {
          "id": "q2",
          "prompt": "Does the line crossing through the curve count as a tangent?",
          "answer": "No",
          "feedback": "Right, a tangent only touches; it does not cross."
        },
        {
          "id": "q3",
          "prompt": "Is a line touching the curve smoothly at exactly one point a tangent?",
          "answer": "Yes",
          "feedback": "Exactly. That's the definition of a tangent."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Area Under a Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>area under a graph</strong> is the space between the curve (or line) and the x-axis. This area can represent total quantities, such as distance travelled or total cost.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine the graph shows speed over time. The area under the speed curve tells you the total distance travelled.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Estimating Area by Counting Squares",
      "problem": "Estimate the area under a graph by counting full and partial squares.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Count the number of full squares fully under the curve.",
          "answer": "12",
          "feedback": "Good. Counting full squares accurately is the first step."
        },
        {
          "id": "q2",
          "prompt": "Estimate how many partial squares under the curve make up area approximately.",
          "answer": "5",
          "feedback": "Correct. Partial squares can collectively be summed up."
        },
        {
          "id": "q3",
          "prompt": "Calculate the total estimated area by adding full and partial squares.",
          "answer": "17",
          "feedback": "Correct. Total area is approximately 17 square units."
        }
      ]
    }
  },
  "step4": {
    "title": "Method: Trapezium Rule for Area",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>trapezium rule</strong> estimates the area under a graph by splitting it into trapezia (trapezoids), calculating each area, then summing them.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Area Using the Trapezium Rule",
      "problem": "Use the trapezium rule to estimate the area under the curve between x = 1 and x = 4 with y-values: y(1)=2, y(2)=3, y(3)=5, y(4)=4.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate the area of the first trapezium between x=1 and x=2 using \\( \\frac{1}{2} (2 + 3) \\times 1 \\). What is this area?",
          "answer": "2.5",
          "feedback": "Correct. Area of first trapezium is 2.5."
        },
        {
          "id": "q2",
          "prompt": "Calculate the area of the second trapezium between x=2 and x=3 using \\( \\frac{1}{2} (3 + 5) \\times 1 \\). What is this area?",
          "answer": "4",
          "feedback": "Right. Area of second trapezium is 4."
        },
        {
          "id": "q3",
          "prompt": "Calculate the area of the third trapezium between x=3 and x=4 using \\( \\frac{1}{2} (5 + 4) \\times 1 \\). What is the area?",
          "answer": "4.5",
          "feedback": "Correct. Area of third trapezium is 4.5."
        },
        {
          "id": "q4",
          "prompt": "Sum all trapezium areas to find the total estimated area.",
          "answer": "11",
          "feedback": "Great! The total estimated area is 11 square units."
        }
      ]
    }
  },
  "step5": {
    "title": "Connecting Gradient and Area to Real World Rates and Quantities",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>gradient</strong> of a graph can represent a <em>rate of change</em> (like speed), while the <strong>area under the graph</strong> can represent the <em>total quantity</em> accumulated (like distance).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If a graph shows speed over time, the gradient shows how speed changes at a moment, and the area shows distance travelled so far.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Interpreting Gradient and Area",
      "problem": "Given a graph of velocity against time, identify what the gradient and area represent.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What does the gradient of the velocity-time graph represent?",
          "answer": "Acceleration",
          "feedback": "Correct. Gradient shows acceleration (rate of change of velocity)."
        },
        {
          "id": "q2",
          "prompt": "What does the area under the velocity-time graph represent?",
          "answer": "Distance travelled",
          "feedback": "Right! The area corresponds to total distance travelled."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A curve is drawn on a set of axes showing quantity against time. Explain how you would find the gradient at a particular point and calculate the total quantity over a time interval using areas under the curve.</span>",
      "hint": "Remember to describe how to draw a tangent for gradient and how to estimate area using counting or trapezium rule.",
      "mustHaveKeywords": ["tangent", "rise over run", "counting squares", "trapezium rule", "rate of change", "total quantity"],
      "optionalKeywords": ["instantaneous", "estimate", "accumulated"],
      "modelAnswer": "<span>To find the gradient at a point on the curve, draw a tangent line that just touches the curve at that point. Then calculate the gradient of this tangent using rise over run (vertical change divided by horizontal change). To calculate total quantity over a time interval, find the area under the curve between the relevant times by counting squares or applying the trapezium rule to estimate the area. The gradient represents the instantaneous rate of change at a point, while the area under the graph gives the accumulated total quantity over time.</span>",
      "scaffoldPrompts": ["How do you draw a tangent and calculate its gradient?", "What methods can you use to find the area under a curve?", "How do gradient and area relate to rates and totals?"]
    }
  }
};