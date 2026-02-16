window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.11 - Gradient of curves and areas under graphs (Part 1)",
  "strapline": "Learn how to find the gradient at specific points on a curve using tangents and understand what these gradients tell us about rates of change.",
  "learningObjectives": [
    "Students should be able to find gradients of curves at specific points by drawing tangents (Maths 2.11)",
    "Students should understand that gradients of curves represent rates of change at particular points (Maths 2.11)",
    ""
  ],
  "keyFormulas": [
    "Gradient formula: gradient = rise ÷ run",
    "Equation of tangent line: y = mx + c where m is the gradient at the point",
    "Reminder: Gradient on a curve varies from point to point"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='300' height='200' fill='#f0f0f0' stroke='#333' /><path d='M 60 240 Q 150 80 340 220' fill='none' stroke='blue' stroke-width='3'/><line x1='140' y1='160' x2='190' y2='110' stroke='red' stroke-width='2'/><circle cx='140' cy='160' r='4' fill='red'/><text x='200' y='110' font-family='sans-serif' font-size='12' fill='red'>Tangent Line</text><text x='130' y='180' font-family='sans-serif' font-size='12' fill='blue'>Curve</text><text x='140' y='170' font-family='sans-serif' font-size='12' fill='black'>Point P</text></svg>",
  "step1": {
    "title": "Introducing the Gradient of a Curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>gradient of a curve</strong> tells us how steep the curve is at a particular point. Unlike straight lines which have a constant gradient, a curve's steepness changes along its length.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine riding a bike up and down hills. The gradient tells you how steep the hill is at exactly where you are, and it changes as you move along the path.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Gradient",
      "problem": "Imagine a curve on a graph. At point P on the curve, we want to find the gradient by drawing a tangent. Answer the following:",
      "questions": [
        {
          "id": "we1-q1",
          "prompt": "What does the gradient at a point on the curve represent?",
          "answer": "Steepness or rate of change",
          "feedback": "Correct. The gradient represents how steep the curve is or how quickly y changes with x at that point."
        },
        {
          "id": "we1-q2",
          "prompt": "Is the gradient constant along a curve?",
          "answer": "No",
          "feedback": "Correct. The gradient changes at different points along a curve."
        }
      ]
    }
  },
  "step2": {
    "title": "What is a Tangent to a Curve?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>tangent</strong> is a straight line that just touches a curve at exactly one point. This line represents the gradient of the curve at that point.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If the curve is a mountain path, the tangent is the direction of the path exactly where you stand — it just touches the path there without crossing it.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Drawing a Tangent",
      "problem": "At point P on a curve, draw a tangent line. Then identify the points needed to find the gradient.",
      "questions": [
        {
          "id": "we2-q1",
          "prompt": "What is the key property of the tangent line at point P?",
          "answer": "Touches curve at exactly one point",
          "feedback": "Correct. The tangent meets the curve at only point P without crossing it there."
        },
        {
          "id": "we2-q2",
          "prompt": "Why do we draw a tangent to find the gradient at point P?",
          "answer": "Because the tangent's gradient equals the curve's gradient at P",
          "feedback": "Correct. The gradient of the tangent line represents the instantaneous gradient of the curve at that point."
        }
      ]
    }
  },
  "step3": {
    "title": "Finding Gradient by Drawing a Tangent",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the gradient at a point on a curve, draw the tangent line there, then choose two points on this tangent. Use these points to calculate gradient = rise ÷ run.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Tangent Gradient",
      "problem": "You have drawn a tangent at point P. Two points on the tangent are (4, 5) and (7, 11). Calculate the gradient step-by-step.",
      "questions": [
        {
          "id": "we3-q1",
          "prompt": "What is the vertical change (rise) between the two points?",
          "answer": "6",
          "feedback": "Correct. 11 - 5 = 6."
        },
        {
          "id": "we3-q2",
          "prompt": "What is the horizontal change (run) between the two points?",
          "answer": "3",
          "feedback": "Correct. 7 - 4 = 3."
        },
        {
          "id": "we3-q3",
          "prompt": "Calculate the gradient using rise ÷ run.",
          "answer": "2",
          "feedback": "Correct. Gradient = 6 ÷ 3 = 2."
        }
      ]
    }
  },
  "step4": {
    "title": "Understanding Rate of Change from Gradient",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>gradient</strong> at any point on a curve shows the <em>rate of change</em> of one variable with respect to another. For example, how fast y changes as x changes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If y represents distance and x represents time, the gradient at a point on the distance-time graph tells you the speed at that exact moment.</p>"
    }
  },
  "step5": {
    "title": "Practice: Find Gradient from Tangent Coordinates",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use the coordinates of two points on a tangent to calculate the gradient at the tangent point.</p>",
    "workedExample": {
      "title": "Practice Question",
      "problem": "A tangent to a curve at point Q passes through points (2,3) and (5,9). Calculate the gradient of the curve at Q.",
      "questions": [
        {
          "id": "we5-q1",
          "prompt": "What is the rise between (2,3) and (5,9)?",
          "answer": "6",
          "feedback": "Correct. 9 - 3 = 6."
        },
        {
          "id": "we5-q2",
          "prompt": "What is the run between (2,3) and (5,9)?",
          "answer": "3",
          "feedback": "Correct. 5 - 2 = 3."
        },
        {
          "id": "we5-q3",
          "prompt": "What is the gradient at point Q?",
          "answer": "2",
          "feedback": "Correct. Gradient = 6 ÷ 3 = 2."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to find the gradient of a curve at a specific point by drawing a tangent line and calculating its gradient.</span>",
      "hint": "Remember to mention drawing the tangent carefully and calculating rise over run.",
      "mustHaveKeywords": ["tangent", "gradient", "rise", "run", "rate of change"],
      "optionalKeywords": ["instantaneous", "point of contact"],
      "modelAnswer": "<span>To find the gradient of a curve at a specific point, first draw a tangent line that touches the curve at that point only. Then select two points on this tangent line, record their coordinates, and calculate the gradient by dividing the vertical change (rise) by the horizontal change (run). This gradient represents the rate of change or steepness of the curve at that single point.</span>",
      "scaffoldPrompts": ["Start by explaining what a tangent line is", "Then describe how to calculate gradient from two points on the tangent", "Finally connect the gradient to rate of change on the curve"]
    }
  }
};