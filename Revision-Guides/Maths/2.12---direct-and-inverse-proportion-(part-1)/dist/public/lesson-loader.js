window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "2.12 - Direct and inverse proportion (Part 1)",
  "strapline": "Understanding direct proportion, the constant of proportionality, and solving related problems.",
  "learningObjectives": [
    "Students should understand direct proportion where y = kx and identify proportional relationships from graphs, tables and contexts (Maths 2.12)",
    "Students should be able to find constants of proportionality in direct proportion situations (Maths 2.12)",
    "Students should be able to solve real-world problems involving direct proportion (Maths 2.12)"
  ],
  "step1": {
    "title": "Concept: What is Direct Proportion?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Direct proportion is a relationship between two variables where one increases at a constant rate as the other increases. When y is directly proportional to x, it means y = kx, where k is the constant of proportionality. If you double x, y doubles; if you triple x, y triples.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine filling bottles with water. The total amount of water (y) is directly proportional to the number of bottles (x) because each bottle holds the same amount (k). So if you have 2 bottles, you have twice as much water as 1 bottle.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If 1 bottle holds 3 litres, find water for 4 bottles.</span>",
        "<span>Use y = kx, here k = 3 litres (per bottle), x = 4 bottles.</span>",
        "<span>Calculate y = 3 × 4 = 12 litres.</span>"
      ]
    }
  },
  "step2": {
    "title": "Knowledge Check: MCQ",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>Which equation shows direct proportion between y and x?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>y = 3x</span>",
            "isCorrect": true,
            "explanation": "Correct, y changes in direct proportion to x with constant of proportionality k = 3."
          },
          {
            "id": "b",
            "label": "<span>y = 3 + x</span>",
            "isCorrect": false,
            "explanation": "Incorrect, this is not in the form y = kx because of the +3 term."
          }
        ]
      }
    ]
  },
  "step3": {
    "title": "Key Terminology: Fill in Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span>The <span class=\"font-semibold\">_____</span> is the fixed multiplier in a direct proportion relationship and represents the ratio y/x.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "constant_of_proportionality",
                "label": "constant of proportionality",
                "isCorrect": true,
                "feedback": "Correct! The constant of proportionality is the fixed multiplier k."
              },
              {
                "value": "dependent_variable",
                "label": "dependent variable",
                "isCorrect": false,
                "feedback": "Try again. The dependent variable is y, not the multiplier."
              }
            ]
          }
        ]
      }
    ]
  },
  "step4": {
    "title": "Concept: Finding the Constant of Proportionality",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The constant of proportionality k can be found by dividing y by x for any pair of values in direct proportion. Since k is constant, y/x remains the same for all pairs.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If y = 12 when x = 4, k = y ÷ x = 12 ÷ 4 = 3.</span>",
        "<span>This means y = 3x is the direct proportion rule.</span>"
      ]
    }
  },
  "step5": {
    "title": "Concept: Proportional Relationship Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The graph of y against x in direct proportion is a straight line through the origin (0,0). The gradient of this line equals the constant of proportionality k.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It’s like a ramp starting at zero height (origin). The steepness (gradient) shows how quickly y increases compared to x.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot points x = 1, y = 3 and x = 2, y = 6.</span>",
        "<span>Draw the line through (0,0), (1,3), (2,6) showing y = 3x.</span>"
      ]
    }
  },
  "step6": {
    "title": "Applying Knowledge: Solve a Real-World Problem",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Use your understanding of direct proportion to find unknown values and solve problems in context.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>A car travels 150 km in 3 hours. How far will it travel in 5 hours at the same speed?</span>",
        "<span>Step 1: Find constant of proportionality (speed) k = distance ÷ time = 150 ÷ 3 = 50 km/h.</span>",
        "<span>Step 2: Use y = kx with x = 5 hours to find distance y = 50 × 5 = 250 km.</span>"
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A recipe uses 4 eggs to make 8 pancakes. How many eggs are needed to make 20 pancakes? Explain your method using direct proportion.</span>",
      "hint": "Remember to find the constant of proportionality first, then use it to find the unknown quantity.",
      "mustHaveKeywords": ["direct proportion", "constant of proportionality", "egg", "pancake", "ratio", "multiply"],
      "optionalKeywords": ["scaling up", "rule y = kx", "proportional relationship"],
      "modelAnswer": "<span>The number of eggs and pancakes are directly proportional. First find the constant k = eggs ÷ pancakes = 4 ÷ 8 = 0.5 eggs per pancake. Then multiply by 20 pancakes: eggs = 0.5 × 20 = 10 eggs.</span>",
      "scaffoldPrompts": [
        "Identify what is directly proportional to what.",
        "Calculate the constant of proportionality (eggs per pancake).",
        "Use the constant to calculate eggs needed for 20 pancakes."
      ]
    }
  }
};