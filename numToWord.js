//     input -> 123
//     output -> one hundred and twenty three

//create function takes a number
//converts to english word for that number
//max 999
//1- 9
//whole numbers
//all positive

// create function one input
//returns a string - output

function numberToWords(num) {
  //creating a dictionary of numbers to words
  const singleToconvert = {
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
  };
  const teenToConvert = {
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
    4: "fourty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninty",
  };

  //i realised that i didnt need this- it was adding an extra step
  // const tripleToconvert = {
  //   1: "hundred", //100
  //   2: "thousand", //1000
  //   3: "million", //1000,000
  // };
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
    const doubleDigits =
      doubleToconvert[singleNum] + singleToconvert[doubleNum];
    return doubleDigits;
  }

  //i refactored this so it would work for 1000's
  function hundreds(num) {
    let seperateNum = separateTheNums(num);
    const first = singleToconvert[seperateNum[0]] + " hundred and ";
    const doubleOfHun = [seperateNum[1]] + [seperateNum[2]];
    hunConverted = first + doubleDigit(doubleOfHun);
    return hunConverted;
  }
  function thousands(num) {
    let seperateNum = separateTheNums(num);
    const first = singleToconvert[seperateNum[0]] + " thousand, ";
    //removed the 'hundreds' but it is an array- to use the hundreds function i need to pass it a number
    let thouRemoved = seperateNum.slice(1);
    let x = thouRemoved.join("");
    let convertedhun = hundreds(x);
    return first + convertedhun;
  }

  if (num <= 10) {
    const lessThan10 = singleToconvert[num];
    console.log(lessThan10);
  } else if (num > 11 && num <= 19) {
    const teens = teenToConvert[num];
    console.log(teens);
  } else if (num > 20 && num <= 99) {
    console.log(doubleDigit(num));
  } else if (num > 99 && num <= 999) {
    console.log(hundreds(num));
  } else {
    console.log(thousands(num));
  }
}

numberToWords(17);
numberToWords(44);
numberToWords(9);
numberToWords(445);
numberToWords(5234);

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
// const fir = singleToconvert[seperateNum[0]] + " hundred and ";

// return console.log("im the fir", fir, secondOfHun);

// } else if (num > 20 && num <= 99) {

//   const singleNum = Math.floor(num / 10);
//   const doubleNum = num % 10;
//   const doubleToWords = doubleToconvert[doubleNum] + singleToconvert[singleNum];

//   return console.log("double fig", doubleToWords);
