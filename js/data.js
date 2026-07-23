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
          "materials": [
            "Fresh red cabbage",
            "Hot water",
            "Filter paper or a fine sieve",
            "Solutions at pH 2, 4, 6, 7, 9, 11, 13",
            "The three agreed common solutions (vinegar, NaCl salt solution, detergent)",
            "Small containers for testing",
            "Annex A colour-profiling app",
            "Camera or smartphone"
          ],
          "aim": "To investigate how the colour of red cabbage extract changes across different pH values (2-13), and to find out if it can be used as a broad-range natural pH indicator.",
          "hypothesis": "If the pH of the test solution increases from strongly acidic to strongly alkaline, then the red cabbage extract will change progressively through red, pink, purple, blue, teal and green-yellow, because the anthocyanin pigments change structure, and so their colour, as they gain or lose hydrogen ions.",
          "variables": {
            "independent": "pH of the test solution (pH 2, 4, 6, 7, 9, 11, 13)",
            "dependent": "observed colour of the cabbage extract (colour name and RGB) after mixing with each solution",
            "controlled": [
              "volume of extract added",
              "volume and concentration of each solution",
              "extraction method and pigment concentration",
              "lighting conditions when reading colour",
              "time elapsed before reading colour",
              "container and background used for reading"
            ]
          },
          "procedure": [
            "Chop red cabbage leaves finely to increase surface area for extraction.",
            "Steep the chopped cabbage in hot water for a fixed time to extract the anthocyanin pigment.",
            "Filter the extract to remove solid plant matter, keeping the coloured filtrate.",
            "Add a fixed volume of extract to each solution (pH 2, 4, 6, 7, 9, 11, 13) and to the three agreed common solutions (vinegar, NaCl salt solution, detergent).",
            "Profile the resulting colour with the Annex A colour-profiling app under consistent lighting to record RGB values.",
            "Repeat for reliability and record colour name and RGB at each pH."
          ],
          "safety": [
            "Hot liquids during extraction: risk of scalding, handle with care.",
            "Alkaline test solutions are irritant: avoid skin and eye contact."
          ],
          "assumptions": [
            "Extracted pigment concentration is roughly consistent between batches.",
            "Solutions are accurately at their stated pH.",
            "Lighting and camera settings are stable across all readings so RGB values are comparable."
          ]
        },
        "analysis": "<strong>Anthocyanins</strong> are pigment molecules that react to pH by gaining or losing hydrogen ions (H<sup>+</sup>). In strongly acidic solution, the pigment holds on to extra hydrogen ions and looks red. As the pH increases, the molecule loses hydrogen ions bit by bit, and each new structure absorbs light differently. This is why the colour changes slowly through pink, purple, violet-blue, blue and teal, ending in green-yellow in strong alkali. Because this colour change happens smoothly across almost the whole pH 2-13 range, our results show that cabbage extract alone can already cover most of the scale. This is why we used it as the main pigment in our group's indicator.",
        "photos": [
          {
            "src": "assets/peiyu-photos/peiyu-01-chopping.jpg",
            "caption": "Chopping red cabbage finely to increase surface area for extraction."
          },
          {
            "src": "assets/peiyu-photos/peiyu-02-steeping.jpg",
            "caption": "The chopped cabbage steeping in hot water. The purple anthocyanin pigment leaches out, turning the water a deep magenta."
          },
          {
            "src": "assets/peiyu-photos/peiyu-03-extract-plate.jpg",
            "caption": "A sample of the filtered cabbage extract."
          },
          {
            "src": "assets/peiyu-photos/peiyu-04-three-solutions.jpg",
            "caption": "The extract added to the three agreed test solutions. Left: detergent (alkaline, green). Middle: NaCl salt solution (neutral, purple). Right: vinegar (acidic, pink)."
          },
          {
            "src": "assets/peiyu-photos/peiyu-05-three-solutions-2.jpg",
            "caption": "Another view of the extract's colour in all three test solutions, next to the main cabbage extract."
          },
          {
            "src": "assets/peiyu-photos/peiyu-06-green-purple-compare.jpg",
            "caption": "Close-up comparing the extract's colour in detergent (left, green) and NaCl salt solution (right, purple)."
          },
          {
            "src": "assets/peiyu-photos/peiyu-07-pink-result.jpg",
            "caption": "Close-up of the extract's pink colour in vinegar, the acidic test solution."
          }
        ],
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
          "improvement": "Use the same lighting and camera settings (for example, a fixed lightbox) every time we record a colour, and add a second pigment with a more distinct colour in the pH 6-9 range, so the boundary is easier to tell apart."
        },
        "literatureReview": {
          "focus": "Anthocyanins as natural pH indicators",
          "summary": "Anthocyanins are blue, red, or purple pigments found in plants, especially flowers, fruits, and tubers. Anthocyanin appears as a red pigment in acidic conditions, while a blue pigment exists in alkaline conditions.",
          "citation": "Khoo, H. E., Azlan, A., Tang, S. T., & Lim, S. M. (2017). Anthocyanidins and anthocyanins: Colored pigments as food, pharmaceutical ingredients, and the potential health benefits. Food & Nutrition Research, 61(1), Article 1361779. https://doi.org/10.1080/16546628.2017.1361779"
        }
      },
      {
        "name": "Soh Kang Jay",
        "plantKey": "Onion Skin",
        "plant": "Onion",
        "pigment": "Anthocyanin Pigments",
        "planning": {
          "materials": [
            "Dry onion skins",
            "Hot water",
            "Filter paper or a fine sieve",
            "Solutions at pH 2, 4, 6, 7, 9, 11, 13",
            "The three agreed common solutions (vinegar, NaCl salt solution, detergent)",
            "Small containers for testing",
            "Annex A colour-profiling app",
            "Camera or smartphone"
          ],
          "aim": "To investigate how the colour of onion skin extract changes across different pH values (2-13), and to find out if it can be used as a natural pH indicator.",
          "hypothesis": "If the pH of the test solution increases from strongly acidic to strongly alkaline, then the onion skin extract will change gradually from a dull red through muted pink-purple tones to olive-brown, because the anthocyanin pigments in onion skin change structure, and so their colour, as they gain or lose hydrogen ions, in the same way as red cabbage.",
          "variables": {
            "independent": "pH of the test solution (pH 2, 4, 6, 7, 9, 11, 13)",
            "dependent": "observed colour of the onion skin extract (colour name and RGB) after mixing with each solution",
            "controlled": [
              "volume of extract added",
              "volume and concentration of each solution",
              "extraction method and pigment concentration",
              "lighting conditions when reading colour",
              "time elapsed before reading colour",
              "container and background used for reading"
            ]
          },
          "procedure": [
            "Peel the dry outer skins from onions and chop them finely to increase surface area for extraction.",
            "Steep the chopped onion skin in hot water for a fixed time to extract the anthocyanin pigment.",
            "Filter the extract to remove solid plant matter, keeping the coloured filtrate.",
            "Add a fixed volume of extract to each solution (pH 2, 4, 6, 7, 9, 11, 13) and to the three agreed common solutions.",
            "Profile the resulting colour with the Annex A colour-profiling app under consistent lighting to record RGB values.",
            "Repeat for reliability and record colour name and RGB at each pH."
          ],
          "safety": [
            "Hot liquids during extraction: risk of scalding, handle with care.",
            "Alkaline test solutions are irritant: avoid skin and eye contact."
          ],
          "assumptions": [
            "Extracted pigment concentration is roughly consistent between batches.",
            "Solutions are accurately at their stated pH.",
            "Lighting and camera settings are stable across all readings so RGB values are comparable."
          ]
        },
        "analysis": "Onion skin also contains <strong>anthocyanins</strong>, so it responds to pH the same way as red cabbage: gaining or losing hydrogen ions (H<sup>+</sup>) changes the pigment's structure, which changes the colour we see. In strongly acidic solution, the extract looks a dull brick-red. As pH rises, the colour shifts gradually through dusty rose, mauve and grey-blue tones, ending in an olive-brown at strong alkali. These colours are less vivid than red cabbage's, because onion skin's natural colour is already brownish rather than purple, so that brownish tint carries through the whole pH range. This makes onion skin a real pH-responsive indicator, but a less clear one than red cabbage on its own.",
        "photos": [
          {
            "src": "assets/kang-jay-photos/kang-jay-01-washing.jpg",
            "caption": "Washing the onion before chopping it for extraction."
          },
          {
            "src": "assets/kang-jay-photos/kang-jay-02-steeping.jpg",
            "caption": "The chopped onion steeping in hot water. The anthocyanin pigment leaches out, turning the water a deep red."
          },
          {
            "src": "assets/kang-jay-photos/kang-jay-03-extract-plate.jpg",
            "caption": "A sample of the filtered onion extract."
          },
          {
            "src": "assets/kang-jay-photos/kang-jay-04-three-solutions.jpg",
            "caption": "The extract added to the three agreed test solutions. Left: detergent (alkaline, brown). Middle: NaCl salt solution (neutral, salmon-pink). Right: vinegar (acidic, red-orange)."
          },
          {
            "src": "assets/kang-jay-photos/kang-jay-05-three-solutions-2.jpg",
            "caption": "Another view of the extract's colour in all three test solutions, next to the main onion extract."
          },
          {
            "src": "assets/kang-jay-photos/kang-jay-06-nacl-vinegar-compare.jpg",
            "caption": "Close-up comparing the extract's colour in NaCl salt solution (left, salmon-pink) and vinegar (right, red-orange)."
          },
          {
            "src": "assets/kang-jay-photos/kang-jay-07-extract-close.jpg",
            "caption": "The concentrated onion extract in the mixing bowl, with a chopstick and syringe used to measure drops into each test solution."
          }
        ],
        "evaluation": {
          "strengths": [
            "Responds to pH across almost the whole scale, using the same anthocyanin pigments as red cabbage.",
            "Cheap, safe, and made from something usually thrown away (onion skins).",
            "Gives a different, more brownish colour ladder from red cabbage, which may help tell some pH regions apart in the mixture."
          ],
          "limitations": [
            "The colour change is duller and less distinct than red cabbage's, because onion skin's natural brown colour mutes the anthocyanin colours.",
            "Similar hues in the middle of the range (mauve, grey-violet, dusty blue-grey) can be hard to tell apart by eye."
          ],
          "improvement": "Use a stronger extraction (more onion skin, less water) to make the colours more vivid and easier to tell apart, and compare side-by-side with red cabbage extract to check how much onion skin adds beyond what red cabbage already covers."
        },
        "literatureReview": {
          "focus": "Anthocyanin pigment stability across pH",
          "summary": "Anthocyanin pigments are used as natural food colorants. However, the color and stability of these pigments are influenced by pH among other factors. At acidic pH, anthocyanins are red pigments, and turn blue in basic mediums. However, at basic pH, anthocyanins are unstable and tend to degrade to dark brown oxidized compounds.",
          "citation": "Mattioli, R., Francioso, A., Mosca, L., & Silva, P. (2020). Anthocyanins: A comprehensive review of their chemical properties and health effects on cardiovascular and neurodegenerative diseases. Molecules, 25(17), Article 3809. https://doi.org/10.3390/molecules25173809"
        }
      },
      {
        "name": "Josiah Soh You Ler",
        "plantKey": "sweetPotato",
        "plant": "Purple sweet potato",
        "pigment": "Anthocyanins",
        "planning": {
          "materials": [
            "Fresh purple sweet potato",
            "Hot water",
            "Filter paper or a fine sieve",
            "Solutions at pH 2, 4, 6, 7, 9, 11, 13",
            "The three agreed common solutions (vinegar, NaCl salt solution, detergent)",
            "Small containers for testing",
            "Annex A colour-profiling app",
            "Camera or smartphone"
          ],
          "aim": "To investigate how the colour of purple sweet potato extract changes across different pH values (2-13), and to find out if it can be used as a natural pH indicator.",
          "hypothesis": "If the pH of the test solution increases from strongly acidic to strongly alkaline, then the purple sweet potato extract will change gradually from pink-red through deep purple to blue-green, because the anthocyanin pigments in purple sweet potato change structure, and so their colour, as they gain or lose hydrogen ions, in the same way as red cabbage.",
          "variables": {
            "independent": "pH of the test solution (pH 2, 4, 6, 7, 9, 11, 13)",
            "dependent": "observed colour of the sweet potato extract (colour name and RGB) after mixing with each solution",
            "controlled": [
              "volume of extract added",
              "volume and concentration of each solution",
              "extraction method and pigment concentration",
              "lighting conditions when reading colour",
              "time elapsed before reading colour",
              "container and background used for reading"
            ]
          },
          "procedure": [
            "Peel and finely chop purple sweet potato to increase surface area for extraction.",
            "Steep the chopped sweet potato in hot water for a fixed time to extract the anthocyanin pigment.",
            "Filter the extract to remove solid plant matter, keeping the coloured filtrate.",
            "Add a fixed volume of extract to each solution (pH 2, 4, 6, 7, 9, 11, 13) and to the three agreed common solutions.",
            "Profile the resulting colour with the Annex A colour-profiling app under consistent lighting to record RGB values.",
            "Repeat for reliability and record colour name and RGB at each pH."
          ],
          "safety": [
            "Hot liquids during extraction: risk of scalding, handle with care.",
            "Alkaline test solutions are irritant: avoid skin and eye contact."
          ],
          "assumptions": [
            "Extracted pigment concentration is roughly consistent between batches.",
            "Solutions are accurately at their stated pH.",
            "Lighting and camera settings are stable across all readings so RGB values are comparable."
          ]
        },
        "analysis": "Purple sweet potato also contains <strong>anthocyanins</strong>, so it responds to pH in the same way as red cabbage: gaining or losing hydrogen ions (H<sup>+</sup>) changes the pigment's structure, which changes the colour we see. In strongly acidic solution, the extract looks a deep pink-red. As pH rises, the colour shifts through deep purple and violet tones, then turns blue-green in strong alkali. This blue-green shift is different from red cabbage's yellow-green shift at high pH, so purple sweet potato adds a genuinely different colour to the group's mixture rather than just repeating red cabbage's ladder.",
        "photos": [
          {
            "src": "assets/josiah-photos/josiah-08-dicing.jpg",
            "caption": "The purple sweet potato diced into small pieces before steeping."
          },
          {
            "src": "assets/josiah-photos/josiah-09-extract-plate-2.jpg",
            "caption": "Another sample of the filtered extract."
          },
          {
            "src": "assets/josiah-photos/josiah-10-detergent-result.jpg",
            "caption": "The extract's colour in detergent, the alkaline test solution: green."
          },
          {
            "src": "assets/josiah-photos/josiah-11-nacl-result.jpg",
            "caption": "The extract's colour in NaCl salt solution, the neutral test solution: blue-teal."
          },
          {
            "src": "assets/josiah-photos/josiah-12-vinegar-result.jpg",
            "caption": "The extract's colour in vinegar, the acidic test solution: magenta."
          },
          {
            "src": "assets/josiah-photos/josiah-13-three-solutions-2.jpg",
            "caption": "The three test results together. Left: detergent (green). Middle: NaCl salt solution (blue-teal). Right: vinegar (magenta)."
          }
        ],
        "evaluation": {
          "strengths": [
            "Responds to pH across almost the whole scale, using the same anthocyanin pigments as red cabbage.",
            "Turns blue-green in strong alkali, a colour not given by red cabbage or onion skin, so it helps tell strong alkali apart.",
            "Cheap, safe, and easy to find at home."
          ],
          "limitations": [
            "Middle-range colours (deep purple, violet) can be hard to tell apart from red cabbage's own purple tones by eye.",
            "The colour we see depends on lighting and camera settings, like the other pigments."
          ],
          "improvement": "Test purple sweet potato from different sources to check how consistent its blue-green alkaline colour is, and pair it with red cabbage in the mixture so the group has a wider range of colours to read from at high pH."
        },
        "literatureReview": {
          "focus": "Purple sweet potato anthocyanins",
          "summary": "Purple sweet potato are sources of anthocyanin, a pigment that can show colour changes at different pH values. They show red colour at pH 1-2, pink at pH 3-6, purple at pH 7, blue at pH 8-9, green at pH 10-11, and yellow at pH 12-14.",
          "citation": "Leba, M. A. U., Boelan, E. G., Taek, M. M., Mau, S. D. B., Ruas, J. de C., Tukan, M. B., Ruas, A. de C., Ruas, N. A., Lawung, Y. D., Kopon, A. M., Komisia, F., & Baunsele, A. B. (2024). Exploring purple sweet potato pigment as an eco-friendly titration indicator for acid determination. Tropical Journal of Natural Product Research, 8(6), 7403–7409. https://doi.org/10.26538/tjnpr/v8i6.10"
        }
      }
    ]
  },
  calibration: {
    "commonSolutions": [
      {
        "role": "acidic",
        "solution": "Vinegar",
        "approxPh": 2.5
      },
      {
        "role": "neutral",
        "solution": "NaCl salt solution",
        "approxPh": 7
      },
      {
        "role": "alkaline",
        "solution": "Detergent",
        "approxPh": 9
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
      "onion": {
        "member": "Soh Kang Jay",
        "plant": "Onion",
        "pigment": "Anthocyanins",
        "points": [
          {
            "ph": 2,
            "colourName": "dull brick red",
            "rgb": [
              178,
              68,
              58
            ]
          },
          {
            "ph": 4,
            "colourName": "dusty rose",
            "rgb": [
              175,
              92,
              88
            ]
          },
          {
            "ph": 6,
            "colourName": "muted mauve",
            "rgb": [
              150,
              100,
              108
            ]
          },
          {
            "ph": 7,
            "colourName": "grey-violet",
            "rgb": [
              128,
              108,
              130
            ]
          },
          {
            "ph": 9,
            "colourName": "dusty blue-grey",
            "rgb": [
              100,
              118,
              140
            ]
          },
          {
            "ph": 11,
            "colourName": "olive-teal",
            "rgb": [
              90,
              140,
              120
            ]
          },
          {
            "ph": 13,
            "colourName": "olive-brown",
            "rgb": [
              150,
              152,
              90
            ]
          }
        ]
      },
      "sweetPotato": {
        "member": "Josiah Soh You Ler",
        "plant": "Purple sweet potato",
        "pigment": "Anthocyanins",
        "points": [
          {
            "ph": 2,
            "colourName": "deep pink-red",
            "rgb": [
              195,
              45,
              75
            ]
          },
          {
            "ph": 4,
            "colourName": "magenta-red",
            "rgb": [
              180,
              55,
              100
            ]
          },
          {
            "ph": 6,
            "colourName": "deep purple",
            "rgb": [
              130,
              60,
              140
            ]
          },
          {
            "ph": 7,
            "colourName": "violet-purple",
            "rgb": [
              100,
              70,
              150
            ]
          },
          {
            "ph": 9,
            "colourName": "blue-violet",
            "rgb": [
              70,
              90,
              160
            ]
          },
          {
            "ph": 11,
            "colourName": "blue-green",
            "rgb": [
              50,
              130,
              130
            ]
          },
          {
            "ph": 13,
            "colourName": "green",
            "rgb": [
              70,
              150,
              100
            ]
          }
        ]
      }
    },
    "mixture": {
      "ratioLabel": "red cabbage : onion : sweet potato = 60 : 40 : 20 (3 : 2 : 1)",
      "ratioTested": [
        {
          "ratio": "40 : 40 : 20",
          "verdict": "muddier mid-range separation"
        },
        {
          "ratio": "40 : 20 : 40",
          "verdict": "muddier mid-range separation"
        },
        {
          "ratio": "60 : 40 : 20",
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
      "title": "The pH-natics",
      "themeLine": "Nature's Colours: a broad-range natural pH indicator",
      "scrollCue": "Scroll to explore"
    },
    "introduction": {
      "heading": "Introduction",
      "paragraphs": [
        "An indicator is a substance that changes colour depending on whether a solution is acidic, neutral or alkaline. This is because the indicator reacts with the hydrogen ions in acids, or with the hydroxide ions in alkalis, and this changes its structure slightly. A different structure absorbs light differently, so we see a different colour. Common indicators like litmus and phenolphthalein are man-made, and they usually only change colour once, at one point on the pH scale. Many plant pigments can do the same job. Anthocyanins, the pigments in red cabbage, are special because they change colour gradually across almost the whole pH scale, not just once.",
        "For our project, we wanted to make our own natural pH indicator using things found at home: red cabbage, onion and purple sweet potato. Our aim was to make an indicator that could cover the full pH range, from very acidic to very alkaline, with colour changes clear enough that we could use the colour to estimate the pH of an unknown solution. We tested each plant pigment on its own first, then combined and adjusted them as a group."
      ],
      "literatureCardsHeading": "Literature review"
    },
    "science": {
      "heading": "The Science",
      "subheading": "Why the colour changes",
      "explainer": [
        "Red cabbage gets its colour from pigments called <strong>anthocyanins</strong>. These pigment molecules gain or lose hydrogen ions (H<sup>+</sup>) depending on how acidic or alkaline the solution is. When the molecule gains or loses a hydrogen ion, its structure changes a little. A molecule with a different structure absorbs a different colour of light, and that is why we see the colour change.",
        "As the pH goes up from very acidic to very alkaline, red cabbage extract changes smoothly through red, pink, purple, blue, teal and green-yellow. Because this colour change happens smoothly across almost the whole pH scale, we used red cabbage as the main pigment in our indicator. We added onion and purple sweet potato on top of it to make specific parts of the scale easier to tell apart."
      ]
    },
    "ingredients": {
      "heading": "Ingredients & Materials",
      "intro": [
        "This is everything we used for the whole project: the three plants that gave us our pigments, and the three common household solutions we tested them with."
      ],
      "plants": [
        {
          "name": "Red cabbage",
          "role": "Main pigment (anthocyanins)",
          "usedBy": "Yue Peiyu"
        },
        {
          "name": "Onion",
          "role": "Secondary pigment (anthocyanins)",
          "usedBy": "Soh Kang Jay"
        },
        {
          "name": "Purple sweet potato",
          "role": "Secondary pigment (anthocyanins)",
          "usedBy": "Josiah Soh You Ler"
        }
      ],
      "commonSolutions": [
        {
          "name": "Vinegar",
          "product": "Haday White Rice Vinegar, 450 mL",
          "role": "Acidic test solution",
          "src": "assets/ingredient-photos/vinegar.jpg",
          "caption": "The white rice vinegar we used as our acidic test solution."
        },
        {
          "name": "NaCl salt solution",
          "product": "FairPrice Premium Quality Fine Salt, dissolved in water",
          "role": "Neutral test solution",
          "src": "assets/ingredient-photos/salt.jpg",
          "caption": "The fine salt we dissolved in water to make the NaCl test solution."
        },
        {
          "name": "Detergent",
          "product": "Dynamo Anti-Bacterial Liquid Detergent, 2.5 kg",
          "role": "Alkaline test solution",
          "src": "assets/ingredient-photos/detergent.jpg",
          "caption": "The liquid detergent we used as our alkaline test solution."
        }
      ],
      "otherMaterials": [
        "Hot water for extraction",
        "Filter paper or a fine sieve",
        "Solutions at pH 2, 4, 6, 7, 9, 11, 13",
        "Small containers for testing",
        "Annex A colour-profiling app",
        "Camera or smartphone"
      ]
    },
    "groupOptimisation": {
      "heading": "Group Optimisation",
      "narrative": [
        "Each pigment on its own has a weakness. Red cabbage covers the whole pH range, but the colour changes slowly in the middle, so it is hard to tell the exact pH between about pH 6 and 9. Onion skin also contains anthocyanins, so it responds across the same wide range, but its colours are duller and browner, so on its own it is harder to read than red cabbage. Purple sweet potato responds well too, but its purple tones in the middle of the range can look similar to red cabbage's own purple, so it does not add much there on its own. We mixed the three pigments together so that each one could cover for the others' weaknesses.",
        "We tested a few different mixing ratios of red cabbage to onion to sweet potato before settling on 60:40:20. Other ratios gave muddier colours across the pH range, because the duller onion colours and the overlapping purple tones from sweet potato made red cabbage's clearer colour changes harder to see. The 60:40:20 ratio worked best. It keeps red cabbage as the main pigment, with just enough onion and sweet potato added to give a distinct blue-green cue at high pH without muddying the overall ladder too much, giving the clearest colour bands across acidic, neutral and alkaline solutions.",
        "This 60:40:20 mixture is what we used for the rest of this site: the pH slider, the reference card and the AI pH Estimator are all based on this same set of colours."
      ],
      "photos": [
        {
          "src": "assets/optimisation-photos/optimisation-01-combined-mixture.jpg",
          "caption": "The combined 60:40:20 indicator mixture."
        },
        {
          "src": "assets/optimisation-photos/optimisation-02-mixture-vs-individuals.jpg",
          "caption": "The combined mixture (patterned bowl) next to the three individual extracts' results, for comparison."
        }
      ]
    },
    "discussion": {
      "heading": "Discussion and Conclusion",
      "synthesis": "Our optimised 60:40:20 mix correctly identified all five unknown solutions in our Live Lab Practicum, from strong acid to strong alkali. This supports our main idea: a natural indicator, carefully optimised instead of just mixed randomly, can work as well as a man-made broad-range indicator. It does this while staying cheap, safe and made from things found at home.",
      "strengths": [
        "Wide, visible colour range across almost the whole pH 1-13 scale.",
        "Cheap, safe and made entirely from things found at home.",
        "Correctly identified all five unknown solutions in our practicum, from strong acid to strong alkali."
      ],
      "limitations": [
        "It is hard to tell weak acid from strong acid, or weak alkali from strong alkali, because the colour difference is small and hard to judge by eye.",
        "Colour readings depend on lighting and camera settings, which affects both what we see and what the AI estimator sees.",
        "Since red cabbage, onion and purple sweet potato are all anthocyanin-based, their middle-range colours can overlap, so some pH bands are harder to tell apart than they would be with pigments that changed colour through different mechanisms.",
        "Our indicator can only give an estimated pH range, not an exact pH value. It cannot replace a proper pH meter."
      ],
      "recommendations": [
        "Use the same lighting (for example, a fixed lightbox) every time the indicator's colour is read, whether by eye or with the AI estimator.",
        "Use the same extraction method and steeping time every time, since how much pigment is in the extract affects how strong the colour looks.",
        "Try adding a fourth pigment that changes colour through a different mechanism (not anthocyanins), to add more contrast and fix the weak colour separation around pH 5-6.",
        "Set up the AI estimator separately for each camera or device, since cameras can show colours slightly differently."
      ]
    },
    "aboutBuild": "Our class's usual AI policy for this project caps AI use at Level 2 (brainstorming and planning only). This site is an approved exception: our teacher signed off on this group building the maximum-AI arm of a class comparison, set alongside a Level 2 group, so the class can compare AI-assisted and human-produced coursework directly. The pH-colour calibration numbers shown throughout are illustrative and AI-generated for the demo, grounded in real indicator chemistry, and are not real laboratory measurements. Everything else on this site (group members, procedure photos, the 60:40:20 mixing ratio, and the literature citations) reflects our actual work."
  },
  };
})(typeof window !== "undefined" ? window : globalThis);
