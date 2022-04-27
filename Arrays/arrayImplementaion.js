class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
//Common methods/actions we have in arrays.
  get(index){
    //here this refers to the data in the constructor fn.
    return this.data[index]
  }

  //push method
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  
}

const newArray = new MyArray();
newArray.push('hi')
console.log(newArray) //we get undefined bc there's nothing in the object.