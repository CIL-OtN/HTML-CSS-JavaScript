
// Learned from youtube->Web Dev Simplified "How To Implement Linked Lists With Test Driven Development In JavaScript"

const LinkedList = require('./LinkedList')


// const testList_1 = new LinkedList()

// testList_1.insertAtHead(10)
// testList_1.insertAtHead(20)


const testList_2 = LinkedList.fromValues(10, 10, 30, 30, 50);

testList_2.print()

console.log(testList_2.getByIndex(4).value)
