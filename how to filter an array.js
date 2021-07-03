// Write a function that takes a single argument, a number "num1",
// and returns a function.
// This returned function should take two arguments
// and returns true if "num1" is between these two numbers

function firstFunc(num1) {
  return function secondFunc(num2, num3) {
    return (num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3);
  };
}

firstFunc(8)(10, 12);

// return true if in range, otherwise false
function firstFunc(num1) {
  function secondFunc(min, max) {
    return (num1 - min) * (num1 - max) <= 0;
  }
}
