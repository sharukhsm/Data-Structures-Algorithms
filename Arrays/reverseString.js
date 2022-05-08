// reverse the given string
//Hi My name is Sharukh
//hkurahS si eman yM iH

//My solution
// function reverse(str){
//split method converts string to an array
// const str2 = str.split('')
//   const totalItems = str2.length
//   for(i=totalItems; i>=0; i--){
//     console.log(str2[i])
//   }
 
// }

// reverse('Hi My name is Sharukh')

//Andrei solution 

function reverse1(str){
  //check input - Here we are checking is str is undefined/one character/is it a string.
  
  if (!str || str.length < 2 || typeof str !== 'string'){
    return 'hmm that is not good'
  }
   const backwards = [];
  const totalItems = str.length - 1;
  for(i=totalItems; i>=0; i--){
    backwards.push(str[i]);
  }
  console.log(backwards)
  return backwards.join('')
}

function reverse2(str){
  //split/spread operator method converts string to an array
  //join method converts an array to string
 return str.split('').reverse().join();
}

const reverse3 = str => str.split('').reverse().join();
//here you can also use [...str] instead of str.split method.

console.log(
  reverse3('Hi My name is Sharukh')
)