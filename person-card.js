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


  var detailItems = [this.renderNames()];

  // years lived
  if (person.yearsLived) detailItems.push({ el: 'li', kids: [
    'Lived ' + person.yearsLived + ' years',
    this.renderReference(references.yearsLived)
  ]});

  detailItems.push(
    this.renderFather(),
    this.renderMother(),
    this.renderSpouses(),
    this.renderChildren()
  );

  var card = dom({ el: 'article', class_card: true, kids: [
    { el: 'h2', kids: [
      { el: 'strong', class_name: true, text: getName(personKey) },
      ' in the Bible'
    ]}, ' ',
    { el: 'strong', _className: 'source-ref', kids: [
      'Includes all data from ' + app.scriptureCovered,
      { el: 'span', _className: 'action-bar', kids: [
        { el: 'a', text: 'Contribute', _className: 'contribute-link', href: 'https://github.com/Daniel-Hug/bible-people' }
      ]}
    ]},
    { el: 'ul', kids: detailItems}
  ]});
  card.classList.add(person.gender);
  return card;
};

Card.prototype.renderNames = function renderNames() {
  var personKey = this.personKey;
  var person = app.people[personKey];
  var references = person.references;
  // nameless
  if (!person.names || person.names.length === 0) return { el: 'li', text: 'No name mentioned' };

  // one or more names
  else {
    var liKids = [
      { el: 'strong', text: 'Names:' },
      ' '
    ];
    liKids.push.apply(liKids, zipArrays(
      person.names,
      references.names.map(this.renderReference, this),
      fillArray(person.names.length - 1, ', ')
    ));
    return { el: 'li', kids: liKids };
  }
};

Card.prototype.renderFather = function renderFather() {
  var personKey = this.personKey;
  var person = app.people[personKey];
  var references = person.references;
  var father = { el: 'li', kids: [
    { el: 'strong', text: 'Father:' }, ' ', person.father !== undefined ? [
      this.renderPersonLink(person.father),
      this.renderReference(references.father)
    ] : 'None specified'
  ]};

  // age of father at birth
  if (person.ageOfFatherAtBirth) {
    father.kids.push(
      ' (' + person.ageOfFatherAtBirth + ' years old at birth',
      this.renderReference(references.ageOfFatherAtBirth),
      ')'
    );
  }

  return father;
};

Card.prototype.renderMother = function renderMother() {
  var personKey = this.personKey;
  var person = app.people[personKey];
  var references = person.references;
  return { el: 'li', kids: [
    { el: 'strong', text: 'Mother:' }, ' ',
    person.mother !== undefined ? [
      this.renderPersonLink(person.mother),
      this.renderReference(references.mother)
    ] : 'None specified'
  ]};
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

Card.prototype.renderSpouses = function renderSpouses() {
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

Card.prototype.renderChildren = function renderChildren() {
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