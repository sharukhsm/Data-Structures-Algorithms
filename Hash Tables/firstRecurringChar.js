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


//Optimal solution
function checkFirstRecurrChar2(input){
let map ={};
  for(let i = 0; i<input.length; i++){
     // console.log(map[input[i]]);
    //if the key already exist i want to return the item.
    if(map[input[i]] !== undefined){ //if(map[3]) => map.2. Here we're checking does 2,5,1.. exist as a key. so it's simply saying map.2, bc that doesn't exist we get undefined.
      return input[i];  //return input[3] => 2
    } else {  //Otherwise we'll just add it to our map.
      map[input[i]] = i; //value can be anything we'll just leave it i or true. for the objects key value sake we need to have something as a value.
    }
  }
  return undefined;
}


console.log(checkFirstRecurrChar2([2,5,1,2,3,5,1,2,4])); //O(n)