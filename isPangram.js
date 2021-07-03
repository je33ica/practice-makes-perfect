// Write a function that takes in a string and returns true if it’s a pangram or false otherwise.
// Pangram: a sentence that contains every letter in the alphabet.
// Ex:
// Input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
// Output: true
// Input: “Five hexing wizard bots jump quickly”
// Output: true
// Input: “JavaScript is the best”
// Output: false

//soloution 1

alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}

console.log(isPangram("Watch Jeopardy, Alex Trebek’s fun TV quiz game"));
console.log(isPangram("Detect Pangram"));
console.log(isPangram("JavaScript is the best"));
console.log(isPangram("abcd efgh ijkl mnop qrst uvwx yz"));



// soloution 2 
if(x.toLowerCase().includes(String.fromCharCode(i))!==true);


//3rd soloution

function isPangrams(string){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var alphabetArr = alphabetArr.split("");
    var alphabetLetterFound = false;

    for( var i = 0; i < alphabetArr.length; i++){
      var alphabetLetter = alphabetArr[i];

      for ( var j = o; j < string.length; j++){
          var srtLetter = string[j];
          if ( alphabetLetter === srtLetter){       //continue // break - 2 methods that work in loops - will not work for arrays
            continue ; /// what are the next steps 
            //if you get to the end - what do we do as it will return to the next loop
           // return true
          }
      }
       
    }  
}