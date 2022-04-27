class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
//Common methods/actions we have in arrays.
  //get method - 
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

  //Let's add one last method to show why some operations in arrays are O(n).
  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index){
    for(let i=index; i<this.length-1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi')
newArray.push('Yo')
newArray.push('!')
// newArray.pop();
newArray.delete(2)
newArray.push('whatcha');
newArray.push('doing');
console.log(newArray) 
console.log('get method -',newArray.get(0));
