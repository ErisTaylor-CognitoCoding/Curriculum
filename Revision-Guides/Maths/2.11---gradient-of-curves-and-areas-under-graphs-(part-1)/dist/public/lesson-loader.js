window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.11 - Gradient of curves and areas under graphs (Part 1)",
  "strapline": "Understanding gradients of curves by drawing tangents and interpreting rates of change.",
  "learningObjectives": [
    "Students should be able to find gradients of curves at specific points by drawing tangents (Maths 2.11)",
    "Students should understand that gradients of curves represent rates of change at particular points (Maths 2.11)"
  ],
  "step1": {
    "title": "Concept: Gradient of a curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>gradient of a curve</strong> at a specific point measures how steep the curve is there. Unlike straight lines, where the gradient is constant everywhere, the gradient of a curve changes from point to point because the curve bends.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of riding a bike up and down hills. At some spots the hill is very steep (high gradient), and at others it is gentle or flat (low or zero gradient). Similarly, the steepness of a curve changes at different points.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Look at the curve y = x<sup>2</sup>.</span>",
        "<span>At x = 1, the curve is not a straight line but we want to find how steep it is.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Tangent to a curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>tangent</strong> to a curve at a given point is a straight line that just touches the curve at that point but does not cut through it. It gives the best straight-line approximation of the curve near that point and is used to find the gradient there.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine touching a soap bubble gently with a pencil without piercing it – the pencil just touches at one point. That pencil line is like a tangent to a curve.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw the curve y = x<sup>2</sup>.</span>",
        "<span>At x = 1, draw a straight line touching the curve at this point only.</span>",
        "<span>This line is the tangent and its gradient gives the gradient of the curve at x = 1.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Rate of change",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The <strong>rate of change</strong> shows how quickly one quantity changes relative to another. For curves, the gradient at a point represents the rate of change of the dependent variable with respect to the independent variable at that point.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of driving a car where the speedometer tells you how fast your position is changing over time. Similarly, the gradient of a curve at a point tells you how fast the y-value is changing as x changes.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>On the curve y = x<sup>2</sup>, rate of change means how fast y changes as x changes.</span>",
        "<span>If the gradient at x = 1 is 2, then y is increasing twice as fast as x at that point.</span>"
      ]
    }
  },
  "step4": {
    "title": "Skill: Drawing a tangent to find a gradient",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">To find the gradient of a curve at a point, draw a tangent line carefully using a ruler so it just touches the curve without crossing it. Then calculate the gradient of that tangent line by finding the 'rise over run' between two points on the tangent.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Pick a point on a curve, for example where x=2.</span>",
        "<span>Draw the tangent line at that point carefully.</span>",
        "<span>Choose two points on this tangent line, then calculate gradient = (change in y) / (change in x).</span>"
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the gradient of a tangent to a curve at a point represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The rate at which the curve crosses the x-axis</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect - the gradient relates to steepness, not x-axis crossings.</span>"
          },
          {
            "id": "b",
            "label": "<span>The rate of change of the curve's y-value with respect to x at that point</span>",
            "isCorrect": true,
            "explanation": "<span>Correct – the gradient is the instantaneous rate of change at that point.</span>"
          },
          {
            "id": "c",
            "label": "<span>The total area under the curve</span>",
            "isCorrect": false,
            "explanation": "<span>No – area under the curve is a different concept.</span>"
          }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>A <span class=\"font-semibold\">_____</span> is a straight line touching a curve at exactly one point, used to find the <span class=\"font-semibold\">_____</span> of the curve at that point.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "tangent",
                "label": "tangent",
                "isCorrect": true,
                "feedback": "<span>Correct! The tangent touches the curve at one point.</span>"
              },
              {
                "value": "chord",
                "label": "chord",
                "isCorrect": false,
                "feedback": "<span>Try again - a chord intersects a curve in two points.</span>"
              }
            ]
          },
          {
            "id": "b2",
            "options": [
              {
                "value": "gradient",
                "label": "gradient",
                "isCorrect": true,
                "feedback": "<span>Correct! The tangent gradient is the curve's gradient at that point.</span>"
              },
              {
                "value": "area",
                "label": "area",
                "isCorrect": false,
                "feedback": "<span>Incorrect, area is not found using the tangent.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to find the gradient of the curve y = x<sup>2</sup> at the point where x = 3 by drawing a tangent.</span>",
      "hint": "<span>Remember to first draw the curve and then the tangent, and use rise over run to calculate the gradient.</span>",
      "mustHaveKeywords": [
        "tangent",
        "rise over run",
        "gradient",
        "curve",
        "specific point"
      ],
      "optionalKeywords": [
        "instantaneous rate of change",
        "draw carefully"
      ],
      "modelAnswer": "<span>First, draw the graph of y = x<sup>2</sup>. At the point where x = 3, carefully draw a tangent line to the curve touching it only at (3, 9). Next, choose two points on the tangent line and calculate the gradient by finding the change in y divided by the change in x (rise over run). This gradient value is the gradient of the curve at x = 3, representing its steepness or rate of change at that point.</span>",
      "scaffoldPrompts": [
        "<span>What is the coordinate point on the curve for x = 3?</span>",
        "<span>How do you draw a tangent line at that point?</span>",
        "<span>Which two points on the tangent will you use to calculate gradient?</span>",
        "<span>What formula do you use to find the gradient from these two points?</span>"
      ]
    }
  }
};