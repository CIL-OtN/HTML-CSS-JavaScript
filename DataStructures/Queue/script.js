// Queue -> enqueue -> dequeue -> FIFO
// Needed head for enqueue and dequeue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      newNode.next = this.head; // das .next von newNode zeigt auf das komplette Objekt this.head {value: 10, next: null}
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    let temp = this.head;
    let length = this.length;

    if (this.length === 0) return console.log("Liste ist leer!");

    if (this.length === 1) {
      this.head = null;
      this.length--;
      return console.log("List ist gelöscht!");
    }

    while (length > 2) {
      temp = temp.next;
      length--;
    }

    temp.next = null;
    this.length--;
  }

  print() {
    let current = this.head;
    if (this.length === 0) return console.log("Liste ist leer!");

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  //  size() {} amount of elements in ll
  //   clearList() {}
}

let myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);

myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);
// myQueue.enqueue(60);

myQueue.dequeue();
myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.print();

myQueue.print();
console.log(myQueue);
