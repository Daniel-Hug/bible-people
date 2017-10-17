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
      - gender: string
      - married: boolean
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
  people: [
    {// 0
      names: ['Adam', 'Man'],
      gender: 'male',
      married: true,
      spouses: [1],
      children: [2,3,15],
      yearsLived: 930,
      otherChildren: true,
      references: {
        names: ['Gen 2:23', 'Gen 2:20'],
        gender: 'Gen 3:20',
        married: 'Gen 3:20',
        spouses: ['Gen 3:20'],
        children: ['Gen 4:1', 'Gen 4:2', 'Gen 4:25'],
        yearsLived: 'Gen 5:5',
        otherChildren: 'Gen 5:4'
      }
    },
    {// 1
      names: ['Eve', 'Woman'],
      gender: 'female',
      married: true,
      spouses: [0],
      children: [2,3,15],
      otherChildren: true,
      references: {
        names: ['Gen 2:23', 'Gen 3:20'],
        gender: 'Gen 3:20',
        married: 'Gen 3:20',
        spouses: ['Gen 3:20'],
        children: ['Gen 4:1', 'Gen 4:2', 'Gen 4:25'],
        otherChildren: 'Gen 5:4'
      }
    },
    {// 2
      names: ['Cain'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [4],
      references: {
        names: ['Gen 4:1'],
        gender: 'Gen 4:1',
        married: 'Gen 4:17',
        spouses: [],
        children: ['Gen 4:17']
      }
    },
    {// 3
      names: ['Abel'],
      gender: 'male',
      spouses: [],
      children: [],
      references: {
        names: ['Gen 4:2'],
        gender: 'Gen 4:2',
        spouses: [],
        children: []
      }
    },
    {// 4
      names: ['Enoch'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [5],
      references: {
        names: ['Gen 4:17'],
        gender: 'Gen 4:17',
        married: 'Gen 4:18',
        spouses: [],
        children: ['Gen 4:18']
      }
    },
    {// 5
      names: ['Irad'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [6],
      references: {
        names: ['Gen 4:18'],
        gender: 'Gen 4:18',
        married: 'Gen 4:18',
        spouses: [],
        children: ['Gen 4:18']
      }
    },
    {// 6
      names: ['Mehujael'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [7],
      references: {
        names: ['Gen 4:18'],
        gender: 'Gen 4:18',
        married: 'Gen 4:18',
        spouses: [],
        children: ['Gen 4:18']
      }
    },
    {// 7
      names: ['Methushael'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [8],
      references: {
        names: ['Gen 4:18'],
        gender: 'Gen 4:18',
        married: 'Gen 4:18',
        spouses: [],
        children: ['Gen 4:18']
      }
    },
    {// 8
      names: ['Lamech'],
      gender: 'male',
      married: true,
      spouses: [9,10],
      children: [11,12,13,14],
      references: {
        names: ['Gen 4:18'],
        gender: 'Gen 4:18',
        married: 'Gen 4:19',
        spouses: ['Gen 4:19', 'Gen 4:19'],
        children: ['Gen 4:20','Gen 4:21','Gen 4:22','Gen 4:22']
      }
    },
    {// 9
      names: ['Adah'],
      gender: 'female',
      married: true,
      spouses: [8],
      children: [11,12],
      references: {
        names: ['Gen 4:19'],
        gender: 'Gen 4:19',
        married: 'Gen 4:19',
        spouses: ['Gen 4:19'],
        children: ['Gen 4:20','Gen 4:20-21']
      }
    },
    {// 10
      names: ['Zillah'],
      gender: 'female',
      married: true,
      spouses: [8],
      children: [13,14],
      references: {
        names: ['Gen 4:19'],
        gender: 'Gen 4:19',
        married: 'Gen 4:19',
        spouses: ['Gen 4:19'],
        children: ['Gen 4:22','Gen 4:22']
      }
    },
    {// 11
      names: ['Jabal'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [],
      references: {
        names: ['Gen 4:20'],
        gender: 'Gen 4:20',
        married: 'Gen 4:20',
        spouses: [],
        children: []
      }
    },
    {// 12
      names: ['Jubal'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [],
      references: {
        names: ['Gen 4:21'],
        gender: 'Gen 4:21',
        married: 'Gen 4:21',
        spouses: [],
        children: []
      }
    },
    {// 13
      names: ['Tubal-cain'],
      gender: 'male',
      spouses: [],
      children: [],
      references: {
        names: ['Gen 4:22'],
        gender: 'Gen 4:22',
        spouses: [],
        children: []
      }
    },
    {// 14
      names: ['Naamah'],
      gender: 'female',
      spouses: [],
      children: [],
      references: {
        names: ['Gen 4:22'],
        gender: 'Gen 4:22',
        spouses: [],
        children: []
      }
    },
    {// 15
      names: ['Seth'],
      gender: 'male',
      married: true,
      spouses: [],
      children: [16],
      ageOfFatherAtBirth: 130,
      otherChildren: true,
      yearsLived: 912,
      references: {
        names: ['Gen 4:25'],
        gender: 'Gen 4:25',
        married: 'Gen 4:26',
        spouses: [],
        children: ['Gen 4:26'],
        ageOfFatherAtBirth: 'Gen 5:3',
        otherChildren: 'Gen 5:7',
        yearsLived: 'Gen 5:8'
      }
    },
    {// 16
      names: ['Enosh'],
      gender: 'male',
      spouses: [],
      children: [17],
      ageOfFatherAtBirth: 105,
      otherChildren: true,
      yearsLived: 905,
      references: {
        names: ['Gen 4:26'],
        gender: 'Gen 4:26',
        spouses: [],
        children: ['Gen 5:9'],
        ageOfFatherAtBirth: 'Gen 5:6',
        otherChildren: 'Gen 5:10',
        yearsLived: 'Gen 5:11'
      }
    },
    {// 17
      names: ['Kenan'],
      gender: 'male',
      spouses: [],
      children: [18],
      ageOfFatherAtBirth: 90,
      otherChildren: true,
      yearsLived: 910,
      references: {
        names: ['Gen 5:9'],
        gender: 'Gen 5:12',
        spouses: [],
        children: ['Gen 5:12'],
        ageOfFatherAtBirth: 'Gen 5:9',
        otherChildren: 'Gen 5:13',
        yearsLived: 'Gen 5:14'
      }
    },
    {// 18
      names: ['Mahalalel'],
      gender: 'male',
      spouses: [],
      children: [19],
      ageOfFatherAtBirth: 70,
      otherChildren: true,
      yearsLived: 895,
      references: {
        names: ['Gen 5:12'],
        gender: 'Gen 5:15',
        spouses: [],
        children: ['Gen 5:15'],
        ageOfFatherAtBirth: 'Gen 5:12',
        otherChildren: 'Gen 5:16',
        yearsLived: 'Gen 5:17'
      }
    },
    {// 19
      names: ['Jared'],
      gender: 'male',
      spouses: [],
      children: [20],
      ageOfFatherAtBirth: 65,
      otherChildren: true,
      yearsLived: 962,
      references: {
        names: ['Gen 5:15'],
        gender: 'Gen 5:18',
        spouses: [],
        children: ['Gen 5:18'],
        ageOfFatherAtBirth: 'Gen 5:15',
        otherChildren: 'Gen 5:19',
        yearsLived: 'Gen 5:20'
      }
    },
    {// 20
      names: ['Enoch'],
      gender: 'male',
      spouses: [],
      children: [21],
      ageOfFatherAtBirth: 62,
      otherChildren: true,
      yearsLived: 365,
      references: {
        names: ['Gen 5:18'],
        gender: 'Gen 5:21',
        spouses: [],
        children: ['Gen 5:21'],
        ageOfFatherAtBirth: 'Gen 5:18',
        otherChildren: 'Gen 5:22',
        yearsLived: 'Gen 5:23'
      }
    },
    {// 21
      names: ['Methuselah'],
      gender: 'male',
      spouses: [],
      children: [22],
      ageOfFatherAtBirth: 65,
      otherChildren: true,
      yearsLived: 969,
      references: {
        names: ['Gen 5:21'],
        gender: 'Gen 5:25',
        spouses: [],
        children: ['Gen 5:25'],
        ageOfFatherAtBirth: 'Gen 5:21',
        otherChildren: 'Gen 5:26',
        yearsLived: 'Gen 5:27'
      }
    },
    {// 22
      names: ['Lamech'],
      gender: 'male',
      spouses: [],
      children: [23],
      ageOfFatherAtBirth: 187,
      otherChildren: true,
      yearsLived: 777,
      references: {
        names: ['Gen 5:25'],
        gender: 'Gen 5:28',
        spouses: [],
        children: ['Gen 5:28-29'],
        ageOfFatherAtBirth: 'Gen 5:25',
        otherChildren: 'Gen 5:30',
        yearsLived: 'Gen 5:31'
      }
    },
    {// 23
      names: ['Noah'],
      gender: 'male',
      spouses: [],
      children: [24, 25, 26],
      ageOfFatherAtBirth: 182,
      references: {
        names: ['Gen 5:28-29'],
        gender: 'Gen 5:28-29',
        spouses: [],
        children: ['Gen 5:32', 'Gen 5:32', 'Gen 5:32'],
        ageOfFatherAtBirth: 'Gen 5:28-29'
      }
    },
    {// 24
      names: ['Shem'],
      gender: 'male',
      ageOfFatherAtBirth: 500,
      references: {
        names: ['Gen 5:32'],
        gender: 'Gen 6:10',
        ageOfFatherAtBirth: 'Gen 5:32'
      }
    },
    {// 25
      names: ['Ham'],
      gender: 'male',
      ageOfFatherAtBirth: 500,
      references: {
        names: ['Gen 5:32'],
        gender: 'Gen 6:10',
        ageOfFatherAtBirth: 'Gen 5:32'
      }
    },
    {// 26
      names: ['Japheth'],
      gender: 'male',
      ageOfFatherAtBirth: 500,
      references: {
        names: ['Gen 5:32'],
        gender: 'Gen 6:10',
        ageOfFatherAtBirth: 'Gen 5:32'
      }
    }
  ]
};