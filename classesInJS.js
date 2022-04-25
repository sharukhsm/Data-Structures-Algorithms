//reference type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value:10};
// object1 === object2 => true
// object1 === object3 => false

//context vs scope
//Scope
//We often confuse context with scope, so what's a scope? Scope is created when it sees curly brackets.
//Context
//Context tells you where we are within the object.
//In order to create a new value for this we have to do something like this.
const object4 = {
  a: function() {
    console.log(this);
  }
}