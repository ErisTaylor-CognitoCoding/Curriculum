window.lessonContent = {
  "subject": "Maths",
  "specCode": "Edexcel- 1MA1",
  "topicTitle": "6.1 - Cumulative frequency graphs (Part 1)",
  "strapline": "Learn to construct and interpret cumulative frequency graphs to analyse grouped data and estimate medians.",
  "learningObjectives": [
    "Students should be able to construct cumulative frequency graphs by plotting cumulative frequency against the upper class boundaries of grouped data (Maths 6.1)",
    "Students should be able to draw smooth cumulative frequency curves from plotted data (Maths 6.1)",
    "Students should be able to use cumulative frequency graphs to find estimates for the median and interpret data values above or below certain thresholds (Maths 6.1)"
  ],
  "keyFormulas": [
    "Cumulative Frequency = Sum of frequencies up to a given class",
    "Median (estimate) = Lower class boundary + \\left( \\frac{\\frac{N}{2} - \\text{CF before median class}}{\\text{Frequency of median class}} \\right) \\times \\text{Class width}",
    "Upper Class Boundary = Upper limit of a class interval + 0.5 (if grouped data uses whole numbers)"
  ],
  "diagramHtml": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='40' width='320' height='200' fill='#f9f9f9' stroke='#333' rx='8' ry='8'/><line x1='70' y1='230' x2='350' y2='230' stroke='#555' stroke-width='2'/><line x1='70' y1='230' x2='70' y2='40' stroke='#555' stroke-width='2'/><polyline fill='none' stroke='#0074D9' stroke-width='3' points='70,210 120,170 170,130 220,90 270,70 320,60 350,55'/><circle cx='70' cy='210' r='4' fill='#0074D9'/><circle cx='120' cy='170' r='4' fill='#0074D9'/><circle cx='170' cy='130' r='4' fill='#0074D9'/><circle cx='220' cy='90' r='4' fill='#0074D9'/><circle cx='270' cy='70' r='4' fill='#0074D9'/><circle cx='320' cy='60' r='4' fill='#0074D9'/><circle cx='350' cy='55' r='4' fill='#0074D9'/><text x='360' y='235' font-family='sans-serif' font-size='14' fill='#333'>Upper Class Boundary</text><text x='30' y='30' font-family='sans-serif' font-size='14' fill='#333'>Cumulative Frequency</text></svg>",
  "step1": {
    "title": "Concept 1: Understanding Cumulative Frequency",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Cumulative frequency is the running total of frequencies as you move through the classes of grouped data. You add the frequency of the current class to the total of all previous classes.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">Imagine you are collecting stickers each day. The cumulative number of stickers is how many you have collected in total up to that day.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Class intervals: 0–10 (frequency 5), 10–20 (frequency 7), 20–30 (frequency 8).</span>",
        "<span>Cumulative frequency after 0–10 is 5.</span>",
        "<span>Cumulative frequency after 10–20 is 5 + 7 = 12.</span>",
        "<span>Cumulative frequency after 20–30 is 12 + 8 = 20.</span>"
      ]
    }
  },
  "step2": {
    "title": "Concept 2: Upper Class Boundaries",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The upper class boundary is the highest value in each class interval. When plotting cumulative frequency graphs, the cumulative frequency is plotted against this upper class boundary.</p>",
    "analogy": {
      "title": "Analogy",
      "content": "<p class=\"text-sm leading-6 text-muted-foreground\">If you think of each class as a section of a bookshelf, the upper class boundary is the right edge of each section where you mark your progress.</p>"
    },
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Class interval 10–20 has an upper class boundary of 20.</span>",
        "<span>Class interval 20–30 has an upper class boundary of 30.</span>",
        "<span>These are the values used on the x-axis of the cumulative frequency graph.</span>"
      ]
    }
  },
  "step3": {
    "title": "Constructing the Cumulative Frequency Table",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Make a table with three columns: Class Interval, Frequency, and Cumulative Frequency. Calculate the running total for cumulative frequency.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Class intervals: 0–10, 10–20, 20–30 with frequencies 3, 7, and 5.</span>",
        "<span>Cumulative frequencies: 3, 3+7=10, 10+5=15.</span>"
      ]
    }
  },
  "step4": {
    "title": "Plotting Points on the Graph",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Plot each point using the upper class boundary on the x-axis and the cumulative frequency on the y-axis.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Plot (10, 3), (20, 10), and (30, 15) on the graph.</span>",
        "<span>Each point corresponds to cumulative total at the upper class boundary.</span>"
      ]
    }
  },
  "step5": {
    "title": "Drawing the Smooth Cumulative Frequency Curve",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">Join the plotted points with a smooth, curved line called the cumulative frequency curve. It usually forms an S-shape reflecting data distribution.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Start the curve at zero cumulative frequency before the first class.</span>",
        "<span>Draw a smooth curve passing through all plotted points.</span>"
      ]
    }
  },
  "step6": {
    "title": "Using the Cumulative Frequency Graph to Estimate the Median",
    "explanation": "<p class=\"text-sm leading-6 text-muted-foreground\">The median is the value at the 50th percentile. On a cumulative frequency graph, find half the total frequency on the y-axis, then read across to the curve and down to the x-axis to estimate the median.</p>",
    "workedExample": {
      "title": "Worked Example",
      "bullets": [
        "<span>Total frequency is 40, so half is 20.</span>",
        "<span>Draw a horizontal line at cumulative frequency 20, find where it meets the curve, then drop straight down to the x-axis.</span>",
        "<span>The x-value is an estimate of the median.</span>"
      ]
    }
  },
  "step7": {
    "title": "Exam Style Question",
    "practice": {
      "prompt": "<span>Construct a cumulative frequency graph from the given grouped data, draw a smooth curve, and estimate the median. Then explain how you would find the number of values above a given threshold using the graph.</span>",
      "hint": "Remember to plot cumulative frequencies against upper class boundaries and use the total frequency to find the median. For values above a threshold, look on the graph and subtract frequencies appropriately.",
      "mustHaveKeywords": ["cumulative frequency", "upper class boundary", "median estimate", "smooth curve"],
      "optionalKeywords": ["threshold", "interpretation"],
      "modelAnswer": "<span>First, calculate the cumulative frequencies by adding frequencies progressively. Plot these cumulative frequencies against the upper class boundaries of each class interval. Draw a smooth, S-shaped curve through these points. To estimate the median, find half the total frequency on the y-axis, then read across to the curve and down to the x-axis; this gives the median estimate. To find the number of values above a certain threshold, draw a vertical line at the threshold on the x-axis, find where it meets the curve, and then read the cumulative frequency below this point. Subtract this from the total frequency to find the number of data points above the threshold.</span>",
      "scaffoldPrompts": [
        "Calculate cumulative frequencies for each class interval.",
        "Plot cumulative frequencies against upper class boundaries.",
        "Draw a smooth curve through the points.",
        "Locate half the total frequency on the y-axis.",
        "Read across to the curve, then down to estimate the median.",
        "Use the graph to find frequencies above or below given values."
      ]
    }
  }
};