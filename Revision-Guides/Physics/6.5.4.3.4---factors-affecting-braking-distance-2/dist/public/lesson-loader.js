window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.3.4 - Factors affecting braking distance 2",
  "strapline": "Explore how vehicle speed, mass, road surface, and brake/tyre condition determine braking distances and influence road safety.",
  "learningObjectives": [
    "Students should be able to explain how the speed of a vehicle affects the braking distance (Physics 6.5.4.3.4)",
    "Students should be able to describe how vehicle mass, road conditions, and brake/tyre condition affect braking distance (Physics 6.5.4.3.4)",
    "Students should be able to apply understanding of braking distance factors to real-world driving scenarios and road safety considerations (Physics 6.5.4.3.4)"
  ],
  "keyFormulas": [
    "Braking distance increases as the square of speed: KE = ½mv²",
    "Frictional force (braking force) = μ × Normal force",
    "Work done by brakes = Change in kinetic energy"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='150' width='360' height='20' fill='#555'/><rect x='50' y='120' width='60' height='30' rx='5' ry='5' fill='#0074D9' stroke='#003366' stroke-width='2'/><text x='80' y='145' font-family='sans-serif' font-size='14' fill='white' text-anchor='middle'>Car</text><line x1='80' y1='120' x2='80' y2='40' stroke='#FF4136' stroke-width='3' marker-end='url(#arrow)'/><text x='90' y='50' font-family='sans-serif' font-size='14' fill='#FF4136'>Applying brakes</text><line x1='50' y1='170' x2='350' y2='170' stroke='#2ECC40' stroke-width='8' opacity='0.5'/><text x='200' y='195' font-family='sans-serif' font-size='16' fill='#2ECC40' text-anchor='middle'>Braking distance</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto'><path d='M0,0 L0,6 L9,3 z' fill='#FF4136' /></marker></defs></svg>",
  "step1": {
    "title": "Concept: What is Braking Distance?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Braking distance is the distance a vehicle travels from the moment the brakes are applied until it comes to a complete stop. It does not include thinking distance. This distance changes based on physical factors like speed, mass, and road surface.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine riding a bike downhill and suddenly needing to stop. If you are going faster, you will travel further after applying the brakes before stopping, similar to a car's braking distance increasing with speed.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Braking Distance",
      "problem": "A car moving at 20 m/s applies brakes to stop. Let's explore how the speed affects braking distance.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the speed of the car in m/s.",
          "answer": "20",
          "feedback": "Correct. The speed is 20 m/s."
        },
        {
          "id": "q2",
          "prompt": "If the speed doubles to 40 m/s, how does the kinetic energy change?",
          "answer": "quadruples",
          "feedback": "Correct. Since kinetic energy is proportional to speed squared, doubling speed quadruples KE."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: Kinetic Energy and Braking Distance",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The kinetic energy (KE) of a moving vehicle is given by <em>KE = ½mv²</em>. This energy must be converted to zero by the brakes doing work. Because KE depends on velocity squared, speed has a huge impact on braking distance.</p>",
    "workedExample": {
      "title": "Worked Example: Calculate Change in KE",
      "problem": "Calculate the kinetic energy of a 1000 kg vehicle at 15 m/s and then at 30 m/s.",
      "questions": [
        {
          "id": "q3",
          "prompt": "Input the mass of the vehicle (kg).",
          "answer": "1000",
          "feedback": "Correct. Mass = 1000 kg."
        },
        {
          "id": "q4",
          "prompt": "Input the first speed (m/s).",
          "answer": "15",
          "feedback": "Correct. Speed = 15 m/s."
        },
        {
          "id": "q5",
          "prompt": "Calculate kinetic energy at 15 m/s (KE = 0.5 × m × v²).",
          "answer": "112500",
          "feedback": "Correct. KE = 0.5 × 1000 × 15² = 112,500 J."
        },
        {
          "id": "q6",
          "prompt": "Input the second speed (m/s).",
          "answer": "30",
          "feedback": "Correct. Speed = 30 m/s."
        },
        {
          "id": "q7",
          "prompt": "Calculate kinetic energy at 30 m/s.",
          "answer": "450000",
          "feedback": "Correct. KE = 0.5 × 1000 × 30² = 450,000 J, which is 4 times 112,500 J."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Friction and Braking Force",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Braking force depends on the friction between the vehicle’s tyres and the road. This friction can be reduced by wet, icy, or oily road surfaces, and by worn tyres or brakes. Less friction means longer braking distance.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">It's like trying to stop sliding on ice versus on dry ground: less friction from the icy surface makes stopping much harder and longer.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Effect of Road Conditions",
      "problem": "Compare braking distances on dry and wet roads assuming friction coefficient drops from 0.7 to 0.3.",
      "questions": [
        {
          "id": "q8",
          "prompt": "Input dry road friction coefficient (μ).",
          "answer": "0.7",
          "feedback": "Correct. Dry road μ = 0.7."
        },
        {
          "id": "q9",
          "prompt": "Input wet road friction coefficient (μ).",
          "answer": "0.3",
          "feedback": "Correct. Wet road μ = 0.3."
        },
        {
          "id": "q10",
          "prompt": "Which surface will have a longer braking distance?",
          "answer": "wet road",
          "feedback": "Correct. Lower friction on wet roads increases braking distance."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Vehicle Mass and Braking Distance",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Heavier vehicles have more kinetic energy at the same speed because mass increases kinetic energy. This means brakes must do more work and usually braking distance increases. However, friction force also increases with mass, making this relationship complex.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Pushing a heavy shopping cart requires more effort and longer distance to stop compared to a light basket moving at the same speed.</p>"
    }
  },
  "step5": {
    "title": "Concept: Brake and Tyre Condition",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Good brake condition ensures brakes can apply strong forces quickly. Worn brakes reduce braking force. Similarly, tyres with good tread grip the road better, increasing friction. Worn or bald tyres reduce friction and lengthen braking distance.</p>",
    "workedExample": {
      "title": "Worked Example: Brake Efficiency Impact",
      "problem": "Consider a car with worn brakes that reduce braking force by 20%. How does this affect braking distance?",
      "questions": [
        {
          "id": "q11",
          "prompt": "If braking force is reduced by 20%, what fraction of the force remains?",
          "answer": "0.8",
          "feedback": "Correct. 80% of original force remains."
        },
        {
          "id": "q12",
          "prompt": "Does braking distance increase or decrease with reduced braking force?",
          "answer": "increase",
          "feedback": "Correct. Less force means longer braking distance."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how speed, vehicle mass, road conditions, and brake/tyre condition affect the braking distance of a vehicle. Use your knowledge of kinetic energy and friction to support your answer.</span>",
      "hint": "Remember to mention kinetic energy formula, effect of velocity squared, friction, and real-life implications for road safety.",
      "mustHaveKeywords": ["kinetic energy", "velocity squared", "friction", "braking distance", "road conditions", "vehicle mass"],
      "optionalKeywords": ["brake condition", "tyre condition", "safety"],
      "modelAnswer": "<span>Braking distance depends largely on the vehicle’s kinetic energy, which equals ½mv². Because kinetic energy increases with the square of speed, doubling speed quadruples braking distance. Heavier vehicles have more kinetic energy at the same speed, requiring a longer distance to stop. The friction force between tyres and the road surface is crucial; wet or icy roads reduce friction, increasing braking distance. Additionally, worn brakes or tyres reduce the braking force available, again lengthening stopping distances. Understanding these factors helps drivers adjust speed and maintain their vehicles to increase road safety.</span>",
      "scaffoldPrompts": ["Start by defining kinetic energy and its relation to speed.", "Explain how mass affects kinetic energy.", "Discuss the role of friction between tyres and road.", "Include how road and brake/tyre conditions modify friction and braking force."]
    }
  }
};