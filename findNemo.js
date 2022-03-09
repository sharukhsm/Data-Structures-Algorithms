
//Big O & Different types of loops in JS
const nemo = ['nemo'];
const everyone = ['dory','bruce', 'marlin', 'gill', 'john', 'nemo', 'boat', 'nigel', 'marla', 'squirt','hank'];
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

//forEach loop
const findNemo2 = array => {
  array.forEach(fish => {
    if (fish === 'nemo'){
      console.log('Found Nemo2');
    }
  })
}

findNemo2(everyone);

//for of loop
const findNemo3 = array => {
 for(let fish of array){
    if (fish === 'nemo'){
      console.log('Found Nemo3');
    }
  }
}

findNemo3(everyone);