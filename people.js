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
  scriptureCovered: 'Genesis 1-14',
  events: {
    beginning: {
      title: 'the beginning',
      references: {
        title: 'Gen 1:1'
      }
    },
    creation: {
      title: 'God created the heavens and the earth',
      startMarkers: [
        { event: 'beginning' }
      ],
      endMarkers: [
        { event: 'day6', offsetDays: 1 }
      ],
      references: {
        title: 'Gen 1:1',
        startMarkers: ['Gen 1:1'],
        endMarkers: ['Gen 1:31-2:1'],
        all: [
          'Gen 1-2'
        ]
      }
    },
    day1: {
      title: 'the first day',
      startMarkers: [
        { event: 'creation' }
      ],
      durationDays: 1,
      references: {
        title: 'Gen 1:5',
        startMarkers: ['Gen 1:1'],
        durationDays: 'Gen 1:5',
        all: [
          'Gen 1:1-5'
        ]
      }
    },
    day2: {
      title: 'the second day',
      startMarkers: [
        { event: 'creation', offsetDays: 1 }
      ],
      durationDays: 2,
      references: {
        title: 'Gen 1:8',
        startMarkers: ['Gen 1:5-6'],
        durationDays: 'Gen 1:8',
        all: [
          'Gen 1:6-8'
        ]
      }
    },
    day3: {
      title: 'the third day',
      startMarkers: [
        { event: 'creation', offsetDays: 2 }
      ],
      durationDays: 3,
      references: {
        title: 'Gen 1:13',
        startMarkers: ['Gen 1:8-9'],
        durationDays: 'Gen 1:13',
        all: [
          'Gen 1:9-13'
        ]
      }
    },
    day4: {
      title: 'the fourth day',
      startMarkers: [
        { event: 'creation', offsetDays: 3 }
      ],
      durationDays: 4,
      references: {
        title: 'Gen 1:19',
        startMarkers: ['Gen 1:13-14'],
        durationDays: 'Gen 1:19',
        all: [
          'Gen 1:14-19'
        ]
      }
    },
    day5: {
      title: 'the fifth day',
      startMarkers: [
        { event: 'creation', offsetDays: 4 }
      ],
      durationDays: 5,
      references: {
        title: 'Gen 1:23',
        startMarkers: ['Gen 1:19-20'],
        durationDays: 'Gen 1:23',
        all: [
          'Gen 1:20-23'
        ]
      }
    },
    day6: {
      title: 'the sixth day',
      startMarkers: [
        { event: 'creation', offsetDays: 5 }
      ],
      durationDays: 6,
      references: {
        title: 'Gen 1:31',
        startMarkers: ['Gen 1:23-24'],
        durationDays: 'Gen 1:31-2:2',
        all: [
          'Gen 1:24-2:1'
        ]
      }
    },
    day7: {
      title: 'the seventh day',
      startMarkers: [
        { event: 'creation', offsetDays: 6 }
      ],
      durationDays: 7,
      references: {
        title: 'Gen 2:2',
        startMarkers: ['Gen 2:2'],
        durationDays: 'Gen 2:2',
        all: [
          'Gen 2:2-3'
        ]
      }
    },
    men_call: {
      title: 'men began to call on Yahweh’s name'
    },
    flood: {
      title: 'the flood of waters came on the earth',
      startMarkers: [
        {
          event: 'birth_of_noah',
          offsetYears: 600
        }
      ],
      references: {
        title: 'Gen 7:6',
        startMarkers: ['Gen 7:6']
      }
    }
  },
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
      yearsLived: 950,
      references: {
        names: ['Gen 5:28-29'],
        gender: 'Gen 5:28-29',
        spouses: ['Gen 6:18'],
        children: ['Gen 5:32', 'Gen 5:32', 'Gen 5:32'],
        ageOfFatherAtBirth: 'Gen 5:28-29',
        yearsLived: 'Gen 9:29'
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
      children: ['elam', 'asshur', 'arpachshad', 'lud', 'aram'],
      otherChildren: true,
      ageOfFatherAtBirth: 502,
      yearsLived: 600,
      references: {
        names: ['Gen 5:32'],
        gender: 'Gen 6:10',
        spouses: ['Gen 6:18'],
        children: ['Gen 10:22', 'Gen 10:22', 'Gen 10:22', 'Gen 10:22', 'Gen 10:22'],
        otherChildren: 'Gen 11:11',
        ageOfFatherAtBirth: 'When Shem was 100 years old, he fathered Arpachshad two years after the flood: Gen 11:10. By "after the flood", what is meant is after the flood commenced in Noah\'s 600th year (Gen 7:11, 8:13, 9:28-29). Therefore, when Shem was 100 years old, Noah was 602, and Noah was 502 when Shem was born.',
        yearsLived: 'Gen 11:10-11'
      }
    },
    ham: {
      names: ['Ham'],
      gender: 'male',
      spouses: ['wife_of_ham'],
      children: ['canaan', 'cush', 'mizraim', 'put'],
      references: {
        names: ['Gen 5:32'],
        gender: 'Gen 6:10',
        spouses: ['Gen 6:18'],
        children: ['Gen 9:18', 'Gen 10:6', 'Gen 10:6', 'Gen 10:6']
      }
    },
    japheth: {
      names: ['Japheth'],
      gender: 'male',
      spouses: ['wife_of_japheth'],
      ageOfFatherAtBirth: 500,
      children: ['gomer', 'magog', 'madai', 'javan', 'tubal2', 'meshech', 'tiras'],
      references: {
        names: ['Gen 5:32'],
        gender: 'Gen 6:10',
        spouses: ['Gen 6:18'],
        ageOfFatherAtBirth: 'Gen 5:32; Gen 9:22, 24; Gen 7:11, 8:13; Gen 11:10',
        children: ['Gen 10:2', 'Gen 10:2', 'Gen 10:2', 'Gen 10:2', 'Gen 10:2', 'Gen 10:2', 'Gen 10:2']
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
      children: ['canaan'],
      references: {
        title: 'Gen 6:18',
        gender: 'Gen 6:18',
        spouses: ['Gen 6:18'],
        children: ['Gen 9:18']
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
    },
    canaan: {
      names: ['Canaan'],
      gender: 'male',
      children: ['sidon', 'heth'],
      references: {
        names: ['Gen 9:18'],
        gender: 'Gen 9:25',
        children: ['Gen 10:15', 'Gen 10:15']
      }
    },
    gomer: {
      names: ['Gomer'],
      gender: 'male',
      children: ['ashkenaz', 'riphath', 'togarmah'],
      references: {
        names: ['Gen 10:2'],
        gender: 'Gen 10:2',
        children: ['Gen 10:3', 'Gen 10:3', 'Gen 10:3']
      }
    },
    magog: {
      names: ['Magog'],
      gender: 'male',
      references: {
        names: ['Gen 10:2'],
        gender: 'Gen 10:2'
      }
    },
    madai: {
      names: ['Madai'],
      gender: 'male',
      references: {
        names: ['Gen 10:2'],
        gender: 'Gen 10:2'
      }
    },
    javan: {
      names: ['Javan'],
      gender: 'male',
      children: ['elishah', 'tarshish', 'kittim', 'dodanim'],
      references: {
        names: ['Gen 10:2'],
        gender: 'Gen 10:2',
        children: ['Gen 10:4', 'Gen 10:4', 'Gen 10:4', 'Gen 10:4']
      }
    },
    tubal2: {
      names: ['Tubal'],
      gender: 'male',
      references: {
        names: ['Gen 10:2'],
        gender: 'Gen 10:2'
      }
    },
    meshech: {
      names: ['Meshech'],
      gender: 'male',
      references: {
        names: ['Gen 10:2'],
        gender: 'Gen 10:2'
      }
    },
    tiras: {
      names: ['Tiras'],
      gender: 'male',
      references: {
        names: ['Gen 10:2'],
        gender: 'Gen 10:2'
      }
    },
    ashkenaz: {
      names: ['Ashkenaz'],
      gender: 'male',
      references: {
        names: ['Gen 10:3'],
        gender: 'Gen 10:3'
      }
    },
    riphath: {
      names: ['Riphath'],
      gender: 'male',
      references: {
        names: ['Gen 10:3'],
        gender: 'Gen 10:3'
      }
    },
    togarmah: {
      names: ['Togarmah'],
      gender: 'male',
      references: {
        names: ['Gen 10:3'],
        gender: 'Gen 10:3'
      }
    },
    elishah: {
      names: ['Elishah'],
      gender: 'male',
      references: {
        names: ['Gen 10:4'],
        gender: 'Gen 10:4'
      }
    },
    tarshish: {
      names: ['Tarshish'],
      gender: 'male',
      references: {
        names: ['Gen 10:4'],
        gender: 'Gen 10:4'
      }
    },
    kittim: {
      names: ['Kittim'],
      gender: 'male',
      references: {
        names: ['Gen 10:4'],
        gender: 'Gen 10:4'
      }
    },
    dodanim: {
      names: ['Dodanim'],
      gender: 'male',
      references: {
        names: ['Gen 10:4'],
        gender: 'Gen 10:4'
      }
    },
    cush: {
      names: ['Cush'],
      gender: 'male',
      children: ['seba', 'havilah', 'sabtah', 'raamah', 'sabteca', 'nimrod'],
      references: {
        names: ['Gen 10:6'],
        gender: 'Gen 10:6',
        children: ['Gen 10:7', 'Gen 10:7', 'Gen 10:7', 'Gen 10:7', 'Gen 10:7', 'Gen 10:8']
      }
    },
    mizraim: {
      names: ['Mizraim'],
      gender: 'male',
      children: ['ludim','anamim','lehabim','naphtuhim','pathrusim','casluhim','caphtorim'],
      references: {
        names: ['Gen 10:6'],
        gender: 'Gen 10:6',
        children: ['Gen 10:13', 'Gen 10:13', 'Gen 10:13', 'Gen 10:13', 'Gen 10:13-14', 'Gen 10:13-14', 'Gen 10:13-14']
      }
    },
    put: {
      names: ['Put'],
      gender: 'male',
      references: {
        names: ['Gen 10:6'],
        gender: 'Gen 10:6'
      }
    },
    seba: {
      names: ['Seba'],
      gender: 'male',
      references: {
        names: ['Gen 10:7'],
        gender: 'Gen 10:7'
      }
    },
    havilah: {
      names: ['Havilah'],
      gender: 'male',
      references: {
        names: ['Gen 10:7'],
        gender: 'Gen 10:7'
      }
    },
    sabtah: {
      names: ['Sabtah'],
      gender: 'male',
      references: {
        names: ['Gen 10:7'],
        gender: 'Gen 10:7'
      }
    },
    raamah: {
      names: ['Raamah'],
      gender: 'male',
      children: ['sheba', 'dedan'],
      references: {
        names: ['Gen 10:7'],
        gender: 'Gen 10:7',
        children: ['Gen 10:7', 'Gen 10:7']
      }
    },
    sabteca: {
      names: ['Sabteca'],
      gender: 'male',
      references: {
        names: ['Gen 10:7'],
        gender: 'Gen 10:7'
      }
    },
    sheba: {
      names: ['Sheba'],
      gender: 'male',
      references: {
        names: ['Gen 10:7'],
        gender: 'Gen 10:7'
      }
    },
    dedan: {
      names: ['Dedan'],
      gender: 'male',
      references: {
        names: ['Gen 10:7'],
        gender: 'Gen 10:7'
      }
    },
    nimrod: {
      names: ['Nimrod'],
      gender: 'male',
      references: {
        names: ['Gen 10:8'],
        gender: 'Gen 10:8'
      }
    },
    ludim: {
      names: ['Ludim'],
      references: {
        names: ['Gen 10:13']
      }
    },
    anamim: {
      names: ['Anamim'],
      references: {
        names: ['Gen 10:13']
      }
    },
    lehabim: {
      names: ['Lehabim'],
      references: {
        names: ['Gen 10:13']
      }
    },
    naphtuhim: {
      names: ['Naphtuhim'],
      references: {
        names: ['Gen 10:13']
      }
    },
    pathrusim: {
      names: ['Pathrusim'],
      references: {
        names: ['Gen 10:14']
      }
    },
    casluhim: {
      names: ['Casluhim'],
      references: {
        names: ['Gen 10:14']
      }
    },
    caphtorim: {
      names: ['Caphtorim'],
      references: {
        names: ['Gen 10:14']
      }
    },
    sidon: {
      names: ['Sidon'],
      references: {
        names: ['Gen 10:15']
      }
    },
    heth: {
      names: ['Heth'],
      references: {
        names: ['Gen 10:15']
      }
    },
    elam: {
      names: ['Elam'],
      gender: 'male',
      references: {
        names: ['Gen 10:22'],
        gender: 'Gen 10:22'
      }
    },
    asshur: {
      names: ['Asshur'],
      gender: 'male',
      references: {
        names: ['Gen 10:22'],
        gender: 'Gen 10:22'
      }
    },
    arpachshad: {
      names: ['Arpachshad'],
      gender: 'male',
      children: ['shelah'],
      otherChildren: true,
      ageOfFatherAtBirth: 100,
      yearsLived: 438,
      references: {
        names: ['Gen 10:22'],
        gender: 'Gen 10:22',
        children: ['Gen 10:24'],
        otherChildren: 'Gen 11:13',
        ageOfFatherAtBirth: 'Gen 11:10',
        yearsLived: 'Gen 11:12-13'
      }
    },
    lud: {
      names: ['Lud'],
      gender: 'male',
      references: {
        names: ['Gen 10:22'],
        gender: 'Gen 10:22'
      }
    },
    aram: {
      names: ['Aram'],
      gender: 'male',
      children: ['uz', 'hul', 'gether', 'mash'],
      references: {
        names: ['Gen 10:22'],
        gender: 'Gen 10:22',
        children: ['Gen 10:23', 'Gen 10:23', 'Gen 10:23', 'Gen 10:23']
      }
    },
    uz: {
      names: ['Uz'],
      gender: 'male',
      references: {
        names: ['Gen 10:23'],
        gender: 'Gen 10:23'
      }
    },
    hul: {
      names: ['Hul'],
      gender: 'male',
      references: {
        names: ['Gen 10:23'],
        gender: 'Gen 10:23'
      }
    },
    gether: {
      names: ['Gether'],
      gender: 'male',
      references: {
        names: ['Gen 10:23'],
        gender: 'Gen 10:23'
      }
    },
    mash: {
      names: ['Mash'],
      gender: 'male',
      references: {
        names: ['Gen 10:23'],
        gender: 'Gen 10:23'
      }
    },
    shelah: {
      names: ['Shelah'],
      gender: 'male',
      children: ['eber'],
      otherChildren: true,
      ageOfFatherAtBirth: 35,
      yearsLived: 433,
      references: {
        names: ['Gen 10:24'],
        gender: 'Gen 10:24',
        children: ['Gen 10:24'],
        otherChildren: 'Gen 11:15',
        ageOfFatherAtBirth: 'Gen 11:12',
        yearsLived: 'Gen 11:14-15'
      }
    },
    eber: {
      names: ['Eber'],
      gender: 'male',
      children: ['peleg', 'joktan'],
      otherChildren: true,
      yearsLived: 464,
      ageOfFatherAtBirth: 30,
      references: {
        names: ['Gen 10:24'],
        gender: 'Gen 11:16',
        children: ['Gen 10:25', 'Gen 10:25'],
        otherChildren: 'Gen 11:17',
        yearsLived: 'Gen 11:16-17',
        ageOfFatherAtBirth: 'Gen 11:14'
      }
    },
    peleg: {
      names: ['Peleg'],
      gender: 'male',
      children: ['reu'],
      otherChildren: true,
      ageOfFatherAtBirth: 34,
      yearsLived: 239,
      references: {
        names: ['Gen 10:25'],
        gender: 'Gen 10:25',
        children: ['Gen 11:18'],
        otherChildren: 'Gen 11:19',
        ageOfFatherAtBirth: 'Gen 11:16',
        yearsLived: 'Gen 11:18-19'
      }
    },
    joktan: {
      names: ['Joktan'],
      gender: 'male',
      children: ['almodad', 'sheleph', 'hazarmaveth', 'jerah', 'hadoram', 'uzal', 'diklah', 'obal', 'abimael', 'sheba2', 'ophir', 'havilah', 'jobab'],
      references: {
        names: ['Gen 10:25'],
        gender: 'Gen 10:25',
        children: ['Gen 10:26-29', 'Gen 10:26-29', 'Gen 10:26-29', 'Gen 10:26-29', 'Gen 10:26-29', 'Gen 10:26-29', 'Gen 10:26-29', 'Gen 10:26-29', 'Gen 10:26-29', 'Gen 10:26-29', 'Gen 10:26-29', 'Gen 10:26-29', 'Gen 10:26-29']
      }
    },
    almodad: {
      names: ['Almodad'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    sheleph: {
      names: ['Sheleph'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    hazarmaveth: {
      names: ['Hazarmaveth'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    jerah: {
      names: ['Jerah'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    hadoram: {
      names: ['Hadoram'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    uzal: {
      names: ['Uzal'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    diklah: {
      names: ['Diklah'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    obal: {
      names: ['Obal'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    abimael: {
      names: ['Abimael'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    sheba2: {
      names: ['Sheba'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    ophir: {
      names: ['Ophir'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    havilah: {
      names: ['Havilah'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    jobab: {
      names: ['Jobab'],
      gender: 'male',
      references: {
        names: ['Gen 10:26-29'],
        gender: 'Gen 10:26-29'
      }
    },
    reu: {
      names: ['Reu'],
      gender: 'male',
      children: ['serug'],
      otherChildren: true,
      yearsLived: 239,
      ageOfFatherAtBirth: 30,
      references: {
        names: ['Gen 11:18'],
        gender: 'Gen 11:20',
        children: ['Gen 11:20'],
        otherChildren: 'Gen 11:21',
        yearsLived: 'Gen 11:20-21',
        ageOfFatherAtBirth: 'Gen 11:18'
      }
    },
    serug: {
      names: ['Serug'],
      gender: 'male',
      children: ['nahor'],
      otherChildren: true,
      yearsLived: 230,
      ageOfFatherAtBirth: 32,
      references: {
        names: ['Gen 11:20'],
        gender: 'Gen 11:22',
        children: ['Gen 11:22'],
        otherChildren: 'Gen 11:23',
        yearsLived: 'Gen 11:22-23',
        ageOfFatherAtBirth: 'Gen 11:20'
      }
    },
    nahor: {
      names: ['Nahor'],
      gender: 'male',
      children: ['terah'],
      otherChildren: true,
      yearsLived: 148,
      ageOfFatherAtBirth: 30,
      references: {
        names: ['Gen 11:22'],
        gender: 'Gen 11:24',
        children: ['Gen 11:24'],
        otherChildren: 'Gen 11:25',
        yearsLived: 'Gen 11:24-25',
        ageOfFatherAtBirth: 'Gen 11:22'
      }
    },
    terah: {
      names: ['Terah'],
      gender: 'male',
      children: ['abram', 'nahor2', 'haran'],
      yearsLived: 205,
      ageOfFatherAtBirth: 29,
      references: {
        names: ['Gen 11:24'],
        gender: 'Gen 11:26',
        children: ['Gen 11:26', 'Gen 11:26', 'Gen 11:26'],
        yearsLived: 'Gen 11:32',
        ageOfFatherAtBirth: 'Gen 11:24'
      }
    },
    abram: {
      names: ['Abram'],
      gender: 'male',
      spouses: ['sarai'],
      ageOfFatherAtBirth: 130,
      yearsLived: 175,
      references: {
        names: ['Gen 11:26'],
        gender: 'Gen 11:29',
        spouses: ['Gen 11:29'],
        ageOfFatherAtBirth: 'Gen 11:32-12:4',
        yearsLived: 'Gen 25:7',
      }
    },
    nahor2: {
      names: ['Nahor'],
      gender: 'male',
      spouses: ['milcah'],
      references: {
        names: ['Gen 11:26'],
        gender: 'Gen 11:29',
        spouses: ['Gen 11:29']
      }
    },
    haran: {
      names: ['Haran'],
      gender: 'male',
      children: ['lot', 'milcah', 'iscah'],
      references: {
        names: ['Gen 11:26'],
        gender: 'Gen 11:27',
        children: ['Gen 11:27', 'Gen 11:29', 'Gen 11:29']
      }
    },
    lot: {
      names: ['Lot'],
      gender: 'male',
      references: {
        names: ['Gen 11:27'],
        gender: 'Gen 11:31'
      }
    },
    sarai: {
      names: ['Sarai'],
      gender: 'female',
      spouses: ['abram'],
      references: {
        names: ['Gen 11:29'],
        gender: 'Gen 11:29',
        spouses: ['Gen 11:29']
      }
    },
    milcah: {
      names: ['Milcah'],
      gender: 'female',
      spouses: ['nahor2'],
      references: {
        names: ['Gen 11:29'],
        gender: 'Gen 11:29',
        spouses: ['Gen 11:29']
      }
    },
    iscah: {
      names: ['Iscah'],
      references: {
        names: ['Gen 11:29']
      }
    },
    pharaoh: {
      names: ['Pharaoh'],
      gender: 'male',
      references: {
        names: ['Gen 12:15'],
        gender: 'Gen 12:16'
      }
    },
    amraphel: {
      names: ['Amraphel'],
      references: {
        names: ['Gen 14:1']
      }
    },
    arioch: {
      names: ['Arioch'],
      references: {
        names: ['Gen 14:1']
      }
    },
    chedorlaomer: {
      names: ['Chedorlaomer'],
      gender: 'male',
      references: {
        names: ['Gen 14:1'],
        gender: 'Gen 14:5'
      }
    },
    tidal: {
      names: ['Tidal'],
      references: {
        names: ['Gen 14:1']
      }
    },
    bera: {
      names: ['Bera'],
      references: {
        names: ['Gen 14:2']
      }
    },
    birsha: {
      names: ['Birsha'],
      references: {
        names: ['Gen 14:2']
      }
    },
    shinab: {
      names: ['Shinab'],
      references: {
        names: ['Gen 14:2']
      }
    },
    shemeber: {
      names: ['Shemeber'],
      references: {
        names: ['Gen 14:2']
      }
    },
    king_of_bela: {
      title: 'king_of_bela',
      references: {
        title: 'Gen 14:2'
      }
    },
    fugitive: {
      title: 'a fugitive',
      references: {
        title: 'Gen 14:13'
      }
    },
    mamre: {
      names: ['Mamre'],
      gender: 'male',
      references: {
        names: ['Gen 14:13'],
        gender: 'Gen 14:13'
      }
    },
    eshcol: {
      names: ['Eshcol'],
      gender: 'male',
      references: {
        names: ['Gen 14:13'],
        gender: 'Gen 14:24'
      }
    },
    aner: {
      names: ['Aner'],
      gender: 'male',
      references: {
        names: ['Gen 14:13'],
        gender: 'Gen 14:24'
      }
    },
    melchizedek: {
      names: ['Melchizedek'],
      gender: 'male',
      references: {
        names: ['Gen 14:18'],
        gender: 'Gen 14:18'
      }
    }
  }
};