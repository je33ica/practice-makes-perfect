// Find Intersection
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples

// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10
var strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
function FindIntersection(strArr) {
  // code goes here

  const numMap = {};
  const numbers = [];
  for (let number of a) {
    numMap[number] = number;
  }
  for (let number of b) {
    if (numMap[number]) {
      numbers.push(number);
    }
  }
  return numbers.length ? numbers.join(",") : false;
}

var strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
function FindIntersection(strArr) {
  //splits the array on it's elements which are both strings
  let arr1 = strArr[0].split(",");
  let arr2 = strArr[1].split(",");
  //The filter() method creates a new array with all elements
  //that pass the test implemented by the provided function.
  let intersectStrings = arr1.filter((value) => arr2.includes(value));

  if (intersectStrings.length === 0) {
    return false;
  } else {
    return intersectStrings.join(",").replace(/\s/g, "");
  }
}

// var array1  = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// var
// var array3 = array2.filter(function(obj) {
//     return array1.indexOf(obj) == -1;
// })
