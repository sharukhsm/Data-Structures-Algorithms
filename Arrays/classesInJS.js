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

// instantiation
class Player{
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hi I'm ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player{
  constructor(name, type){
    super(name,type)
    console.log('wizard', this);
  }
  play(){
    console.log(`WEEEE I'm a ${this.type}`);
  }
}
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
