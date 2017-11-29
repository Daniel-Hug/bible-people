

/*
  helper function declarations
*/

function Card(personKey) {
  var card = this;
  this.personKey = personKey;
  this.longReferenceNumbersByString = {};
  this.card = card.render();
  this.renderReferenceList();

  var cardParent = document.querySelector('#card-parent');
  removeChilds(cardParent);
  dom({
    el: cardParent,
    kids: [this.card]
  });
}

Card.prototype.render = function renderCard() {
  var personKey = this.personKey;
  var person = app.people[personKey];
  var references = person.references;


  var detailItems = [];

  // nameless
  if (!person.names) detailItems.push({ el: 'li', text: 'No name mentioned' });

  // more than one name
  else if (person.names.length > 1) {
    var liKids = [
      { el: 'strong', text: 'Other names:' },
      ' '
    ];
    liKids.push(zipArrays(
      person.names.slice(1),
      references.names.slice(1).map(this.renderReference, this),
      fillArray(person.names.length - 2, ', ')
    ));
    detailItems.push({ el: 'li', kids: liKids });
  }

  // years lived
  if (person.yearsLived) detailItems.push({ el: 'li', kids: [
    'Lived ' + person.yearsLived + ' years',
    this.renderReference(references.yearsLived)
  ]});

  // father
  var father = { el: 'li', kids: [
    { el: 'strong', text: 'Father:' }, ' ', person.father !== undefined ? [
      this.renderPersonLink(person.father),
      this.renderReference(references.father)
    ] : 'None specified'
  ]};
  detailItems.push(father);

  // age of father at birth
  if (person.ageOfFatherAtBirth) {
    father.kids.push(
      ' (' + person.ageOfFatherAtBirth + ' years old at birth',
      this.renderReference(references.ageOfFatherAtBirth),
      ')'
    );
  }

  // mother
  var mother = { el: 'li', kids: [
    { el: 'strong', text: 'Mother:' }, ' ',
    person.mother !== undefined ? [
      this.renderPersonLink(person.mother),
      this.renderReference(references.mother)
    ] : 'None specified'
  ]};

  detailItems.push(mother, this.renderSpousesItem(), this.renderChildrenItem())


  var card = dom({ el: 'article', class_card: true, kids: [
    { el: 'h2', kids: [
      { el: 'strong', class_name: true, text: getName(personKey) },
      ' in the Bible'
    ]}, ' ',
    { el: 'strong', _className: 'source-ref', text: 'Includes all data from ' + app.scriptureCovered },
    { el: 'ul', kids: detailItems}
  ]});
  card.classList.add(person.gender);
  return card;
};

Card.prototype.renderReference = function renderReference(referenceString) {
  var card = this;
  if (referenceString.length > 12) {
    var longRefCount = Object.keys(this.longReferenceNumbersByString).length;
    if (!this.longReferenceNumbersByString[referenceString]) {
      this.longReferenceNumbersByString[referenceString] = ++longRefCount;
    }
    var sup = dom({ el: 'sup', kids: ['[', {
      el: 'a', _href: location.hash + '#ref-' + longRefCount, text: longRefCount
    }, ']'] });
    
    return sup;
  }
  var sup = dom({ el: 'sup', text: '[' + referenceString + ']' });
  return sup;
};

Card.prototype.renderReferenceList = function renderReferenceList() {
  var people = app.people;
  var personKey = this.personKey;
  var person = people[personKey];
  var references = person.references;
  var card = this.card;

  var longReferenceParent = dom({ el: 'ol' });
  dom({ el: card, kids: [longReferenceParent]})

  for (var referenceString in this.longReferenceNumbersByString) {
    var referenceNum = this.longReferenceNumbersByString[referenceString];
    dom({ el: longReferenceParent, kids: [{
      el: 'li', _id: location.hash.slice(1) + '#ref-' + referenceNum, text: referenceString
    }]});
  }
};

Card.prototype.renderSpousesItem = function renderSpousesItem() {
  var person = app.people[this.personKey];
  var references = person.references;
  var spouseName = person.gender === 'male' ? 'Wife' :
    (person.gender === 'female' ? 'Husband' : 'Spouse');
  var spouseName = !person.spouses || person.spouses.length <= 1 ?
    spouseName :
    verbalize.getPlural(spouseName);

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
      this.renderPersonLink(person.spouses[0]),
      this.renderReference(references.spouses[0])
    );
  } else {
    spousesItem.kids.push(
      person.spouses.length + ' specified',
      { el: 'ul', kids: person.spouses.map(function(indexInPeople, indexInSpouses) {
        return { el: 'li', kids: [
          this.renderPersonLink(indexInPeople),
          this.renderReference(references.spouses[indexInSpouses])
        ]};
      }, this)}
    );
  }

  return spousesItem;
};

