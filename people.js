var peopleData = {
  //  - People are listed in the order they're mentioned in Genesis.
  //  - Each number in a 'spouses' or 'children' array is the index of another person.
  //  - If a property (e.g. 'married') is not set, the attribute is not specified in the Bible.
  people: [
    {// 0
      names: ['Adam', 'Man'],
      gender: 'male',
      married: true,
      spouses: [1],
      children: [2,3,15]
    },
    {// 1
      names: ['Eve', 'Woman'],
      gender: 'female',
      married: true,
      spouses: [0],
      children: [2,3,15]
    },
    {// 2
      names: ['Cain'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [4]
    },
    {// 3
      names: ['Abel'],
      gender: 'male',
      spouses: [],
      children: []
    },
    {// 4
      names: ['Enoch'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [5]
    },
    {// 5
      names: ['Irad'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [6]
    },
    {// 6
      names: ['Mehujael'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [7]
    },
    {// 7
      names: ['Methushael'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [8]
    },
    {// 8
      names: ['Lamech'],
      gender: 'male',
      married: true,
      spouses: [9,10],
      children: [11,12,13,14]
    },
    {// 9
      names: ['Adah'],
      gender: 'female',
      married: true,
      spouses: [8],
      children: [11,12]
    },
    {// 10
      names: ['Zillah'],
      gender: 'female',
      married: true,
      spouses: [8],
      children: [13,14]
    },
    {// 11
      names: ['Jabal'],
      gender: 'male',
      married: true,
      spouses: [],
      children: []
    },
    {// 12
      names: ['Jubal'],
      gender: 'male',
      married: true,
      spouses: [],
      children: []
    },
    {// 13
      names: ['Tubal-cain'],
      gender: 'male',
      spouses: [],
      children: []
    },
    {// 14
      names: ['Naamah'],
      gender: 'female',
      spouses: [],
      children: []
    },
    {// 15
      names: ['Seth'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [16]
    },
    {// 16
      names: ['Enosh'],
      gender: 'male',
      spouses: [],
      children: []
    }
  ],

  // every data point present for each person has a matching scripture reference for citation:
  references: [
    {// Adam
      names: ['Gen 2:23', 'Gen 2:20'],
      gender: 'Gen 3:20',
      married: 'Gen 3:20',
      spouses: ['Gen 3:20'],
      children: ['Gen 4:1', 'Gen 4:2', 'Gen 4:25']
    },
    {// Eve
      names: ['Gen 2:23', 'Gen 3:20'],
      gender: 'Gen 3:20',
      married: 'Gen 3:20',
      spouses: ['Gen 3:20'],
      children: ['Gen 4:1', 'Gen 4:2', 'Gen 4:25']
    },
    {// Cain
      names: ['Gen 4:1'],
      gender: 'Gen 4:1',
      married: 'Gen 4:17',
      spouses: [],
      children: ['Gen 4:17']
    },
    {// Abel
      names: ['Gen 4:2'],
      gender: 'Gen 4:2',
      spouses: [],
      children: []
    },
    {// Enoch
      names: ['Gen 4:17'],
      gender: 'Gen 4:17',
      married: 'Gen 4:18',
      spouses: [],
      children: ['Gen 4:18']
    },
    {// Irad
      names: ['Gen 4:18'],
      gender: 'Gen 4:18',
      married: 'Gen 4:18',
      spouses: [],
      children: ['Gen 4:18']
    },
    {// Mehujael
      names: ['Gen 4:18'],
      gender: 'Gen 4:18',
      married: 'Gen 4:18',
      spouses: [],
      children: ['Gen 4:18']
    },
    {// Methushael
      names: ['Gen 4:18'],
      gender: 'Gen 4:18',
      married: 'Gen 4:18',
      spouses: [],
      children: ['Gen 4:18']
    },
    {// Lamech
      names: ['Gen 4:18'],
      gender: 'Gen 4:18',
      married: 'Gen 4:19',
      spouses: ['Gen 4:19', 'Gen 4:19'],
      children: ['Gen 4:20','Gen 4:21','Gen 4:22','Gen 4:22']
    },
    {// Adah
      names: ['Gen 4:19'],
      gender: 'Gen 4:19',
      married: 'Gen 4:19',
      spouses: ['Gen 4:19'],
      children: ['Gen 4:20','Gen 4:20-21']
    },
    {// Zillah
      names: ['Gen 4:19'],
      gender: 'Gen 4:19',
      married: 'Gen 4:19',
      spouses: ['Gen 4:19'],
      children: ['Gen 4:22','Gen 4:22']
    },
    {// Jabal
      names: ['Gen 4:20'],
      gender: 'Gen 4:20',
      married: 'Gen 4:20',
      spouses: [],
      children: []
    },
    {// Jubal
      names: ['Gen 4:21'],
      gender: 'Gen 4:21',
      married: 'Gen 4:21',
      spouses: [],
      children: []
    },
    {// Tubal-cain
      names: ['Gen 4:22'],
      gender: 'Gen 4:22',
      spouses: [],
      children: []
    },
    {// Tubal-cain
      names: ['Gen 4:22'],
      gender: 'Gen 4:22',
      spouses: [],
      children: []
    },
    {// Seth
      names: ['Gen 4:25'],
      gender: 'Gen 4:25',
      married: 'Gen 4:26',
      spouses: [],
      children: ['Gen 4:26']
    },
    {// Enosh
      names: ['Gen 4:26'],
      gender: 'Gen 4:26',
      spouses: [],
      children: []
    }
  ]
};