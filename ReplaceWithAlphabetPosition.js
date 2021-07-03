// In this kata you are required to, given a string, replace every
//letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// function alphabetPosition(text) {

//   var alphabetPosition  {
//         a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
//         l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
//         u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
//     }

// }
// return text;

var text = "The sunset sets at twelve o' clock.";
function alphabetPosition(text) {
  //create new variable to all lowercase and then use
  //regex to replace all the non a-z characters with nothing.
  const words = text.toLowerCase().replace(/[^a-z]/g, "");
  //text now will be
  return [...words].map((v) => v.charCodeAt() - 96);
}

// First we take the text and transform it into lowercase to get rid
//  of the capital letters using text.toLowerCase() and then we
//   do .replace(/[^a-z]/g,"") to replace all the non a-z characters
//    with nothing.
// The next step is to spread the string out into an array using
// [...words] and then mapping it to get the ascii character code
// of each a-z character.
// Since a = 97 and b = 98 etc we will subtract 96 so that we get
//  a = 1 and b = 2 etc (the position of the letters in the alphabet)

function alphabetPosition(text) {
  // transfrom the text to lower case and replace all the non
  //[^...]: NOT ONE of the character, e.g., [^0-9] matches any non-digit.
  //[^a-z] match any non a-z /g is gloably flag so all of them and with "" - nothing
  const words = text.toLowerCase().replace(/[^a-z]/g, "");
  //spread out into an array
  return (
    [...words]
      //The charCodeAt() method returns an integer between 0 and 65535
      //representing the UTF-16 code unit at the given index.
      //the alpahbet starts at 96 in the UTF-16 so we subtract 96 to
      //return the num of the alphabet
      //between 1-26 as requested
      .map((v) => v.charCodeAt() - 96)
      .toString()
      .replace(/,/g, " ")
  );
}

function alphabetPosition(text) {
  const words = text.toLowerCase().replace(/[^a-z]/g, "");
  //spread out into an array
  return (
    [...words]
      .map((v) => v.charCodeAt() - 96)
      //ue join instead of to string and replace characters, specify how
      //you want to the array
      .join(" ")
  );
}

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}
