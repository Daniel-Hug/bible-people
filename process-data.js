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