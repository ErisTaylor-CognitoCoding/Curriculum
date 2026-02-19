window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.5.4.1.2 - Speed",
  "strapline": "Understanding distance, displacement, and speed, and applying calculations in real-world contexts.",
  "learningObjectives": [
    "Students should distinguish between distance as the total length of a path travelled and displacement as the straight-line distance from start to finish in a specific direction, understanding that displacement is a vector quantity whilst distance is scalar (Physics 6.5.4.1.2)",
    "Students should explore speed as a measure of how fast an object is moving, learning to calculate speed using the equation speed = distance ÷ time and working with appropriate units such as metres per second (m/s) or kilometres per hour (km/h) (Physics 6.5.4.1.2)",
    "Students should apply these concepts to practical scenarios, interpreting distance-time graphs and solving numerical problems involving speed calculations (Physics 6.5.4.1.2)"
  ],
  "keyFormulas": [
    "Speed = distance ÷ time",
    "Distance is scalar; displacement is vector",
    "Speed units: m/s or km/h"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='10' y='10' width='380' height='280' fill='#f9f9f9' stroke='#333' />  <line x1='50' y1='250' x2='350' y2='50' stroke='#0077cc' stroke-width='3' marker-end='url(#arrowhead)' />  <circle cx='50' cy='250' r='6' fill='#ee3333' />  <circle cx='350' cy='50' r='6' fill='#33bb33' />  <text x='30' y='270' font-family='sans-serif' font-size='14' fill='#ee3333'>Start (S)</text>  <text x='350' y='40' font-family='sans-serif' font-size='14' fill='#33bb33'>Finish (F)</text>  <text x='190' y='140' font-family='sans-serif' font-size='14' fill='#000'>Displacement (straight line)</text>  <path d='M50 250 q50 -70 100 -100 q100 -40 80 -20' fill='none' stroke='#cc7700' stroke-width='2' />  <text x='80' y='220' font-family='sans-serif' font-size='14' fill='#cc7700'>Distance (path travelled)</text>  <defs>    <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'>      <polygon points='0 0, 10 3.5, 0 7' fill='#0077cc' />    </marker>  </defs></svg>",
  "step1": {
    "title": "Concept: What is Distance?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Distance is the total length of the path that an object travels. It is a <strong>scalar</strong> quantity, meaning it only has magnitude (size) but no direction. Distance is usually measured in metres (m) or kilometres (km).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine walking around a park along winding paths. The total number of steps you take is like the distance — it counts every part of your path, no matter which way you go.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Distance Travelled",
      "problem": "A person walks 50 metres east, then 30 metres north. Calculate the total distance travelled.",
      "questions": [
        {
          "id": "q1",
          "prompt": "How far did the person walk first?",
          "answer": "50",
          "feedback": "Correct. They walked 50 metres east first."
        },
        {
          "id": "q2",
          "prompt": "How far did the person walk second?",
          "answer": "30",
          "feedback": "Correct. They walked 30 metres north second."
        },
        {
          "id": "q3",
          "prompt": "What is the total distance travelled?",
          "answer": "80",
          "feedback": "That's right! Total distance is 50 + 30 = 80 metres."
        }
      ]
    }
  },
  "step2": {
    "title": "Concept: What is Displacement?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Displacement is the straight-line distance from the start point to the end point in a specific direction. It is a <strong>vector</strong> quantity, which means it has both magnitude and direction. Displacement can be zero even if a large distance is travelled, if the object ends up back where it started.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you walk in a circle and finish where you started, your displacement is zero because your final position is the same as your start.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Displacement",
      "problem": "Using the earlier walk of 50 m east then 30 m north, calculate the displacement.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the horizontal distance travelled?",
          "answer": "50",
          "feedback": "Correct, the horizontal (east) distance is 50 metres."
        },
        {
          "id": "q2",
          "prompt": "What is the vertical distance travelled?",
          "answer": "30",
          "feedback": "Correct, the vertical (north) distance is 30 metres."
        },
        {
          "id": "q3",
          "prompt": "Using Pythagoras' theorem, calculate the displacement (straight-line distance): √(50² + 30²) = ?",
          "answer": "58.31",
          "feedback": "Correct to 2 decimal places, the displacement is approximately 58.31 metres."
        }
      ]
    }
  },
  "step3": {
    "title": "Introduction to Speed",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Speed measures how fast an object is moving. It is a scalar quantity calculated by dividing the distance travelled by the time taken: <strong>speed = distance ÷ time</strong>. Speed is commonly expressed in metres per second (m/s) or kilometres per hour (km/h).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you travel 100 km in 2 hours, your speed is how far you went each hour on average — 50 km/h.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Calculating Speed",
      "problem": "A car travels 150 kilometres in 3 hours. Calculate its speed in km/h.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the distance travelled?",
          "answer": "150",
          "feedback": "Correct, distance is 150 km."
        },
        {
          "id": "q2",
          "prompt": "What is the time taken?",
          "answer": "3",
          "feedback": "Correct, time is 3 hours."
        },
        {
          "id": "q3",
          "prompt": "Calculate speed = distance ÷ time = 150 ÷ 3 = ?",
          "answer": "50",
          "feedback": "Correct, speed is 50 km/h."
        }
      ]
    }
  },
  "step4": {
    "title": "Converting Units of Speed",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Sometimes you need to convert speed between metres per second (m/s) and kilometres per hour (km/h). To convert from m/s to km/h, multiply by 3.6. To convert from km/h to m/s, divide by 3.6.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Think of it like converting between miles and kilometres, just for speed units per time.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Convert 20 m/s to km/h",
      "problem": "Convert a speed of 20 metres per second into kilometres per hour.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Multiply 20 m/s by what number to convert to km/h?",
          "answer": "3.6",
          "feedback": "Correct, multiply by 3.6."
        },
        {
          "id": "q2",
          "prompt": "Calculate 20 × 3.6 = ?",
          "answer": "72",
          "feedback": "Correct, the speed is 72 km/h."
        }
      ]
    }
  },
  "step5": {
    "title": "Interpreting Distance-Time Graphs",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Distance-time graphs show how distance changes over time. The gradient (steepness) of the line on the graph represents speed — a steeper line means greater speed. A flat horizontal line means the object is stationary.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'>  <rect x='40' y='20' width='320' height='240' fill='#fff8dc' stroke='#333' />  <line x1='60' y1='240' x2='340' y2='60' stroke='#0077cc' stroke-width='3' />  <line x1='60' y1='240' x2='340' y2='240' stroke='#333' stroke-width='1' />  <line x1='60' y1='240' x2='60' y2='20' stroke='#333' stroke-width='1' />  <text x='50' y='255' font-family='sans-serif' font-size='14'>0</text>  <text x='190' y='260' font-family='sans-serif' font-size='14'>Time (s)</text>  <text x='10' y='160' font-family='sans-serif' font-size='14' transform='rotate(-90 10,160)'>Distance (m)</text>  <text x='300' y='50' font-family='sans-serif' font-size='14' fill='#0077cc'>Constant speed</text></svg>",
    "workedExample": {
      "title": "Worked Example: Calculating Speed from a Graph",
      "problem": "Using a distance-time graph, the distance changes from 0 m to 120 m in 30 seconds. Calculate the speed.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the change in distance (final - initial)?",
          "answer": "120",
          "feedback": "Correct, the object travelled 120 metres."
        },
        {
          "id": "q2",
          "prompt": "What is the time taken?",
          "answer": "30",
          "feedback": "Correct, time taken is 30 seconds."
        },
        {
          "id": "q3",
          "prompt": "Calculate speed = distance ÷ time = 120 ÷ 30 = ?",
          "answer": "4",
          "feedback": "Correct, the speed is 4 m/s."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A cyclist travels 12 km north, then 5 km south. The total time taken is 1 hour. Calculate:</span><ol><li>The total distance travelled.</li><li>The displacement with direction.</li><li>The average speed of the cyclist in km/h.</li></ol>",
      "hint": "Remember:<ul><li>Distance is total length of path, so add all parts travelled.</li><li>Displacement uses straight-line distance and direction. Use subtraction since some motion is in opposite directions.</li><li>Speed = distance ÷ time.</li></ul>",
      "mustHaveKeywords": ["distance", "displacement", "speed", "direction", "time", "km/h"],
      "optionalKeywords": ["vector", "scalar", "magnitude"],
      "modelAnswer": "<span>The total distance is 12 km + 5 km = 17 km.<br/>The displacement is 12 km north − 5 km south = 7 km north.<br/>The average speed is total distance ÷ time = 17 km ÷ 1 hour = 17 km/h.</span>",
      "scaffoldPrompts": ["Step 1: Add distances for total distance.", "Step 2: Calculate displacement by subtracting distances with directions.", "Step 3: Use the total distance and time to find speed."]
    }
  }
};