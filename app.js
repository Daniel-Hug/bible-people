var handlePeople = (function() {
  var treeParent = document.getElementById('tree');

  return function handlePeople(data) {
    window.app = data;
    var people = app.people;

    addParents(people);
    // graphTree(getGraphData(people))

    // if ( (personKey = getRoute()) ) {
    //   displayCard(personKey);
    // }

    setupRoutes();
  };
})();


/*ajax.get({
  url: 'people.json',
  success: handlePeople
});*/
initReftagger();
handlePeople(peopleData);

function setupRoutes() {
  var root = null;
  var useHash = true;
  var router = new Navigo(root, useHash);

  router
  .on('*', function (params) {
    var hash = location.hash.slice(1);
    var personKey = hash.slice(1);
    if (personKey && app.people[personKey]) {
      displayCard(personKey);
      document.title = getName(personKey) + ' in the Bible';
      if (refTagger.tag) refTagger.tag();
    } else if (!personKey) {
      location.hash = '#!adam';
    } else {
      console.error('Invalid person key: ' + personKey + '.');
    }
  })
  .resolve();
}




/*
  helper function declarations
*/

function displayCard(personKey) {
  var cardParent = document.querySelector('#card-parent');
  removeChilds(cardParent);
  dom({
    el: cardParent,
    kids: [renderCard(personKey)]
  });
}

function renderCard(personKey) {
  var people = app.people;
  var person = people[personKey];
  var references = person.references;


  var detailItems = [];
  if (!person.names) detailItems.push({ el: 'li', text: 'No name mentioned' });

  if (person.yearsLived) detailItems.push({ el: 'li', kids: [
    'Lived ' + person.yearsLived + ' years',
    renderReference(references.yearsLived)
  ]});

  var father = { el: 'li', kids: [
    { el: 'strong', text: 'Father:' }, ' ', person.father !== undefined ? [
      renderPersonLink(person.father),
      renderReference(references.father)
    ] : 'None specified'
  ]};
  detailItems.push(father);

  if (person.ageOfFatherAtBirth) {
    father.kids.push(
      ' (' + person.ageOfFatherAtBirth + ' years old at birth',
      renderReference(references.ageOfFatherAtBirth),
      ')'
    );
  }

  var mother = { el: 'li', kids: [
    { el: 'strong', text: 'Mother:' }, ' ',
    person.mother !== undefined ? [
      renderPersonLink(person.mother),
      renderReference(references.mother)
    ] : 'None specified'
  ]};

  detailItems.push(mother, renderSpousesItem(personKey), renderChildrenItem(personKey))


  var card = dom({ el: 'article', class_card: true, kids: [
    { el: 'h2', kids: [
      { el: 'strong', class_name: true, text: getName(personKey) },
      ' in the Bible'
    ]}, ' ',
    { el: 'strong', _className: 'source-ref', text: 'Data from ' + app.scriptureCovered },
    { el: 'ul', kids: detailItems}
  ]});
  card.classList.add(person.gender);
  return card;
}

function renderReference(referenceString) {
  var sup = dom({ el: 'sup', text: '[' + referenceString + ']' });
  return sup;
}

function renderSpousesItem(personKey) {
  var person = app.people[personKey];
  var references = person.references;
  var spouseName = !person.spouses || person.spouses.length <= 1 ?
    person.gender === 'male' ? 'Wife' : 'Husband' :
    person.gender === 'male' ? 'Wives' : 'Husbands';

  var spousesItem = { el: 'li', kids: [
    { el: 'strong', text: spouseName + ':' }, ' '
  ]}
  if (!person.spouses) {
    spousesItem.kids.push('None specified');
  }
  else if (person.spouses.length === 0) {
    spousesItem.kids.push('None');
  }
  else if (person.spouses.length === 1) {
    spousesItem.kids.push(
      renderPersonLink(person.spouses[0]),
      renderReference(references.spouses[0])
    );
  } else {
    spousesItem.kids.push(
      person.spouses.length + ' specified',
      { el: 'ul', kids: person.spouses.map(function(indexInPeople, indexInSpouses) {
        return { el: 'li', kids: [
          renderPersonLink(indexInPeople),
          renderReference(references.spouses[indexInSpouses])
        ]};
      })}
    );
  }

  return spousesItem;
}

function renderChildrenItem(personKey) {
  var person = app.people[personKey];
  var references = person.references;
  var numSpecified = (person.children || []).length;

  var childrenItem = { el: 'li', kids: [
    { el: 'strong', text: 'Children:' },
    ' ' + (person.children ? (person.children.length + ' specified' || 'None') : 'None specified')
  ]};
  if (person.otherChildren) {
    childrenItem.kids.push(' (some went undistinguished', renderReference(references.otherChildren), ')');
  }
  var ul;
  if (numSpecified > 0 || person.otherChildren) {
    ul = { el: 'ul', kids: []};
    childrenItem.kids.push(ul);
  }
  if (numSpecified > 0) {
    [].push.apply(ul.kids, person.children.map(function(indexInPeople, indexInChildren) {
      return { el: 'li', kids: [
        renderPersonLink(indexInPeople),
        renderReference(references.children[indexInChildren])
      ]};
    }));
  }
  return childrenItem;
}

