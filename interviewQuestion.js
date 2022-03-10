// ---Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.
//For Example:
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','i'];
//should return false.
//-----------
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','x'];
//should return true.    -----//

// Inputs/outputs
//2 parameters - arrays - No size limit
//output - return True/false

//1. O(n^2) -Brute force approach, Most likey you wouldn't code this on an interview.
// const firstArray = ['a', 'b', 'c', 'x'];
// const secondArray = ['d','e','x'];

// function compareArray(arr1, arr2){
//   for(let i=0; i<arr1.length; i++){
//     for( let j=0; j<arr2.length; j++){
//       if(arr1[i] === arr2[j]){
//         return true;
//       }
//     }
//   } 
//  return false;
// }

// //O(a*b) - Time complexity
// //O(1).  - Space complexity
// console.log(compareArray(firstArray, secondArray));



// //2. Optimizing the brute force solution to O(a+b).
// const firstArray = ['a', 'b', 'c', 'x'];
// const secondArray = ['d','e','a'];
// function compareArray2(arr1, arr2){
//   //loop through first array and create object where properties === items in the array.

// let map = {};
//   for(let i=0; i< arr1.length; i++){
//     if(!map[arr1[i]]){   //map[i] is false, ! to make it true.
//       const item = arr1[i]; //const item = a
//       console.log(item);
//       map[item] = true;  // a = true, is stored in map obj.
//     }
//   }
// console.log(map);

//loop through second array and check if item in second array exists on created owasd
//   for(let j=0; j<arr2.length; j++){
//    if(map[arr2[j]]){
//      return true;
//    }  
//   }
//  return false;
// }

// //O(a+b) - Time complexity, cuz two seperate for loops.
// //O(a) - Space complexity.
// console.log(compareArray2(firstArray, secondArray));



//3. Js built in method for the above code for more readability.
const firstArray = ['a', 'b', 'c', 'x'];
const secondArray = ['d','e','m'];

function compareArray3(arr1, arr2){
  return arr1.some(item => arr2.includes(item));
}

console.log(compareArray3(firstArray, secondArray));
