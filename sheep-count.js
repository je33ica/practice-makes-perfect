//Consider an array/list of sheep where some sheep may be missing from their place.
//We need a function that counts the number of
//sheep present in the array (true means present).

let arrayOfSheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
}
const totalTrueValues = anyArray.filter((element) => element === true).length;
// using filte r
function getTotalTrueValues(array) {
  return array.filter((element) => element === true).length;
}
//using boolean
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
// using  for each
function countSheeps(arrayOfSheep) {
  var count = 0;

  arrayOfSheep.forEach(function (sheep) {
    if (sheep) count++;
  });

  return count;
}
