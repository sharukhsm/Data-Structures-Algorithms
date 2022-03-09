
const nemo = ['nemo'];
const everyone = ['dory','bruce', 'marlin', 'gill', 'john', 'nemo', 'boat', 'nigel', 'marla', 'squirt', 'nemo','hank'];
const large = new Array(100000).fill('nemo');

function findNemo(array){
for(i=0; i<array.length; i++){
  console.log('RUNNING');
  if(array[i] === 'nemo'){
    console.log('Found NEMO');
    break;
  }
}


}

findNemo(everyone);  // Big O notation: O(n) --> Linear time.