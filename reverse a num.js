// Write a function that takes in a number and
//  reverses the order of the digits.
// Ex:
// Input: 1234
// Output:4321
// Input: 1201
// Output:1021
// Input: 4
// Output: 4

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));

const reverseNum = num => num.toString().split("").reverse().join("");
const reverseNum = num => parseInt(num.toString().split("").reverse().join(""));


const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)