// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
//this was a fizz buzz test completed on hackerrank - a terrible IDE that made no sense
//hopefully this may help someon with hackerrank

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
  stdin_input += input;
});
process.stdin.on("end", function () {
  main(stdin_input);
});

function FizzBuzz(n) {
  for (i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("Fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}
function fizzBuzz(n) {
  for (i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      process.stdout.write("FizzBuzz");
    } else if (i % 3 === 0) {
      process.stdout.write("Fizz");
    } else if (i % 5 === 0) {
      process.stdout.write("Buzz");
    } else process.stdout.write(i);
  }
}
fizzBuzz(15);
// Write your code here
