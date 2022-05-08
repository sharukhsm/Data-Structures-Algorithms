let user = {
  age: 26,
  name: 'Ryan',
  magic: true,
  scream: function (){
    console.log('ahhhh')
  }
}

console.log(user.age)  //O(1)
user.spell = 'abra ka dabra' //O(1)
user.scream(); //O(1)