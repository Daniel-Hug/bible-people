/*
  Format
    - People are listed in the order they're mentioned in Genesis.
    - Each number in a 'spouses' or 'children' array is the index of another person.
    - If a property is omitted, it is unknown.
    - Every data point present for each person cites a scripture reference under "references".

  people.json
    - This file (people.js) is a concise version of
    people.json and is used to generate people.json.
    - The people.json file adds a "father" and "mother" property to
    every person mentioned under a "children" property in this file.
    - So these are all the properties which can appear in a person object in people.json:
      - names: array of strings
      - title: string
      - gender: string
      - spouses: array of person indices
      - children: array of person indices
      - father: person index
      - mother: person index
      - ageOfFatherAtBirth: integer
      - yearsLived: integer
      - otherChildren: boolean
      - references: object
*/

var peopleData = {
  people: {
    adam: {
      names: ['Adam', 'Man'],
      gender: 'male',
      spouses: ['eve'],
      children: ['cain','abel','seth'],
      yearsLived: 930,
      otherChildren: true,
      references: {
        names: ['Gen 2:23', 'Gen 2:20'],
        gender: 'Gen 3:20',
        spouses: ['Gen 3:20'],
        children: ['Gen 4:1', 'Gen 4:2', 'Gen 4:25'],
        yearsLived: 'Gen 5:5',
        otherChildren: 'Gen 5:4'
      }
    },
    eve: {
      names: ['Eve', 'Woman'],
      gender: 'female',
      spouses: ['adam'],
      children: ['cain','abel','seth'],
      otherChildren: true,
      references: {
        names: ['Gen 2:23', 'Gen 3:20'],
        gender: 'Gen 3:20',
        spouses: ['Gen 3:20'],
        children: ['Gen 4:1', 'Gen 4:2', 'Gen 4:25'],
        otherChildren: 'Gen 5:4'
      }
    },
    cain: {
      names: ['Cain'],
      gender: 'male',
      spouses: ['wife_of_cain'],
      children: ['enoch'],
      references: {
        names: ['Gen 4:1'],
        gender: 'Gen 4:1',
        spouses: ['Gen 4:17'],
        children: ['Gen 4:17']
      }
    },
    wife_of_cain: {
      title: 'Cain\'s wife',
      gender: 'female',
      spouses: ['cain'],
      children: ['enoch'],
      references: {
        title: 'Gen 4:17',
        gender: 'Gen 4:17',
        spouses: ['Gen 4:17'],
        children: ['Gen 4:17']
      }
    },
    abel: {
      names: ['Abel'],
      gender: 'male',
      children: [],
      references: {
        names: ['Gen 4:2'],
        gender: 'Gen 4:2',
        children: []
      }
    },
    enoch: {
      names: ['Enoch'],
      gender: 'male',
      children: ['irad'],
      references: {
        names: ['Gen 4:17'],
        gender: 'Gen 4:17',
        children: ['Gen 4:18']
      }
    },
    irad: {
      names: ['Irad'],
      gender: 'male',
      children: ['mehujael'],
      references: {
        names: ['Gen 4:18'],
        gender: 'Gen 4:18',
        children: ['Gen 4:18']
      }
    },
    mehujael: {
      names: ['Mehujael'],
      gender: 'male',
      children: ['methushael'],
      references: {
        names: ['Gen 4:18'],
        gender: 'Gen 4:18',
        children: ['Gen 4:18']
      }
    },
    methushael: {
      names: ['Methushael'],
      gender: 'male',
      children: ['lamech'],
      references: {
        names: ['Gen 4:18'],
        gender: 'Gen 4:18',
        children: ['Gen 4:18']
      }
    },
    lamech: {
      names: ['Lamech'],
      gender: 'male',
      spouses: ['adah','zillah'],
      children: ['jabal','jubal','tubal','naamah'],
      references: {
        names: ['Gen 4:18'],
        gender: 'Gen 4:18',
        spouses: ['Gen 4:19', 'Gen 4:19'],
        children: ['Gen 4:20','Gen 4:21','Gen 4:22','Gen 4:22']
      }
    },
    adah: {
      names: ['Adah'],
      gender: 'female',
      spouses: ['lamech'],
      children: ['jabal','jubal'],
      references: {
        names: ['Gen 4:19'],
        gender: 'Gen 4:19',
        spouses: ['Gen 4:19'],
        children: ['Gen 4:20','Gen 4:20-21']
      }
    },
    zillah: {
      names: ['Zillah'],
      gender: 'female',
      spouses: ['lamech'],
      children: ['tubal','naamah'],
      references: {
        names: ['Gen 4:19'],
        gender: 'Gen 4:19',
        spouses: ['Gen 4:19'],
        children: ['Gen 4:22','Gen 4:22']
      }
    },
    jabal: {
      names: ['Jabal'],
      gender: 'male',
      references: {
        names: ['Gen 4:20'],
        gender: 'Gen 4:20'
      }
    },
    jubal: {
      names: ['Jubal'],
      gender: 'male',
      references: {
        names: ['Gen 4:21'],
        gender: 'Gen 4:21'
      }
    },
    tubal: {
      names: ['Tubal-cain'],
      gender: 'male',
      references: {
        names: ['Gen 4:22'],
        gender: 'Gen 4:22'
      }
    },
    naamah: {
      names: ['Naamah'],
      gender: 'female',
      references: {
        names: ['Gen 4:22'],
        gender: 'Gen 4:22'
      }
    },
    seth: {
      names: ['Seth'],
      gender: 'male',
      children: ['enosh'],
      ageOfFatherAtBirth: 130,
      otherChildren: true,
      yearsLived: 912,
      references: {
        names: ['Gen 4:25'],
        gender: 'Gen 4:25',
        children: ['Gen 4:26'],
        ageOfFatherAtBirth: 'Gen 5:3',
        otherChildren: 'Gen 5:7',
        yearsLived: 'Gen 5:8'
      }
    },
    enosh: {
      names: ['Enosh'],
      gender: 'male',
      children: ['kenan'],
      ageOfFatherAtBirth: 105,
      otherChildren: true,
      yearsLived: 905,
      references: {
        names: ['Gen 4:26'],
        gender: 'Gen 4:26',
        children: ['Gen 5:9'],
        ageOfFatherAtBirth: 'Gen 5:6',
        otherChildren: 'Gen 5:10',
        yearsLived: 'Gen 5:11'
      }
    },
    kenan: {
      names: ['Kenan'],
      gender: 'male',
      children: ['mahalalel'],
      ageOfFatherAtBirth: 90,
      otherChildren: true,
      yearsLived: 910,
      references: {
        names: ['Gen 5:9'],
        gender: 'Gen 5:12',
        children: ['Gen 5:12'],
        ageOfFatherAtBirth: 'Gen 5:9',
        otherChildren: 'Gen 5:13',
        yearsLived: 'Gen 5:14'
      }
    },
    mahalalel: {
      names: ['Mahalalel'],
      gender: 'male',
      children: ['jared'],
      ageOfFatherAtBirth: 70,
      otherChildren: true,
      yearsLived: 895,
      references: {
        names: ['Gen 5:12'],
        gender: 'Gen 5:15',
        children: ['Gen 5:15'],
        ageOfFatherAtBirth: 'Gen 5:12',
        otherChildren: 'Gen 5:16',
        yearsLived: 'Gen 5:17'
      }
    },
    jared: {
      names: ['Jared'],
      gender: 'male',
      children: ['enoch2'],
      ageOfFatherAtBirth: 65,
      otherChildren: true,
      yearsLived: 962,
      references: {
        names: ['Gen 5:15'],
        gender: 'Gen 5:18',
        children: ['Gen 5:18'],
        ageOfFatherAtBirth: 'Gen 5:15',
        otherChildren: 'Gen 5:19',
        yearsLived: 'Gen 5:20'
      }
    },
    enoch2: {
      names: ['Enoch'],
      gender: 'male',
      children: ['methuselah'],
      ageOfFatherAtBirth: 62,
      otherChildren: true,
      yearsLived: 365,
      references: {
        names: ['Gen 5:18'],
        gender: 'Gen 5:21',
        children: ['Gen 5:21'],
        ageOfFatherAtBirth: 'Gen 5:18',
        otherChildren: 'Gen 5:22',
        yearsLived: 'Gen 5:23'
      }
    },
    methuselah: {
      names: ['Methuselah'],
      gender: 'male',
      children: ['lamech2'],
      ageOfFatherAtBirth: 65,
      otherChildren: true,
      yearsLived: 969,
      references: {
        names: ['Gen 5:21'],
        gender: 'Gen 5:25',
        children: ['Gen 5:25'],
        ageOfFatherAtBirth: 'Gen 5:21',
        otherChildren: 'Gen 5:26',
        yearsLived: 'Gen 5:27'
      }
    },
    lamech2: {
      names: ['Lamech'],
      gender: 'male',
      children: ['noah'],
      ageOfFatherAtBirth: 187,
      otherChildren: true,
      yearsLived: 777,
      references: {
        names: ['Gen 5:25'],
        gender: 'Gen 5:28',
        children: ['Gen 5:28-29'],
        ageOfFatherAtBirth: 'Gen 5:25',
        otherChildren: 'Gen 5:30',
        yearsLived: 'Gen 5:31'
      }
    },
    noah: {
      names: ['Noah'],
      gender: 'male',
      spouses: ['wife_of_noah'],
      children: ['shem', 'ham', 'japheth'],
      ageOfFatherAtBirth: 182,
      references: {
        names: ['Gen 5:28-29'],
        gender: 'Gen 5:28-29',
        spouses: ['Gen 6:18'],
        children: ['Gen 5:32', 'Gen 5:32', 'Gen 5:32'],
        ageOfFatherAtBirth: 'Gen 5:28-29'
      }
    },
    wife_of_noah: {
      title: 'Noah\'s wife',
      gender: 'female',
      spouses: ['noah'],
      children: ['shem', 'ham', 'japheth'],
      references: {
        title: 'Gen 6:18',
        gender: 'Gen 6:18',
        spouses: ['Gen 6:18'],
        children: ['Gen 5:32', 'Gen 5:32', 'Gen 5:32']
      }
    },
    shem: {
      names: ['Shem'],
      gender: 'male',
      spouses: ['wife_of_shem'],
      references: {
        names: ['Gen 5:32'],
        gender: 'Gen 6:10',
        spouses: ['Gen 6:18']
      }
    },
    ham: {
      names: ['Ham'],
      gender: 'male',
      spouses: ['wife_of_ham'],
      references: {
        names: ['Gen 5:32'],
        gender: 'Gen 6:10',
        spouses: ['Gen 6:18']
      }
    },
    japheth: {
      names: ['Japheth'],
      gender: 'male',
      spouses: ['wife_of_japheth'],
      references: {
        names: ['Gen 5:32'],
        gender: 'Gen 6:10',
        spouses: ['Gen 6:18']
      }
    },
    wife_of_shem: {
      title: 'Shem\'s wife',
      gender: 'female',
      spouses: ['shem'],
      references: {
        title: 'Gen 6:18',
        gender: 'Gen 6:18',
        spouses: ['Gen 6:18']
      }
    },
    wife_of_ham: {
      title: 'Ham\'s wife',
      gender: 'female',
      spouses: ['ham'],
      references: {
        title: 'Gen 6:18',
        gender: 'Gen 6:18',
        spouses: ['Gen 6:18']
      }
    },
    wife_of_japheth: {
      title: 'Japheth\'s wife',
      gender: 'female',
      spouses: ['japheth'],
      references: {
        title: 'Gen 6:18',
        gender: 'Gen 6:18',
        spouses: ['Gen 6:18']
      }
    }
  }
};