Card.prototype.renderChildrenItem = function renderChildrenItem() {
  var person = app.people[this.personKey];
  var references = person.references;
  var numSpecified = (person.children || []).length;

  var childrenItem = { el: 'li', kids: [
    { el: 'strong', text: 'Children:' },
    ' ' + (person.children ? (person.children.length + ' specified' || 'None') : 'None specified')
  ]};
  if (person.otherChildren) {
    childrenItem.kids.push(' (some went undistinguished', this.renderReference(references.otherChildren), ')');
  }
  var ul;
  if (numSpecified > 0 || person.otherChildren) {
    ul = { el: 'ul', kids: []};
    childrenItem.kids.push(ul);
  }
  if (numSpecified > 0) {
    [].push.apply(ul.kids, person.children.map(function(childKey, indexInChildren) {
      return { el: 'li', kids: [
        this.renderPersonLink(childKey),
        this.renderReference(references.children[indexInChildren])
      ]};
    }, this));
  }
  return childrenItem;
};

Card.prototype.renderPersonLink = function renderPersonLink(personKey) {
  return dom({ el: 'a', text: getName(personKey), _href: '#!/' + personKey });
};

function getName(personKey) {
  var person = app.people[personKey];
  if (person.names) return person.names[0];
  if (person.title) return person.title;
  if (person.gender && person.spouses.length === 1) {
    var spouse = app.people[person.spouses[0]];
    if (spouse.names) {
      var title = verbalize.givePossession(spouse.names[0]) + ' ' +
      (person.gender === 'male' ? 'husband' : 'wife');
      return title;
    }
  }
}



// init

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
initReftagger();

var handlePeople = (function() {
  var treeParent = document.getElementById('tree');

  return function handlePeople(data) {
    window.app = data;

    addParents(app.people);

    window.json = JSON.stringify(app, null, 2);
    console.log('run this: copy(json)');

    // graphTree(getGraphData(people))

    // if ( (personKey = getRoute()) ) {
    //   displayCard(personKey);
    // }

    setupRoutes();
  };
})();
handlePeople(peopleData);

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
}

function routeToPerson(personKey, refNum) {
  if (personKey && app.people[personKey]) {
    new Card(personKey);
    document.title = getName(personKey) + ' in the Bible';
    if (refTagger.tag) refTagger.tag();
  } else if (!personKey) {
    app.router.navigate('!/adam');
  } else {
    console.error('Invalid person key: ' + personKey + '.');
  }
}

function setupRoutes() {
  var root = null;
  var useHash = true;
  app.router = new Navigo(root, useHash);


  app.router
  .on(/!\/([^/#]+)(?:#ref-(\d+))?/, routeToPerson)
  .notFound(function () {
    app.router.navigate('!/adam');
  })
  .resolve();
}

function validatePersonData(personKey) {
  var person = app.people[personKey];
  var references = person.references;
  if (typeof references !== 'object') {
    console.error(personKey + ': missing references object');
  }

  var referenceProperties = ['names', 'gender', 'spouses', 'children', 'father', 'mother', 'ageOfFatherAtBirth', 'yearsLived', 'otherChildren', 'title'];
  var personProperties = referenceProperties.concat('references');

  // ensure the reference object has the same properties as the person object
  if ('' + Object.keys(references).concat('references').sort() !== '' + Object.keys(person).sort()) {
    console.error(personKey + ': properties don\'t match those in reference object');
  }

  // go through properties in the person object
  for (var prop in person) {
    // ensure each is allowed
    if (personProperties.indexOf(prop) < 0) {
      console.error(personKey + ': property ' + prop + ' on person not allowed');
    }

    // ensure each has a corresponding reference property to a string or array
    if (
      prop !== 'references' &&
      typeof references[prop] !== 'string' &&
      !Array.isArray(references[prop])
    ) {
      console.error(personKey + ': property ' + prop + ' needs a reference');
    }

    // ensure the reference for each is an array iff it's an array itself
    if (Array.isArray(person[prop])) {
      if (!Array.isArray(references[prop])) {
        console.error(personKey + ': property ' + prop + ' needs references to match');
      }
    }
    else if (Array.isArray(references[prop])) {
      console.error(personKey + ': property ' + prop + ' needs references to match');
    }
  }

  // ensure right number of references for arrays
  var arrayProperties = ['children', 'names', 'spouses'];
  arrayProperties.forEach(function(arrayProperty) {
    if (person[arrayProperty] && person[arrayProperty].length !== references[arrayProperty].length) {
      console.error(personKey + ': ' + arrayProperty + ' references do not line up');
    }
  });
}