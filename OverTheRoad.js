//Task;
// You've just moved into a perfectly straight street with exactly n identical
//  houses on either side of the road. Naturally, you would like to find out the
//  house number of the people on the other side of the street.
//  The street looks something like this:

//  Street
// 1|   |6
// 3|   |4
// 5|   |2

// Evens increase on the right; odds decrease on the left.
//  House numbers start at 1 and increase without gaps.
// When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// function overTheRoad(address, n) {
//   //code here

//   //n is the num of streets which always has an opposite so * 2
//   //3 * 2 = 6
//   //because we need to  consdier the index start at 0 we need to code for this
//   //this is creating a whole lot of thing - a for loop maybe better
//   //   const nums = Array.from(Array(n++).keys());
//   //   console.log(nums);

//   const odd = [];
//   const even = [];

//   for (i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//       even.push(i);
//     } else odd.push(i);
//   }
//   const revEven = even.reverse();
//   //   console.log("odd", odd);
//   //   console.log("revEven", revEven);
//   //   console.log(odd.indexOf(address));
//   const oppositeIndex = odd.indexOf(address);
//   //   console.log("oppINde", oppositeIndex);
//   //   console.log(revEven.indexOf(address));
//   //find index num of adress
//   const indexToFind =
//     oppositeIndex > 0 ? oppositeIndex : revEven.indexOf(address);
//   console.log("the Index", indexToFind);
// }
// return
// overTheRoad(6, 10);

function overTheRoad(address, n) {
  var maximumPlusMinimum = n * 2 + 1;
  // maximum adress is double n
  // the opposing of Maximum is always 1
  // adress + opposingAddress = n * 2 + 1
  // the opposite address is the maximumPlusMinimum minus your address
  return maximumPlusMinimum - address;
}
