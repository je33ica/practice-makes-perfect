// Write a function that takes 2 parameters - the first is an array, 
// the second is an element that may or may not be in the array. 
// Without using any built in array methods, 
// return true if the element is in the array or false otherwise. 
// . 
// Ex:
// Input:
 
// Output: true
// Input: 

// Output: false

const findMatchEl = function(a,b){
    if (a == b )
    return true

};
a = [1,2,3]; b = 1
a = [1,2,3]; b = 4
const findMatchEl = function(a,b){
   const doesMatch = a.includes(b);
    return true
};

const searchArray = (arrToSearch, elemToFind) => {
    for(var i = 0; i <arrToSearch.length; i++){
        if (arrToSearch[i]===elemToFind) {
            return true;
                }
    }
    return false ;
};

const searchArray = (arrToSearch, elemToFind) =>
arrToSearch.includes((elem) => elem === elemToFind);
