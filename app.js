// init
initReftagger();

var handlePeople = (function() {
  var treeParent = document.getElementById('tree');

  return function handlePeople(data) {
    window.app = data;

    addParents(app.people);

    window.json = JSON.stringify(app, null, 2);
    console.log('run this: copy(json)');

    setupRoutes();
  };
})();
handlePeople(peopleData);


// Reftagger
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


// routing
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


// app-specific helper functions
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