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
  // const tripleToconvert = {
  //   1: "hundred", //100
  //   2: "thousand", //1000
  //   3: "million", //1000,000
  // };

  function secondDigit(num) {
    //first num
    let singleNum = Math.floor(num / 10);
    //second num
    let doubleNum = num % 10;
    let doubleDigits = doubleToconvert[singleNum] + singleToconvert[doubleNum];
    console.log("im the doubel", doubleDigits);
    return doubleDigits;
  }

  if (num <= 10) {
    let lessThan = singleToconvert[num];
    console.log("less then 10", lessThan);
  } else if (num > 11 && num <= 19) {
    let teens = teenToConvert[num];
    return console.log("teens", teens);

    // } else if (num > 20 && num <= 99) {

    //   let singleNum = Math.floor(num / 10);
    //   let doubleNum = num % 10;
    //   let doubleToWords = doubleToconvert[doubleNum] + singleToconvert[singleNum];

    //   return console.log("double fig", doubleToWords);
  } else if (num > 20 && num <= 99) {
    return console.log("im the second digit", secondDigit(num));
  } else if (num > 99 && num <= 999) {
    let seperateNum = [...(num + "")].map((n) => +n);
    // console.log("im the num", seperateNum);
    let first = singleToconvert[seperateNum[0]] + " hundred and ";
    // console.log("first", first);
    let doubleOfHun = [seperateNum[1]] + [seperateNum[2]];
    // console.log("im the sec", doubleOfHun);
    // console.log("im the twenty", secondDigit(doubleOfHun));
    console.log("total", first + secondDigit(doubleOfHun));
    return;
  }
}

//numberToWords(17);
// numberToWords(44);
//numberToWords(9);
numberToWords(445);

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
// let num = 12345;[...num+'']
// //at this point an array of strings is created
// //["1", "2", "3", "4", "5"]
// // we use .map and apply the + to the n - this will convert any type to a number
// // anyVar+'' will work for any datatype and will implicitly convert to string.
// // +anyVar   will convert any type to a number
// .map(n => +n)

// //example of using the + converting to a number
// let words = 'jkk45jih';[...words+""].map(x=> +x)
// (8) [NaN, NaN, NaN, 4, 5, NaN, NaN, NaN]

// let seperateNum = [...(num + "")].map((n) => +n);
// let fir = singleToconvert[seperateNum[0]] + " hundred and ";

// return console.log("im the fir", fir, secondOfHun);
