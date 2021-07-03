// The main idea is to count all the occurring characters in a string. 
//If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



function count (str) {  
    var arr = str.split('')
     arr.reduce(function (acc, curr){
      if(curr in acc){
        acc[curr]++
      }else{
        acc[curr] = 
      } return acc
    }, {})
      
    }
var str = "aba"
    function count (str) {
        return str.split('').reduce((counts, char) => {
          counts[char] = (counts[char] || 0) + 1
          return counts;
        }, {})
      }