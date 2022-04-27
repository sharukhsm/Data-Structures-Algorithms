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

  //push method - add a new item at the end of the array.
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  //pop method - delete the last item in the array.
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
}

const newArray = new MyArray();
newArray.push('hi')
newArray.push('Yo')
newArray.push('!')
newArray.pop();
console.log(newArray) //we get undefined bc there's nothing in the object.