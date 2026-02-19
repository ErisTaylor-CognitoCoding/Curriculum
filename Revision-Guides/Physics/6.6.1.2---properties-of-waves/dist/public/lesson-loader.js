window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.6.1.2 - Properties of waves",
  "strapline": "Explore the nature of transverse and longitudinal waves, the wave equation, and how to represent and calculate wave properties.",
  "learningObjectives": [
    "Students should be able to describe the difference between transverse and longitudinal waves, understanding that in transverse waves oscillations are perpendicular to the direction of energy transfer, while in longitudinal waves oscillations are parallel to the direction of energy transfer (Physics 6.6.1.2)",
    "Students should be able to define and apply the wave equation (wave speed = frequency × wavelength) to calculate wave properties including amplitude, wavelength, frequency and wave speed (Physics 6.6.1.2)",
    "Students should be able to measure and represent wave properties using diagrams and graphs (Physics 6.6.1.2)"
  ],
  "keyFormulas": [
    "Wave speed (v) = frequency (f) × wavelength (λ)",
    "Amplitude (A) = maximum displacement from rest position",
    "Reminder: Ensure consistent units when calculating wave properties"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>  <text x='200' y='20' font-family='Arial' font-size='14' fill='#333' text-anchor='middle'><strong>Transverse Wave Illustration</strong></text>  <path d='M 50 150 Q 75 100 100 150 T 150 150 T 200 150 T 250 150' fill='none' stroke='#0074D9' stroke-width='3'/>  <line x1='50' y1='150' x2='300' y2='150' stroke='#333' stroke-dasharray='4'/>  <text x='305' y='150' font-family='Arial' font-size='12' fill='#333' dominant-baseline='middle'>Direction of energy transfer</text>  <line x1='50' y1='150' x2='50' y2='100' stroke='#FF4136' stroke-width='3'/>  <text x='30' y='125' font-family='Arial' font-size='12' fill='#FF4136'>Oscillation (perpendicular)</text>  <text x='200' y='180' font-family='Arial' font-size='12' fill='#333' text-anchor='middle'>Wavelength (λ)</text>  <line x1='50' y1='150' x2='150' y2='150' stroke='#2ECC40' stroke-width='2' marker-end='url(#arrow)'/>  <defs>    <marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto' markerUnits='strokeWidth'>      <path d='M0,0 L0,6 L9,3 z' fill='#2ECC40' />    </marker>  </defs></svg>",
  "step1": {
    "title": "Concept: Transverse and Longitudinal Waves",
    "explanation": "<p><strong>Transverse waves</strong> oscillate <em>perpendicular</em> to the direction of energy transfer. <strong>Longitudinal waves</strong> oscillate <em>parallel</em> to the direction of energy transfer.</p><p>Examples include electromagnetic waves and water waves (transverse), and sound waves (longitudinal).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p>Imagine a crowd doing 'the wave' in a stadium. If people stand up and sit down moving up and down while the wave moves around the stadium, this is like a transverse wave—movement is at right angles to the wave direction.</p><p>If instead people in a queue all shift forwards and backwards along the line, that’s like a longitudinal wave with oscillations along the wave direction.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Identifying Wave Types",
      "problem": "Identify whether the following waves are transverse or longitudinal based on the description.",
      "questions": [
        {
          "id": "q1",
          "prompt": "A wave on a stretched string where points move up and down while the wave moves horizontally. Is it transverse or longitudinal?",
          "answer": "transverse",
          "feedback": "Correct! Oscillations are perpendicular to the wave direction."
        },
        {
          "id": "q2",
          "prompt": "Sound waves travel by compressing and expanding air in the same direction as the wave moves. What type is this?",
          "answer": "longitudinal",
          "feedback": "Correct. Oscillations are parallel to the wave direction."
        }
      ]
    }
  },
  "step2": {
    "title": "Understanding Amplitude",
    "explanation": "<p>The <strong>amplitude</strong> of a wave is the maximum displacement of a point on the wave from its rest (equilibrium) position. Larger amplitude means the wave carries more energy.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p>Think of ocean waves — bigger waves have taller crests and carry more energy, just like higher amplitude in waves.</p>"
    },
    "workedExample": {
      "title": "Worked Example: Measuring Amplitude from a Diagram",
      "problem": "Look at a wave diagram where the distance from the rest position to the crest is 0.03 m. What is the amplitude?",
      "questions": [
        {
          "id": "q1",
          "prompt": "Identify the distance from rest to crest (amplitude) in metres:",
          "answer": "0.03",
          "feedback": "Correct! This is the amplitude."
        }
      ]
    }
  },
  "step3": {
    "title": "The Wave Equation: v = f × λ",
    "explanation": "<p>The wave equation relates wave speed <strong>v</strong> (in m/s), frequency <strong>f</strong> (in Hz), and wavelength <strong>λ</strong> (in m):</p><p><strong>v = f × λ</strong></p><p>You can rearrange this formula to find any one quantity if you know the other two.</p>",
    "workedExample": {
      "title": "Worked Example: Calculating Wave Speed",
      "problem": "Calculate the wave speed for a wave with frequency 500 Hz and wavelength 0.6 m.",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the frequency (in Hz)?",
          "answer": "500",
          "feedback": "Correct. Frequency is 500 Hz."
        },
        {
          "id": "q2",
          "prompt": "What is the wavelength (in metres)?",
          "answer": "0.6",
          "feedback": "Correct. Wavelength is 0.6 m."
        },
        {
          "id": "q3",
          "prompt": "Calculate the wave speed v = f × λ:",
          "answer": "300",
          "feedback": "Correct! 500 × 0.6 = 300 m/s."
        }
      ]
    }
  },
  "step4": {
    "title": "Measuring Wavelength and Frequency from Graphs",
    "explanation": "<p>Wavelength is the distance between two corresponding points on consecutive waves (e.g., crest to crest). Frequency is how many waves pass a point each second.</p><p>By measuring the time period (T) on a time-based wave graph, frequency can be found as <strong>f = 1/T</strong>.</p>",
    "workedExample": {
      "title": "Worked Example: Finding Frequency from a Time Graph",
      "problem": "A wave repeats every 0.02 seconds. What is the frequency?",
      "questions": [
        {
          "id": "q1",
          "prompt": "What is the time period (T) in seconds?",
          "answer": "0.02",
          "feedback": "Correct. Period is 0.02 seconds."
        },
        {
          "id": "q2",
          "prompt": "Calculate frequency f = 1/T:",
          "answer": "50",
          "feedback": "Correct! Frequency is 50 Hz."
        }
      ]
    }
  },
  "step5": {
    "title": "Diagram Representation of Wave Properties",
    "explanation": "<p>Wave diagrams help visualize key properties such as wavelength, amplitude, and oscillation direction.</p><p>Use the diagram below to identify these properties:</p>",
    "diagramHtml": "<svg viewBox='0 0 400 240' xmlns='http://www.w3.org/2000/svg'>  <text x='200' y='20' font-family='Arial' font-size='14' fill='#222' text-anchor='middle'><strong>Wave Properties Diagram</strong></text>  <path d='M 40 140 Q 60 90 80 140 T 120 140 T160 140 T 200 140' fill='none' stroke='#0074D9' stroke-width='3'/>  <line x1='40' y1='140' x2='200' y2='140' stroke='#555' stroke-dasharray='4'/>  <line x1='40' y1='140' x2='40' y2='100' stroke='#FF4136' stroke-width='3'/>  <text x='30' y='120' font-family='Arial' font-size='12' fill='#FF4136' dominant-baseline='middle'>Amplitude</text>  <line x1='40' y1='140' x2='120' y2='140' stroke='#2ECC40' stroke-width='2' marker-end='url(#arrow)'/>  <text x='80' y='160' font-family='Arial' font-size='12' fill='#2ECC40' text-anchor='middle'>Wavelength (λ)</text>  <defs>    <marker id='arrow' markerWidth='10' markerHeight='10' refX='0' refY='3' orient='auto' markerUnits='strokeWidth'>      <path d='M0,0 L0,6 L9,3 z' fill='#2ECC40' />    </marker>  </defs></svg>",
    "workedExample": {
      "title": "Worked Example: Identifying Wave Properties on Diagram",
      "problem": "Using the diagram, identify (a) the amplitude and (b) the wavelength.",
      "questions": [
        {
          "id": "q1",
          "prompt": "The amplitude is the vertical distance from the rest line to the crest. What is it called?",
          "answer": "Amplitude",
          "feedback": "Correct! That is the amplitude."
        },
        {
          "id": "q2",
          "prompt": "The wavelength is the horizontal distance between two crests. What is this distance labelled as?",
          "answer": "Wavelength",
          "feedback": "Correct! It is the wavelength (λ)."
        }
      ]
    }
  },
  "step6": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Explain the differences between transverse and longitudinal waves, including the direction of oscillations relative to energy transfer. Also, use the wave equation to calculate the speed of a wave with frequency 250 Hz and wavelength 1.2 m.</span>",
      "hint": "Remember to describe oscillation directions clearly and show calculations step-by-step using v = f × λ.",
      "mustHaveKeywords": ["transverse", "longitudinal", "perpendicular", "parallel", "wave equation", "frequency", "wavelength", "wave speed"],
      "optionalKeywords": ["energy transfer", "Hz", "metres", "v = f × λ"],
      "modelAnswer": "<span>Transverse waves have oscillations perpendicular to the direction of energy transfer, for example waves on a string or electromagnetic waves. Longitudinal waves have oscillations parallel to the direction of energy transfer, such as sound waves, consisting of compressions and rarefactions. Given frequency f = 250 Hz and wavelength λ = 1.2 m, the wave speed is calculated using the wave equation v = f × λ = 250 × 1.2 = 300 m/s.</span>",
      "scaffoldPrompts": ["Describe the oscillation direction in transverse waves.", "Describe the oscillation direction in longitudinal waves.", "Write down the wave equation.", "Substitute values into the wave equation.", "Calculate the wave speed."]
    }
  }
};