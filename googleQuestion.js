// [1,2,3,9] sum = 8
// [1,2,4,4] sum = 8

//Naive 
function hasPairWithSum(arr, sum){
  for(i=0; i<arr.length-1; i++){
    for(j=0; j<arr.length-1; j++){
      console.log(arr[i], arr[j]);
      if(arr[i] + arr[j] === sum){
     return true;
      }
    }
  }
  return false;
}

//O(n^2) - Time complexity.

console.log(hasPairWithSum([6,2,3,4],9));
