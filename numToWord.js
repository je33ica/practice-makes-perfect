//create function that takes a number and converts it to the english word for that number
//min 1 - max 999 - added thousands
//whole numbers, all positive

function numberToWords(num) {
  //creating a dictionary of numbers to words
  const lessThan20 = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
  };

  const doubleToconvert = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  };

  function separateTheNums(num) {
    let split = [...(num + "")].map((n) => +n);
    return split;
  }

  //I made this a global function so it could be re-used
  function doubleDigit(num) {
    //first num
    const singleNum = Math.floor(num / 10);
    //second num
    const doubleNum = num % 10;
    const doubleDigits = doubleToconvert[singleNum] + lessThan20[doubleNum];
    return doubleDigits;
  }

  //i refactored this so it would work for 1000's
  function hundreds(num) {
    let seperateNum = separateTheNums(num);
    const first = lessThan20[seperateNum[0]] + " hundred and ";
    const doubleOfHun = [seperateNum[1]] + [seperateNum[2]];
    //added this ternary becuase it wasnt working with the 'teens'
    let checkForTeens =
      doubleOfHun < 20 ? lessThan20[doubleOfHun] : doubleDigit(doubleOfHun);
    hunConverted = first + checkForTeens;
    return hunConverted;
  }
  function thousands(num) {
    let seperateNum = separateTheNums(num);
    const first = lessThan20[seperateNum[0]] + " thousand, ";
    //removed the 'hundreds' but it is an array- to use the hundreds function i need to pass it a number
    let thouRemoved = seperateNum.slice(1);
    let x = thouRemoved.join("");
    let convertedhun = hundreds(x);
    return first + convertedhun;
  }

  if (num <= 19) {
    console.log(lessThan20[num]);
  } else if (num > 20 && num <= 99) {
    console.log(doubleDigit(num));
  } else if (num > 99 && num <= 999) {
    console.log(hundreds(num));
  } else {
    console.log(thousands(num));
  }
}

numberToWords(17);
numberToWords(415);
numberToWords(9);
numberToWords(4417);
numberToWords(9999);

// //this is a way to seperate the numbers- my first instinct was to parseInt but then we
// //would either have to convert back to nums or rely on type co-ersion-
// //not bad as long as we know thats what we are doing
// var num = 278;
// var digits = [];
// while (num > 0) {
//     digits.push(num % 10);
//     num = Math.trunc(num / 10);
// }num
// digits.reverse();
// console.log(digits);

// //a shorter way to produce an array of single digit
// // an Efficient use of the spread operater - stack overfolow
// const num = 12345;[...num+'']
// //at this point an array of strings is created
// //["1", "2", "3", "4", "5"]
// // we use .map and apply the + to the n - this will convert any type to a number
// // anyVar+'' will work for any datatype and will implicitly convert to string.
// // +anyVar   will convert any type to a number
// .map(n => +n)

// //example of using the + converting to a number
// const words = 'jkk45jih';[...words+""].map(x=> +x)
// (8) [NaN, NaN, NaN, 4, 5, NaN, NaN, NaN]

// const seperateNum = [...(num + "")].map((n) => +n);
// const fir = lessThan20[seperateNum[0]] + " hundred and ";

// return console.log("im the fir", fir, secondOfHun);

// } else if (num > 20 && num <= 99) {

//   const singleNum = Math.floor(num / 10);
//   const doubleNum = num % 10;
//   const doubleToWords = doubleToconvert[doubleNum] + lessThan20[singleNum];

//   return console.log("double fig", doubleToWords);
