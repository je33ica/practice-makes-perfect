// Complete the method/function so that it converts dash/underscore delimited words
//into camel casing. The first word within the output should be
// capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// Test.assertEquals(toCamelCase("the_stealth_warrior"),
// "theStealthWarrior", "toCamelCase('the_stealth_warrior')
// did not return correct value")

var str = "the_stealth_warrior";
function toCamelCase(str) {
  var newS = str.split("-");
  return newS;
}

function toCamelCase(input) {
  let result = "";
  //this line is not needed
  // input = input.toLowerCase()
  for (let i = 0; i < input.length; i++) {
    //use a for loop and the first if block finds the specific '-'/'_'
    //when looping over the input
    if (input[i] === "_" || input[i] === "-") {
      i++;
      //if it does match then we change it to uppercase then add to the
      //empty String result

      result += input[i].toUpperCase();
    } else {
      //if it doesnt match '-'/'_' we then add to result as is
      result += input[i];
    }
  }
  return result;
}

function toCamelCase(input) {
  return input
    .split(/[-_]/)
    .map((e) => e[0].toUpperCase() + e.substr(1).toLowerCase())
    .join("");
}

function toCamelCase(str) {
  var regExp = /[-_]\w/gi;

  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
// 1) The variable regExp is set to equal a regular expression to find
// all word characters (Alphanumeric or underscore), which is the \w
// portion of the regex. But with just that, you can't also highlight
// dashes. Which is why that symbol is proceeded by [-_], making
// an explicit statement that we want to match dashes and underscores.
// And as always, i is to ignore case, and g is for a global search.
// It's finding matches that when console logged to the screen would
//  look like -S match and _s match; whis a
//  (dash || underscore) + a (word character or number).

// 2) The next step is calls for a replace method, which will take the item
// to replace in the first parameter, and in this case a call back function
//  in the second parameter.

// The replace() method returns a new string with some or all matches of a
// pattern replaced by a replacement. The pattern can be a string
// or a RegExp, and the replacement can be a string or a function to
//  be called for each match. If pattern is a string, only the first
//  occurrence will be replaced.

// 3) the charAt() method takes an index:

// An integer between 0 and 1-less-than the length of the string.
//  If the index cannot be converted to the integer or no index is
//   provided, the default is 0...

// Just like an array, we're grabbing the second character at index 1,
//  and transforming that to uppercase to replace the dash or
//  underscore the preceded it.
