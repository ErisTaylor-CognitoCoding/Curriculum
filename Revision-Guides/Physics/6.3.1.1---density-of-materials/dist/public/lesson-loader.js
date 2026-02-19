window.lessonContent = {
  "subject": "Physics",
  "specCode": "",
  "topicTitle": "6.3.1.1 - Density of materials",
  "strapline": "Understanding how to calculate density and how it affects whether materials sink or float.",
  "learningObjectives": [
    "Students should be able to use the equation density = mass / volume to calculate the density of materials (Physics 6.3.1.1)",
    "Students should understand that different materials have different densities which affects whether they sink or float (Physics 6.3.1.1)"
  ],
  "keyFormulas": [
    "Density (ρ) = Mass (m) / Volume (V)",
    "Water density = 1000 kg/m³ or 1 g/cm³ (reference for floating or sinking)",
    "Reminder: Ensure mass and volume units are compatible before calculation"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='70' y='100' width='260' height='80' fill='#cfe3f0' stroke='#333' stroke-width='2'/><text x='200' y='95' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#333'>Object Volume (V)</text><circle cx='200' cy='140' r='30' fill='#6baed6' stroke='#0b3d91' stroke-width='3'/><text x='200' y='145' font-family='sans-serif' font-size='14' text-anchor='middle' fill='white'>Mass (m)</text><text x='200' y='210' font-family='sans-serif' font-size='18' text-anchor='middle' fill='#333'>Density = m / V</text></svg>",
  "step1": {
    "title": "Concept 1: What is Density?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Density is a measure of how much mass is contained in a given volume. It tells us how tightly packed the particles in a material are. Density is usually measured in kilograms per cubic metre (kg/m³) or grams per cubic centimetre (g/cm³).</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine a box filled with balls. If the box is tightly packed with many balls, it has a high density. If there are only a few balls spread out, it has a low density.</p>"
    }
  },
  "step2": {
    "title": "Concept 2: Calculating Density Using the Formula",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The formula for density is <strong>Density (ρ) = Mass (m) / Volume (V)</strong>. You can calculate the density if you know an object's mass and how much space it takes up (its volume).</p>",
    "workedExample": {
      "title": "Worked Example: Calculate the density of a block",
      "problem": "A block has a mass and volume. Let's find its density step-by-step.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the mass of the block in kilograms (kg):",
          "answer": null,
          "feedback": "Check that your mass value makes sense; it should be a positive number."
        },
        {
          "id": "q2",
          "prompt": "Enter the volume of the block in cubic metres (m³):",
          "answer": null,
          "feedback": "Volume must be a positive value and in cubic metres to match units."
        },
        {
          "id": "q3",
          "prompt": "Calculate the density using the formula Density = Mass / Volume. What is the density in kg/m³?",
          "answer": null,
          "feedback": "Density is mass divided by volume. Try to divide your previous answers."
        }
      ]
    }
  },
  "step3": {
    "title": "Concept 3: Understanding Floating and Sinking",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Whether an object floats or sinks in water depends on its density compared to water's density. Water has a density of about 1000 kg/m³ (or 1 g/cm³). Objects less dense than water float; objects denser than water sink.</p>",
    "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='150' width='300' height='100' fill='#9ed0ff' stroke='#0055cc' stroke-width='2'/><rect x='150' y='120' width='100' height='30' fill='#f0a202' stroke='#d17003' stroke-width='2'/><text x='200' y='115' font-family='sans-serif' font-size='14' text-anchor='middle' fill='#333'>Object</text><text x='200' y='270' font-family='sans-serif' font-size='16' text-anchor='middle' fill='#004080'>Water</text><text x='200' y='280' font-family='sans-serif' font-size='12' text-anchor='middle' fill='#004080'>Density = 1000 kg/m³</text><line x1='200' y1='150' x2='200' y2='120' stroke='#7f0000' stroke-width='3' marker-end='url(#arrowhead)'/><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='0' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#7f0000'/></marker></defs></svg>"
  },
  "step4": {
    "title": "Interactive Example: Will it Float or Sink?",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Let's test if an object will float or sink by comparing its density to water.</p>",
    "workedExample": {
      "title": "Try it Yourself",
      "problem": "You have a material. Calculate density from mass and volume, then decide if it sinks or floats.",
      "questions": [
        {
          "id": "q1",
          "prompt": "Enter the mass of the object in kilograms (kg):",
          "answer": null,
          "feedback": "Make sure your mass is a positive number."
        },
        {
          "id": "q2",
          "prompt": "Enter the volume of the object in cubic metres (m³):",
          "answer": null,
          "feedback": "Volume should be positive and in cubic metres."
        },
        {
          "id": "q3",
          "prompt": "Calculate the density = mass / volume (kg/m³):",
          "answer": null,
          "feedback": "Divide mass by volume to get density."
        },
        {
          "id": "q4",
          "prompt": "Based on your density, will the object float or sink in water? Choose one:",
          "answer": null,
          "options": [
            { "value": "float", "label": "Float", "feedback": "Correct if density < 1000 kg/m³." },
            { "value": "sink", "label": "Sink", "feedback": "Correct if density > 1000 kg/m³." }
          ]
        }
      ]
    }
  },
  "step5": {
    "title": "Knowledge Check: Multiple Choice Questions",
    "mcqs": [
      {
        "id": "mcq-1",
        "question": "<span>What units can density be expressed in?</span>",
        "options": [
          { "id": "a", "label": "<span>kg/m³ and g/cm³</span>", "isCorrect": true, "explanation": "Correct. Both are standard units for density." },
          { "id": "b", "label": "<span>kg and m³</span>", "isCorrect": false, "explanation": "Incorrect. These are units of mass and volume, not density." },
          { "id": "c", "label": "<span>m/s²</span>", "isCorrect": false, "explanation": "Wrong. This unit measures acceleration, not density." }
        ]
      },
      {
        "id": "mcq-2",
        "question": "<span>If an object's density is lower than water, what happens when placed in water?</span>",
        "options": [
          { "id": "a", "label": "<span>It sinks</span>", "isCorrect": false, "explanation": "Wrong. It will float if density is less than water." },
          { "id": "b", "label": "<span>It floats</span>", "isCorrect": true, "explanation": "Correct. Objects less dense than water float." },
          { "id": "c", "label": "<span>It dissolves</span>", "isCorrect": false, "explanation": "Incorrect. Density doesn't determine dissolving." }
        ]
      }
    ]
  },
  "step6": {
    "title": "Key Terms: Fill in the Blanks",
    "cloze": [
      {
        "id": "cloze-1",
        "sentence": "<span><strong>Density</strong> is the measure of how much <span class=\"font-semibold\">_____</span> is contained in a given <span class=\"font-semibold\">_____</span>.</span>",
        "blanks": [
          {
            "id": "b1",
            "options": [
              { "value": "mass", "label": "mass", "isCorrect": true, "feedback": "Correct! Density relates to mass and volume." },
              { "value": "volume", "label": "volume", "isCorrect": false, "feedback": "Incorrect, mass is the correct term here." },
              { "value": "distance", "label": "distance", "isCorrect": false, "feedback": "No, distance is not related to density here." }
            ]
          },
          {
            "id": "b2",
            "options": [
              { "value": "temperature", "label": "temperature", "isCorrect": false, "feedback": "No, density depends on volume, not temperature here." },
              { "value": "volume", "label": "volume", "isCorrect": true, "feedback": "Correct! It's mass per volume." },
              { "value": "weight", "label": "weight", "isCorrect": false, "feedback": "Weight is related to mass but not volume here." }
            ]
          }
        ]
      }
    ]
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>A student measures the mass of a metal block as 2.5 kg and its volume as 0.002 m³. Explain how to calculate the density of the block and determine whether it will sink or float when placed in water.</span>",
      "hint": "Remember to use the formula density = mass / volume. Compare your result to the density of water (1000 kg/m³).",
      "mustHaveKeywords": ["density", "mass", "volume", "density = mass / volume", "sink", "float", "1000 kg/m³"],
      "optionalKeywords": ["particles", "relative density", "water"],
      "modelAnswer": "<span>First, calculate the density using the formula density = mass / volume. So, density = 2.5 kg / 0.002 m³ = 1250 kg/m³. Since 1250 kg/m³ is greater than water's density (1000 kg/m³), the block is denser than water and will sink.</span>",
      "scaffoldPrompts": ["Calculate the density by dividing mass by volume.", "Compare the calculated density to the density of water.", "Decide if the object sinks or floats based on this comparison."]
    }
  }
};