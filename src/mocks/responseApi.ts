import { IWord } from '../interfaces/IWord';

// export const response: IWord[] = [
//   {
//     "word": "keyboard",
//     "phonetic": "/ˈkiːbɔːd/",
//     "phonetics": [
//       {
//         "text": "/ˈkiːbɔːd/",
//         "audio": ""
//       },
//       {
//         "text": "/ˈkiːbɔːd/",
//         "audio": ""
//       },
//       {
//         "text": "/ˈkibɔɹd/",
//         "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
//         "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1755168",
//         "license": {
//           "name": "BY-SA 3.0",
//           "url": "https://creativecommons.org/licenses/by-sa/3.0"
//         }
//       }
//     ],
//     "meanings": [
//       {
//         "partOfSpeech": "noun",
//         "definitions": [
//           {
//             "definition": "(etc.) A set of keys used to operate a typewriter, computer etc.",
//             "synonyms": [],
//             "antonyms": []
//           },
//           {
//             "definition": "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
//             "synonyms": [],
//             "antonyms": []
//           },
//           {
//             "definition": "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
//             "synonyms": [],
//             "antonyms": []
//           }
//         ],
//         "synonyms": [
//           "electronic keyboard"
//         ],
//         "antonyms": []
//       },
//       {
//         "partOfSpeech": "verb",
//         "definitions": [
//           {
//             "definition": "To type on a computer keyboard.",
//             "synonyms": [],
//             "antonyms": [],
//             "example": "Keyboarding is the part of this job I hate the most."
//           }
//         ],
//         "synonyms": [],
//         "antonyms": []
//       }
//     ],
//     "license": {
//       "name": "CC BY-SA 3.0",
//       "url": "https://creativecommons.org/licenses/by-sa/3.0"
//     },
//     "sourceUrls": [
//       "https://en.wiktionary.org/wiki/keyboard"
//     ]
//   }
// ]

export const response: IWord[] = [
  {
    'word': 'perhaps',
    'phonetic': '/pəˈhæps/',
    'phonetics': [
      {
        'text': '/pəˈhæps/',
        'audio': 'https://api.dictionaryapi.dev/media/pronunciations/en/perhaps-uk.mp3',
        'sourceUrl': 'https://commons.wikimedia.org/w/index.php?curid=9023302',
        'license': {
          'name': 'BY 3.0 US',
          'url': 'https://creativecommons.org/licenses/by/3.0/us'
        }
      },
      {
        'text': '/pɚˈhæps/',
        'audio': 'https://api.dictionaryapi.dev/media/pronunciations/en/perhaps-us.mp3',
        'sourceUrl': 'https://commons.wikimedia.org/w/index.php?curid=1227454',
        'license': {
          'name': 'BY-SA 3.0',
          'url': 'https://creativecommons.org/licenses/by-sa/3.0'
        }
      }
    ],
    'meanings': [
      {
        'partOfSpeech': 'noun',
        'definitions': [
          {
            'definition': 'An uncertainty.',
            'synonyms': [],
            'antonyms': []
          }
        ],
        'synonyms': [],
        'antonyms': []
      },
      {
        'partOfSpeech': 'adverb',
        'definitions': [
          {
            'definition': 'Modifies a verb, indicating a lack of certainty.',
            'synonyms': [],
            'antonyms': [],
            'example': 'Perhaps John will come over for dinner.'
          },
          {
            'definition': 'By chance.',
            'synonyms': [],
            'antonyms': []
          }
        ],
        'synonyms': [
          'belike',
          'maybe',
          'mayhap',
          'mayhaps',
          'peradventure',
          'perchance'
        ],
        'antonyms': []
      }
    ],
    'license': {
      'name': 'CC BY-SA 3.0',
      'url': 'https://creativecommons.org/licenses/by-sa/3.0'
    },
    'sourceUrls': [
      'https://en.wiktionary.org/wiki/perhaps'
    ]
  }
];