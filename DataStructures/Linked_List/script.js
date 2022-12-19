// LinkedList -> append -> prepend -> push -> pop
// Needed head and tail for append prepend push pop
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addFirst(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  addLast(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  removeFirst() {
    let temp = this.head;

    if (this.length === 0) {
      return console.log("Liste ist leer!");
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return console.log("List ist gelöscht!");
    }

    this.head = this.head.next;
    temp = null;
    this.length--;
  }

  removeLast() {
    let temp = this.head;
    let length = this.length;

    if (this.length === 0) return console.log("Liste ist leer!");

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return console.log("List ist gelöscht!");
    }

    while (length > 2) {
      temp = temp.next;
      length--;
    }

    this.tail = temp;
    this.tail.next = null;
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
  // getIndex siehe in Testdrive linked List
}

let myLinkedList = new LinkedList();

myLinkedList.addLast(10);
myLinkedList.addLast(20);
myLinkedList.addLast(30);
// myLinkedList.addFirst(20);
// myLinkedList.addLast(30);
// myLinkedList.addFirst(40);
// myLinkedList.addLast(50);



myLinkedList.removeFirst();
myLinkedList.removeLast();

myLinkedList.print();

console.log(myLinkedList);




