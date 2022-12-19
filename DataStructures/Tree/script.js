// Tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree
class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) return undefined;

      if (newNode.value < temp.value) {
        // points the left edge to null (open)?
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        // points the right edge to null (open)?
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return console.log("Liste ist leer!");

    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
        // Hier wird die while-Schleife noch gestartet! 
      } else if (value > temp.value) {        
        temp = temp.right;
        // Hier wird die while-Schleife noch gestartet! 
      } else {
        console.log("Gefunden!");
        // Return true wenn die Schle
        return true;
      }
    }

    console.log("Nicht vorhanden!");
    return false;
  }
}

let myTree = new BST();

// myTree.insert(47);
// myTree.insert(21);
// myTree.insert(76);
// myTree.insert(18);
// myTree.insert(52);
// myTree.insert(82);
// myTree.contains(2);
// console.log(myTree);

