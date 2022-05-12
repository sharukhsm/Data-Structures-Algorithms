//First recurring character - Google Question
//Given an array = [2,5,1,2,3,5,1,2,4];
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5];
//It should return undefined

//Bruteforce solution

function checkFirstRecurrChar(input) {
  for (let i = 0; i < input.lenght; i++) {
    for (let j = i + 1; j < input.length; j++ ){
      if (input[i] === input[j]) {
        return input[j];
      }
    }
  }
   return undefined;
} //O(n^2)


function checkFirstRecurrChar2(input){
let map ={};
  for(i = 0; i<input.length; i++){
     // console.log(map[input[i]]);
    //if the key already exist i want to return the item.
    if(map[input[i]] !== undefined){
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
}


console.log(checkFirstRecurrChar2([2,5,5,1,2,3,5,1,2,4])); //O(n)