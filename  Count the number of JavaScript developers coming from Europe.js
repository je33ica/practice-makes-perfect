// You will be given an array of objects (hashes in ruby) representing data about
// developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

function countEuropeanJavascriptDevs(list) {
  var noOfEuropeanJavascriptsDevs = 0;
  for (var i = 0; i < list.length; i++) {
    var currentPerson = list[i];
    // { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    if (
      currentPerson.continent === "Europe" &&
      currentPerson.language === "JavaScript"
    ) {
      noOfEuropeanJavascriptsDevs = noOfEuropeanJavascriptsDevs + 1;
    }
  }
  return noOfEuropeanJavascriptsDevs;
}
countEuropeanJavascriptDevs(list1);

const id = 12;
const count = array.reduce((acc, cur) => (cur.id === id ? ++acc : acc), 0);

var id = "Europe";
const countOccurrences = (list, id) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

console.log(count);

// your awesome code here :)
var count = 0;
for (var i = 0; i < list.length; ++i) {
  var currentPerson = list[i];
  if (
    currentPerson.continent === "Europe" &&
    currentPerson.language === "Javascript"
  ) {
    count++;
  }
}
