// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
var arr = [1, -4, 7, 12];
function positiveSum(arr) {
  // set a variable to 0
  var sum = 0;
  //use a for loop to iterate over the array for the length of the array
  for (var i = 0; i < arr.length; i++) {
    //use if statement, to determine if the num in the arr is positive, > 0 - greater than 0
    //if it is then add to sum
    if (arr[i] > 0) {
      // 1st loop 1,is greater than 0 so is added to sum
      //2nd loop -4 doesnt enter block becuase it doesnt pass the first if
      // 3rd
      sum += arr[i];
    }
  }
  return sum;
}

function positiveSum(arr) {
  //use reduce on elements compare a and use a ternary
  //if b the nect element being compare to a is above 0 then add b to a
  // if not then add 0
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

function positiveSum(arr) {
  //use filter on arr if the element is gretaer than 0
  return (
    arr
      .filter((x) => x > 0)
      //then add the elements together
      .reduce((a, b) => a + b, 0)
  );
}
