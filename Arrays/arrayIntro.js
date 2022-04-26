const strings = ['a', 'b', 'c', 'd'];

// 4*4 = 16 bytes of storage

//push
strings.push('e') //O(1)

//Pop
strings.pop();
strings.pop();

//unshift
strings.unshift('x') //O(n) because the indices is being changed, it has to loop through the whole array, hence O(n).

//splice
strings.splice(2,0, 'alpha') //O(n/2)=>O(n). We looped through half the array, but remember our rules of Big O, we remove constants and we simplify to just O(n). 

console.log(strings)