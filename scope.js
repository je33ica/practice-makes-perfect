// Without running the code, determine what the following code will output and why:

var a = 1;
function outer() {
  var a = 2;
  function inner() {
    a++;
    console.log("im the inner", a); // will log
    var a = 5;
  }
  inner();
}
outer();
