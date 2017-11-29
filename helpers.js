/*
  The functions in here have no purpose specific to this app.
*/

// removes all of an element's childNodes
function removeChilds(el) {
  var last;
  while ((last = el.lastChild)) el.removeChild(last);
}

var verbalize = {
  //  Accepts a singular noun:
  //    getPlural('box')
  //  Returns the noun in plural form:
  //    "boxes"
  //  false positives: "ox", "potato", "goose", "deer", etc.
  getPlural: function getPlural(noun) {
    var lastChar = noun.slice(-1);
    var last2;

    // if ends with 's', 'x', 'z', 'ch', or 'sh', add 'es'
    if ('sxz'.indexOf(lastChar) >= 0 ||
      ['ch', 'sh'].indexOf(last2 = noun.slice(-2)) >= 0) return noun + 'es';

    // else, if ends with 'y', replace with 'ies'
    if (lastChar === 'y') return noun.slice(0, -1) + 'ies';

    // else, if ends with 'fe' or 'lf', replace f+ with 'ves'
    if (['fe', 'lf'].indexOf(last2) >= 0) {
      var fi = noun.lastIndexOf('f');
      return noun.slice(0, fi) + 'ves';
    }

    // else, if ends with 'man' replace with 'men'
    if (noun.slice(-3) === 'man') return noun.slice(0, -3) + 'men';

    // else add 's'
    return noun + 's';
  },

  givePossession: function givePossession(nounStr) {
    return nounStr + (nounStr[nounStr.length - 1] === 's' ? '\'' : '\'s');
  }
};


// val can be a function that returns a value or a value
function fillArray(len, val) {
  var arr = [], i;
  if (typeof val === 'function') {
    for (i = 0; i < len; i++) {
      arr.push(val(i));
    }
  } else {
    for (i = 0; i < len; i++) {
      arr.push(val);
    }
  }
  return arr;
}

// Zip arrays into one
// Example with two arrays: value 0 from a, value 0 from b, value 1 from a, etc.
function zipArrays() {
  var zipped = [];
  var arrays = [].slice.call(arguments);
  for (var valueI = 0; arrays.length > 0; valueI++) {
    for (var arrayI = 0; arrayI < arrays.length; arrayI++) {
      if (arrays[arrayI].length - 1 < valueI) {
        arrays.splice(arrayI, 1);
        continue;
      }
      zipped.push(arrays[arrayI][valueI]);
    }
  }
  return zipped;
}