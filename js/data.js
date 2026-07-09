// data.js — inlined fallback copy of /data/*.json, used only when the ordinary
// fetch() of local JSON files fails (typically previewing over a bare file://
// URL, where script type=module loading itself is blocked — see color.js).
// Plain classic script (not an ES module), loaded on demand by main.js.
// Generated from the JSON files; keep them in sync if you edit either.
// Regeneration command: see README.md "Editing content".

(function (global) {
  global.PH_DATA_FALLBACK = {
  members: {
    "groupName": "The pH-natics",
    "groupNameAlternates": [
      "Litmus League",
      "Anthocyanin Alliance",
      "The Indicators"
    ],
    "theme": "Nature's Colours: a broad-range natural pH indicator",
    "members": [
      {
        "name": "Yue Peiyu",
        "plantKey": "cabbage",
        "plant": "Red cabbage",
        "pigment": "Anthocyanins",
        "planning": {
          "aim": "To investigate how the colour of red cabbage extract changes across different pH values (2-13), and to find out if it can be used as a broad-range natural pH indicator.",
          "hypothesis": "If the pH of the test solution increases from strongly acidic to strongly alkaline, then the red cabbage extract will change progressively through red, pink, purple, blue, teal and green-yellow, because the anthocyanin pigments change structure, and so their colour, as they gain or lose hydrogen ions.",
          "variables": {
            "independent": "pH of the test solution (buffers at pH 2, 4, 6, 7, 9, 11, 13)",
            "dependent": "observed colour of the cabbage extract (colour name and RGB) after mixing with each buffer",
            "controlled": [
              "volume of extract added",
              "volume and concentration of each buffer",
              "extraction method and pigment concentration",
              "lighting conditions when reading colour",
              "time elapsed before reading colour",
              "container and background used for reading"
            ]
          },
          "procedure": [
            "Chop red cabbage leaves finely to increase surface area for extraction.",
            "Steep the chopped cabbage in hot water (or a hot water/ethanol mixture) for a fixed time to extract the anthocyanin pigment.",
            "Filter the extract to remove solid plant matter, keeping the coloured filtrate.",
            "Add a fixed volume of extract to each buffer solution (pH 2, 4, 6, 7, 9, 11, 13) and to the three agreed common solutions (vinegar, distilled water, baking soda solution).",
            "Profile the resulting colour with the Annex A colour-profiling app under consistent lighting to record RGB values.",
            "Repeat for reliability and record colour name and RGB at each pH."
          ],
          "safety": [
            "Hot liquids during extraction: risk of scalding, handle with care.",
            "Ethanol (if used) is flammable: keep away from open flame, extract in a ventilated area.",
            "Alkaline test solutions are irritant: avoid skin and eye contact.",
            "Wear eye protection throughout."
          ],
          "assumptions": [
            "Extracted pigment concentration is roughly consistent between batches.",
            "Buffer solutions are accurately at their stated pH.",
            "Lighting and camera settings are stable across all readings so RGB values are comparable."
          ]
        },
        "analysis": "<strong>Anthocyanins</strong> are pigment molecules that react to pH by gaining or losing hydrogen ions (H<sup>+</sup>). In strongly acidic solution, the pigment holds on to extra hydrogen ions and looks red. As the pH increases, the molecule loses hydrogen ions bit by bit, and each new structure absorbs light differently. This is why the colour changes slowly through pink, purple, violet-blue, blue and teal, ending in green-yellow in strong alkali. Because this colour change happens smoothly across almost the whole pH 2-13 range, our results show that cabbage extract alone can already cover most of the scale. This is why we used it as the main pigment in our group's indicator.",
        "evaluation": {
          "strengths": [
            "Shows a wide range of colours across almost the whole pH scale, using just one pigment.",
            "Very different colours at strongly acidic and strongly alkaline pH, so they are easy to tell apart.",
            "Cheap, safe, and made from things we could find at home."
          ],
          "limitations": [
            "The colour change in the middle of the range (roughly pH 6-9) is gradual, so it is hard to work out the exact pH from colour alone.",
            "The colour we see depends on lighting and camera settings, and purple and violet-blue can be hard to tell apart by eye."
          ],
          "improvement": "Use the same lighting and camera settings (for example, a fixed lightbox) every time we record a colour, and add a second pigment with a sharper colour change, like turmeric, to make the pH 6-9 boundary easier to tell apart."
        },
        "literatureReview": {
          "focus": "Anthocyanins as natural pH indicators",
          "summary": "Anthocyanins are water-soluble plant pigments found in many fruits and vegetables. Studies show that their colour depends on pH, because the pigment molecule changes structure as it gains or loses hydrogen ions, from red in acid to yellow in strong alkali. This is why extracts with a lot of anthocyanins, like red cabbage juice, are useful as broad-range natural pH indicators. Because the colour change happens gradually instead of all at once, anthocyanin indicators are better for showing a general pH range than for giving an exact pH value.",
          "citation": "[insert verified reference]",
          "citationNote": "Owner: replace with a real, checkable published source on anthocyanins as pH indicators. Do not invent an author list or DOI."
        }
      },
      {
        "name": "Song Kang Jun",
        "plantKey": "turmeric",
        "plant": "Turmeric",
        "pigment": "Curcumin",
        "planning": {
          "aim": "To investigate how the colour of turmeric extract changes across different pH values (2-13), and to find out how useful it is for showing the boundary between weakly alkaline and strongly alkaline solutions.",
          "hypothesis": "If the pH of the test solution rises above about pH 8-9, then the turmeric extract will change sharply from yellow to orange-red and then red-brown, because the curcumin pigment loses hydrogen ions and changes structure in alkaline solutions, which changes the colour it absorbs. Below this pH, the extract will stay yellow.",
          "variables": {
            "independent": "pH of the test solution (buffers at pH 2, 4, 7, 8, 9, 11, 13)",
            "dependent": "observed colour of the turmeric extract (colour name and RGB) after mixing with each buffer",
            "controlled": [
              "volume of extract added",
              "volume and concentration of each buffer",
              "extraction method and pigment concentration",
              "lighting conditions when reading colour",
              "time elapsed before reading colour",
              "container and background used for reading"
            ]
          },
          "procedure": [
            "Grate or chop turmeric finely to increase surface area for extraction.",
            "Steep the turmeric in hot water (or a hot water/ethanol mixture) for a fixed time to extract the curcumin pigment.",
            "Filter the extract to remove solid plant matter, keeping the coloured filtrate.",
            "Add a fixed volume of extract to each buffer solution (pH 2, 4, 7, 8, 9, 11, 13) and to the three agreed common solutions.",
            "Profile the resulting colour with the Annex A colour-profiling app under consistent lighting to record RGB values.",
            "Repeat for reliability, sampling more densely around pH 8-9 where the transition happens."
          ],
          "safety": [
            "Hot liquids during extraction: risk of scalding, handle with care.",
            "Ethanol (if used) is flammable: keep away from open flame, extract in a ventilated area.",
            "Alkaline test solutions are irritant: avoid skin and eye contact.",
            "Wear eye protection throughout.",
            "Turmeric stains skin, clothing and surfaces: handle over a protected area."
          ],
          "assumptions": [
            "Extracted pigment concentration is roughly consistent between batches.",
            "Buffer solutions are accurately at their stated pH.",
            "Lighting and camera settings are stable across all readings so RGB values are comparable."
          ]
        },
        "analysis": "<strong>Curcumin</strong>, the yellow pigment in turmeric, stays yellow across acidic and neutral pH. Above roughly pH 8-9, the curcumin molecule loses hydrogen ions and changes structure. This new structure absorbs light differently, which is why the colour changes to orange-red, then red-brown. This change happens over a small pH range, so the colour change is sharp instead of gradual. This is why turmeric alone is a poor broad-range indicator, but it is useful for making the alkaline end of a mixed indicator clearer.",
        "evaluation": {
          "strengths": [
            "Has a very sharp colour change at the weak/strong alkali boundary, instead of changing gradually.",
            "Easy to read by eye.",
            "Adds a colour (red-brown) that is not seen in the acidic-to-neutral range, making high pH easier to tell apart."
          ],
          "limitations": [
            "Almost no colour change across pH 2-7 (stays yellow), so on its own it cannot tell strong acid, weak acid and neutral apart.",
            "Not useful for the acidic half of the pH scale."
          ],
          "improvement": "Combine turmeric with a pigment that changes colour across the acidic range, like red cabbage, so the mixture covers both halves of the pH scale, and test more buffers around pH 8-10 to find the exact midpoint of the colour change."
        },
        "literatureReview": {
          "focus": "Curcumin's alkaline colour transition",
          "summary": "Curcumin is the main pigment in turmeric. Studies show that it stays yellow under acidic and neutral conditions. Above roughly pH 8-9, it loses hydrogen ions and changes structure, which changes the colour towards orange-red and red-brown. Because this colour change is sharp and happens over a small pH range, curcumin extracts are useful for marking the boundary between weak and strong alkali, rather than for tracking pH continuously.",
          "citation": "[insert verified reference]",
          "citationNote": "Owner: replace with a real, checkable published source on curcumin's colour change with pH. Do not invent an author list or DOI."
        }
      },
      {
        "name": "Josiah Soh En Len",
        "plantKey": "beetroot",
        "plant": "Beetroot",
        "pigment": "Betalains (betanin)",
        "planning": {
          "aim": "To investigate how the colour of beetroot extract changes, or does not change, across different pH values, and to find out if it can be used as a pH indicator on its own.",
          "hypothesis": "If the pH of the test solution changes from weakly acidic to weakly alkaline (pH 3-7), then the beetroot extract will stay a fairly stable magenta/red colour, because betalain pigments do not change much with pH in this range. At strongly alkaline pH, the extract will instead break down and turn dull brown/yellow, instead of smoothly changing colour like the other two pigments.",
          "variables": {
            "independent": "pH of the test solution (buffers at pH 2, 4, 6, 7, 9, 11, 13)",
            "dependent": "observed colour of the beetroot extract (colour name and RGB) after mixing with each buffer",
            "controlled": [
              "volume of extract added",
              "volume and concentration of each buffer",
              "extraction method and pigment concentration",
              "heat and light exposure during extraction and testing (betalains are heat/light sensitive)",
              "time elapsed before reading colour",
              "container and background used for reading"
            ]
          },
          "procedure": [
            "Chop beetroot finely to increase surface area for extraction.",
            "Extract the pigment using a cold or gently warmed steep rather than prolonged heating, to minimise premature degradation.",
            "Filter the extract to remove solid plant matter, keeping the coloured filtrate.",
            "Add a fixed volume of extract to each buffer solution (pH 2, 4, 6, 7, 9, 11, 13) and to the three agreed common solutions.",
            "Profile the resulting colour with the Annex A colour-profiling app promptly after mixing, to reduce degradation before reading.",
            "Repeat for reliability and record colour name and RGB at each pH."
          ],
          "safety": [
            "Hot liquids, if a warm extraction is used: risk of scalding, handle with care.",
            "Alkaline test solutions are irritant: avoid skin and eye contact.",
            "Wear eye protection throughout.",
            "Beetroot stains skin, clothing and surfaces: handle over a protected area."
          ],
          "assumptions": [
            "Colour is read promptly enough after mixing that degradation during the reading window itself is negligible.",
            "Extract concentration is consistent between samples.",
            "Buffer solutions are accurately at their stated pH."
          ]
        },
        "analysis": "<strong>Betalains</strong>, including betanin, are the red-violet pigments that give beetroot its colour. Unlike anthocyanins, they barely react to pH across the mildly acidic-to-neutral range (roughly pH 3-7), so betanin only changes slightly in that range. Under strong alkali, heat and light, the pigment breaks down instead of changing colour smoothly, which is what causes the dull brown or yellow colour seen at high pH. This breakdown cannot be reversed, unlike the colour changes in cabbage and turmeric. This is why beetroot's colour change cannot be trusted as a repeatable way to measure pH.",
        "evaluation": {
          "strengths": [
            "Cheap and safe, and easy to find at home.",
            "Gives a clear, strong magenta colour that is easy to see."
          ],
          "limitations": [
            "The colour barely changes across most of the acidic-to-neutral range, so beetroot alone cannot tell strong acid, weak acid and neutral apart.",
            "At strong alkali, the colour change happens because the pigment breaks down, not because of a normal pH-driven colour change. This breakdown cannot be reversed and depends on heat and light, so the results are less reliable than the other two pigments.",
            "This makes beetroot the weakest of the three pigments we tested."
          ],
          "improvement": "Reduce the amount of heat and light the extract is exposed to during extraction and testing (for example, use a cold extraction, test it straight away, and store it in the dark) to slow down the breakdown, and only use beetroot as a small part of a mixed indicator instead of on its own."
        },
        "literatureReview": {
          "focus": "Betalain pigment stability and its limits",
          "summary": "Betalains, including the red-violet pigment betanin found in beetroot, are pigments with a different structure from anthocyanins. Studies show they stay fairly stable across a moderate pH range. They are also sensitive to heat, light and strong alkali, and break down into duller brown or yellow colours instead of smoothly changing colour. Because betanin only has a small useful pH range, and can break down easily, it is not very reliable as a pH indicator on its own. It is still useful as a small part of a mixed natural indicator.",
          "citation": "[insert verified reference]",
          "citationNote": "Owner: replace with a real, checkable published source on betalain/betanin stability. Do not invent an author list or DOI."
        }
      }
    ]
  },
  calibration: {
    "commonSolutions": [
      {
        "role": "acidic",
        "solution": "White vinegar",
        "approxPh": 2.5
      },
      {
        "role": "neutral",
        "solution": "Distilled water",
        "approxPh": 7
      },
      {
        "role": "alkaline",
        "solution": "Baking soda solution",
        "approxPh": 8.5
      }
    ],
    "individual": {
      "cabbage": {
        "member": "Yue Peiyu",
        "plant": "Red cabbage",
        "pigment": "Anthocyanins",
        "points": [
          {
            "ph": 2,
            "colourName": "crimson red",
            "rgb": [
              199,
              32,
              62
            ]
          },
          {
            "ph": 4,
            "colourName": "pink-magenta",
            "rgb": [
              190,
              62,
              120
            ]
          },
          {
            "ph": 6,
            "colourName": "purple",
            "rgb": [
              140,
              70,
              150
            ]
          },
          {
            "ph": 7,
            "colourName": "violet-blue",
            "rgb": [
              102,
              92,
              168
            ]
          },
          {
            "ph": 9,
            "colourName": "blue",
            "rgb": [
              62,
              110,
              180
            ]
          },
          {
            "ph": 11,
            "colourName": "teal",
            "rgb": [
              40,
              150,
              148
            ]
          },
          {
            "ph": 13,
            "colourName": "green-yellow",
            "rgb": [
              150,
              188,
              82
            ]
          }
        ]
      },
      "turmeric": {
        "member": "Song Kang Jun",
        "plant": "Turmeric",
        "pigment": "Curcumin",
        "points": [
          {
            "ph": 2,
            "colourName": "yellow",
            "rgb": [
              232,
              200,
              40
            ]
          },
          {
            "ph": 4,
            "colourName": "yellow",
            "rgb": [
              230,
              198,
              42
            ]
          },
          {
            "ph": 7,
            "colourName": "yellow",
            "rgb": [
              226,
              190,
              44
            ]
          },
          {
            "ph": 8,
            "colourName": "yellow-orange",
            "rgb": [
              224,
              160,
              42
            ]
          },
          {
            "ph": 9,
            "colourName": "orange-red",
            "rgb": [
              200,
              92,
              40
            ]
          },
          {
            "ph": 11,
            "colourName": "red-brown",
            "rgb": [
              162,
              52,
              40
            ]
          },
          {
            "ph": 13,
            "colourName": "deep red-brown",
            "rgb": [
              148,
              40,
              38
            ]
          }
        ]
      },
      "beetroot": {
        "member": "Josiah Soh En Len",
        "plant": "Beetroot",
        "pigment": "Betalains (betanin)",
        "points": [
          {
            "ph": 2,
            "colourName": "red",
            "rgb": [
              190,
              40,
              70
            ]
          },
          {
            "ph": 4,
            "colourName": "magenta-pink",
            "rgb": [
              200,
              50,
              110
            ]
          },
          {
            "ph": 6,
            "colourName": "magenta",
            "rgb": [
              192,
              46,
              116
            ]
          },
          {
            "ph": 7,
            "colourName": "magenta",
            "rgb": [
              185,
              45,
              120
            ]
          },
          {
            "ph": 9,
            "colourName": "dull purple",
            "rgb": [
              150,
              62,
              118
            ]
          },
          {
            "ph": 11,
            "colourName": "brown-purple",
            "rgb": [
              140,
              92,
              82
            ]
          },
          {
            "ph": 13,
            "colourName": "yellow-brown",
            "rgb": [
              172,
              150,
              72
            ]
          }
        ]
      }
    },
    "mixture": {
      "ratioLabel": "red cabbage : turmeric : beetroot = 3 : 1 : 1",
      "ratioTested": [
        {
          "ratio": "1 : 1 : 1",
          "verdict": "muddier mid-range separation"
        },
        {
          "ratio": "2 : 1 : 1",
          "verdict": "muddier mid-range separation"
        },
        {
          "ratio": "3 : 1 : 1",
          "verdict": "cleanest distinct bands across all three pH regions (winner)"
        }
      ],
      "points": [
        {
          "ph": 1,
          "band": "strong acid",
          "colourName": "red",
          "rgb": [
            205,
            30,
            55
          ]
        },
        {
          "ph": 3,
          "band": "strong/weak acid",
          "colourName": "rose-pink",
          "rgb": [
            196,
            58,
            104
          ]
        },
        {
          "ph": 5,
          "band": "weak acid",
          "colourName": "purple-magenta",
          "rgb": [
            158,
            66,
            138
          ]
        },
        {
          "ph": 7,
          "band": "neutral",
          "colourName": "violet",
          "rgb": [
            110,
            92,
            165
          ]
        },
        {
          "ph": 9,
          "band": "weak alkali",
          "colourName": "blue",
          "rgb": [
            66,
            116,
            176
          ]
        },
        {
          "ph": 11,
          "band": "strong alkali",
          "colourName": "teal-green",
          "rgb": [
            44,
            152,
            138
          ]
        },
        {
          "ph": 13,
          "band": "strong alkali",
          "colourName": "olive-yellow",
          "rgb": [
            150,
            180,
            84
          ]
        }
      ]
    }
  },
  practicum: {
    "unknowns": [
      {
        "id": "U1",
        "identity": "Lemon juice",
        "observedColour": "red",
        "rgb": [
          203,
          34,
          58
        ],
        "estimatedPh": "~2",
        "classification": "Strong acid",
        "image": "assets/practicum-U1.jpg"
      },
      {
        "id": "U2",
        "identity": "Black coffee",
        "observedColour": "rose-pink",
        "rgb": [
          190,
          70,
          110
        ],
        "estimatedPh": "~5",
        "classification": "Weak acid",
        "image": "assets/practicum-U2.jpg"
      },
      {
        "id": "U3",
        "identity": "Salt water",
        "observedColour": "violet",
        "rgb": [
          112,
          94,
          162
        ],
        "estimatedPh": "~7",
        "classification": "Neutral",
        "image": "assets/practicum-U3.jpg"
      },
      {
        "id": "U4",
        "identity": "Baking soda solution",
        "observedColour": "blue",
        "rgb": [
          70,
          118,
          174
        ],
        "estimatedPh": "~9",
        "classification": "Weak alkali",
        "image": "assets/practicum-U4.jpg"
      },
      {
        "id": "U5",
        "identity": "Dilute ammonia (cleaner)",
        "observedColour": "teal-green",
        "rgb": [
          46,
          150,
          140
        ],
        "estimatedPh": "~12",
        "classification": "Strong alkali",
        "image": "assets/practicum-U5.jpg"
      }
    ]
  },
  content: {
    "hero": {
      "title": "pH-enomenal Chemistry",
      "themeLine": "Nature's Colours: a broad-range natural pH indicator",
      "scrollCue": "Scroll to explore"
    },
    "introduction": {
      "heading": "Introduction",
      "paragraphs": [
        "An indicator is a substance that changes colour depending on whether a solution is acidic, neutral or alkaline. This is because the indicator reacts with the hydrogen ions in acids, or with the hydroxide ions in alkalis, and this changes its structure slightly. A different structure absorbs light differently, so we see a different colour. Common indicators like litmus and phenolphthalein are man-made, and they usually only change colour once, at one point on the pH scale. Many plant pigments can do the same job. Anthocyanins, the pigments in red cabbage, are special because they change colour gradually across almost the whole pH scale, not just once.",
        "For our project, we wanted to make our own natural pH indicator using things found at home: red cabbage, turmeric and beetroot. Our aim was to make an indicator that could cover the full pH range, from very acidic to very alkaline, with colour changes clear enough that we could use the colour to estimate the pH of an unknown solution. We tested each plant pigment on its own first, then combined and adjusted them as a group."
      ],
      "literatureCardsHeading": "Literature review"
    },
    "science": {
      "heading": "The Science",
      "subheading": "Why the colour changes",
      "explainer": [
        "Red cabbage gets its colour from pigments called <strong>anthocyanins</strong>. These pigment molecules gain or lose hydrogen ions (H<sup>+</sup>) depending on how acidic or alkaline the solution is. When the molecule gains or loses a hydrogen ion, its structure changes a little. A molecule with a different structure absorbs a different colour of light, and that is why we see the colour change.",
        "As the pH goes up from very acidic to very alkaline, red cabbage extract changes smoothly through red, pink, purple, blue, teal and green-yellow. Because this colour change happens smoothly across almost the whole pH scale, we used red cabbage as the main pigment in our indicator. We added turmeric and beetroot on top of it to make specific parts of the scale easier to tell apart."
      ]
    },
    "groupOptimisation": {
      "heading": "Group Optimisation",
      "narrative": [
        "Each pigment on its own has a weakness. Red cabbage covers the whole pH range, but the colour changes slowly in the middle, so it is hard to tell the exact pH between about pH 6 and 9. Turmeric stays yellow across the whole acidic-to-neutral range and is only useful above pH 8. Beetroot barely changes colour at all, until it breaks down in strong alkali. We mixed the three pigments together so that each one could cover for the others' weaknesses.",
        "We tested three different mixing ratios of red cabbage to turmeric to beetroot: 1:1:1, 2:1:1 and 3:1:1. Both 1:1:1 and 2:1:1 gave muddier colours in the middle of the pH range, because the turmeric and beetroot made the cabbage's clear colour changes harder to see, without adding enough of their own colour change to make up for it. The 3:1:1 ratio worked best. It keeps red cabbage as the main pigment, with just enough turmeric to make the alkaline colours clearer, giving the clearest colour bands across acidic, neutral and alkaline solutions.",
        "This 3:1:1 mixture is what we used for the rest of this site: the pH slider, the reference card and the AI pH Estimator are all based on this same set of colours."
      ]
    },
    "discussion": {
      "heading": "Discussion and Conclusion",
      "synthesis": "Our optimised 3:1:1 mix correctly identified all five unknown solutions in our Live Lab Practicum, from strong acid to strong alkali. This supports our main idea: a natural indicator, carefully optimised instead of just mixed randomly, can work as well as a man-made broad-range indicator. It does this while staying cheap, safe and made from things found at home.",
      "strengths": [
        "Wide, visible colour range across almost the whole pH 1-13 scale.",
        "Cheap, safe and made entirely from things found at home.",
        "Correctly identified all five unknown solutions in our practicum, from strong acid to strong alkali."
      ],
      "limitations": [
        "It is hard to tell weak acid from strong acid, or weak alkali from strong alkali, because the colour difference is small and hard to judge by eye.",
        "Colour readings depend on lighting and camera settings, which affects both what we see and what the AI estimator sees.",
        "The beetroot part of the mixture breaks down under heat, light and strong alkali, so it is the least reliable of the three pigments over time.",
        "Our indicator can only give an estimated pH range, not an exact pH value. It cannot replace a proper pH meter."
      ],
      "recommendations": [
        "Use the same lighting (for example, a fixed lightbox) every time the indicator's colour is read, whether by eye or with the AI estimator.",
        "Use the same extraction method and steeping time every time, since how much pigment is in the extract affects how strong the colour looks.",
        "Try adding a fourth pigment, or replacing beetroot, to fix the weak colour separation around pH 5-6.",
        "Set up the AI estimator separately for each camera or device, since cameras can show colours slightly differently."
      ]
    },
    "aboutBuild": "This site is the maximum-AI arm of a class experiment comparing AI-assisted and human-produced coursework. The dataset throughout is illustrative and AI-generated for the demo, grounded in real indicator chemistry. It is not real laboratory data."
  },
  };
})(typeof window !== "undefined" ? window : globalThis);
