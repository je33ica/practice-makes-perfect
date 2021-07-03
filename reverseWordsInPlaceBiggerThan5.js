// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more
// letter words reversed (Just like the name of this Kata). Strings
// passed in will consist of only letters and spaces. Spaces will
// be included only when more than one word is present.
// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

// spinWords( "This is a test") => returns "This is a test"

// spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(){
//     var newWord ='';
//     if (let wordToSpin = spinWords.filter(word => word.length >= 5) ){
//       newWord += wordToSpin.reverse()
//     } return newWord +=
//   }

function spinWords(sentence) {
  //create an empty string to add too
  let result = "";
  //use split to creat an array of words insteas of a string as
  //map won't iterate over a string
  const sentenceArray = sentence.split(" ");
  //map creates a new string but the conditonal is the if statement
  sentenceArray.map((str, i) => {
    //if the str in the array is greater than or equal too 5 then
    if (str.length >= 5) {
      //we split it to single elements, then reverse it, then join to
      //to create the reveresed word
      sentenceArray[i] = str.split("").reverse().join("");
    } else {
      sentenceArray[i] = str;
    }
    //at this point we still have an array of words but not if they have
    // more than 5 they are reversed so we use join to create a single string
    result = sentenceArray.join(" ");
  });
  return result;
}

function spinWords(words) {
  return words.split(" ").map((word) => {
    word.length > 4 ? word.split("").reverse().join("") : word;
  });
}

function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

//.reverse mutates the original array, though, be careful.
function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
//using fat arrow syntax
function spinWords(words) {
  return words
    .split(" ")
    .map((word) => (word.length > 4 ? word.split("").reverse().join("") : word))
    .join(" ");
}
//use fat arrow syntax with braces
function spinWords(words) {
  return words
    .split(" ")
    .map((word) => {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

function spinWords(words) {
  return words
    .split(" ")
    .map((w) => (w.length < 5 ? w : w.split("").reverse().join("")))
    .join(" ");
}

function spinWords(sentence) {
  const sentenceArray = sentence.split(" ");

  sentenceArray.map((word) => {});
}

function spinWords(words) {
  let wordSplit = words.split(" ");
  wordSplit.map((word) => {
    word.length > 4 ? word.split("").reverse().join("") : word.join(" ");
  });
}
