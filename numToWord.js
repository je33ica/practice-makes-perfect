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
  //     1: "hundred",
  //     2: "thousand",
  // need to consider
  //   };

  if (num <= 10) {
    let lessThan = singleToconvert[num];
    console.log("less then 10", lessThan);
  } else if (num > 11 && num <= 19) {
    let teens = teenToConvert[num];
    return console.log("teens", teens);
  } else if (num > 20 && num <= 99) {
    let singleNum = Math.floor(num / 10);
    let doubleNum = num % 10;
    let doubleToWords = doubleToconvert[doubleNum] + singleToconvert[singleNum];

    return console.log("double fig", doubleToWords);
  }
  return num;
}

numberToWords(17);
numberToWords(23);
numberToWords(9);