function getName(personKey) {
  var person = app.people[personKey];
  if (person.names) return person.names[0];
  if (person.title) return person.title;
  if (person.gender && person.spouses.length === 1) {
    var spouse = app.people[person.spouses[0]];
    if (spouse.names) {
      var title = givePossession(spouse.names[0]) + ' ' +
      (person.gender === 'male' ? 'husband' : 'wife');
      return title;
    }
  }
}

function renderPersonLink(personKey) {
  return dom({ el: 'a', text: getName(personKey), _href: '#!' + personKey });
}

// removes all of an element's childNodes
function removeChilds(el) {
  var last;
  while ((last = el.lastChild)) el.removeChild(last);
}

function validatePersonData(personKey) {
  var parent = app.people[personKey];
  var references = parent.references;
  var name = getName(personKey);
  // ensure properties in reference object match those in the person object
  var personProperties = ['references', 'names', 'gender', 'spouses', 'children', 'father', 'mother', 'ageOfFatherAtBirth', 'yearsLived', 'otherChildren', 'title'];
  for (var prop in parent) {
    if (personProperties.indexOf(prop) < 0) {
      console.error(name + ': property ' + prop + ' on person not allowed');
    }
    if (
      prop !== 'references' &&
      typeof references[prop] !== 'string' &&
      !Array.isArray(references[prop])
    ) {
      console.error(name + ': property ' + prop + ' needs a reference');
    }
    if (Array.isArray(parent[prop])) {
      if (Array.isArray(references[prop])) {
        if (parent[prop].length !== references[prop].length) {
          console.error(name + ': property ' + prop + ' needs references to match'); 
        }
      } else {
        console.error(name + ': property ' + prop + ' needs references to match');
      }
    }
    else if (Array.isArray(references[prop])) {
      console.error(name + ': property ' + prop + ' needs references to match');
    }
  }

  var referenceProperties = ['names', 'gender', 'spouses', 'children', 'father', 'mother', 'ageOfFatherAtBirth', 'yearsLived', 'otherChildren', 'title'];
  for (prop in references) {
    if (referenceProperties.indexOf(prop) < 0) {
      console.error(name + ': property ' + prop + ' not allowed on reference object');
    }
    if (typeof parent[prop] === 'undefined') {
      console.error(name + ': reference for property ' + prop + ' not found in person');
    }
  }

  // ensure right number of references for children
  if (parent.children && parent.children.length !== references.children.length) {
    console.error(name + ': children references do not line up');
  }
  // ensure right number of references for names
  if (parent.names && parent.names.length !== references.names.length) {
    console.error(name + ': names references do not line up');
  }
  // ensure right number of references for spouses
  if (parent.spouses && parent.spouses.length !== references.spouses.length) {
    console.error(name + ': spouses references do not line up');
  }
}

function addParents(people) {
  // loop through people
  for (var personKey in people) {
    var parent = people[personKey];
    var references = parent.references;
    validatePersonData(personKey);
    // loop through children
    (parent.children || []).forEach(function(childKey) {
      // add father and mother properties to each child
      var relation = parent.gender === 'male' ? 'father' : 'mother';
      people[childKey][relation] = personKey;

      // copy parent's respective child reference as the father or mother reference for the child
      var siblingIndex = parent.children.indexOf(childKey);
      people[childKey].references[relation] = references.children[siblingIndex];
    });
  }

  window.json = JSON.stringify(app, null, 2);
  console.log('run this: copy(json)');
}

function haveSameProperties(a, b) {
  return JSON.stringify(getProperties(a)) === JSON.stringify(getProperties(b));
}

function getProperties(obj) {
  var newObj = {};
  for (var key in obj) {
    newObj[key] = true;
  }
  return newObj;
}

function initReftagger() {
  // config
  window.refTagger = {
      settings: {
          noSearchClassNames: ['editor-content', 'navbar']
      }
  };

  // create <script>
  var refTaggerScript = document.createElement('script');
  refTaggerScript.src = '//api.reftagger.com/v2/RefTagger.js';

  // append <script>
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(refTaggerScript, firstScript);

  // call refTagger.tag() whenever references are added to page
}

function getGraphData(people) {
  var graphData = people.map(function(person, index) {
    var obj = {
      key: index,
      n: person.name,
      s: person.gender === 'male' ? 'M' : 'F'
    };
    if (person.mother) obj.m = person.mother;
    if (person.father) obj.f = person.father;
    return obj;
  });
  return graphData;
}

