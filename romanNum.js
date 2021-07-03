// var letters = ["a", "b", "b", "d"];

// var nums = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };
// // looking at how map can be used with an object
// var newNums = letters.map((nowNew) => nums[nowNew]);
// console.log(newNums);
var roman = "XVIII"

function solution(roman) {
  // complete the solution by transforming the
  // string roman numeral into an integer

  const memo = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const numerals = roman.split("");
  const numeralValue = numerals.map(numeral => memo[numeral]);
  return numeralValue.reduce((acc, num, i, arr) => {
    if (num < arr[i + 1]) {
      acc -= num;
    } else {
      acc += num;
    }
    
    return acc;
  });
}


function solution(roman){
    const memo = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  return roman.split('').map(a => memo[a]).reduce((a,b) => a < b ? b - a : a + b)
    }