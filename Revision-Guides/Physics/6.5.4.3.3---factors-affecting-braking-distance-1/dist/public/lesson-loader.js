window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.3.3 - Factors affecting braking distance 1",
  "strapline": "Understanding how speed, vehicle mass, and road/brake conditions influence the braking distance of vehicles.",
  "learningObjectives": [
    "Students should be able to explain how speed affects braking distance (Physics 6.5.4.3.3)",
    "Students should be able to explain how mass of a vehicle affects braking distance (Physics 6.5.4.3.3)",
    "Students should be able to explain how road conditions and brake/tyre condition affect braking distance (Physics 6.5.4.3.3)"
  ],
  "keyFormulas": [
    "Kinetic Energy (KE) = ½ × mass (m) × speed² (v²)",
    "Braking distance is proportional to kinetic energy",
    "Friction force affects braking force: greater friction → shorter braking distance"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>\
  <rect x='10' y='150' width='380' height='30' fill='#cce5ff' stroke='#004085' stroke-width='2'/>\
  <rect x='50' y='120' width='80' height='30' fill='#007bff' stroke='#004085' stroke-width='2'/>\
  <text x='90' y='105' font-family='sans-serif' font-size='14' fill='#004085' text-anchor='middle'>Vehicle</text>\
  <line x1='130' y1='135' x2='200' y2='135' stroke='#004085' stroke-width='3' marker-end='url(#arrow)'/>\
  <text x='165' y='125' font-family='sans-serif' font-size='14' fill='#004085'>Braking Distance</text>\
  <defs><marker id='arrow' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>\
    <polygon points='0 0, 10 3.5, 0 7' fill='#004085' />\
  </marker></defs></svg>",
  "step1": {
    "title": "Concept: What is Braking Distance?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Braking distance is the distance a vehicle travels from the moment the brakes are applied until it comes to a complete stop. It is distinct from thinking distance, which is the distance travelled during the driver's reaction time.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine trying to stop a rolling ball on a slope: once you decide to stop it, it takes some distance to slow down and stop completely — this is like braking distance.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Understanding Braking Distance",
      "problem": "Let's explore how braking distance changes with speed. We will calculate braking distance for different speeds assuming friction and mass stay constant.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Input the initial speed of the vehicle in m/s (e.g., 10).",
          "answer": "10",
          "feedback": "Good! You chose speed = 10 m/s."
        },
        {
          "id": "q2",
          "prompt": "Now input the speed doubled (e.g., 20) and observe what happens.",
          "answer": "20",
          "feedback": "Correct. Doubling speed has a big effect on braking distance."
        },
        {
          "id": "q3",
          "prompt": "Based on KE = ½mv², if speed doubles, how does the kinetic energy compare?",
          "answer": "4",
          "feedback": "Excellent! Kinetic energy increases by the square of speed, so quadruples."
        }
      ]
    }
  },
  "step2": {
    "title": "Speed and Braking Distance: Interactive",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Because kinetic energy increases with the square of speed, braking distance increases significantly as speed increases. This means stopping from 40 mph takes much longer than from 20 mph.</p>",
    "workedExample": {
      "title": "Calculate Kinetic Energy Change",
      "problem": "Calculate the ratio of kinetic energy of a vehicle when speed increases from 15 m/s to 30 m/s, assuming vehicle mass = 1000 kg.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate KE at 15 m/s (use KE = 0.5 × m × v²).",
          "answer": "112500",
          "feedback": "Correct! KE = 0.5 × 1000 × 15² = 112,500 J"
        },
        {
          "id": "q2",
          "prompt": "Calculate KE at 30 m/s.",
          "answer": "450000",
          "feedback": "Correct! KE = 0.5 × 1000 × 30² = 450,000 J"
        },
        {
          "id": "q3",
          "prompt": "What is the ratio of KE at 30 m/s to KE at 15 m/s?",
          "answer": "4",
          "feedback": "Correct! 450,000 / 112,500 = 4 times more energy."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept: Effect of Mass on Braking Distance",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">A vehicle's kinetic energy also depends on its mass. Increasing mass increases the kinetic energy linearly, meaning heavier vehicles require more work done by brakes to stop and so have longer braking distances.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Pushing an empty shopping cart is easier and it stops sooner than a full shopping cart because the full cart has more mass and momentum.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Mass Influence on KE",
      "problem": "Calculate the kinetic energy for a vehicle at 20 m/s with masses 800 kg and 1600 kg to see the effect.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Calculate KE for 800 kg vehicle.",
          "answer": "160000",
          "feedback": "Correct! KE = 0.5 × 800 × 20² = 160,000 J"
        },
        {
          "id": "q2",
          "prompt": "Calculate KE for 1600 kg vehicle.",
          "answer": "320000",
          "feedback": "Great! KE doubles to 320,000 J with double the mass."
        }
      ]
    }
  },
  "step4": {
    "title": "Concept: Friction and Braking Distance",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Friction between tyres and road surface provides the braking force that slows the vehicle. When friction is reduced, such as on wet or icy roads, or when tyres/brakes are worn, braking force is less effective, increasing braking distances.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Like trying to stop on a slick ice rink versus dry pavement; less friction means longer stopping distances.</p>"
    },
    "diagramHtml": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'>\
      <rect x='50' y='70' width='200' height='40' fill='#a1d99b' />\
      <rect x='50' y='110' width='200' height='10' fill='#6b4f4f' />\
      <circle cx='90' cy='110' r='15' fill='#5a5a5a' />\
      <circle cx='210' cy='110' r='15' fill='#5a5a5a' />\
      <text x='150' y='50' font-family='sans-serif' font-size='14' fill='#344d41' text-anchor='middle'>Tyres on Road Surface</text>\
      <text x='150' y='140' font-family='sans-serif' font-size='12' fill='#000' text-anchor='middle'><tspan>Friction enables braking</tspan></text>\
    </svg>"
  },
  "step5": {
    "title": "Interactive Check: Effects of Road and Brake Conditions",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Explore how wet roads or worn tyres reduce friction and increase braking distance, even if speed and mass remain unchanged.</p>",
    "workedExample": {
      "title": "Example: How Friction Affects Braking",
      "problem": "If friction force halves due to wet road conditions, how does the braking distance change?",
      "questions": [
        {
          "id": "q1",
          "prompt": "If friction force halves, does braking distance (a) halve, (b) double, or (c) stay the same?",
          "answer": "b",
          "feedback": "Correct! Because braking force halves, braking distance roughly doubles."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain how speed, mass, and road/tyre conditions affect the braking distance of a vehicle.</span>",
      "hint": "Remember to include kinetic energy and friction forces in your explanation.",
      "mustHaveKeywords": ["kinetic energy", "speed squared", "mass", "friction", "wet/icy roads", "worn tyres", "braking force", "increased braking distance"],
      "optionalKeywords": ["reaction time", "thinking distance"],
      "modelAnswer": "<span>The braking distance of a vehicle is affected by its speed, mass, and road or tyre conditions. As speed increases, the kinetic energy increases with the square of speed (KE = ½mv²), meaning brakes must do more work and the braking distance increases significantly. Increasing the mass of the vehicle increases the kinetic energy linearly, so heavier vehicles take longer to stop. Road conditions affect the friction between tyres and road; wet, icy roads or worn tyres reduce friction, decreasing braking force and increasing braking distances. Therefore, higher speed, greater mass, and poor road or vehicle conditions all increase braking distance.</span>",
      "scaffoldPrompts": [
        "Start by defining kinetic energy and its formula",
        "Explain how speed affects kinetic energy and thus braking distance",
        "Discuss the effect of increasing mass on kinetic energy",
        "Describe how friction impacts braking force",
        "Explain how wet or icy roads reduce friction and increase stopping distance",
        "Conclude by linking these factors to why braking distances change"
      ]
    }
  }
};