function graphTree(graphData) {
  init();

  // n: name, s: sex, m: mother, f: father, ux: wife, vir: husband, a: attributes/markers
  setupDiagram(myDiagram, [
    { key: 0, n: "Aaron", s: "M", m:-10, f:-11, ux: 1, a: ["C", "F", "K"] },
    { key: 1, n: "Alice", s: "F", m:-12, f:-13, a: ["B", "H", "K"] },
    { key: 2, n: "Bob", s: "M", m: 1, f: 0, ux: 3, a: ["C", "H", "L"] },
    { key: 3, n: "Barbara", s: "F", a: ["C"] },
    { key: 4, n: "Bill", s: "M", m: 1, f: 0, ux: 5, a: ["E", "H"] },
    { key: 5, n: "Brooke", s: "F", a: ["B", "H", "L"] },
    { key: 6, n: "Claire", s: "F", m: 1, f: 0, a: ["C"] },
    { key: 7, n: "Carol", s: "F", m: 1, f: 0, a: ["C", "I"] },
    { key: 8, n: "Chloe", s: "F", m: 1, f: 0, vir: 9, a: ["E"] },
    { key: 9, n: "Chris", s: "M", a: ["B", "H"] },
    { key: 10, n: "Ellie", s: "F", m: 3, f: 2, a: ["E", "G"] },
    { key: 11, n: "Dan", s: "M", m: 3, f: 2, a: ["B", "J"] },
    { key: 12, n: "Elizabeth", s: "F", vir: 13, a: ["J"] },
    { key: 13, n: "David", s: "M", m: 5, f: 4, a: ["B", "H"] },
    { key: 14, n: "Emma", s: "F", m: 5, f: 4, a: ["E", "G"] },
    { key: 15, n: "Evan", s: "M", m: 8, f: 9, a: ["F", "H"] },
    { key: 16, n: "Ethan", s: "M", m: 8, f: 9, a: ["D", "K"] },
    { key: 17, n: "Eve", s: "F", vir: 16, a: ["B", "F", "L"] },
    { key: 18, n: "Emily", s: "F", m: 8, f: 9 },
    { key: 19, n: "Fred", s: "M", m: 17, f: 16, a: ["B"] },
    { key: 20, n: "Faith", s: "F", m: 17, f: 16, a: ["L"] },
    { key: 21, n: "Felicia", s: "F", m: 12, f: 13, a: ["H"] },
    { key: 22, n: "Frank", s: "M", m: 12, f: 13, a: ["B", "H"] },

    // "Aaron"'s ancestors
    { key: -10, n: "Paternal Grandfather", s: "M", m: -33, f: -32, ux: -11, a: ["A", "S"] },
    { key: -11, n: "Paternal Grandmother", s: "F", a: ["E", "S"] },
    { key: -32, n: "Paternal Great", s: "M", ux: -33, a: ["F", "H", "S"] },
    { key: -33, n: "Paternal Great", s: "F", a: ["S"] },
    { key: -40, n: "Great Uncle", s: "M", m: -33, f: -32, a: ["F", "H", "S"] },
    { key: -41, n: "Great Aunt", s: "F", m: -33, f: -32, a: ["B", "I", "S"] },
    { key: -20, n: "Uncle", s: "M", m: -11, f: -10, a: ["A", "S"] },

    // "Alice"'s ancestors
    { key: -12, n: "Maternal Grandfather", s: "M", ux: -13, a: ["D", "L", "S"] },
    { key: -13, n: "Maternal Grandmother", s: "F", m: -31, f: -30, a: ["H", "S"] },
    { key: -21, n: "Aunt", s: "F", m: -13, f: -12, a: ["C", "I"] },
    { key: -22, n: "Uncle", s: "M", ux: -21 },
    { key: -23, n: "Cousin", s: "M", m: -21, f: -22 },
    { key: -30, n: "Maternal Great", s: "M", ux: -31, a: ["D", "J", "S"] },
    { key: -31, n: "Maternal Great", s: "F", m: -50, f: -51, a: ["B", "H", "L", "S"] },
    { key: -42, n: "Great Uncle", s: "M", m: -30, f: -31, a: ["C", "J", "S"] },
    { key: -43, n: "Great Aunt", s: "F", m: -30, f: -31, a: ["E", "G", "S"] },
    { key: -50, n: "Maternal Great Great", s: "F", ux: -51, a: ["D", "I", "S"] },
    { key: -51, n: "Maternal Great Great", s: "M", a: ["B", "H", "S"] }

  // focus on this person
  ], 4);
}

function givePossession(nounStr) {
  return nounStr + (nounStr[nounStr.length - 1] === 's' ? '\'' : '\'s');
}