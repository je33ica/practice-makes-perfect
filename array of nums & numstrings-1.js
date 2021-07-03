// Given a mixed array of number and string representations of integers,
//  add up the string integers and subtract this from the total
//  of the non-string integers.

const numArray = [9, 3, "7", "3"];

//  function divCon(x){
//     const stringInt = [];
//     const numInt = [];
// let stringInt = x.reduce(function ())

// }
//  function  groupBy(numArray, property) {

//    let  stringInt = [];
//     let numInt = [];
//      return numArray.reduce(function (acc, obj){
//          if ( typeOf  === 'string'
//      })
//  }

function divCon(x) {
  //
  return x.reduce(
    (acc, num) =>
      typeof num === "string" ? (acc -= parseInt(num)) : (acc += num),
    0
  );
}
