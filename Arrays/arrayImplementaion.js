class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
//Common methods/actions we have in arrays.
  get(index){
    return this.data[index]
  }
}

const newArray = new MyArray();
console.log(newArray.get(0)) //we get undefined bc there's nothing in the object.