// Stack -> push -> pop -> LIFO
// Needed only top for push and pop
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    
    // ???
    // return this; // because the push method is a part of that Stack
  }

  pop() {
    if (this.length === 0) return console.log("Liste ist leer!");

    let temp = this.top;
    this.top = this.top.next;
    temp = null;
    this.length--;

    // ???
    return temp;
  }

  print() {
    let current = this.top;
    if (this.length === 0) return console.log("Liste ist leer!");

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  //  size() {} amount of elements in ll
  //   clearList() {}
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);

myStack.pop();
myStack.print();

console.log(myStack);
