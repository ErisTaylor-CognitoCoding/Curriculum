window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "5.2 - Venn diagrams (probability notation) (Part 1)",
  "strapline": "Introduction to Venn diagrams and formal probability notation for two events",
  "learningObjectives": [
    "Students should interpret and construct Venn diagrams with two events to represent probability situations (Maths 5.2)",
    "Students should use formal probability notation including P(A), P(B), P(A \u222a B) for union, and P(A \u2229 B) for intersection (Maths 5.2)",
    "Students should identify and label regions in Venn diagrams that represent different combinations of events (Maths 5.2)"
  ],
  "step1": {
    "title": "Concept: Understanding Venn Diagrams",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A <strong>Venn diagram</strong> uses two overlapping circles to visually represent two events and their relationships. Each circle represents one event, and the overlapping section represents outcomes where both events happen. Other sections show where only one or neither event occurs.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine two groups of friends who like different sports: one group likes football and the other likes basketball. The overlapping part of the circles shows friends who like both football and basketball.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw two circles that overlap, label one as Event A and the other as Event B.</span>",
        "<span>The area covered by circle A shows all outcomes where Event A happens, similarly for circle B.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept: Introducing Probability Notation P(A) and P(B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The probability that Event A occurs is written as <strong>P(A)</strong>. Similarly, the probability that Event B occurs is <strong>P(B)</strong>. These notations help us describe events formally when working with chances and Venn diagrams.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If Event A is drawing a red card from a deck, then P(A) is the chance of picking any red card.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>If there are 10 cards and 4 are red, then P(A) = 4/10.</span>",
        "<span>Label the circle A with this probability or just understand what P(A) represents.</span>"
      ]
    }
  },
  "step3": {
    "title": "Concept: Understanding Union P(A \u222a B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>P(A \u222a B)</strong> is the probability that Event A or Event B or both happen. The symbol <strong>\u222a</strong> means 'union,' combining all outcomes in either Event A or Event B or where they overlap.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is students who like pizza and B is students who like burgers, then P(A \u222a B) is the chance a student likes pizza or burgers or both.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>On the Venn diagram, shade all regions inside circle A, circle B, and their overlap.</span>",
        "<span>This shaded area represents P(A \u222a B).</span>"
      ]
    }
  },
  "step4": {
    "title": "Concept: Understanding Intersection P(A \u2229 B)",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\"><strong>P(A \u2229 B)</strong> is the probability that both Event A and Event B happen at the same time. The symbol <strong>\u2229</strong> means 'intersection,' which is the overlapping part of the two circles on the Venn diagram.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If A is people who like chocolate ice cream and B is people who like vanilla, P(A \u2229 B) is the chance a person likes both chocolate and vanilla ice cream.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Identify the overlapping area between circles A and B on a Venn diagram.</span>",
        "<span>This overlap corresponds to P(A \u2229 B).</span>"
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What does the notation <strong>P(A \u222a B)</strong> represent?</span>",
        "options": [
          {
            "id": "a",
            "label": "<span>The probability that Event A or Event B or both occur</span>",
            "isCorrect": true,
            "explanation": "<span>Correct! This is the definition of union: <em>A or B or both</em>.</span>"
          },
          {
            "id": "b",
            "label": "<span>The probability that both Event A and Event B occur</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. This describes the intersection, written as P(A \u2229 B).</span>"
          },
          {
            "id": "c",
            "label": "<span>The probability of neither Event A nor Event B occurring</span>",
            "isCorrect": false,
            "explanation": "<span>Incorrect. This is the complement of the union, not the union itself.</span>"
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
        "sentence": "<span>The symbol <strong class=\"font-semibold\">\u2229</strong> in probability notation means <strong class=\"font-semibold\">_____</strong>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              {
                "value": "intersection",
                "label": "Intersection",
                "isCorrect": true,
                "feedback": "<span>Correct! \u2229 means intersection - where both events happen.</span>"
              },
              {
                "value": "union",
                "label": "Union",
                "isCorrect": false,
                "feedback": "<span>Try again. \u222a is union, not \u2229.</span>"
              },
              {
                "value": "complement",
                "label": "Complement",
                "isCorrect": false,
                "feedback": "<span>Incorrect. Complement is not related to \u2229.</span>"
              }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Identifying and labeling Venn diagram regions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Each part of a two-event Venn diagram can be labeled:<ul><li>The part only in circle A represents outcomes where only Event A occurs.</li><li>The part only in circle B represents outcomes where only Event B occurs.</li><li>The overlapped area represents outcomes where both Event A and Event B occur.</li><li>The area outside both circles represents neither events occurring.</li></ul></p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Draw two overlapping circles labeled A and B.</span>",
        "<span>Label the non-overlapping part of circle A as 'Only A.'</span>",
        "<span>Label the non-overlapping part of circle B as 'Only B.'</span>",
        "<span>Label the overlapping area as 'A \u2229 B.'</span>",
        "<span>The remaining area outside both circles is 'Neither.'</span>"
      ]
    }
  },
  "step8": {
    "title": "Practice: Label regions on Venn diagram",
    "practice": {
      "prompt": "<span>Identify and label the regions in a Venn diagram with events A and B that correspond to P(A), P(B), and P(A \u222a B).</span>",
      "hint": "Remember P(A) includes 'Only A' and 'A \u2229 B'; similarly for P(B). P(A \u222a B) includes all parts of A and B including overlap.",
      "mustHaveKeywords": ["Only A", "Only B", "A \u2229 B", "A \u222a B"],
      "optionalKeywords": ["Neither", "outside circles", "overlap"],
      "modelAnswer": "<span>P(A) is the area inside circle A (Only A + A \u2229 B), P(B) is inside circle B (Only B + A \u2229 B), and P(A \u222a B) is the entire area covered by both circles (Only A + Only B + A \u2229 B).</span>",
      "scaffoldPrompts": ["Start by labeling the two circles as A and B", "Mark the overlapping region as A \u2229 B", "Identify which parts belong only to A or only to B", "Combine regions to explain P(A), P(B), and P(A \u222a B)"]
    }
  },
  "step9": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how to use a Venn diagram with two events to find the probability notation P(A), P(B), and P(A \u222a B).</span>",
      "hint": "Remember to identify and label the different regions in the Venn diagram and then describe what each probability notation represents.",
      "mustHaveKeywords": ["Venn diagram", "circle A", "circle B", "overlap", "union", "P(A)", "P(B)", "P(A \u222a B)"],
      "optionalKeywords": ["intersection", "probability notation", "regions", "only A", "only B"],
      "modelAnswer": "<span>To find P(A), look at all outcomes inside circle A including the overlap. Similarly, P(B) is all outcomes inside circle B including the overlap. P(A \u222a B) includes all outcomes that are in circle A or circle B or both — that is, the union of circles A and B. Label the Venn diagram with 'Only A', 'Only B', and the overlapping section as 'A \u2229 B' to clearly show these areas.</span>",
      "scaffoldPrompts": [
        "Draw two overlapping circles labeled A and B",
        "Label the regions: only A, only B, overlap",
        "Explain how P(A) includes both only A and the overlap",
        "Then explain P(B) covers only B and the overlap",
        "Finally describe P(A \u222a B) as all areas in A or B combined"
      ]
    }
  }
};