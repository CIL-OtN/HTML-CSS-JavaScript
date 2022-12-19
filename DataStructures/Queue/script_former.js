// Get the input values from form input

// localStorage.clear()

// Try this one out!!!
// window.onload = function () {

document.querySelector("#arrForm").addEventListener("submit", () => {
  let contentArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  let qc = document.querySelector(".queue-container");
  for (let i = 0; i < contentArray.length; i++) {
    if (qc.hasChildNodes()) {
      qc.removeChild(qc.firstElementChild);
    }
  }

  // Input values as one string
  const inputValues = document.querySelector("#arrInput").value;

  // function isEmpty(str) {
  //   return !str.trim().length;
  // }

  if (inputValues == null || inputValues == "") {
    alert("!Data or space");
    return false;
  }

  // split the one string into array of strings
  const arrOfStrings = inputValues.split(" ");
  // transform this array of strings into array of numbers
  const arrOfNumbers = arrOfStrings.map(Number);

  for (let i = 0; i < arrOfNumbers.length; i++) {
    contentArray.push(arrOfNumbers[i]);
    localStorage.setItem("items", JSON.stringify(contentArray));
  }

  const q = new Queue();

  for (let i = 0; i < contentArray.length; i++) {
    q.enqueue(contentArray[i]);
  }

  console.log(q);
});

const visualizeNode = (visualizeValue) => {
  const div = document.createElement("div");
  const queueValue = document.createTextNode(visualizeValue);
  div.classList.add("node");
  div.appendChild(queueValue);
  document.querySelector(".queue-container").prepend(div);
};

// Queue -> FIFO
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;

    visualizeNode(this.value);
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  enqueueArray(arrOfNumbers) {
    for (let i = 0; i < arrOfNumbers.length; i++) {
      const newNode = new Node(arrOfNumbers[i]);

      if (!this.head) {
        this.head = newNode;
        this.length++;
      } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
      }
    }
  }

  dequeue() {
    let temp = this.head;
    let length = this.length;

    if (this.head === null) return undefined;
    if (this.length === 1) this.head = null;

    while (temp && length > 2) {
      temp = temp.next;
      length--;
    }

    temp.next = null;
    this.length--;

    return temp;
  }

  print(arrOfNumbers) {
    arrOfNumbers.length = this.length;
    for (let i = 0; i < arrOfNumbers.length; i++) {}
  }
}
