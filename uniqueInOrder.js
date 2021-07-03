// Implement the function unique_in_order which
//  takes as argument a sequence and returns a list of items
//  without any elements with the same value next to each other
//  and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// var uniqueInOrder=function(iterable){
//     //your code here - remember iterable can be a string or an array
//   }

var iterable = "AAAABBBCCDAABBB";

var uniqueInOrder = (iterable) => {
  //we now have an array of iterable []
  var test = Array.from(iterable);
  // Check for previous item, if not the current one then insert
  console.log(test);
  //arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
  return test.reduce((res, x, index) => {
    if (res[res.length - 1] !== test[index]) {
      res.push(x);
    }

    return res;
  });
};

var uniqueInOrder = function (iterable) {
  var result = [];
  var last;

  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push((last = iterable[i]));
    }
  }

  return result;
};

//a verbose explanation
function uniqueInOrder2(string) {
  var result = [];
  var lastCharacter = undefined;
  var characterLength = string.length;

  for (var stringIndex = 0; stringIndex < characterLength; stringIndex++) {
    var currentCharacter = string[stringIndex];
    if (currentCharacter === lastCharacter) {
      // don't do anything since they are the same
    } else {
      lastCharacter = currentCharacter;
      result.push(currentCharacter);
    }
  }
  return result;
}

function uniqueInOrder(it) {
  // create an empty array to store output
  var result = [];
  // create a variable to hold the last character to check against
  // by not setting anything, the default value is undefined
  var last;
  // create a loop that goes over every character passed in to the function
  // create variable i and set it to 0, this is the starting point
  // check if the current value of i is less than the length of the string to check against
  // when we reach the last line of code in the loop, increase i by one, and restart the loop
  // if i is not less then the string to check, then stop running the loop
  for (var i = 0; i < it.length; i++) {
    // get the current character of the string to check against
    // and compare it to the last checked character
    // if they are not the same then
    if (it[i] !== last) {
      // set last as the current character to check against
      // and add it to the results
      result.push((last = it[i]));
    }
    // do the loop again
  }
  // return the result
  return result;
}
