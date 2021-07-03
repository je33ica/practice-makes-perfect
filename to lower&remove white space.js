// Write a function that takes in a string and and returns the string with white space 
// removed and all letters changed to lowercase .
//  This is a common task when a variable, routeName, etc needs to be created from user input.
// Ex:

// Output: tammergalal

// Output: favoritetreeever

// Output: oneword
//let Input = "one word"
//let Input = "favorite tree    ever"
let userInput = "Tammer Galal"

let inputToLower = function(userInput){

   //input.toLowerCase().replace(/\s/g, '');

    userInput.toLowerCase().split(" ").join(""); 
   // input.replace(/ /g, "").toLowerCase; 
    console.log(inputToLower);

}